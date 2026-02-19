import { SCRIPT_NAME } from "@components/env.base";
const _SCRIPT_NAME_ = SCRIPT_NAME || "抖音优化";

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
} from "@components/env.base";

export { _SCRIPT_NAME_ as SCRIPT_NAME };
