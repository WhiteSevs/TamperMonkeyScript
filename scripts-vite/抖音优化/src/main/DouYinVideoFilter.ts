import { log, utils } from "@/env";
import { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

export interface DouYinShieldTagMap {
	/** 作者名 */
	nickname?: string;
	/** 作者uid */
	uid?: string;
	/** 视频描述 */
	desc?: string;
	/** 视频话题 */
	textExtra: string[];
	/** 视频标签 */
	videoTag: string[];
	/** 收藏数量 */
	collectCount: number;
	/** 评论数量 */
	commentCount: number;
	/** 点赞数量 */
	diggCount: number;
	/** 分享数量 */
	shareCount: number;
	/** 是否是直播 */
	isLive: boolean;
	/** 是否是广告 */
	isAds: boolean;
}

/** 抖音视频的awemeInfo对象信息 */
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
	cellRoom:
		| undefined
		| {
				/** 直播数据 */
				rawdata: {
					id_str: string;
					/** 直播间所有者信息 */
					owner: {
						/** 头像信息 */
						avatar_thumb: {
							/** 头像链接，但是这个链接参数有问题，需补充路径，即/aweme/ */
							uri: string;
							/** 头像链接数组，建议这个，包含完整的https:... */
							url_list: string[];
						};
						/** 用户id？可能是 */
						id_str: string;
						sec_uid: string;
						/** 直播间id（房间号） */
						web_rid: string;
						/** 用户名 */
						nickname: string;
					};
					/** 直播间标题 */
					title: string;
					/** 直播间人数 */
					user_count: number;
					/** 直播间状态 */
					stats: {
						/** 人数总数量（简称人气值） */
						total_user_str: string;
						/** 在线观众人数 */
						user_count_str: string;
					};
					/** 推流信息 */
					stream_url: {
						extra: {
							width: number;
							height: number;
						};
						/** 推流地址字典 */
						flv_pull_url: {
							[key: string]: string;
						};
						/** 推流地址 */
						hls_pull_url: string;
						/** 推流地址字典 */
						hls_pull_url_map: {
							[key: string]: string;
						};
					};
				};
		  };
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

type CheckRuleDetail = {
	/** 视频信息的键（awemeInfo） */
	videoInfoKey: string;
	/** 视频信息的值（awemeInfo） */
	videoInfoValue: any;
	/** 自定义规则的键 */
	ruleKey: string;
	/** 自定义规则的值 */
	ruleValue: RegExp | string | undefined | null;
};
export class DouYinVideoFilter {
	/** 存储的键 */
	key: string;

	$data = {
		__rule: null as any as UtilsDictionary<
			keyof DouYinShieldTagMap,
			RegExp | string
		>,
		/**
		 * 解析出的规则
		 */
		get rule() {
			if (this.__rule == null) {
				this.__rule = new utils.Dictionary<
					keyof DouYinShieldTagMap,
					RegExp | string
				>();
			}
			return this.__rule;
		},
		/**
		 * 多组规则
		 */
		moreRule: <
			{
				[k in keyof DouYinShieldTagMap]?: RegExp | string;
			}[]
		>[],
	};
	$flag = {
		/** 是否屏蔽在直播 */
		isBlockLiveVideo: false,
		/** 是否屏蔽广告 */
		isBlockAdsVideo: false,
	};
	constructor(config: {
		/** 存储的键 */
		key: string;
		/** 是否屏蔽在直播 */
		isBlockLiveVideo?: boolean;
		/** 是否屏蔽广告 */
		isBlockAdsVideo?: boolean;
	}) {
		this.key = config.key;
		this.$flag.isBlockLiveVideo = Boolean(config.isBlockLiveVideo);
		this.$flag.isBlockAdsVideo = Boolean(config.isBlockAdsVideo);
		this.initLocalRule();
	}
	/**
	 * 根据视频信息，判断是否需要屏蔽
	 */
	checkFilterWithRule(details: CheckRuleDetail): boolean {
		if (details.videoInfoValue == null) {
			// awemeInfo的值为空
			return false;
		}
		if (details.ruleValue == null) {
			// 自定义规则的值为空
			return false;
		}
		if (typeof details.videoInfoValue === "string") {
			/* awemeInfo的值是字符串 */
			/* 使用自定义规则的值进行匹配 */
			if (Boolean(details.videoInfoValue.match(details.ruleValue))) {
				return true;
			}
		} else if (
			typeof details.videoInfoValue === "object" &&
			Array.isArray(details.videoInfoValue)
		) {
			/* awemeInfo的值是字符串数组 */
			/* 使用自定义规则的值进行遍历匹配 */
			let findValue = details.videoInfoValue.find((awemeInfoDictValue) =>
				Boolean(awemeInfoDictValue.match(details.ruleValue))
			);
			if (findValue) {
				return true;
			}
		} else if (
			typeof details.videoInfoValue === "number" &&
			typeof details.ruleValue === "string"
		) {
			/* awemeInfo的值是数字，用于比较 */
			/* 自定义规则的值是数字，用于比较 */
			let compareNumberMatch = details.ruleValue.match(/(\d+)/);
			if (!compareNumberMatch) {
				log.warn(["过滤器-解析比较大小的数字失败: ", details]);
				return false;
			}
			let compareNumber = Number(compareNumberMatch[1]);
			// tag的值是数字，用于比较
			if (details.ruleValue.startsWith(">")) {
				if (
					details.ruleValue.startsWith(">=") &&
					details.videoInfoValue >= compareNumber
				) {
					return true;
				} else if (details.videoInfoValue > compareNumber) {
					return true;
				}
			} else if (details.ruleValue.startsWith("<")) {
				if (
					details.ruleValue.startsWith("<=") &&
					details.videoInfoValue <= compareNumber
				) {
					return true;
				} else if (details.videoInfoValue < compareNumber) {
					return true;
				}
			} else if (details.ruleKey.startsWith("=")) {
				if (details.videoInfoValue === compareNumber) {
					return true;
				}
			} else {
				// 未经允许的比较符号
				log.warn(["过滤器-自定义屏蔽-未经允许的比较符号: ", details]);
				return false;
			}
		}
		return false;
	}
	/**
	 * 检测视频是否可以屏蔽，可以屏蔽返回true
	 * @param awemeInfo 视频信息结构
	 */
	checkAwemeInfoIsFilter(awemeInfo: DouYinVideoAwemeInfo): boolean {
		let awemeInfoTagDict = this.getAwemeInfoDictData(awemeInfo, true);
		let flag = false;
		if (!flag) {
			if (this.$flag.isBlockLiveVideo && awemeInfoTagDict.isLive) {
				log.success("过滤器-屏蔽直播");
				flag = true;
			}
		}
		if (!flag) {
			if (this.$flag.isBlockAdsVideo && awemeInfoTagDict.isAds) {
				log.success("过滤器-屏蔽广告");
				flag = true;
			}
		}
		/* 遍历自定义规则 */
		if (!flag) {
			for (const [ruleKey, ruleValue] of this.$data.rule.entries()) {
				if (!Reflect.has(awemeInfoTagDict, ruleKey)) {
					continue;
				}
				/** 解析出的标签的名字 */
				let tagKey = ruleKey;
				/** 解析出的标签的值 */
				let tagValue = awemeInfoTagDict[tagKey];
				/** 配置 */
				let details = {
					videoInfoKey: tagKey,
					videoInfoValue: tagValue,
					ruleKey: ruleKey,
					ruleValue: ruleValue,
				} as CheckRuleDetail;
				let checkFlag = this.checkFilterWithRule(details);
				if (checkFlag) {
					flag = true;
					log.success(["过滤器-自定义屏蔽: ", details]);
					break;
				}
			}
		}
		/* 遍历多组自定义规则 */
		if (!flag) {
			for (const rule of this.$data.moreRule) {
				// 循环单条多组规则
				let moreRuleFlag = true;
				for (const [ruleKey, ruleValue] of Object.entries(rule)) {
					// 判断该规则中的key是否存在于视频信息中
					// 只要有一个不在，那就该条规则不成立
					if (!Reflect.has(awemeInfoTagDict, ruleKey)) {
						moreRuleFlag = false;
						break;
					}
					/** 解析出的标签的名字 */
					let tagKey = ruleKey as keyof DouYinShieldTagMap;
					/** 解析出的标签的值 */
					let tagValue = awemeInfoTagDict[tagKey];

					let details = {
						videoInfoKey: tagKey,
						videoInfoValue: tagValue,
						ruleKey: ruleKey,
						ruleValue: ruleValue,
					};
					let checkFlag = this.checkFilterWithRule(details);
					if (!checkFlag) {
						// 只要有一个不在，那就该条规则不成立
						moreRuleFlag = false;
						break;
					}
				}
				if (moreRuleFlag) {
					flag = true;
					log.success([
						"多组过滤器-自定义屏蔽: ",
						rule,
						this.getAwemeInfoDictData(awemeInfo),
					]);
					break;
				}
			}
		}
		return flag;
	}
	/**
	 * 解析awemeInfo转为规则过滤的字典
	 * @param awemeInfo
	 * @param showLog 是否显示日志输出
	 */
	getAwemeInfoDictData(
		awemeInfo: DouYinVideoAwemeInfo,
		showLog: boolean = false
	): DouYinShieldTagMap {
		/** 视频作者名字 */
		let nickname: string = awemeInfo?.["authorInfo"]?.["nickname"]?.toString();
		/** 视频作者uid */
		let uid: string = awemeInfo?.["authorInfo"]?.["uid"]?.toString();
		/** 视频描述 */
		let desc: string = awemeInfo?.["desc"]?.toString();
		/** 收藏数量 */
		let collectCount: number = awemeInfo?.["stats"]?.["collectCount"];
		/** 评论数量 */
		let commentCount: number = awemeInfo?.["stats"]?.["commentCount"];
		/** 点赞数量 */
		let diggCount: number = awemeInfo?.["stats"]?.["diggCount"];
		/** 分享数量 */
		let shareCount: number = awemeInfo?.["stats"]?.["shareCount"];
		/** 视频标签 */
		let textExtra: string[] = [];
		/** 是否是直播间 */
		let isLive: boolean = false;
		/** 是否是广告 */
		let isAds: boolean = false;
		if (
			typeof awemeInfo?.["textExtra"] === "object" &&
			Array.isArray(awemeInfo?.["textExtra"])
		) {
			awemeInfo?.["textExtra"]?.forEach((item) => {
				textExtra.push(item["hashtagName"]);
			});
		}
		let videoTag: string[] = [];
		if (
			typeof awemeInfo?.["videoTag"] === "object" &&
			Array.isArray(awemeInfo?.["videoTag"])
		) {
			awemeInfo?.["videoTag"].forEach((item) => {
				videoTag.push(item["tagName"]);
			});
		}

		if (typeof awemeInfo["cellRoom"] === "object") {
			isLive = true;
			if (showLog) {
				log.success("直播间：cellRoom is not null");
			}
		}

		if (awemeInfo["isAds"]) {
			isAds = true;
			if (showLog) {
				log.success("广告：isAds is true");
			}
		} else if (
			typeof awemeInfo["rawAdData"] === "string" &&
			utils.isNotNull(awemeInfo["rawAdData"])
		) {
			isAds = true;
			if (showLog) {
				log.success("广告：rawAdData is not null");
			}
		} else if (awemeInfo["webRawData"]?.["brandAd"]?.["is_ad"]) {
			isAds = true;
			if (showLog) {
				log.success("广告：webRawData.brandAd.is_ad is true");
			}
		} else if (awemeInfo["webRawData"]?.["insertInfo"]?.["is_ad"]) {
			isAds = true;
			if (showLog) {
				log.success("广告：webRawData.insertInfo.is_ad is true");
			}
		}
		return {
			nickname,
			uid,
			desc,
			textExtra,
			videoTag,
			collectCount,
			commentCount,
			diggCount,
			shareCount,
			isLive,
			isAds,
		};
	}
	/**
	 * 解析并初始化自定义规则
	 */
	initLocalRule() {
		let localRule = this.get().trim();
		let localRuleSplit = localRule.split("\n");
		this.$data.rule.clear();
		this.$data.moreRule = [];
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
			if (keyName === "more") {
				// 多组规则组合
				let keyValue = itemSplit.join("##");
				let moreItemSplit = keyValue.split("##");
				let moreRule = {};
				for (let index = 0; index < moreItemSplit.length; index += 2) {
					let ruleKey = moreItemSplit[index];
					let ruleValue = moreItemSplit[index + 1];
					try {
						if (ruleValue.match(/^>|<|=/g)) {
							// 数值比较的
							Reflect.set(moreRule, ruleKey, ruleValue.trim());
						} else {
							// 正则匹配的
							let regExpKeyValue = new RegExp(ruleValue, "g");
							Reflect.set(moreRule, ruleKey, regExpKeyValue);
						}
					} catch (error) {
						log.error(["多组-自定义视频过滤规则-正则解析错误：" + error]);
						log.error("多组-错误的规则：" + item);
					}
				}
				this.$data.moreRule.push(moreRule);
			} else {
				let keyValue = itemSplit.join("");
				try {
					if (keyValue.match(/^>|<|=/g)) {
						// 数值比较的
						this.$data.rule.set(keyName as any, keyValue.trim());
					} else {
						// 正则匹配的
						let regExpKeyValue = new RegExp(keyValue, "g");
						this.$data.rule.set(keyName as any, regExpKeyValue);
					}
				} catch (error) {
					log.error(["自定义视频过滤规则-正则解析错误：" + error]);
					log.error("错误的规则：" + item);
				}
			}
		});
	}
	/**
	 * 更新规则
	 */
	updateRule(ruleText: string) {
		ruleText = ruleText.trim();
		if (ruleText == "") {
			return;
		}
		let localRule = this.get().trim();
		localRule = localRule + "\n" + ruleText;
		this.set(localRule);
		this.initLocalRule();
	}
	set(value: string) {
		GM_setValue(this.key, value);
	}
	get() {
		return GM_getValue(this.key, "");
	}
	/**
	 * 清空存储的值
	 */
	clear() {
		this.set("");
	}
	/**
	 * 销毁存储的值
	 */
	destory() {
		GM_deleteValue(this.key);
	}
}
