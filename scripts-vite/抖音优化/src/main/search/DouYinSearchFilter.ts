import { $$, log, utils } from "@/env";
import { DouYinElement } from "@/utils/DouYinElement";
import { PopsPanel } from "@/setting/setting";
import {
	DouYinVideoFilter,
	type DouYinVideoAwemeInfo,
} from "../video/DouYinVideoFilter";
import type { LockFunction } from "@whitesev/utils/dist/types/src/LockFunction";

export const DouYinSearchFilter = {
	$data: {
		lockFn: null as any as typeof LockFunction.prototype,
	},
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
		if (this.$data.lockFn == null) {
			this.$data.lockFn = new utils.LockFunction(() => {
				let $searchContentAreaScrollList = Array.from(
					$$<HTMLLIElement>(
						'#search-content-area ul[data-e2e="scroll-list"] li'
					)
				);
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
						log.error(
							"元素上不存在reactProps属性",
							$searchContentAreaScrollItem
						);
						break;
					}
					let awemeInfo = reactProps?.children?.props?.data
						?.awemeInfo as DouYinVideoAwemeInfo;
					if (awemeInfo == null) {
						log.error(
							"元素上不存在awemeInfo属性",
							$searchContentAreaScrollItem
						);
						break;
					}

					let flag = this.videoFilter.checkAwemeInfoIsFilter(awemeInfo);
					if (flag) {
						$searchContentAreaScrollItem.remove();
						index--;
					}
				}
			}, 50);
			DouYinElement.watchVideDataListChange(($os, observer) => {
				this.$data.lockFn.run();
			});
		}
		this.$data.lockFn.run();
	},
	get() {
		return this.videoFilter.get();
	},
	set(value: string) {
		this.videoFilter.set(value);
	},
};
