import { PopsLayerMode } from "./types/main";
import type { PopsAlertDetails } from "./components/alert/indexType";
import type { PopsConfirmDetails } from "./components/confirm/indexType";
import type { PopsLayerCommonConfig } from "./types/layer";
import type { PopsPromptDetails } from "./components/prompt/indexType";
import type { PopsLoadingDetails } from "./components/loading/indexType";
import type { PopsIframeDetails } from "./components/iframe/indexType";
import type { PopsToolTipDetails } from "./components/tooltip/indexType";
import type { PopsDrawerDetails } from "./components/drawer/indexType";
import type { PopsFolderDetails } from "./components/folder/indexType";
import type { PopsEventDetails } from "./types/event";
import type { PopsPanelDetails } from "./components/panel/indexType";
import type { PopsRightClickMenuDetails } from "./components/rightClickMenu/indexType";
import type { PopsIcon } from "./types/icon";
import type { PopsSearchSuggestionDetails, PopsSearchSuggestionResult } from "./components/searchSuggestion/indexType";
import { type PopsTooltipResult } from "./components/tooltip";
declare class Pops {
    /** 配置 */
    config: {
        /** 版本号 */
        version: string;
        cssText: {
            /** 主CSS */
            index: string;
            /** 九宫格位置CSS */
            ninePalaceGridPosition: string;
            /** 滚动条CSS */
            scrollbar: string;
            /** 按钮CSS */
            button: string;
            /** 通用的CSS */
            common: string;
            /** 动画 */
            anim: string;
            /** pops.alert */
            alertCSS: string;
            /** pops.cponfirm */
            confirmCSS: string;
            /** pops.prompt */
            promptCSS: string;
            /** pops.loading */
            loadingCSS: string;
            /** pops.iframe */
            iframeCSS: string;
            /** pops.tooltip */
            tooltipCSS: string;
            /** pops.drawer */
            drawerCSS: string;
            /** pops.folder */
            folderCSS: string;
            /** pops.folder */
            panelCSS: string;
            /** pops.rightClickMenu */
            rightClickMenu: string;
        };
        /** icon图标的svg代码 */
        iconSVG: { [key in PopsIcon]: string; };
        /** 当前已配置的动画@keyframes名字映射(初始化时生成) */
        animation: {
            [key: string]: CSSKeyframesRule;
        };
        /** 是否初始化 */
        isInit: boolean;
        /** 存储已创建的元素 */
        layer: { [key in PopsLayerMode]: PopsLayerCommonConfig[]; };
        /** 禁止滚动 */
        forbiddenScroll: {
            event(event: Event): boolean;
        };
        /** pops使用的工具类 */
        Utils: {
            isWin(target: any): boolean;
            isDOM(target: any): boolean;
            delete(target: any, propName: any): void;
            assign<T1, T2 extends object, T3 extends boolean>(target: T1, source: T2, isAdd?: T3 | undefined): T3 extends true ? T1 & T2 : T1;
            getRandomGUID(): string;
            parseTextToDOM<R extends HTMLElement>(elementString: string): R;
            contains(target: any): boolean;
            contains(context: any, target?: any): boolean;
            formatTime(text?: string | number | Date, formatType?: string): string;
            formatTime(text?: string | number | Date, formatType?: "yyyy-MM-dd HH:mm:ss" | "yyyy/MM/dd HH:mm:ss" | "yyyy_MM_dd_HH_mm_ss" | "yyyy\u5E74MM\u6708dd\u65E5 HH\u65F6mm\u5206ss\u79D2" | "yyyy\u5E74MM\u6708dd\u65E5 hh:mm:ss" | "yyyy\u5E74MM\u6708dd\u65E5 HH:mm:ss" | "yyyy-MM-dd" | "yyyyMMdd" | "HH:mm:ss"): string;
            formatByteToSize<T extends boolean>(byteSize: number | string, addType?: T | undefined): T extends true ? string : number;
            AnyTouch: () => typeof import("any-touch").default;
        };
        /** pops使用的DOM工具类 */
        DOMUtils: {
            getAnimationEndNameList(): string[];
            getTransitionEndNameList(): string[];
            offset(element: HTMLElement, calcScroll?: boolean): DOMRect;
            width(element: HTMLElement | string | Window | Document | typeof globalThis, isShow?: boolean, parent?: HTMLElement | ShadowRoot): number;
            height(element: HTMLElement | string | Window | Document | typeof globalThis, isShow?: boolean, parent?: HTMLElement | ShadowRoot): number;
            outerWidth(element: HTMLElement | string | Window | Document, isShow?: boolean, parent?: HTMLElement | ShadowRoot): number;
            outerHeight(element: HTMLElement | string | Window, isShow?: boolean, parent?: HTMLElement | ShadowRoot): number;
            addClassName(element: HTMLElement, className: string): void;
            removeClassName(element: HTMLElement, className: string): void;
            containsClassName(element: HTMLElement, className: string): boolean;
            css(element: HTMLElement | string, property: keyof CSSStyleDeclaration): string;
            css(element: HTMLElement | string, property: string): string;
            css(element: HTMLElement | string, property: keyof CSSStyleDeclaration & string, value: string | number): string;
            css(element: HTMLElement | string, property: { [P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P]; } | {
                [key: string]: string | number;
            }): string;
            createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, property?: ({ [P in keyof HTMLElementTagNameMap[K]]?: HTMLElementTagNameMap[K][P] extends string | boolean | number ? HTMLElementTagNameMap[K][P] : never; } & {
                [key: string]: any;
            }) | string, attributes?: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsCreateElementAttributesMap): HTMLElementTagNameMap[K];
            getTextBoundingRect(input: HTMLInputElement | HTMLTextAreaElement, selectionStart: number | string, selectionEnd: number | string, debug: boolean): DOMRect;
            cssHide(ele: Element | null, isImportant?: boolean): void;
            cssShow(ele: Element | null): void;
            parseHTML<T1 extends boolean, T2 extends boolean>(html: string, useParser?: T1 | undefined, isComplete?: T2 | undefined): import("./types/PopsDOMUtilsEventType").ParseHTMLReturnType<T1, T2>;
            append(element: Element | Node | ShadowRoot | HTMLElement | string, content: HTMLElement | string | (HTMLElement | string | Element)[] | NodeList): void;
            appendHead($ele: HTMLElement): void;
            appendBody($ele: HTMLElement): void;
            isShow(element: HTMLElement): boolean;
            showElement($ele: HTMLElement, ownParent?: Node): {
                cloneNode: HTMLElement;
                recovery(): void;
            };
            getStyleValue(element: HTMLElement | CSSStyleDeclaration, styleName: string): number;
            before(element: HTMLElement | Element | string, content: HTMLElement | string): void;
            after(element: HTMLElement | Element | string, content: HTMLElement | string): void;
            on(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string | string[], callback: (event: Event) => void, option?: boolean | AddEventListenerOptions): void;
            on<T extends import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: T | T[], callback: (event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event[T]) => void, option?: boolean | AddEventListenerOptions): void;
            on<T extends Event>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string, callback: (event: T) => void, option?: boolean | AddEventListenerOptions): void;
            on<T extends import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: T | T[], selector: string | undefined | null, callback: (event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event[T]) => void, option?: boolean | AddEventListenerOptions): void;
            on<T extends Event>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string | string[], selector: string | undefined | null, callback: (event: T) => void, option?: boolean | AddEventListenerOptions): void;
            on<T extends Event>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string, selector: string | undefined | null, callback: (event: T) => void, option?: boolean | AddEventListenerOptions): void;
            off(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string | string[], callback?: (event: Event) => void, option?: boolean | AddEventListenerOptions, filter?: (value: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
            off<T extends import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: T | T[], callback?: ((event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event[T]) => void) | undefined, option?: boolean | AddEventListenerOptions, filter?: (value: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
            off<T extends Event>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string, callback?: ((event: T) => void) | undefined, option?: boolean | AddEventListenerOptions, filter?: (value: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
            off<T extends import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: T | T[], selector?: string | undefined, callback?: ((event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event[T]) => void) | undefined, option?: boolean | AddEventListenerOptions, filter?: (value: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
            off<T extends Event>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string | string[], selector?: string | undefined, callback?: ((event: T) => void) | undefined, option?: boolean | AddEventListenerOptions, filter?: (value: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
            offAll(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType?: string): void;
            offAll(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType?: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType | import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType[]): void;
            ready<T extends Function>(callback: T): void;
            trigger(element: HTMLElement | string | NodeList | any[] | Window | Document, eventType: string | string[], details?: object, useDispatchToTriggerEvent?: boolean): void;
            trigger(element: HTMLElement | string | NodeList | any[] | Window | Document, eventType: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType | import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType[], details?: object, useDispatchToTriggerEvent?: boolean): void;
            click(element: HTMLElement | string | Window, handler?: (event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event["click"]) => void, details?: any, useDispatchToTriggerEvent?: boolean): void;
            blur(element: HTMLElement | string | Window, handler?: (event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event["blur"]) => void, details?: object, useDispatchToTriggerEvent?: boolean): void;
            focus(element: HTMLElement | string | Window, handler?: (event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event["focus"]) => void, details?: object, useDispatchToTriggerEvent?: boolean): void;
            hover(element: HTMLElement | string, handler: (event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event["hover"]) => void, option?: boolean | AddEventListenerOptions): void;
            keyup(target: HTMLElement | string | Window | typeof globalThis, handler: (event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event["keyup"]) => void, option?: boolean | AddEventListenerOptions): void;
            keydown(target: HTMLElement | Window | typeof globalThis | string, handler: (event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event["keydown"]) => void, option?: boolean | AddEventListenerOptions): void;
            keypress(target: HTMLElement | Window | typeof globalThis | string, handler: (event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event["keypress"]) => void, option?: boolean | AddEventListenerOptions): void;
            preventEvent(event: Event): boolean;
            preventEvent(element: HTMLElement, eventNameList?: string | string[], capture?: boolean): boolean;
        };
        /** pops创建的实例使用的工具类 */
        InstanceUtils: {
            getMaxZIndexNodeInfo(deviation?: number, target?: Element | ShadowRoot | Document, ignoreCallBack?: ($ele: Element | HTMLElement | ShadowRoot) => boolean | void): {
                node: Element;
                zIndex: number;
            };
            getPopsMaxZIndex(deviation?: number): {
                zIndex: number;
                animElement: HTMLDivElement | null;
            };
            getMaxZIndex(deviation?: number): number;
            getKeyFrames(sheet: CSSStyleSheet): {};
            removeInstance(moreLayerConfigList: PopsLayerCommonConfig[][], guid: string, isAll?: boolean): PopsLayerCommonConfig[][];
            hide(popsType: PopsLayerMode, layerConfigList: PopsLayerCommonConfig[], guid: string, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, animElement: HTMLElement, maskElement: HTMLElement): void;
            show(popsType: PopsLayerMode, layerConfigList: PopsLayerCommonConfig[], guid: string, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, animElement: HTMLElement, maskElement: HTMLElement): void;
            close(popsType: string, layerConfigList: PopsLayerCommonConfig[], guid: string, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, animElement: HTMLElement): void;
            drag(moveElement: HTMLElement, options: {
                dragElement: HTMLElement;
                limit: boolean;
                triggerClick?: boolean;
                extraDistance: number;
                container?: Window | typeof globalThis | HTMLElement;
                moveCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
                endCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
                preventEvent?: (event: TouchEvent | PointerEvent) => boolean;
            }): void;
            sortElementListByProperty<T extends unknown, R>(getBeforeValueFun: (value: T) => R, getAfterValueFun: (value: T) => R, sortByDesc?: boolean): (after_obj: T, before_obj: T) => 1 | 0 | -1;
        };
        /** pops处理float类型使用的工具类 */
        MathFloatUtils: {
            isFloat(num: number): boolean;
            add(number1: number, number2: number): number;
            sub(number1: number, number2: number): string;
            division(number1: number, number2: number): number;
        };
        /** pops.panel中用于处理各个类型的工具 */
        panelHandleContentUtils: () => {
            asideULElement: HTMLUListElement;
            sectionContainerHeaderULElement: HTMLUListElement;
            sectionContainerULElement: HTMLUListElement;
            $el: {
                $content: HTMLDivElement;
                $contentAside: HTMLDivElement;
                $contentSectionContainer: HTMLDivElement;
            };
            init(details: {
                config: Required<PopsPanelDetails>;
                $el: {
                    $content: HTMLDivElement;
                    $contentAside: HTMLDivElement;
                    $contentSectionContainer: HTMLDivElement;
                };
            }): void;
            clearContainer(): void;
            clearAsideItemIsVisited(): void;
            setAsideItemIsVisited(element: HTMLElement): void;
            setElementAttributes(element: HTMLElement, attributes?: any): void;
            setElementProps(element: HTMLElement, props?: any): void;
            setElementClassName(element: HTMLElement, className?: string | string[] | (() => string | string[])): void;
            createAsideItem(asideConfig: import("./components/panel/indexType").PopsPanelContentConfig): HTMLLIElement;
            createSectionContainerItem_switch(formConfig: import("./components/panel/switchType").PopsPanelSwitchDetails): HTMLLIElement;
            createSectionContainerItem_slider(formConfig: import("./components/panel/sliderType").PopsPanelSliderDetails): HTMLLIElement;
            createSectionContainerItem_slider_new(formConfig: import("./components/panel/sliderType").PopsPanelSliderDetails): HTMLLIElement;
            createSectionContainerItem_input(formConfig: import("./components/panel/inputType").PopsPanelInputDetails): HTMLLIElement;
            createSectionContainerItem_textarea(formConfig: import("./components/panel/textareaType").PopsPanelTextAreaDetails): HTMLLIElement;
            createSectionContainerItem_select(formConfig: import("./components/panel/selectType").PopsPanelSelectDetails<any>): HTMLLIElement;
            createSectionContainerItem_select_multiple_new(formConfig: import("./components/panel/selectMultipleType").PopsPanelSelectMultipleDetails<any>): HTMLLIElement;
            createSectionContainerItem_button(formConfig: import("./components/panel/buttonType").PopsPanelButtonDetails): HTMLLIElement;
            createSectionContainerItem_deepMenu(formConfig: import("./components/panel/deepMenuType").PopsPanelDeepMenuDetails): HTMLLIElement;
            createSectionContainerItem_own(formConfig: import("./components/panel/ownType").PopsPanelOwnDetails): HTMLLIElement;
            createSectionContainerItem(formConfig: import("./components/panel/indexType").PopsPanelFormsTotalDetails): HTMLLIElement | undefined;
            createSectionContainerItem_forms(formConfig: import("./components/panel/indexType").PopsPanelContentConfig | import("./components/panel/formsType").PopsPanelFormsDetails): void;
            uListContainerAddItem(formConfig: import("./components/panel/indexType").PopsPanelFormsTotalDetails, containerOptions: Omit<import("./components/panel/commonType").PopsPanelRightAsideContainerOptions, "target">): void;
            setAsideItemClickEvent(asideLiElement: HTMLElement, asideConfig: import("./components/panel/indexType").PopsPanelContentConfig): void;
        };
    };
    init(): void;
    /**
     * 释放原有的pops控制权
     * @example
     * let pops = window.pops.noConflict()
     */
    noConflict(): Pops;
    /**
     * 通过navigator.userAgent判断是否是手机访问
     * @param userAgent
     */
    isPhone(userAgent?: string): boolean;
    /**
     * 为所有弹窗设置全局属性
     */
    GlobalConfig: {
        config: {
            style?: string | (() => string) | null;
            zIndex?: (number | (() => number) | null) | (string | (() => string) | null);
        } & Partial<import("./types/components").PopsCommonConfig>;
        setGlobalConfig(config: {
            style?: string | (() => string) | null;
            zIndex?: (number | (() => number) | null) | (string | (() => string) | null);
        } & Partial<import("./types/components").PopsCommonConfig>): void;
        getGlobalConfig(): {
            style?: string | undefined;
            zIndex?: string | number | undefined;
            class?: string | undefined;
            only?: boolean | undefined;
            width?: string | undefined;
            height?: string | undefined;
            position?: import("./types/position").PopsPosition | undefined;
            animation?: import("./types/animation").PopsAnimation | undefined;
            mask?: import("./types/mask").PopsMaskDetails | undefined;
            forbiddenScroll?: boolean | undefined;
            beforeAppendToPageCallBack?: void;
        };
    };
    /**
     * 普通信息框
     * @param details 配置
     */
    alert: (details: PopsAlertDetails) => PopsEventDetails;
    /**
     * 询问框
     * @param details 配置
     */
    confirm: (details: PopsConfirmDetails) => PopsEventDetails;
    /**
     * 输入框
     * @param details 配置
     */
    prompt: (details: PopsPromptDetails) => PopsEventDetails;
    /**
     * 加载层
     * @param details 配置
     */
    loading: (details: PopsLoadingDetails) => Omit<PopsEventDetails, "$shadowContainer" | "$shadowRoot">;
    /**
     * iframe层
     * @param details 配置
     */
    iframe: (details: PopsIframeDetails) => PopsEventDetails & {
        iframeElement: HTMLIFrameElement;
    };
    /**
     * 提示框
     * @param details 配置
     */
    tooltip: <T extends PopsToolTipDetails = PopsToolTipDetails>(details: T) => PopsTooltipResult<T>;
    /**
     * 抽屉
     * @param details 配置
     */
    drawer: (details: PopsDrawerDetails) => PopsEventDetails;
    /**
     * 文件夹
     * @param details 配置
     */
    folder: (details: PopsFolderDetails) => PopsEventDetails;
    /**
     * 配置面板
     * @param details 配置
     */
    panel: (details: PopsPanelDetails) => PopsEventDetails;
    /**
     * 右键菜单
     * @param details 配置
     */
    rightClickMenu: (details: PopsRightClickMenuDetails) => PopsEventDetails;
    /**
     * 搜索建议
     * @param details 配置
     */
    searchSuggestion: <T = any>(details: PopsSearchSuggestionDetails<T>) => PopsSearchSuggestionResult<T>;
}
declare const pops: Pops;
export { pops };
