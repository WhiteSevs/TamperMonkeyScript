import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import type { PopsPanelDetails, PopsPanelEventType } from "./types";
import { PopsPanelConfig } from "./config";
import { PanelHandlerComponents } from "./handlerComponents";
import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";

export const PopsPanel = {
	init(details: PopsPanelDetails) {
		const guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const popsType: PopsType = "panel";

		let config: Required<PopsPanelDetails> = PopsPanelConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		if (details && Array.isArray(details.content)) {
			config.content = details.content;
		}
		config = PopsHandler.handleOnly(popsType, config);

		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
		PopsHandler.handleInit($shadowRoot, [
			{
				name: "index",
				css: PopsCSS.index,
			},
			{
				name: "ninePalaceGridPosition",
				css: PopsCSS.ninePalaceGridPosition,
			},
			{
				name: "scrollbar",
				css: PopsCSS.scrollbar,
			},
			{
				name: "button",
				css: PopsCSS.button,
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
				name: "panelCSS",
				css: PopsCSS.panelCSS,
			},
		]);

		// 先把z-index提取出来
		let zIndex = PopsHandler.handleZIndex(config.zIndex);
		let maskHTML = PopsElementHandler.createMask(guid, zIndex);

		let headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);

		let animHTML = PopsElementHandler.createAnim(
			guid,
			popsType,
			config,
			/*html*/ `
			<div class="pops-title pops-${popsType}-title" style="text-align: ${config.title.position};${headerStyle}">${
				config.title.html
					? config.title.text
					: `<p pops class="pops-${popsType}-title-text" class="pops-${popsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`
			}${headerBtnHTML}</div>
			<div class="pops-content pops-${popsType}-content">
				<aside class="pops-${popsType}-aside">
					<ul class="pops-${popsType}-aside-top-container"></ul>
					<ul class="pops-${popsType}-aside-bottom-container"></ul>
				</aside>
				<section class="pops-${popsType}-container">
					<ul class="pops-${popsType}-container-header-ul"></ul>
					<ul class="pops-${popsType}-container-main-ul"></ul>
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
		} = PopsHandler.handleQueryElement($anim, popsType);
		if (config.isMobile || popsUtils.isPhone()) {
			popsDOMUtils.addClassName($pops, config.mobileClassName);
		}
		/**
		 * 遮罩层元素
		 */
		let $mask: HTMLDivElement | null = null;
		/**
		 * 已创建的元素列表
		 */
		let isCreatedElementList: HTMLElement[] = [$anim];

		/* 遮罩层元素 */
		if (config.mask.enable) {
			let { maskElement } = PopsHandler.handleMask({
				type: popsType,
				guid: guid,
				config: config,
				animElement: $anim,
				maskHTML: maskHTML,
			});
			$mask = maskElement;
			isCreatedElementList.push($mask);
		}

		/* 处理返回的配置 */
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			popsType,
			$anim,
			$pops,
			$mask!,
			config
		);
		/* 为顶部右边的关闭按钮添加点击事件 */
		PopsHandler.handleClickEvent("close", $headerCloseBtn, eventDetails, config.btn.close!.callback!);

		/* 创建到页面中 */
		popsDOMUtils.append($shadowRoot, isCreatedElementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		popsDOMUtils.appendBody($shadowContainer);
		/* 追加遮罩层元素 */
		if ($mask != null) {
			$anim.after($mask);
		}
		let panelHandlerComponents = PanelHandlerComponents();
		/**
		 * 处理内部配置
		 */
		panelHandlerComponents.init({
			config: config,
			$el: {
				$pops: $pops,
				$content: $content,
				$contentAside: $contentAside,
				$contentSectionContainer: $contentSectionContainer,
			},
		});

		PopsHandler.handlePush(popsType, {
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
		let result = PopsHandler.handleResultDetails(eventDetails);

		return {
			...result,
			addEventListener: <K extends keyof PopsPanelEventType>(
				event: K,
				listener: (evt: CustomEvent<PopsPanelEventType[K]>) => void,
				options?: boolean | EventListenerOptions
			) => {
				$pops.addEventListener(event, listener as any, options);
			},
			removeEventListener: <K extends keyof PopsPanelEventType>(
				event: K,
				listener: (evt: CustomEvent<PopsPanelEventType[K]>) => void,
				options?: boolean | EventListenerOptions
			) => {
				$pops.removeEventListener(event, listener as any, options);
			},
		};
	},
};
