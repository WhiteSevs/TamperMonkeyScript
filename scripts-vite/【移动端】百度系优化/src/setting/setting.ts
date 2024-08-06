import { GM_Menu, SCRIPT_NAME, log, pops, utils } from "@/env";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_INIT,
	ATTRIBUTE_INIT_MORE_VALUE,
	ATTRIBUTE_KEY,
	KEY,
} from "./config";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { PanelSearchSettingUI } from "./components/search/PanelSearchSettingUI";
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
import { YiYanChat } from "@/main/yiyan/YiYanChat";
import { PanelCommonSettingUI } from "./components/common/PanelCommonSettingUI";
import { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/formsType";
import { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";

type PosPanelListenerData = {
	id: number;
	key: string;
	callback: (key: string, oldValue: any, newValue: any) => void;
};

const PopsPanel = {
	/** 数据 */
	$data: {
		__data: null as any as UtilsDictionary<string, any>,
		__oneSuccessExecMenu: null as any as UtilsDictionary<string, number>,
		__onceExec: null as any as UtilsDictionary<string, number>,
		__listenData: null as any as UtilsDictionary<string, PosPanelListenerData>,
		/**
		 * 菜单项的默认值
		 */
		get data() {
			if (PopsPanel.$data.__data == null) {
				PopsPanel.$data.__data = new utils.Dictionary<string, any>();
			}
			return PopsPanel.$data.__data;
		},
		/**
		 * 成功只执行了一次的项
		 */
		get oneSuccessExecMenu() {
			if (PopsPanel.$data.__oneSuccessExecMenu == null) {
				PopsPanel.$data.__oneSuccessExecMenu = new utils.Dictionary<
					string,
					number
				>();
			}
			return PopsPanel.$data.__oneSuccessExecMenu;
		},
		/**
		 * 成功只执行了一次的项
		 */
		get onceExec() {
			if (PopsPanel.$data.__onceExec == null) {
				PopsPanel.$data.__onceExec = new utils.Dictionary<string, number>();
			}
			return PopsPanel.$data.__onceExec;
		},
		/** 脚本名，一般用在设置的标题上 */
		get scriptName() {
			return SCRIPT_NAME;
		},
		/** 菜单项的总值在本地数据配置的键名 */
		key: KEY,
		/** 菜单项在attributes上配置的菜单键 */
		attributeKeyName: ATTRIBUTE_KEY,
		/** 菜单项在attributes上配置的菜单默认值 */
		attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE,
	},
	/** 监听器 */
	$listener: {
		/**
		 * 值改变的监听器
		 */
		get listenData() {
			if (PopsPanel.$data.__listenData == null) {
				PopsPanel.$data.__listenData = new utils.Dictionary<
					string,
					PosPanelListenerData
				>();
			}
			return PopsPanel.$data.__listenData;
		},
	},
	init() {
		this.initPanelDefaultValue();
		this.initExtensionsMenu();
	},
	/** 判断是否是顶层窗口 */
	isTopWindow() {
		return unsafeWindow.top === unsafeWindow.self;
	},
	initExtensionsMenu() {
		if (!this.isTopWindow()) {
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
		function initDefaultValue(
			config: PopsPanelFormsTotalDetails | PopsPanelFormsDetails
		) {
			if (!config.attributes) {
				/* 必须配置attributes属性，用于存储菜单的键和默认值 */
				return;
			}
			/* 初始化配置对象，每个是需要配置的键值对 */
			let needInitConfig = {} as { [key: string]: any };
			/* 获取键名 */
			let key = config.attributes[ATTRIBUTE_KEY];
			if (key != null) {
				needInitConfig[key] = config.attributes[ATTRIBUTE_DEFAULT_VALUE];
			}

			/* 调用初始化方法，返回false则阻止默认行为 */
			let __attr_init__ = config.attributes[ATTRIBUTE_INIT];
			if (typeof __attr_init__ === "function") {
				let __attr_result__ = __attr_init__();
				if (typeof __attr_result__ === "boolean" && !__attr_result__) {
					return;
				}
			}
			/* 待初始化默认值的配置项 */
			let initMoreValue = config.attributes[ATTRIBUTE_INIT_MORE_VALUE];
			if (initMoreValue && typeof initMoreValue === "object") {
				/* 覆盖进去 */
				Object.assign(needInitConfig, initMoreValue);
			}
			let needInitConfigList = Object.keys(needInitConfig);
			if (!needInitConfigList.length) {
				log.warn(["请先配置键", config]);
				return;
			}
			// 循环初始化默认值
			needInitConfigList.forEach((__key) => {
				let __defaultValue = needInitConfig[__key];
				/* 存储到内存中 */
				if (that.$data.data.has(__key)) {
					log.warn("请检查该key(已存在): " + __key);
				}
				that.$data.data.set(__key, __defaultValue);
			});
		}
		/** 嵌套循环初始化默认值 */
		function loopInitDefaultValue(configList: PopsPanelContentConfig["forms"]) {
			for (let index = 0; index < configList.length; index++) {
				let configItem = configList[index];
				initDefaultValue(configItem);
				let childForms = (configItem as any).forms;
				if (childForms && Array.isArray(childForms)) {
					/* 存在子配置forms */
					loopInitDefaultValue(childForms);
				}
			}
		}
		let contentConfigList = this.getPanelContentConfig();
		for (let index = 0; index < contentConfigList.length; index++) {
			let leftContentConfigItem = contentConfigList[index];
			if (!leftContentConfigItem.forms) {
				/* 不存在forms */
				continue;
			}
			// 循环左侧容器内存储的右侧配置项
			let rightContentConfigList = leftContentConfigItem.forms;
			if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
				loopInitDefaultValue(rightContentConfigList);
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
			this.$listener.listenData.get(key)!.callback(key, oldValue, value);
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
			this.$listener.listenData.get(key)!.callback(key, oldValue, void 0);
		}
	},
	/**
	 * 监听调用setValue、deleteValue
	 * @param key 需要监听的键
	 * @param callback
	 */
	addValueChangeListener(
		key: string,
		callback: (key: string, oldValue: any, newValue: any) => void
	) {
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
				deleteKey = key;
				break;
			}
		}
		if (typeof deleteKey === "string") {
			this.$listener.listenData.delete(deleteKey);
		} else {
			console.warn("没有找到对应的监听器");
		}
	},
	/**
	 * 主动触发菜单值改变的回调
	 * @param key 菜单键
	 * @param newValue 想要触发的新值，默认使用当前值
	 * @param oldValue 想要触发的旧值，默认使用当前值
	 */
	triggerMenuValueChange(key: string, newValue?: any, oldValue?: any) {
		if (this.$listener.listenData.has(key)) {
			let listenData = this.$listener.listenData.get(key)!;
			if (typeof listenData.callback === "function") {
				let value = this.getValue(key);
				let __newValue = value;
				let __oldValue = value;
				if (typeof newValue !== "undefined" && arguments.length > 1) {
					// 传入参数大于1个且不为undefined时生效
					__newValue = newValue;
				}
				if (typeof oldValue !== "undefined" && arguments.length > 2) {
					// 传入参数大于2个且不为undefined时生效
					__oldValue = oldValue;
				}
				listenData.callback(key, __oldValue, __newValue);
			}
		}
	},
	/**
	 * 判断该键是否存在
	 * @param key 键
	 */
	hasKey(key: string) {
		let locaData = GM_getValue(KEY, {}) as any;
		return key in locaData;
	},
	/**
	 * 自动判断菜单是否启用，然后执行回调
	 * @param key
	 * @param callback 回调
	 * @param [isReverse=false] 逆反判断菜单启用
	 */
	execMenu(
		key: string | string[],
		callback: (value: any) => void,
		isReverse = false
	) {
		if (
			!(
				typeof key === "string" ||
				(typeof key === "object" && Array.isArray(key))
			)
		) {
			throw new TypeError("key 必须是字符串或者字符串数组");
		}
		let runKeyList = [];
		if (typeof key === "object" && Array.isArray(key)) {
			runKeyList = [...key];
		} else {
			runKeyList.push(key);
		}
		let value = void 0;
		for (let index = 0; index < runKeyList.length; index++) {
			const runKey = runKeyList[index];
			if (!this.$data.data.has(runKey)) {
				log.warn(`${key} 键不存在`);
				return;
			}
			let runValue = PopsPanel.getValue(runKey);
			if (isReverse) {
				// 逆反赋值
				runValue = !runValue;
			}
			if (!runValue) {
				break;
			}
			value = runValue as any;
		}
		if (value) {
			callback(value);
		}
	},
	/**
	 * 自动判断菜单是否启用，然后执行回调，只会执行一次
	 * @param key
	 * @param callback 回调
	 * @param getValueFn 自定义处理获取当前值，值true是启用并执行回调，值false是不执行回调
	 * @param handleValueChangeFn 自定义处理值改变时的回调，值true是启用并执行回调，值false是不执行回调
	 */
	execMenuOnce(
		key: string,
		callback: (
			value: any,
			pushStyleNode: (style: HTMLStyleElement | HTMLStyleElement[]) => void
		) => any | any[],
		getValueFn?: (key: string, value: any) => boolean,
		handleValueChangeFn?: (key: string, newValue: any, oldValue: any) => boolean
	) {
		if (typeof key !== "string") {
			throw new TypeError("key 必须是字符串");
		}
		if (!this.$data.data.has(key)) {
			log.warn(`${key} 键不存在`);
			return;
		}
		if (this.$data.oneSuccessExecMenu.has(key)) {
			// log.warn(`${key} 键已执行过，请勿重复执行`);
			return;
		}
		this.$data.oneSuccessExecMenu.set(key, 1);

		let __getValue = () => {
			let localValue = PopsPanel.getValue<boolean>(key);
			return typeof getValueFn === "function"
				? getValueFn(key, localValue)
				: localValue;
		};

		// 存储的<style>标签列表
		let resultStyleList: HTMLStyleElement[] = [];
		// 主动添加<style>标签的回调
		let dynamicPushStyleNode = (
			$style: HTMLStyleElement | HTMLStyleElement[]
		) => {
			let __value = __getValue();
			let dynamicResultList: HTMLStyleElement[] = [];
			if ($style instanceof HTMLStyleElement) {
				dynamicResultList = [$style];
			} else if (Array.isArray($style)) {
				dynamicResultList = [
					...$style.filter(
						(item) => item != null && item instanceof HTMLStyleElement
					),
				];
			}
			if (__value) {
				resultStyleList = resultStyleList.concat(dynamicResultList);
			} else {
				for (let index = 0; index < dynamicResultList.length; index++) {
					let $css = dynamicResultList[index];
					$css.remove();
					dynamicResultList.splice(index, 1);
					index--;
				}
			}
		};
		let changeCallBack = (currentValue: boolean) => {
			let resultList: HTMLStyleElement[] = [];
			if (currentValue) {
				// 开
				let result = callback(currentValue, dynamicPushStyleNode);
				if (result instanceof HTMLStyleElement) {
					resultList = [result];
				} else if (Array.isArray(result)) {
					resultList = [
						...result.filter(
							(item) => item != null && item instanceof HTMLStyleElement
						),
					];
				}
			}
			for (let index = 0; index < resultStyleList.length; index++) {
				let $css = resultStyleList[index];
				$css.remove();
				resultStyleList.splice(index, 1);
				index--;
			}
			resultStyleList = [...resultList];
		};
		let listenerId = this.addValueChangeListener(
			key,
			(__key, oldValue, newValue) => {
				// 值改变
				let __newValue = newValue;
				if (typeof handleValueChangeFn === "function") {
					__newValue = handleValueChangeFn(__key, newValue, oldValue);
				}
				changeCallBack(__newValue);
			}
		);
		let value = __getValue();
		if (value) {
			changeCallBack(value);
		}
	},
	/**
	 * 父子菜单联动，自动判断菜单是否启用，然后执行回调，只会执行一次
	 * @param key 菜单键
	 * @param childKey 子菜单键
	 * @param callback 回调
	 * @param replaceValueFn 用于修改mainValue，返回undefined则不做处理
	 */
	execInheritMenuOnce(
		key: string,
		childKey: string,
		callback: (
			value: any,
			pushStyleNode: (style: HTMLStyleElement | HTMLStyleElement[]) => void
		) => any | any[],
		replaceValueFn?: (mainValue: any, childValue: any) => any
	) {
		let that = this;
		/**
		 * 处理子父值的关联获取
		 * @param key 父键
		 * @param childKey 子键
		 */
		const handleInheritValue = (key: string, childKey: string) => {
			let mainValue = that.getValue<boolean>(key);
			let childValue = that.getValue<number>(childKey);
			if (typeof replaceValueFn === "function") {
				let changedMainValue = replaceValueFn(mainValue, childValue);
				if (changedMainValue !== void 0) {
					return changedMainValue;
				}
			}
			return mainValue;
		};
		this.execMenuOnce(
			key,
			callback,
			() => {
				return handleInheritValue(key, childKey);
			},
			() => {
				return handleInheritValue(key, childKey);
			}
		);
		this.execMenuOnce(
			childKey,
			() => {},
			() => false,
			() => {
				this.triggerMenuValueChange(key);
				return false;
			}
		);
	},
	/**
	 * 根据key执行一次
	 * @param key
	 */
	onceExec(key: string, callback: () => void) {
		if (typeof key !== "string") {
			throw new TypeError("key 必须是字符串");
		}
		if (this.$data.onceExec.has(key)) {
			return;
		}
		callback();
		this.$data.onceExec.set(key, 1);
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
				style: "",
			},
			content: this.getPanelContentConfig(),
			mask: {
				enable: true,
				clickEvent: {
					toClose: true,
					toHide: false,
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
			return "92vw";
		} else {
			return "550px";
		}
	},
	/**
	 * 获取设置面板的高度
	 */
	getHeight() {
		if (window.innerHeight > 450) {
			return "80vh";
		} else {
			return "450px";
		}
	},
	/**
	 * 获取配置内容
	 */
	getPanelContentConfig() {
		let configList: PopsPanelContentConfig[] = [
			PanelCommonSettingUI,
			PanelSearchSettingUI,
			PanelBaiJiaHaoSettingUI,
			PanelTieBaSettingUI,
			PanelWenKuSettingUI,
			// PanelJingYanSettingUI,
			PanelBaiKeSettingUI,
			PanelZhiDaoSettingUI,
			PanelFanYiSettingUI,
			// PanelImageSettingUI,
			PanelMapSettingUI,
			// PanelXueSettingUI,
			PanelAiQiChaSettingUI,
			// PanelPosSettingUI,
			PanelHaoKanSettingUI,
			PanelGraphSettingUI,
			// PanelPanSettingUI,
			PanelYiYanSettingUI,
			PanelChatSettingUI,
			PanelEasyLearnSettingUI,
			PanelAiStudySettingUI,
		];
		return configList;
	},
};

export { PopsPanel };
