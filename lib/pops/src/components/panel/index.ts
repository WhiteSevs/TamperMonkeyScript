import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import type { PopsPanelDetails } from "./indexType";
import { PopsPanelConfig } from "./config";
import { PanelHandleContentDetails } from "./PanelHandleContentDetails";

export class PopsPanel {
	constructor(details: PopsPanelDetails) {
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.panelCSS,
		]);

		let config: Required<PopsPanelDetails> = PopsPanelConfig();
		config = popsUtils.assign(config, details);
		if (details && Array.isArray(details.content)) {
			config.content = details.content;
		}
		let guid = popsUtils.getRandomGUID();
		const PopsType = "panel";
		config = PopsHandler.handleOnly(PopsType, config);

		// 先把z-index提取出来
		let zIndex = PopsHandler.handleZIndex(config.zIndex);
		let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);

		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			PopsType,
			config
		);

		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			/*html*/ `
			<div 
				class="pops-${PopsType}-title"
				style="text-align: ${config.title.position};
				${headerStyle}">
				${
					config.title.html
						? config.title.text
						: `<p pops style="${headerPStyle}">${config.title.text}</p>`
				}
				${headerBtnHTML}
			</div>
			<div class="pops-${PopsType}-content">
				<aside class="pops-${PopsType}-aside">
					<ul></ul>
				</aside>
				<section class="pops-${PopsType}-container">
					<ul class="pops-panel-container-header-ul"></ul>
					<ul></ul>
				</section>
			</div>`,
			"",
			zIndex
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);
		/* 结构元素 */
		let {
			popsElement: $pops,
			headerCloseBtnElement: $headerCloseBtn,
			titleElement: $title,
			contentElement: $content,
			contentAsideElement: $contentAside,
			contentSectionContainerElement: $contentSectionContainer,
		} = PopsHandler.handleQueryElement($anim, PopsType);
		if (config.isMobile || pops.isPhone()) {
			popsDOMUtils.addClassName($pops, config.mobileClassName);
		}
		/**
		 * 遮罩层元素
		 */
		let $mask: HTMLDivElement | null = null;
		/**
		 * 已创建的元素列表
		 */
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
			$pops,
			$mask!,
			config
		);
		/* 为顶部右边的关闭按钮添加点击事件 */
		PopsHandler.handleClickEvent(
			"close",
			$headerCloseBtn,
			eventDetails,
			config.btn.close!.callback!
		);

		/* 创建到页面中 */
		popsDOMUtils.append($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		popsDOMUtils.appendBody($shadowContainer);
		/* 追加遮罩层元素 */
		if ($mask != null) {
			$anim.after($mask);
		}
		let panelHandleContentDetails = PanelHandleContentDetails();
		/**
		 * 处理内部配置
		 */
		panelHandleContentDetails.init({
			config: config,
			$el: {
				$content: $content,
				$contentAside: $contentAside,
				$contentSectionContainer: $contentSectionContainer,
			},
		});

		PopsHandler.handlePush(PopsType, {
			guid: guid,
			animElement: $anim,
			popsElement: $pops,
			maskElement: $mask!,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		/* 拖拽 */
		if (config.drag) {
			PopsInstanceUtils.drag($pops, {
				dragElement: $title,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		return PopsHandler.handleResultDetails(eventDetails);
	}
}
