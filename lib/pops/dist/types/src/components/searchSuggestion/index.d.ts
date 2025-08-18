import type { PopsSearchSuggestionDetails } from "./types/index";
export declare const PopsSearchSuggestion: {
    init(details: PopsSearchSuggestionDetails): {
        /**
         * 当前的环境，可以是document，可以是shadowroot，默认是document
         */
        selfDocument: Document | ShadowRoot | (Document | ShadowRoot)[];
        $el: {
            /** 根元素 */
            root: HTMLElement;
            /** ul元素 */
            $hintULContainer: HTMLUListElement;
            /** 动态更新CSS */
            $dynamicCSS: HTMLStyleElement;
        };
        $data: {
            /** 是否结果为空 */
            isEmpty: boolean;
        };
        /** 初始化元素变量 */
        initEl(): void;
        /**
         * 初始化
         */
        init(parentElement?: HTMLElement): void;
        /**
         * 获取数据
         */
        getData(): any[];
        /**
         * 获取显示出搜索建议框的html
         */
        createSearchSelectElement(): HTMLDivElement;
        /** 动态获取CSS */
        getDynamicCSS(): string;
        /**
         * 获取显示出搜索建议框的每一项的html
         * @param data 当前项的值
         * @param index 当前项的下标
         */
        createSearchItemLiElement(data: any, index: number): HTMLLIElement;
        /**
         * 获取data-value值
         * @param data
         */
        getItemDataValue(data: any): any;
        /**
         * 设置搜索建议框每一项的点击事件
         * @param $searchItem
         */
        setSearchItemClickEvent($searchItem: HTMLLIElement): void;
        /**
         * 设置搜索建议框每一项的选中事件
         * @param liElement
         */
        setSearchItemSelectEvent(liElement: HTMLLIElement): void;
        /**
         * 监听输入框内容改变
         */
        setInputChangeEvent(option?: AddEventListenerOptions): void;
        /**
         * 移除输入框内容改变的监听
         */
        removeInputChangeEvent(option?: AddEventListenerOptions): void;
        /**
         * 显示搜索建议框的事件
         */
        showEvent(): void;
        /**
         * 设置显示搜索建议框的事件
         */
        setShowEvent(option?: AddEventListenerOptions): void;
        /**
         * 移除显示搜索建议框的事件
         */
        removeShowEvent(option?: AddEventListenerOptions): void;
        /**
         * 隐藏搜索建议框的事件
         * @param event
         */
        hideEvent(event: PointerEvent | MouseEvent): void;
        /**
         * 设置隐藏搜索建议框的事件
         */
        setHideEvent(option?: AddEventListenerOptions): void;
        /**
         * 移除隐藏搜索建议框的事件
         */
        removeHideEvent(option?: AddEventListenerOptions): void;
        /**
         * 设置所有监听
         */
        setAllEvent(option?: AddEventListenerOptions): void;
        /**
         * 移除所有监听
         */
        removeAllEvent(option?: AddEventListenerOptions): void;
        /**
         * 获取删除按钮的html
         */
        getDeleteIconHTML(size?: number, fill?: string): string;
        /**
         * 设置当前正在搜索中的提示
         */
        setPromptsInSearch(): void;
        /**
         * 移除正在搜索中的提示
         */
        removePromptsInSearch(): void;
        /**
         * 清空所有的搜索结果
         */
        clearAllSearchItemLi(): void;
        /**
         * 更新搜索建议框的位置(top、left)
         * 因为目标元素可能是动态隐藏的
         */
        changeHintULElementPosition(target?: HTMLElement): void;
        /**
         * 更新搜索建议框的width
         * 因为目标元素可能是动态隐藏的
         */
        changeHintULElementWidth(target?: HTMLElement): void;
        /**
         * 动态更新CSS
         */
        updateDynamicCSS(): void;
        /**
         * 数据项的数量改变时调用
         */
        updateStyleSheet(): void;
        /**
         * 更新页面显示的搜索结果
         * @param data
         */
        update(data?: any[]): void;
        /**
         * 清空当前的搜索结果并显示无结果
         */
        clear(): void;
        /**
         * 隐藏搜索建议框
         * @param useAnimationToHide 是否使用动画隐藏
         */
        hide(useAnimationToHide?: boolean): void;
        /**
         * 显示搜索建议框
         */
        show(): void;
    };
};
