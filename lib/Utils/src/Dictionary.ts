import { CommonUtil } from "./CommonUtil";

export class UtilsDictionary<
	K extends string | number | symbol,
	V extends unknown
> {
	private items: {
		[key: string | number | symbol]: V;
	};
	constructor();
	constructor(key: K, value: V);
	constructor(key?: K, value?: V) {
		this.items = {};
		if (key != null) {
			this.set(key, value!);
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
	/**
	 * 检查是否有某一个键
	 * @param key 键
	 */
	has(key: K): boolean {
		return Reflect.has(this.items, key as PropertyKey);
	}
	/**
	 * 检查已有的键中是否以xx开头
	 * @param key 需要匹配的键
	 */
	startsWith(key: K): boolean {
		let allKeys = this.keys();
		for (const keyName of allKeys) {
			if (String(keyName).startsWith(String(key))) {
				return true;
			}
		}
		return false;
	}
	/**
	 * 获取以xx开头的键的值
	 * @param key 需要匹配的键
	 */
	getStartsWith(key: K): V | undefined {
		let allKeys = this.keys();
		let result: V | undefined = void 0;
		for (const keyName of allKeys) {
			if (String(keyName).startsWith(String(key))) {
				result = this.get(keyName as K)!;
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
		Reflect.set(this.items, key as PropertyKey, val);
	}
	/**
	 * 删除某一个键
	 * @param key 键
	 */
	delete(key: K): boolean {
		if (this.has(key)) {
			return Reflect.deleteProperty(this.items, key as string);
		}
		return false;
	}
	/**
	 * 获取某个键的值
	 * https://github.com/microsoft/TypeScript/issues/9619
	 * 微软到现在都没有修复has和get的联动
	 * @param key 键
	 */
	get(key: K): V {
		return Reflect.get(this.items, key as PropertyKey) as V;
	}
	/**
	 * 返回字典中的所有值
	 */
	values(): V[] {
		let resultList: V[] = [];
		for (let prop in this.getItems()) {
			if (this.has(prop as K)) {
				resultList.push(this.get(prop as K)!);
			}
		}
		return resultList;
	}
	/**
	 * 清空字典
	 */
	clear() {
		this.items = null as any;
		this.items = {};
	}
	/**
	 * 获取字典的长度
	 */
	size(): number {
		return Object.keys(this.getItems()).length;
	}
	/**
	 * 获取字典所有的键
	 */
	keys(): (string | symbol)[] {
		return Reflect.ownKeys(this.items);
	}
	/**
	 * 返回字典本身
	 */
	getItems() {
		return this.items;
	}
	/**
	 * 合并另一个字典
	 * @param data 需要合并的字典
	 */
	concat(data: UtilsDictionary<K, V>) {
		this.items = CommonUtil.assign(this.items, data.getItems());
	}
	/**
	 * 迭代字典
	 * @param callbackfn 回调函数
	 */
	forEach(
		callbackfn: (value: V, key: K, dictionary: UtilsDictionary<K, V>) => void
	) {
		for (const key in this.getItems()) {
			callbackfn(this.get(key as any) as V, key as K, this.getItems() as any);
		}
	}
}
