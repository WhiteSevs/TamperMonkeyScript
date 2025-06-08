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
import { Panel } from "./setting/panel";
import { HttpxCookieManager } from "./utils/HttpxCookieManager";
import pops from "@whitesev/pops";
import Viewer from "viewerjs";
import { GM_RESOURCE_MAPPING } from "./GM_Resource_Map";
import { createApp } from "vue";
import "@lib/js-watermark";
import { CommonUtil } from "./utils/CommonUtil";

/* 脚本名 */
const _SCRIPT_NAME_ = "【移动端】MT论坛优化";
const utils = Utils.noConflict();
const domUtils = DOMUtils.noConflict();
const __pops = pops;
const __viewer = Viewer;
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
					return Panel.getValue("qmsg-config-position", "bottom");
				},
			},
			maxNums: {
				get() {
					return Panel.getValue("qmsg-config-maxnums", 5);
				},
			},
			showReverse: {
				get() {
					return Panel.getValue("qmsg-config-showreverse", true);
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

const httpx = new utils.Httpx({
	xmlHttpRequest: GM_xmlhttpRequest,
	logDetails: import.meta.env.DEV ? true : DEBUG,
});

// 开发测试使用
if (import.meta.env.DEV) {
	// @ts-ignore
	unsafeWindow.httpx = httpx;
}

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

CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Hljs);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const VUE_ELE_NAME_ID = "vite-app";
/**
 * 注册vue、element-plus、element-plus/icons-vue
 * @param targetApp vue实例
 * @param plugin 插件之类的，如vue-router、Element-Plus
 */
const MountVue = async function (targetApp: any, plugin: any[] = []) {
	DOMUtils.ready(async () => {
		const app = createApp(targetApp);
		let $mount = DOMUtils.createElement("div", {
			id: VUE_ELE_NAME_ID,
		});
		/* 注册图标组件 */
		if (import.meta.env.DEV) {
			const ElementPlusIconsVue = await import("@element-plus/icons-vue");
			for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
				app.component(key, component);
			}
		} else {
			/* ElementPlusIconsVue是var定义的，不在window上 */
			// @ts-ignore
			if (ElementPlusIconsVue != null) {
				// @ts-ignore
				for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
					// @ts-ignore
					app.component(key, component);
				}
			}
		}
		document.body.appendChild($mount);
		plugin.forEach((item) => {
			app.use(item);
		});
		app.mount($mount);
	});
	CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.ElementPlus);
};

export {
	__pops as pops,
	__viewer as Viewer,
	utils,
	domUtils as DOMUtils,
	log,
	GM_Menu,
	SCRIPT_NAME,
	OriginPrototype,
	// showdown,
	httpx,
	addStyle,
	$,
	$$,
	MountVue,
	VUE_ELE_NAME_ID,
};
