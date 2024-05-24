/**
 * 
 * @param {UtilsGMMenuConstructorOptions} details 
 */
const GMMenu = function (details) {
	const GM_Api = {
		/**
		 * 获取存储的数据
		 * @type {GM_getValue}
		 */
		getValue: details.GM_getValue,
		/**
		 * 设置数据到存储
		 * @type {GM_setValue}
		 */
		setValue: details.GM_setValue,
		/**
		 * 注册菜单
		 * @type {GM_registerMenuCommand}
		 */
		registerMenuCommand: details.GM_registerMenuCommand,
		/**
		 * 卸载菜单
		 * @type {GM_unregisterMenuCommand}
		 */
		unregisterMenuCommand: details.GM_unregisterMenuCommand,
	};
	for (const keyName of Object.keys(GM_Api)) {
		if (typeof GM_Api[keyName] !== "function") {
			throw new Error(
				`Utils.GM_Menu 请在脚本开头加上 @grant  ${keyName}，且传入该对象`
			);
		}
	}
	/** 上下文 */
	const context = this;

	const MenuHandle = {
		$data: {
			/**
			 * 菜单数据
			 * @type {UtilsGMMenuOptionData[]}
			 */
			data: [],
			/**
			 * 本地存储的键名
			 */
			key: "GM_Menu_Local_Map",
		},
		$default: {
			/** 自动刷新网页，默认为true */
			autoReload:
				typeof details.autoReload === "boolean" ? details.autoReload : true,
			/**
			 * 菜单isStoreValue的默认值
			 */
			isStoreValue: true,
		},
		$emoji: {
			/**
			 * 菜单enable为true的emoji
			 */
			success: "✅",
			/**
			 * 菜单enable为false的emoji
			 */
			error: "❌",
		},
		/**
		 * 初始化数据
		 */
		init() {
			for (let index = 0; index < this.$data.data.length; index++) {
				let menuOption = this.$data.data[index]["data"];
				menuOption.enable = Boolean(
					this.getLocalMenuData(menuOption.key, menuOption.enable)
				);
				if (typeof menuOption.showText !== "function") {
					menuOption.showText = (menuText, menuEnable) => {
						if (menuEnable) {
							return this.$emoji.success + " " + menuText;
						} else {
							return this.$emoji.error + " " + menuText;
						}
					};
				}
			}
		},
		/**
		 * 注册油猴菜单
		 * @param { ?UtilsGMMenuOptionData[] } menuOptions 如果存在，使用它
		 */
		register(menuOptions) {
			if (menuOptions == null) {
				throw new TypeError("register菜单数据不能为空");
			}
			if (!Array.isArray(menuOptions)) {
				menuOptions = [menuOptions];
			}
			for (let index = 0; index < menuOptions.length; index++) {
				let cloneMenuOptionData = Utils.deepClone(menuOptions[index].data);
				const { showText, clickCallBack } =
					this.handleMenuData(cloneMenuOptionData);
				let menuId = GM_Api.registerMenuCommand(showText, clickCallBack);
				menuOptions[index].id = menuId;
				cloneMenuOptionData.deleteMenu = function () {
					GM_Api.unregisterMenuCommand(menuId);
				};
				Reflect.deleteProperty(menuOptions[index], "handleData");
				menuOptions[index].handleData = cloneMenuOptionData;
			}
		},
		/**
		 * 获取本地存储菜单键值
		 * @param {string} key 键
		 * @returns {boolean}
		 */
		getLocalMenuData(key, defaultValue) {
			let localData = GM_Api.getValue(this.$data.key, {});
			if (key in localData) {
				return localData[key];
			} else {
				return defaultValue;
			}
		},
		/**
		 * 设置本地存储菜单键值
		 * @param {string} key 键
		 * @param {boolean} value 值
		 */
		setLocalMenuData(key, value) {
			let localData = GM_Api.getValue(this.$data.key, {});
			localData[key] = value;
			GM_Api.setValue(this.$data.key, localData);
		},
		/**
		 * 处理初始化配置
		 * @param { UtilsGMMenuOption } menuOption
		 */
		handleInitDetail(menuOption) {
			menuOption.enable = Boolean(
				this.getLocalMenuData(menuOption.key, menuOption.enable)
			);
			if (typeof menuOption.showText !== "function") {
				menuOption.showText = (menuText, menuEnable) => {
					if (menuEnable) {
						return this.$emoji.success + " " + menuText;
					} else {
						return this.$emoji.error + " " + menuText;
					}
				};
			}
			return menuOption;
		},
		/**
		 * 对菜单数据进行处理
		 * @param { UtilsGMMenuOption } menuOption
		 */
		handleMenuData(menuOption) {
			let menuLocalDataItemKey = menuOption.key;
			/* 菜单默认开启的状态 */
			let defaultEnable = Boolean(
				this.getLocalMenuData(menuLocalDataItemKey, menuOption.enable)
			);
			/** 油猴菜单上显示的文本 */
			let showText = menuOption.showText(menuOption.text, defaultEnable);
			const that = this;
			const GMMenuOptions = {
				/**
				 * 菜单的id
				 */
				id: menuOption.id,
				/**
				 * 点击菜单项后是否应关闭弹出菜单
				 */
				autoClose: menuOption.autoClose,
				/**
				 * 菜单项的可选访问键
				 */
				accessKey: menuOption.accessKey,
				/**
				 * 菜单项的鼠标悬浮上的工具提示
				 */
				title: menuOption.title,
			};
			/* 点击菜单后触发callback后的网页是否刷新 */
			menuOption.autoReload =
				typeof menuOption.autoReload !== "boolean"
					? this.$default.autoReload
					: menuOption.autoReload;
			/* 点击菜单后触发callback后的网页是否存储值 */
			menuOption.isStoreValue =
				typeof menuOption.isStoreValue !== "boolean"
					? this.$default.isStoreValue
					: menuOption.isStoreValue;
			/**
			 * 用户点击菜单后的回调函数
			 * @param {MouseEvent|PointerEvent} event
			 */
			function clickCallBack(event) {
				let localEnable = Boolean(
					that.getLocalMenuData(menuLocalDataItemKey, defaultEnable)
				);
				if (menuOption.isStoreValue) {
					that.setLocalMenuData(menuLocalDataItemKey, !localEnable);
				}
				if (typeof menuOption.callback === "function") {
					menuOption.callback({
						key: menuLocalDataItemKey,
						enable: !localEnable,
						oldEnable: localEnable,
						event: event,
						storeValue(value) {
							that.setLocalMenuData(menuLocalDataItemKey, value);
						},
					});
				}
				/* 不刷新网页就刷新菜单 */
				if (menuOption.autoReload) {
					window.location.reload();
				} else {
					context.update();
				}
			}

			return {
				showText,
				clickCallBack,
			};
		},
		/**
		 * 获取目标菜单配置数据
		 * @param {string} menuKey 菜单-键key
		 */
		getMenuData(menuKey) {
			return this.$data.data.find((item) => item.data.key === menuKey);
		},
		/**
		 * 获取目标菜单配置
		 * @param {string} menuKey 菜单-键key
		 */
		getMenuOption(menuKey) {
			return this.$data.data.find((item) => item.data.key === menuKey)?.data;
		},
		/**
		 * 获取目标菜单处理后的配置
		 * @param {string} menuKey 菜单-键key
		 */
		getMenuHandledOption(menuKey) {
			return this.$data.data.find((item) => item.handleData.key === menuKey)
				?.handleData;
		},
	};

	/**
	 * 新增菜单数据
	 * @param {UtilsGMMenuOption[]|UtilsGMMenuOption} paramData
	 */
	this.add = function (paramData) {
		if (Array.isArray(paramData)) {
			for (const _paramData of paramData) {
				MenuHandle.$data.data.push({
					data: _paramData,
					id: void 0,
				});
			}
		} else {
			MenuHandle.$data.data.push({
				data: paramData,
				id: void 0,
			});
		}
		this.update();
	};
	/**
	 * 更新菜单数据
	 * @param { ?UtilsGMMenuOption[]|UtilsGMMenuOption } options 数据
	 */
	this.update = function (options) {
		/**
		 * @type {UtilsGMMenuOption[]}
		 */
		let optionsList = [];
		if (Array.isArray(options)) {
			optionsList = [...optionsList, ...options];
		} else if (options != null) {
			optionsList = [...optionsList, options];
		}
		optionsList.forEach((item) => {
			let targetMenu = MenuHandle.getMenuOption(item.key);
			if (targetMenu) {
				Object.assign(targetMenu, item);
			}
		});
		MenuHandle.$data.data.forEach((value) => {
			if (value.handleData) {
				value.handleData.deleteMenu();
			}
		});
		MenuHandle.init();
		MenuHandle.register(MenuHandle.$data.data);
	};
	/**
	 * 卸载菜单
	 * @param {number} menuId 已注册的菜单id
	 */
	this.delete = function (menuId) {
		GM_Api.unregisterMenuCommand(menuId);
	};
	/**
	 * 根据键值获取enable值
	 * @param {string} menuKey 菜单-键key
	 * @returns {boolean}
	 */
	this.get = function (menuKey) {
		return this.getEnable(menuKey);
	};
	/**
	 * 根据键值获取enable值
	 * @param {string} menuKey 菜单-键key
	 * @returns {boolean}
	 */
	this.getEnable = function (menuKey) {
		return MenuHandle.getMenuHandledOption(menuKey).enable;
	};
	/**
	 * 根据键值获取text值
	 * @param {string} menuKey 菜单-键key
	 * @returns {string}
	 */
	this.getText = function (menuKey) {
		return MenuHandle.getMenuHandledOption(menuKey).text;
	};
	/**
	 * 根据键值获取showText函数的值
	 * @param {string} menuKey 菜单-键key
	 * @returns {string}
	 */
	this.getShowTextValue = function (menuKey) {
		return MenuHandle.getMenuHandledOption(menuKey).showText(
			this.getText(menuKey),
			this.get(menuKey)
		);
	};
	/**
	 * 获取当前已注册菜单的id
	 * @param {string} menuKey
	 * @returns {?number}
	 */
	this.getMenuId = function (menuKey) {
		let result = null;
		for (let index = 0; index < MenuHandle.$data.data.length; index++) {
			const optionData = MenuHandle.$data.data[index];
			if (optionData.handleData.key === menuKey) {
				result = optionData.id;
				break;
			}
		}
		return result;
	};
	/**
	 * 根据键值获取accessKey值
	 * @param {string} menuKey 菜单-键key
	 * @returns {?string}
	 */
	this.getAccessKey = function (menuKey) {
		return MenuHandle.getMenuHandledOption(menuKey).accessKey;
	};
	/**
	 * 根据键值获取autoClose值
	 * @param {string} menuKey 菜单-键key
	 * @returns {?boolean}
	 */
	this.getAutoClose = function (menuKey) {
		return MenuHandle.getMenuHandledOption(menuKey).autoClose;
	};
	/**
	 * 根据键值获取autoReload值
	 * @param {string} menuKey 菜单-键key
	 * @returns {boolean}
	 */
	this.getAutoReload = function (menuKey) {
		return MenuHandle.getMenuHandledOption(menuKey).autoReload;
	};
	/**
	 * 根据键值获取callback函数
	 * @param {string} menuKey 菜单-键key
	 * @returns {?Function}
	 */
	this.getCallBack = function (menuKey) {
		return MenuHandle.getMenuHandledOption(menuKey).callback;
	};
	/**
	 * 获取当enable为true时默认显示在菜单中前面的emoji图标
	 * @returns {string}
	 */
	this.getEnableTrueEmoji = function () {
		return MenuHandle.$emoji.success;
	};
	/**
	 * 获取当enable为false时默认显示在菜单中前面的emoji图标
	 * @returns {string}
	 */
	this.getEnableFalseEmoji = function () {
		return MenuHandle.$emoji.error;
	};
	/**
	 * 获取本地存储的菜单外部的键名
	 * @param {string} keyName
	 */
	this.getLocalStorageKeyName = function () {
		return MenuHandle.$data.key;
	};
	/**
	 * 设置菜单的值
	 * @param {string} menuKey 菜单-键key
	 * @param {any} value 需要设置的值
	 */
	this.setValue = function (menuKey, value) {
		MenuHandle.setLocalMenuData(menuKey, value);
	};
	/**
	 * 设置菜单的值
	 * @param {string} menuKey 菜单-键key
	 * @param {boolean} value 需要设置的值
	 */
	this.setEnable = function (menuKey, value) {
		this.setValue(menuKey, Boolean(value));
	};
	/**
	 * 设置当enable为true时默认显示在菜单中前面的emoji图标
	 * @param {string} emojiString
	 */
	this.setEnableTrueEmoji = function (emojiString) {
		if (typeof emojiString !== "string") {
			throw new Error("参数emojiString必须是string类型");
		}
		MenuHandle.$emoji.success = emojiString;
	};
	/**
	 * 设置当enable为false时默认显示在菜单中前面的emoji图标
	 * @param {string} emojiString
	 */
	this.setEnableFalseEmoji = function (emojiString) {
		if (typeof emojiString !== "string") {
			throw new Error("参数emojiString必须是string类型");
		}
		MenuHandle.$emoji.error = emojiString;
	};
	/**
	 * 设置本地存储的菜单外部的键名
	 * @param {string} keyName
	 */
	this.setLocalStorageKeyName = function (keyName) {
		if (typeof keyName !== "string") {
			throw new Error("参数keyName必须是string类型");
		}
		MenuHandle.$data.key = keyName;
	};

	this.add(details?.data || []);
};

export { GMMenu };
