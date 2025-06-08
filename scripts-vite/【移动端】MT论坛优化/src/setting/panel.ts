import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/formsType";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { unsafeWindow } from "ViteGM";
import { GM_Menu, log, pops, SCRIPT_NAME, utils } from "@/env";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_INIT,
	ATTRIBUTE_INIT_MORE_VALUE,
	ATTRIBUTE_KEY,
	KEY,
} from "./panel-config";
import { PanelUISize } from "./panel-ui-size";
import { PopsPanelStorageApi } from "./panel-storage";
import { ElementUtils } from "@/utils/ElementUtils";
import { Component_Common } from "./view/common";
import { Component_ForumPost } from "./view/post";
import { Component_Search } from "./view/search";
import { Component_Sign } from "./view/sign";
import { Component_Space } from "./view/space";
import { Component_Guide } from "./view/guide";

/**
 * 油猴菜单内容配置
 */
const PanelContent = {
	/**
	 * 获取所有的配置内容，用于初始化默认的值
	 */
	getAllConfig(): PopsPanelContentConfig[] {
		return [...this.getConfig()];
	},
	/**
	 * 获取配置内容
	 */
	getConfig(): PopsPanelContentConfig[] {
		let configList: PopsPanelContentConfig[] = [
			Component_Common,
			Component_ForumPost,
			Component_Search,
			Component_Sign,
			Component_Space,
			Component_Guide,
		];
		return configList;
	},
};

/**
 * 油猴菜单
 */
const PanelMenu = {
	init() {
		this.initExtensionsMenu();
	},
	/**
	 * 初始化菜单项
	 */
	initExtensionsMenu() {
		if (!Panel.isTopWindow()) {
			/* 不允许在iframe内重复注册 */
			return;
		}
		GM_Menu.add([
			{
				key: "show_pops_panel_setting",
				text: "⚙ 设置",
				autoReload: false,
				isStoreValue: false,
				showText(text: string) {
					return text;
				},
				callback: () => {
					Panel.showPanel(PanelContent.getAllConfig());
				},
			},
		]);
		ElementUtils.registerLeftMenu({
			name: "MT论坛脚本设置",
			icon: "",
			iconColor: "#ff0505",
			iconSize: "23px",
			callback: () => {
				Panel.showPanel(PanelContent.getAllConfig());
			},
		});
	},
};

type ExecMenuCallBackOption = {
	/** 主动添加<style>元素，一般用于异步函数使用 */
	addStyleElement: (style: HTMLStyleElement | HTMLStyleElement[]) => void;
	/** 值 */
	value: any;
};

/**
 * 面板
 */
const Panel = {
	/** 数据 */
	$data: {
		/**
		 * @private
		 */
		__configDefaultValueData: null as UtilsDictionary<string, any> | null,
		/**
		 * @private
		 */
		__onceExecMenuData: null as UtilsDictionary<string, number> | null,
		/**
		 * @private
		 */
		__onceExecData: null as UtilsDictionary<string, number> | null,
		$panel: null as ReturnType<typeof pops.panel> | null,
		/**
		 * 菜单项的默认值
		 */
		get configDefaultValueData() {
			if (this.__configDefaultValueData == null) {
				this.__configDefaultValueData = new utils.Dictionary();
			}
			return this.__configDefaultValueData;
		},
		/**
		 * 成功只执行了一次的项
		 */
		get onceExecMenuData() {
			if (this.__onceExecMenuData == null) {
				this.__onceExecMenuData = new utils.Dictionary<string, number>();
			}
			return this.__onceExecMenuData;
		},
		/**
		 * 成功只执行了一次的项
		 */
		get onceExecData() {
			if (this.__onceExecData == null) {
				this.__onceExecData = new utils.Dictionary<string, number>();
			}
			return this.__onceExecData;
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
	init() {
		this.initContentDefaultValue();
		PanelMenu.init();
	},
	/** 判断是否是顶层窗口 */
	isTopWindow() {
		return unsafeWindow.top === unsafeWindow.self;
	},
	/** 初始化菜单项的默认值保存到本地数据中 */
	initContentDefaultValue() {
		/**
		 * 设置默认值
		 * @param config
		 */
		const initDefaultValue = (
			config: PopsPanelFormsTotalDetails | PopsPanelFormsDetails
		) => {
			if (!config.attributes) {
				/* 必须配置attributes属性，用于存储菜单的键和默认值 */
				return;
			}

			// 排除掉不需要初始化默认值的配置
			if (
				config.type === "button" ||
				config.type === "forms" ||
				config.type === "deepMenu"
			) {
				return;
			}

			/* 初始化配置对象，每个是需要配置的键值对 */
			let needInitConfig = <{ [key: string]: any }>{};
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
				this.setDefaultValue(__key, __defaultValue);
			});
		};
		/** 嵌套循环初始化默认值 */
		const loopInitDefaultValue = (
			configList: PopsPanelContentConfig["forms"]
		) => {
			for (let index = 0; index < configList.length; index++) {
				let configItem = configList[index];
				initDefaultValue(configItem);
				let childForms = (configItem as any).forms;
				if (childForms && Array.isArray(childForms)) {
					/* 存在子配置forms */
					loopInitDefaultValue(childForms);
				}
			}
		};
		const contentConfigList = [...PanelContent.getAllConfig()];
		for (let index = 0; index < contentConfigList.length; index++) {
			let leftContentConfigItem = contentConfigList[index];
			if (!leftContentConfigItem.forms) {
				/* 不存在forms */
				continue;
			}
			// 循环左侧容器内存储的右侧配置项
			const rightContentConfigList = leftContentConfigItem.forms;
			if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
				loopInitDefaultValue(rightContentConfigList);
			}
		}
	},
	/**
	 * 设置初始化使用的默认值
	 */
	setDefaultValue(key: string, defaultValue: any) {
		/* 存储到缓存中*/
		if (this.$data.configDefaultValueData.has(key)) {
			log.warn("请检查该key(已存在): " + key);
		}
		this.$data.configDefaultValueData.set(key, defaultValue);
	},
	/**
	 * 设置值
	 * @param key 键
	 * @param value 值
	 */
	setValue(key: string, value: any) {
		PopsPanelStorageApi.set(key, value);
	},
	/**
	 * 获取值
	 * @param key 键
	 * @param defaultValue 默认值
	 */
	getValue<T extends any>(key: string, defaultValue?: T): T {
		let localValue = PopsPanelStorageApi.get<T>(key);
		if (localValue == null) {
			/* 值不存在或值为null/undefined或只有键但无值 */
			if (this.$data.configDefaultValueData.has(key)) {
				/* 先判断是否是菜单配置的键 */
				/* 是的话取出值并返回 */
				return this.$data.configDefaultValueData.get(key);
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
		PopsPanelStorageApi.delete(key);
	},
	/**
	 * 判断该键是否存在
	 * @param key 键
	 */
	hasKey(key: string) {
		return PopsPanelStorageApi.has(key);
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
		let listenerId = PopsPanelStorageApi.addValueChangeListener(
			key,
			(__key, __newValue, __oldValue) => {
				callback(key, __oldValue, __newValue);
			}
		);
		return listenerId;
	},
	/**
	 * 移除监听
	 * @param listenerId 监听的id
	 */
	removeValueChangeListener(listenerId: number) {
		PopsPanelStorageApi.removeValueChangeListener(listenerId);
	},
	/**
	 * 主动触发菜单值改变的回调
	 * @param key 菜单键
	 * @param newValue 想要触发的新值，默认使用当前值
	 * @param oldValue 想要触发的旧值，默认使用当前值
	 */
	triggerMenuValueChange(key: string, newValue?: any, oldValue?: any) {
		PopsPanelStorageApi.triggerValueChangeListener(key, oldValue, newValue);
	},
	/**
	 * 移除已执行的仅执行一次的菜单
	 * @param key 键
	 */
	deleteExecMenuOnce(key: string) {
		this.$data.onceExecMenuData.delete(key);
		let flag = PopsPanelStorageApi.removeValueChangeListener(key);
		return flag;
	},
	/**
	 * 移除已执行的仅执行一次的菜单
	 * @param key 键
	 */
	deleteOnceExec(key: string) {
		this.$data.onceExecData.delete(key);
	},
	/**
	 * 执行菜单
	 *
	 * @param queryKey 键|键数组
	 * @param callback 执行的回调函数
	 * @param checkExec 判断是否执行回调
	 *
	 * （默认）如果想要每个菜单是`与`关系，即每个菜单都判断为开启，那么就判断它们的值&就行
	 *
	 * 如果想要任意菜单存在true再执行，那么判断它们的值|就行
	 *
	 * + 返回值都为`true`，执行回调，如果回调返回了<style>元素，该元素会在监听到值改变时被移除掉
	 * + 返回值有一个为`false`，则不执行回调，且移除之前回调函数返回的<style>元素
	 * @param once 是否只执行一次，默认true
	 *
	 * + true （默认）只执行一次，且会监听键的值改变
	 * + false 不会监听键的值改变
	 */
	exec(
		queryKey: string | string[] | (() => string | string[]),
		callback: (option: ExecMenuCallBackOption) => any | any[],
		checkExec?: (
			/** 键名列表 */
			keyList: string[]
		) => boolean,
		once: boolean = true
	) {
		const that = this;

		let queryKeyFn: () => string | string[];
		if (typeof queryKey === "string" || Array.isArray(queryKey)) {
			queryKeyFn = () => queryKey;
		} else {
			queryKeyFn = queryKey;
		}
		let isArrayKey = false;
		let queryKeyResult = queryKeyFn();
		/** 所有的键名 */
		let keyList = <string[]>[];
		if (Array.isArray(queryKeyResult)) {
			isArrayKey = true;
			keyList = queryKeyResult;
		} else {
			keyList.push(queryKeyResult);
		}

		let findNotInDataKey = keyList.find(
			(it) => !this.$data.configDefaultValueData.has(it)
		);
		if (findNotInDataKey) {
			log.warn(`${findNotInDataKey} 键不存在`);
			return;
		}
		/** 存储的键 */
		let storageKey = JSON.stringify(keyList);
		if (once) {
			// 仅执行一次
			if (this.$data.onceExecMenuData.has(storageKey)) {
				// log.warn(`${storageKey} 键已执行过，请勿重复执行`);
				return;
			}
			this.$data.onceExecMenuData.set(storageKey, 1);
		}
		/**
		 * 存储的<style>标签列表
		 */
		let storeStyleElements: HTMLStyleElement[] = [];
		/** 所有监听的id列表 */
		let listenerIdList: number[] = [];
		/**
		 * 主动添加<style>标签的回调
		 */
		let dynamicPushStyleNode = (
			value: boolean,
			$style: HTMLStyleElement | HTMLStyleElement[]
		) => {
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
			if (value) {
				storeStyleElements = storeStyleElements.concat(dynamicResultList);
			} else {
				for (let index = 0; index < dynamicResultList.length; index++) {
					let $css = dynamicResultList[index];
					$css.remove();
					dynamicResultList.splice(index, 1);
					index--;
				}
			}
		};
		/**
		 * 获取值
		 */
		let getMenuValue = (key: string) => {
			let value = this.getValue<boolean>(key);
			return value;
		};
		/**
		 * 清空存储的元素列表
		 */
		let clearStoreStyleElements = () => {
			for (let index = 0; index < storeStyleElements.length; index++) {
				let $css = storeStyleElements[index];
				$css.remove();
				storeStyleElements.splice(index, 1);
				index--;
			}
		};
		/**
		 * 判断执行
		 */
		let __checkExec__ = () => {
			let flag = false;
			if (typeof checkExec === "function") {
				flag = checkExec(keyList);
			} else {
				flag = keyList.every((key) => getMenuValue(key));
			}
			return flag;
		};
		/** 值改变触发的回调 */
		let valueChange = (valueOption?: {
			key: string;
			newValue: any;
			oldValue: any;
		}) => {
			let execFlag = __checkExec__();
			let resultList: HTMLStyleElement[] = [];
			if (execFlag) {
				// 开启，执行回调
				let valueList = keyList.map((key) => this.getValue(key));
				let $styles = callback({
					addStyleElement: (...args) => {
						return dynamicPushStyleNode(true, ...args);
					},
					value: isArrayKey ? valueList : valueList[0],
				});
				if ($styles instanceof HTMLStyleElement) {
					resultList.push($styles);
				} else if (Array.isArray($styles)) {
					resultList.push(
						...$styles.filter(
							(item) => item != null && item instanceof HTMLStyleElement
						)
					);
				}
			} else {
				// 关闭状态
			}
			// 清理之前存储的元素列表
			clearStoreStyleElements();
			// 存储元素列表
			storeStyleElements = [...resultList];
		};
		once &&
			keyList.forEach((key) => {
				let listenerId = this.addValueChangeListener(
					key,
					(key, newValue, oldValue) => {
						valueChange({
							key,
							newValue,
							oldValue,
						});
					}
				);
				listenerIdList.push(listenerId);
			});
		valueChange();

		let result = {
			/**
			 * 清空菜单执行情况
			 *
			 * + 清空存储的元素列表
			 * + 清空值改变的监听器
			 * + 清空存储的一次执行的键
			 */
			clear() {
				this.clearStoreStyleElements();
				this.removeValueChangeListener();
				once && that.$data.onceExecMenuData.delete(storageKey);
			},
			/**
			 * 清空存储的元素列表
			 */
			clearStoreStyleElements: () => {
				return clearStoreStyleElements();
			},
			/**
			 * 移除值改变的监听器
			 */
			removeValueChangeListener: () => {
				listenerIdList.forEach((listenerId) => {
					this.removeValueChangeListener(listenerId);
				});
			},
		};

		return result;
	},
	/**
	 * 自动判断菜单是否启用，然后执行回调
	 * @param key
	 * @param callback 回调
	 * @param [isReverse=false] 逆反判断菜单启用
	 */
	execMenu(
		key: string | string[],
		callback: (option: ExecMenuCallBackOption) => any | any[],
		isReverse = false
	) {
		return this.exec(
			key,
			(option) => {
				return callback(option);
			},
			(keyList) => {
				let execFlag = keyList.every((__key__) => {
					let flag = !!this.getValue(__key__);
					isReverse && (flag = !flag);
					return flag;
				});
				return execFlag;
			},
			false
		);
	},
	/**
	 * 自动判断菜单是否启用，然后执行回调，只会执行一次
	 *
	 * 它会自动监听值改变（设置中的修改），改变后如果未执行，则执行一次
	 * @param key
	 * @param callback 回调
	 * @param getValueFn 自定义处理获取当前值，值true是启用并执行回调，值false是不执行回调
	 * @param handleValueChangeFn 自定义处理值改变时的回调，值true是启用并执行回调，值false是不执行回调
	 */
	execMenuOnce(
		key: string | string[],
		callback: (option: ExecMenuCallBackOption) => any | any[]
	) {
		return this.exec(
			key,
			callback,
			(keyList) => {
				let execFlag = keyList.every((__key__) => {
					let flag = !!this.getValue(__key__);
					return flag;
				});
				return execFlag;
			},
			true
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
		if (this.$data.onceExecData.has(key)) {
			// log.warn(`${key} 键已执行（最多一次），请勿重复执行`);
			return;
		}
		callback();
		this.$data.onceExecData.set(key, 1);
	},
	/**
	 * 显示设置面板
	 */
	showPanel(content: PopsPanelContentConfig[], title = `${SCRIPT_NAME}-设置`) {
		let $panel = pops.panel({
			title: {
				text: `${SCRIPT_NAME}-设置`,
				position: "center",
				html: false,
				style: "",
			},
			content: content,
			btn: {
				close: {
					enable: true,
					callback: (details, event) => {
						details.close();
						this.$data.$panel = null;
					},
				},
			},
			mask: {
				enable: true,
				clickEvent: {
					toClose: true,
					toHide: false,
				},
				clickCallBack: (originalRun, config) => {
					originalRun();
					this.$data.$panel = null;
				},
			},
			width: PanelUISize.setting.width,
			height: PanelUISize.setting.height,
			drag: true,
			only: true,
		});
		this.$data.$panel = $panel;
	},
};

if (import.meta.hot) {
	Reflect.set(unsafeWindow, "PopsPanel", Panel);
}
export { Panel, PanelMenu, PanelContent };
