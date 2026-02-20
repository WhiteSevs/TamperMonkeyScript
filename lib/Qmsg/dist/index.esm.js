/**
 * 兼容处理
 */
function CompatibleProcessing() {
    // 处理Object.assign不存在的问题
    try {
        if (typeof Object.assign !== "function") {
            Object.assign = function (...args) {
                const target = Object(args[0] || {});
                if (args.length > 1) {
                    const sourceList = [...args].splice(1, args.length - 1);
                    sourceList.forEach((sourceItem) => {
                        for (const sourceKey in sourceItem) {
                            if (Object.prototype.hasOwnProperty.call(sourceItem, sourceKey)) {
                                target[sourceKey] = sourceItem[sourceKey];
                            }
                        }
                    });
                }
                return target;
            };
        }
    }
    catch (error) {
        console.warn("Qmsg CompatibleProcessing Object.assign error", error);
    }
    // 'classList' 兼容处理，add，remove不支持传入多个cls参数
    try {
        if (!("classList" in document.documentElement)) {
            Object.defineProperty(HTMLElement.prototype, "classList", {
                get: function () {
                    const self = this;
                    function update(fn) {
                        return function (value) {
                            const classes = self.className.split(/\s+/g), index = classes.indexOf(value);
                            fn(classes, index, value);
                            self.className = classes.join(" ");
                        };
                    }
                    return {
                        add: update(function (classes, index, value) {
                            if (!~index)
                                classes.push(value);
                        }),
                        remove: update(function (classes, index) {
                            if (~index)
                                classes.splice(index, 1);
                        }),
                        toggle: update(function (classes, index, value) {
                            if (~index)
                                classes.splice(index, 1);
                            else
                                classes.push(value);
                        }),
                        contains: function (value) {
                            return !!~self.className.split(/\s+/g).indexOf(value);
                        },
                        item: function (index) {
                            return self.className.split(/\s+/g)[index] || null;
                        },
                    };
                },
            });
        }
    }
    catch (error) {
        console.warn("Qmsg CompatibleProcessing HTMLElement.prototype.classList warning", error);
    }
}

const QmsgDefaultConfig = {
    /** 实例配置的固定的默认值，在初始化时会插入值 */
    INS_DEFAULT: {},
    /** 声明插件名称 */
    get PLUGIN_NAME() {
        return "qmsg";
    },
    /** 命名空间，用于css和事件 */
    get NAMESPACE() {
        return "qmsg";
    },
    /** 实例配置的默认值 */
    get config() {
        return {
            parent: document.body || document.documentElement,
            useShadowRoot: true,
            shadowRootMode: "open",
            animation: true,
            autoClose: true,
            listenEventToPauseAutoClose: true,
            listenEventToCloseInstance: true,
            content: "",
            isHTML: false,
            position: "top",
            showClose: false,
            maxNums: 5,
            onClose: null,
            showIcon: true,
            showReverse: false,
            timeout: 2500,
            type: "info",
            zIndex: 50000,
            style: "",
            customClass: "",
            isLimitWidth: false,
            limitWidthNum: 200,
            limitWidthWrap: "no-wrap",
            consoleLogContent: false,
            afterRender: null,
        };
    },
};

const QmsgHeaderCloseIcon = /*css*/ `
	<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
		<path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
const QmsgIcon = {
    info: /*css*/ `
		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm67.008 275.008q26.016 0 43.008-15.488t16.992-41.504-16.992-41.504-42.496-15.488-42.496 15.488-16.992 41.504 16.992 41.504 42.016 15.488zm12 360q0-6.016.992-16T592 664l-52.992 60.992q-8 8.992-16.512 14.016T508 742.016q-8.992-4-8-14.016l88-276.992q4.992-28-8.992-48t-44.992-24q-35.008.992-76.512 29.504t-72.512 72.512v15.008q-.992 10.016 0 19.008l52.992-60.992q8-8.992 16.512-14.016T468 437.024q10.016 4.992 7.008 16l-87.008 276q-7.008 24.992 7.008 44.512T444 800.032q50.016-.992 84-28.992t63.008-72z" fill="#909399"/>
		</svg>`,
    warning: /*css*/ `

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448 247.488 0 448-200.576 448-448 0-247.36-200.512-448-448-448zm0 704c-26.432 0-48-21.504-48-48s21.568-48 48-48c26.624 0 48 21.504 48 48s-21.376 48-48 48zm48-240c0 26.56-21.376 48-48 48-26.432 0-48-21.44-48-48V304c0-26.56 21.568-48 48-48 26.624 0 48 21.44 48 48v224z" fill="#E6A23C"/>
		</svg>`,
    error: /*css*/ `

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.57 448-448S759.42 64 512 64zm158.39 561.14a32 32 0 1 1-45.25 45.26L512 557.26 398.86 670.4a32 32 0 0 1-45.25-45.26L466.75 512 353.61 398.86a32 32 0 0 1 45.25-45.25L512 466.74l113.14-113.13a32 32 0 0 1 45.25 45.25L557.25 512z" fill="#F56C6C"/>
		</svg>`,
    success: /*css*/ `

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z" fill="#67C23A"/>
		</svg>`,
    loading: /*css*/ `
		<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/>
			<path d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
};

/**
 * Qmsg实例存储
 */
const QmsgInstStorage = {
    /**
     * 存储的Qmsg实例信息
     */
    insInfoList: [],
    /**
     * 根据uuid移除Qmsg实例
     * @param uuid 每个Qmsg实例的uuid
     * @returns
     * + true 移除成功
     * + false 移除失败
     */
    remove(uuid) {
        let flag = false;
        for (let index = 0; index < QmsgInstStorage.insInfoList.length; index++) {
            if (QmsgInstStorage.insInfoList[index].uuid === uuid) {
                QmsgInstStorage.insInfoList.splice(index, 1);
                flag = true;
                break;
            }
        }
        return flag;
    },
};

const QmsgCoreDefaultApi = {
    document: document,
    window: window,
    globalThis: globalThis,
    self: self,
    setTimeout: globalThis.setTimeout.bind(globalThis),
    setInterval: globalThis.setInterval.bind(globalThis),
    clearTimeout: globalThis.clearTimeout.bind(globalThis),
    clearInterval: globalThis.clearInterval.bind(globalThis),
};
const QmsgCoreApi = Object.assign({}, QmsgCoreDefaultApi);
const QmsgCore = {
    init(option) {
        if (!option) {
            option = Object.assign({}, QmsgCoreDefaultApi);
        }
        Object.assign(QmsgCoreApi, option);
    },
    get document() {
        return QmsgCoreApi.document;
    },
    get window() {
        return QmsgCoreApi.window;
    },
    get globalThis() {
        return QmsgCoreApi.globalThis;
    },
    get self() {
        return QmsgCoreApi.self;
    },
    get setTimeout() {
        return QmsgCoreApi.setTimeout;
    },
    get setInterval() {
        return QmsgCoreApi.setInterval;
    },
    get clearTimeout() {
        return QmsgCoreApi.clearTimeout;
    },
    get clearInterval() {
        return QmsgCoreApi.clearInterval;
    },
};

const QmsgUtils = {
    /**
     * 转字符串
     */
    toStr(target) {
        return JSON.stringify(target, (_key, value) => {
            if (typeof value === "object" && value != null && value instanceof Node) {
                return String(value);
            }
            return value;
        });
    },
    /**
     * 生成带插件名的名称
     * @param args
     */
    getNameSpacify(...args) {
        const result = QmsgDefaultConfig.NAMESPACE;
        return [result, ...args].join("-");
    },
    /**
     * 判断字符是否是数字
     * @param text 需要判断的字符串
     */
    isNumber(text) {
        const isNumberPattern = /^\d+$/;
        return isNumberPattern.test(text);
    },
    /**
     * 获取唯一性的UUID
     */
    getUUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (value) {
            const randValue = (Math.random() * 16) | 0, newValue = value == "x" ? randValue : (randValue & 0x3) | 0x8;
            return newValue.toString(16);
        });
    },
    /**
     * 合并参数为配置信息，用于创建Msg实例
     * @param content 文本内容
     * @param config 配置
     */
    mergeArgs(content = "", config) {
        const opts = {};
        if (arguments.length === 0) {
            return opts;
        }
        if (config != null) {
            // 传入了2个参数
            // string object
            // object object
            opts.content = content;
            if (typeof config === "object" && config != null) {
                return Object.assign(opts, config);
            }
        }
        else {
            // 传入了1个参数
            // object
            // string
            if (typeof content === "object" && content != null) {
                return Object.assign(opts, content);
            }
            else {
                opts.content = content;
            }
        }
        return opts;
    },
    /**
     * 转换为动态对象
     * @param defaultObj 需要配置的对象
     * @param other_obj 获取的其它对象
     */
    toDynamicObject(defaultObj, ...other_objs) {
        const __obj__ = Object.assign({}, defaultObj ?? {});
        Object.keys(__obj__).forEach((keyName) => {
            // @ts-ignore
            let objValue = __obj__[keyName];
            Object.defineProperty(__obj__, keyName, {
                get() {
                    const findIndex = other_objs.findIndex((other_obj) => {
                        // 判断其他对象中是否有该属性
                        return (typeof other_obj === "object" && other_obj != null && other_obj.hasOwnProperty.call(other_obj, keyName));
                    });
                    if (findIndex !== -1) {
                        // @ts-ignore
                        const other_objValue = other_objs[findIndex][keyName];
                        return other_objValue;
                    }
                    else {
                        return objValue;
                    }
                },
                set(newValue) {
                    objValue = newValue;
                },
            });
        });
        return __obj__;
    },
    /**
     * 自动使用 Worker 执行 setTimeout
     */
    setTimeout(callback, timeout) {
        return QmsgCore.setTimeout(callback, timeout);
    },
    /**
     * 配合 QmsgUtils.setTimeout 使用
     */
    clearTimeout(timeId) {
        if (timeId != null) {
            QmsgCore.clearTimeout(timeId);
        }
    },
    /**
     * 自动使用 Worker 执行 setInterval
     */
    setInterval(callback, timeout) {
        QmsgCore.setInterval(callback, timeout);
    },
    /**
     * 配合 QmsgUtils.setInterval 使用
     */
    clearInterval(timeId) {
        if (timeId != null) {
            QmsgCore.clearInterval(timeId);
        }
    },
    /**
     * 设置安全的html
     */
    setSafeHTML($el, text) {
        // @ts-expect-error
        if (globalThis.trustedTypes && typeof globalThis.trustedTypes.createPolicy === "function") {
            // @ts-expect-error
            const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
                createHTML: (html) => html,
            });
            $el.innerHTML = policy.createHTML(text);
        }
        else {
            $el.innerHTML = text;
        }
    },
};

const QmsgAnimation = {
    /** 状态 & 动画 */
    $state: {
        opening: "MessageMoveIn",
        done: "",
        closing: "MessageMoveOut",
    },
    $name: {
        startNameList: ["animationName", "WebkitAnimationName", "MozAnimationName", "msAnimationName", "OAnimationName"],
        endNameList: ["animationend", "webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend"],
    },
    /**
     * 是否支持动画属性
     * @private
     */
    __CAN_ANIMATION__: void 0,
    /**
     * 是否支持动画属性
     */
    get CAN_ANIMATION() {
        this.__CAN_ANIMATION__ =
            this.__CAN_ANIMATION__ ?? this.getStyleAnimationNameValue(document.createElement("div")) != null;
        return this.__CAN_ANIMATION__;
    },
    /**
     * 获取元素上的animationName属性
     * @param element
     */
    getStyleAnimationNameValue(element) {
        for (let index = 0; index < this.$name.startNameList.length; index++) {
            const animationName = this.$name.startNameList[index];
            const animationNameValue = element.style[animationName];
            if (animationNameValue != null) {
                return animationNameValue;
            }
        }
    },
    /**
     * 设置元素上的animationName属性
     * @param element
     * @param animationNameValue
     */
    setStyleAnimationName(element, animationNameValue = "") {
        this.$name.startNameList.forEach((animationName) => {
            if (animationName in element.style) {
                element.style[animationName] = animationNameValue;
            }
        });
    },
};

const css_text$1 = "@charset \"utf-8\";\n.qmsg.qmsg-wrapper {\n  position: fixed;\n  top: 16px;\n  left: 0;\n  z-index: 50000;\n  display: flex;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.55);\n  list-style: none;\n  font-variant: tabular-nums;\n  font-size: 13px;\n  line-height: 1;\n  font-feature-settings: \"tnum\";\n  pointer-events: none;\n  flex-direction: column;\n}\n.qmsg.qmsg-data-position-center,\n.qmsg.qmsg-data-position-left,\n.qmsg.qmsg-data-position-right {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.qmsg.qmsg-data-position-bottom,\n.qmsg.qmsg-data-position-bottomleft,\n.qmsg.qmsg-data-position-bottomright {\n  position: fixed;\n  top: unset;\n  bottom: 0;\n  bottom: 8px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n.qmsg.qmsg-data-position-bottomleft .qmsg-item,\n.qmsg.qmsg-data-position-left .qmsg-item,\n.qmsg.qmsg-data-position-topleft .qmsg-item {\n  text-align: left;\n}\n.qmsg.qmsg-data-position-bottom .qmsg-item,\n.qmsg.qmsg-data-position-center .qmsg-item,\n.qmsg.qmsg-data-position-top .qmsg-item {\n  text-align: center;\n}\n.qmsg.qmsg-data-position-bottomright .qmsg-item,\n.qmsg.qmsg-data-position-right .qmsg-item,\n.qmsg.qmsg-data-position-topright .qmsg-item {\n  text-align: right;\n}\n.qmsg .qmsg-item {\n  position: relative;\n  padding: 8px;\n  text-align: center;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n}\n.qmsg .qmsg-item .qmsg-count {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  display: inline-block;\n  height: 16px;\n  min-width: 16px;\n  border-radius: 2px;\n  background-color: red;\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n  line-height: 16px;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n}\n.qmsg .qmsg-item:first-child {\n  margin-top: -8px;\n}\n.qmsg .qmsg-content-wrapper {\n  position: relative;\n  display: inline-block;\n  padding: 10px 12px;\n  max-width: 80%;\n  min-width: 40px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  text-align: center;\n  pointer-events: all;\n}\n.qmsg .qmsg-content-wrapper .qmsg-content-text[data-limitWidthWrap=\"no-wrap\"] {\n  white-space: nowrap;\n}\n.qmsg .qmsg-content-wrapper .qmsg-content-text[data-limitWidthWrap=\"ellipsis\"] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.qmsg .qmsg-content-wrapper .qmsg-content-text[data-limitWidthWrap=\"wrap\"] {\n  white-space: normal;\n}\n.qmsg .qmsg-content-wrapper [class^=\"qmsg-content-\"]:not(.qmsg-content-text) {\n  display: flex;\n  align-items: center;\n}\n.qmsg .qmsg-icon {\n  position: relative;\n  top: 0;\n  display: inline-block;\n  margin-right: 8px;\n  color: inherit;\n  vertical-align: -0.125em;\n  text-align: center;\n  text-transform: none;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.qmsg .qmsg-icon svg {\n  display: inline-block;\n}\n.qmsg .qmsg-content-info .qmsg-icon {\n  color: #1890ff;\n}\n.qmsg .qmsg-icon-close {\n  margin: 0;\n  margin-left: 8px;\n  padding: 0;\n  outline: 0;\n  border: none;\n  background-color: transparent;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 12px;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.qmsg .qmsg-icon-close:hover > svg path {\n  stroke: #555;\n}\n.qmsg .animate-turn {\n  animation: MessageTurn 1s linear infinite;\n  -webkit-animation: MessageTurn 1s linear infinite;\n}\n";

const css_text = "@keyframes MessageTurn {\n  0% {\n    -webkit-transform: rotate(0);\n  }\n  25% {\n    -webkit-transform: rotate(90deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n  }\n  75% {\n    -webkit-transform: rotate(270deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes MessageTurn {\n  0% {\n    -webkit-transform: rotate(0);\n  }\n  25% {\n    -webkit-transform: rotate(90deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n  }\n  75% {\n    -webkit-transform: rotate(270deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes MessageMoveOut {\n  0% {\n    max-height: 150px;\n    opacity: 1;\n  }\n  to {\n    max-height: 0;\n    opacity: 0;\n  }\n}\n@keyframes MessageMoveOut {\n  0% {\n    max-height: 150px;\n    opacity: 1;\n  }\n  to {\n    max-height: 0;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes MessageMoveIn {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n    transform-origin: 0 0;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    transform-origin: 0 0;\n  }\n}\n@keyframes MessageMoveIn {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n    transform-origin: 0 0;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    transform-origin: 0 0;\n  }\n}\n@-webkit-keyframes MessageShake {\n  0%,\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  25%,\n  75% {\n    opacity: 0.75;\n    transform: translateX(-4px);\n  }\n  50% {\n    opacity: 0.25;\n    transform: translateX(4px);\n  }\n}\n@keyframes MessageShake {\n  0%,\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  25%,\n  75% {\n    opacity: 0.75;\n    transform: translateX(-4px);\n  }\n  50% {\n    opacity: 0.25;\n    transform: translateX(4px);\n  }\n}\n";

const QmsgCSS = {
    css: `
    ${css_text$1}

    ${css_text}
  `,
    /**
     * 获取CSS元素
     */
    getStyleElement() {
        const $style = document.createElement("style");
        $style.setAttribute("type", "text/css");
        $style.setAttribute("data-type", QmsgDefaultConfig.PLUGIN_NAME);
        QmsgUtils.setSafeHTML($style, QmsgCSS.css);
        return $style;
    },
};

/**
 * 每条消息的构造函数
 */
class QmsgMsg {
    /**
     * setTimeout的id
     */
    timeId = void 0;
    /**
     * 启动时间
     */
    startTime;
    /**
     * 关闭时间
     */
    endTime;
    /**
     * 实例的配置（动态获取）
     */
    setting;
    /**
     * 实例的配置的字符串
     */
    settingStr;
    /**
     * 把动态的`setting`转为普通的对象
     */
    settingJSON;
    /**
     * uuid
     */
    uuid;
    /**
     * 当前实例的动画状态
     */
    state;
    /**
     * 当前实例的相同消息的数量
     */
    repeatNum;
    /**
     * 元素
     */
    $el = {
        /**
         * 主元素
         */
        $item: null,
        /**
         * 获取内容元素
         */
        get $content() {
            const $el = this.$item.querySelector('[class^="qmsg-content-"] .qmsg-content-text');
            if (!$el) {
                throw new TypeError("QmsgInst $content is null");
            }
            return $el;
        },
    };
    constructor(config, uuid) {
        this.timeId = void 0;
        this.startTime = Date.now();
        this.endTime = null;
        // 按顺序获取值
        // 先获取用户的配置值，如果没有，获取自定义的全局配置值，如果没有，最后获取全局默认值
        this.setting = QmsgUtils.toDynamicObject(QmsgDefaultConfig.config, config, QmsgDefaultConfig.INS_DEFAULT);
        this.settingStr = QmsgUtils.toStr(this.setting);
        this.settingJSON = Object.assign({}, this.setting);
        this.uuid = uuid;
        this.state = "opening";
        this.$el.$item = document.createElement("div");
        this.repeatNum = 1;
        this.detectionType();
        this.initEl();
        const consoleLogContent = typeof this.setting.consoleLogContent === "function"
            ? this.setting.consoleLogContent(this)
            : this.setting.consoleLogContent;
        if (consoleLogContent) {
            // 控制台输出content
            console.log(this.setting.content);
        }
        Reflect.set(this.$el.$item, "data-inst", this);
        if (typeof this.setting.afterRender === "function") {
            this.setting.afterRender(this);
        }
    }
    /**
     * 初始化元素
     */
    initEl() {
        const that = this;
        if (this.setting.customClass && typeof this.setting.customClass === "string") {
            // 设置自定义类名
            this.$el.$item.classList.add(this.setting.customClass);
        }
        // 设置svg图标
        const $svg = QmsgIcon[this.setting.type || "info"];
        let contentClassName = QmsgUtils.getNameSpacify("content-" + this.setting.type || "info");
        if (this.setting.showClose) {
            // 显示 关闭图标
            contentClassName += " " + QmsgUtils.getNameSpacify("content-with-close");
        }
        // 内容兼容处理
        const content = this.setting.content || "";
        // 关闭图标svg
        const $closeSvg = QmsgHeaderCloseIcon;
        let $closeIcon = "";
        if (this.setting.showClose) {
            // 显示右上角的关闭图标按钮
            $closeIcon = /*html*/ `<i class="qmsg-icon qmsg-icon-close">${$closeSvg}</i>`;
        }
        // 内容
        const $content = document.createElement("span");
        $content.className = "qmsg-content-text";
        const positionClassName = QmsgUtils.getNameSpacify("data-position", this.setting.position.toLowerCase());
        const isHTML = this.setting.isHTML;
        if (isHTML) {
            // 内容是html
            QmsgUtils.setSafeHTML($content, content);
        }
        else {
            // 内容是纯文本
            $content.innerText = content;
        }
        if (this.setting.isLimitWidth) {
            // 限制宽度、自动换行
            let limitWidthNum = this.setting.limitWidthNum;
            if (typeof limitWidthNum === "string") {
                if (QmsgUtils.isNumber(limitWidthNum)) {
                    limitWidthNum = limitWidthNum + "px";
                }
            }
            else {
                limitWidthNum = limitWidthNum.toString() + "px";
            }
            $content.style.maxWidth = limitWidthNum;
            $content.style.width = limitWidthNum;
            // 设置换行信息
            $content.setAttribute("data-limitWidthWrap", this.setting.limitWidthWrap);
        }
        else {
            $content.setAttribute("data-limitWidthWrap", "no-wrap");
        }
        QmsgUtils.setSafeHTML(this.$el.$item, 
        /*html*/ `
			<div class="qmsg-content-wrapper">
				<div class="${contentClassName}">
				${this.setting.showIcon ? `<i class="qmsg-icon">${$svg}</i>` : ""}
					${$content.outerHTML}
					${$closeIcon}
				</div>
			</div>
			`);
        /** 内容容器 */
        const $contentContainer = this.$el.$item.querySelector(".qmsg-content-wrapper");
        this.$el.$item.classList.add(QmsgUtils.getNameSpacify("item"));
        this.$el.$item.setAttribute(QmsgUtils.getNameSpacify("uuid"), this.uuid);
        /** 总根元素 */
        let $shadowContainer;
        /** 根元素 */
        let $shadowRoot;
        /** 容器包裹的元素 */
        let $wrapper;
        $shadowContainer = document.querySelector(".qmsg-shadow-container");
        $shadowRoot = this.setting.useShadowRoot ? $shadowContainer?.shadowRoot : $shadowContainer;
        if (!$shadowContainer) {
            // 页面中不存在ShadowRoot容器元素
            // 添加新增的ShadowRoot容器元素
            $shadowContainer = document.createElement("div");
            $shadowContainer.className = "qmsg-shadow-container";
            if (this.setting.useShadowRoot) {
                $shadowRoot = $shadowContainer.attachShadow({
                    mode: this.setting.shadowRootMode,
                });
            }
            else {
                $shadowRoot = $shadowContainer;
            }
            $shadowRoot.appendChild(QmsgCSS.getStyleElement());
            if (this.setting.style != null) {
                // 插入自定义的style
                // 这里需要插入到每一条的Qmsg内，以便移除实例时把style也移除
                const __$ownStyle__ = document.createElement("style");
                __$ownStyle__.setAttribute("type", "text/css");
                __$ownStyle__.setAttribute("data-id", this.uuid);
                QmsgUtils.setSafeHTML(__$ownStyle__, this.setting.style);
                $contentContainer.insertAdjacentElement("afterend", __$ownStyle__);
            }
            this.setting.parent.appendChild($shadowContainer);
        }
        if ($shadowRoot == null) {
            throw new TypeError("QmsgInst " + QmsgDefaultConfig.PLUGIN_NAME + " $shadowRoot is null");
        }
        // 每个位置都有一个wrapper元素
        $wrapper = $shadowRoot.querySelector(`.${QmsgDefaultConfig.NAMESPACE}.${QmsgUtils.getNameSpacify("wrapper")}.${positionClassName}`);
        if (!$wrapper) {
            $wrapper = document.createElement("div");
            $wrapper.classList.add(QmsgDefaultConfig.NAMESPACE, QmsgUtils.getNameSpacify("wrapper"), QmsgUtils.getNameSpacify("is-initialized"), positionClassName);
            $shadowRoot.appendChild($wrapper);
        }
        if (this.setting.showReverse) {
            $wrapper.style.flexDirection = "column-reverse";
        }
        else {
            $wrapper.style.flexDirection = "column";
        }
        let zIndex = this.setting.zIndex;
        if (typeof zIndex === "function") {
            zIndex = zIndex();
        }
        if (!isNaN(zIndex)) {
            $wrapper.style.zIndex = zIndex.toString();
        }
        $wrapper.appendChild(this.$el.$item);
        this.setState(this.$el.$item, "opening");
        if (this.setting.showClose) {
            // 关闭按钮绑定点击事件
            const $closeIcon = this.$el.$item.querySelector(".qmsg-icon-close");
            if ($closeIcon) {
                $closeIcon.addEventListener("click", () => {
                    that.close();
                });
            }
        }
        // 监听动画完成
        const animationendEvent = () => {
            const animationNameValue = QmsgAnimation.getStyleAnimationNameValue(that.$el.$item);
            if (animationNameValue === QmsgAnimation.$state.closing) {
                // 当前触发的是关闭
                that.endTime = Date.now();
                that.destroy();
            }
            QmsgAnimation.setStyleAnimationName(this.$el.$item);
        };
        QmsgAnimation.$name.endNameList.forEach(function (animationendName) {
            that.$el.$item.addEventListener(animationendName, animationendEvent);
        });
        // 自动关闭
        if (this.setting.autoClose && this.setting.listenEventToPauseAutoClose) {
            // 鼠标|触摸滑入时，清除自动关闭的定时器
            // 鼠标|触摸滑出时，重新设置定时器
            this.resetAutoCloseTimer();
            /**
             * 鼠标滑入
             *
             * + 清除定时器
             * + 清除开始时间
             * + 清除结束时间
             */
            const enterEvent = () => {
                this.clearAutoCloseTimer();
            };
            /**
             * 鼠标滑出，重启定时器，创建新的开始时间和timeId
             */
            const leaveEvent = () => {
                if (this.timeId != null) {
                    // 似乎enterEvent函数未正确调用？
                    console.warn("QmsgInst timeId is not null，mouseenter may be not first trigger，timeId：" + this.timeId);
                    return;
                }
                this.startAutoCloseTimer();
            };
            let isRemoveMouseEvent = false;
            this.$el.$item.addEventListener("mouseenter", enterEvent);
            this.$el.$item.addEventListener("mouseleave", leaveEvent);
            this.$el.$item.addEventListener("touchstart", () => {
                // 由于移动端不支持mouseout且会触发mouseenter
                // 那么需要移除该监听
                if (!isRemoveMouseEvent) {
                    isRemoveMouseEvent = true;
                    this.$el.$item.removeEventListener("mouseenter", enterEvent);
                    this.$el.$item.removeEventListener("mouseleave", leaveEvent);
                }
                enterEvent();
            }, { passive: true });
            this.$el.$item.addEventListener("touchend", leaveEvent);
            this.$el.$item.addEventListener("touchcancel", leaveEvent);
        }
    }
    /**
     * 对timeout进行检测并转换
     * 当timeout为string时，转换为number
     * timeout必须在规定范围内
     */
    detectionType() {
        if (this.setting.timeout != null && typeof this.setting.timeout === "string") {
            this.setting.timeout = parseInt(this.setting.timeout);
        }
        if (isNaN(this.setting.timeout)) {
            this.setting.timeout = QmsgDefaultConfig.config.timeout;
        }
        if (!(this.setting.timeout != null &&
            parseInt(this.setting.timeout.toString()) >= 0 &&
            parseInt(this.setting.timeout.toString()) <= Number.MAX_VALUE)) {
            this.setting.timeout = QmsgDefaultConfig.config.timeout;
        }
        if (typeof this.setting.zIndex === "function") {
            this.setting.zIndex = this.setting.zIndex();
        }
        if (this.setting.zIndex != null && typeof this.setting.zIndex === "string") {
            this.setting.zIndex = parseInt(this.setting.zIndex);
        }
        if (isNaN(this.setting.zIndex)) {
            this.setting.zIndex =
                typeof QmsgDefaultConfig.config.zIndex === "function"
                    ? QmsgDefaultConfig.config.zIndex()
                    : QmsgDefaultConfig.config.zIndex;
        }
    }
    /**
     * 设置元素动画状态 开启/关闭
     * @param QmsgMsg
     * @param state
     */
    setState(element, state) {
        if (!state || !QmsgAnimation.$state[state])
            return;
        this.state = state;
        QmsgAnimation.setStyleAnimationName(element, QmsgAnimation.$state[state]);
    }
    /**
     * 设置`repeatNum`自增
     */
    setRepeatNumIncreasing() {
        this.repeatNum++;
    }
    /**
     * 设置消息数量统计
     */
    setMsgCount() {
        const countClassName = QmsgUtils.getNameSpacify("count");
        const $content = this.$el.$item.querySelector(`.${QmsgDefaultConfig.NAMESPACE}.${QmsgUtils.getNameSpacify("wrapper")} [class^="qmsg-content-"]`);
        if (!$content) {
            throw new TypeError("QmsgInst $content is null");
        }
        let $count = $content.querySelector("." + countClassName);
        if (!$count) {
            $count = document.createElement("span");
            $count.classList.add(countClassName);
            $content.appendChild($count);
        }
        // 获取重复显示内容的实例数量
        const repeatNum = this.repeatNum;
        QmsgUtils.setSafeHTML($count, repeatNum.toString());
        QmsgAnimation.setStyleAnimationName($count);
        QmsgAnimation.setStyleAnimationName($count, "MessageShake");
        this.resetAutoCloseTimer();
    }
    /**
     * 清除旧的自动关闭定时器
     */
    clearAutoCloseTimer() {
        // 重置定时器
        QmsgUtils.clearTimeout(this.timeId);
        this.timeId = void 0;
        this.startTime = null;
        this.endTime = null;
    }
    /**
     * 开始自动关闭定时器
     */
    startAutoCloseTimer() {
        if (this.setting.autoClose && this.setting.listenEventToPauseAutoClose) {
            this.startTime = Date.now();
            this.endTime = null;
            this.timeId = QmsgUtils.setTimeout(() => {
                this.close();
            }, this.setting.timeout);
        }
    }
    /**
     * 重置自动关闭定时器（会自动清理旧的定时器）
     */
    resetAutoCloseTimer() {
        this.clearAutoCloseTimer();
        this.startAutoCloseTimer();
    }
    /**
     * 关闭Qmsg（会触发动画）
     */
    close() {
        this.setState(this.$el.$item, "closing");
        if (QmsgAnimation.CAN_ANIMATION) {
            // 支持动画
            QmsgInstStorage.remove(this.uuid);
        }
        else {
            // 不支持动画
            this.destroy();
        }
        const onCloseCallBack = this.setting.onClose;
        if (onCloseCallBack && typeof onCloseCallBack === "function") {
            onCloseCallBack.call(this);
        }
    }
    /**
     * 销毁Qmsg
     */
    destroy() {
        this.endTime = Date.now();
        this.$el.$item.remove();
        QmsgUtils.clearTimeout(this.timeId);
        QmsgInstStorage.remove(this.uuid);
        this.timeId = void 0;
    }
    /**
     * 设置内容文本
     * @param text 字符串
     */
    setText(text) {
        const $content = this.$el.$content;
        $content.innerText = text;
        this.setting.content = text;
    }
    /**
     * 设置内容超文本
     * @param text 字符串
     */
    setHTML(text) {
        const $content = this.$el.$content;
        QmsgUtils.setSafeHTML($content, text);
        this.setting.content = text;
    }
}

/**
 * 通过配置信息 来判断是否为同一条消息,并返回消息实例
 * @param config 配置项
 */
function QmsgInstHandler(config = {}) {
    const optionStr = QmsgUtils.toStr(config);
    // 处理后的配置
    const setting = QmsgUtils.toDynamicObject(QmsgDefaultConfig.config, config, QmsgDefaultConfig.INS_DEFAULT);
    // 处理后的配置字符串
    const settingStr = QmsgUtils.toStr(setting);
    // 寻找已生成的实例是否存在配置相同的
    let qmsgItemInfo = QmsgInstStorage.insInfoList.find((item) => {
        return item.configStr === optionStr && item.inst.settingStr === settingStr;
    });
    let qmsgInst = qmsgItemInfo?.inst;
    if (qmsgInst == null) {
        // 不存在，创建个新的
        const uuid = QmsgUtils.getUUID();
        const inst = new QmsgMsg(setting, uuid);
        const qmsgInstStorageInfo = {
            uuid: uuid,
            configStr: optionStr,
            inst: inst,
        };
        QmsgInstStorage.insInfoList.push(qmsgInstStorageInfo);
        const QmsgListLength = QmsgInstStorage.insInfoList.length;
        const maxNums = qmsgInstStorageInfo.inst.setting.maxNums;
        /**
         * 关闭多余的消息
         */
        if (QmsgListLength > maxNums) {
            for (let index = 0; index < QmsgListLength - maxNums; index++) {
                const item = QmsgInstStorage.insInfoList[index];
                item && item.inst.setting.autoClose && item.inst.close();
            }
        }
        qmsgItemInfo = qmsgInstStorageInfo;
        qmsgInst = qmsgInstStorageInfo.inst;
    }
    else {
        if (!qmsgInst.repeatNum) {
            qmsgInst.repeatNum = 2;
        }
        else {
            if (qmsgInst.repeatNum >= 99) ;
            else {
                qmsgInst.setRepeatNumIncreasing();
            }
        }
        qmsgInst.setMsgCount();
    }
    if (qmsgInst) {
        qmsgInst.$el.$item.setAttribute("data-count", qmsgInst?.repeatNum.toString());
    }
    else {
        throw new Error("QmsgInst is null");
    }
    return qmsgInst;
}

const QmsgEvent = {
    visibilitychange: {
        eventConfig: {
            /**
             * 添加visibilitychange事件监听
             * 当页面切换时，如果切换前的页面存在Qmsg实例且未关闭，切换后，页面活跃度会降低，导致setTimeout/setInterval失效或丢失事件
             * 监听visibilitychange，判断切换回来时，如果当前时间-开始时间大于timeout，则关闭
             * 如果设置了动画，使用close，否则使用destroy
             */
            callback() {
                if (document.visibilityState === "visible") {
                    // 回到页面
                    for (let index = 0; index < QmsgInstStorage.insInfoList.length; index++) {
                        const qmsgStorageItem = QmsgInstStorage.insInfoList[index];
                        const qmsgInst = qmsgStorageItem.inst;
                        const qmsgSetting = qmsgInst.setting;
                        const now = Date.now();
                        if (
                        // loading类型不被自动关闭
                        qmsgSetting.type !== "loading" &&
                            // 必须为自动关闭
                            qmsgSetting.autoClose &&
                            // 存在启动时间，不存在结束时间（未关闭）
                            typeof qmsgInst.endTime !== "number" &&
                            typeof qmsgInst.startTime === "number" &&
                            typeof qmsgSetting.timeout === "number" &&
                            now - qmsgInst.startTime >= qmsgSetting.timeout) {
                            // 超出时间，关闭
                            qmsgInst.close();
                        }
                    }
                }
            },
            option: {
                capture: true,
            },
        },
        /**
         * 监听事件
         */
        addEvent() {
            if ("visibilityState" in document) {
                document.addEventListener("visibilitychange", QmsgEvent.visibilitychange.eventConfig.callback, QmsgEvent.visibilitychange.eventConfig.option);
            }
            else {
                console.error("Qmsg addEvent visibilityState not support");
            }
        },
        /**
         * 移除监听事件
         */
        removeEvent() {
            document.removeEventListener("visibilitychange", QmsgEvent.visibilitychange.eventConfig.callback, QmsgEvent.visibilitychange.eventConfig.option);
        },
    },
};

const version = "1.7.0";

// 执行兼容
CompatibleProcessing();
class Qmsg {
    /** 数据 */
    $data;
    /**
     * 事件工具类
     */
    $eventUtils;
    /**
     * 实例化
     * @param config 配置
     */
    constructor(config) {
        this.$data = {
            version: version,
            config: QmsgDefaultConfig,
            icon: QmsgIcon,
            instanceStorage: QmsgInstStorage,
        };
        this.$eventUtils = QmsgEvent;
        this.$eventUtils.visibilitychange.addEvent();
        this.config(config);
    }
    /**
     * 修改全局的默认配置，该配置会覆盖掉上一次修改的配置
     * @param globalConfig 自定义全局配置
     */
    config(globalConfig) {
        const that = QmsgDefaultConfig;
        if (globalConfig == null)
            return that.INS_DEFAULT;
        if (typeof globalConfig !== "object")
            return that.INS_DEFAULT;
        for (const key in globalConfig) {
            if (!Object.hasOwn(globalConfig, key))
                continue;
            const descriptor = Object.getOwnPropertyDescriptor(globalConfig, key);
            if (descriptor) {
                if ("get" in descriptor) {
                    Reflect.deleteProperty(that.INS_DEFAULT, key);
                    Object.defineProperty(that.INS_DEFAULT, key, {
                        get: descriptor.get,
                        configurable: true,
                        enumerable: true,
                    });
                }
                else if ("value" in descriptor) {
                    Reflect.deleteProperty(that.INS_DEFAULT, key);
                    Object.defineProperty(that.INS_DEFAULT, key, {
                        get: () => descriptor.value,
                        configurable: true,
                        enumerable: true,
                    });
                }
                else {
                    throw new TypeError("Qmsg.config: descriptor.get or descriptor.value is null");
                }
            }
            else {
                Reflect.set(that.INS_DEFAULT, key, globalConfig[key]);
            }
        }
        return that.INS_DEFAULT;
    }
    info(content, config) {
        const params = QmsgUtils.mergeArgs(content, config);
        params.type = "info";
        return QmsgInstHandler.call(this, params);
    }
    warning(content, config) {
        const params = QmsgUtils.mergeArgs(content, config);
        params.type = "warning";
        return QmsgInstHandler.call(this, params);
    }
    success(content, config) {
        const params = QmsgUtils.mergeArgs(content, config);
        params.type = "success";
        return QmsgInstHandler.call(this, params);
    }
    error(content, config) {
        const params = QmsgUtils.mergeArgs(content, config);
        params.type = "error";
        return QmsgInstHandler.call(this, params);
    }
    loading(content, config) {
        const params = QmsgUtils.mergeArgs(content, config);
        params.type = "loading";
        params.autoClose = false;
        return QmsgInstHandler.call(this, params);
    }
    /**
     * 根据uuid删除Qmsg实例和元素
     * @param uuid 唯一值
     */
    remove(uuid) {
        QmsgInstStorage.remove(uuid);
    }
    /**
     * 关闭当前Qmsg创建的所有的实例
     */
    closeAll() {
        for (let index = QmsgInstStorage.insInfoList.length - 1; index >= 0; index--) {
            const item = QmsgInstStorage.insInfoList[index];
            item && item.inst && item.inst.close();
        }
    }
}
const qmsg = new Qmsg();

export { qmsg as default };
//# sourceMappingURL=index.esm.js.map
