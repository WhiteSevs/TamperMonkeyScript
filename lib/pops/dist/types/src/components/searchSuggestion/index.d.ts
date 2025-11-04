import type { PopsSearchSuggestionData, PopsSearchSuggestionConfig } from "./types/index";
export declare const PopsSearchSuggestion: {
    init<T>(__config__: PopsSearchSuggestionConfig<T>): {
        /**
         * 当前的环境，可以是document，可以是shadowroot，默认是document
         */
        selfDocument: Document | ShadowRoot | (Document | ShadowRoot)[];
        $el: {
            /** 根元素 */
            root: HTMLElement;
            /**
             * 包裹ul的容器元素
             */
            $dropdownWrapper: HTMLElement;
            /** ul元素 */
            $dropdownContainer: HTMLUListElement;
            /**
             * 箭头元素
             */
            $arrow: HTMLDivElement;
            /** 动态更新CSS */
            $dynamicCSS: HTMLStyleElement;
        };
        $evt: {
            offInputChangeEvtHandler: ((...args: any[]) => any)[];
        };
        $data: {
            /** 是否结果为空 */
            isEmpty: boolean;
            /**
             * 存储在元素上的操作的键名
             */
            storeNodeHandlerKey: string;
        };
        /**
         * 初始化
         * @param $parent 父元素
         * @example
         * .init();
         * .setAllEvent();
         */
        init($parent?: HTMLElement): void;
        /**
         * 初始化元素变量
         */
        initEl(): void;
        /**
         * 获取数据
         */
        getData(): PopsSearchSuggestionData<T>[];
        /**
         * 更新数据
         * @param data 数据
         */
        setData(data: PopsSearchSuggestionData<T>[]): void;
        /**
         * 获取显示出搜索建议框的html
         */
        createSearchSelectElement(): HTMLDivElement;
        /**
         * 动态获取CSS
         */
        getDynamicCSS(): string;
        /**
         * 获取data-value值
         * @param data 数据项
         */
        getItemDataValue(data: PopsSearchSuggestionData<T>): PopsSearchSuggestionData<T>;
        /**
         * 获取显示出搜索建议框的每一项的html
         * @param dataItem 当前项的值
         * @param dateItemIndex 当前项的下标
         */
        createSearchItemLiElement(dataItem: PopsSearchSuggestionData<T>, dateItemIndex: number): HTMLLIElement;
        /**
         * 设置搜索建议框每一项的点击事件
         * @param $searchItem 当前项的元素
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
         * 设置所有监听，包括（input值改变、全局点击判断显示/隐藏建议框）
         */
        setAllEvent(option?: AddEventListenerOptions): void;
        /**
         * 移除所有监听
         */
        removeAllEvent(option?: AddEventListenerOptions): void;
        /**
         * 获取删除按钮的html
         */
        createItemDeleteIcon(size?: number, fill?: string): HTMLElement;
        /**
         * 设置当前正在搜索中的提示
         */
        setPromptsInSearch(): void;
        /**
         * 移除正在搜索中的提示
         */
        removePromptsInSearch(): void;
        /**
         * 更新搜索建议框的位置(top、left)
         * 因为目标元素可能是动态隐藏的
         * @param target 目标元素
         * @param checkPositonAgain 是否在更新位置信息后检测更新位置信息，默认true
         */
        changeHintULElementPosition(target?: HTMLElement, checkPositonAgain?: boolean): void;
        /**
         * 更新搜索建议框的width
         * 因为目标元素可能是动态隐藏的
         * @param target 目标元素
         */
        changeHintULElementWidth(target?: HTMLElement): void;
        /**
         * 动态更新CSS
         */
        updateDynamicCSS(): void;
        /**
         * 数据项的数量改变时调用
         *
         * - 更新css
         * - 更新建议框的宽度
         * - 更新建议框的位置
         */
        updateStyleSheet(): void;
        /**
         * 添加搜索结果元素
         * @param $item 项元素
         */
        addItem($item: HTMLElement | DocumentFragment): void;
        /**
         * 更新页面显示的搜索结果
         * @param updateData
         */
        update(updateData?: PopsSearchSuggestionData<T>[]): void;
        /**
         * 清空当前的搜索结果并显示无结果
         * @param [onlyClearView=false] 是否仅清空元素，默认false
         */
        clear(onlyClearView?: boolean): void;
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
