import { DOMUtils, httpx, log, utils } from "@/env";
import type { HttpxAsyncResultData } from "@whitesev/utils/dist/src/Httpx";
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

const GreasyforkApi = {
	/**
	 * 获取代码搜索地址
	 * @param url
	 */
	getCodeSearchUrl(url: string) {
		return "https://greasyfork.org/zh-CN/scripts/code-search?c=" + url;
	},
	/**
	 * 获取管理地址
	 * @param url
	 */
	getAdminUrl(url: string) {
		return url + "/admin";
	},
	/**
	 * 从字符串中提取Id
	 * @param text
	 */
	getScriptId(text?: string) {
		return (text || window.location.pathname)?.match(
			/\/scripts\/([\d]+)/i
		)?.[1];
	},
	/**
	 * 从字符串中提取用户id
	 * @param text
	 */
	getUserId(text?: string) {
		return (text || window.location.pathname).match(/\/users\/([\d]+)/i)?.[1];
	},
	/**
	 * 从字符串中提取脚本名
	 * @param text
	 */
	getScriptName(text?: string) {
		let pathname = window.location.pathname;
		if (text != null) {
			pathname = new URL(text).pathname;
		}
		pathname = decodeURIComponent(pathname);
		let pathnameSplit = pathname.split("/");
		for (const name of pathnameSplit) {
			let nameMatch = name.match(/[\d]+/);
			if (nameMatch && nameMatch.length) {
				return nameMatch[1];
			}
		}
	},
	/**
	 * 获取需要切换语言的Url
	 */
	getSwitchLanguageUrl(localeLanguage = "zh-CN") {
		let url = window.location.origin;
		let urlSplit = window.location.pathname.split("/");
		urlSplit[1] = localeLanguage;
		url = url + urlSplit.join("/");
		url += window.location.search;
		if (window.location.search === "") {
			url += "?locale_override=1";
		} else if (!window.location.search.includes("locale_override=1")) {
			url += "&locale_override=1";
		}
		return url;
	},
	/**
	 * 获取脚本统计数据
	 * @param scriptId
	 */
	async getScriptStats(scriptId: string): Promise<HttpxAsyncResultData<{
		url: string;
		fetch: true;
		onerror(): void;
		ontimeout(): void;
	}> | null> {
		return new Promise(async (resolve) => {
			let scriptStatsRequest = await httpx.get({
				url: `https://greasyfork.org/scripts/${scriptId}/stats.json`,
				fetch: true,
				onerror() {},
				ontimeout() {},
			});
			if (!scriptStatsRequest.status) {
				resolve(null);
				return;
			}
			let scriptStatsJSON = scriptStatsRequest.data;
			resolve(scriptStatsJSON);
		});
	},
	/**
	 * 解析并获取admin内的源代码同步的配置表单
	 * @param scriptId
	 */
	async getSourceCodeSyncFormData(
		scriptId: string
	): Promise<FormData | undefined> {
		let getResp = await httpx.get(
			`https://greasyfork.org/zh-CN/scripts/${scriptId}/admin`,
			{
				fetch: true,
			}
		);
		log.success(getResp);
		if (!getResp.status) {
			Qmsg.error("请求admin内容失败");
			return;
		}
		let adminHTML = getResp.data.responseText;
		let adminHTMLElement = DOMUtils.parseHTML(adminHTML, false, true);
		let formElement =
			adminHTMLElement.querySelector<HTMLFormElement>("form.edit_script");
		if (!formElement) {
			Qmsg.error("解析admin的源代码同步表单失败");
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
		let postResp = await httpx.post(
			`https://greasyfork.org/zh-CN/scripts/${scriptId}/sync_update`,
			{
				fetch: true,
				data: data,
			}
		);
		log.success(postResp);
		if (!postResp.status) {
			Qmsg.error("源代码同步失败");
			return;
		}
		return postResp;
	},
	/**
	 * 获取用户的信息，包括脚本列表、未上架的脚本、库
	 */
	async getUserInfo(userId: string) {
		let getResp = await httpx.get(
			`https://greasyfork.org/zh-CN/users/${userId}.json`,
			{
				fetch: true,
			}
		);
		log.success(getResp);
		if (!getResp.status) {
			Qmsg.error("获取用户信息失败");
			return;
		}
		let data = utils.toJSON<GreasyForkUserInfo>(getResp.data.responseText);
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
		let getResp = await httpx.get(
			`https://greasyfork.org/zh-CN/users/${userId}`,
			{
				fetch: true,
			}
		);
		log.info(["获取用户的收藏集", getResp]);
		if (!getResp.status) {
			Qmsg.error("获取用户的收藏集失败");
			return;
		}
		let respText = getResp.data.responseText;
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
		let getResp = await httpx.get(
			`https://greasyfork.org/zh-CN/users/${userId}/sets/${setsId}/edit`,
			{
				fetch: true,
			}
		);
		if (!getResp.status) {
			Qmsg.error(`获取收藏集${setsId}失败`);
			return;
		}
		let respText = getResp.data.responseText;
		let respDocument = DOMUtils.parseHTML(respText, true, true);
		let $edit_script_set_form = respDocument.querySelector<HTMLFormElement>(
			'form[id^="edit_script_set"]'
		);
		if (!$edit_script_set_form) {
			Qmsg.error("获取表单元素#edit_script_set失败");
			return;
		}
		let formData = new FormData($edit_script_set_form);
		let csrfToken = respDocument.querySelector<HTMLMetaElement>(
			'meta[name="csrf-token"]'
		);
		if (!csrfToken) {
			throw new Error("获取表单csrfToken失败");
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
		let postResp = await httpx.post(
			`https://greasyfork.org/zh-CN/users/${userId}/sets/${setsId}`,
			{
				fetch: true,
				headers: {
					accept:
						"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
					"cache-control": "no-cache",
					"content-type": "application/x-www-form-urlencoded",
					pragma: "no-cache",
				},
				fetchInit: {
					referrerPolicy: "strict-origin-when-cross-origin",
				},
				data: data,
			}
		);
		if (!postResp.status) {
			Qmsg.error("更新收藏集表单请求失败");
			return;
		}
		let respText = postResp.data.responseText;
		let respDocument = DOMUtils.parseHTML(respText, true, true);
		return respDocument;
	},
	/**
	 * 切换语言
	 * @param url
	 */
	async switchLanguage(url: string) {
		let getResp = await httpx.get(url, {
			fetch: true,
			headers: {
				"Upgrade-Insecure-Requests": "1",
			},
		});
		if (!getResp.status) {
			return;
		}
		log.info(getResp);
	},
};

export { GreasyforkApi };
