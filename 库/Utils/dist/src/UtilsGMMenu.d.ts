declare interface UtilsGMMenuClickCallBackData {
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
declare interface UtilsGMMenuOption {
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
declare interface UtilsGMMenuConstructorOptions {
    /** （可选）配置*/
    data?: UtilsGMMenuOption[];
    /** （可选）全局菜单点击菜单后自动刷新网页，默认为true */
    autoReload?: boolean;
    /**  油猴函数 @grant GM_getValue */
    GM_getValue<T extends any>(name: string, defaultValue?: T): T;
    /**  油猴函数 @grant GM_setValue */
    GM_setValue(name: string, value: any): Promise<undefined> | undefined;
    /**  油猴函数 @grant GM_registerMenuCommand */
    GM_registerMenuCommand(name: string, listener: (event: PointerEvent | MouseEvent) => void, accessKey?: string): number;
    /**  油猴函数 @grant GM_unregisterMenuCommand */
    GM_unregisterMenuCommand(id: number): void;
}
declare class GMMenu {
    private GM_Api;
    private MenuHandle;
    constructor(details: UtilsGMMenuConstructorOptions);
    /**
     * 新增菜单数据
     * @param paramData
     */
    add(paramData: UtilsGMMenuOption[] | UtilsGMMenuOption): void;
    /**
     * 更新菜单数据
     * @param options 数据
     */
    update(options?: UtilsGMMenuOption[] | UtilsGMMenuOption): void;
    /**
     * 卸载菜单
     * @param menuId 已注册的菜单id
     */
    delete(menuId: number): void;
    /**
     * 根据键值获取enable值
     * @param menuKey 菜单-键key
     */
    get(menuKey: string): boolean;
    /**
     * 根据键值获取enable值
     * @param menuKey 菜单-键key
     */
    getEnable(menuKey: string): boolean;
    /**
     * 根据键值获取text值
     * @param menuKey 菜单-键key
     */
    getText(menuKey: string): string;
    /**
     * 根据键值获取showText函数的值
     * @param menuKey 菜单-键key
     */
    getShowTextValue(menuKey: string): string;
    /**
     * 获取当前已注册菜单的id
     * @param menuKey
     */
    getMenuId(menuKey: string): number | undefined | null;
    /**
     * 根据键值获取accessKey值
     * @param menuKey 菜单-键key
     */
    getAccessKey(menuKey: string): string | undefined;
    /**
     * 根据键值获取autoClose值
     * @param menuKey 菜单-键key
     */
    getAutoClose(menuKey: string): boolean | undefined;
    /**
     * 根据键值获取autoReload值
     * @param menuKey 菜单-键key
     */
    getAutoReload(menuKey: string): boolean | undefined;
    /**
     * 根据键值获取callback函数
     * @param menuKey 菜单-键key
     */
    getCallBack(menuKey: string): Function | undefined;
    /**
     * 获取当enable为true时默认显示在菜单中前面的emoji图标
     */
    getEnableTrueEmoji(): string;
    /**
     * 获取当enable为false时默认显示在菜单中前面的emoji图标
     */
    getEnableFalseEmoji(): string;
    /**
     * 获取本地存储的菜单外部的键名
     * @param keyName
     */
    getLocalStorageKeyName(): string;
    /**
     * 设置菜单的值
     * @param menuKey 菜单-键key
     * @param value 需要设置的值
     */
    setValue(menuKey: string, value: any): void;
    /**
     * 设置菜单的值
     * @param menuKey 菜单-键key
     * @param value 需要设置的值
     */
    setEnable(menuKey: string, value: boolean): void;
    /**
     * 设置当enable为true时默认显示在菜单中前面的emoji图标
     * @param emojiString
     */
    setEnableTrueEmoji(emojiString: string): void;
    /**
     * 设置当enable为false时默认显示在菜单中前面的emoji图标
     * @param emojiString
     */
    setEnableFalseEmoji(emojiString: string): void;
    /**
     * 设置本地存储的菜单外部的键名
     * @param keyName
     */
    setLocalStorageKeyName(keyName: string): void;
}
export { GMMenu };
