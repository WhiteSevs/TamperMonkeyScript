import { DOMUtils, httpx, log, pops, SCRIPT_NAME, utils } from "@/env";
import { UIInput } from "@/setting/components/ui-input";
import { UISwitch } from "@/setting/components/ui-switch";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@components/setting/panel-config";
import type {
	RulePanelContentOption,
	RuleSubscribeOption,
} from "@components/utils/RulePanelView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import { NetDiskPops } from "../pops/NetDiskPops";
import { PanelUISize } from "@components/setting/panel-ui-size";
import { CharacterMappingSubscribe } from "./CharacterMappingSubscribe";
import { StorageUtils } from "@components/utils/StorageUtils";

/** 字符映射的存储操作Api */
const CharacterMappingStorageApi = new StorageUtils("character-mapping-rule");

/**
 * 字符映射
 */
export const CharacterMapping = {
	$data: {
		STORAGE_KEY: "character-mapping",
		EXPORT_CONFIG_KEY: "rule-export-config",
	},
	/**
	 * 获取模板数据
	 */
	getTemplateData(): CharacterMappingOption {
		return {
			uuid: utils.generateUUID(),
			subscribeUUID: null,
			enable: true,
			name: "",
			data: {
				url: "",
				isRegExp: true,
				regExpFlag: "ig",
				searchValue: "",
				replaceValue: "",
			},
			dynamicData: [],
		};
	},
	/**
	 * 获取规则面板视图的配置
	 * @param quickAddData 用于快速添加数据
	 */
	getRulePanelViewOption(quickAddData?: CharacterMappingOption) {
		const that = this;
		let popsPanelContentUtils = pops.config.panelHandleContentUtils();
		let addData = () => {
			return quickAddData ?? this.getTemplateData();
		};
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

		let rulePanelViewOption: RulePanelContentOption<CharacterMappingOption> = {
			id: "netdisk-rule",
			title: "字符映射",
			headerTitle: "字符映射规则",
			subscribe: {
				enable: true,
				data() {
					return CharacterMappingSubscribe.getAllSubscribe();
				},
				getData: (data) => {
					let findValue = CharacterMappingSubscribe.getSubscribe(data.uuid);
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
					return CharacterMappingSubscribe.addSubscribe(data);
				},
				updateData: (data) => {
					return CharacterMappingSubscribe.updateSubscribe(data);
				},
				deleteData: (data) => {
					return CharacterMappingSubscribe.deleteSubscribe(data);
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
							CharacterMappingSubscribe.deleteAllSubscribe();
						},
					},
					ruleEnable: {
						enable: true,
						getEnable(data) {
							return data.data.enable;
						},
						async callback(data, enable) {
							data.data.enable = enable;
							CharacterMappingSubscribe.updateSubscribe(data);
						},
					},
					ruleEdit: {
						enable: true,
						callback: (option) => {
							let subscribeUUID = option.ruleData.uuid;
							option.enterDeepMenu<CharacterMappingOption>({
								headerTitle:
									// 自己重新命名的
									option.ruleData.data.title ||
									// 订阅的规则自带的
									option.ruleData.subscribeData.title ||
									// 订阅的链接
									option.ruleData.data.url,
								data() {
									let currentData =
										CharacterMappingSubscribe.getSubscribe(subscribeUUID);
									return (
										currentData?.subscribeData?.ruleData ??
										option.ruleData.subscribeData.ruleData
									);
								},
								getData(data) {
									let currentData = CharacterMappingSubscribe.getSubscribeRule(
										subscribeUUID,
										data.uuid
									);
									return currentData ?? data;
								},
								getDataItemName(data) {
									return data.name ?? data.data.url;
								},
								addData(data) {
									// TODO
									return true;
								},
								updateData(data) {
									return CharacterMappingSubscribe.updateSubscribeRule(
										subscribeUUID,
										data
									);
								},
								deleteData(data) {
									return CharacterMappingSubscribe.deleteSubscribeRule(
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
													return data.enable;
												},
											},
											{
												name: "过滤【未启用】的规则",
												filterCallBack(data) {
													return !data.enable;
												},
											},
										],
									},
									clearAll: {
										enable: true,
										callback: () => {
											CharacterMappingSubscribe.clearSubscribe(subscribeUUID);
										},
									},
									ruleEnable: {
										enable: true,
										getEnable(data) {
											return data.enable;
										},
										callback(data, enable) {
											data.enable = enable;
											CharacterMappingSubscribe.updateSubscribeRule(
												subscribeUUID,
												data
											);
										},
									},
									ruleEdit: {
										enable: true,
										getView: (data, isEdit) => {
											if (!isEdit) {
												data = addData();
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
												generateStorageApi(data.data)
											);
											let $data_url =
												popsPanelContentUtils.createSectionContainerItem_input(
													url_template
												);

											/**
											 * 获取动态的元素
											 * @param storageData 存储的数据
											 */
											let getDynamicPropElement = (storageData: any) => {
												let template_data = this.getTemplateData();
												// 字符规则
												let data_searchValue_template = UIInput(
													"字符规则",
													"searchValue",
													template_data.data.searchValue,
													"",
													void 0,
													"必填，可正则"
												);
												Reflect.set(
													data_searchValue_template.props!,
													PROPS_STORAGE_API,
													generateStorageApi(storageData)
												);
												let $data_searchValue =
													popsPanelContentUtils.createSectionContainerItem_input(
														data_searchValue_template
													);

												// 是否启用正则
												let data_isRegExp_template = UISwitch(
													"是否启用正则",
													"isRegExp",
													template_data.data.isRegExp,
													void 0,
													"使用正则进行匹配字符规则"
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
													template_data.data.regExpFlag,
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

												// 映射为
												let data_replaceValue_template = UIInput(
													"映射为",
													"replaceValue",
													template_data.data.replaceValue,
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

												return {
													$data_searchValue,
													$data_isRegExp,
													$data_regExpFlag,
													$data_replaceValue,
												};
											};

											// 动态属性容器
											let $dynamicContainer = DOMUtils.createElement("div", {
												className: "rule-form-ulist-dynamic",
												innerHTML: /*html*/ `
									<div class="rule-form-ulist-dynamic__inner">

									</div>
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">添加额外属性</span>
										</button>
									</div>`,
											});
											let $dynamicInner =
												$dynamicContainer.querySelector<HTMLElement>(
													".rule-form-ulist-dynamic__inner"
												)!;
											let $addDynamicButton =
												$dynamicContainer.querySelector<HTMLButtonElement>(
													".pops-panel-button"
												)!;
											/**
											 * 添加动态项
											 */
											let addDynamicElementItem = (
												dynamicData?: CharacterMappingDynamicOption
											) => {
												let template_data = this.getTemplateData();
												dynamicData = dynamicData ?? {
													searchValue: template_data.data.searchValue,
													isRegExp: template_data.data.isRegExp,
													regExpFlag: template_data.data.regExpFlag,
													replaceValue: template_data.data.replaceValue,
												};
												let $dynamicUListContainer = DOMUtils.createElement(
													"div",
													{
														className:
															"rule-form-ulist-dynamic__inner-container",
														innerHTML: /*html*/ `
										<div class="dynamic-control-delete">
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="danger">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">×</span>
												</button>
											</div>
										</div>
										<ul class="dynamic-forms">

										</ul>`,
													}
												);
												/** 删除按钮 */
												let $dynamicDelete =
													$dynamicUListContainer.querySelector<HTMLElement>(
														".dynamic-control-delete"
													)!;
												// 设置删除事件
												DOMUtils.on($dynamicDelete, "click", (event) => {
													utils.preventEvent(event);
													// 移除元素
													$dynamicUListContainer.remove();
													if (Array.isArray(data.dynamicData)) {
														let findIndex = data.dynamicData.findIndex(
															(it) => it == dynamicData
														);
														if (findIndex !== -1) {
															data.dynamicData.splice(findIndex, 1);
														}
													}
												});
												/** 动态添加的项 */
												let $dynamicUList =
													$dynamicUListContainer.querySelector<HTMLUListElement>(
														".dynamic-forms"
													)!;
												let {
													$data_searchValue,
													$data_isRegExp,
													$data_regExpFlag,
													$data_replaceValue,
												} = getDynamicPropElement(dynamicData);
												// 在动态元素容器内添加元素
												$dynamicUList.appendChild($data_searchValue);
												$dynamicUList.appendChild($data_isRegExp);
												$dynamicUList.appendChild($data_regExpFlag);
												$dynamicUList.appendChild($data_replaceValue);
												$dynamicInner.appendChild($dynamicUListContainer);
											};
											// 设置添加动态项的点击事件
											DOMUtils.on($addDynamicButton, "click", (event) => {
												utils.preventEvent(event);
												addDynamicElementItem();
											});
											// 初始化的动态项
											if (Array.isArray(data.dynamicData)) {
												for (
													let index = 0;
													index < data.dynamicData.length;
													index++
												) {
													const moreDataItem = data.dynamicData[index];
													addDynamicElementItem(moreDataItem);
												}
											}

											let $firstDynamicElement = getDynamicPropElement(
												data.data
											);
											$fragment.appendChild($enable);
											$fragment.appendChild($name);
											$fragment.appendChild($data_url);
											$fragment.appendChild(
												$firstDynamicElement.$data_searchValue
											);
											$fragment.appendChild(
												$firstDynamicElement.$data_isRegExp
											);
											$fragment.appendChild(
												$firstDynamicElement.$data_regExpFlag
											);
											$fragment.appendChild(
												$firstDynamicElement.$data_replaceValue
											);
											$fragment.appendChild($dynamicContainer);
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
											// 添加的动态属性
											$form
												.querySelectorAll<HTMLLIElement>(
													".rule-form-ulist-dynamic__inner-container"
												)
												.forEach(($inner) => {
													let dynamicData = {};
													$inner
														.querySelectorAll(".dynamic-forms > li")
														.forEach(($li) => {
															let formConfig = Reflect.get(
																$li,
																"__formConfig__"
															);
															if (!formConfig) {
																return;
															}
															let attrs = Reflect.get(formConfig, "attributes");
															if (!attrs) {
																return;
															}
															let storageApi = Reflect.get(
																$li,
																PROPS_STORAGE_API
															);
															let key = Reflect.get(attrs, ATTRIBUTE_KEY);
															let defaultValue = Reflect.get(
																attrs,
																ATTRIBUTE_DEFAULT_VALUE
															);
															let value = storageApi.get(key, defaultValue);
															Reflect.set(dynamicData, key, value);
														});
													data.dynamicData!.push(dynamicData as any);
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
											if (
												data.data.searchValue.trim() === "" ||
												(Array.isArray(data.dynamicData) &&
													data.dynamicData.findIndex(
														(it) => it.searchValue.trim() === ""
													) !== -1)
											) {
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
									ruleDelete: {
										enable: true,
										deleteCallBack(data) {
											return CharacterMappingSubscribe.deleteSubscribeRule(
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
							return CharacterMappingSubscribe.deleteSubscribe(data);
						},
					},
					import: {
						enable: true,
						callback(updateView) {
							CharacterMappingSubscribe.importSubscribe(() => {
								updateView();
							});
						},
					},
					export: {
						enable: true,
						callback() {
							CharacterMappingSubscribe.exportSubscribe(
								SCRIPT_NAME + "-字典映射-订阅.json"
							);
						},
					},
				},
				getSubscribeInfo: CharacterMappingSubscribe.getSubscribeInfo.bind(
					CharacterMappingSubscribe
				),
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
									return Boolean(window.location.href.match(data.data.url));
								},
							},
						],
					},
					clearAll: {
						enable: true,
						callback: () => {
							that.clearData();
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
								SCRIPT_NAME + "-字符映射.json",
								SCRIPT_NAME + "-字符映射-订阅模式.json"
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
							that.updateData(data);
						},
					},
					ruleEdit: {
						enable: true,
						getView: (data, isEdit) => {
							let $fragment = document.createDocumentFragment();
							if (!isEdit) {
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
								generateStorageApi(data.data)
							);
							let $data_url =
								popsPanelContentUtils.createSectionContainerItem_input(
									url_template
								);

							/**
							 * 获取动态的元素
							 * @param storageData 存储的数据
							 */
							let getDynamicPropElement = (storageData: any) => {
								let template_data = this.getTemplateData();
								// 字符规则
								let data_searchValue_template = UIInput(
									"字符规则",
									"searchValue",
									template_data.data.searchValue,
									"",
									void 0,
									"必填，可正则"
								);
								Reflect.set(
									data_searchValue_template.props!,
									PROPS_STORAGE_API,
									generateStorageApi(storageData)
								);
								let $data_searchValue =
									popsPanelContentUtils.createSectionContainerItem_input(
										data_searchValue_template
									);

								// 是否启用正则
								let data_isRegExp_template = UISwitch(
									"是否启用正则",
									"isRegExp",
									template_data.data.isRegExp,
									void 0,
									"使用正则进行匹配字符规则"
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
									template_data.data.regExpFlag,
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

								// 映射为
								let data_replaceValue_template = UIInput(
									"映射为",
									"replaceValue",
									template_data.data.replaceValue,
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

								return {
									$data_searchValue,
									$data_isRegExp,
									$data_regExpFlag,
									$data_replaceValue,
								};
							};

							// 动态属性容器
							let $dynamicContainer = DOMUtils.createElement("div", {
								className: "rule-form-ulist-dynamic",
								innerHTML: /*html*/ `
									<div class="rule-form-ulist-dynamic__inner">

									</div>
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">添加额外属性</span>
										</button>
									</div>`,
							});
							let $dynamicInner = $dynamicContainer.querySelector<HTMLElement>(
								".rule-form-ulist-dynamic__inner"
							)!;
							let $addDynamicButton =
								$dynamicContainer.querySelector<HTMLButtonElement>(
									".pops-panel-button"
								)!;
							/**
							 * 添加动态项
							 */
							let addDynamicElementItem = (
								dynamicData?: CharacterMappingDynamicOption
							) => {
								let template_data = this.getTemplateData();
								dynamicData = dynamicData ?? {
									searchValue: template_data.data.searchValue,
									isRegExp: template_data.data.isRegExp,
									regExpFlag: template_data.data.regExpFlag,
									replaceValue: template_data.data.replaceValue,
								};
								let $dynamicUListContainer = DOMUtils.createElement("div", {
									className: "rule-form-ulist-dynamic__inner-container",
									innerHTML: /*html*/ `
										<div class="dynamic-control-delete">
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="danger">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">×</span>
												</button>
											</div>
										</div>
										<ul class="dynamic-forms">

										</ul>`,
								});
								/** 删除按钮 */
								let $dynamicDelete =
									$dynamicUListContainer.querySelector<HTMLElement>(
										".dynamic-control-delete"
									)!;
								// 设置删除事件
								DOMUtils.on($dynamicDelete, "click", (event) => {
									utils.preventEvent(event);
									// 移除元素
									$dynamicUListContainer.remove();
									if (Array.isArray(data.dynamicData)) {
										let findIndex = data.dynamicData.findIndex(
											(it) => it == dynamicData
										);
										if (findIndex !== -1) {
											data.dynamicData.splice(findIndex, 1);
										}
									}
								});
								/** 动态添加的项 */
								let $dynamicUList =
									$dynamicUListContainer.querySelector<HTMLUListElement>(
										".dynamic-forms"
									)!;
								let {
									$data_searchValue,
									$data_isRegExp,
									$data_regExpFlag,
									$data_replaceValue,
								} = getDynamicPropElement(dynamicData);
								// 在动态元素容器内添加元素
								$dynamicUList.appendChild($data_searchValue);
								$dynamicUList.appendChild($data_isRegExp);
								$dynamicUList.appendChild($data_regExpFlag);
								$dynamicUList.appendChild($data_replaceValue);
								$dynamicInner.appendChild($dynamicUListContainer);
							};
							// 设置添加动态项的点击事件
							DOMUtils.on($addDynamicButton, "click", (event) => {
								utils.preventEvent(event);
								addDynamicElementItem();
							});
							// 初始化的动态项
							if (Array.isArray(data.dynamicData)) {
								for (let index = 0; index < data.dynamicData.length; index++) {
									const moreDataItem = data.dynamicData[index];
									addDynamicElementItem(moreDataItem);
								}
							}

							let $firstDynamicElement = getDynamicPropElement(data.data);

							$fragment.appendChild($enable);
							$fragment.appendChild($name);
							$fragment.appendChild($data_url);
							$fragment.appendChild($firstDynamicElement.$data_searchValue);
							$fragment.appendChild($firstDynamicElement.$data_isRegExp);
							$fragment.appendChild($firstDynamicElement.$data_regExpFlag);
							$fragment.appendChild($firstDynamicElement.$data_replaceValue);
							$fragment.appendChild($dynamicContainer);
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
							// 添加的动态属性
							$form
								.querySelectorAll<HTMLLIElement>(
									".rule-form-ulist-dynamic__inner-container"
								)
								.forEach(($inner) => {
									let dynamicData = {};
									$inner
										.querySelectorAll(".dynamic-forms > li")
										.forEach(($li) => {
											let formConfig = Reflect.get($li, "__formConfig__");
											if (!formConfig) {
												return;
											}
											let attrs = Reflect.get(formConfig, "attributes");
											if (!attrs) {
												return;
											}
											let storageApi = Reflect.get($li, PROPS_STORAGE_API);
											let key = Reflect.get(attrs, ATTRIBUTE_KEY);
											let defaultValue = Reflect.get(
												attrs,
												ATTRIBUTE_DEFAULT_VALUE
											);
											let value = storageApi.get(key, defaultValue);
											Reflect.set(dynamicData, key, value);
										});
									data.dynamicData!.push(dynamicData as any);
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
							if (
								data.data.searchValue.trim() === "" ||
								(Array.isArray(data.dynamicData) &&
									data.dynamicData.findIndex(
										(it) => it.searchValue.trim() === ""
									) !== -1)
							) {
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
					ruleDelete: {
						enable: true,
						deleteCallBack: (data) => {
							return that.deleteData(data);
						},
					},
				},
				data: () => {
					return this.getData();
				},
				getAddData: () => {
					return addData();
				},
				getData: (data) => {
					let allData = this.getData();
					let findValue = allData.find((item) => item.uuid === data.uuid);
					return findValue ?? data;
				},
				getDataItemName: (data) => {
					return data["name"] ?? data.data.url;
				},
				updateData: (data) => {
					return this.updateData(data);
				},
				deleteData: (data) => {
					return this.deleteData(data);
				},
			},
		};

		return rulePanelViewOption;
	},
	/**
	 * 根据url获取匹配的规则
	 * @param [filterUnEnable=true] 是否过滤掉未启用的规则
	 * @param url 需要匹配的url
	 */
	getUrlMatchedRule(filterUnEnable = true, url = window.location.href) {
		let allData = this.getData();
		let allSubscribeRule =
			CharacterMappingSubscribe.getAllSubscribeRule(filterUnEnable);
		allData = allData.concat(allSubscribeRule);
		return allData.filter((rule) => {
			// 启用且匹配网址
			if (filterUnEnable && !rule.enable) {
				return;
			}
			return Boolean(url.match(rule.data.url));
		});
	},
	/**
	 * 获取格式化可用的规则
	 * @param url 匹配网址
	 */
	getMappingData(url: string = window.location.href) {
		let matchedRule = this.getUrlMatchedRule(true, url);
		let replaceMappingData: {
			searchValue: RegExp | string;
			replaceValue: string;
		}[] = [];
		matchedRule.forEach((data) => {
			try {
				let iteratorData = Array.isArray(data.dynamicData)
					? [...data.dynamicData].concat(data.data)
					: [data.data];
				for (let index = 0; index < iteratorData.length; index++) {
					const moreDataItem = iteratorData[index];
					if (moreDataItem.isRegExp) {
						// 正则匹配
						replaceMappingData.push({
							searchValue: new RegExp(
								moreDataItem.searchValue,
								moreDataItem.regExpFlag
							),
							replaceValue: moreDataItem.replaceValue,
						});
					} else {
						// 普通匹配
						replaceMappingData.push({
							searchValue: moreDataItem.searchValue,
							replaceValue: moreDataItem.replaceValue,
						});
					}
				}
			} catch (error) {
				log.error("字符映射规则转换发生错误：", error);
			}
		});
		return replaceMappingData;
	},
	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<CharacterMappingOption[]>(this.$data.STORAGE_KEY, []);
	},
	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: CharacterMappingOption[]) {
		GM_setValue(this.$data.STORAGE_KEY, data);
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
			GM_setValue(this.$data.STORAGE_KEY, localData);
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
		GM_deleteValue(this.$data.STORAGE_KEY);
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
				let allRule = this.getData();
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
				let allRule = this.getData();
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
							CharacterMappingStorageApi.set(
								that.$data.EXPORT_CONFIG_KEY,
								data
							);
						},
					};
				};
				/**
				 * 按下导出的按钮的回调
				 */
				let exportCallBack = () => {
					let configData = CharacterMappingStorageApi.get<
						Partial<
							RuleSubscribeOption<CharacterMappingOption>["subscribeData"]
						>
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
					configData.ruleData = this.getData();

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
				let configData = CharacterMappingStorageApi.get<
					Partial<RuleSubscribeOption<CharacterMappingOption>["subscribeData"]>
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
			let allData = this.getData();
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
			this.setData(allData);

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
