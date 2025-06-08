import { DOMUtils, httpx, log, pops, utils } from "@/env";
import { Router } from "@/router/router";
import { UIInput } from "@/setting/components/ui-input";
import { UISwitch } from "@/setting/components/ui-switch";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@/setting/panel-config";
import { ElementUtils } from "@/utils/ElementUtils";
import { RuleView } from "@/utils/RuleView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

type ReminderOption = {
	/** 是否启用 @default true */
	enable: boolean;
	/** 唯一uuid */
	uuid: string;
	/** 规则名称 */
	name: string;
	/** 商品名 */
	productName: string;
};

type ProductInfo = {
	/** 商品名 */
	name: string;
	/** 商品价格（金币） */
	price: string;
	/** 结束时间 */
	endTime: string;
	/** 剩余数量 */
	remainingQuantity: number;
};

export const MTProductListingReminder = {
	$key: {
		STORAGE_KEY: "mt-productListingReminder-rule",
	},
	init() {
		this.registerMenu();
		this.runRule();
	},
	/**
	 * 注册菜单
	 */
	registerMenu() {
		ElementUtils.registerLeftMenu({
			name: "商品上架提醒",
			icon: "",
			iconColor: "#2376b7",
			callback: () => {
				this.showView();
			},
		});
	},
	/**
	 * 执行规则
	 */
	async runRule() {
		/**
		 * 获取当前积分商城的所有商品
		 */
		async function getCurrentProduct() {
			let response = await httpx.get(
				"/keke_integralmall-keke_integralmall.html",
				{
					fetch: true,
					allowInterceptConfig: false,
				}
			);
			if (!response.status) {
				Qmsg.error("【积分商城】获取数据失败");
				return;
			}

			let productInfoList: ProductInfo[] = [];
			let doc = DOMUtils.parseHTML(response.data.responseText, true, true);
			doc
				.querySelectorAll<HTMLLIElement>(".task-list-wrapper li.col-xs-12")
				.forEach(($taskList) => {
					productInfoList.push({
						name:
							DOMUtils.text(
								$taskList.querySelector<HTMLElement>(
									".mall-info a > *:first-child"
								)!
							) ||
							DOMUtils.text(
								$taskList.querySelector<HTMLElement>(".mall-info a")!
							),
						price: DOMUtils.text(
							$taskList.querySelector<HTMLElement>(
								".mall-info span.discount-price i"
							)!
						),
						endTime: DOMUtils.text(
							$taskList.querySelector<HTMLElement>(
								".mall-info #time_hz span.time"
							)!
						),
						remainingQuantity: parseInt(
							$taskList
								.querySelector<HTMLElement>(".mall-info .mall-count .count-r")
								?.innerText?.replace(/仅剩|件/gi, "") || "0"
						),
					});
				});

			return productInfoList;
		}

		if (Router.isPointsMall()) {
			// 不在积分商城内进行提示
			return;
		}
		let allData = this.getData();
		if (!allData.length) {
			// 未设置提醒
			return;
		}

		let productList = await getCurrentProduct();
		if (!productList) {
			return;
		}
		for (const productItem of productList) {
			for (const reminderOption of allData) {
				if (
					reminderOption.enable &&
					productItem["name"].match(
						new RegExp(reminderOption["productName"], "i")
					) &&
					!isNaN(productItem["remainingQuantity"]) &&
					productItem["remainingQuantity"] > 0
				) {
					log.success(`成功匹配对应商品`, reminderOption, productItem);
					pops.confirm({
						title: {
							text: "积分商城提醒",
							position: "center",
						},
						content: {
							text: /*html*/ `<br />
                            您设置的商品已上架在积分商城中，当前售价 ${productItem["price"]}金币，仅剩${productItem["remainingQuantity"]}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,
							html: true,
						},
						btn: {
							merge: true,
							position: "space-between",
							other: {
								enable: true,
								type: "danger",
								text: "删除提醒",
								callback: () => {
									let status = this.deleteData(reminderOption);
									if (status) {
										Qmsg.success("删除成功");
									} else {
										Qmsg.error("删除失败");
									}
								},
							},
							ok: {
								text: "前往购买",
								callback: () => {
									window.location.href = `${window.location.origin}/keke_integralmall-keke_integralmall.html`;
								},
							},
						},
						width: "300px",
						height: "300px",
					});
					return;
				}
			}
		}
	},
	/**
	 * 获取模板数据
	 */
	getTemplateData(): ReminderOption {
		return {
			uuid: utils.generateUUID(),
			enable: true,
			name: "",
			productName: "",
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
			title: "商品上架提醒",
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

						// 用户名
						let productName_template = UIInput(
							"商品名",
							"productName",
							"",
							"",
							void 0,
							"可正则，需手动转义"
						);
						Reflect.set(
							productName_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data)
						);
						let $productName =
							popsPanelContentUtils.createSectionContainerItem_input(
								productName_template
							);

						$fragment.append($enable, $name, $productName);
						return $fragment;
					},
					onsubmit: ($form, isEdit, editData) => {
						// 提交表单
						let $ulist_li = $form.querySelectorAll<HTMLLIElement>(
							".rule-form-ulist > li"
						);
						let data = this.getTemplateData();
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
		});
		ruleView.showView();
	},

	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<ReminderOption[]>(this.$key.STORAGE_KEY, []);
	},
	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: ReminderOption[]) {
		GM_setValue(this.$key.STORAGE_KEY, data);
	},
	/**
	 * 添加数据
	 * @param data
	 */
	addData(data: ReminderOption) {
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
	updateData(data: ReminderOption) {
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
	deleteData(data: ReminderOption) {
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
