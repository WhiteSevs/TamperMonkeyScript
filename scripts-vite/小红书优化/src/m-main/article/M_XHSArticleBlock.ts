import { addStyle, log } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";

export const M_XHSArticleBlock = {
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
	blockBottomSearchFind() {
		log.info("屏蔽底部搜索发现");
		return CommonUtil.addBlockCSS(
			".hotlist-container",
			/* 一大块空白区域 */
			".safe-area-bottom.margin-placeholder"
		);
	},
	/**
	 * 屏蔽底部工具栏
	 */
	blockBottomToorBar() {
		log.info("屏蔽底部工具栏");
		return CommonUtil.addBlockCSS(".engage-bar-container");
	},
	/**
	 * 屏蔽视频笔记的作者热门笔记
	 */
	blockAuthorHotNote() {
		log.info("屏蔽视频笔记的作者热门笔记");
		return CommonUtil.addBlockCSS(
			".user-notes-box.user-notes-clo-layout-container"
		);
	},
	/**
	 * 屏蔽视频笔记的热门推荐
	 */
	blockHotRecommendNote() {
		log.info("屏蔽视频笔记的热门推荐");
		return CommonUtil.addBlockCSS("#new-note-view-container .recommend-box");
	},
};
