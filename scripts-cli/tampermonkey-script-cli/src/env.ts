import { SCRIPT_NAME } from "@components/env.base";

const _SCRIPT_NAME_ = SCRIPT_NAME || "Demo_Script_Name";

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
  VUE_ROOT_ID,
  cookieManager,
} from "@components/env.base";
