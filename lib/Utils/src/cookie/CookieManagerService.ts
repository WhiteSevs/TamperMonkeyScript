import type {
  CookieConstructOptions,
  CookieManagerApiName,
  CookieManagerDeleteOptions,
  CookieManagerGetOptions,
  CookieManagerSetOptions,
} from "../types/cookie";
import type { CookieStoreData } from "../types/cookie_store";
import { type GmCallbackCookie, type GMCookieInstance } from "../types/gm_cookie";
import { DocumentCookieHandler } from "./DocumentCookieHandler";

const CookieManagerApiNameList: CookieManagerApiName[] = ["document.cookie", "cookieStore", "GM_cookie", "GM.cookie"];

const isSupportGM_cookie = () => {
  if (
    // @ts-ignore
    ((typeof GM_cookie === "object" && GM_cookie) || typeof GM_cookie === "function") &&
    // @ts-ignore
    typeof GM_cookie?.list === "function" &&
    // @ts-ignore
    typeof GM_cookie?.set === "function" &&
    // @ts-ignore
    typeof GM_cookie?.delete === "function"
  ) {
    return true;
  }
  return false;
};

const isSupportGM_async_cookie = () => {
  if (
    // @ts-ignore
    ((typeof GM === "object" && GM) || typeof GM === "function") &&
    // @ts-ignore
    ((typeof GM?.cookie === "object" && GM?.cookie) || typeof GM?.cookie === "function") &&
    // @ts-ignore
    typeof GM?.cookie?.list === "function" &&
    // @ts-ignore
    typeof GM?.cookie?.set === "function" &&
    // @ts-ignore
    typeof GM?.cookie?.delete === "function"
  ) {
    return true;
  }
  return false;
};

const __GM_cookie__ = (() =>
  isSupportGM_cookie() // @ts-ignore
    ? GM_cookie
    : void 0)();

const __GM_async_cookie__ = (() =>
  isSupportGM_async_cookie() // @ts-ignore
    ? GM?.cookie
    : void 0)();

const __document_cookie__ = new DocumentCookieHandler();

export class CookieManagerService {
  __defaultCookieHandler = "document.cookie" as CookieManagerApiName;
  __option = {} as CookieConstructOptions;
  /**
   * @param apiName 强制使用Api的名称，是否使用保存的Api名称
   */
  constructor(
    option: CookieConstructOptions = {
      baseCookieHandler: this.__defaultCookieHandler,
    }
  ) {
    this.setOptions(option);
  }
  /**
   * 所有操作Cookie的函数类型集合
   */
  get totalCookieManagerApiNameList() {
    return CookieManagerApiNameList;
  }
  /**
   * 当前操作Cookie的函数
   */
  get baseCookieHandler() {
    const optionBaseCookieHandler =
      typeof this.__option.baseCookieHandler === "function"
        ? this.__option.baseCookieHandler(this.__defaultCookieHandler)
        : this.__option.baseCookieHandler;
    const baseCookieHandler = optionBaseCookieHandler ?? this.__defaultCookieHandler;
    if (typeof baseCookieHandler === "string") {
      if (!this.totalCookieManagerApiNameList.includes(baseCookieHandler)) {
        throw new Error(`unknown cookie handler: ${baseCookieHandler}`);
      }
    } else {
      throw new TypeError(`unknown cookie handler type: ${baseCookieHandler}`);
    }
    return baseCookieHandler;
  }
  /**
   * 获取Cookie管理函数体
   */
  get cookieManager() {
    if (this.baseCookieHandler === "GM_cookie") {
      return {
        list(options: object, callback: (cookieListResult: GmCallbackCookie[]) => void) {
          __GM_cookie__!.list(options, (result: any) => {
            callback(result);
          });
        },
        set(cookieInfo: GMCookieInstance, callback: (error?: string | null) => void) {
          __GM_cookie__!.set(<NonNullableProperty<GMCookieInstance, "expirationDate">>cookieInfo, (result: any) => {
            callback(result);
          });
        },
        delete(cookieInfo: GMCookieInstance, callback: (error?: string | null) => void) {
          __GM_cookie__!.delete(cookieInfo, (result: any) => {
            callback(result);
          });
        },
      };
    } else if (this.baseCookieHandler === "GM.cookie") {
      return {
        list(_options: object, callback: (cookieListResult: GmCallbackCookie[]) => void) {
          __GM_async_cookie__!.list().then((result: any) => {
            callback(result);
          });
        },
        set(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void) {
          __GM_async_cookie__!
            .set(<NonNullableProperty<GMCookieInstance, "expirationDate">>cookieInfo)
            .then((result: any) => {
              callback(result ?? null);
            })
            .catch((reason: any) => {
              callback(reason);
            });
        },
        delete(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void) {
          __GM_async_cookie__!
            .delete(cookieInfo)
            .then((result: any) => {
              callback(result ?? null);
            })
            .catch((reason: any) => {
              callback(reason);
            });
        },
      };
    } else if (this.baseCookieHandler === "cookieStore") {
      const cookieStore = globalThis.cookieStore;
      return {
        list(_options: object, callback: (cookieListResult: CookieStoreData[]) => void) {
          cookieStore
            .getAll()
            .then((result) => {
              // domain可能为空
              // 设置window.location.hostname
              result.forEach((it) => {
                if ((<CookieStoreData>it).domain == null) {
                  (<CookieStoreData>it).domain = globalThis.location.hostname;
                }
              });
              callback(result as CookieStoreData[]);
            })
            .catch((reason) => {
              console.error(reason);
            });
        },
        set(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void) {
          cookieStore
            .set(cookieInfo as CookieInit)
            .then(() => {
              callback();
            })
            .catch((reason) => {
              callback(reason);
            });
        },
        delete(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void) {
          cookieStore
            .delete(cookieInfo)
            .then(() => {
              callback();
            })
            .catch((reason) => {
              callback(reason);
            });
        },
      };
    } else {
      return __document_cookie__;
    }
  }
  /**
   * 判断是否支持`GM_cookie`
   */
  get isSupportGM_cookie(): boolean {
    return isSupportGM_cookie();
  }
  /**
   * 判断是否支持`GM.cookie`
   */
  get isSupportGM_async_cookie(): boolean {
    return isSupportGM_async_cookie();
  }
  /**
   * 判断页面是否支持CookieStore
   */
  get isSupportCookieStore(): boolean {
    const __cookie_store__ = globalThis.cookieStore;
    if (__cookie_store__ == null) {
      return false;
    }
    if (typeof __cookie_store__.set !== "function") {
      return false;
    }
    if (typeof __cookie_store__.getAll !== "function") {
      return false;
    }
    if (typeof __cookie_store__.delete !== "function") {
      return false;
    }
    if (typeof __cookie_store__.get !== "function") {
      return false;
    }
    // 事件三件套
    if (typeof __cookie_store__.addEventListener !== "function") {
      return false;
    }
    if (typeof __cookie_store__.removeEventListener !== "function") {
      return false;
    }
    if (typeof __cookie_store__.dispatchEvent !== "function") {
      return false;
    }
    return true;
  }
  /**
   * 重载配置
   * @param option
   */
  setOptions(option: CookieConstructOptions) {
    this.__option = option;
  }
  /**
   * 查询所有Cookie
   */
  listAll() {
    return new Promise<(GMCookieInstance | CookieStoreData)[]>((resolve, reject) => {
      try {
        this.cookieManager.list({}, (cookieListResult) => {
          let __cookieListResult__ = cookieListResult || [];
          __cookieListResult__ = __cookieListResult__.sort((a, b) => a.name.localeCompare(b.name));
          resolve(__cookieListResult__);
        });
      } catch (error: any) {
        console.error(error);
        reject(error);
      }
    });
  }
  /**
   * 清除所有Cookie
   * @param filter 自定义过滤条件，返回`true`则不清除
   */
  clear(filter?: (cookieInfo: GmCallbackCookie | CookieStoreData) => boolean | void) {
    return new Promise<{
      /**
       * 成功的数量
       */
      success: number;
      /**
       * 失败的数量
       */
      error: number;
      /**
       * 忽略的数量
       */
      ignore: number;
    }>((resolve, reject) => {
      try {
        this.cookieManager.list({}, async (cookieListResult) => {
          const __cookieListResult__ = cookieListResult || [];
          const result = {
            success: 0,
            error: 0,
            ignore: 0,
          };
          for (let index = 0; index < __cookieListResult__.length; index++) {
            const cookieListItem = __cookieListResult__[index];
            if (typeof filter === "function" && filter(cookieListItem)) {
              result.ignore++;
              continue;
            }
            const deleteError = await new Promise<Error | null | undefined | string>((deleteResolve) => {
              this.delete(cookieListItem).then((deleteResult) => {
                deleteResolve(deleteResult);
              });
            });
            if (deleteError) {
              result.error++;
            } else {
              result.success++;
            }
          }
          resolve(result);
        });
      } catch (error: any) {
        console.error(error);
        reject(error);
      }
    });
  }
  /**
   * 获取单个Cookie
   * @param cookieInfo
   */
  get(cookieInfo: string | CookieManagerGetOptions, callback?: (error: string | Error | null | undefined) => void) {
    // oxlint-disable-next-line no-async-promise-executor
    return new Promise<GMCookieInstance | CookieStoreData | null | undefined>(async (resolve, reject) => {
      try {
        const cookieInfos = await this.listAll();
        const name = typeof cookieInfo === "string" ? cookieInfo : cookieInfo.name;
        const find = cookieInfos.find((item) => {
          return item.name === name;
        });
        resolve(find);
      } catch (error: any) {
        console.error(error);
        callback?.(error);
        reject(error);
      }
    });
  }
  /**
   * 添加Cookie
   * @param cookieInfo
   * @param callback
   */
  add(cookieInfo: CookieManagerSetOptions, callback?: (error: string | Error | null | undefined) => void) {
    return new Promise<string | Error | null | undefined>((resolve, reject) => {
      try {
        Reflect.deleteProperty(cookieInfo, "hostOnly");
        this.cookieManager.set(<NonNullableProperty<GMCookieInstance, "expirationDate">>cookieInfo, (error) => {
          callback?.(error);
          resolve(error);
        });
      } catch (error: any) {
        console.error(error);
        reject(error);
      }
    });
  }
  /**
   * 删除Cookie
   * @param cookieInfo
   * @param callback
   */
  delete(
    cookieInfo: CookieManagerDeleteOptions | string,
    callback?: (error: string | Error | null | undefined) => void
  ) {
    return new Promise<string | Error | null | undefined>((resolve, reject) => {
      try {
        if (typeof cookieInfo === "string") {
          cookieInfo = {
            name: cookieInfo,
          };
        }
        this.cookieManager.delete(<NonNullableProperty<GMCookieInstance, "expirationDate">>cookieInfo, (error) => {
          callback?.(error);
          resolve(error);
        });
      } catch (error: any) {
        console.error(error);
        reject(error);
      }
    });
  }
  /**
   * 更新Cookie
   * @param cookieInfo
   * @param callback
   */
  update(cookieInfo: CookieManagerSetOptions, callback?: (error: string | Error | null | undefined) => void) {
    // oxlint-disable-next-line no-async-promise-executor
    return new Promise<string | Error | null | undefined>(async (resolve) => {
      let result: any;
      try {
        if (this.baseCookieHandler === "document.cookie" || this.baseCookieHandler === "cookieStore") {
          // 这种获取信息不全的Api要更新Cookie先删除再设置
          const deleteError = await this.delete(cookieInfo);
          if (deleteError) {
            throw new TypeError(deleteError.toString());
          }
        }
        const addError = await this.add(cookieInfo);
        if (addError) {
          throw new TypeError(addError.toString());
        }
      } catch (error: any) {
        result = error;
      } finally {
        callback?.(result);
        resolve(result);
      }
    });
  }
}
