import { DOMUtils } from "@/env";
import type { PopsPanelOwnDetails } from "@whitesev/pops/dist/types/src/components/panel/ownType";
import { Tag } from "../tag";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/commonType";

export type UIInfoResultConfig = {
	/** 文字 */
	text: string;
	/** 描述 */
	description?: string;
	/** 显示的tag */
	tag?: keyof typeof Tag;
	/** 渲染到页面中时触发回调 */
	afterRender?: (container: PopsPanelRightAsideContainerOptions) => void;
};
export const UIInfo = (
	config: () => UIInfoResultConfig
): PopsPanelOwnDetails => {
	let flag = false;
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
					${
						detail.description == null || detail.description === ""
							? ""
							: /*html*/ `
						<p class="pops-panel-item-left-desc-text">${detail.description || ""}</p>
					`
					}
				`,
			});
			let classNameList = ["support-info"];
			if (detail.tag != null) {
				classNameList.push(detail.tag);
			}
			DOMUtils.addClass($item, classNameList);
			liElement.appendChild($item);
			return liElement;
		},
		afterAddToUListCallBack(formConfig, container) {
			let detail = config();
			if (typeof detail.afterRender === "function") {
				detail.afterRender(container);
			}
		},
	};

	return result;
};
