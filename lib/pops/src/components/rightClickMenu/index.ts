import { OriginPrototype } from "../../PopsCore";
import { GlobalConfig } from "../../GlobalConfig";
import { PopsHandler } from "../../handler/PopsHandler";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { rightClickMenuConfig as PopsRightClickMenuConfig } from "./config";
import type {
	PopsRightClickMenuDataDetails,
	PopsRightClickMenuDetails,
} from "./types";
import { PopsCSS } from "../../PopsCSS";
import { PopsIcon } from "../../PopsIcon";

export const PopsRightClickMenu = {
	init(details: PopsRightClickMenuDetails) {
		const guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const PopsType = "rightClickMenu";

		let config = PopsRightClickMenuConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		config = PopsHandler.handleOnly(PopsType, config);
		if (config.target == null) {
			throw new Error("config.target 不能为空");
		}
		if (details.data) {
			// @ts-ignore
			config.data = details.data;
		}
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
		PopsHandler.handleInit($shadowRoot, [
			{
				name: "index",
				css: PopsCSS.index,
			},
			{
				name: "anim",
				css: PopsCSS.anim,
			},
			{
				name: "common",
				css: PopsCSS.common,
			},
			{
				name: "rightClickMenu",
				css: PopsCSS.rightClickMenu,
			},
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
			 * @param selectorTarget
			 */
			contextMenuEvent(event: PointerEvent, selectorTarget: HTMLElement) {
				if (config.preventDefault) {
					popsDOMUtils.preventEvent(event);
				}
				PopsHandler.handleOnly(PopsType, config);
				if (PopsContextMenu.rootElement) {
					PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
				}
				let rootElement = PopsContextMenu.showMenu(
					event,
					config.data,
					selectorTarget
				);
				PopsContextMenu.rootElement = rootElement;
				if (config.only) {
					PopsHandler.handlePush(PopsType, {
						$shadowRoot: $shadowRoot,
						$shadowContainer: $shadowContainer,
						guid: guid,
						animElement: rootElement,
						popsElement: rootElement,
						beforeRemoveCallBack(instCommonConfig) {
							PopsContextMenu.closeAllMenu(instCommonConfig.popsElement);
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
			 * @param menuElement 当前生成的菜单元素
			 * @param mousePosition 鼠标位置信息
			 * @param isMainMenu 是否是主菜单
			 */
			getOffset(
				menuElement: HTMLElement,
				mousePosition: { x: number; y: number },
				parentInfo: {
					$menu: HTMLElement;
					$parentItem: HTMLElement;
				} | null
			) {
				let result = {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				};
				let menuElementWidth = popsDOMUtils.width(menuElement);
				let menuElementHeight = popsDOMUtils.height(menuElement);
				/**
				 * 限制的间隙距离
				 */
				let limitDistance = 1;
				let maxPageLeftOffset = popsDOMUtils.width(globalThis) - limitDistance;
				let maxPageTopOffset = popsDOMUtils.height(globalThis) - limitDistance;
				/* left最大偏移 */
				let maxLeftOffset = maxPageLeftOffset - menuElementWidth;
				/* top最大偏移 */
				let maxTopOffset = maxPageTopOffset - menuElementHeight;

				let chileMenuLeftOrRightDistance = config.chileMenuLeftOrRightDistance;
				let childMenuTopOrBottomDistance = config.childMenuTopOrBottomDistance;
				let currentLeftOffset = mousePosition.x;
				let currentTopOffset = mousePosition.y;
				currentLeftOffset = currentLeftOffset < 0 ? 0 : currentLeftOffset;
				// 不允许超出left最大值
				if (currentLeftOffset + chileMenuLeftOrRightDistance >= maxLeftOffset) {
					// 超过，那么子菜单将会在放在左边
					// 偏移计算方式就是父菜单的右偏移+父菜单的宽度
					if (parentInfo) {
						// 子菜单
						let mainMenuOffset = popsDOMUtils.offset(parentInfo.$menu);
						currentLeftOffset =
							maxPageLeftOffset -
							mainMenuOffset.left -
							chileMenuLeftOrRightDistance +
							limitDistance;
					} else {
						// 主菜单 默认的
						currentLeftOffset = limitDistance + chileMenuLeftOrRightDistance;
					}
					if (currentLeftOffset < 0) {
						currentLeftOffset = 0;
					} else if (currentLeftOffset > maxLeftOffset) {
						currentLeftOffset = maxLeftOffset;
					}
					// 去除左偏移，变为右偏移
					result.right = currentLeftOffset;
					Reflect.deleteProperty(result, "left");
				} else {
					// 右边
					currentLeftOffset = currentLeftOffset + chileMenuLeftOrRightDistance;
					result.left = currentLeftOffset;
					Reflect.deleteProperty(result, "right");
				}
				// 不允许超出top最大值
				currentTopOffset = currentTopOffset < 0 ? 0 : currentTopOffset;
				if (currentTopOffset + childMenuTopOrBottomDistance >= maxTopOffset) {
					// 超过，那么子菜单将会在放在上面
					if (parentInfo) {
						// 以项的top偏移为基准
						let parentItemOffset = popsDOMUtils.offset(
							parentInfo.$parentItem,
							false
						);
						currentTopOffset =
							maxPageTopOffset -
							parentItemOffset.bottom -
							childMenuTopOrBottomDistance +
							limitDistance;
					} else {
						currentTopOffset = limitDistance + childMenuTopOrBottomDistance;
					}
					if (currentTopOffset < 0) {
						currentTopOffset = limitDistance;
					} else if (currentTopOffset > maxTopOffset) {
						currentTopOffset = maxTopOffset;
					}
					// 去除上偏移，变为下偏移
					result.bottom = currentTopOffset;
					Reflect.deleteProperty(result, "top");
				} else {
					currentTopOffset = currentTopOffset + childMenuTopOrBottomDistance;
					result.top = currentTopOffset;
					Reflect.deleteProperty(result, "bottom");
				}
				return result;
			},
			/**
			 * 显示菜单
			 * @param menuEvent 触发的事件
			 * @param _config_
			 * @param menuListenerRootNode 右键菜单监听的元素
			 */
			showMenu(
				menuEvent: PointerEvent,
				_config_: PopsRightClickMenuDataDetails[],
				menuListenerRootNode: HTMLElement
			) {
				let menuElement = this.getMenuContainerElement(false);
				Reflect.set(menuElement, "__menuData__", {
					child: [],
				});
				PopsContextMenu.addMenuLiELement(
					menuEvent,
					menuElement,
					menuElement,
					_config_,
					menuListenerRootNode
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
				let offset = this.getOffset(
					menuElement,
					{
						x: menuEvent.clientX,
						y: menuEvent.clientY,
					},
					null
				);
				popsDOMUtils.css(menuElement, {
					...offset,
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
			 * @param menuListenerRootNode 右键菜单监听的元素
			 */
			showClildMenu(
				menuEvent: PointerEvent,
				posInfo: {
					clientX: number;
					clientY: number;
				},
				_config_: PopsRightClickMenuDataDetails[],
				rootElement: HTMLDivElement,
				targetLiElement: HTMLLIElement,
				menuListenerRootNode: HTMLElement
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
					menuEvent,
					rootElement,
					menuElement,
					_config_,
					menuListenerRootNode
				);
				/* 先隐藏 */
				popsDOMUtils.css(menuElement, {
					display: "none",
				});
				/* 添加到页面 */
				popsDOMUtils.append($shadowRoot, menuElement);
				let $parentMenu = targetLiElement.closest<HTMLElement>(
					".pops-rightClickMenu"
				)!;
				let offset = this.getOffset(
					menuElement,
					{
						x: posInfo.clientX,
						y: posInfo.clientY,
					},
					{
						$menu: $parentMenu,
						$parentItem: targetLiElement,
					}
				);
				popsDOMUtils.css(menuElement, { ...offset, display: "" });
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
			 * @param menuListenerRootNode 右键菜单监听的元素
			 */
			addMenuLiELement(
				menuEvent: PointerEvent,
				rootElement: HTMLDivElement,
				menuElement: HTMLDivElement,
				_config_: PopsRightClickMenuDataDetails[],
				menuListenerRootNode: HTMLElement
			) {
				let menuEventTarget = menuEvent.target;
				let menuULElement = menuElement.querySelector<HTMLUListElement>("ul")!;
				_config_.forEach((item) => {
					let menuLiElement =
						popsDOMUtils.parseTextToDOM<HTMLLIElement>(`<li></li>`);
					/* 判断有无图标，有就添加进去 */
					if (typeof item.icon === "string" && item.icon.trim() !== "") {
						let iconSVGHTML = PopsIcon.getIcon(item.icon) ?? item.icon;
						let iconElement = popsDOMUtils.parseTextToDOM(
							/*html*/ `<i class="pops-${PopsType}-icon" is-loading="${
								item.iconIsLoading ?? false
							}">${iconSVGHTML}</i>`
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
							rootElement,
							menuLiElement,
							menuListenerRootNode
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
							try {
								OriginPrototype.Object.defineProperty(menuEvent, "target", {
									get() {
										return menuEventTarget;
									},
								});
							} catch (error) {}
							let callbackResult = await item.callback(
								clickEvent as PointerEvent,
								menuEvent,
								menuLiElement,
								menuListenerRootNode
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
	},
};
