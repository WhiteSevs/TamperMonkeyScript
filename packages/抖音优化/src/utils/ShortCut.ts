import { GM_getValue, GM_setValue } from "ViteGM";
import { Qmsg, log, utils } from "@/env";

interface ShortCutValue {
	key: string;
	value: {
		keyName: string;
		keyValue: number | string;
		ohterCodeList: string[];
	};
}

interface ShortCutMap {
	[key: string]: {
		callback(): void;
	};
}

class ShortCut {
	#key: string = "short-cut";
	#isWaitPress: boolean = false;
	constructor(key: string) {
		if (typeof key === "string") {
			this.#key = key;
		}
	}
	/**
	 * 获取值
	 * @param key 键
	 * @param defaultValue
	 */
	getValue(): ShortCutValue[];
	getValue(key: string): ShortCutValue | undefined;
	getValue(key?: string, defaultValue?: ShortCutValue["value"]) {
		let localValue = GM_getValue<ShortCutValue[]>(this.#key, []);
		if (key) {
			let findValue = localValue.find((item) => item.key === key);
			return findValue ?? defaultValue;
		} else {
			return localValue;
		}
	}
	/**
	 * 设置值
	 * @param key 键
	 */
	setValue(
		key: string,
		keyName: string,
		keyValue: string,
		ohterCodeList: string[],
	) {
		let localValue = GM_getValue<ShortCutValue[]>(this.#key, []);
		localValue.push({
			key: key,
			value: {
				keyName: keyName,
				keyValue: keyValue,
				ohterCodeList: ohterCodeList,
			},
		});
		GM_setValue(this.#key, localValue);
	}
	/**
	 * 删除值
	 * @param key 键
	 */
	deleteValue(key: string) {
		let result = false;
		let localValue = GM_getValue<ShortCutValue[]>(this.#key, []);
		let findValueIndex = localValue.findIndex((item) => item["key"] === key);
		if (findValueIndex !== -1) {
			localValue.splice(findValueIndex, 1);
			result = true;
		}
		GM_setValue(this.#key, localValue);
		return result;
	}
	/**
	 * 获取快捷键显示的文字
	 * @param key
	 * @param defaultValue
	 */
	getShowText(key: string, defaultValue: string) {
		let localValue = this.getValue(key);
		if (localValue) {
			/* 如果获取到，转需要显示的文字 */
			let result = "";
			localValue.value.ohterCodeList.forEach((ohterCodeKey) => {
				if (localValue.key === key) {
					result += utils.stringTitleToUpperCase(ohterCodeKey, true) + " + ";
				}
			});
			result += localValue.value.keyName;
			return result;
		} else {
			/* 未获取到，显示为默认的文字 */
			return defaultValue;
		}
	}
	/**
	 * 录入快捷键
	 */
	inputShortCut(
		key: string,
		defaultValue: string,
		callback?: (showText: string) => void,
	) {
		let localValue = this.getValue(key) ?? defaultValue;
		if (localValue === defaultValue) {
			/* 设置快捷键 */
			let loadingQmsg = Qmsg.loading("请按下快捷键...", {
				showClose: true,
				onClose() {
					keyboardListener.removeListen();
				},
			});
			this.#isWaitPress = true;
			let keyboardListener = utils.listenKeyboard(
				window,
				"keyup",
				(keyName, keyValue, ohterCodeList) => {
					let shortcutJSONString = JSON.stringify({
						keyName: keyName,
						keyValue: keyValue,
						ohterCodeList: ohterCodeList,
					});
					let allDetails = this.getValue();
					for (let index = 0; index < allDetails.length; index++) {
						if (
							shortcutJSONString === JSON.stringify(allDetails[index]["value"])
						) {
							Qmsg.error(
								`快捷键 ${this.getShowText(
									allDetails[index]["key"],
									keyName,
								)} 已被占用`,
							);
							this.#isWaitPress = false;
							loadingQmsg.close();
							return;
						}
					}
					this.setValue(key, keyName, keyValue, ohterCodeList);
					if (typeof callback === "function") {
						callback(this.getShowText(key, defaultValue));
					}
					this.#isWaitPress = false;
					loadingQmsg.close();
				},
			);
		} else {
			/* 清空快捷键 */
			this.deleteValue(key);
		}
		if (typeof callback === "function") {
			callback(this.getShowText(key, defaultValue));
		}
	}
	/**
	 * 初始化全局键盘监听
	 */
	initGlobalKeyboardListener(shortCutMap: ShortCutMap) {
		let localValue = this.getValue();
		if (!localValue.length) {
			/* 没有设置快捷键 */
			return;
		}
		utils.listenKeyboard(
			window,
			"keydown",
			(keyName, keyValue, ohterCodeList) => {
				if (this.#isWaitPress) {
					return;
				}
				localValue = this.getValue();
				let findShortcutIndex = localValue.findIndex((item) => {
					let itemValue = item["value"];
					let tempValue = {
						keyName: keyName,
						keyValue: keyValue,
						ohterCodeList: ohterCodeList,
					};
					if (JSON.stringify(itemValue) === JSON.stringify(tempValue)) {
						return item;
					}
				});
				if (findShortcutIndex != -1) {
					let findShortcut = localValue[findShortcutIndex];
					log.info(["调用快捷键", findShortcut]);
					if (findShortcut.key in shortCutMap) {
						shortCutMap[findShortcut.key].callback();
					}
				}
			},
		);
	}
}

export { ShortCut, type ShortCutMap };
