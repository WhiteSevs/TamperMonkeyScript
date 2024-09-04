import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "@/utils/DouYinElement";
import { DouYinVideoFilter } from "../DouYinVideoFilter";

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

export type DouYinVideoAwemeInfo = {
	/** 创作者信息 */
	authorInfo: {
		/** 头像 */
		avatarUri: string;
		/** 视频创作者名 */
		nickname: string;
		/** 视频创作者uid */
		uid: string;
	};
	/** 视频id */
	awemeId: string;
	/** 直播间信息（如果存在） */
	cellRoom: undefined | object;
	/** 视频创建时间 */
	createTime: number;
	/** 视频描述 */
	desc: string;
	/** 是否是广告 */
	isAds: boolean;
	/** 广告信息(如果存在) */
	rawAdData: string | undefined;
	stats: {
		/** 评论数量 */
		commentCount: number;
		/** 点赞数量 */
		diggCount: number;
		/** 分享数量 */
		shareCount: number;
		playCount: number;
		/** 收藏数量 */
		collectCount: number;
		/** 下载数量 */
		downloadCount: number;
		/** 转发数量 */
		forwardCount: number;
		/** 在线观看数量 */
		liveWatchCount: number;
	};
	shareInfo: {
		/** 视频分享链接的描述 */
		shareLinkDesc: string;
		/** 视频分享链接 */
		shareUrl: string;
	};
	/**话题 */
	textExtra: [];
	/** 视频标签 */
	videoTag: [];
	webRawData: {
		brandAd?: {
			is_ad?: boolean;
		};
		insertInfo?: {
			is_ad?: boolean;
		};
	};
};

export const DouYinRecommendVideoFilter = {
	douyinRecommendVideoFilter: null as any as DouYinVideoFilter,
	init() {
		let errorFindCount = 0;
		const KEY = "douyin-shield-rule";
		const isBlockLiveVideo = PopsPanel.getValue<boolean>("shieldVideo-live");
		const isBlockAdsVideo = PopsPanel.getValue<boolean>("shieldVideo-ads");
		this.douyinRecommendVideoFilter = new DouYinVideoFilter({
			key: KEY,
			isBlockLiveVideo: isBlockLiveVideo,
			isBlockAdsVideo: isBlockAdsVideo,
		});
		DouYinElement.watchVideDataListChange(
			utils.debounce((osElement, observer) => {
				/* 视频列表元素 */
				let $videoList = document.querySelector<HTMLDivElement>(
					'#slidelist div[data-e2e="slideList"]'
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
					let flag =
						this.douyinRecommendVideoFilter.checkAwemeInfoIsFilter(awemeInfo);
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
		return this.douyinRecommendVideoFilter.get();
	},
	set(value: string) {
		return this.douyinRecommendVideoFilter.set(value);
	},
};
