import {
	monkeyWindow,
	unsafeWindow,
	GM_info,
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
	GM_xmlhttpRequest,
	GM_getResourceText,
} from "ViteGM";
import { LoadingView } from "./utils/LoadingView";
import { createApp } from "vue";
import Qmsg from "qmsg";
import Utils from "@whitesev/utils";
import DOMUtils from "@whitesev/domutils";
import { HttpxCookieManager } from "./utils/HttpxCookieManager";
import { PopsPanel } from "./setting/setting";
import { CommonUtils } from "./utils/CommonUtils";
import { GM_RESOURCE_MAP } from "./GM_Resource_Map";

const _SCRIPT_NAME_ = "【移动端】百度系优化";
const utils = Utils.noConflict();
const domutils = DOMUtils.noConflict();
const pops: typeof import("@库/pops") =
	(monkeyWindow as any).pops || (unsafeWindow as any).pops;
const showdown: typeof import("@库/showdown") =
	(monkeyWindow as any).showdown || (unsafeWindow as any).showdown;
const log = new Utils.Log(
	GM_info,
	(unsafeWindow as any).console || (monkeyWindow as any).console
);
const SCRIPT_NAME = GM_info?.script?.name || _SCRIPT_NAME_;
const loadingView = new LoadingView(true);
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
						pops.config.Utils.getPopsMaxZIndex(maxZIndex).zIndex;
					return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
				},
			},
		}
	)
);

/** 油猴菜单 */
const GM_Menu = new Utils.GM_Menu({
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
});

const httpx = new Utils.Httpx(GM_xmlhttpRequest);

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

const addStyle = Utils.addStyle;

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
	if (import.meta.env.DEV) {
		let elementPlusCSS = await import("element-plus/dist/index.css?raw");
		addStyle(elementPlusCSS.default);
	} else {
		let elementPlusCSSText =
			typeof GM_getResourceText === "function"
				? GM_getResourceText(GM_RESOURCE_MAP.ElementPlus.keyName)
				: "";
		if (typeof elementPlusCSSText === "string" && elementPlusCSSText) {
			addStyle(elementPlusCSSText);
		} else {
			CommonUtils.addLinkNode(GM_RESOURCE_MAP.ElementPlus.url);
		}
	}
};

export {
	utils,
	domutils as DOMUtils,
	pops,
	log,
	GM_Menu,
	SCRIPT_NAME,
	OriginPrototype,
	showdown,
	httpx,
	loadingView,
	MountVue,
	VUE_ELE_NAME_ID,
	addStyle,
};
