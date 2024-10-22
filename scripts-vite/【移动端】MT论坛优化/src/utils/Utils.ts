import { unsafeWindow } from "ViteGM";

export const MTUtils = {
	/**
	 * 根据UID获取小|中|大头像
	 * @param uid
	 * @param size
	 */
	getAvatar: (uid: string, size: "small" | "middle" | "big" = "middle") => {
		return `https://bbs.binmt.cc/uc_server/avatar.php?uid=${uid}&size=${size}&ts=1`;
	},
	/**
	 * 获取当前已登录的用户的uid
	 */
	getCurrentUID() {
		let discuz_uid: string | null = (unsafeWindow as any).discuz_uid;
		if (typeof discuz_uid === "string") {
			return discuz_uid;
		}
		let $exit = document.querySelector<HTMLAnchorElement>(
			'.sidenv_exit a[href*="uid="]'
		);
		if ($exit) {
			let uidMatch = $exit.href.match(/uid=([0-9]+)/);
			if (uidMatch) {
				return uidMatch[uidMatch.length - 1];
			}
		}
	},
	/**
	 * 获取当前已登录用户的formhash
	 */
	getCurrentFormHash() {
		let $exit = document.querySelector<HTMLAnchorElement>(
			'.sidenv_exit a[href*="formhash="]'
		);
		if ($exit) {
			let formHashMatch = $exit.href.match(/formhash=([0-9a-zA-Z]+)/);
			if (formHashMatch) {
				return formHashMatch[formHashMatch.length - 1];
			}
		}
	},
	/**
	 * 检测环境模板
	 */
	envIsMobile() {
		return (
			// @ts-ignore
			(unsafeWindow.STYLEID ||
				// @ts-ignore
				window.STYLEID ||
				// @ts-ignore
				(typeof STYLEID !== "undefined" && STYLEID)) === "3"
		);
	},
};
