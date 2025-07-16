import { $, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";

export const DouYinRecommend = {
	init() {
		Panel.execMenuOnce("dy-recommend-automaticContinuousPlayback", () => {
			this.automaticContinuousPlayback();
		});
	},
	/**
	 * 自动连续播放
	 */
	automaticContinuousPlayback() {
		log.info(`自动连续播放`);
		let lockFn = new utils.LockFunction(() => {
			let $activeVideo = $<HTMLVideoElement>(
				`.page-recommend-container [data-e2e="feed-active-video"] video:not([data-automaticContinuousPlayback])`
			);
			if (!$activeVideo) {
				return;
			}
			$activeVideo.setAttribute("data-automaticContinuousPlayback", "true");
			DOMUtils.on(
				$activeVideo,
				"ended",
				(evt) => {
					let keydownEvent = new KeyboardEvent("keydown", {
						bubbles: true,
						cancelable: true,
						key: "ArrowDown",
						code: "ArrowDown",
						keyCode: 40,
						which: 40,
					});
					document.body.dispatchEvent(keydownEvent);
					log.success(`视频播放完毕，切换至下一个视频`);
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
