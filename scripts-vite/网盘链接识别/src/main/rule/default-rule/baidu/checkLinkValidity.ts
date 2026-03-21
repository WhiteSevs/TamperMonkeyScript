import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/handler/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskCheckLinkValidityRequestOption } from "@/main/handler/check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_baidu: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const url = NetDiskLinkClickModeUtils.getBlankUrl({
      ruleKeyName: "baidu",
      ruleIndex,
      shareCode,
      accessCode,
    });
    const response = await httpx.get(url, {
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        Host: "pan.baidu.com",
        Referer: `https://pan.baidu.com/share/init?surl=${shareCode}&pwd=${accessCode}`,
        Origin: "https://pan.baidu.com",
        "User-Agent": utils.getRandomPCUA(),
      },
      ...NetDiskCheckLinkValidityRequestOption,
    });
    const responseText = response.data.responseText;
    const finalUrl = response.data.finalUrl;
    if (typeof finalUrl === "string") {
      const finalUrlInstance = new URL(finalUrl);
      if (finalUrlInstance.hostname !== "pan.baidu.com") {
        // 可能是触发了百度验证
        // passport.baidu.com
        return {
          ...NetDiskCheckLinkValidityStatus.verify,
          msg: `<a href='${finalUrl}' target='_blank' style="color: red;">触发百度安全验证</a>`,
          data: response,
        };
      }
    }
    if (!response.status) {
      if (utils.isNull(responseText)) {
        // 也可能是分享的文件已被删除（在PC上）
        // 使用其它方式再验证一下
        const response = await httpx.get(`https://pan.baidu.com/api/shorturlinfo`, {
          data: {
            clienttype: 5,
            shorturl: netDiskInfo.shareCode,
            linksource: "",
            // share
            // error-new
            requestSource: "share",
            web: 5,
            channel: "chunlei",
            logid: btoa(String(Date.now() * 10)),
          },
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded",
            Host: "pan.baidu.com",
            Referer: url,
            Origin: "https://pan.baidu.com",
            "User-Agent": utils.getRandomAndroidUA(),
          },
          ...NetDiskCheckLinkValidityRequestOption,
        });
        const data = utils.toJSON<{
          errno: number;
          show_msg: string;
          pwd?: string;
        }>(response.data.responseText);
        if (data.errno === 140) {
          // 啊哦，链接出错了
          return {
            ...NetDiskCheckLinkValidityStatus.failed,
            msg: typeof data.show_msg === "string" ? data.show_msg : NetDiskCheckLinkValidityStatus.failed.msg,
            data: response,
          };
        } else if (data.errno === -3 && data.pwd == null) {
          // 缺少密码
          // return {
          //   ...NetDiskCheckLinkValidityStatus.needAccessCode,
          //   data: response,
          // };
        }
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
    }
    if (response.data.finalUrl.includes("404.html")) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    if (responseText.includes("过期时间：")) {
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: response,
      };
    } else if (responseText.includes("输入提取")) {
      return {
        ...NetDiskCheckLinkValidityStatus.needAccessCode,
        data: response,
      };
    } else if (responseText.includes("不存在") || responseText.includes("已失效")) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: response,
      };
    } else {
      return {
        ...NetDiskCheckLinkValidityStatus.unknown,
        data: response,
      };
    }
  },
};
