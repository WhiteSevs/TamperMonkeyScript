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
		// @ts-ignore
		global = typeof globalThis !== "undefined" ? globalThis : global || self;
		/* 适用于浏览器中，且this对象是window，如果this是其它，那么会在其它对象下注册对象 */
		// @ts-ignore
		global.pops = factory(global.pops);
	}
	// @ts-ignore
})(typeof window !== "undefined" ? window : this, function (AnotherPops) {
	"use strict";

	const OriginPrototype = {
		Object: {
			defineProperty: Object.defineProperty,
		},
	};

	/** 工具类 */
	const PopsUtils = {
		/** .on绑定的事件 @type {unique symbol} */
		SymbolEvents: Symbol(
			"events_" +
				(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
		),
		// @ts-ignore
		assignJSON(target, source) {
			/* JSON数据存在即替换 */
			if (source == null) {
				return target;
			}
			for (var target_key in target) {
				if (typeof source[target_key] !== "undefined") {
					if (
						typeof source[target_key] === "object" &&
						!(source[target_key] instanceof Node)
					) {
						target[target_key] = this.assignJSON(
							target[target_key],
							source[target_key]
						);
					} else {
						target[target_key] = source[target_key];
					}
				}
			}
			return target;
		},
		/**
		 * 字符串转HTMLElement
		 * @param {string} elementString
		 * @returns {HTMLElement}
		 */
		parseTextToDOM(elementString) {
			/* 去除前后的换行和空格 */
			elementString = elementString
				.replace(/^[\n|\s]*/g, "")
				.replace(/[\n|\s]*$/g, "");
			// @ts-ignore
			let targetElement = PopsDOMUtils.createElement("div", {
				innerHTML: elementString,
			});
			// @ts-ignore
			return targetElement.firstChild;
		},
		/**
		 * 生成随机GUID
		 * @returns {string}
		 */
		getRandomGUID() {
			function randomId() {
				return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			}
			return `${randomId()}${randomId()}-${randomId()}-${randomId()}-${randomId()}-${randomId()}${randomId()}${randomId()}`;
		},
		/**
		 * 判断元素/页面中是否包含该元素
		 * @param {HTMLElement} target （可选）
		 * @param {HTMLElement[]|HTMLElement} sourceList
		 */
		// @ts-ignore
		contains(target, sourceList) {
			if (arguments.length === 1) {
				return this.contains(
					document.body || document.documentElement,
					arguments[0]
				);
			}
			// @ts-ignore
			if (typeof sourceList[Symbol.iterator] === "function") {
				let flag = true;
				// @ts-ignore
				for (const sourceNode of sourceList) {
					if (!target.contains(sourceNode)) {
						flag = false;
						break;
					}
				}
				return flag;
			} else {
				// @ts-ignore
				return this.contains(target, [sourceList]);
			}
		},
		/**
		 * 元素后追加元素
		 * @param {HTMLElement} target （可选）
		 * @param {HTMLElement[]|HTMLElement} sourceList
		 */
		appendChild(target, sourceList) {
			if (arguments.length === 1) {
				this.appendChild(
					document.body || document.documentElement,
					arguments[0]
				);
				return;
			}
			// @ts-ignore
			if (typeof sourceList[Symbol.iterator] === "function") {
				// @ts-ignore
				sourceList.forEach((item) => {
					this.appendChild(target, item);
				});
				return;
			}

			// @ts-ignore
			target.appendChild(sourceList);
		},
		/**
		 * 删除配置中对应的对象
		 * @param {any[]} targets
		 * @param {string} guid
		 * @param {boolean} removeAll 是否全部删除
		 * @returns
		 */
		configRemove(targets, guid, removeAll = false) {
			/**
			 *
			 * @param {PopsLayerCommonConfig} item
			 */
			function removeItem(item) {
				item?.animElement?.remove();
				item?.popsElement?.remove();
				item?.maskElement?.remove();
				item?.$shadowContainer?.remove();
			}
			targets.forEach((target) => {
				target.forEach(
					/**
					 * @param {PopsLayerCommonConfig} item
					 * @param {number} index
					 */
					(item, index) => {
						if (removeAll || item["guid"] === guid) {
							if (
								pops.config.animation.hasOwnProperty(
									// @ts-ignore
									item.animElement.getAttribute("anim")
								)
							) {
								item.animElement.style.width = "100%";
								item.animElement.style.height = "100%";
								// @ts-ignore
								item.animElement.style["animation-name"] =
									item.animElement.getAttribute("anim") + "-reverse";
								if (
									pops.config.animation.hasOwnProperty(
										// @ts-ignore
										item.animElement.style["animation-name"]
									)
								) {
									PopsDOMUtils.on(
										item.animElement,
										// @ts-ignore
										PopsDOMUtils.getAnimationEndNameList(),
										void 0,
										function () {
											removeItem(item);
										},
										{
											capture: true,
										}
									);
								} else {
									removeItem(item);
								}
							} else {
								removeItem(item);
							}
							target.splice(index, 1);
						}
					}
				);
			});

			return targets;
		},
		/**
		 * 隐藏
		 * @param {"alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer"} popsType
		 * @param {any[]} source
		 * @param {string} guid
		 * @param {PopsAlertDetails|PopsDrawerDetails|PopsPromptDetails|PopsConfirmDetails|PopsIframeDetails|PopsLoadingDetails|PopsPanelDetails|PopsFolderDetails} config
		 * @param {HTMLElement} animElement
		 * @param {HTMLElement} maskElement
		 */
		hide(popsType, source, guid, config, animElement, maskElement) {
			let popsElement = animElement.querySelector(".pops[type-value]");
			if (popsType === "drawer") {
				setTimeout(() => {
					maskElement.style.setProperty("display", "none");
					// @ts-ignore
					if (["top", "bottom"].includes(config.direction)) {
						// @ts-ignore
						popsElement.style.setProperty("height", 0);
						// @ts-ignore
					} else if (["left", "right"].includes(config.direction)) {
						// @ts-ignore
						popsElement.style.setProperty("width", 0);
					} else {
						// @ts-ignore
						console.error("未知direction：", config.direction);
					}
					// @ts-ignore
				}, config.closeDelay);
			} else {
				source.forEach((item) => {
					if (item.guid === guid) {
						/* 存在动画 */
						item.animElement.style.width = "100%";
						item.animElement.style.height = "100%";
						item.animElement.style["animation-name"] =
							item.animElement.getAttribute("anim") + "-reverse";
						if (
							pops.config.animation.hasOwnProperty(
								item.animElement.style["animation-name"]
							)
						) {
							function animationendCallBack() {
								item.animElement.style.display = "none";
								if (item.maskElement) {
									item.maskElement.style.display = "none";
								}
								PopsDOMUtils.off(
									item.animElement,
									// @ts-ignore
									PopsDOMUtils.getAnimationEndNameList(),
									void 0,
									animationendCallBack,
									{
										capture: true,
									}
								);
							}
							PopsDOMUtils.on(
								item.animElement,
								// @ts-ignore
								PopsDOMUtils.getAnimationEndNameList(),
								void 0,
								animationendCallBack,
								{
									capture: true,
								}
							);
						} else {
							item.animElement.style.display = "none";
							if (item.maskElement) {
								item.maskElement.style.display = "none";
							}
						}

						return;
					}
				});
			}
		},
		/**
		 * 显示
		 * @param {"alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer"} popsType
		 * @param {any[]} source
		 * @param {string} guid
		 * @param {PopsAlertDetails|PopsDrawerDetails|PopsPromptDetails|PopsConfirmDetails|PopsIframeDetails|PopsLoadingDetails|PopsPanelDetails|PopsFolderDetails} config
		 * @param {HTMLElement} animElement
		 * @param {HTMLElement} maskElement
		 */
		show(popsType, source, guid, config, animElement, maskElement) {
			let popsElement = animElement.querySelector(".pops[type-value]");
			if (popsType === "drawer") {
				setTimeout(() => {
					maskElement.style.setProperty("display", "");
					// @ts-ignore
					if (["top", "bottom"].includes(config.direction)) {
						// @ts-ignore
						popsElement.style.setProperty("height", config.size);
						// @ts-ignore
					} else if (["left", "right"].includes(config.direction)) {
						// @ts-ignore
						popsElement.style.setProperty("width", config.size);
					} else {
						// @ts-ignore
						console.error("未知direction：", config.direction);
					}
					// @ts-ignore
				}, config.openDelay);
			} else {
				source.forEach((item) => {
					if (item.guid === guid) {
						item.animElement.style.width = "";
						item.animElement.style.height = "";
						item.animElement.style["animation-name"] = item.animElement
							.getAttribute("anim")
							.replace("-reverse", "");
						if (
							pops.config.animation.hasOwnProperty(
								item.animElement.style["animation-name"]
							)
						) {
							item.animElement.style.display = "";
							if (item.maskElement) {
								item.maskElement.style.display = "";
							}
							function animationendCallBack() {
								PopsDOMUtils.off(
									item.animElement,
									// @ts-ignore
									PopsDOMUtils.getAnimationEndNameList(),
									void 0,
									animationendCallBack,
									{
										capture: true,
									}
								);
							}
							PopsDOMUtils.on(
								item.animElement,
								// @ts-ignore
								PopsDOMUtils.getAnimationEndNameList(),
								void 0,
								animationendCallBack,
								{
									capture: true,
								}
							);
						} else {
							item.animElement.style.display = "";
							if (item.maskElement) {
								item.maskElement.style.display = "";
							}
						}
					}
					return;
				});
			}
		},
		/**
		 * 关闭
		 * @param {string} popsType
		 * @param {any} source
		 * @param {string} guid
		 * @param {PopsAlertDetails|PopsDrawerDetails|PopsPromptDetails|PopsConfirmDetails|PopsIframeDetails|PopsLoadingDetails|PopsPanelDetails|PopsFolderDetails} config
		 * @param {HTMLElement} animElement
		 */
		close(popsType, source, guid, config, animElement) {
			let popsElement = animElement.querySelector(".pops[type-value]");
			/**
			 * 动画结束事件
			 */
			function transitionendEvent() {
				/**
				 *
				 * @param {TransitionEvent} event
				 */
				function closeCallBack(event) {
					if (event.propertyName !== "transform") {
						return;
					}
					// @ts-ignore
					PopsDOMUtils.off(
						popsElement,
						PopsDOMUtils.getTransitionEndNameList(),
						void 0,
						closeCallBack
					);
					PopsUtils.configRemove([source], guid);
				}
				/* 监听过渡结束 */
				// @ts-ignore
				PopsDOMUtils.on(
					popsElement,
					PopsDOMUtils.getTransitionEndNameList(),
					void 0,
					closeCallBack
				);
				// @ts-ignore
				let popsTransForm = getComputedStyle(popsElement).transform;
				if (popsTransForm !== "none") {
					PopsDOMUtils.trigger(
						// @ts-ignore
						popsElement,
						PopsDOMUtils.getTransitionEndNameList(),
						void 0,
						true
					);
					return;
				}
				// @ts-ignore
				if (["top"].includes(config.direction)) {
					// @ts-ignore
					popsElement.style.setProperty("transform", "translateY(-100%)");
					// @ts-ignore
				} else if (["bottom"].includes(config.direction)) {
					// @ts-ignore
					popsElement.style.setProperty("transform", "translateY(100%)");
					// @ts-ignore
				} else if (["left"].includes(config.direction)) {
					// @ts-ignore
					popsElement.style.setProperty("transform", "translateX(-100%)");
					// @ts-ignore
				} else if (["right"].includes(config.direction)) {
					// @ts-ignore
					popsElement.style.setProperty("transform", "translateX(100%)");
				} else {
					// @ts-ignore
					console.error("未知direction：", config.direction);
				}
			}

			if (popsType === "drawer") {
				setTimeout(() => {
					transitionendEvent();
					// @ts-ignore
				}, config.closeDelay);
			} else {
				PopsUtils.configRemove([source], guid);
			}
		},
		/**
		 * 获取所有弹窗中的最大的z-index
		 * @param {number} defaultValue
		 */
		getPopsMaxZIndex(defaultValue) {
			let maxZIndex = 0;
			// @ts-ignore
			let maxZIndexElement = null;

			Object.keys(pops.config.layer).forEach((item) => {
				// @ts-ignore
				pops.config.layer[item].forEach(
					/**
					 * @param {PopsLayerCommonConfig} item2
					 */
					(item2) => {
						let itemZIndex = parseInt(
							getComputedStyle(item2["animElement"]).zIndex
						);
						maxZIndexElement =
							// @ts-ignore
							itemZIndex > maxZIndex ? item2["animElement"] : maxZIndexElement;
						maxZIndex = itemZIndex > maxZIndex ? itemZIndex : maxZIndex;
					}
				);
			});
			maxZIndex = maxZIndex === 0 ? defaultValue : maxZIndex;
			return { zIndex: maxZIndex, animElement: maxZIndexElement };
		},
		/**
		 * 获取CSS Rule
		 * @param {StyleSheet} sheet
		 * @returns
		 */
		getKeyFrames(sheet) {
			let result = {};
			// @ts-ignore
			Object.keys(sheet.cssRules).forEach((key) => {
				if (
					// @ts-ignore
					sheet.cssRules[key].type === 7 &&
					// @ts-ignore
					sheet.cssRules[key].name.startsWith("pops-anim-")
				) {
					// @ts-ignore
					result[sheet.cssRules[key].name] = sheet.cssRules[key];
				}
			});
			return result;
		},
		/**
		 * 拖拽元素
		 * 说明：
		 * + 元素的position为absolute或者fixed
		 * + 会为元素的
		 * @param {HTMLElement} moveElement
		 * @param {{
		 * dragElement: HTMLElement,
		 * limit: boolean,
		 * extraDistance: number,
		 * container: Element|Window,
		 * moveCallBack?: (moveElement: HTMLElement,left: number,top: number) => void,
		 * endCallBack?: (moveElement: HTMLElement,left: number,top: number) => void,
		 * preventEvent?: (event: TouchEvent|PointerEvent) => boolean;
		 * }} options
		 */
		// @ts-ignore
		drag(moveElement, options = {}) {
			options = Object.assign(
				{
					limit: true,
					extraDistance: 3,
					container: globalThis,
				},
				options
			);
			let isMove = false;
			/* 点击元素，left偏移 */
			let clickElementLeftOffset = 0;
			/* 点击元素，top偏移 */
			let clickElementTopOffset = 0;
			let AnyTouch = PopsUtils.AnyTouch();
			// @ts-ignore
			let anyTouchElement = new AnyTouch(options.dragElement, {
				// @ts-ignore
				preventEvent(event) {
					if (typeof options.preventEvent === "function") {
						return options.preventEvent(event);
					} else {
						return false;
					}
				},
			});
			// @ts-ignore
			PopsDOMUtils.css(options.dragElement, {
				cursor: "move",
			});
			/**
			 * 获取移动元素的transform偏移
			 */
			// @ts-ignore
			function getTransform(element) {
				let transform_left = 0;
				let transform_top = 0;
				let elementTransform = globalThis.getComputedStyle(element).transform;
				if (
					elementTransform !== "none" &&
					elementTransform != null &&
					elementTransform !== ""
				) {
					// @ts-ignore
					let elementTransformSplit = elementTransform
						.match(/\((.+)\)/)[1]
						.split(",");
					transform_left = Math.abs(parseInt(elementTransformSplit[4]));
					transform_top = Math.abs(parseInt(elementTransformSplit[5]));
				}
				return {
					transformLeft: transform_left,
					transformTop: transform_top,
				};
			}
			/**
			 * 修改移动的元素的style
			 */
			// @ts-ignore
			function changeMoveElementStyle(element) {
				let old_transitionDuration = element.style.transitionDuration;
				if (globalThis.getComputedStyle(element).transitionDuration !== "0s") {
					element.style.transitionDuration = "0s";
				}
				return () => {
					element.style.transitionDuration = old_transitionDuration;
				};
			}
			/**
			 * 获取容器的高度、宽度，一般是window为容器
			 */
			// @ts-ignore
			function getContainerWidthOrHeight(container) {
				container = container ?? globalThis;
				return {
					width: PopsDOMUtils.width(container),
					height: PopsDOMUtils.height(container),
				};
			}
			/**
			 * 获取容器的最小left、top偏移
			 */
			// @ts-ignore
			function getContainerTopOrLeft(container) {
				container = container ?? globalThis;
				if (PopsUtils.isWin(container)) {
					return {
						left: 0,
						top: 0,
					};
				} else {
					let rect = container.getBoundingClientRect();
					return {
						left: rect.left,
						top: rect.top,
					};
				}
			}
			let transformInfo = getTransform(moveElement);
			let transformLeft = transformInfo.transformLeft;
			let transformTop = transformInfo.transformTop;
			// @ts-ignore
			let resumeMoveElementStyle = null;
			// @ts-ignore
			anyTouchElement.on("pan", function (event) {
				if (!isMove) {
					isMove = true;
					let rect = options.dragElement.getBoundingClientRect();
					clickElementLeftOffset = event.x - rect.left;
					clickElementTopOffset = event.y - rect.top;
					transformInfo = getTransform(moveElement);
					transformLeft = transformInfo.transformLeft;
					transformTop = transformInfo.transformTop;
					//if (event.nativeEvent.offsetX) {
					//  clickElementLeftOffset = parseInt(event.nativeEvent.offsetX);
					//} else {
					//  clickElementLeftOffset = parseInt(event.getOffset().x);
					//}
					//if (event.nativeEvent.offsetY) {
					//  clickElementTopOffset = parseInt(event.nativeEvent.offsetY);
					//} else {
					//  clickElementTopOffset = parseInt(event.getOffset().y);
					//}
					resumeMoveElementStyle = changeMoveElementStyle(moveElement);
				}

				/** 当前移动的left偏移 */
				let currentMoveLeftOffset =
					event.x - clickElementLeftOffset + transformLeft;
				/** 当前移动的top偏移 */
				let currentMoveTopOffset =
					event.y - clickElementTopOffset + transformTop;
				/* 拖拽移动 */
				if (event.phase === "move") {
					if (options.limit) {
						/* 限制在容器内移动 */
						/* left偏移最大值 */
						let maxLeftOffset =
							getContainerWidthOrHeight(options.container).width -
							PopsDOMUtils.width(moveElement) +
							transformLeft;
						let { left: minLeftOffset, top: minTopOffset } =
							getContainerTopOrLeft(options.container);
						/* top偏移的最大值 */
						let maxTopOffset =
							getContainerWidthOrHeight(options.container).height -
							PopsDOMUtils.height(moveElement) +
							transformTop;
						if (currentMoveLeftOffset > maxLeftOffset) {
							/* 不允许超过容器的最大宽度 */
							currentMoveLeftOffset = maxLeftOffset;
						}
						if (currentMoveTopOffset > maxTopOffset) {
							/* 不允许超过容器的最大高度 */
							currentMoveTopOffset = maxTopOffset;
						}
						if (
							currentMoveLeftOffset - options.extraDistance * 2 <
							minLeftOffset + transformLeft
						) {
							/* 不允许left偏移小于容器最小值 */
							currentMoveLeftOffset = minLeftOffset + transformLeft;
							/* 最左边 +额外距离 */
							currentMoveLeftOffset += options.extraDistance;
						} else {
							/* 最右边 -额外距离 */
							currentMoveLeftOffset -= options.extraDistance;
						}
						if (
							currentMoveTopOffset - options.extraDistance * 2 <
							minTopOffset + transformTop
						) {
							/* 不允许top偏移小于容器最小值 */
							currentMoveTopOffset = minTopOffset + transformTop;
							/* 最上面 +额外距离 */
							currentMoveTopOffset += options.extraDistance;
						} else {
							/* 最下面 -额外距离 */
							currentMoveTopOffset -= options.extraDistance;
						}
					}
					if (typeof options.moveCallBack === "function") {
						options.moveCallBack(
							moveElement,
							currentMoveLeftOffset,
							currentMoveTopOffset
						);
					}
					// @ts-ignore
					PopsDOMUtils.css(moveElement, {
						left: currentMoveLeftOffset + "px",
						top: currentMoveTopOffset + "px",
					});
				}

				/* 停止拖拽 */
				if (event.phase === "end") {
					isMove = false;
					// @ts-ignore
					if (typeof resumeMoveElementStyle === "function") {
						// @ts-ignore
						resumeMoveElementStyle();
						resumeMoveElementStyle = null;
					}
					if (typeof options.endCallBack === "function") {
						options.endCallBack(
							moveElement,
							currentMoveLeftOffset,
							currentMoveTopOffset
						);
					}
				}
			});
			/* 因为会覆盖上面的点击事件，主动触发一下 */
			// @ts-ignore
			anyTouchElement.on(["click", "tap"], function (event) {
				// @ts-ignore
				event.changedPoints.forEach((item) => {
					// @ts-ignore
					PopsDOMUtils.trigger(item.target, "click", void 0, transformLeft);
				});
			});
		},
		/**
		 * AnyTouch
		 * + https://fastly.jsdelivr.net/npm/any-touch@2.2.0/dist/any-touch.umd.min.js
		 * + https://github.com/any86/any-touch/blob/master/README.CN.md
		 */
		AnyTouch() {
			let anyTouch = null;
			// @ts-ignore
			// @ts-ignore
			(function (global, factory) {
				anyTouch = factory();
			})(this, function () {
				"use strict";

				/*! *****************************************************************************
        Copyright (c) Microsoft Corporation.
    
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
    
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
				/* global Reflect, Promise */

				// @ts-ignore
				var extendStatics = function (d, b) {
					extendStatics =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (d, b) {
								d.__proto__ = b;
							}) ||
						function (d, b) {
							for (var p in b)
								if (Object.hasOwnProperty.call(b, p)) d[p] = b[p];
						};
					return extendStatics(d, b);
				};

				// @ts-ignore
				function __extends(d, b) {
					if (typeof b !== "function" && b !== null)
						throw new TypeError(
							"Class extends value " +
								String(b) +
								" is not a constructor or null"
						);
					extendStatics(d, b);
					function __() {
						this.constructor = d;
					}
					d.prototype =
						b === null
							? Object.create(b)
							: ((__.prototype = b.prototype), new __());
				}

				// @ts-ignore
				var __assign = function () {
					__assign =
						Object.assign ||
						function __assign(t) {
							for (var s, i = 1, n = arguments.length; i < n; i++) {
								s = arguments[i];
								for (var p in s)
									if (Object.hasOwnProperty.call(s, p)) t[p] = s[p];
							}
							return t;
						};
					// @ts-ignore
					return __assign.apply(this, arguments);
				};

				// @ts-ignore
				function __values(o) {
					var s = typeof Symbol === "function" && Symbol.iterator,
						m = s && o[s],
						i = 0;
					if (m) return m.call(o);
					if (o && typeof o.length === "number")
						return {
							next: function () {
								if (o && i >= o.length) o = void 0;
								return { value: o && o[i++], done: !o };
							},
						};
					throw new TypeError(
						s ? "Object is not iterable." : "Symbol.iterator is not defined."
					);
				}

				var AnyEvent = (function () {
					function AnyEvent() {
						this.__map = {};
					}
					// @ts-ignore
					AnyEvent.prototype.beforeEach = function (interceptor) {
						this.__interceptor = interceptor;
					};
					// @ts-ignore
					AnyEvent.prototype.on = function (typeOrTypes, listener) {
						var e_1, _a;
						var types = Array.isArray(typeOrTypes)
							? typeOrTypes
							: [typeOrTypes];
						try {
							for (
								var types_1 = __values(types), types_1_1 = types_1.next();
								!types_1_1.done;
								types_1_1 = types_1.next()
							) {
								var type = types_1_1.value;
								// @ts-ignore
								this.__map[type] = this.__map[type] || [];
								// @ts-ignore
								var listeners = this.__map[type];
								if (listeners) {
									listeners.push(listener);
								}
							}
						} catch (e_1_1) {
							e_1 = { error: e_1_1 };
						} finally {
							try {
								if (types_1_1 && !types_1_1.done && (_a = types_1.return))
									_a.call(types_1);
							} finally {
								if (e_1) throw e_1.error;
							}
						}
						return this;
					};
					// @ts-ignore
					AnyEvent.prototype.emit = function (type, payload, callback) {
						var _this = this;
						if (void 0 !== this.__interceptor) {
							this.__interceptor(type, function () {
								_this.__emit(type, payload);
								callback && callback();
							});
						} else {
							this.__emit(type, payload);
							callback && callback();
						}
					};
					// @ts-ignore
					AnyEvent.prototype.__emit = function (type, event) {
						var e_2, _a;
						// @ts-ignore
						var listeners = this.__map[type];
						if (
							Array.isArray(listeners) &&
							(listeners === null || listeners === void 0
								? void 0
								: listeners.length)
						) {
							try {
								for (
									var listeners_1 = __values(listeners),
										listeners_1_1 = listeners_1.next();
									!listeners_1_1.done;
									listeners_1_1 = listeners_1.next()
								) {
									var listener = listeners_1_1.value;
									listener(event, type);
								}
							} catch (e_2_1) {
								e_2 = { error: e_2_1 };
							} finally {
								try {
									if (
										listeners_1_1 &&
										!listeners_1_1.done &&
										(_a = listeners_1.return)
									)
										_a.call(listeners_1);
								} finally {
									if (e_2) throw e_2.error;
								}
							}
						}
						this.event = event;
					};
					// @ts-ignore
					AnyEvent.prototype.off = function (type, listener) {
						// @ts-ignore
						var listeners = this.__map[type];
						if (void 0 !== listeners) {
							if (void 0 === listener) {
								// @ts-ignore
								delete this.__map[type];
							} else {
								// @ts-ignore
								var index = listeners.findIndex(function (cb) {
									return cb === listener;
								});
								listeners.splice(index, 1);
							}
						}
					};
					AnyEvent.prototype.destroy = function () {
						this.__map = {};
					};
					return AnyEvent;
				})();

				var TOUCH_START = "touchstart";
				var TOUCH_MOVE = "touchmove";
				var TOUCH_END = "touchend";
				var TOUCH_CANCEL = "touchcancel";
				var MOUSE_UP = "mouseup";
				var MOUSE_MOVE = "mousemove";
				var MOUSE_DOWN = "mousedown";
				var TYPE_START$1 = "start";
				var TYPE_MOVE$1 = "move";
				var TYPE_END$1 = "end";
				// @ts-ignore
				function isFunction(input) {
					return "[object Function]" === Object.prototype.toString.call(input);
				}

				var CLIENT_X = "clientX";
				var CLIENT_Y = "clientY";
				var COMPUTE_INTERVAL = 16;
				var TYPE_START = "start";
				var TYPE_MOVE = "move";
				var TYPE_CANCEL = "cancel";
				var TYPE_END = "end";
				var DIRECTION_LEFT = "left";
				var DIRECTION_RIGHT = "right";
				var DIRECTION_UP = "up";
				var DIRECTION_DOWN = "down";

				var _a;
				var STATUS_CODE_AND_NAME_MAP =
					((_a = {}),
					// @ts-ignore
					(_a[4] = TYPE_START),
					// @ts-ignore
					(_a[5] = TYPE_MOVE),
					// @ts-ignore
					(_a[1] = TYPE_END),
					// @ts-ignore
					(_a[3] = TYPE_CANCEL),
					_a);
				// @ts-ignore
				function getStatusName(code) {
					// @ts-ignore
					return STATUS_CODE_AND_NAME_MAP[code];
				}
				// @ts-ignore
				function flow(isVaild, lastStatus, phase) {
					var _a, _b, _c, _d, _e, _f, _g;
					var STATE_MAP = {
						1:
							((_a = {}),
							// @ts-ignore
							(_a[0] = ((_b = {}), (_b[TYPE_MOVE] = 4), _b)),
							// @ts-ignore
							(_a[4] =
								((_c = {}),
								// @ts-ignore
								(_c[TYPE_MOVE] = 5),
								// @ts-ignore
								(_c[TYPE_END] = 1),
								// @ts-ignore
								(_c[TYPE_CANCEL] = 3),
								_c)),
							// @ts-ignore
							(_a[5] =
								((_d = {}),
								// @ts-ignore
								(_d[TYPE_MOVE] = 5),
								// @ts-ignore
								(_d[TYPE_END] = 1),
								// @ts-ignore
								(_d[TYPE_CANCEL] = 3),
								_d)),
							_a),
						0:
							((_e = {}),
							// @ts-ignore
							(_e[4] =
								((_f = {}),
								// @ts-ignore
								(_f[TYPE_MOVE] = 2),
								// @ts-ignore
								(_f[TYPE_END] = 1),
								// @ts-ignore
								(_f[TYPE_CANCEL] = 3),
								_f)),
							// @ts-ignore
							(_e[5] =
								((_g = {}),
								// @ts-ignore
								(_g[TYPE_START] = 2),
								// @ts-ignore
								(_g[TYPE_MOVE] = 2),
								// @ts-ignore
								(_g[TYPE_END] = 1),
								// @ts-ignore
								(_g[TYPE_CANCEL] = 3),
								_g)),
							_e),
					};
					// @ts-ignore
					var map = STATE_MAP[Number(isVaild)][lastStatus];
					return (void 0 !== map && map[phase]) || 0;
				}
				// @ts-ignore
				function resetState(context) {
					if ([1, 3, 2].includes(context.state)) {
						context.state = 0;
					}
				}
				// @ts-ignore
				function isMoveOrEndOrCancel(state) {
					return [5, 1, 3].includes(state);
				}
				// @ts-ignore
				function isDisabled(context) {
					if (context.disabled) {
						context.state = 0;
						return true;
					}
				}

				// @ts-ignore
				function createPluginContext(defaultOptions, options) {
					return __assign(__assign(__assign({}, defaultOptions), options), {
						state: 0,
						disabled: false,
					});
				}

				// @ts-ignore
				function round2(n) {
					return Math.round(n * 100) / 100;
				}

				function inputCreator() {
					var id = 0;
					var prevInput;
					// @ts-ignore
					var activeInput;
					// @ts-ignore
					var startInput;
					// @ts-ignore
					var startMultiInput;
					// @ts-ignore
					return function (basicsInput) {
						// @ts-ignore
						prevInput = activeInput;
						if (void 0 !== basicsInput) {
							id = Number.MAX_SAFE_INTEGER > id ? ++id : 1;
							var pureInput = extendInput(basicsInput, id);
							activeInput = pureInput;
							var isStart = pureInput.isStart,
								pointLength = pureInput.pointLength;
							if (isStart) {
								startInput = pureInput;
								prevInput = void 0;
								if (1 < pointLength) {
									startMultiInput = pureInput;
								} else {
									startMultiInput = void 0;
								}
							}
							return __assign(__assign({}, pureInput), {
								prevInput: prevInput,
								// @ts-ignore
								startMultiInput: startMultiInput,
								// @ts-ignore
								startInput: startInput,
							});
						}
					};
				}
				// @ts-ignore
				function getCenter(points) {
					var length = points.length;
					if (0 < length) {
						if (1 === length) {
							var _a = points[0],
								clientX = _a.clientX,
								clientY = _a.clientY;
							return { x: Math.round(clientX), y: Math.round(clientY) };
						}
						var countPoint = points.reduce(
							// @ts-ignore
							function (countPoint, point) {
								countPoint.x += point[CLIENT_X];
								countPoint.y += point[CLIENT_Y];
								return countPoint;
							},
							{ x: 0, y: 0 }
						);
						return {
							x: Math.round(countPoint.x / length),
							y: Math.round(countPoint.y / length),
						};
					}
				}
				// @ts-ignore
				function extendInput(basicsInput, id) {
					var phase = basicsInput.phase,
						points = basicsInput.points,
						changedPoints = basicsInput.changedPoints,
						nativeEvent = basicsInput.nativeEvent;
					var pointLength = points.length;
					var isStart = TYPE_START === phase;
					var isEnd =
						(TYPE_END === phase && 0 === pointLength) || TYPE_CANCEL === phase;
					var timestamp = Date.now();
					var _a = getCenter(points) || getCenter(changedPoints),
						// @ts-ignore
						x = _a.x,
						// @ts-ignore
						y = _a.y;
					var currentTarget = nativeEvent.currentTarget;
					return Object.assign(basicsInput, {
						id: id,
						x: x,
						y: y,
						timestamp: timestamp,
						isStart: isStart,
						isEnd: isEnd,
						pointLength: pointLength,
						currentTarget: currentTarget,
						// @ts-ignore
						getOffset: function (el) {
							if (el === void 0) {
								el = currentTarget;
							}
							var rect = el.getBoundingClientRect();
							return {
								x: x - Math.round(rect.left),
								y: y - Math.round(rect.top),
							};
						},
					});
				}

				function mouse() {
					// @ts-ignore
					var prevPoints;
					var isPressed = false;
					// @ts-ignore
					var _target = null;
					var createInput = inputCreator();
					// @ts-ignore
					return function (event) {
						var clientX = event.clientX,
							clientY = event.clientY,
							type = event.type,
							button = event.button,
							target = event.target;
						var points = [
							{ clientX: clientX, clientY: clientY, target: target },
						];
						var phase;
						if (MOUSE_DOWN === type && 0 === button) {
							_target = target;
							isPressed = true;
							phase = TYPE_START$1;
						} else if (isPressed) {
							if (MOUSE_MOVE === type) {
								phase = TYPE_MOVE$1;
							} else if (MOUSE_UP === type) {
								points = [];
								phase = TYPE_END$1;
								isPressed = false;
							}
						} else {
							return;
						}
						// @ts-ignore
						var changedPoints = prevPoints || [
							{ clientX: clientX, clientY: clientY, target: target },
						];
						prevPoints = [
							{ clientX: clientX, clientY: clientY, target: target },
						];
						if (void 0 !== phase) {
							return createInput({
								phase: phase,
								changedPoints: changedPoints,
								points: points,
								// @ts-ignore
								target: _target,
								// @ts-ignore
								targets: [_target],
								nativeEvent: event,
							});
						}
					};
				}

				// @ts-ignore
				function touch(el) {
					var createInput = inputCreator();
					// @ts-ignore
					return function (event) {
						// @ts-ignore
						var targets = [];
						// @ts-ignore
						var points = [];
						Array.from(event.touches).forEach(function (_a) {
							var clientX = _a.clientX,
								clientY = _a.clientY,
								target = _a.target;
							if (el === null || el === void 0 ? void 0 : el.contains(target)) {
								targets.push(target);
								points.push({
									clientX: clientX,
									clientY: clientY,
									target: target,
								});
							}
						});
						var changedPoints = Array.from(event.changedTouches).map(function (
							_a
						) {
							var clientX = _a.clientX,
								clientY = _a.clientY,
								target = _a.target;
							return { clientX: clientX, clientY: clientY, target: target };
						});
						return createInput({
							phase: event.type.replace("touch", ""),
							changedPoints: changedPoints,
							// @ts-ignore
							points: points,
							nativeEvent: event,
							target: event.target,
							// @ts-ignore
							targets: targets,
						});
					};
				}

				// @ts-ignore
				function dispatchDomEvent(typeName, el, payload, eventInit) {
					var data = {};
					for (var key in payload) {
						if (!["target", "currentTarget", "type"].includes(key)) {
							// @ts-ignore
							data[key] = payload[key];
						}
					}
					// @ts-ignore
					var event;
					if (document.createEvent) {
						event = document.createEvent("HTMLEvents");
						event.initEvent(
							typeName,
							eventInit === null || eventInit === void 0
								? void 0
								: eventInit.bubbles,
							eventInit === null || eventInit === void 0
								? void 0
								: eventInit.cancelable
						);
					} else {
						event = new Event(typeName, eventInit);
					}
					Object.assign(event, data, {
						match: function () {
							return (
								payload.targets &&
								0 < payload.targets.length &&
								// @ts-ignore
								payload.targets.every(function (target) {
									// @ts-ignore
									return event.currentTarget.contains(target);
								})
							);
						},
					});
					return el.dispatchEvent(event);
				}

				// @ts-ignore
				function canPreventDefault(event, options) {
					var preventDefault = options.preventDefault;
					if (isFunction(preventDefault)) {
						return preventDefault(event);
					} else {
						return !!preventDefault;
					}
				}

				var ELEMENT_TYPES = [
					TOUCH_START,
					TOUCH_MOVE,
					TOUCH_END,
					TOUCH_CANCEL,
					MOUSE_DOWN,
				];
				var WINDOW_TYPES = [MOUSE_MOVE, MOUSE_UP];
				// @ts-ignore
				function bindElement(el, catchEvent, options) {
					ELEMENT_TYPES.forEach(function (type) {
						el.addEventListener(type, catchEvent, options);
					});
					WINDOW_TYPES.forEach(function (type) {
						window.addEventListener(type, catchEvent, options);
					});
					return function () {
						ELEMENT_TYPES.forEach(function (types) {
							el.removeEventListener(types, catchEvent);
						});
						WINDOW_TYPES.forEach(function (type) {
							window.removeEventListener(type, catchEvent);
						});
					};
				}

				var TYPE_COMPUTED = "computed";
				var DEFAULT_OPTIONS$6 = {
					domEvents: { bubbles: true, cancelable: true },
					// @ts-ignore
					preventDefault: function (event) {
						if (event.target && "tagName" in event.target) {
							var tagName = event.target.tagName;
							return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(tagName);
						}
						return false;
					},
				};
				var TYPE_UNBIND = "u";
				var TYPE_INPUT = "input";
				var TYPE_AT_AFTER = "at:after";
				var default_1$1 = (function (_super) {
					__extends(default_1, _super);
					// @ts-ignore
					function default_1(el, options) {
						var _a;
						// @ts-ignore
						var _this = _super.call(this) || this;
						// @ts-ignore
						_this.v = "2.1.3";
						// @ts-ignore
						_this.__computeFunctionList = [];
						// @ts-ignore
						_this.__computeFunctionCreatorList = [];
						// @ts-ignore
						_this.__pluginContexts = [];
						_this.__isIgnoreMouse = false;
						// @ts-ignore
						_this.el = el;
						_this.c = {};
						_this.__options = __assign(
							__assign({}, DEFAULT_OPTIONS$6),
							options
						);
						// @ts-ignore
						var createInputFromTouch = touch(_this.el);
						var createInputFromMouse = mouse();
						// @ts-ignore
						_this.__inputCreatorMap =
							((_a = {}),
							// @ts-ignore
							(_a[TOUCH_START] = createInputFromTouch),
							// @ts-ignore
							(_a[TOUCH_MOVE] = createInputFromTouch),
							// @ts-ignore
							(_a[TOUCH_END] = createInputFromTouch),
							// @ts-ignore
							(_a[TOUCH_CANCEL] = createInputFromTouch),
							// @ts-ignore
							(_a[MOUSE_DOWN] = createInputFromMouse),
							// @ts-ignore
							(_a[MOUSE_MOVE] = createInputFromMouse),
							// @ts-ignore
							(_a[MOUSE_UP] = createInputFromMouse),
							_a);
						// @ts-ignore
						_this.on(TYPE_AT_AFTER, function (payload) {
							var target = payload.target,
								__type = payload.__type;
							var domEvents = _this.__options.domEvents;
							// @ts-ignore
							if (!!domEvents && void 0 !== _this.el && !!target) {
								dispatchDomEvent(__type, target, payload, domEvents);
								dispatchDomEvent(TYPE_AT_AFTER, target, payload, domEvents);
							}
						});
						if (void 0 !== el) {
							el.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
							var supportsPassive_1 = false;
							try {
								var opts = {};
								OriginPrototype.Object.defineProperty(opts, "passive", {
									get: function () {
										supportsPassive_1 = true;
									},
								});
								window.addEventListener(
									"_",
									function () {
										return void 0;
									},
									opts
								);
							} catch (_b) {}
							// @ts-ignore
							_this.on(
								TYPE_UNBIND,
								bindElement(
									el,
									_this.catchEvent.bind(_this),
									false === _this.__options.preventDefault && supportsPassive_1
										? { passive: true }
										: { passive: false }
								)
							);
						}
						return _this;
					}
					// @ts-ignore
					default_1.prototype.use = function (plugin, pluginOptions) {
						// @ts-ignore
						this.__pluginContexts.push(plugin(this, pluginOptions));
					};
					// @ts-ignore
					default_1.prototype.catchEvent = function (event) {
						// @ts-ignore
						var input = this.__inputCreatorMap[event.type](event);
						if (void 0 !== input) {
							var stopPropagation = function () {
								return event.stopPropagation();
							};
							var stopImmediatePropagation = function () {
								return event.stopImmediatePropagation();
							};
							var preventDefault = function () {
								return event.preventDefault();
							};
							if (canPreventDefault(event, this.__options)) {
								preventDefault();
							} else {
								if ("touchstart" === event.type) {
									this.__isIgnoreMouse = true;
								} else if ("touchmove" === event.type) {
									this.__isIgnoreMouse = false;
								}
								if (this.__isIgnoreMouse && event.type.startsWith("mouse")) {
									if ("mouseup" === event.type) {
										this.__isIgnoreMouse = false;
									}
									return;
								}
							}
							// @ts-ignore
							this.emit(TYPE_INPUT, input);
							this.emit2("at:".concat(input.phase), input, {});
							var computed_1 = {};
							// @ts-ignore
							this.__computeFunctionList.forEach(function (compute) {
								var result = compute(input, computed_1);
								if (void 0 !== result) {
									for (var key in result) {
										// @ts-ignore
										computed_1[key] = result[key];
									}
								}
							});
							// @ts-ignore
							this.emit(
								TYPE_COMPUTED,
								__assign(__assign(__assign({}, input), computed_1), {
									stopPropagation: stopPropagation,
									stopImmediatePropagation: stopImmediatePropagation,
									preventDefault: preventDefault,
								})
							);
						}
					};
					default_1.prototype.compute = function (
						// @ts-ignore
						computeFunctionCreatorList,
						// @ts-ignore
						callback
					) {
						var e_1, _a;
						try {
							for (
								var computeFunctionCreatorList_1 = __values(
										computeFunctionCreatorList
									),
									computeFunctionCreatorList_1_1 =
										computeFunctionCreatorList_1.next();
								!computeFunctionCreatorList_1_1.done;
								computeFunctionCreatorList_1_1 =
									computeFunctionCreatorList_1.next()
							) {
								var computeFunctionCreator =
									computeFunctionCreatorList_1_1.value;
								if (
									// @ts-ignore
									!this.__computeFunctionCreatorList.includes(
										computeFunctionCreator
									)
								) {
									// @ts-ignore
									this.__computeFunctionCreatorList.push(
										computeFunctionCreator
									);
									// @ts-ignore
									this.__computeFunctionList.push(computeFunctionCreator());
								}
							}
						} catch (e_1_1) {
							e_1 = { error: e_1_1 };
						} finally {
							try {
								if (
									computeFunctionCreatorList_1_1 &&
									!computeFunctionCreatorList_1_1.done &&
									(_a = computeFunctionCreatorList_1.return)
								)
									_a.call(computeFunctionCreatorList_1);
							} finally {
								if (e_1) throw e_1.error;
							}
						}
						// @ts-ignore
						this.on(TYPE_COMPUTED, callback);
					};
					// @ts-ignore
					default_1.prototype.beforeEach = function (interceptor) {
						var _this = this;
						// @ts-ignore
						_super.prototype.beforeEach.call(this, function (type, next) {
							var _a;
							if ((_a = _this.c) === null || _a === void 0 ? void 0 : _a.name) {
								interceptor(type, next);
							} else {
								next();
							}
						});
					};
					// @ts-ignore
					default_1.prototype.get = function (name) {
						// @ts-ignore
						return this.__pluginContexts.find(function (pluginContext) {
							return name === pluginContext.name;
						});
					};
					// @ts-ignore
					default_1.prototype.set = function (newOptions) {
						this.__options = __assign(__assign({}, this.__options), newOptions);
					};
					// @ts-ignore
					default_1.prototype.emit2 = function (type, payload, pluginContext) {
						var _this = this;
						this.c = pluginContext;
						// @ts-ignore
						this.emit(
							type,
							__assign(__assign({}, payload), { type: type }),
							function () {
								// @ts-ignore
								_this.emit(
									TYPE_AT_AFTER,
									__assign(__assign({}, payload), { name: type, __type: type })
								);
							}
						);
					};
					default_1.prototype.destroy = function () {
						// @ts-ignore
						this.emit(TYPE_UNBIND);
						_super.prototype.destroy.call(this);
					};
					return default_1;
				})(AnyEvent);

				// @ts-ignore
				var getVLength = function (v) {
					return Math.sqrt(v.x * v.x + v.y * v.y);
				};

				// @ts-ignore
				var getDotProduct = function (v1, v2) {
					return v1.x * v2.x + v1.y * v2.y;
				};

				// @ts-ignore
				var getRadian = function (v1, v2) {
					var mr = getVLength(v1) * getVLength(v2);
					if (mr === 0) return 0;
					var r = getDotProduct(v1, v2) / mr;
					if (r > 1) r = 1;
					return Math.acos(r);
				};

				// @ts-ignore
				var getCross = function (v1, v2) {
					return v1.x * v2.y - v2.x * v1.y;
				};

				// @ts-ignore
				var radianToAngle = function (radian) {
					return (radian / Math.PI) * 180;
				};

				// @ts-ignore
				var getAngle = function (v1, v2) {
					var angle = getRadian(v1, v2);
					if (getCross(v1, v2) > 0) {
						angle *= -1;
					}
					return radianToAngle(angle);
				};

				// @ts-ignore
				var getDirection = function (x, y) {
					if (0 === x && 0 === y) {
						return;
					}
					if (Math.abs(x) >= Math.abs(y)) {
						return 0 < x ? DIRECTION_RIGHT : DIRECTION_LEFT;
					} else {
						return 0 < y ? DIRECTION_DOWN : DIRECTION_UP;
					}
				};

				function ComputeAngle() {
					var angle = 0;
					var deltaAngle = 0;
					// @ts-ignore
					// @ts-ignore
					return function (input, computed) {
						var prevVecotr = computed.prevVecotr,
							startVecotr = computed.startVecotr,
							activeVecotr = computed.activeVecotr;
						if (activeVecotr) {
							deltaAngle = Math.round(getAngle(activeVecotr, prevVecotr));
							angle = Math.round(getAngle(activeVecotr, startVecotr));
						}
						return { angle: angle, deltaAngle: deltaAngle };
					};
				}

				function ComputeDeltaXY() {
					// @ts-ignore
					return function (input) {
						var prevInput = input.prevInput;
						var deltaX = 0;
						var deltaY = 0;
						var deltaXYAngle = 0;
						if (void 0 !== prevInput) {
							deltaX = input.x - prevInput.x;
							deltaY = input.y - prevInput.y;
							if (0 !== deltaX || 0 !== deltaY) {
								var deltaXY = Math.sqrt(
									Math.pow(deltaX, 2) + Math.pow(deltaY, 2)
								);
								deltaXYAngle = Math.round(
									radianToAngle(Math.acos(Math.abs(deltaX) / deltaXY))
								);
							}
						}
						return {
							deltaX: deltaX,
							deltaY: deltaY,
							deltaXYAngle: deltaXYAngle,
						};
					};
				}

				function ComputeDistance() {
					var displacementX = 0;
					var displacementY = 0;
					var distanceX = 0;
					var distanceY = 0;
					var distance = 0;
					// @ts-ignore
					var overallDirection;
					// @ts-ignore
					return function (input) {
						var phase = input.phase,
							startInput = input.startInput;
						if (TYPE_START === phase) {
							displacementX = 0;
							displacementY = 0;
							distanceX = 0;
							distanceY = 0;
							distance = 0;
						} else if (TYPE_MOVE === phase) {
							displacementX = Math.round(
								input.points[0][CLIENT_X] - startInput.points[0][CLIENT_X]
							);
							displacementY = Math.round(
								input.points[0][CLIENT_Y] - startInput.points[0][CLIENT_Y]
							);
							distanceX = Math.abs(displacementX);
							distanceY = Math.abs(displacementY);
							distance = Math.round(getVLength({ x: distanceX, y: distanceY }));
							overallDirection = getDirection(displacementX, displacementY);
						}
						return {
							displacementX: displacementX,
							displacementY: displacementY,
							distanceX: distanceX,
							distanceY: distanceY,
							distance: distance,
							// @ts-ignore
							overallDirection: overallDirection,
						};
					};
				}

				function ComputeScale() {
					var scale = 1;
					// @ts-ignore
					// @ts-ignore
					return function (input, computed) {
						var deltaScale = 1;
						var prevVecotr = computed.prevVecotr,
							startVecotr = computed.startVecotr,
							activeVecotr = computed.activeVecotr;
						if (activeVecotr) {
							deltaScale = round2(
								getVLength(activeVecotr) / getVLength(prevVecotr)
							);
							scale = round2(
								getVLength(activeVecotr) / getVLength(startVecotr)
							);
						}
						return { scale: scale, deltaScale: deltaScale };
					};
				}

				function ComputeVAndDir() {
					var velocityX = 0;
					var velocityY = 0;
					var speedX = 0;
					var speedY = 0;
					// @ts-ignore
					var direction;
					// @ts-ignore
					var lastValidInput;
					// @ts-ignore
					return function (input) {
						if (void 0 !== input) {
							// @ts-ignore
							lastValidInput = lastValidInput || input.startInput;
							var deltaTime = input.timestamp - lastValidInput.timestamp;
							if (COMPUTE_INTERVAL < deltaTime) {
								var deltaX = input.x - lastValidInput.x;
								var deltaY = input.y - lastValidInput.y;
								speedX = Math.round((deltaX / deltaTime) * 100) / 100;
								speedY = Math.round((deltaY / deltaTime) * 100) / 100;
								velocityX = Math.abs(speedX);
								velocityY = Math.abs(speedY);
								direction = getDirection(deltaX, deltaY);
								lastValidInput = input;
							}
						}
						return {
							velocityX: velocityX,
							velocityY: velocityY,
							speedX: speedX,
							speedY: speedY,
							// @ts-ignore
							direction: direction,
						};
					};
				}

				function ComputeMaxLength() {
					var maxPointLength = 0;
					// @ts-ignore
					return function (input) {
						var phase = input.phase;
						if (TYPE_START === phase) {
							maxPointLength = input.pointLength;
						}
						return { maxPointLength: maxPointLength };
					};
				}

				// @ts-ignore
				function computeVector(input) {
					return {
						x: input.points[1][CLIENT_X] - input.points[0][CLIENT_X],
						y: input.points[1][CLIENT_Y] - input.points[0][CLIENT_Y],
					};
				}
				function ComputeVectorForMutli() {
					// @ts-ignore
					var startVecotr;
					// @ts-ignore
					var prevVecotr;
					var activeVecotr;
					// @ts-ignore
					return function (input) {
						var prevInput = input.prevInput,
							startMultiInput = input.startMultiInput;
						if (
							void 0 !== startMultiInput &&
							void 0 !== prevInput &&
							input.id !== startMultiInput.id &&
							1 < prevInput.pointLength &&
							1 < input.pointLength
						) {
							startVecotr = computeVector(startMultiInput);
							prevVecotr = computeVector(prevInput);
							activeVecotr = computeVector(input);
						} else {
							activeVecotr = void 0;
						}
						return {
							// @ts-ignore
							startVecotr: startVecotr,
							// @ts-ignore
							prevVecotr: prevVecotr,
							activeVecotr: activeVecotr,
						};
					};
				}

				var DEFAULT_OPTIONS$5 = {
					name: "tap",
					pointLength: 1,
					tapTimes: 1,
					waitNextTapTime: 300,
					maxDistance: 2,
					maxDistanceFromPrevTap: 9,
					maxPressTime: 250,
				};
				// @ts-ignore
				function tap(at, options) {
					var context = createPluginContext(DEFAULT_OPTIONS$5, options);
					var tapCount = 0;
					// @ts-ignore
					var prevTapPoint;
					// @ts-ignore
					var prevTapTime;
					// @ts-ignore
					var countDownToFailTimer;
					function reset() {
						tapCount = 0;
						prevTapPoint = void 0;
						prevTapTime = void 0;
					}
					function countDownToFail() {
						countDownToFailTimer = setTimeout(function () {
							context.state = 2;
							reset();
						}, context.waitNextTapTime);
					}
					// @ts-ignore
					function isValidDistanceFromPrevTap(center, options) {
						// @ts-ignore
						if (void 0 !== prevTapPoint) {
							var distanceFromPreviousTap = getVLength({
								// @ts-ignore
								x: center.x - prevTapPoint.x,
								// @ts-ignore
								y: center.y - prevTapPoint.y,
							});
							prevTapPoint = center;
							return options.maxDistanceFromPrevTap >= distanceFromPreviousTap;
						} else {
							prevTapPoint = center;
							return true;
						}
					}
					// @ts-ignore
					function isValidInterval(waitNextTapTime) {
						var now = performance.now();
						// @ts-ignore
						if (void 0 === prevTapTime) {
							prevTapTime = now;
							return true;
						} else {
							// @ts-ignore
							var interval = now - prevTapTime;
							prevTapTime = now;
							return interval < waitNextTapTime;
						}
					}
					// @ts-ignore
					at.compute([ComputeDistance, ComputeMaxLength], function (computed) {
						if (isDisabled(context)) return;
						var phase = computed.phase,
							x = computed.x,
							y = computed.y;
						if (TYPE_END !== phase) return;
						context.state = 0;
						if (test()) {
							// @ts-ignore
							clearTimeout(countDownToFailTimer);
							if (
								isValidDistanceFromPrevTap({ x: x, y: y }, context) &&
								isValidInterval(context.waitNextTapTime)
							) {
								tapCount++;
							} else {
								tapCount = 1;
							}
							if (0 === tapCount % context.tapTimes) {
								context.state = 1;
								at.emit2(context.name, computed, context);
								reset();
							} else {
								countDownToFail();
							}
						} else {
							reset();
							context.state = 2;
						}
						function test() {
							var startInput = computed.startInput,
								pointLength = computed.pointLength,
								timestamp = computed.timestamp;
							var deltaTime = timestamp - startInput.timestamp;
							var distance = computed.distance,
								maxPointLength = computed.maxPointLength;
							return (
								maxPointLength === context.pointLength &&
								0 === pointLength &&
								context.maxDistance >= distance &&
								context.maxPressTime > deltaTime
							);
						}
					});
					return context;
				}

				var DEFAULT_OPTIONS$4 = { name: "pan", threshold: 10, pointLength: 1 };
				// @ts-ignore
				function pan(at, options) {
					var context = createPluginContext(DEFAULT_OPTIONS$4, options);
					at.compute(
						[ComputeVAndDir, ComputeDistance, ComputeDeltaXY],
						// @ts-ignore
						function (computed) {
							resetState(context);
							if (isDisabled(context)) return;
							var isValid = test();
							context.state = flow(isValid, context.state, computed.phase);
							if (isValid || isMoveOrEndOrCancel(context.state)) {
								var name_1 = context.name;
								at.emit2(name_1, computed, context);
								at.emit2(
									name_1 + getStatusName(context.state),
									computed,
									context
								);
								if (
									![TYPE_END, TYPE_CANCEL].includes(computed.phase) &&
									computed.direction
								) {
									at.emit2(name_1 + computed.direction, computed, context);
								}
							}
							function test() {
								var pointLength = computed.pointLength,
									distance = computed.distance;
								return (
									context.pointLength === pointLength &&
									context.threshold <= distance
								);
							}
						}
					);
					return context;
				}

				var DEFAULT_OPTIONS$3 = {
					name: "swipe",
					threshold: 10,
					velocity: 0.3,
					pointLength: 1,
				};
				// @ts-ignore
				function swipe(at, options) {
					var context = createPluginContext(DEFAULT_OPTIONS$3, options);
					at.compute(
						[ComputeDistance, ComputeVAndDir, ComputeMaxLength],
						// @ts-ignore
						function (computed) {
							context.state = 0;
							if (context.disabled) return;
							if (test()) {
								var name_1 = context.name;
								context.state = 1;
								at.emit2(name_1, computed, context);
								at.emit2(name_1 + computed.direction, computed, context);
							}
							function test() {
								if (TYPE_END !== computed.phase) return false;
								var velocityX = computed.velocityX,
									velocityY = computed.velocityY,
									distance = computed.distance,
									maxPointLength = computed.maxPointLength;
								return (
									maxPointLength === context.pointLength &&
									0 === computed.points.length &&
									context.threshold < distance &&
									context.velocity < Math.max(velocityX, velocityY)
								);
							}
						}
					);
					return context;
				}

				var DEFAULT_OPTIONS$2 = {
					name: "press",
					pointLength: 1,
					maxDistance: 9,
					minPressTime: 251,
				};
				// @ts-ignore
				function press(at, options) {
					var context = createPluginContext(DEFAULT_OPTIONS$2, options);
					var timeoutId = 0;
					// @ts-ignore
					at.compute([ComputeDistance], function (computed) {
						if (isDisabled(context)) return;
						var phase = computed.phase,
							startInput = computed.startInput,
							pointLength = computed.pointLength;
						if (TYPE_START === phase && context.pointLength === pointLength) {
							resetState(context);
							clearTimeout(timeoutId);
							timeoutId = setTimeout(function () {
								context.state = 1;
								at.emit2(context.name, computed, context);
							}, context.minPressTime);
						} else if (TYPE_END === phase && 1 === context.state) {
							at.emit2(
								"".concat(context.name).concat(DIRECTION_UP),
								computed,
								context
							);
						} else if (1 !== context.state) {
							var deltaTime = computed.timestamp - startInput.timestamp;
							if (
								!test() ||
								(context.minPressTime > deltaTime &&
									[TYPE_END, TYPE_CANCEL].includes(phase))
							) {
								clearTimeout(timeoutId);
								context.state = 2;
							}
						}
						function test() {
							var distance = computed.distance;
							return distance && context.maxDistance > distance;
						}
					});
					return context;
				}

				var DEFAULT_OPTIONS$1 = {
					name: "pinch",
					threshold: 0,
					pointLength: 2,
				};
				// @ts-ignore
				function pinch(at, options) {
					var context = createPluginContext(DEFAULT_OPTIONS$1, options);
					at.compute(
						[ComputeVectorForMutli, ComputeScale],
						// @ts-ignore
						function (computed) {
							resetState(context);
							if (isDisabled(context)) return;
							var isValid = test();
							context.state = flow(isValid, context.state, computed.phase);
							var name = context.name;
							if (isValid || isMoveOrEndOrCancel(context.state)) {
								at.emit2(name, computed, context);
								var deltaScale = computed.deltaScale;
								if (1 !== deltaScale) {
									at.emit2(
										name + (1 < deltaScale ? "in" : "out"),
										computed,
										context
									);
								}
							}
							var stateName = getStatusName(context.state);
							if (stateName) {
								at.emit2(name + stateName, computed, context);
							}
							function test() {
								var pointLength = computed.pointLength,
									scale = computed.scale;
								computed.deltaScale;
								computed.phase;
								return (
									context.pointLength === pointLength &&
									context.threshold < Math.abs(scale - 1)
								);
							}
						}
					);
					return context;
				}

				var DEFAULT_OPTIONS = {
					name: "rotate",
					threshold: 0,
					pointLength: 2,
				};
				// @ts-ignore
				function rotate(at, options) {
					var context = createPluginContext(DEFAULT_OPTIONS, options);
					at.compute(
						[ComputeVectorForMutli, ComputeAngle],
						// @ts-ignore
						function (computed) {
							if (isDisabled(context)) return;
							resetState(context);
							var isValid = test();
							context.state = flow(isValid, context.state, computed.phase);
							var name = context.name;
							if (isValid || isMoveOrEndOrCancel(context.state)) {
								at.emit2(name, computed, context);
							}
							var stateName = getStatusName(context.state);
							if (stateName) {
								at.emit2(name + stateName, computed, context);
							}
							function test() {
								var pointLength = computed.pointLength,
									angle = computed.angle;
								return (
									context.pointLength === pointLength &&
									context.threshold < Math.abs(angle)
								);
							}
						}
					);
					return context;
				}

				// @ts-ignore
				function doubletap(at) {
					at.use(tap, { name: "doubletap", tapTimes: 2 });
					var doubleTapContext = at.get("doubletap");
					// @ts-ignore
					var timeID;
					// @ts-ignore
					at.beforeEach(function (type, next) {
						if ("tap" === type) {
							// @ts-ignore
							clearTimeout(timeID);
							timeID = setTimeout(function () {
								if ([0, 2].includes(doubleTapContext.state)) {
									next();
								}
							}, 300);
						} else {
							next();
						}
					});
					return doubleTapContext;
				}

				var default_1 = (function (_super) {
					__extends(default_1, _super);
					// @ts-ignore
					function default_1(el, options) {
						// @ts-ignore
						var _this = _super.call(this, el, options) || this;
						_this.use(tap);
						_this.use(pan);
						_this.use(swipe);
						_this.use(press);
						_this.use(pinch);
						_this.use(rotate);
						return _this;
					}
					default_1.STATE_POSSIBLE = 0;
					default_1.STATE_START = 4;
					default_1.STATE_MOVE = 5;
					default_1.STATE_END = 1;
					default_1.STATE_CANCELLED = 3;
					default_1.STATE_FAILED = 2;
					default_1.STATE_RECOGNIZED = 1;
					default_1.tap = tap;
					default_1.pan = pan;
					default_1.swipe = swipe;
					default_1.press = press;
					default_1.rotate = rotate;
					default_1.pinch = pinch;
					default_1.doubletap = doubletap;
					return default_1;
				})(default_1$1);

				return default_1;
			});
			//# sourceMappingURL=any-touch.umd.js.map
			return anyTouch;
		},
		/**
		 * 排序数组
		 * @param {(value: any)=>any} getBeforeValueFun
		 * @param {(value: any)=>any} getAfterValueFun
		 * @param {boolean} sortByDesc 排序是否降序，默认降序
		 * @returns
		 */
		sortElementListByProperty(
			getBeforeValueFun,
			getAfterValueFun,
			sortByDesc = true
		) {
			if (typeof sortByDesc !== "boolean") {
				throw "参数 sortByDesc 必须为boolean类型";
			}
			if (getBeforeValueFun == null || getAfterValueFun == null) {
				throw "获取前面的值或后面的值的方法不能为空";
			}
			// @ts-ignore
			return function (after_obj, before_obj) {
				var beforeValue = getBeforeValueFun(before_obj); /*  前 */
				var afterValue = getAfterValueFun(after_obj); /* 后 */
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
		},
		/**
		 * 获取格式化后的时间
		 * @param {string|number} [text= new Date()]	需要格式化的字符串或者时间戳
		 * @param {string} [formatType = "yyyy-MM-dd HH:mm:ss"]	格式化成的显示类型
		 * + yyyy 年
		 * + MM 月
		 * + dd 天
		 * + HH 时 (24小时制)
		 * + hh 时 (12小时制)
		 * + mm 分
		 * + ss 秒
		 * @returns {string}	返回格式化后的时间
		 * @example
		 * Utils.formatTime("2022-08-21 23:59:00","HH:mm:ss");
		 * > '23:59:00'
		 * @example
		 * Utils.formatTime(1899187424988,"HH:mm:ss");
		 * > '15:10:13'
		 * @example
		 * Utils.formatTime()
		 * > '2023-1-1 00:00:00'
		 **/
		formatTime: function (
			// @ts-ignore
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
				// @ts-ignore
				formatType = formatType.replace(replaecRegexp, timeRegexp[key]);
			});
			return formatType;
		},
		/**
		 * 格式化byte为KB、MB、GB、TB、PB、EB、ZB、YB、BB、NB、DB
		 * @param {number|string} byteSize 字节
		 * @param {boolean} [addType=true]
		 * + true (默认) 添加单位
		 * + false 不添加单位
		 * @returns {string|number}
		 * + {string} 当addType为true时，且保留小数点末尾2位
		 * + {number} 当addType为false时，且保留小数点末尾2位
		 * @example
		 * Utils.formatByteToSize("812304");
		 * > '793.27KB'
		 * @example
		 * Utils.formatByteToSize("812304",false);
		 * > 793.27
		 **/
		formatByteToSize: function (byteSize, addType = true) {
			// @ts-ignore
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
				// @ts-ignore
				result = byteSize / sizeData[key];
				resultType = key;
				if (sizeData.KB >= result) {
					break;
				}
			}
			// @ts-ignore
			result = result.toFixed(2);
			// @ts-ignore
			result = addType ? result + resultType.toString() : parseFloat(result);
			return result;
		},
		/**
		 * 判断元素是否已显示或已连接
		 * @param {HTMLElement} element
		 * @returns {boolean}
		 */
		isShow(element) {
			return Boolean(element.getClientRects().length);
		},
		/**
		 * 用于显示元素并获取它的高度宽度等其它属性
		 * @param {HTMLElement} element
		 * @returns {{recovery: ()=>void}} - 恢复
		 */
		showElement(element) {
			let oldStyleAttribute = element.getAttribute("style");
			element.setAttribute(
				"style",
				"visibility: !important;display:block !important;"
			);
			return {
				recovery() {
					if (oldStyleAttribute) {
						element.setAttribute("style", oldStyleAttribute);
					} else {
						element.removeAttribute("style");
					}
				},
			};
		},
		/**
		 * 获取元素上的Float格式的属性px
		 * @param {HTMLElement|CSSStyleDeclaration} element
		 * @param {string} styleName style名
		 * @return {number}
		 */
		getStyleValue(element, styleName) {
			let view = null;
			let styles = null;
			if (element instanceof CSSStyleDeclaration) {
				/* 直接就获取了style属性 */
				styles = element;
			} else {
				view = element.ownerDocument.defaultView;
				if (!view || !view.opener) {
					view = window;
				}
				styles = view.getComputedStyle(element);
			}
			// @ts-ignore
			let value = parseFloat(styles[styleName]);
			if (isNaN(value)) {
				return 0;
			} else {
				return value;
			}
		},
		/**
		 * 判断是否是window，例如window、self、globalThis
		 * @param {any} target
		 * @returns {boolean}
		 */
		isWin(target) {
			// @ts-ignore
			if (!typeof target === "object") {
				return false;
			}
			if (target instanceof Node) {
				return false;
			}
			if (target === globalThis) {
				return true;
			}
			if (target === window) {
				return true;
			}
			if (target === self) {
				return true;
			}
			if (target?.Math?.toString() !== "[object Math]") {
				return false;
			}
			return true;
		},
		/**
		 * 阻止默认事件触发
		 * @param {Event} event
		 */
		preventEvent(event) {
			/* 阻止事件的默认行为发生。例如，当点击一个链接时，浏览器会默认打开链接的URL */
			event?.preventDefault();
			/* 停止事件的传播，阻止它继续向更上层的元素冒泡，事件将不会再传播给其他的元素 */
			event?.stopPropagation();
			/* 阻止事件传播，并且还能阻止元素上的其他事件处理程序被触发 */
			event?.stopImmediatePropagation();
		},
	};

	/**
	 * 浮点数工具类
	 */
	const MathFloatUtils = {
		/**
		 * 判断数字是否是浮点数
		 * @param {number} num
		 * @returns
		 */
		isFloat(num) {
			return Number(num) === num && num % 1 !== 0;
		},
		/**
		 * 浮点数加法
		 * @param {number} number1
		 * @param {number} number2
		 */
		add(number1, number2) {
			let number1length, number2length, powValue;
			try {
				number1length = number1.toString().split(".")[1].length;
			} catch (error) {
				number1length = 0;
			}
			try {
				number2length = number2.toString().split(".")[1].length;
			} catch (error) {
				number2length = 0;
			}
			powValue = Math.pow(10, Math.max(number1length, number2length));
			return Math.round(number1 * powValue + number2 * powValue) / powValue;
		},
		/**
		 * 减法
		 * @param {number} number1
		 * @param {number} number2
		 * @returns
		 */
		sub(number1, number2) {
			let number1length, number2length, powValue;
			try {
				number1length = number1.toString().split(".")[1].length;
			} catch (error) {
				number1length = 0;
			}
			try {
				number2length = number2.toString().split(".")[1].length;
			} catch (error) {
				number2length = 0;
			}
			powValue = Math.pow(10, Math.max(number1length, number2length));
			let fixedValue =
				number1length >= number2length ? number1length : number2length;
			return (
				Math.round(number1 * powValue - number2 * powValue) / powValue
			).toFixed(fixedValue);
		},
		/**
		 * 除法
		 * @param {number} number1
		 * @param {number} number2
		 */
		division(number1, number2) {
			let number1length,
				number2length,
				number1ReplaceValue,
				number2ReplaceValue;
			try {
				number1length = number1.toString().split(".")[1].length;
			} catch (error) {
				number1length = 0;
			}
			try {
				number2length = number2.toString().split(".")[1].length;
			} catch (error) {
				number2length = 0;
			}
			number1ReplaceValue = Number(number1.toString().replace(".", ""));
			number2ReplaceValue = Number(number2.toString().replace(".", ""));
			return (
				(number1ReplaceValue / number2ReplaceValue) *
				Math.pow(10, number2length - number1length)
			);
		},
	};

	/** 元素工具类 */
	const PopsDOMUtils = {
		/**
		 * 获取animationend的在各个浏览器的兼容名
		 */
		getAnimationEndNameList() {
			return [
				"webkitAnimationEnd",
				"mozAnimationEnd",
				"MSAnimationEnd",
				"oanimationend",
				"animationend",
			];
		},
		/**
		 * 获取 transitionend 的在各个浏览器的兼容名
		 */
		getTransitionEndNameList() {
			return [
				"webkitTransitionEnd",
				"mozTransitionEnd",
				"MSTransitionEnd",
				"otransitionend",
				"transitionend",
			];
		},
		/**
		 * 绑定事件
		 * @param {null|Element|EventTarget|Node|HTMLElement|string|NodeList|HTMLElement[]|Window|typeof globalThis} element 需要绑定的元素|元素数组|window
		 * @param {import("../DOMUtils/dist/src/DOMUtilsEvent").DOMUtils_EventType|import("../DOMUtils/dist/src/DOMUtilsEvent").DOMUtils_EventType[]|string|string[]} eventType 需要监听的事件
		 * @param {string|undefined|null} selector 子元素选择器
		 * @param {((event: any)=>void)|undefined} callback 绑定事件触发的回调函数
		 * @param {boolean|AddEventListenerOptions|undefined} [option]
		 * + capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
		 * + once 表示事件是否只触发一次。默认为false
		 * + passive 表示事件监听器是否不会调用preventDefault()。默认为false
		 */
		on(element, eventType, selector, callback, option) {
			/**
			 * 获取option配置
			 * @param {any[]} args
			 * @param {number} startIndex
			 * @param {AddEventListenerOptions} option
			 * @returns {AddEventListenerOptions}
			 */
			function getOption(args, startIndex, option) {
				if (typeof args[startIndex] === "boolean") {
					option.capture = args[startIndex];
					if (typeof args[startIndex + 1] === "boolean") {
						option.once = args[startIndex + 1];
					}
					if (typeof args[startIndex + 2] === "boolean") {
						option.passive = args[startIndex + 2];
					}
				} else if (
					typeof args[startIndex] === "object" &&
					("capture" in args[startIndex] ||
						"once" in args[startIndex] ||
						"passive" in args[startIndex])
				) {
					option.capture = args[startIndex].capture;
					option.once = args[startIndex].once;
					option.passive = args[startIndex].passive;
				}
				return option;
			}

			let args = arguments;
			if (typeof element === "string") {
				element = document.querySelectorAll(element);
			}
			if (element == null) {
				return;
			}
			/**
			 * @type {HTMLElement[]}
			 */
			let elementList = [];
			if (element instanceof NodeList || Array.isArray(element)) {
				// @ts-ignore
				elementList = [...element];
			} else {
				// @ts-ignore
				elementList.push(element);
			}
			/**
			 * @type {string[]}
			 */
			let eventTypeList = [];
			if (Array.isArray(eventType)) {
				eventTypeList = eventTypeList.concat(eventType);
			} else if (typeof eventType === "string") {
				eventTypeList = eventTypeList.concat(eventType.split(" "));
			}
			/**
			 * @type {?string}
			 */
			// @ts-ignore
			let _selector_ = selector;
			/**
			 * @type {(event:Event)=>{}}
			 */
			// @ts-ignore
			let _callback_ = callback;
			/**
			 * @type {AddEventListenerOptions}
			 */
			let _option_ = {
				capture: false,
				once: false,
				passive: false,
			};
			if (typeof selector === "function") {
				/* 这是为没有selector的情况 */
				// @ts-ignore
				_selector_ = void 0;
				_callback_ = selector;
				// @ts-ignore
				_option_ = getOption(args, 3, _option_);
			} else {
				/* 这是存在selector的情况 */
				// @ts-ignore
				_option_ = getOption(args, 4, _option_);
			}
			/**
			 * 如果是once，那么删除该监听和元素上的事件和监听
			 */
			function checkOptionOnceToRemoveEventListener() {
				if (_option_.once) {
					PopsDOMUtils.off(element, eventType, selector, callback, option);
				}
			}
			elementList.forEach((elementItem) => {
				// @ts-ignore
				let ownCallBack = function (event) {
					let target = event.target;
					if (_selector_) {
						/* 存在自定义子元素选择器 */
						let totalParent = PopsUtils.isWin(elementItem)
							? document.documentElement
							: elementItem;
						if (target.matches(_selector_)) {
							/* 当前目标可以被selector所匹配到 */
							_callback_.call(target, event);
							checkOptionOnceToRemoveEventListener();
							return;
						} else if (
							target.closest(_selector_) &&
							totalParent.contains(target.closest(_selector_))
						) {
							/* 在上层与主元素之间寻找可以被selector所匹配到的 */
							let closestElement = target.closest(_selector_);
							/* event的target值不能直接修改 */
							OriginPrototype.Object.defineProperty(event, "target", {
								get() {
									return closestElement;
								},
							});
							_callback_.call(closestElement, event);
							checkOptionOnceToRemoveEventListener();
							return;
						}
					} else {
						_callback_.call(elementItem, event);
						checkOptionOnceToRemoveEventListener();
					}
				};

				/* 遍历事件名设置元素事件 */
				eventTypeList.forEach((eventName) => {
					elementItem.addEventListener(eventName, ownCallBack, _option_);

					// @ts-ignore
					if (_callback_ && _callback_.delegate) {
						// @ts-ignore
						elementItem.setAttribute("data-delegate", _selector_);
					}
					/* 获取对象上的事件 */
					// @ts-ignore
					let elementEvents = elementItem[PopsUtils.SymbolEvents] || {};
					/* 初始化对象上的xx事件 */
					elementEvents[eventName] = elementEvents[eventName] || [];
					elementEvents[eventName].push({
						selector: _selector_,
						option: _option_,
						callback: ownCallBack,
						originCallBack: _callback_,
					});
					/* 覆盖事件 */
					// @ts-ignore
					elementItem[PopsUtils.SymbolEvents] = elementEvents;
				});
			});
		},
		/**
		 * 取消绑定事件
		 * @param {null|Element|EventTarget|Node|HTMLElement|string|NodeList|HTMLElement[]|Window|typeof globalThis} element 需要取消绑定的元素|元素数组
		 * @param {import("../DOMUtils/dist/src/DOMUtilsEvent").DOMUtils_EventType|import("../DOMUtils/dist/src/DOMUtilsEvent").DOMUtils_EventType[]|string|string[]} eventType 需要取消监听的事件
		 * @param {string|undefined|null} selector 子元素选择器
		 * @param {((event: any)=>void)|undefined} callback 通过DOMUtils.on绑定的事件函数
		 * @param {EventListenerOptions|boolean|undefined} [option]
		 * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
		 */
		// @ts-ignore
		off(element, eventType, selector, callback, option) {
			/**
			 * 获取option配置
			 * @param {any[]} args
			 * @param {number} startIndex
			 * @param {EventListenerOptions} option
			 * @returns {EventListenerOptions}
			 */
			function getOption(args, startIndex, option) {
				if (typeof args[startIndex] === "boolean") {
					option.capture = args[startIndex];
				} else if (
					typeof args[startIndex] === "object" &&
					"capture" in args[startIndex]
				) {
					option.capture = args[startIndex].capture;
				}
				return option;
			}

			let args = arguments;
			if (typeof element === "string") {
				element = document.querySelectorAll(element);
			}
			if (element == null) {
				return;
			}
			/**
			 * @type {HTMLElement[]}
			 */
			let elementList = [];
			if (element instanceof NodeList || Array.isArray(element)) {
				// @ts-ignore
				elementList = [...element];
			} else {
				// @ts-ignore
				elementList.push(element);
			}
			/**
			 * @type {string[]}
			 */
			let eventTypeList = [];
			if (Array.isArray(eventType)) {
				eventTypeList = eventTypeList.concat(eventType);
			} else if (typeof eventType === "string") {
				eventTypeList = eventTypeList.concat(eventType.split(" "));
			}
			/**
			 * @type {?string}
			 */
			// @ts-ignore
			let _selector_ = selector;
			/**
			 * @type {(event:Event)=>{}}
			 */
			// @ts-ignore
			let _callback_ = callback;

			/**
			 * @type {EventListenerOptions}
			 */
			let _option_ = {
				capture: false,
			};
			if (typeof selector === "function") {
				/* 这是为没有selector的情况 */
				// @ts-ignore
				_selector_ = void 0;
				_callback_ = selector;
				// @ts-ignore
				_option_ = getOption(args, 3, _option_);
			} else {
				// @ts-ignore
				_option_ = getOption(args, 4, _option_);
			}
			elementList.forEach((elementItem) => {
				/* 获取对象上的事件 */
				// @ts-ignore
				let elementEvents = elementItem[PopsUtils.SymbolEvents] || {};
				eventTypeList.forEach((eventName) => {
					/**
					 * @type {import("../DOMUtils/dist/src/DOMUtilsEvent").DOMUtilsEventListenerOptionsAttribute[]}
					 */
					let handlers = elementEvents[eventName] || [];
					// @ts-ignore
					if (typeof filter === "function") {
						// @ts-ignore
						handlers = handlers.filter(filter);
					}
					for (let index = 0; index < handlers.length; index++) {
						let handler = handlers[index];
						let flag = !1;
						if (!_selector_ || handler.selector === _selector_) {
							/* selector不为空，进行selector判断 */
							flag = !0;
						}
						if (
							!_callback_ ||
							// @ts-ignore
							handler.callback === _callback_ ||
							// @ts-ignore
							handler.originCallBack === _callback_
						) {
							/* callback不为空，进行callback判断 */
							flag = !0;
						}

						if (flag) {
							elementItem.removeEventListener(
								eventName,
								handler.callback,
								_option_
							);
							handlers.splice(index--, 1);
						}
					}
					if (handlers.length === 0) {
						/* 如果没有任意的handler，那么删除该属性 */
						// @ts-ignore
						delete elementEvents[eventType];
					}
				});
				// @ts-ignore
				elementItem[PopsUtils.SymbolEvents] = elementEvents;
			});
		},
		/**
		 * 主动触发事件
		 * @param {HTMLElement|string|NodeList|HTMLElement[]|Window} element 需要触发的元素|元素数组|window
		 * @param {import("../DOMUtils/dist/src/DOMUtilsEvent").DOMUtils_EventType|import("../DOMUtils/dist/src/DOMUtilsEvent").DOMUtils_EventType[]|string|string[]} eventType 需要触发的事件
		 * @param {object|undefined} details 赋予触发的Event的额外属性
		 * @param {boolean} [useDispatchToTriggerEvent=true] 是否使用dispatchEvent来触发事件,默认true
		 */
		trigger(element, eventType, details, useDispatchToTriggerEvent = true) {
			if (typeof element === "string") {
				// @ts-ignore
				element = document.querySelector(element);
			}
			if (element == void 0) {
				return;
			}
			let elementList = [];
			if (element instanceof NodeList || Array.isArray(element)) {
				elementList = [...element];
			} else {
				elementList = [element];
			}
			// @ts-ignore
			let eventTypeList = [];
			if (Array.isArray(eventType)) {
				eventTypeList = eventType;
			} else if (typeof eventType === "string") {
				eventTypeList = eventType.split(" ");
			}
			elementList.forEach((elementItem) => {
				/* 获取对象上的事件 */
				// @ts-ignore
				let events = elementItem[PopsUtils.SymbolEvents] || {};
				// @ts-ignore
				eventTypeList.forEach((_eventType_) => {
					let event = new Event(_eventType_);
					if (details) {
						Object.keys(details).forEach((keyName) => {
							// @ts-ignore
							event[keyName] = details[keyName];
						});
					}
					if (useDispatchToTriggerEvent == false && _eventType_ in events) {
						// @ts-ignore
						events[_eventType_].forEach((eventsItem) => {
							eventsItem.callback(event);
						});
					} else {
						// @ts-ignore
						elementItem.dispatchEvent(event);
					}
				});
			});
		},
		/**
		 * 实现jQuery中的$().offset();
		 * @param {HTMLElement} element
		 * @returns
		 */
		offset(element) {
			let rect = element.getBoundingClientRect();
			let win = element.ownerDocument.defaultView;
			let resultRect = new DOMRect(
				parseFloat((rect.left + (win?.pageXOffset || 0)).toString()),
				parseFloat((rect.top + (win?.pageYOffset || 0)).toString()),
				rect.width,
				rect.height
			);
			return resultRect;
		},
		/**
		 * 获取元素的宽度
		 * @param {HTMLElement|Document|Window|typeof globalThis} element - 要获取宽度的元素
		 * @param {boolean} [isShow=false] 是否已进行isShow，避免爆堆栈
		 * @returns {number} - 元素的宽度，单位为像素
		 */
		width(element, isShow = false) {
			if (PopsUtils.isWin(element)) {
				return window.document.documentElement.clientWidth;
			}
			if (typeof element === "string") {
				// @ts-ignore
				element = document.querySelector(element);
			}
			if (element == void 0) {
				// @ts-ignore
				return;
			}
			// @ts-ignore
			if (element.nodeType === 9) {
				/* 文档节点 */
				return Math.max(
					// @ts-ignore
					element.body.scrollWidth,
					// @ts-ignore
					element.documentElement.scrollWidth,
					// @ts-ignore
					element.body.offsetWidth,
					// @ts-ignore
					element.documentElement.offsetWidth,
					// @ts-ignore
					element.documentElement.clientWidth
				);
			}
			// @ts-ignore
			if (isShow || PopsUtils.isShow(element)) {
				/* 已显示 */
				/* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */

				/* 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width */
				// @ts-ignore
				if (parseFloat(PopsUtils.getStyleValue(element, "width")) > 0) {
					// @ts-ignore
					return parseFloat(PopsUtils.getStyleValue(element, "width"));
				}

				/* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetWidth来进行计算 */
				// @ts-ignore
				if (element.offsetWidth > 0) {
					let borderLeftWidth = PopsUtils.getStyleValue(
						// @ts-ignore
						element,
						"borderLeftWidth"
					);
					let borderRightWidth = PopsUtils.getStyleValue(
						// @ts-ignore
						element,
						"borderRightWidth"
					);
					// @ts-ignore
					let paddingLeft = PopsUtils.getStyleValue(element, "paddingLeft");
					// @ts-ignore
					let paddingRight = PopsUtils.getStyleValue(element, "paddingRight");
					let backHeight =
						// @ts-ignore
						parseFloat(element.offsetWidth) -
						// @ts-ignore
						parseFloat(borderLeftWidth) -
						// @ts-ignore
						parseFloat(borderRightWidth) -
						// @ts-ignore
						parseFloat(paddingLeft) -
						// @ts-ignore
						parseFloat(paddingRight);
					// @ts-ignore
					return parseFloat(backHeight);
				}
				return 0;
			} else {
				/* 未显示 */
				// @ts-ignore
				let { recovery } = PopsUtils.showElement(element);
				let width = PopsDOMUtils.width(element, true);
				recovery();
				return width;
			}
		},
		/**
		 * 获取元素的高度
		 * @param {HTMLElement|Document|Window|typeof globalThis} element - 要获取高度的元素
		 * @param {boolean} [isShow=false] 是否已进行isShow，避免爆堆栈
		 * @returns {number} - 元素的高度，单位为像素
		 */
		height(element, isShow = false) {
			if (PopsUtils.isWin(element)) {
				return window.document.documentElement.clientHeight;
			}
			if (typeof element === "string") {
				// @ts-ignore
				element = document.querySelector(element);
			}
			if (element == void 0) {
				// @ts-ignore
				return;
			}
			// @ts-ignore
			if (element.nodeType === 9) {
				/* 文档节点 */
				return Math.max(
					// @ts-ignore
					element.body.scrollHeight,
					// @ts-ignore
					element.documentElement.scrollHeight,
					// @ts-ignore
					element.body.offsetHeight,
					// @ts-ignore
					element.documentElement.offsetHeight,
					// @ts-ignore
					element.documentElement.clientHeight
				);
			}
			// @ts-ignore
			if (isShow || PopsUtils.isShow(element)) {
				/* 已显示 */
				/* 从style中获取对应的高度，因为可能使用了class定义了width !important */
				/* 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height */
				// @ts-ignore
				if (parseFloat(PopsUtils.getStyleValue(element, "height")) > 0) {
					// @ts-ignore
					return parseFloat(PopsUtils.getStyleValue(element, "height"));
				}

				/* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetHeight来进行计算 */
				// @ts-ignore
				if (element.offsetHeight > 0) {
					// @ts-ignore
					let borderTopWidth = PopsUtils.getStyleValue(
						// @ts-ignore
						element,
						"borderTopWidth"
					);
					// @ts-ignore
					let borderBottomWidth = PopsUtils.getStyleValue(
						// @ts-ignore
						element,
						"borderBottomWidth"
					);
					// @ts-ignore
					let paddingTop = PopsUtils.getStyleValue(element, "paddingTop");
					// @ts-ignore
					let paddingBottom = PopsUtils.getStyleValue(element, "paddingBottom");
					let backHeight =
						// @ts-ignore
						parseFloat(element.offsetHeight) -
						// @ts-ignore
						parseFloat(borderTopWidth) -
						// @ts-ignore
						parseFloat(borderBottomWidth) -
						// @ts-ignore
						parseFloat(paddingTop) -
						// @ts-ignore
						parseFloat(paddingBottom);
					// @ts-ignore
					return parseFloat(backHeight);
				}
				return 0;
			} else {
				/* 未显示 */
				// @ts-ignore
				let { recovery } = PopsUtils.showElement(element);
				let height = PopsDOMUtils.height(element, true);
				recovery();
				return height;
			}
		},
		/**
		 * 获取元素的外部宽度（包括边框和外边距）
		 * @param {HTMLElement} element - 要获取外部宽度的元素
		 * @param {boolean} [isShow=false] 是否已进行isShow，避免爆堆栈
		 * @returns {number} - 元素的外部宽度，单位为像素
		 */
		outerWidth(element, isShow = false) {
			if (PopsUtils.isWin(element)) {
				return window.innerWidth;
			}
			if (typeof element === "string") {
				// @ts-ignore
				element = document.querySelector(element);
			}
			if (element == void 0) {
				// @ts-ignore
				return;
			}
			if (isShow || PopsUtils.isShow(element)) {
				let style = getComputedStyle(element, null);
				let marginLeft = PopsUtils.getStyleValue(style, "marginLeft");
				let marginRight = PopsUtils.getStyleValue(style, "marginRight");
				return element.offsetWidth + marginLeft + marginRight;
			} else {
				let { recovery } = PopsUtils.showElement(element);
				let outerWidth = PopsDOMUtils.outerWidth(element, true);
				recovery();
				return outerWidth;
			}
		},
		/**
		 * 获取元素的外部高度（包括边框和外边距）
		 * @param {HTMLElement} element - 要获取外部高度的元素
		 * @param {boolean} [isShow=false] 是否已进行isShow，避免爆堆栈
		 * @returns {number} - 元素的外部高度，单位为像素
		 */
		outerHeight(element, isShow = false) {
			if (PopsUtils.isWin(element)) {
				return window.innerHeight;
			}
			if (typeof element === "string") {
				// @ts-ignore
				element = document.querySelector(element);
			}
			if (element == void 0) {
				// @ts-ignore
				return;
			}
			if (isShow || PopsUtils.isShow(element)) {
				let style = getComputedStyle(element, null);
				let marginTop = PopsUtils.getStyleValue(style, "marginTop");
				let marginBottom = PopsUtils.getStyleValue(style, "marginBottom");
				return element.offsetHeight + marginTop + marginBottom;
			} else {
				let { recovery } = PopsUtils.showElement(element);
				let outerHeight = PopsDOMUtils.outerHeight(element, true);
				recovery();
				return outerHeight;
			}
		},
		/**
		 * 添加className
		 * @param {HTMLElement} element 目标元素
		 * @param {string} className className属性
		 */
		addClassName(element, className) {
			if (typeof className !== "string") {
				return;
			}
			if (className.trim() === "") {
				return;
			}
			element.classList.add(className);
		},
		/**
		 * 删除className
		 * @param {HTMLElement} element 目标元素
		 * @param {string} className className属性
		 */
		removeClassName(element, className) {
			if (typeof className !== "string") {
				return;
			}
			if (className.trim() === "") {
				return;
			}
			element.classList.remove(className);
		},
		/**
		 * 判断元素是否包含某个className
		 * @param {HTMLElement} element 目标元素
		 * @param {string} className className属性
		 */
		containsClassName(element, className) {
			if (typeof className !== "string") {
				return;
			}
			if (className.trim() === "") {
				return;
			}
			return element.classList.contains(className);
		},
		/**
		 * 获取或设置元素的样式属性值
		 * @param {HTMLElement|string} element 目标元素
		 * @param {CSSStyleDeclaration|string} property 样式属性名或包含多个属性名和属性值的对象
		 * @param {any} [value] 样式属性值（可选）
		 * @returns 如果传入了value，则返回undefined；否则返回样式属性值
		 **/
		css(element, property, value) {
			/**
			 * 把纯数字没有px的加上
			 */
			// @ts-ignore
			function handlePixe(propertyName, propertyValue) {
				let allowAddPixe = [
					"width",
					"height",
					"top",
					"left",
					"right",
					"bottom",
					"font-size",
				];
				if (typeof propertyValue === "number") {
					propertyValue = propertyValue.toString();
				}
				if (
					typeof propertyValue === "string" &&
					allowAddPixe.includes(propertyName) &&
					propertyValue.match(/[0-9]$/gi)
				) {
					propertyValue = propertyValue + "px";
				}
				return propertyValue;
			}
			if (typeof element === "string") {
				// @ts-ignore
				element = document.querySelector(element);
			}
			if (element == void 0) {
				// @ts-ignore
				return;
			}
			if (typeof property === "string") {
				if (value === void 0) {
					// @ts-ignore
					return getComputedStyle(element).getPropertyValue(property);
				} else {
					if (value === "string" && value.includes("!important")) {
						// @ts-ignore
						element.style.setProperty(property, value, "important");
					} else {
						value = handlePixe(property, value);
						// @ts-ignore
						element.style.setProperty(property, value);
					}
				}
			} else if (typeof property === "object") {
				for (let prop in property) {
					if (
						typeof property[prop] === "string" &&
						property[prop].includes("!important")
					) {
						// @ts-ignore
						element.style.setProperty(prop, property[prop], "important");
					} else {
						property[prop] = handlePixe(prop, property[prop]);
						// @ts-ignore
						element.style.setProperty(prop, property[prop]);
					}
				}
			}
		},
		/**
		 * 创建元素
		 * @param {keyof HTMLElementTagNameMap} tagName 元素类型
		 * @param {({[P in keyof HTMLElementTagNameMap[keyof HTMLElementTagNameMap]]?: HTMLElementTagNameMap[keyof HTMLElementTagNameMap][P];} & {[key: string]: any;}) | string} [property] 元素属性，对已有元素上的属性或者自定义的属性赋值
		 * @param {object|undefined} [attributes] 元素自定义属性，通过setAttribute赋值
		 * @returns {HTMLElement}
		 */
		createElement(tagName, property, attributes) {
			let tempElement = document.createElement(tagName);
			if (typeof property === "string") {
				tempElement.innerHTML = property;
				return tempElement;
			}
			if (property == void 0) {
				// @ts-ignore
				property = {};
			}
			if (attributes == void 0) {
				attributes = {};
			}
			// @ts-ignore
			Object.keys(property).forEach((key) => {
				// @ts-ignore
				let value = property[key];
				// @ts-ignore
				tempElement[key] = value;
			});
			Object.keys(attributes).forEach((key) => {
				// @ts-ignore
				let value = attributes[key];
				if (typeof value === "object") {
					/* object转字符串 */
					value = JSON.stringify(value);
				} else if (typeof value === "function") {
					/* function转字符串 */
					value = value.toString();
				}
				tempElement.setAttribute(key, value);
			});
			return tempElement;
		},
		/**
		 * 获取文字的位置信息
		 * @param {HTMLInputElement} input 输入框
		 * @param {number|string} selectionStart 起始位置
		 * @param {number|string} selectionEnd 结束位置
		 * @param {boolean} debug 是否是调试模式
		 * + true 不删除临时节点元素
		 * + false 删除临时节点元素
		 * @returns {DOMRect}
		 */
		getTextBoundingRect(input, selectionStart, selectionEnd, debug) {
			// Basic parameter validation
			if (!input || !("value" in input)) return input;
			if (typeof selectionStart == "string")
				selectionStart = parseFloat(selectionStart);
			if (typeof selectionStart != "number" || isNaN(selectionStart)) {
				selectionStart = 0;
			}
			if (selectionStart < 0) selectionStart = 0;
			else selectionStart = Math.min(input.value.length, selectionStart);
			if (typeof selectionEnd == "string")
				selectionEnd = parseFloat(selectionEnd);
			if (
				typeof selectionEnd != "number" ||
				isNaN(selectionEnd) ||
				selectionEnd < selectionStart
			) {
				selectionEnd = selectionStart;
			}
			if (selectionEnd < 0) selectionEnd = 0;
			else selectionEnd = Math.min(input.value.length, selectionEnd);

			// If available (thus IE), use the createTextRange method
			// @ts-ignore
			if (typeof input.createTextRange == "function") {
				// @ts-ignore
				var range = input.createTextRange();
				range.collapse(true);
				range.moveStart("character", selectionStart);
				range.moveEnd("character", selectionEnd - selectionStart);
				return range.getBoundingClientRect();
			}
			// createTextRange is not supported, create a fake text range
			var offset = getInputOffset(),
				topPos = offset.top,
				leftPos = offset.left,
				width = getInputCSS("width", true),
				height = getInputCSS("height", true);

			// Styles to simulate a node in an input field
			var cssDefaultStyles = "white-space:pre;padding:0;margin:0;",
				listOfModifiers = [
					"direction",
					"font-family",
					"font-size",
					"font-size-adjust",
					"font-variant",
					"font-weight",
					"font-style",
					"letter-spacing",
					"line-height",
					"text-align",
					"text-indent",
					"text-transform",
					"word-wrap",
					"word-spacing",
				];
			// @ts-ignore
			topPos += getInputCSS("padding-top", true);
			// @ts-ignore
			topPos += getInputCSS("border-top-width", true);
			// @ts-ignore
			leftPos += getInputCSS("padding-left", true);
			// @ts-ignore
			leftPos += getInputCSS("border-left-width", true);
			leftPos += 1; //Seems to be necessary

			for (var i = 0; i < listOfModifiers.length; i++) {
				var property = listOfModifiers[i];
				// @ts-ignore
				cssDefaultStyles += property + ":" + getInputCSS(property) + ";";
			}
			// End of CSS variable checks
			// 不能为空，不然获取不到高度
			var text = input.value || "G",
				textLen = text.length,
				fakeClone = document.createElement("div");
			if (selectionStart > 0) appendPart(0, selectionStart);
			var fakeRange = appendPart(selectionStart, selectionEnd);
			if (textLen > selectionEnd) appendPart(selectionEnd, textLen);

			// Styles to inherit the font styles of the element
			fakeClone.style.cssText = cssDefaultStyles;

			// Styles to position the text node at the desired position
			fakeClone.style.position = "absolute";
			fakeClone.style.top = topPos + "px";
			fakeClone.style.left = leftPos + "px";
			fakeClone.style.width = width + "px";
			fakeClone.style.height = height + "px";
			document.body.appendChild(fakeClone);
			var returnValue = fakeRange.getBoundingClientRect(); //Get rect

			// @ts-ignore
			if (!debug) fakeClone.parentNode.removeChild(fakeClone); //Remove temp
			return returnValue;

			// Local functions for readability of the previous code
			/**
			 *
			 * @param {number} start
			 * @param {number} end
			 * @returns
			 */
			function appendPart(start, end) {
				var span = document.createElement("span");
				span.style.cssText = cssDefaultStyles; //Force styles to prevent unexpected results
				span.textContent = text.substring(start, end);
				fakeClone.appendChild(span);
				return span;
			}
			// Computing offset position
			function getInputOffset() {
				var body = document.body,
					win = document.defaultView,
					docElem = document.documentElement,
					box = document.createElement("div");
				box.style.paddingLeft = box.style.width = "1px";
				body.appendChild(box);
				var isBoxModel = box.offsetWidth == 2;
				body.removeChild(box);
				// @ts-ignore
				box = input.getBoundingClientRect();
				var clientTop = docElem.clientTop || body.clientTop || 0,
					clientLeft = docElem.clientLeft || body.clientLeft || 0,
					scrollTop =
						// @ts-ignore
						win.pageYOffset ||
						(isBoxModel && docElem.scrollTop) ||
						body.scrollTop,
					scrollLeft =
						// @ts-ignore
						win.pageXOffset ||
						(isBoxModel && docElem.scrollLeft) ||
						body.scrollLeft;
				return {
					// @ts-ignore
					top: box.top + scrollTop - clientTop,
					// @ts-ignore
					left: box.left + scrollLeft - clientLeft,
				};
			}
			/**
			 *
			 * @param {any} prop
			 * @param {any} isnumber
			 * @returns
			 */
			function getInputCSS(prop, isnumber) {
				// @ts-ignore
				var val = document.defaultView
					.getComputedStyle(input, null)
					.getPropertyValue(prop);
				return isnumber ? parseFloat(val) : val;
			}
		},
		/**
		 * 使用className来隐藏元素
		 * @param {Element|null} ele
		 * @param {boolean} [isImportant] 是否使用!important
		 */
		cssHide(ele, isImportant = false) {
			if (ele == null) {
				return;
			}
			if (isImportant) {
				ele.classList.add("pops-hide-important");
			} else {
				ele.classList.add("pops-hide");
			}
		},
		/**
		 * cssHide的反向使用
		 * @param {Element|null} ele
		 */
		cssShow(ele) {
			if (ele == null) {
				return;
			}
			ele.classList.remove("pops-hide-important");
			ele.classList.remove("pops-hide");
		},
	};

	/** 弹窗 */
	const pops = {};

	/** 配置 */
	pops.config = {
		/** 版本号 */
		version: "2024.7.5",
		cssText: {
			/** 主CSS */
			index: `@charset "utf-8";
			* {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				margin: 0;
				padding: 0;
				-webkit-tap-highlight-color: transparent;
				/* 代替::-webkit-scrollbar */
				scrollbar-width: thin;
			}
			.pops{
				--pops-bg-opacity: 1;
				--pops-bd-opacity: 1;
				--pops-font-size: 16px;
			}
			.pops-mask{
				--pops-mask-bg-opacity: 0.4;
			}
			.pops {
				background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
				border-radius: 4px;
				border: 1px solid rgb(235, 238, 245, var(--pops-bd-opacity));
				font-size: var(--pops-font-size);
				box-shadow: 0 0 12px rgba(0,0,0,.12);
				box-sizing: border-box;
				overflow: hidden;
				transition: all .35s
			}
			.pops-anim{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}
			.pops-anim[anim=""]{top:unset;right:unset;bottom:unset;left:unset;width:unset;height:unset;transition:none;}
			/* 底部图标动画和样式 */
			.pops i.pops-bottom-icon[is-loading="true"]{animation: rotating 2s linear infinite;}
			.pops i.pops-bottom-icon{height:1em;width:1em;line-height:1em;display:inline-flex;justify-content:center;align-items:center;position:relative;fill:currentColor;color:inherit;font-size:inherit}
			
			/* 遮罩层样式 */
			.pops-mask{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;border:0;border-radius:0;background-color:rgba(0,0,0,var(--pops-mask-bg-opacity));box-shadow:none;transition:none;}
			
			
			.pops-header-controls button.pops-header-control[type][data-header]{
				float: right;
				margin: 0 0;
				outline: 0;
				border: 0;
				border-color: rgb(136, 136, 136, var(--pops-bd-opacity));
				background-color: transparent;
				color: #888;
				cursor: pointer;
			}
			.pops-header-controls button.pops-header-control[type=max],
			.pops-header-controls button.pops-header-control[type=mise],
			.pops-header-controls button.pops-header-control[type=min]{position:relative;float:right;margin:0 2px;outline:0!important;border:0;border-color:rgb(136, 136, 136, var(--pops-bd-opacity));background-color:transparent;color:rgb(136, 136, 136);cursor:pointer;transition:all .3s ease-in-out;}
			button.pops-header-control i{color:rgb(144, 147, 153);font-size:inherit;display:inline-flex;justify-content:center;align-items:center;position:relative;fill:currentColor}
			button.pops-header-control svg{height:1.25em;width:1.25em}
			button.pops-header-control{right:15px;padding:0;border:none;outline:0;background:0 0;cursor:pointer;position:unset;line-height:1.15;}
			button.pops-header-control i:hover{color:rgb(64, 158, 255)}
			.pops-header-controls[data-margin] button.pops-header-control{margin:0 6px}
			.pops[type-value] .pops-header-controls{display: flex;}
			`,
			/** 九宫格位置CSS */
			ninePalaceGridPosition: `
			.pops[position=top_left]{position:fixed;top:0;left:0;}
			.pops[position=top]{position:fixed;top:0;left:50%;transform:translateX(-50%);}
			.pops[position=top_right]{position:fixed;top:0;right:0;}
			.pops[position=center_left]{position:fixed;top:50%;left:0;transform:translateY(-50%);}
			.pops[position=center]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}
			.pops[position=center_right]{position:fixed;top:50%;right:0;transform:translateY(-50%);}
			.pops[position=bottom_left]{position:fixed;bottom:0;left:0;}
			.pops[position=bottom]{position:fixed;bottom:0;left:50%;transform:translate(-50%,0);}
			.pops[position=bottom_right]{position:fixed;right:0;bottom:0;}
			
			`,
			/** 滚动条CSS */
			scrollbar: `
			/* firefox上暂不支持::-webkit-scrollbar */
			.pops ::-webkit-scrollbar{
				width:6px;
				height:0;
			}

			.pops ::-webkit-scrollbar-track{
				width:0;
			}
			.pops ::-webkit-scrollbar-thumb:hover{
				background: rgb(178, 178, 178, var(--pops-bg-opacity));
			}
			.pops ::-webkit-scrollbar-thumb{
				min-height: 28px;
				border-radius: 2em;
				background: rgb(204, 204, 204, var(--pops-bg-opacity));
				background-clip: padding-box;
			}
			`,
			/** 按钮CSS */
			button: `
			.pops {
				--button-font-size: 14px;
				--button-height: 32px;
				--button-color: rgb(51, 51, 51);
				--button-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));
				--button-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));
				--button-margin-top: 0px;
				--button-margin-bottom: 0px;
				--button-margin-left: 5px;
				--button-margin-right: 5px;
				--button-padding-top: 6px;
				--button-padding-bottom: 6px;
				--button-padding-left: 12px;
				--button-padding-right: 12px;
				--button-radius: 4px;
			
				--container-title-height: 55px;
				--container-bottom-btn-height: 55px;
			}
			.pops[data-bottom-btn="false"]{
				--container-bottom-btn-height: 0px;
			}
			.pops button {
				white-space: nowrap;
				float: right;
				display: inline-block;
				margin: var(--button-margin-top) var(--button-margin-right) var(--button-margin-bottom) var(--button-margin-left);
				padding: var(--button-padding-top) var(--button-padding-right) var(--button-padding-bottom) var(--button-padding-left);
				outline: 0;
			}
			.pops button {
				border-radius: var(--button-radius);
				box-shadow: none;
				font-weight: 400;
				font-size: var(--button-font-size);
				cursor: pointer;
				transition: all .3s ease-in-out;
			}
			.pops button {
				display: flex;
				align-items: center;
				height: var(--button-height);
				line-height: 1;
				box-sizing: border-box;
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				border: 1px solid var(--button-bd-color);
			}
			.pops button {
				color: var(--button-color);
				border-color: var(--button-bd-color);
				background-color: var(--button-bg-color);
			}
			.pops button:active{
				color: var(--button-color);
				border-color: var(--button-bd-color);
				background-color: var(--button-bg-color);
				outline: 0;
			}
			.pops button:hover{
				color: var(--button-color);
				border-color: var(--button-bd-color);
				background-color: var(--button-bg-color);
			}
			.pops button:focus-visible{
				color: var(--button-color);
				border-color: var(--button-bd-color);
				background-color: var(--button-bg-color);
			}
			.pops button:disabled {
				cursor: not-allowed;
				color: var(--button-color);
				border-color: var(--button-bd-color);
				background-color: var(--button-bg-color);
			}
			.pops button.pops-button-large {
				--button-height: 32px;
				--button-padding-top: 12px;
				--button-padding-bottom: 12px;
				--button-padding-left: 19px;
				--button-padding-right: 19px;
				--button-font-size: 14px;
				--button-border-radius: 4px;
			}
			
			.pops button.pops-button-small {
				--button-height: 24px;
				--button-padding-top: 5px;
				--button-padding-bottom: 5px;
				--button-padding-left: 11px;
				--button-padding-right: 11px;
				--button-font-size: 12px;
				--button-border-radius: 4px;
			}
			.pops-panel-button-no-icon .pops-panel-button_inner i{
				display: none;
			}
			.pops-panel-button-right-icon{
				
			}
			.pops-panel-button-right-icon .pops-panel-button_inner{
				flex-direction: row-reverse;
			}
			.pops-panel-button-right-icon .pops-panel-button_inner i{
			
			}
			.pops-panel-button .pops-panel-button_inner i:has(svg),
			.pops-panel-button-right-icon .pops-panel-button-text{
				margin-right: 6px;
			}
			
				
			.pops button[type=default]{--button-color:#333333;--button-bd-color:#dcdfe6;--button-bg-color:#ffffff;}
			.pops button[type=default]:active{--button-color:#409eff;--button-bd-color:#409eff;--button-bg-color:#ecf5ff;}
			.pops button[type=default]:hover{--button-color:#409eff;--button-bd-color:#c6e2ff;--button-bg-color:#ecf5ff;}
			.pops button[type=default]:focus-visible{outline:2px solid #a0cfff;outline-offset:1px;}
			.pops button[type=default]:disabled{--button-color:#a8abb2;--button-bd-color:#fff;--button-bg-color:#e4e7ed;}
			
			.pops button[type=primary]{--button-color:#ffffff;--button-bd-color:#409eff;--button-bg-color:#409eff;}
			.pops button[type=primary]:active{--button-color:#ffffff;--button-bd-color:#337ecc;--button-bg-color:#337ecc;}
			.pops button[type=primary]:hover{--button-color:#ffffff;--button-bd-color:#79bbff;--button-bg-color:#79bbff;}
			.pops button[type=primary]:focus-visible{outline:2px solid #a0cfff;outline-offset:1px;}
			.pops button[type=primary]:disabled{--button-color:#ffffff;--button-bd-color:#a0cfff;--button-bg-color:#a0cfff;}
			
			.pops button[type=success]{--button-color:#ffffff;--button-bd-color:#4cae4c;--button-bg-color:#5cb85c;}
			.pops button[type=success]:active{--button-color:#ffffff;--button-bd-color:#529b2e;--button-bg-color:#529b2e;}
			.pops button[type=success]:hover{--button-color:#ffffff;--button-bd-color:#95d475;--button-bg-color:#95d475;}
			.pops button[type=success]:focus-visible{outline:2px solid #b3e19d;outline-offset:1px;}
			.pops button[type=success]:disabled{--button-color:#ffffff;--button-bd-color:#b3e19d;--button-bg-color:#b3e19d;}
			
			.pops button[type=info]{--button-color:#ffffff;--button-bd-color:#909399;--button-bg-color:#909399;}
			.pops button[type=info]:active{--button-color:#ffffff;--button-bd-color:#73767a;--button-bg-color:#73767a;}
			.pops button[type=info]:hover{--button-color:#ffffff;--button-bd-color:#b1b3b8;--button-bg-color:#b1b3b8;}
			.pops button[type=info]:focus-visible{outline:2px solid #c8c9cc;outline-offset:1px;}
			.pops button[type=info]:disabled{--button-color:#ffffff;--button-bd-color:#c8c9cc;--button-bg-color:#c8c9cc;}
			
			.pops button[type=warning]{--button-color:#ffffff;--button-bd-color:#e6a23c;--button-bg-color:#e6a23c;}
			.pops button[type=warning]:active{--button-color:#ffffff;--button-bd-color:#b88230;--button-bg-color:#b88230;}
			.pops button[type=warning]:hover{--button-color:#ffffff;--button-bd-color:#eebe77;--button-bg-color:#eebe77;}
			.pops button[type=warning]:focus-visible{outline:2px solid #f3d19e;outline-offset:1px;}
			.pops button[type=warning]:disabled{--button-color:#ffffff;--button-bd-color:#f3d19e;--button-bg-color:#f3d19e;}
			
			.pops button[type=danger]{--button-color:#ffffff;--button-bd-color:#f56c6c;--button-bg-color:#f56c6c;}
			.pops button[type=danger]:active{--button-color:#ffffff;--button-bd-color:#c45656;--button-bg-color:#c45656;}
			.pops button[type=danger]:hover{--button-color:#ffffff;--button-bd-color:#f89898;--button-bg-color:#f89898;}
			.pops button[type=danger]:focus-visible{outline:2px solid #fab6b6;outline-offset:1px;}
			.pops button[type=danger]:disabled{--button-color:#ffffff;--button-bd-color:#fab6b6;--button-bg-color:#fab6b6;}
			
			.pops button[type=xiaomi-primary]{--button-color:#ffffff;--button-bd-color:#ff5c00;--button-bg-color:#ff5c00;}
			.pops button[type=xiaomi-primary]:active{--button-color:#ffffff;--button-bd-color:#da4f00;--button-bg-color:#da4f00;}
			.pops button[type=xiaomi-primary]:hover{--button-color:#ffffff;--button-bd-color:#ff7e29;--button-bg-color:#ff7e29;}
			.pops button[type=xiaomi-primary]:focus-visible{outline:2px solid #fab6b6;outline-offset:1px;}
			.pops button[type=xiaomi-primary]:disabled{--button-color:#ffffff;--button-bd-color:#fad5b6;--button-bg-color:#fad5b6;}
			
			`,
			/** 通用的CSS */
			common: `
			.pops-flex-items-center{display: flex;align-items: center;}
			.pops-flex-y-center{display: flex;justify-content: space-between;}
			.pops-flex-x-center{display: flex;align-content: center;}
			.pops-hide {display: none;}
			.pops-hide-important {display: none !important;}
			.pops-no-border{border: 0;}
			.pops-no-border-important{border: 0;}
			`,
			/** 动画 */
			anim: `
			@keyframes rotating{0%{transform:rotate(0)}
			to{transform:rotate(360deg)}
			}
			@keyframes iframeLoadingChange_85{0%{background:linear-gradient(to right,#4995dd,#fff,rgb(202 224 246));}
			20%{background:linear-gradient(to right,#4995dd,#ead0d0,rgb(123 185 246));}
			40%{background:linear-gradient(to right,#4995dd,#f4b7b7,rgb(112 178 244));}
			60%{background:linear-gradient(to right,#4995dd,#ec9393,rgb(80 163 246));}
			80%{background:linear-gradient(to right,#4995dd,#e87f7f,rgb(25 139 253));}
			100%{background:linear-gradient(to right,#4995dd,#ee2c2c,rgb(0 124 247));}
			from{width:75%;}
			to{width:100%;}
			}
			@keyframes iframeLoadingChange{0%{background:linear-gradient(to right,#4995dd,#fff,rgb(202 224 246));}
			20%{background:linear-gradient(to right,#4995dd,#ead0d0,rgb(123 185 246));}
			40%{background:linear-gradient(to right,#4995dd,#f4b7b7,rgb(112 178 244));}
			60%{background:linear-gradient(to right,#4995dd,#ec9393,rgb(80 163 246));}
			80%{background:linear-gradient(to right,#4995dd,#e87f7f,rgb(25 139 253));}
			100%{background:linear-gradient(to right,#4995dd,#ee2c2c,rgb(0 124 247));}
			from{width:0;}
			to{width:75%;}
			}
			@keyframes pops-anim-wait-rotate{form{transform:rotate(0);}
			to{transform:rotate(360deg);}
			}
			@keyframes pops-anim-spread{0%{opacity:0;transform:scaleX(0);}
			100%{opacity:1;transform:scaleX(1);}
			}
			@keyframes pops-anim-shake{0%,100%{transform:translateX(0);}
			10%,30%,50%,70%,90%{transform:translateX(-10px);}
			20%,40%,60%,80%{transform:translateX(10px);}
			}
			@keyframes pops-anim-rolling-left{0%{opacity:0;transform:translateX(-100%) rotate(-120deg);}
			100%{opacity:1;transform:translateX(0) rotate(0);}
			}
			@keyframes pops-anim-rolling-right{0%{opacity:0;transform:translateX(100%) rotate(120deg);}
			100%{opacity:1;transform:translateX(0) rotate(0);}
			}
			@keyframes pops-anim-slide-top{0%{opacity:0;transform:translateY(-200%);}
			100%{opacity:1;transform:translateY(0);}
			}
			@keyframes pops-anim-slide-bottom{0%{opacity:0;transform:translateY(200%);}
			100%{opacity:1;transform:translateY(0);}
			}
			@keyframes pops-anim-slide-left{0%{opacity:0;transform:translateX(-200%);}
			100%{opacity:1;transform:translateX(0);}
			}
			@keyframes pops-anim-slide-right{0%{transform:translateX(200%);}
			100%{opacity:1;transform:translateX(0);}
			}
			@keyframes pops-anim-fadein{0%{opacity:0;}
			100%{opacity:1;}
			}
			@keyframes pops-anim-fadein-zoom{0%{opacity:0;transform:scale(.5);}
			100%{opacity:1;transform:scale(1);}
			}
			@keyframes pops-anim-fadein-alert{0%{transform:scale(.5);}
			45%{transform:scale(1.05);}
			80%{transform:scale(.95);}
			100%{transform:scale(1);}
			}
			@keyframes pops-anim-don{0%{opacity:0;transform:matrix3d(.7,0,0,0,0,.7,0,0,0,0,1,0,0,0,0,1);}
			2.08333%{transform:matrix3d(.75266,0,0,0,0,.76342,0,0,0,0,1,0,0,0,0,1);}
			4.16667%{transform:matrix3d(.81071,0,0,0,0,.84545,0,0,0,0,1,0,0,0,0,1);}
			6.25%{transform:matrix3d(.86808,0,0,0,0,.9286,0,0,0,0,1,0,0,0,0,1);}
			8.33333%{transform:matrix3d(.92038,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			10.4167%{transform:matrix3d(.96482,0,0,0,0,1.05202,0,0,0,0,1,0,0,0,0,1);}
			12.5%{transform:matrix3d(1,0,0,0,0,1.08204,0,0,0,0,1,0,0,0,0,1);}
			14.5833%{transform:matrix3d(1.02563,0,0,0,0,1.09149,0,0,0,0,1,0,0,0,0,1);}
			16.6667%{transform:matrix3d(1.04227,0,0,0,0,1.08453,0,0,0,0,1,0,0,0,0,1);}
			18.75%{transform:matrix3d(1.05102,0,0,0,0,1.06666,0,0,0,0,1,0,0,0,0,1);}
			20.8333%{transform:matrix3d(1.05334,0,0,0,0,1.04355,0,0,0,0,1,0,0,0,0,1);}
			22.9167%{transform:matrix3d(1.05078,0,0,0,0,1.02012,0,0,0,0,1,0,0,0,0,1);}
			25%{transform:matrix3d(1.04487,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			27.0833%{transform:matrix3d(1.03699,0,0,0,0,.98534,0,0,0,0,1,0,0,0,0,1);}
			29.1667%{transform:matrix3d(1.02831,0,0,0,0,.97688,0,0,0,0,1,0,0,0,0,1);}
			31.25%{transform:matrix3d(1.01973,0,0,0,0,.97422,0,0,0,0,1,0,0,0,0,1);}
			33.3333%{transform:matrix3d(1.01191,0,0,0,0,.97618,0,0,0,0,1,0,0,0,0,1);}
			35.4167%{transform:matrix3d(1.00526,0,0,0,0,.98122,0,0,0,0,1,0,0,0,0,1);}
			37.5%{transform:matrix3d(1,0,0,0,0,.98773,0,0,0,0,1,0,0,0,0,1);}
			39.5833%{transform:matrix3d(.99617,0,0,0,0,.99433,0,0,0,0,1,0,0,0,0,1);}
			41.6667%{transform:matrix3d(.99368,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			43.75%{transform:matrix3d(.99237,0,0,0,0,1.00413,0,0,0,0,1,0,0,0,0,1);}
			45.8333%{transform:matrix3d(.99202,0,0,0,0,1.00651,0,0,0,0,1,0,0,0,0,1);}
			47.9167%{transform:matrix3d(.99241,0,0,0,0,1.00726,0,0,0,0,1,0,0,0,0,1);}
			50%{opacity:1;transform:matrix3d(.99329,0,0,0,0,1.00671,0,0,0,0,1,0,0,0,0,1);}
			52.0833%{transform:matrix3d(.99447,0,0,0,0,1.00529,0,0,0,0,1,0,0,0,0,1);}
			54.1667%{transform:matrix3d(.99577,0,0,0,0,1.00346,0,0,0,0,1,0,0,0,0,1);}
			56.25%{transform:matrix3d(.99705,0,0,0,0,1.0016,0,0,0,0,1,0,0,0,0,1);}
			58.3333%{transform:matrix3d(.99822,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			60.4167%{transform:matrix3d(.99921,0,0,0,0,.99884,0,0,0,0,1,0,0,0,0,1);}
			62.5%{transform:matrix3d(1,0,0,0,0,.99816,0,0,0,0,1,0,0,0,0,1);}
			64.5833%{transform:matrix3d(1.00057,0,0,0,0,.99795,0,0,0,0,1,0,0,0,0,1);}
			66.6667%{transform:matrix3d(1.00095,0,0,0,0,.99811,0,0,0,0,1,0,0,0,0,1);}
			68.75%{transform:matrix3d(1.00114,0,0,0,0,.99851,0,0,0,0,1,0,0,0,0,1);}
			70.8333%{transform:matrix3d(1.00119,0,0,0,0,.99903,0,0,0,0,1,0,0,0,0,1);}
			72.9167%{transform:matrix3d(1.00114,0,0,0,0,.99955,0,0,0,0,1,0,0,0,0,1);}
			75%{transform:matrix3d(1.001,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			77.0833%{transform:matrix3d(1.00083,0,0,0,0,1.00033,0,0,0,0,1,0,0,0,0,1);}
			79.1667%{transform:matrix3d(1.00063,0,0,0,0,1.00052,0,0,0,0,1,0,0,0,0,1);}
			81.25%{transform:matrix3d(1.00044,0,0,0,0,1.00058,0,0,0,0,1,0,0,0,0,1);}
			83.3333%{transform:matrix3d(1.00027,0,0,0,0,1.00053,0,0,0,0,1,0,0,0,0,1);}
			85.4167%{transform:matrix3d(1.00012,0,0,0,0,1.00042,0,0,0,0,1,0,0,0,0,1);}
			87.5%{transform:matrix3d(1,0,0,0,0,1.00027,0,0,0,0,1,0,0,0,0,1);}
			89.5833%{transform:matrix3d(.99991,0,0,0,0,1.00013,0,0,0,0,1,0,0,0,0,1);}
			91.6667%{transform:matrix3d(.99986,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			93.75%{transform:matrix3d(.99983,0,0,0,0,.99991,0,0,0,0,1,0,0,0,0,1);}
			95.8333%{transform:matrix3d(.99982,0,0,0,0,.99985,0,0,0,0,1,0,0,0,0,1);}
			97.9167%{transform:matrix3d(.99983,0,0,0,0,.99984,0,0,0,0,1,0,0,0,0,1);}
			100%{opacity:1;transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			}
			@keyframes pops-anim-roll{0%{transform:perspective(1000px) rotate3d(1,0,0,90deg);}
			100%{transform:perspective(1000px) rotate3d(1,0,0,0deg);}
			}
			@keyframes pops-anim-sandra{0%{opacity:0;transform:scale3d(1.1,1.1,1);}
			100%{opacity:1;transform:scale3d(1,1,1);}
			}
			@keyframes pops-anim-gather{0%{opacity:0;transform:scale(5,0);}
			100%{opacity:1;transform:scale(1,1);}
			}
			@keyframes pops-anim-spread-reverse{0%{opacity:1;transform:scaleX(1);}
			100%{opacity:0;transform:scaleX(0);}
			}
			@keyframes pops-anim-shake-reverse{0%,100%{transform:translateX(10px);}
			10%,30%,50%,70%,90%{transform:translateX(-10px);}
			20%,40%,60%,80%{transform:translateX(0);}
			}
			@keyframes pops-anim-rolling-left-reverse{0%{opacity:1;transform:translateX(0) rotate(0);}
			100%{opacity:0;transform:translateX(-100%) rotate(-120deg);}
			}
			@keyframes pops-anim-rolling-right-reverse{0%{opacity:1;transform:translateX(0) rotate(0);}
			100%{opacity:0;transform:translateX(100%) rotate(120deg);}
			}
			@keyframes pops-anim-slide-top-reverse{0%{opacity:1;transform:translateY(0);}
			100%{opacity:0;transform:translateY(-200%);}
			}
			@keyframes pops-anim-slide-bottom-reverse{0%{opacity:1;transform:translateY(0);}
			100%{opacity:0;transform:translateY(200%);}
			}
			@keyframes pops-anim-slide-left-reverse{0%{opacity:1;transform:translateX(0);}
			100%{opacity:0;transform:translateX(-200%);}
			}
			@keyframes pops-anim-slide-right-reverse{0%{opacity:1;transform:translateX(0);}
			100%{transform:translateX(200%);}
			}
			@keyframes pops-anim-fadein-reverse{0%{opacity:1;}
			100%{opacity:0;}
			}
			@keyframes pops-anim-fadein-zoom-reverse{0%{opacity:1;transform:scale(1);}
			100%{opacity:0;transform:scale(.5);}
			}
			@keyframes pops-anim-fadein-alert-reverse{0%{transform:scale(1);}
			45%{transform:scale(.95);}
			80%{transform:scale(1.05);}
			100%{transform:scale(.5);}
			}
			@keyframes pops-anim-don-reverse{100%{opacity:0;transform:matrix3d(.7,0,0,0,0,.7,0,0,0,0,1,0,0,0,0,1);}
			97.9167%{transform:matrix3d(.75266,0,0,0,0,.76342,0,0,0,0,1,0,0,0,0,1);}
			95.8333%{transform:matrix3d(.81071,0,0,0,0,.84545,0,0,0,0,1,0,0,0,0,1);}
			93.75%{transform:matrix3d(.86808,0,0,0,0,.9286,0,0,0,0,1,0,0,0,0,1);}
			91.6667%{transform:matrix3d(.92038,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			89.5833%{transform:matrix3d(.96482,0,0,0,0,1.05202,0,0,0,0,1,0,0,0,0,1);}
			87.5%{transform:matrix3d(1,0,0,0,0,1.08204,0,0,0,0,1,0,0,0,0,1);}
			85.4167%{transform:matrix3d(1.02563,0,0,0,0,1.09149,0,0,0,0,1,0,0,0,0,1);}
			83.3333%{transform:matrix3d(1.04227,0,0,0,0,1.08453,0,0,0,0,1,0,0,0,0,1);}
			81.25%{transform:matrix3d(1.05102,0,0,0,0,1.06666,0,0,0,0,1,0,0,0,0,1);}
			79.1667%{transform:matrix3d(1.05334,0,0,0,0,1.04355,0,0,0,0,1,0,0,0,0,1);}
			77.0833%{transform:matrix3d(1.05078,0,0,0,0,1.02012,0,0,0,0,1,0,0,0,0,1);}
			75%{transform:matrix3d(1.04487,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			72.9167%{transform:matrix3d(1.03699,0,0,0,0,.98534,0,0,0,0,1,0,0,0,0,1);}
			70.8333%{transform:matrix3d(1.02831,0,0,0,0,.97688,0,0,0,0,1,0,0,0,0,1);}
			68.75%{transform:matrix3d(1.01973,0,0,0,0,.97422,0,0,0,0,1,0,0,0,0,1);}
			66.6667%{transform:matrix3d(1.01191,0,0,0,0,.97618,0,0,0,0,1,0,0,0,0,1);}
			64.5833%{transform:matrix3d(1.00526,0,0,0,0,.98122,0,0,0,0,1,0,0,0,0,1);}
			62.5%{transform:matrix3d(1,0,0,0,0,.98773,0,0,0,0,1,0,0,0,0,1);}
			60.4167%{transform:matrix3d(.99617,0,0,0,0,.99433,0,0,0,0,1,0,0,0,0,1);}
			58.3333%{transform:matrix3d(.99368,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			56.25%{transform:matrix3d(.99237,0,0,0,0,1.00413,0,0,0,0,1,0,0,0,0,1);}
			54.1667%{transform:matrix3d(.99202,0,0,0,0,1.00651,0,0,0,0,1,0,0,0,0,1);}
			52.0833%{transform:matrix3d(.99241,0,0,0,0,1.00726,0,0,0,0,1,0,0,0,0,1);}
			50%{opacity:1;transform:matrix3d(.99329,0,0,0,0,1.00671,0,0,0,0,1,0,0,0,0,1);}
			47.9167%{transform:matrix3d(.99447,0,0,0,0,1.00529,0,0,0,0,1,0,0,0,0,1);}
			45.8333%{transform:matrix3d(.99577,0,0,0,0,1.00346,0,0,0,0,1,0,0,0,0,1);}
			43.75%{transform:matrix3d(.99705,0,0,0,0,1.0016,0,0,0,0,1,0,0,0,0,1);}
			41.6667%{transform:matrix3d(.99822,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			39.5833%{transform:matrix3d(.99921,0,0,0,0,.99884,0,0,0,0,1,0,0,0,0,1);}
			37.5%{transform:matrix3d(1,0,0,0,0,.99816,0,0,0,0,1,0,0,0,0,1);}
			35.4167%{transform:matrix3d(1.00057,0,0,0,0,.99795,0,0,0,0,1,0,0,0,0,1);}
			33.3333%{transform:matrix3d(1.00095,0,0,0,0,.99811,0,0,0,0,1,0,0,0,0,1);}
			31.25%{transform:matrix3d(1.00114,0,0,0,0,.99851,0,0,0,0,1,0,0,0,0,1);}
			29.1667%{transform:matrix3d(1.00119,0,0,0,0,.99903,0,0,0,0,1,0,0,0,0,1);}
			27.0833%{transform:matrix3d(1.00114,0,0,0,0,.99955,0,0,0,0,1,0,0,0,0,1);}
			25%{transform:matrix3d(1.001,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			22.9167%{transform:matrix3d(1.00083,0,0,0,0,1.00033,0,0,0,0,1,0,0,0,0,1);}
			20.8333%{transform:matrix3d(1.00063,0,0,0,0,1.00052,0,0,0,0,1,0,0,0,0,1);}
			18.75%{transform:matrix3d(1.00044,0,0,0,0,1.00058,0,0,0,0,1,0,0,0,0,1);}
			16.6667%{transform:matrix3d(1.00027,0,0,0,0,1.00053,0,0,0,0,1,0,0,0,0,1);}
			14.5833%{transform:matrix3d(1.00012,0,0,0,0,1.00042,0,0,0,0,1,0,0,0,0,1);}
			12.5%{transform:matrix3d(1,0,0,0,0,1.00027,0,0,0,0,1,0,0,0,0,1);}
			10.4167%{transform:matrix3d(.99991,0,0,0,0,1.00013,0,0,0,0,1,0,0,0,0,1);}
			8.33333%{transform:matrix3d(.99986,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
			6.25%{transform:matrix3d(.99983,0,0,0,0,.99991,0,0,0,0,1,0,0,0,0,1);}
			4.16667%{transform:matrix3d(.99982,0,0,0,0,.99985,0,0,0,0,1,0,0,0,0,1);}
			2.08333%{transform:matrix3d(.99983,0,0,0,0,.99984,0,0,0,0,1,0,0,0,0,1);}
			0%{opacity:1;transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0type=close,1);}
			}
			@keyframes pops-anim-roll-reverse{0%{transform:perspective(1000px) rotate3d(1,0,0,0deg);}
			100%{transform:perspective(1000px) rotate3d(1,0,0,90deg);}
			}
			@keyframes pops-anim-sandra-reverse{0%{opacity:1;transform:scale3d(1,1,1);}
			100%{opacity:0;transform:scale3d(1.1,1.1,1);}
			}
			@keyframes pops-anim-gather-reverse{0%{opacity:0;transform:scale(5,0);}
			100%{opacity:0;transform:scale(5,0);}
			}
		
			@-webkit-keyframes pops-motion-fadeInTop{0%{opacity:0;-webkit-transform:translateY(-30px);transform:translateY(-30px);}
			100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
			}
			@keyframes pops-motion-fadeInTop{0%{opacity:0;transform:translateY(-30px);-ms-transform:translateY(-30px);}
			100%{opacity:1;transform:translateX(0);-ms-transform:translateX(0);}
			}
			@-webkit-keyframes pops-motion-fadeOutTop{0%{opacity:10;-webkit-transform:translateY(0);transform:translateY(0);}
			100%{opacity:0;-webkit-transform:translateY(-30px);transform:translateY(-30px);}
			}
			@keyframes pops-motion-fadeOutTop{0%{opacity:1;transform:translateY(0);-ms-transform:translateY(0);}
			100%{opacity:0;transform:translateY(-30px);-ms-transform:translateY(-30px);}
			}
			@-webkit-keyframes pops-motion-fadeInBottom{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);}
			100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}
			}
			@keyframes pops-motion-fadeInBottom{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);-ms-transform:translateY(20px);}
			100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
			}
			@-webkit-keyframes pops-motion-fadeOutBottom{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}
			100%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);}
			}
			@keyframes pops-motion-fadeOutBottom{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
			100%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);-ms-transform:translateY(20px);}
			}
			@-webkit-keyframes pops-motion-fadeInLeft{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px);}
			100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
			}
			@keyframes pops-motion-fadeInLeft{0%{opacity:0;-webkit-transform:translateX(-30px);transform:translateX(-30px);-ms-transform:translateX(-30px);}
			100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
			}
			@-webkit-keyframes pops-motion-fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
			100%{opacity:0;-webkit-transform:translateX(-30px);transform:translateX(-30px);}
			}
			@keyframes pops-motion-fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
			100%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px);-ms-transform:translateX(-20px);}
			}
			@-webkit-keyframes pops-motion-fadeInRight{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);}
			100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
			}
			@keyframes pops-motion-fadeInRight{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);-ms-transform:translateX(20px);}
			100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
			}
			@-webkit-keyframes pops-motion-fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
			100%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);}
			}
			@keyframes pops-motion-fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
			100%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);-ms-transform:translateX(20px);}
			}


			/* 动画 */
			.pops-anim[anim=pops-anim-spread]{animation:pops-anim-spread .3s;}
			.pops-anim[anim=pops-anim-shake]{animation:pops-anim-shake .3s;}
			.pops-anim[anim=pops-anim-rolling-left]{animation:pops-anim-rolling-left .3s;}
			.pops-anim[anim=pops-anim-rolling-right]{animation:pops-anim-rolling-right .3s;}
			.pops-anim[anim=pops-anim-slide-top]{animation:pops-anim-slide-top .3s;}
			.pops-anim[anim=pops-anim-slide-bottom]{animation:pops-anim-slide-bottom .3s;}
			.pops-anim[anim=pops-anim-slide-left]{animation:pops-anim-slide-left .3s;}
			.pops-anim[anim=pops-anim-slide-right]{animation:pops-anim-slide-right .3s;}
			.pops-anim[anim=pops-anim-fadein]{animation:pops-anim-fadein .3s;}
			.pops-anim[anim=pops-anim-fadein-zoom]{animation:pops-anim-fadein-zoom .3s;}
			.pops-anim[anim=pops-anim-fadein-alert]{animation:pops-anim-fadein-alert .3s;}
			.pops-anim[anim=pops-anim-don]{animation:pops-anim-don .3s;}
			.pops-anim[anim=pops-anim-roll]{animation:pops-anim-roll .3s;}
			.pops-anim[anim=pops-anim-sandra]{animation:pops-anim-sandra .3s;}
			.pops-anim[anim=pops-anim-gather]{animation:pops-anim-gather .3s;}
			.pops-anim[anim=pops-anim-spread-reverse]{animation:pops-anim-spread-reverse .3s;}
			.pops-anim[anim=pops-anim-shake-reverse]{animation:pops-anim-shake-reverse .3s;}
			.pops-anim[anim=pops-anim-rolling-left-reverse]{animation:pops-anim-rolling-left-reverse .3s;}
			.pops-anim[anim=pops-anim-rolling-right-reverse]{animation:pops-anim-rolling-right-reverse .3s;}
			.pops-anim[anim=pops-anim-slide-top-reverse]{animation:pops-anim-slide-top-reverse .3s;}
			.pops-anim[anim=pops-anim-slide-bottom-reverse]{animation:pops-anim-slide-bottom-reverse .3s;}
			.pops-anim[anim=pops-anim-slide-left-reverse]{animation:pops-anim-slide-left-reverse .3s;}
			.pops-anim[anim=pops-anim-slide-right-reverse]{animation:pops-anim-slide-right-reverse .3s;}
			.pops-anim[anim=pops-anim-fadein-reverse]{animation:pops-anim-fadein-reverse .3s;}
			.pops-anim[anim=pops-anim-fadein-zoom-reverse]{animation:pops-anim-fadein-zoom-reverse .3s;}
			.pops-anim[anim=pops-anim-fadein-alert-reverse]{animation:pops-anim-fadein-alert-reverse .3s;}
			.pops-anim[anim=pops-anim-don-reverse]{animation:pops-anim-don-reverse .3s;}
			.pops-anim[anim=pops-anim-roll-reverse]{animation:pops-anim-roll-reverse .3s;}
			.pops-anim[anim=pops-anim-sandra-reverse]{animation:pops-anim-sandra-reverse .3s;}
			.pops-anim[anim=pops-anim-gather-reverse]{animation:pops-anim-gather-reverse .3s;}
			`,
			alertCSS: `
			.pops[type-value] .pops-alert-title{display: flex;align-items: center;justify-content: space-between;}
			.pops[type-value=alert] .pops-alert-title{width:100%;height:var(--container-title-height);border-bottom:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));}
			.pops[type-value=alert] .pops-alert-title p[pops]{width:100%;overflow:hidden;color:rgb(51, 51, 51);text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;line-height:var(--container-title-height);}
			.pops[type-value=alert] .pops-alert-content p[pops]{padding:5px 10px;color:rgb(51, 51, 51);text-indent:15px;}
			.pops[type-value=alert] .pops-alert-content{
			width:100%;
			height: calc(100% - var(--container-title-height) - var(--container-bottom-btn-height));
			overflow: auto;
			word-break:break-word;
			}
			.pops[type-value=alert] .pops-alert-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:var(--container-bottom-btn-height);border-top:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));text-align:right;line-height:var(--container-bottom-btn-height);align-items:center;}

			`,
			confirmCSS: `
			.pops[type-value] .pops-confirm-title{display: flex;align-items: center;justify-content: space-between;}
			.pops[type-value=confirm] .pops-confirm-title{width:100%;height:var(--container-title-height);border-bottom:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));}
			.pops[type-value=confirm] .pops-confirm-title p[pops]{width:100%;overflow:hidden;color:rgb(51, 51, 51);text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;line-height:var(--container-title-height);}
			.pops[type-value=confirm] .pops-confirm-content p[pops]{padding:5px 10px;color:rgb(51, 51, 51);text-indent:15px;}
			.pops[type-value=confirm] .pops-confirm-content{
				width:100%;
				height: calc(100% - var(--container-title-height) - var(--container-bottom-btn-height));
				overflow: auto;
				word-break:break-word;
			}
			.pops[type-value=confirm] .pops-confirm-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:var(--container-bottom-btn-height);border-top:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));text-align:right;line-height:var(--container-bottom-btn-height);align-items:center;}
			
			`,
			promptCSS: `
			.pops[type-value] .pops-prompt-title{display: flex;align-items: center;justify-content: space-between;}
			.pops[type-value=prompt] .pops-prompt-title{width:100%;height:var(--container-title-height);border-bottom:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));}
			.pops[type-value=prompt] .pops-prompt-title p[pops]{width:100%;overflow:hidden;color:rgb(51, 51, 51);text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;line-height:var(--container-title-height);}
			.pops[type-value=prompt] .pops-prompt-content p[pops]{padding:5px 10px;color:rgb(51, 51, 51);text-indent:15px;}
			.pops[type-value=prompt] .pops-prompt-content{
				width:100%;
				height: calc(100% - var(--container-title-height) - var(--container-bottom-btn-height));
				overflow: auto;
				word-break:break-word;
			}
			.pops[type-value=prompt] .pops-prompt-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:var(--container-bottom-btn-height);border-top:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));text-align:right;line-height:var(--container-bottom-btn-height);align-items:center;}
			.pops[type-value=prompt] input[pops]{padding:5px 10px;}
			.pops[type-value=prompt] textarea[pops]{padding:5px 10px;resize:none;}
			.pops[type-value=prompt] input[pops],.pops[type-value=prompt] textarea[pops]{width:100%;height:100%;outline:0;border:0;color:rgb(51, 51, 51);}

			`,
			loadingCSS: `
			.pops[type-value=loading] {
				position: absolute;
				top: 272.5px;
				top: 50%;
				left: 26px;
				left: 50%;
				display: flex;
				overflow: hidden;
				padding: 10px 15px;
				max-width: 100%;
				max-height: 100%;
				min-width: 0;
				min-height: 0;
				border: 1px solid rgba(0,0,0,.2);
				border-radius: 5px;
				background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
				box-shadow: 0 0 5px rgb(0 0 0 / 50%);
				vertical-align: middle;
				transition: all .35s;
				transform: translate(-50%,-50%);
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				align-content: center;
			}
			.pops[type-value=loading]:before{float:left;display:inline-block;width:2em;height:2em;border:.3em solid rgba(100,149,237,.1);border-top:.3em solid rgb(100, 149, 237, var(--pops-bd-opacity));border-radius:50%;content:" ";vertical-align:middle;font-size:inherit;animation:pops-anim-wait-rotate 1.2s linear infinite;}
			.pops[type-value=loading] .pops-loading-content{position:static;top:0;bottom:0;float:left;overflow:hidden;width:auto;font-size:inherit;line-height:2em;}
			.pops[type-value=loading] .pops-loading-content p[pops] {
				display: inline-block;
				padding: 5px 0px;
				color: rgb(51, 51, 51);
				text-indent: 15px;
				font-size: inherit;
				text-align: center;
			}
			
			`,
			iframeCSS: `
			.pops[type-value=iframe]{
				--container-title-height: 55px;
			}
			.pops[type-value] .pops-iframe-title{display: flex;align-items: center;justify-content: space-between;}
			.pops[type-value=iframe] .pops-iframe-title{width:calc(100% - 0px);height:var(--container-title-height);border-bottom:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));}
			.pops[type-value=iframe] .pops-iframe-title p[pops]{width:100%;overflow:hidden;color:rgb(51, 51, 51);text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;line-height:var(--container-title-height);}
			.pops[type-value=iframe] .pops-iframe-content p[pops]{padding:5px 10px;color:#333;text-indent:15px;}
			.pops[type-value=iframe] .pops-iframe-content{
				width:100%;
				height: calc(100% - var(--container-title-height));
				overflow: hidden;
				word-break:break-word;
			}
			.pops-loading{position:absolute;top:40px;right:0;bottom:0;left:0;z-index:5;background-color:rgb(255, 255, 255, var(--pops-bg-opacity));}
			.pops-loading:before{position:absolute;top:50%;left:50%;z-index:3;display:block;margin:-20px 0 0 -20px;padding:20px;border:4px solid rgb(221, 221, 221, var(--pops-bd-opacity));border-radius:50%;content:"";border-top-color:transparent;animation:pops-anim-wait-rotate 1.2s linear infinite;}
			.pops[type-value=iframe].pops[type-module=min]{top:unset!important;bottom:0;max-width:200px;max-height:53px;transform:none;}
			.pops[type-value=iframe].pops[type-module=min] .pops-header-control[type=min]{display:none;}
			.pops[type-value=iframe].pops[type-module=max]{top:unset!important;left:unset!important;width:100%!important;height:100%!important;transform:none;}
			.pops[type-value=iframe] iframe[pops]{width:calc(100% - 4px);height:calc(100% - 4px);border:0;}
			.pops-iframe-content-global-loading{position:absolute;top:0;left:0;z-index:999999;width:0;height:4px;background:linear-gradient(to right,#4995dd,#fff,rgb(202 224 246));animation:iframeLoadingChange 2s forwards;}
			`,
			drawerCSS: `
			.pops[type-value=drawer] {
				position: fixed;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16);
				overflow: hidden;
				transition: all .3s;
			}
			.pops[type-value] .pops-drawer-title{display: flex;align-items: center;justify-content: space-between;}
			
			.pops[type-value=drawer][direction=top]{width: 100%;left: 0;right: 0;top: 0;}
			.pops[type-value=drawer][direction=bottom]{width: 100%;left: 0;right: 0;bottom: 0;}
			.pops[type-value=drawer][direction=left]{height: 100%;top: 0;bottom: 0;left: 0;}
			.pops[type-value=drawer][direction=right]{height: 100%;top: 0;bottom: 0;right: 0;}
			.pops-drawer-content{height: 100%;}
			.pops[type-value="drawer"] .pops-drawer-btn{padding-top: 10px;padding-bottom: 10px;}
			
			`,
			folderCSS: `
			.pops[type-value] .pops-folder-title{display: flex;align-items: center;justify-content: space-between;}
			.pops[type-value=folder] .pops-folder-title{width:100%;height:var(--container-title-height);border-bottom:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));}
			.pops[type-value=folder] .pops-folder-title p[pops]{width:100%;overflow:hidden;color:rgb(51, 51, 51);text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;line-height:var(--container-title-height);}
			.pops[type-value=folder] .pops-folder-content p[pops]{padding:5px 10px;color:rgb(51, 51, 51);text-indent:15px;}
			.pops[type-value=folder] .pops-folder-content{
				width:100%;
				height: calc(100% - var(--container-title-height) - var(--container-bottom-btn-height));
				overflow: auto;
				word-break:break-word;
			}
			.pops[type-value=folder] .pops-folder-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:var(--container-bottom-btn-height);border-top:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));text-align:right;line-height:var(--container-bottom-btn-height);align-items:center;}
			.pops-folder-list .cursor-p{cursor:pointer}
			.pops-folder-list a{background:0 0;text-decoration:none;-webkit-tap-highlight-color:transparent;color:#05082c}
			table.pops-folder-list-table__body,table.pops-folder-list-table__header{width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;padding:0 20px}
			table.pops-folder-list-table__body,table.pops-folder-list-table__header{height:100%;background:0 0;overflow:hidden;display:-webkit-box;display:-ms-flexbox;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal}
			table.pops-folder-list-table__body{height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
			.pops-folder-list table tr{line-height:1}
			.pops-folder-list-table__header-row{height:50px;line-height:50px;color:rgb(129, 137, 153);text-align:left;font-size:12px}
			.pops-folder-list-table__header-row{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
			.pops-folder-list-table__body-row{height:50px;line-height:50px;color:#03081a;font-size:12px}
			.pops-folder-list-table__body-row:hover{background:rgb(245, 246, 247, var(--pops-bg-opacity))}
			.pops-folder-list table th{border:0;border-bottom:1px solid rgb(247, 248, 250, var(--pops-bg-opacity))}
			.pops-folder-list table td{border:0;border-bottom:1px solid rgb(247, 248, 250, var(--pops-bg-opacity));position:relative}
			.pops-folder-list .list-name-text{display:inline-block;padding-left:12px;line-height:40px;max-width:176px}
			.pops-folder-list-file-name > div{display:flex;align-items:center;}
			
			.pops-mobile-folder-list-file-name{display:flex;align-items:center}
			.pops-mobile-folder-list-file-name>div {
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: flex-start;
				padding: 6px 0px;
				flex-direction: column;
			}
			.pops-mobile-folder-list-file-name img.pops-folder-list-file-icon{width:45px;height:45px}
			.pops-mobile-folder-list-file-name a.pops-folder-list-file-name-title-text {
				padding-left: unset;
				max-width: 250px;
				overflow-x: hidden;
				font-weight: 400;
				line-height: unset;
				margin-bottom: 4px;
				white-space: normal;
				text-overflow: unset;
			}
		
			/* 修改滚动 */
			.pops-folder-content{overflow: hidden !important}
			.pops-folder-content .pops-folder-list{height: 100%}
			.pops-folder-content .pops-folder-list-table__body-div{height: 100%;padding-bottom: 85px}
			.pops-mobile-folder-content .pops-folder-list-table__body-div{height: 100%;padding-bottom: 40px}
			.pops-folder-content table.pops-folder-list-table__body{overflow: auto}
			.pops-mobile-folder-content .pops-folder-list-table__header-div{display: none}
		
			.pops-folder-list-file-name-title-text:hover{text-decoration:none;color:rgb(6, 167, 255)}
			.pops-folder-list .text-ellip{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
			.pops-folder-list .content{color:rgb(129, 137, 153);position:relative;width:100%;text-align:left}
			.pops-folder-list .inline-block-v-middle{display:inline-block;vertical-align:middle}
			.pops-folder-list .flex-a-i-center{display: flex;align-items: center;}
			.pops-folder-list .u-file-icon{display:inline-block;vertical-align:middle}
			.pops-folder-list .u-file-icon--list{width:32px;height:32px}
			.pops-folder-list .pops-folder-list-file-icon{line-height:1;position:relative;vertical-align:middle}
			.pops-folder-list .pops-folder-file-list-breadcrumb-primary {
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-orient: horizontal;
				-webkit-box-direction: normal;
				-webkit-flex-direction: row;
				-ms-flex-direction: row;
				flex-direction: row;
				min-height: 17px;
				flex-wrap: wrap;
			}
			.pops-folder-list .pops-folder-list-table__sort {
				display: inline-flex;
				margin-left: 4px;
				flex-direction: column;
			}
			
			.pops-folder-list .pops-folder-icon-arrow{
				width: 10px;
				height: 10px;
				fill: rgb(212, 215, 222);
			}
			.pops-folder-list .pops-folder-icon-active{
				fill: rgb(6, 167, 255);
			}
			.pops-folder-list .pops-folder-file-list-breadcrumb {
				padding: 4px 20px;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-orient: horizontal;
				-webkit-box-direction: normal;
				-webkit-flex-direction: row;
				-ms-flex-direction: row;
				flex-direction: row;
				-webkit-box-pack: start;
				-webkit-justify-content: start;
				-ms-flex-pack: start;
				justify-content: flex-start;
				min-height: 35px;
			}
			.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles{font-size:12px;color:#333;line-height:20px;font-weight:700;display:inline-block;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}
			.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:last-child a{color:rgb(153, 153, 153)}
			.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child a{font-size:14px;color:rgb(18, 22, 26)}
			.pops-folder-list .pops-folder-file-list-breadcrumb .iconArrow{width:16px;height:16px}
			.pops-folder-list .iconArrow{
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTOLi4uLi4t7e3uPj49/f397e3t3d3f///97e3vDw8N3d3d7e3t3d3d3d3ejo6N/f397e3t7e3t3d3d/f393d3d3d3RK+NoEAAAAWdFJOUwAnM4YPU/iQA+UIeMDaHhY41i7zX7UebpjFAAAAUElEQVQI15XOORaAIAwE0LATXHCd+x9VfCiksXCq+UUWou8oZ1vXHrt7YVBiYkW4gdMKYFIC4CSATWCNHWPuM6HuHkr1x3N0ZrBu/9gl0b9c3+kF7C7hS1YAAAAASUVORK5CYII=) 55% 50%/6px 9px no-repeat;
			}


			`,
			panelCSS: `
			.pops[type-value=panel]{
				--el-disabled-text-color: #a8abb2;
				--el-disabled-bg-color: #f5f7fa;
				--el-disabled-border-color: #e4e7ed;
				--aside-bg-color: #f2f2f2;
			}
			.pops[type-value] .pops-panel-title{display: flex;align-items: center;justify-content: space-between;}
			
			.pops[type-value=panel] .pops-panel-title{width:100%;height:var(--container-title-height);border-bottom:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));}
			.pops[type-value=panel] .pops-panel-title p[pops]{width:100%;overflow:hidden;color:#333;text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;line-height:var(--container-title-height);}
			.pops[type-value=panel] .pops-panel-content{
				width:100%;
				height: calc(100% - var(--container-title-height) - var(--container-bottom-btn-height));
				overflow: auto;
				word-break:break-word;
			}
			.pops[type-value=panel] .pops-panel-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:var(--container-bottom-btn-height);border-top:1px solid rgb(229, 229, 229, var(--pops-bd-opacity));text-align:right;line-height:var(--container-bottom-btn-height);align-items:center;}
			
			/* ↓panel的CSS↓ */
			aside.pops-panel-aside{overflow:auto;box-sizing:border-box;flex-shrink:0;max-width:200px;height:100%;background:var(--aside-bg-color);border-right:1px solid var(--aside-bg-color);font-size:0.9em;}
			aside.pops-panel-aside{
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
			}
			.pops-panel-content{display:flex;flex-direction:row;flex:1;flex-basis:auto;box-sizing:border-box;min-width:0;bottom:0!important}
			section.pops-panel-container{width:100%;padding:10px;overflow:hidden}
			section.pops-panel-container .pops-panel-container-header-ul,
			section.pops-panel-container .pops-panel-deepMenu-container-header-ul{border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));}
			section.pops-panel-container .pops-panel-container-header-ul li{display: flex;justify-content: flex-start !important;text-align:left;}
			section.pops-panel-container > ul:last-child{overflow: auto;height: calc(100% - 45px);}
			aside.pops-panel-aside ul li{margin:6px 8px;border-radius:4px;padding:6px 10px;cursor:default;display:flex;align-items:center;justify-content:flex-start}
			aside.pops-panel-aside .pops-is-visited,aside.pops-panel-aside ul li:hover{color:rgb(64, 158, 255);background:rgba(64,158,255 ,.1)}
			section.pops-panel-container>ul li{display:flex;justify-content:space-between;align-items:center;margin:10px 20px}
			section.pops-panel-container li.pops-panel-forms-container-item{display:block;margin-top:20px}
			section.pops-panel-container .pops-panel-forms-container-item ul{border-radius:6px;background:var(--aside-bg-color);margin:10px}
			section.pops-panel-container .pops-panel-forms-container-item ul li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 0px;
				padding: 10px 10px;
				border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));
				text-align: left;
			}
			section.pops-panel-container .pops-panel-forms-container-item ul li:last-child{border:0}
			section.pops-panel-container .pops-panel-forms-container-item>div{margin:10px;margin-left:20px;font-size:0.9em;text-align:left;}
			/* 主文字 */
			section.pops-panel-container .pops-panel-forms-container-item .pops-panel-item-left-text .pops-panel-item-left-main-text {
				/* line-height: 2; */
			}
			/* 描述文字 */
			section.pops-panel-container .pops-panel-forms-container-item .pops-panel-item-left-text .pops-panel-item-left-desc-text{
				/* line-height: 1; */
				margin-top: 6px;
				font-size: 0.8em;
				color: rgb(108, 108, 108);
			}
			/* 兼容移动端CSS */
			.pops[type-value="panel"].pops-panel-is-mobile{
				width: 92dvw;
			}
			.pops[type-value="panel"].pops-panel-is-mobile section.pops-panel-container{
				padding: 10px 0px;
			}
			.pops[type-value="panel"].pops-panel-is-mobile .pops-panel-content aside.pops-panel-aside{
				width: 20%;
			}
			.pops[type-value="panel"].pops-panel-is-mobile section.pops-panel-container .pops-panel-forms-container-item>div{
				margin: 5px 10px;
				text-align: left;
			}
			.pops[type-value="panel"].pops-panel-is-mobile section.pops-panel-container .pops-panel-forms-container-item ul{
				margin: 0px !important;
			}
			.pops[type-value="panel"].pops-panel-is-mobile section.pops-panel-container>ul li{
				padding: 10px 10px;
				margin: 0;
			}
			.pops[type-value="panel"].pops-panel-is-mobile section.pops-panel-container >ul > li div:nth-child(2){
				max-width: 55%;
				margin-left: 6px;
				text-align: right;
			}
			.pops[type-value="panel"].pops-panel-is-mobile section.pops-panel-container .pops-panel-select select{
				min-width: 88px !important;
				width: -webkit-fill-available;
				width: -moz-available;
			}
			.pops[type-value="panel"].pops-panel-is-mobile section.pops-panel-container .pops-panel-container-header-ul li{
				font-size: 16px;
			}
			.pops[type-value="panel"].pops-panel-is-mobile .pops-panel-title p[pops],
			.pops[type-value="panel"].pops-panel-is-mobile section.pops-panel-container>ul li,
			.pops[type-value="panel"].pops-panel-is-mobile aside.pops-panel-aside ul li{
				font-size: 14px;
			}
			/* switch的CSS */
			.pops-panel-switch {
				display: inline-flex;
				flex-direction: row-reverse;
				align-items: center;
				position: relative;
				font-size: 14px;
				line-height: 20px;
				height: 32px;
				vertical-align: middle
			}
			.pops-panel-switch input.pops-panel-switch__input {
				position: absolute;
				width: 0;
				height: 0;
				opacity: 0;
				margin: 0
			}
			.pops-panel-switch:has(input.pops-panel-switch__input:disabled),
			.pops-panel-switch[data-disabled],
			.pops-panel-switch[data-disabled] .pops-panel-switch__core,
			.pops-panel-switch input.pops-panel-switch__input:disabled + .pops-panel-switch__core{
				cursor: not-allowed;
				opacity: .6;
			}
			.pops-panel-switch span.pops-panel-switch__core {
				display: inline-flex;
				position: relative;
				align-items: center;
				min-width: 40px;
				height: 20px;
				border: 1px solid rgb(220, 223, 230, var(--pops-bd-opacity));
				outline: 0;
				border-radius: 10px;
				box-sizing: border-box;
				background: rgb(220, 223, 230, var(--pops-bg-opacity));
				cursor: pointer;
				transition: border-color .3s,background-color .3s
			}
			.pops-panel-switch .pops-panel-switch__action {
				position: absolute;
				left: 1px;
				border-radius: 100%;
				transition: all .3s;
				width: 16px;
				height: 16px;
				background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
				display: flex;
				justify-content: center;
				align-items: center;
				color: rgb(220, 223, 230)
			}
			.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core{border-color:rgb(64, 158, 255, var(--pops-bd-opacity));background-color:rgb(64, 158, 255, var(--pops-bg-opacity))}
			.pops-panel-switch.pops-panel-switch-is-checked .pops-panel-switch__action{left:calc(100% - 17px);color:rgb(64, 158, 255)}
			/* switch的CSS */
			
			/* slider旧的CSS */
			section.pops-panel-container .pops-panel-slider:has(>input[type=range]){overflow:hidden;height:25px;line-height:25px;display:flex;align-items:center}
			section.pops-panel-container .pops-panel-slider input[type=range] {
				height: 6px;
				background: rgb(228, 231, 237, var(--pops-bg-opacity));
				outline: 0;
				-webkit-appearance: none;
				appearance: none;
				width: 100%;
			}
			section.pops-panel-container .pops-panel-slider input[type=range]::-webkit-slider-thumb{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));
				background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
				box-shadow: 0 0 2px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2);
				cursor: pointer;
				-webkit-appearance: none;
				appearance: none;
				border-image: linear-gradient(#409eff,#409eff) 0 fill/9 25 9 0/0 0 0 100vw;
			}
			section.pops-panel-container .pops-panel-slider input[type=range]::-moz-range-thumb {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				border: 1px solid rgb(64, 159, 255, var(--pops-bd-opacity));
				background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
				box-shadow: 0 0 2px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2);
				cursor: pointer;
				-webkit-appearance: none;
				appearance: none;
			}
			section.pops-panel-container .pops-panel-slider input[type=range]::-moz-range-progress{
				height: 6px;
				border-image: linear-gradient(#409eff,#409eff) 0 fill/9 25 9 0/0 0 0 100vw;
			}
			/* slider旧的CSS */
			
			/* slider的CSS */
			.pops-slider {
				--pops-slider-color-white: #ffffff;
				--pops-slider-color-primary: #409eff;
				--pops-slider-color-info: #909399;
				--pops-slider-text-color-placeholder: #a8abb2;
				--pops-slider-border-color-light: #e4e7ed;
				--pops-slider-border-radius-circle: 100%;
				--pops-slider-transition-duration-fast: 0.2s;
			
				--pops-slider-main-bg-color: var(--pops-slider-color-primary);
				--pops-slider-runway-bg-color: var(--pops-slider-border-color-light);
				--pops-slider-stop-bg-color: var(--pops-slider-color-white);
				--pops-slider-disabled-color: var(--pops-slider-text-color-placeholder);
				--pops-slider-border-radius: 3px;
				--pops-slider-height: 6px;
				--pops-slider-button-size: 20px;
				--pops-slider-button-wrapper-size: 36px;
				--pops-slider-button-wrapper-offset: -15px;
			}
			
			.pops-slider {
				width: 100%;
				height: 32px;
				display: flex;
				align-items: center;
			}
			
			.pops-slider-width{
				flex: 0 0 52%;
				margin-left: 10px;
			}
			
			.pops-slider__runway {
				flex: 1;
				height: var(--pops-slider-height);
				background-color: var(--pops-slider-runway-bg-color);
				border-radius: var(--pops-slider-border-radius);
				position: relative;
				cursor: pointer;
			}
			
			.pops-slider__runway.show-input {
				margin-right: 30px;
				width: auto;
			}
			
			.pops-slider__runway.pops-slider-is-disabled {
				cursor: default;
			}
			
			.pops-slider__runway.pops-slider-is-disabled .pops-slider__bar {
				background-color: var(--pops-slider-disabled-color);
			}
			
			.pops-slider__runway.pops-slider-is-disabled .pops-slider__button {
				border-color: var(--pops-slider-disabled-color);
			}
			
			.pops-slider__runway.pops-slider-is-disabled
				.pops-slider__button:hover,
			.pops-slider__runway.pops-slider-is-disabled
				.pops-slider__button.hover,
			.pops-slider__runway.pops-slider-is-disabled
				.pops-slider__button.dragging {
				cursor: not-allowed;
			}
			
			.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,
			.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,
			.pops-slider__runway.pops-slider-is-disabled
				.pops-slider__button.dragging {
				transform: scale(1);
			}
			
			.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,
			.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,
			.pops-slider__runway.pops-slider-is-disabled
				.pops-slider__button.dragging {
				cursor: not-allowed;
			}
			
			.pops-slider__input {
				flex-shrink: 0;
				width: 130px;
			}
			
			.pops-slider__bar {
				height: var(--pops-slider-height);
				background-color: var(--pops-slider-main-bg-color);
				border-top-left-radius: var(--pops-slider-border-radius);
				border-bottom-left-radius: var(--pops-slider-border-radius);
				position: absolute;
			}
			
			.pops-slider__button-wrapper {
				height: var(--pops-slider-button-wrapper-size);
				width: var(--pops-slider-button-wrapper-size);
				position: absolute;
				z-index: 1;
				top: var(--pops-slider-button-wrapper-offset);
				transform: translate(-50%);
				background-color: transparent;
				text-align: center;
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				line-height: normal;
				outline: none;
			}
			
			.pops-slider__button-wrapper:after {
				display: inline-block;
				content: "";
				height: 100%;
				vertical-align: middle;
			}
			
			.pops-slider__button:hover,
			.pops-slider__button.hover {
				cursor: grab;
			}
			
			.pops-slider__button {
				display: inline-block;
				width: var(--pops-slider-button-size);
				height: var(--pops-slider-button-size);
				vertical-align: middle;
				border: solid 2px var(--pops-slider-main-bg-color);
				background-color: var(--pops-slider-color-white);
				border-radius: 50%;
				box-sizing: border-box;
				transition: var(--pops-slider-transition-duration-fast);
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
			}
			
			.pops-slider__button:hover,
			.pops-slider__button.hover,
			.pops-slider__button.dragging {
				transform: scale(1.2);
			}
			
			.pops-slider__button:hover,
			.pops-slider__button.hover {
				cursor: grab;
			}
			
			.pops-slider__button.dragging {
				cursor: grabbing;
			}
			
			.pops-slider__stop {
				position: absolute;
				height: var(--pops-slider-height);
				width: var(--pops-slider-height);
				border-radius: var(--pops-slider-border-radius-circle);
				background-color: var(--pops-slider-stop-bg-color);
				transform: translate(-50%);
			}
			
			.pops-slider__marks {
				top: 0;
				left: 12px;
				width: 18px;
				height: 100%;
			}
			
			.pops-slider__marks-text {
				position: absolute;
				transform: translate(-50%);
				font-size: 14px;
				color: var(--pops-slider-color-info);
				margin-top: 15px;
				white-space: pre;
			}
			
			.pops-slider.is-vertical {
				position: relative;
				display: inline-flex;
				width: auto;
				height: 100%;
				flex: 0;
			}
			
			.pops-slider.is-vertical .pops-slider__runway {
				width: var(--pops-slider-height);
				height: 100%;
				margin: 0 16px;
			}
			
			.pops-slider.is-vertical .pops-slider__bar {
				width: var(--pops-slider-height);
				height: auto;
				border-radius: 0 0 3px 3px;
			}
			
			.pops-slider.is-vertical .pops-slider__button-wrapper {
				top: auto;
				left: var(--pops-slider-button-wrapper-offset);
				transform: translateY(50%);
			}
			
			.pops-slider.is-vertical .pops-slider__stop {
				transform: translateY(50%);
			}
			
			.pops-slider.is-vertical .pops-slider__marks-text {
				margin-top: 0;
				left: 15px;
				transform: translateY(50%);
			}
			
			.pops-slider--large {
				height: 40px;
			}
			
			.pops-slider--small {
				height: 24px;
			}
			/* slider的CSS */
			
			/* input的CSS */
			.pops-panel-input{display:flex;align-items:center;border:1px solid #dcdfe6;border-radius:4px;background-color:#ffffff}
			.pops-panel-input:hover{box-shadow:0 0 0 1px #c0c4cc inset}
			.pops-panel-input:has(input:focus){outline:0;border:1px solid #409eff;border-radius:4px;box-shadow:none}
			.pops-panel-input input {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				line-height: 1;
				height: 32px;
				white-space: nowrap;
				cursor: text;
				text-align: center;
				box-sizing: border-box;
				outline: 0;
				transition: .1s;
				font-weight: 500;
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				vertical-align: middle;
				-webkit-appearance: none;
				appearance: none;
				background-color: transparent;
				border: 0;
				padding: 8px 8px;
				font-size: 14px;
				text-align: start;
				width: 100%;
				flex: 1;
			}    
			.pops-panel-input span.pops-panel-input__suffix {
				display: inline-flex;
				white-space: nowrap;
				flex-shrink: 0;
				flex-wrap: nowrap;
				height: 100%;
				text-align: center;
				color: #a8abb2;
				transition: all .3s;
				pointer-events: none;
				margin: 0 8px;
			}    
			.pops-panel-input span.pops-panel-input__suffix-inner{pointer-events:all;display:inline-flex;align-items:center;justify-content:center}
			.pops-panel-input .pops-panel-icon{cursor:pointer}
			.pops-panel-input .pops-panel-icon{height:inherit;line-height:inherit;display:flex;justify-content:center;align-items:center;transition:all .3s}
			.pops-panel-input .pops-panel-icon svg{height:1em;width:1em}
			
			.pops-input-disabled{
				background-color: var(--el-disabled-bg-color);
				box-shadow: 0 0 0 1px var(--el-disabled-border-color) inset;
			}
			.pops-panel-input.pops-input-disabled{
				border: none;
			}
			.pops-panel-input.pops-input-disabled:hover{
				box-shadow: 0 0 0 1px var(--el-disabled-border-color) inset;
			}
			.pops-panel-input input:disabled,
			.pops-panel-input input:disabled + .pops-panel-input__suffix{
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				color: var(--el-disabled-text-color);
				-webkit-text-fill-color: var(--el-disabled-text-color);
				cursor: not-allowed;
			}
			.pops-panel-input input:disabled + .pops-panel-input__suffix{
				display: none;
			}
			/* input的CSS */
			
			/* textarea的CSS */
			.pops-panel-textarea textarea {
				width: 100%;
				vertical-align: bottom;
				position: relative;
				display: block;
				resize: none;
				padding: 5px 11px;
				line-height: 1;
				box-sizing: border-box;
				font-size: inherit;
				font-family: inherit;
				background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
				background-image: none;
				-webkit-appearance: none;
				appearance: none;
				box-shadow: 0 0 0 1px #dcdfe6 inset;
				border-radius: 0;
				transition: box-shadow .2s cubic-bezier(.645, .045, .355, 1);
				border: none;
			}
			.pops-panel-textarea textarea:hover{box-shadow:0 0 0 1px #c0c4cc inset}
			.pops-panel-textarea-disable .pops-panel-textarea textarea:hover{box-shadow:none}
			.pops-panel-textarea textarea:focus{outline:0;box-shadow:0 0 0 1px #409eff inset}
			/* textarea的CSS */
			
			/* select的CSS */
			.pops-panel-select select {
				height: 32px;
				line-height: 32px;
				min-width: 200px;
				border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
				border-radius: 5px;
				text-align: center;
				outline: 0;
				background: rgb(255, 255, 255, var(--pops-bg-opacity));
				box-shadow: none;
			}    
			.pops-panel-select select:hover{box-shadow:0 0 0 1px #c0c4cc inset}
			.pops-panel-select-disable .pops-panel-select select:hover{box-shadow:none}
			.pops-panel-select select:focus{border:1px solid rgb(64, 158, 255, var(--pops-bd-opacity));box-shadow:none}
			/* select的CSS */
			
			/* deepMenu的css */
			.pops-panel-deepMenu-nav-item{
				cursor: pointer;
			}
			.pops-panel-deepMenu-nav-item:active{
				background: #e9e9e9;
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
			}
			.pops-panel-deepMenu-nav-item .pops-panel-deepMenu{
				display: flex;
				align-items: center;
				color: #6c6c6c;
				fill: #6c6c6c;
			}
			.pops-panel-deepMenu-nav-item .pops-panel-deepMenu-arrowRight-icon{
				width: 15px;
				height: 15px;
				display: flex;
    			align-items: center;
			}
			.pops-panel-deepMenu-container .pops-panel-deepMenu-container-header{
				display: flex;
    			align-items: center;
				width: -webkit-fill-available;
				width: -moz-available;
				padding: 10px 10px 10px 5px;
			}
			.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon{
				width: 20px;
				height: 20px;
				display: flex;
    			align-items: center;
				cursor: pointer;
			}
			/* deepMenu的css */
			`,
			tooltipCSS: `
			.pops-tip {
				--tooltip-color: #4e4e4e;
				--tooltip-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
				--tooltip-bd-radius: 2px;
				--tooltip-font-size: 14px;
				--tooltip-padding-top: 13px;
				--tooltip-padding-right: 13px;
				--tooltip-padding-bottom: 13px;
				--tooltip-padding-left: 13px;
			
			
				--tooltip-arrow--after-color: rgb(78, 78, 78);
				--tooltip-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
				--tooltip-arrow--after-width: 12px;
				--tooltip-arrow--after-height: 12px;
				
				position: absolute;
				padding: var(--tooltip-padding-top) var(--tooltip-padding-right) var(--tooltip-padding-bottom) var(--tooltip-padding-left);
				max-width: 400px;
				max-height: 300px;
				border-radius: var(--tooltip-bd-radius);
				background-color: var(--tooltip-bg-color);
				box-shadow: 0 1.5px 4px rgba(0,0,0,.24),0 1.5px 6px rgba(0,0,0,.12);
				color: var(--tooltip-color);
				font-size: var(--tooltip-font-size);
			}
			/* github的样式 */
			.pops-tip.github-tooltip{
				--tooltip-bg-opacity: 1;
				--tooltip-color: rgb(255, 255, 255);
				--tooltip-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));
				--tooltip-bd-radius: 6px;
				--tooltip-padding-top: 6px;
				--tooltip-padding-right: 8px;
				--tooltip-padding-bottom: 6px;
				--tooltip-padding-left: 8px;
			
				--tooltip-arrow--after-color: rgb(255, 255, 255);
				--tooltip-arrow--after-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));
				--tooltip-arrow--after-width: 8px;
				--tooltip-arrow--after-height: 8px;
			}
			.pops-tip .pops-tip-arrow {
				position: absolute;
				top: 100%;
				left: 50%;
				overflow: hidden;
				width: 100%;
				height: 12.5px;
				transform: translateX(-50%);
			}
			
			.pops-tip .pops-tip-arrow::after {
				position: absolute;
				top: 0;
				left: 50%;
				width: var(--tooltip-arrow--after-width);
				height: var(--tooltip-arrow--after-height);
				background: var(--tooltip-arrow--after-bg-color);
				color: var(--tooltip-arrow--after-color);
				box-shadow: 0 1px 7px rgba(0,0,0,.24),0 1px 7px rgba(0,0,0,.12);
				content: "";
				transform: translateX(-50%) translateY(-50%) rotate(45deg);
			}
			
			.pops-tip .pops-tip-arrow[data-position=bottom] {
				position: absolute;
				top: 100%;
				left: 50%;
				overflow: hidden;
				width: 100%;
				height: 12.5px;
				transform: translateX(-50%);
			}
			
			.pops-tip .pops-tip-arrow[data-position=bottom]:after {
				position: absolute;
				top: 0;
				left: 50%;
				width: var(--tooltip-arrow--after-width);
				height: var(--tooltip-arrow--after-height);
				background: var(--tooltip-arrow--after-bg-color);
				box-shadow: 0 1px 7px rgba(0,0,0,.24),0 1px 7px rgba(0,0,0,.12);
				content: "";
				transform: translateX(-50%) translateY(-50%) rotate(45deg);
			}
			
			.pops-tip .pops-tip-arrow[data-position=left] {
				top: 50%;
				left: -12.5px;
				width: 12.5px;
				height: 50px;
				transform: translateY(-50%);
			}
			
			.pops-tip .pops-tip-arrow[data-position=left]:after {
				position: absolute;
				top: 50%;
				left: 100%;
				content: "";
			}
			
			.pops-tip .pops-tip-arrow[data-position=right] {
				top: 50%;
				right: -12.5px;
				left: auto;
				width: 12.5px;
				height: 50px;
				transform: translateY(-50%);
			}
			
			.pops-tip .pops-tip-arrow[data-position=right]:after {
				position: absolute;
				top: 50%;
				left: 0;
				content: "";
			}
			
			.pops-tip .pops-tip-arrow[data-position=top] {
				top: -12.5px;
				left: 50%;
				transform: translateX(-50%);
			}
			
			.pops-tip .pops-tip-arrow[data-position=top]:after {
				position: absolute;
				top: 100%;
				left: 50%;
				content: "";
			}
			
			.pops-tip[data-motion]{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}
			.pops-tip[data-motion=fadeOutRight]{-webkit-animation-name:pops-motion-fadeOutRight;animation-name:pops-motion-fadeOutRight;}
			.pops-tip[data-motion=fadeInTop]{-webkit-animation-name:pops-motion-fadeInTop;animation-name:pops-motion-fadeInTop;animation-timing-function:cubic-bezier(.49,.49,.13,1.3);}
			.pops-tip[data-motion=fadeOutTop]{-webkit-animation-name:pops-motion-fadeOutTop;animation-name:pops-motion-fadeOutTop;animation-timing-function:cubic-bezier(.32,.37,.06,.87);}
			.pops-tip[data-motion=fadeInBottom]{-webkit-animation-name:pops-motion-fadeInBottom;animation-name:pops-motion-fadeInBottom;}
			.pops-tip[data-motion=fadeOutBottom]{-webkit-animation-name:pops-motion-fadeOutBottom;animation-name:pops-motion-fadeOutBottom;}
			.pops-tip[data-motion=fadeInLeft]{-webkit-animation-name:pops-motion-fadeInLeft;animation-name:pops-motion-fadeInLeft;}
			.pops-tip[data-motion=fadeOutLeft]{-webkit-animation-name:pops-motion-fadeOutLeft;animation-name:pops-motion-fadeOutLeft;}
			.pops-tip[data-motion=fadeInRight]{-webkit-animation-name:pops-motion-fadeInRight;animation-name:pops-motion-fadeInRight;}
			
			`,
		},
		/** icon图标的svg代码 */
		iconSVG: {
			min: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>
			</svg>`,
			mise: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z"></path>
			</svg>`,
			max: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>
			</svg>`,
			close: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
			</svg>`,
			edit: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>
				<path
				fill="currentColor"
				d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>
			</svg>`,
			share: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>
			</svg>`,
			delete: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
			</svg>
			`,
			search: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path>
			</svg>`,
			upload: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>
			</svg>`,
			loading: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>
			</svg>`,
			next: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
			</svg>`,
			prev: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>
			</svg>`,
			eleme: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>
			</svg>`,
			elemePlus: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"
				fill="currentColor"></path>
			</svg>`,
			chromeFilled: `
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1024 1024"
				xml:space="preserve">
				<path
				d="M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"
				fill="currentColor"></path>
				<path
				d="M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"
				fill="currentColor"></path>
				<path
				d="M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zM512.01 938.68H512zM414.76 701.95a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"
				fill="currentColor"></path>
			</svg>`,
			cpu: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>
				<path
				fill="currentColor"
				d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>
			</svg>`,
			videoPlay: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>
			</svg>`,
			videoPause: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>
			</svg>`,
			headset: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>
			</svg>`,
			monitor: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>
			</svg>`,
			documentCopy: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>
			</svg>`,
			picture: `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>
				<path
				fill="currentColor"
				d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>
			</svg>`,
			circleClose: `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
				<path
				fill="currentColor"
				d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>
				<path
				fill="currentColor"
				d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>
			</svg>`,
			view: `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
				<path                        
				fill="currentColor"
				d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>
			</svg>`,
			hide: `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
				<path
				fill="currentColor"
				d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>
				<path
				fill="currentColor"
				d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>
			</svg>`,
			keyboard: `
			<svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
				<path
				d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
				<path
				d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
			</svg>`,
			arrowRight: `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path></svg>
			`,
			arrowLeft: `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path></svg>
			`,
		},
		/**
		 * 动画名
		 * @type {string[]}
		 */
		animation: [],
		/**
		 * 是否已初始化
		 */
		isInit: false,
		/**
		 * 存储已创建的元素
		 */
		layer: {
			/**
			 * 存储已创建的pops.alert
			 * @type { PopsLayerCommonConfig[] }
			 */
			alert: [],
			/**
			 * 存储已创建的pops.confirm
			 * @type { PopsLayerCommonConfig[] }
			 */
			confirm: [],
			/**
			 * 存储已创建的pops.prompt
			 * @type { PopsLayerCommonConfig[] }
			 */
			prompt: [],
			/**
			 * 存储已创建的pops.loading
			 * @type { PopsLayerCommonConfig[] }
			 */
			loading: [],
			/**
			 * 存储已创建的pops.iframe
			 * @type { PopsLayerConfig[] }
			 */
			iframe: [],
			/**
			 * 存储已创建的pops.tooltip
			 * @type { PopsLayerCommonConfig[] }
			 */
			tooltip: [],
			/**
			 * 存储已创建的pops.drawer
			 * @type { PopsLayerCommonConfig[] }
			 */
			drawer: [],
			/**
			 * 存储已创建的pops.folder
			 * @type { PopsLayerCommonConfig[] }
			 */
			folder: [],
			/**
			 * 存储已创建的pops.panel
			 * @type { PopsLayerCommonConfig[] }
			 */
			panel: [],
		},
		forbiddenScroll: {
			// @ts-ignore
			event(event) {
				event.preventDefault();
				return false;
			},
		},
		Utils: PopsUtils,
		DOMUtils: PopsDOMUtils,
	};

	/**
	 * 释放原有的pops控制权
	 * @example
	 * let pops = window.pops.noConflict()
	 */
	pops.noConflict = function () {
		// @ts-ignore
		if (window.pops) {
			// @ts-ignore
			delete window.pops;
		}
		if (AnotherPops) {
			// @ts-ignore
			window.pops = AnotherPops;
		}
		return pops;
	};

	/**
	 * 初始化CSS、动画
	 */
	pops.init = function () {
		if (!this.config.isInit) {
			/* 处理获取当前所有的动画名 */
			this.config.isInit = true;
			let animationStyle = document.createElement("style");
			animationStyle.innerHTML = this.config.cssText.anim;
			(document.head || document.body || document.documentElement).appendChild(
				animationStyle
			);
			// @ts-ignore
			this.config.animation = PopsUtils.getKeyFrames(animationStyle.sheet);
			setTimeout(() => {
				animationStyle.remove();
			}, 50);
		}
	};

	/**
	 * 通过navigator.userAgent判断是否是手机访问
	 * @param {string} userAgent
	 * @returns {boolean}
	 */
	pops.isPhone = function (userAgent = navigator.userAgent) {
		return Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(userAgent));
	};

	const PopsHandler = {
		/**
		 * 创建shadow
		 */
		handlerShadow() {
			let $shadowContainer = document.createElement("div");
			$shadowContainer.className = "pops-shadow-container";
			let $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
			return {
				$shadowContainer,
				$shadowRoot,
			};
		},
		/**
		 * 处理初始化
		 * @param {ShadowRoot} $shadowRoot
		 * @param {string[]|string} cssText
		 */
		handleInit($shadowRoot, cssText) {
			pops.init();
			if (!arguments.length) {
				return;
			}
			if (Array.isArray(cssText)) {
				cssText.forEach((text) => {
					this.handleInit($shadowRoot, text);
				});
			} else {
				let cssStyle = document.createElement("style");
				cssStyle.setAttribute("type", "text/css");
				cssStyle.innerHTML = cssText;
				$shadowRoot.appendChild(cssStyle);
			}
		},
		/**
		 * 处理遮罩层
		 * @param {?{
		 * type: "alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer"|"folder"|"panel",
		 * guid: string,
		 * config: PopsAlertDetails,
		 * animElement: HTMLElement,
		 * maskHTML: string,
		 * }} details
		 * @returns { {
		 * maskElement: HTMLDivElement
		 * } }
		 */
		// @ts-ignore
		handleMask(details = {}) {
			let result = {
				// @ts-ignore
				maskElement: PopsUtils.parseTextToDOM(details.maskHTML),
			};
			let isMaskClick = false;
			/**
			 * 点击其它区域的事件
			 * @param {Event} event
			 * @returns
			 */
			function clickEvent(event) {
				event?.preventDefault();
				event?.stopPropagation();
				event?.stopImmediatePropagation();
				// @ts-ignore
				let targetLayer = pops.config.layer[details.type];
				function originalRun() {
					// @ts-ignore
					if (details.config.mask.clickEvent.toClose) {
						/* 关闭 */
						PopsUtils.close(
							// @ts-ignore
							details.type,
							targetLayer,
							// @ts-ignore
							details.guid,
							// @ts-ignore
							details.config,
							// @ts-ignore
							details.animElement
						);
						// @ts-ignore
					} else if (details.config.mask.clickEvent.toHide) {
						/* 隐藏 */
						PopsUtils.hide(
							// @ts-ignore
							details.type,
							targetLayer,
							// @ts-ignore
							details.guid,
							// @ts-ignore
							details.config,
							// @ts-ignore
							details.animElement,
							result.maskElement
						);
					}
				}
				// @ts-ignore
				if (details.config.mask.clickCallBack) {
					// @ts-ignore
					details.config.mask.clickCallBack(originalRun);
				} else {
					originalRun();
				}
				return false;
			}
			// @ts-ignore
			function isAnimElement(element) {
				return Boolean(
					element?.localName?.toLowerCase() === "div" &&
						element.className &&
						element.className === "pops-anim" &&
						element.hasAttribute("anim")
				);
			}
			if (
				// @ts-ignore
				details.config.mask.clickEvent.toClose ||
				// @ts-ignore
				details.config.mask.clickEvent.toHide
			) {
				/* 判断按下的元素是否是pops-anim */
				// @ts-ignore
				PopsDOMUtils.on(
					// @ts-ignore
					details.animElement,
					["touchstart", "mousedown"],
					void 0,
					function (event) {
						isMaskClick = isAnimElement(event.composedPath()[0]);
					}
				);
				/* 如果有动画层，在动画层上监听点击事件 */
				// @ts-ignore
				PopsDOMUtils.on(details.animElement, "click", void 0, function (event) {
					if (isAnimElement(event.composedPath()[0]) && isMaskClick) {
						return clickEvent(event);
					}
				});
				/* 在遮罩层监听点击事件 */
				/* 如果有动画层，那么该点击事件触发不了 */
				// @ts-ignore
				PopsDOMUtils.on(result.maskElement, "click", void 0, (event) => {
					isMaskClick = true;
					clickEvent(event);
				});
			}
			// @ts-ignore
			return result;
		},
		/**
		 * 处理获取元素
		 * @param {HTMLDivElement} animElement
		 * @param {"alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer"|"folder"|"panel"} type
		 */
		handleQueryElement(animElement, type) {
			return {
				/**
				 * 主元素
				 * @type {?HTMLElement}
				 */
				popsElement: animElement.querySelector(".pops[type-value"),
				/**
				 * 确认按钮
				 * @type {?HTMLElement}
				 */
				btnOkElement: animElement.querySelector(`.pops-${type}-btn-ok`),
				/**
				 * 取消按钮
				 * @type {?HTMLElement}
				 */
				btnCancelElement: animElement.querySelector(`.pops-${type}-btn-cancel`),
				/**
				 * 其它按钮
				 * @type {?HTMLElement}
				 */
				btnOtherElement: animElement.querySelector(`.pops-${type}-btn-other`),
				/**
				 * 标题元素
				 * @type {?HTMLElement}
				 */
				titleElement: animElement.querySelector(`.pops-${type}-title`),
				/**
				 * 输入框元素
				 * @type {?HTMLTextAreaElement|HTMLInputElement}
				 */
				inputElement: animElement.querySelector(
					`.pops-${type}-content textarea[pops]`
				)
					? animElement.querySelector(`.pops-${type}-content textarea[pops]`)
					: animElement.querySelector(`.pops-${type}-content input[pops]`),
				/**
				 * 顶部按钮控制层元素
				 * @type {?HTMLElement}
				 */
				headerControlsElement: animElement.querySelector(
					".pops-header-controls"
				),
				/**
				 * iframe元素
				 * @type {?HTMLIFrameElement}
				 */
				iframeElement: animElement.querySelector("iframe[pops]"),
				/**
				 * 加载中元素
				 * @type {?HTMLElement}
				 */
				loadingElement: animElement.querySelector(".pops-loading"),
				/**
				 * 内容元素
				 * @type {?HTMLElement}
				 */
				contentElement: animElement.querySelector(`.pops-${type}-content`),
				/**
				 * 内容侧边栏容器元素
				 * @type {?HTMLElement}
				 */
				contentAsideElement: animElement.querySelector(
					`.pops-${type}-content aside.pops-${type}-aside`
				),
				/**
				 * 内容主要区域容器元素
				 * @type {?HTMLElement}
				 */
				contentSectionContainerElement: animElement.querySelector(
					`.pops-${type}-content section.pops-${type}-container`
				),
				/**
				 * 内容加载中元素
				 * @type {?HTMLElement}
				 */
				contentLoadingElement: animElement.querySelector(
					`.pops-${type}-content-global-loading`
				),
				/**
				 * 顶部缩小按钮
				 * @type {?HTMLElement}
				 */
				headerMinBtnElement: animElement.querySelector(
					".pops-header-control[type='min']"
				),
				/**
				 * 顶部放大按钮
				 * @type {?HTMLElement}
				 */
				headerMaxBtnElement: animElement.querySelector(
					".pops-header-control[type='max']"
				),
				/**
				 * 顶部恢复原样按钮
				 * @type {?HTMLElement}
				 */
				headerMiseBtnElement: animElement.querySelector(
					".pops-header-control[type='mise']"
				),
				/**
				 * 顶部关闭按钮
				 * @type {?HTMLElement}
				 */
				headerCloseBtnElement: animElement.querySelector(
					".pops-header-control[type='close']"
				),
				/**
				 * 文件夹列表元素
				 * @type {?HTMLElement}
				 */
				folderListElement: animElement.querySelector(".pops-folder-list"),
				/**
				 * 文件夹列表顶部元素
				 * @type {?HTMLElement}
				 */
				folderListHeaderElement: animElement.querySelector(
					".pops-folder-list .pops-folder-list-table__header-div"
				),
				/**
				 * 文件夹列表行元素
				 * @type {?HTMLTableRowElement}
				 */
				folderListHeaderRowElement: animElement.querySelector(
					".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"
				),
				/**
				 * 文件夹列表tbody元素
				 * @type {?HTMLTableElement}
				 */
				folderListBodyElement: animElement.querySelector(
					".pops-folder-list .pops-folder-list-table__body-div tbody"
				),
				/**
				 * 文件夹列表primary元素
				 * @type {?HTMLElement}
				 */
				folderFileListBreadcrumbPrimaryElement: animElement.querySelector(
					".pops-folder-list .pops-folder-file-list-breadcrumb-primary"
				),
				/**
				 * 文件夹排序按钮-文件名
				 */
				folderListSortFileNameElement: animElement.querySelector(
					'.pops-folder-list-table__sort[data-sort="fileName"]'
				),
				/**
				 * 文件夹排序按钮-修改时间
				 */
				folderListSortLatestTimeElement: animElement.querySelector(
					'.pops-folder-list-table__sort[data-sort="latestTime"]'
				),
				/**
				 * 文件夹排序按钮-文件大小
				 */
				folderListSortFileSizeElement: animElement.querySelector(
					'.pops-folder-list-table__sort[data-sort="fileSize"]'
				),
			};
		},
		/**
		 * 获取事件配置
		 * @param {string} guid
		 * @param {HTMLDivElement} $shadowContainer
		 * @param {ShadowRoot} $shadowRoot
		 * @param {"alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer"|"folder"|"panel"} mode 当前弹窗类型
		 * @param {HTMLDivElement} animElement 动画层
		 * @param {HTMLDivElement} popsElement 主元素
		 * @param {HTMLDivElement} maskElement 遮罩层
		 * @param {object} config 当前配置
		 */
		handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			mode,
			animElement,
			popsElement,
			maskElement,
			config
		) {
			return {
				$shadowContainer: $shadowContainer,
				$shadowRoot: $shadowRoot,
				element: animElement,
				animElement: animElement,
				popsElement: popsElement,
				maskElement: maskElement,
				type: "",
				mode: mode,
				guid: guid,
				close() {
					PopsUtils.close(
						mode,
						pops.config.layer[mode],
						guid,
						// @ts-ignore
						config,
						animElement
					);
				},
				hide() {
					PopsUtils.hide(
						// @ts-ignore
						mode,
						pops.config.layer[mode],
						guid,
						config,
						animElement,
						maskElement
					);
				},
				show() {
					PopsUtils.show(
						// @ts-ignore
						mode,
						pops.config.layer[mode],
						guid,
						config,
						animElement,
						maskElement
					);
				},
			};
		},
		/**
		 * 处理返回的配置，针对popsHandler.handleEventDetails
		 * @returns { {
		 * $shadowContainer: HTMLDivElement,
		 * $shadowRoot: ShadowRoot,
		 * animElement: HTMLElement,
		 * popsElement: HTMLElement,
		 * maskElement: HTMLElement,
		 * close: ()=> void,
		 * hide: ()=> void,
		 * show: ()=> void,
		 * } }
		 */
		// @ts-ignore
		handleResultDetails(details) {
			let _details_ = Object.assign({}, details);
			delete _details_["type"];
			delete _details_["function"];
			delete _details_["type"];
			return _details_;
		},
		/**
		 * 处理点击事件
		 * @param {HTMLElement} btnElement 按钮元素
		 * @param {"ok"|"close"|"cancel"|"other"} type 触发事件类型
		 * @param {object} event 事件配置，由popsHandler.handleEventDetails创建的
		 * @param {(event:(PointerEvent|MouseEvent) & {
		 * type: "cancel" | "close" | "ok" | "other",
		 * })=>{}} callback 点击回调
		 */
		handleClickEvent(btnElement, type, event, callback) {
			PopsDOMUtils.on(
				btnElement,
				"click",
				void 0,
				function () {
					let _event_ = {
						type: type,
					};
					_event_ = Object.assign(event, _event_);
					// @ts-ignore
					callback(_event_);
				},
				{
					capture: true,
				}
			);
		},
		/**
		 * 全局监听键盘事件
		 * @param {string|number} keyName 键名|键值
		 * @param {?string[]} otherKeyList 组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
		 * @param {(event:Event)=> void} callback 回调函数
		 */
		handleKeyboardEvent(keyName, otherKeyList = [], callback) {
			// @ts-ignore
			let keyboardEvent = function (event) {
				let _keyName = event.code || event.key;
				let _keyValue = event.charCode || event.keyCode || event.which;
				// @ts-ignore
				if (otherKeyList.includes("ctrl") && !event.ctrlKey) {
					return;
				}
				// @ts-ignore
				if (otherKeyList.includes("alt") && !event.altKey) {
					return;
				}
				// @ts-ignore
				if (otherKeyList.includes("meta") && !event.metaKey) {
					return;
				}
				// @ts-ignore
				if (otherKeyList.includes("shift") && !event.shiftKey) {
					return;
				}
				if (typeof keyName === "string" && keyName === _keyName) {
					callback && callback(event);
				} else if (typeof keyName === "number" && keyName === _keyValue) {
					callback && callback(event);
				}
			};
			// @ts-ignore
			PopsDOMUtils.on(globalThis, "keydown", void 0, keyboardEvent, {
				capture: true,
			});
			return {
				removeKeyboardEvent() {
					// @ts-ignore
					PopsDOMUtils.off(globalThis, "keydown", void 0, keyboardEvent, {
						capture: true,
					});
				},
			};
		},
		/**
		 * 处理prompt的点击事件
		 * @param {HTMLInputElement} inputElement 输入框
		 * @param {HTMLElement} btnElement 按钮元素
		 * @param {"ok"|"close"} type 触发事件类型
		 * @param {object} event 事件配置，由popsHandler.handleEventDetails创建的
		 * @param {(event: (MouseEvent |PointerEvent) & {
		 * type: any,
		 * text: string,
		 * })=>void} callback 点击回调
		 */
		handlePromptClickEvent(inputElement, btnElement, type, event, callback) {
			PopsDOMUtils.on(
				btnElement,
				"click",
				void 0,
				function () {
					let _event_ = {
						type: type,
						text: inputElement.value,
					};
					_event_ = Object.assign(event, _event_);
					// @ts-ignore
					callback(_event_);
				},
				{
					capture: true,
				}
			);
		},
		/**
		 * 处理config.only
		 * @param {"alert"|"confirm"|"prompt"|"loading"|"tooltip"|"iframe"|"drawer"|"folder"|"rightClickMenu"} type 当前弹窗类型
		 * @param {object} config 配置
		 * @returns {object}
		 */
		handleOnly(type, config) {
			// @ts-ignore
			if (config.only) {
				if (
					type === "loading" ||
					type === "tooltip" ||
					type === "rightClickMenu"
				) {
					// @ts-ignore
					PopsUtils.configRemove([pops.config.layer[type]], "", true);
				} else {
					PopsUtils.configRemove(
						[
							pops.config.layer.alert,
							pops.config.layer.confirm,
							pops.config.layer.prompt,
							pops.config.layer.iframe,
							pops.config.layer.drawer,
							pops.config.layer.folder,
							pops.config.layer.panel,
						],
						"",
						true
					);
				}
			} else {
				// @ts-ignore
				config.zIndex = PopsUtils.getPopsMaxZIndex(config.zIndex)["zIndex"] * 2;
			}
			return config;
		},
		/**
		 * 处理把已创建的元素保存到内部环境中
		 * @param {"alert"|"confirm"|"prompt"|"loading"|"tooltip"|"iframe"|"drawer"|"folder"|"panel"} type 当前弹窗类型
		 * @param {PopsLayerCommonConfig} value
		 */
		handlePush(type, value) {
			pops.config.layer[type].push(value);
		},
	};

	const PopsElementHandler = {
		/**
		 * 获取遮罩层HTML
		 * @param {string} guid
		 * @param {number} zIndex z-index
		 * @param {string} [style=""] style
		 * @returns {string}
		 */
		getMaskHTML(guid, zIndex, style = "") {
			zIndex = zIndex - 100;
			return `<div class="pops-mask" data-guid="${guid}" style="z-index:${zIndex};${style}"></div>`;
		},
		/**
		 * 获取动画层HTML
		 * @param {string} guid
		 * @param {"alert"|"confirm"|"iframe"|"loading"|"prompt"|"drawer"|"folder"|"panel"} type
		 * @param {object} config
		 * @param {string} html
		 * @param {string} bottomBtnHTML
		 */
		getAnimHTML(guid, type, config, html = "", bottomBtnHTML = "") {
			let popsAnimStyle = "";
			let popsStyle = "";
			// @ts-ignore
			let popsPosition = config.position || "";
			// @ts-ignore
			if (config.zIndex != null) {
				// @ts-ignore
				popsAnimStyle += `z-index: ${config.zIndex};`;
				// @ts-ignore
				popsStyle += `z-index: ${config.zIndex};`;
			}
			// @ts-ignore
			if (config.width != null) {
				// @ts-ignore
				popsStyle += `width: ${config.width};`;
			}
			// @ts-ignore
			if (config.height != null) {
				// @ts-ignore
				popsStyle += `height: ${config.height};`;
			}
			/* 是否存在底部按钮 */
			let hasBottomBtn = bottomBtnHTML.trim() === "" ? false : true;
			return `<div 
                  class="pops-anim"
                  anim="${
										// @ts-ignore
										config.animation || ""
									}"
                  style="${popsAnimStyle};"
                  data-guid="${guid}">
                ${
									// @ts-ignore
									config.style != null
										? // @ts-ignore
										  `<style tyle="text/css">${config.style}</style>`
										: ""
								}
                <div
                    class="pops ${
											// @ts-ignore
											config.class || ""
										}"
                    data-bottom-btn="${hasBottomBtn}"
                    type-value="${type}"
                    style="${popsStyle}"
                    position="${popsPosition}"
                    data-guid="${guid}">
                    ${html}
                </div>
              </div>`;
		},
		/**
		 * 获取顶部按钮层HTML
		 * @param {"alert"|"confirm"|"iframe"|"prompt"|"drawer"|"folder"|"panel"} type
		 * @param {PopsIframeDetails} config
		 * @returns {string}
		 */
		getHeaderBtnHTML(type, config) {
			if (!config.btn) {
				return "";
			}
			// @ts-ignore
			if (type !== "iframe" && !config.btn?.close?.enable) {
				return "";
			}
			let resultHTML = "";
			// @ts-ignore
			// @ts-ignore
			let btnStyle = "";
			let closeHTML = "";
			if (type === "iframe" && config.topRightButton?.trim() !== "") {
				/* iframe的 */
				let topRightButtonHTML = "";
				config.topRightButton.split("|").forEach((item) => {
					item = item.toLowerCase();
					topRightButtonHTML += `
          <button class="pops-header-control" type="${item}">
            <i class="pops-icon">${
							// @ts-ignore
							pops.config.iconSVG[item]
						}</i>
          </button>`;
				});
				resultHTML = `
        <div class="pops-header-controls" data-margin>
            ${topRightButtonHTML}
          </div>`;
			} else {
				// @ts-ignore
				if (config.btn?.close?.enable) {
					closeHTML = `
          <div class="pops-header-controls">
            <button class="pops-header-control" type="close" data-header>
              <i class="pops-icon">${pops.config.iconSVG["close"]}</i>
            </button>
          </div>`;
				}
				resultHTML = closeHTML;
			}

			return resultHTML;
		},
		/**
		 * 获取底部按钮层HTML
		 * @param {"alert"|"confirm"|"prompt"|"drawer"|"folder"} type
		 * @param {Required<PopsConfirmDetails>|Required<PopsAlertDetails>|Required<PopsPromptDetails>|Required<PopsDrawerDetails>} config
		 * @returns {string}
		 */
		getBottomBtnHTML(type, config) {
			if (!config.btn) {
				return "";
			}
			if (
				!(
					config.btn?.ok?.enable ||
					// @ts-ignore
					config.btn?.cancel?.enable ||
					// @ts-ignore
					config.btn?.other?.enable
				)
			) {
				return "";
			}
			let btnStyle = "";
			let resultHTML = "";
			let okHTML = "";
			let cancelHTML = "";
			let ohterHTML = "";

			if (config.btn.position) {
				btnStyle += `justify-content: ${config.btn.position};`;
			}
			// @ts-ignore
			if (config.btn.reverse) {
				btnStyle += "flex-direction: row-reverse;";
			}
			if (config.btn?.ok?.enable) {
				/* 处理确定按钮的尺寸问题 */
				let okButtonSizeClassName = "";
				if (config.btn.ok.size === "large") {
					okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
				} else if (config.btn.ok.size === "small") {
					okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
				}
				let okIconHTML = "";
				// @ts-ignore
				if (config.btn.ok.icon !== "") {
					okIconHTML = `
          <i class="pops-bottom-icon" is-loading="${
						config.btn.ok.iconIsLoading
					}">
            ${
							// @ts-ignore
							config.btn.ok.icon in pops.config.iconSVG
								? // @ts-ignore
								  pops.config.iconSVG[config.btn.ok.icon]
								: config.btn.ok.icon
						}
          </i>`;
				}
				okHTML = `
        <button 
                class="pops-${type}-btn-ok ${okButtonSizeClassName}"
                type="${config.btn.ok.type}"
                data-icon="${config.btn.ok.icon}"
                data-rightIcon="${config.btn.ok.rightIcon}"
        >
          ${okIconHTML}
          <span>${config.btn.ok.text}</span>
        </button>`;
			}
			// @ts-ignore
			if (config.btn?.cancel?.enable) {
				/* 处理取消按钮的尺寸问题 */
				let cancelButtonSizeClassName = "";
				// @ts-ignore
				if (config.btn.cancel.size === "large") {
					// @ts-ignore
					cancelButtonSizeClassName = "pops-button-" + config.btn.cancel.size;
					// @ts-ignore
				} else if (config.btn.cancel.size === "small") {
					// @ts-ignore
					cancelButtonSizeClassName = "pops-button-" + config.btn.cancel.size;
				}
				let cancelIconHTML = "";
				// @ts-ignore
				if (config.btn.cancel.icon !== "") {
					cancelIconHTML = `
          <i class="pops-bottom-icon" is-loading="${
						// @ts-ignore
						config.btn.cancel.iconIsLoading
					}">
          ${
						// @ts-ignore
						config.btn.cancel.icon in pops.config.iconSVG
							? // @ts-ignore
							  pops.config.iconSVG[config.btn.cancel.icon]
							: // @ts-ignore
							  config.btn.cancel.icon
					}
          </i>`;
				}
				cancelHTML = `
        <button
                class="pops-${type}-btn-cancel ${cancelButtonSizeClassName}"
                type="${
									// @ts-ignore
									config.btn.cancel.type
								}"
                data-icon="${
									// @ts-ignore
									config.btn.cancel.icon
								}"
                data-rightIcon="${
									// @ts-ignore
									config.btn.cancel.rightIcon
								}"
        >
          ${cancelIconHTML}
          <span>${
						// @ts-ignore
						config.btn.cancel.text
					}</span>
        </button>`;
			}
			// @ts-ignore
			if (config.btn?.other?.enable) {
				/* 处理其它按钮的尺寸问题 */
				let otherButtonSizeClassName = "";
				// @ts-ignore
				if (config.btn.other.size === "large") {
					// @ts-ignore
					otherButtonSizeClassName = "pops-button-" + config.btn.other.size;
					// @ts-ignore
				} else if (config.btn.other.size === "small") {
					// @ts-ignore
					otherButtonSizeClassName = "pops-button-" + config.btn.other.size;
				}
				let otherIconHTML = "";
				// @ts-ignore
				if (config.btn.other.icon !== "") {
					otherIconHTML = `
          <i class="pops-bottom-icon" is-loading="${
						// @ts-ignore
						config.btn.other.iconIsLoading
					}">
          ${
						// @ts-ignore
						config.btn.other.icon in pops.config.iconSVG
							? // @ts-ignore
							  pops.config.iconSVG[config.btn.other.icon]
							: // @ts-ignore
							  config.btn.other.icon
					}
          </i>`;
				}
				ohterHTML = `
        <button
                class="pops-${type}-btn-other ${otherButtonSizeClassName}"
                type="${
									// @ts-ignore
									config.btn.other.type
								}"
                data-icon="${
									// @ts-ignore
									config.btn.other.icon
								}"
                data-rightIcon="${
									// @ts-ignore
									config.btn.other.rightIcon
								}"
        >
          ${otherIconHTML}
          <span>${
						// @ts-ignore
						config.btn.other.text
					}</span>
        </button>`;
			}
			// @ts-ignore
			if (config.btn.merge) {
				resultHTML = `
        <div class="pops-${type}-btn" style="${btnStyle}">
          ${ohterHTML}
          <div 
              class="pops-${type}-btn-merge"
              style="display: flex;
                    flex-direction: ${
											// @ts-ignore
											config.btn.mergeReverse ? "row-reverse" : "row"
										};
          ">
            ${okHTML}
            ${cancelHTML}
          </div>
        </div>
        `;
			} else {
				resultHTML = `
        <div class="pops-${type}-btn" style="${btnStyle}">
          ${okHTML}
          ${cancelHTML}
          ${ohterHTML}
        </div>
        `;
			}
			return resultHTML;
		},
		/**
		 * 获取标题style
		 * @param {"alert"|"confirm"|"prompt"|"drawer"|"folder"|"panel"} type
		 * @param {PopsAlertDetails|PopsConfirmDetails|PopsPromptDetails|PopsDrawerDetails} config
		 */
		// @ts-ignore
		// @ts-ignore
		getHeaderStyle(type, config) {
			return {
				// @ts-ignore
				headerStyle: config?.title?.html ? config?.title?.style || "" : "",
				// @ts-ignore
				headerPStyle: config?.title?.html ? "" : config?.title?.style || "",
			};
		},
		/**
		 * 获取内容style
		 * @param {"alert"|"confirm"|"prompt"|"drawer"} type
		 * @param {PopsAlertDetails|PopsConfirmDetails|PopsPromptDetails|PopsDrawerDetails} config
		 */
		// @ts-ignore
		// @ts-ignore
		getContentStyle(type, config) {
			return {
				// @ts-ignore
				contentStyle: config?.content?.html ? config?.content?.style || "" : "",
				// @ts-ignore
				contentPStyle: config?.content?.html
					? ""
					: config?.content?.style || "",
			};
		},
		/**
		 * 将html转换成元素
		 * @param {string} html
		 * @returns {HTMLElement}
		 */
		parseElement(html) {
			return PopsUtils.parseTextToDOM(html);
		},
	};

	/**
	 * 普通信息框
	 * @param { PopsAlertDetails } details 配置
	 */
	pops.alert = function (details) {
		// @ts-ignore
		// @ts-ignore
		let that = this;
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.alertCSS,
		]);
		/**
		 * @type {Required<PopsAlertDetails>}
		 */
		let config = {
			title: {
				text: "默认标题",
				position: "left",
				html: false,
				style: "",
			},
			content: {
				text: "默认内容",
				html: false,
				style: "",
			},
			btn: {
				position: "flex-end",
				ok: {
					// @ts-ignore
					size: "",
					enable: true,
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "确定",
					type: "primary",
					callback: function (event) {
						event.close();
					},
				},
				close: {
					enable: true,
					callback: function (event) {
						event.close();
					},
				},
			},
			class: "",
			only: false,
			width: "350px",
			height: "200px",
			position: "center",
			animation: "pops-anim-fadein-zoom",
			zIndex: 10000,
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},
				// @ts-ignore
				clickCallBack: null,
			},
			drag: false,
			dragLimit: true,
			dragExtraDistance: 3,
			dragMoveCallBack() {},
			dragEndCallBack() {},
			forbiddenScroll: false,
			// @ts-ignore
			style: void 0,
			beforeAppendToPageCallBack() {},
		};
		config = PopsUtils.assignJSON(config, details);
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "alert";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);

		// @ts-ignore
		let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
		// @ts-ignore
		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			PopsType,
			config
		);
		let { contentStyle, contentPStyle } = PopsElementHandler.getContentStyle(
			PopsType,
			config
		);
		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			`
      <div 
          class="pops-alert-title"
          style="text-align: ${config.title.position};
          ${headerStyle}">
          ${
						config.title.html
							? config.title.text
							: `<p pops style="${headerPStyle}">${config.title.text}</p>`
					}
          ${headerBtnHTML}
      </div>
      <div class="pops-alert-content" style="${contentStyle}">
          ${
						config.content.html
							? config.content.text
							: `<p pops style="${contentPStyle}">${config.content.text}</p>`
					}
      </div>
      ${bottomBtnHTML}`,
			bottomBtnHTML
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let animElement = PopsElementHandler.parseElement(animHTML);

		let {
			popsElement,
			headerCloseBtnElement: btnCloseElement,
			btnOkElement,
			titleElement,
			// @ts-ignore
		} = PopsHandler.handleQueryElement(animElement, PopsType);
		/**
		 * 遮罩层元素
		 * @type {?HTMLDivElement}
		 */
		let maskElement = null;
		/**
		 * 已创建的元素列表
		 * @type {HTMLElement[]}
		 */
		let elementList = [animElement];

		/* 遮罩层元素 */
		// @ts-ignore
		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				config: config,
				animElement: animElement,
				maskHTML: maskHTML,
			});
			maskElement = _handleMask_.maskElement;
			elementList.push(maskElement);
		}
		/* 处理返回的配置 */
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			// @ts-ignore
			animElement,
			popsElement,
			maskElement,
			config
		);
		/* 为顶部右边的关闭按钮添加点击事件 */
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnCloseElement,
			"close",
			eventDetails,
			// @ts-ignore
			config.btn.close.callback
		);
		/* 为底部ok按钮添加点击事件 */
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnOkElement,
			"ok",
			eventDetails,
			// @ts-ignore
			config.btn.ok.callback
		);

		/* 创建到页面中 */
		// @ts-ignore
		PopsUtils.appendChild($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		// @ts-ignore
		PopsUtils.appendChild($shadowContainer);
		if (maskElement != null) {
			animElement.after(maskElement);
		}
		/* 保存 */
		PopsHandler.handlePush(PopsType, {
			guid: guid,
			// @ts-ignore
			animElement: animElement,
			// @ts-ignore
			popsElement: popsElement,
			// @ts-ignore
			maskElement: maskElement,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		/* 拖拽 */
		if (config.drag) {
			// @ts-ignore
			PopsUtils.drag(popsElement, {
				dragElement: titleElement,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}

		return PopsHandler.handleResultDetails(eventDetails);
	};

	/**
	 * 询问框
	 * @param {PopsConfirmDetails} details
	 */
	pops.confirm = function (details) {
		// @ts-ignore
		// @ts-ignore
		let that = this;
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.confirmCSS,
		]);
		/**
		 * @type {Required<PopsConfirmDetails>}
		 */
		let config = {
			title: {
				text: "默认标题",
				position: "left",
				html: false,
				style: "",
			},
			content: {
				text: "默认内容",
				html: false,
				style: "",
			},
			btn: {
				merge: false,
				mergeReverse: false,
				reverse: false,
				position: "flex-end",
				ok: {
					enable: true,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "确定",
					type: "primary",
					callback(event) {
						event.close();
					},
				},
				cancel: {
					enable: true,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "关闭",
					type: "default",
					callback(event) {
						event.close();
					},
				},
				other: {
					enable: false,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "其它按钮",
					type: "default",
					callback(event) {
						event.close();
					},
				},
				close: {
					enable: true,
					callback(event) {
						event.close();
					},
				},
			},
			class: "",
			only: false,
			width: "350px",
			height: "200px",
			position: "center",
			animation: "pops-anim-fadein-zoom",
			zIndex: 10000,
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},
				// @ts-ignore
				clickCallBack: null,
			},
			drag: false,
			dragLimit: true,
			dragExtraDistance: 3,
			dragMoveCallBack() {},
			dragEndCallBack() {},
			forbiddenScroll: false,
			// @ts-ignore
			style: void 0,
			beforeAppendToPageCallBack() {},
		};
		config = PopsUtils.assignJSON(config, details);
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "confirm";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);
		// @ts-ignore
		let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
		// @ts-ignore
		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			PopsType,
			config
		);
		let { contentStyle, contentPStyle } = PopsElementHandler.getContentStyle(
			PopsType,
			config
		);
		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			`
    <div class="pops-confirm-title" style="text-align: ${
			config.title.position
		};${headerStyle}">
					${
						config.title.html
							? config.title.text
							: `<p pops style="${headerPStyle}">${config.title.text}</p>`
					}
          ${headerBtnHTML}
				</div>
				<div class="pops-confirm-content" style="${contentStyle}">
        ${
					config.content.html
						? config.content.text
						: `<p pops style="${contentPStyle}">${config.content.text}</p>`
				}
          
				</div>
				${bottomBtnHTML}
    `,
			bottomBtnHTML
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let animElement = PopsElementHandler.parseElement(animHTML);
		let {
			popsElement,
			titleElement,
			headerCloseBtnElement: btnCloseElement,
			btnOkElement,
			btnCancelElement,
			btnOtherElement,
			// @ts-ignore
		} = PopsHandler.handleQueryElement(animElement, PopsType);
		/**
		 * 遮罩层元素
		 * @type {?HTMLDivElement}
		 */
		let maskElement = null;
		/**
		 * 已创建的元素列表
		 * @type {HTMLElement[]}
		 */
		let elementList = [animElement];
		// @ts-ignore
		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				config: config,
				animElement: animElement,
				maskHTML: maskHTML,
			});
			maskElement = _handleMask_.maskElement;
			elementList.push(maskElement);
		}
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			// @ts-ignore
			animElement,
			popsElement,
			maskElement,
			config
		);
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnCloseElement,
			"close",
			eventDetails,
			// @ts-ignore
			config.btn.close.callback
		);
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnOkElement,
			"ok",
			eventDetails,
			// @ts-ignore
			config.btn.ok.callback
		);
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnCancelElement,
			"cancel",
			eventDetails,
			// @ts-ignore
			config.btn.cancel.callback
		);
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnOtherElement,
			"other",
			eventDetails,
			// @ts-ignore
			config.btn.other.callback
		);

		/* 创建到页面中 */
		// @ts-ignore
		PopsUtils.appendChild($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		// @ts-ignore
		PopsUtils.appendChild($shadowContainer);
		if (maskElement != null) {
			animElement.after(maskElement);
		}
		PopsHandler.handlePush(PopsType, {
			guid: guid,
			// @ts-ignore
			animElement: animElement,
			// @ts-ignore
			popsElement: popsElement,
			// @ts-ignore
			maskElement: maskElement,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		/* 拖拽 */
		if (config.drag) {
			0;
			// @ts-ignore
			PopsUtils.drag(popsElement, {
				dragElement: titleElement,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		return PopsHandler.handleResultDetails(eventDetails);
	};

	/**
	 * 输入框
	 * @param {PopsPromptDetails} details
	 */
	pops.prompt = function (details) {
		// @ts-ignore
		// @ts-ignore
		let that = this;
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.promptCSS,
		]);
		/**
		 * @type {Required<PopsPromptDetails>}
		 */
		let config = {
			title: {
				text: "默认标题",
				position: "left",
				html: false,
				style: "",
			},
			content: {
				text: "",
				password: false,
				row: false,
				focus: true,
				placeholder: "默认提示",
				style: "",
			},
			btn: {
				merge: false,
				mergeReverse: false,
				reverse: false,
				position: "flex-end",
				ok: {
					enable: true,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "确定",
					type: "success",
					callback(event) {
						console.log(event);
						event.close();
					},
				},
				cancel: {
					enable: true,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "关闭",
					type: "default",
					callback(event) {
						console.log(event);
						event.close();
					},
				},
				other: {
					enable: false,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "其它按钮",
					type: "default",
					callback(event) {
						console.log(event);
						event.close();
					},
				},
				close: {
					enable: true,
					callback(event) {
						console.log(event);
						event.close();
					},
				},
			},
			class: "",
			only: false,
			width: "350px",
			height: "200px",
			position: "center",
			animation: "pops-anim-fadein-zoom",
			zIndex: 10000,
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},
				// @ts-ignore
				clickCallBack: null,
			},
			drag: false,
			dragLimit: true,
			dragExtraDistance: 3,
			dragMoveCallBack() {},
			dragEndCallBack() {},
			forbiddenScroll: false,
			// @ts-ignore
			style: void 0,
			beforeAppendToPageCallBack() {},
		};
		config = PopsUtils.assignJSON(config, details);
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "prompt";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);
		// @ts-ignore
		let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
		// @ts-ignore
		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			PopsType,
			config
		);
		let { contentPStyle } = PopsElementHandler.getContentStyle(
			PopsType,
			config
		);
		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			`
    <div class="pops-prompt-title" style="text-align: ${
			config.title.position
		};${headerStyle}">
      ${
				config.title.html
					? config.title.text
					: `<p pops style="${headerPStyle}">${config.title.text}</p>`
			}
      ${headerBtnHTML}
    </div>
    <div class="pops-prompt-content" style="${contentPStyle}">
    ${
			config.content.row
				? '<textarea pops="" placeholder="' +
				  config.content.placeholder +
				  '"></textarea>'
				: '<input pops="" placeholder="' +
				  config.content.placeholder +
				  '" type="' +
				  (config.content.password ? "password" : "text") +
				  '">'
		}
    </div>
   ${bottomBtnHTML}
    `,
			bottomBtnHTML
		);
		/**
		 * 弹窗的主元素，包括动画层
		 * @type {HTMLDivElement}
		 */
		// @ts-ignore
		let animElement = PopsElementHandler.parseElement(animHTML);

		let {
			popsElement,
			inputElement,
			headerCloseBtnElement: btnCloseElement,
			btnOkElement,
			btnCancelElement,
			btnOtherElement,
			titleElement,
		} = PopsHandler.handleQueryElement(animElement, PopsType);
		/**
		 * 遮罩层元素
		 * @type {?HTMLDivElement}
		 */
		let maskElement = null;

		/**
		 * 已创建的元素列表
		 * @type {HTMLElement[]}
		 */
		let elementList = [animElement];
		// @ts-ignore
		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				config: config,
				animElement: animElement,
				maskHTML: maskHTML,
			});
			maskElement = _handleMask_.maskElement;
			elementList.push(maskElement);
		}
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			animElement,
			// @ts-ignore
			popsElement,
			maskElement,
			config
		);
		/* 输入框赋值初始值 */
		// @ts-ignore
		inputElement.value = config.content.text;
		PopsHandler.handlePromptClickEvent(
			// @ts-ignore
			inputElement,
			btnCloseElement,
			"close",
			eventDetails,
			// @ts-ignore
			config.btn.close.callback
		);

		PopsHandler.handlePromptClickEvent(
			// @ts-ignore
			inputElement,
			btnOkElement,
			"ok",
			eventDetails,
			// @ts-ignore
			config.btn.ok.callback
		);
		PopsHandler.handlePromptClickEvent(
			// @ts-ignore
			inputElement,
			btnCancelElement,
			"cancel",
			eventDetails,
			// @ts-ignore
			config.btn.cancel.callback
		);

		PopsHandler.handlePromptClickEvent(
			// @ts-ignore
			inputElement,
			btnOtherElement,
			"other",
			eventDetails,
			// @ts-ignore
			config.btn.other.callback
		);
		/* 创建到页面中 */
		// @ts-ignore
		PopsUtils.appendChild($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		// @ts-ignore
		PopsUtils.appendChild($shadowContainer);
		if (maskElement != null) {
			animElement.after(maskElement);
		}
		PopsHandler.handlePush(PopsType, {
			guid: guid,
			animElement: animElement,
			// @ts-ignore
			popsElement: popsElement,
			// @ts-ignore
			maskElement: maskElement,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		/* 拖拽 */
		if (config.drag) {
			// @ts-ignore
			PopsUtils.drag(popsElement, {
				dragElement: titleElement,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		/* 设置自动获取焦点 */
		if (config.content.focus) {
			inputElement?.focus();
		}

		return PopsHandler.handleResultDetails(eventDetails);
	};

	/**
	 * 加载层
	 * @param {PopsLoadingDetails} details
	 */
	pops.loading = function (details) {
		// @ts-ignore
		// @ts-ignore
		let that = this;
		// @ts-ignore
		PopsHandler.handleInit();
		/**
		 * @type {Required<PopsLoadingDetails>}
		 */
		let config = {
			parent: document.body,
			content: {
				text: "加载中...",
				icon: "loading",
				style: "",
			},
			class: "",
			only: false,
			zIndex: 10000,
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},
				// @ts-ignore
				clickCallBack: null,
			},
			animation: "pops-anim-fadein-zoom",
			forbiddenScroll: false,
			// @ts-ignore
			style: void 0,
			addIndexCSS: true,
		};
		config = PopsUtils.assignJSON(config, details);
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "loading";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);
		// @ts-ignore
		let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
		// @ts-ignore
		let { contentPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			`
    <div class="pops-loading-content">
    ${
			config.addIndexCSS
				? `
        <style type="text/css" data-model-name="index">${pops.config.cssText.index}</style>
        <style type="text/css" data-model-name="anim">${pops.config.cssText.anim}</style>
        <style type="text/css" data-model-name="common">${pops.config.cssText.common}</style>
        `
				: ""
		}
      <style type="text/css" data-model-name="loadingCSS">${
				pops.config.cssText.loadingCSS
			}</style>
      ${
				config.style != null
					? `<style type="text/css">${config.style}</style>`
					: ""
			}
      <p pops style="${contentPStyle}">${config.content.text}</p>
    </div>
    `,
			""
		);

		/**
		 * 弹窗的主元素，包括动画层
		 * @type {HTMLDivElement}
		 */
		// @ts-ignore
		let animElement = PopsElementHandler.parseElement(animHTML);

		let { popsElement } = PopsHandler.handleQueryElement(animElement, PopsType);
		/**
		 * 遮罩层元素
		 * @type {?HTMLDivElement}
		 */
		let maskElement = null;
		/**
		 * 已创建的元素列表
		 * @type {HTMLElement[]}
		 */
		let elementList = [animElement];
		// @ts-ignore
		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				// @ts-ignore
				config: config,
				animElement: animElement,
				maskHTML: maskHTML,
			});
			maskElement = _handleMask_.maskElement;
			elementList.push(maskElement);
		}
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			// @ts-ignore
			void 0,
			void 0,
			PopsType,
			animElement,
			popsElement,
			maskElement,
			config
		);
		PopsUtils.appendChild(config.parent, elementList);
		if (maskElement != null) {
			animElement.after(maskElement);
		}
		PopsHandler.handlePush(PopsType, {
			guid: guid,
			animElement: animElement,
			// @ts-ignore
			popsElement: popsElement,
			// @ts-ignore
			maskElement: maskElement,
		});

		return PopsHandler.handleResultDetails(eventDetails);
	};

	/**
	 * iframe层
	 * @param {PopsIframeDetails} details
	 */
	pops.iframe = function (details) {
		let that = this;
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.iframeCSS,
		]);
		/**
		 * @type {Required<PopsIframeDetails>}
		 */
		let config = {
			title: {
				position: "center",
				text: "",
				html: false,
				style: "",
			},
			loading: {
				enable: true,
				icon: true,
				text: "",
				// @ts-ignore
				style: "",
			},
			class: "",
			url: window.location.href,
			only: false,
			zIndex: 10000,
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},
				// @ts-ignore
				clickCallBack: null,
			},
			animation: "pops-anim-fadein-zoom",
			position: "center",
			drag: false,
			dragLimit: true,
			dragExtraDistance: 3,
			dragMoveCallBack() {},
			dragEndCallBack() {},
			width: "300px",
			height: "250px",
			topRightButton: "min|max|mise|close",
			sandbox: false,
			forbiddenScroll: false,
			loadEndCallBack() {},
			btn: {
				min: {
					callback() {},
				},
				max: {
					callback() {},
				},
				mise: {
					callback() {},
				},
				close: {
					callback() {},
				},
			},
			// @ts-ignore
			style: void 0,
			beforeAppendToPageCallBack() {},
		};
		config = PopsUtils.assignJSON(config, details);
		if (config.url == null) {
			throw "config.url不能为空";
		}
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "iframe";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);
		let maskExtraStyle =
			// @ts-ignore
			config.animation != null && config.animation != ""
				? "position:absolute;"
				: "";
		let maskHTML = PopsElementHandler.getMaskHTML(
			guid,
			// @ts-ignore
			config.zIndex,
			maskExtraStyle
		);
		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let iframeLoadingHTML = '<div class="pops-loading"></div>';
		let titleText =
			// @ts-ignore
			config.title.text.trim() !== "" ? config.title.text : config.url;
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			// @ts-ignore
			PopsType,
			config
		);
		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			`
      <div 
          class="pops-iframe-title"
          style="text-align: ${config.title.position};${headerStyle}"
      >
        ${
					config.title.html
						? titleText
						: `<p pops style="${headerPStyle}">${titleText}</p>`
				}
        ${headerBtnHTML}
      </div>
				<div class="pops-iframe-content">
          <div class="pops-iframe-content-global-loading"></div>
          <iframe
                src="${config.url}"
                pops
                ${
									config.sandbox
										? "sandbox='allow-forms allow-same-origin allow-scripts'"
										: ""
								}>
          </iframe>
        </div>
        ${config.loading.enable ? iframeLoadingHTML : ""}
    `,
			""
		);
		/**
		 * 弹窗的主元素，包括动画层
		 * @type {HTMLDivElement}
		 */
		// @ts-ignore
		let animElement = PopsElementHandler.parseElement(animHTML);
		let {
			popsElement,
			headerCloseBtnElement,
			headerControlsElement,
			titleElement,
			iframeElement,
			loadingElement,
			contentLoadingElement,
			headerMinBtnElement,
			headerMaxBtnElement,
			headerMiseBtnElement,
		} = PopsHandler.handleQueryElement(animElement, PopsType);
		/**
		 * 遮罩层元素
		 * @type {?HTMLDivElement}
		 */
		let maskElement = null;
		/**
		 * 已创建的元素列表
		 * @type {HTMLElement[]}
		 */
		let elementList = [animElement];
		// @ts-ignore
		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				// @ts-ignore
				config: config,
				animElement: animElement,
				maskHTML: maskHTML,
			});
			maskElement = _handleMask_.maskElement;
			elementList.push(maskElement);
		}

		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			animElement,
			// @ts-ignore
			popsElement,
			maskElement,
			config
		);
		// @ts-ignore
		eventDetails["iframeElement"] = iframeElement;
		// @ts-ignore
		PopsDOMUtils.on(
			animElement,
			PopsDOMUtils.getAnimationEndNameList(),
			void 0,
			function () {
				/* 动画加载完毕 */
				animElement.style.width = "0%";
				animElement.style.height = "0%";
			}
		);

		// @ts-ignore
		PopsDOMUtils.on(iframeElement, "load", void 0, function () {
			/* iframe加载中... */
			loadingElement?.remove();
			// @ts-ignore
			contentLoadingElement.style.animation =
				"iframeLoadingChange_85 0.3s forwards";
			// @ts-ignore
			PopsDOMUtils.on(
				contentLoadingElement,
				PopsDOMUtils.getAnimationEndNameList(),
				void 0,
				function () {
					/* 动画加载完毕就移除 */
					// @ts-ignore
					contentLoadingElement.remove();
				}
			);
			// @ts-ignore
			if (config.title.text.trim() === "" && iframeElement.contentDocument) {
				/* 同域名下的才可以获取网页标题 */
				// @ts-ignore
				titleElement.querySelector("p").innerText =
					// @ts-ignore
					iframeElement.contentDocument.title;
			}
			// @ts-ignore
			config.loadEndCallBack(eventDetails);
		});
		/* 创建到页面中 */
		// @ts-ignore
		PopsUtils.appendChild($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		// @ts-ignore
		PopsUtils.appendChild($shadowContainer);
		if (maskElement != null) {
			animElement.after(maskElement);
		}
		/* 拖拽 */
		if (config.drag) {
			// @ts-ignore
			PopsUtils.drag(popsElement, {
				dragElement: titleElement,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		let normalLeft = "";
		/* 最小化按钮点击事件 */

		PopsDOMUtils.on(
			// @ts-ignore
			headerMinBtnElement,
			"click",
			void 0,
			(event) => {
				/**
				 * 所有最小化的iframe数组
				 * @type { HTMLElement[] }
				 */
				let allMinElementList = [];

				pops.config.layer.iframe.forEach((item) => {
					if (
						item.animElement != animElement &&
						item.popsElement.getAttribute("type-module") === "min"
					) {
						allMinElementList.push(item.popsElement);
					}
				});
				let maxLeftValue = allMinElementList.length
					? allMinElementList.length * 205
					: 0;
				// @ts-ignore
				popsElement.style.transitionDuration = "";
				// @ts-ignore
				normalLeft = popsElement.style.left;
				// @ts-ignore
				popsElement.style.left = maxLeftValue + "px";
				// @ts-ignore
				popsElement.setAttribute("type-module", "min");
				// @ts-ignore
				animElement
					.querySelector(".pops-header-controls")
					.setAttribute("type", "max");
				// @ts-ignore
				config.btn.min.callback(event);
			},
			{
				capture: true,
			}
		);
		/* 最大化按钮点击事件 */
		PopsDOMUtils.on(
			// @ts-ignore
			headerMaxBtnElement,
			"click",
			void 0,
			(event) => {
				// @ts-ignore
				popsElement.style.transitionDuration = "";
				// @ts-ignore
				normalLeft = popsElement.style.left;
				// @ts-ignore
				popsElement.removeAttribute("type-module");
				// @ts-ignore
				popsElement.setAttribute("type-module", "max");
				// @ts-ignore
				headerControlsElement.setAttribute("type", "max");
				// @ts-ignore
				headerMaxBtnElement.style.setProperty("display", "none");
				// @ts-ignore
				headerMiseBtnElement.style.setProperty("display", "");
				// @ts-ignore
				config.btn.max.callback(event);
			},
			{
				capture: true,
			}
		);
		/* 先隐藏窗口化按钮 */
		headerMiseBtnElement?.style?.setProperty("display", "none");
		/* 窗口化按钮点击事件 */
		PopsDOMUtils.on(
			// @ts-ignore
			headerMiseBtnElement,
			"click",
			void 0,
			(event) => {
				// @ts-ignore
				popsElement.style.transitionDuration = "";
				// @ts-ignore
				popsElement.style.left = normalLeft;
				// @ts-ignore
				headerControlsElement.removeAttribute("type");
				// @ts-ignore
				popsElement.removeAttribute("type-module");
				/**
				 * 所有最小化的iframe数组
				 * @type { HTMLElement[] }
				 */
				let allMinElementList = [];
				pops.config.layer.iframe.forEach((item) => {
					if (
						item.animElement != animElement &&
						// @ts-ignore
						popsElement.getAttribute("type-module") === "min"
					) {
						allMinElementList.push(item.popsElement);
					}
				});
				allMinElementList.sort(
					PopsUtils.sortElementListByProperty(
						(obj) => {
							return parseInt(getComputedStyle(obj).left);
						},
						(obj) => {
							return parseInt(getComputedStyle(obj).left);
						},
						false
					)
				);
				allMinElementList.forEach((item, index) => {
					item.style.left = index * 205 + "px";
				});
				// @ts-ignore
				headerMiseBtnElement.style.setProperty("display", "none");
				// @ts-ignore
				headerMaxBtnElement.style.setProperty("display", "");
				// @ts-ignore
				config.btn.mise.callback(event);
			},
			{
				capture: true,
			}
		);
		/* 关闭按钮点击事件 */
		PopsDOMUtils.on(
			// @ts-ignore
			headerCloseBtnElement,
			"click",
			void 0,
			(event) => {
				PopsUtils.configRemove([that.config.layer.iframe], guid, false);
				setTimeout(() => {
					// @ts-ignore
					let allIsMinElementList = [];
					pops.config.layer.iframe.forEach((item) => {
						if (
							item.animElement != animElement &&
							// @ts-ignore
							popsElement.getAttribute("type-module") === "min"
						) {
							allIsMinElementList.push(item.popsElement);
						}
					});
					// @ts-ignore
					allIsMinElementList.sort(
						PopsUtils.sortElementListByProperty(
							(obj) => {
								return parseInt(getComputedStyle(obj).left);
							},
							(obj) => {
								return parseInt(getComputedStyle(obj).left);
							},
							false
						)
					);
					// @ts-ignore
					allIsMinElementList.forEach((item, index) => {
						item.style.left = index * 205 + "px";
					});
				}, 1000 * 0.3);
				// @ts-ignore
				config.btn.close.callback(event);
			},
			{
				capture: true,
			}
		);

		PopsHandler.handlePush(PopsType, {
			guid: guid,
			animElement: animElement,
			// @ts-ignore
			popsElement: popsElement,
			// @ts-ignore
			maskElement: maskElement,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});

		let result = PopsHandler.handleResultDetails(eventDetails);
		return result;
	};

	/**
	 * 提示框
	 * @param {PopsToolTipDetails} details
	 */
	pops.tooltip = function (details) {
		// @ts-ignore
		// @ts-ignore
		let that = this;
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.tooltipCSS,
		]);
		/**
		 * @type {Required<PopsToolTipDetails>}
		 */
		let config = {
			// @ts-ignore
			target: null,
			content: "默认文字",
			// @ts-ignore
			position: "top",
			className: "",
			alwaysShow: false,
			triggerShowEventName: "mouseenter touchstart",
			triggerCloseEventName: "mouseleave touchend",
			zIndex: 10000,
			only: false,
			eventOption: {
				passive: false,
				capture: true,
				once: false,
			},
			showBeforeCallBack() {},
			showAfterCallBack() {},
			closeBeforeCallBack() {},
			closeAfterCallBack() {},
			arrowDistance: 12.5,
			otherDistance: 0,
			// @ts-ignore
			style: void 0,
			beforeAppendToPageCallBack() {},
		};
		config = PopsUtils.assignJSON(config, details);
		if (!(config.target instanceof HTMLElement)) {
			throw "config.target 必须是HTMLElement类型";
		}
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "tooltip";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);
		function getContent() {
			return typeof config.content === "function"
				? // @ts-ignore
				  config.content()
				: config.content;
		}
		/**
		 * 获取悬浮提示的元素信息
		 */
		function getToolTipElementInfo() {
			let _toolTipHTML_ = `<div class="pops-tip"></div>`;
			let _toolTipElement_ = PopsUtils.parseTextToDOM(_toolTipHTML_);
			if (
				typeof config.className === "string" &&
				config.className.trim() !== ""
			) {
				PopsDOMUtils.addClassName(_toolTipElement_, config.className);
			}
			_toolTipElement_.setAttribute("data-guid", guid);
			// @ts-ignore
			_toolTipElement_.style.zIndex = config.zIndex;
			_toolTipElement_.innerHTML = `
      <div style="text-align: center;">${getContent()}</div>
      `;
			/* 箭头元素 */
			let _toolTipArrowHTML_ = '<div class="pops-tip-arrow"></div>';
			let _toolTipArrowNode_ = PopsUtils.parseTextToDOM(_toolTipArrowHTML_);
			_toolTipElement_.appendChild(_toolTipArrowNode_);
			if (config.style != null) {
				/* 添加自定义style */
				let cssNode = document.createElement("style");
				cssNode.setAttribute("type", "text/css");
				cssNode.innerHTML = config.style;
				_toolTipElement_.appendChild(cssNode);
			}
			return {
				toolTipElement: _toolTipElement_,
				toolTipArrowElement: _toolTipArrowNode_,
				toolTipHTML: _toolTipHTML_,
				toolTipArrowHTML: _toolTipArrowHTML_,
			};
		}
		// @ts-ignore
		config.position = config.position.toLowerCase();
		let { toolTipElement } = getToolTipElementInfo();

		/**
		 * 设置 提示框的位置
		 * @param {object} positionDetails
		 */
		function setToolTipPosition(positionDetails) {
			// @ts-ignore
			let positionDetail = positionDetails[config.position.toUpperCase()];
			if (positionDetail) {
				toolTipElement.style.left = positionDetail.left + "px";
				toolTipElement.style.top = positionDetail.top + "px";
				toolTipElement.setAttribute("data-motion", positionDetail.motion);
				// @ts-ignore
				toolTipElement
					.querySelector(".pops-tip-arrow")
					.setAttribute("data-position", positionDetail.arrow);
			} else {
				console.error("不存在该位置", config.position);
			}
		}

		/**
		 * 获取 提示框的位置
		 * @param {HTMLElement} targetElement 目标元素
		 * @param {number} arrowDistance 箭头和目标元素的距离
		 * @param {number} otherDistance 其它位置的偏移
		 */
		function getToolTipPosition(targetElement, arrowDistance, otherDistance) {
			let targetElement_width = PopsDOMUtils.offset(targetElement).width;
			let targetElement_height = PopsDOMUtils.offset(targetElement).height;
			let targetElement_top = PopsDOMUtils.offset(targetElement).top;
			// @ts-ignore
			// @ts-ignore
			let targetElement_bottom = PopsDOMUtils.offset(targetElement).bottom;
			let targetElement_left = PopsDOMUtils.offset(targetElement).left;
			// @ts-ignore
			// @ts-ignore
			let targetElement_right = PopsDOMUtils.offset(targetElement).right;

			let toolTipElement_width = PopsDOMUtils.outerWidth(toolTipElement);
			let toolTipElement_height = PopsDOMUtils.outerHeight(toolTipElement);
			/* 目标元素的x轴的中间位置 */
			let targetElement_X_center_pos =
				targetElement_left + targetElement_width / 2 - toolTipElement_width / 2;
			/* 目标元素的Y轴的中间位置 */
			let targetElement_Y_center_pos =
				targetElement_top +
				targetElement_height / 2 -
				toolTipElement_height / 2;
			return {
				TOP: {
					left: targetElement_X_center_pos - otherDistance,
					top: targetElement_top - toolTipElement_height - arrowDistance,
					arrow: "bottom",
					motion: "fadeInTop",
				},
				RIGHT: {
					left: targetElement_left + targetElement_width + arrowDistance,
					top: targetElement_Y_center_pos + otherDistance,
					arrow: "left",
					motion: "fadeInRight",
				},
				BOTTOM: {
					left: targetElement_X_center_pos - otherDistance,
					top: targetElement_top + targetElement_height + arrowDistance,
					arrow: "top",
					motion: "fadeInBottom",
				},
				LEFT: {
					left: targetElement_left - toolTipElement_width - arrowDistance,
					top: targetElement_Y_center_pos + otherDistance,
					arrow: "right",
					motion: "fadeInLeft",
				},
			};
		}
		/**
		 * 显示提示框
		 */
		function showToolTipNode() {
			if (typeof config.showBeforeCallBack === "function") {
				let result = config.showBeforeCallBack();
				if (typeof result === "boolean" && !result) {
					return;
				}
			}
			// @ts-ignore
			if (!PopsUtils.contains($shadowRoot, toolTipElement)) {
				// @ts-ignore
				PopsUtils.appendChild($shadowRoot, toolTipElement);
			}
			// @ts-ignore
			if (!PopsUtils.contains($shadowContainer)) {
				if (typeof config.beforeAppendToPageCallBack === "function") {
					config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
				}
				// @ts-ignore
				PopsUtils.appendChild($shadowContainer);
			}
			setToolTipPosition(
				getToolTipPosition(
					config.target,
					config.arrowDistance,
					config.otherDistance
				)
			);
			if (typeof config.showAfterCallBack === "function") {
				config.showAfterCallBack(toolTipElement);
			}
		}
		/**
		 * 关闭提示框
		 */
		function closeToolTipNode() {
			if (typeof config.closeBeforeCallBack === "function") {
				let result = config.closeBeforeCallBack(toolTipElement);
				if (typeof result === "boolean" && !result) {
					return;
				}
			}
			toolTipElement.setAttribute(
				"data-motion",
				// @ts-ignore
				toolTipElement.getAttribute("data-motion").replace("fadeIn", "fadeOut")
			);
			if (typeof config.closeAfterCallBack === "function") {
				config.closeAfterCallBack(toolTipElement);
			}
		}
		/**
		 * 绑定 显示事件
		 */
		function onShowEvent() {
			PopsDOMUtils.on(
				config.target,
				// @ts-ignore
				config.triggerShowEventName,
				null,
				showToolTipNode,
				config.eventOption
			);
		}
		/**
		 * 绑定 关闭事件
		 */
		function onCloseEvent() {
			PopsDOMUtils.on(
				config.target,
				// @ts-ignore
				config.triggerCloseEventName,
				null,
				closeToolTipNode,
				config.eventOption
			);
		}
		/**
		 * 取消绑定 显示事件
		 */
		function offShowEvent() {
			PopsDOMUtils.off(
				config.target,
				// @ts-ignore
				null,
				config.triggerShowEventName,
				showToolTipNode,
				{
					capture: true,
				}
			);
		}
		/**
		 * 取消绑定 关闭事件
		 */
		function offCloseEvent() {
			PopsDOMUtils.off(
				config.target,
				// @ts-ignore
				null,
				config.triggerCloseEventName,
				closeToolTipNode,
				{
					capture: true,
				}
			);
		}

		/**
		 * 即使存在动画属性，但是当前设置的动画Out结束后移除元素
		 */
		function endEvent() {
			// @ts-ignore
			if (toolTipElement.getAttribute("data-motion").includes("In")) {
				return;
			}
			toolTipElement.remove();
		}
		if (config.alwaysShow) {
			/* 总是显示 */
			showToolTipNode();
			return {
				guid: guid,
				config: config,
				toolTipNode: toolTipElement,
				show: showToolTipNode,
				close() {
					PopsDOMUtils.on(
						toolTipElement,
						// @ts-ignore
						PopsDOMUtils.getAnimationEndNameList(),
						null,
						endEvent,
						config.eventOption
					);
					closeToolTipNode();
				},
				off: null,
				on: null,
			};
		} else {
			/* 事件触发才显示 */

			/**
			 * 进入动画
			 */
			PopsDOMUtils.on(
				toolTipElement,
				// @ts-ignore
				"mouseenter touchstart",
				void 0,
				function () {
					// @ts-ignore
					if (parseInt(getComputedStyle(this)) > 0.5) {
						// @ts-ignore
						this.style.animationPlayState = "paused";
					}
				},
				config.eventOption
			);
			/**
			 * 退出动画
			 */
			PopsDOMUtils.on(
				toolTipElement,
				// @ts-ignore
				"mouseleave touchend",
				void 0,
				function () {
					// @ts-ignore
					this.style.animationPlayState = "running";
				},
				config.eventOption
			);
			PopsDOMUtils.on(
				toolTipElement,
				// @ts-ignore
				PopsDOMUtils.getAnimationEndNameList(),
				null,
				endEvent,
				config.eventOption
			);

			onShowEvent();
			onCloseEvent();
			return {
				guid: guid,
				$shadowContainer: $shadowContainer,
				$shadowRoot: $shadowRoot,
				config: config,
				toolTipNode: toolTipElement,
				show: showToolTipNode,
				close: closeToolTipNode,
				off() {
					offShowEvent();
					offCloseEvent();
				},
				on() {
					onShowEvent();
					onCloseEvent();
				},
			};
		}
	};

	/**
	 * 抽屉
	 * @param {PopsDrawerDetails} details
	 */
	pops.drawer = function (details) {
		// @ts-ignore
		// @ts-ignore
		let that = this;
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.drawerCSS,
		]);
		/**
		 * @type {Required<PopsDrawerDetails>}
		 */
		let config = {
			title: {
				enable: true,
				// @ts-ignore
				position: "center",
				text: "默认标题",
				html: false,
				style: "height: 60px;line-height: 60px;",
			},
			content: {
				text: "默认内容",
				html: false,
				style: "overflow: auto;padding: 0px 10px;",
			},
			btn: {
				position: "flex-end",
				ok: {
					enable: true,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "确定",
					type: "primary",
					callback(event) {
						event.close();
					},
				},
				cancel: {
					enable: true,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "关闭",
					type: "default",
					callback(event) {
						event.close();
					},
				},
				other: {
					enable: false,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "其它按钮",
					type: "default",
					callback(event) {
						event.close();
					},
				},
				close: {
					enable: true,
					callback(event) {
						event.close();
					},
				},
			},
			mask: {
				enable: true,
				clickEvent: {
					toClose: true,
					toHide: false,
				},
				// @ts-ignore
				clickCallBack: null,
			},
			class: "",
			zIndex: 10000,
			only: false,
			direction: "right",
			size: "30%",
			lockScroll: false,
			closeOnPressEscape: true,
			openDelay: 0,
			closeDelay: 0,
			borderRadius: 0,
			// @ts-ignore
			style: void 0,
			beforeAppendToPageCallBack() {},
		};
		config = PopsUtils.assignJSON(config, details);
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "drawer";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);
		// @ts-ignore
		let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
		// @ts-ignore
		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			PopsType,
			config
		);
		let { contentStyle, contentPStyle } = PopsElementHandler.getContentStyle(
			PopsType,
			config
		);
		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			`
      ${
				config.title.enable
					? `
      <div class="pops-${PopsType}-title" style="${headerStyle}">
          ${
						// @ts-ignore
						config.title.html
							? // @ts-ignore
							  config.title.text
							: `<p 
                    pops
                    style="
                          width: 100%;
                          text-align: ${
														// @ts-ignore
														config.title.position
													};
                          ${headerPStyle}">${
									// @ts-ignore
									config.title.text
							  }</p>`
					}
          ${headerBtnHTML}
      </div>
      `
					: ""
			}
      
      <div class="pops-${PopsType}-content" style="${contentStyle}">
          ${
						config.content.html
							? config.content.text
							: `<p pops style="${contentPStyle}">${config.content.text}</p>`
					}
      </div>

      ${bottomBtnHTML}
      `,
			bottomBtnHTML
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let animElement = PopsElementHandler.parseElement(animHTML);
		let {
			popsElement,
			headerCloseBtnElement,
			btnCancelElement,
			btnOkElement,
			btnOtherElement,
			// @ts-ignore
		} = PopsHandler.handleQueryElement(animElement, PopsType);
		/**
		 * 遮罩层元素
		 * @type {?HTMLDivElement}
		 */
		let maskElement = null;
		/**
		 * 已创建的元素列表
		 * @type {HTMLElement[]}
		 */
		let elementList = [animElement];
		// @ts-ignore
		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				// @ts-ignore
				config: config,
				animElement: animElement,
				maskHTML: maskHTML,
			});
			maskElement = _handleMask_.maskElement;
			elementList.push(maskElement);
		}
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			// @ts-ignore
			animElement,
			popsElement,
			maskElement,
			config
		);
		/* 处理方向 */
		// @ts-ignore
		popsElement.setAttribute("direction", config.direction);

		/* 处理border-radius */
		/* 处理动画前的宽高 */
		if (config.direction === "top") {
			// @ts-ignore
			popsElement.style.setProperty("height", 0);
			// @ts-ignore
			popsElement.style.setProperty(
				"border-radius",
				`0px 0px ${config.borderRadius}px ${config.borderRadius}px`
			);
		} else if (config.direction === "bottom") {
			// @ts-ignore
			popsElement.style.setProperty("height", 0);
			// @ts-ignore
			popsElement.style.setProperty(
				"border-radius",
				`${config.borderRadius}px ${config.borderRadius}px 0px 0px`
			);
		} else if (config.direction === "left") {
			// @ts-ignore
			popsElement.style.setProperty("width", 0);
			// @ts-ignore
			popsElement.style.setProperty(
				"border-radius",
				`0px ${config.borderRadius}px 0px ${config.borderRadius}px`
			);
		} else if (config.direction === "right") {
			// @ts-ignore
			popsElement.style.setProperty("width", 0);
			// @ts-ignore
			popsElement.style.setProperty(
				"border-radius",
				`${config.borderRadius}px 0px ${config.borderRadius}px 0px`
			);
		}

		/* 按下Esc键触发关闭 */
		if (config.closeOnPressEscape) {
			PopsHandler.handleKeyboardEvent("Escape", [], function () {
				eventDetails.close();
			});
		}
		/* 待处理的点击事件列表 */
		let needHandleClickEventList = [
			{ close: headerCloseBtnElement },
			{ cancel: btnCancelElement },
			{ ok: btnOkElement },
			{ other: btnOtherElement },
		];
		needHandleClickEventList.forEach((item) => {
			let btnName = Object.keys(item)[0];
			PopsHandler.handleClickEvent(
				// @ts-ignore
				item[btnName],
				// @ts-ignore
				btnName,
				eventDetails,
				function (_eventDetails_) {
					// @ts-ignore
					if (typeof config.btn[btnName].callback === "function") {
						// @ts-ignore
						config.btn[btnName].callback(_eventDetails_);
					}
				}
			);
		});

		/* 先隐藏，然后根据config.openDelay来显示 */
		elementList.forEach((element) => {
			element.style.setProperty("display", "none");
			if (["top"].includes(config.direction)) {
				// @ts-ignore
				popsElement.style.setProperty("height", config.size);
				// @ts-ignore
				popsElement.style.setProperty("transform", "translateY(-100%)");
			} else if (["bottom"].includes(config.direction)) {
				// @ts-ignore
				popsElement.style.setProperty("height", config.size);
				// @ts-ignore
				popsElement.style.setProperty("transform", "translateY(100%)");
			} else if (["left"].includes(config.direction)) {
				// @ts-ignore
				popsElement.style.setProperty("width", config.size);
				// @ts-ignore
				popsElement.style.setProperty("transform", "translateX(-100%)");
			} else if (["right"].includes(config.direction)) {
				// @ts-ignore
				popsElement.style.setProperty("width", config.size);
				// @ts-ignore
				popsElement.style.setProperty("transform", "translateX(100%)");
			}
			element.style.setProperty("display", "");
		});
		/* 创建到页面中 */
		// @ts-ignore
		PopsUtils.appendChild($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		// @ts-ignore
		PopsUtils.appendChild($shadowContainer);
		setTimeout(() => {
			setTimeout(() => {
				// @ts-ignore
				popsElement.style.setProperty("transform", "");
			}, config.openDelay);
		}, 50);

		if (maskElement != null) {
			animElement.after(maskElement);
		}

		PopsHandler.handlePush(PopsType, {
			guid: guid,
			// @ts-ignore
			animElement: animElement,
			// @ts-ignore
			popsElement: popsElement,
			// @ts-ignore
			maskElement: maskElement,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		return PopsHandler.handleResultDetails(eventDetails);
	};

	/**
	 * 文件夹
	 * @param {PopsFolderDetails} details
	 */
	pops.folder = function (details) {
		// @ts-ignore
		// @ts-ignore
		let that = this;
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.folderCSS,
		]);
		/**
		 * @type {Required<PopsFolderDetails>}
		 */
		let config = {
			title: {
				text: "pops.Folder",
				position: "center",
				html: false,
				style: "",
			},
			sort: {
				name: "latestTime",
				isDesc: false,
				// @ts-ignore
				callback() {},
			},
			folder: [
				{
					fileName: "测试文件夹",
					fileSize: 0,
					fileType: "",
					createTime: 0,
					latestTime: 0,
					isFolder: true,
					index: 0,
					// @ts-ignore
					clickEvent() {
						return [
							{
								fileName: "内部-测试文件.zip",
								fileSize: 1025000,
								fileType: "zip",
								createTime: 1702038410440,
								latestTime: 1702039602126,
								isFolder: false,
								index: 1,
								clickEvent() {
									console.log("下载文件：", this.fileName);
									return "https://update.greasyfork.org/scripts/456485/pops.js";
								},
							},
						];
					},
				},
				{
					fileName: "测试文件.apk",
					fileSize: 30125682,
					fileType: "apk",
					createTime: 1702036410440,
					latestTime: 1702039410440,
					isFolder: false,
					index: 1,
					// @ts-ignore
					clickEvent() {
						console.log("下载文件：", this.fileName);
						return "https://update.greasyfork.org/scripts/456485/pops.js";
					},
				},
			],
			btn: {
				merge: false,
				mergeReverse: false,
				reverse: false,
				position: "flex-end",
				ok: {
					enable: true,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "确定",
					type: "primary",
					callback(event) {
						event.close();
					},
				},
				cancel: {
					enable: true,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "关闭",
					type: "default",
					callback(event) {
						event.close();
					},
				},
				other: {
					enable: false,
					// @ts-ignore
					size: "",
					// @ts-ignore
					icon: "",
					rightIcon: false,
					iconIsLoading: false,
					text: "其它按钮",
					type: "default",
					callback(event) {
						event.close();
					},
				},
				close: {
					enable: true,
					callback(event) {
						event.close();
					},
				},
			},
			class: "",
			only: false,
			width: "500px",
			height: "400px",
			position: "center",
			animation: "pops-anim-fadein-zoom",
			zIndex: 10000,
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},
				// @ts-ignore
				clickCallBack: null,
			},
			drag: false,
			dragLimit: true,
			dragExtraDistance: 3,
			dragMoveCallBack() {},
			dragEndCallBack() {},
			forbiddenScroll: false,
			// @ts-ignore
			style: void 0,
			beforeAppendToPageCallBack() {},
		};
		/**
		 * 图标
		 */
		const Folder_ICON = {
			folder:
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",
			zip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",
			mp4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",
			apk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",
			gif: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",
			txt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",
			exe: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",
			qm: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",
			php: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",
			pdf: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",
			Null: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",
			ipa: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",
			doc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",
			xls: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",
			ppt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",
			png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",
			html: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",
			js: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",
			css: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",
			epub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",
			psd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",
			dwg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII=",
		};
		/* 办公几件套 */
		// @ts-ignore
		Folder_ICON.docx = Folder_ICON.doc;
		// @ts-ignore
		Folder_ICON.rtf = Folder_ICON.doc;
		// @ts-ignore
		Folder_ICON.xlsx = Folder_ICON.xls;
		// @ts-ignore
		Folder_ICON.pptx = Folder_ICON.ppt;

		// @ts-ignore
		Folder_ICON.dmg = Folder_ICON.ipa;

		// @ts-ignore
		Folder_ICON.json = Folder_ICON.js;

		/* 压缩包 */
		let zipIconList = [
			"rar",
			"7z",
			"arj",
			"bz2",
			"cab",
			"iso",
			"jar",
			"lz",
			"lzh",
			"tar",
			"uue",
			"xz",
			"z",
			"zipx",
			"zst",
			"001",
		];

		/* 图片 */
		let imageIconList = ["jpg", "jpeg", "ico", "webp"];

		/* 代码语言 */
		let codeLanguageIconList = [
			"htm",
			"py",
			"vue",
			"bat",
			"sh",
			"vbs",
			"java",
			"kt",
		];

		/* Android安装包 */
		let androidIconList = ["apk", "apkm", "xapk"];

		zipIconList.forEach((keyName) => {
			// @ts-ignore
			Folder_ICON[keyName] = Folder_ICON.zip;
		});
		imageIconList.forEach((keyName) => {
			// @ts-ignore
			Folder_ICON[keyName] = Folder_ICON.png;
		});
		codeLanguageIconList.forEach((keyName) => {
			// @ts-ignore
			Folder_ICON[keyName] = Folder_ICON.html;
		});
		androidIconList.forEach((keyName) => {
			// @ts-ignore
			Folder_ICON[keyName] = Folder_ICON.apk;
		});

		config = PopsUtils.assignJSON(config, details);
		if (details?.folder) {
			config.folder = details.folder;
		}
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "folder";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);
		// @ts-ignore
		let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
		// @ts-ignore
		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		// @ts-ignore
		let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			PopsType,
			// @ts-ignore
			config
		);
		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			`
    <div class="pops-folder-title" style="text-align: ${
			config.title.position
		};${headerStyle}">
					${
						config.title.html
							? config.title.text
							: `<p pops style="${headerPStyle}">${config.title.text}</p>`
					}
          ${headerBtnHTML}
				</div>
				<div class="pops-folder-content ${
					pops.isPhone() ? "pops-mobile-folder-content" : ""
				}">
          <div class="pops-folder-list">
            <div class="pops-folder-file-list-breadcrumb">
              <div class="pops-folder-file-list-breadcrumb-primary">
                <span class="pops-folder-file-list-breadcrumb-allFiles cursor-p" title="全部文件">
                  <a>全部文件</a>
                </span>
              </div>
            </div>
            <div class="pops-folder-list-table__header-div">
              <table class="pops-folder-list-table__header">
                <colgroup>
                  <!-- <col width="8%"> --!>
                  <col width="52%">
                  <col width="24%">
                  <col width="16%">
                </colgroup>
                <thead>
                  <tr class="pops-folder-list-table__header-row">
                    <th class="pops-folder-list-table__header-th cursor-p">
                      <div class="text-ellip content flex-a-i-center">
                        <span>文件名</span>
                        <div class="pops-folder-list-table__sort" data-sort="fileName">
                          <div class="pops-folder-icon-arrow">
                            <svg
                              viewBox="0 0 1024 1024"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                class="pops-folder-icon-arrow-up"></path>
                              <path
                                d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                class="pops-folder-icon-arrow-down"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th class="pops-folder-list-table__header-th cursor-p">
                      <div class="text-ellip content flex-a-i-center">
                        <span>修改时间</span>
                        <div class="pops-folder-list-table__sort" data-sort="latestTime">
                          <div class="pops-folder-icon-arrow">
                            <svg
                              viewBox="0 0 1024 1024"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                class="pops-folder-icon-arrow-up"></path>
                              <path
                                d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                class="pops-folder-icon-arrow-down"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th class="pops-folder-list-table__header-th cursor-p">
                      <div class="text-ellip content flex-a-i-center">
                        <span>大小</span>
                        <div class="pops-folder-list-table__sort" data-sort="fileSize">
                          <div class="pops-folder-icon-arrow">
                            <svg
                              viewBox="0 0 1024 1024"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                class="pops-folder-icon-arrow-up"></path>
                              <path
                                d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                class="pops-folder-icon-arrow-down"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="pops-folder-list-table__body-div">
              <table class="pops-folder-list-table__body">
                <colgroup>
                  <!-- <col width="8%"> --!>
                  ${
										pops.isPhone()
											? `<col width="100%">`
											: `
                      <col width="52%">
                      <col width="24%">
                      <col width="16%">`
									}
                  
                </colgroup>
                <tbody>
                  
                </tbody>
              </table>
            </div>
          </div>
				</div>
				${bottomBtnHTML}
    `,
			bottomBtnHTML
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let animElement = PopsElementHandler.parseElement(animHTML);
		let {
			popsElement,
			titleElement,
			contentElement,
			// @ts-ignore
			// @ts-ignore
			folderListElement,
			// @ts-ignore
			// @ts-ignore
			folderListHeaderElement,
			// @ts-ignore
			// @ts-ignore
			folderListHeaderRowElement,
			folderListBodyElement,
			folderFileListBreadcrumbPrimaryElement,
			headerCloseBtnElement: btnCloseElement,
			btnOkElement,
			btnCancelElement,
			btnOtherElement,
			folderListSortFileNameElement,
			folderListSortLatestTimeElement,
			folderListSortFileSizeElement,
			// @ts-ignore
		} = PopsHandler.handleQueryElement(animElement, PopsType);
		/**
		 * 遮罩层元素
		 * @type {?HTMLDivElement}
		 */
		let maskElement = null;
		/**
		 * 已创建的元素列表
		 * @type {HTMLElement[]}
		 */
		let elementList = [animElement];
		// @ts-ignore
		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				// @ts-ignore
				config: config,
				animElement: animElement,
				maskHTML: maskHTML,
			});
			maskElement = _handleMask_.maskElement;
			elementList.push(maskElement);
		}
		/* 事件 */
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			// @ts-ignore
			animElement,
			popsElement,
			maskElement,
			config
		);
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnCloseElement,
			"close",
			eventDetails,
			// @ts-ignore
			config.btn.close.callback
		);
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnOkElement,
			"ok",
			eventDetails,
			// @ts-ignore
			config.btn.ok.callback
		);
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnCancelElement,
			"cancel",
			eventDetails,
			// @ts-ignore
			config.btn.cancel.callback
		);
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnOtherElement,
			"other",
			eventDetails,
			// @ts-ignore
			config.btn.other.callback
		);
		/* 创建到页面中 */
		// @ts-ignore
		PopsUtils.appendChild($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		// @ts-ignore
		PopsUtils.appendChild($shadowContainer);
		if (maskElement != null) {
			animElement.after(maskElement);
		}
		/* 添加文件信息 */
		config.folder.sort();
		/**
		 * 创建文件夹元素
		 * @param {string} fileName
		 * @param {string} [fileSize="-"]
		 * @param {string} [latestTime="-"]
		 */
		function createFolderRowElement(
			fileName,
			latestTime = "-",
			fileSize = "-"
		) {
			let origin_fileName = fileName;
			let origin_latestTime = latestTime;
			let origin_fileSize = fileSize;
			// @ts-ignore
			let folderELement = PopsDOMUtils.createElement("tr");
			// @ts-ignore
			let fileNameElement = PopsDOMUtils.createElement("td");
			// @ts-ignore
			let fileTimeElement = PopsDOMUtils.createElement("td");
			// @ts-ignore
			let fileFormatSize = PopsDOMUtils.createElement("td");
			let fileType = "";
			let fileIcon = Folder_ICON.folder;
			if (arguments.length === 1) {
				/* 文件夹 */
				latestTime = "";
				fileSize = "";
			} else {
				/* 文件 */
				fileIcon = "";
				if (typeof latestTime === "number") {
					latestTime = PopsUtils.formatTime(latestTime);
				}
				if (typeof fileSize === "number") {
					// @ts-ignore
					fileSize = PopsUtils.formatByteToSize(fileSize);
				}
				for (let keyName in Folder_ICON) {
					if (fileName.toLowerCase().endsWith("." + keyName)) {
						fileType = keyName;
						// @ts-ignore
						fileIcon = Folder_ICON[keyName];
						break;
					}
				}
				if (!Boolean(fileIcon)) {
					fileType = "Null";
					fileIcon = Folder_ICON.Null;
				}
			}
			folderELement.className = "pops-folder-list-table__body-row";
			fileNameElement.className = "pops-folder-list-table__body-td";
			fileTimeElement.className = "pops-folder-list-table__body-td";
			fileFormatSize.className = "pops-folder-list-table__body-td";
			fileNameElement.innerHTML = `
        <div class="pops-folder-list-file-name cursor-p">
          <div>
            <img src="${fileIcon}" alt="${fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
            <a title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
              ${fileName}
            </a>
          </div>
        </div>
        `;
			fileTimeElement.innerHTML = `
        <div class="pops-folder-list__time">
          <span>${latestTime}</span>
        </div>
        `;
			fileFormatSize.innerHTML = `
        <div class="pops-folder-list-format-size">
          <span>${fileSize}</span>
        </div>
        `;
			/* 存储原来的值 */
			let __value__ = {
				fileName: origin_fileName,
				latestTime: origin_latestTime,
				fileSize: origin_fileSize,
			};
			// @ts-ignore
			fileNameElement["__value__"] = __value__;
			// @ts-ignore
			fileTimeElement["__value__"] = __value__;
			// @ts-ignore
			fileFormatSize["__value__"] = __value__;
			// @ts-ignore
			folderELement["__value__"] = __value__;
			folderELement.appendChild(fileNameElement);
			folderELement.appendChild(fileTimeElement);
			folderELement.appendChild(fileFormatSize);
			return {
				folderELement,
				fileNameElement,
				fileTimeElement,
				fileFormatSize,
			};
		}
		/**
		 * 创建移动端文件夹元素
		 * @param {string} fileName
		 */
		function createMobileFolderRowElement(
			fileName,
			latestTime = "-",
			fileSize = "-"
		) {
			let origin_fileName = fileName;
			let origin_latestTime = latestTime;
			let origin_fileSize = fileSize;
			// @ts-ignore
			let folderELement = PopsDOMUtils.createElement("tr");
			// @ts-ignore
			let fileNameElement = PopsDOMUtils.createElement("td");
			let fileType = "";
			let fileIcon = Folder_ICON.folder;
			if (arguments.length === 1) {
				/* 文件夹 */
				latestTime = "";
				fileSize = "";
			} else {
				/* 文件 */
				fileIcon = "";
				if (typeof latestTime === "number") {
					latestTime = PopsUtils.formatTime(latestTime);
				}
				if (typeof fileSize === "number") {
					// @ts-ignore
					fileSize = PopsUtils.formatByteToSize(fileSize);
				}
				for (let keyName in Folder_ICON) {
					if (fileName.toLowerCase().endsWith("." + keyName)) {
						fileType = keyName;
						// @ts-ignore
						fileIcon = Folder_ICON[keyName];
						break;
					}
				}
				if (!Boolean(fileIcon)) {
					fileType = "Null";
					fileIcon = Folder_ICON.Null;
				}
			}
			folderELement.className = "pops-folder-list-table__body-row";
			fileNameElement.className = "pops-folder-list-table__body-td";
			fileNameElement.innerHTML = `
          <div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
            <img src="${fileIcon}" alt="${fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
            <div>
              <a title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
                ${fileName}
              </a>
              <span>${latestTime} ${fileSize}</span>
            </div>
          </div>
          `;
			/* 存储原来的值 */
			let __value__ = {
				fileName: origin_fileName,
				latestTime: origin_latestTime,
				fileSize: origin_fileSize,
			};
			// @ts-ignore
			fileNameElement["__value__"] = __value__;
			// @ts-ignore
			folderELement["__value__"] = __value__;
			folderELement.appendChild(fileNameElement);
			return {
				folderELement,
				fileNameElement,
			};
		}
		/**
		 * 清空每行的元素
		 */
		function clearFolerRow() {
			// @ts-ignore
			folderListBodyElement.innerHTML = "";
		}
		function getArrowIconElement() {
			// @ts-ignore
			let iconArrowElement = PopsDOMUtils.createElement("div", {
				className: "iconArrow",
			});
			return iconArrowElement;
		}
		/**
		 * 添加顶部导航
		 * @param {string} name
		 * @param {PopsFolderDataConfig} _config_
		 * @returns
		 */
		function getBreadcrumbAllFilesElement(name, _config_) {
			let spanElement = PopsDOMUtils.createElement(
				"span",
				{
					className: "pops-folder-file-list-breadcrumb-allFiles cursor-p",
					innerHTML: `<a>${name}</a>`,
					// @ts-ignore
					_config_: _config_,
				},
				{
					title: "name",
				}
			);
			return spanElement;
		}
		/**
		 * 顶部导航的点击事件
		 * @param {Event} event
		 * @param {boolean} isTop 是否是全部文件按钮
		 * @param {PopsFolderDataConfig} _config_ 配置
		 */
		// @ts-ignore
		// @ts-ignore
		function breadcrumbAllFilesElementClickEvent(event, isTop, _config_) {
			clearFolerRow();
			/* 获取当前的导航元素 */
			// @ts-ignore
			let currentBreadcrumb = event.target.closest(
				"span.pops-folder-file-list-breadcrumb-allFiles"
			);
			if (currentBreadcrumb) {
				while (currentBreadcrumb.nextElementSibling) {
					currentBreadcrumb.nextElementSibling.remove();
				}
			} else {
				console.error("获取导航按钮失败");
			}
			let loadingMask = pops.loading({
				// @ts-ignore
				parent: contentElement,
				// @ts-ignore
				content: {
					text: "获取文件列表中...",
				},
				mask: {
					enable: true,
					clickEvent: {
						toClose: false,
						toHide: false,
					},
				},
				addIndexCSS: false,
			});
			// @ts-ignore
			addFolderElement(_config_);
			loadingMask.close();
		}
		/**
		 * 刷新文件列表界面信息
		 * @param {Event} event
		 * @param {PopsFolderDataConfig} _config_
		 */
		async function refreshFolderInfoClickEvent(event, _config_) {
			clearFolerRow();
			let loadingMask = pops.loading({
				// @ts-ignore
				parent: contentElement,
				// @ts-ignore
				content: {
					text: "获取文件列表中...",
				},
				// @ts-ignore
				mask: {
					enable: true,
				},
				addIndexCSS: false,
			});
			if (typeof _config_.clickEvent === "function") {
				// @ts-ignore
				let childConfig = await _config_.clickEvent(event, _config_);
				/* 添加顶部导航的箭头 */
				// @ts-ignore
				folderFileListBreadcrumbPrimaryElement.appendChild(
					getArrowIconElement()
				);
				/* 获取顶部导航 */
				let breadcrumbAllFilesElement = getBreadcrumbAllFilesElement(
					_config_["fileName"],
					// @ts-ignore
					childConfig
				);
				// @ts-ignore
				folderFileListBreadcrumbPrimaryElement.appendChild(
					breadcrumbAllFilesElement
				);
				/* 设置顶部导航点击事件 */
				// @ts-ignore
				PopsDOMUtils.on(
					breadcrumbAllFilesElement,
					"click",
					void 0,
					function (event) {
						// @ts-ignore
						breadcrumbAllFilesElementClickEvent(event, false, childConfig);
					}
				);
				// @ts-ignore
				addFolderElement(childConfig);
			}
			loadingMask.close();
		}
		/**
		 * 设置文件点击事件
		 * @param {HTMLElement} targetElement
		 * @param {PopsFolderDataConfig} _config_
		 */
		function setFileClickEvent(targetElement, _config_) {
			// @ts-ignore
			PopsDOMUtils.on(targetElement, "click", void 0, async function (event) {
				event?.preventDefault();
				event?.stopPropagation();
				event?.stopImmediatePropagation();
				let linkElement = targetElement.querySelector("a");
				if (typeof _config_.clickEvent === "function") {
					// @ts-ignore
					let downloadInfo = await _config_.clickEvent(event, _config_);
					if (
						typeof downloadInfo === "object" &&
						// @ts-ignore
						typeof downloadInfo.url === "string" &&
						// @ts-ignore
						downloadInfo.url.trim() !== ""
					) {
						// @ts-ignore
						linkElement.setAttribute("href", downloadInfo.url);
						// @ts-ignore
						linkElement.setAttribute("target", "_blank");
						// @ts-ignore
						if (downloadInfo.autoDownload) {
							// @ts-ignore
							if (downloadInfo.mode == null || downloadInfo.mode === "") {
								/* 未设置mode的话默认为aBlank */
								// @ts-ignore
								downloadInfo.mode = "aBlank";
							}
							// @ts-ignore
							if (downloadInfo.mode === "a" || downloadInfo.mode === "aBlank") {
								/* a标签下载 */
								let downloadLinkElement = document.createElement("a");
								// @ts-ignore
								if (downloadInfo.mode === "aBlank") {
									downloadLinkElement.setAttribute("target", "_blank");
								}
								// @ts-ignore
								downloadLinkElement.href = downloadInfo.url;
								downloadLinkElement.click();
							} else if (
								// @ts-ignore
								downloadInfo.mode === "open" ||
								// @ts-ignore
								downloadInfo.mode === "openBlank"
							) {
								/* window.open下载 */
								// @ts-ignore
								if (downloadInfo.mode === "openBlank") {
									// @ts-ignore
									globalThis.open(downloadInfo.url, "_blank");
								} else {
									// @ts-ignore
									globalThis.open(downloadInfo.url);
								}
								// @ts-ignore
							} else if (downloadInfo.mode === "iframe") {
								/* iframe下载 */
								let downloadIframeLinkElement =
									document.createElement("iframe");
								// @ts-ignore
								downloadIframeLinkElement.src = downloadInfo.url;
								downloadIframeLinkElement.onload = function () {
									setTimeout(() => {
										downloadIframeLinkElement.remove();
									}, 1000);
								};
								$shadowRoot.appendChild(downloadIframeLinkElement);
								setTimeout(() => {
									downloadIframeLinkElement.remove();
								}, 3 * 60 * 1000);
							} else {
								console.error("未知的下载模式", downloadInfo);
							}
						}
					}
				}
			});
		}
		/**
		 * 对配置进行排序
		 * @param {PopsFolderDataConfig[]} _config_
		 * @param {"fileName"|"fileSize"|"latestTime"} sortName 比较的属性，默认fileName
		 * @param {boolean} isDesc 是否降序，默认false（升序）
		 */
		function sortFolderConfig(_config_, sortName = "fileName", isDesc = false) {
			_config_.sort((a, b) => {
				let beforeVal = a[sortName];
				let afterVal = b[sortName];
				if (sortName === "fileName") {
					/* 文件名，进行字符串转换 */
					beforeVal = beforeVal.toString();
					afterVal = afterVal.toString();
				} else if (sortName === "fileSize") {
					/* 文件大小，进行Float转换 */
					// @ts-ignore
					beforeVal = parseFloat(beforeVal);
					// @ts-ignore
					afterVal = parseFloat(afterVal);
				} else if (sortName === "latestTime") {
					/* 文件时间 */
					beforeVal = new Date(beforeVal).getTime();
					afterVal = new Date(afterVal).getTime();
				}
				if (typeof beforeVal === "string" && typeof afterVal === "string") {
					let compareVal = beforeVal.localeCompare(afterVal);
					if (isDesc) {
						/* 降序 */
						if (compareVal > 0) {
							compareVal = -1;
						} else if (compareVal < 0) {
							compareVal = 1;
						}
					}
					return compareVal;
				} else {
					if (beforeVal > afterVal) {
						if (isDesc) {
							/* 降序 */
							return -1;
						} else {
							return 1;
						}
					} else if (beforeVal < afterVal) {
						if (isDesc) {
							/* 降序 */
							return 1;
						} else {
							return -1;
						}
					} else {
						return 0;
					}
				}
			});
			return _config_;
		}
		/**
		 * 添加元素
		 * @param {PopsFolderDataConfig[]} _config_
		 */
		function addFolderElement(_config_) {
			sortFolderConfig(_config_, config.sort.name, config.sort.isDesc);
			_config_.forEach((item) => {
				if (item["isFolder"]) {
					let { folderELement, fileNameElement } = pops.isPhone()
						? createMobileFolderRowElement(item["fileName"])
						: createFolderRowElement(item["fileName"]);
					// @ts-ignore
					PopsDOMUtils.on(fileNameElement, "click", void 0, function (event) {
						refreshFolderInfoClickEvent(event, item);
					});
					// @ts-ignore
					folderListBodyElement.appendChild(folderELement);
				} else {
					let { folderELement, fileNameElement } = pops.isPhone()
						? createMobileFolderRowElement(
								item["fileName"],
								// @ts-ignore
								item["latestTime"],
								item["fileSize"]
						  )
						: createFolderRowElement(
								item["fileName"],
								// @ts-ignore
								item["latestTime"],
								item["fileSize"]
						  );
					setFileClickEvent(fileNameElement, item);
					// @ts-ignore
					folderListBodyElement.appendChild(folderELement);
				}
			});
		}
		addFolderElement(config.folder);
		/* 将数据存到全部文件的属性_config_中 */
		// @ts-ignore
		let allFilesElement = folderFileListBreadcrumbPrimaryElement.querySelector(
			".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child"
		);
		// @ts-ignore
		allFilesElement._config_ = config.folder;
		/* 设置点击顶部的全部文件事件 */
		// @ts-ignore
		PopsDOMUtils.on(allFilesElement, "click", void 0, function (event) {
			// @ts-ignore
			breadcrumbAllFilesElementClickEvent(event, true, config.folder);
		});

		/* 移除所有的当前排序的arrow */
		function removeAllArrowActive() {
			[
				// @ts-ignore
				...folderListSortFileNameElement.querySelectorAll(
					".pops-folder-icon-active"
				),
				// @ts-ignore
				...folderListSortLatestTimeElement.querySelectorAll(
					".pops-folder-icon-active"
				),
				// @ts-ignore
				...folderListSortFileSizeElement.querySelectorAll(
					".pops-folder-icon-active"
				),
			].forEach((ele) => ele.classList.remove("pops-folder-icon-active"));
		}
		/* 设置当前的排序的arrow */
		// @ts-ignore
		function changeArrowActive(arrowUp, arrowDown, isDesc) {
			removeAllArrowActive();
			if (isDesc) {
				arrowDown.classList.add("pops-folder-icon-active");
			} else {
				arrowUp.classList.add("pops-folder-icon-active");
			}
		}
		/**
		 * 排序按钮的点击事件
		 * @param {PointerEvent} target
		 * @param {HTMLElement} event
		 * @param {string} sortName
		 * @returns
		 */
		function arrowSortClickEvent(target, event, sortName) {
			// @ts-ignore
			if (!event["notChangeSortRule"]) {
				// @ts-ignore
				config.sort.name = sortName;
				config.sort.isDesc = !config.sort.isDesc;
			}
			// @ts-ignore
			let arrowUp = target.querySelector(".pops-folder-icon-arrow-up");
			// @ts-ignore
			let arrowDown = target.querySelector(".pops-folder-icon-arrow-down");
			changeArrowActive(arrowUp, arrowDown, config.sort.isDesc);
			if (
				typeof config.sort.callback === "function" &&
				config.sort.callback(
					// @ts-ignore
					target,
					event,
					config.sort.name,
					config.sort.isDesc
				)
			) {
				return;
			}
			// @ts-ignore
			let childrenList = [];
			// @ts-ignore
			Array.from(folderListBodyElement.children).forEach((trElement) => {
				// @ts-ignore
				let __value__ = trElement["__value__"];
				__value__["target"] = trElement;
				childrenList.push(__value__);
			});
			let sortedConfigList = sortFolderConfig(
				// @ts-ignore
				childrenList,
				config.sort.name,
				config.sort.isDesc
			);
			sortedConfigList.forEach((item) => {
				// @ts-ignore
				folderListBodyElement.appendChild(item.target);
			});
		}
		/* 设置当前排序的图标按钮 */
		PopsDOMUtils.on(
			// @ts-ignore
			folderListSortFileNameElement.closest("th"),
			"click",
			void 0,
			function (event) {
				// @ts-ignore
				arrowSortClickEvent(folderListSortFileNameElement, event, "fileName");
			},
			{
				capture: true,
			}
		);
		PopsDOMUtils.on(
			// @ts-ignore
			folderListSortLatestTimeElement.closest("th"),
			"click",
			void 0,
			function (event) {
				arrowSortClickEvent(
					// @ts-ignore
					folderListSortLatestTimeElement,
					event,
					"latestTime"
				);
			},
			{
				capture: true,
			}
		);
		PopsDOMUtils.on(
			// @ts-ignore
			folderListSortFileSizeElement.closest("th"),
			"click",
			void 0,
			function (event) {
				// @ts-ignore
				arrowSortClickEvent(folderListSortFileSizeElement, event, "fileSize");
			},
			{
				capture: true,
			}
		);
		/* 设置默认触发的arrow */
		if (config.sort.name === "fileName") {
			// @ts-ignore
			PopsDOMUtils.trigger(folderListSortFileNameElement, "click", {
				notChangeSortRule: true,
			});
		} else if (config.sort.name === "latestTime") {
			// @ts-ignore
			PopsDOMUtils.trigger(folderListSortLatestTimeElement, "click", {
				notChangeSortRule: true,
			});
		} else if (config.sort.name === "fileSize") {
			// @ts-ignore
			PopsDOMUtils.trigger(folderListSortFileSizeElement, "click", {
				notChangeSortRule: true,
			});
		}
		/* 拖拽 */
		if (config.drag) {
			// @ts-ignore
			PopsUtils.drag(popsElement, {
				dragElement: titleElement,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		PopsHandler.handlePush(PopsType, {
			guid: guid,
			// @ts-ignore
			animElement: animElement,
			// @ts-ignore
			popsElement: popsElement,
			// @ts-ignore
			maskElement: maskElement,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		return PopsHandler.handleResultDetails(eventDetails);
	};

	/**
	 * 配置面板
	 * @param { PopsPanelDetails } details 配置
	 */
	pops.panel = function (details) {
		// @ts-ignore
		// @ts-ignore
		let that = this;
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.panelCSS,
		]);
		/**
		 * @type {Required<PopsPanelDetails>}
		 */
		let config = {
			title: {
				text: "默认标题",
				position: "center",
				html: false,
				style: "",
			},
			content: [
				{
					id: "whitesev-panel-config-1",
					title: "菜单配置1",
					headerTitle: "菜单配置1",
					isDefault: false,
					attributes: [
						{
							"data-test": "test",
							"data-test-2": "test2",
						},
					],
					forms: [
						{
							className: "forms-1",
							text: "区域设置",
							type: "forms",
							attributes: [],
							forms: [
								{
									className: "panel-switch",
									text: "switch",
									type: "switch",
									attributes: [],
									getValue() {
										return true;
									},
									// @ts-ignore
									// @ts-ignore
									callback(event, value) {
										console.log("按钮开启状态：", value);
									},
								},
								// @ts-ignore
								{
									className: "panel-slider",
									text: "slider",
									type: "slider",
									attributes: [],
									getValue() {
										return 50;
									},
									// @ts-ignore
									// @ts-ignore
									callback(event, value) {
										console.log("滑块当前数值：", value);
									},
									min: 1,
									max: 100,
								},
								{
									className: "panel-button",
									text: "button",
									type: "button",
									attributes: [],
									buttonIcon: "eleme",
									buttonIconIsLoading: true,
									buttonType: "warning",
									buttonText: "warning按钮",
									callback(event) {
										console.log("点击按钮", event);
									},
								},
								{
									className: "panel-button",
									text: "button",
									type: "button",
									attributes: [],
									buttonIcon: "chromeFilled",
									buttonIconIsLoading: true,
									buttonType: "danger",
									buttonText: "danger按钮",
									callback(event) {
										console.log("点击按钮", event);
									},
								},
								{
									className: "panel-button",
									text: "button",
									type: "button",
									attributes: [],
									buttonIcon: "upload",
									buttonIconIsLoading: false,
									buttonType: "info",
									buttonText: "info按钮",
									callback(event) {
										console.log("点击按钮", event);
									},
								},
							],
						},
					],
				},
				{
					id: "whitesev-panel-config-2",
					title: "菜单配置2",
					headerTitle: "菜单配置2",
					isDefault: true,
					attributes: [
						{
							"data-value": "value",
							"data-value-2": "value2",
						},
					],
					forms: [
						{
							className: "panel-input",
							text: "input",
							type: "input",
							attributes: [],
							// @ts-ignore
							getValue() {
								return 50;
							},
							// @ts-ignore
							// @ts-ignore
							callback(event, value) {
								console.log("输入框内容改变：", value);
							},
							placeholder: "请输入内容",
						},
						{
							className: "panel-input-password",
							text: "input-password",
							type: "input",
							attributes: [],
							getValue() {
								return "123456";
							},
							// @ts-ignore
							// @ts-ignore
							callback(event, value) {
								console.log("密码输入框内容改变：", value);
							},
							isPassword: true,
							placeholder: "请输入密码",
						},
						{
							className: "panel-textarea",
							text: "textarea",
							type: "textarea",
							attributes: [],
							// @ts-ignore
							getValue() {
								return 50;
							},
							// @ts-ignore
							// @ts-ignore
							callback(event, value) {
								console.log("textarea输入框内容改变：", value);
							},
							placeholder: "请输入内容",
						},
						{
							className: "panel-select",
							text: "select",
							type: "select",
							attributes: [],
							getValue() {
								return 50;
							},
							// @ts-ignore
							// @ts-ignore
							callback(event, isSelectedValue, isSelectedText) {
								console.log(
									`select当前选项：${isSelectedValue}，当前选项文本：${isSelectedText}`
								);
							},
							data: [
								{
									value: "all",
									text: "所有",
								},
								{
									value: "text",
									text: "文本",
									// @ts-ignore
									selected: true,
								},
								{
									value: "html",
									text: "超文本",
								},
							],
						},
						{
							type: "forms",
							text: "deep菜单",
							forms: [
								{
									type: "deepMenu",
									className: "panel-deepMenu",
									text: "deepMenu",
									description: "二级菜单",
									rightText: "自定义配置",
									arrowRightIcon: true,
									clickCallBack(event, formConfig) {
										console.log("进入子配置", event, formConfig);
									},
									forms: [
										{
											className: "forms-1",
											text: "区域设置",
											type: "forms",
											attributes: [],
											forms: [
												{
													className: "panel-switch",
													text: "switch",
													type: "switch",
													attributes: [],
													getValue() {
														return true;
													},
													// @ts-ignore
													// @ts-ignore
													callback(event, value) {
														console.log("按钮开启状态：", value);
													},
												},
												// @ts-ignore
												{
													className: "panel-slider",
													text: "slider",
													type: "slider",
													attributes: [],
													getValue() {
														return 50;
													},
													// @ts-ignore
													// @ts-ignore
													callback(event, value) {
														console.log("滑块当前数值：", value);
													},
													min: 1,
													max: 100,
												},
												{
													className: "panel-button",
													text: "button",
													type: "button",
													attributes: [],
													buttonIcon: "eleme",
													buttonIconIsLoading: true,
													buttonType: "warning",
													buttonText: "warning按钮",
													callback(event) {
														console.log("点击按钮", event);
													},
												},
												{
													className: "panel-button",
													text: "button",
													type: "button",
													attributes: [],
													buttonIcon: "chromeFilled",
													buttonIconIsLoading: true,
													buttonType: "danger",
													buttonText: "danger按钮",
													callback(event) {
														console.log("点击按钮", event);
													},
												},
												{
													className: "panel-button",
													text: "button",
													type: "button",
													attributes: [],
													buttonIcon: "upload",
													buttonIconIsLoading: false,
													buttonType: "info",
													buttonText: "info按钮",
													callback(event) {
														console.log("点击按钮", event);
													},
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
			btn: {
				close: {
					enable: true,
					callback(event) {
						event.close();
					},
				},
			},
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},
				// @ts-ignore
				clickCallBack: null,
			},
			class: "",
			mobileClassName: "pops-panel-is-mobile",
			isMobile: false,
			only: false,
			width: "700px",
			height: "500px",
			position: "center",
			animation: "pops-anim-fadein-zoom",
			zIndex: 10000,
			drag: false,
			dragLimit: true,
			dragExtraDistance: 3,
			dragMoveCallBack() {},
			dragEndCallBack() {},
			forbiddenScroll: false,
			// @ts-ignore
			style: void 0,
			beforeAppendToPageCallBack() {},
		};
		config = PopsUtils.assignJSON(config, details);
		if (details && Array.isArray(details.content)) {
			config.content = details.content;
		}
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "panel";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);
		// @ts-ignore
		let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
		// @ts-ignore
		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			PopsType,
			// @ts-ignore
			config
		);

		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			`
			<div 
				class="pops-${PopsType}-title"
				style="text-align: ${config.title.position};
				${headerStyle}">
				${
					config.title.html
						? config.title.text
						: `<p pops style="${headerPStyle}">${config.title.text}</p>`
				}
				${headerBtnHTML}
			</div>
			<div class="pops-${PopsType}-content">
				<aside class="pops-${PopsType}-aside">
					<ul></ul>
				</aside>
				<section class="pops-${PopsType}-container">
					<ul class="pops-panel-container-header-ul"></ul>
					<ul></ul>
				</section>
			</div>`,
			""
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let animElement = PopsElementHandler.parseElement(animHTML);
		/* 结构元素 */
		let {
			popsElement,
			headerCloseBtnElement: btnCloseElement,
			titleElement,
			// @ts-ignore
			// @ts-ignore
			contentElement,
			contentAsideElement,
			contentSectionContainerElement,
			// @ts-ignore
		} = PopsHandler.handleQueryElement(animElement, PopsType);
		if (config.isMobile || pops.isPhone()) {
			// @ts-ignore
			PopsDOMUtils.addClassName(popsElement, config.mobileClassName);
		}
		/**
		 * 遮罩层元素
		 * @type {?HTMLDivElement}
		 */
		let maskElement = null;
		/**
		 * 已创建的元素列表
		 * @type {HTMLElement[]}
		 */
		let elementList = [animElement];

		/* 遮罩层元素 */
		// @ts-ignore
		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				// @ts-ignore
				config: config,
				animElement: animElement,
				maskHTML: maskHTML,
			});
			maskElement = _handleMask_.maskElement;
			elementList.push(maskElement);
		}

		/* 处理返回的配置 */
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			// @ts-ignore
			animElement,
			popsElement,
			maskElement,
			config
		);
		/* 为顶部右边的关闭按钮添加点击事件 */
		PopsHandler.handleClickEvent(
			// @ts-ignore
			btnCloseElement,
			"close",
			eventDetails,
			// @ts-ignore
			config.btn.close.callback
		);

		/* 创建到页面中 */
		// @ts-ignore
		PopsUtils.appendChild($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		// @ts-ignore
		PopsUtils.appendChild($shadowContainer);
		/* 追加遮罩层元素 */
		if (maskElement != null) {
			animElement.after(maskElement);
		}

		/**
		 * 处理内部配置
		 */
		const HandleContetDetails = {
			/**
			 * 左侧的ul容器
			 * @type {HTMLUListElement}
			 */
			// @ts-ignore
			asideULElement: null,
			/**
			 * 右侧主内容的顶部文字ul容器
			 * @type {HTMLUListElement}
			 */
			// @ts-ignore
			sectionContainerHeaderULElement: null,
			/**
			 * 右侧主内容的ul容器
			 * @type {HTMLUListElement}
			 */
			// @ts-ignore
			sectionContainerULElement: null,
			init() {
				// @ts-ignore
				this.asideULElement = contentAsideElement.querySelector("ul");
				this.sectionContainerHeaderULElement =
					// @ts-ignore
					contentSectionContainerElement.querySelectorAll("ul")[0];
				this.sectionContainerULElement =
					// @ts-ignore
					contentSectionContainerElement.querySelectorAll("ul")[1];
				/**
				 * 默认点击的左侧容器
				 * @type {HTMLLIElement}
				 */
				// @ts-ignore
				let asideDefaultItemElement = null;
				let isScrollToDefaultView = false;
				config.content.forEach((asideItem) => {
					let asideLiElement = this.getAsideItem(asideItem);
					this.setAsideItemClickEvent(asideLiElement, asideItem);
					this.asideULElement.appendChild(asideLiElement);
					if (asideDefaultItemElement == null) {
						let flag = false;
						if (typeof asideItem.isDefault === "function") {
							flag = Boolean(asideItem.isDefault());
						} else {
							flag = Boolean(asideItem.isDefault);
						}
						if (flag) {
							asideDefaultItemElement = asideLiElement;
							isScrollToDefaultView = Boolean(asideItem.scrollToDefaultView);
						}
					}
				});

				/* 点击左侧列表 */
				if (
					asideDefaultItemElement == null &&
					this.asideULElement.children.length
				) {
					/* 默认第一个 */
					// @ts-ignore
					asideDefaultItemElement = this.asideULElement.children[0];
				}
				if (asideDefaultItemElement) {
					/* 点击选择的那一项 */
					asideDefaultItemElement.click();
					if (isScrollToDefaultView) {
						asideDefaultItemElement?.scrollIntoView();
					}
				} else {
					console.error("pops.panel：左侧容器没有项");
				}
			},
			/**
			 * 清空container容器的元素
			 */
			clearContainer() {
				this.sectionContainerHeaderULElement.innerHTML = "";
				this.sectionContainerULElement.innerHTML = "";
				contentElement
					?.querySelectorAll("section.pops-panel-deepMenu-container")
					.forEach((ele) => ele.remove());
			},
			/**
			 * 清空左侧容器已访问记录
			 */
			clearAsideItemIsVisited() {
				// @ts-ignore
				contentAsideElement
					.querySelectorAll(".pops-is-visited")
					.forEach((element) => {
						// @ts-ignore
						PopsDOMUtils.removeClassName(element, "pops-is-visited");
					});
			},
			/**
			 * 设置左侧容器已访问记录
			 * @param {HTMLElement} element
			 */
			setAsideItemIsVisited(element) {
				PopsDOMUtils.addClassName(element, "pops-is-visited");
			},
			/**
			 * 为元素添加自定义属性
			 * @param {HTMLElement} element
			 * @param {object | object[] | null | undefined} attributes
			 */
			addElementAttributes(element, attributes) {
				if (attributes == null) {
					return;
				}
				if (Array.isArray(attributes)) {
					attributes.forEach((attrObject) => {
						this.addElementAttributes(element, attrObject);
					});
				} else {
					Object.keys(attributes).forEach((attributeName) => {
						// @ts-ignore
						element.setAttribute(attributeName, attributes[attributeName]);
					});
				}
			},
			/**
			 * 为元素设置(自定义)属性
			 * @param {HTMLElement} element
			 * @param {any} props
			 */
			setElementProps(element, props) {
				if (props == null) {
					return;
				}
				Object.keys(props).forEach((propName) => {
					// @ts-ignore
					element[propName] = props[propName];
				});
			},
			/**
			 * 获取左侧容器元素<li>
			 * @param { PopsPanelContentConfig } asideConfig
			 * @returns
			 */
			getAsideItem(asideConfig) {
				let liElement = document.createElement("li");
				liElement.id = asideConfig.id;
				// @ts-ignore
				liElement.__forms__ = asideConfig.forms;
				liElement.innerHTML = asideConfig.title;
				// @ts-ignore
				this.addElementAttributes(liElement, asideConfig.attributes);
				// @ts-ignore
				this.setElementProps(liElement, asideConfig.props);
				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ==> switch
			 * @param {PopsPanelSwitchDetails} formConfig
			 * @returns
			 */
			getSectionContainerItem_switch(formConfig) {
				// @ts-ignore
				// @ts-ignore
				function setSwitchChecked(
					// @ts-ignore
					switchElement,
					// @ts-ignore
					switchInputElement,
					checked = false
				) {
					switchInputElement.checked = Boolean(checked);
					if (checked) {
						PopsDOMUtils.addClassName(
							switchElement,
							"pops-panel-switch-is-checked"
						);
					} else {
						PopsDOMUtils.removeClassName(
							switchElement,
							"pops-panel-switch-is-checked"
						);
					}
				}
				let liElement = document.createElement("li");
				// @ts-ignore
				liElement.__formConfig__ = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				// @ts-ignore
				this.addElementAttributes(liElement, formConfig.attributes);
				// @ts-ignore
				this.setElementProps(liElement, formConfig.props);
				/* 左边底部的描述的文字 */
				let leftDescriptionText = "";
				if (Boolean(formConfig.description)) {
					leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
				}
				liElement.innerHTML = `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
					${leftDescriptionText}
				</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`;
				const PopsPanelSwitch = {
					[Symbol.toStringTag]: "PopsPanelSwitch",
					$data: {
						value: Boolean(formConfig.getValue()),
					},
					$ele: {
						/**
						 * @type {HTMLDivElement}
						 */
						// @ts-ignore
						switch: liElement.querySelector(".pops-panel-switch"),
						/**
						 * @type {HTMLInputElement}
						 */
						// @ts-ignore
						input: liElement.querySelector(".pops-panel-switch__input"),
						/**
						 * @type {HTMLSpanElement}
						 */
						// @ts-ignore
						core: liElement.querySelector(".pops-panel-switch__core"),
					},
					init() {
						this.setStatus(this.$data.value);
						if (formConfig.disabled) {
							this.disable();
						}
						this.setClickEvent();
					},
					setClickEvent() {
						let that = this;
						// @ts-ignore
						PopsDOMUtils.on(this.$ele.core, "click", void 0, function (event) {
							if (
								that.$ele.input.disabled ||
								that.$ele.switch.hasAttribute("data-disabled")
							) {
								return;
							}
							that.$data.value = that.getStatus();
							that.setStatus(that.$data.value);
							if (typeof formConfig.callback === "function") {
								// @ts-ignore
								formConfig.callback(event, that.$data.value);
							}
						});
					},
					/**
					 * 设置状态
					 */
					setStatus(isChecked = false) {
						isChecked = Boolean(isChecked);
						this.$ele.input.checked = isChecked;
						if (isChecked) {
							PopsDOMUtils.addClassName(
								this.$ele.switch,
								"pops-panel-switch-is-checked"
							);
						} else {
							PopsDOMUtils.removeClassName(
								this.$ele.switch,
								"pops-panel-switch-is-checked"
							);
						}
					},
					/**
					 * 根据className来获取逆反值
					 */
					getStatus() {
						let checkedValue = false;
						if (
							!PopsDOMUtils.containsClassName(
								this.$ele.switch,
								"pops-panel-switch-is-checked"
							)
						) {
							checkedValue = true;
						}
						return checkedValue;
					},
					/**
					 * 禁用复选框
					 */
					disable() {
						this.$ele.input.disabled = true;
						// @ts-ignore
						this.$ele.switch.setAttribute("data-disabled", true);
					},
					/**
					 * 启用复选框
					 */
					notDisable() {
						this.$ele.input.disabled = false;
						this.$ele.switch.removeAttribute("data-disabled");
					},
				};

				PopsPanelSwitch.init();
				// @ts-ignore
				liElement["data-switch"] = PopsPanelSwitch;
				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ==> slider
			 * @param {PopsPanelSliderDetails} formConfig
			 * @returns
			 */
			getSectionContainerItem_slider(formConfig) {
				let liElement = document.createElement("li");
				// @ts-ignore
				liElement.__formConfig__ = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				// @ts-ignore
				this.addElementAttributes(liElement, formConfig.attributes);
				// @ts-ignore
				this.setElementProps(liElement, formConfig.props);
				/* 左边底部的描述的文字 */
				let leftDescriptionText = "";
				if (Boolean(formConfig.description)) {
					leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
				}
				liElement.innerHTML = `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
					${leftDescriptionText}
				</div>
				<div class="pops-panel-slider">
					<input type="range" min="${formConfig.min}" max="${formConfig.max}">
				</div>`;
				/**
				 * @type {HTMLInputElement}
				 */
				// @ts-ignore
				let rangeInputElement = liElement.querySelector(
					".pops-panel-slider input[type=range]"
				);
				if (formConfig.step) {
					// @ts-ignore
					rangeInputElement.setAttribute("step", formConfig.step);
				}
				// @ts-ignore
				rangeInputElement.value = formConfig.getValue();
				/**
				 * 获取提示的内容
				 * @param {number} value
				 * @returns {string}
				 */
				let getToolTipContent = function (value) {
					if (typeof formConfig.getToolTipContent === "function") {
						return formConfig.getToolTipContent(value);
					} else {
						// @ts-ignore
						return value;
					}
				};
				let tooltip = pops.tooltip({
					// @ts-ignore
					target: rangeInputElement.parentElement,
					// @ts-ignore
					content: getToolTipContent(rangeInputElement.value),
					zIndex: 1000000,
					className: "github-tooltip",
					// @ts-ignore
					triggerShowEventCallBack(toolTipNode) {
						toolTipNode.querySelector("div").innerText = getToolTipContent(
							// @ts-ignore
							rangeInputElement.value
						);
					},
					alwaysShow: false,
					only: false,
					// @ts-ignore
					position: "top",
					arrowDistance: 10,
				});
				// @ts-ignore
				PopsDOMUtils.on(
					rangeInputElement,
					["input", "propertychange"],
					void 0,
					function (event) {
						// @ts-ignore
						tooltip.toolTipNode.querySelector("div").innerText =
							// @ts-ignore
							getToolTipContent(rangeInputElement.value);
						if (typeof formConfig.callback === "function") {
							// @ts-ignore
							formConfig.callback(event, event.target.value);
						}
					}
				);
				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ==> slider
			 * @param {PopsPanelSliderDetails} formConfig
			 * @returns
			 */
			getSectionContainerItem_slider_new(formConfig) {
				let liElement = document.createElement("li");
				// @ts-ignore
				liElement.__formConfig__ = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				// @ts-ignore
				this.addElementAttributes(liElement, formConfig.attributes);
				// @ts-ignore
				this.setElementProps(liElement, formConfig.props);
				/* 左边底部的描述的文字 */
				let leftDescriptionText = "";
				if (Boolean(formConfig.description)) {
					leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
				}
				liElement.innerHTML = `
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
					${leftDescriptionText}
				</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`;
				const PopsPanelSlider = {
					[Symbol.toStringTag]: "PopsPanelSlider",
					/**
					 * 值
					 */
					value: formConfig.getValue(),
					/**
					 * 最小值
					 */
					min: formConfig.min,
					/**
					 * 最大值
					 */
					max: formConfig.max,
					/**
					 * 间隔
					 */
					step: formConfig.step || 1,
					$data: {
						/**
						 * 是否正在移动
						 */
						isMove: false,
						/**
						 * 是否已初始化已拖拽的距离
						 */
						isInitDragPosition: false,
						/**
						 * 是否正在检测是否停止拖拽
						 */
						isCheckingStopDragMove: false,
						/**
						 * 总宽度（px）
						 */
						totalWidth: 0,
						/**
						 * 每一块的间隔（px）
						 */
						stepPx: 0,
						/**
						 * 已拖拽的距离（px）
						 */
						dragWidth: 0,
						/**
						 * 已拖拽的百分比
						 */
						dragPercent: 0,
						/**
						 * 每一次块的信息
						 * 例如：当最小值是2，最大值是10，step为2
						 * 那么生成[2,4,6,8,10] 共计5个
						 * 又获取到当前滑块总长度是200px
						 * 那么生成映射
						 * 2 => 0px~40px
						 * 4 => 40px~80px
						 * 6 => 80px~120px
						 * 8 => 120px~160px
						 * 10 => 160px~200px
						 * @type {Map<number,{
						 * value: number,
						 * px: number,
						 * pxLeft: number,
						 * pxRight: number,
						 * percent: number,
						 * }>}
						 */
						stepBlockMap: new Map(),
					},
					$ele: {
						slider: liElement.querySelector(".pops-slider"),
						runAway: liElement.querySelector(".pops-slider__runway"),
						bar: liElement.querySelector(".pops-slider__bar"),
						buttonWrapper: liElement.querySelector(
							".pops-slider__button-wrapper"
						),
						button: liElement.querySelector(".pops-slider__button"),
						/**
						 * @type {{
						 * guid: string,
						 * $shadowContainer: HTMLDivElement,
						 * $shadowRoot: ShadowRoot,
						 * config: PopsToolTipDetails,
						 * toolTipNode: HTMLDivElement,
						 * show: ()=>void,
						 * close: ()=>void,
						 * off: ()=>void,
						 * on: ()=>void,
						 * }}
						 */
						// @ts-ignore
						tooltip: null,
					},
					$interval: {
						isCheck: false,
					},
					$tooltip: null,
					init() {
						this.initEleData();
						this.setToolTipEvent();
						this.setPanEvent();
						this.setRunAwayClickEvent();
						this.intervalInit();
						if (formConfig.disabled) {
							this.disableDrag();
						}
					},
					/**
					 * 10s内循环获取slider的宽度等信息
					 * 获取到了就可以初始化left的值
					 * @param {number} [checkStepTime=200] 每次检测的间隔时间
					 * @param {number} [maxTime=10000] 最大的检测时间
					 */
					intervalInit(checkStepTime = 200, maxTime = 10000) {
						if (this.$interval.isCheck) {
							return;
						}
						this.$interval.isCheck = true;
						let isSuccess = false;
						let oldTotalWidth = this.$data.totalWidth;
						// @ts-ignore
						let timer = null;
						let interval = setInterval(() => {
							if (isSuccess) {
								this.$interval.isCheck = false;
								// @ts-ignore
								clearTimeout(timer);
								clearInterval(interval);
							} else {
								this.initTotalWidth();
								if (this.$data.totalWidth !== 0) {
									isSuccess = true;
									if (this.$data.totalWidth !== oldTotalWidth) {
										/* slider的总宽度改变了 */
										if (MathFloatUtils.isFloat(this.step)) {
											this.initFloatStepMap();
										} else {
											this.initStepMap();
										}
										this.initSliderPosition();
									}
								}
							}
						}, checkStepTime);
						/* 最长检测时间是10s */
						timer = setTimeout(() => {
							clearInterval(interval);
						}, maxTime);
					},
					/**
					 * 把数据添加到元素上
					 */
					initEleData() {
						// @ts-ignore
						this.$ele.slider.setAttribute("data-min", this.min);
						// @ts-ignore
						this.$ele.slider.setAttribute("data-max", this.max);
						// @ts-ignore
						this.$ele.slider.setAttribute("data-value", this.value);
						// @ts-ignore
						this.$ele.slider.setAttribute("data-step", this.step);
						// @ts-ignore
						this.$ele.slider["data-min"] = this.min;
						// @ts-ignore
						this.$ele.slider["data-max"] = this.max;
						// @ts-ignore
						this.$ele.slider["data-value"] = this.value;
						// @ts-ignore
						this.$ele.slider["data-step"] = this.step;
					},
					/**
					 * 初始化滑块的总长度的数据(px)
					 */
					initTotalWidth() {
						// @ts-ignore
						this.$data.totalWidth = PopsDOMUtils.width(this.$ele.runAway);
					},
					/**
					 * 初始化每一个块的具体数据信息
					 */
					initStepMap() {
						let index = 0;
						// 计算出份数
						let blockNums = (this.max - this.min) / this.step;
						// 计算出每一份占据的px
						this.$data.stepPx = this.$data.totalWidth / blockNums;
						let widthPx = 0;
						for (
							let stepValue = this.min;
							stepValue <= this.max;
							stepValue += this.step
						) {
							let value = this.formatValue(stepValue);
							let info = {};
							if (value === this.min) {
								/* 起始 */
								info = {
									value: value,
									px: 0,
									pxLeft: 0,
									pxRight: this.$data.stepPx / 2,
									percent: 0,
								};
							} else {
								info = {
									value: value,
									px: widthPx,
									pxLeft: widthPx - this.$data.stepPx / 2,
									pxRight: widthPx + this.$data.stepPx / 2,
									percent: widthPx / this.$data.totalWidth,
								};
								//if (value === this.max) {
								//  info["pxLeft"] = this.$data.stepBlockMap.get(
								//    index - 1
								//  ).pxRight;
								//  info["pxRight"] = this.$data.totalWidth;
								//}
							}
							// @ts-ignore
							this.$data.stepBlockMap.set(index, info);
							index++;
							widthPx += this.$data.stepPx;
						}
					},
					/**
					 * 初始化每一个块的具体数据信息（浮点）
					 */
					initFloatStepMap() {
						let index = 0;
						// 计算出份数
						let blockNums = (this.max - this.min) / this.step;
						// 计算出每一份占据的px
						this.$data.stepPx = this.$data.totalWidth / blockNums;
						let widthPx = 0;
						for (
							let stepValue = this.min;
							stepValue <= this.max;
							stepValue = MathFloatUtils.add(stepValue, this.step)
						) {
							let value = this.formatValue(stepValue);
							let info = {};
							if (value === this.min) {
								/* 起始 */
								info = {
									value: value,
									px: 0,
									pxLeft: 0,
									pxRight: this.$data.stepPx / 2,
									percent: 0,
								};
							} else {
								info = {
									value: value,
									px: widthPx,
									pxLeft: widthPx - this.$data.stepPx / 2,
									pxRight: widthPx + this.$data.stepPx / 2,
									percent: widthPx / this.$data.totalWidth,
								};
								//if (value === this.max) {
								//  info["pxLeft"] = this.$data.stepBlockMap.get(
								//    index - 1
								//  ).pxRight;
								//  info["pxRight"] = this.$data.totalWidth;
								//}
							}
							// @ts-ignore
							this.$data.stepBlockMap.set(index, info);
							index++;
							widthPx += this.$data.stepPx;
						}
					},
					/**
					 * 初始化slider的默认起始left的百分比值
					 */
					initSliderPosition() {
						/* 设置起始默认style的left值 */
						let percent = 0;
						for (const [
							// @ts-ignore
							// @ts-ignore
							index,
							stepBlockInfo,
						] of this.$data.stepBlockMap.entries()) {
							/* 判断值是否和区域内的值相等 */
							if (stepBlockInfo.value == this.value) {
								percent = stepBlockInfo.percent;
								this.$data.dragWidth = stepBlockInfo.px;
								break;
							}
						}
						percent = this.formatValue(percent * 100);
						this.setSliderPosition(percent);
					},
					/**
					 * 判断数字是否是浮点数
					 * @param {number} num
					 * @returns
					 */
					isFloat(num) {
						return Number(num) === num && num % 1 !== 0;
					},
					/**
					 * 值改变的回调
					 * @param {any} event
					 * @param {number} value
					 */
					valueChangeCallBack(event, value) {
						if (typeof formConfig.callback === "function") {
							formConfig.callback(event, value);
						}
					},
					/**
					 * 根据拖拽距离获取滑块应该在的区间和值
					 */
					// @ts-ignore
					getDragInfo(dragX) {
						let result = this.$data.stepBlockMap.get(0);
						for (const [
							// @ts-ignore
							// @ts-ignore
							index,
							stepBlockInfo,
						] of this.$data.stepBlockMap.entries()) {
							if (
								stepBlockInfo.pxLeft <= dragX &&
								dragX < stepBlockInfo.pxRight
							) {
								result = stepBlockInfo;
								break;
							}
						}
						return result;
					},
					/**
					 * 获取滑块的当前脱拖拽占据的百分比
					 * @param {number} dragWidth
					 */
					getSliderPositonPercent(dragWidth) {
						return dragWidth / this.$data.totalWidth;
					},
					/**
					 * 根据step格式化value
					 * @param {number} num
					 */
					formatValue(num) {
						if (MathFloatUtils.isFloat(this.step)) {
							num = parseFloat(num.toFixed(2));
						} else {
							// @ts-ignore
							num = parseInt(num);
						}
						return num;
					},
					/**
					 * 设置滑块的位置偏移（left）
					 * @param {number} percent 百分比
					 */
					setSliderPosition(percent) {
						// @ts-ignore
						if (parseInt(percent) === 1) {
							percent = 1;
						}
						if (percent > 1) {
							percent = percent / 100;
						}
						/* 滑块按钮的偏移 */
						// @ts-ignore
						this.$ele.buttonWrapper.style.left = `${percent * 100}%`;
						/* 滑块进度的宽度 */
						// @ts-ignore
						this.$ele.bar.style.width = `${percent * 100}%`;
					},
					/**
					 * 禁止拖拽
					 */
					disableDrag() {
						// @ts-ignore
						this.$ele.runAway.classList.add("pops-slider-is-disabled");
					},
					/**
					 * 允许拖拽
					 */
					allowDrag() {
						// @ts-ignore
						this.$ele.runAway.classList.remove("pops-slider-is-disabled");
					},
					/**
					 * 判断当前滑块是否被禁用
					 */
					isDisabledDrag() {
						// @ts-ignore
						return this.$ele.runAway.classList.contains(
							"pops-slider-is-disabled"
						);
					},
					/**
					 * 设置进度条点击定位的事件
					 */
					setRunAwayClickEvent() {
						PopsDOMUtils.on(
							// @ts-ignore
							this.$ele.runAway,
							"click",
							void 0,
							/**
							 *
							 * @param {PointerEvent} event
							 */
							(event) => {
								if (
									event.target !== this.$ele.runAway &&
									event.target !== this.$ele.bar
								) {
									return;
								}
								// @ts-ignore
								let clickX = parseFloat(event.offsetX);
								this.dragStartCallBack();
								this.dragMoveCallBack(event, clickX, this.value);
								this.dragEndCallBack(clickX);
							},
							{
								capture: false,
							}
						);
					},
					/**
					 * 拖拽开始的回调，如果返回false，禁止拖拽
					 */
					dragStartCallBack() {
						if (!this.$data.isMove) {
							if (this.isDisabledDrag()) {
								return false;
							}
							this.$data.isMove = true;
						}
						return true;
					},
					/**
					 * 拖拽中的回调
					 * @param {MouseEvent|TouchEvent} event 事件
					 * @param {number} dragX 当前拖拽的距离
					 * @param {number} oldValue 旧的值
					 */
					dragMoveCallBack(event, dragX, oldValue) {
						let dragPercent = 0;
						if (dragX <= 0) {
							dragPercent = 0;
							this.value = this.min;
						} else if (dragX >= this.$data.totalWidth) {
							dragPercent = 1;
							this.value = this.max;
						} else {
							const dragInfo = this.getDragInfo(dragX);
							// @ts-ignore
							dragPercent = dragInfo.percent;
							// @ts-ignore
							this.value = this.formatValue(dragInfo.value);
						}
						this.$data.dragPercent = dragPercent;
						this.setSliderPosition(this.$data.dragPercent);
						this.showToolTip();
						if (oldValue !== this.value) {
							this.valueChangeCallBack(event, this.value);
						}
					},
					/**
					 * 拖拽结束的回调
					 */
					// @ts-ignore
					dragEndCallBack(dragX) {
						this.$data.isMove = false;
						if (dragX <= 0) {
							this.$data.dragWidth = 0;
						} else if (dragX >= this.$data.totalWidth) {
							this.$data.dragWidth = this.$data.totalWidth;
						} else {
							this.$data.dragWidth = dragX;
						}
						this.closeToolTip();
					},
					/**
					 * 设置点击拖拽事件
					 */
					setPanEvent() {
						const AnyTouch = PopsUtils.AnyTouch();
						// @ts-ignore
						this.$tooltip = new AnyTouch(this.$ele.button, {
							preventEvent() {
								return false;
							},
						});
						/**
						 * 当前的拖拽的距离px
						 * @type {number}
						 */
						let currentDragX = 0;
						/* 监听拖拽 */
						// @ts-ignore
						this.$tooltip.on("at:move", (event) => {
							if (!this.dragStartCallBack()) {
								return;
							}
							let oldValue = this.value;
							// @ts-ignore
							const runAwayRect = this.$ele.runAway.getBoundingClientRect();
							let displacementX =
								event.x - (runAwayRect.left + globalThis.screenX);
							if (displacementX <= 0) {
								displacementX = 0;
							} else if (displacementX >= runAwayRect.width) {
								displacementX = runAwayRect.width;
							}
							currentDragX = displacementX;
							/* 拖拽移动 */
							this.dragMoveCallBack(event, currentDragX, oldValue);
						});
						/* 监听触点离开，处理某些情况下，拖拽松开，但是未触发pan事件，可以通过设置这个来关闭tooltip */
						// @ts-ignore
						// @ts-ignore
						this.$tooltip.on("at:end", (event) => {
							this.dragEndCallBack(currentDragX);
						});
					},
					/**
					 * 显示悬浮的
					 */
					showToolTip() {
						this.$ele.tooltip.show();
					},
					/**
					 * 关闭悬浮的
					 */
					closeToolTip() {
						this.$ele.tooltip.close();
					},
					/**
					 * 检测在1000ms内，是否停止了拖拽
					 */
					checkStopDragMove() {
						if (this.$data.isCheckingStopDragMove) {
							return;
						}
						this.$data.isCheckingStopDragMove = true;
						let interval = setInterval(() => {
							if (!this.$data.isMove) {
								this.$data.isCheckingStopDragMove = false;
								this.closeToolTip();
								clearInterval(interval);
							}
						}, 200);
						setTimeout(() => {
							this.$data.isCheckingStopDragMove = false;
							clearInterval(interval);
						}, 2000);
					},
					/**
					 * 设置拖拽按钮的悬浮事件
					 */
					setToolTipEvent() {
						/**
						 * 获取提示的内容
						 */
						function getToolTipContent() {
							if (typeof formConfig.getToolTipContent === "function") {
								return formConfig.getToolTipContent(PopsPanelSlider.value);
							} else {
								return PopsPanelSlider.value;
							}
						}
						// @ts-ignore
						let tooltipContent = null;
						// @ts-ignore
						this.$ele.tooltip = pops.tooltip({
							// @ts-ignore
							target: this.$ele.button,
							// @ts-ignore
							content: getToolTipContent,
							zIndex: 1000000,
							className: "github-tooltip",
							only: false,
							eventOption: {
								capture: true,
								passive: true,
							},
							showBeforeCallBack: () => {
								this.intervalInit();
							},
							// @ts-ignore
							// @ts-ignore
							showAfterCallBack: (toolTipNode) => {
								// @ts-ignore
								tooltipContent.innerText = getToolTipContent();
							},
							closeBeforeCallBack: () => {
								if (this.$data.isMove) {
									this.checkStopDragMove();
									return false;
								}
							},
							alwaysShow: false,
							// @ts-ignore
							only: false,
							// @ts-ignore
							position: "top",
							arrowDistance: 10,
						});
						tooltipContent = this.$ele.tooltip.toolTipNode.querySelector("div");
					},
				};
				PopsPanelSlider.init();
				// @ts-ignore
				liElement["data-slider"] = PopsPanelSlider;
				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ==> input
			 * @param {PopsPanelInputDetails} formConfig
			 * @returns
			 */
			getSectionContainerItem_input(formConfig) {
				let liElement = document.createElement("li");
				// @ts-ignore
				liElement.__formConfig__ = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				// @ts-ignore
				this.addElementAttributes(liElement, formConfig.attributes);
				// @ts-ignore
				this.setElementProps(liElement, formConfig.props);
				let inputType = "text";
				if (formConfig.isPassword) {
					inputType = "password";
				} else if (formConfig.isNumber) {
					inputType = "number";
				}
				/* 左边底部的描述的文字 */
				let leftDescriptionText = "";
				if (Boolean(formConfig.description)) {
					leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
				}
				liElement.innerHTML = `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
				</div>
				<div class="pops-panel-input">
					<input type="${inputType}" placeholder="${formConfig.placeholder}">
				</div>
				`;
				const PopsPanelInput = {
					[Symbol.toStringTag]: "PopsPanelInput",
					$ele: {
						/**
						 * @type {HTMLDivElement}
						 */
						// @ts-ignore
						panelInput: liElement.querySelector(".pops-panel-input"),
						/**
						 * @type {HTMLInputElement}
						 */
						// @ts-ignore
						input: liElement.querySelector("input"),
						inputSpanIcon: document.createElement("span"),
						/**
						 * @type {HTMLSpanElement}
						 */
						// @ts-ignore
						inputSpanIconInner: null,
						/**
						 * @type {HTMLElement}
						 */
						// @ts-ignore
						icon: null,
					},
					$data: {
						value: formConfig.getValue(),
						isView: false,
					},
					init() {
						this.initEle();
						this.setInputValue(this.$data.value);
						/* 如果是密码框，放进图标 */
						if (formConfig.isPassword) {
							this.setCircleIcon(pops.config.iconSVG.view);
							this.setCircleIconClickEvent();
						} else {
							/* 先判断预设值是否为空，不为空添加清空图标按钮 */
							if (this.$ele.input.value != "") {
								this.setCircleIcon(pops.config.iconSVG.circleClose);
								this.setCircleIconClickEvent();
							}
						}

						this.setInputChangeEvent();
						if (formConfig.disabled) {
							this.disable();
						}
						if (typeof formConfig.handlerCallBack === "function") {
							// @ts-ignore
							formConfig.handlerCallBack(liElement, this.$ele.input);
						}
					},
					/**
					 * 初始化$ele的配置
					 */
					initEle() {
						// @ts-ignore
						this.$ele.input.parentElement.insertBefore(
							this.$ele.inputSpanIcon,
							this.$ele.input.nextSibling
						);
						this.$ele.inputSpanIcon.className = "pops-panel-input__suffix";
						this.$ele.inputSpanIcon.innerHTML = `
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
						`;
						// @ts-ignore
						this.$ele.inputSpanIconInner =
							this.$ele.inputSpanIcon.querySelector(
								".pops-panel-input__suffix-inner"
							);
						// @ts-ignore
						this.$ele.icon =
							this.$ele.inputSpanIcon.querySelector(".pops-panel-icon");
					},
					/**
					 * 禁用
					 */
					disable() {
						this.$ele.input.disabled = true;
						this.$ele.panelInput.classList.add("pops-input-disabled");
					},
					/**
					 * 取消禁用
					 */
					notDisable() {
						this.$ele.input.disabled = false;
						this.$ele.panelInput.classList.remove("pops-input-disabled");
					},
					/**
					 * 判断是否已被禁用
					 */
					isDisabled() {
						return this.$ele.input.disabled;
					},
					/**
					 * 设置输入框内容
					 * @param {string} [value=""] 值
					 */
					setInputValue(value = "") {
						this.$ele.input.value = value;
					},
					/**
					 * 设置input元素的type
					 * @param {string} [typeValue="text"] type值
					 */
					setInputType(typeValue = "text") {
						this.$ele.input.setAttribute("type", typeValue);
					},
					/**
					 * 删除图标按钮
					 */
					removeCircleIcon() {
						this.$ele.icon.innerHTML = "";
					},
					/**
					 * 添加清空图标按钮
					 * @param {string} [svgHTML=pops.config.iconSVG.circleClose] svg图标，默认为清空的图标
					 */
					setCircleIcon(svgHTML = pops.config.iconSVG.circleClose) {
						this.$ele.icon.innerHTML = svgHTML;
					},
					/**
					 * 添加图标按钮的点击事件
					 */
					setCircleIconClickEvent() {
						// @ts-ignore
						PopsDOMUtils.on(this.$ele.icon, "click", void 0, () => {
							if (this.isDisabled()) {
								return;
							}
							/* 删除图标 */
							this.removeCircleIcon();
							if (formConfig.isPassword) {
								/* 密码输入框 */
								if (this.$data.isView) {
									/* 当前可见 => 点击改变为隐藏 */
									this.$data.isView = false;
									/* 显示输入框内容，且更换图标为隐藏图标 */
									this.setInputType("text");
									this.setCircleIcon(pops.config.iconSVG.hide);
								} else {
									/* 当前不可见 => 点击改变为显示 */
									this.$data.isView = true;
									/* 隐藏输入框内容，且更换图标为显示图标 */
									this.setInputType("password");
									this.setCircleIcon(pops.config.iconSVG.view);
								}
							} else {
								/* 普通输入框 */
								/* 清空内容 */
								this.setInputValue("");
								/* 获取焦点 */
								this.$ele.input.focus();
								/* 触发内容改变事件 */
								this.$ele.input.dispatchEvent(new Event("input"));
							}
						});
					},
					/**
					 * 监听输入框内容改变
					 */
					setInputChangeEvent() {
						// @ts-ignore
						PopsDOMUtils.on(
							this.$ele.input,
							["input", "propertychange"],
							void 0,
							(event) => {
								this.$data.value = this.$ele.input.value;
								if (!formConfig.isPassword) {
									/* 不是密码框 */
									if (
										this.$ele.input.value !== "" &&
										this.$ele.icon.innerHTML === ""
									) {
										/* 不为空，显示清空图标 */
										this.setCircleIcon(pops.config.iconSVG.circleClose);
										this.setCircleIconClickEvent();
									} else if (this.$ele.input.value === "") {
										this.removeCircleIcon();
									}
								}
								if (typeof formConfig.callback === "function") {
									if (formConfig.isNumber) {
										formConfig.callback(
											// @ts-ignore
											event,
											this.$ele.input.value,
											this.$ele.input.valueAsNumber
										);
									} else {
										// @ts-ignore
										formConfig.callback(event, this.$ele.input.value);
									}
								}
							}
						);
					},
				};
				PopsPanelInput.init();
				// @ts-ignore
				liElement["data-input"] = PopsPanelInput;
				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ==> textarea
			 * @param {PopsPanelTextAreaDetails} formConfig
			 * @returns
			 */
			getSectionContainerItem_textarea(formConfig) {
				let liElement = document.createElement("li");
				// @ts-ignore
				liElement.__formConfig__ = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				// @ts-ignore
				this.addElementAttributes(liElement, formConfig.attributes);
				// @ts-ignore
				this.setElementProps(liElement, formConfig.props);

				/* 左边底部的描述的文字 */
				let leftDescriptionText = "";
				if (Boolean(formConfig.description)) {
					leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
				}
				liElement.innerHTML = `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
				</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${formConfig.placeholder ?? ""}">
				</textarea>
				</div>
				`;

				const PopsPanelTextArea = {
					[Symbol.toStringTag]: "PopsPanelTextArea",
					$ele: {
						/**
						 * @type {HTMLDivElement}
						 */
						// @ts-ignore
						panelTextarea: liElement.querySelector(".pops-panel-textarea"),
						/**
						 * @type {HTMLTextAreaElement}
						 */
						// @ts-ignore
						textarea: liElement.querySelector(".pops-panel-textarea textarea"),
					},
					$data: {
						value: formConfig.getValue(),
					},
					init() {
						this.setValue(this.$data.value);
						this.setChangeEvent();
						if (formConfig.disabled) {
							this.disable();
						}
					},
					disable() {
						// @ts-ignore
						this.$ele.textarea.setAttribute("disabled", true);
						this.$ele.panelTextarea.classList.add(
							"pops-panel-textarea-disable"
						);
					},
					notDisable() {
						// @ts-ignore
						this.$ele.textarea.removeAttribute("disabled", true);
						this.$ele.panelTextarea.classList.remove(
							"pops-panel-textarea-disable"
						);
					},
					isDisabled() {
						return (
							this.$ele.textarea.hasAttribute("disabled") ||
							// @ts-ignore
							this.$ele.panelTextarea.classList.hasAttribute(
								"pops-panel-textarea-disable"
							)
						);
					},
					// @ts-ignore
					setValue(value) {
						this.$ele.textarea.value = value;
					},
					/**
					 * 监听选择内容改变
					 */
					setChangeEvent() {
						// @ts-ignore
						PopsDOMUtils.on(
							this.$ele.textarea,
							["input", "propertychange"],
							void 0,
							(event) => {
								// @ts-ignore
								this.$data.value = event.target.value;
								if (typeof formConfig.callback === "function") {
									// @ts-ignore
									formConfig.callback(event, event.target.value);
								}
							}
						);
					},
				};

				PopsPanelTextArea.init();
				// @ts-ignore
				liElement["data-textarea"] = PopsPanelTextArea;

				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ==> select
			 * @param {PopsPanelSelectDetails<any>} formConfig
			 * @returns
			 */
			getSectionContainerItem_select(formConfig) {
				let liElement = document.createElement("li");
				// @ts-ignore
				liElement.__formConfig__ = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				// @ts-ignore
				this.addElementAttributes(liElement, formConfig.attributes);
				// @ts-ignore
				this.setElementProps(liElement, formConfig.props);
				/* 左边底部的描述的文字 */
				let leftDescriptionText = "";
				if (Boolean(formConfig.description)) {
					leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
				}
				liElement.innerHTML = `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
				</div>
				<div class="pops-panel-select">
					<select></select>
				</div>
				`;

				const PopsPanelSelect = {
					[Symbol.toStringTag]: "PopsPanelSelect",
					$ele: {
						/**
						 * @type {HTMLDivElement}
						 */
						// @ts-ignore
						panelSelect: liElement.querySelector(".pops-panel-select"),
						/**
						 * @type {HTMLSelectElement}
						 */
						// @ts-ignore
						select: liElement.querySelector(".pops-panel-select select"),
					},
					$data: {
						defaultValue: formConfig.getValue(),
					},
					init() {
						this.initOption();
						this.setChangeEvent();
						this.setClickEvent();
						if (formConfig.disabled) {
							this.disable();
						}
					},
					disable() {
						// @ts-ignore
						this.$ele.select.setAttribute("disabled", true);
						this.$ele.panelSelect.classList.add("pops-panel-select-disable");
					},
					notDisable() {
						// @ts-ignore
						this.$ele.select.removeAttribute("disabled", true);
						this.$ele.panelSelect.classList.remove("pops-panel-select-disable");
					},
					isDisabled() {
						return (
							this.$ele.select.hasAttribute("disabled") ||
							// @ts-ignore
							this.$ele.panelSelect.classList.hasAttribute(
								"pops-panel-select-disable"
							)
						);
					},
					initOption() {
						formConfig.data.forEach((dataItem) => {
							let optionElement = document.createElement("option");
							// @ts-ignore
							optionElement.__value__ = dataItem.value;
							// @ts-ignore
							optionElement.__disable__ = dataItem.disable;
							if (dataItem.value === this.$data.defaultValue) {
								// @ts-ignore
								optionElement.setAttribute("selected", true);
							}
							optionElement.innerText = dataItem.text;
							this.$ele.select.appendChild(optionElement);
						});
					},
					setSelectOptionsDisableStatus() {
						if (this.$ele.select.options && this.$ele.select.options.length) {
							Array.from(this.$ele.select.options).forEach((optionItem) => {
								this.setOptionDisableStatus(optionItem);
							});
						}
					},
					// @ts-ignore
					setOptionDisableStatus(optionElement) {
						if (typeof optionElement.__disable__ === "function") {
							let disableStatus = optionElement.__disable__(
								optionElement.__value__
							);
							if (disableStatus) {
								optionElement.setAttribute("disabled", true);
							} else {
								optionElement.removeAttribute("disabled");
							}
						}
					},
					/**
					 * 监听选择内容改变
					 */
					setChangeEvent() {
						// @ts-ignore
						PopsDOMUtils.on(this.$ele.select, "change", void 0, (event) => {
							this.setSelectOptionsDisableStatus();
							if (typeof formConfig.callback === "function") {
								/**
								 * @type {HTMLOptionElement}
								 */
								let isSelectedElement =
									// @ts-ignore
									event.target[event.target.selectedIndex];
								// @ts-ignore
								let isSelectedValue = isSelectedElement.__value__;
								let isSelectedText =
									isSelectedElement.innerText || isSelectedElement.textContent;
								// @ts-ignore
								formConfig.callback(event, isSelectedValue, isSelectedText);
							}
						});
					},
					/**
					 * 监听点击事件
					 */
					setClickEvent() {
						// @ts-ignore
						PopsDOMUtils.on(this.$ele.select, "click", void 0, (event) => {
							this.setSelectOptionsDisableStatus();
							if (typeof formConfig.clickCallBack === "function") {
								// @ts-ignore
								formConfig.clickCallBack(event, this.$ele.select);
							}
						});
					},
				};

				PopsPanelSelect.init();
				// @ts-ignore
				liElement["data-select"] = PopsPanelSelect;
				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ==> button
			 * @param {PopsPanelButtonDetails} formConfig
			 * @returns
			 */
			getSectionContainerItem_button(formConfig) {
				let liElement = document.createElement("li");
				// @ts-ignore
				liElement.__formConfig__ = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				// @ts-ignore
				this.addElementAttributes(liElement, formConfig.attributes);
				// @ts-ignore
				this.setElementProps(liElement, formConfig.props);

				/* 左边底部的描述的文字 */
				let leftDescriptionText = "";
				if (Boolean(formConfig.description)) {
					leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
				}
				liElement.innerHTML = `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
					${leftDescriptionText}
				</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`;

				const PopsPanelButton = {
					[Symbol.toStringTag]: "PopsPanelButton",
					$ele: {
						panelButton: liElement.querySelector(".pops-panel-button"),
						button: liElement.querySelector(
							".pops-panel-button .pops-panel-button_inner"
						),
						icon: liElement.querySelector(
							".pops-panel-button .pops-bottom-icon"
						),
						spanText: liElement.querySelector(
							".pops-panel-button .pops-panel-button-text"
						),
					},
					$data: {},
					init() {
						// @ts-ignore
						this.$ele.panelButton.appendChild(this.$ele.button);
						this.initButton();
						this.setClickEvent();
					},
					initButton() {
						if (
							typeof formConfig.buttonIcon === "string" &&
							formConfig.buttonIcon.trim() !== ""
						) {
							/* 存在icon图标且不为空 */
							if (formConfig.buttonIcon in pops.config.iconSVG) {
								this.setIconSVG(pops.config.iconSVG[formConfig.buttonIcon]);
							} else {
								this.setIconSVG(formConfig.buttonIcon);
							}
							this.showIcon();
						} else {
							this.hideIcon();
						}
						/* 按钮文字 */
						let buttonText = formConfig.buttonText;
						if (typeof formConfig.buttonText === "function") {
							buttonText = formConfig.buttonText();
						}
						this.setButtonType(formConfig.buttonType);
						if (formConfig.buttonIsRightIcon) {
							this.setIconRight();
						} else {
							this.setIconLeft();
						}
						if (formConfig.disable) {
							this.disable();
						}
						// @ts-ignore
						this.setButtonText(buttonText);
						// @ts-ignore
						this.setIconLoadingStatus(formConfig.buttonIconIsLoading);
					},
					disable() {
						// @ts-ignore
						this.$ele.button.setAttribute("disabled", "true");
					},
					notDisable() {
						// @ts-ignore
						this.$ele.button.removeAttribute("disabled");
					},
					/**
					 * 隐藏icon图标
					 */
					hideIcon() {
						// @ts-ignore
						this.$ele.panelButton.classList.add("pops-panel-button-no-icon");
					},
					/**
					 * 显示icon图标
					 */
					showIcon() {
						// @ts-ignore
						this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");
					},
					/**
					 * 设置icon图标的svg
					 */
					// @ts-ignore
					setIconSVG(svgHTML) {
						// @ts-ignore
						this.$ele.icon.innerHTML = svgHTML;
					},
					/**
					 * 设置icon图标是否旋转
					 * @param {boolean} status
					 */
					setIconLoadingStatus(status) {
						// @ts-ignore
						this.$ele.icon.setAttribute("is-loading", Boolean(status));
					},
					/**
					 * 设置属性上是否存在icon图标
					 */
					// @ts-ignore
					setHasIcon(value) {
						// @ts-ignore
						this.$ele.button.setAttribute("data-icon", Boolean(value));
					},
					/**
					 * 设置按钮类型
					 * @param {string} typeValue
					 */
					setButtonType(typeValue) {
						// @ts-ignore
						this.$ele.button.setAttribute("type", typeValue);
					},
					/**
					 * 添加按钮的图标在右边
					 */
					setIconRight() {
						// @ts-ignore
						this.$ele.button.classList.add("pops-panel-button-right-icon");
					},
					/**
					 * （默认）添加按钮的图标在左边
					 */
					setIconLeft() {
						// @ts-ignore
						this.$ele.button.classList.remove("pops-panel-button-right-icon");
					},
					/**
					 * 设置按钮文本
					 * @param {string} text
					 */
					setButtonText(text) {
						// @ts-ignore
						this.$ele.spanText.innerHTML = text;
					},
					setClickEvent() {
						// @ts-ignore
						PopsDOMUtils.on(this.$ele.button, "click", void 0, (event) => {
							if (typeof formConfig.callback === "function") {
								// @ts-ignore
								formConfig.callback(event);
							}
						});
					},
				};
				PopsPanelButton.init();
				// @ts-ignore
				liElement["data-button"] = PopsPanelButton;
				return liElement;
			},
			/**
			 * 获取深层容器的元素<li>
			 * @param {PopsPanelDeepMenuDetails} formConfig
			 * @returns {HTMLLIElement}
			 */
			getSectionContainerItem_deepMenu(formConfig) {
				let liElement = document.createElement("li");
				liElement.classList.add("pops-panel-deepMenu-nav-item");
				// @ts-ignore
				liElement.__formConfig__ = formConfig;
				if (formConfig.className) {
					liElement.classList.add(formConfig.className);
				}
				// 设置属性
				this.addElementAttributes(liElement, formConfig.attributes);
				// 设置元素上的属性
				this.setElementProps(liElement, formConfig.props);

				/* 左边底部的描述的文字 */
				let leftDescriptionText = "";
				if (Boolean(formConfig.description)) {
					// 设置描述
					leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
				}
				// 箭头图标
				let arrowRightIcon =
					typeof formConfig.arrowRightIcon === "boolean"
						? formConfig.arrowRightIcon
						: true;
				let arrowRightIconHTML = "";
				if (arrowRightIcon) {
					// @ts-ignore
					arrowRightIconHTML = `<i class="pops-panel-deepMenu-arrowRight-icon">${pops.config.iconSVG.arrowRight}</i>`;
				}
				let rightText = "";
				if (formConfig.rightText) {
					rightText = `<p class="pops-panel-item-right-text">${formConfig.rightText}</p>`;
				}
				liElement.innerHTML = `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
					${leftDescriptionText}
				</div>
				<div class="pops-panel-deepMenu">
					${rightText}
					${arrowRightIconHTML}
				</div>
				`;
				const PopsPanelDeepMenu = {
					[Symbol.toStringTag]: "PopsPanelDeepMenu",
					$ele: {
						/** @type {HTMLElement} */
						get parentSection() {
							// @ts-ignore
							return contentSectionContainerElement;
						},
					},
					init() {
						this.setLiClickEvent();
					},
					/**
					 * 生成配置每一项的元素
					 * @param {HTMLElement} $container
					 * @param {PopsPanelFormsTotalDetails | PopsPanelFormsDetails} formItemConfig
					 */
					initFormItem($container, formItemConfig) {
						let that = this;
						// @ts-ignore
						if (formItemConfig["type"] === "forms") {
							let childForms = formItemConfig["forms"];
							/* 每一项<li>元素 */
							let formContainerListElement = document.createElement("li");
							/* 每一项<li>内的子<ul>元素 */
							let formContainerULElement = document.createElement("ul");
							formContainerListElement.className =
								"pops-panel-forms-container-item";
							/* 区域头部的文字 */
							// @ts-ignore
							let formHeaderDivElement = PopsDOMUtils.createElement("div", {
								className: "pops-panel-forms-container-item-header-text",
							});
							// @ts-ignore
							formHeaderDivElement.innerHTML = formItemConfig["text"];
							/* 加进容器内 */
							formContainerListElement.appendChild(formHeaderDivElement);
							// @ts-ignore
							if (formItemConfig.className) {
								PopsDOMUtils.addClassName(
									formContainerListElement,
									// @ts-ignore
									formItemConfig.className
								);
							}
							HandleContetDetails.addElementAttributes(
								formContainerListElement,
								// @ts-ignore
								formItemConfig.attributes
							);
							// @ts-ignore
							HandleContetDetails.setElementProps(
								formContainerListElement,
								formItemConfig.props
							);
							childForms.forEach((childFormConfig) => {
								// @ts-ignore
								HandleContetDetails.uListContainerAddItem(childFormConfig, {
									ulElement: formContainerULElement,
									sectionContainerULElement:
										HandleContetDetails.sectionContainerULElement,
									formContainerListElement: formContainerListElement,
									formHeaderDivElement: formHeaderDivElement,
								});
							});
							formContainerListElement.appendChild(formContainerULElement);
							$container.appendChild(formContainerListElement);
						} else {
							/* 如果成功创建，加入到中间容器中 */
							// @ts-ignore
							HandleContetDetails.uListContainerAddItem(formConfig, {
								ulElement: HandleContetDetails.sectionContainerULElement,
							});
						}
					},
					/**
					 * 前往子菜单
					 * @param {Event} event 点击事件
					 * @param {HTMLLIElement} liElement 当前的<li>元素
					 */
					gotoDeepMenu(event, liElement) {
						/** 当前所在的容器 @type {HTMLElement|null} */
						let currentSection = liElement.closest(
							"section.pops-panel-container"
						);
						if (currentSection) {
							PopsDOMUtils.cssHide(currentSection);
						}
						// 子菜单的容器
						let $deepMenuContainer = PopsDOMUtils.createElement("section", {
							className: "pops-panel-container pops-panel-deepMenu-container",
						});
						let $deepMenuHeaderUL = PopsDOMUtils.createElement("ul", {
							className: "pops-panel-deepMenu-container-header-ul",
						});
						let $deepMenuChildMenuUL = PopsDOMUtils.createElement("ul");
						// 标题文字
						let headerTitleText = formConfig.headerTitle ?? formConfig.text;
						let $header = PopsDOMUtils.createElement("div", {
							className: "pops-panel-deepMenu-container-header",
							innerHTML: `<p>${headerTitleText}</p>`,
						});
						let $headerLeftArrow = PopsDOMUtils.createElement("i", {
							className: "pops-panel-deepMenu-container-left-arrow-icon",
							innerHTML: pops.config.iconSVG.arrowLeft,
						});
						PopsDOMUtils.on(
							$headerLeftArrow,
							"click",
							void 0,
							(event) => {
								event?.preventDefault();
								event?.stopPropagation();
								// 返回上一层菜单
								let $prev = $deepMenuContainer.previousElementSibling;
								PopsDOMUtils.cssShow($prev);
								$deepMenuContainer.remove();
							},
							{
								once: true,
							}
						);
						$header.firstElementChild?.insertAdjacentElement(
							"beforebegin",
							$headerLeftArrow
						);
						$deepMenuHeaderUL.appendChild($header);
						$deepMenuContainer.appendChild($deepMenuHeaderUL);
						$deepMenuContainer.appendChild($deepMenuChildMenuUL);

						if (formConfig.forms && Array.isArray(formConfig.forms)) {
							for (let index = 0; index < formConfig.forms.length; index++) {
								let formItemConfig = formConfig.forms[index];
								this.initFormItem($deepMenuChildMenuUL, formItemConfig);
							}
						}
						contentElement?.appendChild($deepMenuContainer);

						/* 根据标题的高度来自适应内容高度，默认开启 */
						/* 中间容器的偏移量，看设置的section.pops-panel-container的padding，默认0 */
						let contentContainerOffset = 0;
						/* 获取标题的<ul>元素的高度 */
						let sectionContainerHeaderULElementHeight =
							PopsDOMUtils.height($deepMenuHeaderUL);
						$deepMenuChildMenuUL.style.setProperty(
							"height",
							`calc( 100% - ${
								sectionContainerHeaderULElementHeight + contentContainerOffset
							}px )`
						);
					},
					/** 设置项的点击事件 */
					setLiClickEvent() {
						PopsDOMUtils.on(liElement, "click", void 0, async (event) => {
							if (typeof formConfig.clickCallBack === "function") {
								// @ts-ignore
								let result = await formConfig.clickCallBack(event, formConfig);
								if (result) {
									return;
								}
							}
							this.gotoDeepMenu(event, liElement);
						});
					},
				};

				PopsPanelDeepMenu.init();
				// @ts-ignore
				liElement["data-deepMenu"] = PopsPanelDeepMenu;

				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ===> own
			 * @param {PopsPanelOwnDetails} formConfig
			 * @returns {HTMLLIElement}
			 */
			getSectionContainerItem_own(formConfig) {
				let liElement = document.createElement("li");
				// @ts-ignore
				liElement.__formConfig__ = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				liElement = formConfig.getLiElementCallBack(liElement);
				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * @param {PopsPanelFormsTotalDetails} formConfig
			 * @returns {HTMLLIElement | undefined | null}
			 */
			getSectionContainerItem(formConfig) {
				/** 配置项的类型 @type {PopsPanelFormsTotalDetails["type"]} */
				let formType = formConfig["type"];

				if (formType === "switch") {
					// @ts-ignore
					return this.getSectionContainerItem_switch(formConfig);
				} else if (formType === "slider") {
					// @ts-ignore
					return this.getSectionContainerItem_slider_new(formConfig);
				} else if (formType === "input") {
					// @ts-ignore
					return this.getSectionContainerItem_input(formConfig);
				} else if (formType === "textarea") {
					// @ts-ignore
					return this.getSectionContainerItem_textarea(formConfig);
				} else if (formType === "select") {
					// @ts-ignore
					return this.getSectionContainerItem_select(formConfig);
				} else if (formType === "button") {
					// @ts-ignore
					return this.getSectionContainerItem_button(formConfig);
				} else if (formType === "deepMenu") {
					// @ts-ignore
					return this.getSectionContainerItem_deepMenu(formConfig);
				} else if (formType === "own") {
					// @ts-ignore
					return this.getSectionContainerItem_own(formConfig);
				} else {
					console.error("尚未实现的type类型", formConfig);
				}
			},
			/**
			 * 生成配置每一项的元素
			 * @param {PopsPanelContentConfig} formConfig
			 */
			initFormItem(formConfig) {
				let that = this;
				// @ts-ignore
				if (formConfig["type"] === "forms") {
					let childForms = formConfig["forms"];
					/* 每一项<li>元素 */
					let formContainerListElement = document.createElement("li");
					/* 每一项<li>内的子<ul>元素 */
					let formContainerULElement = document.createElement("ul");
					formContainerListElement.className =
						"pops-panel-forms-container-item";
					/* 区域头部的文字 */
					// @ts-ignore
					let formHeaderDivElement = PopsDOMUtils.createElement("div", {
						className: "pops-panel-forms-container-item-header-text",
					});
					// @ts-ignore
					formHeaderDivElement.innerHTML = formConfig["text"];
					/* 加进容器内 */
					formContainerListElement.appendChild(formHeaderDivElement);
					// @ts-ignore
					if (formConfig.className) {
						PopsDOMUtils.addClassName(
							formContainerListElement,
							// @ts-ignore
							formConfig.className
						);
					}
					that.addElementAttributes(
						formContainerListElement,
						// @ts-ignore
						formConfig.attributes
					);
					// @ts-ignore
					that.setElementProps(formContainerListElement, formConfig.props);
					childForms.forEach((childFormConfig) => {
						// @ts-ignore
						that.uListContainerAddItem(childFormConfig, {
							ulElement: formContainerULElement,
							sectionContainerULElement: that.sectionContainerULElement,
							formContainerListElement: formContainerListElement,
							formHeaderDivElement: formHeaderDivElement,
						});
					});
					formContainerListElement.appendChild(formContainerULElement);
					that.sectionContainerULElement.appendChild(formContainerListElement);
				} else {
					/* 如果成功创建，加入到中间容器中 */
					// @ts-ignore
					that.uListContainerAddItem(formConfig, {
						ulElement: that.sectionContainerULElement,
					});
				}
			},
			/**
			 *
			 * @param {PopsPanelFormsTotalDetails} formConfig
			 * @param {PopsPanelRightAsideContainerOptions} containerOptions
			 */
			uListContainerAddItem(formConfig, containerOptions) {
				let itemLiElement = this.getSectionContainerItem(formConfig);
				if (itemLiElement) {
					containerOptions["ulElement"].appendChild(itemLiElement);
				}
				if (typeof formConfig.afterAddToUListCallBack === "function") {
					formConfig.afterAddToUListCallBack(formConfig, containerOptions);
				}
			},
			/**
			 * 为左侧容器元素添加点击事件
			 * @param {HTMLElement} asideLiElement 左侧的容器<li>元素
			 * @param {PopsPanelContentConfig} asideConfig 配置
			 */
			setAsideItemClickEvent(asideLiElement, asideConfig) {
				let that = this;
				// @ts-ignore
				PopsDOMUtils.on(asideLiElement, "click", void 0, function (event) {
					that.clearContainer();
					PopsDOMUtils.cssShow(contentSectionContainerElement);
					that.clearAsideItemIsVisited();
					that.setAsideItemIsVisited(asideLiElement);
					/* 顶部标题栏，存在就设置 */
					let headerTitleText = asideConfig.headerTitle ?? asideConfig.title;
					if (
						typeof headerTitleText === "string" &&
						headerTitleText.trim() !== ""
					) {
						let containerHeaderTitleLIElement = document.createElement("li");
						// @ts-ignore
						containerHeaderTitleLIElement.__asideConfig__ = asideConfig;
						containerHeaderTitleLIElement.innerHTML = headerTitleText;
						that.sectionContainerHeaderULElement.appendChild(
							containerHeaderTitleLIElement
						);
					}

					/** @type {PopsPanelContentConfig[]} */
					// @ts-ignore
					let __forms__ = asideLiElement.__forms__;
					__forms__.forEach((formConfig) => {
						that.initFormItem(formConfig);
					});

					let autoAdaptionContentHeight =
						asideConfig.autoAdaptionContentHeight ?? true;
					if (autoAdaptionContentHeight) {
						/* 根据标题的高度来自适应内容高度，默认开启 */
						/* 中间容器的偏移量，看设置的section.pops-panel-container的padding，默认0 */
						let contentContainerOffset =
							// @ts-ignore
							asideConfig.contentContainerOffset ?? 0;
						/* 获取标题的<ul>元素的高度 */
						let sectionContainerHeaderULElementHeight = PopsDOMUtils.height(
							that.sectionContainerHeaderULElement
						);
						that.sectionContainerULElement.style.setProperty(
							"height",
							`calc( 100% - ${
								sectionContainerHeaderULElementHeight + contentContainerOffset
							}px )`
						);
					}

					if (typeof asideConfig.callback === "function") {
						/* 执行回调 */
						asideConfig.callback(
							// @ts-ignore
							event,
							that.sectionContainerHeaderULElement,
							that.sectionContainerULElement
						);
					}
				});
			},
		};

		HandleContetDetails.init();

		PopsHandler.handlePush(PopsType, {
			guid: guid,
			// @ts-ignore
			animElement: animElement,
			// @ts-ignore
			popsElement: popsElement,
			// @ts-ignore
			maskElement: maskElement,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		/* 拖拽 */
		if (config.drag) {
			// @ts-ignore
			PopsUtils.drag(popsElement, {
				dragElement: titleElement,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		return PopsHandler.handleResultDetails(eventDetails);
	};

	/**
	 * 右键菜单
	 * @param { PopsRightClickMenuDetails } details 配置
	 */
	// @ts-ignore
	pops.rightClickMenu = function (details = {}) {
		// @ts-ignore
		// @ts-ignore
		let that = this;
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.anim,
			pops.config.cssText.common,
		]);
		/**
		 * @type {Required<PopsRightClickMenuDetails>}
		 */
		let config = {
			target: document.documentElement,
			// @ts-ignore
			targetSelector: void 0,
			data: [
				{
					// @ts-ignore
					icon: pops.config.iconSVG.search,
					iconIsLoading: false,
					text: "搜索",
					// @ts-ignore
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
					},
				},
				{
					// @ts-ignore
					icon: pops.config.iconSVG.documentCopy,
					iconIsLoading: false,
					text: "复制",
					// @ts-ignore
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
					},
				},
				{
					// @ts-ignore
					icon: pops.config.iconSVG.delete,
					text: "删除",
					iconIsLoading: false,
					// @ts-ignore
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
					},
				},
				{
					// @ts-ignore
					icon: pops.config.iconSVG.loading,
					iconIsLoading: true,
					text: "加载",
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
						return false;
					},
				},
				{
					// @ts-ignore
					icon: pops.config.iconSVG.elemePlus,
					iconIsLoading: true,
					text: "饿了么",
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
						return false;
					},
					item: [
						{
							// @ts-ignore
							icon: "",
							iconIsLoading: false,
							text: "处理文件",
							// @ts-ignore
							callback(clickEvent, contextMenuEvent, liElement) {
								console.log("点击：" + this.text, [
									clickEvent,
									contextMenuEvent,
									liElement,
								]);
							},
						},
						{
							// @ts-ignore
							icon: "",
							iconIsLoading: false,
							text: "其它处理",
							// @ts-ignore
							callback(clickEvent, contextMenuEvent, liElement) {
								console.log("点击：" + this.text, [
									clickEvent,
									contextMenuEvent,
									liElement,
								]);
							},
							item: [
								{
									// @ts-ignore
									icon: pops.config.iconSVG.view,
									iconIsLoading: false,
									text: "查看",
									// @ts-ignore
									callback(clickEvent, contextMenuEvent, liElement) {
										console.log("点击：" + this.text, [
											clickEvent,
											contextMenuEvent,
											liElement,
										]);
									},
								},
							],
						},
					],
				},
			],
			className: "",
			isAnimation: true,
			only: false,
			zIndex: 10000,
			preventDefault: true,
			// @ts-ignore
			style: void 0,
			beforeAppendToPageCallBack() {},
		};
		config = PopsUtils.assignJSON(config, details);
		if (config.target == null) {
			throw "config.target 不能为空";
		}
		if (details.data) {
			config.data = details.data;
		}
		let guid = PopsUtils.getRandomGUID();
		const PopsType = "rightClickMenu";
		// @ts-ignore
		config = PopsHandler.handleOnly(PopsType, config);

		if (config.style != null) {
			let cssNode = document.createElement("style");
			cssNode.setAttribute("type", "text/css");
			cssNode.innerHTML = config.style;
			$shadowRoot.appendChild(cssNode);
		}

		const PopsContextMenu = {
			/**
			 * 根元素
			 * @type {?HTMLElement}
			 */
			rootElement: null,
			/**
			 * 全局点击检测
			 * @param {TouchEvent|PointerEvent} event
			 */
			windowCheckClickEvent(event) {
				if (!PopsContextMenu.rootElement) {
					return;
				}
				// @ts-ignore
				if (event.target.closest(`.pops-${PopsType}`)) {
					return;
				}
				if (
					// @ts-ignore
					event.target.className &&
					// @ts-ignore
					event.target.className === "pops-shadow-container" &&
					// @ts-ignore
					event.target.shadowRoot != null
				) {
					return;
				}
				PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
			},
			/**
			 * target为shadowRoot或shadowRoot内的全局点击检测
			 * @param {TouchEvent|PointerEvent} event
			 */
			shadowRootCheckClickEvent(event) {
				if (!PopsContextMenu.rootElement) {
					return;
				}
				// @ts-ignore
				if (event.target.closest(`.pops-${PopsType}`)) {
					return;
				}
				PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
			},
			/**
			 * 添加全局点击检测事件
			 */
			addWindowCheckClickListener() {
				PopsDOMUtils.on(
					// @ts-ignore
					globalThis,
					"click touchstart",
					void 0,
					PopsContextMenu.windowCheckClickEvent,
					{
						capture: true,
					}
				);
				// @ts-ignore
				const $shadowRoot = config.target.getRootNode();
				if ($shadowRoot instanceof ShadowRoot) {
					PopsDOMUtils.on(
						// @ts-ignore
						$shadowRoot,
						"click touchstart",
						void 0,
						PopsContextMenu.shadowRootCheckClickEvent,
						{
							capture: true,
						}
					);
				}
			},
			/**
			 * 移除全局点击检测事件
			 */
			removeWindowCheckClickListener() {
				PopsDOMUtils.off(
					// @ts-ignore
					globalThis,
					"click touchstart",
					void 0,
					PopsContextMenu.windowCheckClickEvent,
					{
						capture: true,
					}
				);
				// @ts-ignore
				const $shadowRoot = config.target.getRootNode();
				if ($shadowRoot instanceof ShadowRoot) {
					PopsDOMUtils.off(
						// @ts-ignore
						$shadowRoot,
						"click touchstart",
						void 0,
						PopsContextMenu.windowCheckClickEvent,
						{
							capture: true,
						}
					);
				}
			},
			/**
			 * contextmenu事件
			 * @param {PointerEvent} event
			 */
			contextMenuEvent(event) {
				if (config.preventDefault) {
					PopsUtils.preventEvent(event);
				}
				if (PopsContextMenu.rootElement) {
					PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
				}
				PopsContextMenu.rootElement = PopsContextMenu.showMenu(
					event,
					config.data
				);
			},
			/**
			 * 添加contextmenu事件
			 * @param {HTMLElement|globalThis|Window} target 目标
			 * @param {?string} selector 子元素选择器
			 */
			addContextMenuEvent(target, selector) {
				// @ts-ignore
				PopsDOMUtils.on(
					target,
					"contextmenu",
					selector,
					PopsContextMenu.contextMenuEvent
				);
			},
			/**
			 * 移除contextmenu事件
			 * @param {HTMLElement|globalThis|Window} target 目标
			 */
			removeContextMenuEvent(target) {
				// @ts-ignore
				PopsDOMUtils.off(
					target,
					"contextmenu",
					// @ts-ignore
					string,
					PopsContextMenu.contextMenuEvent
				);
			},
			/**
			 * 自动判断是否存在动画，存在动画就执行关闭动画并删除
			 * @param {HTMLElement} element
			 */
			animationCloseMenu(element) {
				/**
				 * 动画结束触发的事件
				 */
				// @ts-ignore
				// @ts-ignore
				function transitionEndEvent(event) {
					PopsDOMUtils.off(
						element,
						// @ts-ignore
						PopsDOMUtils.getTransitionEndNameList(),
						void 0,
						transitionEndEvent,
						{
							capture: true,
						}
					);
					element.remove();
				}
				if (element.classList.contains(`pops-${PopsType}-anim-show`)) {
					/* 有动画 */
					PopsDOMUtils.on(
						element,
						// @ts-ignore
						PopsDOMUtils.getTransitionEndNameList(),
						void 0,
						transitionEndEvent,
						{
							capture: true,
						}
					);
					element.classList.remove(`pops-${PopsType}-anim-show`);
				} else {
					/* 无动画 */
					element.remove();
				}
			},
			/**
			 * 关闭所有菜单
			 * @param {HTMLElement} rootElement
			 */
			closeAllMenu(rootElement) {
				// @ts-ignore
				if (rootElement?.__menuData__?.root) {
					// @ts-ignore
					rootElement = rootElement?.__menuData__?.root;
				}
				/**
				 * @type {HTMLElement[]}
				 */
				// @ts-ignore
				let childMenuList = rootElement.__menuData__.child;
				childMenuList.forEach((childMenuElement) => {
					this.animationCloseMenu(childMenuElement);
				});
				this.animationCloseMenu(rootElement);
				PopsContextMenu.rootElement = null;
			},
			/**
			 * 获取菜单容器
			 * @param {number} zIndex z-index值
			 * @param {boolean} isChildren 是否是rightClickMenu的某一项的子菜单
			 */
			getMenuContainerElement(zIndex, isChildren) {
				let menuElement = PopsUtils.parseTextToDOM(`
        <div class="pops-${PopsType}" ${isChildren ? 'is-children="true"' : ""}>
          <style type="text/css" data-from="pops-${PopsType}">
          .pops-${PopsType} *{
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-tap-highlight-color: transparent;
            scrollbar-width: thin;
          }
          .pops-${PopsType}{
            position: fixed;
            z-index: ${zIndex};
            text-align: center;
            border-radius: 3px;
            font-size: 16px;
            font-weight: 500;
            background: #fff;
            box-shadow: 0px 1px 6px 1px #cacaca;
          }
          .pops-${PopsType}-anim-grid{
            display: grid;
            transition: 0.3s;
            grid-template-rows: 0fr;
          }
          .pops-${PopsType}-anim-show{
            grid-template-rows: 1fr;
          }
          .pops-${PopsType}-is-visited{
            background: #dfdfdf;
          }
          i.pops-${PopsType}-icon {
            height: 1em;
            width: 1em;
            line-height: 1em;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            position: relative;
            fill: currentColor;
            color: inherit;
            font-size: inherit;
            margin-right: 6px;
          }
          i.pops-${PopsType}-icon[is-loading="true"]{
            animation: rotating 2s linear infinite;
          }
          .pops-${PopsType} li:hover{background:#dfdfdf;cursor:pointer}
          .pops-${PopsType} ul{
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            overflow: hidden;
          }
          .pops-${PopsType} ul li {
            padding: 5px 10px;
            margin: 2.5px 5px;
            border-radius: 3px;
            display: flex;
            width: -webkit-fill-available;
            width: -moz-available;
            text-align: left;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            align-items: center;
          }
          .pops-${PopsType} ul li:first-child{
            margin-top: 5px;
          }
          .pops-${PopsType} ul li:last-child{
            margin-bottom: 5px;
          }
          </style>
          <ul></ul>
        </div>
        `);
				/* 添加动画 */
				if (config.isAnimation) {
					PopsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-grid`);
				}
				return menuElement;
			},
			/**
			 * 获取left、top偏移
			 * @param {HTMLElement} menuElement 菜单元素
			 * @param {number} x
			 * @param {number} y
			 */
			getOffset(menuElement, x, y) {
				/* left最大偏移 */
				let maxLeftOffset =
					// @ts-ignore
					PopsDOMUtils.width(globalThis) - PopsDOMUtils.width(menuElement) - 1;
				/* top最大偏移 */
				let maxTopOffset =
					// @ts-ignore
					PopsDOMUtils.height(globalThis) -
					PopsDOMUtils.height(menuElement) -
					8;

				let currentLeftOffset = x;
				let currentTopOffset = y;
				/* 不允许超出left最大值 */
				currentLeftOffset = currentLeftOffset < 0 ? 0 : currentLeftOffset;
				currentLeftOffset =
					currentLeftOffset < maxLeftOffset ? currentLeftOffset : maxLeftOffset;
				/* 不允许超出top最大值 */
				currentTopOffset = currentTopOffset < 0 ? 0 : currentTopOffset;
				currentTopOffset =
					currentTopOffset < maxTopOffset ? currentTopOffset : maxTopOffset;
				return {
					left: currentLeftOffset,
					top: currentTopOffset,
				};
			},
			/**
			 * 显示菜单
			 * @param {PointerEvent} menuEvent 触发的事件
			 * @param {PopsRightClickMenuDataDetails[]} _config_
			 */
			showMenu(menuEvent, _config_) {
				// @ts-ignore
				let menuElement = this.getMenuContainerElement(config.zIndex, false);
				// @ts-ignore
				menuElement.__menuData__ = {
					child: [],
				};
				PopsContextMenu.addMenuLiELement(
					menuEvent,
					menuElement,
					// @ts-ignore
					menuElement,
					_config_
				);
				/* 先隐藏 */
				// @ts-ignore
				PopsDOMUtils.css(menuElement, {
					display: "none",
				});
				// @ts-ignore
				PopsUtils.appendChild($shadowRoot, menuElement);
				/* 添加到页面 */
				if (!document.contains($shadowContainer)) {
					if (typeof config.beforeAppendToPageCallBack === "function") {
						config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
					}
					// @ts-ignore
					PopsUtils.appendChild($shadowContainer);
				}
				let { left: menuLeftOffset, top: menuTopOffset } = this.getOffset(
					menuElement,
					menuEvent.clientX,
					menuEvent.clientY
				);
				PopsDOMUtils.css(menuElement, {
					// @ts-ignore
					left: menuLeftOffset,
					// @ts-ignore
					top: menuTopOffset,
					display: "",
				});
				/* 过渡动画 */
				if (config.isAnimation) {
					PopsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-show`);
				}
				return menuElement;
			},
			/**
			 * 显示子菜单
			 * @param {Event} menuEvent 事件
			 * @param {{
			 * clientX: number,
			 * clientY: number
			 * }} posInfo 位置信息
			 * @param {PopsRightClickMenuDataDetails[]} _config_
			 * @param {?HTMLDivElement} rootElement 根菜单元素
			 * @param {?HTMLLIElement} targetLiElement 父li项元素
			 */
			showClildMenu(
				menuEvent,
				posInfo,
				_config_,
				rootElement,
				targetLiElement
			) {
				// @ts-ignore
				let menuElement = this.getMenuContainerElement(config.zIndex, true);
				// @ts-ignore
				menuElement.__menuData__ = {
					parent: targetLiElement,
					root: rootElement,
				};
				// @ts-ignore
				rootElement.__menuData__.child.push(menuElement);
				PopsContextMenu.addMenuLiELement(
					// @ts-ignore
					menuEvent,
					rootElement,
					menuElement,
					_config_
				);
				/* 先隐藏 */
				// @ts-ignore
				PopsDOMUtils.css(menuElement, {
					display: "none",
				});
				/* 添加到页面 */
				// @ts-ignore
				PopsUtils.appendChild($shadowRoot, menuElement);
				let { left: menuLeftOffset, top: menuTopOffset } = this.getOffset(
					menuElement,
					posInfo.clientX,
					posInfo.clientY
				);
				PopsDOMUtils.css(menuElement, {
					// @ts-ignore
					left: menuLeftOffset,
					// @ts-ignore
					top: menuTopOffset,
					display: "",
				});
				/* 过渡动画 */
				if (config.isAnimation) {
					PopsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-show`);
				}
				return menuElement;
			},
			/**
			 * 获取菜单项的元素
			 * @param {PointerEvent} menuEvent 事件
			 * @param {HTMLElement} rootElement 根元素
			 * @param {HTMLDivElement} menuElement 菜单元素
			 * @param {PopsRightClickMenuDataDetails[]} _config_ 配置
			 */
			addMenuLiELement(menuEvent, rootElement, menuElement, _config_) {
				let menuEventTarget = menuEvent.target;
				let menuULElement = menuElement.querySelector("ul");
				_config_.forEach((item) => {
					/**
					 * @type {HTMLLIElement}
					 */
					// @ts-ignore
					let menuLiElement = PopsUtils.parseTextToDOM(`
          <li></li>
          `);
					/* 判断有无图标，有就添加进去 */
					if (typeof item.icon === "string" && item.icon.trim() !== "") {
						let iconSVGHTML = pops.config.iconSVG[item.icon] ?? item.icon;
						let iconElement = PopsUtils.parseTextToDOM(
							`<i class="pops-${PopsType}-icon" is-loading="${item.iconIsLoading}">${iconSVGHTML}</i>`
						);
						menuLiElement.appendChild(iconElement);
					}
					/* 插入文字 */
					menuLiElement.insertAdjacentHTML(
						"beforeend",
						`<span>${item.text}</span>`
					);
					/* 如果存在子数据，显示 */
					if (item.item && Array.isArray(item.item)) {
						PopsDOMUtils.addClassName(menuLiElement, `pops-${PopsType}-item`);
					}
					/* 鼠标|触摸 移入事件 */
					function liElementHoverEvent() {
						// @ts-ignore
						Array.from(menuULElement.children).forEach((liElement) => {
							PopsDOMUtils.removeClassName(
								// @ts-ignore
								liElement,
								`pops-${PopsType}-is-visited`
							);
							// @ts-ignore
							if (!liElement.__menuData__) {
								return;
							}
							// @ts-ignore
							function removeElement(element) {
								// @ts-ignore
								element.querySelectorAll("ul li").forEach((ele) => {
									if (ele?.__menuData__?.child) {
										removeElement(ele.__menuData__.child);
									}
								});
								element.remove();
							}
							/* 遍历根元素的上的__menuData__.child，判断 */
							// @ts-ignore
							removeElement(liElement.__menuData__.child);
						});
						/* 清理根元素上的children不存在于页面中的元素 */
						for (
							let index = 0;
							// @ts-ignore
							index < rootElement.__menuData__.child.length;
							index++
						) {
							// @ts-ignore
							let element = rootElement.__menuData__.child[index];
							if (!$shadowRoot.contains(element)) {
								// @ts-ignore
								rootElement.__menuData__.child.splice(index, 1);
								index--;
							}
						}
						PopsDOMUtils.addClassName(
							menuLiElement,
							`pops-${PopsType}-is-visited`
						);
						if (!item.item) {
							return;
						}
						let rect = menuLiElement.getBoundingClientRect();
						let childMenu = PopsContextMenu.showClildMenu(
							menuEvent,
							{
								clientX: rect.left + PopsDOMUtils.outerWidth(menuLiElement),
								clientY: rect.top,
							},
							item.item,
							// @ts-ignore
							rootElement,
							menuLiElement
						);
						// @ts-ignore
						menuLiElement.__menuData__ = {
							child: childMenu,
						};
					}
					/**
					 * 点击事件
					 * @param {PointerEvent} clickEvent
					 * @returns
					 */
					async function liElementClickEvent(clickEvent) {
						if (typeof item.callback === "function") {
							OriginPrototype.Object.defineProperty(menuEvent, "target", {
								get() {
									return menuEventTarget;
								},
							});
							let callbackResult = await item.callback(
								clickEvent,
								menuEvent,
								menuLiElement
							);
							if (
								typeof callbackResult === "boolean" &&
								callbackResult == false
							) {
								return;
							}
						}
						/* 取消绑定的鼠标/触摸事件，防止关闭的时候再次触发 */
						// @ts-ignore
						Array.from(menuULElement.children).forEach((liEle) => {
							// @ts-ignore
							PopsDOMUtils.off(liEle, "mouseenter touchstart");
						});
						PopsContextMenu.closeAllMenu(rootElement);
					}
					// @ts-ignore
					PopsDOMUtils.on(
						menuLiElement,
						"mouseenter touchstart",
						void 0,
						liElementHoverEvent
					);
					/* 项-点击事件 */
					// @ts-ignore
					PopsDOMUtils.on(menuLiElement, "click", void 0, liElementClickEvent);

					// @ts-ignore
					menuULElement.appendChild(menuLiElement);
				});
			},
		};

		PopsContextMenu.addContextMenuEvent(
			config.target,
			config.targetSelector,
			// @ts-ignore
			config.preventDefault
		);
		PopsContextMenu.addWindowCheckClickListener();

		return {
			guid: guid,
			config: config,
			removeWindowCheckClickListener:
				PopsContextMenu.removeWindowCheckClickListener,
			addWindowCheckClickListener: PopsContextMenu.addWindowCheckClickListener,
			removeContextMenuEvent: PopsContextMenu.removeContextMenuEvent,
			addContextMenuEvent: PopsContextMenu.addContextMenuEvent,
		};
	};

	/**
	 * 搜索建议悬浮窗
	 * @param {PopsSearchSuggestionDetails} details
	 */
	pops.searchSuggestion = function (details) {
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.anim,
			pops.config.cssText.common,
		]);
		/** @type {Required<PopsSearchSuggestionDetails>} */
		let config = {
			// @ts-ignore
			target: null,
			// @ts-ignore
			inputTarget: null,
			selfDocument: document,
			data: [
				{
					value: "数据1",
					text: "数据1-html",
				},
				{
					value: "数据2",
					text: "数据2-html",
				},
			],
			deleteIcon: {
				enable: true,
				callback(event, liElement, data) {
					console.log("删除当前项", [event, liElement, data]);
					liElement.remove();
				},
			},
			className: "",
			isAbsolute: true,
			isAnimation: true,
			width: "250px",
			maxHeight: "300px",
			followTargetWidth: true,
			topDistance: 0,
			position: "auto",
			positionTopToReverse: true,
			zIndex: 10000,
			searchingTip: "正在搜索中...",
			toSearhNotResultHTML: '<li data-none="true">暂无其它数据</li>',
			toHideWithNotResult: false,
			followPosition: "target",
			getItemHTML(item) {
				return item.text ?? item;
			},
			async getData(value) {
				console.log("当前输入框的值是：", value);
				return [];
			},
			itemClickCallBack(event, liElement, data) {
				console.log("item项的点击回调", [event, liElement, data]);
				// @ts-ignore
				this.inputTarget.value = data.value;
			},
			selectCallBack(event, liElement, data) {
				console.log("item项的选中回调", [event, liElement, data]);
			},
			// @ts-ignore
			style: void 0,
		};
		config = PopsUtils.assignJSON(config, details);
		if (config.target == null) {
			throw new TypeError("config.target 不能为空");
		}
		/* 做下兼容处理 */
		if (config.inputTarget == null) {
			// @ts-ignore
			config.inputTarget = config.target;
		}
		if (details.data) {
			config.data = details.data;
		}
		const guid = PopsUtils.getRandomGUID();
		const PopsType = "searchSuggestion";

		if (config.style != null) {
			let cssNode = document.createElement("style");
			cssNode.setAttribute("type", "text/css");
			cssNode.innerHTML = config.style;
			$shadowRoot.appendChild(cssNode);
		}

		const SearchSuggestion = {
			/**
			 * 当前的环境，可以是document，可以是shadowroot，默认是document
			 */
			selfDocument: config.selfDocument,
			/**
			 * 根元素
			 * @type {HTMLElement}
			 */
			// @ts-ignore
			root: null,
			/**
			 * ul元素
			 * @type {HTMLUListElement}
			 */
			// @ts-ignore
			hintULElement: null,
			$data: {
				/** 是否结果为空 */
				isEmpty: true,
			},
			/**
			 * 初始化
			 */
			init(parentElement = document.body || document.documentElement) {
				SearchSuggestion.root = SearchSuggestion.getSearchSelectElement();
				// @ts-ignore
				SearchSuggestion.hintULElement =
					SearchSuggestion.root.querySelector("ul");
				SearchSuggestion.update(config.data);
				SearchSuggestion.changeHintULElementWidth();
				SearchSuggestion.changeHintULElementPosition();

				SearchSuggestion.hide();
				if (config.isAnimation) {
					SearchSuggestion.root.classList.add(`pops-${PopsType}-animation`);
				}
				$shadowRoot.appendChild(SearchSuggestion.root);
				parentElement.appendChild($shadowContainer);
			},
			/**
			 * 获取显示出搜索建议框的html
			 */
			getSearchSelectElement() {
				let element = PopsDOMUtils.createElement(
					"div",
					// @ts-ignore
					{
						className: `pops pops-${PopsType}-search-suggestion`,
						innerHTML: `
						<style>
							.pops-${PopsType}-animation{
								-moz-animation: searchSelectFalIn 0.5s 1 linear;
								-webkit-animation: searchSelectFalIn 0.5s 1 linear;
								-o-animation: searchSelectFalIn 0.5s 1 linear;
								-ms-animation: searchSelectFalIn 0.5s 1 linear;
							}
							.pops-${PopsType}-search-suggestion{
								border: initial;
								overflow: initial;
							}
							ul.pops-${PopsType}-search-suggestion-hint{
								position: ${config.isAbsolute ? "absolute" : "fixed"};
								z-index: ${config.zIndex};
								width: 0;
								left: 0;
								max-height: ${config.maxHeight};
								overflow-x: hidden;
								overflow-y: auto;
								padding: 5px 0;
								background-color: #fff;
								box-sizing: border-box;
								border-radius: 4px;
								box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
							}
							/* 建议框在上面时 */
							ul.pops-${PopsType}-search-suggestion-hint[data-top-reverse]{
								display: flex;
    							flex-direction: column-reverse;
							}
							ul.pops-${PopsType}-search-suggestion-hint[data-top-reverse] li{
								flex-shrink: 0;
							}
							ul.pops-${PopsType}-search-suggestion-hint li{
								padding: 7px;
								margin: 0;
								clear: both;
								color: #515a6e;
								font-size: 14px;
								list-style: none;
								cursor: pointer;
								transition: background .2s ease-in-out;
								overflow: hidden;
								text-overflow: ellipsis;
								width: 100%;
							}
							ul.pops-${PopsType}-search-suggestion-hint li[data-none]{
								text-align: center;
								font-size: 12px;
								color: #8e8e8e;
							}
							ul.pops-${PopsType}-search-suggestion-hint li:hover{
								background-color: rgba(0, 0, 0, .1);
							}            
						</style>
						<ul class="pops-${PopsType}-search-suggestion-hint">
							${config.toSearhNotResultHTML}
						</ul>
         				 `,
					},
					{
						"data-guid": guid,
						"type-value": PopsType,
					}
				);
				if (config.className !== "" && config.className != null) {
					PopsDOMUtils.addClassName(element, config.className);
				}
				return element;
			},
			/**
			 * 获取显示出搜索建议框的每一项的html
			 * @param {PopsSearchSuggestionData} item 当前项的值
			 * @param {number} index 当前项的下标
			 */
			getSearchItemLiElement(item, index) {
				// @ts-ignore
				return PopsDOMUtils.createElement("li", {
					className: `pops-${PopsType}-search-suggestion-hint-item pops-flex-items-center pops-flex-y-center`,
					"data-index": index,
					"data-value": SearchSuggestion.getItemDataValue(item),
					innerHTML: `
          			${config.getItemHTML(item)}
          			${
									// @ts-ignore
									config.deleteIcon.enable
										? SearchSuggestion.getDeleteIconHTML()
										: ""
								}
          			`,
				});
			},
			/**
			 * 获取data-value值
			 * @param {PopsSearchSuggestionData} item
			 */
			getItemDataValue(item) {
				return item;
			},
			/**
			 * 设置搜索建议框每一项的点击事件
			 * @param {HTMLLIElement} liElement
			 */
			setSearchItemClickEvent(liElement) {
				PopsDOMUtils.on(
					liElement,
					"click",
					void 0,
					(event) => {
						PopsUtils.preventEvent(event);
						// @ts-ignore
						if (event.target.closest(`.pops-${PopsType}-delete-icon`)) {
							/* 点击的是删除按钮 */
							// @ts-ignore
							config.deleteIcon.callback(
								// @ts-ignore
								event,
								liElement,
								// @ts-ignore
								liElement["data-value"]
							);
							if (!this.hintULElement.children.length) {
								/* 全删完了 */
								this.clear();
							}
						} else {
							/* 点击项主体 */
							config.itemClickCallBack(
								// @ts-ignore
								event,
								liElement,
								// @ts-ignore
								liElement["data-value"]
							);
						}
					},
					{
						capture: true,
					}
				);
			},
			/**
			 * 设置搜索建议框每一项的选中事件
			 * @param {HTMLLIElement} liElement
			 */
			setSearchItemSelectEvent(liElement) {
				return;
				PopsDOMUtils.on(
					liElement,
					"keyup",
					void 0,
					(event) => {
						// @ts-ignore
						let value = liElement["data-value"];
						// @ts-ignore
						config.selectCallBack(event, liElement, value);
					},
					{
						capture: true,
					}
				);
			},
			/**
			 * 监听输入框内容改变
			 */
			setInputChangeEvent() {
				/* 是input输入框 */
				/* 禁用输入框自动提示 */
				// @ts-ignore
				config.inputTarget.setAttribute("autocomplete", "off");
				/* 内容改变事件 */
				PopsDOMUtils.on(
					// @ts-ignore
					config.inputTarget,
					"input",
					void 0,
					async (event) => {
						// @ts-ignore
						let getListResult = await config.getData(event.target.value);
						SearchSuggestion.update(getListResult);
					},
					{
						capture: true,
					}
				);
			},
			/**
			 * 移除输入框内容改变的监听
			 */
			removeInputChangeEvent() {
				// @ts-ignore
				PopsDOMUtils.off(config.inputTarget, "input", void 0, void 0, {
					capture: true,
				});
			},
			/**
			 * 显示搜索建议框的事件
			 */
			showEvent() {
				SearchSuggestion.changeHintULElementPosition();
				SearchSuggestion.changeHintULElementWidth();
				if (config.toHideWithNotResult) {
					if (SearchSuggestion.$data.isEmpty) {
						SearchSuggestion.hide();
					} else {
						SearchSuggestion.show();
					}
				} else {
					SearchSuggestion.show();
				}
			},
			/**
			 * 设置显示搜索建议框的事件
			 */
			setShowEvent() {
				/* 焦点|点击事件*/
				if (config.followPosition === "target") {
					PopsDOMUtils.on(
						// @ts-ignore
						[config.target],
						["focus", "click"],
						void 0,
						SearchSuggestion.showEvent,
						{
							capture: true,
						}
					);
				} else if (config.followPosition === "input") {
					PopsDOMUtils.on(
						// @ts-ignore
						[config.inputTarget],
						["focus", "click"],
						void 0,
						SearchSuggestion.showEvent,
						{
							capture: true,
						}
					);
				} else if (config.followPosition === "inputCursor") {
					PopsDOMUtils.on(
						// @ts-ignore
						[config.inputTarget],
						["focus", "click", "input"],
						void 0,
						SearchSuggestion.showEvent,
						{
							capture: true,
						}
					);
				} else {
					throw new TypeError("未知followPosition：" + config.followPosition);
				}
			},
			/**
			 * 移除显示搜索建议框的事件
			 */
			removeShowEvent() {
				/* 焦点|点击事件*/
				PopsDOMUtils.off(
					[config.target, config.inputTarget],
					["focus", "click"],
					void 0,
					SearchSuggestion.showEvent,
					{
						capture: true,
					}
				);
				/* 内容改变事件 */
				PopsDOMUtils.off(
					[config.inputTarget],
					["input"],
					void 0,
					SearchSuggestion.showEvent,
					{
						capture: true,
					}
				);
			},
			/**
			 * 隐藏搜索建议框的事件
			 * @param {PointerEvent|MouseEvent} event
			 */
			hideEvent(event) {
				if (event.target instanceof Node) {
					if ($shadowContainer.contains(event.target)) {
						/* 点击在shadow上的 */
						return;
					}
					if (config.target.contains(event.target)) {
						/* 点击在目标元素内 */
						return;
					}
					if (config.inputTarget.contains(event.target)) {
						/* 点击在目标input内 */
						return;
					}
					SearchSuggestion.hide();
				}
			},
			/**
			 * 设置隐藏搜索建议框的事件
			 */
			setHideEvent() {
				/* 全局点击事件 */
				/* 全局触摸屏点击事件 */
				PopsDOMUtils.on(
					// @ts-ignore
					SearchSuggestion.selfDocument,
					["click", "touchstart"],
					void 0,
					SearchSuggestion.hideEvent,
					{
						capture: true,
					}
				);
			},
			/**
			 * 移除隐藏搜索建议框的事件
			 */
			removeHideEvent() {
				PopsDOMUtils.off(
					// @ts-ignore
					SearchSuggestion.selfDocument,
					["click", "touchstart"],
					void 0,
					SearchSuggestion.hideEvent,
					{
						capture: true,
					}
				);
			},
			/**
			 * 设置所有监听
			 */
			setAllEvent() {
				SearchSuggestion.setInputChangeEvent();
				SearchSuggestion.setHideEvent();
				SearchSuggestion.setShowEvent();
			},
			/**
			 * 移除所有监听
			 */
			removeAllEvent() {
				SearchSuggestion.removeInputChangeEvent();
				SearchSuggestion.removeHideEvent();
				SearchSuggestion.removeShowEvent();
			},
			/**
			 * 获取删除按钮的html
			 */
			getDeleteIconHTML(size = 16, fill = "#bababa") {
				return `
				<svg class="pops-${PopsType}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="${fill}">
					<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
					<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
				</svg>
        	`;
			},
			/**
			 * 设置当前正在搜索中的提示
			 */
			setPromptsInSearch() {
				// @ts-ignore
				let isSearchingElement = PopsDOMUtils.createElement("li", {
					className: `pops-${PopsType}-search-suggestion-hint-searching-item`,
					innerHTML: config.searchingTip,
				});
				SearchSuggestion.hintULElement.appendChild(isSearchingElement);
			},
			/**
			 * 移除正在搜索中的提示
			 */
			removePromptsInSearch() {
				SearchSuggestion.hintULElement
					.querySelector(
						`li.pops-${PopsType}-search-suggestion-hint-searching-item`
					)
					?.remove();
			},
			/**
			 * 清空所有的搜索结果
			 */
			clearAllSearchItemLi() {
				SearchSuggestion.hintULElement.innerHTML = "";
			},
			/**
			 * 修改搜索建议框的位置(top、left)
			 * 因为目标元素可能是动态隐藏的
			 */
			changeHintULElementPosition(
				target = config.target ?? config.inputTarget
			) {
				/** @type {DOMRect|null} */
				let targetRect = null;
				if (config.followPosition === "inputCursor") {
					targetRect = PopsDOMUtils.getTextBoundingRect(
						config.inputTarget,
						config.inputTarget.selectionStart || 0,
						config.inputTarget.selectionEnd || 0,
						false
					);
				} else {
					targetRect = config.isAbsolute
						? PopsDOMUtils.offset(target)
						: target.getBoundingClientRect();
				}
				if (targetRect == null) {
					return;
				}
				// 文档最大高度
				let documentHeight = document.documentElement.clientHeight;
				if (config.isAbsolute) {
					// 绝对定位
					documentHeight = PopsDOMUtils.height(document);
				}
				// 文档最大宽度
				let documentWidth = PopsDOMUtils.width(document);
				if (config.position === "top") {
					if (config.positionTopToReverse) {
						SearchSuggestion.hintULElement.setAttribute(
							"data-top-reverse",
							"true"
						);
					}
					// 在上面
					SearchSuggestion.hintULElement.style.top = "";
					SearchSuggestion.hintULElement.style.bottom =
						documentHeight - targetRect.top + config.topDistance + "px";
				} else if (config.position === "bottom") {
					// 在下面
					SearchSuggestion.hintULElement.removeAttribute("data-top-reverse");
					SearchSuggestion.hintULElement.style.bottom = "";
					SearchSuggestion.hintULElement.style.top =
						targetRect.height + targetRect.top + config.topDistance + "px";
				} else if (config.position === "auto") {
					// 自动判断
					if (
						targetRect.bottom +
							PopsDOMUtils.height(SearchSuggestion.hintULElement) >
						documentHeight
					) {
						if (config.positionTopToReverse) {
							SearchSuggestion.hintULElement.setAttribute(
								"data-top-reverse",
								"true"
							);
						}
						// 超出浏览器高度了，自动转换为上面去
						SearchSuggestion.hintULElement.style.top = "";
						SearchSuggestion.hintULElement.style.bottom =
							documentHeight - targetRect.top + config.topDistance + "px";
					} else {
						SearchSuggestion.hintULElement.removeAttribute("data-top");
						SearchSuggestion.hintULElement.style.bottom = "";
						SearchSuggestion.hintULElement.style.top =
							targetRect.height + targetRect.top + config.topDistance + "px";
					}
				} else {
					throw new TypeError("未知设置的位置" + config.position);
				}
				let hintUIWidth = PopsDOMUtils.width(SearchSuggestion.hintULElement);
				SearchSuggestion.hintULElement.style.left =
					(targetRect.left + hintUIWidth > documentWidth
						? documentWidth - hintUIWidth
						: targetRect.left) + "px";
			},
			/**
			 * 修改搜索建议框的width
			 * 因为目标元素可能是动态隐藏的
			 */
			changeHintULElementWidth(target = config.target ?? config.inputTarget) {
				let targetRect = target.getBoundingClientRect();
				if (config.followTargetWidth) {
					SearchSuggestion.hintULElement.style.width = targetRect.width + "px";
				} else {
					// @ts-ignore
					SearchSuggestion.hintULElement.style.width = config.width;
				}
			},
			/**
			 * 更新页面显示的搜索结果
			 * @param {PopsSearchSuggestionData[]} data
			 */
			update(data = []) {
				if (!Array.isArray(data)) {
					throw new TypeError("传入的数据不是数组");
				}
				config.data = data;
				/* 清空已有的搜索结果 */
				if (config.data.length) {
					SearchSuggestion.$data.isEmpty = false;

					if (config.toHideWithNotResult) {
						SearchSuggestion.show();
					}
					SearchSuggestion.clearAllSearchItemLi();
					/* 添加进ul中 */
					config.data.forEach((item, index) => {
						let itemElement = SearchSuggestion.getSearchItemLiElement(
							item,
							index
						);
						// @ts-ignore
						SearchSuggestion.setSearchItemClickEvent(itemElement);
						// @ts-ignore
						SearchSuggestion.setSearchItemSelectEvent(itemElement);
						SearchSuggestion.hintULElement.appendChild(itemElement);
					});
				} else {
					/* 清空 */
					SearchSuggestion.clear();
				}
			},
			/**
			 * 清空当前的搜索结果并显示无结果
			 */
			clear() {
				this.$data.isEmpty = true;
				this.clearAllSearchItemLi();
				this.hintULElement.appendChild(
					// @ts-ignore
					PopsUtils.parseTextToDOM(config.toSearhNotResultHTML)
				);
				if (config.toHideWithNotResult) {
					this.hide();
				}
			},
			/**
			 * 隐藏搜索建议框
			 */
			hide() {
				this.root.style.display = "none";
			},
			/**
			 * 显示搜索建议框
			 */
			show() {
				this.root.style.display = "";
			},
		};
		return SearchSuggestion;
	};
	return pops;
});
