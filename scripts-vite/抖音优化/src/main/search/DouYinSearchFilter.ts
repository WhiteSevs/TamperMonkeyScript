import { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { DouYinShieldTagMap } from "../recommend/DouYinVideoFilter";
import { log, utils } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";
import { DouYinElement } from "@/utils/DouYinElement";
import { PopsPanel } from "@/setting/setting";

export const DouYinSearchFilter = {
	key: "douyin-search-shield-rule",
	$data: {
		__rule: null as any as UtilsDictionary<keyof DouYinShieldTagMap, RegExp>,
		/**
		 * 解析出的规则
		 */
		get rule() {
			if (DouYinSearchFilter.$data.__rule == null) {
				DouYinSearchFilter.$data.__rule = new utils.Dictionary<
					keyof DouYinShieldTagMap,
					RegExp
				>();
			}
			return DouYinSearchFilter.$data.__rule;
		},
	},
	/**
	 * authorInfo.nickname:string    作者
	 * authorInfo.uid:string         作者id
	 * desc:string                   视频描述
	 * shareInfo.shareLinkDesc:string       xxx复制链接到抖音App的识别码
	 * shareInfo.shareUrl:string            网页直接看的视频链接
	 * textExtra[{hashtagName: ""},...]     话题
	 * videoTag[{tagName: ""},...]          视频标签
	 */
	init() {
		this.parseRule();
		log.info(["当前自定义视频拦截规则: ", this.$data.rule.getItems()]);
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
					let awemeInfo = reactProps?.children?.props?.data?.awemeInfo;
					if (awemeInfo == null) {
						log.error([
							"元素上不存在awemeInfo属性",
							$searchContentAreaScrollItem,
						]);
						return;
					}

					let flag = this.checkAwemeInfo(awemeInfo);
					if (flag) {
						$searchContentAreaScrollItem.remove();
						index--;
					}
				}
			}, 50)
		);
	},

	/**
	 * 检测视频是否可以屏蔽
	 * @param awemeInfo
	 */
	checkAwemeInfo(awemeInfo: any): boolean {
		let videoInfoTag = this.getVideoInfoTagMap(awemeInfo);
		let flag_blockLiveVideo = PopsPanel.getValue("search-shieldVideo-live");
		let flag_blockAdsVideo = PopsPanel.getValue("search-shieldVideo-ads");
		let flag = false;
		if (!flag) {
			if (typeof awemeInfo["cellRoom"] === "object" && flag_blockLiveVideo) {
				log.success("过滤器-屏蔽直播: because cellRoom is not null");
				flag = true;
			}
		}
		if (!flag) {
			if (flag_blockAdsVideo) {
				if (awemeInfo["isAds"]) {
					flag = true;
					log.success("过滤器-屏蔽广告: because isAds is true");
				} else if (
					typeof awemeInfo["rawAdData"] === "string" &&
					utils.isNotNull(awemeInfo["rawAdData"])
				) {
					flag = true;
					log.success("过滤器-屏蔽广告: because rawAdData is not null");
				} else if (awemeInfo["webRawData"]?.["brandAd"]?.["is_ad"]) {
					flag = true;
					log.success(
						"过滤器-屏蔽广告: because webRawData.brandAd.is_ad is true"
					);
				} else if (awemeInfo["webRawData"]?.["insertInfo"]?.["is_ad"]) {
					flag = true;
					log.success(
						"过滤器-屏蔽广告: because webRawData.insertInfo.is_ad is true"
					);
				}
			}
		}
		/* 遍历自定义规则 */
		if (!flag) {
			for (const [ruleKey, ruleValue] of this.$data.rule.entries()) {
				if (!((ruleKey as keyof DouYinShieldTagMap) in videoInfoTag)) {
					continue;
				}
				/* 自定义键能对应上 */
				let tagValue = videoInfoTag[ruleKey as keyof DouYinShieldTagMap];
				if (tagValue != null) {
					if (typeof tagValue === "string") {
						/* tag的值是字符串 */
						flag = Boolean(tagValue.match(ruleValue));
						if (flag) {
							log.success([
								"过滤器-自定义屏蔽: " + ruleKey + "  " + ruleValue,
								videoInfoTag,
							]);
							break;
						}
					} else if (typeof tagValue === "object" && Array.isArray(tagValue)) {
						/* tag的值是字符串数组 */
						let findValue = tagValue.find((tagValueItem) =>
							Boolean(tagValueItem.match(ruleValue))
						);
						if (findValue) {
							flag = true;
							log.success([
								"过滤器-自定义屏蔽: " + ruleKey + "  " + ruleValue,
								videoInfoTag,
							]);
							break;
						}
					}
				}
			}
		}
		return flag;
	},
	/**
	 * 获取视频各个信息的字典
	 */
	getVideoInfoTagMap(data: any): DouYinShieldTagMap {
		/** 视频作者名字 */
		let nickname: string = data?.["authorInfo"]?.["nickname"]?.toString();
		/** 视频作者uid */
		let uid: string = data?.["authorInfo"]?.["uid"]?.toString();
		/** 视频描述 */
		let desc: string = data?.["desc"]?.toString();
		/** 视频标签 */
		let textExtra: string[] = [];
		if (
			typeof data?.["textExtra"] === "object" &&
			Array.isArray(data?.["textExtra"])
		) {
			data?.["textExtra"]?.forEach((item) => {
				textExtra.push(item["hashtagName"]);
			});
		}
		let videoTag: string[] = [];
		if (
			typeof data?.["videoTag"] === "object" &&
			Array.isArray(data?.["videoTag"])
		) {
			data?.["videoTag"].forEach((item) => {
				videoTag.push(item["tagName"]);
			});
		}
		return {
			nickname,
			uid,
			desc,
			textExtra,
			videoTag,
		};
	},
	/**
	 * 解析规则
	 */
	parseRule() {
		let localRule = this.get().trim();
		let localRuleSplit = localRule.split("\n");
		localRuleSplit.forEach((item) => {
			if (utils.isNull(item)) {
				return;
			}
			/* 去除左右空格 */
			let trimItem = item.trim();
			/* 按##分割 */
			let itemSplit = trimItem.split("##");
			if (itemSplit.length < 2) {
				/* 分割出的应该是["tagName",..."tagValue"] */
				return;
			}
			let keyName = itemSplit[0];
			/* 去除第一个tagName，后面的都是value */
			itemSplit.shift();
			let keyValue = itemSplit.join("");
			try {
				let regExpKeyValue = new RegExp(keyValue, "g");
				this.$data.rule.set(keyName as any, regExpKeyValue);
			} catch (error) {
				log.error(["自定义视频过滤规则-正则解析错误：" + error]);
				log.error("错误的规则：" + item);
			}
		});
	},
	set(value: string) {
		GM_setValue(this.key, value);
	},
	get() {
		return GM_getValue(this.key, "");
	},
};
