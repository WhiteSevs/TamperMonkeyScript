import { DOMUtils, httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { NetDiskParse } from "./NetDiskParse";
import { GM_getValue } from "ViteGM";
import { NetDiskFilterScheme } from "../scheme/NetDiskFilterScheme";
import { NetDiskUI } from "../ui/NetDiskUI";
import { NetDiskParseObject } from "./NetDiskParseObject";
import { NetDiskLinkClickModeUtils } from "../link-click-mode/NetDiskLinkClickMode";

export const NetDiskParse_Lanzou_Config = {
	/* 蓝奏云默认域名 */
	DEFAULT_HOST_NAME: "www.lanzout.com",
	/** 菜单配置项的键名 */
	MENU_KEY: "lanzou-host-name",
	get hostname() {
		return GM_getValue<string>(this.MENU_KEY, this.DEFAULT_HOST_NAME);
	},
};
/**
 * 蓝奏云
 * 流程：判断是否是多文件
 * 单文件 => 请求https://蓝奏云域名/{shareToken} 判断链接类型和是否能正常获取
 *        => 请求https://蓝奏云域名/ajaxm.php 获取下载参数，下载参数例如：https://蓝奏云文件域名/file/?xxxxxxxxx
 * 多文件 => 先请求https://蓝奏云域名/{shareToken} 获取文件sign => 请求https://蓝奏云域名/filemoreajax.php 获取json格式的文件参数，
 * 参数内容如{"info":"success","text":[{"duan":"xx","icon":"","id":"".....},{},{}]}
 */
export class NetDiskParse_Lanzou extends NetDiskParseObject {
	/**
	 * 路由
	 */
	router = {
		default(pathName = "") {
			if (pathName.startsWith("/")) {
				pathName = pathName.replace(/^\//, "");
			}
			return `https://${NetDiskParse_Lanzou_Config.hostname}/${pathName}`;
		},
		tp(pathName = "") {
			if (pathName.startsWith("/")) {
				pathName = pathName.replace(/^\//, "");
			}
			return `https://${NetDiskParse_Lanzou_Config.hostname}/tp/${pathName}`;
		},
		s(pathName = "") {
			if (pathName.startsWith("/")) {
				pathName = pathName.replace(/^\//, "");
			}
			return `https://${NetDiskParse_Lanzou_Config.hostname}/s/${pathName}`;
		},
	};
	regexp = {
		unicode: {
			/**
			 * 判断该链接是否是中文
			 */
			match: /[%\u4e00-\u9fa5]+/g,
			tip: "中文链接",
			isUnicode: false,
		},
		/**
		 * 蓝奏文件取消分享
		 */
		noFile: {
			match: /div>来晚啦...文件取消分享了<\/div>/g,
			tip: "来晚啦...文件取消分享了",
		},
		/**
		 * 蓝奏文件链接错误
		 */
		noExists: {
			match: /div>文件不存在，或已删除<\/div>/g,
			tip: "文件不存在，或已删除",
		},
		/**
		 * 2023-9-19 蓝奏云修改分享规则，需要vip用户才可以分享 apk、ipa 链接
		 */
		needVipToShare: {
			match: /class="fbox">非会员.+请先开通会员/gi,
			tip: "该链接为非会员用户分享的文件，目前无法下载",
		},
		/**
		 * 蓝奏多文件
		 */
		moreFile: {
			match: /<span id=\"filemore\" onclick=\"more\(\);\">/g,
		},
		/**
		 * 蓝奏设置了密码的单文件请求需要的sign值
		 */
		sign: {
			match: /var[\s]*(posign|postsign|vidksek|skdklds)[\s]*=[\s]*'(.+?)';/,
		},
		/**
		 * 蓝奏文件名
		 */
		fileName: {
			match: /<title>(.*)<\/title>/,
		},
		/**
		 * 蓝奏文件大小
		 */
		fileSize: {
			match: /<span class=\"mtt\">\((.*)\)<\/span>/,
		},
		/**
		 * 蓝奏文件直链host
		 */
		loadDownHost: {
			match: /var[\s]*(vkjxld)[\s]*=[\s]*'(.+?)'/i,
		},
		/**
		 * 蓝奏文件直链
		 */
		loadDown: {
			match:
				/var[\s]*(loaddown|oreferr|spototo|domianload|hyggid)[\s]*=[\s]*'(.+?)'/i,
		},
		/**
		 * 蓝奏云之苹果使用类型的文件
		 */
		appleDown: {
			match: /var[\s]*appitem[\s]*=[\s]*'(.+?)'/i,
		},
		/**
		 * 蓝奏云文件上传时间
		 */
		uploadTime: {
			match: /mt2\"\>时间:<\/span>(.+?)[\s]*<span/i,
		},
	};
	/**
	 * 入口
	 * @param {number} netDiskIndex
	 * @param {string} shareCode
	 * @param {string} accessCode
	 */
	async init(netDiskIndex: number, shareCode: string, accessCode: string) {
		log.info([netDiskIndex, shareCode, accessCode]);
		this.netDiskIndex = netDiskIndex;
		this.shareCode = shareCode;
		this.accessCode = accessCode;
		this.regexp.unicode.isUnicode = Boolean(
			this.shareCode.match(this.regexp.unicode.match)
		);
		if (netDiskIndex === 2) {
			await this.getMoreFile(this.router.s(this.shareCode));
		} else {
			await this.getFileLink();
		}
	}
	/**
	 * 获取文件链接
	 * @param {boolean} getShareCodeByPageAgain
	 * @returns
	 */
	async getFileLink(getShareCodeByPageAgain: boolean = false) {
		const that = this;
		let url = this.router.default(this.shareCode);
		log.info("蓝奏云-获取文件下载链接" + url);
		let getResp = await httpx.get({
			url: url,
			headers: {
				Accept: "*/*",
				"User-Agent": utils.getRandomPCUA(),
				Referer: url,
			},
			allowInterceptConfig: false,
			onerror() {},
		});
		if (!getResp.status) {
			log.error(getResp);
			if (getResp.type === "ontimeout") {
				return;
			}
			if (utils.isNull(getResp.data.responseText)) {
				Qmsg.error("请求异常");
				return;
			}
			if (
				getResp.data.responseText.includes("div>文件不存在，或者已被删除</div>")
			) {
				Qmsg.error("文件不存在，或者已被删除");
			} else {
				Qmsg.error("未知情况");
			}
			return;
		}
		let respData = getResp.data;
		if (respData.readyState !== 4) {
			log.error(respData);
			Qmsg.error("请求失败，请重试");
			return;
		}
		if (respData.responseText == void 0) {
			log.error(respData);
			Qmsg.error("获取网页内容为空");
			return;
		}
		if (!that.checkPageCode(respData)) {
			return;
		}
		if (that.isMoreFile(respData)) {
			await that.getMoreFile();
		} else {
			log.info(respData);
			let pageText = respData.responseText;
			if (getShareCodeByPageAgain) {
				let shareCodeNewMatch = pageText.match(
					/var[\s]*link[\s]*=[\s]*\'tp\/(.+?)\';/i
				)!;
				that.shareCode = shareCodeNewMatch[shareCodeNewMatch.length - 1];
				log.info(`新参数 => ${that.shareCode}`);
			}
			let pageDOM = DOMUtils.parseHTML(pageText, true, true);
			let pageIframeElement =
				pageDOM.querySelector('iframe[class^="ifr"]') ||
				pageDOM.querySelector('iframe[class^="n_downlink"]');
			if (pageIframeElement) {
				let iframeUrl = pageIframeElement.getAttribute("src")!;
				log.error(["该链接需要重新通过iframe地址访问获取信息", iframeUrl]);
				Qmsg.info("正在请求下载信息");
				let fileName =
					pageDOM.querySelector<HTMLElement>("body div.d > div")?.innerText ||
					pageDOM.querySelector<HTMLElement>("#filenajax")?.innerText ||
					pageDOM
						.querySelector("title")
						?.textContent?.replace(/ - 蓝奏云$/i, "")!;
				let fileSize =
					pageText.match(/文件大小：<\/span>(.+?)<br>/i) ||
					pageDOM.querySelector<HTMLElement>(
						"div.n_box div.n_file div.n_filesize"
					)?.innerText ||
					pageDOM.querySelector<HTMLElement>(
						".d2 table tr td .fileinfo:nth-child(1) .fileinforight"
					)?.innerText!;
				let fileUploadTime =
					pageText.match(/上传时间：<\/span>(.+?)<br>/i) ||
					pageDOM.querySelector<HTMLElement>(
						"#file[class=''] .n_file_info span.n_file_infos"
					)?.innerText ||
					pageDOM.querySelector<HTMLElement>(
						".d2 table tr td .fileinfo:nth-child(3) .fileinforight"
					)?.innerText ||
					pageDOM.querySelector<HTMLElement>(
						"#file[class='filter'] .n_file_info span.n_file_infos"
					)?.innerText;
				if (fileSize) {
					if (Array.isArray(fileSize)) {
						fileSize = fileSize[fileSize.length - 1];
					}
					if (typeof fileSize === "string") {
						fileSize = fileSize.replaceAll("大小：", "");
					}
				} else {
					log.error("解析文件大小信息失败");
				}
				if (fileUploadTime) {
					if (Array.isArray(fileUploadTime)) {
						fileUploadTime = fileUploadTime[fileUploadTime.length - 1];
					}
					if (fileUploadTime.toString().toLowerCase().startsWith("android")) {
						log.error("解析出的文件上传时间信息是Android/xxxx开头");
						fileUploadTime = void 0;
					}
				} else {
					log.error("解析文件上传时间信息失败");
				}
				let downloadUrl = await that.getLinkByIframe(iframeUrl, {
					fileName,
					fileSize,
					// @ts-ignore
					fileUploadTime,
				});
				if (downloadUrl) {
					if (NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
						downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
							"lanzou",
							downloadUrl
						);
					}
					NetDiskUI.staticView.oneFile({
						title: "蓝奏云单文件直链",
						fileName: fileName,
						fileSize: fileSize,
						downloadUrl: downloadUrl,
						fileUploadTime: fileUploadTime,
					});
				}
			} else {
				await that.getLink(respData);
			}
		}
	}
	/**
	 * 页面检查，看看是否存在文件失效情况
	 * @param {object} response
	 * @returns {boolean}
	 * + true 未失效
	 * + false 已失效
	 */
	checkPageCode(response: any): boolean {
		const that = this;
		let pageText = response.responseText;
		if (pageText.match(that.regexp.noFile.match)) {
			Qmsg.error(that.regexp.noFile.tip);
			return false;
		}
		if (pageText.match(that.regexp.noExists.match)) {
			Qmsg.error(that.regexp.noExists.tip);
			return false;
		}
		if (pageText.match(that.regexp.needVipToShare.match)) {
			Qmsg.error(that.regexp.needVipToShare.tip);
			return false;
		}
		return true;
	}
	/**
	 * 判断是否是多文件的链接
	 * @param {object} response
	 * @returns {boolean}
	 * + true 多文件
	 * + false 单文件
	 */
	isMoreFile(response: any) {
		const that = this;
		let pageText = response.responseText;
		if (pageText.match(that.regexp.moreFile.match)) {
			log.info("该链接为多文件");
			return true;
		} else {
			log.info("该链接为单文件");
			return false;
		}
	}
	/**
	 * 获取链接
	 * @param {object} response
	 */
	async getLink(response: any) {
		const that = this;
		let pageText = response.responseText;
		if (pageText == void 0) {
			log.error("shareCode错误，重新从页面中获取");
			await that.getFileLink(true);
			return;
		}
		let sign = pageText.match(that.regexp.sign.match);
		let postData_p = "";
		let postData_sign = "";
		let fileName = pageText.match(that.regexp.fileName.match);
		let fileSize =
			pageText.match(that.regexp.fileSize.match) ||
			pageText.match(/<div class="n_filesize">大小：(.+?)<\/div>/i);
		let fileUploadTime =
			pageText.match(that.regexp.uploadTime.match) ||
			pageText.match(/<span class="n_file_infos">(.+?)<\/span>/i);
		if (fileName) {
			fileName = fileName[fileName.length - 1].trim();
		} else {
			fileName = "";
		}
		if (fileSize) {
			fileSize = fileSize[fileSize.length - 1].trim();
		} else {
			fileSize = "";
		}
		if (fileUploadTime) {
			fileUploadTime = fileUploadTime[fileUploadTime.length - 1].trim();
		} else {
			fileUploadTime;
		}
		if (sign) {
			postData_sign = sign[sign.length - 1];
			log.info(`获取Sign: ${postData_sign}`);
			if (utils.isNotNull(that.accessCode)) {
				log.info("传入参数=>有密码");
				postData_p = that.accessCode;
			} else {
				log.info("传入参数=>无密码");
			}
			let postResp = await httpx.post({
				url: that.router.default("ajaxm.php"),
				responseType: "json",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					"User-Agent": utils.getRandomAndroidUA(),
					Referer: that.router.default(that.shareCode),
				},
				data: `action=downprocess&sign=${postData_sign}&p=${postData_p}`,
			});
			if (!postResp.status) {
				return;
			}
			let respData = postResp.data;
			log.info(respData);
			if (respData.readyState === 4) {
				let json_data = utils.toJSON(respData.responseText);
				let downloadUrl = `${json_data["dom"]}/file/${json_data["url"]}`;
				if (
					typeof json_data["url"] === "string" &&
					(json_data["url"].startsWith("http") ||
						json_data["url"].startsWith(json_data["dom"]))
				) {
					/* 有些情况下比如苹果的ipa文件的请求，json_data["url"]就是一个完整的链接 */
					downloadUrl = json_data["url"];
				}
				/* json_data["zt"]表示状态，一般为1 */
				let zt = json_data["zt"];
				/* json_data["inf"]一般是文件名，也可以看作是请求信息提示 */
				if ("密码不正确".indexOf(json_data["inf"]) != -1) {
					Qmsg.error("密码不正确!");
					NetDiskUI.newAccessCodeView(
						void 0,
						"lanzou",
						that.netDiskIndex,
						that.shareCode,
						that.accessCode,
						(userInputAccessCode) => {
							that.init(that.netDiskIndex, that.shareCode, userInputAccessCode);
						}
					);
				} else {
					fileName = json_data["inf"] ? json_data["inf"] : fileName;
					downloadUrl = await NetDiskLinkClickModeUtils.getRedirectFinalUrl(
						downloadUrl,
						utils.getRandomAndroidUA()
					);
					log.info(downloadUrl);

					if (NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
						downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
							"lanzou",
							downloadUrl
						);
					}

					NetDiskUI.staticView.oneFile({
						title: "蓝奏云单文件直链",
						fileName: fileName,
						fileSize: fileSize,
						downloadUrl: downloadUrl,
						fileUploadTime: fileUploadTime,
					});
				}
			} else {
				Qmsg.error("请求失败，请重试");
			}
		} else {
			let loadDownHost = pageText.match(that.regexp.loadDownHost.match);
			let loadDown = pageText.match(that.regexp.loadDown.match);
			let appleDown = pageText.match(that.regexp.appleDown.match);
			if (utils.isNull(loadDown)) {
				loadDown = pageText.match(/var[\s]*(cppat)[\s]*=[\s]*'(.+?)'/i);
			}
			if (utils.isNull(loadDownHost) && appleDown) {
				appleDown = appleDown[appleDown.length - 1];
				loadDownHost = [appleDown];
				loadDown = [""];
				log.success(["多文件-当前链接猜测为苹果的文件", appleDown]);
			}
			if (utils.isNull(loadDownHost)) {
				Qmsg.error("蓝奏云直链：获取sign的域名失败，请反馈开发者", {
					timeout: 3500,
				});
				return;
			}
			if (utils.isNull(loadDown)) {
				Qmsg.error("蓝奏云直链：获取sign失败，请反馈开发者", {
					timeout: 3500,
				});
				return;
			}
			let downloadUrl = `${loadDownHost[loadDownHost.length - 1]}${
				loadDown[loadDown.length - 1]
			}`;
			log.info([fileName, fileSize, downloadUrl]);
			downloadUrl = await NetDiskLinkClickModeUtils.getRedirectFinalUrl(
				downloadUrl,
				utils.getRandomAndroidUA()
			);
			log.info(downloadUrl);
			if (NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
				downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
					"lanzou",
					downloadUrl
				);
			}

			NetDiskUI.staticView.oneFile({
				title: "蓝奏云单文件直链",
				fileName: fileName,
				fileSize: fileSize,
				downloadUrl: downloadUrl,
				fileUploadTime: fileUploadTime,
			});
		}
	}

	/**
	 * 通过iframe的链接来获取单文件直链
	 * @param {string} urlPathName url路径
	 * @param {{
	 * fileName:string,
	 * fileSize:string,
	 * fileUploadTime:string
	 * }} fileInfo 文件信息
	 */
	async getLinkByIframe(
		urlPathName: string,
		fileInfo: {
			fileName: string;
			fileSize: string;
			fileUploadTime: string;
		}
	) {
		const that = this;
		log.info([urlPathName, fileInfo]);
		let iFrameUrl = that.router.default(urlPathName);
		let getResp = await httpx.get({
			url: iFrameUrl,
			headers: {
				Accept:
					"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
				"User-Agent": utils.getRandomPCUA(),
				Referer: that.router.default(that.shareCode),
			},
		});
		if (!getResp.status) {
			return;
		}
		let respData = getResp.data;
		log.info(respData);
		let pageText = respData.responseText;
		let aihidcmsMatch = pageText.match(/var[\s]*aihidcms[\s]*=[\s]*'(.*)';/i);
		let ciucjdsdcMatch = pageText.match(/var[\s]*ciucjdsdc[\s]*=[\s]*'(.*)';/i);
		let ajaxdataMatch = pageText.match(/var[\s]*ajaxdata[\s]*=[\s]*'(.+)';/i);
		let signMatch = pageText.match(/'sign':[\s]*'(.+)',/i);
		let ajaxUrlMatch = pageText.match(/url[\s]*:[\s]*'(.+)'[\s]*,/);
		let ajaxUrl = "ajaxm.php";
		let aihidcms = "";
		let ciucjdsdc = "";
		let ajaxdata = "";
		let sign = "";
		if (ajaxUrlMatch) {
			ajaxUrl = ajaxUrlMatch[ajaxUrlMatch.length - 1];
		} else {
			Qmsg.error("提取ajaxm.php的具体参数失败，使用默认的" + ajaxUrl);
		}
		if (aihidcmsMatch) {
			aihidcms = aihidcmsMatch[aihidcmsMatch.length - 1];
		} else {
			Qmsg.error("ajaxm.php请求参数 websignkey 获取失败");
			return;
		}
		if (ciucjdsdcMatch) {
			ciucjdsdc = ciucjdsdcMatch[ciucjdsdcMatch.length - 1];
		} else {
			Qmsg.error("ajaxm.php请求参数 websign 获取失败");
			return;
		}
		if (ajaxdataMatch) {
			ajaxdata = ajaxdataMatch[ajaxdataMatch.length - 1];
		} else {
			Qmsg.error("ajaxm.php请求参数 signs 获取失败");
			return;
		}
		if (signMatch) {
			sign = signMatch[signMatch.length - 1];
		} else {
			Qmsg.error("ajaxm.php请求参数 sign 获取失败");
			return;
		}

		let postData = {
			action: "downprocess",
			signs: ajaxdata,
			sign: sign,
			websign: ciucjdsdc,
			websignkey: aihidcms,
			ves: 1,
			kd: 1,
		};
		log.success("请求的路径参数：" + ajaxUrlMatch);
		log.success("ajaxm.php的请求参数-> " + postData);
		let postResp = await httpx.post({
			url: that.router.default(ajaxUrl),
			headers: {
				Accept: "application/json, text/javascript, */*",
				"Content-Type": "application/x-www-form-urlencoded",
				Referer: that.router.default(that.shareCode),
				"User-Agent": utils.getRandomPCUA(),
			},
			data: utils.toSearchParamsStr(postData),
		});
		if (!postResp.status) {
			return;
		}
		let postRespData = postResp.data;
		log.info(postRespData);
		let jsonData = utils.toJSON(postRespData.responseText);
		let downloadUrl = `${jsonData["dom"]}/file/${jsonData["url"]}`;
		let zt = jsonData["zt"];
		log.success(["直链", downloadUrl]);
		if ("密码不正确".indexOf(jsonData["inf"]) != -1) {
			Qmsg.error("密码不正确!");
			NetDiskUI.newAccessCodeView(
				void 0,
				"lanzou",
				that.netDiskIndex,
				that.shareCode,
				that.accessCode,
				(userInputAccessCode) => {
					that.init(that.netDiskIndex, that.shareCode, userInputAccessCode);
				}
			);
		} else {
			fileInfo.fileName = utils.isNotNull(jsonData["inf"])
				? jsonData["inf"]
				: fileInfo.fileName;
			downloadUrl = await NetDiskLinkClickModeUtils.getRedirectFinalUrl(
				downloadUrl,
				utils.getRandomAndroidUA()
			);
			log.info(downloadUrl);
			return downloadUrl;
		}
	}
	/**
	 * 多文件获取
	 * @param {string} url 链接
	 */
	async getMoreFile(url?: string) {
		const that = this;
		if (url == null) {
			url = that.router.default(that.shareCode);
		}
		let getResp = await httpx.get({
			url: url,
			headers: {
				Accept: "*/*",
				"User-Agent": utils.getRandomAndroidUA(),
				Referer: url,
			},
		});
		if (!getResp.status) {
			return;
		}
		let respData = getResp.data;
		log.info(respData);
		if (respData.readyState !== 4) {
			Qmsg.error("请求失败，请重试");
			return;
		}
		let pageText: string = respData.responseText;
		let fid = pageText.match(/\'fid\':(.+?),/)![1].replaceAll("'", "");
		let uid = pageText.match(/\'uid\':(.+?),/)![1].replaceAll("'", "");
		let pgs = 1;
		let t_name = pageText.match(/\'t\':(.+?),/)![1];
		let t_rexp = new RegExp(t_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");");
		let t = pageText.match(t_rexp)![2];
		let k_name = pageText.match(/\'k\':(.+?),/)![1];
		let k_rexp = new RegExp(k_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");");
		let k = pageText.match(k_rexp)![2];
		let lx = that.shareCode.match(that.regexp.unicode.match) ? 1 : 2;
		let postData = `lx=${lx}&fid=${fid}&uid=${uid}&pg=${pgs}&rep=0&t=${t}&k=${k}&up=1&ls=1&pwd=${that.accessCode}`;
		log.info(`多文件请求参数：${postData}`);
		let postResp = await httpx.post({
			url: that.router.default("filemoreajax.php"),
			responseType: "json",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
				"User-Agent": utils.getRandomAndroidUA(),
				Referer: url,
			},
			data: postData,
		});
		if (!postResp.status) {
			return;
		}
		let postRespData = postResp.data;
		log.info(postRespData);
		let json_data = utils.toJSON(postRespData.responseText);
		let zt = json_data["zt"];
		let info = json_data["info"];
		if (zt === 4) {
			Qmsg.error(info);
		} else if (zt === 1) {
			let QmsgLoading = Qmsg.loading("获取文件夹成功，解析文件直链中...");
			/* 获取多文件的数组信息 */
			let folder = json_data["text"];
			/**
			 * 弹出内容
			 * @type {import("@whitesev/pops/dist/types/src/components/folder/indexType").PopsFolderDataConfig[]}
			 */
			let folderList = [];
			log.info(`本链接一共${folder.length}个文件`);
			for (let index = 0; index < folder.length; index++) {
				let folderInfo = folder[index];
				let fileShareCode = folderInfo["id"];
				let fileName = folderInfo["name_all"];
				let fileSize = folderInfo["size"];
				let fileType = folderInfo["icon"];
				let uploadTime = folderInfo["time"];
				folderList.push({
					fileName: fileName,
					fileSize: fileSize,
					fileType: fileType,
					createTime: uploadTime,
					latestTime: uploadTime,
					isFolder: false,
					index: 0,
					async clickEvent() {
						let folderDownloadInfo = await that.parseMoreFile(
							fileShareCode,
							fileName,
							fileSize,
							uploadTime
						);
						/* 成功获取下载信息 */
						if (folderDownloadInfo.success) {
							return {
								autoDownload: true,
								mode: "aBlank",
								url: folderDownloadInfo.downloadUrl,
							};
						} else {
							log.error(["获取下载信息失败：", folderDownloadInfo]);
							Qmsg.error(folderDownloadInfo.msg);
						}
					},
				});
			}
			QmsgLoading.close();
			NetDiskUI.staticView.moreFile("蓝奏云文件解析", folderList);
		} else if ("密码不正确".indexOf(info) !== -1) {
			Qmsg.error("密码不正确!");
			NetDiskUI.newAccessCodeView(
				void 0,
				"lanzou",
				that.netDiskIndex,
				that.shareCode,
				that.accessCode,
				(userInputAccessCode) => {
					that.init(that.netDiskIndex, that.shareCode, userInputAccessCode);
				}
			);
		} else if ("没有了".indexOf(info) !== -1) {
			Qmsg.error("没有文件了");
		} else {
			Qmsg.error("未知错误");
		}
	}
	/**
	 * 文件解析并返回html-vip
	 * @param {string} paramShareCode 解析多文件获取的shareCode
	 * @param {string} fileName 文件名
	 * @param {string} fileSize 文件大小
	 * @param {string} fileUploadTime 文件上传时间
	 * @returns {Promise<{
	 * success :boolean,
	 * fileName: string,
	 * fileSize: string,
	 * fileUploadTime: string,
	 * downloadUrl?: string,
	 * msg: string,
	 * }>}
	 */
	async parseMoreFile(
		paramShareCode: string,
		fileName: string,
		fileSize: string,
		fileUploadTime: string
	): Promise<{
		success: boolean;
		fileName: string;
		fileSize: string;
		fileUploadTime: string;
		downloadUrl?: string;
		msg: string;
	}> {
		const that = this;
		/* 根据获取到的json中多文件链接来获取单文件直链 */
		let getResp = await httpx.get({
			url: that.router.default(paramShareCode),
			headers: {
				Accept: "*/*",
				"User-Agent": utils.getRandomPCUA(),
				Referer: that.router.default(that.shareCode),
			},
		});
		log.info(getResp);
		if (!getResp.status) {
			return {
				success: false,
				fileName: fileName,
				fileSize: fileSize,
				fileUploadTime: fileUploadTime,
				msg: `解析失败，${getResp.msg}`,
				downloadUrl: void 0,
			};
		}
		let respData = getResp.data;
		let pageText = respData.responseText;
		let pageDOM = DOMUtils.parseHTML(pageText, true, true);
		let pageIframeElement =
			pageDOM.querySelector('iframe[class^="ifr"]') ||
			pageDOM.querySelector('iframe[class^="n_downlink"]');
		if (!pageIframeElement) {
			return {
				success: false,
				fileName: fileName,
				fileSize: fileSize,
				fileUploadTime: fileUploadTime,
				msg: `解析iframe链接失败`,
				downloadUrl: void 0,
			};
		}
		let iframeUrl = pageIframeElement.getAttribute("src")!;
		log.error(["该链接需要重新通过iframe地址访问获取信息", iframeUrl]);
		Qmsg.info("正在请求下载信息");
		let downloadUrl = await that.getLinkByIframe(iframeUrl, {
			fileName,
			fileSize,
			fileUploadTime,
		});
		if (downloadUrl) {
			if (NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
				downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
					"lanzou",
					downloadUrl
				);
			}
			return {
				success: true,
				fileName: fileName,
				fileSize: fileSize,
				fileUploadTime: fileUploadTime,
				msg: "success",
				downloadUrl: downloadUrl,
			};
		} else {
			return {
				success: false,
				fileName: fileName,
				fileSize: fileSize,
				fileUploadTime: fileUploadTime,
				msg: `获取下载链接失败`,
				downloadUrl: void 0,
			};
		}
	}
}
