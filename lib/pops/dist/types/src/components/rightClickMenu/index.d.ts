import type { PopsRightClickMenuDataDetails, PopsRightClickMenuDetails } from "./types";
export declare const PopsRightClickMenu: {
    init(details: PopsRightClickMenuDetails): {
        guid: string;
        config: DeepRequired<PopsRightClickMenuDetails>;
        addWindowCheckClickListener: () => void;
        removeWindowCheckClickListener: () => void;
        addContextMenuEvent: (target: PopsRightClickMenuDetails["target"], selector?: string) => void;
        removeContextMenuEvent: (target: HTMLElement | typeof globalThis | Window, selector?: string) => void;
        /**
         * 移除初始化时的添加的监听事件
         */
        removeInitEventListener: {
            contextMenu(): void;
            windowClick(): void;
        };
        /**
         * 操作弹出菜单的对象
         */
        PopsContextMenu: {
            /**
             * 根元素
             */
            rootElement: HTMLElement;
            /**
             * 全局点击检测
             * @param event
             */
            windowCheckClickEvent(event: MouseEvent | PointerEvent): void;
            /**
             * target为shadowRoot或shadowRoot内的全局点击检测
             * @param event
             */
            shadowRootCheckClickEvent(event: MouseEvent | PointerEvent): void;
            /**
             * 添加全局点击检测事件
             */
            addWindowCheckClickListener(): void;
            /**
             * 移除全局点击检测事件
             */
            removeWindowCheckClickListener(): void;
            /**
             * contextmenu事件
             * @param event
             * @param selectorTarget
             */
            contextMenuEvent(event: PointerEvent, selectorTarget: NonNullable<PopsRightClickMenuDetails["target"]>): void;
            /**
             * 添加contextmenu事件
             * @param target 目标
             * @param selector 子元素选择器
             */
            addContextMenuEvent(target: PopsRightClickMenuDetails["target"], selector?: string): void;
            /**
             * 移除contextmenu事件
             * @param target 目标
             * @param selector 子元素选择器
             */
            removeContextMenuEvent(target: HTMLElement | typeof globalThis | Window, selector?: string): void;
            /**
             * 自动判断是否存在动画，存在动画就执行关闭动画并删除
             * @param $menu
             */
            animationCloseMenu($menu: HTMLElement): void;
            /**
             * 关闭所有菜单
             * @param rootElement
             */
            closeAllMenu(rootElement: HTMLElement): void;
            /**
             * 获取菜单容器
             * @param isChildren 是否是rightClickMenu的某一项的子菜单
             */
            createMenuContainerElement(isChildren: boolean): HTMLDivElement;
            /**
             * 动态获取配的z-index
             */
            getMenuZIndex(): number;
            /**
             * 获取left、top偏移
             * @param menuElement 当前生成的菜单元素
             * @param mousePosition 鼠标位置信息
             * @param isMainMenu 是否是主菜单
             */
            getOffset(menuElement: HTMLElement, mousePosition: {
                x: number;
                y: number;
            }, parentInfo?: {
                $menu: HTMLElement;
                $parentItem: HTMLElement;
            }): {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
            /**
             * 显示菜单
             * @param menuEvent 触发的事件
             * @param _config_
             * @param menuListenerRootNode 右键菜单监听的元素
             */
            showMenu(menuEvent: PointerEvent, _config_: PopsRightClickMenuDataDetails[], menuListenerRootNode: NonNullable<PopsRightClickMenuDetails["target"]>): HTMLDivElement;
            /**
             * 显示子菜单
             * @param menuEvent 事件
             * @param posInfo 位置信息
             * @param  _config_
             * @param rootElement 根菜单元素
             * @param targetLiElement 父li项元素
             * @param menuListenerRootNode 右键菜单监听的元素
             */
            showClildMenu(menuEvent: PointerEvent, posInfo: {
                clientX: number;
                clientY: number;
            }, _config_: PopsRightClickMenuDataDetails[], rootElement: HTMLDivElement, targetLiElement: HTMLLIElement, menuListenerRootNode: NonNullable<PopsRightClickMenuDetails["target"]>): HTMLDivElement;
            /**
             * 处理菜单显示的css样式（添加到页面后）
             * @param $menu 菜单元素
             * @param posInfo 菜单位置信息
             * @param parentInfo 配置子菜单的父级信息
             */
            handlerShowMenuCSS($menu: HTMLElement, posInfo: {
                clientX: number;
                clientY: number;
            }, parentInfo?: {
                $menu: HTMLElement;
                $parentItem: HTMLElement;
            }): void;
            /**
             * 获取菜单项的元素
             * @param menuEvent 事件
             * @param rootElement 根元素
             * @param menuElement 菜单元素
             * @param _config_ 配置
             * @param menuListenerRootNode 右键菜单监听的元素
             */
            addMenuLiELement(menuEvent: PointerEvent, rootElement: HTMLDivElement, menuElement: HTMLDivElement, _config_: PopsRightClickMenuDataDetails[], menuListenerRootNode: NonNullable<PopsRightClickMenuDetails["target"]>): void;
        };
    };
};
