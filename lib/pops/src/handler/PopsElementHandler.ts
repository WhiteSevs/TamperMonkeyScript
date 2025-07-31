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
	createMask(guid: string, zIndex: number = 101, style = ""): string {
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
	createAnim(
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
		<div class="pops-anim" anim="${__config.animation || ""}" style="${popsAnimStyle}" data-guid="${guid}">${
			config.style != null ? `<style tyle="text/css">${config.style}</style>` : ""
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
	createHeader(
		type: PopsSupportHeaderTitleDetailsType,
		config: PopsSupportHeaderTitleDetails[keyof PopsSupportHeaderTitleDetails]
	): string {
		if (!config.btn) {
			return "";
		}
		let confirm_config = config as PopsConfirmDetails;
		if (type !== "iframe" && !confirm_config.btn?.close?.enable) {
			return "";
		}
		let resultHTML = "";
		// let btnStyle = "";
		let closeHTML = "";
		let iframe_config = config as PopsIframeDetails;
		if (type === "iframe" && iframe_config.topRightButton?.trim() !== "") {
			/* iframe的 */
			let topRightButtonHTML = "";
			iframe_config.topRightButton.split("|").forEach((item: string) => {
				// 最小化、最大化、窗口化、关闭按钮
				item = item.toLowerCase();
				topRightButtonHTML += /*html*/ `
                <button class="pops-header-control" type="button" data-type="${item}">
                    <i class="pops-icon">${PopsIcon.getIcon(item)}</i>
                </button>`;
			});
			resultHTML = /*html*/ `
            <div class="pops-header-controls" data-margin>${topRightButtonHTML}</div>`;
		} else {
			if (confirm_config.btn?.close?.enable) {
				// 关闭按钮
				closeHTML = /*html*/ `
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="button" data-type="close" data-header>
                    	<i class="pops-icon">${PopsIcon.getIcon("close")}</i>
                    </button>
                </div>`;
			}
			resultHTML = closeHTML;
		}

		return resultHTML;
	},
	/**
	 * 获取标题style
	 * @param type 弹窗类型
	 * @param config 弹窗配置
	 */
	createHeaderStyle(
		type: PopsSupportHeaderTitleDetailsType,
		config: PopsSupportHeaderTitleDetails[keyof PopsSupportHeaderTitleDetails]
	) {
		return {
			headerStyle: config?.title?.html ? config?.title?.style || "" : "",
			headerPStyle: config?.title?.html ? "" : config?.title?.style || "",
		};
	},
	/**
	 * 获取底部按钮层HTML
	 * @param type
	 * @param config
	 */
	createBottom(
		type: PopsSupportBottomBtnDetailsType,
		config: Omit<PopsSupportBottomBtnDetails[keyof PopsSupportBottomBtnDetails], "content">
	): string {
		if (config.btn == null) {
			// 未设置btn参数
			return "";
		}
		let confirm_config = config as Required<PopsConfirmDetails>;
		if (
			!(config.btn?.ok?.enable || confirm_config.btn?.cancel?.enable || confirm_config.btn?.other?.enable)
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

		if (confirm_config.btn.reverse) {
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
			let okIcon = confirm_config.btn.ok!.icon! as PopsIconType | string;
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
				type="button"
				data-type="${confirm_config.btn.ok?.type}"
				data-has-icon="${(confirm_config.btn.ok!.icon || "") !== ""}"
				data-rightIcon="${confirm_config.btn.ok?.rightIcon}"
            >${okIconHTML}<span>${config.btn.ok.text}</span>
            </button>`;
		}

		if (confirm_config.btn?.cancel?.enable) {
			/* 处理取消按钮的尺寸问题 */
			let cancelButtonSizeClassName = "";

			if (confirm_config.btn.cancel.size === "large") {
				cancelButtonSizeClassName = "pops-button-" + confirm_config.btn.cancel.size;
			} else if (confirm_config.btn.cancel.size === "small") {
				cancelButtonSizeClassName = "pops-button-" + confirm_config.btn.cancel.size;
			}
			let cancelIconHTML = "";
			let cancelIcon = confirm_config.btn.cancel!.icon as PopsIconType | string;
			if (cancelIcon !== "") {
				let iconHTML = "";
				// 判断图标是否是svg库内的
				if (PopsIcon.hasIcon(cancelIcon)) {
					iconHTML = PopsIcon.getIcon(cancelIcon)!;
				} else {
					iconHTML = cancelIcon;
				}
				iconHTML = iconHTML || "";
				cancelIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${confirm_config.btn.cancel.iconIsLoading}">${iconHTML}</i>`;
			}
			cancelHTML = /*html*/ `
            <button
				class="pops-${type}-btn-cancel ${cancelButtonSizeClassName}"
				type="button"
				data-type="${confirm_config.btn.cancel.type}"
				data-has-icon="${(confirm_config.btn.cancel.icon || "") !== ""}"
				data-rightIcon="${confirm_config.btn.cancel.rightIcon}"
            >${cancelIconHTML}<span>${confirm_config.btn.cancel.text}</span>
            </button>`;
		}

		if (confirm_config.btn?.other?.enable) {
			/* 处理其它按钮的尺寸问题 */
			let otherButtonSizeClassName = "";

			if (confirm_config.btn.other.size === "large") {
				otherButtonSizeClassName = "pops-button-" + confirm_config.btn.other.size;
			} else if (confirm_config.btn.other.size === "small") {
				otherButtonSizeClassName = "pops-button-" + confirm_config.btn.other.size;
			}
			let otherIconHTML = "";
			let otherIcon = confirm_config.btn.other!.icon as PopsIconType | string;
			if (otherIcon !== "") {
				let iconHTML = "";
				// 判断图标是否是svg库内的
				if (PopsIcon.hasIcon(otherIcon)) {
					iconHTML = PopsIcon.getIcon(otherIcon)!;
				} else {
					otherIcon;
				}
				iconHTML = iconHTML || "";
				otherIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${confirm_config.btn.other.iconIsLoading}">${iconHTML}</i>`;
			}
			ohterHTML = /*html*/ `
            <button
				class="pops-${type}-btn-other ${otherButtonSizeClassName}"
				type="button"
				data-type="${confirm_config.btn.other.type}"
				data-has-icon="${(confirm_config.btn.other.icon || "") !== ""}"
				data-rightIcon="${confirm_config.btn.other.rightIcon}"
            >${otherIconHTML}<span>${confirm_config.btn.other.text}</span>
            </button>`;
		}

		if (confirm_config.btn.merge) {
			let flexStyle = "display: flex;";
			if (confirm_config.btn.mergeReverse) {
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
	 * 获取内容style
	 * @param type 弹窗类型
	 * @param config 弹窗配置
	 */
	createContentStyle(
		type: PopsSupportContentDetailsType,
		config: PopsSupportContentDetails[keyof PopsSupportContentDetails]
	) {
		return {
			contentStyle: (config?.content as any)?.html ? config?.content?.style || "" : "",

			contentPStyle: (config?.content as any)?.html ? "" : config?.content?.style || "",
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
