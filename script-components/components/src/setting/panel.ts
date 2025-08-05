import type {
	PopsPanelContentConfig,
	PopsPanelDetails,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/types/index";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { GM_info, unsafeWindow } from "ViteGM";
import { log, pops, SCRIPT_NAME, utils } from "../base.env";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_INIT,
	ATTRIBUTE_INIT_MORE_VALUE,
	ATTRIBUTE_KEY,
	KEY,
} from "./panel-config";
import { PanelUISize } from "./panel-ui-size";
import { PopsPanelStorageApi } from "./panel-storage";
import { PanelMenu } from "./panel-menu";
import { PanelContent } from "./panel-content";

type ExecMenuCallBackOption = {
	/**
	 * 当前菜单项的值
	 */
	value: any;
	/**
	 * 主动添加<style>元素，一般用于异步函数主动使用
	 */
	addStyleElement: (style: HTMLStyleElement | HTMLStyleElement[]) => void;
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
		__contentConfigInitDefaultValue: null as UtilsDictionary<string, any> | null,
		/**
		 * @private
		 */
		__onceExecMenuData: null as UtilsDictionary<string, number> | null,
		/**
		 * @private
		 */
		__onceExecData: null as UtilsDictionary<string, number> | null,
		/**
		 * @private
		 */
		__panelConfig: {} as Partial<PopsPanelDetails>,
		$panel: null as ReturnType<typeof pops.panel> | null,
		/**
		 * 菜单项初始化的默认值
		 */
		get contentConfigInitDefaultValue() {
			if (this.__contentConfigInitDefaultValue == null) {
				this.__contentConfigInitDefaultValue = new utils.Dictionary();
			}
			return this.__contentConfigInitDefaultValue;
		},
		/**
		 * 菜单项初始化时禁用的键
		 */
		contentConfigInitDisabledKeys: <string[]>[],
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
		/**
		 * pops.panel的默认配置
		 */
		get panelConfig() {
			return this.__panelConfig;
		},
		set panelConfig(value) {
			this.__panelConfig = value;
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
		const initDefaultValue = (config: PopsPanelFormsTotalDetails | PopsPanelFormsDetails) => {
			if (!config.attributes) {
				/* 必须配置attributes属性，用于存储菜单的键和默认值 */
				return;
			}

			// 排除掉不需要初始化默认值的配置
			if (config.type === "button" || config.type === "forms" || config.type === "deepMenu") {
				return;
			}

			/**
			 * 初始化配置对象，每个是需要配置的键值对
			 *
			 * key是菜单键
			 *
			 * value是默认值
			 */
			let menuDefaultConfig = new Map<string, any>();
			/* 普通的 键名 */
			let key = config.attributes[ATTRIBUTE_KEY];
			if (key != null) {
				// 键名对应的默认值
				const defaultValue = config.attributes[ATTRIBUTE_DEFAULT_VALUE];
				menuDefaultConfig.set(key, defaultValue);
			}
			/* 待初始化默认值的配置项 */
			let moreMenuDefaultConfig = config.attributes[ATTRIBUTE_INIT_MORE_VALUE];
			if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig) {
				// 追加|覆盖
				Object.keys(moreMenuDefaultConfig).forEach((key) => {
					menuDefaultConfig.set(key, moreMenuDefaultConfig[key]);
				});
			}
			if (!menuDefaultConfig.size) {
				log.warn(["请先配置键", config]);
				return;
			}

			/* 调用初始化方法，返回false则阻止默认行为 */
			let __attr_init__ = config.attributes[ATTRIBUTE_INIT];
			if (typeof __attr_init__ === "function") {
				let __attr_result__ = __attr_init__();
				if (typeof __attr_result__ === "boolean" && !__attr_result__) {
					return;
				}
			}
			if (config.type === "switch") {
				let disabled = typeof config.disabled === "function" ? config.disabled() : config.disabled;
				if (typeof disabled === "boolean" && disabled) {
					this.$data.contentConfigInitDisabledKeys.push(...menuDefaultConfig.keys());
				}
			}
			// 循环初始化默认值
			for (const [__key, __defaultValue] of menuDefaultConfig.entries()) {
				// 设置默认值
				this.setDefaultValue(__key, __defaultValue);
			}
		};
		/** 嵌套循环初始化默认值 */
		const loopInitDefaultValue = (configList: PopsPanelContentConfig["forms"]) => {
			for (let index = 0; index < configList.length; index++) {
				let configItem = configList[index];
				initDefaultValue(configItem);
				let childForms = (<PopsPanelFormsDetails>configItem).forms;
				if (childForms && Array.isArray(childForms)) {
					/* 存在子配置forms */
					loopInitDefaultValue(childForms);
				}
			}
		};
		const contentConfigList = [...PanelContent.getAllContentConfig()];
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

		// 去重
		this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
	},
	/**
	 * 设置初始化使用的默认值
	 */
	setDefaultValue(key: string, defaultValue: any) {
		/* 存储到缓存中*/
		if (this.$data.contentConfigInitDefaultValue.has(key)) {
			log.warn("请检查该key(已存在): " + key);
		}
		this.$data.contentConfigInitDefaultValue.set(key, defaultValue);
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
	getValue<T extends any = boolean>(key: string, defaultValue?: T): T {
		let localValue = PopsPanelStorageApi.get<T>(key);
		if (localValue == null) {
			/* 值不存在或值为null/undefined或只有键但无值 */
			if (this.$data.contentConfigInitDefaultValue.has(key)) {
				/* 先判断是否是菜单配置的键 */
				/* 是的话取出值并返回 */
				return this.$data.contentConfigInitDefaultValue.get(key);
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
	addValueChangeListener(key: string, callback: (key: string, oldValue: any, newValue: any) => void) {
		let listenerId = PopsPanelStorageApi.addValueChangeListener(key, (__key, __newValue, __oldValue) => {
			callback(key, __oldValue, __newValue);
		});
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
	 * @param queryKey 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
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
		// 执行的键名是否是数组格式
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

		let findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
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
		 * 存储菜单返回的值
		 *
		 * 例如：元素
		 */
		let storeValueList: HTMLStyleElement[] = [];
		/** 所有监听的id列表 */
		let listenerIdList: number[] = [];
		/**
		 * 主动添加<style>标签的回调
		 */
		let dynamicAddStyleNodeCallback = (value: boolean, $style: HTMLStyleElement | HTMLStyleElement[]) => {
			let dynamicResultList: HTMLStyleElement[] = [];
			if (!Array.isArray($style)) {
				$style = [$style];
			}
			$style.forEach(($styleItem) => {
				if ($styleItem == null) {
					return;
				}
				if ($styleItem instanceof HTMLStyleElement) {
					// 元素
					dynamicResultList.push($styleItem);
					return;
				}
			});
			if (value) {
				storeValueList = storeValueList.concat(dynamicResultList);
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
		 * 清空之前存储的值（例如：元素）
		 */
		let clearBeforeStoreValue = () => {
			for (let index = 0; index < storeValueList.length; index++) {
				let $css = storeValueList[index];
				$css.remove();
				storeValueList.splice(index, 1);
				index--;
			}
		};
		/**
		 * 判断执行
		 */
		let checkMenuExec = () => {
			let flag = false;
			if (typeof checkExec === "function") {
				flag = checkExec(keyList);
			} else {
				flag = keyList.every((key) => getMenuValue(key));
			}
			return flag;
		};
		/** 值改变触发的回调 */
		let valueChangeCallback = (valueOption?: { key: string; newValue: any; oldValue: any }) => {
			let execFlag = checkMenuExec();
			let resultList: HTMLStyleElement[] = [];
			if (execFlag) {
				// 开启，执行回调
				let valueList = keyList.map((key) => this.getValue(key));
				let callbackResult = callback({
					value: isArrayKey ? valueList : valueList[0],
					addStyleElement: (...args) => {
						return dynamicAddStyleNodeCallback(true, ...args);
					},
				});
				if (!Array.isArray(callbackResult)) {
					callbackResult = [callbackResult];
				}
				callbackResult.forEach((it: any) => {
					if (it == null) {
						return;
					}
					if (it instanceof HTMLStyleElement) {
						// 元素
						resultList.push(it);
						return;
					}
					if (typeof it === "function") {
						// 函数
					}
				});
			} else {
				// 关闭状态
			}
			// 清理之前存储的元素列表
			clearBeforeStoreValue();
			// 存储元素列表
			storeValueList = [...resultList];
		};
		once &&
			keyList.forEach((key) => {
				let listenerId = this.addValueChangeListener(key, (key, newValue, oldValue) => {
					valueChangeCallback({
						key,
						newValue,
						oldValue,
					});
				});
				listenerIdList.push(listenerId);
			});
		valueChangeCallback();

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
				return clearBeforeStoreValue();
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
	 * @param key 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
	 * @param callback 回调
	 * @param isReverse 逆反判断菜单启用，默认false
	 * @param once 是否是只执行一次，默认false
	 */
	execMenu(
		key: string | string[],
		callback: (option: ExecMenuCallBackOption) => any | any[],
		isReverse = false,
		once: boolean = false
	) {
		return this.exec(
			key,
			(option) => {
				return callback(option);
			},
			(keyList) => {
				let execFlag = keyList.every((__key__) => {
					let flag = !!this.getValue(__key__);
					let disabled = Panel.$data.contentConfigInitDisabledKeys.includes(__key__);
					if (disabled) {
						// 被禁用
						flag = false;
						log.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
					}

					isReverse && (flag = !flag);
					return flag;
				});
				return execFlag;
			},
			once
		);
	},
	/**
	 * 自动判断菜单是否启用，然后执行回调，只会执行一次
	 *
	 * 它会自动监听值改变（设置中的修改），改变后如果未执行，则执行一次
	 * @param key 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
	 * @param callback 回调
	 * @param isReverse 逆反判断菜单启用，默认false
	 */
	execMenuOnce(
		key: string | string[],
		callback: (option: ExecMenuCallBackOption) => any | any[],
		isReverse = false
	) {
		return this.execMenu(key, callback, isReverse, true);
	},
	/**
	 * 根据key执行一次
	 * @param key 键
	 * @param callback 回调
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
	 * @param content 显示的内容配置
	 * @param [title] 标题
	 * @param [preventDefaultContentConfig=false] 是否阻止默认添加内容配置（版本号）
	 */
	showPanel(
		content: PopsPanelContentConfig[],
		title: string = `${SCRIPT_NAME}-设置`,
		preventDefaultContentConfig: boolean = false
	) {
		// 判断是否已有脚本版本号
		let checkHasBottomVersionContentConfig =
			content.findIndex((it) => {
				let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
				return isBottom && it.id === "script-version";
			}) !== -1;
		if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig) {
			content.push(...PanelContent.getDefaultBottomContentConfig());
		}
		let $panel = pops.panel({
			...{
				title: {
					text: title,
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
			},
			...this.$data.panelConfig,
		});
		this.$data.$panel = $panel;
	},
};

if (import.meta.hot) {
	Reflect.set(unsafeWindow, "PopsPanel", Panel);
}
export { Panel };
