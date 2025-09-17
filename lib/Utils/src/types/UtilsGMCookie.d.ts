export interface UtilsGMCookieResult {
  /** 为 window.location.hostname */
  domain: string;
  /** 过期时间 */
  expirationDate: null;
  hostOnly: true;
  httpOnly: false;
  /** Cookie名 */
  name: string;
  /** Cookie的路径 */
  path: "/";
  /** Cookie是否同源策略 */
  sameSite: "unspecified";
  secure: true;
  session: false;
  /** Cookie值 */
  value: string;
}

export interface UtilsGMCookieListOptions {
  /** 默认为当前的url */
  url?: string;
  /**
   * Cookie所在域
   * @default window.location.hostname
   */
  domain?: string;
  /** 需要检索的Cookie的名字 */
  name: string | RegExp;
  /**
   * 需要检索的Cookie的路径
   * @default "/"
   */
  path?: string;
}

export interface UtilsGMCookieSetOptions {
  /**
   * 默认为当前的url
   */
  url?: string;
  /**
   * Cookie所在域
   *
   * 不填的话会默认在window.location.hostname的前面加上.
   */
  domain?: string;
  /** 需要检索的Cookie的名字 */
  name: string;
  /**
   * 需要检索的Cookie的路径
   * @default "/"
   */
  path?: string;
  /** Cookie值 */
  value: string | number;
  /**
   * 确保Cookie只在通过安全协议（如HTTPS）的情况下传输
   * @default true
   */
  secure?: boolean;
  /**
   * 是否防止JavaScript代码访问Cookie
   * @default false
   */
  httpOnly?: boolean;
  /**
   * Cookie过期时间的时间戳，默认为30天
   * @default Math.floor(Date.now()) + 60 * 60 * 24 * 30
   */
  expirationDate?: number;
}

export interface UtilsGMCookieDeleteOptions {
  /** 需要检索的Cookie的名字 */
  name: string;
  /** 默认为当前的url */
  url?: string;
  /**
   * Cookie的路径
   * @default "/"
   */
  path?: string;
  /**
   * Cookie所在域
   */
  firstPartyDomain?: string;
}

export interface WindowApiOption {
  window: Window & typeof globalThis;
  document: Document;
}
