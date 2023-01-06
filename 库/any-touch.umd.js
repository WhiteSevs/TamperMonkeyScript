(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AnyTouch = factory());
})(this, (function () { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
                for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
                    var type = types_1_1.value;
                    this.__map[type] = this.__map[type] || [];
                    var listeners = this.__map[type];
                    if (listeners) {
                        listeners.push(listener);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (types_1_1 && !types_1_1.done && (_a = types_1.return)) _a.call(types_1);
                }
                finally { if (e_1) throw e_1.error; }
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
            }
            else {
                this.__emit(type, payload);
                callback && callback();
            }
        };
        AnyEvent.prototype.__emit = function (type, event) {
            var e_2, _a;
            var listeners = this.__map[type];
            if (Array.isArray(listeners) && (listeners === null || listeners === void 0 ? void 0 : listeners.length)) {
                try {
                    for (var listeners_1 = __values(listeners), listeners_1_1 = listeners_1.next(); !listeners_1_1.done; listeners_1_1 = listeners_1.next()) {
                        var listener = listeners_1_1.value;
                        listener(event, type);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (listeners_1_1 && !listeners_1_1.done && (_a = listeners_1.return)) _a.call(listeners_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            this.event = event;
        };
        AnyEvent.prototype.off = function (type, listener) {
            var listeners = this.__map[type];
            if (void 0 !== listeners) {
                if (void 0 === listener) {
                    delete this.__map[type];
                }
                else {
                    var index = listeners.findIndex(function (cb) { return cb === listener; });
                    listeners.splice(index, 1);
                }
            }
        };
        AnyEvent.prototype.destroy = function () {
            this.__map = {};
        };
        return AnyEvent;
    }());

    var TOUCH_START = 'touchstart';
    var TOUCH_MOVE = 'touchmove';
    var TOUCH_END = 'touchend';
    var TOUCH_CANCEL = 'touchcancel';
    var MOUSE_UP = 'mouseup';
    var MOUSE_MOVE = 'mousemove';
    var MOUSE_DOWN = 'mousedown';
    var TYPE_START$1 = 'start';
    var TYPE_MOVE$1 = 'move';
    var TYPE_END$1 = 'end';
    function isFunction(input) {
        return '[object Function]' === Object.prototype.toString.call(input);
    }

    var CLIENT_X = 'clientX';
    var CLIENT_Y = 'clientY';
    var COMPUTE_INTERVAL = 16;
    var TYPE_START = 'start';
    var TYPE_MOVE = 'move';
    var TYPE_CANCEL = 'cancel';
    var TYPE_END = 'end';
    var DIRECTION_LEFT = 'left';
    var DIRECTION_RIGHT = 'right';
    var DIRECTION_UP = 'up';
    var DIRECTION_DOWN = 'down';

    var _a;
    var STATUS_CODE_AND_NAME_MAP = (_a = {},
        _a[4] = TYPE_START,
        _a[5] = TYPE_MOVE,
        _a[1] = TYPE_END,
        _a[3] = TYPE_CANCEL,
        _a);
    function getStatusName(code) {
        return STATUS_CODE_AND_NAME_MAP[code];
    }
    function flow(isVaild, lastStatus, phase) {
        var _a, _b, _c, _d, _e, _f, _g;
        var STATE_MAP = {
            1: (_a = {},
                _a[0] = (_b = {},
                    _b[TYPE_MOVE] = 4,
                    _b),
                _a[4] = (_c = {},
                    _c[TYPE_MOVE] = 5,
                    _c[TYPE_END] = 1,
                    _c[TYPE_CANCEL] = 3,
                    _c),
                _a[5] = (_d = {},
                    _d[TYPE_MOVE] = 5,
                    _d[TYPE_END] = 1,
                    _d[TYPE_CANCEL] = 3,
                    _d),
                _a),
            0: (_e = {},
                _e[4] = (_f = {},
                    _f[TYPE_MOVE] = 2,
                    _f[TYPE_END] = 1,
                    _f[TYPE_CANCEL] = 3,
                    _f),
                _e[5] = (_g = {},
                    _g[TYPE_START] = 2,
                    _g[TYPE_MOVE] = 2,
                    _g[TYPE_END] = 1,
                    _g[TYPE_CANCEL] = 3,
                    _g),
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
        return __assign(__assign(__assign({}, defaultOptions), options), { state: 0, disabled: false });
    }

    function round2(n) {
        return Math.round(n * 100) / 100;
    }

    function inputCreator () {
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
                var isStart = pureInput.isStart, pointLength = pureInput.pointLength;
                if (isStart) {
                    startInput = pureInput;
                    prevInput = void 0;
                    if (1 < pointLength) {
                        startMultiInput = pureInput;
                    }
                    else {
                        startMultiInput = void 0;
                    }
                }
                return __assign(__assign({}, pureInput), { prevInput: prevInput, startMultiInput: startMultiInput, startInput: startInput });
            }
        };
    }
    function getCenter(points) {
        var length = points.length;
        if (0 < length) {
            if (1 === length) {
                var _a = points[0], clientX = _a.clientX, clientY = _a.clientY;
                return { x: Math.round(clientX), y: Math.round(clientY) };
            }
            var countPoint = points.reduce(function (countPoint, point) {
                countPoint.x += point[CLIENT_X];
                countPoint.y += point[CLIENT_Y];
                return countPoint;
            }, { x: 0, y: 0 });
            return { x: Math.round(countPoint.x / length), y: Math.round(countPoint.y / length) };
        }
    }
    function extendInput(basicsInput, id) {
        var phase = basicsInput.phase, points = basicsInput.points, changedPoints = basicsInput.changedPoints, nativeEvent = basicsInput.nativeEvent;
        var pointLength = points.length;
        var isStart = TYPE_START === phase;
        var isEnd = (TYPE_END === phase && 0 === pointLength) || TYPE_CANCEL === phase;
        var timestamp = Date.now();
        var _a = getCenter(points) || getCenter(changedPoints), x = _a.x, y = _a.y;
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
                if (el === void 0) { el = currentTarget; }
                var rect = el.getBoundingClientRect();
                return { x: x - Math.round(rect.left), y: y - Math.round(rect.top) };
            }
        });
    }

    function mouse () {
        var prevPoints;
        var isPressed = false;
        var _target = null;
        var createInput = inputCreator();
        return function (event) {
            var clientX = event.clientX, clientY = event.clientY, type = event.type, button = event.button, target = event.target;
            var points = [{ clientX: clientX, clientY: clientY, target: target }];
            var phase;
            if (MOUSE_DOWN === type && 0 === button) {
                _target = target;
                isPressed = true;
                phase = TYPE_START$1;
            }
            else if (isPressed) {
                if (MOUSE_MOVE === type) {
                    phase = TYPE_MOVE$1;
                }
                else if (MOUSE_UP === type) {
                    points = [];
                    phase = TYPE_END$1;
                    isPressed = false;
                }
            }
            else {
                return;
            }
            var changedPoints = prevPoints || [{ clientX: clientX, clientY: clientY, target: target }];
            prevPoints = [{ clientX: clientX, clientY: clientY, target: target }];
            if (void 0 !== phase) {
                return createInput({
                    phase: phase,
                    changedPoints: changedPoints,
                    points: points,
                    target: _target,
                    targets: [_target],
                    nativeEvent: event
                });
            }
        };
    }

    function touch (el) {
        var createInput = inputCreator();
        return function (event) {
            var targets = [];
            var points = [];
            Array.from(event.touches).forEach(function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, target = _a.target;
                if (el === null || el === void 0 ? void 0 : el.contains(target)) {
                    targets.push(target);
                    points.push({ clientX: clientX, clientY: clientY, target: target });
                }
            });
            var changedPoints = Array.from(event.changedTouches).map(function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, target = _a.target;
                return ({ clientX: clientX, clientY: clientY, target: target });
            });
            return createInput({
                phase: event.type.replace('touch', ''),
                changedPoints: changedPoints,
                points: points,
                nativeEvent: event,
                target: event.target,
                targets: targets
            });
        };
    }

    function dispatchDomEvent (typeName, el, payload, eventInit) {
        var data = {};
        for (var key in payload) {
            if (!['target', 'currentTarget', 'type'].includes(key)) {
                data[key] = payload[key];
            }
        }
        var event;
        if (document.createEvent) {
            event = document.createEvent('HTMLEvents');
            event.initEvent(typeName, eventInit === null || eventInit === void 0 ? void 0 : eventInit.bubbles, eventInit === null || eventInit === void 0 ? void 0 : eventInit.cancelable);
        }
        else {
            event = new Event(typeName, eventInit);
        }
        Object.assign(event, data, {
            match: function () {
                return payload.targets && 0 < payload.targets.length && payload.targets.every(function (target) { return event.currentTarget.contains(target); });
            },
        });
        return el.dispatchEvent(event);
    }

    function canPreventDefault (event, options) {
        var preventDefault = options.preventDefault;
        if (isFunction(preventDefault)) {
            return preventDefault(event);
        }
        else {
            return !!preventDefault;
        }
    }

    var ELEMENT_TYPES = [TOUCH_START, TOUCH_MOVE, TOUCH_END, TOUCH_CANCEL, MOUSE_DOWN];
    var WINDOW_TYPES = [MOUSE_MOVE, MOUSE_UP];
    function bindElement (el, catchEvent, options) {
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

    var TYPE_COMPUTED = 'computed';
    var DEFAULT_OPTIONS$6 = {
        domEvents: { bubbles: true, cancelable: true },
        preventDefault: function (event) {
            if (event.target && 'tagName' in event.target) {
                var tagName = event.target.tagName;
                return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(tagName);
            }
            return false;
        },
    };
    var TYPE_UNBIND = 'u';
    var TYPE_INPUT = 'input';
    var TYPE_AT_AFTER = 'at:after';
    var default_1$1 = (function (_super) {
        __extends(default_1, _super);
        function default_1(el, options) {
            var _a;
            var _this = _super.call(this) || this;
            _this.v = '2.1.3';
            _this.__computeFunctionList = [];
            _this.__computeFunctionCreatorList = [];
            _this.__pluginContexts = [];
            _this.__isIgnoreMouse = false;
            _this.el = el;
            _this.c = {};
            _this.__options = __assign(__assign({}, DEFAULT_OPTIONS$6), options);
            var createInputFromTouch = touch(_this.el);
            var createInputFromMouse = mouse();
            _this.__inputCreatorMap = (_a = {},
                _a[TOUCH_START] = createInputFromTouch,
                _a[TOUCH_MOVE] = createInputFromTouch,
                _a[TOUCH_END] = createInputFromTouch,
                _a[TOUCH_CANCEL] = createInputFromTouch,
                _a[MOUSE_DOWN] = createInputFromMouse,
                _a[MOUSE_MOVE] = createInputFromMouse,
                _a[MOUSE_UP] = createInputFromMouse,
                _a);
            _this.on(TYPE_AT_AFTER, function (payload) {
                var target = payload.target, __type = payload.__type;
                var domEvents = _this.__options.domEvents;
                if (!!domEvents && void 0 !== _this.el && !!target) {
                    dispatchDomEvent(__type, target, payload, domEvents);
                    dispatchDomEvent(TYPE_AT_AFTER, target, payload, domEvents);
                }
            });
            if (void 0 !== el) {
                el.style.webkitTapHighlightColor = 'rgba(0,0,0,0)';
                var supportsPassive_1 = false;
                try {
                    var opts = {};
                    Object.defineProperty(opts, 'passive', {
                        get: function () {
                            supportsPassive_1 = true;
                        },
                    });
                    window.addEventListener('_', function () { return void 0; }, opts);
                }
                catch (_b) { }
                _this.on(TYPE_UNBIND, bindElement(el, _this.catchEvent.bind(_this), false === _this.__options.preventDefault && supportsPassive_1 ? { passive: true } : { passive: false }));
            }
            return _this;
        }
        default_1.prototype.use = function (plugin, pluginOptions) {
            this.__pluginContexts.push(plugin(this, pluginOptions));
        };
        default_1.prototype.catchEvent = function (event) {
            var input = this.__inputCreatorMap[event.type](event);
            if (void 0 !== input) {
                var stopPropagation = function () { return event.stopPropagation(); };
                var stopImmediatePropagation = function () { return event.stopImmediatePropagation(); };
                var preventDefault = function () { return event.preventDefault(); };
                if (canPreventDefault(event, this.__options)) {
                    preventDefault();
                }
                else {
                    if ('touchstart' === event.type) {
                        this.__isIgnoreMouse = true;
                    }
                    else if ('touchmove' === event.type) {
                        this.__isIgnoreMouse = false;
                    }
                    if (this.__isIgnoreMouse && event.type.startsWith('mouse')) {
                        if ('mouseup' === event.type) {
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
                this.emit(TYPE_COMPUTED, __assign(__assign(__assign({}, input), computed_1), { stopPropagation: stopPropagation, stopImmediatePropagation: stopImmediatePropagation, preventDefault: preventDefault }));
            }
        };
        default_1.prototype.compute = function (computeFunctionCreatorList, callback) {
            var e_1, _a;
            try {
                for (var computeFunctionCreatorList_1 = __values(computeFunctionCreatorList), computeFunctionCreatorList_1_1 = computeFunctionCreatorList_1.next(); !computeFunctionCreatorList_1_1.done; computeFunctionCreatorList_1_1 = computeFunctionCreatorList_1.next()) {
                    var computeFunctionCreator = computeFunctionCreatorList_1_1.value;
                    if (!this.__computeFunctionCreatorList.includes(computeFunctionCreator)) {
                        this.__computeFunctionCreatorList.push(computeFunctionCreator);
                        this.__computeFunctionList.push(computeFunctionCreator());
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (computeFunctionCreatorList_1_1 && !computeFunctionCreatorList_1_1.done && (_a = computeFunctionCreatorList_1.return)) _a.call(computeFunctionCreatorList_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.on(TYPE_COMPUTED, callback);
        };
        default_1.prototype.beforeEach = function (interceptor) {
            var _this = this;
            _super.prototype.beforeEach.call(this, function (type, next) {
                var _a;
                if ((_a = _this.c) === null || _a === void 0 ? void 0 : _a.name) {
                    interceptor(type, next);
                }
                else {
                    next();
                }
            });
        };
        default_1.prototype.get = function (name) {
            return this.__pluginContexts.find(function (pluginContext) { return name === pluginContext.name; });
        };
        default_1.prototype.set = function (newOptions) {
            this.__options = __assign(__assign({}, this.__options), newOptions);
        };
        default_1.prototype.emit2 = function (type, payload, pluginContext) {
            var _this = this;
            this.c = pluginContext;
            this.emit(type, __assign(__assign({}, payload), { type: type }), function () {
                _this.emit(TYPE_AT_AFTER, __assign(__assign({}, payload), { name: type, __type: type }));
            });
        };
        default_1.prototype.destroy = function () {
            this.emit(TYPE_UNBIND);
            _super.prototype.destroy.call(this);
        };
        return default_1;
    }(AnyEvent));

    var getVLength = (function (v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    });

    var getDotProduct = (function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    });

    var getRadian = (function (v1, v2) {
        var mr = getVLength(v1) * getVLength(v2);
        if (mr === 0)
            return 0;
        var r = getDotProduct(v1, v2) / mr;
        if (r > 1)
            r = 1;
        return Math.acos(r);
    });

    var getCross = (function (v1, v2) {
        return v1.x * v2.y - v2.x * v1.y;
    });

    var radianToAngle = (function (radian) { return radian / Math.PI * 180; });

    var getAngle = (function (v1, v2) {
        var angle = getRadian(v1, v2);
        if (getCross(v1, v2) > 0) {
            angle *= -1;
        }
        return radianToAngle(angle);
    });

    var getDirection = (function (x, y) {
        if (0 === x && 0 === y) {
            return;
        }
        if (Math.abs(x) >= Math.abs(y)) {
            return 0 < x ? DIRECTION_RIGHT : DIRECTION_LEFT;
        }
        else {
            return 0 < y ? DIRECTION_DOWN : DIRECTION_UP;
        }
    });

    function ComputeAngle() {
        var angle = 0;
        var deltaAngle = 0;
        return function (input, computed) {
            var prevVecotr = computed.prevVecotr, startVecotr = computed.startVecotr, activeVecotr = computed.activeVecotr;
            if (activeVecotr) {
                deltaAngle = Math.round(getAngle(activeVecotr, prevVecotr));
                angle = Math.round(getAngle(activeVecotr, startVecotr));
            }
            return { angle: angle, deltaAngle: deltaAngle };
        };
    }

    function ComputeDeltaXY () {
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
                    deltaXYAngle = Math.round(radianToAngle(Math.acos(Math.abs(deltaX) / deltaXY)));
                }
            }
            return { deltaX: deltaX, deltaY: deltaY, deltaXYAngle: deltaXYAngle };
        };
    }

    function ComputeDistance () {
        var displacementX = 0;
        var displacementY = 0;
        var distanceX = 0;
        var distanceY = 0;
        var distance = 0;
        var overallDirection;
        return function (input) {
            var phase = input.phase, startInput = input.startInput;
            if (TYPE_START === phase) {
                displacementX = 0;
                displacementY = 0;
                distanceX = 0;
                distanceY = 0;
                distance = 0;
            }
            else if (TYPE_MOVE === phase) {
                displacementX = Math.round(input.points[0][CLIENT_X] - startInput.points[0][CLIENT_X]);
                displacementY = Math.round(input.points[0][CLIENT_Y] - startInput.points[0][CLIENT_Y]);
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
                overallDirection: overallDirection
            };
        };
    }

    function ComputeScale () {
        var scale = 1;
        return function (input, computed) {
            var deltaScale = 1;
            var prevVecotr = computed.prevVecotr, startVecotr = computed.startVecotr, activeVecotr = computed.activeVecotr;
            if (activeVecotr) {
                deltaScale = round2(getVLength(activeVecotr) / getVLength(prevVecotr));
                scale = round2(getVLength(activeVecotr) / getVLength(startVecotr));
            }
            return { scale: scale, deltaScale: deltaScale };
        };
    }

    function ComputeVAndDir () {
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
                    speedX = Math.round(deltaX / deltaTime * 100) / 100;
                    speedY = Math.round(deltaY / deltaTime * 100) / 100;
                    velocityX = Math.abs(speedX);
                    velocityY = Math.abs(speedY);
                    direction = getDirection(deltaX, deltaY);
                    lastValidInput = input;
                }
            }
            return { velocityX: velocityX, velocityY: velocityY, speedX: speedX, speedY: speedY, direction: direction };
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
            y: input.points[1][CLIENT_Y] - input.points[0][CLIENT_Y]
        };
    }
    function ComputeVectorForMutli () {
        var startVecotr;
        var prevVecotr;
        var activeVecotr;
        return function (input) {
            var prevInput = input.prevInput, startMultiInput = input.startMultiInput;
            if (void 0 !== startMultiInput &&
                void 0 !== prevInput &&
                input.id !== startMultiInput.id &&
                1 < prevInput.pointLength &&
                1 < input.pointLength) {
                startVecotr = computeVector(startMultiInput);
                prevVecotr = computeVector(prevInput);
                activeVecotr = computeVector(input);
            }
            else {
                activeVecotr = void 0;
            }
            return {
                startVecotr: startVecotr,
                prevVecotr: prevVecotr,
                activeVecotr: activeVecotr
            };
        };
    }

    var DEFAULT_OPTIONS$5 = {
        name: 'tap',
        pointLength: 1,
        tapTimes: 1,
        waitNextTapTime: 300,
        maxDistance: 2,
        maxDistanceFromPrevTap: 9,
        maxPressTime: 250,
    };
    function tap (at, options) {
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
                var distanceFromPreviousTap = getVLength({ x: center.x - prevTapPoint.x, y: center.y - prevTapPoint.y });
                prevTapPoint = center;
                return options.maxDistanceFromPrevTap >= distanceFromPreviousTap;
            }
            else {
                prevTapPoint = center;
                return true;
            }
        }
        function isValidInterval(waitNextTapTime) {
            var now = performance.now();
            if (void 0 === prevTapTime) {
                prevTapTime = now;
                return true;
            }
            else {
                var interval = now - prevTapTime;
                prevTapTime = now;
                return interval < waitNextTapTime;
            }
        }
        at.compute([ComputeDistance, ComputeMaxLength], function (computed) {
            if (isDisabled(context))
                return;
            var phase = computed.phase, x = computed.x, y = computed.y;
            if (TYPE_END !== phase)
                return;
            context.state = 0;
            if (test()) {
                clearTimeout(countDownToFailTimer);
                if (isValidDistanceFromPrevTap({ x: x, y: y }, context) && isValidInterval(context.waitNextTapTime)) {
                    tapCount++;
                }
                else {
                    tapCount = 1;
                }
                if (0 === tapCount % context.tapTimes) {
                    context.state = 1;
                    at.emit2(context.name, computed, context);
                    reset();
                }
                else {
                    countDownToFail();
                }
            }
            else {
                reset();
                context.state = 2;
            }
            function test() {
                var startInput = computed.startInput, pointLength = computed.pointLength, timestamp = computed.timestamp;
                var deltaTime = timestamp - startInput.timestamp;
                var distance = computed.distance, maxPointLength = computed.maxPointLength;
                return (maxPointLength === context.pointLength &&
                    0 === pointLength &&
                    context.maxDistance >= distance &&
                    context.maxPressTime > deltaTime);
            }
        });
        return context;
    }

    var DEFAULT_OPTIONS$4 = { name: 'pan', threshold: 10, pointLength: 1 };
    function pan (at, options) {
        var context = createPluginContext(DEFAULT_OPTIONS$4, options);
        at.compute([ComputeVAndDir, ComputeDistance, ComputeDeltaXY], function (computed) {
            resetState(context);
            if (isDisabled(context))
                return;
            var isValid = test();
            context.state = flow(isValid, context.state, computed.phase);
            if (isValid || isMoveOrEndOrCancel(context.state)) {
                var name_1 = context.name;
                at.emit2(name_1, computed, context);
                at.emit2(name_1 + getStatusName(context.state), computed, context);
                if (![TYPE_END, TYPE_CANCEL].includes(computed.phase) && computed.direction) {
                    at.emit2(name_1 + computed.direction, computed, context);
                }
            }
            function test() {
                var pointLength = computed.pointLength, distance = computed.distance;
                return context.pointLength === pointLength && context.threshold <= distance;
            }
        });
        return context;
    }

    var DEFAULT_OPTIONS$3 = {
        name: 'swipe',
        threshold: 10,
        velocity: 0.3,
        pointLength: 1,
    };
    function swipe (at, options) {
        var context = createPluginContext(DEFAULT_OPTIONS$3, options);
        at.compute([ComputeDistance, ComputeVAndDir, ComputeMaxLength], function (computed) {
            context.state = 0;
            if (context.disabled)
                return;
            if (test()) {
                var name_1 = context.name;
                context.state = 1;
                at.emit2(name_1, computed, context);
                at.emit2(name_1 + computed.direction, computed, context);
            }
            function test() {
                if (TYPE_END !== computed.phase)
                    return false;
                var velocityX = computed.velocityX, velocityY = computed.velocityY, distance = computed.distance, maxPointLength = computed.maxPointLength;
                return (maxPointLength === context.pointLength &&
                    0 === computed.points.length &&
                    context.threshold < distance &&
                    context.velocity < Math.max(velocityX, velocityY));
            }
        });
        return context;
    }

    var DEFAULT_OPTIONS$2 = {
        name: 'press',
        pointLength: 1,
        maxDistance: 9,
        minPressTime: 251,
    };
    function press (at, options) {
        var context = createPluginContext(DEFAULT_OPTIONS$2, options);
        var timeoutId = 0;
        at.compute([ComputeDistance], function (computed) {
            if (isDisabled(context))
                return;
            var phase = computed.phase, startInput = computed.startInput, pointLength = computed.pointLength;
            if (TYPE_START === phase && context.pointLength === pointLength) {
                resetState(context);
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    context.state = 1;
                    at.emit2(context.name, computed, context);
                }, context.minPressTime);
            }
            else if (TYPE_END === phase && 1 === context.state) {
                at.emit2("".concat(context.name).concat(DIRECTION_UP), computed, context);
            }
            else if (1 !== context.state) {
                var deltaTime = computed.timestamp - startInput.timestamp;
                if (!test() ||
                    (context.minPressTime > deltaTime && [TYPE_END, TYPE_CANCEL].includes(phase))) {
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
        name: 'pinch',
        threshold: 0,
        pointLength: 2,
    };
    function pinch (at, options) {
        var context = createPluginContext(DEFAULT_OPTIONS$1, options);
        at.compute([ComputeVectorForMutli, ComputeScale], function (computed) {
            resetState(context);
            if (isDisabled(context))
                return;
            var isValid = test();
            context.state = flow(isValid, context.state, computed.phase);
            var name = context.name;
            if (isValid || isMoveOrEndOrCancel(context.state)) {
                at.emit2(name, computed, context);
                var deltaScale = computed.deltaScale;
                if (1 !== deltaScale) {
                    at.emit2(name + (1 < deltaScale ? 'in' : 'out'), computed, context);
                }
            }
            var stateName = getStatusName(context.state);
            if (stateName) {
                at.emit2(name + stateName, computed, context);
            }
            function test() {
                var pointLength = computed.pointLength, scale = computed.scale; computed.deltaScale; computed.phase;
                return (context.pointLength === pointLength &&
                    context.threshold < Math.abs(scale - 1));
            }
        });
        return context;
    }

    var DEFAULT_OPTIONS = {
        name: 'rotate',
        threshold: 0,
        pointLength: 2,
    };
    function rotate (at, options) {
        var context = createPluginContext(DEFAULT_OPTIONS, options);
        at.compute([ComputeVectorForMutli, ComputeAngle], function (computed) {
            if (isDisabled(context))
                return;
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
                var pointLength = computed.pointLength, angle = computed.angle;
                return context.pointLength === pointLength && context.threshold < Math.abs(angle);
            }
        });
        return context;
    }

    function doubletap (at) {
        at.use(tap, { name: 'doubletap', tapTimes: 2 });
        var doubleTapContext = at.get('doubletap');
        var timeID;
        at.beforeEach(function (type, next) {
            if ('tap' === type) {
                clearTimeout(timeID);
                timeID = setTimeout(function () {
                    if ([0, 2].includes(doubleTapContext.state)) {
                        next();
                    }
                }, 300);
            }
            else {
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
    }(default_1$1));

    return default_1;

}));
//# sourceMappingURL=any-touch.umd.js.map
