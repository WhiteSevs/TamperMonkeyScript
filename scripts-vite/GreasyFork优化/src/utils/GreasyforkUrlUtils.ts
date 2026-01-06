import { utils } from "@/env";

export const GreasyforkUrlUtils = {
  /**
   * 获取脚本安装的链接
   * @param scriptId
   * @param scriptVersion
   * @param scriptName
   * @returns
   */
  getInstallUrl(scriptId: string | number, scriptVersion: string | number, scriptName?: string) {
    if (utils.isNotNull(scriptName)) {
      scriptName = "/" + scriptName;
    } else {
      scriptName = "";
    }
    return `https://update.${window.location.hostname}/scripts/${scriptId}/${scriptVersion}${scriptName}.user.js`;
  },
  /**
   * 获取脚本的代码页面链接
   * @param scriptId
   * @param scriptVersion
   * @returns
   */
  getCodeUrl(scriptId: string | number, scriptVersion?: string | number | null) {
    if (utils.isNull(scriptVersion)) {
      scriptVersion = "";
    }
    return `/scripts/${scriptId}/code?version=${scriptVersion}`;
  },
  /**
   * 获取代码搜索地址
   * @param url
   */
  getCodeSearchUrl(url: string) {
    return "/zh-CN/scripts/code-search?c=" + encodeURIComponent(url);
  },
  /**
   * 获取脚本的信息
   *
   * 注意是跨域请求
   * @param scriptId 脚本id
   */
  getScriptInfoUrl(scriptId: string | number) {
    return `/scripts/${scriptId}.json`;
  },
  /**
   * 获取脚本主页地址
   *
   * @param scriptId
   */
  getScriptHomeUrl(scriptId: string | number) {
    return `/scripts/${scriptId}`;
  },
  /**
   * 获取管理地址
   * @param url
   */
  getAdminUrl(url: string) {
    return url + "/admin";
  },
  /**
   * 从字符串中提取Id
   * @param text
   * @default window.location.pathname
   */
  getScriptId(text?: string) {
    return (text || window.location.pathname)?.match(/\/scripts\/([\d]+)/i)?.[1];
  },
  /**
   * 从字符串中提取用户id
   * @param text
   * @default window.location.pathname
   */
  getUserId(text?: string) {
    return (text || window.location.pathname).match(/\/users\/([\d]+)/i)?.[1];
  },
  /**
   * 从字符串中提取收藏集的id
   * @param text
   * @default window.location.pathname
   */
  getSetsId(text?: string) {
    return (text || window.location.pathname).match(/\/sets\/([\d]+)\//)?.[1];
  },
  /**
   * 获取举报地址
   */
  getReportUrl(item_class: "script" | "discussion" | "user", item_id: string | number) {
    return `${window.location.origin}/reports/new?item_class=${item_class}&item_id=${item_id}`;
  },
  /**
   * 从字符串中提取脚本名
   * @param text
   * @default window.location.pathname
   */
  getScriptName(text?: string) {
    let pathname = window.location.pathname;
    if (text != null) {
      pathname = new URL(text).pathname;
    }
    pathname = decodeURIComponent(pathname);
    const pathnameSplit = pathname.split("/");
    for (const name of pathnameSplit) {
      const nameMatch = name.match(/[\d]+/);
      if (nameMatch && nameMatch.length) {
        return nameMatch[1];
      }
    }
  },
  /**
   * 获取需要切换语言的Url
   * @default "zh-CN"
   */
  getSwitchLanguageUrl(localeLanguage = "zh-CN") {
    let url = window.location.origin;
    const urlSplit = window.location.pathname.split("/");
    urlSplit[1] = localeLanguage;
    url = url + urlSplit.join("/");
    url += window.location.search;
    if (window.location.search === "") {
      url += "?locale_override=1";
    } else if (!window.location.search.includes("locale_override=1")) {
      url += "&locale_override=1";
    }
    return url;
  },
};
