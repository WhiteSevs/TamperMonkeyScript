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
import { createApp } from "vue";
import Qmsg from "qmsg";
import Utils from "@whitesev/utils";
import DOMUtils from "@whitesev/domutils";
import { PopsPanel } from "./setting/setting";
import pops from "@whitesev/pops";
import { GM_RESOURCE_MAPPING } from "./GM_Resource_Mapping";
import { CommonUtil } from "./utils/CommonUtil";
import Viewer from "viewerjs";

const _SCRIPT_NAME_ = "小红书优化";
const utils = Utils.noConflict();
const domutils = DOMUtils.noConflict();
const __pops = pops;
const __viewer = Viewer;
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

const httpx = new utils.Httpx(GM_xmlhttpRequest);

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

const addStyle = utils.addStyle.bind(utils);

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

// 开发测试使用
if (import.meta.env.DEV) {
	// @ts-ignore
	unsafeWindow.httpx = httpx;
	httpx.config({
		logDetails: true,
	});
}

export {
	utils,
	domutils as DOMUtils,
	__pops as pops,
	__viewer as Viewer,
	log,
	GM_Menu,
	SCRIPT_NAME,
	OriginPrototype,
	httpx,
	addStyle,
	$,
	$$,
	MountVue,
	VUE_ELE_NAME_ID,
};
