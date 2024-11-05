export interface UtilsGMMenuClickCallBackData {
	/** 菜单键名 */
	key: string;
	/** 是否启用 */
	enable: boolean;
	/** 点击前的enable值 */
	oldEnable: boolean;
	/** 触发的事件 */
	event: MouseEvent | KeyboardEvent;
	/** 将enable值写入本地的回调，设置参数false就不保存到本地 */
	storeValue(enable: boolean): void;
}

export interface UtilsGMMenuOption {
	/** 菜单的本地键key，不可重复，会覆盖 */
	key: string;
	/** 菜单的文本 */
	text: string;
	/** （可选）菜单的开启状态，默认为false */
	enable?: boolean;
	/** （可选）使用条件：TamperMonkey版本>5.0，如果id和已注册的菜单id相同，可修改当前已注册菜单的options */
	id?: number;
	/** （可选）An optional access key. Please see the description below. Either options or accessKey can be specified. */
	accessKey?: string;
	/** （可选）自动关闭菜单，可不设置 */
	autoClose?: boolean;
	/** 使用条件：TamperMonkey版本>5.0，使用菜单项的鼠标悬浮上的工具提示*/
	title?: string;
	/** （可选）点击菜单后自动刷新网页，默认为true */
	autoReload?: boolean;
	/** 菜单的显示文本，未设置的话则自动根据enable在前面加上图标 */
	showText(text: string, enable: boolean): string;
	/** 点击菜单的回调 */
	callback(data: UtilsGMMenuClickCallBackData): void;
	/** 是否允许菜单进行存储值，默认true允许 */
	isStoreValue?: boolean;
}

export interface UtilsGMMenuHandledOption extends UtilsGMMenuOption {
	/**
	 * 删除该菜单
	 */
	deleteMenu(): void;
}

export interface UtilsGMMenuOptionData {
	/**
	 * 菜单id
	 */
	id?: number;
	/**
	 * 菜单配置
	 */
	data: UtilsGMMenuOption;
	/**
	 * 处理后的菜单配置
	 * 对autoReload进行处理，如果未赋值，按默认的true赋值
	 * 对isStoreValue进行处理，如果未赋值，按默认的true赋值
	 * 新增一个deleteMenu
	 */
	handleData?: UtilsGMMenuHandledOption;
}

export interface UtilsGMMenuConstructorOptions {
	/** （可选）配置*/
	data?: UtilsGMMenuOption[];
	/** （可选）全局菜单点击菜单后自动刷新网页，默认为true */
	autoReload?: boolean;
	/**  油猴函数 @grant GM_getValue */
	GM_getValue: any;
	/**  油猴函数 @grant GM_setValue */
	GM_setValue: any;
	/**  油猴函数 @grant GM_registerMenuCommand */
	GM_registerMenuCommand: any;
	/**  油猴函数 @grant GM_unregisterMenuCommand */
	GM_unregisterMenuCommand: any;
}
