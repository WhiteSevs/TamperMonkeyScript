import { OriginPrototype } from "../../Core";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import type { PopsIcon } from "../../types/icon";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import type {
	PopsRightClickMenuDataDetails,
	PopsRightClickMenuDetails,
} from "./indexType";

export class PopsRightClickMenu {
	constructor(details: PopsRightClickMenuDetails) {
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.anim,
			pops.config.cssText.common,
		]);

		let config: Required<PopsRightClickMenuDetails> = {
			target: document.documentElement,
			targetSelector: null,
			data: [
				{
					icon: pops.config.iconSVG.search,
					iconIsLoading: false,
					text: "搜索",
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
					},
				},
				{
					icon: pops.config.iconSVG.documentCopy,
					iconIsLoading: false,
					text: "复制",
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
					},
				},
				{
					icon: pops.config.iconSVG.delete,
					text: "删除",
					iconIsLoading: false,
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
					},
				},
				{
					icon: pops.config.iconSVG.loading,
					iconIsLoading: true,
					text: "加载",
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
						return false;
					},
				},
				{
					icon: pops.config.iconSVG.elemePlus,
					iconIsLoading: true,
					text: "饿了么",
					callback(clickEvent, contextMenuEvent, liElement) {
						console.log("点击：" + this.text, [
							clickEvent,
							contextMenuEvent,
							liElement,
						]);
						return false;
					},
					item: [
						{
							icon: "",
							iconIsLoading: false,
							text: "处理文件",
							callback(clickEvent, contextMenuEvent, liElement) {
								console.log("点击：" + this.text, [
									clickEvent,
									contextMenuEvent,
									liElement,
								]);
							},
						},
						{
							icon: "",
							iconIsLoading: false,
							text: "其它处理",
							callback(clickEvent, contextMenuEvent, liElement) {
								console.log("点击：" + this.text, [
									clickEvent,
									contextMenuEvent,
									liElement,
								]);
							},
							item: [
								{
									icon: pops.config.iconSVG.view,
									iconIsLoading: false,
									text: "查看",
									callback(clickEvent, contextMenuEvent, liElement) {
										console.log("点击：" + this.text, [
											clickEvent,
											contextMenuEvent,
											liElement,
										]);
									},
								},
							],
						},
					],
				},
			],
			className: "",
			isAnimation: true,
			only: false,
			zIndex: 10000,
			preventDefault: true,
			style: null,
			beforeAppendToPageCallBack() {},
		};
		config = popsUtils.assign(config, details);
		if (config.target == null) {
			throw "config.target 不能为空";
		}
		if (details.data) {
			config.data = details.data;
		}
		let guid = popsUtils.getRandomGUID();
		const PopsType = "rightClickMenu";
		config = PopsHandler.handleOnly(PopsType, config);

		if (config.style != null) {
			let cssNode = document.createElement("style");
			cssNode.setAttribute("type", "text/css");
			cssNode.innerHTML = config.style;
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
			},
			/**
			 * contextmenu事件
			 * @param event
			 */
			contextMenuEvent(event: PointerEvent) {
				if (config.preventDefault) {
					popsDOMUtils.preventEvent(event);
				}
				if (PopsContextMenu.rootElement) {
					PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
				}
				PopsContextMenu.rootElement = PopsContextMenu.showMenu(
					event,
					config.data
				);
			},
			/**
			 * 添加contextmenu事件
			 * @param target 目标
			 * @param selector 子元素选择器
			 */
			addContextMenuEvent(
				target: HTMLElement | typeof globalThis | Window,
				selector?: string
			) {
				popsDOMUtils.on(
					target,
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
			 * @param zIndex z-index值
			 * @param isChildren 是否是rightClickMenu的某一项的子菜单
			 */
			getMenuContainerElement(zIndex: number, isChildren: boolean) {
				let menuElement = popsUtils.parseTextToDOM(`
				<div class="pops-${PopsType}" ${isChildren ? 'is-children="true"' : ""}>
				<style type="text/css" data-from="pops-${PopsType}">
				.pops-${PopsType} *{
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
					margin: 0;
					padding: 0;
					-webkit-tap-highlight-color: transparent;
					scrollbar-width: thin;
				}
				.pops-${PopsType}{
					position: fixed;
					z-index: ${zIndex};
					text-align: center;
					border-radius: 3px;
					font-size: 16px;
					font-weight: 500;
					background: #fff;
					box-shadow: 0px 1px 6px 1px #cacaca;
				}
				.pops-${PopsType}-anim-grid{
					display: grid;
					transition: 0.3s;
					grid-template-rows: 0fr;
				}
				.pops-${PopsType}-anim-show{
					grid-template-rows: 1fr;
				}
				.pops-${PopsType}-is-visited{
					background: #dfdfdf;
				}
				i.pops-${PopsType}-icon {
					height: 1em;
					width: 1em;
					line-height: 1em;
					display: inline-flex;
					justify-content: center;
					align-items: center;
					position: relative;
					fill: currentColor;
					color: inherit;
					font-size: inherit;
					margin-right: 6px;
				}
				i.pops-${PopsType}-icon[is-loading="true"]{
					animation: rotating 2s linear infinite;
				}
				.pops-${PopsType} li:hover{background:#dfdfdf;cursor:pointer}
				.pops-${PopsType} ul{
					margin: 0;
					padding: 0;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
					overflow: hidden;
				}
				.pops-${PopsType} ul li {
					padding: 5px 10px;
					margin: 2.5px 5px;
					border-radius: 3px;
					display: flex;
					width: -webkit-fill-available;
					width: -moz-available;
					text-align: left;
					user-select: none;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					align-items: center;
				}
				.pops-${PopsType} ul li:first-child{
					margin-top: 5px;
				}
				.pops-${PopsType} ul li:last-child{
					margin-bottom: 5px;
				}
				</style>
				<ul></ul>
				</div>
				`);
				/* 添加动画 */
				if (config.isAnimation) {
					popsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-grid`);
				}
				return menuElement;
			},
			/**
			 * 获取left、top偏移
			 * @param menuElement 菜单元素
			 * @param x
			 * @param y
			 */
			getOffset(menuElement: HTMLElement, x: number, y: number) {
				/* left最大偏移 */
				let maxLeftOffset =
					popsDOMUtils.width(globalThis) - popsDOMUtils.width(menuElement) - 1;
				/* top最大偏移 */
				let maxTopOffset =
					popsDOMUtils.height(globalThis) -
					popsDOMUtils.height(menuElement) -
					8;

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
				let menuElement = this.getMenuContainerElement(config.zIndex, false);
				(menuElement as any)["__menuData__"] = {
					child: [],
				};
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
				let menuElement = this.getMenuContainerElement(config.zIndex, true);
				(menuElement as any)["__menuData__"] = {
					parent: targetLiElement,
					root: rootElement,
				};
				(rootElement as any)["__menuData__"].child.push(menuElement);
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
							`<i class="pops-${PopsType}-icon" is-loading="${item.iconIsLoading}">${iconSVGHTML}</i>`
						);
						menuLiElement.appendChild(iconElement);
					}
					/* 插入文字 */
					menuLiElement.insertAdjacentHTML(
						"beforeend",
						`<span>${item.text}</span>`
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
								element.querySelectorAll("ul li").forEach((ele) => {
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

		PopsContextMenu.addContextMenuEvent(config.target, config.targetSelector!);
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
