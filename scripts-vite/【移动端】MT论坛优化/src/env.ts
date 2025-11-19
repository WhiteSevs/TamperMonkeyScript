import { addStyle, httpx, pops, SCRIPT_NAME } from "@components/base.env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { GM_RESOURCE_MAPPING } from "@components/GM_Resource_Mapping";
import { HttpxCookieManager } from "@components/utils/HttpxCookieManager";

const _SCRIPT_NAME_ = SCRIPT_NAME || "【移动端】MT论坛优化";

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

const httpxCookieManager = new HttpxCookieManager([
  {
    key: "httpx-cookie-bbs.binmt.cc",
    hostname: /bbs.binmt.cc/g,
  },
]);

httpx.interceptors.request.use((data) => {
  httpxCookieManager.handle(data);
  return data;
});

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
  MenuRegister,
  httpx,
  addStyle,
  pops,
  $,
  $$,
  MountVue,
  VUE_ROOT_ID,
  cookieManager,
} from "@components/base.env";

export { _SCRIPT_NAME_ as SCRIPT_NAME };
