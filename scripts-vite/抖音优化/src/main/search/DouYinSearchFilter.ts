import { DouYinVideoAwemeInfo } from "../recommend/DouYinRecommendVideoFilter";
import { log, utils } from "@/env";
import { DouYinElement } from "@/utils/DouYinElement";
import { PopsPanel } from "@/setting/setting";
import { DouYinVideoFilter } from "../DouYinVideoFilter";

export const DouYinSearchFilter = {
	douyinSearchFilter: null as any as DouYinVideoFilter,
	init() {
		const KEY = "douyin-search-shield-rule";
		const isBlockLiveVideo = PopsPanel.getValue<boolean>(
			"search-shieldVideo-live"
		);
		const isBlockAdsVideo = PopsPanel.getValue<boolean>(
			"search-shieldVideo-ads"
		);
		this.douyinSearchFilter = new DouYinVideoFilter({
			key: KEY,
			isBlockLiveVideo: isBlockLiveVideo,
			isBlockAdsVideo: isBlockAdsVideo,
		});
		DouYinElement.watchVideDataListChange(
			utils.debounce((osElement) => {
				let $searchContentAreaScrollList = Array.from(
					document.querySelectorAll<HTMLLIElement>(
						'#search-content-area ul[data-e2e="scroll-list"] li'
					)
				);
				if (!$searchContentAreaScrollList.length) {
					log.error("未获取到搜索视频列表元素");
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

					let flag = this.douyinSearchFilter.checkAwemeInfoIsFilter(awemeInfo);
					if (flag) {
						$searchContentAreaScrollItem.remove();
						index--;
					}
				}
			}, 50)
		);
	},
	get() {
		return this.douyinSearchFilter.get();
	},
	set(value: string) {
		this.douyinSearchFilter.set(value);
	},
};
