import {
	monkeyWindow,
	unsafeWindow,
	GM_info,
	GM_getValue,
	GM_setValue,
	GM_registerMenuCommand,
	GM_unregisterMenuCommand,
	GM_addStyle,
	GM_getResourceText,
	GM_xmlhttpRequest,
	GM_cookie,
} from "ViteGM";
import Qmsg from "qmsg";
import DOMUtils from "@whitesev/domutils";
import Utils from "@whitesev/utils";
import pops from "@whitesev/pops";
import { PopsPanel } from "./setting/panel";
import { httpxCookieManager } from "./utils/HttpxCookieManager";
import { CommonUtil } from "./utils/CommonUtil";
import { GM_RESOURCE_MAPPING } from "./GM_Resource_Mapping";
import { createApp } from "vue";
import { PanelSettingConfig } from "./setting/panel-setting-config";

/**
 * 脚本名
 *
 * 除了这里还有vite.config.ts内的 SCRIPT_NAME
 *
 * @link file://./../vite.config.ts?SCRIPT_NAME
 */
const _SCRIPT_NAME_ = "CookieManager";
const utils = Utils.noConflict();
const domUtils = DOMUtils.noConflict();
const __pops = pops;
// const showdown: typeof import("@lib/showdown") =
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
					return PopsPanel.getValue(
						PanelSettingConfig.qmsg_config_position.key,
						PanelSettingConfig.qmsg_config_position.defaultValue
					);
				},
			},
			maxNums: {
				get() {
					return PopsPanel.getValue(
						PanelSettingConfig.qmsg_config_maxnums.key,
						PanelSettingConfig.qmsg_config_maxnums.defaultValue
					);
				},
			},
			showReverse: {
				get() {
					return PopsPanel.getValue(
						PanelSettingConfig.qmsg_config_showreverse.key,
						PanelSettingConfig.qmsg_config_showreverse.defaultValue
					);
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

/* 配置pops的默认选项 */
__pops.GlobalConfig.setGlobalConfig({
	zIndex: () => {
		let maxZIndex = Utils.getMaxZIndex(void 0, void 0, ($ele) => {
			if (($ele as HTMLElement)?.classList?.contains("qmsg-shadow-container")) {
				return false;
			}
			if (
				($ele as HTMLElement)?.closest("qmsg") &&
				$ele.getRootNode() instanceof ShadowRoot
			) {
				return false;
			}
		});
		let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
		return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
	},
	mask: {
		// 开启遮罩层
		enable: true,
		// 取消点击遮罩层的事件
		clickEvent: {
			toClose: false,
			toHide: false,
		},
	},
});

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

/**
 * 添加样式
 */
const addStyle = utils.addStyle.bind(utils);

/**
 * 元素选择器
 */
const $ = document.querySelector.bind(document);
/**
 * 多组元素选择器
 */
const $$ = document.querySelectorAll.bind(document);

if (import.meta.hot) {
	Reflect.set(unsafeWindow, "httpx", httpx);
	Object.defineProperty(unsafeWindow, "PopsPanel", {
		get() {
			return PopsPanel;
		},
	});
}
/**
 * Vue的根元素的id
 */
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

/**
 * 让对象内的函数属性的this指向固定为该对象
 */
let applyObjectThis = (obj: any) => {
	Object.keys(obj).forEach((key) => {
		// @ts-ignore
		if (typeof obj[key] === "function") {
			// @ts-ignore
			obj[key] = obj[key].bind(obj);
		}
	});
};

const utilsCookieManager = new Utils.GM_Cookie();
applyObjectThis(utilsCookieManager);

const __GM_cookie__ = GM_cookie;
applyObjectThis(__GM_cookie__);

export {
	utils,
	domUtils as DOMUtils,
	__pops as pops,
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
	utilsCookieManager,
	__GM_cookie__ as GM_cookie,
};
