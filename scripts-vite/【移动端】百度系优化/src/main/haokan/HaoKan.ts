import { PopsPanel } from "@/setting/setting";
import { BaiduHaoKanHook } from "./HaoKanHook";
import { $, DOMUtils, addStyle, log, utils } from "@/env";
import HaoKanShieldCSS from "./shield.css?raw";
import { CommonUtil } from "@/utils/CommonUtil";

const BaiduHaoKan = {
	init() {
		addStyle(HaoKanShieldCSS);
		log.info("插入CSS规则");
		BaiduHaoKanHook.init();
		PopsPanel.execMenuOnce("baidu_haokan_shield_may_also_like", () => {
			return this.shieldMayAlsoLike();
		});
		PopsPanel.execMenuOnce("baidu_haokan_shield_today_s_hot_list", () => {
			return this.shieldTodayHotList();
		});
		PopsPanel.execMenuOnce("baidu_haokan_shield_right_video_action", () => {
			return this.shieldRightVideoAction();
		});
		DOMUtils.ready(() => {
			this.setPlayEvent();
		});
	},
	/**
	 * 覆盖播放按钮的点击事件
	 */
	setPlayEvent() {
		let playBtn = $<HTMLDivElement>(".play-btn")!;
		let playerShade = $<HTMLDivElement>(".video-player-shade")!;
		log.success("覆盖播放按钮的点击事件");
		DOMUtils.on(
			playBtn,
			"click",
			function (event) {
				utils.preventEvent(event);
				DOMUtils.hide(playerShade);
				let currentPageSee = $<HTMLDivElement>(
					".video-player .video-player-pause-btns .continue"
				)!;
				setTimeout(() => {
					utils
						.getReactObj(currentPageSee)
						["reactEventHandlers"]?.["onClick"]();
					PopsPanel.execMenu(
						"baidu_haokan_play_video_and_automatically_enter_full_screen",
						() => {
							if (utils.isFullscreenEnabled()) {
								let videoElement = $(
									"#video video.hplayer-video"
								) as HTMLVideoElement;
								utils.enterFullScreen(videoElement);
							}
						}
					);
				}, 0);
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 屏蔽可能感兴趣
	 */
	shieldMayAlsoLike() {
		log.info("屏蔽可能感兴趣");
		return CommonUtil.addBlockCSS("div.top-video-list-container");
	},
	/**
	 * 屏蔽今日热门
	 */
	shieldTodayHotList() {
		log.info("屏蔽今日热门");
		return CommonUtil.addBlockCSS(".hot-rank-video");
	},
	/**
	 * 屏蔽右侧视频操作
	 */
	shieldRightVideoAction() {
		log.info("屏蔽右侧视频操作");
		return CommonUtil.addBlockCSS(".video-author-info-mask .new-video-action");
	},
};

export { BaiduHaoKan };
