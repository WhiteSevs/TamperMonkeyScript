import type { PopsAlertConfig } from "./components/alert/types";
import type { PopsConfirmConfig } from "./components/confirm/types";
import type { PopsDrawerConfig } from "./components/drawer/types";
import type { PopsFolderConfig } from "./components/folder/types";
import type { PopsIframeConfig } from "./components/iframe/types";
import type { PopsLoadingConfig } from "./components/loading/types";
import type { PopsPanelConfig } from "./components/panel/types";
import type { PopsPromptConfig } from "./components/prompt/types/index";
import type { PopsRightClickMenuConfig } from "./components/rightClickMenu/types";
import type { PopsSearchSuggestionConfig } from "./components/searchSuggestion/types/index";
import { PopsTooltip } from "./components/tooltip";
import type { PopsToolTipConfig } from "./components/tooltip/types/index";
import { popsUtils } from "./utils/PopsUtils";
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
            panelComponents_Select: string;
        };
        /** icon图标的svg代码 */
        iconSVG: {
            loading: string;
            min: string;
            max: string;
            search: string;
            mise: string;
            close: string;
            edit: string;
            share: string;
            delete: string;
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
            iframe: import("./types/inst").PopsInstGeneralConfig[];
            folder: import("./types/inst").PopsInstGeneralConfig[];
            loading: import("./types/inst").PopsInstGeneralConfig[];
            alert: import("./types/inst").PopsInstGeneralConfig[];
            confirm: import("./types/inst").PopsInstGeneralConfig[];
            prompt: import("./types/inst").PopsInstGeneralConfig[];
            tooltip: import("./types/inst").PopsInstGeneralConfig[];
            drawer: import("./types/inst").PopsInstGeneralConfig[];
            panel: import("./types/inst").PopsInstGeneralConfig[];
            rightClickMenu: import("./types/inst").PopsInstGeneralConfig[];
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
            setArray<T>(target: T, key: keyof T, newArr: any[]): void;
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
            removeInstance(instConfigList: import("./types/inst").PopsInstGeneralConfig[][], guid: string, isAll?: boolean): import("./types/inst").PopsInstGeneralConfig[][];
            hide(config: PopsAlertConfig | PopsDrawerConfig | PopsPromptConfig | PopsConfirmConfig | PopsIframeConfig | PopsLoadingConfig | PopsPanelConfig | PopsFolderConfig, popsType: import("./types/main").PopsInstStoreType, instConfigList: import("./types/inst").PopsInstGeneralConfig[], guid: string, $anim: HTMLElement, $mask?: HTMLElement): Promise<void>;
            show(config: PopsAlertConfig | PopsDrawerConfig | PopsPromptConfig | PopsConfirmConfig | PopsIframeConfig | PopsLoadingConfig | PopsPanelConfig | PopsFolderConfig, popsType: import("./types/main").PopsInstStoreType, instConfigList: import("./types/inst").PopsInstGeneralConfig[], guid: string, $anim: HTMLElement, $mask?: HTMLElement): Promise<void>;
            close(config: PopsAlertConfig | PopsDrawerConfig | PopsPromptConfig | PopsConfirmConfig | PopsIframeConfig | PopsLoadingConfig | PopsPanelConfig | PopsFolderConfig, popsType: string, instConfigList: import("./types/inst").PopsInstGeneralConfig[], guid: string, $anim: HTMLElement): Promise<void>;
            drag($move: HTMLElement, options: {
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
            $data: {
                nodeStoreConfigKey: string;
            };
            $config: Required<PopsPanelConfig>;
            init(data: {
                config: Required<PopsPanelConfig>;
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
            setElementClassName($el: HTMLElement, className?: import("./components/panel/types/components-common").PopsPanelGeneralConfig<any>["className"]): void;
            createBottomItem(bottomItemConfig: import("./components/panel/types").PopsPanelBottomContentConfig): HTMLLIElement;
            onBottomItemClick($bottomItem: HTMLElement, bottomItemConfig: import("./components/panel/types").PopsPanelBottomContentConfig): void;
            createAsideItem(asideConfig: import("./components/panel/types").PopsPanelContentConfig): HTMLLIElement;
            createSectionContainerItem_switch(viewConfig: import("./components/panel/types/components-switch").PopsPanelSwitchConfig): {
                $el: HTMLLIElement;
                handler: {
                    [Symbol.toStringTag]: string;
                    $data: {
                        value: boolean;
                    };
                    $ele: {
                        itemLeftTextContainer: HTMLElement | null;
                        switch: HTMLDivElement;
                        input: HTMLInputElement;
                        core: HTMLSpanElement;
                    };
                    init(): void;
                    onClick(): void;
                    setStatus(isChecked?: boolean): void;
                    getStatus(): boolean;
                    disable(): void;
                    notDisable(): void;
                };
            };
            createSectionContainerItem_slider(viewConfig: import("./components/panel/types/components-slider").PopsPanelSliderConfig): {
                $el: HTMLLIElement;
                handler: {
                    [Symbol.toStringTag]: string;
                    value: number;
                    min: number;
                    max: number;
                    step: number;
                    $data: {
                        isMove: boolean;
                        isInitDragPosition: boolean;
                        isCheckingStopDragMove: boolean;
                        totalWidth: number;
                        stepPx: number;
                        dragWidth: number;
                        dragPercent: number;
                        stepBlockMap: Map<number, {
                            value: number;
                            px: number;
                            pxLeft: number;
                            pxRight: number;
                            percent: number;
                        }>;
                        tooltip: ReturnType<typeof PopsTooltip.init>;
                    };
                    $ele: {
                        itemLeftTextContainer: HTMLElement | null;
                        slider: HTMLElement;
                        runAway: HTMLElement;
                        bar: HTMLElement;
                        buttonWrapper: HTMLElement;
                        button: HTMLElement;
                    };
                    $interval: {
                        isCheck: boolean;
                    };
                    $tooltip: ReturnType<typeof popsUtils.AnyTouch>["prototype"];
                    init(): void;
                    intervalInit(checkStepTime?: number, maxTime?: number): void;
                    initEleData(): void;
                    initTotalWidth(): void;
                    initStepMap(): void;
                    initFloatStepMap(): void;
                    initSliderPosition(): void;
                    isFloat(num: number): boolean;
                    valueChangeCallBack(event: any, value: number): void;
                    getDragInfo(dragX: number): {
                        value: number;
                        px: number;
                        pxLeft: number;
                        pxRight: number;
                        percent: number;
                    } | undefined;
                    getSliderPositonPercent(dragWidth: number): number;
                    formatValue(num: number): number;
                    setSliderPosition(percent: number): void;
                    disableDrag(): void;
                    allowDrag(): void;
                    isDisabledDrag(): boolean;
                    isDisabledDragWithConfig(): boolean;
                    onRunAwayClick(): void;
                    dragStartCallBack(): boolean;
                    dragMoveCallBack(event: any, dragX: number, oldValue: number): void;
                    dragEndCallBack(dragX: number): void;
                    setPanEvent(): void;
                    showToolTip(): void;
                    closeToolTip(): void;
                    checkStopDragMove(): void;
                    setToolTipEvent(): void;
                };
            };
            createSectionContainerItem_input(viewConfig: import("./components/panel/types/components-input").PopsPanelInputConfig): {
                $el: HTMLLIElement;
                handler: {
                    [Symbol.toStringTag]: string;
                    $el: {
                        itemLeftTextContainer: HTMLElement | null;
                        panelInput: HTMLDivElement;
                        panelInputInner: HTMLDivElement;
                        input: HTMLInputElement;
                        suffix: HTMLSpanElement;
                        suffixInner: HTMLSpanElement;
                        icon: HTMLElement;
                    };
                    $data: {
                        value: string | number | Date;
                        isVisible: boolean;
                    };
                    init(): void;
                    initEle(): void;
                    isTextInputType(): boolean;
                    isDateInputType(): boolean;
                    isNumberInputType(): boolean;
                    disable(): void;
                    notDisable(): void;
                    isDisabled(): boolean;
                    setInputValue(value?: string | number | Date): void;
                    setInputType(typeValue?: import("./components/panel/types/components-input").PopsPanelInputType): void;
                    removeCircleIcon(): void;
                    setCircleIcon(svgHTML?: string): void;
                    hideCircleIconWrapper(): void;
                    showCircleIconWrapper(): void;
                    onIconClick(): void;
                    onValueChange(): void;
                    triggerValueChange(): void;
                    addValidErrorMsg(msg?: string): void;
                    removeValidErrorMsg(): void;
                };
            };
            createSectionContainerItem_textarea(viewConfig: import("./components/panel/types/components-textarea").PopsPanelTextAreaConfig): {
                $el: HTMLLIElement;
                handler: {
                    [Symbol.toStringTag]: string;
                    $ele: {
                        itemLeftTextContainer: HTMLElement | null;
                        panelTextarea: HTMLDivElement;
                        textarea: HTMLTextAreaElement;
                    };
                    $data: {
                        value: string;
                    };
                    init(): void;
                    disable(): void;
                    notDisable(): void;
                    isDisabled(): boolean;
                    setValue(value: string): void;
                    onValueChange(): void;
                };
            };
            createSectionContainerItem_select(viewConfig: import("./components/panel/types/components-select").PopsPanelSelectConfig<any>): {
                $el: HTMLLIElement;
                handler: {
                    [Symbol.toStringTag]: string;
                    $el: {
                        itemLeftTextContainer: HTMLElement;
                        $container: HTMLElement;
                        $select: HTMLSelectElement;
                    };
                    $eleKey: {
                        disable: string;
                        value: string;
                        viewConfig: string;
                    };
                    $data: {
                        data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>[];
                        defaultValue: any;
                    };
                    init(): void;
                    setNodeValue($ele: HTMLElement, key: string, value: any): void;
                    getNodeValue($ele: HTMLElement, key: string): any;
                    disable(): void;
                    notDisable(): void;
                    isDisabled(): boolean;
                    initOption(): void;
                    setOptionSelected($option: HTMLOptionElement): void;
                    setSelectOptionsDisableStatus(): void;
                    setOptionDisableStatus($option: HTMLOptionElement): void;
                    getSelectOptionInfo($option: HTMLOptionElement): {
                        value: any;
                        text: string;
                        views: NonNullable<IFunction<(import("./components/panel/types").PopsPanelViewConfig | import("./components/panel/types/components-container").PopsPanelContainerConfig)[]> | undefined>;
                        $option: HTMLOptionElement;
                    };
                    onValueChange(): void;
                    onClick(): void;
                } | {
                    [Symbol.toStringTag]: string;
                    $el: {
                        $itemLeftContainer: HTMLElement;
                        $container: HTMLElement;
                        $wrapper: HTMLElement;
                        $section: HTMLElement;
                        $selectedInputWrapper: HTMLElement;
                        $selectedPlaceHolderWrapper: HTMLElement;
                        $suffix: HTMLElement;
                        $suffixIcon: HTMLElement;
                        $selectDialogContainer: HTMLElement | null;
                    };
                    $data: {
                        data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>[];
                        defaultValue: any;
                        selectedData: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any> | undefined;
                        isValidSuccess: boolean;
                        rotateKey: string;
                    };
                    init(): void;
                    initDefault(): void;
                    initEl(): void;
                    initPlaceHolder(): void;
                    renderSelectText(): void;
                    disable(): void;
                    cancleDisable(): void;
                    isDisabled(): boolean;
                    onShowSelectDialogClick(): void;
                    onValueChangeCallback(data?: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>, isUpdateSelectItem?: boolean): void;
                    updateAllSelectItemStatus(): void;
                    resetAllSelectedItemStatus(): void;
                    setItemSelected($el: HTMLElement): void;
                    removeItemSelected($el: HTMLElement): void;
                    isItemSelected($el: HTMLElement): boolean;
                    getItemDataOption($el: HTMLElement): import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>;
                    addSelectedItemInfo(data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>): void;
                    removeSelectedItemInfo(): void;
                    updateSelectedInfo(data?: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>): void;
                    resetCurrentSelectedInfo(): void;
                    getAllSelectItems(onlySelected?: boolean): {
                        data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>;
                        $select: HTMLElement;
                    }[];
                    createSelectItemElement(data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>): HTMLLIElement;
                    setSelectItemText(data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>, $select: HTMLElement): void;
                    setSelectItemDisabled($select: HTMLElement): void;
                    removeSelectItemDisabled($select: HTMLElement): void;
                    isSelectItemDisabled($select: HTMLElement): string | true | null;
                    onSelectItemClick(data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any> | undefined, $select: HTMLElement): void;
                    showInputWrapper(): void;
                    hideInputWrapper(): void;
                    showPlaceHolderWrapper(): void;
                    hidePlaceHolderWrapper(): void;
                } | {
                    [Symbol.toStringTag]: string;
                    $el: {
                        $itemLeftContainer: HTMLElement;
                        $container: HTMLElement;
                        $wrapper: HTMLElement;
                    };
                    $data: {
                        data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>[];
                        defaultValue: any;
                        selectedData: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any> | undefined;
                        rotateKey: string;
                    };
                    init(): void;
                    initDefault(): void;
                    initEl(): void;
                    disable(): void;
                    cancleDisable(): void;
                    isDisabled(): boolean;
                    createSelectItemElement(data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>): HTMLDivElement;
                    setSelectItemText(data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>, $select: HTMLElement): void;
                    onSelectItemClick(data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any> | undefined, $el: HTMLElement): void;
                    onValueChangeCallback(data?: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>, isUpdateSelectItem?: boolean): void;
                    updateAllSelectItemStatus(): void;
                    resetAllSelectedItemStatus(): void;
                    addSelectedItemInfo(data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>): void;
                    removeSelectedItemInfo(): void;
                    updateSelectedInfo(data?: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>): void;
                    resetCurrentSelectedInfo(): void;
                    setSelectItemDisabled($select: HTMLElement): void;
                    removeSelectItemDisabled($select: HTMLElement): void;
                    isSelectItemDisabled($select: HTMLElement): string | true | null;
                    setItemSelected($select: HTMLElement): void;
                    removeItemSelected($select: HTMLElement): void;
                    isItemSelected($select: HTMLElement): boolean;
                    getAllSelectItems(onlySelected?: boolean): {
                        data: import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>;
                        $select: HTMLElement;
                    }[];
                    getItemDataOption($el: HTMLElement): import("./components/panel/types/components-select").PopsPanelSelectDataOption<any>;
                } | undefined;
            };
            createSectionContainerItem_select_multiple(viewConfig: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleConfig<any>): {
                $el: HTMLLIElement;
                handler: {
                    [Symbol.toStringTag]: string;
                    $el: {
                        $itemLeftContainer: HTMLElement | null;
                        $container: HTMLElement;
                        $wrapper: HTMLElement;
                        $section: HTMLElement;
                        $selectedInputWrapper: HTMLElement;
                        $selectedPlaceHolderWrapper: HTMLElement;
                        $suffix: HTMLElement;
                        $suffixIcon: HTMLElement;
                        $selectContainer: HTMLElement | null;
                    };
                    $data: {
                        defaultValue: any[];
                        selectedDataList: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>[];
                        rotateKey: string;
                    };
                    init(): void;
                    initDefault(): void;
                    inintEl(): void;
                    initPlaceHolder(): void;
                    initTagElement(): void;
                    createTagItem(data: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>): {
                        $tag: HTMLDivElement;
                        $tagText: HTMLSpanElement;
                        $closeIcon: HTMLElement;
                    };
                    addTagItem($tag: HTMLElement): void;
                    updateTagItem(): void;
                    onValueChange(selectedDataList?: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>[]): void;
                    updateAllSelectItems(): void;
                    setItemSelected($select: HTMLElement): void;
                    removeItemSelected($select: HTMLElement): void;
                    isItemSelected($select: HTMLElement): boolean;
                    addItemSelected(dataList: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>[], $select: HTMLElement): void;
                    getSelectedItemInfo($select: HTMLElement): import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>;
                    removeSelectedItemInfo(dataList: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>[], $select: HTMLElement): void;
                    getAllSelectItemInfo(onlySelected?: boolean): {
                        data: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>;
                        $select: HTMLElement;
                    }[];
                    createSelectItemElement(data: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>): HTMLLIElement;
                    setSelectItemText(data: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>, $select: HTMLElement): void;
                    disableSelectItem($select: HTMLElement): void;
                    cancleDisableSelectItem($select: HTMLElement): void;
                    isSelectItemDisabled($select: HTMLElement): string | true | null;
                    onSelectItemClick(dataList: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>[], $select: HTMLElement): void;
                    onShowSelectDialogClick(): void;
                    onSelectItemCloseIconClick(data: {
                        $closeIcon: HTMLElement;
                        $tag: HTMLElement;
                        value: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>["value"];
                        text: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>["text"];
                    }): void;
                    checkTagEmpty(): void;
                    removeSelectedTagItem($tag: HTMLElement): void;
                    removeSelectedInfo(data: import("./components/panel/types/components-selectMultiple").PopsPanelSelectMultipleDataOption<any>, triggerValueChangeCallBack?: boolean): void;
                    showInputWrapper(): void;
                    hideInputWrapper(): void;
                    showPlaceHolderWrapper(): void;
                    hidePlaceHolderWrapper(): void;
                    setSectionIsNear(): void;
                    removeSectionIsNear(): void;
                    disable(): void;
                    isDisabled(): boolean;
                    cancleDisable(): void;
                };
            };
            createSectionContainerItem_button(viewConfig: import("./components/panel/types/components-button").PopsPanelButtonConfig): {
                $el: HTMLLIElement;
                handler: {
                    [Symbol.toStringTag]: string;
                    $ele: {
                        panelButton: HTMLDivElement;
                        button: HTMLDivElement;
                        icon: HTMLDivElement;
                        spanText: HTMLDivElement;
                    };
                    $data: {};
                    init(): void;
                    initButton(): void;
                    disable(): void;
                    notDisable(): void;
                    hideIcon(): void;
                    showIcon(): void;
                    setIconSVG(svgHTML: string): void;
                    setIconLoadingStatus(status: any): void;
                    setHasIcon(value: any): void;
                    setButtonType(typeValue: string): void;
                    setIconRight(): void;
                    setIconLeft(): void;
                    setButtonText(text: string): void;
                    onButtonClick(): void;
                };
            };
            createSectionContainerItem_deepMenu(viewConfig: import("./components/panel/types/components-deepMenu").PopsPanelDeepViewConfig): {
                $el: HTMLLIElement;
                handler: {
                    [Symbol.toStringTag]: string;
                    $ele: {
                        readonly parentSection: HTMLElement;
                    };
                    init(): void;
                    initContainerItem($container: HTMLElement, formItemConfig: import("./components/panel/types").PopsPanelViewConfig | import("./components/panel/types/components-container").PopsPanelContainerConfig): void;
                    gotoDeepMenu(event: Event, liElement: HTMLLIElement): Promise<void>;
                    onLiClick(): void;
                };
            };
            createSectionContainerItem_own(viewConfig: import("./components/panel/types/components-own").PopsPanelOwnConfig): {
                $el: HTMLLIElement;
            };
            createSectionContainerItem(viewConfig: import("./components/panel/types").PopsPanelViewConfig): {
                $el: HTMLLIElement;
            } | undefined;
            createSectionContainerItem_forms(viewConfig: import("./components/panel/types").PopsPanelContentConfig | import("./components/panel/types/components-container").PopsPanelContainerConfig): void;
            triggerRenderRightContainer($container: HTMLElement): void;
            uListContainerAddItem(viewConfig: import("./components/panel/types").PopsPanelViewConfig, containerOptions: Omit<import("./components/panel/types/components-common").PopsPanelRightAsideContainerConfig, "target">): void;
            onAsideItemClick($asideItem: HTMLElement, asideConfig: import("./components/panel/types").PopsPanelContentConfig): void;
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
        } & Partial<import("./types/components").PopsGeneralConfig> & Partial<import("./types/components").PopsDragConfig>;
        setGlobalConfig(config: {
            style?: string | (() => string) | null;
            zIndex?: (number | (() => number) | null) | (string | (() => string) | null);
        } & Partial<import("./types/components").PopsGeneralConfig> & Partial<import("./types/components").PopsDragConfig>): void;
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
            mask?: import("./types/mask").PopsMaskConfig | undefined;
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
     * @param config 配置
     */
    alert: (config: PopsAlertConfig) => Omit<import("./types/event").PopsEventConfig, "function" | "type">;
    /**
     * 询问框
     * @param config 配置
     */
    confirm: (config: PopsConfirmConfig) => Omit<import("./types/event").PopsEventConfig, "function" | "type">;
    /**
     * 输入框
     * @param config 配置
     */
    prompt: (config: PopsPromptConfig) => Omit<import("./types/event").PopsEventConfig, "function" | "type">;
    /**
     * 加载层
     * @param config 配置
     */
    loading: (config: PopsLoadingConfig) => Omit<Omit<import("./types/event").PopsEventConfig, "$shadowContainer" | "$shadowRoot">, "function" | "type">;
    /**
     * iframe层
     * @param config 配置
     */
    iframe: (config: PopsIframeConfig) => Omit<import("./components/iframe/types").PopsIframeClickEventConfig, "function" | "type">;
    /**
     * 提示框
     * @param config 配置
     */
    tooltip: (config: PopsToolTipConfig) => {
        guid: string;
        config: {
            $target: HTMLElement;
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
     * @param config 配置
     */
    drawer: (config: PopsDrawerConfig) => Omit<import("./types/event").PopsEventConfig, "function" | "type">;
    /**
     * 文件夹
     * @param config 配置
     */
    folder: (config: PopsFolderConfig) => Omit<import("./types/event").PopsEventConfig, "function" | "type">;
    /**
     * 配置面板
     * @param config 配置
     */
    panel: (config: PopsPanelConfig) => {
        addEventListener: <K extends keyof import("./components/panel/types").PopsPanelEventType>(event: K, listener: (evt: CustomEvent<import("./components/panel/types").PopsPanelEventType[K]>) => void, options?: boolean | EventListenerOptions) => void;
        removeEventListener: <K extends keyof import("./components/panel/types").PopsPanelEventType>(event: K, listener: (evt: CustomEvent<import("./components/panel/types").PopsPanelEventType[K]>) => void, options?: boolean | EventListenerOptions) => void;
        mode: import("./types/main").PopsType;
        close: () => Promise<void>;
        hide: () => Promise<void>;
        show: () => Promise<void>;
        guid: string;
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot | HTMLElement;
        $el: HTMLDivElement;
        $anim: HTMLDivElement;
        $pops: HTMLDivElement;
        $mask?: HTMLDivElement | undefined;
    };
    /**
     * 右键菜单
     * @param config 配置
     */
    rightClickMenu: (config: PopsRightClickMenuConfig) => {
        guid: string;
        config: DeepRequired<PopsRightClickMenuConfig>;
        addWindowCheckClickListener: () => void;
        removeWindowCheckClickListener: () => void;
        addContextMenuEvent: (target: PopsRightClickMenuConfig["$target"], selector?: string) => void;
        removeContextMenuEvent: (target: HTMLElement | typeof globalThis | Window, selector?: string) => void;
        removeInitEventListener: {
            contextMenu(): void;
            windowClick(): void;
        };
        PopsContextMenu: {
            $data: {
                menuDataKey: string;
            };
            $el: {
                $root: HTMLElement;
            };
            windowCheckClickEvent(event: MouseEvent | PointerEvent): void;
            shadowRootCheckClickEvent(event: MouseEvent | PointerEvent): void;
            addWindowCheckClickListener(): void;
            removeWindowCheckClickListener(): void;
            contextMenuEvent(event: PointerEvent, selectorTarget: NonNullable<PopsRightClickMenuConfig["$target"]>): void;
            addContextMenuEvent(target: PopsRightClickMenuConfig["$target"], selector?: string): void;
            removeContextMenuEvent(target: HTMLElement | typeof globalThis | Window, selector?: string): void;
            animationCloseMenu($menu: HTMLElement): void;
            closeAllMenu($root: HTMLElement): void;
            createMenuContainerElement(isChildren: boolean): HTMLDivElement;
            getMenuZIndex(): number;
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
            showMenu(menuEvent: PointerEvent, dataConfig: import("./components/rightClickMenu/types").PopsRightClickMenuDataConfig[], $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>): HTMLDivElement;
            showClildMenu(menuEvent: PointerEvent, posInfo: {
                clientX: number;
                clientY: number;
            }, dataConfig: import("./components/rightClickMenu/types").PopsRightClickMenuDataConfig[], $root: HTMLDivElement, $targetLi: HTMLLIElement, $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>): HTMLDivElement;
            handlerShowMenuCSS($menu: HTMLElement, posInfo: {
                clientX: number;
                clientY: number;
            }, parentInfo?: {
                $menu: HTMLElement;
                $parentItem: HTMLElement;
            }): void;
            addMenuLiELement(menuEvent: PointerEvent, $root: HTMLDivElement, $menu: HTMLDivElement, dataConfig: import("./components/rightClickMenu/types").PopsRightClickMenuDataConfig[], $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>): void;
        };
    };
    /**
     * 搜索建议
     *
     * 注意：调用后需要主动调用.init()和.setAllEvent()进行初始化
     * @param config 配置
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
    searchSuggestion: <T = any>(config: PopsSearchSuggestionConfig<T>) => {
        selfDocument: Document | ShadowRoot | (Document | ShadowRoot)[];
        $el: {
            root: HTMLElement;
            $dropdownWrapper: HTMLElement;
            $dropdownContainer: HTMLUListElement;
            $arrow: HTMLDivElement;
            $dynamicCSS: HTMLStyleElement;
        };
        $evt: {
            offInputChangeEvtHandler: ((...args: any[]) => any)[];
        };
        $data: {
            isEmpty: boolean;
            storeNodeHandlerKey: string;
        };
        init($parent?: HTMLElement): void;
        initEl(): void;
        getData(): import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>[];
        setData(data: import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>[]): void;
        createSearchSelectElement(): HTMLDivElement;
        getDynamicCSS(): string;
        getItemDataValue(data: import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>): import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>;
        createSearchItemLiElement(dataItem: import("./components/searchSuggestion/types/index").PopsSearchSuggestionData<T>, dateItemIndex: number): HTMLLIElement;
        setSearchItemClickEvent($searchItem: HTMLLIElement): void;
        setSearchItemSelectEvent($li: HTMLLIElement): void;
        setInputChangeEvent(option?: AddEventListenerOptions): void;
        removeInputChangeEvent(): void;
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
