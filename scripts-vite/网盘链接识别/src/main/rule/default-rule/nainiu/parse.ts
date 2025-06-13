import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { GM_download } from "ViteGM";
import { ParseFileAbstract } from "../../../parse/NetDiskParseAbstract";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { NetDiskCommonUtils } from "@/utils/NetDiskCommonUtils";

export class NetDiskParse_nainiu extends ParseFileAbstract {
	panelList = [];
	panelContent = "";
	OK_CODE = "0000";
	async init(ruleIndex: number, shareCode: string, accessCode: AccessCodeNonNullType) {
		const that = this;
		log.info(ruleIndex, shareCode, accessCode);
		that.ruleIndex = ruleIndex;
		that.shareCode = shareCode;
		that.accessCode = accessCode;
		that.panelList = [];
		that.panelContent = "";
		let checkLinkValidityInfo = await that.checkLinkValidity(
			that.shareCode,
			that.accessCode
		);
		if (!checkLinkValidityInfo) {
			return;
		}
		if (checkLinkValidityInfo.isFolder) {
			/* 多文件 */
			Qmsg.info("正在递归文件");
			let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
			let firstFolderInfo = await that.getShareFolder(
				checkLinkValidityInfo["data"]["guid"]
			);
			if (!firstFolderInfo) {
				QmsgLoading.close();
				return;
			}
			let firstFileInfo = await that.getShareFiles(
				checkLinkValidityInfo["data"]["guid"]
			);
			if (!firstFileInfo) {
				QmsgLoading.close();
				return;
			}
			let folderInfoList = that.getFolderInfo(
				checkLinkValidityInfo["data"]["guid"],
				firstFolderInfo,
				firstFileInfo,
				0
			);
			QmsgLoading.close();
			log.info("递归完毕");
			NetDiskUI.staticView.moreFile("奶牛快传文件解析", folderInfoList);
		} else {
			/* 单文件 */
			let downloadUrl = void 0 as any as string;
			if (checkLinkValidityInfo["zipDownload"]) {
				downloadUrl = await that.getZipFileDownloadUrl(
					that.shareCode,
					checkLinkValidityInfo["guid"],
					checkLinkValidityInfo["fileName"]
				);
			} else {
				// @ts-ignore
				downloadUrl = await that.getDownloadUrl(
					that.shareCode,
					checkLinkValidityInfo["guid"],
					checkLinkValidityInfo["id"]
				);
			}
			if (!downloadUrl) {
				return;
			}
			if (NetDiskFilterScheme.isForwardDownloadLink("nainiu")) {
				downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
					"nainiu",
					downloadUrl
				);
			}

			NetDiskUI.staticView.oneFile({
				title: "奶牛快传单文件直链",
				fileName: checkLinkValidityInfo["fileName"],
				fileType: checkLinkValidityInfo["fileType"],
				fileSize: checkLinkValidityInfo["fileSize"],
				downloadUrl: downloadUrl,
				fileUploadTime: checkLinkValidityInfo["fileUploadTime"],
				fileLatestTime: checkLinkValidityInfo["fileLatestTime"],
				clickCallBack: (_fileDetails_) => {
					that.downloadFile(checkLinkValidityInfo["fileName"], downloadUrl);
				},
			});
		}
	}
	/**
	 * 校验链接有效性并解析获取信息
	 * @param shareCode
	 * @param accessCode
	 */
	async checkLinkValidity(shareCode: string, accessCode: AccessCodeNonNullType) {
		const that = this;
		let resultJSON = await that.getShareByUniqueUrl(shareCode);
		if (!resultJSON) {
			return false;
		}
		let code = resultJSON["code"];
		let message = resultJSON["message"];
		if (code !== that.OK_CODE) {
			Qmsg.error(message);
			return false;
		} else {
			let needPassword = resultJSON["data"]["needPassword"];
			let zipDownload = resultJSON["data"]["zipDownload"];
			if (needPassword && utils.isNull(accessCode)) {
				Qmsg.error("密码缺失!");
				NetDiskUI.newAccessCodeView(
					"密码缺失",
					"nainiu",
					that.ruleIndex,
					that.shareCode,
					that.accessCode,
					(option) => {
						that.init(that.ruleIndex, that.shareCode, option.accessCode);
					}
				);
				return false;
			} else if (zipDownload) {
				/* 压缩包下载 */
				Qmsg.success("该链接为zip单文件");
				return {
					zipDownload: zipDownload,
					guid: resultJSON["data"]["guid"],
					fileSize: utils.formatByteToSize(
						resultJSON["data"]["firstFolder"]["size"]
					),
					fileName: resultJSON["data"]["firstFolder"]["title"],
					fileUploadTime: utils.formatTime(
						resultJSON["data"]["firstFolder"]["created_at"]
					),
					fileLatestTime: utils.formatTime(
						resultJSON["data"]["firstFolder"]["updated_at"]
					),
				};
			} else if (resultJSON["data"]["firstFile"] == void 0) {
				/* 文件夹类型 */
				Qmsg.success("该链接为文件夹类型");
				return {
					isFolder: true,
					guid: resultJSON["data"]["guid"],
					firstFolder: resultJSON["data"]["firstFolder"],
					data: resultJSON["data"],
				};
			}
			return {
				zipDownload: zipDownload,
				guid: resultJSON["data"]["guid"],
				id: resultJSON["data"]["firstFile"]["id"],
				fileSize: utils.formatByteToSize(
					resultJSON["data"]["firstFile"]["file_info"]["size"]
				),
				fileName: resultJSON["data"]["firstFile"]["file_info"]["title"],
				fileType: resultJSON["data"]["firstFile"]["file_info"]["format"],
				fileUploadTime: utils.formatTime(
					resultJSON["data"]["firstFile"]["created_at"]
				),
				fileLatestTime: utils.formatTime(
					resultJSON["data"]["firstFile"]["updated_at"]
				),
			};
		}
	}
	/**
	 * 获取直链弹窗的文件夹信息
	 * @returns
	 */
	getFolderInfo(
		transferGuid: any,
		shareFolderInfoList: any,
		shareFileInfoList: any,
		index = 0
	) {
		const that = this;
		let folderInfoList: PopsFolderDataConfig[] = [];
		let tempFolderInfoList: PopsFolderDataConfig[] = [];
		let tempFolderFileInfoList: PopsFolderDataConfig[] = [];
		/* 文件夹 */
		shareFolderInfoList.forEach((folderInfo: any) => {
			folderInfoList.push({
				fileName: folderInfo["title"],
				fileSize: 0,
				fileType: "",
				createTime: folderInfo["created_at"],
				latestTime: folderInfo["updated_at"],
				isFolder: true,
				index: index,
				async clickEvent() {
					if (
						!folderInfo["child_folder_count"] &&
						!folderInfo["content_count"]
					) {
						/* 里面没有文件夹和文件 */
						return [];
					}
					let childFolderInfo = await that.getShareFolder(
						transferGuid,
						folderInfo["id"]
					);
					if (!childFolderInfo) {
						return [];
					}
					let childFileInfo = await that.getShareFiles(
						transferGuid,
						folderInfo["id"]
					);
					if (!childFileInfo) {
						return [];
					}
					let folderInfoList = that.getFolderInfo(
						transferGuid,
						childFolderInfo,
						childFileInfo,
						index + 1
					);
					return folderInfoList;
				},
			});
		});
		/* 文件 */
		shareFileInfoList.forEach((fileInfo: any) => {
			let fileName = fileInfo["file_info"]["title"];
			let fileType = fileInfo["file_info"]["format"] ?? "";
			if (Boolean(fileType)) {
				fileName = fileName + "." + fileType;
			}
			folderInfoList.push({
				fileName: fileName,
				fileSize: fileInfo["file_info"]["size"],
				fileType: fileType,
				createTime: fileInfo["created_at"],
				latestTime: fileInfo["updated_at"],
				isFolder: false,
				index: index,
				async clickEvent() {
					let downloadUrl = await that.getDownloadUrl(
						that.shareCode,
						transferGuid,
						fileInfo["id"]
					);
					if (!downloadUrl) {
						return;
					}
					if (NetDiskFilterScheme.isForwardDownloadLink("nainiu")) {
						downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
							"nainiu",
							downloadUrl
						);
					}

					that.downloadFile(fileName, downloadUrl);
				},
			});
		});
		tempFolderInfoList.sort((a, b) =>
			a["fileName"].localeCompare(b["fileName"])
		);
		tempFolderFileInfoList.sort((a, b) =>
			a["fileName"].localeCompare(b["fileName"])
		);
		folderInfoList = folderInfoList.concat(tempFolderInfoList);
		folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
		log.info("getFolderInfo", folderInfoList);
		return folderInfoList;
	}
	/**
	 * 文件解析
	 * @param shareCode
	 * @param accessCode
	 */
	async parseMoreFile(shareCode: string, accessCode: AccessCodeNonNullType) {}
	/**
	 * 获取文件夹信息
	 * @param transferGuid
	 * @param folderId
	 * @param page
	 * @param size
	 */
	async getShareFolder(
		transferGuid: string,
		folderId = "",
		page = 0,
		size = 100
	) {
		const that = this;
		let getResp = await httpx.get(
			`https://cowtransfer.com/core/api/transfer/share/folders?transferGuid=${transferGuid}&folderId=${folderId}&page=${page}&size=${size}`,
			{
				headers: {
					Accept: "application/json",
					"User-Agent": utils.getRandomPCUA(),
					Referer: "https://cowtransfer.com/",
				},
			}
		);
		log.success(getResp);
		if (!getResp.status) {
			return;
		}
		let data = utils.toJSON(getResp.data.responseText);
		if (data.code !== that.OK_CODE) {
			Qmsg.error(data["message"]);
			return;
		}
		let folders = data["data"]["folders"];
		if (!Array.isArray(folders)) {
			Qmsg.error("data.folders不是数组");
			return;
		}
		return folders;
	}
	/**
	 * 获取文件信息
	 * @param transferGuid
	 * @param folderId
	 * @param page
	 * @param size
	 * @param subContent
	 */
	async getShareFiles(
		transferGuid: string,
		folderId: string = "",
		page: number = 0,
		size: number = 20,
		subContent: boolean = false
	) {
		const that = this;
		let getResp = await httpx.get(
			`https://cowtransfer.com/core/api/transfer/share/files?transferGuid=${transferGuid}&folderId=${folderId}&page=${page}&size=${size}&subContent=${subContent}`,
			{
				headers: {
					Accept: "application/json",
					"User-Agent": utils.getRandomPCUA(),
					Referer: "https://cowtransfer.com/",
				},
			}
		);
		log.success(getResp);
		if (!getResp.status) {
			return;
		}
		let data = utils.toJSON(getResp.data.responseText);
		if (data.code !== that.OK_CODE) {
			Qmsg.error(data["message"]);
			return;
		}
		let files = data["data"]["files"];
		if (!Array.isArray(files)) {
			Qmsg.error("data.files不是数组");
			return;
		}
		return files;
	}
	/**
	 * 获取分享信息
	 * @param {string} shareCode
	 */
	async getShareByUniqueUrl(shareCode: string) {
		const that = this;
		let url = `https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${shareCode}`;
		let getResp = await httpx.get({
			url: url,
			headers: {
				"User-Agent": utils.getRandomPCUA(),
				Referer: "https://cowtransfer.com/s/" + shareCode,
			},
		});
		log.info(getResp);
		if (!getResp.status) {
			return;
		}
		let respData = getResp.data;
		let resultJSON = utils.toJSON(respData.responseText) as {
			code: string;
			message: string;
			data: any;
		};
		log.info("转换的JSON", resultJSON);
		return resultJSON;
	}
	/**
	 * 获取下载链接
	 * @param shareCode
	 * @param guid
	 * @param id
	 */
	async getDownloadUrl(shareCode: string, guid: string = "", id: string = "") {
		const that = this;
		let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&fileId=${id}`;
		let getResp = await httpx.get({
			url: url,
			headers: {
				"User-Agent": utils.getRandomPCUA(),
				Referer: "https://cowtransfer.com/s/" + shareCode,
			},
		});
		log.info(getResp);
		if (!getResp.status) {
			return;
		}
		let respData = getResp.data;
		let resultJSON = utils.toJSON(respData.responseText);
		log.info("转换的JSON", resultJSON);
		if (resultJSON["code"] === that.OK_CODE) {
			return resultJSON["data"]["downloadUrl"] as string;
		} else {
			Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
			return;
		}
	}
	/**
	 * 获取zip文件的下载链接
	 * @param shareCode
	 * @param guid
	 * @param title 标题
	 */
	async getZipFileDownloadUrl(shareCode: string, guid = "", title = "") {
		const that = this;
		let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&title=${title}`;
		let getResp = await httpx.get({
			url: url,
			headers: {
				"User-Agent": utils.getRandomPCUA(),
				Referer: "https://cowtransfer.com/s/" + shareCode,
			},
		});
		log.info(getResp);
		if (!getResp.status) {
			return;
		}
		let respData = getResp.data;
		let resultJSON = utils.toJSON(respData.responseText);
		log.info("转换的JSON", resultJSON);
		if (resultJSON["code"] === that.OK_CODE) {
			return resultJSON["data"]["downloadUrl"];
		} else {
			Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
			return;
		}
	}
	/**
	 * 下载文件
	 * @param fileName 文件名
	 * @param downloadUrl 下载地址
	 */
	async downloadFile(fileName: string, downloadUrl: string) {
		log.info("下载文件：", fileName, downloadUrl);
		if (window.location.hostname === "cowtransfer.com") {
			window.open(downloadUrl, "_blank");
			return;
		}
		if (!NetDiskCommonUtils.isSupport_GM_download()) {
			Qmsg.error("当前脚本环境不支持API 【GM_download】");
			return;
		}
		Qmsg.info(`调用【GM_download】下载：${fileName}`);
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
				Referer: "https://cowtransfer.com/s/" + this.shareCode,
			},
			onload() {
				isSuccessDownload = true;
				downloadingQmsg.close();
				Qmsg.success(`下载 ${fileName} 已完成`, { consoleLogContent: true });
			},
			onprogress(details) {
				if (
					typeof details === "object" &&
					"loaded" in details &&
					"total" in details &&
					!isDownloadEnd
				) {
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
}
