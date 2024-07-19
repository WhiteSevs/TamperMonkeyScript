import {
	monkeyWindow,
	unsafeWindow,
	GM_info,
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
	GM_addStyle,
	GM_xmlhttpRequest,
} from "ViteGM";
import Qmsg from "qmsg";
import Utils from "@whitesev/utils";
import DOMUtils from "@whitesev/domutils";
import pops from "@whitesev/pops";
import { PopsPanel } from "./setting/setting";

const _SCRIPT_NAME_ = "抖音优化";
const utils = Utils.noConflict();
let domUtils = DOMUtils.noConflict();
const __pops = pops;
const console = (unsafeWindow as any).console || (monkeyWindow as any).console;
const log = new utils.Log(GM_info, console);
let SCRIPT_NAME = GM_info?.script?.name || _SCRIPT_NAME_;

/* 配置控制台日志 */
log.config({
	debug: false,
	logMaxCount: 100,
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
			zIndex: 10000000,
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

const addStyle = utils.addStyle;

export {
	utils,
	domUtils as DOMUtils,
	console,
	log,
	GM_Menu,
	SCRIPT_NAME,
	httpx,
	addStyle,
	__pops as pops,
};
