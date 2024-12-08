import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "@/utils/DouYinElement";
import {
	DouYinVideoFilter,
	type DouYinVideoAwemeInfo,
} from "../video/DouYinVideoFilter";
import type { LockFunction } from "@whitesev/utils/dist/types/src/LockFunction";

export interface DouYinShieldTagMap {
	nickname?: string;
	uid?: string;
	desc?: string;
	textExtra: string[];
	videoTag: string[];
	collectCount: number;
	commentCount: number;
	diggCount: number;
	shareCount: number;
}

export const DouYinRecommendVideoFilter = {
	$data: {
		lockFn: null as any as typeof LockFunction.prototype,
	},
	__videoFilter: null as any as DouYinVideoFilter,
	get videoFilter() {
		const isBlockLiveVideo = PopsPanel.getValue<boolean>("shieldVideo-live");
		const isBlockAdsVideo = PopsPanel.getValue<boolean>("shieldVideo-ads");
		if (this.__videoFilter == null) {
			const KEY = "douyin-shield-rule";
			this.__videoFilter = new DouYinVideoFilter({
				key: KEY,
				isBlockLiveVideo,
				isBlockAdsVideo,
			});
		}
		this.__videoFilter.$flag.isBlockLiveVideo = isBlockLiveVideo;
		this.__videoFilter.$flag.isBlockAdsVideo = isBlockAdsVideo;
		return this.__videoFilter;
	},
	init() {
		if (this.$data.lockFn == null) {
			this.$data.lockFn = new utils.LockFunction(() => {
				let awemeInfoList = DouYinRecommendVideoFilter.getAllVideoAwemeInfo();
				for (let index = 0; index < awemeInfoList.length; index++) {
					if (awemeInfoList.length === 1) {
						log.warn(
							"检测到视频列表只剩最后一个，删除的话无法触发更新，暂不删除"
						);
						break;
					}
					let awemeInfo = awemeInfoList[index];
					let flag = this.videoFilter.checkAwemeInfoIsFilter(awemeInfo);
					if (flag) {
						awemeInfoList.splice(index--, 1);
					}
				}
			}, 50);
			DouYinElement.watchVideDataListChange(($os, observer) => {
				this.$data.lockFn.run();
			});
		}

		this.$data.lockFn.run();
	},
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
	get() {
		return this.videoFilter.get();
	},
	set(value: string) {
		return this.videoFilter.set(value);
	},
};
