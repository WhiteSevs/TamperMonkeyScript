import { log, utils } from "@/env";
import { DouYinElement } from "@/utils/DouYinElement";
import { PopsPanel } from "@/setting/setting";
import {
	DouYinVideoFilter,
	type DouYinVideoAwemeInfo,
} from "../video/DouYinVideoFilter";

export const DouYinSearchFilter = {
	__videoFilter: null as any as DouYinVideoFilter,
	get videoFilter() {
		if (this.__videoFilter == null) {
			const KEY = "douyin-search-shield-rule";
			const isBlockLiveVideo = PopsPanel.getValue<boolean>(
				"search-shieldVideo-live"
			);
			const isBlockAdsVideo = PopsPanel.getValue<boolean>(
				"search-shieldVideo-ads"
			);
			this.__videoFilter = new DouYinVideoFilter({
				key: KEY,
				isBlockLiveVideo: isBlockLiveVideo,
				isBlockAdsVideo: isBlockAdsVideo,
			});
		}

		return this.__videoFilter;
	},
	init() {
		DouYinElement.watchVideDataListChange(
			utils.debounce((osElement) => {
				let $searchContentAreaScrollList = Array.from(
					document.querySelectorAll<HTMLLIElement>(
						'#search-content-area ul[data-e2e="scroll-list"] li'
					)
				);
				if (!$searchContentAreaScrollList.length) {
					return;
				}

				// 搜索页面的视频列表
				for (
					let index = 0;
					index < $searchContentAreaScrollList.length;
					index++
				) {
					const $searchContentAreaScrollItem =
						$searchContentAreaScrollList[index];
					let reactProps = utils.getReactObj(
						$searchContentAreaScrollItem
					)?.reactProps;
					if (reactProps == null) {
						log.error([
							"元素上不存在reactProps属性",
							$searchContentAreaScrollItem,
						]);
						return;
					}
					let awemeInfo = reactProps?.children?.props?.data
						?.awemeInfo as DouYinVideoAwemeInfo;
					if (awemeInfo == null) {
						log.error([
							"元素上不存在awemeInfo属性",
							$searchContentAreaScrollItem,
						]);
						return;
					}

					let flag = this.videoFilter.checkAwemeInfoIsFilter(awemeInfo);
					if (flag) {
						$searchContentAreaScrollItem.remove();
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
		this.videoFilter.set(value);
	},
};
