export function indexedDB(dbName?: string, storeName?: string, dbVersion?: number): void;
export class indexedDB {
    constructor(dbName?: string, storeName?: string, dbVersion?: number);
    dbName: string;
    slqVersion: string;
    dbVersion: number;
    storeName: string;
    indexedDB: IDBFactory;
    db: {};
    store: any;
    errorCode: {
        success: {
            code: number;
            msg: string;
        };
        error: {
            code: number;
            msg: string;
        };
        open: {
            code: number;
            msg: string;
        };
        save: {
            code: number;
            msg: string;
        };
        get: {
            code: number;
            msg: string;
        };
        delete: {
            code: number;
            msg: string;
        };
        deleteAll: {
            code: number;
            msg: string;
        };
    };
    /**
     * 创建 “表”
     * @param {string} dbName 表名
     * @returns
     */
    createStore: (dbName: string) => any;
    /**
     * 打开数据库
     * @param {function} callback  回调
     * @param {string} dbName 数据库名
     */
    open: (callback: Function, dbName: string) => void;
    /**
     * 保存数据到数据库
     * @param {string} key 数据key
     * @param {any} value 数据值
     * @returns {Promise< {
     *    code: number,
     *    msg: string,
     *    success: boolean
     * }>}
     */
    save: (key: string, value: any) => Promise<{
        code: number;
        msg: string;
        success: boolean;
    }>;
    /**
     * 根据key获取值
     * @param {string} key 数据key
     * @returns {Promise< {
     *    code: number,
     *    msg: string,
     *    data: [...any],
     *    success: true
     * }| {
     *    code: number,
     *    msg: string,
     *    error: Error,
     *    result: any,
     * } >}
     */
    get: (key: string) => Promise<{
        code: number;
        msg: string;
        data: [...any];
        success: true;
    } | {
        code: number;
        msg: string;
        error: Error;
        result: any;
    }>;
    /**
     * 正则获取数据
     * @param {string} key 数据键
     * @returns { Promise<{
     *    code: number,
     *    msg: string,
     *    data: [...any],
     *    success: true
     * }|{
     *    code: number,
     *    msg: string,
     *    error: Error,
     *    result: any,
     * }> }
     */
    regexpGet: (key: string) => Promise<{
        code: number;
        msg: string;
        data: [...any];
        success: true;
    } | {
        code: number;
        msg: string;
        error: Error;
        result: any;
    }>;
    /**
     * 删除数据
     * @param {string} key 数据键
     * @returns {Promise<{
     *    code: number,
     *    msg: string,
     *    success: true,
     * }|{
     *    code: number,
     *    msg: string,
     *    error: Error,
     * }>}
     */
    delete: (key: string) => Promise<{
        code: number;
        msg: string;
        success: true;
    } | {
        code: number;
        msg: string;
        error: Error;
    }>;
    /**
     * 删除所有数据
     * @returns {Promise<{
     *    code: number,
     *    msg: string,
     *    error: Error,
     *    result: any,
     * }|{
     *    code: number,
     *    msg: string,
     *    success: true,
     * }>}
     */
    deleteAll: () => Promise<{
        code: number;
        msg: string;
        error: Error;
        result: any;
    } | {
        code: number;
        msg: string;
        success: true;
    }>;
}
