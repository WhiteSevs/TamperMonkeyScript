import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import type { PopsEventDetails } from "../../types/event";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsUIUtils } from "../../utils/PopsUIUtils";
import { popsUtils } from "../../utils/PopsUtils";
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

		let config: Required<PopsIframeDetails> = {
			title: {
				position: "center",
				text: "",
				html: false,
				style: "",
			},
			loading: {
				enable: true,
				icon: true,
				text: "",
			},
			class: "",
			url: window.location.href,
			only: false,
			zIndex: 10000,
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},

				clickCallBack: void 0,
			},
			animation: "pops-anim-fadein-zoom",
			position: "center",
			drag: false,
			dragLimit: true,
			dragExtraDistance: 3,
			dragMoveCallBack() {},
			dragEndCallBack() {},
			width: "300px",
			height: "250px",
			topRightButton: "min|max|mise|close",
			sandbox: false,
			forbiddenScroll: false,
			loadEndCallBack() {},
			btn: {
				min: {
					callback() {},
				},
				max: {
					callback() {},
				},
				mise: {
					callback() {},
				},
				close: {
					callback() {},
				},
			},

			style: null,
			beforeAppendToPageCallBack() {},
		};
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
		let maskHTML = PopsElementHandler.getMaskHTML(
			guid,

			config.zIndex,
			maskExtraStyle
		);
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
			`
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
			""
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

			config.loadEndCallBack(eventDetails as any);
		});
		/* 创建到页面中 */

		popsDOMUtils.append($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}

		popsDOMUtils.appendBody($shadowContainer);
		if ($mask != null) {
			$anim.after($mask);
		}
		/* 拖拽 */
		if (config.drag) {
			PopsUIUtils.drag($pops!, {
				dragElement: $title!,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		let normalLeft = "";
		/* 最小化按钮点击事件 */

		popsDOMUtils.on<PointerEvent | MouseEvent>(
			headerMinBtnElement,
			"click",
			(event) => {
				/**
				 * 所有最小化的iframe数组
				 */
				let allMinElementList: HTMLElement[] = [];

				pops.config.layer.iframe.forEach((item) => {
					if (
						item.animElement != $anim &&
						item.popsElement.getAttribute("type-module") === "min"
					) {
						allMinElementList.push(item.popsElement);
					}
				});
				let maxLeftValue = allMinElementList.length
					? allMinElementList.length * 205
					: 0;

				$pops!.style.transitionDuration = "";

				normalLeft = $pops!.style.left;

				$pops!.style.left = maxLeftValue + "px";

				$pops!.setAttribute("type-module", "min");

				$anim!
					.querySelector<HTMLDivElement>(".pops-header-controls")
					?.setAttribute("type", "max");

				config.btn.min.callback(eventDetails, event);
			},
			{
				capture: true,
			}
		);
		/* 最大化按钮点击事件 */
		popsDOMUtils.on<MouseEvent | PointerEvent>(
			headerMaxBtnElement,
			"click",
			(event) => {
				$pops!.style.transitionDuration = "";

				normalLeft = $pops!.style.left;

				$pops!.removeAttribute("type-module");

				$pops!.setAttribute("type-module", "max");

				headerControlsElement!.setAttribute("type", "max");

				headerMaxBtnElement!.style.setProperty("display", "none");

				headerMiseBtnElement!.style.setProperty("display", "");

				config.btn.max.callback(eventDetails, event);
			},
			{
				capture: true,
			}
		);
		/* 先隐藏窗口化按钮 */
		headerMiseBtnElement?.style?.setProperty("display", "none");
		/* 窗口化按钮点击事件 */
		popsDOMUtils.on<MouseEvent | PointerEvent>(
			headerMiseBtnElement,
			"click",
			(event) => {
				$pops!.style.transitionDuration = "";

				$pops!.style.left = normalLeft;

				headerControlsElement!.removeAttribute("type");

				$pops!.removeAttribute("type-module");
				/**
				 * 所有最小化的iframe数组
				 */
				let allMinElementList: HTMLElement[] = [];
				pops.config.layer.iframe.forEach((item) => {
					if (
						item.animElement != $anim &&
						$pops!.getAttribute("type-module") === "min"
					) {
						allMinElementList.push(item.popsElement);
					}
				});
				allMinElementList.sort(
					PopsUIUtils.sortElementListByProperty<HTMLElement, number>(
						(obj) => {
							return parseInt(getComputedStyle(obj).left);
						},
						(obj) => {
							return parseInt(getComputedStyle(obj).left);
						},
						false
					)
				);
				allMinElementList.forEach((item, index) => {
					item.style.left = index * 205 + "px";
				});

				headerMiseBtnElement!.style.setProperty("display", "none");

				headerMaxBtnElement!.style.setProperty("display", "");

				config.btn.mise.callback(eventDetails, event);
			},
			{
				capture: true,
			}
		);
		/* 关闭按钮点击事件 */
		popsDOMUtils.on<MouseEvent | PointerEvent>(
			headerCloseBtnElement,
			"click",
			(event) => {
				PopsUIUtils.configRemove([pops.config.layer.iframe], guid, false);
				setTimeout(() => {
					let allIsMinElementList: HTMLElement[] = [];
					pops.config.layer.iframe.forEach((item) => {
						if (
							item.animElement != $anim &&
							$pops!.getAttribute("type-module") === "min"
						) {
							allIsMinElementList.push(item.popsElement);
						}
					});

					allIsMinElementList.sort(
						PopsUIUtils.sortElementListByProperty(
							(obj) => {
								return parseInt(getComputedStyle(obj).left);
							},
							(obj) => {
								return parseInt(getComputedStyle(obj).left);
							},
							false
						)
					);

					allIsMinElementList.forEach((item, index) => {
						item.style.left = index * 205 + "px";
					});
				}, 1000 * 0.3);

				config.btn.close.callback(eventDetails, event);
			},
			{
				capture: true,
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
