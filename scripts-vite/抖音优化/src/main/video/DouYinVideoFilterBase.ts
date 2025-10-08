import { httpx, log, pops, utils } from "@/env";
import type { DouYinVideoFilterRuleDynamicOption, DouYinVideoFilterRule } from "./DouYinVideoFilter";
import type { DouYinVideoAwemeInfo, DouYinVideoHandlerInfo } from "./DouYinVideoType";
import DOMUtils from "@whitesev/domutils";
import Qmsg from "qmsg";
import { unsafeWindow } from "ViteGM";

type FilterRuleCheckConfig = {
  /** 视频信息的键（awemeInfo） */
  videoInfoKey: string;
  /** 视频信息的值（awemeInfo） */
  videoInfoValue: any;
  /** 自定义规则的键 */
  ruleKey: string;
  /** 自定义规则的值 */
  ruleValue: RegExp | string | undefined | null;
  /** 对awemeInfo转换后的信息 */
  transformAwemeInfo: DouYinVideoHandlerInfo;
  /** 当前的规则 */
  rule: DouYinVideoFilterRule;
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
  parseAwemeInfoDictData(awemeInfo: DouYinVideoAwemeInfo, showLog: boolean = false): DouYinVideoHandlerInfo {
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
    if (typeof textExtraInstance === "object" && Array.isArray(textExtraInstance)) {
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
    /** 直播间房间号 */
    let liveStreamRoomId: string | undefined = void 0;
    /** 直播间标题 */
    let liveStreamRoomTitle: string | undefined = void 0;
    /** 直播间的主播昵称 */
    let liveStreamNickName: string | undefined = void 0;
    /** 直播间人数 */
    let liveStreamRoomUserCount: number | undefined = void 0;
    /** 直播间标签？ */
    let liveStreamRoomDynamicSpliceLabel: string | undefined = void 0;
    /** 视频流的播放信息 */
    let videoBitRateList: DouYinVideoHandlerInfo["videoBitRateList"] = [];
    /** 是否是产品（付费视频） */
    let isProduct: boolean = false;
    /** 产品id */
    let productId: string | undefined = void 0;
    /** 产品标题（例如：付费短视频） */
    let productTitle: string | undefined = void 0;

    if (typeof videoTagInstance === "object" && Array.isArray(videoTagInstance)) {
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

    const cell_room =
      awemeInfo?.["cellRoom"] ||
      // @ts-ignore
      awemeInfo?.["cell_room"];
    if (typeof cell_room === "object" && cell_room != null) {
      isLive = true;
      if (showLog) {
        log.success("直播间：cellRoom is not null");
      }
      let rawDataJSON = cell_room["rawdata"];
      if (typeof rawDataJSON === "string") {
        rawDataJSON = utils.toJSON(rawDataJSON);
      }
      if (typeof rawDataJSON === "object" && rawDataJSON != null) {
        liveStreamRoomId = rawDataJSON?.["owner"]?.["web_rid"];
        liveStreamRoomTitle = rawDataJSON?.["title"];
        liveStreamNickName = rawDataJSON?.["owner"]?.["nickname"];
        liveStreamRoomUserCount = rawDataJSON?.["user_count"];
        liveStreamRoomDynamicSpliceLabel = rawDataJSON?.["dynamic_label"]?.["splice_label"]?.["text"];

        if (typeof liveStreamRoomId !== "string") {
          liveStreamRoomId = void 0;
        }
        if (typeof liveStreamRoomTitle !== "string") {
          liveStreamRoomTitle = void 0;
        }
        if (typeof liveStreamNickName !== "string") {
          liveStreamNickName = void 0;
        }
        if (typeof liveStreamRoomUserCount !== "number") {
          liveStreamRoomUserCount = void 0;
        }
        if (typeof liveStreamRoomDynamicSpliceLabel !== "string") {
          liveStreamRoomDynamicSpliceLabel = void 0;
        }
      }
    }
    // 判断是否是广告
    isAds = [
      () => {
        if (
          awemeInfo["isAds"] ||
          // @ts-ignore
          awemeInfo["is_ads"]
        ) {
          showLog && log.success("广告：isAds is true");
          return true;
        }
      },
      () => {
        if (
          (typeof awemeInfo["rawAdData"] === "string" && utils.isNotNull(awemeInfo["rawAdData"])) ||
          // @ts-ignore
          (typeof awemeInfo["raw_ad_data"] === "string" &&
            // @ts-ignore
            utils.isNotNull(awemeInfo["raw_ad_data"]))
        ) {
          showLog && log.success("广告：rawAdData is not null");
          return true;
        }
      },
      () => {
        if (awemeInfo["webRawData"]) {
          if (awemeInfo["webRawData"]?.["brandAd"]?.["is_ad"]) {
            showLog && log.success("广告：webRawData.brandAd.is_ad is 1");
            return true;
          }
          if (awemeInfo["webRawData"]?.["insertInfo"]?.["is_ad"]) {
            showLog && log.success("广告：webRawData.insertInfo.is_ad is true");
            return true;
          }
        }
      },
      () => {
        //  @ts-ignore
        if (typeof awemeInfo?.["web_raw_data"] === "string") {
          //  @ts-ignore
          const webRawData = utils.toJSON(awemeInfo["webRawData"]);
          if (typeof webRawData?.["brand_ad"] === "string") {
            const brandAd = utils.toJSON(webRawData["brand_ad"]);
            if (brandAd?.["is_ad"]) {
              showLog && log.success("广告：web_raw_data.brand_ad.is_ad is 1");
              return true;
            }
          }
        }
      },
    ].some((it) => it());

    // 如果风险提示内容是空的，赋值为undefined
    if ((typeof riskInfoContent === "string" && riskInfoContent.trim() === "") || typeof riskInfoContent !== "string") {
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

    /** 作者的认证信息 */
    let authorAccountCertInfo = "";
    let authorAccountCertInfoInsStr =
      // @ts-ignore
      awemeInfo?.["author"]?.["account_cert_info"];
    if (typeof authorAccountCertInfoInsStr === "string") {
      let authorAccountCertInfoJSON = utils.toJSON(authorAccountCertInfoInsStr);
      if (typeof authorAccountCertInfoJSON["label_text"] === "string") {
        authorAccountCertInfo = authorAccountCertInfoJSON["label_text"];
      }
    } else {
      if (typeof awemeInfo?.["authorInfo"]?.["accountCertInfo"]?.["labelText"] === "string") {
        authorAccountCertInfo = awemeInfo?.["authorInfo"]?.["accountCertInfo"]?.["labelText"];
      }
    }

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

    /** 产品信息 */
    const entertainmentProductInfo =
      awemeInfo?.["entertainmentProductInfo"] ||
      // @ts-ignore
      awemeInfo?.["entertainment_product_info"];
    if (typeof entertainmentProductInfo === "object" && entertainmentProductInfo != null) {
      if (typeof entertainmentProductInfo.product_id === "number") {
        productId = entertainmentProductInfo.product_id.toString();
      }
      if (typeof entertainmentProductInfo.title === "string") {
        productTitle = entertainmentProductInfo.title;
      }
      if (
        typeof entertainmentProductInfo?.["buy_schema"] === "string" ||
        typeof entertainmentProductInfo?.["buy_panel_schema"] === "string"
      ) {
        isProduct = true;
      }
    }

    const videoBitRateListData =
      awemeInfo?.["video"]?.["bitRateList"] ||
      // @ts-ignore
      awemeInfo?.["video"]?.["bit_rate"];
    if (Array.isArray(videoBitRateListData)) {
      videoBitRateListData.forEach((item) => {
        const videoBitRateListItem = {} as { [key: string]: any };
        const bitRate =
          item?.["bitRate"] ||
          // @ts-ignore
          item?.["bit_rate"];
        if (typeof bitRate === "number") {
          videoBitRateListItem["bitRate"] = bitRate;
        }
        const dataSize =
          item?.["dataSize"] ||
          // @ts-ignore
          item?.["play_addr"]?.["data_size"];
        if (typeof dataSize === "number") {
          videoBitRateListItem["dataSize"] = dataSize;
        }
        const format = item?.["format"];
        if (typeof format === "string") {
          videoBitRateListItem["format"] = format;
        }
        const isH265 =
          item?.["isH265"] ||
          // @ts-ignore
          item?.["is_h265"];
        if (typeof isH265 === "number") {
          videoBitRateListItem["isH265"] = isH265;
        }
        const fps =
          item?.["fps"] ||
          // @ts-ignore
          item?.["FPS"];
        if (typeof fps === "number") {
          videoBitRateListItem["fps"] = fps;
        }
        const gearName =
          item?.["gearName"] ||
          // @ts-ignore
          item?.["gear_name"];
        if (typeof gearName === "string") {
          videoBitRateListItem["gearName"] = gearName;
        }
        const qualityType =
          item?.["qualityType"] ||
          // @ts-ignore
          item?.["quality_type"];
        if (typeof qualityType === "number") {
          videoBitRateListItem["qualityType"] = qualityType;
        }
        const width =
          item?.["width"] ||
          // @ts-ignore
          item?.["play_addr"]?.["width"];
        if (typeof width === "number") {
          videoBitRateListItem["width"] = width;
        }
        const height =
          item?.["height"] ||
          // @ts-ignore
          item?.["play_addr"]?.["height"];
        if (typeof height === "number") {
          videoBitRateListItem["height"] = height;
        }

        // 添加
        videoBitRateList.push(videoBitRateListItem);
      });

      // 去重
      videoBitRateList = [...new Set(videoBitRateList)];
    }

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
      authorAccountCertInfo,
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
      liveStreamRoomId,
      liveStreamRoomTitle,
      liveStreamNickName,
      liveStreamRoomUserCount,
      liveStreamRoomDynamicSpliceLabel,
      videoBitRateList,
      productId,
      productTitle,
      isLive,
      isAds,
      isSeriesInfo,
      isMixInfo,
      isPicture,
      isProduct,
    };
  }
  /**
   * 根据视频信息，判断是否需要屏蔽
   * @param config 校验信息
   * @param ruleDynamicOption 动态规则的配置信息
   */
  async checkFilterWithRule(
    config: FilterRuleCheckConfig,
    ruleDynamicOption: DouYinVideoFilterRuleDynamicOption
  ): Promise<boolean> {
    if (config.videoInfoValue == null) {
      // awemeInfo的值为空
      return false;
    }
    if (config.ruleValue == null) {
      // 自定义规则的值为空
      return false;
    }
    // 判断是否是使用自定义函数处理
    const isFunctionHandler = Boolean(ruleDynamicOption.isFunctionHandler);
    if (isFunctionHandler && typeof config.ruleValue === "string") {
      const handlerFunction = utils.createFunction("data", ruleDynamicOption.ruleValue, true).bind({
        utils: utils,
        DOMUtils: DOMUtils,
        httpx: httpx,
        Qmsg: Qmsg,
        pops: pops,
        log: log,
        window: window,
        unsafeWindow: unsafeWindow,
      });
      let handlerResult = await handlerFunction({
        ruleKey: config.ruleKey,
        transformAwemeInfo: config.transformAwemeInfo,
      });
      if (typeof handlerResult !== "boolean") {
        log.error(config, ruleDynamicOption);
        throw new Error("过滤器规则：函数返回值必须是true或false");
      }
      return handlerResult;
    }
    if (typeof config.videoInfoValue === "string") {
      /* awemeInfo的值是string */
      /* 使用自定义规则的值进行匹配 */
      if (Boolean(config.videoInfoValue.match(config.ruleValue))) {
        return true;
      }
    } else if (typeof config.videoInfoValue === "object") {
      if (Array.isArray(config.videoInfoValue)) {
        /* awemeInfo的值是string[] */
        /* 使用自定义规则的值进行遍历匹配 */
        let findValue = config.videoInfoValue.find((awemeInfoDictValue) => {
          if (typeof awemeInfoDictValue === "string" && config.ruleValue != null) {
            return Boolean(awemeInfoDictValue.match(config.ruleValue));
          } else {
            return false;
          }
        });
        if (findValue) {
          return true;
        }
      }
    } else if (typeof config.videoInfoValue === "number") {
      if (typeof config.ruleValue === "string") {
        /* awemeInfo的值是number类型，用于比较 */
        /* 自定义规则的值是number类型，用于比较 */
        let ruleValue = config.ruleValue.trim();
        let compareNumberMatch = ruleValue.match(/(\d+)/);
        if (!compareNumberMatch) {
          log.warn("过滤器-解析比较大小的数字失败: ", config);
          return false;
        }
        let compareNumber = Number(compareNumberMatch[1]);
        // tag的值是number类型，用于比较
        if (ruleValue.startsWith(">")) {
          if (ruleValue.startsWith(">=")) {
            // >=
            if (config.videoInfoValue >= compareNumber) {
              return true;
            }
          } else {
            // >
            if (config.videoInfoValue > compareNumber) {
              return true;
            }
          }
        } else if (ruleValue.startsWith("<")) {
          if (ruleValue.startsWith("<=")) {
            // <=
            if (config.videoInfoValue <= compareNumber) {
              return true;
            }
          } else {
            // <
            if (config.videoInfoValue < compareNumber) {
              return true;
            }
          }
        } else if (ruleValue.startsWith("=")) {
          // =
          if (config.videoInfoValue === compareNumber) {
            return true;
          }
        } else {
          // 未经允许的比较符号
          log.warn("视频过滤器-未经允许的比较符号: ", config);
          return false;
        }
      }
    } else if (typeof config.videoInfoValue === "boolean") {
      if (typeof config.ruleValue === "string") {
        /* awemeInfo的值是boolean */
        let trimRuleValue = config.ruleValue.trim();
        return config.videoInfoValue.toString() === trimRuleValue;
      }
    }
    return false;
  }
  /**
   * 检测视频是否可以屏蔽，可以屏蔽返回true
   * @param rules 规则
   * @param awemeInfo 视频信息结构
   * @param isQueryAllMatchedFilterRules 是否获取所有命中的规则，默认false
   */
  async checkAwemeInfoIsFilter<T extends boolean = false>(
    rules: DouYinVideoFilterRule[],
    awemeInfo: DouYinVideoAwemeInfo,
    isQueryAllMatchedFilterRules?: T
  ): Promise<{
    isFilter: boolean;
    matchedFilterRule: T extends true ? DouYinVideoFilterRule[] : DouYinVideoFilterRule | null;
    notMatchedFilterRule: T extends true ? DouYinVideoFilterRule[] : null;
    transformAwemeInfo: DouYinVideoHandlerInfo;
    awemeInfo: DouYinVideoAwemeInfo;
  }> {
    let transformAwemeInfo = this.parseAwemeInfoDictData(awemeInfo);
    let flag = false;
    let matchedFilterOption: DouYinVideoFilterRule | null = null;
    let matchedFilterOptionList: DouYinVideoFilterRule[] = [];
    let notMatchedFilterRule: DouYinVideoFilterRule[] = [];
    outerLoop: for (let index = 0; index < rules.length; index++) {
      const filterRule = rules[index];
      const ruleNameList = Array.isArray(filterRule.data.ruleName)
        ? filterRule.data.ruleName
        : [filterRule.data.ruleName];
      for (let ruleNameIndex = 0; ruleNameIndex < ruleNameList.length; ruleNameIndex++) {
        // 属性名
        const ruleName = ruleNameList[ruleNameIndex];
        if (!Reflect.has(transformAwemeInfo, ruleName)) {
          continue;
        }
        /** 解析出的标签的名字 */
        let tagKey = ruleName;
        /** 解析出的标签的值 */
        let tagValue = transformAwemeInfo[tagKey as keyof typeof transformAwemeInfo];
        /** 配置 */
        let details = {
          videoInfoKey: tagKey,
          videoInfoValue: tagValue,
          ruleKey: filterRule.data.ruleName,
          ruleValue: filterRule.data.ruleValue,
          transformAwemeInfo: transformAwemeInfo,
          rule: filterRule,
        } as FilterRuleCheckConfig;
        flag = await this.checkFilterWithRule(details, filterRule.data);
        if (flag) {
          if (Array.isArray(filterRule.dynamicData) && filterRule.dynamicData.length) {
            // & 动态规则
            let dynamicDetailsList: FilterRuleCheckConfig[] = [];
            for (let dynamicIndex = 0; dynamicIndex < filterRule.dynamicData.length; dynamicIndex++) {
              const dynamicOption = filterRule.dynamicData[dynamicIndex];
              /** 解析出的标签的名字 */
              let dynamicTagKey = dynamicOption.ruleName;
              /** 解析出的标签的值 */
              let dynamicTagValue = transformAwemeInfo[dynamicTagKey as keyof typeof transformAwemeInfo];
              /** 配置 */
              let dynamicDetails: FilterRuleCheckConfig = {
                videoInfoKey: dynamicTagKey as string,
                videoInfoValue: dynamicTagValue,
                ruleKey: dynamicOption.ruleName as string,
                ruleValue: dynamicOption.ruleValue,
                transformAwemeInfo: transformAwemeInfo,
                rule: filterRule,
              };
              dynamicDetailsList.push(dynamicDetails);
              let dynamicCheckFlag = await this.checkFilterWithRule(dynamicDetails, dynamicOption);
              flag = flag && dynamicCheckFlag;
              if (!flag) {
                // 多组的话有一个不成立就退出
                break;
              }
            }
            if (flag) {
              log.success([
                `视频过滤器-多组 ==> ${filterRule.name}`,
                transformAwemeInfo,
                details,
                dynamicDetailsList,
                awemeInfo,
                filterRule,
              ]);
            }
          } else {
            log.success([`视频过滤器 ==> ${filterRule.name}`, transformAwemeInfo, details, awemeInfo, filterRule]);
          }
        }
        if (flag) {
          // 存在命中屏蔽规则
          if (isQueryAllMatchedFilterRules) {
            // 获取所有命中的规则
            matchedFilterOptionList.push(filterRule);
          } else {
            // 退出循环
            matchedFilterOption = filterRule;
            break outerLoop;
          }
        } else {
          if (isQueryAllMatchedFilterRules) {
            // 获取所有非命中的规则
            notMatchedFilterRule.push(filterRule);
          }
        }
      }
    }

    return {
      /** 是否允许过滤 */
      isFilter: flag,
      /** 命中的过滤规则 */
      matchedFilterRule: isQueryAllMatchedFilterRules ? (matchedFilterOptionList as any) : matchedFilterOption,
      /** 未命中的过滤规则 */
      notMatchedFilterRule: isQueryAllMatchedFilterRules ? (notMatchedFilterRule as any) : null,
      /** 解析出的视频信息 */
      transformAwemeInfo: transformAwemeInfo,
      /** 原始视频信息 */
      awemeInfo: awemeInfo,
    };
  }
  /**
   * 发送请求-不感兴趣
   * @param rule 命中的规则
   * @param awemeInfo 视频信息结构
   */
  async sendDislikeVideo(rule: DouYinVideoFilterRule, awemeInfo: DouYinVideoAwemeInfo) {
    // if (!matchedFilterOption) {
    // 	return;
    // }
    // if (!matchedFilterOption.data.autoSendDisLikeRequest) {
    // 	// 未开启发送不感兴趣的请求
    // 	return;
    // }
    // let webid = Panel.getValue<string>("dy-webid");
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
