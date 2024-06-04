import { DOMUtils } from "@/env";
import { GreasyforkForumFilter } from "./GreasyforkForumFilter";

const GreasyforkForum = {
	init() {
		DOMUtils.ready(() => {
			GreasyforkForumFilter.init();
		});
	},
};

export { GreasyforkForum };
