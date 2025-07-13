import type { PopsAlertDetails } from "../components/alert/types";
import type { PopsConfirmDetails } from "../components/confirm/types";
import type { PopsIframeDetails } from "../components/iframe/types";
import type { PopsIconType } from "../types/icon";
import type {
	PopsSupportAnimDetails,
	PopsSupportBottomBtnDetails,
	PopsSupportContentDetails,
	PopsSupportHeaderTitleDetails,
	PopsSupportAnimDetailsType,
	PopsSupportBottomBtnDetailsType,
	PopsSupportContentDetailsType,
	PopsSupportHeaderTitleDetailsType,
} from "../types/main";
import { PopsIcon } from "../PopsIcon";
import { popsDOMUtils } from "../utils/PopsDOMUtils";

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
		return /*html*/ `<div class="pops-mask" data-guid="${guid}" style="z-index:${zIndex};${style}"></div>`;
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
		type: PopsSupportAnimDetailsType,
		config: PopsSupportAnimDetails[keyof PopsSupportAnimDetails],
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
		<div class="pops-anim" anim="${
			__config.animation || ""
		}" style="${popsAnimStyle}" data-guid="${guid}">${
			config.style != null
				? `<style tyle="text/css">${config.style}</style>`
				: ""
		}
			<div class="pops ${
				config.class || ""
			}" data-bottom-btn="${hasBottomBtn}" type-value="${type}" style="${popsStyle}" position="${popsPosition}" data-guid="${guid}">${html}</div>
		</div>`;
	},
	/**
	 * 获取顶部按钮层HTML
	 * @param type
	 * @param config
	 */
	getHeaderBtnHTML(
		type: PopsSupportHeaderTitleDetailsType,
		config: PopsSupportHeaderTitleDetails[keyof PopsSupportHeaderTitleDetails]
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
				topRightButtonHTML += /*html*/ `
                <button class="pops-header-control" type="${item}">
                    <i class="pops-icon">${PopsIcon.getIcon(item)}</i>
                </button>`;
			});
			resultHTML = /*html*/ `
            <div class="pops-header-controls" data-margin>${topRightButtonHTML}</div>`;
		} else {
			if (__config_confirm.btn?.close?.enable) {
				closeHTML = /*html*/ `
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="close" data-header>
                    	<i class="pops-icon">${PopsIcon.getIcon("close")}</i>
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
		type: PopsSupportBottomBtnDetailsType,
		config: Omit<PopsSupportBottomBtnDetails[keyof PopsSupportBottomBtnDetails], "content">
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
			let okIcon = __config_confirm.btn.ok!.icon! as PopsIconType | string;
			if (okIcon !== "") {
				// 判断图标是否是svg库内的
				let iconHTML = "";
				if (PopsIcon.hasIcon(okIcon)) {
					iconHTML = PopsIcon.getIcon(okIcon)!;
				} else {
					iconHTML = okIcon;
				}
				iconHTML = iconHTML || "";
				okIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${config.btn.ok.iconIsLoading}">${iconHTML}</i>`;
			}
			okHTML = /*html*/ `
            <button 
                    class="pops-${type}-btn-ok ${okButtonSizeClassName}"
                    type="${__config_confirm.btn.ok?.type}"
					data-has-icon="${(__config_confirm.btn.ok!.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.ok?.rightIcon}"
            >${okIconHTML}<span>${config.btn.ok.text}</span>
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
			let cancelIcon = __config_confirm.btn.cancel!.icon as
				| PopsIconType
				| string;
			if (cancelIcon !== "") {
				let iconHTML = "";
				// 判断图标是否是svg库内的
				if (PopsIcon.hasIcon(cancelIcon)) {
					iconHTML = PopsIcon.getIcon(cancelIcon)!;
				} else {
					iconHTML = cancelIcon;
				}
				iconHTML = iconHTML || "";
				cancelIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${__config_confirm.btn.cancel.iconIsLoading}">${iconHTML}</i>`;
			}
			cancelHTML = /*html*/ `
            <button
                    class="pops-${type}-btn-cancel ${cancelButtonSizeClassName}"
                    type="${__config_confirm.btn.cancel.type}"
					data-has-icon="${(__config_confirm.btn.cancel.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.cancel.rightIcon}"
            >${cancelIconHTML}<span>${__config_confirm.btn.cancel.text}</span>
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
			let otherIcon = __config_confirm.btn.other!.icon as PopsIconType | string;
			if (otherIcon !== "") {
				let iconHTML = "";
				// 判断图标是否是svg库内的
				if (PopsIcon.hasIcon(otherIcon)) {
					iconHTML = PopsIcon.getIcon(otherIcon)!;
				} else {
					otherIcon;
				}
				iconHTML = iconHTML || "";
				otherIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${__config_confirm.btn.other.iconIsLoading}">${iconHTML}</i>`;
			}
			ohterHTML = /*html*/ `
            <button
                    class="pops-${type}-btn-other ${otherButtonSizeClassName}"
                    type="${__config_confirm.btn.other.type}"
					data-has-icon="${(__config_confirm.btn.other.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.other.rightIcon}"
            >${otherIconHTML}<span>${__config_confirm.btn.other.text}</span>
            </button>`;
		}

		if (__config_confirm.btn.merge) {
			let flexStyle = "display: flex;";
			if (__config_confirm.btn.mergeReverse) {
				flexStyle += "flex-direction: row-reverse;";
			} else {
				flexStyle += "flex-direction: row;";
			}
			resultHTML = /*html*/ `
            <div class="pops-botttom-btn-controls pops-${type}-btn" style="${btnStyle}">${ohterHTML}<div 
                    class="pops-${type}-btn-merge"
                    style="${flexStyle}">${okHTML}${cancelHTML}</div>
            </div>
            `;
		} else {
			resultHTML = /*html*/ `<div class="pops-botttom-btn-controls pops-${type}-btn" style="${btnStyle}">${okHTML}${cancelHTML}${ohterHTML}</div>`;
		}
		return resultHTML;
	},
	/**
	 * 获取标题style
	 * @param type 弹窗类型
	 * @param config 弹窗配置
	 */
	getHeaderStyle(
		type: PopsSupportHeaderTitleDetailsType,
		config: PopsSupportHeaderTitleDetails[keyof PopsSupportHeaderTitleDetails]
	) {
		return {
			headerStyle: config?.title?.html ? config?.title?.style || "" : "",

			headerPStyle: config?.title?.html ? "" : config?.title?.style || "",
		};
	},
	/**
	 * 获取内容style
	 * @param type 弹窗类型
	 * @param config 弹窗配置
	 */
	getContentStyle(
		type: PopsSupportContentDetailsType,
		config: PopsSupportContentDetails[keyof PopsSupportContentDetails]
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
		return popsDOMUtils.parseTextToDOM(html);
	},
};
