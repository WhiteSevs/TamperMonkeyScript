import { GlobalConfig } from "../../GlobalConfig";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsTooltipConfig } from "./config";
import type { PopsToolTipDetails } from "./indexType";

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
		config: null as any as Required<PopsToolTipDetails>,
		guid: null as any as string,
		timeId_close_TouchEvent: <number[]>[],
		timeId_close_MouseEvent: <number[]>[],
	};
	constructor(
		config: Required<PopsToolTipDetails>,
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
		this.toolTipAnimationFinishEvent =
			this.toolTipAnimationFinishEvent.bind(this);
		this.toolTipMouseEnterEvent = this.toolTipMouseEnterEvent.bind(this);
		this.toolTipMouseLeaveEvent = this.toolTipMouseLeaveEvent.bind(this);
		this.init();
	}
	init() {
		let toolTipInfo = this.createToolTip();
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
		let $toolTipContainer = popsDOMUtils.createElement(
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
		let $toolTipContent =
			$toolTipContainer.querySelector<HTMLElement>(".pops-tip-content")!;
		/** 箭头 */
		let $toolTipArrow =
			$toolTipContainer.querySelector<HTMLElement>(".pops-tip-arrow")!;

		// 处理className
		if (
			typeof this.$data.config.className === "string" &&
			this.$data.config.className.trim() !== ""
		) {
			popsDOMUtils.addClassName($toolTipContainer, this.$data.config.className);
		}
		// 添加z-index
		$toolTipContainer.style.zIndex = PopsHandler.handleZIndex(
			this.$data.config.zIndex
		).toString();
		if (this.$data.config.style != null) {
			/* 添加自定义style */
			let cssNode = popsDOMUtils.createElement("style", {
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
		return typeof this.$data.config.content === "function"
			? this.$data.config.content()
			: this.$data.config.content;
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
			let contentPropKey = "data-content";
			// @ts-ignore
			let originContentText: string = this.$el.$content[contentPropKey];
			if (typeof originContentText === "string") {
				if (originContentText === text) {
					// 内容未改变，不修改避免渲染
					return;
				}
			}
			// @ts-ignore
			this.$el.$content[contentPropKey] = text;
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
		let offsetInfo = popsDOMUtils.offset(
			targetElement,
			!this.$data.config.isFixed
		);
		// 目标 宽
		let targetElement_width = offsetInfo.width;
		// 目标 高
		let targetElement_height = offsetInfo.height;
		// 目标 顶部距离
		let targetElement_top = offsetInfo.top;

		// let targetElement_bottom = offsetInfo.bottom;
		// 目标 左边距离
		let targetElement_left = offsetInfo.left;

		// let targetElement_right = offsetInfo.right;

		let toolTipElement_width = popsDOMUtils.outerWidth(this.$el.$toolTip);
		let toolTipElement_height = popsDOMUtils.outerHeight(this.$el.$toolTip);
		/* 目标元素的x轴的中间位置 */
		let targetElement_X_center_pos =
			targetElement_left + targetElement_width / 2 - toolTipElement_width / 2;
		/* 目标元素的Y轴的中间位置 */
		let targetElement_Y_center_pos =
			targetElement_top + targetElement_height / 2 - toolTipElement_height / 2;

		let mouseX = 0;
		let mouseY = 0;
		if (event != null) {
			if (event instanceof MouseEvent || event instanceof PointerEvent) {
				mouseX = event.pageX;
				mouseY = event.y;
			} else if (event instanceof TouchEvent) {
				let touchEvent = event.touches[0];
				mouseX = touchEvent.pageX;
				mouseY = touchEvent.pageY;
			} else {
				// @ts-ignore
				if (typeof event.clientX === "number") {
					// @ts-ignore
					mouseX = event.clientX;
				}
				// @ts-ignore
				if (typeof event.clientY === "number") {
					// @ts-ignore
					mouseY = event.clientY;
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
		let positionInfo = this.calcToolTipPosition(
			this.$data.config.target,
			this.$data.config.arrowDistance,
			this.$data.config.otherDistance,
			event
		);
		let positionKey = this.$data.config.position.toUpperCase() as any as
			| keyof typeof positionInfo;
		let positionDetail = positionInfo[positionKey];
		if (positionDetail) {
			this.$el.$toolTip.style.left = positionDetail.left + "px";
			this.$el.$toolTip.style.top = positionDetail.top + "px";
			this.$el.$toolTip.setAttribute("data-motion", positionDetail.motion);

			this.$el.$arrow.setAttribute("data-position", positionDetail.arrow);
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
		let timeIdList =
			type === "MouseEvent"
				? this.$data.timeId_close_MouseEvent
				: this.$data.timeId_close_TouchEvent;
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
		let event = args[0] as MouseEvent | TouchEvent;
		let eventType: ToolTipEventTypeName =
			event instanceof MouseEvent ? "MouseEvent" : "TouchEvent";
		this.clearCloseTimeoutId(eventType);

		if (typeof this.$data.config.showBeforeCallBack === "function") {
			let result = this.$data.config.showBeforeCallBack(this.$el.$toolTip);
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
				this.$data.config.beforeAppendToPageCallBack(
					this.$el.$shadowRoot,
					this.$el.$shadowContainer
				);
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
			this.$data.config.target,
			this.$data.config.triggerShowEventName,
			this.show,
			this.$data.config.eventOption
		);
	}
	/**
	 * 取消绑定 显示事件
	 */
	offShowEvent() {
		popsDOMUtils.off(
			this.$data.config.target,
			this.$data.config.triggerShowEventName,
			this.show,
			{
				capture: true,
			}
		);
	}
	/**
	 * 关闭提示框
	 */
	close(...args: any[]) {
		let event = args[0] as MouseEvent | TouchEvent;
		let eventType: ToolTipEventTypeName =
			event instanceof MouseEvent ? "MouseEvent" : "TouchEvent";
		// 只判断鼠标事件
		// 其它的如Touch事件不做处理
		if (event && event instanceof MouseEvent) {
			let $target = event.composedPath()[0];
			// 如果是目标元素的子元素/tooltip元素的子元素触发的话，那就不管
			if ($target != this.$data.config.target && $target != this.$el.$toolTip) {
				return;
			}
		}
		if (typeof this.$data.config.closeBeforeCallBack === "function") {
			let result = this.$data.config.closeBeforeCallBack(this.$el.$toolTip);
			if (typeof result === "boolean" && !result) {
				return;
			}
		}
		if (
			this.$data.config.delayCloseTime == null ||
			(typeof this.$data.config.delayCloseTime === "number" &&
				this.$data.config.delayCloseTime <= 0)
		) {
			this.$data.config.delayCloseTime = 100;
		}
		let timeId = popsUtils.setTimeout(() => {
			// 设置属性触发关闭动画
			this.clearCloseTimeoutId(eventType, timeId);
			if (this.$el.$toolTip == null) {
				// 已清除了
				return;
			}
			let motion = this.$el.$toolTip.getAttribute("data-motion");
			if (motion == null || motion.trim() === "") {
				// 没有动画
				this.toolTipAnimationFinishEvent();
			} else {
				// 修改data-motion触发动画关闭
				this.$el.$toolTip.setAttribute(
					"data-motion",
					this.$el.$toolTip
						.getAttribute("data-motion")!
						.replace("fadeIn", "fadeOut")
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
			this.$data.config.target,
			this.$data.config.triggerCloseEventName,
			this.close,
			this.$data.config.eventOption
		);
	}
	/**
	 * 取消绑定 关闭事件
	 */
	offCloseEvent() {
		popsDOMUtils.off(
			this.$data.config.target,
			this.$data.config.triggerCloseEventName,
			this.close,
			{
				capture: true,
			}
		);
	}
	/**
	 * 销毁元素
	 */
	destory() {
		if (this.$el.$toolTip) {
			this.$el.$shadowRoot.removeChild(this.$el.$toolTip);
		}
		// @ts-ignore
		this.$el.$toolTip = null;
		// @ts-ignore
		this.$el.$arrow = null;
		// @ts-ignore
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
		popsDOMUtils.on(
			this.$el.$toolTip,
			popsDOMUtils.getAnimationEndNameList(),
			this.toolTipAnimationFinishEvent
		);
	}
	/**
	 * 取消tooltip监听动画结束
	 */
	offToolTipAnimationFinishEvent() {
		popsDOMUtils.off(
			this.$el.$toolTip,
			popsDOMUtils.getAnimationEndNameList(),
			this.toolTipAnimationFinishEvent
		);
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
	 * 取消监听鼠标|触摸事件
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
	 * 鼠标|触摸离开事件
	 */
	toolTipMouseLeaveEvent(event: MouseEvent | PointerEvent) {
		this.close(event);
		// this.$el.$toolTip.style.animationPlayState = "running";
	}
	/**
	 * 监听鼠标|触摸离开事件
	 */
	onToolTipMouseLeaveEvent() {
		popsDOMUtils.on(
			this.$el.$toolTip,
			"mouseleave touchend",
			this.toolTipMouseLeaveEvent,
			this.$data.config.eventOption
		);
	}
	/**
	 * 取消监听鼠标|触摸离开事件
	 */
	offToolTipMouseLeaveEvent() {
		popsDOMUtils.off(
			this.$el.$toolTip,
			"mouseleave touchend",
			this.toolTipMouseLeaveEvent,
			this.$data.config.eventOption
		);
	}
}

export type PopsTooltipResult<T extends PopsToolTipDetails> = {
	guid: string;
	config: T;
	$shadowContainer: HTMLDivElement;
	$shadowRoot: ShadowRoot;
	toolTip: typeof ToolTip.prototype;
};

export const PopsTooltip = {
	init(details: PopsToolTipDetails) {
		const guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const PopsType = "tooltip";

		let config = PopsTooltipConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		if (!(config.target instanceof HTMLElement)) {
			throw new TypeError("config.target 必须是HTMLElement类型");
		}
		config = PopsHandler.handleOnly(PopsType, config);

		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.tooltipCSS,
		]);

		let toolTip = new ToolTip(config, guid, {
			$shadowContainer,
			$shadowRoot,
		});
		if (config.alwaysShow) {
			/* 总是显示 */
			/* 直接显示 */
			toolTip.show();
		} else {
			/* 事件触发才显示 */
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
