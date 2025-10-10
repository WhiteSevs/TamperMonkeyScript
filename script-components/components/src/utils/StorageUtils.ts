import utils from "@whitesev/utils";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

/**
 * 监听的值
 */
type ListenerData = {
  id: number;
  key: string;
  callback: (key: string, oldValue: any, newValue: any) => IPromise<void>;
};

export class StorageUtils {
  /** 存储的键名 */
  storageKey: string;
  /** 监听的数据 */
  private listenerData: UtilsDictionary<string, ListenerData[]>;
  /**
   * 存储的键名，可以是多层的，如：a.b.c
   *
   * 那就是
   * {
   *  "a": {
   *     "b": {
   *       "c": {
   *         ...你的数据
   *       }
   *     }
   *   }
   * }
   * @param key
   */
  constructor(key: string) {
    if (typeof key === "string") {
      const trimKey = key.trim();
      if (trimKey == "") {
        throw new Error("key参数不能为空字符串");
      }
      this.storageKey = trimKey;
    } else {
      throw new Error("key参数类型错误，必须是字符串");
    }
    this.listenerData = new utils.Dictionary();

    this.getLocalValue = this.getLocalValue.bind(this);
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
    this.delete = this.delete.bind(this);
    this.has = this.has.bind(this);
    this.keys = this.keys.bind(this);
    this.values = this.values.bind(this);
    this.clear = this.clear.bind(this);
    this.addValueChangeListener = this.addValueChangeListener.bind(this);
    this.removeValueChangeListener = this.removeValueChangeListener.bind(this);
    this.triggerValueChangeListener = this.triggerValueChangeListener.bind(this);
  }
  /**
   * 获取本地值
   */
  private getLocalValue(): any {
    let localValue = GM_getValue(this.storageKey);
    if (localValue == null) {
      localValue = {};
      this.setLocalValue(localValue);
    }
    return localValue;
  }
  /**
   * 设置本地值
   * @param value
   */
  private setLocalValue(value: any) {
    GM_setValue(this.storageKey, value);
  }
  /**
   * 设置值
   * @param key 键
   * @param value 值
   */
  set(key: string, value: any) {
    const oldValue = this.get(key);
    const localValue = this.getLocalValue();
    Reflect.set(localValue, key, value);
    this.setLocalValue(localValue);
    this.triggerValueChangeListener(key, oldValue, value);
  }
  /**
   * 获取值
   * @param key 键
   * @param defaultValue 默认值
   */
  get<T>(key: string, defaultValue?: T): T {
    const localValue = this.getLocalValue();
    return Reflect.get(localValue, key) ?? defaultValue;
  }
  /**
   * 获取所有值
   */
  getAll<T = any>(): T {
    const localValue = this.getLocalValue();
    return localValue;
  }
  /**
   * 删除值
   * @param key 键
   */
  delete(key: string) {
    const oldValue = this.get(key);
    const localValue = this.getLocalValue();
    Reflect.deleteProperty(localValue, key);
    this.setLocalValue(localValue);
    this.triggerValueChangeListener(key, oldValue, void 0);
  }
  /**
   * 判断是否存在该值
   */
  has(key: string) {
    const localValue = this.getLocalValue();
    return Reflect.has(localValue, key);
  }
  /**
   * 获取所有键
   */
  keys() {
    const localValue = this.getLocalValue();
    return Reflect.ownKeys(localValue);
  }
  /**
   * 获取所有值
   */
  values() {
    const localValue = this.getLocalValue();
    return Reflect.ownKeys(localValue).map((key) => Reflect.get(localValue, key));
  }
  /**
   * 清空所有值
   */
  clear() {
    GM_deleteValue(this.storageKey);
  }
  /**
   * 监听值改变
   * + .set
   * + .delete
   * @param key 监听的键
   * @param callback 值改变的回调函数
   */
  addValueChangeListener(key: string, callback: <T>(key: string, newValue: T, oldValue: T) => void) {
    const listenerId = Math.random();
    const listenerData = this.listenerData.get(key) || [];
    listenerData.push({
      id: listenerId,
      key,
      callback,
    });
    this.listenerData.set(key, listenerData);
    return listenerId;
  }
  /**
   * 移除监听
   * @param listenerId 监听的id或键名
   */
  removeValueChangeListener(listenerId: number | string) {
    let flag = false;
    for (const [key, listenerData] of this.listenerData.entries()) {
      for (let index = 0; index < listenerData.length; index++) {
        const value = listenerData[index];
        if (
          (typeof listenerId === "string" && value.key === listenerId) ||
          (typeof listenerId === "number" && value.id === listenerId)
        ) {
          listenerData.splice(index, 1);
          index--;
          flag = true;
        }
      }
      this.listenerData.set(key, listenerData);
    }
    return flag;
  }
  /**
   * 主动触发监听器
   * @param key 键
   * @param oldValue （可选）旧值
   * @param newValue （可选）新值
   */
  triggerValueChangeListener(key: string, oldValue?: any, newValue?: any): Promise<void>;
  async triggerValueChangeListener(...args: any[]) {
    const [key, oldValue, newValue] = args;
    if (!this.listenerData.has(key)) {
      return;
    }
    let listenerData = this.listenerData.get(key)!;
    for (let index = 0; index < listenerData.length; index++) {
      const data = listenerData[index];
      if (typeof data.callback === "function") {
        let value = this.get<any>(key);
        let __newValue;
        let __oldValue;
        if (typeof oldValue !== "undefined" && args.length >= 2) {
          __oldValue = oldValue;
        } else {
          __oldValue = value;
        }
        if (typeof newValue !== "undefined" && args.length > 2) {
          __newValue = newValue;
        } else {
          __newValue = value;
        }
        await data.callback(key, __oldValue, __newValue);
      }
    }
  }
}
