import { log, utils } from "@/env";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/types/index";
import { NetDiskView } from "../NetDiskView";
import indexCSS from "./index.css?raw";

/** 单文件配置 */
type NetDiskOneFileConfig = {
  /** 文件标题 */
  title: string;
  /** 文件名 */
  fileName: string;
  /** 文件类型（可选） */
  fileType?: string;
  /** 文件大小（可选），可以是字符串或数字形式 */
  fileSize?: string | number;
  /** 文件下载链接 */
  downloadUrl: string;
  /** 文件上传时间（可选），可以是字符串或数字形式 */
  fileUploadTime?: string | number;
  /** 文件最新时间（可选），可以是字符串或数字形式 */
  fileLatestTime?: string | number;
  /**
   * 点击回调函数（可选）
   * @returns
   *
   * + `false`: 阻止默认下载行为
   */
  clickCallBack?: (
    /**
     * 当前文件的详细信息
     */
    fileInfo: Omit<NetDiskOneFileConfig, "clickCallBack">
  ) => void | boolean | Promise<boolean | void>;
};

export const NetDiskLinearChainDialogView = {
  /**
   * 单文件直链弹窗
   * @param fileDetails 配置
   */
  oneFile(fileDetails: NetDiskOneFileConfig) {
    log.success("成功获取单文件直链", fileDetails);
    NetDiskPops.folder(
      {
        title: {
          text: fileDetails.title,
        },
        folder: [
          {
            fileName: fileDetails.fileName,
            fileSize: fileDetails.fileSize!,
            fileType: fileDetails.fileType ?? "",
            // @ts-expect-error
            createTime: fileDetails.fileUploadTime! || fileDetails.fileLatestTime!,
            // @ts-expect-error
            latestTime: fileDetails.fileLatestTime! || fileDetails.fileUploadTime!,
            isFolder: false,
            index: 0,
            async clickEvent() {
              if (typeof fileDetails.clickCallBack === "function") {
                const flag = await fileDetails.clickCallBack(fileDetails);
                if (typeof flag === "boolean" && !flag) {
                  return;
                }
              }
              return {
                autoDownload: true,
                mode: "aBlank",
                url: fileDetails.downloadUrl,
              };
            },
          },
        ],
        btn: {
          ok: {
            text: "下载",
            async callback() {
              if (typeof fileDetails.clickCallBack === "function") {
                const flag = await fileDetails.clickCallBack(fileDetails);
                if (typeof flag === "boolean" && !flag) {
                  return;
                }
              }
              window.open(fileDetails.downloadUrl, "_blank");
            },
          },
        },
        class: "netdisk-static-link-onefile",
        style: indexCSS,
      },
      NetDiskView.$config.viewSizeConfig.oneFileStaticView
    );
  },
  /**
   * 多文件直链弹窗
   * @param title 标题
   * @param folderInfoList文件夹信息
   */
  moreFile(title: string, data: PopsFolderDataConfig[] = []) {
    log.success("文件解析信息", data);

    // 重构后新的
    let infoList: PopsFolderDataConfig[] = [];
    // 文件
    let tempFileInfoList: PopsFolderDataConfig[] = [];
    // 文件
    let tempFolderInfoList: PopsFolderDataConfig[] = [];

    /**
     * 时间转换
     * @param time 文件上传/修改时间
     */
    const transformTime = (time: string | number): number | string => {
      if (typeof time === "number") {
        return time;
      }
      const timeNumberMatcher = time.match(/([\d]+)/);
      if (timeNumberMatcher) {
        const timeNumber = Number(timeNumberMatcher[timeNumberMatcher.length - 1]);
        if (!isNaN(timeNumber)) {
          const currentTime = Date.now();
          let changedTime: number = 0;
          if (time.includes("秒")) {
            changedTime = currentTime - timeNumber * 1000;
          } else if (time.includes("分")) {
            changedTime = currentTime - timeNumber * 60 * 1000;
          } else if (time.includes("时")) {
            changedTime = currentTime - timeNumber * 60 * 60 * 1000;
          } else if (time.includes("天")) {
            changedTime = currentTime - timeNumber * 24 * 60 * 60 * 1000;
          } else if (time.includes("星期") || time.includes("周)")) {
            changedTime = currentTime - timeNumber * 24 * 60 * 60 * 1000 * 7;
          } else if (time.includes("月")) {
            changedTime = currentTime - timeNumber * 30 * 24 * 60 * 60 * 1000;
          } else if (time.includes("年")) {
            changedTime = currentTime - timeNumber * 365 * 24 * 60 * 60 * 1000;
          }
          if (changedTime) {
            return utils.formatTime(changedTime, "yyyy-MM-dd");
          }
        }
      }
      return time;
    };
    data.forEach((item) => {
      if (item.isFolder) {
        // 文件夹
        tempFolderInfoList.push(item);
      } else {
        // 文件
        // 将特殊的文件上传时间转换为正常时间
        if (typeof item.createTime === "string") {
          item.createTime = transformTime(item.createTime) as number;
        }
        if (typeof item.latestTime === "string") {
          item.latestTime = transformTime(item.latestTime) as number;
        }
        tempFileInfoList.push(item);
      }
    });

    tempFileInfoList.sort((a, b) => a.fileName.localeCompare(b.fileName));
    tempFolderInfoList.sort((a, b) => a.fileName.localeCompare(b.fileName));

    infoList = infoList.concat(tempFolderInfoList);
    infoList = infoList.concat(tempFileInfoList);

    NetDiskPops.folder(
      {
        title: {
          text: title,
        },
        folder: infoList,
        btn: {
          ok: {
            enable: false,
          },
          cancel: {
            enable: true,
          },
        },
        style: indexCSS,
      },
      NetDiskView.$config.viewSizeConfig.moreFileStaticView
    );
  },
};
