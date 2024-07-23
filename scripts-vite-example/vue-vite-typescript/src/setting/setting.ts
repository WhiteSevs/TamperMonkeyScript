import { GM_Menu, SCRIPT_NAME, log, pops, utils } from "@/env";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_INIT,
	ATTRIBUTE_KEY,
	KEY,
} from "@/setting/config";
import type { UtilsDictionary } from "@whitesev/utils/dist/src/Dictionary";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { Component_Common } from "./components/common";
import {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/formsType";

type PosPanelListenerData = {
	id: number;
	key: string;
	callback: (key: string, oldValue: any, newValue: any) => void;
};

export const PopsPanel = {
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
	/** 初始化进行注册油猴菜单 */
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
	/** 初始化菜单项的默认值保存到本地数据中 */
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
			/* 获取键名 */
			let key = config.attributes[ATTRIBUTE_KEY];
			/* 获取默认值 */
			let defaultValue = config.attributes[ATTRIBUTE_DEFAULT_VALUE];
			/* 调用初始化方法，返回false则阻止默认行为 */
			let __attr_init__ = config.attributes[ATTRIBUTE_INIT];
			if (typeof __attr_init__ === "function") {
				let __attr_result__ = __attr_init__();
				if (typeof __attr_result__ === "boolean" && !__attr_result__) {
					return;
				}
			}
			if (key == null) {
				log.warn(["请先配置键", config]);
				return;
			}
			/* 存储到内存中 */
			if (that.$data.data.has(key)) {
				log.warn("请检查该key(已存在): " + key);
			}
			that.$data.data.set(key, defaultValue);
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
		callback: (key: string, oldValue: any, newValue: any) => void,
		option?: {
			immediate: boolean;
		}
	) {
		let listenerId = Math.random();
		this.$listener.listenData.set(key, {
			id: listenerId,
			key,
			callback,
		});
		if (option) {
			if (option.immediate) {
				callback(key, this.getValue(key), this.getValue(key));
			}
		}
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
	execMenu(key: string, callback: (value: any) => void, isReverse = false) {
		if (typeof key !== "string") {
			throw new TypeError("key 必须是字符串");
		}
		if (!this.$data.data.has(key)) {
			log.warn(`${key} 键不存在`);
			return;
		}
		let value = PopsPanel.getValue(key);
		if (isReverse) {
			// 逆反
			value = !value;
		}
		if (value) {
			callback(value);
		}
	},
	/**
	 * 自动判断菜单是否启用，然后执行回调，只会执行一次
	 * @param key
	 * @param callback 回调
	 * @param [isReverse=false] 逆反判断菜单启用
	 */
	execMenuOnce(
		key: string,
		callback: (
			value: any,
			pushStyleNode: (style: HTMLStyleElement | HTMLStyleElement[]) => void
		) => any | any[],
		isReverse = false
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

		// 存储的<style>标签列表
		let resultStyleList: HTMLStyleElement[] = [];
		// 主动添加<style>标签的回调
		let pushStyleNode = (style: HTMLStyleElement | HTMLStyleElement[]) => {
			let __value = PopsPanel.getValue<boolean>(key);
			changeCallBack(__value, style);
		};
		/**
		 * 当值改变，触发该函数
		 * @param currentValue 当前值
		 * @param resultStyle （可选）函数返回的<style>标签或标签数组
		 */
		let changeCallBack = (
			currentValue: boolean,
			resultStyle?: HTMLStyleElement | HTMLStyleElement[]
		) => {
			let resultList: HTMLStyleElement[] = [];
			if (currentValue) {
				// 开
				let result = resultStyle ?? callback(currentValue, pushStyleNode);
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
		// 监听值改变
		let listenerId = this.addValueChangeListener(
			key,
			(__key, oldValue, newValue) => {
				// 值改变
				if (isReverse) {
					newValue = !newValue;
				}
				changeCallBack(newValue);
			}
		);
		let value = PopsPanel.getValue<boolean>(key);
		if (isReverse) {
			// 逆反
			value = !value;
		}
		if (value) {
			changeCallBack(value);
		}
	},
	/**
	 * 根据自定义key只执行一次
	 * @param key 自定义key
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
	/**
	 * 判断是否是移动端
	 */
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
		let configList: PopsPanelContentConfig[] = [Component_Common];
		return configList;
	},
};
