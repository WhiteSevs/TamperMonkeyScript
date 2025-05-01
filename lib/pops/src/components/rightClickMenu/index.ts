import { OriginPrototype } from "../../Core";
import { GlobalConfig } from "../../GlobalConfig";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { rightClickMenuConfig as PopsRightClickMenuConfig } from "./config";
import type { PopsIcon } from "../../types/icon";
import type {
	PopsRightClickMenuDataDetails,
	PopsRightClickMenuDetails,
} from "./indexType";

export class PopsRightClickMenu {
	constructor(details: PopsRightClickMenuDetails) {
		const guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const PopsType = "rightClickMenu";

		let config = PopsRightClickMenuConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		config = PopsHandler.handleOnly(PopsType, config);
		if (config.target == null) {
			throw "config.target 不能为空";
		}
		if (details.data) {
			// @ts-ignore
			config.data = details.data;
		}
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.rightClickMenu,
		]);

		if (config.style != null) {
			let cssNode = popsDOMUtils.createElement(
				"style",
				{
					innerHTML: config.style,
				},
				{
					type: "text/css",
				}
			);
			$shadowRoot.appendChild(cssNode);
		}

		const PopsContextMenu = {
			/**
			 * 根元素
			 */
			rootElement: null as any as HTMLElement,
			/**
			 * 全局点击检测
			 * @param event
			 */
			windowCheckClickEvent(event: MouseEvent | PointerEvent) {
				if (!PopsContextMenu.rootElement) {
					return;
				}
				let $click = event.target as HTMLElement;
				if ($click.closest(`.pops-${PopsType}`)) {
					return;
				}
				if (
					$click.className &&
					$click.className === "pops-shadow-container" &&
					$click.shadowRoot != null
				) {
					return;
				}
				PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
			},
			/**
			 * target为shadowRoot或shadowRoot内的全局点击检测
			 * @param event
			 */
			shadowRootCheckClickEvent(event: MouseEvent | PointerEvent) {
				if (!PopsContextMenu.rootElement) {
					return;
				}
				let $click = event.target as HTMLElement;
				if ($click.closest(`.pops-${PopsType}`)) {
					return;
				}
				PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
			},
			/**
			 * 添加全局点击检测事件
			 */
			addWindowCheckClickListener() {
				popsDOMUtils.on(
					globalThis,
					"click touchstart",
					void 0,
					PopsContextMenu.windowCheckClickEvent,
					{
						capture: true,
					}
				);
				if (config.target instanceof Node) {
					const $shadowRoot = config.target.getRootNode();
					if ($shadowRoot instanceof ShadowRoot) {
						popsDOMUtils.on(
							$shadowRoot,
							"click touchstart",
							void 0,
							PopsContextMenu.shadowRootCheckClickEvent,
							{
								capture: true,
							}
						);
					}
				}
			},
			/**
			 * 移除全局点击检测事件
			 */
			removeWindowCheckClickListener() {
				popsDOMUtils.off(
					globalThis,
					"click touchstart",
					void 0,
					PopsContextMenu.windowCheckClickEvent,
					{
						capture: true,
					}
				);
				if (config.target instanceof Node) {
					const $shadowRoot = config.target.getRootNode();
					if ($shadowRoot instanceof ShadowRoot) {
						popsDOMUtils.off(
							$shadowRoot,
							"click touchstart",
							void 0,
							PopsContextMenu.windowCheckClickEvent,
							{
								capture: true,
							}
						);
					}
				}
			},
			/**
			 * contextmenu事件
			 * @param event
			 */
			contextMenuEvent(event: PointerEvent) {
				if (config.preventDefault) {
					popsDOMUtils.preventEvent(event);
				}
				PopsHandler.handleOnly(PopsType, config);
				if (PopsContextMenu.rootElement) {
					PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
				}
				let rootElement = PopsContextMenu.showMenu(event, config.data);
				PopsContextMenu.rootElement = rootElement;
				if (config.only) {
					PopsHandler.handlePush(PopsType, {
						$shadowRoot: $shadowRoot,
						$shadowContainer: $shadowContainer,
						guid: guid,
						animElement: rootElement as HTMLDivElement,
						popsElement: rootElement as HTMLDivElement,
						beforeRemoveCallBack(layerCommonConfig) {
							PopsContextMenu.closeAllMenu(layerCommonConfig.popsElement);
						},
					});
				}
			},
			/**
			 * 添加contextmenu事件
			 * @param target 目标
			 * @param selector 子元素选择器
			 */
			addContextMenuEvent(
				target: PopsRightClickMenuDetails["target"],
				selector?: string
			) {
				popsDOMUtils.on(
					target!,
					"contextmenu",
					selector,
					PopsContextMenu.contextMenuEvent
				);
			},
			/**
			 * 移除contextmenu事件
			 * @param target 目标
			 * @param selector 子元素选择器
			 */
			removeContextMenuEvent(
				target: HTMLElement | typeof globalThis | Window,
				selector?: string
			) {
				popsDOMUtils.off(
					target,
					"contextmenu",
					selector,
					PopsContextMenu.contextMenuEvent
				);
			},
			/**
			 * 自动判断是否存在动画，存在动画就执行关闭动画并删除
			 * @param element
			 */
			animationCloseMenu(element: HTMLElement) {
				/**
				 * 动画结束触发的事件
				 */
				function transitionEndEvent(event: TransitionEvent) {
					popsDOMUtils.off(
						element,
						popsDOMUtils.getTransitionEndNameList(),
						void 0,
						transitionEndEvent,
						{
							capture: true,
						}
					);
					element.remove();
				}
				if (element.classList.contains(`pops-${PopsType}-anim-show`)) {
					/* 有动画 */
					popsDOMUtils.on(
						element,
						popsDOMUtils.getTransitionEndNameList(),
						void 0,
						transitionEndEvent,
						{
							capture: true,
						}
					);
					element.classList.remove(`pops-${PopsType}-anim-show`);
				} else {
					/* 无动画 */
					element.remove();
				}
			},
			/**
			 * 关闭所有菜单
			 * @param rootElement
			 */
			closeAllMenu(rootElement: HTMLElement) {
				if (rootElement == null) {
					return;
				}
				if ((rootElement as any)?.["__menuData__"]?.root) {
					rootElement = (rootElement as any)?.["__menuData__"]?.root;
				}

				let childMenuList = (rootElement as any)["__menuData__"]
					.child as HTMLElement[];
				childMenuList.forEach((childMenuElement) => {
					this.animationCloseMenu(childMenuElement);
				});
				this.animationCloseMenu(rootElement);
				PopsContextMenu.rootElement = null as any;
			},
			/**
			 * 获取菜单容器
			 * @param isChildren 是否是rightClickMenu的某一项的子菜单
			 */
			getMenuContainerElement(isChildren: boolean) {
				let $menu = popsDOMUtils.createElement("div", {
					className: `pops-${PopsType}`,
					innerHTML: /*html*/ `
					<ul></ul>
					`,
				});
				let zIndex = this.getMenuZIndex();
				if (zIndex > 10000) {
					$menu.style.zIndex = zIndex.toString();
				}
				if (isChildren) {
					$menu.setAttribute("is-children", "true");
				}
				/* 添加动画 */
				if (config.isAnimation) {
					popsDOMUtils.addClassName($menu, `pops-${PopsType}-anim-grid`);
				}
				return $menu;
			},
			/**
			 * 动态获取配的z-index
			 */
			getMenuZIndex() {
				return PopsHandler.handleZIndex(config.zIndex);
			},
			/**
			 * 获取left、top偏移
			 * @param menuElement 菜单元素
			 * @param x
			 * @param y
			 */
			getOffset(menuElement: HTMLElement, x: number, y: number) {
				let menuElementWidth = popsDOMUtils.width(menuElement);
				let menuElementHeight = popsDOMUtils.height(menuElement);
				/* left最大偏移 */
				let maxLeftOffset =
					popsDOMUtils.width(globalThis) - menuElementWidth - 1;
				/* top最大偏移 */
				let maxTopOffset =
					popsDOMUtils.height(globalThis) - menuElementHeight - 8;

				let currentLeftOffset = x;
				let currentTopOffset = y;
				/* 不允许超出left最大值 */
				currentLeftOffset = currentLeftOffset < 0 ? 0 : currentLeftOffset;
				currentLeftOffset =
					currentLeftOffset < maxLeftOffset ? currentLeftOffset : maxLeftOffset;
				/* 不允许超出top最大值 */
				currentTopOffset = currentTopOffset < 0 ? 0 : currentTopOffset;
				currentTopOffset =
					currentTopOffset < maxTopOffset ? currentTopOffset : maxTopOffset;
				return {
					left: currentLeftOffset,
					top: currentTopOffset,
				};
			},
			/**
			 * 显示菜单
			 * @param menuEvent 触发的事件
			 * @param _config_
			 */
			showMenu(
				menuEvent: PointerEvent,
				_config_: PopsRightClickMenuDataDetails[]
			) {
				let menuElement = this.getMenuContainerElement(false);
				Reflect.set(menuElement, "__menuData__", {
					child: [],
				});
				PopsContextMenu.addMenuLiELement(
					menuEvent,
					menuElement as HTMLDivElement,
					menuElement as HTMLDivElement,
					_config_
				);
				/* 先隐藏 */
				popsDOMUtils.css(menuElement, {
					display: "none",
				});
				popsDOMUtils.append($shadowRoot, menuElement);
				/* 添加到页面 */
				if (!document.contains($shadowContainer)) {
					if (typeof config.beforeAppendToPageCallBack === "function") {
						config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
					}
					popsDOMUtils.appendBody($shadowContainer);
				}
				let { left: menuLeftOffset, top: menuTopOffset } = this.getOffset(
					menuElement,
					menuEvent.clientX,
					menuEvent.clientY
				);
				popsDOMUtils.css(menuElement, {
					left: menuLeftOffset,
					top: menuTopOffset,
					display: "",
				});
				/* 过渡动画 */
				if (config.isAnimation) {
					popsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-show`);
				}
				return menuElement;
			},
			/**
			 * 显示子菜单
			 * @param menuEvent 事件
			 * @param posInfo 位置信息
			 * @param  _config_
			 * @param rootElement 根菜单元素
			 * @param targetLiElement 父li项元素
			 */
			showClildMenu(
				menuEvent: PointerEvent,
				posInfo: {
					clientX: number;
					clientY: number;
				},
				_config_: PopsRightClickMenuDataDetails[],
				rootElement: HTMLDivElement,
				targetLiElement: HTMLLIElement
			) {
				let menuElement = this.getMenuContainerElement(true);
				Reflect.set(menuElement, "__menuData__", {
					parent: targetLiElement,
					root: rootElement,
				});
				// 根菜单数据
				let rootElementMenuData = Reflect.get(rootElement, "__menuData__");
				rootElementMenuData.child.push(menuElement);
				PopsContextMenu.addMenuLiELement(
					menuEvent as PointerEvent,
					rootElement as HTMLDivElement,
					menuElement as HTMLDivElement,
					_config_
				);
				/* 先隐藏 */
				popsDOMUtils.css(menuElement, {
					display: "none",
				});
				/* 添加到页面 */
				popsDOMUtils.append($shadowRoot, menuElement);
				let { left: menuLeftOffset, top: menuTopOffset } = this.getOffset(
					menuElement,
					posInfo.clientX,
					posInfo.clientY
				);
				popsDOMUtils.css(menuElement, {
					left: menuLeftOffset,
					top: menuTopOffset,
					display: "",
				});
				/* 过渡动画 */
				if (config.isAnimation) {
					popsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-show`);
				}
				return menuElement;
			},
			/**
			 * 获取菜单项的元素
			 * @param menuEvent 事件
			 * @param rootElement 根元素
			 * @param menuElement 菜单元素
			 * @param _config_ 配置
			 */
			addMenuLiELement(
				menuEvent: PointerEvent,
				rootElement: HTMLDivElement,
				menuElement: HTMLDivElement,
				_config_: PopsRightClickMenuDataDetails[]
			) {
				let menuEventTarget = menuEvent.target;
				let menuULElement = menuElement.querySelector<HTMLUListElement>("ul")!;
				_config_.forEach((item) => {
					let menuLiElement =
						popsUtils.parseTextToDOM<HTMLLIElement>(`<li></li>`);
					/* 判断有无图标，有就添加进去 */
					if (typeof item.icon === "string" && item.icon.trim() !== "") {
						let iconSVGHTML =
							pops.config.iconSVG[item.icon as PopsIcon] ?? item.icon;
						let iconElement = popsUtils.parseTextToDOM(
							/*html*/ `<i class="pops-${PopsType}-icon" is-loading="${item.iconIsLoading}">${iconSVGHTML}</i>`
						);
						menuLiElement.appendChild(iconElement);
					}
					/* 插入文字 */
					menuLiElement.insertAdjacentHTML(
						"beforeend",
						PopsSafeUtils.getSafeHTML(`<span>${item.text}</span>`)
					);
					/* 如果存在子数据，显示 */
					if (item.item && Array.isArray(item.item)) {
						popsDOMUtils.addClassName(menuLiElement, `pops-${PopsType}-item`);
					}
					/* 鼠标|触摸 移入事件 */
					function liElementHoverEvent() {
						Array.from(
							menuULElement.children as any as HTMLLIElement[]
						).forEach((liElement) => {
							popsDOMUtils.removeClassName(
								liElement,
								`pops-${PopsType}-is-visited`
							);
							if (!(liElement as any).__menuData__) {
								return;
							}
							function removeElement(element: HTMLElement) {
								element
									.querySelectorAll<HTMLLIElement>("ul li")
									.forEach((ele) => {
										if ((ele as any)?.__menuData__?.child) {
											removeElement((ele as any).__menuData__.child);
										}
									});
								element.remove();
							}
							/* 遍历根元素的上的__menuData__.child，判断 */
							removeElement((liElement as any).__menuData__.child);
						});
						/* 清理根元素上的children不存在于页面中的元素 */
						for (
							let index = 0;
							index < (rootElement as any).__menuData__.child.length;
							index++
						) {
							let element = (rootElement as any).__menuData__.child[index];
							if (!$shadowRoot.contains(element)) {
								(rootElement as any).__menuData__.child.splice(index, 1);
								index--;
							}
						}
						popsDOMUtils.addClassName(
							menuLiElement,
							`pops-${PopsType}-is-visited`
						);
						if (!item.item) {
							return;
						}
						let rect = menuLiElement.getBoundingClientRect();
						let childMenu = PopsContextMenu.showClildMenu(
							menuEvent,
							{
								clientX: rect.left + popsDOMUtils.outerWidth(menuLiElement),
								clientY: rect.top,
							},
							item.item,
							rootElement as HTMLDivElement,
							menuLiElement
						);
						(menuLiElement as any).__menuData__ = {
							child: childMenu,
						};
					}
					/**
					 * 点击事件
					 * @param clickEvent
					 * @returns
					 */
					async function liElementClickEvent(
						clickEvent: MouseEvent | PointerEvent
					) {
						if (typeof item.callback === "function") {
							OriginPrototype.Object.defineProperty(menuEvent, "target", {
								get() {
									return menuEventTarget;
								},
							});
							let callbackResult = await item.callback(
								clickEvent as PointerEvent,
								menuEvent,
								menuLiElement
							);
							if (
								typeof callbackResult === "boolean" &&
								callbackResult == false
							) {
								return;
							}
						}
						/* 取消绑定的鼠标/触摸事件，防止关闭的时候再次触发 */
						Array.from(
							menuULElement.children as any as HTMLLIElement[]
						).forEach((liEle) => {
							popsDOMUtils.off(liEle, "mouseenter touchstart");
						});
						PopsContextMenu.closeAllMenu(rootElement);
					}
					popsDOMUtils.on(
						menuLiElement,
						"mouseenter touchstart",
						void 0,
						liElementHoverEvent
					);
					/* 项-点击事件 */
					popsDOMUtils.on(menuLiElement, "click", void 0, liElementClickEvent);
					menuULElement.appendChild(menuLiElement);
				});
			},
		};

		// 添加右键菜单事件
		PopsContextMenu.addContextMenuEvent(config.target, config.targetSelector!);
		// 添加全局点击检测
		PopsContextMenu.addWindowCheckClickListener();

		return {
			guid: guid,
			config: config,
			removeWindowCheckClickListener:
				PopsContextMenu.removeWindowCheckClickListener,
			addWindowCheckClickListener: PopsContextMenu.addWindowCheckClickListener,
			removeContextMenuEvent: PopsContextMenu.removeContextMenuEvent,
			addContextMenuEvent: PopsContextMenu.addContextMenuEvent,
		};
	}
}
