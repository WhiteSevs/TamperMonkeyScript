import { DOMUtils, log, pops, utils } from "@/env";
import Qmsg from "qmsg";
import { RuleEditView } from "./RuleEditView";

/**
 * 规则视图配置
 */
type RuleViewOption<T> = {
	/** 标题 */
	title: string;
	/** 获取所有数据 */
	data: () => T[];
	/**
	 * 获取添加的数据
	 */
	getAddData: () => T;
	/**
	 * 获取单个规则当前的数据
	 * @param data
	 */
	getData: (data: T) => T;
	/**
	 * 获取单个数据的名字，用户显示在列表中
	 * @param data
	 */
	getDataItemName: (data: T) => string;
	/**
	 * 更新单个规则
	 * @param data
	 */
	updateData: (data: T) => void | boolean;
	/**
	 * 删除单个规则
	 * @param data
	 */
	deleteData: (data: T) => void | boolean;
	/**
	 * 规则控制按钮
	 */
	itemControls: {
		/**
		 * 启用开关
		 */
		enable: {
			/** 是否启用 */
			enable: boolean;
			/**
			 * 获取规则的启用状态
			 * @param data
			 */
			getEnable: (data: T) => boolean;
			/**
			 * 启用状态回调
			 * @param enable
			 */
			callback: (data: T, enable: boolean) => void;
		};
		/**
		 * 编辑按钮
		 */
		edit: {
			/** 是否启用 */
			enable: boolean;
			/**
			 * <form>内的html内容
			 */
			getView: (data: T, isEdit: boolean) => DocumentFragment;
			/**
			 * 自定义的style
			 */
			style?: string;
			/**
			 * 当提交表单时触发的回调函数
			 */
			onsubmit: /**
			 * @param event
			 * @param isEdit 是否是编辑状态
			 * @returns
			 * + true 校验通过
			 * + false 校验失败
			 */
			(
				$form: HTMLFormElement,
				isEdit: boolean,
				data?: T
			) => {
				success: boolean;
				data: T;
			};
		};
		/**
		 * 删除按钮
		 */
		delete: {
			/** 是否启用 */
			enable: boolean;
			/**
			 * 删除的回调函数
			 * @param data
			 */
			deleteCallBack: (data: T) => boolean;
		};
	};
	bottomControls?: {
		clear?: {
			/** @default true */
			enable?: boolean;
			/** 清空所有的数据的调用 */
			callback?: () => void;
		};
		add?: {
			/** @default true */
			enable?: boolean;
		};
		filter?: {
			/** @default false */
			enable?: boolean;
			callback?: () => void;
		};
	};
};
export class RuleView<T> {
	option: RuleViewOption<T>;
	constructor(option: RuleViewOption<T>) {
		this.option = option;
	}
	/**
	 * 显示视图
	 */
	showView() {
		let $popsConfirm = pops.confirm({
			title: {
				text: this.option.title,
				position: "center",
			},
			content: {
				text: /*html*/ `
                    <div class="rule-view-container">
                    </div>
                    `,
				html: true,
			},
			btn: {
				merge: true,
				reverse: false,
				position: "space-between",
				ok: {
					enable: this.option?.bottomControls?.add?.enable || true,
					type: "primary",
					text: "添加",
					callback: (event) => {
						this.showEditView(
							$popsConfirm.$shadowRoot,
							false,
							this.option.getAddData()
						);
					},
				},
				close: {
					enable: true,
					callback(event) {
						$popsConfirm.close();
					},
				},
				cancel: {
					enable: this.option?.bottomControls?.filter?.enable || false,
					type: "default",
					text: "过滤",
					callback: (details, event) => {
						if (
							typeof this.option?.bottomControls?.filter?.callback ===
							"function"
						) {
							this.option.bottomControls.filter.callback();
						}
					},
				},
				other: {
					enable: this.option?.bottomControls?.clear?.enable || true,
					type: "xiaomi-primary",
					text: `清空所有(${this.option.data().length})`,
					callback: (event) => {
						let $askDialog = pops.confirm({
							title: {
								text: "提示",
								position: "center",
							},
							content: {
								text: "确定清空所有的数据？",
								html: false,
							},
							btn: {
								ok: {
									enable: true,
									callback: (popsEvent) => {
										log.success("清空所有");
										if (
											typeof this.option?.bottomControls?.clear?.callback ===
											"function"
										) {
											this.option.bottomControls.clear.callback();
										}
										if (this.option.data().length) {
											Qmsg.error("清理失败");
											return;
										} else {
											Qmsg.success("清理成功");
										}
										this.updateDeleteAllBtnText($popsConfirm.$shadowRoot);
										this.clearContent($popsConfirm.$shadowRoot);
										$askDialog.close();
									},
								},
								cancel: {
									text: "取消",
									enable: true,
								},
							},
							mask: { enable: true },
							width: "300px",
							height: "200px",
						});
					},
				},
			},
			mask: {
				enable: true,
			},
			width: window.innerWidth > 500 ? "500px" : "88vw",
			height: window.innerHeight > 500 ? "500px" : "80vh",
			style: /*css*/ `
            ${pops.config.cssText.panelCSS}
            
            .rule-item{
                display: flex;
                align-items: center;
                line-height: normal;
                font-size: 16px;
                padding: 4px 4px;
                gap: 6px;
            }
            .rule-name{
                flex: 1;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .rule-controls{
                display: flex;
                align-items: center;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                gap: 8px;
                padding: 0px 4px;
            }
            .rule-controls-enable{
                
            }
            .rule-controls-edit{
                
            }
            .rule-controls-delete{
                
            }
            .rule-controls-edit,
            .rule-controls-delete{
                width: 16px;
                height: 16px;
                cursor: pointer;
            }
            `,
		});
		let allData = this.option.data();
		allData.forEach((data) => {
			this.appendRuleItemElement($popsConfirm.$shadowRoot, data);
		});
	}
	/**
	 * 解析弹窗内的各个元素
	 */
	parseViewElement($shadowRoot: ShadowRoot) {
		let $container = $shadowRoot.querySelector<HTMLElement>(
			".rule-view-container"
		)!;
		let $deleteBtn = $shadowRoot.querySelector<HTMLButtonElement>(
			".pops-confirm-btn button.pops-confirm-btn-other"
		)!;
		return {
			/** 容器 */
			$container: $container,
			/** 左下角的清空按钮 */
			$deleteBtn: $deleteBtn,
		};
	}
	/**
	 * 解析每一项的元素
	 */
	parseItemElement($shadowRoot: ShadowRoot | HTMLElement) {
		let $enable = $shadowRoot.querySelector<HTMLElement>(
			".rule-controls-enable"
		)!;
		let $enableSwitch =
			$enable.querySelector<HTMLElement>(".pops-panel-switch")!;
		let $enableSwitchInput = $enable.querySelector<HTMLInputElement>(
			".pops-panel-switch__input"
		)!;
		let $enableSwitchCore = $enable.querySelector<HTMLElement>(
			".pops-panel-switch__core"
		);
		/** 编辑按钮 */
		let $edit = $shadowRoot.querySelector<HTMLElement>(".rule-controls-edit")!;
		/** 删除按钮 */
		let $delete = $shadowRoot.querySelector<HTMLElement>(
			".rule-controls-delete"
		)!;

		return {
			/** 启用开关 */
			$enable,
			/** 启用开关的container */
			$enableSwitch: $enableSwitch,
			/** 启用开关的input */
			$enableSwitchInput: $enableSwitchInput,
			/** 启用开关的core */
			$enableSwitchCore: $enableSwitchCore,
			/** 编辑按钮 */
			$edit: $edit,
			/** 删除按钮 */
			$delete: $delete,
		};
	}
	/**
	 * 创建一条规则元素
	 */
	createRuleItemElement(data: T, $shadowRoot: ShadowRoot) {
		const that = this;
		let name = this.option.getDataItemName(data);
		let $ruleItem = DOMUtils.createElement("div", {
			className: "rule-item",
			innerHTML: /*html*/ `
			<div class="rule-name">${name}</div>
			<div class="rule-controls">
				<div class="rule-controls-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="rule-controls-edit">
					${pops.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${pops.config.iconSVG.delete}
				</div>
			</div>
			`,
		});
		/** 开关切换的className */
		let switchCheckedClassName = "pops-panel-switch-is-checked";

		const {
			$enable,
			$enableSwitch,
			$enableSwitchCore,
			$enableSwitchInput,
			$delete,
			$edit,
		} = this.parseItemElement($ruleItem);
		if (this.option.itemControls.enable.enable) {
			// 给switch添加点击事件
			DOMUtils.on($enableSwitchCore, "click", (event) => {
				let isChecked = false;
				if ($enableSwitch.classList.contains(switchCheckedClassName)) {
					// 关
					$enableSwitch.classList.remove(switchCheckedClassName);
					isChecked = false;
				} else {
					// 开
					$enableSwitch.classList.add(switchCheckedClassName);
					isChecked = true;
				}
				$enableSwitchInput.checked = isChecked;
				this.option.itemControls.enable.callback(data, isChecked);
			});
			if (this.option.itemControls.enable.getEnable(data)) {
				// 开
				$enableSwitch.classList.add(switchCheckedClassName);
			}
		} else {
			$enable.remove();
		}
		if (this.option.itemControls.edit.enable) {
			// 给编辑按钮添加点击事件
			DOMUtils.on($edit, "click", (event) => {
				utils.preventEvent(event);
				this.showEditView($shadowRoot, true, data, $ruleItem, (newData) => {
					// @ts-ignore
					data = null;
					data = newData;
				});
			});
		} else {
			$edit.remove();
		}
		if (this.option.itemControls.delete.enable) {
			// 给删除按钮添加点击事件
			DOMUtils.on($delete, "click", (event) => {
				utils.preventEvent(event);
				let $askDialog = pops.confirm({
					title: {
						text: "提示",
						position: "center",
					},
					content: {
						text: "确定删除该条数据？",
						html: false,
					},
					btn: {
						ok: {
							enable: true,
							callback: (popsEvent) => {
								log.success("删除数据");
								let flag = this.option.itemControls.delete.deleteCallBack(data);
								if (flag) {
									Qmsg.success("成功删除该数据");
									// 移除该条元素
									$ruleItem.remove();
									// 更新左下角的删除按钮文字
									this.updateDeleteAllBtnText($shadowRoot);
									$askDialog.close();
								} else {
									Qmsg.error("删除该数据失败");
								}
							},
						},
						cancel: {
							text: "取消",
							enable: true,
						},
					},
					mask: {
						enable: true,
					},
					width: "300px",
					height: "200px",
				});
			});
		} else {
			$delete.remove();
		}
		return $ruleItem;
	}
	/**
	 * 添加一个规则元素
	 */
	appendRuleItemElement($shadowRoot: ShadowRoot, data: T | T[]) {
		const { $container } = this.parseViewElement($shadowRoot);
		// 添加到页面中
		if (Array.isArray(data)) {
			for (let index = 0; index < data.length; index++) {
				const item = data[index];
				$container.appendChild(this.createRuleItemElement(item, $shadowRoot));
			}
		} else {
			$container.appendChild(this.createRuleItemElement(data, $shadowRoot));
		}
		this.updateDeleteAllBtnText($shadowRoot);
	}
	/**
	 * 更新弹窗内容的元素
	 */
	updateRuleContaienrElement($shadowRoot: ShadowRoot) {
		this.clearContent($shadowRoot);
		const { $container } = this.parseViewElement($shadowRoot);
		let data = this.option.data();
		this.appendRuleItemElement($shadowRoot, data);
		this.updateDeleteAllBtnText($shadowRoot);
	}
	/**
	 * 更新规则元素
	 */
	updateRuleItemElement(
		data: T,
		$oldRuleItem: HTMLDivElement,
		$shadowRoot: ShadowRoot
	) {
		let $newRuleItem = this.createRuleItemElement(data, $shadowRoot);
		$oldRuleItem.after($newRuleItem);
		$oldRuleItem.remove();
	}
	/**
	 * 清空内容
	 */
	clearContent($shadowRoot: ShadowRoot) {
		const { $container } = this.parseViewElement($shadowRoot);
		DOMUtils.html($container, "");
	}
	/**
	 * 设置删除按钮的文字
	 */
	setDeleteBtnText(
		$shadowRoot: ShadowRoot,
		text: string,
		isHTML: boolean = false
	) {
		const { $deleteBtn } = this.parseViewElement($shadowRoot);
		if (isHTML) {
			DOMUtils.html($deleteBtn, text);
		} else {
			DOMUtils.text($deleteBtn, text);
		}
	}
	/**
	 * 更新【清空所有】的按钮的文字
	 */
	updateDeleteAllBtnText($shadowRoot: ShadowRoot) {
		let data = this.option.data();
		this.setDeleteBtnText($shadowRoot, `清空所有(${data.length})`);
	}
	/**
	 * 显示编辑视图
	 * @param isEdit 是否是编辑状态
	 */
	showEditView(
		$parentShadowRoot: ShadowRoot,
		isEdit: boolean,
		editData: T,
		$editRuleItemElement?: HTMLDivElement,
		updateDataCallBack?: (data: T) => void
	) {
		let dialogCloseCallBack = (isSubmit: boolean) => {
			if (isSubmit) {
			} else {
				if (!isEdit) {
					// 添加规则，关闭时清理掉规则
					this.option.deleteData(editData!);
				}
				if (typeof updateDataCallBack === "function") {
					let newData = this.option.getData(editData!);
					updateDataCallBack(newData);
				}
			}
		};
		let editView = new RuleEditView<T>({
			title: isEdit ? "编辑" : "添加",
			data: () => {
				return editData!;
			},
			dialogCloseCallBack: dialogCloseCallBack,
			getView: (data) => {
				return this.option.itemControls.edit.getView(data, isEdit);
			},
			btn: {
				ok: {
					enable: true,
					text: isEdit ? "修改" : "添加",
				},
				cancel: {
					callback(details, event) {
						details.close();
						dialogCloseCallBack(false);
					},
				},
				close: {
					callback(details, event) {
						details.close();
						dialogCloseCallBack(false);
					},
				},
			},
			onsubmit: ($form, data) => {
				let result = this.option.itemControls.edit.onsubmit(
					$form,
					isEdit,
					data
				);
				if (result.success) {
					if (isEdit) {
						Qmsg.success("修改成功");
						// 当前是编辑规则
						// 给外面的弹窗更新元素
						this.updateRuleItemElement(
							result.data,
							$editRuleItemElement!,
							$parentShadowRoot
						);
					} else {
						// 当前是添加规则
						// 给外面的弹窗添加元素
						this.appendRuleItemElement($parentShadowRoot, result.data);
					}
				} else {
					if (isEdit) {
						Qmsg.error("修改失败");
					}
				}
				return result;
			},
			style: this.option.itemControls.edit.style,
		});
		editView.showView();
	}
}
