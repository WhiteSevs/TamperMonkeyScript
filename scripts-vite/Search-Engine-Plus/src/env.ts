import { SCRIPT_NAME } from "@components/env.base";

const _SCRIPT_NAME_ = SCRIPT_NAME || "SearchEnginePlus";

// const BACKGROUND_URL = "https://bing.img.run/uhd.php";
// const RANDOM_BACKGROUND_URL = "https://bing.img.run/rand_uhd.php";
const BACKGROUND_URL = "https://api.paugram.com/bing";
const RANDOM_BACKGROUND_URL = "https://api.paugram.com/bing";

export { _SCRIPT_NAME_ as SCRIPT_NAME, BACKGROUND_URL, RANDOM_BACKGROUND_URL };
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
