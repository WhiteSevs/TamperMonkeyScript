import { Panel } from "@components/setting/panel";
import {
	MTEditorImageBed,
	type ImageBedUploadImageReusltInfo,
} from "./MTEditorImageBed";
import Qmsg from "qmsg";
import { httpx, log, utils } from "@/env";
type ImageInfo = {
	key: string;
	name: string;
	pathname: string;
	origin_name: string;
	size: string;
	mimetype: string;
	extension: string;
	md5: string;
	sha1: string;
	links: {
		url: string;
		html: string;
		bbcode: string;
		markdown: string;
		markdown_with_link: string;
		thumbnail_url: string;
		delete_url: string;
	};
};
export const MTEditorImageBed_Hello = {
	$data: {
		get account() {
			return Panel.getValue("mt-image-bed-hello-account");
		},
		get password() {
			return Panel.getValue("mt-image-bed-hello-password");
		},
		get token() {
			return Panel.getValue("mt-image-bed-hello-token");
		},
	},
	$code: {
		401: "未登录或授权失败",
		403: "管理员关闭了接口功能或没有该接口权限",
		429: "超出请求配额，请求受限",
		500: "服务端出现异常",
	},
	$config: {
		base_url: "https://www.helloimg.com/api/v1",

		TAG: "Hello图床：",
	},
	$tabConfig: {
		id: "www.helloimg.com",
		name: "Hello图床",
		labelName: "hello",
	},
	init() {
		const that = this;
		let helloDrawBed = new MTEditorImageBed({
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
				let isLogin = await that.checkLogin();
				if (isLogin) {
					let $loading = Qmsg.loading("正在删除图片...");
					let deleteResult = (await that.deleteImage(data.data.key)) ?? false;
					$loading.close();
					return deleteResult;
				} else {
					return false;
				}
			},
		});
	},
	/**
	 * 检测是否登录
	 */
	async checkLogin() {
		if (!this.$data.account) {
			Qmsg.error(`${this.$config.TAG}请先配置账号`);
			return false;
		}
		if (!this.$data.password) {
			Qmsg.error(`${this.$config.TAG}请先配置密码`);
			return false;
		}
		if (!this.$data.token) {
			Qmsg.error(`${this.$config.TAG}请先配置token`);
			return false;
		}
		return true;
	},
	/**
	 * 上传图片
	 * @param imageFile
	 */
	async uploadImage(imageFile: File) {
		let formData = new FormData();
		formData.append("file", imageFile);
		formData.append("permission", "0");
		formData.append("strategy_id", "0");
		formData.append("album_id", "0");

		let response = await httpx.post(`${this.$config.base_url}/upload`, {
			data: formData,
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${this.$data.token}`,
				"User-Agent": utils.getRandomPCUA(),
				Referer: `${this.$config.base_url}/`,
				Origin: this.$config.base_url,
			},
			allowInterceptConfig: false,
		});
		if (!response.status) {
			log.error(response);
			Qmsg.error(this.$config.TAG + "网络异常，上传图片失败");
			return;
		}
		if (response.data.status in this.$code) {
			log.error(response);
			Qmsg.error(this.$config.TAG + (this.$code as any)[response.data.status]);
			return;
		}
		let data = utils.toJSON(response.data.responseText) as {
			status: boolean;
			message: string;
			data: ImageInfo;
		};
		log.info(data);
		if (!data.status) {
			Qmsg.error(this.$config.TAG + data.message);
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
	/**
	 * 删除图片
	 * @param imageKey 删除的key
	 */
	async deleteImage(imageKey: string) {
		let response = await httpx.delete(
			this.$config.base_url + "/images/" + imageKey,
			{
				timeout: 15000,
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${this.$data.token}`,
					"User-Agent": utils.getRandomPCUA(),
					Referer: `${this.$config.base_url}/`,
					Origin: this.$config.base_url,
				},
				allowInterceptConfig: false,
			}
		);
		if (response.data.status in this.$code) {
			Qmsg.error(this.$config.TAG + (this.$code as any)[response.data.status]);
			return false;
		}
		let data = utils.toJSON(response.data.responseText) as {
			status: boolean;
			message: string;
			data: ImageInfo;
		};
		if (!data.status) {
			Qmsg.error(this.$config.TAG + data.message);
			return false;
		}
		Qmsg.success(this.$config.TAG + "删除成功");
		return true;
	},
};
