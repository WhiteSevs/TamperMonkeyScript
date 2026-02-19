import { SCRIPT_NAME } from "@components/env.base";
import Viewer from "viewerjs";

const _SCRIPT_NAME_ = SCRIPT_NAME || "小红书优化";
const __viewer = Viewer;

export { _SCRIPT_NAME_ as SCRIPT_NAME, __viewer as Viewer };
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
} from "@components/env.base";
