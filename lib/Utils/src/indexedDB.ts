declare interface UtilsIDBOpenErrorResult {
	code: number;
	msg: string;
	event: {
		srcElement: IDBRequest;
		target: IDBRequest;
	} & Event;
}
class indexedDB {
	#dbName: string;
	#storeName: string;
	#dbVersion: number;
	/* websql的版本号，由于ios的问题，版本号的写法不一样 */
	// @ts-ignore
	#slqVersion = "1";
	/* 监听IndexDB */
	#indexedDB =
		window.indexedDB ||
		(window as any).mozIndexedDB ||
		(window as any).webkitIndexedDB ||
		(window as any).msIndexedDB;
	/* 缓存数据库，避免同一个页面重复创建和销毁 */
	#db: {
		[key: string]: IDBDatabase;
	} = {};
	// @ts-ignore
	#store: IDBObjectStore = null as any;
	/** 状态码 */
	#statusCode = {
		operationSuccess: {
			code: 200,
			msg: "操作成功",
		},
		operationFailed: {
			code: 401,
			msg: "操作失败",
		},
		openFailed: { code: 91001, msg: "打开数据库失败" },
		saveFailed: { code: 91002, msg: "保存数据失败" },
		getFailed: { code: 91003, msg: "获取数据失败" },
		deleteFailed: { code: 91004, msg: "删除数据失败" },
		deleteAllFailed: { code: 91005, msg: "清空数据库失败" },
		regexpGetFailed: { code: 91006, msg: "正则获取数据失败" },
	};
	/**
	 * @param dbName 数据存储名，默认为：default_db
	 * @param storeName 表名，默认为：default_form
	 * @param dbVersion indexDB的版本号，默认为：1
	 */
	constructor(
		dbName = "default_db",
		storeName = "default_form",
		dbVersion = 1
	) {
		this.#dbName = dbName;
		this.#storeName = storeName;
		this.#dbVersion = dbVersion;
		if (!this.#indexedDB) {
			alert("很抱歉，您的浏览器不支持indexedDB");
			throw new TypeError("很抱歉，您的浏览器不支持indexedDB");
		}
	}
	/**
	 * 创建 “表”
	 * @param dbName 表名
	 */
	createStore(dbName: string) {
		let txn, store;
		txn = this.#db[dbName].transaction(
			this.#storeName,
			"readwrite"
		) as IDBTransaction;
		/* IndexDB的读写权限 */
		store = txn.objectStore(this.#storeName) as IDBObjectStore;
		this.#store = store;
		return store;
	}
	/**
	 * 打开数据库
	 * @param callback  回调
	 * @param dbName 数据库名
	 */
	private open(
		callback: (
			/** 数据库实例 */
			idbStore: IDBObjectStore | null,
			error?: UtilsIDBOpenErrorResult
		) => void,
		dbName: string
	) {
		let that = this;
		/* 打开数据库 */
		/* 如果支持IndexDB */
		if (!that.#db[dbName]) {
			/* 如果缓存中没有，则进行数据库的创建或打开，提高效率 */
			let request = that.#indexedDB.open(dbName, that.#dbVersion);
			request.onerror = function (event: any) {
				callback(null, {
					code: that.#statusCode.openFailed.code,
					msg: that.#statusCode.openFailed.msg,
					event: event,
				});
			};
			request.onsuccess = function (event: Event) {
				if (!that.#db[dbName]) {
					let target = event.target as IDBRequest;
					that.#db[dbName] = target.result;
				}
				let store = that.createStore(dbName);
				callback(store);
			};
			request.onupgradeneeded = function (event: Event) {
				let target = event.target as IDBRequest;
				that.#db[dbName] = target.result;
				let store = that.#db[dbName].createObjectStore(that.#storeName, {
					keyPath: "key",
				});
				store.transaction.oncomplete = function (event: Event) {
					callback(store);
				};
			};
		} else {
			/* 如果缓存中已经打开了数据库，就直接使用 */
			let store = this.createStore(dbName);
			callback(store);
		}
	}
	/**
	 * 保存数据到数据库
	 * @param key 数据key
	 * @param value 数据值
	 */
	async save<T extends any>(
		key: string,
		value: T
	): Promise<{
		/** 本操作是否成功 */
		success: boolean;
		/** 状态码 */
		code: number;
		/** 状态码对应的消息 */
		msg: string;
		/** 执行操作触发的事件，如果是在open阶段失败的话该值为空 */
		event?: {
			srcElement: IDBRequest<T>;
			target: IDBRequest<T>;
		} & Event;
	}> {
		let that = this;
		return new Promise((resolve) => {
			let dbName = this.#dbName;
			let inData = {
				key: key,
				value: value,
			};
			this.open(function (idbStore) {
				if (idbStore == null) {
					resolve({
						success: false,
						code: that.#statusCode.saveFailed.code,
						msg: that.#statusCode.saveFailed.msg,
					});
				} else {
					let request = idbStore.put(inData);
					request.onsuccess = function (event: any) {
						/* 保存成功有success 字段 */
						resolve({
							success: true,
							code: that.#statusCode.operationSuccess.code,
							msg: that.#statusCode.operationSuccess.msg,
							event: event,
						});
					};
					request.onerror = function (event: any) {
						resolve({
							success: false,
							code: that.#statusCode.saveFailed.code,
							msg: that.#statusCode.saveFailed.msg,
							event: event,
						});
					};
				}
			}, dbName);
		});
	}

	/**
	 * 判断是否存在该数据
	 * @param key 数据key
	 */
	async has(key: string): Promise<{
		/** 本操作是否成功 */
		success: boolean;
		/** 状态码 */
		code: number;
		/** 状态码对应的消息 */
		msg: string;
		/** 执行操作触发的事件，如果是在open阶段失败的话该值为空 */
		event?: {
			srcElement: IDBRequest;
			target: IDBRequest;
		} & Event;
	}> {
		let that = this;
		return new Promise((resolve) => {
			let dbName = this.#dbName;
			this.open(function (idbStore) {
				/* 判断返回的数据中是否有error字段 */
				if (idbStore == null) {
					resolve({
						success: false,
						code: that.#statusCode.getFailed.code,
						msg: that.#statusCode.getFailed.msg,
					});
				} else {
					let request = idbStore.get(key);
					request.onsuccess = function (event: any) {
						/* result 返回的是 {key: string, value: any} */
						/* 键值对存储 */
						resolve({
							success: true,
							code: that.#statusCode.operationSuccess.code,
							msg: that.#statusCode.operationSuccess.msg,
							event: event,
						});
					};
					request.onerror = function (event: any) {
						resolve({
							success: false,
							code: that.#statusCode.getFailed.code,
							msg: that.#statusCode.getFailed.msg,
							event: event,
						});
					};
				}
			}, dbName);
		});
	}
	/**
	 * 根据key获取值
	 * @param key 数据key
	 */
	async get<T extends any>(
		key: string
	): Promise<{
		/** 本操作是否成功 */
		success: boolean;
		/** 状态码 */
		code: number;
		/** 状态码对应的消息 */
		msg: string;
		/** 获取的数据 */
		data: T;
		/** 执行操作触发的事件，如果是在open阶段失败的话该值为空 */
		event?: {
			srcElement: IDBRequest<T>;
			target: IDBRequest<T>;
		} & Event;
		/** 获取的结果，里面的数据提取为data */
		result?: {
			key: string;
			value: T;
		};
	}> {
		let that = this;
		return new Promise((resolve) => {
			let dbName = this.#dbName;
			this.open(function (idbStore) {
				/* 判断返回的数据中是否有error字段 */
				if (idbStore == null) {
					resolve({
						success: false,
						code: that.#statusCode.getFailed.code,
						msg: that.#statusCode.getFailed.msg,
						data: void 0 as any,
					});
				} else {
					let request = idbStore.get(key);
					request.onsuccess = function (event: any) {
						let target = event.target as IDBRequest;
						let result = target.result as
							| {
									key: string;
									value: T;
							  }
							| undefined;
						/* result 返回的是 {key: string, value: any} */
						/* 键值对存储 */
						let data = result ? result.value : void 0;
						if (data) {
							resolve({
								success: true,
								code: that.#statusCode.operationSuccess.code,
								msg: that.#statusCode.operationSuccess.msg,
								data: data,

								event: event,
								result: result,
							});
						} else {
							resolve({
								success: false,
								code: that.#statusCode.operationFailed.code,
								msg: that.#statusCode.operationFailed.msg,
								data: void 0 as any,

								event: event,
								result: result,
							});
						}
					};
					request.onerror = function (event: any) {
						resolve({
							success: false,
							code: that.#statusCode.getFailed.code,
							msg: that.#statusCode.getFailed.msg,
							data: void 0 as any,

							event: event,
						});
					};
				}
			}, dbName);
		});
	}

	/**
	 * 正则获取数据
	 * @param key 数据key，可以是正则
	 */
	async regexpGet<T extends any>(
		key: string | RegExp
	): Promise<{
		/** 本操作是否成功 */
		success: boolean;
		/** 状态码 */
		code: number;
		/** 状态码对应的消息 */
		msg: string;
		/** 获取到的数据列表 */
		data: T[];

		/** 执行操作触发的事件，如果是在open阶段失败的话该值为空 */
		event?: {
			srcElement: IDBRequest<T>;
			target: IDBRequest<T>;
		} & Event;
	}> {
		let list: T[] = [];
		let that = this;
		return new Promise((resolve) => {
			/* 正则查询 */
			let dbName = that.#dbName;
			this.open(function (idbStore) {
				/* 判断返回的数据中是否有error字段 */
				if (idbStore == null) {
					resolve({
						success: false,
						code: that.#statusCode.regexpGetFailed.code,
						msg: that.#statusCode.regexpGetFailed.msg,
						data: [],
					});
				} else {
					let request = idbStore.getAll();
					request.onsuccess = function (event: any) {
						let target = event.target as IDBRequest<
							{ key: string; value: T }[]
						>;
						let result = target.result;
						if (result.length !== 0) {
							result.forEach((dataItem, index) => {
								// 当前项的key
								let __key = dataItem["key"];
								// 当前项的value
								let __value = dataItem["value"];
								if (__key.match(key)) {
									list = list.concat(__value);
								}
							});
						}
						resolve({
							success: true,
							code: that.#statusCode.operationSuccess.code,
							msg: that.#statusCode.operationSuccess.msg,
							data: list,

							event: event,
						});
					};
					request.onerror = function (event: any) {
						resolve({
							success: false,
							code: that.#statusCode.getFailed.code,
							msg: that.#statusCode.getFailed.msg,
							data: [],

							event: event,
						});
					};
				}
			}, dbName);
		});
	}

	/**
	 * 删除数据
	 * @param key 数据key
	 */
	async delete(key: string): Promise<{
		/** 本操作是否成功 */
		success: boolean;
		/** 状态码 */
		code: number;
		/** 状态码对应的消息 */
		msg: string;
		/** 执行操作触发的事件，如果是在open阶段失败的话该值为空 */
		event?: {
			srcElement: IDBRequest;
			target: IDBRequest;
		} & Event;
	}> {
		let that = this;
		return new Promise((resolve) => {
			/* 根据key删除某条数据 */
			let dbName = that.#dbName;
			this.open(function (idbStore) {
				if (idbStore == null) {
					resolve({
						success: false,
						code: that.#statusCode.deleteFailed.code,
						msg: that.#statusCode.deleteFailed.msg,
					});
				} else {
					// 删除键
					let request = idbStore.delete(key);
					request.onsuccess = function (event: any) {
						resolve({
							success: true,
							code: that.#statusCode.operationSuccess.code,
							msg: that.#statusCode.operationSuccess.msg,
							event: event,
						});
					};
					request.onerror = function (event: any) {
						resolve({
							success: false,
							code: that.#statusCode.deleteFailed.code,
							msg: that.#statusCode.deleteFailed.msg,
							event: event,
						});
					};
				}
			}, dbName);
		});
	}

	/**
	 * 删除所有数据
	 */
	async deleteAll(): Promise<{
		/** 本操作是否成功 */
		success: boolean;
		/** 状态码 */
		code: number;
		/** 状态码对应的消息 */
		msg: string;
		/** 执行操作触发的事件，如果是在open阶段失败的话该值为空 */
		event?: {
			srcElement: IDBRequest;
			target: IDBRequest;
		} & Event;
	}> {
		let that = this;
		return new Promise((resolve) => {
			/* 清空数据库 */
			let dbName = that.#dbName;
			this.open(function (idbStore) {
				if (idbStore == null) {
					resolve({
						success: false,
						code: that.#statusCode.deleteAllFailed.code,
						msg: that.#statusCode.deleteAllFailed.msg,
					});
				} else {
					// 清空
					let operateResult = idbStore.clear();
					operateResult.onsuccess = function (event: any) {
						resolve({
							success: true,
							code: that.#statusCode.operationSuccess.code,
							msg: that.#statusCode.operationSuccess.msg,
							event: event,
						});
					};
					operateResult.onerror = function (event: any) {
						resolve({
							success: false,
							code: that.#statusCode.deleteAllFailed.code,
							msg: that.#statusCode.deleteAllFailed.msg,
							event: event,
						});
					};
				}
			}, dbName);
		});
	}
}

export { indexedDB };
