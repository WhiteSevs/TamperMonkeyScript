import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/formsType";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { unsafeWindow } from "ViteGM";
import { DOMUtils, GM_Menu, log, pops, SCRIPT_NAME, utils } from "@/env";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_INIT,
	ATTRIBUTE_INIT_MORE_VALUE,
	ATTRIBUTE_KEY,
	KEY,
} from "./panel-config";
import { PanelUISize } from "./panel-ui-size";
import { PopsPanelStorageApi } from "./panel-storage";
import { PanelCommonConfig } from "./view/common";
import { PanelLiveConfig } from "./view/live";
import { PanelSearchConfig } from "./view/search";
import { PanelUserConfig } from "./view/user";
import { PanelVideoConfig } from "./view/video";
import { MPanelShareChallengeConfig } from "./mobile-view/shareChallenge";
import { MPanelShareMusicConfig } from "./mobile-view/shareMusic";
import { MPanelShareNoteConfig } from "./mobile-view/shareNote";
import { MPanelShareUserConfig } from "./mobile-view/shareUser";
import { MPanelShareVideoConfig } from "./mobile-view/shareVideo";

/**
 * 油猴菜单内容配置
 */
const PanelContent = {
	/**
	 * 获取所有的配置内容，用于初始化默认的值
	 */
	getAllConfig() {
		return [...this.getConfig(), ...this.getMConfig()];
	},
	/**
	 * 获取配置内容
	 */
	getConfig() {
		let configList: PopsPanelContentConfig[] = [
			PanelCommonConfig,
			PanelVideoConfig,
			PanelSearchConfig,
			PanelLiveConfig,
			PanelUserConfig,
		];
		return configList;
	},
	/**
	 * 获取配置内容
	 */
	getMConfig() {
		let configList: PopsPanelContentConfig[] = [
			MPanelShareUserConfig,
			MPanelShareNoteConfig,
			MPanelShareChallengeConfig,
			MPanelShareVideoConfig,
			MPanelShareMusicConfig,
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
					Panel.showPanel(PanelContent.getConfig());
				},
			},
			{
				key: "show_pops_m_panel_setting",
				text: "⚙ 移动端设置",
				autoReload: false,
				isStoreValue: false,
				showText(text: string) {
					return text;
				},
				callback: () => {
					Panel.showPanel(
						PanelContent.getMConfig(),
						`${Panel.$data.scriptName}-移动端设置`
					);
				},
			},
		]);

		if (import.meta.hot) {
			let isRegisterKeyboardDebugger = false;
			GM_Menu.add([
				{
					key: "Debugger",
					text: "⚙ Debugger",
					autoReload: false,
					isStoreValue: false,
					showText(text: string) {
						return text;
					},
					callback: () => {
						debugger;
					},
				},
				{
					key: "ShortCut-Debugger",
					text: "⚙ 注册Debugger快捷键",
					autoReload: false,
					isStoreValue: false,
					showText(text: string) {
						return text;
					},
					callback: () => {
						if (isRegisterKeyboardDebugger) {
							return;
						}
						isRegisterKeyboardDebugger = true;
						DOMUtils.listenKeyboard(
							window,
							"keydown",
							(keyName, keyValue, ohterCodeList) => {
								if (
									keyValue === 67 &&
									ohterCodeList.includes("ctrl") &&
									ohterCodeList.includes("shift")
								) {
									debugger;
								}
							},
							{
								capture: true,
							}
						);
					},
				},
			]);
		}
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
		__data: null as any as UtilsDictionary<string, any>,
		__oneSuccessExecMenu: null as any as UtilsDictionary<string, number>,
		__onceExec: null as any as UtilsDictionary<string, number>,
		$panel: null as null | ReturnType<typeof pops.panel>,
		/**
		 * 菜单项的默认值
		 */
		get data() {
			if (Panel.$data.__data == null) {
				Panel.$data.__data = new utils.Dictionary<string, any>();
			}
			return Panel.$data.__data;
		},
		/**
		 * 成功只执行了一次的项
		 */
		get oneSuccessExecMenu() {
			if (Panel.$data.__oneSuccessExecMenu == null) {
				Panel.$data.__oneSuccessExecMenu = new utils.Dictionary<
					string,
					number
				>();
			}
			return Panel.$data.__oneSuccessExecMenu;
		},
		/**
		 * 成功只执行了一次的项
		 */
		get onceExec() {
			if (Panel.$data.__onceExec == null) {
				Panel.$data.__onceExec = new utils.Dictionary<string, number>();
			}
			return Panel.$data.__onceExec;
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
		const that = this;
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
				/* 存储到内存中 */
				if (that.$data.data.has(__key)) {
					log.warn("请检查该key(已存在): " + __key);
				}
				that.$data.data.set(__key, __defaultValue);
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
		this.$data.oneSuccessExecMenu.delete(key);
		let flag = PopsPanelStorageApi.removeValueChangeListener(key);
		return flag;
	},
	/**
	 * 移除已执行的仅执行一次的菜单
	 * @param key 键
	 */
	deleteOnceExec(key: string) {
		this.$data.onceExec.delete(key);
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

		let findNotInDataKey = keyList.find((it) => !this.$data.data.has(it));
		if (findNotInDataKey) {
			log.warn(`${findNotInDataKey} 键不存在`);
			return;
		}
		/** 存储的键 */
		let storageKey = JSON.stringify(keyList);
		if (once && this.$data.oneSuccessExecMenu.has(JSON.stringify(storageKey))) {
			// log.warn(`${storageKey} 键已执行过，请勿重复执行`);
			return;
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
		let getValue = (key: string) => {
			let value = Panel.getValue<boolean>(key);
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
				flag = keyList.every((key) => getValue(key));
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
				once && that.$data.oneSuccessExecMenu.delete(storageKey);
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
		if (this.$data.onceExec.has(key)) {
			// log.warn(`${key} 键已执行（最多一次），请勿重复执行`);
			return;
		}
		callback();
		this.$data.onceExec.set(key, 1);
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
