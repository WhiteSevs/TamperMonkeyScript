import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import { utils } from "@/env";
import { GMTotal } from "./GMTotal";

const LocalStorageApi = {
	$storageKey: "gm-api-test-storage-config",
	set(key: string, value: any) {
		let config = window.localStorage.getItem(LocalStorageApi.$storageKey) ?? "{}";
		let configJSON = utils.toJSON(config);
		configJSON[key] = value;
		window.localStorage.setItem(
			LocalStorageApi.$storageKey,
			JSON.stringify(configJSON, (key, value) => {
				return typeof value === "function" ? value.tString() : value;
			})
		);
	},
	get<K extends any>(key: string, defaultValue?: K): K {
		let config = window.localStorage.getItem(LocalStorageApi.$storageKey) ?? "{}";
		let configJSON = utils.toJSON(config);
		return configJSON[key] ?? defaultValue;
	},
	delete(key: string) {
		let config = window.localStorage.getItem(LocalStorageApi.$storageKey) ?? "{}";
		let configJSON = utils.toJSON(config);
		Reflect.deleteProperty(configJSON, key);
		window.localStorage.setItem(
			LocalStorageApi.$storageKey,
			JSON.stringify(configJSON, (key, value) => {
				return typeof value === "function" ? value.tString() : value;
			})
		);
	},
};

export const StorageApi = {
	/**
	 * 存储值
	 * @param key 键
	 * @param value 值
	 */
	set(key: string, value: any) {
		if (GMTotal.setValue.isSupport() && GMTotal.getValue.isSupport() && GMTotal.deleteValue.isSupport()) {
			GM_setValue(key, value);
		} else {
			LocalStorageApi.set(key, value);
		}
	},
	/**
	 * 获取值
	 * @param key 键
	 * @param defaultValue 默认值
	 */
	get<K extends any>(key: string, defaultValue?: K): K {
		if (GMTotal.setValue.isSupport() && GMTotal.getValue.isSupport() && GMTotal.deleteValue.isSupport()) {
			return GM_getValue(key, defaultValue);
		} else {
			return LocalStorageApi.get(key, defaultValue);
		}
	},
	/**
	 * 删除值
	 * @param key 键
	 */
	delete(key: string) {
		if (GMTotal.setValue.isSupport() && GMTotal.getValue.isSupport() && GMTotal.deleteValue.isSupport()) {
			GM_deleteValue(key);
		} else {
			LocalStorageApi.delete(key);
		}
	},
};
