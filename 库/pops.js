(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      (global.pops = factory()));
})(this, function () {
  "use strict";

  if (typeof pops !== "undefined") {
    throw "全局变量pops已被注册";
  }

  const Utils = {
    /* 工具类 */
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
    parseTextToDOM(target) {
      /* 字符串转HTMLElement */
      target = target
        .replace(/^[\n|\s]*/g, "")
        .replace(/[\n|\s]*$/g, ""); /* 去除前后的换行和空格 */
      var objE = document.createElement("div");
      objE.innerHTML = target;
      var nodes = [];
      objE.childNodes.forEach((item, index) => {
        if (item.nodeName !== "#text") {
          nodes = [...nodes, item];
        }
      });
      return nodes;
    },
    guid() {
      /* 生成随机GUID */
      function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return (
        S4() +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        S4() +
        S4()
      );
    },
    appendChild(target, source) {
      /* 元素后追加元素 */
      source.forEach((item) => {
        if (item instanceof HTMLElement) {
          target.appendChild(item);
        }
      });
    },
    configRemove(targets, guid, removeAll = false) {
      /* 删除配置中对应的对象 */
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
    hide(source, guid, config) {
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
    },
    show(source, guid, config) {
      /* 显示 */
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
    },
    close(source, guid, config) {
      Utils.configRemove([source], guid);
    },
    getPopsMaxZIndex(defaultValue) {
      /* 获取所有弹窗中的最大的z-index */
      var maxZIndex = 0;
      var maxZIndexElement = null;

      Object.keys(pops.config.layer).forEach((item) => {
        pops.config.layer[item].forEach((item2) => {
          var itemZIndex = parseInt(
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
    drag(moveELement, options) {
      /* 来自:https://greasyfork.org/zh-CN/scripts/412159-mydrag
       * 因该方法存在bug，比如该元素存在transform的时候拖拽有问题
       */
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
              var maxZIndexInfo = Utils.getPopsMaxZIndex();

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
              var _this = this;
              window.addEventListener("resize", () => {
                _this.maxTop =
                  Math.max(
                    _this.maxContainer.clientHeight,
                    _this.maxContainer.scrollHeight
                  ) -
                  _this.drag.offsetHeight +
                  _this.maxContainer.offsetTop +
                  _this.transformTop;
                _this.maxLeft =
                  Math.max(
                    _this.maxContainer.clientWidth,
                    _this.maxContainer.scrollWidth
                  ) -
                  _this.drag.offsetWidth +
                  _this.maxContainer.offsetLeft +
                  _this.transformLeft;
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
      new MyDrag(moveELement, options);
    },
    inArray(target, source) {
      var result = -1;
      source.forEach((item, index) => {
        if (item === target) {
          result = index;
          return;
        }
      });
      return result;
    },
    upperElements(el) {
      /* 检测元素是否在其它元素下面，在的话获取z-index，不在就null */
      console.log(el);
      var top = el.getBoundingClientRect().top,
        left = el.getBoundingClientRect().left,
        width = el.getBoundingClientRect().width,
        height = el.getBoundingClientRect().height,
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
        elemTL != el &&
        elemTL != null &&
        Utils.inArray("pops-mask", elemTL.classList) === -1 &&
        Utils.inArray("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemTL);
      }
      if (
        elemTR != el &&
        Utils.inArray(elemTR, elemsUpper) === -1 &&
        elemTR != null &&
        Utils.inArray("pops-mask", elemTR.classList) === -1 &&
        Utils.inArray("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemTR);
      }

      if (
        elemBL != el &&
        Utils.inArray(elemBL, elemsUpper) === -1 &&
        elemBL != null &&
        Utils.inArray("pops-mask", elemBL.classList) === -1 &&
        Utils.inArray("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemBL);
      }

      if (
        elemBR != el &&
        Utils.inArray(elemBR, elemsUpper) === -1 &&
        elemBR != null &&
        Utils.inArray("pops-mask", elemBR.classList) === -1 &&
        Utils.inArray("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemBR);
      }

      if (
        elemCENTER != el &&
        Utils.inArray(elemCENTER, elemsUpper) === -1 &&
        elemCENTER != null &&
        Utils.inArray("pops-mask", elemCENTER.classList) === -1 &&
        Utils.inArray("pops-loading", elemTL.classList) === -1
      ) {
        elemsUpper.push(elemCENTER);
      }
      return elemsUpper;
    },
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
  };

  var pops = {};
  pops.config = {
    version: "0.0.4",
    css: `@charset "utf-8";
			.pops{
				transition: all .35s;
				overflow: hidden;
				background-color: #fff;
				border-radius: 5px;
				box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
				border: 1px solid rgba(0,0,0,.2);
			}
			.pops * {
				box-sizing: border-box;
				-webkit-tap-highlight-color: rgba(0,0,0,0);
				margin: 0;
				padding: 0;
			}
      .pops-anim{
        position: fixed;
        width: 100%;
        height: 100%;
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
			.pops[position="top_left"]{
				position: fixed;
				left: 0;
				top: 0;
			}
			.pops[position="top"]{
				position: fixed;
				left: 50%;
				top: 0;
				transform: translateX(-50%);
			}
			.pops[position="top_right"]{
				position: fixed;
				right: 0;
				top: 0;
			}
			.pops[position="center_left"]{
				position: fixed;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
			.pops[position="center"]{
				position: fixed;
				top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
			}
			.pops[position="center_right"]{
				position: fixed;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
			.pops[position="bottom_left"]{
				position: fixed;
				left: 0;
				bottom: 0;
			}
			.pops[position="bottom"]{
				position: fixed;
				left: 50%;
				bottom: 0;
				transform: translate(-50%, 0%);
			}
			.pops[position="bottom_right"]{
				position: fixed;
				right: 0;
				bottom: 0;
			}
      /* 按钮样式 */
      .pops button{
				float: right;
				outline: 0;
				display: inline-block;
				padding: 6px 12px;
				background-color: transparent;
				border: 1px solid transparent;
				border-radius: 5px;
				cursor: pointer;
				font-size: 14px;
				font-weight: 400;
				line-height: 1.45;
				margin: 0 5px;
				transition: all .3s ease-in-out;
        box-shadow: none;
			}
      .pops button[type="primary"]{
				color: #fff;
        background-color: #337ab7;
        border-color: #2e6da4;
			}
      .pops button[type="primary"]:hover{
        background-color: #378ad1;
        border-color: #2886d8;
      }
      .pops button[type="default"]{
        color: #333;
        background-color: #fff;
        border-color: #ccc;
			}
      .pops button[type="default"]:hover{
        background-color: #fafafa;
        border-color: #a6a6a6;
      }
      .pops button[type="success"]{
				color: #fff;
        background-color: #5cb85c;
        border-color: #4cae4c;
			}
      .pops button[type="success"]:hover{
        background-color: #4dcb4d;
        border-color: #45cc45;
      }
      .pops button[type="info"]{
        color: #fff;
        background-color: #5bc0de;
        border-color: #46b8da;
      }
      .pops button[type="info"]:hover{
        background-color: #23acd5;
      }
      .pops button[type="xiaomi-primary"]{
        background-color: #ff5c00;
        color: #fff;
      }
      .pops button[type="xiaomi-primary"]:hover{
        background-color: #ff7e29;
      }
      .pops button[type="xiaomi-default"]{

      }
      /* 按钮样式 */

      /* 滚动条样式 */
			.pops ::-webkit-scrollbar {
				width: 6px;
				height: 0
			}
			
			.pops ::-webkit-scrollbar-track {
				width: 0
			}
			
			.pops ::-webkit-scrollbar-thumb {
				background-color: #999;
				background-clip: padding-box;
				min-height: 28px;
				border-radius: 2em
			}
			/* 滚动条样式 */

			/* mask样式 */
			.pops-mask{
				width: 100%;
				height: 100%;
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				border: 0;
				background-color: rgba(0,0,0,.4);
				border-radius: 0;
				box-shadow: none;
				transition: none;
			}
			/* mask样式 */

			/* alert的样式 */
			.pops[type-value="alert"] .pops-alert-title{
				width: 100%;
				height: 55px;
				border-bottom: 1px solid #e5e5e5;
			}
			.pops[type-value="alert"] .pops-alert-title p[pops]{
				text-indent: 15px;
				font-size: 18px;
				line-height: 55px;
				font-weight: 500;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #333;
			}
			.pops[type-value="alert"] .pops-alert-content p[pops]{
				text-indent: 15px;
				font-size: 14px;
				padding: 5px 10px;
				color: #333;
			}
			.pops[type-value="alert"] .pops-alert-content{
				position: absolute;
				width: 100%;
				height: auto;
				top: 55px;
				bottom: 55px;
				overflow: auto;
				word-break: break-word;
			}
			.pops[type-value="alert"] .pops-alert-btn{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 55px;
				line-height: 55px;
				text-align: right;
				border-top: 1px solid #e5e5e5;
				padding: 10px 10px 10px 10px;
				display: flex;
				align-items: center;
			}
			/* alert的样式 */

      /* confirm样式 */
      .pops[type-value="confirm"] .pops-confirm-title{
				width: 100%;
				height: 55px;
				border-bottom: 1px solid #e5e5e5;
			}
      .pops[type-value="confirm"] .pops-confirm-title p[pops]{
				text-indent: 15px;
				font-size: 18px;
				line-height: 55px;
				font-weight: 500;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #333;
			}
			.pops[type-value="confirm"] .pops-confirm-content p[pops]{
				text-indent: 15px;
				font-size: 14px;
				padding: 5px 10px;
				color: #333;
			}
			.pops[type-value="confirm"] .pops-confirm-content{
				position: absolute;
				width: 100%;
				height: auto;
				top: 55px;
				bottom: 55px;
				overflow: auto;
				word-break: break-word;
			}
			.pops[type-value="confirm"] .pops-confirm-btn{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 55px;
				line-height: 55px;
				text-align: right;
				border-top: 1px solid #e5e5e5;
				padding: 10px 10px 10px 10px;
				display: flex;
				align-items: center;
			}
      /* confirm样式 */

      /* prompt样式 */
      .pops[type-value="prompt"] .pops-prompt-title{
				width: 100%;
				height: 55px;
				border-bottom: 1px solid #e5e5e5;
			}
      .pops[type-value="prompt"] .pops-prompt-title p[pops]{
				text-indent: 15px;
				font-size: 18px;
				line-height: 55px;
				font-weight: 500;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #333;
			}
			.pops[type-value="prompt"] .pops-prompt-content p[pops]{
				text-indent: 15px;
				font-size: 14px;
				padding: 5px 10px;
				color: #333;
			}
			.pops[type-value="prompt"] .pops-prompt-content{
				position: absolute;
				width: 100%;
				height: auto;
				top: 55px;
				bottom: 55px;
				overflow: auto;
				word-break: break-word;
			}
			.pops[type-value="prompt"] .pops-prompt-btn{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 55px;
				line-height: 55px;
				text-align: right;
				border-top: 1px solid #e5e5e5;
				padding: 10px 10px 10px 10px;
				display: flex;
				align-items: center;
			}
      .pops[type-value="prompt"] input[pops]{
        font-size: 18px;
        padding: 5px 10px;
      }
      .pops[type-value="prompt"] textarea[pops]{
        padding: 5px 10px;
        resize: none;
        font-size: 14px;
      }
      .pops[type-value="prompt"] textarea[pops],
      .pops[type-value="prompt"] input[pops]{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 0;
        outline: 0;
        color: #333;
      }
      /* prompt样式 */

      /* loading样式 */
      .pops[type-value="loading"]{
        min-width: 0%;
        min-height: 0%;
        max-width: 100%;
        max-height: 100%;
        font-size: 18px;
        left: 26px;
        top: 272.5px;
        box-shadow: 0 0 5px rgb(0 0 0 / 50%);
        padding: 10px 15px;
        vertical-align: middle;
        transition: all .35s;
        overflow: hidden;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,.2);
        user-select: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
      }
      .pops[type-value="loading"]:before{
        vertical-align: middle;
        font-size: inherit;
        content: " ";
        width: 2em;
        height: 2em;
        border-radius: 50%;
        display: inline-block;
        border: .3em solid rgba(100,149,237,.1);
        border-top: .3em solid rgba(100,149,237,1);
        animation: pops-anim-wait-rotate 1.2s linear infinite;
        float: left;
      }
      .pops[type-value="loading"] .pops-loading-content{
        top: 0px;
        bottom: 0px;
        float: left;
        width: auto;
        line-height: 2em;
        font-size: inherit;
        position: static;
        overflow: hidden;
      }
      .pops[type-value="loading"] .pops-loading-content p[pops]{
        font-size: inherit;
        display: inline-block;
        padding-left: 10px;
        text-indent: 15px;
        padding: 5px 10px;
        color: #333;
      }
      /* loading样式 */

      /* iframe样式 */
      .pops[type-value="iframe"] .pops-iframe-title{
				width: calc(100% - 0px);
				height: 55px;
				border-bottom: 1px solid #e5e5e5;
			}
      .pops[type-value="iframe"] .pops-iframe-title p[pops]{
				text-indent: 15px;
				font-size: 18px;
				line-height: 55px;
				font-weight: 500;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #333;
			}
			.pops[type-value="iframe"] .pops-iframe-content p[pops]{
				text-indent: 15px;
				font-size: 14px;
				padding: 5px 10px;
				color: #333;
			}
			.pops[type-value="iframe"] .pops-iframe-content{
				position: absolute;
				width: 100%;
				height: auto;
				top: 55px;
				bottom: 0px;
				overflow: auto;
				word-break: break-word;
			}
      .pops-loading{
        position: absolute;
        top: 40px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        z-index: 5;
      }
      .pops-loading:before{
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 20px;
        margin: -20px 0 0 -20px;
        border: 4px solid #ddd;
        border-radius: 50%;
        border-top-color: transparent;
        z-index: 3;
        animation: pops-anim-wait-rotate 1.2s linear infinite;
      }
      .pops[type-value="iframe"].pops[type-module="min"]{
        max-width: 200px;
        bottom: 0;
        transform: none;
        top: unset !important;
        max-height: 53px;
      } 
      .pops[type-value="iframe"].pops[type-module="min"] .pops-control[type="min"]{
        display: none;
      }
      .pops[type-value="iframe"].pops[type-module="max"]{
        width: 100% !important;
        height: 100% !important;
        transform: none;
        left: unset !important;
        top: unset !important;
      }
      .pops[type-value="iframe"] iframe[pops]{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
        top: calc(0% + 2px);
        left: calc(0% + 2px);
        width: calc(100% - 4px);
        height: calc(100% - 4px);
      }
      .pops-iframe-content-global-loading {
        background: linear-gradient(to right,rgb(73, 149, 221),#fff,rgb(202 224 246));
        height: 4px;
        position: absolute;
        z-index: 999999;
        width: 0px;
        top: 0px;
        left: 0px;
        animation: iframeLoadingChange 2s forwards;
      }
      /* iframe样式 */
      
      /* 动画区 */
      .pops-anim[anim=pops-anim-spread]{
        animation: pops-anim-spread .3s;
      }
      .pops-anim[anim=pops-anim-shake]{
        animation: pops-anim-shake .3s;
      }
      .pops-anim[anim=pops-anim-rolling-left]{
        animation: pops-anim-rolling-left .3s;
      }
      .pops-anim[anim=pops-anim-rolling-right]{
        animation: pops-anim-rolling-right .3s;
      }
      .pops-anim[anim=pops-anim-slide-top]{
        animation: pops-anim-slide-top .3s;
      }
      .pops-anim[anim=pops-anim-slide-bottom]{
        animation: pops-anim-slide-bottom .3s;
      }
      .pops-anim[anim=pops-anim-slide-left]{
        animation: pops-anim-slide-left .3s;
      }
      .pops-anim[anim=pops-anim-slide-right]{
        animation: pops-anim-slide-right .3s;
      }
      .pops-anim[anim=pops-anim-fadein]{
        animation: pops-anim-fadein .3s;
      }
      .pops-anim[anim=pops-anim-fadein-zoom]{
        animation: pops-anim-fadein-zoom .3s;
      }
      .pops-anim[anim=pops-anim-fadein-alert]{
        animation: pops-anim-fadein-alert .3s;
      }
      .pops-anim[anim=pops-anim-don]{
        animation: pops-anim-don .3s;
      }
      .pops-anim[anim=pops-anim-roll]{
        animation: pops-anim-roll .3s;
      }
      .pops-anim[anim=pops-anim-sandra]{
        animation: pops-anim-sandra .3s;
      }
      .pops-anim[anim=pops-anim-gather]{
        animation: pops-anim-gather .3s;
      }
      /* 动画区 */

      /* 动画区-置反 */
      .pops-anim[anim=pops-anim-spread-reverse]{
        animation: pops-anim-spread-reverse .3s;
      }
      .pops-anim[anim=pops-anim-shake-reverse]{
        animation: pops-anim-shake-reverse .3s;
      }
      .pops-anim[anim=pops-anim-rolling-left-reverse]{
        animation: pops-anim-rolling-left-reverse .3s;
      }
      .pops-anim[anim=pops-anim-rolling-right-reverse]{
        animation: pops-anim-rolling-right-reverse .3s;
      }
      .pops-anim[anim=pops-anim-slide-top-reverse]{
        animation: pops-anim-slide-top-reverse .3s;
      }
      .pops-anim[anim=pops-anim-slide-bottom-reverse]{
        animation: pops-anim-slide-bottom-reverse .3s;
      }
      .pops-anim[anim=pops-anim-slide-left-reverse]{
        animation: pops-anim-slide-left-reverse .3s;
      }
      .pops-anim[anim=pops-anim-slide-right-reverse]{
        animation: pops-anim-slide-right-reverse .3s;
      }
      .pops-anim[anim=pops-anim-fadein-reverse]{
        animation: pops-anim-fadein-reverse .3s;
      }
      .pops-anim[anim=pops-anim-fadein-zoom-reverse]{
        animation: pops-anim-fadein-zoom-reverse .3s;
      }
      .pops-anim[anim=pops-anim-fadein-alert-reverse]{
        animation: pops-anim-fadein-alert-reverse .3s;
      }
      .pops-anim[anim=pops-anim-don-reverse]{
        animation: pops-anim-don-reverse .3s;
      }
      .pops-anim[anim=pops-anim-roll-reverse]{
        animation: pops-anim-roll-reverse .3s;
      }
      .pops-anim[anim=pops-anim-sandra-reverse]{
        animation: pops-anim-sandra-reverse .3s;
      }
      .pops-anim[anim=pops-anim-gather-reverse]{
        animation: pops-anim-gather-reverse .3s;
      }
      /* 动画区-置反 */
      
      /* 配置的动画区 */
      @keyframes iframeLoadingChange_85{
        0% {
          background: linear-gradient(to right,rgb(73, 149, 221),#fff,rgb(202 224 246));
        }
        20% {
          background: linear-gradient(to right,rgb(73, 149, 221),#ead0d0,rgb(123 185 246));
        }
        40% {
          background: linear-gradient(to right,rgb(73, 149, 221),#f4b7b7,rgb(112 178 244));
        }
        60% {
          background: linear-gradient(to right,rgb(73, 149, 221),#ec9393,rgb(80 163 246));
        }
        80% {
          background: linear-gradient(to right,rgb(73, 149, 221),#e87f7f,rgb(25 139 253));
        }
        100% {
          background: linear-gradient(to right,rgb(73, 149, 221),#ee2c2c,rgb(0 124 247));
        }
        from{
          width: 75%;
        }
        to{
          width: 100%;
        }
      
      }
      
      @keyframes iframeLoadingChange{
        0% {
          background: linear-gradient(to right,rgb(73, 149, 221),#fff,rgb(202 224 246));
        }
        20% {
          background: linear-gradient(to right,rgb(73, 149, 221),#ead0d0,rgb(123 185 246));
        }
        40% {
          background: linear-gradient(to right,rgb(73, 149, 221),#f4b7b7,rgb(112 178 244));
        }
        60% {
          background: linear-gradient(to right,rgb(73, 149, 221),#ec9393,rgb(80 163 246));
        }
        80% {
          background: linear-gradient(to right,rgb(73, 149, 221),#e87f7f,rgb(25 139 253));
        }
        100% {
          background: linear-gradient(to right,rgb(73, 149, 221),#ee2c2c,rgb(0 124 247));
        }
        from{
          width: 0;
        }
        to{
          width: 75%;
        }
      }
      @keyframes pops-anim-wait-rotate{
        form{
          transform:rotate(0deg)
        }
        to{
          transform:rotate(360deg)
        }
      }
      @keyframes pops-anim-spread { 
        0% { transform: scaleX(0); opacity: 0; }
        100% { transform: scaleX(1); opacity: 1; }
      }
      @keyframes pops-anim-shake { 
        0%, 100% { transform: translateX(0px); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
      }
      @keyframes pops-anim-rolling-left { 
        0% { opacity: 0; transform: translateX(-100%) rotate(-120deg); }
        100% { opacity: 1; transform: translateX(0px) rotate(0deg); }
      }
      @keyframes pops-anim-rolling-right { 
        0% { opacity: 0; transform: translateX(100%) rotate(120deg); }
        100% { opacity: 1; transform: translateX(0px) rotate(0deg); }
      }
      @keyframes pops-anim-slide-top { 
        0% { opacity: 0; transform: translateY(-200%); }
        100% { opacity: 1; transform: translateY(0%); }
      }
      @keyframes pops-anim-slide-bottom { 
        0% { opacity: 0; transform: translateY(200%); }
        100% { opacity: 1; transform: translateY(0%); }
      }
      @keyframes pops-anim-slide-left { 
        0% { opacity: 0; transform: translateX(-200%); }
        100% { opacity: 1; transform: translateX(0%); }
      }
      @keyframes pops-anim-slide-right { 
        0% { transform: translateX(200%); }
        100% { opacity: 1; transform: translateX(0%); }
      }
      @keyframes pops-anim-fadein { 
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes pops-anim-fadein-zoom { 
        0% { opacity: 0; transform: scale(0.5); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes pops-anim-fadein-alert { 
        0% { transform: scale(0.5); }
        45% { transform: scale(1.05); }
        80% { transform: scale(0.95); }
        100% { transform: scale(1); }
      }
      @keyframes pops-anim-don { 
        0% { opacity: 0; transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        2.08333% { transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        4.16667% { transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        6.25% { transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        8.33333% { transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        10.4167% { transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        12.5% { transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        14.5833% { transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        16.6667% { transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        18.75% { transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        20.8333% { transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        22.9167% { transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        25% { transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        27.0833% { transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        29.1667% { transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        31.25% { transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        33.3333% { transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        35.4167% { transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        37.5% { transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        39.5833% { transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        41.6667% { transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        43.75% { transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        45.8333% { transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        47.9167% { transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        50% { opacity: 1; transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        52.0833% { transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        54.1667% { transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        56.25% { transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        58.3333% { transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        60.4167% { transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        62.5% { transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        64.5833% { transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        66.6667% { transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        68.75% { transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        70.8333% { transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        72.9167% { transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        75% { transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        77.0833% { transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        79.1667% { transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        81.25% { transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        83.3333% { transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        85.4167% { transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        87.5% { transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        89.5833% { transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        91.6667% { transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        93.75% { transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        95.8333% { transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        97.9167% { transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        100% { opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      }
      @keyframes pops-anim-roll { 
        0% { transform: perspective(1000px) rotate3d(1, 0, 0, 90deg); }
        100% { transform: perspective(1000px) rotate3d(1, 0, 0, 0deg); }
      }
      @keyframes pops-anim-sandra { 
        0% { opacity: 0; transform: scale3d(1.1, 1.1, 1); }
        100% { opacity: 1; transform: scale3d(1, 1, 1); }
      }
      @keyframes pops-anim-gather { 
        0% { opacity: 0; transform: scale(5, 0); }
        100% { opacity: 1; transform: scale(1, 1); }
      }
      /* 配置的动画区 */

      /* 配置的动画区-置反 */
      @keyframes pops-anim-spread-reverse { 
        0% { transform: scaleX(1); opacity: 1; }
        100% { transform: scaleX(0); opacity: 0; }
      }
      @keyframes pops-anim-shake-reverse { 
        0%, 100% { transform: translateX(10px); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(0px); }
      }
      @keyframes pops-anim-rolling-left-reverse { 
        0% { opacity: 1; transform: translateX(0px) rotate(0deg); }
        100% { opacity: 0; transform: translateX(-100%) rotate(-120deg); }
      }
      @keyframes pops-anim-rolling-right-reverse { 
        0% { opacity: 1; transform: translateX(0px) rotate(0deg); }
        100% { opacity: 0; transform: translateX(100%) rotate(120deg); }
      }
      @keyframes pops-anim-slide-top-reverse { 
        0% { opacity: 1; transform: translateY(0%); }
        100% { opacity: 0; transform: translateY(-200%); }
      }
      @keyframes pops-anim-slide-bottom-reverse { 
        0% { opacity: 1; transform: translateY(0%); }
        100% { opacity: 0; transform: translateY(200%); }
      }
      @keyframes pops-anim-slide-left-reverse { 
        0% { opacity: 1; transform: translateX(0%); }
        100% { opacity: 0; transform: translateX(-200%); }
      }
      @keyframes pops-anim-slide-right-reverse { 
        0% { opacity: 1; transform: translateX(0%); }
        100% { transform: translateX(200%); }
      }
      @keyframes pops-anim-fadein-reverse { 
        0% { opacity: 1; }
        100% { opacity: 0; }
      }
      @keyframes pops-anim-fadein-zoom-reverse { 
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.5); }
      }
      @keyframes pops-anim-fadein-alert-reverse { 
        0% { transform: scale(1); }
        45% { transform: scale(0.95); }
        80% { transform: scale(1.05); }
        100% { transform: scale(0.5); }
      }
      @keyframes pops-anim-don-reverse { 
        100% { opacity: 0; transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        97.9167% { transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        95.8333% { transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        93.75% { transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        91.6667% { transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        89.5833% { transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        87.5% { transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        85.4167% { transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        83.3333% { transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        81.25% { transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        79.1667% { transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        77.0833% { transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        75% { transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        72.9167% { transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        70.8333% { transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        68.75% { transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        66.6667% { transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        64.5833% { transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        62.5% { transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        60.4167% { transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        58.3333% { transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        56.25% { transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        54.1667% { transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        52.0833% { transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        50% { opacity: 1; transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        47.9167% { transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        45.8333% { transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        43.75% { transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        41.6667% { transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        39.5833% { transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        37.5% { transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        35.4167% { transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        33.3333% { transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        31.25% { transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        29.1667% { transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        27.0833% { transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        25% { transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        22.9167% { transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        20.8333% { transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        18.75% { transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        16.6667% { transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        14.5833% { transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        12.5% { transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        10.4167% { transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        8.33333% { transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        6.25% { transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        4.16667% { transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        2.08333% { transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        0% { opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      }
      @keyframes pops-anim-roll-reverse { 
        0% { transform: perspective(1000px) rotate3d(1, 0, 0, 0deg); }
        100% { transform: perspective(1000px) rotate3d(1, 0, 0, 90deg); }
      }
      @keyframes pops-anim-sandra-reverse { 
        0% { opacity: 1; transform: scale3d(1, 1, 1); }
        100% { opacity: 0; transform: scale3d(1.1, 1.1, 1); }
      }
      @keyframes pops-anim-gather-reverse { 
        0% 
        100% { opacity: 0; transform: scale(5, 0); }
      }
      /* 配置的动画区-置反 */

      /* 右上角按钮样式 */
      .pops-controls{
				position: absolute;
				right: 5px;
				top: 15px;
        display: flex;
			}
			.pops-controls button.pops-control[type="close"],
      .pops-controls button.pops-control[type="min"],
      .pops-controls button.pops-control[type="max"]{
				float: right;
				background-color: transparent;
				border: 0;
				cursor: pointer;
				width: 15px;
				height: 15px;
				margin: 0 2px;
				position: relative;
				color: #888;
				border-color: #888;
				outline: none!important;
				transition: all .3s ease-in-out;
			}
			.pops-controls button.pops-control[type="close"]:before{
				transform: rotate(-45deg);
			}
			.pops-controls button.pops-control[type="close"]:after{
				transform: rotate(45deg);
			}
			.pops-controls button.pops-control[type="close"]:before,
			.pops-controls button.pops-control[type="close"]:after{
				display: block;
				position: absolute;
				content: " ";
				border-top: 2.3px solid;
				width: inherit;
        top: 8px;
        left: 2px;
			}
      .pops-controls button.pops-control[type="min"]:before,
      .pops-controls button.pops-control[type="min"]:after{
        display: block;
      }
      .pops-controls button.pops-control[type="min"]:after{
        content: " ";
        width: 10px;
        position: absolute;
        left: 5px;
        top: 9px;
        border-bottom: 2px solid;
      }

      .pops-controls button.pops-control[type="max"]:before,
      .pops-controls button.pops-control[type="max"]:after{
        display: block;
      }
      .pops-controls button.pops-control[type="max"]:after{
        content: " ";
        width: 12px;
        height: 8px;
        position: absolute;
        left: 3px;
        top: 4px;
        border: 1px solid;
        border-top: 2px solid;
        box-sizing: initial;
      }
      .pops-controls[type="max"] button.pops-control[type="max"]:before{
        content: " ";
        width: 14px;
        height: 11px;
        position: absolute;
        left: 4px;
        top: 2px;
        border-top: 1px solid;
        border-right: 1px solid;
        box-sizing: initial;
      }
      /* 右上角按钮样式 */
		`,
    cssElement: null,
    animation: [],
    init: false,
    layer: {
      alert: [],
      confirm: [],
      prompt: [],
      loading: [],
      iframe: [],
    },
  };
  pops.init = function () {
    /* 初始化CSS */
    let cssResourceNode = document.createElement("style");
    cssResourceNode.setAttribute("type", "text/css");
    cssResourceNode.setAttribute("data-insert-from", "pops");
    cssResourceNode.innerHTML = this.css;
    if (document.head) {
      document.head.append(cssResourceNode);
    } else if (
      document.documentElement &&
      document.documentElement.childNodes.length === 0
    ) {
      document.documentElement.appendChild(cssResourceNode);
    } else if (document.documentElement) {
      document.documentElement.appendChild(cssResourceNode);
    } else {
      throw new Error("未找到可以插入到页面中的元素");
    }
    this.config.cssElement = cssResourceNode;
    this.config.init = true;
    this.config.animation = Utils.getKeyFrames(this.config.cssElement.sheet);
  };

  pops.isPhone = () => {
    /* 判断是否是手机访问 */
    return Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent));
  };

  pops.alert = function () {
    /* 普通信息框 */
    if (this.config.init === false) {
      this.init();
    }
    var config = {
      title: {
        text: "默认标题",
        position: "left",
        html: false,
        /* true是不添加p标签，false是添加p标签 */
      },
      content: {
        text: "默认内容",
        html: false,
        /* true是不添加p标签，false是添加p标签 */
      },
      btn: {
        position: "flex-end",
        /* center、flex-start、flex-end、space-between、space-around、space-evenly */
        ok: {
          /* 是否启用 */
          enable: true,
          text: "确定",
          type: "primary" /* 按钮样式 */,
          callback: function (event) {
            event.close();
          },
        } /* 右上角关闭小按钮 */,
        close: {
          enable: true,
          callback: function (event) {
            event.close();
          },
        },
      },
      class: "" /* 添加自定义的className */,
      only: false /* 是否唯一 */,
      width: "350px" /* 宽度 */,
      height: "200px" /* 高度 */,
      position:
        "center" /* 弹窗定位,top_left,top,top_right,center_left,center,center_right,bottom_left,bottom,bottom_right */,
      animation: "pops-anim-fadein-zoom" /* 弹窗动画 */,
      zIndex: 10000 /* 弹窗所在的层级 */,
      mask: false /* 遮罩层 */,
      drag: false /* 是否拖拽 */,
    };
    config = Utils.assignJSON(
      config,
      arguments.length ? arguments[0] : undefined
    );
    var _this = this;
    var guid = Utils.guid();
    if (config.only) {
      Utils.configRemove(
        [
          _this.config.layer.alert,
          _this.config.layer.confirm,
          _this.config.layer.prompt,
          _this.config.layer.iframe,
        ],
        "",
        true
      );
    } else {
      config.zIndex = Utils.getPopsMaxZIndex(config.zIndex)["zIndex"] * 2;
    }

    var maskHTML = `<div class="pops-mask" data-guid="${guid}" style="z-index:${
      config.zIndex - 100
    };"></div>`;
    var animHTML = `<div class="pops-anim" anim="${
      config.animation
    }" style="z-index:${config.zIndex};" data-guid="${guid}">
      <div class="pops ${config.class}" type-value="alert" style="width:${
      config.width
    };height:${config.height};z-index:${config.zIndex};" position="${
      config.position
    }" data-guid="${guid}">
          <div class="pops-alert-title" style="text-align: ${
            config.title.position
          };">
            ${
              config.title.html
                ? config.title.text
                : "<p pops>" + config.title.text + "</p>"
            }
          </div>
          <div class="pops-alert-content">
            ${
              config.content.html
                ? config.content.text
                : "<p pops>" + config.content.text + "</p>"
            }
          </div>
          <div class="pops-alert-btn" style="justify-content:${
            config.btn.position
          };">
            ${
              config.btn.ok.enable
                ? '<button class="pops-alert-btn-ok" type="' +
                  config.btn.ok.type +
                  '">' +
                  config.btn.ok.text +
                  "</button>"
                : ""
            }
          </div>
          ${
            config.btn.close.enable
              ? '<div class="pops-controls"><button class="pops-control" type="close"></button></div>'
              : ""
          }
      </div>
    </div>`;

    const animElement =
      Utils.parseTextToDOM(animHTML)[0]; /* 弹窗的主元素，包括动画层 */
    var maskElement = null; /* 弹窗遮罩层的html */
    const popsElement =
      animElement.querySelector(".pops[type-value"); /* 弹窗的主元素 */
    const btnCloseElement = animElement.querySelector(
      ".pops-control[type='close']"
    ); /* 关闭按钮 */
    const btnOkElement =
      animElement.querySelector(".pops-alert-btn-ok"); /* 确定按钮 */
    const titleElement =
      animElement.querySelector(".pops-alert-title"); /* 标题元素 */
    var elementList = [animElement];

    if (config.mask) {
      maskElement = Utils.parseTextToDOM(maskHTML)[0];
      elementList = [...elementList, maskElement];
    }
    var event = {
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
      type: "",
      function: "alert",
      guid: guid,
      close: () => {
        Utils.close(_this.config.layer.alert, guid, config);
      },
      hide: () => {
        Utils.hide(_this.config.layer.alert, guid, config);
      },
      show: () => {
        Utils.show(_this.config.layer.alert, guid, config);
      },
    };
    btnCloseElement?.addEventListener("click", () => {
      var _event_ = {
        type: "close",
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.close.callback(_event_);
    });
    btnOkElement?.addEventListener("click", () => {
      var _event_ = {
        type: "ok",
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.ok.callback(_event_);
    });

    Utils.appendChild(document.body, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    this.config.layer.alert = [
      ...this.config.layer.alert,
      {
        guid: guid,
        animElement: animElement,
        popsElement: popsElement,
        maskElement: maskElement,
      },
    ];
    if (config.drag) {
      Utils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(popsElement).position,
        top: getComputedStyle(popsElement).top,
        left: getComputedStyle(popsElement).left,
        limit: true,
      });
    }
    return {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
      close: () => {
        Utils.close(_this.config.layer.alert, guid, config);
      },
      hide: () => {
        Utils.hide(_this.config.layer.alert, guid, config);
      },
      show: () => {
        Utils.show(_this.config.layer.alert, guid, config);
      },
    };
  };

  pops.confirm = function () {
    /* 询问框 */
    if (this.config.init === false) {
      this.init();
    }
    var config = {
      title: {
        text: "默认标题",
        position: "left",
        html: false,
        /* true是不添加p标签，false是添加p标签 */
      },
      content: {
        text: "默认内容",
        html: false,
        /* true是不添加p标签，false是添加p标签 */
      },
      btn: {
        reverse: false,
        position: "flex-end",
        /* center、flex-start、flex-end、space-between、space-around、space-evenly */
        ok: {
          enable: true,
          /* 是否启用 */
          text: "确定",
          type: "primary" /* 按钮样式 */,
          callback: function (event) {
            event.close();
          },
        },
        cancel: {
          enable: true,
          /* 是否启用 */
          text: "关闭",
          type: "default" /* 按钮样式 */,
          callback: function (event) {
            event.close();
          },
        },
        other: {
          enable: false,
          /* 是否启用 */
          text: "其它按钮",
          type: "default" /* 按钮样式 */,
          callback: function (event) {
            event.close();
          },
        },
        close: {
          enable: true /* 右上角关闭小按钮 */,
          callback: function (event) {
            event.close();
          },
        },
      },
      class: "" /* 添加自定义的className */,
      only: false /* 是否唯一 */,
      width: "350px" /* 宽度 */,
      height: "200px" /* 高度 */,
      position:
        "center" /* 弹窗定位,top_left,top,top_right,center_left,center,center_right,bottom_left,bottom,bottom_right */,
      animation: "pops-anim-fadein-zoom" /* 弹窗动画 */,
      zIndex: 10000 /* 弹窗所在的层级 */,
      mask: false /* 遮罩层 */,
      drag: false /* 是否拖拽 */,
    };
    config = Utils.assignJSON(
      config,
      arguments.length ? arguments[0] : undefined
    );
    var _this = this;
    var guid = Utils.guid();
    if (config.only) {
      Utils.configRemove(
        [
          _this.config.layer.alert,
          _this.config.layer.confirm,
          _this.config.layer.prompt,
          _this.config.layer.iframe,
        ],
        "",
        true
      );
    } else {
      config.zIndex = Utils.getPopsMaxZIndex(config.zIndex)["zIndex"] * 2;
    }
    var maskHTML = `<div class="pops-mask" data-guid="${guid}" style="z-index:${
      config.zIndex - 100
    };"></div>`;
    var animHTML = `<div class="pops-anim" anim="${
      config.animation
    }" style="z-index:${config.zIndex};" data-guid="${guid}"><div class="pops ${
      config.class
    }" type-value="confirm" style="width:${config.width};height:${
      config.height
    };z-index:${config.zIndex};" position="${
      config.position
    }" data-guid="${guid}">
				<div class="pops-confirm-title" style="text-align: ${config.title.position};">
					${
            config.title.html
              ? config.title.text
              : "<p pops>" + config.title.text + "</p>"
          }
				</div>
				<div class="pops-confirm-content">
        ${
          config.content.html
            ? config.content.text
            : "<p pops>" + config.content.text + "</p>"
        }
          
				</div>
				<div class="pops-confirm-btn" style="justify-content:${config.btn.position};${
      config.btn.reverse ? "flex-direction: row-reverse;" : ""
    }">
					${
            config.btn.ok.enable
              ? '<button class="pops-confirm-btn-ok" type="' +
                config.btn.ok.type +
                '">' +
                config.btn.ok.text +
                "</button>"
              : ""
          }
          ${
            config.btn.cancel.enable
              ? '<button class="pops-confirm-btn-cancel" type="' +
                config.btn.cancel.type +
                '">' +
                config.btn.cancel.text +
                "</button>"
              : ""
          }
          ${
            config.btn.other.enable
              ? '<button class="pops-confirm-btn-other" type="' +
                config.btn.other.type +
                '">' +
                config.btn.other.text +
                "</button>"
              : ""
          }
				</div>
				${
          config.btn.close.enable
            ? '<div class="pops-controls"><button class="pops-control" type="close"></button></div>'
            : ""
        }
		</div>
    </div>`;
    const animElement =
      Utils.parseTextToDOM(animHTML)[0]; /* 弹窗主元素（包括动画） */
    var maskElement = null; /* 弹窗遮罩层的html */

    const popsElement =
      animElement.querySelector(".pops[type-value]"); /* 弹窗主元素 */
    const btnCloseElement = animElement.querySelector(
      ".pops-control[type='close']"
    ); /* 关闭按钮 */
    const btnOkElement = animElement.querySelector(
      ".pops-confirm-btn-ok"
    ); /* 确定按钮 */
    const btnCancelElement = animElement.querySelector(
      ".pops-confirm-btn-cancel"
    ); /* 取消按钮 */
    const btnOtherElement = animElement.querySelector(
      ".pops-confirm-btn-other"
    ); /* 其它按钮 */
    const titleElement = animElement.querySelector(
      ".pops-confirm-title"
    ); /* 标题元素 */

    var elementList = [animElement];
    if (config.mask) {
      maskElement = Utils.parseTextToDOM(maskHTML)[0];
      elementList = [...elementList, maskElement];
    }

    var event = {
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
      type: "",
      function: "confirm",
      guid: guid,

      close: () => {
        Utils.close(_this.config.layer.confirm, guid, config);
      },
      hide: () => {
        Utils.hide(_this.config.layer.confirm, guid, config);
      },
      show: () => {
        Utils.show(_this.config.layer.confirm, guid, config);
      },
    };
    btnCloseElement?.addEventListener("click", () => {
      var _event_ = {
        type: "close",
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.close.callback(_event_);
    });
    btnOkElement?.addEventListener("click", () => {
      var _event_ = {
        type: "ok",
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.ok.callback(_event_);
    });
    btnCancelElement?.addEventListener("click", () => {
      var _event_ = {
        type: "cancel",
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.cancel.callback(_event_);
    });
    btnOtherElement?.addEventListener("click", () => {
      var _event_ = {
        type: "other",
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.other.callback(_event_);
    });

    Utils.appendChild(document.body, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    this.config.layer.confirm = [
      ...this.config.layer.confirm,
      {
        guid: guid,
        animElement: animElement,
        popsElement: popsElement,
        maskElement: maskElement,
      },
    ];
    if (config.drag) {
      Utils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(animElement).position,
        top: getComputedStyle(animElement).top,
        left: getComputedStyle(animElement).left,
        limit: true,
      });
    }
    return {
      guid: guid,
      element: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
      close: () => {
        Utils.close(_this.config.layer.confirm, guid, config);
      },
      hide: () => {
        Utils.hide(_this.config.layer.confirm, guid, config);
      },
      show: () => {
        Utils.show(_this.config.layer.confirm, guid, config);
      },
    };
  };

  pops.prompt = function () {
    /* 输入框 */
    if (this.config.init === false) {
      this.init();
    }
    var config = {
      title: {
        text: "默认标题",
        position: "left",
        html: false,
        /* true是不添加p标签，false是添加p标签 */
      },
      content: {
        text: "",
        password: false /* 是否是密码输入 */,
        row: false /* 多行 */,
        focus: true /* 输入框自动聚焦 */,
        placeholder: "默认提示" /* 输入框的提示 */,
      },
      btn: {
        reverse: false,
        position: "flex-end",
        /* center、flex-start、flex-end、space-between、space-around、space-evenly */
        ok: {
          enable: true,
          /* 是否启用 */
          text: "确定",
          type: "success" /* 按钮样式 */,
          callback: function (event) {
            event.close();
          },
        },
        cancel: {
          enable: true,
          /* 是否启用 */
          text: "关闭",
          type: "default" /* 按钮样式 */,
          callback: function (event) {
            event.close();
          },
        },
        other: {
          enable: false,
          /* 是否启用 */
          text: "其它按钮",
          type: "default" /* 按钮样式 */,
          callback: function (event) {
            event.close();
          },
        },
        close: {
          enable: true /* 右上角关闭小按钮 */,
          callback: function (event) {
            event.close();
          },
        },
      },
      class: "" /* 添加自定义的className */,
      only: false /* 是否唯一 */,
      width: "350px" /* 宽度 */,
      height: "200px" /* 高度 */,
      position:
        "center" /* 弹窗定位,top_left,top,top_right,center_left,center,center_right,bottom_left,bottom,bottom_right */,
      animation: "pops-anim-fadein-zoom" /* 弹窗动画 */,
      zIndex: 10000 /* 弹窗所在的层级 */,
      mask: false /* 遮罩层 */,
      drag: false /* 是否拖拽 */,
    };
    config = Utils.assignJSON(
      config,
      arguments.length ? arguments[0] : undefined
    );
    var _this = this;
    var guid = Utils.guid();
    if (config.only) {
      Utils.configRemove(
        [
          _this.config.layer.alert,
          _this.config.layer.confirm,
          _this.config.layer.prompt,
          _this.config.layer.iframe,
        ],
        "",
        true
      );
    } else {
      config.zIndex = Utils.getPopsMaxZIndex(config.zIndex)["zIndex"] * 2;
    }
    var maskHTML = `<div class="pops-mask" data-guid="${guid}" style="z-index:${
      config.zIndex - 100
    };"></div>`;
    var animHTML = `<div class="pops-anim" anim="${
      config.animation
    }" style="z-index:${config.zIndex};" data-guid="${guid}">
      <div class="pops ${config.class}" type-value="prompt" style="width:${
      config.width
    };height:${config.height};z-index:${config.zIndex};" position="${
      config.position
    }" data-guid="${guid}">
          <div class="pops-prompt-title" style="text-align: ${
            config.title.position
          };">
            ${
              config.title.html
                ? config.title.text
                : "<p pops>" + config.title.text + "</p>"
            }
          </div>
          <div class="pops-prompt-content">
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
          <div class="pops-prompt-btn" style="justify-content:${
            config.btn.position
          };${config.btn.reverse ? "flex-direction: row-reverse;" : ""}">
            ${
              config.btn.ok.enable
                ? '<button class="pops-prompt-btn-ok" type="' +
                  config.btn.ok.type +
                  '">' +
                  config.btn.ok.text +
                  "</button>"
                : ""
            }
            ${
              config.btn.cancel.enable
                ? '<button class="pops-prompt-btn-cancel" type="' +
                  config.btn.cancel.type +
                  '">' +
                  config.btn.cancel.text +
                  "</button>"
                : ""
            }
            ${
              config.btn.other.enable
                ? '<button class="pops-prompt-btn-other" type="' +
                  config.btn.other.type +
                  '">' +
                  config.btn.other.text +
                  "</button>"
                : ""
            }
          </div>
          ${
            config.btn.close.enable
              ? '<div class="pops-controls"><button class="pops-control" type="close"></button></div>'
              : ""
          }
      </div>
    </div>`;
    var animElement = Utils.parseTextToDOM(animHTML)[0]; /* 弹窗的html */
    var maskElement = null; /* 弹窗遮罩层的html */
    var elementList = [animElement];
    if (config.mask) {
      maskElement = Utils.parseTextToDOM(maskHTML)[0];
      elementList = [...elementList, maskElement];
    }

    const popsElement = animElement.querySelector(".pops[type-value]");
    const inputElement = animElement.querySelector(
      ".pops-prompt-content textarea[pops]"
    )
      ? animElement.querySelector(".pops-prompt-content textarea[pops]")
      : animElement.querySelector(
          ".pops-prompt-content input[pops]"
        ); /* 输入框，input或者textarea */
    const btnCloseElement = animElement.querySelector(
      ".pops-control[type='close']"
    ); /* 右上角关闭小按钮 */
    const btnOkElement = animElement.querySelector(
      ".pops-prompt-btn-ok"
    ); /* 确认按钮 */
    const btnCancelElement = animElement.querySelector(
      ".pops-prompt-btn-cancel"
    ); /* 取消按钮 */
    const btnOtherElement = animElement.querySelector(
      ".pops-prompt-btn-other"
    ); /* 其它按钮 */
    const titleElement = animElement.querySelector(".pops-prompt-title");
    /* 标题元素 */
    var event = {
      animElement: animElement /* 可能含有动画层 */,
      popsElement: popsElement,
      maskElement: maskElement,
      type: "",
      function: "prompt",
      guid: guid,
      text: "",
      close: () => {
        Utils.close(_this.config.layer.prompt, guid, config);
      },
      hide: () => {
        Utils.hide(_this.config.layer.prompt, guid, config);
      },
      show: () => {
        Utils.show(_this.config.layer.prompt, guid, config);
      },
    };
    inputElement.value = config.content.text;
    btnCloseElement?.addEventListener("click", () => {
      var _event_ = {
        type: "close",
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.close.callback(_event_);
    });
    btnOkElement?.addEventListener("click", () => {
      var _event_ = {
        type: "ok",
        text: inputElement.value,
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.ok.callback(_event_);
    });
    btnCancelElement?.addEventListener("click", () => {
      var _event_ = {
        type: "cancel",
        text: inputElement.value,
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.cancel.callback(_event_);
    });
    btnOtherElement?.addEventListener("click", () => {
      var _event_ = {
        type: "other",
        text: inputElement.value,
      };
      _event_ = Utils.assignJSON(event, _event_);
      config.btn.other.callback(_event_);
    });

    Utils.appendChild(document.body, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    this.config.layer.prompt = [
      ...this.config.layer.prompt,
      {
        guid: guid,
        animElement: animElement,
        popsElement: popsElement,
        maskElement: maskElement,
      },
    ];
    if (config.drag) {
      Utils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(popsElement).position,
        top: getComputedStyle(popsElement).top,
        left: getComputedStyle(popsElement).left,
        limit: true,
      });
    }
    if (config.content.focus) {
      /* 设置焦点 */
      inputElement?.focus();
    }
    return {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
      close: () => {
        Utils.close(_this.config.layer.prompt, guid, config);
      },
      hide: () => {
        Utils.hide(_this.config.layer.prompt, guid, config);
      },
      show: () => {
        Utils.show(_this.config.layer.prompt, guid, config);
      },
    };
  };

  pops.loading = function () {
    /* 加载层 */
    if (this.config.init === false) {
      this.init();
    }
    var config = {
      parent: null,
      content: {
        text: "加载中...",
        icon: "loading" /* 文字坐标的图标 */,
      },
      class: "" /* 添加自定义的className */,
      only: false /* 是否唯一 */,
      zIndex: 10000 /* 弹窗所在的层级 */,
      mask: true /* 遮罩层 */,
      animation: "pops-anim-fadein-zoom" /* 动画效果 */,
    };
    config = Utils.assignJSON(
      config,
      arguments.length ? arguments[0] : undefined
    );
    if (!(config.parent instanceof HTMLElement)) {
      throw "父元素必须是一个元素节点";
    }
    var _this = this;
    var guid = Utils.guid();
    if (config.only) {
      Utils.configRemove([_this.config.layer.loading], "", true);
    } else {
      config.zIndex = Utils.getPopsMaxZIndex(config.zIndex)["zIndex"] * 2;
    }
    var maskHTML = `<div class="pops-mask" data-guid="${guid}" style="z-index:${
      config.zIndex - 100
    };${
      config.animation != null && config.animation != ""
        ? "position:absolute;"
        : ""
    }"></div>`;
    var animHTML = `<div class="pops-anim" anim="${config.animation}" style="z-index:${config.zIndex};position:absolute;" data-guid="${guid}">
    <div class="pops ${config.class}" type-value="loading" style="z-index:${config.zIndex};" data-guid="${guid}">
				<div class="pops-loading-content">
          <p pops>${config.content.text}</p>
				</div>
		</div></div>`;
    var animElement = Utils.parseTextToDOM(animHTML)[0]; /* 弹窗的html */
    var maskElement = null; /* 弹窗遮罩层的html */
    var elementList = [animElement];
    if (config.mask) {
      maskElement = Utils.parseTextToDOM(maskHTML)[0];
      elementList = [...elementList, maskElement];
    }
    const popsElement =
      animElement.querySelector(".pops[type-value"); /* 弹窗的主元素 */

    Utils.appendChild(config.parent, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    this.config.layer.loading = [
      ...this.config.layer.loading,
      {
        guid: guid,
        animElement: animElement,
        popsElement: popsElement,
        maskElement: maskElement,
      },
    ];
    return {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
      close: () => {
        Utils.close(_this.config.layer.loading, guid, config);
      },
      hide: () => {
        Utils.hide(_this.config.layer.loading, guid, config);
      },
      show: () => {
        Utils.show(_this.config.layer.loading, guid, config);
      },
    };
  };

  pops.iframe = function () {
    /* iframe层 */
    if (this.config.init === false) {
      this.init();
    }
    var config = {
      title: {
        position: "center",
        text: "",
        html: false,
      },
      loading: {
        enable: true /* 显示加载层 */,
        icon: true /* 显示加载中的图标 */,
        text: "",
      },
      class: "" /* 添加自定义的className */,
      url: null,
      only: false /* 是否唯一 */,
      zIndex: 10000 /* 弹窗所在的层级 */,
      mask: true /* 遮罩层 */,
      animation: "pops-anim-fadein-zoom" /* 动画效果 */,
      position: "center" /* 位置 */,
      drag: false /* 是否拖拽 */,
      width: "300px" /* 宽度 */,
      height: "250px" /* 高度 */,
      topRightButton: "min|max|close" /* 右上角按钮：最小化、最大化和关闭 */,
      sandbox: false /* 沙箱 */,
      loadEndCallBack: () => {} /* 网页加载完毕的callback */,
      btn: {
        min: {
          callback: () => {},
        },
        max: {
          callback: () => {},
        },
        close: {
          callback: () => {},
        },
      },
    };
    config = Utils.assignJSON(
      config,
      arguments.length ? arguments[0] : undefined
    );
    if (config.url == null) {
      throw "网址不能为空";
    }
    var _this = this;
    var guid = Utils.guid();
    if (config.only) {
      Utils.configRemove(
        [
          _this.config.layer.alert,
          _this.config.layer.confirm,
          _this.config.layer.prompt,
          _this.config.layer.iframe,
        ],
        "",
        true
      );
    } else {
      config.zIndex = Utils.getPopsMaxZIndex(config.zIndex)["zIndex"] * 2;
    }
    var maskHTML = `<div class="pops-mask" data-guid="${guid}" style="z-index:${
      config.zIndex - 100
    };${
      config.animation != null && config.animation != ""
        ? "position:absolute;"
        : ""
    }"></div>`;
    var iframeLoadingHTML = '<div class="pops-loading"></div>';
    var topRightButtonHTML = ""; /* 右上角按钮群 */
    if (config.topRightButton.trim() !== "") {
      config.topRightButton.split("|").forEach((item) => {
        topRightButtonHTML += `<button class="pops-control" type="${item}"></button>`;
      });
    }
    var titleText =
      config.title.text.trim() !== "" ? config.title.text : config.url;
    var animHTML = `<div class="pops-anim" anim="${
      config.animation
    }" style="z-index:${config.zIndex};" data-guid="${guid}"><div class="pops ${
      config.class
    }" type-value="iframe" style="width:${config.width};height:${
      config.height
    };z-index:${config.zIndex};" position="${
      config.position
    }" data-guid="${guid}">
				<div class="pops-iframe-title" style="text-align: ${config.title.position};">
					${config.title.html ? titleText : "<p pops>" + titleText + "</p>"}
				</div>
				<div class="pops-iframe-content">
          <div class="pops-iframe-content-global-loading"></div>
          <iframe src="${config.url}" pops ${
      config.sandbox
        ? "sandbox='allow-forms allow-same-origin allow-scripts'"
        : ""
    }></iframe>
				</div>
				<div class="pops-controls">${topRightButtonHTML}</div>
        ${config.loading.enable ? iframeLoadingHTML : ""}
		</div>`;
    var animElement = Utils.parseTextToDOM(animHTML)[0]; /* 弹窗的html */
    var maskElement = null; /* 弹窗遮罩层的html */
    var elementList = [animElement];
    if (config.mask) {
      maskElement = Utils.parseTextToDOM(maskHTML)[0];
      elementList = [...elementList, maskElement];
    }

    const iframePopsElement =
      animElement.querySelector("iframe[pops]"); /* iframe内部的iframe */
    const iframeLoadingElement =
      animElement.querySelector(".pops-loading"); /* iframe内部的加载层 */
    const iframeGlobalLoadingElement = animElement.querySelector(
      ".pops-iframe-content-global-loading"
    ); /* iframe内部的顶部进度加载层 */
    const titleElement =
      animElement.querySelector(".pops-iframe-title"); /* 标题元素 */
    const popsElement =
      animElement.querySelector(".pops[type-value"); /* 弹窗的主元素 */
    const minElement = animElement.querySelector(
      ".pops-control[type='min']"
    ); /* 最小化 */
    const maxElement = animElement.querySelector(
      ".pops-control[type='max']"
    ); /* 最大化 */
    const controlsElement =
      animElement.querySelector(".pops-controls"); /* 按钮组 */
    const btnCloseElement = animElement.querySelector(
      ".pops-control[type='close']"
    ); /* 关闭按钮 */

    var event = {
      animElement: animElement /* 可能含有动画层 */,
      popsElement: popsElement,
      maskElement: maskElement,
      iframePopsElement: iframePopsElement,
      function: "iframe",
      guid: guid,
    };

    animElement.addEventListener("animationend", function () {
      animElement.style.width = "0%";
      animElement.style.height = "0%";
    });
    iframePopsElement?.addEventListener("load", function () {
      iframeLoadingElement?.remove();
      iframeGlobalLoadingElement.style.animation =
        "iframeLoadingChange_85 0.3s forwards";
      iframeGlobalLoadingElement.addEventListener("animationend", function () {
        iframeGlobalLoadingElement.remove();
      });
      if (
        config.title.text.trim() === "" &&
        iframePopsElement.contentDocument
      ) {
        /* 同域名下的才可以获取网页标题 */
        titleElement.innerText = iframePopsElement.contentDocument.title;
      }
      config.loadEndCallBack(event);
    });
    Utils.appendChild(document.body, elementList);
    if (maskElement != null) {
      animElement.after(maskElement);
    }
    this.config.layer.iframe = [
      ...this.config.layer.iframe,
      {
        guid: guid,
        animElement: animElement,
        popsElement: popsElement,
        maskElement: maskElement,
      },
    ];
    if (config.drag) {
      Utils.drag(popsElement, {
        handle: titleElement,
        position: getComputedStyle(popsElement).position,
        top: getComputedStyle(popsElement).top,
        left: getComputedStyle(popsElement).left,
        limit: true,
      });
    }
    var normalLeft = "";
    minElement?.addEventListener("click", (event) => {
      var allMinElementList = []; /* 获取所有最小化的iframe */

      pops.config.layer.iframe.forEach((item) => {
        if (
          item.animElement != animElement &&
          item.popsElement.getAttribute("type-module") === "min"
        ) {
          allMinElementList = [...allMinElementList, item.popsElement];
        }
      });
      var maxLeftValue = allMinElementList.length
        ? allMinElementList.length * 205
        : 0;
      popsElement.style.transitionDuration = "";
      normalLeft = popsElement.style.left;
      popsElement.style.left = maxLeftValue + "px";
      popsElement.setAttribute("type-module", "min");
      animElement.querySelector(".pops-controls").setAttribute("type", "max");
      config.btn.min.callback(event);
    });
    maxElement?.addEventListener("click", (event) => {
      popsElement.style.transitionDuration = "";
      if (controlsElement.getAttribute("type") === "max") {
        /* 恢复 */
        popsElement.style.left = normalLeft;
        controlsElement.removeAttribute("type");
        popsElement.removeAttribute("type-module");
        var allMinElementList = [];
        pops.config.layer.iframe.forEach((item) => {
          if (
            item.animElement != animElement &&
            popsElement.getAttribute("type-module") === "min"
          ) {
            allMinElementList = [...allMinElementList, item.popsElement];
          }
        });
        allMinElementList.sort(
          Utils.sortElementListByProperty(
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
      Utils.configRemove([_this.config.layer.iframe], guid, false);
      setTimeout(() => {
        var allIsMinElementList = [];
        pops.config.layer.iframe.forEach((item) => {
          if (
            item.animElement != animElement &&
            popsElement.getAttribute("type-module") === "min"
          ) {
            allIsMinElementList = [...allIsMinElementList, item.popsElement];
          }
        });
        allIsMinElementList.sort(
          Utils.sortElementListByProperty(
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
    return {
      guid: guid,
      animElement: animElement,
      popsElement: popsElement,
      maskElement: maskElement,
      close: () => {
        Utils.configRemove([_this.config.layer.iframe], guid);
      },
      hide: () => {
        Utils.hide(_this.config.layer.iframe, guid);
      },
      show: () => {
        Utils.show(_this.config.layer.iframe, guid);
      },
    };
  };

  return pops;
});
