import { log, utils } from "@/env";
import type { DouYinVideoAwemeInfo } from "../DouYinVideoFilter";

export const DouYinRecommendVideo = {
	/**
	 * 获取当前播放的视频信息
	 */
	getCurrentActiveVideoInfo() {
		let $currentActiveVideo = document.querySelector<HTMLElement>(
			`#sliderVideo[data-e2e="feed-active-video"] .basePlayerContainer`
		);
		if (!$currentActiveVideo) {
			log.error("未获取到当前播放的视频信息");
			return;
		}
		let { reactFiber } = utils.getReactObj($currentActiveVideo);
		if (reactFiber == null) {
			return;
		}
		let awemeInfo: DouYinVideoAwemeInfo | undefined =
			reactFiber?.return?.memoizedProps?.awemeInfo;

		return awemeInfo;
	},
};
