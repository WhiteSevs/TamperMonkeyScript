import { log } from "@/env";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/types/index";
import { NetDiskView } from "../NetDiskView";
import indexCSS from "./index.css?raw";

/** 单文件配置 */
type NetDiskOneFileDetails = {
  // 文件标题
  title: string;
  // 文件名
  fileName: string;
  // 文件类型（可选）
  fileType?: string;
  // 文件大小（可选），可以是字符串或数字形式
  fileSize?: string | number;
  // 文件下载链接
  downloadUrl: string;
  // 文件上传时间（可选），可以是字符串或数字形式
  fileUploadTime?: string | number;
  // 文件最新时间（可选），可以是字符串或数字形式
  fileLatestTime?: string | number;
  // 点击回调函数（可选），参数为当前文件的详细信息
  clickCallBack?: (_fileDetails_: {
    title: string;
    fileName: string;
    fileType?: string;
    fileSize?: string | number;
    downloadUrl: string;
    fileUploadTime?: string | number;
    fileLatestTime?: string | number;
  }) => void;
};

export const NetDiskLinearChainDialogView = {
  /**
   * 单文件直链弹窗
   * @param fileDetails 配置
   */
  oneFile(fileDetails: NetDiskOneFileDetails) {
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
                fileDetails.clickCallBack(fileDetails);
              } else {
                return {
                  autoDownload: true,
                  mode: "aBlank",
                  url: fileDetails.downloadUrl,
                };
              }
            },
          },
        ],
        btn: {
          ok: {
            text: "下载",
            callback() {
              if (typeof fileDetails.clickCallBack === "function") {
                fileDetails.clickCallBack(fileDetails);
              } else {
                window.open(fileDetails.downloadUrl, "_blank");
              }
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
  moreFile(title: string, folderInfoList: PopsFolderDataConfig[] = []) {
    log.success("文件解析信息", folderInfoList);
    NetDiskPops.folder(
      {
        title: {
          text: title,
        },
        folder: folderInfoList,
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
