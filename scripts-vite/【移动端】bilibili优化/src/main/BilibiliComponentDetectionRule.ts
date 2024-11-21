import { DOMUtils, httpx, log, pops, Qmsg, utils } from "@/env";
import { UIInput } from "@/setting/common-components/ui-input";
import { UISwitch } from "@/setting/common-components/ui-switch";
import { UITextArea } from "@/setting/common-components/ui-textarea";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@/setting/config";
import { PanelUISize } from "@/setting/panel-ui-size";
import { RuleView } from "@/utils/RuleView";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

export type BilibiliUserLabelRule = {
	/** 唯一uuid */
	uuid: string;
	/** 是否启用 */
	enable: boolean;
	/** 规则名 */
	name: string;

	data: {
		/** 是否显示标签名称 */
		isShowDisplayName: boolean;
		/** 显示的标签名称 */
		displayName: string;
		/** 是否显示标签图标 */
		isShowDisplayIcon: boolean;
		/** 显示的标签图标，如果是图片，请确保链接是http开头 */
		displayIcon: string;
		/**
		 * 关键词
		 *
		 * 即当在转发时的内容、转发的内容等匹配到该关键词，那么符合判定
		 */
		keywords: string[];
		/**
		 * 关注用户
		 *
		 * 当该用户关注的用户在这里，那么符合判定
		 */
		followings: number[];
		/**
		 * 黑名单
		 *
		 * 当该用户在这里，强制符合判定
		 */
		blacklist: number[];
	};
};

export const BilibiliComponentDetectionRule = {
	$data: {
		/** 白名单用户id */
		whiteList: [] as string[],
		/** 规则数据 */
		ruleData: <BilibiliUserLabelRule[]>[],
	},
	$key: {
		STORAGE_KEY: "bili-componentDetection-rule",
	},
	/** 初始化数据 */
	init() {
		this.$data.whiteList = [];
		this.$data.ruleData = [];
		let allData = this.getData();
		allData.forEach((data) => {
			if (!data.enable) {
				// 未启用
				return;
			}
			this.$data.ruleData.push(data);
		});
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
		function generateStorageApi(data: any, handler?: (value: any) => any) {
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
			title: "成分检测",
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
						let templateData = this.getTemplateData();
						if (!isEdit) {
							// @ts-ignore
							data = templateData;
						}

						// 启用
						let enable_template = UISwitch(
							"启用",
							"enable",
							templateData.enable
						);
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
							templateData.name,
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

						// 是否显示标签名称
						let isShowDisplayName_template = UISwitch(
							"显示标签名称",
							"isShowDisplayName",
							templateData.data.isShowDisplayName
						);
						Reflect.set(
							isShowDisplayName_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $isShowDisplayName =
							popsPanelContentUtils.createSectionContainerItem_switch(
								isShowDisplayName_template
							);

						// 显示的标签名称
						let displayName_template = UIInput(
							"显示标签名称",
							"displayName",
							templateData.data.displayName,
							""
						);
						Reflect.set(
							displayName_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $displayName =
							popsPanelContentUtils.createSectionContainerItem_input(
								displayName_template
							);

						// 是否显示标签图标
						let isShowDisplayIcon_template = UISwitch(
							"显示标签图标",
							"isShowDisplayIcon",
							templateData.data.isShowDisplayIcon
						);
						Reflect.set(
							isShowDisplayIcon_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $isShowDisplayIcon =
							popsPanelContentUtils.createSectionContainerItem_switch(
								isShowDisplayIcon_template
							);

						// 显示的标签图标
						let displayIcon_template = UIInput(
							"显示的标签图标",
							"displayIcon",
							templateData.data.displayIcon,
							""
						);
						Reflect.set(
							displayIcon_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $displayIcon =
							popsPanelContentUtils.createSectionContainerItem_input(
								displayIcon_template
							);

						// 关键词
						let keywords_template = UITextArea(
							"关键词",
							"keywords",
							"",
							"",
							void 0,
							"多个关键词换行"
						);
						Reflect.set(keywords_template.props!, PROPS_STORAGE_API, {
							get(key: string, defaultValue: any) {
								// @ts-ignore
								let value = data.data[key] ?? defaultValue;
								if (typeof value === "string") {
									return value.split("\n");
								}
								return value;
							},
							set(key: string, value: any) {
								if (typeof value === "string") {
									value = value.split("\n");
								}
								// @ts-ignore
								data.data[key] = value;
							},
						});
						let $keywords =
							popsPanelContentUtils.createSectionContainerItem_textarea(
								keywords_template
							);

						// 关注的用户
						let followings_template = UITextArea(
							"关注的用户",
							"followings",
							"",
							"",
							void 0,
							"多个用户id换行"
						);
						Reflect.set(followings_template.props!, PROPS_STORAGE_API, {
							get(key: string, defaultValue: any) {
								// @ts-ignore
								let value = data.data[key] ?? defaultValue;
								if (typeof value === "string") {
									return value
										.split("\n")
										.map((it: string) => Number(it))
										.filter((it: number) => !isNaN(it));
								}
								return value;
							},
							set(key: string, value: any) {
								if (typeof value === "string") {
									value = value
										.split("\n")
										.map((it: string) => Number(it))
										.filter((it: number) => !isNaN(it));
								}
								// @ts-ignore
								data.data[key] = value;
							},
						});
						let $followings =
							popsPanelContentUtils.createSectionContainerItem_textarea(
								followings_template
							);

						// 黑名单
						let blacklist_template = UITextArea(
							"黑名单",
							"blacklist",
							"",
							"",
							void 0,
							"多个用户id换行"
						);
						Reflect.set(blacklist_template.props!, PROPS_STORAGE_API, {
							get(key: string, defaultValue: any) {
								// @ts-ignore
								let value = data.data[key] ?? defaultValue;
								if (typeof value === "string") {
									return value
										.split("\n")
										.map((it: string) => Number(it))
										.filter((it: number) => !isNaN(it));
								}
								return value;
							},
							set(key: string, value: any) {
								if (typeof value === "string") {
									value = value
										.split("\n")
										.map((it: string) => Number(it))
										.filter((it: number) => !isNaN(it));
								}
								// @ts-ignore
								data.data[key] = value;
							},
						});
						let $blacklist =
							popsPanelContentUtils.createSectionContainerItem_textarea(
								blacklist_template
							);

						$fragment.append(
							$enable,
							$name,
							$isShowDisplayName,
							$displayName,
							$isShowDisplayIcon,
							$displayIcon,
							$keywords,
							$followings,
							$blacklist
						);
						return $fragment;
					},
					onsubmit: ($form, isEdit, editData) => {
						// 提交表单
						let $ulist_li = $form.querySelectorAll<HTMLLIElement>(
							".rule-form-ulist > li"
						);
						let data: BilibiliUserLabelRule = this.getTemplateData();
						if (isEdit) {
							data.uuid = editData!.uuid;
						}
						try {
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
						} catch (error) {
							log.error(error);
							return {
								success: false,
								data: data,
							};
						} finally {
							this.init();
						}
					},
					style: /*css*/ `
                    .pops-panel-textarea textarea{
                        height: 150px;
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
		});
		ruleView.showView();
	},
	/**
	 * 获取模板数据
	 */
	getTemplateData(): BilibiliUserLabelRule {
		return {
			uuid: utils.generateUUID(),
			enable: true,
			name: "",
			data: {
				isShowDisplayIcon: true,
				displayIcon: "",
				isShowDisplayName: true,
				displayName: "",
				keywords: [],
				blacklist: [],
				followings: [],
			},
		};
	},
	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<BilibiliUserLabelRule[]>(this.$key.STORAGE_KEY, []);
	},
	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: BilibiliUserLabelRule[]) {
		GM_setValue(this.$key.STORAGE_KEY, data);
	},
	/**
	 * 添加数据
	 * @param data
	 */
	addData(data: BilibiliUserLabelRule) {
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
	updateData(data: BilibiliUserLabelRule) {
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
	deleteData(data: BilibiliUserLabelRule) {
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
	 * 导出规则
	 */
	exportRule(fileName = "rule.json") {
		let allRule = this.getData();
		let blob = new Blob([JSON.stringify(allRule, null, 4)]);
		let blobUrl = window.URL.createObjectURL(blob);
		let $a = document.createElement("a");
		$a.href = blobUrl;
		$a.download = fileName;
		$a.click();
		setTimeout(() => {
			window.URL.revokeObjectURL(blobUrl);
		}, 1500);
	},
	/**
	 * 导入规则
	 */
	importRule() {
		let $alert = pops.alert({
			title: {
				text: "请选择导入方式",
				position: "center",
			},
			content: {
				text: /*html*/ `
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,
				html: true,
			},
			width: PanelUISize.info.width,
			height: PanelUISize.info.height,
			style: /*css*/ `
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `,
		});
		let $local = $alert.$shadowRoot.querySelector<HTMLElement>(
			".import-mode[data-mode='local']"
		)!;
		let $network = $alert.$shadowRoot.querySelector<HTMLElement>(
			".import-mode[data-mode='network']"
		)!;
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
					let data = utils.toJSON(fileReader.result as string);
					if (!Array.isArray(data)) {
						log.error("不是正确的规则文件", data);
						Qmsg.error("不是正确的规则文件");
						return;
					}
					this.setData(data);
					Qmsg.success(`成功导入 ${data.length}条规则`);
				};
				fileReader.readAsText(uploadFile, "UTF-8");
			});
			$input.click();
		});
		DOMUtils.on($network, "click", (event) => {
			utils.preventEvent(event);
			$alert.close();
			pops.prompt({
				title: {
					text: "网络导入",
					position: "center",
				},
				content: {
					text: "",
					placeholder: "url",
					focus: true,
				},
				btn: {
					ok: {
						callback: async (eventDetails, event) => {
							let url = eventDetails.text;
							if (utils.isNull(url)) {
								Qmsg.error("请填入完整的url");
								return;
							}
							let response = await httpx.get(url);
							if (!response.status) {
								return;
							}
							let data = utils.toJSON(response.data.responseText);
							if (!Array.isArray(data)) {
								log.error("不是正确的规则文件", response, data);
								Qmsg.error("不是正确的规则文件");
								return;
							}
							this.setData(data);
							eventDetails.close();
							Qmsg.success(`成功导入 ${data.length}条规则`);
						},
					},
				},
				width: PanelUISize.info.width,
				height: "auto",
			});
		});
	},
};
