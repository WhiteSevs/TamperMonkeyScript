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
import { PopsPanel } from "./setting/setting";
import pops from "@whitesev/pops";
import { ApiSupportTest } from "./main/ApiSupportTest";
import { StorageApi } from "./main/StorageApi";

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
	GM_getValue: ApiSupportTest.getValue() ? GM_getValue : StorageApi.get,
	GM_setValue: ApiSupportTest.setValue() ? GM_setValue : StorageApi.set,
	GM_registerMenuCommand: ApiSupportTest.registerMenuCommand()
		? GM_registerMenuCommand
		: () => {},
	GM_unregisterMenuCommand: ApiSupportTest.unregisterMenuCommand()
		? GM_unregisterMenuCommand
		: () => {},
});

// const httpx = new utils.Httpx(GM_xmlhttpRequest);

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

// httpx.config({
// 	logDetails: DEBUG,
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
	    ...${document.head.children.length} elements
	</head>
    <body>
        ...${document.body.children.length} elements
    </body>
</html>

似乎注入到页面有点慢
`;
		} else {
			if (document.head.children.length) {
				injectDocumentTime = `<html>
	<head>
	    ...${document.head.children.length} elements
	</head>
</html>
		
注入到页面很快`;
			} else {
				injectDocumentTime = `<html>
	<head></head>
</html>

注入到页面非常快`;
			}
		}
	} else {
		injectDocumentTime = `<html>
</html>

注入到页面超级快`;
	}
} else {
	injectDocumentTime = `document.documentElement is null
	
注入到页面超级无敌快`;
}

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
};
