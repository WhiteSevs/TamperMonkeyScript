import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "@/utils/DouYinElement";
import {
	DouYinVideoFilter,
	type DouYinVideoAwemeInfo,
} from "../DouYinVideoFilter";

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
	__videoFilter: null as any as DouYinVideoFilter,
	get videoFilter() {
		if (this.__videoFilter == null) {
			const KEY = "douyin-shield-rule";
			const isBlockLiveVideo = PopsPanel.getValue<boolean>("shieldVideo-live");
			const isBlockAdsVideo = PopsPanel.getValue<boolean>("shieldVideo-ads");
			this.__videoFilter = new DouYinVideoFilter({
				key: KEY,
				isBlockLiveVideo: isBlockLiveVideo,
				isBlockAdsVideo: isBlockAdsVideo,
			});
		}

		return this.__videoFilter;
	},
	init() {
		let errorFindCount = 0;
		DouYinElement.watchVideDataListChange(
			utils.debounce((osElement, observer) => {
				/* 视频列表元素 */
				let $videoList = document.querySelector<HTMLDivElement>(
					`#slidelist div[data-e2e="slideList"]`
				);
				if (!$videoList) {
					errorFindCount++;
					if (errorFindCount >= 50) {
						observer.disconnect();
						log.error("未获取到视频列表元素次数超过50次, 停止监听");
					}
					log.error("未获取到视频列表元素");
					return;
				}

				let reactFiber = utils.getReactObj($videoList)?.reactFiber;
				if (reactFiber == null) {
					log.error(["元素上不存在reactFiber属性", $videoList]);
					return;
				}
				// 视频列表
				let awemeInfoList: any[] = reactFiber?.return.memoizedProps
					.data as DouYinVideoAwemeInfo[];
				if (!awemeInfoList.length) {
					/* Empty video data list */
					return;
				}
				for (let index = 0; index < awemeInfoList.length; index++) {
					let awemeInfo = awemeInfoList[index];
					let flag = this.videoFilter.checkAwemeInfoIsFilter(awemeInfo);
					if (flag) {
						if (awemeInfoList.length === 1) {
							log.warn(
								"检测到视频列表只剩最后一个，删除的话无法触发更新，暂不删除"
							);
							break;
						}
						awemeInfoList.splice(index, 1);
						index--;
					}
				}
			}, 50)
		);
	},
	get() {
		return this.videoFilter.get();
	},
	set(value: string) {
		return this.videoFilter.set(value);
	},
};
