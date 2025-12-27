import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskCheckLinkValidityRequestOption } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_kuake: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const response = await httpx.post("https://drive.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc", {
      data: JSON.stringify({
        pwd_id: shareCode,
        passcode: "",
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=UTF-8",
        "User-Agent": utils.getRandomPCUA(),
        Origin: "https://pan.quark.cn",
        Referer: NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName: "kuake",
          ruleIndex,
          shareCode,
          accessCode,
        }),
      },
      ...NetDiskCheckLinkValidityRequestOption,
    });
    if (!response.status && utils.isNull(response.data.responseText)) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    const data = utils.toJSON(response.data.responseText);
    if (data.message.includes("需要提取码")) {
      return {
        ...NetDiskCheckLinkValidityStatus.needAccessCode,
        data: data,
      };
    } else if (data.message.includes("ok")) {
      // 再请求判断是否存在部分违规文件
      const stoken = data["data"]["stoken"];
      const getSearchParams = {
        // pr: "ucpro",
        // fr: "pc",
        // uc_param_str: "",
        pwd_id: shareCode,
        stoken: stoken,
        // pdir_fid: 0,
        // force: 0,
        // _page: 1,
        // _size: 50,
        // _fetch_banner: 1,
        _fetch_share: 1,
        // _fetch_total: 1,
        // _sort: "file_type:asc,updated_at:desc",
        // __dt: 2283,
        __t: Date.now(),
      };
      const detailResponse = await httpx.get(
        `https://drive-h.quark.cn/1/clouddrive/share/sharepage/detail?${utils.toSearchParamsStr(getSearchParams)}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://pan.quark.cn",
            Referer: "https://pan.quark.cn/",
            "User-Agent": utils.getRandomPCUA(),
          },
          ...NetDiskCheckLinkValidityRequestOption,
        }
      );
      if (!detailResponse.status || utils.isNull(detailResponse.data.responseText)) {
        // 空的|失败的
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: detailResponse,
        };
      }
      // 解析json
      const detailJSON = utils.toJSON(detailResponse.data.responseText);
      if (detailJSON["data"]["share"]["status"] == 1) {
        // 判断是否存在部分违规文件
        if (detailJSON["data"]["share"]["partial_violation"]) {
          return {
            ...NetDiskCheckLinkValidityStatus.partialViolation,
            data: [data, detailJSON],
          };
        } else {
          return {
            ...NetDiskCheckLinkValidityStatus.success,
            data: [data, detailJSON],
          };
        }
      } else {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: [data, detailJSON],
        };
      }
    } else {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: data,
      };
    }
  },
};
