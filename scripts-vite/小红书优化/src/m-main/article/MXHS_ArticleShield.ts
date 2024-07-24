import { addStyle, log } from "@/env";
import { CommonUtils } from "@/utils/CommonUtils";

const MXHS_ArticleShield = {
	/**
	 * 允许复制
	 */
	allowCopy() {
		log.info("允许复制");
		return addStyle(/*css*/ `
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
		log.info("屏蔽底部搜索发现");
		return CommonUtils.addBlockCSS(
			".hotlist-container",
			/* 一大块空白区域 */
			".safe-area-bottom.margin-placeholder"
		);
	},
	/**
	 * 屏蔽底部工具栏
	 */
	shieldBottomToorBar() {
		log.info("屏蔽底部工具栏");
		return CommonUtils.addBlockCSS(".engage-bar-container");
	},
	/**
	 * 屏蔽视频笔记的作者热门笔记
	 */
	shieldAuthorHotNote() {
		log.info("屏蔽视频笔记的作者热门笔记");
		return CommonUtils.addBlockCSS(
			".user-notes-box.user-notes-clo-layout-container"
		);
	},
	/**
	 * 屏蔽视频笔记的热门推荐
	 */
	shieldHotRecommendNote() {
		log.info("屏蔽视频笔记的热门推荐");
		return CommonUtils.addBlockCSS("#new-note-view-container .recommend-box");
	},
};

export { MXHS_ArticleShield };
