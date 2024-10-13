import { GlobalConfig } from "../../GlobalConfig";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsTooltipConfig } from "./config";
import type { PopsToolTipDetails, PopsTooltipPosition } from "./indexType";

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
		function getContent() {
			return typeof config.content === "function"
				? config.content()
				: config.content;
		}
		/**
		 * 获取悬浮提示的元素信息
		 */
		function getToolTipElementInfo() {
			let _toolTipHTML_ = `<div class="pops-tip"></div>`;
			let _toolTipElement_ =
				popsUtils.parseTextToDOM<HTMLDivElement>(_toolTipHTML_);
			if (
				typeof config.className === "string" &&
				config.className.trim() !== ""
			) {
				popsDOMUtils.addClassName(_toolTipElement_, config.className);
			}
			_toolTipElement_.setAttribute("data-guid", guid);

			_toolTipElement_.style.zIndex = PopsHandler.handleZIndex(
				config.zIndex
			).toString();
			_toolTipElement_.innerHTML = `<div style="text-align: center;">${getContent()}</div>`;
			/* 箭头元素 */
			let _toolTipArrowHTML_ = '<div class="pops-tip-arrow"></div>';
			let _toolTipArrowNode_ =
				popsUtils.parseTextToDOM<HTMLDivElement>(_toolTipArrowHTML_);
			_toolTipElement_.appendChild(_toolTipArrowNode_);
			if (config.style != null) {
				/* 添加自定义style */
				let cssNode = document.createElement("style");
				cssNode.setAttribute("type", "text/css");
				cssNode.innerHTML = config.style;
				_toolTipElement_.appendChild(cssNode);
			}
			return {
				toolTipElement: _toolTipElement_,
				toolTipArrowElement: _toolTipArrowNode_,
				toolTipHTML: _toolTipHTML_,
				toolTipArrowHTML: _toolTipArrowHTML_,
			};
		}

		config.position =
			config.position.toLowerCase() as any as PopsTooltipPosition;
		let { toolTipElement } = getToolTipElementInfo();

		/**
		 * 设置 提示框的位置
		 */
		function setToolTipPosition(positionDetails: any) {
			let positionDetail = positionDetails[config.position.toUpperCase()];
			if (positionDetail) {
				toolTipElement.style.left = positionDetail.left + "px";
				toolTipElement.style.top = positionDetail.top + "px";
				toolTipElement.setAttribute("data-motion", positionDetail.motion);

				toolTipElement
					.querySelector<HTMLDivElement>(".pops-tip-arrow")
					?.setAttribute("data-position", positionDetail.arrow);
			} else {
				console.error("不存在该位置", config.position);
			}
		}

		/**
		 * 获取 提示框的位置
		 * @param targetElement 目标元素
		 * @param arrowDistance 箭头和目标元素的距离
		 * @param otherDistance 其它位置的偏移
		 */
		function getToolTipPosition(
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

			let toolTipElement_width = popsDOMUtils.outerWidth(toolTipElement);
			let toolTipElement_height = popsDOMUtils.outerHeight(toolTipElement);
			/* 目标元素的x轴的中间位置 */
			let targetElement_X_center_pos =
				targetElement_left + targetElement_width / 2 - toolTipElement_width / 2;
			/* 目标元素的Y轴的中间位置 */
			let targetElement_Y_center_pos =
				targetElement_top +
				targetElement_height / 2 -
				toolTipElement_height / 2;
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
		 * 显示提示框
		 */
		function showToolTipNode() {
			if (typeof config.showBeforeCallBack === "function") {
				let result = config.showBeforeCallBack();
				if (typeof result === "boolean" && !result) {
					return;
				}
			}

			if (!popsUtils.contains($shadowRoot, toolTipElement)) {
				popsDOMUtils.append($shadowRoot, toolTipElement);
			}

			if (!popsUtils.contains($shadowContainer)) {
				if (typeof config.beforeAppendToPageCallBack === "function") {
					config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
				}
				popsDOMUtils.append(document.body, $shadowContainer);
			}
			setToolTipPosition(
				getToolTipPosition(
					config.target,
					config.arrowDistance,
					config.otherDistance
				)
			);
			if (typeof config.showAfterCallBack === "function") {
				config.showAfterCallBack(toolTipElement);
			}
		}
		/**
		 * 关闭提示框
		 */
		function closeToolTipNode() {
			if (typeof config.closeBeforeCallBack === "function") {
				let result = config.closeBeforeCallBack(toolTipElement);
				if (typeof result === "boolean" && !result) {
					return;
				}
			}
			toolTipElement.setAttribute(
				"data-motion",
				toolTipElement.getAttribute("data-motion")!.replace("fadeIn", "fadeOut")
			);
			if (typeof config.closeAfterCallBack === "function") {
				config.closeAfterCallBack(toolTipElement);
			}
		}
		/**
		 * 绑定 显示事件
		 */
		function onShowEvent() {
			popsDOMUtils.on(
				config.target,
				config.triggerShowEventName,
				showToolTipNode,
				config.eventOption
			);
		}
		/**
		 * 绑定 关闭事件
		 */
		function onCloseEvent() {
			popsDOMUtils.on(
				config.target,
				config.triggerCloseEventName,
				closeToolTipNode,
				config.eventOption
			);
		}
		/**
		 * 取消绑定 显示事件
		 */
		function offShowEvent() {
			popsDOMUtils.off(
				config.target,
				config.triggerShowEventName,
				showToolTipNode,
				{
					capture: true,
				}
			);
		}
		/**
		 * 取消绑定 关闭事件
		 */
		function offCloseEvent() {
			popsDOMUtils.off(
				config.target,
				config.triggerCloseEventName,
				closeToolTipNode,
				{
					capture: true,
				}
			);
		}

		/**
		 * 即使存在动画属性，但是当前设置的动画Out结束后移除元素
		 */
		function endEvent() {
			if (toolTipElement.getAttribute("data-motion")!.includes("In")) {
				return;
			}
			toolTipElement.remove();
		}
		if (config.alwaysShow) {
			/* 总是显示 */
			showToolTipNode();
			return {
				guid: guid,
				config: config,
				toolTipNode: toolTipElement,
				show: showToolTipNode,
				close() {
					popsDOMUtils.on(
						toolTipElement,
						popsDOMUtils.getAnimationEndNameList(),
						endEvent,
						config.eventOption
					);
					closeToolTipNode();
				},
				off: null,
				on: null,
			};
		} else {
			/* 事件触发才显示 */

			/**
			 * 当鼠标|手触摸，暂停当前动画
			 */
			popsDOMUtils.on(
				toolTipElement,
				"mouseenter touchstart",
				() => {
					toolTipElement.style.animationPlayState = "paused";
					// if (parseInt(getComputedStyle(toolTipElement)) > 0.5) {
					// toolTipElement.style.animationPlayState = "paused";
					// }
				},
				config.eventOption
			);
			/**
			 * 当鼠标|手离开，开始当前动画
			 */
			popsDOMUtils.on(
				toolTipElement,
				"mouseleave touchend",
				() => {
					toolTipElement.style.animationPlayState = "running";
				},
				config.eventOption
			);
			popsDOMUtils.on(
				toolTipElement,
				popsDOMUtils.getAnimationEndNameList(),
				endEvent,
				config.eventOption
			);

			onShowEvent();
			onCloseEvent();
			return {
				guid: guid,
				$shadowContainer: $shadowContainer,
				$shadowRoot: $shadowRoot,
				config: config,
				toolTipNode: toolTipElement,
				show: showToolTipNode,
				close: closeToolTipNode,
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
	}
}
