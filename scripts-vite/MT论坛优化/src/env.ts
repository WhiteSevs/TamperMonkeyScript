import { addStyle, pops, SCRIPT_NAME } from "@components/base.env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { GM_RESOURCE_MAPPING } from "@components/GM_Resource_Mapping";

const _SCRIPT_NAME_ = SCRIPT_NAME || "MT论坛优化";

if (import.meta.env.DEV) {
  import("viewerjs/dist/viewer.css?raw").then((cssText) => {
    addStyle(cssText.default);
  });
} else {
  CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
}
if (import.meta.env.DEV) {
  import("highlight.js/styles/github-dark.min.css?raw").then((cssText) => {
    addStyle(cssText.default);
  });
} else {
  CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Hljs);
}

pops.GlobalConfig.setGlobalConfig({
  mask: {
    enable: true,
  },
  drag: true,
});

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

export { _SCRIPT_NAME_ as SCRIPT_NAME };
