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
				text: "链接",
				icon: /*html*/ `
					<svg
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M563.2 672c-6.4-6.4 0 0 0 0L448 793.6c-57.6 57.6-153.6 57.6-211.2 0-57.6-57.6-64-147.2 0-211.2l121.6-121.6-6.4-6.4-38.4-32-6.4-6.4-121.6 121.6C108.8 614.4 108.8 755.2 192 832s217.6 83.2 300.8 0l121.6-121.6-6.4-6.4-44.8-32z m38.4-294.4c6.4 0 6.4 0 0 0l38.4 38.4 6.4 6.4-230.4 230.4-38.4-51.2 224-224zM531.2 192c83.2-83.2 217.6-83.2 300.8 0 83.2 83.2 83.2 217.6 0 300.8l-121.6 121.6-44.8-44.8 128-128c44.8-44.8 51.2-147.2-6.4-204.8-57.6-57.6-160-57.6-204.8-6.4l-128 128v-6.4l-38.4-38.4-6.4-6.4L531.2 192z">
						</path>
					</svg>

				`,
				callback(
					clickEvent,
					contextMenuEvent,
					liElement,
					menuListenerRootNode
				) {
					return false;
				},
				item: [
					{
						text: "复制",
						icon: "documentCopy",
						callback: function (
							event,
							contextMenuEvent,
							liElement,
							menuListenerRootNode
						) {
							let $link = menuListenerRootNode;
							const { ruleKeyName, ruleIndex, shareCode, accessCode } =
								NetDiskView.praseElementAttributeRuleInfo($link);
							NetDiskLinkClickMode.copy(
								ruleKeyName,
								ruleIndex,
								shareCode,
								accessCode
							);
						},
					},
					{
						text: "访问",
						icon: /*html*/ `
						<svg
							class="icon"
							viewBox="0 0 1024 1024"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M892 928.1H134c-19.9 0-36-16.1-36-36v-758c0-19.9 16.1-36 36-36h314.1c19.9 0 36 16.1 36 36s-16.1 36-36 36H170v686h686V579.6c0-19.9 16.1-36 36-36s36 16.1 36 36v312.5c0 19.9-16.1 36-36 36z"></path>
							<path
								d="M927.9 131.6v-0.5c-0.1-1.7-0.4-3.3-0.7-4.9 0-0.1 0-0.2-0.1-0.3-0.4-1.7-0.9-3.3-1.5-4.9v-0.1c-0.6-1.6-1.4-3.1-2.2-4.6 0-0.1-0.1-0.1-0.1-0.2-0.8-1.4-1.7-2.8-2.7-4.1-0.1-0.1-0.2-0.3-0.3-0.4-0.5-0.6-0.9-1.1-1.4-1.7 0-0.1-0.1-0.1-0.1-0.2-0.5-0.6-1-1.1-1.6-1.6l-0.4-0.4c-0.5-0.5-1.1-1-1.6-1.5l-0.1-0.1c-0.6-0.5-1.2-1-1.9-1.4-0.1-0.1-0.3-0.2-0.4-0.3-1.4-1-2.8-1.8-4.3-2.6l-0.1-0.1c-1.6-0.8-3.2-1.5-4.9-2-1.6-0.5-3.3-1-5-1.2-0.1 0-0.2 0-0.3-0.1l-2.4-0.3h-0.3c-0.7-0.1-1.3-0.1-2-0.1H640.1c-19.9 0-36 16.1-36 36s16.1 36 36 36h165L487.6 487.6c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5 9.2 0 18.4-3.5 25.5-10.5L856 221v162.8c0 19.9 16.1 36 36 36s36-16.1 36-36V134.1c0-0.8 0-1.7-0.1-2.5z"></path>
						</svg>
	
						`,
						callback: function (
							event,
							contextMenuEvent,
							liElement,
							menuListenerRootNode
						) {
							let $link = menuListenerRootNode;
							const { ruleKeyName, ruleIndex, shareCode, accessCode } =
								NetDiskView.praseElementAttributeRuleInfo($link);
							let url = NetDiskLinkClickModeUtils.getBlankUrl({
								ruleKeyName,
								ruleIndex,
								shareCode,
								accessCode,
							});
							NetDiskLinkClickMode.openBlankUrl(
								url,
								ruleKeyName,
								ruleIndex,
								shareCode,
								accessCode
							);
						},
					},
					{
						text: "后台打开",
						icon: /*html*/ `
							<svg
								class="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M819.2 864.711111 204.8 864.711111c-50.267022 0-91.022222-40.732444-91.022222-91.022222L113.777778 250.333867C113.777778 200.044089 154.532978 159.288889 204.8 159.288889l614.4 0c50.267022 0 91.022222 40.7552 91.022222 91.044978L910.222222 773.688889C910.222222 823.978667 869.467022 864.711111 819.2 864.711111zM864.711111 250.311111c0-25.122133-20.388978-45.511111-45.511111-45.511111L204.8 204.8c-25.122133 0-45.511111 20.388978-45.511111 45.511111l0 68.266667 705.422222 0 0 0L864.711111 250.311111zM864.711111 364.088889 864.711111 364.088889 159.288889 364.088889l0 409.6c0 25.122133 20.388978 45.511111 45.511111 45.511111l614.4 0c25.122133 0 45.511111-20.388978 45.511111-45.511111L864.711111 364.088889zM500.644978 714.387911c-1.115022 2.798933-2.776178 5.438578-5.028978 7.691378-4.983467 4.983467-11.628089 6.872178-18.136178 6.280533-5.848178 0.045511-11.696356-2.139022-16.156444-6.599111-1.501867-1.501867-2.389333-3.322311-3.367822-5.12l-133.12-131.913956c-8.897422-8.897422-8.897422-23.278933 0-32.176356s23.301689-8.897422 32.176356 0l121.309867 120.194844 211.5584-210.921244c8.8064-8.851911 23.119644-8.851911 31.926044 0 8.829156 8.874667 8.829156 23.233422 0 32.062578L500.644978 714.387911z">
								</path>
							</svg>
						`,
						callback: function (
							event,
							contextMenuEvent,
							liElement,
							menuListenerRootNode
						) {
							let $link = menuListenerRootNode;
							const { ruleKeyName, ruleIndex, shareCode, accessCode } =
								NetDiskView.praseElementAttributeRuleInfo($link);
							let url = NetDiskLinkClickModeUtils.getBlankUrl({
								ruleKeyName,
								ruleIndex,
								shareCode,
								accessCode,
							});
							NetDiskLinkClickMode.openBlankUrl(
								url,
								ruleKeyName,
								ruleIndex,
								shareCode,
								accessCode,
								true
							);
						},
					},
				],
			},
			{
				text: "访问码",
				icon: /*html*/ `
					<svg
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M288 384v-74.666667c0-123.722667 100.266667-224 224-224s224 100.224 224 224v74.666667h10.677333C811.445333 384 864 436.597333 864 501.333333v320c0 64.821333-52.469333 117.333333-117.322667 117.333334H277.333333C212.554667 938.666667 160 886.069333 160 821.333333V501.333333c0-64.821333 52.469333-117.333333 117.322667-117.333333H288z m64 0h320v-74.666667c0-88.426667-71.605333-160-160-160-88.384 0-160 71.626667-160 160v74.666667zM224 501.333333v320c0 29.397333 23.914667 53.333333 53.322667 53.333334H746.666667A53.269333 53.269333 0 0 0 800 821.333333V501.333333c0-29.397333-23.914667-53.333333-53.322667-53.333333H277.333333A53.269333 53.269333 0 0 0 224 501.333333z">
						</path>
					</svg>
				`,
				callback: function (event, contextMenuEvent, liElement) {
					return false;
				},
				item: [
					{
						text: "复制",
						icon: "documentCopy",
						callback(
							clickEvent,
							contextMenuEvent,
							liElement,
							menuListenerRootNode
						) {
							let $link = menuListenerRootNode;
							const { ruleKeyName, ruleIndex, shareCode, accessCode } =
								NetDiskView.praseElementAttributeRuleInfo($link);
							if (
								accessCode == null ||
								(typeof accessCode === "string" && accessCode.trim() === "")
							) {
								Qmsg.warning("无访问码");
								return;
							}
							utils
								.setClip(accessCode)
								.then((status) => {
									if (status) {
										Qmsg.success("已复制");
									} else {
										Qmsg.error("执行复制失败", { consoleLogContent: true });
									}
								})
								.catch(() => {
									Qmsg.error("执行复制失败", { consoleLogContent: true });
								});
						},
					},
					{
						text: "修改",
						icon: `edit`,
						callback: function (
							event,
							contextMenuEvent,
							liElement,
							menuListenerRootNode
						) {
							let $link = menuListenerRootNode;
							const { ruleKeyName, ruleIndex, shareCode, accessCode } =
								NetDiskView.praseElementAttributeRuleInfo($link);

							NetDiskUI.newAccessCodeView(
								this.text as string,
								ruleKeyName,
								ruleIndex,
								shareCode,
								accessCode,
								(option) => {
									if (isHistoryView) {
										// 来自历史匹配记录界面的
										if (option.isUpdatedMatchedDict) {
											let currentTime = new Date().getTime();
											let $updateTime = $link
												.closest("li")!
												.querySelector<HTMLElement>(
													".netdiskrecord-update-time"
												)!;
											DOMUtils.text($updateTime, utils.formatTime(currentTime));
											DOMUtils.attr(
												$link,
												"data-accesscode",
												option.accessCode!
											);
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
										DOMUtils.attr($link, "data-accesscode", option.accessCode!);
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
				],
			},
			{
				text: "其它",
				icon: /*html*/ `
				<svg
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M826.92 857.397H197.08c-33.667 0-60.953-27.287-60.953-60.953V349.46c0-33.666 27.286-60.952 60.952-60.952h121.905v-60.952c0-33.666 27.286-60.953 60.953-60.953h243.809c33.666 0 60.952 27.287 60.952 60.953v60.952H826.921c33.666 0 60.952 27.286 60.952 60.952v446.984c0 33.666-27.286 60.953-60.952 60.953zM644.064 247.873c0-22.43-18.204-40.635-40.634-40.635H400.254c-22.43 0-40.635 18.205-40.635 40.635v40.635h284.444v-40.635z m203.175 121.905c0-22.43-18.204-40.635-40.635-40.635H217.397c-22.43 0-40.635 18.204-40.635 40.635v162.54h304.762v-50.794c0-16.823 13.653-30.476 30.476-30.476s30.476 13.653 30.476 30.476v50.793h304.762v-162.54z m0 203.174H542.476v10.16c0 16.842-13.653 30.475-30.476 30.475s-30.476-13.633-30.476-30.476v-10.159H176.762v203.175c0 22.43 18.204 40.635 40.635 40.635h589.206c22.43 0 40.635-18.205 40.635-40.635V572.952z">
					</path>
				</svg>
	
				`,
				callback(
					clickEvent,
					contextMenuEvent,
					liElement,
					menuListenerRootNode
				) {
					return false;
				},
				item: [
					{
						text: "复制全部",
						icon: "documentCopy",
						callback(
							clickEvent,
							contextMenuEvent,
							liElement,
							menuListenerRootNode
						) {
							let $link = menuListenerRootNode;
							let $boxAll = $link.closest<HTMLElement>(".netdisk-url-box-all")!;
							// 获取全部链接的复制文本
							let copyTextList: string[] = [];
							$boxAll
								.querySelectorAll<HTMLElement>(selector)
								.forEach(($linkItem) => {
									const { ruleKeyName, ruleIndex, shareCode, accessCode } =
										NetDiskView.praseElementAttributeRuleInfo($linkItem);
									// 复制的文本
									let copyUrlText = NetDiskLinkClickModeUtils.getCopyUrlInfo({
										ruleKeyName,
										ruleIndex,
										shareCode,
										accessCode,
									});
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
				],
			},
		];

		if (!isHistoryView) {
			// 如果当前视图不是历史匹配记录的
			// 那么添加清空当前or所有已匹配的项
			showTextList[2].item!.push(
				{
					text: "删除当前",
					icon: "delete",
					callback: function (
						event,
						contextMenuEvent,
						liElement,
						menuListenerRootNode
					) {
						let $link = menuListenerRootNode;
						let $box = $link.closest<HTMLElement>(".netdisk-url-box")!;
						const { ruleKeyName, ruleIndex, shareCode, accessCode } =
							NetDiskView.praseElementAttributeRuleInfo($link);
						let flag = false;
						NetDisk.$match.matchedInfo.forEach(
							(netDiskItem, netDiskKeyName) => {
								if (netDiskKeyName !== ruleKeyName) {
									return;
								}
								netDiskItem.forEach((matchedInfo, matchedShareCode) => {
									if (matchedShareCode === shareCode) {
										flag = true;
										netDiskItem.delete(matchedShareCode);
										log.info(
											`删除：`,
											netDiskKeyName,
											JSON.stringify(matchedInfo)
										);
									}
								});
							}
						);
						// 更新匹配到的key
						NetDisk.$match.matchedInfoRuleKey.clear();
						NetDisk.$match.matchedInfo.forEach(
							(netDiskItem, netDiskKeyName) => {
								if (netDiskItem.length) {
									NetDisk.$match.matchedInfoRuleKey.add(netDiskKeyName);
								}
							}
						);
						if (flag) {
							$box.remove();
						} else {
							Qmsg.error("发生意外情况，未在已匹配到的信息中到对应的网盘信息");
						}
					},
				},
				{
					text: "删除所有",
					icon: "delete",
					callback: function (
						event,
						contextMenuEvent,
						liElement,
						menuListenerRootNode
					) {
						let $link = menuListenerRootNode;
						let $boxAll = $link.closest<HTMLElement>(".netdisk-url-box-all")!;
						const { ruleKeyName, ruleIndex, shareCode, accessCode } =
							NetDiskView.praseElementAttributeRuleInfo($link);
						NetDisk.$match.matchedInfo.forEach(
							(netDiskItem, netDiskKeyName) => {
								netDiskItem.clear();
							}
						);
						NetDisk.$match.matchedInfoRuleKey.clear();
						DOMUtils.html($boxAll, "");
					},
				}
			);
		}

		NetDiskUI.view.registerContextMenu(target, selector, showTextList);
	},
};
