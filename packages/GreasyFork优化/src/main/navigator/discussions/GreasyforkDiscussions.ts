import { DOMUtils, log } from "@/env";
import { GreasyforkDiscussionsFilter } from "./GreasyforkDiscussionsFilter";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";

export const GreasyforkForum = {
	init() {
		this.readBgColor();

		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("greasyfork-discussions-filter-enable", () => {
				this.filterEnable();
			});
		});
	},
	/**
	 * 启用Greasyfork论坛过滤器
	 */
	filterEnable() {
		log.info("启用Greasyfork论坛过滤器");
		GreasyforkDiscussionsFilter.init();
	},
	/**
	 * 设置已读背景颜色
	 */
	readBgColor() {
		log.info("设置已读背景颜色");
		let color = PopsPanel.getValue("discussions-readBgColor");
		GM_addStyle(`
        .discussion-read{
            background: ${color} !important;
        }
        `);
	},
};
