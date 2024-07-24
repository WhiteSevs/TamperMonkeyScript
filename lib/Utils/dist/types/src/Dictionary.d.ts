declare class UtilsDictionary<K, V> {
    private items;
    constructor();
    constructor(key: K, value: V);
    /**
     * 检查是否有某一个键
     * @param key 键
     */
    has(key: K): boolean;
    /**
     * 检查已有的键中是否以xx开头
     * @param key 需要匹配的键
     */
    startsWith(key: K): boolean;
    /**
     * 获取以xx开头的键的值
     * @param key 需要匹配的键
     */
    getStartsWith(key: K): V | undefined;
    /**
     * 为字典添加某一个值
     * @param key 键
     * @param val 值，默认为""
     */
    set(key: K, val: V): void;
    /**
     * 删除某一个键
     * @param key 键
     */
    delete(key: K): boolean;
    /**
     * 获取某个键的值
     * https://github.com/microsoft/TypeScript/issues/9619
     * 微软到现在都没有修复has和get的联动
     * @param key 键
     */
    get(key: K): V;
    /**
     * 返回字典中的所有值
     */
    values(): V[];
    /**
     * 清空字典
     */
    clear(): void;
    /**
     * 获取字典的长度
     */
    size(): number;
    /**
     * 获取字典所有的键
     */
    keys(): (string | symbol)[];
    /**
     * 返回字典本身
     */
    getItems(): UtilsDictionary<K, V>;
    /**
     * 合并另一个字典
     * @param data 需要合并的字典
     */
    concat(data: UtilsDictionary<K, V>): void;
    forEach(callbackfn: (value: V, key: K, dictionary: UtilsDictionary<K, V>) => void): void;
    /**
     * 获取字典的长度，同this.size
     */
    get length(): number;
    /**
     * 迭代器
     */
    get entries(): () => IterableIterator<[K, V]>;
    /**
     * 是否可遍历
     */
    get [Symbol.iterator](): () => IterableIterator<[K, V]>;
}
export { UtilsDictionary };
