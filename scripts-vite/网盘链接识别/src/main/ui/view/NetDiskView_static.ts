import { log } from "@/env";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskUI } from "../NetDiskUI";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/indexType";

type NetDiskOneFileDetails = {
	title: string;
	fileName: string;
	fileType?: string;
	fileSize?: string | number;
	downloadUrl: string;
	fileUploadTime?: string | number;
	fileLatestTime?: string | number;
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

export const NetDiskView_static = {
	getCSS() {
		return /*css*/ `
        .pops-folder-list .list-name-text{
            max-width: 300px;
        }
        .netdisk-static-link-onefile .pops-folder-list .list-name-text{
            max-width: 220px;
        }
        .netdisk-static-link-onefile .pops-mobile-folder-content .pops-folder-list .list-name-text{
            max-width: unset;
        }
        `;
	},
	/**
	 * 单文件直链弹窗
	 * @param fileDetails 配置
	 */
	oneFile(fileDetails: NetDiskOneFileDetails) {
		log.success(["成功获取单文件直链", fileDetails]);
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
						// @ts-ignore
						createTime:
							fileDetails.fileUploadTime! || fileDetails.fileLatestTime!,
						// @ts-ignore
						latestTime:
							fileDetails.fileLatestTime! || fileDetails.fileUploadTime!,
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
				style: this.getCSS(),
			},
			NetDiskUI.popsStyle.oneFileStaticView
		);
	},
	/**
	 * 多文件直链弹窗
	 * @param title 标题
	 * @param folderInfoList文件夹信息
	 */
	moreFile(
		title: string,
		folderInfoList: PopsFolderDataConfig[] = []
	) {
		log.success(["文件解析信息", folderInfoList]);
		NetDiskPops.folder(
			{
				title: {
					text: title,
				},
				folder: folderInfoList,
				style: this.getCSS(),
			},
			NetDiskUI.popsStyle.moreFileStaticView
		);
	},
};
