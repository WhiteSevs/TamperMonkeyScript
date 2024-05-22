import { monkeyWindow, unsafeWindow, GM_info, GM_getValue, GM_setValue, GM_registerMenuCommand, GM_unregisterMenuCommand, GM_xmlhttpRequest, GM_addStyle, GM_getResourceText } from "ViteGM";
import { SCRIPT_NAME as _SCRIPT_NAME_ } from "@/../vite.build";


const utils: typeof import("@库/Utils") = ((monkeyWindow as any).Utils || (unsafeWindow as any).Utils)?.noConflict();
const DOMUtils: typeof import("@库/DOMUtils") = ((monkeyWindow as any).DOMUtils || (unsafeWindow as any).DOMUtils)?.noConflict();
const pops: typeof import("@库/pops") = ((monkeyWindow as any).pops || (unsafeWindow as any).pops)
const Qmsg: typeof import("@库/Qmsg/dist/index").Qmsg = ((monkeyWindow as any).Qmsg || (unsafeWindow as any).Qmsg)
// const Viewer: typeof import("@库/Viewer") = ((monkeyWindow as any).Viewer || (unsafeWindow as any).Viewer)
const log = new utils.Log(GM_info, (unsafeWindow as any).console || (monkeyWindow as any).console);
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


export {
    utils,
    DOMUtils,
    pops,
    Qmsg,
    log,
    GM_Menu,
    SCRIPT_NAME,
    OriginPrototype,
    // Viewer,
    httpx,
}