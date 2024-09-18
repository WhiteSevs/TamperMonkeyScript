import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { GreasyforkUrlUtils } from "./GreasyforkUrlUtils";

export const GreasyforkElementUtils = {
	/**
	 * 获取当前登录用户id
	 */
	getCurrentLoginUserId() {
		let $anchor = document.querySelector<HTMLAnchorElement>(
			"#nav-user-info .user-profile-link a"
		);
		if (!$anchor) {
			return;
		}
		let userId = GreasyforkUrlUtils.getUserId($anchor.href);
		if (userId == null) {
			return;
		}
		return userId;
	},
};
