System.register('Qmsg', [], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            /**
             * 兼容处理
             */
            function CompatibleProcessing() {
                /* 处理Object.assign不存在的问题 */
                try {
                    if (typeof Object.assign !== "function") {
                        Object.assign = function (target) {
                            target = Object(target);
                            if (arguments.length > 1) {
                                let sourceList = [...arguments].splice(1, arguments.length - 1);
                                sourceList.forEach((sourceItem) => {
                                    for (var sourceKey in sourceItem) {
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
                    console.warn(error);
                }
                /* 'classList' 兼容处理，add，remove不支持传入多个cls参数 */
                try {
                    if (!("classList" in document.documentElement)) {
                        Object.defineProperty(HTMLElement.prototype, "classList", {
                            get: function () {
                                var self = this;
                                function update(fn) {
                                    return function (value) {
                                        var classes = self.className.split(/\s+/g), index = classes.indexOf(value);
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
                    console.warn(error);
                }
            }

            const QmsgAnimation = {
                /** 状态 & 动画 */
                $state: {
                    opening: "MessageMoveIn",
                    done: "",
                    closing: "MessageMoveOut",
                },
                $name: {
                    startNameList: [
                        "animationName",
                        "WebkitAnimationName",
                        "MozAnimationName",
                        "msAnimationName",
                        "OAnimationName",
                    ],
                    endNameList: [
                        "animationend",
                        "webkitAnimationEnd",
                        "mozAnimationEnd",
                        "MSAnimationEnd",
                        "oanimationend",
                    ],
                },
                /**
                 * 获取元素上的animationName属性
                 * @param element
                 */
                getStyleAnimationName(element) {
                    for (let index = 0; index < this.$name.startNameList.length; index++) {
                        let animationName = this.$name.startNameList[index];
                        if (typeof element.style[animationName] !== "undefined") {
                            return element.style[animationName];
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

            const QmsgStore = {
                /** 声明插件名称 */
                PLUGIN_NAME: "qmsg",
                /** 命名空间，用于css和事件 */
                NAMESPACE: "qmsg",
                /** 实例配置的固定的默认值 */
                INS_DEFAULT: {},
                /** 固定的默认值 */
                DEFAULT: {
                    animation: true,
                    autoClose: true,
                    content: "",
                    html: false,
                    isHTML: false,
                    position: "top",
                    showClose: false,
                    maxNums: 5,
                    onClose: null,
                    showIcon: true,
                    showMoreContent: false,
                    showReverse: false,
                    timeout: 2500,
                    type: "info",
                    zIndex: 50000,
                    style: "",
                    customClass: "",
                    isLimitWidth: false,
                    limitWidthNum: 200,
                    limitWidthWrap: "no-wrap",
                },
                /**
                 * 是否支持动画属性
                 */
                CAN_ANIMATION: Boolean(QmsgAnimation.getStyleAnimationName(document.createElement("div")) != null),
            };

            const QmsgHeaderCloseIcon = '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            const QmsgIcon = {
                info: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm67.008 275.008q26.016 0 43.008-15.488t16.992-41.504-16.992-41.504-42.496-15.488-42.496 15.488-16.992 41.504 16.992 41.504 42.016 15.488zm12 360q0-6.016.992-16T592 664l-52.992 60.992q-8 8.992-16.512 14.016T508 742.016q-8.992-4-8-14.016l88-276.992q4.992-28-8.992-48t-44.992-24q-35.008.992-76.512 29.504t-72.512 72.512v15.008q-.992 10.016 0 19.008l52.992-60.992q8-8.992 16.512-14.016T468 437.024q10.016 4.992 7.008 16l-87.008 276q-7.008 24.992 7.008 44.512T444 800.032q50.016-.992 84-28.992t63.008-72z" fill="#909399"/></svg>',
                warning: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448 247.488 0 448-200.576 448-448 0-247.36-200.512-448-448-448zm0 704c-26.432 0-48-21.504-48-48s21.568-48 48-48c26.624 0 48 21.504 48 48s-21.376 48-48 48zm48-240c0 26.56-21.376 48-48 48-26.432 0-48-21.44-48-48V304c0-26.56 21.568-48 48-48 26.624 0 48 21.44 48 48v224z" fill="#E6A23C"/></svg>',
                error: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.57 448-448S759.42 64 512 64zm158.39 561.14a32 32 0 1 1-45.25 45.26L512 557.26 398.86 670.4a32 32 0 0 1-45.25-45.26L466.75 512 353.61 398.86a32 32 0 0 1 45.25-45.25L512 466.74l113.14-113.13a32 32 0 0 1 45.25 45.25L557.25 512z" fill="#F56C6C"/></svg>',
                success: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z" fill="#67C23A"/></svg>',
                loading: '<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/><path d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            };

            const QmsgObj = {
                QmsgList: [],
                /**
                 * 移除实例
                 * @param uuid
                 * @returns
                 */
                remove(uuid) {
                    for (let index = 0; index < QmsgObj.QmsgList.length; index++) {
                        if (QmsgObj.QmsgList[index].uuid === uuid) {
                            QmsgObj.QmsgList.splice(index, 1);
                            return;
                        }
                    }
                },
            };

            const QmsgCSS = {
                css: `@charset "utf-8";
      .qmsg.qmsg-wrapper{position:fixed;top:16px;left:0;z-index:50000;display:flex;box-sizing:border-box;margin:0;padding:0;width:100%;color:rgba(0,0,0,.55);list-style:none;font-variant:tabular-nums;font-size:13px;line-height:1;font-feature-settings:"tnum";pointer-events:none;flex-direction:column;}
      .qmsg.qmsg-data-position-center,.qmsg.qmsg-data-position-left,.qmsg.qmsg-data-position-right{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}
      .qmsg.qmsg-data-position-bottom,.qmsg.qmsg-data-position-bottomleft,.qmsg.qmsg-data-position-bottomright{position:fixed;top:unset;bottom:0;bottom:8px;left:50%;transform:translate(-50%,0);}
      .qmsg.qmsg-data-position-bottomleft .qmsg-item,.qmsg.qmsg-data-position-left .qmsg-item,.qmsg.qmsg-data-position-topleft .qmsg-item{text-align:left;}
      .qmsg.qmsg-data-position-bottom .qmsg-item,.qmsg.qmsg-data-position-center .qmsg-item,.qmsg.qmsg-data-position-top .qmsg-item{text-align:center;}
      .qmsg.qmsg-data-position-bottomright .qmsg-item,.qmsg.qmsg-data-position-right .qmsg-item,.qmsg.qmsg-data-position-topright .qmsg-item{text-align:right;}
      .qmsg .qmsg-item{position:relative;padding:8px;text-align:center;-webkit-animation-duration:.3s;animation-duration:.3s;}
      .qmsg .qmsg-item .qmsg-count{position:absolute;top:-4px;left:-4px;display:inline-block;height:16px;min-width:16px;border-radius:2px;background-color:red;color:#fff;text-align:center;font-size:12px;line-height:16px;-webkit-animation-duration:.3s;animation-duration:.3s;}
      .qmsg .qmsg-item:first-child{margin-top:-8px;}
      .qmsg .qmsg-content{position:relative;display:inline-block;padding:10px 12px;max-width:80%;min-width:40px;border-radius:4px;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,.15);text-align:center;pointer-events:all;}
      .qmsg .qmsg-content [class^=qmsg-content-]{display:flex;align-items:center;}
      .qmsg .qmsg-icon{position:relative;top:1px;display:inline-block;margin-right:8px;color:inherit;vertical-align:-.125em;text-align:center;text-transform:none;font-style:normal;font-size:16px;line-height:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
      .qmsg .qmsg-icon svg{display:inline-block;}
      .qmsg .qmsg-content .qmsg-show-more-content{display:flex;align-items:center;white-space:unset;overflow:unset;text-overflow:unset;padding-right:unset}
      .qmsg .qmsg-content-info .qmsg-icon{color:#1890ff;}
      .qmsg .qmsg-icon-close{margin:0;margin-left:8px;padding:0;outline:0;border:none;background-color:transparent;color:rgba(0,0,0,.45);font-size:12px;cursor:pointer;transition:color .3s;}
      .qmsg .qmsg-icon-close:hover>svg path{stroke:#555;}
      .qmsg .qmsg-icon-close.qmsg-show-more-content{position:unset;overflow:unset;padding-left:6px;margin-right:0}
      .qmsg .animate-turn{animation:MessageTurn 1s linear infinite;-webkit-animation:MessageTurn 1s linear infinite;}
      @keyframes MessageTurn{
            0%{-webkit-transform:rotate(0);}
            25%{-webkit-transform:rotate(90deg);}
            50%{-webkit-transform:rotate(180deg);}
            75%{-webkit-transform:rotate(270deg);}
            100%{-webkit-transform:rotate(360deg);}
      }
      @-webkit-keyframes MessageTurn{
            0%{-webkit-transform:rotate(0);}
            25%{-webkit-transform:rotate(90deg);}
            50%{-webkit-transform:rotate(180deg);}
            75%{-webkit-transform:rotate(270deg);}
            100%{-webkit-transform:rotate(360deg);}
      }
      @-webkit-keyframes MessageMoveOut{
            0%{max-height:150px;opacity:1;}
            to{max-height:0;opacity:0;}
      }
      @keyframes MessageMoveOut{
            0%{max-height:150px;opacity:1;}
            to{max-height:0;opacity:0;}
      }
      @-webkit-keyframes MessageMoveIn{
            0%{opacity:0;transform:translateY(-100%);transform-origin:0 0;}
            to{opacity:1;transform:translateY(0);transform-origin:0 0;}
      }
      @keyframes MessageMoveIn{
            0%{opacity:0;transform:translateY(-100%);transform-origin:0 0;}
            to{opacity:1;transform:translateY(0);transform-origin:0 0;}
      }
      @-webkit-keyframes MessageShake{
            0%,100%{opacity:1;transform:translateX(0);}
            25%,75%{opacity:.75;transform:translateX(-4px);}
            50%{opacity:.25;transform:translateX(4px);}
      }
      @keyframes MessageShake{
            0%,100%{opacity:1;transform:translateX(0);}
            25%,75%{opacity:.75;transform:translateX(-4px);}
            50%{opacity:.25;transform:translateX(4px);}
      }`,
                /**
                 * 获取CSS元素
                 * @returns
                 */
                getStyleElement() {
                    let cssResourceNode = document.createElement("style");
                    cssResourceNode.setAttribute("type", "text/css");
                    cssResourceNode.setAttribute("data-type", QmsgStore.PLUGIN_NAME);
                    cssResourceNode.innerHTML = this.css;
                    return cssResourceNode;
                },
            };

            /**
             * 每条消息的构造函数
             */
            class QmsgMsg {
                option;
                uuid;
                /**
                 * setTimeout的id
                 */
                #timerId;
                /**
                 * 启动时间
                 */
                #startTime;
                /**
                 * 关闭时间
                 */
                #endTime;
                /**
                 * Qmsg的配置
                 */
                #setting;
                /**
                 * uuid
                 */
                #uuid;
                /**
                 * 当前动画状态
                 */
                #state;
                /**
                 * 当前相同消息的数量
                 */
                #repeatNum;
                /**
                 * 主元素
                 */
                $Qmsg;
                constructor(option, uuid) {
                    this.option = option;
                    this.uuid = uuid;
                    this.#timerId = void 0;
                    this.#startTime = null;
                    this.#endTime = null;
                    // this.#setting = Object.assign({}, QmsgStore.DEFAULT, this.option);
                    this.#setting = QmsgUtils.toDynamicObject(QmsgStore.DEFAULT, option, QmsgStore.INS_DEFAULT);
                    this.#uuid = uuid;
                    this.#state = "opening";
                    this.$Qmsg = document.createElement("div");
                    this.#repeatNum = 1;
                    this.detectionType();
                    this.init();
                }
                /**
                 * 获取当前配置
                 * @returns
                 */
                getSetting() {
                    return this.#setting;
                }
                /**
                 * 获取当前相同的数量
                 * @returns
                 */
                getRepeatNum() {
                    return this.#repeatNum;
                }
                /**
                 * 设置repeatNum值
                 */
                setRepeatNum(num) {
                    this.#repeatNum = num;
                }
                /**
                 * 设置repeatNum自增
                 */
                setRepeatNumIncreasing() {
                    this.#repeatNum++;
                }
                /**
                 * 初始化元素
                 */
                init() {
                    let QmsgContext = this;
                    if (this.#setting.customClass &&
                        typeof this.#setting.customClass === "string") {
                        /* 设置自定义类名 */
                        this.$Qmsg.classList.add(this.#setting.customClass);
                    }
                    let $svg = QmsgIcon[this.#setting.type || "info"];
                    let contentClassName = QmsgUtils.getNameSpacify("content-" + this.#setting.type || "info");
                    if (this.#setting.showClose) {
                        contentClassName += " " + QmsgUtils.getNameSpacify("content-with-close");
                    }
                    let content = this.#setting.content || "";
                    let extraCloseIconClassName = "";
                    let $closeSvg = QmsgHeaderCloseIcon;
                    if (this.#setting.showMoreContent) {
                        contentClassName += "qmsg-show-more-content";
                        extraCloseIconClassName += "qmsg-show-more-content";
                    }
                    let $closeIcon = "";
                    if (this.#setting.showClose) {
                        /* 显示右上角的关闭图标按钮 */
                        $closeIcon = `<i class="qmsg-icon qmsg-icon-close ${extraCloseIconClassName}">${$closeSvg}</i>`;
                    }
                    /* 内容 */
                    let $content = document.createElement("span");
                    let $positionClassName = QmsgUtils.getNameSpacify("data-position", this.#setting.position.toLowerCase());
                    if (this.#setting.html || this.#setting.isHTML) {
                        /* 内容是html */
                        $content.innerHTML = content;
                    }
                    else {
                        $content.innerText = content;
                    }
                    if (this.#setting.isLimitWidth) {
                        /* 限制宽度 */
                        let limitWidthNum = this.#setting.limitWidthNum;
                        if (typeof limitWidthNum === "string") {
                            let isNumberPattern = /^\d+$/;
                            if (isNumberPattern.test(limitWidthNum)) {
                                limitWidthNum = limitWidthNum + "px";
                            }
                        }
                        else {
                            limitWidthNum = limitWidthNum.toString() + "px";
                        }
                        $content.style.maxWidth = limitWidthNum;
                        $content.style.width = limitWidthNum;
                        /* 设置换行 */
                        if (this.#setting.limitWidthWrap === "no-wrap") {
                            /* 禁止换行 */
                            $content.style.whiteSpace = "nowrap";
                        }
                        else if (this.#setting.limitWidthWrap === "ellipsis") {
                            /* 禁止换行且显示省略号 */
                            $content.style.whiteSpace = "nowrap";
                            $content.style.overflow = "hidden";
                            $content.style.textOverflow = "ellipsis";
                        }
                        else if (this.#setting.limitWidthWrap === "wrap") {
                            /* 允许换行 */
                            /* 默认的 */
                            $content.style.whiteSpace = "";
                        }
                    }
                    this.$Qmsg.innerHTML = `
        <div class="qmsg-content">
            <div class="${contentClassName}">
            ${this.#setting.showIcon ? `<i class="qmsg-icon">${$svg}</i>` : ""}
                ${$content.outerHTML}
                ${$closeIcon}
            </div>
        </div>
        `;
                    this.$Qmsg.classList.add(QmsgUtils.getNameSpacify("item"));
                    this.$Qmsg.setAttribute(QmsgUtils.getNameSpacify("uuid"), this.#uuid);
                    let $shadowContainer = document.querySelector(".qmsg-shadow-container");
                    let $shadowRoot = $shadowContainer?.shadowRoot;
                    if (!$shadowContainer) {
                        $shadowContainer = document.createElement("div");
                        $shadowContainer.className = "qmsg-shadow-container";
                        $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
                        let __$wrapper__ = document.createElement("div");
                        __$wrapper__.classList.add(QmsgStore.NAMESPACE, QmsgUtils.getNameSpacify("wrapper"), QmsgUtils.getNameSpacify("is-initialized"));
                        __$wrapper__.classList.add($positionClassName);
                        $shadowRoot.appendChild(QmsgCSS.getStyleElement());
                        $shadowRoot.appendChild(__$wrapper__);
                        if (this.#setting.style != null) {
                            let __$ownStyle__ = document.createElement("style");
                            __$ownStyle__.setAttribute("type", "text/css");
                            __$ownStyle__.innerHTML = this.#setting.style;
                            $shadowRoot.appendChild(__$ownStyle__);
                        }
                        document.body.appendChild($shadowContainer);
                    }
                    if ($shadowRoot == null) {
                        throw new TypeError(QmsgStore.PLUGIN_NAME + " $shadowRoot is null");
                    }
                    let $wrapper = $shadowRoot.querySelector(`.${QmsgStore.NAMESPACE}.${$positionClassName}`);
                    if (!$wrapper) {
                        $wrapper = document.createElement("div");
                        $wrapper.classList.add(QmsgStore.NAMESPACE, QmsgUtils.getNameSpacify("wrapper"), QmsgUtils.getNameSpacify("is-initialized"));
                        $wrapper.classList.add($positionClassName);
                        $shadowRoot.appendChild($wrapper);
                    }
                    if (this.#setting.showReverse) {
                        $wrapper.style.flexDirection = "column-reverse";
                    }
                    else {
                        $wrapper.style.flexDirection = "column";
                    }
                    let zIndex = this.#setting.zIndex;
                    if (typeof zIndex === "function") {
                        zIndex = zIndex();
                    }
                    if (!isNaN(zIndex)) {
                        $wrapper.style.zIndex = zIndex.toString();
                    }
                    $wrapper.appendChild(this.$Qmsg);
                    this.setState(this.$Qmsg, "opening");
                    if (this.#setting.showClose) {
                        /* 关闭按钮绑定点击事件 */
                        let $closeIcon = this.$Qmsg.querySelector(".qmsg-icon-close");
                        if ($closeIcon) {
                            $closeIcon.addEventListener("click", function () {
                                QmsgContext.close();
                            });
                        }
                    }
                    let animationendEvent = function (event) {
                        /* 监听动画完成 */
                        let target = event.target, animationName = event.animationName;
                        if (animationName === QmsgAnimation.$state.closing) {
                            QmsgContext.#endTime = new Date().getTime();
                            clearTimeout(QmsgContext.#timerId);
                            QmsgContext.destroy();
                        }
                        QmsgAnimation.setStyleAnimationName(target);
                    };
                    QmsgAnimation.$name.endNameList.forEach(function (animationendName) {
                        // @ts-ignore
                        QmsgContext.$Qmsg.addEventListener(animationendName, animationendEvent);
                    });
                    if (this.#setting.autoClose) {
                        /* 自动关闭 */
                        this.#startTime = new Date().getTime();
                        this.#timerId = setTimeout(function () {
                            QmsgContext.close();
                        }, this.#setting.timeout);
                        this.$Qmsg.addEventListener("mouseover", function () {
                            /* 鼠标滑入，清除定时器 */
                            QmsgContext.#startTime = null;
                            QmsgContext.#endTime = null;
                            clearTimeout(QmsgContext.#timerId);
                        });
                        this.$Qmsg.addEventListener("mouseout", function () {
                            /* 鼠标滑出，重启定时器 */
                            if (QmsgContext.#state !== "closing") {
                                /* 状态为关闭则不重启定时器 */
                                QmsgContext.#startTime = new Date().getTime();
                                QmsgContext.#timerId = setTimeout(function () {
                                    QmsgContext.close();
                                }, QmsgContext.#setting.timeout);
                            }
                        });
                    }
                }
                /**
                 * 对timeout进行检测并转换
                 * 当timeout为string时，转换为number
                 * timeout必须在规定范围内
                 */
                detectionType() {
                    if (this.#setting.timeout != null &&
                        typeof this.#setting.timeout === "string") {
                        this.#setting.timeout = parseInt(this.#setting.timeout);
                    }
                    if (isNaN(this.#setting.timeout)) {
                        this.#setting.timeout = QmsgStore.DEFAULT.timeout;
                    }
                    if (!(this.#setting.timeout != null &&
                        parseInt(this.#setting.timeout.toString()) >= 0 &&
                        parseInt(this.#setting.timeout.toString()) <= Number.MAX_VALUE)) {
                        this.#setting.timeout = QmsgStore.DEFAULT.timeout;
                    }
                    if (typeof this.#setting.zIndex === "function") {
                        this.#setting.zIndex = this.#setting.zIndex();
                    }
                    if (this.#setting.zIndex != null &&
                        typeof this.#setting.zIndex === "string") {
                        this.#setting.zIndex = parseInt(this.#setting.zIndex);
                    }
                    if (isNaN(this.#setting.zIndex)) {
                        this.#setting.zIndex =
                            typeof QmsgStore.DEFAULT.zIndex === "function"
                                ? QmsgStore.DEFAULT.zIndex()
                                : QmsgStore.DEFAULT.zIndex;
                    }
                }
                /**
                 * 设置元素动画状态 开启/关闭
                 * @param QmsgMsg
                 * @param state
                 * @returns
                 */
                setState(element, state) {
                    if (!state || !QmsgAnimation.$state[state])
                        return;
                    this.#state = state;
                    QmsgAnimation.setStyleAnimationName(element, QmsgAnimation.$state[state]);
                }
                /**
                 * 设置消息数量统计
                 */
                setMsgCount() {
                    let QmsgContext = this;
                    let countClassName = QmsgUtils.getNameSpacify("count");
                    let wrapperClassName = `div.${QmsgUtils.getNameSpacify("data-position", this.#setting.position.toLowerCase())} [class^="qmsg-content-"]`;
                    let $content = this.$Qmsg.querySelector(wrapperClassName);
                    if (!$content) {
                        throw new TypeError("$content is null");
                    }
                    let $count = $content.querySelector("." + countClassName);
                    if (!$count) {
                        $count = document.createElement("span");
                        $count.classList.add(countClassName);
                        $content.appendChild($count);
                    }
                    $count.innerHTML = this.getRepeatNum().toString();
                    QmsgAnimation.setStyleAnimationName($count);
                    QmsgAnimation.setStyleAnimationName($count, "MessageShake");
                    /* 重置定时器 */
                    clearTimeout(this.#timerId);
                    if (this.#setting.autoClose) {
                        this.#timerId = setTimeout(function () {
                            QmsgContext.close();
                        }, this.#setting.timeout);
                    }
                }
                /**
                 * 关闭Qmsg（会触发动画）
                 */
                close() {
                    this.setState(this.$Qmsg, "closing");
                    if (QmsgStore.CAN_ANIMATION) {
                        /* 支持动画 */
                        QmsgObj.remove(this.#uuid);
                    }
                    else {
                        /* 不支持动画 */
                        this.destroy();
                    }
                    let onCloseCallBack = this.#setting.onClose;
                    if (onCloseCallBack && typeof onCloseCallBack === "function") {
                        onCloseCallBack.call(this);
                    }
                }
                /**
                 * 销毁Qmsg
                 */
                destroy() {
                    this.#endTime = new Date().getTime();
                    this.$Qmsg.remove();
                    clearTimeout(this.#timerId);
                    QmsgObj.remove(this.uuid);
                }
                /**
                 * 设置内容文本
                 */
                setText(text) {
                    let $content = this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");
                    if ($content) {
                        $content.innerText = text;
                        this.#setting.content = text;
                    }
                    else {
                        throw new TypeError("$content is null");
                    }
                }
                /**
                 * 设置内容超文本
                 */
                setHTML(text) {
                    let $content = this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");
                    if ($content) {
                        $content.innerHTML = text;
                        this.#setting.content = text;
                    }
                    else {
                        throw new TypeError("$content is null");
                    }
                }
            }

            const QmsgUtils = {
                /**
                 * 生成带插件名的名称
                 * @param args
                 * @returns
                 */
                getNameSpacify(...args) {
                    let result = QmsgStore.NAMESPACE;
                    for (let index = 0; index < args.length; ++index) {
                        result += "-" + args[index];
                    }
                    return result;
                },
                /**
                 * 获取唯一性的UUID
                 * @returns
                 */
                getUUID() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (value) {
                        let randValue = (Math.random() * 16) | 0, newValue = value == "x" ? randValue : (randValue & 0x3) | 0x8;
                        return newValue.toString(16);
                    });
                },
                /**
                 * 合并参数为配置信息，用于创建Msg实例
                 * @param content 文本内容
                 * @param config 配置
                 * @private
                 */
                mergeArgs(content = "", config) {
                    let opts = {};
                    if (arguments.length === 0) {
                        return opts;
                    }
                    if (typeof content === "object") {
                        return Object.assign(opts, content);
                    }
                    else {
                        opts.content = content.toString();
                    }
                    if (typeof config === "object") {
                        return Object.assign(opts, config);
                    }
                    return opts;
                },
                /**
                 * 通过配置信息 来判断是否为同一条消息,并返回消息实例
                 * @param option 配置项
                 * @private
                 */
                judgeReMsg(option) {
                    option = option || {};
                    let optionString = JSON.stringify(option);
                    /* 寻找已生成的实例是否存在配置相同的 */
                    let findQmsgItemInfo = QmsgObj.QmsgList.find((item) => {
                        return item.config === optionString;
                    });
                    let QmsgInstance = findQmsgItemInfo?.instance;
                    if (QmsgInstance == null) {
                        /* 不存在，创建个新的 */
                        let uuid = QmsgUtils.getUUID();
                        let QmsgItemInfo = {
                            uuid: uuid,
                            config: optionString,
                            instance: new QmsgMsg(option, uuid),
                        };
                        QmsgObj.QmsgList.push(QmsgItemInfo);
                        let QmsgListLength = QmsgObj.QmsgList.length;
                        let maxNums = QmsgItemInfo.instance.getSetting().maxNums;
                        /**
                         * 关闭多余的消息
                         */
                        if (QmsgListLength > maxNums) {
                            for (let index = 0; index < QmsgListLength - maxNums; index++) {
                                let item = QmsgObj.QmsgList[index];
                                item && item.instance.getSetting().autoClose && item.instance.close();
                            }
                        }
                        findQmsgItemInfo = QmsgItemInfo;
                        QmsgInstance = QmsgItemInfo.instance;
                    }
                    else {
                        if (!QmsgInstance.getRepeatNum()) {
                            QmsgInstance.setRepeatNum(2);
                        }
                        else {
                            if (QmsgInstance.getRepeatNum() >= 99) ;
                            else {
                                QmsgInstance.setRepeatNumIncreasing();
                            }
                        }
                        QmsgInstance.setMsgCount();
                    }
                    if (QmsgInstance) {
                        QmsgInstance.$Qmsg.setAttribute("data-count", QmsgInstance?.getRepeatNum().toString());
                    }
                    else {
                        throw new TypeError("QmsgInstance is null");
                    }
                    return QmsgInstance;
                },
                /**
                 * 转换为动态对象
                 * @param obj 需要配置的对象
                 * @param other_obj 获取的其它对象
                 * @returns
                 */
                toDynamicObject(obj, ...other_objs) {
                    let __obj__ = Object.assign({}, obj);
                    Object.keys(__obj__).forEach((keyName) => {
                        let objValue = __obj__[keyName];
                        Object.defineProperty(__obj__, keyName, {
                            get() {
                                let findIndex = other_objs.findIndex((other_obj) => {
                                    // 判断其他对象中是否有该属性
                                    return other_obj.hasOwnProperty.call(other_obj, keyName);
                                });
                                if (findIndex !== -1) {
                                    return other_objs[findIndex][keyName];
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
            };

            /* 执行兼容 */
            CompatibleProcessing();
            class Qmsg {
                /** 版本号 */
                #version;
                /** 数据 */
                #data;
                /** 图标svg */
                #icons;
                /** 每个Qmsg实例 */
                #obj;
                constructor() {
                    this.#version = "2024.6.10";
                    this.#data = QmsgStore;
                    this.#icons = QmsgIcon;
                    this.#obj = QmsgObj;
                }
                /**
                 * 修改默认配置
                 * @param option
                 */
                config(option) {
                    if (option == null)
                        return;
                    if (typeof option !== "object")
                        return;
                    QmsgStore.INS_DEFAULT = null;
                    QmsgStore.INS_DEFAULT = option;
                }
                info(content, option) {
                    let params = QmsgUtils.mergeArgs(content, option);
                    params.type = "info";
                    return QmsgUtils.judgeReMsg.call(this, params);
                }
                warning(content, option) {
                    let params = QmsgUtils.mergeArgs(content, option);
                    params.type = "warning";
                    return QmsgUtils.judgeReMsg.call(this, params);
                }
                success(content, option) {
                    let params = QmsgUtils.mergeArgs(content, option);
                    params.type = "success";
                    return QmsgUtils.judgeReMsg.call(this, params);
                }
                error(content, option) {
                    let params = QmsgUtils.mergeArgs(content, option);
                    params.type = "error";
                    return QmsgUtils.judgeReMsg.call(this, params);
                }
                loading(content, config) {
                    let params = QmsgUtils.mergeArgs(content, config);
                    params.type = "loading";
                    params.autoClose = false;
                    return QmsgUtils.judgeReMsg.call(this, params);
                }
                /**
                 * 根据uuid删除Qmsg实例和元素
                 * @param uuid
                 */
                remove(uuid) {
                    QmsgObj.remove(uuid);
                }
                /**
                 * 关闭当前Qmsg创建的所有的实例
                 */
                closeAll() {
                    for (let index = QmsgObj.QmsgList.length - 1; index >= 0; index--) {
                        let item = QmsgObj.QmsgList[index];
                        item && item.instance && item.instance.close();
                    }
                }
            }
            let qmsg = exports("default", new Qmsg());

        })
    };
}));
//# sourceMappingURL=index.system.js.map
