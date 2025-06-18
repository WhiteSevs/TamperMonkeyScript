import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { ParseFileAbstract } from "@/main/parse/NetDiskParseAbstract";
import type {
	HttpxRequestOption,
	HttpxResponse,
} from "@whitesev/utils/dist/types/src/types/Httpx";

type FolderInfo = {
	mtime: number;
	relPath: string;
	size: number;
	tblUri?: string;
	type: "file" | string;
};

export class NetDiskParse_Jianguoyun extends ParseFileAbstract {
	errorCode = {
		UnAuthorized: "请先登录坚果云账号",
	};
	async init(netDiskInfo: ParseFileInitConfig) {
		let { ruleIndex, shareCode, accessCode } = netDiskInfo;
		const that = this;
		let downloadParams = await that.getRequestDownloadParams();
		if (!downloadParams) {
			return;
		}
		if (downloadParams["isdir"]) {
			/* 是文件夹 */
			let Qmsg_loading = Qmsg.loading("正在遍历多文件信息...");
			let folderInfo = await that.getFolderInfo(downloadParams["hash"]);
			if (!folderInfo) {
				Qmsg_loading.close();
				return;
			}
			let newFolderInfoList = that.parseMoreFile(
				folderInfo,
				downloadParams["hash"],
				downloadParams["name"]
			);
			Qmsg_loading.close();

			/* 坚果云盘没有上传时间信息(暂时是这样的) */
			NetDiskUI.staticView.moreFile("坚果云文件解析", newFolderInfoList);
		} else {
			/* 是文件 */
			let fileSize = utils.formatByteToSize(downloadParams["size"]);
			let downloadUrl = await that.getFileLink(
				downloadParams.hash,
				downloadParams.name
			);
			if (!downloadUrl) {
				return;
			}
			if (NetDiskFilterScheme.isForwardDownloadLink("jianguoyun")) {
				downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
					"jianguoyun",
					downloadUrl
				);
			}

			log.info(downloadUrl);
			/* 坚果云盘没有上传时间信息(暂时是这样的) */
			NetDiskUI.staticView.oneFile({
				title: "坚果云盘单文件直链",
				fileName: downloadParams["name"],
				fileSize: fileSize,
				downloadUrl: downloadUrl,
			});
		}
	}
	/**
	 * 解析多文件信息
	 * @param folderInfo
	 * @param hash 文件hash值
	 * @param fileName 文件名
	 */
	parseMoreFile(folderInfo: FolderInfo[], hash = "", fileName = "") {
		const that = this;
		log.info("解析多文件信息", folderInfo);
		let folderInfoList: PopsFolderDataConfig[] = [];
		folderInfo.forEach((item) => {
			let fileName = item.relPath;
			if (fileName.startsWith("/")) {
				fileName = fileName.replace(/^\//, "");
			}
			folderInfoList.push({
				fileName: fileName,
				fileSize: item["size"],
				fileType: "",
				createTime: item.mtime,
				latestTime: item.mtime,
				isFolder: false,
				index: 0,
				async clickEvent() {
					Qmsg.info("正在获取下载链接...");
					let downloadUrl = await that.getDirLink(
						hash,
						fileName,
						item["relPath"]
					);
					if (!downloadUrl) {
						return;
					}
					Qmsg.success("获取成功！");
					if (NetDiskFilterScheme.isForwardDownloadLink("jianguoyun")) {
						downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
							"jianguoyun",
							downloadUrl
						);
					}

					log.info(downloadUrl);
					return {
						autoDownload: true,
						mode: "aBlank",
						url: downloadUrl,
					};
				},
			});
		});
		return folderInfoList;
	}
	/**
	 * 获取下载链接所需要的hash值和name
	 */
	async getRequestDownloadParams() {
		const that = this;
		log.info("获取hash值");
		Qmsg.info("正在获取请求信息");
		let pageInfoRegexp = /var[\s]*PageInfo[\s]*=[\s]*{([\s\S]+)};/i;
		let formData = new FormData();
		formData.append("pd", that.accessCode!);
		let requestDetails: HttpxRequestOption = {
			url: `https://www.jianguoyun.com/p/${that.shareCode}`,
			data: that.accessCode === "" ? void 0 : `pd=${that.accessCode}`,
			responseType: "html",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"User-Agent": utils.getRandomPCUA(),
				Referer: `https://www.jianguoyun.com/p/${that.shareCode}`,
			},
		};
		let requestResp = void 0 as any as HttpxResponse<typeof requestDetails>;
		if (that.accessCode === "") {
			requestResp = await httpx.get(requestDetails);
		} else {
			requestResp = await httpx.post(requestDetails);
		}
		if (!requestResp.status) {
			return;
		}
		let respData = requestResp.data;
		log.info("请求信息");
		log.info(respData);
		let pageInfoMatch = respData.responseText.match(pageInfoRegexp);
		if (pageInfoMatch) {
			let pageInfo = pageInfoMatch[pageInfoMatch.length - 1] as any;
			pageInfo = `({${pageInfo}})`;
			pageInfo = window.eval(pageInfo);
			log.info(pageInfo);
			let fileName = pageInfo["name"];
			let fileSize = pageInfo["size"];
			let fileHash = pageInfo["hash"];
			let fileNeedsPassword = pageInfo["needsPassword"];
			let fileOwner = pageInfo["owner"];
			let isdir = pageInfo["isdir"];
			let fileErrorCode = pageInfo["errorCode"];
			fileName = decodeURIComponent(fileName);
			log.success("是否是文件夹 ===> " + isdir);
			log.success("hash ===> " + fileHash);
			log.success("name ===> " + fileName);
			log.success("size ===> " + fileSize);
			if (
				fileNeedsPassword &&
				(that.accessCode == void 0 || that.accessCode === "")
			) {
				/* 需要密码但没密码 */
				Qmsg.error("密码不正确!");
				NetDiskUI.newAccessCodeView(
					"密码缺失",
					"jianguoyun",
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
				return;
			}
			if (fileErrorCode === "AuthenticationFailed") {
				Qmsg.error("密码错误");
				NetDiskUI.newAccessCodeView(
					void 0,
					"jianguoyun",
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
				return;
			}
			if (fileHash === "" || fileHash == void 0) {
				log.error("hash为空，可能文件被撤销分享了");
				Qmsg.error(`文件分享已被撤销`);
				return;
			}
			if (fileSize == void 0 && isdir == false) {
				log.error("无size，可能文件被删除了");
				Qmsg.error(`“${fileName}”文件已被拥有者（“${fileOwner}”）删除`);
				return;
			} else {
				return {
					name: fileName,
					hash: fileHash,
					size: fileSize,
					needsPassword: fileNeedsPassword,
					owner: fileOwner,
					isdir: isdir,
				};
			}
		} else if (respData.responseText.match("对不起，找不到您指定的文件。")) {
			log.error("啊噢！ (404) 对不起，找不到您指定的文件。");
			Qmsg.error("坚果云: 对不起，找不到您指定的文件。");
		} else if (respData.responseText.match("对不起，您的某些输入不正确。")) {
			log.error("可能该链接不需要访问码或者访问码有问题");
			NetDiskUI.newAccessCodeView(
				void 0,
				"jianguoyun",
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
		} else {
			log.error("获取PageInfo失败");
			Qmsg.error("坚果云: 获取PageInfo失败");
		}
	}
	/**
	 * 获取下载链接
	 * @param fileHash 文件hash值
	 * @param fileName 文件名
	 */
	async getFileLink(fileHash = "", fileName = "") {
		const that = this;
		fileName = encodeURIComponent(fileName);
		let getResp = await httpx.get({
			url: `https://www.jianguoyun.com/d/ajax/fileops/pubFileLink?k=${fileHash}&name=${fileName}&wm=false${
				that.accessCode === "" ? "" : "&pd=" + that.accessCode
			}&forwin=1&_=${new Date().getTime()}`,
			responseType: "json",
			headers: {
				"User-Agent": utils.getRandomPCUA(),
			},
			allowInterceptConfig: false,
		});
		if (!getResp.status) {
			if (utils.isNotNull(getResp.data?.responseText)) {
				let errorData = utils.toJSON(getResp.data.responseText);
				log.error("坚果云", errorData);
				if (errorData["errorCode"] === "UnAuthorized") {
					that.gotoLogin();
				} else {
					Qmsg.error(errorData["detailMsg"]);
				}
			} else {
				Qmsg.error("请求异常");
			}
			return;
		}
		let respData = getResp.data;
		log.info("请求信息", respData);
		let resultJSON = utils.toJSON(respData.responseText);
		log.info("解析JSON", resultJSON);
		if (resultJSON.hasOwnProperty("errorCode")) {
			Qmsg.error("坚果云: " + resultJSON["detailMsg"]);
			return;
		} else if (resultJSON.hasOwnProperty("url")) {
			return <string>resultJSON["url"];
		} else {
			Qmsg.error("坚果云: 处理下载链接异常");
		}
	}
	/**
	 * 获取文件夹下的文件下载链接
	 * @param fileHash
	 * @param fileName
	 * @param filePath
	 */
	async getDirLink(fileHash = "", fileName = "", filePath = "/") {
		const that = this;
		fileName = encodeURIComponent(fileName);
		let getResp = await httpx.get({
			url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRLink?k=${fileHash}&dn=${fileName}&p=${filePath}&forwin=1&_=${new Date().getTime()}`,
			responseType: "json",
			headers: {
				"User-Agent": utils.getRandomPCUA(),
			},
			allowInterceptConfig: false,
		});
		if (!getResp.status) {
			if (utils.isNotNull(getResp.data?.responseText)) {
				let errorData = utils.toJSON(getResp.data.responseText);
				log.error("坚果云", errorData);
				if (errorData["errorCode"] === "UnAuthorized") {
					that.gotoLogin();
				} else {
					Qmsg.error(errorData["detailMsg"]);
				}
			} else {
				Qmsg.error("请求异常");
			}
			return;
		}
		let respData = getResp.data;
		log.info("请求信息", respData);
		let resultJSON = utils.toJSON(respData.responseText);
		log.info(resultJSON);
		if (resultJSON.hasOwnProperty("errorCode")) {
			Qmsg.error("坚果云: " + resultJSON["detailMsg"]);
			return;
		} else if (resultJSON.hasOwnProperty("url")) {
			return <string>resultJSON["url"];
		} else {
			Qmsg.error("坚果云: 处理下载链接异常");
		}
	}
	/**
	 * 获取文件夹信息
	 * @param hash
	 */
	async getFolderInfo(hash = "") {
		let getResp = await httpx.get({
			url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRBrowse?hash=${hash}&relPath=%2F&_=${Date.now()}`,
			responseType: "json",
			headers: {
				"User-Agent": utils.getRandomPCUA(),
			},
		});
		if (!getResp.status) {
			return;
		}
		let respData = getResp.data;
		log.info("请求信息", respData);
		let resultJSON = utils.toJSON(respData.responseText);
		log.info(resultJSON);
		if ("objects" in resultJSON) {
			return <FolderInfo[]>resultJSON["objects"];
		} else {
			Qmsg.error("坚果云: 处理多文件信息异常");
		}
	}
	/**
	 * 前往登录
	 */
	gotoLogin() {
		const that = this;
		NetDiskPops.confirm(
			{
				title: {
					text: "提示",
					position: "center",
				},
				content: {
					text: `解析失败，原因：当前尚未登录坚果云，是否前往登录？`,
				},
				btn: {
					reverse: true,
					position: "end",
					ok: {
						text: "前往",
						callback: function (_event_) {
							window.open(
								"https://www.jianguoyun.com/d/login#from=https%3A%2F%2Fwww.jianguoyun.com%2F",
								"_blank"
							);
						},
					},
				},
			},
			NetDiskUI.popsStyle.jianGuoYunLoginTip
		);
	}
}
