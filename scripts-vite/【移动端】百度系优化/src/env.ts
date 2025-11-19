import { SCRIPT_NAME } from "@components/base.env";
import { monkeyWindow, unsafeWindow } from "ViteGM";
import { LoadingView } from "./utils/LoadingView";

const _SCRIPT_NAME_ = SCRIPT_NAME || "【移动端】百度系优化";
const showdown = monkeyWindow.showdown || unsafeWindow.showdown;
const loadingView = new LoadingView(true);

export { _SCRIPT_NAME_ as SCRIPT_NAME, showdown, loadingView };
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
} from "@components/base.env";
