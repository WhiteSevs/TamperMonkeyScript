import { log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { unsafeWindow } from "ViteGM";

export const DouYinNetWorkHook = {
  __ajaxHooker: null as null | ReturnType<typeof utils.ajaxHooker>,
  get ajaxHooker(): ReturnType<typeof utils.ajaxHooker> {
    if (this.__ajaxHooker == null) {
      this.__ajaxHooker = utils.ajaxHooker();
    }
    return this.__ajaxHooker;
  },
  init() {
    Panel.execMenuOnce("dy-hook-higher-quality", () => {
      return this.hookVideoQuality();
    });
  },
  /**
   * 篡改未登录时的响应结果
   */
  hookUserNoLoginResponse() {
    this.ajaxHooker.hook((request) => {
      // const url = CommonUtil.fixUrl(request.url);
      // const urlIns = new URL(url);
      // if (
      // 	(true &&
      // 		urlIns.pathname.startsWith("/aweme/v1/web/user/profile/self/")) ||
      // 	urlIns.pathname.startsWith(
      // 		"/aweme/v1/web/im/resource/list/aggregation"
      // 	) ||
      // 	urlIns.pathname.startsWith("/aweme/v1/web/im/user/active/update/") ||
      // 	urlIns.pathname.startsWith("/aweme/v1/web/im/user/active/config/get")
      // ) {
      // }
      // 其它hook的参数会被覆盖
      const originResponse = request.response;
      request.response = (response) => {
        originResponse && originResponse(response);
        const data = utils.toJSON(response.responseText);
        if (typeof data["status_code"] === "number" && data["status_code"] !== 0) {
          data["status_code"] = 0;
          if (typeof data["status_msg"] === "string") {
            data["status_msg"] = "";
          }
        }
        if (
          typeof data?.["user_collect_count"]?.["status_code"] === "number" &&
          data?.["user_collect_count"]?.["status_code"] !== 0
        ) {
          data["user_collect_count"]["status_code"] = 0;
          if (typeof data?.["user_collect_count"]?.["status_msg"] === "string") {
            data["user_collect_count"]["status_msg"] = "";
          }
        }
        response.responseText = JSON.stringify(data);
      };
    });
  },
  /**
   * 篡改显示视频清晰度，让其显示最高清晰度
   *
   * (仅非登录时生效)
   */
  hookVideoQuality() {
    log.info(`篡改显示视频清晰度，让其显示最高清晰度`);
    const origin_hardwareConcurrency = navigator.hardwareConcurrency;
    // 伪装高配置
    Object.defineProperty(navigator, "hardwareConcurrency", {
      get: () => 16,
      configurable: true,
    });
    Object.defineProperty(navigator, "deviceMemory", {
      get: () => 64,
      configurable: true,
    });
    const localAbTestKey = Object.keys(unsafeWindow.localStorage).find((it) => {
      return it.startsWith("__tea_sdk_ab_version_");
    });
    if (localAbTestKey) {
      const abTestDataStr = unsafeWindow.localStorage.getItem(localAbTestKey);
      const abTestData = utils.toJSON(abTestDataStr);
      if (abTestData["data"]) {
        abTestData["data"]["exposure_defination"] = {
          val: 1,
          vid: "",
        };
        abTestData["data"]["has_2k"] = {
          val: 1,
          vid: "",
        };
        abTestData["data"]["has_hdr"] = {
          val: 1,
          vid: "",
        };
        unsafeWindow.localStorage.setItem(localAbTestKey, JSON.stringify(abTestData));
      }
    }
    this.ajaxHooker.hook((request) => {
      const url = CommonUtil.fixUrl(request.url);
      const urlInst = new URL(url);
      if (urlInst.pathname.startsWith("/service/2/abtest_config/")) {
        // 这个是 ab test的配置
        request.response = (response) => {
          const data = utils.toJSON(response.responseText);
          if (data["data"]) {
            // 2k
            data["data"]["has_2k"] = {
              val: 1,
              vid: "",
            };
            // 4k 应该是
            data["data"]["has_hdr"] = {
              val: 1,
              vid: "",
            };
          }
          response.responseText = JSON.stringify(data);
        };
      }
    });
  },
};
