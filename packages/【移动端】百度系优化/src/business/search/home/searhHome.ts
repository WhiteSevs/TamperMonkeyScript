import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import { PopsPanel } from "@/ui";
import SearchHomeShieldCSS from "./shield.css?raw";
import SearchHomeMinificationShieldCSS from "./minificationShield.css?raw";

const BaiduSearchHome = {
    init() {
        GM_addStyle(SearchHomeShieldCSS);
        log.info("插入CSS规则");
        if (PopsPanel.getValue("baidu_search_home_homepage_minification")) {
            this.homepageMinification();
        }
    },
    homepageMinification() {
        GM_addStyle(SearchHomeMinificationShieldCSS);
        log.info("插入精简主页CSS规则");
    },
};

export {
    BaiduSearchHome
}