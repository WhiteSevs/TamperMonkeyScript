import {
	monkeyWindow,
	unsafeWindow,
	GM_info,
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
	GM_addStyle,
} from "ViteGM";
import Qmsg from "qmsg";
import Utils from "@whitesev/utils";
import DOMUtils from "@whitesev/domutils";

const _SCRIPT_NAME_ = "抖音优化";
const utils = Utils.noConflict();
let domUtils = DOMUtils.noConflict();
const pops: typeof import("@库/pops") =
	(monkeyWindow as any).pops || (unsafeWindow as any).pops;
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

const addStyle = utils.addStyle;

export {
	utils,
	domUtils as DOMUtils,
	pops,
	console,
	log,
	GM_Menu,
	SCRIPT_NAME,
	addStyle,
};
