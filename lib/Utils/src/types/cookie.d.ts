import type { CookieStoreData } from "./cookie_store";
import type { GMCookieInstance } from "./gm_cookie";

export type CookieManagerApiName = "document.cookie" | "cookieStore" | "GM_cookie" | "GM.cookie";

export type CookieConstructOptions = {
  /**
   * 指定当前用于编辑Cookie的函数
   * @default "document.cookie"
   */
  baseCookieHandler?:
    | CookieManagerApiName
    | undefined
    | null
    | ((
        /**
         * 默认的Cookie管理函数
         */
        defaultCookieHandler: CookieManagerApiName
      ) => CookieManagerApiName | undefined | null);
};

export type CookieManagerGetOptions =
  | RequiredProperty<Partial<GMCookieInstance>, "name">
  | RequiredProperty<Partial<CookieStoreData>, "name">;

export type CookieManagerSetOptions =
  | RequiredProperty<Partial<GMCookieInstance>, "name" | "value">
  | RequiredProperty<Partial<CookieStoreData>, "name" | "value">;

export type CookieManagerDeleteOptions =
  | RequiredProperty<Partial<GMCookieInstance>, "name">
  | RequiredProperty<Partial<CookieStoreData>, "name">;
