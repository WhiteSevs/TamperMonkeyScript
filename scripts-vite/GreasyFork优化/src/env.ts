import i18next from "i18next";
import { LanguageInit } from "./language/language";

LanguageInit();
const _SCRIPT_NAME_ = i18next.t("GreasyFork优化");

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
  pops,
  utils,
  VUE_ROOT_ID,
} from "@components/env.base";
export { _SCRIPT_NAME_ as SCRIPT_NAME };
