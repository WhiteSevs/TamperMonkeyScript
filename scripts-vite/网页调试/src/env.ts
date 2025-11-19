import { SCRIPT_NAME, utils } from "@components/base.env";
import { GM_setClipboard, unsafeWindow } from "ViteGM";

const _SCRIPT_NAME_ = SCRIPT_NAME || "网页调试";
const unsafeWin = unsafeWindow;
const console = unsafeWin.console;
/** 复制 */
const copy = GM_setClipboard || utils.copy.bind(utils);

export { _SCRIPT_NAME_ as SCRIPT_NAME, unsafeWin, console, copy };
export {
  utils,
  DOMUtils,
  log,
  MenuRegister,
  httpx,
  addStyle,
  pops,
  $,
  $$,
  MountVue,
  cookieManager,
} from "@components/base.env";
