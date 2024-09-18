import { DOMUtils, log, pops, utils } from "@/env";
import Qmsg from "qmsg";
import { GM_getValue, GM_setValue } from "ViteGM";
import { NetDiskUI } from "../NetDiskUI";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDisk } from "@/main/NetDisk";

export const NetDiskView_accessCodeRule = {
	/**
	 * 弹窗的className
	 */
	accessCodeRuleDialogClassName: "whitesevPopNetDiskAccessCodeRule",
	/**
	 * 显示弹窗
	 */
	show() {
		let that = this;
		let popsConfirm = NetDiskPops.confirm(
			{
				title: {
					text: "自定义访问码规则",
					position: "center",
				},
				content: {
					text: /*html*/ `
                    <div class="netdisk-accesscode-rule-table">
                        <ul>
                        ${that.getShowItemHTML()}
                        </ul>
                    </div>
                    `,
					html: true,
				},
				btn: {
					merge: true,
					reverse: false,
					position: "space-between",
					ok: {
						enable: true,
						text: "添加",
						callback(event) {
							// @ts-ignore
							that.showRule(event);
						},
					},
					close: {
						callback(event) {
							event.close();
						},
					},
					cancel: {
						enable: true,
					},
					other: {
						enable: true,
						type: "xiaomi-primary",
						text: `清空所有`,
						callback(event) {
							NetDiskPops.confirm({
								title: {
									text: "删除",
									position: "center",
								},
								content: {
									text: "确定清空所有的规则？",
									html: false,
								},
								btn: {
									ok: {
										enable: true,
										callback: function (okEvent) {
											log.success("清空所有");
											that.deleteAllValue();
											if (that.getValue().length) {
												Qmsg.error("清空全部规则失败");
												return;
											} else {
												Qmsg.success("已清空全部规则");
											}
											that.setDeleteAllBtnText(event.animElement);
											event.animElement.querySelector<HTMLUListElement>(
												".pops-confirm-content ul"
											)!.innerHTML = "";
											okEvent.close();
										},
									},
									cancel: {
										text: "取消",
										enable: true,
									},
								},
							});
						},
					},
				},
				class: this.accessCodeRuleDialogClassName,
				style: this.getCSS(),
			},
			NetDiskUI.popsStyle.accessCodeRuleView
		);
		that.setDeleteAllBtnText(popsConfirm.animElement);
		this.setEvent(popsConfirm);
	},
	getShowItemHTML() {
		let result = "";
		this.getValue().forEach((item) => {
			let netdiskName = "";
			item.netdisk.forEach((_netdisk_) => {
				netdiskName += _netdisk_.name;
				netdiskName += "、";
			});
			netdiskName = netdiskName.replace(/、$/g, "");
			result += /*html*/ `
            <li>
                <div class="accesscode-rule-url-regexp">
                <p>匹配规则</p>
                ${item.urlRegexp}
                </div>
                <div class="accesscode-rule-netdisk-name">
                <p>匹配网盘</p>
                ${netdiskName}
                </div>
                <div class="accesscode-rule-accesscode">
                <p>固定值</p>
                ${item.accessCode}
                </div>
                <div class="accesscode-rule-functions" data-json='${JSON.stringify(
									item
								)}'>
                <p>功能</p>
                <button style="background: #46cb31;color: #fff;" data-edit>修改</button>
                <button style="background: #263cf3;color: #fff;" data-delete>删除</button>
                </div>
            </li>
              `;
		});
		return result;
	},
	getCSS() {
		return /*css*/ `
        .pops-confirm-content .whitesev-accesscode-rule{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 15px 15px;
        }
        
        .pops-confirm-content div.netdisk-accesscode-rule-table{
            /* height: calc( 85% - 40px); */
            overflow: auto;
        }

        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-url-regexp,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-netdisk-name,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-accesscode,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-functions{
            display: flex;
            margin: 5px 0px;
        }

        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-url-regexp p,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-netdisk-name p,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-accesscode p,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-functions p{
            min-width: 80px;
            max-width: 80px;
            align-self: center;
        }
        .pops-confirm-content .netdisk-accesscode-rule-table li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 10px;
            box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
            margin: 20px 10px;
            padding: 10px;
        }
        `;
	},
	/**
	 * 显示规则弹窗进行添加/修改
	 * @param mainEvent
	 * @param isEdit 是否是修改模式
	 * @param oldValue 当isEdie为true时传入的值
	 */
	showRule(
		mainEvent: any,
		isEdit: boolean = false,
		oldValue: {
			urlRegexp: string;
			netdisk: {
				name: string;
				value: string;
			}[];
			accessCode: string;
		}
	) {
		let that = this;
		let $popsConfirm = NetDiskPops.confirm(
			{
				title: {
					text: isEdit ? "修改规则" : "添加规则",
					position: "center",
				},
				content: {
					text: /*html*/ `
                    <div class="whitesev-accesscode-rule">
                        <div type-name>匹配网站</div>
                        <div class="pops-panel-input">
                        <input type="text" placeholder="请输入需要匹配的正则规则" val-key="access-rule-url" />
                        </div>
                    </div>
                    <div class="whitesev-accesscode-rule">
                        <div>匹配网盘</div>
                        <div class="pops-panel-select">
                        <select val-key="access-rule-netdisk" multiple="true" style="height: auto;">
                        </select>
                        </div>
                    </div>
                    <div class="whitesev-accesscode-rule">
                        <div>固定值</div>
                        <div class="pops-panel-input">
                        <input type="text" placeholder="请输入固定的访问码" val-key="access-rule-accesscode" />
                        </div>
                    </div>
                    `,
					html: true,
				},
				btn: {
					ok: {
						enable: true,
						text: isEdit ? "修改" : "添加",
						callback(event) {
							let $pops = event.popsElement;
							let accessRuleUrl = $pops.querySelector<HTMLInputElement>(
								'input[val-key="access-rule-url"]'
							)!.value;
							let accessRuleNetDisk: { name: string; value: string }[] = [];
							let accessRuleNetDiskElement =
								$pops.querySelector<HTMLSelectElement>(
									'select[val-key="access-rule-netdisk"]'
								)!;
							Array.from(accessRuleNetDiskElement.selectedOptions).forEach(
								(item) => {
									accessRuleNetDisk.push({
										name: item.value,
										value: item.getAttribute("data-value")!,
									});
								}
							);
							let accessRuleAccessCode = $pops.querySelector<HTMLInputElement>(
								'input[val-key="access-rule-accesscode"]'
							)!.value;
							if (!that.checkRuleUrlValid(accessRuleUrl)) {
								log.error(["验证失败", accessRuleUrl]);
								return;
							}
							if (isEdit) {
								/* 编辑 */
								if (
									that.changeValue(oldValue, {
										urlRegexp: accessRuleUrl,
										netdisk: accessRuleNetDisk,
										accessCode: accessRuleAccessCode,
									})
								) {
									log.success([
										"修改成功",
										{
											urlRegexp: accessRuleUrl,
											netdisk: accessRuleNetDisk,
											accessCode: accessRuleAccessCode,
										},
									]);
									Qmsg.success("修改成功");
									mainEvent.animElement.querySelector(
										".netdisk-accesscode-rule-table ul"
									).innerHTML = that.getShowItemHTML();
									$popsConfirm.close();
								} else {
									Qmsg.error("修改失败");
								}
							} else {
								/* 添加 */
								if (
									that.addValue({
										urlRegexp: accessRuleUrl,
										netdisk: accessRuleNetDisk,
										accessCode: accessRuleAccessCode,
									})
								) {
									Qmsg.success("添加成功");
									mainEvent.animElement.querySelector(
										".netdisk-accesscode-rule-table ul"
									).innerHTML = that.getShowItemHTML();
									that.setDeleteAllBtnText(mainEvent.animElement);
									$popsConfirm.close();
								} else {
									Qmsg.error("已存在重复的规则");
								}
							}
						},
					},
					cancel: {
						text: "取消",
						enable: true,
					},
				},
				class: "whitesevPopNetDiskAccessCodeRuleAddOrEdit",
				style: /*css*/ `
                ${pops.config.cssText.panelCSS}

                .whitesevPopNetDiskAccessCodeRuleAddOrEdit .whitesev-accesscode-rule{
                    display: flex;
                    justify-content: space-between;
                    margin: 4px 4px;
                }
                .whitesevPopNetDiskAccessCodeRuleAddOrEdit .whitesev-accesscode-rule select{
                    height: 150px;
                }
                `,
			},
			NetDiskUI.popsStyle.accessCodeRuleEditView
		);
		this.setRuleEvent($popsConfirm.element);
		/** 初始化可自定义的网盘 */
		const $select =
			$popsConfirm.$shadowRoot.querySelector<HTMLSelectElement>("select")!;
		let $optionFragment = document.createDocumentFragment();
		NetDisk.rule.forEach((ruleConfig) => {
			let $option = DOMUtils.createElement(
				"option",
				{
					innerText: ruleConfig.setting.name,
				},
				{
					"data-value": ruleConfig.setting.key,
				}
			);
			$optionFragment.appendChild($option);
		});
		$select.appendChild($optionFragment);
		if (isEdit) {
			$popsConfirm.element.querySelector<HTMLInputElement>(
				'.whitesev-accesscode-rule input[val-key="access-rule-url"]'
			)!.value = oldValue.urlRegexp;
			let optionElement =
				$popsConfirm.element.querySelectorAll<HTMLOptionElement>(
					'.whitesev-accesscode-rule select[val-key="access-rule-netdisk"] option'
				);
			oldValue.netdisk.forEach((item) => {
				optionElement.forEach((element) => {
					if (element.getAttribute("data-value") === item.value) {
						element.selected = true;
						log.success(["选中", element]);
						return;
					}
				});
			});
			$popsConfirm.element.querySelector<HTMLInputElement>(
				'.whitesev-accesscode-rule input[val-key="access-rule-accesscode"]'
			)!.value = oldValue.accessCode;
		}
	},
	/**
	 * 修改 删除所有(xx)的文字
	 * @param element
	 */
	setDeleteAllBtnText(element: HTMLElement) {
		let $btnOther = element.querySelector<HTMLElement>(
			".pops-confirm-btn button.pops-confirm-btn-other"
		);
		if ($btnOther) {
			$btnOther!.textContent = `清空所有(${this.getValue().length})`;
		} else if (element.getRootNode() instanceof ShadowRoot) {
			let $root = element.getRootNode() as HTMLElement;
			$root.querySelector<HTMLElement>(
				".whitesevPopNetDiskAccessCodeRule .pops-confirm-btn button.pops-confirm-btn-other"
			)!.textContent = `清空所有(${this.getValue().length})`;
		}
	},
	/**
	 * 校验填写的匹配网站正则规则是否正确
	 * @param accessRuleUrl 填写的匹配网站正则规则
	 */
	checkRuleUrlValid(accessRuleUrl: string) {
		if (utils.isNull(accessRuleUrl)) {
			Qmsg.error("匹配网站的正则不能为空或纯空格");
			return false;
		}
		try {
			new RegExp(accessRuleUrl);
		} catch (error: any) {
			log.error(error);
			Qmsg.error("匹配网站的正则错误</br>" + error.message, {
				html: true,
				timeout: 5000,
			});
			return false;
		}
		return true;
	},
	/**
	 * 设置事件
	 * @param event
	 */
	setEvent(event: any) {
		let that = this;
		DOMUtils.on(
			event.animElement,
			"click",
			".netdisk-accesscode-rule-table div.accesscode-rule-functions button[data-delete]",
			function (this: HTMLButtonElement) {
				let dataJSONStr = this.closest<HTMLElement>(
					".accesscode-rule-functions"
				)!.getAttribute("data-json");
				let dataJSON = utils.toJSON(dataJSONStr);
				log.success(["删除👉", dataJSON]);
				if (that.deleteValue(dataJSON)) {
					this.closest<HTMLLIElement>("li")!.remove();
					that.setDeleteAllBtnText(event.animElement);
				} else {
					Qmsg.error("删除失败");
				}
			}
		);
		DOMUtils.on(
			event.element,
			"click",
			".netdisk-accesscode-rule-table div.accesscode-rule-functions button[data-edit]",
			function (this: HTMLButtonElement) {
				let dataJSONStr = this.closest<HTMLElement>(
					".accesscode-rule-functions"
				)!.getAttribute("data-json");
				let dataJSON = utils.toJSON(dataJSONStr) as any;
				log.success(["修改👉", dataJSON]);
				let newEvent = Object.assign({}, event);
				newEvent.animElement = newEvent.element;
				that.showRule(newEvent, true, dataJSON);
			}
		);
	},
	/**
	 * 设置事件
	 * @param element 弹窗元素
	 */
	setRuleEvent(element: HTMLElement) {},
	/**
	 * 获取值
	 */
	getValue() {
		return GM_getValue<
			{
				urlRegexp: string;
				netdisk: { name: string; value: string }[];
				accessCode: string;
			}[]
		>("accessCodeRule", []);
	},
	/**
	 * 设置值
	 * @param value
	 */
	setValue(value: {
		urlRegexp: string;
		netdisk: { name: string; value: string }[];
		accessCode: string;
	}) {
		let localData = this.getValue();
		localData.push(value);
		GM_setValue("accessCodeRule", localData);
	},
	/**
	 * 修改值
	 * @param oldValue
	 * @param newValue
	 */
	changeValue(
		oldValue: {
			urlRegexp: string;
			netdisk: { name: string; value: string }[];
			accessCode: string;
		},
		newValue: {
			urlRegexp: string;
			netdisk: { name: string; value: string }[];
			accessCode: string;
		}
	) {
		let result = false;
		let localData = this.getValue();
		let oldValueStr = JSON.stringify(oldValue);
		for (let i = 0; i < localData.length; i++) {
			if (JSON.stringify(localData[i]) === oldValueStr) {
				localData[i] = newValue;
				result = true;
				break;
			}
		}
		GM_setValue("accessCodeRule", localData);
		return result;
	},
	/**
	 * 添加值
	 * @param value
	 */
	addValue(value: {
		urlRegexp: string;
		netdisk: { name: string; value: string }[];
		accessCode: string;
	}) {
		let result = true;
		let localData = this.getValue();
		for (let i = 0; i < localData.length; i++) {
			if (
				localData[i].urlRegexp === value.urlRegexp &&
				localData[i].netdisk === value.netdisk
			) {
				result = false;
				break;
			}
		}
		if (result) {
			localData.push(value);
			this.setValue(value);
		}
		return result;
	},
	/**
	 * 删除值
	 */
	deleteValue(value: any) {
		let result = false;
		let localData = this.getValue();
		let valueStr = JSON.stringify(value);
		for (let i = 0; i < localData.length; i++) {
			if (JSON.stringify(localData[i]) === valueStr) {
				localData.splice(i, 1);
				result = true;
				break;
			}
		}
		if (result) {
			GM_setValue("accessCodeRule", localData);
		}
		return result;
	},
	/**
	 * 清空所有规则
	 */
	deleteAllValue() {
		GM_setValue("accessCodeRule", []);
	},
};
