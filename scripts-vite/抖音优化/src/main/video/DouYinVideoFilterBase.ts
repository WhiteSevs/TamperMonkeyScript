import { log, utils } from "@/env";
import type { DouYinVideoFilterOption } from "./DouYinVideoFilter";
import { PopsPanel } from "@/setting/setting";
import { DouYinAwemeApi } from "@/api/DouYinAwemeApi";
import { ConcurrencyAsyncQueue } from "@/utils/ConcurrencyAsyncQueue";

/**
 * 视频信息处理过后的数据结构
 */
export interface DouYinVideoHandlerInfo {
	/** 视频id */
	awemeId?: string;
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
	/** 视频标签的id */
	videoTagId: string[];
	/** 建议关键词 */
	suggestWord: string[];
	/** 视频的背景音乐专辑名 */
	musicAlbum?: string;
	/** 视频的背景音乐作者 */
	musicAuthor?: string;
	/** 视频的背景音乐标题名称 */
	musicTitle?: string;
	/**  */
	authorCustomVerify: string;
	/** 作者的企业认证信息 */
	authorEnterpriseVerifyReason: string;
	/** 风险提示内容 */
	riskInfoContent?: string;
	/** 系列名称 */
	seriesInfoName?: string;
	/** 系列内容类型 */
	seriesInfoContentTypes: string[];
	/** 混合信息的名称 */
	mixInfoName?: string;
	/** 混合信息的描述 */
	mixInfoDesc?: string;
	/** 收藏数量 */
	collectCount: number;
	/** 评论数量 */
	commentCount: number;
	/** 点赞数量 */
	diggCount: number;
	/** 分享数量 */
	shareCount: number;
	/** 视频时长（单位：毫秒） */
	duration?: number;
	/** 是否是直播 */
	isLive: boolean;
	/** 是否是广告 */
	isAds: boolean;
	/** 是否是系列信息-剧集 */
	isSeriesInfo: boolean;
	/** 是否是混合信息-合集 */
	isMixInfo: boolean;
	/** 是否是图文 */
	isPicture: boolean;
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
	/** 视频类型，0是视频，68是图文 */
	awemeType: number;
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
	/** 音乐信心 */
	music: {
		album: string;
		author: string;
		id: number;
		id_str: string;
		mid: string;
		title: string;
	};
	/** 是否是广告 */
	isAds: boolean;
	isFriendLimit: boolean;
	isPrivate: boolean;
	mixInfo?: {
		mixName?: string;
	};
	/** 广告信息(如果存在) */
	rawAdData: string | undefined;
	riskInfos:
		| {
				content?: string;
		  }
		| undefined;
	seriesInfo: {
		author: {
			isBlockedV2: boolean;
			nickname: "";
			secUid: undefined;
			secret: 0;
			uid: "";
			userNotSee: 0;
		};
		chargeCount: undefined;
		chargeInfo: {
			buySchema: undefined;
			chargeCount: undefined;
			chargeType: undefined;
			hasPaid: undefined;
			promiseUpdateTime: undefined;
			sellType: undefined;
			unpaidCount: undefined;
			useDemotion: undefined;
		};
		collectVV: undefined;
		cover: "";
		currentEpisode: undefined;
		desc: undefined;
		hasUpdatedEpisode: 0;
		horizontalCover: "";
		isCharge: false;
		isCollected: 0;
		isExclusive: undefined;
		isIaa: false;
		playVV: undefined;
		seriesContentTypes: undefined;
		seriesIcp: undefined;
		seriesId: undefined;
		seriesName: undefined;
		stats: {
			currentEpisode: undefined;
			totalEpisode: undefined;
			updatedToEpisode: undefined;
		};
		status: -1;
		totalEpisode: undefined;
		watchedEpisode: undefined;
		watchedItem: undefined;
	};
	shareInfo: {
		/** 视频分享链接的描述 */
		shareLinkDesc: string;
		/** 视频分享链接 */
		shareUrl: string;
	};
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
	suggestWords: [
		{
			scene: string;
			words: {
				word: string;
				wordId: string;
				info: string;
			}[];
			hintText: string;
			iconUrl: string;
		}
	][];
	/**话题 */
	textExtra: [];
	video: {
		/** 视频宽度 */
		width: number;
		/** 视频高度 */
		height: number;
		/** 视频分辨率 */
		ratio: string;
		/** 视频时长（单位：毫秒） */
		duration: number;
		/** 视频大小（单位：字节） */
		dataSize: number;
		uri: string;
		playAddr: {
			src: string;
		}[];
		/** 视频播放地址大小 */
		playAddrSize: number;
		playAddrFileHash: string;
		playApi: string;
		playAddrH265: {
			src: string;
		}[];
		/** 视频播放地址大小 */
		playAddrH265Size: number;
		playAddrH265FileHash: string;
		playApiH265: string;
		bitRateList: {
			uri: string;
			dataSize: number;
			width: number;
			height: number;
			playAddr: {
				src: string;
			}[];
			playApi: string;
			isH265: number;
			qualityType: number;
			bitRate: number;
			videoFormat: string;
			gearName: string;
			fps: number;
			playerAccessKey: string;
			featureId: string;
			format: string;
			fileId: string;
			pktOffsetMap: {
				time: number;
				offset: number;
			}[];
			realBitrate: number;
		}[];
		bitRateAudioList: {
			realBitrate: number;
			audioQuality: number;
			bitrate: number;
			codecType: string;
			fileHash: string;
			fileId: string;
			logoType: string;
			mediaType: string;
			quality: string;
			size: number;
			qualityDesc: string;
			urlList: {
				src: string;
			}[];
			indexRange: string;
			initRange: string;
			checkInfo: string;
			firstSegmentRange: string;
		}[];
		/** 视频封面 */
		cover: string;
		/** 视频封面url数组 */
		coverUrlList: string[];
		/** 视频封面uri */
		dynamicCover: string;
		/** 视频封面uri */
		coverUri: string;
		/** 原始封面 */
		originCover: string;
		/** 原始封面 */
		rawCover: string;
		/** 原始封面url数组 */
		originCoverUrlList: string[];
		/** 高斯模糊封面 */
		gaussianCover: string;
		meta: {};
		bigThumbs: {
			duration: number;
			fext: string;
			img_num: number;
			img_url: string[];
			img_urls: string[];
			img_x_len: number;
			img_x_size: number;
			img_y_len: number;
			img_y_size: number;
			interval: number;
			uri: string;
			uris: string[];
		}[];
		videoModel: null;
	};
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

/** 抖音视频的api接口的awemeInfo对象信息 */
export type DouYinVideoNetWorkAwemeInfo = {
	author: {
		nickname: string;
		uid: string;
		desc: string;
		sec_uid: string;
	};
	statistics: {
		admire_count: number;
		collect_count: number;
		comment_count: number;
		digg_count: number;
		play_count: number;
		share_count: number;
	};
	risk_infos: {
		content: string;
		icon_url: string;
		risk_sink: boolean;
		type: number;
		vote: boolean;
		warn: boolean;
		warn_level: number;
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
export class DouYinVideoFilterBase {
	$data = {
		dislike_request_queue: <string[]>[],
	};
	/**
	 * 解析awemeInfo转为规则过滤的字典
	 * @param awemeInfo
	 * @param showLog 是否显示日志输出
	 */
	parseAwemeInfoDictData(
		awemeInfo: DouYinVideoAwemeInfo,
		showLog: boolean = false
	): DouYinVideoHandlerInfo {
		/** 视频作者信息 */
		let authorInfo =
			awemeInfo?.["authorInfo"] ||
			// @ts-ignore
			awemeInfo?.["author"];
		/** 视频作者名字 */
		let nickname: string = authorInfo?.["nickname"]?.toString();
		/** 视频作者uid */
		let uid: string = authorInfo?.["uid"]?.toString();
		/** 视频描述 */
		let desc: string = awemeInfo?.["desc"]?.toString();
		/** 音乐专辑 */
		let musicAlbum: string = awemeInfo?.["music"]?.["album"];
		/** 音乐作者 */
		let musicAuthor: string = awemeInfo?.["music"]?.["author"];
		/** 音乐标题 */
		let musicTitle: string = awemeInfo?.["music"]?.["title"];
		/** 收藏数量 */
		let collectCount: number =
			awemeInfo?.["stats"]?.["collectCount"] ||
			// @ts-ignore
			awemeInfo?.["statistics"]?.["collect_count"];
		/** 评论数量 */
		let commentCount: number =
			awemeInfo?.["stats"]?.["commentCount"] ||
			// @ts-ignore
			awemeInfo?.["statistics"]?.["comment_count"];
		/** 点赞数量 */
		let diggCount: number =
			awemeInfo?.["stats"]?.["diggCount"] ||
			// @ts-ignore
			awemeInfo?.["statistics"]?.["digg_count"];
		/** 分享数量 */
		let shareCount: number =
			awemeInfo?.["stats"]?.["shareCount"] ||
			// @ts-ignore
			awemeInfo?.["statistics"]?.["share_count"];
		/** 视频时长 */
		let duration: number | undefined = awemeInfo?.["video"]?.["duration"];
		let textExtraInstance: any[] =
			// @ts-ignore
			awemeInfo?.["textExtra"] || awemeInfo?.["text_extra"];
		/** 视频标签 */
		let textExtra: string[] = [];
		/** 是否是直播间 */
		let isLive: boolean = false;
		/** 是否是广告 */
		let isAds: boolean = false;
		/** 是否是系列-短剧 */
		let isSeriesInfo: boolean = false;
		/** 是否是混合信息-合集、短剧 */
		let isMixInfo: boolean = false;
		/** 风险提示内容 */
		let riskInfoContent: string | undefined =
			awemeInfo?.["riskInfos"]?.content ||
			// @ts-ignore
			awemeInfo?.["risk_infos"]?.content;
		/** 系列名称 */
		let seriesInfoName: string | undefined = void 0;
		/** 系列内容类型 */
		let seriesInfoContentTypes: string[] = [];
		/** 是否是图文 */
		let isPicture: boolean =
			// @ts-ignore
			awemeInfo?.["aweme_type"] === 68;
		if (
			typeof textExtraInstance === "object" &&
			Array.isArray(textExtraInstance)
		) {
			textExtraInstance?.forEach((item) => {
				let tagName = item?.["hashtagName"] || item?.["hashtag_name"];
				if (typeof tagName === "string" && tagName.trim() != "") {
					textExtra.push(tagName);
				}
			});
		}
		/** 混合信息名称 */
		let mixInfoName: string | undefined = void 0;
		/** 混合信息描述 */
		let mixInfoDesc: string | undefined = void 0;
		/** 视频标签对象 */
		let videoTagInstance: any[] =
			// @ts-ignore
			awemeInfo?.["videoTag"] || awemeInfo?.["video_tag"];
		/** 视频标签 */
		let videoTag: string[] = [];
		/** 视频标签的id */
		let videoTagId: string[] = [];
		/** 视频id */
		let awemeId =
			// @ts-ignore
			awemeInfo?.["aweme_id"] || awemeInfo?.["awemeId"];

		if (
			typeof videoTagInstance === "object" &&
			Array.isArray(videoTagInstance)
		) {
			videoTagInstance.forEach((item) => {
				let tagName = item?.["tagName"] || item?.["tag_name"];
				let tagId = item?.["tagId"] || item?.["tag_id"];
				if (typeof tagName === "string" && tagName.trim() != "") {
					videoTag.push(tagName);
				}
				if (typeof tagId === "number" || typeof tagId === "string") {
					let tagTdStr = tagId.toString();
					if (tagTdStr.trim() != "" && tagTdStr != "0") {
						videoTagId.push(tagTdStr);
					}
				}
			});
		}

		if (
			typeof awemeInfo["cellRoom"] === "object" ||
			// @ts-ignore
			typeof awemeInfo["cell_room"] === "object"
		) {
			isLive = true;
			if (showLog) {
				log.success("直播间：cellRoom is not null");
			}
		}

		if (
			awemeInfo["isAds"] ||
			// @ts-ignore
			awemeInfo["is_ads"]
		) {
			isAds = true;
			if (showLog) {
				log.success("广告：isAds is true");
			}
		} else if (
			(typeof awemeInfo["rawAdData"] === "string" &&
				utils.isNotNull(awemeInfo["rawAdData"])) ||
			// @ts-ignore
			(typeof awemeInfo["raw_ad_data"] === "string" &&
				// @ts-ignore
				utils.isNotNull(awemeInfo["raw_ad_data"]))
		) {
			isAds = true;
			if (showLog) {
				log.success("广告：rawAdData is not null");
			}
		} else if (awemeInfo["webRawData"]) {
			if (awemeInfo["webRawData"]?.["brandAd"]?.["is_ad"]) {
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
			//  @ts-ignore
		} else if (awemeInfo["web_raw_data"]) {
			//  @ts-ignore
			if (typeof awemeInfo["web_raw_data"] === "string") {
				// 暂无测试用例
			}
		}

		// 如果风险提示内容是空的，赋值为undefined
		if (
			(typeof riskInfoContent === "string" && riskInfoContent.trim() === "") ||
			typeof riskInfoContent !== "string"
		) {
			riskInfoContent = void 0;
		}
		/** 短剧信息 */
		let series_info =
			awemeInfo?.["seriesInfo"] ||
			// @ts-ignore
			awemeInfo?.["series_info"];
		if (typeof series_info === "object" && series_info != null) {
			isSeriesInfo = true;
			seriesInfoName =
				series_info?.["seriesName"] ||
				// @ts-ignore
				series_info?.["series_name"];
			let series_content_types =
				series_info?.["seriesContentTypes"] ||
				// @ts-ignore
				series_info?.["series_content_types"];
			if (Array.isArray(series_content_types)) {
				series_content_types.forEach((it) => {
					let seriesInfoName = it["name"];
					seriesInfoContentTypes.push(seriesInfoName);
				});
			}
		}
		/** 混合信息 */
		let mixInfo =
			awemeInfo?.["mixInfo"] ||
			// @ts-ignore
			awemeInfo?.["mix_info"];
		if (typeof mixInfo === "object" && utils.isNotNull(mixInfo)) {
			mixInfoName = mixInfo?.["mixName"] || mixInfo?.["mix_name"];
			mixInfoDesc = mixInfo?.["desc"];
		}
		// 判断是否是图文
		// 如果是图文，那视频时长则需设置为空
		if (isPicture) {
			duration = void 0;
		}

		/** 建议关键词 */
		let suggestWord: string[] = [];

		let suggestWords =
			// @ts-ignore
			awemeInfo?.["suggest_words"] ||
			// @ts-ignore
			awemeInfo?.["suggest_words"]?.["suggest_words"] ||
			awemeInfo?.["suggestWords"];
		if (Array.isArray(suggestWords)) {
			suggestWords.forEach((suggestWordItem) => {
				let words = suggestWordItem?.["words"];
				if (Array.isArray(words)) {
					words.forEach((wordItem) => {
						let word = wordItem?.["word"];
						if (typeof word === "string" && word.trim() !== "") {
							suggestWord.push(word);
						}
					});
				}
			});
		}
		// 去重
		suggestWord = [...new Set(suggestWord)];

		let authorCustomVerify =
			// @ts-ignore
			awemeInfo?.["author"]?.["custom_verify"] ||
			// @ts-ignore
			awemeInfo?.["authorInfo"]?.["customVerify"] ||
			"";

		/** 作者的企业认证信息 */
		let authorEnterpriseVerifyReason =
			// @ts-ignore
			awemeInfo?.["author"]?.["enterprise_verify_reason"] ||
			// @ts-ignore
			awemeInfo?.["authorInfo"]?.["enterpriseVerifyReason"] ||
			"";

		return {
			awemeId,
			nickname,
			uid,
			desc,
			textExtra,
			videoTag,
			videoTagId,
			suggestWord,
			musicAlbum,
			musicAuthor,
			musicTitle,
			authorCustomVerify,
			authorEnterpriseVerifyReason,
			riskInfoContent,
			seriesInfoName,
			seriesInfoContentTypes,
			mixInfoName,
			mixInfoDesc,
			collectCount,
			commentCount,
			diggCount,
			shareCount,
			duration,
			isLive,
			isAds,
			isSeriesInfo,
			isMixInfo,
			isPicture,
		};
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
		} else if (typeof details.videoInfoValue === "object") {
			if (Array.isArray(details.videoInfoValue)) {
				/* awemeInfo的值是字符串数组 */
				/* 使用自定义规则的值进行遍历匹配 */
				let findValue = details.videoInfoValue.find((awemeInfoDictValue) => {
					if (
						typeof awemeInfoDictValue === "string" &&
						details.ruleValue != null
					) {
						return Boolean(awemeInfoDictValue.match(details.ruleValue));
					} else {
						return false;
					}
				});
				if (findValue) {
					return true;
				}
			}
		} else if (typeof details.videoInfoValue === "number") {
			if (typeof details.ruleValue === "string") {
				/* awemeInfo的值是数字，用于比较 */
				/* 自定义规则的值是数字，用于比较 */
				let ruleValue = details.ruleValue.trim();
				let compareNumberMatch = ruleValue.match(/(\d+)/);
				if (!compareNumberMatch) {
					log.warn("过滤器-解析比较大小的数字失败: ", details);
					return false;
				}
				let compareNumber = Number(compareNumberMatch[1]);
				// tag的值是数字，用于比较
				if (ruleValue.startsWith(">")) {
					if (ruleValue.startsWith(">=")) {
						// >=
						if (details.videoInfoValue >= compareNumber) {
							return true;
						}
					} else {
						// >
						if (details.videoInfoValue > compareNumber) {
							return true;
						}
					}
				} else if (ruleValue.startsWith("<")) {
					if (ruleValue.startsWith("<=")) {
						// <=
						if (details.videoInfoValue <= compareNumber) {
							return true;
						}
					} else {
						// <
						if (details.videoInfoValue < compareNumber) {
							return true;
						}
					}
				} else if (ruleValue.startsWith("=")) {
					// =
					if (details.videoInfoValue === compareNumber) {
						return true;
					}
				} else {
					// 未经允许的比较符号
					log.warn("视频过滤器-未经允许的比较符号: ", details);
					return false;
				}
			}
		} else if (typeof details.videoInfoValue === "boolean") {
			if (typeof details.ruleValue === "string") {
				/* awemeInfo的值是boolean */
				let trimRuleValue = details.ruleValue.trim();
				return details.videoInfoValue.toString() === trimRuleValue;
			}
		}
		return false;
	}
	/**
	 * 检测视频是否可以屏蔽，可以屏蔽返回true
	 * @param rule 规则
	 * @param awemeInfo 视频信息结构
	 */
	checkAwemeInfoIsFilter(
		rule: DouYinVideoFilterOption[],
		awemeInfo: DouYinVideoAwemeInfo
	) {
		/** 对视频信息进行解析出需要的字典信息 */
		let transformAwemeInfo = this.parseAwemeInfoDictData(awemeInfo);
		let flag = false;
		let matchedFilterOption: DouYinVideoFilterOption | null = null;
		outerLoop: for (let index = 0; index < rule.length; index++) {
			const filterOption = rule[index];
			const ruleNameList = Array.isArray(filterOption.data.ruleName)
				? filterOption.data.ruleName
				: [filterOption.data.ruleName];
			for (
				let ruleNameIndex = 0;
				ruleNameIndex < ruleNameList.length;
				ruleNameIndex++
			) {
				// 属性名
				const ruleName = ruleNameList[ruleNameIndex];
				if (!Reflect.has(transformAwemeInfo, ruleName)) {
					continue;
				}
				/** 解析出的标签的名字 */
				let tagKey = ruleName;
				/** 解析出的标签的值 */
				let tagValue =
					transformAwemeInfo[tagKey as keyof typeof transformAwemeInfo];
				/** 配置 */
				let details = {
					videoInfoKey: tagKey,
					videoInfoValue: tagValue,
					ruleKey: filterOption.data.ruleName,
					ruleValue: filterOption.data.ruleValue,
				} as CheckRuleDetail;
				flag = this.checkFilterWithRule(details);
				if (flag) {
					if (
						Array.isArray(filterOption.dynamicData) &&
						filterOption.dynamicData.length
					) {
						// & 动态规则
						let dynamicDetailsList: CheckRuleDetail[] = [];
						for (
							let dynamicIndex = 0;
							dynamicIndex < filterOption.dynamicData.length;
							dynamicIndex++
						) {
							const dynamicOption = filterOption.dynamicData[dynamicIndex];
							/** 解析出的标签的名字 */
							let dynamicTagKey = dynamicOption.ruleName;
							/** 解析出的标签的值 */
							let dynamicTagValue =
								transformAwemeInfo[
									dynamicTagKey as keyof typeof transformAwemeInfo
								];
							/** 配置 */
							let dynamicDetails = {
								videoInfoKey: dynamicTagKey,
								videoInfoValue: dynamicTagValue,
								ruleKey: dynamicOption.ruleName,
								ruleValue: dynamicOption.ruleValue,
							} as CheckRuleDetail;
							dynamicDetailsList.push(dynamicDetails);
							let dynamicCheckFlag = this.checkFilterWithRule(dynamicDetails);
							flag = flag && dynamicCheckFlag;
							if (!flag) {
								// 多组的话有一个不成立就退出
								break;
							}
						}
						if (flag) {
							log.success([
								`视频过滤器-多组 ==> ${filterOption.name}`,
								transformAwemeInfo,
								details,
								dynamicDetailsList,
								awemeInfo,
								filterOption,
							]);
						}
					} else {
						log.success([
							`视频过滤器 ==> ${filterOption.name}`,
							transformAwemeInfo,
							details,
							awemeInfo,
							filterOption,
						]);
					}
				}
				if (flag) {
					// 存在命中屏蔽规则
					// 推出循环
					matchedFilterOption = filterOption;
					break outerLoop;
				}
			}
		}

		return {
			/** 是否允许过滤 */
			isFilter: flag,
			/** 命中的过滤规则 */
			matchedFilterOption: matchedFilterOption,
			/** 解析出的视频信息 */
			transformAwemeInfo: transformAwemeInfo,
			/** 原始视频信息 */
			awemeInfo: awemeInfo,
		};
	}
	/**
	 * 发送请求-不感兴趣
	 * @param matchedFilterOption 命中的规则
	 * @param awemeInfo 视频信息结构
	 */
	async sendDislikeVideo(
		matchedFilterOption: DouYinVideoFilterOption,
		awemeInfo: DouYinVideoAwemeInfo
	) {
		// if (!matchedFilterOption) {
		// 	return;
		// }
		// if (!matchedFilterOption.data.autoSendDisLikeRequest) {
		// 	// 未开启发送不感兴趣的请求
		// 	return;
		// }
		// let webid = PopsPanel.getValue<string>("dy-webid");
		// if (typeof webid !== "string") {
		// 	return;
		// }
		// if (utils.isNull(webid)) {
		// 	return;
		// }
		// /** 对视频信息进行解析出需要的字典信息 */
		// let transformAwemeInfo = this.parseAwemeInfoDictData(awemeInfo);
		// if (transformAwemeInfo.isLive) {
		// 	// 不对广告进行处理
		// 	return;
		// }
		// if (transformAwemeInfo.isAds) {
		// 	// 不对直播进行处理
		// 	return;
		// }
		// let awemeId = transformAwemeInfo.awemeId;
		// if (utils.isNull(awemeId)) {
		// 	return;
		// }
		// this.concurrencyAsyncQueue.enqueue(async () => {
		// 	await DouYinAwemeApi.dislike(awemeId, webid);
		// });
	}
	/**
	 * 移除视频
	 */
	removeAweme(videoList: any[], deleteIndex: number): void;
	removeAweme($video: HTMLElement): void;
	removeAweme(...args: any[]) {
		if (args.length === 1) {
			let $video = args[0];
			if ($video != null && $video instanceof HTMLElement) {
				$video.remove();
			}
		} else if (args.length === 2) {
			let videoList = args[0];
			let deleteIndex = args[1];
			if (typeof deleteIndex === "number") {
				let item = videoList[deleteIndex];
				if (item != null && item instanceof Element) {
					item?.remove();
				}
				videoList.splice(deleteIndex, 1);
			}
		}
	}
}
