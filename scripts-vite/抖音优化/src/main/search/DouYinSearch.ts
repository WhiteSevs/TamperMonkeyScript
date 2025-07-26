import { DOMUtils, addStyle, log, utils } from "@/env";
import MobileCSS from "./css/mobile.css?raw";
import { DouYinSearchHideElement } from "./DouYinSearchHideElement";
import Qmsg from "qmsg";
import { Panel } from "@components/setting/panel";
import { DouYinRouter } from "@/router/DouYinRouter";

export const DouYinSearch = {
	init() {
		DouYinSearchHideElement.init();
		Panel.execMenuOnce("mobileMode", () => {
			return this.mobileMode();
		});
		Panel.execMenuOnce("dy-search-disableClickToEnterFullScreen", () => {
			this.disableClickToEnterFullScreen();
		});
		Panel.execMenuOnce("live-setSearchResultFilterWithVideoStyle", (option) => {
			return this.setSearchResultFilterWithVideoStyle(option.value);
		});
	},
	/**
	 * 手机模式
	 * (由通用统一调用，勿放在本函数的init内)
	 */
	mobileMode() {
		log.info("搜索-手机模式");
		let result: HTMLStyleElement[] = [];
		result.push(addStyle(MobileCSS));
		result.push(
			addStyle(/*css*/ `
			@media screen and (max-width: 550px){
				div#search-body-container {
					display: flex;
				}
				div#search-body-container #component-Navigation {
					flex: 0;
				}
				div#search-body-container #douyin-right-container {
					flex: 1 auto;
				}
				div#search-body-container #douyin-right-container #search-content-area > div {
					width: 100% !important;
				}
				div#search-body-container #douyin-right-container #search-content-area > div > div > div {
					width: 100% !important;
					margin-left: 0px;
					margin-right: 0px;
					padding-left: 0px;
					padding-right: 0px;
				}
				/* 上面的搜索结果筛选 */
				#search-content-area > div >div> div:first-child > div:first-child > div:last-child{
					overflow: auto;
					text-wrap: nowrap;
					height: auto;
				}
				/* 视频右侧的TA的作品↓ */
				#searchSideCard{
					width: unset !important;
				}
				#searchSideCard > div{
					padding: 0px !important;
				}
				#searchSideCard > div:has(>div+svg),
				#searchSideCard ul[data-e2e="scroll-list"]{
					padding: 0px 10px !important;
				}
				#searchSideCard ul[data-e2e="scroll-list"] .video-playing-item > div{
					width: auto;
				}
				/* 视频右侧的TA的作品↑ */
				/* 悬浮的筛选 */
				#douyin-right-container #douyin-header{
        			background-color: var(--color-bg-b0);
				}
				xg-right-grid{
					margin: auto !important;
				}
			}
		`)
		);
		/* 评论区展开才会出现 */
		utils
			.waitNode<HTMLDivElement>("#relatedVideoCard")
			.then(($relatedVideoCard) => {
				log.info("评论区展开的className：" + $relatedVideoCard.className);
				result.push(
					addStyle(/*css*/ `
					html[data-vertical-screen]
						#sliderVideo[data-e2e="feed-active-video"]
						#videoSideBar:has(#relatedVideoCard[class="${$relatedVideoCard.className}"]) {
							width: 100vw !important;
					}`)
				);
			});

		return result;
	},
	/**
	 * 禁止点击视频区域进入全屏
	 */
	disableClickToEnterFullScreen() {
		log.info("搜索-禁止点击视频区域进入全屏");
		// 这个是对应 图文视频
		DOMUtils.on(
			document,
			"click",
			".focusPanel",
			(event, selectorTarget) => {
				if (!DouYinRouter.isSearch()) {
					return;
				}
				utils.preventEvent(event);
				let $click = selectorTarget;
				let $parent = $click.parentElement?.parentElement as HTMLElement;
				let $video = $parent.querySelector("video");
				if ($video) {
					if ($video.paused) {
						$video.play();
						log.info(".focusPanel：播放视频");
					} else {
						$video.pause();
						log.info(".focusPanel：暂停视频");
					}
				} else {
					Qmsg.error(".focusPanel未找到 video标签", {
						isHTML: false,
					});
				}
			},
			{
				capture: true,
			}
		);
		// 这个是对应 纯视频
		DOMUtils.on(
			document,
			"click",
			"#sliderVideo video",
			(event, selectorTarget) => {
				if (!DouYinRouter.isSearch()) {
					return;
				}
				utils.preventEvent(event);
				let $video = selectorTarget as HTMLVideoElement;
				if ($video.paused) {
					$video.play();
					log.info("#sliderVideo video：播放视频");
				} else {
					$video.pause();
					log.info("#sliderVideo video：暂停视频");
				}
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 设置搜索结果-按视频过滤的显示样式
	 * @param lineMode 单列/双列
	 */
	setSearchResultFilterWithVideoStyle(lineMode: "one" | "double" = "one") {
		log.info(`设置搜索结果-按视频过滤的显示样式：${lineMode}`);
		if (lineMode === "one") {
			return addStyle(/*css*/ `
			@media screen and (max-width: 800px){
				.search-horizontal-new-layout ul[data-e2e="scroll-list"] li{
					width: calc(100% - 21px);
				}
			}
			`);
		} else if (lineMode === "double") {
			return addStyle(/*css*/ `	
			@media screen and (max-width: 800px){
				.search-horizontal-new-layout ul[data-e2e="scroll-list"] li{
					width: calc(50% - 21px);
				}
			}
			`);
		}
	},
};
