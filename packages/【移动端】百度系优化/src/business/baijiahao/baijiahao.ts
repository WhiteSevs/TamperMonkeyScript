import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import { PopsPanel } from "@/ui/setting";
import BaiJiaHaoShieldCSS from "./shield.css?raw";
import { BaiJiaHaoHook } from "./hook";

const BaiduBaiJiaHao = {
    init() {
        GM_addStyle(BaiJiaHaoShieldCSS);
        log.info("插入CSS规则");
        BaiJiaHaoHook.init();
        if (PopsPanel.getValue("baijiahao_shield_recommended_article")) {
            log.success("【屏蔽】推荐文章");
            this.shieldRecommendArticle();
        }
        if (PopsPanel.getValue("baijiahao_shield_user_comment")) {
            log.success("【屏蔽】用户评论");
            this.shieldUserComment();
        }

        if (PopsPanel.getValue("baijiahao_shield_user_comment_input_box")) {
            log.success("【屏蔽】底部悬浮工具栏");
            this.shieldBottomToolBar();
        }
    },
    shieldRecommendArticle() {
        GM_addStyle(`
        .infinite-scroll-component__outerdiv, 
        div#page_wrapper > div > div:nth-child(5), 
        div:has(+ .infinite-scroll-component__outerdiv), 
        /* 电脑端的左边的按钮-屏蔽 */
        #ssr-content > :last-child , 
        /* 电脑端的右边的推荐-屏蔽 */
        #ssr-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(2){
            display: none !important;
        }

        /* 电脑端的文章居中 */
        #ssr-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) {
            width: 55% !important;
        }`);
        /* 某些情况下的CSS */
        GM_addStyle(`
        #page_wrapper > div.other > div[class=""]:nth-child(4){
            display: none !important;
        }
      `);
        /* 简单UA&链接参数wfr=spide下的精彩推荐 */
        GM_addStyle(`
        #page_wrapper div.spider > div[class=""]:nth-child(4),
        #page_wrapper div.spider > div[class=""]:nth-child(5){
            display: none !important;
        }`);
        /* Gecko的简单UA下的精彩推荐 */
        GM_addStyle(`
        #page_wrapper .searchCraft > div[class=""]{
            display: none !important;
        }`);
    },
    shieldUserComment() {
        GM_addStyle(`
        #commentModule{
            display: none !important;
        }`);
    },
    shieldBottomToolBar() {
        GM_addStyle(`
        div#wise-invoke-interact-bar{
            display: none !important;
        }`);
    },
};


export {
    BaiduBaiJiaHao
}