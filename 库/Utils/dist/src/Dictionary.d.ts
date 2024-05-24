export class UtilsDictionary {
    items: {};
    /**
     * 检查是否有某一个键
     * @param {string} key 键
     * @returns {boolean}
     */
    has(key: string): boolean;
    /**
     * 检查已有的键中是否以xx开头
     * @param {string} key 需要匹配的键
     * @returns {boolean}
     */
    startsWith(key: string): boolean;
    /**
     * 获取以xx开头的键的值
     * @param {string} key 需要匹配的键
     * @returns {any}
     */
    getStartsWith(key: string): any;
    /**
     * 为字典添加某一个值
     * @param {string} key 键
     * @param {any} val 值，默认为""
     */
    set(key: string, val?: any): void;
    /**
     * 删除某一个键
     * @param {string} key 键
     * @returns {boolean}
     */
    delete(key: string): boolean;
    /**
     * 获取某个键的值
     * @param {string} key 键
     * @returns {any}
     */
    get(key: string): any;
    /**
     * 返回字典中的所有值
     * @returns {any[]}
     */
    values(): any[];
    /**
     * 清空字典
     */
    clear(): void;
    /**
     * 获取字典的长度
     * @returns {number}
     */
    size(): number;
    /**
     * 获取字典所有的键
     */
    keys(): string[];
    /**
     * 返回字典本身
     * @returns {object}
     */
    getItems(): object;
    /**
     * 合并另一个字典
     * @param {object} data 需要合并的字典
     */
    concat(data: object): void;
    forEach(callbackfn: any): void;
    /**
     * 获取字典的长度，同this.size
     * @returns {number}
     */
    get length(): number;
    /**
     * 迭代器
     */
    get entries(): () => Generator<any[], void, unknown>;
    /**
     * 是否可遍历
     */
    get [Symbol.iterator](): () => Generator<any[], void, unknown>;
    /**
     * .toString()和.toLocaleString()输出的字符串
     */
    get [Symbol.toStringTag](): string;
}
