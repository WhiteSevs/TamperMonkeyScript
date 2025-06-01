import { DOMUtils } from "@/env";
import type { PopsPanelOwnDetails } from "@whitesev/pops/dist/types/src/components/panel/ownType";
import { Tag, TagUtil, type TagName } from "../tag";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/commonType";

export type UIInfoResultConfig = {
	/** 文字 */
	text: string;
	/** 描述 */
	description?: string;
	/** 显示的tag */
	tag?: TagName;
	/** 渲染到页面中时触发回调 */
	afterRender?: (
		container: PopsPanelRightAsideContainerOptions & {
			$leftContainer: HTMLElement;
			$leftText: HTMLElement;
			$leftDesc: HTMLElement;
		}
	) => void;
};
export const UIInfo = (
	config: () => UIInfoResultConfig
): PopsPanelOwnDetails => {
	let result: PopsPanelOwnDetails = {
		type: "own",
		getLiElementCallBack(liElement) {
			let detail = config();
			let $item = DOMUtils.createElement("div", {
				className: "pops-panel-item-left-text",
				innerHTML: /*html*/ `
					<p class="pops-panel-item-left-main-text">${
						detail.tag == null ? detail.text : Tag[detail.tag] + detail.text
					}</p>
					<p class="pops-panel-item-left-desc-text" style="${
						detail.description == null || detail.description === ""
							? "display: none;"
							: ""
					}">${detail.description || ""}</p>
				`,
			});
			let $leftText = $item.querySelector<HTMLElement>(
				".pops-panel-item-left-main-text"
			)!;
			let classNameList = ["support-info"];
			if (detail.tag != null) {
				classNameList.push(detail.tag);
			}
			DOMUtils.addClass($leftText, classNameList);
			liElement.appendChild($item);
			return liElement;
		},
		afterAddToUListCallBack(formConfig, container) {
			let detail = config();
			if (typeof detail.afterRender === "function") {
				let $target = container.target!;
				let $leftContainer = $target.querySelector<HTMLElement>(
					".pops-panel-item-left-text"
				)!;
				let $text = $target.querySelector<HTMLElement>(
					".pops-panel-item-left-main-text"
				)!;
				let $desc = $target.querySelector<HTMLElement>(
					".pops-panel-item-left-desc-text"
				)!;
				try {
					detail.afterRender({
						...container,
						$leftContainer: $leftContainer,
						$leftText: $text,
						$leftDesc: $desc,
					});
				} catch (error) {
					console.log(error);
					TagUtil.setTag($text, "error", "afterRender 函数执行错误" + error);
				}
			}
		},
	};

	return result;
};
