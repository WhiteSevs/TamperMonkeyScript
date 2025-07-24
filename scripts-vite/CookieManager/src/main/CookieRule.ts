import { DOMUtils, GM_Menu, httpx, log, pops, utils } from "@/env";
import { UIInput } from "@components/setting/components/ui-input";
import { UISelect } from "@components/setting/components/ui-select";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UITextArea } from "@components/setting/components/ui-textarea";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@components/setting/panel-config";
import { PanelUISize } from "@components/setting/panel-ui-size";
import { RuleView } from "@components/utils/RuleView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import {
	CookieManagerApiNameList,
	type CookieManagerApiName,
} from "./CookieManagerService";
import { CookieManager } from "./CookieManager";

export type CookieRuleData = {
	/** 唯一uuid */
	uuid: string;
	/** 是否启用 */
	enable: boolean;
	/** 规则名 */
	name: string;
	data: {
		/** 使用的api名，默认使用当前全局的Api */
		execApiName?: "use-global" | CookieManagerApiName;
		/** 匹配的网站 */
		url: string;
		/** 是否使用正则来匹配网站 */
		enableRegExpToMatchUrl: boolean;
		/** 匹配的Cookie名 */
		cookieName: string;
		/** 是否使用正则来匹配Cookie名 */
		enableRegExpToMatchCookieName: boolean;
		/** 对Cookie使用的操作模式，删除|延长 */
		operationMode:
			| "delete"
			| "extended"
			| "extended-90"
			| "extended-180"
			| "extended-360";
		/** 备注 */
		remark: string;
	};
};

export const CookieRule = {
	$key: {
		STORAGE_KEY: "cookie-rule",
	},
	$data: {
		/** 匹配到的规则数据 */
		matchedRuleList: <CookieRuleData[]>[],
	},
	/** 初始化数据 */
	init() {
		this.$data.matchedRuleList = [];
		this.$data.matchedRuleList = this.getMatchedRuleList();
		// 注册菜单
		GM_Menu.add({
			key: "matched-cookie-rule-list",
			text: `${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,
			isStoreValue: false,
			autoReload: false,
			showText(text, enable) {
				return text;
			},
			callback(data) {
				console.log(CookieRule.$data.matchedRuleList);
				alert(
					"以下是命中的规则名：\n" +
						CookieRule.$data.matchedRuleList.map((it) => it.name).join("\n")
				);
			},
		});
	},
	/**
	 * 获取匹配的规则
	 */
	getMatchedRuleList(url = window.location.href) {
		let allData = this.getData();
		let matchedRuleList: CookieRuleData[] = [];
		allData.forEach((data) => {
			if (!data.enable) {
				// 未启用
				return;
			}
			let url = window.location.href;
			let ruleUrl = data.data.url;
			let enableRegExpToMatchUrl = data.data.enableRegExpToMatchUrl;
			if (enableRegExpToMatchUrl) {
				// 正则匹配网址
				let regExpUrl = new RegExp(ruleUrl, "i");
				if (!regExpUrl.test(url)) {
					return;
				}
			} else {
				// 普通字符匹配网址
				if (!url.includes(ruleUrl)) {
					return;
				}
			}
			matchedRuleList.push(data);
		});
		return matchedRuleList;
	},
	/**
	 * 显示视图
	 */
	showView() {
		const that = this;
		let panelHandlerComponents = pops.config.PanelHandlerComponents();
		/**
		 * 自定义存储api的配置
		 * @param uuid
		 */
		function generateStorageApi(data: any, handler?: (value: any) => any) {
			return {
				get(key: string, defaultValue: any) {
					return Reflect.get(data, key) ?? defaultValue;
				},
				set(key: string, value: any) {
					Reflect.set(data, key, value);
				},
			};
		}
		/**
		 * 当前网站匹配的规则
		 */
		const matchedRuleList = this.getMatchedRuleList();
		let ruleView = new RuleView({
			title: "Cookie规则",
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
							panelHandlerComponents.createSectionContainerItem_switch(
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
							panelHandlerComponents.createSectionContainerItem_input(
								name_template
							);

						// 执行的Api
						let apiName_template = UISelect<
							NonNullable<CookieRuleData["data"]["execApiName"]>
						>(
							"Cookie管理Api",
							"execApiName",
							templateData.data.execApiName!,
							[
								{
									text: "（当前）" + CookieManager.cookieManagerApiName,
									value: "use-global",
								},
								...CookieManagerApiNameList.map((it) => {
									return {
										text: it,
										value: it,
									};
								}),
							],
							void 0,
							"操作Cookie的Api函数"
						);
						Reflect.set(
							apiName_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $apiName =
							panelHandlerComponents.createSectionContainerItem_select(
								apiName_template
							);

						// 匹配的网址
						let url_template = UIInput(
							"网址",
							"url",
							templateData.data.url,
							"用于执行该规则的网址",
							void 0,
							"必填"
						);
						Reflect.set(
							url_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $url =
							panelHandlerComponents.createSectionContainerItem_input(
								url_template
							);

						// 使用正则来匹配网址
						let enableRegExpToMatchUrl_template = UISwitch(
							"启用正则匹配网址",
							"enableRegExpToMatchUrl",
							templateData.data.enableRegExpToMatchUrl
						);
						Reflect.set(
							enableRegExpToMatchUrl_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $enableRegExpToMatchUrl =
							panelHandlerComponents.createSectionContainerItem_switch(
								enableRegExpToMatchUrl_template
							);

						// Cookie名称
						let cookieName_template = UIInput(
							"Cookie名称",
							"cookieName",
							templateData.data.cookieName,
							"用于匹配执行操作的Cookie名",
							void 0,
							"必填"
						);
						Reflect.set(
							cookieName_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $cookieName =
							panelHandlerComponents.createSectionContainerItem_input(
								cookieName_template
							);

						// 显示的标签图标
						let enableRegExpToMatchCookieName_template = UISwitch(
							"启用正则匹配Cookie名称",
							"enableRegExpToMatchCookieName",
							templateData.data.enableRegExpToMatchCookieName
						);
						Reflect.set(
							enableRegExpToMatchCookieName_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $enableRegExpToMatchCookieName =
							panelHandlerComponents.createSectionContainerItem_switch(
								enableRegExpToMatchCookieName_template
							);

						let operationMode_template = UISelect(
							"操作模式",
							"operationMode",
							templateData.data.operationMode,
							[
								{
									value: "delete",
									text: "删除Cookie",
								},
								{
									value: "extended",
									text: "自动延长Cookie有效期30天",
								},
								{
									value: "extended-90",
									text: "自动延长Cookie有效期90天",
								},
								{
									value: "extended-180",
									text: "自动延长Cookie有效期180天",
								},
								{
									value: "extended-360",
									text: "自动延长Cookie有效期360天",
								},
							]
						);
						Reflect.set(
							operationMode_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $operationMode =
							panelHandlerComponents.createSectionContainerItem_select(
								operationMode_template
							);

						let remark_template = UITextArea(
							"备注",
							"remark",
							templateData.data.remark
						);
						Reflect.set(
							remark_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $remark =
							panelHandlerComponents.createSectionContainerItem_textarea(
								remark_template
							);

						$fragment.append(
							$enable,
							$name,
							$apiName,
							$url,
							$enableRegExpToMatchUrl,
							$cookieName,
							$enableRegExpToMatchCookieName,
							$operationMode,
							$remark
						);
						return $fragment;
					},
					onsubmit: ($form, isEdit, editData) => {
						// 提交表单
						let $ulist_li = $form.querySelectorAll<HTMLLIElement>(
							".rule-form-ulist > li"
						);
						let data: CookieRuleData = this.getTemplateData();
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
							if (data.data.url.trim() === "") {
								Qmsg.error("网址不能为空");
								return {
									success: false,
									data: data,
								};
							}
							if (data.data.cookieName.trim() === "") {
								Qmsg.error("Cookie名称不能为空");
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
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
						max-width: 100px;
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
							name: "过滤-已启用",
							filterCallBack(data) {
								return data.enable;
							},
						},
						{
							name: "过滤-未启用",
							filterCallBack(data) {
								return !data.enable;
							},
						},
						{
							name: "过滤-当前网站执行",
							filterCallBack(data) {
								return matchedRuleList.some((it) => it.uuid === data.uuid);
							},
						},
					],
				},
			},
		});
		ruleView.showView();
	},
	/**
	 * 获取模板数据
	 */
	getTemplateData(): CookieRuleData {
		return {
			uuid: utils.generateUUID(),
			enable: true,
			name: "",
			data: {
				url: "",
				execApiName: "use-global",
				enableRegExpToMatchUrl: false,
				cookieName: "",
				enableRegExpToMatchCookieName: false,
				operationMode: "delete",
				remark: "",
			},
		};
	},
	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<CookieRuleData[]>(this.$key.STORAGE_KEY, []);
	},
	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: CookieRuleData[]) {
		GM_setValue(this.$key.STORAGE_KEY, data);
	},
	/**
	 * 添加数据
	 * @param data
	 */
	addData(data: CookieRuleData) {
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
	updateData(data: CookieRuleData) {
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
	deleteData(data: CookieRuleData) {
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
		let $a = DOMUtils.createElement("a");
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
