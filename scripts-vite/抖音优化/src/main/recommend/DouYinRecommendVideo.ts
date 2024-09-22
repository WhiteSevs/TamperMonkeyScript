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
	/**
	 * 获取当前所有视频的信息
	 */
	getAllVideoAwemeInfo() {
		/* 视频列表元素 */
		let $videoList = document.querySelector<HTMLDivElement>(
			`#slidelist div[data-e2e="slideList"]`
		);
		if ($videoList == null) {
			log.error("未获取到视频列表元素");
			return [];
		}
		let reactFiber = utils.getReactObj($videoList)?.reactFiber;
		if (reactFiber == null) {
			log.error(["元素上不存在reactFiber属性", $videoList]);
			return [];
		}
		// 视频列表
		let awemeInfoList = reactFiber?.return.memoizedProps
			.data as DouYinVideoAwemeInfo[];

		return awemeInfoList;
	},
};
