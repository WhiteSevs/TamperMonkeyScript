import { httpx, log, utils } from "@/env";
import {
  NetDiskCheckLinkValidity,
  NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_chengtong: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    /* 城通通用的检查api */
    /* ref是来源 */
    let blankUrl = NetDiskLinkClickModeUtils.getBlankUrl({
      ruleKeyName: "chengtong",
      ruleIndex,
      shareCode,
      accessCode,
    });
    let blankUrlInst = new URL(blankUrl);
    /* f是文件 d是文件夹 */
    let path = blankUrlInst.pathname.split("/")[1].trim();
    let url = "";
    if (blankUrlInst.pathname === "/" && blankUrlInst.hash.startsWith("#/d/")) {
      // 文件夹
      // /d
      path = "d";
    }
    if (path === "f" || path === "file") {
      /* 文件 */
      url = `https://webapi.ctfile.com/getfile.php?path=${path}&f=${shareCode}&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
    } else if (path === "d" || path === "dir") {
      /* 文件夹 */
      url = `https://webapi.ctfile.com/getdir.php?path=${path}&d=${shareCode}&folder_id=&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
    } else {
      log.warn("未知path", [ruleIndex, shareCode, accessCode]);
      return {
        ...NetDiskCheckLinkValidityStatus.unknown,
        data: null,
      };
    }
    let response = await httpx.get(url, {
      headers: {
        Host: "webapi.ctfile.com",
        Origin: "https://url95.ctfile.com",
        Referer: blankUrl,
        Accept: "application/json, text/javascript, */*; q=0.01",
        "User-Agent": utils.getRandomPCUA(),
      },
      ...NetDiskCheckLinkValidityRequestOption,
    });
    let responseText = response.data.responseText;
    if (!response.status && utils.isNull(responseText)) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    let data = utils.toJSON(responseText);
    if (data["code"] === 200) {
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: data,
      };
    }
    if (data["code"] === 401) {
      return {
        ...NetDiskCheckLinkValidityStatus.needAccessCode,
        data: data,
      };
    }
    if (data["code"] === 404 || data["code"] === 503 || data["code"] === 504) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: data,
      };
    }
    return {
      ...NetDiskCheckLinkValidityStatus.unknown,
      data: data,
    };
  },
};
