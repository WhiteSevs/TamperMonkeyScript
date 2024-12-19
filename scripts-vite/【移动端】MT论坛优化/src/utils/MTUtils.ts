import { unsafeWindow } from "ViteGM";
import { MTRegExp } from "./MTRegExp";

export const MTUtils = {
	/**
	 * 根据UID获取小|中|大头像
	 * @param uid
	 * @param size
	 */
	getAvatar: (uid: string, size: "small" | "middle" | "big" = "middle") => {
		return `/uc_server/avatar.php?uid=${uid}&size=${size}&ts=1`;
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
	 * 获取账号的formhash
	 */
	getFormHash() {
		let $inputFormHashList = Array.from(
			(top || globalThis).document.querySelectorAll<HTMLInputElement>(
				"input[name=formhash]"
			)
		);
		for (let index = 0; index < $inputFormHashList.length; index++) {
			const $input = $inputFormHashList[index];
			let formHash = $input.value;
			if (formHash) {
				return formHash;
			}
		}
		/* 退出按钮(登录状态才有)，电脑版的 */
		let $anchorFormHashList = Array.from(
			(top || globalThis).document.querySelectorAll<HTMLAnchorElement>(
				'a[href*="formhash="]'
			)
		);
		for (let index = 0; index < $anchorFormHashList.length; index++) {
			const $anchorFormHash = $anchorFormHashList[index];
			let anchorFormHashMatch = $anchorFormHash.href.match(MTRegExp.formhash);
			if (anchorFormHashMatch) {
				let formHash = anchorFormHashMatch[anchorFormHashMatch.length - 1];
				if (formHash) {
					return formHash;
				}
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

	/**
	 * 获取帖子id
	 * @param url
	 */
	getThreadId: (url: string) => {
		let urlMatch = url.match(/thread-([\d]+)-|&tid=([\d]+)/i);
		if (urlMatch) {
			let forumIdList = urlMatch.filter(Boolean);
			let forumId = forumIdList[forumIdList.length - 1];
			return forumId;
		}
	},
	/**
	 * 获取板块？id
	 */
	getForumId(url: string) {
		let urlMatch = url.match(/&fid=([\d]+)/i);
		if (urlMatch) {
			return urlMatch[urlMatch.length - 1];
		}
	},
	/**
	 * 获取发布id
	 */
	getPostId(url: string) {
		let urlMatch = url.match(/&pid=([\d]+)/i);
		if (urlMatch) {
			return urlMatch[urlMatch.length - 1];
		}
	},
	/**
	 * 获取回复id
	 */
	getRepquote(url: string) {
		let urlMatch = url.match(/&repquote=([\d]+)/i);
		if (urlMatch) {
			return urlMatch[urlMatch.length - 1];
		}
	},
};
