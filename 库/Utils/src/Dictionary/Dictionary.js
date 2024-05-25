class UtilsDictionary {
	items = {};
	/**
	 * 检查是否有某一个键
	 * @param {string} key 键
	 * @returns {boolean}
	 */
	has(key) {
		return this.items.hasOwnProperty(key);
	}
	/**
	 * 检查已有的键中是否以xx开头
	 * @param {string} key 需要匹配的键
	 * @returns {boolean}
	 */
	startsWith(key) {
		let allKeys = this.keys();
		for (const keyName of allKeys) {
			if (keyName.startsWith(key)) {
				return true;
			}
		}
		return false;
	}
	/**
	 * 获取以xx开头的键的值
	 * @param {string} key 需要匹配的键
	 * @returns {any}
	 */
	getStartsWith(key) {
		let allKeys = this.keys();
		for (const keyName of allKeys) {
			if (keyName.startsWith(key)) {
				return this.items[keyName];
			}
		}
	}
	/**
	 * 为字典添加某一个值
	 * @param {string} key 键
	 * @param {any} val 值，默认为""
	 */
	set(key, val = "") {
		if (key === void 0) {
			throw new Error("Utils.Dictionary().set 参数 key 不能为空");
		}
		this.items[key] = val;
	}
	/**
	 * 删除某一个键
	 * @param {string} key 键
	 * @returns {boolean}
	 */
	delete(key) {
		if (this.has(key)) {
			Reflect.deleteProperty(this.items, key);
			return true;
		}
		return false;
	}
	/**
	 * 获取某个键的值
	 * @param {string} key 键
	 * @returns {any}
	 */
	get(key) {
		return this.has(key) ? this.items[key] : void 0;
	}
	/**
	 * 返回字典中的所有值
	 * @returns {any[]}
	 */
	values() {
		let resultList = [];
		for (let prop in this.items) {
			if (this.has(prop)) {
				resultList.push(this.items[prop]);
			}
		}
		return resultList;
	}
	/**
	 * 清空字典
	 */
	clear() {
		this.items = null;
		this.items = {};
	}
	/**
	 * 获取字典的长度
	 * @returns {number}
	 */
	size() {
		return Object.keys(this.items).length;
	}
	/**
	 * 获取字典所有的键
	 */
	keys() {
		return Object.keys(this.items);
	}
	/**
	 * 返回字典本身
	 * @returns {object}
	 */
	getItems() {
		return this.items;
	}
	/**
	 * 合并另一个字典
	 * @param {object} data 需要合并的字典
	 */
	concat(data) {
		this.items = Utils.assign(this.items, data.getItems());
	}
	forEach(callbackfn) {
		for (const key in this.items) {
			callbackfn(this.get(key), key, this.items);
		}
	}
	/**
	 * 获取字典的长度，同this.size
	 * @returns {number}
	 */
	get length() {
		return this.size();
	}
	/**
	 * 迭代器
	 */
	get entries() {
		let that = this;
		return function* () {
			let itemKeys = Object.keys(that.getItems());
			for (const keyName of itemKeys) {
				yield [keyName, that.get(keyName)];
			}
		};
	}
	/**
	 * 是否可遍历
	 */
	get [Symbol.iterator]() {
		let that = this;
		return function () {
			return that.entries();
		};
	}
	/**
	 * .toString()和.toLocaleString()输出的字符串
	 */
	get [Symbol.toStringTag]() {
		return "UtilsDictionary";
	}
}

export { UtilsDictionary };
