declare type SwitcherDataOption = {
  /** 唯一uuid */
  uuid: string;
  /** 是否启用 */
  enable: boolean;
  /** 规则名 */
  name: string;
  data: {
    /** 使用的api名，默认使用当前全局的Api */
    execApiName?: "use-global" | CookieManagerApiName;
    /**
     * 该规则保存的所在的host
     */
    hostName: string;
    /**
     * cookie 数据
     */
    cookieList: (
      | CookieStoreData
      | GmCallbackCookie
      | import("@whitesev/utils/dist/types/src/types/UtilsGMCookie").UtilsGMCookieResult
    )[];
    /**
     * sessionStorage 数据
     */
    sessionStorageList: Record<string, string>[];
    /**
     * localStorage 数据
     */
    localStorageList: Record<string, string>[];
  };
};
