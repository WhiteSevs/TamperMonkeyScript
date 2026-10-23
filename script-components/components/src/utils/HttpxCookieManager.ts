import type { HttpxRequestOption } from "@whitesev/utils/dist/types/src/types/Httpx.js";
import { log, utils } from "../env.base";
import { Panel } from "../setting/panel";
import { PanelSettingConfig } from "../setting/panel-setting-config";

type HttpxCookieManagerRule = {
  /** PopsPanel存储的键名 */
  key: string;
  /** 匹配url的hostname的正则或字符串 */
  hostname: RegExp | string;
  /** 获取cookie的值，如果为空则默认为通过Panel.getValue(key)来获取 */
  getCookie?():
    | IArray<
        | {
            key: string;
            value: string;
          }
        | string
      >
    | undefined
    | null;
};

class HttpxCookieManager {
  $data = {
    /** 是否启用 */
    get enable() {
      return Panel.getValue<boolean>(
        PanelSettingConfig.httpx_cookie_manager_enable.key,
        PanelSettingConfig.httpx_cookie_manager_enable.defaultValue
      );
    },
    /**
     * 是否使用document.cookie
     * + true 使用document.cookie额外添加cookie的header
     */
    get useDocumentCookie() {
      return Panel.getValue<boolean>(
        PanelSettingConfig.httpx_cookie_manager_use_document_cookie.key,
        PanelSettingConfig.httpx_cookie_manager_use_document_cookie.defaultValue
      );
    },
    /**
     * cookie规则，在这里填入
     * @example
     * {
     *     key: "cookie-example-com",
     *     hostname: "example.com",
     * }
     */
    cookieRule: <HttpxCookieManagerRule[]>[],
  };
  /**
   * cookie规则，在这里填入
   * @param cookieRule
   * @example
   * {
   *     key: "cookie-example-com",
   *     hostname: "example.com",
   * }
   */
  constructor(cookieRule: HttpxCookieManagerRule[]) {
    if (Array.isArray(cookieRule)) {
      this.$data.cookieRule = cookieRule;
    }
  }
  /**
   * 补充cookie末尾分号
   */
  fixCookieSplit(str: string) {
    if (utils.isNotNull(str) && !str.trim().endsWith(";")) {
      // 补充;
      str += ";";
    }
    return str;
  }
  /**
   * 合并两个cookie
   * @param targetCookie
   * @param newCookie
   */
  concatCookie(targetCookie: string, newCookie: string) {
    if (utils.isNull(targetCookie)) {
      return newCookie;
    }
    targetCookie = targetCookie.trim();
    newCookie = newCookie.trim();
    targetCookie = this.fixCookieSplit(targetCookie);
    if (newCookie.startsWith(";")) {
      newCookie = newCookie.substring(1);
    }
    return targetCookie.concat(newCookie);
  }
  /**
   * 处理cookie
   * @param details
   * @returns
   */
  handle(details: Required<HttpxRequestOption>) {
    if (details.fetch) {
      // fetch不做处理
      return;
    }

    if (!this.$data.enable) {
      // 未启用
      return;
    }
    let ownCookie = "";

    let url = details.url;
    // 完善Url
    if (url.startsWith("//")) {
      url = window.location.protocol + url;
    }
    let urlInst = new URL(url);
    if (
      this.$data.useDocumentCookie &&
      urlInst.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))
    ) {
      // 通过document.cookie获取添加
      ownCookie = this.concatCookie(ownCookie, document.cookie.trim());
    }
    for (let index = 0; index < this.$data.cookieRule.length; index++) {
      const rule = this.$data.cookieRule[index];
      if (urlInst.hostname.match(rule.hostname)) {
        // 域名匹配成功
        let cookie: string | undefined = "";
        if (typeof rule.getCookie == "function") {
          const __cookieValue = rule.getCookie();
          if (Array.isArray(__cookieValue)) {
            for (const item of __cookieValue) {
              if (typeof item == "string") {
                cookie = this.concatCookie(cookie, item);
              } else if (typeof item == "object" && item) {
                cookie = this.concatCookie(cookie, item.key + "=" + item.value);
              }
            }
          }
        } else {
          cookie = Panel.getValue<string | undefined>(rule.key);
        }
        if (utils.isNull(cookie)) {
          continue;
        }
        ownCookie = this.concatCookie(ownCookie, cookie);
      }
    }

    if (utils.isNotNull(ownCookie)) {
      if (details.headers && details.headers["Cookie"]) {
        details.headers.Cookie = this.concatCookie(details.headers.Cookie, ownCookie);
      } else {
        details.headers["Cookie"] = ownCookie;
      }
      log.info("Httpx => 设置cookie:", details);
    }

    if (details.headers && details.headers.Cookie != null && utils.isNull(details.headers.Cookie)) {
      // 有cookie，但是cookie是空的
      // 删除该设置
      delete details.headers.Cookie;
    }
  }
}

export { HttpxCookieManager, type HttpxCookieManagerRule };
