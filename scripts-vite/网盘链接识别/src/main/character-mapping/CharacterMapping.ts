import { log, pops, utils } from "@/env";
import { UIInput } from "@/setting/components/ui-input";
import { UISwitch } from "@/setting/components/ui-switch";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@/setting/panel-config";
import { RuleView } from "@/utils/RuleView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

type CharacterMappingOption = {
	/** 唯一uuid */
	uuid: string;
	/** 启用状态 */
	enable: boolean;
	/** 规则名称 */
	name: string;
	/** 数据 */
	data: {
		/** 匹配网址 */
		url: string;
		/** 是否启用正则 */
		isRegExp: boolean;
		/** 正则标识符 */
		regExpFlag: string;
		/** 搜索字符 */
		searchValue: string;
		/** 替换字符 */
		replaceValue: string;
	};
};

export const CharacterMapping = {
	$key: {
		STORAGE_KEY: "character-mapping",
	},
	/**
	 * 获取模板数据
	 */
	getTemplateData(): CharacterMappingOption {
		return {
			uuid: utils.generateUUID(),
			enable: true,
			name: "",
			data: {
				url: "",
				isRegExp: true,
				regExpFlag: "ig",
				searchValue: "",
				replaceValue: "",
			},
		};
	},
	/**
	 * 显示视图
	 */
	show() {
		const that = this;
		let popsPanelContentUtils = pops.config.panelHandleContentUtils();

		/**
		 * 自定义存储api的配置
		 * @param uuid
		 */
		function generateStorageApi(data: any) {
			return {
				get(key: string, defaultValue: any) {
					return (data as any)[key] ?? defaultValue;
				},
				set(key: string, value: any) {
					(data as any)[key] = value;
				},
			};
		}
		let ruleView = new RuleView({
			title: "字符映射规则",
			data: () => {
				return this.getData();
			},
			getAddData: () => {
				return this.getTemplateData();
			},
			getDataItemName: (data) => {
				return data["name"];
			},
			updateData: (data) => {
				return this.updateData(data);
			},
			deleteData: (data) => {
				return this.deleteData(data);
			},
			getData: (data) => {
				let allData = this.getData();
				let findValue = allData.find((item) => item.uuid === data.uuid);
				return findValue ?? data;
			},
			itemControls: {
				enable: {
					enable: true,
					getEnable(data) {
						return data.enable;
					},
					callback: (data, enable) => {
						data.enable = enable;
						this.updateData(data);
					},
				},
				edit: {
					enable: true,
					getView: (data, isEdit) => {
						let $fragment = document.createDocumentFragment();
						if (!isEdit) {
							// @ts-ignore
							data = this.getTemplateData();
						}

						// 启用
						let enable_template = UISwitch("启用", "enable", true);
						Reflect.set(
							enable_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data)
						);
						let $enable =
							popsPanelContentUtils.createSectionContainerItem_switch(
								enable_template
							);

						// 规则名称
						let name_template = UIInput(
							"规则名称",
							"name",
							"",
							"",
							void 0,
							"必填"
						);
						Reflect.set(
							name_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data)
						);
						let $name =
							popsPanelContentUtils.createSectionContainerItem_input(
								name_template
							);

						// 匹配网址
						let url_template = UIInput(
							"匹配网址",
							"url",
							"",
							"",
							void 0,
							"必填，可正则"
						);
						Reflect.set(
							url_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $data_url =
							popsPanelContentUtils.createSectionContainerItem_input(
								url_template
							);

						// 是否启用正则
						let data_isRegExp_template = UISwitch(
							"是否启用正则",
							"isRegExp",
							true
						);
						Reflect.set(
							data_isRegExp_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $data_isRegExp =
							popsPanelContentUtils.createSectionContainerItem_switch(
								data_isRegExp_template
							);

						// 正则标识符
						let data_regExpFlag_template = UIInput(
							"正则标识符",
							"regExpFlag",
							"ig",
							"",
							void 0,
							"i:不区分大小写  g:全局"
						);
						Reflect.set(
							data_regExpFlag_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $data_regExpFlag =
							popsPanelContentUtils.createSectionContainerItem_input(
								data_regExpFlag_template
							);

						// 字符规则
						let data_searchValue_template = UIInput(
							"字符规则",
							"searchValue",
							"",
							"",
							void 0,
							"必填，可正则"
						);
						Reflect.set(
							data_searchValue_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $data_searchValue =
							popsPanelContentUtils.createSectionContainerItem_input(
								data_searchValue_template
							);

						// 映射为
						let data_replaceValue_template = UIInput(
							"映射为",
							"replaceValue",
							"",
							"",
							void 0,
							""
						);
						Reflect.set(
							data_replaceValue_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $data_replaceValue =
							popsPanelContentUtils.createSectionContainerItem_input(
								data_replaceValue_template
							);

						$fragment.appendChild($enable);
						$fragment.appendChild($name);
						$fragment.appendChild($data_url);
						$fragment.appendChild($data_isRegExp);
						$fragment.appendChild($data_regExpFlag);
						$fragment.appendChild($data_searchValue);
						$fragment.appendChild($data_replaceValue);
						return $fragment;
					},
					onsubmit: ($form, isEdit, editData) => {
						// 提交表单
						let $ulist_li = $form.querySelectorAll<HTMLLIElement>(
							".rule-form-ulist > li"
						);
						let data: CharacterMappingOption = this.getTemplateData();
						if (isEdit) {
							data.uuid = editData!.uuid;
						}
						$ulist_li.forEach(($li) => {
							let formConfig = Reflect.get($li, "__formConfig__");
							let attrs = Reflect.get(formConfig, "attributes");
							let storageApi = Reflect.get($li, PROPS_STORAGE_API);
							let key = Reflect.get(attrs, ATTRIBUTE_KEY);
							let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
							let value = storageApi.get(key, defaultValue);
							if (Reflect.has(data, key)) {
								Reflect.set(data, key, value);
							} else if (Reflect.has(data.data, key)) {
								Reflect.set(data.data, key, value);
							} else {
								log.error(`${key}不在数据中`);
							}
						});
						if (data.name.trim() === "") {
							Qmsg.error("规则名称不能为空");
							return {
								success: false,
								data: data,
							};
						}
						if (data.data.url.trim() === "") {
							Qmsg.error("匹配网址不能为空");
							return {
								success: false,
								data: data,
							};
						}
						if (data.data.searchValue.trim() === "") {
							Qmsg.error("字符规则不能为空");
							return {
								success: false,
								data: data,
							};
						}
						if (isEdit) {
							return {
								success: this.updateData(data),
								data: data,
							};
						} else {
							return {
								success: this.addData(data),
								data: data,
							};
						}
					},
				},
				delete: {
					enable: true,
					deleteCallBack: (data) => {
						return this.deleteData(data);
					},
				},
			},
			bottomControls: {
				filter: {
					enable: true,
					title: "过滤规则",
					option: [
						{
							name: "过滤【已启用】的规则",
							filterCallBack(data) {
								return data.enable;
							},
						},
						{
							name: "过滤【未启用】的规则",
							filterCallBack(data) {
								return !data.enable;
							},
						},
						{
							name: "过滤【在当前网址生效】的规则",
							filterCallBack(data) {
								return Boolean(window.location.href.match(data.data.url));
							},
						},
					],
				},
			},
		});
		ruleView.showView();
	},
	/**
	 * 根据url获取匹配的规则
	 *
	 * 注意：不会处理是否启用的情况
	 * @param url 需要匹配的url
	 */
	getUrlMatchedRule(url = window.location.href) {
		let allData = this.getData();
		return allData.filter((rule) => {
			return Boolean(url.match(rule.data.url));
		});
	},
	/**
	 * 获取格式化可用的规则
	 * @param url 匹配网址
	 */
	getMappingData(url: string = window.location.href): {
		searchValue: RegExp | string;
		replaceValue: string;
	}[] {
		let matchedRule = this.getUrlMatchedRule();
		return matchedRule
			.map((data) => {
				if (!data.enable) {
					// 得启用
					return;
				}
				if (data.data.isRegExp) {
					// 正则替换
					try {
						return {
							searchValue: new RegExp(
								data.data.searchValue,
								data.data.regExpFlag
							),
							replaceValue: data.data.replaceValue,
						};
					} catch (error) {
						log.error("字符映射规则转换发生错误：", error);
					}
				} else {
					// 普通字符
					return {
						searchValue: data.data.searchValue,
						replaceValue: data.data.replaceValue,
					};
				}
			})
			.filter((item) => item != null);
	},
	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<CharacterMappingOption[]>(this.$key.STORAGE_KEY, []);
	},
	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: CharacterMappingOption[]) {
		GM_setValue(this.$key.STORAGE_KEY, data);
	},
	/**
	 * 添加数据
	 * @param data
	 */
	addData(data: CharacterMappingOption) {
		let localData = this.getData();
		let findIndex = localData.findIndex((item) => item.uuid == data.uuid);
		if (findIndex === -1) {
			localData.push(data);
			GM_setValue(this.$key.STORAGE_KEY, localData);
			return true;
		} else {
			return false;
		}
	},
	/**
	 * 更新数据
	 * @param data
	 */
	updateData(data: CharacterMappingOption) {
		let localData = this.getData();
		let index = localData.findIndex((item) => item.uuid == data.uuid);
		let updateFlag = false;
		if (index !== -1) {
			updateFlag = true;
			localData[index] = data;
		}
		this.setData(localData);
		return updateFlag;
	},
	/**
	 * 删除数据
	 * @param data
	 */
	deleteData(data: CharacterMappingOption) {
		let localData = this.getData();
		let index = localData.findIndex((item) => item.uuid == data.uuid);
		let deleteFlag = false;
		if (index !== -1) {
			deleteFlag = true;
			localData.splice(index, 1);
		}
		this.setData(localData);
		return deleteFlag;
	},
	/**
	 * 清空数据
	 */
	clearData() {
		GM_deleteValue(this.$key.STORAGE_KEY);
	},
};
