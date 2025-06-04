import { addStyle, utils } from "@/env";
import blockCSS from "./block.css?raw";
import beautifyCSS from "./beautify.css?raw";
import DOMUtils from "@whitesev/domutils";
import { Panel } from "@/setting/panel";

export const MDouYinShareVideo = {
	init() {
		addStyle(blockCSS);
		addStyle(beautifyCSS);
		Panel.execMenuOnce("m-dy-share-video-coverGlobalClick", () => {
			this.coverGlobalClick();
		});
	},
	/**
	 * 阻止全局点击，会跳转
	 */
	coverGlobalClick() {
		let selectorList = [".right-con", ".footer", ".mix-info"];
		selectorList.forEach((selector) => {
			DOMUtils.on(
				document,
				"click",
				selector,
				(event) => {
					return utils.preventEvent(event);
				},
				{
					capture: true,
				}
			);
		});
	},
};
