import { PopsPanel } from "@/setting/setting";
import { addStyle, log } from "@/env";
import { DouYinUtils } from "@/utils/DouYinUtils";

export const ShieldSearch = {
	init() {
		PopsPanel.execMenuOnce("shieldSearch", () => {
			return this.shieldSearch();
		});
		PopsPanel.execMenuOnce("shieldSearchPlaceholder", () => {
			return this.shieldSearchPlaceholder();
		});
		PopsPanel.execMenuOnce("shieldSearchGuessYouWantToSearch", () => {
			return this.shieldSearchGuessYouWantToSearch();
		});
		PopsPanel.execMenuOnce("shieldSearchTiktokHotspot", () => {
			return this.shieldSearchTiktokHotspot();
		});
	},
	/**
	 * 【屏蔽】搜索框
	 */
	shieldSearch() {
		log.info("【屏蔽】搜索框");
		return DouYinUtils.addBlockCSS(
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
			DouYinUtils.addBlockCSS(
				'#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div div:has( + input[data-e2e="searchbar-input"])'
			)
		);
		result.push(
			addStyle(`
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
		return DouYinUtils.addBlockCSS(
			'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])',
			'button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]'
		);
	},
	/**
	 * 【屏蔽】搜索-抖音热点
	 */
	shieldSearchTiktokHotspot() {
		log.info("【屏蔽】搜索-抖音热点");
		return DouYinUtils.addBlockCSS(
			'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-hot-container"])',
			'button[data-e2e="searchbar-button"] + div div[data-e2e="search-hot-container"]'
		);
	},
};
