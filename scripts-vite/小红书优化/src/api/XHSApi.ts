import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";

interface PageInfo {
  comments: any[];
  cursor: string;
  has_more: boolean;
  time: number;
  user_id: string;
}
interface LzlPageInfo extends PageInfo {}

const XHS_BASE_URL = "https://edith.xiaohongshu.com";
export const XHSApi = {
  /**
   * 获取页信息
   */
  async getPageInfo(
    note_id: string | number,
    cursor = "",
    xsec_token = "",
    top_comment_id = "",
    image_formats = "jpg,webp"
  ) {
    const Api = `/api/sns/web/v2/comment/page`;
    const SearchParamsData = {
      note_id: note_id,
      cursor: cursor,
      top_comment_id: top_comment_id,
      image_formats: image_formats,
      xsec_token: xsec_token,
    };
    const SearchParams = Api + "?" + utils.toSearchParamsStr(SearchParamsData);
    // let signInfo = XHS_Sign(Api);
    let getResp = await httpx.get(`${XHS_BASE_URL}${SearchParams}`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": utils.getRandomPCUA(),
        Origin: "https://www.xiaohongshu.com",
        Referer: "https://www.xiaohongshu.com/",
        // "X-S": signInfo.xs,
        // "X-T": signInfo.xt,
      },
    });
    if (!getResp.status) {
      return;
    }
    let data = utils.toJSON(getResp.data.responseText);
    log.info(["获取页信息", data]);
    if (data["code"] === 0 || data["success"]) {
      return data["data"] as PageInfo;
    } else if (data["code"] === -101) {
      /* 未登录 */
      return;
    } else {
      Qmsg.error(data["msg"]);
    }
  },
  /**
   * 获取楼中楼页信息
   */
  async getLzlPageInfo(
    note_id = "",
    root_comment_id = "",
    num = 10,
    cursor = "",
    image_formats = "jpg,webp,avif",
    top_comment_id = ""
  ) {
    const Api = `/api/sns/web/v2/comment/sub/page`;
    let ApiData = {
      note_id: note_id,
      root_comment_id: root_comment_id,
      num: num,
      cursor: cursor,
      image_formats: image_formats,
      top_comment_id: top_comment_id,
    };
    let searchParams = Api + "?" + utils.toSearchParamsStr(ApiData);
    // let signInfo = XHS_Sign(searchParams);
    // log.success(["签名信息：", signInfo]);
    let url = `${XHS_BASE_URL}${Api}?${utils.toSearchParamsStr(ApiData)}`;
    let getResp = await httpx.get(url, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Host: "edith.xiaohongshu.com",
        Origin: "https://www.xiaohongshu.com",
        Referer: "https://www.xiaohongshu.com/",
        // "X-S": signInfo.xs,
        // "X-T": signInfo.xt,
        // "X-S-Common": signInfo.xsCommon,
        // "X-B3-Traceid": signInfo.traceId,
      },
      onerror() {},
    });
    if (!getResp.status) {
      if (getResp.data.status === 406 && utils.isNotNull(getResp.data.responseText)) {
        let errorData = utils.toJSON(getResp.data.responseText);
        if (errorData["code"] == -1) {
          Qmsg.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败");
        } else {
          Qmsg.error("获取楼中楼信息失败");
        }
      } else {
        Qmsg.error("请求异常");
      }
      log.error(["获取楼中楼信息失败", getResp]);
      return;
    }
    let data = utils.toJSON(getResp.data.responseText);
    log.info(["获取楼中楼页信息", data]);
    if (data["code"] === 0 || data["success"]) {
      return data["data"] as LzlPageInfo;
    } else {
      Qmsg.error(data["msg"]);
    }
  },
  /**
   * 获取搜索推荐内容
   * @param searchText
   */
  async getSearchRecommend(searchText: string) {
    let getResp = await httpx.get(
      `https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${searchText}`,
      {
        fetch: true,
      }
    );
    if (!getResp.status) {
      return;
    }
    let data = utils.toJSON<{
      code: number;
      data: {
        search_cpl_id: string;
        sug_items: {
          highlight_flags: boolean[];
          search_type: "notes" | string;
          text: string;
          type: "top_note" | string;
        }[];
        word_request_id: string;
      };
      msg: string;
      success: boolean;
    }>(getResp.data.responseText);
    if (!(data.success || data.code === 1000)) {
      return;
    }
    return data.data.sug_items;
  },
};
