import { DOMUtils, httpx, log, utils } from "@/env";
import { GeneratePanelStorage } from "@/main/data/NetDiskDataUtils";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { NetDiskView } from "@/main/view/NetDiskView";
import type { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/types/index";
import type { HttpxResponseData } from "@whitesev/utils/src/types/Httpx";
import Qmsg from "qmsg";
import { ParseFileCore } from "../../../parse/NetDiskParseAbstract";

export const NetDiskParse_Lanzou_Config = {
  /** 蓝奏云默认域名 */
  DEFAULT_HOST_NAME: "www.lanzout.com",
  /** 菜单配置项的键名 */
  MENU_KEY: "lanzou-host-name",
  get hostname() {
    let generateData = GeneratePanelStorage(this.MENU_KEY, this.DEFAULT_HOST_NAME);
    return generateData.value;
  },
};

/**
 * 删除注释的代码
 */
const deleteAnnotationCode = (text: string) => {
  text = text.replace(/\/\/.+/gi, "");
  text = text.replace(/\/\*[\s\S\n]+\*\//gi, "");
  return text;
};

type FileMoreAjaxJSONText = {
  duan: string;
  icon: string;
  id: string;
  name_all: string;
  p_ico: number;
  size: string;
  t: number;
  time: string;
};
type FileMoreAjaxJSON = {
  info: string;
  text: string | FileMoreAjaxJSONText[];
  zt: number;
};

type InfoListType = {
  isFolder: boolean;
  fileName: string;
  fileSize: number | string;
  createTime: string;
  latestTime: string;
  shareCode: string;
  accessCode: string;
};
/**
 * 蓝奏云
 *
 * 流程：判断是否是多文件
 *
 * 单文件 => 请求https://蓝奏云域名/{shareToken} 判断链接类型和是否能正常获取
 *        => 请求https://蓝奏云域名/ajaxm.php 获取下载参数，下载参数例如：https://蓝奏云文件域名/file/?xxxxxxxxx
 *
 * 多文件 => 先请求https://蓝奏云域名/{shareToken} 获取文件sign => 请求https://蓝奏云域名/filemoreajax.php 获取json格式的文件参数，
 *
 * 参数内容如`{"info":"success","text":[{"duan":"xx","icon":"","id":"".....},{},{}]}`
 */
export class NetDiskParse_Lanzou extends ParseFileCore {
  /**
   * 路由
   */
  router = {
    /**
     * 根路径
     * + /
     * @param pathName
     */
    root(pathName = "") {
      if (pathName.startsWith("/")) {
        pathName = pathName.replace(/^\//, "");
      }
      return `https://${NetDiskParse_Lanzou_Config.hostname}/${pathName}`;
    },
    /**
     * + /tp/
     * @param pathName
     */
    root_tp(pathName = "") {
      if (pathName.startsWith("/")) {
        pathName = pathName.replace(/^\//, "");
      }
      return `https://${NetDiskParse_Lanzou_Config.hostname}/tp/${pathName}`;
    },
    /**
     * + /s/
     * @param pathName
     */
    root_s(pathName = "") {
      if (pathName.startsWith("/")) {
        pathName = pathName.replace(/^\//, "");
      }
      return `https://${NetDiskParse_Lanzou_Config.hostname}/s/${pathName}`;
    },
  };
  regexp = {
    unicode: {
      /**
       * 判断该链接是否是中文
       */
      match: /[%\u4e00-\u9fa5]+/g,
      tip: "中文链接",
      isUnicode: false,
    },
    /**
     * 蓝奏文件取消分享
     */
    noFile: {
      match: /div>来晚啦...文件取消分享了<\/div>/g,
      tip: "来晚啦...文件取消分享了",
    },
    /**
     * 蓝奏文件链接错误
     */
    noExists: {
      match: /div>(文件不存在，或已删除|文件不存在，或者已被删除)<\/div>/g,
      tip: "文件不存在，或者已被删除",
    },
    /**
     * 链接失效
     */
    linkInValid: {
      match: /div>文件链接失效，请获取新链接<\/div>/g,
      tip: "文件链接失效，请获取新链接",
    },
    /**
     * 2023-9-19 蓝奏云修改分享规则，需要vip用户才可以分享 apk、ipa 链接
     */
    needVipToShare: {
      match: /class="fbox">非会员.+请先开通会员/gi,
      tip: "该链接为非会员用户分享的文件，目前无法下载",
    },
    /**
     * 蓝奏多文件
     */
    moreFile: {
      match: /<span id=\"filemore\" onclick=\"more\(\);\">/g,
    },
    /**
     * 蓝奏设置了密码的单文件请求需要的sign值
     */
    sign: {
      match: /var[\s]*(posign|postsign|vidksek|skdklds)[\s]*=[\s]*'(.+?)';/,
    },
    /**
     * 需要生成签名
     */
    need_sign: {
      match: "acw_sc__v2=",
      tip: "请先手动打开链接，生成acw_sc__v2参数",
    },
    /**
     * 蓝奏文件名
     */
    fileName: {
      match: /<title>(.*)<\/title>/,
    },
    /**
     * 蓝奏文件大小
     */
    fileSize: {
      match: /<span class=\"mtt\">\((.*)\)<\/span>/,
    },
    /**
     * 蓝奏文件直链host
     */
    loadDownHost: {
      match: /var[\s]*(vkjxld)[\s]*=[\s]*'(.+?)'/i,
    },
    /**
     * 蓝奏文件直链
     */
    loadDown: {
      match: /var[\s]*(loaddown|oreferr|spototo|domianload|hyggid)[\s]*=[\s]*'(.+?)'/i,
    },
    /**
     * 蓝奏云之苹果使用类型的文件
     */
    appleDown: {
      match: /var[\s]*appitem[\s]*=[\s]*'(.+?)'/i,
    },
    /**
     * 蓝奏云文件上传时间
     */
    uploadTime: {
      match: /mt2\"\>时间:<\/span>(.+?)[\s]*<span/i,
    },
  };
  /**
   * 入口
   */
  async init(netDiskInfo: ParseFileInitConfig) {
    super.init(netDiskInfo);
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    this.regexp.unicode.isUnicode = Boolean(shareCode.match(this.regexp.unicode.match));
    let url = ruleIndex === 1 ? this.router.root_s(shareCode) : this.router.root(shareCode);
    if (window.location.pathname === "/" + shareCode) {
      const searchParams = new URLSearchParams(window.location.search);
      const webpage = searchParams.get("webpage");
      if (webpage) {
        // 该参数相当于代替了密码
        url = url + "?webpage=" + webpage;
      }
    }
    const $loading = Qmsg.loading("正在解析，请稍后...");
    const pageInfoResponse = await this.getPageInfo(url);
    if (!pageInfoResponse) {
      $loading.close();
      return;
    }
    if (this.isMoreFile(pageInfoResponse)) {
      // 多文件
      log.info(`多文件`);
      $loading.setText("正在解析多文件...");
      const fileInfo = await this.parseFiles(shareCode, accessCode);
      if (!fileInfo) {
        $loading.close();
        return;
      }
      const folderInfoList = this.getFolderInfo(this.transformFileInfoToInfoList(shareCode, accessCode, fileInfo), 0);
      log.info("递归完毕");
      NetDiskView.$inst.linearChainDialogView.moreFile("蓝奏云文件解析", folderInfoList);
    } else {
      // 单文件
      log.info(`单文件`);
      $loading.setText("正在获取下载链接...");
      const fileDownloadInfo = await this.getFileDownloadInfo(shareCode, accessCode, pageInfoResponse);
      if (fileDownloadInfo) {
        NetDiskView.$inst.linearChainDialogView.oneFile({
          title: "蓝奏云单文件直链",
          fileName: fileDownloadInfo.fileName,
          fileSize: fileDownloadInfo.fileSize,
          downloadUrl: fileDownloadInfo.downloadUrl,
          fileUploadTime: fileDownloadInfo.fileUploadTime,
        });
      }
    }
    $loading.close();
  }
  /**
   * 参数转换
   */
  transformFileInfoToInfoList(
    shareCode: string,
    accessCode: AccessCodeNonNullType,
    fileInfo: NonNullable<Awaited<ReturnType<typeof this.parseFiles>>>
  ) {
    return [
      ...fileInfo.folders.map((folder) => {
        return {
          isFolder: true,
          fileName: folder.folderName,
          fileSize: 0,
          createTime: "",
          latestTime: "",
          shareCode: folder.shareCode,
          accessCode: folder.accessCode,
        };
      }),
      ...(fileInfo.infos || []).map((info) => {
        return {
          isFolder: false,
          fileName: info.name_all,
          fileSize: info.size,
          createTime: info.time,
          latestTime: info.time,
          shareCode: info.id,
          accessCode: accessCode,
        };
      }),
    ].filter((it) => it != null);
  }
  /**
   * 获取文件夹信息
   * @param infoList
   */
  getFolderInfo(infoList: InfoListType[], index: number) {
    let folderInfoList: PopsFolderDataConfig[] = [];
    infoList.forEach((item) => {
      if (item.isFolder) {
        // 文件夹
        folderInfoList.push({
          fileName: item.fileName,
          fileSize: 0,
          fileType: "",
          // @ts-expect-error
          createTime: item.createTime,
          // @ts-expect-error
          latestTime: item.latestTime,
          isFolder: true,
          index: index,
          clickEvent: async () => {
            let fileInfo = await this.parseFiles(item.shareCode, item.accessCode);
            if (fileInfo) {
              return this.getFolderInfo(
                this.transformFileInfoToInfoList(this.shareCode, this.accessCode, fileInfo),
                index + 1
              );
            }
            return [];
          },
        });
      } else {
        // 文件
        folderInfoList.push({
          fileName: item.fileName,
          fileSize: item.fileSize,
          fileType: "",
          // @ts-expect-error
          createTime: item.createTime,
          // @ts-expect-error
          latestTime: item.latestTime,
          isFolder: false,
          index: index,
          clickEvent: async () => {
            const url = this.ruleIndex === 1 ? this.router.root_s(item.shareCode) : this.router.root(item.shareCode);
            const $loading = Qmsg.loading("正在解析链接页面信息...");
            const responseData = await this.getPageInfo(url);
            if (!responseData) {
              $loading.close();
              return;
            }
            $loading.setText("正在获取下载链接...");
            const fileDownloadInfo = await this.getFileDownloadInfo(item.shareCode, item.accessCode, responseData);
            if (!fileDownloadInfo) {
              $loading.close();
              return;
            }
            $loading.close();
            return {
              url: fileDownloadInfo.downloadUrl,
              autoDownload: true,
              mode: "aBlank",
            };
          },
        });
      }
    });
    return folderInfoList;
  }
  /**
   * 获取文件下载信息
   */
  async getFileDownloadInfo(
    shareCode: string,
    accessCode: AccessCodeNonNullType,
    responseData: HttpxResponseData<any>
  ): Promise<
    | undefined
    | {
        fileName: string;
        fileSize: string;
        fileUploadTime: string | number | undefined;
        downloadUrl: string;
      }
  > {
    let fileDownloadInfo:
      | {
          fileName: string;
          fileSize: string;
          fileUploadTime: string | number | undefined;
          downloadUrl: string;
        }
      | undefined = void 0;
    const $pageDoc = DOMUtils.toElement(responseData.responseText, true, true);
    const pageText = deleteAnnotationCode(responseData.responseText);
    const $pageIframe =
      $pageDoc.querySelector<HTMLIFrameElement>('iframe[class^="ifr"]') ||
      $pageDoc.querySelector<HTMLIFrameElement>('iframe[class^="n_downlink"]');
    if ($pageIframe) {
      // 该链接需要重新通过iframe地址访问获取信息
      const iframeUrl = $pageIframe.getAttribute("src")!;
      log.error("该链接需要重新通过iframe地址访问获取信息", iframeUrl);
      const fileName =
        $pageDoc.querySelector<HTMLElement>("body div.d > div")?.innerText ||
        $pageDoc.querySelector<HTMLElement>("#filenajax")?.innerText ||
        $pageDoc.querySelector("title")?.textContent?.replace(/ - 蓝奏云$/i, "")!;
      let fileSize =
        pageText.match(/文件大小：<\/span>(.+?)<br>/i) ||
        $pageDoc.querySelector<HTMLElement>("div.n_box div.n_file div.n_filesize")?.innerText ||
        $pageDoc.querySelector<HTMLElement>(".d2 table tr td .fileinfo:nth-child(1) .fileinforight")?.innerText!;
      let fileUploadTime =
        pageText.match(/上传时间：<\/span>(.+?)<br>/i) ||
        $pageDoc.querySelector<HTMLElement>("#file[class=''] .n_file_info span.n_file_infos")?.innerText ||
        $pageDoc.querySelector<HTMLElement>(".d2 table tr td .fileinfo:nth-child(3) .fileinforight")?.innerText ||
        $pageDoc.querySelector<HTMLElement>("#file[class='filter'] .n_file_info span.n_file_infos")?.innerText;
      if (fileSize) {
        if (Array.isArray(fileSize)) {
          fileSize = fileSize[fileSize.length - 1];
        }
        if (typeof fileSize === "string") {
          fileSize = fileSize.replaceAll("大小：", "");
        }
      } else {
        log.error("解析文件大小信息失败");
      }
      if (fileUploadTime) {
        if (Array.isArray(fileUploadTime)) {
          fileUploadTime = fileUploadTime[fileUploadTime.length - 1];
        }
        if (fileUploadTime.toString().toLowerCase().startsWith("android")) {
          log.error("解析出的文件上传时间信息是Android/xxxx开头");
          fileUploadTime = void 0;
        }
      } else {
        log.error("解析文件上传时间信息失败");
      }
      const downloadUrl = await this.getLinkByIframe(shareCode, accessCode, iframeUrl, {
        fileName,
        fileSize,
        // @ts-expect-error
        fileUploadTime,
      });
      if (!downloadUrl) {
        return;
      }
      fileDownloadInfo = {
        fileName,
        fileSize,
        downloadUrl: downloadUrl,
        fileUploadTime,
      };
    } else {
      log.warn("该页面不是使用iframe获取链接，使用其它方式解析");

      const sign = pageText.match(/'sign':'(.+?)',/i) || pageText.match(this.regexp.sign.match);

      let postData_p = "";
      let postData_sign = "";
      const fileNameMatch = pageText.match(this.regexp.fileName.match);
      let fileName = fileNameMatch ? fileNameMatch[fileNameMatch.length - 1].trim() : "";
      const fileSizeMatch =
        pageText.match(this.regexp.fileSize.match) || pageText.match(/<div class="n_filesize">大小：(.+?)<\/div>/i);
      const fileSize = fileSizeMatch ? fileSizeMatch[fileSizeMatch.length - 1].trim() : "";
      const fileUploadTimeMatch =
        pageText.match(this.regexp.uploadTime.match) || pageText.match(/<span class="n_file_infos">(.+?)<\/span>/i);
      const fileUploadTime = fileUploadTimeMatch ? fileUploadTimeMatch[fileUploadTimeMatch.length - 1].trim() : "";
      const fileIdMatch =
        pageText.match(/[\s]+url[\s]+:[\s]+'\/ajaxm.php\?file=([0-9]+)',/i) ||
        pageText.match(/\/\/url[\s]+:[\s]+'\/ajaxm.php\?file=([0-9]+)',/i);
      const fileId = fileIdMatch ? fileIdMatch[fileIdMatch.length - 1] : "1";
      if (sign) {
        postData_sign = sign[sign.length - 1];
        log.info(`获取Sign: ${postData_sign}`);
        if (utils.isNotNull(accessCode)) {
          log.info("传入参数=>有密码");
          postData_p = accessCode;
        } else {
          log.info("传入参数=>无密码");
        }
        const kd = await this.getKNDS();
        const ajaxmResponse = await httpx.post({
          url: this.router.root("ajaxm.php?file=" + fileId),
          responseType: "json",
          headers: {
            accept: "application/json, text/javascript, */*",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": utils.getRandomAndroidUA(),
            Origin: "https://" + NetDiskParse_Lanzou_Config.hostname,
            Referer: this.router.root(shareCode),
          },
          data: `action=downprocess&sign=${postData_sign}&p=${postData_p}&kd=${kd}`,
        });
        if (!ajaxmResponse.status) {
          return;
        }
        const ajaxmResponseData = ajaxmResponse.data;
        log.info(ajaxmResponseData);

        const json_data = utils.toJSON(ajaxmResponseData.responseText);
        let downloadUrl = `${json_data["dom"]}/file/${json_data["url"]}`;
        if (
          typeof json_data["url"] === "string" &&
          (json_data["url"].startsWith("http") || json_data["url"].startsWith(json_data["dom"]))
        ) {
          /* 有些情况下比如苹果的ipa文件的请求，json_data["url"]就是一个完整的链接 */
          downloadUrl = json_data["url"];
        }
        /* json_data["zt"]表示状态，一般为1 */
        const zt = json_data["zt"];
        /* json_data["inf"]一般是文件名，也可以看作是请求信息提示 */
        if ("密码不正确".indexOf(json_data["inf"]) != -1) {
          Qmsg.error("密码不正确!");
          const newAccessCodeInfo = await new Promise<
            | undefined
            | {
                accessCode: AccessCodeNonNullType;
              }
          >((resolve) => {
            NetDiskView.$inst.newAccessCodeView(
              void 0,
              "lanzou",
              this.ruleIndex,
              shareCode,
              accessCode,
              (option) => {
                resolve({
                  accessCode: option.accessCode!,
                });
              },
              () => {
                resolve(void 0);
              }
            );
          });
          if (!newAccessCodeInfo) {
            return;
          }
          accessCode = newAccessCodeInfo.accessCode;
          const url = this.ruleIndex === 1 ? this.router.root_s(shareCode) : this.router.root(shareCode);
          const newResponseData = await this.getPageInfo(url);
          if (!newResponseData) {
            return;
          }
          return await this.getFileDownloadInfo(shareCode, accessCode, newResponseData);
        } else {
          fileName = json_data["inf"] ? json_data["inf"] : fileName;
        }
        fileDownloadInfo = {
          fileName,
          fileSize,
          fileUploadTime,
          downloadUrl,
        };
      } else {
        let loadDownHost = pageText.match(this.regexp.loadDownHost.match);
        let loadDown = pageText.match(this.regexp.loadDown.match);
        const appleDownMatch = pageText.match(this.regexp.appleDown.match)!;
        let appleDown = appleDownMatch[appleDownMatch.length - 1];
        if (utils.isNull(loadDown)) {
          loadDown = pageText.match(/var[\s]*(cppat)[\s]*=[\s]*'(.+?)'/i);
        }
        if (utils.isNull(loadDownHost) && appleDown) {
          appleDown = appleDown[appleDown.length - 1];
          loadDownHost = [appleDown];
          loadDown = [""];
          log.success("多文件-当前链接猜测为苹果的文件", appleDown);
        }
        if (utils.isNull(loadDownHost)) {
          Qmsg.error("蓝奏云直链：获取sign的域名失败，请反馈开发者", {
            timeout: 3500,
          });
          return;
        }
        if (utils.isNull(loadDown)) {
          Qmsg.error("蓝奏云直链：获取sign失败，请反馈开发者", {
            timeout: 3500,
          });
          return;
        }
        const downloadUrl = `${loadDownHost[loadDownHost.length - 1]}${loadDown[loadDown.length - 1]}`;

        fileDownloadInfo = {
          fileName,
          fileSize,
          fileUploadTime,
          downloadUrl,
        };
      }
    }

    // 链接转发
    if (fileDownloadInfo && NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
      fileDownloadInfo.downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("lanzou", fileDownloadInfo.downloadUrl);
    }
    return fileDownloadInfo;
  }
  /**
   * 获取链接页面的信息
   */
  async getPageInfo(url: string) {
    const response = await httpx.get({
      url: url,
      headers: {
        Accept: "*/*",
        "User-Agent": utils.getRandomPCUA(),
        Referer: url,
        // 现在蓝奏限制了Cookie必须包含acw_sc__v2才可以获取到内容
      },
      allowInterceptConfig: false,
    });
    if (!response.status) {
      log.error(response);
      if (response.type === "ontimeout") {
        Qmsg.error("请求超时");
        return;
      }
      if (utils.isNull(response.data.responseText)) {
        Qmsg.error("请求异常");
        return;
      }
      if (this.checkPageCode(response.data)) {
        Qmsg.error("请求失败，未知情况");
      }
      return;
    }
    const responseText = response.data.responseText;
    if (utils.isNull(responseText)) {
      log.error(response);
      Qmsg.error("获取网页内容为空");
      return;
    }
    if (!this.checkPageCode(response.data)) {
      log.error(response);
      return;
    }
    return response.data;
  }
  /**
   * 页面检查，看看是否存在文件失效情况
   * @param responseData
   * + true 未失效
   * + false 已失效
   */
  checkPageCode(responseData: HttpxResponseData<any>): boolean {
    const pageText = responseData.responseText;
    if (pageText.match(this.regexp.noFile.match)) {
      Qmsg.error(this.regexp.noFile.tip);
      return false;
    }
    if (pageText.match(this.regexp.noExists.match)) {
      Qmsg.error(this.regexp.noExists.tip);
      return false;
    }
    if (pageText.match(this.regexp.needVipToShare.match)) {
      Qmsg.error(this.regexp.needVipToShare.tip);
      return false;
    }
    if (pageText.match(this.regexp.linkInValid.match)) {
      Qmsg.error(this.regexp.linkInValid.tip);
      return false;
    }
    if (pageText.match(this.regexp.need_sign.match)) {
      Qmsg.error(this.regexp.need_sign.tip);
      return false;
    }
    return true;
  }
  /**
   * 判断是否是多文件
   * @param responseData
   * @returns
   * + true 多文件
   * + false 单文件
   */
  isMoreFile(responseData: HttpxResponseData<any>) {
    const pageText = responseData.responseText;
    if (pageText.match(this.regexp.moreFile.match)) {
      log.info("该链接为多文件");
      return true;
    } else {
      log.info("该链接为单文件");
      return false;
    }
  }
  /**
   * 解析组合链接（多个链接组成的链接）
   * @param response
   */
  async parseFiles(
    shareCode: string,
    accessCode: AccessCodeNonNullType
  ): Promise<
    | {
        folders: {
          url: string;
          shareCode: string;
          accessCode: string;
          folderName: string;
        }[];
        infos: FileMoreAjaxJSONText[] | undefined;
      }
    | undefined
  > {
    const url = this.ruleIndex === 1 ? this.router.root_s(shareCode) : this.router.root(shareCode);
    const pageInfoResponse = await this.getPageInfo(url);
    if (!pageInfoResponse) {
      return;
    }
    const pageText = pageInfoResponse.responseText;
    const pageDoc = DOMUtils.toElement(pageText, true, true);
    const folders = Array.from(pageDoc.querySelectorAll<HTMLAnchorElement>("#folder a.mlink[href]"))
      .map(($link) => {
        const url = $link.href;
        const urlInst = new URL(url);
        const shareCodeMatch = urlInst.pathname.match(/^\/([0-9a-zA-Z]{5,})/);
        if (shareCodeMatch == null) {
          return;
        }
        const __shareCode__ = shareCodeMatch[shareCodeMatch.length - 1];
        const $filename = $link.querySelector(".filename");
        const filename = $filename?.firstChild?.textContent || "";
        return {
          url: url,
          shareCode: __shareCode__,
          accessCode: accessCode,
          folderName: filename,
        };
      })
      .filter((it) => it != null);

    let infos;
    // 不管存不存在普通文件，都需要请求一下重新获取信息
    const fid = pageText.match(/\'fid\':(.+?),/)![1].replaceAll("'", "");
    const uid = pageText.match(/\'uid\':(.+?),/)![1].replaceAll("'", "");
    const pgs = 1;
    const t_name = pageText.match(/\'t\':(.+?),/)![1];
    const t_rexp = new RegExp(t_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");");
    const t = pageText.match(t_rexp)![2];
    const k_name = pageText.match(/\'k\':(.+?),/)![1];
    const k_rexp = new RegExp(k_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");");
    const k = pageText.match(k_rexp)![2];
    const lx = shareCode.match(this.regexp.unicode.match) ? 1 : 2;
    const json_data = await this.fileMoreAjax(shareCode, accessCode, {
      lx: lx,
      fid: fid,
      uid: uid,
      pg: pgs,
      t: t,
      k: k,
      pwd: accessCode!,
    });
    let error: undefined | string = undefined;
    if (json_data) {
      log.info(`json_data：`, json_data);
      const { zt, info, text } = json_data;
      if (zt !== 1) {
        // 请求失败的情况
        if (zt === 4) {
          error = text as string;
        } else if (info?.includes("密码不正确")) {
          Qmsg.error("密码不正确!");
          const newAccessCodeInfo = await new Promise<
            | undefined
            | {
                accssCode: AccessCodeNonNullType;
              }
          >((resolve) => {
            NetDiskView.$inst.newAccessCodeView(
              void 0,
              "lanzou",
              this.ruleIndex,
              shareCode,
              accessCode,
              (option) => {
                resolve({
                  accssCode: option.accessCode!,
                });
              },
              () => {
                resolve(void 0);
              }
            );
          });
          if (!newAccessCodeInfo) {
            return;
          }
          return await this.parseFiles(shareCode, newAccessCodeInfo.accssCode);
        } else if (info?.includes("没有了")) {
          error = "没有文件了";
        } else {
          error = "未知错误";
        }
      }
      if (Array.isArray(text)) {
        infos = text;
      }
    }
    if (typeof error === "string") {
      log.error(error);
    }
    const result = {
      folders: folders,
      infos: infos,
    };
    log.info(result);
    return result;
  }
  /**
   * 通过iframe的链接来获取单文件直链
   * @param urlPathName url路径
   * @param fileInfo 文件信息
   */
  async getLinkByIframe(
    shareCode: string,
    accessCode: AccessCodeNonNullType,
    urlPathName: string,
    fileInfo: {
      fileName: string;
      fileSize: string;
      fileUploadTime: string;
    }
  ) {
    log.info(urlPathName, fileInfo);
    let iFrameUrl = this.router.root(urlPathName);
    let response = await httpx.get({
      url: iFrameUrl,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "User-Agent": utils.getRandomPCUA(),
        Referer: this.router.root(shareCode),
      },
    });
    if (!response.status) {
      return;
    }
    let responseInstance = response.data;
    log.info(responseInstance);
    let pageText = responseInstance.responseText;
    let websignkeyMatch =
      pageText.match(/'websignkey'[\s]*:[\s]*'(.+?)'/i) || pageText.match(/var[\s]*aihidcms[\s]*=[\s]*'(.*)';/i);
    let websignMatch = pageText.match(/'websign':'(.*?)'/i) || pageText.match(/var[\s]*ciucjdsdc[\s]*=[\s]*'(.*)';/i);
    let signsMatch = pageText.match(/var[\s]*ajaxdata[\s]*=[\s]*'(.+)';/i);
    let signMatch = pageText.match(/'sign':[\s]*'(.+)',/i) || pageText.match(/var[\s]*wp_sign[\s]*=[\s]*'(.*)';/i);
    let ajaxUrlMatch =
      pageText.match(/[^//]url[\s]*:[\s]*'(.+?)'[\s]*,/i) || pageText.match(/url[\s]*:[\s]*'(.+?)'[\s]*,/);
    let ajaxUrl = "ajaxm.php";
    let websignkey = "";
    let websign = "";
    let signs = "";
    let sign = "";
    let kdns = await this.getKNDS();
    if (ajaxUrlMatch) {
      ajaxUrl = ajaxUrlMatch[ajaxUrlMatch.length - 1];
    } else {
      Qmsg.error("提取ajaxm.php的具体参数失败，使用默认的" + ajaxUrl);
    }
    if (websignkeyMatch) {
      websignkey = websignkeyMatch[websignkeyMatch.length - 1];
    } else {
      Qmsg.error("ajaxm.php请求参数 websignkey 获取失败");
      return;
    }
    if (websignMatch) {
      websign = websignMatch[websignMatch.length - 1];
    } else {
      Qmsg.error("ajaxm.php请求参数 websign 获取失败");
      return;
    }
    if (signsMatch) {
      signs = signsMatch[signsMatch.length - 1];
    } else {
      Qmsg.error("ajaxm.php请求参数 signs 获取失败");
      return;
    }
    if (signMatch) {
      sign = signMatch[signMatch.length - 1];
    } else {
      Qmsg.error("ajaxm.php请求参数 sign 获取失败");
      return;
    }

    let postData = {
      action: "downprocess",
      websignkey: websignkey || signs,
      signs: signs,
      sign: sign,
      websign: websign,
      kd: kdns,
      ves: 1,
    };
    log.success("请求的路径参数: " + ajaxUrl);
    log.success("ajaxm.php的请求参数-> ", postData);
    let postResp = await httpx.post(this.router.root(ajaxUrl), {
      data: utils.toSearchParamsStr(postData),
      headers: {
        Accept: "application/json, text/javascript, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: this.router.root(shareCode),
        "User-Agent": utils.getRandomPCUA(),
      },
    });
    if (!postResp.status) {
      return;
    }
    let postRespData = postResp.data;
    log.info(postRespData);
    let jsonData = utils.toJSON(postRespData.responseText);
    let downloadUrl = `${jsonData["dom"]}/file/${jsonData["url"]}&toolsdown`;
    let zt = jsonData["zt"];

    // var killdns = true;
    // let killdns = await httpx.get("https://down-load.lanrar.com/file/kdns.js", {
    //   allowInterceptConfig: false,
    // });
    // var killdns2 = true;
    // let killdns2 = await httpx.get("https://boce.lanosso.com/file/kdns2.js", {
    //   allowInterceptConfig: false,
    // });
    // if (!killdns2.status) {
    //   // 使用lanosso
    //   downloadUrl += "&lanosso";
    //   log.info(`测试killdns2失败使用参数 lanosso`);
    // } else {
    //   log.info("测试killdns2成功，不改变原downloadUrl");
    // }

    log.success("直链", downloadUrl);
    if ("密码不正确".indexOf(jsonData["inf"]) != -1) {
      Qmsg.error("密码不正确!");
      NetDiskView.$inst.newAccessCodeView(void 0, "lanzou", this.ruleIndex, shareCode, accessCode, (option) => {
        this.init({
          ruleIndex: this.ruleIndex,
          shareCode,
          accessCode: option.accessCode,
        });
      });
    } else {
      fileInfo.fileName = utils.isNotNull(jsonData["inf"]) ? jsonData["inf"] : fileInfo.fileName;
      log.info(downloadUrl);
      return downloadUrl;
    }
  }
  /**
   * 获取kdns的参数
   */
  async getKNDS() {
    return 1;
    let response = await httpx.get("https://down-load.lanrar.com/file/kdns.js", {
      allowInterceptConfig: false,
    });
    if (response.status && utils.isNotNull(response.data.responseText)) {
      return 1;
    } else {
      return 0;
    }
  }
  /**
   * 请求filemoreajax.php获取多文件信息
   */
  async fileMoreAjax(
    shareCode: string,
    accessCode: AccessCodeNonNullType,
    config: {
      lx: number;
      fid: string;
      uid: string;
      pg: number;
      t: string;
      k: string;
      pwd: NonNullable<AccessCodeNonNullType>;
      rep?: number;
      up?: number;
      ls?: number;
    }
  ) {
    const postData = utils.toFormData({
      rep: 0,
      up: 1,
      ls: 1,
      ...config,
    });
    const url = this.router.root("filemoreajax.php");
    const fileMoreAjaxResponse = await httpx.post({
      url: this.router.root("filemoreajax.php"),
      responseType: "json",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "User-Agent": utils.getRandomAndroidUA(),
        Referer: url,
      },
      data: postData,
    });
    if (!fileMoreAjaxResponse.status) {
      return;
    }
    const fileMoreAjaxResponseData = fileMoreAjaxResponse.data;
    log.info(fileMoreAjaxResponseData);
    const json_data = utils.toJSON<FileMoreAjaxJSON>(fileMoreAjaxResponseData.responseText);
    return json_data;
  }
}
