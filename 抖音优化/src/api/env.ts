import { monkeyWindow, unsafeWindow, GM_info, GM_getValue, GM_setValue, GM_registerMenuCommand, GM_unregisterMenuCommand } from "$";

const utils: typeof import("@库/Utils/index") = ((monkeyWindow as any).Utils || (unsafeWindow as any).Utils).noConflict();
const DOMUtils: typeof import("@库/DOMUtils/index") = ((monkeyWindow as any).DOMUtils || (unsafeWindow as any).DOMUtils).noConflict();
const pops: typeof import("@库/pops") = ((monkeyWindow as any).pops || (unsafeWindow as any).pops)
const Qmsg: typeof import("@库/Qmsg") = ((monkeyWindow as any).Qmsg || (unsafeWindow as any).Qmsg)
const console = (unsafeWindow as any).console || (monkeyWindow as any).console;
const log = new utils.Log(GM_info, console);
const SCRIPT_NAME = GM_info?.script?.name || "抖音优化";

/* 配置控制台日志 */
log.config({
    debug: false,
    logMaxCount: 100,
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
export {
    utils,
    DOMUtils,
    pops,
    Qmsg,
    console,
    log,
    GM_Menu,
    SCRIPT_NAME
}