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
import { PopsPanel } from "./setting/setting";
import { HttpxCookieManager } from "./utils/HttpxCookieManager";
import pops from "@whitesev/pops";
import { CommonUtils } from "./utils/CommonUtils";
import { GM_RESOURCE_MAP } from "./GM_Resource_Map";
import "@lib/js-watermark";

/* 脚本名 */
const _SCRIPT_NAME_ = "【移动端】MT论坛优化";
const utils = Utils.noConflict();
const domUtils = DOMUtils.noConflict();
const __pops = pops;
// const Viewer: typeof import("@lib/Viewer") =
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
	logMaxCount: 1000,
	autoClearConsole: true,
	tag: true,
});
/* 配置吐司Qmsg */
Qmsg.config(
	Object.defineProperties(
		{
			html: true,
			autoClose: true,
			showClose: false,
		},
		{
			position: {
				get() {
					return PopsPanel.getValue("qmsg-config-position", "bottom");
				},
			},
			maxNums: {
				get() {
					return PopsPanel.getValue("qmsg-config-maxnums", 5);
				},
			},
			showReverse: {
				get() {
					return PopsPanel.getValue("qmsg-config-showreverse", true);
				},
			},
			zIndex: {
				get() {
					let maxZIndex = Utils.getMaxZIndex();
					let popsMaxZIndex =
						pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
					return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
				},
			},
		}
	)
);

/** 油猴菜单 */
const GM_Menu = new utils.GM_Menu({
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
});

const httpx = new utils.Httpx(GM_xmlhttpRequest);

// 添加请求拦截器
httpx.interceptors.request.use((data) => {
	HttpxCookieManager.handle(data);
	return data;
});

// 添加响应拦截器
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

pops.GlobalConfig.setGlobalConfig({
	mask: {
		enable: true,
		clickEvent: {
			toClose: false,
			toHide: false,
		},
	},
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

const addStyle = utils.addStyle.bind(utils);

if (import.meta.env.DEV) {
	import("viewerjs/dist/viewer.css?raw").then((cssText) => {
		addStyle(cssText.default);
	});
} else {
	CommonUtils.setGMResourceCSS(GM_RESOURCE_MAP.Viewer);
}
if (import.meta.env.DEV) {
	import("highlight.js/styles/github-dark.min.css?raw").then((cssText) => {
		addStyle(cssText.default);
	});
} else {
	CommonUtils.setGMResourceCSS(GM_RESOURCE_MAP.Hljs);
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
export {
	utils,
	domUtils as DOMUtils,
	__pops as pops,
	log,
	GM_Menu,
	SCRIPT_NAME,
	OriginPrototype,
	// Viewer,
	// showdown,
	httpx,
	addStyle,
	$,
	$$,
};
