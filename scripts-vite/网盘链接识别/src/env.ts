import { SCRIPT_NAME } from "@components/base.env";
import CryptoJS from "crypto-js";
import { unsafeWindow } from "ViteGM";
import DataPaging from "@whitesev/data-paging";

const _SCRIPT_NAME_ = SCRIPT_NAME || "网盘链接识别";
const __DataPaging = DataPaging;
const Cryptojs = CryptoJS ?? window.CryptoJS ?? unsafeWindow.CryptoJS;

export {
  utils,
  DOMUtils,
  log,
  GM_Menu,
  httpx,
  addStyle,
  pops,
  $,
  $$,
  MountVue,
  VUE_ELE_NAME_ID,
  DEBUG,
  cookieManager,
  AnyTouch,
} from "@components/base.env";

export { _SCRIPT_NAME_ as SCRIPT_NAME, Cryptojs, __DataPaging as DataPaging };
