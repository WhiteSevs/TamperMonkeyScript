/* eslint-disable */
// ==UserScript==
// @name         ajaxHooker
// @author       cxxjackie
// @version      1.4.8
// @supportURL   https://bbs.tampermonkey.net.cn/thread-3284-1-1.html
// @license      GNU LGPL-3.0
// ==/UserScript==

export const ajaxHooker = function () {
	"use strict";
	const version = "1.4.8";
	const hookInst = {
		hookFns: [],
		filters: [],
	};
	const win = window.unsafeWindow || document.defaultView || window;
	let winAh = win.__ajaxHooker;
	const resProto = win.Response.prototype;
	const xhrResponses = ["response", "responseText", "responseXML"];
	const fetchResponses = ["arrayBuffer", "blob", "formData", "json", "text"];
	const xhrExtraProps = ["responseType", "timeout", "withCredentials"];
	const fetchExtraProps = [
		"cache",
		"credentials",
		"integrity",
		"keepalive",
		"mode",
		"priority",
		"redirect",
		"referrer",
		"referrerPolicy",
		"signal",
	];
	const xhrAsyncEvents = ["readystatechange", "load", "loadend"];
	const getType = {}.toString.call.bind({}.toString);
	const getDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
	const emptyFn = () => {};
	const errorFn = (e) => console.error(e);
	function isThenable(obj) {
		return obj && ["object", "function"].includes(typeof obj) && typeof obj.then === "function";
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
					const [header, value] = line.split(/(?<=^[^:]+)\s*:\s*/);
					if (!value) continue;
					const lheader = header.toLowerCase();
					headers[lheader] = lheader in headers ? `${headers[lheader]}, ${value}` : value;
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
		_recoverRequestKey(key) {
			if (key in this.requestClone) this.request[key] = this.requestClone[key];
			else delete this.request[key];
		}
		shouldFilter(filters) {
			const { type, url, method, async } = this.request;
			return (
				filters.length &&
				!filters.find((obj) => {
					switch (true) {
						case obj.type && obj.type !== type:
						case getType(obj.url) === "[object String]" && !url.includes(obj.url):
						case getType(obj.url) === "[object RegExp]" && !obj.url.test(url):
						case obj.method && obj.method.toUpperCase() !== method.toUpperCase():
						case "async" in obj && obj.async !== async:
							return false;
					}
					return true;
				})
			);
		}
		waitForRequestKeys() {
			if (!this.request.async) {
				win.__ajaxHooker.hookInsts.forEach(({ hookFns, filters }) => {
					if (this.shouldFilter(filters)) return;
					hookFns.forEach((fn) => {
						if (getType(fn) === "[object Function]") catchError(fn, this.request);
					});
					for (const key in this.request) {
						if (isThenable(this.request[key])) this._recoverRequestKey(key);
					}
				});
				return new SyncThenable();
			}
			const promises = [];
			const ignoreKeys = new Set(["type", "async", "response"]);
			win.__ajaxHooker.hookInsts.forEach(({ hookFns, filters }) => {
				if (this.shouldFilter(filters)) return;
				promises.push(
					Promise.all(hookFns.map((fn) => catchError(fn, this.request))).then(() => {
						const requestKeys = [];
						for (const key in this.request) !ignoreKeys.has(key) && requestKeys.push(key);
						return Promise.all(
							requestKeys.map((key) =>
								Promise.resolve(this.request[key]).then(
									(val) => (this.request[key] = val),
									() => this._recoverRequestKey(key)
								)
							)
						);
					})
				);
			});
			return Promise.all(promises);
		}
		waitForResponseKeys(response) {
			const responseKeys = this.request.type === "xhr" ? xhrResponses : fetchResponses;
			if (!this.request.async) {
				if (getType(this.request.response) === "[object Function]") {
					catchError(this.request.response, response);
					responseKeys.forEach((key) => {
						if ("get" in getDescriptor(response, key) || isThenable(response[key])) {
							delete response[key];
						}
					});
				}
				return new SyncThenable();
			}
			return Promise.resolve(catchError(this.request.response, response)).then(() =>
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
			if (descriptor && !descriptor.configurable && !descriptor.writable && !descriptor.get)
				return target[prop];
			const ah = target.__ajaxHooker;
			if (ah && ah.proxyProps) {
				if (prop in ah.proxyProps) {
					const pDescriptor = ah.proxyProps[prop];
					if ("get" in pDescriptor) return pDescriptor.get();
					if (typeof pDescriptor.value === "function") return pDescriptor.value.bind(ah);
					return pDescriptor.value;
				}
				if (typeof target[prop] === "function") return target[prop].bind(target);
			}
			return target[prop];
		},
		set(target, prop, value) {
			const descriptor = getDescriptor(target, prop);
			if (descriptor && !descriptor.configurable && !descriptor.writable && !descriptor.set) return true;
			const ah = target.__ajaxHooker;
			if (ah && ah.proxyProps && prop in ah.proxyProps) {
				const pDescriptor = ah.proxyProps[prop];
				pDescriptor.set ? pDescriptor.set(value) : (pDescriptor.value = value);
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
				if (ah.proxyXhr.readyState === 4 && ah.request && typeof ah.request.response === "function") {
					const response = {
						finalUrl: ah.proxyXhr.responseURL,
						status: ah.proxyXhr.status,
						responseHeaders: parseHeaders(ah.proxyXhr.getAllResponseHeaders()),
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
					ah.resThenable = new AHRequest(ah.request).waitForResponseKeys(response).then(() => {
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
			for (const method of ["setRequestHeader", "addEventListener", "removeEventListener", "open", "send"]) {
				ah.proxyProps[method] = { value: ah[method] };
			}
		}
		toJSON() {} // Converting circular structure to JSON
		addEvent(type, event) {
			if (type.startsWith("on")) {
				this.proxyEvents[type] = typeof event === "function" ? event : null;
			} else {
				if (typeof event === "object" && event !== null) event = event.handleEvent;
				if (typeof event !== "function") return;
				this.proxyEvents[type] = this.proxyEvents[type] || new Set();
				this.proxyEvents[type].add(event);
			}
		}
		removeEvent(type, event) {
			if (type.startsWith("on")) {
				this.proxyEvents[type] = null;
			} else {
				if (typeof event === "object" && event !== null) event = event.handleEvent;
				this.proxyEvents[type] && this.proxyEvents[type].delete(event);
			}
		}
		dispatchEvent(e) {
			e.stopImmediatePropagation = stopImmediatePropagation;
			defineProp(e, "target", () => this.proxyXhr);
			defineProp(e, "currentTarget", () => this.proxyXhr);
			defineProp(e, "srcElement", () => this.proxyXhr);
			this.proxyEvents[e.type] &&
				this.proxyEvents[e.type].forEach((fn) => {
					this.resThenable.then(() => !e.ajaxHooker_isStopped && fn.call(this.proxyXhr, e));
				});
			if (e.ajaxHooker_isStopped) return;
			const onEvent = this.proxyEvents["on" + e.type];
			onEvent && this.resThenable.then(onEvent.bind(this.proxyXhr, e));
		}
		setRequestHeader(header, value) {
			this.originalXhr.setRequestHeader(header, value);
			if (!this.request) return;
			const headers = this.request.headers;
			headers[header] = header in headers ? `${headers[header]}, ${value}` : value;
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
			["responseURL", "readyState", "status", "statusText", ...xhrResponses].forEach((key) => {
				delete this.proxyProps[key];
			});
			return this.originalXhr.open(method, url, async, ...args);
		}
		send(data) {
			const ah = this;
			const xhr = ah.originalXhr;
			const request = ah.request;
			if (!request) return xhr.send(data);
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
						xhrAsyncEvents.forEach((evt) => xhr.dispatchEvent(new Event(evt)));
					}
				} else {
					xhr.open(request.method, request.url, request.async, ...ah.openArgs);
					for (const header in request.headers) {
						xhr.setRequestHeader(header, request.headers[header]);
					}
					for (const prop of xhrExtraProps) {
						if (prop in request) xhr[prop] = request[prop];
					}
					xhr.send(request.data);
				}
			});
		}
	}
	function fakeXHR() {
		const xhr = new winAh.realXHR();
		if ("__ajaxHooker" in xhr) console.warn("检测到不同版本的ajaxHooker，可能发生冲突！");
		xhr.__ajaxHooker = new XhrHooker(xhr);
		return xhr.__ajaxHooker.proxyXhr;
	}
	fakeXHR.prototype = win.XMLHttpRequest.prototype;
	Object.keys(win.XMLHttpRequest).forEach((key) => (fakeXHR[key] = win.XMLHttpRequest[key]));
	function fakeFetch(url, options = {}) {
		if (!url) return winAh.realFetch.call(win, url, options);
		return new Promise(async (resolve, reject) => {
			const init = {};
			if (getType(url) === "[object Request]") {
				init.method = url.method;
				init.headers = url.headers;
				if (url.body) init.body = await url.arrayBuffer();
				for (const prop of fetchExtraProps) init[prop] = url[prop];
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
			await req.waitForRequestKeys();
			if (request.abort) {
				if (typeof request.response === "function") {
					const response = {
						finalUrl: request.url,
						status: 200,
						responseHeaders: {},
					};
					await req.waitForResponseKeys(response);
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
				} else {
					reject(new DOMException("aborted", "AbortError"));
				}
				return;
			}
			init.method = request.method;
			init.headers = request.headers;
			init.body = request.data;
			for (const prop of fetchExtraProps) {
				if (prop in request) init[prop] = request[prop];
			}
			winAh.realFetch.call(win, request.url, init).then((res) => {
				if (typeof request.response === "function") {
					const response = {
						finalUrl: res.url,
						status: res.status,
						responseHeaders: parseHeaders(res.headers),
					};
					if (res.ok) {
						fetchResponses.forEach(
							(key) =>
								(res[key] = function () {
									if (key in response) return Promise.resolve(response[key]);
									return resProto[key].call(this).then((val) => {
										response[key] = val;
										return req
											.waitForResponseKeys(response)
											.then(() => (key in response ? response[key] : val));
									});
								})
						);
					} else {
						catchError(request.response, response);
					}
				}
				resolve(res);
			}, reject);
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
	if (winAh.version !== version) console.warn("检测到不同版本的ajaxHooker，可能发生冲突！");
	win.XMLHttpRequest = winAh.fakeXHR;
	win.fetch = winAh.fakeFetch;
	resProto.clone = winAh.fakeFetchClone;
	winAh.hookInsts.add(hookInst);
	// 针对头条、抖音 secsdk.umd.js 的兼容性处理
	class AHFunction extends Function {
		call(thisArg, ...args) {
			if (thisArg && thisArg.__ajaxHooker && thisArg.__ajaxHooker.proxyXhr === thisArg) {
				thisArg = thisArg.__ajaxHooker.originalXhr;
			}
			return Reflect.apply(this, thisArg, args);
		}
		apply(thisArg, args) {
			if (thisArg && thisArg.__ajaxHooker && thisArg.__ajaxHooker.proxyXhr === thisArg) {
				thisArg = thisArg.__ajaxHooker.originalXhr;
			}
			return Reflect.apply(this, thisArg, args || []);
		}
	}
	function hookSecsdk(csrf) {
		Object.setPrototypeOf(csrf.nativeXMLHttpRequestSetRequestHeader, AHFunction.prototype);
		Object.setPrototypeOf(csrf.nativeXMLHttpRequestOpen, AHFunction.prototype);
		Object.setPrototypeOf(csrf.nativeXMLHttpRequestSend, AHFunction.prototype);
	}
	if (win.secsdk) {
		if (win.secsdk.csrf && win.secsdk.csrf.nativeXMLHttpRequestOpen) hookSecsdk(win.secsdk.csrf);
	} else {
		defineProp(win, "secsdk", emptyFn, (secsdk) => {
			delete win.secsdk;
			win.secsdk = secsdk;
			defineProp(secsdk, "csrf", emptyFn, (csrf) => {
				delete secsdk.csrf;
				secsdk.csrf = csrf;
				if (csrf.nativeXMLHttpRequestOpen) hookSecsdk(csrf);
			});
		});
	}
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
