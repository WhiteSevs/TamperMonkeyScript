import { SCRIPT_NAME } from "@components/base.env";
import Viewer from "viewerjs";

const _SCRIPT_NAME_ = SCRIPT_NAME || "小红书优化";
const __viewer = Viewer;

export { _SCRIPT_NAME_ as SCRIPT_NAME, __viewer as Viewer };
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
  cookieManager,
} from "@components/base.env";
