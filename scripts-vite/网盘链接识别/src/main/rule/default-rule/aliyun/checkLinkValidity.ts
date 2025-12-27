import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityRequestOption } from "@/main/check-valid/NetDiskCheckLinkValidity";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_aliyun: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { shareCode } = netDiskInfo;
    const response = await httpx.post(
      "https://api.aliyundrive.com/adrive/v3/share_link/get_share_by_anonymous?share_id=" + shareCode,
      {
        data: JSON.stringify({
          share_id: shareCode,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "User-Agent": utils.getRandomPCUA(),
          Referer: "https://www.aliyundrive.com/",
          Origin: "https://www.aliyundrive.com",
        },
        ...NetDiskCheckLinkValidityRequestOption,
      }
    );
    const data = utils.toJSON(response.data.responseText);
    if (!response.status && utils.isNull(data)) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    if (
      data["code"] === "ParamFlowException" ||
      data["code"] === "NotFound.ShareLink" ||
      data["code"] === "ShareLink.Cancelled"
    ) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: data,
      };
    } else if (data["file_count"] === 0 || data["file_infos"]?.length === 0) {
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
