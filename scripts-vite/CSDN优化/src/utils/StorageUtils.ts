import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

export class StorageUtils {
	/** 存储的键名 */
	storageKey: string;
	/**
	 * 存储的键名，可以是多层的，如：a.b.c
	 *
	 * 那就是
	 * {
	 *  "a": {
	 *     "b": {
	 *       "c": {
	 *         ...你的数据
	 *       }
	 *     }
	 *   }
	 * }
	 * @param key
	 */
	constructor(key: string) {
		if (typeof key === "string") {
			let trimKey = key.trim();
			if (trimKey == "") {
				throw new Error("key参数不能为空字符串");
			}
			this.storageKey = trimKey;
		} else {
			throw new Error("key参数类型错误，必须是字符串");
		}
		this.getLocalValue();
	}
	/**
	 * 获取本地值
	 */
	private getLocalValue(): any {
		let localValue = GM_getValue(this.storageKey);
		if (localValue == null) {
			localValue = {};
			this.setLocalValue(localValue);
		}
		return localValue;
	}
	/**
	 * 设置本地值
	 * @param value
	 */
	private setLocalValue(value: any) {
		GM_setValue(this.storageKey, value);
	}
	/**
	 * 设置值
	 * @param key 键
	 * @param value 值
	 */
	set(key: string, value: any) {
		let localValue = this.getLocalValue();
		Reflect.set(localValue, key, value);
		this.setLocalValue(localValue);
	}
	/**
	 * 获取值
	 * @param key 键
	 * @param defaultValue 默认值
	 */
	get<T>(key: string, defaultValue?: T): T {
		let localValue = this.getLocalValue();
		return Reflect.get(localValue, key) ?? defaultValue;
	}
	/**
	 * 获取所有值
	 */
	getAll() {
		let localValue = this.getLocalValue();
		return localValue;
	}
	/**
	 * 删除值
	 * @param key 键
	 */
	delete(key: string) {
		let localValue = this.getLocalValue();
		Reflect.deleteProperty(localValue, key);
		this.setLocalValue(localValue);
	}
	/**
	 * 判断是否存在该值
	 */
	has(key: string) {
		let localValue = this.getLocalValue();
		return Reflect.has(localValue, key);
	}
	/**
	 * 获取所有键
	 */
	keys() {
		let localValue = this.getLocalValue();
		return Reflect.ownKeys(localValue);
	}
	/**
	 * 获取所有值
	 */
	values() {
		let localValue = this.getLocalValue();
		return Reflect.ownKeys(localValue).map((key) =>
			Reflect.get(localValue, key)
		);
	}
	/**
	 * 清空所有值
	 */
	clear() {
		GM_deleteValue(this.storageKey);
	}
}
