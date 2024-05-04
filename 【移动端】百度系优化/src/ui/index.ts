import { GM_Menu, SCRIPT_NAME, pops, utils } from "@/env";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, KEY } from "./config";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { PanelSearchSettingUI } from "./components/search/PanelSearchSettingUI";
import { BaiduRouter } from "@/router";
import { PanelBaiJiaHaoSettingUI } from "./components/baijiahao/PanelBaiJiaHaoSettingUI";
import { PanelTieBaSettingUI } from "./components/tieba/PanelTieBaSettingUI";
import { PanelWenKuSettingUI } from "./components/wenku/PanelWenKuSettingUI";
import { PanelJingYanSettingUI } from "./components/jingyan/PanelJingYanSettingUI";
import { PanelBaiKeSettingUI } from "./components/baike/PanelBaiKeSettingUI";
import { PanelZhiDaoSettingUI } from "./components/zhidao/PanelZhiDaoSettingUI";
import { PanelFanYiSettingUI } from "./components/fanyi/PanelFanYiSettingUI";
import { PanelImageSettingUI } from "./components/image/PanelImageSettingUI";
import { PanelMapSettingUI } from "./components/map/PanelMapSettingUI";
import { PanelXueSettingUI } from "./components/xue/PanelXueSettingUI";
import { PanelAiQiChaSettingUI } from "./components/aiqicha/PanelAiQiChaSettingUI";
import { PanelPosSettingUI } from "./components/pos/PanelPosSettingUI";
import { PanelHaoKanSettingUI } from "./components/haokan/PanelHaoKanSettingUI";
import { PanelGraphSettingUI } from "./components/graph/PanelGraphSettingUI";
import { PanelPanSettingUI } from "./components/pan/PanelPanSettingUI";
import { PanelYiYanSettingUI } from "./components/yiyan/PanelYiYanSettingUI";
import { PanelChatSettingUI } from "./components/chat/PanelChatSettingUI";
import { PanelEasyLearnSettingUI } from "./components/easylearn/PanelEasyLearnSettingUI";
import { PanelAiStudySettingUI } from "./components/aistudy/PanelAiStudySettingUI";
import { YiYanChat } from "@/business/yiyan/yiyanChat";

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
            {
                key: "show_yiyan_chatgpt",
                text: "⚙ 文心一言",
                autoReload: false,
                isStoreValue: false,
                showText(text) {
                    return text;
                },
                callback: () => {
                    YiYanChat.init();
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
            let key = config.attributes[ATTRIBUTE_KEY];
            /* 获取默认值 */
            let defaultValue = config["attributes"][ATTRIBUTE_DEFAULT_VALUE];
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
                let rightContentConfigItem = rightContentConfigList[formItemIndex] as any;
                if (rightContentConfigItem.forms) {
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
            return defaultValue as T;
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
            isMobile: this.isMobile(),
            width: this.getWidth(),
            height: this.getHeight(),
            drag: true,
            only: true,
        });
    },
    isMobile() {
        return window.innerWidth < 550;
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
            PanelSearchSettingUI,
            PanelBaiJiaHaoSettingUI,
            PanelTieBaSettingUI,
            PanelWenKuSettingUI,
            PanelJingYanSettingUI,
            PanelBaiKeSettingUI,
            PanelZhiDaoSettingUI,
            PanelFanYiSettingUI,
            PanelImageSettingUI,
            PanelMapSettingUI,
            PanelXueSettingUI,
            PanelAiQiChaSettingUI,
            PanelPosSettingUI,
            PanelHaoKanSettingUI,
            PanelGraphSettingUI,
            PanelPanSettingUI,
            PanelYiYanSettingUI,
            PanelChatSettingUI,
            PanelEasyLearnSettingUI,
            PanelAiStudySettingUI
        ];
        return configList;
    },
};

export {
    PopsPanel
}