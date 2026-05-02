import { Panel } from "@components/setting/panel";
import Utils from "@whitesev/utils";

export const CookieManager = new Utils.CookieManagerService({
  baseCookieHandler(defaultCookieHandler) {
    return Panel.getValue("cookie-manager-api", defaultCookieHandler);
  },
});
