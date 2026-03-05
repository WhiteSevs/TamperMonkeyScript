import { unsafeWindow } from "ViteGM";

export const SessionStorageManager = {
  init() {},
  /**
   * 清除所有的
   */
  clear() {
    unsafeWindow.sessionStorage.clear();
  },
  /**
   * 获取单个项的数据
   * @param key 键名
   */
  get(key: string) {
    return unsafeWindow.sessionStorage.getItem(key);
  },
  /**
   * 添加|覆盖某个项
   * @param key 键名
   * @param value 值
   */
  set(key: string, value: string) {
    unsafeWindow.sessionStorage.setItem(key, value);
  },
  /**
   * 删除某个项
   * @param key 键名
   */
  delete(key: string) {
    unsafeWindow.sessionStorage.removeItem(key);
  },
  /**
   * 获取所有
   */
  getAll() {
    const result: Record<string, string | null> = {};
    Object.keys(unsafeWindow.sessionStorage).forEach((key) => {
      const value = this.get(key);
      result[key] = value;
    });
    return result;
  },
  /**
   * 添加所有
   * @param data 需要添加的数据
   * @param autoClear 是否自动清空旧的数据（默认false），如果true，自动情况，如果false，则覆盖处理
   */
  setAll(data: Record<string, string>, autoClear: boolean = false) {
    if (autoClear) {
      this.clear();
    }
    if (Array.isArray(data)) {
      throw new TypeError("数据格式错误，请传入对象格式的数据");
    }
    Object.keys(data).forEach((key) => {
      this.set(key, data[key as keyof typeof data]);
    });
  },
};
