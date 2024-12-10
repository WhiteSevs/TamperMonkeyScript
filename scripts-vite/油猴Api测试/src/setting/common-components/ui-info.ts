import { DOMUtils } from "@/env";
import type { PopsPanelOwnDetails } from "@whitesev/pops/dist/types/src/components/panel/ownType";
import { Tag } from "../tag";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/commonType";

export type UIInfoResultConfig = {
	text: string;
	tag?: keyof typeof Tag;
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
				innerHTML:
					detail.tag == null ? detail.text : Tag[detail.tag] + detail.text,
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
