import { console } from "@/env";
import { GlobalSettingConfig } from "@/setting/config";
import { Panel } from "@components/setting/panel";

export const ChiiPluginHeight = {
	$data: {
		get key() {
			return GlobalSettingConfig.chii_embedded_height.key;
		},
		winHeight: parseInt(window.innerHeight.toString()),
		get winHalfHeight() {
			return GlobalSettingConfig.chii_embedded_height.defaultValue;
		},
	},
	init() {
		let height = this.$data.winHalfHeight;
		if (!this.isExistGMLocalHeight()) {
			/* GM未创建或不是数字，设置值到油猴数据管理器中 */
			this.setGMLocalHeight(height);
		} else {
			height = this.getGMLocalHeight();
		}
		this.setLocalHeight(height);
	},
	/**
	 *
	 */
	getLocalHeight() {
		let value = Number(globalThis.localStorage.getItem(this.$data.key));
		if (isNaN(value)) {
			return null;
		}
		return value;
	},
	/**
	 *
	 * @param value
	 */
	setLocalHeight(value: number) {
		if (typeof value !== "number") {
			console.log(value);
			throw new TypeError(`${this.$data.key}的值必须是number`);
		}
		let storageValue = value.toString();
		globalThis.localStorage.setItem(this.$data.key, storageValue);
		let localHeight = this.getLocalHeight();
		if (!localHeight || localHeight.toString() !== storageValue) {
			globalThis.localStorage[this.$data.key] = storageValue;
		}
	},
	isExistGMLocalHeight() {
		return typeof this.getGMLocalHeight() === "number";
	},
	/**
	 *
	 */
	getGMLocalHeight() {
		return Panel.getValue<number>(this.$data.key);
	},
	/**
	 *
	 * @param value
	 */
	setGMLocalHeight(value: number) {
		if (typeof value !== "number") {
			console.log(value);
			throw new TypeError(`${this.$data.key}的值必须是number`);
		}
		Panel.setValue(this.$data.key, value);
	},
};
