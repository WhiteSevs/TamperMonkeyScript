import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { GM_download } from "ViteGM";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/types/index";
import { NetDiskView } from "@/main/view/NetDiskView";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { ParseFileCore } from "@/main/handler/parse/NetDiskParseAbstract";
import { NetDiskCommonUtils } from "@/utils/NetDiskCommonUtils";

export class NetDiskParse_UC extends ParseFileCore {
  /**
   * 入口
   */
  async init(netDiskInfo: ParseFileInitConfig) {
    super.init(netDiskInfo);
    const that = this;
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;

    const $loading = Qmsg.loading("正在检查是否已登录UC网盘...");
    const loginStatus = await this.isLogin();
    if (!Boolean(loginStatus)) {
      $loading.close();
      this.gotoLogin(
        "检测到尚未登录UC网盘，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC才有登录选项)"
      );
      return;
    }
    $loading.setText("正在获取UC网盘的stoken...");
    const stoken = await this.getStoken(this.shareCode, this.accessCode);
    if (!stoken) {
      $loading.close();
      return;
    }
    $loading.setText("正在解析文件列表...");
    const detail = await this.getDetail(this.shareCode, this.accessCode, stoken);
    if (!detail) {
      $loading.close();
      Qmsg.error("UC网盘：获取detail失败");
      return;
    }
    if (detail.length === 1 && detail[0].dir == false && detail[0].file_type === 1) {
      // 单文件
      $loading.setText("正在获取下载链接...");
      const oneFileDetail = detail[0];
      const oneFileDownloadDetail = await this.getDownload(
        this.shareCode,
        stoken,
        oneFileDetail.fid,
        oneFileDetail.share_fid_token
      );
      if (!oneFileDownloadDetail || !oneFileDownloadDetail[0].download_url) {
        $loading.close();
        Qmsg.error("获取单文件download_url失败");
        return;
      }
      NetDiskView.$inst.linearChainDialogView.oneFile({
        title: "UC网盘单文件直链",
        fileName: oneFileDownloadDetail[0].file_name,
        fileSize: utils.formatByteToSize(oneFileDownloadDetail[0].size),
        downloadUrl: oneFileDownloadDetail[0].download_url,
        fileUploadTime: utils.formatTime(oneFileDownloadDetail[0].created_at),
        fileLatestTime: utils.formatTime(oneFileDownloadDetail[0].last_update_at),
        clickCallBack: () => {
          this.downloadFile(oneFileDownloadDetail[0].file_name, oneFileDownloadDetail[0].download_url);
          return false;
        },
      });
    } else {
      // 多文件
      log.success("该链接是 多文件");
      $loading.setText("正在解析多文件...");
      const folderInfoList = this.getFolderInfo(detail, stoken, 0);
      log.info("递归完毕");
      NetDiskView.$inst.linearChainDialogView.moreFile("UC网盘文件解析", folderInfoList);
      return;
    }
    $loading.close();
  }
  /**
   * 判断是否已登录UC网盘
   */
  async isLogin() {
    const response = await httpx.get("https://drive.uc.cn/", {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
      },
    });
    log.success("判断是否已登录UC网盘", response);
    if (!response.status) {
      return;
    }
    if (response.data.finalUrl === "https://drive.uc.cn/list") {
      return "已登录";
    } else {
      return false;
    }
  }
  /**
   * 下载文件
   * @param fileName 文件名
   * @param downloadUrl 下载链接
   */
  downloadFile(fileName: string, downloadUrl: string) {
    log.info(`调用【GM_download】下载：`, arguments);
    if (window.location.hostname === "drive.uc.cn") {
      window.open(downloadUrl, "_blank");
      return;
    }
    if (!NetDiskCommonUtils.isSupport_GM_download()) {
      Qmsg.error("当前脚本环境不支持API 【GM_download】");
      return;
    }
    /** 取消下载函数 */
    let abortDownload: null | Function = null;
    /** 是否成功下载 */
    let isSuccessDownload = false;
    /** 是否下载完成 */
    let isDownloadEnd = false;
    let downloadingQmsg = Qmsg.loading("下载中...", {
      showClose: true,
      onClose() {
        if (!isSuccessDownload && typeof abortDownload === "function") {
          abortDownload();
        }
      },
    });
    let result = GM_download({
      url: downloadUrl,
      name: fileName,
      headers: {
        Referer: "https://drive.uc.cn/",
      },
      onload() {
        isSuccessDownload = true;
        downloadingQmsg.close();
        Qmsg.success(`下载 ${fileName} 已完成`, { consoleLogContent: true });
      },
      onprogress(details) {
        if (typeof details === "object" && "loaded" in details && "total" in details && !isDownloadEnd) {
          let progressNum = details.loaded / details.total;
          let formatProgressNum = (progressNum * 100).toFixed(2);
          downloadingQmsg.setText(`下载中...${formatProgressNum}%`);
          if (details.loaded === details.total) {
            isDownloadEnd = true;
          }
        }
      },
      onerror(error) {
        downloadingQmsg.close();
        log.error("下载失败error👉", error);
        if (typeof error === "object" && error["error"]) {
          Qmsg.error(`下载 ${fileName} 失败或已取消 原因：${error["error"]}`, {
            timeout: 6000,
            consoleLogContent: true,
          });
        } else {
          Qmsg.error(`下载 ${fileName} 失败或已取消`, {
            consoleLogContent: true,
          });
        }
      },
      ontimeout() {
        downloadingQmsg.close();
        Qmsg.error(`下载 ${fileName} 请求超时`, { consoleLogContent: true });
      },
    });
    if (typeof result === "object" && result != null && "abort" in result) {
      abortDownload = result["abort"];
    }
  }
  /**
   * 前往登录
   * @param text 弹窗的显示的内容
   */
  gotoLogin(text = "") {
    NetDiskPops.confirm(
      {
        title: {
          position: "center",
          text: "UC网盘",
        },
        content: {
          text: text,
          html: false,
        },
        btn: {
          reverse: true,
          position: "end",
          ok: {
            text: "前往",
            enable: true,
            callback() {
              window.open("https://drive.uc.cn", "_blank");
            },
          },
        },
      },
      NetDiskView.$config.viewSizeConfig.tianYiYunLoginTip
    );
  }
  /**
   * 获取stoken
   * @param pwd_id 分享码
   * @param passcode 访问码
   */
  async getStoken(pwd_id: string, passcode: AccessCodeNonNullType) {
    let response = await httpx.post(
      "https://pc-api.uc.cn/1/clouddrive/share/sharepage/token?entry=ft&fr=pc&pr=UCBrowser",
      {
        data: JSON.stringify({
          share_for_transfer: true,
          passcode: passcode,
          pwd_id: pwd_id,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=UTF-8",
          "User-Agent": utils.getRandomPCUA(),
          Origin: "https://drive.uc.cn",
          Referer: "https://drive.uc.cn/",
        },
        allowInterceptConfig: false,
      }
    );
    if (!response.status) {
      let errorData = utils.toJSON(response.data.responseText);
      log.error("获取stoken失败JSON信息", errorData);
      if ("message" in errorData) {
        Qmsg.error(errorData["message"]);
      } else {
        Qmsg.error("请求异常，获取stoken失败");
      }
      return;
    }
    let data = utils.toJSON(response.data.responseText);
    log.info("获取stoken：", data);
    if (data["code"] !== 0) {
      log.error("获取stoken失败", data);
      Qmsg.error("获取stoken失败");
      return;
    }
    return <string>data["data"]["stoken"];
  }

  /**
   * 获取stoken
   * @param pwd_id 分享码
   * @param passcode 访问码
   * @param stoken 获取的stoken
   * @param pdir_fid 父fid，默认为0，如果为文件夹，那么它的fid就是这个值
   * @param force
   * @param _page
   * @param _size=
   * @param _fetch_banner
   * @param _fetch_share
   * @param _fetch_total
   */
  async getDetail(
    pwd_id: string,
    passcode: AccessCodeNonNullType,
    stoken: string,
    pdir_fid = 0,
    force = 0,
    _page = 1,
    _size = 50,
    _fetch_banner = 0,
    _fetch_share = 0,
    _fetch_total = 1
  ): Promise<any> {
    const response = await httpx.get(
      `https://pc-api.uc.cn/1/clouddrive/transfer_share/detail?pr=UCBrowser&fr=h5&pwd_id=${pwd_id}&__t=${new Date().getTime()}&passcode=${passcode}&stoken=${encodeURIComponent(
        stoken
      )}&pdir_fid=${pdir_fid}&force=${force}&_page=${_page}&_size=${_size}&_fetch_banner=${_fetch_banner}&_fetch_share=${_fetch_share}&_fetch_total=${_fetch_total}&_sort=${encodeURIComponent(
        "file_type:asc,file_name:asc"
      )}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": utils.getRandomPCUA(),
          Origin: "https://drive.uc.cn",
          Referer: "https://drive.uc.cn/",
        },
      }
    );
    if (!response.status) {
      return;
    }
    const data = utils.toJSON(response.data.responseText);
    log.info("获取detail：", data);
    if (data["code"] !== 0) {
      log.error("获取detail失败", data);
      Qmsg.error("获取detail失败");
      return;
    }
    const metadata = data["metadata"];
    if (metadata && metadata["_total"] && metadata["_total"] > metadata["_size"]) {
      // 文件的总数量超过默认的值
      return await this.getDetail(
        pwd_id,
        passcode,
        stoken,
        pdir_fid,
        force,
        _page,
        metadata["_total"],
        _fetch_banner,
        _fetch_share,
        _fetch_total
      );
    }
    return data["data"]["list"];
  }
  /**
   * 获取下载信息
   * @param pwd_id 分享码
   * @param stoken 获取的stoken
   * @param fids 通过获取到的detail获取到的fid
   * @param share_fid_token 通过获取到的detail获取到的share_fid_token
   */
  async getDownload(pwd_id: string, stoken: string, fid: string, share_fid_token: string) {
    let response = await httpx.post("https://pc-api.uc.cn/1/clouddrive/file/download?entry=ft&fr=pc&pr=UCBrowser", {
      data: JSON.stringify({
        fids: [fid],
        pwd_id: pwd_id,
        stoken: stoken,
        fids_token: [share_fid_token],
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=UTF-8",
        "User-Agent": utils.getRandomPCUA(),
        Origin: "https://drive.uc.cn",
        Referer: "https://drive.uc.cn/",
      },
    });
    if (!response.status) {
      return;
    }
    let data = utils.toJSON(response.data.responseText);
    log.info("获取download：", data);
    if (data["code"] !== 0) {
      log.error("获取download失败", data);
      Qmsg.error("获取download失败");
      return;
    }
    if (data["data"].length === 0) {
      log.error("获取download detail失败", data);
      Qmsg.error("获取download detail失败失败");
      return;
    }
    return data["data"] as {
      backup_sign: number;
      backup_source: boolean;
      ban: boolean;
      big_thumbnail: string;
      category: number;
      created_at: number;
      creator_ucid_or_default: string;
      cur_version_or_default: number;
      dir: boolean;
      download_url: string;
      duration: number;
      event_extra: {
        recent_created_at: number;
      };
      extra: string;
      fid: string;
      file: boolean;
      file_name: string;
      file_name_hl_end: number;
      file_name_hl_start: number;
      file_source: string;
      file_type: number;
      format_type: string;
      l_created_at: number;
      l_updated_at: number;
      last_update_at: number;
      like: number;
      md5: string;
      name_space: number;
      obj_category: string;
      offline_source: boolean;
      operated_at: number;
      owner_drive_type_or_default: number;
      owner_ucid: string;
      pdir_fid: string;
      preview_url: string;
      range_size: number;
      raw_name_space: number;
      risk_type: number;
      save_as_source: boolean;
      share_fid_token: string;
      size: number;
      status: number;
      thumbnail: string;
      updated_at: number;
      video_height: number;
      video_max_resolution: string;
      video_width: number;
      _extra: {};
    }[];
  }

  /**
   * 获取文件夹信息
   * @param infoList
   */
  getFolderInfo(infoList: any, stoken: string, index = 0) {
    let folderInfoList: PopsFolderDataConfig[] = [];
    infoList.forEach((item: any) => {
      if (item.dir == false && item.file_type === 1) {
        // 文件
        folderInfoList.push({
          fileName: item.file_name,
          fileSize: item.size,
          fileType: "",
          createTime: item.created_at,
          latestTime: item.updated_at,
          isFolder: false,
          index: index,
          clickEvent: async () => {
            const $loading = Qmsg.loading("正在获取下载链接...");
            let fileDownloadUrl = "";
            let fileDownloadUrlInfo = await this.getDownload(this.shareCode, stoken, item.fid, item.share_fid_token);
            $loading.close();
            if (fileDownloadUrlInfo) {
              if (fileDownloadUrlInfo.length) {
                fileDownloadUrl = fileDownloadUrlInfo[0].download_url;
              } else {
                fileDownloadUrl = "";
              }
            } else {
              fileDownloadUrl = "";
            }
            if (item.ban) {
              Qmsg.error("文件已被禁止下载");
            } else {
              let schemeDownloadUrl = fileDownloadUrl;
              if (NetDiskFilterScheme.isForwardDownloadLink("uc")) {
                schemeDownloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("uc", schemeDownloadUrl);
              }
              // 如果已被scheme过滤，那么不进行GM_download下载
              if (schemeDownloadUrl === fileDownloadUrl) {
                this.downloadFile(item.file_name, fileDownloadUrl);
              } else {
                return {
                  mode: "aBlank",
                  url: fileDownloadUrl,
                };
              }
            }
          },
        });
      } else {
        // 文件夹
        folderInfoList.push({
          fileName: item.file_name,
          fileSize: item.size,
          fileType: "",
          createTime: item.created_at,
          latestTime: item.updated_at,
          isFolder: true,
          index: index,
          clickEvent: async () => {
            if (item.include_items === 0) {
              // 里面没有文件
              log.success("里面没有文件");
              return [];
            }
            let newDetail = await this.getDetail(this.shareCode, this.accessCode, stoken, item.fid);
            if (newDetail) {
              return this.getFolderInfo(newDetail, stoken, index + 1);
            } else {
              return [];
            }
          },
        });
      }
    });

    return folderInfoList;
  }
}
