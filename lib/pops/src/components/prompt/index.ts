import { GlobalConfig } from "../../GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsPromptConfig } from "./config";
import type { PopsPromptDetails } from "./indexType";

export class PopsPrompt {
	constructor(details: PopsPromptDetails) {
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.promptCSS,
		]);
		let config: Required<PopsPromptDetails> = PopsPromptConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		let guid = popsUtils.getRandomGUID();
		const PopsType = "prompt";

		config = PopsHandler.handleOnly(PopsType, config);

		// 先把z-index提取出来
		let zIndex = PopsHandler.handleZIndex(config.zIndex);
		let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);

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
			/*html*/ `
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
            `,
			bottomBtnHTML,
			zIndex
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */

		let $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);

		let {
			popsElement: $pops,
			inputElement: $input,
			headerCloseBtnElement: $btnClose,
			btnOkElement: $btnOk,
			btnCancelElement: $btnCancel,
			btnOtherElement: $btnOther,
			titleElement: $title,
		} = PopsHandler.handleQueryElement($anim, PopsType);
		/**
		 * 遮罩层元素
		 */
		let $mask: HTMLDivElement | null = null;

		/**
		 * 已创建的元素列表
		 */
		let elementList: HTMLElement[] = [$anim];

		if (config.mask.enable) {
			// 启用遮罩层
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

			$pops!,
			$mask!,
			config
		);
		/* 输入框赋值初始值 */

		$input!.value = config.content.text;
		PopsHandler.handlePromptClickEvent(
			"close",
			$input!,
			$btnClose!,
			eventDetails,

			config.btn.close!.callback!
		);

		PopsHandler.handlePromptClickEvent(
			"ok",
			$input!,
			$btnOk!,
			eventDetails,

			config.btn.ok!.callback!
		);
		PopsHandler.handlePromptClickEvent(
			"cancel",
			$input!,
			$btnCancel!,
			eventDetails,

			config.btn.cancel!.callback!
		);

		PopsHandler.handlePromptClickEvent(
			"other",
			$input!,
			$btnOther!,
			eventDetails,

			config.btn.other!.callback!
		);
		/* 创建到页面中 */

		popsDOMUtils.append($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}

		popsDOMUtils.appendBody($shadowContainer);
		if ($mask != null) {
			$anim.after($mask);
		}
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
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		/* 设置自动获取焦点 */
		if (config.content.focus) {
			$input.focus();
		}
		/* 设置自动选中所有文字 */
		if (config.content.select) {
			$input.select();
		}
		return PopsHandler.handleResultDetails(eventDetails);
	}
}
