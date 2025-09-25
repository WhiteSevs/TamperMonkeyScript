import { AnyTouch, log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { NetDiskView } from "../NetDiskView";
import { NetDiskSettingView } from "../setting/NetDiskSettingView";
import { NetDiskGlobalData } from "../../data/NetDiskGlobalData";
import indexCSS from "./index.css?raw";
import { GenerateData } from "@/main/data/NetDiskGenerateDataUtils";
import DOMUtils from "@whitesev/domutils";
import { Panel } from "@components/setting/panel";
import { NetDiskViewRightClickMenu } from "@/main/view/NetDiskViewRightClickMenu";

export const NetDiskSuspensionConfig = {
  position: {
    /** 悬浮按钮位置的x坐标 */
    suspensionX: GenerateData("suspensionX", DOMUtils.width(window) - 50),
    /** 悬浮按钮位置的y坐标 */
    suspensionY: GenerateData("suspensionY", (DOMUtils.height(window) - 50) / 2),
    /** 悬浮按钮所在位置的最大x */
    suspensionMaxX: GenerateData("susponsionMax-x", DOMUtils.width(window) - 50),
    /** 悬浮按钮所在位置的最小y */
    suspensionMaxY: GenerateData("suspensionMax-y", DOMUtils.height(window) - 50),
    /** 悬浮按钮是否在右边 */
    isRight: GenerateData("isRight", false),
  },
  mode: {
    current_suspension_smallwindow_mode: GenerateData(
      "current_suspension_smallwindow_mode",
      "suspension" as "smallwindow" | "suspension"
    ),
  },
};

export const NetDiskSuspension = {
  $el: {
    /**
     * 按钮元素
     */
    $suspension: null as any as HTMLDivElement,
    /**
     * 按钮元素的动态z-index的style元素
     */
    $suspensionZIndexStyle: null as any as HTMLStyleElement,
  },
  $data: {
    /** 是否已显示 */
    isShow: false,
    /** 是否已设置所有的事件 */
    isInitAllEvent: false,
    /** 是否正在切换背景 */
    isSwitchBackground: false,
  },
  /**
   * 初始化
   */
  init() {
    if (!this.$data.isShow) {
      this.$data.isShow = true;
      this.createElement();
      this.updateZIndex();
      this.updatePosition(true);
    }
    if (!this.$data.isInitAllEvent) {
      this.$data.isInitAllEvent = true;
      this.setAllEvent();
      this.setResizeEventListener();
    }
    this.changeBackground();
    this.show();
  },
  /**
   * 显示悬浮按钮
   */
  show() {
    DOMUtils.css(this.$el.$suspension, { display: "" });
  },
  /**
   * 隐藏悬浮按钮
   */
  hide() {
    DOMUtils.css(this.$el.$suspension, { display: "none" });
  },
  /**
   * 创建按钮元素
   */
  createElement() {
    if (NetDiskGlobalData.suspension.size.value < 15) {
      /* 大小不能小于 15px */
      NetDiskGlobalData.suspension.size.value = 15;
    }
    if (NetDiskGlobalData.suspension.size.value > 250) {
      /* 大小不能大于 250px */
      NetDiskGlobalData.suspension.size.value = 250;
    }
    if (NetDiskGlobalData.suspension.opacity.value < 0.1) {
      /* 透明度不能小于 0.1 */
      NetDiskGlobalData.suspension.opacity.value = 0.1;
    }
    if (NetDiskGlobalData.suspension.opacity.value > 1.0) {
      /* 透明度不能大于 1.0 */
      NetDiskGlobalData.suspension.opacity.value = 1.0;
    }
    let $shadowContainer = DOMUtils.createElement("div", {
      className: "whitesev-suspension-shadow-container",
    });
    let $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
    this.$el.$suspension = DOMUtils.createElement(
      "div",
      {
        id: "whitesevSuspensionId",
        className: "whitesevSuspension",
        innerHTML: /*html*/ `
					<style type="text/css">${indexCSS}</style>
					<style type="text/css" data-z-index></style>
					<div class="whitesevSuspensionMain">
						<div class="whitesevSuspensionFloor">
							<div class="netdisk"></div>
						</div>
					</div>
                `,
      },
      {
        style: `
                    width: ${NetDiskGlobalData.suspension.size.value}px;
                    height: ${NetDiskGlobalData.suspension.size.value}px;
                    opacity: ${NetDiskGlobalData.suspension.opacity.value}
                `,
      }
    );
    this.$el.$suspensionZIndexStyle = this.$el.$suspension.querySelector<HTMLStyleElement>("style[data-z-index]")!;
    $shadowRoot.appendChild(this.$el.$suspension);
    (document.body || document.documentElement).appendChild($shadowContainer);
  },
  /**
   * 设置 悬浮按钮所有事件
   */
  setAllEvent() {
    let that = this;
    let needDragElement = NetDiskView.$inst.suspension.$el.$suspension;
    let dragNode = new AnyTouch(needDragElement);
    let netDiskLinkViewTimer: number | undefined = void 0;
    let moveFlag = false;
    /* 是否是双击 */
    let isDouble = false;
    /* 点击元素，left偏移 */
    let clickElementLeftOffset = 0;
    /* 点击元素，top偏移 */
    let clickElementTopOffset = 0;
    /* 设置悬浮按钮 按下事件 */
    dragNode.on("pan", function (event) {
      if (!moveFlag) {
        moveFlag = true;
        let rect = needDragElement.getBoundingClientRect();
        clickElementLeftOffset = event.x - rect.left;
        clickElementTopOffset = event.y - rect.top;
        DOMUtils.css(needDragElement, {
          cursor: "move",
          transition: "none",
        });
      }
      // 按下
      if (event.phase === "start") {
        // 更新z-index
        that.updateZIndex();
      }
      // 移动
      if (event.phase === "move") {
        /* 悬浮按钮大小不能超过250px */
        /* left偏移最大值 */
        let maxLeftOffset = DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
        /* top偏移的最大值 */
        let maxTopOffset = DOMUtils.height(window) - NetDiskGlobalData.suspension.size.value;
        /* 当前移动的left偏移 */
        let currentSuspensionLeftOffset = event.x - clickElementLeftOffset;
        /* 当前移动的top偏移 */
        let currentSuspensionTopOffset = event.y - clickElementTopOffset;
        /* 不允许超过窗口最大宽度 */
        currentSuspensionLeftOffset =
          currentSuspensionLeftOffset > maxLeftOffset ? maxLeftOffset : currentSuspensionLeftOffset;
        /* 不允许超过窗口最大高度 */
        currentSuspensionTopOffset =
          currentSuspensionTopOffset > maxTopOffset ? maxTopOffset : currentSuspensionTopOffset;
        /* 不允许小于0 */
        currentSuspensionLeftOffset = currentSuspensionLeftOffset < 0 ? 0 : currentSuspensionLeftOffset;
        /* 不允许小于0 */
        currentSuspensionTopOffset = currentSuspensionTopOffset < 0 ? 0 : currentSuspensionTopOffset;
        NetDiskSuspension.savePosition({
          x: currentSuspensionLeftOffset,
          y: currentSuspensionTopOffset,
        });
        DOMUtils.css(needDragElement, {
          left: currentSuspensionLeftOffset + "px",
          top: currentSuspensionTopOffset + "px",
        });
      }

      // 松开
      if (event.phase === "end") {
        moveFlag = false;
        DOMUtils.css(needDragElement, {
          cursor: "auto",
        });
        /* 获取当前悬浮按钮left偏移 */
        let currentSuspensionLeftOffset = parseInt(DOMUtils.css(needDragElement, "left"));
        if (NetDiskGlobalData.suspension["suspended-button-adsorption-edge"].value) {
          let setCSSLeft = 0;
          /* 判断悬浮按钮是否在右边区域 */
          if (currentSuspensionLeftOffset >= DOMUtils.width(window) / 2) {
            /* 设置悬浮按钮的left偏移 */
            setCSSLeft = DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
            if (Panel.isTopWindow()) {
              NetDiskSuspensionConfig.position.isRight.value = true;
            }
          } else {
            if (Panel.isTopWindow()) {
              NetDiskSuspensionConfig.position.isRight.value = false;
            }
          }
          NetDiskSuspension.savePosition({
            x: setCSSLeft,
          });
          DOMUtils.css(needDragElement, {
            left: setCSSLeft + "px",
          });
        }
        DOMUtils.css(needDragElement, {
          transition: "left 300ms ease 0s",
        });
        // 更新z-index
        that.updateZIndex();
      }
    });
    /* 设置悬浮按钮 点击/按下事件 */
    dragNode.on("tap", function (event) {
      clearTimeout(netDiskLinkViewTimer);
      netDiskLinkViewTimer = void 0;
      if (isDouble) {
        isDouble = false;
        /* 判定为双击 */
        NetDiskSettingView.show();
      } else {
        netDiskLinkViewTimer = setTimeout(() => {
          isDouble = false;
          if (NetDiskGlobalData.features["netdisk-behavior-mode"].value.includes("smallwindow")) {
            NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value = "smallwindow";
            NetDiskView.$inst.suspension.hide();
          }
          NetDiskView.$inst.linkView.show();
        }, 200);
        isDouble = true;
      }
    });
    NetDiskViewRightClickMenu.setGlobalRightClickMenu(needDragElement);
  },
  /**
   * 设置window的resize事件监听，来重新设置悬浮按钮的位置
   */
  setResizeEventListener() {
    let isMobileInputKeyboard = ($el: Element | null | undefined) => {
      const localName = $el?.localName?.toLowerCase?.();
      if (typeof localName === "string" && ["input", "textarea"].includes(localName)) {
        /* 可能是移动端的输入框弹出的键盘导致的resize */
        return true;
      } else if ($el?.getAttribute?.("contenteditable") === "true" || $el?.closest?.("[contenteditable='true']")) {
        /* 可能是移动端的输入框弹出的键盘导致的resize */
        return true;
      }
      return false;
    };
    DOMUtils.on(globalThis, "resize", () => {
      if (utils.isPhone()) {
        let $active = document.activeElement;
        let $activeShadowRoot = $active?.shadowRoot?.activeElement;
        if (isMobileInputKeyboard($activeShadowRoot ?? $active)) {
          return;
        }
        if (!document.hasFocus()) {
          /* 页面失焦 */
          return true;
        }
      }
      this.updatePosition(false);
    });
  },
  /**
   * 保存悬浮按钮位置
   * @param position
   */
  savePosition(position: { x?: number; y?: number }) {
    if (!Panel.isTopWindow()) {
      // 必须在顶部窗口才可以保存位置
      return;
    }
    if (position == null) {
      return;
    }
    if (typeof position.x === "number") {
      NetDiskSuspensionConfig.position.suspensionX.value = position.x;
    }
    if (typeof position.y === "number") {
      NetDiskSuspensionConfig.position.suspensionY.value = position.y;
    }
    NetDiskSuspensionConfig.position.suspensionMaxX.value = NetDiskSuspensionConfig.position.suspensionMaxX.default;
    NetDiskSuspensionConfig.position.suspensionMaxY.value = NetDiskSuspensionConfig.position.suspensionMaxY.default;
  },
  /**
   * 更新悬浮按钮位置
   * @param isTrusted 是否为用户行为触发，如果为true，保存位置信息
   */
  updatePosition(isTrusted: boolean) {
    /** 最大的left偏移*/
    const MAX_X = DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
    /** 最大的top偏移 */
    const MAX_Y = DOMUtils.height(window) - NetDiskGlobalData.suspension.size.value;

    /** 上次页面的最大left偏移 */
    const LAST_MAX_X = NetDiskSuspensionConfig.position.suspensionMaxX.value;
    /** 上次页面的最大top偏移 */
    const LAST_MAX_Y = NetDiskSuspensionConfig.position.suspensionMaxY.value;

    // 把上面的配置的默认值重新设置一下，不能为50
    NetDiskSuspensionConfig.position.suspensionMaxX.default = MAX_X;
    NetDiskSuspensionConfig.position.suspensionMaxY.default = MAX_Y;
    /* 用户自己拖动设置的悬浮按钮left偏移 */
    let suspension_X = NetDiskSuspensionConfig.position.suspensionX.value;

    /* 用户自己拖动设置的悬浮按钮top偏移 */
    let suspension_Y = NetDiskSuspensionConfig.position.suspensionY.value;

    // 根据上一次移动的位置，判断上次的最大坐标是否和当前页面的最大坐标一致
    // 如果不一致，再根据百分比计算出当前页面的位置
    // 然后判断是否超出最大值
    // 超出最大值，则使用默认值
    if (MAX_X !== LAST_MAX_X) {
      // log.warn(`当前页面最大x和上次记录的不一致`);
      // 当前页面和上次的页面x坐标不一致
      // 计算出百分比
      let percent_X = suspension_X / LAST_MAX_X;
      // 再计算值
      let recalculate_suspension_X = MAX_X * percent_X;
      let old_position_X = suspension_X;
      suspension_X = recalculate_suspension_X;
      if (import.meta.env.DEV) {
        log.table([
          {
            介绍: "上次记录的值",
            X: old_position_X,
            MAX_X: LAST_MAX_X,
            percent: percent_X,
          },
          {
            介绍: "当前页面的值",
            X: suspension_X,
            MAX_X: MAX_X,
          },
        ]);
      }
    }
    if (MAX_Y !== LAST_MAX_Y) {
      // log.warn(`当前页面最大y和上次记录的不一致`);
      // 当前页面和上次的页面y坐标不一致
      // 计算出百分比
      let percent_Y = suspension_Y / LAST_MAX_Y;
      // 再计算值
      let recalculate_suspension_Y = MAX_Y * percent_Y;
      let old_position_Y = suspension_Y;
      suspension_Y = recalculate_suspension_Y;
      if (import.meta.env.DEV) {
        log.table([
          {
            介绍: "上次记录的值",
            Y: old_position_Y,
            MAX_Y: LAST_MAX_Y,
            percent: percent_Y,
          },
          {
            介绍: "当前页面的值",
            Y: suspension_Y,
            MAX_Y: MAX_Y,
          },
        ]);
      }
    }
    if (suspension_X > MAX_X) {
      // log.warn("left超出最大值，重置为最大值");
      /* 如果用户设置的left偏移为正的，那么是超出边界，归位设置为最大值 */
      suspension_X = MAX_X;
    } else if (suspension_X < 0) {
      // log.warn(`left超出最小值，重置为0`);
      /* 如果用户设置的left偏移为负的，那么是超出边界，归位设置为0 */
      suspension_X = 0;
    }
    if (suspension_Y > MAX_Y) {
      // log.warn("top超出最大值，重置为最大值");
      /* 如果用户设置的top偏移为正的，那么是超出边界，归位设置为最大值 */
      suspension_Y = MAX_Y;
    } else if (suspension_Y < 0) {
      // log.warn(`top超出最小值，重置为0`);
      /* 如果用户设置的top偏移为负的，那么是超出边界，归位设置为0 */
      suspension_Y = 0;
    }

    if (NetDiskGlobalData.suspension["suspended-button-adsorption-edge"].value) {
      // 吸附边缘，只需要该x坐标
      /* 如果isRight为true，悬浮按钮放到最右边，否则最左边 */
      if (NetDiskSuspensionConfig.position.isRight.value) {
        suspension_X = MAX_X;
      } else {
        suspension_X = 0;
      }
    }

    // 再保存处理的值
    if (isTrusted) {
      NetDiskSuspension.savePosition({
        x: suspension_X,
        y: suspension_Y,
      });
    }
    DOMUtils.css(NetDiskView.$inst.suspension.$el.$suspension, {
      left: suspension_X + "px",
      top: suspension_Y + "px",
    });
  },
  /**
   * 更新按钮的z-index值
   */
  updateZIndex() {
    // 悬浮按钮的z-index
    let suspendedZIndex = NetDiskGlobalData.suspension["suspended-z-index"].value;
    if (suspendedZIndex <= 0) {
      suspendedZIndex = utils.getMaxValue(40000, utils.getMaxZIndex(10));
    }
    /* 动态生成z-index */
    DOMUtils.html(
      this.$el.$suspensionZIndexStyle,
      /*css*/ `
			#whitesevSuspensionId{
				z-index: ${suspendedZIndex};
			}
			`
    );
  },
  /**
   * 悬浮按钮背景轮播 效果为淡入淡出
   */
  changeBackground() {
    if (this.$data.isSwitchBackground) {
      return;
    }
    /**
     * 获取随机背景的数组
     */
    function getRandBgList() {
      let resultList: string[] = [];
      NetDiskView.$data.isMatchedNetDiskIconMap.forEach((item) => {
        resultList = [...resultList, NetDiskView.$inst.icon.getIcon(item)];
      });
      return resultList;
    }
    /**
     * 进行切换 淡入淡出
     * @param fadeTime 淡入\淡出的时间
     * @param currentBackgroundSrc 当前的背景资源
     */
    function startSwitch(fadeTime: number, currentBackgroundSrc: string) {
      currentList = getRandBgList();
      DOMUtils.fadeOut(randBgNode, fadeTime, function () {
        currentIndex++;
        currentIndex = currentIndex < currentList.length ? currentIndex : 0;
        currentBackgroundSrc = currentList[currentIndex];
        DOMUtils.css(randBgNode, {
          "background-image": `url(${currentBackgroundSrc})`,
        });
        DOMUtils.fadeIn(randBgNode, fadeTime, function () {
          setTimeout(() => {
            startSwitch(parseInt(NetDiskGlobalData.suspension["randbg-time"].value.toString()), currentBackgroundSrc);
          }, parseInt(NetDiskGlobalData.suspension["randbg-show-time"].value.toString()));
        });
      });
    }
    let currentList: string[] = [];
    let currentIndex = 0;
    currentList = getRandBgList();
    let randBgSrc = currentList[currentIndex];
    let randBgNode =
      NetDiskView.$inst.suspension.$el.$suspension.querySelector<HTMLElement>(".whitesevSuspension .netdisk")!;
    DOMUtils.css(randBgNode, {
      "background-image": `url(${randBgSrc})`,
    });
    if (currentList.length < 2 || NetDiskGlobalData.suspension["randbg-time"].value <= 0) {
      /* 只有一个的话或淡入/淡出的时间<=0 就不进行背景切换 */
      return;
    }
    this.$data.isSwitchBackground = true;

    startSwitch(parseInt(NetDiskGlobalData.suspension["randbg-time"].value.toString().toString()), randBgSrc);
  },
};
