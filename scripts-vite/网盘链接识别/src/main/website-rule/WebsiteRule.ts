import { RuleView } from "@/utils/RuleView";
import { WebsiteRuleStorage } from "./WebsiteRuleStorage";
import type { WebsiteRuleOption } from "./WebsiteRuleType";
import { log, pops, utils } from "@/env";
import { UISwitch } from "@/setting/components/ui-switch";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@/setting/panel-config";
import { UIInput } from "@/setting/components/ui-input";
import { UIButton } from "@/setting/components/ui-button";
import Qmsg from "qmsg";
import { NetDiskUI } from "../ui/NetDiskUI";
import { NetDiskPops } from "../pops/NetDiskPops";
import { PopsPanel } from "@/setting/panel";
import { NetDiskRule } from "../rule/NetDiskRule";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import {
	NetDiskRuleDataKEY,
	WebsiteRuleDataKey,
} from "../data/NetDiskRuleDataKey";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/formsType";
import panelSettingCSS from "./css/index.css?raw";
import panelIndexCSS from "./../view/global-setting/index.css?raw";

/** 深拷贝 */
function deepCopy<T>(obj: T): T {
	if (obj === null || typeof obj !== "object") {
		return obj;
	}
	let copy = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			// @ts-ignore
			copy[key] = deepCopy(obj[key]);
		}
	}
	// @ts-ignore
	return copy;
}
/** 用户自定义的网页规则 */
export const WebsiteRule = {
	$data: {
		STORAGE_KEY: "rule",
		/** 是否正在显示编辑视图 */
		isShowEditView: false,
	},
	init() {},
	/**
	 * 获取默认数据
	 */
	getTemplateData(): WebsiteRuleOption {
		return {
			uuid: utils.generateUUID(),
			enable: true,
			name: "",
			url: "",
			data: {},
		};
	},
	/**
	 * 获取规则视图配置
	 * @param originAddData 用于快速添加数据
	 */
	getRuleView(originAddData?: WebsiteRuleOption) {
		const that = this;
		let popsPanelContentUtils = pops.config.panelHandleContentUtils();
		let addData = originAddData ?? this.getTemplateData();
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
		/**
		 * 自定义存储api的配置
		 * @param uuid
		 */
		function generatePanelStorageApi(uuid: string) {
			return {
				get(key: string, defaultValue: any) {
					let currentRule = WebsiteRule.getRule(uuid) ?? addData;
					let panelValue = PopsPanel.getValue(key, defaultValue);
					return (
						(currentRule && Reflect.get(currentRule.data, key)) ?? panelValue
					);
				},
				set(key: string, value: any) {
					let currentRule = WebsiteRule.getRule(uuid) ?? addData;
					Reflect.set(currentRule.data, key, value);
					WebsiteRule.updateRule(currentRule);
				},
			};
		}
		let ruleView = new RuleView({
			title: "网站规则",
			data: () => {
				return this.getAllRule();
			},
			getAddData: () => {
				return addData;
			},
			getDataItemName: (data) => {
				return data["name"] ?? data.url;
			},
			updateData: (data) => {
				return this.updateRule(data);
			},
			deleteData: (data) => {
				that.$data.isShowEditView = false;
				return this.deleteRule(data.uuid);
			},
			getData: (data) => {
				let allData = this.getAllRule();
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
						this.updateRule(data);
					},
				},
				edit: {
					enable: true,
					getView: (data, isEdit) => {
						that.$data.isShowEditView = true;
						let $fragment = document.createDocumentFragment();
						if (!isEdit) {
							// @ts-ignore
							data = addData;
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
							generateStorageApi(data)
						);
						let $data_url =
							popsPanelContentUtils.createSectionContainerItem_input(
								url_template
							);

						// 覆盖设置
						let coverSetting_template = UIButton(
							"覆盖设置",
							"",
							"自定义",
							void 0,
							false,
							false,
							"primary",
							(event) => {
								utils.preventEvent(event);
								// 先获取总设置和所有规则的content配置
								let originPanelContentConfig =
									PopsPanel.getPanelContentConfig().concat(
										NetDiskRule.getRulePanelContent()
									);
								// 新配置，原始直接覆盖是浅复制
								// let newPanelContentConfig = utils.assign(
								// 	[],
								// 	originPanelContentConfig,
								// 	true
								// ) as PopsPanelContentConfig[];
								let newPanelContentConfig = deepCopy(originPanelContentConfig);
								// console.log(newPanelContentConfig);
								// 迭代遍历form配置，进行updateStorageApi
								/** 迭代遍历 */
								function iterativeTraversal(
									configList: PopsPanelContentConfig["forms"]
								) {
									configList.forEach((configItem) => {
										if (
											typeof configItem?.props === "object" &&
											Reflect.has(configItem.props, PROPS_STORAGE_API)
										) {
											// 替换存储配置
											let panelStorageApi = generatePanelStorageApi(data.uuid);
											Reflect.set(
												configItem.props,
												PROPS_STORAGE_API,
												panelStorageApi
											);
										}
										let childForms = (configItem as any).forms;
										if (childForms && Array.isArray(childForms)) {
											/* 存在子配置forms */
											iterativeTraversal(childForms);
										}
									});
								}
								for (
									let index = 0;
									index < newPanelContentConfig.length;
									index++
								) {
									let leftContentConfigItem = newPanelContentConfig[index];
									if (!leftContentConfigItem.forms) {
										/* 不存在forms */
										continue;
									}
									if (
										typeof leftContentConfigItem.afterRender === "function" &&
										leftContentConfigItem?.id
											.toString()
											.startsWith("netdisk-panel-config-")
									) {
										// 覆盖左侧的afterRender
										leftContentConfigItem.afterRender = (__data) => {
											let ruleKey = __data.asideConfig!.attributes!["data-key"];
											let enableKey =
												NetDiskRuleDataKEY.function.enable(ruleKey);
											__data.$asideLiElement.setAttribute(
												"data-function-enable",
												WebsiteRule.getRuleDataValue(data.uuid, enableKey, true)
											);
										};
									}
									if (
										typeof leftContentConfigItem.attributes === "object" &&
										leftContentConfigItem.forms != null &&
										ATTRIBUTE_KEY in leftContentConfigItem.attributes
									) {
										/** 规则键 */
										let ruleKey =
											leftContentConfigItem.attributes[ATTRIBUTE_KEY];
										let custom_accessCode_enable_template = UISwitch(
											"启用",
											WebsiteRuleDataKey.features.customAccessCodeEnable(
												ruleKey
											),
											false,
											void 0,
											"启用后将允许执行下面的功能",
											void 0
										);
										// 覆盖存储api
										Reflect.set(
											custom_accessCode_enable_template.props!,
											PROPS_STORAGE_API,
											generatePanelStorageApi(data.uuid)
										);
										let custom_accessCode_template = UIInput(
											"自定义访问码",
											WebsiteRuleDataKey.features.customAccessCode(ruleKey),
											"",
											"让获取的到的链接的访问码都为自定义的访问码",
											void 0,
											"请输入自定义访问码",
											false,
											false
										);
										// 覆盖存储api
										Reflect.set(
											custom_accessCode_template.props!,
											PROPS_STORAGE_API,
											generatePanelStorageApi(data.uuid)
										);
										let custom_accessCode_container: PopsPanelFormsDetails = {
											text: "额外功能",
											type: "forms",
											forms: [
												custom_accessCode_enable_template,
												custom_accessCode_template,
											],
										};
										if (leftContentConfigItem.forms.length) {
											// 添加到第一个后面
											leftContentConfigItem.forms.splice(
												1,
												0,
												custom_accessCode_container
											);
										} else {
											leftContentConfigItem.forms.push(
												custom_accessCode_container
											);
										}
									}
									// 循环左侧容器内存储的右侧配置项
									let rightContentConfigList = leftContentConfigItem.forms;
									if (
										rightContentConfigList &&
										Array.isArray(rightContentConfigList)
									) {
										iterativeTraversal(rightContentConfigList);
									}
								}

								// 然后显示出来

								let $panel = NetDiskPops.panel(
									{
										title: {
											text: `覆盖设置`,
											position: "center",
										},
										content: newPanelContentConfig,
										btn: {
											close: {
												enable: true,
												callback(event) {
													event.close();
												},
											},
										},
										mask: {
											clickCallBack(originalRun) {
												originalRun();
											},
										},
										only: false,
										class: "whitesevPopSetting",
										style: /*css*/ `
										${panelIndexCSS}
										
										${panelSettingCSS}


										/* 隐藏顶部的图标 */
										.netdisk-custom-rule-edit,
										.netdisk-custom-rule-delete,
										/* 隐藏快捷键设置菜单，因为这个是全局唯一的 */
										.netdisk-panel-forms-shortcut-keys-deepMenu{
											display: none !important;
										}
										`,
									},
									NetDiskUI.popsStyle.settingView
								);
							},
							void 0
						);
						let $coverSetting_template =
							popsPanelContentUtils.createSectionContainerItem_button(
								coverSetting_template
							);

						$fragment.appendChild($enable);
						$fragment.appendChild($name);
						$fragment.appendChild($data_url);
						$fragment.appendChild($coverSetting_template);
						return $fragment;
					},
					onsubmit: ($form, isEdit, editData) => {
						// 提交表单
						let $ulist_li = $form.querySelectorAll<HTMLLIElement>(
							".rule-form-ulist > li"
						);
						let data = addData;
						if (isEdit) {
							data.uuid = editData!.uuid;
						}
						$ulist_li.forEach(($li) => {
							let formConfig = Reflect.get($li, "__formConfig__");
							let attrs = Reflect.get(formConfig, "attributes");
							let storageApi = Reflect.get($li, PROPS_STORAGE_API);
							let key = Reflect.get(attrs, ATTRIBUTE_KEY);
							if (key == null) {
								return;
							}
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
						if (data.name == null || data.name.trim() === "") {
							Qmsg.error("规则名称不能为空");
							return {
								success: false,
								data: data,
							};
						}
						if (data.url.trim() === "") {
							Qmsg.error("匹配网址不能为空");
							return {
								success: false,
								data: data,
							};
						}
						if (isEdit) {
							return {
								success: this.updateRule(data),
								data: data,
							};
						} else {
							return {
								success: this.addRule(data),
								data: data,
							};
						}
					},
				},
				delete: {
					enable: true,
					deleteCallBack: (data) => {
						return this.deleteRule(data.uuid);
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
								let matchRegExp = new RegExp(data.url, "ig");
								return Boolean(window.location.href.match(matchRegExp));
							},
						},
					],
				},
			},
		});
		return ruleView;
	},
	/**
	 * 显示视图
	 */
	show() {
		let ruleView = this.getRuleView();
		ruleView.showView();
	},
	/**
	 * 添加单个规则
	 */
	addRule(rule: WebsiteRuleOption) {
		let allRule = this.getAllRule();
		allRule.push(rule);
		WebsiteRuleStorage.set(this.$data.STORAGE_KEY, allRule);
		return true;
	},
	/**
	 * 根据uuid获取单个规则的数据
	 * @param uuid
	 */
	getRule(uuid: string) {
		return this.getAllRule().find((rule) => rule.uuid === uuid);
	},
	/**
	 * 根据uuid获取单个规则的存储数据
	 * @param uuid
	 */
	getRuleData(uuid: string | WebsiteRuleOption) {
		if (typeof uuid === "string") {
			return this.getRule(uuid)?.data;
		} else {
			return uuid.data;
		}
	},
	/**
	 * 根据uuid获取单个规则的存储数据的值
	 * @param uuid
	 * @param key 键
	 * @param defaultValue 默认值
	 */
	getRuleDataValue<T>(uuid: string, key: string, defaultValue: T) {
		let ruleData = this.getRuleData(uuid);
		return (ruleData && Reflect.get(ruleData, key)) ?? defaultValue;
	},
	/**
	 * 更新单个规则
	 * @param rule
	 */
	updateRule(rule: WebsiteRuleOption) {
		let allRule = this.getAllRule();
		let flag = false;
		for (let index = 0; index < allRule.length; index++) {
			const localRule = allRule[index];
			if (localRule.uuid === rule.uuid) {
				// uuid相同，确定为同一个规则
				allRule[index] = rule;
				flag = true;
				break;
			}
		}
		WebsiteRuleStorage.set(this.$data.STORAGE_KEY, allRule);
		return flag;
	},
	/**
	 * 更新单个规则的值
	 */
	updateRuleValue(uuid: string, key: string, value: any) {
		let allRule = this.getAllRule();
		for (let index = 0; index < allRule.length; index++) {
			const localRule = allRule[index];
			if (localRule.uuid === uuid) {
				// uuid相同，确定为同一个规则
				Reflect.set(localRule, key, value);
				break;
			}
		}
		WebsiteRuleStorage.set(this.$data.STORAGE_KEY, allRule);
	},
	/**
	 * 删除单个规则
	 * @param uuid 整个规则或者规则的uuid
	 */
	deleteRule(uuid: string | WebsiteRuleOption) {
		let allRule = this.getAllRule();
		let flag = false;
		let needDeleteRuleUUID = typeof uuid === "string" ? uuid : uuid.uuid;
		for (let index = 0; index < allRule.length; index++) {
			const localRule = allRule[index];
			if (localRule.uuid === needDeleteRuleUUID) {
				allRule.splice(index, 1);
				flag = true;
				break;
			}
		}
		WebsiteRuleStorage.set(this.$data.STORAGE_KEY, allRule);
		return flag;
	},
	/**
	 * 清空所有规则
	 */
	deleteAllRule() {
		WebsiteRuleStorage.delete(this.$data.STORAGE_KEY);
	},
	/**
	 * 获取所有规则
	 */
	getAllRule(): WebsiteRuleOption[] {
		let allRule = WebsiteRuleStorage.get(
			this.$data.STORAGE_KEY,
			[]
		) as WebsiteRuleOption[];
		return allRule;
	},
	/**
	 * 根据url获取匹配的规则
	 *
	 * 注意：不会处理是否启用的情况
	 * @param url 需要匹配的url
	 */
	getUrlMatchedRule(url: string = window.location.href) {
		let allRule = this.getAllRule();
		return allRule.filter((rule) => {
			let matchRegExp = new RegExp(rule.url, "ig");
			if (url.match(matchRegExp)) {
				return true;
			} else {
				return false;
			}
		});
	},
};
