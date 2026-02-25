import { httpx, log, utils } from "@/env";
import { ParseFileCore } from "@/main/parse/NetDiskParseAbstract";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { NetDiskView } from "@/main/view/NetDiskView";
import type { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/types";
import Qmsg from "qmsg";
import { NetDiskAuthorization_feijipan_appToken } from "./authorization";
import { EncryUtil } from "./encry";
import type { FeiJiPanListJSON, FeiJiPanRecommendJSON } from "./Type";

export class NetDiskParse_feijipan extends ParseFileCore {
  isVip = false;
  get uuid() {
    let r = (e = 21) =>
      crypto
        .getRandomValues(new Uint8Array(e))
        .reduce(
          (e, t) => (
            (t &= 63),
            (e += t < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_"),
            e
          ),
          ""
        );
    return r();
  }
  get timestamp() {
    return EncryUtil.encryptHex(new Date().getTime());
  }
  get appToken() {
    return NetDiskAuthorization_feijipan_appToken.get();
  }
  async init(netDiskInfo: ParseFileInitConfig) {
    super.init(netDiskInfo);
    if (utils.isNull(this.uuid)) {
      Qmsg.error("请先打开此链接来获取uuid");
      return;
    }
    const $loading = Qmsg.loading("正在解析，请稍后...");
    const recommend = await this.recommend();
    if (!recommend) {
      Qmsg.error("获取folderIds失败");
      $loading.close();
      return;
    }
    if (recommend && recommend.length === 0) {
      Qmsg.error("没有分享文件");
      $loading.close();
      return;
    }
    log.info(`解析recommend: `, recommend);
    const firstRecommend = recommend[0];
    if (firstRecommend?.map?.isVip) {
      this.isVip = true;
    }
    const infoList = await this.list(firstRecommend.folderIds);
    if (!infoList) {
      $loading.close();
      return;
    }
    if (!infoList.length) {
      Qmsg.error("没有分享文件");
      $loading.close();
      return;
    }
    log.success(`解析list: `, infoList);
    if (infoList.length === 1 && infoList[0].fileType !== 2) {
      const data = infoList[0];
      const downloadUrl = this.getDownloadUrl(this.shareCode, data.fileId!, data.userId);
      NetDiskView.$inst.linearChainDialogView.oneFile({
        title: "小飞机网盘单文件直链",
        fileName: data.fileName || data.name,
        fileSize: typeof data.fileSize === "number" ? data.fileSize * 1024 : 0,
        downloadUrl: downloadUrl,
        fileUploadTime: data.updTime,
        fileLatestTime: data.updTime,
        clickCallBack: () => {
          const checkFlag = this.checkCanDownloadFile(data.fileSize);
          if (!checkFlag) {
            return checkFlag;
          }
        },
      });
    } else {
      $loading.setText("正在解析多文件...");
      const folderInfoList = this.getFolderInfo(infoList, 0);
      log.info("解析完毕");
      NetDiskView.$inst.linearChainDialogView.moreFile("小飞机网盘文件解析", folderInfoList);
    }
    $loading.close();
  }
  /**
   * 检测是否可以下载文件
   */
  checkCanDownloadFile(fileSize?: any) {
    if (typeof fileSize === "number" && fileSize > 512e3 && !this.isVip) {
      Qmsg.error(`非会员无法下载超过${utils.formatByteToSize(512e3 * 1024)}的文件`, {
        timeout: 5000,
      });
      return false;
    }
    return true;
  }
  /**
   * 生成请求以下api时需要的请求参数
   *
   * + recommend
   * + list
   */
  getRequestParams(shareCode: string, accessCode?: string | null) {
    const result = {
      devType: 6,
      devModel: "Chrome",
      uuid: this.uuid,
      extra: 2,
      timestamp: this.timestamp,
      shareId: shareCode,
      // type: 0,
      offset: 1,
      limit: 110,
      referer: "https://share.feijipan.com/s/" + shareCode,
    };
    if (typeof accessCode === "string") {
      // @ts-expect-error
      result.code = accessCode;
    }
    return result;
  }
  /**
   * 生成请求以下api时需要的请求头
   *
   * + recommend
   * + list
   */
  getRequestHeaders() {
    return {
      Accept: "application/json, text/plain, */*",
      Origin: "https://share.feijipan.com",
      Referer: "https://share.feijipan.com/",
      "User-Agent": utils.getRandomPCUA(),
      appToken: this.appToken,
    };
  }
  /**
   * 获取文件夹信息
   * @param infoList
   */
  getFolderInfo(
    infoList: NonNullable<Awaited<ReturnType<(typeof NetDiskParse_feijipan)["prototype"]["list"]>>>,
    index: number
  ) {
    const folderInfoList: PopsFolderDataConfig[] = [];
    infoList.forEach((item) => {
      if (item.fileType === 2) {
        // 文件夹
        folderInfoList.push({
          fileName: item.folderName || item.name,
          fileSize: 0,
          fileType: "",
          createTime: new Date(item.updTime).getTime(),
          latestTime: new Date(item.updTime).getTime(),
          isFolder: true,
          index: index,
          clickEvent: async () => {
            const __infoList = await this.list(item.folderId);
            if (__infoList) {
              return this.getFolderInfo(__infoList, index + 1);
            } else {
              return [];
            }
          },
        });
      } else {
        // 文件
        folderInfoList.push({
          fileName: item.fileName || item.name,
          fileSize: typeof item.fileSize === "number" ? item.fileSize * 1024 : 0,
          fileType: "",
          createTime: new Date(item.updTime).getTime(),
          latestTime: new Date(item.updTime).getTime(),
          isFolder: false,
          index: index,
          clickEvent: async () => {
            let downloadUrl = this.getDownloadUrl(this.shareCode, item.fileId!, item.userId);
            if (NetDiskFilterScheme.isForwardDownloadLink("feijipan")) {
              downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("feijipan", downloadUrl);
            }
            const checkFlag = this.checkCanDownloadFile(item.fileSize);
            if (checkFlag) {
              return {
                url: downloadUrl,
                autoDownload: true,
                mode: "aBlank",
              };
            } else {
              return {
                url: downloadUrl,
                autoDownload: false,
              };
            }
          },
        });
      }
    });
    return folderInfoList;
  }
  /**
   * 获取推荐信息，一般用于先获取folderId
   */
  async recommend() {
    const response = await httpx.post(
      `https://api.feijipan.com/ws/recommend/list?` +
        utils.toSearchParamsStr({
          ...this.getRequestParams(this.shareCode, this.accessCode),
          type: 0,
        }),
      {
        headers: {
          ...this.getRequestHeaders(),
        },
      }
    );
    if (!response.status) {
      return;
    }
    const data = utils.toJSON<FeiJiPanRecommendJSON>(response.data.responseText);

    if (data.code !== 200) {
      log.error(data);
      return;
    }
    if (!Array.isArray(data.list)) {
      log.error(data);
      return;
    }
    return data.list;
  }
  /**
   * 获取文件信息列表
   */
  async list(folderId: string | number | null = "") {
    const response = await httpx.post(
      "https://api.feijipan.com/ws/share/list?" +
        utils.toSearchParamsStr({
          ...this.getRequestParams(this.shareCode, this.accessCode),
          folderId,
        }),
      {
        headers: {
          ...this.getRequestHeaders(),
        },
      }
    );
    if (!response.status) {
      return;
    }
    const data = utils.toJSON<FeiJiPanListJSON>(response.data.responseText);
    if (data.code !== 200) {
      log.error(data);
      return;
    }
    if (!Array.isArray(data.list)) {
      log.error("NetDiskParse_Jianguoyun.getFileList: data.list is not array", data);
      return;
    }
    return data.list;
  }
  /**
   * 下载文件
   */
  getDownloadUrl(shareId: string, fileId: string | number, userId: string | number = "") {
    /** 猜测该值是用于会员下载（>500MB） */
    const downloadId = EncryUtil.encryptHex(fileId + "|" + userId);
    const currentTimeStamp = new Date().getTime();
    const auth = EncryUtil.encryptHex(fileId + "|" + currentTimeStamp);
    const searchParam = {
      downloadId: downloadId,
      enable: 1,
      devType: 6,
      uuid: this.uuid,
      timestamp: this.timestamp,
      auth: auth,
      shareId: shareId,
    };
    const searchStr = utils.toSearchParamsStr(searchParam);
    log.info(`download searchParam: `, {
      ...searchParam,
      fileId,
      userId,
    });
    const api = "https://api.feijipan.com/ws/file/redirect?" + searchStr;
    return api;
  }
}
