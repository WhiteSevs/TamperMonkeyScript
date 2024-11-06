import { addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import ShieldCSS from "./css/shield.css?raw";
import { CommonUtil } from "@/utils/CommonUtil";

const CSDNHuaWeiCloud = {
	init() {
		addStyle(ShieldCSS);
		PopsPanel.execMenuOnce(
			"csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",
			() => {
				return this.shieldCloudDeveloperTaskChallengeEvent();
			}
		);
		PopsPanel.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent", () => {
			return this.autoExpandContent();
		});
		PopsPanel.execMenuOnce(
			"csdn-hua-wei-cloud-shieldLeftFloatingButton",
			() => {
				return this.shieldLeftFloatingButton();
			}
		);
		PopsPanel.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn", () => {
			return this.blockRightColumn();
		});
		PopsPanel.execMenuOnce(
			"csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",
			() => {
				return this.blockRecommendedContentAtTheBottom();
			}
		);
		PopsPanel.execMenuOnce(
			"csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",
			() => {
				return this.shieldTheBottomForMoreRecommendations();
			}
		);
	},
	/**
	 * 自动展开内容
	 */
	autoExpandContent() {
		log.info("自动展开全文");
		/* 点击阅读全文 */
		return [
			CommonUtil.addBlockCSS("div.article-show-more"),
			addStyle(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`),
		];
	},
	/**
	 * 屏蔽云开发者任务挑战活动
	 */
	shieldCloudDeveloperTaskChallengeEvent() {
		log.info("屏蔽云开发者任务挑战活动");
		return CommonUtil.addBlockCSS(".luck-draw-modal-warp");
	},
	/**
	 * 屏蔽左侧悬浮按钮
	 */
	shieldLeftFloatingButton() {
		log.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮");
		return CommonUtil.addBlockCSS("div.toolbar-wrapper.article-interact-bar");
	},
	/**
	 * 屏蔽右侧栏
	 */
	blockRightColumn() {
		log.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签");
		return CommonUtil.addBlockCSS("div.page-home-right.dp-aside-right");
	},
	/**
	 * 屏蔽底部推荐内容
	 */
	blockRecommendedContentAtTheBottom() {
		log.info("屏蔽底部推荐内容");
		return CommonUtil.addBlockCSS("div.recommend-card-box");
	},
	/**
	 * 屏蔽底部更多推荐
	 */
	shieldTheBottomForMoreRecommendations() {
		log.info("屏蔽底部更多推荐");
		return CommonUtil.addBlockCSS("div.more-article");
	},
};

export { CSDNHuaWeiCloud };
