import { DOMUtils, addStyle, log, utils } from "@/env";
import blockCSS from "./block.css?raw";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { PopsPanel } from "@/setting/setting";
import Qmsg from "qmsg";
import { DouYinUrlUtils } from "@/utils/DouYinUrlUtils";

export const MDouYinShareNote = {
	init() {
		addStyle(blockCSS);
		PopsPanel.execMenuOnce("m-dy-share-note-blockRecommend", () => {
			this.blockRecommend();
		});
		PopsPanel.execMenuOnce("m-dy-share-note-blockComment", () => {
			this.blockComment();
		});
		PopsPanel.execMenuOnce("m-dy-share-note-blockFooterToobar", () => {
			this.blockFooterToobar();
		});
		PopsPanel.execMenuOnce("m-dy-share-note-coverUser", () => {
			this.coverUser();
		});
		PopsPanel.execMenuOnce("m-dy-share-note-coverHashTag", () => {
			this.coverHashTag();
		});
		PopsPanel.execMenuOnce("m-dy-share-note-coverMusic", () => {
			this.coverMusic();
		});
		PopsPanel.execMenuOnce("m-dy-share-note-coverRecommend", () => {
			this.coverRecommend();
		});
	},
	/**
	 * 【屏蔽】相关推荐
	 */
	blockRecommend() {
		log.info("【屏蔽】相关推荐");
		DouYinUtils.addBlockCSS(".recommend-con");
	},
	/**
	 * 【屏蔽】评论
	 */
	blockComment() {
		log.info("【屏蔽】评论");
		DouYinUtils.addBlockCSS(".comment-con");
	},
	/**
	 * 【屏蔽】底部工具栏
	 */
	blockFooterToobar() {
		log.info("【屏蔽】底部工具栏");
		DouYinUtils.addBlockCSS(".footer-con");
	},
	/**
	 * 覆盖相关推荐的点击事件
	 */
	coverRecommend() {
		log.info("覆盖相关推荐的点击事件");
		DOMUtils.on(
			document,
			"click",
			"#masonry .card",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLDivElement;
				let rectFiber = utils.getReactObj($click).reactFiber;
				if (!rectFiber) {
					log.error("获取reactFiber失败");
					Qmsg.error("获取reactFiber失败");
					return;
				}
				let awemeId = rectFiber.return.memoizedProps.awemeId;
				let url = DouYinUrlUtils.getNoteUrl(awemeId);
				window.open(url, "_blank");
			},
			{ capture: true }
		);
	},
	/**
	 * 覆盖用户点击事件
	 */
	coverUser() {
		log.info("覆盖用户点击事件");
		DOMUtils.on(
			document,
			"click",
			".message-con__top",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLElement;
				let rectFiber = utils.getReactObj($click).reactFiber;

				if (!rectFiber) {
					log.error("获取reactFiber失败");
					Qmsg.error("获取reactFiber失败");
					return;
				}
				let sec_id =
					rectFiber.return.return.memoizedProps.video.authorInfo.sec_uid;
				let url = DouYinUrlUtils.getUserHomeUrl(sec_id);
				window.open(url, "_blank");
			},
			{ capture: true }
		);
	},
	/**
	 * 覆盖话题点击事件
	 */
	coverHashTag() {
		log.info("覆盖话题点击事件");
		DOMUtils.on(
			document,
			"click",
			".message-con__content__body .message-con__content__body-text",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLElement;
				let rectFiber = utils.getReactObj($click).reactFiber;

				if (!rectFiber) {
					log.error("获取reactFiber失败");
					Qmsg.error("获取reactFiber失败");
					return;
				}
				let index = rectFiber.index;
				let splitStrArr =
					rectFiber.return.return.return.return.memoizedProps.video.splitStrArr;
				let currentSplitStr = splitStrArr[index];
				let hashtagId = currentSplitStr["hashtagId"];
				let url = DouYinUrlUtils.getHashTagUrl(hashtagId);
				window.open(url, "_blank");
				// __reactFiber$b5fdevj1ipn
			},
			{ capture: true }
		);
	},
	/**
	 * 覆盖音乐点击事件
	 */
	coverMusic() {
		log.info("覆盖音乐点击事件");
		DOMUtils.on(
			document,
			"click",
			".message-con__footer",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLElement;
				let rectFiber = utils.getReactObj($click).reactFiber;

				if (!rectFiber) {
					log.error("获取reactFiber失败");
					Qmsg.error("获取reactFiber失败");
					return;
				}
				let musicId = rectFiber.return.return.memoizedProps.video.musicId;
				let url = DouYinUrlUtils.getMusicUrl(musicId);
				window.open(url, "_blank");
			},
			{ capture: true }
		);
	},
};
