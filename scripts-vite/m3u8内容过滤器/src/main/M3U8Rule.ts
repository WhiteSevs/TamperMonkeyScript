import { DOMUtils, GM_Menu, log, pops, utils } from "@/env";
import { NetWorkHook } from "@/hook/NetWorkHook";
import { UIInput } from "@/setting/common-components/ui-input";
import { UISwitch } from "@/setting/common-components/ui-switch";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@/setting/config";
import { RuleView } from "@/utils/RuleView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import { M3U8Filter } from "./M3U8Filter";
import { UITextArea } from "@/setting/common-components/ui-textarea";
import { M3U8Menu } from "./M3U8Menu";

type RuleOption = {
	/** 唯一uuid */
	uuid: string;
	/** 启用状态 */
	enable: boolean;
	/** 规则名 */
	name: string;
	/** 规则数据 */
	data: {
		/** 匹配网站 */
		url: string;
		/** 是否启用通过过滤广告 */
		commonFilterAdsSegmentsFileNameLength: boolean;
		/** 是否启用通过相似度过滤广告 */
		commonFilterAdsSegmentsFileNameSimilar: boolean;
		/** 自定义过滤逻辑代码 */
		ownFilterCode: string;
	};
};

export const M3U8Rule = {
	$key: {
		STORAGE_KEY: "m3u8-rule",
	},
	$data: {
		/** 当前网站匹配到的规则 */
		matchedRule: <RuleOption[]>[],
	},
	init() {
		let allData = this.getData();
		this.registerMenu(allData);
		for (let index = 0; index < allData.length; index++) {
			try {
				const ruleOption = allData[index];
				if (
					ruleOption.enable &&
					window.location.href.match(new RegExp(ruleOption.data.url))
				) {
					this.$data.matchedRule.push(ruleOption);
				}
			} catch (error) {
				log.error("m3u8过滤器 ==> 规则初始化出错", error);
			}
		}

		if (this.$data.matchedRule.length) {
			log.info("m3u8过滤器 ==> 当前网站执行的规则：", this.$data.matchedRule);
			// 启用hook
			NetWorkHook.hook();
			// 注册菜单
			M3U8Menu.updateISMatchedRuleMenu();
		} else {
		}
	},
	/**
	 * 注册菜单
	 */
	registerMenu(allData: RuleOption[]) {
		GM_Menu.update([
			{
				key: "m3u8-rule",
				text: `⚙ 自定义规则（${allData.length}条）`,
				autoReload: false,
				isStoreValue: false,
				showText(text) {
					return text;
				},
				callback: () => {
					this.showView();
				},
			},
			{
				key: "m3u8-export-rule",
				text: `⚙ 规则导出`,
				autoReload: false,
				isStoreValue: false,
				showText(text) {
					return text;
				},
				callback: () => {
					this.exportRule();
				},
			},
			{
				key: "m3u8-import-rule",
				text: "⚙ 规则导入",
				autoReload: false,
				isStoreValue: false,
				showText(text) {
					return text;
				},
				callback: () => {
					this.importRule();
				},
			},
		]);
	},
	/**
	 * 获取模板数据
	 */
	getTemplateData(): RuleOption {
		return {
			uuid: utils.generateUUID(),
			enable: true,
			name: "",
			data: {
				url: "",
				commonFilterAdsSegmentsFileNameLength: true,
				commonFilterAdsSegmentsFileNameSimilar: false,
				ownFilterCode: "",
			},
		};
	},
	/**
	 * 显示视图
	 */
	showView() {
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
			title: "m3u8自定义规则",
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
						let data_url_template = UIInput(
							"匹配网址",
							"url",
							"",
							"",
							void 0,
							"必填，可正则，注意转义"
						);
						Reflect.set(
							data_url_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $data_url =
							popsPanelContentUtils.createSectionContainerItem_input(
								data_url_template
							);

						// 是否启用通用1过滤广告
						let data_commonFilterAdsSegmentsFileNameLength_template = UISwitch(
							"广告通杀1",
							"commonFilterAdsSegmentsFileNameLength",
							true,
							void 0,
							"使用文件名称长度比较"
						);
						Reflect.set(
							data_commonFilterAdsSegmentsFileNameLength_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $data_commonFilterAdsSegmentsFileNameLength =
							popsPanelContentUtils.createSectionContainerItem_switch(
								data_commonFilterAdsSegmentsFileNameLength_template
							);

						// 是否启用通用2过滤广告
						let data_commonFilterAdsSegmentsFileNameSimilar_template = UISwitch(
							"广告通杀2",
							"commonFilterAdsSegmentsFileNameSimilar",
							false,
							void 0,
							"使用文件名称相似度比较"
						);
						Reflect.set(
							data_commonFilterAdsSegmentsFileNameSimilar_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $data_commonFilterAdsSegmentsFileNameSimilar =
							popsPanelContentUtils.createSectionContainerItem_switch(
								data_commonFilterAdsSegmentsFileNameSimilar_template
							);

						// 自定义过滤代码
						let data_ownFilterCode_template = UITextArea(
							"自定义过滤js",
							"ownFilterCode",
							"",
							"",
							void 0,
							"参数：\n" +
								"    [m3u8Text]：需要处理的m3u8字符串\n" +
								"返回：[String]\n" +
								"\n" +
								"例如：\n" +
								"m3u8Text = m3u8Text.replace('','');\n" +
								"return m3u8Text;\n"
						);
						Reflect.set(
							data_ownFilterCode_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $data_ownFilterCode =
							popsPanelContentUtils.createSectionContainerItem_textarea(
								data_ownFilterCode_template
							);

						$fragment.appendChild($enable);
						$fragment.appendChild($name);
						$fragment.appendChild($data_url);
						$fragment.appendChild($data_commonFilterAdsSegmentsFileNameLength);
						$fragment.appendChild($data_commonFilterAdsSegmentsFileNameSimilar);
						$fragment.appendChild($data_ownFilterCode);
						return $fragment;
					},
					onsubmit: ($form, isEdit, editData) => {
						// 提交表单
						let $ulist_li = $form.querySelectorAll<HTMLLIElement>(
							".rule-form-ulist > li"
						);
						let data: RuleOption = this.getTemplateData();
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

					style: /*css*/ `
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `,
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
					option: [
						{
							name: "过滤【启用】",
							filterCallBack(data) {
								return data.enable;
							},
						},
						{
							name: "过滤【未启用】",
							filterCallBack(data) {
								return !data.enable;
							},
						},
						{
							name: "过滤【当前网址运行的规则】",
							filterCallBack(data) {
								try {
									return Boolean(
										window.location.href.match(new RegExp(data.data.url))
									);
								} catch (error) {
									return false;
								}
							},
						},
					],
				},
			},
		});
		ruleView.showView();
	},
	/**
	 * 执行规则
	 */
	runRule(m3u8Text: string): string {
		let handlerM3U8Text = m3u8Text;
		for (let index = 0; index < this.$data.matchedRule.length; index++) {
			try {
				const RuleOption = this.$data.matchedRule[index];
				const RuleOptionData = RuleOption.data;
				if (RuleOptionData.commonFilterAdsSegmentsFileNameLength) {
					const { filterInfo, m3u8Text: __handler_m3u8_text__ } =
						M3U8Filter.filterAdsWithFileNameLength(handlerM3U8Text, true);
					handlerM3U8Text = __handler_m3u8_text__;
				}
				if (RuleOptionData.commonFilterAdsSegmentsFileNameSimilar) {
					const { filterInfo, m3u8Text: __handler_m3u8_text__ } =
						M3U8Filter.filterAdsWithFileNameSimilar(handlerM3U8Text, true);
					handlerM3U8Text = __handler_m3u8_text__;
				}

				if (RuleOptionData.ownFilterCode.trim() !== "") {
					// 执行自定义js代码
					let ownFilterCodeFunction = new Function(
						"m3u8Text",
						RuleOptionData.ownFilterCode
					);
					let ownFilter_m3u8_text = ownFilterCodeFunction(handlerM3U8Text);
					if (typeof ownFilter_m3u8_text === "string") {
						handlerM3U8Text = ownFilter_m3u8_text;
					} else {
						log.error(
							"m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串",
							ownFilter_m3u8_text
						);
					}
				}

				// 只执行一次
				break;
			} catch (error) {
				log.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常", error);
			}
		}

		return handlerM3U8Text;
	},
	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<RuleOption[]>(this.$key.STORAGE_KEY, []);
	},
	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: RuleOption[]) {
		GM_setValue(this.$key.STORAGE_KEY, data);
	},
	/**
	 * 添加数据
	 * @param data
	 */
	addData(data: RuleOption) {
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
	updateData(data: RuleOption) {
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
	deleteData(data: RuleOption) {
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
	/**
	 * 规则导出
	 */
	exportRule() {
		let $anchor = DOMUtils.createElement("a", {
			download: "m3u8-filter-rule.json",
			href: URL.createObjectURL(
				new Blob([JSON.stringify(this.getData(), null, 4)], {
					type: "application/json",
				})
			),
			target: "_blank",
		});
		document.body.appendChild($anchor);
		$anchor.click();
		setTimeout(() => {
			$anchor.remove();
		}, 1500);
	},
	/**
	 * 规则导入
	 */
	importRule() {
		let $input = DOMUtils.createElement("input", {
			type: "file",
			accept: ".json, .txt",
		});
		DOMUtils.on($input, ["input", "propertychange"], (event) => {
			let files = $input.files;
			if (!files || files.length === 0) {
				$input.value = "";
				return;
			}
			let reader = new FileReader();
			reader.onload = (event) => {
				let text = event.target!.result as string;
				if (text == null) {
					Qmsg.error("读取规则文件失败");
					return;
				}
				try {
					let ruleData: RuleOption[] = utils.toJSON(text);
					if (!Array.isArray(ruleData)) {
						log.error("解析出的规则数据不是数组格式", ruleData);
						Qmsg.error("解析出的规则数据不是数组格式");
						return;
					}
					let coverFlag = window.confirm("是否覆盖本地规则数据？");
					if (coverFlag) {
						this.setData(ruleData);
						Qmsg.success(`成功导入 ${ruleData.length}条数据`);
					}
				} catch (error) {
					log.error("解析规则文件失败", error);
					Qmsg.error("解析规则内容失败");
				}
			};
			reader.readAsText(files[0]);
		});
		$input.click();
	},
};
