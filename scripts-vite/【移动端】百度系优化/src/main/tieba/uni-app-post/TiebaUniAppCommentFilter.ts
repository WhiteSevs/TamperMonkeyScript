import { $$, DOMUtils, log, pops, utils } from "@/env";
import { UIInput } from "@components/setting/components/ui-input";
import { UISwitch } from "@components/setting/components/ui-switch";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@components/setting/panel-config";
import { RuleView } from "@components/utils/RuleView";
import { VueUtils } from "@components/utils/VueUtils";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

type CommentFilterOption = {
	/** 是否启用 */
	enable: boolean;
	/** 唯一uuid */
	uuid: string;
	/** 规则名 */
	name: string;
	/** 作者id */
	author_id: string;
	/** 作者显示名字 */
	author_nameShow: string;
	/** 回复的内容 */
	content: string;
};

export const TiebaUniAppCommentFilter = {
	$key: {
		STORAGE_KEY: "baidu-tieba-uni-app-comment-filter-rule",
	},
	init() {
		this.execFilter();
	},
	/**
	 * 执行过滤
	 */
	execFilter() {
		let filterRule = this.getData();
		if (!filterRule.length) {
			return;
		}
		log.success(`评论过滤器-启动！`);
		let lockFn = new utils.LockFunction(() => {
			let $commentGroupList = Array.from(
				$$<HTMLElement>("uni-app .comment-group")
			);
			$commentGroupList.forEach(($commentGroup) => {
				let vueIns = VueUtils.getVue($commentGroup);
				if (!vueIns) {
					return;
				}
				const sectionData: any[] = vueIns?.sectionData;
				if (!Array.isArray(sectionData)) {
					return;
				}
				for (
					let sectionDataIndex = 0;
					sectionDataIndex < sectionData.length;
					sectionDataIndex++
				) {
					const commentInfo = sectionData[sectionDataIndex];
					const commentData = {
						/** 用户id */
						author_id: (
							commentInfo?.author_id || commentInfo?.author?.id
						).toString(),
						/** 用户显示的名字 */
						nameShow: commentInfo?.author?.name_show,
						/** 用户发布的内容 */
						content: "",
						/** 楼层 */
						floor: commentInfo?.floor,
					};
					if (Array.isArray(commentInfo.content)) {
						commentInfo.content.forEach((item: any) => {
							if (item.type === 0 && typeof item.text === "string") {
								commentData.content += item.text;
							}
						});
					}
					let findRule = filterRule.find((rule) => {
						if (!rule.enable) {
							return;
						}
						let flag = true;
						if (rule.author_id.trim() !== "") {
							flag = flag && commentData.author_id == rule.author_id;
						}
						if (rule.author_nameShow.trim() !== "") {
							flag =
								flag &&
								typeof commentData.nameShow === "string" &&
								Boolean(
									commentData.nameShow.match(new RegExp(rule.author_nameShow))
								);
						}
						if (rule.content.trim() !== "") {
							flag =
								flag &&
								commentData.content !== "" &&
								Boolean(commentData.content.match(new RegExp(rule.content)));
						}
						return flag;
					});
					if (findRule) {
						// 隐藏
						Array.from<HTMLElement>(
							$commentGroup.querySelectorAll(".comment-item")
						).find(($commentItem, elIndex) => {
							if (elIndex === sectionDataIndex) {
								if (!$commentItem.hasAttribute("data-hide")) {
									$commentItem.setAttribute("data-hide", "");
									DOMUtils.hide($commentItem, false);
									log.success(`过滤评论`, findRule, commentData);
								}
								return true;
							}
						});
					}
				}
			});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			callback: () => {
				lockFn.run();
			},
		});
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
			title: "评论过滤器",
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
							panelHandlerComponents.createSectionContainerItem_switch(
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
							panelHandlerComponents.createSectionContainerItem_input(
								name_template
							);

						// 用户id
						let author_id_template = UIInput(
							"用户id",
							"author_id",
							"",
							"",
							void 0,
							"完全匹配"
						);
						Reflect.set(
							author_id_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data)
						);
						let $author_id =
							panelHandlerComponents.createSectionContainerItem_input(
								author_id_template
							);
						// 用户显示的名字
						let author_nameShow_template = UIInput(
							"用户名",
							"author_nameShow",
							"",
							"",
							void 0,
							"可正则，注意转义"
						);
						Reflect.set(
							author_nameShow_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data)
						);

						let $author_nameShow =
							panelHandlerComponents.createSectionContainerItem_input(
								author_nameShow_template
							);

						let content_template = UIInput("内容", "content", "", "", void 0);
						Reflect.set(
							content_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data)
						);
						let $content =
							panelHandlerComponents.createSectionContainerItem_input(
								content_template
							);

						$fragment.append(
							$enable,
							$name,
							$author_id,
							$author_nameShow,
							$content
						);
						return $fragment;
					},
					onsubmit: ($form, isEdit, editData) => {
						// 提交表单
						let $ulist_li = $form.querySelectorAll<HTMLLIElement>(
							".rule-form-ulist > li"
						);
						let data: CommentFilterOption = this.getTemplateData();
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
						if (
							data.author_id.trim() === "" &&
							data.author_nameShow.trim() === "" &&
							data.content.trim() === ""
						) {
							Qmsg.error("用户id、用户名、内容必须填一个");
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
	getTemplateData(): CommentFilterOption {
		return {
			uuid: utils.generateUUID(),
			enable: true,
			name: "",
			author_id: "",
			author_nameShow: "",
			content: "",
		};
	},
	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<CommentFilterOption[]>(this.$key.STORAGE_KEY, []);
	},
	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: CommentFilterOption[]) {
		GM_setValue(this.$key.STORAGE_KEY, data);
	},
	/**
	 * 添加数据
	 * @param data
	 */
	addData(data: CommentFilterOption) {
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
	updateData(data: CommentFilterOption) {
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
	deleteData(data: CommentFilterOption) {
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
