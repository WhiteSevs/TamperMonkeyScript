import { $, $$, DOMUtils, Qmsg, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { BilibiliUrl } from "@/utils/BilibiliUrl";
import { BilibiliData } from "@/data/BlibiliData";
import { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { VueUtils } from "@/utils/VueUtils";
import { BilibiliVideoPlayer } from "./BilibiliVideoPlayer";
import { MobileCommentModule } from "@/lib/MobileCommentModule";
import MobileCommentModuleStyle from "@/lib/MobileCommentModule.css?raw";
import { CommonUtil } from "@/utils/CommonUtil";
import { GM_RESOURCE_MAPPING } from "@/GM_Resource_Mapping";
import { GestureBack } from "@/utils/GestureBack";

export const BilibiliVideo = {
	$data: {
		/** 是否已添加美化CSS */
		isAddBeautifyCSS: false,
		/** 是否已经初始化评论模块 */
		isInitCommentModule: false,
		/** 是否已经初始化简介模块 */
		isInitDescModule: false,
	},
	init() {
		BilibiliVideoPlayer.init();
		/* 执行hook */
		// PopsPanel.execMenuOnce("bili-video-repairVideoBottomAreaHeight", () => {
		// 	return this.repairVideoBottomAreaHeight();
		// });
		// PopsPanel.execMenu("bili-video-beautify", () => {
		// 	this.beautify();
		// });
		PopsPanel.execMenuOnce("bili-video-cover-bottomRecommendVideo", () => {
			this.coverBottomRecommendVideo();
		});
		PopsPanel.execMenuOnce("bili-video-cover-UpWrapper", () => {
			this.coverUpWrapper();
		});
		// PopsPanel.execMenuOnce("bili-video-gestureReturnToCloseCommentArea", () => {
		// 	this.gestureReturnToCloseCommentArea();
		// });
		PopsPanel.execMenuOnce("bili-video-cover-seasonNew", () => {
			this.coverSeasonNew();
		});
		// PopsPanel.execMenuOnce("bili-video-repairLinkJump", () => {
		// 	this.repairLinkJump();
		// });
		DOMUtils.ready(() => {
			// PopsPanel.execMenuOnce("bili-video-optimizationScroll", () => {
			// 	this.optimizationScroll();
			// });
			// PopsPanel.execMenu("bili-video-disableSwipeTab", () => {
			// 	this.disableSwipeTab();
			// });
			PopsPanel.execMenu("bili-video-addCommentModule", () => {
				this.addCommentModule();
			});
			PopsPanel.execMenu("bili-video-addDescModule", () => {
				this.addDescModule();
			});
		});
	},
	/**
	 * 美化显示
	 */
	beautify() {
		log.info("美化显示");
		/* 先添加美化CSS */
		if (!this.$data.isAddBeautifyCSS) {
			this.$data.isAddBeautifyCSS = true;
			addStyle(/*css*/ `
				@charset "UTF-8";
				${BilibiliData.className.video} .video-list .card-box {
					--left-card-width: 33%;
					--right-child-padding: 1.333vmin;
					/* 开启了bili-video-beautify */
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a {
					display: flex;
					flex-wrap: nowrap;
					gap: var(--right-child-padding);
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card {
					width: var(--left-card-width);
					height: 80px;
					flex: 0 auto;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card .count {
					background: transparent;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card .count .left {
					display: list-item;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card .count .left span.item {
					display: none;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card .count .duration {
					background: rgba(0, 0, 0, 0.4);
					border-radius: 0.6vmin;
					padding: 0px 0.5vmin;
					right: 1vmin;
					bottom: 1vmin;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .title {
					/*flex: 1;*/
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container {
					display: flex;
					flex-direction: column;
					width: calc(100% - var(--left-card-width));
					justify-content: space-between;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container > * {
					padding: var(--right-child-padding);
					padding-bottom: 0;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .left {
					gap: 1rem;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .left span {
					display: flex;
					align-items: safe center;
					gap: 1vmin;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .gm-up-name,
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .left {
					color: #999;
					font-size: 3vmin;
					transform-origin: left;
					display: flex;
					/*align-items: safe center;*/
					align-items: safe flex-end;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .gm-up-name svg {
					width: 3vmin;
					height: 3vmin;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .gm-up-name-text {
					margin-left: 1vmin;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .num {
					margin-right: 4vmin;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
					display: flex;
					flex-wrap: nowrap;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .card {
					width: var(--left-card-width);
					height: 100%;
					flex: 0 auto;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .card .count {
					background: transparent;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .card .count span {
					display: none;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .card .count .duration {
					background-color: rgba(0, 0, 0, 0.3);
					border-radius: 4px;
					color: #fff;
					font-size: 12px;
					height: 16px;
					line-height: 16px;
					margin-left: auto;
					padding-left: 4px;
					padding-right: 4px;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .title {
					flex: 1;
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

			`);
		}

		utils
			.waitNode<HTMLDivElement>(
				BilibiliData.className.video + " .bottom-tab .list-view .card-box",
				10000
			)
			.then(($cardBox) => {
				if (!$cardBox) {
					log.error("$cardBox is null");
					return;
				}
				/**
				 * 未设置isLogin的视频卡片
				 * @param $vCard
				 */
				function handleVCardToApp($vCard: HTMLDivElement) {
					// 标题
					let $originTitle = $vCard.querySelector<HTMLElement>(".title");
					// 左边的播放量信息
					let $originLeft =
						$vCard.querySelector<HTMLDivElement>(".count .left");
					// 是否已经处理过
					let isHandled = Boolean($vCard.querySelector(".gm-right-container"));
					let vueObj = VueUtils.getVue($vCard);
					if ($originTitle && $originLeft && vueObj && !isHandled) {
						let upName: string | null = vueObj?.info?.owner?.name;
						if (upName == null) {
							log.error("美化显示-handleVCardToApp：获取up主名字失败");
							return;
						}
						let $originCount = $vCard.querySelector<HTMLDivElement>(".count");
						let $title = $originTitle.cloneNode(true) as HTMLElement;
						let $left = $originLeft.cloneNode(true) as HTMLElement;
						// 隐藏元素，不能直接修改元素的位置，回答导致页面初始化时appendChild异常
						DOMUtils.hide($originTitle);
						if ($originCount) {
							// DOMUtils.hide($originCount);
						}
						// 视频封面右上角的App文字
						let $isOpenAppWeakened =
							$vCard.querySelector<HTMLDivElement>(".open-app.weakened");
						if ($isOpenAppWeakened) {
							DOMUtils.hide($isOpenAppWeakened);
						}
						let $upInfo = document.createElement("div");
						$upInfo.className = "gm-up-name";
						$upInfo.innerHTML = /*html*/ `
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${upName}</span>
						`;
						// 右侧容器
						let $rightContainer = document.createElement("div");
						// 右侧下面的容器
						let $rightBottom = document.createElement("div");
						$rightContainer.className = "gm-right-container";
						$rightBottom.className = "gm-right-bottom";
						DOMUtils.after($originTitle, $rightContainer);
						/* 标题 */
						$rightContainer.appendChild($title);

						/* 底部内容 */
						$rightContainer.appendChild($rightBottom);
						/* UP主 */
						$rightBottom.appendChild($upInfo);
						/* 播放量 弹幕量 */
						$rightBottom.appendChild($left);
					}
				}
				/**
				 * 设置了isLogin的视频卡片
				 * @param $vCard
				 */
				function handleVCard($vCard: HTMLDivElement) {
					let $originTitle = $vCard.querySelector<HTMLElement>(".title");
					let $originCount = $vCard.querySelector<HTMLDivElement>(".count");
					// 是否已经处理过
					let isHandled = Boolean($vCard.querySelector(".gm-right-container"));
					let vueObj = VueUtils.getVue($vCard);
					if ($originTitle && $originCount && vueObj && !isHandled) {
						/* 这个里面没有播放时长，自己添加一个 */
						let duration = vueObj?.info?.duration;
						if (duration == null) {
							log.error("美化显示-handleVCard：获取视频时长失败");
							return;
						}
						let upName = vueObj?.info?.owner?.name;
						if (upName == null) {
							log.error("美化显示-handleVCard：获取up主名字失败");
							return;
						}
						let $cloneTitle = $originTitle.cloneNode(true) as HTMLElement;
						let $cloneCount = $originCount.cloneNode(true) as HTMLDivElement;
						DOMUtils.hide($originTitle);
						let $duration = document.createElement("div");
						$duration.className = "duration";
						// 转换显示时长
						$duration.innerText = BilibiliUtils.parseDuration(duration);
						$cloneCount.className = "left";
						let $upInfo = document.createElement("div");
						$originCount.appendChild($duration);
						$upInfo.className = "gm-up-name";
						$upInfo.innerHTML = /*html*/ `
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${upName}</span>
						`;
						let $rightContainer = document.createElement("div");
						let $rightBottom = document.createElement("div");
						$rightContainer.className = "gm-right-container";
						$rightBottom.className = "gm-right-bottom";
						DOMUtils.after($originTitle, $rightContainer);
						/* 标题 */
						$rightContainer.appendChild($cloneTitle);

						/* 底部内容 */
						$rightContainer.appendChild($rightBottom);
						/* UP主 */
						$rightBottom.appendChild($upInfo);
						/* 播放量 弹幕量 */
						$rightBottom.appendChild($cloneCount);
					}
				}
				let lockFunc = new utils.LockFunction(() => {
					let $vCardList = document.querySelectorAll<HTMLDivElement>(
						BilibiliData.className.video +
							" .bottom-tab .list-view .card-box .v-card-toapp"
					);
					let $vCardList_isLogon = document.querySelectorAll<HTMLDivElement>(
						BilibiliData.className.video +
							" .bottom-tab .list-view .card-box>a.v-card"
					);
					/* isLogin不生效的情况下 */
					$vCardList.forEach((_$vCard_) => {
						handleVCardToApp(_$vCard_);
					});
					/* isLogin生效 */
					$vCardList_isLogon.forEach((_$vCard_) => {
						handleVCard(_$vCard_);
					});
				}, 25);
				let $videoRoot = document.querySelector<HTMLElement>(
					BilibiliData.className.video
				);
				if ($videoRoot) {
					utils.mutationObserver($videoRoot, {
						config: {
							subtree: true,
							attributes: true,
							childList: true,
						},
						callback() {
							lockFunc.run();
						},
					});
				} else {
					log.error("未找到视频根节点");
				}
			});
	},
	/**
	 * 修复视频底部区域高度
	 */
	repairVideoBottomAreaHeight() {
		log.info("修复视频底部区域高度");
		return addStyle(/*css*/ `
		${BilibiliData.className.video},
		${BilibiliData.className.mVideo} {
			/* 修复视频区域底部的高度 */
			.natural-module .fixed-module-margin {
				margin-top: 55.13333vmin;
			}
			/* 点击播放视频后的 */
			.m-video-new:has(> div > .m-video-player) {
				margin-top: 75vmin;
			}
			/* 未播放视频状态下的 */
			.m-video-new:has(> div[style*="display:none"] > .m-video-player) {
				margin-top: unset;
			}
		}
		html.tiny-app{
			${BilibiliData.className.video},
			${BilibiliData.className.mVideo}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`);
	},
	/**
	 * 修复up主信息区域的点击事件
	 */
	coverUpWrapper() {
		log.info(`修复up主信息区域的点击事件`);
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			[
				BilibiliData.className.video + " .bottom-wrapper .up-wrapper",
				BilibiliData.className.mVideo + " .bottom-wrapper .up-wrapper",
			],
			function (event) {
				let $click = event.target as HTMLElement;
				let $bottomWrapper = $click.closest<HTMLElement>(".bottom-wrapper")!;
				if (!$bottomWrapper) {
					log.error("获取元素.bottom-wrapper失败");
					return;
				}
				let vueInstance = VueUtils.getVue($bottomWrapper);
				if (!vueInstance) {
					log.error("获取元素.bottom-wrapper的vue实例失败");
					return;
				}
				let mid = vueInstance?.upInfo?.card?.mid;
				if (typeof mid === "string") {
					BilibiliUtils.goToUrl(BilibiliUrl.getUserSpaceUrl(mid));
				} else {
					Qmsg.error("获取mid失败");
				}
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 覆盖视频标题区域的点击事件
	 */
	coverBottomRecommendVideo() {
		log.info("覆盖 相关视频 点击事件");
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			[
				BilibiliData.className.video + " .list-view .card-box .launch-app-btn",
				BilibiliData.className.mVideo + " .list-view .card-box .launch-app-btn",
			],
			function (event) {
				let $click = event.target as HTMLDivElement;
				let vueObj = VueUtils.getVue($click);
				if (!vueObj) {
					Qmsg.error("获取相关视频的__vue__失败");
					return;
				}
				let bvid = vueObj.bvid;
				if (utils.isNull(bvid)) {
					if (
						vueObj.$children &&
						vueObj.$children[0] &&
						utils.isNotNull(vueObj.$children[0].bvid)
					) {
						bvid = vueObj.$children[0].bvid;
					} else {
						Qmsg.error("获取相关视频的bvid失败");
						return;
					}
				}
				log.info("相关视频的bvid: " + bvid);
				BilibiliUtils.goToUrl(BilibiliUrl.getVideoUrl(bvid));
				utils.preventEvent(event);
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 覆盖选集视频列表的点击事件
	 */
	coverSeasonNew() {
		log.info("覆盖 选集视频列表 点击事件");
		function ClickCallBack(event: PointerEvent | MouseEvent) {
			let $click = event.target as HTMLDivElement;
			let vueObj = VueUtils.getVue($click);
			if (!vueObj) {
				Qmsg.error("获取选集视频的目标视频的__vue__失败");
				return;
			}
			let bvid = vueObj.bvid;
			if (utils.isNull(bvid)) {
				Qmsg.error("获取相关视频的bvid失败");
				return;
			}
			log.info("相关视频的bvid: " + bvid);
			BilibiliUtils.goToUrl(BilibiliUrl.getVideoUrl(bvid));
			utils.preventEvent(event);
		}
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			[
				BilibiliData.className.video +
					" .m-video-season-new .video-card .launch-app-btn",
				BilibiliData.className.mVideo +
					" .m-video-season-new .video-card .launch-app-btn",
			],
			ClickCallBack,
			{
				capture: true,
			}
		);
		/* 查看更多 展开后的视频列表 */
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			[
				BilibiliData.className.video +
					" .m-video-season-panel .season-video-item .launch-app-btn",
				BilibiliData.className.mVideo +
					" .m-video-season-panel .season-video-item .launch-app-btn",
			],
			ClickCallBack,
			{
				capture: true,
			}
		);
	},
	/**
	 * 修复链接跳转
	 */
	repairLinkJump() {
		log.info(`修复链接跳转`);
		let lockFn = new utils.LockFunction(() => {
			[
				"a.member-link:not([href])[data-url]",
				"a.jump-link:not([href])[data-url]",
			].forEach((selector) => {
				$$<HTMLAnchorElement>(selector).forEach(($el) => {
					$el.href = $el.getAttribute("data-url")!;
				});
			});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			callback: () => {
				lockFn.run();
			},
		});
	},
	/**
	 * 手势返回关闭评论区
	 */
	gestureReturnToCloseCommentArea() {
		log.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview");
		utils.waitNode<HTMLDivElement>("#app").then(($app) => {
			utils
				.waitVueByInterval(
					$app,
					() => {
						let vueObj = VueUtils.getVue($app as HTMLDivElement);
						if (vueObj == null) {
							return false;
						}
						return typeof vueObj?.$router?.options?.scrollBehavior != null;
					},
					250,
					10000
				)
				.then((result) => {
					let appVue = VueUtils.getVue($app as HTMLDivElement);
					if (!appVue) {
						log.error("获取#app的vue属性失败");
						return;
					}
					let oldScrollBehavior = appVue.$router.options.scrollBehavior;
					appVue.$router.options.scrollBehavior = function (
						to: Vue2Instance["$route"],
						from: Vue2Instance["$route"],
						scrollInfo?: {
							x: number;
							y: number;
						}
					) {
						if (to["hash"] === "#/seeCommentReply") {
							/* 打开评论区 */
							log.info("当前操作为打开评论区，scrollBehavior返回null");
							return null;
						} else if (
							to["hash"] === "" &&
							from["hash"] === "#/seeCommentReply"
						) {
							/* 关闭评论区 */
							log.info("当前操作为关闭评论区，scrollBehavior返回null");
							return null;
						}
						return oldScrollBehavior.call(this, ...arguments);
					};
				});
		});
		DOMUtils.on(document, "click", ".sub-reply-preview", function (event) {
			let $app = document.querySelector<HTMLDivElement>("#app");
			let appVue = VueUtils.getVue($app as HTMLDivElement);
			if (!appVue) {
				log.error("获取#app元素失败");
				return;
			}
			let hookGestureReturnByVueRouter =
				BilibiliUtils.hookGestureReturnByVueRouter({
					vueObj: appVue,
					hash: "#/seeCommentReply",
					callback(isFromPopState) {
						if (!isFromPopState) {
							return false;
						}
						let $dialogCloseIcon =
							document.querySelector<HTMLDivElement>(".dialog-close-icon");
						if ($dialogCloseIcon) {
							$dialogCloseIcon.click();
						} else {
							log.error("评论区关闭失败，原因：元素dialog-close-icon获取失败");
						}
						return true;
					},
				});
			utils
				.waitNode<HTMLDivElement>(".dialog-close-icon")
				.then(($dialogCloseIcon) => {
					DOMUtils.on(
						$dialogCloseIcon,
						"click",
						function () {
							hookGestureReturnByVueRouter.resumeBack(false);
						},
						{
							capture: true,
							once: true,
						}
					);
				});
		});
	},
	/**
	 * 进入全屏
	 */
	enterVideoFullScreen() {
		utils
			.waitNode<HTMLElement>(".mplayer-btn-widescreen", 5000)
			.then(($btnWideScreen) => {
				if (!$btnWideScreen) {
					log.error("获取全屏按钮失败");
					Qmsg.error("获取全屏按钮失败");
					return;
				}
				if ($btnWideScreen.closest(".mplayer-wide")) {
					log.warn("当前的全屏按钮是【退出全屏】，不点击");
					return;
				}
				log.info(`进入全屏`);
				$btnWideScreen.click();
			});
	},
	/**
	 * 优化滚动显示view
	 */
	optimizationScroll() {
		/**
		 * 顶部导航栏
		 */
		let $mNavBar: HTMLElement | null = null;
		/** 视频主内容 */
		let $mVideoPlayer: HTMLElement | null = null;
		let $mVideoInfoNew: HTMLElement | null = null;
		/**
		 * 底部tab
		 */
		let $bottomTab: HTMLElement | null = null;
		/**
		 * 底部tab的affix
		 */
		let $bottomTabVAffix: HTMLElement | null = null;

		/** 最大高度 */
		let videoPlayerMaxHeight = 0;
		/** 最大padding-top */
		let videoPlayerMaxPaddingTop = 0;

		/**
		 * 判断元是否为空或者在不在页面中
		 */
		function checkNodeIsNull<T extends Node>(
			checkNode: T | null
		): checkNode is null {
			return !document.contains(checkNode);
		}
		DOMUtils.on(
			document,
			"scroll",
			(event) => {
				if (checkNodeIsNull($mVideoPlayer)) {
					$mVideoPlayer = document.querySelector(".m-video-player");
					if (checkNodeIsNull($mVideoPlayer)) {
						return;
					}
					if (videoPlayerMaxHeight == 0) {
						const videoPlayerRect = $mVideoPlayer.getBoundingClientRect();
						videoPlayerMaxHeight = videoPlayerRect.height;
						videoPlayerMaxPaddingTop = videoPlayerRect.top;
						log.info(`视频区域的最大高度为 ${videoPlayerMaxHeight}px`);
						log.info(`视频区域的最大top为 ${videoPlayerMaxPaddingTop}px`);
					}
				}
				if (checkNodeIsNull($mVideoInfoNew)) {
					$mVideoInfoNew = document.querySelector(".m-video-info-new");
					if (checkNodeIsNull($mVideoInfoNew)) {
						return;
					}
				}
				if (checkNodeIsNull($mNavBar)) {
					$mNavBar = document.querySelector(".m-navbar");
					if (checkNodeIsNull($mNavBar)) {
						return;
					}
				}
				if (checkNodeIsNull($bottomTab)) {
					$bottomTab = document.querySelector(".bottom-tab");
					if (checkNodeIsNull($bottomTab)) {
						return;
					}
				}
				if (checkNodeIsNull($bottomTabVAffix)) {
					$bottomTabVAffix = document.querySelector(".bottom-tab .v-affix");
					if (checkNodeIsNull($bottomTabVAffix)) {
						return;
					}
				}

				// 自动根据video-info的top距离来设置视频的padding-top值
				let videoInfoNewTop = $mVideoInfoNew.getBoundingClientRect().top;
				if (videoInfoNewTop >= 0) {
					if (videoInfoNewTop <= videoPlayerMaxHeight) {
						$mVideoPlayer.style.paddingTop = videoInfoNewTop + "px";
					} else {
						$mVideoPlayer.style.paddingTop = "";
					}
				} else {
					// padding-0
					$mVideoPlayer.style.paddingTop = "0px";
				}

				// 计算顶部导航栏和底部tab的距离
				// 也就是底部tab的top距离-导航栏的高度
				let navbarHeight = DOMUtils.height($mNavBar);
				let bottomTabTop = $bottomTab.getBoundingClientRect().top;

				if (bottomTabTop < navbarHeight) {
					// 超出上方|被覆盖在导航栏下面了
					// 固定底部的tab
					if ($bottomTabVAffix.hasAttribute("data-is-fixed")) {
					} else {
						$bottomTabVAffix.style.cssText = `position: fixed;left: 0px;top: ${navbarHeight}px;z-index: 10000;width: 100%;`;
						$bottomTabVAffix.setAttribute("data-is-fixed", "true");
					}
				} else {
					// 还在显示区域|在导航栏下面
					// 取消固定tab
					$bottomTabVAffix.style.cssText = "";
					$bottomTabVAffix.removeAttribute("data-is-fixed");
				}
			},
			{
				passive: true,
			}
		);
	},
	/**
	 * 禁止滑动切换tab
	 */
	disableSwipeTab() {
		log.info(`禁止滑动切换tab`);
		VueUtils.waitVuePropToSet(".m-video-bottom-tab", {
			msg: "等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",
			check(vueInstance) {
				return (
					vueInstance?.slider?.el instanceof HTMLElement &&
					typeof vueInstance?.slider?.events?.touchstart === "function" &&
					typeof vueInstance?.slider?.events?.touchmove === "function" &&
					typeof vueInstance?.slider?.events?.touchend === "function" &&
					typeof vueInstance?.slider?._bindEvents === "function"
				);
			},
			set(vueInstance) {
				/** 绑定函数的目标元素 */
				let $bindTarget = vueInstance.slider.el;
				$bindTarget.removeEventListener(
					"touchstart",
					vueInstance.slider.events.touchstart
				);
				$bindTarget.removeEventListener(
					"touchmove",
					vueInstance.slider.events.touchmove
				);
				$bindTarget.removeEventListener(
					"touchend",
					vueInstance.slider.events.touchend
				);
				vueInstance.slider._bindEvents = () => {};

				log.success(
					`成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数`
				);
			},
		});
	},
	/**
	 * 新增评论模块
	 *
	 * + https://greasyfork.org/zh-CN/scripts/524844-bilibili-mobile-comment-module
	 */
	addCommentModule() {
		log.info(`新增评论模块`);
		if (this.$data.isInitCommentModule) {
			// 重新初始化评论模块
			let $commentModuleWrapper = $<HTMLTableRowElement>(
				"#comment-module-wrapper"
			)!;
			// 清空
			DOMUtils.empty($commentModuleWrapper);
			MobileCommentModule.init($commentModuleWrapper);
			return;
		}
		this.$data.isInitCommentModule = true;
		CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
		addStyle(MobileCommentModuleStyle);
		addStyle(/*css*/ `
			.comment-container{
				position: relative;
			}
			.comment-container .reply-header{
				position: sticky;
				top: 0;
				z-index: 999;
				left: 0;
				right: 0;
				background: #fff;
			}
			#comment-module-wrapper{
				position: fixed;
				top: 0;
				left: 0;
				z-index: 2000;
				display: none;
				width: 100vw;
				height: 100vh;
				background-color: #fff;
				overflow-x: hidden;
			}
			.close-comment-module-btn{
				position: fixed;
				right: 20px;
				bottom: 20px;
				z-index: 2001;
				display: none;
				justify-content: center;
				align-items: center;
				width: 40px;
				height: 40px;
				color: #fff;
				border-radius: 100%;
				background-color: var(--bili-color);
			}
		`);
		addStyle(/*css*/ `
			.comment-module-show-btn{
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 12px 20px 12px;
				height: 40px;
				color: #fff;
				border-radius: 4px;
				background-color: var(--bili-color);
			}
		`);
		utils.waitNode<HTMLElement>(".m-video-info", 10000).then(($videoInfo) => {
			if (!$videoInfo) {
				log.error(`获取视频信息元素失败`);
				return;
			}
			const history_hash = "comment-module";
			// 手势模式
			let gestureBack = new GestureBack({
				hash: history_hash,
				useUrl: true,
				beforeHistoryBackCallBack(isUrlChange) {
					let $viewerClose = $<HTMLElement>(".viewer-button.viewer-close");
					// 当前是看图模式,仅退出看图
					if ($viewerClose) {
						$viewerClose.click();
					}
					if (isUrlChange) {
						$closeCommentModuleBtn.click();
					}
				},
			});
			let $commentModuleShowBtn = DOMUtils.createElement("div", {
				className: "comment-module-show-btn",
				innerHTML: `查看评论`,
			});
			let $closeCommentModuleBtn = DOMUtils.createElement("span", {
				className: "close-comment-module-btn",
				innerHTML: "×",
			});
			// 显示评论模块
			DOMUtils.on($commentModuleShowBtn, "click", (event) => {
				utils.preventEvent(event);
				DOMUtils.css($commentModuleWrapper, { display: "block" });
				DOMUtils.css($closeCommentModuleBtn, { display: "flex" });
				gestureBack.enterGestureBackMode();
			});
			// 隐藏评论模块
			DOMUtils.on($closeCommentModuleBtn, "click", (event) => {
				utils.preventEvent(event);
				DOMUtils.css($commentModuleWrapper, { display: "" });
				DOMUtils.css($closeCommentModuleBtn, { display: "" });
				gestureBack.quitGestureBackMode(false);
			});

			DOMUtils.append($videoInfo, $commentModuleShowBtn);
			let $commentModuleWrapper = DOMUtils.createElement("div", {
				id: "comment-module-wrapper",
			});
			DOMUtils.append(document.body, $commentModuleWrapper);
			DOMUtils.after($commentModuleWrapper, $closeCommentModuleBtn);
			// 初始化评论模块
			MobileCommentModule.init($commentModuleWrapper);
		});
	},
	/**
	 * 新增简介模块
	 */
	addDescModule() {
		log.info(`新增简介模块`);
		if (!this.$data.isInitDescModule) {
			this.$data.isInitDescModule = true;
			addStyle(/*css*/ `
				${BilibiliData.className.mVideo} .m-video-info .bottom-wrapper{
					flex-direction: column;
					align-items: flex-start;
					height: auto;
				}
			`);
			addStyle(/*css*/ `
				.video-desc-wrapper {
					color: #9499A0;
					font-size: 14px;
					width: 100%;

					.video-desc-text {
						margin: 10px 0px;
						white-space: pre-wrap;
					}
	
					.video-view-info-wrapper {
						display: flex;
						align-items: center;
						justify-content: flex-start;
						gap: 10px;
						margin: 5px 0px;
	
						.video-info-icon{
							display: flex;
							align-items: center;
							gap: 2px;
						}
						.video-info-text{
							display: flex;
							align-items: center;
							line-height: 1rem;
						}
					}
					.video-desc-controls-wrapper{
						margin: 10px 0px;
						display: flex;
						justify-content: space-around;
						align-items: center;
	
						.video-info-icon {
							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 2px;
						}
					}
				}
	
			`);
		}
		// 移除旧的
		DOMUtils.remove(
			BilibiliData.className.mVideo + "  .m-video-info .video-desc-wrapper"
		);
		VueUtils.waitVuePropToSet(
			BilibiliData.className.mVideo + "  .m-video-info .bottom-wrapper",
			{
				check(vueInstance) {
					return typeof vueInstance?.info?.bvid === "string";
				},
				set(vueInstance, target) {
					// 视频信息
					let info = vueInstance.info;
					// 视频作者信息
					let upInfo = vueInstance.upInfo;

					// 粉丝数
					let follower = upInfo.follower;
					// 投稿数
					let archive_count = upInfo.archive_count;

					// 观看人数
					let view = info.stat.view;
					// 弹幕数
					let danmakuCount = info.stat.danmaku;
					// 发布时间
					let ctime = info.ctime;
					// bv号
					let bvid = info.bvid;
					// 视频描述
					let desc = info.desc;
					// 点赞
					let like = info.stat.like;
					// 投币
					let coin = info.stat.coin;
					// 收藏
					let favorite = info.stat.favorite;
					// 分享
					let share = info.stat.share;

					let $descWrapper = DOMUtils.createElement("div", {
						className: "video-desc-wrapper",
						innerHTML: /*html*/ `
							<div class="video-view-info-wrapper">
								<div class="video-info-icon">
									<svg
										class="stats-item__icon"
										style="width: 16px; height: 16px"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 16 16"
										width="16"
										height="16">
										<path
											d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z"
											fill="currentColor"></path>
										<path
											d="M9.8092 7.3125C10.338433333333333 7.618066666666666 10.338433333333333 8.382 9.809166666666666 8.687533333333333L7.690799999999999 9.910599999999999C7.161566666666666 10.216133333333332 6.5 9.8342 6.500006666666666 9.223066666666666L6.500006666666666 6.776999999999999C6.500006666666666 6.165873333333334 7.161566666666666 5.783913333333333 7.690799999999999 6.089479999999999L9.8092 7.3125z"
											fill="currentColor"></path>
									</svg>
									<span class="video-info-text" data-value="${view}">${BilibiliUtils.parseCount(
							view
						)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										class="stats-item__icon"
										style="width: 16px; height: 16px"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 16 16"
										width="16"
										height="16">
										<path
											d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z"
											fill="currentColor"></path>
										<path
											d="M10.583333333333332 7.166666666666666L6.583333333333333 7.166666666666666C6.307193333333332 7.166666666666666 6.083333333333333 6.942799999999999 6.083333333333333 6.666666666666666C6.083333333333333 6.390526666666666 6.307193333333332 6.166666666666666 6.583333333333333 6.166666666666666L10.583333333333332 6.166666666666666C10.859466666666666 6.166666666666666 11.083333333333332 6.390526666666666 11.083333333333332 6.666666666666666C11.083333333333332 6.942799999999999 10.859466666666666 7.166666666666666 10.583333333333332 7.166666666666666z"
											fill="currentColor"></path>
										<path
											d="M11.583333333333332 9.833333333333332L7.583333333333333 9.833333333333332C7.3072 9.833333333333332 7.083333333333333 9.609466666666666 7.083333333333333 9.333333333333332C7.083333333333333 9.0572 7.3072 8.833333333333332 7.583333333333333 8.833333333333332L11.583333333333332 8.833333333333332C11.859466666666666 8.833333333333332 12.083333333333332 9.0572 12.083333333333332 9.333333333333332C12.083333333333332 9.609466666666666 11.859466666666666 9.833333333333332 11.583333333333332 9.833333333333332z"
											fill="currentColor"></path>
										<path
											d="M5.25 6.666666666666666C5.25 6.942799999999999 5.02614 7.166666666666666 4.75 7.166666666666666L4.416666666666666 7.166666666666666C4.140526666666666 7.166666666666666 3.9166666666666665 6.942799999999999 3.9166666666666665 6.666666666666666C3.9166666666666665 6.390526666666666 4.140526666666666 6.166666666666666 4.416666666666666 6.166666666666666L4.75 6.166666666666666C5.02614 6.166666666666666 5.25 6.390526666666666 5.25 6.666666666666666z"
											fill="currentColor"></path>
										<path
											d="M6.25 9.333333333333332C6.25 9.609466666666666 6.02614 9.833333333333332 5.75 9.833333333333332L5.416666666666666 9.833333333333332C5.140526666666666 9.833333333333332 4.916666666666666 9.609466666666666 4.916666666666666 9.333333333333332C4.916666666666666 9.0572 5.140526666666666 8.833333333333332 5.416666666666666 8.833333333333332L5.75 8.833333333333332C6.02614 8.833333333333332 6.25 9.0572 6.25 9.333333333333332z"
											fill="currentColor"></path>
									</svg>
									<span class="video-info-text" data-value="${danmakuCount}">${BilibiliUtils.parseCount(
							danmakuCount
						)}</span>
								</div>
								<span class="video-info-text">${utils.formatTime(
									info.ctime * 1000,
									"yyyy年MM月dd日 HH:mm:ss"
								)}</span>
							</div>
							<div class="video-bvid">${bvid}</div>
							<div class="video-desc-text">${desc}</div>
							<div class="video-desc-controls-wrapper">
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 36 36"
										xmlns="http://www.w3.org/2000/svg"
										class="video-like-icon video-toolbar-item-icon">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${like}">${BilibiliUtils.parseCount(like)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 28 28"
										xmlns="http://www.w3.org/2000/svg"
										class="video-coin-icon video-toolbar-item-icon">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${coin}">${BilibiliUtils.parseCount(coin)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 28 28"
										xmlns="http://www.w3.org/2000/svg"
										class="video-fav-icon video-toolbar-item-icon">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${favorite}">${BilibiliUtils.parseCount(favorite)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 28 28"
										xmlns="http://www.w3.org/2000/svg"
										class="video-share-icon video-toolbar-item-icon">
										<path
											d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${share}">${BilibiliUtils.parseCount(share)}</span>
								</div>
							</div>
						`,
					});
					target.appendChild($descWrapper);
				},
			}
		);
	},
};
