import { PopsPanel } from "@/setting/setting";
import { BaiduHaoKanHook } from "./HaoKanHook";
import { DOMUtils, addStyle, log, utils } from "@/env";
import HaoKanShieldCSS from "./shield.css?raw";
import { CommonUtils } from "@/utils/CommonUtils";

const BaiduHaoKan = {
	init() {
		addStyle(HaoKanShieldCSS);
		log.info("插入CSS规则");
		BaiduHaoKanHook.init();
		PopsPanel.execMenu("baidu_haokan_shield_may_also_like", () => {
			this.shieldMayAlsoLike();
		});
		PopsPanel.execMenu("baidu_haokan_shield_today_s_hot_list", () => {
			this.shieldTodayHotList();
		});
		PopsPanel.execMenu("baidu_haokan_shield_right_video_action", () => {
			this.shieldRightVideoAction();
		});
		DOMUtils.ready(() => {
			this.setPlayEvent();
		});
	},
	/**
	 * 覆盖播放按钮的点击事件
	 */
	setPlayEvent() {
		let playBtn = document.querySelector(".play-btn");
		log.success("覆盖播放按钮的点击事件");
		DOMUtils.on(playBtn, "click", function () {
			let currentPageSee = document.querySelector(
				".video-player .video-player-pause-btns .continue"
			) as HTMLDivElement;
			setTimeout(() => {
				utils.getReactObj(currentPageSee)["reactEventHandlers"]?.["onClick"]();
				PopsPanel.execMenu(
					"baidu_haokan_play_video_and_automatically_enter_full_screen",
					() => {
						if (utils.isFullscreenEnabled()) {
							let videoElement = document.querySelector(
								"#video video.hplayer-video"
							) as HTMLVideoElement;
							utils.enterFullScreen(videoElement);
						}
					}
				);
			}, 0);
		});
	},
	/**
	 * 屏蔽可能感兴趣
	 */
	shieldMayAlsoLike() {
		log.info("屏蔽可能感兴趣");
		CommonUtils.addBlockCSS("div.top-video-list-container");
	},
	/**
	 * 屏蔽今日热门
	 */
	shieldTodayHotList() {
		log.info("屏蔽今日热门");
		CommonUtils.addBlockCSS(".hot-rank-video");
	},
	/**
	 * 屏蔽右侧视频操作
	 */
	shieldRightVideoAction() {
		log.info("屏蔽右侧视频操作");
		CommonUtils.addBlockCSS(".video-author-info-mask .new-video-action");
	},
};

export { BaiduHaoKan };
