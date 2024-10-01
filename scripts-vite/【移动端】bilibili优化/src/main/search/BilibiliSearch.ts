import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliExtraSearch } from "./BilibiliExtraSearch";
import { BilibiliRouter } from "@/router/BilibiliRouter";

const BilibiliSearch = {
	init() {
		if (BilibiliRouter.isSearchResult()) {
			// 搜索结果页面
			BilibiliExtraSearch.init();
		}
		PopsPanel.execMenuOnce("bili-search-cover-cancel", () => {
			this.coverCancel();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenu("bili-search-inputAutoFocus", () => {
				this.inputAutoFocus();
			});
		});
	},
	/**
	 * 覆盖【取消】按钮的点击事件
	 */
	coverCancel() {
		log.info("覆盖【取消】按钮的点击事件");
		DOMUtils.on(
			document,
			"click",
			"a.cancel",
			(event) => {
				log.info(`点击取消按钮`);
				utils.preventEvent(event);
				window.history.back();
			},
			{ capture: true }
		);
	},
	/**
	 * 输入框自动获取焦点
	 */
	inputAutoFocus() {
		let searchParams = new URLSearchParams(window.location.search);
		if (searchParams.has("keyword")) {
			log.warn(`当前在搜索结果页面，不执行输入框自动获取焦点`);
			return;
		}
		log.info(`输入框自动获取焦点`);
		utils
			.waitNode<HTMLInputElement>(
				`.m-search .m-search-search-bar input[type="search"]`,
				10000
			)
			.then(($input) => {
				if (!$input) {
					log.error("获取输入框失败");
					return;
				}
				$input.focus();
			});
	},
};

export { BilibiliSearch };
