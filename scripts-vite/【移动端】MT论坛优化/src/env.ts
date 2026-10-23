import { addStyle, httpx, log, pops, SCRIPT_NAME } from "@components/env.base";
import { GM_RESOURCE_MAPPING } from "@components/GM_Resource_Mapping";
import { CommonUtil } from "@components/utils/CommonUtil";
import { HttpxCookieManager } from "@components/utils/HttpxCookieManager";
import Qmsg from "qmsg";
import { extractAcwV2Arg1, getAcwScV2ByArg1, isIncludeAcwV2 } from "./sign/acw_v2";

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

let acw_sc__v2: string | null = null;

const httpxCookieManager = new HttpxCookieManager([
  {
    key: "httpx-cookie-bbs.binmt.cc",
    hostname: /bbs.binmt.cc/g,
  },
  {
    key: "httpx-default-cookie-bbs.binmt.cc",
    hostname: /bbs.binmt.cc/g,
    getCookie() {
      if (!acw_sc__v2) return;
      return {
        key: "acw_sc__v2",
        value: acw_sc__v2,
      };
    },
  },
]);

httpx.interceptors.request.use((data) => {
  httpxCookieManager.handle(data);
  return data;
});

httpx.interceptors.response.use((data, resolveOption) => {
  try {
    const urlInst = new URL(CommonUtil.fixUrl(data.finalUrl));
    const responseText = data.responseText;
    if (
      !resolveOption.InterceptConfig.isRetry &&
      urlInst.hostname.endsWith(location.hostname) &&
      isIncludeAcwV2(responseText)
    ) {
      const acw_sc__v2_arg1 = extractAcwV2Arg1(responseText);
      if (acw_sc__v2_arg1) {
        log.info("获取arg1: " + acw_sc__v2_arg1);
        acw_sc__v2 = getAcwScV2ByArg1(acw_sc__v2_arg1);
        log.info("生成acw_sc__v2: " + acw_sc__v2);
      }
      resolveOption.isSuccess = false;
      resolveOption.InterceptConfig.isRetry = true;
    }
  } catch {}
  return data;
});

pops.GlobalConfig.setGlobalConfig({
  mask: {
    enable: true,
  },
  drag: true,
});

Qmsg.config({
  isTextWrap: true,
});

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
