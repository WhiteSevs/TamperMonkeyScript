(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.pops = factory());
})(this, (function () { 'use strict';

    const SymbolEvents = Symbol("events_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1));

    const PopsCoreDefaultEnv = {
        document: document,
        window: window,
        globalThis: globalThis,
        self: self,
    };
    const PopsCoreEnv = {
        document: document,
        window: window,
        globalThis: globalThis,
        self: self,
    };
    const PopsCore = {
        init(option) {
            if (!option) {
                option = Object.assign({}, PopsCoreDefaultEnv);
            }
            Object.assign(PopsCoreEnv, option);
        },
        get document() {
            return PopsCoreEnv.document;
        },
        get window() {
            return PopsCoreEnv.window;
        },
        get globalThis() {
            return PopsCoreEnv.globalThis;
        },
        get self() {
            return PopsCoreEnv.self;
        },
    };
    const OriginPrototype$1 = {
        Object: {
            defineProperty: Object.defineProperty,
        },
    };

    // @ts-nocheck

    const AnyTouch = function () {
    	return (function (global, factory) {
    		return factory();
    	})(globalThis || window, function () {

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

    		var extendStatics = function (d, b) {
    			extendStatics =
    				Object.setPrototypeOf ||
    				({ __proto__: [] } instanceof Array &&
    					function (d, b) {
    						d.__proto__ = b;
    					}) ||
    				function (d, b) {
    					for (var p in b) if (Object.hasOwnProperty.call(b, p)) d[p] = b[p];
    				};
    			return extendStatics(d, b);
    		};

    		function __extends(d, b) {
    			if (typeof b !== "function" && b !== null)
    				throw new TypeError(
    					"Class extends value " + String(b) + " is not a constructor or null"
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

    		var __assign = function () {
    			__assign =
    				Object.assign ||
    				function __assign(t) {
    					for (var s, i = 1, n = arguments.length; i < n; i++) {
    						s = arguments[i];
    						for (var p in s) if (Object.hasOwnProperty.call(s, p)) t[p] = s[p];
    					}
    					return t;
    				};

    			return __assign.apply(this, arguments);
    		};

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

    			AnyEvent.prototype.beforeEach = function (interceptor) {
    				this.__interceptor = interceptor;
    			};

    			AnyEvent.prototype.on = function (typeOrTypes, listener) {
    				var e_1, _a;
    				var types = Array.isArray(typeOrTypes) ? typeOrTypes : [typeOrTypes];
    				try {
    					for (
    						var types_1 = __values(types), types_1_1 = types_1.next();
    						!types_1_1.done;
    						types_1_1 = types_1.next()
    					) {
    						var type = types_1_1.value;

    						this.__map[type] = this.__map[type] || [];

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

    			AnyEvent.prototype.__emit = function (type, event) {
    				var e_2, _a;

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

    			AnyEvent.prototype.off = function (type, listener) {
    				var listeners = this.__map[type];
    				if (void 0 !== listeners) {
    					if (void 0 === listener) {
    						delete this.__map[type];
    					} else {
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
    			(_a[4] = TYPE_START),
    			(_a[5] = TYPE_MOVE),
    			(_a[1] = TYPE_END),
    			(_a[3] = TYPE_CANCEL),
    			_a);

    		function getStatusName(code) {
    			return STATUS_CODE_AND_NAME_MAP[code];
    		}

    		function flow(isVaild, lastStatus, phase) {
    			var _a, _b, _c, _d, _e, _f, _g;
    			var STATE_MAP = {
    				1:
    					((_a = {}),
    					(_a[0] = ((_b = {}), (_b[TYPE_MOVE] = 4), _b)),
    					(_a[4] =
    						((_c = {}),
    						(_c[TYPE_MOVE] = 5),
    						(_c[TYPE_END] = 1),
    						(_c[TYPE_CANCEL] = 3),
    						_c)),
    					(_a[5] =
    						((_d = {}),
    						(_d[TYPE_MOVE] = 5),
    						(_d[TYPE_END] = 1),
    						(_d[TYPE_CANCEL] = 3),
    						_d)),
    					_a),
    				0:
    					((_e = {}),
    					(_e[4] =
    						((_f = {}),
    						(_f[TYPE_MOVE] = 2),
    						(_f[TYPE_END] = 1),
    						(_f[TYPE_CANCEL] = 3),
    						_f)),
    					(_e[5] =
    						((_g = {}),
    						(_g[TYPE_START] = 2),
    						(_g[TYPE_MOVE] = 2),
    						(_g[TYPE_END] = 1),
    						(_g[TYPE_CANCEL] = 3),
    						_g)),
    					_e),
    			};

    			var map = STATE_MAP[Number(isVaild)][lastStatus];
    			return (void 0 !== map && map[phase]) || 0;
    		}

    		function resetState(context) {
    			if ([1, 3, 2].includes(context.state)) {
    				context.state = 0;
    			}
    		}

    		function isMoveOrEndOrCancel(state) {
    			return [5, 1, 3].includes(state);
    		}

    		function isDisabled(context) {
    			if (context.disabled) {
    				context.state = 0;
    				return true;
    			}
    		}

    		function createPluginContext(defaultOptions, options) {
    			return __assign(__assign(__assign({}, defaultOptions), options), {
    				state: 0,
    				disabled: false,
    			});
    		}

    		function round2(n) {
    			return Math.round(n * 100) / 100;
    		}

    		function inputCreator() {
    			var id = 0;
    			var prevInput;

    			var activeInput;

    			var startInput;

    			var startMultiInput;

    			return function (basicsInput) {
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

    						startMultiInput: startMultiInput,

    						startInput: startInput,
    					});
    				}
    			};
    		}

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
    				x = _a.x,
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
    			var prevPoints;
    			var isPressed = false;

    			var _target = null;
    			var createInput = inputCreator();

    			return function (event) {
    				var clientX = event.clientX,
    					clientY = event.clientY,
    					type = event.type,
    					button = event.button,
    					target = event.target;
    				var points = [{ clientX: clientX, clientY: clientY, target: target }];
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

    				var changedPoints = prevPoints || [
    					{ clientX: clientX, clientY: clientY, target: target },
    				];
    				prevPoints = [{ clientX: clientX, clientY: clientY, target: target }];
    				if (void 0 !== phase) {
    					return createInput({
    						phase: phase,
    						changedPoints: changedPoints,
    						points: points,

    						target: _target,

    						targets: [_target],
    						nativeEvent: event,
    					});
    				}
    			};
    		}

    		function touch(el) {
    			var createInput = inputCreator();

    			return function (event) {
    				var targets = [];

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
    				var changedPoints = Array.from(event.changedTouches).map(function (_a) {
    					var clientX = _a.clientX,
    						clientY = _a.clientY,
    						target = _a.target;
    					return { clientX: clientX, clientY: clientY, target: target };
    				});
    				return createInput({
    					phase: event.type.replace("touch", ""),
    					changedPoints: changedPoints,

    					points: points,
    					nativeEvent: event,
    					target: event.target,

    					targets: targets,
    				});
    			};
    		}

    		function dispatchDomEvent(typeName, el, payload, eventInit) {
    			var data = {};
    			for (var key in payload) {
    				if (!["target", "currentTarget", "type"].includes(key)) {
    					data[key] = payload[key];
    				}
    			}

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
    						payload.targets.every(function (target) {
    							return event.currentTarget.contains(target);
    						})
    					);
    				},
    			});
    			return el.dispatchEvent(event);
    		}

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

    			function default_1(el, options) {
    				var _a;

    				var _this = _super.call(this) || this;

    				_this.v = "2.1.3";

    				_this.__computeFunctionList = [];

    				_this.__computeFunctionCreatorList = [];

    				_this.__pluginContexts = [];
    				_this.__isIgnoreMouse = false;

    				_this.el = el;
    				_this.c = {};
    				_this.__options = __assign(__assign({}, DEFAULT_OPTIONS$6), options);

    				var createInputFromTouch = touch(_this.el);
    				var createInputFromMouse = mouse();

    				_this.__inputCreatorMap =
    					((_a = {}),
    					(_a[TOUCH_START] = createInputFromTouch),
    					(_a[TOUCH_MOVE] = createInputFromTouch),
    					(_a[TOUCH_END] = createInputFromTouch),
    					(_a[TOUCH_CANCEL] = createInputFromTouch),
    					(_a[MOUSE_DOWN] = createInputFromMouse),
    					(_a[MOUSE_MOVE] = createInputFromMouse),
    					(_a[MOUSE_UP] = createInputFromMouse),
    					_a);

    				_this.on(TYPE_AT_AFTER, function (payload) {
    					var target = payload.target,
    						__type = payload.__type;
    					var domEvents = _this.__options.domEvents;

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

    			default_1.prototype.use = function (plugin, pluginOptions) {
    				this.__pluginContexts.push(plugin(this, pluginOptions));
    			};

    			default_1.prototype.catchEvent = function (event) {
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

    					this.emit(TYPE_INPUT, input);
    					this.emit2("at:".concat(input.phase), input, {});
    					var computed_1 = {};

    					this.__computeFunctionList.forEach(function (compute) {
    						var result = compute(input, computed_1);
    						if (void 0 !== result) {
    							for (var key in result) {
    								computed_1[key] = result[key];
    							}
    						}
    					});

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
    				computeFunctionCreatorList,

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
    						computeFunctionCreatorList_1_1 = computeFunctionCreatorList_1.next()
    					) {
    						var computeFunctionCreator = computeFunctionCreatorList_1_1.value;
    						if (
    							!this.__computeFunctionCreatorList.includes(
    								computeFunctionCreator
    							)
    						) {
    							this.__computeFunctionCreatorList.push(computeFunctionCreator);

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

    				this.on(TYPE_COMPUTED, callback);
    			};

    			default_1.prototype.beforeEach = function (interceptor) {
    				var _this = this;

    				_super.prototype.beforeEach.call(this, function (type, next) {
    					var _a;
    					if ((_a = _this.c) === null || _a === void 0 ? void 0 : _a.name) {
    						interceptor(type, next);
    					} else {
    						next();
    					}
    				});
    			};

    			default_1.prototype.get = function (name) {
    				return this.__pluginContexts.find(function (pluginContext) {
    					return name === pluginContext.name;
    				});
    			};

    			default_1.prototype.set = function (newOptions) {
    				this.__options = __assign(__assign({}, this.__options), newOptions);
    			};

    			default_1.prototype.emit2 = function (type, payload, pluginContext) {
    				var _this = this;
    				this.c = pluginContext;

    				this.emit(
    					type,
    					__assign(__assign({}, payload), { type: type }),
    					function () {
    						_this.emit(
    							TYPE_AT_AFTER,
    							__assign(__assign({}, payload), { name: type, __type: type })
    						);
    					}
    				);
    			};
    			default_1.prototype.destroy = function () {
    				this.emit(TYPE_UNBIND);
    				_super.prototype.destroy.call(this);
    			};
    			return default_1;
    		})(AnyEvent);

    		var getVLength = function (v) {
    			return Math.sqrt(v.x * v.x + v.y * v.y);
    		};

    		var getDotProduct = function (v1, v2) {
    			return v1.x * v2.x + v1.y * v2.y;
    		};

    		var getRadian = function (v1, v2) {
    			var mr = getVLength(v1) * getVLength(v2);
    			if (mr === 0) return 0;
    			var r = getDotProduct(v1, v2) / mr;
    			if (r > 1) r = 1;
    			return Math.acos(r);
    		};

    		var getCross = function (v1, v2) {
    			return v1.x * v2.y - v2.x * v1.y;
    		};

    		var radianToAngle = function (radian) {
    			return (radian / Math.PI) * 180;
    		};

    		var getAngle = function (v1, v2) {
    			var angle = getRadian(v1, v2);
    			if (getCross(v1, v2) > 0) {
    				angle *= -1;
    			}
    			return radianToAngle(angle);
    		};

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
    			return function (input) {
    				var prevInput = input.prevInput;
    				var deltaX = 0;
    				var deltaY = 0;
    				var deltaXYAngle = 0;
    				if (void 0 !== prevInput) {
    					deltaX = input.x - prevInput.x;
    					deltaY = input.y - prevInput.y;
    					if (0 !== deltaX || 0 !== deltaY) {
    						var deltaXY = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
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

    			var overallDirection;

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

    					overallDirection: overallDirection,
    				};
    			};
    		}

    		function ComputeScale() {
    			var scale = 1;

    			return function (input, computed) {
    				var deltaScale = 1;
    				var prevVecotr = computed.prevVecotr,
    					startVecotr = computed.startVecotr,
    					activeVecotr = computed.activeVecotr;
    				if (activeVecotr) {
    					deltaScale = round2(
    						getVLength(activeVecotr) / getVLength(prevVecotr)
    					);
    					scale = round2(getVLength(activeVecotr) / getVLength(startVecotr));
    				}
    				return { scale: scale, deltaScale: deltaScale };
    			};
    		}

    		function ComputeVAndDir() {
    			var velocityX = 0;
    			var velocityY = 0;
    			var speedX = 0;
    			var speedY = 0;

    			var direction;

    			var lastValidInput;

    			return function (input) {
    				if (void 0 !== input) {
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

    					direction: direction,
    				};
    			};
    		}

    		function ComputeMaxLength() {
    			var maxPointLength = 0;

    			return function (input) {
    				var phase = input.phase;
    				if (TYPE_START === phase) {
    					maxPointLength = input.pointLength;
    				}
    				return { maxPointLength: maxPointLength };
    			};
    		}

    		function computeVector(input) {
    			return {
    				x: input.points[1][CLIENT_X] - input.points[0][CLIENT_X],
    				y: input.points[1][CLIENT_Y] - input.points[0][CLIENT_Y],
    			};
    		}
    		function ComputeVectorForMutli() {
    			var startVecotr;

    			var prevVecotr;
    			var activeVecotr;

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
    					startVecotr: startVecotr,

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

    		function tap(at, options) {
    			var context = createPluginContext(DEFAULT_OPTIONS$5, options);
    			var tapCount = 0;

    			var prevTapPoint;

    			var prevTapTime;

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

    			function isValidDistanceFromPrevTap(center, options) {
    				if (void 0 !== prevTapPoint) {
    					var distanceFromPreviousTap = getVLength({
    						x: center.x - prevTapPoint.x,

    						y: center.y - prevTapPoint.y,
    					});
    					prevTapPoint = center;
    					return options.maxDistanceFromPrevTap >= distanceFromPreviousTap;
    				} else {
    					prevTapPoint = center;
    					return true;
    				}
    			}

    			function isValidInterval(waitNextTapTime) {
    				var now = performance.now();

    				if (void 0 === prevTapTime) {
    					prevTapTime = now;
    					return true;
    				} else {
    					var interval = now - prevTapTime;
    					prevTapTime = now;
    					return interval < waitNextTapTime;
    				}
    			}

    			at.compute([ComputeDistance, ComputeMaxLength], function (computed) {
    				if (isDisabled(context)) return;
    				var phase = computed.phase,
    					x = computed.x,
    					y = computed.y;
    				if (TYPE_END !== phase) return;
    				context.state = 0;
    				if (test()) {
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

    		function pan(at, options) {
    			var context = createPluginContext(DEFAULT_OPTIONS$4, options);
    			at.compute(
    				[ComputeVAndDir, ComputeDistance, ComputeDeltaXY],

    				function (computed) {
    					resetState(context);
    					if (isDisabled(context)) return;
    					var isValid = test();
    					context.state = flow(isValid, context.state, computed.phase);
    					if (isValid || isMoveOrEndOrCancel(context.state)) {
    						var name_1 = context.name;
    						at.emit2(name_1, computed, context);
    						at.emit2(name_1 + getStatusName(context.state), computed, context);
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

    		function swipe(at, options) {
    			var context = createPluginContext(DEFAULT_OPTIONS$3, options);
    			at.compute(
    				[ComputeDistance, ComputeVAndDir, ComputeMaxLength],

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

    		function press(at, options) {
    			var context = createPluginContext(DEFAULT_OPTIONS$2, options);
    			var timeoutId = 0;

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

    		function pinch(at, options) {
    			var context = createPluginContext(DEFAULT_OPTIONS$1, options);
    			at.compute(
    				[ComputeVectorForMutli, ComputeScale],

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

    		function rotate(at, options) {
    			var context = createPluginContext(DEFAULT_OPTIONS, options);
    			at.compute(
    				[ComputeVectorForMutli, ComputeAngle],

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

    		function doubletap(at) {
    			at.use(tap, { name: "doubletap", tapTimes: 2 });
    			var doubleTapContext = at.get("doubletap");

    			var timeID;

    			at.beforeEach(function (type, next) {
    				if ("tap" === type) {
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

    			function default_1(el, options) {
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
    };

    class PopsUtils {
        /**
         * 判断是否是window，例如window、self、globalThis
         * @param target
         */
        isWin(target) {
            if (typeof target !== "object") {
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
            if (target === PopsCore.globalThis) {
                return true;
            }
            if (target === PopsCore.window) {
                return true;
            }
            if (target === PopsCore.self) {
                return true;
            }
            if (typeof unsafeWindow !== "undefined" &&
                target === unsafeWindow) {
                return true;
            }
            if (target?.Math?.toString() !== "[object Math]") {
                return false;
            }
            return true;
        }
        isDOM(target) {
            return target instanceof Node;
        }
        /**
         * 删除对象上的属性
         * @param target
         * @param propName
         */
        delete(target, propName) {
            if (typeof Reflect === "object" && Reflect.deleteProperty) {
                Reflect.deleteProperty(target, propName);
            }
            else {
                delete target[propName];
            }
        }
        assign(target = {}, source = {}, isAdd = false) {
            let UtilsContext = this;
            if (source == null) {
                return target;
            }
            if (target == null) {
                target = {};
            }
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
                    if (typeof sourceValue === "object" &&
                        sourceValue != null &&
                        sourceKeyName in target &&
                        !UtilsContext.isDOM(sourceValue)) {
                        /* 源端的值是object类型，且不是元素节点 */
                        target[sourceKeyName] = UtilsContext.assign(targetValue, sourceValue, isAdd);
                        continue;
                    }
                    target[sourceKeyName] = sourceValue;
                }
            }
            else {
                for (const targetKeyName in target) {
                    if (targetKeyName in source) {
                        // @ts-ignore
                        let targetValue = target[targetKeyName];
                        // @ts-ignore
                        let sourceValue = source[targetKeyName];
                        if (typeof sourceValue === "object" &&
                            sourceValue != null &&
                            !UtilsContext.isDOM(sourceValue) &&
                            Object.keys(sourceValue).length) {
                            /* 源端的值是object类型，且不是元素节点 */
                            // @ts-ignore
                            target[targetKeyName] = UtilsContext.assign(targetValue, sourceValue, isAdd);
                            continue;
                        }
                        /* 直接赋值 */
                        // @ts-ignore
                        target[targetKeyName] = sourceValue;
                    }
                }
            }
            return target;
        }
        /**
         * 生成uuid
         */
        getRandomGUID() {
            if (typeof PopsCore.globalThis?.crypto?.randomUUID === "function") {
                return PopsCore.globalThis.crypto.randomUUID();
            }
            else {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (charStr) {
                    var randomValue = (Math.random() * 16) | 0, randomCharValue = charStr === "x" ? randomValue : (randomValue & 0x3) | 0x8;
                    return randomCharValue.toString(16);
                });
            }
        }
        /**
         * 字符串转HTMLElement
         * @param elementString
         * @returns
         */
        parseTextToDOM(elementString) {
            /* 去除前后的换行和空格 */
            elementString = elementString
                .replace(/^[\n|\s]*/g, "")
                .replace(/[\n|\s]*$/g, "");
            let targetElement = popsDOMUtils.createElement("div", {
                innerHTML: elementString,
            });
            return targetElement.firstChild;
        }
        contains(context, target) {
            if (arguments.length === 1) {
                // 只判断该页面是否存在该元素
                return this.contains(PopsCore.document.body || PopsCore.document.documentElement, arguments[0]);
            }
            else {
                if (typeof target[Symbol.iterator] === "function") {
                    // 可遍历的数组
                    let flag = true;
                    for (const targetNode of target) {
                        if (!context.contains(targetNode)) {
                            flag = false;
                            break;
                        }
                    }
                    return flag;
                }
                else {
                    return context.contains(target);
                }
            }
        }
        formatTime(text = new Date(), formatType = "yyyy-MM-dd HH:mm:ss") {
            let time = text == null ? new Date() : new Date(text);
            /**
             * 校验时间补0
             * @param timeNum
             * @returns
             */
            function checkTime(timeNum) {
                if (timeNum < 10)
                    return "0" + timeNum;
                return timeNum;
            }
            /**
             * 时间制修改 24小时制转12小时制
             * @param hourNum 小时
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
        }
        formatByteToSize(byteSize, addType = true) {
            byteSize = parseInt(byteSize.toString());
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
            result = addType
                ? result + resultType.toString()
                : parseFloat(result.toString());
            return result;
        }
        AnyTouch = AnyTouch;
    }
    const popsUtils = new PopsUtils();

    class PopsDOMUtilsEvent {
        on(element, eventType, selector, callback, option) {
            /**
             * 获取option配置
             * @param args
             * @param startIndex
             * @param option
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
                }
                else if (typeof args[startIndex] === "object" &&
                    ("capture" in args[startIndex] ||
                        "once" in args[startIndex] ||
                        "passive" in args[startIndex])) {
                    option.capture = args[startIndex].capture;
                    option.once = args[startIndex].once;
                    option.passive = args[startIndex].passive;
                }
                return option;
            }
            let DOMUtilsContext = this;
            let args = arguments;
            if (typeof element === "string") {
                element = PopsCore.document.querySelectorAll(element);
            }
            if (element == null) {
                return;
            }
            let elementList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                elementList = [...element];
            }
            else {
                elementList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType);
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" "));
            }
            let _selector_ = selector;
            let _callback_ = callback;
            let _option_ = {
                capture: false,
                once: false,
                passive: false,
            };
            if (typeof selector === "function") {
                /* 这是为没有selector的情况 */
                _selector_ = void 0;
                _callback_ = selector;
                _option_ = getOption(args, 3, _option_);
            }
            else {
                /* 这是存在selector的情况 */
                _option_ = getOption(args, 4, _option_);
            }
            /**
             * 如果是once，那么删除该监听和元素上的事件和监听
             */
            function checkOptionOnceToRemoveEventListener() {
                if (_option_.once) {
                    DOMUtilsContext.off(element, eventType, selector, callback, option);
                }
            }
            elementList.forEach((elementItem) => {
                function ownCallBack(event) {
                    let target = event.target;
                    if (_selector_) {
                        /* 存在自定义子元素选择器 */
                        let totalParent = popsUtils.isWin(elementItem)
                            ? PopsCore.document.documentElement
                            : elementItem;
                        if (target.matches(_selector_)) {
                            /* 当前目标可以被selector所匹配到 */
                            _callback_.call(target, event);
                            checkOptionOnceToRemoveEventListener();
                        }
                        else if (target.closest(_selector_) &&
                            totalParent.contains(target.closest(_selector_))) {
                            /* 在上层与主元素之间寻找可以被selector所匹配到的 */
                            let closestElement = target.closest(_selector_);
                            /* event的target值不能直接修改 */
                            OriginPrototype$1.Object.defineProperty(event, "target", {
                                get() {
                                    return closestElement;
                                },
                            });
                            _callback_.call(closestElement, event);
                            checkOptionOnceToRemoveEventListener();
                        }
                    }
                    else {
                        _callback_.call(elementItem, event);
                        checkOptionOnceToRemoveEventListener();
                    }
                }
                /* 遍历事件名设置元素事件 */
                eventTypeList.forEach((eventName) => {
                    elementItem.addEventListener(eventName, ownCallBack, _option_);
                    if (_callback_ && _callback_.delegate) {
                        elementItem.setAttribute("data-delegate", _selector_);
                    }
                    /* 获取对象上的事件 */
                    let elementEvents = elementItem[SymbolEvents] || {};
                    /* 初始化对象上的xx事件 */
                    elementEvents[eventName] = elementEvents[eventName] || [];
                    elementEvents[eventName].push({
                        selector: _selector_,
                        option: _option_,
                        callback: ownCallBack,
                        originCallBack: _callback_,
                    });
                    /* 覆盖事件 */
                    elementItem[SymbolEvents] = elementEvents;
                });
            });
        }
        off(element, eventType, selector, callback, option, filter) {
            /**
             * 获取option配置
             * @param args1
             * @param startIndex
             * @param option
             */
            function getOption(args1, startIndex, option) {
                if (typeof args1[startIndex] === "boolean") {
                    option.capture = args1[startIndex];
                }
                else if (typeof args1[startIndex] === "object" &&
                    "capture" in args1[startIndex]) {
                    option.capture = args1[startIndex].capture;
                }
                return option;
            }
            let args = arguments;
            if (typeof element === "string") {
                element = PopsCore.document.querySelectorAll(element);
            }
            if (element == null) {
                return;
            }
            let elementList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                elementList = [...element];
            }
            else {
                elementList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType);
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" "));
            }
            /**
             * 子元素选择器
             */
            let _selector_ = selector;
            /**
             * 事件的回调函数
             */
            let _callback_ = callback;
            /**
             * 事件的配置
             */
            let _option_ = {
                capture: false,
            };
            if (typeof selector === "function") {
                /* 这是为没有selector的情况 */
                _selector_ = void 0;
                _callback_ = selector;
                _option_ = getOption(args, 3, _option_);
            }
            else {
                _option_ = getOption(args, 4, _option_);
            }
            elementList.forEach((elementItem) => {
                /* 获取对象上的事件 */
                let elementEvents = elementItem[SymbolEvents] || {};
                eventTypeList.forEach((eventName) => {
                    let handlers = elementEvents[eventName] || [];
                    if (typeof filter === "function") {
                        handlers = handlers.filter(filter);
                    }
                    for (let index = 0; index < handlers.length; index++) {
                        let handler = handlers[index];
                        let flag = false;
                        if (!_selector_ || handler.selector === _selector_) {
                            /* selector不为空，进行selector判断 */
                            flag = true;
                        }
                        if (!_callback_ ||
                            handler.callback === _callback_ ||
                            handler.originCallBack === _callback_) {
                            /* callback不为空，进行callback判断 */
                            flag = true;
                        }
                        if (flag) {
                            elementItem.removeEventListener(eventName, handler.callback, _option_);
                            handlers.splice(index--, 1);
                        }
                    }
                    if (handlers.length === 0) {
                        /* 如果没有任意的handler，那么删除该属性 */
                        popsUtils.delete(elementEvents, eventType);
                    }
                });
                elementItem[SymbolEvents] = elementEvents;
            });
        }
        /**
         * 取消绑定所有的事件
         * @param element 需要取消绑定的元素|元素数组
         * @param eventType （可选）需要取消监听的事件
         */
        offAll(element, eventType) {
            if (typeof element === "string") {
                element = PopsCore.document.querySelectorAll(element);
            }
            if (element == null) {
                return;
            }
            let elementList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                elementList = [...element];
            }
            else {
                elementList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType);
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" "));
            }
            elementList.forEach((elementItem) => {
                Object.getOwnPropertySymbols(elementItem).forEach((__symbolEvents) => {
                    if (!__symbolEvents.toString().startsWith("Symbol(events_")) {
                        return;
                    }
                    let elementEvents = elementItem[__symbolEvents] || {};
                    let iterEventNameList = eventTypeList.length
                        ? eventTypeList
                        : Object.keys(elementEvents);
                    iterEventNameList.forEach((eventName) => {
                        let handlers = elementEvents[eventName];
                        if (!handlers) {
                            return;
                        }
                        for (const handler of handlers) {
                            elementItem.removeEventListener(eventName, handler.callback, {
                                capture: handler["option"]["capture"],
                            });
                        }
                        popsUtils.delete(elementItem[__symbolEvents], eventName);
                    });
                });
            });
        }
        /**
         * 等待文档加载完成后执行指定的函数
         * @param callback 需要执行的函数
         * @example
         * DOMUtils.ready(function(){
         *   console.log("文档加载完毕")
         * })
         */
        ready(callback) {
            if (typeof callback !== "function") {
                return;
            }
            /**
             * 检测文档是否加载完毕
             */
            function checkDOMReadyState() {
                try {
                    if (document.readyState === "complete" ||
                        (document.readyState !== "loading" &&
                            !document.documentElement.doScroll)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                catch (error) {
                    return false;
                }
            }
            /**
             * 成功加载完毕后触发的回调函数
             */
            function completed() {
                removeDomReadyListener();
                callback();
            }
            let targetList = [
                {
                    target: PopsCore.document,
                    eventType: "DOMContentLoaded",
                    callback: completed,
                },
                {
                    target: PopsCore.window,
                    eventType: "load",
                    callback: completed,
                },
            ];
            /**
             * 添加监听
             */
            function addDomReadyListener() {
                for (let index = 0; index < targetList.length; index++) {
                    let item = targetList[index];
                    item.target.addEventListener(item.eventType, item.callback);
                }
            }
            /**
             * 移除监听
             */
            function removeDomReadyListener() {
                for (let index = 0; index < targetList.length; index++) {
                    let item = targetList[index];
                    item.target.removeEventListener(item.eventType, item.callback);
                }
            }
            if (checkDOMReadyState()) {
                /* 检查document状态 */
                setTimeout(callback);
            }
            else {
                /* 添加监听 */
                addDomReadyListener();
            }
        }
        /**
         * 主动触发事件
         * @param element 需要触发的元素|元素数组|window
         * @param eventType 需要触发的事件
         * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
         * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的click事件
         * DOMUtils.trigger(document.querySelector("a.xx"),"click")
         * DOMUtils.trigger("a.xx","click")
         * // 触发元素a.xx的click、tap、hover事件
         * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
         * DOMUtils.trigger("a.xx",["click","tap","hover"])
         */
        trigger(element, eventType, details, useDispatchToTriggerEvent = true) {
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            let elementList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                elementList = [...element];
            }
            else {
                elementList = [element];
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventType;
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventType.split(" ");
            }
            elementList.forEach((elementItem) => {
                /* 获取对象上的事件 */
                let events = elementItem[SymbolEvents] || {};
                eventTypeList.forEach((_eventType_) => {
                    let event = null;
                    if (details && details instanceof Event) {
                        event = details;
                    }
                    else {
                        event = new Event(_eventType_);
                        if (details) {
                            Object.keys(details).forEach((keyName) => {
                                event[keyName] = details[keyName];
                            });
                        }
                    }
                    if (useDispatchToTriggerEvent == false && _eventType_ in events) {
                        events[_eventType_].forEach((eventsItem) => {
                            eventsItem.callback(event);
                        });
                    }
                    else {
                        elementItem.dispatchEvent(event);
                    }
                });
            });
        }
        /**
         * 绑定或触发元素的click事件
         * @param element 目标元素
         * @param handler （可选）事件处理函数
         * @param details （可选）赋予触发的Event的额外属性
         * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的click事件
         * DOMUtils.click(document.querySelector("a.xx"))
         * DOMUtils.click("a.xx")
         * DOMUtils.click("a.xx"，function(){
         *  console.log("触发click事件成功")
         * })
         * */
        click(element, handler, details, useDispatchToTriggerEvent) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (handler == null) {
                DOMUtilsContext.trigger(element, "click", details, useDispatchToTriggerEvent);
            }
            else {
                DOMUtilsContext.on(element, "click", null, handler);
            }
        }
        /**
         * 绑定或触发元素的blur事件
         * @param element 目标元素
         * @param handler （可选）事件处理函数
         * @param details （可选）赋予触发的Event的额外属性
         * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的blur事件
         * DOMUtils.blur(document.querySelector("a.xx"))
         * DOMUtils.blur("a.xx")
         * DOMUtils.blur("a.xx"，function(){
         *  console.log("触发blur事件成功")
         * })
         * */
        blur(element, handler, details, useDispatchToTriggerEvent) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (handler === null) {
                DOMUtilsContext.trigger(element, "blur", details, useDispatchToTriggerEvent);
            }
            else {
                DOMUtilsContext.on(element, "blur", null, handler);
            }
        }
        /**
         * 绑定或触发元素的focus事件
         * @param element 目标元素
         * @param handler （可选）事件处理函数
         * @param details （可选）赋予触发的Event的额外属性
         * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的focus事件
         * DOMUtils.focus(document.querySelector("a.xx"))
         * DOMUtils.focus("a.xx")
         * DOMUtils.focus("a.xx"，function(){
         *  console.log("触发focus事件成功")
         * })
         * */
        focus(element, handler, details, useDispatchToTriggerEvent) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (handler == null) {
                DOMUtilsContext.trigger(element, "focus", details, useDispatchToTriggerEvent);
            }
            else {
                DOMUtilsContext.on(element, "focus", null, handler);
            }
        }
        /**
         * 当鼠标移入或移出元素时触发事件
         * @param element 当前元素
         * @param handler 事件处理函数
         * @param option 配置
         * @example
         * // 监听a.xx元素的移入或移出
         * DOMUtils.hover(document.querySelector("a.xx"),()=>{
         *   console.log("移入/移除");
         * })
         * DOMUtils.hover("a.xx",()=>{
         *   console.log("移入/移除");
         * })
         */
        hover(element, handler, option) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            DOMUtilsContext.on(element, "mouseenter", null, handler, option);
            DOMUtilsContext.on(element, "mouseleave", null, handler, option);
        }
        /**
         * 当按键松开时触发事件
         * keydown - > keypress - > keyup
         * @param target 当前元素
         * @param handler 事件处理函数
         * @param option 配置
         * @example
         * // 监听a.xx元素的按键松开
         * DOMUtils.keyup(document.querySelector("a.xx"),()=>{
         *   console.log("按键松开");
         * })
         * DOMUtils.keyup("a.xx",()=>{
         *   console.log("按键松开");
         * })
         */
        keyup(target, handler, option) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = PopsCore.document.querySelector(target);
            }
            DOMUtilsContext.on(target, "keyup", null, handler, option);
        }
        /**
         * 当按键按下时触发事件
         * keydown - > keypress - > keyup
         * @param target 目标
         * @param handler 事件处理函数
         * @param option 配置
         * @example
         * // 监听a.xx元素的按键按下
         * DOMUtils.keydown(document.querySelector("a.xx"),()=>{
         *   console.log("按键按下");
         * })
         * DOMUtils.keydown("a.xx",()=>{
         *   console.log("按键按下");
         * })
         */
        keydown(target, handler, option) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = PopsCore.document.querySelector(target);
            }
            DOMUtilsContext.on(target, "keydown", null, handler, option);
        }
        /**
         * 当按键按下时触发事件
         * keydown - > keypress - > keyup
         * @param target 目标
         * @param handler 事件处理函数
         * @param option 配置
         * @example
         * // 监听a.xx元素的按键按下
         * DOMUtils.keypress(document.querySelector("a.xx"),()=>{
         *   console.log("按键按下");
         * })
         * DOMUtils.keypress("a.xx",()=>{
         *   console.log("按键按下");
         * })
         */
        keypress(target, handler, option) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = PopsCore.document.querySelector(target);
            }
            DOMUtilsContext.on(target, "keypress", null, handler, option);
        }
        preventEvent(element, eventNameList = [], capture) {
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
            }
            else {
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
        }
    }
    class PopsDOMUtils extends PopsDOMUtilsEvent {
        /** 获取 animationend 在各个浏览器的兼容名 */
        getAnimationEndNameList() {
            return [
                "webkitAnimationEnd",
                "mozAnimationEnd",
                "MSAnimationEnd",
                "oanimationend",
                "animationend",
            ];
        }
        /** 获取 transitionend 在各个浏览器的兼容名 */
        getTransitionEndNameList() {
            return [
                "webkitTransitionEnd",
                "mozTransitionEnd",
                "MSTransitionEnd",
                "otransitionend",
                "transitionend",
            ];
        }
        /**
         * 实现jQuery中的$().offset();
         * @param {HTMLElement} element
         * @returns
         */
        offset(element) {
            let rect = element.getBoundingClientRect();
            let win = element.ownerDocument.defaultView;
            let resultRect = new DOMRect(parseFloat((rect.left + (win?.pageXOffset || 0)).toString()), parseFloat((rect.top + (win?.pageYOffset || 0)).toString()), rect.width, rect.height);
            return resultRect;
        }
        width(element, isShow = false) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (popsUtils.isWin(element)) {
                return PopsCore.window.document.documentElement.clientWidth;
            }
            if (element.nodeType === 9) {
                /* Document文档节点 */
                element = element;
                return Math.max(element.body.scrollWidth, element.documentElement.scrollWidth, element.body.offsetWidth, element.documentElement.offsetWidth, element.documentElement.clientWidth);
            }
            if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
                /* 已显示 */
                /* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */
                element = element;
                /* 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width */
                if (parseFloat(popsDOMUtils.getStyleValue(element, "width").toString()) > 0) {
                    return parseFloat(popsDOMUtils.getStyleValue(element, "width").toString());
                }
                /* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetWidth来进行计算 */
                if (element.offsetWidth > 0) {
                    let borderLeftWidth = popsDOMUtils.getStyleValue(element, "borderLeftWidth");
                    let borderRightWidth = popsDOMUtils.getStyleValue(element, "borderRightWidth");
                    let paddingLeft = popsDOMUtils.getStyleValue(element, "paddingLeft");
                    let paddingRight = popsDOMUtils.getStyleValue(element, "paddingRight");
                    let backHeight = parseFloat(element.offsetWidth.toString()) -
                        parseFloat(borderLeftWidth.toString()) -
                        parseFloat(borderRightWidth.toString()) -
                        parseFloat(paddingLeft.toString()) -
                        parseFloat(paddingRight.toString());
                    return parseFloat(backHeight.toString());
                }
                return 0;
            }
            else {
                /* 未显示 */
                element = element;
                let { recovery } = popsDOMUtils.showElement(element);
                let width = DOMUtilsContext.width(element, true);
                recovery();
                return width;
            }
        }
        height(element, isShow = false) {
            let DOMUtilsContext = this;
            if (popsUtils.isWin(element)) {
                return PopsCore.window.document.documentElement.clientHeight;
            }
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (element.nodeType === 9) {
                element = element;
                /* Document文档节点 */
                return Math.max(element.body.scrollHeight, element.documentElement.scrollHeight, element.body.offsetHeight, element.documentElement.offsetHeight, element.documentElement.clientHeight);
            }
            if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
                element = element;
                /* 已显示 */
                /* 从style中获取对应的高度，因为可能使用了class定义了width !important */
                /* 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height */
                if (parseFloat(popsDOMUtils.getStyleValue(element, "height").toString()) > 0) {
                    return parseFloat(popsDOMUtils.getStyleValue(element, "height").toString());
                }
                /* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetHeight来进行计算 */
                if (element.offsetHeight > 0) {
                    let borderTopWidth = popsDOMUtils.getStyleValue(element, "borderTopWidth");
                    let borderBottomWidth = popsDOMUtils.getStyleValue(element, "borderBottomWidth");
                    let paddingTop = popsDOMUtils.getStyleValue(element, "paddingTop");
                    let paddingBottom = popsDOMUtils.getStyleValue(element, "paddingBottom");
                    let backHeight = parseFloat(element.offsetHeight.toString()) -
                        parseFloat(borderTopWidth.toString()) -
                        parseFloat(borderBottomWidth.toString()) -
                        parseFloat(paddingTop.toString()) -
                        parseFloat(paddingBottom.toString());
                    return parseFloat(backHeight.toString());
                }
                return 0;
            }
            else {
                /* 未显示 */
                element = element;
                let { recovery } = popsDOMUtils.showElement(element);
                let height = DOMUtilsContext.height(element, true);
                recovery();
                return height;
            }
        }
        outerWidth(element, isShow = false) {
            let DOMUtilsContext = this;
            if (popsUtils.isWin(element)) {
                return PopsCore.window.innerWidth;
            }
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            element = element;
            if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
                let style = getComputedStyle(element, null);
                let marginLeft = popsDOMUtils.getStyleValue(style, "marginLeft");
                let marginRight = popsDOMUtils.getStyleValue(style, "marginRight");
                return element.offsetWidth + marginLeft + marginRight;
            }
            else {
                let { recovery } = popsDOMUtils.showElement(element);
                let outerWidth = DOMUtilsContext.outerWidth(element, true);
                recovery();
                return outerWidth;
            }
        }
        outerHeight(element, isShow = false) {
            let DOMUtilsContext = this;
            if (popsUtils.isWin(element)) {
                return PopsCore.window.innerHeight;
            }
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                // @ts-ignore
                return;
            }
            element = element;
            if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
                let style = getComputedStyle(element, null);
                let marginTop = popsDOMUtils.getStyleValue(style, "marginTop");
                let marginBottom = popsDOMUtils.getStyleValue(style, "marginBottom");
                return element.offsetHeight + marginTop + marginBottom;
            }
            else {
                let { recovery } = popsDOMUtils.showElement(element);
                let outerHeight = DOMUtilsContext.outerHeight(element, true);
                recovery();
                return outerHeight;
            }
        }
        /**
         * 添加className
         * @param element 目标元素
         * @param className className属性
         */
        addClassName(element, className) {
            if (typeof className !== "string") {
                return;
            }
            if (className.trim() === "") {
                return;
            }
            element.classList.add(className);
        }
        /**
         * 删除className
         * @param element 目标元素
         * @param className className属性
         */
        removeClassName(element, className) {
            if (typeof className !== "string") {
                return;
            }
            if (className.trim() === "") {
                return;
            }
            element.classList.remove(className);
        }
        /**
         * 判断元素是否包含某个className
         * @param element 目标元素
         * @param className className属性
         */
        containsClassName(element, className) {
            if (typeof className !== "string") {
                return false;
            }
            if (className.trim() === "") {
                return false;
            }
            return element.classList.contains(className);
        }
        css(element, property, value) {
            /**
             * 把纯数字没有px的加上
             */
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
                if (typeof propertyValue === "string" &&
                    allowAddPixe.includes(propertyName) &&
                    propertyValue.match(/[0-9]$/gi)) {
                    propertyValue = propertyValue + "px";
                }
                return propertyValue;
            }
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (typeof property === "string") {
                if (value == null) {
                    return getComputedStyle(element).getPropertyValue(property);
                }
                else {
                    if (value === "string" && value.includes("!important")) {
                        element.style.setProperty(property, value, "important");
                    }
                    else {
                        value = handlePixe(property, value);
                        element.style.setProperty(property, value);
                    }
                }
            }
            else if (typeof property === "object") {
                for (let prop in property) {
                    if (typeof property[prop] === "string" &&
                        property[prop].includes("!important")) {
                        element.style.setProperty(prop, property[prop], "important");
                    }
                    else {
                        property[prop] = handlePixe(prop, property[prop]);
                        element.style.setProperty(prop, property[prop]);
                    }
                }
            }
        }
        /**
         * 创建元素
         * @param tagName 标签名
         * @param property 属性
         * @param attributes 元素上的自定义属性
         * @example
         * // 创建一个DIV元素，且属性class为xxx
         * DOMUtils.createElement("div",undefined,{ class:"xxx" });
         * > <div class="xxx"></div>
         * @example
         * // 创建一个DIV元素
         * DOMUtils.createElement("div");
         * > <div></div>
         * @example
         * // 创建一个DIV元素
         * DOMUtils.createElement("div","测试");
         * > <div>测试</div>
         */
        createElement(
        /** 元素名 */
        tagName, 
        /** 属性 */
        property, 
        /** 自定义属性 */
        attributes) {
            let tempElement = PopsCore.document.createElement(tagName);
            if (typeof property === "string") {
                tempElement.innerHTML = property;
                return tempElement;
            }
            if (property == null) {
                property = {};
            }
            if (attributes == null) {
                attributes = {};
            }
            Object.keys(property).forEach((key) => {
                let value = property[key];
                tempElement[key] = value;
            });
            Object.keys(attributes).forEach((key) => {
                let value = attributes[key];
                if (typeof value === "object") {
                    /* object转字符串 */
                    value = JSON.stringify(value);
                }
                else if (typeof value === "function") {
                    /* function转字符串 */
                    value = value.toString();
                }
                tempElement.setAttribute(key, value);
            });
            return tempElement;
        }
        /**
         * 获取文字的位置信息
         * @param input 输入框
         * @param selectionStart 起始位置
         * @param selectionEnd 结束位置
         * @param debug 是否是调试模式
         * + true 不删除临时节点元素
         * + false 删除临时节点元素
         */
        getTextBoundingRect(input, selectionStart, selectionEnd, debug) {
            // Basic parameter validation
            if (!input || !("value" in input))
                return input;
            if (typeof selectionStart == "string")
                selectionStart = parseFloat(selectionStart);
            if (typeof selectionStart != "number" || isNaN(selectionStart)) {
                selectionStart = 0;
            }
            if (selectionStart < 0)
                selectionStart = 0;
            else
                selectionStart = Math.min(input.value.length, selectionStart);
            if (typeof selectionEnd == "string")
                selectionEnd = parseFloat(selectionEnd);
            if (typeof selectionEnd != "number" ||
                isNaN(selectionEnd) ||
                selectionEnd < selectionStart) {
                selectionEnd = selectionStart;
            }
            if (selectionEnd < 0)
                selectionEnd = 0;
            else
                selectionEnd = Math.min(input.value.length, selectionEnd);
            // If available (thus IE), use the createTextRange method
            if (typeof input.createTextRange == "function") {
                var range = input.createTextRange();
                range.collapse(true);
                range.moveStart("character", selectionStart);
                range.moveEnd("character", selectionEnd - selectionStart);
                return range.getBoundingClientRect();
            }
            // createTextRange is not supported, create a fake text range
            var offset = getInputOffset(), topPos = offset.top, leftPos = offset.left, width = getInputCSS("width", true), height = getInputCSS("height", true);
            // Styles to simulate a node in an input field
            var cssDefaultStyles = "white-space:pre;padding:0;margin:0;", listOfModifiers = [
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
            var text = input.value || "G", textLen = text.length, fakeClone = document.createElement("div");
            if (selectionStart > 0)
                appendPart(0, selectionStart);
            var fakeRange = appendPart(selectionStart, selectionEnd);
            if (textLen > selectionEnd)
                appendPart(selectionEnd, textLen);
            // Styles to inherit the font styles of the element
            fakeClone.style.cssText = cssDefaultStyles;
            // Styles to position the text node at the desired position
            fakeClone.style.position = "absolute";
            fakeClone.style.top = topPos + "px";
            fakeClone.style.left = leftPos + "px";
            fakeClone.style.width = width + "px";
            fakeClone.style.height = height + "px";
            PopsCore.document.body.appendChild(fakeClone);
            var returnValue = fakeRange.getBoundingClientRect(); //Get rect
            if (!debug)
                fakeClone.parentNode.removeChild(fakeClone); //Remove temp
            return returnValue;
            // Local functions for readability of the previous code
            /**
             *
             * @param start
             * @param end
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
                var body = document.body, win = document.defaultView, docElem = document.documentElement, box = document.createElement("div");
                box.style.paddingLeft = box.style.width = "1px";
                body.appendChild(box);
                var isBoxModel = box.offsetWidth == 2;
                body.removeChild(box);
                // @ts-ignore
                box = input.getBoundingClientRect();
                var clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, scrollTop = 
                // @ts-ignore
                win.pageYOffset ||
                    (isBoxModel && docElem.scrollTop) ||
                    body.scrollTop, scrollLeft = 
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
             * @param prop
             * @param isnumber
             * @returns
             */
            function getInputCSS(prop, isnumber) {
                var val = PopsCore.document
                    .defaultView.getComputedStyle(input, null)
                    .getPropertyValue(prop);
                // @ts-ignore
                return isnumber ? parseFloat(val) : val;
            }
        }
        /**
         * 使用className来隐藏元素
         * @param ele
         * @param isImportant 是否使用!important
         */
        cssHide(ele, isImportant = false) {
            if (ele == null) {
                return;
            }
            if (isImportant) {
                ele.classList.add("pops-hide-important");
            }
            else {
                ele.classList.add("pops-hide");
            }
        }
        /**
         * cssHide的反向使用
         * @param ele
         */
        cssShow(ele) {
            if (ele == null) {
                return;
            }
            ele.classList.remove("pops-hide-important");
            ele.classList.remove("pops-hide");
        }
        parseHTML(html, useParser = false, isComplete = false) {
            function parseHTMLByDOMParser() {
                let parser = new DOMParser();
                if (isComplete) {
                    return parser.parseFromString(html, "text/html");
                }
                else {
                    return parser.parseFromString(html, "text/html").body.firstChild;
                }
            }
            function parseHTMLByCreateDom() {
                let tempDIV = PopsCore.document.createElement("div");
                tempDIV.innerHTML = html;
                if (isComplete) {
                    return tempDIV;
                }
                else {
                    return tempDIV.firstChild;
                }
            }
            if (useParser) {
                return parseHTMLByDOMParser();
            }
            else {
                return parseHTMLByCreateDom();
            }
        }
        /**
         * 函数在元素内部末尾添加子元素或HTML字符串
         * @param element 目标元素
         * @param content 子元素或HTML字符串
         * @example
         * // 元素a.xx的内部末尾添加一个元素
         * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
         * DOMUtils.append("a.xx","'<b class="xx"></b>")
         * */
        append(element, content) {
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            function elementAppendChild(ele, text) {
                if (typeof content === "string") {
                    ele.insertAdjacentHTML("beforeend", text);
                }
                else {
                    ele.appendChild(text);
                }
            }
            if (Array.isArray(content) || content instanceof NodeList) {
                /* 数组 */
                let fragment = PopsCore.document.createDocumentFragment();
                content.forEach((ele) => {
                    if (typeof ele === "string") {
                        ele = this.parseHTML(ele, true, false);
                    }
                    fragment.appendChild(ele);
                });
                element.appendChild(fragment);
            }
            else {
                elementAppendChild(element, content);
            }
        }
        /**
         * 把元素标签添加到head内
         */
        appendHead($ele) {
            if (PopsCore.document.head) {
                PopsCore.document.head.appendChild($ele);
            }
            else {
                PopsCore.document.documentElement.appendChild($ele);
            }
        }
        /**
         * 把元素添加进body内
         * @param $ele
         */
        appendBody($ele) {
            if (PopsCore.document.body) {
                PopsCore.document.body.appendChild($ele);
            }
            else {
                PopsCore.document.documentElement.appendChild($ele);
            }
        }
        /**
         * 判断元素是否已显示或已连接
         * @param element
         */
        isShow(element) {
            return Boolean(element.getClientRects().length);
        }
        /**
         * 用于显示元素并获取它的高度宽度等其它属性
         * @param element
         */
        showElement(element) {
            let dupNode = element.cloneNode(true);
            dupNode.setAttribute("style", "visibility: hidden !important;display:block !important;");
            PopsCore.document.documentElement.appendChild(dupNode);
            return {
                /**
                 * 恢复修改的style
                 */
                recovery() {
                    dupNode.remove();
                },
            };
        }
        /**
         * 获取元素上的Float格式的属性px
         * @param element
         * @param styleName style名
         */
        getStyleValue(element, styleName) {
            let view = null;
            let styles = null;
            if (element instanceof CSSStyleDeclaration) {
                /* 直接就获取了style属性 */
                styles = element;
            }
            else {
                view = element.ownerDocument.defaultView;
                if (!view || !view.opener) {
                    view = window;
                }
                styles = view.getComputedStyle(element);
            }
            let value = parseFloat(styles[styleName]);
            if (isNaN(value)) {
                return 0;
            }
            else {
                return value;
            }
        }
    }
    const popsDOMUtils = new PopsDOMUtils();

    const PopsInstanceUtils = {
        /**
         * 获取pops所有弹窗中的最大的z-index
         * @param deviation
         */
        getPopsMaxZIndex(deviation = 1) {
            deviation = Number.isNaN(deviation) ? 1 : deviation;
            // 最大值2147483647
            let maxZIndex = Math.pow(2, 31) - 1;
            // 当前页面最大的z-index
            let zIndex = 0;
            // 当前的最大z-index的元素，调试使用
            let maxZIndexNode = null;
            Object.keys(pops.config.layer).forEach((layerName) => {
                let layerList = pops.config.layer[layerName];
                for (let index = 0; index < layerList.length; index++) {
                    const layer = layerList[index];
                    let nodeStyle = window.getComputedStyle(layer.animElement);
                    /* 不对position为static和display为none的元素进行获取它们的z-index */
                    if (nodeStyle.position !== "static" && nodeStyle.display !== "none") {
                        let nodeZIndex = parseInt(nodeStyle.zIndex);
                        if (!isNaN(nodeZIndex)) {
                            if (nodeZIndex > zIndex) {
                                zIndex = nodeZIndex;
                                maxZIndexNode = layer.animElement;
                            }
                        }
                    }
                }
            });
            zIndex += deviation;
            // 用于比较的值2000000000，大于该值就取该值
            let maxZIndexCompare = 2 * Math.pow(10, 9);
            if (zIndex >= maxZIndexCompare) {
                // 最好不要超过最大值
                zIndex = maxZIndex;
            }
            return { zIndex: zIndex, animElement: maxZIndexNode };
        },
        /**
         * 获取CSS Rule
         * @param sheet
         * @returns
         */
        getKeyFrames(sheet) {
            let result = {};
            Object.keys(sheet.cssRules).forEach((key) => {
                if (sheet.cssRules[key].type === 7 &&
                    sheet.cssRules[key].name.startsWith("pops-anim-")) {
                    result[sheet.cssRules[key].name] = sheet.cssRules[key];
                }
            });
            return result;
        },
        /**
         * 删除配置中对应的对象
         * @param moreLayerConfigList 配置实例列表
         * @param  guid 唯一标识
         * @param isAll 是否全部删除
         */
        removeInstance(moreLayerConfigList, guid, isAll = false) {
            function removeItem(item) {
                item?.animElement?.remove();
                item?.popsElement?.remove();
                item?.maskElement?.remove();
                item?.$shadowContainer?.remove();
            }
            // [ layer[], layer[],...]
            moreLayerConfigList.forEach((layerConfigList) => {
                //  layer[]
                layerConfigList.forEach((layerConfigItem, index) => {
                    if (isAll || layerConfigItem["guid"] === guid) {
                        if (pops.config.animation.hasOwnProperty(layerConfigItem.animElement.getAttribute("anim"))) {
                            layerConfigItem.animElement.style.width = "100%";
                            layerConfigItem.animElement.style.height = "100%";
                            layerConfigItem.animElement.style["animation-name"] =
                                layerConfigItem.animElement.getAttribute("anim") + "-reverse";
                            if (pops.config.animation.hasOwnProperty(layerConfigItem.animElement.style["animation-name"])) {
                                popsDOMUtils.on(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), function () {
                                    removeItem(layerConfigItem);
                                }, {
                                    capture: true,
                                });
                            }
                            else {
                                removeItem(layerConfigItem);
                            }
                        }
                        else {
                            removeItem(layerConfigItem);
                        }
                        layerConfigList.splice(index, 1);
                    }
                });
            });
            return moreLayerConfigList;
        },
        /**
         * 隐藏
         * @param popsType
         * @param layerConfigList
         * @param guid
         * @param config
         * @param animElement
         * @param maskElement
         */
        hide(popsType, layerConfigList, guid, config, animElement, maskElement) {
            let popsElement = animElement.querySelector(".pops[type-value]");
            if (popsType === "drawer") {
                let drawerConfig = config;
                setTimeout(() => {
                    maskElement.style.setProperty("display", "none");
                    if (["top", "bottom"].includes(drawerConfig.direction)) {
                        popsElement.style.setProperty("height", "0");
                    }
                    else if (["left", "right"].includes(drawerConfig.direction)) {
                        popsElement.style.setProperty("width", "0");
                    }
                    else {
                        console.error("未知direction：", drawerConfig.direction);
                    }
                }, drawerConfig.closeDelay);
            }
            else {
                layerConfigList.forEach((layerConfigItem) => {
                    if (layerConfigItem.guid === guid) {
                        /* 存在动画 */
                        layerConfigItem.animElement.style.width = "100%";
                        layerConfigItem.animElement.style.height = "100%";
                        layerConfigItem.animElement.style["animation-name"] =
                            layerConfigItem.animElement.getAttribute("anim") + "-reverse";
                        if (pops.config.animation.hasOwnProperty(layerConfigItem.animElement.style["animation-name"])) {
                            function animationendCallBack() {
                                layerConfigItem.animElement.style.display = "none";
                                if (layerConfigItem.maskElement) {
                                    layerConfigItem.maskElement.style.display = "none";
                                }
                                popsDOMUtils.off(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                                    capture: true,
                                });
                            }
                            popsDOMUtils.on(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                                capture: true,
                            });
                        }
                        else {
                            layerConfigItem.animElement.style.display = "none";
                            if (layerConfigItem.maskElement) {
                                layerConfigItem.maskElement.style.display = "none";
                            }
                        }
                        return;
                    }
                });
            }
        },
        /**
         * 显示
         * @param popsType
         * @param layerConfigList
         * @param guid
         * @param config
         * @param animElement
         * @param maskElement
         */
        show(popsType, layerConfigList, guid, config, animElement, maskElement) {
            let popsElement = animElement.querySelector(".pops[type-value]");
            if (popsType === "drawer") {
                let drawerConfig = config;
                setTimeout(() => {
                    maskElement.style.setProperty("display", "");
                    let direction = drawerConfig.direction;
                    let size = drawerConfig.size.toString();
                    if (["top", "bottom"].includes(direction)) {
                        popsElement.style.setProperty("height", size);
                    }
                    else if (["left", "right"].includes(direction)) {
                        popsElement.style.setProperty("width", size);
                    }
                    else {
                        console.error("未知direction：", direction);
                    }
                }, drawerConfig.openDelay);
            }
            else {
                layerConfigList.forEach((layerConfigItem) => {
                    if (layerConfigItem.guid === guid) {
                        layerConfigItem.animElement.style.width = "";
                        layerConfigItem.animElement.style.height = "";
                        layerConfigItem.animElement.style["animation-name"] =
                            layerConfigItem
                                .animElement.getAttribute("anim")
                                .replace("-reverse", "");
                        if (pops.config.animation.hasOwnProperty(layerConfigItem.animElement.style["animation-name"])) {
                            layerConfigItem.animElement.style.display = "";
                            if (layerConfigItem.maskElement) {
                                layerConfigItem.maskElement.style.display = "";
                            }
                            function animationendCallBack() {
                                popsDOMUtils.off(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                                    capture: true,
                                });
                            }
                            popsDOMUtils.on(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                                capture: true,
                            });
                        }
                        else {
                            layerConfigItem.animElement.style.display = "";
                            if (layerConfigItem.maskElement) {
                                layerConfigItem.maskElement.style.display = "";
                            }
                        }
                    }
                    return;
                });
            }
        },
        /**
         * 关闭
         * @param popsType
         * @param layerConfigList
         * @param guid
         * @param config
         * @param animElement
         */
        close(popsType, layerConfigList, guid, config, animElement) {
            let popsElement = animElement.querySelector(".pops[type-value]");
            let drawerConfig = config;
            /**
             * 动画结束事件
             */
            function transitionendEvent() {
                function closeCallBack(event) {
                    if (event.propertyName !== "transform") {
                        return;
                    }
                    popsDOMUtils.off(popsElement, popsDOMUtils.getTransitionEndNameList(), void 0, closeCallBack);
                    PopsInstanceUtils.removeInstance([layerConfigList], guid);
                }
                /* 监听过渡结束 */
                popsDOMUtils.on(popsElement, popsDOMUtils.getTransitionEndNameList(), closeCallBack);
                let popsTransForm = getComputedStyle(popsElement).transform;
                if (popsTransForm !== "none") {
                    popsDOMUtils.trigger(popsElement, popsDOMUtils.getTransitionEndNameList(), void 0, true);
                    return;
                }
                if (["top"].includes(drawerConfig.direction)) {
                    popsElement.style.setProperty("transform", "translateY(-100%)");
                }
                else if (["bottom"].includes(drawerConfig.direction)) {
                    popsElement.style.setProperty("transform", "translateY(100%)");
                }
                else if (["left"].includes(drawerConfig.direction)) {
                    popsElement.style.setProperty("transform", "translateX(-100%)");
                }
                else if (["right"].includes(drawerConfig.direction)) {
                    popsElement.style.setProperty("transform", "translateX(100%)");
                }
                else {
                    console.error("未知direction：", drawerConfig.direction);
                }
            }
            if (popsType === "drawer") {
                setTimeout(() => {
                    transitionendEvent();
                }, drawerConfig.closeDelay);
            }
            else {
                PopsInstanceUtils.removeInstance([layerConfigList], guid);
            }
        },
        /**
         * 拖拽元素
         * 说明：
         * + 元素的position为absolute或者fixed
         * + 会为元素的
         * @param moveElement 需要拖拽的元素
         * @param options 配置
         */
        drag(moveElement, options) {
            options = Object.assign({
                limit: true,
                extraDistance: 3,
                container: PopsCore.globalThis,
            }, options);
            let isMove = false;
            /* 点击元素，left偏移 */
            let clickElementLeftOffset = 0;
            /* 点击元素，top偏移 */
            let clickElementTopOffset = 0;
            let AnyTouch = popsUtils.AnyTouch();
            let anyTouchElement = new AnyTouch(options.dragElement, {
                preventEvent(event) {
                    if (typeof options.preventEvent === "function") {
                        return options.preventEvent(event);
                    }
                    else {
                        return false;
                    }
                },
            });
            popsDOMUtils.css(options.dragElement, {
                cursor: "move",
            });
            /**
             * 获取移动元素的transform偏移
             */
            function getTransform(element) {
                let transform_left = 0;
                let transform_top = 0;
                let elementTransform = PopsCore.globalThis.getComputedStyle(element).transform;
                if (elementTransform !== "none" &&
                    elementTransform != null &&
                    elementTransform !== "") {
                    let elementTransformSplit = elementTransform
                        .match(/\((.+)\)/)?.[1]
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
            function getContainerWidthOrHeight(container) {
                container = container ?? globalThis;
                return {
                    width: popsDOMUtils.width(container),
                    height: popsDOMUtils.height(container),
                };
            }
            /**
             * 获取容器的最小left、top偏移
             */
            function getContainerTopOrLeft(container) {
                container = container ?? globalThis;
                if (popsUtils.isWin(container)) {
                    return {
                        left: 0,
                        top: 0,
                    };
                }
                else {
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
            let resumeMoveElementStyle = null;
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
                let currentMoveLeftOffset = event.x - clickElementLeftOffset + transformLeft;
                /** 当前移动的top偏移 */
                let currentMoveTopOffset = event.y - clickElementTopOffset + transformTop;
                /* 拖拽移动 */
                if (event.phase === "move") {
                    if (options.limit) {
                        /* 限制在容器内移动 */
                        /* left偏移最大值 */
                        let maxLeftOffset = getContainerWidthOrHeight(options.container).width -
                            popsDOMUtils.width(moveElement) +
                            transformLeft;
                        let { left: minLeftOffset, top: minTopOffset } = getContainerTopOrLeft(options.container);
                        /* top偏移的最大值 */
                        let maxTopOffset = getContainerWidthOrHeight(options.container).height -
                            popsDOMUtils.height(moveElement) +
                            transformTop;
                        if (currentMoveLeftOffset > maxLeftOffset) {
                            /* 不允许超过容器的最大宽度 */
                            currentMoveLeftOffset = maxLeftOffset;
                        }
                        if (currentMoveTopOffset > maxTopOffset) {
                            /* 不允许超过容器的最大高度 */
                            currentMoveTopOffset = maxTopOffset;
                        }
                        if (currentMoveLeftOffset - options.extraDistance * 2 <
                            minLeftOffset + transformLeft) {
                            /* 不允许left偏移小于容器最小值 */
                            currentMoveLeftOffset = minLeftOffset + transformLeft;
                            /* 最左边 +额外距离 */
                            currentMoveLeftOffset += options.extraDistance;
                        }
                        else {
                            /* 最右边 -额外距离 */
                            currentMoveLeftOffset -= options.extraDistance;
                        }
                        if (currentMoveTopOffset - options.extraDistance * 2 <
                            minTopOffset + transformTop) {
                            /* 不允许top偏移小于容器最小值 */
                            currentMoveTopOffset = minTopOffset + transformTop;
                            /* 最上面 +额外距离 */
                            currentMoveTopOffset += options.extraDistance;
                        }
                        else {
                            /* 最下面 -额外距离 */
                            currentMoveTopOffset -= options.extraDistance;
                        }
                    }
                    if (typeof options.moveCallBack === "function") {
                        options.moveCallBack(moveElement, currentMoveLeftOffset, currentMoveTopOffset);
                    }
                    popsDOMUtils.css(moveElement, {
                        left: currentMoveLeftOffset + "px",
                        top: currentMoveTopOffset + "px",
                    });
                }
                /* 停止拖拽 */
                if (event.phase === "end") {
                    isMove = false;
                    if (typeof resumeMoveElementStyle === "function") {
                        resumeMoveElementStyle();
                        resumeMoveElementStyle = null;
                    }
                    if (typeof options.endCallBack === "function") {
                        options.endCallBack(moveElement, currentMoveLeftOffset, currentMoveTopOffset);
                    }
                }
            });
            /* 因为会覆盖上面的点击事件，主动触发一下 */
            anyTouchElement.on(["click", "tap"], function (event) {
                event.changedPoints.forEach((item) => {
                    popsDOMUtils.trigger(item.target, "click", void 0, true);
                });
            });
        },
        /**
         * 排序数组
         * @param getBeforeValueFun
         * @param getAfterValueFun
         * @param sortByDesc 排序是否降序，默认降序
         */
        sortElementListByProperty(getBeforeValueFun, getAfterValueFun, sortByDesc = true) {
            if (typeof sortByDesc !== "boolean") {
                throw "参数 sortByDesc 必须为boolean类型";
            }
            if (getBeforeValueFun == null || getAfterValueFun == null) {
                throw "获取前面的值或后面的值的方法不能为空";
            }
            return function (after_obj, before_obj) {
                var beforeValue = getBeforeValueFun(before_obj); /*  前 */
                var afterValue = getAfterValueFun(after_obj); /* 后 */
                if (sortByDesc) {
                    if (afterValue > beforeValue) {
                        return -1;
                    }
                    else if (afterValue < beforeValue) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
                else {
                    if (afterValue < beforeValue) {
                        return -1;
                    }
                    else if (afterValue > beforeValue) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            };
        },
    };

    var indexCSS = "@charset \"utf-8\";\r\n* {\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\t-webkit-tap-highlight-color: transparent;\r\n\t/* 代替::-webkit-scrollbar */\r\n\tscrollbar-width: thin;\r\n}\r\n.pops {\r\n\t--pops-bg-opacity: 1;\r\n\t--pops-bd-opacity: 1;\r\n\t--pops-font-size: 16px;\r\n}\r\n.pops-mask {\r\n\t--pops-mask-bg-opacity: 0.4;\r\n}\r\n.pops {\r\n\tbackground-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n\tborder-radius: 4px;\r\n\tborder: 1px solid rgb(235, 238, 245, var(--pops-bd-opacity));\r\n\tfont-size: var(--pops-font-size);\r\n\tbox-shadow: 0 0 12px rgba(0, 0, 0, 0.12);\r\n\tbox-sizing: border-box;\r\n\toverflow: hidden;\r\n\ttransition: all 0.35s;\r\n}\r\n.pops-anim {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.pops-anim[anim=\"\"] {\r\n\ttop: unset;\r\n\tright: unset;\r\n\tbottom: unset;\r\n\tleft: unset;\r\n\twidth: unset;\r\n\theight: unset;\r\n\ttransition: none;\r\n}\r\n/* 底部图标动画和样式 */\r\n.pops i.pops-bottom-icon[is-loading=\"true\"] {\r\n\tanimation: rotating 2s linear infinite;\r\n}\r\n.pops i.pops-bottom-icon {\r\n\theight: 1em;\r\n\twidth: 1em;\r\n\tline-height: 1em;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tfill: currentColor;\r\n\tcolor: inherit;\r\n\tfont-size: inherit;\r\n}\r\n\r\n/* 遮罩层样式 */\r\n.pops-mask {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder: 0;\r\n\tborder-radius: 0;\r\n\tbackground-color: rgba(0, 0, 0, var(--pops-mask-bg-opacity));\r\n\tbox-shadow: none;\r\n\ttransition: none;\r\n}\r\n\r\n.pops-header-controls button.pops-header-control[type][data-header] {\r\n\tfloat: right;\r\n\tmargin: 0 0;\r\n\toutline: 0;\r\n\tborder: 0;\r\n\tborder-color: rgb(136, 136, 136, var(--pops-bd-opacity));\r\n\tbackground-color: transparent;\r\n\tcolor: #888;\r\n\tcursor: pointer;\r\n}\r\n.pops-header-controls button.pops-header-control[type=\"max\"],\r\n.pops-header-controls button.pops-header-control[type=\"mise\"],\r\n.pops-header-controls button.pops-header-control[type=\"min\"] {\r\n\tposition: relative;\r\n\tfloat: right;\r\n\tmargin: 0 2px;\r\n\toutline: 0 !important;\r\n\tborder: 0;\r\n\tborder-color: rgb(136, 136, 136, var(--pops-bd-opacity));\r\n\tbackground-color: transparent;\r\n\tcolor: rgb(136, 136, 136);\r\n\tcursor: pointer;\r\n\ttransition: all 0.3s ease-in-out;\r\n}\r\nbutton.pops-header-control i {\r\n\tcolor: rgb(144, 147, 153);\r\n\tfont-size: inherit;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tfill: currentColor;\r\n}\r\nbutton.pops-header-control svg {\r\n\theight: 1.25em;\r\n\twidth: 1.25em;\r\n}\r\nbutton.pops-header-control {\r\n\tright: 15px;\r\n\tpadding: 0;\r\n\tborder: none;\r\n\toutline: 0;\r\n\tbackground: 0 0;\r\n\tcursor: pointer;\r\n\tposition: unset;\r\n\tline-height: 1.15;\r\n}\r\nbutton.pops-header-control i:hover {\r\n\tcolor: rgb(64, 158, 255);\r\n}\r\n.pops-header-controls[data-margin] button.pops-header-control {\r\n\tmargin: 0 6px;\r\n}\r\n.pops[type-value] .pops-header-controls {\r\n\tdisplay: flex;\r\n}\r\n";

    var ninePalaceGridPositionCSS = ".pops[position=\"top_left\"] {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\n.pops[position=\"top\"] {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n}\r\n.pops[position=\"top_right\"] {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tright: 0;\r\n}\r\n.pops[position=\"center_left\"] {\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\ttransform: translateY(-50%);\r\n}\r\n.pops[position=\"center\"] {\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n}\r\n.pops[position=\"center_right\"] {\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tright: 0;\r\n\ttransform: translateY(-50%);\r\n}\r\n.pops[position=\"bottom_left\"] {\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n}\r\n.pops[position=\"bottom\"] {\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, 0);\r\n}\r\n.pops[position=\"bottom_right\"] {\r\n\tposition: fixed;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n";

    var scrollbarCSS = "/* firefox上暂不支持::-webkit-scrollbar */\r\n.pops ::-webkit-scrollbar {\r\n\twidth: 6px;\r\n\theight: 0;\r\n}\r\n\r\n.pops ::-webkit-scrollbar-track {\r\n\twidth: 0;\r\n}\r\n.pops ::-webkit-scrollbar-thumb:hover {\r\n\tbackground: rgb(178, 178, 178, var(--pops-bg-opacity));\r\n}\r\n.pops ::-webkit-scrollbar-thumb {\r\n\tmin-height: 28px;\r\n\tborder-radius: 2em;\r\n\tbackground: rgb(204, 204, 204, var(--pops-bg-opacity));\r\n\tbackground-clip: padding-box;\r\n}\r\n";

    var buttonCSS = ".pops {\r\n\t--button-font-size: 14px;\r\n\t--button-height: 32px;\r\n\t--button-color: rgb(51, 51, 51);\r\n\t--button-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));\r\n\t--button-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));\r\n\t--button-margin-top: 0px;\r\n\t--button-margin-bottom: 0px;\r\n\t--button-margin-left: 5px;\r\n\t--button-margin-right: 5px;\r\n\t--button-padding-top: 6px;\r\n\t--button-padding-bottom: 6px;\r\n\t--button-padding-left: 12px;\r\n\t--button-padding-right: 12px;\r\n\t--button-radius: 4px;\r\n\r\n\t--container-title-height: 55px;\r\n\t--container-bottom-btn-height: 55px;\r\n}\r\n.pops[data-bottom-btn=\"false\"] {\r\n\t--container-bottom-btn-height: 0px;\r\n}\r\n.pops button {\r\n\twhite-space: nowrap;\r\n\tfloat: right;\r\n\tdisplay: inline-block;\r\n\tmargin: var(--button-margin-top) var(--button-margin-right)\r\n\t\tvar(--button-margin-bottom) var(--button-margin-left);\r\n\tpadding: var(--button-padding-top) var(--button-padding-right)\r\n\t\tvar(--button-padding-bottom) var(--button-padding-left);\r\n\toutline: 0;\r\n}\r\n.pops button[data-has-icon=\"false\"] .pops-bottom-icon {\r\n\tdisplay: none;\r\n}\r\n.pops button {\r\n\tborder-radius: var(--button-radius);\r\n\tbox-shadow: none;\r\n\tfont-weight: 400;\r\n\tfont-size: var(--button-font-size);\r\n\tcursor: pointer;\r\n\ttransition: all 0.3s ease-in-out;\r\n}\r\n.pops button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\theight: var(--button-height);\r\n\tline-height: 1;\r\n\tbox-sizing: border-box;\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tborder: 1px solid var(--button-bd-color);\r\n}\r\n.pops button {\r\n\tcolor: var(--button-color);\r\n\tborder-color: var(--button-bd-color);\r\n\tbackground-color: var(--button-bg-color);\r\n}\r\n.pops button:active {\r\n\tcolor: var(--button-color);\r\n\tborder-color: var(--button-bd-color);\r\n\tbackground-color: var(--button-bg-color);\r\n\toutline: 0;\r\n}\r\n.pops button:hover {\r\n\tcolor: var(--button-color);\r\n\tborder-color: var(--button-bd-color);\r\n\tbackground-color: var(--button-bg-color);\r\n}\r\n.pops button:focus-visible {\r\n\tcolor: var(--button-color);\r\n\tborder-color: var(--button-bd-color);\r\n\tbackground-color: var(--button-bg-color);\r\n}\r\n.pops button:disabled {\r\n\tcursor: not-allowed;\r\n\tcolor: var(--button-color);\r\n\tborder-color: var(--button-bd-color);\r\n\tbackground-color: var(--button-bg-color);\r\n}\r\n.pops button.pops-button-large {\r\n\t--button-height: 32px;\r\n\t--button-padding-top: 12px;\r\n\t--button-padding-bottom: 12px;\r\n\t--button-padding-left: 19px;\r\n\t--button-padding-right: 19px;\r\n\t--button-font-size: 14px;\r\n\t--button-border-radius: 4px;\r\n}\r\n\r\n.pops button.pops-button-small {\r\n\t--button-height: 24px;\r\n\t--button-padding-top: 5px;\r\n\t--button-padding-bottom: 5px;\r\n\t--button-padding-left: 11px;\r\n\t--button-padding-right: 11px;\r\n\t--button-font-size: 12px;\r\n\t--button-border-radius: 4px;\r\n}\r\n.pops-panel-button-no-icon .pops-panel-button_inner i {\r\n\tdisplay: none;\r\n}\r\n.pops-panel-button-right-icon {\r\n}\r\n.pops-panel-button-right-icon .pops-panel-button_inner {\r\n\tflex-direction: row-reverse;\r\n}\r\n.pops-panel-button-right-icon .pops-panel-button_inner i {\r\n}\r\n.pops-panel-button .pops-panel-button_inner i:has(svg),\r\n.pops-panel-button-right-icon .pops-panel-button-text {\r\n\tmargin-right: 6px;\r\n}\r\n\r\n.pops button[type=\"default\"] {\r\n\t--button-color: #333333;\r\n\t--button-bd-color: #dcdfe6;\r\n\t--button-bg-color: #ffffff;\r\n}\r\n.pops button[type=\"default\"]:active {\r\n\t--button-color: #409eff;\r\n\t--button-bd-color: #409eff;\r\n\t--button-bg-color: #ecf5ff;\r\n}\r\n.pops button[type=\"default\"]:hover {\r\n\t--button-color: #409eff;\r\n\t--button-bd-color: #c6e2ff;\r\n\t--button-bg-color: #ecf5ff;\r\n}\r\n.pops button[type=\"default\"]:focus-visible {\r\n\toutline: 2px solid #a0cfff;\r\n\toutline-offset: 1px;\r\n}\r\n.pops button[type=\"default\"]:disabled {\r\n\t--button-color: #a8abb2;\r\n\t--button-bd-color: #fff;\r\n\t--button-bg-color: #e4e7ed;\r\n}\r\n\r\n.pops button[type=\"primary\"] {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #409eff;\r\n\t--button-bg-color: #409eff;\r\n}\r\n.pops button[type=\"primary\"]:active {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #337ecc;\r\n\t--button-bg-color: #337ecc;\r\n}\r\n.pops button[type=\"primary\"]:hover {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #79bbff;\r\n\t--button-bg-color: #79bbff;\r\n}\r\n.pops button[type=\"primary\"]:focus-visible {\r\n\toutline: 2px solid #a0cfff;\r\n\toutline-offset: 1px;\r\n}\r\n.pops button[type=\"primary\"]:disabled {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #a0cfff;\r\n\t--button-bg-color: #a0cfff;\r\n}\r\n\r\n.pops button[type=\"success\"] {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #4cae4c;\r\n\t--button-bg-color: #5cb85c;\r\n}\r\n.pops button[type=\"success\"]:active {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #529b2e;\r\n\t--button-bg-color: #529b2e;\r\n}\r\n.pops button[type=\"success\"]:hover {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #95d475;\r\n\t--button-bg-color: #95d475;\r\n}\r\n.pops button[type=\"success\"]:focus-visible {\r\n\toutline: 2px solid #b3e19d;\r\n\toutline-offset: 1px;\r\n}\r\n.pops button[type=\"success\"]:disabled {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #b3e19d;\r\n\t--button-bg-color: #b3e19d;\r\n}\r\n\r\n.pops button[type=\"info\"] {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #909399;\r\n\t--button-bg-color: #909399;\r\n}\r\n.pops button[type=\"info\"]:active {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #73767a;\r\n\t--button-bg-color: #73767a;\r\n}\r\n.pops button[type=\"info\"]:hover {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #b1b3b8;\r\n\t--button-bg-color: #b1b3b8;\r\n}\r\n.pops button[type=\"info\"]:focus-visible {\r\n\toutline: 2px solid #c8c9cc;\r\n\toutline-offset: 1px;\r\n}\r\n.pops button[type=\"info\"]:disabled {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #c8c9cc;\r\n\t--button-bg-color: #c8c9cc;\r\n}\r\n\r\n.pops button[type=\"warning\"] {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #e6a23c;\r\n\t--button-bg-color: #e6a23c;\r\n}\r\n.pops button[type=\"warning\"]:active {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #b88230;\r\n\t--button-bg-color: #b88230;\r\n}\r\n.pops button[type=\"warning\"]:hover {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #eebe77;\r\n\t--button-bg-color: #eebe77;\r\n}\r\n.pops button[type=\"warning\"]:focus-visible {\r\n\toutline: 2px solid #f3d19e;\r\n\toutline-offset: 1px;\r\n}\r\n.pops button[type=\"warning\"]:disabled {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #f3d19e;\r\n\t--button-bg-color: #f3d19e;\r\n}\r\n\r\n.pops button[type=\"danger\"] {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #f56c6c;\r\n\t--button-bg-color: #f56c6c;\r\n}\r\n.pops button[type=\"danger\"]:active {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #c45656;\r\n\t--button-bg-color: #c45656;\r\n}\r\n.pops button[type=\"danger\"]:hover {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #f89898;\r\n\t--button-bg-color: #f89898;\r\n}\r\n.pops button[type=\"danger\"]:focus-visible {\r\n\toutline: 2px solid #fab6b6;\r\n\toutline-offset: 1px;\r\n}\r\n.pops button[type=\"danger\"]:disabled {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #fab6b6;\r\n\t--button-bg-color: #fab6b6;\r\n}\r\n\r\n.pops button[type=\"xiaomi-primary\"] {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #ff5c00;\r\n\t--button-bg-color: #ff5c00;\r\n}\r\n.pops button[type=\"xiaomi-primary\"]:active {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #da4f00;\r\n\t--button-bg-color: #da4f00;\r\n}\r\n.pops button[type=\"xiaomi-primary\"]:hover {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #ff7e29;\r\n\t--button-bg-color: #ff7e29;\r\n}\r\n.pops button[type=\"xiaomi-primary\"]:focus-visible {\r\n\toutline: 2px solid #fab6b6;\r\n\toutline-offset: 1px;\r\n}\r\n.pops button[type=\"xiaomi-primary\"]:disabled {\r\n\t--button-color: #ffffff;\r\n\t--button-bd-color: #fad5b6;\r\n\t--button-bg-color: #fad5b6;\r\n}\r\n";

    var commonCSS = ".pops-flex-items-center {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.pops-flex-y-center {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n.pops-flex-x-center {\r\n\tdisplay: flex;\r\n\talign-content: center;\r\n}\r\n.pops-hide {\r\n\tdisplay: none;\r\n}\r\n.pops-hide-important {\r\n\tdisplay: none !important;\r\n}\r\n.pops-no-border {\r\n\tborder: 0;\r\n}\r\n.pops-no-border-important {\r\n\tborder: 0;\r\n}\r\n";

    var animCSS = "@keyframes rotating {\r\n\t0% {\r\n\t\ttransform: rotate(0);\r\n\t}\r\n\tto {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n@keyframes iframeLoadingChange_85 {\r\n\t0% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r\n\t}\r\n\t20% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));\r\n\t}\r\n\t40% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));\r\n\t}\r\n\t60% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));\r\n\t}\r\n\t80% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));\r\n\t}\r\n\t100% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));\r\n\t}\r\n\tfrom {\r\n\t\twidth: 75%;\r\n\t}\r\n\tto {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n@keyframes iframeLoadingChange {\r\n\t0% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r\n\t}\r\n\t20% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));\r\n\t}\r\n\t40% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));\r\n\t}\r\n\t60% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));\r\n\t}\r\n\t80% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));\r\n\t}\r\n\t100% {\r\n\t\tbackground: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));\r\n\t}\r\n\tfrom {\r\n\t\twidth: 0;\r\n\t}\r\n\tto {\r\n\t\twidth: 75%;\r\n\t}\r\n}\r\n@keyframes pops-anim-wait-rotate {\r\n\tform {\r\n\t\ttransform: rotate(0);\r\n\t}\r\n\tto {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n@keyframes pops-anim-spread {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: scaleX(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: scaleX(1);\r\n\t}\r\n}\r\n@keyframes pops-anim-shake {\r\n\t0%,\r\n\t100% {\r\n\t\ttransform: translateX(0);\r\n\t}\r\n\t10%,\r\n\t30%,\r\n\t50%,\r\n\t70%,\r\n\t90% {\r\n\t\ttransform: translateX(-10px);\r\n\t}\r\n\t20%,\r\n\t40%,\r\n\t60%,\r\n\t80% {\r\n\t\ttransform: translateX(10px);\r\n\t}\r\n}\r\n@keyframes pops-anim-rolling-left {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateX(-100%) rotate(-120deg);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateX(0) rotate(0);\r\n\t}\r\n}\r\n@keyframes pops-anim-rolling-right {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateX(100%) rotate(120deg);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateX(0) rotate(0);\r\n\t}\r\n}\r\n@keyframes pops-anim-slide-top {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateY(-200%);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateY(0);\r\n\t}\r\n}\r\n@keyframes pops-anim-slide-bottom {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateY(200%);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateY(0);\r\n\t}\r\n}\r\n@keyframes pops-anim-slide-left {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateX(-200%);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateX(0);\r\n\t}\r\n}\r\n@keyframes pops-anim-slide-right {\r\n\t0% {\r\n\t\ttransform: translateX(200%);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateX(0);\r\n\t}\r\n}\r\n@keyframes pops-anim-fadein {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n@keyframes pops-anim-fadein-zoom {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: scale(0.5);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n@keyframes pops-anim-fadein-alert {\r\n\t0% {\r\n\t\ttransform: scale(0.5);\r\n\t}\r\n\t45% {\r\n\t\ttransform: scale(1.05);\r\n\t}\r\n\t80% {\r\n\t\ttransform: scale(0.95);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n@keyframes pops-anim-don {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t2.08333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.75266,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.76342,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t4.16667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.81071,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.84545,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t6.25% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.86808,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.9286,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t8.33333% {\r\n\t\ttransform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t10.4167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.96482,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.05202,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t12.5% {\r\n\t\ttransform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t14.5833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.02563,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.09149,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t16.6667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.04227,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.08453,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t18.75% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.05102,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.06666,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t20.8333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.05334,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.04355,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t22.9167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.05078,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.02012,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t25% {\r\n\t\ttransform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t27.0833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.03699,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.98534,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t29.1667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.02831,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.97688,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t31.25% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.01973,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.97422,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t33.3333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.01191,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.97618,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t35.4167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00526,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.98122,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t37.5% {\r\n\t\ttransform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t39.5833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99617,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99433,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t41.6667% {\r\n\t\ttransform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t43.75% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99237,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00413,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t45.8333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99202,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00651,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t47.9167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99241,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00726,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t50% {\r\n\t\topacity: 1;\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99329,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00671,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t52.0833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99447,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00529,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t54.1667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99577,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00346,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t56.25% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99705,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.0016,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t58.3333% {\r\n\t\ttransform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t60.4167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99921,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99884,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t62.5% {\r\n\t\ttransform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t64.5833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00057,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99795,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t66.6667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00095,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99811,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t68.75% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00114,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99851,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t70.8333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00119,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99903,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t72.9167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00114,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99955,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t75% {\r\n\t\ttransform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t77.0833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00083,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00033,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t79.1667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00063,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00052,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t81.25% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00044,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00058,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t83.3333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00027,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00053,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t85.4167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00012,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00042,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t87.5% {\r\n\t\ttransform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t89.5833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99991,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00013,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t91.6667% {\r\n\t\ttransform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t93.75% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99983,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99991,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t95.8333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99982,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99985,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t97.9167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99983,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99984,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n}\r\n@keyframes pops-anim-roll {\r\n\t0% {\r\n\t\ttransform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\r\n\t}\r\n}\r\n@keyframes pops-anim-sandra {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: scale3d(1.1, 1.1, 1);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: scale3d(1, 1, 1);\r\n\t}\r\n}\r\n@keyframes pops-anim-gather {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: scale(5, 0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: scale(1, 1);\r\n\t}\r\n}\r\n@keyframes pops-anim-spread-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: scaleX(1);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: scaleX(0);\r\n\t}\r\n}\r\n@keyframes pops-anim-shake-reverse {\r\n\t0%,\r\n\t100% {\r\n\t\ttransform: translateX(10px);\r\n\t}\r\n\t10%,\r\n\t30%,\r\n\t50%,\r\n\t70%,\r\n\t90% {\r\n\t\ttransform: translateX(-10px);\r\n\t}\r\n\t20%,\r\n\t40%,\r\n\t60%,\r\n\t80% {\r\n\t\ttransform: translateX(0);\r\n\t}\r\n}\r\n@keyframes pops-anim-rolling-left-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateX(0) rotate(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateX(-100%) rotate(-120deg);\r\n\t}\r\n}\r\n@keyframes pops-anim-rolling-right-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateX(0) rotate(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateX(100%) rotate(120deg);\r\n\t}\r\n}\r\n@keyframes pops-anim-slide-top-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateY(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateY(-200%);\r\n\t}\r\n}\r\n@keyframes pops-anim-slide-bottom-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateY(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateY(200%);\r\n\t}\r\n}\r\n@keyframes pops-anim-slide-left-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateX(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateX(-200%);\r\n\t}\r\n}\r\n@keyframes pops-anim-slide-right-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateX(0);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateX(200%);\r\n\t}\r\n}\r\n@keyframes pops-anim-fadein-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n@keyframes pops-anim-fadein-zoom-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: scale(0.5);\r\n\t}\r\n}\r\n@keyframes pops-anim-fadein-alert-reverse {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t45% {\r\n\t\ttransform: scale(0.95);\r\n\t}\r\n\t80% {\r\n\t\ttransform: scale(1.05);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(0.5);\r\n\t}\r\n}\r\n@keyframes pops-anim-don-reverse {\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t97.9167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.75266,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.76342,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t95.8333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.81071,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.84545,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t93.75% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.86808,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.9286,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t91.6667% {\r\n\t\ttransform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t89.5833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.96482,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.05202,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t87.5% {\r\n\t\ttransform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t85.4167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.02563,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.09149,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t83.3333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.04227,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.08453,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t81.25% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.05102,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.06666,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t79.1667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.05334,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.04355,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t77.0833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.05078,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.02012,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t75% {\r\n\t\ttransform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t72.9167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.03699,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.98534,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t70.8333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.02831,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.97688,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t68.75% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.01973,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.97422,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t66.6667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.01191,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.97618,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t64.5833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00526,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.98122,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t62.5% {\r\n\t\ttransform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t60.4167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99617,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99433,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t58.3333% {\r\n\t\ttransform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t56.25% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99237,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00413,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t54.1667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99202,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00651,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t52.0833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99241,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00726,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t50% {\r\n\t\topacity: 1;\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99329,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00671,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t47.9167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99447,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00529,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t45.8333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99577,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00346,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t43.75% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99705,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.0016,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t41.6667% {\r\n\t\ttransform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t39.5833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99921,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99884,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t37.5% {\r\n\t\ttransform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t35.4167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00057,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99795,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t33.3333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00095,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99811,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t31.25% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00114,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99851,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t29.1667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00119,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99903,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t27.0833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00114,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99955,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t25% {\r\n\t\ttransform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t22.9167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00083,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00033,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t20.8333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00063,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00052,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t18.75% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00044,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00058,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t16.6667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00027,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00053,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t14.5833% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t1.00012,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00042,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t12.5% {\r\n\t\ttransform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t10.4167% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99991,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1.00013,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t8.33333% {\r\n\t\ttransform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n\t}\r\n\t6.25% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99983,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99991,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t4.16667% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99982,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99985,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t2.08333% {\r\n\t\ttransform: matrix3d(\r\n\t\t\t0.99983,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0.99984,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: matrix3d(\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t1,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0,\r\n\t\t\t0type=close,\r\n\t\t\t1\r\n\t\t);\r\n\t}\r\n}\r\n@keyframes pops-anim-roll-reverse {\r\n\t0% {\r\n\t\ttransform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\r\n\t}\r\n}\r\n@keyframes pops-anim-sandra-reverse {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: scale3d(1, 1, 1);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: scale3d(1.1, 1.1, 1);\r\n\t}\r\n}\r\n@keyframes pops-anim-gather-reverse {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: scale(5, 0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: scale(5, 0);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes pops-motion-fadeInTop {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateY(-30px);\r\n\t\ttransform: translateY(-30px);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateX(0);\r\n\t\ttransform: translateX(0);\r\n\t}\r\n}\r\n@keyframes pops-motion-fadeInTop {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateY(-30px);\r\n\t\t-ms-transform: translateY(-30px);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateX(0);\r\n\t\t-ms-transform: translateX(0);\r\n\t}\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutTop {\r\n\t0% {\r\n\t\topacity: 10;\r\n\t\t-webkit-transform: translateY(0);\r\n\t\ttransform: translateY(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateY(-30px);\r\n\t\ttransform: translateY(-30px);\r\n\t}\r\n}\r\n@keyframes pops-motion-fadeOutTop {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\ttransform: translateY(0);\r\n\t\t-ms-transform: translateY(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\ttransform: translateY(-30px);\r\n\t\t-ms-transform: translateY(-30px);\r\n\t}\r\n}\r\n@-webkit-keyframes pops-motion-fadeInBottom {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateY(20px);\r\n\t\ttransform: translateY(20px);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateY(0);\r\n\t\ttransform: translateY(0);\r\n\t}\r\n}\r\n@keyframes pops-motion-fadeInBottom {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateY(20px);\r\n\t\ttransform: translateY(20px);\r\n\t\t-ms-transform: translateY(20px);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateY(0);\r\n\t\ttransform: translateY(0);\r\n\t\t-ms-transform: translateY(0);\r\n\t}\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutBottom {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateY(0);\r\n\t\ttransform: translateY(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateY(20px);\r\n\t\ttransform: translateY(20px);\r\n\t}\r\n}\r\n@keyframes pops-motion-fadeOutBottom {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateY(0);\r\n\t\ttransform: translateY(0);\r\n\t\t-ms-transform: translateY(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateY(20px);\r\n\t\ttransform: translateY(20px);\r\n\t\t-ms-transform: translateY(20px);\r\n\t}\r\n}\r\n@-webkit-keyframes pops-motion-fadeInLeft {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateX(-20px);\r\n\t\ttransform: translateX(-20px);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateX(0);\r\n\t\ttransform: translateX(0);\r\n\t}\r\n}\r\n@keyframes pops-motion-fadeInLeft {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateX(-30px);\r\n\t\ttransform: translateX(-30px);\r\n\t\t-ms-transform: translateX(-30px);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateX(0);\r\n\t\ttransform: translateX(0);\r\n\t\t-ms-transform: translateX(0);\r\n\t}\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutLeft {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateX(0);\r\n\t\ttransform: translateX(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateX(-30px);\r\n\t\ttransform: translateX(-30px);\r\n\t}\r\n}\r\n@keyframes pops-motion-fadeOutLeft {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateX(0);\r\n\t\ttransform: translateX(0);\r\n\t\t-ms-transform: translateX(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateX(-20px);\r\n\t\ttransform: translateX(-20px);\r\n\t\t-ms-transform: translateX(-20px);\r\n\t}\r\n}\r\n@-webkit-keyframes pops-motion-fadeInRight {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateX(20px);\r\n\t\ttransform: translateX(20px);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateX(0);\r\n\t\ttransform: translateX(0);\r\n\t}\r\n}\r\n@keyframes pops-motion-fadeInRight {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateX(20px);\r\n\t\ttransform: translateX(20px);\r\n\t\t-ms-transform: translateX(20px);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateX(0);\r\n\t\ttransform: translateX(0);\r\n\t\t-ms-transform: translateX(0);\r\n\t}\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutRight {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateX(0);\r\n\t\ttransform: translateX(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateX(20px);\r\n\t\ttransform: translateX(20px);\r\n\t}\r\n}\r\n@keyframes pops-motion-fadeOutRight {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translateX(0);\r\n\t\ttransform: translateX(0);\r\n\t\t-ms-transform: translateX(0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translateX(20px);\r\n\t\ttransform: translateX(20px);\r\n\t\t-ms-transform: translateX(20px);\r\n\t}\r\n}\r\n\r\n/* 动画 */\r\n.pops-anim[anim=\"pops-anim-spread\"] {\r\n\tanimation: pops-anim-spread 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-shake\"] {\r\n\tanimation: pops-anim-shake 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-rolling-left\"] {\r\n\tanimation: pops-anim-rolling-left 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-rolling-right\"] {\r\n\tanimation: pops-anim-rolling-right 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-top\"] {\r\n\tanimation: pops-anim-slide-top 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-bottom\"] {\r\n\tanimation: pops-anim-slide-bottom 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-left\"] {\r\n\tanimation: pops-anim-slide-left 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-right\"] {\r\n\tanimation: pops-anim-slide-right 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein\"] {\r\n\tanimation: pops-anim-fadein 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-zoom\"] {\r\n\tanimation: pops-anim-fadein-zoom 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-alert\"] {\r\n\tanimation: pops-anim-fadein-alert 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-don\"] {\r\n\tanimation: pops-anim-don 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-roll\"] {\r\n\tanimation: pops-anim-roll 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-sandra\"] {\r\n\tanimation: pops-anim-sandra 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-gather\"] {\r\n\tanimation: pops-anim-gather 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-spread-reverse\"] {\r\n\tanimation: pops-anim-spread-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-shake-reverse\"] {\r\n\tanimation: pops-anim-shake-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-rolling-left-reverse\"] {\r\n\tanimation: pops-anim-rolling-left-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-rolling-right-reverse\"] {\r\n\tanimation: pops-anim-rolling-right-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-top-reverse\"] {\r\n\tanimation: pops-anim-slide-top-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-bottom-reverse\"] {\r\n\tanimation: pops-anim-slide-bottom-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-left-reverse\"] {\r\n\tanimation: pops-anim-slide-left-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-right-reverse\"] {\r\n\tanimation: pops-anim-slide-right-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-reverse\"] {\r\n\tanimation: pops-anim-fadein-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-zoom-reverse\"] {\r\n\tanimation: pops-anim-fadein-zoom-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-alert-reverse\"] {\r\n\tanimation: pops-anim-fadein-alert-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-don-reverse\"] {\r\n\tanimation: pops-anim-don-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-roll-reverse\"] {\r\n\tanimation: pops-anim-roll-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-sandra-reverse\"] {\r\n\tanimation: pops-anim-sandra-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-gather-reverse\"] {\r\n\tanimation: pops-anim-gather-reverse 0.3s;\r\n}\r\n";

    var alertCSS = ".pops[type-value] .pops-alert-title {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n.pops[type-value=\"alert\"] .pops-alert-title {\r\n\twidth: 100%;\r\n\theight: var(--container-title-height);\r\n\tborder-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value=\"alert\"] .pops-alert-title p[pops] {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\tfont-weight: 500;\r\n\tline-height: var(--container-title-height);\r\n}\r\n.pops[type-value=\"alert\"] .pops-alert-content p[pops] {\r\n\tpadding: 5px 10px;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n}\r\n.pops[type-value=\"alert\"] .pops-alert-content {\r\n\twidth: 100%;\r\n\theight: calc(\r\n\t\t100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n\t);\r\n\toverflow: auto;\r\n\tword-break: break-word;\r\n}\r\n.pops[type-value=\"alert\"] .pops-alert-btn {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tdisplay: flex;\r\n\tpadding: 10px 10px 10px 10px;\r\n\twidth: 100%;\r\n\theight: var(--container-bottom-btn-height);\r\n\tborder-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n\ttext-align: right;\r\n\tline-height: var(--container-bottom-btn-height);\r\n\talign-items: center;\r\n}\r\n";

    var confirmCSS = ".pops[type-value] .pops-confirm-title {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n.pops[type-value=\"confirm\"] .pops-confirm-title {\r\n\twidth: 100%;\r\n\theight: var(--container-title-height);\r\n\tborder-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value=\"confirm\"] .pops-confirm-title p[pops] {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\tfont-weight: 500;\r\n\tline-height: var(--container-title-height);\r\n}\r\n.pops[type-value=\"confirm\"] .pops-confirm-content p[pops] {\r\n\tpadding: 5px 10px;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n}\r\n.pops[type-value=\"confirm\"] .pops-confirm-content {\r\n\twidth: 100%;\r\n\theight: calc(\r\n\t\t100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n\t);\r\n\toverflow: auto;\r\n\tword-break: break-word;\r\n}\r\n.pops[type-value=\"confirm\"] .pops-confirm-btn {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tdisplay: flex;\r\n\tpadding: 10px 10px 10px 10px;\r\n\twidth: 100%;\r\n\theight: var(--container-bottom-btn-height);\r\n\tborder-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n\ttext-align: right;\r\n\tline-height: var(--container-bottom-btn-height);\r\n\talign-items: center;\r\n}\r\n";

    var promptCSS = ".pops[type-value] .pops-prompt-title {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n.pops[type-value=\"prompt\"] .pops-prompt-title {\r\n\twidth: 100%;\r\n\theight: var(--container-title-height);\r\n\tborder-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value=\"prompt\"] .pops-prompt-title p[pops] {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\tfont-weight: 500;\r\n\tline-height: var(--container-title-height);\r\n}\r\n.pops[type-value=\"prompt\"] .pops-prompt-content p[pops] {\r\n\tpadding: 5px 10px;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n}\r\n.pops[type-value=\"prompt\"] .pops-prompt-content {\r\n\twidth: 100%;\r\n\theight: calc(\r\n\t\t100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n\t);\r\n\toverflow: auto;\r\n\tword-break: break-word;\r\n}\r\n.pops[type-value=\"prompt\"] .pops-prompt-btn {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tdisplay: flex;\r\n\tpadding: 10px 10px 10px 10px;\r\n\twidth: 100%;\r\n\theight: var(--container-bottom-btn-height);\r\n\tborder-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n\ttext-align: right;\r\n\tline-height: var(--container-bottom-btn-height);\r\n\talign-items: center;\r\n}\r\n.pops[type-value=\"prompt\"] input[pops] {\r\n\tpadding: 5px 10px;\r\n}\r\n.pops[type-value=\"prompt\"] textarea[pops] {\r\n\tpadding: 5px 10px;\r\n\tresize: none;\r\n}\r\n.pops[type-value=\"prompt\"] input[pops],\r\n.pops[type-value=\"prompt\"] textarea[pops] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toutline: 0;\r\n\tborder: 0;\r\n\tcolor: rgb(51, 51, 51);\r\n}\r\n";

    var loadingCSS = ".pops[type-value=\"loading\"] {\r\n\tposition: absolute;\r\n\ttop: 272.5px;\r\n\ttop: 50%;\r\n\tleft: 26px;\r\n\tleft: 50%;\r\n\tdisplay: flex;\r\n\toverflow: hidden;\r\n\tpadding: 10px 15px;\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tmin-width: 0;\r\n\tmin-height: 0;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\r\n\tborder-radius: 5px;\r\n\tbackground-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n\tbox-shadow: 0 0 5px rgb(0 0 0 / 50%);\r\n\tvertical-align: middle;\r\n\ttransition: all 0.35s;\r\n\ttransform: translate(-50%, -50%);\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\talign-content: center;\r\n}\r\n.pops[type-value=\"loading\"]:before {\r\n\tfloat: left;\r\n\tdisplay: inline-block;\r\n\twidth: 2em;\r\n\theight: 2em;\r\n\tborder: 0.3em solid rgba(100, 149, 237, 0.1);\r\n\tborder-top: 0.3em solid rgb(100, 149, 237, var(--pops-bd-opacity));\r\n\tborder-radius: 50%;\r\n\tcontent: \" \";\r\n\tvertical-align: middle;\r\n\tfont-size: inherit;\r\n\tanimation: pops-anim-wait-rotate 1.2s linear infinite;\r\n}\r\n.pops[type-value=\"loading\"] .pops-loading-content {\r\n\tposition: static;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tfloat: left;\r\n\toverflow: hidden;\r\n\twidth: auto;\r\n\tfont-size: inherit;\r\n\tline-height: 2em;\r\n}\r\n.pops[type-value=\"loading\"] .pops-loading-content p[pops] {\r\n\tdisplay: inline-block;\r\n\tpadding: 5px 0px;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n\tfont-size: inherit;\r\n\ttext-align: center;\r\n}\r\n";

    var iframeCSS = ".pops[type-value=\"iframe\"] {\r\n\t--container-title-height: 55px;\r\n}\r\n.pops[type-value] .pops-iframe-title {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n.pops[type-value=\"iframe\"] .pops-iframe-title {\r\n\twidth: calc(100% - 0px);\r\n\theight: var(--container-title-height);\r\n\tborder-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value=\"iframe\"] .pops-iframe-title p[pops] {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\tfont-weight: 500;\r\n\tline-height: var(--container-title-height);\r\n}\r\n.pops[type-value=\"iframe\"] .pops-iframe-content p[pops] {\r\n\tpadding: 5px 10px;\r\n\tcolor: #333;\r\n\ttext-indent: 15px;\r\n}\r\n.pops[type-value=\"iframe\"] .pops-iframe-content {\r\n\twidth: 100%;\r\n\theight: calc(100% - var(--container-title-height));\r\n\toverflow: hidden;\r\n\tword-break: break-word;\r\n}\r\n.pops-loading {\r\n\tposition: absolute;\r\n\ttop: 40px;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tz-index: 5;\r\n\tbackground-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n}\r\n.pops-loading:before {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\tz-index: 3;\r\n\tdisplay: block;\r\n\tmargin: -20px 0 0 -20px;\r\n\tpadding: 20px;\r\n\tborder: 4px solid rgb(221, 221, 221, var(--pops-bd-opacity));\r\n\tborder-radius: 50%;\r\n\tcontent: \"\";\r\n\tborder-top-color: transparent;\r\n\tanimation: pops-anim-wait-rotate 1.2s linear infinite;\r\n}\r\n.pops[type-value=\"iframe\"].pops[type-module=\"min\"] {\r\n\ttop: unset !important;\r\n\tbottom: 0;\r\n\tmax-width: 200px;\r\n\tmax-height: 53px;\r\n\ttransform: none;\r\n}\r\n.pops[type-value=\"iframe\"].pops[type-module=\"min\"]\r\n\t.pops-header-control[type=\"min\"] {\r\n\tdisplay: none;\r\n}\r\n.pops[type-value=\"iframe\"].pops[type-module=\"max\"] {\r\n\ttop: unset !important;\r\n\tleft: unset !important;\r\n\twidth: 100% !important;\r\n\theight: 100% !important;\r\n\ttransform: none;\r\n}\r\n.pops[type-value=\"iframe\"] iframe[pops] {\r\n\twidth: calc(100% - 4px);\r\n\theight: calc(100% - 4px);\r\n\tborder: 0;\r\n}\r\n.pops-iframe-content-global-loading {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 999999;\r\n\twidth: 0;\r\n\theight: 4px;\r\n\tbackground: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r\n\tanimation: iframeLoadingChange 2s forwards;\r\n}\r\n";

    var tooltipCSS = ".pops-tip {\r\n\t--tooltip-color: #4e4e4e;\r\n\t--tooltip-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n\t--tooltip-bd-radius: 2px;\r\n\t--tooltip-font-size: 14px;\r\n\t--tooltip-padding-top: 13px;\r\n\t--tooltip-padding-right: 13px;\r\n\t--tooltip-padding-bottom: 13px;\r\n\t--tooltip-padding-left: 13px;\r\n\r\n\t--tooltip-arrow--after-color: rgb(78, 78, 78);\r\n\t--tooltip-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n\t--tooltip-arrow--after-width: 12px;\r\n\t--tooltip-arrow--after-height: 12px;\r\n\r\n\tposition: absolute;\r\n\tpadding: var(--tooltip-padding-top) var(--tooltip-padding-right)\r\n\t\tvar(--tooltip-padding-bottom) var(--tooltip-padding-left);\r\n\tmax-width: 400px;\r\n\tmax-height: 300px;\r\n\tborder-radius: var(--tooltip-bd-radius);\r\n\tbackground-color: var(--tooltip-bg-color);\r\n\tbox-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\r\n\tcolor: var(--tooltip-color);\r\n\tfont-size: var(--tooltip-font-size);\r\n}\r\n/* github的样式 */\r\n.pops-tip.github-tooltip {\r\n\t--tooltip-bg-opacity: 1;\r\n\t--tooltip-color: rgb(255, 255, 255);\r\n\t--tooltip-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));\r\n\t--tooltip-bd-radius: 6px;\r\n\t--tooltip-padding-top: 6px;\r\n\t--tooltip-padding-right: 8px;\r\n\t--tooltip-padding-bottom: 6px;\r\n\t--tooltip-padding-left: 8px;\r\n\r\n\t--tooltip-arrow--after-color: rgb(255, 255, 255);\r\n\t--tooltip-arrow--after-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));\r\n\t--tooltip-arrow--after-width: 8px;\r\n\t--tooltip-arrow--after-height: 8px;\r\n}\r\n.pops-tip .pops-tip-arrow {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 50%;\r\n\toverflow: hidden;\r\n\twidth: 100%;\r\n\theight: 12.5px;\r\n\ttransform: translateX(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow::after {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\twidth: var(--tooltip-arrow--after-width);\r\n\theight: var(--tooltip-arrow--after-height);\r\n\tbackground: var(--tooltip-arrow--after-bg-color);\r\n\tcolor: var(--tooltip-arrow--after-color);\r\n\tbox-shadow: 0 1px 7px rgba(0, 0, 0, 0.24), 0 1px 7px rgba(0, 0, 0, 0.12);\r\n\tcontent: \"\";\r\n\ttransform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"bottom\"] {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 50%;\r\n\toverflow: hidden;\r\n\twidth: 100%;\r\n\theight: 12.5px;\r\n\ttransform: translateX(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"bottom\"]:after {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\twidth: var(--tooltip-arrow--after-width);\r\n\theight: var(--tooltip-arrow--after-height);\r\n\tbackground: var(--tooltip-arrow--after-bg-color);\r\n\tbox-shadow: 0 1px 7px rgba(0, 0, 0, 0.24), 0 1px 7px rgba(0, 0, 0, 0.12);\r\n\tcontent: \"\";\r\n\ttransform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"left\"] {\r\n\ttop: 50%;\r\n\tleft: -12.5px;\r\n\twidth: 12.5px;\r\n\theight: 50px;\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"left\"]:after {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 100%;\r\n\tcontent: \"\";\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"right\"] {\r\n\ttop: 50%;\r\n\tright: -12.5px;\r\n\tleft: auto;\r\n\twidth: 12.5px;\r\n\theight: 50px;\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"right\"]:after {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"top\"] {\r\n\ttop: -12.5px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"top\"]:after {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 50%;\r\n\tcontent: \"\";\r\n}\r\n\r\n.pops-tip[data-motion] {\r\n\t-webkit-animation-duration: 0.25s;\r\n\tanimation-duration: 0.25s;\r\n\t-webkit-animation-fill-mode: forwards;\r\n\tanimation-fill-mode: forwards;\r\n}\r\n.pops-tip[data-motion=\"fadeOutRight\"] {\r\n\t-webkit-animation-name: pops-motion-fadeOutRight;\r\n\tanimation-name: pops-motion-fadeOutRight;\r\n}\r\n.pops-tip[data-motion=\"fadeInTop\"] {\r\n\t-webkit-animation-name: pops-motion-fadeInTop;\r\n\tanimation-name: pops-motion-fadeInTop;\r\n\tanimation-timing-function: cubic-bezier(0.49, 0.49, 0.13, 1.3);\r\n}\r\n.pops-tip[data-motion=\"fadeOutTop\"] {\r\n\t-webkit-animation-name: pops-motion-fadeOutTop;\r\n\tanimation-name: pops-motion-fadeOutTop;\r\n\tanimation-timing-function: cubic-bezier(0.32, 0.37, 0.06, 0.87);\r\n}\r\n.pops-tip[data-motion=\"fadeInBottom\"] {\r\n\t-webkit-animation-name: pops-motion-fadeInBottom;\r\n\tanimation-name: pops-motion-fadeInBottom;\r\n}\r\n.pops-tip[data-motion=\"fadeOutBottom\"] {\r\n\t-webkit-animation-name: pops-motion-fadeOutBottom;\r\n\tanimation-name: pops-motion-fadeOutBottom;\r\n}\r\n.pops-tip[data-motion=\"fadeInLeft\"] {\r\n\t-webkit-animation-name: pops-motion-fadeInLeft;\r\n\tanimation-name: pops-motion-fadeInLeft;\r\n}\r\n.pops-tip[data-motion=\"fadeOutLeft\"] {\r\n\t-webkit-animation-name: pops-motion-fadeOutLeft;\r\n\tanimation-name: pops-motion-fadeOutLeft;\r\n}\r\n.pops-tip[data-motion=\"fadeInRight\"] {\r\n\t-webkit-animation-name: pops-motion-fadeInRight;\r\n\tanimation-name: pops-motion-fadeInRight;\r\n}\r\n";

    var drawerCSS = ".pops[type-value=\"drawer\"] {\r\n\tposition: fixed;\r\n\tbox-sizing: border-box;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tbox-shadow: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),\r\n\t\t0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);\r\n\toverflow: hidden;\r\n\ttransition: all 0.3s;\r\n}\r\n.pops[type-value] .pops-drawer-title {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.pops[type-value=\"drawer\"][direction=\"top\"] {\r\n\twidth: 100%;\r\n\tleft: 0;\r\n\tright: 0;\r\n\ttop: 0;\r\n}\r\n.pops[type-value=\"drawer\"][direction=\"bottom\"] {\r\n\twidth: 100%;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n.pops[type-value=\"drawer\"][direction=\"left\"] {\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n}\r\n.pops[type-value=\"drawer\"][direction=\"right\"] {\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n}\r\n.pops-drawer-content {\r\n\theight: 100%;\r\n}\r\n.pops[type-value=\"drawer\"] .pops-drawer-btn {\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n}\r\n";

    var folderCSS = ".pops[type-value] .pops-folder-title {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n.pops[type-value=\"folder\"] .pops-folder-title {\r\n\twidth: 100%;\r\n\theight: var(--container-title-height);\r\n\tborder-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value=\"folder\"] .pops-folder-title p[pops] {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\tfont-weight: 500;\r\n\tline-height: var(--container-title-height);\r\n}\r\n.pops[type-value=\"folder\"] .pops-folder-content p[pops] {\r\n\tpadding: 5px 10px;\r\n\tcolor: rgb(51, 51, 51);\r\n\ttext-indent: 15px;\r\n}\r\n.pops[type-value=\"folder\"] .pops-folder-content {\r\n\twidth: 100%;\r\n\theight: calc(\r\n\t\t100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n\t);\r\n\toverflow: auto;\r\n\tword-break: break-word;\r\n}\r\n.pops[type-value=\"folder\"] .pops-folder-btn {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tdisplay: flex;\r\n\tpadding: 10px 10px 10px 10px;\r\n\twidth: 100%;\r\n\theight: var(--container-bottom-btn-height);\r\n\tborder-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n\ttext-align: right;\r\n\tline-height: var(--container-bottom-btn-height);\r\n\talign-items: center;\r\n}\r\n.pops-folder-list .cursor-p {\r\n\tcursor: pointer;\r\n}\r\n.pops-folder-list a {\r\n\tbackground: 0 0;\r\n\ttext-decoration: none;\r\n\t-webkit-tap-highlight-color: transparent;\r\n\tcolor: #05082c;\r\n}\r\ntable.pops-folder-list-table__body,\r\ntable.pops-folder-list-table__header {\r\n\twidth: 100%;\r\n\ttable-layout: fixed;\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n\tpadding: 0 20px;\r\n}\r\ntable.pops-folder-list-table__body,\r\ntable.pops-folder-list-table__header {\r\n\theight: 100%;\r\n\tbackground: 0 0;\r\n\toverflow: hidden;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\t-ms-flex-direction: column;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n}\r\ntable.pops-folder-list-table__body {\r\n\theight: 100%;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n.pops-folder-list table tr {\r\n\tline-height: 1;\r\n}\r\n.pops-folder-list-table__header-row {\r\n\theight: 50px;\r\n\tline-height: 50px;\r\n\tcolor: rgb(129, 137, 153);\r\n\ttext-align: left;\r\n\tfont-size: 12px;\r\n}\r\n.pops-folder-list-table__header-row {\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n.pops-folder-list-table__body-row {\r\n\theight: 50px;\r\n\tline-height: 50px;\r\n\tcolor: #03081a;\r\n\tfont-size: 12px;\r\n}\r\n.pops-folder-list-table__body-row:hover {\r\n\tbackground: rgb(245, 246, 247, var(--pops-bg-opacity));\r\n}\r\n.pops-folder-list table th {\r\n\tborder: 0;\r\n\tborder-bottom: 1px solid rgb(247, 248, 250, var(--pops-bg-opacity));\r\n}\r\n.pops-folder-list table td {\r\n\tborder: 0;\r\n\tborder-bottom: 1px solid rgb(247, 248, 250, var(--pops-bg-opacity));\r\n\tposition: relative;\r\n}\r\n.pops-folder-list .list-name-text {\r\n\tdisplay: inline-block;\r\n\tpadding-left: 12px;\r\n\tline-height: 40px;\r\n\tmax-width: 176px;\r\n}\r\n.pops-folder-list-file-name > div {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.pops-mobile-folder-list-file-name {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.pops-mobile-folder-list-file-name > div {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: flex-start;\r\n\talign-items: flex-start;\r\n\tpadding: 6px 0px;\r\n\tflex-direction: column;\r\n}\r\n.pops-mobile-folder-list-file-name img.pops-folder-list-file-icon {\r\n\twidth: 45px;\r\n\theight: 45px;\r\n}\r\n.pops-mobile-folder-list-file-name a.pops-folder-list-file-name-title-text {\r\n\tpadding-left: unset;\r\n\tmax-width: 250px;\r\n\toverflow-x: hidden;\r\n\tfont-weight: 400;\r\n\tline-height: unset;\r\n\tmargin-bottom: 4px;\r\n\twhite-space: normal;\r\n\ttext-overflow: unset;\r\n}\r\n\r\n/* 修改滚动 */\r\n.pops-folder-content {\r\n\toverflow: hidden !important;\r\n}\r\n.pops-folder-content .pops-folder-list {\r\n\theight: 100%;\r\n}\r\n.pops-folder-content .pops-folder-list-table__body-div {\r\n\theight: 100%;\r\n\tpadding-bottom: 85px;\r\n}\r\n.pops-mobile-folder-content .pops-folder-list-table__body-div {\r\n\theight: 100%;\r\n\tpadding-bottom: 40px;\r\n}\r\n.pops-folder-content table.pops-folder-list-table__body {\r\n\toverflow: auto;\r\n}\r\n.pops-mobile-folder-content .pops-folder-list-table__header-div {\r\n\tdisplay: none;\r\n}\r\n\r\n.pops-folder-list-file-name-title-text:hover {\r\n\ttext-decoration: none;\r\n\tcolor: rgb(6, 167, 255);\r\n}\r\n.pops-folder-list .text-ellip {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\r\n}\r\n.pops-folder-list .content {\r\n\tcolor: rgb(129, 137, 153);\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n}\r\n.pops-folder-list .inline-block-v-middle {\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\r\n.pops-folder-list .flex-a-i-center {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.pops-folder-list .u-file-icon {\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\r\n.pops-folder-list .u-file-icon--list {\r\n\twidth: 32px;\r\n\theight: 32px;\r\n}\r\n.pops-folder-list .pops-folder-list-file-icon {\r\n\tline-height: 1;\r\n\tposition: relative;\r\n\tvertical-align: middle;\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-primary {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t-ms-flex-align: center;\r\n\talign-items: center;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: row;\r\n\t-ms-flex-direction: row;\r\n\tflex-direction: row;\r\n\tmin-height: 17px;\r\n\tflex-wrap: wrap;\r\n}\r\n.pops-folder-list .pops-folder-list-table__sort {\r\n\tdisplay: inline-flex;\r\n\tmargin-left: 4px;\r\n\tflex-direction: column;\r\n}\r\n\r\n.pops-folder-list .pops-folder-icon-arrow {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tfill: rgb(212, 215, 222);\r\n}\r\n.pops-folder-list .pops-folder-icon-active {\r\n\tfill: rgb(6, 167, 255);\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb {\r\n\tpadding: 4px 20px;\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t-ms-flex-align: center;\r\n\talign-items: center;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: row;\r\n\t-ms-flex-direction: row;\r\n\tflex-direction: row;\r\n\t-webkit-box-pack: start;\r\n\t-webkit-justify-content: start;\r\n\t-ms-flex-pack: start;\r\n\tjustify-content: flex-start;\r\n\tmin-height: 35px;\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles {\r\n\tfont-size: 12px;\r\n\tcolor: #333;\r\n\tline-height: 20px;\r\n\tfont-weight: 700;\r\n\tdisplay: inline-block;\r\n\tmax-width: 140px;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\tword-wrap: normal;\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:last-child a {\r\n\tcolor: rgb(153, 153, 153);\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child a {\r\n\tfont-size: 14px;\r\n\tcolor: rgb(18, 22, 26);\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb .iconArrow {\r\n\twidth: 16px;\r\n\theight: 16px;\r\n}\r\n.pops-folder-list .iconArrow {\r\n\tbackground: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTOLi4uLi4t7e3uPj49/f397e3t3d3f///97e3vDw8N3d3d7e3t3d3d3d3ejo6N/f397e3t7e3t3d3d/f393d3d3d3RK+NoEAAAAWdFJOUwAnM4YPU/iQA+UIeMDaHhY41i7zX7UebpjFAAAAUElEQVQI15XOORaAIAwE0LATXHCd+x9VfCiksXCq+UUWou8oZ1vXHrt7YVBiYkW4gdMKYFIC4CSATWCNHWPuM6HuHkr1x3N0ZrBu/9gl0b9c3+kF7C7hS1YAAAAASUVORK5CYII=)\r\n\t\t55% 50%/6px 9px no-repeat;\r\n}\r\n";

    var panelCSS = ".pops[type-value=\"panel\"] {\r\n\t--el-disabled-text-color: #a8abb2;\r\n\t--el-disabled-bg-color: #f5f7fa;\r\n\t--el-disabled-border-color: #e4e7ed;\r\n\t--aside-bg-color: #f2f2f2;\r\n}\r\n.pops[type-value] .pops-panel-title {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.pops[type-value=\"panel\"] .pops-panel-title {\r\n\twidth: 100%;\r\n\theight: var(--container-title-height);\r\n\tborder-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value=\"panel\"] .pops-panel-title p[pops] {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tcolor: #333;\r\n\ttext-indent: 15px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\tfont-weight: 500;\r\n\tline-height: var(--container-title-height);\r\n}\r\n.pops[type-value=\"panel\"] .pops-panel-content {\r\n\twidth: 100%;\r\n\theight: calc(\r\n\t\t100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n\t);\r\n\toverflow: auto;\r\n\tword-break: break-word;\r\n}\r\n.pops[type-value=\"panel\"] .pops-panel-btn {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tdisplay: flex;\r\n\tpadding: 10px 10px 10px 10px;\r\n\twidth: 100%;\r\n\theight: var(--container-bottom-btn-height);\r\n\tborder-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n\ttext-align: right;\r\n\tline-height: var(--container-bottom-btn-height);\r\n\talign-items: center;\r\n}\r\n\r\n/* ↓panel的CSS↓ */\r\naside.pops-panel-aside {\r\n\toverflow: auto;\r\n\tbox-sizing: border-box;\r\n\tflex-shrink: 0;\r\n\tmax-width: 200px;\r\n\theight: 100%;\r\n\tbackground: var(--aside-bg-color);\r\n\tborder-right: 1px solid var(--aside-bg-color);\r\n\tfont-size: 0.9em;\r\n}\r\naside.pops-panel-aside {\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n}\r\n.pops-panel-content {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex: 1;\r\n\tflex-basis: auto;\r\n\tbox-sizing: border-box;\r\n\tmin-width: 0;\r\n\tbottom: 0 !important;\r\n}\r\nsection.pops-panel-container {\r\n\twidth: 100%;\r\n\tpadding: 10px;\r\n\toverflow: hidden;\r\n}\r\nsection.pops-panel-container .pops-panel-container-header-ul,\r\nsection.pops-panel-container .pops-panel-deepMenu-container-header-ul {\r\n\tborder-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\nsection.pops-panel-container .pops-panel-container-header-ul li {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start !important;\r\n\ttext-align: left;\r\n}\r\nsection.pops-panel-container > ul:last-child {\r\n\toverflow: auto;\r\n\theight: calc(100% - 45px);\r\n}\r\naside.pops-panel-aside ul li {\r\n\tmargin: 6px 8px;\r\n\tborder-radius: 4px;\r\n\tpadding: 6px 10px;\r\n\tcursor: default;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-start;\r\n}\r\naside.pops-panel-aside .pops-is-visited,\r\naside.pops-panel-aside ul li:hover {\r\n\tcolor: rgb(64, 158, 255);\r\n\tbackground: rgba(64, 158, 255, 0.1);\r\n}\r\nsection.pops-panel-container > ul li {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tmargin: 10px 20px;\r\n\tgap: 1rem;\r\n}\r\nsection.pops-panel-container li.pops-panel-forms-container-item {\r\n\tdisplay: block;\r\n\tmargin-top: 20px;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul {\r\n\tborder-radius: 6px;\r\n\tbackground: var(--aside-bg-color);\r\n\tmargin: 10px;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul li {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tmargin: 0px;\r\n\tpadding: 10px 10px;\r\n\tborder-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n\ttext-align: left;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul li:last-child {\r\n\tborder: 0;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item > div {\r\n\tmargin: 10px;\r\n\tmargin-left: 20px;\r\n\tfont-size: 0.9em;\r\n\ttext-align: left;\r\n}\r\n/* 主文字 */\r\n/*section.pops-panel-container\r\n\t.pops-panel-forms-container-item\r\n\t.pops-panel-item-left-text\r\n\t.pops-panel-item-left-main-text {\r\n\tline-height: 2;\r\n}*/\r\n/* 描述文字 */\r\nsection.pops-panel-container\r\n\t.pops-panel-forms-container-item\r\n\t.pops-panel-item-left-text\r\n\t.pops-panel-item-left-desc-text {\r\n\t/* line-height: 1; */\r\n\tmargin-top: 6px;\r\n\tfont-size: 0.8em;\r\n\tcolor: rgb(108, 108, 108);\r\n}\r\n/* 兼容移动端CSS */\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile {\r\n\twidth: 92%;\r\n\twidth: 92vw;\r\n}\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile section.pops-panel-container {\r\n\tpadding: 10px 0px;\r\n}\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile\r\n\t.pops-panel-content\r\n\taside.pops-panel-aside {\r\n\twidth: 20%;\r\n}\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile\r\n\tsection.pops-panel-container\r\n\t.pops-panel-forms-container-item\r\n\t> div {\r\n\tmargin: 5px 10px;\r\n\ttext-align: left;\r\n}\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile\r\n\tsection.pops-panel-container\r\n\t.pops-panel-forms-container-item\r\n\tul {\r\n\tmargin: 0px !important;\r\n}\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile\r\n\tsection.pops-panel-container\r\n\t> ul\r\n\tli {\r\n\tpadding: 10px 10px;\r\n\tmargin: 0;\r\n}\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile\r\n\tsection.pops-panel-container\r\n\t> ul\r\n\t> li\r\n\tdiv:nth-child(2) {\r\n\tmax-width: 55%;\r\n\tmargin-left: 6px;\r\n\ttext-align: right;\r\n}\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile\r\n\tsection.pops-panel-container\r\n\t.pops-panel-select\r\n\tselect {\r\n\tmin-width: 88px !important;\r\n\twidth: -webkit-fill-available;\r\n\twidth: -moz-available;\r\n}\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile\r\n\tsection.pops-panel-container\r\n\t.pops-panel-container-header-ul\r\n\tli {\r\n\tfont-size: 16px;\r\n}\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile .pops-panel-title p[pops],\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile\r\n\tsection.pops-panel-container\r\n\t> ul\r\n\tli,\r\n.pops[type-value=\"panel\"].pops-panel-is-mobile aside.pops-panel-aside ul li {\r\n\tfont-size: 14px;\r\n}\r\n/* switch的CSS */\r\n.pops-panel-switch {\r\n\tdisplay: inline-flex;\r\n\tflex-direction: row-reverse;\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tfont-size: 14px;\r\n\tline-height: 20px;\r\n\theight: 32px;\r\n\tvertical-align: middle;\r\n}\r\n.pops-panel-switch input.pops-panel-switch__input {\r\n\tposition: absolute;\r\n\twidth: 0;\r\n\theight: 0;\r\n\topacity: 0;\r\n\tmargin: 0;\r\n}\r\n.pops-panel-switch:has(input.pops-panel-switch__input:disabled),\r\n.pops-panel-switch[data-disabled],\r\n.pops-panel-switch[data-disabled] .pops-panel-switch__core,\r\n.pops-panel-switch\r\n\tinput.pops-panel-switch__input:disabled\r\n\t+ .pops-panel-switch__core {\r\n\tcursor: not-allowed;\r\n\topacity: 0.6;\r\n}\r\n.pops-panel-switch span.pops-panel-switch__core {\r\n\tdisplay: inline-flex;\r\n\tposition: relative;\r\n\talign-items: center;\r\n\tmin-width: 40px;\r\n\theight: 20px;\r\n\tborder: 1px solid rgb(220, 223, 230, var(--pops-bd-opacity));\r\n\toutline: 0;\r\n\tborder-radius: 10px;\r\n\tbox-sizing: border-box;\r\n\tbackground: rgb(220, 223, 230, var(--pops-bg-opacity));\r\n\tcursor: pointer;\r\n\ttransition: border-color 0.3s, background-color 0.3s;\r\n}\r\n.pops-panel-switch .pops-panel-switch__action {\r\n\tposition: absolute;\r\n\tleft: 1px;\r\n\tborder-radius: 100%;\r\n\ttransition: all 0.3s;\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tbackground-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: rgb(220, 223, 230);\r\n}\r\n.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core {\r\n\tborder-color: rgb(64, 158, 255, var(--pops-bd-opacity));\r\n\tbackground-color: rgb(64, 158, 255, var(--pops-bg-opacity));\r\n}\r\n.pops-panel-switch.pops-panel-switch-is-checked .pops-panel-switch__action {\r\n\tleft: calc(100% - 17px);\r\n\tcolor: rgb(64, 158, 255);\r\n}\r\n/* switch的CSS */\r\n\r\n/* slider旧的CSS */\r\nsection.pops-panel-container .pops-panel-slider:has(> input[type=\"range\"]) {\r\n\toverflow: hidden;\r\n\theight: 25px;\r\n\tline-height: 25px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\nsection.pops-panel-container .pops-panel-slider input[type=\"range\"] {\r\n\theight: 6px;\r\n\tbackground: rgb(228, 231, 237, var(--pops-bg-opacity));\r\n\toutline: 0;\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\twidth: 100%;\r\n}\r\nsection.pops-panel-container\r\n\t.pops-panel-slider\r\n\tinput[type=\"range\"]::-webkit-slider-thumb {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));\r\n\tbackground-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n\tbox-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\r\n\tcursor: pointer;\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\tborder-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;\r\n}\r\nsection.pops-panel-container\r\n\t.pops-panel-slider\r\n\tinput[type=\"range\"]::-moz-range-thumb {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid rgb(64, 159, 255, var(--pops-bd-opacity));\r\n\tbackground-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n\tbox-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\r\n\tcursor: pointer;\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n}\r\nsection.pops-panel-container\r\n\t.pops-panel-slider\r\n\tinput[type=\"range\"]::-moz-range-progress {\r\n\theight: 6px;\r\n\tborder-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;\r\n}\r\n/* slider旧的CSS */\r\n\r\n/* slider的CSS */\r\n.pops-slider {\r\n\t--pops-slider-color-white: #ffffff;\r\n\t--pops-slider-color-primary: #409eff;\r\n\t--pops-slider-color-info: #909399;\r\n\t--pops-slider-text-color-placeholder: #a8abb2;\r\n\t--pops-slider-border-color-light: #e4e7ed;\r\n\t--pops-slider-border-radius-circle: 100%;\r\n\t--pops-slider-transition-duration-fast: 0.2s;\r\n\r\n\t--pops-slider-main-bg-color: var(--pops-slider-color-primary);\r\n\t--pops-slider-runway-bg-color: var(--pops-slider-border-color-light);\r\n\t--pops-slider-stop-bg-color: var(--pops-slider-color-white);\r\n\t--pops-slider-disabled-color: var(--pops-slider-text-color-placeholder);\r\n\t--pops-slider-border-radius: 3px;\r\n\t--pops-slider-height: 6px;\r\n\t--pops-slider-button-size: 20px;\r\n\t--pops-slider-button-wrapper-size: 36px;\r\n\t--pops-slider-button-wrapper-offset: -15px;\r\n}\r\n\r\n.pops-slider {\r\n\twidth: 100%;\r\n\theight: 32px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.pops-slider-width {\r\n\tflex: 0 0 52%;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.pops-slider__runway {\r\n\tflex: 1;\r\n\theight: var(--pops-slider-height);\r\n\tbackground-color: var(--pops-slider-runway-bg-color);\r\n\tborder-radius: var(--pops-slider-border-radius);\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n}\r\n\r\n.pops-slider__runway.show-input {\r\n\tmargin-right: 30px;\r\n\twidth: auto;\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled {\r\n\tcursor: default;\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__bar {\r\n\tbackground-color: var(--pops-slider-disabled-color);\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button {\r\n\tborder-color: var(--pops-slider-disabled-color);\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r\n\tcursor: not-allowed;\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r\n\ttransform: scale(1);\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r\n\tcursor: not-allowed;\r\n}\r\n\r\n.pops-slider__input {\r\n\tflex-shrink: 0;\r\n\twidth: 130px;\r\n}\r\n\r\n.pops-slider__bar {\r\n\theight: var(--pops-slider-height);\r\n\tbackground-color: var(--pops-slider-main-bg-color);\r\n\tborder-top-left-radius: var(--pops-slider-border-radius);\r\n\tborder-bottom-left-radius: var(--pops-slider-border-radius);\r\n\tposition: absolute;\r\n}\r\n\r\n.pops-slider__button-wrapper {\r\n\theight: var(--pops-slider-button-wrapper-size);\r\n\twidth: var(--pops-slider-button-wrapper-size);\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: var(--pops-slider-button-wrapper-offset);\r\n\ttransform: translate(-50%);\r\n\tbackground-color: transparent;\r\n\ttext-align: center;\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tline-height: normal;\r\n\toutline: none;\r\n}\r\n\r\n.pops-slider__button-wrapper:after {\r\n\tdisplay: inline-block;\r\n\tcontent: \"\";\r\n\theight: 100%;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.pops-slider__button:hover,\r\n.pops-slider__button.hover {\r\n\tcursor: grab;\r\n}\r\n\r\n.pops-slider__button {\r\n\tdisplay: inline-block;\r\n\twidth: var(--pops-slider-button-size);\r\n\theight: var(--pops-slider-button-size);\r\n\tvertical-align: middle;\r\n\tborder: solid 2px var(--pops-slider-main-bg-color);\r\n\tbackground-color: var(--pops-slider-color-white);\r\n\tborder-radius: 50%;\r\n\tbox-sizing: border-box;\r\n\ttransition: var(--pops-slider-transition-duration-fast);\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n}\r\n\r\n.pops-slider__button:hover,\r\n.pops-slider__button.hover,\r\n.pops-slider__button.dragging {\r\n\ttransform: scale(1.2);\r\n}\r\n\r\n.pops-slider__button:hover,\r\n.pops-slider__button.hover {\r\n\tcursor: grab;\r\n}\r\n\r\n.pops-slider__button.dragging {\r\n\tcursor: grabbing;\r\n}\r\n\r\n.pops-slider__stop {\r\n\tposition: absolute;\r\n\theight: var(--pops-slider-height);\r\n\twidth: var(--pops-slider-height);\r\n\tborder-radius: var(--pops-slider-border-radius-circle);\r\n\tbackground-color: var(--pops-slider-stop-bg-color);\r\n\ttransform: translate(-50%);\r\n}\r\n\r\n.pops-slider__marks {\r\n\ttop: 0;\r\n\tleft: 12px;\r\n\twidth: 18px;\r\n\theight: 100%;\r\n}\r\n\r\n.pops-slider__marks-text {\r\n\tposition: absolute;\r\n\ttransform: translate(-50%);\r\n\tfont-size: 14px;\r\n\tcolor: var(--pops-slider-color-info);\r\n\tmargin-top: 15px;\r\n\twhite-space: pre;\r\n}\r\n\r\n.pops-slider.is-vertical {\r\n\tposition: relative;\r\n\tdisplay: inline-flex;\r\n\twidth: auto;\r\n\theight: 100%;\r\n\tflex: 0;\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__runway {\r\n\twidth: var(--pops-slider-height);\r\n\theight: 100%;\r\n\tmargin: 0 16px;\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__bar {\r\n\twidth: var(--pops-slider-height);\r\n\theight: auto;\r\n\tborder-radius: 0 0 3px 3px;\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__button-wrapper {\r\n\ttop: auto;\r\n\tleft: var(--pops-slider-button-wrapper-offset);\r\n\ttransform: translateY(50%);\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__stop {\r\n\ttransform: translateY(50%);\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__marks-text {\r\n\tmargin-top: 0;\r\n\tleft: 15px;\r\n\ttransform: translateY(50%);\r\n}\r\n\r\n.pops-slider--large {\r\n\theight: 40px;\r\n}\r\n\r\n.pops-slider--small {\r\n\theight: 24px;\r\n}\r\n/* slider的CSS */\r\n\r\n/* input的CSS */\r\n.pops-panel-input {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tborder: 1px solid #dcdfe6;\r\n\tborder-radius: 4px;\r\n\tbackground-color: #ffffff;\r\n}\r\n.pops-panel-input:hover {\r\n\tbox-shadow: 0 0 0 1px #c0c4cc inset;\r\n}\r\n.pops-panel-input:has(input:focus) {\r\n\toutline: 0;\r\n\tborder: 1px solid #409eff;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: none;\r\n}\r\n.pops-panel-input input {\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tline-height: 1;\r\n\theight: 32px;\r\n\twhite-space: nowrap;\r\n\tcursor: text;\r\n\ttext-align: center;\r\n\tbox-sizing: border-box;\r\n\toutline: 0;\r\n\ttransition: 0.1s;\r\n\tfont-weight: 500;\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tvertical-align: middle;\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\tbackground-color: transparent;\r\n\tborder: 0;\r\n\tpadding: 8px 8px;\r\n\tfont-size: 14px;\r\n\ttext-align: start;\r\n\twidth: 100%;\r\n\tflex: 1;\r\n}\r\n.pops-panel-input span.pops-panel-input__suffix {\r\n\tdisplay: inline-flex;\r\n\twhite-space: nowrap;\r\n\tflex-shrink: 0;\r\n\tflex-wrap: nowrap;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n\tcolor: #a8abb2;\r\n\ttransition: all 0.3s;\r\n\tpointer-events: none;\r\n\tmargin: 0 8px;\r\n}\r\n.pops-panel-input span.pops-panel-input__suffix-inner {\r\n\tpointer-events: all;\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.pops-panel-input .pops-panel-icon {\r\n\tcursor: pointer;\r\n}\r\n.pops-panel-input .pops-panel-icon {\r\n\theight: inherit;\r\n\tline-height: inherit;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttransition: all 0.3s;\r\n}\r\n.pops-panel-input .pops-panel-icon svg {\r\n\theight: 1em;\r\n\twidth: 1em;\r\n}\r\n\r\n.pops-input-disabled {\r\n\tbackground-color: var(--el-disabled-bg-color);\r\n\tbox-shadow: 0 0 0 1px var(--el-disabled-border-color) inset;\r\n}\r\n.pops-panel-input.pops-input-disabled {\r\n\tborder: none;\r\n}\r\n.pops-panel-input.pops-input-disabled:hover {\r\n\tbox-shadow: 0 0 0 1px var(--el-disabled-border-color) inset;\r\n}\r\n.pops-panel-input input:disabled,\r\n.pops-panel-input input:disabled + .pops-panel-input__suffix {\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tcolor: var(--el-disabled-text-color);\r\n\t-webkit-text-fill-color: var(--el-disabled-text-color);\r\n\tcursor: not-allowed;\r\n}\r\n.pops-panel-input input:disabled + .pops-panel-input__suffix {\r\n\tdisplay: none;\r\n}\r\n/* input的CSS */\r\n\r\n/* textarea的CSS */\r\n.pops-panel-textarea textarea {\r\n\twidth: 100%;\r\n\tvertical-align: bottom;\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tresize: none;\r\n\tpadding: 5px 11px;\r\n\t/*line-height: 1;*/\r\n\tbox-sizing: border-box;\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tbackground-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n\tbackground-image: none;\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\tbox-shadow: 0 0 0 1px #dcdfe6 inset;\r\n\tborder-radius: 0;\r\n\ttransition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n\tborder: none;\r\n}\r\n.pops-panel-textarea textarea:hover {\r\n\tbox-shadow: 0 0 0 1px #c0c4cc inset;\r\n}\r\n.pops-panel-textarea-disable .pops-panel-textarea textarea:hover {\r\n\tbox-shadow: none;\r\n}\r\n.pops-panel-textarea textarea:focus {\r\n\toutline: 0;\r\n\tbox-shadow: 0 0 0 1px #409eff inset;\r\n}\r\n/* textarea的CSS */\r\n\r\n/* select的CSS */\r\n.pops-panel-select select {\r\n\theight: 32px;\r\n\tline-height: 32px;\r\n\tmin-width: 200px;\r\n\tborder: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));\r\n\tborder-radius: 5px;\r\n\ttext-align: center;\r\n\toutline: 0;\r\n\tbackground: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n\tbox-shadow: none;\r\n}\r\n.pops-panel-select select:hover {\r\n\tbox-shadow: 0 0 0 1px #c0c4cc inset;\r\n}\r\n.pops-panel-select-disable .pops-panel-select select:hover {\r\n\tbox-shadow: none;\r\n}\r\n.pops-panel-select select:focus {\r\n\tborder: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));\r\n\tbox-shadow: none;\r\n}\r\n/* select的CSS */\r\n\r\n/* deepMenu的css */\r\n.pops-panel-deepMenu-nav-item {\r\n\tcursor: pointer;\r\n}\r\n.pops-panel-deepMenu-nav-item:active {\r\n\tbackground: #e9e9e9;\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n}\r\n.pops-panel-deepMenu-nav-item .pops-panel-deepMenu {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tcolor: #6c6c6c;\r\n\tfill: #6c6c6c;\r\n}\r\n.pops-panel-deepMenu-nav-item .pops-panel-deepMenu-arrowRight-icon {\r\n\twidth: 15px;\r\n\theight: 15px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.pops-panel-deepMenu-container .pops-panel-deepMenu-container-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\twidth: -webkit-fill-available;\r\n\twidth: -moz-available;\r\n\tpadding: 10px 10px 10px 5px;\r\n}\r\n.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n}\r\n/* deepMenu的css */\r\n";

    var SVG_min = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z\"></path>\r\n</svg>\r\n";

    var SVG_mise = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z\"></path>\r\n</svg>\r\n";

    var SVG_max = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z\"></path>\r\n</svg>\r\n";

    var SVG_close = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z\"></path>\r\n</svg>\r\n";

    var SVG_edit = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z\"></path>\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z\"></path>\r\n</svg>\r\n";

    var SVG_share = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z\"></path>\r\n</svg>\r\n";

    var SVG_delete = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z\"></path>\r\n</svg>\r\n";

    var SVG_search = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z\"></path>\r\n</svg>\r\n";

    var SVG_upload = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z\"></path>\r\n</svg>\r\n";

    var SVG_loading = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z\"></path>\r\n</svg>\r\n";

    var SVG_next = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z\"></path>\r\n</svg>\r\n";

    var SVG_prev = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z\"></path>\r\n</svg>\r\n";

    var SVG_eleme = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z\"></path>\r\n</svg>\r\n";

    var SVG_elemePlus = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\td=\"M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z\"\r\n\t\tfill=\"currentColor\"></path>\r\n</svg>\r\n";

    var SVG_chromeFilled = "<svg\r\n\txmlns=\"http://www.w3.org/2000/svg\"\r\n\tviewBox=\"0 0 1024 1024\"\r\n\txml:space=\"preserve\">\r\n\t<path\r\n\t\td=\"M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z\"\r\n\t\tfill=\"currentColor\"></path>\r\n\t<path\r\n\t\td=\"M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z\"\r\n\t\tfill=\"currentColor\"></path>\r\n\t<path\r\n\t\td=\"M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zM512.01 938.68H512zM414.76 701.95a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z\"\r\n\t\tfill=\"currentColor\"></path>\r\n</svg>\r\n";

    var SVG_cpu = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z\"></path>\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z\"></path>\r\n</svg>\r\n";

    var SVG_videoPlay = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z\"></path>\r\n</svg>\r\n";

    var SVG_videoPause = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z\"></path>\r\n</svg>\r\n";

    var SVG_headset = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z\"></path>\r\n</svg>\r\n";

    var SVG_monitor = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z\"></path>\r\n</svg>\r\n";

    var SVG_documentCopy = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z\"></path>\r\n</svg>\r\n";

    var SVG_picture = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z\"></path>\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z\"></path>\r\n</svg>\r\n";

    var SVG_circleClose = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z\"></path>\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896\"></path>\r\n</svg>\r\n";

    var SVG_view = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160\"></path>\r\n</svg>\r\n";

    var SVG_hide = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z\"></path>\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z\"></path>\r\n</svg>\r\n";

    var SVG_keyboard = "<svg viewBox=\"0 0 1123 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<path\r\n\t\td=\"M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z\"></path>\r\n\t<path\r\n\t\td=\"M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z\"></path>\r\n\t<path\r\n\t\td=\"M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z\"></path>\r\n</svg>\r\n";

    var SVG_arrowRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\">\r\n\t<path\r\n\t\td=\"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z\"></path>\r\n</svg>\r\n";

    var SVG_arrowLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\">\r\n\t<path\r\n\t\td=\"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z\"></path>\r\n</svg>\r\n";

    const PopsElementHandler = {
        /**
         * 获取遮罩层HTML
         * @param guid
         * @param zIndex z-index
         * @param style
         */
        getMaskHTML(guid, zIndex = 101, style = "") {
            zIndex = zIndex - 100;
            if (style.startsWith(";")) {
                style = style.replace(";", "");
            }
            return `<div class="pops-mask" data-guid="${guid}" style="z-index:${zIndex};${style}"></div>`;
        },
        /**
         * 获取动画层HTML
         * @param guid
         * @param type
         * @param config
         * @param html
         * @param bottomBtnHTML
         * @param zIndex
         */
        getAnimHTML(guid, type, config, html = "", bottomBtnHTML = "", zIndex) {
            let __config = config;
            let popsAnimStyle = "";
            let popsStyle = "";
            let popsPosition = __config.position || "";
            if (config.zIndex != null) {
                popsAnimStyle += `z-index: ${zIndex};`;
                popsStyle += `z-index: ${zIndex};`;
            }
            if (__config.width != null) {
                popsStyle += `width: ${__config.width};`;
            }
            if (__config.height != null) {
                popsStyle += `height: ${__config.height};`;
            }
            let hasBottomBtn = bottomBtnHTML.trim() === "" ? false : true;
            return /*html*/ `
		<div 
			class="pops-anim"
			anim="${__config.animation || ""}"
			style="${popsAnimStyle};"
			data-guid="${guid}">
            ${config.style != null
            ? `<style tyle="text/css">${config.style}</style>`
            : ""}
			<div
				class="pops ${config.class || ""}"
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
         * @param type
         * @param config
         */
        getHeaderBtnHTML(type, config) {
            if (!config.btn) {
                return "";
            }
            let __config_confirm = config;
            if (type !== "iframe" && !__config_confirm.btn?.close?.enable) {
                return "";
            }
            let resultHTML = "";
            // let btnStyle = "";
            let closeHTML = "";
            let __config_iframe = config;
            if (type === "iframe" && __config_iframe.topRightButton?.trim() !== "") {
                /* iframe的 */
                let topRightButtonHTML = "";
                __config_iframe.topRightButton.split("|").forEach((item) => {
                    item = item.toLowerCase();
                    topRightButtonHTML += `
                <button class="pops-header-control" type="${item}">
                    <i class="pops-icon">${pops.config.iconSVG[item]}</i>
                </button>`;
                });
                resultHTML = `
            <div class="pops-header-controls" data-margin>
                ${topRightButtonHTML}
            </div>`;
            }
            else {
                if (__config_confirm.btn?.close?.enable) {
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
         * @param type
         * @param config
         */
        getBottomBtnHTML(type, config) {
            if (!config.btn) {
                // 未设置btn参数
                return "";
            }
            let __config_confirm = config;
            if (!(config.btn?.ok?.enable ||
                __config_confirm.btn?.cancel?.enable ||
                __config_confirm.btn?.other?.enable)) {
                // 确定、取消、其它按钮都未启用直接返回
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
            if (__config_confirm.btn.reverse) {
                btnStyle += "flex-direction: row-reverse;";
            }
            if (config.btn?.ok?.enable) {
                /* 处理确定按钮的尺寸问题 */
                let okButtonSizeClassName = "";
                if (config.btn.ok.size === "large") {
                    okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
                }
                else if (config.btn.ok.size === "small") {
                    okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
                }
                let okIconHTML = "";
                let okIcon = __config_confirm.btn.ok.icon;
                if (okIcon !== "") {
                    // 判断图标是否是svg库内的
                    let iconHTML = "";
                    if (okIcon in pops.config.iconSVG) {
                        iconHTML = pops.config.iconSVG[okIcon];
                    }
                    else {
                        iconHTML = okIcon;
                    }
                    iconHTML = iconHTML || "";
                    okIconHTML = `
                <i class="pops-bottom-icon" is-loading="${config.btn.ok.iconIsLoading}">
                    ${iconHTML}
                </i>`;
                }
                okHTML = `
            <button 
                    class="pops-${type}-btn-ok ${okButtonSizeClassName}"
                    type="${__config_confirm.btn.ok?.type}"
					data-has-icon="${(__config_confirm.btn.ok.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.ok?.rightIcon}"
            >
            ${okIconHTML}
                <span>${config.btn.ok.text}</span>
            </button>`;
            }
            if (__config_confirm.btn?.cancel?.enable) {
                /* 处理取消按钮的尺寸问题 */
                let cancelButtonSizeClassName = "";
                if (__config_confirm.btn.cancel.size === "large") {
                    cancelButtonSizeClassName =
                        "pops-button-" + __config_confirm.btn.cancel.size;
                }
                else if (__config_confirm.btn.cancel.size === "small") {
                    cancelButtonSizeClassName =
                        "pops-button-" + __config_confirm.btn.cancel.size;
                }
                let cancelIconHTML = "";
                let cancelIcon = __config_confirm.btn.cancel.icon;
                if (cancelIcon !== "") {
                    let iconHTML = "";
                    // 判断图标是否是svg库内的
                    if (cancelIcon in pops.config.iconSVG) {
                        iconHTML = pops.config.iconSVG[cancelIcon];
                    }
                    else {
                        iconHTML = cancelIcon;
                    }
                    iconHTML = iconHTML || "";
                    cancelIconHTML = `
                <i class="pops-bottom-icon" is-loading="${__config_confirm.btn.cancel.iconIsLoading}">
                    ${iconHTML}
                </i>`;
                }
                cancelHTML = `
            <button
                    class="pops-${type}-btn-cancel ${cancelButtonSizeClassName}"
                    type="${__config_confirm.btn.cancel.type}"
					data-has-icon="${(__config_confirm.btn.cancel.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.cancel.rightIcon}"
            >
            ${cancelIconHTML}
                <span>${__config_confirm.btn.cancel.text}</span>
            </button>`;
            }
            if (__config_confirm.btn?.other?.enable) {
                /* 处理其它按钮的尺寸问题 */
                let otherButtonSizeClassName = "";
                if (__config_confirm.btn.other.size === "large") {
                    otherButtonSizeClassName =
                        "pops-button-" + __config_confirm.btn.other.size;
                }
                else if (__config_confirm.btn.other.size === "small") {
                    otherButtonSizeClassName =
                        "pops-button-" + __config_confirm.btn.other.size;
                }
                let otherIconHTML = "";
                let otherIcon = __config_confirm.btn.other.icon;
                if (otherIcon !== "") {
                    let iconHTML = "";
                    // 判断图标是否是svg库内的
                    if (otherIcon in pops.config.iconSVG) {
                        iconHTML = pops.config.iconSVG[otherIcon];
                    }
                    iconHTML = iconHTML || "";
                    otherIconHTML = `
                <i class="pops-bottom-icon" is-loading="${__config_confirm.btn.other.iconIsLoading}">
                    ${iconHTML}
                </i>`;
                }
                ohterHTML = `
            <button
                    class="pops-${type}-btn-other ${otherButtonSizeClassName}"
                    type="${__config_confirm.btn.other.type}"
					data-has-icon="${(__config_confirm.btn.other.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.other.rightIcon}"
            >
            ${otherIconHTML}
                <span>${__config_confirm.btn.other.text}</span>
            </button>`;
            }
            if (__config_confirm.btn.merge) {
                let flexStyle = "display: flex;";
                if (__config_confirm.btn.mergeReverse) {
                    flexStyle += "flex-direction: row-reverse;";
                }
                else {
                    flexStyle += "flex-direction: row;";
                }
                resultHTML = `
            <div class="pops-${type}-btn" style="${btnStyle}">
                ${ohterHTML}
                <div 
                    class="pops-${type}-btn-merge"
                    style="${flexStyle}">
                    ${okHTML}
                    ${cancelHTML}
                </div>
            </div>
            `;
            }
            else {
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
         * @param type
         * @param config
         */
        getHeaderStyle(type, config) {
            return {
                headerStyle: config?.title?.html ? config?.title?.style || "" : "",
                headerPStyle: config?.title?.html ? "" : config?.title?.style || "",
            };
        },
        /**
         * 获取内容style
         * @param type
         * @param config
         */
        getContentStyle(type, config) {
            return {
                contentStyle: config?.content?.html
                    ? config?.content?.style || ""
                    : "",
                contentPStyle: config?.content?.html
                    ? ""
                    : config?.content?.style || "",
            };
        },
        /**
         * 将html转换成元素
         * @param html
         */
        parseElement(html) {
            return popsUtils.parseTextToDOM(html);
        },
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
         * @param $shadowRoot 所在的shadowRoot
         * @param cssText 添加进ShadowRoot的CSS
         */
        handleInit($shadowRoot, cssText) {
            pops.init();
            if (!arguments.length) {
                return;
            }
            if (Array.isArray(cssText)) {
                for (let index = 0; index < cssText.length; index++) {
                    this.handleInit($shadowRoot, cssText[index]);
                }
            }
            else {
                let $css = popsDOMUtils.createElement("style", {
                    innerHTML: cssText,
                }, {
                    "data-type": "PopsHandler.handleInit",
                });
                $shadowRoot.appendChild($css);
            }
        },
        /**
         * 处理遮罩层
         * @param details 传递的配置
         */
        handleMask(details = {}) {
            let result = {
                maskElement: popsUtils.parseTextToDOM(details.maskHTML),
            };
            let isMaskClick = false;
            /**
             * 点击其它区域的事件
             * @param event
             */
            function clickEvent(event) {
                popsDOMUtils.preventEvent(event);
                // 获取该类型实例存储列表
                let targetLayer = pops.config.layer[details.type];
                function originalRun() {
                    if (details.config.mask.clickEvent.toClose) {
                        /* 关闭 */
                        PopsInstanceUtils.close(details.type, targetLayer, details.guid, details.config, details.animElement);
                    }
                    else if (details.config.mask.clickEvent.toHide) {
                        /* 隐藏 */
                        PopsInstanceUtils.hide(details.type, targetLayer, details.guid, details.config, details.animElement, result.maskElement);
                    }
                }
                if (typeof details.config.mask.clickCallBack === "function") {
                    details.config.mask.clickCallBack(originalRun, details.config);
                }
                else {
                    originalRun();
                }
                return false;
            }
            function isAnimElement(element) {
                return Boolean(element?.localName?.toLowerCase() === "div" &&
                    element.className &&
                    element.className === "pops-anim" &&
                    element.hasAttribute("anim"));
            }
            if (details.config.mask.clickEvent.toClose ||
                details.config.mask.clickEvent.toHide) {
                /* 判断按下的元素是否是pops-anim */
                popsDOMUtils.on(details.animElement, ["touchstart", "mousedown"], void 0, (event) => {
                    isMaskClick = isAnimElement(event.composedPath()[0]);
                });
                /* 如果有动画层，在动画层上监听点击事件 */
                popsDOMUtils.on(details.animElement, "click", void 0, (event) => {
                    if (isAnimElement(event.composedPath()[0]) &&
                        isMaskClick) {
                        return clickEvent(event);
                    }
                });
                /* 在遮罩层监听点击事件 */
                /* 如果有动画层，那么该点击事件触发不了 */
                popsDOMUtils.on(result.maskElement, "click", void 0, (event) => {
                    isMaskClick = true;
                    clickEvent(event);
                });
            }
            return result;
        },
        /**
         * 处理获取元素
         * @param {HTMLDivElement} animElement
         * @param type
         */
        handleQueryElement(animElement, type) {
            return {
                /**
                 * 主元素
                 */
                popsElement: animElement.querySelector(".pops[type-value"),
                /**
                 * 确认按钮
                 */
                btnOkElement: animElement.querySelector(`.pops-${type}-btn-ok`),
                /**
                 * 取消按钮
                 */
                btnCancelElement: animElement.querySelector(`.pops-${type}-btn-cancel`),
                /**
                 * 其它按钮
                 */
                btnOtherElement: animElement.querySelector(`.pops-${type}-btn-other`),
                /**
                 * 标题元素
                 */
                titleElement: animElement.querySelector(`.pops-${type}-title`),
                /**
                 * 输入框元素
                 */
                inputElement: animElement.querySelector(`.pops-${type}-content textarea[pops]`)
                    ? animElement.querySelector(`.pops-${type}-content textarea[pops]`)
                    : animElement.querySelector(`.pops-${type}-content input[pops]`),
                /**
                 * 顶部按钮控制层元素
                 */
                headerControlsElement: animElement.querySelector(".pops-header-controls"),
                /**
                 * iframe元素
                 */
                iframeElement: animElement.querySelector("iframe[pops]"),
                /**
                 * 加载中元素
                 */
                loadingElement: animElement.querySelector(".pops-loading"),
                /**
                 * 内容元素
                 */
                contentElement: animElement.querySelector(`.pops-${type}-content`),
                /**
                 * 内容侧边栏容器元素
                 */
                contentAsideElement: animElement.querySelector(`.pops-${type}-content aside.pops-${type}-aside`),
                /**
                 * 内容主要区域容器元素
                 */
                contentSectionContainerElement: animElement.querySelector(`.pops-${type}-content section.pops-${type}-container`),
                /**
                 * 内容加载中元素
                 */
                contentLoadingElement: animElement.querySelector(`.pops-${type}-content-global-loading`),
                /**
                 * 顶部缩小按钮
                 */
                headerMinBtnElement: animElement.querySelector(".pops-header-control[type='min']"),
                /**
                 * 顶部放大按钮
                 */
                headerMaxBtnElement: animElement.querySelector(".pops-header-control[type='max']"),
                /**
                 * 顶部恢复原样按钮
                 */
                headerMiseBtnElement: animElement.querySelector(".pops-header-control[type='mise']"),
                /**
                 * 顶部关闭按钮
                 */
                headerCloseBtnElement: animElement.querySelector(".pops-header-control[type='close']"),
                /**
                 * 文件夹列表元素
                 */
                folderListElement: animElement.querySelector(".pops-folder-list"),
                /**
                 * 文件夹列表顶部元素
                 */
                folderListHeaderElement: animElement.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),
                /**
                 * 文件夹列表行元素
                 */
                folderListHeaderRowElement: animElement.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),
                /**
                 * 文件夹列表tbody元素
                 */
                folderListBodyElement: animElement.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),
                /**
                 * 文件夹列表primary元素
                 */
                folderFileListBreadcrumbPrimaryElement: animElement.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),
                /**
                 * 文件夹排序按钮-文件名
                 */
                folderListSortFileNameElement: animElement.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),
                /**
                 * 文件夹排序按钮-修改时间
                 */
                folderListSortLatestTimeElement: animElement.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),
                /**
                 * 文件夹排序按钮-文件大小
                 */
                folderListSortFileSizeElement: animElement.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]'),
            };
        },
        /**
         * 获取事件配置
         * @param guid
         * @param $shadowContainer
         * @param $shadowRoot
         * @param mode 当前弹窗类型
         * @param animElement 动画层
         * @param popsElement 主元素
         * @param maskElement 遮罩层
         * @param config 当前配置
         */
        handleEventDetails(guid, $shadowContainer, $shadowRoot, mode, animElement, popsElement, maskElement, config) {
            return {
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
                element: animElement,
                animElement: animElement,
                popsElement: popsElement,
                maskElement: maskElement,
                mode: mode,
                guid: guid,
                close() {
                    PopsInstanceUtils.close(mode, pops.config.layer[mode], guid, config, animElement);
                },
                hide() {
                    PopsInstanceUtils.hide(mode, pops.config.layer[mode], guid, config, animElement, maskElement);
                },
                show() {
                    PopsInstanceUtils.show(mode, pops.config.layer[mode], guid, config, animElement, maskElement);
                },
            };
        },
        /**
         * 获取loading的事件配置
         * @param guid
         * @param mode 当前弹窗类型
         * @param animElement 动画层
         * @param popsElement 主元素
         * @param maskElement 遮罩层
         * @param config 当前配置
         */
        handleLoadingEventDetails(guid, mode, animElement, popsElement, maskElement, config) {
            return {
                element: animElement,
                animElement: animElement,
                popsElement: popsElement,
                maskElement: maskElement,
                mode: mode,
                guid: guid,
                close() {
                    PopsInstanceUtils.close(mode, pops.config.layer[mode], guid, config, animElement);
                },
                hide() {
                    PopsInstanceUtils.hide(mode, pops.config.layer[mode], guid, config, animElement, maskElement);
                },
                show() {
                    PopsInstanceUtils.show(mode, pops.config.layer[mode], guid, config, animElement, maskElement);
                },
            };
        },
        /**
         * 处理返回的配置，针对popsHandler.handleEventDetails
         */
        handleResultDetails(details) {
            let resultDetails = Object.assign({}, details);
            popsUtils.delete(resultDetails, "type");
            popsUtils.delete(resultDetails, "function");
            return resultDetails;
        },
        /**
         * 处理点击事件
         * @param type 当前按钮类型
         * @param $btn 按钮元素
         * @param eventDetails 事件配置，由popsHandler.handleEventDetails创建的
         * @param callback 点击回调
         */
        handleClickEvent(type, $btn, eventDetails, callback) {
            popsDOMUtils.on($btn, "click", (event) => {
                let extraParam = {
                    type: type,
                };
                callback(Object.assign(eventDetails, extraParam), event);
            }, {
                capture: true,
            });
        },
        /**
         * 全局监听键盘事件
         * @param keyName 键名|键值
         * @param otherKeyList 组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
         * @param callback 回调函数
         */
        handleKeyboardEvent(keyName, otherKeyList = [], callback) {
            let keyboardEvent = function (event) {
                let _keyName = event.code || event.key;
                let _keyValue = event.charCode || event.keyCode || event.which;
                if (otherKeyList.includes("ctrl") && !event.ctrlKey) {
                    return;
                }
                if (otherKeyList.includes("alt") && !event.altKey) {
                    return;
                }
                if (otherKeyList.includes("meta") && !event.metaKey) {
                    return;
                }
                if (otherKeyList.includes("shift") && !event.shiftKey) {
                    return;
                }
                if (typeof keyName === "string" && keyName === _keyName) {
                    callback && callback(event);
                }
                else if (typeof keyName === "number" && keyName === _keyValue) {
                    callback && callback(event);
                }
            };
            popsDOMUtils.on(PopsCore.globalThis, "keydown", keyboardEvent, {
                capture: true,
            });
            return {
                removeKeyboardEvent() {
                    popsDOMUtils.off(globalThis, "keydown", keyboardEvent, {
                        capture: true,
                    });
                },
            };
        },
        /**
         * 处理prompt的点击事件
         * @param type 触发事件类型
         * @param inputElement 输入框
         * @param  $btn 按钮元素
         * @param eventDetails 事件配置，由popsHandler.handleEventDetails创建的
         * @param callback 点击回调
         */
        handlePromptClickEvent(type, inputElement, $btn, eventDetails, callback) {
            popsDOMUtils.on($btn, "click", (event) => {
                // 额外参数
                let extraParam = {
                    type: type,
                    text: inputElement.value,
                };
                callback(Object.assign(eventDetails, extraParam), event);
            }, {
                capture: true,
            });
        },
        /**
         * 把配置的z-index配置转为数字
         * @param zIndex
         */
        handleZIndex(zIndex) {
            if (typeof zIndex === "function") {
                return zIndex();
            }
            else {
                return zIndex;
            }
        },
        /**
         * 处理config.only
         * @param type 当前弹窗类型
         * @param config 配置
         */
        handleOnly(type, config) {
            if (config.only) {
                if (type === "loading" ||
                    type === "tooltip" ||
                    type === "rightClickMenu") {
                    PopsInstanceUtils.removeInstance([pops.config.layer[type]], "", true);
                }
                else {
                    PopsInstanceUtils.removeInstance([
                        pops.config.layer.alert,
                        pops.config.layer.confirm,
                        pops.config.layer.prompt,
                        pops.config.layer.iframe,
                        pops.config.layer.drawer,
                        pops.config.layer.folder,
                        pops.config.layer.panel,
                    ], "", true);
                }
            }
            else {
                // 对配置进行处理
                // 选择配置的z-index和已有的pops实例的最大z-index值
                if (typeof config.zIndex === "function") {
                    let originZIndexFn = config.zIndex;
                    config.zIndex = () => {
                        const { zIndex: maxZIndex } = PopsInstanceUtils.getPopsMaxZIndex(PopsHandler.handleZIndex(originZIndexFn) + 100);
                        return maxZIndex;
                    };
                }
                else {
                    const { zIndex: maxZIndex } = PopsInstanceUtils.getPopsMaxZIndex(PopsHandler.handleZIndex(config.zIndex) + 100);
                    config.zIndex = maxZIndex;
                }
            }
            return config;
        },
        /**
         * 处理把已创建的元素保存到内部环境中
         * @param type 当前弹窗类型
         * @param value
         */
        handlePush(type, value) {
            pops.config.layer[type].push(value);
        },
    };

    class PopsAlert {
        constructor(details) {
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
                        size: void 0,
                        enable: true,
                        icon: void 0,
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
                    clickCallBack: void 0,
                },
                drag: false,
                dragLimit: true,
                dragExtraDistance: 3,
                dragMoveCallBack() { },
                dragEndCallBack() { },
                forbiddenScroll: false,
                style: null,
                beforeAppendToPageCallBack() { },
            };
            config = popsUtils.assign(config, details);
            let guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const PopsType = "alert";
            config = PopsHandler.handleOnly(PopsType, config);
            // 先把z-index提取出来
            let zIndex = PopsHandler.handleZIndex(config.zIndex);
            let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
            let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
            let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
            let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
            let { contentStyle, contentPStyle } = PopsElementHandler.getContentStyle(PopsType, config);
            let animHTML = PopsElementHandler.getAnimHTML(guid, PopsType, config, 
            /*html*/ `
			<div 
				class="pops-alert-title"
				style="text-align: ${config.title.position};
				${headerStyle}">
				${config.title.html
            ? config.title.text
            : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
				${headerBtnHTML}
			</div>
			<div class="pops-alert-content" style="${contentStyle}">
				${config.content.html
            ? config.content.text
            : `<p pops style="${contentPStyle}">${config.content.text}</p>`}
			</div>
			${bottomBtnHTML}`, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            let $anim = PopsElementHandler.parseElement(animHTML);
            let { popsElement: $pops, headerCloseBtnElement: $headerCloseBtn, btnOkElement, titleElement: $title, } = PopsHandler.handleQueryElement($anim, PopsType);
            /** 遮罩层元素 */
            let $mask = null;
            /** 已创建的元素列表 */
            let elementList = [$anim];
            /* 遮罩层元素 */
            if (config.mask.enable) {
                let _handleMask_ = PopsHandler.handleMask({
                    type: PopsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = _handleMask_.maskElement;
                elementList.push($mask);
            }
            /* 处理返回的配置 */
            let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
            /* 为顶部右边的关闭按钮添加点击事件 */
            PopsHandler.handleClickEvent("close", $headerCloseBtn, eventDetails, config.btn.close.callback);
            /* 为底部ok按钮添加点击事件 */
            PopsHandler.handleClickEvent("ok", btnOkElement, eventDetails, config.btn.ok.callback);
            /* 创建到页面中 */
            popsDOMUtils.append($shadowRoot, elementList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            if ($mask != null) {
                // 添加遮罩层
                $anim.after($mask);
            }
            /* 保存 */
            PopsHandler.handlePush(PopsType, {
                guid: guid,
                animElement: $anim,
                popsElement: $pops,
                maskElement: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
            });
            /* 拖拽 */
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            return PopsHandler.handleResultDetails(eventDetails);
        }
    }

    class PopsConfirm {
        constructor(details) {
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
                        size: void 0,
                        icon: void 0,
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
                        size: void 0,
                        icon: void 0,
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
                        size: void 0,
                        icon: void 0,
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
                    clickCallBack: void 0,
                },
                drag: false,
                dragLimit: true,
                dragExtraDistance: 3,
                dragMoveCallBack() { },
                dragEndCallBack() { },
                forbiddenScroll: false,
                style: null,
                beforeAppendToPageCallBack() { },
            };
            config = popsUtils.assign(config, details);
            let guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const PopsType = "confirm";
            config = PopsHandler.handleOnly(PopsType, config);
            // 先把z-index提取出来
            let zIndex = PopsHandler.handleZIndex(config.zIndex);
            let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
            let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
            let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
            let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
            let { contentStyle, contentPStyle } = PopsElementHandler.getContentStyle(PopsType, config);
            let animHTML = PopsElementHandler.getAnimHTML(guid, PopsType, config, 
            /*html*/ `
            <div class="pops-confirm-title" style="text-align: ${config.title.position};${headerStyle}">
                            ${config.title.html
            ? config.title.text
            : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
                ${headerBtnHTML}
                        </div>
                        <div class="pops-confirm-content" style="${contentStyle}">
                ${config.content.html
            ? config.content.text
            : `<p pops style="${contentPStyle}">${config.content.text}</p>`}
                
                        </div>
                        ${bottomBtnHTML}
            `, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            let $anim = PopsElementHandler.parseElement(animHTML);
            let { popsElement: $pops, titleElement: $title, headerCloseBtnElement: $btnClose, btnOkElement: $btnOk, btnCancelElement: $btnCancel, btnOtherElement: $btnOther, } = PopsHandler.handleQueryElement($anim, PopsType);
            /**
             * 遮罩层元素
             */
            let $mask = null;
            /**
             * 已创建的元素列表
             */
            let elementList = [$anim];
            if (config.mask.enable) {
                // 启用遮罩层
                let _handleMask_ = PopsHandler.handleMask({
                    type: PopsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = _handleMask_.maskElement;
                elementList.push($mask);
            }
            let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
            PopsHandler.handleClickEvent("close", $btnClose, eventDetails, config.btn.close.callback);
            PopsHandler.handleClickEvent("ok", $btnOk, eventDetails, config.btn.ok.callback);
            PopsHandler.handleClickEvent("cancel", $btnCancel, eventDetails, config.btn.cancel.callback);
            PopsHandler.handleClickEvent("other", $btnOther, eventDetails, config.btn.other.callback);
            /* 创建到页面中 */
            popsDOMUtils.append($shadowRoot, elementList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            if ($mask != null) {
                $anim.after($mask);
            }
            PopsHandler.handlePush(PopsType, {
                guid: guid,
                animElement: $anim,
                popsElement: $pops,
                maskElement: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
            });
            /* 拖拽 */
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            return PopsHandler.handleResultDetails(eventDetails);
        }
    }

    class PopsPrompt {
        constructor(details) {
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
                        size: void 0,
                        icon: void 0,
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
                        size: void 0,
                        icon: void 0,
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
                        size: void 0,
                        icon: void 0,
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
                    clickCallBack: void 0,
                },
                drag: false,
                dragLimit: true,
                dragExtraDistance: 3,
                dragMoveCallBack() { },
                dragEndCallBack() { },
                forbiddenScroll: false,
                style: null,
                beforeAppendToPageCallBack() { },
            };
            config = popsUtils.assign(config, details);
            let guid = popsUtils.getRandomGUID();
            const PopsType = "prompt";
            config = PopsHandler.handleOnly(PopsType, config);
            // 先把z-index提取出来
            let zIndex = PopsHandler.handleZIndex(config.zIndex);
            let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
            let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
            let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
            let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
            let { contentPStyle } = PopsElementHandler.getContentStyle(PopsType, config);
            let animHTML = PopsElementHandler.getAnimHTML(guid, PopsType, config, 
            /*html*/ `
            <div class="pops-prompt-title" style="text-align: ${config.title.position};${headerStyle}">
            ${config.title.html
            ? config.title.text
            : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
            ${headerBtnHTML}
            </div>
            <div class="pops-prompt-content" style="${contentPStyle}">
            ${config.content.row
            ? '<textarea pops="" placeholder="' +
                config.content.placeholder +
                '"></textarea>'
            : '<input pops="" placeholder="' +
                config.content.placeholder +
                '" type="' +
                (config.content.password ? "password" : "text") +
                '">'}
            </div>
        	${bottomBtnHTML}
            `, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            let $anim = PopsElementHandler.parseElement(animHTML);
            let { popsElement: $pops, inputElement: $input, headerCloseBtnElement: $btnClose, btnOkElement: $btnOk, btnCancelElement: $btnCancel, btnOtherElement: $btnOther, titleElement: $title, } = PopsHandler.handleQueryElement($anim, PopsType);
            /**
             * 遮罩层元素
             */
            let $mask = null;
            /**
             * 已创建的元素列表
             */
            let elementList = [$anim];
            if (config.mask.enable) {
                // 启用遮罩层
                let _handleMask_ = PopsHandler.handleMask({
                    type: PopsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = _handleMask_.maskElement;
                elementList.push($mask);
            }
            let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
            /* 输入框赋值初始值 */
            $input.value = config.content.text;
            PopsHandler.handlePromptClickEvent("close", $input, $btnClose, eventDetails, config.btn.close.callback);
            PopsHandler.handlePromptClickEvent("ok", $input, $btnOk, eventDetails, config.btn.ok.callback);
            PopsHandler.handlePromptClickEvent("cancel", $input, $btnCancel, eventDetails, config.btn.cancel.callback);
            PopsHandler.handlePromptClickEvent("other", $input, $btnOther, eventDetails, config.btn.other.callback);
            /* 创建到页面中 */
            popsDOMUtils.append($shadowRoot, elementList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            if ($mask != null) {
                $anim.after($mask);
            }
            PopsHandler.handlePush(PopsType, {
                guid: guid,
                animElement: $anim,
                popsElement: $pops,
                maskElement: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
            });
            /* 拖拽 */
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            /* 设置自动获取焦点 */
            if (config.content.focus) {
                $input?.focus();
            }
            return PopsHandler.handleResultDetails(eventDetails);
        }
    }

    class PopsLoading {
        constructor(details) {
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
                    clickCallBack: void 0,
                },
                animation: "pops-anim-fadein-zoom",
                forbiddenScroll: false,
                style: null,
                addIndexCSS: true,
            };
            config = popsUtils.assign(config, details);
            let guid = popsUtils.getRandomGUID();
            const PopsType = "loading";
            config = PopsHandler.handleOnly(PopsType, config);
            // 先把z-index提取出来
            let zIndex = PopsHandler.handleZIndex(config.zIndex);
            let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
            let { contentPStyle } = PopsElementHandler.getContentStyle("loading", config);
            let animHTML = PopsElementHandler.getAnimHTML(guid, PopsType, config, 
            /*html*/ `
            <div class="pops-loading-content">
                ${config.addIndexCSS
            ? `
                <style data-model-name="index">${pops.config.cssText.index}</style>
                <style data-model-name="anim">${pops.config.cssText.anim}</style>
                <style data-model-name="common">${pops.config.cssText.common}</style>
                `
            : ""}
                <style data-model-name="loadingCSS">
                    ${pops.config.cssText.loadingCSS}
                </style>
            ${config.style != null ? `<style>${config.style}</style>` : ""}
            <p pops style="${contentPStyle}">${config.content.text}</p>
            </div>
            `, "", zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            let $anim = PopsElementHandler.parseElement(animHTML);
            let { popsElement: $pops } = PopsHandler.handleQueryElement($anim, PopsType);
            /**
             * 遮罩层元素
             */
            let $mask = null;
            /**
             * 已创建的元素列表
             */
            let elementList = [$anim];
            if (config.mask.enable) {
                // 创建遮罩层
                let _handleMask_ = PopsHandler.handleMask({
                    type: PopsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = _handleMask_.maskElement;
                elementList.push($mask);
            }
            let eventDetails = PopsHandler.handleLoadingEventDetails(guid, PopsType, $anim, $pops, $mask, config);
            popsDOMUtils.append(config.parent, elementList);
            if ($mask != null) {
                $anim.after($mask);
            }
            PopsHandler.handlePush(PopsType, {
                guid: guid,
                animElement: $anim,
                popsElement: $pops,
                maskElement: $mask,
            });
            return PopsHandler.handleResultDetails(eventDetails);
        }
    }

    class PopsIframe {
        constructor(details) {
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
            PopsHandler.handleInit($shadowRoot, [
                pops.config.cssText.index,
                pops.config.cssText.ninePalaceGridPosition,
                pops.config.cssText.scrollbar,
                pops.config.cssText.anim,
                pops.config.cssText.common,
                pops.config.cssText.iframeCSS,
            ]);
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
                    clickCallBack: void 0,
                },
                animation: "pops-anim-fadein-zoom",
                position: "center",
                drag: false,
                dragLimit: true,
                dragExtraDistance: 3,
                dragMoveCallBack() { },
                dragEndCallBack() { },
                width: "300px",
                height: "250px",
                topRightButton: "min|max|mise|close",
                sandbox: false,
                forbiddenScroll: false,
                loadEndCallBack() { },
                btn: {
                    min: {
                        callback() { },
                    },
                    max: {
                        callback() { },
                    },
                    mise: {
                        callback() { },
                    },
                    close: {
                        callback() { },
                    },
                },
                style: null,
                beforeAppendToPageCallBack() { },
            };
            config = popsUtils.assign(config, details);
            if (config.url == null) {
                throw "config.url不能为空";
            }
            let guid = popsUtils.getRandomGUID();
            const PopsType = "iframe";
            config = PopsHandler.handleOnly(PopsType, config);
            let maskExtraStyle = config.animation != null && config.animation != ""
                ? "position:absolute;"
                : "";
            // 先把z-index提取出来
            let zIndex = PopsHandler.handleZIndex(config.zIndex);
            let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex, maskExtraStyle);
            let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
            let iframeLoadingHTML = '<div class="pops-loading"></div>';
            let titleText = config.title.text.trim() !== "" ? config.title.text : config.url;
            let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
            let animHTML = PopsElementHandler.getAnimHTML(guid, PopsType, config, 
            /*html*/ `
            <div 
                class="pops-iframe-title"
                style="text-align: ${config.title.position};${headerStyle}"
            >
                ${config.title.html
            ? titleText
            : `<p pops style="${headerPStyle}">${titleText}</p>`}
                ${headerBtnHTML}
            </div>
                        <div class="pops-iframe-content">
                <div class="pops-iframe-content-global-loading"></div>
                <iframe
                        src="${config.url}"
                        pops
                        ${config.sandbox
            ? "sandbox='allow-forms allow-same-origin allow-scripts'"
            : ""}>
                </iframe>
                </div>
                ${config.loading.enable ? iframeLoadingHTML : ""}
            `, "", zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            let $anim = PopsElementHandler.parseElement(animHTML);
            let { popsElement: $pops, headerCloseBtnElement, headerControlsElement, titleElement: $title, iframeElement: $iframe, loadingElement, contentLoadingElement: $contentLoading, headerMinBtnElement, headerMaxBtnElement, headerMiseBtnElement, } = PopsHandler.handleQueryElement($anim, PopsType);
            /**
             * 遮罩层元素
             */
            let $mask = null;
            /**
             * 已创建的元素列表
             */
            let elementList = [$anim];
            if (config.mask.enable) {
                let _handleMask_ = PopsHandler.handleMask({
                    type: PopsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = _handleMask_.maskElement;
                elementList.push($mask);
            }
            let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
            eventDetails["iframeElement"] = $iframe;
            popsDOMUtils.on($anim, popsDOMUtils.getAnimationEndNameList(), function () {
                /* 动画加载完毕 */
                $anim.style.width = "0%";
                $anim.style.height = "0%";
            });
            popsDOMUtils.on($iframe, "load", () => {
                /* iframe加载中... */
                loadingElement?.remove();
                $contentLoading.style.animation = "iframeLoadingChange_85 0.3s forwards";
                popsDOMUtils.on($contentLoading, popsDOMUtils.getAnimationEndNameList(), () => {
                    /* 动画加载完毕就移除 */
                    $contentLoading.remove();
                });
                if (config.title.text.trim() === "" && $iframe.contentDocument) {
                    /* 同域名下的才可以获取网页标题 */
                    $title.querySelector("p").innerText =
                        $iframe.contentDocument.title;
                }
                config.loadEndCallBack(eventDetails);
            });
            /* 创建到页面中 */
            popsDOMUtils.append($shadowRoot, elementList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            if ($mask != null) {
                $anim.after($mask);
            }
            /* 拖拽 */
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            let normalLeft = "";
            /* 最小化按钮点击事件 */
            popsDOMUtils.on(headerMinBtnElement, "click", (event) => {
                /**
                 * 所有最小化的iframe数组
                 */
                let allMinElementList = [];
                pops.config.layer.iframe.forEach((item) => {
                    if (item.animElement != $anim &&
                        item.popsElement.getAttribute("type-module") === "min") {
                        allMinElementList.push(item.popsElement);
                    }
                });
                let maxLeftValue = allMinElementList.length
                    ? allMinElementList.length * 205
                    : 0;
                $pops.style.transitionDuration = "";
                normalLeft = $pops.style.left;
                $pops.style.left = maxLeftValue + "px";
                $pops.setAttribute("type-module", "min");
                $anim
                    .querySelector(".pops-header-controls")
                    ?.setAttribute("type", "max");
                config.btn.min.callback(eventDetails, event);
            }, {
                capture: true,
            });
            /* 最大化按钮点击事件 */
            popsDOMUtils.on(headerMaxBtnElement, "click", (event) => {
                $pops.style.transitionDuration = "";
                normalLeft = $pops.style.left;
                $pops.removeAttribute("type-module");
                $pops.setAttribute("type-module", "max");
                headerControlsElement.setAttribute("type", "max");
                headerMaxBtnElement.style.setProperty("display", "none");
                headerMiseBtnElement.style.setProperty("display", "");
                config.btn.max.callback(eventDetails, event);
            }, {
                capture: true,
            });
            /* 先隐藏窗口化按钮 */
            headerMiseBtnElement?.style?.setProperty("display", "none");
            /* 窗口化按钮点击事件 */
            popsDOMUtils.on(headerMiseBtnElement, "click", (event) => {
                $pops.style.transitionDuration = "";
                $pops.style.left = normalLeft;
                headerControlsElement.removeAttribute("type");
                $pops.removeAttribute("type-module");
                /**
                 * 所有最小化的iframe数组
                 */
                let allMinElementList = [];
                pops.config.layer.iframe.forEach((item) => {
                    if (item.animElement != $anim &&
                        $pops.getAttribute("type-module") === "min") {
                        allMinElementList.push(item.popsElement);
                    }
                });
                allMinElementList.sort(PopsInstanceUtils.sortElementListByProperty((obj) => {
                    return parseInt(getComputedStyle(obj).left);
                }, (obj) => {
                    return parseInt(getComputedStyle(obj).left);
                }, false));
                allMinElementList.forEach((item, index) => {
                    item.style.left = index * 205 + "px";
                });
                headerMiseBtnElement.style.setProperty("display", "none");
                headerMaxBtnElement.style.setProperty("display", "");
                config.btn.mise.callback(eventDetails, event);
            }, {
                capture: true,
            });
            /* 关闭按钮点击事件 */
            popsDOMUtils.on(headerCloseBtnElement, "click", (event) => {
                PopsInstanceUtils.removeInstance([pops.config.layer.iframe], guid, false);
                setTimeout(() => {
                    let allIsMinElementList = [];
                    pops.config.layer.iframe.forEach((item) => {
                        if (item.animElement != $anim &&
                            $pops.getAttribute("type-module") === "min") {
                            allIsMinElementList.push(item.popsElement);
                        }
                    });
                    allIsMinElementList.sort(PopsInstanceUtils.sortElementListByProperty((obj) => {
                        return parseInt(getComputedStyle(obj).left);
                    }, (obj) => {
                        return parseInt(getComputedStyle(obj).left);
                    }, false));
                    allIsMinElementList.forEach((item, index) => {
                        item.style.left = index * 205 + "px";
                    });
                }, 1000 * 0.3);
                config.btn.close.callback(eventDetails, event);
            }, {
                capture: true,
            });
            PopsHandler.handlePush(PopsType, {
                guid: guid,
                animElement: $anim,
                popsElement: $pops,
                maskElement: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
            });
            let result = PopsHandler.handleResultDetails(eventDetails);
            return result;
        }
    }

    class PopsTooltip {
        constructor(details) {
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
            PopsHandler.handleInit($shadowRoot, [
                pops.config.cssText.index,
                pops.config.cssText.anim,
                pops.config.cssText.common,
                pops.config.cssText.tooltipCSS,
            ]);
            let config = {
                // @ts-ignore
                target: null,
                content: "默认文字",
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
                showBeforeCallBack() { },
                showAfterCallBack() { },
                closeBeforeCallBack() { },
                closeAfterCallBack() { },
                arrowDistance: 12.5,
                otherDistance: 0,
                style: "",
                beforeAppendToPageCallBack() { },
            };
            config = popsUtils.assign(config, details);
            if (!(config.target instanceof HTMLElement)) {
                throw "config.target 必须是HTMLElement类型";
            }
            let guid = popsUtils.getRandomGUID();
            const PopsType = "tooltip";
            config = PopsHandler.handleOnly(PopsType, config);
            function getContent() {
                return typeof config.content === "function"
                    ? config.content()
                    : config.content;
            }
            /**
             * 获取悬浮提示的元素信息
             */
            function getToolTipElementInfo() {
                let _toolTipHTML_ = `<div class="pops-tip"></div>`;
                let _toolTipElement_ = popsUtils.parseTextToDOM(_toolTipHTML_);
                if (typeof config.className === "string" &&
                    config.className.trim() !== "") {
                    popsDOMUtils.addClassName(_toolTipElement_, config.className);
                }
                _toolTipElement_.setAttribute("data-guid", guid);
                _toolTipElement_.style.zIndex = PopsHandler.handleZIndex(config.zIndex).toString();
                _toolTipElement_.innerHTML = `<div style="text-align: center;">${getContent()}</div>`;
                /* 箭头元素 */
                let _toolTipArrowHTML_ = '<div class="pops-tip-arrow"></div>';
                let _toolTipArrowNode_ = popsUtils.parseTextToDOM(_toolTipArrowHTML_);
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
            config.position =
                config.position.toLowerCase();
            let { toolTipElement } = getToolTipElementInfo();
            /**
             * 设置 提示框的位置
             */
            function setToolTipPosition(positionDetails) {
                let positionDetail = positionDetails[config.position.toUpperCase()];
                if (positionDetail) {
                    toolTipElement.style.left = positionDetail.left + "px";
                    toolTipElement.style.top = positionDetail.top + "px";
                    toolTipElement.setAttribute("data-motion", positionDetail.motion);
                    toolTipElement
                        .querySelector(".pops-tip-arrow")
                        ?.setAttribute("data-position", positionDetail.arrow);
                }
                else {
                    console.error("不存在该位置", config.position);
                }
            }
            /**
             * 获取 提示框的位置
             * @param targetElement 目标元素
             * @param arrowDistance 箭头和目标元素的距离
             * @param otherDistance 其它位置的偏移
             */
            function getToolTipPosition(targetElement, arrowDistance, otherDistance) {
                let targetElement_width = popsDOMUtils.offset(targetElement).width;
                let targetElement_height = popsDOMUtils.offset(targetElement).height;
                let targetElement_top = popsDOMUtils.offset(targetElement).top;
                // let targetElement_bottom = popsDOMUtils.offset(targetElement).bottom;
                let targetElement_left = popsDOMUtils.offset(targetElement).left;
                // let targetElement_right = popsDOMUtils.offset(targetElement).right;
                let toolTipElement_width = popsDOMUtils.outerWidth(toolTipElement);
                let toolTipElement_height = popsDOMUtils.outerHeight(toolTipElement);
                /* 目标元素的x轴的中间位置 */
                let targetElement_X_center_pos = targetElement_left + targetElement_width / 2 - toolTipElement_width / 2;
                /* 目标元素的Y轴的中间位置 */
                let targetElement_Y_center_pos = targetElement_top +
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
                if (!popsUtils.contains($shadowRoot, toolTipElement)) {
                    popsDOMUtils.append($shadowRoot, toolTipElement);
                }
                if (!popsUtils.contains($shadowContainer)) {
                    if (typeof config.beforeAppendToPageCallBack === "function") {
                        config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
                    }
                    popsDOMUtils.append(document.body, $shadowContainer);
                }
                setToolTipPosition(getToolTipPosition(config.target, config.arrowDistance, config.otherDistance));
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
                toolTipElement.setAttribute("data-motion", toolTipElement.getAttribute("data-motion").replace("fadeIn", "fadeOut"));
                if (typeof config.closeAfterCallBack === "function") {
                    config.closeAfterCallBack(toolTipElement);
                }
            }
            /**
             * 绑定 显示事件
             */
            function onShowEvent() {
                popsDOMUtils.on(config.target, config.triggerShowEventName, showToolTipNode, config.eventOption);
            }
            /**
             * 绑定 关闭事件
             */
            function onCloseEvent() {
                popsDOMUtils.on(config.target, config.triggerCloseEventName, closeToolTipNode, config.eventOption);
            }
            /**
             * 取消绑定 显示事件
             */
            function offShowEvent() {
                popsDOMUtils.off(config.target, config.triggerShowEventName, showToolTipNode, {
                    capture: true,
                });
            }
            /**
             * 取消绑定 关闭事件
             */
            function offCloseEvent() {
                popsDOMUtils.off(config.target, config.triggerCloseEventName, closeToolTipNode, {
                    capture: true,
                });
            }
            /**
             * 即使存在动画属性，但是当前设置的动画Out结束后移除元素
             */
            function endEvent() {
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
                        popsDOMUtils.on(toolTipElement, popsDOMUtils.getAnimationEndNameList(), endEvent, config.eventOption);
                        closeToolTipNode();
                    },
                    off: null,
                    on: null,
                };
            }
            else {
                /* 事件触发才显示 */
                /**
                 * 当鼠标|手触摸，暂停当前动画
                 */
                popsDOMUtils.on(toolTipElement, "mouseenter touchstart", () => {
                    toolTipElement.style.animationPlayState = "paused";
                    // if (parseInt(getComputedStyle(toolTipElement)) > 0.5) {
                    // toolTipElement.style.animationPlayState = "paused";
                    // }
                }, config.eventOption);
                /**
                 * 当鼠标|手离开，开始当前动画
                 */
                popsDOMUtils.on(toolTipElement, "mouseleave touchend", () => {
                    toolTipElement.style.animationPlayState = "running";
                }, config.eventOption);
                popsDOMUtils.on(toolTipElement, popsDOMUtils.getAnimationEndNameList(), endEvent, config.eventOption);
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
        }
    }

    class PopsDrawer {
        constructor(details) {
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
            let config = {
                title: {
                    enable: true,
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
                        size: void 0,
                        icon: void 0,
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
                        size: void 0,
                        icon: void 0,
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
                        size: void 0,
                        icon: void 0,
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
                    clickCallBack: void 0,
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
                style: null,
                beforeAppendToPageCallBack() { },
                forbiddenScroll: false,
            };
            config = popsUtils.assign(config, details);
            let guid = popsUtils.getRandomGUID();
            const PopsType = "drawer";
            config = PopsHandler.handleOnly(PopsType, config);
            // 先把z-index提取出来
            let zIndex = PopsHandler.handleZIndex(config.zIndex);
            let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
            let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
            let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
            let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
            let { contentStyle, contentPStyle } = PopsElementHandler.getContentStyle(PopsType, config);
            let animHTML = PopsElementHandler.getAnimHTML(guid, PopsType, config, 
            /*html*/ `
            ${config.title.enable
            ? `
            <div class="pops-${PopsType}-title" style="${headerStyle}">
                ${config.title.html
                ? config.title.text
                : `<p 
                            pops
                            style="
                                width: 100%;
                                text-align: ${config.title.position};
                                ${headerPStyle}">${config.title.text}</p>`}
                ${headerBtnHTML}
            </div>
            `
            : ""}
            
            <div class="pops-${PopsType}-content" style="${contentStyle}">
                ${config.content.html
            ? config.content.text
            : `<p pops style="${contentPStyle}">${config.content.text}</p>`}
            </div>

            ${bottomBtnHTML}
            `, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            let $anim = PopsElementHandler.parseElement(animHTML);
            let { popsElement, headerCloseBtnElement, btnCancelElement, btnOkElement, btnOtherElement, } = PopsHandler.handleQueryElement($anim, PopsType);
            let $pops = popsElement;
            let $headerCloseBtn = headerCloseBtnElement;
            let $btnCancel = btnCancelElement;
            let $btnOk = btnOkElement;
            let $btnOther = btnOtherElement;
            /**
             * 遮罩层元素
             */
            let $mask = null;
            /**
             * 已创建的元素列表
             */
            let elementList = [$anim];
            if (config.mask.enable) {
                let _handleMask_ = PopsHandler.handleMask({
                    type: PopsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = _handleMask_.maskElement;
                elementList.push($mask);
            }
            let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
            /* 处理方向 */
            $pops.setAttribute("direction", config.direction);
            /* 处理border-radius */
            /* 处理动画前的宽高 */
            if (config.direction === "top") {
                $pops.style.setProperty("height", "0");
                $pops.style.setProperty("border-radius", `0px 0px ${config.borderRadius}px ${config.borderRadius}px`);
            }
            else if (config.direction === "bottom") {
                $pops.style.setProperty("height", "0");
                $pops.style.setProperty("border-radius", `${config.borderRadius}px ${config.borderRadius}px 0px 0px`);
            }
            else if (config.direction === "left") {
                $pops.style.setProperty("width", "0");
                $pops.style.setProperty("border-radius", `0px ${config.borderRadius}px 0px ${config.borderRadius}px`);
            }
            else if (config.direction === "right") {
                $pops.style.setProperty("width", "0");
                $pops.style.setProperty("border-radius", `${config.borderRadius}px 0px ${config.borderRadius}px 0px`);
            }
            /* 按下Esc键触发关闭 */
            if (config.closeOnPressEscape) {
                PopsHandler.handleKeyboardEvent("Escape", [], function () {
                    eventDetails.close();
                });
            }
            /* 待处理的点击事件列表 */
            let needHandleClickEventList = [
                {
                    type: "close",
                    ele: $headerCloseBtn,
                },
                {
                    type: "cancel",
                    ele: $btnCancel,
                },
                {
                    type: "ok",
                    ele: $btnOk,
                },
                {
                    type: "other",
                    ele: $btnOther,
                },
            ];
            needHandleClickEventList.forEach((item) => {
                PopsHandler.handleClickEvent(item.type, item.ele, eventDetails, (_eventDetails_) => {
                    if (typeof config.btn[item.type].callback === "function") {
                        config.btn[item.type].callback(_eventDetails_);
                    }
                });
            });
            /* 先隐藏，然后根据config.openDelay来显示 */
            elementList.forEach((element) => {
                element.style.setProperty("display", "none");
                if (["top"].includes(config.direction)) {
                    $pops.style.setProperty("height", config.size.toString());
                    $pops.style.setProperty("transform", "translateY(-100%)");
                }
                else if (["bottom"].includes(config.direction)) {
                    $pops.style.setProperty("height", config.size.toString());
                    $pops.style.setProperty("transform", "translateY(100%)");
                }
                else if (["left"].includes(config.direction)) {
                    $pops.style.setProperty("width", config.size.toString());
                    $pops.style.setProperty("transform", "translateX(-100%)");
                }
                else if (["right"].includes(config.direction)) {
                    $pops.style.setProperty("width", config.size.toString());
                    $pops.style.setProperty("transform", "translateX(100%)");
                }
                element.style.setProperty("display", "");
            });
            /* 创建到页面中 */
            popsDOMUtils.append($shadowRoot, elementList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            setTimeout(() => {
                setTimeout(() => {
                    $pops.style.setProperty("transform", "");
                }, config.openDelay);
            }, 50);
            if ($mask != null) {
                $anim.after($mask);
            }
            PopsHandler.handlePush(PopsType, {
                guid: guid,
                animElement: $anim,
                popsElement: $pops,
                maskElement: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
            });
            return PopsHandler.handleResultDetails(eventDetails);
        }
    }

    /**
     * 图标
     */
    const Folder_ICON = {
        folder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",
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

    class PopsFolder {
        constructor(details) {
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
                    callback() { },
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
                        size: void 0,
                        icon: void 0,
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
                        size: void 0,
                        icon: void 0,
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
                        size: void 0,
                        icon: void 0,
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
                    clickCallBack: void 0,
                },
                drag: false,
                dragLimit: true,
                dragExtraDistance: 3,
                dragMoveCallBack() { },
                dragEndCallBack() { },
                forbiddenScroll: false,
                style: null,
                beforeAppendToPageCallBack() { },
            };
            /* 办公几件套 */
            Folder_ICON.docx = Folder_ICON.doc;
            Folder_ICON.rtf = Folder_ICON.doc;
            Folder_ICON.xlsx = Folder_ICON.xls;
            Folder_ICON.pptx = Folder_ICON.ppt;
            Folder_ICON.dmg = Folder_ICON.ipa;
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
                Folder_ICON[keyName] = Folder_ICON.zip;
            });
            imageIconList.forEach((keyName) => {
                Folder_ICON[keyName] = Folder_ICON.png;
            });
            codeLanguageIconList.forEach((keyName) => {
                Folder_ICON[keyName] = Folder_ICON.html;
            });
            androidIconList.forEach((keyName) => {
                Folder_ICON[keyName] = Folder_ICON.apk;
            });
            config = popsUtils.assign(config, details);
            if (details?.folder) {
                config.folder = details.folder;
            }
            let guid = popsUtils.getRandomGUID();
            const PopsType = "folder";
            config = PopsHandler.handleOnly(PopsType, config);
            // 先把z-index提取出来
            let zIndex = PopsHandler.handleZIndex(config.zIndex);
            let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
            let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
            let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
            let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
            let animHTML = PopsElementHandler.getAnimHTML(guid, PopsType, config, `
            <div class="pops-folder-title" style="text-align: ${config.title.position};${headerStyle}">
                            ${config.title.html
            ? config.title.text
            : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
                ${headerBtnHTML}
                        </div>
                        <div class="pops-folder-content ${pops.isPhone() ? "pops-mobile-folder-content" : ""}">
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
                                <div class="pops-folder-icon-arrow" data-sort="按文件名排序">
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
                                <div class="pops-folder-icon-arrow" title="按修改时间排序">
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
                                <div class="pops-folder-icon-arrow" title="按大小排序">
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
                        ${pops.isPhone()
            ? `<col width="100%">`
            : `
                            <col width="52%">
                            <col width="24%">
                            <col width="16%">`}
                        
                        </colgroup>
                        <tbody>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            ${bottomBtnHTML}
            `, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            let $anim = PopsElementHandler.parseElement(animHTML);
            let { popsElement: $pops, titleElement: $title, contentElement: $content, 
            // folderListElement,
            // folderListHeaderElement,
            // folderListHeaderRowElement,
            folderListBodyElement, folderFileListBreadcrumbPrimaryElement, headerCloseBtnElement: $btnCloseBtn, btnOkElement, btnCancelElement, btnOtherElement, folderListSortFileNameElement, folderListSortLatestTimeElement, folderListSortFileSizeElement, } = PopsHandler.handleQueryElement($anim, PopsType);
            /**
             * 遮罩层元素
             */
            let $mask = null;
            /**
             * 已创建的元素列表
             */
            let elementList = [$anim];
            if (config.mask.enable) {
                let _handleMask_ = PopsHandler.handleMask({
                    type: PopsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = _handleMask_.maskElement;
                elementList.push($mask);
            }
            /* 事件 */
            let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
            PopsHandler.handleClickEvent("close", $btnCloseBtn, eventDetails, config.btn.close.callback);
            PopsHandler.handleClickEvent("ok", btnOkElement, eventDetails, config.btn.ok.callback);
            PopsHandler.handleClickEvent("cancel", btnCancelElement, eventDetails, config.btn.cancel.callback);
            PopsHandler.handleClickEvent("other", btnOtherElement, eventDetails, config.btn.other.callback);
            /* 创建到页面中 */
            popsDOMUtils.append($shadowRoot, elementList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            if ($mask != null) {
                $anim.after($mask);
            }
            /* 添加文件信息 */
            config.folder.sort();
            /**
             * 创建文件夹元素
             * @param fileName
             * @param latestTime
             * @param [fileSize="-"]
             * @param isFolder
             */
            function createFolderRowElement(fileName, latestTime = "-", fileSize = "-", isFolder = false) {
                let origin_fileName = fileName;
                let origin_latestTime = latestTime;
                let origin_fileSize = fileSize;
                let folderELement = popsDOMUtils.createElement("tr");
                let fileNameElement = popsDOMUtils.createElement("td");
                let fileTimeElement = popsDOMUtils.createElement("td");
                let fileFormatSize = popsDOMUtils.createElement("td");
                let fileType = "";
                let fileIcon = Folder_ICON.folder;
                if (isFolder) {
                    /* 文件夹 */
                    latestTime = "";
                    fileSize = "";
                }
                else {
                    /* 文件 */
                    fileIcon = "";
                    if (typeof latestTime === "number") {
                        latestTime = popsUtils.formatTime(latestTime);
                    }
                    if (typeof fileSize === "number") {
                        fileSize = popsUtils.formatByteToSize(fileSize);
                    }
                    for (let keyName in Folder_ICON) {
                        if (fileName.toLowerCase().endsWith("." + keyName)) {
                            fileType = keyName;
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
                    isFolder: isFolder,
                };
                fileNameElement["__value__"] = __value__;
                fileTimeElement["__value__"] = __value__;
                fileFormatSize["__value__"] = __value__;
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
             */
            function createMobileFolderRowElement(fileName, latestTime = "-", fileSize = "-", isFolder = false) {
                let origin_fileName = fileName;
                let origin_latestTime = latestTime;
                let origin_fileSize = fileSize;
                let folderELement = popsDOMUtils.createElement("tr");
                let fileNameElement = popsDOMUtils.createElement("td");
                let fileType = "";
                let fileIcon = Folder_ICON.folder;
                if (isFolder) {
                    /* 文件夹 */
                    latestTime = "";
                    fileSize = "";
                }
                else {
                    /* 文件 */
                    fileIcon = "";
                    if (typeof latestTime === "number") {
                        latestTime = popsUtils.formatTime(latestTime);
                    }
                    if (typeof fileSize === "number") {
                        fileSize = popsUtils.formatByteToSize(fileSize);
                    }
                    for (let keyName in Folder_ICON) {
                        if (fileName.toLowerCase().endsWith("." + keyName)) {
                            fileType = keyName;
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
                    isFolder: isFolder,
                };
                fileNameElement["__value__"] = __value__;
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
                folderListBodyElement.innerHTML = "";
            }
            function getArrowIconElement() {
                let iconArrowElement = popsDOMUtils.createElement("div", {
                    className: "iconArrow",
                });
                return iconArrowElement;
            }
            /**
             * 添加顶部导航
             * @param name
             * @param _config_
             * @returns
             */
            function getBreadcrumbAllFilesElement(name, _config_) {
                let spanElement = popsDOMUtils.createElement("span", {
                    className: "pops-folder-file-list-breadcrumb-allFiles cursor-p",
                    innerHTML: `<a>${name}</a>`,
                    _config_: _config_,
                }, {
                    title: "name",
                });
                return spanElement;
            }
            /**
             * 顶部导航的点击事件
             * @param event
             * @param isTop 是否是全部文件按钮
             * @param _config_ 配置
             */
            function breadcrumbAllFilesElementClickEvent(event, isTop, _config_) {
                clearFolerRow();
                /* 获取当前的导航元素 */
                let $click = event.target;
                let currentBreadcrumb = $click.closest("span.pops-folder-file-list-breadcrumb-allFiles");
                if (currentBreadcrumb) {
                    while (currentBreadcrumb.nextElementSibling) {
                        currentBreadcrumb.nextElementSibling.remove();
                    }
                }
                else {
                    console.error("获取导航按钮失败");
                }
                let loadingMask = pops.loading({
                    parent: $content,
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
                addFolderElement(_config_);
                loadingMask.close();
            }
            /**
             * 刷新文件列表界面信息
             * @param event
             * @param _config_
             */
            async function refreshFolderInfoClickEvent(event, _config_) {
                clearFolerRow();
                let loadingMask = pops.loading({
                    parent: $content,
                    content: {
                        text: "获取文件列表中...",
                    },
                    mask: {
                        enable: true,
                    },
                    addIndexCSS: false,
                });
                if (typeof _config_.clickEvent === "function") {
                    let childConfig = await _config_.clickEvent(event, _config_);
                    /* 添加顶部导航的箭头 */
                    folderFileListBreadcrumbPrimaryElement.appendChild(getArrowIconElement());
                    /* 获取顶部导航 */
                    let breadcrumbAllFilesElement = getBreadcrumbAllFilesElement(_config_["fileName"], childConfig);
                    folderFileListBreadcrumbPrimaryElement.appendChild(breadcrumbAllFilesElement);
                    /* 设置顶部导航点击事件 */
                    popsDOMUtils.on(breadcrumbAllFilesElement, "click", function (event) {
                        breadcrumbAllFilesElementClickEvent(event, false, childConfig);
                    });
                    addFolderElement(childConfig);
                }
                loadingMask.close();
            }
            /**
             * 设置文件点击事件
             * @param targetElement
             * @param _config_
             */
            function setFileClickEvent(targetElement, _config_) {
                popsDOMUtils.on(targetElement, "click", async function (event) {
                    event?.preventDefault();
                    event?.stopPropagation();
                    event?.stopImmediatePropagation();
                    let linkElement = targetElement.querySelector("a");
                    if (typeof _config_.clickEvent === "function") {
                        let downloadInfo = await _config_.clickEvent(event, _config_);
                        if (typeof downloadInfo === "object" &&
                            typeof downloadInfo.url === "string" &&
                            downloadInfo.url.trim() !== "") {
                            linkElement.setAttribute("href", downloadInfo.url);
                            linkElement.setAttribute("target", "_blank");
                            if (downloadInfo.autoDownload) {
                                if (downloadInfo.mode == null ||
                                    downloadInfo.mode === "") {
                                    /* 未设置mode的话默认为aBlank */
                                    downloadInfo.mode = "aBlank";
                                }
                                if (downloadInfo.mode === "a" ||
                                    downloadInfo.mode === "aBlank") {
                                    /* a标签下载 */
                                    let downloadLinkElement = document.createElement("a");
                                    if (downloadInfo.mode === "aBlank") {
                                        downloadLinkElement.setAttribute("target", "_blank");
                                    }
                                    downloadLinkElement.href = downloadInfo.url;
                                    downloadLinkElement.click();
                                }
                                else if (downloadInfo.mode === "open" ||
                                    downloadInfo.mode === "openBlank") {
                                    /* window.open下载 */
                                    if (downloadInfo.mode === "openBlank") {
                                        globalThis.open(downloadInfo.url, "_blank");
                                    }
                                    else {
                                        globalThis.open(downloadInfo.url);
                                    }
                                }
                                else if (downloadInfo.mode === "iframe") {
                                    /* iframe下载 */
                                    let downloadIframeLinkElement = document.createElement("iframe");
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
                                }
                                else {
                                    console.error("未知的下载模式", downloadInfo);
                                }
                            }
                        }
                    }
                });
            }
            /**
             * 对配置进行排序
             * @param folderDataConfigList
             * @param sortName 比较的属性，默认fileName
             * @param isDesc 是否降序，默认false（升序）
             */
            function sortFolderConfig(folderDataConfigList, sortName = "fileName", isDesc = false) {
                console.log(folderDataConfigList, sortName, isDesc);
                if (sortName === "fileName") {
                    // 如果是以文件名排序，文件夹优先放前面
                    let onlyFolderDataConfigList = folderDataConfigList.filter((value) => {
                        return value.isFolder;
                    });
                    let onlyFileDataConfigList = folderDataConfigList.filter((value) => {
                        return !value.isFolder;
                    });
                    // 文件夹排序
                    onlyFolderDataConfigList.sort((leftConfig, rightConfig) => {
                        let beforeVal = leftConfig[sortName].toString();
                        let afterVal = rightConfig[sortName].toString();
                        let compareVal = beforeVal.localeCompare(afterVal);
                        if (isDesc) {
                            /* 降序 */
                            if (compareVal > 0) {
                                compareVal = -1;
                            }
                            else if (compareVal < 0) {
                                compareVal = 1;
                            }
                        }
                        return compareVal;
                    });
                    // 文件名排序
                    onlyFileDataConfigList.sort((leftConfig, rightConfig) => {
                        let beforeVal = leftConfig[sortName].toString();
                        let afterVal = rightConfig[sortName].toString();
                        let compareVal = beforeVal.localeCompare(afterVal);
                        if (isDesc) {
                            /* 降序 */
                            if (compareVal > 0) {
                                compareVal = -1;
                            }
                            else if (compareVal < 0) {
                                compareVal = 1;
                            }
                        }
                        return compareVal;
                    });
                    if (isDesc) {
                        // 降序，文件夹在下面
                        return [...onlyFileDataConfigList, ...onlyFolderDataConfigList];
                    }
                    else {
                        // 升序，文件夹在上面
                        return [...onlyFolderDataConfigList, ...onlyFileDataConfigList];
                    }
                }
                else {
                    folderDataConfigList.sort((beforeConfig, afterConfig) => {
                        let beforeVal = beforeConfig[sortName];
                        let afterVal = afterConfig[sortName];
                        if (sortName === "fileSize") {
                            /* 文件大小，进行Float转换 */
                            beforeVal = parseFloat(beforeVal.toString());
                            afterVal = parseFloat(afterVal.toString());
                        }
                        else if (sortName === "latestTime") {
                            /* 文件时间 */
                            beforeVal = new Date(beforeVal).getTime();
                            afterVal = new Date(afterVal).getTime();
                        }
                        if (beforeVal > afterVal) {
                            if (isDesc) {
                                /* 降序 */
                                return -1;
                            }
                            else {
                                return 1;
                            }
                        }
                        else if (beforeVal < afterVal) {
                            if (isDesc) {
                                /* 降序 */
                                return 1;
                            }
                            else {
                                return -1;
                            }
                        }
                        else {
                            return 0;
                        }
                    });
                    return folderDataConfigList;
                }
            }
            /**
             * 添加元素
             * @param _config_
             */
            function addFolderElement(_config_) {
                sortFolderConfig(_config_, config.sort.name, config.sort.isDesc);
                _config_.forEach((item) => {
                    if (item["isFolder"]) {
                        let { folderELement, fileNameElement } = pops.isPhone()
                            ? createMobileFolderRowElement(item["fileName"], "", "", true)
                            : createFolderRowElement(item["fileName"], "", "", true);
                        popsDOMUtils.on(fileNameElement, "click", (event) => {
                            refreshFolderInfoClickEvent(event, item);
                        });
                        folderListBodyElement.appendChild(folderELement);
                    }
                    else {
                        let { folderELement, fileNameElement } = pops.isPhone()
                            ? createMobileFolderRowElement(item["fileName"], item.latestTime, item.fileSize, false)
                            : createFolderRowElement(item["fileName"], item.latestTime, item.fileSize, false);
                        setFileClickEvent(fileNameElement, item);
                        folderListBodyElement.appendChild(folderELement);
                    }
                });
            }
            addFolderElement(config.folder);
            /* 将数据存到全部文件的属性_config_中 */
            let allFilesElement = folderFileListBreadcrumbPrimaryElement.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");
            allFilesElement._config_ = config.folder;
            /* 设置点击顶部的全部文件事件 */
            popsDOMUtils.on(allFilesElement, "click", (event) => {
                breadcrumbAllFilesElementClickEvent(event, true, config.folder);
            });
            /* 移除所有的当前排序的arrow */
            function removeAllArrowActive() {
                [
                    ...Array.from(folderListSortFileNameElement.querySelectorAll(".pops-folder-icon-active")),
                    ...Array.from(folderListSortLatestTimeElement.querySelectorAll(".pops-folder-icon-active")),
                    ...Array.from(folderListSortFileSizeElement.querySelectorAll(".pops-folder-icon-active")),
                ].forEach((ele) => ele.classList.remove("pops-folder-icon-active"));
            }
            /* 设置当前的排序的arrow */
            function changeArrowActive(arrowUp, arrowDown, isDesc) {
                removeAllArrowActive();
                if (isDesc) {
                    arrowDown.classList.add("pops-folder-icon-active");
                }
                else {
                    arrowUp.classList.add("pops-folder-icon-active");
                }
            }
            /**
             * 排序按钮的点击事件
             * @param {PointerEvent} target
             * @param {HTMLElement} event
             * @param {string} sortName
             */
            function arrowSortClickEvent(target, event, sortName) {
                if (!event["notChangeSortRule"]) {
                    config.sort.name = sortName;
                    config.sort.isDesc = !config.sort.isDesc;
                }
                let arrowUp = target.querySelector(".pops-folder-icon-arrow-up");
                let arrowDown = target.querySelector(".pops-folder-icon-arrow-down");
                changeArrowActive(arrowUp, arrowDown, config.sort.isDesc);
                if (typeof config.sort.callback === "function" &&
                    config.sort.callback(target, event, config.sort.name, config.sort.isDesc)) {
                    return;
                }
                let childrenList = [];
                Array.from(folderListBodyElement.children).forEach((trElement) => {
                    let __value__ = trElement["__value__"];
                    __value__["target"] = trElement;
                    childrenList.push(__value__);
                });
                let sortedConfigList = sortFolderConfig(childrenList, config.sort.name, config.sort.isDesc);
                sortedConfigList.forEach((item) => {
                    folderListBodyElement.appendChild(item.target);
                });
            }
            /* 设置当前排序的图标按钮 */
            popsDOMUtils.on(folderListSortFileNameElement.closest("th"), "click", function (event) {
                arrowSortClickEvent(folderListSortFileNameElement, event, "fileName");
            }, {
                capture: true,
            });
            popsDOMUtils.on(folderListSortLatestTimeElement.closest("th"), "click", void 0, function (event) {
                arrowSortClickEvent(folderListSortLatestTimeElement, event, "latestTime");
            }, {
                capture: true,
            });
            popsDOMUtils.on(folderListSortFileSizeElement.closest("th"), "click", void 0, function (event) {
                arrowSortClickEvent(folderListSortFileSizeElement, event, "fileSize");
            }, {
                capture: true,
            });
            /* 设置默认触发的arrow */
            if (config.sort.name === "fileName") {
                popsDOMUtils.trigger(folderListSortFileNameElement, "click", {
                    notChangeSortRule: true,
                });
            }
            else if (config.sort.name === "latestTime") {
                popsDOMUtils.trigger(folderListSortLatestTimeElement, "click", {
                    notChangeSortRule: true,
                });
            }
            else if (config.sort.name === "fileSize") {
                popsDOMUtils.trigger(folderListSortFileSizeElement, "click", {
                    notChangeSortRule: true,
                });
            }
            /* 拖拽 */
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            PopsHandler.handlePush(PopsType, {
                guid: guid,
                animElement: $anim,
                popsElement: $pops,
                maskElement: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
            });
            return PopsHandler.handleResultDetails(eventDetails);
        }
    }

    const PopsMathFloatUtils = {
        /**
         * 判断数字是否是浮点数
         * @param num
         */
        isFloat(num) {
            return Number(num) === num && num % 1 !== 0;
        },
        /**
         * 浮点数加法
         * @param number1
         * @param number2
         */
        add(number1, number2) {
            let number1length, number2length, powValue;
            try {
                number1length = number1.toString().split(".")[1].length;
            }
            catch (error) {
                number1length = 0;
            }
            try {
                number2length = number2.toString().split(".")[1].length;
            }
            catch (error) {
                number2length = 0;
            }
            powValue = Math.pow(10, Math.max(number1length, number2length));
            return Math.round(number1 * powValue + number2 * powValue) / powValue;
        },
        /**
         * 减法
         * @param number1
         * @param number2
         */
        sub(number1, number2) {
            let number1length, number2length, powValue;
            try {
                number1length = number1.toString().split(".")[1].length;
            }
            catch (error) {
                number1length = 0;
            }
            try {
                number2length = number2.toString().split(".")[1].length;
            }
            catch (error) {
                number2length = 0;
            }
            powValue = Math.pow(10, Math.max(number1length, number2length));
            let fixedValue = number1length >= number2length ? number1length : number2length;
            return (Math.round(number1 * powValue - number2 * powValue) / powValue).toFixed(fixedValue);
        },
        /**
         * 除法
         * @param number1
         * @param number2
         */
        division(number1, number2) {
            let number1length, number2length, number1ReplaceValue, number2ReplaceValue;
            try {
                number1length = number1.toString().split(".")[1].length;
            }
            catch (error) {
                number1length = 0;
            }
            try {
                number2length = number2.toString().split(".")[1].length;
            }
            catch (error) {
                number2length = 0;
            }
            number1ReplaceValue = Number(number1.toString().replace(".", ""));
            number2ReplaceValue = Number(number2.toString().replace(".", ""));
            return ((number1ReplaceValue / number2ReplaceValue) *
                Math.pow(10, number2length - number1length));
        },
    };

    class PopsPanel {
        constructor(details) {
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
                                        callback(event, value) {
                                            console.log("按钮开启状态：", value);
                                        },
                                    },
                                    {
                                        className: "panel-slider",
                                        text: "slider",
                                        type: "slider",
                                        attributes: [],
                                        getValue() {
                                            return 50;
                                        },
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
                                getValue() {
                                    return "50";
                                },
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
                                getValue() {
                                    return "50";
                                },
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
                                callback(event, isSelectedValue, isSelectedText) {
                                    console.log(`select当前选项：${isSelectedValue}，当前选项文本：${isSelectedText}`);
                                },
                                data: [
                                    {
                                        value: "all",
                                        text: "所有",
                                    },
                                    {
                                        value: "text",
                                        text: "文本",
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
                                                        callback(event, value) {
                                                            console.log("按钮开启状态：", value);
                                                        },
                                                    },
                                                    {
                                                        className: "panel-slider",
                                                        text: "slider",
                                                        type: "slider",
                                                        attributes: [],
                                                        getValue() {
                                                            return 50;
                                                        },
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
                    clickCallBack: void 0,
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
                dragMoveCallBack() { },
                dragEndCallBack() { },
                forbiddenScroll: false,
                style: null,
                beforeAppendToPageCallBack() { },
            };
            config = popsUtils.assign(config, details);
            if (details && Array.isArray(details.content)) {
                config.content = details.content;
            }
            let guid = popsUtils.getRandomGUID();
            const PopsType = "panel";
            config = PopsHandler.handleOnly(PopsType, config);
            // 先把z-index提取出来
            let zIndex = PopsHandler.handleZIndex(config.zIndex);
            let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
            let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
            let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
            let animHTML = PopsElementHandler.getAnimHTML(guid, PopsType, config, 
            /*html*/ `
			<div 
				class="pops-${PopsType}-title"
				style="text-align: ${config.title.position};
				${headerStyle}">
				${config.title.html
            ? config.title.text
            : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
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
			</div>`, "", zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            let $anim = PopsElementHandler.parseElement(animHTML);
            /* 结构元素 */
            let { popsElement: $pops, headerCloseBtnElement: $headerCloseBtn, titleElement: $title, contentElement: $content, contentAsideElement: $contentAside, contentSectionContainerElement: $contentSectionContainer, } = PopsHandler.handleQueryElement($anim, PopsType);
            if (config.isMobile || pops.isPhone()) {
                popsDOMUtils.addClassName($pops, config.mobileClassName);
            }
            /**
             * 遮罩层元素
             */
            let $mask = null;
            /**
             * 已创建的元素列表
             */
            let elementList = [$anim];
            /* 遮罩层元素 */
            if (config.mask.enable) {
                let _handleMask_ = PopsHandler.handleMask({
                    type: PopsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = _handleMask_.maskElement;
                elementList.push($mask);
            }
            /* 处理返回的配置 */
            let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
            /* 为顶部右边的关闭按钮添加点击事件 */
            PopsHandler.handleClickEvent("close", $headerCloseBtn, eventDetails, config.btn.close.callback);
            /* 创建到页面中 */
            popsDOMUtils.append($shadowRoot, elementList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            /* 追加遮罩层元素 */
            if ($mask != null) {
                $anim.after($mask);
            }
            /**
             * 处理内部配置
             */
            const HandleContetDetails = {
                /**
                 * 左侧的ul容器
                 */
                asideULElement: null,
                /**
                 * 右侧主内容的顶部文字ul容器
                 */
                sectionContainerHeaderULElement: null,
                /**
                 * 右侧主内容的ul容器
                 */
                sectionContainerULElement: null,
                init() {
                    this.asideULElement =
                        $contentAside.querySelector("ul");
                    this.sectionContainerHeaderULElement =
                        $contentSectionContainer.querySelectorAll("ul")[0];
                    this.sectionContainerULElement =
                        $contentSectionContainer.querySelectorAll("ul")[1];
                    /**
                     * 默认点击的左侧容器
                     */
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
                            }
                            else {
                                flag = Boolean(asideItem.isDefault);
                            }
                            if (flag) {
                                asideDefaultItemElement = asideLiElement;
                                isScrollToDefaultView = Boolean(asideItem.scrollToDefaultView);
                            }
                        }
                    });
                    /* 点击左侧列表 */
                    if (asideDefaultItemElement == null &&
                        this.asideULElement.children.length) {
                        /* 默认第一个 */
                        asideDefaultItemElement = this.asideULElement
                            .children[0];
                    }
                    if (asideDefaultItemElement) {
                        /* 点击选择的那一项 */
                        asideDefaultItemElement.click();
                        if (isScrollToDefaultView) {
                            asideDefaultItemElement?.scrollIntoView();
                        }
                    }
                    else {
                        console.error("pops.panel：左侧容器没有项");
                    }
                },
                /**
                 * 清空container容器的元素
                 */
                clearContainer() {
                    this.sectionContainerHeaderULElement.innerHTML = "";
                    this.sectionContainerULElement.innerHTML = "";
                    $content
                        ?.querySelectorAll("section.pops-panel-deepMenu-container")
                        .forEach((ele) => ele.remove());
                },
                /**
                 * 清空左侧容器已访问记录
                 */
                clearAsideItemIsVisited() {
                    $contentAside
                        .querySelectorAll(".pops-is-visited")
                        .forEach((element) => {
                        popsDOMUtils.removeClassName(element, "pops-is-visited");
                    });
                },
                /**
                 * 设置左侧容器已访问记录
                 * @param element
                 */
                setAsideItemIsVisited(element) {
                    popsDOMUtils.addClassName(element, "pops-is-visited");
                },
                /**
                 * 为元素添加自定义属性
                 * @param element
                 * @param attributes
                 */
                addElementAttributes(element, attributes) {
                    if (attributes == null) {
                        return;
                    }
                    if (Array.isArray(attributes)) {
                        attributes.forEach((attrObject) => {
                            this.addElementAttributes(element, attrObject);
                        });
                    }
                    else {
                        Object.keys(attributes).forEach((attributeName) => {
                            element.setAttribute(attributeName, attributes[attributeName]);
                        });
                    }
                },
                /**
                 * 为元素设置(自定义)属性
                 * @param element
                 * @param props
                 */
                setElementProps(element, props) {
                    if (props == null) {
                        return;
                    }
                    Object.keys(props).forEach((propName) => {
                        element[propName] = props[propName];
                    });
                },
                /**
                 * 获取左侧容器元素<li>
                 * @param  asideConfig
                 * @returns
                 */
                getAsideItem(asideConfig) {
                    let liElement = document.createElement("li");
                    liElement.id = asideConfig.id;
                    liElement["__forms__"] = asideConfig.forms;
                    liElement.innerHTML = asideConfig.title;
                    this.addElementAttributes(liElement, asideConfig.attributes);
                    this.setElementProps(liElement, asideConfig.props);
                    return liElement;
                },
                /**
                 * 获取中间容器的元素<li>
                 * type ==> switch
                 * @param formConfig
                 * @returns
                 */
                getSectionContainerItem_switch(formConfig) {
                    let liElement = document.createElement("li");
                    liElement["__formConfig__"] = formConfig;
                    if (formConfig.className) {
                        liElement.className = formConfig.className;
                    }
                    this.addElementAttributes(liElement, formConfig.attributes);
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
                            switch: liElement.querySelector(".pops-panel-switch"),
                            input: liElement.querySelector(".pops-panel-switch__input"),
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
                            popsDOMUtils.on(this.$ele.core, "click", void 0, function (event) {
                                if (that.$ele.input.disabled ||
                                    that.$ele.switch.hasAttribute("data-disabled")) {
                                    return;
                                }
                                that.$data.value = that.getStatus();
                                that.setStatus(that.$data.value);
                                if (typeof formConfig.callback === "function") {
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
                                popsDOMUtils.addClassName(this.$ele.switch, "pops-panel-switch-is-checked");
                            }
                            else {
                                popsDOMUtils.removeClassName(this.$ele.switch, "pops-panel-switch-is-checked");
                            }
                        },
                        /**
                         * 根据className来获取逆反值
                         */
                        getStatus() {
                            let checkedValue = false;
                            if (!popsDOMUtils.containsClassName(this.$ele.switch, "pops-panel-switch-is-checked")) {
                                checkedValue = true;
                            }
                            return checkedValue;
                        },
                        /**
                         * 禁用复选框
                         */
                        disable() {
                            this.$ele.input.disabled = true;
                            this.$ele.switch.setAttribute("data-disabled", "true");
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
                    liElement["data-switch"] = PopsPanelSwitch;
                    return liElement;
                },
                /**
                 * 获取中间容器的元素<li>
                 * type ==> slider
                 * @param formConfig
                 * @returns
                 */
                getSectionContainerItem_slider(formConfig) {
                    let liElement = document.createElement("li");
                    liElement["__formConfig__"] = formConfig;
                    if (formConfig.className) {
                        liElement.className = formConfig.className;
                    }
                    this.addElementAttributes(liElement, formConfig.attributes);
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
                    let rangeInputElement = liElement.querySelector(".pops-panel-slider input[type=range]");
                    if (formConfig.step) {
                        rangeInputElement.setAttribute("step", formConfig.step.toString());
                    }
                    rangeInputElement.value = formConfig.getValue().toString();
                    /**
                     * 获取提示的内容
                     * @param value
                     */
                    let getToolTipContent = function (value) {
                        if (typeof formConfig.getToolTipContent === "function") {
                            return formConfig.getToolTipContent(value);
                        }
                        else {
                            return value;
                        }
                    };
                    let tooltip = pops.tooltip({
                        target: rangeInputElement.parentElement,
                        content: getToolTipContent(rangeInputElement.value),
                        zIndex: 1000000,
                        className: "github-tooltip",
                        showBeforeCallBack() {
                            tooltip.toolTipNode.querySelector("div").innerText =
                                getToolTipContent(rangeInputElement.value);
                        },
                        alwaysShow: false,
                        only: false,
                        position: "top",
                        arrowDistance: 10,
                    });
                    popsDOMUtils.on(rangeInputElement, ["input", "propertychange"], void 0, function (event) {
                        tooltip.toolTipNode.querySelector("div").innerText =
                            getToolTipContent(rangeInputElement.value);
                        if (typeof formConfig.callback === "function") {
                            formConfig.callback(event, event.target.value);
                        }
                    });
                    return liElement;
                },
                /**
                 * 获取中间容器的元素<li>
                 * type ==> slider
                 * @param formConfig
                 * @returns
                 */
                getSectionContainerItem_slider_new(formConfig) {
                    let liElement = document.createElement("li");
                    liElement["__formConfig__"] = formConfig;
                    if (formConfig.className) {
                        liElement.className = formConfig.className;
                    }
                    this.addElementAttributes(liElement, formConfig.attributes);
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
                             */
                            stepBlockMap: new Map(),
                        },
                        $ele: {
                            slider: liElement.querySelector(".pops-slider"),
                            runAway: liElement.querySelector(".pops-slider__runway"),
                            bar: liElement.querySelector(".pops-slider__bar"),
                            buttonWrapper: liElement.querySelector(".pops-slider__button-wrapper"),
                            button: liElement.querySelector(".pops-slider__button"),
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
                            let timer = void 0;
                            let interval = setInterval(() => {
                                if (isSuccess) {
                                    this.$interval.isCheck = false;
                                    clearTimeout(timer);
                                    clearInterval(interval);
                                }
                                else {
                                    this.initTotalWidth();
                                    if (this.$data.totalWidth !== 0) {
                                        isSuccess = true;
                                        if (this.$data.totalWidth !== oldTotalWidth) {
                                            /* slider的总宽度改变了 */
                                            if (PopsMathFloatUtils.isFloat(this.step)) {
                                                this.initFloatStepMap();
                                            }
                                            else {
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
                            this.$ele.slider.setAttribute("data-min", this.min.toString());
                            this.$ele.slider.setAttribute("data-max", this.max.toString());
                            this.$ele.slider.setAttribute("data-value", this.value.toString());
                            this.$ele.slider.setAttribute("data-step", this.step.toString());
                            this.$ele.slider["data-min"] = this.min;
                            this.$ele.slider["data-max"] = this.max;
                            this.$ele.slider["data-value"] = this.value;
                            this.$ele.slider["data-step"] = this.step;
                        },
                        /**
                         * 初始化滑块的总长度的数据(px)
                         */
                        initTotalWidth() {
                            this.$data.totalWidth = popsDOMUtils.width(this.$ele.runAway);
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
                            for (let stepValue = this.min; stepValue <= this.max; stepValue += this.step) {
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
                                }
                                else {
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
                            for (let stepValue = this.min; stepValue <= this.max; stepValue = PopsMathFloatUtils.add(stepValue, this.step)) {
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
                                }
                                else {
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
                            for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
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
                         * @param num
                         * @returns
                         */
                        isFloat(num) {
                            return Number(num) === num && num % 1 !== 0;
                        },
                        /**
                         * 值改变的回调
                         * @param event
                         * @param value
                         */
                        valueChangeCallBack(event, value) {
                            if (typeof formConfig.callback === "function") {
                                formConfig.callback(event, value);
                            }
                        },
                        /**
                         * 根据拖拽距离获取滑块应该在的区间和值
                         */
                        getDragInfo(dragX) {
                            let result = this.$data.stepBlockMap.get(0);
                            for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
                                if (stepBlockInfo.pxLeft <= dragX &&
                                    dragX < stepBlockInfo.pxRight) {
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
                         * @param num
                         */
                        formatValue(num) {
                            if (PopsMathFloatUtils.isFloat(this.step)) {
                                num = parseFloat(num.toFixed(2));
                            }
                            else {
                                num = parseInt(num.toString());
                            }
                            return num;
                        },
                        /**
                         * 设置滑块的位置偏移（left）
                         * @param percent 百分比
                         */
                        setSliderPosition(percent) {
                            if (parseInt(percent.toString()) === 1) {
                                percent = 1;
                            }
                            if (percent > 1) {
                                percent = percent / 100;
                            }
                            /* 滑块按钮的偏移 */
                            this.$ele.buttonWrapper.style.left = `${percent * 100}%`;
                            /* 滑块进度的宽度 */
                            this.$ele.bar.style.width = `${percent * 100}%`;
                        },
                        /**
                         * 禁止拖拽
                         */
                        disableDrag() {
                            this.$ele.runAway.classList.add("pops-slider-is-disabled");
                        },
                        /**
                         * 允许拖拽
                         */
                        allowDrag() {
                            this.$ele.runAway.classList.remove("pops-slider-is-disabled");
                        },
                        /**
                         * 判断当前滑块是否被禁用
                         */
                        isDisabledDrag() {
                            return this.$ele.runAway.classList.contains("pops-slider-is-disabled");
                        },
                        /**
                         * 设置进度条点击定位的事件
                         */
                        setRunAwayClickEvent() {
                            popsDOMUtils.on(this.$ele.runAway, "click", void 0, (event) => {
                                if (event.target !== this.$ele.runAway &&
                                    event.target !== this.$ele.bar) {
                                    return;
                                }
                                let clickX = parseFloat(event.offsetX);
                                this.dragStartCallBack();
                                this.dragMoveCallBack(event, clickX, this.value);
                                this.dragEndCallBack(clickX);
                            }, {
                                capture: false,
                            });
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
                         * @param event 事件
                         * @param dragX 当前拖拽的距离
                         * @param oldValue 旧的值
                         */
                        dragMoveCallBack(event, dragX, oldValue) {
                            let dragPercent = 0;
                            if (dragX <= 0) {
                                dragPercent = 0;
                                this.value = this.min;
                            }
                            else if (dragX >= this.$data.totalWidth) {
                                dragPercent = 1;
                                this.value = this.max;
                            }
                            else {
                                const dragInfo = this.getDragInfo(dragX);
                                dragPercent = dragInfo.percent;
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
                        dragEndCallBack(dragX) {
                            this.$data.isMove = false;
                            if (dragX <= 0) {
                                this.$data.dragWidth = 0;
                            }
                            else if (dragX >= this.$data.totalWidth) {
                                this.$data.dragWidth = this.$data.totalWidth;
                            }
                            else {
                                this.$data.dragWidth = dragX;
                            }
                            this.closeToolTip();
                        },
                        /**
                         * 设置点击拖拽事件
                         */
                        setPanEvent() {
                            const AnyTouch = popsUtils.AnyTouch();
                            this.$tooltip = new AnyTouch(this.$ele.button, {
                                preventEvent() {
                                    return false;
                                },
                            });
                            /**
                             * 当前的拖拽的距离px
                             */
                            let currentDragX = 0;
                            /* 监听拖拽 */
                            this.$tooltip.on("at:move", (event) => {
                                if (!this.dragStartCallBack()) {
                                    return;
                                }
                                let oldValue = this.value;
                                const runAwayRect = this.$ele.runAway.getBoundingClientRect();
                                let displacementX = event.x - (runAwayRect.left + globalThis.screenX);
                                if (displacementX <= 0) {
                                    displacementX = 0;
                                }
                                else if (displacementX >= runAwayRect.width) {
                                    displacementX = runAwayRect.width;
                                }
                                currentDragX = displacementX;
                                /* 拖拽移动 */
                                this.dragMoveCallBack(event, currentDragX, oldValue);
                            });
                            /* 监听触点离开，处理某些情况下，拖拽松开，但是未触发pan事件，可以通过设置这个来关闭tooltip */
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
                                }
                                else {
                                    return PopsPanelSlider.value;
                                }
                            }
                            let tooltipContent = null;
                            this.$ele.tooltip = pops.tooltip({
                                target: this.$ele.button,
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
                                showAfterCallBack: (toolTipNode) => {
                                    tooltipContent.innerText = getToolTipContent();
                                },
                                closeBeforeCallBack: () => {
                                    if (this.$data.isMove) {
                                        this.checkStopDragMove();
                                        return false;
                                    }
                                },
                                alwaysShow: false,
                                // only: false,
                                position: "top",
                                arrowDistance: 10,
                            });
                            tooltipContent =
                                this.$ele.tooltip.toolTipNode.querySelector("div");
                        },
                    };
                    PopsPanelSlider.init();
                    liElement["data-slider"] = PopsPanelSlider;
                    return liElement;
                },
                /**
                 * 获取中间容器的元素<li>
                 * type ==> input
                 * @param formConfig
                 * @returns
                 */
                getSectionContainerItem_input(formConfig) {
                    let liElement = document.createElement("li");
                    liElement["__formConfig__"] = formConfig;
                    if (formConfig.className) {
                        liElement.className = formConfig.className;
                    }
                    this.addElementAttributes(liElement, formConfig.attributes);
                    this.setElementProps(liElement, formConfig.props);
                    let inputType = "text";
                    if (formConfig.isPassword) {
                        inputType = "password";
                    }
                    else if (formConfig.isNumber) {
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
                            panelInput: liElement.querySelector(".pops-panel-input"),
                            input: liElement.querySelector("input"),
                            inputSpanIcon: document.createElement("span"),
                            inputSpanIconInner: null,
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
                            }
                            else {
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
                                formConfig.handlerCallBack(liElement, this.$ele.input);
                            }
                        },
                        /**
                         * 初始化$ele的配置
                         */
                        initEle() {
                            this.$ele.input.parentElement.insertBefore(this.$ele.inputSpanIcon, this.$ele.input.nextSibling);
                            this.$ele.inputSpanIcon.className = "pops-panel-input__suffix";
                            this.$ele.inputSpanIcon.innerHTML = `
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
						`;
                            this.$ele.inputSpanIconInner =
                                this.$ele.inputSpanIcon.querySelector(".pops-panel-input__suffix-inner");
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
                            popsDOMUtils.on(this.$ele.icon, "click", void 0, () => {
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
                                    }
                                    else {
                                        /* 当前不可见 => 点击改变为显示 */
                                        this.$data.isView = true;
                                        /* 隐藏输入框内容，且更换图标为显示图标 */
                                        this.setInputType("password");
                                        this.setCircleIcon(pops.config.iconSVG.view);
                                    }
                                }
                                else {
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
                            popsDOMUtils.on(this.$ele.input, ["input", "propertychange"], void 0, (event) => {
                                this.$data.value = this.$ele.input.value;
                                if (!formConfig.isPassword) {
                                    /* 不是密码框 */
                                    if (this.$ele.input.value !== "" &&
                                        this.$ele.icon.innerHTML === "") {
                                        /* 不为空，显示清空图标 */
                                        this.setCircleIcon(pops.config.iconSVG.circleClose);
                                        this.setCircleIconClickEvent();
                                    }
                                    else if (this.$ele.input.value === "") {
                                        this.removeCircleIcon();
                                    }
                                }
                                if (typeof formConfig.callback === "function") {
                                    if (formConfig.isNumber) {
                                        formConfig.callback(event, this.$ele.input.value, this.$ele.input.valueAsNumber);
                                    }
                                    else {
                                        formConfig.callback(event, this.$ele.input.value);
                                    }
                                }
                            });
                        },
                    };
                    PopsPanelInput.init();
                    liElement["data-input"] = PopsPanelInput;
                    return liElement;
                },
                /**
                 * 获取中间容器的元素<li>
                 * type ==> textarea
                 * @param formConfig
                 * @returns
                 */
                getSectionContainerItem_textarea(formConfig) {
                    let liElement = document.createElement("li");
                    liElement["__formConfig__"] = formConfig;
                    if (formConfig.className) {
                        liElement.className = formConfig.className;
                    }
                    this.addElementAttributes(liElement, formConfig.attributes);
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
                            panelTextarea: liElement.querySelector(".pops-panel-textarea"),
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
                            this.$ele.textarea.setAttribute("disabled", "true");
                            this.$ele.panelTextarea.classList.add("pops-panel-textarea-disable");
                        },
                        notDisable() {
                            this.$ele.textarea.removeAttribute("disabled");
                            this.$ele.panelTextarea.classList.remove("pops-panel-textarea-disable");
                        },
                        isDisabled() {
                            return (this.$ele.textarea.hasAttribute("disabled") ||
                                this.$ele.panelTextarea.classList.contains("pops-panel-textarea-disable"));
                        },
                        setValue(value) {
                            this.$ele.textarea.value = value;
                        },
                        /**
                         * 监听选择内容改变
                         */
                        setChangeEvent() {
                            popsDOMUtils.on(this.$ele.textarea, ["input", "propertychange"], void 0, (event) => {
                                this.$data.value = event.target.value;
                                if (typeof formConfig.callback === "function") {
                                    formConfig.callback(event, event.target.value);
                                }
                            });
                        },
                    };
                    PopsPanelTextArea.init();
                    liElement["data-textarea"] = PopsPanelTextArea;
                    return liElement;
                },
                /**
                 * 获取中间容器的元素<li>
                 * type ==> select
                 * @param formConfig
                 * @returns
                 */
                getSectionContainerItem_select(formConfig) {
                    let liElement = document.createElement("li");
                    liElement["__formConfig__"] = formConfig;
                    if (formConfig.className) {
                        liElement.className = formConfig.className;
                    }
                    this.addElementAttributes(liElement, formConfig.attributes);
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
                            panelSelect: liElement.querySelector(".pops-panel-select"),
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
                            this.$ele.select.setAttribute("disabled", "true");
                            this.$ele.panelSelect.classList.add("pops-panel-select-disable");
                        },
                        notDisable() {
                            this.$ele.select.removeAttribute("disabled");
                            this.$ele.panelSelect.classList.remove("pops-panel-select-disable");
                        },
                        isDisabled() {
                            return (this.$ele.select.hasAttribute("disabled") ||
                                this.$ele.panelSelect.classList.contains("pops-panel-select-disable"));
                        },
                        initOption() {
                            formConfig.data.forEach((dataItem) => {
                                let optionElement = document.createElement("option");
                                optionElement["__value__"] = dataItem.value;
                                optionElement["__disable__"] = dataItem.disable;
                                if (dataItem.value === this.$data.defaultValue) {
                                    optionElement.setAttribute("selected", "true");
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
                        setOptionDisableStatus(optionElement) {
                            if (typeof optionElement["__disable__"] === "function") {
                                let disableStatus = optionElement["__disable__"](optionElement["__value__"]);
                                if (disableStatus) {
                                    optionElement.setAttribute("disabled", "true");
                                }
                                else {
                                    optionElement.removeAttribute("disabled");
                                }
                            }
                        },
                        /**
                         * 监听选择内容改变
                         */
                        setChangeEvent() {
                            popsDOMUtils.on(this.$ele.select, "change", void 0, (event) => {
                                this.setSelectOptionsDisableStatus();
                                if (typeof formConfig.callback === "function") {
                                    let isSelectedElement = event.target[event.target.selectedIndex];
                                    let isSelectedValue = isSelectedElement["__value__"];
                                    let isSelectedText = isSelectedElement.innerText || isSelectedElement.textContent;
                                    formConfig.callback(event, isSelectedValue, isSelectedText);
                                }
                            });
                        },
                        /**
                         * 监听点击事件
                         */
                        setClickEvent() {
                            popsDOMUtils.on(this.$ele.select, "click", void 0, (event) => {
                                this.setSelectOptionsDisableStatus();
                                if (typeof formConfig.clickCallBack === "function") {
                                    formConfig.clickCallBack(event, this.$ele.select);
                                }
                            });
                        },
                    };
                    PopsPanelSelect.init();
                    liElement["data-select"] = PopsPanelSelect;
                    return liElement;
                },
                /**
                 * 获取中间容器的元素<li>
                 * type ==> button
                 * @param formConfig
                 * @returns
                 */
                getSectionContainerItem_button(formConfig) {
                    let liElement = document.createElement("li");
                    liElement["__formConfig__"] = formConfig;
                    if (formConfig.className) {
                        liElement.className = formConfig.className;
                    }
                    this.addElementAttributes(liElement, formConfig.attributes);
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
                            button: liElement.querySelector(".pops-panel-button .pops-panel-button_inner"),
                            icon: liElement.querySelector(".pops-panel-button .pops-bottom-icon"),
                            spanText: liElement.querySelector(".pops-panel-button .pops-panel-button-text"),
                        },
                        $data: {},
                        init() {
                            this.$ele.panelButton.appendChild(this.$ele.button);
                            this.initButton();
                            this.setClickEvent();
                        },
                        initButton() {
                            if (typeof formConfig.buttonIcon === "string" &&
                                formConfig.buttonIcon.trim() !== "") {
                                /* 存在icon图标且不为空 */
                                if (formConfig.buttonIcon in pops.config.iconSVG) {
                                    this.setIconSVG(pops.config.iconSVG[formConfig.buttonIcon]);
                                }
                                else {
                                    this.setIconSVG(formConfig.buttonIcon);
                                }
                                this.showIcon();
                            }
                            else {
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
                            }
                            else {
                                this.setIconLeft();
                            }
                            if (formConfig.disable) {
                                this.disable();
                            }
                            this.setButtonText(buttonText);
                            this.setIconLoadingStatus(formConfig.buttonIconIsLoading);
                        },
                        disable() {
                            this.$ele.button.setAttribute("disabled", "true");
                        },
                        notDisable() {
                            this.$ele.button.removeAttribute("disabled");
                        },
                        /**
                         * 隐藏icon图标
                         */
                        hideIcon() {
                            this.$ele.panelButton.classList.add("pops-panel-button-no-icon");
                        },
                        /**
                         * 显示icon图标
                         */
                        showIcon() {
                            this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");
                        },
                        /**
                         * 设置icon图标的svg
                         */
                        setIconSVG(svgHTML) {
                            this.$ele.icon.innerHTML = svgHTML;
                        },
                        /**
                         * 设置icon图标是否旋转
                         * @param status
                         */
                        setIconLoadingStatus(status) {
                            this.$ele.icon.setAttribute("is-loading", Boolean(status).toString());
                        },
                        /**
                         * 设置属性上是否存在icon图标
                         */
                        setHasIcon(value) {
                            this.$ele.button.setAttribute("data-icon", Boolean(value).toString());
                        },
                        /**
                         * 设置按钮类型
                         * @param typeValue
                         */
                        setButtonType(typeValue) {
                            this.$ele.button.setAttribute("type", typeValue);
                        },
                        /**
                         * 添加按钮的图标在右边
                         */
                        setIconRight() {
                            this.$ele.button.classList.add("pops-panel-button-right-icon");
                        },
                        /**
                         * （默认）添加按钮的图标在左边
                         */
                        setIconLeft() {
                            this.$ele.button.classList.remove("pops-panel-button-right-icon");
                        },
                        /**
                         * 设置按钮文本
                         * @param text
                         */
                        setButtonText(text) {
                            this.$ele.spanText.innerHTML = text;
                        },
                        setClickEvent() {
                            popsDOMUtils.on(this.$ele.button, "click", void 0, (event) => {
                                if (typeof formConfig.callback === "function") {
                                    formConfig.callback(event);
                                }
                            });
                        },
                    };
                    PopsPanelButton.init();
                    liElement["data-button"] = PopsPanelButton;
                    return liElement;
                },
                /**
                 * 获取深层容器的元素<li>
                 * @param formConfig
                 */
                getSectionContainerItem_deepMenu(formConfig) {
                    let liElement = document.createElement("li");
                    liElement.classList.add("pops-panel-deepMenu-nav-item");
                    liElement["__formConfig__"] = formConfig;
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
                    let arrowRightIcon = typeof formConfig.arrowRightIcon === "boolean"
                        ? formConfig.arrowRightIcon
                        : true;
                    let arrowRightIconHTML = "";
                    if (arrowRightIcon) {
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
                            get parentSection() {
                                return $contentSectionContainer;
                            },
                        },
                        init() {
                            this.setLiClickEvent();
                        },
                        /**
                         * 生成配置每一项的元素
                         * @param $container
                         * @param formItemConfig
                         */
                        initFormItem($container, formItemConfig) {
                            if (formItemConfig["type"] === "forms") {
                                let childForms = formItemConfig["forms"];
                                /* 每一项<li>元素 */
                                let formContainerListElement = document.createElement("li");
                                /* 每一项<li>内的子<ul>元素 */
                                let formContainerULElement = document.createElement("ul");
                                formContainerListElement.className =
                                    "pops-panel-forms-container-item";
                                /* 区域头部的文字 */
                                let formHeaderDivElement = popsDOMUtils.createElement("div", {
                                    className: "pops-panel-forms-container-item-header-text",
                                });
                                formHeaderDivElement.innerHTML = formItemConfig["text"];
                                /* 加进容器内 */
                                formContainerListElement.appendChild(formHeaderDivElement);
                                if (formItemConfig.className) {
                                    popsDOMUtils.addClassName(formContainerListElement, formItemConfig.className);
                                }
                                HandleContetDetails.addElementAttributes(formContainerListElement, formItemConfig.attributes);
                                HandleContetDetails.setElementProps(formContainerListElement, formItemConfig.props);
                                childForms.forEach((childFormConfig) => {
                                    HandleContetDetails.uListContainerAddItem(childFormConfig, {
                                        ulElement: formContainerULElement,
                                        sectionContainerULElement: HandleContetDetails.sectionContainerULElement,
                                        formContainerListElement: formContainerListElement,
                                        formHeaderDivElement: formHeaderDivElement,
                                    });
                                });
                                formContainerListElement.appendChild(formContainerULElement);
                                $container.appendChild(formContainerListElement);
                            }
                            else {
                                /* 如果成功创建，加入到中间容器中 */
                                HandleContetDetails.uListContainerAddItem(formConfig, {
                                    ulElement: HandleContetDetails.sectionContainerULElement,
                                });
                            }
                        },
                        /**
                         * 前往子菜单
                         * @param event 点击事件
                         * @param liElement 当前的<li>元素
                         */
                        gotoDeepMenu(event, liElement) {
                            /** 当前所在的容器 */
                            let currentSection = liElement.closest("section.pops-panel-container");
                            if (currentSection) {
                                popsDOMUtils.cssHide(currentSection);
                            }
                            // 子菜单的容器
                            let $deepMenuContainer = popsDOMUtils.createElement("section", {
                                className: "pops-panel-container pops-panel-deepMenu-container",
                            });
                            let $deepMenuHeaderUL = popsDOMUtils.createElement("ul", {
                                className: "pops-panel-deepMenu-container-header-ul",
                            });
                            let $deepMenuChildMenuUL = popsDOMUtils.createElement("ul");
                            // 标题文字
                            let headerTitleText = formConfig.headerTitle ?? formConfig.text;
                            let $header = popsDOMUtils.createElement("div", {
                                className: "pops-panel-deepMenu-container-header",
                                innerHTML: `<p>${headerTitleText}</p>`,
                            });
                            let $headerLeftArrow = popsDOMUtils.createElement("i", {
                                className: "pops-panel-deepMenu-container-left-arrow-icon",
                                innerHTML: pops.config.iconSVG.arrowLeft,
                            });
                            popsDOMUtils.on($headerLeftArrow, "click", void 0, (event) => {
                                event?.preventDefault();
                                event?.stopPropagation();
                                // 返回上一层菜单
                                let $prev = $deepMenuContainer.previousElementSibling;
                                popsDOMUtils.cssShow($prev);
                                $deepMenuContainer.remove();
                            }, {
                                once: true,
                            });
                            $header.firstElementChild?.insertAdjacentElement("beforebegin", $headerLeftArrow);
                            $deepMenuHeaderUL.appendChild($header);
                            $deepMenuContainer.appendChild($deepMenuHeaderUL);
                            $deepMenuContainer.appendChild($deepMenuChildMenuUL);
                            if (formConfig.forms && Array.isArray(formConfig.forms)) {
                                for (let index = 0; index < formConfig.forms.length; index++) {
                                    let formItemConfig = formConfig.forms[index];
                                    this.initFormItem($deepMenuChildMenuUL, formItemConfig);
                                }
                            }
                            $content?.appendChild($deepMenuContainer);
                            /* 根据标题的高度来自适应内容高度，默认开启 */
                            /* 中间容器的偏移量，看设置的section.pops-panel-container的padding，默认0 */
                            let contentContainerOffset = 0;
                            /* 获取标题的<ul>元素的高度 */
                            let sectionContainerHeaderULElementHeight = popsDOMUtils.height($deepMenuHeaderUL);
                            $deepMenuChildMenuUL.style.setProperty("height", `calc( 100% - ${sectionContainerHeaderULElementHeight + contentContainerOffset}px )`);
                        },
                        /** 设置项的点击事件 */
                        setLiClickEvent() {
                            popsDOMUtils.on(liElement, "click", void 0, async (event) => {
                                if (typeof formConfig.clickCallBack === "function") {
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
                    liElement["data-deepMenu"] = PopsPanelDeepMenu;
                    return liElement;
                },
                /**
                 * 获取中间容器的元素<li>
                 * type ===> own
                 * @param formConfig
                 */
                getSectionContainerItem_own(formConfig) {
                    let liElement = document.createElement("li");
                    liElement["__formConfig__"] = formConfig;
                    if (formConfig.className) {
                        liElement.className = formConfig.className;
                    }
                    liElement = formConfig.getLiElementCallBack(liElement);
                    return liElement;
                },
                /**
                 * 获取中间容器的元素<li>
                 * @param formConfig
                 */
                getSectionContainerItem(formConfig) {
                    /** 配置项的类型 */
                    let formType = formConfig["type"];
                    if (formType === "switch") {
                        return this.getSectionContainerItem_switch(formConfig);
                    }
                    else if (formType === "slider") {
                        return this.getSectionContainerItem_slider_new(formConfig);
                    }
                    else if (formType === "input") {
                        return this.getSectionContainerItem_input(formConfig);
                    }
                    else if (formType === "textarea") {
                        return this.getSectionContainerItem_textarea(formConfig);
                    }
                    else if (formType === "select") {
                        return this.getSectionContainerItem_select(formConfig);
                    }
                    else if (formType === "button") {
                        return this.getSectionContainerItem_button(formConfig);
                    }
                    else if (formType === "deepMenu") {
                        return this.getSectionContainerItem_deepMenu(formConfig);
                    }
                    else if (formType === "own") {
                        return this.getSectionContainerItem_own(formConfig);
                    }
                    else {
                        console.error("尚未实现的type类型", formConfig);
                    }
                },
                /**
                 * 生成配置每一项的元素
                 * @param formConfig
                 */
                initFormItem(formConfig) {
                    let that = this;
                    if (formConfig["type"] === "forms") {
                        let __formConfig_forms = formConfig;
                        let childForms = formConfig["forms"];
                        /* 每一项<li>元素 */
                        let formContainerListElement = document.createElement("li");
                        /* 每一项<li>内的子<ul>元素 */
                        let formContainerULElement = document.createElement("ul");
                        formContainerListElement.className =
                            "pops-panel-forms-container-item";
                        /* 区域头部的文字 */
                        let formHeaderDivElement = popsDOMUtils.createElement("div", {
                            className: "pops-panel-forms-container-item-header-text",
                        });
                        formHeaderDivElement.innerHTML = __formConfig_forms["text"];
                        /* 加进容器内 */
                        formContainerListElement.appendChild(formHeaderDivElement);
                        if (__formConfig_forms.className) {
                            popsDOMUtils.addClassName(formContainerListElement, __formConfig_forms.className);
                        }
                        that.addElementAttributes(formContainerListElement, formConfig.attributes);
                        that.setElementProps(formContainerListElement, formConfig.props);
                        childForms.forEach((childFormConfig) => {
                            that.uListContainerAddItem(childFormConfig, {
                                ulElement: formContainerULElement,
                                sectionContainerULElement: that.sectionContainerULElement,
                                formContainerListElement: formContainerListElement,
                                formHeaderDivElement: formHeaderDivElement,
                            });
                        });
                        formContainerListElement.appendChild(formContainerULElement);
                        that.sectionContainerULElement.appendChild(formContainerListElement);
                    }
                    else {
                        /* 如果成功创建，加入到中间容器中 */
                        that.uListContainerAddItem(formConfig, {
                            ulElement: that.sectionContainerULElement,
                        });
                    }
                },
                /**
                 *
                 * @param formConfig
                 * @param containerOptions
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
                 * @param asideLiElement 左侧的容器<li>元素
                 * @param asideConfig 配置
                 */
                setAsideItemClickEvent(asideLiElement, asideConfig) {
                    popsDOMUtils.on(asideLiElement, "click", void 0, (event) => {
                        this.clearContainer();
                        popsDOMUtils.cssShow($contentSectionContainer);
                        this.clearAsideItemIsVisited();
                        this.setAsideItemIsVisited(asideLiElement);
                        /* 顶部标题栏，存在就设置 */
                        let headerTitleText = asideConfig.headerTitle ?? asideConfig.title;
                        if (typeof headerTitleText === "string" &&
                            headerTitleText.trim() !== "") {
                            let containerHeaderTitleLIElement = document.createElement("li");
                            containerHeaderTitleLIElement["__asideConfig__"] =
                                asideConfig;
                            containerHeaderTitleLIElement.innerHTML = headerTitleText;
                            this.sectionContainerHeaderULElement.appendChild(containerHeaderTitleLIElement);
                        }
                        let __forms__ = asideLiElement["__forms__"];
                        __forms__.forEach((formConfig) => {
                            this.initFormItem(formConfig);
                        });
                        let autoAdaptionContentHeight = asideConfig.autoAdaptionContentHeight ?? true;
                        if (autoAdaptionContentHeight) {
                            /* 根据标题的高度来自适应内容高度，默认开启 */
                            /* 中间容器的偏移量，看设置的section.pops-panel-container的padding，默认0 */
                            let contentContainerOffset = asideConfig.contentContainerOffset ?? 0;
                            /* 获取标题的<ul>元素的高度 */
                            let sectionContainerHeaderULElementHeight = popsDOMUtils.height(this.sectionContainerHeaderULElement);
                            this.sectionContainerULElement.style.setProperty("height", `calc( 100% - ${sectionContainerHeaderULElementHeight + contentContainerOffset}px )`);
                        }
                        if (typeof asideConfig.callback === "function") {
                            /* 执行回调 */
                            asideConfig.callback(event, this.sectionContainerHeaderULElement, this.sectionContainerULElement);
                        }
                    });
                },
            };
            HandleContetDetails.init();
            PopsHandler.handlePush(PopsType, {
                guid: guid,
                animElement: $anim,
                popsElement: $pops,
                maskElement: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
            });
            /* 拖拽 */
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            return PopsHandler.handleResultDetails(eventDetails);
        }
    }

    class PopsRightClickMenu {
        constructor(details) {
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
            PopsHandler.handleInit($shadowRoot, [
                pops.config.cssText.index,
                pops.config.cssText.anim,
                pops.config.cssText.common,
            ]);
            let config = {
                target: document.documentElement,
                targetSelector: null,
                data: [
                    {
                        icon: pops.config.iconSVG.search,
                        iconIsLoading: false,
                        text: "搜索",
                        callback(clickEvent, contextMenuEvent, liElement) {
                            console.log("点击：" + this.text, [
                                clickEvent,
                                contextMenuEvent,
                                liElement,
                            ]);
                        },
                    },
                    {
                        icon: pops.config.iconSVG.documentCopy,
                        iconIsLoading: false,
                        text: "复制",
                        callback(clickEvent, contextMenuEvent, liElement) {
                            console.log("点击：" + this.text, [
                                clickEvent,
                                contextMenuEvent,
                                liElement,
                            ]);
                        },
                    },
                    {
                        icon: pops.config.iconSVG.delete,
                        text: "删除",
                        iconIsLoading: false,
                        callback(clickEvent, contextMenuEvent, liElement) {
                            console.log("点击：" + this.text, [
                                clickEvent,
                                contextMenuEvent,
                                liElement,
                            ]);
                        },
                    },
                    {
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
                                icon: "",
                                iconIsLoading: false,
                                text: "处理文件",
                                callback(clickEvent, contextMenuEvent, liElement) {
                                    console.log("点击：" + this.text, [
                                        clickEvent,
                                        contextMenuEvent,
                                        liElement,
                                    ]);
                                },
                            },
                            {
                                icon: "",
                                iconIsLoading: false,
                                text: "其它处理",
                                callback(clickEvent, contextMenuEvent, liElement) {
                                    console.log("点击：" + this.text, [
                                        clickEvent,
                                        contextMenuEvent,
                                        liElement,
                                    ]);
                                },
                                item: [
                                    {
                                        icon: pops.config.iconSVG.view,
                                        iconIsLoading: false,
                                        text: "查看",
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
                style: null,
                beforeAppendToPageCallBack() { },
            };
            config = popsUtils.assign(config, details);
            if (config.target == null) {
                throw "config.target 不能为空";
            }
            if (details.data) {
                config.data = details.data;
            }
            let guid = popsUtils.getRandomGUID();
            const PopsType = "rightClickMenu";
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
                 */
                rootElement: null,
                /**
                 * 全局点击检测
                 * @param event
                 */
                windowCheckClickEvent(event) {
                    if (!PopsContextMenu.rootElement) {
                        return;
                    }
                    let $click = event.target;
                    if ($click.closest(`.pops-${PopsType}`)) {
                        return;
                    }
                    if ($click.className &&
                        $click.className === "pops-shadow-container" &&
                        $click.shadowRoot != null) {
                        return;
                    }
                    PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
                },
                /**
                 * target为shadowRoot或shadowRoot内的全局点击检测
                 * @param event
                 */
                shadowRootCheckClickEvent(event) {
                    if (!PopsContextMenu.rootElement) {
                        return;
                    }
                    let $click = event.target;
                    if ($click.closest(`.pops-${PopsType}`)) {
                        return;
                    }
                    PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
                },
                /**
                 * 添加全局点击检测事件
                 */
                addWindowCheckClickListener() {
                    popsDOMUtils.on(globalThis, "click touchstart", void 0, PopsContextMenu.windowCheckClickEvent, {
                        capture: true,
                    });
                    if (config.target instanceof Node) {
                        const $shadowRoot = config.target.getRootNode();
                        if ($shadowRoot instanceof ShadowRoot) {
                            popsDOMUtils.on($shadowRoot, "click touchstart", void 0, PopsContextMenu.shadowRootCheckClickEvent, {
                                capture: true,
                            });
                        }
                    }
                },
                /**
                 * 移除全局点击检测事件
                 */
                removeWindowCheckClickListener() {
                    popsDOMUtils.off(globalThis, "click touchstart", void 0, PopsContextMenu.windowCheckClickEvent, {
                        capture: true,
                    });
                    if (config.target instanceof Node) {
                        const $shadowRoot = config.target.getRootNode();
                        if ($shadowRoot instanceof ShadowRoot) {
                            popsDOMUtils.off($shadowRoot, "click touchstart", void 0, PopsContextMenu.windowCheckClickEvent, {
                                capture: true,
                            });
                        }
                    }
                },
                /**
                 * contextmenu事件
                 * @param event
                 */
                contextMenuEvent(event) {
                    if (config.preventDefault) {
                        popsDOMUtils.preventEvent(event);
                    }
                    if (PopsContextMenu.rootElement) {
                        PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
                    }
                    PopsContextMenu.rootElement = PopsContextMenu.showMenu(event, config.data);
                },
                /**
                 * 添加contextmenu事件
                 * @param target 目标
                 * @param selector 子元素选择器
                 */
                addContextMenuEvent(target, selector) {
                    popsDOMUtils.on(target, "contextmenu", selector, PopsContextMenu.contextMenuEvent);
                },
                /**
                 * 移除contextmenu事件
                 * @param target 目标
                 * @param selector 子元素选择器
                 */
                removeContextMenuEvent(target, selector) {
                    popsDOMUtils.off(target, "contextmenu", selector, PopsContextMenu.contextMenuEvent);
                },
                /**
                 * 自动判断是否存在动画，存在动画就执行关闭动画并删除
                 * @param element
                 */
                animationCloseMenu(element) {
                    /**
                     * 动画结束触发的事件
                     */
                    function transitionEndEvent(event) {
                        popsDOMUtils.off(element, popsDOMUtils.getTransitionEndNameList(), void 0, transitionEndEvent, {
                            capture: true,
                        });
                        element.remove();
                    }
                    if (element.classList.contains(`pops-${PopsType}-anim-show`)) {
                        /* 有动画 */
                        popsDOMUtils.on(element, popsDOMUtils.getTransitionEndNameList(), void 0, transitionEndEvent, {
                            capture: true,
                        });
                        element.classList.remove(`pops-${PopsType}-anim-show`);
                    }
                    else {
                        /* 无动画 */
                        element.remove();
                    }
                },
                /**
                 * 关闭所有菜单
                 * @param rootElement
                 */
                closeAllMenu(rootElement) {
                    if (rootElement?.["__menuData__"]?.root) {
                        rootElement = rootElement?.["__menuData__"]?.root;
                    }
                    let childMenuList = rootElement["__menuData__"]
                        .child;
                    childMenuList.forEach((childMenuElement) => {
                        this.animationCloseMenu(childMenuElement);
                    });
                    this.animationCloseMenu(rootElement);
                    PopsContextMenu.rootElement = null;
                },
                /**
                 * 获取菜单容器
                 * @param zIndex z-index值
                 * @param isChildren 是否是rightClickMenu的某一项的子菜单
                 */
                getMenuContainerElement(zIndex, isChildren) {
                    let menuElement = popsUtils.parseTextToDOM(/*html*/ `
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
                        popsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-grid`);
                    }
                    return menuElement;
                },
                /**
                 * 动态获取配的z-index
                 */
                getMenuZIndex() {
                    return PopsHandler.handleZIndex(config.zIndex);
                },
                /**
                 * 获取left、top偏移
                 * @param menuElement 菜单元素
                 * @param x
                 * @param y
                 */
                getOffset(menuElement, x, y) {
                    /* left最大偏移 */
                    let maxLeftOffset = popsDOMUtils.width(globalThis) - popsDOMUtils.width(menuElement) - 1;
                    /* top最大偏移 */
                    let maxTopOffset = popsDOMUtils.height(globalThis) -
                        popsDOMUtils.height(menuElement) -
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
                 * @param menuEvent 触发的事件
                 * @param _config_
                 */
                showMenu(menuEvent, _config_) {
                    let menuElement = this.getMenuContainerElement(this.getMenuZIndex(), false);
                    menuElement["__menuData__"] = {
                        child: [],
                    };
                    PopsContextMenu.addMenuLiELement(menuEvent, menuElement, menuElement, _config_);
                    /* 先隐藏 */
                    popsDOMUtils.css(menuElement, {
                        display: "none",
                    });
                    popsDOMUtils.append($shadowRoot, menuElement);
                    /* 添加到页面 */
                    if (!document.contains($shadowContainer)) {
                        if (typeof config.beforeAppendToPageCallBack === "function") {
                            config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
                        }
                        popsDOMUtils.appendBody($shadowContainer);
                    }
                    let { left: menuLeftOffset, top: menuTopOffset } = this.getOffset(menuElement, menuEvent.clientX, menuEvent.clientY);
                    popsDOMUtils.css(menuElement, {
                        left: menuLeftOffset,
                        top: menuTopOffset,
                        display: "",
                    });
                    /* 过渡动画 */
                    if (config.isAnimation) {
                        popsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-show`);
                    }
                    return menuElement;
                },
                /**
                 * 显示子菜单
                 * @param menuEvent 事件
                 * @param posInfo 位置信息
                 * @param  _config_
                 * @param rootElement 根菜单元素
                 * @param targetLiElement 父li项元素
                 */
                showClildMenu(menuEvent, posInfo, _config_, rootElement, targetLiElement) {
                    let menuElement = this.getMenuContainerElement(this.getMenuZIndex(), true);
                    menuElement["__menuData__"] = {
                        parent: targetLiElement,
                        root: rootElement,
                    };
                    rootElement["__menuData__"].child.push(menuElement);
                    PopsContextMenu.addMenuLiELement(menuEvent, rootElement, menuElement, _config_);
                    /* 先隐藏 */
                    popsDOMUtils.css(menuElement, {
                        display: "none",
                    });
                    /* 添加到页面 */
                    popsDOMUtils.append($shadowRoot, menuElement);
                    let { left: menuLeftOffset, top: menuTopOffset } = this.getOffset(menuElement, posInfo.clientX, posInfo.clientY);
                    popsDOMUtils.css(menuElement, {
                        left: menuLeftOffset,
                        top: menuTopOffset,
                        display: "",
                    });
                    /* 过渡动画 */
                    if (config.isAnimation) {
                        popsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-show`);
                    }
                    return menuElement;
                },
                /**
                 * 获取菜单项的元素
                 * @param menuEvent 事件
                 * @param rootElement 根元素
                 * @param menuElement 菜单元素
                 * @param _config_ 配置
                 */
                addMenuLiELement(menuEvent, rootElement, menuElement, _config_) {
                    let menuEventTarget = menuEvent.target;
                    let menuULElement = menuElement.querySelector("ul");
                    _config_.forEach((item) => {
                        let menuLiElement = popsUtils.parseTextToDOM(`<li></li>`);
                        /* 判断有无图标，有就添加进去 */
                        if (typeof item.icon === "string" && item.icon.trim() !== "") {
                            let iconSVGHTML = pops.config.iconSVG[item.icon] ?? item.icon;
                            let iconElement = popsUtils.parseTextToDOM(`<i class="pops-${PopsType}-icon" is-loading="${item.iconIsLoading}">${iconSVGHTML}</i>`);
                            menuLiElement.appendChild(iconElement);
                        }
                        /* 插入文字 */
                        menuLiElement.insertAdjacentHTML("beforeend", `<span>${item.text}</span>`);
                        /* 如果存在子数据，显示 */
                        if (item.item && Array.isArray(item.item)) {
                            popsDOMUtils.addClassName(menuLiElement, `pops-${PopsType}-item`);
                        }
                        /* 鼠标|触摸 移入事件 */
                        function liElementHoverEvent() {
                            Array.from(menuULElement.children).forEach((liElement) => {
                                popsDOMUtils.removeClassName(liElement, `pops-${PopsType}-is-visited`);
                                if (!liElement.__menuData__) {
                                    return;
                                }
                                function removeElement(element) {
                                    element.querySelectorAll("ul li").forEach((ele) => {
                                        if (ele?.__menuData__?.child) {
                                            removeElement(ele.__menuData__.child);
                                        }
                                    });
                                    element.remove();
                                }
                                /* 遍历根元素的上的__menuData__.child，判断 */
                                removeElement(liElement.__menuData__.child);
                            });
                            /* 清理根元素上的children不存在于页面中的元素 */
                            for (let index = 0; index < rootElement.__menuData__.child.length; index++) {
                                let element = rootElement.__menuData__.child[index];
                                if (!$shadowRoot.contains(element)) {
                                    rootElement.__menuData__.child.splice(index, 1);
                                    index--;
                                }
                            }
                            popsDOMUtils.addClassName(menuLiElement, `pops-${PopsType}-is-visited`);
                            if (!item.item) {
                                return;
                            }
                            let rect = menuLiElement.getBoundingClientRect();
                            let childMenu = PopsContextMenu.showClildMenu(menuEvent, {
                                clientX: rect.left + popsDOMUtils.outerWidth(menuLiElement),
                                clientY: rect.top,
                            }, item.item, rootElement, menuLiElement);
                            menuLiElement.__menuData__ = {
                                child: childMenu,
                            };
                        }
                        /**
                         * 点击事件
                         * @param clickEvent
                         * @returns
                         */
                        async function liElementClickEvent(clickEvent) {
                            if (typeof item.callback === "function") {
                                OriginPrototype$1.Object.defineProperty(menuEvent, "target", {
                                    get() {
                                        return menuEventTarget;
                                    },
                                });
                                let callbackResult = await item.callback(clickEvent, menuEvent, menuLiElement);
                                if (typeof callbackResult === "boolean" &&
                                    callbackResult == false) {
                                    return;
                                }
                            }
                            /* 取消绑定的鼠标/触摸事件，防止关闭的时候再次触发 */
                            Array.from(menuULElement.children).forEach((liEle) => {
                                popsDOMUtils.off(liEle, "mouseenter touchstart");
                            });
                            PopsContextMenu.closeAllMenu(rootElement);
                        }
                        popsDOMUtils.on(menuLiElement, "mouseenter touchstart", void 0, liElementHoverEvent);
                        /* 项-点击事件 */
                        popsDOMUtils.on(menuLiElement, "click", void 0, liElementClickEvent);
                        menuULElement.appendChild(menuLiElement);
                    });
                },
            };
            PopsContextMenu.addContextMenuEvent(config.target, config.targetSelector);
            PopsContextMenu.addWindowCheckClickListener();
            return {
                guid: guid,
                config: config,
                removeWindowCheckClickListener: PopsContextMenu.removeWindowCheckClickListener,
                addWindowCheckClickListener: PopsContextMenu.addWindowCheckClickListener,
                removeContextMenuEvent: PopsContextMenu.removeContextMenuEvent,
                addContextMenuEvent: PopsContextMenu.addContextMenuEvent,
            };
        }
    }

    class PopsSearchSuggestion {
        constructor(details) {
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
            PopsHandler.handleInit($shadowRoot, [
                pops.config.cssText.index,
                pops.config.cssText.anim,
                pops.config.cssText.common,
            ]);
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
                    this.inputTarget.value = data.value;
                },
                selectCallBack(event, liElement, data) {
                    console.log("item项的选中回调", [event, liElement, data]);
                },
                style: "",
            };
            config = popsUtils.assign(config, details);
            if (config.target == null) {
                throw new TypeError("config.target 不能为空");
            }
            /* 做下兼容处理 */
            if (config.inputTarget == null) {
                config.inputTarget = config.target;
            }
            if (details.data) {
                config.data = details.data;
            }
            const guid = popsUtils.getRandomGUID();
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
                 */
                root: null,
                /**
                 * ul元素
                 */
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
                    let element = popsDOMUtils.createElement("div", {
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
								z-index: ${PopsHandler.handleZIndex(config.zIndex)};
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
                    }, {
                        "data-guid": guid,
                        "type-value": PopsType,
                    });
                    if (config.className !== "" && config.className != null) {
                        popsDOMUtils.addClassName(element, config.className);
                    }
                    return element;
                },
                /**
                 * 获取显示出搜索建议框的每一项的html
                 * @param data 当前项的值
                 * @param index 当前项的下标
                 */
                getSearchItemLiElement(data, index) {
                    return popsDOMUtils.createElement("li", {
                        className: `pops-${PopsType}-search-suggestion-hint-item pops-flex-items-center pops-flex-y-center`,
                        "data-index": index,
                        "data-value": SearchSuggestion.getItemDataValue(data),
                        innerHTML: `
          			${config.getItemHTML(data)}
          			${config.deleteIcon.enable
                        ? SearchSuggestion.getDeleteIconHTML()
                        : ""}
          			`,
                    });
                },
                /**
                 * 获取data-value值
                 * @param data
                 */
                getItemDataValue(data) {
                    return data;
                },
                /**
                 * 设置搜索建议框每一项的点击事件
                 * @param liElement
                 */
                setSearchItemClickEvent(liElement) {
                    popsDOMUtils.on(liElement, "click", void 0, (event) => {
                        popsDOMUtils.preventEvent(event);
                        let $click = event.target;
                        if ($click.closest(`.pops-${PopsType}-delete-icon`)) {
                            /* 点击的是删除按钮 */
                            if (typeof config.deleteIcon.callback === "function") {
                                config.deleteIcon.callback(event, liElement, liElement["data-value"]);
                            }
                            if (!this.hintULElement.children.length) {
                                /* 全删完了 */
                                this.clear();
                            }
                        }
                        else {
                            /* 点击项主体 */
                            config.itemClickCallBack(event, liElement, liElement["data-value"]);
                        }
                    }, {
                        capture: true,
                    });
                },
                /**
                 * 设置搜索建议框每一项的选中事件
                 * @param liElement
                 */
                setSearchItemSelectEvent(liElement) {
                    // popsDOMUtils.on(
                    // 	liElement,
                    // 	"keyup",
                    // 	void 0,
                    // 	(event) => {
                    // 		let value = liElement["data-value"];
                    // 		config.selectCallBack(event, liElement, value);
                    // 	},
                    // 	{
                    // 		capture: true,
                    // 	}
                    // );
                },
                /**
                 * 监听输入框内容改变
                 */
                setInputChangeEvent() {
                    /* 是input输入框 */
                    /* 禁用输入框自动提示 */
                    config.inputTarget.setAttribute("autocomplete", "off");
                    /* 内容改变事件 */
                    popsDOMUtils.on(config.inputTarget, "input", void 0, async (event) => {
                        let getListResult = await config.getData(event.target.value);
                        SearchSuggestion.update(getListResult);
                    }, {
                        capture: true,
                    });
                },
                /**
                 * 移除输入框内容改变的监听
                 */
                removeInputChangeEvent() {
                    popsDOMUtils.off(config.inputTarget, "input", void 0, void 0, {
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
                        }
                        else {
                            SearchSuggestion.show();
                        }
                    }
                    else {
                        SearchSuggestion.show();
                    }
                },
                /**
                 * 设置显示搜索建议框的事件
                 */
                setShowEvent() {
                    /* 焦点|点击事件*/
                    if (config.followPosition === "target") {
                        popsDOMUtils.on([config.target], ["focus", "click"], void 0, SearchSuggestion.showEvent, {
                            capture: true,
                        });
                    }
                    else if (config.followPosition === "input") {
                        popsDOMUtils.on([config.inputTarget], ["focus", "click"], void 0, SearchSuggestion.showEvent, {
                            capture: true,
                        });
                    }
                    else if (config.followPosition === "inputCursor") {
                        popsDOMUtils.on([config.inputTarget], ["focus", "click", "input"], void 0, SearchSuggestion.showEvent, {
                            capture: true,
                        });
                    }
                    else {
                        throw new TypeError("未知followPosition：" + config.followPosition);
                    }
                },
                /**
                 * 移除显示搜索建议框的事件
                 */
                removeShowEvent() {
                    /* 焦点|点击事件*/
                    popsDOMUtils.off([config.target, config.inputTarget], ["focus", "click"], void 0, SearchSuggestion.showEvent, {
                        capture: true,
                    });
                    /* 内容改变事件 */
                    popsDOMUtils.off([config.inputTarget], ["input"], void 0, SearchSuggestion.showEvent, {
                        capture: true,
                    });
                },
                /**
                 * 隐藏搜索建议框的事件
                 * @param event
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
                    popsDOMUtils.on(SearchSuggestion.selfDocument, ["click", "touchstart"], void 0, SearchSuggestion.hideEvent, {
                        capture: true,
                    });
                },
                /**
                 * 移除隐藏搜索建议框的事件
                 */
                removeHideEvent() {
                    popsDOMUtils.off(SearchSuggestion.selfDocument, ["click", "touchstart"], void 0, SearchSuggestion.hideEvent, {
                        capture: true,
                    });
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
                    let isSearchingElement = popsDOMUtils.createElement("li", {
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
                        .querySelector(`li.pops-${PopsType}-search-suggestion-hint-searching-item`)
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
                changeHintULElementPosition(target = config.target ?? config.inputTarget) {
                    /** @type {DOMRect|null} */
                    let targetRect = null;
                    if (config.followPosition === "inputCursor") {
                        targetRect = popsDOMUtils.getTextBoundingRect(config.inputTarget, config.inputTarget.selectionStart || 0, config.inputTarget.selectionEnd || 0, false);
                    }
                    else {
                        targetRect = config.isAbsolute
                            ? popsDOMUtils.offset(target)
                            : target.getBoundingClientRect();
                    }
                    if (targetRect == null) {
                        return;
                    }
                    // 文档最大高度
                    let documentHeight = document.documentElement.clientHeight;
                    if (config.isAbsolute) {
                        // 绝对定位
                        documentHeight = popsDOMUtils.height(document);
                    }
                    // 文档最大宽度
                    let documentWidth = popsDOMUtils.width(document);
                    if (config.position === "top") {
                        if (config.positionTopToReverse) {
                            SearchSuggestion.hintULElement.setAttribute("data-top-reverse", "true");
                        }
                        // 在上面
                        SearchSuggestion.hintULElement.style.top = "";
                        SearchSuggestion.hintULElement.style.bottom =
                            documentHeight - targetRect.top + config.topDistance + "px";
                    }
                    else if (config.position === "bottom") {
                        // 在下面
                        SearchSuggestion.hintULElement.removeAttribute("data-top-reverse");
                        SearchSuggestion.hintULElement.style.bottom = "";
                        SearchSuggestion.hintULElement.style.top =
                            targetRect.height + targetRect.top + config.topDistance + "px";
                    }
                    else if (config.position === "auto") {
                        // 自动判断
                        if (targetRect.bottom +
                            popsDOMUtils.height(SearchSuggestion.hintULElement) >
                            documentHeight) {
                            if (config.positionTopToReverse) {
                                SearchSuggestion.hintULElement.setAttribute("data-top-reverse", "true");
                            }
                            // 超出浏览器高度了，自动转换为上面去
                            SearchSuggestion.hintULElement.style.top = "";
                            SearchSuggestion.hintULElement.style.bottom =
                                documentHeight - targetRect.top + config.topDistance + "px";
                        }
                        else {
                            SearchSuggestion.hintULElement.removeAttribute("data-top");
                            SearchSuggestion.hintULElement.style.bottom = "";
                            SearchSuggestion.hintULElement.style.top =
                                targetRect.height + targetRect.top + config.topDistance + "px";
                        }
                    }
                    else {
                        throw new TypeError("未知设置的位置" + config.position);
                    }
                    let hintUIWidth = popsDOMUtils.width(SearchSuggestion.hintULElement);
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
                    }
                    else {
                        SearchSuggestion.hintULElement.style.width = config.width;
                    }
                },
                /**
                 * 更新页面显示的搜索结果
                 * @param data
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
                            let itemElement = SearchSuggestion.getSearchItemLiElement(item, index);
                            SearchSuggestion.setSearchItemClickEvent(itemElement);
                            SearchSuggestion.setSearchItemSelectEvent(itemElement);
                            SearchSuggestion.hintULElement.appendChild(itemElement);
                        });
                    }
                    else {
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
                    this.hintULElement.appendChild(popsUtils.parseTextToDOM(config.toSearhNotResultHTML));
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
        }
    }

    class Pops {
        /** 配置 */
        config = {
            /** 版本号 */
            version: "2024.9.10",
            cssText: {
                /** 主CSS */
                index: indexCSS,
                /** 九宫格位置CSS */
                ninePalaceGridPosition: ninePalaceGridPositionCSS,
                /** 滚动条CSS */
                scrollbar: scrollbarCSS,
                /** 按钮CSS */
                button: buttonCSS,
                /** 通用的CSS */
                common: commonCSS,
                /** 动画 */
                anim: animCSS,
                /** pops.alert */
                alertCSS: alertCSS,
                /** pops.cponfirm */
                confirmCSS: confirmCSS,
                /** pops.prompt */
                promptCSS: promptCSS,
                /** pops.loading */
                loadingCSS: loadingCSS,
                /** pops.iframe */
                iframeCSS: iframeCSS,
                /** pops.tooltip */
                tooltipCSS: tooltipCSS,
                /** pops.drawer */
                drawerCSS: drawerCSS,
                /** pops.folder */
                folderCSS: folderCSS,
                /** pops.folder */
                panelCSS: panelCSS,
            },
            /** icon图标的svg代码 */
            iconSVG: {
                min: SVG_min,
                mise: SVG_mise,
                max: SVG_max,
                close: SVG_close,
                edit: SVG_edit,
                share: SVG_share,
                delete: SVG_delete,
                search: SVG_search,
                upload: SVG_upload,
                loading: SVG_loading,
                next: SVG_next,
                prev: SVG_prev,
                eleme: SVG_eleme,
                elemePlus: SVG_elemePlus,
                chromeFilled: SVG_chromeFilled,
                cpu: SVG_cpu,
                videoPlay: SVG_videoPlay,
                videoPause: SVG_videoPause,
                headset: SVG_headset,
                monitor: SVG_monitor,
                documentCopy: SVG_documentCopy,
                picture: SVG_picture,
                circleClose: SVG_circleClose,
                view: SVG_view,
                hide: SVG_hide,
                keyboard: SVG_keyboard,
                arrowRight: SVG_arrowRight,
                arrowLeft: SVG_arrowLeft,
            },
            /** 当前已配置的动画@keyframes名字映射(初始化时生成) */
            animation: {},
            /** 是否初始化 */
            isInit: false,
            /** 存储已创建的元素 */
            layer: {
                alert: [],
                confirm: [],
                prompt: [],
                loading: [],
                iframe: [],
                tooltip: [],
                drawer: [],
                folder: [],
                panel: [],
            },
            /** 禁止滚动 */
            forbiddenScroll: {
                event(event) {
                    return popsDOMUtils.preventEvent(event);
                },
            },
            /** pops使用的工具类 */
            Utils: popsUtils,
            /** pops使用的DOM工具类 */
            DOMUtils: popsDOMUtils,
            /** pops创建的实例使用的工具类 */
            InstanceUtils: PopsInstanceUtils,
            /** pops处理float类型使用的工具类 */
            MathFloatUtils: PopsMathFloatUtils,
        };
        constructor() { }
        init() {
            if (!this.config.isInit) {
                /* 处理获取当前所有的动画名 */
                this.config.isInit = true;
                let animationStyle = document.createElement("style");
                animationStyle.innerHTML = this.config.cssText.anim;
                popsDOMUtils.appendHead(animationStyle);
                this.config.animation = null;
                this.config.animation = PopsInstanceUtils.getKeyFrames(animationStyle.sheet);
                setTimeout(() => {
                    animationStyle.remove();
                }, 50);
            }
        }
        /**
         * 释放原有的pops控制权
         * @example
         * let pops = window.pops.noConflict()
         */
        noConflict() {
            if (typeof PopsCore.globalThis.pops === "object") {
                popsUtils.delete(PopsCore.globalThis, "pops");
            }
            if (typeof unsafeWindow === "object" &&
                unsafeWindow != null &&
                typeof unsafeWindow.pops === "object") {
                popsUtils.delete(unsafeWindow, "pops");
            }
            return new Pops();
        }
        /**
         * 通过navigator.userAgent判断是否是手机访问
         * @param userAgent
         */
        isPhone(userAgent = PopsCore.globalThis.navigator.userAgent) {
            return Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(userAgent));
        }
        /**
         * 普通信息框
         * @param details 配置
         */
        alert = (details) => {
            return new PopsAlert(details);
        };
        /**
         * 询问框
         * @param details 配置
         */
        confirm = (details) => {
            return new PopsConfirm(details);
        };
        /**
         * 输入框
         * @param details 配置
         */
        prompt = (details) => {
            return new PopsPrompt(details);
        };
        /**
         * 加载层
         * @param details 配置
         */
        loading = (details) => {
            return new PopsLoading(details);
        };
        /**
         * iframe层
         * @param details 配置
         */
        iframe = (details) => {
            return new PopsIframe(details);
        };
        /**
         * 提示框
         * @param details 配置
         */
        tooltip = (details) => {
            return new PopsTooltip(details);
        };
        /**
         * 抽屉
         * @param details 配置
         */
        drawer = (details) => {
            return new PopsDrawer(details);
        };
        /**
         * 文件夹
         * @param details 配置
         */
        folder = (details) => {
            return new PopsFolder(details);
        };
        /**
         * 配置面板
         * @param details 配置
         */
        panel = (details) => {
            return new PopsPanel(details);
        };
        /**
         * 右键菜单
         * @param details 配置
         */
        rightClickMenu = (details) => {
            return new PopsRightClickMenu(details);
        };
        /**
         * 搜索建议
         * @param details 配置
         */
        searchSuggestion = (details) => {
            return new PopsSearchSuggestion(details);
        };
    }
    const pops = new Pops();

    return pops;

}));
//# sourceMappingURL=index.umd.js.map
