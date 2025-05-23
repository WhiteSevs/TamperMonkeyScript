import { unsafeWindow } from "ViteGM";
import { $, $$, DOMUtils, addStyle, log, pops, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { DouYinRouter } from "@/router/DouYinRouter";
import MobileCSS from "./css/mobile.css?raw";
import Qmsg from "qmsg";
import { DouYin } from "../DouYin";
import { DouYinVideoPlayerBlockElement } from "./DouYinVideoPlayerBlockElement";
import { DouYinVideoPlayerShortCut } from "./DouYinVideoPlayerShortCut";
import { GestureBack } from "@/utils/GestureBack";
import { DouYinGestureBackHashConfig } from "../DouYinGestureBackConfig";
import { DouYinVideoPlayerBlockMouseHoverTip } from "./DouYinVideoPlayerBlockMouseHoverTip";
import { CommonUtil } from "@/utils/CommonUtil";

/**
 * 视频播放器的播放速度
 */
export type VideoPlayerRate =
	| "0.75"
	| "1"
	| "1.25"
	| "1.5"
	| "1.75"
	| "2"
	| "3";

export const DouYinVideoPlayer = {
	init() {
		DouYinVideoPlayerBlockElement.init();
		PopsPanel.onceExec("dy-short-cut", () => {
			DouYinVideoPlayerShortCut.init();
		});
		DouYinVideoPlayerBlockMouseHoverTip.init();
		PopsPanel.execMenuOnce("changeCommentToBottom", () => {
			DouYinVideoPlayer.changeCommentToBottom();
		});
		PopsPanel.execMenuOnce("fullScreen", () => {
			return this.fullScreen();
		});
		PopsPanel.execMenuOnce("parseVideo", () => {
			DouYinVideoPlayer.parseVideo();
		});
		PopsPanel.execInheritMenuOnce(
			"autoEnterElementFullScreen",
			"search-autoEnterElementFullScreen",
			() => {
				this.autoEnterElementFullScreen();
			},
			(mainValue, childValue) => {
				if (DouYinRouter.isSearch()) {
					if (mainValue) {
						if (childValue == 1) {
							// 开
							return true;
						} else if (childValue == 0) {
							// 关
							return false;
						} else {
							// 默认
						}
					}
				}
			}
		);
		PopsPanel.execMenuOnce("dy-video-doubleClickEnterElementFullScreen", () => {
			this.doubleClickEnterElementFullScreen();
		});
		PopsPanel.execMenu("dy-video-bgColor-enable", () => {
			PopsPanel.execMenuOnce(
				"dy-video-changeBackgroundColor",
				(value: string) => {
					return this.changeBackgroundColor(value);
				}
			);
		});
		PopsPanel.execMenuOnce("repairProgressBar", () => {
			PopsPanel.onceExec("repairProgressBar", () => {
				this.repairVideoProgressBar();
			});
		});
		PopsPanel.execMenuOnce("dy-video-gestureBackCloseComment", () => {
			this.gestureBackCloseComment();
		});
		PopsPanel.execMenuOnce("dy-video-waitToRemovePauseDialog", () => {
			this.waitToRemovePauseDialog();
		});
		PopsPanel.execMenuOnce("dy-video-removeStyle-bottom", () => {
			return this.removeStyleBottom();
		});
		DOMUtils.ready(() => {
			DouYinVideoPlayer.chooseQuality(
				PopsPanel.getValue("chooseVideoDefinition")
			);
			PopsPanel.execMenuOnce("mobileMode", () => {
				return this.mobileMode();
			});
			PopsPanel.execMenuOnce("dy-video-titleInfoAutoHide", () => {
				this.titleInfoAutoHide();
			});
			PopsPanel.execMenuOnce("dy-video-videoControlsAutoHide", () => {
				this.videoControlsAutoHide();
			});
			PopsPanel.execMenuOnce("dy-video-rightToolBarAutoHide", () => {
				this.rightToolBarAutoHide();
			});
		});
	},
	/**
	 * 全屏（沉浸模式）
	 */
	fullScreen() {
		log.info("全屏");
		let result = [];
		result.push(
			CommonUtil.addBlockCSS(
				/* 右侧工具栏 */
				".slider-video .positionBox",
				/* 中间底部的视频信息（描述、作者、话题等） */
				"#video-info-wrap",
				/* 中间底部的视频控制工具栏 */
				"xg-controls.xgplayer-controls"
			)
		);
		result.push(DouYinVideoPlayerBlockElement.shieldSearchFloatingBar());
		result.push(
			addStyle(/*css*/ `
			/* 视频全屏 */
			xg-video-container.xg-video-container{
				bottom: 0px !important;
			}
        `)
		);
		return result;
	},
	/**
	 * 自动进入网页全屏
	 * @param [userKeyBoard=false] 是否使用键盘触发
	 */
	autoEnterElementFullScreen(userKeyBoard = false) {
		if (userKeyBoard) {
			// 使用键盘事件触发全屏
			// 优点：只要抖音不修改触发全屏的快捷键，则此方案可以一直使用
			let keydownEvent = new KeyboardEvent("keydown", {
				bubbles: true,
				cancelable: true,
				key: "Y",
				code: "KeyY",
				keyCode: 89,
				which: 89,
			});
			document.dispatchEvent(keydownEvent);
		} else {
			// 点击全屏按钮来触发全屏
			utils
				.waitNode<HTMLElement>(
					'xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon'
				)
				.then(($el) => {
					log.success("自动进入网页全屏");
					$el.click();
				});
		}
	},
	/**
	 * 双击进入网页全屏
	 */
	doubleClickEnterElementFullScreen() {
		let isDouble = false;
		log.info("注册双击进入网页全屏事件");
		let selectorList = [".newVideoPlayer", "#sliderVideo"];
		selectorList.forEach((selector) => {
			DOMUtils.on<MouseEvent | PointerEvent>(
				document,
				"click",
				selector,
				(event) => {
					if (isDouble) {
						isDouble = false;
						DouYinVideoPlayer.autoEnterElementFullScreen(true);
					} else {
						isDouble = true;
						setTimeout(() => {
							isDouble = false;
						}, 250);
					}
				}
			);
		});
	},
	/**
	 * 评论区修改为底部
	 */
	changeCommentToBottom() {
		log.info("评论区修改为底部");
		let ATTRIBUTE_KEY = "data-vertical-screen";
		function autoChangeCommentPosition() {
			if (DouYinUtils.isVerticalScreen()) {
				/* 竖屏 */
				log.success("自动判断: 竖屏");
				document.documentElement.setAttribute(ATTRIBUTE_KEY, "true");
			} else {
				/* 横屏 */
				log.success("自动判断: 横屏");
				document.documentElement.removeAttribute(ATTRIBUTE_KEY);
			}
		}
		autoChangeCommentPosition();
		/* 2024.5.27 dy更名videoSideBar=>videoSideCard */
		addStyle(/*css*/ `
		html[${ATTRIBUTE_KEY}] #sliderVideo[data-e2e="feed-video"] #videoSideBar #relatedVideoCard,
		html[${ATTRIBUTE_KEY}] #sliderVideo[data-e2e="feed-video"] #videoSideCard #relatedVideoCard{
			display: none !important;
		}
		/* 左侧的视频宽度撑满 */
		html[${ATTRIBUTE_KEY}] #sliderVideo[data-e2e] .playerContainer,
		html[${ATTRIBUTE_KEY}] #slideMode[data-e2e] .playerContainer{
			width: 100% !important;
		}
		/* 右侧的评论区宽度撑满，position使用absolute */
		html[${ATTRIBUTE_KEY}] #sliderVideo[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY}] #slideMode[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY}] #sliderVideo[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY}] #slideMode[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard){
			width: 100%;
			height: 75%;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.9);
			transition: height .15s linear !important;
			position: absolute;
		}
		`);
		PopsPanel.execMenuOnce(
			"douyin-video-autoCheckChangeCommentToBottom",
			() => {
				DOMUtils.on(window, "resize", autoChangeCommentPosition);
			}
		);
	},
	/**
	 * 选择视频清晰度
	 * @param [mode=0] 视频播放模式
	 */
	chooseQuality(mode = 0) {
		log.info("选择视频清晰度: " + mode);
		let QualitySessionKey = "MANUAL_SWITCH";
		let clarityReal = [
			"adapt_lowest_4_1",
			"adapt_lowest_1440_1",
			"normal_1080_0",
			"normal_540_0",
			"low_720_0",
			"normal_720_0",
			"low_540_0",
			"lower_540_0",
			"adapt_low_540_0",
			"adapt_lowest_1080_1",
			"adapt_lowest_720_1",
			"adapt_540_1",
			"adapt_lower_540_1",
		];

		let definition = [
			{
				clarityReal: clarityReal,
				done: 1,
				gearClarity: "20",
				gearName: "超清 4K",
				gearType: -2,
				qualityType: 72,
			},
			{
				clarityReal: clarityReal,
				done: 1,
				gearClarity: "10",
				gearName: "超清 2K",
				gearType: -1,
				qualityType: 7,
			},
			{
				clarityReal: clarityReal,
				done: 1,
				gearClarity: "5",
				gearName: "高清 1080P",
				gearType: 1,
				qualityType: 2,
			},
			{
				clarityReal: clarityReal,
				done: 1,
				gearClarity: "4",
				gearName: "高清 720P",
				gearType: 2,
				qualityType: 15,
			},
			{
				clarityReal: clarityReal,
				done: 1,
				gearClarity: "3",
				gearName: "标清 540P",
				gearType: 3,
				qualityType: 21,
			},
			{
				clarityReal: clarityReal,
				done: 1,
				gearClarity: "2",
				gearName: "极速",
				gearType: 4,
				qualityType: 21,
			},
			{
				clarityReal: clarityReal,
				done: 1,
				gearClarity: "0",
				gearName: "智能",
				gearType: 0,
			},
		];
		let choose = definition.find((item) => item.gearType === mode);
		/**
		 * 抖音清晰度读取是来自session的
		 * @param value
		 */
		function setVideoQuality(value: string) {
			unsafeWindow.sessionStorage.setItem(QualitySessionKey, value);
		}
		if (choose) {
			let chooseStr = JSON.stringify(choose);
			let intervalId = setInterval(() => {
				setVideoQuality(chooseStr);
			}, 250);
			setTimeout(() => {
				clearInterval(intervalId);
			}, 10 * 1000);
			log.success("设置当前视频的清晰度: " + mode);
		} else {
			log.error("该清晰度不存在: " + mode);
		}
	},
	/**
	 * 选择视频倍速
	 * @param [rate="1"] 倍速
	 */
	chooseVideoRate(rate: VideoPlayerRate = "1") {
		let Definition_Key = "player_playbackratio";
		/**
		 * 设置播放倍速
		 *
		 * 先设置session的值，再调用更新函数
		 * @param value
		 */
		function setRate(value: VideoPlayerRate = "1") {
			unsafeWindow.sessionStorage.setItem(Definition_Key, value);
			$$<HTMLLIElement>("xg-icon.xgplayer-playback-setting").forEach(
				($playbackSetting) => {
					let $container = utils.getReactObj($playbackSetting).reactContainer;
					$container?.memoizedState?.element?.props?.xgCase?.updatePlayBackRatio();
				}
			);
		}
		setRate(rate);
	},
	/**
	 * 让下载按钮变成解析视频
	 */
	parseVideo() {
		log.info("让下载按钮变成解析视频");
		/**
		 * 显示弹窗
		 * @param srcList 资源列表
		 */
		function showParseInfoDialog(srcList: string[]) {
			let contentHTML = "";
			srcList.forEach((url) => {
				contentHTML += /*html*/ `
          		<div class="douyin-video-link-item"><a href="${url}" target="_blank">${url}</a></div>
            	`;
			});
			contentHTML = /*html*/ `<div class="douyin-video-link-container">${contentHTML}</div>`;
			pops.alert({
				title: {
					text: "视频解析",
					position: "center",
				},
				content: {
					text: contentHTML,
					html: true,
				},
				mask: {
					enable: true,
					clickEvent: {
						toClose: true,
					},
				},
				width: window.innerWidth > 550 ? "550px" : "88vw",
				height: window.innerHeight > 550 ? "550px" : "80vh",
				drag: true,
				dragLimit: true,
				style: /*css*/ `
                .douyin-video-link-container{

                }
                .douyin-video-link-item{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 10px;
                }
                .douyin-video-link-item a{

                }
                `,
			});
		}
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			'div[data-e2e="video-share-container"] div[data-inuser="false"] button + div',
			function (event) {
				let clickElement = event.target as HTMLDivElement;
				let rectFiber = utils.getReactObj(
					clickElement.parentElement as HTMLElement
				)?.reactFiber;
				if (!rectFiber) {
					log.error("获取rectFiber属性失败");
					Qmsg.error("获取rectFiber属性失败");
					return;
				}
				try {
					let awemeInfo = rectFiber.return.memoizedProps.awemeInfo;
					if (!awemeInfo) {
						log.error("获取awemeInfo属性失败");
						Qmsg.error("获取awemeInfo属性失败");
						return;
					}
					log.info([`解析的awemeInfo: `, awemeInfo]);
					// 收集到的全部的下载地址
					let videoDownloadUrlList: string[] = [];

					// video.playAddr
					let playAddr = awemeInfo.video.playAddr as { src: string }[] | null;
					if (playAddr != null && Array.isArray(playAddr)) {
						videoDownloadUrlList = videoDownloadUrlList.concat(
							playAddr.map((item) => item.src)
						);
					}
					// video.playAddrH265
					let playAddrH265 = awemeInfo.video.playAddrH265 as
						| { src: string }[]
						| null;
					if (playAddrH265 != null && Array.isArray(playAddrH265)) {
						videoDownloadUrlList = videoDownloadUrlList.concat(
							playAddrH265.map((item) => item.src)
						);
					}
					// video.playApi
					let playApi = awemeInfo.video.playApi as string | null;
					if (typeof playApi === "string") {
						videoDownloadUrlList.push(playApi);
					}
					// video.playApiH265
					let playApiH265 = awemeInfo.video.playApiH265 as string | null;
					if (typeof playApiH265 === "string") {
						videoDownloadUrlList.push(playApiH265);
					}
					// download.urlList
					let download = awemeInfo?.download?.urlList as string[] | null;
					if (download != null && Array.isArray(download)) {
						videoDownloadUrlList = videoDownloadUrlList.concat(download);
					}
					if (!videoDownloadUrlList.length) {
						log.error("未获取到视频的有效链接信息");
						Qmsg.error("未获取到视频的有效链接信息");
						return;
					}
					// 去重
					let uniqueVideoDownloadUrlList = [...new Set(videoDownloadUrlList)];
					if (
						uniqueVideoDownloadUrlList.length != videoDownloadUrlList.length
					) {
						log.info("去重前视频链接数量: " + videoDownloadUrlList.length);
						log.info(
							"去重后视频链接数量: " + uniqueVideoDownloadUrlList.length
						);
					}
					// 处理一下http的protocol，如果是http的话，点击会跳转到播放而不是下载
					uniqueVideoDownloadUrlList = uniqueVideoDownloadUrlList.map(
						(item) => {
							if (item.startsWith("http:")) {
								item = item.replace("http:", "");
							}
							return item;
						}
					);
					showParseInfoDialog(uniqueVideoDownloadUrlList);
				} catch (error) {
					log.error(["解析视频失败", error]);
					Qmsg.error("解析视频失败");
				}
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 手机模式
	 */
	mobileMode() {
		log.info("启用手机模式");
		let result: HTMLStyleElement[] = [];
		DouYin.initialScale();
		/* 屏蔽底部视频工具栏右侧的?帮助反馈按钮 */
		result.push(
			CommonUtil.addBlockCSS("img#douyin-temp-sidebar")!,
			addStyle(MobileCSS)
		);
		PopsPanel.onceExec("repairProgressBar", () => {
			this.repairVideoProgressBar();
		});
		return result;
	},
	/**
	 * 修复进度条按钮
	 */
	repairVideoProgressBar() {
		log.info("修复进度条按钮");
		addStyle(/*css*/ `
		/* 禁止触发touch事件，因为会影响到按钮点击不到 */
		xg-outer,
		xg-inners {
			pointer-events: none;
		}
		`);
		DOMUtils.ready(() => {
			// 让拖拽进度条的按钮拖拽时修改进度条高度
			DOMUtils.on(
				document.body,
				"touchstart",
				"xg-progress",
				(event, selectorTarget) => {
					let $click = selectorTarget;
					let $xg_outer = $click.querySelector<HTMLElement>("xg-outer");
					if ($xg_outer) {
						$xg_outer.style.height = "6px";
					}
				},
				{
					capture: true,
				}
			);
			// 让拖拽进度条的按钮拖拽时修改进度条高度
			DOMUtils.on(
				document.body,
				"touchend",
				"xg-progress",
				(event, selectorTarget) => {
					let $click = selectorTarget;
					let $xg_outer = $click.querySelector<HTMLElement>("xg-outer");
					if ($xg_outer) {
						$xg_outer.style.height = "";
					}
				},
				{
					capture: true,
				}
			);
		});
	},
	/**
	 * 修改视频背景颜色
	 * @param color 颜色
	 */
	changeBackgroundColor(color: string) {
		log.info("修改视频背景颜色");
		return addStyle(/*css*/ `
		#sliderVideo > div,
		/* 推荐的直播间背景 */
		xgmask,
		/* 用户主页的视频 */
		.basePlayerContainer .imgBackground{
			background: ${color}  !important;
		}
		`);
	},
	/**
	 * 自动隐藏视频标题
	 */
	titleInfoAutoHide() {
		log.info(`自动隐藏视频标题`);

		let lockFn = new utils.LockFunction(() => {
			/** 视频信息列表 */
			let videoInfoList: (HTMLElement | null)[] = [];

			videoInfoList.push(
				// 一般的推荐视频|单个视频的当前观看的视频
				$<HTMLElement>(
					'#sliderVideo[data-e2e="feed-active-video"] #video-info-wrap:not([data-is-inject-mouse-hide])'
				),
				// 进入作者主页后的当前观看的视频
				$<HTMLElement>(
					'#slideMode[data-e2e="feed-active-video"] #video-info-wrap:not([data-is-inject-mouse-hide])'
				),
				// 单个视频
				$<HTMLElement>(
					'div[data-e2e="video-detail"] #video-info-wrap:not([data-is-inject-mouse-hide])'
				)
			);
			if (!videoInfoList.length) {
				return;
			}
			videoInfoList.forEach(($el) => {
				if (!$el) {
					return;
				}
				$el.setAttribute("data-is-inject-mouse-hide", "");
				let timeId = setTimeout(() => {
					DOMUtils.trigger($el, "mouseleave");
				}, PopsPanel.getValue("dy-video-titleInfoAutoHide-delayTime"));
				DOMUtils.on($el, ["mouseenter", "touchstart"], (event) => {
					clearTimeout(timeId);
					DOMUtils.css($el, "opacity", "");
				});
				DOMUtils.on($el, ["mouseleave", "touchend"], (event) => {
					DOMUtils.css($el, "opacity", 0);
				});
			});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				lockFn.run();
			},
		});
	},
	/**
	 * 自动隐藏视频控件
	 */
	videoControlsAutoHide() {
		log.info(`自动隐藏视频控件`);
		let lockFn = new utils.LockFunction(() => {
			/** 视频信息列表 */
			let videoInfoList: (HTMLElement | null)[] = [];
			videoInfoList.push(
				// 一般的推荐视频|单个视频的当前观看的视频
				$<HTMLElement>(
					`#sliderVideo[data-e2e="feed-active-video"] xg-controls.xgplayer-controls:not([data-is-inject-mouse-hide])`
				),
				// 进入作者主页后的当前观看的视频
				$<HTMLElement>(
					'#slideMode[data-e2e="feed-active-video"] xg-controls.xgplayer-controls:not([data-is-inject-mouse-hide])'
				),
				// 单个视频
				$<HTMLElement>(
					'div[data-e2e="video-detail"] xg-controls.xgplayer-controls:not([data-is-inject-mouse-hide])'
				)
			);
			if (!videoInfoList.length) {
				return;
			}
			videoInfoList.forEach(($el) => {
				if (!$el) {
					return;
				}
				$el.setAttribute("data-is-inject-mouse-hide", "");
				let timeId = setTimeout(() => {
					DOMUtils.trigger($el, "mouseleave");
				}, PopsPanel.getValue("dy-video-videoControlsAutoHide-delayTime"));
				DOMUtils.on($el, ["mouseenter", "touchstart"], (event) => {
					clearTimeout(timeId);
					DOMUtils.css($el, "opacity", "");
				});
				DOMUtils.on($el, ["mouseleave", "touchend"], (event) => {
					DOMUtils.css($el, "opacity", 0);
				});
			});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				lockFn.run();
			},
		});
	},
	/**
	 * 自动隐藏右侧工具栏
	 */
	rightToolBarAutoHide() {
		log.info(`自动隐藏右侧工具栏`);
		addStyle(/*css*/ `
			.positionBox{
				transition: opacity 0.5s;
			}
		`);
		let lockFn = new utils.LockFunction(() => {
			/** 视频信息列表 */
			let videoInfoList: (HTMLElement | null)[] = [];

			videoInfoList.push(
				// 一般的推荐视频|单个视频的当前观看的视频
				$<HTMLElement>(
					'#sliderVideo[data-e2e="feed-active-video"] .positionBox:not([data-is-inject-mouse-hide])'
				),
				// 进入作者主页后的当前观看的视频
				$<HTMLElement>(
					'#slideMode[data-e2e="feed-active-video"] .positionBox:not([data-is-inject-mouse-hide])'
				),
				// 单个视频
				$<HTMLElement>(
					'div[data-e2e="video-detail"] .positionBox:not([data-is-inject-mouse-hide])'
				)
			);
			if (!videoInfoList.length) {
				return;
			}
			videoInfoList.forEach(($el) => {
				if (!$el) {
					return;
				}
				$el.setAttribute("data-is-inject-mouse-hide", "");
				let timeId = setTimeout(() => {
					DOMUtils.trigger($el, "mouseleave");
				}, PopsPanel.getValue("dy-video-titleInfoAutoHide-delayTime"));
				DOMUtils.on($el, ["mouseenter", "touchstart"], (event) => {
					clearTimeout(timeId);
					DOMUtils.css($el, "opacity", "");
				});
				DOMUtils.on($el, ["mouseleave", "touchend"], (event) => {
					DOMUtils.css($el, "opacity", 0);
				});
			});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				lockFn.run();
			},
		});
	},
	/**
	 * 手势返回关闭评论区
	 */
	gestureBackCloseComment() {
		log.info(`手势返回关闭评论区`);
		let gestureback = new GestureBack({
			hash: DouYinGestureBackHashConfig.videoCommentDrawer,
			useUrl: true,
			beforeHistoryBackCallBack(isUrlChange) {
				if (isUrlChange) {
					closeComment();
				}
			},
		});

		const $closeSelector = `#relatedVideoCard .semi-tabs + div svg:has(path[d="M22.133 23.776a1.342 1.342 0 1 0 1.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 0 0-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 1 0-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 0 0 1.898 1.898l4.113-4.113 4.112 4.113z"])`;
		/**
		 * 关闭评论区
		 */
		function closeComment() {
			let $close = $<HTMLElement>($closeSelector);
			if ($close) {
				let rect = utils.getReactObj($close);
				if (rect) {
					let fn = rect.reactProps?.onClick;
					if (typeof fn === "function") {
						fn();
					} else {
						Qmsg.error("调用关闭评论区按钮的onClick函数失败");
					}
				} else {
					Qmsg.error("获取关闭评论区按钮react信息失败");
				}
			} else {
				Qmsg.error("未找到关闭评论区的按钮");
			}
		}

		DOMUtils.on(
			document,
			"click",
			`.xgplayer div[data-e2e="feed-comment-icon"]`,
			(event) => {
				log.info(`手势 => 打开评论区`);
				utils.waitNode($closeSelector, 10000).then(($el) => {
					if (!$el) {
						return;
					}
					log.info(`手势 => 评论区出现`);
					gestureback.enterGestureBackMode();
				});
			},
			{
				capture: true,
			}
		);
		DOMUtils.on(
			document,
			"click",
			$closeSelector,
			(event) => {
				log.info(`手势 => 关闭评论区`);
				gestureback.quitGestureBackMode();
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 信息区域
	 *
	 * 长时间无操作，已暂停播放
	 */
	waitToRemovePauseDialog() {
		log.info("监听信息区域【长时间无操作，已暂停播放】弹窗");
		/**
		 * 检测并关闭弹窗
		 * @param $ele
		 */
		let checkDialogToClose = ($ele: HTMLElement) => {
			let eleText = DOMUtils.text($ele);
			if (eleText.includes("长时间无操作") && eleText.includes("暂停播放")) {
				Qmsg.info(`出现【长时间无操作，已暂停播放】弹窗`, {
					consoleLogContent: true,
				});
				let $rect = utils.getReactObj($ele);
				if (typeof $rect.reactProps === "object") {
					let closeDialogFn = utils.queryProperty($rect.reactProps, (obj) => {
						if (typeof obj?.["props"]?.["onClose"] === "function") {
							return {
								isFind: true,
								data: obj["props"]["onClose"],
							};
						} else {
							// 未找到，进入下一层
							let children = obj?.["props"]?.["children"] ?? obj?.["children"];
							return {
								isFind: false,
								data: Array.isArray(children) ? children[0] : children,
							};
						}
					});
					if (typeof closeDialogFn === "function") {
						Qmsg.success(`调用函数关闭弹窗`, { consoleLogContent: true });
						closeDialogFn();
					}
				}
			}
		};
		DOMUtils.ready(() => {
			utils.mutationObserver(document.body, {
				config: {
					subtree: true,
					childList: true,
				},
				callback() {
					$$<HTMLDivElement>(
						`.basePlayerContainer xg-bar.xg-right-bar + div`
					).forEach(($elementTiming) => {
						checkDialogToClose($elementTiming);
					});
				},
			});
		});
	},
	/**
	 * 移除video的bottom偏移
	 */
	removeStyleBottom() {
		log.info(`移除video的bottom偏移`);
		return addStyle(/*css*/ `
			#sliderVideo[data-e2e="feed-active-video"] div:has( > div > #video-info-wrap),
			div:has( > div > pace-island > #video-info-wrap ),
			xg-video-container.xg-video-container{
				bottom: 0 !important;
			}
		`);
	},
};
