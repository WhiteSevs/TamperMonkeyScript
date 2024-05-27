import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import ShieldCSS from "./css/shield.css?raw";

const CSDNHuaWeiCloud = {
    init() {
        GM_addStyle(ShieldCSS);
        PopsPanel.execMenu("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent", () => {
            this.shieldCloudDeveloperTaskChallengeEvent();
        });
        PopsPanel.execMenu("csdn-hua-wei-cloud-autoExpandContent", () => {
            this.autoExpandContent();
        });
        PopsPanel.execMenu("csdn-hua-wei-cloud-shieldLeftFloatingButton", () => {
            this.shieldLeftFloatingButton();
        });
        PopsPanel.execMenu("csdn-hua-wei-cloud-blockRightColumn", () => {
            this.blockRightColumn();
        });
        PopsPanel.execMenu("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom", () => {
            this.blockRecommendedContentAtTheBottom();
        });
        PopsPanel.execMenu("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations", () => {
            this.shieldTheBottomForMoreRecommendations();
        });
    },
    /**
     * 自动展开内容
     */
    autoExpandContent() {
        log.success('自动展开全文');
        GM_addStyle(`
        /* 自动展开全文 */
        .main-content .user-article{
            height: auto !important;
            overflow: auto !important;
        }
        /* 点击阅读全文 */
        div.article-show-more {
            display: none !important;
        }
        `)
    },
    /**
     * 屏蔽云开发者任务挑战活动
     */
    shieldCloudDeveloperTaskChallengeEvent() {
        let GM_cookie = new utils.GM_Cookie();
        GM_cookie.set({ name: "show_join_group_index", value: 1 });
        log.success("屏蔽云开发者任务挑战活动");
    },
    /**
     * 屏蔽左侧悬浮按钮
     */
    shieldLeftFloatingButton() {
        log.success(
            "屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"
        );
        GM_addStyle(`
        div.toolbar-wrapper.article-interact-bar{
          display: none !important;
        }`);
    },
    /**
     * 屏蔽右侧栏
     */
    blockRightColumn() {
        log.success("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签");
        GM_addStyle(`
        div.page-home-right.dp-aside-right{
          display: none !important;
        }
        `);
    },
    /**
     * 屏蔽底部推荐内容
     */
    blockRecommendedContentAtTheBottom() {
        log.success("屏蔽底部推荐内容");
        GM_addStyle(`
        div.recommend-card-box{
          display: none !important;
        }`);
    },
    /**
     * 屏蔽底部更多推荐
     */
    shieldTheBottomForMoreRecommendations() {
        log.success("屏蔽底部更多推荐");
        GM_addStyle(`
        div.more-article{
          display: none !important;
        }`);
    },
}

export {
    CSDNHuaWeiCloud
}