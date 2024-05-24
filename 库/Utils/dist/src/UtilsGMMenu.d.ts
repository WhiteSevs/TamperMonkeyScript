/**
 *
 * @param {UtilsGMMenuConstructorOptions} details
 */
export function GMMenu(details: UtilsGMMenuConstructorOptions): void;
export class GMMenu {
    constructor(details: UtilsGMMenuConstructorOptions);
    /**
     * 新增菜单数据
     * @param {UtilsGMMenuOption[]|UtilsGMMenuOption} paramData
     */
    add: (paramData: UtilsGMMenuOption[] | UtilsGMMenuOption) => void;
    /**
     * 更新菜单数据
     * @param { ?UtilsGMMenuOption[]|UtilsGMMenuOption } options 数据
     */
    update: (options: (UtilsGMMenuOption[] | UtilsGMMenuOption) | null) => void;
    /**
     * 卸载菜单
     * @param {number} menuId 已注册的菜单id
     */
    delete: (menuId: number) => void;
    /**
     * 根据键值获取enable值
     * @param {string} menuKey 菜单-键key
     * @returns {boolean}
     */
    get: (menuKey: string) => boolean;
    /**
     * 根据键值获取enable值
     * @param {string} menuKey 菜单-键key
     * @returns {boolean}
     */
    getEnable: (menuKey: string) => boolean;
    /**
     * 根据键值获取text值
     * @param {string} menuKey 菜单-键key
     * @returns {string}
     */
    getText: (menuKey: string) => string;
    /**
     * 根据键值获取showText函数的值
     * @param {string} menuKey 菜单-键key
     * @returns {string}
     */
    getShowTextValue: (menuKey: string) => string;
    /**
     * 获取当前已注册菜单的id
     * @param {string} menuKey
     * @returns {?number}
     */
    getMenuId: (menuKey: string) => number | null;
    /**
     * 根据键值获取accessKey值
     * @param {string} menuKey 菜单-键key
     * @returns {?string}
     */
    getAccessKey: (menuKey: string) => string | null;
    /**
     * 根据键值获取autoClose值
     * @param {string} menuKey 菜单-键key
     * @returns {?boolean}
     */
    getAutoClose: (menuKey: string) => boolean | null;
    /**
     * 根据键值获取autoReload值
     * @param {string} menuKey 菜单-键key
     * @returns {boolean}
     */
    getAutoReload: (menuKey: string) => boolean;
    /**
     * 根据键值获取callback函数
     * @param {string} menuKey 菜单-键key
     * @returns {?Function}
     */
    getCallBack: (menuKey: string) => Function | null;
    /**
     * 获取当enable为true时默认显示在菜单中前面的emoji图标
     * @returns {string}
     */
    getEnableTrueEmoji: () => string;
    /**
     * 获取当enable为false时默认显示在菜单中前面的emoji图标
     * @returns {string}
     */
    getEnableFalseEmoji: () => string;
    /**
     * 获取本地存储的菜单外部的键名
     * @param {string} keyName
     */
    getLocalStorageKeyName: () => string;
    /**
     * 设置菜单的值
     * @param {string} menuKey 菜单-键key
     * @param {any} value 需要设置的值
     */
    setValue: (menuKey: string, value: any) => void;
    /**
     * 设置菜单的值
     * @param {string} menuKey 菜单-键key
     * @param {boolean} value 需要设置的值
     */
    setEnable: (menuKey: string, value: boolean) => void;
    /**
     * 设置当enable为true时默认显示在菜单中前面的emoji图标
     * @param {string} emojiString
     */
    setEnableTrueEmoji: (emojiString: string) => void;
    /**
     * 设置当enable为false时默认显示在菜单中前面的emoji图标
     * @param {string} emojiString
     */
    setEnableFalseEmoji: (emojiString: string) => void;
    /**
     * 设置本地存储的菜单外部的键名
     * @param {string} keyName
     */
    setLocalStorageKeyName: (keyName: string) => void;
}
