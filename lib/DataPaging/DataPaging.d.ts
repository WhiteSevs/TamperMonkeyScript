type Primitive = undefined | null | boolean | string | number | symbol;

// DeepRequired 类型定义
type DeepRequired<T> =
	// 如果 T 是原始类型，则保持不变
	T extends Primitive
		? T
		: // 如果 T 没有索引签名（非对象或数组类型），也保持不变
		keyof T extends never
		? T
		: // 否则，对于 T 中的每个属性 K，将其变为必选属性，并递归应用 DeepRequired 到属性值上
		  { [K in keyof T]-?: DeepRequired<T[K]> };

interface PagingBtnConfig {
	/** 是否启用 @default true */
	enable?: boolean;
	/** 点击事件回调 */
	callBack?: () => void;
}

interface PagingConfig<T = any> {
	/** 数据 */
	data: T[];
	/** 每一页显示的数据数量 @default 5 */
	pageCount?: number;
	/** 当前能最多显示出来的页码 @default 3 */
	pageStep?: number;
	/** 当前页码 @default 1 */
	currentPage?: number;
	/** 当前页码改变的回调 */
	pageChangeCallBack?: (page: number) => void;
	/** 上一页按钮 */
	prevBtn?: PagingBtnConfig;
	/** 下一页按钮 */
	nextBtn?: PagingBtnConfig;
	/** 第一页按钮 */
	firstBtn?: PagingBtnConfig;
	/** 最后一页按钮 */
	lastBtn?: PagingBtnConfig;
}
