import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { NetDiskFilterScheme } from "../scheme/NetDiskFilterScheme";
import { NetDiskUI } from "../ui/NetDiskUI";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { NetDiskParseObject } from "./NetDiskParseObject";
import { NetDiskAuthorization_123pan_Authorization } from "../authorization/NetDiskAuthorization_123pan";

export class NetDiskParse_123pan extends NetDiskParseObject {
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
	async init(netDiskIndex: number, shareCode: string, accessCode: string) {
		const that = this;
		log.info([netDiskIndex, shareCode, accessCode]);
		that.netDiskIndex = netDiskIndex;
		that.shareCode = shareCode;
		that.accessCode = accessCode;
		that.panelList = [];
		that.Authorization = NetDiskAuthorization_123pan_Authorization.get();
		let checkLinkValidityStatus = await that.checkLinkValidity();
		if (!checkLinkValidityStatus) {
			return;
		}
		let infoLists = await that.getFiles();
		if (!infoLists) {
			return;
		}
		if (infoLists.length === 1 && infoLists[0]["Type"] == 0) {
			let fileInfo = infoLists[0];
			if (fileInfo["Status"] == 104) {
				Qmsg.error("文件已失效");
				return;
			}
			let downloadUrl = fileInfo["DownloadUrl"];
			let fileSize = "";
			if (downloadUrl === "") {
				let downloadInfo = await that.getFileDownloadInfo(
					fileInfo["Etag"],
					fileInfo["FileId"],
					fileInfo["S3KeyFlag"],
					that.shareCode,
					fileInfo["Size"]
				);
				if (downloadInfo && downloadInfo["code"] === 0) {
					downloadUrl = downloadInfo["data"]["DownloadURL"];
					if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
						downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
							"_123pan",
							downloadUrl
						);
					}
					// @ts-ignore
					fileSize = utils.formatByteToSize(fileInfo["Size"]);
				} else if (downloadInfo && downloadInfo["code"] === 401) {
					downloadUrl = "javascript:;";
					fileSize = "请登录后下载";
				} else {
					downloadUrl = "javascript:;";
					fileSize = "获取下载链接失败";
				}
			} else {
				if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
					downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
						"_123pan",
						downloadUrl
					);
				}

				// @ts-ignore
				fileSize = utils.formatByteToSize(fileInfo["Size"]);
			}
			let fileUploadTime = new Date(fileInfo["CreateAt"]).getTime();
			let fileLatestTime = new Date(fileInfo["UpdateAt"]).getTime();
			// @ts-ignore
			fileUploadTime = utils.formatTime(fileUploadTime);
			// @ts-ignore
			fileLatestTime = utils.formatTime(fileLatestTime);
			NetDiskUI.staticView.oneFile({
				title: "123盘单文件直链",
				fileName: fileInfo["FileName"],
				fileSize: fileSize,
				downloadUrl: downloadUrl,
				fileUploadTime: fileUploadTime,
				fileLatestTime: fileLatestTime,
			});
		} else {
			Qmsg.info("正在递归文件");
			let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
			let folderInfoList = that.getFolderInfo(infoLists, 0);
			QmsgLoading.close();
			log.info("递归完毕");
			NetDiskUI.staticView.moreFile("123盘文件解析", folderInfoList);
		}
	}
	/**
	 * 校验链接有效性
	 * @returns {boolean}
	 */
	async checkLinkValidity() {
		const that = this;
		Qmsg.info("正在校验链接有效性");
		let url = `https://www.123pan.com/s/${that.shareCode}`;

		let getResp = await httpx.get({
			url: url,
			headers: {
				"User-Agent": utils.getRandomPCUA(),
				Referer: "https://www.123pan.com",
			},
		});
		log.info(getResp);
		if (!getResp.status) {
			return false;
		}
		let respData = getResp.data;
		let g_initialPropsMatch = respData.responseText.match(
			/window.g_initialProps[\s]*=[\s]*\{(.+?)\};/s
		);
		if (g_initialPropsMatch) {
			log.info(g_initialPropsMatch);
			let g_initialProps = utils.toJSON(
				`{${g_initialPropsMatch[g_initialPropsMatch.length - 1]}}`
			);
			log.info(g_initialProps);
			if (g_initialProps.res.code !== 0) {
				Qmsg.error(g_initialProps.res.message);
				return false;
			}
			let HasPwd = g_initialProps.res.data.HasPwd;
			if (HasPwd && (that.accessCode == void 0 || that.accessCode === "")) {
				/* 该链接需要密码但是没有获取到 */
				Qmsg.error("密码缺失!");
				NetDiskUI.newAccessCodeView(
					"密码缺失",
					"_123pan",
					that.netDiskIndex,
					that.shareCode,
					that.accessCode,
					(userInputAccessCode) => {
						that.init(that.netDiskIndex, that.shareCode, userInputAccessCode);
					}
				);
			} else {
				/* 该链接不需要密码 || 该链接需要密码且已获取到 */
				return true;
			}
		} else {
			Qmsg.error("校验链接-获取初始化内容失败");
		}
	}
	/**
	 * 获取文件
	 * @param {number} parentFileId
	 * @returns {Promise<?{
	 * Category: number,
	 * ContentType: string,
	 * CreateAt: number,
	 * DownloadUrl: string,
	 * Etag: string,
	 * FileId: number,
	 * FileName: string,
	 * ParentFileId: number,
	 * PunishFlag: number,
	 * S3KeyFlag: number,
	 * Size: number,
	 * Status: number,
	 * StorageNode: string,
	 * Type: 0|1,
	 * UpdateAt: string,
	 * }[]>}
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
		let url = `https://www.123pan.com/b/api/share/get?${utils.toSearchParamsStr(
			getData
		)}`;
		let getResp = await httpx.get({
			url: url,
			headers: {
				Accept: "*/*",
				"User-Agent": utils.getRandomPCUA(),
				Referer: `https://www.123pan.com/s/${that.shareCode}`,
			},
		});
		log.info(getResp);
		if (!getResp.status) {
			return;
		}
		let respData = getResp.data;
		let json_data = utils.toJSON(respData.responseText);
		if (json_data["code"] === 0) {
			let infoList = json_data["data"]["InfoList"];
			return infoList;
		} else if (json_data["code"] === 5103) {
			NetDiskUI.newAccessCodeView(
				void 0,
				"_123pan",
				that.netDiskIndex,
				that.shareCode,
				that.accessCode,
				(userInputAccessCode) => {
					that.init(that.netDiskIndex, that.shareCode, userInputAccessCode);
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
	 * @param {string} parentFileId
	 * @returns {Promise<?{
	 * Category: number,
	 * ContentType: string,
	 * CreateAt: number,
	 * DownloadUrl: string,
	 * Etag: string,
	 * FileId: number,
	 * FileName: string,
	 * ParentFileId: number,
	 * PunishFlag: number,
	 * S3KeyFlag: number,
	 * Size: number,
	 * Status: number,
	 * StorageNode: string,
	 * Type: 0|1,
	 * UpdateAt: string,
	 * }[]>}
	 */
	async getFilesByRec(parentFileId: string) {
		const that = this;
		let getResp = await httpx.get({
			url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`,
			headers: {
				Accept: "*/*",
				"User-Agent": utils.getRandomAndroidUA(),
				Referer: `https://www.123pan.com/s/${that.shareCode}`,
			},
		});
		if (!getResp.status) {
			return;
		}
		let respData = getResp.data;
		log.info(respData);
		let jsonData = utils.toJSON(respData.responseText);
		if (jsonData["code"] == 0) {
			return jsonData["data"]["InfoList"];
		}
	}
	/**
	 * 获取文件夹信息
	 * @param {{
	 * Category: number,
	 * ContentType: string,
	 * CreateAt: number,
	 * DownloadUrl: string,
	 * Etag: string,
	 * FileId: number,
	 * FileName: string,
	 * ParentFileId: number,
	 * PunishFlag: number,
	 * S3KeyFlag: number,
	 * Size: number,
	 * Status: number,
	 * StorageNode: string,
	 * Type: 0|1,
	 * UpdateAt: string,
	 * }[]} infoList
	 * @returns {Promise<{
	 * fileName: string,
	 * fileSize: string|number,
	 * fileType: ?string,
	 * createTime: ?string,
	 * latestTime: ?string,
	 * isFolder: boolean,
	 * index: ?number,
	 * clickCallBack: ?(event:Event,_config_: object)=>{}
	 * }[]>}
	 */
	getFolderInfo(infoList: any, index: number) {
		const that = this;
		let folderInfoList: PopsFolderDataConfig[] = [];
		let tempFolderInfoList: PopsFolderDataConfig[] = [];
		/**
		 * @type {PopsFolderDataConfig[]}
		 */
		let tempFolderFileInfoList: PopsFolderDataConfig[] = [];
		infoList.forEach((item: any) => {
			if (item.Type) {
				/* 文件夹 */
				tempFolderInfoList.push({
					fileName: item.FileName,
					fileSize: 0,
					fileType: "",
					createTime: new Date(item.CreateAt).getTime(),
					latestTime: new Date(item.UpdateAt).getTime(),
					isFolder: true,
					index: index,
					async clickEvent() {
						let resultFileInfoList = await that.getFilesByRec(item["FileId"]);
						if (resultFileInfoList) {
							return that.getFolderInfo(resultFileInfoList, index + 1);
						} else {
							return [];
						}
					},
				});
			} else {
				/* 文件 */
				tempFolderFileInfoList.push({
					fileName: item.FileName,
					fileSize: item.Size,
					fileType: "",
					createTime: new Date(item.CreateAt).getTime(),
					latestTime: new Date(item.UpdateAt).getTime(),
					isFolder: false,
					index: index,
					async clickEvent() {
						if (item.Status == 104) {
							Qmsg.error("文件已失效");
						} else if (!Boolean(item.DownloadUrl)) {
							let downloadInfo = await that.getFileDownloadInfo(
								item["Etag"],
								item["FileId"],
								item["S3KeyFlag"],
								that.shareCode,
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
								Qmsg.error("获取下载链接失败");
							}
						} else {
							let downloadUrl = item.DownloadUrl;
							if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
								downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
									"_123pan",
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
		tempFolderInfoList.sort((a, b) =>
			a["fileName"].localeCompare(b["fileName"])
		);
		tempFolderFileInfoList.sort((a, b) =>
			a["fileName"].localeCompare(b["fileName"])
		);
		folderInfoList = folderInfoList.concat(tempFolderInfoList);
		folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
		return folderInfoList;
	}
	/**
	 * 获取单文件下载链接
	 * 123云盘新增了下载验证
	 * @param {string} Etag
	 * @param {string} FileID
	 * @param {string} S3keyFlag
	 * @param {string} ShareKey
	 * @param {string} Size
	 * @returns
	 */
	async getFileDownloadInfo(
		Etag: string,
		FileID: string,
		S3keyFlag: string,
		ShareKey: string,
		Size: string
	) {
		const that = this;
		let authK_V = that.getFileDownloadAuth();
		let headers = {
			"App-Version": "3",
			Platform: "web",
			"Content-Type": "application/json;charset=UTF-8",
			Host: "www.123pan.com",
			Accept: "*/*",
			"User-Agent": utils.getRandomPCUA(),
			Referer: "https://www.123pan.com/s/" + ShareKey,
			Origin: "https://www.123pan.com",
		};
		if (that.Authorization) {
			Reflect.set(headers, "Authorization", "Bearer " + that.Authorization);
		}
		log.success("获取下载链接加密参数：" + authK_V);
		let postResp = await httpx.post({
			url: `https://www.123pan.com/a/api/share/download/info?${authK_V[0]}=${authK_V[1]}`,
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
			jsonData["data"]["DownloadURL"] = await that.decodeDownloadUrl(
				jsonData["data"]["DownloadURL"]
			);
			return jsonData;
		} else {
			return {
				code: jsonData["code"],
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
				param_other =
					arguments["length"] > 0x2 && void 0x0 !== arguments[0x2]
						? arguments[0x2]
						: 0x8;
			if (0x0 === arguments["length"]) return void 0;
			"object" === typeof param
				? (param_time = param)
				: (0xa === ("" + param)["length"] && (param = 0x3e8 * parseInt(param)),
				  (param_time = new Date(param)));
			var param_timezoneoffset =
					param + 0xea60 * new Date(param)["getTimezoneOffset"](),
				param_time_n = param_timezoneoffset + 0x36ee80 * param_other;
			return (
				(param_time = new Date(param_time_n)),
				{
					y: param_time["getFullYear"](),
					m:
						param_time["getMonth"]() + 0x1 < 0xa
							? "0" + (param_time["getMonth"]() + 0x1)
							: param_time["getMonth"]() + 0x1,
					d:
						param_time["getDate"]() < 0xa
							? "0" + param_time["getDate"]()
							: param_time["getDate"](),
					h:
						param_time["getHours"]() < 0xa
							? "0" + param_time["getHours"]()
							: param_time["getHours"](),
					f:
						param_time["getMinutes"]() < 0xa
							? "0" + param_time["getMinutes"]()
							: param_time["getMinutes"](),
				}
			);
		}

		function encry_join(param: any) {
			for (
				var a =
						arguments["length"] > 0x1 && void 0x0 !== arguments[0x1]
							? arguments[0x1]
							: 0xa,
					funcRun = function () {
						for (var b, c = [], d = 0x0; d < 0x100; d++) {
							b = d;
							for (var index = 0x0; index < 0x8; index++)
								b = 0x1 & b ? 0xedb88320 ^ (b >>> 0x1) : b >>> 0x1;
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
				_param_1 =
					(_param_1 >>> 0x8) ^
					_funcRun_[0xff & (_param_1 ^ _param.charCodeAt(_param_0))];
			return (_param_1 = (-0x1 ^ _param_1) >>> 0x0), _param_1.toString(a);
		}

		function getSign(urlPath: any) {
			var param_web = "web";
			var param_type = 3;
			var param_time = Math.round(
				(new Date().getTime() +
					0x3c * new Date().getTimezoneOffset() * 0x3e8 +
					28800000) /
					0x3e8
			).toString();
			var key = "a,d,e,f,g,h,l,m,y,i,j,n,o,p,k,q,r,s,t,u,b,c,v,w,s,z";
			var randomRoundNum = Math["round"](0x989680 * Math["random"]());

			var number_split;
			var time_a;
			var time_y;
			var time_m;
			var time_d;
			var time_h;
			var time_f;
			var time_array;
			// @ts-ignore
			var time_push: any[];
			// @ts-ignore
			// @ts-ignore
			// @ts-ignore
			// @ts-ignore
			// @ts-ignore
			// @ts-ignore
			for (var number_item in ((number_split = key.split(",")),
			(time_a = encry_time(param_time)),
			// @ts-ignore
			(time_y = time_a["y"]),
			// @ts-ignore
			(time_m = time_a["m"]),
			// @ts-ignore
			(time_d = time_a["d"]),
			// @ts-ignore
			(time_h = time_a["h"]),
			// @ts-ignore
			(time_f = time_a["f"]),
			(time_array = [time_y, time_m, time_d, time_h, time_f].join("")),
			(time_push = []),
			time_array))
				time_push["push"](number_split[Number(time_array[number_item])]);
			var param_no;
			var param_join_s;
			return (
				// @ts-ignore
				(param_no = encry_join(time_push["join"](""))),
				(param_join_s = encry_join(
					""
						["concat"](param_time, "|")
						[
							// @ts-ignore
							"concat"
							// @ts-ignore
						](randomRoundNum, "|")
						["concat"](urlPath, "|")
						["concat"](param_web, "|")
						[
							// @ts-ignore
							"concat"
							// @ts-ignore
						](param_type, "|")
						["concat"](param_no)
				)),
				[
					param_no,
					""
						["concat"](param_time, "-")
						[
							// @ts-ignore
							"concat"
							// @ts-ignore
						](randomRoundNum, "-")
						["concat"](param_join_s),
				]
			);
		}
		return getSign("/a/api/share/download/info");
	}
	/**
	 * 将直链的param参数解析成真正的直链
	 * @param {string} url
	 */
	async decodeDownloadUrl(url: string) {
		const that = this;
		if (url === "") {
			return "";
		}
		let decodeURL = new URL(url);
		let params = decodeURL.search.replace(/^\?params=/gi, "");
		params = params.split("&")[0];
		try {
			let newDecodeUrl = decodeURI(atob(params));
			log.info("正在获取重定向直链");
			Qmsg.info("正在获取重定向直链");
			let getResp = await httpx.get({
				url: newDecodeUrl,
				responseType: "json",
				headers: {
					"User-Agent": utils.getRandomAndroidUA(),
					Referer: "https://www.123pan.com/s/" + that.shareCode,
					Origin: "https://www.123pan.com",
				},
				allowInterceptConfig: false,
				onerror: function () {},
			});
			log.info(getResp);
			// @ts-ignore
			if (!getResp.status && getResp.data.status !== 210) {
				/* 很奇怪，123盘返回的状态码是210 */
				// 这里还会有另一种情况，请求失败时，getResp.data内是数组[response]，status不存在！！
				// 先转为URL对象看看auto_redirect是否存在，存在就设置1自动重定向
				let parseUrl = new URL(newDecodeUrl);
				if (parseUrl.searchParams.has("auto_redirect")) {
					parseUrl.searchParams.set("auto_redirect", "1");
					return parseUrl.toString();
				}
				return newDecodeUrl;
			}
			let respData = getResp.data;
			let resultJSON = utils.toJSON(respData.responseText);
			let newURL = new URL(resultJSON.data.redirect_url);
			newURL.searchParams.set("auto_redirect", "1");
			log.success(resultJSON);
			return newURL.toString();
		} catch (error) {
			log.error(error);
			return url;
		}
	}
}
