import { PopsPanel } from "@/setting/setting";
import { console } from "@/env";
import { PanelSettingConfig } from "@/setting/panel-setting-config";

export const ChiiPluginHeight = {
	$data: {
		get key() {
			return PanelSettingConfig.chii_embedded_height.key;
		},
		winHeight: parseInt(window.innerHeight.toString()),
		get winHalfHeight() {
			return PanelSettingConfig.chii_embedded_height.defaultValue;
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
	isExistLocalHeight() {
		return typeof this.getLocalHeight() === "number";
	},
	/**
	 *
	 */
	getLocalHeight() {
		return globalThis.localStorage.getItem(this.$data.key);
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
		// @ts-ignore
		globalThis.localStorage.setItem(this.$data.key, value);
		let localHeight = this.getLocalHeight();
		// @ts-ignore
		if (localHeight !== value) {
			globalThis.localStorage[this.$data.key] = value;
		}
	},
	isExistGMLocalHeight() {
		return typeof this.getGMLocalHeight() === "number";
	},
	/**
	 *
	 */
	getGMLocalHeight() {
		return PopsPanel.getValue<number>(this.$data.key);
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
		PopsPanel.setValue(this.$data.key, value);
	},
};
