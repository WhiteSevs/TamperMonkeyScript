import { SCRIPT_NAME } from "@components/env.base";

const _SCRIPT_NAME_ = SCRIPT_NAME || "简书优化";

export { _SCRIPT_NAME_ as SCRIPT_NAME };
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
