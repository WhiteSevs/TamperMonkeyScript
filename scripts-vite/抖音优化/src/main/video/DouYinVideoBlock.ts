import { Panel } from "@components/setting/panel";
import { addStyle, log } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { CommonUtil } from "@components/utils/CommonUtil";
import { DouYinVideoPlayer } from "./DouYinVideoPlayer";

export const DouYinVideoBlock_Comment = {
	init() {
		Panel.execMenuOnce("dy-video-shieldUserCommentToolBar", () => {
			return this.shieldUserCommentToolBar();
		});
		Panel.execMenuOnce("dy-video-shieldUserCommentEveryOneAllSearch", () => {
			return this.shieldUserCommentEveryOneAllSearch();
		});
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

export const DouYinVideoBlock_BottomToolbar = {
	init() {
		Panel.execMenuOnce("shieldBottomVideoToolBar", () => {
			return this.shieldBottomVideoToolBar();
		});
		Panel.execMenuOnce("dy-video-bottom-shieldVideoInfoWrap", () => {
			return this.shieldVideoInfoWrap();
		});
		Panel.execMenuOnce("shieldBottomVideoToolbarDanmuContainer", () => {
			return this.shieldBottomVideoToolbarDanmuContainer();
		});
		Panel.execMenuOnce("dy-video-bottom-shieldVideoUnderTitleTag", () => {
			return this.shieldVideoUnderTitleTag();
		});
	},
	/**
	 * 【屏蔽】底部视频工具栏
	 */
	shieldBottomVideoToolBar() {
		log.info("【屏蔽】底部视频工具栏");
		return [
			CommonUtil.addBlockCSS("xg-controls.xgplayer-controls"),
			// 修复屏蔽后视频信息区域未沉底
			DouYinVideoPlayer.removeStyleBottom(),
			addStyle(/*css*/ `
				/* 视频标题往下移 */
				div:has(> #video-info-wrap){
					bottom: 0px !important;
				}
			`),
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
			CommonUtil.addBlockCSS('xg-controls xg-inner-controls .danmakuContainer[data-e2e="danmaku-container"]'),
		];
	},
	/**
	 * 【屏蔽】视频标题下的标签
	 */
	shieldVideoUnderTitleTag() {
		log.info(`【屏蔽】视频标题下的标签`);
		return [CommonUtil.addBlockCSS("#video-info-wrap .under-title-tag")];
	},
};

export const DouYinVideoBlock_RightToolbar = {
	init() {
		Panel.execMenuOnce("shieldPlaySwitchButton", () => {
			return this.shieldPlaySwitchButton();
		});
		Panel.execMenuOnce("blockAIDouYin", () => {
			return this.blockAIDouYin();
		});
		Panel.execMenuOnce("shieldAuthorAvatar", () => {
			return this.shieldAuthorAvatar();
		});
		Panel.execMenuOnce("shieldLikeButton", () => {
			return this.shieldLikeButton();
		});
		Panel.execMenuOnce("shieldCommentButton", () => {
			return this.shieldCommentButton();
		});
		Panel.execMenuOnce("shieldCollectionButton", () => {
			return this.shieldCollectionButton();
		});
		Panel.execMenuOnce("shieldSharenButton", () => {
			return this.shieldSharenButton();
		});
		Panel.execMenuOnce("shieldListenDouYinButton", () => {
			return this.shieldListenDouYinButton();
		});
		Panel.execMenuOnce("shieldRelatedRecommendationsButton", () => {
			return this.shieldRelatedRecommendationsButton();
		});
		Panel.execMenuOnce("shieldMoreButton", () => {
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
	 * 【屏蔽】AI抖音
	 */
	blockAIDouYin() {
		log.info(`【屏蔽】AI抖音`);
		return CommonUtil.addBlockCSS(
			'.immersive-player-switch-on-hide-interaction-area>div:has(>svg path[d="M8.175 4.88C8.318 2.458 10.38.548 12.815.665l.12.008a4.428 4.428 0 0 1 3.08 1.586 4.354 4.354 0 0 1 1.014 2.948l-.005.108c-.016.282-.06.556-.129.82l-.113.444 1.927-.499.111-.027c2.335-.543 4.733.81 5.362 3.105l.05.182a4.351 4.351 0 0 1-.524 3.23l-.06.096a4.409 4.409 0 0 1-2.514 1.87l-.105.028h-.001a4.336 4.336 0 0 1-.827.133l-.458.03 1.075 1.67.06.096c1.221 2.003.705 4.63-1.222 5.957l-.095.063a4.44 4.44 0 0 1-3.424.605l-.11-.027a4.41 4.41 0 0 1-2.568-1.795l-.06-.09-.056-.09a4.355 4.355 0 0 1-.326-.65l-.17-.421-1.263 1.528c-1.53 1.85-4.265 2.207-6.162.774l-.09-.07a4.376 4.376 0 0 1-1.636-3.044l-.008-.112a4.361 4.361 0 0 1 .994-3.061 4.64 4.64 0 0 1 .592-.59l.352-.293-1.856-.722c-2.28-.886-3.468-3.423-2.606-5.68v-.001A4.407 4.407 0 0 1 3.68 6.245a4.448 4.448 0 0 1 3.991.37l.386.24.118-1.975zm4.57-2.218a2.413 2.413 0 0 0-2.547 2.165v.01l-.463 7.542a.046.046 0 0 1-.053.041l-.011-.003-.163-.064h-.001l-2.109-.821c.165-.28.28-.606.31-.978l.006-.09A2.422 2.422 0 0 0 6.475 8.23l-.081-.043-.104-.049a2.42 2.42 0 0 0-1.479-.153l-.102.024a2.403 2.403 0 0 0-1.652 1.446 2.396 2.396 0 0 0 1.285 3.076l.01.004 7.082 2.769a.044.044 0 0 1 .02.068l-.112.134v.001l-1.44 1.74a2.312 2.312 0 0 0-.775-.568l-.067-.03-.086-.033c-.856-.319-1.842-.147-2.517.48l-.066.064a2.38 2.38 0 0 0-.692 1.538c-.047.744.252 1.5.876 2.01a2.428 2.428 0 0 0 3.339-.265l.003-.004.003-.004 4.84-5.833a.046.046 0 0 1 .04-.016c.012 0 .022.005.03.012l.007.009.092.146.001.001 1.22 1.893c-.28.122-.547.302-.78.555l-.049.054v.001c-.64.74-.793 1.807-.337 2.682.282.545.737.927 1.257 1.13a2.418 2.418 0 0 0 2.19-.206 2.393 2.393 0 0 0 .78-3.24l-.002-.004-.003-.004-4.09-6.373-.001-.001-.005-.009a.043.043 0 0 1 .032-.055l.17-.044 2.195-.569c.032.325.133.654.328.974a2.445 2.445 0 0 0 2.462 1.146l.112-.022a2.405 2.405 0 0 0 1.358-.818l.29-.442a2.375 2.375 0 0 0 .206-1.621l-.018-.073a2.415 2.415 0 0 0-2.858-1.737l-.009.002-7.369 1.894h-.002a.043.043 0 0 1-.039-.009.043.043 0 0 1-.016-.037l.013-.204v-.002l.132-2.212c.32.07.67.077 1.034-.009.955-.225 1.708-.997 1.859-1.972a2.371 2.371 0 0 0-.296-1.56l-.055-.09a2.41 2.41 0 0 0-1.82-1.106l-.075-.005z"])',
			// 搜索页面的
			'.xgplayer div:has(>svg path[d="M8.175 4.88C8.318 2.458 10.38.548 12.815.665l.12.008a4.428 4.428 0 0 1 3.08 1.586 4.354 4.354 0 0 1 1.014 2.948l-.005.108c-.016.282-.06.556-.129.82l-.113.444 1.927-.499.111-.027c2.335-.543 4.733.81 5.362 3.105l.05.182a4.351 4.351 0 0 1-.524 3.23l-.06.096a4.409 4.409 0 0 1-2.514 1.87l-.105.028h-.001a4.336 4.336 0 0 1-.827.133l-.458.03 1.075 1.67.06.096c1.221 2.003.705 4.63-1.222 5.957l-.095.063a4.44 4.44 0 0 1-3.424.605l-.11-.027a4.41 4.41 0 0 1-2.568-1.795l-.06-.09-.056-.09a4.355 4.355 0 0 1-.326-.65l-.17-.421-1.263 1.528c-1.53 1.85-4.265 2.207-6.162.774l-.09-.07a4.376 4.376 0 0 1-1.636-3.044l-.008-.112a4.361 4.361 0 0 1 .994-3.061 4.64 4.64 0 0 1 .592-.59l.352-.293-1.856-.722c-2.28-.886-3.468-3.423-2.606-5.68v-.001A4.407 4.407 0 0 1 3.68 6.245a4.448 4.448 0 0 1 3.991.37l.386.24.118-1.975zm4.57-2.218a2.413 2.413 0 0 0-2.547 2.165v.01l-.463 7.542a.046.046 0 0 1-.053.041l-.011-.003-.163-.064h-.001l-2.109-.821c.165-.28.28-.606.31-.978l.006-.09A2.422 2.422 0 0 0 6.475 8.23l-.081-.043-.104-.049a2.42 2.42 0 0 0-1.479-.153l-.102.024a2.403 2.403 0 0 0-1.652 1.446 2.396 2.396 0 0 0 1.285 3.076l.01.004 7.082 2.769a.044.044 0 0 1 .02.068l-.112.134v.001l-1.44 1.74a2.312 2.312 0 0 0-.775-.568l-.067-.03-.086-.033c-.856-.319-1.842-.147-2.517.48l-.066.064a2.38 2.38 0 0 0-.692 1.538c-.047.744.252 1.5.876 2.01a2.428 2.428 0 0 0 3.339-.265l.003-.004.003-.004 4.84-5.833a.046.046 0 0 1 .04-.016c.012 0 .022.005.03.012l.007.009.092.146.001.001 1.22 1.893c-.28.122-.547.302-.78.555l-.049.054v.001c-.64.74-.793 1.807-.337 2.682.282.545.737.927 1.257 1.13a2.418 2.418 0 0 0 2.19-.206 2.393 2.393 0 0 0 .78-3.24l-.002-.004-.003-.004-4.09-6.373-.001-.001-.005-.009a.043.043 0 0 1 .032-.055l.17-.044 2.195-.569c.032.325.133.654.328.974a2.445 2.445 0 0 0 2.462 1.146l.112-.022a2.405 2.405 0 0 0 1.358-.818l.29-.442a2.375 2.375 0 0 0 .206-1.621l-.018-.073a2.415 2.415 0 0 0-2.858-1.737l-.009.002-7.369 1.894h-.002a.043.043 0 0 1-.039-.009.043.043 0 0 1-.016-.037l.013-.204v-.002l.132-2.212c.32.07.67.077 1.034-.009.955-.225 1.708-.997 1.859-1.972a2.371 2.371 0 0 0-.296-1.56l-.055-.09a2.41 2.41 0 0 0-1.82-1.106l-.075-.005z"])'
		);
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
	 * 【屏蔽】听抖音
	 */
	shieldListenDouYinButton() {
		log.info("【屏蔽】听抖音");
		return [
			CommonUtil.addBlockCSS(
				'.basePlayerContainer div[aria-describedby]:has(path[d="M9.68718 12.4801C8.612 14.3927 8.1197 16.7374 8.05821 19.0767C8.23942 18.9661 8.4351 18.8725 8.64383 18.7988L9.16952 18.6132C10.7699 18.0482 12.5315 18.8701 13.1042 20.4491L15.3865 26.7417C15.9591 28.3206 15.126 30.0586 13.5257 30.6236L13 30.8092C11.4155 31.3686 9.85676 30.6485 8.86663 29.2939C8.83318 29.2583 8.80192 29.22 8.7732 29.1788C7.33136 27.1149 6.42117 24.618 6.13186 21.9841C5.75876 18.5873 6.12658 14.6403 7.8929 11.4983C9.70099 8.28189 12.9317 6 17.9885 6C23.0436 6 26.2778 8.27305 28.092 11.4819C29.8643 14.6168 30.2393 18.557 29.8725 21.9536C29.5881 24.5883 28.6825 27.0875 27.2445 29.155C27.2194 29.1911 27.1924 29.2251 27.1636 29.2569C26.1749 30.6354 24.6023 31.3737 23.0035 30.8092L22.4778 30.6236C20.8774 30.0586 20.0443 28.3206 20.617 26.7417L22.8993 20.4491C23.472 18.8701 25.2335 18.0482 26.8339 18.6132L27.3596 18.7988C27.5669 18.8719 27.7613 18.9648 27.9415 19.0744C27.8783 16.7301 27.382 14.3817 26.3001 12.468C24.846 9.89593 22.2949 8.02429 17.9885 8.02428C13.684 8.02428 11.1369 9.90129 9.68718 12.4801Z"])'
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
				[data-e2e="video-player-share"]+div[data-e2e="video-share-container"] > div:first-child{
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
				[data-e2e="video-player-share"]+div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`),
		];
	},
};
export const DouYinVideoBlock = {
	init() {
		Panel.execMenuOnce("shieldRightExpandCommentButton", () => {
			return this.shieldRightExpandCommentButton();
		});
		Panel.execMenuOnce("shieldSearchFloatingBar", () => {
			return this.shieldSearchFloatingBar();
		});
		Panel.execMenuOnce("shieldCloseFullScreenButton", () => {
			return this.shieldCloseFullScreenButton();
		});
		Panel.execMenuOnce("dy-video-blockShopInfo", () => {
			return this.blockShopInfo();
		});
		Panel.execMenuOnce("dy-video-blockTitleTopTag", () => {
			return this.blobkTitleTopTag();
		});
		Panel.execMenuOnce("dy-video-blockClickRecommend", () => {
			return this.blockClickRecommend();
		});
		DouYinVideoBlock_BottomToolbar.init();
		DouYinVideoBlock_RightToolbar.init();
		DouYinVideoBlock_Comment.init();
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
	/**
	 * 【屏蔽】视频标题上的标签
	 *
	 * - 每周精选
	 * - 抖音精选
	 */
	blobkTitleTopTag() {
		log.info(`【屏蔽】视频标题上的标签`);
		return CommonUtil.addBlockCSS(
			"span:has(+#video-info-wrap):has(img)",
			"span:has(+div #video-info-wrap):has(img)"
		);
	},
	/**
	 * 【屏蔽】点击推荐
	 */
	blockClickRecommend() {
		log.info(`【屏蔽】点击推荐`);
		return CommonUtil.addBlockCSS(".xgplayer-recommend-tag");
	},
};
