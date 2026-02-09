import { httpx, log, pops, utils } from "@/env";
import DOMUtils from "@whitesev/domutils";
import Qmsg from "qmsg";
import { unsafeWindow } from "ViteGM";
import type {
  DouYinVideoAwemeInfoWithDOM,
  DouYinVideoAwemeInfoWithNetWork,
  DouYinVideoHandlerInfo,
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
   * @param awemeInfo 视频信息结构
   * @param from awemeInfo是否来自页面上的，否则就是来自网络的
   * @param showLog 是否显示日志输出
   */
  parseAwemeInfoDictData(
    awemeInfo: DouYinVideoAwemeInfoWithDOM | DouYinVideoAwemeInfoWithNetWork,
    from: "dom" | "network",
    showLog: boolean = false
  ): DouYinVideoHandlerInfo {
    /** 视频作者名字 */
    let nickname: string;
    /** 视频作者uid */
    let uid: string;
    /** 视频描述 */
    let desc: string;
    /** 音乐专辑 */
    let musicAlbum: string | undefined;
    /** 音乐作者 */
    let musicAuthor: string | undefined;
    /** 音乐播放时长 */
    let musicDuration: number | undefined;
    /** 音乐标题 */
    let musicTitle: string | undefined;
    /** 视频的背景音乐的信息 */
    let musicUrl: string | undefined;
    /** 视频的背景音乐的播放地址（备用） */
    let musicBackUrlList: string[] = [];
    /** 收藏数量 */
    let collectCount: number;
    /** 评论数量 */
    let commentCount: number;
    /** 点赞数量 */
    let diggCount: number;
    /** 分享数量 */
    let shareCount: number;
    /** 视频时长 */
    let duration: number | undefined;
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
    let riskInfoContent: string | undefined;
    /** 系列名称 */
    let seriesInfoName: string | undefined = void 0;
    /** 系列内容类型 */
    let seriesInfoContentTypes: string[] = [];
    /** 是否是图文 */
    let isPicture: boolean;
    /** 图文列表信息 */
    let pictureList: DouYinVideoHandlerInfo["pictureList"] = [];
    /** 混合信息名称 */
    let mixInfoName: string | undefined = void 0;
    /** 混合信息描述 */
    let mixInfoDesc: string | undefined = void 0;
    /** 视频标签 */
    let videoTag: string[] = [];
    /** 视频标签的id */
    let videoTagId: string[] = [];
    /** 视频id */
    let awemeId: string;
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
    /** 是否已关注该用户 */
    let isFollow: boolean = false;
    /** 作者的认证信息 */
    let authorAccountCertInfo: string = "";
    let authorCustomVerify: string;
    /** 作者的企业认证信息 */
    let authorEnterpriseVerifyReason: string;
    /** 搜索建议关键词 */
    let suggestWord: string[] = [];

    if (from === "network") {
      // 从网络上获取的（主要）
      const awemeInfoWithNetWork = awemeInfo as DouYinVideoAwemeInfoWithNetWork;
      const authorInfo = awemeInfoWithNetWork?.author;
      const statistics = awemeInfoWithNetWork?.statistics;
      const video = awemeInfoWithNetWork?.video;
      nickname = String(authorInfo?.nickname ?? "");
      uid = String(authorInfo?.uid ?? "");
      desc = String(awemeInfoWithNetWork.desc ?? "");
      musicAlbum = awemeInfoWithNetWork?.music?.album;
      musicAuthor = awemeInfoWithNetWork?.music?.author;
      musicDuration = awemeInfoWithNetWork?.music?.duration ?? 0;
      musicTitle = awemeInfoWithNetWork?.music?.title;
      collectCount = statistics?.collect_count ?? 0;
      commentCount = statistics?.comment_count ?? 0;
      diggCount = statistics?.digg_count ?? 0;
      shareCount = statistics?.share_count ?? 0;
      duration = video?.duration;
      awemeId = awemeInfoWithNetWork.aweme_id;
      authorCustomVerify = authorInfo?.custom_verify || "";
      authorEnterpriseVerifyReason = authorInfo?.enterprise_verify_reason || "";
      isPicture = awemeInfoWithNetWork.aweme_type === 68;
      isFollow = Boolean(authorInfo?.follow_status);

      // 判断是否是广告
      isAds = [
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
        isLive = true;
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
          liveStreamRoomId = rawdata?.owner?.web_rid;
          liveStreamRoomTitle = rawdata?.title;
          liveStreamNickName = rawdata?.owner?.nickname;
          liveStreamRoomUserCount = rawdata?.user_count;
          liveStreamRoomDynamicSpliceLabel = rawdata?.dynamic_label?.splice_label?.text;

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

      // 文案标签
      if (Array.isArray(awemeInfoWithNetWork?.text_extra)) {
        awemeInfoWithNetWork.text_extra.forEach((item) => {
          const tagName = item?.hashtag_name;
          if (typeof tagName === "string" && tagName.trim() != "") {
            textExtra.push(tagName);
          }
        });
      }

      // 视频标签
      if (Array.isArray(awemeInfoWithNetWork.video_tag)) {
        awemeInfoWithNetWork.video_tag.forEach((item) => {
          const tagName = item?.tag_name;
          const tagId = item?.tag_id;
          if (typeof tagName === "string" && tagName.trim() != "") {
            videoTag.push(tagName);
          }
          if (typeof tagId === "number" || typeof tagId === "string") {
            const tagTdStr = tagId.toString();
            if (tagTdStr.trim() != "" && tagTdStr != "0") {
              videoTagId.push(tagTdStr);
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
        riskInfoContent = void 0;
      } else {
        riskInfoContent = risk_infos?.content;
      }

      /** 短剧信息 */
      const series_info = awemeInfoWithNetWork?.series_info;
      if (typeof series_info === "object" && series_info != null) {
        if (typeof series_info?.series_name === "string") {
          seriesInfoName = series_info?.series_name;
        }
        const series_content_types = series_info?.series_content_types;
        if (Array.isArray(series_content_types)) {
          series_content_types.forEach((it) => {
            const __seriesInfoName = it.name;
            seriesInfoContentTypes.push(__seriesInfoName);
          });
        }
        if (seriesInfoName != null && series_content_types != null) {
          isSeriesInfo = true;
        }
      }

      /** 混合信息 */
      const mixInfo = awemeInfoWithNetWork?.mix_info;
      if (typeof mixInfo === "object" && utils.isNotNull(mixInfo)) {
        mixInfoName = mixInfo?.mix_name;
        mixInfoDesc = mixInfo?.desc;
      }

      /**
       * 解析bitRateList
       */
      const parseVideoBitRateList = (
        bitRateList: NonNullable<DouYinVideoAwemeInfoWithNetWork["video"]>["bit_rate"],
        cover: string
      ) => {
        let data: DouYinVideoHandlerInfo["videoBitRateList"] = [];
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
      if (isPicture) {
        // 视频时长则需设置为空
        duration = void 0;
        const images = awemeInfoWithNetWork?.images;
        if (Array.isArray(images)) {
          pictureList = images.map((it) => {
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
            const videoBitRateList: (typeof pictureList)["0"]["videoBitRateList"] = parseVideoBitRateList(
              videoBitRateListData!,
              cover!
            );

            return {
              width: it.width,
              height: it.height,
              url: url,
              videoBitRateList: videoBitRateList,
            } as (typeof pictureList)[0];
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
                suggestWord.push(word);
              }
            });
          }
        });
      }
      // 去重
      suggestWord = [...new Set(suggestWord)];

      const authorAccountCertInfoInsStr = authorInfo?.account_cert_info;
      if (typeof authorAccountCertInfoInsStr === "string") {
        const authorAccountCertInfoJSON = utils.toJSON<{
          label_text: string;
          label_style: number;
          is_biz_account: number;
        }>(authorAccountCertInfoInsStr);
        if (typeof authorAccountCertInfoJSON.label_text === "string") {
          authorAccountCertInfo = authorAccountCertInfoJSON.label_text;
        }
      }

      /** 产品信息 */
      const entertainmentProductInfo = awemeInfoWithNetWork?.entertainment_product_info;
      if (typeof entertainmentProductInfo === "object" && entertainmentProductInfo != null) {
        if (typeof entertainmentProductInfo.product_id === "number") {
          productId = entertainmentProductInfo.product_id.toString();
        } else if (typeof entertainmentProductInfo.product_id_str === "string") {
          productId = entertainmentProductInfo.product_id_str;
        }
        if (typeof entertainmentProductInfo.title === "string") {
          productTitle = entertainmentProductInfo.title;
        }
        if (
          typeof entertainmentProductInfo?.buy_schema === "string" ||
          typeof entertainmentProductInfo?.buy_panel_schema === "string"
        ) {
          isProduct = true;
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
        videoBitRateList = parseVideoBitRateList(videoBitRateListData, cover);
      }

      /** 背景音乐播放信息 */
      const musicPlayData = awemeInfoWithNetWork?.music?.play_url;
      musicUrl = musicPlayData?.uri;
      if (Array.isArray(musicPlayData?.url_list)) {
        musicPlayData.url_list.forEach((it) => {
          if (it === musicUrl) return;
          musicBackUrlList.push(it);
        });
      }
    } else if (from === "dom") {
      // 从页面上获取的awemeInfo，该对象是已经进行过处理的，字段什么的命名存在差异
      const awemeInfoWithDOM = awemeInfo as DouYinVideoAwemeInfoWithDOM;
      // 如果是直播间，那么没有该信息
      const authorInfo = awemeInfoWithDOM.authorInfo;
      nickname = String(authorInfo?.nickname ?? "");
      uid = String(authorInfo?.uid ?? "");
      desc = String(awemeInfoWithDOM.desc ?? "");
      musicAlbum = awemeInfoWithDOM?.music?.album;
      musicAuthor = awemeInfoWithDOM?.music?.author;
      musicDuration = awemeInfoWithDOM?.music?.duration ?? 0;
      musicTitle = awemeInfoWithDOM?.music?.title;
      collectCount = awemeInfoWithDOM.stats.collectCount;
      commentCount = awemeInfoWithDOM.stats.commentCount;
      diggCount = awemeInfoWithDOM.stats.diggCount;
      shareCount = awemeInfoWithDOM.stats.shareCount;
      duration = awemeInfoWithDOM.video.duration;
      awemeId = awemeInfoWithDOM.awemeId;
      authorCustomVerify = authorInfo?.customVerify || "";
      authorEnterpriseVerifyReason = authorInfo?.enterpriseVerifyReason || "";
      isPicture = awemeInfoWithDOM.awemeType === 68;
      isFollow = Boolean(authorInfo?.followStatus);

      // 判断是否是广告
      isAds = [
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
        isLive = true;
        showLog && log.success("直播间: cellRoom is not null");
        let rawdata = awemeInfoWithDOM.cellRoom?.rawdata;
        if (typeof rawdata == "object" && rawdata != null) {
          liveStreamRoomId = rawdata?.owner?.web_rid;
          liveStreamRoomTitle = rawdata?.title;
          liveStreamNickName = rawdata?.owner?.nickname;
          liveStreamRoomUserCount = rawdata?.user_count;
          liveStreamRoomDynamicSpliceLabel = rawdata?.dynamic_label?.splice_label?.text;

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

      // 文案标签
      if (Array.isArray(awemeInfoWithDOM.textExtra)) {
        awemeInfoWithDOM.textExtra.forEach((item) => {
          const tagName = item?.hashtagName;
          if (typeof tagName === "string" && tagName.trim() != "") {
            textExtra.push(tagName);
          }
        });
      }

      // 视频标签
      if (Array.isArray(awemeInfoWithDOM.videoTag)) {
        awemeInfoWithDOM.videoTag.forEach((item) => {
          const tagName = item?.tagName;
          const tagId = item?.tagId;
          if (typeof tagName === "string" && tagName.trim() != "") {
            videoTag.push(tagName);
          }
          if (typeof tagId === "number" || typeof tagId === "string") {
            const tagTdStr = tagId.toString();
            if (tagTdStr.trim() != "" && tagTdStr != "0") {
              videoTagId.push(tagTdStr);
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
        riskInfoContent = void 0;
      } else {
        riskInfoContent = riskInfos?.content;
      }

      /** 短剧信息 */
      let seriesInfo = awemeInfoWithDOM?.seriesInfo;
      if (typeof seriesInfo === "object" && seriesInfo != null) {
        if (typeof seriesInfo?.seriesName === "string") {
          seriesInfoName = seriesInfo?.seriesName;
        }
        const seriesContentTypes = seriesInfo?.seriesContentTypes;
        if (Array.isArray(seriesContentTypes)) {
          seriesContentTypes.forEach((it) => {
            const __seriesInfoName = it.name;
            seriesInfoContentTypes.push(__seriesInfoName);
          });
        }
        if (seriesInfoName != null && seriesContentTypes != null) {
          isSeriesInfo = true;
        }
      }

      /** 混合信息 */
      let mixInfo = awemeInfoWithDOM?.mixInfo;
      if (typeof mixInfo === "object" && utils.isNotNull(mixInfo)) {
        mixInfoName = mixInfo?.mixName;
        mixInfoDesc = mixInfo?.desc;
      }

      /**
       * 解析bitRateList
       */
      const parseVideoBitRateList = (
        bitRateList: DouYinVideoAwemeInfoWithDOM["video"]["bitRateList"],
        cover: string
      ) => {
        let data: DouYinVideoHandlerInfo["videoBitRateList"] = [];
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
      if (isPicture) {
        // 视频时长则需设置为空
        duration = void 0;
        const images = awemeInfoWithDOM?.images;
        if (Array.isArray(images)) {
          pictureList = images.map((it) => {
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
            const videoBitRateList: (typeof pictureList)["0"]["videoBitRateList"] = parseVideoBitRateList(
              videoBitRateListData!,
              cover!
            );

            return {
              width: it.width,
              height: it.height,
              url: url,
              videoBitRateList: videoBitRateList,
            } as (typeof pictureList)[0];
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
                suggestWord.push(word);
              }
            });
          }
        });
      }
      // 去重
      suggestWord = [...new Set(suggestWord)];

      if (typeof authorInfo?.accountCertInfo?.labelText === "string") {
        authorAccountCertInfo = authorInfo?.accountCertInfo?.labelText;
      }

      /** 产品信息 */
      const entertainmentProductInfo = awemeInfoWithDOM?.entertainmentProductInfo;
      if (typeof entertainmentProductInfo === "object" && entertainmentProductInfo != null) {
        if (typeof entertainmentProductInfo.product_id === "number") {
          productId = entertainmentProductInfo.product_id.toString();
        } else if (typeof entertainmentProductInfo.product_id_str === "string") {
          productId = entertainmentProductInfo.product_id_str;
        }
        if (typeof entertainmentProductInfo.title === "string") {
          productTitle = entertainmentProductInfo.title;
        }
        if (
          typeof entertainmentProductInfo?.buy_schema === "string" ||
          typeof entertainmentProductInfo?.buy_panel_schema === "string"
        ) {
          isProduct = true;
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
        videoBitRateList = parseVideoBitRateList(videoBitRateListData, cover);
      }

      const musicPlayData = awemeInfoWithDOM?.music?.playUrl;
      musicUrl = musicPlayData?.uri;
      if (Array.isArray(musicPlayData?.urlList)) {
        musicPlayData.urlList.forEach((it) => {
          if (it === musicUrl) return;
          musicBackUrlList.push(it);
        });
      }
    } else {
      throw new Error("from参数错误");
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
      musicDuration,
      musicTitle,
      musicUrl,
      musicBackUrlList,
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
      productId,
      productTitle,
      isFollow,
      isLive,
      isAds,
      isSeriesInfo,
      isMixInfo,
      isPicture,
      isProduct,
      videoBitRateList,
      pictureList,
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
      const handlerResult = await handlerFunction({
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
        /* awemeInfo的值是number类型，用于比较 */
        /* 自定义规则的值是number类型，用于比较 */
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
    awemeInfo: DouYinVideoAwemeInfoWithDOM,
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
    transformAwemeInfo: DouYinVideoHandlerInfo;
    /** 原始视频信息 */
    awemeInfo: DouYinVideoAwemeInfoWithDOM;
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
        const details = {
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
            const dynamicDetailsList: FilterRuleCheckConfig[] = [];
            for (let dynamicIndex = 0; dynamicIndex < filterRule.dynamicData.length; dynamicIndex++) {
              const dynamicOption = filterRule.dynamicData[dynamicIndex];
              /** 解析出的标签的名字 */
              const dynamicTagKey = dynamicOption.ruleName;
              /** 解析出的标签的值 */
              const dynamicTagValue = transformAwemeInfo[dynamicTagKey as keyof typeof transformAwemeInfo];
              /** 配置 */
              const dynamicDetails: FilterRuleCheckConfig = {
                videoInfoKey: dynamicTagKey as string,
                videoInfoValue: dynamicTagValue,
                ruleKey: dynamicOption.ruleName as string,
                ruleValue: dynamicOption.ruleValue,
                transformAwemeInfo: transformAwemeInfo,
                rule: filterRule,
              };
              dynamicDetailsList.push(dynamicDetails);
              const dynamicCheckFlag = await this.checkFilterWithRule(dynamicDetails, dynamicOption);
              flag = flag && dynamicCheckFlag;
              if (!flag) {
                // 多组的话有一个不成立就退出
                break;
              }
            }
            if (flag) {
              log.success(`视频过滤器-多组 ==> ${filterRule.name}`, {
                dynamicDetailsList,
                transformAwemeInfo,
                details,
                awemeInfo,
                filterRule,
              });
            }
          } else {
            log.success(`视频过滤器 ==> ${filterRule.name}`, { transformAwemeInfo, details, awemeInfo, filterRule });
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
      transformAwemeInfo: transformAwemeInfo,
      awemeInfo: awemeInfo,
    };
  }
  /**
   * 发送请求-不感兴趣
   * @param rule 命中的规则
   * @param awemeInfo 视频信息结构
   */
  async sendDislikeVideo(rule: DouYinVideoFilterRule, awemeInfo: DouYinVideoAwemeInfoWithDOM) {
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
