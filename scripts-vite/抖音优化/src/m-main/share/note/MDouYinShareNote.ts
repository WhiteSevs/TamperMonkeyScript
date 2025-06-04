import { DOMUtils, addStyle, log, utils } from "@/env";
import blockCSS from "./block.css?raw";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { Panel } from "@/setting/panel";
import Qmsg from "qmsg";
import { DouYinUrlUtils } from "@/utils/DouYinUrlUtils";
import { CommonUtil } from "@/utils/CommonUtil";

export const MDouYinShareNote = {
	init() {
		addStyle(blockCSS);
		Panel.execMenuOnce("m-dy-share-note-blockRecommend", () => {
			return this.blockRecommend();
		});
		Panel.execMenuOnce("m-dy-share-note-blockComment", () => {
			return this.blockComment();
		});
		Panel.execMenuOnce("m-dy-share-note-blockFooterToobar", () => {
			return this.blockFooterToobar();
		});
		Panel.execMenuOnce("m-dy-share-note-coverUser", () => {
			this.coverUser();
		});
		Panel.execMenuOnce("m-dy-share-note-coverHashTag", () => {
			this.coverHashTag();
		});
		Panel.execMenuOnce("m-dy-share-note-coverMusic", () => {
			this.coverMusic();
		});
		Panel.execMenuOnce("m-dy-share-note-coverRecommend", () => {
			this.coverRecommend();
		});
		Panel.execMenuOnce(
			"m-dy-share-note-coverExcitingGraphicsAndText",
			() => {
				this.coverExcitingGraphicsAndText();
			}
		);
	},
	/**
	 * 【屏蔽】相关推荐
	 */
	blockRecommend() {
		log.info("【屏蔽】相关推荐");
		return CommonUtil.addBlockCSS(".recommend-con");
	},
	/**
	 * 【屏蔽】评论
	 */
	blockComment() {
		log.info("【屏蔽】评论");
		return CommonUtil.addBlockCSS(".comment-con");
	},
	/**
	 * 【屏蔽】底部工具栏
	 */
	blockFooterToobar() {
		log.info("【屏蔽】底部工具栏");
		return CommonUtil.addBlockCSS(".footer-con");
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
	/**
	 * 覆盖精彩图文点击事件
	 */
	coverExcitingGraphicsAndText() {
		log.info("覆盖精彩图文点击事件");
		DOMUtils.on(
			document,
			"click",
			".container .related-list-con .related-note-item",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLElement;
				let rectFiber = utils.getReactObj($click).reactFiber;

				if (!rectFiber) {
					log.error("获取reactFiber失败");
					Qmsg.error("获取reactFiber失败");
					return;
				}
				let itemData = rectFiber.return.memoizedProps.itemData;
				let awemeId = itemData["awemeId"];
				let url = DouYinUrlUtils.getNoteUrl(awemeId);
				window.open(url, "_blank");
			},
			{ capture: true }
		);
		// 推荐更多精彩图文
		// 查看更多
		DOMUtils.on(
			document,
			"click",
			".related-title-con",
			(event) => utils.preventEvent(event),
			{ capture: true }
		);
	},
};
