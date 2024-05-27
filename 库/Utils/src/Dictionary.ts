import { Utils } from "./Utils";

class UtilsDictionary<K extends PropertyKey, V extends any> {
	#items: {
		[key: PropertyKey]: V;
	} = {};
	constructor() {}
	/**
	 * 检查是否有某一个键
	 * @param key 键
	 */
	has(key: K): boolean {
		return this.#items.hasOwnProperty(key as PropertyKey);
	}
	/**
	 * 检查已有的键中是否以xx开头
	 * @param key 需要匹配的键
	 */
	startsWith(key: K): boolean {
		let allKeys = this.keys();
		for (const keyName of allKeys) {
			if (keyName.startsWith(key as string)) {
				return true;
			}
		}
		return false;
	}
	/**
	 * 获取以xx开头的键的值
	 * @param key 需要匹配的键
	 */
	getStartsWith(key: K): V {
		let allKeys = this.keys();
		let result = null;
		for (const keyName of allKeys) {
			if (keyName.startsWith(key as string)) {
				result = (this.#items as any)[keyName];
				break;
			}
		}
		return result;
	}
	/**
	 * 为字典添加某一个值
	 * @param key 键
	 * @param val 值，默认为""
	 */
	set(key: K, val: V): void {
		if (key === void 0) {
			throw new Error("Utils.Dictionary().set 参数 key 不能为空");
		}
		(this.#items as any)[key] = val;
	}
	/**
	 * 删除某一个键
	 * @param key 键
	 */
	delete(key: K): boolean {
		if (this.has(key)) {
			Reflect.deleteProperty(this.#items, key as string);
			return true;
		}
		return false;
	}
	/**
	 * 获取某个键的值
	 * @param key 键
	 */
	get(key: K) {
		return this.has(key) ? this.getItems()[key] : void 0;
	}
	/**
	 * 返回字典中的所有值
	 */
	values() {
		let resultList: V[] = [];
		for (let prop in this.getItems()) {
			if (this.has(prop as K)) {
				resultList.push(this.getItems()[prop]);
			}
		}
		return resultList;
	}
	/**
	 * 清空字典
	 */
	clear() {
		this.#items = void 0 as any;
		this.#items = {};
	}
	/**
	 * 获取字典的长度
	 */
	size() {
		return Object.keys(this.getItems()).length;
	}
	/**
	 * 获取字典所有的键
	 */
	keys() {
		return Object.keys(this.getItems());
	}
	/**
	 * 返回字典本身
	 */
	getItems() {
		return this.#items;
	}
	/**
	 * 合并另一个字典
	 * @param data 需要合并的字典
	 */
	concat(data: UtilsDictionary<K, V>) {
		this.#items = Utils.assign(this.#items, data.getItems());
	}
	forEach(
		callbackfn: (value: V, key: K, dictionary: UtilsDictionary<K, V>) => void
	) {
		for (const key in this.getItems()) {
			callbackfn(this.get(key as any) as V, key as K, this.getItems() as any);
		}
	}
	/**
	 * 获取字典的长度，同this.size
	 */
	get length() {
		return this.size();
	}
	/**
	 * 迭代器
	 */
	get entries() {
		let that = this;
		return function* (): IterableIterator<[K, V]> {
			let itemKeys = Object.keys(that.getItems());
			for (const keyName of itemKeys) {
				yield [keyName as K, that.get(keyName as K) as V];
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
}

export { UtilsDictionary };
