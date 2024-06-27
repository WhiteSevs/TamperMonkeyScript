import { DOMUtils, log } from "@/env";
import { GreasyforkForumFilter } from "./GreasyforkForumFilter";
import { PopsPanel } from "@/setting/setting";

const GreasyforkForum = {
	init() {
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("greasyfork-discussions-filter-enable", () => {
				this.filterEnable();
			});
		});
	},
	filterEnable() {
		log.info("启用Greasyfork论坛过滤器");
		GreasyforkForumFilter.init();
	},
};

export { GreasyforkForum };
