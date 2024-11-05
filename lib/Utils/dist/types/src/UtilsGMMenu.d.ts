import type { UtilsGMMenuConstructorOptions, UtilsGMMenuOption } from "./types/UtilsGMMenu";
declare class GMMenu {
    private GM_Api;
    private MenuHandle;
    constructor(details: UtilsGMMenuConstructorOptions);
    /**
     * 新增菜单数据
     * @param menuOption
     */
    private __add;
    /**
     * 新增菜单数据
     *
     * 自动调用.update()
     * @param menuOption
     */
    add(menuOption: UtilsGMMenuOption[] | UtilsGMMenuOption): void;
    /**
     * 更新菜单数据
     *
     * 实现方式：先取消注册所有已注册的菜单、再依次注册所有菜单项
     *
     * 如果菜单不存在，新增菜单项
     *
     * 如果菜单已存在，新菜单项覆盖旧的菜单项
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
     * @deprecated
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
