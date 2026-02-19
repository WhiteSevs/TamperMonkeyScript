import { SCRIPT_NAME } from "@components/env.base";
import { monkeyWindow, unsafeWindow } from "ViteGM";

const _SCRIPT_NAME_ = SCRIPT_NAME || "【移动端】bilibili优化";
const QRCodeJS = monkeyWindow.QRCode || unsafeWindow.QRCode;

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
  VUE_ROOT_ID,
  cookieManager,
  OriginPrototype,
} from "@components/env.base";

export { _SCRIPT_NAME_ as SCRIPT_NAME, QRCodeJS };
