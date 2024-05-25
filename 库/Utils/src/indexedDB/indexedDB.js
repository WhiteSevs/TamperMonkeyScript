const indexedDB = function (
	dbName = "default_db",
	storeName = "default_form",
	dbVersion = 1
) {
	this.dbName = dbName;
	/* websql的版本号，由于ios的问题，版本号的写法不一样 */
	this.slqVersion = "1";
	this.dbVersion = dbVersion;
	this.storeName = storeName;
	/* 监听IndexDB */
	this.indexedDB =
		window.indexedDB ||
		window.mozIndexedDB ||
		window.webkitIndexedDB ||
		window.msIndexedDB;
	if (!this.indexedDB) {
		alert("很抱歉，您的浏览器不支持indexedDB");
	}
	/* 缓存数据库，避免同一个页面重复创建和销毁 */
	this.db = {};
	this.store = null;
	this.errorCode = {
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
	};
	let that = this;
	/**
	 * 创建 “表”
	 * @param {string} dbName 表名
	 * @returns
	 */
	this.createStore = function (dbName) {
		let txn, store;
		if (that.indexedDB) {
			/* 如果是支持IndexDB的 */
			txn = that.db[dbName].transaction(that.storeName, "readwrite");
			/* IndexDB的读写权限 */
			store = txn.objectStore(that.storeName);
		}
		return store;
	};
	/**
	 * 打开数据库
	 * @param {function} callback  回调
	 * @param {string} dbName 数据库名
	 */
	this.open = function (callback, dbName) {
		/* 打开数据库 */
		if (that.indexedDB) {
			/* 如果支持IndexDB */
			if (!that.db[dbName]) {
				/* 如果缓存中没有，则进行数据库的创建或打开，提高效率 */
				let request = that.indexedDB.open(dbName, that.dbVersion);
				request.onerror = function (e) {
					callback({
						code: that.errorCode.open.code,
						msg: that.errorCode.open.msg,
						error: e,
					});
				};
				request.onsuccess = function (e) {
					if (!that.db[dbName]) {
						that.db[dbName] = e.target.result;
					}
					let store = that.createStore(dbName);
					callback(store);
				};
				request.onupgradeneeded = function (e) {
					that.db[dbName] = e.target.result;
					let store = that.db[dbName].createObjectStore(that.storeName, {
						keyPath: "key",
					});
					store.transaction.oncomplete = function (event) {
						callback(store);
					};
				};
			} else {
				/* 如果缓存中已经打开了数据库，就直接使用 */
				let store = that.createStore(dbName);
				callback(store);
			}
		}
	};
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
	this.save = async function (key, value) {
		if (that.indexedDB) {
			return new Promise((resolve, reject) => {
				let dbName = that.dbName;
				let inData = {
					key: key,
					value: value,
				};
				that.open(function (result) {
					let error = result.hasOwnProperty("error");
					if (error) {
						resolve(result);
					} else {
						let request = result.put(inData);
						request.onsuccess = function (e) {
							/* 保存成功有success 字段 */
							resolve({
								code: that.errorCode.success.code,
								msg: that.errorCode.success.msg,
								success: true,
							});
						};
						request.onerror = function (e) {
							resolve({
								code: that.errorCode.save.code,
								msg: that.errorCode.save.msg,
								error: e,
							});
						};
					}
				}, dbName);
			});
		}
	};
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
	this.get = async function (key) {
		return new Promise((resolve, reject) => {
			let dbName = that.dbName;
			if (that.indexedDB) {
				that.open(function (result) {
					/* 判断返回的数据中是否有error字段 */
					let error = result.hasOwnProperty("error");
					if (error) {
						reject({
							code: that.errorCode.open.get,
							msg: that.errorCode.get.msg,
							error: error,
							result: result,
						});
					} else {
						let request = result.get(key);
						request.onsuccess = function (e) {
							let result = e.target.result;
							let data = result ? result.value : void 0;
							resolve({
								code: data
									? that.errorCode.success.code
									: that.errorCode.error.code,
								msg: data
									? that.errorCode.success.msg
									: that.errorCode.error.msg,
								data: data || [],
								success: true,
							});
						};
						request.onerror = function (e) {
							reject({
								code: that.errorCode.get.code,
								msg: that.errorCode.get.msg,
								result: result,
								error: e,
							});
						};
					}
				}, dbName);
			}
		});
	};
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
	this.regexpGet = async function (key) {
		let list = [];
		return new Promise((resolve, reject) => {
			/* 正则查询 */
			let dbName = that.dbName;
			if (that.indexedDB) {
				that.open(function (result) {
					/* 判断返回的数据中是否有error字段 */
					let error = result.hasOwnProperty("error");
					if (error) {
						reject({
							code: that.errorCode.open.get,
							msg: that.errorCode.get.msg,
							error: error,
							result: result,
						});
					} else {
						let request = result.getAll();
						request.onsuccess = function (e) {
							let result = e.target.result;
							if (result.length !== 0) {
								result.forEach((item, index) => {
									if (item["key"].match(key)) {
										let concatList = item["value"];
										concatList["key"] = item["key"];
										list = [...list, concatList];
									}
								});
							}
							resolve({
								code: that.errorCode.success.code,
								msg: that.errorCode.success.msg,
								data: list,
								success: true,
							});
						};
						request.onerror = function (e) {
							reject({
								code: that.errorCode.get.code,
								msg: that.errorCode.get.msg,
								result: result,
								error: e,
							});
						};
					}
				}, dbName);
			}
		});
	};
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
	this.delete = async function (key) {
		return new Promise((resolve, reject) => {
			/* 根据key删除某条数据 */
			let dbName = that.dbName;
			if (that.indexedDB) {
				that.open(function (result) {
					let error = result.hasOwnProperty("error");
					if (error) {
						resolve(result);
					} else {
						let request = result.get(key);
						request.onsuccess = function (e) {
							let recode = e.target.result;
							if (recode) {
								request = result.delete(key);
							}
							resolve({
								code: recode
									? that.errorCode.success.code
									: that.errorCode.error.code,
								msg: recode
									? that.errorCode.success.msg
									: that.errorCode.error.msg,
								success: true,
							});
						};
						request.onerror = function (e) {
							resolve({
								code: that.errorCode.delete.code,
								msg: that.errorCode.delete.msg,
								error: e,
							});
						};
					}
				}, dbName);
			}
		});
	};
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
	this.deleteAll = async function () {
		return new Promise((resolve, reject) => {
			/* 清空数据库 */
			let dbName = that.dbName;
			if (that.indexedDB) {
				that.open(function (result) {
					let error = result.hasOwnProperty("error");
					if (error) {
						resolve({
							code: that.errorCode.deleteAll.code,
							msg: that.errorCode.deleteAll.msg,
							error: error,
							result: result,
						});
					} else {
						result.clear();
						resolve({
							code: that.errorCode.success.code,
							msg: that.errorCode.success.msg,
							success: true,
						});
					}
				}, dbName);
			}
		});
	};
};

export { indexedDB };
