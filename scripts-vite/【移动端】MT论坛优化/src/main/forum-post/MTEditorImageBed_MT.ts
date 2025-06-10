import { Panel } from "@components/setting/panel";
import {
	MTEditorImageBed,
	type ImageBedUploadImageReusltInfo,
} from "./MTEditorImageBed";
import Qmsg from "qmsg";
import { $, DOMUtils, httpx, log, utils } from "@/env";
type ImageInfo = {
	id: number;
	pathname: string;
	origin_name: string;
	size: number;
	mimetype: string;
	md5: string;
	sha1: string;
	links: {
		url: string;
		html: string;
		bbcode: string;
		markdown: string;
		markdown_with_link: string;
		thumbnail_url: string;
	};
};
export const MTEditorImageBed_MT = {
	$data: {
		csrf_token: null as any as string | null,
	},
	$config: {
		TAG: "MT图床：",
		base_url: "https://img.binmt.cc",
	},
	$tabConfig: {
		id: "img.binmt.cc",
		name: "MT图床",
		labelName: "mt",
	},
	init() {
		const that = this;
		let drawBed = new MTEditorImageBed({
			id: this.$tabConfig.id,
			name: this.$tabConfig.name,
			labelName: this.$tabConfig.labelName,
			async uploadBtnClickEvent(event) {
				return await that.checkLogin();
			},
			async fileChangeEvent(event, fileList) {
				let uploadList: ImageBedUploadImageReusltInfo<ImageInfo>[] = [];
				let $loading = Qmsg.loading("上传中...");
				let flag = true;
				for (let index = 0; index < Array.from(fileList).length; index++) {
					const file = Array.from(fileList)[index];
					let result = await that.uploadImage(file);
					if (result) {
						uploadList.push({
							url: result.data.links.url,
							data: result.data,
						});
						flag = flag && true;
					} else {
						flag = flag && false;
					}
				}
				$loading.close();
				return {
					success: flag,
					data: uploadList,
				};
			},
			storageSaveCallBack(data) {
				return data.data;
			},
			async delImageEvent(event, data) {
				return true;
			},
		});
	},
	/**
	 * 检测是否登录
	 */
	async checkLogin() {
		if (!this.$data.csrf_token) {
			let $loading = Qmsg.loading("正在获取CSRF Token中...");
			let csrf_token = await this.getCSRFToken();
			$loading.close();
			if (!csrf_token) {
				return false;
			}
			this.$data.csrf_token = csrf_token;
		}
		return true;
	},
	/**
	 * 获取MT图床的CSRF参数
	 */
	async getCSRFToken() {
		let response = await httpx.get(this.$config.base_url, {
			allowInterceptConfig: false,
			headers: {
				"User-Agent": utils.getRandomPCUA(),
				Referer: this.$config.base_url + "/",
				Origin: this.$config.base_url,
			},
		});
		if (!response.status) {
			Qmsg.error(this.$config.TAG + "获取CSRF Token失败，网络异常");
			return;
		}
		let doc = DOMUtils.parseHTML(response.data.responseText, true, true);
		let metaCSRFToken = doc
			.querySelector('meta[name="csrf-token"]')
			?.getAttribute("content");
		if (!metaCSRFToken) {
			return;
		}
		log.info("获取的CSRF token：", metaCSRFToken);
		Qmsg.success(this.$config.TAG + "获取CSRF Token成功");
		return metaCSRFToken;
	},
	/**
	 * 上传图片
	 * @param imageFile
	 */
	async uploadImage(imageFile: File) {
		let formData = new FormData();
		/* 存储策略 */
		formData.append("strategy_id", "2");
		formData.append("file", imageFile);

		let response = await httpx.post(`${this.$config.base_url}/upload`, {
			data: formData,
			headers: {
				Accept: "application/json, text/javascript, */*; q=0.01",
				"User-Agent": utils.getRandomAndroidUA(),
				Origin: this.$config.base_url,
				pragma: "no-cache",
				"Accept-Encoding": "gzip, deflate, br",
				"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
				Referer: this.$config.base_url + "/",
				Pragma: "no-cache",
				"x-csrf-token": this.$data.csrf_token,
				"X-Requested-With": "XMLHttpRequest",
			},
			allowInterceptConfig: false,
		});
		if (!response.status) {
			log.error(response);
			Qmsg.error(this.$config.TAG + "网络异常，上传图片失败");
			return;
		}
		let data = utils.toJSON(response.data.responseText) as {
			status: boolean;
			message: string;
			data: ImageInfo;
		};
		log.info(data);
		if (!data.status) {
			log.error(response);
			Qmsg.error(this.$config.TAG + data.message || JSON.stringify(data));
			return;
		}
		Qmsg.success(this.$config.TAG + "上传成功");
		let file_reader = new FileReader();
		/* FileReader主要用于将文件内容读入内存，通过一系列异步接口，可以在主线程中访问本地文件 */
		file_reader.readAsDataURL(imageFile);
		/* 读取图片的内容生成的base64编码的图 */
		/* 读取完成后，执行该回调函数，它会返回读取的结果result		 */
		return await new Promise<{
			imageUri: string | ArrayBuffer;
			data: ImageInfo;
		}>((resolve) => {
			file_reader.onload = function () {
				/* 此时的图片已经存储到了result中	 */
				let imageUri = this.result;
				let result = {
					imageUri: imageUri!,
					data: data.data,
				};
				resolve(result);
			};
		});
	},
};
