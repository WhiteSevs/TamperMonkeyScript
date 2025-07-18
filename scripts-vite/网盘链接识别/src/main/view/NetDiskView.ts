import { NetDisk } from "../NetDisk";
import { NetDiskPops } from "../pops/NetDiskPops";
import { NetDiskUI } from "../ui/NetDiskUI";
import { DOMUtils, log, pops, utils } from "@/env";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { NetDiskCheckLinkValidity } from "../check-valid/NetDiskCheckLinkValidity";
import {
	PopsRightClickMenuDataDetails,
	PopsRightClickMenuDetails,
} from "@whitesev/pops/dist/types/src/components/rightClickMenu/types/index";
import Qmsg from "qmsg";
import { NetDiskSuspensionConfig } from "./suspension/NetDiskSuspensionView";
import {
	NetDiskLinkClickMode,
	NetDiskLinkClickModeUtils,
} from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskRuleData } from "@/main/data/NetDiskRuleData";
import indexCSS from "./index.css?raw";
import { GenerateData } from "@/main/data/NetDiskGenerateDataUtils";
import { NetDiskFilterScheme } from "../scheme/NetDiskFilterScheme";

/**
 * 传递给生成需要的网盘参数数据
 */
type NetDiskElementRuleData = {
	/**
	 * 规则键名
	 */
	ruleKeyName: string;
	/**
	 * 规则下标
	 */
	ruleIndex: number | string;
	/**
	 * 分享码
	 */
	shareCode: string;
	/**
	 * 访问码
	 */
	accessCode: AccessCodeType;
};

/**
 * 元素的attribute上存储的匹配到的规则信息
 */
type RuleElementAttr = {
	/**
	 * 规则键名
	 */
	ruleKeyName: string;
	/**
	 * 规则下标
	 */
	ruleIndex: number;
	/**
	 * 分享码
	 */
	shareCode: string;
	/**
	 * 访问码
	 */
	accessCode: AccessCodeType;
};

/**
 * 注册右侧菜单需要传递的配置
 */
export type RegisterContextMenuShowTextOption = Pick<
	PopsRightClickMenuDataDetails,
	"text" | "callback" | "item"
> & {
	icon?: PopsRightClickMenuDataDetails["icon"];
	iconIsLoading?: PopsRightClickMenuDataDetails["iconIsLoading"];
};

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
		const boxAllHTML = /*html*/ `<div class="netdisk-url-box-all"></div>`;
		if (
			NetDiskGlobalData.features["netdisk-behavior-mode"].value
				.toLowerCase()
				.includes("smallwindow")
		) {
			// 小窗
			NetDiskUI.Alias.uiLinkAlias = NetDiskPops.alert(
				{
					title: {
						text: "网盘",
						position: "center",
					},
					content: {
						text: boxAllHTML,
						html: true,
					},
					btn: {
						ok: {
							enable: false,
						},
						close: {
							callback(detail) {
								if (
									NetDiskGlobalData.features["netdisk-behavior-mode"].value
										.toLowerCase()
										.includes("suspension")
								) {
									NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value =
										"suspension";
									detail.hide();
									NetDiskUI.suspension.show();
								} else {
									// @ts-ignore
									NetDiskUI.Alias.uiLinkAlias = void 0;
									detail.close();
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
						let $headerControl = $shadowRoot.querySelector<HTMLElement>(
							".pops-header-control"
						)!;
						let $title =
							$shadowRoot.querySelector<HTMLElement>(".pops-alert-title")!;
						let $content = $shadowRoot.querySelector<HTMLElement>(
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
								type: "button",
								"data-type": "launch",
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
								type: "button",
								"data-type": "shrink",
								"data-header": true,
							}
						);
						DOMUtils.before($headerControl, launchIcon);
						DOMUtils.before($headerControl, shrinkIcon);
						DOMUtils.on(
							launchIcon,
							"click",
							function () {
								/* 展开-切换为收缩图标 */
								DOMUtils.addClass(launchIcon, "pops-hide-important");
								DOMUtils.removeClass(shrinkIcon, "pops-hide-important");
								DOMUtils.removeClass($title, "pops-no-border-important");
								DOMUtils.removeClass($content, "pops-hide-important");
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
							function () {
								/* 收缩-切换为展开图标 */
								DOMUtils.removeClass(launchIcon, "pops-hide-important");
								DOMUtils.addClass(shrinkIcon, "pops-hide-important");
								DOMUtils.addClass($title, "pops-no-border-important");
								DOMUtils.addClass($content, "pops-hide-important");
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
			// 大窗
			NetDiskUI.Alias.uiLinkAlias = NetDiskPops.alert(
				{
					title: {
						text: "网盘",
						position: "center",
					},
					content: {
						text: boxAllHTML,
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
					style: /*css*/ `
                    ${indexCSS}

                    .pops {
                        max-height: 60vh;
                    }
					@media screen and (max-width: 600px) {
						.pops {
                       		max-height: 50vh;
                    	}
					}
                    `,
				},
				NetDiskUI.popsStyle.mainView
			);
		}
		let $urlBoxAll =
			NetDiskUI.Alias.uiLinkAlias.$shadowRoot.querySelector<HTMLElement>(
				".netdisk-url-box-all"
			)!;

		// 把匹配到的添加到视图中
		NetDiskUI.isMatchedNetDiskIconMap.forEach((ruleKeyName) => {
			let netDiskDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
			let documentFragment = document.createDocumentFragment();
			netDiskDict.forEach((netDiskData, shareCode) => {
				let uiLink = NetDisk.handleLinkShow({
					ruleKeyName: ruleKeyName,
					ruleIndex: netDiskData["ruleIndex"]!,
					shareCode: shareCode,
					accessCode: netDiskData["accessCode"],
					matchText: netDiskData["matchText"],
					showToast: false,
				});
				if (!uiLink) {
					return;
				}
				let boxViewInfo = this.createViewBoxElementInfo(
					NetDiskUI.src.icon[ruleKeyName],
					ruleKeyName,
					netDiskData["ruleIndex"]!,
					shareCode,
					netDiskData["accessCode"],
					uiLink
				);
				documentFragment.appendChild(boxViewInfo.$viewBox);
			});
			$urlBoxAll.appendChild(documentFragment);
		});
		// 链接视图的z-index
		let netDiskLinkViewZIndex =
			NetDiskGlobalData.smallWindow["netdisk-link-view-z-index"].value;
		if (netDiskLinkViewZIndex > 0) {
			DOMUtils.css(NetDiskUI.Alias.uiLinkAlias.popsElement, {
				"z-index": netDiskLinkViewZIndex,
			});
		}
		NetDiskUI.Alias.uiLinkAlias.popsElement
			.querySelectorAll<HTMLElement>(".netdisk-url-box-all .netdisk-url-box")
			.forEach(($netDiskBox) => {
				// 网盘链接验证
				let ruleKeyName = $netDiskBox
					.querySelector<HTMLElement>(".netdisk-link")!
					.getAttribute("data-rule-key")!;
				let ruleIndex = parseInt(
					$netDiskBox
						.querySelector<HTMLElement>(".netdisk-link")!
						.getAttribute("data-rule-index")!
				);
				let shareCode = $netDiskBox
					.querySelector<HTMLElement>(".netdisk-link")!
					.getAttribute("data-sharecode")!;
				let accessCode = $netDiskBox
					.querySelector<HTMLElement>(".netdisk-link")!
					.getAttribute("data-accesscode")!;
				NetDiskCheckLinkValidity.check(
					$netDiskBox,
					ruleKeyName,
					ruleIndex,
					shareCode,
					accessCode
				);
			});
	},
	/**
	 * 初始化事件（在创建视图后）
	 */
	initViewEvent() {
		// 注册右键菜单
		NetDiskUI.setRightClickMenu(
			NetDiskUI.Alias.uiLinkAlias.$shadowRoot,
			".whitesevPop .netdisk-url a"
		);
		// 注册网盘图标的点击事件
		this.registerIconGotoPagePosition(NetDiskUI.Alias.uiLinkAlias.$shadowRoot);
		// 注册网盘链接点击事件
		this.setNetDiskUrlClickEvent(
			NetDiskUI.Alias.uiLinkAlias.$shadowRoot,
			".netdisk-url a"
		);
		// 注册网盘链接弹窗视图的标题的右键菜单事件
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
			"data-rule-key": data.ruleKeyName,
			/** 网盘索引 */
			"data-rule-index": data.ruleIndex,
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
	 * @param $ele 元素
	 */
	praseElementAttributeRuleInfo($ele: HTMLElement) {
		let result: RuleElementAttr = {
			ruleKeyName: $ele.getAttribute("data-rule-key")!,
			ruleIndex: parseInt($ele.getAttribute("data-rule-index")!),
			shareCode: $ele.getAttribute("data-sharecode")!,
			accessCode: $ele.getAttribute("data-accesscode"),
		};
		if (isNaN(result.ruleIndex)) {
			log.warn("元素上的 ruleIndex 的值是NaN，调整为默认值0", $ele);
			result.ruleIndex = 0;
		}
		return result;
	},
	/**
	 * 创建每一项的网盘元素信息
	 * @param ruleImgSrc 规则图标src
	 * @param ruleKeyName 规则键名
	 * @param ruleIndex 规则的索引下标
	 * @param shareCode 分享码
	 * @param accessCode 访问码
	 * @param uiLinkText 显示出来的链接文本
	 */
	createViewBoxElementInfo(
		ruleImgSrc: string,
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType,
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
		const { $urlDiv, $icon, $iconImg, $checkValidStatus, $url, $link } =
			this.parseViewBoxElementInfo($viewBox);
		// 设置网盘图标（设置为背景图片）
		$iconImg.style.cssText = `background: url(${ruleImgSrc}) no-repeat;background-size: 100%;`;
		// 设置显示的网盘链接
		DOMUtils.html($link, uiLinkText);

		// 将数据信息添加到元素attr上
		this.handleElementAttributeRuleInfo(
			{
				ruleKeyName: ruleKeyName,
				ruleIndex: ruleIndex,
				shareCode: shareCode,
				accessCode: accessCode,
			},
			[$iconImg, $link]
		);
		// 触发规则的渲染函数
		NetDisk.$rule.rule.forEach((ruleConfig) => {
			if (
				ruleConfig.setting.key === ruleKeyName &&
				typeof ruleConfig.afterRenderUrlBox === "function"
			) {
				ruleConfig.afterRenderUrlBox({
					$viewBox,
					$urlDiv,
					$url,
					$link,
					ruleKeyName,
					ruleIndex,
					shareCode,
					accessCode,
				});
			}
		});
		return {
			$viewBox,
			$urlDiv,
			$icon,
			$iconImg,
			$checkValidStatus,
			$url,
			$link,
		};
	},
	/**
	 * 解析元素上的各个元素
	 * @param $viewBox 元素
	 */
	parseViewBoxElementInfo($viewBox: HTMLElement) {
		let $urlBox = $viewBox.matches(".netdisk-url-box")
			? $viewBox
			: $viewBox.closest<HTMLElement>(".netdisk-url-box")!;
		let $urlDiv = $urlBox.querySelector<HTMLDivElement>(".netdisk-url-div")!;
		let $icon = $urlBox.querySelector<HTMLDivElement>(".netdisk-icon")!;
		let $iconImg = $urlBox.querySelector<HTMLDivElement>(".netdisk-icon-img")!;
		/** 校验有效性 */
		let $checkValidStatus =
			$urlBox.querySelector<HTMLDivElement>(".netdisk-status")!;
		let $url = $urlBox.querySelector<HTMLDivElement>(".netdisk-url")!;
		let $link = $urlBox.querySelector<HTMLDivElement>(".netdisk-link")!;
		return {
			$urlBox,
			$urlDiv,
			$icon,
			$iconImg,
			$checkValidStatus,
			$url,
			$link,
		};
	},
	/**
	 * 设置网盘链接的点击事件
	 *
	 * 内部执行点击动作
	 * @param $el 监听的元素
	 * @param childSelector 子元素选择器
	 */
	setNetDiskUrlClickEvent(
		$el: HTMLElement | ShadowRoot,
		childSelector: string
	) {
		// 点击事件
		DOMUtils.on($el, "click", childSelector, (event) => {
			let $click = event.target as HTMLElement;
			$click.setAttribute("isvisited", "true");

			// 解析数据
			const data = NetDiskView.praseElementAttributeRuleInfo($click);
			// 是否是按下左键
			// 如果是，那么就是新标签页打开
			let ctrlClick = event.ctrlKey;
			if (ctrlClick) {
				this.netDiskUrlClickEvent({
					data: data,
					clickMode: "openBlank",
					$click: $click,
				});
			} else {
				this.netDiskUrlClickEvent({
					data: data,
					$click: $click,
				});
			}
		});
		// 鼠标中键的点击事件
		DOMUtils.on<PointerEvent>(
			$el,
			"auxclick",
			childSelector,
			(event, $click) => {
				if (event.button !== 1) {
					// 1是鼠标中键
					// 2是鼠标右键
					return;
				}
				utils.preventEvent(event);
				$click.setAttribute("isvisited", "true");
				// 解析数据
				const data = NetDiskView.praseElementAttributeRuleInfo($click);
				let url = NetDiskLinkClickModeUtils.getBlankUrl({
					ruleKeyName: data.ruleKeyName,
					ruleIndex: data.ruleIndex,
					shareCode: data.shareCode,
					accessCode: data.accessCode,
				});
				NetDiskLinkClickMode.openBlankUrl(
					url,
					data.ruleKeyName,
					data.ruleIndex,
					data.shareCode,
					data.accessCode,
					true
				);
			}
		);
	},
	/**
	 * 网盘链接点击事件
	 * @param option
	 */
	netDiskUrlClickEvent(option: {
		data: RuleElementAttr;
		/** 自定义的点击动作，优先级最高 */
		clickMode?: NetDiskRuleSettingConfigurationInterface_linkClickMode;
		/** 点击的元素 */
		$click?: HTMLElement;
	}) {
		const { ruleKeyName, ruleIndex, shareCode, accessCode } = option.data;
		// 获取对应的点击动作
		let linkClickMode =
			option.clickMode ??
			NetDiskRuleData.function.linkClickMode(option.data.ruleKeyName);
		/** 关闭弹窗 */
		let closePopup = () => {
			if (option.$click) {
				let $pops = option.$click.closest<HTMLElement>(".pops");
				if ($pops) {
					let $close = $pops.querySelector<HTMLElement>(
						'.pops-header-control[type="close"]'
					);
					$close && $close.click();
				}
			}
		};
		if (linkClickMode === "copy" || linkClickMode === "copy-closePopup") {
			// 复制
			NetDiskLinkClickMode.copy(ruleKeyName, ruleIndex, shareCode, accessCode);
			if (linkClickMode === "copy-closePopup") {
				// 关闭弹窗
				closePopup();
			}
		} else if (
			linkClickMode === "openBlank" ||
			linkClickMode === "openBlank-closePopup"
		) {
			// 新页打开
			let url = NetDiskLinkClickModeUtils.getBlankUrl({
				ruleKeyName,
				ruleIndex,
				shareCode,
				accessCode,
			});
			// 判断scheme转发新标签页链接是否开启
			let isForwardBlankUrl =
				NetDiskFilterScheme.isForwardBlankLink(ruleKeyName);
			if (isForwardBlankUrl) {
				// 用scheme处理的进行新标签打开
				NetDiskLinkClickMode.openBlankWithScheme(
					ruleKeyName,
					ruleIndex,
					shareCode,
					accessCode
				);
			} else {
				// 否则用原链接打开
				NetDiskLinkClickMode.openBlankUrl(
					url,
					ruleKeyName,
					ruleIndex,
					shareCode,
					accessCode
				);
			}
			if (linkClickMode === "openBlank-closePopup") {
				// 关闭弹窗
				closePopup();
			}
		} else if (
			linkClickMode === "parseFile" ||
			linkClickMode === "parseFile-closePopup"
		) {
			// 文件解析
			NetDiskLinkClickMode.parseFile(
				ruleKeyName,
				ruleIndex,
				shareCode,
				accessCode
			).then(() => {
				if (linkClickMode === "parseFile-closePopup") {
					// 关闭弹窗
					closePopup();
				}
			});
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
				text: item.text,
				callback: item.callback,
				icon: item?.icon ?? "",
				iconIsLoading: item?.iconIsLoading ?? false,
				item: item?.item ?? null,
			});
		});
		let detail: PopsRightClickMenuDetails = {
			target: target,
			targetSelector: selector,
			data: data,
			isAnimation: false,
			className: className,
			only: true,
			chileMenuLeftOrRightDistance: -3,
			childMenuTopOrBottomDistance: -5,
		};
		NetDiskPops.rightClickMenu(detail);
	},
	/**
	 * 添加新的链接
	 * @param ruleKeyName 规则名称
	 * @param ruleIndex 规则的索引下标
	 * @param shareCode 分享码
	 * @param accessCode 访问码
	 * @param matchText 匹配到的文本
	 */
	addLinkView(
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType,
		matchText: string
	) {
		NetDiskUI.netDiskHistoryMatch.changeMatchedData(
			ruleKeyName,
			ruleIndex,
			shareCode,
			accessCode,
			matchText
		);
		if (!NetDiskUI.Alias.uiLinkAlias) {
			return;
		}
		log.info(ruleKeyName, ruleIndex, shareCode, accessCode);
		let icon = NetDiskUI.src.icon[ruleKeyName];
		let uiLink = NetDisk.handleLinkShow({
			ruleKeyName,
			ruleIndex,
			shareCode,
			accessCode,
			matchText,
		});
		if (!uiLink) {
			return;
		}
		let boxViewInfo = this.createViewBoxElementInfo(
			icon,
			ruleKeyName,
			ruleIndex,
			shareCode,
			accessCode,
			uiLink
		);
		/** box容器 */
		let $urlBoxAll =
			NetDiskUI.Alias.uiLinkAlias.$shadowRoot.querySelector<HTMLElement>(
				".netdisk-url-box-all"
			)!;
		DOMUtils.append($urlBoxAll, boxViewInfo.$viewBox);
		/* 按顺序来，最后一个 */
		let $urlBox = $urlBoxAll.children[
			$urlBoxAll.children.length - 1
		] as HTMLElement;
		NetDiskCheckLinkValidity.check(
			$urlBox,
			ruleKeyName,
			ruleIndex,
			shareCode,
			accessCode
		);
	},
	/**
	 * 修改已存在的view
	 * @param ruleKeyName 规则名称
	 * @param ruleIndex 规则的索引下标
	 * @param shareCode 分享码
	 * @param accessCode 访问码
	 * @param matchText 匹配到的文本
	 */
	changeLinkView(
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType,
		matchText: string
	) {
		NetDiskUI.netDiskHistoryMatch.changeMatchedData(
			ruleKeyName,
			ruleIndex,
			shareCode,
			accessCode,
			matchText
		);
		if (!NetDiskUI.Alias.uiLinkAlias) {
			return;
		}
		let uiLink = NetDisk.handleLinkShow({
			ruleKeyName,
			ruleIndex,
			shareCode,
			accessCode,
			matchText,
		});
		if (!uiLink) {
			return;
		}
		let needChangeDOM =
			NetDiskUI.Alias.uiLinkAlias.popsElement.querySelector<HTMLElement>(
				`.netdisk-url a[data-sharecode='${shareCode}'][data-rule-index='${ruleIndex}']`
			)!;
		log.info("修改网盘链接视图");
		log.info(needChangeDOM);
		needChangeDOM.setAttribute("data-accesscode", accessCode!);
		DOMUtils.html(needChangeDOM, uiLink);
	},
	/**
	 * 设置点击图标按钮导航至该网盘链接所在网页中位置
	 */
	registerIconGotoPagePosition(
		targetElement: ShadowRoot | Document | HTMLElement
	) {
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
					log.success("定位元素", iterator);
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
						log.error("无法定位该元素位置", iterator.value);
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
