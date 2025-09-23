import type { PagingConfig } from "./types/config";
export declare class Paging<T> {
    version: string;
    CONFIG: Required<PagingConfig<T>>;
    PAGE_CONFIG: {
        /**
         * 获取当前所在页
         */
        currentPage: () => number;
        /** 最大页码 */
        maxPage: number;
    };
    DOM_CONFIG: {
        $pageWrapper: {
            localName: string;
            id: string;
            dom: HTMLElement | null;
        };
        firstBtnNode: {
            localName: string;
            className: string;
            svgHTML: string;
            get: () => HTMLAnchorElement;
        };
        prevBtnNode: {
            localName: string;
            className: string;
            svgHTML: string;
            get: () => HTMLAnchorElement;
        };
        nextBtnNode: {
            localName: string;
            className: string;
            svgHTML: string;
            get: () => HTMLAnchorElement;
        };
        lastBtnNode: {
            localName: string;
            className: string;
            svgHTML: string;
            get: () => HTMLAnchorElement;
        };
        /**
         * 设置 元素的 页码 值
         * @param $el
         * @param page
         */
        setAttributeWithPageId: ($el: HTMLElement, page: number) => void;
        /**
         * 获取 元素 的页码属性
         * @param $el
         */
        getAttributeWithPageId: ($el: HTMLElement) => number | null;
        /**
         * 判断 元素 是否存在页码属性
         * @param $el
         */
        hasAttributeWithPageId: ($el: HTMLElement) => boolean;
        /**
         * 设置 元素的属性 为当前所在页码
         * @param $el
         */
        setAttributeWithCurrentPage: ($el: HTMLElement) => void;
        /**
         * 获取当前页码的元素
         * @param $pageWrapper
         */
        getAttributeWithCurrentPage: ($pageWrapper?: HTMLElement) => HTMLAnchorElement;
        /**
         * 判断 元素 是否存在 当前页的属性
         * @param $el
         */
        hasAttributeWithCurrentPage: ($el: HTMLElement) => boolean;
        /**
         * 移除 当前页码的属性
         * @param $el
         */
        removeAttributeWithCurrentPage: ($el: HTMLElement) => void;
        /**
         * 设置 元素 禁用
         * @param $el
         */
        setAttributeWithDisabled: ($el: HTMLElement) => void;
        /**
         * 移除当前页面的禁用的元素
         * @param $pageWrapper
         */
        removeAllAttributeWithDisabled: ($pageWrapper: HTMLElement | null) => void;
        /**
         * 获取 第一页 元素节点
         * @param $pageWrapper
         */
        getFirstPageNode: ($pageWrapper?: HTMLElement) => HTMLElement | null;
        /**
         * 获取 最后一页 元素节点
         * @param {$pageWrapper
         */
        getLastPageNode: ($pageWrapper?: HTMLElement) => HTMLAnchorElement | null;
        /**
         * 获取当前所有的页码元素节点
         * @param $pageWrapper
         */
        getAllPageNode: ($pageWrapper?: HTMLElement) => HTMLAnchorElement[];
    };
    /**
     * @param config
     */
    constructor(config: PagingConfig<T>);
    /**
     * 隐藏分页容器
     * @param $wrapper 分页容器
     */
    hide($wrapper?: HTMLElement | null): void;
    /**
     * 显示分页容器
     * @param $wrapper 分页容器
     */
    show($wrapper?: HTMLElement | null): void;
    /**
     * 判断分页容器是否隐藏
     * @param $wrapper 分页容器
     */
    isHide($wrapper?: HTMLElement | null): boolean | undefined;
    /**
     * 销毁分页容器
     */
    destory(): void;
    /**
     * 添加CSS
     * @param $parent 添加到目标元素
     */
    addCSS($parent?: Node): void;
    /**
     * 创建分页元素
     */
    createDataPagingWrapper(): HTMLElement;
    /**
     * 设置 第一页 点击事件
     * @param $page 分页元素
     * @param $pageWrapper 分页按钮的容器元素
     */
    setFirstBtnClickEvent($page: HTMLElement, $pageWrapper: HTMLElement): void;
    /**
     * 设置 上一页 点击事件
     * @param $page 分页元素
     * @param $pageWrapper 分页按钮的容器元素
     */
    setPrevBtnClickEvent($page: HTMLElement, $pageWrapper: HTMLElement): void;
    /**
     * 设置 下一页 点击事件
     * @param $page 分页元素
     * @param $pageWrapper 分页按钮的容器元素
     */
    setNextBtnClickEvent($page: HTMLElement, $pageWrapper: HTMLElement): void;
    /**
     * 设置 最后一页 点击事件
     * @param $page 分页元素
     * @param $pageWrapper 分页按钮的容器元素
     */
    setLastBtnClickEvent($page: HTMLElement, $pageWrapper: HTMLElement): void;
    /**
     * 设置 页 点击事件
     * @param $page 分页元素
     * @param $pageWrapper 分页按钮的容器元素
     */
    setPageBtnClickEvent($page: HTMLElement, $pageWrapper: HTMLElement): void;
    /**
     * 把分页添加到某个父元素下
     * @param $parent
     */
    append($parent: Node): void;
    /**
     * 把分页添加到某个元素之后
     */
    after($el: Element): void;
    /**
     * 动态修改配置，注意，修改后需要.append修改原来的元素
     * @param config 配置
     */
    changeConfig(config: Partial<PagingConfig<T>>): void;
    /**
     * 刷新页面，重新渲染分页元素
     * @param data 新的数据
     * @example
     * 当总页数5页，当前在第3页，把第3页的数据删完，后面2页的数据会自动往前，需要重新计算数据
     * 且重新计算的数据的页数大于当前页（第3页）时，当前页不变，若小于当前页（第3页），则当前页为计算好的最大页
     */
    refresh(data: T[]): void;
}
