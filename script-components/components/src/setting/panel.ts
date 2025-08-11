import type {
	PopsPanelContentConfig,
	PopsPanelDetails,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/types/index";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { unsafeWindow } from "ViteGM";
import { DOMUtils, log, pops, SCRIPT_NAME, utils } from "../base.env";
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
import { CommonUtil } from "./../utils/CommonUtil";
import Qmsg from "qmsg";
import type { PopsPanelDeepMenuDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-deepMenu";

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
		/**
		 * 面板
		 */
		$panel: null as ReturnType<typeof pops.panel> | null,
		/**
		 * 面板配置
		 */
		panelContent: [] as PopsPanelContentConfig[],
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
				let child_forms = (<PopsPanelFormsDetails>configItem).forms;
				if (child_forms && Array.isArray(child_forms)) {
					/* 存在子配置forms */
					loopInitDefaultValue(child_forms);
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
	getValue<T extends any = boolean | undefined>(key: string, defaultValue?: T): T {
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
	 * @param [preventDefaultContentConfig=false] 是否阻止默认添加内容配置（版本号），默认false
	 * @param [preventRegisterSearchPlugin=false] 是否阻止默认添加搜索组件，默认false
	 */
	showPanel(
		content: PopsPanelContentConfig[],
		title: string = `${SCRIPT_NAME}-设置`,
		preventDefaultContentConfig: boolean = false,
		preventRegisterSearchPlugin: boolean = false
	) {
		this.$data.$panel = null;
		this.$data.panelContent = [];
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
		this.$data.panelContent = content;
		if (!preventRegisterSearchPlugin) {
			this.registerConfigSearch({ $panel, content });
		}
	},
	/**
	 * 注册设置面板的搜索功能（双击左侧选项第一个）
	 */
	registerConfigSearch(config: {
		$panel: ReturnType<typeof pops.panel>;
		content: PopsPanelContentConfig[];
		searchDialogStyle?: string;
	}) {
		const { $panel, content } = config;
		type SearchPath = {
			index?: number;
			name: string;
			matchedData?: {
				path: string;
				formConfig: any;
				matchedText: string;
				description?: string;
			};
			next?: SearchPath;
		};
		let asyncQueryProperty = async <T extends any = any>(
			target: any,
			handler: (target: T) => IPromise<{
				/**
				 * 是否是需要的属性
				 * + true 将目标值赋值给data
				 * + false 不是需要的，data为下一个处理的对象
				 */
				isFind: boolean;
				/**
				 * 对象/目标值
				 */
				data: any;
			}>
		): Promise<Awaited<T>> => {
			if (target == null) {
				// @ts-ignore
				return;
			}
			let handleResult = await handler(target);
			if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) {
				return handleResult.data;
			}
			return await asyncQueryProperty(handleResult.data, handler);
		};
		/**
		 * 监听元素滚动进入视窗
		 */
		let scrollToElementAndListen = ($el: Element, callback?: () => void) => {
			// 创建 IntersectionObserver 监听元素是否进入视口
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							// 元素完全进入视口，滚动结束
							callback?.();
							observer.disconnect(); // 停止监听
						}
					});
				},
				{
					root: null, // 使用视口作为根
					threshold: 1.0, // 元素完全进入视口时触发
				}
			);
			observer.observe($el);
			$el.scrollIntoView({ behavior: "smooth", block: "center" });
		};
		/**
		 * 添加闪烁样式
		 */
		let addFlashingClass = ($el: Element) => {
			const flashingClassName = "pops-flashing";
			DOMUtils.animationend($el as HTMLElement, () => {
				$el.classList.remove(flashingClassName);
			});
			$el.classList.add(flashingClassName);
		};
		/**
		 * 双击触发的事件
		 */
		let dbclick_event = (evt: MouseEvent | PointerEvent | TouchEvent, selectorTarget: HTMLElement) => {
			utils.preventEvent(evt);
			let $alert = pops.alert({
				title: {
					text: "搜索配置",
					position: "center",
				},
				content: {
					text: /*html*/ `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper">

						</div>
					`,
					html: true,
				},
				btn: {
					ok: { enable: false },
				},
				mask: {
					clickEvent: {
						toClose: true,
					},
				},
				width: PanelUISize.settingMiddle.width,
				height: "auto",
				drag: true,
				style: /*css*/ `
					${pops.config.cssText.panelCSS}

					.search-wrapper{
						border-bottom: 1px solid #000000;
					}
					.search-config-text{
						width: 100%;
						border: 0;
						height: 32px;
						padding: 0px 10px;
						outline: none;
					}
					.search-result-wrapper{
						max-height: 400px;
						overflow: auto;
					}
					.search-result-item{
						cursor: pointer;
						padding: 5px 10px;
						display: flex;
						flex-direction: column;
					}
					.search-result-item:hover{
						background-color: #D8F1FD;
					}
					.search-result-item-path{
						display: flex;
    					align-items: center;
					}
					.search-result-item-description{
						font-size: 0.8rem;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`,
			});

			let $searchWrapper = $alert.$shadowRoot.querySelector<HTMLElement>(".search-wrapper")!;
			let $searchInput = $alert.$shadowRoot.querySelector<HTMLInputElement>(".search-config-text")!;
			let $searchResultWrapper = $alert.$shadowRoot.querySelector<HTMLElement>(".search-result-wrapper")!;

			$searchInput.focus();

			/**
			 * 清空搜索结果
			 */
			let clearSearchResult = () => {
				DOMUtils.empty($searchResultWrapper);
			};
			/**
			 * 创建搜索结果项
			 */
			let createSearchResultItem = (pathInfo: SearchPath) => {
				const searchPath: SearchPath = utils.queryProperty(pathInfo, (target) => {
					if (target?.next) {
						return {
							isFind: false,
							data: target.next,
						};
					} else {
						return {
							isFind: true,
							data: target,
						};
					}
				});
				let $item = DOMUtils.createElement("div", {
					className: "search-result-item",
					innerHTML: /*html*/ `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`,
				});
				// 点击进行定位项
				DOMUtils.on($item, "click", (clickItemEvent) => {
					let $asideItems = $panel.$shadowRoot.querySelectorAll<HTMLLIElement>(
						"aside.pops-panel-aside .pops-panel-aside-top-container li"
					);
					let $targetAsideItem = $asideItems[pathInfo.index!];
					if (!$targetAsideItem) {
						Qmsg.error(`左侧项下标${pathInfo.index}不存在`);
						return;
					}
					$targetAsideItem.scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
					$targetAsideItem.click();
					asyncQueryProperty<SearchPath>(pathInfo.next, async (target) => {
						if (target?.next) {
							// 还在里面
							// 那这里的是deepMenu
							let $findDeepMenu = await utils.waitNode(() => {
								return Array.from(
									$panel.$shadowRoot.querySelectorAll<HTMLElement>(".pops-panel-deepMenu-nav-item")
								).find(($deepMenu) => {
									const __formConfig__: PopsPanelDeepMenuDetails = Reflect.get($deepMenu, "__formConfig__");
									// 找到对应的二级菜单
									return (
										typeof __formConfig__ === "object" &&
										__formConfig__ != null &&
										__formConfig__.text === target.name
									);
								});
							}, 2500);
							if ($findDeepMenu) {
								$findDeepMenu.click();
							} else {
								Qmsg.error("未找到对应的二级菜单");
								return {
									isFind: true,
									data: target,
								};
							}
							return {
								isFind: false,
								data: target.next,
							};
						} else {
							let $findTargetMenu = await utils.waitNode(() => {
								return Array.from(
									$panel.$shadowRoot.querySelectorAll<HTMLLIElement>(`li:not(.pops-panel-deepMenu-nav-item)`)
								).find(($menuItem) => {
									const __formConfig__: PopsPanelDeepMenuDetails = Reflect.get($menuItem, "__formConfig__");
									return __formConfig__ === target.matchedData?.formConfig;
								});
							}, 2500);
							if ($findTargetMenu) {
								scrollToElementAndListen($findTargetMenu);
								let $fold = $findTargetMenu.closest<HTMLElement>(`.pops-panel-forms-fold[data-fold-enable]`);
								// 折叠状态
								if ($fold) {
									let $foldWrapper = $fold.querySelector<HTMLElement>(".pops-panel-forms-fold-container")!;
									$foldWrapper.click();
									await utils.sleep(500);
								}
								scrollToElementAndListen($findTargetMenu, () => {
									addFlashingClass($findTargetMenu);
								});
							} else {
								Qmsg.error("未找到对应的菜单项");
							}
							return {
								isFind: true,
								data: target,
							};
						}
					});
				});
				return $item;
			};
			/**
			 * 执行搜索
			 */
			let execSearch = (searchText: string) => {
				const searchTextRegExp = new RegExp(searchText, "i");
				const searchConfigResult: SearchPath[] = [];
				const loopContentConfig = (configList: PopsPanelContentConfig["forms"], path: SearchPath) => {
					for (let index = 0; index < configList.length; index++) {
						const configItem = configList[index];

						let child_forms = (<PopsPanelFormsDetails>configItem).forms;
						if (child_forms && Array.isArray(child_forms)) {
							/* 存在子配置forms */
							const deepMenuPath = utils.deepClone(path);
							if (configItem.type === "deepMenu") {
								const deepNext = utils.queryProperty(deepMenuPath, (target) => {
									if (target?.next) {
										return {
											isFind: false,
											data: target.next,
										};
									} else {
										return {
											isFind: true,
											data: target,
										};
									}
								}) as SearchPath;
								deepNext.next = {
									name: configItem.text,
								};
							}
							loopContentConfig(child_forms, deepMenuPath);
						} else {
							let text = Reflect.get(configItem, "text");
							let description = Reflect.get(configItem, "description");
							const delayMatchedTextList = [text, description];
							let matchedIndex = delayMatchedTextList.findIndex((configText) => {
								if (typeof configText !== "string") {
									return;
								}
								return configText.match(searchTextRegExp);
							});
							if (matchedIndex !== -1) {
								const matchedPath = utils.deepClone(path);
								const deepNext = utils.queryProperty(matchedPath, (target) => {
									if (target?.next) {
										return {
											isFind: false,
											data: target.next,
										};
									} else {
										return {
											isFind: true,
											data: target,
										};
									}
								}) as SearchPath;
								deepNext.next = {
									name: text,
									matchedData: {
										path: "",
										formConfig: configItem,
										matchedText: delayMatchedTextList[matchedIndex],
										description: description,
									},
								};

								const pathList: string[] = [];
								utils.queryProperty(matchedPath, (target) => {
									const name = target?.name;
									if (typeof name === "string" && name.trim() !== "") {
										pathList.push(name);
									}
									if (target?.next) {
										return {
											isFind: false,
											data: target.next,
										};
									} else {
										return {
											isFind: true,
											data: target,
										};
									}
								});
								const pathStr = pathList.join(CommonUtil.escapeHtml(" - "));
								deepNext.next!.matchedData!.path = pathStr;
								searchConfigResult.push(matchedPath);
							}
						}
					}
				};

				for (let index = 0; index < content.length; index++) {
					const leftContentConfigItem = content[index];
					if (!leftContentConfigItem.forms) {
						/* 不存在forms */
						continue;
					}
					if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") {
						// 版本号项不处理搜索
						continue;
					}
					// 循环左侧容器内存储的右侧配置项
					const rightContentConfigList = leftContentConfigItem.forms;
					if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
						let text = leftContentConfigItem.title;
						if (typeof text === "function") {
							text = text();
						}
						loopContentConfig(rightContentConfigList, {
							index: index,
							name: text,
						});
					}
				}

				let fragment = document.createDocumentFragment();
				for (const pathInfo of searchConfigResult) {
					let $resultItem = createSearchResultItem(pathInfo);
					fragment.appendChild($resultItem);
				}
				clearSearchResult();
				$searchResultWrapper.append(fragment);
			};

			DOMUtils.on(
				$searchInput,
				"input",
				utils.debounce((evt2) => {
					utils.preventEvent(evt2);
					let searchText = DOMUtils.val($searchInput).trim();
					if (searchText === "") {
						// 不执行搜索
						clearSearchResult();
						return;
					}
					execSearch(searchText);
				}, 200)
			);
		};
		let clickElement: Element | null = null;
		let isDoubleClick = false;
		let timer: number | undefined = void 0;
		DOMUtils.on(
			$panel.$shadowRoot,
			"dblclick",
			`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
			dbclick_event
		);
		DOMUtils.on<TouchEvent>(
			$panel.$shadowRoot,
			"touchend",
			`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
			(evt, selectorTarget) => {
				clearTimeout(timer);
				timer = void 0;
				if (isDoubleClick && clickElement === selectorTarget) {
					isDoubleClick = false;
					/* 判定为双击 */
					dbclick_event(evt, selectorTarget);
				} else {
					timer = setTimeout(() => {
						isDoubleClick = false;
						// 判断为单击
					}, 200);
					clickElement = selectorTarget;
					isDoubleClick = true;
				}
			},
			{
				capture: true,
			}
		);
		$panel.$shadowRoot.appendChild(
			DOMUtils.createElement("style", {
				type: "text/css",
				textContent: /*css*/ `
					.pops-flashing{
						animation: double-blink 1.5s ease-in-out;
					}
					@keyframes double-blink {
						 0% {
							background-color: initial;
						}
						25% {
							background-color: yellow;
						}
						50% {
							background-color: initial;
						}
						75% {
							background-color: yellow;
						}
						100% {
							background-color: initial;
						}
					}
				`,
			})
		);
	},
};

if (import.meta.hot) {
	Reflect.set(unsafeWindow, "PopsPanel", Panel);
}
export { Panel };
