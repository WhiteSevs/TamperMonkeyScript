export declare class UtilsDictionary<K, V> {
    private items;
    /**
     * @example
     * new utils.Dictionary();
     * @example
     * new utils.Dictionary(1, 2);
     * @example
     * new utils.Dictionary([1, 2], [3, 4], [5, 6]);
     * @example
     * new utils.Dictionary({1:2, 3:4, "5":"6"});
     */
    constructor();
    constructor(dataList: [key: K, value: V][]);
    constructor(data: {
        [key: string | symbol]: V;
    });
    constructor(key: K, value: V);
    [Symbol.dispose](): void;
    [Symbol.asyncDispose](): Promise<void>;
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
    /**
     * 检查是否有某一个键
     * @param key 键
     */
    has(key: K): boolean;
    /**
     * 获取某个键的值
     * https://github.com/microsoft/TypeScript/issues/9619
     * 微软到现在都没有实现has和get的联动
     * @param key 键
     */
    get(key: K): V;
    /**
     * 为字典添加某一个值
     * @param key 键
     * @param val 值，默认为""
     */
    set(key: K, val: V): void;
    /**
     * 删除某一个键
     * @param key 键
     * @returns
     * + true：键存在且成功删除
     * + false：键不存在
     */
    delete(key: K): boolean;
    /**
     * 获取字典所有的键
     */
    keys(): K[];
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
     * 返回字典本身
     */
    getItems(): Map<K, V>;
    /**
     * 合并另一个字典
     * @param data 需要合并的字典
     */
    concat(data: UtilsDictionary<K, V>): void;
    /**
     * 迭代字典
     * @param callbackfn 回调函数
     */
    forEach(callbackfn: (value: V, key: K, dictionary: UtilsDictionary<K, V>) => void): void;
    /**
     * 检查已有的键中是否以xx开头
     * @param key 需要匹配的键
     */
    startsWith(key: string): boolean;
    /**
     * 获取以xx开头的键的值
     * @param key 需要匹配的键
     */
    getStartsWith(key: K): V | undefined;
}
