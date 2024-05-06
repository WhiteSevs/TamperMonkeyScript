import { log } from "@/env";
import { GM_addStyle } from "ViteGM";

const MXHS_ArticleShield = {
    /**
     * 允许复制
     */
    allowCopy() {
        log.info("允许复制")
        GM_addStyle(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);
    },
    /**
     * 屏蔽底部搜索发现
     */
    shieldBottomSearchFind() {
        log.info("屏蔽底部搜索发现")
        GM_addStyle(`
        .hotlist-container,
        /* 一大块空白区域 */
        .safe-area-bottom.margin-placeholder{
            display: none !important;
        }
        `);
    },
    /**
     * 屏蔽底部工具栏
     */
    shieldBottomToorBar() {
        log.info("屏蔽底部工具栏")
        GM_addStyle(`
        .engage-bar-container{
            display: none !important;
        }`);
    },
    /**
     * 屏蔽视频笔记的作者热门笔记
     */
    shieldAuthorHotNote() {
        log.info("屏蔽视频笔记的作者热门笔记")
        GM_addStyle(`
        .user-notes-box.user-notes-clo-layout-container{
            display: none !important;
        }`);
    },
    /**
     * 屏蔽视频笔记的热门推荐
     */
    shieldHotRecommendNote() {
        log.info("屏蔽视频笔记的热门推荐")
        GM_addStyle(`
        #new-note-view-container .recommend-box{
            display: none !important;
        }`);
    },
};

export {
    MXHS_ArticleShield
}