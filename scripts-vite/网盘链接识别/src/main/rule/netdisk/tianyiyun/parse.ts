import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { NetDiskParseObject } from "../../../parse/NetDiskParseObject";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { NetDiskPops } from "@/main/pops/NetDiskPops";

export class NetDiskParse_Tianyiyun extends NetDiskParseObject {
	shareId = void 0 as any as number;
	/* 猜测1是有密码，2是无密码 */
	shareMode: number = 1;
	code = {
		ShareNotFoundFlatDir: "抱歉，该文件的分享平铺目录未找到",
		ShareNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在。",
		ShareAuditNotPass: "抱歉，该内容审核不通过",
		FileNotFound: "抱歉，文件不存在",
		ShareExpiredError: "抱歉，您访问的页面地址有误，或者该页面不存在",
		ShareAuditWaiting: "抱歉，该链接处于审核中",
		ShareInfoNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在",
		FileTooLarge: "抱歉，文件太大，不支持下载",
		InvalidSessionKey:
			"天翼云PC端Cookie未生成，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC且在登录后要等待进入个人云空间后生成Cookie，不是手机端浏览的个人云空间，那样生成的Cookie无法使用)",
	};
	async init(netDiskIndex: number, shareCode: string, accessCode: string) {
		const that = this;
		log.info([netDiskIndex, shareCode, accessCode]);
		that.netDiskIndex = netDiskIndex;
		that.shareCode = shareCode;
		that.accessCode = accessCode;

		let shareInfoData = await that.getShareInfoByCodeV2(shareCode);
		if (!shareInfoData) {
			return;
		}

		log.info(["解析的JSON信息", shareInfoData]);
		if (shareInfoData["needAccessCode"] && utils.isNull(that.accessCode)) {
			Qmsg.error("密码不正确!");
			NetDiskUI.newAccessCodeView(
				void 0,
				"tianyiyun",
				that.netDiskIndex,
				that.shareCode,
				that.accessCode,
				(userInputAccessCode) => {
					that.init(that.netDiskIndex, that.shareCode, userInputAccessCode);
				}
			);
			return;
		}
		if ("shareId" in shareInfoData) {
			this.shareId = shareInfoData["shareId"];
		} else {
			let newShareId = await that.getShareId(shareCode, accessCode);
			if (newShareId) {
				this.shareId = newShareId;
			}
		}
		if ("shareMode" in shareInfoData) {
			this.shareMode = shareInfoData["shareMode"];
		}
		if (this.shareId == null) {
			return;
		}
		if (shareInfoData.isFolder) {
			/* 多文件 */
			Qmsg.info("正在递归文件");
			let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
			let fileId = shareInfoData["fileId"];
			let folderInfo = await that.listShareDir(
				shareCode,
				accessCode,
				void 0,
				void 0,
				fileId,
				fileId,
				void 0,
				this.shareId,
				void 0,
				void 0,
				void 0
			);
			if (!folderInfo) {
				QmsgLoading.close();
				return;
			}
			let folderInfoList = that.getFolderInfo(
				shareCode,
				accessCode,
				folderInfo,
				0
			);
			QmsgLoading.close();
			log.info("递归完毕");
			NetDiskUI.staticView.moreFile("天翼云文件解析", folderInfoList);
			return;
		} else {
			/* 单文件 */
			let downloadUrl = await that.getDownloadUrl(
				that.shareCode,
				that.accessCode,
				shareInfoData.fileId,
				this.shareId
			);
			if (downloadUrl) {
				if (NetDiskFilterScheme.isForwardDownloadLink("tianyiyun")) {
					downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
						"tianyiyun",
						downloadUrl
					);
				}
				NetDiskUI.staticView.oneFile({
					title: "天翼云单文件直链",
					fileName: shareInfoData.fileName,
					fileSize: utils.formatByteToSize(shareInfoData.fileSize),
					downloadUrl: downloadUrl,
					fileUploadTime: shareInfoData.fileCreateDate,
					fileLatestTime: shareInfoData.fileLastOpTime,
				});
			}
		}
	}
	/**
	 * 获取当前登录用户的信息
	 * @returns {Promise<?{
	 * encryptAccount: string,
	 * icon: string,
	 * nickname: string,
	 * res_code: string,
	 * res_message: string,
	 * sessionKey: string,
	 * userAccount: string
	 * }>}
	 */
	async getUserBriefInfo(shareCode: string) {
		const that = this;
		let getResp = await httpx.get(
			"https://cloud.189.cn/api/portal/v2/getUserBriefInfo.action",
			{
				headers: {
					Accept: "application/json;charset=UTF-8",
					Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
					"User-Agent": utils.getRandomPCUA(),
				},
				allowInterceptConfig: false,
				onerror() {},
			}
		);
		log.info(getResp);
		if (!getResp.status) {
			let errorResultJSON = utils.toJSON(getResp.data.responseText);
			if (errorResultJSON["res_code"] in that.code) {
				Qmsg.error(
					that.code[errorResultJSON["res_code"] as keyof typeof this.code]
				);
			} else {
				Qmsg.error("请求异常");
			}
			return;
		}
		let data = utils.toJSON(getResp.data.responseText);
		if (data["res_code"] === 0) {
			return data;
		}
	}
	/**
	 * 获取分享信息
	 * @param {string} shareCode
	 * @returns
	 */
	async getShareInfoByCodeV2(shareCode: string) {
		const that = this;
		let postResp = await httpx.post({
			url: "https://cloud.189.cn/api/open/share/getShareInfoByCodeV2.action",
			data: `shareCode=${shareCode}`,
			headers: {
				Accept: "application/json;charset=UTF-8",
				"Content-Type": "application/x-www-form-urlencoded",
				"User-Agent": utils.getRandomPCUA(),
				"Sign-Type": 1,
				Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
				Origin: "https://cloud.189.cn",
			},
			allowInterceptConfig: false,
			onerror() {},
		});
		if (!postResp.status) {
			let errorData = utils.toJSON(postResp.data.responseText);
			log.error(["获取下载参数失败的JSON信息", errorData]);
			if (errorData["res_code"] in that.code) {
				Qmsg.error(that.code[errorData["res_code"] as keyof typeof that.code]);
			} else {
				Qmsg.error(errorData["res_message"]);
			}
			return;
		}
		let postData = postResp.data;
		log.info(postData);
		let data = utils.toJSON(postData.responseText);
		if (data["res_code"] == 0) {
			return data;
		} else {
			if (that.code.hasOwnProperty(data["res_code"])) {
				Qmsg.error(that.code[data["res_code"] as keyof typeof that.code]);
			} else {
				Qmsg.error("获取FileId失败");
			}
		}
	}
	/**
	 * 获取shareId
	 */
	async getShareId(shareCode: string, accessCode: string) {
		let getResp = await httpx.get({
			url: `https://cloud.189.cn/api/open/share/checkAccessCode.action?shareCode=${shareCode}&accessCode=${accessCode}`,
			headers: {
				Accept: "application/json;charset=UTF-8",
				"Cache-Control": "no-cache",
				"User-Agent": utils.getRandomPCUA(),
				"Sign-Type": 1,
				Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
			},
			responseType: "json",
		});
		if (!getResp.status) {
			return;
		}
		let respData = getResp.data;
		log.info(respData);
		let data = utils.toJSON(respData.responseText);
		if (data["res_code"] === 0 && "shareId" in data) {
			return data["shareId"] as number;
		} else {
			Qmsg.error("获取shareId失败");
			log.info(data);
		}
	}
	/**
	 * 获取随机noCache
	 * @returns {string}
	 */
	getNoCacheValue() {
		let result = "";
		for (let index = 0; index < 17; index++) {
			result += utils.getRandomValue(1, 9);
		}
		return "0." + result;
	}
	/**
	 * 获取下载链接
	 * @param {string} shareCode
	 * @param {string} accessCode
	 * @param {number} fileId
	 * @param {number} shareId
	 * @returns {Promise}
	 */
	async getDownloadUrl(
		shareCode: string,
		accessCode: string,
		fileId: number,
		shareId: number
	) {
		const that = this;
		let getResp = await httpx.get({
			url: `https://cloud.189.cn/api/open/file/getFileDownloadUrl.action?fileId=${fileId}&dt=1&shareId=${shareId}`,
			headers: {
				Accept: "application/json;charset=UTF-8",
				"Cache-Control": "no-cache",
				"User-Agent": utils.getRandomPCUA(),
				Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
				"Sign-Type": 1,
			},
			responseType: "json",
			allowInterceptConfig: false,
			onerror() {},
		});
		log.info(getResp);
		if (!getResp.status) {
			let errorResultJSON = utils.toJSON(getResp.data.responseText);
			if (errorResultJSON["errorCode"] === "InvalidSessionKey") {
				that.gotoLogin(that.code["InvalidSessionKey"]);
			} else if (errorResultJSON["res_code"] in that.code) {
				Qmsg.error(
					that.code[errorResultJSON["res_code"] as keyof typeof that.code]
				);
			} else {
				Qmsg.error("请求异常");
			}
			return;
		}
		let respData = getResp.data;
		let data = utils.toJSON(respData.responseText);
		log.info(data);
		if (data["res_code"] === 0) {
			return data["fileDownloadUrl"];
		} else if (
			"InvalidSessionKey" === data["res_code"] ||
			"InvalidSessionKey" === data["errorCode"]
		) {
			that.gotoLogin(that.code["InvalidSessionKey"]);
		} else if (that.code.hasOwnProperty(data["res_code"])) {
			Qmsg.error(that.code[data["res_code"] as keyof typeof that.code]);
		} else {
			Qmsg.error("请求失败");
			log.error(respData);
		}
	}

	/**
	 * 天翼云登录弹窗
	 * @param text 弹窗的显示的内容
	 */
	gotoLogin(text = "") {
		NetDiskPops.confirm(
			{
				title: {
					position: "center",
					text: "天翼云",
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
							window.open(
								"https://cloud.189.cn/api/portal/loginUrl.action?redirectURL=https://cloud.189.cn/web/main",
								"_blank"
							);
						},
					},
				},
			},
			NetDiskUI.popsStyle.tianYiYunLoginTip
		);
	}
	/**
	 * 解析文件夹信息
	 */
	async listShareDir(
		shareCode: string,
		accessCode: string,
		pageNum: number = 1,
		pageSize: number = 60,
		fileId: string | number,
		shareDirFileId: string | number,
		isFolder = true,
		shareId: number | string,
		iconOption: number = 5,
		orderBy = "lastOpTime",
		descending = true
	) {
		const that = this;
		/* Sessionkey: Sessionkey */
		const getSearParamData = {
			pageNum: pageNum,
			pageSize: pageSize,
			fileId: fileId,
			shareDirFileId: shareDirFileId,
			isFolder: isFolder,
			shareId: shareId,
			shareMode: this.shareMode,
			iconOption: iconOption,
			orderBy: orderBy,
			descending: descending,
			accessCode: accessCode,
		};
		let getResp = await httpx.get(
			`https://cloud.189.cn/api/open/share/listShareDir.action?${utils.toSearchParamsStr(
				getSearParamData
			)}`,
			{
				headers: {
					Accept: "application/json;charset=UTF-8",
					Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
					"Sign-Type": 1,
					"User-Agent": utils.getRandomPCUA(),
				},
				responseType: "json",
				allowInterceptConfig: false,
				onerror() {},
			}
		);
		if (!getResp.status) {
			let errorData = utils.toJSON(getResp.data.responseText);
			log.error(["解析文件夹信息失败", errorData]);
			if (errorData["res_code"] in that.code) {
				Qmsg.error(that.code[errorData["res_code"] as keyof typeof that.code]);
			} else if ("res_message" in errorData) {
				Qmsg.error(errorData["res_message"]);
			} else {
				Qmsg.error("解析文件夹信息失败");
			}
			return;
		}
		let getData = getResp.data;
		log.info(getData);
		let data = utils.toJSON(getData.responseText);
		if (data["res_code"] == 0) {
			return data["fileListAO"];
		} else {
			if (that.code.hasOwnProperty(data["res_code"])) {
				Qmsg.error(that.code[data["res_code"] as keyof typeof that.code]);
			} else {
				Qmsg.error("获取FileId失败");
			}
		}
	}
	/**
	 * 获取直链弹窗的文件夹信息
	 */
	getFolderInfo(
		shareCode: string,
		accessCode: string,
		dirInfo: any,
		index = 0
	) {
		const that = this;
		let folderInfoList: PopsFolderDataConfig[] = [];
		let tempFolderInfoList: PopsFolderDataConfig[] = [];
		let tempFolderFileInfoList: PopsFolderDataConfig[] = [];
		/* 文件夹 */
		dirInfo["folderList"].forEach((folderInfo: any) => {
			folderInfoList.push({
				fileName: folderInfo["name"],
				fileSize: 0,
				fileType: "",
				createTime: utils.formatToTimeStamp(folderInfo["createDate"]),
				latestTime: utils.formatToTimeStamp(folderInfo["lastOpTime"]),
				isFolder: true,
				index: index,
				async clickEvent() {
					let _folderInfo_ = await that.listShareDir(
						shareCode,
						accessCode,
						1,
						100,
						folderInfo["id"],
						folderInfo["id"],
						void 0,
						that.shareId,
						void 0,
						void 0,
						void 0
					);
					if (!_folderInfo_) {
						return [];
					}
					return that.getFolderInfo(
						shareCode,
						accessCode,
						_folderInfo_,
						index + 1
					);
				},
			});
		});
		/* 文件 */
		dirInfo["fileList"].forEach((fileInfo: any) => {
			folderInfoList.push({
				fileName: fileInfo["name"],
				fileSize: fileInfo["size"],
				fileType: "",
				createTime: utils.formatToTimeStamp(fileInfo["createDate"]),
				latestTime: utils.formatToTimeStamp(fileInfo["lastOpTime"]),
				isFolder: false,
				index: index,
				async clickEvent() {
					let downloadUrl = await that.getDownloadUrl(
						shareCode,
						accessCode,
						fileInfo["id"],
						that.shareId
					);
					if (downloadUrl) {
						if (NetDiskFilterScheme.isForwardDownloadLink("tianyiyun")) {
							downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
								"tianyiyun",
								downloadUrl
							);
						}

						return {
							autoDownload: true,
							mode: "aBlank",
							url: downloadUrl,
						};
					}
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
		log.info(["getFolderInfo", folderInfoList]);
		return folderInfoList;
	}
}
