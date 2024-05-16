import { GM_addStyle } from "ViteGM";
import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "../Element/DouYinElement";
import { log } from "@/env";

const ShieldSearch = {
	init() {
		PopsPanel.execMenu("shieldSearch", () => {
			this.shieldSearch();
		});
		PopsPanel.execMenu("shieldSearchPlaceholder", () => {
			this.shieldSearchPlaceholder();
		});
		PopsPanel.execMenu("shieldSearchGuessYouWantToSearch", () => {
			this.shieldSearchGuessYouWantToSearch();
		});
		PopsPanel.execMenu("shieldSearchTiktokHotspot", () => {
			this.shieldSearchTiktokHotspot();
		});
	},
	/**
	 * 【屏蔽】搜索框
	 */
	shieldSearch() {
		log.info("【屏蔽】搜索框");
		DouYinElement.addShieldStyle(
			'#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div:has(input[data-e2e="searchbar-input"])'
		);
	},
	/**
	 * 【屏蔽】搜索框的提示
	 */
	shieldSearchPlaceholder() {
		log.info("【屏蔽】搜索框的提示");
		DouYinElement.addShieldStyle(
			'#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div div:has( + input[data-e2e="searchbar-input"])'
		);
		GM_addStyle(`
		#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div input[data-e2e="searchbar-input"]::placeholder{
			color: transparent;
		}
		`);
	},
	/**
	 * 【屏蔽】搜索-猜你想搜
	 */
	shieldSearchGuessYouWantToSearch() {
		log.info("【屏蔽】搜索-猜你想搜");
		DouYinElement.addShieldStyle(
			'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])',
			'button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]'
		);
	},
	/**
	 * 【屏蔽】搜索-抖音热点
	 */
	shieldSearchTiktokHotspot() {
		log.info("【屏蔽】搜索-抖音热点");
		DouYinElement.addShieldStyle(
			'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-hot-container"])',
			'button[data-e2e="searchbar-button"] + div div[data-e2e="search-hot-container"]'
		);
	},
};

export { ShieldSearch };
