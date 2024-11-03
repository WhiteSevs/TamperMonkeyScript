import { GlobalConfig } from "../../GlobalConfig";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsTooltipConfig } from "./config";
import type { PopsToolTipDetails } from "./indexType";

export class ToolTip {
	$el = {
		$shadowContainer: null as unknown as HTMLDivElement,
		$shadowRoot: null as unknown as ShadowRoot,
		$toolTip: null as unknown as HTMLElement,
		$content: null as unknown as HTMLElement,
		$arrow: null as unknown as HTMLElement,
	};
	$data = {
		config: null as any as Required<PopsToolTipDetails>,
		guid: null as any as string,
		timeId_show: <number[]>[],
		timeId_close: <number[]>[],
	};
	constructor(
		config: Required<PopsToolTipDetails>,
		guid: string,
		ShadowInfo: {
			$shadowContainer: HTMLDivElement;
			$shadowRoot: ShadowRoot;
		}
	) {
		this.$data.config = config;
		this.$data.guid = guid;
		this.$el.$shadowContainer = ShadowInfo.$shadowContainer;
		this.$el.$shadowRoot = ShadowInfo.$shadowRoot;

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
			this.onEvent();
		}
	}
	/**
	 * 创建提示元素
	 */
	createToolTip() {
		let $toolTipContainer = popsDOMUtils.createElement("div", {
			className: "pops-tip",
			innerHTML: /*html*/ `
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`,
		});
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
		// 添加attr
		$toolTipContainer.setAttribute("data-guid", this.$data.guid);
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
		this.$el.$content.innerHTML = text;
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
	 * 获取 提示框的位置
	 * @param targetElement 目标元素
	 * @param arrowDistance 箭头和目标元素的距离
	 * @param otherDistance 其它位置的偏移
	 */
	getPosition(
		targetElement: HTMLElement,
		arrowDistance: number,
		otherDistance: number
	) {
		let targetElement_width = popsDOMUtils.offset(targetElement).width;
		let targetElement_height = popsDOMUtils.offset(targetElement).height;
		let targetElement_top = popsDOMUtils.offset(targetElement).top;

		// let targetElement_bottom = popsDOMUtils.offset(targetElement).bottom;
		let targetElement_left = popsDOMUtils.offset(targetElement).left;

		// let targetElement_right = popsDOMUtils.offset(targetElement).right;

		let toolTipElement_width = popsDOMUtils.outerWidth(this.$el.$toolTip);
		let toolTipElement_height = popsDOMUtils.outerHeight(this.$el.$toolTip);
		/* 目标元素的x轴的中间位置 */
		let targetElement_X_center_pos =
			targetElement_left + targetElement_width / 2 - toolTipElement_width / 2;
		/* 目标元素的Y轴的中间位置 */
		let targetElement_Y_center_pos =
			targetElement_top + targetElement_height / 2 - toolTipElement_height / 2;
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
	 * 动态修改tooltip的位置
	 */
	changePosition() {
		let positionInfo = this.getPosition(
			this.$data.config.target,
			this.$data.config.arrowDistance,
			this.$data.config.otherDistance
		);
		let positionKey =
			this.$data.config.position.toUpperCase() as any as keyof typeof positionInfo;
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
		this.onAnimationFinishEvent();
		this.onShowEvent();
		this.onCloseEvent();
		this.onMouseEnterEvent();
		this.onMouseLeaveEvent();
	}
	/**
	 * 取消事件绑定
	 */
	offEvent() {
		this.offAnimationFinishEvent();
		this.offShowEvent();
		this.offCloseEvent();
	}
	/**
	 * 显示提示框
	 */
	show() {
		if (typeof this.$data.config.showBeforeCallBack === "function") {
			let result = this.$data.config.showBeforeCallBack(this.$el.$toolTip);
			if (typeof result === "boolean" && !result) {
				return;
			}
		}
		for (let index = 0; index < this.$data.timeId_close.length; index++) {
			let timeId = this.$data.timeId_close[index];
			clearTimeout(timeId);
			this.$data.timeId_close.splice(index, 1);
			index--;
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
		this.changePosition();
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
			this.show.bind(this),
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
			this.show.bind(this),
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
		if (event) {
			let $target = event.composedPath()[0];
			// 如果是子元素触发的话，忽视
			if ($target != this.$data.config.target) {
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
		let timeId = setTimeout(() => {
			this.$el.$toolTip.setAttribute(
				"data-motion",
				this.$el.$toolTip
					.getAttribute("data-motion")!
					.replace("fadeIn", "fadeOut")
			);
		}, this.$data.config.delayCloseTime);
		this.$data.timeId_close.push(timeId);
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
			this.close.bind(this),
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
			this.close.bind(this),
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
	animationFinishEvent() {
		if (!this.$el.$toolTip) {
			return;
		}
		if (this.$el.$toolTip.getAttribute("data-motion")!.includes("In")) {
			return;
		}
		this.destory();
	}
	/**
	 * 监听动画结束
	 */
	onAnimationFinishEvent() {
		popsDOMUtils.on(
			this.$el.$toolTip,
			popsDOMUtils.getAnimationEndNameList(),
			this.animationFinishEvent.bind(this)
		);
	}
	/**
	 * 取消监听动画结束
	 */
	offAnimationFinishEvent() {
		popsDOMUtils.off(
			this.$el.$toolTip,
			popsDOMUtils.getAnimationEndNameList(),
			this.animationFinishEvent.bind(this)
		);
	}
	/**
	 * 当鼠标|手触摸
	 */
	onMouseEnterEvent() {
		for (let index = 0; index < this.$data.timeId_close.length; index++) {
			let timeId = this.$data.timeId_close[index];
			clearTimeout(timeId);
			this.$data.timeId_close.splice(index, 1);
			index--;
		}
		popsDOMUtils.on(
			this.$el.$toolTip,
			"mouseenter touchstart",
			() => {
				this.$el.$toolTip.style.animationPlayState = "paused";
				// if (parseInt(getComputedStyle(toolTipElement)) > 0.5) {
				// toolTipElement.style.animationPlayState = "paused";
				// }
			},
			this.$data.config.eventOption
		);
	}
	/**
	 * 当鼠标|手离开，开始当前动画
	 */
	onMouseLeaveEvent() {
		popsDOMUtils.on(
			this.$el.$toolTip,
			"mouseleave touchend",
			() => {
				this.$el.$toolTip.style.animationPlayState = "running";
			},
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

export class PopsTooltip {
	constructor(details: PopsToolTipDetails) {
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.tooltipCSS,
		]);

		let config: Required<PopsToolTipDetails> = PopsTooltipConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		if (!(config.target instanceof HTMLElement)) {
			throw "config.target 必须是HTMLElement类型";
		}
		let guid = popsUtils.getRandomGUID();
		const PopsType = "tooltip";

		config = PopsHandler.handleOnly(PopsType, config);

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
			guid: guid,
			config: config,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
			toolTip: toolTip,
		};
	}
}
