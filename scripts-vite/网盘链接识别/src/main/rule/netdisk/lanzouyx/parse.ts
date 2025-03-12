import { httpx, log, utils, Cryptojs } from "@/env";
import type { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import Qmsg from "qmsg";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskParseObject } from "@/main/parse/NetDiskParseObject";

const LanZouUtils = {
	LanZouDiskApp: "lanZouY-disk-app",
	EncryptList: [
		"Y",
		"y",
		"0",
		"Z",
		"z",
		"N",
		"n",
		"M",
		"I",
		"6",
		"m",
		"W",
		"w",
		"1",
		"X",
		"x",
		"L",
		"l",
		"K",
		"7",
		"k",
		"i",
		"U",
		"u",
		"2",
		"V",
		"v",
		"J",
		"j",
		"8",
		"G",
		"g",
		"F",
		"S",
		"s",
		"3",
		"T",
		"t",
		"H",
		"h",
		"f",
		"E",
		"e",
		"D",
		"Q",
		"q",
		"4",
		"R",
		"r",
		"9",
		"d",
		"a",
		"C",
		"c",
		"B",
		"O",
		"o",
		"5",
		"P",
		"p",
		"b",
		"A",
	],
	decodeChar(e: any) {
		for (let t = 0; t < this.EncryptList.length; t++)
			if (e == this.EncryptList[t]) return t;
		return -1;
	},
	/**
	 * shareCode转id
	 * @param {string} shareCode
	 */
	idEncrypt(shareCode: string) {
		let t = 1,
			n = 0;
		if ("" != shareCode && shareCode.length > 4) {
			let r;
			shareCode = shareCode.substring(3, shareCode.length - 1);
			for (let index = 0; index < shareCode.length; index++)
				(r = shareCode.charAt(shareCode.length - index - 1)),
					(n += this.decodeChar(r) * t),
					(t *= 62);
		}
		return n;
	},
	encrypt(e: any) {
		// @ts-ignore
		const t = Cryptojs.enc.Utf8.parse(this.LanZouDiskApp),
			// @ts-ignore
			n = Cryptojs.enc.Utf8.parse(e),
			// @ts-ignore
			r = Cryptojs.AES.encrypt(n, t, {
				// @ts-ignore
				mode: Cryptojs.mode.ECB,
				// @ts-ignore
				padding: Cryptojs.pad.Pkcs7,
			});
		return r;
	},
	/**
	 * 用于时间戳转加密字符串
	 * @param {any} e
	 * @returns
	 */
	encryptHex(e: any) {
		// @ts-ignore
		const t = this.encrypt(e, this.LanZouDiskApp);
		return t.ciphertext.toString().toUpperCase();
	},
};
export class NetDiskParse_Lanzouyx extends NetDiskParseObject {
	$data = {
		devType: 6,
		devModel: "Chrome",
		extra: 2,
		type: 0,
		offset: 1,
		limit: 60,
	};
	/**
	 * 获取的uuid
	 */
	uuid = void 0 as any as string;
	/**
	 * 获取的userId
	 **/
	userId = void 0 as any as string;
	/**
	 * 加密后的shareCode
	 */
	shareCodeId = void 0 as any as number;
	/**
	 * 入口
	 * @param netDiskIndex
	 * @param shareCode
	 * @param accessCode
	 */
	async init(netDiskIndex: number, shareCode: string, accessCode: string) {
		const that = this;
		log.info(netDiskIndex, shareCode, accessCode);
		that.netDiskIndex = netDiskIndex;
		that.shareCode = shareCode;
		that.accessCode = accessCode;
		that.shareCodeId = that.getDecodeShareCodeId(shareCode);
		that.uuid = that.getEncodeUUID();
		let linkInfo = await this.recommendList(
			that.$data.devType,
			that.$data.devModel,
			that.uuid,
			that.$data.extra,
			that.getEncodeTimeStamp(),
			that.shareCode,
			that.$data.type,
			that.$data.offset,
			that.$data.limit
		);
		if (!linkInfo) {
			return;
		}
		if (!linkInfo["list"].length) {
			return;
		}
		if (linkInfo["list"][0]?.["map"]?.["userId"]) {
			that.userId = linkInfo["list"][0]?.["map"]?.["userId"];
		} else {
			Qmsg.error("解析获取【userId】为空");
			return;
		}
		if (linkInfo["list"][0]["folderIds"] == null) {
			/* 单文件 */
			log.success("该链接是 单文件");
			let fileInfo = linkInfo["list"][0]["fileList"][0];
			let folderInfoList = that.parseFolderInfo(
				linkInfo["list"][0]["fileList"],
				0
			);
			/* 获取文件下载信息 */
			// @ts-ignore
			let downloadInfo = await folderInfoList[0]["clickEvent"]();
			if (downloadInfo && !Array.isArray(downloadInfo)) {
				let downloadUrl = downloadInfo["url"];
				if (NetDiskFilterScheme.isForwardDownloadLink("lanzouyx")) {
					downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
						"lanzouyx",
						downloadUrl
					);
				}
				NetDiskUI.staticView.oneFile({
					title: "蓝奏云优享单文件直链",
					fileName: fileInfo["fileName"],
					fileSize: fileInfo["fileSize"] * 1024,
					downloadUrl: downloadUrl,
					fileUploadTime: utils.formatToTimeStamp(fileInfo["updTime"]),
					fileLatestTime: utils.formatToTimeStamp(fileInfo["updTime"]),
				});
			}
		} else {
			/* 多文件 */
			log.success("该链接是 多文件");
			Qmsg.info("正在递归文件");
			let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
			let folderInfoList = that.parseFolderInfo(
				linkInfo["list"][0]["fileList"],
				0
			);
			QmsgLoading.close();
			log.info("递归完毕");
			NetDiskUI.staticView.moreFile("蓝奏云优享解析", folderInfoList);
		}
	}
	/**
	 * 获取直链弹窗的文件夹信息
	 * @param infoList
	 * @param index
	 */
	parseFolderInfo(infoList: any[], index: number) {
		const that = this;
		let folderInfoList: PopsFolderDataConfig[] = [];
		let tempFolderInfoList: PopsFolderDataConfig[] = [];
		let tempFolderFileInfoList: PopsFolderDataConfig[] = [];
		infoList.forEach((item) => {
			if (item["fileType"] === 2) {
				/* 文件夹 */
				tempFolderInfoList.push({
					fileName: item["folderName"],
					fileSize: 0,
					fileType: "",
					createTime: new Date(item["updTime"]).getTime(),
					latestTime: new Date(item["updTime"]).getTime(),
					isFolder: true,
					index: index,
					async clickEvent(event, config) {
						let timestamp = that.getEncodeTimeStamp();
						let folderId = item["folderId"];
						let folderInfo = await that.getFolderInfo(
							that.$data.devType,
							that.$data.devModel,
							that.uuid,
							that.$data.extra,
							timestamp,
							that.shareCode,
							folderId,
							that.$data.offset,
							that.$data.limit
						);
						if (folderInfo && folderInfo["list"]) {
							return that.parseFolderInfo(folderInfo["list"], index + 1);
						} else {
							return [];
						}
					},
				});
			} else {
				/* 文件 */
				tempFolderFileInfoList.push({
					fileName: item["fileName"],
					fileSize: item["fileSize"] * 1024,
					fileType: "",
					createTime: new Date(item["updTime"]).getTime(),
					latestTime: new Date(item["updTime"]).getTime(),
					isFolder: false,
					index: index,
					async clickEvent() {
						let fileId = item["fileId"];
						let userId = item["userId"] || that.userId;
						let uuid = that.uuid;
						if (utils.isNull(userId)) {
							Qmsg.error("获取【userId】为空");
							return;
						}
						if (utils.isNull(uuid)) {
							Qmsg.error("获取【uuid】为空");
							return;
						}
						let downloadUrl = await that.getDownloadFileUrl(
							// @ts-ignore
							...that.getDownloadFileParams(fileId, userId, uuid)
						);
						if (downloadUrl) {
							if (NetDiskFilterScheme.isForwardDownloadLink("lanzouyx")) {
								downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
									"lanzouyx",
									downloadUrl
								);
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
		tempFolderInfoList.sort((leftData, rightData) =>
			leftData["fileName"].localeCompare(rightData["fileName"])
		);
		tempFolderFileInfoList.sort((leftData, rightData) =>
			leftData["fileName"].localeCompare(rightData["fileName"])
		);
		folderInfoList = folderInfoList.concat(tempFolderInfoList);
		folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
		return folderInfoList;
	}
	/**
	 * 获取列表信息
	 * @param devType
	 * @param devModel
	 * @param uuid
	 * @param extra
	 * @param timestamp
	 * @param shareId
	 * @param type
	 * @param offset
	 * @param limit
	 */
	async recommendList(
		devType: number = this.$data.devType,
		devModel: string = this.$data.devModel,
		uuid: string = "",
		extra: number = this.$data.extra,
		timestamp: string = "",
		shareId: string | number = "",
		type: number = this.$data.type,
		offset: number = this.$data.offset,
		limit: number = this.$data.limit
	) {
		let response = await httpx.post(
			`https://api.ilanzou.com/unproved/recommend/list?${utils.toSearchParamsStr(
				{
					devType: devType,
					devModel: devModel,
					uuid: uuid,
					extra: extra,
					timestamp: timestamp,
					shareId: shareId,
					code: this.accessCode,
					type: type,
					offset: offset,
					limit: limit,
				}
			)}`,
			{
				headers: {
					Accept: "application/json, text/plain, */*",
					Origin: "https://www.ilanzou.com",
					Referer: "https://www.ilanzou.com/",
					"Sec-Fetch-Site": "same-site",
					Host: "api.ilanzou.com",
					"User-Agent": utils.getRandomPCUA(),
				},
				responseType: "json",
			}
		);
		if (!response.status) {
			return;
		}
		let data = utils.toJSON(response.data.responseText);
		log.success("获取链接信息：", data);
		if (data["code"] !== 200) {
			Qmsg.error("请求链接信息失败");
			return;
		}
		if (!data["list"].length) {
			Qmsg.error("获取链接信息为空");
			return;
		}
		return data;
	}
	/**
	 * 获取文件夹信息
	 * @param devType
	 * @param devModel
	 * @param uuid
	 * @param extra
	 * @param timestamp
	 * @param shareId
	 * @param folderId
	 * @param offset
	 * @param limit
	 */
	async getFolderInfo(
		devType: number = this.$data.devType,
		devModel: string = this.$data.devModel,
		uuid: string = "",
		extra: number = this.$data.extra,
		timestamp: string = "",
		shareId: number | string = "",
		folderId: number | string = "",
		offset: number = this.$data.offset,
		limit: number = this.$data.limit
	) {
		let response = await httpx.post(
			`https://api.ilanzou.com/unproved/share/list?${utils.toSearchParamsStr({
				devType: devType,
				devModel: devModel,
				uuid: uuid,
				extra: extra,
				timestamp: timestamp,
				shareId: shareId,
				code: this.accessCode,
				folderId: folderId,
				offset: offset,
				limit: limit,
			})}`,
			{
				headers: {
					Accept: "application/json, text/plain, */*",
					Origin: "https://www.ilanzou.com",
					Referer: "https://www.ilanzou.com/",
					"Sec-Fetch-Site": "same-site",
					Host: "api.ilanzou.com",
					"User-Agent": utils.getRandomPCUA(),
				},
			}
		);
		if (!response.status) {
			return;
		}
		let data = utils.toJSON(response.data.responseText);
		log.success("获取文件列表信息：", data);
		if (data["code"] === 200) {
			return data;
		} else {
			Qmsg.error(data["msg"]);
		}
	}
	/**
	 * 获取下载链接
	 */
	async getDownloadFileUrl(
		downloadId: string = "",
		enable: number = 1,
		devType: number = this.$data.devType,
		uuid: string = "",
		timestamp: string = "",
		auth: string = "",
		shareId: string = this.shareCode
	) {
		let url = `https://api.ilanzou.com/unproved/file/redirect?${utils.toSearchParamsStr(
			{
				downloadId: downloadId,
				enable: enable,
				devType: devType,
				uuid: uuid,
				timestamp: timestamp,
				auth: auth,
				shareId: shareId,
			}
		)}`;
		return url;
		let response = await httpx.options(url);
		if (!response.status) {
			return;
		}
		log.success(response);
		if (response.data.responseText) {
			let errorData = utils.toJSON(response.data.responseText);
			log.error(errorData);
			Qmsg.error(errorData["msg"]);
			return;
		}
		return response.data.finalUrl;
	}
	/**
	 * 获取加密的uuid
	 * @param timestamp
	 */
	getEncodeUUID(timestamp: number = 21) {
		let r = (e = 21) =>
			crypto
				.getRandomValues(new Uint8Array(e))
				.reduce(
					(e, t) => (
						(t &= 63),
						(e +=
							t < 36
								? t.toString(36)
								: t < 62
								? (t - 26).toString(36).toUpperCase()
								: t > 62
								? "-"
								: "_"),
						e
					),
					""
				);
		return r(timestamp);
	}
	/**
	 * 获取shareCode转换后的id
	 */
	getDecodeShareCodeId(shareCode: string) {
		return LanZouUtils.idEncrypt(shareCode);
	}
	/**
	 * 获取加密后的timestamp
	 * @param time
	 */
	getEncodeTimeStamp(time = Date.now()) {
		return LanZouUtils.encryptHex(time);
	}
	/**
	 * 获取下载文件的参数
	 * @param fileId 文件id
	 * @param userId 用户id
	 * @param uuid 用户登录生成的uuid
	 */
	getDownloadFileParams(fileId: string, userId: string = "", uuid: string) {
		const that = this;
		let nowTime = Date.now();
		let downloadId = LanZouUtils.encryptHex(fileId + "|" + userId),
			enable = 1,
			timestamp = that.getEncodeTimeStamp(nowTime),
			auth = LanZouUtils.encryptHex(fileId + "|" + nowTime);
		return [
			downloadId,
			enable,
			that.$data.devType,
			uuid,
			timestamp,
			auth,
			that.shareCode,
		];
	}
	/**
	 * 前往登录
	 */
	gotoLogin() {
		NetDiskPops.confirm(
			{
				title: {
					position: "center",
					text: "蓝奏云优享",
				},
				content: {
					text: "必须先在【蓝奏云优享】进行登录，然后登录成功后刷新获取必备的下载参数【uuid】和【userId】。",
					html: false,
				},
				btn: {
					reverse: true,
					position: "end",
					ok: {
						text: "前往",
						enable: true,
						callback() {
							window.open("https://www.ilanzou.com", "_blank");
						},
					},
				},
			},
			NetDiskUI.popsStyle.tianYiYunLoginTip
		);
	}
}
