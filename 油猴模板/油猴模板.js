// ==UserScript==
// @name         自动生成的脚本
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @icon         https://favicon.yandex.net/favicon/v2/<$URL$>
// @version      0.1
// @description  自动生成的描述
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        <$URL$>
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-start
// @require      https://update.greasyfork.org/scripts/462234/1391948/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1396237/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1397307/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1384985/DOMUtils.js
// ==/UserScript==

(function () {
	if (typeof unsafeWindow === "undefined") {
		if (
			typeof globalThis.unsafeWindow !== "undefined" &&
			globalThis.unsafeWindow != null
		) {
			var unsafeWindow = globalThis.unsafeWindow;
		} else {
			var unsafeWindow = globalThis || window || self;
		}
	}
	/** @type {import("../lib/pops/index")} */
	const pops = window.pops;
	/** @type {import("../lib/Qmsg/index").default} */
	const Qmsg = window.Qmsg;
	/** @type {import("../lib/Utils/index").default} */
	const utils = window.Utils.noConflict();
	/**@type {import("../lib/DOMUtils/index").default} */
	const DOMUtils = window.DOMUtils.noConflict();

	const log = new utils.Log(GM_info, unsafeWindow.console || console);
	/** 油猴菜单 */
	const GM_Menu = new utils.GM_Menu({
		GM_getValue,
		GM_setValue,
		GM_registerMenuCommand,
		GM_unregisterMenuCommand,
	});
	/* 配置控制台日志 */
	log.config({
		debug: false,
		logMaxCount: 1000,
		autoClearConsole: true,
		tag: true,
	});
	/* 配置吐司Qmsg */
	Qmsg.config(
		Object.defineProperties(
			{
				html: true,
				autoClose: true,
				showClose: false,
			},
			{
				position: {
					get() {
						return PopsPanel.getValue("qmsg-config-position", "bottom");
					},
				},
				maxNums: {
					get() {
						return PopsPanel.getValue("qmsg-config-maxnums", 5);
					},
				},
				showReverse: {
					get() {
						return PopsPanel.getValue("qmsg-config-showreverse", true);
					},
				},
				zIndex: {
					get() {
						let maxZIndex = utils.getMaxZIndex(10);
						let popsMaxZIndex = pops.config.Utils.getPopsMaxZIndex(10).zIndex;
						return utils.getMaxValue(maxZIndex, popsMaxZIndex);
					},
				},
			}
		)
	);

	const httpx = new Utils.Httpx(GM_xmlhttpRequest);

	// 添加请求拦截器
	httpx.interceptors.request.use((data) => {
		return data;
	});

	// 添加响应拦截器
	httpx.interceptors.response.use(void 0, (data) => {
		log.error(["拦截器-请求错误", data]);
		if (data.type === "onabort") {
			Qmsg.warning("请求取消");
		} else if (data.type === "onerror") {
			Qmsg.error("请求异常");
		} else if (data.type === "ontimeout") {
			Qmsg.error("请求超时");
		} else {
			Qmsg.error("其它错误");
		}
		return data;
	});

	httpx.config({
		logDetails: false,
	});

	/**
	 * 配置面板
	 */
	const PopsPanel = {
		/** 数据 */
		$data: {
			__data: null,
			__oneSuccessExecMenu: null,
			__onceExec: null,
			/**
			 * 菜单项的默认值
			 * @type {UtilsDictionaryConstructor<string,any>}
			 */
			get data() {
				if (this.__data == null) {
					this.__data = new utils.Dictionary();
				}
				return this.__data;
			},
			/**
			 * 成功只执行了一次的项
			 * @type {UtilsDictionaryConstructor<string,number>}
			 */
			get oneSuccessExecMenu() {
				if (this.__oneSuccessExecMenu == null) {
					this.__oneSuccessExecMenu = new utils.Dictionary();
				}
				return this.__oneSuccessExecMenu;
			},
			/**
			 * 成功只执行了一次的项
			 * @type {UtilsDictionaryConstructor<string,number>}
			 */
			get onceExec() {
				if (this.__onceExec == null) {
					this.__onceExec = new utils.Dictionary();
				}
				return this.__onceExec;
			},
			/** 脚本名，一般用在设置的标题上 */
			get scriptName() {
				return GM_info?.script?.name || "";
			},
			/** 菜单项的总值在本地数据配置的键名 */
			key: "GM_Panel",
			/** 菜单项在attributes上配置的菜单键 */
			attributeKeyName: "data-key",
			/** 菜单项在attributes上配置的菜单默认值 */
			attributeDefaultValueName: "data-default-value",
		},
		/** 监听器 */
		$listener: {
			__listenData: null,
			/**
			 * 值改变的监听器
			 * @type {UtilsDictionaryConstructor<string,{
			 *  id: number,
			 *  key: string,
			 *  callback: Function
			 * }>}
			 */
			get listenData() {
				if (this.__listenData == null) {
					this.__listenData = new utils.Dictionary();
				}
				return this.__listenData;
			},
		},
		/** 初始化 */
		init() {
			this.initPanelDefaultValue();
			this.initExtensionsMenu();
		},
		/** 初始化扩展上的菜单 */
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
		/**
		 * 初始化本地设置默认的值
		 */
		initPanelDefaultValue() {
			let that = this;
			/**
			 * 设置默认值
			 * @param {PopsPanelFormsTotalDetails|PopsPanelFormsDetails} config
			 */
			function initDefaultValue(config) {
				if (!config["attributes"]) {
					/* 必须配置attributes属性，用于存储菜单的键和默认值 */
					return;
				}
				/* 获取键名 */
				let key = config["attributes"][that.$data.attributeKeyName];
				/* 获取默认值 */
				let defaultValue =
					config["attributes"][that.$data.attributeDefaultValueName];
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
				if (!leftContentConfigItem["forms"]) {
					/* 不存在forms */
					continue;
				}
				let rightContentConfigList = leftContentConfigItem["forms"];
				for (
					let formItemIndex = 0;
					formItemIndex < rightContentConfigList.length;
					formItemIndex++
				) {
					let rightContentConfigItem = rightContentConfigList[formItemIndex];
					let childFormConfigList = rightContentConfigItem["forms"];
					if (childFormConfigList) {
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
		 * @param {string} key 键
		 * @param {any} value 值
		 */
		setValue(key, value) {
			let locaData = GM_getValue(this.$data.key, {});
			let oldValue = locaData[key];
			locaData[key] = value;
			GM_setValue(this.$data.key, locaData);
			if (this.$listener.listenData.has(key)) {
				this.$listener.listenData.get(key).callback(key, oldValue, value);
			}
		},
		/**
		 * 获取值
		 * @param {string} key 键
		 * @param {boolean} defaultValue 默认值
		 * @returns {any}
		 */
		getValue(key, defaultValue) {
			let locaData = GM_getValue(this.$data.key, {});
			let localValue = locaData[key];
			if (localValue == null) {
				/* 值不存在或值为null/undefined或只有键但无值 */
				if (this.$data.data.has(key)) {
					/* 先判断是否是菜单配置的键 */
					/* 是的话取出值并返回 */
					return this.$data.data.get(key);
				}
				return defaultValue;
			}
			return localValue;
		},
		/**
		 * 删除值
		 * @param {string} key 键
		 */
		deleteValue(key) {
			let locaData = GM_getValue(this.$data.key, {});
			let oldValue = locaData[key];
			Reflect.deleteProperty(locaData, key);
			GM_setValue(this.$data.key, locaData);
			if (this.$listener.listenData.has(key)) {
				this.$listener.listenData.get(key).callback(key, oldValue, void 0);
			}
		},
		/**
		 * 监听调用setValue、deleteValue
		 * @param {string} key 需要监听的键
		 * @param {(key: string,oldValue: any,newValue: any)=>void} callback
		 */
		addValueChangeListener(key, callback) {
			let listenerId = Math.random();
			this.$listener.listenData.set(key, {
				id: listenerId,
				key,
				callback,
			});
			return listenerId;
		},
		/**
		 * 判断该键是否存在
		 * @param {string} key 键
		 */
		hasKey(key) {
			let locaData = GM_getValue(this.$data.key, {});
			return key in locaData;
		},
		/**
		 * 移除监听
		 * @param {number} listenerId 监听的id
		 */
		removeValueChangeListener(listenerId) {
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
		 * @param {string} key
		 * @param {Function} callback 回调
		 */
		execMenu(key, callback) {
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
		 * @param {string} key
		 * @param {(value: any) => void} callback 回调
		 */
		execMenuOnce(key, callback) {
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
		 * @param {string} key
		 * @param {Function} callback
		 */
		onceExec(key, callback) {
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
					text: `${this.$data.scriptName}-设置`,
					position: "center",
				},
				content: this.getPanelContentConfig(),
				mask: {
					enable: true,
					clickEvent: {
						toClose: true,
					},
				},
				width: "92vw",
				height: "80vh",
				drag: true,
				dragLimit: true,
			});
		},
		/**
		 * 获取checkbox按钮配置
		 * @param {string} text 文字
		 * @param {?string} description （可选）描述
		 * @param {string} key 键
		 * @param {boolean} defaultValue 默认值
		 * @param {?(event: InputEvent,value: boolean)=>boolean} clickCallBack （可选）点击回调
		 * @returns {PopsPanelSwitchDetails}
		 */
		getSwtichDetail(text, description, key, defaultValue, clickCallBack) {
			/**
			 * @type {PopsPanelSwitchDetails}
			 */
			let result = {
				text: text,
				type: "switch",
				description: description,
				attributes: {},
				getValue() {
					return Boolean(PopsPanel.getValue(key, defaultValue));
				},
				callback(event, value) {
					log.success(`${value ? "开启" : "关闭"} ${text}`);
					if (typeof clickCallBack === "function") {
						if (clickCallBack(event, value)) {
							return;
						}
					}
					PopsPanel.setValue(key, Boolean(value));
				},
			};
			result.attributes[this.$data.attributeKeyName] = key;
			result.attributes[this.$data.attributeDefaultValueName] =
				Boolean(defaultValue);
			return result;
		},
		/**
		 * 获取输入框配置
		 * @param {string} text 文字
		 * @param {string|undefined} description 描述
		 * @param {string} [placeholder=""] 提示
		 * @param {string} key 键
		 * @param {boolean} defaultValue 默认值
		 * @param {?(event:Event,value: string)=>boolean} changeCallBack 输入回调
		 * @returns {PopsPanelInputDetails}
		 */
		getInputDetail(
			text,
			description,
			placeholder = "",
			key,
			defaultValue,
			changeCallBack
		) {
			/**
			 * @type {PopsPanelInputDetails}
			 */
			let result = {
				text: text,
				type: "input",
				attributes: {},
				description: description,
				getValue() {
					let localValue = PopsPanel.getValue(key, defaultValue);
					return localValue;
				},
				callback(event, value) {
					if (typeof changeCallBack === "function") {
						if (changeCallBack(event, value)) {
							return;
						}
					}
					PopsPanel.setValue(key, value);
				},
				placeholder: placeholder,
			};
			result.attributes[this.$data.attributeKeyName] = key;
			result.attributes[this.$data.attributeDefaultValueName] = defaultValue;

			return result;
		},
		/**
		 * 获取下拉列表配置
		 * @param {string} text 文字
		 * @param {string} description （可选）描述
		 * @param {string} key 键
		 * @param {any} defaultValue 默认值
		 * @param {{
		 * value: any,
		 * text: string,
		 * }[]} data 数据
		 * @param {(event:PointerEvent, isSelectedValue: any, isSelectedText:string)=>void} selectCallBack（可选）选择的回调
		 * @returns {PopsPanelSelectDetails}
		 */
		getSelectDetail(
			text,
			description,
			key,
			defaultValue,
			data,
			selectCallBack
		) {
			/**
			 * @type {PopsPanelSelectDetails}
			 */
			let result = {
				text: text,
				type: "select",
				description: description,
				attributes: {},
				getValue() {
					return PopsPanel.getValue(key, defaultValue);
				},
				callback(event, isSelectedValue, isSelectedText) {
					PopsPanel.setValue(key, isSelectedValue);
					if (typeof selectCallBack === "function") {
						selectCallBack(event, isSelectedValue, isSelectedText);
					}
				},
				data: data,
			};

			result.attributes[this.$data.attributeKeyName] = key;
			result.attributes[this.$data.attributeDefaultValueName] = defaultValue;
			return result;
		},
		/**
		 * 获取配置内容
		 * @returns {PopsPanelContentConfig[]}
		 */
		getPanelContentConfig() {
			return [
				{
					id: "panel-config-",
					title: "通用",
					forms: [
						{
							text: "功能",
							type: "forms",
							forms: [],
						},
					],
				},
			];
		},
	};

	/* ---------------------入口--------------------- */
	PopsPanel.init();

	/* ---------------------入口--------------------- */
})();
