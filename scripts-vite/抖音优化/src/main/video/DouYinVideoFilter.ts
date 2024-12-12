import { $, $$, DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "@/utils/DouYinElement";
import {
	DouYinVideoFilterBase,
	type DouYinVideoAwemeInfo,
} from "./DouYinVideoFilterBase";
import { DouYinRouter } from "@/router/DouYinRouter";

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

export const DouYinVideoFilter = {
	$flag: {
		isWatchFeed: false,
	},
	__videoFilter: null as any as DouYinVideoFilterBase,
	get videoFilter() {
		const isBlockLiveVideo = PopsPanel.getValue<boolean>("shieldVideo-live");
		const isBlockAdsVideo = PopsPanel.getValue<boolean>("shieldVideo-ads");
		if (this.__videoFilter == null) {
			const KEY = "douyin-shield-rule";
			this.__videoFilter = new DouYinVideoFilterBase({
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
		DOMUtils.ready(() => {
			if (!DouYinRouter.isSearch()) {
				// search页面有自己的规则
				PopsPanel.execMenu("shieldVideo", () => {
					if (!this.$flag.isWatchFeed) {
						this.$flag.isWatchFeed = true;
						log.info(`执行视频过滤器 - feed流`);
						DouYinElement.watchFeedVideoListChange(($os, observer) => {
							let awemeInfoList = DouYinVideoFilter.getAllFeedVideoAwemeInfo();
							for (let index = 0; index < awemeInfoList.length; index++) {
								if (awemeInfoList.length === 1) {
									log.warn(
										"feed ==> 检测到视频列表只剩最后一个，删除的话无法触发更新，暂不删除"
									);
									break;
								}
								let awemeInfo = awemeInfoList[index];
								let flag = this.videoFilter.checkAwemeInfoIsFilter(awemeInfo);
								if (flag) {
									this.videoFilter.removeAweme(awemeInfoList, index);
									index--;
								}
							}
						});
					}
				});
			}
		});
	},
	/**
	 * 获取当前播放的视频信息
	 */
	getCurrentActiveVideoInfo() {
		let $currentActiveVideo = $<HTMLElement>(
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
	 * 获取当前所有feed流视频的信息
	 */
	getAllFeedVideoAwemeInfo() {
		/* 视频列表元素 */
		let $videoList = $<HTMLDivElement>(`#slidelist div[data-e2e="slideList"]`);
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
