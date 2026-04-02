import { log, utils } from "@/env";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import type { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/types/index.js";
import { NetDiskView } from "../NetDiskView";
import indexCSS from "./index.css?raw";

export const NetDiskLinearChainDialogView = {
  /**
   * 单文件直链弹窗
   * @param fileConfig 文件配置信息
   */
  oneFile(fileConfig: NetDiskOneFileConfig) {
    log.success("成功获取单文件直链", fileConfig);
    const folderConfig: PopsFolderDataConfig = {
      fileName: fileConfig.fileName,
      fileSize: fileConfig.fileSize!,
      fileType: fileConfig.fileType ?? "",
      // @ts-expect-error
      createTime: fileConfig.fileUploadTime! || fileConfig.fileLatestTime!,
      // @ts-expect-error
      latestTime: fileConfig.fileLatestTime! || fileConfig.fileUploadTime!,
      isFolder: false,
      index: 0,
      async clickEvent() {
        if (typeof fileConfig.clickCallBack === "function") {
          const flag = await fileConfig.clickCallBack(fileConfig);
          if (typeof flag === "boolean" && !flag) {
            return;
          }
        }
        return {
          mode: "aBlank",
          url: fileConfig.downloadUrl,
        };
      },
    };
    if (typeof fileConfig.clickCallBack !== "function" && utils.isNotNull(fileConfig.downloadUrl)) {
      folderConfig.clickEvent = {
        mode: "aBlank",
        url: fileConfig.downloadUrl,
      };
    }
    NetDiskPops.folder(
      {
        title: {
          text: fileConfig.title,
        },
        folder: [folderConfig],
        btn: {
          ok: {
            text: "下载",
            async callback() {
              if (typeof fileConfig.clickCallBack === "function") {
                const flag = await fileConfig.clickCallBack(fileConfig);
                if (typeof flag === "boolean" && !flag) {
                  return;
                }
              }
              window.open(fileConfig.downloadUrl, "_blank");
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
  moreFile(title: string, folderConfigList: PopsFolderDataConfig[] = []) {
    log.success("文件解析信息", folderConfigList);

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
    folderConfigList.forEach((item) => {
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
