import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { GreasyforkElementUtils } from "./GreasyforkElementUtils";

export const GreasyforkUtils = {
	/**
	 * 判断是否是当前已登录账户的主页
	 */
	isCurrentLoginUserHome() {
		let currentLoginUserId = GreasyforkElementUtils.getCurrentLoginUserId();
		if (
			currentLoginUserId != null &&
			GreasyforkRouter.isUsers() &&
			window.location.pathname.includes("/" + currentLoginUserId)
		) {
			return true;
		} else {
			return false;
		}
	},
};
