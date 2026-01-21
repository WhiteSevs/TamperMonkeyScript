import { AnyTouch, cookieManager, DOMUtils, httpx, MenuRegister, pops, unsafeWin, utils, console, $, $$ } from "@/env";
import { GlobalSettingConfig } from "@/setting/config";
import { OriginPrototype } from "@components/base.env";
import { Panel } from "@components/setting/panel";
import { ChromeXt } from "ViteGMChromeXt";
import Qmsg from "qmsg";
import {
  CAT_clearProxy,
  CAT_click,
  CAT_fileStorage,
  CAT_scriptLoaded,
  CAT_setProxy,
  CAT_userConfig,
} from "ViteGMScriptCat";
import {
  GM,
  GM_addElement,
  GM_addStyle,
  GM_addValueChangeListener,
  GM_audio,
  GM_cookie,
  GM_deleteValue,
  GM_deleteValues,
  GM_download,
  GM_getResourceText,
  GM_getResourceURL,
  GM_getTab,
  GM_getTabs,
  GM_getValue,
  GM_getValues,
  GM_info,
  GM_listValues,
  GM_log,
  GM_notification,
  GM_openInTab,
  GM_registerMenuCommand,
  GM_removeValueChangeListener,
  GM_saveTab,
  GM_setClipboard,
  GM_setValue,
  GM_setValues,
  GM_unregisterMenuCommand,
  GM_webRequest,
  GM_xmlhttpRequest,
  unsafeWindow,
} from "ViteGM";

export const DebugBridge = {
  init() {
    this.register();
  },
  /**
   * 注册
   */
  register() {
    const exportName = Panel.getValue<string>(GlobalSettingConfig.registerDebugBridgeApi.key);
    if (typeof exportName !== "string" || exportName.trim() === "") {
      return;
    }
    /**
     * GM
     */
    const GMApi = {
      window: window,
      unsafeWindow: unsafeWindow,
      GM: typeof GM !== "undefined" ? GM : void 0,
      GM_addElement: typeof GM_addElement !== "undefined" ? GM_addElement : void 0,
      GM_addStyle: typeof GM_addStyle !== "undefined" ? GM_addStyle : void 0,
      GM_download: typeof GM_download !== "undefined" ? GM_download : void 0,
      GM_getResourceText: typeof GM_getResourceText !== "undefined" ? GM_getResourceText : void 0,
      GM_getResourceURL: typeof GM_getResourceURL !== "undefined" ? GM_getResourceURL : void 0,
      GM_info: typeof GM_info !== "undefined" ? GM_info : void 0,
      GM_log: typeof GM_log !== "undefined" ? GM_log : void 0,
      GM_notification: typeof GM_notification !== "undefined" ? GM_notification : void 0,
      GM_openInTab: typeof GM_openInTab !== "undefined" ? GM_openInTab : void 0,
      GM_registerMenuCommand: typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : void 0,
      GM_unregisterMenuCommand: typeof GM_unregisterMenuCommand !== "undefined" ? GM_unregisterMenuCommand : void 0,
      GM_setClipboard: typeof GM_setClipboard !== "undefined" ? GM_setClipboard : void 0,
      GM_getTab: typeof GM_getTab !== "undefined" ? GM_getTab : void 0,
      GM_saveTab: typeof GM_saveTab !== "undefined" ? GM_saveTab : void 0,
      GM_getTabs: typeof GM_getTabs !== "undefined" ? GM_getTabs : void 0,
      GM_setValue: typeof GM_setValue !== "undefined" ? GM_setValue : void 0,
      GM_getValue: typeof GM_getValue !== "undefined" ? GM_getValue : void 0,
      GM_getValues: typeof GM_getValues !== "undefined" ? GM_getValues : void 0,
      GM_deleteValue: typeof GM_deleteValue !== "undefined" ? GM_deleteValue : void 0,
      GM_listValues: typeof GM_listValues !== "undefined" ? GM_listValues : void 0,
      GM_addValueChangeListener: typeof GM_addValueChangeListener !== "undefined" ? GM_addValueChangeListener : void 0,
      GM_removeValueChangeListener:
        typeof GM_removeValueChangeListener !== "undefined" ? GM_removeValueChangeListener : void 0,
      GM_xmlhttpRequest: typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : void 0,
      GM_audio: typeof GM_audio !== "undefined" ? GM_audio : void 0,
      GM_setValues: typeof GM_setValues !== "undefined" ? GM_setValues : void 0,
      GM_deleteValues: typeof GM_deleteValues !== "undefined" ? GM_deleteValues : void 0,
    };

    /**
     * GM Beta
     */
    const GMBetaApi = {
      GM_cookie:
        typeof GM_cookie === "undefined" || (typeof GM_cookie !== "undefined" && GM_cookie == null)
          ? void 0
          : GM_cookie,
      GM_webRequest:
        typeof GM_webRequest === "undefined" || (typeof GM_webRequest !== "undefined" && GM_webRequest == null)
          ? undefined
          : void 0,
    };

    /**
     * ChromeXt的Api
     */
    const ChromeXtApi = {
      ChromeXt: typeof ChromeXt !== "undefined" ? ChromeXt : void 0,
    };

    /**
     * ScriptCat的Api
     */
    const ScriptCatApi = {
      CAT_userConfig: typeof CAT_userConfig !== "undefined" ? CAT_userConfig : void 0,
      CAT_fileStorage: typeof CAT_fileStorage !== "undefined" ? CAT_fileStorage : void 0,
      CAT_scriptLoaded: typeof CAT_scriptLoaded !== "undefined" ? CAT_scriptLoaded : void 0,
    };
    /**
     * ScriptCat的beta api
     */
    const ScriptCatBetaApi = {};
    /**
     * ScriptCat的弃用api
     */
    const ScriptCatDeprecatedApi = {
      CAT_setProxy: typeof CAT_setProxy !== "undefined" ? CAT_setProxy : void 0,
      CAT_clearProxy: typeof CAT_clearProxy !== "undefined" ? CAT_clearProxy : void 0,
      CAT_click: typeof CAT_click !== "undefined" ? CAT_click : void 0,
    };

    /**
     * 其它api
     */
    const otherApi = {
      OriginPrototype: OriginPrototype,
      $: $,
      $$: $$,
      AnyTouch: AnyTouch,
      cookieManager: cookieManager,
      log: new utils.Log(GM_info, unsafeWindow.console || console),
      httpx: httpx,
      utils: utils,
      DOMUtils: DOMUtils,
      pops: pops,
      Qmsg: Qmsg,
      MenuRegister: MenuRegister,
      loadScript: (url: string) => {
        const $script = document.createElement("script");
        $script.src = url;
        return new Promise((resolve) => {
          $script.onload = () => {
            $script.remove();
            resolve(true);
          };
          (document.head || document.documentElement).appendChild($script);
        });
      },
    };
    /** window环境api */
    const windowApi = {
      window: window,
      document: document,
      globalThis: globalThis,
      self: self,
      topWindow: top?.window,
    };
    /** 导出到全局变量的api */
    const exportApi = {
      ...GMApi,
      ...GMBetaApi,
      ...ChromeXtApi,
      ...ScriptCatApi,
      ...ScriptCatBetaApi,
      ...ScriptCatDeprecatedApi,
      ...otherApi,
      ...windowApi,
    };
    Object.freeze(exportApi);
    Reflect.set(unsafeWin, exportName, exportApi);
    if (
      // @ts-expect-error
      typeof window[exportName] === "undefined" ||
      //   @ts-expect-error
      (typeof window[exportName] !== "undefined" && window[exportName] == null)
    ) {
      // 如果不存在，继续注册尝试
      Reflect.set(window, exportName, exportApi);
    }
    console.log(`Debug Api${Panel.isTopWindow() ? "" : "（iframe）"}：` + exportName);
  },
};
