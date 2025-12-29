import { httpx, log, utils } from "@/env";
import { ApiConfig } from "./ApiConfig";
import { GM_xmlhttpRequest } from "ViteGM";
import Qmsg from "qmsg";
import { ApiResponseCheck } from "./ApiResponseCheck";

export const DouYinWatchlaterApi = {
  /**
   * 添加到稍后再看
   * @param aweme_id 视频id
   */
  async upsert(aweme_id: string) {
    const response = await httpx.post(
      "/aweme/v1/web/watchlater/upsert/?" +
        utils.toSearchParamsStr({
          ...ApiConfig.getCommonData(),
          downlink: 10,
        }),
      {
        data: `{"item_to_playinfo":{"${aweme_id}":{"play_duration":0,"loop_status":0}},"action_type":1}:`,
        fetch: true,
        processData: false,
        allowInterceptConfig: false,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }
    );
    if (!response.status) {
      log.error(response);
      Qmsg.error("添加到稍后再看失败");
      return;
    }
    const data = utils.toJSON(response.data.responseText);
    if (!ApiResponseCheck.isSuccess(data)) {
      return;
    }
    return true;
  },
};
