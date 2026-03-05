declare type CookieRuleData = {
  /** 唯一uuid */
  uuid: string;
  /** 是否启用 */
  enable: boolean;
  /** 规则名 */
  name: string;
  data: {
    /** 使用的api名，默认使用当前全局的Api */
    execApiName?: "use-global" | CookieManagerApiName;
    /** 匹配的网站 */
    url: string;
    /** 是否使用正则来匹配网站 */
    enableRegExpToMatchUrl: boolean;
    /** 匹配的Cookie名 */
    cookieName: string;
    /** 是否使用正则来匹配Cookie名 */
    enableRegExpToMatchCookieName: boolean;
    /** 对Cookie使用的操作模式，删除|延长 */
    operationMode: "delete" | "extended" | "extended-90" | "extended-180" | "extended-360";
    /** 备注 */
    remark: string;
  };
};
