import { PopsPanel } from "@/setting/setting";
import { addStyle, log } from "@/env";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { DouYinRouter } from "@/router/DouYinRouter";
import { CommonUtil } from "@/utils/CommonUtil";

export const DouYinVideoPlayerCommentBlockElement = {
	init() {
		PopsPanel.execMenuOnce("dy-video-shieldUserCommentToolBar", () => {
			return this.shieldUserCommentToolBar();
		});
		PopsPanel.execMenuOnce(
			"dy-video-shieldUserCommentEveryOneAllSearch",
			() => {
				return this.shieldUserCommentEveryOneAllSearch();
			}
		);
	},

	/**
	 * 【屏蔽】评论工具栏
	 */
	shieldUserCommentToolBar() {
		log.info("【屏蔽】评论工具栏");
		return [CommonUtil.addBlockCSS(".comment-input-container")];
	},
	/**
	 * 【屏蔽】大家都在搜
	 */
	shieldUserCommentEveryOneAllSearch() {
		log.info("【屏蔽】大家都在搜");
		return [CommonUtil.addBlockCSS(".comment-header-with-search")];
	},
};

export const DouYinVideoPlayerBlockElement_BottomToolbar = {
	init() {
		PopsPanel.execMenuOnce("shieldBottomVideoToolBar", () => {
			return this.shieldBottomVideoToolBar();
		});
		PopsPanel.execMenuOnce("dy-video-bottom-shieldVideoInfoWrap", () => {
			return this.shieldVideoInfoWrap();
		});
		PopsPanel.execMenuOnce("shieldBottomVideoToolbarDanmuContainer", () => {
			return this.shieldBottomVideoToolbarDanmuContainer();
		});
	},
	/**
	 * 【屏蔽】底部视频工具栏
	 */
	shieldBottomVideoToolBar() {
		log.info("【屏蔽】底部视频工具栏");
		return [
			CommonUtil.addBlockCSS("xg-controls.xgplayer-controls"),
			// 修复底部工具栏因屏蔽导致的空白区域
			addStyle(/*css*/ `
			#sliderVideo[data-e2e="feed-active-video"] div:has( > div > #video-info-wrap),
			div:has( > div > pace-island > #video-info-wrap ),
			xg-video-container.xg-video-container{
				bottom: 0 !important;
			}`),
		];
	},
	/**
	 * 【屏蔽】视频信息
	 */
	shieldVideoInfoWrap() {
		log.info("【屏蔽】视频信息");
		return [CommonUtil.addBlockCSS("#video-info-wrap")];
	},
	/**
	 * 【屏蔽】底部视频工具栏的弹幕容器
	 */
	shieldBottomVideoToolbarDanmuContainer() {
		// 弹幕
		// .basePlayerContainer > div.danmu
		log.info("【屏蔽】底部视频工具栏的弹幕容器");
		return [
			CommonUtil.addBlockCSS(
				'xg-controls xg-inner-controls .danmakuContainer[data-e2e="danmaku-container"]'
			),
		];
	},
};

export const DouYinVideoPlayerBlockElement_RightToolbar = {
	init() {
		PopsPanel.execMenuOnce("shieldPlaySwitchButton", () => {
			return this.shieldPlaySwitchButton();
		});
		PopsPanel.execMenuOnce("shieldAuthorAvatar", () => {
			return this.shieldAuthorAvatar();
		});
		PopsPanel.execMenuOnce("shieldLikeButton", () => {
			return this.shieldLikeButton();
		});
		PopsPanel.execMenuOnce("shieldCommentButton", () => {
			return this.shieldCommentButton();
		});
		PopsPanel.execMenuOnce("shieldCollectionButton", () => {
			return this.shieldCollectionButton();
		});
		PopsPanel.execMenuOnce("shieldSharenButton", () => {
			return this.shieldSharenButton();
		});
		PopsPanel.execMenuOnce("shieldRelatedRecommendationsButton", () => {
			return this.shieldRelatedRecommendationsButton();
		});
		PopsPanel.execMenuOnce("shieldMoreButton", () => {
			return this.shieldMoreButton();
		});
	},
	/**
	 * 【屏蔽】切换播放
	 */
	shieldPlaySwitchButton() {
		log.info("【屏蔽】切换播放");
		return [
			CommonUtil.addBlockCSS(
				'.positionBox  .xgplayer-playswitch[data-state="normal"]',
				"div.xgplayer-playswitch",
				/* 全屏下的右侧的切换播放 */
				".xgplayer-playswitch"
			),
			addStyle(/*css*/ `
			div[data-e2e="slideList"]{
				/* 修复屏蔽后的视频宽度占据 */
				padding: 0px !important;
			}
			`),
		];
	},
	/**
	 * 【屏蔽】作者头像
	 */
	shieldAuthorAvatar() {
		log.info("【屏蔽】作者头像");
		return [
			CommonUtil.addBlockCSS(
				'div.dy-tip-container:has([data-e2e="video-avatar"])',
				// 2024.7.2 新增其它的样式匹配
				'.basePlayerContainer div[aria-describedby]:has([data-e2e="video-avatar"])'
			),
		];
	},
	/**
	 * 【屏蔽】点赞
	 */
	shieldLikeButton() {
		log.info("【屏蔽】点赞");
		return [
			CommonUtil.addBlockCSS(
				'div.dy-tip-container:has([data-e2e="video-player-digg"])',
				// 2024.7.2 新增其它的样式匹配
				'.basePlayerContainer div[aria-describedby]:has([data-e2e="video-player-digg"])'
			),
		];
	},
	/**
	 * 【屏蔽】评论
	 */
	shieldCommentButton() {
		log.info("【屏蔽】评论");
		return [
			CommonUtil.addBlockCSS(
				'div.dy-tip-container:has([data-e2e="feed-comment-icon"])',
				// 2024.7.2 新增其它的样式匹配
				'.basePlayerContainer div[aria-describedby]:has([data-e2e="feed-comment-icon"])'
			),
		];
	},
	/**
	 * 【屏蔽】收藏
	 */
	shieldCollectionButton() {
		log.info("【屏蔽】收藏");
		return [
			CommonUtil.addBlockCSS(
				'div.dy-tip-container:has([data-e2e="video-player-collect"])',
				// 2024.7.2 新增其它的样式匹配
				'.basePlayerContainer div[data-e2e="video-player-collect"][data-e2e-state="video-player-no-collect"]'
			),
		];
	},
	/**
	 * 【屏蔽】分享
	 */
	shieldSharenButton() {
		log.info("【屏蔽】分享");
		return [
			CommonUtil.addBlockCSS(
				'div.dy-tip-container:has([data-e2e="video-player-share"])',
				// 2024.7.2 新增其它的样式匹配
				'.basePlayerContainer div:has(>div[data-e2e="video-player-share"])'
			),
		];
	},
	/**
	 * 【屏蔽】看相关
	 */
	shieldRelatedRecommendationsButton() {
		log.info("【屏蔽】看相关");
		return [
			CommonUtil.addBlockCSS(
				'div.dy-tip-container:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
				'div.dy-tip-container:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])',
				// 2024.7.2 新增其它的样式匹配
				'.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
				// 2024.7.15
				'.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 0 0-8 8v4a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8v-4a8 8 0 0 0-8-8h-8zm8.5 10.866a1 1 0 0 0 0-1.732l-6-3.464a1 1 0 0 0-1.5.866v6.928a1 1 0 0 0 1.5.866l6-3.464z"])',
				// 2024.7.16 移动端的屏蔽规则
				'.basePlayerContainer div[aria-describedby]:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])'
			),
			addStyle(/*css*/ `
				/* 修复分享的悬浮框距离底部的高度 */
				div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`),
		];
	},
	/**
	 * 【屏蔽】更多
	 */
	shieldMoreButton() {
		log.info("【屏蔽】更多");
		return [
			CommonUtil.addBlockCSS(
				'div.dy-tip-container:has([data-e2e="video-play-more"])',
				// 2024.7.2 新增其它的样式匹配
				'.basePlayerContainer div[data-e2e="video-play-more"]'
			),
			addStyle(/*css*/ `
				/* 修复分享的悬浮框距离底部的高度 */
				div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`),
		];
	},
};
export const DouYinVideoPlayerBlockElement = {
	init() {
		PopsPanel.execMenuOnce("shieldRightExpandCommentButton", () => {
			return this.shieldRightExpandCommentButton();
		});
		PopsPanel.execMenuOnce("shieldSearchFloatingBar", () => {
			return this.shieldSearchFloatingBar();
		});
		PopsPanel.execMenuOnce("shieldCloseFullScreenButton", () => {
			return this.shieldCloseFullScreenButton();
		});
		PopsPanel.execMenuOnce("dy-video-blockShopInfo", () => {
			return this.blockShopInfo();
		});
		DouYinVideoPlayerBlockElement_BottomToolbar.init();
		DouYinVideoPlayerBlockElement_RightToolbar.init();
		DouYinVideoPlayerCommentBlockElement.init();
	},
	/**
	 * 【屏蔽】右侧的展开评论按钮
	 */
	shieldRightExpandCommentButton() {
		log.info("【屏蔽】右侧的展开评论按钮");
		return [
			CommonUtil.addBlockCSS(
				'#sliderVideo[data-e2e="feed-active-video"] > div > div > button[type="button"]',
				'.playerContainer button[type=button] svg > g[filter] > path[d="M21.316 29.73a1.393 1.393 0 01-1.97 0l-5.056-5.055a1.393 1.393 0 010-1.97l.012-.011 5.044-5.045a1.393 1.393 0 011.97 1.97l-4.07 4.071 4.07 4.071a1.393 1.393 0 010 1.97z"]'
			),
			addStyle(/*css*/ `
			.basePlayerContainer .positionBox{
				padding-right: 20px !important;
			}`),
		];
	},
	/**
	 * 左上角的鼠标的快捷搜索热点的悬浮栏
	 * 【屏蔽】搜索悬浮栏
	 */
	shieldSearchFloatingBar() {
		log.info("【屏蔽】搜索悬浮栏");
		let result = [];
		result.push(
			CommonUtil.addBlockCSS(
				/* 看相关页面的 */
				"#slideMode + div",
				// 2024.7.16
				'.playerContainer .slider-video>div>div:has([data-e2e="searchbar-button"])'
			)
		);
		if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
			/* 搜索页面的 */
			result.push(
				CommonUtil.addBlockCSS(
					// 2024.7.30
					'#douyin-right-container> div>div>div> div:has( div> input[data-e2e="searchbar-input"])'
				)
			);
		}
		return result;
	},
	/**
	 * 【屏蔽】网页全屏关闭按钮
	 */
	shieldCloseFullScreenButton() {
		log.info("【屏蔽】网页全屏关闭按钮");
		let result = [];
		result.push(
			CommonUtil.addBlockCSS(
				// 2024.7.16
				'.playerContainer .slider-video>div>div:has(path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
			)
		);
		if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
			// 搜索页面
			result.push(
				CommonUtil.addBlockCSS(
					'#douyin-right-container div>div:has(>svg>path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
				)
			);
		}
		return result;
	},
	/**
	 * 【屏蔽】购物信息
	 */
	blockShopInfo() {
		log.info(`【屏蔽】购物信息`);
		return CommonUtil.addBlockCSS(`.xgplayer-shop-anchor`);
	},
};
