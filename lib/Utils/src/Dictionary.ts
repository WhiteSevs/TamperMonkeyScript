export class UtilsDictionary<K, V> {
  private items: Map<K, V>;
  constructor();
  constructor(key: K, value: V);
  constructor(key?: K, value?: V) {
    this.items = new Map();
    if (key != null) {
      this.set(key, value!);
    }
  }
  /**
   * 获取字典的长度，同this.size
   */
  get length() {
    return this.size();
  }
  /**
   * 迭代器
   */
  get entries() {
    const that = this;
    return function* (): IterableIterator<[K, V]> {
      const itemKeys = Object.keys(that.getItems());
      for (const keyName of itemKeys) {
        yield [keyName as K, that.get(keyName as K) as V];
      }
    };
  }
  /**
   * 是否可遍历
   */
  get [Symbol.iterator]() {
    return () => {
      return this.entries();
    };
  }
  /**
   * 检查是否有某一个键
   * @param key 键
   */
  has(key: K): boolean {
    return this.items.has(key);
  }
  /**
   * 获取某个键的值
   * https://github.com/microsoft/TypeScript/issues/9619
   * 微软到现在都没有实现has和get的联动
   * @param key 键
   */
  get(key: K): V {
    return this.items.get(key) as V;
  }
  /**
   * 为字典添加某一个值
   * @param key 键
   * @param val 值，默认为""
   */
  set(key: K, val: V): void {
    if (key === void 0) {
      throw new Error("Utils.Dictionary().set 参数 key 不能为空");
    }
    this.items.set(key, val);
  }
  /**
   * 删除某一个键
   * @param key 键
   * @returns
   * + true：键存在且成功删除
   * + false：键不存在
   */
  delete(key: K): boolean {
    if (this.has(key)) {
      return this.items.delete(key);
    }
    return false;
  }
  /**
   * 获取字典所有的键
   */
  keys(): K[] {
    return Array.from(this.items.keys());
  }
  /**
   * 返回字典中的所有值
   */
  values(): V[] {
    return Array.from(this.items.values());
  }
  /**
   * 清空字典
   */
  clear() {
    this.items.clear();
  }
  /**
   * 获取字典的长度
   */
  size(): number {
    return this.items.size;
  }
  /**
   * 返回字典本身
   */
  getItems() {
    return this.items;
  }
  /**
   * 合并另一个字典
   * @param data 需要合并的字典
   */
  concat(data: UtilsDictionary<K, V>) {
    data.forEach((value, key) => {
      this.items.set(key, value);
    });
  }
  /**
   * 迭代字典
   * @param callbackfn 回调函数
   */
  forEach(callbackfn: (value: V, key: K, dictionary: UtilsDictionary<K, V>) => void) {
    this.items.forEach((value, key) => {
      callbackfn(value, key, this);
    });
  }
  /**
   * 检查已有的键中是否以xx开头
   * @param key 需要匹配的键
   */
  startsWith(key: string): boolean {
    const keys = this.keys();
    for (const keyName of keys) {
      if (String(keyName).startsWith(key)) {
        return true;
      }
    }
    return false;
  }
  /**
   * 获取以xx开头的键的值
   * @param key 需要匹配的键
   */
  getStartsWith(key: K): V | undefined {
    let result: V | undefined = void 0;
    const keys = this.keys();
    for (const keyName of keys) {
      if (String(keyName).startsWith(String(key))) {
        result = this.get(keyName as K);
        break;
      }
    }
    return result;
  }
}
