import { httpx, log, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/types/index";
import Qmsg from "qmsg";
import { ParseFileCore } from "../../../parse/NetDiskParseAbstract";
import { NetDiskFilterScheme } from "../../../scheme/NetDiskFilterScheme";
import { NetDiskView } from "../../../view/NetDiskView";
import { NetDiskAuthorization_123pan_Authorization } from "./authorization";
import { NetDiskCheckLinkValidity_123pan } from "./checkLinkValidity";

export class NetDiskParse_123pan extends ParseFileCore {
  panelList = [];
  Authorization = "";
  code = {
    5113: "您今日下载流量已超出10GB限制，购买VIP会员即可体验无限流量下载",
    5103: "分享码错误或者分享地址错误",
    5104: "分享已过期",
    "-1000": "获取出错",
    "-2000": "请求异常",
    "-3000": "请求意外中止",
    "-4000": "请求超时",
    104: "文件已失效",
  };
  Headers = {
    "user-agent": "123pan/v2.4.0(Android_7.1.2;Xiaomi)",
    platform: "android",
    "app-version": "61",
    "x-app-version": "2.4.0",
  };
  async init(netDiskInfo: ParseFileInitConfig) {
    super.init(netDiskInfo);
    this.panelList.length = 0;
    this.Authorization = NetDiskAuthorization_123pan_Authorization.get();
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
    // 成功
    // 需要密码
    const infoList = await this.getFiles();
    if (!infoList) {
      $loading.close();
      return;
    }
    if (infoList.length === 1 && infoList[0]["Type"] == 0) {
      const fileInfo = infoList[0];
      if (fileInfo["Status"] == 104) {
        $loading.close();
        Qmsg.error("文件已失效");
        return;
      }
      let downloadUrl = fileInfo["DownloadUrl"];
      let fileSize = "";
      if (downloadUrl === "") {
        $loading.setText("正在获取下载链接...");
        let downloadInfo = await this.getFileDownloadInfo(
          fileInfo["Etag"],
          fileInfo["FileId"],
          fileInfo["S3KeyFlag"],
          this.shareCode,
          fileInfo["Size"]
        );
        if (downloadInfo && downloadInfo["code"] === 0) {
          downloadUrl = downloadInfo["data"]["DownloadURL"];
          if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
            downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("_123pan", downloadUrl);
          }
          fileSize = String(utils.formatByteToSize(fileInfo["Size"]));
        } else if (downloadInfo && downloadInfo["code"] === 401) {
          downloadUrl = "javascript:;";
          fileSize = "请登录后下载";
        } else {
          downloadUrl = "javascript:;";
          fileSize = "获取下载链接失败";
        }
      } else {
        if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
          downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("_123pan", downloadUrl);
        }

        fileSize = utils.formatByteToSize(fileInfo["Size"]).toString();
      }
      let fileUploadTime = new Date(fileInfo["CreateAt"]).getTime();
      let fileLatestTime = new Date(fileInfo["UpdateAt"]).getTime();
      // @ts-expect-error
      fileUploadTime = utils.formatTime(fileUploadTime);
      // @ts-expect-error
      fileLatestTime = utils.formatTime(fileLatestTime);
      NetDiskView.$inst.linearChainDialogView.oneFile({
        title: "123盘单文件直链",
        fileName: fileInfo["FileName"],
        fileSize: fileSize,
        downloadUrl: downloadUrl,
        fileUploadTime: fileUploadTime,
        fileLatestTime: fileLatestTime,
      });
    } else {
      $loading.setText("正在解析多文件...");
      const folderInfoList = this.getFolderInfo(infoList, 0);
      log.info("解析完毕");
      NetDiskView.$inst.linearChainDialogView.moreFile("123盘文件解析", folderInfoList);
    }
    $loading.close();
  }
  /**
   * 获取文件
   * @param parentFileId
   */
  async getFiles(parentFileId = 0) {
    const that = this;
    const getData = {
      limit: 100,
      next: 1,
      orderBy: "share_id",
      orderDirection: "desc",
      shareKey: that.shareCode,
      SharePwd: that.accessCode,
      ParentFileId: parentFileId,
      Page: 1,
    };
    let url = `https://www.123pan.com/b/api/share/get?${utils.toSearchParamsStr(getData)}`;
    let getResp = await httpx.get({
      url: url,
      headers: {
        Accept: "*/*",
        Referer: `https://www.123pan.com/s/${that.shareCode}`,
        ...that.Headers,
      },
    });
    log.info(getResp);
    if (!getResp.status) {
      return;
    }
    let respData = getResp.data;
    let json_data = utils.toJSON(respData.responseText);
    if (json_data["code"] === 0) {
      let infoList = json_data["data"]["InfoList"] as {
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
      }[];
      return infoList;
    } else if (json_data["code"] === 5103) {
      NetDiskView.$inst.newAccessCodeView(
        void 0,
        "_123pan",
        that.ruleIndex,
        that.shareCode,
        that.accessCode,
        (option) => {
          that.init({
            ruleIndex: that.ruleIndex,
            shareCode: that.shareCode,
            accessCode: option.accessCode,
          });
        }
      );
    } else if (that.code[json_data["code"] as keyof typeof that.code]) {
      Qmsg.error(that.code[json_data["code"] as keyof typeof that.code]);
    } else if ("message" in json_data) {
      Qmsg.error(json_data["message"]);
    } else {
      Qmsg.error("123盘：未知的JSON格式");
    }
  }
  /**
   * 递归算法使用的请求
   * @param parentFileId
   */
  async getFilesByRec(parentFileId: string) {
    const that = this;
    let getResp = await httpx.get({
      url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`,
      headers: {
        Accept: "*/*",
        Referer: `https://www.123pan.com/s/${that.shareCode}`,
        ...that.Headers,
      },
    });
    if (!getResp.status) {
      return;
    }
    let respData = getResp.data;
    log.info(respData);
    let jsonData = utils.toJSON(respData.responseText);
    if (jsonData["code"] == 0) {
      return jsonData["data"]["InfoList"] as {
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
      }[];
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
        /* 文件夹 */
        folderInfoList.push({
          fileName: item.FileName,
          fileSize: 0,
          fileType: "",
          createTime: new Date(item.CreateAt).getTime(),
          latestTime: new Date(item.UpdateAt).getTime(),
          isFolder: true,
          index: index,
          clickEvent: async () => {
            const __infoList = await this.getFilesByRec(item["FileId"].toString());
            if (__infoList) {
              return this.getFolderInfo(__infoList, index + 1);
            } else {
              return [];
            }
          },
        });
      } else {
        /* 文件 */
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
            } else if (utils.isNotNull(item.DownloadUrl)) {
              const downloadInfo = await this.getFileDownloadInfo(
                item["Etag"],
                item["FileId"],
                item["S3KeyFlag"],
                this.shareCode,
                item["Size"]
              );
              if (downloadInfo && downloadInfo["code"] === 0) {
                return {
                  url: downloadInfo["data"]["DownloadURL"],
                  autoDownload: true,
                  mode: "aBlank",
                };
              } else if (downloadInfo && downloadInfo["code"] === 401) {
                Qmsg.error("请登录后下载");
              } else {
                Qmsg.error(downloadInfo?.["message"] || "获取下载链接失败");
              }
            } else {
              let downloadUrl = item.DownloadUrl as string;
              if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
                downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("_123pan", downloadUrl);
              }
              return {
                url: downloadUrl,
                autoDownload: true,
                mode: "aBlank",
              };
            }
          },
        });
      }
    });
    return folderInfoList;
  }
  /**
   * 获取单文件下载链接
   * 123云盘新增了下载验证
   * @param Etag
   * @param FileID
   * @param S3keyFlag
   * @param ShareKey
   * @param Size
   */
  async getFileDownloadInfo(
    Etag: string,
    FileID: string | number,
    S3keyFlag: string | number,
    ShareKey: string,
    Size: string | number
  ) {
    const that = this;
    let authK_V = that.getFileDownloadAuth();
    let headers = {
      // "App-Version": "3",
      // Platform: "web",
      "Content-Type": "application/json;charset=UTF-8",
      Host: "www.123pan.com",
      Accept: "*/*",
      Referer: "https://www.123pan.com/s/" + ShareKey,
      Origin: "https://www.123pan.com",
      ...that.Headers,
    };
    if (that.Authorization) {
      Reflect.set(headers, "Authorization", "Bearer " + that.Authorization);
    }
    log.success("获取下载链接加密参数：" + authK_V);
    let postResp = await httpx.post(`https://www.123pan.com/a/api/share/download/info?${authK_V[0]}=${authK_V[1]}`, {
      data: JSON.stringify({
        Etag: Etag,
        FileID: FileID,
        S3keyFlag: S3keyFlag,
        ShareKey: ShareKey,
        Size: Size,
      }),
      responseType: "json",
      headers: headers,
    });
    if (!postResp.status) {
      return;
    }
    let postData = postResp.data;
    let jsonData = utils.toJSON(postData.responseText);
    log.info(jsonData);
    if (jsonData["code"] == 0) {
      jsonData["data"]["DownloadURL"] = that.decodeDownloadUrl(jsonData["data"]["DownloadURL"]);
      return jsonData;
    } else {
      return {
        code: jsonData["code"],
        message: jsonData["message"],
      };
    }
  }
  /**
   * 获取单文件下载链接的加密参数
   * 感谢：https://github.com/qaiu/netdisk-fast-download/
   */
  getFileDownloadAuth() {
    const that = this;
    function encry_time(param: any) {
      var param_time,
        param_other = arguments["length"] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : 0x8;
      if (0x0 === arguments["length"]) return void 0;
      "object" === typeof param
        ? (param_time = param)
        : (0xa === ("" + param)["length"] && (param = 0x3e8 * parseInt(param)), (param_time = new Date(param)));
      var param_timezoneoffset = param + 0xea60 * new Date(param)["getTimezoneOffset"](),
        param_time_n = param_timezoneoffset + 0x36ee80 * param_other;
      return (
        (param_time = new Date(param_time_n)),
        {
          y: param_time["getFullYear"](),
          m:
            param_time["getMonth"]() + 0x1 < 0xa
              ? "0" + (param_time["getMonth"]() + 0x1)
              : param_time["getMonth"]() + 0x1,
          d: param_time["getDate"]() < 0xa ? "0" + param_time["getDate"]() : param_time["getDate"](),
          h: param_time["getHours"]() < 0xa ? "0" + param_time["getHours"]() : param_time["getHours"](),
          f: param_time["getMinutes"]() < 0xa ? "0" + param_time["getMinutes"]() : param_time["getMinutes"](),
        }
      );
    }

    function encry_join(param: any) {
      for (
        var a = arguments["length"] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0xa,
          funcRun = function () {
            for (var b, c = [], d = 0x0; d < 0x100; d++) {
              b = d;
              for (var index = 0x0; index < 0x8; index++) b = 0x1 & b ? 0xedb88320 ^ (b >>> 0x1) : b >>> 0x1;
              c[d] = b;
            }
            return c;
          },
          _funcRun_ = funcRun(),
          _param = param,
          _param_1 = -0x1,
          _param_0 = 0x0;
        _param_0 < _param["length"];
        _param_0++
      )
        _param_1 = (_param_1 >>> 0x8) ^ _funcRun_[0xff & (_param_1 ^ _param.charCodeAt(_param_0))];
      return ((_param_1 = (-0x1 ^ _param_1) >>> 0x0), _param_1.toString(a));
    }

    function getSign(urlPath: any) {
      var param_web = "web";
      var param_type = 3;
      var param_time = Math.round(
        (new Date().getTime() + 0x3c * new Date().getTimezoneOffset() * 0x3e8 + 28800000) / 0x3e8
      ).toString();
      var key = "a,d,e,f,g,h,l,m,y,i,j,n,o,p,k,q,r,s,t,u,b,c,v,w,s,z";
      var randomRoundNum = Math["round"](0x989680 * Math["random"]());

      var number_split;
      var time_a = {} as any;
      var time_y;
      var time_m;
      var time_d;
      var time_h;
      var time_f;
      var time_array;
      var time_push: any[];
      // @ts-expect-error
      for (var number_item in ((number_split = key.split(",")),
      (time_a = encry_time(param_time)),
      (time_y = time_a["y"]),
      (time_m = time_a["m"]),
      (time_d = time_a["d"]),
      (time_h = time_a["h"]),
      (time_f = time_a["f"]),
      (time_array = [time_y, time_m, time_d, time_h, time_f].join("")),
      (time_push = []),
      time_array))
        time_push["push"](number_split[Number(time_array[number_item])]);
      var param_no;
      var param_join_s;
      return (
        (param_no = encry_join(time_push["join"](""))),
        (param_join_s = encry_join(
          ""
            ["concat"](param_time, "|")
            ["concat"](String(randomRoundNum), "|")
            ["concat"](urlPath, "|")
            ["concat"](param_web, "|")
            ["concat"](String(param_type), "|")
            ["concat"](param_no)
        )),
        [param_no, ""["concat"](param_time, "-")["concat"](String(randomRoundNum), "-")["concat"](param_join_s)]
      );
    }
    return getSign("/a/api/share/download/info");
  }
  /**
   * 将直链的param参数解析成真正的直链
   * @param url
   */
  decodeDownloadUrl(url: string) {
    if (url === "") {
      return "";
    }
    return url;
    let new_url_no_redirect = url + "&auto_redirect=0";
    let base64data = btoa(new_url_no_redirect);
    return "https://web-pro2.123952.com/download-v2/?params=" + base64data + "&is_s3=0";
  }
}
