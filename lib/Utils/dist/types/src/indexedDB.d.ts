declare class indexedDB {
    #private;
    /**
     * @param dbName 数据存储名，默认为：default_db
     * @param storeName 表名，默认为：default_form
     * @param dbVersion indexDB的版本号，默认为：1
     */
    constructor(dbName?: string, storeName?: string, dbVersion?: number);
    /**
     * 创建 “表”
     * @param dbName 表名
     */
    createStore(dbName: string): IDBObjectStore;
    /**
     * 打开数据库
     * @param callback  回调
     * @param dbName 数据库名
     */
    private open;
    /**
     * 保存数据到数据库
     * @param key 数据key
     * @param value 数据值
     */
    save(key: string, value: any): Promise<{
        success: boolean;
        code: number;
        msg: string;
        event?: Event;
    }>;
    /**
     * 根据key获取值
     * @param key 数据key
     */
    get<T extends any>(key: string): Promise<{
        success: boolean;
        code: number;
        msg: string;
        data: T;
        event?: Event;
        result?: any;
    }>;
    /**
     * 正则获取数据
     * @param key 数据键
     */
    regexpGet<T extends any>(key: string): Promise<{
        success: boolean;
        code: number;
        msg: string;
        data: T[];
        event?: Event;
    }>;
    /**
     * 删除数据
     * @param {string} key 数据键
     */
    delete(key: string): Promise<{
        success: boolean;
        code: number;
        msg: string;
        event?: Event;
    }>;
    /**
     * 删除所有数据
     */
    deleteAll(): Promise<{
        success: boolean;
        code: number;
        msg: string;
    }>;
}
export { indexedDB };
