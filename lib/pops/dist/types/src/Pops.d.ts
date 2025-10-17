import type { PopsAlertDetails } from "./components/alert/types";
import type { PopsConfirmDetails } from "./components/confirm/types";
import type { PopsDrawerDetails } from "./components/drawer/types";
import type { PopsFolderDetails } from "./components/folder/types";
import type { PopsIframeDetails } from "./components/iframe/types";
import type { PopsLoadingDetails } from "./components/loading/types";
import type { PopsPanelDetails } from "./components/panel/types";
import type { PopsPromptDetails } from "./components/prompt/types/index";
import type { PopsRightClickMenuDetails } from "./components/rightClickMenu/types";
import type { PopsSearchSuggestionDetails } from "./components/searchSuggestion/types/index";
import type { PopsToolTipDetails } from "./components/tooltip/types/index";
declare class Pops {
    /** 配置 */
    config: {
        /** 版本号 */
        version: string;
        cssText: {
            index: string;
            ninePalaceGridPosition: string;
            scrollbar: string;
            button: string;
            common: string;
            anim: string;
            alertCSS: string;
            confirmCSS: string;
            promptCSS: string;
            loadingCSS: string;
            iframeCSS: string;
            tooltipCSS: string;
            drawerCSS: string;
            folderCSS: string;
            panelCSS: string;
            rightClickMenu: string;
        };
        /** icon图标的svg代码 */
        iconSVG: {
            loading: string;
            min: string;
            max: string;
            mise: string;
            close: string;
            edit: string;
            share: string;
            delete: string;
            search: string;
            upload: string;
            next: string;
            prev: string;
            eleme: string;
            elemePlus: string;
            chromeFilled: string;
            cpu: string;
            videoPlay: string;
            videoPause: string;
            headset: string;
            monitor: string;
            documentCopy: string;
            picture: string;
            circleClose: string;
            view: string;
            hide: string;
            keyboard: string;
            arrowRight: string;
            arrowLeft: string;
        };
        /** 当前已配置的动画@keyframes名字映射(初始化时生成) */
        animation: {
            [key: string]: CSSKeyframesRule;
        };
        /** 存储已创建的元素 */
        instData: {
            iframe: import("./types/inst").PopsInstCommonConfig[];
            loading: import("./types/inst").PopsInstCommonConfig[];
            folder: import("./types/inst").PopsInstCommonConfig[];
            alert: import("./types/inst").PopsInstCommonConfig[];
            confirm: import("./types/inst").PopsInstCommonConfig[];
            prompt: import("./types/inst").PopsInstCommonConfig[];
            tooltip: import("./types/inst").PopsInstCommonConfig[];
            drawer: import("./types/inst").PopsInstCommonConfig[];
            panel: import("./types/inst").PopsInstCommonConfig[];
            rightClickMenu: import("./types/inst").PopsInstCommonConfig[];
        };
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
            contains(target: any): boolean;
            contains(context: any, target?: any): boolean;
            formatTime(text?: string | number | Date, formatType?: string): string;
            formatTime(text?: string | number | Date, formatType?: "yyyy-MM-dd HH:mm:ss" | "yyyy/MM/dd HH:mm:ss" | "yyyy_MM_dd_HH_mm_ss" | "yyyy\u5E74MM\u6708dd\u65E5 HH\u65F6mm\u5206ss\u79D2" | "yyyy\u5E74MM\u6708dd\u65E5 hh:mm:ss" | "yyyy\u5E74MM\u6708dd\u65E5 HH:mm:ss" | "yyyy-MM-dd" | "yyyyMMdd" | "HH:mm:ss"): string;
            formatByteToSize<T extends boolean>(byteSize: number | string, addType?: T | undefined): T extends true ? string : number;
            AnyTouch: () => typeof import("any-touch").default;
            isPhone(userAgent?: string): boolean;
            setTimeout(callback: (...args: any[]) => any, timeout?: number): number;
            clearTimeout(timeId: number | undefined): void;
            setInterval(callback: (...args: any[]) => any, timeout?: number): number;
            clearInterval(timeId: number | undefined): void;
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
            addClassName($el: Element | undefined | null | undefined, className: string | string[] | (() => string | string[]) | undefined | null): void;
            removeClassName($el: Element | undefined | null, className: string): void;
            containsClassName($el: HTMLElement | undefined | null, className: string): boolean;
            css(element: HTMLElement | string, property: keyof CSSStyleDeclaration): string;
            css(element: HTMLElement | string, property: string): string;
            css(element: HTMLElement | string, property: keyof CSSStyleDeclaration & string, value: string | number): string;
            css(element: HTMLElement | string, property: { [P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P]; } | {
                [key: string]: string | number;
            }): string;
            createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, property?: ({ [P in keyof HTMLElementTagNameMap[K]]?: HTMLElementTagNameMap[K][P] extends string | boolean | number ? HTMLElementTagNameMap[K][P] : never; } & {
                [key: string]: any;
            }) | string, attributes?: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsCreateElementAttributesMap): HTMLElementTagNameMap[K];
            parseTextToDOM<R extends HTMLElement>(elementString: string): R;
            getTextBoundingRect(input: HTMLInputElement | HTMLTextAreaElement, selectionStart: number | string, selectionEnd: number | string, debug: boolean): DOMRect;
            cssHide(ele: Element | null, isImportant?: boolean): void;
            cssShow(ele: Element | null): void;
            toElement<T1 extends boolean, T2 extends boolean>(html: string, useParser?: T1 | undefined, isComplete?: T2 | undefined): import("./types/PopsDOMUtilsEventType").ParseHTMLReturnType<T1, T2>;
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
            getKeyFrames(sheet: CSSStyleSheet): {};
            calcColor(): {
                hexToRgb: (str: string) => any;
                rgbToHex: (r: any, g: any, b: any) => string;
                getDarkColor: (color: string, level: number) => string;
                getLightColor: (color: string, level: number) => string;
            };
            getTransform(element: HTMLElement): {
                transformLeft: number;
                transformTop: number;
            };
            onInput($el: HTMLInputElement | HTMLTextAreaElement, callback: (evt: InputEvent) => void | Promise<void>, option?: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOption | boolean): {
                off: () => void;
            };
            on<T extends import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: T | T[], callback: (this: HTMLElement, event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event[T]) => void, option?: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOption | boolean): void;
            on<T extends Event>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string | string[], callback: (this: HTMLElement, event: T) => void, option?: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOption | boolean): void;
            on<T extends import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: T | T[], selector: string | string[] | undefined | null, callback: (this: HTMLElement, event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event[T], selectorTarget: HTMLElement) => void, option?: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOption | boolean): void;
            on<T extends Event>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string | string[], selector: string | string[] | undefined | null, callback: (this: HTMLElement, event: T, selectorTarget: HTMLElement) => void, option?: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOption | boolean): void;
            off<T extends import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: T | T[], callback?: ((this: HTMLElement, event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event[T]) => void) | undefined, option?: EventListenerOptions | boolean, filter?: (value: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
            off<T extends Event>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string | string[], callback?: ((this: HTMLElement, event: T) => void) | undefined, option?: EventListenerOptions | boolean, filter?: (value: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
            off<T extends import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: T | T[], selector?: string | string[] | undefined | null, callback?: ((this: HTMLElement, event: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_Event[T], selectorTarget: HTMLElement) => void) | undefined, option?: EventListenerOptions | boolean, filter?: (value: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
            off<T extends Event>(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType: string | string[], selector?: string | string[] | undefined | null, callback?: ((this: HTMLElement, event: T, selectorTarget: HTMLElement) => void) | undefined, option?: EventListenerOptions | boolean, filter?: (value: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
            offAll(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType?: string): void;
            offAll(element: import("./types/PopsDOMUtilsEventType").PopsDOMUtilsElementEventType, eventType?: import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType | import("./types/PopsDOMUtilsEventType").PopsDOMUtils_EventType[]): void;
            ready<T extends (...args: any[]) => any>(callback: T): void;
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
            selector<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | undefined;
            selector<E extends Element = Element>(selector: string): E | undefined;
            selectorAll<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K][];
            selectorAll<E extends Element = Element>(selector: string): E[];
            matches($el: HTMLElement | Element | null | undefined, selector: string): boolean;
            closest<K extends keyof HTMLElementTagNameMap>($el: HTMLElement | Element, selector: string): HTMLElementTagNameMap[K] | null;
            closest<E extends Element = Element>($el: HTMLElement | Element, selector: string): E | null;
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
                isOverMaxZIndex: boolean;
            };
            getMaxZIndex(deviation?: number): number;
            removeInstance(instConfigList: import("./types/inst").PopsInstCommonConfig[][], guid: string, isAll?: boolean): import("./types/inst").PopsInstCommonConfig[][];
            hide(popsType: import("./types/main").PopsInstStoreType, instConfigList: import("./types/inst").PopsInstCommonConfig[], guid: string, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, animElement: HTMLElement, maskElement: HTMLElement): Promise<void>;
            show(popsType: import("./types/main").PopsInstStoreType, instConfigList: import("./types/inst").PopsInstCommonConfig[], guid: string, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, animElement: HTMLElement, maskElement?: HTMLElement): Promise<void>;
            close(popsType: string, instConfigList: import("./types/inst").PopsInstCommonConfig[], guid: string, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, animElement: HTMLElement): Promise<void>;
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
            sortElementListByProperty<T, R>(getBeforeValueFun: (value: T) => R, getAfterValueFun: (value: T) => R, sortByDesc?: boolean): (after_obj: T, before_obj: T) => 1 | 0 | -1;
        };
        /** pops处理float类型使用的工具类 */
        MathFloatUtils: {
            isFloat(num: number): boolean;
            add(number1: number, number2: number): number;
            sub(number1: number, number2: number): string;
            division(number1: number, number2: number): number;
        };
        /** pops.panel中用于处理各个类型的工具 */
        PanelHandlerComponents: () => {
            asideULElement: HTMLUListElement;
            asideBottomULElement: HTMLUListElement;
            sectionContainerHeaderULElement: HTMLUListElement;
            sectionContainerULElement: HTMLUListElement;
            $el: {
                $pops: HTMLElement;
                $content: HTMLElement;
                $panelRightSectionWrapper: HTMLElement;
                $panelLeftAside: HTMLElement;
                $panelContentSectionContainer: HTMLElement;
                $panelBottomWrapper: HTMLElement;
                $panelBottomContainer: HTMLElement;
                $panelBottomLeftContainer: HTMLElement;
                $panelBottomRightContainer: HTMLElement;
            };
            $config: Required<PopsPanelDetails>;
            init(details: {
                config: Required<PopsPanelDetails>;
                $el: {
                    $pops: HTMLElement;
                    $content: HTMLElement;
                    $panelRightSectionWrapper: HTMLElement;
                    $panelLeftAside: HTMLElement;
                    $panelContentSectionContainer: HTMLElement;
                    $panelBottomWrapper: HTMLElement;
                    $panelBottomContainer: HTMLElement;
                    $panelBottomLeftContainer: HTMLElement;
                    $panelBottomRightContainer: HTMLElement;
                };
            }): void;
            clearContainer(): void;
            clearDeepMenuContainer(): void;
            clearAsideItemIsVisited(): void;
            setAsideItemIsVisited($el: HTMLElement): void;
            setElementAttributes($el: HTMLElement, attributes?: any): void;
            setElementProps($el: HTMLElement, props?: any): void;
            setElementClassName($el: HTMLElement, className?: import("./components/panel/types/components-common").PopsPanelCommonDetails<any>["className"]): void;
            createBottomItem(bottomItemConfig: import("./components/panel/types").PopsPanelBottomContentConfig): HTMLLIElement;
            setBottomItemClickEvent($bottomItem: HTMLElement, bottomItemConfig: import("./components/panel/types").PopsPanelBottomContentConfig): void;
            createAsideItem(asideConfig: import("./components/panel/types").PopsPanelContentConfig): HTMLLIElement;
            createSectionContainerItem_switch(formConfig: import("./components/panel/types/components-switch").PopsPanelSwitchDetails): HTMLLIElement;
            createSectionContainerItem_slider(formConfig: import("./components/panel/types/components-slider").PopsPanelSliderDetails): HTMLLIElement;
            createSectionContainerItem_slider_new(formConfig: import("./components/panel/types/components-slider").PopsPanelSliderDetails): HTMLLIElement;
            createSectionContainerItem_input(formConfig: import("./components/panel/types/components-input").PopsPanelInputDetails): HTMLLIElement;
            createSectionContainerItem_textarea(formConfig: import("./components/panel/types/components-textarea").PopsPanelTextAreaDetails): HTMLLIElement;
            createSectionContainerItem_select(formConfig: import("./components/panel/types/components-select").PopsPanelSelectDetails<any>): HTMLLIElement;
            createSectionContainerItem_select_multiple_new(formConfig: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDetails<any>): HTMLLIElement;
            createSectionContainerItem_button(formConfig: import("./components/panel/types/components-button").PopsPanelButtonDetails): HTMLLIElement;
            createSectionContainerItem_deepMenu(formConfig: import("./components/panel/types/components-deepMenu").PopsPanelDeepMenuDetails): HTMLLIElement;
            createSectionContainerItem_own(formConfig: import("./components/panel/types/components-own").PopsPanelOwnDetails): HTMLLIElement;
            createSectionContainerItem(formConfig: import("./components/panel/types").PopsPanelFormsTotalDetails): HTMLLIElement | undefined;
            createSectionContainerItem_forms(formConfig: import("./components/panel/types").PopsPanelContentConfig | import("./components/panel/types/components-forms").PopsPanelFormsDetails): void;
            triggerRenderRightContainer($container: HTMLElement): void;
            uListContainerAddItem(formConfig: import("./components/panel/types").PopsPanelFormsTotalDetails, containerOptions: Omit<import("./components/panel/types/components-common").PopsPanelRightAsideContainerOptions, "target">): void;
            setAsideItemClickEvent($asideItem: HTMLElement, asideConfig: import("./components/panel/types").PopsPanelContentConfig): void;
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
        } & Partial<import("./types/components").PopsCommonConfig> & Partial<import("./types/components").PopsDragConfig>;
        setGlobalConfig(config: {
            style?: string | (() => string) | null;
            zIndex?: (number | (() => number) | null) | (string | (() => string) | null);
        } & Partial<import("./types/components").PopsCommonConfig> & Partial<import("./types/components").PopsDragConfig>): void;
        getGlobalConfig(): {
            style?: string | undefined;
            zIndex?: string | number | undefined;
            useShadowRoot?: boolean | undefined;
            class?: string | undefined;
            only?: boolean | undefined;
            width?: string | undefined;
            height?: string | undefined;
            position?: import("./types/position").PopsPosition | undefined;
            animation?: import("./types/animation").PopsAnimation | undefined;
            mask?: import("./types/mask").PopsMaskDetails | undefined;
            forbiddenScroll?: boolean | undefined;
            beforeAppendToPageCallBack?: void;
            drag?: boolean | undefined;
            dragLimit?: boolean | undefined;
            dragExtraDistance?: number | undefined;
            dragMoveCallBack?: void;
            dragEndCallBack?: void;
        };
    };
    /**
     * 普通信息框
     * @param details 配置
     */
    alert: (details: PopsAlertDetails) => Omit<import("./types/event").PopsEventDetails, "function" | "type">;
    /**
     * 询问框
     * @param details 配置
     */
    confirm: (details: PopsConfirmDetails) => Omit<import("./types/event").PopsEventDetails, "function" | "type">;
    /**
     * 输入框
     * @param details 配置
     */
    prompt: (details: PopsPromptDetails) => Omit<import("./types/event").PopsEventDetails, "function" | "type">;
    /**
     * 加载层
     * @param details 配置
     */
    loading: (details: PopsLoadingDetails) => Omit<Omit<import("./types/event").PopsEventDetails, "$shadowContainer" | "$shadowRoot">, "function" | "type">;
    /**
     * iframe层
     * @param details 配置
     */
    iframe: (details: PopsIframeDetails) => Omit<import("./types/event").PopsEventDetails & {
        iframeElement: HTMLIFrameElement;
    }, "function" | "type">;
    /**
     * 提示框
     * @param details 配置
     */
    tooltip: (details: PopsToolTipDetails) => {
        guid: string;
        config: {
            target: HTMLElement;
            content: string | (() => string);
            isDiffContent: boolean;
            position: import("./components/tooltip/types/index").PopsTooltipPosition;
            className: string | string[] | (() => string | string[]);
            isFixed: boolean;
            alwaysShow: boolean;
            delayCloseTime: number;
            triggerShowEventName: string;
            triggerCloseEventName: string;
            eventOption: {
                once: boolean;
                passive: boolean;
                signal: {
                    readonly aborted: boolean;
                    onabort: ((this: AbortSignal, ev: Event) => any) | null;
                    readonly reason: any;
                    throwIfAborted: () => void;
                    addEventListener: {
                        <K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
                        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
                    };
                    removeEventListener: {
                        <K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
                        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
                    };
                    dispatchEvent: (event: Event) => boolean;
                };
                capture: boolean;
            };
            showBeforeCallBack: ($toolTip: HTMLElement) => false | void;
            showAfterCallBack: ($toolTip: HTMLElement) => void;
            closeBeforeCallBack: ($toolTip: HTMLElement) => false | void;
            closeAfterCallBack: ($toolTip: HTMLElement) => void;
            showArrow: boolean;
            arrowDistance: number;
            otherDistance: number;
            useShadowRoot: boolean;
            only: boolean;
            zIndex: number | (() => number);
            style: string | null;
            beforeAppendToPageCallBack: ($shadowRoot: ShadowRoot | HTMLElement, $shadowContainer: HTMLDivElement) => void;
        };
        $shadowContainer: HTMLDivElement;
        $shadowRoot: HTMLDivElement | ShadowRoot;
        toolTip: import("./components/tooltip").ToolTip;
    };
    /**
     * 抽屉
     * @param details 配置
     */
    drawer: (details: PopsDrawerDetails) => Omit<import("./types/event").PopsEventDetails, "function" | "type">;
    /**
     * 文件夹
     * @param details 配置
     */
    folder: (details: PopsFolderDetails) => Omit<import("./types/event").PopsEventDetails, "function" | "type">;
    /**
     * 配置面板
     * @param details 配置
     */
    panel: (details: PopsPanelDetails) => {
        addEventListener: <K extends keyof import("./components/panel/types").PopsPanelEventType>(event: K, listener: (evt: CustomEvent<import("./components/panel/types").PopsPanelEventType[K]>) => void, options?: boolean | EventListenerOptions) => void;
        removeEventListener: <K extends keyof import("./components/panel/types").PopsPanelEventType>(event: K, listener: (evt: CustomEvent<import("./components/panel/types").PopsPanelEventType[K]>) => void, options?: boolean | EventListenerOptions) => void;
        close: () => Promise<void>;
        hide: () => Promise<void>;
        show: () => Promise<void>;
        guid: string;
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot | HTMLElement;
        element: HTMLDivElement;
        animElement: HTMLDivElement;
        popsElement: HTMLDivElement;
        maskElement?: HTMLDivElement | undefined;
        mode: import("./types/main").PopsType;
    };
    /**
     * 右键菜单
     * @param details 配置
     */
    rightClickMenu: (details: PopsRightClickMenuDetails) => {
        guid: string;
        config: DeepRequired<PopsRightClickMenuDetails>;
        addWindowCheckClickListener: () => void;
        removeWindowCheckClickListener: () => void;
        addContextMenuEvent: (target: PopsRightClickMenuDetails["target"], selector?: string) => void;
        removeContextMenuEvent: (target: HTMLElement | typeof globalThis | Window, selector?: string) => void;
        removeInitEventListener: {
            contextMenu(): void;
            windowClick(): void;
        };
        PopsContextMenu: {
            rootElement: HTMLElement;
            windowCheckClickEvent(event: MouseEvent | PointerEvent): void;
            shadowRootCheckClickEvent(event: MouseEvent | PointerEvent): void;
            addWindowCheckClickListener(): void;
            removeWindowCheckClickListener(): void;
            contextMenuEvent(event: PointerEvent, selectorTarget: NonNullable<PopsRightClickMenuDetails["target"]>): void;
            addContextMenuEvent(target: PopsRightClickMenuDetails["target"], selector?: string): void;
            removeContextMenuEvent(target: HTMLElement | typeof globalThis | Window, selector?: string): void;
            animationCloseMenu($menu: HTMLElement): void;
            closeAllMenu(rootElement: HTMLElement): void;
            createMenuContainerElement(isChildren: boolean): HTMLDivElement;
            getMenuZIndex(): number;
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
            showMenu(menuEvent: PointerEvent, _config_: import("./components/rightClickMenu/types").PopsRightClickMenuDataDetails[], menuListenerRootNode: NonNullable<PopsRightClickMenuDetails["target"]>): HTMLDivElement;
            showClildMenu(menuEvent: PointerEvent, posInfo: {
                clientX: number;
                clientY: number;
            }, _config_: import("./components/rightClickMenu/types").PopsRightClickMenuDataDetails[], rootElement: HTMLDivElement, targetLiElement: HTMLLIElement, menuListenerRootNode: NonNullable<PopsRightClickMenuDetails["target"]>): HTMLDivElement;
            handlerShowMenuCSS($menu: HTMLElement, posInfo: {
                clientX: number;
                clientY: number;
            }, parentInfo?: {
                $menu: HTMLElement;
                $parentItem: HTMLElement;
            }): void;
            addMenuLiELement(menuEvent: PointerEvent, rootElement: HTMLDivElement, menuElement: HTMLDivElement, _config_: import("./components/rightClickMenu/types").PopsRightClickMenuDataDetails[], menuListenerRootNode: NonNullable<PopsRightClickMenuDetails["target"]>): void;
        };
    };
    /**
     * 搜索建议
     *
     * 注意：调用后需要主动调用.init()和.setAllEvent()进行初始化
     * @param details 配置
     * @example
     * let $input = document.querySelector("#input");
     * let searchSuggestion = pops.searchSuggestion({
     *     target: $input,
     *     inputTarget: $input,
     *     getItemHTML: function (item) {
     *         return item.value;
     *     }
     * });
     * searchSuggestion.init();
     * searchSuggestion.setAllEvent();
     */
    searchSuggestion: <T = any>(details: PopsSearchSuggestionDetails<T>) => {
        selfDocument: Document | ShadowRoot | (Document | ShadowRoot)[];
        $el: {
            root: HTMLElement;
            $hintULContainer: HTMLUListElement;
            $dynamicCSS: HTMLStyleElement;
        };
        $evt: {
            offInputChangeEvtHandler: ((...args: any[]) => any)[];
        };
        $data: {
            isEmpty: boolean;
        };
        init(parentElement?: HTMLElement): void;
        initEl(): void;
        getData(): import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>[];
        setData(data: import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>[]): void;
        createSearchSelectElement(): HTMLDivElement;
        getDynamicCSS(): string;
        getItemDataValue(data: import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>): import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>;
        createSearchItemLiElement(dataItem: import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>, dateItemIndex: number): HTMLLIElement;
        setSearchItemClickEvent($searchItem: HTMLLIElement): void;
        setSearchItemSelectEvent(liElement: HTMLLIElement): void;
        setInputChangeEvent(option?: AddEventListenerOptions): void;
        removeInputChangeEvent(option?: AddEventListenerOptions): void;
        showEvent(): void;
        setShowEvent(option?: AddEventListenerOptions): void;
        removeShowEvent(option?: AddEventListenerOptions): void;
        hideEvent(event: PointerEvent | MouseEvent): void;
        setHideEvent(option?: AddEventListenerOptions): void;
        removeHideEvent(option?: AddEventListenerOptions): void;
        setAllEvent(option?: AddEventListenerOptions): void;
        removeAllEvent(option?: AddEventListenerOptions): void;
        createItemDeleteIcon(size?: number, fill?: string): HTMLElement;
        setPromptsInSearch(): void;
        removePromptsInSearch(): void;
        changeHintULElementPosition(target?: HTMLElement, checkPositonAgain?: boolean): void;
        changeHintULElementWidth(target?: HTMLElement): void;
        updateDynamicCSS(): void;
        updateStyleSheet(): void;
        addItem($item: HTMLElement | DocumentFragment): void;
        update(updateData?: import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>[]): void;
        clear(onlyClearView?: boolean): void;
        hide(useAnimationToHide?: boolean): void;
        show(): void;
    };
}
declare const pops: Pops;
export { pops };
