const Httpx = function (__xmlHttpRequest__) {
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
						if (keyName in result.headers && details.headers[keyName] == null) {
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
			let Response = argumentsList[0];
			/* responseText为空，response不为空的情况 */
			if (
				Utils.isNull(Response["responseText"]) &&
				Utils.isNotNull(Response["response"])
			) {
				if (typeof Response["response"] === "object") {
					Utils.tryCatch().run(() => {
						Response["responseText"] = JSON.stringify(Response["response"]);
					});
				} else {
					Response["responseText"] = Response["response"];
				}
			}

			/* response为空，responseText不为空的情况 */
			if (
				Response["response"] == null &&
				typeof Response["responseText"] === "string" &&
				Response["responseText"].trim() !== ""
			) {
				let newResponse = Response["responseText"];
				if (details.responseType === "json") {
					newResponse = Utils.toJSON(Response["responseText"]);
				} else if (details.responseType === "document") {
					let parser = new DOMParser();
					newResponse = parser.parseFromString(
						Response["responseText"],
						"text/html"
					);
				} else if (details.responseType === "arraybuffer") {
					let encoder = new TextEncoder();
					let arrayBuffer = encoder.encode(Response["responseText"]);
					newResponse = arrayBuffer;
				} else if (details.responseType === "blob") {
					let encoder = new TextEncoder();
					let arrayBuffer = encoder.encode(Response["responseText"]);
					newResponse = new Blob([arrayBuffer]);
				} else {
					newResponse = Response["responseText"];
				}
				try {
					Response["response"] = newResponse;
				} catch (error) {
					console.warn("response 无法被覆盖");
				}
			}
			/* Stay扩展中没有finalUrl，对应的是responseURL */
			if (Response["finalUrl"] == null && Response["responseURL"] != null) {
				Response["finalUrl"] = Response["responseURL"];
			}
			/* 状态码2xx都是成功的 */
			if (Math.floor(Response.status / 100) === 2) {
				resolve({
					status: true,
					data: Response,
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
		if ("logDetails" in details && typeof details["logDetails"] === "boolean") {
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

export { Httpx };
