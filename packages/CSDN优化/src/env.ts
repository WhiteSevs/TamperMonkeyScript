import {
	monkeyWindow,
	unsafeWindow,
	GM_info,
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
	GM_xmlhttpRequest,
} from "ViteGM";
import Qmsg from "qmsg";
import DOMUtils from "@whitesev/domutils";
import Utils from "@whitesev/utils";

const _SCRIPT_NAME_ = "CSDN优化";
const utils = Utils.noConflict();
const domutils = DOMUtils.noConflict();
const pops: typeof import("@库/pops") =
	(monkeyWindow as any).pops || (unsafeWindow as any).pops;
// const Viewer: typeof import("@库/Viewer") = ((monkeyWindow as any).Viewer || (unsafeWindow as any).Viewer)
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
httpx.config({
	logDetails: DEBUG,
	onabort() {
		Qmsg.warning("请求取消");
	},
	ontimeout() {
		Qmsg.error("请求超时");
	},
	onerror(response: any) {
		Qmsg.error("请求异常");
		log.error(["httpx-onerror 请求异常", response]);
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

const addStyle = utils.addStyle;

export {
	utils,
	domutils as DOMUtils,
	pops,
	Qmsg,
	log,
	GM_Menu,
	SCRIPT_NAME,
	OriginPrototype,
	// Viewer,
	httpx,
	addStyle,
};
