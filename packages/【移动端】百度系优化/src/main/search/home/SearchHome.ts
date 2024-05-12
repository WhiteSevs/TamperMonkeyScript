import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import SearchHomeShieldCSS from "./shield.css?raw";
import SearchHomeMinificationShieldCSS from "./minificationShield.css?raw";

const BaiduSearchHome = {
    init() {
        GM_addStyle(SearchHomeShieldCSS);
        log.info("插入CSS规则");
        PopsPanel.execMenu("baidu_search_home_homepage_minification", () => {
            this.homepageMinification();
        })
    },
    /**
     * 精简主页
     */
    homepageMinification() {
        GM_addStyle(SearchHomeMinificationShieldCSS);
        log.info("插入精简主页CSS规则");
    },
};

export {
    BaiduSearchHome
}