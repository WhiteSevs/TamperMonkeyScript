import {
	GM_info,
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
} from "ViteGM";
import Qmsg from "qmsg";
import DOMUtils from "@whitesev/domutils";
import Utils from "@whitesev/utils";
import { PopsPanel } from "./setting/panel";
import pops from "@whitesev/pops";
import { StorageApi } from "./main/StorageApi";
import { GMTotal } from "./main/GMTotal";

/* 脚本名 */
const _SCRIPT_NAME_ = "Monkey Api Test";
const utils = Utils.noConflict();
const domUtils = DOMUtils.noConflict();
const __pops = pops;
// const Viewer: typeof import("@库/Viewer") =
// 	(monkeyWindow as any).Viewer || (unsafeWindow as any).Viewer;
// const showdown: typeof import("@库/showdown") =
// 	(monkeyWindow as any).showdown || (unsafeWindow as any).showdown;
const log = new utils.Log(GM_info, window.console);
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
						pops.config.InstanceUtils.getPopsMaxZIndex(maxZIndex).zIndex;
					return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
				},
			},
		}
	)
);

/** 油猴菜单 */
const GM_Menu = new utils.GM_Menu({
	GM_getValue: GMTotal.getValue.isSupport() ? GM_getValue : StorageApi.get,
	GM_setValue: GMTotal.setValue.isSupport() ? GM_setValue : StorageApi.set,
	GM_registerMenuCommand: GMTotal.registerMenuCommand.isSupport()
		? GM_registerMenuCommand
		: () => {},
	GM_unregisterMenuCommand: GMTotal.unregisterMenuCommand.isSupport()
		? GM_unregisterMenuCommand
		: () => {},
});

// const httpx = new utils.Httpx({
// 	xmlHttpRequest: GM_xmlhttpRequest,
// 	logDetails: import.meta.env.DEV ? true : DEBUG,
// });

// // 开发测试使用
// if (import.meta.env.DEV) {
// 	// @ts-ignore
// 	unsafeWindow.httpx = httpx;
// }

// // 添加请求拦截器
// httpx.interceptors.request.use((data) => {
// 	return data;
// });

// // 添加响应拦截器
// httpx.interceptors.response.use(void 0, (data) => {
// 	log.error("拦截器-请求错误", data);
// 	if (data.type === "onabort") {
// 		Qmsg.warning("请求取消");
// 	} else if (data.type === "onerror") {
// 		Qmsg.error("请求异常");
// 	} else if (data.type === "ontimeout") {
// 		Qmsg.error("请求超时");
// 	} else {
// 		Qmsg.error("其它错误");
// 	}
// 	return data;
// });

const OriginPrototype = {
	Object: {
		defineProperty: window.Object.defineProperty,
	},
	Function: {
		apply: window.Function.prototype.apply,
		call: window.Function.prototype.call,
	},
	Element: {
		appendChild: window.Element.prototype.appendChild,
	},
	setTimeout: window.setTimeout,
};

const addStyle = utils.addStyle.bind(utils);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let injectDocumentTime = "";
if (document.documentElement) {
	if (document.head) {
		if (document.body) {
			injectDocumentTime = `<html>
    <head>
	    ...${document.head.childNodes.length} nodes
	</head>
    <body>
        ...${document.body.childNodes.length} nodes
    </body>
</html>

注入速度等级：4
`;
		} else {
			if (document.head.childNodes.length) {
				injectDocumentTime = `<html>
	<head>
	    ...${document.head.childNodes.length} nodes
	</head>
</html>
		
注入速度等级：3`;
			} else {
				injectDocumentTime = `<html>
	<head></head>
</html>

注入速度等级：2`;
			}
		}
	} else {
		injectDocumentTime = `<html>
</html>

注入速度等级：1`;
	}
} else {
	injectDocumentTime = `document.documentElement is null
	
注入速度等级：0`;
}
/**
 * 延迟执行，并捕捉异常
 */
const setTimeoutLog = (
	handler: (...args: any[]) => void,
	timeout: number,
	...args: any[]
) => {
	return setTimeout(() => {
		try {
			handler(...args);
		} catch (error: any) {
			Qmsg.error(error.toString(), { consoleLogContent: true });
		}
	}, timeout);
};

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
	// httpx,
	addStyle,
	$,
	$$,
	injectDocumentTime,
	setTimeoutLog,
};
