import Utils from "@whitesev/utils";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { PROPS_STORAGE_API } from "./panel-config";

export type PanelComponentsType =
	| "input"
	| "select-multiple"
	| "select"
	| "slider"
	| "switch"
	| "textarea";

export type PanelComponentsStorageApiValue = {
	/**
	 * 获取值时自动调用
	 * @param key 键名
	 * @param defaultValue 默认值
	 */
	get<T>(key: string, defaultValue: T): T;
	/**
	 * 存储值时自动调用
	 * @param key 键名
	 * @param value 值
	 */
	set(key: string, value: any): void;
};
export type PanelComponentsConfig = {
	props: {
		[key: string]: any;
	};
};
export const PanelComponents = {
	$data: {
		__storeApiFn: null as null | UtilsDictionary<
			PanelComponentsType,
			PanelComponentsStorageApiValue
		>,
		get storeApiValue() {
			if (!this.__storeApiFn) {
				this.__storeApiFn = new Utils.Dictionary();
			}
			return this.__storeApiFn;
		},
	},
	/**
	 * 获取自定义的存储接口
	 * @param type 组件类型
	 */
	getStorageApi(type: PanelComponentsType) {
		if (!this.hasStorageApi(type)) {
			return;
		}
		return this.$data.storeApiValue.get(type);
	},
	/**
	 * 判断是否存在自定义的存储接口
	 * @param type 组件类型
	 */
	hasStorageApi(type: PanelComponentsType) {
		return this.$data.storeApiValue.has(type);
	},
	/**
	 * 设置自定义的存储接口
	 * @param type 组件类型
	 * @param storageApiValue 存储接口
	 */
	setStorageApi(
		type: PanelComponentsType,
		storageApiValue: PanelComponentsStorageApiValue
	) {
		this.$data.storeApiValue.set(type, storageApiValue);
	},
	/**
	 * 初始化组件的存储接口属性
	 *
	 * @param type 组件类型
	 * @param config 组件配置，必须包含prop属性
	 * @param storageApiValue 存储接口
	 */
	initComponentsStorageApi(
		type: PanelComponentsType,
		config: PanelComponentsConfig,
		storageApiValue: PanelComponentsStorageApiValue
	) {
		let propsStorageApi: PanelComponentsStorageApiValue;
		if (this.hasStorageApi(type)) {
			propsStorageApi = this.getStorageApi(type)!;
		} else {
			propsStorageApi = storageApiValue;
		}
		this.setComponentsStorageApiProperty(config, propsStorageApi);
	},
	/**
	 * 设置组件的存储接口属性
	 * @param config 组件配置，必须包含prop属性
	 * @param storageApiValue 存储接口
	 */
	setComponentsStorageApiProperty(
		config: PanelComponentsConfig,
		storageApiValue: PanelComponentsStorageApiValue
	) {
		Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
	},
};
