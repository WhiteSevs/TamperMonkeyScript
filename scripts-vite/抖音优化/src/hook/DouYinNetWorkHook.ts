import { utils } from "@/env";

export const DouYinNetWorkHook = {
  __ajaxHooker: null as null | ReturnType<typeof utils.ajaxHooker>,
  get ajaxHooker(): ReturnType<typeof utils.ajaxHooker> {
    if (this.__ajaxHooker == null) {
      this.__ajaxHooker = utils.ajaxHooker();
    }
    return this.__ajaxHooker;
  },
  init() {},
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
};
