import { GM_getValue, GM_info, GM_setValue, unsafeWindow } from "$";
import { GM_Menu, log, pops, SCRIPT_NAME, utils } from "@/api/env";
import { PanelCommonConfig } from "./components/common";
import { PanelLiveConfig } from "./components/live";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, KEY } from "./config";
import { DouYinRouter } from "@/router";
import { PanelVideoConfig } from "./components/video";

const PopsPanel = {
    /** 数据 */
    $data: {
        /**
         * 菜单项的默认值
         * @type {UtilsDictionaryConstructor<string,any>}
         */
        data: new utils.Dictionary(),
        /** 脚本名，一般用在设置的标题上 */
        scriptName: SCRIPT_NAME,
        /** 菜单项的总值在本地数据配置的键名 */
        key: KEY,
        /** 菜单项在attributes上配置的菜单键 */
        attributeKeyName: ATTRIBUTE_KEY,
        /** 菜单项在attributes上配置的菜单默认值 */
        attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    /** 监听器 */
    $listener: {
        /**
         * 值改变的监听器
         * @type {UtilsDictionaryConstructor<string,{
         *  id: number,
         *  key: string,
         *  callback: Function
         * }>}
         */
        listenData: new utils.Dictionary(),
    },
    init() {
        this.initPanelDefaultValue();
        this.initExtensionsMenu();
    },
    initExtensionsMenu() {
        if (unsafeWindow.top !== unsafeWindow.self) {
            /* 不允许在iframe内重复注册 */
            return;
        }
        GM_Menu.add([
            {
                key: "show_pops_panel_setting",
                text: "⚙ 设置",
                autoReload: false,
                isStoreValue: false,
                showText(text) {
                    return text;
                },
                callback: () => {
                    this.showPanel();
                },
            },
        ]);
    },
    /** 初始化本地设置默认的值 */
    initPanelDefaultValue() {
        let that = this;
        /**
         * 设置默认值
         * @param config
         */
        function initDefaultValue(config: PopsPanelFormsTotalDetails | PopsPanelFormsDetails) {
            if (!config["attributes"]) {
                /* 必须配置attributes属性，用于存储菜单的键和默认值 */
                return;
            }
            /* 获取键名 */
            // @ts-ignore
            let key = config["attributes"][ATTRIBUTE_KEY];
            /* 获取默认值 */
            let defaultValue =
                // @ts-ignore
                config["attributes"][ATTRIBUTE_DEFAULT_VALUE];
            if (key == null) {
                console.warn("请先配置键", config);
                return;
            }
            /* 存储到内存中 */
            if (that.$data.data.has(key)) {
                console.warn("请检查该key(已存在): " + key);
            }
            that.$data.data.set(key, defaultValue);
        }
        let contentConfigList = this.getPanelContentConfig();
        for (let index = 0; index < contentConfigList.length; index++) {
            let leftContentConfigItem = contentConfigList[index];
            if (!leftContentConfigItem.forms) {
                /* 不存在forms */
                continue;
            }
            let rightContentConfigList = leftContentConfigItem.forms;
            for (
                let formItemIndex = 0;
                formItemIndex < rightContentConfigList.length;
                formItemIndex++
            ) {
                let rightContentConfigItem = rightContentConfigList[formItemIndex];
                // @ts-ignore
                if (rightContentConfigItem.forms) {
                    // @ts-ignore
                    let childFormConfigList = rightContentConfigItem.forms;
                    /* 该项是右侧区域-容器项的子项的配置 */
                    for (
                        let formChildConfigIndex = 0;
                        formChildConfigIndex < childFormConfigList.length;
                        formChildConfigIndex++
                    ) {
                        initDefaultValue(childFormConfigList[formChildConfigIndex]);
                    }
                } else {
                    /* 该项是右侧区域-容器项的配置 */
                    initDefaultValue(rightContentConfigItem);
                }
            }
        }
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key: string, value: any) {
        let locaData = GM_getValue(KEY, {}) as any;
        let oldValue = locaData[key];
        locaData[key] = value;
        GM_setValue(KEY, locaData);
        if (this.$listener.listenData.has(key)) {
            this.$listener.listenData.get(key).callback(key, oldValue, value);
        }
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue<T extends any>(key: string, defaultValue?: T): T {
        let locaData = GM_getValue(KEY, {}) as any;
        let localValue = locaData[key];
        if (localValue == null) {
            /* 值不存在或值为null/undefined或只有键但无值 */
            if (this.$data.data.has(key)) {
                /* 先判断是否是菜单配置的键 */
                /* 是的话取出值并返回 */
                return this.$data.data.get(key);
            }
            // @ts-ignore
            return defaultValue;
        }
        return localValue;
    },
    /**
     * 删除值
     * @param key 键
     */
    deleteValue(key: string) {
        let locaData = GM_getValue(KEY, {}) as any;
        let oldValue = locaData[key];
        Reflect.deleteProperty(locaData, key);
        GM_setValue(KEY, locaData);
        if (this.$listener.listenData.has(key)) {
            this.$listener.listenData.get(key).callback(key, oldValue, void 0);
        }
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key: string, callback: (key: string, oldValue: any, newValue: any) => void) {
        let listenerId = Math.random();
        this.$listener.listenData.set(key, {
            id: listenerId,
            key,
            callback,
        });
        return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId: number) {
        let deleteKey = null;
        for (const [key, value] of this.$listener.listenData.entries()) {
            if (value.id === listenerId) {
                break;
            }
        }
        this.$listener.listenData.delete(deleteKey);
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     */
    execMenu(key: string, callback: (value: any) => void) {
        if (typeof key !== "string") {
            throw new TypeError("key 必须是字符串");
        }
        let value = PopsPanel.getValue(key);
        if (value) {
            callback(value);
        }
    },
    /**
     * 显示设置面板
     */
    showPanel() {
        pops.panel({
            title: {
                text: `${SCRIPT_NAME}-设置`,
                position: "center",
                html: false,
                style: ""
            },
            content: this.getPanelContentConfig(),
            mask: {
                enable: true,
                clickEvent: {
                    toClose: true,
                    toHide: false
                },
            },
            isMobile: true,
            width: this.getWidth(),
            height: this.getHeight(),
            drag: true,
            only: true,
        });
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
        if (window.innerWidth < 550) {
            return "92dvw"
        } else {
            return "550px"
        }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
        if (window.innerHeight < 450) {
            return "80dvh"
        } else {
            return "450px"
        }
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
        let configList: PopsPanelContentConfig[] = [
            {
                id: "panel-config-common",
                title: "通用",
                forms: PanelCommonConfig,
            },
            {
                id: "panel-config-video",
                title: "视频",
                isDefault() {
                    return DouYinRouter.isVideo();
                },
                forms: PanelVideoConfig,
            },
            {
                id: "panel-config-live",
                title: "直播",
                isDefault() {
                    return DouYinRouter.isLive();
                },
                forms: PanelLiveConfig,
            },
        ];
        return configList;
    },
};

export {
    PopsPanel
}