import { DOMUtils, addStyle, log, utils } from "@/env";
import MobileCSS from "./mobile.css?raw";
import { DouYinSearchHideElement } from "./DouYinSearchHideElement";
import Qmsg from "qmsg";
import { PopsPanel } from "@/setting/setting";

export const DouYinSearch = {
	init() {
		DouYinSearchHideElement.init();
		PopsPanel.execMenuOnce("dy-search-disableClickToEnterFullScreen", () => {
			this.disableClickToEnterFullScreen();
		});
	},
	/**
	 * 手机模式
	 * (由通用统一调用，勿放在本函数的init内)
	 */
	mobileMode() {
		log.info("搜索-手机模式");
		addStyle(MobileCSS);
		/* 评论区展开才会出现 */
		utils
			.waitNode<HTMLDivElement>("#relatedVideoCard")
			.then(($relatedVideoCard) => {
				log.info("评论区展开的className：" + $relatedVideoCard.className);
				addStyle(/*css*/ `
				html[data-vertical-screen]
					#sliderVideo[data-e2e="feed-active-video"]
					#videoSideBar:has(#relatedVideoCard[class="${$relatedVideoCard.className}"]) {
						width: 100vw !important;
				}`);
			});
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
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLElement;
				let $parent = $click.parentElement?.parentElement as HTMLElement;
				let $video = $parent.querySelector("video");
				if ($video) {
					if ($video.paused) {
						log.info(".focusPanel：播放视频");
						$video.play();
					} else {
						log.info(".focusPanel：视频暂停");
						$video.pause();
					}
				} else {
					log.error(".focusPanel未找到<video>标签");
					Qmsg.error(".focusPanel未找到<video>标签", {
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
			"xg-video-container",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLElement;
				let $video = $click.querySelector("video");
				if ($video) {
					if ($video.paused) {
						log.info("xg-video-container：播放视频");
						$video.play();
					} else {
						log.info("xg-video-container：视频暂停");
						$video.pause();
					}
				} else {
					log.error("xg-video-container未找到<video>标签");
					Qmsg.error("xg-video-container未找到<video>标签", {
						isHTML: false,
					});
				}
			},
			{
				capture: true,
			}
		);
	},
};
