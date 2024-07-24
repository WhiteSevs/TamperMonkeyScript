declare interface UtilsIDBOpenErrorResult {
	code: number;
	msg: string;
	event: Event;
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
	#errorCode = {
		/* 错误码 */
		success: {
			code: 200,
			msg: "操作成功",
		},
		error: {
			code: 401,
			msg: "操作失败",
		},
		open: { code: 91001, msg: "打开数据库失败" },
		save: { code: 91002, msg: "保存数据失败" },
		get: { code: 91003, msg: "获取数据失败" },
		delete: { code: 91004, msg: "删除数据失败" },
		deleteAll: { code: 91005, msg: "清空数据库失败" },
		regexpGet: { code: 91006, msg: "正则获取数据失败" },
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
			return;
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
			idbStore: IDBObjectStore | UtilsIDBOpenErrorResult,
			success: boolean
		) => void,
		dbName: string
	) {
		let that = this;
		/* 打开数据库 */
		/* 如果支持IndexDB */
		if (!that.#db[dbName]) {
			/* 如果缓存中没有，则进行数据库的创建或打开，提高效率 */
			let request = that.#indexedDB.open(dbName, that.#dbVersion);
			request.onerror = function (event: Event) {
				callback(
					{
						code: that.#errorCode.open.code,
						msg: that.#errorCode.open.msg,
						event: event,
					},
					false
				);
			};
			request.onsuccess = function (event: Event) {
				if (!that.#db[dbName]) {
					let target = event.target as IDBRequest;
					that.#db[dbName] = target.result;
				}
				let store = that.createStore(dbName);
				callback(store, true);
			};
			request.onupgradeneeded = function (event: Event) {
				let target = event.target as IDBRequest;
				that.#db[dbName] = target.result;
				let store = that.#db[dbName].createObjectStore(that.#storeName, {
					keyPath: "key",
				});
				store.transaction.oncomplete = function (event: Event) {
					callback(store, true);
				};
			};
		} else {
			/* 如果缓存中已经打开了数据库，就直接使用 */
			let store = that.createStore(dbName);
			callback(store, true);
		}
	}
	/**
	 * 保存数据到数据库
	 * @param key 数据key
	 * @param value 数据值
	 */
	async save(
		key: string,
		value: any
	): Promise<{
		success: boolean;
		code: number;
		msg: string;

		event?: Event;
	}> {
		let that = this;
		return new Promise((resolve) => {
			let dbName = that.#dbName;
			let inData = {
				key: key,
				value: value,
			};
			that.open(function (idbStore, success) {
				if (!success) {
					resolve({
						success: false,
						code: that.#errorCode.save.code,
						msg: that.#errorCode.save.msg,
					});
				} else {
					idbStore = idbStore as IDBObjectStore;
					let request = idbStore.put(inData);
					request.onsuccess = function (event: Event) {
						/* 保存成功有success 字段 */
						// @ts-ignore
						let target = event.target as IDBRequest;
						resolve({
							success: true,
							code: that.#errorCode.success.code,
							msg: that.#errorCode.success.msg,

							event: event,
						});
					};
					request.onerror = function (event: Event) {
						// @ts-ignore
						let target = event.target as IDBRequest;
						resolve({
							success: false,

							code: that.#errorCode.save.code,
							msg: that.#errorCode.save.msg,
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
		success: boolean;
		code: number;
		msg: string;
		data: T;

		event?: Event;
		result?: any;
	}> {
		let that = this;
		return new Promise((resolve) => {
			let dbName = that.#dbName;
			that.open(function (idbStore, success) {
				/* 判断返回的数据中是否有error字段 */
				if (!success) {
					resolve({
						success: false,
						code: that.#errorCode.get.code,
						msg: that.#errorCode.get.msg,
						data: void 0 as any,
					});
				} else {
					idbStore = idbStore as IDBObjectStore;
					let request = idbStore.get(key);
					request.onsuccess = function (event: any) {
						let target = event.target as IDBRequest;
						let result = target.result;
						/* result 返回的是 {key: string, value: any} */
						/* 键值对存储 */
						let data: T = result ? result.value : void 0;
						if (data) {
							resolve({
								success: true,
								code: that.#errorCode.success.code,
								msg: that.#errorCode.success.msg,
								data: data,

								event: event,
								result: result,
							});
						} else {
							resolve({
								success: false,
								code: that.#errorCode.error.code,
								msg: that.#errorCode.error.msg,
								data: void 0 as any,

								event: event,
								result: result,
							});
						}
					};
					request.onerror = function (event: any) {
						// @ts-ignore
						let target = event.target as IDBRequest;
						resolve({
							success: false,
							code: that.#errorCode.get.code,
							msg: that.#errorCode.get.msg,
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
	 * @param key 数据键
	 */
	async regexpGet<T extends any>(
		key: string
	): Promise<{
		success: boolean;
		code: number;
		msg: string;
		data: T[];

		event?: Event;
	}> {
		let list: T[] = [];
		let that = this;
		return new Promise((resolve) => {
			/* 正则查询 */
			let dbName = that.#dbName;
			that.open(function (idbStore, success) {
				/* 判断返回的数据中是否有error字段 */
				if (!success) {
					resolve({
						success: false,
						code: that.#errorCode.regexpGet.code,
						msg: that.#errorCode.regexpGet.msg,
						data: [],
					});
				} else {
					idbStore = idbStore as IDBObjectStore;
					let request = idbStore.getAll();
					request.onsuccess = function (event: any) {
						let target = event.target as IDBRequest;
						let result = target.result;
						if (result.length !== 0) {
							result.forEach((item: any, index: any) => {
								if (item["key"].match(key)) {
									let concatList = item["value"];
									concatList["key"] = item["key"];
									list = [...list, concatList];
								}
							});
						}
						resolve({
							success: true,
							code: that.#errorCode.success.code,
							msg: that.#errorCode.success.msg,
							data: list,

							event: event,
						});
					};
					request.onerror = function (event: any) {
						// @ts-ignore
						let target = event.target as IDBRequest;
						resolve({
							success: false,
							code: that.#errorCode.get.code,
							msg: that.#errorCode.get.msg,
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
	 * @param {string} key 数据键
	 */
	async delete(key: string): Promise<{
		success: boolean;
		code: number;
		msg: string;

		event?: Event;
	}> {
		let that = this;
		return new Promise((resolve) => {
			/* 根据key删除某条数据 */
			let dbName = that.#dbName;
			that.open(function (idbStore, success) {
				if (!success) {
					resolve({
						success: false,
						code: that.#errorCode.delete.code,
						msg: that.#errorCode.delete.msg,
					});
				} else {
					idbStore = idbStore as IDBObjectStore;
					let request = idbStore.get(key);
					request.onsuccess = function (event: any) {
						let target = event.target as IDBRequest;
						let recode = target.result;
						if (recode) {
							/* 成功 */
							request = (idbStore as IDBObjectStore).delete(key);
							resolve({
								success: true,
								code: that.#errorCode.success.code,
								msg: that.#errorCode.success.msg,
							});
						} else {
							resolve({
								success: false,
								code: that.#errorCode.error.code,
								msg: that.#errorCode.error.msg,
							});
						}
					};
					request.onerror = function (event: any) {
						// @ts-ignore
						let target = event.target as IDBRequest;
						resolve({
							success: false,
							code: that.#errorCode.delete.code,
							msg: that.#errorCode.delete.msg,

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
		success: boolean;
		code: number;
		msg: string;
	}> {
		let that = this;
		return new Promise((resolve) => {
			/* 清空数据库 */
			let dbName = that.#dbName;
			that.open(function (idbStore, success) {
				if (!success) {
					resolve({
						success: false,
						code: that.#errorCode.deleteAll.code,
						msg: that.#errorCode.deleteAll.msg,
					});
				} else {
					idbStore = idbStore as IDBObjectStore;
					idbStore.clear();
					resolve({
						success: true,
						code: that.#errorCode.success.code,
						msg: that.#errorCode.success.msg,
					});
				}
			}, dbName);
		});
	}
}

export { indexedDB };
