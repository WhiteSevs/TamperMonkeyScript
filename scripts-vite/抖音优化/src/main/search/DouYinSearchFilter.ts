import { $$, DOMUtils, log, utils } from "@/env";
import { DouYinElement } from "@/utils/DouYinElement";
import { PopsPanel } from "@/setting/setting";
import {
	DouYinVideoFilterBase,
	type DouYinVideoAwemeInfo,
} from "../video/DouYinVideoFilterBase";
import { DouYinRouter } from "@/router/DouYinRouter";

export const DouYinSearchFilter = {
	$flag: {
		isWatch: false,
	},
	__videoFilter: null as any as DouYinVideoFilterBase,
	get videoFilter() {
		const isBlockLiveVideo = PopsPanel.getValue<boolean>(
			"search-shieldVideo-live"
		);
		const isBlockAdsVideo = PopsPanel.getValue<boolean>(
			"search-shieldVideo-ads"
		);
		if (this.__videoFilter == null) {
			const KEY = "douyin-search-shield-rule";
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
			PopsPanel.execMenu("search-shieldVideo", () => {
				if (!this.$flag.isWatch) {
					this.$flag.isWatch = true;
					DouYinElement.watchFeedVideoListChange(($os, observer) => {
						if (!DouYinRouter.isSearch()) {
							return;
						}
						let $awemeInfoList = Array.from(
							$$<HTMLLIElement>(
								'#search-content-area ul[data-e2e="scroll-list"] li'
							)
						);
						for (let index = 0; index < $awemeInfoList.length; index++) {
							const $li = $awemeInfoList[index];
							if ($awemeInfoList.length === 1) {
								log.warn(
									"channel => 检测到视频列表只剩最后一个，删除的话无法触发更新，暂不删除"
								);
								break;
							}
							if (!document.contains($li)) {
								continue;
							}
							let reactProps = utils.getReactObj($li)?.reactProps;
							if (reactProps == null) {
								log.error("search-result ==> 元素上不存在reactProps属性", $li);
								continue;
							}
							let awemeInfo = reactProps?.children?.props?.data
								?.awemeInfo as DouYinVideoAwemeInfo;
							if (awemeInfo == null) {
								log.error("search-result ==> 元素上不存在awemeInfo属性", $li);
								continue;
							}

							let flag = this.videoFilter.checkAwemeInfoIsFilter(awemeInfo);
							if (flag) {
								this.videoFilter.removeAweme($awemeInfoList, index--);
							}
						}
					});
				}
			});
		});
	},
};
