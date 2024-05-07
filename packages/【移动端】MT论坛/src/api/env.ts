import { monkeyWindow, unsafeWindow } from "$";
import { Utils as ModuleUtils } from "@库/Utils";

const Utils: ModuleUtils = ((unsafeWindow as any).Utils || (monkeyWindow as any).Utils).noConflict();
const DOMUtils: typeof import("@库/DOMUtils/index") = ((unsafeWindow as any).DOMUtils || (monkeyWindow as any).DOMUtils).noConflict();
const pops: typeof import("@库/pops") = ((unsafeWindow as any).pops || (monkeyWindow as any).pops)
const Qmsg: typeof import("@库/Qmsg") = ((unsafeWindow as any).Qmsg || (monkeyWindow as any).Qmsg)

export {
    Utils,
    DOMUtils,
    pops,
    Qmsg,
}