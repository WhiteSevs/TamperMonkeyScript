import { GlobalConfig } from "../../GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsAlertConfig } from "./config";
import type { PopsMode } from "../../types/main";
import type { PopsAlertDetails } from "./types";
import { PopsCSS } from "../../PopsCSS";

export const PopsAlert = {
	init(details: PopsAlertDetails) {
		const guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const PopsType: PopsMode = "alert";
		let config = PopsAlertConfig();
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
			PopsCSS.alertCSS,
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
			<div class="pops-alert-title" style="text-align: ${
				config.title.position
			};${headerStyle}">${
				config.title.html
					? config.title.text
					: `<p pops style="${headerPStyle}">${config.title.text}</p>`
			}${headerBtnHTML}</div>
			<div class="pops-alert-content" style="${contentStyle}">${
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
			popsElement: $pops,
			headerCloseBtnElement: $headerCloseBtn,
			btnOkElement,
			titleElement: $title,
		} = PopsHandler.handleQueryElement($anim, PopsType);

		/** 遮罩层元素 */
		let $mask: HTMLDivElement | null = null;
		/** 已创建的元素列表 */
		let elementList: HTMLElement[] = [$anim];

		/* 遮罩层元素 */

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
		/* 处理返回的配置 */
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			$anim,
			$pops!,
			$mask!,
			config
		);
		/* 为顶部右边的关闭按钮添加点击事件 */
		PopsHandler.handleClickEvent(
			"close",
			$headerCloseBtn!,
			eventDetails,
			config.btn.close!.callback!
		);
		/* 为底部ok按钮添加点击事件 */
		PopsHandler.handleClickEvent(
			"ok",
			btnOkElement!,
			eventDetails!,
			config.btn.ok!.callback!
		);

		/* 创建到页面中 */

		popsDOMUtils.append($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}

		popsDOMUtils.appendBody($shadowContainer);
		if ($mask != null) {
			// 添加遮罩层
			$anim.after($mask);
		}
		/* 保存 */
		PopsHandler.handlePush(PopsType, {
			guid: guid,

			animElement: $anim,

			popsElement: $pops!,

			maskElement: $mask!,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		/* 拖拽 */
		if (config.drag) {
			PopsInstanceUtils.drag($pops!, {
				dragElement: $title!,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance!,
				moveCallBack: config.dragMoveCallBack!,
				endCallBack: config.dragEndCallBack!,
			});
		}

		let result = PopsHandler.handleResultDetails(eventDetails);
		return result;
	},
};
