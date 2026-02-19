import { SCRIPT_NAME } from "@components/env.base";
import { monkeyWindow, unsafeWindow } from "ViteGM";
import { LoadingView } from "./utils/LoadingView";

const _SCRIPT_NAME_ = SCRIPT_NAME || "【移动端】百度系优化";
const showdown = monkeyWindow.showdown || unsafeWindow.showdown;
const loadingView = new LoadingView(true);

export {
  $,
  $$,
  addStyle,
  cookieManager,
  DOMUtils,
  httpx,
  log,
  MenuRegister,
  MountVue,
  OriginPrototype,
  pops,
  utils,
  VUE_ROOT_ID,
} from "@components/env.base";
export { loadingView, _SCRIPT_NAME_ as SCRIPT_NAME, showdown };
