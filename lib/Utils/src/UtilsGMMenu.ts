import { Utils } from "./Utils";

declare interface UtilsGMMenuClickCallBackData {
	/** 菜单键名 */
	key: string;
	/** 是否启用 */
	enable: boolean;
	/** 点击前的enable值 */
	oldEnable: boolean;
	/** 触发的事件 */
	event: MouseEvent | KeyboardEvent;
	/** 将enable值写入本地的回调，设置参数false就不保存到本地 */
	storeValue(enable: boolean): void;
}

declare interface UtilsGMMenuOption {
	/** 菜单的本地键key，不可重复，会覆盖 */
	key: string;
	/** 菜单的文本 */
	text: string;
	/** （可选）菜单的开启状态，默认为false */
	enable?: boolean;
	/** （可选）使用条件：TamperMonkey版本>5.0，如果id和已注册的菜单id相同，可修改当前已注册菜单的options */
	id?: number;
	/** （可选）An optional access key. Please see the description below. Either options or accessKey can be specified. */
	accessKey?: string;
	/** （可选）自动关闭菜单，可不设置 */
	autoClose?: boolean;
	/** 使用条件：TamperMonkey版本>5.0，使用菜单项的鼠标悬浮上的工具提示*/
	title?: string;
	/** （可选）点击菜单后自动刷新网页，默认为true */
	autoReload?: boolean;
	/** 菜单的显示文本，未设置的话则自动根据enable在前面加上图标 */
	showText(text: string, enable: boolean): string;
	/** 点击菜单的回调 */
	callback(data: UtilsGMMenuClickCallBackData): void;
	/** 是否允许菜单进行存储值，默认true允许 */
	isStoreValue?: boolean;
}

declare interface UtilsGMMenuHandledOption extends UtilsGMMenuOption {
	/**
	 * 删除该菜单
	 */
	deleteMenu(): void;
}

declare interface UtilsGMMenuOptionData {
	/**
	 * 菜单id
	 */
	id?: number;
	/**
	 * 菜单配置
	 */
	data: UtilsGMMenuOption;
	/**
	 * 处理后的菜单配置
	 * 对autoReload进行处理，如果未赋值，按默认的true赋值
	 * 对isStoreValue进行处理，如果未赋值，按默认的true赋值
	 * 新增一个deleteMenu
	 */
	handleData: UtilsGMMenuHandledOption;
}

declare interface UtilsGMMenuConstructorOptions {
	/** （可选）配置*/
	data?: UtilsGMMenuOption[];
	/** （可选）全局菜单点击菜单后自动刷新网页，默认为true */
	autoReload?: boolean;
	/**  油猴函数 @grant GM_getValue */
	GM_getValue: any;
	/**  油猴函数 @grant GM_setValue */
	GM_setValue: any;
	/**  油猴函数 @grant GM_registerMenuCommand */
	GM_registerMenuCommand: any;
	/**  油猴函数 @grant GM_unregisterMenuCommand */
	GM_unregisterMenuCommand: any;
}

class GMMenu {
	private GM_Api = {
		/**
		 * 获取存储的数据
		 */
		getValue: null as any,
		/**
		 * 设置数据到存储
		 */
		setValue: null as any,
		/**
		 * 注册菜单
		 */
		registerMenuCommand: null as any,
		/**
		 * 卸载菜单
		 */
		unregisterMenuCommand: null as any,
	};
	private MenuHandle = {
		context: this,
		$data: {
			/**
			 * 菜单数据
			 */
			data: <UtilsGMMenuOptionData[]>[],
			/**
			 * 本地存储的键名
			 */
			key: "GM_Menu_Local_Map",
		},
		$default: {
			/** 自动刷新网页，默认为true */
			autoReload: true,
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
					this.getLocalMenuData(menuOption.key, menuOption.enable as boolean)
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
		 * @param menuOptions 如果存在，使用它
		 */
		register(menuOptions?: UtilsGMMenuOptionData[]) {
			let that = this;
			if (menuOptions == null) {
				throw new TypeError("register菜单数据不能为空");
			}
			if (!Array.isArray(menuOptions)) {
				menuOptions = [menuOptions];
			}
			for (let index = 0; index < menuOptions.length; index++) {
				let cloneMenuOptionData = Utils.deepClone(menuOptions[index].data);
				const { showText, clickCallBack } = this.handleMenuData(
					cloneMenuOptionData as Required<UtilsGMMenuOption>
				);
				let menuId = that.context.GM_Api.registerMenuCommand(
					showText,
					clickCallBack
				);
				menuOptions[index].id = menuId;
				(cloneMenuOptionData as any).deleteMenu = function () {
					that.context.GM_Api.unregisterMenuCommand(menuId);
				};
				Reflect.deleteProperty(menuOptions[index], "handleData");
				(menuOptions[index] as any).handleData = cloneMenuOptionData;
			}
		},
		/**
		 * 获取本地存储菜单键值
		 * @param {string} key 键
		 */
		getLocalMenuData(key: string, defaultValue: boolean): boolean {
			let localData = this.context.GM_Api.getValue(this.$data.key, {});
			if (key in localData) {
				return (localData as any)[key];
			} else {
				return defaultValue;
			}
		},
		/**
		 * 设置本地存储菜单键值
		 * @param key 键
		 * @param value 值
		 */
		setLocalMenuData(key: string, value: boolean) {
			let localData = this.context.GM_Api.getValue(this.$data.key, {});
			(localData as any)[key] = value;
			this.context.GM_Api.setValue(this.$data.key, localData);
		},
		/**
		 * 处理初始化配置
		 * @param menuOption
		 */
		handleInitDetail(menuOption: Required<UtilsGMMenuOption>) {
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
		 * @param menuOption
		 */
		handleMenuData(menuOption: Required<UtilsGMMenuOption>) {
			let that = this;
			let menuLocalDataItemKey = menuOption.key;
			/* 菜单默认开启的状态 */
			let defaultEnable = Boolean(
				this.getLocalMenuData(menuLocalDataItemKey, menuOption.enable)
			);
			/** 油猴菜单上显示的文本 */
			let showText = menuOption.showText(menuOption.text, defaultEnable);
			// @ts-ignore
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
			 * @param event
			 */
			function clickCallBack(event: MouseEvent | PointerEvent) {
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
					that.context.update();
				}
			}

			return {
				showText,
				clickCallBack,
			};
		},
		/**
		 * 获取目标菜单配置数据
		 * @param menuKey 菜单-键key
		 */
		getMenuData(menuKey: string) {
			return this.$data.data.find((item) => item.data.key === menuKey);
		},
		/**
		 * 获取目标菜单配置
		 * @param menuKey 菜单-键key
		 */
		getMenuOption(menuKey: string) {
			return this.$data.data.find((item) => item.data.key === menuKey)?.data;
		},
		/**
		 * 获取目标菜单处理后的配置
		 * @param menuKey 菜单-键key
		 */
		getMenuHandledOption(menuKey: string) {
			return this.$data.data.find((item) => item!.handleData!.key === menuKey)
				?.handleData;
		},
	};
	constructor(details: UtilsGMMenuConstructorOptions) {
		this.GM_Api.getValue = details.GM_getValue;
		this.GM_Api.setValue = details.GM_setValue;
		this.GM_Api.registerMenuCommand = details.GM_registerMenuCommand;
		this.GM_Api.unregisterMenuCommand = details.GM_unregisterMenuCommand;
		this.MenuHandle.$default.autoReload =
			typeof details.autoReload === "boolean" ? details.autoReload : true;
		for (const keyName of Object.keys(this.GM_Api)) {
			if (typeof (this.GM_Api as any)[keyName] !== "function") {
				throw new Error(
					`Utils.GM_Menu 请在脚本开头加上 @grant  ${keyName}，且传入该对象`
				);
			}
		}
		this.add(details?.data || []);
	}
	/**
	 * 新增菜单数据
	 * @param paramData
	 */
	add(paramData: UtilsGMMenuOption[] | UtilsGMMenuOption) {
		if (Array.isArray(paramData)) {
			for (const _paramData of paramData) {
				// @ts-ignore
				this.MenuHandle.$data.data.push({
					data: _paramData,
					id: void 0,
				});
			}
		} else {
			// @ts-ignore
			this.MenuHandle.$data.data.push({
				data: paramData,
				id: void 0,
			});
		}
		this.update();
	}
	/**
	 * 更新菜单数据
	 * @param options 数据
	 */
	update(options?: UtilsGMMenuOption[] | UtilsGMMenuOption) {
		let optionsList: UtilsGMMenuOption[] = [];
		if (Array.isArray(options)) {
			optionsList = [...optionsList, ...options];
		} else if (options != null) {
			optionsList = [...optionsList, options];
		}
		optionsList.forEach((item) => {
			let targetMenu = this.MenuHandle.getMenuOption(item.key);
			if (targetMenu) {
				Object.assign(targetMenu, item);
			}
		});
		this.MenuHandle.$data.data.forEach((value) => {
			if (value.handleData) {
				value.handleData.deleteMenu();
			}
		});
		this.MenuHandle.init();
		this.MenuHandle.register(this.MenuHandle.$data.data);
	}
	/**
	 * 卸载菜单
	 * @param menuId 已注册的菜单id
	 */
	delete(menuId: number) {
		this.GM_Api.unregisterMenuCommand(menuId);
	}
	/**
	 * 根据键值获取enable值
	 * @param menuKey 菜单-键key
	 */
	get(menuKey: string): boolean {
		return this.getEnable(menuKey);
	}
	/**
	 * 根据键值获取enable值
	 * @param menuKey 菜单-键key
	 */
	getEnable(menuKey: string): boolean {
		return this.MenuHandle.getMenuHandledOption(menuKey)!.enable as boolean;
	}
	/**
	 * 根据键值获取text值
	 * @param menuKey 菜单-键key
	 */
	getText(menuKey: string): string {
		return this.MenuHandle.getMenuHandledOption(menuKey)!.text;
	}
	/**
	 * 根据键值获取showText函数的值
	 * @param menuKey 菜单-键key
	 */
	getShowTextValue(menuKey: string): string {
		return this.MenuHandle.getMenuHandledOption(menuKey)!.showText(
			this.getText(menuKey),
			this.get(menuKey)
		);
	}
	/**
	 * 获取当前已注册菜单的id
	 * @param menuKey
	 */
	getMenuId(menuKey: string): number | undefined | null {
		let result = null;
		for (let index = 0; index < this.MenuHandle.$data.data.length; index++) {
			const optionData = this.MenuHandle.$data.data[index];
			if (optionData!.handleData!.key === menuKey) {
				result = optionData.id;
				break;
			}
		}
		return result;
	}
	/**
	 * 根据键值获取accessKey值
	 * @param menuKey 菜单-键key
	 */
	getAccessKey(menuKey: string): string | undefined {
		return this.MenuHandle.getMenuHandledOption(menuKey)?.accessKey;
	}
	/**
	 * 根据键值获取autoClose值
	 * @param menuKey 菜单-键key
	 */
	getAutoClose(menuKey: string): boolean | undefined {
		return this.MenuHandle.getMenuHandledOption(menuKey)?.autoClose;
	}
	/**
	 * 根据键值获取autoReload值
	 * @param menuKey 菜单-键key
	 */
	getAutoReload(menuKey: string): boolean | undefined {
		return this.MenuHandle.getMenuHandledOption(menuKey)?.autoReload;
	}
	/**
	 * 根据键值获取callback函数
	 * @param menuKey 菜单-键key
	 */
	getCallBack(menuKey: string): Function | undefined {
		return this.MenuHandle.getMenuHandledOption(menuKey)?.callback;
	}
	/**
	 * 获取当enable为true时默认显示在菜单中前面的emoji图标
	 */
	getEnableTrueEmoji() {
		return this.MenuHandle.$emoji.success;
	}
	/**
	 * 获取当enable为false时默认显示在菜单中前面的emoji图标
	 */
	getEnableFalseEmoji() {
		return this.MenuHandle.$emoji.error;
	}
	/**
	 * 获取本地存储的菜单外部的键名
	 * @param keyName
	 */
	getLocalStorageKeyName() {
		return this.MenuHandle.$data.key;
	}
	/**
	 * 设置菜单的值
	 * @param menuKey 菜单-键key
	 * @param value 需要设置的值
	 */
	setValue(menuKey: string, value: any) {
		this.MenuHandle.setLocalMenuData(menuKey, value);
	}
	/**
	 * 设置菜单的值
	 * @param menuKey 菜单-键key
	 * @param value 需要设置的值
	 */
	setEnable(menuKey: string, value: boolean) {
		this.setValue(menuKey, Boolean(value));
	}
	/**
	 * 设置当enable为true时默认显示在菜单中前面的emoji图标
	 * @param emojiString
	 */
	setEnableTrueEmoji(emojiString: string) {
		if (typeof emojiString !== "string") {
			throw new Error("参数emojiString必须是string类型");
		}
		this.MenuHandle.$emoji.success = emojiString;
	}
	/**
	 * 设置当enable为false时默认显示在菜单中前面的emoji图标
	 * @param emojiString
	 */
	setEnableFalseEmoji(emojiString: string) {
		if (typeof emojiString !== "string") {
			throw new Error("参数emojiString必须是string类型");
		}
		this.MenuHandle.$emoji.error = emojiString;
	}
	/**
	 * 设置本地存储的菜单外部的键名
	 * @param keyName
	 */
	setLocalStorageKeyName(keyName: string) {
		if (typeof keyName !== "string") {
			throw new Error("参数keyName必须是string类型");
		}
		this.MenuHandle.$data.key = keyName;
	}
}

export { GMMenu };
