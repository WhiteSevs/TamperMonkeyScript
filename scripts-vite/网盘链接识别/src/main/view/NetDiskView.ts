import { NetDisk } from "../NetDisk";
import { NetDiskPops } from "../pops/NetDiskPops";
import { NetDiskUI } from "../ui/NetDiskUI";
import { DOMUtils, log, pops, utils } from "@/env";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { NetDiskCheckLinkValidity } from "../check-valid/NetDiskCheckLinkValidity";
import {
	PopsRightClickMenuDataDetails,
	PopsRightClickMenuDetails,
} from "@whitesev/pops/dist/types/src/components/rightClickMenu/indexType";
import Qmsg from "qmsg";
import { NetDiskSuspensionConfig } from "./suspension/NetDiskSuspensionView";
import {
	NetDiskLinkClickMode,
	NetDiskLinkClickModeUtils,
	type NetDiskRuleSettingConfigurationInterface_linkClickMode,
} from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskRuleData } from "@/main/data/NetDiskRuleData";
import indexCSS from "./index.css?raw";
import { GenerateData } from "@/main/data/NetDiskGenerateDataUtils";

/**
 * 传递给生成需要的网盘参数数据
 */
type NetDiskElementRuleData = {
	netDisk: string;
	shareCode: string;
	accessCode: string | undefined | null;
	netDiskIndex: number | string;
};

/**
 * 注册右侧菜单需要传递的配置
 */
export type RegisterContextMenuShowTextOption = Pick<
	PopsRightClickMenuDataDetails,
	"text" | "callback"
>;
export const NetDiskView = {
	show() {
		if (NetDiskUI.Alias.uiLinkAlias == null) {
			this.createView();
			this.initViewEvent();
		} else {
			NetDiskUI.Alias.uiLinkAlias.show();
		}
	},
	/**
	 * 创建视图
	 */
	createView() {
		const NetDiskViewConfig = {
			view: {
				"netdisl-small-window-shrink-status": GenerateData(
					"netdisl-small-window-shrink-status",
					false
				),
				"netdisk-ui-small-window-position": GenerateData<{
					left: number;
					top: number;
				} | null>("netdisk-ui-small-window-position", null),
			},
		};
		let viewAddHTML = "";
		// 根据匹配到的链接生成视图
		NetDiskUI.isMatchedNetDiskIconMap.forEach((netDiskName) => {
			let netDiskDict = NetDisk.$match.matchedInfo.get(netDiskName);
			let netDiskData = netDiskDict.getItems() as any;
			Object.keys(netDiskData).forEach((shareCode) => {
				let accessCodeDict = netDiskData[shareCode];
				let uiLink = NetDisk.handleLinkShow(
					netDiskName,
					accessCodeDict["netDiskIndex"],
					shareCode,
					accessCodeDict["accessCode"],
					accessCodeDict["matchText"]
				);
				viewAddHTML =
					viewAddHTML +
					this.createViewBoxElementInfo(
						NetDiskUI.src.icon[netDiskName],
						netDiskName,
						accessCodeDict["netDiskIndex"],
						shareCode,
						accessCodeDict["accessCode"],
						uiLink
					).html;
			});
		});
		let viewHTML = /*html*/ `
            <div class="netdisk-url-box-all">
                ${viewAddHTML}
            </div>`;

		if (
			NetDiskGlobalData.features["netdisk-behavior-mode"].value
				.toLowerCase()
				.includes("smallwindow")
		) {
			NetDiskUI.Alias.uiLinkAlias = NetDiskPops.alert(
				{
					title: {
						text: "网盘",
						position: "center",
					},
					content: {
						text: viewHTML,
						html: true,
					},
					btn: {
						ok: {
							enable: false,
						},
						close: {
							callback(event) {
								if (
									NetDiskGlobalData.features["netdisk-behavior-mode"].value
										.toLowerCase()
										.includes("suspension")
								) {
									NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value =
										"suspension";
									event.hide();
									NetDiskUI.suspension.show();
								} else {
									// @ts-ignore
									NetDiskUI.Alias.uiLinkAlias = void 0;
									event.close();
								}
							},
						},
					},
					mask: {
						enable: false,
					},
					// @ts-ignore
					animation: "",
					beforeAppendToPageCallBack($shadowRoot, $shadowContainer) {
						let buttonHeaderControl = $shadowRoot.querySelector<HTMLElement>(
							".pops-header-control"
						)!;
						let alertContent = $shadowRoot.querySelector<HTMLElement>(
							".pops-alert-content"
						)!;
						/* 展开 */
						let launchIcon = DOMUtils.createElement(
							"button",
							{
								className: "pops-header-control",
								innerHTML: /*html*/ `
                                <i class="pops-icon">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M290.816 774.144h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m462.848-524.288h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m188.416 323.584c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
                                    </path>
                                </svg>
                                </i>
                                `,
							},
							{
								type: "launch",
								"data-header": true,
							}
						);
						/* 收起 */
						let shrinkIcon = DOMUtils.createElement(
							"button",
							{
								className: "pops-header-control",
								innerHTML: /*html*/ `
                                <i class="pops-icon">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M618.496 425.984h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m-192.512 172.032h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m516.096-24.576c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
                                    </path>
                                </svg>
                                </i>
                                `,
							},
							{
								type: "shrink",
								"data-header": true,
							}
						);
						DOMUtils.before(buttonHeaderControl, launchIcon);
						DOMUtils.before(buttonHeaderControl, shrinkIcon);
						DOMUtils.on(
							launchIcon,
							"click",
							void 0,
							function () {
								/* 展开-切换为收缩图标 */
								launchIcon.classList.add("pops-hide-important");
								shrinkIcon.classList.remove("pops-hide-important");
								alertContent.classList.remove("pops-hide-important");
								NetDiskViewConfig.view[
									"netdisl-small-window-shrink-status"
								].value = false;
							},
							{
								capture: true,
							}
						);
						DOMUtils.on(
							shrinkIcon,
							"click",
							void 0,
							function () {
								/* 收缩-切换为展开图标 */
								shrinkIcon.classList.add("pops-hide-important");
								launchIcon.classList.remove("pops-hide-important");
								alertContent.classList.add("pops-hide-important");
								alertContent.classList.add("pops-no-border-important");
								NetDiskViewConfig.view[
									"netdisl-small-window-shrink-status"
								].value = true;
							},
							{
								capture: true,
							}
						);
						if (
							NetDiskViewConfig.view["netdisl-small-window-shrink-status"].value
						) {
							shrinkIcon.click();
						} else {
							launchIcon.click();
						}
					},
					dragMoveCallBack(moveElement, left, top) {
						NetDiskViewConfig.view["netdisk-ui-small-window-position"].value = {
							left: left,
							top: top,
						};
					},
					class: "whitesevPop",
					style: /*css*/ `
                    ${indexCSS}

                    .pops {
                        --container-title-height: 35px;
                        --content-max-height: ${NetDiskGlobalData.smallWindow["netdisk-ui-small-window-max-height"].value}px;
                        --netdisk-line-space: 8px;
                        --netdisk-icon-size: 24px;
                    }
                    .pops[type-value="alert"]{
                        transform: none;
                    }
                    .pops {
                        max-height: var(--content-max-height);
                    }
                    .pops[type-value=alert] .pops-alert-content{
                        max-height: calc(var(--content-max-height) - var(--container-title-height) - var(--container-bottom-btn-height));
                    }
                    .pops-header-controls button.pops-header-control[type][data-header]{
                        padding: 0px 5px;
                    }
                    .netdisk-url-div{
                        padding: 0px;
                    }
                    .netdisk-icon .netdisk-icon-img{
                        width: var(--netdisk-icon-size);
                        height: var(--netdisk-icon-size);
                        min-width: var(--netdisk-icon-size);
                        min-height: var(--netdisk-icon-size);
                        margin: 0px var(--netdisk-line-space);
                    }
                    .netdisk-status{
                        margin-right: var(--netdisk-line-space);
                    }
                    .netdisk-url{
                        padding: 2px 0px;
                    }
                    `,
				},
				NetDiskUI.popsStyle.mainViewSmallWindow
			);

			let smallWindowPosition =
				NetDiskViewConfig.view["netdisk-ui-small-window-position"].value;
			let popsElement = NetDiskUI.Alias.uiLinkAlias.popsElement;
			if (smallWindowPosition) {
				let viewWidth = DOMUtils.width(popsElement, true);
				let viewHeight = DOMUtils.height(popsElement, true);
				let maxWindowLeft = DOMUtils.width(window);
				let maxWindowTop = DOMUtils.height(window);
				const { transformLeft, transformTop } =
					DOMUtils.getTransform(popsElement);
				/* 最大的left偏移*/
				let maxLeft = maxWindowLeft - viewWidth + transformLeft;
				/* 最大的top偏移 */
				let maxTop = maxWindowTop - viewHeight + transformTop;
				/* 最小的left偏移*/
				let minLeft = 0 + transformLeft;
				/* 最小的top偏移*/
				let minTop = 0 + transformTop;
				if (smallWindowPosition.top > maxTop) {
					smallWindowPosition.top = maxTop;
				} else if (smallWindowPosition.top < minTop) {
					smallWindowPosition.top = minTop;
				}
				if (smallWindowPosition.left > maxLeft) {
					smallWindowPosition.left = maxLeft;
				} else if (smallWindowPosition.left < minLeft) {
					smallWindowPosition.left = minLeft;
				}
				popsElement.style.transitionDuration = "0s";
				popsElement.style.left = smallWindowPosition["left"] + "px";
				popsElement.style.top = smallWindowPosition["top"] + "px";
				setTimeout(() => {
					popsElement.style.transitionDuration = "0s";
				}, 300);
			}
		} else {
			NetDiskUI.Alias.uiLinkAlias = NetDiskPops.alert(
				{
					title: {
						text: "网盘",
						position: "center",
					},
					content: {
						text: viewHTML,
						html: true,
					},
					btn: {
						ok: {
							enable: false,
						},
						close: {
							callback(event) {
								// @ts-ignore
								NetDiskUI.Alias.uiLinkAlias = void 0;
								event.close();
							},
						},
					},
					mask: {
						clickCallBack(originalRun) {
							originalRun();
							// @ts-ignore
							NetDiskUI.Alias.uiLinkAlias = void 0;
						},
					},
					class: "whitesevPop",
					style: `
                    ${indexCSS}

                    .pops {
                        max-height: ${pops.isPhone() ? "50vh" : "60vh"};
                    }
                    `,
				},
				NetDiskUI.popsStyle.mainView
			);
		}

		NetDiskUI.Alias.uiLinkAlias.popsElement
			.querySelectorAll<HTMLElement>(".netdisk-url-box-all .netdisk-url-box")
			.forEach(($netDiskBox) => {
				// 网盘链接验证
				let netDiskName = $netDiskBox
					.querySelector<HTMLElement>(".netdisk-link")!
					.getAttribute("data-netdisk")!;
				let netDiskIndex = parseInt(
					$netDiskBox
						.querySelector<HTMLElement>(".netdisk-link")!
						.getAttribute("data-netdisk-index")!
				);
				let shareCode = $netDiskBox
					.querySelector<HTMLElement>(".netdisk-link")!
					.getAttribute("data-sharecode")!;
				let accessCode = $netDiskBox
					.querySelector<HTMLElement>(".netdisk-link")!
					.getAttribute("data-accesscode")!;
				NetDiskCheckLinkValidity.check(
					$netDiskBox,
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode
				);
			});
	},
	/**
	 * 初始化事件（在创建视图后）
	 */
	initViewEvent() {
		NetDiskUI.setRightClickMenu(
			NetDiskUI.Alias.uiLinkAlias.$shadowRoot,
			".whitesevPop .netdisk-url a"
		);
		this.registerIconGotoPagePosition(NetDiskUI.Alias.uiLinkAlias.$shadowRoot);
		this.setNetDiskUrlClickEvent(
			NetDiskUI.Alias.uiLinkAlias.$shadowRoot,
			".netdisk-url a"
		);
		NetDiskUI.setGlobalRightClickMenu(
			NetDiskUI.Alias.uiLinkAlias.$shadowRoot.querySelector<HTMLElement>(
				".pops .pops-alert-title > p"
			)!
		);
	},
	/**
	 * 创建在元素属性上的attribute的数据JSON
	 */
	createElementAttributeRuleInfoJSON(data: NetDiskElementRuleData) {
		return {
			/** 网盘 */
			"data-netdisk": data.netDisk,
			/** 网盘索引 */
			"data-netdisk-index": data.netDiskIndex,
			/** 访问码 */
			"data-sharecode": data.shareCode,
			/** 访问码 */
			"data-accesscode": data.accessCode,
		};
	},
	/**
	 * 创建在元素属性上的attribute的数据
	 * @param data 数据
	 * @param $ele 需要处理的元素
	 */
	handleElementAttributeRuleInfo(
		data: NetDiskElementRuleData,
		$ele: HTMLElement | HTMLElement[]
	) {
		let ruleInfoJSON = this.createElementAttributeRuleInfoJSON(data);
		for (const key in ruleInfoJSON) {
			const value = ruleInfoJSON[key as keyof typeof ruleInfoJSON]!;
			if (Array.isArray($ele)) {
				$ele.forEach(($ele) => {
					$ele.setAttribute(key, value.toString());
				});
			} else {
				$ele.setAttribute(key, value.toString());
			}
		}
	},
	/**
	 * 解析创建在元素属性上的attribute的数据
	 */
	praseElementAttributeRuleInfo($ele: HTMLElement) {
		let result = {
			/** 网盘名称 */
			netDiskName: $ele.getAttribute("data-netdisk")!,
			/** 网盘索引 */
			netDiskIndex: parseInt($ele.getAttribute("data-netdisk-index")!),
			/** 分享码 */
			shareCode: $ele.getAttribute("data-sharecode")!,
			/** 提取码 */
			accessCode: $ele.getAttribute("data-accesscode")!,
		};
		if (isNaN(result.netDiskIndex)) {
			log.warn(["元素上的netDiskIndex的值是NaN", $ele]);
			result.netDiskIndex = 0;
		}
		return result;
	},
	/**
	 * 创建每一项的网盘元素信息
	 * @param netDiskImgSrc 网盘图标src
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode
	 * @param accessCode
	 * @param uiLinkText 显示出来的链接文本
	 */
	createViewBoxElementInfo(
		netDiskImgSrc: string,
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string,
		uiLinkText: string
	) {
		let $viewBox = DOMUtils.createElement("div", {
			className: "netdisk-url-box",
			innerHTML: /*html*/ `
			<div class="netdisk-url-div">
                <div class="netdisk-icon">
                    <div class="netdisk-icon-img">
                    </div>
                </div>
                <div class="netdisk-status">

                </div>
                <div class="netdisk-url">
                    <a  class="netdisk-link" href="javascript:;" isvisited="false"></a>
                </div>
            </div>
			`,
		});

		let $urlDiv = $viewBox.querySelector<HTMLDivElement>(".netdisk-url-div")!;
		let $icon = $viewBox.querySelector<HTMLDivElement>(".netdisk-icon")!;
		let $iconImg = $viewBox.querySelector<HTMLDivElement>(".netdisk-icon-img")!;
		let $checkValidStatus =
			$viewBox.querySelector<HTMLDivElement>(".netdisk-status")!;
		let $url = $viewBox.querySelector<HTMLDivElement>(".netdisk-url")!;
		let $link = $viewBox.querySelector<HTMLDivElement>(".netdisk-link")!;
		// 设置网盘图标（设置为背景图片）
		$iconImg.style.cssText = `background: url(${netDiskImgSrc}) no-repeat;background-size: 100%;`;
		// 设置显示的网盘链接
		$link.innerHTML = uiLinkText;

		// 将数据信息添加到元素attr上
		this.handleElementAttributeRuleInfo(
			{
				netDisk: netDiskName,
				netDiskIndex: netDiskIndex,
				shareCode: shareCode,
				accessCode: accessCode,
			},
			[$iconImg, $link]
		);
		return {
			$viewBox,
			$urlDiv,
			$icon,
			$iconImg,
			$checkValidStatus,
			$url,
			$link,
			html: $viewBox.outerHTML,
		};
	},
	/**
	 * 设置网盘链接点击事件
	 * @param target
	 * @param clickNodeSelector 元素选择器
	 */
	setNetDiskUrlClickEvent(target: any, clickNodeSelector: string) {
		DOMUtils.on(target, "click", clickNodeSelector, (event) => {
			let $click = event.target as HTMLElement;
			$click.setAttribute("isvisited", "true");

			// 解析数据
			const data = NetDiskView.praseElementAttributeRuleInfo($click);
			this.netDiskUrlClickEvent({
				data: data,
			});
		});
	},
	/**
	 * 网盘链接点击事件
	 * @param option
	 */
	netDiskUrlClickEvent(option: {
		data: {
			netDiskName: string;
			netDiskIndex: number;
			shareCode: string;
			accessCode: string;
		};
		/** 自定义的点击动作，优先级最高 */
		clickMode?: NetDiskRuleSettingConfigurationInterface_linkClickMode;
	}) {
		const { netDiskName, netDiskIndex, shareCode, accessCode } = option.data;
		// 获取对应的点击动作
		let linkClickMode =
			option.clickMode ??
			NetDiskRuleData.function.linkClickMode(option.data.netDiskName);
		if (linkClickMode === "copy") {
			// 复制
			NetDiskLinkClickMode.copy(
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode
			);
		} else if (linkClickMode === "openBlank") {
			// 新页打开
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode
			);
			// 判断scheme转发新标签页链接是否开启
			let isForwardBlankUrl =
				NetDiskRuleData.schemeUri.isForwardBlankLink(netDiskName);
			if (isForwardBlankUrl) {
				// 用scheme处理的进行新标签打开
				NetDiskLinkClickMode.openBlankWithScheme(
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode
				);
			} else {
				// 否则用原链接打开
				NetDiskLinkClickMode.openBlank(
					url,
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode
				);
			}
		} else if (linkClickMode === "parseFile") {
			// 文件解析
			NetDiskLinkClickMode.parseFile(
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode
			);
		} else {
			log.error("未知点击动作：" + linkClickMode);
			Qmsg.error("未知点击动作：" + linkClickMode);
		}
	},
	/**
	 * 注册右键菜单
	 * @param target
	 * @param selector
	 * @param showTextList 右键菜单的内容
	 * @param className className属性
	 */
	registerContextMenu(
		target: HTMLElement | (Window & typeof globalThis) | ShadowRoot,
		selector?: string,
		showTextList: RegisterContextMenuShowTextOption[] = [],
		className: string = "whitesevSuspensionContextMenu"
	) {
		let data: PopsRightClickMenuDataDetails[] = [];
		showTextList.forEach((item) => {
			data.push({
				icon: "",
				iconIsLoading: false,
				text: item.text,
				callback: item.callback,
			});
		});
		let detail: PopsRightClickMenuDetails = {
			target: target,
			targetSelector: selector,
			data: data,
			isAnimation: false,
			className: className,
			only: true,
		};
		NetDiskPops.rightClickMenu(detail);
	},
	/**
	 * 添加新的链接
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode 分享码
	 * @param accessCode 访问码
	 * @param matchText 匹配到的文本
	 */
	addLinkView(
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string,
		matchText: string
	) {
		NetDiskUI.netDiskHistoryMatch.changeMatchedData(
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode,
			matchText
		);
		if (!NetDiskUI.Alias.uiLinkAlias) {
			return;
		}
		log.info([netDiskName, netDiskIndex, shareCode, accessCode]);
		let icon = NetDiskUI.src.icon[netDiskName];
		let uiLink = NetDisk.handleLinkShow(
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode,
			matchText
		);
		let insertDOM = this.createViewBoxElementInfo(
			icon,
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode,
			uiLink
		);
		/** box容器 */
		let $urlBoxAll =
			NetDiskUI.Alias.uiLinkAlias.popsElement.querySelector<HTMLElement>(
				".netdisk-url-box-all"
			)!;
		DOMUtils.append($urlBoxAll, insertDOM.$viewBox);
		/* 按顺序来，最后一个 */
		let $urlBox = $urlBoxAll.children[
			$urlBoxAll.children.length - 1
		] as HTMLElement;
		NetDiskCheckLinkValidity.check(
			$urlBox,
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode
		);
	},
	/**
	 * 修改已存在的view
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode 分享码
	 * @param accessCode 访问码
	 * @param matchText 匹配到的文本
	 */
	changeLinkView(
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string,
		matchText: string
	) {
		NetDiskUI.netDiskHistoryMatch.changeMatchedData(
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode,
			matchText
		);
		if (!NetDiskUI.Alias.uiLinkAlias) {
			return;
		}
		let uiLink = NetDisk.handleLinkShow(
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode,
			matchText
		);
		let needChangeDOM =
			NetDiskUI.Alias.uiLinkAlias.popsElement.querySelector<HTMLElement>(
				`.netdisk-url a[data-sharecode='${shareCode}'][data-netdisk-index='${netDiskIndex}']`
			)!;
		log.info("修改网盘链接视图");
		log.info(needChangeDOM);
		needChangeDOM.setAttribute("data-accesscode", accessCode);
		DOMUtils.html(needChangeDOM, uiLink);
	},
	/**
	 * 设置点击图标按钮导航至该网盘链接所在网页中位置
	 */
	registerIconGotoPagePosition(targetElement: ShadowRoot | Document) {
		let findGenerator:
			| Generator<HTMLElement | ChildNode, void, any>
			| undefined = void 0;
		let iterator: IteratorResult<HTMLElement | ChildNode, void> | undefined =
			void 0;
		/**
		 * 上一个的shareCode
		 */
		let prevSearchShareCode: string | undefined = void 0;
		DOMUtils.on(
			targetElement,
			"click",
			".whitesevPop .netdisk-icon .netdisk-icon-img",
			function (event) {
				let $click = event.target as HTMLElement;
				let dataSharecode = $click.getAttribute("data-sharecode")!;
				if (
					!NetDiskGlobalData.smallIconNavgiator[
						"pops-netdisk-icon-click-event-find-sharecode"
					].value
				) {
					return;
				}
				if (typeof dataSharecode !== "string") {
					Qmsg.error("获取data-sharecode属性失败");
					return;
				}
				if (prevSearchShareCode == void 0) {
					prevSearchShareCode = dataSharecode;
				} else if (prevSearchShareCode !== dataSharecode) {
					/* 切换到另一个shareCode搜索 */
					log.info(
						`上一个搜索：${prevSearchShareCode}，切换至：${dataSharecode}`
					);
					findGenerator = void 0;
					iterator = void 0;
					prevSearchShareCode = dataSharecode;
				}
				if (findGenerator == void 0) {
					/* 未找到元素或者已迭代完毕 */
					findGenerator = utils.findElementsWithText(
						document.documentElement,
						dataSharecode
					);
					iterator = findGenerator.next();
				}
				if (iterator?.value) {
					log.success(["定位元素", iterator]);
					if (
						iterator.value.nodeType === Node.ELEMENT_NODE &&
						(iterator.value as HTMLElement).getClientRects().length
					) {
						/* 可见 */
						/* 滚动到该元素 */
						(iterator.value as HTMLElement).scrollIntoView({
							behavior: "smooth",
							block: "center",
							inline: "nearest",
						});
						if (
							NetDiskGlobalData.smallIconNavgiator[
								"pops-netdisk-icon-click-event-find-sharecode-with-select"
							].value
						) {
							/* 开启功能 */
							let elementText =
								(iterator.value as HTMLElement).innerText ||
								(iterator.value as HTMLElement).textContent!;
							let childTextNode: ChildNode | undefined = void 0;
							let startIndex: number | undefined = void 0;
							let endIndex: number | undefined = void 0;
							if (elementText.includes(dataSharecode)) {
								/* 文字包含shareCode */
								let textNodeList = Array.from(
									(iterator.value as HTMLElement).childNodes
								).filter((ele) => ele.nodeType === Node.TEXT_NODE);
								for (const textNode of textNodeList) {
									if (
										(textNode as HTMLElement)!.textContent!.includes(
											dataSharecode
										)
									) {
										childTextNode = textNode;
										startIndex = textNode!.textContent!.indexOf(dataSharecode);
										endIndex = startIndex + dataSharecode.length;
										break;
									}
								}
							}
							try {
								utils.selectElementText(
									iterator.value,
									childTextNode!,
									startIndex,
									endIndex
								);
							} catch (error) {
								log.error(error);
								utils.selectElementText(iterator.value as HTMLElement);
							}
						}
					} else if (
						iterator.value.nodeType === Node.TEXT_NODE &&
						iterator.value!.parentElement!.getClientRects().length
					) {
						/* #text元素且可见 */
						if (
							NetDiskGlobalData.smallIconNavgiator[
								"pops-netdisk-icon-click-event-find-sharecode-with-select"
							].value
						) {
							let elementText =
								iterator.value.textContent || iterator.value.nodeValue!;
							let childTextNode = iterator.value;
							let startIndex = elementText.indexOf(dataSharecode);
							let endIndex = startIndex + dataSharecode.length;
							try {
								utils.selectElementText(
									iterator.value,
									childTextNode,
									startIndex,
									endIndex
								);
							} catch (error) {
								log.error(error);
								utils.selectElementText(iterator.value.parentElement!);
							}
							let selection = globalThis.getSelection()!;
							if (selection.rangeCount > 0) {
								let range = selection.getRangeAt(0);
								let rect = range.getBoundingClientRect();
								let scrollYOffset = globalThis.scrollY;
								/* 居中定位 */
								let position =
									rect.top + scrollYOffset - globalThis.innerHeight / 2;
								globalThis.scrollTo({
									behavior: "smooth",
									top: position,
								});
							} else {
								iterator.value.parentElement!.scrollIntoView({
									behavior: "smooth",
									block: "center",
									inline: "nearest",
								});
							}
						} else {
							try {
								let range = new Range();
								range.selectNodeContents(iterator.value);
								let rect = range.getBoundingClientRect();
								let scrollYOffset = globalThis.scrollY;
								/* 居中定位 */
								let position =
									rect.top + scrollYOffset - globalThis.innerHeight / 2;
								globalThis.scrollTo({
									behavior: "smooth",
									top: position,
								});
							} catch (error) {
								log.error(error);
								iterator.value.parentElement!.scrollIntoView({
									behavior: "smooth",
									block: "center",
									inline: "nearest",
								});
							}
						}
					} else {
						log.error(["无法定位该元素位置", iterator.value]);
						Qmsg.error(
							`无法定位该元素位置，类型：<${(
								iterator.value.nodeName ||
								(iterator.value as HTMLElement).localName ||
								(iterator.value as HTMLElement).tagName
							).toLowerCase()}>`,
							{
								html: false,
							}
						);
					}
				}

				iterator = findGenerator.next();
				if (iterator.done) {
					/* 循环查找 */
					if (
						!NetDiskGlobalData.smallIconNavgiator[
							"pops-netdisk-icon-click-event-loop-find-sharecode"
						].value
					) {
						Qmsg.info("已经定位至最后一个元素了");
						return;
					}
					findGenerator = void 0;
					iterator = void 0;
				}
			}
		);
	},
};
