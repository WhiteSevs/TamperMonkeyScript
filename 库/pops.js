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
     * @returns {HTMLElement[]}
     */
    parseTextToDOM(elementString) {
      elementString = elementString
        .replace(/^[\n|\s]*/g, "")
        .replace(/[\n|\s]*$/g, ""); /* 去除前后的换行和空格 */
      let targetElement = document.createElement("div");
      targetElement.innerHTML = elementString;
      let targetElementList = [];
      targetElement.childNodes.forEach((item, index) => {
        if (item.nodeName !== "#text") {
          targetElementList.push(item);
        }
      });
      return targetElementList;
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
        if (item instanceof HTMLElement) {
          target.appendChild(item);
        }
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
    jQuery: {
      /**
       * jQuery中的on绑定事件
       * @param {HTMLElement} element 需要绑定的元素
       * @param {String|Array} eventType 需要监听的事件
       * @param {HTMLElement?} selector 子元素选择器
       * @param {Function} callback 事件触发的回调函数
       * @param {Boolean} capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
       * @param {Boolean} once 表示事件是否只触发一次。默认为false
       * @param {Boolean} passive 表示事件监听器是否不会调用preventDefault()。默认为false
       * @returns {DOMUtils} - 原型链
       * @function
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
        var eventTypeList = [];
        if (Array.isArray(eventType)) {
          eventTypeList = eventType;
        } else if (typeof eventType === "string") {
          eventTypeList = eventType.split(" ");
        }
        eventTypeList.forEach((_eventType_) => {
          if (selector) {
            element.addEventListener(
              _eventType_,
              function (event) {
                var target = event.target;
                while (target && target !== element) {
                  if (target.matches(selector)) {
                    callback.call(target, event);
                  }
                  target = target.parentNode;
                }
              },
              capture,
              once,
              passive
            );
          } else {
            element.addEventListener(
              _eventType_,
              callback,
              capture,
              once,
              passive
            );
          }
        });

        if (callback && callback.delegate) {
          element.setAttribute("data-delegate", selector);
        }

        var events = element.events || {};
        events[eventType] = events[eventType] || [];
        events[eventType].push({
          selector: selector,
          callback: callback,
        });
        element.events = events;

        return this;
      },
      /**
       * jQuery中的off取消绑定事件
       * @param {HTMLElement} element 需要取消绑定的元素
       * @param {String|Array} eventType 需要取消监听的事件
       * @param {HTMLElement} selector 子元素选择器
       * @param {Function} callback 事件触发的回调函数
       * @param {Boolean} useCapture 表示事件是否在捕获阶段处理，它是一个可选参数，默认为false，表示在冒泡阶段处理事件。
       * 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
       * @returns
       */
      off(element, eventType, selector, callback, useCapture = false) {
        let that = this;
        var events = element.events || {};
        if (!eventType) {
          for (var type in events) {
            that.off(element, type, null, null, useCapture);
          }
          return;
        }
        if (Array.isArray(eventType)) {
          eventType.forEach(function (type) {
            that.off(element, type, selector, callback, useCapture);
          });
          return;
        }
        var handlers = events[eventType] || [];
        for (var i = 0; i < handlers.length; i++) {
          if (
            (!selector || handlers[i].selector === selector) &&
            (!callback || handlers[i].callback === callback)
          ) {
            element.removeEventListener(
              eventType,
              handlers[i].callback,
              useCapture
            );
            handlers.splice(i--, 1);
          }
        }
        if (handlers.length === 0) {
          delete events[eventType];
        }
        element.events = events;
      },
      /**
       * 主动触发事件
       * @param {HTMLElement} element 需要触发的元素
       * @param {String|Array} eventType 需要触发的事件
       * @returns
       */
      trigger(element, eventType) {
        let that = this;
        var events = element.events || {};
        if (!eventType) {
          for (var type in events) {
            that.trigger(element, type);
          }
          return;
        }
        if (Array.isArray(eventType)) {
          eventType.forEach(function (type) {
            that.trigger(element, type);
          });
          return;
        }
        var event = document.createEvent("HTMLEvents");
        event.initEvent(eventType, true, false);
        element.dispatchEvent(event);
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
        var styles = window.getComputedStyle(element);
        return (
          element.clientWidth -
          parseFloat(styles.paddingLeft) -
          parseFloat(styles.paddingRight)
        );
      },
      /**
       * 获取元素的高度
       * @param {HTMLElement} element - 要获取高度的元素
       * @returns {Number} - 元素的高度，单位为像素
       */
      height(element) {
        var styles = window.getComputedStyle(element);
        return (
          element.clientHeight -
          parseFloat(styles.paddingTop) -
          parseFloat(styles.paddingBottom)
        );
      },
      /**
       * 获取元素的外部宽度（包括边框和外边距）
       * @param {HTMLElement} element - 要获取外部宽度的元素
       * @returns {Number} - 元素的外部宽度，单位为像素
       */
      outerWidth(element) {
        var style = getComputedStyle(element, null);
        return (
          element.offsetWidth +
          parseFloat(style.marginLeft) +
          parseFloat(style.marginRight)
        );
      },
      /**
       * 获取元素的外部高度（包括边框和外边距）
       * @param {HTMLElement} element - 要获取外部高度的元素
       * @returns {Number} - 元素的外部高度，单位为像素
       */
      outerHeight(element) {
        var style = getComputedStyle(element, null);
        return (
          element.offsetHeight +
          parseFloat(style.marginTop) +
          parseFloat(style.marginBottom)
        );
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
    version: "2023.11.15",
    css: `@charset "utf-8";
    .pops{overflow:hidden;border:1px solid rgba(0,0,0,.2);border-radius:5px;background-color:#fff;box-shadow:0 5px 15px rgb(0 0 0 / 50%);transition:all .35s;}
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
    .pops button{float:right;display:inline-block;margin:0 5px;padding:6px 12px;outline:0;border:1px solid transparent;border-radius:5px;background-color:transparent;box-shadow:none;font-weight:400;font-size:14px;line-height:1.45;cursor:pointer;transition:all .3s ease-in-out;}
    .pops button[type=primary]{border-color:#2e6da4;background-color:#337ab7;color:#fff;}
    .pops button[type=primary]:hover{border-color:#2886d8;background-color:#378ad1;}
    .pops button[type=default]{border-color:#ccc;background-color:#fff;color:#333;}
    .pops button[type=default]:hover{border-color:#a6a6a6;background-color:#fafafa;}
    .pops button[type=success]{border-color:#4cae4c;background-color:#5cb85c;color:#fff;}
    .pops button[type=success]:hover{border-color:#45cc45;background-color:#4dcb4d;}
    .pops button[type=info]{border-color:#46b8da;background-color:#5bc0de;color:#fff;}
    .pops button[type=info]:hover{background-color:#23acd5;}
    .pops button[type=xiaomi-primary]{background-color:#ff5c00;color:#fff;}
    .pops button[type=xiaomi-primary]:hover{background-color:#ff7e29;}
    .pops ::-webkit-scrollbar{width:6px;height:0;}
    .pops ::-webkit-scrollbar-track{width:0;}
    .pops ::-webkit-scrollbar-thumb{min-height:28px;border-radius:2em;background-color:#999;background-clip:padding-box;}
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
    .pops[type-value=loading]{position:absolute;top:272.5px;top:50%;left:26px;left:50%;display:flex;overflow:hidden;padding:10px 15px;max-width:100%;max-height:100%;min-width:0;min-height:0;border:1px solid rgba(0,0,0,.2);border-radius:5px;background-color:#fff;box-shadow:0 0 5px rgb(0 0 0 / 50%);vertical-align:middle;font-size:18px;transition:all .35s;transform:translate(-50%,-50%);user-select:none;flex-direction:column;align-items:center;justify-content:center;align-content:center;}
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
    0%{opacity:1;transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
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
    .pops[type-value] .pops-alert-title,.pops[type-value] .pops-confirm-title,.pops[type-value] .pops-drawer-title,.pops[type-value] .pops-iframe-title,.pops[type-value] .pops-prompt-title{display: flex;align-items: center;justify-content: space-between;}
    .pops-header-controls button.pops-header-control[type=close],.pops-header-controls button.pops-header-control[type=max],.pops-header-controls button.pops-header-control[type=min]{position:relative;float:right;margin:0 2px;width:15px;height:15px;outline:0!important;border:0;border-color:#888;background-color:transparent;color:#888;cursor:pointer;transition:all .3s ease-in-out;}
    .pops-header-controls button.pops-header-control[type=close]:before{transform:rotate(-45deg);}
    .pops-header-controls button.pops-header-control[type=close]:after{transform:rotate(45deg);}
    .pops-header-controls button.pops-header-control[type=close]:after,.pops-header-controls button.pops-header-control[type=close]:before{position:absolute;top:8px;left:2px;display:block;width:inherit;border-top:2.3px solid;content:" ";}
    .pops-header-controls button.pops-header-control[type=min]:after,.pops-header-controls button.pops-header-control[type=min]:before{display:block;}
    .pops-header-controls button.pops-header-control[type=min]:after{position:absolute;top:9px;left:5px;width:10px;border-bottom:2px solid;content:" ";}
    .pops-header-controls button.pops-header-control[type=max]:after,.pops-header-controls button.pops-header-control[type=max]:before{display:block;}
    .pops-header-controls button.pops-header-control[type=max]:after{position:absolute;top:4px;left:3px;box-sizing:initial;width:12px;height:8px;border:1px solid;border-top:2px solid;content:" ";}
    .pops-header-controls[type=max] button.pops-header-control[type=max]:before{position:absolute;top:2px;left:4px;box-sizing:initial;width:14px;height:11px;border-top:1px solid;border-right:1px solid;content:" ";}
    .pops-tip{position:absolute;padding:13px;max-width:400px;max-height:300px;border-radius:2px;background-color:#fff;box-shadow:0 1.5px 4px rgba(0,0,0,.24),0 1.5px 6px rgba(0,0,0,.12);color:#4e4e4e;font-size:14px;}
    .pops-tip .pops-tip-arrow{position:absolute;top:100%;left:25%;overflow:hidden;width:50px;height:12.5px;transform:translateX(-50%);}
    .pops-tip .pops-tip-arrow::after{position:absolute;top:0;left:50%;width:12px;height:12px;background:#fff;box-shadow:0 1px 7px rgba(0,0,0,.24),0 1px 7px rgba(0,0,0,.12);content:"";transform:translateX(-50%) translateY(-50%) rotate(45deg);}
    .pops-tip .pops-tip-arrow[data-position=bottom]{position:absolute;top:100%;left:25%;overflow:hidden;width:50px;height:12.5px;transform:translateX(-50%);}
    .pops-tip .pops-tip-arrow[data-position=bottom]:after{position:absolute;top:0;left:50%;width:12px;height:12px;background:#fff;box-shadow:0 1px 7px rgba(0,0,0,.24),0 1px 7px rgba(0,0,0,.12);content:"";transform:translateX(-50%) translateY(-50%) rotate(45deg);}
    .pops-tip .pops-tip-arrow[data-position=left]{top:50%;left:-12.5px;width:12.5px;height:50px;transform:translateY(-50%);}
    .pops-tip .pops-tip-arrow[data-position=left]:after{position:absolute;top:50%;left:100%;content:"";}
    .pops-tip .pops-tip-arrow[data-position=right]{top:50%;right:-12.5px;left:auto;width:12.5px;height:50px;transform:translateY(-50%);}
    .pops-tip .pops-tip-arrow[data-position=right]:after{position:absolute;top:50%;left:0;content:"";}
    .pops-tip .pops-tip-arrow[data-position=top]{top:-12.5px;left:25%;transform:translateX(-50%);}
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
   * @returns {Boolean}
   */
  pops.isPhone = function () {
    return Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent));
  };

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
   * @typedef {object} PopsBtnDetails 按钮配置
   * @property {boolean} enable 是否启用
   * @property {string} [type=""] 按钮样式类型
   * @property {string} [text=""] 按钮文字
   * @property { PopsBtnCallBack } callback 按钮点击的回调
   */

  /**
   * @typedef {object} PopsPromptBtmDetails prompt的按钮配置
   * @property {boolean} enable 是否启用
   * @property {string} [type=""] 按钮样式类型
   * @property {string} [text=""] 按钮文字
   * @property { PopsPromptBtnCallBack } callback 按钮点击的回调
   */

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
     * type: "alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer",
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
        maskElement: popsUtils.parseTextToDOM(details.maskHTML)[0],
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
     * @param {"alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer"} type
     */
    handleQueryElement(animElement, type) {
      return {
        /**
         * @type {?HTMLElement}
         */
        popsElement: animElement.querySelector(".pops[type-value"),
        /**
         * @type {?HTMLElement}
         */
        btnOkElement: animElement.querySelector(`.pops-${type}-btn-ok`),
        /**
         * @type {?HTMLElement}
         */
        btnCancelElement: animElement.querySelector(`.pops-${type}-btn-cancel`),
        /**
         * @type {?HTMLElement}
         */
        btnOtherElement: animElement.querySelector(`.pops-${type}-btn-other`),
        /**
         * @type {?HTMLElement}
         */
        titleElement: animElement.querySelector(`.pops-${type}-title`),
        /**
         * @type {?HTMLTextAreaElement|HTMLInputElement}
         */
        inputElement: animElement.querySelector(
          `.pops-${type}-content textarea[pops]`
        )
          ? animElement.querySelector(`.pops-${type}-content textarea[pops]`)
          : animElement.querySelector(`.pops-${type}-content input[pops]`),
        /**
         * @type {?HTMLElement}
         */
        headerControlsElement: animElement.querySelector(
          ".pops-header-controls"
        ),
        /**
         * @type {?HTMLIFrameElement}
         */
        iframeElement: animElement.querySelector("iframe[pops]"),
        /**
         * @type {?HTMLElement}
         */
        loadingElement: animElement.querySelector(".pops-loading"),
        /**
         * @type {?HTMLElement}
         */
        contentElement: animElement.querySelector(`.pops-${type}-content`),
        /**
         * @type {?HTMLElement}
         */
        contentLoadingElement: animElement.querySelector(
          `.pops-${type}-content-global-loading`
        ),
        /**
         * @type {?HTMLElement}
         */
        headerMinBtnElement: animElement.querySelector(
          ".pops-header-control[type='min']"
        ),
        /**
         * @type {?HTMLElement}
         */
        headerMaxBtnElement: animElement.querySelector(
          ".pops-header-control[type='max']"
        ),
        /**
         * @type {?HTMLElement}
         */
        headerCloseBtnElement: animElement.querySelector(
          ".pops-header-control[type='close']"
        ),
      };
    },
    /**
     * 获取事件配置
     * @param {string} guid
     * @param {"alert"|"confirm"|"prompt"|"loading"|"iframe"|"drawer"} mode 当前弹窗类型
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
     * @param {"alert"|"confirm"|"prompt"|"loading"|"tooltip"|"iframe"|"drawer"} type 当前弹窗类型
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
     * @param {"alert"|"confirm"|"iframe"|"loading"|"prompt"|"drawer"} type
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
     * @param {"alert"|"confirm"|"iframe"|"prompt"|"drawer"} type
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
          topRightButtonHTML += `<button class="pops-header-control" type="${item}"></button>`;
        });
        resultHTML = `
        <div class="pops-header-controls">
            ${topRightButtonHTML}
          </div>`;
      } else {
        if (config.btn?.close?.enable) {
          closeHTML =
            '<div class="pops-header-controls"><button class="pops-header-control" type="close"></button></div>';
        }
        resultHTML = closeHTML;
      }

      return resultHTML;
    },
    /**
     * 获取底部按钮层HTML
     * @param {"alert"|"confirm"|"prompt"|"drawer"} type
     * @param {PopsAlertDetails|PopsConfirmDetails|PopsPromptDetails|PopsDrawerDetails} config
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
        okHTML = `<button class="pops-${type}-btn-ok" type="${config.btn.ok.type}">${config.btn.ok.text}</button>`;
      }
      if (config.btn?.cancel?.enable) {
        cancelHTML = `<button class="pops-${type}-btn-cancel" type="${config.btn.cancel.type}">${config.btn.cancel.text}</button>`;
      }
      if (config.btn?.other?.enable) {
        ohterHTML = `<button class="pops-${type}-btn-other" type="${config.btn.other.type}">${config.btn.other.text}</button>`;
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
     * @param {"alert"|"confirm"|"prompt"|"drawer"} type
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
      return popsUtils.parseTextToDOM(html)[0];
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
   *  ok: PopsBtnDetails,
   *  close: {
   *    enable: boolean,
   *    callback: (event: PopsBtnCallBackEvent)=>{}
   *  }
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {boolean} [only=false] 是否是唯一的弹窗，默认false
   * @property {string} [widths="350px"] 弹窗宽度，默认350px
   * @property {string} [heights="200px"] 弹窗高度，默认200px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation="pops-anim-fadein-zoom"] 弹窗动画，默认pops-anim-fadein-zoom
   * @property {number} [zIndex=10000] 弹窗的显示层级，默认10000
   * @property {{
   * enable: boolean,
   * clickEvent: {
   *  toClose: boolean,
   *  toHide: boolean,
   * },
   * clickCallBack: (originalRun: Function,config: object)=>{}
   * }} mask 遮罩层，默认关闭
   * @property {boolean} [drag=false] 是否可以按钮标题栏进行拖拽，默认false
   * @property {boolean} [forbiddenScroll=false] 禁用页面滚动
   */

  /**
   * 普通信息框
   * @param {PopsAlertDetails} details 配置
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
          enable: true,
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
              : `<p pops style="${contentPStyle}}">${config.content.text}</p>`
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

    /* 创建到页面中 */
    popsUtils.appendChild(document.body, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    this.config.layer.alert.push({
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
   *  ok: PopsBtnDetails,
   *  cancel: PopsBtnDetails,
   *  other: PopsBtnDetails,
   *  close: {
   *    enable: boolean,
   *    callback: (event: PopsBtnCallBackEvent)=>{}
   *  }
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {boolean} [only=false] 是否是唯一的弹窗，默认false
   * @property {string} [width="350px"] 弹窗宽度，默认350px
   * @property {string} [height="200px"] 弹窗高度，默认200px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation="pops-anim-fadein-zoom"] 弹窗动画，默认pops-anim-fadein-zoom
   * @property {number} [zIndex=false] 弹窗的显示层级，默认10000
   * @property {{
   *  enable: boolean,
   *  clickEvent: {
   *    toClose: boolean,
   *    toHide: boolean,
   *  },
   * clickCallBack: (originalRun: Function)=>{}
   * }} mask 遮罩层，默认关闭
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
          text: "确定",
          type: "primary",
          callback(event) {
            event.close();
          },
        },
        cancel: {
          enable: true,
          text: "关闭",
          type: "default",
          callback(event) {
            event.close();
          },
        },
        other: {
          enable: false,
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
            : `<p pops style="${contentPStyle}}">${config.content.text}</p>`
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
    this.config.layer.confirm.push({
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
   *  close: {
   *    enable: boolean,
   *    callback: (event: PopsPromptBtnCallBackEvent)=>{}
   *  }
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {boolean} [only=false] 是否是唯一的弹窗，默认false
   * @property {string} [width="350px"] 弹窗宽度，默认350px
   * @property {string} [[height="200px"] 弹窗高度，默认200px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation="pops-anim-fadein-zoom"] 弹窗动画
   * @property {number} [zIndex=10000] 弹窗的显示层级，默认10000
   * @property { {
   *  enable: boolean,
   *  clickEvent: {
   *    toClose: boolean,
   *    toHide: boolean,
   *  },
   * clickCallBack: (originalRun: Function)=>{}
   * } } mask 遮罩层，默认关闭
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
          text: "确定",
          type: "success",
          callback(event) {
            event.close();
          },
        },
        cancel: {
          enable: true,
          text: "关闭",
          type: "default",
          callback(event) {
            event.close();
          },
        },
        other: {
          enable: false,
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
    this.config.layer.prompt.push({
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
   * @property { {
   *  enable: boolean,
   *  clickEvent: {
   *    toClose: boolean,
   *    toHide: boolean,
   *  },
   * clickCallBack: (originalRun: Function)=>{}
   * } } mask 遮罩层，默认关闭
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
   *  close: {
   *    callback: (event: PopsBtnIframeCallBackEvent)=>{}
   *  }
   * }} btn 按钮配置
   * @property {string} [class=""] 自定义className
   * @property {?string} url 地址，默认为window.location.href
   * @property {boolean} [only="false"] 是否是唯一的弹窗，默认false
   * @property {string} [width="300px"] 弹窗宽度，默认300px
   * @property {string} [height="250px"] 弹窗高度，默认250px
   * @property {"top_left"|"top"|"top_right"|"center_left"|"center"|"center_right"|"bottom_left"|"bottom"|"bottom_right"} [position="center"] 弹窗位置，默认center
   * @property {string} [animation=""pops-anim-fadein-zoom""] 弹窗动画，默认pops-anim-fadein-zoom
   * @property {number} [zIndex=10000] 弹窗的显示层级，默认10000
   * @property {{
   * enable: boolean,
   * clickEvent: {
   *  toClose: boolean,
   *  toHide:boolean,
   * },
   * clickCallBack: (originalRun: Function)=>{}
   * }} mask 遮罩层，默认关闭
   * @property {boolean} [drag=false] 是否可以按钮标题栏进行拖拽，默认false
   * @property {string} [topRightButton="min|max|close"] 右上角按钮顺序：最小化、最大化、关闭
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
      topRightButton: "min|max|close",
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
      headerCloseBtnElement: btnCloseElement,
      headerControlsElement: controlsElement,
      titleElement,
      iframeElement,
      loadingElement,
      contentLoadingElement,
      headerMinBtnElement: minElement,
      headerMaxBtnElement: maxElement,
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
    this.config.layer.iframe.push({
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
    minElement?.addEventListener("click", (event) => {
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
    maxElement?.addEventListener("click", (event) => {
      popsElement.style.transitionDuration = "";
      if (controlsElement.getAttribute("type") === "max") {
        /* 恢复 */
        popsElement.style.left = normalLeft;
        controlsElement.removeAttribute("type");
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
      } else {
        /* 最大 */
        normalLeft = popsElement.style.left;
        popsElement.removeAttribute("type-module");
        popsElement.setAttribute("type-module", "max");
        controlsElement.setAttribute("type", "max");
      }
      config.btn.max.callback(event);
    });
    btnCloseElement?.addEventListener("click", (event) => {
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
   * @property {string} [content=""] 显示的文字
   * @property {"left"|"right"|"top"|"bottom"|"center"} [location="top"] 位置，默认top
   * @property {string} [className=""] 自定义className
   * @property {string} [triggerShowEventName="mouseenter"] 触发显示事件的名称，默认mouseenter
   * @property {string} [triggerCloseEventName="mouseleave"] 触发关闭事件的名称，默认mouseleave
   * @property {Function} triggerShowEventCallBack 触发显示事件的回调
   * @property {Function} triggerCloseEventCallBack 触发关闭事件的回调
   * @property {number} [arrowHeight=25/2] 提示高度，默认12.5
   *
   */
  /**
   * 提示框
   * @param {PopsToolTipDetails} details
   * @returns {{
   * guid: string,
   * config: PopsToolTipDetails,
   * off: Function,
   * on: Function,
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
      location: "top",
      className: "",
      triggerShowEventName: "mouseenter",
      triggerCloseEventName: "mouseleave",
      triggerShowEventCallBack: function () {},
      triggerCloseEventCallBack: function () {},
      arrowHeight: 25 / 2,
    };
    config = popsUtils.assignJSON(config, details);
    if (!(config.target instanceof HTMLElement)) {
      throw "config.target 必须是HTMLElement类型";
    }
    let guid = popsUtils.getRandomGUID();
    const PopsType = "tooltip";
    /**
     * 获取相应的元素
     */
    function getToolTipNodeJSON() {
      let _toolTipHTML_ = `<div class="pops-tip ${config.className}" data-guid="${guid}">${config.content}</div>`;
      let _toolTipNode_ = popsUtils.parseTextToDOM(_toolTipHTML_)[0];
      /* 箭头 */
      let _toolTipArrowHTML_ = '<div class="pops-tip-arrow"></div>';
      let _toolTipArrowNode_ = popsUtils.parseTextToDOM(_toolTipArrowHTML_)[0];
      _toolTipNode_.appendChild(_toolTipArrowNode_);
      return {
        toolTipNode: _toolTipNode_,
        toolTipHTML: _toolTipHTML_,
        toolTipArrowHTML: _toolTipArrowHTML_,
        toolTipArrowNode: _toolTipArrowNode_,
      };
    }
    config.location = config.location.toLowerCase();
    let toolTipNodeJSON = getToolTipNodeJSON();
    let toolTipNode = toolTipNodeJSON.toolTipNode;
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
    function endEvent() {
      /* 即使存在动画属性，但是当前设置的动画Out结束后移除元素 */
      if (toolTipNode.getAttribute("data-motion").includes("In")) {
        return;
      }
      toolTipNode.remove();
    }
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
    /**
     * 设置 提示框的位置
     * @param {object} positionDetails
     */
    function setToolTipPosition(positionDetails) {
      let positionDetail = positionDetails[config.location.toUpperCase()];
      if (positionDetail) {
        toolTipNode.style.left = positionDetail.left + "px";
        toolTipNode.style.top = positionDetail.top + "px";
        toolTipNode.setAttribute("data-motion", positionDetail.motion);
        toolTipNode
          .querySelector(".pops-tip-arrow")
          .setAttribute("data-position", positionDetail.arrow);
      } else {
        console.error("不存在该位置", config.location);
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
            popsUtils.jQuery.outerWidth(config.target) / 2 -
            popsUtils.jQuery.width(config.target) * 0.2 -
            config.arrowHeight,
          top:
            popsUtils.jQuery.offset(config.target).top -
            popsUtils.jQuery.outerHeight(toolTipNode) -
            config.arrowHeight,
          arrow: "bottom",
          motion: "fadeInTop",
        },
        RIGHT: {
          left:
            popsUtils.jQuery.offset(config.target).left +
            popsUtils.jQuery.outerWidth(config.target) +
            config.arrowHeight,
          top:
            popsUtils.jQuery.offset(config.target).top +
            popsUtils.jQuery.outerHeight(config.target) / 2 -
            popsUtils.jQuery.outerHeight(toolTipNode) / 2,
          arrow: "left",
          motion: "fadeInRight",
        },
        BOTTOM: {
          left:
            popsUtils.jQuery.offset(config.target).left +
            popsUtils.jQuery.outerWidth(config.target) / 2 -
            popsUtils.jQuery.width(toolTipNode) * 0.2 -
            config.arrowHeight,
          top:
            popsUtils.jQuery.offset(config.target).top +
            popsUtils.jQuery.outerHeight(config.target) +
            config.arrowHeight,
          arrow: "top",
          motion: "fadeInBottom",
        },
        LEFT: {
          left:
            popsUtils.jQuery.offset(config.target).left -
            popsUtils.jQuery.outerWidth(toolTipNode) -
            config.arrowHeight,
          top:
            popsUtils.jQuery.offset(config.target).top +
            popsUtils.jQuery.outerHeight(config.target) / 2 -
            popsUtils.jQuery.outerHeight(toolTipNode) / 2,
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
      config.triggerShowEventCallBack.bind(
        config.triggerShowEventCallBack,
        this.arguments
      );
    };
    /**
     * 关闭提示框
     */
    let closeToolTipNode = function () {
      toolTipNode.setAttribute(
        "data-motion",
        toolTipNode.getAttribute("data-motion").replace("fadeIn", "fadeOut")
      );
      config.triggerCloseEventCallBack.bind(
        config.triggerCloseEventCallBack,
        this.arguments
      );
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
    onShowEvent();
    onCloseEvent();
    return {
      guid: guid,
      config: config,
      off() {
        offShowEvent();
        offCloseEvent();
      },
      on() {
        onShowEvent();
        onCloseEvent();
      },
    };
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
   *  ok: PopsBtnDetails,
   *  cancel: PopsBtnDetails,
   *  other: PopsBtnDetails,
   *  close: {
   *    enable: boolean,
   *    callback: (event: PopsBtnCallBackEvent)=>{}
   *  }
   * }} btn 按钮配置
   * @property {{
   * enable: boolean,
   * clickEvent: {
   *  toClose: boolean,
   *  toHide:boolean,
   * },
   * clickCallBack: (originalRun: Function)=>{}
   * }} mask 遮罩层
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
          text: "确定",
          type: "primary",
          callback(event) {
            event.close();
          },
        },
        cancel: {
          enable: true,
          text: "关闭",
          type: "default",
          callback(event) {
            event.close();
          },
        },
        other: {
          enable: false,
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

  return pops;
});
