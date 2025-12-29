import { httpx, log, utils } from "@/env";
import { ApiConfig } from "./ApiConfig";
import Qmsg from "qmsg";
import { ApiResponseCheck } from "./ApiResponseCheck";
import { unsafeWindow } from "ViteGM";
import { DouYinUrlUtils } from "@/utils/DouYinUrlUtils";

export const DouYinFollowingApi = {
  /**
   * 获取关注列表的信息
   */
  async list(config: {
    /**  用户id */
    user_id: string | number;
    /** 偏移 */
    offset: number;
    /** 获取的数量 */
    count: number;
  }) {
    // 未看
    // not_seen_item_id_list_v2
    const response = await httpx.get("/aweme/v1/web/user/following/list/", {
      fetch: true,
      allowInterceptConfig: false,
      data: {
        ...ApiConfig.getCommonData(),
        user_id: config.user_id,
        sec_user_id: ApiConfig.getSecUserId(),
        webid: ApiConfig.getWebId(),
        offset: config.offset,
        min_time: 0,
        max_time: 0,
        count: config.count,
        source_type: 4,
        gps_access: 0,
        address_book_access: 0,
        is_top: 1,
        downlink: 0.4,
        // verifyFp的值和fp的值相同
        // verifyFp: "",
        // fp: "",
        // // cookie↓
        // msToken: "",
        // a_bogus: "",
      },
      processData: true,
      headers: {
        // "bd-ticket-guard-client-data": "",
        // "bd-ticket-guard-iteration-version": 1,
        // "bd-ticket-guard-ree-public-key": "",
        // "bd-ticket-guard-version": 2,
        // "bd-ticket-guard-web-version": 1,
        Referer: "https://www.douyin.com/follow",
      },
    });

    if (!response.status) {
      log.error(response);
      Qmsg.error("获取关注列表信息失败");
      return;
    }
    const data = utils.toJSON(response.data.responseText);
    if (!ApiResponseCheck.isSuccess(data)) {
      return;
    }

    /**
     * 未看的视频信息
     */
    const notSeenIdInfoList: {
      /** 请求的数据 */
      data: any;
      /** 未看的视频id列表 */
      videoIdList: string[];
      /** 用户信息 */
      authorInfo: {
        /** 用户名 */
        name: string;
        /** 备注名 */
        remarkName: string | null;
        /** 用户头像 */
        avatarUri: string;
        /** 用户id，主页用 */
        sec_uid: string;
        /** 主页链接 */
        homeUrl: string;
      };
    }[] = [];

    const getAvatarUri = (avatarData: any) => {
      return avatarData?.["url_list"]?.[0];
    };
    for (let index = 0; index < data["followings"].length; index++) {
      const item = data["followings"][index];
      notSeenIdInfoList.push({
        data: item,
        videoIdList: item["not_seen_item_id_list_v2"],
        authorInfo: {
          name: item["nickname"],
          remarkName: item["remark_name"],
          avatarUri:
            getAvatarUri(item?.["avatar_larger"]) ||
            getAvatarUri(item?.["avatar_medium"]) ||
            getAvatarUri(item?.["avatar_thumb"]) ||
            getAvatarUri(item?.["avatar_300x300"]) ||
            getAvatarUri(item?.["avatar_168x168"]),
          sec_uid: item["sec_uid"],
          homeUrl: DouYinUrlUtils.getUserHomeUrl(item["sec_uid"]),
        },
      });
    }
  },
};

if (import.meta.hot) {
  Reflect.set(unsafeWindow, "DouYinFollowingApi", DouYinFollowingApi);
}
