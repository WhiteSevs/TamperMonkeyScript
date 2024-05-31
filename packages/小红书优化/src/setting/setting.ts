import { GM_Menu, SCRIPT_NAME, log, pops, utils } from "@/env";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, KEY } from "@/setting/config";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { MSettingUI_Shield } from "./m-components/m-shield";
import { MSettingUI_Home } from "./m-components/m-home";
import { MSettingUI_Notes } from "./m-components/m-note";
import { MSettingUI_Other } from "./m-components/m-other";
import { SettingUI_Common } from "./components/common";
import { SettingUI_Shield } from "./components/shield";
import { SettingUI_Article } from "./components/article";

const PopsPanel = {
	/** 数据 */
	$data: {
		/**
		 * 菜单项的默认值
		 */
		data: new utils.Dictionary<string, any>(),
		/**
		 * 成功只执行了一次的项
		 */
		oneSuccessExecMenu: new utils.Dictionary<string, number>(),
		/**
		 * 成功只执行了一次的项
		 */
		onceExec: new utils.Dictionary<string, number>(),
		/** 脚本名，一般用在设置的标题上 */
		scriptName: SCRIPT_NAME,
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
		listenData: new utils.Dictionary<
			string,
			{
				id: number;
				key: string;
				callback: Function;
			}
		>(),
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
				text: "⚙ 移动端-设置",
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
				key: "show_pops_panel_setting",
				text: "⚙ PC-设置",
				autoReload: false,
				isStoreValue: false,
				showText(text) {
					return text;
				},
				callback: () => {
					this.showPCPanel();
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
			if (!config["attributes"]) {
				/* 必须配置attributes属性，用于存储菜单的键和默认值 */
				return;
			}
			/* 获取键名 */
			let key = config.attributes[ATTRIBUTE_KEY];
			/* 获取默认值 */
			let defaultValue = config["attributes"][ATTRIBUTE_DEFAULT_VALUE];
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
		let contentConfigList = this.getPanelContentConfig().concat(
			this.getPCPanelContentConfig()
		);
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
				let rightContentConfigItem = rightContentConfigList[
					formItemIndex
				] as any;
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
		if (this.$listener.listenData!.has(key)) {
			this.$listener.listenData!.get(key)!.callback(key, oldValue, value);
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
	 */
	execMenu(key: string, callback: (value: any) => void) {
		if (typeof key !== "string") {
			throw new TypeError("key 必须是字符串");
		}
		if (!this.$data.data.has(key)) {
			log.warn(`${key} 键不存在`);
			return;
		}
		let value = PopsPanel.getValue(key);
		if (value) {
			callback(value);
		}
	},
	/**
	 * 自动判断菜单是否启用，然后执行回调，只会执行一次
	 * @param key
	 * @param callback 回调
	 */
	execMenuOnce(key: string, callback: (value: any) => void) {
		if (typeof key !== "string") {
			throw new TypeError("key 必须是字符串");
		}
		if (!this.$data.data.has(key)) {
			log.warn(`${key} 键不存在`);
			return;
		}
		let value = PopsPanel.getValue(key);
		if (value) {
			if (this.$data.oneSuccessExecMenu.has(key)) {
				return;
			}
			callback(value);
			this.$data.oneSuccessExecMenu.set(key, 1);
		}
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
		let { UIWidth, UIHeight } = this.getUISizeInfo();
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
			width: UIWidth,
			height: UIHeight,
			drag: true,
			only: true,
		});
	},
	/**
	 * 显示设置面板
	 */
	showPCPanel() {
		let { UIWidth, UIHeight } = this.getUISizeInfo();
		pops.panel({
			title: {
				text: `${SCRIPT_NAME}-设置`,
				position: "center",
				html: false,
				style: "",
			},
			content: this.getPCPanelContentConfig(),
			mask: {
				enable: true,
				clickEvent: {
					toClose: true,
					toHide: false,
				},
			},
			width: UIWidth,
			height: UIHeight,
			drag: true,
			only: true,
		});
	},
	/**
	 * 获取设置界面的宽高
	 */
	getUISizeInfo() {
		let UIWidth = "92dvw";
		let UIHeight = "80dvh";

		if (window.outerWidth > 800) {
			UIWidth = "650px";
		}
		if (window.outerHeight > 600) {
			UIHeight = "500px";
		}
		return {
			UIWidth,
			UIHeight,
		};
	},
	/**
	 * 获取配置内容
	 */
	getPanelContentConfig() {
		let configList: PopsPanelContentConfig[] = [
			MSettingUI_Shield,
			MSettingUI_Home,
			MSettingUI_Notes,
			MSettingUI_Other,
		];
		return configList;
	},
	/**
	 * 获取配置内容
	 */
	getPCPanelContentConfig() {
		let configList: PopsPanelContentConfig[] = [
			SettingUI_Common,
			SettingUI_Article,
			SettingUI_Shield,
		];
		return configList;
	},
};

export { PopsPanel };
