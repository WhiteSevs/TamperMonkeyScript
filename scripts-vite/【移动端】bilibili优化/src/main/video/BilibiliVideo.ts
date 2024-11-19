import { DOMUtils, Qmsg, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { BilibiliUrl } from "@/utils/BilibiliUrl";
import { BilibiliData } from "@/data/BlibiliData";
import BilibiliVideoBeautifyCSS from "./BilibiliVideoBeautify.css?raw";
import { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { VueUtils } from "@/utils/VueUtils";
import { BilibiliVideoPlayer } from "./BilibiliVideoPlayer";

const BilibiliVideo = {
	$data: {
		/** 是否已添加美化CSS */
		isAddBeautifyCSS: false,
	},
	init() {
		BilibiliVideoPlayer.init();
		/* 执行hook */
		PopsPanel.execMenuOnce("bili-video-repairVideoBottomAreaHeight", () => {
			return this.repairVideoBottomAreaHeight();
		});
		PopsPanel.execMenu("bili-video-beautify", () => {
			this.beautify();
		});
		PopsPanel.execMenuOnce("bili-video-cover-bottomRecommendVideo", () => {
			this.coverBottomRecommendVideo();
		});
		PopsPanel.execMenuOnce("bili-video-gestureReturnToCloseCommentArea", () => {
			this.gestureReturnToCloseCommentArea();
		});
		PopsPanel.execMenuOnce("bili-video-cover-seasonNew", () => {
			this.coverSeasonNew();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("bili-video-optimizationScroll", () => {
				this.optimizationScroll();
			});
			PopsPanel.execMenu("bili-video-disableSwipeTab", () => {
				this.disableSwipeTab();
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
			addStyle(BilibiliVideoBeautifyCSS);
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
		${BilibiliData.className.video} {
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
			${BilibiliData.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`);
	},
	/**
	 * 覆盖视频标题区域的点击事件
	 */
	coverBottomRecommendVideo() {
		log.info("覆盖 相关视频 点击事件");
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			BilibiliData.className.video + " .list-view .card-box .launch-app-btn",
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
			BilibiliData.className.video +
				" .m-video-season-new .video-card .launch-app-btn",
			ClickCallBack,
			{
				capture: true,
			}
		);
		/* 查看更多 展开后的视频列表 */
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			BilibiliData.className.video +
				" .m-video-season-panel .season-video-item .launch-app-btn",
			ClickCallBack,
			{
				capture: true,
			}
		);
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
};

export { BilibiliVideo };
