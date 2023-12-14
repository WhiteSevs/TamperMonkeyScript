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
    global.pops = factory(global.pops);
  }
})(typeof window !== "undefined" ? window : this, function (AnotherPops) {
  "use strict";

  /**
   * @typedef {object} PopsBtnCallBackEvent 按钮回调Event
   * @property {HTMLElement} animElement 动画元素（包裹着弹窗元素）
   * @property {HTMLElement} maskElement 遮罩层元素
   * @property {string} type
   * @property {"alert"|"confirm"} function 调用的方法
   * @property {string} guid 唯一id
   * @property {Function} close 关闭弹窗
   * @property {Function} hide 隐藏弹窗
   * @property {Function} show 显示弹窗
   */

  /**
   * @typedef { object } PopsPromptBtnCallBackEvent
   * @property {HTMLElement} animElement 动画元素（包裹着弹窗元素）
   * @property {HTMLElement} maskElement 遮罩层元素
   * @property {string} type
   * @property {"prompt"} function 调用的方法类型
   * @property {string} guid 唯一id
   * @property {Function} close 关闭弹窗
   * @property {Function} hide 隐藏弹窗
   * @property {Function} show 显示弹窗
   * @property {string} [text=""] 输入的内容
   */

  /**
   * @callback PopsBtnCallBack
   * @param {PopsBtnCallBackEvent} event 事件
   */

  /**
   * @callback PopsPromptBtnCallBack
   * @param {PopsPromptBtnCallBackEvent} event 事件
   */

  /**
   * @callback PopsMaskClickCallBack
   * @param { Function } originalRun
   * @param { PopsAlertDetails|PopsDrawerDetails|PopsIframeDetails|PopsPromptDetails|PopsPromptBtmDetails|PopsLoadingDetails } config
   */
  /**
   * @typedef { object } PopsMaskDetails 遮罩层配置
   * @property { boolean } enable 是否启用
   * @property { {
   *  toClose: boolean,
   *  toHide: boolean
   * } } clickEvent
   * @property { PopsMaskClickCallBack } clickCallBack
   */
  /**
   * @typedef {object} PopsButtonDetails 按钮配置
   * @property {boolean} enable 是否启用
   * @property { "min"|"mise"|"max"|"close"|"edit"|"share"|"delete"|"search"|"upload"|"loading"|"next"|"prev" } [icon=""] 图标按钮，如果名字为内置的，则使用内置的，否则为自定义的svg
   * @property { boolean } rightIcon 图标按钮是否放在右边
   * @property { boolean } iconIsLoading 图标按钮是否是旋转360°
   * @property { "large"|"small" } [size=""] 按钮尺寸大小，默认为空
   * @property {"default"|"primary"|"xiaomi-primary"|"success"|"info"|"warning"|"danger"} [type=""] 按钮样式类型
   * @property {string} [text=""] 按钮文字
   * @property { PopsBtnCallBack } callback 按钮点击的回调
   */

  /**
   * @typedef { object } PopsHeaderCloseButtonDetails 顶部关闭按钮配置
   * @property { boolean } enable 是否启用
   * @property { PopsBtnCallBack } callback 按钮点击的回调
   */

  /**
   * @typedef {object} PopsPromptBtmDetails prompt的按钮配置
   * @property {boolean} enable 是否启用
   * @property { "large"|"small" } [size=""] 按钮尺寸大小，默认为空
   * @property {"default"|"primary"|"xiaomi-primary"|"success"|"info"|"warning"|"danger"} [type=""] 按钮样式类型
   * @property {string} [text=""] 按钮文字
   * @property { PopsPromptBtnCallBack } callback 按钮点击的回调
   */

  /**
   * 工具类
   */
  let popsUtils = {
    assignJSON: function (target, source) {
      /* JSON数据存在即替换 */
      if (source == null) {
        return target;
      }
      for (var target_key in target) {
        if (typeof source[target_key] !== "undefined") {
          if (
            typeof source[target_key] === "object" &&
            !(source[target_key] instanceof HTMLElement)
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
      elementString = elementString
        .replace(/^[\n|\s]*/g, "")
        .replace(/[\n|\s]*$/g, ""); /* 去除前后的换行和空格 */
      let targetElement = document.createElement("div");
      targetElement.innerHTML = elementString;
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
     * 元素后追加元素
     * @param {HTMLElement} target
     * @param {HTMLElement[]} sourceList
     */
    appendChild(target, sourceList) {
      sourceList.forEach((item) => {
        target.appendChild(item);
      });
    },
    /**
     * 删除配置中对应的对象
     * @param {any[]} targets
     * @param {string} guid
     * @param {boolean} removeAll 是否全部删除
     * @returns
     */
    configRemove(targets, guid, removeAll = false) {
      targets.forEach((target) => {
        target.forEach((item, index) => {
          if (removeAll || item["guid"] === guid) {
            if (
              pops.config.animation.hasOwnProperty(
                item.animElement.getAttribute("anim")
              )
            ) {
              item.animElement.style.width = "100%";
              item.animElement.style.height = "100%";
              item.animElement.style["animation-name"] =
                item.animElement.getAttribute("anim") + "-reverse";
              if (
                pops.config.animation.hasOwnProperty(
                  item.animElement.style["animation-name"]
                )
              ) {
                item.animElement.addEventListener(
                  "animationend",
                  function () {
                    item.animElement.remove();
                    item.maskElement?.remove();
                  },
                  true /* 不冒泡 */
                );
              } else {
                item.animElement.remove();
                item.maskElement?.remove();
              }
            } else {
              item.animElement.remove();
              item.maskElement?.remove();
            }
            target.splice(index, 1);
          }
        });
      });

      return targets;
    },
    /**
     * 隐藏
     * @param {"alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer"} popsType
     * @param {any[]} source
     * @param {string} guid
     * @param {PopsAlertDetails|PopsDrawerDetails|PopsPromptDetails|PopsConfirmDetails|PopsIframeDetails|PopsLoadingDetails} config
     * @param {HTMLElement} animElement
     * @param {HTMLElement} maskElement
     */
    hide(popsType, source, guid, config, animElement, maskElement) {
      let popsElement = animElement.querySelector(".pops[type-value]");
      if (popsType === "drawer") {
        setTimeout(() => {
          maskElement.style.setProperty("display", "none");
          if (["top", "bottom"].includes(config.direction)) {
            popsElement.style.setProperty("height", 0);
          } else if (["left", "right"].includes(config.direction)) {
            popsElement.style.setProperty("width", 0);
          } else {
            console.error("未知direction：", config.direction);
          }
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
                item.animElement.removeEventListener(
                  "animationend",
                  animationendCallBack,
                  true /* 不冒泡 */
                );
              }
              item.animElement.addEventListener(
                "animationend",
                animationendCallBack,
                true /* 不冒泡 */
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
     * @param {PopsAlertDetails|PopsDrawerDetails|PopsPromptDetails|PopsConfirmDetails|PopsIframeDetails|PopsLoadingDetails} config
     * @param {HTMLElement} animElement
     * @param {HTMLElement} maskElement
     */
    show(popsType, source, guid, config, animElement, maskElement) {
      let popsElement = animElement.querySelector(".pops[type-value]");
      if (popsType === "drawer") {
        setTimeout(() => {
          maskElement.style.setProperty("display", "");
          if (["top", "bottom"].includes(config.direction)) {
            popsElement.style.setProperty("height", config.size);
          } else if (["left", "right"].includes(config.direction)) {
            popsElement.style.setProperty("width", config.size);
          } else {
            console.error("未知direction：", config.direction);
          }
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
                item.animElement.removeEventListener(
                  "animationend",
                  animationendCallBack,
                  true /* 不冒泡 */
                );
              }
              item.animElement.addEventListener(
                "animationend",
                animationendCallBack,
                true /* 不冒泡 */
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
     * @param {PopsAlertDetails|PopsDrawerDetails|PopsPromptDetails|PopsConfirmDetails|PopsIframeDetails|PopsLoadingDetails} config
     * @param {HTMLElement} animElement
     */
    close(popsType, source, guid, config, animElement) {
      let popsElement = animElement.querySelector(".pops[type-value]");
      /**
       * 动画结束事件
       */
      let transitionendEvent = function () {
        let defaultClose = function () {
          popsUtils.jQuery.off(
            popsElement,
            "transitionend",
            undefined,
            defaultClose
          );
          let animationFrameId = null;
          let checkStyle = function () {
            if (["top", "bottom"].includes(config.direction)) {
              /* 如果为0，那么该元素当前状态是hide，直接手动触发动画结束事件 */
              if (parseInt(getComputedStyle(popsElement).height) < 2) {
                window.cancelAnimationFrame(animationFrameId);
                popsUtils.configRemove([source], guid);
              } else {
                animationFrameId = window.requestAnimationFrame(checkStyle);
              }
            } else if (["left", "right"].includes(config.direction)) {
              /* 如果为0，那么该元素当前状态是hide，直接手动触发动画结束事件 */
              if (parseInt(getComputedStyle(popsElement).width) < 2) {
                window.cancelAnimationFrame(animationFrameId);
                popsUtils.configRemove([source], guid);
              } else {
                animationFrameId = window.requestAnimationFrame(checkStyle);
              }
            } else {
              console.error("未知direction：", config.direction);
            }
          };
          animationFrameId = window.requestAnimationFrame(checkStyle);
        };
        popsUtils.jQuery.on(
          popsElement,
          "transitionend",
          undefined,
          defaultClose
        );
        if (["top", "bottom"].includes(config.direction)) {
          /* 如果为0，那么该元素当前状态是hide，直接手动触发动画结束事件 */
          if (parseInt(getComputedStyle(popsElement).height) < 2) {
            popsElement.dispatchEvent(new Event("transitionend"));
          } else {
            popsElement.style.height = "0px";
          }
        } else if (["left", "right"].includes(config.direction)) {
          /* 如果为0，那么该元素当前状态是hide，直接手动触发动画结束事件 */
          if (parseInt(getComputedStyle(popsElement).width) < 2) {
            popsElement.dispatchEvent(new Event("transitionend"));
          } else {
            popsElement.style.width = "0px";
          }
        } else {
          console.error("未知direction：", config.direction);
        }
      };

      if (popsType === "drawer") {
        setTimeout(() => {
          transitionendEvent();
        }, config.closeDelay);
      } else {
        popsUtils.configRemove([source], guid);
      }
    },
    /**
     * 获取所有弹窗中的最大的z-index
     * @param {number} defaultValue
     */
    getPopsMaxZIndex(defaultValue) {
      let maxZIndex = 0;
      let maxZIndexElement = null;

      Object.keys(pops.config.layer).forEach((item) => {
        pops.config.layer[item].forEach((item2) => {
          let itemZIndex = parseInt(
            getComputedStyle(item2["animElement"]).zIndex
          );
          maxZIndexElement =
            itemZIndex > maxZIndex ? item2["animElement"] : maxZIndexElement;
          maxZIndex = itemZIndex > maxZIndex ? itemZIndex : maxZIndex;
        });
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
      var result = {};
      Object.keys(sheet.cssRules).forEach((key) => {
        if (
          sheet.cssRules[key].type === 7 &&
          sheet.cssRules[key].name.startsWith("pops-anim-")
        ) {
          result[sheet.cssRules[key].name] = sheet.cssRules[key];
        }
      });
      return result;
    },
    /**
     * 拖拽元素
     * 来自:https://greasyfork.org/zh-CN/scripts/412159-mydrag
     * 修复元素存在transform的时候拖拽有问题
     * @param {HTMLEmbedElement} moveElement
     * @param {object} options
     */
    drag(moveElement, options) {
      var MyDragHelper = {},
        MyDrag = (function () {
          function Drag() {
            //初始化
            this.initialize.apply(this, arguments);
          }
          Drag.prototype = {
            //初始化
            initialize: function (drag, options) {
              this.changeTransition = false;
              this.drag = this.$(drag);
              this.drag.style.width =
                parseInt(this.drag.style.width) || this.drag.offsetWidth;
              this._x = this._y = 0;
              this._moveDrag = this.bind(this, this.moveDrag);
              this._stopDrag = this.bind(this, this.stopDrag);
              this.setOptions(options);
              this.handle = this.$(this.options.handle);
              this.left = this.options.left;
              this.top = this.options.top;
              this.right = this.options.right;
              this.bottom = this.options.bottom;
              this.position = this.options.position;
              this.onlyViewport = this.options.onlyViewport;
              this.maxContainer = this.$(this.options.maxContainer);
              this.transformLeft = 0;
              this.transformTop = 0;
              this.setTransform();
              this.limit = this.options.limit;
              this.lockX = this.options.lockX;
              this.lockY = this.options.lockY;
              this.lock = this.options.lock;
              this.onStart = this.options.onStart;
              this.onMove = this.options.onMove;
              this.onStop = this.options.onStop;
              this.handle.style.cursor = "move";
              this.zIndex = this.options.zIndex;
              this.alone = this.options.alone;
              if (!this.alone) {
                MyDragHelper.zIndex = MyDragHelper.zIndex
                  ? ++MyDragHelper.zIndex
                  : this.zIndex;
                MyDragHelper.count = MyDragHelper.count
                  ? ++MyDragHelper.count
                  : 1;
              }
              this.changeLayout();
              this.addHandler(
                this.handle,
                "mousedown",
                this.bind(this, this.startDrag)
              );
              this.resize();
            },
            changeLayout: function () {
              if (this.right) {
                this.drag.style.right = this.right + "px";
              } else {
                this.drag.style.left =
                  this.maxContainer.offsetLeft + this.left + "px";
              }
              if (this.bottom) {
                this.drag.style.bottom = this.bottom + "px";
              } else {
                this.drag.style.top =
                  this.maxContainer.offsetLeft + this.top + "px";
              }
              this.drag.style.position = this.position;
              this.drag.style.margin = "0";
              this.drag.style.zIndex = !this.alone
                ? MyDragHelper.zIndex
                : this.zIndex;
            },
            startDrag: function (event) {
              var event = event || window.event;
              this._x = event.clientX - this.drag.offsetLeft;
              this._y = event.clientY - this.drag.offsetTop;
              if (getComputedStyle(this.drag)["transition-duration"] !== "0s") {
                this.changeTransition = true;
                this.drag.style.transitionDuration = "0s";
              }
              if (!this.alone && MyDragHelper.count > 1)
                this.drag.style.zIndex = ++MyDragHelper.zIndex;
              this.addHandler(document, "mousemove", this._moveDrag);
              this.addHandler(document, "mouseup", this._stopDrag);
              event.preventDefault && event.preventDefault();
              this.handle.setCapture && this.handle.setCapture();
              this.onStart();
              var maxZIndexInfo = popsUtils.getPopsMaxZIndex();

              var maxZIndex = maxZIndexInfo["zIndex"];
              var maxZIndexElement = maxZIndexInfo["animElement"];

              var currentDragZIndex = getComputedStyle(this.drag).zIndex;
              if (currentDragZIndex < maxZIndex) {
                this.drag.style.zIndex = maxZIndex;
                this.drag.parentElement.style.zIndex =
                  this.drag.parentElement?.getAttribute("class") === "pops-anim"
                    ? maxZIndex
                    : this.drag.parentElement.style.zIndex;
                maxZIndexElement.style.zIndex = currentDragZIndex;
                maxZIndexElement.parentElement.style.zIndex =
                  maxZIndexElement.parentElement?.getAttribute("class") ===
                  "pops-anim"
                    ? currentDragZIndex
                    : maxZIndexElement.parentElement.style.zIndex;
                if (maxZIndexElement.querySelector(".pops[type-value]")) {
                  maxZIndexElement.querySelector(
                    ".pops[type-value]"
                  ).style.zIndex = currentDragZIndex;
                }
                if (this.drag.querySelector(".pops[type-value]")) {
                  this.drag.querySelector(".pops[type-value]").style.zIndex =
                    maxZIndex;
                }
              }
            },
            moveDrag: function (event) {
              this.setTransform();
              var event = event || window.event;
              var iTop = event.clientY - this._y;
              var iLeft = event.clientX - this._x;
              if (this.lock) return;
              if (this.limit) {
                if (iTop < this.maxContainer.offsetTop + this.transformTop)
                  iTop = this.maxContainer.offsetTop + this.transformTop;
                if (iLeft < this.maxContainer.offsetLeft + this.transformLeft) {
                  iLeft = this.maxContainer.offsetLeft + this.transformLeft;
                }
                if (iTop > this.maxTop) {
                  iTop = this.maxTop;
                }
                if (iLeft > this.maxLeft) {
                  iLeft = this.maxLeft;
                }
              }
              this.lockY || (this.drag.style.top = iTop - 6 + "px");
              this.lockX || (this.drag.style.left = iLeft - 6 + "px");
              var iWinWidth = this.onlyViewport
                ? document.documentElement.clientWidth + this.transformLeft
                : this.maxContainer.offsetLeft + this.maxContainer.offsetWidth;
              var iWinHeight = this.onlyViewport
                ? document.documentElement.clientHeight + this.transformTop
                : this.maxContainer.offsetTop + this.maxContainer.offsetHeight;
              if (this.drag.offsetLeft < 0 + this.transformLeft) {
                this.drag.style.left = 0 + this.transformLeft + "px";
              } else if (
                this.drag.offsetLeft >
                iWinWidth - this.drag.offsetWidth
              ) {
                this.drag.style.left = iWinWidth - this.drag.offsetWidth + "px";
              }
              if (this.drag.offsetTop < 0 + this.transformTop) {
                this.drag.style.top = 0 + this.transformTop + "px";
              } else if (
                this.drag.offsetTop >
                iWinHeight - this.drag.offsetHeight
              ) {
                this.drag.style.top =
                  iWinHeight - this.drag.offsetHeight + "px";
              }
              event.preventDefault && event.preventDefault();
              this.onMove();
            },
            stopDrag: function () {
              if (this.changeTransition == false) {
                this.changeTransition = false;
                this.drag.style.transitionDuration = "";
              }
              this.removeHandler(document, "mousemove", this._moveDrag);
              this.removeHandler(document, "mouseup", this._stopDrag);

              this.handle.releaseCapture && this.handle.releaseCapture();

              this.onStop();
            },
            resize: function () {
              /* 监听窗口变化，重置参数 */
              var that = this;
              window.addEventListener("resize", () => {
                that.maxTop =
                  Math.max(
                    that.maxContainer.clientHeight,
                    that.maxContainer.scrollHeight
                  ) -
                  that.drag.offsetHeight +
                  that.maxContainer.offsetTop +
                  that.transformTop;
                that.maxLeft =
                  Math.max(
                    that.maxContainer.clientWidth,
                    that.maxContainer.scrollWidth
                  ) -
                  that.drag.offsetWidth +
                  that.maxContainer.offsetLeft +
                  that.transformLeft;
              });
            },
            setTransform: function () {
              /* 动态更新transform有关参数 */
              if (getComputedStyle(this.drag).transform !== "none") {
                this.transformLeft = parseInt(
                  getComputedStyle(this.drag)
                    .transform.match(/\((.+)\)/)[1]
                    .split(",")[4]
                );
                this.transformTop = parseInt(
                  getComputedStyle(this.drag)
                    .transform.match(/\((.+)\)/)[1]
                    .split(",")[5]
                );
                this.transformLeft = Math.abs(this.transformLeft) + 3;
                this.transformTop = Math.abs(this.transformTop) + 3;
              } else {
                this.transformTop = 0;
                this.transformLeft = 0;
              }
              this.maxTop =
                Math.max(
                  this.maxContainer.clientHeight,
                  this.maxContainer.scrollHeight
                ) -
                this.drag.offsetHeight +
                this.maxContainer.offsetTop +
                this.transformTop;
              this.maxLeft =
                Math.max(
                  this.maxContainer.clientWidth,
                  this.maxContainer.scrollWidth
                ) -
                this.drag.offsetWidth +
                this.maxContainer.offsetLeft +
                this.transformLeft;
            },
            //参数设置
            setOptions: function (options) {
              var thisDragCssZIndex = window.getComputedStyle(
                this.drag,
                null
              ).zIndex;
              thisDragCssZIndex = isNaN(thisDragCssZIndex)
                ? 0
                : thisDragCssZIndex;
              this.options = {
                handle: this.drag, //事件对象
                top: 0, //默认顶部位置
                bottom: 0, //默认底部位置，不支持非body的限定容器
                left: 0, //默认左边位置
                right: 0, //默认右边位置，不支持非body的限定容器
                position: "absolute", //默认浮动方式
                onlyViewport: true, //仅在视窗内拖动
                limit: true, //锁定范围
                lock: false, //锁定位置
                lockX: false, //锁定水平位置
                lockY: false, //锁定垂直位置
                maxContainer: document.documentElement || document.body, //指定限制容器
                onStart: function () {}, //开始时回调函数
                onMove: function () {}, //拖拽时回调函数
                onStop: function () {}, //停止时回调函数
                zIndex:
                  this.drag.style.zIndex || thisDragCssZIndex || 999999999, //z轴高度
                alone: false, //是否孤立的，为了防止拖动目标覆盖，默认会和其他拖动层的zIndex相互增加高度
              };
              for (var p in options) this.options[p] = options[p];
            },
            //获取id
            $: function (id) {
              return typeof id === "string" ? document.getElementById(id) : id;
            },
            //添加绑定事件
            addHandler: function (oElement, sEventType, fnHandler) {
              return oElement.addEventListener
                ? oElement.addEventListener(sEventType, fnHandler, false)
                : oElement.attachEvent("on" + sEventType, fnHandler);
            },
            //删除绑定事件
            removeHandler: function (oElement, sEventType, fnHandler) {
              return oElement.removeEventListener
                ? oElement.removeEventListener(sEventType, fnHandler, false)
                : oElement.detachEvent("on" + sEventType, fnHandler);
            },
            //绑定事件到对象
            bind: function (object, fnHandler) {
              return function () {
                return fnHandler.apply(object, arguments);
              };
            },
          };
          return Drag;
        })();
      new MyDrag(moveElement, options);
    },
    /**
     * 判断数据数组中是否存在，返回下标
     * @param {any} target
     * @param {any[]} sourceList
     * @returns {?number}
     */
    findArrayIndex(target, sourceList) {
      let result = -1;
      for (let index = 0; index < sourceList.length; index++) {
        let item = sourceList[index];
        if (item === target) {
          result = index;
          break;
        }
      }
      return result;
    },
    /**
     * 检测元素是否在其它元素下面，在的话获取z-index，不在就null
     * @param {HTMLElement} element
     * @returns
     */
    upperElements(element) {
      let top = element.getBoundingClientRect().top,
        left = element.getBoundingClientRect().left,
        width = element.getBoundingClientRect().width,
        height = element.getBoundingClientRect().height,
        elemTL = document.elementFromPoint(left, top),
        elemTR = document.elementFromPoint(left + width - 1, top),
        elemBL = document.elementFromPoint(left, top + height - 1),
        elemBR = document.elementFromPoint(left + width - 1, top + height - 1),
        elemCENTER = document.elementFromPoint(
          parseInt(left + width / 2),
          parseInt(top + height / 2)
        ),
        elemsUpper = [];
      if (
        elemTL != element &&
        elemTL != null &&
        popsUtils.findArrayIndex("pops-mask", elemTL.classList) === -1 &&
        popsUtils.findArrayIndex("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemTL);
      }
      if (
        elemTR != element &&
        popsUtils.findArrayIndex(elemTR, elemsUpper) === -1 &&
        elemTR != null &&
        popsUtils.findArrayIndex("pops-mask", elemTR.classList) === -1 &&
        popsUtils.findArrayIndex("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemTR);
      }

      if (
        elemBL != element &&
        popsUtils.findArrayIndex(elemBL, elemsUpper) === -1 &&
        elemBL != null &&
        popsUtils.findArrayIndex("pops-mask", elemBL.classList) === -1 &&
        popsUtils.findArrayIndex("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemBL);
      }

      if (
        elemBR != element &&
        popsUtils.findArrayIndex(elemBR, elemsUpper) === -1 &&
        elemBR != null &&
        popsUtils.findArrayIndex("pops-mask", elemBR.classList) === -1 &&
        popsUtils.findArrayIndex("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemBR);
      }

      if (
        elemCENTER != element &&
        popsUtils.findArrayIndex(elemCENTER, elemsUpper) === -1 &&
        elemCENTER != null &&
        popsUtils.findArrayIndex("pops-mask", elemCENTER.classList) === -1 &&
        popsUtils.findArrayIndex("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemCENTER);
      }
      return elemsUpper;
    },
    /**
     * 排序数组
     * @param {Function} getBeforeValueFun
     * @param {Function} getAfterValueFun
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
     * 禁止滚动
     * @returns {
     *  allowScroll: Function
     * }
     */
    forbiddenScroll() {
      /**
       * 禁止滚动
       */
      function forbiddenScrollListener(event) {
        event.preventDefault();
      }
      if (!pops.config.forbiddenScroll.cssElement) {
        let forbiddenScrollCSSElement = document.createElement("style");
        forbiddenScrollCSSElement.setAttribute("type", "text/css");
        forbiddenScrollCSSElement.setAttribute("data-use", "forbiddenscroll");
        forbiddenScrollCSSElement.innerHTML = `
        html,body {
          overflow: hidden !important;
        }
        `;
        document.head.appendChild(forbiddenScrollCSSElement);
        pops.config.forbiddenScroll.cssElement = forbiddenScrollCSSElement;
      }
      if (!pops.config.forbiddenScroll.event) {
        pops.config.forbiddenScroll.event = forbiddenScrollListener;
        document.addEventListener(
          "touchmove",
          pops.config.forbiddenScroll.event,
          false
        );
      }

      /**
       * 允许滚动
       */
      function allowScroll() {
        pops.config.forbiddenScroll.cssElement.remove();
        document.removeEventListener(
          "touchmove",
          pops.config.forbiddenScroll.event
        );
        pops.config.forbiddenScroll.cssElement = null;
        pops.config.forbiddenScroll.event = null;
      }
      return {
        allowScroll,
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
    },
    /**
     * 判断是否是window，例如window、self、globalThis
     * @param {any} target
     * @returns {boolean}
     */
    isWin(target) {
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
    jQuery: {
      /**
       * 绑定事件
       * @param {HTMLElement|string|NodeList|Array|Window} element 需要绑定的元素|元素数组|window
       * @param {string|[...string]} eventType 需要监听的事件
       * @param {string|undefined} selector 子元素选择器
       * @param {(event: Event)=>{}|undefined} callback 绑定事件触发的回调函数
       * @param {boolean} [capture=false] 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
       * @param {boolean} [once=false] 表示事件是否只触发一次。默认为false
       * @param {boolean} [passive=false] 表示事件监听器是否不会调用preventDefault()。默认为false
       */
      on(
        element,
        eventType,
        selector,
        callback,
        capture = false,
        once = false,
        passive = false
      ) {
        if (typeof element === "string") {
          element = document.querySelectorAll(element);
        }
        if (element == null) {
          return;
        }
        let elementList = [];
        if (element instanceof NodeList || Array.isArray(element)) {
          elementList = [...element];
        } else {
          elementList = [element];
        }
        let eventTypeList = [];
        if (Array.isArray(eventType)) {
          eventTypeList = eventType;
        } else if (typeof eventType === "string") {
          eventTypeList = eventType.split(" ");
        }
        if (typeof selector === "function") {
          /* 这是为没有selector的情况 */
          callback = selector;
          selector = null;
        }
        elementList.forEach((elementItem) => {
          let ownCallBack = function (event) {
            if (selector) {
              let target = event.target;
              let totalParent = popsUtils.isWin(elementItem)
                ? document.documentElement
                : elementItem;
              if (target.matches(selector)) {
                /* 当前目标可以被selector所匹配到 */
                callback.call(target, event);
                return;
              } else if (
                target.closest(selector) &&
                totalParent.contains(target.closest(selector))
              ) {
                /* 在上层与主元素之间寻找可以被selector所匹配到的 */
                let closestElement = target.closest(selector);
                /* event的target值不能直接修改 */
                Object.defineProperty(event, "target", {
                  get: function () {
                    return closestElement;
                  },
                });
                callback.call(closestElement, event);
                return;
              }
            } else {
              callback.call(event.target, event);
            }
          };
          eventTypeList.forEach((_eventType_) => {
            elementItem.addEventListener(
              _eventType_,
              ownCallBack,
              capture,
              once,
              passive
            );
          });

          if (callback && callback.delegate) {
            elementItem.setAttribute("data-delegate", selector);
          }
          if (popsUtils.isWin(elementItem)) {
            let events = elementItem["DOMUtilsGlobalEvents"] || {};
            events[eventType] = events[eventType] || [];
            events[eventType].push({
              selector: selector,
              callback: ownCallBack,
              originCallBack: callback,
            });
            elementItem["DOMUtilsGlobalEvents"] = events;
          } else {
            let events = elementItem.events || {};
            events[eventType] = events[eventType] || [];
            events[eventType].push({
              selector: selector,
              callback: ownCallBack,
              originCallBack: callback,
            });
            elementItem.events = events;
          }
        });
      },
      /**
       * 取消绑定事件
       * @param {HTMLElement|string|NodeList|Array|Window} element 需要取消绑定的元素|元素数组
       * @param {string|[...string]} eventType 需要取消监听的事件
       * @param {string|undefined} selector 子元素选择器
       * @param {Function|undefined} callback 通过DOMUtils.on绑定的事件函数
       * @param {boolean} [useCapture=false] 表示事件是否在捕获阶段处理，它是一个可选参数，默认为false，表示在冒泡阶段处理事件。
       * 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
       */
      off(element, eventType, selector, callback, useCapture = false) {
        if (typeof element === "string") {
          element = document.querySelectorAll(element);
        }
        if (element == null) {
          return;
        }
        let elementList = [];
        if (element instanceof NodeList || Array.isArray(element)) {
          elementList = [...element];
        } else {
          elementList = [element];
        }
        let eventTypeList = [];
        if (!eventType) {
          for (let type in events) {
            eventTypeList = [...eventTypeList, type];
          }
        } else if (Array.isArray(eventType)) {
          eventTypeList = eventType;
        } else if (typeof eventType === "string") {
          eventTypeList = eventType.split(" ");
        }
        if (typeof selector === "function") {
          /* 这是为没有selector的情况 */
          callback = selector;
          selector = null;
        }
        elementList.forEach((elementItem) => {
          let events = {};
          if (popsUtils.isWin(elementItem)) {
            events = elementItem["DOMUtilsGlobalEvents"] || {};
          } else {
            events = elementItem.events || {};
          }
          eventTypeList.forEach((_eventType_) => {
            let handlers = events[eventType] || [];
            for (let i = 0; i < handlers.length; i++) {
              if (
                (!selector || handlers[i].selector === selector) &&
                (!callback ||
                  handlers[i].callback === callback ||
                  handlers[i].originCallBack === callback)
              ) {
                elementItem.removeEventListener(
                  _eventType_,
                  handlers[i].callback,
                  useCapture
                );
                handlers.splice(i--, 1);
              }
            }
            if (handlers.length === 0) {
              delete events[eventType];
            }
          });
          if (popsUtils.isWin(elementItem)) {
            elementItem["DOMUtilsGlobalEvents"] = events;
          } else {
            elementItem.events = events;
          }
        });
      },
      /**
       * 主动触发事件
       * @param {HTMLElement|string|NodeList|Array|Window} element 需要触发的元素|元素数组|window
       * @param {string|[...string]} eventType 需要触发的事件
       * @param {object|undefined} details 赋予触发的Event的额外属性
       * @param {boolean} [notDispatchEvent=false] 不使用dispatchEvent来触发事件
       */
      trigger(element, eventType, details, notDispatchEvent = false) {
        if (typeof element === "string") {
          element = document.querySelector(element);
        }
        if (element == null) {
          return;
        }
        let elementList = [];
        if (element instanceof NodeList || Array.isArray(element)) {
          elementList = [...element];
        } else {
          elementList = [element];
        }
        let eventTypeList = [];
        if (!eventType) {
          for (let type in events) {
            eventTypeList = [...eventTypeList, type];
          }
        } else if (Array.isArray(eventType)) {
          eventTypeList = eventType;
        } else if (typeof eventType === "string") {
          eventTypeList = eventType.split(" ");
        }

        elementList.forEach((elementItem) => {
          let events = {};
          if (popsUtils.isWin(elementItem)) {
            events = elementItem["DOMUtilsGlobalEvents"] || {};
          } else {
            events = elementItem.events || {};
          }
          eventTypeList.forEach((_eventType_) => {
            let event = new Event(_eventType_);
            if (details) {
              Object.assign(event, details);
            }
            if (_eventType_ in events && notDispatchEvent) {
              events[_eventType_].forEach((eventsItem) => {
                eventsItem.callback(event);
              });
            } else {
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
        var rect = element.getBoundingClientRect();
        var win = element.ownerDocument.defaultView;
        return {
          top: rect.top + win.pageYOffset,
          left: rect.left + win.pageXOffset,
        };
      },
      /**
       * 获取元素的宽度
       * @param {HTMLElement} element - 要获取宽度的元素
       * @returns {Number} - 元素的宽度，单位为像素
       */
      width(element) {
        if (element.nodeType === 9) {
          /* 文档节点 */
          return Math.max(
            element.body.scrollWidth,
            element.documentElement.scrollWidth,
            element.body.offsetWidth,
            element.documentElement.offsetWidth,
            element.documentElement.clientWidth
          );
        }
        let handleElement = this.showElement(element);
        let view = element.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window;
        }
        let styles = view.getComputedStyle(element);
        let elementPaddingLeft = parseFloat(styles.paddingLeft);
        let elementPaddingRight = parseFloat(styles.paddingRight);
        if (isNaN(elementPaddingLeft)) {
          elementPaddingLeft = 0;
        }
        if (isNaN(elementPaddingRight)) {
          elementPaddingRight = 0;
        }
        let elementWidth =
          element.clientWidth - elementPaddingLeft - elementPaddingRight;
        handleElement.recovery();
        return elementWidth;
      },
      /**
       * 获取元素的高度
       * @param {HTMLElement} element - 要获取高度的元素
       * @returns {Number} - 元素的高度，单位为像素
       */
      height(element) {
        if (element.nodeType === 9) {
          /* 文档节点 */
          return Math.max(
            element.body.scrollHeight,
            element.documentElement.scrollHeight,
            element.body.offsetHeight,
            element.documentElement.offsetHeight,
            element.documentElement.clientHeight
          );
        }
        let handleElement = CommonUtils.showElement(element);
        let view = element.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window;
        }
        let styles = view.getComputedStyle(element);
        let elementPaddingTop = parseFloat(styles.paddingTop);
        let elementPaddingBottom = parseFloat(styles.paddingBottom);
        if (isNaN(elementPaddingTop)) {
          elementPaddingTop = 0;
        }
        if (isNaN(elementPaddingBottom)) {
          elementPaddingBottom = 0;
        }
        let elementHeight =
          element.clientHeight - elementPaddingTop - elementPaddingBottom;
        handleElement.recovery();
        return elementHeight;
      },
      /**
       * 获取元素的外部宽度（包括边框和外边距）
       * @param {HTMLElement} element - 要获取外部宽度的元素
       * @returns {Number} - 元素的外部宽度，单位为像素
       */
      outerWidth(element) {
        let handleElement = this.showElement(element);
        let style = getComputedStyle(element, null);
        let elementMarginLeft = parseFloat(style.marginLeft);
        let elementMarginRight = parseFloat(style.marginRight);
        if (isNaN(elementMarginLeft)) {
          elementMarginLeft = 0;
        }
        if (isNaN(elementMarginRight)) {
          elementMarginRight = 0;
        }
        handleElement.recovery();
        return element.offsetWidth + elementMarginLeft + elementMarginRight;
      },
      /**
       * 获取元素的外部高度（包括边框和外边距）
       * @param {HTMLElement} element - 要获取外部高度的元素
       * @returns {Number} - 元素的外部高度，单位为像素
       */
      outerHeight(element) {
        let handleElement = this.showElement(element);
        let style = getComputedStyle(element, null);
        let elementMarginTop = parseFloat(style.marginTop);
        let elementMarginBottom = parseFloat(style.marginBottom);
        if (isNaN(elementMarginTop)) {
          elementMarginTop = 0;
        }
        if (isNaN(elementMarginBottom)) {
          elementMarginBottom = 0;
        }
        handleElement.recovery();
        return element.offsetHeight + elementMarginTop + elementMarginBottom;
      },
      /**
       * 用于显示元素并获取它的高度宽度等其它属性
       * @param {HTMLElement} element
       * @returns {{recovery: Function}} - 恢复
       */
      showElement: function (element) {
        let oldCSS_display = element.style.display;
        let oldCSS_visibility = element.style.visibility;
        let oldCSS_position = element.style.position;
        element.style.display = "block";
        element.style.visibility = "hidden";
        element.style.position = "absolute";
        return {
          recovery() {
            element.style.display = oldCSS_display;
            element.style.visibility = oldCSS_visibility;
            element.style.position = oldCSS_position;
          },
        };
      },
    },
  };

  let pops = {};
  /**
   * 配置
   */
  pops.config = {
    /**
     * 当前版本
     */
    version: "2023.12.15",
    css: `@charset "utf-8";
    .pops{background-color:#fff;border-radius:4px;border:1px solid #ebeef5;font-size:18px;box-shadow:0 0 12px rgba(0,0,0,.12);box-sizing:border-box;overflow:hidden;transition:all .35s}
    .pops *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
    .pops-anim{position:fixed;top:0;right:0;bottom:0;left:0;margin:0;width:100%;height:100%;}
    .pops[position=top_left]{position:fixed;top:0;left:0;}
    .pops[position=top]{position:fixed;top:0;left:50%;transform:translateX(-50%);}
    .pops[position=top_right]{position:fixed;top:0;right:0;}
    .pops[position=center_left]{position:fixed;top:50%;left:0;transform:translateY(-50%);}
    .pops[position=center]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}
    .pops[position=center_right]{position:fixed;top:50%;right:0;transform:translateY(-50%);}
    .pops[position=bottom_left]{position:fixed;bottom:0;left:0;}
    .pops[position=bottom]{position:fixed;bottom:0;left:50%;transform:translate(-50%,0);}
    .pops[position=bottom_right]{position:fixed;right:0;bottom:0;}
    .pops button{white-space:nowrap;float:right;display:inline-block;margin:0 5px;padding:6px 12px;outline:0;border:1px solid transparent;}
    .pops button{border-radius:4px;background-color:transparent;box-shadow:none;font-weight:400;font-size:14px;line-height:1.45;cursor:pointer;transition:all .3s ease-in-out;}
    .pops button{display:flex;align-items: center;height:32px;line-height:1;box-sizing:border-box;outline:none;user-select:none;border: 1px solid #dcdfe6;}
    .pops button.pops-button-large{height:40px;padding:12px 19px;font-size:14px;border-radius:4px;}
    .pops button.pops-button-small{height:24px;padding:5px 11px;font-size:12px;border-radius:4px;}
    .pops button:disabled{cursor:not-allowed;}
    .pops button[data-rightIcon="true"]{flex-direction: row-reverse;}
    .pops button[data-rightIcon="true"] span{margin-right:6px;}
    .pops button[data-rightIcon="false"] span{margin-left:6px;}
    .pops button[data-icon=""] span{margin-left:unset;}
    
    .pops i.pops-bottom-icon[is-loading="true"]{animation: rotating 2s linear infinite;}
    .pops i.pops-bottom-icon{height:1em;width:1em;line-height:1em;display:inline-flex;justify-content:center;align-items:center;position:relative;fill:currentColor;color:inherit;font-size:inherit}

    .pops button[type=default]{border-color:#dcdfe6;background-color:#fff;color:#333;}
    .pops button[type=default]:active{color:#409eff;border-color:#409eff;background-color:#ecf5ff;outline:none;}
    .pops button[type=default]:hover,.pops button[type=default]:focus{color:#409eff;border-color:#c6e2ff;background-color:#ecf5ff;outline:none;}
    .pops button[type=default]:focus-visible{outline:2px solid #a0cfff;outline-offset:1px;}
    .pops button[type=default]:disabled{color:#a8abb2 !important;background-color:#ffffff !important;border-color:#e4e7ed !important;}
    

    .pops button[type=primary]{border-color:#409eff;background-color:#409eff;color:#ffffff;}
    .pops button[type=primary]:active{color:#ffffff;border-color:#337ecc;background-color:#337ecc;outline:none;}
    .pops button[type=primary]:hover,.pops button[type=primary]:focus{color:#ffffff;border-color:#79bbff;background-color:#79bbff;outline:none;}
    .pops button[type=primary]:focus-visible{outline:2px solid #a0cfff;outline-offset:1px;}
    .pops button[type=primary]:disabled{color:#ffffff !important;background-color:#a0cfff !important;border-color:#a0cfff !important;}

    .pops button[type=success]{border-color:#4cae4c;background-color:#5cb85c;color:#fff;}
    .pops button[type=success]:active{color:#ffffff;border-color:#529b2e;background-color:#529b2e;;outline:none;}
    .pops button[type=success]:hover,.pops button[type=success]:focus{color:#ffffff;border-color:#95d475;background-color:#95d475;;outline:none;}
    .pops button[type=success]:focus-visible{outline:2px solid #b3e19d;outline-offset:1px;}
    .pops button[type=success]:disabled{color:#ffffff !important;background-color:#b3e19d !important;border-color:#b3e19d !important;}

    .pops button[type=info]{border-color:#909399;background-color:#909399;color:#fff;}
    .pops button[type=info]:active{color:#ffffff;border-color:#73767a;background-color:#73767a;;outline:none;}
    .pops button[type=info]:hover,.pops button[type=info]:focus{color:#ffffff;border-color:#b1b3b8;background-color:#b1b3b8;;outline:none;}
    .pops button[type=info]:focus-visible{outline:2px solid #c8c9cc;outline-offset:1px;}
    .pops button[type=info]:disabled{color:#ffffff !important;background-color:#c8c9cc !important;border-color:#c8c9cc !important;}

    .pops button[type=warning]{border-color:#e6a23c;background-color:#e6a23c;color:#fff;}
    .pops button[type=warning]:active{color:#ffffff;border-color:#b88230;background-color:#b88230;;outline:none;}
    .pops button[type=warning]:hover,.pops button[type=warning]:focus{color:#ffffff;border-color:#eebe77;background-color:#eebe77;;outline:none;}
    .pops button[type=warning]:focus-visible{outline:2px solid #f3d19e;outline-offset:1px;}
    .pops button[type=warning]:disabled{color:#ffffff !important;background-color:#f3d19e !important;border-color:#f3d19e !important;}

    .pops button[type=danger]{border-color:#f56c6c;background-color:#f56c6c;color:#fff;}
    .pops button[type=danger]:active{color:#ffffff;border-color:#c45656;background-color:#c45656;;outline:none;}
    .pops button[type=danger]:hover,.pops button[type=danger]:focus{color:#ffffff;border-color:#f89898;background-color:#f89898;;outline:none;}
    .pops button[type=danger]:focus-visible{outline:2px solid #fab6b6;outline-offset:1px;}
    .pops button[type=danger]:disabled{color:#ffffff !important;background-color:#fab6b6 !important;border-color:#fab6b6 !important;}

    .pops button[type=xiaomi-primary]{border-color:#ff5c00;background-color:#ff5c00;color:#fff;}
    .pops button[type=xiaomi-primary]:active{color:#ffffff;border-color:#da4f00;background-color:#da4f00;;outline:none;}
    .pops button[type=xiaomi-primary]:hover,.pops button[type=xiaomi-primary]:focus{color:#ffffff;border-color:#ff7e29;background-color:#ff7e29;;outline:none;}
    .pops button[type=xiaomi-primary]:focus-visible{outline:2px solid #fab6b6;outline-offset:1px;}
    .pops button[type=xiaomi-primary]:disabled{color:#ffffff !important;background-color:#fad5b6 !important;border-color:#fad5b6 !important;}
    
    .pops ::-webkit-scrollbar,
    .pops ::-moz-scrollbar{
      width:6px;
      height:0;
    }
    .pops ::-webkit-scrollbar-track,
    .pops ::-moz-scrollbar-track{
      width:0;
    }
    .pops ::-webkit-scrollbar-thumb:hover,
    .pops ::-moz-scrollbar-thumb:hover{
      background: #b2b2b2;
    }
    .pops ::-webkit-scrollbar-thumb,
    .pops ::-moz-scrollbar-thumb{
      min-height: 28px;
      border-radius: 2em;
      background: #cccccc;
      background-clip: padding-box;
    }
    .pops-mask{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;border:0;border-radius:0;background-color:rgba(0,0,0,.4);box-shadow:none;transition:none;}
    .pops[type-value=alert] .pops-alert-title{width:100%;height:55px;border-bottom:1px solid #e5e5e5;}
    .pops[type-value=alert] .pops-alert-title p[pops]{width:100%;overflow:hidden;color:#333;text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;font-size:18px;line-height:55px;}
    .pops[type-value=alert] .pops-alert-content p[pops]{padding:5px 10px;color:#333;text-indent:15px;font-size:14px;}
    .pops[type-value=alert] .pops-alert-content{position:absolute;top:55px;bottom:55px;overflow:auto;width:100%;height:auto;word-break:break-word;}
    .pops[type-value=alert] .pops-alert-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:55px;border-top:1px solid #e5e5e5;text-align:right;line-height:55px;align-items:center;}
    .pops[type-value=confirm] .pops-confirm-title{width:100%;height:55px;border-bottom:1px solid #e5e5e5;}
    .pops[type-value=confirm] .pops-confirm-title p[pops]{width:100%;overflow:hidden;color:#333;text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;font-size:18px;line-height:55px;}
    .pops[type-value=confirm] .pops-confirm-content p[pops]{padding:5px 10px;color:#333;text-indent:15px;font-size:14px;}
    .pops[type-value=confirm] .pops-confirm-content{position:absolute;top:55px;bottom:55px;overflow:auto;width:100%;height:auto;word-break:break-word;}
    .pops[type-value=confirm] .pops-confirm-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:55px;border-top:1px solid #e5e5e5;text-align:right;line-height:55px;align-items:center;}
    .pops[type-value=prompt] .pops-prompt-title{width:100%;height:55px;border-bottom:1px solid #e5e5e5;}
    .pops[type-value=prompt] .pops-prompt-title p[pops]{width:100%;overflow:hidden;color:#333;text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;font-size:18px;line-height:55px;}
    .pops[type-value=prompt] .pops-prompt-content p[pops]{padding:5px 10px;color:#333;text-indent:15px;font-size:14px;}
    .pops[type-value=prompt] .pops-prompt-content{position:absolute;top:55px;bottom:55px;overflow:auto;width:100%;height:auto;word-break:break-word;}
    .pops[type-value=prompt] .pops-prompt-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:55px;border-top:1px solid #e5e5e5;text-align:right;line-height:55px;align-items:center;}
    .pops[type-value=prompt] input[pops]{padding:5px 10px;font-size:18px;}
    .pops[type-value=prompt] textarea[pops]{padding:5px 10px;font-size:14px;resize:none;}
    .pops[type-value=prompt] input[pops],.pops[type-value=prompt] textarea[pops]{position:absolute;top:0;left:0;width:100%;height:100%;outline:0;border:0;color:#333;}
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
      background-color: #fff;
      box-shadow: 0 0 5px rgb(0 0 0 / 50%);
      vertical-align: middle;
      font-size: 18px;
      transition: all .35s;
      transform: translate(-50%,-50%);
      user-select: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
    }
    .pops[type-value=loading]:before{float:left;display:inline-block;width:2em;height:2em;border:.3em solid rgba(100,149,237,.1);border-top:.3em solid #6495ed;border-radius:50%;content:" ";vertical-align:middle;font-size:inherit;animation:pops-anim-wait-rotate 1.2s linear infinite;}
    .pops[type-value=loading] .pops-loading-content{position:static;top:0;bottom:0;float:left;overflow:hidden;width:auto;font-size:inherit;line-height:2em;}
    .pops[type-value=loading] .pops-loading-content p[pops]{display:inline-block;padding:5px 10px;padding-left:10px;color:#333;text-indent:15px;font-size:inherit;}
    .pops[type-value=iframe] .pops-iframe-title{width:calc(100% - 0px);height:55px;border-bottom:1px solid #e5e5e5;}
    .pops[type-value=iframe] .pops-iframe-title p[pops]{width:100%;overflow:hidden;color:#333;text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;font-size:18px;line-height:55px;}
    .pops[type-value=iframe] .pops-iframe-content p[pops]{padding:5px 10px;color:#333;text-indent:15px;font-size:14px;}
    .pops[type-value=iframe] .pops-iframe-content{position:absolute;top:55px;bottom:0;overflow:auto;width:100%;height:auto;word-break:break-word;}
    .pops-loading{position:absolute;top:40px;right:0;bottom:0;left:0;z-index:5;background-color:#fff;}
    .pops-loading:before{position:absolute;top:50%;left:50%;z-index:3;display:block;margin:-20px 0 0 -20px;padding:20px;border:4px solid #ddd;border-radius:50%;content:"";border-top-color:transparent;animation:pops-anim-wait-rotate 1.2s linear infinite;}
    .pops[type-value=iframe].pops[type-module=min]{top:unset!important;bottom:0;max-width:200px;max-height:53px;transform:none;}
    .pops[type-value=iframe].pops[type-module=min] .pops-header-control[type=min]{display:none;}
    .pops[type-value=iframe].pops[type-module=max]{top:unset!important;left:unset!important;width:100%!important;height:100%!important;transform:none;}
    .pops[type-value=iframe] iframe[pops]{position:absolute;top:0;top:calc(0% + 2px);left:0;left:calc(0% + 2px);width:100%;width:calc(100% - 4px);height:100%;height:calc(100% - 4px);border:0;}
    .pops-iframe-content-global-loading{position:absolute;top:0;left:0;z-index:999999;width:0;height:4px;background:linear-gradient(to right,#4995dd,#fff,rgb(202 224 246));animation:iframeLoadingChange 2s forwards;}
    .pops[type-value=drawer]{position: absolute;box-sizing: border-box;display: flex;flex-direction: column;box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16);overflow: hidden;transition: all .3s;}

    .pops[type-value=drawer][direction=top]{width: 100%;left: 0;right: 0;top: 0;}
    .pops[type-value=drawer][direction=bottom]{width: 100%;left: 0;right: 0;bottom: 0;}
    .pops[type-value=drawer][direction=left]{height: 100%;top: 0;bottom: 0;left: 0;}
    .pops[type-value=drawer][direction=right]{height: 100%;top: 0;bottom: 0;right: 0;}

    .pops[type-value=folder] .pops-folder-title{width:100%;height:55px;border-bottom:1px solid #e5e5e5;}
    .pops[type-value=folder] .pops-folder-title p[pops]{width:100%;overflow:hidden;color:#333;text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;font-size:18px;line-height:55px;}
    .pops[type-value=folder] .pops-folder-content p[pops]{padding:5px 10px;color:#333;text-indent:15px;font-size:14px;}
    .pops[type-value=folder] .pops-folder-content{position:absolute;top:55px;bottom:55px;overflow:auto;width:100%;height:auto;word-break:break-word;}
    .pops[type-value=folder] .pops-folder-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:55px;border-top:1px solid #e5e5e5;text-align:right;line-height:55px;align-items:center;}
    
    .pops[type-value=panel] .pops-panel-title{width:100%;height:55px;border-bottom:1px solid #e5e5e5;}
    .pops[type-value=panel] .pops-panel-title p[pops]{width:100%;overflow:hidden;color:#333;text-indent:15px;text-overflow:ellipsis;white-space:nowrap;font-weight:500;font-size:18px;line-height:55px;}
    .pops[type-value=panel] .pops-panel-content{position:absolute;top:55px;bottom:55px;overflow:hidden;width:100%;height:auto;word-break:break-word;}
    .pops[type-value=panel] .pops-panel-btn{position:absolute;bottom:0;display:flex;padding:10px 10px 10px 10px;width:100%;height:55px;border-top:1px solid #e5e5e5;text-align:right;line-height:55px;align-items:center;}
    
    .pops-folder-list .cursor-p{cursor:pointer}
    .pops-folder-list a{background:0 0;text-decoration:none;-webkit-tap-highlight-color:transparent;color:#05082c}
    table.pops-folder-list-table__body,table.pops-folder-list-table__header{width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;padding:0 20px}
    table.pops-folder-list-table__body,table.pops-folder-list-table__header{height:100%;background:0 0;overflow:hidden;display:-webkit-box;display:-ms-flexbox;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal}
    table.pops-folder-list-table__body{height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
    .pops-folder-list table tr{line-height:1}
    .pops-folder-list-table__header-row{height:50px;line-height:50px;color:#818999;text-align:left;font-size:12px}
    .pops-folder-list-table__body-row{height:50px;line-height:50px;color:#03081a;font-size:12px}
    .pops-folder-list-table__body-row:hover{background:#f5f6f7}
    .pops-folder-list table th{border:0;border-bottom:1px solid #f7f8fa}
    .pops-folder-list table td{border:0;border-bottom:1px solid #f7f8fa;position:relative}
    .pops-folder-list .list-name-text{display:inline-block;padding-left:12px;line-height:40px;max-width:176px}
    .pops-folder-list-file-name > div{display:flex;align-items:center;}
    
    .pops-mobile-folder-list-file-name{display:flex;align-items:center}
    .pops-mobile-folder-list-file-name>div{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center}
    .pops-mobile-folder-list-file-name img.pops-folder-list-file-icon{width:45px;height:45px}
    .pops-mobile-folder-list-file-name a.pops-folder-list-file-name-title-text{padding-left:unset;max-width:250px;overflow-x:hidden;font-size:16px;font-weight:400}

    /* 修改滚动 */
    .pops-folder-content{overflow: hidden !important}
    .pops-folder-content .pops-folder-list{height: 100%}
    .pops-folder-content .pops-folder-list-table__body-div{height: 100%;padding-bottom: 85px}
    .pops-mobile-folder-content .pops-folder-list-table__body-div{height: 100%;padding-bottom: 40px}
    .pops-folder-content table.pops-folder-list-table__body{overflow: auto}
    .pops-mobile-folder-content .pops-folder-content .pops-folder-list-table__header-div{display: none}

    .pops-folder-list-file-name-title-text:hover{text-decoration:none;color:#06a7ff}
    .pops-folder-list .text-ellip{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
    .pops-folder-list .content{color:#818999;position:relative;width:100%;text-align:left}
    .pops-folder-list .inline-block-v-middle{display:inline-block;vertical-align:middle}
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
      height: 17px;
      flex-wrap: wrap;
    }
    .pops-folder-list .pops-folder-file-list-breadcrumb {
      padding: 0 20px;
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
      height: 35px;
    }
    .pops-folder-list .pops-folder-file-list-breadcrumb-allFiles{font-size:12px;color:#333;line-height:20px;font-weight:700;display:inline-block;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}
    .pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:last-child a{color:#999}
    .pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child a{font-size:14px;color:#12161a}
    .pops-folder-list .pops-folder-file-list-breadcrumb .iconArrow{width:16px;height:16px}
    .pops-folder-list .iconArrow{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTOLi4uLi4t7e3uPj49/f397e3t3d3f///97e3vDw8N3d3d7e3t3d3d3d3ejo6N/f397e3t7e3t3d3d/f393d3d3d3RK+NoEAAAAWdFJOUwAnM4YPU/iQA+UIeMDaHhY41i7zX7UebpjFAAAAUElEQVQI15XOORaAIAwE0LATXHCd+x9VfCiksXCq+UUWou8oZ1vXHrt7YVBiYkW4gdMKYFIC4CSATWCNHWPuM6HuHkr1x3N0ZrBu/9gl0b9c3+kF7C7hS1YAAAAASUVORK5CYII=) 55% 50%/6px 9px no-repeat;
    }

    /* tooltip的github的className */
    .pops-tip.github-tooltip{border-radius:6px;padding:6px 8px}
    .pops-tip.github-tooltip,.pops-tip.github-tooltip .pops-tip-arrow::after{background:#24292f !important;color:#fff}
    .pops-tip.github-tooltip .pops-tip-arrow::after{width:8px !important;height:8px !important}

    /* ↓panel的CSS↓ */
    aside.pops-panel-aside{overflow:auto;box-sizing:border-box;flex-shrink:0;width:200px;height:100%;background:#fafafa;border-right:1px solid #fafafa}
    .pops-panel-content{display:flex;flex-direction:row;flex:1;flex-basis:auto;box-sizing:border-box;min-width:0;bottom:0!important}
    section.pops-panel-container{width:100%;padding:10px;overflow:hidden}
    section.pops-panel-container .pops-panel-container-header-ul{border-bottom: 1px solid #e5e5e5;}
    section.pops-panel-container .pops-panel-container-header-ul li{display: flex;justify-content: flex-start !important;font-size: 20px;}
    section.pops-panel-container > ul:last-child{overflow: auto;height: calc(100% - 45px);}
    aside.pops-panel-aside ul li{margin:6px 8px;border-radius:4px;font-size:16px;padding:6px 10px;cursor:default;display:flex;align-items:center;justify-content:flex-start}
    aside.pops-panel-aside .pops-is-visited,aside.pops-panel-aside ul li:hover{color:#409eff;background:rgba(64,158,255 ,.1)}
    section.pops-panel-container>ul li{display:flex;justify-content:space-between;align-items:center;margin:10px 20px}
    section.pops-panel-container li.pops-panel-forms-container-item{display:block;margin-top:20px}
    section.pops-panel-container .pops-panel-forms-container-item ul{border-radius:6px;background:#fafafa;margin:10px}
    section.pops-panel-container .pops-panel-forms-container-item ul li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 10px;
      padding: 10px 0;
      border-bottom: 1px solid #e5e5e5;
      font-size: 16px;
      text-align: left;
    }
    section.pops-panel-container .pops-panel-forms-container-item ul li:last-child{border:0}
    section.pops-panel-container .pops-panel-forms-container-item>div{margin:10px;margin-left:20px;font-size:14px;text-align:left;}
    
    /* 兼容移动端CSS */
    .pops[type-value="panel"].pops-panel-is-mobile{
      width: 92vw;
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
      margin: 5px 5px!important;
      padding: 5px 5px !important;
    }
    .pops[type-value="panel"].pops-panel-is-mobile section.pops-panel-container>ul > li div:nth-child(2){
      width: 50%;
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
    section.pops-panel-container .pops-panel-switch {
      display: inline-flex;
      flex-direction: row-reverse;
      align-items: center;
      position: relative;
      font-size: 14px;
      line-height: 20px;
      height: 32px;
      vertical-align: middle
    }
    section.pops-panel-container .pops-panel-switch input.pops-panel-switch__input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0
    }
    section.pops-panel-container .pops-panel-switch span.pops-panel-switch__core {
      display: inline-flex;
      position: relative;
      align-items: center;
      min-width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: 0;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color .3s,background-color .3s
    }
    section.pops-panel-container .pops-panel-switch .pops-panel-switch__action {
      position: absolute;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #dcdfe6
    }
    section.pops-panel-container .pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core{border-color:#409eff;background-color:#409eff}
    section.pops-panel-container .pops-panel-switch.pops-panel-switch-is-checked .pops-panel-switch__action{left:calc(100% - 17px);color:#409eff}
    /* switch的CSS */
    
    /* slider的CSS */
    section.pops-panel-container .pops-panel-slider{overflow:hidden;height:25px;line-height:25px;display:flex;align-items:center}
    section.pops-panel-container .pops-panel-slider input[type=range]{background:#e4e7ed;outline:0;-webkit-appearance:none;height:6px;appearance:none}
    section.pops-panel-container .pops-panel-slider input[type=range]::-webkit-slider-thumb,
    section.pops-panel-container .pops-panel-slider input[type=range]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #409eff;
      background-color: #fff;
      box-shadow: 0 0 2px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2);
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
    }
    section.pops-panel-container .pops-panel-slider input[type=range]::-webkit-slider-thumb,
    section.pops-panel-container .pops-panel-slider input[type=range]::-moz-range-progress{
      border-image: linear-gradient(#409eff,#409eff) 0 fill/9 25 9 0/0 0 0 100vw;
    }
    /* slider的CSS */
    
    /* input的CSS */
    section.pops-panel-container .pops-panel-input{display:flex;align-items:center;border:1px solid #dcdfe6;border-radius:4px;background-color:#ffffff}
    section.pops-panel-container .pops-panel-input:hover{box-shadow:0 0 0 1px #c0c4cc inset}
    section.pops-panel-container .pops-panel-input:has(input:focus){outline:0;border:1px solid #409eff;border-radius:4px;box-shadow:none}
    section.pops-panel-container .pops-panel-input input {
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
      vertical-align: middle;
      -webkit-appearance: none;
      appearance: none;
      background-color: transparent;
      border: 0;
      padding: 8px 8px;
      font-size: 14px;
      text-align: start;
      width: 100%
    }    
    section.pops-panel-container .pops-panel-input span.pops-panel-input__suffix {
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
      width: 18px;
      height: 18px
    }    
    section.pops-panel-container .pops-panel-input span.pops-panel-input__suffix-inner{pointer-events:all;display:inline-flex;align-items:center;justify-content:center}
    section.pops-panel-container .pops-panel-input .pops-panel-icon{cursor:pointer}
    section.pops-panel-container .pops-panel-input .pops-panel-icon{height:inherit;line-height:inherit;display:flex;justify-content:center;align-items:center;transition:all .3s}
    section.pops-panel-container .pops-panel-input .pops-panel-icon svg{height:1em;width:1em}
    /* input的CSS */

    /* textarea的CSS */
    section.pops-panel-container .pops-panel-textarea textarea {
      position: relative;
      display: inline-block;
      width: 100%;
      vertical-align: bottom;
      font-size: 14px;
      position: relative;
      display: block;
      resize: vertical;
      padding: 5px 11px;
      line-height: 1.5;
      box-sizing: border-box;
      width: 100%;
      font-size: inherit;
      font-family: inherit;
      background-color: #ffffff;
      background-image: none;
      -webkit-appearance: none;
      appearance: none;
      box-shadow: 0 0 0 1px #dcdfe6 inset;
      border-radius: 4px;
      transition: box-shadow .2s cubic-bezier(.645, .045, .355, 1);
      border: none;
    }
    section.pops-panel-container .pops-panel-textarea textarea:hover{box-shadow:0 0 0 1px #c0c4cc inset}
    section.pops-panel-container .pops-panel-textarea textarea:focus{outline:0;box-shadow:0 0 0 1px #409eff inset}    
    /* textarea的CSS */

    /* select的CSS */
    section.pops-panel-container .pops-panel-select select {
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      min-width: 200px;
      border: 1px solid #b8b8b8;
      border-radius: 5px;
      text-align: center;
      outline: 0;
      background: #ffffff;
      box-shadow: none;
    }    
    section.pops-panel-container .pops-panel-select select:hover{box-shadow:0 0 0 1px #c0c4cc inset}
    section.pops-panel-container .pops-panel-select select:focus{border:1px solid #409eff;box-shadow:none}
    /* select的CSS */

    /* ↑panel的CSS↑ */


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
    .pops[type-value] .pops-alert-title,
    .pops[type-value] .pops-confirm-title,
    .pops[type-value] .pops-drawer-title,
    .pops[type-value] .pops-iframe-title,
    .pops[type-value] .pops-prompt-title,
    .pops[type-value] .pops-folder-title,
    .pops[type-value] .pops-panel-title{display: flex;align-items: center;justify-content: space-between;}
    .pops-header-controls button.pops-header-control[type=close],
    .pops-header-controls button.pops-header-control[type=max],
    .pops-header-controls button.pops-header-control[type=mise],
    .pops-header-controls button.pops-header-control[type=min]{position:relative;float:right;margin:0 2px;outline:0!important;border:0;border-color:#888;background-color:transparent;color:#888;cursor:pointer;transition:all .3s ease-in-out;}
    button.pops-header-control i{color:#909399;font-size:inherit;height:1em;width:1em;line-height:1em;display:inline-flex;justify-content:center;align-items:center;position:relative;fill:currentColor}
    button.pops-header-control svg{height:1em;width:1em}
    button.pops-header-control{right:15px;padding:0;border:none;outline:0;background:0 0;cursor:pointer;position:unset;line-height:1.15;font-size:16px}
    button.pops-header-control i:hover{color:#409eff}
    .pops-header-controls[data-margin] button.pops-header-control{margin:0 6px}
    .pops-tip{position:absolute;padding:13px;max-width:400px;max-height:300px;border-radius:2px;background-color:#fff;box-shadow:0 1.5px 4px rgba(0,0,0,.24),0 1.5px 6px rgba(0,0,0,.12);color:#4e4e4e;font-size:14px;}
    .pops-tip .pops-tip-arrow{position:absolute;top:100%;left:50%;overflow:hidden;width:100%;height:12.5px;transform:translateX(-50%);}
    .pops-tip .pops-tip-arrow::after{position:absolute;top:0;left:50%;width:12px;height:12px;background:#fff;box-shadow:0 1px 7px rgba(0,0,0,.24),0 1px 7px rgba(0,0,0,.12);content:"";transform:translateX(-50%) translateY(-50%) rotate(45deg);}
    .pops-tip .pops-tip-arrow[data-position=bottom]{position:absolute;top:100%;left:50%;overflow:hidden;width:100%;height:12.5px;transform:translateX(-50%);}
    .pops-tip .pops-tip-arrow[data-position=bottom]:after{position:absolute;top:0;left:50%;width:12px;height:12px;background:#fff;box-shadow:0 1px 7px rgba(0,0,0,.24),0 1px 7px rgba(0,0,0,.12);content:"";transform:translateX(-50%) translateY(-50%) rotate(45deg);}
    .pops-tip .pops-tip-arrow[data-position=left]{top:50%;left:-12.5px;width:12.5px;height:50px;transform:translateY(-50%);}
    .pops-tip .pops-tip-arrow[data-position=left]:after{position:absolute;top:50%;left:100%;content:"";}
    .pops-tip .pops-tip-arrow[data-position=right]{top:50%;right:-12.5px;left:auto;width:12.5px;height:50px;transform:translateY(-50%);}
    .pops-tip .pops-tip-arrow[data-position=right]:after{position:absolute;top:50%;left:0;content:"";}
    .pops-tip .pops-tip-arrow[data-position=top]{top:-12.5px;left:50%;transform:translateX(-50%);}
    .pops-tip .pops-tip-arrow[data-position=top]:after{position:absolute;top:100%;left:50%;content:"";}
    .pops-tip[data-motion]{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}
    .pops-drawer-content{height: 100%;}
    .pops[type-value="drawer"] .pops-drawer-btn{padding-top: 10px;padding-bottom: 10px;}
    .pops[type-value] .pops-header-controls{display: flex;}
    @-webkit-keyframes pops-motion-fadeInTop{0%{opacity:0;-webkit-transform:translateY(-30px);transform:translateY(-30px);}
    100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
    }
    @keyframes pops-motion-fadeInTop{0%{opacity:0;transform:translateY(-30px);-ms-transform:translateY(-30px);}
    100%{opacity:1;transform:translateX(0);-ms-transform:translateX(0);}
    }
    .pops-tip[data-motion=fadeInTop]{-webkit-animation-name:pops-motion-fadeInTop;animation-name:pops-motion-fadeInTop;animation-timing-function:cubic-bezier(.49,.49,.13,1.3);}
    @-webkit-keyframes pops-motion-fadeOutTop{0%{opacity:10;-webkit-transform:translateY(0);transform:translateY(0);}
    100%{opacity:0;-webkit-transform:translateY(-30px);transform:translateY(-30px);}
    }
    @keyframes pops-motion-fadeOutTop{0%{opacity:1;transform:translateY(0);-ms-transform:translateY(0);}
    100%{opacity:0;transform:translateY(-30px);-ms-transform:translateY(-30px);}
    }
    .pops-tip[data-motion=fadeOutTop]{-webkit-animation-name:pops-motion-fadeOutTop;animation-name:pops-motion-fadeOutTop;animation-timing-function:cubic-bezier(.32,.37,.06,.87);}
    @-webkit-keyframes pops-motion-fadeInBottom{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);}
    100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}
    }
    @keyframes pops-motion-fadeInBottom{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);-ms-transform:translateY(20px);}
    100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
    }
    .pops-tip[data-motion=fadeInBottom]{-webkit-animation-name:pops-motion-fadeInBottom;animation-name:pops-motion-fadeInBottom;}
    @-webkit-keyframes pops-motion-fadeOutBottom{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}
    100%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);}
    }
    @keyframes pops-motion-fadeOutBottom{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
    100%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);-ms-transform:translateY(20px);}
    }
    .pops-tip[data-motion=fadeOutBottom]{-webkit-animation-name:pops-motion-fadeOutBottom;animation-name:pops-motion-fadeOutBottom;}
    @-webkit-keyframes pops-motion-fadeInLeft{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px);}
    100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
    }
    @keyframes pops-motion-fadeInLeft{0%{opacity:0;-webkit-transform:translateX(-30px);transform:translateX(-30px);-ms-transform:translateX(-30px);}
    100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
    }
    .pops-tip[data-motion=fadeInLeft]{-webkit-animation-name:pops-motion-fadeInLeft;animation-name:pops-motion-fadeInLeft;}
    @-webkit-keyframes pops-motion-fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
    100%{opacity:0;-webkit-transform:translateX(-30px);transform:translateX(-30px);}
    }
    @keyframes pops-motion-fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
    100%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px);-ms-transform:translateX(-20px);}
    }
    .pops-tip[data-motion=fadeOutLeft]{-webkit-animation-name:pops-motion-fadeOutLeft;animation-name:pops-motion-fadeOutLeft;}
    @-webkit-keyframes pops-motion-fadeInRight{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);}
    100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
    }
    @keyframes pops-motion-fadeInRight{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);-ms-transform:translateX(20px);}
    100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
    }
    .pops-tip[data-motion=fadeInRight]{-webkit-animation-name:pops-motion-fadeInRight;animation-name:pops-motion-fadeInRight;}
    @-webkit-keyframes pops-motion-fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
    100%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);}
    }
    @keyframes pops-motion-fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
    100%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);-ms-transform:translateX(20px);}
    }
    .pops-tip[data-motion=fadeOutRight]{-webkit-animation-name:pops-motion-fadeOutRight;animation-name:pops-motion-fadeOutRight;}
    `,
    /**
     * icon图标的svg代码
     */
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
      </svg>

      `,
      max: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>
      </svg>
      `,
      close: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
      </svg>
      `,
      edit: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>
        <path
          fill="currentColor"
          d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>
      </svg>
      `,
      share: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>
      </svg>
      `,
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
      </svg>

      `,
      upload: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>
      </svg>
      `,
      loading: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>
      </svg>
      `,
      next: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
      `,
      prev: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
      `,
      eleme: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>
      </svg>
      `,
      elemePlus: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"
          fill="currentColor"></path>
      </svg>
      `,
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
      </svg>
      `,
      cpu: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>
        <path
          fill="currentColor"
          d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>
      </svg>
      `,
      videoPlay: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>
      </svg>
      `,
      videoPause: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>
      </svg>
      `,
      headset: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>
      </svg>
      `,
      monitor: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>
      </svg>
      `,
      documentCopy: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>
      </svg>
      `,
      picture: `
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>
        <path
          fill="currentColor"
          d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>
      </svg>
      `,
      circleClose: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>
        <path
          fill="currentColor"
          d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>
      </svg>
      `,
      view: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>
      </svg>
      `,
      hide: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>
        <path
          fill="currentColor"
          d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>
      </svg>
      `,
      keyboard: `
      <svg viewBox="0 0 1123 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
        <path
          d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
        <path
          d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
      </svg>
      `,
    },
    /**
     * 创建到页面中的CSS元素
     */
    popsCSSElement: null,
    animation: [],
    /**
     * 是否已初始化
     */
    init: false,
    /**
     * 存储已创建的元素
     */
    layer: {
      /**
       * 存储已创建的pops.alert
       * @type { {
       * guid: string,
       * animElement: HTMLDivElement,
       * popsElement: HTMLDivElement,
       * maskElement: ?HTMLDivElement
       * }[] }
       */
      alert: [],
      /**
       * 存储已创建的pops.confirm
       * @type { {
       * guid: string,
       * animElement: HTMLDivElement,
       * popsElement: HTMLDivElement,
       * maskElement: ?HTMLDivElement
       * }[] }
       */
      confirm: [],
      /**
       * 存储已创建的pops.prompt
       * @type { {
       * guid: string,
       * animElement: HTMLDivElement,
       * popsElement: HTMLDivElement,
       * maskElement: ?HTMLDivElement
       * }[] }
       */
      prompt: [],
      /**
       * 存储已创建的pops.loading
       * @type { {
       * guid: string,
       * animElement: HTMLDivElement,
       * popsElement: HTMLDivElement,
       * maskElement: ?HTMLDivElement
       * }[] }
       */
      loading: [],
      /**
       * 存储已创建的pops.iframe
       * @type { {
       * guid: string,
       * animElement: HTMLDivElement,
       * popsElement: HTMLDivElement,
       * maskElement: ?HTMLDivElement
       * }[] }
       */
      iframe: [],
      /**
       * 存储已创建的pops.tooltip
       * @type { {
       * guid: string,
       * animElement: HTMLDivElement,
       * popsElement: HTMLDivElement,
       * maskElement: ?HTMLDivElement
       * }[] }
       */
      tooltip: [],
      /**
       * 存储已创建的pops.drawer
       * @type { {
       * guid: string,
       * animElement: HTMLDivElement,
       * popsElement: HTMLDivElement,
       * maskElement: ?HTMLDivElement
       * }[] }
       */
      drawer: [],
      /**
       * 存储已创建的pops.folder
       * @type { {
       * guid: string,
       * animElement: HTMLDivElement,
       * popsElement: HTMLDivElement,
       * maskElement: ?HTMLDivElement
       * }[] }
       */
      folder: [],
      /**
       * 存储已创建的pops.panel
       * @type { {
       * guid: string,
       * animElement: HTMLDivElement,
       * popsElement: HTMLDivElement,
       * maskElement: ?HTMLDivElement
       * }[] }
       */
      panel: [],
    },
    /**
     * 禁止滚动的配置
     */
    forbiddenScroll: {
      cssElement: null,
      event: null,
    },
  };

  /**
   * 释放原有的pops控制权
   * @example
   * let pops = window.pops.noConflict()
   */
  pops.noConflict = function () {
    if (window.pops) {
      delete window.pops;
    }
    if (AnotherPops) {
      window.pops = AnotherPops;
    }
    return pops;
  };

  /**
   * 初始化CSS、动画
   */
  pops.init = function () {
    let cssResourceNode = document.createElement("style");
    cssResourceNode.setAttribute("type", "text/css");
    cssResourceNode.setAttribute("data-insert-from", "pops");
    cssResourceNode.setAttribute("data-version", this.config.version);
    cssResourceNode.innerHTML = this.config.css;
    if (document.head) {
      document.head.append(cssResourceNode);
    } else if (document.documentElement) {
      if (document.documentElement.childNodes.length === 0) {
        document.documentElement.appendChild(cssResourceNode);
      } else {
        document.documentElement.insertBefore(
          cssResourceNode,
          document.documentElement.childNodes[
            document.documentElement.childNodes.length - 1
          ]
        );
      }
    } else {
      throw new Error("未找到可以插入到页面中的元素");
    }
    this.config.popsCSSElement = cssResourceNode;
    this.config.init = true;
    this.config.animation = popsUtils.getKeyFrames(
      this.config.popsCSSElement.sheet
    );
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
     * 处理初始化
     */
    handleInit() {
      if (!pops.config.init) {
        pops.init();
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
    handleMask(details = {}) {
      let result = {
        maskElement: popsUtils.parseTextToDOM(details.maskHTML),
      };
      /**
       * 点击其它区域的事件
       * @param {Event} event
       * @returns
       */
      let clickEvent = function (event) {
        event?.preventDefault();
        event?.stopPropagation();
        event?.stopImmediatePropagation();
        let targetLayer = pops.config.layer[details.type];
        function originalRun() {
          if (details.config.mask.clickEvent.toClose) {
            /* 关闭 */
            popsUtils.close(
              details.type,
              targetLayer,
              details.guid,
              details.config,
              details.animElement
            );
          } else if (details.config.mask.clickEvent.toHide) {
            /* 隐藏 */
            popsUtils.hide(
              details.type,
              targetLayer,
              details.guid,
              details.config,
              details.animElement,
              result.maskElement
            );
          }
        }
        if (details.config.mask.clickCallBack) {
          details.config.mask.clickCallBack(originalRun);
        } else {
          originalRun();
        }

        return false;
      };
      if (
        details.config.mask.clickEvent.toClose ||
        details.config.mask.clickEvent.toHide
      ) {
        /* 如果有动画层，在动画层上监听点击事件 */
        details.animElement.addEventListener("click", function (event) {
          if (
            event.target?.localName?.toLowerCase() === "div" &&
            event.target.className &&
            event.target.className === "pops-anim" &&
            event.target.hasAttribute("anim")
          ) {
            return clickEvent(event);
          }
        });
        /* 在遮罩层监听点击事件 */
        result.maskElement.addEventListener("click", clickEvent);
      }
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
      };
    },
    /**
     * 获取事件配置
     * @param {string} guid
     * @param {"alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer"|"folder"|"panel"} mode 当前弹窗类型
     * @param {HTMLDivElement} animElement 动画层
     * @param {HTMLDivElement} popsElement 主元素
     * @param {HTMLDivElement} maskElement 遮罩层
     * @param {object} config 当前配置
     */
    handleEventDetails(
      guid,
      mode,
      animElement,
      popsElement,
      maskElement,
      config
    ) {
      return {
        element: animElement,
        animElement: animElement,
        popsElement: popsElement,
        maskElement: maskElement,
        type: "",
        function: mode,
        guid: guid,
        close() {
          popsUtils.close(
            mode,
            pops.config.layer[mode],
            guid,
            config,
            animElement
          );
        },
        hide() {
          popsUtils.hide(
            mode,
            pops.config.layer[mode],
            guid,
            config,
            animElement,
            maskElement
          );
        },
        show() {
          popsUtils.show(
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
     * animElement: HTMLElement,
     * popsElement: HTMLElement,
     * maskElement: HTMLElement,
     * close: Function,
     * hide: Function,
     * show: Function,
     * } }
     */
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
     * @param {(event)=>{}} callback 点击回调
     */
    handleClickEvent(btnElement, type, event, callback) {
      btnElement?.addEventListener("click", function () {
        let _event_ = {
          type: type,
        };
        _event_ = Object.assign(event, _event_);
        callback(_event_);
      });
    },
    /**
     * 全局监听键盘事件
     * @param {string|number} keyName 键名|键值
     * @param {"keyup"|"keypress"|"keydown"} eventName 事件名，默认keypress
     * @param {?string[]} otherKeyList 组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
     * @param {Function} callback 回调函数
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
        } else if (typeof keyName === "number" && keyName === _keyValue) {
          callback && callback(event);
        }
      };
      globalThis.addEventListener("keydown", keyboardEvent);
      return {
        removeKeyboardEvent() {
          globalThis.removeEventListener("keydown", keyboardEvent);
        },
      };
    },
    /**
     * 处理prompt的点击事件
     * @param {HTMLInputElement} inputElement 输入框
     * @param {HTMLElement} btnElement 按钮元素
     * @param {"ok"|"close"} type 触发事件类型
     * @param {object} event 事件配置，由popsHandler.handleEventDetails创建的
     * @param {(event)=>{}} callback 点击回调
     */
    handlePromptClickEvent(inputElement, btnElement, type, event, callback) {
      btnElement?.addEventListener("click", function () {
        let _event_ = {
          type: type,
          text: inputElement.value,
        };
        _event_ = Object.assign(event, _event_);
        callback(_event_);
      });
    },
    /**
     * 处理config.only
     * @param {"alert"|"confirm"|"prompt"|"loading"|"tooltip"|"iframe"|"drawer"|"folder"} type 当前弹窗类型
     * @param {object} config 配置
     * @returns {object}
     */
    handleOnly(type, config) {
      if (config.only) {
        if (type === "loading" || type === "tooltip") {
          popsUtils.configRemove([pops.config.layer[type]], "", true);
        } else {
          popsUtils.configRemove(
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
        config.zIndex = popsUtils.getPopsMaxZIndex(config.zIndex)["zIndex"] * 2;
      }
      return config;
    },
    /**
     * 处理把已创建的元素保存到内部环境中
     * @param {"alert"|"confirm"|"prompt"|"loading"|"tooltip"|"iframe"|"drawer"|"folder"|"panel"} type 当前弹窗类型
     * @param {object} value
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
     */
    getAnimHTML(guid, type, config, html = "") {
      let popsAnimStyle = "";
      let popsStyle = "";
      let popsPosition = config.position || "";
      if (config.zIndex != null) {
        popsAnimStyle += `z-index: ${config.zIndex};`;
        popsStyle += `z-index: ${config.zIndex};`;
      }
      if (config.width != null) {
        popsStyle += `width: ${config.width};`;
      }
      if (config.height != null) {
        popsStyle += `height: ${config.height};`;
      }
      return `<div 
                  class="pops-anim"
                  anim="${config.animation || ""}"
                  style="${popsAnimStyle};"
                  data-guid="${guid}">
                <div
                    class="pops ${config.class || ""}"
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
      if (type !== "iframe" && !config.btn?.close?.enable) {
        return "";
      }
      let resultHTML = "";
      let btnStyle = "";
      let closeHTML = "";
      if (type === "iframe" && config.topRightButton?.trim() !== "") {
        /* iframe的 */
        let topRightButtonHTML = "";
        config.topRightButton.split("|").forEach((item) => {
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
      } else {
        if (config.btn?.close?.enable) {
          closeHTML = `
          <div class="pops-header-controls">
            <button class="pops-header-control" type="close">
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
     * @param {PopsConfirmDetails|PopsAlertDetails|PopsPromptDetails|PopsDrawerDetails} config
     * @returns {string}
     */
    getBottomBtnHTML(type, config) {
      if (!config.btn) {
        return "";
      }
      if (
        !(
          config.btn.ok.enable ||
          config.btn.cancel.enable ||
          config.btn.other.enable
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
        if (config.btn.ok.icon !== "") {
          okIconHTML = `
          <i class="pops-bottom-icon" is-loading="${
            config.btn.ok.iconIsLoading
          }">
            ${
              config.btn.ok.icon in pops.config.iconSVG
                ? pops.config.iconSVG[config.btn.ok.icon]
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
      if (config.btn?.cancel?.enable) {
        /* 处理取消按钮的尺寸问题 */
        let cancelButtonSizeClassName = "";
        if (config.btn.cancel.size === "large") {
          cancelButtonSizeClassName = "pops-button-" + config.btn.cancel.size;
        } else if (config.btn.cancel.size === "small") {
          cancelButtonSizeClassName = "pops-button-" + config.btn.cancel.size;
        }
        let cancelIconHTML = "";
        if (config.btn.cancel.icon !== "") {
          cancelIconHTML = `
          <i class="pops-bottom-icon" is-loading="${
            config.btn.cancel.iconIsLoading
          }">
          ${
            config.btn.cancel.icon in pops.config.iconSVG
              ? pops.config.iconSVG[config.btn.cancel.icon]
              : config.btn.cancel.icon
          }
          </i>`;
        }
        cancelHTML = `
        <button
                class="pops-${type}-btn-cancel ${cancelButtonSizeClassName}"
                type="${config.btn.cancel.type}"
                data-icon="${config.btn.cancel.icon}"
                data-rightIcon="${config.btn.cancel.rightIcon}"
        >
          ${cancelIconHTML}
          <span>${config.btn.cancel.text}</span>
        </button>`;
      }
      if (config.btn?.other?.enable) {
        /* 处理其它按钮的尺寸问题 */
        let otherButtonSizeClassName = "";
        if (config.btn.other.size === "large") {
          otherButtonSizeClassName = "pops-button-" + config.btn.other.size;
        } else if (config.btn.other.size === "small") {
          otherButtonSizeClassName = "pops-button-" + config.btn.other.size;
        }
        let otherIconHTML = "";
        if (config.btn.other.icon !== "") {
          otherIconHTML = `
          <i class="pops-bottom-icon" is-loading="${
            config.btn.other.iconIsLoading
          }">
          ${
            config.btn.other.icon in pops.config.iconSVG
              ? pops.config.iconSVG[config.btn.other.icon]
              : config.btn.other.icon
          }
          </i>`;
        }
        ohterHTML = `
        <button
                class="pops-${type}-btn-other ${otherButtonSizeClassName}"
                type="${config.btn.other.type}"
                data-icon="${config.btn.other.icon}"
                data-rightIcon="${config.btn.other.rightIcon}"
        >
          ${otherIconHTML}
          <span>${config.btn.other.text}</span>
        </button>`;
      }
      if (config.btn.merge) {
        resultHTML = `
        <div class="pops-${type}-btn" style="${btnStyle}">
          ${ohterHTML}
          <div 
              class="pops-${type}-btn-merge"
              style="display: flex;
                    flex-direction: ${
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
    getHeaderStyle(type, config) {
      return {
        headerStyle: config?.title?.html ? config?.title?.style || "" : "",
        headerPStyle: config?.title?.html ? "" : config?.title?.style || "",
      };
    },
    /**
     * 获取内容style
     * @param {"alert"|"confirm"|"prompt"|"drawer"} type
     * @param {PopsAlertDetails|PopsConfirmDetails|PopsPromptDetails|PopsDrawerDetails} config
     */
    getContentStyle(type, config) {
      return {
        contentStyle: config?.content?.html ? config?.content?.style || "" : "",
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
      return popsUtils.parseTextToDOM(html);
    },
  };

  /**
   * @typedef {object} PopsAlertDetails
   * @property {{
   *  text: string,
   *  position: "left"|"right"|"top"|"bottom"|"center",
   *  html: boolean,
   *  style: string,
   * }} title 标题配置
   * @property {{
   *  text: string,
   *  html: boolean,
   *  style: string,
   * }} content 内容配置
   * @property {{
   *  position: "center"|"flex-start"|"flex-end"|"space-between"|"space-around"|"space-evenly",
   *  ok: PopsButtonDetails,
   *  close: PopsHeaderCloseButtonDetails,
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {boolean} [only=false] 是否是唯一的弹窗，默认false
   * @property {string} [widths="350px"] 弹窗宽度，默认350px
   * @property {string} [heights="200px"] 弹窗高度，默认200px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation="pops-anim-fadein-zoom"] 弹窗动画，默认pops-anim-fadein-zoom
   * @property {number} [zIndex=10000] 弹窗的显示层级，默认10000
   * @property { PopsMaskDetails } mask 遮罩层，默认关闭
   * @property {boolean} [drag=false] 是否可以按钮标题栏进行拖拽，默认false
   * @property {boolean} [forbiddenScroll=false] 禁用页面滚动
   */

  /**
   * 普通信息框
   * @param { PopsAlertDetails } details 配置
   * @returns {{
   * guid: string,
   * element: Element,
   * animElement: HTMLElement,
   * popsElement: Element,
   * maskElement: Element,
   * close: Function,
   * hide: Function,
   * show: Function,
   * }}
   */
  pops.alert = function (details) {
    let that = this;
    PopsHandler.handleInit();
    /**
     * @type {PopsAlertDetails}
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
          size: "",
          enable: true,
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
        clickCallBack: null,
      },
      drag: false,
      forbiddenScroll: false,
    };
    config = popsUtils.assignJSON(config, details);
    let guid = popsUtils.getRandomGUID();
    const PopsType = "alert";
    config = PopsHandler.handleOnly(PopsType, config);

    let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
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
      ${bottomBtnHTML}`
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
      PopsType,
      animElement,
      popsElement,
      maskElement,
      config
    );
    /* 为顶部右边的关闭按钮添加点击事件 */
    PopsHandler.handleClickEvent(
      btnCloseElement,
      "close",
      eventDetails,
      config.btn.close.callback
    );
    /* 为底部ok按钮添加点击事件 */
    PopsHandler.handleClickEvent(
      btnOkElement,
      "ok",
      eventDetails,
      config.btn.ok.callback
    );

    /* 创建到页面中 */
    popsUtils.appendChild(document.body, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    /* 保存 */
    PopsHandler.handlePush(PopsType, {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
    });
    /* 拖拽 */
    if (config.drag) {
      popsUtils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(popsElement).position,
        top: getComputedStyle(popsElement).top,
        left: getComputedStyle(popsElement).left,
        limit: true,
      });
    }

    return PopsHandler.handleResultDetails(eventDetails);
  };

  /**
   * @typedef {object} PopsConfirmDetails
   * @property {{
   *  text: string,
   *  position: "left"|"right"|"top"|"bottom"|"center",
   *  html: boolean,
   *  style: string,
   * }} title 标题配置
   * @property {{
   *  text: string,
   *  html: boolean,
   *  style: string,
   * }} content 内容配置
   * @property {{
   *  merge: boolean,
   *  mergeReverse: boolean,
   *  reverse: boolean,
   *  position: "center"|"flex-start"|"flex-end"|"space-between"|"space-around"|"space-evenly",
   *  ok: PopsButtonDetails,
   *  cancel: PopsButtonDetails,
   *  other: PopsButtonDetails,
   *  close: PopsHeaderCloseButtonDetails,
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {boolean} [only=false] 是否是唯一的弹窗，默认false
   * @property {string} [width="350px"] 弹窗宽度，默认350px
   * @property {string} [height="200px"] 弹窗高度，默认200px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation="pops-anim-fadein-zoom"] 弹窗动画，默认pops-anim-fadein-zoom
   * @property {number} [zIndex=false] 弹窗的显示层级，默认10000
   * @property { PopsMaskDetails } mask 遮罩层，默认关闭
   * @property {boolean} [drag=false] 是否可以按钮标题栏进行拖拽，默认false
   * @property {boolean} [forbiddenScroll=false] 禁用页面滚动，默认false
   */
  /**
   * 询问框
   * @param {PopsConfirmDetails} details
   * @returns {{
   * guid: string,
   * element: HTMLElement,
   * animElement: HTMLElement,
   * popsElement: HTMLElement,
   * maskElement: HTMLElement,
   * close: Function,
   * hide: Function,
   * show: Function,
   * }}
   */
  pops.confirm = function (details) {
    let that = this;
    PopsHandler.handleInit();
    /**
     * @type {PopsConfirmDetails}
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
          size: "",
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
          size: "",
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
          size: "",
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
        clickCallBack: null,
      },
      drag: false,
      forbiddenScroll: false,
    };
    config = popsUtils.assignJSON(config, details);
    let guid = popsUtils.getRandomGUID();
    const PopsType = "confirm";
    config = PopsHandler.handleOnly(PopsType, config);
    let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
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
    `
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
      PopsType,
      animElement,
      popsElement,
      maskElement,
      config
    );
    PopsHandler.handleClickEvent(
      btnCloseElement,
      "close",
      eventDetails,
      config.btn.close.callback
    );
    PopsHandler.handleClickEvent(
      btnOkElement,
      "ok",
      eventDetails,
      config.btn.ok.callback
    );
    PopsHandler.handleClickEvent(
      btnCancelElement,
      "cancel",
      eventDetails,
      config.btn.cancel.callback
    );
    PopsHandler.handleClickEvent(
      btnOtherElement,
      "other",
      eventDetails,
      config.btn.other.callback
    );

    /* 创建到页面中 */
    popsUtils.appendChild(document.body, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    PopsHandler.handlePush(PopsType, {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
    });
    /* 拖拽 */
    if (config.drag) {
      popsUtils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(animElement).position,
        top: getComputedStyle(animElement).top,
        left: getComputedStyle(animElement).left,
        limit: true,
      });
    }
    return PopsHandler.handleResultDetails(eventDetails);
  };

  /**
   * @typedef {object} PopsPromptDetails
   * @property {{
   *  text: string,
   *  position: "left"|"right"|"top"|"bottom"|"center",
   *  html: boolean,
   *  style: string,
   * }} title 标题配置
   * @property {{
   *  text: string,
   *  password: boolean,
   *  row: boolean,
   *  focus: boolean,
   *  placeholder: string,
   *  style: string,
   * }} content 内容配置
   * @property {{
   *  merge: boolean,
   *  mergeReverse: boolean,
   *  reverse: boolean,
   *  position: "center"|"flex-start"|"flex-end"|"space-between"|"space-around"|"space-evenly",
   *  ok: PopsPromptBtmDetails,
   *  cancel: PopsPromptBtmDetails,
   *  other: PopsPromptBtmDetails,
   *  close: PopsHeaderCloseButtonDetails
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {boolean} [only=false] 是否是唯一的弹窗，默认false
   * @property {string} [width="350px"] 弹窗宽度，默认350px
   * @property {string} [[height="200px"] 弹窗高度，默认200px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation="pops-anim-fadein-zoom"] 弹窗动画
   * @property {number} [zIndex=10000] 弹窗的显示层级，默认10000
   * @property { PopsMaskDetails } mask 遮罩层，默认关闭
   * @property {boolean} [drag=false] 是否可以按钮标题栏进行拖拽，默认false
   * @property {boolean} [forbiddenScroll=false] 禁用页面滚动，默认false
   */
  /**
   * 输入框
   * @param {PopsPromptDetails} details
   * @returns {{
   * guid: string,
   * element: Element,
   * animElement: HTMLElement,
   * popsElement: Element,
   * maskElement: Element,
   * close: Function,
   * hide: Function,
   * show: Function,
   * }}
   */
  pops.prompt = function (details) {
    let that = this;
    PopsHandler.handleInit();
    /**
     * @type {PopsPromptDetails}
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
          size: "",
          icon: "",
          rightIcon: false,
          iconIsLoading: false,
          text: "确定",
          type: "success",
          callback(event) {
            event.close();
          },
        },
        cancel: {
          enable: true,
          size: "",
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
          size: "",
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
        clickCallBack: null,
      },
      drag: false,
      forbiddenScroll: false,
    };
    config = popsUtils.assignJSON(config, details);
    let guid = popsUtils.getRandomGUID();
    const PopsType = "prompt";
    config = PopsHandler.handleOnly(PopsType, config);
    let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
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
    `
    );
    /**
     * 弹窗的主元素，包括动画层
     * @type {HTMLDivElement}
     */
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
      PopsType,
      animElement,
      popsElement,
      maskElement,
      config
    );
    /* 输入框赋值初始值 */
    inputElement.value = config.content.text;
    PopsHandler.handlePromptClickEvent(
      inputElement,
      btnCloseElement,
      "close",
      eventDetails,
      config.btn.close.callback
    );

    PopsHandler.handlePromptClickEvent(
      inputElement,
      btnOkElement,
      "ok",
      eventDetails,
      config.btn.ok.callback
    );
    PopsHandler.handlePromptClickEvent(
      inputElement,
      btnCancelElement,
      "cancel",
      eventDetails,
      config.btn.cancel.callback
    );

    PopsHandler.handlePromptClickEvent(
      inputElement,
      btnOtherElement,
      "other",
      eventDetails,
      config.btn.other.callback
    );
    /* 创建到页面中 */
    popsUtils.appendChild(document.body, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    PopsHandler.handlePush(PopsType, {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
    });
    /* 拖拽 */
    if (config.drag) {
      popsUtils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(popsElement).position,
        top: getComputedStyle(popsElement).top,
        left: getComputedStyle(popsElement).left,
        limit: true,
      });
    }
    /* 设置自动获取焦点 */
    if (config.content.focus) {
      inputElement?.focus();
    }

    return PopsHandler.handleResultDetails(eventDetails);
  };

  /**
   * @typedef {object} PopsLoadingDetails
   * @property {?HTMLElement} [parent=document.body] 父元素，默认为document.body
   * @property {{
   *  text: string,
   *  icon: string
   *  style: string,
   * }} content 内容配置
   * @property {string} [class=""] 自定义className
   * @property {boolean} [only=false] 是否是唯一的弹窗，默认false
   * @property {string} [animation="pops-anim-fadein-zoom"] 弹窗动画，默认pops-anim-fadein-zoom
   * @property {number} [zIndex=10000"] 弹窗的显示层级，默认10000
   * @property { PopsMaskDetails } mask 遮罩层，默认关闭
   * @property {boolean} [forbiddenScroll=false] 禁用页面滚动，默认false
   */
  /**
   * 加载层
   * @param {PopsLoadingDetails} details
   * @returns {{
   * guid: string,
   * element: Element,
   * animElement: HTMLElement,
   * popsElement: Element,
   * maskElement: Element,
   * close: Function,
   * hide: Function,
   * show: Function,
   * }}
   */
  pops.loading = function (details) {
    let that = this;
    PopsHandler.handleInit();
    /**
     * @type {PopsLoadingDetails}
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
        clickCallBack: null,
      },
      animation: "pops-anim-fadein-zoom",
      forbiddenScroll: false,
    };
    config = popsUtils.assignJSON(config, details);
    let guid = popsUtils.getRandomGUID();
    const PopsType = "loading";
    config = PopsHandler.handleOnly(PopsType, config);
    let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
    let { contentPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
    let animHTML = PopsElementHandler.getAnimHTML(
      guid,
      PopsType,
      config,
      `
    <div class="pops-loading-content">
      <p pops style="${contentPStyle}">${config.content.text}</p>
    </div>
    `
    );

    /**
     * 弹窗的主元素，包括动画层
     * @type {HTMLDivElement}
     */
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
      PopsType,
      animElement,
      popsElement,
      maskElement,
      config
    );
    popsUtils.appendChild(config.parent, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    this.config.layer.loading.push({
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
    });

    return PopsHandler.handleResultDetails(eventDetails);
  };

  /**
   * @typedef {object} PopsBtnIframeCallBackEvent
   * @property {HTMLElement} animElement
   * @property {HTMLElement} popsElement
   * @property {HTMLElement} maskElement
   * @property {HTMLElement} iframePopsElement
   * @property {HTMLElement} iframePopsElement
   * @property {"iframe"} function
   * @property {string} guid
   */
  /**
   * @typedef {object} PopsIframeDetails
   * @property {{
   *  text: string,
   *  position: "left"|"right"|"top"|"bottom"|"center",
   *  html: boolean,
   *  style: string,
   * }} title 标题配置
   * @property {{
   *  text: string,
   *  enable: boolean,
   *  icon: boolean,
   * }} loading 加载配置
   * @property {{
   *  min: {
   *    callback: (event: PopsBtnIframeCallBackEvent)=>{}
   *  },
   *  max: {
   *    callback: (event: PopsBtnIframeCallBackEvent)=>{}
   *  },
   *  mise: {
   *    callback: (event: PopsBtnIframeCallBackEvent)=>{}
   *  },
   *  close: {
   *    callback: (event: PopsBtnIframeCallBackEvent)=>{}
   *  },
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {?string} url 地址，默认为window.location.href
   * @property {boolean} [only="false"] 是否是唯一的弹窗，默认false
   * @property {string} [width="300px"] 弹窗宽度，默认300px
   * @property {string} [height="250px"] 弹窗高度，默认250px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation=""pops-anim-fadein-zoom""] 弹窗动画，默认pops-anim-fadein-zoom
   * @property {number} [zIndex=10000] 弹窗的显示层级，默认10000
   * @property { PopsMaskDetails } mask 遮罩层，默认关闭
   * @property {boolean} [drag=false] 是否可以按钮标题栏进行拖拽，默认false
   * @property {string} [topRightButton="min|max|mise|close"] 右上角按钮顺序：最小化、最大化、窗口化、关闭
   * @property {boolean} [sandbox=false] 是否启用沙箱，默认false
   * @property {boolean} [forbiddenScroll=false] 禁止页面滚动，默认false
   * @property {?Function} loadEndCallBack 网页加载完毕触发的回调，默认为空
   */
  /**
   * iframe层
   * @param {PopsIframeDetails} details
   * @returns {{
   * guid: string,
   * element: Element,
   * animElement: HTMLElement,
   * popsElement: Element,
   * maskElement: Element,
   * close: Function,
   * hide: Function,
   * show: Function,
   * }}
   */
  pops.iframe = function (details) {
    let that = this;
    PopsHandler.handleInit();
    /**
     * @type {PopsIframeDetails}
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
        clickCallBack: null,
      },
      animation: "pops-anim-fadein-zoom",
      position: "center",
      drag: false,
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
    };
    config = popsUtils.assignJSON(config, details);
    if (config.url == null) {
      throw "config.url不能为空";
    }
    let guid = popsUtils.getRandomGUID();
    const PopsType = "iframe";
    config = PopsHandler.handleOnly(PopsType, config);
    let maskExtraStyle =
      config.animation != null && config.animation != ""
        ? "position:absolute;"
        : "";
    let maskHTML = PopsElementHandler.getMaskHTML(
      guid,
      config.zIndex,
      maskExtraStyle
    );
    let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
    let iframeLoadingHTML = '<div class="pops-loading"></div>';
    let titleText =
      config.title.text.trim() !== "" ? config.title.text : config.url;
    let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
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
    `
    );
    /**
     * 弹窗的主元素，包括动画层
     * @type {HTMLDivElement}
     */
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
      PopsType,
      animElement,
      popsElement,
      maskElement,
      config
    );
    eventDetails["iframeElement"] = iframeElement;

    animElement?.addEventListener("animationend", function () {
      /* 动画加载完毕 */
      animElement.style.width = "0%";
      animElement.style.height = "0%";
    });
    iframeElement?.addEventListener("load", function () {
      /* iframe加载中... */
      loadingElement?.remove();
      contentLoadingElement.style.animation =
        "iframeLoadingChange_85 0.3s forwards";
      contentLoadingElement.addEventListener("animationend", function () {
        /* 动画加载完毕就移除 */
        contentLoadingElement.remove();
      });
      if (config.title.text.trim() === "" && iframeElement.contentDocument) {
        /* 同域名下的才可以获取网页标题 */
        titleElement.querySelector("p").innerText =
          iframeElement.contentDocument.title;
      }
      config.loadEndCallBack(eventDetails);
    });
    /* 创建到页面中 */
    popsUtils.appendChild(document.body, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    PopsHandler.handlePush(PopsType, {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
    });
    /* 拖拽 */
    if (config.drag) {
      popsUtils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(popsElement).position,
        top: getComputedStyle(popsElement).top,
        left: getComputedStyle(popsElement).left,
        limit: true,
      });
    }
    let normalLeft = "";
    /* 最小化按钮点击事件 */
    headerMinBtnElement?.addEventListener("click", (event) => {
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
      popsElement.style.transitionDuration = "";
      normalLeft = popsElement.style.left;
      popsElement.style.left = maxLeftValue + "px";
      popsElement.setAttribute("type-module", "min");
      animElement
        .querySelector(".pops-header-controls")
        .setAttribute("type", "max");
      config.btn.min.callback(event);
    });
    /* 最大化按钮点击事件 */
    headerMaxBtnElement?.addEventListener("click", (event) => {
      popsElement.style.transitionDuration = "";
      normalLeft = popsElement.style.left;
      popsElement.removeAttribute("type-module");
      popsElement.setAttribute("type-module", "max");
      headerControlsElement.setAttribute("type", "max");
      headerMaxBtnElement.style.setProperty("display", "none");
      headerMiseBtnElement.style.setProperty("display", "");
      config.btn.max.callback(event);
    });
    /* 先隐藏窗口化按钮 */
    headerMiseBtnElement?.style?.setProperty("display", "none");
    /* 窗口化按钮点击事件 */
    headerMiseBtnElement?.addEventListener("click", (event) => {
      popsElement.style.transitionDuration = "";
      popsElement.style.left = normalLeft;
      headerControlsElement.removeAttribute("type");
      popsElement.removeAttribute("type-module");
      /**
       * 所有最小化的iframe数组
       * @type { HTMLElement[] }
       */
      let allMinElementList = [];
      pops.config.layer.iframe.forEach((item) => {
        if (
          item.animElement != animElement &&
          popsElement.getAttribute("type-module") === "min"
        ) {
          allMinElementList.push(item.popsElement);
        }
      });
      allMinElementList.sort(
        popsUtils.sortElementListByProperty(
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
      headerMiseBtnElement.style.setProperty("display", "none");
      headerMaxBtnElement.style.setProperty("display", "");
      config.btn.mise.callback(event);
    });
    /* 关闭按钮点击事件 */
    headerCloseBtnElement?.addEventListener("click", (event) => {
      popsUtils.configRemove([that.config.layer.iframe], guid, false);
      setTimeout(() => {
        let allIsMinElementList = [];
        pops.config.layer.iframe.forEach((item) => {
          if (
            item.animElement != animElement &&
            popsElement.getAttribute("type-module") === "min"
          ) {
            allIsMinElementList.push(item.popsElement);
          }
        });
        allIsMinElementList.sort(
          popsUtils.sortElementListByProperty(
            (obj) => {
              return parseInt(getComputedStyle(obj).left);
            },
            (obj) => {
              return parseInt(getComputedStyle(obj).left);
            },
            false
          )
        );
        allIsMinElementList.forEach((item, index) => {
          item.style.left = index * 205 + "px";
        });
      }, 1000 * 0.3);
      config.btn.close.callback(event);
    });

    let result = PopsHandler.handleResultDetails(eventDetails);
    return result;
  };

  /**
   * @typedef {object} PopsToolTipDetails
   * @property {HTMLElement} target 目标元素
   * @property {string|()=> string} [content=""] 显示的文字
   * @property {"left"|"right"|"top"|"bottom"|"center"} [position="top"] 位置，默认top
   * @property {string} [className=""] 自定义className
   * @property {boolean} [alwaysShow=false] 是否总是显示
   * + true 设置的triggerShowEventName、triggerCloseEventName将无效
   *        返回提供show和close函数，取消on和off
   * + false 返回提供on和off，取消close函数
   * @property {string} [triggerShowEventName="mouseenter"] 触发显示事件的名称，默认mouseenter
   * @property {string} [triggerCloseEventName="mouseleave"] 触发关闭事件的名称，默认mouseleave
   * @property {number} [zIndex=10000] z-index，默认10000
   * @property {boolean} [only=false] 是否唯一，默认false
   * @property {Function} triggerShowEventCallBack 触发显示事件的回调
   * @property {Function} triggerCloseEventCallBack 触发关闭事件的回调
   * @property {number} [arrowDistance=12.5] 箭头与目标的的距离
   * @property {number} [otherDistance=0] 其它的距离
   * 如：
   * 当position="left|right"，这个距离是上、下距离
   * 当position="top|bottom"，这个距离是左、右距离
   *
   */
  /**
   * 提示框
   * @param {PopsToolTipDetails} details
   * @returns {{
   * guid: string,
   * config: PopsToolTipDetails,
   * toolTipNode: HTMLElement,
   * off: ?Function,
   * on: ?Function,
   * close: ?Function,
   * show: ?Function,
   * }}
   */
  pops.tooltip = function (details) {
    let that = this;
    PopsHandler.handleInit();
    /**
     * @type {PopsToolTipDetails}
     */
    let config = {
      target: null,
      content: "默认文字",
      position: "top",
      className: "",
      alwaysShow: false,
      triggerShowEventName: "mouseenter",
      triggerCloseEventName: "mouseleave",
      zIndex: 10000,
      only: false,
      triggerShowEventCallBack: function () {},
      triggerCloseEventCallBack: function () {},
      arrowDistance: 12.5,
      otherDistance: 0,
    };
    config = popsUtils.assignJSON(config, details);
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
     * 获取相应的元素
     */
    function getToolTipNodeJSON() {
      let _toolTipHTML_ = `<div class="pops-tip"></div>`;
      let _toolTipNode_ = popsUtils.parseTextToDOM(_toolTipHTML_);
      _toolTipNode_.classList.add(config.className);
      _toolTipNode_.setAttribute("data-guid", guid);
      _toolTipNode_.style.zIndex = config.zIndex;
      _toolTipNode_.innerHTML = `
      <div style="text-align: center;">${getContent()}</div>
      `;
      /* 箭头 */
      let _toolTipArrowHTML_ = '<div class="pops-tip-arrow"></div>';
      let _toolTipArrowNode_ = popsUtils.parseTextToDOM(_toolTipArrowHTML_);
      _toolTipNode_.appendChild(_toolTipArrowNode_);
      return {
        toolTipNode: _toolTipNode_,
        toolTipHTML: _toolTipHTML_,
        toolTipArrowHTML: _toolTipArrowHTML_,
        toolTipArrowNode: _toolTipArrowNode_,
      };
    }
    config.position = config.position.toLowerCase();
    let toolTipNodeJSON = getToolTipNodeJSON();
    let toolTipNode = toolTipNodeJSON.toolTipNode;

    /**
     * 设置 提示框的位置
     * @param {object} positionDetails
     */
    function setToolTipPosition(positionDetails) {
      let positionDetail = positionDetails[config.position.toUpperCase()];
      if (positionDetail) {
        toolTipNode.style.left = positionDetail.left + "px";
        toolTipNode.style.top = positionDetail.top + "px";
        toolTipNode.setAttribute("data-motion", positionDetail.motion);
        toolTipNode
          .querySelector(".pops-tip-arrow")
          .setAttribute("data-position", positionDetail.arrow);
      } else {
        console.error("不存在该位置", config.position);
      }
    }

    /**
     * 获取 提示框的位置
     */
    function getToolTipPosition() {
      return {
        TOP: {
          left:
            popsUtils.jQuery.offset(config.target).left +
            popsUtils.jQuery.width(config.target) / 2 -
            popsUtils.jQuery.width(config.target) * 0.2 +
            config.otherDistance,
          top:
            popsUtils.jQuery.offset(config.target).top -
            popsUtils.jQuery.outerHeight(toolTipNode) -
            config.arrowDistance,
          arrow: "bottom",
          motion: "fadeInTop",
        },
        RIGHT: {
          left:
            popsUtils.jQuery.offset(config.target).left +
            popsUtils.jQuery.outerWidth(config.target) +
            config.arrowDistance,
          top:
            popsUtils.jQuery.offset(config.target).top +
            popsUtils.jQuery.outerHeight(config.target) / 2 -
            popsUtils.jQuery.outerHeight(toolTipNode) / 2 +
            config.otherDistance,
          arrow: "left",
          motion: "fadeInRight",
        },
        BOTTOM: {
          left:
            popsUtils.jQuery.offset(config.target).left +
            popsUtils.jQuery.outerWidth(config.target) / 2 -
            popsUtils.jQuery.width(toolTipNode) * 0.2 +
            config.otherDistance,
          top:
            popsUtils.jQuery.offset(config.target).top +
            popsUtils.jQuery.outerHeight(config.target) +
            config.arrowDistance,
          arrow: "top",
          motion: "fadeInBottom",
        },
        LEFT: {
          left:
            popsUtils.jQuery.offset(config.target).left -
            popsUtils.jQuery.outerWidth(toolTipNode) -
            config.arrowDistance,
          top:
            popsUtils.jQuery.offset(config.target).top +
            popsUtils.jQuery.outerHeight(config.target) / 2 -
            popsUtils.jQuery.outerHeight(toolTipNode) / 2 +
            config.otherDistance,
          arrow: "right",
          motion: "fadeInLeft",
        },
      };
    }
    /**
     * 显示提示框
     */
    let showToolTipNode = function () {
      document.body.appendChild(toolTipNode);
      setToolTipPosition(getToolTipPosition());
      if (typeof config.triggerShowEventCallBack === "function") {
        config.triggerShowEventCallBack(toolTipNode);
      }
    };
    /**
     * 关闭提示框
     */
    let closeToolTipNode = function () {
      toolTipNode.setAttribute(
        "data-motion",
        toolTipNode.getAttribute("data-motion").replace("fadeIn", "fadeOut")
      );
      if (typeof config.triggerCloseEventCallBack === "function") {
        config.triggerCloseEventCallBack(toolTipNode);
      }
    };
    /**
     * 绑定 显示事件
     */
    function onShowEvent() {
      popsUtils.jQuery.on(
        config.target,
        config.triggerShowEventName,
        null,
        showToolTipNode
      );
    }
    /**
     * 绑定 关闭事件
     */
    function onCloseEvent() {
      popsUtils.jQuery.on(
        config.target,
        config.triggerCloseEventName,
        null,
        closeToolTipNode
      );
    }
    /**
     * 取消绑定 显示事件
     */
    function offShowEvent() {
      popsUtils.jQuery.off(
        config.target,
        null,
        config.triggerShowEventName,
        showToolTipNode
      );
    }
    /**
     * 取消绑定 关闭事件
     */
    function offCloseEvent() {
      popsUtils.jQuery.off(
        config.target,
        null,
        config.triggerCloseEventName,
        closeToolTipNode
      );
    }

    /**
     * 即使存在动画属性，但是当前设置的动画Out结束后移除元素
     */
    function endEvent() {
      if (toolTipNode.getAttribute("data-motion").includes("In")) {
        return;
      }
      toolTipNode.remove();
    }
    if (config.alwaysShow) {
      /* 总是显示 */
      showToolTipNode();
      return {
        guid: guid,
        config: config,
        toolTipNode: toolTipNode,
        show: showToolTipNode,
        close() {
          popsUtils.jQuery.on(
            toolTipNode,
            [
              "webkitAnimationEnd",
              "mozAnimationEnd",
              "MSAnimationEnd",
              "oanimationend",
              "animationend",
            ],
            null,
            endEvent
          );
          closeToolTipNode();
        },
      };
    } else {
      /* 事件触发才显示 */

      /**
       * 进入动画
       */
      toolTipNode.addEventListener("mouseenter", function () {
        if (parseInt(getComputedStyle(this)) > 0.5) {
          this.style.animationPlayState = "paused";
        }
      });

      /**
       * 退出动画
       */
      toolTipNode.addEventListener("mouseleave", function () {
        this.style.animationPlayState = "running";
      });
      popsUtils.jQuery.on(
        toolTipNode,
        [
          "webkitAnimationEnd",
          "mozAnimationEnd",
          "MSAnimationEnd",
          "oanimationend",
          "animationend",
        ],
        null,
        endEvent
      );

      onShowEvent();
      onCloseEvent();
      return {
        guid: guid,
        config: config,
        toolTipNode: toolTipNode,
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
   * @typedef {object} PopsDrawerDetails
   * @property { {
   *  enable: boolean,
   *  position: "left"|"right"|"center"|"start"|"-webkit-center"|"-webkit-match-parent",
   *  text: string,
   *  html: boolean
   *  style: string,
   * } } title 标题
   * @property { {
   *  text: string,
   *  html: boolean
   *  style: string,
   * } } content 内容
   * @property {{
   *  merge: boolean,
   *  mergeReverse: boolean,
   *  reverse: boolean,
   *  position: "center"|"flex-start"|"flex-end"|"space-between"|"space-around"|"space-evenly",
   *  ok: PopsButtonDetails,
   *  cancel: PopsButtonDetails,
   *  other: PopsButtonDetails,
   *  close: PopsHeaderCloseButtonDetails,
   * }} btn 按钮配置
   * @property { PopsMaskDetails } mask 遮罩层
   * @property {string} [class=""] 自定义className名，默认为空
   * @property {number} [zIndex=10000] z-index值，默认为10000
   * @property {boolean} [only=false] 是否是页面中的唯一，默认为false
   * @property {"top"|"bottom"|"left"|"right"} direction Drawer 打开的方向，默认为false
   * @property {string} [size="30%"] 窗体的大小, 当使用 number 类型时, 以像素为单位，默认为30%
   * @property {boolean} [lockScroll=false] 是否在 Drawer 出现时将 body 滚动锁定，默认为false
   * @property {boolean} [closeOnPressEscape=true] 是否可以通过按下 ESC 关闭 Drawer，默认为true
   * @property {number} [openDelay=0] Drawer 打开的延时时间，单位毫秒，默认为0
   * @property {number} [closeDelay=0] Drawer 关闭的延时时间，单位毫秒，默认为0
   * @property {number} [borderRadius=0] border-radius，根据direction自动适应，默认为5
   */
  /**
   * 抽屉
   * @param {PopsDrawerDetails} details
   */
  pops.drawer = function (details) {
    let that = this;
    PopsHandler.handleInit();
    /**
     * @type {PopsDrawerDetails}
     */
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
          size: "",
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
          size: "",
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
          size: "",
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
    };
    config = popsUtils.assignJSON(config, details);
    let guid = popsUtils.getRandomGUID();
    const PopsType = "drawer";
    config = PopsHandler.handleOnly(PopsType, config);
    let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
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
            config.title.html
              ? config.title.text
              : `<p 
                    pops
                    style="
                          width: 100%;
                          text-align: ${config.title.position};
                          ${headerPStyle}">${config.title.text}</p>`
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
      `
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
      PopsType,
      animElement,
      popsElement,
      maskElement,
      config
    );
    /* 处理方向 */
    popsElement.setAttribute("direction", config.direction);

    /* 处理border-radius */
    /* 处理动画前的宽高 */
    if (config.direction === "top") {
      popsElement.style.setProperty("height", 0);
      popsElement.style.setProperty(
        "border-radius",
        `0px 0px ${config.borderRadius}px ${config.borderRadius}px`
      );
    } else if (config.direction === "bottom") {
      popsElement.style.setProperty("height", 0);
      popsElement.style.setProperty(
        "border-radius",
        `${config.borderRadius}px ${config.borderRadius}px 0px 0px`
      );
    } else if (config.direction === "left") {
      popsElement.style.setProperty("width", 0);
      popsElement.style.setProperty(
        "border-radius",
        `0px ${config.borderRadius}px 0px ${config.borderRadius}px`
      );
    } else if (config.direction === "right") {
      popsElement.style.setProperty("width", 0);
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
        item[btnName],
        btnName,
        eventDetails,
        function (_eventDetails_) {
          if (typeof config.btn[btnName].callback === "function") {
            config.btn[btnName].callback(_eventDetails_);
          }
        }
      );
    });

    /* 先隐藏，然后根据config.openDelay来显示 */
    elementList.forEach((element) => {
      element.style.setProperty("display", "none");
      if (["top", "bottom"].includes(config.direction)) {
        popsElement.style.setProperty("height", 0);
      } else if (["left", "right"].includes(config.direction)) {
        popsElement.style.setProperty("width", 0);
      }
    });
    /* 创建到页面中 */
    popsUtils.appendChild(document.body, elementList);
    /* 先隐藏，然后显示根据config.openDelay来显示 */
    elementList.forEach((element) => {
      element.style.setProperty("display", "");
    });
    /* 处理动画后的宽高 */
    setTimeout(() => {
      setTimeout(() => {
        if (["top", "bottom"].includes(config.direction)) {
          popsElement.style.setProperty("height", config.size);
        } else if (["left", "right"].includes(config.direction)) {
          popsElement.style.setProperty("width", config.size);
        } else {
          console.error("未知config.direction：", config.direction);
        }
      }, config.openDelay);
    }, 50);

    if (maskElement != null) {
      animElement.after(maskElement);
    }

    this.config.layer.drawer.push({
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
    });
    return PopsHandler.handleResultDetails(eventDetails);
  };

  /**
   * @typedef {object} PopsFolderDetails
   * @property {{
   *  text: string,
   *  position: "left"|"right"|"top"|"bottom"|"center",
   *  html: boolean,
   *  style: string,
   * }} title 标题配置
   * @property {{
   * fileName: string,
   * fileSize: number,
   * fileType: string,
   * createTime: number,
   * latestTime: number,
   * isFolder: boolean,
   * clickEvent: Function,
   * }[]} folder 文件夹信息
   * @property {{
   *  merge: boolean,
   *  mergeReverse: boolean,
   *  reverse: boolean,
   *  position: "center"|"flex-start"|"flex-end"|"space-between"|"space-around"|"space-evenly",
   *  ok: PopsButtonDetails,
   *  cancel: PopsButtonDetails,
   *  other: PopsButtonDetails,
   *  close: PopsHeaderCloseButtonDetails,
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {boolean} [only=false] 是否是唯一的弹窗，默认false
   * @property {string} [width="350px"] 弹窗宽度，默认350px
   * @property {string} [height="200px"] 弹窗高度，默认200px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation="pops-anim-fadein-zoom"] 弹窗动画，默认pops-anim-fadein-zoom
   * @property {number} [zIndex=false] 弹窗的显示层级，默认10000
   * @property { PopsMaskDetails } mask 遮罩层，默认关闭
   * @property {boolean} [drag=false] 是否可以按钮标题栏进行拖拽，默认false
   * @property {boolean} [forbiddenScroll=false] 禁用页面滚动，默认false
   */
  /**
   * 文件夹
   * @param {PopsFolderDetails} details
   */
  pops.folder = function (details) {
    let that = this;
    PopsHandler.handleInit();
    /**
     * @type {PopsFolderDetails}
     */
    let config = {
      title: {
        text: "pops.Folder",
        position: "center",
        html: false,
        style: "",
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
          size: "",
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
          size: "",
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
          size: "",
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
        clickCallBack: null,
      },
      drag: false,
      forbiddenScroll: false,
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
      doc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",
      Null: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",
      ipa: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",
      excel:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",
      png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",
    };
    Folder_ICON.rar = Folder_ICON.zip;
    Folder_ICON["7z"] = Folder_ICON.zip;
    Folder_ICON.iso = Folder_ICON.zip;

    Folder_ICON.jpg = Folder_ICON.png;
    Folder_ICON.jpeg = Folder_ICON.png;
    Folder_ICON.ico = Folder_ICON.png;
    Folder_ICON.webp = Folder_ICON.png;

    config = popsUtils.assignJSON(config, details);
    if (details?.folder) {
      config.folder = details.folder;
    }
    let guid = popsUtils.getRandomGUID();
    const PopsType = "folder";
    config = PopsHandler.handleOnly(PopsType, config);
    let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
    let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
    let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
    let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
      PopsType,
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
                      <div class="text-ellip content inline-block-v-middle">
                        <span>文件名</span>
                      </div>
                    </th>
                    <th class="pops-folder-list-table__header-th cursor-p">
                      <div class="text-ellip content inline-block-v-middle">
                        <span>修改时间</span>
                      </div>
                    </th>
                    <th class="pops-folder-list-table__header-th cursor-p">
                      <div class="text-ellip content inline-block-v-middle">
                        <span>大小</span>
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
    `
    );
    /**
     * 弹窗的主元素，包括动画层
     */
    let animElement = PopsElementHandler.parseElement(animHTML);
    let {
      popsElement,
      titleElement,
      contentElement,
      folderListElement,
      folderListHeaderElement,
      folderListHeaderRowElement,
      folderListBodyElement,
      folderFileListBreadcrumbPrimaryElement,
      headerCloseBtnElement: btnCloseElement,
      btnOkElement,
      btnCancelElement,
      btnOtherElement,
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
    /* 事件 */
    let eventDetails = PopsHandler.handleEventDetails(
      guid,
      PopsType,
      animElement,
      popsElement,
      maskElement,
      config
    );
    PopsHandler.handleClickEvent(
      btnCloseElement,
      "close",
      eventDetails,
      config.btn.close.callback
    );
    PopsHandler.handleClickEvent(
      btnOkElement,
      "ok",
      eventDetails,
      config.btn.ok.callback
    );
    PopsHandler.handleClickEvent(
      btnCancelElement,
      "cancel",
      eventDetails,
      config.btn.cancel.callback
    );
    PopsHandler.handleClickEvent(
      btnOtherElement,
      "other",
      eventDetails,
      config.btn.other.callback
    );
    /* 创建到页面中 */
    popsUtils.appendChild(document.body, elementList);
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
      let folderELement = document.createElement("tr");
      let fileNameElement = document.createElement("td");
      let fileTimeElement = document.createElement("td");
      let fileFormatSize = document.createElement("td");
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
      };
      fileNameElement["__value__"] = __value__;
      fileTimeElement["__value__"] = __value__;
      fileFormatSize["__value__"] = __value__;

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
      let folderELement = document.createElement("tr");
      let fileNameElement = document.createElement("td");
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
      fileNameElement["__value__"] = {
        fileName: origin_fileName,
        latestTime: origin_latestTime,
        fileSize: origin_fileSize,
      };

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
      let iconArrowElement = document.createElement("div");
      iconArrowElement.className = "iconArrow";
      return iconArrowElement;
    }
    /**
     * 添加顶部导航
     * @param {string} name
     * @param {object} _config_
     * @returns
     */
    function getBreadcrumbAllFilesElement(name, _config_) {
      let spanElement = document.createElement("span");
      spanElement.className =
        "pops-folder-file-list-breadcrumb-allFiles cursor-p";
      spanElement.setAttribute("title", name);
      spanElement.innerHTML = `<a>${name}</a>`;
      spanElement._config_ = _config_;
      return spanElement;
    }
    /**
     * 顶部导航的点击事件
     * @param {Event} event
     * @param {boolean} isTop
     * @param {object} _config_
     */
    function breadcrumbAllFilesElementClickEvent(event, isTop, _config_) {
      clearFolerRow();
      let primaryElement = popsElement.querySelector(
        ".pops-folder-file-list-breadcrumb-primary"
      );
      if (isTop) {
        Array.from(primaryElement.children).forEach((item) => {
          if (item.getAttribute("title") !== "全部文件") {
            item.remove();
          }
        });
      } else {
        let childList = Array.from(primaryElement.children).filter((item) => {
          return item.localName === "span";
        });
        let currentBreadcrumb = null;
        for (let index = 0; index < childList.length; index++) {
          let childConfig = childList[index]._config_;
          if (childConfig == _config_) {
            currentBreadcrumb = childList[index];
            break;
          }
        }
        if (currentBreadcrumb) {
          while (currentBreadcrumb.nextElementSibling) {
            currentBreadcrumb.nextElementSibling.remove();
          }
        }
      }
      let loadingMask = pops.loading({
        parent: contentElement,
        content: {
          text: "获取文件列表中...",
        },
        mask: {
          enable: true,
        },
      });
      addFolderElement(_config_);
      loadingMask.close();
    }
    /**
     * 刷新文件列表界面信息
     * @param {Event} event
     * @param {object} _config_
     */
    async function refreshFolderInfoClickEvent(event, _config_) {
      clearFolerRow();
      let loadingMask = pops.loading({
        parent: contentElement,
        content: {
          text: "获取文件列表中...",
        },
        mask: {
          enable: true,
        },
      });
      if (typeof _config_.clickEvent === "function") {
        let childConfig = await _config_.clickEvent(event, _config_);
        /* 添加顶部导航的箭头 */
        folderFileListBreadcrumbPrimaryElement.appendChild(
          getArrowIconElement()
        );
        /* 获取顶部导航 */
        let breadcrumbAllFilesElement = getBreadcrumbAllFilesElement(
          _config_["fileName"],
          childConfig
        );
        folderFileListBreadcrumbPrimaryElement.appendChild(
          breadcrumbAllFilesElement
        );
        /* 设置顶部导航点击事件 */
        popsUtils.jQuery.on(
          breadcrumbAllFilesElement,
          "click",
          undefined,
          function (event) {
            breadcrumbAllFilesElementClickEvent(event, false, childConfig);
          }
        );
        addFolderElement(childConfig);
      }
      loadingMask.close();
    }
    /**
     * 设置文件点击事件
     * @param {HTMLElement} targetElement
     * @param {{
     * fileName: string,
     * fileSize: number,
     * fileType: string,
     * createTime: number,
     * latestTime: number,
     * isFolder: boolean,
     * clickEvent: Function,
     * }} _config_
     */
    function setFileClickEvent(targetElement, _config_) {
      popsUtils.jQuery.on(
        targetElement,
        "click",
        undefined,
        async function (event) {
          event?.preventDefault();
          event?.stopPropagation();
          event?.stopImmediatePropagation();
          let linkElement = targetElement.querySelector("a");
          if (typeof _config_.clickEvent === "function") {
            /**
             * @type {?{
             * autoDownload: boolean,
             * url: string,
             * }}
             */
            let downloadInfo = await _config_.clickEvent(event, _config_);
            if (
              typeof downloadInfo === "object" &&
              typeof downloadInfo.url === "string" &&
              downloadInfo.url.trim() !== ""
            ) {
              linkElement.setAttribute("href", downloadInfo.url);
              linkElement.setAttribute("target", "_blank");
              if (downloadInfo.autoDownload) {
                let downloadLinkElement = document.createElement("a");
                if (downloadInfo.blank) {
                  downloadLinkElement.setAttribute("target", "_blank");
                }
                downloadLinkElement.href = downloadInfo.url;
                downloadLinkElement.click();
              }
            }
          }
        }
      );
    }
    /**
     * 添加元素
     * @param {{
     * fileName: string,
     * fileSize: number,
     * fileType: string,
     * createTime: number,
     * latestTime: number,
     * isFolder: boolean,
     * clickEvent: Function,
     * }[]} _config_
     */
    function addFolderElement(_config_) {
      _config_.forEach((item) => {
        if (item["isFolder"]) {
          let { folderELement, fileNameElement } = pops.isPhone()
            ? createMobileFolderRowElement(item["fileName"])
            : createFolderRowElement(item["fileName"]);
          popsUtils.jQuery.on(
            fileNameElement,
            "click",
            undefined,
            function (event) {
              refreshFolderInfoClickEvent(event, item);
            }
          );
          folderListBodyElement.appendChild(folderELement);
        } else {
          let { folderELement, fileNameElement } = pops.isPhone()
            ? createMobileFolderRowElement(
                item["fileName"],
                item["latestTime"],
                item["fileSize"]
              )
            : createFolderRowElement(
                item["fileName"],
                item["latestTime"],
                item["fileSize"]
              );
          setFileClickEvent(fileNameElement, item);
          folderListBodyElement.appendChild(folderELement);
        }
      });
    }
    addFolderElement(config.folder);
    /* 将数据存到全部文件的属性_config_中 */
    let allFilesElement = folderFileListBreadcrumbPrimaryElement.querySelector(
      ".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child"
    );
    allFilesElement._config_ = config.folder;
    /* 设置点击顶部的全部文件事件 */
    popsUtils.jQuery.on(allFilesElement, "click", undefined, function (event) {
      breadcrumbAllFilesElementClickEvent(event, true, config.folder);
    });

    PopsHandler.handlePush(PopsType, {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
    });
    /* 拖拽 */
    if (config.drag) {
      popsUtils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(animElement).position,
        top: getComputedStyle(animElement).top,
        left: getComputedStyle(animElement).left,
        limit: true,
      });
    }
    return PopsHandler.handleResultDetails(eventDetails);
  };

  /**
   * @typedef {Array<PopsPanelSwitchDetails|PopsPanelSliderDetails|PopsPanelInputDetails|PopsPanelTextAreaDetails|PopsPanelSelectDetails|PopsPanelButtonDetails|PopsPanelOwnDetails>} PopsPanelFormsDetailsArray
   */
  /**
   * @typedef {object} PopsPanelFormsDetails
   * @property {?string} className className属性
   * @property {?object} attributes 自定义属性
   * @property {?HTMLElement} props 自定义元素属性
   * @property {string} text 显示在顶部的文字
   * @property {"forms"} type 类型
   * @property { PopsPanelFormsDetailsArray } forms 子配置
   */
  /**
   * @typedef {object} PopsPanelSwitchDetails
   * @property {?string} className className属性
   * @property {?object} attributes 自定义属性
   * @property {?HTMLElement} props 自定义元素属性
   * @property {string} text 显示在左边的文字
   * @property {"switch"} type 类型
   * @property {()=> boolean} getValue 获取该项的值的回调函数
   * @property {(event:Event,value:boolean)=>{}} callback switch开启/关闭触发的回调函数
   */
  /**
   * @typedef {object} PopsPanelSliderDetails
   * @property {?string} className className属性
   * @property {?object} attributes 自定义属性
   * @property {?HTMLElement} props 自定义元素属性
   * @property {string} text 显示在左边的文字
   * @property {"slider"} type 类型
   * @property {()=> number} getValue 获取该项的值的回调函数
   * @property {(event:Event,value:number)=>{}} callback 滑块的值改变触发的回调函数
   * @property {(value: number)=>string} getToolTipContent 获取tooltip的提示内容，可自定义，默认为slider的值
   * @property {number} min 最小值
   * @property {number} max 最大值
   * @property {?number} step 每次滑动的间隔值
   */
  /**
   * @typedef {object} PopsPanelInputDetails
   * @property {?string} className className属性
   * @property {?object} attributes 自定义属性
   * @property {?HTMLElement} props 自定义元素属性
   * @property {string} text 显示在左边的文字
   * @property {"input"} type 类型
   * @property {()=> string} getValue 获取该项的值的回调函数
   * @property {(event:Event,value:string)=>{}} callback 输入框的值改变触发的回调函数
   * @property {string} placeholder 输入框内的提示
   * @property {boolean} isPassword 是否是密码框
   */
  /**
   * @typedef {object} PopsPanelTextAreaDetails
   * @property {?string} className className属性
   * @property {?object} attributes 自定义属性
   * @property {?HTMLElement} props 自定义元素属性
   * @property {string} text 显示在左边的文字
   * @property {"textarea"} type 类型
   * @property {()=> string} getValue 获取该项的值的回调函数
   * @property {(event:Event,value:string)=>{}} callback textarea输入框的值改变触发的回调函数
   * @property {string} placeholder 输入框内的提示
   */
  /**
   * @typedef {object} PopsPanelSelectDetails
   * @property {?string} className className属性
   * @property {?object} attributes 自定义属性
   * @property {?HTMLElement} props 自定义元素属性
   * @property {string} text 显示在左边的文字
   * @property {"select"} type 类型
   * @property {()=> string} getValue 获取该项的值的回调函数
   * @property {(event:Event,isSelectedValue:string,isSelectedText:string)=>{}} callback 选择器的值改变触发的回调函数
   * @property {{
   * value: string,
   * text: string,
   * }[]} data 选择器内的数据组
   */
  /**
   * @typedef {object} PopsPanelButtonDetails
   * @property {?string} className className属性
   * @property {?object} attributes 自定义属性
   * @property {?HTMLElement} props 自定义元素属性
   * @property {string} text 显示在左边的文字
   * @property {"button"} type 类型
   * @property {"default"|"primary"|"xiaomi-primary"|"success"|"info"|"warning"|"danger"} buttonType 按钮的类型
   * @property {string|()=>string} buttonText 按钮的文字
   * @property {string} buttonIcon 按钮的图标，已配置的svg请看pops.config.iconSVG，或者自定义的图标svg代码
   * @property {boolean} buttonIsRightIcon 按钮的图标在右边
   * @property {boolean} buttonIconIsLoading 按钮的图标旋转
   * @property {(event:Event)=>{}} callback 点击button触发的事件
   */
  /**
   * @typedef {object} PopsPanelOwnDetails
   * @property {?string} className className属性
   * @property {?object} attributes 自定义属性
   * @property {?HTMLElement} props 自定义元素属性
   * @property {"own"} type 类型
   * @property {(liElement:HTMLLIElement)=>HTMLLIElement} getLiElementCallBack 获取自定义<li>标签元素
   */
  /**
   * @typedef {object} PopsPanelDetails
   * @property {{
   *  text: string,
   *  position: "left"|"right"|"top"|"bottom"|"center",
   *  html: boolean,
   *  style: string,
   * }} title 标题配置
   * @property {{
   * id: string,
   * title: string,
   * headerTitle?: string,
   * isDefault?: boolean,
   * attributes?: object[]|object,
   * props?: HTMLElement,
   * forms: PopsPanelFormsDetailsArray,
   * }[]} content 内容配置
   * @property {{
   *  close: PopsHeaderCloseButtonDetails,
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {string} [mobileClassName="pops-panel-is-mobile"] 移动端的className
   * @property {boolean} [only=false] 是否是唯一的弹窗，默认false
   * @property {string} [widths="350px"] 弹窗宽度，默认350px
   * @property {string} [heights="200px"] 弹窗高度，默认200px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation="pops-anim-fadein-zoom"] 弹窗动画，默认pops-anim-fadein-zoom
   * @property {number} [zIndex=10000] 弹窗的显示层级，默认10000
   * @property { PopsMaskDetails } mask 遮罩层，默认关闭
   * @property {boolean} [drag=false] 是否可以按钮标题栏进行拖拽，默认false
   * @property {boolean} [forbiddenScroll=false] 禁用页面滚动
   */

  /**
   * 配置面板
   * @param { PopsPanelDetails } details 配置
   * @returns {{
   * guid: string,
   * element: Element,
   * animElement: HTMLElement,
   * popsElement: Element,
   * maskElement: Element,
   * close: Function,
   * hide: Function,
   * show: Function,
   * }}
   */
  pops.panel = function (details) {
    let that = this;
    PopsHandler.handleInit();
    /**
     * @type {PopsPanelDetails}
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
                  buttonType: "error",
                  buttonText: "error按钮",
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
                return 50;
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
                return 50;
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
                  selected: true,
                },
                {
                  value: "html",
                  text: "超文本",
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
        clickCallBack: null,
      },
      class: "",
      mobileClassName: "pops-panel-is-mobile",
      only: false,
      width: "700px",
      height: "500px",
      position: "center",
      animation: "pops-anim-fadein-zoom",
      zIndex: 10000,
      drag: false,
      forbiddenScroll: false,
    };
    config = popsUtils.assignJSON(config, details);
    if (details && Array.isArray(details.content)) {
      config.content = details.content;
    }
    let guid = popsUtils.getRandomGUID();
    const PopsType = "panel";
    config = PopsHandler.handleOnly(PopsType, config);

    let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);
    let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
    let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
      PopsType,
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
      </div>
      `
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
      contentElement,
      contentAsideElement,
      contentSectionContainerElement,
    } = PopsHandler.handleQueryElement(animElement, PopsType);
    if (pops.isPhone()) {
      popsElement.classList.add(config.mobileClassName);
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
      PopsType,
      animElement,
      popsElement,
      maskElement,
      config
    );
    /* 为顶部右边的关闭按钮添加点击事件 */
    PopsHandler.handleClickEvent(
      btnCloseElement,
      "close",
      eventDetails,
      config.btn.close.callback
    );

    /* 创建到页面中 */
    popsUtils.appendChild(document.body, elementList);
    /* 追加遮罩层元素 */
    if (maskElement != null) {
      animElement.after(maskElement);
    }

    /**
     * 处理内部配置
     */
    const HandleContetDetails = {
      /**
       * @type {HTMLUListElement}
       */
      asideULElement: null,
      /**
       * @type {HTMLUListElement}
       */
      sectionContainerHeaderULElement: null,
      /**
       * @type {HTMLUListElement}
       */
      sectionContainerULElement: null,
      init() {
        this.asideULElement = contentAsideElement.querySelector("ul");
        this.sectionContainerHeaderULElement =
          contentSectionContainerElement.querySelectorAll("ul")[0];
        this.sectionContainerULElement =
          contentSectionContainerElement.querySelectorAll("ul")[1];
        /* 默认点击的左侧容器 */
        let asideDefaultItemElement = null;
        config.content.forEach((asideItem) => {
          let asideLiElement = this.getAsideItem(asideItem);
          this.setAsideItemClickEvent(asideLiElement, asideItem);
          this.asideULElement.appendChild(asideLiElement);
          if (asideDefaultItemElement == null && Boolean(asideItem.isDefault)) {
            asideDefaultItemElement = asideLiElement;
          }
        });

        /* 点击左侧列表 */
        if (asideDefaultItemElement) {
          popsUtils.jQuery.trigger(
            asideDefaultItemElement,
            "click",
            undefined,
            true
          );
        } else if (this.asideULElement.children.length) {
          popsUtils.jQuery.trigger(
            this.asideULElement.children[0],
            "click",
            undefined,
            true
          );
        } else {
          console.error("左侧容器没有项");
        }
      },
      /**
       * 清空container容器的元素
       */
      clearContainer() {
        this.sectionContainerHeaderULElement.innerHTML = "";
        this.sectionContainerULElement.innerHTML = "";
      },
      /**
       * 清空左侧容器已访问记录
       */
      clearAsideItemIsVisited() {
        contentAsideElement
          .querySelectorAll(".pops-is-visited")
          .forEach((element) => {
            element.classList.remove("pops-is-visited");
          });
      },
      /**
       * 设置左侧容器已访问记录
       * @param {HTMLElement} element
       */
      setAsideItemIsVisited(element) {
        element.classList.add("pops-is-visited");
      },
      /**
       * 为元素添加自定义属性
       * @param {HTMLElement} element
       * @param {object} attributes
       */
      addElementAttributes(element, attributes) {
        if (attributes == null) {
          return;
        }
        Object.keys(attributes).forEach((attributeName) => {
          element.setAttribute(attributeName, attributes[attributeName]);
        });
      },
      /**
       * 为元素设置(自定义)属性
       * @param {HTMLElement} element
       * @param {?HTMLElement} props
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
       * @param { {
       * id: string,
       * title: string,
       * headerTitle?: string,
       * forms: PopsPanelFormsDetailsArray
       * isDefault?: boolean,
       * attributes?: object[]|object,
       * props?: HTMLElement,
       * } } asideConfig
       * @returns
       */
      getAsideItem(asideConfig) {
        let liElement = document.createElement("li");
        liElement.id = asideConfig.id;
        liElement.__forms__ = asideConfig.forms;
        liElement.innerHTML = asideConfig.title;
        this.addElementAttributes(liElement, asideConfig.attributes);
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
        function setSwitchChecked(
          switchElement,
          switchInputElement,
          checked = false
        ) {
          switchInputElement.checked = Boolean(checked);
          if (checked) {
            switchElement.classList.add("pops-panel-switch-is-checked");
          } else {
            switchElement.classList.remove("pops-panel-switch-is-checked");
          }
        }
        let liElement = document.createElement("li");
        liElement.__formConfig__ = formConfig;
        if (formConfig.className) {
          liElement.className = formConfig.className;
        }
        this.addElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        liElement.innerHTML = `
        <div>
          ${formConfig.text}
        </div>
        <div class="pops-panel-switch">
          <input class="pops-panel-switch__input" type="checkbox">
          <span class="pops-panel-switch__core">
            <div class="pops-panel-switch__action">
            </div>
          </span>
        </div>
        `;
        let switchElement = liElement.querySelector(".pops-panel-switch");
        /**
         * @type {HTMLInputElement}
         */
        let switchInputElement = liElement.querySelector(
          ".pops-panel-switch__input"
        );
        let switchCoreElement = liElement.querySelector(
          ".pops-panel-switch__core"
        );
        let switched = Boolean(formConfig.getValue());
        setSwitchChecked(switchElement, switchInputElement, switched);
        popsUtils.jQuery.on(
          switchCoreElement,
          "click",
          undefined,
          function (event) {
            let checkedValue = false;
            if (
              !switchElement.classList.contains("pops-panel-switch-is-checked")
            ) {
              checkedValue = true;
            }
            setSwitchChecked(switchElement, switchInputElement, checkedValue);
            if (typeof formConfig.callback === "function") {
              formConfig.callback(event, checkedValue);
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
      getSectionContainerItem_slider(formConfig) {
        let liElement = document.createElement("li");
        liElement.__formConfig__ = formConfig;
        if (formConfig.className) {
          liElement.className = formConfig.className;
        }
        this.addElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        liElement.innerHTML = `
        <div>
          ${formConfig.text}
        </div>
        <div class="pops-panel-slider">
          <input type="range" min="${formConfig.min}" max="${formConfig.max}"}>
        </div>
        `;
        /**
         * @type {HTMLInputElement}
         */
        let rangeInputElement = liElement.querySelector(
          ".pops-panel-slider input[type=range]"
        );
        if (formConfig.step) {
          rangeInputElement.setAttribute("step", formConfig.step);
        }
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
            return value;
          }
        };
        let tooltip = pops.tooltip({
          target: rangeInputElement.parentElement,
          content: getToolTipContent(rangeInputElement.value),
          zIndex: 1000000,
          className: "github-tooltip",
          triggerShowEventCallBack(toolTipNode) {
            toolTipNode.querySelector("div").innerText = getToolTipContent(
              rangeInputElement.value
            );
          },
          alwaysShow: false,
          only: false,
          position: "top",
          otherDistance: 0,
        });
        popsUtils.jQuery.on(
          rangeInputElement,
          ["input", "propertychange"],
          undefined,
          function (event) {
            tooltip.toolTipNode.querySelector("div").innerText =
              getToolTipContent(rangeInputElement.value);
            if (typeof formConfig.callback === "function") {
              formConfig.callback(event, event.target.value);
            }
          }
        );
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ==> input
       * @param {PopsPanelInputDetails} formConfig
       * @returns
       */
      getSectionContainerItem_input(formConfig) {
        function setCircleClearIconSVG(targetElement, inputElement) {
          targetElement.innerHTML = pops.config.iconSVG.circleClose;
          popsUtils.jQuery.on(targetElement, "click", undefined, function () {
            /* 清空内容 */
            inputElement.value = "";
            targetElement.innerHTML = "";
            inputElement.focus();
            /* 主动触发事件 */
            inputElement.dispatchEvent(new Event("input"));
          });
        }
        let liElement = document.createElement("li");
        liElement.__formConfig__ = formConfig;
        if (formConfig.className) {
          liElement.className = formConfig.className;
        }
        this.addElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        liElement.innerHTML = `
        <div>
          ${formConfig.text}
        </div>
        <div class="pops-panel-input">
          <input type="${
            formConfig.isPassword ? "password" : "text"
          }" placeholder="${formConfig.placeholder}">
        </div>
        `;
        let inputElement = liElement.querySelector("input");
        inputElement.value = formConfig.getValue();
        let iconElement = document.createElement("span");
        iconElement.className = "pops-panel-input__suffix";
        iconElement.innerHTML = `
        <span class="pops-panel-input__suffix-inner">
          <i class="pops-panel-icon"></i>
        </span>
        `;
        let isView = true;
        let iElement = iconElement.querySelector("i.pops-panel-icon");
        /* 如果是密码框，放进图标 */
        if (formConfig.isPassword) {
          iElement.innerHTML = pops.config.iconSVG.view;
          popsUtils.jQuery.on(iElement, "click", undefined, function () {
            iElement.innerHTML = "";
            if (isView) {
              isView = false;
              /* 显示输入框内容，且更换图标为隐藏图标 */
              inputElement.setAttribute("type", "text");
              iElement.innerHTML = pops.config.iconSVG.hide;
            } else {
              isView = true;
              /* 隐藏输入框内容，且更换图标为显示图标 */
              inputElement.setAttribute("type", "password");
              iElement.innerHTML = pops.config.iconSVG.view;
            }
          });
        }
        /* 先判断预设值是否为空，不为空添加清空图标按钮 */
        if (inputElement.value != "" && !formConfig.isPassword) {
          setCircleClearIconSVG(iElement, inputElement);
        }
        /* 监听内容改变 */
        popsUtils.jQuery.on(
          inputElement,
          ["input", "propertychange"],
          undefined,
          function (event) {
            if (!formConfig.isPassword) {
              if (event.target.value !== "" && iElement.innerHTML === "") {
                /* 不为空，显示清空图标 */
                setCircleClearIconSVG(iElement, inputElement);
              } else if (event.target.value === "") {
                iElement.innerHTML = "";
              }
            }
            if (typeof formConfig.callback === "function") {
              formConfig.callback(event, event.target.value);
            }
          }
        );

        inputElement.parentElement.appendChild(iconElement);
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
        liElement.__formConfig__ = formConfig;
        if (formConfig.className) {
          liElement.className = formConfig.className;
        }
        this.addElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        liElement.innerHTML = `
        <div>
          ${formConfig.text}
        </div>
        <div class="pops-panel-textarea">
          <textarea placeholder="${formConfig.placeholder}">
          </textarea>
        </div>
        `;
        /**
         * @type {HTMLTextAreaElement}
         */
        let textAreaElement = liElement.querySelector(
          ".pops-panel-textarea textarea"
        );
        textAreaElement.value = formConfig.getValue();
        /* 监听内容改变 */
        popsUtils.jQuery.on(
          textAreaElement,
          ["input", "propertychange"],
          undefined,
          function (event) {
            if (typeof formConfig.callback === "function") {
              formConfig.callback(event, event.target.value);
            }
          }
        );
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ==> select
       * @param {PopsPanelSelectDetails} formConfig
       * @returns
       */
      getSectionContainerItem_select(formConfig) {
        let liElement = document.createElement("li");
        liElement.__formConfig__ = formConfig;
        if (formConfig.className) {
          liElement.className = formConfig.className;
        }
        this.addElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        liElement.innerHTML = `
        <div>
          ${formConfig.text}
        </div>
        <div class="pops-panel-select">
          <select>

          </select>
        </div>
        `;

        let selectElement = liElement.querySelector(
          ".pops-panel-select select"
        );
        let defaultValue = formConfig.getValue();

        formConfig.data.forEach((item) => {
          let optionElement = document.createElement("option");
          optionElement.__value__ = item.value;
          if (item.value === defaultValue) {
            optionElement.setAttribute("selected", true);
          }
          optionElement.innerText = item.text;
          selectElement.appendChild(optionElement);
        });
        /* 监听选择内容改变 */
        popsUtils.jQuery.on(
          selectElement,
          "change",
          undefined,
          function (event) {
            if (typeof formConfig.callback === "function") {
              /**
               * @type {HTMLOptionElement}
               */
              let isSelectedElement = event.target[event.target.selectedIndex];
              let isSelectedValue = isSelectedElement.__value__;
              let isSelectedText =
                isSelectedElement.innerText || isSelectedElement.textContent;
              formConfig.callback(event, isSelectedValue, isSelectedText);
            }
          }
        );
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
        liElement.__formConfig__ = formConfig;
        if (formConfig.className) {
          liElement.className = formConfig.className;
        }
        this.addElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        let iconHTML = "";
        let hasIconSVG = false;
        if (
          typeof formConfig.buttonIcon === "string" &&
          formConfig.buttonIcon.trim() !== ""
        ) {
          hasIconSVG = true;
          iconHTML = `
          <i class="pops-bottom-icon" is-loading="${Boolean(
            formConfig.buttonIconIsLoading
          )}">
            ${
              formConfig.buttonIcon in pops.config.iconSVG
                ? pops.config.iconSVG[formConfig.buttonIcon]
                : formConfig.buttonIcon
            }
          </i>`;
        }
        let buttonText = formConfig.buttonText;
        if (typeof formConfig.buttonText === "function") {
          buttonText = formConfig.buttonText();
        }
        let buttonHTML = `
        <button 
                type="${formConfig.buttonType}"
                data-icon="${hasIconSVG ? "true" : ""}"
                data-rightIcon="${Boolean(formConfig.buttonIsRightIcon)}"
        >
          ${iconHTML}
          <span>${buttonText}</span>
        </button>`;

        liElement.innerHTML = `
        <div>
          ${formConfig.text}
        </div>
        <div class="pops-panel-button">
          ${buttonHTML}
        </div>
        `;

        let buttonElement = liElement.querySelector("button");
        popsUtils.jQuery.on(
          buttonElement,
          "click",
          undefined,
          function (event) {
            if (typeof formConfig.callback === "function") {
              formConfig.callback(event);
            }
          }
        );

        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ===> own
       * @param {PopsPanelOwnDetails} formConfig
       * @returns
       */
      getSectionContainerItem_own(formConfig) {
        let liElement = document.createElement("li");
        liElement.__formConfig__ = formConfig;
        if (formConfig.className) {
          liElement.className = formConfig.className;
        }
        liElement = formConfig.getLiElementCallBack(liElement);
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * @param {PopsPanelSwitchDetails|PopsPanelSliderDetails|PopsPanelInputDetails|PopsPanelTextAreaDetails|PopsPanelSelectDetails|PopsPanelButtonDetails|PopsPanelOwnDetails} formConfig
       * @returns
       */
      getSectionContainerItem(formConfig) {
        if (formConfig["type"] === "switch") {
          return this.getSectionContainerItem_switch(formConfig);
        } else if (formConfig["type"] === "slider") {
          return this.getSectionContainerItem_slider(formConfig);
        } else if (formConfig["type"] === "input") {
          return this.getSectionContainerItem_input(formConfig);
        } else if (formConfig["type"] === "textarea") {
          return this.getSectionContainerItem_textarea(formConfig);
        } else if (formConfig["type"] === "select") {
          return this.getSectionContainerItem_select(formConfig);
        } else if (formConfig["type"] === "button") {
          return this.getSectionContainerItem_button(formConfig);
        } else if (formConfig["type"] === "own") {
          return this.getSectionContainerItem_own(formConfig);
        } else {
          console.error("尚未实现的type类型", formConfig);
        }
      },

      /**
       * 为左侧容器元素添加点击事件
       * @param {HTMLElement} asideLiElement 左侧的容器<li>元素
       * @param {{
       * id: string,
       * title: string,
       * headerTitle?: string,
       * isDefault?: boolean | undefined,
       * attributes?: any[] | undefined,
       * forms: PopsPanelFormsDetailsArray,
       * }} asideConfig 配置
       */
      setAsideItemClickEvent(asideLiElement, asideConfig) {
        let that = this;
        popsUtils.jQuery.on(asideLiElement, "click", undefined, function () {
          that.clearContainer();
          that.clearAsideItemIsVisited();
          that.setAsideItemIsVisited(asideLiElement);
          let containerHeaderTitleLIElement = document.createElement("li");
          containerHeaderTitleLIElement.__asideConfig__ = asideConfig;
          containerHeaderTitleLIElement.innerHTML =
            asideConfig.headerTitle || asideConfig.title;
          that.sectionContainerHeaderULElement.appendChild(
            containerHeaderTitleLIElement
          );
          /**
           * @type {PopsPanelFormsDetailsArray}
           */
          let __forms__ = asideLiElement.__forms__;
          __forms__.forEach((formConfig) => {
            if (formConfig["type"] === "forms") {
              /**
               * @type {PopsPanelFormsDetailsArray}
               */
              let childForms = formConfig["forms"];

              let formContainerElement = document.createElement("li");
              let formContainerULElement = document.createElement("ul");
              formContainerElement.className =
                "pops-panel-forms-container-item";
              formContainerElement.innerHTML = `<div>${formConfig["text"]}</div>`;
              if (formConfig.className) {
                formContainerElement.classList.add(formConfig.className);
              }
              that.addElementAttributes(
                formContainerElement,
                formConfig.attributes
              );
              that.setElementProps(formContainerElement, formConfig.props);
              childForms.forEach((childFormConfig) => {
                let element = that.getSectionContainerItem(childFormConfig);
                if (element) {
                  formContainerULElement.appendChild(element);
                }
              });
              formContainerElement.appendChild(formContainerULElement);
              that.sectionContainerULElement.appendChild(formContainerElement);
            } else {
              let itemLiElement = that.getSectionContainerItem(formConfig);
              /* 如果成功创建，加入到中间容器中 */
              if (itemLiElement) {
                that.sectionContainerULElement.appendChild(itemLiElement);
              }
            }
          });
        });
      },
    };

    HandleContetDetails.init();

    PopsHandler.handlePush(PopsType, {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
    });
    /* 拖拽 */
    if (config.drag) {
      popsUtils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(popsElement).position,
        top: getComputedStyle(popsElement).top,
        left: getComputedStyle(popsElement).left,
        limit: true,
      });
    }
    return PopsHandler.handleResultDetails(eventDetails);
  };
  return pops;
});
