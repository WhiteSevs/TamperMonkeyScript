import {
	monkeyWindow,
	unsafeWindow,
	GM_info,
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
	GM_xmlhttpRequest,
	GM_addStyle,
	GM_getResourceText,
} from "ViteGM";
import Qmsg from "qmsg";
import DOMUtils from "@whitesev/domutils";
import Utils from "@whitesev/utils";
import type { HttpxHeaders } from "@whitesev/utils/dist/src/Httpx";
import { KEY } from "./setting/config";

/* 脚本名 */
const _SCRIPT_NAME_ = "【移动端】微博优化";
const utils = Utils.noConflict();
const domUtils = DOMUtils.noConflict();
const pops: typeof import("@pops/index") =
	(monkeyWindow as any).pops || (unsafeWindow as any).pops;
// const Viewer: typeof import("@库/Viewer") =
// 	(monkeyWindow as any).Viewer || (unsafeWindow as any).Viewer;
// const showdown: typeof import("@库/showdown") =
// 	(monkeyWindow as any).showdown || (unsafeWindow as any).showdown;
const log = new utils.Log(
	GM_info,
	(unsafeWindow as any).console || (monkeyWindow as any).console
);
const SCRIPT_NAME = GM_info?.script?.name || _SCRIPT_NAME_;

/**
 * 是否为调试模式
 */
const DEBUG = false;

/* 配置控制台日志 */
log.config({
	debug: DEBUG,
	logMaxCount: 20000,
	autoClearConsole: true,
	tag: true,
});
/* 配置吐司Qmsg */
Qmsg.config({
	position: "bottom",
	html: true,
	maxNums: 5,
	autoClose: true,
	showClose: false,
	showReverse: true,
});

/** 油猴菜单 */
const GM_Menu = new utils.GM_Menu({
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
});

const httpx = new utils.Httpx(GM_xmlhttpRequest);
let GMPanel = GM_getValue(KEY, {}) as any;
let userCookie = GMPanel["weibo-common-cookie_weibo.com"] || "";

// 添加拦截器
httpx.interceptors.request.use((details) => {
	if (utils.isNotNull(userCookie)) {
		// 域名：weibo.com
		if (details.url!.includes("weibo.com")) {
			log.success("自定义添加Cookie");
			if (details.headers) {
				if ((details.headers as any)["Cookie"]) {
					(details.headers as any)["Cookie"] += userCookie;
				} else {
					(details.headers as any)["Cookie"] = userCookie;
				}
			} else {
				(details.headers as any) = {
					Cookie: userCookie,
				} as HttpxHeaders;
			}
		}
	}
	return details;
});

httpx.interceptors.response.use(void 0, (data) => {
	log.error(["拦截器-请求错误", data]);
	if (data.type === "onabort") {
		Qmsg.warning("请求取消");
	} else if (data.type === "onerror") {
		Qmsg.error("请求异常");
	} else if (data.type === "ontimeout") {
		Qmsg.error("请求超时");
	} else {
		Qmsg.error("其它错误");
	}
	return data;
});

httpx.config({
	logDetails: DEBUG,
});

const OriginPrototype = {
	Object: {
		defineProperty: unsafeWindow.Object.defineProperty,
	},
	Function: {
		apply: unsafeWindow.Function.prototype.apply,
		call: unsafeWindow.Function.prototype.call,
	},
	Element: {
		appendChild: unsafeWindow.Element.prototype.appendChild,
	},
	setTimeout: unsafeWindow.setTimeout,
};

const addStyle = utils.addStyle;

export {
	utils,
	domUtils as DOMUtils,
	pops,
	log,
	GM_Menu,
	SCRIPT_NAME,
	OriginPrototype,
	// Viewer,
	// showdown,
	httpx,
	addStyle,
};
