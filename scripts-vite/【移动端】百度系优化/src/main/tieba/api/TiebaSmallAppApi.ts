import { httpx, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import md5 from "md5";
import Qmsg from "qmsg";
import { unsafeWindow } from "ViteGM";

let tbs = "";
let cuid = () => {
	let __cuid__ = PopsPanel.getValue("baidu_tieba_index_msg_cuid");
	let cookie = PopsPanel.getValue<string | null>(
		"httpx-cookie-tieba.baidu.com"
	);
	if (utils.isNull(__cuid__) && typeof cookie === "string") {
		let gmCookie = new utils.GM_Cookie();
		let cookieList = gmCookie.parseCookie(cookie);
		let findValue = cookieList.find((item) => {
			return item.key === "MAWEBCUID";
		});
		if (findValue) {
			__cuid__ = findValue.value;
		}
	}
	if (utils.isNull(__cuid__)) {
		Qmsg.error("请在设置面板中填入【MAWEBCUID】的值");
		throw new TypeError("请在设置面板中填入【MAWEBCUID】的值");
	}
	return __cuid__;
};
/**
 * 生成请求头参数
 *
 * @param tbs
 * @param cuid cookie中的MAWEBCUID，但是该值是httponly
 */
const generateSearchParams = async () => {
	const generateHeader_sign = (headers: {}) => {
		function sign(t: any) {
			var e = "",
				n = [];
			for (var r in t) n.push(r);
			return (
				(n = n.sort(function (t, e) {
					return t > e ? 1 : -1;
				})).forEach(function (n) {
					e += n + "=" + t[n];
				}),
				(e += "0039d79dc3cc2075129745a30237a3c4"),
				md5(e)
			);
		}

		return sign(headers);
	};
	let __tbs__ = tbs;
	if (__tbs__ === "") {
		let userInfo = await TiebaSmallAppApi.userInfo();
		if (userInfo) {
			tbs = userInfo.user.tbs;
			__tbs__ = tbs;
		}
	}
	let __cuid__ = cuid();
	let envSearchParamsObj = {
		fr: "smallapp",
		timestamp: Date.now(),
		tbs: __tbs__,
		itb_tbs: __tbs__,
		source_platform: "baidu",
		obj_param2: "baiduboxapp",
		browser: "baiduboxapp",
		// cookie 获取
		swan_cuid: __cuid__,
		// cookie 获取
		cuid: __cuid__,
		randomid: Math.random().toString(36).substr(2) + Date.now(),
	};
	let clientParamsObj = {
		subapp_type: "smallapp",
		_client_type: "2",
		_client_version: "12.64.0",
		call_from: "baidu",
		sign: generateHeader_sign(Object.assign({}, envSearchParamsObj)),
	};

	return Object.assign({}, clientParamsObj, envSearchParamsObj);
};

export const TiebaSmallAppApi = {
	/**
	 * 获取用户信息
	 */
	async userInfo() {
		let response = await httpx.get(
			"https://tieba.baidu.com/mo/q/smallapp/sync",
			{
				headers: {
					Referer: "https://tieba.baidu.com/",
					"User-Agent": utils.getRandomPCUA(),
				},
				processData: true,
				fetch: true,
			}
		);
		log.info(`获取用户信息：`, response);
		if (!response.status) {
			return;
		}
		let data = utils.toJSON(response.data.responseText);
		if (data["no"] !== 0) {
			Qmsg.error(data["error"]);
			return;
		}
		return data["data"] as {
			user:
				| {
						tbs: string;
						user_id: number;
						user_name: string;
						user_nickname: string;
						name_show: string;
						show_nickname: string;
						/** 带时间戳 ?t=.... */
						portrait: string;
						portrait_url: string;
				  }
				| {
						/** 未登录 */
						is_login: false;
						/** 不知道为啥也有tbs */
						tbs: string;
				  };
			stoken: string;
		};
	},
	/**
	 * 点赞列表信息
	 * @param tbs
	 * @param cuid cookie中的MAWEBCUID，但是该值是httponly
	 * @param id 按id顺序请求
	 */
	async agreeme(id: string = "") {
		let searchParamsObj = {
			rn: "10",
			id: id,
		};
		// Object.assign(searchParamsObj, await generateSearchParams());
		let response = await httpx.get(
			"https://tieba.baidu.com/mo/q/smallapp/agreeme",
			{
				data: searchParamsObj,
				headers: {
					Referer: "https://tieba.baidu.com/",
					"User-Agent": utils.getRandomPCUA(),
				},
				processData: true,
				fetch: true,
			}
		);
		if (!response.status) {
			return;
		}
		let data = utils.toJSON(response.data.responseText);
		if (data["no"] !== 0) {
			Qmsg.error(data["error"]);
			return;
		}
		return data["data"] as {
			agree_list?: {
				id: string;
				thread_id: string;
				post_id: string;
				op_user_id: string;
				type: string;
				op_time: string;
				bjh_type: string;
				bjh_nvid: string;
				business_value: string;
				time: string;
				is_del: number;
				thread_info: {
					title: string;
					fname: string;
					fid: number;
					id: number;
					thread_type: number;
					media: {
						type: number;
						small_pic: string;
					}[];
				};
				thread_content: {
					title: string;
					img: string;
				};
				agreeer: {
					id: number;
					name: string;
					name_show: null | string;
					show_nickname: string;
					portrait: string;
					is_fans: null;
				};
				post_info?: {
					author: {
						name: string;
						name_show: string;
						id: number;
					};
					content: {
						text: string;
					}[];
					id: number;
					ptype: number;
				};
			}[];
			has_more: 0 | 1;
		};
	},
	/**
	 * 回复我的
	 */
	async replyme(pn: number = 1) {
		let searchParamsObj = {
			pn: pn,
		};
		// Object.assign(searchParamsObj, await generateSearchParams());
		let response = await httpx.get(
			`https://tieba.baidu.com/mo/q/smallapp/replyme`,
			{
				data: searchParamsObj,
				headers: {
					Referer: "https://tieba.baidu.com/",
					"User-Agent": utils.getRandomPCUA(),
				},
				processData: true,
				fetch: true,
			}
		);
		if (!response.status) {
			return;
		}
		let data = utils.toJSON(response.data.responseText);
		if (data["no"] !== 0) {
			Qmsg.error(data["error"]);
			return;
		}
		return data["data"] as {
			has_more: 0 | 1;
			reply_list?: {
				is_floor: number;
				type: number;
				replyer: {
					id: number;
					name: string;
					/** 带时间戳 ?t=.... */
					portrait: string;
					is_friend: number;
					is_fans: number;
					name_show: string;
				};
				quote_user: {
					id: number;
					name: string;
					portrait: string;
					name_show: string;
				};
				title: string;
				content: string;
				quote_content: string;
				thread_id: string;
				post_id: string;
				time: number;
				fname: string;
				quote_pid: number;
				thread_type: number;
				unread: number;
				post_from: string;
				v_forum_id: null;
				forum_id: number;
				thread_img_url: string;
				origin_thread_info: [];
				thread_content: {
					title: number;
					img?: string;
				};
				thread_author_user: {
					id: number;
					portrait: string;
				};
			}[];
			user: {
				id: number;
				name: string;
				name_show: string;
				name_link: string;
				is_login: boolean;
				no_un: string;
				mobilephone: string;
				email: string;
				is_half_user: number;
				temp_name: string;
				source_id: number;
				is_verify: boolean;
				portrait: string;
				uid: number;
				sid: string;
			};
		};
	},
	/**
	 * @我的
	 */
	async atme(pn: number = 1) {
		let searchParamsObj = {
			pn: pn,
		};
		Object.assign(searchParamsObj, await generateSearchParams());
		let response = await httpx.get(
			`https://tieba.baidu.com/mo/q/smallapp/atme`,
			{
				data: searchParamsObj,
				headers: {
					Referer: "https://tieba.baidu.com/",
					"User-Agent": utils.getRandomPCUA(),
				},
				processData: true,
				fetch: true,
			}
		);
		if (!response.status) {
			return;
		}
		let data = utils.toJSON(response.data.responseText);
		if (data["no"] !== 0) {
			Qmsg.error(data["error"]);
			return;
		}
		return data["data"] as {
			at_list?: any[];
			has_more: 0 | 1;
		};
	},
};

if (import.meta.hot) {
	Reflect.set(unsafeWindow, "TiebaSmallAppApi", TiebaSmallAppApi);
}
