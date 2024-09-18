import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { NetDiskUI } from "../ui/NetDiskUI";
import { GM_download } from "ViteGM";
import { NetDiskPops } from "../pops/NetDiskPops";
import { PopsFolderDataConfig } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { NetDiskFilterScheme } from "../scheme/NetDiskFilterScheme";
import { NetDiskParseObject } from "./NetDiskParseObject";

export class NetDiskParse_UC extends NetDiskParseObject {
	/**
	 * 入口
	 * @param {number} netDiskIndex 网盘名称索引下标
	 * @param {string} shareCode
	 * @param {string} accessCode
	 * @returns
	 */
	async init(netDiskIndex: number, shareCode: string, accessCode: string) {
		const that = this;
		log.info([netDiskIndex, shareCode, accessCode]);
		that.netDiskIndex = netDiskIndex;
		that.shareCode = shareCode;
		that.accessCode = accessCode;
		Qmsg.info("检查是否已登录UC网盘");
		let loginStatus = await that.isLogin();
		if (!Boolean(loginStatus)) {
			that.gotoLogin(
				"检测到尚未登录UC网盘，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC才有登录选项)"
			);
			return;
		}
		let stoken = await that.getStoken(that.shareCode, that.accessCode);
		if (!stoken) {
			return;
		}
		let detail = await that.getDetail(that.shareCode, that.accessCode, stoken);
		if (!detail) {
			Qmsg.error("UC网盘：获取detail失败");
			return;
		}
		if (
			detail.length === 1 &&
			detail[0].dir == false &&
			detail[0].file_type === 1
		) {
			let oneFileDetail = detail[0];
			let oneFileDownloadDetail = await that.getDownload(
				that.shareCode,
				stoken,
				oneFileDetail.fid,
				oneFileDetail.share_fid_token
			);
			if (!oneFileDownloadDetail) {
				return;
			}
			if (!oneFileDownloadDetail[0].download_url) {
				Qmsg.error("获取download_url失败");
				return;
			}
			NetDiskUI.staticView.oneFile({
				title: "UC网盘单文件直链",
				fileName: oneFileDownloadDetail[0].file_name,
				fileSize: utils.formatByteToSize(oneFileDownloadDetail[0].size),
				downloadUrl: oneFileDownloadDetail[0].download_url,
				fileUploadTime: utils.formatTime(oneFileDownloadDetail[0].created_at),
				fileLatestTime: utils.formatTime(
					oneFileDownloadDetail[0].last_update_at
				),
				clickCallBack() {
					that.downloadFile(
						oneFileDownloadDetail[0].file_name,
						oneFileDownloadDetail[0].download_url
					);
				},
			});
		} else {
			Qmsg.info("正在递归文件");
			let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
			let folderInfoList = that.getFolderInfo(detail, stoken, 0);
			QmsgLoading.close();
			log.info("递归完毕");
			NetDiskUI.staticView.moreFile("UC网盘文件解析", folderInfoList);
			return;
		}
	}
	/**
	 * 判断是否已登录UC网盘
	 * @returns {Promise<?(string|boolean)>}
	 */
	async isLogin() {
		const that = this;
		let getResp = await httpx.get("https://drive.uc.cn/", {
			headers: {
				"User-Agent": utils.getRandomPCUA(),
			},
		});
		log.success(["判断是否已登录UC网盘", getResp]);
		if (!getResp.status) {
			return;
		}
		if (getResp.data.finalUrl === "https://drive.uc.cn/list") {
			return "已登录";
		} else {
			return false;
		}
	}
	/**
	 * 下载文件
	 * @param {string} fileName 文件名
	 * @param {string} downloadUrl 下载链接
	 * @return { {
	 * abort: Function
	 * } }
	 */
	downloadFile(fileName: string, downloadUrl: string) {
		log.info([`调用【GM_download】下载：`, arguments]);
		Qmsg.info(`调用【GM_download】下载：${fileName}`);
		if (typeof GM_download === "undefined") {
			Qmsg.error("当前脚本环境缺失API 【GM_download】");
			return;
		}
		let downloadingQmsg = Qmsg.loading("下载中...");
		let isDownloadEnd = false;
		return GM_download({
			url: downloadUrl,
			name: fileName,
			headers: {
				Referer: "https://drive.uc.cn/",
			},
			onload() {
				downloadingQmsg.close();
				Qmsg.success(`下载 ${fileName} 已完成`);
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
				log.error(["下载失败error👉", error]);
				if (typeof error === "object" && error["error"]) {
					Qmsg.error(`下载 ${fileName} 失败或已取消 原因：${error["error"]}`, {
						timeout: 6000,
					});
				} else {
					Qmsg.error(`下载 ${fileName} 失败或已取消`);
				}
			},
			ontimeout() {
				downloadingQmsg.close();
				Qmsg.error(`下载 ${fileName} 请求超时`);
			},
		});
	}
	/**
	 * 前往登录
	 * @param {string} text 弹窗的显示的内容
	 */
	gotoLogin(text = "") {
		const that = this;
		NetDiskPops.confirm(
			{
				title: {
					position: "center",
					text: "UC网盘",
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
							window.open("https://drive.uc.cn", "_blank");
						},
					},
				},
			},
			NetDiskUI.popsStyle.tianYiYunLoginTip
		);
	}
	/**
	 * 获取stoken
	 * @param {string} pwd_id 分享码
	 * @param {string} passcode 访问码
	 * @returns {Promise<?string>}
	 */
	async getStoken(pwd_id: string, passcode: string) {
		const that = this;
		let postResp = await httpx.post(
			"https://pc-api.uc.cn/1/clouddrive/share/sharepage/token?entry=ft&fr=pc&pr=UCBrowser",
			{
				data: JSON.stringify({
					share_for_transfer: true,
					passcode: passcode,
					pwd_id: pwd_id,
				}),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json;charset=UTF-8",
					"User-Agent": utils.getRandomPCUA(),
					Origin: "https://drive.uc.cn",
					Referer: "https://drive.uc.cn/",
				},
				allowInterceptConfig: false,
				onerror() {},
			}
		);
		if (!postResp.status) {
			let errorData = utils.toJSON(postResp.data.responseText);
			log.error(["获取stoken失败JSON信息", errorData]);
			if ("message" in errorData) {
				Qmsg.error(errorData["message"]);
			} else {
				Qmsg.error("请求异常，获取stoken失败");
			}
			return;
		}
		let data = utils.toJSON(postResp.data.responseText);
		log.info(["获取stoken：", data]);
		if (data["code"] !== 0) {
			log.error(["获取stoken失败", data]);
			Qmsg.error("获取stoken失败");
			return;
		}
		return data["data"]["stoken"];
	}

	/**
	 * 获取stoken
	 * @param {string} pwd_id 分享码
	 * @param {string} passcode 访问码
	 * @param {string} stoken 获取的stoken
	 * @param {string} [pdir_fid=0] 父fid，默认为0，如果为文件夹，那么它的fid就是这个值
	 * @param {number} [force=0]
	 * @param {number} [_page=1]
	 * @param {number} [_size=50]
	 * @param {number} [_fetch_banner=0]
	 * @param {number} [_fetch_share=0]
	 * @param {number} [_fetch_total=1]
	 */
	async getDetail(
		pwd_id: string,
		passcode: string,
		stoken: string,
		pdir_fid = 0,
		force = 0,
		_page = 1,
		_size = 50,
		_fetch_banner = 0,
		_fetch_share = 0,
		_fetch_total = 1
	): Promise<any> {
		const that = this;
		let getResp = await httpx.get(
			`https://pc-api.uc.cn/1/clouddrive/transfer_share/detail?pr=UCBrowser&fr=h5&pwd_id=${pwd_id}&__t=${new Date().getTime()}&passcode=${passcode}&stoken=${encodeURIComponent(
				stoken
			)}&pdir_fid=${pdir_fid}&force=${force}&_page=${_page}&_size=${_size}&_fetch_banner=${_fetch_banner}&_fetch_share=${_fetch_share}&_fetch_total=${_fetch_total}&_sort=${encodeURIComponent(
				"file_type:asc,file_name:asc"
			)}`,
			{
				headers: {
					Accept: "application/json, text/plain, */*",
					"User-Agent": utils.getRandomPCUA(),
					Origin: "https://drive.uc.cn",
					Referer: "https://drive.uc.cn/",
				},
			}
		);
		if (!getResp.status) {
			return;
		}
		let data = utils.toJSON(getResp.data.responseText);
		log.info(["获取detail：", data]);
		if (data["code"] !== 0) {
			log.error(["获取detail失败", data]);
			Qmsg.error("获取detail失败");
			return;
		}
		let metadata = data["metadata"];
		if (
			metadata &&
			metadata["_total"] &&
			metadata["_total"] > metadata["_size"]
		) {
			// 文件的总数量超过默认的值
			return await this.getDetail(
				pwd_id,
				passcode,
				stoken,
				pdir_fid,
				force,
				_page,
				metadata["_total"],
				_fetch_banner,
				_fetch_share,
				_fetch_total
			);
		}
		return data["data"]["list"];
	}
	/**
	 * 获取下载信息
	 * @param {string} pwd_id 分享码
	 * @param {string} stoken 获取的stoken
	 * @param {string} fids 通过获取到的detail获取到的fid
	 * @param {string} share_fid_token 通过获取到的detail获取到的share_fid_token
	 * @returns {Promise< ?{
	 * backup_sign: number,
	 * backup_source: boolean,
	 * ban: boolean,
	 * big_thumbnail: string,
	 * category: number,
	 * created_at: number,
	 * creator_ucid_or_default: string,
	 * cur_version_or_default: number,
	 * dir: boolean,
	 * download_url: string,
	 * duration: number,
	 * event_extra: {
	 *    recent_created_at: number
	 * },
	 * extra: string,
	 * fid: string,
	 * file: boolean,
	 * file_name: string,
	 * file_name_hl_end: number,
	 * file_name_hl_start: number,
	 * file_source: string,
	 * file_type: number,
	 * format_type: string,
	 * l_created_at: number,
	 * l_updated_at: number,
	 * last_update_at: number,
	 * like: number,
	 * md5: string,
	 * name_space: number,
	 * obj_category: string,
	 * offline_source: boolean,
	 * operated_at: number,
	 * owner_drive_type_or_default: number,
	 * owner_ucid: string,
	 * pdir_fid: string,
	 * preview_url: string,
	 * range_size: number,
	 * raw_name_space: number,
	 * risk_type: number,
	 * save_as_source: boolean,
	 * share_fid_token: string,
	 * size: number,
	 * status: number,
	 * thumbnail: string,
	 * updated_at: number,
	 * video_height: number,
	 * video_max_resolution: string,
	 * video_width: number,
	 * _extra: {},
	 * } []>}
	 */
	async getDownload(
		pwd_id: string,
		stoken: string,
		fid: string,
		share_fid_token: string
	) {
		const that = this;
		let postResp = await httpx.post(
			"https://pc-api.uc.cn/1/clouddrive/file/download?entry=ft&fr=pc&pr=UCBrowser",
			{
				data: JSON.stringify({
					fids: [fid],
					pwd_id: pwd_id,
					stoken: stoken,
					fids_token: [share_fid_token],
				}),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json;charset=UTF-8",
					"User-Agent": utils.getRandomPCUA(),
					Origin: "https://drive.uc.cn",
					Referer: "https://drive.uc.cn/",
				},
			}
		);
		if (!postResp.status) {
			return;
		}
		let data = utils.toJSON(postResp.data.responseText);
		log.info(["获取download：", data]);
		if (data["code"] !== 0) {
			log.error(["获取download失败", data]);
			Qmsg.error("获取download失败");
			return;
		}
		if (data["data"].length === 0) {
			log.error(["获取download detail失败", data]);
			Qmsg.error("获取download detail失败失败");
			return;
		}
		return data["data"];
	}

	/**
	 * 获取文件夹信息
	 * @param {{
	 * backup_sign: number,
	 * backup_source: boolean,
	 * ban: boolean,
	 * category: number,
	 * created_at: number,
	 * creator_ucid_or_default: string,
	 * cur_version_or_default: number,
	 * dir: boolean,
	 * duration: number,
	 * event_extra: {
	 *    recent_created_at: number
	 * },
	 * extra: string,
	 * fid: string,
	 * file: boolean,
	 * file_name: string,
	 * file_name_hl_end: number,
	 * file_name_hl_start: number,
	 * file_source: string,
	 * file_struct: {
	 *    fir_source: string,
	 *    platform_source: string,
	 *    sec_source: string,
	 *    thi_source: string,
	 *    upload_dm: string,
	 *    upload_mi: string,
	 * },
	 * file_type: number,
	 * format_type: string,
	 * include_items:  number,
	 * l_created_at:  number,
	 * l_updated_at:  number,
	 * last_update_at:  number,
	 * like:  number,
	 * name_space:  number,
	 * offline_source: boolean,
	 * operated_at:  number,
	 * owner_drive_type_or_default:  number,
	 * owner_ucid: string,
	 * pdir_fid: string,
	 * raw_name_space:  number,
	 * risk_type:  number,
	 * save_as_source: boolean,
	 * share_fid_token: string,
	 * size:  number,
	 * status:  number,
	 * tags: string,
	 * updated_at:  number,
	 * _extra: {},
	 * }[]} infoList
	 * @return {Promise<{
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
	getFolderInfo(infoList: any, stoken: string, index = 0) {
		const that = this;
		let folderInfoList: PopsFolderDataConfig[] = [];
		let tempFolderInfoList: PopsFolderDataConfig[] = [];
		/**
		 * @type {PopsFolderDataConfig[]}
		 */
		let tempFolderFileInfoList: PopsFolderDataConfig[] = [];
		infoList.forEach((item: any) => {
			if (item.dir == false && item.file_type === 1) {
				/* 文件 */
				tempFolderFileInfoList.push({
					fileName: item.file_name,
					fileSize: item.size,
					fileType: "",
					createTime: item.created_at,
					latestTime: item.updated_at,
					isFolder: false,
					index: index,
					async clickEvent() {
						let fileDownloadUrl = await that.getDownload(
							that.shareCode,
							stoken,
							item.fid,
							item.share_fid_token
						);
						if (fileDownloadUrl) {
							if (fileDownloadUrl.length) {
								fileDownloadUrl = fileDownloadUrl[0].download_url;
							} else {
								fileDownloadUrl = "";
							}
						} else {
							fileDownloadUrl = "";
						}
						if (item.ban) {
							Qmsg.error("文件已被禁止下载");
						} else {
							let schemeDownloadUrl = fileDownloadUrl;
							if (NetDiskFilterScheme.isForwardDownloadLink("uc")) {
								schemeDownloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
									"uc",
									schemeDownloadUrl
								);
							}
							/* 如果已被scheme过滤，那么不进行GM_download下载 */
							if (schemeDownloadUrl === fileDownloadUrl) {
								that.downloadFile(item.file_name, fileDownloadUrl);
							} else {
								return {
									autoDownload: true,
									mode: "aBlank",
									url: fileDownloadUrl,
								};
							}
						}
					},
				});
			} else {
				/* 文件夹 */
				tempFolderInfoList.push({
					fileName: item.file_name,
					fileSize: item.size,
					fileType: "",
					createTime: item.created_at,
					latestTime: item.updated_at,
					isFolder: true,
					index: index,
					async clickEvent() {
						if (item.include_items === 0) {
							/* 里面没有文件 */
							log.success("里面没有文件");
							return [];
						}
						let newDetail = await that.getDetail(
							that.shareCode,
							that.accessCode,
							stoken,
							item.fid
						);
						if (newDetail) {
							return that.getFolderInfo(newDetail, stoken, index + 1);
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
		log.info(["getFilesInfoByRec", folderInfoList]);
		return folderInfoList;
	}
}
