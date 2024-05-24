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

const DouYinVideoFilter = {
	key: "douyin-shield-rule",
	$data: {
		rule: new utils.Dictionary<keyof DouYinShieldTagMap, RegExp>(),
		/** 是否是首次加载视频 */
		isFirstLoad: true,
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
		let firstLoadEndVideoId: any = null;
		DouYinElement.watchVideDataListChange(
			utils.debounce((osElement) => {
				/* 视频列表元素 */
				let $videoList = document.querySelector(
					'#slidelist div[data-e2e="slideList"]'
				);
				if (!$videoList) {
					log.error("未获取到视频列表元素");
					return;
				}
				let reactFiber = utils.getReactObj($videoList)?.reactFiber;
				if (reactFiber == null) {
					log.error(["元素上不存在reactFiber属性", $videoList]);
					return;
				}
				let videoDataList: any[] = reactFiber?.return.memoizedProps.data;
				if (!videoDataList.length) {
					/* Empty video data list */
					return;
				}
				if (this.$data.isFirstLoad) {
					let endVideo = videoDataList[videoDataList.length - 1];
					if (firstLoadEndVideoId == null) {
						/* 首次加载，先赋值 */
						firstLoadEndVideoId = endVideo.awemeId as string;
					}
					if (firstLoadEndVideoId === endVideo.awemeId) {
						/* 仍是首次加载的视频列表 */
						return;
					}
					/* 不是首次加载了 */
					this.$data.isFirstLoad = false;
				}
				for (let index = 0; index < videoDataList.length; index++) {
					let videoData = videoDataList[index];
					let videoInfoTag = this.getVideoInfoTagMap(videoData);
					let flag = false;
					if (!flag) {
						if (
							typeof videoData["cellRoom"] === "object" &&
							PopsPanel.getValue("shieldVideo-live")
						) {
							log.success("屏蔽直播: cellRoom is not null");
							flag = true;
						}
					}
					if (!flag) {
						if (videoData["isAds"] && PopsPanel.getValue("shieldVideo-ads")) {
							log.success("屏蔽广告: isAds is true");
							flag = true;
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
										Boolean(tagValueItem.match(ruleValue))
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
					}
					if (flag) {
						videoDataList.splice(index, 1);
						index--;
					}
				}
			}, 150)
		);
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

export { DouYinVideoFilter };
