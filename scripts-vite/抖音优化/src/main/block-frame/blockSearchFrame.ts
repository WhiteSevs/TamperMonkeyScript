import { Panel } from "@components/setting/panel";
import { addStyle, log } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";

export const BlockSearchFrame = {
	init() {
		Panel.execMenuOnce("shieldSearch", () => {
			return this.shieldSearch();
		});
		Panel.execMenuOnce("shieldSearchPlaceholder", () => {
			return this.shieldSearchPlaceholder();
		});
		Panel.execMenuOnce("shieldSearchGuessYouWantToSearch", () => {
			return this.shieldSearchGuessYouWantToSearch();
		});
		Panel.execMenuOnce("shieldSearchTiktokHotspot", () => {
			return this.shieldSearchTiktokHotspot();
		});
	},
	/**
	 * 【屏蔽】搜索框
	 */
	shieldSearch() {
		log.info("【屏蔽】搜索框");
		return CommonUtil.addBlockCSS(
			'#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div:has(input[data-e2e="searchbar-input"])'
		);
	},
	/**
	 * 【屏蔽】搜索框的提示
	 */
	shieldSearchPlaceholder() {
		log.info("【屏蔽】搜索框的提示");
		let result = [];
		result.push(
			CommonUtil.addBlockCSS(
				'#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div div:has( + input[data-e2e="searchbar-input"])'
			)
		);
		result.push(
			addStyle(/*css*/ `
			#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div input[data-e2e="searchbar-input"]::placeholder{
				color: transparent;
			}`)
		);
		return result;
	},
	/**
	 * 【屏蔽】搜索-猜你想搜
	 */
	shieldSearchGuessYouWantToSearch() {
		log.info("【屏蔽】搜索-猜你想搜");
		return CommonUtil.addBlockCSS(
			'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])',
			'button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]'
		);
	},
	/**
	 * 【屏蔽】搜索-抖音热点
	 */
	shieldSearchTiktokHotspot() {
		log.info("【屏蔽】搜索-抖音热点");
		return CommonUtil.addBlockCSS(
			'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-hot-container"])',
			'button[data-e2e="searchbar-button"] + div div[data-e2e="search-hot-container"]'
		);
	},
};
