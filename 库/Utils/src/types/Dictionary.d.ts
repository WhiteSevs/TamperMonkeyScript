declare interface UtilsDictionaryConstructor<K extends any, V extends any> {
	/** 检查是否有某一个键 */
	has(key: K): boolean;
	/** 检查已有的键中是否以xx开头 */
	startsWith(key: K): boolean;
	/** 获取以xx开头的键的值 */
	getStartsWith(key: K): V;
	/** 为字典添加某一个值 */
	set(key: K, val: V): void;
	/** 删除某一个键 */
	delete(key: K): boolean;
	/** 获取某个键的值 */
	get(key: K): V;
	/** 返回字典中的所有值 */
	values(): V[];
	/** 清空字典 */
	clear(): void;
	/** 获取字典的长度 */
	size(): number;
	/** 获取字典所有的键 */
	keys(): K[];
	/** 返回字典本身 */
	getItems(): Record<K, V>;
	/** 合并另一个字典 */
	concat(data: UtilsDictionaryConstructor<K, V>): void;
	/**
	 * 迭代器
	 */
	entries(): IterableIterator<[K, V]>;
	/**
	 * 循环字典
	 */
	forEach(
		callbackfn: (
			value: V,
			key: K,
			dictionary: UtilsDictionaryConstructor<K, V>
		) => void
	): void;
	/**
	 * 可迭代
	 */
	[Symbol.iterator](): IterableIterator<[K, V]>;
	/**
	 * .toString()和.toLocaleString()输出的字符串
	 */
	[Symbol.toStringTag](): string;
	/**
	 * 同this.size()
	 */
	get length(): number;
}
