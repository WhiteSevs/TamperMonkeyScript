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

const _SCRIPT_NAME_ = "【移动端】bilibili优化";
const utils = Utils.noConflict();
const domutils = DOMUtils.noConflict();
const pops: typeof import("@库/pops") =
	(monkeyWindow as any).pops || (unsafeWindow as any).pops;
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
	httpx,
	MountVue,
	VUE_ELE_NAME_ID,
	addStyle,
};
