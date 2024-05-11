import { GM_addStyle } from "ViteGM";
import { DOMUtils, log } from "@/env";
import ZhiDaoShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/ui/setting";

const BaiduZhiDao = {
    init() {
        GM_addStyle(ZhiDaoShieldCSS);
        log.info("插入CSS规则");
        this.removeAd();
        PopsPanel.execMenu("baidu_zhidao_block_recommend_more_exciting_content", () => {
            this.blockRecommendMoreExcitingContent();
        })
        PopsPanel.execMenu("baidu_zhidao_block_other_answers", () => {
            this.blockOtherAnswers();
        })
        PopsPanel.execMenu("baidu_zhidao_block_related_issues", () => {
            this.blockRelatedIssues();
        })
        PopsPanel.execMenu("baidu_zhidao_shield_top_fixed_toolbar", () => {
            this.shieldTopFloatToolBar();
        })
    },
    /**
     * 移除广告
     */
    removeAd() {
        if (document.querySelector(".ec-ad")) {
            DOMUtils.remove(
                DOMUtils.parent(document.querySelectorAll(".ec-ad"))
            );
        }
    },
    /**
     * 屏蔽顶部悬浮工具栏
     */
    blockRecommendMoreExcitingContent() {
        GM_addStyle(`
        .feed-recommend-title,
        #feed-recommend,
        .mm-content-box.mm-content-line.feed-recommend{
        display: none !important;
        }`);
    },
    /**
     * 屏蔽其他回答
     */
    blockOtherAnswers() {
        GM_addStyle(`
        .replies-container + div{
        display: none !important;
        }`);
    },
    /**
     * 屏蔽相关问题
     */
    blockRelatedIssues() {
        GM_addStyle(`
        div[id^=wahsd],
        div[class^="w-question-list"]{
        display: none !important;
        }`);
    },
    /**
     * 屏蔽顶部悬浮工具栏
     */
    shieldTopFloatToolBar() {
        GM_addStyle(
            `.iknow-root-dom-element .question-answer-container .question-answer-layer.fixed{display: none !important;}`
        );
    },
};

export {
    BaiduZhiDao
}