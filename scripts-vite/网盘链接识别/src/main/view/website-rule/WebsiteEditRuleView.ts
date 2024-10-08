import { DOMUtils, log, pops, utils } from "@/env";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import { WebsiteRule } from "@/main/website-rule/WebsiteRule";
import type { WebsiteRuleOption } from "@/main/website-rule/WebsiteRuleType";
import { WebsiteRuleView } from "./WebsiteRuleView";
import { UISwitch } from "@/setting/common-components/ui-switch";
import { UIInput } from "@/setting/common-components/ui-input";
import { UIButton } from "@/setting/common-components/ui-button";
import { PopsPanel } from "@/setting/setting";
import { NetDiskRule } from "@/main/rule/NetDiskRule";
import type { PopsPanelContentConfig } from "@库/pops/dist/types/src/components/panel/indexType";

import panelSettingCSS from "../global-setting/index.css?raw";
import {
	NetDiskRuleDataKEY,
	WebsiteRuleDataKey,
} from "@/main/data/NetDiskRuleDataKey";
import { ATTRIBUTE_KEY, PROPS_STORAGE_API } from "@/setting/config";
import type { PopsPanelFormsDetails } from "@库/pops/dist/types/src/components/panel/formsType";
import Qmsg from "qmsg";

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

let arr = [{ a: 1 }, { b: 2 }];
let deepCopiedArr = deepCopy(arr);

export const WebsiteEditRuleView = {
	/**
	 * 主弹窗的shadowRoot
	 * @param $parentShadowRoot
	 * @param editRule 编辑的规则
	 * @param $editRuleItemElement 当前编辑的规则所在的元素
	 */
	show(
		$parentShadowRoot: ShadowRoot,
		editRule?: WebsiteRuleOption,
		$editRuleItemElement?: HTMLDivElement
	) {
		/**
		 * 自定义存储api的配置
		 * @param uuid
		 */
		function generatePanelStorageApi(uuid: string) {
			return {
				get(key: string, defaultValue: any) {
					let currentRule = WebsiteRule.getRule(uuid)!;
					return Reflect.get(currentRule.data, key) ?? defaultValue;
				},
				set(key: string, value: any) {
					let currentRule = WebsiteRule.getRule(uuid)!;
					Reflect.set(currentRule.data, key, value);
					WebsiteRule.updateRule(currentRule);
				},
			};
		}
		/**
		 * 自定义存储api的配置
		 * @param uuid
		 */
		function generateStorageApi(uuid: string) {
			return {
				get(key: string, defaultValue: any) {
					let currentRule = WebsiteRule.getRule(uuid)!;
					return Reflect.get(currentRule, key) ?? defaultValue;
				},
				set(key: string, value: any) {
					WebsiteRule.updateRuleValue(rule.uuid, key, value);
				},
			};
		}
		/**
		 * 弹窗关闭的回调（不保留配置）
		 */
		function dialogCancelCloseCallBack() {
			// 如果关闭弹窗，如果是添加状态，删除该规则
			if (editRule == null) {
				// 添加规则，关闭时清理掉规则
				WebsiteRule.deleteRule(rule.uuid);
			}
			if ($editRuleItemElement == null) {
				// 更新全部内容
				WebsiteRuleView.updateRuleContaienrElement($parentShadowRoot);
			} else {
				// 只单独更新一个元素
				let newRule = WebsiteRule.getRule(rule.uuid)!;
				WebsiteRuleView.updateRuleItemElement(
					newRule,
					$editRuleItemElement,
					$parentShadowRoot
				);
			}
		}
		let $dialog = NetDiskPops.confirm(
			{
				title: {
					text: editRule == null ? "添加规则" : "编辑规则",
					position: "center",
				},
				content: {
					text: /*html*/ `
                    <ul class="website-rule-container">
                    </ul>
                    `,
					html: true,
				},
				btn: {
					close: {
						enable: true,
						callback(details, event) {
							$dialog.close();
							dialogCancelCloseCallBack();
						},
					},
					cancel: {
						enable: true,
						text: "取消",
						callback(eventDetails, event) {
							$dialog.close();
							dialogCancelCloseCallBack();
						},
					},
					ok: {
						enable: true,
						text: "确定",
						callback(eventDetails, event) {
							let currentRule = WebsiteRule.getRule(rule.uuid)!;
							if (currentRule.name?.trim() === "") {
								Qmsg.error("规则名称不能为空");
								return;
							}
							if (currentRule.url.trim() === "") {
								Qmsg.error("匹配网址不能为空");
								return;
							} else {
								try {
									new RegExp(currentRule.url);
								} catch (error: any) {
									log.error(error);
									Qmsg.error(
										"匹配网址不能被正确解析为正则表达式：" + error.message,
										{
											timeout: 5000,
										}
									);
									return;
								}
							}

							$dialog.close();
							if (editRule == null) {
								// 添加规则
								// 添加元素
								WebsiteRuleView.appendRuleItemElement(
									$parentShadowRoot,
									currentRule
								);
							} else {
								// 编辑规则
								// 更新元素
								WebsiteRuleView.updateRuleItemElement(
									currentRule,
									$editRuleItemElement!,
									$parentShadowRoot
								);
							}
						},
					},
				},
				mask: {
					clickEvent: {
						toClose: false,
						toHide: false,
					},
				},
				style: /*css*/ `
                ${pops.config.cssText.panelCSS}
                
                .website-rule-container {
                    
                }
                .website-rule-container li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 20px;
                }
                .pops-panel-item-left-main-text{
                    white-space: nowrap;
                }
                .pops-panel-item-right-text{
                    padding-left: 30px;
                }
                .pops-panel-item-right-text,
                .pops-panel-item-right-main-text{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                `,
			},
			NetDiskUI.popsStyle.websiteEditRuleView
		);
		/** 规则，这里只做初始化使用，如data值肯定不是新的，需要动态获取 */
		let rule =
			editRule == null
				? <WebsiteRuleOption>{
						enable: true,
						uuid: utils.generateUUID(),
						name: "",
						url: "",
						data: {},
				  }
				: editRule;
		if (editRule == null) {
			// 当前是添加，先初始化的规则的配置
			WebsiteRule.addRule(rule);
		}
		let popsPanelContentUtils = pops.config.panelHandleContentUtils();
		let $container = $dialog.$shadowRoot.querySelector<HTMLUListElement>(
			".website-rule-container"
		)!;

		// uuid
		let $uuid = DOMUtils.createElement(
			"li",
			{
				innerHTML: /*html*/ `
                <div class="pops-panel-item-left-text">
                    <p class="pops-panel-item-left-main-text">UUID</p>
                </div>
                <div class="pops-panel-item-right-text">
                    <p class="pops-panel-item-right-main-text">${rule.uuid}</p>
                </div>
                `,
			},
			{
				"data-key": "uuid",
				"data-default-value": rule.uuid,
			}
		);
		$container.appendChild($uuid);

		// 启用 元素
		let enable_template = UISwitch(
			"启用",
			"enable",
			true,
			void 0,
			void 0,
			void 0
		);
		// 模板
		Reflect.set(
			enable_template.props!,
			PROPS_STORAGE_API,
			generateStorageApi(rule.uuid)
		);
		let $enable =
			popsPanelContentUtils.createSectionContainerItem_switch(enable_template);
		$container.appendChild($enable);

		// 规则名称
		let name_template = UIInput(
			"规则名称",
			"name",
			"",
			"",
			void 0,
			void 0,
			void 0
		);
		// 模板
		Reflect.set(
			name_template.props!,
			PROPS_STORAGE_API,
			generateStorageApi(rule.uuid)
		);
		let $name =
			popsPanelContentUtils.createSectionContainerItem_input(name_template);
		$container.appendChild($name);

		// 匹配网址
		let url_template = UIInput(
			"匹配网址",
			"url",
			"",
			"",
			void 0,
			void 0,
			void 0
		);
		// 模板
		Reflect.set(
			url_template.props!,
			PROPS_STORAGE_API,
			generateStorageApi(rule.uuid)
		);
		let $url =
			popsPanelContentUtils.createSectionContainerItem_input(url_template);
		$container.appendChild($url);

		// 覆盖设置
		let override_setting = UIButton(
			"覆盖设置",
			"",
			"自定义",
			void 0,
			false,
			false,
			"primary",
			(event) => {
				// 先获取总设置和所有规则的content配置
				let originPanelContentConfig = PopsPanel.getPanelContentConfig().concat(
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
							let panelStorageApi = generatePanelStorageApi(rule.uuid);
							Reflect.set(configItem.props, PROPS_STORAGE_API, panelStorageApi);
						}
						let childForms = (configItem as any).forms;
						if (childForms && Array.isArray(childForms)) {
							/* 存在子配置forms */
							iterativeTraversal(childForms);
						}
					});
				}
				for (let index = 0; index < newPanelContentConfig.length; index++) {
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
						leftContentConfigItem.afterRender = (data) => {
							let ruleKey = data.asideConfig!.attributes!["data-key"];
							let enableKey = NetDiskRuleDataKEY.function.enable(ruleKey);
							data.$asideLiElement.setAttribute(
								"data-function-enable",
								WebsiteRule.getRuleDataValue(rule.uuid, enableKey, true)
							);
						};
					}
					if (
						typeof leftContentConfigItem.attributes === "object" &&
						leftContentConfigItem.forms != null &&
						ATTRIBUTE_KEY in leftContentConfigItem.attributes
					) {
						/** 规则键 */
						let ruleKey = leftContentConfigItem.attributes[ATTRIBUTE_KEY];
						let custom_accessCode_enable_template = UISwitch(
							"启用",
							WebsiteRuleDataKey.features.customAccessCodeEnable(ruleKey),
							false,
							void 0,
							"启用后将允许执行下面的功能",
							void 0
						);
						// 覆盖存储api
						Reflect.set(
							custom_accessCode_enable_template.props!,
							PROPS_STORAGE_API,
							generatePanelStorageApi(rule.uuid)
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
							generatePanelStorageApi(rule.uuid)
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
							leftContentConfigItem.forms.push(custom_accessCode_container);
						}
					}
					// 循环左侧容器内存储的右侧配置项
					let rightContentConfigList = leftContentConfigItem.forms;
					if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
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
									// @ts-ignore
									NetDiskUI.Alias.settingAlias = void 0;
								},
							},
						},
						mask: {
							clickCallBack(originalRun) {
								originalRun();
								// @ts-ignore
								NetDiskUI.Alias.settingAlias = void 0;
							},
						},
						class: "whitesevPopSetting",
						style: /*css*/ `
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
		let $override_setting_item =
			popsPanelContentUtils.createSectionContainerItem_button(override_setting);
		$container.appendChild($override_setting_item);
	},
};
