interface GmVoidCallback {
  (error: any): void;
}

interface GmPartitionKeyType {
  topLevelSite?: string;
}
interface GmCallbackCookie {
  domain: string;
  expirationDate?: number;
  firstPartyDomain?: string;
  partitionKey?: GmPartitionKeyType;
  hostOnly: boolean;
  httpOnly: boolean;
  name: string;
  path: string;
  sameSite: string;
  secure: boolean;
  session: boolean;
  value: string;
}
interface GmCookieListOptions {
  url?: string;
  domain?: string;
  name?: string;
  path?: string;
  partitionKey?: GmPartitionKeyType;
}
interface GmCookieSetOptions {
  url?: string;
  name: string;
  value: string;
  domain?: string;
  firstPartyDomain?: string;
  partitionKey?: GmPartitionKeyType;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
  expirationDate?: number;
}
interface GmCookieDeleteOptions {
  url?: string;
  name: string;
  firstPartyDomain?: string;
  partitionKey?: GmPartitionKeyType;
}
interface GmCookieListCallback {
  (cookies: GmCallbackCookie[], error: any): void;
}
interface GmCookieType {
  list(details: GmCookieListOptions, callback?: GmCookieListCallback): void;
  set(details: GmCookieSetOptions, callback?: GmVoidCallback): void;
  delete(details: GmCookieDeleteOptions, callback?: GmVoidCallback): void;
}
interface GmAsyncCookieType {
  list(): Promise<GmCallbackCookie[]>;
  list(details: GmCookieListOptions): Promise<GmCallbackCookie[]>;
  set(details: GmCookieSetOptions): Promise<void>;
  delete(details: GmCookieDeleteOptions): Promise<void>;
}
interface GmCookieType {
  list(details: GmCookieListOptions, callback?: GmCookieListCallback): void;
  set(details: GmCookieSetOptions, callback?: GmVoidCallback): void;
  delete(details: GmCookieDeleteOptions, callback?: GmVoidCallback): void;
}

/**
 * @see https://www.tampermonkey.net/documentation.php#api:GM_cookie.list
 * @see https://www.tampermonkey.net/documentation.php#api:GM_cookie.set
 * @see https://www.tampermonkey.net/documentation.php#api:GM_cookie.delete
 * @available tampermonkey
 */
declare const GM_cookie: GmCookieType;

declare const GM: {
  cookie: GmAsyncCookieType;
};

export interface GMCookieInstance {
  /**
   * 记录 cookie 域名的字符串。
   */
  domain: string;
  /**
   * Unix 时间戳（以秒为单位表示），记录 cookie 的到期日期。
   */
  expirationDate?: number | null;
  firstPartyDomain?: string;
  partitionKey?: {
    topLevelSite?: string;
  };
  hostOnly: boolean;
  httpOnly: boolean;
  /**
   * 记录 cookie 名称的字符串。
   */
  name: string;
  /**
   * 记录 cookie 路径的字符串。
   */
  path: string;
  sameSite: string;
  /**
   * 一个布尔值，表示 cookie 是否仅在安全上下文中使用（true）或（false）。
   */
  secure: boolean;
  session: boolean;
  /**
   * 记录 cookie 的值的字符串。
   */
  value: string;
}
