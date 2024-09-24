import { NetDiskPops } from "@/main/pops/NetDiskPops";
import indexCSS from "./css/index.css?raw";
import { DOMUtils, log, pops, utils } from "@/env";
import { WebsiteRule } from "@/main/website-rule/WebsiteRule";
import Qmsg from "qmsg";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import { WebsiteFilterRuleView } from "./WebsiteFilterRuleView";
import type { WebsiteRuleOption } from "@/main/website-rule/WebsiteRuleType";
import { WebsiteEditRuleView } from "./WebsiteEditRuleView";

export const WebsiteRuleView = {
	$data: {
		/**
		 * 当前是否是正在显示添加/编辑的弹窗
		 */
		isShowEditView: false,
	},
	/**
	 * 显示弹窗
	 */
	show() {
		const that = this;
		this.$data.isShowEditView = true;
		// 先获取所有规则
		let allRule = WebsiteRule.getAllRule();
		let $popsConfirm = NetDiskPops.confirm(
			{
				title: {
					text: "网站规则",
					position: "center",
				},
				content: {
					text: /*html*/ `
                    <div class="website-rule-container">
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
						type: "primary",
						text: "添加",
						callback(event) {
							WebsiteEditRuleView.show($popsConfirm.$shadowRoot);
						},
					},
					close: {
						enable: true,
						callback(event) {
							that.$data.isShowEditView = false;
							event.close();
						},
					},
					cancel: {
						enable: true,
						type: "default",
						text: "过滤",
						callback(details, event) {
							WebsiteFilterRuleView.show();
						},
					},
					other: {
						enable: true,
						type: "xiaomi-primary",
						text: `清空所有(${allRule.length})`,
						callback(event) {
							let $askDialog = NetDiskPops.confirm({
								title: {
									text: "提示",
									position: "center",
								},
								content: {
									text: "确定清空所有的规则？",
									html: false,
								},
								btn: {
									ok: {
										enable: true,
										callback: function (popsEvent) {
											log.success("清空所有");
											WebsiteRule.deleteAllRule();
											if (WebsiteRule.getAllRule().length) {
												Qmsg.error("清空全部规则失败");
												return;
											} else {
												Qmsg.success("已清空全部规则");
											}
											that.updateDeleteAllBtnText($popsConfirm.$shadowRoot);
											that.clearContent($popsConfirm.$shadowRoot);
											$askDialog.close();
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
				mask: {
					clickCallBack(originalRun, config) {
						that.$data.isShowEditView = false;
						originalRun();
					},
				},
				class: "pops-website-rule",
				style: `
				${pops.config.cssText.panelCSS}

				${indexCSS}
				`,
			},
			NetDiskUI.popsStyle.websiteRuleView
		);
		this.updateRuleContaienrElement($popsConfirm.$shadowRoot);
	},
	/**
	 * 解析弹窗内的各个元素
	 */
	parseElement($shadowRoot: ShadowRoot) {
		let $container = $shadowRoot.querySelector<HTMLElement>(
			".website-rule-container"
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
	},
	/**
	 * 解析每一项的元素
	 */
	parseItemElement($shadowRoot: ShadowRoot | HTMLElement) {
		let $enableSwitch = $shadowRoot.querySelector<HTMLElement>(
			".website-rule-enable .pops-panel-switch"
		)!;
		let $enableSwitchInput = $shadowRoot.querySelector<HTMLInputElement>(
			".website-rule-enable .pops-panel-switch__input"
		)!;
		let $enableSwitchCore = $shadowRoot.querySelector<HTMLElement>(
			".website-rule-enable .pops-panel-switch__core"
		);
		/** 编辑按钮 */
		let $edit = $shadowRoot.querySelector<HTMLElement>(".website-rule-edit")!;
		/** 删除按钮 */
		let $delete = $shadowRoot.querySelector<HTMLElement>(
			".website-rule-delete"
		)!;

		return {
			/** 启用开关 */
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
	},
	/**
	 * 创建一条规则元素
	 */
	createRuleItemElement(rule: WebsiteRuleOption, $shadowRoot: ShadowRoot) {
		const that = this;
		let $ruleItem = DOMUtils.createElement("div", {
			className: "website-rule-item",
			innerHTML: /*html*/ `
			<div class="website-rule-name">${rule.name ?? rule.url}</div>
			<div class="website-controls">
				<div class="website-rule-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="website-rule-edit">
					${pops.config.iconSVG.edit}
				</div>
				<div class="website-rule-delete">
					${pops.config.iconSVG.delete}
				</div>
			</div>
			`,
		});
		$ruleItem.setAttribute("data-uuid", rule.uuid);
		/** 开关切换的className */
		let switchCheckedClassName = "pops-panel-switch-is-checked";

		const {
			$enableSwitch,
			$enableSwitchCore,
			$enableSwitchInput,
			$delete,
			$edit,
		} = this.parseItemElement($ruleItem);
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
			rule.enable = isChecked;
			WebsiteRule.updateRule(rule);
		});
		if (rule.enable) {
			// 开
			$enableSwitch.classList.add(switchCheckedClassName);
		}

		// 给编辑按钮添加点击事件
		DOMUtils.on($edit, "click", (event) => {
			utils.preventEvent(event);
			WebsiteEditRuleView.show($shadowRoot, rule, $ruleItem);
		});
		// 给删除按钮添加点击事件
		DOMUtils.on($delete, "click", (event) => {
			utils.preventEvent(event);
			let $askDialog = NetDiskPops.confirm({
				title: {
					text: "提示",
					position: "center",
				},
				content: {
					text: "确定删除该规则？",
					html: false,
				},
				btn: {
					ok: {
						enable: true,
						callback: function (popsEvent) {
							log.success("删除规则");
							let flag = WebsiteRule.deleteRule(rule.uuid);
							if (flag) {
								Qmsg.success("已删除规则");
								// 移除该条元素
								$ruleItem.remove();
								// 更新左下角的删除按钮文字
								WebsiteRuleView.updateDeleteAllBtnText($shadowRoot);
								$askDialog.close();
							} else {
								Qmsg.error("删除规则失败");
							}
						},
					},
					cancel: {
						text: "取消",
						enable: true,
					},
				},
			});
		});
		return $ruleItem;
	},
	/**
	 * 添加一个规则元素
	 */
	appendRuleItemElement(
		$shadowRoot: ShadowRoot,
		rule: WebsiteRuleOption | WebsiteRuleOption[]
	) {
		const { $container } = this.parseElement($shadowRoot);
		// 添加到页面中
		if (Array.isArray(rule)) {
			for (let index = 0; index < rule.length; index++) {
				const item = rule[index];
				$container.appendChild(this.createRuleItemElement(item, $shadowRoot));
			}
		} else {
			$container.appendChild(this.createRuleItemElement(rule, $shadowRoot));
		}
		this.updateDeleteAllBtnText($shadowRoot);
	},
	/**
	 * 更新弹窗内容的元素
	 */
	updateRuleContaienrElement($shadowRoot: ShadowRoot) {
		this.clearContent($shadowRoot);
		const { $container } = this.parseElement($shadowRoot);
		let allRule = WebsiteRule.getAllRule();
		this.appendRuleItemElement($shadowRoot, allRule);
		this.updateDeleteAllBtnText($shadowRoot);
	},
	/**
	 * 更新规则元素
	 */
	updateRuleItemElement(
		rule: WebsiteRuleOption,
		$oldRuleItem: HTMLDivElement,
		$shadowRoot: ShadowRoot
	) {
		let $newRuleItem = this.createRuleItemElement(rule, $shadowRoot);
		$oldRuleItem.after($newRuleItem);
		$oldRuleItem.remove();
	},
	/**
	 * 清空内容
	 */
	clearContent($shadowRoot: ShadowRoot) {
		const { $container } = this.parseElement($shadowRoot);
		$container.innerHTML = "";
	},
	/**
	 * 设置删除按钮的文字
	 */
	setDeleteBtnText(
		$shadowRoot: ShadowRoot,
		text: string,
		isHTML: boolean = false
	) {
		const { $deleteBtn } = this.parseElement($shadowRoot);
		if (isHTML) {
			$deleteBtn.innerHTML = text;
		} else {
			$deleteBtn.innerText = text;
		}
	},
	/**
	 * 更新【清空所有】的按钮的文字
	 */
	updateDeleteAllBtnText($shadowRoot: ShadowRoot) {
		let websiteAllRule = WebsiteRule.getAllRule();
		this.setDeleteBtnText($shadowRoot, `清空所有(${websiteAllRule.length})`);
	},
};
