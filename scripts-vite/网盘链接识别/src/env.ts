import { SCRIPT_NAME } from "@components/env.base";
import DataPaging from "@whitesev/data-paging";
import CryptoJS from "crypto-js";
import { unsafeWindow } from "ViteGM";

const _SCRIPT_NAME_ = SCRIPT_NAME || "网盘链接识别";
const __DataPaging = DataPaging;
const Cryptojs = CryptoJS ?? window.CryptoJS ?? unsafeWindow.CryptoJS;

export {
  $,
  $$,
  addStyle,
  AnyTouch,
  cookieManager,
  DEBUG,
  DOMUtils,
  httpx,
  log,
  MenuRegister,
  pops,
  utils,
} from "@components/env.base";

export { Cryptojs, __DataPaging as DataPaging, _SCRIPT_NAME_ as SCRIPT_NAME };
