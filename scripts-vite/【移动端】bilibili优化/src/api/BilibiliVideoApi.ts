import { cookieManager, httpx, log, utils } from "@/env";
import { BilibiliApiRequestCheck } from "./BilibiliApiRequestCheck";
import { BilibiliApiConfig } from "./BilibiliApiConfig";
import { BilibiliApiResponseCheck } from "./BilibiliApiResponseCheck";
import { VideoQualityNameMap } from "@/video-info/VideoDict";
import Qmsg from "qmsg";
import { BilibiliGlobalData } from "@/main/BilibiliGlobalData";

export const BilibiliVideoApi = {
  /**
   * 获取视频播放地址，avid或bvid必须给一个
   * + /x/player/playurl
   * @param config
   * @param extraParams 额外参数，一般用于hook network参数内的判断
   */
  async playUrl(
    config:
      | (BilibliPlayUrlCommonConfig & {
          /** 视频的av号 */
          aid: string;
        })
      | (BilibliPlayUrlCommonConfig & {
          /** 视频的bv号 */
          bvid: string;
        }),
    extraParams?: any
  ) {
    let searchParamsData = {
      cid: config.cid,
      qn: config.qn ?? VideoQualityNameMap["1080P60 高帧率"],
      high_quality: config.high_quality ?? 1,
      fnval: config.fnval ?? 1,
      // 固定0
      fnver: config.fnver ?? 0,
      // 是否允许 4K 视频
      fourk: config.fourk ?? 1,
      // 为 1 时可以不登录拉到 64 和 80 清晰度，但是也会限制最高画质为80
      try_look: (await BilibiliGlobalData.$data.isLogin) ? 0 : 1,
      // 该值是用来请求可以在移动端播放的链接的
      platform: config.setPlatformHTML5 ? "html5" : "pc",
    };
    BilibiliApiRequestCheck.mergeAidOrBvidSearchParamsData(searchParamsData, config);
    if (typeof extraParams === "object" && extraParams !== null) {
      Object.assign(searchParamsData, extraParams);
    }
    let response = await httpx.get(
      "https://api.bilibili.com/x/player/playurl?" + utils.toSearchParamsStr(searchParamsData),
      {
        responseType: "json",
        fetch: true,
      }
    );
    if (!response.status) {
      return;
    }
    let data = utils.toJSON(response.data.responseText);
    if (data["code"] !== 0) {
      return;
    }
    return data["data"] as TypeBilibiliVideoInfo_mp4 | TypeBilibiliVideoInfo_m4s;
  },
  /**
   * 获取视频在线观看人数
   * + /x/player/online/total
   */
  async onlineTotal(
    config:
      | {
          aid: number | string;
          cid: number | string;
        }
      | {
          bvid: string;
          cid: number | string;
        }
  ) {
    let searchParamsData = {
      cid: config.cid,
    };
    BilibiliApiRequestCheck.mergeAidOrBvidSearchParamsData(searchParamsData, config);
    let httpxResponse = await httpx.get(
      `https://${BilibiliApiConfig.web_host}/x/player/online/total?${utils.toSearchParamsStr(searchParamsData)}`,
      {
        responseType: "json",
        fetch: true,
      }
    );
    if (!httpxResponse.status) {
      return;
    }
    let data = utils.toJSON(httpxResponse.data.responseText);
    if (!BilibiliApiResponseCheck.isWebApiSuccess(data)) {
      log.error(`获取在线观看人数失败: ${JSON.stringify(data)}`);
    }

    return data["data"] as {
      /** 展示所有终端总计人数 */
      total: string;
      /** 展示web端实时在线人数 */
      count: string;
      /** 数据显示控制 */
      show_switch: {
        total: boolean;
        count: boolean;
      };
    };
  },
  /**
   * 点赞视频（web端）
   * @param config
   */
  async like(config: { aid: number; like: 1 | 2 } | { bvid: string; like: 1 | 2 }) {
    let searchParamsData = {
      like: config.like,
      csrf: cookieManager.get("bili_jct")?.value || "",
    };

    BilibiliApiRequestCheck.mergeAidOrBvidSearchParamsData(searchParamsData, config);
    let getResp = await httpx.get(
      "https://api.bilibili.com/x/web-interface/archive/like?" + utils.toSearchParamsStr(searchParamsData),
      {
        fetch: true,
      }
    );
    if (!getResp.status) {
      return false;
    }
    let data = utils.toJSON(getResp.data.responseText);
    const code = data["code"];
    if (code === 0) {
      return true;
    }
    if (code === -101) {
      Qmsg.error("账号未登录");
    } else if (code === -111) {
      Qmsg.error("csrf校验失败");
    } else if (code === -400) {
      Qmsg.error("请求错误");
    } else if (code === -403) {
      Qmsg.error("账号异常");
    } else if (code === 10003) {
      Qmsg.error("不存在该稿件");
    } else if (code === 65004) {
      Qmsg.error("取消点赞失败");
    } else if (code === 65006) {
      Qmsg.warning("重复点赞");
    } else {
      Qmsg.error("未知错误：" + data["message"]);
    }
    return false;
  },
};
