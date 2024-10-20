import { PopsCore } from "../../Core";
import { GlobalConfig } from "../../GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import type { PopsEventDetails } from "../../types/event";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsIframeConfig } from "./config";
import type { PopsIframeDetails } from "./indexType";

export class PopsIframe {
	constructor(details: PopsIframeDetails) {
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.iframeCSS,
		]);
		let config: Required<PopsIframeDetails> = PopsIframeConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		if (config.url == null) {
			throw "config.url不能为空";
		}
		let guid = popsUtils.getRandomGUID();
		const PopsType = "iframe";

		config = PopsHandler.handleOnly(PopsType, config);
		let maskExtraStyle =
			config.animation != null && (config as any).animation != ""
				? "position:absolute;"
				: "";

		// 先把z-index提取出来
		let zIndex = PopsHandler.handleZIndex(config.zIndex);
		let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex, maskExtraStyle);

		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let iframeLoadingHTML = '<div class="pops-loading"></div>';
		let titleText =
			config.title!.text!.trim() !== "" ? config.title.text : config.url;
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
                class="pops-iframe-title"
                style="text-align: ${config.title.position};${headerStyle}"
            >
                ${
									config.title.html
										? titleText
										: `<p pops style="${headerPStyle}">${titleText}</p>`
								}
                ${headerBtnHTML}
            </div>
                        <div class="pops-iframe-content">
                <div class="pops-iframe-content-global-loading"></div>
                <iframe
                        src="${config.url}"
                        pops
                        ${
													config.sandbox
														? "sandbox='allow-forms allow-same-origin allow-scripts'"
														: ""
												}>
                </iframe>
                </div>
                ${config.loading.enable ? iframeLoadingHTML : ""}
            `,
			"",
			zIndex
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */

		let $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);
		let {
			popsElement: $pops,
			headerCloseBtnElement,
			headerControlsElement,
			titleElement: $title,
			iframeElement: $iframe,
			loadingElement,
			contentLoadingElement: $contentLoading,
			headerMinBtnElement,
			headerMaxBtnElement,
			headerMiseBtnElement,
		} = PopsHandler.handleQueryElement($anim, PopsType);
		let $iframeContainer = PopsCore.document.querySelector<HTMLDivElement>(
			".pops-iframe-container"
		);
		if (!$iframeContainer) {
			$iframeContainer = PopsCore.document.createElement("div");
			$iframeContainer.className = "pops-iframe-container";
			$iframeContainer.style.cssText =
				"display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;user-select: none;-webkit-user-select: none;-ms-user-select: none;-moz-user-select: none;";
			popsDOMUtils.appendBody($iframeContainer);
		}
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

			$pops!,
			$mask!,
			config
		) as any as PopsEventDetails & {
			iframeElement: HTMLIFrameElement;
		};

		eventDetails["iframeElement"] = $iframe!;

		popsDOMUtils.on($anim, popsDOMUtils.getAnimationEndNameList(), function () {
			/* 动画加载完毕 */
			$anim.style.width = "0%";
			$anim.style.height = "0%";
		});

		popsDOMUtils.on($iframe, "load", () => {
			/* iframe加载中... */
			loadingElement?.remove();
			$contentLoading!.style.animation = "iframeLoadingChange_85 0.3s forwards";
			popsDOMUtils.on(
				$contentLoading,
				popsDOMUtils.getAnimationEndNameList(),
				() => {
					/* 动画加载完毕就移除 */
					$contentLoading!.remove();
				}
			);

			if (config.title!.text!.trim() === "" && $iframe!.contentDocument) {
				/* 同域名下的才可以获取网页标题 */
				$title!.querySelector<HTMLElement>("p")!.innerText =
					$iframe!.contentDocument.title;
			}

			config.loadEndCallBack(eventDetails);
		});
		/* 创建到页面中 */

		popsDOMUtils.append($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}

		$iframeContainer.appendChild($shadowContainer);
		if ($mask != null) {
			$anim.after($mask);
		}
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
		const TYPE_MODULE = "type-module";
		/* 最小化按钮点击事件 */
		let origin_left = "";
		let origin_top = "";
		let origin_is_max = false;
		popsDOMUtils.on<PointerEvent | MouseEvent>(
			headerMinBtnElement,
			"click",
			(event) => {
				event.preventDefault();
				event.stopPropagation();
				origin_left = $pops.style.left;
				origin_top = $pops.style.top;
				$pops.classList.add("pops-iframe-unset-top");
				$pops.classList.add("pops-iframe-unset-left");
				$pops.classList.add("pops-iframe-unset-transform");
				$pops.style.transitionDuration = "";

				$pops.setAttribute(TYPE_MODULE, "min");
				headerControlsElement.setAttribute("type", "min");
				// 隐藏放大图标
				headerMaxBtnElement.style.setProperty("display", "none");
				// 显示复位图标
				headerMiseBtnElement.style.setProperty("display", "");
				if (typeof config?.btn?.min?.callback === "function") {
					config.btn.min.callback(eventDetails, event);
				}
			}
		);
		/* 最大化按钮点击事件 */
		popsDOMUtils.on<MouseEvent | PointerEvent>(
			headerMaxBtnElement,
			"click",
			(event) => {
				event.preventDefault();
				event.stopPropagation();
				if ($pops.getAttribute(TYPE_MODULE) !== "min") {
					origin_left = $pops.style.left;
					origin_top = $pops.style.top;
				}
				origin_is_max = true;
				$pops.style.transitionDuration = "";
				$pops.style.transform = "";
				$pops.removeAttribute(TYPE_MODULE);
				$pops.classList.add("pops-iframe-unset-transition");
				$pops.classList.add("pops-iframe-unset-left");
				$pops.classList.add("pops-iframe-unset-top");
				$pops.classList.add("pops-iframe-unset-transform");
				$pops.classList.remove("pops-iframe-unset-transition");
				$pops.setAttribute(TYPE_MODULE, "max");
				headerControlsElement.setAttribute("type", "max");
				// 隐藏放大图标
				headerMaxBtnElement.style.setProperty("display", "none");
				// 显示复位图标
				headerMiseBtnElement.style.setProperty("display", "");
				if (typeof config?.btn?.max?.callback === "function") {
					config.btn.max.callback(eventDetails, event);
				}
			}
		);
		/* 先隐藏窗口化按钮 */
		headerMiseBtnElement?.style?.setProperty("display", "none");
		/* 复位按钮点击事件 */
		popsDOMUtils.on<MouseEvent | PointerEvent>(
			headerMiseBtnElement,
			"click",
			(event) => {
				event.preventDefault();
				event.stopPropagation();
				if (origin_is_max && $pops.getAttribute(TYPE_MODULE) === "min") {
					$pops.classList.add("pops-iframe-unset-transition");
					$pops.classList.add("pops-iframe-unset-left");
					$pops.classList.add("pops-iframe-unset-top");
					$pops.classList.add("pops-iframe-unset-transform");
					$pops.classList.remove("pops-iframe-unset-transition");
					$pops.setAttribute(TYPE_MODULE, "max");
					headerControlsElement.setAttribute("type", "max");
				} else {
					origin_is_max = false;
					$pops.style.left = origin_left;
					$pops.style.top = origin_top;
					$pops.style.transitionDuration = "";
					$pops.style.transform = "";
					headerControlsElement.removeAttribute("type");
					$pops.removeAttribute(TYPE_MODULE);
					$pops.classList.remove("pops-iframe-unset-top");
					$pops.classList.remove("pops-iframe-unset-left");
					$pops.classList.remove("pops-iframe-unset-transform");

					// 显示放大图标
					headerMaxBtnElement.style.setProperty("display", "");
					// 隐藏复位图标
					headerMiseBtnElement.style.setProperty("display", "none");
				}
				if (typeof config?.btn?.mise?.callback === "function") {
					config.btn.mise.callback(eventDetails, event);
				}
			}
		);
		/* 关闭按钮点击事件 */
		popsDOMUtils.on<MouseEvent | PointerEvent>(
			headerCloseBtnElement,
			"click",
			(event) => {
				PopsInstanceUtils.removeInstance(
					[pops.config.layer.iframe],
					guid,
					false
				);
				if (typeof config?.btn?.close?.callback === "function") {
					config.btn.close.callback(eventDetails, event);
				}
			}
		);

		PopsHandler.handlePush(PopsType, {
			guid: guid,
			animElement: $anim,

			popsElement: $pops!,

			maskElement: $mask!,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});

		let result = PopsHandler.handleResultDetails(eventDetails);
		return result;
	}
}
