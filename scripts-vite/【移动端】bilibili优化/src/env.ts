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
import ElementPlus from "element-plus/es/index";
import { createApp } from "vue";
import Qmsg from "qmsg";
import Utils from "@whitesev/utils";
import DOMUtils from "@whitesev/domutils";
import { HttpxCookieManager } from "./utils/HttpxCookieManager";
import { PopsPanel } from "./setting/panel";
import pops from "@whitesev/pops";

const _SCRIPT_NAME_ = "【移动端】bilibili优化";
const utils = Utils.noConflict();
const domutils = DOMUtils.noConflict();
const __pops = pops;
const QRCodeJS: typeof import("@lib/QRCode/index.d.ts") =
	(monkeyWindow as any).QRCode || (unsafeWindow as any).QRCode;

const log = new utils.Log(
	GM_info,
	(unsafeWindow as any).console || (monkeyWindow as any).console
);
const SCRIPT_NAME = GM_info?.script?.name || _SCRIPT_NAME_;
const GMCookie = new utils.GM_Cookie();
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

const httpx = new utils.Httpx({
	xmlHttpRequest: GM_xmlhttpRequest,
	logDetails: import.meta.env.DEV ? true : DEBUG,
});

// 开发测试使用
if (import.meta.env.DEV) {
	// @ts-ignore
	unsafeWindow.httpx = httpx;
	// @ts-ignore
	unsafeWindow.PopsPanel = PopsPanel;
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

const VUE_ELE_NAME_ID = "vite-app";
/**
 * 注册vue、element-plus、element-plus/icons-vue
 * @param targetApp
 */
const MountVue = async function (targetApp: any, router?: any) {
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
		app.use(router);
		app.use(ElementPlus);
		app.mount($mount);
	});
	if (import.meta.env.DEV) {
		let elementPlusCSS = await import("element-plus/dist/index.css?raw");
		GM_addStyle(elementPlusCSS.default);
	} else {
		GM_addStyle(GM_getResourceText("ElementPlusResourceCSS"));
	}
};
const addStyle = utils.addStyle.bind(utils);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

pops.GlobalConfig.setGlobalConfig({
	mask: {
		enable: true,
		clickEvent: {
			toClose: true,
		},
	},
	zIndex() {
		let maxZIndex = Utils.getMaxZIndex();
		let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
		return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
	},
});

export {
	utils,
	domutils as DOMUtils,
	__pops as pops,
	Qmsg,
	log,
	GM_Menu,
	SCRIPT_NAME,
	OriginPrototype,
	httpx,
	MountVue,
	VUE_ELE_NAME_ID,
	addStyle,
	GMCookie,
	QRCodeJS,
	$,
	$$,
};
