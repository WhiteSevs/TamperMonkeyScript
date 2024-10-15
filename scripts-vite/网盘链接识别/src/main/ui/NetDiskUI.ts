import type { PopsEventDetails } from "@whitesev/pops/dist/types/src/types/event";
import { GM_getValue, GM_setValue } from "ViteGM";
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
import { WebsiteRuleView } from "../view/website-rule/WebsiteRuleView";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";

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
	 * 网站规则
	 */
	get websiteRule() {
		return WebsiteRuleView;
	},
	/**
	 * 设置标题的右键菜单
	 * @param element
	 */
	setGlobalRightClickMenu(element: HTMLElement) {
		NetDiskUI.view.registerContextMenu(element, void 0, [
			{
				text: "设置",
				callback() {
					log.info("打开-设置");
					NetDiskGlobalSettingView.show();
				},
			},
			{
				text: "历史匹配记录",
				callback() {
					log.info("打开-历史匹配记录");
					NetDiskUI.netDiskHistoryMatch.show();
				},
			},
			{
				text: "自定义规则",
				callback() {
					log.info("打开-自定义规则");
					NetDiskUserRuleUI.show(false);
				},
			},
			{
				text: "网站规则",
				callback() {
					log.info("打开-网站规则");
					WebsiteRuleView.show();
				},
			},
			{
				text: "主动识别文本",
				callback() {
					log.info("打开-主动识别文本");
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
				callback: function (event: any, contextMenuEvent: any) {
					let linkElement = contextMenuEvent.target;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo(linkElement);
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
				callback: function (event: any, contextMenuEvent: any) {
					let linkElement = contextMenuEvent.target;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo(linkElement);
					let url = NetDiskLinkClickModeUtils.getBlankUrl(
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode
					);
					NetDiskLinkClickMode.openBlank(
						url,
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode
					);
				},
			},
			{
				text: "修改访问码",
				callback: function (event: any, contextMenuEvent: any) {
					let $link = contextMenuEvent.target;
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
									$link
										.closest("li")
										.querySelector(
											".netdiskrecord-update-time"
										).lastChild.textContent = utils.formatTime(currentTime);
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
								event.target.setAttribute("data-accesscode", option.accessCode);
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
		];

		if (!isHistoryView) {
			// 添加清空当前or所有已匹配的项
			showTextList.push({
				text: "删除当前项",
				callback: function (event: any, contextMenuEvent: any) {
					let $linkElement = contextMenuEvent.target as HTMLElement;
					let $box = $linkElement.closest(".netdisk-url-box") as HTMLDivElement;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo($linkElement);
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
				callback: function (event: any, contextMenuEvent: any) {
					let $linkElement = contextMenuEvent.target as HTMLElement;
					let $boxAll = $linkElement.closest(
						".netdisk-url-box-all"
					) as HTMLDivElement;
					const { netDiskName, netDiskIndex, shareCode, accessCode } =
						NetDiskView.praseElementAttributeRuleInfo($linkElement);
					NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
						netDiskItem.clear();
					});
					NetDisk.$match.matchedInfoRuleKey.clear();
					$boxAll.innerHTML = "";
				},
			});
		}
		NetDiskUI.view.registerContextMenu(target, selector, showTextList);
	},
};
