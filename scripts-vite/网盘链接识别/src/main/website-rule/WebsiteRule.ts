import { DOMUtils, httpx, log, pops, SCRIPT_NAME, utils } from "@/env";
import { UISwitch } from "@components/setting/components/ui-switch";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@components/setting/panel-config";
import { UIInput } from "@components/setting/components/ui-input";
import { UIButton } from "@components/setting/components/ui-button";
import Qmsg from "qmsg";
import { NetDiskUI } from "../ui/NetDiskUI";
import { NetDiskPops } from "../pops/NetDiskPops";
import { Panel } from "@components/setting/panel";
import { NetDiskRule } from "../rule/NetDiskRule";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import {
	NetDiskRuleDataKEY,
	WebsiteRuleDataKey,
} from "../data/NetDiskRuleDataKey";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/formsType";
import panelSettingCSS from "./css/index.css?raw";
import panelIndexCSS from "./../view/global-setting/index.css?raw";
import {
	type RulePanelContentOption,
	type RuleSubscribeOption,
} from "@components/utils/RulePanelView";
import { WebsiteSubscribeRule } from "./WebsiteSubscribeRule";
import { PanelUISize } from "@components/setting/panel-ui-size";
import { StorageUtils } from "@components/utils/StorageUtils";
import { PanelContent } from "@components/setting/panel-content";

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

/** 网站规则的存储操作Api */
const WebsiteRuleStorageApi = new StorageUtils("websiteRule");

/** 网站规则 */
export const WebsiteRule = {
	$data: {
		STORAGE_KEY: "rule",
		EXPORT_CONFIG_KEY: "rule-export-config",
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
			subscribeUUID: null,
			enable: true,
			name: "",
			url: "",
			data: {},
		};
	},
	/**
	 * 获取规则面板视图的配置
	 * @param quickAddData 用于快速添加数据
	 */
	getRulePanelViewOption(quickAddData?: WebsiteRuleOption) {
		const that = this;
		let popsPanelContentUtils = pops.config.panelHandleContentUtils();
		let addData = () => {
			return quickAddData ?? this.getTemplateData();
		};
		/**
		 * 自定义存储api的配置
		 * @param uuid
		 */
		let generateStorageApi = function (data: any) {
			return {
				get(key: string, defaultValue: any) {
					return data[key] ?? defaultValue;
				},
				set(key: string, value: any) {
					data[key] = value;
				},
			};
		};

		let rulePanelViewOption: RulePanelContentOption<WebsiteRuleOption> = {
			id: "website-rule",
			title: "网站规则",
			subscribe: {
				enable: true,
				data() {
					return WebsiteSubscribeRule.getAllSubscribe();
				},
				getData: (data) => {
					let findValue = WebsiteSubscribeRule.getSubscribe(data.uuid);
					return findValue ?? data;
				},
				getDataItemName(subscribeOption) {
					return /*html*/ `
						<style>
							.subscribe-rule-title-info-wrapper{
								display: flex;
								flex-direction: column;
								gap: 4px;
							}
							.subscribe-rule-title-info-wrapper .rule-name-text{
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-weight: 600;
								font-size: 16px;
								line-height: 24px;
							}
							.subscribe-rule-title-info-wrapper .subscribe-rule-small-span-text{
								font-size: 14px;
								line-height: 16px;
								white-space: pre-wrap;
							}
						</style>
						<div class="subscribe-rule-title-info-wrapper">
							<div class="rule-name-text" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 16px;font-weight: 600;line-height: 24px;">${
								subscribeOption.data.title ||
								subscribeOption.subscribeData.title ||
								subscribeOption.data.url
							}</div>
								<div class="subscribe-rule-small-span-text">${
									subscribeOption.subscribeData.ruleData.length
								} 条规则，更新于：${utils.formatTime(
						subscribeOption.data.latestUpdateTime,
						"yyyy年MM月dd日 HH:mm:ss"
					)}${
						typeof subscribeOption.data.updateFailedTime === "number"
							? `，<span style="color: red;">更新失败于：${utils.formatTime(
									subscribeOption.data.updateFailedTime,
									"yyyy年MM月dd日 HH:mm:ss"
							  )}</span>`
							: ``
					}</div>
								${
									subscribeOption.subscribeData.homePage
										? `<a href="${subscribeOption.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>`
										: ""
								}
								<a href="${
									subscribeOption.data.url
								}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`;
				},
				addData: (data) => {
					return WebsiteSubscribeRule.addSubscribe(data);
				},
				updateData: (data) => {
					return WebsiteSubscribeRule.updateSubscribe(data);
				},
				deleteData: (data) => {
					return WebsiteSubscribeRule.deleteSubscribe(data);
				},
				btnControls: {
					add: {
						enable: true,
					},
					filter: {
						enable: true,
						title: "过滤订阅",
						option: [
							{
								name: "过滤【已启用】的订阅",
								filterCallBack(data) {
									return data.data.enable;
								},
							},
							{
								name: "过滤【未启用】的订阅",
								filterCallBack(data) {
									return !data.data.enable;
								},
							},
						],
					},
					clearAll: {
						enable: true,
						callback: () => {
							WebsiteSubscribeRule.deleteAllSubscribe();
						},
					},
					ruleEnable: {
						enable: true,
						getEnable(data) {
							return data.data.enable;
						},
						async callback(data, enable) {
							data.data.enable = enable;
							WebsiteSubscribeRule.updateSubscribe(data);
						},
					},
					ruleEdit: {
						enable: true,
						callback: (option) => {
							let subscribeUUID = option.ruleData.uuid;
							option.enterDeepMenu<WebsiteRuleOption>({
								headerTitle:
									// 自己重新命名的
									option.ruleData.data.title ||
									// 订阅的规则自带的
									option.ruleData.subscribeData.title ||
									// 订阅的链接
									option.ruleData.data.url,
								data() {
									let currentData =
										WebsiteSubscribeRule.getSubscribe(subscribeUUID);
									return (
										currentData?.subscribeData?.ruleData ??
										option.ruleData.subscribeData.ruleData
									);
								},
								getData(data) {
									let currentData = WebsiteSubscribeRule.getSubscribeRule(
										subscribeUUID,
										data.uuid
									);
									return currentData ?? data;
								},
								getDataItemName(data) {
									return data.name ?? data.url;
								},
								addData(data) {
									// TODO
									return true;
								},
								updateData(data) {
									return WebsiteSubscribeRule.updateSubscribeRule(
										subscribeUUID,
										data
									);
								},
								deleteData(data) {
									return WebsiteSubscribeRule.deleteSubscribeRule(
										subscribeUUID,
										data
									);
								},
								btnControls: {
									filter: {
										enable: true,
										option: [
											{
												name: "过滤【已启用】的规则",
												filterCallBack(data) {
													return data.data.enable;
												},
											},
											{
												name: "过滤【未启用】的规则",
												filterCallBack(data) {
													return !data.data.enable;
												},
											},
										],
									},
									clearAll: {
										enable: true,
										callback: () => {
											WebsiteSubscribeRule.clearSubscribe(subscribeUUID);
										},
									},
									ruleEnable: {
										enable: true,
										getEnable(data) {
											return data.enable;
										},
										callback(data, enable) {
											data.data.enable = enable;
											WebsiteSubscribeRule.updateSubscribeRule(
												subscribeUUID,
												data
											);
										},
									},
									ruleEdit: {
										enable: true,
										getView: (data, isEdit) => {
											that.$data.isShowEditView = true;
											if (!isEdit) {
												data = addData();
											}
											/**
											 * 自定义存储api的配置
											 * @param uuid
											 */
											function generateSubscribeRuleStorageApi(uuid: string) {
												return {
													get(key: string, defaultValue: any) {
														let currentRule =
															WebsiteSubscribeRule.getSubscribeRule(
																subscribeUUID,
																uuid
															)!;
														return (
															Reflect.get(currentRule.data, key) ?? defaultValue
														);
													},
													set(key: string, value: any) {
														let currentRule =
															WebsiteSubscribeRule.getSubscribeRule(
																subscribeUUID,
																uuid
															)!;
														Reflect.set(currentRule.data, key, value);
														WebsiteSubscribeRule.updateSubscribeRule(
															subscribeUUID,
															currentRule
														);
													},
												};
											}
											let $fragment = document.createDocumentFragment();

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
													let originPanelContentConfig = [
														...PanelContent.getConfig(0),
														...NetDiskRule.getRulePanelContent(),
													];
													// 新配置，原始直接覆盖是浅复制
													// let newPanelContentConfig = utils.assign(
													// 	[],
													// 	originPanelContentConfig,
													// 	true
													// ) as PopsPanelContentConfig[];
													let newPanelContentConfig = deepCopy(
														originPanelContentConfig
													);
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
																let panelStorageApi =
																	generateSubscribeRuleStorageApi(data.uuid);
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
														let leftContentConfigItem =
															newPanelContentConfig[index];
														if (!leftContentConfigItem.forms) {
															/* 不存在forms */
															continue;
														}
														if (
															typeof leftContentConfigItem.afterRender ===
																"function" &&
															leftContentConfigItem?.id
																.toString()
																.startsWith("netdisk-panel-config-")
														) {
															// 覆盖左侧的afterRender
															leftContentConfigItem.afterRender = (__data) => {
																let ruleKey =
																	__data.asideConfig!.attributes!["data-key"];
																let enableKey =
																	NetDiskRuleDataKEY.function.enable(ruleKey);
																let subscribeRule =
																	WebsiteSubscribeRule.getSubscribeRule(
																		subscribeUUID,
																		data.uuid
																	)!;
																__data.$asideLiElement.setAttribute(
																	"data-function-enable",
																	subscribeRule.data[enableKey] ?? true
																);
															};
														}
														if (
															typeof leftContentConfigItem.attributes ===
																"object" &&
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
																generateSubscribeRuleStorageApi(data.uuid)
															);
															let custom_accessCode_template = UIInput(
																"自定义访问码",
																WebsiteRuleDataKey.features.customAccessCode(
																	ruleKey
																),
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
																generateSubscribeRuleStorageApi(data.uuid)
															);
															let custom_accessCode_container: PopsPanelFormsDetails =
																{
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
														let rightContentConfigList =
															leftContentConfigItem.forms;
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
																}`,
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
											let data: WebsiteRuleOption = addData();
											if (isEdit) {
												data.uuid = editData!.uuid;
												let allData = this.getAllRule();
												let findValue = allData.find(
													(item) => item.uuid === data.uuid
												);
												if (findValue) {
													data.data = findValue.data;
												}
											}
											$ulist_li.forEach(($li) => {
												let formConfig = Reflect.get($li, "__formConfig__");
												let attrs = Reflect.get(formConfig, "attributes");
												let storageApi = Reflect.get($li, PROPS_STORAGE_API);
												let key = Reflect.get(attrs, ATTRIBUTE_KEY);
												if (key == null) {
													return;
												}
												let defaultValue = Reflect.get(
													attrs,
													ATTRIBUTE_DEFAULT_VALUE
												);
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
									ruleDelete: {
										enable: true,
										deleteCallBack(data) {
											return WebsiteSubscribeRule.deleteSubscribeRule(
												subscribeUUID,
												data
											);
										},
									},
								},
							});
							return false;
						},
					},
					ruleDelete: {
						enable: true,
						deleteCallBack: (data) => {
							return WebsiteSubscribeRule.deleteSubscribe(data);
						},
					},
					import: {
						enable: true,
						callback(updateView) {
							WebsiteSubscribeRule.importSubscribe(() => {
								updateView();
							});
						},
					},
					export: {
						enable: true,
						callback() {
							WebsiteSubscribeRule.exportSubscribe(
								SCRIPT_NAME + "-网站规则-订阅.json"
							);
						},
					},
				},
				getSubscribeInfo:
					WebsiteSubscribeRule.getSubscribeInfo.bind(WebsiteSubscribeRule),
			},
			ruleOption: {
				btnControls: {
					add: {
						enable: true,
					},
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
					clearAll: {
						enable: true,
						callback: () => {
							that.deleteAllRule();
						},
					},
					import: {
						enable: true,
						callback: (updateView) => {
							that.importRule(() => {
								updateView();
							});
						},
					},
					export: {
						enable: true,
						callback: () => {
							that.exportRule(
								SCRIPT_NAME + "-网站规则.json",
								SCRIPT_NAME + "-网站规则-订阅模式.json"
							);
						},
					},
					ruleEnable: {
						enable: true,
						getEnable(data) {
							return data.enable;
						},
						callback: (data, enable) => {
							data.enable = enable;
							that.updateRule(data);
						},
					},
					ruleEdit: {
						enable: true,
						getView: (data, isEdit) => {
							that.$data.isShowEditView = true;
							if (!isEdit) {
								data = addData();
							}
							/**
							 * 自定义存储api的配置
							 * @param uuid
							 */
							function generatePanelStorageApi(uuid: string) {
								return {
									get(key: string, defaultValue: any) {
										let currentRule = that.getRule(uuid) ?? addData();
										let panelValue = Panel.getValue(key, defaultValue);
										return (
											(currentRule && Reflect.get(currentRule.data, key)) ??
											panelValue
										);
									},
									set(key: string, value: any) {
										let currentRule = that.getRule(uuid) ?? addData();
										Reflect.set(currentRule.data, key, value);
										that.updateRule(currentRule);
									},
								};
							}
							let $fragment = document.createDocumentFragment();
							if (!isEdit) {
								// @ts-ignore
								data = addData();
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
									let originPanelContentConfig = [
										...PanelContent.getConfig(0),
										...NetDiskRule.getRulePanelContent(),
									];
									// 新配置，原始直接覆盖是浅复制
									// let newPanelContentConfig = utils.assign(
									// 	[],
									// 	originPanelContentConfig,
									// 	true
									// ) as PopsPanelContentConfig[];
									let newPanelContentConfig = deepCopy(
										originPanelContentConfig
									);
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
												let panelStorageApi = generatePanelStorageApi(
													data.uuid
												);
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
												let ruleKey =
													__data.asideConfig!.attributes!["data-key"];
												let enableKey =
													NetDiskRuleDataKEY.function.enable(ruleKey);
												__data.$asideLiElement.setAttribute(
													"data-function-enable",
													isEdit
														? WebsiteRule.getRuleDataValue(
																data.uuid,
																enableKey,
																true
														  )
														: data.data[enableKey] ?? true
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
							let data: WebsiteRuleOption = addData();
							if (isEdit) {
								data.uuid = editData!.uuid;
								let allData = this.getAllRule();
								let findValue = allData.find((item) => item.uuid === data.uuid);
								if (findValue) {
									data.data = findValue.data;
								}
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
					ruleDelete: {
						enable: true,
						deleteCallBack: (data) => {
							return that.deleteRule(data.uuid);
						},
					},
				},
				data: () => {
					return this.getAllRule();
				},
				getAddData: () => {
					return addData();
				},
				getData: (data) => {
					let allData = this.getAllRule();
					let findValue = allData.find((item) => item.uuid === data.uuid);
					return findValue ?? data;
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
			},
		};
		return rulePanelViewOption;
	},
	/**
	 * 添加单个规则
	 */
	addRule(rule: WebsiteRuleOption) {
		let allRule = this.getAllRule();
		allRule.push(rule);
		WebsiteRuleStorageApi.set(this.$data.STORAGE_KEY, allRule);
		return true;
	},
	/**
	 * 根据uuid获取单个规则的数据
	 * @param uuid
	 */
	getRule(uuid: string) {
		let findValue = this.getAllRule().find((rule) => rule.uuid === uuid);
		if (findValue) {
			return findValue;
		}
		// 未找到符合的
		// 看看是否是来自订阅的规则
		let findSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule().find(
			(rule) => {
				return rule.uuid === uuid;
			}
		);
		return findSubscribeRule;
	},
	/**
	 * 根据uuid获取单个规则的存储数据
	 * @param uuid
	 */
	getRuleData(uuid: string | WebsiteRuleOption) {
		if (typeof uuid === "string") {
			return this.getRule(uuid)!.data;
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
		if (flag) {
			WebsiteRuleStorageApi.set(this.$data.STORAGE_KEY, allRule);
		} else {
			// 未找到符合的
			// 看看是否是来自订阅的
			let findSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule().find(
				(it) => {
					return it.uuid === rule.uuid;
				}
			);
			if (findSubscribeRule) {
				flag = WebsiteSubscribeRule.updateSubscribeRule(
					rule.subscribeUUID!,
					rule
				);
			}
		}
		return flag;
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
		if (flag) {
			WebsiteRuleStorageApi.set(this.$data.STORAGE_KEY, allRule);
		} else {
			let findSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule().find(
				(it) => {
					return it.uuid === needDeleteRuleUUID;
				}
			);
			if (findSubscribeRule) {
				flag = WebsiteSubscribeRule.deleteSubscribeRule(
					findSubscribeRule.subscribeUUID!,
					findSubscribeRule
				);
			}
		}
		return flag;
	},
	/**
	 * 清空所有规则
	 */
	deleteAllRule() {
		WebsiteRuleStorageApi.delete(this.$data.STORAGE_KEY);
	},
	/**
	 * 获取所有规则
	 */
	getAllRule(): WebsiteRuleOption[] {
		let allRule = WebsiteRuleStorageApi.get<WebsiteRuleOption[]>(
			this.$data.STORAGE_KEY,
			[]
		);
		return allRule;
	},
	/**
	 * 根据url获取匹配的规则
	 * @param [filterUnEnable=true] 是否过滤未启用的规则
	 * @param [url=window.location.href] 需要匹配的url
	 */
	getUrlMatchedRule(filterUnEnable = true, url: string = window.location.href) {
		let allRule = this.getAllRule();
		let allSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule(true);
		allRule = allRule.concat(allSubscribeRule);
		let matchedRule = allRule.filter((rule) => {
			if (filterUnEnable && !rule.enable) {
				return false;
			}
			let matchRegExp = new RegExp(rule.url, "ig");
			if (url.match(matchRegExp)) {
				return true;
			} else {
				return false;
			}
		});

		return matchedRule;
	},
	/**
	 * 导出规则
	 */
	exportRule(
		fileName = "rule.json",
		subscribeFileName = "rule-subscribe.json"
	) {
		let $alert = NetDiskPops.alert({
			title: {
				text: "请选择导出方式",
				position: "center",
			},
			content: {
				text: /*html*/ `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `,
				html: true,
			},
			btn: {
				ok: { enable: false },
				close: {
					enable: true,
					callback(details, event) {
						details.close();
					},
				},
			},
			mask: { enable: true },
			drag: true,
			width: PanelUISize.info.width,
			height: PanelUISize.info.height,
			style: /*css*/ `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `,
		});
		/** 仅导出规则 */
		let $onlyExportRuleList = $alert.$shadowRoot.querySelector<HTMLElement>(
			".btn-control[data-mode='only-export-rule-list']"
		)!;
		/** 导出为订阅规则 */
		let $exportToSubscribe = $alert.$shadowRoot.querySelector<HTMLElement>(
			".btn-control[data-mode='export-to-subscribe']"
		)!;
		/**
		 * 导出文件
		 */
		let exportFile = (__fileName__: string, __data__: any) => {
			let blob = new Blob([JSON.stringify(__data__, null, 4)]);
			let blobUrl = window.URL.createObjectURL(blob);
			let $a = document.createElement("a");
			$a.href = blobUrl;
			$a.download = __fileName__;
			$a.click();
			setTimeout(() => {
				window.URL.revokeObjectURL(blobUrl);
			}, 1500);
		};
		// 仅导出规则
		DOMUtils.on($onlyExportRuleList, "click", (event) => {
			utils.preventEvent(event);
			try {
				let allRule = this.getAllRule();
				if (allRule.length === 0) {
					Qmsg.warning("规则为空，无需导出");
					return;
				}
				exportFile(fileName, allRule);
				$alert.close();
			} catch (error: any) {
				Qmsg.error(error.toString(), { consoleLogContent: true });
			}
		});
		// 导出为订阅规则
		DOMUtils.on($exportToSubscribe, "click", (event) => {
			utils.preventEvent(event);
			const that = this;
			$alert.close();
			try {
				let allRule = this.getAllRule();
				if (allRule.length === 0) {
					Qmsg.warning("规则为空，无需导出");
					return;
				}
				let popsPanelContentUtils = pops.config.panelHandleContentUtils();
				/**
				 * 自定义存储api的配置
				 * @param uuid
				 */
				let generateStorageApi = function (data: any) {
					return {
						get(key: string, defaultValue: any) {
							return data[key] ?? defaultValue;
						},
						set(key: string, value: any) {
							data[key] = value;
							WebsiteRuleStorageApi.set(that.$data.EXPORT_CONFIG_KEY, data);
						},
					};
				};
				/**
				 * 按下导出的按钮的回调
				 */
				let exportCallBack = () => {
					let configData = WebsiteRuleStorageApi.get<
						Partial<RuleSubscribeOption<WebsiteRuleOption>["subscribeData"]>
					>(this.$data.EXPORT_CONFIG_KEY, {});
					if (configData?.title === "" || configData.title == null) {
						Qmsg.error("订阅标题不能为空");
						return;
					}
					if (configData.version == null) {
						Qmsg.error("版本号不能为空");
						return;
					} else {
						configData.version = Number(configData.version);
					}
					if (configData.homePage == null) {
						configData.homePage = void 0;
					}
					configData.lastModified = Date.now();
					configData.ruleData = this.getAllRule();

					exportFile(subscribeFileName, configData);
					$exportSubscribeDialog.close();
				};
				let $exportSubscribeDialog = NetDiskPops.alert({
					title: {
						text: "请填写导出配置",
						position: "center",
					},
					content: {
						text: /*html*/ `
							
						`,
						html: true,
					},
					btn: {
						ok: {
							enable: true,
							text: "导出",
							callback(details, event) {
								exportCallBack();
							},
						},
						close: {
							enable: true,
							callback(details, event) {
								details.close();
							},
						},
					},
					mask: {
						enable: true,
					},
					drag: true,
					width: PanelUISize.info.width,
					height: PanelUISize.info.height,
					style: /*css*/ `
						${pops.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`,
				});
				let $content =
					$exportSubscribeDialog.$shadowRoot.querySelector<HTMLElement>(
						".pops-alert-content"
					)!;
				let configData = WebsiteRuleStorageApi.get<
					Partial<RuleSubscribeOption<WebsiteRuleOption>["subscribeData"]>
				>(this.$data.EXPORT_CONFIG_KEY, {});
				// 订阅名称
				let title_template = UIInput("订阅标题", "title", "", "", void 0, "");
				Reflect.set(
					title_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(configData)
				);
				let $title =
					popsPanelContentUtils.createSectionContainerItem_input(
						title_template
					);

				// 版本号
				let version_template = UIInput(
					"版本号",
					"version",
					"",
					"",
					void 0,
					"",
					false
				);
				Reflect.set(
					version_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(configData)
				);
				let $version =
					popsPanelContentUtils.createSectionContainerItem_input(
						version_template
					);

				// 主页地址
				let homePage_template = UIInput(
					"主页地址",
					"homePage",
					"",
					"",
					void 0,
					"选填"
				);
				Reflect.set(
					homePage_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(configData)
				);
				let $homePage =
					popsPanelContentUtils.createSectionContainerItem_input(
						homePage_template
					);

				DOMUtils.append($content, $title);
				DOMUtils.append($content, $version);
				DOMUtils.append($content, $homePage);
			} catch (error: any) {
				Qmsg.error(error.toString(), { consoleLogContent: true });
			}
		});
	},
	/**
	 * 导入规则
	 * @param importEndCallBack 导入完毕后的回调
	 */
	importRule(importEndCallBack?: () => void) {
		let $alert = NetDiskPops.alert({
			title: {
				text: "请选择导入方式",
				position: "center",
			},
			content: {
				text: /*html*/ `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
				html: true,
			},
			btn: {
				ok: { enable: false },
				close: {
					enable: true,
					callback(details, event) {
						details.close();
					},
				},
			},
			mask: { enable: true },
			drag: true,
			width: PanelUISize.info.width,
			height: PanelUISize.info.height,
			style: /*css*/ `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `,
		});
		/** 本地导入 */
		let $local = $alert.$shadowRoot.querySelector<HTMLElement>(
			".btn-control[data-mode='local']"
		)!;
		/** 网络导入 */
		let $network = $alert.$shadowRoot.querySelector<HTMLElement>(
			".btn-control[data-mode='network']"
		)!;
		/** 剪贴板导入 */
		let $clipboard = $alert.$shadowRoot.querySelector<HTMLElement>(
			".btn-control[data-mode='clipboard']"
		)!;
		/**
		 * 将获取到的规则更新至存储
		 */
		let updateRuleToStorage = (data: any[]) => {
			let allData = this.getAllRule();
			let addNewData: typeof allData = [];
			for (let index = 0; index < data.length; index++) {
				const dataItem = data[index];
				let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
				if (findIndex !== -1) {
					// 存在相同的uuid的规则
					// 不做处理
				} else {
					// 追加
					addNewData.push(dataItem);
				}
			}
			allData = allData.concat(addNewData);
			WebsiteRuleStorageApi.set(this.$data.STORAGE_KEY, allData);

			Qmsg.success(`共 ${data.length} 条规则，新增 ${addNewData.length} 条`);
			importEndCallBack?.();
		};
		/**
		 * @param subscribeText 订阅文件文本
		 */
		let importFile = (subscribeText: string) => {
			return new Promise<boolean>((resolve) => {
				let data = utils.toJSON(subscribeText);
				if (!Array.isArray(data)) {
					log.error(data);
					Qmsg.error("导入失败，格式不符合（不是数组）", {
						consoleLogContent: true,
					});
					resolve(false);
					return;
				}
				if (!data.length) {
					Qmsg.error("导入失败，解析出的数据为空", {
						consoleLogContent: true,
					});
					resolve(false);
					return;
				}

				updateRuleToStorage(data);
				resolve(true);
			});
		};
		// 本地导入
		DOMUtils.on($local, "click", (event) => {
			utils.preventEvent(event);
			$alert.close();
			let $input = DOMUtils.createElement("input", {
				type: "file",
				accept: ".json",
			});
			DOMUtils.on($input, ["propertychange", "input"], (event) => {
				if (!$input.files?.length) {
					return;
				}
				let uploadFile = $input.files![0];
				let fileReader = new FileReader();
				fileReader.onload = () => {
					importFile(fileReader.result as string);
				};
				fileReader.readAsText(uploadFile, "UTF-8");
			});
			$input.click();
		});
		// 网络导入
		DOMUtils.on($network, "click", (event) => {
			utils.preventEvent(event);
			$alert.close();
			let $prompt = NetDiskPops.prompt({
				title: {
					text: "网络导入",
					position: "center",
				},
				content: {
					text: "",
					placeholder: "请填写URL",
					focus: true,
				},
				btn: {
					close: {
						enable: true,
						callback(details, event) {
							details.close();
						},
					},
					ok: {
						text: "导入",
						callback: async (eventDetails, event) => {
							let url = eventDetails.text;
							if (utils.isNull(url)) {
								Qmsg.error("请填入完整的url");
								return;
							}
							let $loading = Qmsg.loading("正在获取配置...");
							let response = await httpx.get(url, {
								allowInterceptConfig: false,
							});
							$loading.close();
							if (!response.status) {
								log.error(response);
								Qmsg.error("获取配置失败", { consoleLogContent: true });
								return;
							}
							let flag = await importFile(response.data.responseText);
							if (!flag) {
								return;
							}
							eventDetails.close();
						},
					},
					cancel: {
						enable: false,
					},
				},
				mask: { enable: true },
				drag: true,
				width: PanelUISize.info.width,
				height: "auto",
			});
			let $promptInput =
				$prompt.$shadowRoot.querySelector<HTMLInputElement>("input")!;
			let $promptOk = $prompt.$shadowRoot.querySelector<HTMLElement>(
				".pops-prompt-btn-ok"
			)!;
			DOMUtils.on($promptInput, ["input", "propertychange"], (event) => {
				let value = DOMUtils.val($promptInput);
				if (value === "") {
					DOMUtils.attr($promptOk, "disabled", "true");
				} else {
					DOMUtils.removeAttr($promptOk, "disabled");
				}
			});
			DOMUtils.listenKeyboard(
				$promptInput,
				"keydown",
				(keyName, keyValue, otherCodeList) => {
					if (keyName === "Enter" && otherCodeList.length === 0) {
						let value = DOMUtils.val($promptInput);
						if (value !== "") {
							utils.dispatchEvent($promptOk, "click");
						}
					}
				}
			);
			utils.dispatchEvent($promptInput, "input");
		});
		// 剪贴板导入
		DOMUtils.on($clipboard, "click", async (event) => {
			utils.preventEvent(event);
			$alert.close();
			let clipboardInfo = await utils.getClipboardInfo();
			if (clipboardInfo.error != null) {
				Qmsg.error(clipboardInfo.error.toString());
				return;
			}
			if (clipboardInfo.content.trim() === "") {
				Qmsg.warning("获取到的剪贴板内容为空");
				return;
			}
			let flag = await importFile(clipboardInfo.content);
			if (!flag) {
				return;
			}
		});
	},
};
