import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import Qmsg from "qmsg";

export const WeiBoSearch = {
	init() {
		DOMUtils.ready(() => {
			PopsPanel.execMenu("weibo-search-autoFocusSearchInput", () => {
				this.autoFocusSearchInput();
			});
		});
	},
	/**
	 * 自动聚焦搜索框
	 */
	autoFocusSearchInput() {
		log.info(`自动聚焦搜索框`);
		utils
			.waitNode<HTMLInputElement>(`.ntop-nav input[type="search"]`)
			.then(($input) => {
				if (!$input) {
					log.error("未找到搜索框");
					Qmsg.error("未找到搜索框");
					return;
				}
				let searchParams = new URLSearchParams(window.location.search);
				if (!searchParams.has("containerid")) {
					log.warn("不存在containerid参数");
					return;
				}
				let containeridSearchParams = new URLSearchParams(
					searchParams.get("containerid")!
				);
				if (containeridSearchParams.has("q")) {
					log.warn("containerid参数中存在q参数，是搜索结果页面");
					return;
				}
				log.success(
					"containerid参数中不存在q参数，所以是主搜索页面，聚焦输入框"
				);
				setTimeout(() => {
					$input.focus();
				}, 250);
			});
	},
};
