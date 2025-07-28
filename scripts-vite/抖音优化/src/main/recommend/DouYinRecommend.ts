import { $, DOMUtils, log, utils } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import Qmsg from "qmsg";

export const DouYinRecommend = {
	init() {
		Panel.execMenuOnce("dy-recommend-automaticContinuousPlayback", () => {
			this.automaticContinuousPlayback();
		});
	},
	/**
	 * 自动连播
	 */
	automaticContinuousPlayback() {
		log.info(`自动连播`);
		const attrFlagName = "data-automaticContinuousPlayback";
		/**
		 * 获取当前播放的视频
		 */
		let queryActiveVideo = (withAttr: boolean = false) => {
			return $<HTMLVideoElement>(
				`.page-recommend-container [data-e2e="feed-active-video"] video${
					withAttr ? `:not([${attrFlagName}])` : ""
				}`
			);
		};
		let switchActiveVideo = () => {
			if (Panel.getValue("dy-keyboard-hook-pageUpAndDown")) {
				Qmsg.error("自动连播切换失败，请勿禁用↑↓翻页快捷键");
				return;
			}
			let keydownEvent = new KeyboardEvent("keydown", {
				bubbles: true,
				cancelable: true,
				key: "ArrowDown",
				code: "ArrowDown",
				keyCode: 40,
				which: 40,
			});
			document.body.dispatchEvent(keydownEvent);
		};
		let lockFn = new utils.LockFunction(() => {
			if (!DouYinRouter.isRecommend()) {
				// 必须在推荐页面
				return;
			}
			let $activeVideo = queryActiveVideo();
			if (!$activeVideo) {
				return;
			}
			if ($activeVideo.hasAttribute(attrFlagName)) {
				return;
			}
			$activeVideo.setAttribute(attrFlagName, "true");
			let intervalId: number;
			DOMUtils.on(
				$activeVideo,
				"ended",
				(evt) => {
					log.success(`视频播放完毕，切换至下一个视频`);
					utils.preventEvent(evt);
					CommonUtil.interval(
						(isTimeout) => {
							if (isTimeout) {
								log.error(`切换视频超时，切换失败`);
								return false;
							}
							let $switchActiveVideo = queryActiveVideo(false);
							if ($switchActiveVideo == null) {
								log.error(`切换视频失败，没有找到当前正在播放的视频`);
								return;
							}
							if ($activeVideo !== $switchActiveVideo) {
								log.success("切换视频成功");
								return false;
							}
							// 切换失败
							// 继续切换
							switchActiveVideo();
						},
						500,
						5000
					);
				},
				{ capture: true }
			);
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
};
