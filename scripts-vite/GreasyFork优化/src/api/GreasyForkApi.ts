import { DOMUtils, httpx, log, utils } from "@/env";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import i18next from "i18next";
import Qmsg from "qmsg";

interface GreasyForkScriptInfo {
	/**
	 * 脚本id
	 */
	id: number;
	/**
	 * 创建时间，格式为new Date().toISOString()
	 */
	created_at: string;
	/**
	 * 今日安装的数量
	 */
	daily_installs: number;
	/**
	 * 总安装的数量
	 */
	total_installs: number;
	/**
	 * 更新时间，格式为new Date().toISOString()
	 */
	code_updated_at: string;
	/**
	 * 反馈的URL
	 * @ supportURL
	 */
	support_url: string | null;
	/**
	 * 脚本评分
	 */
	fan_score: string;
	/**
	 * 脚本主页
	 * @ namespace
	 */
	namespace: string | null;
	/**
	 *
	 */
	contribution_url: string | null;
	contribution_amount: string | null;
	/**
	 * 好评的数量
	 */
	good_ratings: number;
	/**
	 * 好评的数量
	 */
	ok_ratings: number;
	/**
	 * 差评的数量
	 */
	bad_ratings: number;
	/**
	 * 脚本的名字
	 * @ name
	 */
	name: string;
	/**
	 * 脚本的描述
	 * @ description
	 */
	description: string | null;
	/**
	 * 脚本主页Url
	 */
	url: string;
	/**
	 * 脚本更新Url
	 */
	code_url: string;
	/**
	 * @ license
	 */
	license: string | null;
	/**
	 * 当前版本号
	 *
	 * @ version
	 */
	version: string;
	/**
	 * 脚本语言
	 */
	locale: string;
	/**
	 * 脚本是否被删除
	 */
	deleted: boolean;
}

interface GreasyForkUserInfo {
	id: number;
	name: string;
	scripts: GreasyForkScriptInfo[];
	scriptList: GreasyForkScriptInfo[];
	scriptLibraryList: GreasyForkScriptInfo[];
	url: string;
}

export const GreasyforkApi = {
	/**
	 * 获取脚本信息
	 * @param scriptId
	 */
	async getScriptInfo(scriptId: string | number) {
		let url = GreasyforkUrlUtils.getScriptInfoUrl(scriptId);
		let response = await httpx.get(url, {});
		if (!response.status) {
			return;
		}
		let data = utils.toJSON<GreasyforkScriptUrlInfo>(
			response.data.responseText
		);
		return data;
	},
	/**
	 * 获取脚本统计数据
	 * @param scriptId
	 */
	async getScriptStats(scriptId: string) {
		let response = await httpx.get(`/scripts/${scriptId}/stats.json`, {
			allowInterceptConfig: false,
		});
		log.info(response);
		if (!response.status) {
			log.error(i18next.t("获取脚本统计数据失败"));
			return;
		}
		let scriptStatsJSON = utils.toJSON(response.data.responseText);
		return scriptStatsJSON;
	},
	/**
	 * 解析并获取admin内的源代码同步的配置表单
	 * @param scriptId
	 */
	async getSourceCodeSyncFormData(
		scriptId: string
	): Promise<FormData | undefined> {
		let response = await httpx.get(`/scripts/${scriptId}/admin`, {
			allowInterceptConfig: false,
		});
		log.info(response);
		if (!response.status) {
			Qmsg.error(i18next.t("请求admin内容失败"));
			return;
		}
		let adminHTML = response.data.responseText;
		let adminHTMLElement = DOMUtils.parseHTML(adminHTML, false, true);
		let formElement =
			adminHTMLElement.querySelector<HTMLFormElement>("form.edit_script");
		if (!formElement) {
			Qmsg.error(i18next.t("解析admin的源代码同步表单失败"));
			return;
		}
		let formData = new FormData(formElement);
		return formData;
	},
	/**
	 * 进行源代码同步，要求先getSourceCodeSyncFormData
	 * @param scriptId
	 * @param data
	 */
	async sourceCodeSync(scriptId: string, data: FormData) {
		let response = await httpx.post(`/scripts/${scriptId}/sync_update`, {
			data: data,
			allowInterceptConfig: false,
		});
		log.info(response);
		if (!response.status) {
			Qmsg.error(i18next.t("源代码同步失败"));
			return;
		}
		return response;
	},
	/**
	 * 获取用户的信息，包括脚本列表、未上架的脚本、库
	 */
	async getUserInfo(userId: string) {
		let response = await httpx.get(`/users/${userId}.json`, {
			allowInterceptConfig: false,
		});
		log.success(response);
		if (!response.status) {
			Qmsg.error(i18next.t("获取用户信息失败"));
			return;
		}
		let data = utils.toJSON<GreasyForkUserInfo>(response.data.responseText);
		data["scriptList"] = [];
		data["scriptLibraryList"] = [];
		data["scripts"].forEach((scriptInfo) => {
			if (scriptInfo["code_url"].endsWith(".user.js")) {
				data["scriptList"].push(scriptInfo);
			} else {
				data["scriptLibraryList"].push(scriptInfo);
			}
		});
		return data;
	},
	/**
	 * 获取用户的收藏集
	 * @param userId
	 */
	async getUserCollection(userId: string) {
		let response = await httpx.get(`/users/${userId}`, {
			fetch: true,
			allowInterceptConfig: false,
		});
		log.info("获取用户的收藏集", response);
		if (!response.status) {
			Qmsg.error(i18next.t("获取用户的收藏集失败"));
			return;
		}
		let respText = response.data.responseText;
		let respDocument = DOMUtils.parseHTML(respText, true, true);
		let userScriptSets = respDocument.querySelector("#user-script-sets");
		if (!userScriptSets) {
			log.error("解析Script Sets失败");
			return;
		}
		let scriptSetsIdList: {
			id: string;
			name: string;
		}[] = [];
		userScriptSets.querySelectorAll("li").forEach((liElement) => {
			let $ele = liElement.querySelector<HTMLAnchorElement>("a:last-child");
			if (!$ele) {
				return;
			}
			let setsUrl = $ele.href;
			if (setsUrl.includes("?fav=1")) {
				/* 自带的收藏夹 */
				return;
			}
			let setsName = liElement.querySelector<HTMLAnchorElement>("a")!.innerText;
			let setsId = setsUrl.match(/\/sets\/([\d]+)\//)?.[1] as string;
			scriptSetsIdList.push({
				id: setsId,
				name: setsName,
			});
		});

		return scriptSetsIdList;
	},
	/**
	 * 获取某个收藏集的信息
	 * @param userId 用户id
	 * @param setsId 收藏集id
	 */
	async getUserCollectionInfo(userId: string, setsId: string) {
		let response = await httpx.get(`/users/${userId}/sets/${setsId}/edit`, {
			fetch: true,
			allowInterceptConfig: false,
		});
		log.info(response);
		if (!response.status) {
			Qmsg.error(i18next.t("获取收藏集{{setsId}}失败", { setsId }));
			return;
		}
		let respText = response.data.responseText;
		let respDocument = DOMUtils.parseHTML(respText, true, true);
		let $edit_script_set_form = respDocument.querySelector<HTMLFormElement>(
			'form[id^="edit_script_set"]'
		);
		if (!$edit_script_set_form) {
			Qmsg.error(i18next.t("获取表单元素#edit_script_set失败"));
			return;
		}
		let formData = new FormData($edit_script_set_form);
		let csrfToken = respDocument.querySelector<HTMLMetaElement>(
			'meta[name="csrf-token"]'
		);
		if (!csrfToken) {
			Qmsg.error(i18next.t("获取表单csrfToken失败"));
			return;
		}
		if (csrfToken.hasAttribute("content")) {
			let authenticity_token = csrfToken.getAttribute("content");
			if (authenticity_token) {
				formData.set("authenticity_token", authenticity_token);
			}
		}
		return formData;
	},
	/**
	 * 更新用户的某个收藏集的表单信息
	 * @param userId 用户id
	 * @param setsId 收藏集id
	 * @param data
	 */
	async updateUserSetsInfo(userId: string, setsId: string, data: string) {
		let response = await httpx.post(`/users/${userId}/sets/${setsId}`, {
			fetch: true,
			allowInterceptConfig: false,
			headers: {
				Accept:
					"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
				"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
				"Cache-Control": "no-cache",
				"Content-Type": "application/x-www-form-urlencoded",
				Pragma: "no-cache",
			},
			fetchInit: {
				referrerPolicy: "strict-origin-when-cross-origin",
			},
			data: data,
		});
		log.info(response);
		if (!response.status) {
			Qmsg.error(i18next.t("更新收藏集表单请求失败"));
			return;
		}
		let respText = response.data.responseText;
		let respDocument = DOMUtils.parseHTML(respText, true, true);
		return respDocument;
	},
	/**
	 * 切换语言
	 * @param url
	 */
	async switchLanguage(url: string) {
		let response = await httpx.get(url, {
			fetch: true,
			headers: {
				"Upgrade-Insecure-Requests": "1",
			},
		});
		log.info(response);
		if (!response.status) {
			return;
		}
	},
};
