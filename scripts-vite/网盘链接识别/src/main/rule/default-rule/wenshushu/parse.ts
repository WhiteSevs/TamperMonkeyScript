import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { ParseFileCore } from "../../../parse/NetDiskParseAbstract";
import { NetDiskLinkClickMode, NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { NetDiskView } from "@/main/view/NetDiskView";

export class NetDiskParse_Wenshushu extends ParseFileCore {
  /**
   * 用于header头x-token
   */
  token = void 0 as any as string;
  code = {
    1004: "no token",
    1008: "您没有权限访问",
    1013: "糟糕，此任务已过期销毁，下次要记得续期",
    1066: "对方设置的下载 / 预览次数已用完",
    1088: "糟糕，您访问的页面不存在",
  };
  async init(netDiskInfo: ParseFileInitConfig) {
    super.init(netDiskInfo);
    const that = this;
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const $loading = Qmsg.loading("正在解析，请稍后...");
    const token = await this.getWssToken();
    if (!token) {
      $loading.close();
      return;
    }
    $loading.setText("正在获取pid...");
    const pidInfo = await this.getPid();
    if (!pidInfo) {
      $loading.close();
      return;
    }
    $loading.setText("正在获取文件列表信息...");
    await this.getFileNList(pidInfo.bid, pidInfo.pid);
    $loading.close();
  }
  /**
   * 获取token
   * wss:xxxxxx
   */
  async getWssToken(): Promise<string | undefined> {
    const that = this;
    const response = await httpx.post("https://www.wenshushu.cn/ap/login/anonymous", {
      responseType: "json",
      data: JSON.stringify({
        dev_info: "{}",
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": utils.getRandomAndroidUA(),
        Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
      },
    });
    log.success(response);
    if (!response.status) {
      return;
    }
    const data = utils.toJSON(response.data.responseText);
    if (data["code"] === 0) {
      that.token = data["data"]["token"];
      return data["data"]["token"];
    } else if (data["code"] in that.code) {
      Qmsg.error(that.code[data["code"] as keyof typeof that.code]);
    } else {
      Qmsg.error("获取wss失败");
    }
  }
  /**
   * 获取pid
   */
  async getPid() {
    const that = this;
    const response = await httpx.post({
      url: "https://www.wenshushu.cn/ap/task/mgrtask",
      responseType: "json",
      data: JSON.stringify({
        tid: that.shareCode,
        password: "",
        ufileid: "",
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": utils.getRandomAndroidUA(),
        Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
        "x-token": that.token,
      },
    });
    log.success(response);
    if (!response.status) {
      return;
    }
    const data = utils.toJSON(response.data.responseText);
    if (data["code"] === 0) {
      return {
        bid: data["data"]["boxid"],
        pid: data["data"]["ufileid"],
      };
    } else if (data["code"] in that.code) {
      Qmsg.error(that.code[data["code"] as keyof typeof that.code]);
    } else {
      Qmsg.error("获取pid失败");
    }
  }
  /**
   * 获取文件列表信息
   * @param bid
   * @param pid
   */
  async getFileNList(bid: string, pid: string) {
    const that = this;
    const response = await httpx.post("https://www.wenshushu.cn/ap/ufile/nlist", {
      responseType: "json",
      data: JSON.stringify({
        start: 0,
        sort: {
          name: "asc",
        },
        bid: bid,
        pid: pid,
        options: {
          uploader: "true",
        },
        size: 50,
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": utils.getRandomAndroidUA(),
        Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
        "x-token": that.token,
      },
    });
    log.success(response);
    if (!response.status) {
      return;
    }
    let jsonData = utils.toJSON(response.data.responseText);
    if (jsonData["code"] === 0) {
      if (jsonData["data"]["fileList"][0]["type"] === 2) {
        Qmsg.error("该链接为多层级文件嵌套，跳转");
        NetDiskLinkClickMode.openBlankUrl(
          NetDiskLinkClickModeUtils.getBlankUrl({
            ruleKeyName: "wenshushu",
            ruleIndex: that.ruleIndex,
            shareCode: that.shareCode,
            accessCode: that.accessCode,
          }),
          "wenshushu",
          that.ruleIndex,
          that.shareCode,
          that.accessCode
        );
      } else {
        await that.getDownloadUrl(jsonData["data"]["fileList"][0]);
      }
    } else if (jsonData["code"] in that.code) {
      Qmsg.error(that.code[jsonData["code"] as keyof typeof that.code]);
    } else {
      Qmsg.error("获取文件信息失败");
    }
  }
  /**
   * 获取下载链接
   * @param info
   */
  async getDownloadUrl(info: { fname: string; fid: number | string; size: number }) {
    const that = this;
    const file_name = info.fname;
    const file_size = utils.formatByteToSize(info.size);
    const response = await httpx.post("https://www.wenshushu.cn/ap/dl/sign", {
      responseType: "json",
      data: JSON.stringify({
        ufileid: info.fid,
        consumeCode: 0,
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": utils.getRandomAndroidUA(),
        Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
        "x-token": that.token,
      },
    });
    if (!response.status) {
      return;
    }
    log.success(response);
    const data = utils.toJSON(response.data.responseText);
    if (data["code"] == 0) {
      let downloadUrl = data["data"]["url"];
      if (downloadUrl === "") {
        Qmsg.error("对方的分享流量不足");
      } else {
        if (NetDiskFilterScheme.isForwardDownloadLink("wenshushu")) {
          downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("wenshushu", downloadUrl);
        }

        // 文叔叔没有上传时间信息(暂时是这样的)
        NetDiskView.$inst.linearChainDialogView.oneFile({
          title: "文叔叔单文件直链",
          fileName: file_name,
          fileSize: file_size,
          downloadUrl: downloadUrl,
        });
      }
    } else if (data["data"] in that.code) {
      Qmsg.error(that.code[data["data"] as keyof typeof that.code]);
    } else {
      Qmsg.error("获取下载链接失败");
    }
  }
}
