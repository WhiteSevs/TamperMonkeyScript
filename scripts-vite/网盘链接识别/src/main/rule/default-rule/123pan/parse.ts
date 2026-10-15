import { httpx, log, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/handler/check-valid/NetDiskCheckLinkValidityStatus";
import { ParseFileCore } from "@/main/handler/parse/NetDiskParseAbstract";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { NetDiskView } from "@/main/view/NetDiskView";
import type { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/types/index.js";
import Qmsg from "qmsg";
import { NetDiskAuthorization_123pan_Authorization } from "./authorization";
import { NetDiskCheckLinkValidity_123pan } from "./checkLinkValidity";

// https://github.com/qaiu/netdisk-fast-download
// AI: 豆包 2.1 Lite
const API_BASE = "https://api.123278.com";
const GET_SHARE_INFO_URL =
  API_BASE +
  "/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc" +
  "&shareKey={shareKey}&SharePwd={pwd}&ParentFileId={ParentFileId}&Page=1";
const DOWNLOAD_API_V2_PATH = "/b/api/v2/share/download/info";
const CHAR_MAP = "adefghlmyijnopkqrstubcvwsz";

/* ============================================================
 * 工具函数
 * ========================================================== */

// CRC32（与 Java java.util.zip.CRC32 对 ASCII 输入结果一致）
function crc32(str: string) {
  let crc = 0xffffffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i);
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  crc = (crc ^ 0xffffffff) >>> 0;
  return crc.toString(16).padStart(8, "0");
}

// 移植自 Ye2Tool.encode123
// url: 接口路径，如 /b/api/v2/share/download/info
// way: android / web
// version: 客户端版本号
function encode123(url: string, way: string, version: string, timestamp: string) {
  const randomInt = Math.floor(Math.random() * 10000000) + 1; // 1..10000000
  const a = Math.floor((10000000 * randomInt) / 10000); // Java 整数除法
  const timeLong = Math.floor(parseInt(timestamp, 10) / 1000);

  const dt = new Date(timeLong * 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  const timeStr =
    "" + dt.getFullYear() + pad(dt.getMonth() + 1) + pad(dt.getDate()) + pad(dt.getHours()) + pad(dt.getMinutes());

  let g = "";
  for (const c of timeStr) {
    const digit = c.charCodeAt(0) - 48; // '0' -> 0
    if (digit === 0) {
      g += CHAR_MAP.charAt(0);
    } else {
      g += CHAR_MAP.charAt(digit - 1);
    }
  }

  const y = parseInt(crc32(g), 16).toString(10);
  const finalCrcInput = `${timeLong}|${a}|${url}|${way}|${version}|${y}`;
  const finalCrc = parseInt(crc32(finalCrcInput), 16).toString(10);

  return `?${y}=${timeLong}-${a}-${finalCrc}`;
}

// 获取 token
function getToken() {
  const manual = NetDiskAuthorization_123pan_Authorization.get()?.trim();
  if (utils.isNull(manual)) {
    Qmsg.error("请先前往123云盘官网进行登录，用于获取token", { timeout: 5000 });
    throw new Error("请先前往123云盘官网进行登录，用于获取token");
  }
  return manual.replace(/^Bearer\s+/i, "");
}
// 构造 Origin / Referer（对齐 Java resolveYeShareOrigin + buildShareReferer）
function buildShareHeaders(shareKey: string, pwd: string, extra = {}) {
  const origin = location.origin;
  const referer = `${origin}/123pan/${shareKey}` + (pwd ? `?pwd=${encodeURIComponent(pwd)}` : "");
  return Object.assign(
    {
      Origin: origin,
      Referer: referer,
    },
    extra
  );
}

export class NetDiskParse_123pan extends ParseFileCore {
  /** 新版123盘API基础地址 */
  newApiBaseUrl = "https://api.123pan.com";
  async init(netDiskInfo: ParseFileInitConfig) {
    super.init(netDiskInfo);
    const $loading = Qmsg.loading("正在解析，请稍后...");
    const checkLinkValidityStatus = await NetDiskCheckLinkValidity_123pan.init(netDiskInfo);
    if (
      checkLinkValidityStatus.code !== NetDiskCheckLinkValidityStatus.success.code &&
      checkLinkValidityStatus.code !== NetDiskCheckLinkValidityStatus.needAccessCode.code
    ) {
      $loading.close();
      Qmsg.error(checkLinkValidityStatus.msg);
      return;
    }
    // 获取分享信息
    const shareInfo = await this.getShareInfo(netDiskInfo.shareCode, netDiskInfo.accessCode);
    $loading.close();
    if (!shareInfo) return;
    log.info("获取分享信息成功", shareInfo);
    const folderInfoList = this.getFolderInfo(shareInfo, 0);
    log.info("解析完毕");
    NetDiskView.$inst.linearChainDialogView.moreFile("123盘文件解析", folderInfoList);
  }
  /**
   * 获取分享目录信息
   * @param shareKey
   * @param pwd
   * @param parentFileId
   * @returns
   */
  async getShareInfo(shareKey: string, pwd: string, parentFileId: number | string = "0") {
    const url = GET_SHARE_INFO_URL.replace("{shareKey}", encodeURIComponent(shareKey))
      .replace("{pwd}", encodeURIComponent(pwd || ""))
      .replace("{ParentFileId}", encodeURIComponent(parentFileId));

    const token = getToken();
    const headers = buildShareHeaders(shareKey, pwd, {
      Accept: "application/json, text/plain, */*",
      "User-Agent": navigator.userAgent,
    });
    if (token) {
      headers["Authorization" as keyof typeof headers] = "Bearer " + token;
    }

    const response = await httpx.get(url, { headers });
    if (!response.isSuccess) {
      return;
    }

    const data = utils.toJSON<{
      code: number;
      message?: string;
      data: {
        Expired: boolean;
        InfoList: {
          Category: number;
          ContentType: string;
          // "2026-10-13T21:08:00+08:00"
          CreateAt: number;
          DownloadUrl: string;
          Etag: string;
          FileId: number;
          FileName: string;
          ParentFileId: number;
          PunishFlag: number;
          S3KeyFlag: number;
          Size: number;
          Status: number;
          StorageNode: string;
          Type: 0 | 1;
          UpdateAt: string;
        }[];
        IsFirst: boolean;
        IsPaidPreview: boolean;
        // 1
        Len: number;
        // "-1"
        Next: string;
      };
    }>(response.data.responseText);
    if (data.code === 0) {
      const infoList = data.data.InfoList;
      return infoList;
    } else if (data.code === 5103) {
      // 需要正确的访问码
      NetDiskView.$inst.newAccessCodeView(
        void 0,
        "_123pan",
        this.ruleIndex,
        this.shareCode,
        this.accessCode,
        (option) => {
          this.init({
            ruleIndex: this.ruleIndex,
            shareCode: this.shareCode,
            accessCode: option.accessCode,
          });
        }
      );
    } else if (typeof data.message === "string") {
      Qmsg.error(data.message);
    } else {
      log.error(data);
      Qmsg.error("解析失败，未知的JSON格式");
    }
  }
  /**
   * 旧版 android 下载接口（v2 失败时回退）
   * @param shareKey
   * @param pwd
   * @param fileInfo
   * @returns
   */
  async legacyDownload(
    shareKey: string,
    pwd: string,
    fileInfo: NonNullable<Awaited<ReturnType<NetDiskParse_123pan["getShareInfo"]>>>["0"]
  ) {
    const timestamp = String(Date.now());
    const signed = encode123("/b/api/file/download_info", "android", "55", timestamp);
    const url = API_BASE + "/b/api/file/download_info" + signed;

    const token = getToken();
    const headers = buildShareHeaders(shareKey, pwd, {
      platform: "android",
      "App-Version": "55",
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36",
    });
    if (token) headers["Authorization" as keyof typeof headers] = "Bearer " + token;

    const body = {
      driveId: 0,
      etag: fileInfo.Etag,
      fileId: fileInfo.FileId,
      fileName: fileInfo.FileName,
      s3keyFlag: fileInfo.S3KeyFlag,
      size: fileInfo.Size,
      type: 0,
    };

    const response = await httpx.post(url, { headers, data: body });

    if (!response.isSuccess) return;
    const data = utils.toJSON(response.data.responseText);
    if (data.code == 0) {
      let downURL = (data.data && (data.data.DownloadUrl || data.data.DownloadURL)) || "";
      if (!downURL) {
        Qmsg.error("旧下载接口未返回 DownloadUrl");
        return;
      }

      // DownloadUrl 里可能带 ?params=<base64>，解码后才是真正的 CDN 地址
      try {
        const u = new URL(downURL);
        const params = u.searchParams.get("params");
        if (params) {
          // base64url -> base64
          let b64 = params.replace(/-/g, "+").replace(/_/g, "/");
          while (b64.length % 4) b64 += "=";
          const decoded = decodeURIComponent(
            atob(b64)
              .split("")
              .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
              .join("")
          );
          return decoded;
        }
      } catch {
        /* 解析失败就直接返回原 URL */
      }
      return downURL;
    } else if (typeof data.message === "string") {
      Qmsg.error(data.message);
    } else {
      Qmsg.error("解析失败，未知的JSON格式");
    }
  }
  /**
   *  v2 分享下载接口（优先路径）
   * @param shareKey
   * @param pwd
   * @param fileInfo
   * @returns
   */
  async v2Download(
    shareKey: string,
    pwd: string,
    fileInfo: NonNullable<Awaited<ReturnType<NetDiskParse_123pan["getShareInfo"]>>>["0"]
  ) {
    const timestamp = String(Date.now());
    const signed = encode123(DOWNLOAD_API_V2_PATH, "web", "3", timestamp);
    const url = API_BASE + DOWNLOAD_API_V2_PATH + signed;

    const token = getToken();
    const headers = buildShareHeaders(shareKey, pwd, {
      Accept: "*/*",
      "App-Version": "3",
      platform: "web",
      "Content-Type": "application/json;charset=UTF-8",
      "User-Agent": navigator.userAgent,
    });
    if (token) headers["Authorization" as keyof typeof headers] = "Bearer " + token;

    const body = {
      ShareKey: shareKey,
      FileID: fileInfo.FileId,
      S3keyFlag: fileInfo.S3KeyFlag,
      Size: fileInfo.Size,
      Etag: fileInfo.Etag,
    };

    const response = await httpx.post(url, { headers, data: body });
    if (!response.isSuccess) return;
    const data = utils.toJSON(response.data.responseText);
    if (data.code == 0) {
      const downloadPath = data.downloadPath;
      if (!downloadPath) return "";
      let prefix = "";
      if (Array.isArray(data.dispatchList) && data.dispatchList.length > 0) {
        prefix = data.dispatchList[0].prefix || "";
      }
      let final = prefix;
      if (final && !final.endsWith("/")) final = final.slice(0, -1);
      final += downloadPath.startsWith("/") ? downloadPath : "/" + downloadPath;
      return final;
    } else if (typeof data.message === "string") {
      log.error("[123pan] v2 " + data.message);
    }
  }
  /**
   * 获取文件夹信息
   * @param infoList
   */
  getFolderInfo(
    infoList: {
      Category: number;
      ContentType: string;
      CreateAt: number;
      DownloadUrl: string;
      Etag: string;
      FileId: number;
      FileName: string;
      ParentFileId: number;
      PunishFlag: number;
      S3KeyFlag: number;
      Size: number;
      Status: number;
      StorageNode: string;
      Type: 0 | 1;
      UpdateAt: string;
    }[],
    index: number
  ) {
    const folderInfoList: PopsFolderDataConfig[] = [];
    infoList.forEach((item) => {
      if (item.Type) {
        // 文件夹
        folderInfoList.push({
          fileName: item.FileName,
          fileSize: 0,
          fileType: "",
          createTime: new Date(item.CreateAt).getTime(),
          latestTime: new Date(item.UpdateAt).getTime(),
          isFolder: true,
          index: index,
          clickEvent: async () => {
            const childFolderInfoList = await this.getShareInfo(this.shareCode, this.accessCode, item["FileId"]);
            if (childFolderInfoList) {
              return this.getFolderInfo(childFolderInfoList, index + 1);
            } else {
              return [];
            }
          },
        });
      } else {
        // 文件
        folderInfoList.push({
          fileName: item.FileName,
          fileSize: item.Size,
          fileType: "",
          createTime: new Date(item.CreateAt).getTime(),
          latestTime: new Date(item.UpdateAt).getTime(),
          isFolder: false,
          index: index,
          clickEvent: async () => {
            if (item.Status == 104) {
              Qmsg.error("文件已失效");
            } else if (utils.isNull(item.DownloadUrl)) {
              const $loading = Qmsg.loading("正在获取下载链接");
              let downloadUrl = await this.v2Download(this.shareCode, this.accessCode, item);
              if (!downloadUrl) {
                log.error("[123pan] v2 接口失败，回退旧接口");
                downloadUrl = await this.legacyDownload(this.shareCode, this.accessCode, item);
              }
              $loading.close();
              if (!downloadUrl) {
                return;
              }
              if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
                downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("_123pan", downloadUrl);
              }
              return {
                mode: "aBlank",
                url: downloadUrl,
              };
            } else {
              return {
                mode: "aBlank",
                url: item.DownloadUrl,
              };
            }
          },
        });
      }
    });
    return folderInfoList;
  }
}
