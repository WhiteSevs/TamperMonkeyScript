import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskParse_feijipan } from "./parse";
import type { FeiJiPanListJSON, FeiJiPanRecommendJSON } from "./Type";

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
        msg: "recommend.list不是数组类型",
        data: data,
      };
    }
    if (data.list.length === 0) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        msg: "recommend.list为空",
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
      // 通过list确认是否真为空
      const folderIds = firstRecommend.folderIds;
      const listResponse = await httpx.post(
        "https://api.feijipan.com/ws/share/list?" +
          utils.toSearchParamsStr({
            ...parser.getRequestParams(netDiskInfo.shareCode, netDiskInfo.accessCode),
            folderIds,
          }),
        {
          headers: {
            ...parser.getRequestHeaders(),
          },
        }
      );
      if (!listResponse.status) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: listResponse,
        };
      }
      const listData = utils.toJSON<FeiJiPanListJSON>(listResponse.data.responseText);
      if (listData.code !== 200) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          msg: typeof listData.msg === "string" ? listData.msg : NetDiskCheckLinkValidityStatus.failed.msg,
          data: listData,
        };
      }
      if (!Array.isArray(listData.list)) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          msg: "list.list不是数组类型",
          data: listData,
        };
      }
      if (listData.list.length === 0) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          msg: "list.list为空",
          data: listData,
        };
      }
    }
    return {
      ...NetDiskCheckLinkValidityStatus.success,
      data: data,
    };
  },
};
