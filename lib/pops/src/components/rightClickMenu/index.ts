import { OriginPrototype } from "../../PopsCore";
import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsHandler } from "../../handler/PopsHandler";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsRightClickMenuDefaultConfig } from "./defaultConfig";
import type {
  PopsRightClickMenuChildRootStoreNodeValue,
  PopsRightClickMenuConfig,
  PopsRightClickMenuDataConfig,
  PopsRightClickMenuItemStoreNodeValue,
  PopsRightClickMenuRootStoreNodeValue,
} from "./types";
import { PopsCSS } from "../../PopsCSS";
import { PopsIcon } from "../../PopsIcon";
import type { PopsType } from "../../types/main";

export const PopsRightClickMenu = {
  init(__config__: PopsRightClickMenuConfig) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const popsType: PopsType = "rightClickMenu";

    let config = PopsRightClickMenuDefaultConfig();
    config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
    config = popsUtils.assign(config, __config__);
    config = PopsHandler.handleOnly(popsType, config);

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
      const $css = popsDOMUtils.createElement(
        "style",
        {
          innerHTML: config.style,
        },
        {
          type: "text/css",
        }
      );
      $shadowRoot.appendChild($css);
    }

    const PopsContextMenu = {
      $data: {
        menuDataKey: "data-menu",
      },
      $el: {
        $root: null as any as HTMLElement,
      },
      /**
       * 全局点击检测
       * @param event
       */
      windowCheckClickEvent(event: MouseEvent | PointerEvent) {
        if (!PopsContextMenu.$el.$root) {
          return;
        }
        const $click = event.target as HTMLElement;
        if ($click.closest(`.pops-${popsType}`)) {
          return;
        }
        if ($click.className && $click.className === "pops-shadow-container" && $click.shadowRoot != null) {
          return;
        }
        PopsContextMenu.closeAllMenu(PopsContextMenu.$el.$root);
      },
      /**
       * target为shadowRoot或shadowRoot内的全局点击检测
       * @param event
       */
      shadowRootCheckClickEvent(event: MouseEvent | PointerEvent) {
        if (!PopsContextMenu.$el.$root) {
          return;
        }
        const $click = event.target as HTMLElement;
        if ($click.closest(`.pops-${popsType}`)) {
          return;
        }
        PopsContextMenu.closeAllMenu(PopsContextMenu.$el.$root);
      },
      /**
       * 添加全局点击检测事件
       */
      addWindowCheckClickListener() {
        popsDOMUtils.on(globalThis, "click touchstart", void 0, PopsContextMenu.windowCheckClickEvent, {
          capture: true,
        });
        if (config.$target instanceof Node) {
          const $shadowRoot = config.$target.getRootNode();
          if ($shadowRoot instanceof ShadowRoot) {
            popsDOMUtils.on($shadowRoot, "click touchstart", void 0, PopsContextMenu.shadowRootCheckClickEvent, {
              capture: true,
            });
          }
        }
      },
      /**
       * 移除全局点击检测事件
       */
      removeWindowCheckClickListener() {
        popsDOMUtils.off(globalThis, "click touchstart", void 0, PopsContextMenu.windowCheckClickEvent, {
          capture: true,
        });
        if (config.$target instanceof Node) {
          const $shadowRoot = config.$target.getRootNode();
          if ($shadowRoot instanceof ShadowRoot) {
            popsDOMUtils.off($shadowRoot, "click touchstart", void 0, PopsContextMenu.windowCheckClickEvent, {
              capture: true,
            });
          }
        }
      },
      /**
       * contextmenu事件
       * @param event
       * @param selectorTarget
       */
      contextMenuEvent(event: PointerEvent, selectorTarget: NonNullable<PopsRightClickMenuConfig["$target"]>) {
        if (config.preventDefault) {
          popsDOMUtils.preventEvent(event);
        }
        PopsHandler.handleOnly(popsType, config);
        if (PopsContextMenu.$el.$root) {
          PopsContextMenu.closeAllMenu(PopsContextMenu.$el.$root);
        }
        selectorTarget = selectorTarget ?? config.$target;
        const rootElement = PopsContextMenu.showMenu(event, config.data, selectorTarget);
        PopsContextMenu.$el.$root = rootElement;
        if (config.only) {
          PopsHandler.handlePush(popsType, {
            $shadowRoot: $shadowRoot,
            $shadowContainer: $shadowContainer,
            guid: guid,
            $anim: rootElement,
            $pops: rootElement,
            beforeRemoveCallBack(instCommonConfig) {
              PopsContextMenu.closeAllMenu(instCommonConfig.$pops);
            },
          });
        }
      },
      /**
       * 添加contextmenu事件
       * @param target 目标
       * @param selector 子元素选择器
       */
      addContextMenuEvent(target: PopsRightClickMenuConfig["$target"], selector?: string) {
        popsDOMUtils.on(target!, "contextmenu", selector, PopsContextMenu.contextMenuEvent);
      },
      /**
       * 移除contextmenu事件
       * @param target 目标
       * @param selector 子元素选择器
       */
      removeContextMenuEvent(target: HTMLElement | typeof globalThis | Window, selector?: string) {
        popsDOMUtils.off(target, "contextmenu", selector, PopsContextMenu.contextMenuEvent);
      },
      /**
       * 自动判断是否存在动画，存在动画就执行关闭动画并删除
       * @param $menu
       */
      animationCloseMenu($menu: HTMLElement) {
        /**
         * 动画结束触发的事件
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const transitionEndEvent = (event: TransitionEvent) => {
          popsDOMUtils.off($menu, popsDOMUtils.getTransitionEndNameList(), transitionEndEvent, {
            capture: true,
          });
          $menu.remove();
        };
        if (popsDOMUtils.containsClassName($menu, `pops-${popsType}-anim-show`)) {
          // 有动画
          popsDOMUtils.on($menu, popsDOMUtils.getTransitionEndNameList(), transitionEndEvent, {
            capture: true,
          });
          popsDOMUtils.removeClassName($menu, `pops-${popsType}-anim-show`);
        } else if (
          popsDOMUtils.containsClassName($menu, `pops-${popsType}-anim-scale`) &&
          popsDOMUtils.containsClassName($menu, `pops-${popsType}-anim-scale-open`)
        ) {
          // 有动画
          popsDOMUtils.on($menu, popsDOMUtils.getTransitionEndNameList(), transitionEndEvent, {
            capture: true,
          });
          popsDOMUtils.removeClassName($menu, `pops-${popsType}-anim-scale-open`);
          popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-scale-not-open`);
        } else {
          // 无动画
          $menu.remove();
        }
      },
      /**
       * 关闭所有菜单
       * @param $root
       */
      closeAllMenu($root: HTMLElement) {
        if ($root == null) {
          return;
        }
        const rootElementMenuData: PopsRightClickMenuRootStoreNodeValue | PopsRightClickMenuChildRootStoreNodeValue =
          Reflect.get($root, PopsContextMenu.$data.menuDataKey);
        if ((<PopsRightClickMenuChildRootStoreNodeValue>rootElementMenuData)?.root) {
          $root = (<PopsRightClickMenuChildRootStoreNodeValue>rootElementMenuData).root;
        }

        const childMenuList = (<PopsRightClickMenuRootStoreNodeValue>rootElementMenuData).child as HTMLElement[];
        childMenuList.forEach((childMenuElement) => {
          this.animationCloseMenu(childMenuElement);
        });
        this.animationCloseMenu($root);
        PopsContextMenu.$el.$root = null as any;
      },
      /**
       * 获取菜单容器
       * @param isChildren 是否是rightClickMenu的某一项的子菜单
       */
      createMenuContainerElement(isChildren: boolean) {
        const $menu = popsDOMUtils.createElement(
          "div",
          {
            className: `pops-${popsType}`,
            innerHTML: /*html*/ `<ul class="pops-${popsType}-wrapper"></ul>`,
          },
          {
            "data-position": config.position,
          }
        );
        const zIndex = this.getMenuZIndex();
        if (zIndex > 10000) {
          $menu.style.zIndex = zIndex.toString();
        }
        if (isChildren) {
          $menu.setAttribute("is-children", "true");
        }
        // 添加动画
        if (config.isAnimation) {
          popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-grid`);
        }
        // 添加放大动画
        if (config.useScaleAnimation) {
          popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-scale`);
          popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-scale-not-open`);
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
       * @param $menu 当前生成的菜单元素
       * @param mousePosition 鼠标位置信息
       * @param isMainMenu 是否是主菜单
       */
      getOffset(
        $menu: HTMLElement,
        mousePosition: { x: number; y: number },
        parentInfo?: {
          $menu: HTMLElement;
          $parentItem: HTMLElement;
        }
      ) {
        const result = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        };
        const menuElementWidth = popsDOMUtils.width($menu);
        const menuElementHeight = popsDOMUtils.height($menu);
        /**
         * 限制的间隙距离
         */
        const limitDistance = 1;
        let maxPageLeftOffset = popsDOMUtils.width(globalThis) - limitDistance;
        let maxPageTopOffset = popsDOMUtils.height(globalThis) - limitDistance;
        if (config.position === "absolute") {
          // 添加滚动距离
          maxPageLeftOffset += globalThis.scrollX;
          maxPageTopOffset += globalThis.scrollY;
        }
        // left最大偏移
        const maxLeftOffset = maxPageLeftOffset - menuElementWidth;
        // top最大偏移
        const maxTopOffset = maxPageTopOffset - menuElementHeight;

        const chileMenuLeftOrRightDistance = config.chileMenuLeftOrRightDistance;
        const childMenuTopOrBottomDistance = config.childMenuTopOrBottomDistance;
        let currentLeftOffset = mousePosition.x;
        let currentTopOffset = mousePosition.y;
        currentLeftOffset = currentLeftOffset < 0 ? 0 : currentLeftOffset;
        currentTopOffset = currentTopOffset < 0 ? 0 : currentTopOffset;

        // 不允许超出left最大值
        if (config.limitPositionXInView && currentLeftOffset + chileMenuLeftOrRightDistance >= maxLeftOffset) {
          // 超过，那么子菜单将会在放在左边
          // 偏移计算方式就是父菜单的右偏移+父菜单的宽度
          if (parentInfo) {
            // 子菜单
            const mainMenuOffset = popsDOMUtils.offset(parentInfo.$menu);
            currentLeftOffset = maxPageLeftOffset - mainMenuOffset.left - chileMenuLeftOrRightDistance + limitDistance;
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
        if (config.limitPositionYInView && currentTopOffset + childMenuTopOrBottomDistance >= maxTopOffset) {
          // 超过，那么子菜单将会在放在上面
          if (parentInfo) {
            // 以项的top偏移为基准
            const parentItemOffset = popsDOMUtils.offset(parentInfo.$parentItem, false);
            currentTopOffset =
              maxPageTopOffset - parentItemOffset.bottom - childMenuTopOrBottomDistance + limitDistance;
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
          // 底部偏移
          result.top = currentTopOffset;
          Reflect.deleteProperty(result, "bottom");
        }
        return result;
      },
      /**
       * 显示菜单
       * @param menuEvent 触发的事件
       * @param dataConfig
       * @param $listenerRootNode 右键菜单监听的元素
       */
      showMenu(
        menuEvent: PointerEvent,
        dataConfig: PopsRightClickMenuDataConfig[],
        $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>
      ) {
        const menuElement = this.createMenuContainerElement(false);
        Reflect.set(menuElement, PopsContextMenu.$data.menuDataKey, {
          child: [],
        } as PopsRightClickMenuRootStoreNodeValue);
        // 添加子元素
        PopsContextMenu.addMenuLiELement(menuEvent, menuElement, menuElement, dataConfig, $listenerRootNode);
        // 添加到页面
        popsDOMUtils.append($shadowRoot, menuElement);
        // 判断容器是否存在
        if (!document.contains($shadowContainer)) {
          if (typeof config.beforeAppendToPageCallBack === "function") {
            config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
          }
          popsDOMUtils.appendBody($shadowContainer);
        }
        this.handlerShowMenuCSS(menuElement, menuEvent);
        return menuElement;
      },
      /**
       * 显示子菜单
       * @param menuEvent 事件
       * @param posInfo 位置信息
       * @param  dataConfig
       * @param $root 根菜单元素
       * @param $targetLi 父li项元素
       * @param $listenerRootNode 右键菜单监听的元素
       */
      showClildMenu(
        menuEvent: PointerEvent,
        posInfo: {
          clientX: number;
          clientY: number;
        },
        dataConfig: PopsRightClickMenuDataConfig[],
        $root: HTMLDivElement,
        $targetLi: HTMLLIElement,
        $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>
      ) {
        const menuElement = this.createMenuContainerElement(true);
        Reflect.set(menuElement, PopsContextMenu.$data.menuDataKey, {
          parent: $targetLi,
          root: $root,
        } as PopsRightClickMenuItemStoreNodeValue);
        // 根菜单数据
        const rootElementMenuData: PopsRightClickMenuRootStoreNodeValue = Reflect.get(
          $root,
          PopsContextMenu.$data.menuDataKey
        );
        rootElementMenuData.child.push(menuElement);
        // 添加子元素
        PopsContextMenu.addMenuLiELement(menuEvent, $root, menuElement, dataConfig, $listenerRootNode);
        // 添加到页面
        popsDOMUtils.append($shadowRoot, menuElement);
        const $parentMenu = $targetLi.closest<HTMLElement>(".pops-rightClickMenu")!;
        this.handlerShowMenuCSS(menuElement, posInfo, {
          $menu: $parentMenu,
          $parentItem: $targetLi,
        });
        return menuElement;
      },
      /**
       * 处理菜单显示的css样式（添加到页面后）
       * @param $menu 菜单元素
       * @param posInfo 菜单位置信息
       * @param parentInfo 配置子菜单的父级信息
       */
      handlerShowMenuCSS(
        $menu: HTMLElement,
        posInfo: {
          clientX: number;
          clientY: number;
        },
        parentInfo?: {
          $menu: HTMLElement;
          $parentItem: HTMLElement;
        }
      ) {
        const offset = this.getOffset(
          $menu,
          {
            x: posInfo.clientX,
            y: posInfo.clientY,
          },
          parentInfo
        );
        // 显示
        popsDOMUtils.css($menu, {
          ...offset,
        });
        // 过渡动画
        if (config.isAnimation) {
          popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-show`);
        }
        if (config.useScaleAnimation) {
          popsDOMUtils.removeClassName($menu, `pops-${popsType}-anim-scale-not-open`);
          popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-scale-open`);
        }
      },
      /**
       * 获取菜单项的元素
       * @param menuEvent 事件
       * @param $root 根元素
       * @param $menu 菜单元素
       * @param dataConfig 配置
       * @param $listenerRootNode 右键菜单监听的元素
       */
      addMenuLiELement(
        menuEvent: PointerEvent,
        $root: HTMLDivElement,
        $menu: HTMLDivElement,
        dataConfig: PopsRightClickMenuDataConfig[],
        $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>
      ) {
        const menuEventTarget = menuEvent.target;
        const menuULElement = $menu.querySelector<HTMLUListElement>("ul")!;
        dataConfig.forEach((item) => {
          const menuLiElement = popsDOMUtils.parseTextToDOM<HTMLLIElement>(`<li></li>`);
          // 判断有无图标，有就添加进去
          if (typeof item.icon === "string" && item.icon.trim() !== "") {
            const iconSVGHTML = PopsIcon.getIcon(item.icon) ?? item.icon;
            const iconElement = popsDOMUtils.parseTextToDOM(
              /*html*/ `<i class="pops-${popsType}-icon" is-loading="${item.iconIsLoading ?? false}">${iconSVGHTML}</i>`
            );
            menuLiElement.appendChild(iconElement);
          }
          // 插入文字
          menuLiElement.insertAdjacentHTML("beforeend", PopsSafeUtils.getSafeHTML(`<span>${item.text}</span>`));
          // 如果存在子数据，显示
          if (item.item && Array.isArray(item.item)) {
            popsDOMUtils.addClassName(menuLiElement, `pops-${popsType}-item`);
          }
          // 鼠标|触摸 移入事件
          // 在移动端会先触发touchstart再然后mouseenter
          let isEmitTouchEvent = false;
          /**
           * 鼠标|触摸 移入事件
           */
          function liElementHoverEvent(event: MouseEvent | TouchEvent) {
            if (event.type === "touchstart") {
              isEmitTouchEvent = true;
            }
            if (isEmitTouchEvent && event.type === "mouseenter") {
              return;
            }
            Array.from(menuULElement.children as any as HTMLLIElement[]).forEach((liElement) => {
              popsDOMUtils.removeClassName(liElement, `pops-${popsType}-is-visited`);
              const li_menuData: PopsRightClickMenuItemStoreNodeValue = Reflect.get(
                liElement,
                PopsContextMenu.$data.menuDataKey
              );
              if (!li_menuData) {
                return;
              }
              function removeElement($el: HTMLElement | undefined | null) {
                if (!$el) return;
                $el.querySelectorAll<HTMLLIElement>("ul li").forEach(($ele) => {
                  const menuData: PopsRightClickMenuItemStoreNodeValue = Reflect.get(
                    $ele,
                    PopsContextMenu.$data.menuDataKey
                  );
                  if (menuData?.child) {
                    removeElement(menuData.child);
                  }
                });
                $el.remove();
              }
              // 遍历根元素的上的__menuData__.child，判断
              removeElement(li_menuData.child);
            });
            // 清理根元素上的children不存在于页面中的元素
            const root_menuData: PopsRightClickMenuRootStoreNodeValue = Reflect.get(
              $root,
              PopsContextMenu.$data.menuDataKey
            );
            for (let index = 0; index < root_menuData.child.length; index++) {
              const element = root_menuData.child[index];
              if (!$shadowRoot.contains(element)) {
                root_menuData.child.splice(index, 1);
                index--;
              }
            }
            popsDOMUtils.addClassName(menuLiElement, `pops-${popsType}-is-visited`);
            if (!item.item) {
              return;
            }
            const rect = menuLiElement.getBoundingClientRect();
            const childMenu = PopsContextMenu.showClildMenu(
              menuEvent,
              {
                clientX: rect.left + popsDOMUtils.outerWidth(menuLiElement),
                clientY: rect.top,
              },
              item.item,
              $root,
              menuLiElement,
              $listenerRootNode
            );
            Reflect.set(menuLiElement, PopsContextMenu.$data.menuDataKey, {
              child: childMenu,
            } as PopsRightClickMenuItemStoreNodeValue);
          }
          /**
           * 点击事件
           * @param clickEvent
           */
          async function liElementClickEvent(clickEvent: MouseEvent | PointerEvent) {
            if (typeof item.callback === "function") {
              try {
                OriginPrototype.Object.defineProperty(menuEvent, "target", {
                  get() {
                    return menuEventTarget;
                  },
                });
              } catch {
                // 忽略
              }
              const callbackResult = await item.callback(
                clickEvent as PointerEvent,
                menuEvent,
                menuLiElement,
                $listenerRootNode
              );
              if (typeof callbackResult === "boolean" && callbackResult == false) {
                return;
              }
            }
            // 取消绑定的鼠标/触摸事件，防止关闭的时候再次触发
            Array.from(menuULElement.children as any as HTMLLIElement[]).forEach((liEle) => {
              popsDOMUtils.off(liEle, "mouseenter touchstart");
            });
            PopsContextMenu.closeAllMenu($root);
          }
          popsDOMUtils.on(menuLiElement, "mouseenter touchstart", liElementHoverEvent);
          // 项-点击事件
          popsDOMUtils.on(menuLiElement, "click", liElementClickEvent);
          menuULElement.appendChild(menuLiElement);
        });
      },
    };

    // 添加右键菜单事件
    PopsContextMenu.addContextMenuEvent(config.$target, config.targetSelector!);
    // 添加全局点击检测
    PopsContextMenu.addWindowCheckClickListener();
    return {
      guid: guid,
      config: config as DeepRequired<PopsRightClickMenuConfig>,
      addWindowCheckClickListener: PopsContextMenu.addWindowCheckClickListener,
      removeWindowCheckClickListener: PopsContextMenu.removeWindowCheckClickListener,
      addContextMenuEvent: PopsContextMenu.addContextMenuEvent,
      removeContextMenuEvent: PopsContextMenu.removeContextMenuEvent,
      /**
       * 移除初始化时的添加的监听事件
       */
      removeInitEventListener: {
        contextMenu() {
          PopsContextMenu.removeContextMenuEvent(config.$target as Window, config.targetSelector!);
        },
        windowClick() {
          PopsContextMenu.removeWindowCheckClickListener();
        },
      },
      /**
       * 操作弹出菜单的对象
       */
      PopsContextMenu: PopsContextMenu,
    };
  },
};
