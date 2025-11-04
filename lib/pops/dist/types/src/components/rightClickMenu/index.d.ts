import type { PopsRightClickMenuConfig, PopsRightClickMenuDataConfig } from "./types";
export declare const PopsRightClickMenu: {
    init(__config__: PopsRightClickMenuConfig): {
        guid: string;
        config: DeepRequired<PopsRightClickMenuConfig>;
        addWindowCheckClickListener: () => void;
        removeWindowCheckClickListener: () => void;
        addContextMenuEvent: (target: PopsRightClickMenuConfig["$target"], selector?: string) => void;
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
            $data: {
                menuDataKey: string;
            };
            $el: {
                $root: HTMLElement;
            };
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
            contextMenuEvent(event: PointerEvent, selectorTarget: NonNullable<PopsRightClickMenuConfig["$target"]>): void;
            /**
             * 添加contextmenu事件
             * @param target 目标
             * @param selector 子元素选择器
             */
            addContextMenuEvent(target: PopsRightClickMenuConfig["$target"], selector?: string): void;
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
             * @param $root
             */
            closeAllMenu($root: HTMLElement): void;
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
             * @param $menu 当前生成的菜单元素
             * @param mousePosition 鼠标位置信息
             * @param isMainMenu 是否是主菜单
             */
            getOffset($menu: HTMLElement, mousePosition: {
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
             * @param dataConfig
             * @param $listenerRootNode 右键菜单监听的元素
             */
            showMenu(menuEvent: PointerEvent, dataConfig: PopsRightClickMenuDataConfig[], $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>): HTMLDivElement;
            /**
             * 显示子菜单
             * @param menuEvent 事件
             * @param posInfo 位置信息
             * @param  dataConfig
             * @param $root 根菜单元素
             * @param $targetLi 父li项元素
             * @param $listenerRootNode 右键菜单监听的元素
             */
            showClildMenu(menuEvent: PointerEvent, posInfo: {
                clientX: number;
                clientY: number;
            }, dataConfig: PopsRightClickMenuDataConfig[], $root: HTMLDivElement, $targetLi: HTMLLIElement, $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>): HTMLDivElement;
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
             * @param $root 根元素
             * @param $menu 菜单元素
             * @param dataConfig 配置
             * @param $listenerRootNode 右键菜单监听的元素
             */
            addMenuLiELement(menuEvent: PointerEvent, $root: HTMLDivElement, $menu: HTMLDivElement, dataConfig: PopsRightClickMenuDataConfig[], $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>): void;
        };
    };
};
