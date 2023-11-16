// ==UserScript==
// @name         ajaxHooker
// @author       cxxjackie
// @version      1.3.3
// @supportURL   https://bbs.tampermonkey.net.cn/thread-3284-1-1.html
// ==/UserScript==

var ajaxHooker = (function () {
  "use strict";
  const win = window.unsafeWindow || document.defaultView || window;
  const toString = Object.prototype.toString;
  const getDescriptor = Object.getOwnPropertyDescriptor;
  const hookFns = [];
  const realXhr = win.XMLHttpRequest;
  const realFetch = win.fetch;
  const resProto = win.Response.prototype;
  const xhrResponses = ["response", "responseText", "responseXML"];
  const fetchResponses = ["arrayBuffer", "blob", "formData", "json", "text"];
  const fetchInitProps = [
    "method",
    "headers",
    "body",
    "mode",
    "credentials",
    "cache",
    "redirect",
    "referrer",
    "referrerPolicy",
    "integrity",
    "keepalive",
    "signal",
    "priority",
  ];
  const xhrAsyncEvents = ["readystatechange", "load", "loadend"];
  let filter;
  function emptyFn() {}
  function errorFn(err) {
    console.error(err);
  }
  function defineProp(obj, prop, getter, setter) {
    Object.defineProperty(obj, prop, {
      configurable: true,
      enumerable: true,
      get: getter,
      set: setter,
    });
  }
  function readonly(obj, prop, value = obj[prop]) {
    defineProp(obj, prop, () => value, emptyFn);
  }
  function writable(obj, prop, value = obj[prop]) {
    Object.defineProperty(obj, prop, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: value,
    });
  }
  function shouldFilter(type, url, method, async) {
    return (
      filter &&
      !filter.find((obj) => {
        switch (true) {
          case obj.type && obj.type !== type:
          case toString.call(obj.url) === "[object String]" &&
            !url.includes(obj.url):
          case toString.call(obj.url) === "[object RegExp]" &&
            !obj.url.test(url):
          case obj.method && obj.method.toUpperCase() !== method.toUpperCase():
          case "async" in obj && obj.async !== async:
            return false;
        }
        return true;
      })
    );
  }
  function parseHeaders(obj) {
    const headers = {};
    switch (toString.call(obj)) {
      case "[object String]":
        for (const line of obj.trim().split(/[\r\n]+/)) {
          const parts = line.split(/\s*:\s*/);
          if (parts.length !== 2) continue;
          const lheader = parts[0].toLowerCase();
          if (lheader in headers) {
            headers[lheader] += ", " + parts[1];
          } else {
            headers[lheader] = parts[1];
          }
        }
        return headers;
      case "[object Headers]":
        for (const [key, val] of obj) {
          headers[key] = val;
        }
        return headers;
      case "[object Object]":
        return { ...obj };
      default:
        return headers;
    }
  }
  class AHRequest {
    constructor(request) {
      this.request = request;
      this.requestClone = { ...this.request };
      this.response = {};
    }
    waitForHookFns() {
      return Promise.all(
        hookFns.map((fn) => {
          try {
            return Promise.resolve(fn(this.request)).then(emptyFn, errorFn);
          } catch (err) {
            console.error(err);
          }
        })
      );
    }
    waitForResponseFn() {
      try {
        return Promise.resolve(this.request.response(this.response)).then(
          emptyFn,
          errorFn
        );
      } catch (err) {
        console.error(err);
        return Promise.resolve();
      }
    }
    waitForRequestKeys() {
      if (this.reqPromise) return this.reqPromise;
      const requestKeys = ["url", "method", "abort", "headers", "data"];
      return (this.reqPromise = this.waitForHookFns().then(() =>
        Promise.all(
          requestKeys.map((key) =>
            Promise.resolve(this.request[key]).then(
              (val) => (this.request[key] = val),
              (e) => (this.request[key] = this.requestClone[key])
            )
          )
        )
      ));
    }
    waitForResponseKeys() {
      if (this.resPromise) return this.resPromise;
      const responseKeys =
        this.request.type === "xhr" ? xhrResponses : fetchResponses;
      return (this.resPromise = this.waitForResponseFn().then(() =>
        Promise.all(
          responseKeys.map((key) => {
            const descriptor = getDescriptor(this.response, key);
            if (descriptor && "value" in descriptor) {
              return Promise.resolve(descriptor.value).then(
                (val) => (this.response[key] = val),
                (e) => delete this.response[key]
              );
            } else {
              delete this.response[key];
            }
          })
        )
      ));
    }
  }
  class XhrEvents {
    constructor() {
      this.events = {};
    }
    add(type, event) {
      if (type.startsWith("on")) {
        this.events[type] = typeof event === "function" ? event : null;
      } else {
        this.events[type] = this.events[type] || new Set();
        this.events[type].add(event);
      }
    }
    remove(type, event) {
      if (type.startsWith("on")) {
        this.events[type] = null;
      } else {
        this.events[type] && this.events[type].delete(event);
      }
    }
    _sIP() {
      this.ajaxHooker_isStopped = true;
    }
    trigger(e) {
      if (e.ajaxHooker_isTriggered || e.ajaxHooker_isStopped) return;
      e.stopImmediatePropagation = this._sIP;
      this.events[e.type] &&
        this.events[e.type].forEach((fn) => {
          !e.ajaxHooker_isStopped && fn.call(e.target, e);
        });
      this.events["on" + e.type] &&
        this.events["on" + e.type].call(e.target, e);
      e.ajaxHooker_isTriggered = true;
    }
    clone() {
      const eventsClone = new XhrEvents();
      for (const type in this.events) {
        if (type.startsWith("on")) {
          eventsClone.events[type] = this.events[type];
        } else {
          eventsClone.events[type] = new Set([...this.events[type]]);
        }
      }
      return eventsClone;
    }
  }
  const xhrMethods = {
    readyStateChange(e) {
      if (e.target.readyState === 4) {
        e.target.dispatchEvent(
          new CustomEvent("ajaxHooker_responseReady", { detail: e })
        );
      } else {
        e.target.__ajaxHooker.eventTrigger(e);
      }
    },
    asyncListener(e) {
      e.target.__ajaxHooker.eventTrigger(e);
    },
    setRequestHeader(header, value) {
      const ah = this.__ajaxHooker;
      ah.originalXhr.setRequestHeader(header, value);
      if (this.readyState !== 1) return;
      if (header in ah.headers) {
        ah.headers[header] += ", " + value;
      } else {
        ah.headers[header] = value;
      }
    },
    addEventListener(...args) {
      const ah = this.__ajaxHooker;
      if (xhrAsyncEvents.includes(args[0])) {
        ah.proxyEvents.add(args[0], args[1]);
      } else {
        ah.originalXhr.addEventListener(...args);
      }
    },
    removeEventListener(...args) {
      const ah = this.__ajaxHooker;
      if (xhrAsyncEvents.includes(args[0])) {
        ah.proxyEvents.remove(args[0], args[1]);
      } else {
        ah.originalXhr.removeEventListener(...args);
      }
    },
    open(method, url, async = true, ...args) {
      const ah = this.__ajaxHooker;
      ah.url = url.toString();
      ah.method = method.toUpperCase();
      ah.async = !!async;
      ah.openArgs = args;
      ah.headers = {};
      for (const key of xhrResponses) {
        ah.proxyProps[key] = {
          get: () => {
            const val = ah.originalXhr[key];
            ah.originalXhr.dispatchEvent(
              new CustomEvent("ajaxHooker_readResponse", {
                detail: { key, val },
              })
            );
            return val;
          },
        };
      }
      return ah.originalXhr.open(method, url, ...args);
    },
    sendFactory(realSend) {
      return function (data) {
        const ah = this.__ajaxHooker;
        const xhr = ah.originalXhr;
        if (xhr.readyState !== 1) return realSend.call(xhr, data);
        ah.eventTrigger = (e) => ah.proxyEvents.trigger(e);
        if (shouldFilter("xhr", ah.url, ah.method, ah.async)) {
          xhr.addEventListener(
            "ajaxHooker_responseReady",
            (e) => {
              ah.eventTrigger(e.detail);
            },
            { once: true }
          );
          return realSend.call(xhr, data);
        }
        const request = {
          type: "xhr",
          url: ah.url,
          method: ah.method,
          abort: false,
          headers: ah.headers,
          data: data,
          response: null,
          async: ah.async,
        };
        if (!ah.async) {
          const requestClone = { ...request };
          hookFns.forEach((fn) => {
            try {
              toString.call(fn) === "[object Function]" && fn(request);
            } catch (err) {
              console.error(err);
            }
          });
          for (const key in request) {
            if (toString.call(request[key]) === "[object Promise]") {
              request[key] = requestClone[key];
            }
          }
          xhr.open(request.method, request.url, ah.async, ...ah.openArgs);
          for (const header in request.headers) {
            xhr.setRequestHeader(header, request.headers[header]);
          }
          data = request.data;
          xhr.addEventListener(
            "ajaxHooker_responseReady",
            (e) => {
              ah.eventTrigger(e.detail);
            },
            { once: true }
          );
          realSend.call(xhr, data);
          if (toString.call(request.response) === "[object Function]") {
            const response = {
              finalUrl: xhr.responseURL,
              status: xhr.status,
              responseHeaders: parseHeaders(xhr.getAllResponseHeaders()),
            };
            for (const key of xhrResponses) {
              defineProp(
                response,
                key,
                () => {
                  return (response[key] = ah.originalXhr[key]);
                },
                (val) => {
                  if (toString.call(val) !== "[object Promise]") {
                    delete response[key];
                    response[key] = val;
                  }
                }
              );
            }
            try {
              request.response(response);
            } catch (err) {
              console.error(err);
            }
            for (const key of xhrResponses) {
              ah.proxyProps[key] = { get: () => response[key] };
            }
          }
          return;
        }
        const req = new AHRequest(request);
        req.waitForRequestKeys().then(() => {
          if (request.abort) return;
          xhr.open(request.method, request.url, ...ah.openArgs);
          for (const header in request.headers) {
            xhr.setRequestHeader(header, request.headers[header]);
          }
          data = request.data;
          xhr.addEventListener(
            "ajaxHooker_responseReady",
            (e) => {
              if (typeof request.response !== "function")
                return ah.eventTrigger(e.detail);
              req.response = {
                finalUrl: xhr.responseURL,
                status: xhr.status,
                responseHeaders: parseHeaders(xhr.getAllResponseHeaders()),
              };
              for (const key of xhrResponses) {
                defineProp(
                  req.response,
                  key,
                  () => {
                    return (req.response[key] = ah.originalXhr[key]);
                  },
                  (val) => {
                    delete req.response[key];
                    req.response[key] = val;
                  }
                );
              }
              const resPromise = req.waitForResponseKeys().then(() => {
                for (const key of xhrResponses) {
                  if (!(key in req.response)) continue;
                  ah.proxyProps[key] = {
                    get: () => {
                      const val = req.response[key];
                      xhr.dispatchEvent(
                        new CustomEvent("ajaxHooker_readResponse", {
                          detail: { key, val },
                        })
                      );
                      return val;
                    },
                  };
                }
              });
              xhr.addEventListener("ajaxHooker_readResponse", (e) => {
                const descriptor = getDescriptor(req.response, e.detail.key);
                if (!descriptor || "get" in descriptor) {
                  req.response[e.detail.key] = e.detail.val;
                }
              });
              const eventsClone = ah.proxyEvents.clone();
              ah.eventTrigger = (event) =>
                resPromise.then(() => eventsClone.trigger(event));
              ah.eventTrigger(e.detail);
            },
            { once: true }
          );
          realSend.call(xhr, data);
        });
      };
    },
  };
  function fakeXhr() {
    const xhr = new realXhr();
    let ah = xhr.__ajaxHooker;
    let xhrProxy = xhr;
    if (!ah) {
      const proxyEvents = new XhrEvents();
      ah = xhr.__ajaxHooker = {
        headers: {},
        originalXhr: xhr,
        proxyProps: {},
        proxyEvents: proxyEvents,
        eventTrigger: (e) => proxyEvents.trigger(e),
        toJSON: emptyFn, // Converting circular structure to JSON
      };
      xhrProxy = new Proxy(xhr, {
        get(target, prop) {
          try {
            if (target === xhr) {
              if (prop in ah.proxyProps) {
                const descriptor = ah.proxyProps[prop];
                return descriptor.get ? descriptor.get() : descriptor.value;
              }
              if (typeof xhr[prop] === "function") return xhr[prop].bind(xhr);
            }
          } catch (err) {
            console.error(err);
          }
          return target[prop];
        },
        set(target, prop, value) {
          try {
            if (target === xhr && prop in ah.proxyProps) {
              const descriptor = ah.proxyProps[prop];
              descriptor.set
                ? descriptor.set(value)
                : (descriptor.value = value);
            } else {
              target[prop] = value;
            }
          } catch (err) {
            console.error(err);
          }
          return true;
        },
      });
      xhr.addEventListener("readystatechange", xhrMethods.readyStateChange);
      xhr.addEventListener("load", xhrMethods.asyncListener);
      xhr.addEventListener("loadend", xhrMethods.asyncListener);
      for (const evt of xhrAsyncEvents) {
        const onEvt = "on" + evt;
        ah.proxyProps[onEvt] = {
          get: () => proxyEvents.events[onEvt] || null,
          set: (val) => proxyEvents.add(onEvt, val),
        };
      }
      for (const method of [
        "setRequestHeader",
        "addEventListener",
        "removeEventListener",
        "open",
      ]) {
        ah.proxyProps[method] = { value: xhrMethods[method] };
      }
    }
    ah.proxyProps.send = { value: xhrMethods.sendFactory(xhr.send) };
    return xhrProxy;
  }
  function hookFetchResponse(response, req) {
    for (const key of fetchResponses) {
      response[key] = () =>
        new Promise((resolve, reject) => {
          if (key in req.response) return resolve(req.response[key]);
          resProto[key].call(response).then((res) => {
            req.response[key] = res;
            req.waitForResponseKeys().then(() => {
              resolve(key in req.response ? req.response[key] : res);
            });
          }, reject);
        });
    }
  }
  function fakeFetch(url, options = {}) {
    if (!url) return realFetch.call(win, url, options);
    let init = { ...options };
    if (toString.call(url) === "[object Request]") {
      init = {};
      for (const prop of fetchInitProps) init[prop] = url[prop];
      Object.assign(init, options);
      url = url.url;
    }
    url = url.toString();
    init.method = init.method || "GET";
    init.headers = init.headers || {};
    if (shouldFilter("fetch", url, init.method, true))
      return realFetch.call(win, url, init);
    const request = {
      type: "fetch",
      url: url,
      method: init.method.toUpperCase(),
      abort: false,
      headers: parseHeaders(init.headers),
      data: init.body,
      response: null,
      async: true,
    };
    const req = new AHRequest(request);
    return new Promise((resolve, reject) => {
      req
        .waitForRequestKeys()
        .then(() => {
          if (request.abort)
            return reject(new DOMException("aborted", "AbortError"));
          init.method = request.method;
          init.headers = request.headers;
          init.body = request.data;
          realFetch.call(win, request.url, init).then((response) => {
            if (typeof request.response === "function") {
              req.response = {
                finalUrl: response.url,
                status: response.status,
                responseHeaders: parseHeaders(response.headers),
              };
              hookFetchResponse(response, req);
              response.clone = () => {
                const resClone = resProto.clone.call(response);
                hookFetchResponse(resClone, req);
                return resClone;
              };
            }
            resolve(response);
          }, reject);
        })
        .catch((err) => {
          console.error(err);
          resolve(realFetch.call(win, url, init));
        });
    });
  }
  win.XMLHttpRequest = fakeXhr;
  Object.keys(realXhr).forEach((key) => (fakeXhr[key] = realXhr[key]));
  fakeXhr.prototype = realXhr.prototype;
  win.fetch = fakeFetch;
  return {
    hook: (fn) => hookFns.push(fn),
    filter: (arr) => {
      filter = Array.isArray(arr) && arr;
    },
    protect: () => {
      readonly(win, "XMLHttpRequest", fakeXhr);
      readonly(win, "fetch", fakeFetch);
    },
    unhook: () => {
      writable(win, "XMLHttpRequest", realXhr);
      writable(win, "fetch", realFetch);
    },
  };
})();
