import { $$, DOMUtils, httpx, log, pops, utils } from "@/env";
import { UIInput } from "@/setting/common-components/ui-input";
import { UISelect } from "@/setting/common-components/ui-select";
import { UISelectMultiple } from "@/setting/common-components/ui-select-multiple";
import { UISwitch } from "@/setting/common-components/ui-switch";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@/setting/config";
import { RuleView } from "@/utils/RuleView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import {
	DouYinVideoFilterBase,
	type DouYinVideoAwemeInfo,
	type DouYinVideoHandlerInfo,
} from "./DouYinVideoFilterBase";
import { PopsPanel } from "@/setting/setting";
import { DouYinNetWorkHook } from "@/hook/DouYinNetWorkHook";
import { CommonUtil } from "@/utils/CommonUtil";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinElement } from "@/utils/DouYinElement";
import { PanelUISize } from "@/setting/panel-ui-size";

type DouYinVideoFilterOptionScope =
	| "all"
	| "xhr-tab"
	| "dom-search"
	| "xhr-channel"
	| "xhr-follow"
	| "xhr-familiar"
	| "xhr-module";

export type DouYinVideoFilterOption = {
	/** 是否启用 */
	enable: boolean;
	/** 唯一uuid */
	uuid: string;
	/** 规则名 */
	name: string;
	/** 配置的数据 */
	data: {
		/** 作用域（让规则在哪个下面生效） */
		scope: DouYinVideoFilterOptionScope[];
		/** 属性名 */
		ruleName: string;
		/** 属性值 */
		ruleValue: string;
	};
};

export const DouYinVideoFilter = {
	$key: {
		STORAGE_KEY: "dy-video-filter-rule",
		ENABLE_KEY: "shieldVideo-exec-network-enable",
	},
	init() {
		this.execFilter();
	},
	/**
	 * 执行过滤
	 */
	execFilter() {
		const that = this;
		PopsPanel.execMenuOnce(this.$key.ENABLE_KEY, () => {
			log.info(`执行视频过滤器`);
			let filterBase = new DouYinVideoFilterBase();
			/**
			 * 获取作用域的规则
			 */
			let getScopeFilterOptionList = (
				scopeName: DouYinVideoFilterOptionScope | DouYinVideoFilterOptionScope[]
			) => {
				if (!PopsPanel.getValue(that.$key.ENABLE_KEY)) {
					return [];
				}
				let filterOptionList = that.getData();
				if (!filterOptionList.length) {
					// 无规则，不过滤
					return [];
				}
				let scopeNameList = Array.isArray(scopeName) ? scopeName : [scopeName];
				let matchedFilterOptionList = filterOptionList.filter(
					(it) =>
						it.enable &&
						(it.data.scope.includes("all") ||
							Array.from(scopeNameList).findIndex((item) =>
								it.data.scope.includes(
									item as any as DouYinVideoFilterOptionScope
								)
							) !== -1)
				);
				return matchedFilterOptionList;
			};
			DouYinNetWorkHook.ajaxHooker.hook((request) => {
				let url = CommonUtil.fixUrl(request.url);
				let urlInstance = new URL(url);
				if (urlInstance.pathname.startsWith("/aweme/v1/web/tab/feed")) {
					// 推荐
					request.response = (response) => {
						let filterOptionList = getScopeFilterOptionList("xhr-tab");
						if (!filterOptionList.length) {
							return;
						}
						let data = utils.toJSON(response.responseText);
						let aweme_list = data["aweme_list"];
						if (Array.isArray(aweme_list)) {
							for (let index = 0; index < aweme_list.length; index++) {
								let awemeInfo = aweme_list[index] || {};
								let flag = filterBase.checkAwemeInfoIsFilter(
									filterOptionList,
									awemeInfo
								);
								if (flag) {
									filterBase.removeAweme(aweme_list, index--);
								}
							}
							if (import.meta.hot) {
								console.log(aweme_list);
							}
							response.responseText = JSON.stringify(data);
						}
					};
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/follow/feed") ||
					urlInstance.pathname.startsWith("/aweme/v1/web/familiar/feed")
				) {
					// 关注
					// 朋友
					request.response = (response) => {
						let filterOptionList = getScopeFilterOptionList([
							"xhr-follow",
							"xhr-familiar",
						]);
						if (!filterOptionList.length) {
							return;
						}
						let data = utils.toJSON(response.responseText);
						let aweme_list = data["data"];
						if (Array.isArray(aweme_list)) {
							for (let index = 0; index < aweme_list.length; index++) {
								let awemeItem = aweme_list[index];
								let awemeInfo = awemeItem["aweme"] || {};
								// 如果cell_room不为空，这时候aweme是空的
								if (
									typeof awemeItem?.["cell_room"] === "object" &&
									awemeItem?.["cell_room"] != null
								) {
									awemeInfo["cell_room"] = awemeItem?.["cell_room"];
								}
								let flag = filterBase.checkAwemeInfoIsFilter(
									filterOptionList,
									awemeInfo
								);
								if (flag) {
									filterBase.removeAweme(aweme_list, index--);
								}
							}
							if (import.meta.hot) {
								console.log(aweme_list);
							}
							response.responseText = JSON.stringify(data);
						}
					};
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/module/feed")
				) {
					// 精选
					// 游戏、二次元、音乐、美食、知识、体育从左侧边栏迁移到了这里面
					request.response = (response) => {
						let filterOptionList = getScopeFilterOptionList("xhr-module");
						if (!filterOptionList.length) {
							return;
						}
						let data = utils.toJSON(response.responseText);
						let cards = data["cards"];
						if (Array.isArray(cards)) {
							for (let index = 0; index < cards.length; index++) {
								let awemeItem = cards[index];
								let awemeInfo = utils.toJSON(awemeItem?.["aweme"] || "{}");
								let flag = filterBase.checkAwemeInfoIsFilter(
									filterOptionList,
									awemeInfo
								);
								if (flag) {
									filterBase.removeAweme(cards, index--);
								}
							}
							if (import.meta.hot) {
								console.log(cards);
							}
							response.responseText = JSON.stringify(data);
						}
					};
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/channel/feed")
				) {
					// 知识、美食、二次元
					request.response = (response) => {
						let filterOptionList = getScopeFilterOptionList("xhr-channel");
						if (!filterOptionList.length) {
							return;
						}
						let data = utils.toJSON(response.responseText);
					};
				}
			});

			// 搜索页面的api过于乱，采用元素过滤
			if (DouYinRouter.isSearch()) {
				DOMUtils.ready(() => {
					DouYinElement.watchFeedVideoListChange(($os, observer) => {
						if (!DouYinRouter.isSearch()) {
							// 必须是在搜索页面
							return;
						}
						let filterOptionList = getScopeFilterOptionList("dom-search");
						if (!filterOptionList.length) {
							return;
						}
						let $awemeInfoList = Array.from(
							$$<HTMLLIElement>(
								'#search-content-area ul[data-e2e="scroll-list"] li'
							)
						);
						for (let index = 0; index < $awemeInfoList.length; index++) {
							const $li = $awemeInfoList[index];
							if ($awemeInfoList.length === 2) {
								break;
							}
							if (!document.contains($li)) {
								continue;
							}
							let reactProps = utils.getReactObj($li)?.reactProps;
							if (reactProps == null) {
								log.error("search-result ==> 元素上不存在reactProps属性", $li);
								continue;
							}
							let awemeInfo = reactProps?.children?.props?.data
								?.awemeInfo as DouYinVideoAwemeInfo;
							if (awemeInfo == null) {
								log.error("search-result ==> 元素上不存在awemeInfo属性", $li);
								continue;
							}
							let flag = filterBase.checkAwemeInfoIsFilter(
								filterOptionList,
								awemeInfo
							);
							if (flag) {
								filterBase.removeAweme($awemeInfoList, index--);
							}
						}
					});
				});
			}
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
			title: "视频过滤器",
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

						// 作用域
						let scope_template = UISelectMultiple<DouYinVideoFilterOptionScope>(
							"作用域",
							"scope",
							[],
							[
								{
									text: "所有",
									value: "all",
								},
								{
									text: "精选",
									value: "xhr-module",
								},
								{
									text: "推荐",
									value: "xhr-tab",
								},
								{
									text: "关注",
									value: "xhr-follow",
								},
								{
									text: "朋友",
									value: "xhr-familiar",
								},
								{
									text: "搜索",
									value: "dom-search",
								},
							],
							void 0,
							"选择需要在xxx上生效的作用域"
						);
						Reflect.set(
							scope_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $scope =
							popsPanelContentUtils.createSectionContainerItem_select_multiple_new(
								scope_template
							);
						// 属性名
						let ruleName_template = UISelect<keyof DouYinVideoHandlerInfo>(
							"属性名",
							"ruleName",
							"nickname",
							[
								{
									text: "isLive",
									value: "isLive",
								},
								{
									text: "isAds",
									value: "isAds",
								},
								{
									text: "nickname",
									value: "nickname",
								},
								{
									text: "uid",
									value: "uid",
								},
								{
									text: "desc",
									value: "desc",
								},
								{
									text: "textExtra",
									value: "textExtra",
								},
								{
									text: "videoTag",
									value: "videoTag",
								},
								{
									text: "collectCount",
									value: "collectCount",
								},
								{
									text: "commentCount",
									value: "commentCount",
								},
								{
									text: "diggCount",
									value: "diggCount",
								},
								{
									text: "shareCount",
									value: "shareCount",
								},
								{
									text: "duration",
									value: "duration",
								},
							],
							void 0,
							"可正则，注意转义"
						);
						Reflect.set(
							ruleName_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);

						let $ruleName =
							popsPanelContentUtils.createSectionContainerItem_select(
								ruleName_template
							);

						let ruleValue_template = UIInput(
							"属性值",
							"ruleValue",
							"",
							"如果是字符串，可正则，注意转义",
							void 0
						);
						Reflect.set(
							ruleValue_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $ruleValue =
							popsPanelContentUtils.createSectionContainerItem_input(
								ruleValue_template
							);

						$fragment.append($enable, $name, $scope, $ruleName, $ruleValue);
						return $fragment;
					},
					onsubmit: ($form, isEdit, editData) => {
						// 提交表单
						let $ulist_li = $form.querySelectorAll<HTMLLIElement>(
							".rule-form-ulist > li"
						);
						let data: DouYinVideoFilterOption = this.getTemplateData();
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
							} else if (Reflect.has(data["data"], key)) {
								Reflect.set(data["data"], key, value);
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
						if (data.data.scope.length === 0) {
							Qmsg.error("作用域不能为空");
							return {
								success: false,
								data: data,
							};
						}
						if (data.data.ruleName.trim() === "") {
							Qmsg.error("规则键不能为空");
							return {
								success: false,
								data: data,
							};
						}
						if (data.data.ruleValue.trim() === "") {
							Qmsg.error("规则值不能为空");
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
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
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
							name: "过滤已启用",
							filterCallBack(data) {
								return data.enable;
							},
						},
						{
							name: "过滤未启用",
							filterCallBack(data) {
								return !data.enable;
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
	getTemplateData(): DouYinVideoFilterOption {
		return {
			uuid: utils.generateUUID(),
			enable: true,
			name: "",
			data: {
				scope: [],
				ruleName: "",
				ruleValue: "",
			},
		};
	},
	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<DouYinVideoFilterOption[]>(this.$key.STORAGE_KEY, []);
	},
	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: DouYinVideoFilterOption[]) {
		GM_setValue(this.$key.STORAGE_KEY, data);
	},
	/**
	 * 添加数据
	 * @param data
	 */
	addData(data: DouYinVideoFilterOption) {
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
	updateData(data: DouYinVideoFilterOption) {
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
	deleteData(data: DouYinVideoFilterOption) {
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
