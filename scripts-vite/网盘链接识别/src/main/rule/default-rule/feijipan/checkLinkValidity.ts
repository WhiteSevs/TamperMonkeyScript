import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskParse_feijipan } from "./parse";
import type { FeiJiPanRecommendJSON } from "./Type";

export const NetDiskCheckLinkValidity_feijipan: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const parser = new NetDiskParse_feijipan();
    const response = await httpx.post(
      `https://api.feijipan.com/ws/recommend/list?` +
        utils.toSearchParamsStr({
          ...parser.getRequestParams(netDiskInfo.shareCode),
          type: 0,
        }),
      {
        headers: {
          ...parser.getRequestHeaders(),
        },
      }
    );
    if (!response.status || utils.isNull(response.data.responseText)) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    const data = utils.toJSON<FeiJiPanRecommendJSON>(response.data.responseText);
    if (data.code !== 200) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        msg: typeof data.msg === "string" ? data.msg : NetDiskCheckLinkValidityStatus.failed.msg,
        data: data,
      };
    }
    if (!Array.isArray(data.list)) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        msg: "list不是数组类型",
        data: data,
      };
    }
    if (data.list.length === 0) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        msg: "list为空",
        data: data,
      };
    }
    const firstRecommend = data.list[0];

    if (!Array.isArray(firstRecommend.fileList)) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        msg: "fileList不是数组类型",
        data: data,
      };
    }
    if (firstRecommend?.fileList?.length === 0) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        msg: "fileList为空",
        data: data,
      };
    }
    return {
      ...NetDiskCheckLinkValidityStatus.success,
      data: data,
    };
  },
};
