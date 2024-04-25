import { GM_addStyle } from "$";
import { PopsPanel } from "@/ui";
import { DouYinElement } from "../Element/element";

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
        DouYinElement.addShieldStyle(
            '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div:has(input[data-e2e="searchbar-input"])'
        );
    },
    /**
     * 【屏蔽】搜索框的提示
     */
    shieldSearchPlaceholder() {
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
        DouYinElement.addShieldStyle(
            'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])',
            'button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]'
        );
    },
    /**
     * 【屏蔽】搜索-抖音热点
     */
    shieldSearchTiktokHotspot() {
        DouYinElement.addShieldStyle(
            'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-hot-container"])',
            'button[data-e2e="searchbar-button"] + div div[data-e2e="search-hot-container"]'
        );
    },
}

export {
    ShieldSearch
}