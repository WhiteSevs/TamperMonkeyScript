import type { PopsAlertDetails } from "../components/alert/indexType";
import type { PopsConfirmDetails } from "../components/confirm/indexType";
import type { PopsIframeDetails } from "../components/iframe/indexType";
import { pops } from "../Pops";
import type { PopsIcon } from "../types/icon";
import type {
	PopsSupportAnim,
	PopsSupportBottomBtn,
	PopsSupportContent,
	PopsSupportHeaderTitle,
	PopsTypeSupportAnim,
	PopsTypeSupportBottomBtn,
	PopsTypeSupportContent,
	PopsTypeSupportHeaderTitle,
} from "../types/main";
import { popsUtils } from "../utils/PopsUtils";

export const PopsElementHandler = {
	/**
	 * 获取遮罩层HTML
	 * @param guid
	 * @param zIndex z-index
	 * @param style
	 */
	getMaskHTML(guid: string, zIndex: number = 101, style = ""): string {
		zIndex = zIndex - 100;
		if (style.startsWith(";")) {
			style = style.replace(";", "");
		}
		return `<div class="pops-mask" data-guid="${guid}" style="z-index:${zIndex};${style}"></div>`;
	},
	/**
	 * 获取动画层HTML
	 * @param guid
	 * @param type
	 * @param config
	 * @param html
	 * @param bottomBtnHTML
	 * @param zIndex
	 */
	getAnimHTML(
		guid: string,
		type: PopsTypeSupportAnim,
		config: PopsSupportAnim[keyof PopsSupportAnim],
		html = "",
		bottomBtnHTML = "",
		zIndex: number
	) {
		let __config = config as PopsAlertDetails;
		let popsAnimStyle = "";
		let popsStyle = "";
		let popsPosition = __config.position || "";
		if (config.zIndex != null) {
			popsAnimStyle += `z-index: ${zIndex};`;
			popsStyle += `z-index: ${zIndex};`;
		}
		if (__config.width != null) {
			popsStyle += `width: ${__config.width};`;
		}
		if (__config.height != null) {
			popsStyle += `height: ${__config.height};`;
		}
		let hasBottomBtn = bottomBtnHTML.trim() === "" ? false : true;
		return /*html*/ `
		<div 
			class="pops-anim"
			anim="${__config.animation || ""}"
			style="${popsAnimStyle}"
			data-guid="${guid}">
            ${
							config.style != null
								? `<style tyle="text/css">${config.style}</style>`
								: ""
						}
			<div
				class="pops ${config.class || ""}"
				data-bottom-btn="${hasBottomBtn}"
				type-value="${type}"
				style="${popsStyle}"
				position="${popsPosition}"
				data-guid="${guid}">
				${html}
			</div>
		</div>`;
	},
	/**
	 * 获取顶部按钮层HTML
	 * @param type
	 * @param config
	 */
	getHeaderBtnHTML(
		type: PopsTypeSupportHeaderTitle,
		config: PopsSupportHeaderTitle[keyof PopsSupportHeaderTitle]
	): string {
		if (!config.btn) {
			return "";
		}
		let __config_confirm = config as PopsConfirmDetails;
		if (type !== "iframe" && !__config_confirm.btn?.close?.enable) {
			return "";
		}
		let resultHTML = "";
		// let btnStyle = "";
		let closeHTML = "";
		let __config_iframe = config as PopsIframeDetails;
		if (type === "iframe" && __config_iframe.topRightButton?.trim() !== "") {
			/* iframe的 */
			let topRightButtonHTML = "";
			__config_iframe.topRightButton.split("|").forEach((item: string) => {
				item = item.toLowerCase();
				topRightButtonHTML += `
                <button class="pops-header-control" type="${item}">
                    <i class="pops-icon">${
											(pops.config.iconSVG as any)[item]
										}</i>
                </button>`;
			});
			resultHTML = `
            <div class="pops-header-controls" data-margin>
                ${topRightButtonHTML}
            </div>`;
		} else {
			if (__config_confirm.btn?.close?.enable) {
				closeHTML = `
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="close" data-header>
                    <i class="pops-icon">${pops.config.iconSVG["close"]}</i>
                    </button>
                </div>`;
			}
			resultHTML = closeHTML;
		}

		return resultHTML;
	},
	/**
	 * 获取底部按钮层HTML
	 * @param type
	 * @param config
	 */
	getBottomBtnHTML(
		type: PopsTypeSupportBottomBtn,
		config: Omit<PopsSupportBottomBtn[keyof PopsSupportBottomBtn], "content">
	): string {
		if (!config.btn) {
			// 未设置btn参数
			return "";
		}
		let __config_confirm = config as Required<PopsConfirmDetails>;
		if (
			!(
				config.btn?.ok?.enable ||
				__config_confirm.btn?.cancel?.enable ||
				__config_confirm.btn?.other?.enable
			)
		) {
			// 确定、取消、其它按钮都未启用直接返回
			return "";
		}
		let btnStyle = "";
		let resultHTML = "";
		let okHTML = "";
		let cancelHTML = "";
		let ohterHTML = "";

		if (config.btn.position) {
			btnStyle += `justify-content: ${config.btn.position};`;
		}

		if (__config_confirm.btn.reverse) {
			btnStyle += "flex-direction: row-reverse;";
		}
		if (config.btn?.ok?.enable) {
			/* 处理确定按钮的尺寸问题 */
			let okButtonSizeClassName = "";
			if (config.btn.ok.size === "large") {
				okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
			} else if (config.btn.ok.size === "small") {
				okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
			}
			let okIconHTML = "";
			let okIcon = __config_confirm.btn.ok!.icon! as PopsIcon | string;
			if (okIcon !== "") {
				// 判断图标是否是svg库内的
				let iconHTML = "";
				if (okIcon in pops.config.iconSVG) {
					iconHTML = pops.config.iconSVG[okIcon as PopsIcon];
				} else {
					iconHTML = okIcon;
				}
				iconHTML = iconHTML || "";
				okIconHTML = `
                <i class="pops-bottom-icon" is-loading="${config.btn.ok.iconIsLoading}">
                    ${iconHTML}
                </i>`;
			}
			okHTML = `
            <button 
                    class="pops-${type}-btn-ok ${okButtonSizeClassName}"
                    type="${__config_confirm.btn.ok?.type}"
					data-has-icon="${(__config_confirm.btn.ok!.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.ok?.rightIcon}"
            >
            ${okIconHTML}
                <span>${config.btn.ok.text}</span>
            </button>`;
		}

		if (__config_confirm.btn?.cancel?.enable) {
			/* 处理取消按钮的尺寸问题 */
			let cancelButtonSizeClassName = "";

			if (__config_confirm.btn.cancel.size === "large") {
				cancelButtonSizeClassName =
					"pops-button-" + __config_confirm.btn.cancel.size;
			} else if (__config_confirm.btn.cancel.size === "small") {
				cancelButtonSizeClassName =
					"pops-button-" + __config_confirm.btn.cancel.size;
			}
			let cancelIconHTML = "";
			let cancelIcon = __config_confirm.btn.cancel!.icon as PopsIcon | string;
			if (cancelIcon !== "") {
				let iconHTML = "";
				// 判断图标是否是svg库内的
				if (cancelIcon in pops.config.iconSVG) {
					iconHTML = pops.config.iconSVG[cancelIcon as PopsIcon];
				} else {
					iconHTML = cancelIcon;
				}
				iconHTML = iconHTML || "";
				cancelIconHTML = `
                <i class="pops-bottom-icon" is-loading="${__config_confirm.btn.cancel.iconIsLoading}">
                    ${iconHTML}
                </i>`;
			}
			cancelHTML = `
            <button
                    class="pops-${type}-btn-cancel ${cancelButtonSizeClassName}"
                    type="${__config_confirm.btn.cancel.type}"
					data-has-icon="${(__config_confirm.btn.cancel.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.cancel.rightIcon}"
            >
            ${cancelIconHTML}
                <span>${__config_confirm.btn.cancel.text}</span>
            </button>`;
		}

		if (__config_confirm.btn?.other?.enable) {
			/* 处理其它按钮的尺寸问题 */
			let otherButtonSizeClassName = "";

			if (__config_confirm.btn.other.size === "large") {
				otherButtonSizeClassName =
					"pops-button-" + __config_confirm.btn.other.size;
			} else if (__config_confirm.btn.other.size === "small") {
				otherButtonSizeClassName =
					"pops-button-" + __config_confirm.btn.other.size;
			}
			let otherIconHTML = "";
			let otherIcon = __config_confirm.btn.other!.icon as PopsIcon | string;
			if (otherIcon !== "") {
				let iconHTML = "";
				// 判断图标是否是svg库内的
				if (otherIcon in pops.config.iconSVG) {
					iconHTML = pops.config.iconSVG[otherIcon as PopsIcon];
				} else {
					otherIcon;
				}
				iconHTML = iconHTML || "";
				otherIconHTML = `
                <i class="pops-bottom-icon" is-loading="${__config_confirm.btn.other.iconIsLoading}">
                    ${iconHTML}
                </i>`;
			}
			ohterHTML = `
            <button
                    class="pops-${type}-btn-other ${otherButtonSizeClassName}"
                    type="${__config_confirm.btn.other.type}"
					data-has-icon="${(__config_confirm.btn.other.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.other.rightIcon}"
            >
            ${otherIconHTML}
                <span>${__config_confirm.btn.other.text}</span>
            </button>`;
		}

		if (__config_confirm.btn.merge) {
			let flexStyle = "display: flex;";
			if (__config_confirm.btn.mergeReverse) {
				flexStyle += "flex-direction: row-reverse;";
			} else {
				flexStyle += "flex-direction: row;";
			}
			resultHTML = `
            <div class="pops-${type}-btn" style="${btnStyle}">
                ${ohterHTML}
                <div 
                    class="pops-${type}-btn-merge"
                    style="${flexStyle}">
                    ${okHTML}
                    ${cancelHTML}
                </div>
            </div>
            `;
		} else {
			resultHTML = `
            <div class="pops-${type}-btn" style="${btnStyle}">
                ${okHTML}
                ${cancelHTML}
                ${ohterHTML}
            </div>
            `;
		}
		return resultHTML;
	},
	/**
	 * 获取标题style
	 * @param type
	 * @param config
	 */

	getHeaderStyle(
		type: PopsTypeSupportHeaderTitle,
		config: PopsSupportHeaderTitle[keyof PopsSupportHeaderTitle]
	) {
		return {
			headerStyle: config?.title?.html ? config?.title?.style || "" : "",

			headerPStyle: config?.title?.html ? "" : config?.title?.style || "",
		};
	},
	/**
	 * 获取内容style
	 * @param type
	 * @param config
	 */

	getContentStyle(
		type: PopsTypeSupportContent,
		config: PopsSupportContent[keyof PopsSupportContent]
	) {
		return {
			contentStyle: (config?.content as any)?.html
				? config?.content?.style || ""
				: "",

			contentPStyle: (config?.content as any)?.html
				? ""
				: config?.content?.style || "",
		};
	},
	/**
	 * 将html转换成元素
	 * @param html
	 */
	parseElement<T extends HTMLElement>(html: string): T {
		return popsUtils.parseTextToDOM(html);
	},
};
