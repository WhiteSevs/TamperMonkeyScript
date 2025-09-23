import { httpx, log, utils } from "@/env";
import {
  NetDiskCheckLinkValidity,
  NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskParse } from "../../../parse/NetDiskParse";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_lanzouyx: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    let LanZouYX = new NetDiskParse.rule.lanzouyx();
    LanZouYX.shareCodeId = LanZouYX.getDecodeShareCodeId(shareCode);
    let timestamp = LanZouYX.getEncodeTimeStamp();
    let uuid = LanZouYX.getEncodeUUID();
    let response = await httpx.post(
      `https://api.ilanzou.com/unproved/recommend/list?${utils.toSearchParamsStr({
        devType: LanZouYX.$data.devType,
        devModel: LanZouYX.$data.devModel,
        uuid: uuid,
        extra: LanZouYX.$data.extra,
        timestamp: timestamp,
        code: accessCode,
        shareId: shareCode,
        type: LanZouYX.$data.type,
        offset: LanZouYX.$data.offset,
        limit: LanZouYX.$data.limit,
      })}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Origin: "https://www.ilanzou.com",
          Referer: "https://www.ilanzou.com/",
          "Sec-Fetch-Site": "same-site",
          Host: "api.ilanzou.com",
          "User-Agent": utils.getRandomPCUA(),
        },
        responseType: "json",
        ...NetDiskCheckLinkValidityRequestOption,
      }
    );
    if (!response.status) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    let data = utils.toJSON(response.data.responseText);
    log.success("获取链接信息：", data);
    if (data["code"] !== 200) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: data,
      };
    }
    if (!data["list"].length) {
      // 获取是空的
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: data,
      };
    }
    return {
      ...NetDiskCheckLinkValidityStatus.success,
      data: data,
    };
  },
};
