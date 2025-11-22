import DOMUtils from "@whitesev/domutils";
import pops from "@whitesev/pops";
import Utils from "@whitesev/utils";
import {
  GM_getValue,
  GM_info,
  GM_registerMenuCommand,
  GM_setValue,
  GM_unregisterMenuCommand,
  GM_xmlhttpRequest,
  monkeyWindow,
  unsafeWindow,
} from "ViteGM";
import Qmsg from "qmsg";
import type { QmsgPosition } from "qmsg/dist/src/types/config";
import { createApp } from "vue";
import { GM_RESOURCE_MAPPING } from "./GM_Resource_Mapping";
import { Panel } from "./setting/panel";
import { PanelSettingConfig } from "./setting/panel-setting-config";
import { CommonUtil } from "./utils/CommonUtil";

const utils = Utils.noConflict();
const domUtils = DOMUtils.noConflict();
const __pops__ = pops;
// const showdown: typeof import("@lib/showdown") =
// 	(monkeyWindow as any).showdown || (unsafeWindow as any).showdown;
const log = new utils.Log(GM_info, unsafeWindow.console || monkeyWindow.console);
/**
 * 脚本名
 */
const SCRIPT_NAME = GM_info?.script?.name || import.meta.env.SCRIPT_NAME;
/**
 * 手势库
 */
const AnyTouch = pops.config.Utils.AnyTouch();
/**
 * 是否为调试模式
 *
 * 当`dev`时，自动开启调试模式
 */
const DEBUG = import.meta.env.DEV ?? false;

// 配置控制台日志
log.config({
  debug: false,
  logMaxCount: DEBUG ? 10000 : 250,
  autoClearConsole: true,
  tag: true,
});

// 配置Toast
Qmsg.config({
  isHTML: true,
  autoClose: true,
  showClose: false,
  consoleLogContent(qmsgInst) {
    const qmsgType = qmsgInst.setting.type;
    if (qmsgType === "loading") {
      return false;
    }
    const content = qmsgInst.setting.content;
    if (qmsgType === "warning") {
      log.warn(content);
    } else if (qmsgType === "error") {
      log.error(content);
    } else {
      log.info(content);
    }
    return true;
  },
  get position() {
    return Panel.getValue<QmsgPosition>(
      PanelSettingConfig.qmsg_config_position.key,
      PanelSettingConfig.qmsg_config_position.defaultValue
    );
  },
  get maxNums() {
    return Panel.getValue(
      PanelSettingConfig.qmsg_config_maxnums.key,
      PanelSettingConfig.qmsg_config_maxnums.defaultValue
    );
  },
  get showReverse() {
    return Panel.getValue(
      PanelSettingConfig.qmsg_config_showreverse.key,
      PanelSettingConfig.qmsg_config_showreverse.defaultValue
    );
  },
  get zIndex() {
    let maxZIndex = Utils.getMaxZIndex();
    let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
    return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
  },
});

/* 配置pops的默认选项 */
__pops__.GlobalConfig.setGlobalConfig({
  zIndex: () => {
    const maxZIndex = Utils.getMaxZIndex(void 0, void 0, ($ele) => {
      if (($ele as HTMLElement)?.classList?.contains("qmsg-shadow-container")) {
        return false;
      }
      if (($ele as HTMLElement)?.closest("qmsg") && $ele.getRootNode() instanceof ShadowRoot) {
        return false;
      }
    });
    const popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
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
  drag: true,
});

/**
 * 油猴菜单注册器
 */
const MenuRegister = new utils.GM_Menu({
  GM_getValue,
  GM_setValue,
  GM_registerMenuCommand,
  GM_unregisterMenuCommand,
});

const httpx = new utils.Httpx({
  xmlHttpRequest: GM_xmlhttpRequest,
  logDetails: DEBUG,
});

// 添加请求拦截器
httpx.interceptors.request.use((data) => {
  return data;
});

// 添加响应拦截器
httpx.interceptors.response.use(void 0, (data) => {
  log.error("拦截器-请求错误", data);
  if (data.type === "onabort") {
    Qmsg.warning("请求取消", { consoleLogContent: true });
  } else if (data.type === "onerror") {
    Qmsg.error("请求异常", { consoleLogContent: true });
  } else if (data.type === "ontimeout") {
    Qmsg.error("请求超时", { consoleLogContent: true });
  } else {
    Qmsg.error("其它错误", { consoleLogContent: true });
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

/**
 * 添加样式
 */
const addStyle = domUtils.addStyle.bind(domUtils);

/**
 * 元素选择器
 */
const $ = DOMUtils.selector.bind(DOMUtils);
/**
 * 多组元素选择器
 */
const $$ = DOMUtils.selectorAll.bind(DOMUtils);

/**
 * Vue的根元素的id
 */
const VUE_ROOT_ID = "vite-app";

/**
 * 注册vue、element-plus、element-plus/icons-vue
 * @param rootComponent vue实例
 * @param plugins 插件之类的，如vue-router、Element-Plus
 */
const MountVue = async function (rootComponent: any, plugins: any[] = []) {
  CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.ElementPlus);
  await DOMUtils.ready();
  const app = createApp(rootComponent);
  const $mount = DOMUtils.createElement("div", {
    id: VUE_ROOT_ID,
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
  plugins.forEach((item) => {
    app.use(item);
  });
  const mountResult = app.mount($mount);
  return mountResult;
};

/**
 * cookie管理
 */
const cookieManager = new utils.GM_Cookie();

// dev使用
if (import.meta.env.DEV) {
  const registerObject = { httpx, cookieManager };
  Object.keys(registerObject).forEach((key) => {
    Reflect.set(unsafeWindow, key, registerObject[key as keyof typeof registerObject]);
  });
}

export {
  $,
  $$,
  addStyle,
  AnyTouch,
  cookieManager,
  DEBUG,
  domUtils as DOMUtils,
  httpx,
  log,
  MenuRegister,
  MountVue,
  OriginPrototype,
  __pops__ as pops,
  SCRIPT_NAME,
  utils,
  VUE_ROOT_ID,
};
