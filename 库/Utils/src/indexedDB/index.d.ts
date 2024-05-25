/** indexedDB */
declare interface UtilsIndexedDBConstructor {
	dbName: string;
	slqVersion: string;
	dbVersion: number;
	storeName: string;
	indexedDB: IDBFactory;
	db: UtilsNestedObjectWithToString;
	store: null;
	errorCode: UtilsNestedObjectWithToString;
	/**
	 * 创建 “表”
	 * @param dbName 表名
	 */
	createStore(dbName: string): any;
	/**
	 * 打开数据库
	 * @param callback 回调
	 * @param dbName 数据库名
	 */
	open(
		callback: (
			store:
				| UtilsNestedObjectWithToString
				| {
						code: number;
						msg: string;
						error: Error;
				  }
		) => void,
		dbName: string
	): void;
	/**
	 * 保存数据到数据库
	 * @param key 数据key
	 * @param value 数据值
	 */
	save(
		key: string,
		value: any
	): Promise<{
		code: number;
		msg: string;
		success: boolean;
	}>;
	/**
	 * 根据key获取值
	 * @param key 数据key
	 */
	get(key: string): Promise<
		| {
				code: number;
				msg: string;
				data: any[];
				success: true;
		  }
		| {
				code: number;
				msg: string;
				error: Error;
				result: any;
		  }
	>;
	/**
	 * 正则获取数据
	 * @param key 数据键
	 */
	regexpGet(key: string): Promise<
		| {
				code: number;
				msg: string;
				data: any[];
				success: true;
		  }
		| {
				code: number;
				msg: string;
				error: Error;
				result: any;
		  }
	>;
	/**
	 * 删除数据
	 * @param key 数据键
	 */
	delete(key: string): Promise<
		| {
				code: number;
				msg: string;
				success: true;
		  }
		| {
				code: number;
				msg: string;
				error: Error;
		  }
	>;
	/**
	 * 删除所有数据
	 */
	deleteAll(): Promise<
		| {
				code: number;
				msg: string;
				error: Error;
				result: any;
		  }
		| {
				code: number;
				msg: string;
				success: true;
		  }
	>;
}

/** indexedDB */
declare interface UtilsIndexedDB {
	/**
	 * @param dbName 数据存储名，默认为：default_db
	 * @param storeName 表名，默认为：default_form
	 * @param dbVersion indexDB的版本号，默认为：1
	 */
	new (
		dbName?: string,
		storeName?: string,
		dbVersion?: number
	): UtilsIndexedDBConstructor;
}
