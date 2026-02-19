import { SCRIPT_NAME } from "@components/env.base";
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
  MenuRegister,
  httpx,
  addStyle,
  pops,
  $,
  $$,
  DEBUG,
  cookieManager,
  AnyTouch,
} from "@components/env.base";

export { _SCRIPT_NAME_ as SCRIPT_NAME, Cryptojs, __DataPaging as DataPaging };
