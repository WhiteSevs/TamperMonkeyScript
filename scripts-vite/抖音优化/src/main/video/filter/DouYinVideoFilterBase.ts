import { httpx, log, pops, utils } from "@/env";
import DOMUtils from "@whitesev/domutils";
import Qmsg from "qmsg";
import { unsafeWindow } from "ViteGM";
import type {
  DouYinVideoAwemeInfoWithDOM,
  DouYinVideoAwemeInfoWithNetWork,
  DouYinVideoConversionInfo,
} from "../../../../types/DouYinVideoType";
import type { DouYinVideoFilterRule, DouYinVideoFilterRuleDynamicOption } from "./DouYinVideoFilter";

type FilterRuleCheckConfig = {
  /** 视频信息的键（awemeInfo） */
  videoInfoKey: string;
  /** 视频信息的值（awemeInfo） */
  videoInfoValue: any;
  /** 自定义规则的键 */
  ruleKey: string;
  /** 自定义规则的值 */
  ruleValue: RegExp | string | undefined | null;
  /** 原始的awemeInfo */
  awemeInfo: any;
  /** 对awemeInfo转换后的信息 */
  transformAwemeInfo: DouYinVideoConversionInfo;
  /** 当前的规则 */
  rule: DouYinVideoFilterRule;
};

export class DouYinVideoFilterBase {
  $data = {
    dislike_request_queue: <string[]>[],
  };
  /**
   * 获取模板数据
   */
  getTemplateData(): DouYinVideoConversionInfo {
    return {
      isFollow: false,
      isLive: false,
      isAds: false,
      isSeriesInfo: false,
      isMixInfo: false,
      isPicture: false,
      isProduct: false,
      awemeId: void 0,
      nickname: void 0,
      createTime: void 0,
      uid: void 0,
      desc: void 0,
      textExtra: [],
      videoTag: [],
      videoTagId: [],
      suggestWord: [],
      musicAlbum: void 0,
      musicAuthor: void 0,
      musicDuration: void 0,
      musicTitle: void 0,
      musicUrl: void 0,
      musicBackUrlList: [],
      authorAccountCertInfo: "",
      authorCustomVerify: "",
      authorEnterpriseVerifyReason: "",
      riskInfoContent: void 0,
      seriesInfoName: void 0,
      seriesInfoContentTypes: [],
      mixInfoName: void 0,
      mixInfoDesc: void 0,
      collectCount: 0,
      commentCount: 0,
      diggCount: 0,
      shareCount: 0,
      duration: void 0,
      liveStreamRoomId: void 0,
      liveStreamRoomTitle: void 0,
      liveStreamNickName: void 0,
      liveStreamRoomUserCount: void 0,
      liveStreamRoomDynamicSpliceLabel: void 0,
      productId: void 0,
      productTitle: void 0,
      videoBitRateList: [],
      pictureList: [],
    };
  }
  /**
   * 解析awemeInfo转为规则过滤的字典
   * @param awemeInfo 视频信息结构
   * @param from awemeInfo是否来自页面上的，否则就是来自网络的
   * @param showLog 是否显示日志输出
   */
  parseAwemeInfoDictData(
    awemeInfo: DouYinVideoAwemeInfoWithDOM | DouYinVideoAwemeInfoWithNetWork,
    from: "dom" | "network",
    showLog: boolean = false
  ): DouYinVideoConversionInfo {
    const data = this.getTemplateData();

    if (from === "network") {
      // 从网络上获取的（主要）
      const awemeInfoWithNetWork = awemeInfo as DouYinVideoAwemeInfoWithNetWork;
      const authorInfo = awemeInfoWithNetWork?.author;
      const statistics = awemeInfoWithNetWork?.statistics;
      const video = awemeInfoWithNetWork?.video;
      data.nickname = String(authorInfo?.nickname ?? "");
      data.uid = String(authorInfo?.uid ?? "");
      data.desc = String(awemeInfoWithNetWork.desc ?? "");
      data.musicAlbum = awemeInfoWithNetWork?.music?.album;
      data.musicAuthor = awemeInfoWithNetWork?.music?.author;
      data.musicDuration = awemeInfoWithNetWork?.music?.duration ?? 0;
      data.musicTitle = awemeInfoWithNetWork?.music?.title;
      data.collectCount = statistics?.collect_count ?? 0;
      data.commentCount = statistics?.comment_count ?? 0;
      data.diggCount = statistics?.digg_count ?? 0;
      data.shareCount = statistics?.share_count ?? 0;
      data.duration = video?.duration;
      data.awemeId = awemeInfoWithNetWork.aweme_id;
      data.authorCustomVerify = authorInfo?.custom_verify || "";
      data.authorEnterpriseVerifyReason = authorInfo?.enterprise_verify_reason || "";
      data.isPicture = awemeInfoWithNetWork.aweme_type === 68;
      data.isFollow = Boolean(authorInfo?.follow_status);

      // 获取发布时间
      if (typeof awemeInfoWithNetWork.create_time === "number") {
        data.createTime = awemeInfoWithNetWork.create_time;
        if (data.createTime > 0 && data.createTime < 1000000000000) {
          data.createTime = data.createTime * 1000;
        }
      }

      // 判断是否是广告
      data.isAds = [
        () => {
          if (awemeInfoWithNetWork.is_ads) {
            showLog && log.success("广告: is_ads is true");
            return true;
          }
        },
        () => {
          if (
            typeof awemeInfoWithNetWork?.raw_ad_data === "string" &&
            utils.isNotNull(awemeInfoWithNetWork.raw_ad_data)
          ) {
            showLog && log.success("广告: raw_ad_data is not null");
            return true;
          }
        },
        () => {
          if (typeof awemeInfoWithNetWork?.web_raw_data === "string") {
            const web_raw_data = utils.toJSON<{
              brand_ad: string;
              recommend_score: {
                is_ad: number;
              };
            }>(awemeInfoWithNetWork?.web_raw_data);
            if (typeof web_raw_data?.brand_ad === "string") {
              const brand_ad = utils.toJSON<{
                is_ad: number;
              }>(web_raw_data.brand_ad);
              const is_ad = brand_ad?.is_ad;
              if (is_ad) {
                showLog && log.success("广告: web_raw_data.brand_ad.is_ad is " + is_ad);
                return true;
              }
            }
          }
        },
      ].some((it) => it());

      // 直播间
      if (typeof awemeInfoWithNetWork?.cell_room === "object" && awemeInfoWithNetWork?.cell_room != null) {
        data.isLive = true;
        showLog && log.success("直播间: cell_room is not null");
        let rawdata;
        if (typeof awemeInfoWithNetWork.cell_room.rawdata === "string") {
          rawdata = utils.toJSON<{
            // "id": number;
            id_str: string;
            // "status": number;
            title: string;
            user_count: number;
            owner: {
              // 头像信息
              avatar_thumb: {
                // 头像链接，但是这个链接参数有问题，需补充路径，即/aweme/
                uri: string;
                // 头像链接数组，建议这个，包含完整的https:...
                url_list: string[];
              };
              // 用户id？可能是
              id_str: string;
              sec_uid: string;
              // 直播间id（房间号）
              web_rid: string;
              // 用户名
              nickname: string;
            };
            dynamic_label: {
              splice_label: {
                text: string;
              };
            };
          }>(awemeInfoWithNetWork.cell_room.rawdata);
        }
        if (typeof rawdata == "object" && rawdata != null) {
          data.liveStreamRoomId = rawdata?.owner?.web_rid;
          data.liveStreamRoomTitle = rawdata?.title;
          data.liveStreamNickName = rawdata?.owner?.nickname;
          data.liveStreamRoomUserCount = rawdata?.user_count;
          data.liveStreamRoomDynamicSpliceLabel = rawdata?.dynamic_label?.splice_label?.text;

          if (typeof data.liveStreamRoomId !== "string") {
            data.liveStreamRoomId = void 0;
          }
          if (typeof data.liveStreamRoomTitle !== "string") {
            data.liveStreamRoomTitle = void 0;
          }
          if (typeof data.liveStreamNickName !== "string") {
            data.liveStreamNickName = void 0;
          }
          if (typeof data.liveStreamRoomUserCount !== "number") {
            data.liveStreamRoomUserCount = void 0;
          }
          if (typeof data.liveStreamRoomDynamicSpliceLabel !== "string") {
            data.liveStreamRoomDynamicSpliceLabel = void 0;
          }
        }
      }

      // 文案标签
      if (Array.isArray(awemeInfoWithNetWork?.text_extra)) {
        awemeInfoWithNetWork.text_extra.forEach((item) => {
          const tagName = item?.hashtag_name;
          if (typeof tagName === "string" && tagName.trim() != "") {
            data.textExtra.push(tagName);
          }
        });
      }

      // 视频标签
      if (Array.isArray(awemeInfoWithNetWork.video_tag)) {
        awemeInfoWithNetWork.video_tag.forEach((item) => {
          const tagName = item?.tag_name;
          const tagId = item?.tag_id;
          if (typeof tagName === "string" && tagName.trim() != "") {
            data.videoTag.push(tagName);
          }
          if (typeof tagId === "number" || typeof tagId === "string") {
            const tagTdStr = tagId.toString();
            if (tagTdStr.trim() != "" && tagTdStr != "0") {
              data.videoTagId.push(tagTdStr);
            }
          }
        });
      }

      // 如果风险提示内容是空的，赋值为undefined
      const risk_infos = awemeInfoWithNetWork?.risk_infos;
      if (
        (typeof risk_infos?.content === "string" && risk_infos?.content.trim() === "") ||
        typeof risk_infos?.content !== "string"
      ) {
        data.riskInfoContent = void 0;
      } else {
        data.riskInfoContent = risk_infos?.content;
      }

      /** 短剧信息 */
      const series_info = awemeInfoWithNetWork?.series_info;
      if (typeof series_info === "object" && series_info != null) {
        if (typeof series_info?.series_name === "string") {
          data.seriesInfoName = series_info?.series_name;
        }
        const series_content_types = series_info?.series_content_types;
        if (Array.isArray(series_content_types)) {
          series_content_types.forEach((it) => {
            const __seriesInfoName = it.name;
            data.seriesInfoContentTypes.push(__seriesInfoName);
          });
        }
        if (data.seriesInfoName != null && series_content_types != null) {
          data.isSeriesInfo = true;
        }
      }

      /** 混合信息 */
      const mixInfo = awemeInfoWithNetWork?.mix_info;
      if (typeof mixInfo === "object" && utils.isNotNull(mixInfo)) {
        data.mixInfoName = mixInfo?.mix_name;
        data.mixInfoDesc = mixInfo?.desc;
      }

      /**
       * 解析bitRateList
       */
      const parseVideoBitRateList = (
        bitRateList: NonNullable<DouYinVideoAwemeInfoWithNetWork["video"]>["bit_rate"],
        cover: string
      ) => {
        let data: DouYinVideoConversionInfo["videoBitRateList"] = [];
        if (!Array.isArray(bitRateList)) return data;
        bitRateList.forEach((item) => {
          let url = "";
          const backUrl: string[] = [];
          const url_list = item?.play_addr?.url_list;
          if (
            Array.isArray(url_list) &&
            url_list.length > 0 &&
            typeof url_list[0] === "string" &&
            utils.isNotNull(url_list[0])
          ) {
            url = url_list[0];
          }
          if (
            Array.isArray(url_list) &&
            url_list.length > 0 &&
            typeof url_list[0] === "string" &&
            utils.isNotNull(url_list[0])
          ) {
            backUrl.push(
              ...url_list
                .map((it) => {
                  if (typeof it !== "string") return;
                  if (it === url) return;
                  return it;
                })
                .filter((it) => it != null)
            );
          } else {
            backUrl.length = 0;
          }

          const videoBitRateListItem: (typeof data)[0] = {
            cover,
            bitRate: item.bit_rate,
            dataSize: item?.play_addr?.data_size ?? 0,
            format: item.format,
            isH265: item.is_h265,
            fps: item.FPS,
            gearName: item.gear_name,
            qualityType: item.quality_type,
            width: item?.play_addr?.width,
            height: item?.play_addr?.height,
            url: url!,
            backUrl,
          };
          data.push(videoBitRateListItem);
        });
        // 去重
        for (let index = 0; index < data.length; index++) {
          const item = data[index];
          for (let index2 = 0; index2 < data.length; index2++) {
            // 去除后面重复的
            const item2 = data[index2];
            if (item === item2) {
              continue;
            }
            if (item.width === item2.width && item.height === item2.height && item.fps === item2.fps) {
              // 宽度、高度、帧率相同
              // 这时候去掉码率小的
              if (item.dataSize > item2.dataSize) {
                data.splice(index2, 1);
                index2--;
                if (index > index2) {
                  index--;
                }
              }
            }
          }
        }
        // 处理一下http的protocol，如果是http的话，点击会跳转到播放而不是下载
        data = data.map((item) => {
          if (item.url.startsWith("http:")) {
            item.url = item.url.replace("http:", "");
          }
          return item;
        });
        // 按视频大小排序（降序）
        utils.sortListByProperty(data, (it) => it.width!);
        return data;
      };

      // 判断是否是图文
      if (data.isPicture) {
        // 视频时长则需设置为空
        data.duration = void 0;
        const images = awemeInfoWithNetWork?.images;
        if (Array.isArray(images)) {
          data.pictureList = images.map((it) => {
            let url;
            if (Array.isArray(it.url_list) && it.url_list.length) {
              // 无水印图片（默认）
              url = it.url_list[0];
            } else if (Array.isArray(it.download_url_list) && it.download_url_list.length) {
              // 有水印图片
              url = it.download_url_list[0];
            }
            const coverUrlList: string[] | undefined = it?.video?.cover?.url_list;
            let cover = url;
            if (
              coverUrlList != null &&
              Array.isArray(coverUrlList) &&
              typeof coverUrlList[0] === "string" &&
              utils.isNotNull(coverUrlList[0])
            ) {
              cover = coverUrlList[0];
            }
            const videoBitRateListData = it?.video?.bit_rate;
            const videoBitRateList: (typeof data.pictureList)["0"]["videoBitRateList"] = parseVideoBitRateList(
              videoBitRateListData!,
              cover!
            );

            return {
              width: it.width,
              height: it.height,
              url: url,
              videoBitRateList: videoBitRateList,
            } as (typeof data.pictureList)[0];
          });
        }
      }

      const suggestWords = awemeInfoWithNetWork?.["suggest_words"]?.suggest_words;
      if (Array.isArray(suggestWords)) {
        suggestWords.forEach((item) => {
          let words = item?.words;
          if (Array.isArray(words)) {
            words.forEach((wordItem) => {
              let word = wordItem?.word;
              if (typeof word === "string" && word.trim() !== "") {
                data.suggestWord.push(word);
              }
            });
          }
        });
      }
      // 去重
      data.suggestWord = [...new Set(data.suggestWord)];

      const authorAccountCertInfoInsStr = authorInfo?.account_cert_info;
      if (typeof authorAccountCertInfoInsStr === "string") {
        const authorAccountCertInfoJSON = utils.toJSON<{
          label_text: string;
          label_style: number;
          is_biz_account: number;
        }>(authorAccountCertInfoInsStr);
        if (typeof authorAccountCertInfoJSON.label_text === "string") {
          data.authorAccountCertInfo = authorAccountCertInfoJSON.label_text;
        }
      }

      /** 产品信息 */
      const entertainmentProductInfo = awemeInfoWithNetWork?.entertainment_product_info;
      if (typeof entertainmentProductInfo === "object" && entertainmentProductInfo != null) {
        if (typeof entertainmentProductInfo.product_id === "number") {
          data.productId = entertainmentProductInfo.product_id.toString();
        } else if (typeof entertainmentProductInfo.product_id_str === "string") {
          data.productId = entertainmentProductInfo.product_id_str;
        }
        if (typeof entertainmentProductInfo.title === "string") {
          data.productTitle = entertainmentProductInfo.title;
        }
        if (
          typeof entertainmentProductInfo?.buy_schema === "string" ||
          typeof entertainmentProductInfo?.buy_panel_schema === "string"
        ) {
          data.isProduct = true;
        }
      }

      /** 封面 */
      let cover = "";
      const coverUrlList = awemeInfoWithNetWork?.video?.cover?.url_list;
      if (typeof cover !== "string" || utils.isNull(cover)) {
        if (Array.isArray(coverUrlList) && typeof coverUrlList[0] === "string" && utils.isNotNull(coverUrlList[0])) {
          cover = coverUrlList[0];
        }
      }
      /** 视频数据 */
      const videoBitRateListData = awemeInfoWithNetWork?.video?.bit_rate;
      if (Array.isArray(videoBitRateListData)) {
        data.videoBitRateList = parseVideoBitRateList(videoBitRateListData, cover);
      }

      /** 背景音乐播放信息 */
      const musicPlayData = awemeInfoWithNetWork?.music?.play_url;
      data.musicUrl = musicPlayData?.uri;
      if (Array.isArray(musicPlayData?.url_list)) {
        musicPlayData.url_list.forEach((it) => {
          if (it === data.musicUrl) return;
          data.musicBackUrlList.push(it);
        });
      }
    } else if (from === "dom") {
      // 从页面上获取的awemeInfo，该对象是已经进行过处理的，字段什么的命名存在差异
      const awemeInfoWithDOM = awemeInfo as DouYinVideoAwemeInfoWithDOM;
      // 如果是直播间，那么没有该信息
      const authorInfo = awemeInfoWithDOM.authorInfo;
      data.nickname = String(authorInfo?.nickname ?? "");
      data.uid = String(authorInfo?.uid ?? "");
      data.desc = String(awemeInfoWithDOM.desc ?? "");
      data.musicAlbum = awemeInfoWithDOM?.music?.album;
      data.musicAuthor = awemeInfoWithDOM?.music?.author;
      data.musicDuration = awemeInfoWithDOM?.music?.duration ?? 0;
      data.musicTitle = awemeInfoWithDOM?.music?.title;
      data.collectCount = awemeInfoWithDOM.stats.collectCount;
      data.commentCount = awemeInfoWithDOM.stats.commentCount;
      data.diggCount = awemeInfoWithDOM.stats.diggCount;
      data.shareCount = awemeInfoWithDOM.stats.shareCount;
      data.duration = awemeInfoWithDOM.video.duration;
      data.awemeId = awemeInfoWithDOM.awemeId;
      data.authorCustomVerify = authorInfo?.customVerify || "";
      data.authorEnterpriseVerifyReason = authorInfo?.enterpriseVerifyReason || "";
      data.isPicture = awemeInfoWithDOM.awemeType === 68;
      data.isFollow = Boolean(authorInfo?.followStatus);

      // 获取发布时间
      if (typeof awemeInfoWithDOM.createTime === "number") {
        data.createTime = awemeInfoWithDOM.createTime;
        if (data.createTime > 0 && data.createTime < 1000000000000) {
          data.createTime = data.createTime * 1000;
        }
      }

      // 判断是否是广告
      data.isAds = [
        () => {
          if (awemeInfoWithDOM.isAds) {
            showLog && log.success("广告: isAds is true");
            return true;
          }
        },
        () => {
          if (typeof awemeInfoWithDOM?.rawAdData === "string" && utils.isNotNull(awemeInfoWithDOM.rawAdData)) {
            showLog && log.success("广告: rawAdData is not null");
            return true;
          }
        },
        () => {
          if (awemeInfoWithDOM?.webRawData) {
            if (awemeInfoWithDOM.webRawData?.brandAd?.is_ad) {
              showLog && log.success("广告: webRawData.brandAd.is_ad is 1");
              return true;
            }
            if (awemeInfoWithDOM?.webRawData?.insertInfo?.is_ad) {
              showLog && log.success("广告: webRawData.insertInfo.is_ad is true");
              return true;
            }
          }
        },
      ].some((it) => it());

      // 直播间
      if (typeof awemeInfoWithDOM?.cellRoom === "object" && awemeInfoWithDOM?.cellRoom != null) {
        data.isLive = true;
        showLog && log.success("直播间: cellRoom is not null");
        let rawdata = awemeInfoWithDOM.cellRoom?.rawdata;
        if (typeof rawdata == "object" && rawdata != null) {
          data.liveStreamRoomId = rawdata?.owner?.web_rid;
          data.liveStreamRoomTitle = rawdata?.title;
          data.liveStreamNickName = rawdata?.owner?.nickname;
          data.liveStreamRoomUserCount = rawdata?.user_count;
          data.liveStreamRoomDynamicSpliceLabel = rawdata?.dynamic_label?.splice_label?.text;

          if (typeof data.liveStreamRoomId !== "string") {
            data.liveStreamRoomId = void 0;
          }
          if (typeof data.liveStreamRoomTitle !== "string") {
            data.liveStreamRoomTitle = void 0;
          }
          if (typeof data.liveStreamNickName !== "string") {
            data.liveStreamNickName = void 0;
          }
          if (typeof data.liveStreamRoomUserCount !== "number") {
            data.liveStreamRoomUserCount = void 0;
          }
          if (typeof data.liveStreamRoomDynamicSpliceLabel !== "string") {
            data.liveStreamRoomDynamicSpliceLabel = void 0;
          }
        }
      }

      // 文案标签
      if (Array.isArray(awemeInfoWithDOM.textExtra)) {
        awemeInfoWithDOM.textExtra.forEach((item) => {
          const tagName = item?.hashtagName;
          if (typeof tagName === "string" && tagName.trim() != "") {
            data.textExtra.push(tagName);
          }
        });
      }

      // 视频标签
      if (Array.isArray(awemeInfoWithDOM.videoTag)) {
        awemeInfoWithDOM.videoTag.forEach((item) => {
          const tagName = item?.tagName;
          const tagId = item?.tagId;
          if (typeof tagName === "string" && tagName.trim() != "") {
            data.videoTag.push(tagName);
          }
          if (typeof tagId === "number" || typeof tagId === "string") {
            const tagTdStr = tagId.toString();
            if (tagTdStr.trim() != "" && tagTdStr != "0") {
              data.videoTagId.push(tagTdStr);
            }
          }
        });
      }

      // 如果风险提示内容是空的，赋值为undefined
      const riskInfos = awemeInfoWithDOM?.riskInfos;
      if (
        (typeof riskInfos?.content === "string" && riskInfos?.content.trim() === "") ||
        typeof riskInfos?.content !== "string"
      ) {
        data.riskInfoContent = void 0;
      } else {
        data.riskInfoContent = riskInfos?.content;
      }

      /** 短剧信息 */
      let seriesInfo = awemeInfoWithDOM?.seriesInfo;
      if (typeof seriesInfo === "object" && seriesInfo != null) {
        if (typeof seriesInfo?.seriesName === "string") {
          data.seriesInfoName = seriesInfo?.seriesName;
        }
        const seriesContentTypes = seriesInfo?.seriesContentTypes;
        if (Array.isArray(seriesContentTypes)) {
          seriesContentTypes.forEach((it) => {
            const __seriesInfoName = it.name;
            data.seriesInfoContentTypes.push(__seriesInfoName);
          });
        }
        if (data.seriesInfoName != null && seriesContentTypes != null) {
          data.isSeriesInfo = true;
        }
      }

      /** 混合信息 */
      let mixInfo = awemeInfoWithDOM?.mixInfo;
      if (typeof mixInfo === "object" && utils.isNotNull(mixInfo)) {
        data.mixInfoName = mixInfo?.mixName;
        data.mixInfoDesc = mixInfo?.desc;
      }

      /**
       * 解析bitRateList
       */
      const parseVideoBitRateList = (
        bitRateList: DouYinVideoAwemeInfoWithDOM["video"]["bitRateList"],
        cover: string
      ) => {
        let data: DouYinVideoConversionInfo["videoBitRateList"] = [];
        if (!Array.isArray(bitRateList)) return data;
        bitRateList.forEach((item) => {
          const url = item.playApi;
          const backUrl: string[] = [];
          const url_list = item?.playAddr;
          if (
            Array.isArray(item) &&
            url_list.length > 0 &&
            typeof url_list[0] === "string" &&
            utils.isNotNull(url_list[0])
          ) {
            backUrl.push(
              ...url_list
                .map((it) => {
                  if (typeof it.src !== "string") return;
                  if (it.src === url) return;
                  return it.src;
                })
                .filter((it) => it != null)
            );
          } else {
            backUrl.length = 0;
          }
          const videoBitRateListItem: (typeof data)[0] = {
            cover,
            bitRate: item.bitRate,
            dataSize: item.dataSize ?? 0,
            format: item.format,
            isH265: item.isH265,
            fps: item.fps,
            gearName: item.gearName,
            qualityType: item.qualityType,
            width: item.width,
            height: item.height,
            url,
            backUrl,
          };
          data.push(videoBitRateListItem);
        });
        // 去重
        for (let index = 0; index < data.length; index++) {
          const item = data[index];
          for (let index2 = 0; index2 < data.length; index2++) {
            // 去除后面重复的
            const item2 = data[index2];
            if (item === item2) {
              continue;
            }
            if (item.width === item2.width && item.height === item2.height && item.fps === item2.fps) {
              // 宽度、高度、帧率相同
              // 这时候去掉码率小的
              if (item.dataSize > item2.dataSize) {
                data.splice(index2, 1);
                index2--;
                if (index > index2) {
                  index--;
                }
              }
            }
          }
        }
        // 处理一下http的protocol，如果是http的话，点击会跳转到播放而不是下载
        data = data.map((item) => {
          if (item.url.startsWith("http:")) {
            item.url = item.url.replace("http:", "");
          }
          return item;
        });
        // 按视频大小排序（降序）
        utils.sortListByProperty(data, (it) => it.width!);
        return data;
      };

      // 判断是否是图文
      if (data.isPicture) {
        // 视频时长则需设置为空
        data.duration = void 0;
        const images = awemeInfoWithDOM?.images;
        if (Array.isArray(images)) {
          data.pictureList = images.map((it) => {
            let url;
            if (Array.isArray(it.urlList) && it.urlList.length) {
              // 无水印图片（默认）
              url = it.urlList[0];
            } else if (Array.isArray(it.downloadUrlList) && it.downloadUrlList.length) {
              // 有水印图片
              url = it.downloadUrlList[0];
            }
            const coverUrlList: string[] | undefined = it?.video?.coverUrlList;
            let cover = url;
            if (
              coverUrlList != null &&
              Array.isArray(coverUrlList) &&
              typeof coverUrlList[0] === "string" &&
              utils.isNotNull(coverUrlList[0])
            ) {
              cover = coverUrlList[0];
            }
            const videoBitRateListData = it?.video?.bitRateList;
            const videoBitRateList: (typeof data.pictureList)["0"]["videoBitRateList"] = parseVideoBitRateList(
              videoBitRateListData!,
              cover!
            );

            return {
              width: it.width,
              height: it.height,
              url: url,
              videoBitRateList: videoBitRateList,
            } as (typeof data.pictureList)[0];
          });
        }
      }

      let suggestWords = awemeInfoWithDOM?.suggestWords;
      if (Array.isArray(suggestWords)) {
        suggestWords.forEach((item) => {
          let words = item?.words;
          if (Array.isArray(words)) {
            words.forEach((wordItem) => {
              let word = wordItem?.word;
              if (typeof word === "string" && word.trim() !== "") {
                data.suggestWord.push(word);
              }
            });
          }
        });
      }
      // 去重
      data.suggestWord = [...new Set(data.suggestWord)];

      if (typeof authorInfo?.accountCertInfo?.labelText === "string") {
        data.authorAccountCertInfo = authorInfo?.accountCertInfo?.labelText;
      }

      /** 产品信息 */
      const entertainmentProductInfo = awemeInfoWithDOM?.entertainmentProductInfo;
      if (typeof entertainmentProductInfo === "object" && entertainmentProductInfo != null) {
        if (typeof entertainmentProductInfo.product_id === "number") {
          data.productId = entertainmentProductInfo.product_id.toString();
        } else if (typeof entertainmentProductInfo.product_id_str === "string") {
          data.productId = entertainmentProductInfo.product_id_str;
        }
        if (typeof entertainmentProductInfo.title === "string") {
          data.productTitle = entertainmentProductInfo.title;
        }
        if (
          typeof entertainmentProductInfo?.buy_schema === "string" ||
          typeof entertainmentProductInfo?.buy_panel_schema === "string"
        ) {
          data.isProduct = true;
        }
      }

      /** 封面 */
      let cover = "";
      const coverUrlList = awemeInfoWithDOM?.video?.coverUrlList;
      if (typeof cover !== "string" || utils.isNull(cover)) {
        if (Array.isArray(coverUrlList) && typeof coverUrlList[0] === "string" && utils.isNotNull(coverUrlList[0])) {
          cover = coverUrlList[0];
        }
      }
      /** 视频数据 */
      const videoBitRateListData = awemeInfoWithDOM?.video?.bitRateList;
      if (Array.isArray(videoBitRateListData)) {
        data.videoBitRateList = parseVideoBitRateList(videoBitRateListData, cover);
      }

      const musicPlayData = awemeInfoWithDOM?.music?.playUrl;
      data.musicUrl = musicPlayData?.uri;
      if (Array.isArray(musicPlayData?.urlList)) {
        musicPlayData.urlList.forEach((it) => {
          if (it === data.musicUrl) return;
          data.musicBackUrlList.push(it);
        });
      }
    } else {
      throw new Error("from参数错误");
    }

    return data;
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
      const data = {
        ruleKey: config.ruleKey,
        transformAwemeInfo: config.transformAwemeInfo,
        awemeInfo: config.awemeInfo,
      };
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
      const handlerResult = await handlerFunction(data);
      if (typeof handlerResult !== "boolean") {
        log.error(config, ruleDynamicOption);
        throw new TypeError("视频过滤器规则: 函数返回值类型必须为boolean类型");
      }
      return handlerResult;
    }
    if (typeof config.videoInfoValue === "string") {
      // awemeInfo的值是string
      // 使用自定义规则的值进行匹配
      if (config.videoInfoValue.match(config.ruleValue)) {
        return true;
      }
    } else if (typeof config.videoInfoValue === "object") {
      if (Array.isArray(config.videoInfoValue)) {
        // awemeInfo的值是string[]
        // 使用自定义规则的值进行遍历匹配
        const findValue = config.videoInfoValue.find((awemeInfoDictValue) => {
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
        // awemeInfo的值是number类型，用于比较
        // 自定义规则的值是number类型，用于比较
        const ruleValue = config.ruleValue.trim();
        const compareNumberMatch = ruleValue.match(/(\d+)/);
        if (!compareNumberMatch) {
          log.warn("过滤器-解析比较大小的数字失败: ", config);
          return false;
        }
        const compareNumber = Number(compareNumberMatch[1]);
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
        const trimRuleValue = config.ruleValue.trim();
        return config.videoInfoValue.toString() === trimRuleValue;
      }
    }
    return false;
  }
  /**
   * 检测视频是否可以屏蔽，可以屏蔽返回true
   * @param rules 规则
   * @param awemeInfo 视频信息结构
   * @param from awemeInfo是否来自页面上的，否则就是来自网络的
   * @param isQueryAllMatchedFilterRules 是否获取所有命中的规则，默认false
   */
  async checkAwemeInfoIsFilter<T extends boolean = false>(
    rules: DouYinVideoFilterRule[],
    awemeInfo: DouYinVideoAwemeInfoWithNetWork,
    from: "dom" | "network",
    isQueryAllMatchedFilterRules?: T
  ): Promise<{
    /** 是否允许过滤 */
    isFilter: boolean;
    /** 命中的过滤规则 */
    matchedFilterRule: T extends true ? DouYinVideoFilterRule[] : DouYinVideoFilterRule | null;
    /** 未命中的过滤规则 */
    notMatchedFilterRule: T extends true ? DouYinVideoFilterRule[] : null;
    /** 解析出的视频信息 */
    transformAwemeInfo: DouYinVideoConversionInfo;
    /** 原始视频信息 */
    awemeInfo: DouYinVideoAwemeInfoWithNetWork;
  }> {
    const transformAwemeInfo = this.parseAwemeInfoDictData(awemeInfo, from, false);
    let flag = false;
    let matchedFilterOption: DouYinVideoFilterRule | null = null;
    const matchedFilterOptionList: DouYinVideoFilterRule[] = [];
    const notMatchedFilterRule: DouYinVideoFilterRule[] = [];
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
        const tagKey = ruleName;
        /** 解析出的标签的值 */
        const tagValue = transformAwemeInfo[tagKey as keyof typeof transformAwemeInfo];
        /** 配置 */
        const config: FilterRuleCheckConfig = {
          videoInfoKey: tagKey,
          videoInfoValue: tagValue,
          ruleKey: filterRule.data.ruleName as string,
          ruleValue: filterRule.data.ruleValue,
          awemeInfo: awemeInfo,
          transformAwemeInfo: transformAwemeInfo,
          rule: filterRule,
        };
        flag = await this.checkFilterWithRule(config, filterRule.data);
        if (flag) {
          if (Array.isArray(filterRule.dynamicData) && filterRule.dynamicData.length) {
            // & 动态规则
            const dynamicConfigList: FilterRuleCheckConfig[] = [];
            for (let dynamicIndex = 0; dynamicIndex < filterRule.dynamicData.length; dynamicIndex++) {
              const dynamicOption = filterRule.dynamicData[dynamicIndex];
              /** 解析出的标签的名字 */
              const dynamicTagKey = dynamicOption.ruleName;
              /** 解析出的标签的值 */
              const dynamicTagValue = transformAwemeInfo[dynamicTagKey as keyof typeof transformAwemeInfo];
              /** 配置 */
              const dynamicConfig: FilterRuleCheckConfig = {
                videoInfoKey: dynamicTagKey as string,
                videoInfoValue: dynamicTagValue,
                ruleKey: dynamicOption.ruleName as string,
                ruleValue: dynamicOption.ruleValue,
                awemeInfo: awemeInfo,
                transformAwemeInfo: transformAwemeInfo,
                rule: filterRule,
              };
              dynamicConfigList.push(dynamicConfig);
              const dynamicCheckFlag = await this.checkFilterWithRule(dynamicConfig, dynamicOption);
              flag = flag && dynamicCheckFlag;
              if (!flag) {
                // 多组的话有一个不成立就退出
                break;
              }
            }
            if (flag) {
              log.success(`视频过滤器-多组 ==> ${filterRule.name}`, {
                transformAwemeInfo,
                config,
                awemeInfo,
                filterRule,
                dynamicConfigList,
              });
            }
          } else {
            log.success(`视频过滤器 ==> ${filterRule.name}`, {
              transformAwemeInfo,
              config,
              awemeInfo,
              filterRule,
            });
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
      isFilter: flag,
      matchedFilterRule: isQueryAllMatchedFilterRules ? (matchedFilterOptionList as any) : matchedFilterOption,
      notMatchedFilterRule: isQueryAllMatchedFilterRules ? (notMatchedFilterRule as any) : null,
      transformAwemeInfo,
      awemeInfo,
    };
  }
  /**
   * 发送请求-不感兴趣
   * @param rule 命中的规则
   * @param awemeInfo 视频信息结构
   */
  async sendDislikeVideo(rule: DouYinVideoFilterRule, awemeInfo: DouYinVideoAwemeInfoWithNetWork) {
    // if (!matchedFilterOption) {
    // 	return;
    // }
    // if (!matchedFilterOption.data.autoSendDisLikeRequest) {
    // 	// 未开启发送不感兴趣的请求
    // 	return;
    // }
    // const webid = Panel.getValue<string>("dy-webid");
    // if (typeof webid !== "string") {
    // 	return;
    // }
    // if (utils.isNull(webid)) {
    // 	return;
    // }
    // /** 对视频信息进行解析出需要的字典信息 */
    // const transformAwemeInfo = this.parseAwemeInfoDictData(awemeInfo);
    // if (transformAwemeInfo.isLive) {
    // 	// 不对广告进行处理
    // 	return;
    // }
    // if (transformAwemeInfo.isAds) {
    // 	// 不对直播进行处理
    // 	return;
    // }
    // const awemeId = transformAwemeInfo.awemeId;
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
      const $video = args[0];
      if ($video != null && $video instanceof HTMLElement) {
        $video.remove();
      }
    } else if (args.length === 2) {
      const videoList = args[0];
      const deleteIndex = args[1];
      if (typeof deleteIndex === "number") {
        const item = videoList[deleteIndex];
        if (item != null && item instanceof Element) {
          item?.remove();
        }
        videoList.splice(deleteIndex, 1);
      }
    }
  }
}
