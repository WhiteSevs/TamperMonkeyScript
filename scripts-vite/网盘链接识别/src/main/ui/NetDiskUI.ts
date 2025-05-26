import type { PopsEventDetails } from "@whitesev/pops/dist/types/src/types/event";
import Qmsg from "qmsg";
import { log, utils } from "@/env";
import { NetDisk } from "../NetDisk";
import { NetDiskUISizeConfig } from "./NetDiskUISizeConfig";
import { NetDiskSuspension } from "../view/suspension/NetDiskSuspensionView";
import { NetDiskGlobalSettingView } from "../view/global-setting/NetDiskGlobalSettingView";
import {
	NetDiskView,
	type RegisterContextMenuShowTextOption,
} from "../view/NetDiskView";
import { NetDiskLinearChainDialogView } from "../view/linear-chain-dialog/NetDiskLinearChainDialogView";
import { NetDiskNewAccessCodeView } from "../view/new-access-code/NetDiskNewAccessCodeView";
import { NetDiskMatchPasteText } from "../view/match-paste-text/NetDiskMatchPasteTextView";
import {
	NetDiskLinkClickMode,
	NetDiskLinkClickModeUtils,
} from "../link-click-mode/NetDiskLinkClickMode";
import { NetDiskUserRuleUI } from "../rule/user-rule/NetDiskUserRuleUI";
import { NetDiskHistoryMatchView } from "../view/history-match/NetDiskHistoryMatchView";
import DOMUtils from "@whitesev/domutils";
import { NetDiskRuleManager } from "../NetDiskRuleManager";

/** 弹窗UI界面 */
export const NetDiskUI = {
	/** 元素对象实例 */
	Alias: {
		/**
		 * 链接弹窗的对象
		 */
		uiLinkAlias: void 0 as any as PopsEventDetails,
		/**
		 * 历史匹配记录弹窗的对象
		 */
		historyAlias: void 0 as any as PopsEventDetails,
		/**
		 * 设置弹窗的对象
		 */
		settingAlias: void 0 as any as PopsEventDetails,
	},
	/**
	 * 已匹配到的网盘图标字典
	 */
	isMatchedNetDiskIconMap: new Set<string>(),
	/**
	 * 是否默认禁用弹窗弹出后背景可以滚动
	 */
	defaultForbiddenScroll: false,
	/**
	 * 弹窗的配置
	 * 规定格式
	 * {
	 *  PC:{
	 *    width: "",
	 *    height: "",
	 *  },
	 *  Mobile: {
	 *    width: "",
	 *    height: "",
	 *  }
	 * }
	 */
	popsStyle: NetDiskUISizeConfig,
	src: {
		/**
		 * 图标RESOURCE_ICON
		 * 从图标库中引入并覆盖
		 */
		icon: {} as {
			[key: string]: string;
		},
		/**
		 * 判断图标字典中是否存在该键
		 * @param iconKey
		 */
		hasIcon(iconKey: string) {
			return Reflect.has(this.icon, iconKey);
		},
		/**
		 * 添加图标数据
		 * @param iconKey
		 * @param iconValue
		 */
		addIcon(iconKey: string, iconValue: string) {
			if (this.hasIcon(iconKey)) {
				log.warn("图标字典中已存在该icon：" + iconKey);
				return false;
			} else {
				return Reflect.set(this.icon, iconKey, iconValue);
			}
		},
	},
	/**
	 * 悬浮按钮  双击打开主界面，长按打开设置（不能移动，移动就不打开，只是移动按钮
	 */
	suspension: NetDiskSuspension,
	/**
	 * 主视图
	 */
	view: NetDiskView,
	/**
	 * 显示直链的弹窗
	 */
	staticView: NetDiskLinearChainDialogView,
	/**
	 * 需要重新输入新密码的弹窗
	 */
	newAccessCodeView: NetDiskNewAccessCodeView,
	/**
	 * 网盘历史匹配到的记录弹窗
	 */
	netDiskHistoryMatch: NetDiskHistoryMatchView,
	/**
	 * 主动识别文本
	 */
	matchPasteText: NetDiskMatchPasteText,
	/**
	 * 设置标题的右键菜单
	 * @param element
	 */
	setGlobalRightClickMenu(element: HTMLElement) {
		NetDiskUI.view.registerContextMenu(element, void 0, [
			{
				text: "设置",
				callback() {
					log.info("右键菜单-打开-" + this.text);
					NetDiskGlobalSettingView.show();
				},
			},
			{
				text: "历史匹配记录",
				callback() {
					log.info("右键菜单-打开-" + this.text);
					NetDiskUI.netDiskHistoryMatch.show();
				},
			},
			{
				text: "添加链接识别规则",
				callback() {
					log.info("右键菜单-打开-" + this.text);
					NetDiskUserRuleUI.show(false);
				},
			},
			{
				text: "规则管理器",
				callback() {
					log.info("右键菜单-打开-" + this.text);
					NetDiskRuleManager.showView();
				},
			},
			{
				text: "主动识别文本",
				callback() {
					log.info("右键菜单-打开-" + this.text);
					NetDiskUI.matchPasteText.show();
				},
			},
		]);
	},
	/**
	 * 设置右键菜单
	 * @param target
	 * @param selector
	 * @param isHistoryView 是否是历史界面的
	 */
	setRightClickMenu(
		target: HTMLElement | (Window & typeof globalThis) | ShadowRoot,
		selector: string,
		isHistoryView?: boolean
	) {
		let showTextList: RegisterContextMenuShowTextOption[] = [
			{
				text: "复制链接",
				callback: function (event, contextMenuEvent, liElement) {
					let $link = contextMenuEvent.target as HTMLElement;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo($link);
					NetDiskLinkClickMode.copy(
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode
					);
				},
			},
			{
				text: "访问链接",
				callback: function (event, contextMenuEvent, liElement) {
					let $link = contextMenuEvent.target as HTMLElement;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo($link);
					let url = NetDiskLinkClickModeUtils.getBlankUrl(
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode
					);
					NetDiskLinkClickMode.openBlankUrl(
						url,
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode
					);
				},
			},
			{
				text: "后台打开",
				callback: function (event, contextMenuEvent, liElement) {
					let $link = contextMenuEvent.target as HTMLElement;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo($link);
					let url = NetDiskLinkClickModeUtils.getBlankUrl(
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode
					);
					NetDiskLinkClickMode.openBlankUrl(
						url,
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode,
						true
					);
				},
			},
			{
				text: "修改访问码",
				callback: function (event, contextMenuEvent, liElement) {
					let eventTarget = event.target as HTMLElement;
					let $link = contextMenuEvent.target as HTMLElement;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo($link);

					NetDiskUI.newAccessCodeView(
						this.text as string,
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode,
						(option) => {
							if (isHistoryView) {
								// 来自历史匹配记录界面的
								if (option.isUpdatedMatchedDict) {
									let currentTime = new Date().getTime();
									let $updateTime = $link
										.closest("li")!
										.querySelector<HTMLElement>(".netdiskrecord-update-time")!;
									DOMUtils.text($updateTime, utils.formatTime(currentTime));
									$link.setAttribute("data-accesscode", option.accessCode);
									Qmsg.success(
										/*html*/ `
										<div style="text-align: left;">旧: ${accessCode}</div>
										<div style="text-align: left;">新: ${option.accessCode}</div>`,
										{
											html: true,
										}
									);
								} else {
									Qmsg.error("修改失败");
								}
							} else {
								eventTarget.setAttribute("data-accesscode", option.accessCode);
								if (option.isUpdatedMatchedDict) {
									Qmsg.success(
										/*html*/ `
										<div style="text-align: left;">旧: ${accessCode}</div>
										<div style="text-align: left;">新: ${option.accessCode}</div>`,
										{
											html: true,
										}
									);
								} else {
									if (option.isFindInMatchedDict) {
										Qmsg.error("修改访问码失败");
									} else {
										Qmsg.error(
											"修改访问码失败，因为当前已匹配字典中未找到对应的访问码"
										);
									}
								}
							}
						}
					);
				},
			},
			{
				text: "复制全部",
				callback(clickEvent, contextMenuEvent, liElement) {
					let $link = contextMenuEvent.target as HTMLElement;
					let $boxAll = $link.closest<HTMLElement>(".netdisk-url-box-all")!;
					// 获取全部链接的复制文本
					let copyTextList: string[] = [];
					$boxAll
						.querySelectorAll<HTMLElement>(selector)
						.forEach(($linkItem) => {
							const { netDiskName, netDiskIndex, shareCode, accessCode } =
								NetDiskView.praseElementAttributeRuleInfo($linkItem);
							// 复制的文本
							let copyUrlText = NetDiskLinkClickModeUtils.getCopyUrlInfo(
								netDiskName,
								netDiskIndex,
								shareCode,
								accessCode
							);
							copyTextList.push(copyUrlText);
						});
					utils
						.setClip(copyTextList.join("\n"))
						.then((status) => {
							if (status) {
								Qmsg.success("成功复制全部");
							} else {
								Qmsg.error("复制全部失败");
							}
						})
						.catch(() => {
							Qmsg.error("复制全部失败");
						});
				},
			},
		];

		if (!isHistoryView) {
			// 如果当前视图不是历史匹配记录的
			// 那么添加清空当前or所有已匹配的项
			showTextList.push({
				text: "删除当前项",
				callback: function (event, contextMenuEvent, liElement) {
					let $link = contextMenuEvent.target as HTMLElement;
					let $box = $link.closest<HTMLElement>(".netdisk-url-box")!;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo($link);
					let flag = false;
					NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
						if (netDiskKeyName !== netDiskName) {
							return;
						}
						netDiskItem.forEach((matchedInfo, matchedShareCode) => {
							if (matchedShareCode === shareCode) {
								flag = true;
								netDiskItem.delete(matchedShareCode);
								log.info(`删除：`, netDiskKeyName, JSON.stringify(matchedInfo));
							}
						});
					});
					// 更新匹配到的key
					NetDisk.$match.matchedInfoRuleKey.clear();
					NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
						if (netDiskItem.length) {
							NetDisk.$match.matchedInfoRuleKey.add(netDiskKeyName);
						}
					});
					if (flag) {
						$box.remove();
					} else {
						Qmsg.error("发生意外情况，未在已匹配到的信息中到对应的网盘信息");
					}
				},
			});
			showTextList.push({
				text: "删除所有项",
				callback: function (event, contextMenuEvent, liElement) {
					let $link = contextMenuEvent.target as HTMLElement;
					let $boxAll = $link.closest<HTMLElement>(".netdisk-url-box-all")!;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo($link);
					NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
						netDiskItem.clear();
					});
					NetDisk.$match.matchedInfoRuleKey.clear();
					DOMUtils.html($boxAll, "");
				},
			});
		}

		NetDiskUI.view.registerContextMenu(target, selector, showTextList);
	},
};
