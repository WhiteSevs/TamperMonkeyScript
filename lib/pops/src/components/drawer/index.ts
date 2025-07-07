import { GlobalConfig } from "../../GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsCSS } from "../../PopsCSS";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsDrawerConfig } from "./config";
import type { PopsDrawerDetails } from "./types";

export const PopsDrawer = {
	init(details: PopsDrawerDetails) {
		const guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const PopsType = "drawer";
		let config = PopsDrawerConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		config = PopsHandler.handleOnly(PopsType, config);

		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
		PopsHandler.handleInit($shadowRoot, [
			PopsCSS.index,
			PopsCSS.ninePalaceGridPosition,
			PopsCSS.scrollbar,
			PopsCSS.button,
			PopsCSS.anim,
			PopsCSS.common,
			PopsCSS.drawerCSS,
		]);

		// 先把z-index提取出来
		let zIndex = PopsHandler.handleZIndex(config.zIndex);
		let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);

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
			/*html*/ `
            ${
							config.title.enable
								? /*html*/ `<div class="pops-title pops-${PopsType}-title" style="${headerStyle}">${
										config.title.html
											? config.title.text
											: /*html*/ `<p pops style="width: 100%;text-align: ${config.title.position};${headerPStyle}">${config.title.text}</p>`
								  }${headerBtnHTML}</div>`
								: ""
						}
            <div class="pops-content pops-${PopsType}-content" style="${contentStyle}">${
				config.content.html
					? config.content.text
					: `<p pops style="${contentPStyle}">${config.content.text}</p>`
			}</div>${bottomBtnHTML}`,
			bottomBtnHTML,
			zIndex
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);
		let {
			popsElement,
			headerCloseBtnElement,
			btnCancelElement,
			btnOkElement,
			btnOtherElement,
		} = PopsHandler.handleQueryElement($anim, PopsType);
		let $pops = popsElement!;
		let $headerCloseBtn = headerCloseBtnElement!;
		let $btnCancel = btnCancelElement!;
		let $btnOk = btnOkElement!;
		let $btnOther = btnOtherElement!;
		/**
		 * 遮罩层元素
		 */
		let $mask: HTMLDivElement | null = null;
		/**
		 * 已创建的元素列表
		 */
		let elementList: HTMLElement[] = [$anim];

		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				config: config,
				animElement: $anim,
				maskHTML: maskHTML,
			});
			$mask = _handleMask_.maskElement;
			elementList.push($mask);
		}
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			$anim,
			$pops,
			$mask!,
			config
		);
		/* 处理方向 */

		$pops.setAttribute("direction", config.direction);

		/* 处理border-radius */
		/* 处理动画前的宽高 */
		if (config.direction === "top") {
			$pops.style.setProperty("height", "0");

			$pops.style.setProperty(
				"border-radius",
				`0px 0px ${config.borderRadius}px ${config.borderRadius}px`
			);
		} else if (config.direction === "bottom") {
			$pops.style.setProperty("height", "0");

			$pops.style.setProperty(
				"border-radius",
				`${config.borderRadius}px ${config.borderRadius}px 0px 0px`
			);
		} else if (config.direction === "left") {
			$pops.style.setProperty("width", "0");

			$pops.style.setProperty(
				"border-radius",
				`0px ${config.borderRadius}px 0px ${config.borderRadius}px`
			);
		} else if (config.direction === "right") {
			$pops.style.setProperty("width", "0");

			$pops.style.setProperty(
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
			{
				type: "close",
				ele: $headerCloseBtn,
			},
			{
				type: "cancel",
				ele: $btnCancel,
			},
			{
				type: "ok",
				ele: $btnOk,
			},
			{
				type: "other",
				ele: $btnOther,
			},
		];
		needHandleClickEventList.forEach((item) => {
			PopsHandler.handleClickEvent(
				item.type as "close" | "cancel" | "ok" | "other",
				item.ele,
				eventDetails,
				(_eventDetails_) => {
					if (typeof (config.btn as any)[item.type].callback === "function") {
						(config.btn as any)[item.type].callback(_eventDetails_);
					}
				}
			);
		});

		/* 先隐藏，然后根据config.openDelay来显示 */
		elementList.forEach((element) => {
			element.style.setProperty("display", "none");
			if (["top"].includes(config.direction)) {
				$pops.style.setProperty("height", config.size.toString());

				$pops.style.setProperty("transform", "translateY(-100%)");
			} else if (["bottom"].includes(config.direction)) {
				$pops.style.setProperty("height", config.size.toString());

				$pops.style.setProperty("transform", "translateY(100%)");
			} else if (["left"].includes(config.direction)) {
				$pops.style.setProperty("width", config.size.toString());

				$pops.style.setProperty("transform", "translateX(-100%)");
			} else if (["right"].includes(config.direction)) {
				$pops.style.setProperty("width", config.size.toString());

				$pops.style.setProperty("transform", "translateX(100%)");
			}
			element.style.setProperty("display", "");
		});
		/* 创建到页面中 */

		popsDOMUtils.append($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}

		popsDOMUtils.appendBody($shadowContainer);
		popsUtils.setTimeout(() => {
			popsUtils.setTimeout(() => {
				$pops.style.setProperty("transform", "");
			}, config.openDelay);
		}, 50);

		if ($mask != null) {
			$anim.after($mask);
		}

		PopsHandler.handlePush(PopsType, {
			guid: guid,
			animElement: $anim,
			popsElement: $pops,
			maskElement: $mask!,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		let result = PopsHandler.handleResultDetails(eventDetails);
		return result;
	},
};
