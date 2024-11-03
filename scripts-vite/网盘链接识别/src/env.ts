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
import { HttpxCookieManager } from "./utils/HttpxCookieManager";
import pops from "@whitesev/pops";
import { NetDiskGlobalData } from "./main/data/NetDiskGlobalData";

/* 脚本名 */
const _SCRIPT_NAME_ = "网盘链接识别";
/** 是否是调试模式 */
const isDebug = false;
const utils = Utils.noConflict();
const domUtils = DOMUtils.noConflict();
const __pops = pops;
const Cryptojs = CryptoJS ?? window.CryptoJS ?? unsafeWindow.CryptoJS;
// @ts-ignore
const __DataPaging: typeof import("@库/DataPaging") =
	// @ts-ignore
	DataPaging ?? window.DataPaging ?? unsafeWindow.DataPaging;
// const Viewer: typeof import("@库/Viewer") =
// 	(monkeyWindow as any).Viewer || (unsafeWindow as any).Viewer;
// const showdown: typeof import("@库/showdown") =
// 	(monkeyWindow as any).showdown || (unsafeWindow as any).showdown;
const log = new utils.Log(
	GM_info,
	(unsafeWindow as any).console || (monkeyWindow as any).console
);
const SCRIPT_NAME = GM_info?.script?.name || _SCRIPT_NAME_;
const AnyTouch = pops.config.Utils.AnyTouch();

/* 配置控制台日志 */
log.config({
	debug: isDebug,
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
					return NetDiskGlobalData.toast.position.value;
				},
			},
			maxNums: {
				get() {
					return NetDiskGlobalData.toast.maxnums.value;
				},
			},
			showReverse: {
				get() {
					return NetDiskGlobalData.toast.showreverse.value;
				},
			},
			zIndex: {
				get() {
					let maxZIndex = Utils.getMaxZIndex(10);
					let popsMaxZIndex =
						pops.config.InstanceUtils.getPopsMaxZIndex(10).zIndex;
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
	log.error("拦截器-请求错误", data);
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
	logDetails: isDebug,
	headers: {
		"User-Agent": utils.getRandomPCUA(),
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
	Cryptojs,
	httpx,
	addStyle,
	isDebug,
	__DataPaging as DataPaging,
	AnyTouch,
};
