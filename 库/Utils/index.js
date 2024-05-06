/// <reference path="./core.d.ts" />
/**
 * 方便好用的工具类
 * @copyright GPL-3.0-only
 * @author WhiteSev
 **/
(function (global, factory) {
  /**
   * 不使用define
   * typeof define === "function" && define.amd
   * define(factory)
   */
  if (typeof exports === "object" && typeof module !== "undefined") {
    /* 适用于NodeJs或typeScript */
    module.exports = factory();
  } else {
    global = typeof globalThis !== "undefined" ? globalThis : global || self;
    /* 适用于浏览器中，且this对象是window，如果this是其它，那么会在其它对象下注册对象 */
    global.Utils = factory(global.Utils);
  }
})(typeof window !== "undefined" ? window : this, function (AnotherUtils) {
  /** @type {Utils} */
  const Utils = {};
  Utils.version = "2024-5-6";

  Utils.assign = function (target = {}, source = {}, isAdd = false) {
    if (Array.isArray(source)) {
      let canTraverse = source.filter((item) => {
        return typeof item === "object";
      });
      if (!canTraverse.length) {
        return source;
      }
    }
    if (isAdd) {
      for (const sourceKeyName in source) {
        const targetKeyName = sourceKeyName;
        let targetValue = target[targetKeyName];
        let sourceValue = source[sourceKeyName];
        if (
          sourceKeyName in target &&
          typeof sourceValue === "object" &&
          !Utils.isDOM(sourceValue)
        ) {
          /* 源端的值是object类型，且不是元素节点 */
          target[sourceKeyName] = Utils.assign(targetValue, sourceValue, isAdd);
          continue;
        }
        target[sourceKeyName] = sourceValue;
      }
    } else {
      for (const targetKeyName in target) {
        if (targetKeyName in source) {
          let targetValue = target[targetKeyName];
          let sourceValue = source[targetKeyName];
          if (
            typeof sourceValue === "object" &&
            !Utils.isDOM(sourceValue) &&
            Object.keys(sourceValue).length
          ) {
            /* 源端的值是object类型，且不是元素节点 */
            target[targetKeyName] = Utils.assign(
              targetValue,
              sourceValue,
              isAdd
            );
            continue;
          }
          /* 直接赋值 */
          target[targetKeyName] = sourceValue;
        }
      }
    }

    return target;
  };

  Utils.asyncReplaceAll = async function (string, pattern, asyncFn) {
    if (typeof string !== "string") {
      throw new TypeError("string必须是字符串");
    }
    if (typeof asyncFn !== "function") {
      throw new TypeError("asyncFn必须是函数");
    }
    let reg;
    if (typeof pattern === "string") {
      reg = new RegExp(Utils.parseStringToRegExpString(pattern), "g");
    } else if (pattern instanceof RegExp) {
      if (!pattern.global) {
        throw new TypeError("pattern必须是全局匹配");
      }
      reg = new RegExp(pattern);
    } else {
      throw new TypeError("pattern必须是正则对象");
    }
    let result = [];
    let match;
    let lastIndex = 0;
    while ((match = reg.exec(string)) !== null) {
      /* 异步获取匹配对应的字符串 */
      const item = asyncFn(match[0]);
      /* 获取该匹配项和上一个匹配项的中间的字符串 */
      const prefix = string.slice(lastIndex, match.index);
      lastIndex = match.index + match[0].length;
      result.push(item);
      result.push(prefix);
    }
    result.push(string.slice(lastIndex));
    /* 等待所有异步完成 */
    result = await Promise.all(result);
    return result.join("");
  };

  Utils.ajaxHooker = function () {
    "use strict";
    const version = "1.4.0";
    const hookInst = {
      hookFns: [],
      filters: [],
    };
    const win = window.unsafeWindow || document.defaultView || window;
    let winAh = win.__ajaxHooker;
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
    const getType = {}.toString.call.bind({}.toString);
    const getDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
    const emptyFn = () => {};
    const errorFn = (e) => console.error(e);
    function isThenable(obj) {
      return (
        obj &&
        ["object", "function"].includes(typeof obj) &&
        typeof obj.then === "function"
      );
    }
    function catchError(fn, ...args) {
      try {
        const result = fn(...args);
        if (isThenable(result)) return result.then(null, errorFn);
        return result;
      } catch (err) {
        console.error(err);
      }
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
    function parseHeaders(obj) {
      const headers = {};
      switch (getType(obj)) {
        case "[object String]":
          for (const line of obj.trim().split(/[\r\n]+/)) {
            const [header, value] = line.split(/\s*:\s*/);
            if (!header) break;
            const lheader = header.toLowerCase();
            headers[lheader] =
              lheader in headers ? `${headers[lheader]}, ${value}` : value;
          }
          break;
        case "[object Headers]":
          for (const [key, val] of obj) {
            headers[key] = val;
          }
          break;
        case "[object Object]":
          return { ...obj };
      }
      return headers;
    }
    function stopImmediatePropagation() {
      this.ajaxHooker_isStopped = true;
    }
    class SyncThenable {
      then(fn) {
        fn && fn();
        return new SyncThenable();
      }
    }
    class AHRequest {
      constructor(request) {
        this.request = request;
        this.requestClone = { ...this.request };
      }
      shouldFilter(filters) {
        const { type, url, method, async } = this.request;
        return (
          filters.length &&
          !filters.find((obj) => {
            switch (true) {
              case obj.type && obj.type !== type:
              case getType(obj.url) === "[object String]" &&
                !url.includes(obj.url):
              case getType(obj.url) === "[object RegExp]" && !obj.url.test(url):
              case obj.method &&
                obj.method.toUpperCase() !== method.toUpperCase():
              case "async" in obj && obj.async !== async:
                return false;
            }
            return true;
          })
        );
      }
      waitForRequestKeys() {
        const requestKeys = ["url", "method", "abort", "headers", "data"];
        if (!this.request.async) {
          win.__ajaxHooker.hookInsts.forEach(({ hookFns, filters }) => {
            if (this.shouldFilter(filters)) return;
            hookFns.forEach((fn) => {
              if (getType(fn) === "[object Function]")
                catchError(fn, this.request);
            });
            requestKeys.forEach((key) => {
              if (isThenable(this.request[key]))
                this.request[key] = this.requestClone[key];
            });
          });
          return new SyncThenable();
        }
        const promises = [];
        win.__ajaxHooker.hookInsts.forEach(({ hookFns, filters }) => {
          if (this.shouldFilter(filters)) return;
          promises.push(
            Promise.all(hookFns.map((fn) => catchError(fn, this.request))).then(
              () =>
                Promise.all(
                  requestKeys.map((key) =>
                    Promise.resolve(this.request[key]).then(
                      (val) => (this.request[key] = val),
                      () => (this.request[key] = this.requestClone[key])
                    )
                  )
                )
            )
          );
        });
        return Promise.all(promises);
      }
      waitForResponseKeys(response) {
        const responseKeys =
          this.request.type === "xhr" ? xhrResponses : fetchResponses;
        if (!this.request.async) {
          if (getType(this.request.response) === "[object Function]") {
            catchError(this.request.response, response);
            responseKeys.forEach((key) => {
              if (
                "get" in getDescriptor(response, key) ||
                isThenable(response[key])
              ) {
                delete response[key];
              }
            });
          }
          return new SyncThenable();
        }
        return Promise.resolve(
          catchError(this.request.response, response)
        ).then(() =>
          Promise.all(
            responseKeys.map((key) => {
              const descriptor = getDescriptor(response, key);
              if (descriptor && "value" in descriptor) {
                return Promise.resolve(descriptor.value).then(
                  (val) => (response[key] = val),
                  () => delete response[key]
                );
              } else {
                delete response[key];
              }
            })
          )
        );
      }
    }
    const proxyHandler = {
      get(target, prop) {
        const descriptor = getDescriptor(target, prop);
        if (
          descriptor &&
          !descriptor.configurable &&
          !descriptor.writable &&
          !descriptor.get
        )
          return target[prop];
        const ah = target.__ajaxHooker;
        if (ah && ah.proxyProps) {
          if (prop in ah.proxyProps) {
            const pDescriptor = ah.proxyProps[prop];
            if ("get" in pDescriptor) return pDescriptor.get();
            if (typeof pDescriptor.value === "function")
              return pDescriptor.value.bind(ah);
            return pDescriptor.value;
          }
          if (typeof target[prop] === "function")
            return target[prop].bind(target);
        }
        return target[prop];
      },
      set(target, prop, value) {
        const descriptor = getDescriptor(target, prop);
        if (
          descriptor &&
          !descriptor.configurable &&
          !descriptor.writable &&
          !descriptor.set
        )
          return true;
        const ah = target.__ajaxHooker;
        if (ah && ah.proxyProps && prop in ah.proxyProps) {
          const pDescriptor = ah.proxyProps[prop];
          pDescriptor.set
            ? pDescriptor.set(value)
            : (pDescriptor.value = value);
        } else {
          target[prop] = value;
        }
        return true;
      },
    };
    class XhrHooker {
      constructor(xhr) {
        const ah = this;
        Object.assign(ah, {
          originalXhr: xhr,
          proxyXhr: new Proxy(xhr, proxyHandler),
          resThenable: new SyncThenable(),
          proxyProps: {},
          proxyEvents: {},
        });
        xhr.addEventListener("readystatechange", (e) => {
          if (
            ah.proxyXhr.readyState === 4 &&
            ah.request &&
            typeof ah.request.response === "function"
          ) {
            const response = {
              finalUrl: ah.proxyXhr.responseURL,
              status: ah.proxyXhr.status,
              responseHeaders: parseHeaders(
                ah.proxyXhr.getAllResponseHeaders()
              ),
            };
            const tempValues = {};
            for (const key of xhrResponses) {
              try {
                tempValues[key] = ah.originalXhr[key];
              } catch (err) {}
              defineProp(
                response,
                key,
                () => {
                  return (response[key] = tempValues[key]);
                },
                (val) => {
                  delete response[key];
                  response[key] = val;
                }
              );
            }
            ah.resThenable = new AHRequest(ah.request)
              .waitForResponseKeys(response)
              .then(() => {
                for (const key of xhrResponses) {
                  ah.proxyProps[key] = {
                    get: () => {
                      if (!(key in response)) response[key] = tempValues[key];
                      return response[key];
                    },
                  };
                }
              });
          }
          ah.dispatchEvent(e);
        });
        xhr.addEventListener("load", (e) => ah.dispatchEvent(e));
        xhr.addEventListener("loadend", (e) => ah.dispatchEvent(e));
        for (const evt of xhrAsyncEvents) {
          const onEvt = "on" + evt;
          ah.proxyProps[onEvt] = {
            get: () => ah.proxyEvents[onEvt] || null,
            set: (val) => ah.addEvent(onEvt, val),
          };
        }
        for (const method of [
          "setRequestHeader",
          "addEventListener",
          "removeEventListener",
          "open",
          "send",
        ]) {
          ah.proxyProps[method] = { value: ah[method] };
        }
      }
      toJSON() {} // Converting circular structure to JSON
      addEvent(type, event) {
        if (type.startsWith("on")) {
          this.proxyEvents[type] = typeof event === "function" ? event : null;
        } else {
          if (typeof event === "object" && event !== null)
            event = event.handleEvent;
          if (typeof event !== "function") return;
          this.proxyEvents[type] = this.proxyEvents[type] || new Set();
          this.proxyEvents[type].add(event);
        }
      }
      removeEvent(type, event) {
        if (type.startsWith("on")) {
          this.proxyEvents[type] = null;
        } else {
          if (typeof event === "object" && event !== null)
            event = event.handleEvent;
          this.proxyEvents[type] && this.proxyEvents[type].delete(event);
        }
      }
      dispatchEvent(e) {
        e.stopImmediatePropagation = stopImmediatePropagation;
        defineProp(e, "target", () => this.proxyXhr);
        this.proxyEvents[e.type] &&
          this.proxyEvents[e.type].forEach((fn) => {
            this.resThenable.then(
              () => !e.ajaxHooker_isStopped && fn.call(this.proxyXhr, e)
            );
          });
        if (e.ajaxHooker_isStopped) return;
        const onEvent = this.proxyEvents["on" + e.type];
        onEvent && this.resThenable.then(onEvent.bind(this.proxyXhr, e));
      }
      setRequestHeader(header, value) {
        this.originalXhr.setRequestHeader(header, value);
        if (this.originalXhr.readyState !== 1) return;
        const headers = this.request.headers;
        headers[header] =
          header in headers ? `${headers[header]}, ${value}` : value;
      }
      addEventListener(...args) {
        if (xhrAsyncEvents.includes(args[0])) {
          this.addEvent(args[0], args[1]);
        } else {
          this.originalXhr.addEventListener(...args);
        }
      }
      removeEventListener(...args) {
        if (xhrAsyncEvents.includes(args[0])) {
          this.removeEvent(args[0], args[1]);
        } else {
          this.originalXhr.removeEventListener(...args);
        }
      }
      open(method, url, async = true, ...args) {
        this.request = {
          type: "xhr",
          url: url.toString(),
          method: method.toUpperCase(),
          abort: false,
          headers: {},
          data: null,
          response: null,
          async: !!async,
        };
        this.openArgs = args;
        this.resThenable = new SyncThenable();
        [
          "responseURL",
          "readyState",
          "status",
          "statusText",
          ...xhrResponses,
        ].forEach((key) => {
          delete this.proxyProps[key];
        });
        return this.originalXhr.open(method, url, async, ...args);
      }
      send(data) {
        const ah = this;
        const xhr = ah.originalXhr;
        const request = ah.request;
        if (xhr.readyState !== 1) return xhr.send(data);
        request.data = data;
        new AHRequest(request).waitForRequestKeys().then(() => {
          if (request.abort) {
            if (typeof request.response === "function") {
              Object.assign(ah.proxyProps, {
                responseURL: { value: request.url },
                readyState: { value: 4 },
                status: { value: 200 },
                statusText: { value: "OK" },
              });
              xhrAsyncEvents.forEach((evt) =>
                xhr.dispatchEvent(new Event(evt))
              );
            }
          } else {
            xhr.open(
              request.method,
              request.url,
              request.async,
              ...ah.openArgs
            );
            for (const header in request.headers) {
              xhr.setRequestHeader(header, request.headers[header]);
            }
            xhr.send(request.data);
          }
        });
      }
    }
    function fakeXHR() {
      const xhr = new winAh.realXHR();
      if ("__ajaxHooker" in xhr)
        console.warn("检测到不同版本的ajaxHooker，可能发生冲突！");
      xhr.__ajaxHooker = new XhrHooker(xhr);
      return xhr.__ajaxHooker.proxyXhr;
    }
    fakeXHR.prototype = win.XMLHttpRequest.prototype;
    Object.keys(win.XMLHttpRequest).forEach(
      (key) => (fakeXHR[key] = win.XMLHttpRequest[key])
    );
    function fakeFetch(url, options = {}) {
      if (!url) return winAh.realFetch.call(win, url, options);
      const init = {};
      if (getType(url) === "[object Request]") {
        for (const prop of fetchInitProps) init[prop] = url[prop];
        url = url.url;
      }
      url = url.toString();
      Object.assign(init, options);
      init.method = init.method || "GET";
      init.headers = init.headers || {};
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
            if (request.abort) {
              if (typeof request.response === "function") {
                const response = {
                  finalUrl: request.url,
                  status: 200,
                  responseHeaders: {},
                };
                req.waitForResponseKeys(response).then(() => {
                  const key = fetchResponses.find((k) => k in response);
                  let val = response[key];
                  if (key === "json" && typeof val === "object") {
                    val = catchError(JSON.stringify.bind(JSON), val);
                  }
                  const res = new Response(val, {
                    status: 200,
                    statusText: "OK",
                  });
                  defineProp(res, "type", () => "basic");
                  defineProp(res, "url", () => request.url);
                  resolve(res);
                });
              } else {
                reject(new DOMException("aborted", "AbortError"));
              }
              return;
            }
            init.method = request.method;
            init.headers = request.headers;
            init.body = request.data;
            winAh.realFetch.call(win, request.url, init).then((res) => {
              if (typeof request.response === "function") {
                const response = {
                  finalUrl: res.url,
                  status: res.status,
                  responseHeaders: parseHeaders(res.headers),
                };
                fetchResponses.forEach(
                  (key) =>
                    (res[key] = function () {
                      if (key in response)
                        return Promise.resolve(response[key]);
                      return resProto[key].call(this).then((val) => {
                        response[key] = val;
                        return req
                          .waitForResponseKeys(response)
                          .then(() => (key in response ? response[key] : val));
                      });
                    })
                );
              }
              resolve(res);
            }, reject);
          })
          .catch((err) => {
            console.error(err);
            resolve(winAh.realFetch.call(win, url, init));
          });
      });
    }
    function fakeFetchClone() {
      const descriptors = Object.getOwnPropertyDescriptors(this);
      const res = winAh.realFetchClone.call(this);
      Object.defineProperties(res, descriptors);
      return res;
    }
    winAh = win.__ajaxHooker = winAh || {
      version,
      fakeXHR,
      fakeFetch,
      fakeFetchClone,
      realXHR: win.XMLHttpRequest,
      realFetch: win.fetch,
      realFetchClone: resProto.clone,
      hookInsts: new Set(),
    };
    win.XMLHttpRequest = winAh.fakeXHR;
    win.fetch = winAh.fakeFetch;
    resProto.clone = winAh.fakeFetchClone;
    winAh.hookInsts.add(hookInst);
    return {
      hook: (fn) => hookInst.hookFns.push(fn),
      filter: (arr) => {
        if (Array.isArray(arr)) hookInst.filters = arr;
      },
      protect: () => {
        readonly(win, "XMLHttpRequest", winAh.fakeXHR);
        readonly(win, "fetch", winAh.fakeFetch);
        readonly(resProto, "clone", winAh.fakeFetchClone);
      },
      unhook: () => {
        winAh.hookInsts.delete(hookInst);
        if (!winAh.hookInsts.size) {
          writable(win, "XMLHttpRequest", winAh.realXHR);
          writable(win, "fetch", winAh.realFetch);
          writable(resProto, "clone", winAh.realFetchClone);
          delete win.__ajaxHooker;
        }
      },
    };
  };

  Utils.canvasClickByPosition = function (
    canvasElement,
    clientX = 0,
    clientY = 0,
    view = globalThis
  ) {
    if (!canvasElement instanceof HTMLCanvasElement) {
      throw new Error(
        "Utils.canvasClickByPosition 参数canvasElement必须是canvas元素"
      );
    }
    clientX = parseInt(clientX);
    clientY = parseInt(clientY);
    const eventInit = {
      cancelBubble: true,
      cancelable: true,
      clientX: clientX,
      clientY: clientY,
      view: view,
      detail: 1,
    };
    canvas.dispatchEvent(new MouseEvent("mousedown", eventInit));
    canvas.dispatchEvent(new MouseEvent("mouseup", eventInit));
  };

  Utils.checkUserClickInNode = function (element) {
    if (!Utils.isDOM(element)) {
      throw new Error(
        "Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型"
      );
    }
    let mouseClickPosX = Number(window.event.clientX); /* 鼠标相对屏幕横坐标 */
    let mouseClickPosY = Number(window.event.clientY); /* 鼠标相对屏幕纵坐标 */
    let elementPosXLeft = Number(
      element.getBoundingClientRect().left
    ); /* 要检测的元素的相对屏幕的横坐标最左边 */
    let elementPosXRight = Number(
      element.getBoundingClientRect().right
    ); /* 要检测的元素的相对屏幕的横坐标最右边 */
    let elementPosYTop = Number(
      element.getBoundingClientRect().top
    ); /* 要检测的元素的相对屏幕的纵坐标最上边 */
    let elementPosYBottom = Number(
      element.getBoundingClientRect().bottom
    ); /* 要检测的元素的相对屏幕的纵坐标最下边 */
    let clickNodeHTML = window.event?.target?.innerHTML;
    if (
      mouseClickPosX >= elementPosXLeft &&
      mouseClickPosX <= elementPosXRight &&
      mouseClickPosY >= elementPosYTop &&
      mouseClickPosY <= elementPosYBottom
    ) {
      return true;
    } else if (clickNodeHTML && element.innerHTML.includes(clickNodeHTML)) {
      /* 这种情况是应对在界面中隐藏的元素，getBoundingClientRect获取的都是0 */
      return true;
    } else {
      return false;
    }
  };

  Utils.cloneFormData = function (formData) {
    let clonedFormData = new FormData();
    for (let [key, value] of formData.entries()) {
      clonedFormData.append(key, value);
    }
    return clonedFormData;
  };

  Utils.ColorConversion = function () {
    class ColorConversion {
      constructor() {}
      /**
       * 判断是否是16进制颜色
       * @param {string} str
       */
      isHex(str) {
        if (typeof str !== "string") {
          return false;
        }
        if (!str.match(/^(\#|)[0-9a-fA-F]{6}$/)) {
          return false;
        }
        return true;
      }
      /**
       * 16进制颜色转rgba
       *
       * #ff0000 转 rgba(123,123,123, 0.4)
       * @param {string} hex
       * @param {number} opacity
       */
      hexToRgba(hex, opacity) {
        if (!this.isHex(hex)) {
          throw new TypeError("输入错误的hex", hex);
        }
        return hex && hex.replace(/\s+/g, "").length === 7
          ? "rgba(" +
              parseInt("0x" + hex.slice(1, 3)) +
              "," +
              parseInt("0x" + hex.slice(3, 5)) +
              "," +
              parseInt("0x" + hex.slice(5, 7)) +
              "," +
              opacity +
              ")"
          : "";
      }
      /**
       * hex转rgb
       * @param {string} str
       * @returns
       */
      hexToRgb(str) {
        if (!this.isHex(str)) {
          throw new TypeError("输入错误的hex", str);
        }
        /* replace替换查找的到的字符串 */
        str = str.replace("#", "");
        /* match得到查询数组 */
        let hxs = str.match(/../g);
        for (let index = 0; index < 3; index++)
          hxs[index] = parseInt(hxs[index], 16);
        return hxs;
      }
      /**
       * rgb转hex
       * @param {string|number} redValue
       * @param {string|number} greenValue
       * @param {string|number} blueValue
       * @returns
       */
      rgbToHex(redValue, greenValue, blueValue) {
        /* 验证输入的rgb值是否合法 */
        let validPattern = /^\d{1,3}$/;
        if (
          !validPattern.test(redValue.toString()) ||
          !validPattern.test(greenValue.toString()) ||
          !validPattern.test(blueValue.toString())
        )
          throw new TypeError("输入错误的rgb颜色值");
        let hexs = [
          redValue.toString(16),
          greenValue.toString(16),
          blueValue.toString(16),
        ];
        for (let index = 0; index < 3; index++)
          if (hexs[index].length == 1) hexs[index] = "0" + hexs[index];
        return "#" + hexs.join("");
      }
      /**
       * 获取颜色变暗或亮
       * @param {string} color 颜色
       * @param {number} level 0~1.0
       * @returns
       */
      getDarkColor(color, level) {
        if (!this.isHex(color)) {
          throw new TypeError("输入错误的hex", color);
        }
        let rgbc = this.hexToRgb(color);
        for (let index = 0; index < 3; index++)
          rgbc[index] = Math.floor(rgbc[index] * (1 - level));
        return this.rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
      }
      /**
       * 获取颜色变亮
       * @param {string} color 颜色
       * @param {number} level 0~1.0
       * @returns
       */
      getLightColor(color, level) {
        if (!this.isHex(color)) {
          throw new TypeError("输入错误的hex", color);
        }
        let rgbc = this.hexToRgb(color);
        for (let index = 0; index < 3; index++)
          rgbc[index] = Math.floor((255 - rgbc[index]) * level + rgbc[index]);
        return this.rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
      }
    }

    return new ColorConversion();
  };

  Utils.createOverload = function () {
    let fnMap = new Map();
    function overload(...args) {
      let key = args.map((it) => typeof it).join(",");
      let fn = fnMap.get(key);
      if (!fn) {
        throw new TypeError("没有找到对应的实现");
      }
      return fn.apply(this, args);
    }
    overload.addImpl = function (...args) {
      let fn = args.pop();
      if (typeof fn !== "function") {
        throw new TypeError("最后一个参数必须是函数");
      }
      let key = args.join(",");
      fnMap.set(key, fn);
    };
    return overload;
  };

  Utils.deepClone = function (obj) {
    if (obj === void 0) return void 0;
    if (obj === null) return null;
    let clone = obj instanceof Array ? [] : {};
    for (const [key, value] of Object.entries(obj)) {
      clone[key] = typeof value === "object" ? deepClone(value) : value;
    }
    return clone;
  };

  Utils.debounce = function (fn, delay = 0) {
    let timer = null;
    const context = this;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  };

  Utils.deleteParentNode = function (element, targetSelector) {
    if (element == null) {
      throw new Error("Utils.deleteParentNode 参数 target 不能为 null");
    }
    if (!Utils.isDOM(element)) {
      throw new Error(
        "Utils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型"
      );
    }
    if (typeof targetSelector !== "string") {
      throw new Error(
        "Utils.deleteParentNode 参数 targetSelector 必须为 string 类型"
      );
    }
    let result = false;
    let needRemoveDOM = element.closest(targetSelector);
    if (needRemoveDOM) {
      needRemoveDOM.remove();
      result = true;
    }
    return result;
  };

  Utils.Dictionary = function () {
    class UtilsDictionary {
      items = {};
      /**
       * 检查是否有某一个键
       * @param {string} key 键
       * @returns {boolean}
       */
      has(key) {
        return this.items.hasOwnProperty(key);
      }
      /**
       * 检查已有的键中是否以xx开头
       * @param {string} key 需要匹配的键
       * @returns {boolean}
       */
      startsWith(key) {
        let allKeys = this.keys();
        for (const keyName of allKeys) {
          if (keyName.startsWith(key)) {
            return true;
          }
        }
        return false;
      }
      /**
       * 获取以xx开头的键的值
       * @param {string} key 需要匹配的键
       * @returns {any}
       */
      getStartsWith(key) {
        let allKeys = this.keys();
        for (const keyName of allKeys) {
          if (keyName.startsWith(key)) {
            return this.items[keyName];
          }
        }
      }
      /**
       * 为字典添加某一个值
       * @param {string} key 键
       * @param {any} val 值，默认为""
       */
      set(key, val = "") {
        if (key === void 0) {
          throw new Error("Utils.Dictionary().set 参数 key 不能为空");
        }
        this.items[key] = val;
      }
      /**
       * 删除某一个键
       * @param {string} key 键
       * @returns {boolean}
       */
      delete(key) {
        if (this.has(key)) {
          Reflect.deleteProperty(this.items, key);
          return true;
        }
        return false;
      }
      /**
       * 获取某个键的值
       * @param {string} key 键
       * @returns {any}
       */
      get(key) {
        return this.has(key) ? this.items[key] : void 0;
      }
      /**
       * 返回字典中的所有值
       * @returns {any[]}
       */
      values() {
        let resultList = [];
        for (let prop in this.items) {
          if (this.has(prop)) {
            resultList.push(this.items[prop]);
          }
        }
        return resultList;
      }
      /**
       * 清空字典
       */
      clear() {
        this.items = null;
        this.items = {};
      }
      /**
       * 获取字典的长度
       * @returns {number}
       */
      size() {
        return Object.keys(this.items).length;
      }
      /**
       * 获取字典所有的键
       */
      keys() {
        return Object.keys(this.items);
      }
      /**
       * 返回字典本身
       * @returns {object}
       */
      getItems() {
        return this.items;
      }
      /**
       * 合并另一个字典
       * @param {object} data 需要合并的字典
       */
      concat(data) {
        this.items = Utils.assign(this.items, data.getItems());
      }
      forEach(callbackfn) {
        for (const key in this.items) {
          callbackfn(this.get(key), key, this.items);
        }
      }
      /**
       * 获取字典的长度，同this.size
       * @returns {number}
       */
      get length() {
        return this.size();
      }
      /**
       * 迭代器
       */
      get entries() {
        let that = this;
        return function* () {
          let itemKeys = Object.keys(that.getItems());
          for (const keyName of itemKeys) {
            yield [keyName, that.get(keyName)];
          }
        };
      }
      /**
       * 是否可遍历
       */
      get [Symbol.iterator]() {
        let that = this;
        return function () {
          return that.entries();
        };
      }
      /**
       * .toString()和.toLocaleString()输出的字符串
       */
      get [Symbol.toStringTag]() {
        return "UtilsDictionary";
      }
    }
    return new UtilsDictionary();
  };

  Utils.dispatchEvent = function (element, eventName, details) {
    let eventNameList = [];
    if (typeof eventName === "string") {
      eventNameList = [eventName];
    }
    if (Array.isArray(eventName)) {
      eventNameList = [...eventName];
    }
    eventNameList.forEach((_eventName_) => {
      let event = new Event(_eventName_);
      if (details) {
        Object.assign(event, details);
      }
      element.dispatchEvent(event);
    });
  };

  Utils.downloadBase64 = function (base64Data, fileName, isIFrame = false) {
    if (typeof base64Data !== "string") {
      throw new Error(
        "Utils.downloadBase64 参数 base64Data 必须为 string 类型"
      );
    }
    if (typeof fileName !== "string") {
      throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");
    }
    if (isIFrame) {
      /* 使用iframe */
      const iframeElement = document.createElement("iframe");
      iframeElement.style.display = "none";
      iframeElement.src = base64Data;
      document.body.appendChild(iframeElement);
      setTimeout(() => {
        iframeElement.contentWindow.document.execCommand(
          "SaveAs",
          true,
          fileName
        );
        document.body.removeChild(iframeElement);
      }, 100);
    } else {
      /* 使用A标签 */
      const linkElement = document.createElement("a");
      linkElement.setAttribute("target", "_blank");
      linkElement.download = fileName;
      linkElement.href = base64Data;
      linkElement.click();
    }
  };

  Utils.findWebPageVisibleText = function (str = "", caseSensitive = false) {
    let TRange = null;
    let strFound;
    if (window.find) {
      /* CODE FOR BROWSERS THAT SUPPORT window.find */
      strFound = self.find(str, caseSensitive, true, true, false);
      if (strFound && self.getSelection && !self.getSelection().anchorNode) {
        strFound = self.find(str, caseSensitive, true, true, false);
      }
      if (!strFound) {
        strFound = self.find(str, 0, 1);
        while (self.find(str, 0, 1)) continue;
      }
    } else if (navigator.appName.indexOf("Microsoft") != -1) {
      /* EXPLORER-SPECIFIC CODE */
      if (TRange != null) {
        TRange.collapse(false);
        strFound = TRange.findText(str);
        if (strFound) TRange.select();
      }
      if (TRange == null || strFound == 0) {
        TRange = self.document.body.createTextRange();
        strFound = TRange.findText(str);
        if (strFound) TRange.select();
      }
    } else if (navigator.appName == "Opera") {
      alert("Opera browsers not supported, sorry...");
      return;
    }
    return strFound ? true : false;
  };

  Utils.findElementsWithText = function* (element, text, filter) {
    if (element.outerHTML.includes(text)) {
      if (element.children.length === 0) {
        let filterResult =
          typeof filter === "function" ? filter(element) : false;
        if (!filterResult) {
          yield element;
        }
      } else {
        let textElement = Array.from(element.childNodes).filter(
          (ele) => ele.nodeType === Node.TEXT_NODE
        );
        for (let ele of textElement) {
          if (ele.textContent.includes(text)) {
            let filterResult =
              typeof filter === "function" ? filter(element) : false;
            if (!filterResult) {
              yield ele;
            }
          }
        }
      }
    }

    for (let index = 0; index < element.children.length; index++) {
      let childElement = element.children[index];
      yield* Utils.findElementsWithText(childElement, text, filter);
    }
  };

  Utils.findVisibleElement = function (element) {
    let currentElement = element;
    while (currentElement) {
      let elementRect = currentElement.getBoundingClientRect();
      if (Boolean(elementRect.length)) {
        return currentElement;
      }
      currentElement = currentElement.parentElement;
    }
    return null;
  };

  Utils.formatByteToSize = function (byteSize, addType = true) {
    byteSize = parseInt(byteSize);
    if (isNaN(byteSize)) {
      throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");
    }
    let result = 0;
    let resultType = "KB";
    let sizeData = {};
    sizeData.B = 1;
    sizeData.KB = 1024;
    sizeData.MB = sizeData.KB * sizeData.KB;
    sizeData.GB = sizeData.MB * sizeData.KB;
    sizeData.TB = sizeData.GB * sizeData.KB;
    sizeData.PB = sizeData.TB * sizeData.KB;
    sizeData.EB = sizeData.PB * sizeData.KB;
    sizeData.ZB = sizeData.EB * sizeData.KB;
    sizeData.YB = sizeData.ZB * sizeData.KB;
    sizeData.BB = sizeData.YB * sizeData.KB;
    sizeData.NB = sizeData.BB * sizeData.KB;
    sizeData.DB = sizeData.NB * sizeData.KB;
    for (let key in sizeData) {
      result = byteSize / sizeData[key];
      resultType = key;
      if (sizeData.KB >= result) {
        break;
      }
    }
    result = result.toFixed(2);
    result = addType ? result + resultType.toString() : parseFloat(result);
    return result;
  };

  Utils.getNodeListValue = function (...args) {
    let resultArray = [];
    for (let arg of args) {
      let value = arg;
      if (typeof arg === "function") {
        /* 方法 */
        value = arg();
      }
      if (value.length !== 0) {
        resultArray = [...value];
        break;
      }
    }
    return resultArray;
  };

  Utils.getNonNullValue = function (...args) {
    let resultValue = args[args.length - 1];
    for (const argValue of args) {
      if (Utils.isNotNull(argValue)) {
        resultValue = argValue;
        break;
      }
    }
    return resultValue;
  };

  Utils.formatTime = function (
    text = new Date(),
    formatType = "yyyy-MM-dd HH:mm:ss"
  ) {
    let time = text == null ? new Date() : new Date(text);
    /**
     * 校验时间补0
     * @param {number} timeNum
     * @returns
     */
    function checkTime(timeNum) {
      if (timeNum < 10) return "0" + timeNum;
      return timeNum;
    }

    /**
     * 时间制修改 24小时制转12小时制
     * @param {number} hourNum 小时
     * @returns
     */
    function timeSystemChange(hourNum) {
      return hourNum > 12 ? hourNum - 12 : hourNum;
    }

    let timeRegexp = {
      yyyy: time.getFullYear(),
      /* 年 */
      MM: checkTime(time.getMonth() + 1),
      /* 月 */
      dd: checkTime(time.getDate()),
      /* 日 */
      HH: checkTime(time.getHours()),
      /* 时 (24小时制) */
      hh: checkTime(timeSystemChange(time.getHours())),
      /* 时 (12小时制) */
      mm: checkTime(time.getMinutes()),
      /* 分 */
      ss: checkTime(time.getSeconds()),
      /* 秒 */
    };
    Object.keys(timeRegexp).forEach(function (key) {
      let replaecRegexp = new RegExp(key, "g");
      formatType = formatType.replace(replaecRegexp, timeRegexp[key]);
    });
    return formatType;
  };

  Utils.formatToTimeStamp = function (text) {
    /* 把字符串格式的时间（完整，包括日期和时间）格式化成时间 */
    if (typeof text !== "string") {
      throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");
    }
    if (text.length === 8) {
      /* 该字符串只有时分秒 */
      let today = new Date();
      text =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " " +
        text;
    }
    text = text.substring(0, 19);
    text = text.replace(/-/g, "/");
    let timestamp = new Date(text).getTime();
    return timestamp;
  };

  Utils.GBKEncoder = function () {
    function handleText(text) {
      text = text
        .replace(/#(\d+)\$/g, function (a, b) {
          return Array(+b + 3).join("#");
        })
        .replace(/#/g, "####")
        .replace(/(\w\w):([\w#]+)(?:,|$)/g, function (a, hd, dt) {
          return dt.replace(/../g, function (a) {
            if (a != "##") {
              return hd + a;
            } else {
              return a;
            }
          });
        });
      return text;
    }
    function handleHash() {
      let index = 0;
      data = data.match(/..../g);
      for (let i = 0x81; i <= 0xfe; i++) {
        for (let j = 0x40; j <= 0xfe; j++) {
          U2Ghash[data[index++]] = (
            "%" +
            i.toString(16) +
            "%" +
            j.toString(16)
          ).toUpperCase();
        }
      }
      for (let key in U2Ghash) {
        G2Uhash[U2Ghash[key]] = key;
      }
    }
    function isAscii(unicode) {
      return unicode <= 0x007f && unicode >= 0x0000;
    }
    let data = handleText(
      "4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364"
    );
    let U2Ghash = {};
    let G2Uhash = {};
    handleHash();
    /**
     * 编码
     * @param {string} str
     * @returns {string}
     */
    this.encode = function (str) {
      return [...str].reduce((result, val, i) => {
        return result + toGBK(val);
      }, "");
      function toGBK(val) {
        let result = "";
        for (let i = 0; i < val.length; i++) {
          const codePoint = val.codePointAt(i);
          const code = String.fromCodePoint(codePoint);
          let key = codePoint.toString(16);
          key.length != 4 && (key = ("000" + key).match(/....$/)[0]);

          /* Add up i by code.length */
          i += code.length - 1;

          /* If code is in ascii range */
          if (isAscii(codePoint)) {
            result += encodeURIComponent(code);
            continue;
          }

          /* If Got encoded string from U2Ghash */
          if (U2Ghash[key]) {
            result += U2Ghash[key];
            continue;
          }

          /* 
          If 2 or more char combines to one visible code,
          or just this code is not in GBK
          */
          result += toGBK(`&#${codePoint};`);
        }
        return result;
      }
    };

    /**
     * 解码
     * @param {string} str
     * @returns {string}
     */
    this.decode = function (str) {
      var GBKMatcher = /%[0-9A-F]{2}%[0-9A-F]{2}/;
      var UTFMatcher = /%[0-9A-F]{2}/;
      var gbk = true,
        utf = true;
      while (utf) {
        gbk = str.match(GBKMatcher);
        utf = str.match(UTFMatcher);
        if (gbk && gbk in G2Uhash) {
          str = str.replace(gbk, String.fromCharCode("0x" + G2Uhash[gbk]));
        } else {
          str = str.replace(utf, decodeURIComponent(utf));
        }
      }
      return str;
    };
    return this;
  };

  Utils.getTransitionEndNameList = function () {
    return [
      "webkitTransitionEnd",
      "mozTransitionEnd",
      "MSTransitionEnd",
      "otransitionend",
      "transitionend",
    ];
  };

  Utils.getAnimationEndNameList = function () {
    return [
      "webkitAnimationEnd",
      "mozAnimationEnd",
      "MSAnimationEnd",
      "oanimationend",
      "animationend",
    ];
  };

  Utils.getArrayLastValue = function (targetObj) {
    return targetObj[targetObj.length - 1];
  };

  Utils.getArrayRealValue = function (...args) {
    let result = null;
    for (let arg of args) {
      if (typeof arg === "function") {
        /* 方法 */
        arg = arg();
      }
      if (arg != null) {
        result = arg;
        break;
      }
    }
    return result;
  };

  Utils.getDaysDifference = function (
    timestamp1 = Date.now(),
    timestamp2 = Date.now(),
    type = "天"
  ) {
    type = type.trim();
    if (timestamp1.toString().length === 10) {
      timestamp1 = timestamp1 * 1000;
    }
    if (timestamp2.toString().length === 10) {
      timestamp2 = timestamp2 * 1000;
    }
    let smallTimeStamp = timestamp1 > timestamp2 ? timestamp2 : timestamp1;
    let bigTimeStamp = timestamp1 > timestamp2 ? timestamp1 : timestamp2;
    let oneSecond = 1000; /* 一秒的毫秒数 */
    let oneMinute = 60 * oneSecond; /* 一分钟的毫秒数 */
    let oneHour = 60 * oneMinute; /* 一小时的毫秒数 */
    let oneDay = 24 * oneHour; /* 一天的毫秒数 */
    let oneMonth = 30 * oneDay; /* 一个月的毫秒数(30天) */
    let oneYear = 12 * oneMonth; /* 一年的毫秒数 */
    let bigDate = new Date(bigTimeStamp);
    let smallDate = new Date(smallTimeStamp);
    let remainderValue = 1;
    if (type === "年") {
      remainderValue = oneYear;
    } else if (type === "月") {
      remainderValue = oneMonth;
    } else if (type === "天") {
      remainderValue = oneDay;
    } else if (type === "时") {
      remainderValue = oneHour;
    } else if (type === "分") {
      remainderValue = oneMinute;
    } else if (type === "秒") {
      remainderValue = oneSecond;
    }
    let diffValue = Math.round(
      Math.abs((bigDate - smallDate) / remainderValue)
    );
    if (type === "auto") {
      let timeDifference = bigTimeStamp - smallTimeStamp;
      diffValue = Math.floor(timeDifference / (24 * 3600 * 1000));
      if (diffValue > 0) {
        diffValue = diffValue + "天";
      } else {
        /* 计算出小时数 */
        let leave1 =
          timeDifference % (24 * 3600 * 1000); /* 计算天数后剩余的毫秒数 */
        let hours = Math.floor(leave1 / (3600 * 1000));
        if (hours > 0) {
          diffValue = hours + "小时";
        } else {
          /* 计算相差分钟数 */
          let leave2 = leave1 % (3600 * 1000); /* 计算小时数后剩余的毫秒数 */
          let minutes = Math.floor(leave2 / (60 * 1000));
          if (minutes > 0) {
            diffValue = minutes + "分钟";
          } else {
            /* 计算相差秒数 */
            let leave3 = leave2 % (60 * 1000); /* 计算分钟数后剩余的毫秒数 */
            let seconds = Math.round(leave3 / 1000);
            diffValue = seconds + "秒";
          }
        }
      }
    }
    return diffValue;
  };

  Utils.getElementSelector = function (element) {
    if (!element) return;
    if (!element.parentElement) return;
    /* 如果元素有id属性，则直接返回id选择器 */
    if (element.id) return "#" + element.id;

    /* 递归地获取父元素的选择器 */
    let selector = Utils.getElementSelector(element.parentElement);
    if (!selector) {
      return element.tagName.toLowerCase();
    }
    /* 如果有多个相同类型的兄弟元素，则需要添加索引 */
    if (element.parentElement.querySelectorAll(element.tagName).length > 1) {
      let index =
        Array.prototype.indexOf.call(element.parentElement.children, element) +
        1;
      selector +=
        " > " + element.tagName.toLowerCase() + ":nth-child(" + index + ")";
    } else {
      selector += " > " + element.tagName.toLowerCase();
    }
    return selector;
  };

  Utils.getMaxValue = function (...args) {
    let result = [...args];
    let newResult = [];
    if (result.length > 1) {
      if (
        result.length === 2 &&
        typeof result[0] === "object" &&
        typeof result[1] === "function"
      ) {
        let data = result[0];
        let handleDataFunc = result[1];
        Object.keys(data).forEach((keyName) => {
          newResult = [...newResult, handleDataFunc(keyName, data[keyName])];
        });
      } else {
        result.forEach((item) => {
          if (!isNaN(parseFloat(item))) {
            newResult = [...newResult, parseFloat(item)];
          }
        });
      }
      return Math.max(...newResult);
    } else if (result.length === 1) {
      result[0].forEach((item) => {
        if (!isNaN(parseFloat(item))) {
          newResult = [...newResult, parseFloat(item)];
        }
      });
      return Math.max(...newResult);
    }
  };

  Utils.getMaxZIndex = function (deviation = 1) {
    let nodeIndexList = [];
    deviation = Number.isNaN(deviation) ? 1 : deviation;
    document.querySelectorAll("*").forEach((element) => {
      let nodeStyle = window.getComputedStyle(element);
      /* 不对position为static和display为none的元素进行获取它们的z-index */
      if (nodeStyle.position !== "static" && nodeStyle.display !== "none") {
        nodeIndexList = nodeIndexList.concat(parseInt(nodeStyle.zIndex));
      }
    });
    /* 过滤非Boolean类型 */
    nodeIndexList = nodeIndexList.filter(Boolean);
    let currentMaxZIndex = nodeIndexList.length
      ? Math.max(...nodeIndexList)
      : 0;
    return currentMaxZIndex + deviation;
  };

  Utils.getMinValue = function (...args) {
    let result = [...args];
    let newResult = [];
    if (result.length > 1) {
      if (
        result.length === 2 &&
        typeof result[0] === "object" &&
        typeof result[1] === "function"
      ) {
        let data = result[0];
        let handleDataFunc = result[1];
        Object.keys(data).forEach((keyName) => {
          newResult = [...newResult, handleDataFunc(keyName, data[keyName])];
        });
      } else {
        result.forEach((item) => {
          if (!isNaN(parseFloat(item))) {
            newResult = [...newResult, parseFloat(item)];
          }
        });
      }
      return Math.min(...newResult);
    } else if (result.length === 1) {
      result[0].forEach((item) => {
        if (!isNaN(parseFloat(item))) {
          newResult = [...newResult, parseFloat(item)];
        }
      });
      return Math.min(...newResult);
    }
  };

  Utils.getRandomAndroidUA = function () {
    let mobileNameList = [
      "LDN-LX3",
      "RNE-L03",
      "ASUS_X00ID Build/NMF26F",
      "WAS-LX3",
      "PRA-LX3",
      "MYA-L03",
      "Moto G Play",
      "Moto C Build/NRD90M.063",
      "Redmi Note 4 Build/NRD90M",
      "HUAWEI VNS-L21 Build/HUAWEIVNS-L21",
      "VTR-L09",
      "TRT-LX3",
      "M2003J15SC Build/RP1A.200720.011; wv",
      "MI 13 Build/OPR1.170623.027; wv",
    ];
    let androidVersion = Utils.getRandomValue(12, 14);
    let randomMobile = Utils.getRandomValue(mobileNameList);
    let chromeVersion1 = Utils.getRandomValue(115, 125);
    let chromeVersion2 = Utils.getRandomValue(0, 0);
    let chromeVersion3 = Utils.getRandomValue(2272, 6099);
    let chromeVersion4 = Utils.getRandomValue(1, 218);
    return `Mozilla/5.0 (Linux; Android ${androidVersion}; ${randomMobile}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion1}.${chromeVersion2}.${chromeVersion3}.${chromeVersion4} Mobile Safari/537.36`;
  };

  Utils.getRandomValue = function (...args) {
    let result = [...args];
    if (result.length > 1) {
      if (
        result.length === 2 &&
        typeof result[0] === "number" &&
        typeof result[1] === "number"
      ) {
        let leftNumber = result[0] > result[1] ? result[1] : result[0];
        let rightNumber = result[0] > result[1] ? result[0] : result[1];
        return (
          Math.round(Math.random() * (rightNumber - leftNumber)) + leftNumber
        );
      } else {
        return result[Math.floor(Math.random() * result.length)];
      }
    } else if (result.length === 1) {
      let paramData = result[0];
      if (Array.isArray(paramData)) {
        return paramData[Math.floor(Math.random() * paramData.length)];
      } else if (
        typeof paramData === "object" &&
        Object.keys(paramData).length > 0
      ) {
        let paramObjDataKey =
          Object.keys(paramData)[
            Math.floor(Math.random() * Object.keys(paramData).length)
          ];
        return paramData[paramObjDataKey];
      } else {
        return paramData;
      }
    }
  };

  Utils.getRandomPCUA = function () {
    let chromeVersion1 = Utils.getRandomValue(115, 125);
    let chromeVersion2 = Utils.getRandomValue(0, 0);
    let chromeVersion3 = Utils.getRandomValue(2272, 6099);
    let chromeVersion4 = Utils.getRandomValue(1, 218);
    return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion1}.${chromeVersion2}.${chromeVersion3}.${chromeVersion4} Safari/537.36`;
  };

  Utils.getReactObj = function (element) {
    let result = {};
    Object.keys(element).forEach((domPropsName) => {
      if (domPropsName.startsWith("__react")) {
        let propsName = domPropsName.replace(/__(.+)\$.+/i, "$1");
        if (propsName in result) {
          new Error("重复属性 " + domPropsName);
        } else {
          result[propsName] = element[domPropsName];
        }
      }
    });
    return result;
  };

  Utils.getSymbol = function (target, keyName) {
    if (typeof target !== "object") {
      throw new TypeError("target不是一个对象");
    }
    let objectsSymbols = Object.getOwnPropertySymbols(target);
    if (typeof keyName === "string") {
      let findSymbol = objectsSymbols.find((key) => {
        return key.toString() === keyName;
      });
      if (findSymbol) {
        return target[findSymbol];
      }
    } else if (typeof keyName === "symbol") {
      let findSymbol = objectsSymbols.find((key) => {
        return key === keyName;
      });
      if (findSymbol) {
        return target[findSymbol];
      }
    } else {
      let result = {};
      objectsSymbols.forEach((item) => {
        result[item] = target[item];
      });
      return result;
    }
  };

  Utils.getTextLength = function (text) {
    let encoder = new TextEncoder();
    let bytes = encoder.encode(text);
    return bytes.length;
  };

  Utils.getTextStorageSize = function (text, addType = true) {
    return Utils.formatByteToSize(Utils.getTextLength(text), addType);
  };

  Utils.getThunderUrl = function (url) {
    if (url == null) {
      throw new TypeError("url不能为空");
    }
    if (typeof url !== "string") {
      throw new TypeError("url必须是string类型");
    }
    if (url.trim() === "") {
      throw new TypeError("url不能为空字符串或纯空格");
    }
    return `thunder://${globalThis.btoa("AA" + url + "ZZ")}`;
  };

  Utils.addStyle = function (cssText) {
    if (typeof cssText !== "string") {
      throw new Error("Utils.addStyle 参数cssText 必须为String类型");
    }
    let cssNode = document.createElement("style");
    cssNode.setAttribute("type", "text/css");
    cssNode.innerHTML = cssText;
    if (document.head) {
      /* 插入head最后 */
      document.head.appendChild(cssNode);
    } else if (document.body) {
      /* 插入body后 */
      document.body.appendChild(cssNode);
    } else if (document.documentElement.childNodes.length === 0) {
      /* 插入#html第一个元素后 */
      document.documentElement.appendChild(cssNode);
    } else {
      /* 插入head前面 */
      document.documentElement.insertBefore(
        cssNode,
        document.documentElement.childNodes[0]
      );
    }
    return cssNode;
  };

  Utils.GM_Cookie = function () {
    this.list = function (paramDetails = {}, callback = () => {}) {
      /** @type {UtilsGMCookieListResult[]} */
      let resultData = [];
      try {
        let details = {
          url: globalThis.location.href,
          domain: globalThis.location.hostname,
          name: "",
          path: "/",
        };
        details = Utils.assign(details, paramDetails);
        let cookies = document.cookie.split(";");
        cookies.forEach((item) => {
          item = item.trimStart();
          let itemName = item.split("=")[0];
          let itemValue = item.replace(new RegExp("^" + itemName + "="), "");
          let nameRegexp =
            details.name instanceof RegExp
              ? details.name
              : new RegExp("^" + details.name, "g");
          if (itemName.match(nameRegexp)) {
            resultData.push({
              domain: globalThis.location.hostname,
              expirationDate: void 0,
              hostOnly: true,
              httpOnly: false,
              name: itemName,
              path: "/",
              sameSite: "unspecified",
              secure: true,
              session: false,
              value: itemValue,
            });
            return;
          }
        });
        callback(resultData);
      } catch (error) {
        callback(resultData, error);
      }
    };

    this.set = function (paramDetails = {}, callback = () => {}) {
      try {
        let details = {
          url: window.location.href,
          name: "",
          value: "",
          domain: window.location.hostname,
          path: "/",
          secure: true,
          httpOnly: false,
          /**
           * Expires in 30 days
           */
          expirationDate: Math.floor(Date.now()) + 60 * 60 * 24 * 30,
        };
        details = Utils.assign(details, paramDetails);
        let life = details.expirationDate
          ? details.expirationDate
          : Math.floor(Date.now()) + 60 * 60 * 24 * 30;
        let cookieStr =
          details.name +
          "=" +
          decodeURIComponent(details.value) +
          ";expires=" +
          new Date(life).toGMTString() +
          "; path=/";
        document.cookie = cookieStr;
        callback();
      } catch (error) {
        callback(error);
      }
    };

    this.delete = (paramDetails = {}, callback = () => {}) => {
      try {
        let details = {
          url: window.location.href,
          name: "",
          firstPartyDomain: "",
        };
        details = Utils.assign(details, paramDetails);
        let cookieStr =
          details.name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = cookieStr;
        callback();
      } catch (error) {
        callback(error);
      }
    };
  };

  Utils.GM_Menu = function (details) {
    const GM_Api = {
      /**
       * 获取存储的数据
       * @type {GM_getValue}
       */
      getValue: details.GM_getValue,
      /**
       * 设置数据到存储
       * @type {GM_setValue}
       */
      setValue: details.GM_setValue,
      /**
       * 注册菜单
       * @type {GM_registerMenuCommand}
       */
      registerMenuCommand: details.GM_registerMenuCommand,
      /**
       * 卸载菜单
       * @type {GM_unregisterMenuCommand}
       */
      unregisterMenuCommand: details.GM_unregisterMenuCommand,
    };
    for (const keyName of Object.keys(GM_Api)) {
      if (typeof GM_Api[keyName] !== "function") {
        throw new Error(
          `Utils.GM_Menu 请在脚本开头加上 @grant  ${keyName}，且传入该对象`
        );
      }
    }
    /** 上下文 */
    const context = this;

    const MenuHandle = {
      $data: {
        /**
         * 菜单数据
         * @type {UtilsGMMenuOptionData[]}
         */
        data: details.data || [],
        /**
         * 本地存储的键名
         */
        key: "GM_Menu_Local_Map",
      },
      $default: {
        /** 自动刷新网页，默认为true */
        autoReload:
          typeof details.autoReload === "boolean" ? details.autoReload : true,
        /**
         * 菜单isStoreValue的默认值
         */
        isStoreValue: true,
      },
      $emoji: {
        /**
         * 菜单enable为true的emoji
         */
        success: "✅",
        /**
         * 菜单enable为false的emoji
         */
        error: "❌",
      },
      /**
       * 初始化数据
       */
      init() {
        for (let index = 0; index < this.$data.data.length; index++) {
          let menuOption = this.$data.data[index]["data"];
          menuOption.enable = Boolean(
            this.getLocalMenuData(menuOption.key, menuOption.enable)
          );
          if (typeof menuOption.showText !== "function") {
            menuOption.showText = (menuText, menuEnable) => {
              if (menuEnable) {
                return this.$emoji.success + " " + menuText;
              } else {
                return this.$emoji.error + " " + menuText;
              }
            };
          }
        }
      },
      /**
       * 注册油猴菜单
       * @param { ?UtilsGMMenuOptionData[] } menuOptions 如果存在，使用它
       */
      register(menuOptions) {
        if (menuOptions == null) {
          throw new TypeError("register菜单数据不能为空");
        }
        if (!Array.isArray(menuOptions)) {
          menuOptions = [menuOptions];
        }
        for (let index = 0; index < menuOptions.length; index++) {
          let cloneMenuOptionData = Utils.deepClone(menuOptions[index].data);
          const { showText, clickCallBack } =
            this.handleMenuData(cloneMenuOptionData);
          let menuId = GM_Api.registerMenuCommand(showText, clickCallBack);
          menuOptions[index].id = menuId;
          cloneMenuOptionData.deleteMenu = function () {
            GM_Api.unregisterMenuCommand(menuId);
          };
          Reflect.deleteProperty(menuOptions[index], "handleData");
          menuOptions[index].handleData = cloneMenuOptionData;
        }
      },
      /**
       * 获取本地存储菜单键值
       * @param {string} key 键
       * @returns {boolean}
       */
      getLocalMenuData(key, defaultValue) {
        let localData = GM_Api.getValue(this.$data.key, {});
        if (key in localData) {
          return localData[key];
        } else {
          return defaultValue;
        }
      },
      /**
       * 设置本地存储菜单键值
       * @param {string} key 键
       * @param {boolean} value 值
       */
      setLocalMenuData(key, value) {
        let localData = GM_Api.getValue(this.$data.key, {});
        localData[key] = value;
        GM_Api.setValue(this.$data.key, localData);
      },
      /**
       * 处理初始化配置
       * @param { UtilsGMMenuOption } menuOption
       */
      handleInitDetail(menuOption) {
        menuOption.enable = Boolean(
          this.getLocalMenuData(menuOption.key, menuOption.enable)
        );
        if (typeof menuOption.showText !== "function") {
          menuOption.showText = (menuText, menuEnable) => {
            if (menuEnable) {
              return this.$emoji.success + " " + menuText;
            } else {
              return this.$emoji.error + " " + menuText;
            }
          };
        }
        return menuOption;
      },
      /**
       * 对菜单数据进行处理
       * @param { UtilsGMMenuOption } menuOption
       */
      handleMenuData(menuOption) {
        let menuLocalDataItemKey = menuOption.key;
        /* 菜单默认开启的状态 */
        let defaultEnable = Boolean(
          this.getLocalMenuData(menuLocalDataItemKey, menuOption.enable)
        );
        /** 油猴菜单上显示的文本 */
        let showText = menuOption.showText(menuOption.text, defaultEnable);
        const that = this;
        const GMMenuOptions = {
          /**
           * 菜单的id
           */
          id: menuOption.id,
          /**
           * 点击菜单项后是否应关闭弹出菜单
           */
          autoClose: menuOption.autoClose,
          /**
           * 菜单项的可选访问键
           */
          accessKey: menuOption.accessKey,
          /**
           * 菜单项的鼠标悬浮上的工具提示
           */
          title: menuOption.title,
        };
        /* 点击菜单后触发callback后的网页是否刷新 */
        menuOption.autoReload =
          typeof menuOption.autoReload !== "boolean"
            ? this.$default.autoReload
            : menuOption.autoReload;
        /* 点击菜单后触发callback后的网页是否存储值 */
        menuOption.isStoreValue =
          typeof menuOption.isStoreValue !== "boolean"
            ? this.$default.isStoreValue
            : menuOption.isStoreValue;
        /**
         * 用户点击菜单后的回调函数
         * @param {MouseEvent|PointerEvent} event
         */
        function clickCallBack(event) {
          let localEnable = Boolean(
            that.getLocalMenuData(menuLocalDataItemKey, defaultEnable)
          );
          if (menuOption.isStoreValue) {
            that.setLocalMenuData(menuLocalDataItemKey, !localEnable);
          }
          if (typeof menuOption.callback === "function") {
            menuOption.callback({
              key: menuLocalDataItemKey,
              enable: !localEnable,
              oldEnable: localEnable,
              event: event,
              storeValue(value) {
                that.setLocalMenuData(menuLocalDataItemKey, value);
              },
            });
          }
          /* 不刷新网页就刷新菜单 */
          if (menuOption.autoReload) {
            window.location.reload();
          } else {
            context.update();
          }
        }

        return {
          showText,
          clickCallBack,
        };
      },
      /**
       * 获取目标菜单配置数据
       * @param {string} menuKey 菜单-键key
       */
      getMenuData(menuKey) {
        return this.$data.data.find((item) => item.data.key === menuKey);
      },
      /**
       * 获取目标菜单配置
       * @param {string} menuKey 菜单-键key
       */
      getMenuOption(menuKey) {
        return this.$data.data.find((item) => item.data.key === menuKey)?.data;
      },
      /**
       * 获取目标菜单处理后的配置
       * @param {string} menuKey 菜单-键key
       */
      getMenuHandledOption(menuKey) {
        return this.$data.data.find((item) => item.handleData.key === menuKey)
          ?.handleData;
      },
    };

    /**
     * 新增菜单数据
     * @param {UtilsGMMenuOption[]|UtilsGMMenuOption} paramData
     */
    this.add = function (paramData) {
      if (Array.isArray(paramData)) {
        for (const _paramData of paramData) {
          MenuHandle.$data.data.push({
            data: _paramData,
            id: void 0,
          });
        }
      } else {
        MenuHandle.$data.data.push({
          data: paramData,
          id: void 0,
        });
      }
      this.update();
    };
    /**
     * 更新菜单数据
     * @param { ?UtilsGMMenuOption[]|UtilsGMMenuOption } options 数据
     */
    this.update = function (options) {
      /**
       * @type {UtilsGMMenuOption[]}
       */
      let optionsList = [];
      if (Array.isArray(options)) {
        optionsList = [...optionsList, ...options];
      } else if (options != null) {
        optionsList = [...optionsList, options];
      }
      optionsList.forEach((item) => {
        let targetMenu = MenuHandle.getMenuOption(item.key);
        if (targetMenu) {
          Object.assign(targetMenu, item);
        }
      });
      MenuHandle.$data.data.forEach((value) => {
        if (value.handleData) {
          value.handleData.deleteMenu();
        }
      });
      MenuHandle.init();
      MenuHandle.register(MenuHandle.$data.data);
    };
    /**
     * 卸载菜单
     * @param {number} menuId 已注册的菜单id
     */
    this.delete = function (menuId) {
      GM_Api.unregisterMenuCommand(menuId);
    };
    /**
     * 根据键值获取enable值
     * @param {string} menuKey 菜单-键key
     * @returns {boolean}
     */
    this.get = function (menuKey) {
      return this.getEnable(menuKey);
    };
    /**
     * 根据键值获取enable值
     * @param {string} menuKey 菜单-键key
     * @returns {boolean}
     */
    this.getEnable = function (menuKey) {
      return MenuHandle.getMenuHandledOption(menuKey).enable;
    };
    /**
     * 根据键值获取text值
     * @param {string} menuKey 菜单-键key
     * @returns {string}
     */
    this.getText = function (menuKey) {
      return MenuHandle.getMenuHandledOption(menuKey).text;
    };
    /**
     * 根据键值获取showText函数的值
     * @param {string} menuKey 菜单-键key
     * @returns {string}
     */
    this.getShowTextValue = function (menuKey) {
      return MenuHandle.getMenuHandledOption(menuKey).showText(
        this.getText(menuKey),
        this.get(menuKey)
      );
    };
    /**
     * 获取当前已注册菜单的id
     * @param {string} menuKey
     * @returns {?number}
     */
    this.getMenuId = function (menuKey) {
      let result = null;
      for (let index = 0; index < MenuHandle.$data.data.length; index++) {
        const optionData = MenuHandle.$data.data[index];
        if (optionData.handleData.key === menuKey) {
          result = optionData.id;
          break;
        }
      }
      return result;
    };
    /**
     * 根据键值获取accessKey值
     * @param {string} menuKey 菜单-键key
     * @returns {?string}
     */
    this.getAccessKey = function (menuKey) {
      return MenuHandle.getMenuHandledOption(menuKey).accessKey;
    };
    /**
     * 根据键值获取autoClose值
     * @param {string} menuKey 菜单-键key
     * @returns {?boolean}
     */
    this.getAutoClose = function (menuKey) {
      return MenuHandle.getMenuHandledOption(menuKey).autoClose;
    };
    /**
     * 根据键值获取autoReload值
     * @param {string} menuKey 菜单-键key
     * @returns {boolean}
     */
    this.getAutoReload = function (menuKey) {
      return MenuHandle.getMenuHandledOption(menuKey).autoReload;
    };
    /**
     * 根据键值获取callback函数
     * @param {string} menuKey 菜单-键key
     * @returns {?Function}
     */
    this.getCallBack = function (menuKey) {
      return MenuHandle.getMenuHandledOption(menuKey).callback;
    };
    /**
     * 获取当enable为true时默认显示在菜单中前面的emoji图标
     * @returns {string}
     */
    this.getEnableTrueEmoji = function () {
      return MenuHandle.$emoji.success;
    };
    /**
     * 获取当enable为false时默认显示在菜单中前面的emoji图标
     * @returns {string}
     */
    this.getEnableFalseEmoji = function () {
      return MenuHandle.$emoji.error;
    };
    /**
     * 获取本地存储的菜单外部的键名
     * @param {string} keyName
     */
    this.getLocalStorageKeyName = function () {
      return MenuHandle.$data.key;
    };
    /**
     * 设置菜单的值
     * @param {string} menuKey 菜单-键key
     * @param {any} value 需要设置的值
     */
    this.setValue = function (menuKey, value) {
      MenuHandle.setLocalMenuData(menuKey, value);
    };
    /**
     * 设置菜单的值
     * @param {string} menuKey 菜单-键key
     * @param {boolean} value 需要设置的值
     */
    this.setEnable = function (menuKey, value) {
      this.setValue(menuKey, Boolean(value));
    };
    /**
     * 设置当enable为true时默认显示在菜单中前面的emoji图标
     * @param {string} emojiString
     */
    this.setEnableTrueEmoji = function (emojiString) {
      if (typeof emojiString !== "string") {
        throw new Error("参数emojiString必须是string类型");
      }
      MenuHandle.$emoji.success = emojiString;
    };
    /**
     * 设置当enable为false时默认显示在菜单中前面的emoji图标
     * @param {string} emojiString
     */
    this.setEnableFalseEmoji = function (emojiString) {
      if (typeof emojiString !== "string") {
        throw new Error("参数emojiString必须是string类型");
      }
      MenuHandle.$emoji.error = emojiString;
    };
    /**
     * 设置本地存储的菜单外部的键名
     * @param {string} keyName
     */
    this.setLocalStorageKeyName = function (keyName) {
      if (typeof keyName !== "string") {
        throw new Error("参数keyName必须是string类型");
      }
      MenuHandle.$data.key = keyName;
    };

    this.update();
  };

  Utils.Hooks = function () {
    this.initEnv = function () {
      Function.prototype.hook = function (realFunc, hookFunc, context) {
        let _context = null; //函数上下文
        let _funcName = null; //函数名

        _context = context || window;
        _funcName = getFuncName(this);
        _context["realFunc_" + _funcName] = this;

        if (
          _context[_funcName].prototype &&
          _context[_funcName].prototype.isHooked
        ) {
          console.log("Already has been hooked,unhook first");
          return false;
        }
        function getFuncName(fn) {
          // 获取函数名
          let strFunc = fn.toString();
          let _regex = /function\s+(\w+)\s*\(/;
          let patten = strFunc.match(_regex);
          if (patten) {
            return patten[1];
          }
          return "";
        }
        try {
          eval(
            "_context[_funcName] = function " +
              _funcName +
              "(){\n" +
              "let args = Array.prototype.slice.call(arguments,0);\n" +
              "let obj = this;\n" +
              "hookFunc.apply(obj,args);\n" +
              "return _context['realFunc_" +
              _funcName +
              "'].apply(obj,args);\n" +
              "};"
          );
          _context[_funcName].prototype.isHooked = true;
          return true;
        } catch (e) {
          console.log("Hook failed,check the params.");
          return false;
        }
      };
      Function.prototype.unhook = function (realFunc, funcName, context) {
        let _context = null;
        let _funcName = null;
        _context = context || window;
        _funcName = funcName;
        if (!_context[_funcName].prototype.isHooked) {
          console.log("No function is hooked on");
          return false;
        }
        _context[_funcName] = _context["realFunc" + _funcName];
        Reflect.deleteProperty(_context, "realFunc_" + _funcName);
        return true;
      };
    };
    this.cleanEnv = function () {
      if (Function.prototype.hasOwnProperty("hook")) {
        Reflect.deleteProperty(unction.prototype, "hook");
      }
      if (Function.prototype.hasOwnProperty("unhook")) {
        Reflect.deleteProperty(unction.prototype, "unhook");
      }
      return true;
    };
  };

  Utils.Httpx = function (__xmlHttpRequest__) {
    if (typeof __xmlHttpRequest__ !== "function") {
      console.warn("Httpx未传入GM_xmlhttpRequest函数，强制默认使用fetch");
    }
    const GM_Api = {
      /**
       * @type {GM_xmlhttpRequest}
       */
      xmlHttpRequest: __xmlHttpRequest__,
    };
    /**
     * @type {HttpxDetails}
     */
    let defaultDetails = {
      url: void 0,
      timeout: 5000,
      async: false,
      responseType: void 0,
      headers: void 0,
      data: void 0,
      redirect: void 0,
      cookie: void 0,
      binary: void 0,
      nocache: void 0,
      revalidate: void 0,
      context: void 0,
      overrideMimeType: void 0,
      anonymous: void 0,
      fetch: void 0,
      fetchInit: void 0,
      user: void 0,
      password: void 0,
      onabort() {},
      onerror() {},
      ontimeout() {},
      onloadstart() {},
      onreadystatechange() {},
      onprogress() {},
    };
    /**
     * 输出请求配置
     */
    let LOG_DETAILS = false;

    const HttpxRequestHook = {
      /**
       * 发送请求前的回调
       * 如果返回false则阻止本次返回
       * @param {HttpxDetails} details 当前的请求配置
       */
      beforeRequestCallBack(details) {},
    };

    const HttpxRequestDetails = {
      /**
       * 获取请求配置
       * @param {HttpxMethod} method 当前请求方法，默认get
       * @param {(...args: any[])=>void} resolve promise回调
       * @param {HttpxDetails} details 请求配置
       * @returns
       */
      getDetails(method, resolve, details) {
        /**
         * @type {HttpxDetails}
         */
        let result = {
          url: details.url || defaultDetails.url,
          method: (method || "GET").toString().toUpperCase(),
          timeout: details.timeout || defaultDetails.timeout,
          responseType: details.responseType || defaultDetails.responseType,
          /* 对象使用深拷贝 */
          headers: Utils.deepClone(defaultDetails.headers),
          data: details.data || defaultDetails.data,
          redirect: details.redirect || defaultDetails.redirect,
          cookie: details.cookie || defaultDetails.cookie,
          binary: details.binary || defaultDetails.binary,
          nocache: details.nocache || defaultDetails.nocache,
          revalidate: details.revalidate || defaultDetails.revalidate,
          /* 对象使用深拷贝 */
          context: Utils.deepClone(details.context || defaultDetails.context),
          overrideMimeType:
            details.overrideMimeType || defaultDetails.overrideMimeType,
          anonymous: details.anonymous || defaultDetails.anonymous,
          fetch: details.fetch || defaultDetails.fetch,
          /* 对象使用深拷贝 */
          fetchInit: Utils.deepClone(defaultDetails.fetchInit),
          user: details.user || defaultDetails.user,
          password: details.password || defaultDetails.password,
          onabort(...args) {
            HttpxCallBack.onAbort(details, resolve, args);
          },
          onerror(...args) {
            HttpxCallBack.onError(details, resolve, args);
          },
          onloadstart(...args) {
            HttpxCallBack.onLoadStart(details, args);
          },
          onprogress(...args) {
            HttpxCallBack.onProgress(details, args);
          },
          onreadystatechange(...args) {
            HttpxCallBack.onReadyStateChange(details, args);
          },
          ontimeout(...args) {
            HttpxCallBack.onTimeout(details, resolve, args);
          },
          onload(...args) {
            HttpxCallBack.onLoad(details, resolve, args);
          },
        };
        if (typeof GM_Api.xmlHttpRequest !== "function") {
          result.fetch = true;
        }
        if (typeof result.headers === "object") {
          if (typeof details.headers === "object") {
            Object.keys(details.headers).forEach((keyName, index) => {
              if (
                keyName in result.headers &&
                details.headers[keyName] == null
              ) {
                /* 在默认的header中存在，且设置它新的值为空，那么就是默认的值 */
                Reflect.deleteProperty(result.headers, keyName);
              } else {
                result.headers[keyName] = details.headers[keyName];
              }
            });
          } else {
            /* details.headers为空 */
            /* 不做处理 */
          }
        } else {
          result.headers = details.headers;
        }
        if (typeof result.fetchInit === "object") {
          /* 使用assign替换且添加 */
          if (typeof details.fetchInit === "object") {
            Object.keys(details.fetchInit).forEach((keyName, index) => {
              if (
                keyName in result.fetchInit &&
                details.fetchInit[keyName] == null
              ) {
                /* 在默认的fetchInit中存在，且设置它新的值为空，那么就是默认的值 */
                Reflect.deleteProperty(result.fetchInit, keyName);
              } else {
                result.fetchInit[keyName] = details.fetchInit[keyName];
              }
            });
          }
        } else {
          result.fetchInit = details.fetchInit;
        }
        return result;
      },
      /**
       * 处理发送请求的details，去除值为undefined、空function的值
       * @param {HttpxDetails} details
       * @returns {HttpxDetails}
       */
      handle(details) {
        Object.keys(details).forEach((keyName) => {
          if (
            details[keyName] == null ||
            (details[keyName] instanceof Function &&
              Utils.isNull(details[keyName]))
          ) {
            Reflect.deleteProperty(details, keyName);
            return;
          }
        });
        if (Utils.isNull(details.url)) {
          throw new TypeError(`Utils.Httpx 参数 url不符合要求: ${details.url}`);
        }
        /* method值统一大写，兼容Via */
        details.method = details.method.toUpperCase();
        /* 判断是否是以http开头，否则主动加上origin */
        try {
          new URL(details.url);
        } catch (error) {
          if (details.url.startsWith("//")) {
            details.url = globalThis.location.protocol + details.url;
          } else if (details.url.startsWith("/")) {
            details.url = globalThis.location.origin + details.url;
          } else {
            details.url = globalThis.location.origin + "/" + details.url;
          }
        }
        return details;
      },
      /**
       * 处理fetch的配置
       * @param {HttpxDetails} details
       */
      handleFetchDetail(details) {
        /**
         * fetch的请求配置
         * @type {RequestInit}
         **/
        let fetchRequestInit = {};
        if (
          (details.method === "GET" || details.method === "HEAD") &&
          details.data != null
        ) {
          /* GET 或 HEAD 方法的请求不能包含 body 信息 */
          Reflect.deleteProperty(details, "data");
        }
        /* 中止信号控制器 */
        let abortController = new AbortController();
        let signal = abortController.signal;
        signal.onabort = () => {
          details.onabort({
            isFetch: true,
            responseText: "",
            response: null,
            readyState: 4,
            responseHeaders: "",
            status: 0,
            statusText: "",
            error: "aborted",
          });
        };
        fetchRequestInit.method = details.method ?? "GET";
        fetchRequestInit.headers = details.headers;
        fetchRequestInit.body = details.data;
        fetchRequestInit.mode = "cors";
        fetchRequestInit.credentials = "include";
        fetchRequestInit.cache = "no-cache";
        fetchRequestInit.redirect = "follow";
        fetchRequestInit.referrerPolicy = "origin-when-cross-origin";
        fetchRequestInit.signal = signal;
        Object.assign(fetchRequestInit, details.fetchInit || {});
        return {
          fetchDetails: details,
          fetchRequestInit: fetchRequestInit,
          abortController: abortController,
        };
      },
    };
    const HttpxCallBack = {
      /**
       * onabort请求被取消-触发
       * @param {HttpxDetails} details 配置
       * @param {()=>void} resolve 回调
       * @param {any[]} argumentsList 参数列表
       */
      onAbort(details, resolve, argumentsList) {
        if ("onabort" in details) {
          details.onabort.apply(this, argumentsList);
        } else if ("onabort" in defaultDetails) {
          defaultDetails.onabort.apply(this, argumentsList);
        }
        resolve({
          status: false,
          data: [...argumentsList],
          msg: "请求被取消",
          type: "onabort",
        });
      },

      /**
       * onerror请求异常-触发
       * @param {HttpxDetails} details 配置
       * @param {()=>void} resolve 回调
       * @param {any[]} argumentsList 响应的参数列表
       */
      onError(details, resolve, argumentsList) {
        if ("onerror" in details) {
          details.onerror.apply(this, argumentsList);
        } else if ("onerror" in defaultDetails) {
          defaultDetails.onerror.apply(this, argumentsList);
        }
        let response = argumentsList;
        if (response.length) {
          response = response[0];
        }
        resolve({
          status: false,
          data: response,
          details: details,
          msg: "请求异常",
          type: "onerror",
        });
      },
      /**
       * ontimeout请求超时-触发
       * @param {HttpxDetails} details 配置
       * @param {()=>void} resolve 回调
       * @param {any[]} argumentsList 参数列表
       */
      onTimeout(details, resolve, argumentsList) {
        if ("ontimeout" in details) {
          details.ontimeout.apply(this, argumentsList);
        } else if ("ontimeout" in defaultDetails) {
          defaultDetails.ontimeout.apply(this, argumentsList);
        }
        resolve({
          status: false,
          data: [...argumentsList],
          msg: "请求超时",
          type: "ontimeout",
        });
      },

      /**
       * onloadstart请求开始-触发
       * @param {HttpxDetails} details 配置
       * @param {any[]} argumentsList 参数列表
       */
      onLoadStart(details, argumentsList) {
        if ("onloadstart" in details) {
          details.onloadstart.apply(this, argumentsList);
        } else if ("onloadstart" in defaultDetails) {
          defaultDetails.onloadstart.apply(this, argumentsList);
        }
      },
      /**
       * onload加载完毕-触发
       * @param {HttpxDetails} details 请求的配置
       * @param {()=>void} resolve 回调
       * @param {...HttpxAsyncResultData[]} argumentsList 参数列表
       */
      onLoad(details, resolve, argumentsList) {
        /* X浏览器会因为设置了responseType导致不返回responseText */
        let response = argumentsList[0];
        /* responseText为空，response不为空的情况 */
        if (
          Utils.isNull(response["responseText"]) &&
          Utils.isNotNull(response["response"])
        ) {
          if (typeof response["response"] === "object") {
            Utils.tryCatch().run(() => {
              response["responseText"] = JSON.stringify(response["response"]);
            });
          } else {
            response["responseText"] = response["response"];
          }
        }

        /* response为空，responseText不为空的情况 */
        if (
          response["response"] == null &&
          typeof response["responseText"] === "string" &&
          response["responseText"].trim() !== ""
        ) {
          if (details.responseType === "json") {
            response["response"] = Utils.toJSON(response["responseText"]);
          } else if (details.responseType === "document") {
            let parser = new DOMParser();
            response["response"] = parser.parseFromString(
              response["responseText"],
              "text/html"
            );
          } else if (details.responseType === "arraybuffer") {
            let encoder = new TextEncoder();
            let arrayBuffer = encoder.encode(response["responseText"]);
            response["response"] = arrayBuffer;
          } else if (details.responseType === "blob") {
            let encoder = new TextEncoder();
            let arrayBuffer = encoder.encode(response["responseText"]);
            response["response"] = new Blob([arrayBuffer]);
          } else {
            response["response"] = response["responseText"];
          }
        }
        /* Stay扩展中没有finalUrl，对应的是responseURL */
        if (response["finalUrl"] == null && response["responseURL"] != null) {
          response["finalUrl"] = response["responseURL"];
        }
        /* 状态码2xx都是成功的 */
        if (Math.floor(response.status / 100) === 2) {
          resolve({
            status: true,
            data: response,
            details: details,
            msg: "请求完毕",
            type: "onload",
          });
        } else {
          HttpxCallBack.onError(details, resolve, argumentsList);
        }
      },
      /**
       * onprogress上传进度-触发
       * @param {HttpxDetails} details 配置
       * @param {any[]} argumentsList 参数列表
       */
      onProgress(details, argumentsList) {
        if ("onprogress" in details) {
          details.onprogress.apply(this, argumentsList);
        } else if ("onprogress" in defaultDetails) {
          defaultDetails.onprogress.apply(this, argumentsList);
        }
      },
      /**
       * onreadystatechange准备状态改变-触发
       * @param {HttpxDetails} details 配置
       * @param {any[]} argumentsList 参数列表
       */
      onReadyStateChange(details, argumentsList) {
        if ("onreadystatechange" in details) {
          details.onreadystatechange.apply(this, argumentsList);
        } else if ("onreadystatechange" in defaultDetails) {
          defaultDetails.onreadystatechange.apply(this, argumentsList);
        }
      },
    };

    const HttpxRequest = {
      /**
       * 发送请求
       * @param {HttpxDetails} details
       */
      request(details) {
        if (LOG_DETAILS) {
          console.log("Httpx请求配置👇", details);
        }
        if (typeof HttpxRequestHook.beforeRequestCallBack === "function") {
          let hookResult = HttpxRequestHook.beforeRequestCallBack(details);
          if (typeof hookResult === "boolean" && !hookResult) {
            return;
          }
        }
        if (details.fetch) {
          const { fetchDetails, fetchRequestInit, abortController } =
            HttpxRequestDetails.handleFetchDetail(details);
          this.fetch(fetchDetails, fetchRequestInit, abortController);
        } else {
          Reflect.deleteProperty(details, "fetchInit");
          this.xmlHttpRequest(details);
        }
      },
      /**
       * 使用油猴函数GM_xmlhttpRequest发送请求
       * @param {HttpxDetails} details
       */
      xmlHttpRequest(details) {
        GM_Api.xmlHttpRequest(details);
      },
      /**
       * 使用fetch发送请求
       * @param {HttpxDetails} details
       * @param {RequestInit} fetchRequestInit
       * @param {AbortController} abortController
       */
      fetch(details, fetchRequestInit, abortController) {
        fetch(details.url, fetchRequestInit)
          .then(async (resp) => {
            /**
             * @type {HttpxAsyncResultData}
             */
            let httpxResponse = {
              isFetch: true,
              finalUrl: resp.url,
              readyState: 4,
              status: resp.status,
              statusText: resp.statusText,
              response: void 0,
              responseFetchHeaders: resp.headers,
              responseHeaders: "",
              responseText: void 0,
              responseType: details.responseType,
              responseXML: void 0,
            };
            Object.assign(httpxResponse, details.context || {});

            for (const [key, value] of resp.headers.entries()) {
              httpxResponse.responseHeaders += `${key}: ${value}\n`;
            }

            /* 如果是流式传输，直接返回 */
            if (
              details.responseType === "stream" ||
              (resp.headers.has("Content-Type") &&
                resp.headers.get("Content-Type").includes("text/event-stream"))
            ) {
              httpxResponse["isStream"] = true;
              httpxResponse.response = resp.body;
              Reflect.deleteProperty(httpxResponse, "responseText");
              Reflect.deleteProperty(httpxResponse, "responseXML");
              details.onload(httpxResponse);
              return;
            }

            /** 响应 */
            let response = "";
            /** 响应字符串 */
            let responseText = "";
            /** 响应xml文档 */
            let responseXML = "";

            let arrayBuffer = await resp.arrayBuffer;

            let encoding = "utf-8";
            if (resp.headers.has("Content-Type")) {
              let charsetMatched = resp.headers
                .get("Content-Type")
                .match(/charset=(.+)/);
              if (charsetMatched) {
                encoding = charsetMatched[1];
              }
            }
            let textDecoder = new TextDecoder(encoding);
            responseText = textDecoder.decode(await resp.arrayBuffer());
            response = responseText;

            if (details.responseType === "arraybuffer") {
              response = arrayBuffer;
            } else if (details.responseType === "blob") {
              response = new Blob([arrayBuffer]);
            } else if (
              details.responseType === "document" ||
              details.responseType == null
            ) {
              let parser = new DOMParser();
              response = parser.parseFromString(responseText, "text/html");
            } else if (details.responseType === "json") {
              response = Utils.toJSON(responseText);
            }
            let parser = new DOMParser();
            responseXML = parser.parseFromString(responseText, "text/xml");

            httpxResponse.response = response;
            httpxResponse.responseText = responseText;
            httpxResponse.responseXML = responseXML;

            details.onload(httpxResponse);
          })
          .catch((err) => {
            if (err.name === "AbortError") {
              return;
            }
            details.onerror({
              isFetch: true,
              finalUrl: details.url,
              readyState: 4,
              status: 0,
              statusText: "",
              responseHeaders: "",
              responseText: "",
              error: err,
            });
          });
        details.onloadstart({
          isFetch: true,
          finalUrl: details.url,
          readyState: 1,
          responseHeaders: "",
          responseText: "",
          status: 0,
          statusText: "",
        });
        return {
          abort() {
            abortController.abort();
          },
        };
      },
    };

    /**
     * 覆盖当前配置
     * @param {HttpxDetailsConfig} details
     */
    this.config = function (details = {}) {
      if (
        "logDetails" in details &&
        typeof details["logDetails"] === "boolean"
      ) {
        LOG_DETAILS = details["logDetails"];
      }

      defaultDetails = Utils.assign(defaultDetails, details);
    };

    /**
     * 修改xmlHttpRequest
     * @param {Function} httpRequest 网络请求函数
     */
    this.setXMLHttpRequest = function (httpRequest) {
      GM_Api.xmlHttpRequest = httpRequest;
    };

    /**
     * GET 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    this.get = async function (...args) {
      let details = {};
      if (typeof args[0] === "string") {
        details.url = args[0];
        if (typeof args[1] === "object") {
          details = args[1];
          details.url = args[0];
        }
      } else {
        details = args[0];
      }
      return new Promise((resolve) => {
        let requestDetails = HttpxRequestDetails.getDetails(
          "get",
          resolve,
          details
        );
        Reflect.deleteProperty(requestDetails, "onprogress");
        requestDetails = HttpxRequestDetails.handle(requestDetails);
        HttpxRequest.request(requestDetails);
      });
    };
    /**
     * POST 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    this.post = async function (...args) {
      let details = {};
      if (typeof args[0] === "string") {
        details.url = args[0];
        if (typeof args[1] === "object") {
          details = args[1];
          details.url = args[0];
        }
      } else {
        details = args[0];
      }
      return new Promise((resolve) => {
        let requestDetails = HttpxRequestDetails.getDetails(
          "post",
          resolve,
          details
        );
        requestDetails = HttpxRequestDetails.handle(requestDetails);
        HttpxRequest.request(requestDetails);
      });
    };
    /**
     * HEAD 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    this.head = async function (...args) {
      let details = {};
      if (typeof args[0] === "string") {
        details.url = args[0];
        if (typeof args[1] === "object") {
          details = args[1];
          details.url = args[0];
        }
      } else {
        details = args[0];
      }
      return new Promise((resolve) => {
        let requestDetails = HttpxRequestDetails.getDetails(
          "head",
          resolve,
          details
        );
        Reflect.deleteProperty(requestDetails, "onprogress");
        requestDetails = HttpxRequestDetails.handle(requestDetails);
        HttpxRequest.request(requestDetails);
      });
    };

    /**
     * OPTIONS 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    this.options = async function (...args) {
      let details = {};
      if (typeof args[0] === "string") {
        details.url = args[0];
        if (typeof args[1] === "object") {
          details = args[1];
          details.url = args[0];
        }
      } else {
        details = args[0];
      }
      return new Promise((resolve) => {
        let requestDetails = HttpxRequestDetails.getDetails(
          "options",
          resolve,
          details
        );
        Reflect.deleteProperty(requestDetails, "onprogress");
        requestDetails = HttpxRequestDetails.handle(requestDetails);
        HttpxRequest.request(requestDetails);
      });
    };

    /**
     * DELETE 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    this.delete = async function (...args) {
      let details = {};
      if (typeof args[0] === "string") {
        details.url = args[0];
        if (typeof args[1] === "object") {
          details = args[1];
          details.url = args[0];
        }
      } else {
        details = args[0];
      }
      return new Promise((resolve) => {
        let requestDetails = HttpxRequestDetails.getDetails(
          "delete",
          resolve,
          details
        );
        Reflect.deleteProperty(requestDetails, "onprogress");
        requestDetails = HttpxRequestDetails.handle(requestDetails);
        HttpxRequest.request(requestDetails);
      });
    };

    /**
     * PUT 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    this.put = async function (...args) {
      let details = {};
      if (typeof args[0] === "string") {
        details.url = args[0];
        if (typeof args[1] === "object") {
          details = args[1];
          details.url = args[0];
        }
      } else {
        details = args[0];
      }
      return new Promise((resolve) => {
        let requestDetails = HttpxRequestDetails.getDetails(
          "put",
          resolve,
          details
        );
        requestDetails = HttpxRequestDetails.handle(requestDetails);
        HttpxRequest.request(requestDetails);
      });
    };
  };

  Utils.indexedDB = function (
    dbName = "default_db",
    storeName = "default_form",
    dbVersion = 1
  ) {
    this.dbName = dbName;
    /* websql的版本号，由于ios的问题，版本号的写法不一样 */
    this.slqVersion = "1";
    this.dbVersion = dbVersion;
    this.storeName = storeName;
    /* 监听IndexDB */
    this.indexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB;
    if (!this.indexedDB) {
      alert("很抱歉，您的浏览器不支持indexedDB");
    }
    /* 缓存数据库，避免同一个页面重复创建和销毁 */
    this.db = {};
    this.store = null;
    this.errorCode = {
      /* 错误码 */
      success: {
        code: 200,
        msg: "操作成功",
      },
      error: {
        code: 401,
        msg: "操作失败",
      },
      open: { code: 91001, msg: "打开数据库失败" },
      save: { code: 91002, msg: "保存数据失败" },
      get: { code: 91003, msg: "获取数据失败" },
      delete: { code: 91004, msg: "删除数据失败" },
      deleteAll: { code: 91005, msg: "清空数据库失败" },
    };
    let that = this;
    /**
     * 创建 “表”
     * @param {string} dbName 表名
     * @returns
     */
    this.createStore = function (dbName) {
      let txn, store;
      if (that.indexedDB) {
        /* 如果是支持IndexDB的 */
        txn = that.db[dbName].transaction(that.storeName, "readwrite");
        /* IndexDB的读写权限 */
        store = txn.objectStore(that.storeName);
      }
      return store;
    };
    /**
     * 打开数据库
     * @param {function} callback  回调
     * @param {string} dbName 数据库名
     */
    this.open = function (callback, dbName) {
      /* 打开数据库 */
      if (that.indexedDB) {
        /* 如果支持IndexDB */
        if (!that.db[dbName]) {
          /* 如果缓存中没有，则进行数据库的创建或打开，提高效率 */
          let request = that.indexedDB.open(dbName, that.dbVersion);
          request.onerror = function (e) {
            callback({
              code: that.errorCode.open.code,
              msg: that.errorCode.open.msg,
              error: e,
            });
          };
          request.onsuccess = function (e) {
            if (!that.db[dbName]) {
              that.db[dbName] = e.target.result;
            }
            let store = that.createStore(dbName);
            callback(store);
          };
          request.onupgradeneeded = function (e) {
            that.db[dbName] = e.target.result;
            let store = that.db[dbName].createObjectStore(that.storeName, {
              keyPath: "key",
            });
            store.transaction.oncomplete = function (event) {
              callback(store);
            };
          };
        } else {
          /* 如果缓存中已经打开了数据库，就直接使用 */
          let store = that.createStore(dbName);
          callback(store);
        }
      }
    };
    /**
     * 保存数据到数据库
     * @param {string} key 数据key
     * @param {any} value 数据值
     * @returns {Promise< {
     *    code: number,
     *    msg: string,
     *    success: boolean
     * }>}
     */
    this.save = async function (key, value) {
      if (that.indexedDB) {
        return new Promise((resolve, reject) => {
          let dbName = that.dbName;
          let inData = {
            key: key,
            value: value,
          };
          that.open(function (result) {
            let error = result.hasOwnProperty("error");
            if (error) {
              resolve(result);
            } else {
              let request = result.put(inData);
              request.onsuccess = function (e) {
                /* 保存成功有success 字段 */
                resolve({
                  code: that.errorCode.success.code,
                  msg: that.errorCode.success.msg,
                  success: true,
                });
              };
              request.onerror = function (e) {
                resolve({
                  code: that.errorCode.save.code,
                  msg: that.errorCode.save.msg,
                  error: e,
                });
              };
            }
          }, dbName);
        });
      }
    };
    /**
     * 根据key获取值
     * @param {string} key 数据key
     * @returns {Promise< {
     *    code: number,
     *    msg: string,
     *    data: [...any],
     *    success: true
     * }| {
     *    code: number,
     *    msg: string,
     *    error: Error,
     *    result: any,
     * } >}
     */
    this.get = async function (key) {
      return new Promise((resolve, reject) => {
        let dbName = that.dbName;
        if (that.indexedDB) {
          that.open(function (result) {
            /* 判断返回的数据中是否有error字段 */
            let error = result.hasOwnProperty("error");
            if (error) {
              reject({
                code: that.errorCode.open.get,
                msg: that.errorCode.get.msg,
                error: error,
                result: result,
              });
            } else {
              let request = result.get(key);
              request.onsuccess = function (e) {
                let result = e.target.result;
                let data = result ? result.value : void 0;
                resolve({
                  code: data
                    ? that.errorCode.success.code
                    : that.errorCode.error.code,
                  msg: data
                    ? that.errorCode.success.msg
                    : that.errorCode.error.msg,
                  data: data || [],
                  success: true,
                });
              };
              request.onerror = function (e) {
                reject({
                  code: that.errorCode.get.code,
                  msg: that.errorCode.get.msg,
                  result: result,
                  error: e,
                });
              };
            }
          }, dbName);
        }
      });
    };
    /**
     * 正则获取数据
     * @param {string} key 数据键
     * @returns { Promise<{
     *    code: number,
     *    msg: string,
     *    data: [...any],
     *    success: true
     * }|{
     *    code: number,
     *    msg: string,
     *    error: Error,
     *    result: any,
     * }> }
     */
    this.regexpGet = async function (key) {
      let list = [];
      return new Promise((resolve, reject) => {
        /* 正则查询 */
        let dbName = that.dbName;
        if (that.indexedDB) {
          that.open(function (result) {
            /* 判断返回的数据中是否有error字段 */
            let error = result.hasOwnProperty("error");
            if (error) {
              reject({
                code: that.errorCode.open.get,
                msg: that.errorCode.get.msg,
                error: error,
                result: result,
              });
            } else {
              let request = result.getAll();
              request.onsuccess = function (e) {
                let result = e.target.result;
                if (result.length !== 0) {
                  result.forEach((item, index) => {
                    if (item["key"].match(key)) {
                      let concatList = item["value"];
                      concatList["key"] = item["key"];
                      list = [...list, concatList];
                    }
                  });
                }
                resolve({
                  code: that.errorCode.success.code,
                  msg: that.errorCode.success.msg,
                  data: list,
                  success: true,
                });
              };
              request.onerror = function (e) {
                reject({
                  code: that.errorCode.get.code,
                  msg: that.errorCode.get.msg,
                  result: result,
                  error: e,
                });
              };
            }
          }, dbName);
        }
      });
    };
    /**
     * 删除数据
     * @param {string} key 数据键
     * @returns {Promise<{
     *    code: number,
     *    msg: string,
     *    success: true,
     * }|{
     *    code: number,
     *    msg: string,
     *    error: Error,
     * }>}
     */
    this.delete = async function (key) {
      return new Promise((resolve, reject) => {
        /* 根据key删除某条数据 */
        let dbName = that.dbName;
        if (that.indexedDB) {
          that.open(function (result) {
            let error = result.hasOwnProperty("error");
            if (error) {
              resolve(result);
            } else {
              let request = result.get(key);
              request.onsuccess = function (e) {
                let recode = e.target.result;
                if (recode) {
                  request = result.delete(key);
                }
                resolve({
                  code: recode
                    ? that.errorCode.success.code
                    : that.errorCode.error.code,
                  msg: recode
                    ? that.errorCode.success.msg
                    : that.errorCode.error.msg,
                  success: true,
                });
              };
              request.onerror = function (e) {
                resolve({
                  code: that.errorCode.delete.code,
                  msg: that.errorCode.delete.msg,
                  error: e,
                });
              };
            }
          }, dbName);
        }
      });
    };
    /**
     * 删除所有数据
     * @returns {Promise<{
     *    code: number,
     *    msg: string,
     *    error: Error,
     *    result: any,
     * }|{
     *    code: number,
     *    msg: string,
     *    success: true,
     * }>}
     */
    this.deleteAll = async function () {
      return new Promise((resolve, reject) => {
        /* 清空数据库 */
        let dbName = that.dbName;
        if (that.indexedDB) {
          that.open(function (result) {
            let error = result.hasOwnProperty("error");
            if (error) {
              resolve({
                code: that.errorCode.deleteAll.code,
                msg: that.errorCode.deleteAll.msg,
                error: error,
                result: result,
              });
            } else {
              result.clear();
              resolve({
                code: that.errorCode.success.code,
                msg: that.errorCode.success.msg,
                success: true,
              });
            }
          }, dbName);
        }
      });
    };
  };

  Utils.isDOM = function (target) {
    return target instanceof Node;
  };

  Utils.isFullscreenEnabled = function () {
    return !!(
      document.fullscreenEnabled ||
      document.webkitFullScreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullScreenEnabled
    );
  };

  Utils.isJQuery = function (target) {
    let result = false;
    if (typeof jQuery === "object" && target instanceof jQuery) {
      result = true;
    }
    if (target == null) {
      return false;
    }
    if (typeof target === "object") {
      /* 也有种可能，这个jQuery对象是1.8.3版本的，页面中的jQuery是3.4.1版本的 */
      let jQueryProps = [
        "add",
        "addBack",
        "addClass",
        "after",
        "ajaxComplete",
        "ajaxError",
        "ajaxSend",
        "ajaxStart",
        "ajaxStop",
        "ajaxSuccess",
        "animate",
        "append",
        "appendTo",
        "attr",
        "before",
        "bind",
        "blur",
        "change",
        "children",
        "clearQueue",
        "click",
        "clone",
        "closest",
        "constructor",
        "contents",
        "contextmenu",
        "css",
        "data",
        "dblclick",
        "delay",
        "delegate",
        "dequeue",
        "each",
        "empty",
        "end",
        "eq",
        "extend",
        "fadeIn",
        "fadeOut",
        "fadeTo",
        "fadeToggle",
        "filter",
        "find",
        "first",
        "focus",
        "focusin",
        "focusout",
        "get",
        "has",
        "hasClass",
        "height",
        "hide",
        "hover",
        "html",
        "index",
        "init",
        "innerHeight",
        "innerWidth",
        "insertAfter",
        "insertBefore",
        "is",
        "jquery",
        "keydown",
        "keypress",
        "keyup",
        "last",
        "load",
        "map",
        "mousedown",
        "mouseenter",
        "mouseleave",
        "mousemove",
        "mouseout",
        "mouseover",
        "mouseup",
        "next",
        "nextAll",
        "not",
        "off",
        "offset",
        "offsetParent",
        "on",
        "one",
        "outerHeight",
        "outerWidth",
        "parent",
        "parents",
        "position",
        "prepend",
        "prependTo",
        "prev",
        "prevAll",
        "prevUntil",
        "promise",
        "prop",
        "pushStack",
        "queue",
        "ready",
        "remove",
        "removeAttr",
        "removeClass",
        "removeData",
        "removeProp",
        "replaceAll",
        "replaceWith",
        "resize",
        "scroll",
        "scrollLeft",
        "scrollTop",
        "select",
        "show",
        "siblings",
        "slice",
        "slideDown",
        "slideToggle",
        "slideUp",
        "sort",
        "splice",
        "text",
        "toArray",
        "toggle",
        "toggleClass",
        "trigger",
        "triggerHandler",
        "unbind",
        "width",
        "wrap",
      ];
      for (const jQueryPropsName of jQueryProps) {
        if (!(jQueryPropsName in target)) {
          result = false;
          /* console.log(jQueryPropsName); */
          break;
        } else {
          result = true;
        }
      }
    }
    return result;
  };

  Utils.isNativeFunc = function (target) {
    return Boolean(
      target.toString().match(/^function .*\(\) { \[native code\] }$/)
    );
  };

  Utils.isNearBottom = function (nearValue = 50) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    var documentHeight = document.documentElement.scrollHeight;
    return scrollTop + windowHeight >= documentHeight - nearValue;
  };

  Utils.isNotNull = function (...args) {
    return !Utils.isNull.apply(this, args);
  };

  Utils.isNull = function (...args) {
    let result = true;
    let checkList = [...args];
    for (const objItem of checkList) {
      let itemResult = false;
      if (objItem === null || objItem === undefined) {
        itemResult = true;
      } else {
        switch (typeof objItem) {
          case "object":
            if (typeof objItem[Symbol.iterator] === "function") {
              /* 可迭代 */
              itemResult = objItem.length === 0;
            } else {
              itemResult = Object.keys(objItem).length === 0;
            }
            break;
          case "number":
            itemResult = objItem === 0;
            break;
          case "string":
            itemResult =
              objItem.trim() === "" ||
              objItem === "null" ||
              objItem === "undefined";
            break;
          case "boolean":
            itemResult = !objItem;
            break;
          case "function":
            let funcStr = objItem.toString().replace(/\s/g, "");
            /* 排除()=>{}、(xxx="")=>{}、function(){}、function(xxx=""){} */
            itemResult = Boolean(
              funcStr.match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/)
            );
            break;
        }
      }
      result = result && itemResult;
    }

    return result;
  };

  Utils.isPhone = function (userAgent = navigator.userAgent) {
    return Boolean(/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(userAgent));
  };

  Utils.isSameChars = function (targetStr, coefficient = 1) {
    if (typeof targetStr !== "string") {
      throw new TypeError("参数 str 必须是 string 类型");
    }
    if (targetStr.length < 2) {
      return false;
    }
    targetStr = targetStr.toLowerCase();
    const targetCharMap = {};
    let targetStrLength = 0;
    for (const char of targetStr) {
      if (Reflect.has(targetCharMap, char)) {
        targetCharMap[char]++;
      } else {
        targetCharMap[char] = 1;
      }
      targetStrLength++;
    }
    let result = false;
    for (const char in targetCharMap) {
      if (targetCharMap[char] / targetStrLength >= coefficient) {
        result = true;
        break;
      }
    }
    return result;
  };

  Utils.isThemeDark = function () {
    return globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  Utils.isVisible = function (element, inView = false) {
    let needCheckDomList = [];
    if (element instanceof Array || element instanceof NodeList) {
      needCheckDomList = [...element];
    } else {
      needCheckDomList = [element];
    }
    let result = true;
    for (const domItem of needCheckDomList) {
      let domDisplay = window.getComputedStyle(domItem);
      if (domDisplay.display === "none") {
        result = false;
      } else {
        let domClientRect = domItem.getBoundingClientRect();
        if (inView) {
          let viewportWidth =
            window.innerWidth || document.documentElement.clientWidth;
          let viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;
          result = !(
            domClientRect.right < 0 ||
            domClientRect.left > viewportWidth ||
            domClientRect.bottom < 0 ||
            domClientRect.top > viewportHeight
          );
        } else {
          result = Boolean(domItem.getClientRects().length);
        }
      }
      if (!result) {
        /* 有一个不可见就退出循环 */
        break;
      }
    }
    return result;
  };

  Utils.isWebView_Via = function () {
    let result = true;
    if (typeof top.window.via === "object") {
      for (const key in Object.values(top.window.via)) {
        if (Reflect.has(top.window.via, key)) {
          let objValueFunc = top.window.via[key];
          if (
            typeof objValueFunc === "function" &&
            Utils.isNativeFunc(objValueFunc)
          ) {
            result = true;
          } else {
            result = false;
            break;
          }
        }
      }
    } else {
      result = false;
    }
    return result;
  };

  Utils.isWebView_X = function () {
    let result = true;
    if (typeof top.window.mbrowser === "object") {
      for (const key in Object.values(top.window.mbrowser)) {
        if (Reflect.has(top.window.mbrowser, key)) {
          let objValueFunc = top.window.mbrowser[key];
          if (
            typeof objValueFunc === "function" &&
            Utils.isNativeFunc(objValueFunc)
          ) {
            result = true;
          } else {
            result = false;
            break;
          }
        }
      }
    } else {
      result = false;
    }
    return result;
  };

  Utils.parseObjectToArray = function (target) {
    if (typeof target !== "object") {
      throw new Error(
        "Utils.parseObjectToArray 参数 target 必须为 object 类型"
      );
    }
    let result = [];
    Object.keys(target).forEach(function (keyName) {
      result = result.concat(target[keyName]);
    });
    return result;
  };

  Utils.listenKeyboard = function (target, eventName = "keypress", callback) {
    if (
      typeof target !== "object" ||
      (typeof target["addEventListener"] !== "function" &&
        typeof target["removeEventListener"] !== "function")
    ) {
      throw new Error(
        "Utils.listenKeyboard 参数 target 必须为 Window|HTMLElement 类型"
      );
    }
    let keyEvent = function (event) {
      let keyName = event.key || event.code;
      let keyValue = event.charCode || event.keyCode || event.which;
      let otherCodeList = [];
      if (event.ctrlKey) {
        otherCodeList.push("ctrl");
      }
      if (event.altKey) {
        otherCodeList.push("alt");
      }
      if (event.metaKey) {
        otherCodeList.push("meta");
      }
      if (event.shiftKey) {
        otherCodeList.push("shift");
      }
      if (typeof callback === "function") {
        callback(keyName, keyValue, otherCodeList, event);
      }
    };
    target.addEventListener(eventName, keyEvent);
    return {
      removeListen() {
        target.removeEventListener(eventName, keyEvent);
      },
    };
  };

  Utils.LockFunction = function (callback, context, delayTime = 0) {
    let flag = false;
    let that = this;
    context = context || this;
    /**
     * 锁
     */
    this.lock = function () {
      flag = true;
    };
    /**
     * 解锁
     */
    this.unlock = function () {
      setTimeout(() => {
        flag = false;
      }, delayTime);
    };
    /**
     * 执行
     */
    this.run = async function (...args) {
      if (flag) {
        return;
      }
      that.lock();
      await callback.apply(context, args);
      that.unlock();
    };
  };

  Utils.Log = function (
    _GM_info_ = {
      script: {
        name: "Utils.Log",
      },
    },
    console = globalThis.console
  ) {
    let msgColorDetails = [
      "font-weight: bold; color: cornflowerblue",
      "font-weight: bold; color: cornflowerblue",
      "font-weight: bold; color: darkorange",
      "font-weight: bold; color: cornflowerblue",
    ];
    /**
     * @type {UtilsLogOptions}
     */
    let details = {
      tag: true,
      successColor: "#0000FF",
      errorColor: "#FF0000",
      infoColor: "0",
      warnColor: "0",
      debug: false,
      autoClearConsole: false,
      logMaxCount: 999,
    };
    let logCount = 0;
    /**
     * 解析Error的堆栈获取实际调用者的函数名及函数所在的位置
     * @param {string[]} stack
     * @returns {{
     *   name: string,
     *   position: string,
     * }}
     */
    let parseErrorStack = function (stack) {
      let result = {
        name: "",
        position: "",
      };
      for (let stackString of stack) {
        stackString = stackString.trim();
        let stackFunctionName = stackString.match(/^at[\s]+(.+?)[\s]+/i);
        let stackFunctionNamePosition = stackString.match(
          /^at[\s]+.+[\s]+\((.+?)\)/i
        );
        if (stackFunctionName == null) {
          continue;
        }
        stackFunctionName = stackFunctionName[stackFunctionName.length - 1];
        stackFunctionNamePosition =
          stackFunctionNamePosition[stackFunctionNamePosition.length - 1];
        if (
          stackFunctionName === "" ||
          stackFunctionName.match(
            new RegExp(
              "(^Utils.Log.|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each)",
              "g"
            )
          )
        ) {
          continue;
        } else {
          result.name = stackFunctionName;
          result.position = stackFunctionNamePosition;
          break;
        }
      }
      if (result.position === "") {
        let lastStackString = stack[stack.length - 1].trim();
        if (lastStackString.startsWith("at chrome-extension://")) {
          let lastStackMatch = lastStackString.match(/^at[\s]+(.+)/);
          if (lastStackMatch) {
            result.position = lastStackMatch[lastStackMatch.length - 1];
          }
        }
      }
      if (result.position === "") {
        result.position = stack[stack.length - 1]
          .trim()
          .replace(/^at[\s]*/g, "");
      }
      return result;
    };
    /**
     * 待恢复的函数或对象
     */
    let recoveryList = [];
    /**
     * 检测清理控制台
     * @this {Utils.Log}
     */
    let checkClearConsole = function () {
      logCount++;
      if (details.autoClearConsole && logCount > details.logMaxCount) {
        console.clear();
        logCount = 0;
      }
    };
    /**
     * 输出内容
     * @param {any} msg 需要输出的内容
     * @param {string} color 颜色
     * @param {string|undefined} otherStyle 其它CSS
     * @this {Utils.Log}
     */
    let printContent = function (msg, color, otherStyle) {
      checkClearConsole.apply(this);
      otherStyle = otherStyle || "";
      let stackSplit = new Error().stack.split("\n");
      stackSplit.splice(0, 2);
      let { name: callerName, position: callerPosition } =
        parseErrorStack(stackSplit);
      let tagName = this.tag;
      function consoleMsg(_msg_) {
        if (typeof _msg_ === "string") {
          console.log(
            `%c[${tagName}%c-%c${callerName}%c]%c %s`,
            ...msgColorDetails,
            `color: ${color};${otherStyle}`,
            _msg_
          );
        } else if (typeof _msg_ === "number") {
          console.log(
            `%c[${tagName}%c-%c${callerName}%c]%c %d`,
            ...msgColorDetails,
            `color: ${color};${otherStyle}`,
            _msg_
          );
        } else if (typeof _msg_ === "object") {
          console.log(
            `%c[${tagName}%c-%c${callerName}%c]%c %o`,
            ...msgColorDetails,
            `color: ${color};${otherStyle}`,
            _msg_
          );
        } else {
          console.log(_msg_);
        }
      }
      if (Array.isArray(msg)) {
        msg.forEach((item) => {
          consoleMsg(item);
        });
      } else {
        consoleMsg(msg);
      }
      if (details.debug) {
        /* 如果开启调试模式，输出堆栈位置 */
        console.log(callerPosition);
      }
    };
    /**
     * 前面的TAG标志
     */
    this.tag = _GM_info_?.script?.name || "Utils.Log";
    /**
     * 控制台-普通输出
     * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     */
    this.info = function (msg, color = details.infoColor, otherStyle) {
      printContent.call(this, msg, color, otherStyle);
    };
    /**
     * 控制台-警告输出
     * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     */
    this.warn = function (
      msg,
      color = details.warnColor,
      otherStyle = "background: #FEF6D5;padding: 4px 6px 4px 0px;"
    ) {
      printContent.call(this, msg, color, otherStyle);
    };
    /**
     * 控制台-错误输出
     * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     */
    this.error = function (msg, color = details.errorColor, otherStyle) {
      printContent.call(this, msg, color, otherStyle);
    };
    /**
     * 控制台-成功输出
     * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     */
    this.success = function (msg, color = details.successColor, otherStyle) {
      printContent.call(this, msg, color, otherStyle);
    };
    /**
     * 控制台-输出表格
     * @param {object[]} msg
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     * @example
     * log.table([{"名字":"example","值":"123"},{"名字":"example2","值":"345"}])
     */
    this.table = function (msg, color = details.infoColor, otherStyle = "") {
      checkClearConsole.apply(this);
      let stack = new Error().stack.split("\n");
      stack.splice(0, 1);
      let errorStackParse = parseErrorStack(stack);
      let stackFunctionName = errorStackParse.name;
      let stackFunctionNamePosition = errorStackParse.position;
      let callerName = stackFunctionName;
      console.log(
        `%c[${this.tag}%c-%c${callerName}%c]%c`,
        ...msgColorDetails,
        `color: ${color};${otherStyle}`
      );
      console.table(msg);
      if (details.debug) {
        console.log(stackFunctionNamePosition);
      }
    };
    /**
     * 配置Log对象的颜色
     * @param {UtilsLogOptions} paramDetails 配置信息
     */
    this.config = function (paramDetails) {
      details = Object.assign(details, paramDetails);
    };
    /**
     * 禁用输出
     */
    this.disable = function () {
      let that = this;
      Object.keys(this)
        .filter((keyName) => Boolean(keyName.match(/info|error|success|table/)))
        .forEach((keyName) => {
          let value = {};
          value[keyName] = that[keyName];
          recoveryList = [...recoveryList, value];
          that[keyName] = () => {};
        });
    };
    /**
     * 恢复输出
     */
    this.recovery = function () {
      let that = this;
      recoveryList.forEach((item) => {
        let keyName = Object.keys(item);
        that[keyName] = item[keyName];
      });
      recoveryList = [];
    };
  };

  Utils.mergeArrayToString = function (data, handleFunc) {
    if (!(data instanceof Array)) {
      throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");
    }
    let content = "";
    if (typeof handleFunc === "function") {
      data.forEach((item) => {
        content += handleFunc(item);
      });
    } else if (typeof handleFunc === "string") {
      data.forEach((item) => {
        content += item[handleFunc];
      });
    } else {
      data.forEach((item) => {
        Object.values(item)
          .filter((item2) => typeof item2 === "string")
          .forEach((item3) => {
            content += item3;
          });
      });
    }
    return content;
  };

  Utils.mutationObserver = function (target, observer_config) {
    if (
      !(target instanceof Node) &&
      !(target instanceof NodeList) &&
      !Utils.isJQuery(target)
    ) {
      throw new Error(
        "Utils.mutationObserver 参数 target 必须为 Node|NodeList|jQuery类型"
      );
    }

    let default_obverser_config = {
      /* 监听到元素有反馈，需执行的函数 */
      callback: () => {},
      config: {
        /**
         * @type {boolean|undefined}
         * + true 监听以 target 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 target
         * + false (默认) 不生效
         */
        subtree: void 0,
        /**
         * @type {boolean|undefined}
         * + true 监听 target 节点中发生的节点的新增与删除（同时，如果 subtree 为 true，会针对整个子树生效）
         * + false (默认) 不生效
         */
        childList: void 0,
        /**
         * @type {boolean|undefined}
         * + true 观察所有监听的节点属性值的变化。默认值为 true，当声明了 attributeFilter 或 attributeOldValue
         * + false (默认) 不生效
         */
        attributes: void 0,
        /**
         * 一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知
         * @type {[...string]|undefined}
         */
        attributeFilter: void 0,
        /**
         * @type {boolean|undefined}
         * + true 记录上一次被监听的节点的属性变化；可查阅 MutationObserver 中的 Monitoring attribute values 了解关于观察属性变化和属性值记录的详情
         * + false (默认) 不生效
         */
        attributeOldValue: void 0,
        /**
         * @type {boolean|undefined}
         * + true 监听声明的 target 节点上所有字符的变化。默认值为 true，如果声明了 characterDataOldValue
         * + false (默认) 不生效
         */
        characterData: void 0,
        /**
         * @type {boolean|undefined}
         * + true 记录前一个被监听的节点中发生的文本变化
         * + false (默认) 不生效
         */
        characterDataOldValue: void 0,
      },
    };
    observer_config = Utils.assign(default_obverser_config, observer_config);
    let MutationObserver =
      window.MutationObserver ||
      window.webkitMutationObserver ||
      window.MozMutationObserver;
    /** @type {MutationObserver} */
    let mutationObserver = new MutationObserver(function (mutations, observer) {
      observer_config?.callback(mutations, observer);
    });
    if (target instanceof Node) {
      /* 传入的参数是节点元素 */
      mutationObserver.observe(target, observer_config.config);
    } else if (target instanceof NodeList) {
      /* 传入的参数是节点元素数组 */
      target.forEach((item) => {
        mutationObserver.observe(item, observer_config.config);
      });
    } else if (Utils.isJQuery(target)) {
      /* 传入的参数是jQuery对象 */
      target.each((index, item) => {
        mutationObserver.observe(item, observer_config.config);
      });
    } else {
      /* 未知 */
      console.error("Utils.mutationObserver 未知参数", arguments);
    }
    return mutationObserver;
  };

  Utils.noConflict = function () {
    if (window.Utils) {
      Reflect.deleteProperty(window, "Utils");
    }
    if (AnotherUtils) {
      window.Utils = AnotherUtils;
    }
    return Utils;
  };

  Utils.noConflictFunc = function (
    needReleaseObject,
    needReleaseName,
    functionNameList = [],
    release = true
  ) {
    if (typeof needReleaseObject !== "object") {
      throw new Error(
        "Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型"
      );
    }
    if (typeof needReleaseName !== "string") {
      throw new Error(
        "Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型"
      );
    }
    if (!Array.isArray(functionNameList)) {
      throw new Error(
        "Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型"
      );
    }
    let needReleaseKey = "__" + needReleaseName;
    /**
     * 复制对象
     * @param {object} obj
     * @returns {object}
     */
    function cloneObj(obj) {
      let newObj = {};
      if (obj instanceof Array) {
        newObj = [];
      }
      for (let key in obj) {
        let val = obj[key];
        newObj[key] = typeof val === "object" ? cloneObj(val) : val;
      }
      return newObj;
    }
    /**
     * 释放所有
     */
    function releaseAll() {
      if (typeof window[needReleaseKey] !== "undefined") {
        /* 已存在 */
        return;
      }
      window[needReleaseKey] = cloneObj(needReleaseObject);
      Object.values(needReleaseObject).forEach((value) => {
        if (typeof value === "function") {
          needReleaseObject[value.name] = () => {};
        }
      });
    }
    /**
     * 释放单个
     */
    function releaseOne() {
      Array.from(functionNameList).forEach((item) => {
        Object.values(needReleaseObject).forEach((value) => {
          if (typeof value === "function") {
            if (typeof window[needReleaseKey] === "undefined") {
              window[needReleaseKey] = {};
            }
            if (item === value.name) {
              window[needReleaseKey][value.name] =
                needReleaseObject[value.name];
              needReleaseObject[value.name] = () => {};
            }
          }
        });
      });
    }
    /**
     * 恢复所有
     */
    function recoveryAll() {
      if (typeof window[needReleaseKey] === "undefined") {
        /* 未存在 */
        return;
      }
      Object.assign(needReleaseObject, window[needReleaseKey]);
      Reflect.deleteProperty(window, "needReleaseKey");
    }

    /**
     * 恢复单个
     */
    function recoveryOne() {
      if (typeof window[needReleaseKey] === "undefined") {
        /* 未存在 */
        return;
      }
      Array.from(functionNameList).forEach((item) => {
        if (window[needReleaseKey][item]) {
          needReleaseObject[item] = window[needReleaseKey][item];
          Reflect.deleteProperty(window[needReleaseKey], item);
          if (Object.keys(window[needReleaseKey]).length === 0) {
            Reflect.deleteProperty(window, needReleaseKey);
          }
        }
      });
    }
    if (release) {
      /* 释放 */
      if (functionNameList.length === 0) {
        releaseAll();
      } else {
        /* 对单个进行操作 */
        releaseOne();
      }
    } else {
      /* 恢复 */
      if (functionNameList.length === 0) {
        recoveryAll();
      } else {
        /* 对单个进行操作 */
        recoveryOne();
      }
    }
  };

  Utils.parseBase64ToBlob = function (dataUri) {
    if (typeof dataUri !== "string") {
      throw new Error(
        "Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型"
      );
    }
    let dataUriSplit = dataUri.split(","),
      dataUriMime = dataUriSplit[0].match(/:(.*?);/)[1],
      dataUriBase64Str = atob(dataUriSplit[1]),
      dataUriLength = dataUriBase64Str.length,
      u8arr = new Uint8Array(dataUriLength);
    while (dataUriLength--) {
      u8arr[dataUriLength] = dataUriBase64Str.charCodeAt(dataUriLength);
    }
    return new Blob([u8arr], {
      type: dataUriMime,
    });
  };

  Utils.parseBase64ToFile = function (dataUri, fileName = "example") {
    if (typeof dataUri !== "string") {
      throw new Error(
        "Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型"
      );
    }
    if (typeof fileName !== "string") {
      throw new Error(
        "Utils.parseBase64ToFile 参数 fileName 必须为 string 类型"
      );
    }
    let dataUriSplit = dataUri.split(","),
      dataUriMime = dataUriSplit[0].match(/:(.*?);/)[1],
      dataUriBase64Str = atob(dataUriSplit[1]),
      dataUriLength = dataUriBase64Str.length,
      u8arr = new Uint8Array(dataUriLength);
    while (dataUriLength--) {
      u8arr[dataUriLength] = dataUriBase64Str.charCodeAt(dataUriLength);
    }
    return new File([u8arr], fileName, {
      type: dataUriMime,
    });
  };

  Utils.parseInt = function (matchList = [], defaultValue = 0) {
    if (matchList == null) {
      return parseInt(defaultValue);
    }
    let parseValue = parseInt(matchList[matchList.length - 1]);
    if (isNaN(parseValue)) {
      parseValue = parseInt(defaultValue);
    }
    return parseValue;
  };

  Utils.parseBlobToFile = async function (blobUrl, fileName = "example") {
    return new Promise((resolve, reject) => {
      fetch(blobUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const file = new File([blob], fileName, { type: blob.type });
          resolve(file);
        })
        .catch((error) => {
          console.error("Error:", error);
          reject(error);
        });
    });
  };

  Utils.parseCDATA = function (text = "") {
    let result = "";
    let cdataRegexp = /<\!\[CDATA\[([\s\S]*)\]\]>/;
    let cdataMatch = cdataRegexp.exec(text.trim());
    if (cdataMatch && cdataMatch.length > 1) {
      result = cdataMatch[cdataMatch.length - 1];
    }
    return result;
  };

  Utils.parseFileToBase64 = async function (fileObj) {
    let reader = new FileReader();
    reader.readAsDataURL(fileObj);
    return new Promise((resolve) => {
      reader.onload = function (event) {
        resolve(event.target.result);
      };
    });
  };

  Utils.parseFromString = function (text, mimeType = "text/html") {
    let parser = new DOMParser();
    return parser.parseFromString(text, mimeType);
  };

  Utils.parseStringToRegExpString = function (string) {
    if (typeof string !== "string") {
      throw new TypeError("string必须是字符串");
    }
    let regString = string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    return regString;
  };

  Utils.preventEvent = function (element, eventNameList = [], capture) {
    function stopEvent(event) {
      /* 阻止事件的默认行为发生。例如，当点击一个链接时，浏览器会默认打开链接的URL */
      event?.preventDefault();
      /* 停止事件的传播，阻止它继续向更上层的元素冒泡，事件将不会再传播给其他的元素 */
      event?.stopPropagation();
      /* 阻止事件传播，并且还能阻止元素上的其他事件处理程序被触发 */
      event?.stopImmediatePropagation();
      return false;
    }
    if (arguments.length === 1) {
      /* 直接阻止事件 */
      return stopEvent(arguments[0]);
    } else {
      /* 添加对应的事件来阻止触发 */
      if (typeof eventNameList === "string") {
        eventNameList = [eventNameList];
      }
      eventNameList.forEach((eventName) => {
        element.addEventListener(eventName, stopEvent, {
          capture: Boolean(capture),
        });
      });
    }
  };

  Utils.Progress = function (paramConfig) {
    this.config = {
      /**
       * canvas元素节点
       * @type {HTMLCanvasElement}
       */
      canvasNode: null,
      /**
       * 绘制角度
       */
      deg: 95,
      /**
       * 进度
       */
      progress: 0,
      /**
       * 绘制的线宽度
       */
      lineWidth: 10,
      /**
       * 绘制的背景颜色
       */
      lineBgColor: "#1e637c",
      /**
       * 绘制的线的颜色
       */
      lineColor: "#25deff",
      /**
       * 绘制的字体颜色
       */
      textColor: "#000000",
      /**
       * 绘制的字体大小(px)
       */
      fontSize: 22,
      /**
       * 绘制的圆的半径
       */
      circleRadius: 50,
      /**
       * 控制绘制的函数
       */
      draw: () => {},
    };
    this.config = Utils.assign(this.config, paramConfig);
    if (!(this.config.canvasNode instanceof HTMLCanvasElement)) {
      throw new Error(
        "Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement"
      );
    }
    /* 获取画笔 */
    let ctx = this.config.canvasNode.getContext("2d");
    /* 元素宽度 */
    let width = this.config.canvasNode.width;
    /* 元素高度 */
    let height = this.config.canvasNode.height;

    /* 清除锯齿 */
    if (window.devicePixelRatio) {
      this.config.canvasNode.style.width = width + "px";
      this.config.canvasNode.style.height = height + "px";
      this.config.canvasNode.height = height * window.devicePixelRatio;
      this.config.canvasNode.width = width * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    /* 设置线宽 */
    ctx.lineWidth = this.config.lineWidth;
    /* 绘制 */
    this.draw = function () {
      let degActive = (this.config.progress * 360) / 100;
      /* 清除画布 */
      ctx.clearRect(0, 0, width, height);
      /* 开始绘制底圆 */
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, this.config.circleRadius, 1, 8);
      ctx.strokeStyle = this.config.lineBgColor;
      ctx.stroke();
      /* 开始绘制动态圆 */
      ctx.beginPath();
      ctx.arc(
        width / 2,
        height / 2,
        this.config.circleRadius,
        -Math.PI / 2,
        (degActive * Math.PI) / 180 - Math.PI / 2
      );
      ctx.strokeStyle = this.config.lineColor;
      ctx.stroke();
      /* 获取百分比 */
      let txt = parseInt(this.config.progress) + "%";
      ctx.font = this.config.fontSize + "px SimHei";
      /* 获取文本宽度 */
      let w = ctx.measureText(txt).width;
      let h = this.config.fontSize / 2;
      ctx.fillStyle = this.config.textColor;
      ctx.fillText(txt, width / 2 - w / 2, height / 2 + h / 2);
    }.bind(this);
  };

  Utils.registerTrustClickEvent = function (isTrustValue = true, filter) {
    function trustEvent(event) {
      return new Proxy(event, {
        get: function (target, property) {
          if (property === "isTrusted") {
            return isTrustValue;
          } else {
            return Reflect.get(target, property);
          }
        },
      });
    }
    if (filter == null) {
      filter = function (typeName) {
        return typeName === "click";
      };
    }
    const originalListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (...args) {
      let type = args[0];
      let callback = args[1];
      let options = args[2];
      if (filter(type)) {
        if (typeof callback === "function") {
          args[1] = function (event) {
            callback.call(this, trustEvent(event));
          };
        } else if (typeof callback === "object" && "handleEvent" in callback) {
          let oldHandleEvent = callback["handleEvent"];

          args[1]["handleEvent"] = function (event) {
            if (event == null) {
              return;
            }
            try {
              /* Proxy对象使用instanceof会报错 */
              event instanceof Proxy;
              oldHandleEvent.call(this, trustEvent(event));
            } catch (error) {
              event["isTrusted"] = isTrustValue;
            }
          };
        }
      }
      return originalListener.apply(this, args);
    };
  };

  Utils.reverseNumber = function (num) {
    let reversedNum = 0;
    let isNegative = false;

    if (num < 0) {
      isNegative = true;
      num = Math.abs(num);
    }

    while (num > 0) {
      reversedNum = reversedNum * 10 + (num % 10);
      num = Math.floor(num / 10);
    }

    return isNegative ? -reversedNum : reversedNum;
  };

  Utils.selectElementText = function (
    element,
    childTextNode,
    startIndex,
    endIndex
  ) {
    let range = document.createRange();
    range.selectNodeContents(element);
    if (childTextNode) {
      if (childTextNode.nodeType !== Node.TEXT_NODE) {
        throw new TypeError("childTextNode必须是#text元素");
      }
      if (startIndex != null && endIndex != null) {
        range.setStart(childTextNode, startIndex);
        range.setEnd(childTextNode, endIndex);
      }
    }

    let selection = globalThis.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  Utils.setClip = async function (data, info = "text/plain") {
    if (typeof data === "object") {
      if (data instanceof Element) {
        data = data.outerHTML;
      } else {
        data = JSON.stringify(data);
      }
    } else if (typeof data !== "string") {
      data = data.toString();
    }
    let textType = typeof info === "object" ? info.type : info;
    if (textType.includes("html")) {
      textType = "text/html";
    } else {
      textType = "text/plain";
    }
    class UtilsClipboard {
      /** @type {(value: boolean | PromiseLike<boolean>)=> void} */
      #resolve;
      /** @type {any|string} */
      #copyData;
      /** @type {string} */
      #copyDataType;
      constructor(resolve, copyData, copyDataType) {
        this.#resolve = resolve;
        this.#copyData = copyData;
        this.#copyDataType = copyDataType;
      }
      async init() {
        let copyStatus = false;
        let requestPermissionStatus = await this.requestClipboardPermission();
        if (
          this.hasClipboard() &&
          (this.hasClipboardWrite() || this.hasClipboardWriteText())
        ) {
          try {
            copyStatus = await this.copyDataByClipboard();
          } catch (error) {
            console.error("复制失败，使用第二种方式，error👉", error);
            copyStatus = this.copyTextByTextArea();
          }
        } else {
          copyStatus = this.copyTextByTextArea();
        }
        this.#resolve(copyStatus);
        this.destroy();
      }
      destroy() {
        this.#resolve = null;
        this.#copyData = null;
        this.#copyDataType = null;
      }
      isText() {
        return this.#copyDataType.includes("text");
      }
      hasClipboard() {
        return navigator?.clipboard != null;
      }
      hasClipboardWrite() {
        return navigator?.clipboard?.write != null;
      }
      hasClipboardWriteText() {
        return navigator?.clipboard?.writeText != null;
      }
      /**
       * 使用textarea和document.execCommand("copy")来复制文字
       */
      copyTextByTextArea() {
        try {
          let copyElement = document.createElement("textarea");
          copyElement.value = this.#copyData;
          copyElement.setAttribute("type", "text");
          copyElement.setAttribute("style", "opacity:0;position:absolute;");
          copyElement.setAttribute("readonly", "readonly");
          document.body.appendChild(copyElement);
          copyElement.select();
          document.execCommand("copy");
          document.body.removeChild(copyElement);
          return true;
        } catch (error) {
          console.error("复制失败，error👉", error);
          return false;
        }
      }
      /**
       * 申请剪贴板权限
       * @returns {Promise<boolean>}
       */
      requestClipboardPermission() {
        return new Promise((resolve, reject) => {
          if (navigator.permissions && navigator.permissions.query) {
            navigator.permissions
              .query({
                name: "clipboard-write",
              })
              .then((permissionStatus) => {
                resolve(true);
              })
              .catch(
                /** @param {TypeError} error */
                (error) => {
                  console.error([
                    "申请剪贴板权限失败，尝试直接写入👉",
                    error.message ?? error.name ?? error.stack,
                  ]);
                  resolve(false);
                }
              );
          } else {
            resolve(false);
          }
        });
      }
      /**
       * 使用clipboard直接写入数据到剪贴板
       * @returns {Promise<boolean>}
       */
      copyDataByClipboard() {
        return new Promise((resolve, reject) => {
          if (this.isText()) {
            /* 只复制文字 */
            navigator.clipboard
              .writeText(this.#copyData)
              .then(() => {
                resolve(true);
              })
              .catch((error) => {
                reject(error);
              });
          } else {
            /* 可复制对象 */
            let textBlob = new Blob([this.#copyData], {
              type: this.#copyDataType,
            });
            navigator.clipboard
              .write([
                new ClipboardItem({
                  [this.#copyDataType]: textBlob,
                }),
              ])
              .then(() => {
                resolve(true);
              })
              .catch((error) => {
                reject(error);
              });
          }
        });
      }
    }
    return new Promise((resolve) => {
      const utilsClipboard = new UtilsClipboard(resolve, data, textType);
      if (document.hasFocus()) {
        utilsClipboard.init();
      } else {
        window.addEventListener(
          "focus",
          () => {
            utilsClipboard.init();
          },
          { once: true }
        );
      }
    });
  };

  Utils.setTimeout = async function (callback, delayTime = 0) {
    if (typeof callback !== "function" && typeof callback !== "string") {
      throw new TypeError(
        "Utils.setTimeout 参数 callback 必须为 function|string 类型"
      );
    }
    if (typeof delayTime !== "number") {
      throw new TypeError("Utils.setTimeout 参数 delayTime 必须为 number 类型");
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Utils.tryCatch().run(callback));
      }, delayTime);
    });
  };

  Utils.sleep = async function (delayTime = 0) {
    if (typeof delayTime !== "number") {
      throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delayTime);
    });
  };

  Utils.dragSlider = function (selector, offsetX = window.innerWidth) {
    function initMouseEvent(eventName, offSetX, offSetY) {
      let win = unsafeWindow || window;
      let mouseEvent = document.createEvent("MouseEvents");
      mouseEvent.initMouseEvent(
        eventName,
        true,
        true,
        win,
        0,
        offSetX,
        offSetY,
        offSetX,
        offSetY,
        false,
        false,
        false,
        false,
        0,
        null
      );
      return mouseEvent;
    }
    let sliderElement =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
    if (
      !(sliderElement instanceof Node) ||
      !(sliderElement instanceof Element)
    ) {
      throw new Error("Utils.dragSlider 参数selector 必须为Node/Element类型");
    }
    let rect = sliderElement.getBoundingClientRect(),
      x0 = rect.x || rect.left,
      y0 = rect.y || rect.top,
      x1 = x0 + offsetX,
      y1 = y0;
    sliderElement.dispatchEvent(initMouseEvent("mousedown", x0, y0));
    sliderElement.dispatchEvent(initMouseEvent("mousemove", x1, y1));
    sliderElement.dispatchEvent(initMouseEvent("mouseleave", x1, y1));
    sliderElement.dispatchEvent(initMouseEvent("mouseout", x1, y1));
  };

  Utils.enterFullScreen = function (
    element = document.documentElement,
    options
  ) {
    try {
      if (element.requestFullscreen) {
        element.requestFullscreen(options);
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        throw new TypeError("该浏览器不支持全屏API");
      }
    } catch (err) {
      console.error(err);
    }
  };

  Utils.exitFullScreen = function (element = document.documentElement) {
    if (document.exitFullscreen) {
      return document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      return document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      return document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      return document.webkitCancelFullScreen();
    } else {
      return new Promise((resolve, reject) => {
        reject(new TypeError("该浏览器不支持全屏API"));
      });
    }
  };

  Utils.sortListByProperty = function (
    data,
    getPropertyValueFunc,
    sortByDesc = true
  ) {
    if (
      typeof getPropertyValueFunc !== "function" &&
      typeof getPropertyValueFunc !== "string"
    ) {
      throw new Error(
        "Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型"
      );
    }
    if (typeof sortByDesc !== "boolean") {
      throw new Error(
        "Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型"
      );
    }
    let getObjValue = function (obj) {
      return typeof getPropertyValueFunc === "string"
        ? obj[getPropertyValueFunc]
        : getPropertyValueFunc(obj);
    };
    /**
     * 排序方法
     * @param {any} after_obj
     * @param {any} before_obj
     * @returns
     */
    let sortFunc = function (after_obj, before_obj) {
      let beforeValue = getObjValue(before_obj); /*  前 */
      let afterValue = getObjValue(after_obj); /* 后 */
      if (sortByDesc) {
        if (afterValue > beforeValue) {
          return -1;
        } else if (afterValue < beforeValue) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (afterValue < beforeValue) {
          return -1;
        } else if (afterValue > beforeValue) {
          return 1;
        } else {
          return 0;
        }
      }
    };
    /**
     * 排序元素方法
     * @param {NodeList|jQuery} nodeList 元素列表
     * @param {function} getNodeListFunc 获取元素列表的函数
     */
    let sortNodeFunc = function (nodeList, getNodeListFunc) {
      let nodeListLength = nodeList.length;
      for (let i = 0; i < nodeListLength - 1; i++) {
        for (let j = 0; j < nodeListLength - 1 - i; j++) {
          let beforeNode = nodeList[j];
          let afterNode = nodeList[j + 1];
          let beforeValue = getObjValue(beforeNode); /*  前 */
          let afterValue = getObjValue(afterNode); /* 后 */
          if (
            (sortByDesc == true && beforeValue < afterValue) ||
            (sortByDesc == false && beforeValue > afterValue)
          ) {
            /* 升序/降序 */
            /* 相邻元素两两对比 */
            let temp = beforeNode.nextElementSibling;
            afterNode.after(beforeNode);
            if (temp == null) {
              /* 如果为空，那么是最后一个元素，使用append */
              temp.parentNode.appendChild(afterNode);
            } else {
              /* 不为空，使用before */
              temp.before(afterNode);
            }
            nodeList = getNodeListFunc();
          }
        }
      }
    };
    let result = data;
    let getDataFunc = null;
    if (data instanceof Function) {
      getDataFunc = data;
      data = data();
    }
    if (Array.isArray(data)) {
      data.sort(sortFunc);
    } else if (data instanceof NodeList || Utils.isJQuery(data)) {
      sortNodeFunc(data, getDataFunc);
      result = getDataFunc();
    } else {
      throw new Error(
        "Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型"
      );
    }
    return result;
  };

  Utils.stringToRegular = function (targetString, flags = "ig") {
    let reg;
    flags = flags.toLowerCase();
    if (typeof targetString === "string") {
      reg = new RegExp(
        targetString.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"),
        flags
      );
    } else if (targetString instanceof RegExp) {
      reg = targetString;
    } else {
      throw new Error(
        "Utils.stringToRegular 参数targetString必须是string|Regexp类型"
      );
    }
    return reg;
  };

  Utils.stringTitleToUpperCase = function (
    targetString,
    otherStrToLowerCase = false
  ) {
    let newTargetString = targetString.slice(0, 1).toUpperCase();
    if (otherStrToLowerCase) {
      newTargetString = newTargetString + targetString.slice(1).toLowerCase();
    } else {
      newTargetString = newTargetString + targetString.slice(1);
    }
    return newTargetString;
  };

  Utils.startsWith = function (target, searchString, position = 0) {
    if (position > target.length) {
      /* 超出目标字符串的长度 */
      return false;
    }
    if (position !== 0) {
      target = target.slice(position, target.length);
    }
    let searchStringRegexp = searchString;
    if (typeof searchString === "string") {
      searchStringRegexp = new RegExp(`^${searchString}`);
    } else if (Array.isArray(searchString)) {
      let flag = false;
      for (const searcStr of searchString) {
        if (!Utils.startsWith(target, searcStr, position)) {
          flag = true;
          break;
        }
      }
      return flag;
    }
    return Boolean(target.match(searchStringRegexp));
  };

  Utils.stringTitleToLowerCase = function (
    targetString,
    otherStrToUpperCase = false
  ) {
    let newTargetString = targetString.slice(0, 1).toLowerCase();
    if (otherStrToUpperCase) {
      newTargetString = newTargetString + targetString.slice(1).toUpperCase();
    } else {
      newTargetString = newTargetString + targetString.slice(1);
    }
    return newTargetString;
  };

  Utils.toJSON = function (data, errorCallBack = () => {}) {
    let result = {};
    if (typeof data === "object") {
      return data;
    }
    Utils.tryCatch()
      .config({ log: false })
      .error((error) => {
        Utils.tryCatch()
          .error(() => {
            try {
              result = window.eval("(" + data + ")");
            } catch (error) {
              errorCallBack(error);
            }
          })
          .run(() => {
            if (
              data &&
              /^[\],:{}\s]*$/.test(
                data
                  .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                  .replace(
                    /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    "]"
                  )
                  .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
              )
            ) {
              result = new Function("return " + data)();
            } else {
              errorCallBack(new Error("target is not a JSON"));
            }
          });
      })
      .run(() => {
        data = data.trim();
        result = JSON.parse(data);
      });
    return result;
  };

  Utils.toSearchParamsStr = function (obj) {
    let searhParamsStr = "";
    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        if (searhParamsStr === "") {
          searhParamsStr += Utils.toSearchParamsStr(item);
        } else {
          searhParamsStr += "&" + Utils.toSearchParamsStr(item);
        }
      });
    } else {
      searhParamsStr = new URLSearchParams(Object.entries(obj)).toString();
    }
    return searhParamsStr;
  };

  Utils.tryCatch = function (...args) {
    /* 定义变量和函数 */
    let callbackFunction = null;
    let context = null;
    let handleError = null;
    let defaultDetails = {
      log: true,
    };
    /**
     * @function tryCatchObj
     * @description 空函数，用于链式调用。
     */
    function tryCatchObj() {}

    /**
     * 配置
     * @param {{
     * log: boolean
     * }} paramDetails
     */
    tryCatchObj.config = function (paramDetails) {
      defaultDetails = Utils.assign(defaultDetails, paramDetails);
      return tryCatchObj;
    };
    /**
     * 设置错误处理函数。
     * @param {function|string} handler 错误处理函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @returns {function} 返回 tryCatchObj 函数。
     */
    tryCatchObj.error = function (handler) {
      handleError = handler;
      return tryCatchObj;
    };

    /**
     * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
     * @param {function|string} callback 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @param {object|null} __context__ 待执行函数的作用域，用于apply指定
     * @returns {any|function} 如果函数有返回值，则返回该返回值；否则返回 tryCatchObj 函数以支持链式调用。
     * @throws {Error} 如果传入参数不符合要求，则会抛出相应类型的错误。
     */
    tryCatchObj.run = function (callback, __context__) {
      callbackFunction = callback;
      context = __context__;
      let result = executeTryCatch(callbackFunction, handleError, context);
      return result !== void 0 ? result : tryCatchObj;
    };

    /**
     * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
     * @param {function|string} callback - 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @param {function|string|null} handleErrorFunc - 错误处理函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @param {object|null} funcThis - 待执行函数的作用域，用于apply指定
     * @returns {any|undefined} - 如果函数有返回值，则返回该返回值；否则返回 undefined。
     */
    function executeTryCatch(callback, handleErrorFunc, funcThis) {
      let result = void 0;
      try {
        if (typeof callback === "string") {
          (function () {
            eval(callback);
          }).apply(funcThis, args);
        } else {
          result = callback.apply(funcThis, args);
        }
      } catch (error) {
        if (defaultDetails.log) {
          console.log(
            `%c ${callback?.name ? callback?.name : callback + "出现错误"} `,
            "color: #f20000"
          );
          console.log(`%c 错误原因：${error}`, "color: #f20000");
          console.trace(callback);
        }
        if (handleErrorFunc) {
          if (typeof handleErrorFunc === "string") {
            result = function () {
              return eval(handleErrorFunc);
            }.apply(funcThis, [...args, error]);
          } else {
            result = handleErrorFunc.apply(funcThis, [...args, error]);
          }
        }
      }
      return result;
    }

    // 返回 tryCatchObj 函数
    return tryCatchObj;
  };

  Utils.uniqueArray = function (
    uniqueArrayData = [],
    compareArrayData = [],
    compareFun = (item, item2) => {
      return item === item2;
    }
  ) {
    return Array.from(uniqueArrayData).filter(
      (item) =>
        !Array.from(compareArrayData).some(function (item2) {
          return compareFun(item, item2);
        })
    );
  };

  Utils.waitArrayLoopToEnd = function (data, handleFunc) {
    if (typeof handleFunc !== "function" && typeof handleFunc !== "string") {
      throw new Error(
        "Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型"
      );
    }
    return Promise.all(
      Array.from(data).map(async (item, index) => {
        await Utils.tryCatch(index, item).run(handleFunc);
      })
    );
  };

  Utils.waitNode = async function (...nodeSelectors) {
    /* 检查每个参数是否为字符串类型 */
    for (let nodeSelector of nodeSelectors) {
      if (typeof nodeSelector !== "string") {
        throw new Error("Utils.waitNode 参数必须都是 string 类型");
      }
    }

    return new Promise((resolve) => {
      /* 防止触发第二次回调 */
      let isReturn = false;

      /**
       * 检查所有选择器是否匹配到节点
       * @param {MutationObserver} observer
       */
      let checkNodes = (observer) => {
        let isFind = true;
        let selectNodeArray = [];
        for (let selector of nodeSelectors) {
          let element = document.querySelector(selector);
          if (!element) {
            /* 没找到，直接退出循环 */
            isFind = false;
            break;
          }
          selectNodeArray.push(element);
        }
        if (isFind) {
          isReturn = true;
          observer?.disconnect();
          /* 如果只有一个选择器，那么返回数组中存储的第一个 */
          if (selectNodeArray.length === 1) {
            resolve(selectNodeArray[0]);
          } else {
            resolve(selectNodeArray);
          }
        }
      };

      /* 在函数开始时检查节点是否已经存在 */
      checkNodes();

      /* 监听 DOM 的变化，直到至少有一个节点被匹配到 */
      Utils.mutationObserver(document.documentElement, {
        config: { subtree: true, childList: true, attributes: true },
        callback: (mutations, observer) => {
          if (isReturn) {
            return;
          }
          checkNodes(observer);
        },
      });
    });
  };

  Utils.waitNodeWithInterval = async function (
    nodeSelectorsList = [],
    maxTime = 0
  ) {
    /** @type {string[]} */
    let nodeSelectors = [];
    /* 检查每个参数是否为字符串类型 */
    if (Array.isArray(nodeSelectorsList)) {
      for (let nodeSelector of nodeSelectorsList) {
        if (typeof nodeSelector !== "string") {
          throw new Error(
            "Utils.waitNodeWithInterval 参数nodeSelectorsList必须为 string[] 类型"
          );
        }
      }
      nodeSelectors = nodeSelectorsList;
    } else {
      nodeSelectors.push(nodeSelectorsList);
    }

    return new Promise((resolve) => {
      /* 防止触发第二次回调 */
      let isReturn = false;

      /* 检查所有选择器是否匹配到节点 */
      let checkNodes = (observer) => {
        let isFind = true;
        let selectNodeArray = [];
        for (let selector of nodeSelectors) {
          let element = document.querySelector(selector);
          if (!element) {
            /* 没找到，直接退出循环 */
            isFind = false;
            break;
          }
          selectNodeArray.push(element);
        }
        if (isFind) {
          isReturn = true;
          observer?.disconnect();
          /* 如果只有一个选择器，那么返回数组中存储的第一个 */
          if (selectNodeArray.length === 1) {
            resolve(selectNodeArray[0]);
          } else {
            resolve(selectNodeArray);
          }
        }
      };

      /* 在函数开始时检查节点是否已经存在 */
      checkNodes();

      /* 监听 DOM 的变化，直到至少有一个节点被匹配到 */
      let mutationObserver = Utils.mutationObserver(document.documentElement, {
        config: { subtree: true, childList: true, attributes: true },
        callback: (mutations, observer) => {
          if (isReturn) {
            return;
          }
          checkNodes(observer);
        },
      });
      setTimeout(() => {
        mutationObserver.disconnect();
      }, maxTime);
    });
  };

  Utils.waitAnyNode = async function (...nodeSelectors) {
    /* 检查每个参数是否为字符串类型 */
    for (let nodeSelector of nodeSelectors) {
      if (typeof nodeSelector !== "string") {
        throw new Error("Utils.waitNode 参数必须为 ...string 类型");
      }
    }

    return new Promise((resolve) => {
      /* 防止触发第二次回调 */
      let isReturn = false;

      /* 检查所有选择器是否存在任意匹配到元素 */
      let checkNodes = (observer) => {
        let selectNode = null;
        for (let selector of nodeSelectors) {
          selectNode = document.querySelector(selector);
          if (selectNode) {
            /* 找到，退出循环 */
            break;
          }
        }
        if (selectNode) {
          isReturn = true;
          observer?.disconnect();
          resolve(selectNode);
        }
      };

      /* 在函数开始时检查节点是否已经存在 */
      checkNodes();

      /* 监听 DOM 的变化，直到至少有一个节点被匹配到 */
      Utils.mutationObserver(document.documentElement, {
        config: { subtree: true, childList: true, attributes: true },
        callback: (mutations, observer) => {
          if (isReturn) {
            return;
          }
          checkNodes(observer);
        },
      });
    });
  };

  Utils.waitNodeList = async function (...nodeSelectors) {
    /* 检查每个参数是否为字符串类型 */
    for (let nodeSelector of nodeSelectors) {
      if (typeof nodeSelector !== "string") {
        throw new Error("Utils.waitNode 参数必须为 ...string 类型");
      }
    }

    return new Promise((resolve) => {
      /* 防止触发第二次回调 */
      let isReturn = false;

      /* 检查所有选择器是否匹配到节点 */
      let checkNodes = (observer) => {
        let isFind = true;
        let selectNodes = [];
        for (let selector of nodeSelectors) {
          let nodeList = document.querySelectorAll(selector);
          if (nodeList.length === 0) {
            /* 没找到，直接退出循环 */
            isFind = false;
            break;
          }
          selectNodes.push(nodeList);
        }
        if (isFind) {
          isReturn = true;
          observer?.disconnect();
          /* 如果只有一个选择器，那么返回第一个 */
          if (selectNodes.length === 1) {
            resolve(selectNodes[0]);
          } else {
            resolve(selectNodes);
          }
        }
      };

      /* 在函数开始时检查节点是否已经存在 */
      checkNodes();

      /* 监听 DOM 的变化，直到至少有一个节点被匹配到 */
      Utils.mutationObserver(document.documentElement, {
        config: { subtree: true, childList: true, attributes: true },
        callback: (mutations, observer) => {
          if (isReturn) {
            return;
          }
          checkNodes(observer);
        },
      });
    });
  };

  Utils.waitAnyNodeList = async function (...nodeSelectors) {
    /* 检查每个参数是否为字符串类型 */
    for (let nodeSelector of nodeSelectors) {
      if (typeof nodeSelector !== "string") {
        throw new Error("Utils.waitNode 参数必须为 ...string 类型");
      }
    }

    return new Promise((resolve) => {
      /* 防止触发第二次回调 */
      let isReturn = false;

      /* 检查所有选择器是否匹配到节点 */
      let checkNodes = (observer) => {
        let selectNodes = [];
        for (let selector of nodeSelectors) {
          selectNodes = document.querySelectorAll(selector);
          if (selectNodes.length) {
            /* 找到，退出循环 */
            break;
          }
        }
        if (selectNodes.length) {
          isReturn = true;
          observer?.disconnect();
          resolve(selectNodes);
        }
      };

      /* 在函数开始时检查节点是否已经存在 */
      checkNodes();

      /* 监听 DOM 的变化，直到至少有一个节点被匹配到 */
      Utils.mutationObserver(document.documentElement, {
        config: { subtree: true, childList: true, attributes: true },
        callback: (mutations, observer) => {
          if (isReturn) {
            return;
          }
          checkNodes(observer);
        },
      });
    });
  };

  Utils.waitProperty = async function (checkObj, checkPropertyName) {
    return new Promise((resolve) => {
      let obj = checkObj;
      if (typeof checkObj === "function") {
        obj = checkObj();
      }
      if (Reflect.has(obj, checkPropertyName)) {
        resolve(obj[checkPropertyName]);
      } else {
        Object.defineProperty(obj, checkPropertyName, {
          set: function (value) {
            try {
              resolve(value);
            } catch (error) {
              console.error("Error setting property:", error);
            }
          },
        });
      }
    });
  };

  Utils.waitPropertyByInterval = async function (
    checkObj,
    checkPropertyName,
    intervalTimer = 250,
    maxTime = -1
  ) {
    if (checkObj == null) {
      throw new TypeError("checkObj 不能为空对象 ");
    }
    let isResolve = false;
    return new Promise((resolve) => {
      let interval = setInterval(() => {
        let obj = checkObj;
        if (typeof checkObj === "function") {
          obj = checkObj();
        }
        if (
          (typeof checkPropertyName === "function" && checkPropertyName(obj)) ||
          Reflect.has(obj, checkPropertyName)
        ) {
          isResolve = true;
          clearInterval(interval);
          resolve(obj[checkPropertyName]);
        }
      }, intervalTimer);
      if (maxTime !== -1) {
        setTimeout(() => {
          if (!isResolve) {
            clearInterval(interval);
            resolve();
          }
        }, maxTime);
      }
    });
  };

  Utils.waitVueByInterval = async function (
    element,
    propertyName,
    timer = 250,
    maxTime = -1,
    vueName = "__vue__"
  ) {
    if (element == null) {
      throw new Error("Utils.waitVueByInterval 参数element 不能为空");
    }
    let flag = false;
    await Utils.waitPropertyByInterval(
      element,
      function (targetElement) {
        if (targetElement == null) {
          return false;
        }
        if (!(vueName in targetElement)) {
          return false;
        }
        if (propertyName == null) {
          return true;
        }
        let vueObject = targetElement[vueName];
        if (typeof propertyName === "string") {
          if (propertyName in vueObject) {
            flag = true;
            return true;
          }
        } else {
          /* Function */
          if (propertyName(vueObject)) {
            flag = true;
            return true;
          }
        }
        return false;
      },
      timer,
      maxTime
    );
    return flag;
  };

  Utils.watchObject = function (
    target,
    propertyName,
    getCallBack,
    setCallBack
  ) {
    if (
      typeof getCallBack !== "function" &&
      typeof setCallBack !== "function"
    ) {
      return;
    }

    if (typeof getCallBack === "function") {
      Object.defineProperty(target, propertyName, {
        get() {
          if (typeof getCallBack === "function") {
            return getCallBack(value);
          } else {
            return target[propertyName];
          }
        },
      });
    } else if (typeof setCallBack === "function") {
      Object.defineProperty(target, propertyName, {
        set(value) {
          if (typeof setCallBack === "function") {
            setCallBack(value);
          }
        },
      });
    } else {
      Object.defineProperty(target, propertyName, {
        get() {
          if (typeof getCallBack === "function") {
            return getCallBack(value);
          } else {
            return target[propertyName];
          }
        },
        set(value) {
          if (typeof setCallBack === "function") {
            setCallBack(value);
          }
        },
      });
    }
  };

  return Utils;
});
