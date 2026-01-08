import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsTooltipDefaultConfig } from "./defaultConfig";
import type { PopsToolTipConfig } from "./types/index";

type ToolTipEventTypeName = "MouseEvent" | "TouchEvent";

export class ToolTip {
  $el = {
    $shadowContainer: null as unknown as HTMLDivElement,
    $shadowRoot: null as unknown as ShadowRoot | HTMLElement,
    $toolTip: null as unknown as HTMLElement,
    $content: null as unknown as HTMLElement,
    $arrow: null as unknown as HTMLElement,
  };
  $data = {
    config: null as any as Required<PopsToolTipConfig>,
    guid: null as any as string,
    timeId_close_TouchEvent: <number[]>[],
    timeId_close_MouseEvent: <number[]>[],
  };
  constructor(
    config: Required<PopsToolTipConfig>,
    guid: string,
    ShadowInfo: {
      $shadowContainer: HTMLDivElement;
      $shadowRoot: ShadowRoot | HTMLElement;
    }
  ) {
    this.$data.config = config;
    this.$data.guid = guid;
    this.$el.$shadowContainer = ShadowInfo.$shadowContainer;
    this.$el.$shadowRoot = ShadowInfo.$shadowRoot;
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.toolTipAnimationFinishEvent = this.toolTipAnimationFinishEvent.bind(this);
    this.toolTipMouseEnterEvent = this.toolTipMouseEnterEvent.bind(this);
    this.toolTipMouseLeaveEvent = this.toolTipMouseLeaveEvent.bind(this);
    this.init();
  }
  init() {
    const toolTipInfo = this.createToolTip();
    this.$el.$toolTip = toolTipInfo.$toolTipContainer;
    this.$el.$content = toolTipInfo.$toolTipContent;
    this.$el.$arrow = toolTipInfo.$toolTipArrow;

    this.changeContent();
    this.changeZIndex();
    this.changePosition();

    if (!this.$data.config.alwaysShow) {
      this.offEvent();
      this.onEvent();
    }
  }
  /**
   * 创建提示元素
   */
  createToolTip() {
    const $toolTipContainer = popsDOMUtils.createElement(
      "div",
      {
        className: "pops-tip",
        innerHTML: /*html*/ `
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`,
      },
      {
        "data-position": this.$data.config.isFixed ? "fixed" : "absolute",
        "data-guid": this.$data.guid,
      }
    );
    /** 内容 */
    const $toolTipContent = $toolTipContainer.querySelector<HTMLElement>(".pops-tip-content")!;
    /** 箭头 */
    const $toolTipArrow = $toolTipContainer.querySelector<HTMLElement>(".pops-tip-arrow")!;

    // 处理className
    popsDOMUtils.addClassName($toolTipContainer, this.$data.config.className);
    // 添加z-index
    $toolTipContainer.style.zIndex = PopsHandler.handleZIndex(this.$data.config.zIndex).toString();
    if (this.$data.config.style != null) {
      // 添加自定义style
      const cssNode = popsDOMUtils.createElement("style", {
        type: "text/css",
        innerHTML: this.$data.config.style,
      });
      $toolTipContainer.appendChild(cssNode);
    }
    // 处理是否显示箭头元素
    if (!this.$data.config.showArrow) {
      $toolTipArrow.remove();
    }
    return {
      $toolTipContainer: $toolTipContainer,
      $toolTipArrow: $toolTipArrow,
      $toolTipContent: $toolTipContent,
    };
  }
  /**
   * 获取提示的内容
   */
  getContent() {
    return typeof this.$data.config.content === "function" ? this.$data.config.content() : this.$data.config.content;
  }
  /**
   * 修改提示的内容
   * @param text
   */
  changeContent(text?: string) {
    if (text == null) {
      text = this.getContent();
    }
    if (this.$data.config.isDiffContent) {
      const contentPropKey = "data-content";
      const originContentText: string = Reflect.get(this.$el.$content, contentPropKey);
      if (typeof originContentText === "string") {
        if (originContentText === text) {
          // 内容未改变，不修改避免渲染
          return;
        }
      }
      Reflect.set(this.$el.$content, contentPropKey, text);
    }
    PopsSafeUtils.setSafeHTML(this.$el.$content, text);
  }
  /**
   * 获取z-index
   */
  getZIndex() {
    const zIndex = PopsHandler.handleZIndex(this.$data.config.zIndex);
    return zIndex;
  }
  /**
   * 动态修改z-index
   */
  changeZIndex() {
    const zIndex = this.getZIndex();
    this.$el.$toolTip.style.setProperty("z-index", zIndex.toString());
  }
  /**
   * 计算 提示框的位置
   * @param event 触发的事件
   * @param targetElement 目标元素
   * @param arrowDistance 箭头和目标元素的距离
   * @param otherDistance 其它位置的偏移
   */
  calcToolTipPosition(
    targetElement: HTMLElement,
    arrowDistance: number,
    otherDistance: number,
    event?: MouseEvent | TouchEvent | PointerEvent
  ) {
    const offsetInfo = popsDOMUtils.offset(targetElement, !this.$data.config.isFixed);
    // 目标 宽
    const targetElement_width = offsetInfo.width;
    // 目标 高
    const targetElement_height = offsetInfo.height;
    // 目标 顶部距离
    const targetElement_top = offsetInfo.top;

    // let targetElement_bottom = offsetInfo.bottom;
    // 目标 左边距离
    const targetElement_left = offsetInfo.left;

    // let targetElement_right = offsetInfo.right;

    const toolTipElement_width = popsDOMUtils.outerWidth(this.$el.$toolTip);
    const toolTipElement_height = popsDOMUtils.outerHeight(this.$el.$toolTip);
    // 目标元素的x轴的中间位置
    const targetElement_X_center_pos = targetElement_left + targetElement_width / 2 - toolTipElement_width / 2;
    // 目标元素的Y轴的中间位置
    const targetElement_Y_center_pos = targetElement_top + targetElement_height / 2 - toolTipElement_height / 2;

    let mouseX = 0;
    let mouseY = 0;
    if (event != null) {
      if (event instanceof MouseEvent || event instanceof PointerEvent) {
        mouseX = event.pageX;
        mouseY = event.y;
      } else if (event instanceof TouchEvent) {
        const touchEvent = event.touches[0];
        mouseX = touchEvent.pageX;
        mouseY = touchEvent.pageY;
      } else {
        if (typeof (<MouseEvent>event).clientX === "number") {
          mouseX = (<MouseEvent>event).clientX;
        }
        if (typeof (<MouseEvent>event).clientY === "number") {
          mouseY = (<MouseEvent>event).clientY;
        }
      }
    }
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
      FOLLOW: {
        left: mouseX + otherDistance,
        top: mouseY + otherDistance,
        arrow: "follow",
        motion: "",
      },
    };
  }
  /**
   * 动态修改tooltip的位置
   */
  changePosition(event?: MouseEvent | TouchEvent | PointerEvent) {
    const positionInfo = this.calcToolTipPosition(
      this.$data.config.$target,
      this.$data.config.arrowDistance,
      this.$data.config.otherDistance,
      event
    );
    const positionKey = this.$data.config.position.toUpperCase() as keyof typeof positionInfo;
    const position = positionInfo[positionKey];
    if (position) {
      this.$el.$toolTip.style.left = position.left + "px";
      this.$el.$toolTip.style.top = position.top + "px";
      this.$el.$toolTip.setAttribute("data-motion", position.motion);

      this.$el.$arrow.setAttribute("data-position", position.arrow);
    } else {
      console.error("不存在该位置", this.$data.config.position);
    }
  }
  /**
   * 事件绑定
   */
  onEvent() {
    // 监听动画结束事件
    this.onToolTipAnimationFinishEvent();
    this.onShowEvent();
    this.onCloseEvent();
    this.onToolTipMouseEnterEvent();
    this.onToolTipMouseLeaveEvent();
  }
  /**
   * 取消事件绑定
   */
  offEvent() {
    this.offToolTipAnimationFinishEvent();
    this.offShowEvent();
    this.offCloseEvent();
    this.offToolTipMouseEnterEvent();
    this.offToolTipMouseLeaveEvent();
  }
  /**
   * 添加关闭的timeId
   * @param type
   * @param timeId
   */
  addCloseTimeoutId(type: ToolTipEventTypeName, timeId: number) {
    if (type === "MouseEvent") {
      this.$data.timeId_close_MouseEvent.push(timeId);
    } else {
      this.$data.timeId_close_TouchEvent.push(timeId);
    }
  }
  /**
   * 清除延迟的timeId
   * @param type 事件类型
   */
  clearCloseTimeoutId(type: ToolTipEventTypeName, timeId?: number) {
    const timeIdList = type === "MouseEvent" ? this.$data.timeId_close_MouseEvent : this.$data.timeId_close_TouchEvent;
    for (let index = 0; index < timeIdList.length; index++) {
      const currentTimeId = timeIdList[index];
      if (typeof timeId === "number") {
        // 只清除一个
        if (timeId == currentTimeId) {
          popsUtils.clearTimeout(timeId);
          timeIdList.splice(index, 1);
          break;
        }
      } else {
        popsUtils.clearTimeout(currentTimeId);
        timeIdList.splice(index, 1);
        index--;
      }
    }
  }
  /**
   * 显示提示框
   */
  show(...args: any[]) {
    const event = args[0] as MouseEvent | TouchEvent;
    const eventType: ToolTipEventTypeName = event instanceof MouseEvent ? "MouseEvent" : "TouchEvent";
    this.clearCloseTimeoutId(eventType);

    if (typeof this.$data.config.showBeforeCallBack === "function") {
      const result = this.$data.config.showBeforeCallBack(this.$el.$toolTip);
      if (typeof result === "boolean" && !result) {
        return;
      }
    }
    if (!popsUtils.contains(this.$el.$shadowRoot, this.$el.$toolTip)) {
      // 不在容器中，添加
      this.init();
      popsDOMUtils.append(this.$el.$shadowRoot, this.$el.$toolTip);
    }

    if (!popsUtils.contains(this.$el.$shadowContainer)) {
      // 页面不存在Shadow，添加
      if (typeof this.$data.config.beforeAppendToPageCallBack === "function") {
        this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot, this.$el.$shadowContainer);
      }
      popsDOMUtils.append(document.body, this.$el.$shadowContainer);
    }

    // 更新内容
    this.changeContent();
    // 更新tip的位置
    this.changePosition(event);
    if (typeof this.$data.config.showAfterCallBack === "function") {
      this.$data.config.showAfterCallBack(this.$el.$toolTip);
    }
  }
  /**
   * 绑定 显示事件
   */
  onShowEvent() {
    popsDOMUtils.on(
      this.$data.config.$target,
      this.$data.config.onShowEventName,
      this.show,
      this.$data.config.eventOption
    );
  }
  /**
   * 取消绑定 显示事件
   */
  offShowEvent() {
    popsDOMUtils.off(
      this.$data.config.$target,
      this.$data.config.onShowEventName,
      this.show,
      this.$data.config.eventOption
    );
  }
  /**
   * 关闭提示框
   */
  close(...args: any[]) {
    const event = args[0] as MouseEvent | TouchEvent;
    const eventType: ToolTipEventTypeName = event instanceof MouseEvent ? "MouseEvent" : "TouchEvent";
    // 只判断鼠标事件
    // 其它的如Touch事件不做处理
    if (event && event instanceof MouseEvent) {
      const $target = event.composedPath()[0];
      // 如果是目标元素的子元素/tooltip元素的子元素触发的话，那就不管
      if ($target != this.$data.config.$target && $target != this.$el.$toolTip) {
        return;
      }
    }
    if (typeof this.$data.config.closeBeforeCallBack === "function") {
      const result = this.$data.config.closeBeforeCallBack(this.$el.$toolTip);
      if (typeof result === "boolean" && !result) {
        return;
      }
    }
    if (
      this.$data.config.delayCloseTime == null ||
      (typeof this.$data.config.delayCloseTime === "number" && this.$data.config.delayCloseTime <= 0)
    ) {
      this.$data.config.delayCloseTime = 100;
    }
    const timeId = popsUtils.setTimeout(() => {
      // 设置属性触发关闭动画
      this.clearCloseTimeoutId(eventType, timeId);
      if (this.$el.$toolTip == null) {
        // 已清除了
        return;
      }
      const motion = this.$el.$toolTip.getAttribute("data-motion");
      if (motion == null || motion.trim() === "") {
        // 没有动画
        this.toolTipAnimationFinishEvent();
      } else {
        // 修改data-motion触发动画关闭
        this.$el.$toolTip.setAttribute(
          "data-motion",
          this.$el.$toolTip.getAttribute("data-motion")!.replace("fadeIn", "fadeOut")
        );
      }
    }, this.$data.config.delayCloseTime);
    this.addCloseTimeoutId(eventType, timeId);
    if (typeof this.$data.config.closeAfterCallBack === "function") {
      this.$data.config.closeAfterCallBack(this.$el.$toolTip);
    }
  }
  /**
   * 绑定 关闭事件
   */
  onCloseEvent() {
    popsDOMUtils.on(
      this.$data.config.$target,
      this.$data.config.onCloseEventName,
      this.close,
      this.$data.config.eventOption
    );
  }
  /**
   * 取消绑定 关闭事件
   */
  offCloseEvent() {
    popsDOMUtils.off(
      this.$data.config.$target,
      this.$data.config.onCloseEventName,
      this.close,
      this.$data.config.eventOption
    );
  }
  /**
   * 销毁元素
   */
  destory() {
    if (this.$el.$toolTip) {
      this.$el.$toolTip.remove();
    }
    // @ts-expect-error
    this.$el.$toolTip = null;
    // @ts-expect-error
    this.$el.$arrow = null;
    // @ts-expect-error
    this.$el.$content = null;
  }
  /**
   * 动画结束事件
   */
  toolTipAnimationFinishEvent() {
    if (!this.$el.$toolTip) {
      return;
    }
    if (this.$el.$toolTip.getAttribute("data-motion")!.includes("In")) {
      return;
    }
    this.destory();
  }
  /**
   * 监听tooltip的动画结束
   */
  onToolTipAnimationFinishEvent() {
    popsDOMUtils.on(this.$el.$toolTip, popsDOMUtils.getAnimationEndNameList(), this.toolTipAnimationFinishEvent);
  }
  /**
   * 取消tooltip监听动画结束
   */
  offToolTipAnimationFinishEvent() {
    popsDOMUtils.off(this.$el.$toolTip, popsDOMUtils.getAnimationEndNameList(), this.toolTipAnimationFinishEvent);
  }
  /**
   * 鼠标|触摸进入事件
   */
  toolTipMouseEnterEvent() {
    this.clearCloseTimeoutId("MouseEvent");
    this.clearCloseTimeoutId("TouchEvent");
    // 重置动画状态
    // this.$el.$toolTip.style.animationPlayState = "paused";
    // if (parseInt(getComputedStyle(toolTipElement)) > 0.5) {
    // toolTipElement.style.animationPlayState = "paused";
    // }
  }
  /**
   * 监听鼠标|触摸事件
   */
  onToolTipMouseEnterEvent() {
    this.clearCloseTimeoutId("MouseEvent");
    this.clearCloseTimeoutId("TouchEvent");
    popsDOMUtils.on(
      this.$el.$toolTip,
      "mouseenter touchstart",
      this.toolTipMouseEnterEvent,
      this.$data.config.eventOption
    );
  }
  /**
   * 取消监听事件 - 鼠标|触摸
   */
  offToolTipMouseEnterEvent() {
    popsDOMUtils.off(
      this.$el.$toolTip,
      "mouseenter touchstart",
      this.toolTipMouseEnterEvent,
      this.$data.config.eventOption
    );
  }
  /**
   * 离开事件 - 鼠标|触摸
   */
  toolTipMouseLeaveEvent(event: MouseEvent | PointerEvent) {
    this.close(event);
    // this.$el.$toolTip.style.animationPlayState = "running";
  }
  /**
   * 监听离开事件 - 鼠标|触摸
   */
  onToolTipMouseLeaveEvent() {
    popsDOMUtils.on(
      this.$el.$toolTip,
      "mouseleave touchend touchcancel",
      this.toolTipMouseLeaveEvent,
      this.$data.config.eventOption
    );
  }
  /**
   * 取消监听离开事件 - 鼠标|触摸
   */
  offToolTipMouseLeaveEvent() {
    popsDOMUtils.off(
      this.$el.$toolTip,
      "mouseleave touchend touchcancel",
      this.toolTipMouseLeaveEvent,
      this.$data.config.eventOption
    );
  }
}

export type PopsTooltipResult<T extends PopsToolTipConfig> = {
  guid: string;
  config: T;
  $shadowContainer: HTMLDivElement;
  $shadowRoot: ShadowRoot;
  toolTip: typeof ToolTip.prototype;
};

export const PopsTooltip = {
  init(__config__: PopsToolTipConfig) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const popsType: PopsType = "tooltip";

    let config = PopsTooltipDefaultConfig();
    config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
    config = popsUtils.assign(config, __config__);
    if (!(config.$target instanceof HTMLElement)) {
      throw new TypeError("config.target 必须是HTMLElement类型");
    }
    config = PopsHandler.handleOnly(popsType, config);

    if (config.position === "follow") {
      config.onShowEventName = config.onShowEventName.trim();
      const showEventNameSplit = config.onShowEventName.split(" ");
      ["mousemove", "touchmove"].forEach((it) => {
        if (showEventNameSplit.includes(it)) return;
        config.onShowEventName += ` ${it}`;
      });
    }

    const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
    PopsHandler.handleInit($shadowRoot, [
      {
        name: "index",
        css: PopsCSS.index,
      },
      {
        name: "anim",
        css: PopsCSS.anim,
      },
      {
        name: "common",
        css: PopsCSS.common,
      },
      {
        name: "tooltipCSS",
        css: PopsCSS.tooltipCSS,
      },
    ]);

    const toolTip = new ToolTip(config, guid, {
      $shadowContainer,
      $shadowRoot,
    });
    if (config.alwaysShow) {
      // 总是显示
      // 直接显示
      toolTip.show();
    } else {
      // 事件触发才显示
    }

    return {
      guid,
      config,
      $shadowContainer,
      $shadowRoot,
      toolTip,
    };
  },
};
