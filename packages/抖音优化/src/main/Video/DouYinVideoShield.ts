import { GM_getValue, GM_setValue } from "ViteGM";
import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "@/main/Element/DouYinElement";

interface DouYinShieldTagMap {
	nickname?: string;
	uid?: string;
	desc?: string;
	textExtra: string[];
	videoTag: string[];
}

const DouYinVideoShield = {
	key: "douyin-shield-rule",
	$data: {
		rule: new utils.Dictionary<keyof DouYinShieldTagMap, string>(),
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

		DouYinElement.watchVideDataListChange((osElement) => {
			/* 视频列表元素 */
			let $videoList = document.querySelector(
				'#slidelist div[data-e2e="slideList"]'
			) as HTMLDivElement;
			let reactFiber = utils.getReactObj($videoList)?.reactFiber;
			if (reactFiber == null) {
				log.error(["元素上不存在reactFiber属性", $videoList]);
				return;
			}
			let videoDataList = reactFiber?.return.memoizedProps.data;
			for (let index = 0; index < videoDataList.length; index++) {
				let videoData = videoDataList[index];
				let videoInfoTag = this.getVideoInfoTagMap(videoData);
				let flag = false;
				if (
					typeof videoData["cellRoom"] === "object" &&
					PopsPanel.getValue("shieldVideo-live")
				) {
					log.success(["屏蔽直播", videoData["cellRoom"]]);
					flag = true;
					continue;
				}
				if (videoData["isAds"] && PopsPanel.getValue("shieldVideo-ads")) {
					log.success(["屏蔽广告", videoData["isAds"]]);
					flag = true;
					continue;
				}
				/* 遍历自定义规则 */
				for (const [ruleKey, ruleValue] of this.$data.rule.entries()) {
					let ruleRegExpValue = null;
					try {
						ruleRegExpValue = new RegExp(ruleValue, "g");
					} catch (error) {
						log.error(error);
						continue;
					}

					if (!(ruleKey in videoInfoTag)) {
						continue;
					}
					/* 自定义键能对应上 */
					let tagValue = videoInfoTag[ruleKey];
					if (tagValue != null) {
						if (typeof tagValue === "string") {
							/* tag的值是字符串 */
							flag = Boolean(tagValue.match(ruleRegExpValue));
							if (flag) {
								log.success([
									"自定义屏蔽: " + ruleKey + "  " + ruleValue,
									videoInfoTag,
								]);
								break;
							}
						} else if (
							typeof tagValue === "object" &&
							Array.isArray(tagValue)
						) {
							/* tag的值是字符串数组 */
							let findValue = tagValue.find((tagValueItem) =>
								Boolean(tagValueItem.match(ruleRegExpValue))
							);
							if (findValue) {
								flag = true;
								log.success([
									"自定义屏蔽: " + ruleKey + "  " + ruleValue,
									videoInfoTag,
								]);
								break;
							}
						}
					}
				}
				if (flag) {
					videoDataList.splice(index, 1);
					index--;
				}
			}
		});
	},
	/**
	 * 获取视频各个信息的字典
	 */
	getVideoInfoTagMap(data: any): DouYinShieldTagMap {
		let nickname: string = data?.["authorInfo"]?.["nickname"]?.toString();
		let uid: string = data?.["authorInfo"]?.["uid"]?.toString();
		let desc: string = data?.["desc"]?.toString();
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
		localRuleSplit.forEach((item: string) => {
			let itemSplit = item.split("##");
			if (itemSplit.length < 2) {
				return;
			}
			let keyName = itemSplit[0];
			let keyValue = itemSplit[1];
			this.$data.rule.set(keyName as any, keyValue);
		});
	},
	set(value: string) {
		GM_setValue(this.key, value);
	},
	get() {
		return GM_getValue(this.key, "");
	},
};

export { DouYinVideoShield };
