import { log } from "@/env";
import AiQiChaShieldCSS from "./shield.css?raw";
import { GM_addStyle, unsafeWindow } from "ViteGM";
import { PopsPanel } from "@/ui/setting";

const BaiduAiQiCha = {
    init() {
        GM_addStyle(AiQiChaShieldCSS);
        log.info("插入CSS规则");
        this.camouflageBottomPopup();
        PopsPanel.execMenu("baidu_aiqicha_shield_carousel", () => {
            this.shieldCarousel();
        })
        PopsPanel.execMenu("baidu_aiqicha_shield_industry_host_news", () => {
            this.shieldIndustryHostNews();
        })
    },
    /**
     * 伪装为已经弹窗过了
     */
    camouflageBottomPopup() {
        unsafeWindow.localStorage.setItem(
            "coupon_bottom_popup",
            new Date().getTime().toString()
        );
    },
    /**
     * 屏蔽轮播图
     */
    shieldCarousel() {
        GM_addStyle(`
        div.index-banner-container.van-swipe{
            display: none !important;
        }`);
    },
    /**
     * 屏蔽行业热点新闻
     */
    shieldIndustryHostNews() {
        GM_addStyle(`
        div.hot-news{
            display: none !important;
        }`);
    },
};
export {
    BaiduAiQiCha
}