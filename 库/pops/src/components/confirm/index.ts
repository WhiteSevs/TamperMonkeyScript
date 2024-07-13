import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import type { PopsConfirmDetails } from "./indexType";

export class PopsConfirm {
	constructor(details: PopsConfirmDetails) {
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.confirmCSS,
		]);
		let config: Required<PopsConfirmDetails> = {
			title: {
				text: "默认标题",
				position: "left",
				html: false,
				style: "",
			},
			content: {
				text: "默认内容",
				html: false,
				style: "",
			},
			btn: {
				merge: false,
				mergeReverse: false,
				reverse: false,
				position: "flex-end",
				ok: {
					enable: true,

					size: void 0,

					icon: void 0,
					rightIcon: false,
					iconIsLoading: false,
					text: "确定",
					type: "primary",
					callback(event) {
						event.close();
					},
				},
				cancel: {
					enable: true,

					size: void 0,

					icon: void 0,
					rightIcon: false,
					iconIsLoading: false,
					text: "关闭",
					type: "default",
					callback(event) {
						event.close();
					},
				},
				other: {
					enable: false,

					size: void 0,

					icon: void 0,
					rightIcon: false,
					iconIsLoading: false,
					text: "其它按钮",
					type: "default",
					callback(event) {
						event.close();
					},
				},
				close: {
					enable: true,
					callback(event) {
						event.close();
					},
				},
			},
			class: "",
			only: false,
			width: "350px",
			height: "200px",
			position: "center",
			animation: "pops-anim-fadein-zoom",
			zIndex: 10000,
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},

				clickCallBack: void 0,
			},
			drag: false,
			dragLimit: true,
			dragExtraDistance: 3,
			dragMoveCallBack() {},
			dragEndCallBack() {},
			forbiddenScroll: false,

			style: null,
			beforeAppendToPageCallBack() {},
		};
		config = popsUtils.assign(config, details);
		let guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const PopsType = "confirm";

		config = PopsHandler.handleOnly(PopsType, config);

		let maskHTML = PopsElementHandler.getMaskHTML(guid, config.zIndex);

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
			`
            <div class="pops-confirm-title" style="text-align: ${
							config.title.position
						};${headerStyle}">
                            ${
															config.title.html
																? config.title.text
																: `<p pops style="${headerPStyle}">${config.title.text}</p>`
														}
                ${headerBtnHTML}
                        </div>
                        <div class="pops-confirm-content" style="${contentStyle}">
                ${
									config.content.html
										? config.content.text
										: `<p pops style="${contentPStyle}">${config.content.text}</p>`
								}
                
                        </div>
                        ${bottomBtnHTML}
            `,
			bottomBtnHTML
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);
		let {
			popsElement: $pops,
			titleElement: $title,
			headerCloseBtnElement: $btnClose,
			btnOkElement: $btnOk,
			btnCancelElement: $btnCancel,
			btnOtherElement: $btnOther,
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
		PopsHandler.handleClickEvent(
			"close",
			$btnClose!,
			eventDetails,
			config.btn.close!.callback!
		);
		PopsHandler.handleClickEvent(
			"ok",
			$btnOk!,
			eventDetails!,
			config.btn.ok!.callback!
		);
		PopsHandler.handleClickEvent(
			"cancel",
			$btnCancel!,
			eventDetails,
			config.btn.cancel!.callback!
		);
		PopsHandler.handleClickEvent(
			"other",
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
			0;

			PopsInstanceUtils.drag($pops!, {
				dragElement: $title!,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		return PopsHandler.handleResultDetails(eventDetails);
	}
}
