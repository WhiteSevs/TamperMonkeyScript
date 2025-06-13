import { DOMUtils, httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { unsafeWindow } from "ViteGM";
import { ParseFileAbstract } from "../../../parse/NetDiskParseAbstract";
import {
	NetDiskLinkClickMode,
	NetDiskLinkClickModeUtils,
} from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import type { HttpxResponse } from "@whitesev/utils/src/types/Httpx";

/**
 * 阿里云解析下载已失效
 */
export class NetDiskParse_Aliyun extends ParseFileAbstract {
	X_Share_Token_Data = {
		expire_time: "2000-01-01T00:00:00.000Z",
		expires_in: 7200,
		share_token: "",
	};
	/**
	 * header请求头 X-Device-Id
	 */
	X_Device_Id = null;
	/**
	 * header请求头 X-Canary
	 */
	X_Canary = "client=web,app=share,version=v2.3.1";
	async init(ruleIndex: number, shareCode: string, accessCode: AccessCodeNonNullType) {
		const that = this;
		log.info(ruleIndex, shareCode, accessCode);
		that.ruleIndex = ruleIndex;
		that.shareCode = shareCode;
		that.accessCode = accessCode;
		that.X_Device_Id = that.get_X_Device_Id();
		log.info("生成X_Device_Id：" + that.X_Device_Id);
		if (
			globalThis.location.hostname !== "www.aliyundrive.com" &&
			globalThis.location.hostname !== "www.alipan.com"
		) {
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				"aliyun",
				that.ruleIndex,
				that.shareCode,
				that.accessCode
			);
			let $QmsgErrorTip = Qmsg.error(
				`请在阿里云盘页面解析，<a href="${url}">点我前往</a>`,
				{
					html: true,
					timeout: 10000,
				}
			);
			DOMUtils.on(
				$QmsgErrorTip.$Qmsg.querySelector("a[href]"),
				"click",
				void 0,
				(event) => {
					utils.preventEvent(event);
					NetDiskLinkClickMode.openBlankUrl(
						url,
						"aliyun",
						that.ruleIndex,
						that.shareCode,
						that.accessCode
					);
				}
			);
			return;
		}
		let detail = await this.list_by_share(shareCode, "root");
		if (!detail) {
			return;
		}
		Qmsg.info("正在解析链接");
		let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
		let folderInfoList = that.getFolderInfo(detail, 0);
		QmsgLoading.close();
		log.info("解析完毕");
		NetDiskUI.staticView.moreFile("阿里云盘文件解析", folderInfoList);
	}
	/**
	 * 弹窗使用-获取文件夹信息
	 * @param infoList
	 */
	getFolderInfo(
		infoList: {
			category?: string;
			domain_id?: string;
			file_extension?: string;
			mime_extension?: string;
			mime_type?: string;
			punish_flag: number;
			created_at: string;
			drive_id: string;
			file_id: string;
			name: string;
			parent_file_id: string;
			share_id: string;
			type: string;
			updated_at: string;
		}[],
		index = 0
	) {
		const that = this;
		let folderInfoList: PopsFolderDataConfig[] = [];
		let tempFolderInfoList: PopsFolderDataConfig[] = [];
		/**
		 * @type {PopsFolderDataConfig[]}
		 */
		let tempFolderFileInfoList: PopsFolderDataConfig[] = [];
		infoList.forEach((item: any) => {
			if (item.type !== "folder") {
				/* 文件 */
				tempFolderFileInfoList.push({
					fileName: item.name,
					fileSize: item.size,
					fileType: item.file_extension,
					createTime: new Date(item.created_at).getTime(),
					latestTime: new Date(item.updated_at).getTime(),
					isFolder: false,
					index: index,
					async clickEvent() {
						let fileDownloadUrl = await that.get_share_link_download_url(
							item.share_id,
							item.file_id
						);
						if (!fileDownloadUrl) {
							return;
						}
						let schemeDownloadUrl = fileDownloadUrl;
						if (NetDiskFilterScheme.isForwardDownloadLink("aliyun")) {
							schemeDownloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
								"aliyun",
								schemeDownloadUrl
							);
						}
						return {
							autoDownload: true,
							mode: "aBlank",
							url: schemeDownloadUrl,
						};
					},
				});
			} else {
				/* 文件夹 */
				tempFolderInfoList.push({
					fileName: item.name,
					fileSize: 0,
					fileType: "",
					createTime: item.created_at,
					latestTime: item.updated_at,
					isFolder: true,
					index: index,
					async clickEvent() {
						let newDetail = await that.list_by_share(
							item.share_id,
							item.file_id
						);
						if (newDetail) {
							return that.getFolderInfo(newDetail, index + 1);
						} else {
							return [];
						}
					},
				});
			}
		});

		tempFolderInfoList.sort((a, b) =>
			a["fileName"].localeCompare(b["fileName"])
		);
		tempFolderFileInfoList.sort((a, b) =>
			a["fileName"].localeCompare(b["fileName"])
		);
		folderInfoList = folderInfoList.concat(tempFolderInfoList);
		folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
		log.info("getFilesInfoByRec", folderInfoList);
		return folderInfoList;
	}
	/**
	 * 列出文件列表
	 * @param share_id
	 * @param parent_file_id 父项，根是root
	 * @param order_by 根据xxx排序
	 * @param order_direction 排序规则(升序/降序)
	 */
	async list_by_share(
		share_id: string,
		parent_file_id: string,
		order_by: string = "name",
		order_direction: "ASC" | "DESC" = "DESC"
	) {
		const that = this;
		let postResp = await httpx.post(
			"https://api.aliyundrive.com/adrive/v2/file/list_by_share",
			{
				data: JSON.stringify({
					share_id: share_id,
					parent_file_id: parent_file_id,
					limit: 20,
					image_thumbnail_process: "image/resize,w_256/format,jpeg",
					image_url_process: "image/resize,w_1920/format,jpeg/interlace,1",
					video_thumbnail_process: "video/snapshot,t_1000,f_jpg,ar_auto,w_256",
					order_by: order_by,
					order_direction: order_direction,
				}),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
					Origin: "https://www.aliyundrive.com",
					Referer: "https://www.aliyundrive.com/",
					"X-Canary": that.X_Canary,
					"X-Device-Id": that.X_Device_Id,
					"X-Share-Token": await that.get_X_Share_Token(
						that.shareCode,
						that.accessCode
					),
					"User-Agent": utils.getRandomPCUA(),
				},
				allowInterceptConfig: false,
			}
		);
		if (!postResp.status) {
			that.handle_request_error(postResp);
			return;
		}
		let data = utils.toJSON(postResp.data.responseText);
		log.info("列出文件列表：", data);
		return data["items"] as {
			category?: string;
			domain_id?: string;
			file_extension?: string;
			mime_extension?: string;
			mime_type?: string;
			punish_flag: number;
			created_at: string;
			drive_id: string;
			file_id: string;
			name: string;
			parent_file_id: string;
			share_id: string;
			type: string;
			updated_at: string;
		}[];
	}
	/**
	 * 获取文件的下载链接
	 * @param share_id
	 * @param file_id
	 */
	async get_share_link_download_url(share_id: string, file_id: string) {
		const that = this;
		let postResp = await httpx.post(
			"https://api.aliyundrive.com/v2/file/get_share_link_download_url",
			{
				data: JSON.stringify({
					expire_sec: 600,
					file_id: file_id,
					share_id: share_id,
				}),
				headers: {
					Accept: "application/json, text/plain, */*",
					Origin: "https://www.aliyundrive.com",
					Referer: "https://www.aliyundrive.com/",
					"Content-Type": "application/json;charset=UTF-8",
					Authorization: "Bearer " + that.getAuthorization(),
					"X-Share-Token": await that.get_X_Share_Token(
						that.shareCode,
						that.accessCode
					),
					"User-Agent": utils.getRandomPCUA(),
				},
				responseType: "arraybuffer",
				allowInterceptConfig: false,
			}
		);
		if (!postResp.status) {
			that.handle_request_error(postResp);
			return;
		}
		let data = utils.toJSON(postResp.data.responseText);
		log.info("获取文件的下载链接：", data);
		return data["download_url"] as string;
	}
	/**
	 * 处理请求的错误
	 * @param postResp
	 */
	handle_request_error(postResp: HttpxResponse<any>) {
		log.error(postResp);
		let errData = utils.toJSON(postResp.data.responseText);
		if (errData["message"] == "") {
			Qmsg.error(postResp.msg);
		} else {
			Qmsg.error(errData["message"]);
		}
	}
	/**
	 * 获取用户鉴权值
	 * 来源：localStorage => token.access_token
	 */
	getAuthorization() {
		let token = unsafeWindow.localStorage.getItem("token");
		if (utils.isNotNull(token) && token != null) {
			let tokenJSON = utils.toJSON(token);
			let access_token = tokenJSON["access_token"];
			log.success("获取阿里云盘的access_token：", access_token);
			return access_token as string;
		} else {
			log.error("获取access_token失败，请先登录账号！");
			Qmsg.error("获取access_token失败，请先登录账号！");
		}
	}
	/**
	 * 获取header请求头 X-Share-Token
	 * 来源：localStorage => shareToken.share_token
	 * @param share_id
	 * @param share_pwd
	 */
	async get_X_Share_Token(share_id: string, share_pwd: AccessCodeNonNullType) {
		const that = this;
		if (new Date() < new Date(that.X_Share_Token_Data.expire_time)) {
			return that.X_Share_Token_Data.share_token;
		}
		let postResp = await httpx.post(
			"https://api.aliyundrive.com/v2/share_link/get_share_token",
			{
				data: JSON.stringify({
					share_id: share_id,
					share_pwd: share_pwd,
				}),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
					Origin: "https://www.aliyundrive.com",
					Referer: "https://www.aliyundrive.com/",
					"X-Canary": that.X_Canary,
					"X-Device-Id": that.X_Device_Id,
					"User-Agent": utils.getRandomPCUA(),
				},
				allowInterceptConfig: false,
			}
		);
		if (!postResp.status) {
			that.handle_request_error(postResp);
			return;
		}
		let data = utils.toJSON<any>(postResp.data.responseText);
		that.X_Share_Token_Data = data;
		log.info("获取share_token：", that.X_Share_Token_Data);
		return that.X_Share_Token_Data["share_token"];
	}
	/**
	 * 获取header请求头 X-Device-Id
	 */
	get_X_Device_Id() {
		const that = this;
		for (
			var alipan_device_id_pattern =
					/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
				alipan_s: any[] = [],
				alipan_l = 0;
			alipan_l < 256;
			++alipan_l
		)
			alipan_s.push((alipan_l + 256).toString(16).substr(1));
		function alipan_o() {
			return crypto.getRandomValues(new Uint8Array(16));
		}
		var alipan_c = function (args_e: any) {
				var second_arg =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					devices_id_string = (
						alipan_s[args_e[second_arg + 0]] +
						alipan_s[args_e[second_arg + 1]] +
						alipan_s[args_e[second_arg + 2]] +
						alipan_s[args_e[second_arg + 3]] +
						"-" +
						alipan_s[args_e[second_arg + 4]] +
						alipan_s[args_e[second_arg + 5]] +
						"-" +
						alipan_s[args_e[second_arg + 6]] +
						alipan_s[args_e[second_arg + 7]] +
						"-" +
						alipan_s[args_e[second_arg + 8]] +
						alipan_s[args_e[second_arg + 9]] +
						"-" +
						alipan_s[args_e[second_arg + 10]] +
						alipan_s[args_e[second_arg + 11]] +
						alipan_s[args_e[second_arg + 12]] +
						alipan_s[args_e[second_arg + 13]] +
						alipan_s[args_e[second_arg + 14]] +
						alipan_s[args_e[second_arg + 15]]
					).toLowerCase();
				if (
					!(function (e) {
						return "string" == typeof e && alipan_device_id_pattern.test(e);
					})(devices_id_string)
				)
					throw TypeError("Stringified UUID is invalid");
				return devices_id_string;
			},
			alipan_u = function (args_e?: any, args_t?: any, args_n?: any) {
				var randomValue =
					(args_e = args_e || {}).random || (args_e.rng || alipan_o)();
				if (
					((randomValue[6] = (15 & randomValue[6]) | 64),
					(randomValue[8] = (63 & randomValue[8]) | 128),
					args_t)
				) {
					args_n = args_n || 0;
					for (var i = 0; i < 16; ++i) args_t[args_n + i] = randomValue[i];
					return args_t;
				}
				return alipan_c(randomValue);
			};
		return alipan_u();
	}
}
