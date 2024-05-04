/**
 * 动画
 */
type PopsAnimation =
    | "pops-anim-spread"
    | "pops-anim-shake"
    | "pops-anim-rolling-left"
    | "pops-anim-rolling-right"
    | "pops-anim-slide-top"
    | "pops-anim-slide-bottom"
    | "pops-anim-slide-left"
    | "pops-anim-slide-right"
    | "pops-anim-fadein"
    | "pops-anim-fadein-zoom"
    | "pops-anim-fadein-alert"
    | "pops-anim-don"
    | "pops-anim-roll"
    | "pops-anim-sandra"
    | "pops-anim-gather"
/**
 * 弹窗位置
 */
type PopsPosition =
    | "top_left"
    | "top"
    | "top_right"
    | "center_left"
    | "center"
    | "center_right"
    | "bottom_left"
    | "bottom"
    | "bottom_right"
/**
 * 按钮svg图标
 */
type PopsIcon =
    | "min"
    | "mise"
    | "max"
    | "close"
    | "edit"
    | "share"
    | "delete"
    | "search"
    | "upload"
    | "loading"
    | "next"
    | "prev"
    | "eleme"
    | "elemePlus"
    | "chromeFilled"
    | "cpu"
    | "videoPlay"
    | "videoPause"
    | "headset"
    | "monitor"
    | "documentCopy"
    | "picture"
    | "circleClose"
    | "view"
    | "hide"
    | "keyboard"
/**
* 按钮类型
*/
type PopsButtonType =
    | "close"
    | "ok"
    | "cancel"
    | "other"
/**
 * 按钮样式类型
 */
type PopsButtonStyleType =
    | "default"
    | "primary"
    | "xiaomi-primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
/**
 * 按钮位置
 */
type PopsJustifyContent =
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "left"
    | "normal"
    | "right"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch"
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset"
/**
 * text-align
 */
type PopsTextAlign =
    | "center"
    | "end"
    | "justify"
    | "left"
    | "right"
    | "start"
    | "-webkit-auto"
    | "-moz-center-or-inherit"
    | "-webkit-center"
    | "-moz-center"
    | "-webkit-left"
    | "-moz-left"
    | "-webkit-match-parent"
    | "-webkit-right"
    | "-moz-right"
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset"

/** panel的各种类型的配置项 */
type PopsPanelFormsTotalDetails =
    | PopsPanelSwitchDetails
    | PopsPanelSliderDetails
    | PopsPanelInputDetails
    | PopsPanelTextAreaDetails
    | PopsPanelSelectDetails
    | PopsPanelButtonDetails
    | PopsPanelOwnDetails

/**
 * 现有的pops.xxx的类型
 */
type PopsMode =
    | "alert"
    | "confirm"
    | "prompt"
    | "loading"
    | "iframe"
    | "tooltip"
    | "drawer"
    | "folder"
    | "panel"
    | "rightClickMenu"

/**
 * 按钮大小
 */
type PopsButtonSize = "large" | "small"

type NestedObjectWithToString = {
    [key: string]: any | NestedObjectWithToString;
    toString(): any;
}

/**
 * 遮罩层配置
 */
declare interface PopsMaskDetails {
    /**
     * 是否启用遮罩层，默认false
     */
    enable?: boolean;
    clickEvent: {
        /**
         * 点击遮罩层是否触发关闭事件
         */
        toClose?: boolean;
        /**
         * 点击遮罩层是否触发隐藏事件
         */
        toHide?: boolean;
    };
    /**
     * 遮罩层自定义的点击事件
     * @param originalRun 当toClose为true，它是关闭弹窗，当toHide为true，它是隐藏弹窗
     * @param config 配置信息
     */
    clickCallBack?: (originalRun: () => void, config: PopsAlertDetails | PopsDrawerDetails | PopsIframeDetails | PopsPromptDetails | PopsFolderDetails | PopsLoadingDetails | PopsPanelDetails) => void
}

/**
 * 按钮的点击回调参数event
 */
declare interface PopsBtnCallBackEvent {
    /**
     * 元素
     */
    element: HTMLElement;
    /**
     * 动画元素（包裹着弹窗元素）
     */
    animElement: HTMLElement;
    /**
     * 弹窗元素
     */
    popsElement: HTMLElement,
    /**
     * 遮罩层元素
     */
    maskElement: HTMLElement | undefined;
    /**
     * 按钮调用类型
     */
    type: PopsButtonType;
    /**
     * 调用的方法
     */
    mode: PopsMode;
    /**
     * 唯一id
     */
    guid: string;
    /**
     * 关闭弹窗
     */
    close(): void;
    /**
     * 隐藏弹窗
     */
    hide(): void;
    /**
     * 显示弹窗
     */
    show(): void;
}
/**
 * pops.iframe的按钮的点击回调参数event
 */
declare interface PopsBtnIframeCallBackEvent {
    /**
     * 动画元素（包裹着弹窗元素）
     */
    animElement: HTMLElement;
    /**
     * 弹窗元素
     */
    popsElement: HTMLElement,
    /**
     * 遮罩层元素，如果未设置，那么不存在
     */
    maskElement?: HTMLElement;
    /**
     * iframe元素
     */
    iframePopsElement: HTMLIFrameElement;
    /**
     * 使用的方法名
     */
    function: "iframe";
    /**
     * 唯一id
     */
    guid: string;
}
/**
 * pops.prompt按钮的点击回调参数event
 */
declare interface PopsPromptBtnCallBackEvent {
    /**
     * 动画元素（包裹着弹窗元素）
     */
    animElement: HTMLElement;
    /**
     * 遮罩层元素，如果未设置，那么不存在
     */
    maskElement?: HTMLElement;
    /**
     * 按钮调用类型
     */
    type: PopsButtonType
    /**
     * 唯一id
     */
    guid: string;
    /**
     * 关闭弹窗
     */
    close(): void;
    /**
     * 隐藏弹窗
     */
    hide(): void;
    /**
     * 显示弹窗
     */
    show(): void;
    /**
     * 输入的内容
     */
    text: string;
}
declare interface PopsPanelRightAsideContainerOptions {
    /** 把获取的项<li>元素添加到这个<ul>元素内 */
    ulElement: HTMLUListElement,
    /**  */
    sectionContainerULElement?: HTMLUListElement
    /**  */
    formContainerListElement?: HTMLLIElement
    /**  */
    formHeaderDivElement?: HTMLDivElement
}
declare interface PopsPanelCommonDetails {
    /**
     * 在添加到<ul>元素后触发该回调
     * @param formConfig 配置
     * @param container 右侧容器的元素
     * @example
     * // 例如在type为own时
     * afterAddToUListCallBack(formConfig, container) {
     * DOMUtils.on(
        container.formHeaderDivElement.querySelector(
        "a"
        ),
        "click",
        void 0,
        () => {
        PopsPanel.deleteValue("xxxx");
        container.ulElement.querySelector(
            "textarea"
        ).value = xxxxx.defaultValue;
        Qmsg.success("已重置");
        }
    );
     * }
     * 
     * // 例如在type为forms时
     * container内只有container.ulElement这个属性
     */
    afterAddToUListCallBack?: ((
        formConfig: PopsPanelFormsTotalDetails,
        container: PopsPanelRightAsideContainerOptions,
    ) => void);
}
declare interface PopsPanelCommonFormsDetails {
    /**
     * 在添加到右侧容器的<li>元素后触发该回调
     * @param formConfig 配置
     * @param parentLiElement item的总<li>元素
     * @param headerDivElement parentLiElement的子<div>元素，一般是text的内容
     * @param formContainerULElement parentLiElement的子<ul>元素
     */
    afterAddToListCallBack(
        formConfig: PopsPanelFormsDetails,
        parentLiElement: HTMLLIElement,
        headerDivElement: HTMLDivElement,
        formContainerULElement: HTMLUListElement
    ): void;
}
/**
 * 按钮配置
 */
declare interface PopsButtonDetails {
    /**
     * 是否启用按钮
     */
    enable: boolean;
    /**
     * 图标按钮，如果名字为内置的，则使用内置的，否则为自定义的svg
     */
    icon: PopsIcon;
    /**
     * 图标按钮是否放在右边
     */
    rightIcon: boolean;
    /**
     * 图标按钮是否是旋转360°，默认false
     */
    iconIsLoading: boolean;
    /**
     * 按钮尺寸大小，默认为空
     */
    size: PopsButtonSize;
    /**
     * 按钮样式类型，默认为default
     */
    type: PopsButtonStyleType;
    /**
     * 按钮文字，默认为空
     */
    text: string;
    /**
     * 按钮点击的回调
     */
    callback(event: PopsBtnCallBackEvent): void;
}

/**
 * 顶部关闭按钮配置
 */
declare interface PopsHeaderCloseButtonDetails {
    /**
     * 是否启用按钮
     */
    enable?: boolean;
    /**
     * 按钮尺寸大小，默认为空
     */
    size?: PopsButtonSize;
    /**
     * 按钮样式类型，默认为default
     */
    type?: PopsButtonStyleType;
    /**
     * 按钮文字，默认为空
     */
    text?: string;
    /**
     * 按钮点击的回调
     */
    callback?: (event: PopsPromptBtnCallBackEvent) => void;
}
/**
 * 事件配置
 */
declare interface PopsEventDetails {
    /**
     * 唯一id
     */
    guid: string;
    /**
     * 当前弹窗类型
     */
    mode: PopsMode;
    /**
     * 动画层
     */
    animElement: HTMLElement;
    /**
     * 主元素
     */
    popsElement: HTMLElement;
    /**
     * 遮罩层
     */
    maskElement: HTMLElement;
    /**
     * 当前配置
     */
    config: NestedObjectWithToString;
}
/**
 * pops.folder的folder配置信息
 */
declare interface PopsFolderDataConfig {
    /**
     * 文件/文件夹名
     */
    fileName: string;
    /**
     * 文件大小，如果是文件夹的话，为0
     */
    fileSize: number;
    /**
     * 文件类型，如果是文件夹，为空
     */
    fileType: string;
    /**
     * 创建时间
     */
    createTime: number;
    /**
     * 修改时间(最新时间)
     */
    latestTime: number;
    /**
     * 是否是文件夹
     */
    isFolder: boolean;
    /**
     * 层级
     */
    index: number;
    /**
     * 点击事件
     */
    clickEvent: (event: MouseEvent | PointerEvent, config: PopsFolderDataConfig) => Promise<{ autoDownload: boolean, url: string, mode: "a" | "aBlank" | "iframe" | "open" | "openBlank" }> | null;
}
/**
 * pops.panel的content配置信息
 */
declare interface PopsPanelContentConfig {
    /**
     * 元素属性id
     */
    id: string;
    /**
     * 左侧的标题
     */
    title: string;
    /**
     * （可选）中间顶部的标题
     */
    headerTitle?: string;
    /**
     * （可选）内容高度是否自动适应（与headerTitle的高度有关）
     */
    autoAdaptionContentHeight?: string;
    /**
     * （可选）是否是默认的，指打开弹窗的先显示出来的内容
     */
    isDefault?: boolean | (() => boolean);
    /**
     * （可选）是否自动滚动到默认的项
     */
    scrollToDefaultView?: boolean;
    /**
     * （可选）自定义元素属性
     */
    attributes?: NestedObjectWithToString[] | NestedObjectWithToString;
    /**
     * （可选）自定义属性
     */
    props?: HTMLElement;
    /**
     * 子配置
     */
    forms: (PopsPanelFormsDetails | PopsPanelFormsTotalDetails)[];
    /**
     * 左侧容器的点击回调
     */
    callback?: ((event: MouseEvent | PointerEvent, rightHeaderElement: HTMLUListElement, rightContainerElement: HTMLUListElement) => void) | undefined;
}
/**
 * pops.panel的 forms
 */
declare interface PopsPanelFormsDetails extends PopsPanelCommonDetails {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: NestedObjectWithToString;
    /**
     * （可选）自定义属性
     */
    props?: HTMLElement;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * 类型
     */
    type: "forms";
    /**
     * 子配置
     */
    forms: PopsPanelFormsTotalDetails[];
}
/**
 * pops.panel的 switch
 */
declare interface PopsPanelSwitchDetails extends PopsPanelCommonDetails {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: NestedObjectWithToString;
    /**
     * （可选）自定义属性
     */
    props?: HTMLElement;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * （可选）左边的文字下面的描述
     */
    description?: string;
    /**
     * 类型
     */
    type: "switch";
    /**
     * （可选）是否禁用
     */
    disabled?: false;
    /**
     * 获取该项的值的回调函数
     */
    getValue(): boolean;
    /**
     * switch开启/关闭触发的回调函数
     */
    callback(event: InputEvent, value: boolean): void;
}
/**
 * pops.panel的 slider
 */
declare interface PopsPanelSliderDetails extends PopsPanelCommonDetails {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: NestedObjectWithToString;
    /**
     * （可选）自定义属性
     */
    props?: HTMLElement;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * （可选）左边的文字下面的描述
     */
    description?: string;
    /**
     * 类型
     */
    type: "slider";
    /**
     * （可选）是否禁用
     */
    disabled?: false,
    /**
     * 获取该项的值的回调函数
     */
    getValue(): number;
    /**
     * 滑块的值改变触发的回调函数
     */
    callback(event: InputEvent, value: number): void;
    /**
     * 获取tooltip的提示内容，可自定义，默认为slider的值
     */
    getToolTipContent(value: number): string;
    /**
     * 滑块的最小值
     */
    min: number;
    /**
     * 滑块的最大值
     */
    max: number;
    /**
     * （可选）每次滑动的间隔值
     */
    step?: number;
}
/**
 * pops.panel的 input
 */
declare interface PopsPanelInputDetails extends PopsPanelCommonDetails {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: NestedObjectWithToString;
    /**
     * （可选）自定义属性
     */
    props?: HTMLElement;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * （可选）左边的文字下面的描述
     */
    description?: string;
    /**
     * 类型
     */
    type: "input";
    /**
     * （可选）是否禁用
     */
    disabled?: boolean,
    /**
     * 获取该项的值的回调函数
     */
    getValue(): string;
    /**
     * 输入框的值改变触发的回调函数
     * @param event 输入事件
     * @param value 输入框的值
     * @param valueAsNumber 当isNumber为true时，有该值，它可能是NaN
     */
    callback(event: InputEvent, value: string, valueAsNumber?: number): void;
    /**
     * （可选）输入框内的提示
     */
    placeholder?: string;
    /**
     * （可选）是否是密码框
     */
    isPassword?: boolean;
    /**
     * （可选）是否是数字框
     */
    isNumber?: boolean;
    /**
     * （可选）自己调用的处理回调函数
     */
    handlerCallBack?(liElement: HTMLLinkElement, inputElement: HTMLInputElement): void;
}
/**
 * pops.panel的 textarea
 */
declare interface PopsPanelTextAreaDetails extends PopsPanelCommonDetails {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: NestedObjectWithToString;
    /**
     * （可选）自定义属性
     */
    props?: HTMLElement;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * （可选）左边的文字下面的描述
     */
    description?: string;
    /**
     * 类型
     */
    type: "textarea";
    /**
     * （可选）是否禁用
     */
    disabled?: boolean,
    /**
     * 获取该项的值的回调函数
     */
    getValue(): string;
    /**
     * textarea输入框的值改变触发的回调函数
     * @param event 事件
     * @param value 当前的textarea内的值
     */
    callback(event: InputEvent, value: string): void;
    /**
     * 输入框内的提示
     */
    placeholder: string;
}
/**
 * pops.panel的 select
 */
declare interface PopsPanelSelectDetails extends PopsPanelCommonDetails {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: NestedObjectWithToString;
    /**
     * （可选）自定义属性
     */
    props?: HTMLElement;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * （可选）左边的文字下面的描述
     */
    description?: string;
    /**
     * 类型
     */
    type: "select";
    /**
     * （可选）是否禁用
     */
    disabled?: boolean,
    /**
     * 获取该项的值的回调函数
     */
    getValue(): string;
    /**
     * 选择器的值改变触发的回调函数
     * @param event 事件
     * @param isSelectedValue 当前选中的值，也就是元素属性上的__value__
     * @param isSelectedText 当前选中的文本
     */
    callback?(event: PointerEvent | TouchEvent, isSelectedValue: string, isSelectedText: string): void;
    /**
     * 点击select元素触发该回调
     * @param event 点击事件
     * @param selectElement 当前的select元素
     */
    clickCallBack?(event: PointerEvent | TouchEvent, selectElement: HTMLSelectElement): void;
    /**
     * 选择器内的数据组
     */
    data: {
        /**
         * 真正的值
         */
        value: any;
        /**
         * 显示的文字
         */
        text: string;
        /**
         * （可选）是否禁用项
         * 触发条件：
         * + 点击select元素
         * + select元素触发change事件
         */
        disable?(value: any): boolean;
    }[];
}
/**
 * pops.panel的 button
 */
declare interface PopsPanelButtonDetails extends PopsPanelCommonDetails {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: NestedObjectWithToString;
    /**
     * （可选）自定义属性
     */
    props?: HTMLElement;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * （可选）左边的文字下面的描述
     */
    description?: string;
    /**
     * 类型
     */
    type: "button";
    /**
     * （可选）是否禁用
     */
    disable?: boolean;
    /**
     * 按钮的类型
     */
    buttonType: PopsButtonStyleType;
    /**
     * 按钮的文字
     */
    buttonText: string | (() => string);
    /**
     * 按钮的图标，已配置的svg请看pops.config.iconSVG，或者自定义的图标svg代码
     */
    buttonIcon?: PopsIcon;
    /**
     * 按钮的图标在右边
     */
    buttonIsRightIcon?: boolean;
    /**
     * 按钮的图标旋转
     */
    buttonIconIsLoading?: boolean;
    /**
     * 点击button触发的事件
     */
    callback: (event: MouseEvent | PointerEvent) => void;
}
/**
 * pops.panel的 own
 * 自定义的
 */
declare interface PopsPanelOwnDetails extends PopsPanelCommonDetails {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: NestedObjectWithToString;
    /**
     * （可选）自定义属性
     */
    props?: HTMLElement;
    /**
     * 类型
     */
    type: "own";
    /**
     * 获取自定义<li>标签元素
     */
    getLiElementCallBack: (liElement: HTMLLIElement) => HTMLLIElement;
}


/**
 * pops.rightClickMenu的右键菜单配置
 */
declare interface PopsRightClickMenuDataDetails {
    /**
     * svg图标
     */
    icon: PopsIcon;
    /**
     * 图标是否旋转
     */
    iconIsLoading: boolean;
    /**
     * 文字
     */
    text: string | (() => string);
    /**
     * 点击的回调函数
     * @param clickEvent 点击菜单的click事件
     * @param contextMenuEvent 触发的contextmenu事件
     * @param liElement <li>元素
     * 
     */
    callback: (clickEvent: PointerEvent, contextMenuEvent: PointerEvent, liElement: HTMLLIElement) => boolean | undefined;
    /**
     * 子项配置
     */
    item: PopsRightClickMenuDataDetails[] | null;
}

/**
 * 标题配置
 */
declare interface PopsTitleConfig {
    title: {
        /**
         * 标题文字
         */
        text?: string;
        /**
         * 文字的位置
         */
        position?: PopsTextAlign;
        /**
         * 文字是否是html
         */
        html?: boolean;
        /**
         * 文字的自定义CSS
         */
        style?: string;
    }
}
/**
 * 内容配置
 */
declare interface PopsContentConfig {
    content: {
        /**
         * 内容文字
         */
        text?: string;
        /**
         * 文字是否是html
         */
        html?: boolean;
        /**
         * 文字的自定义CSS
         */
        style?: string;
    }
}
/**
 * 按钮配置
 */
declare interface PopsButtonConfig {
    btn?: {
        /**
        * 按钮的位置，默认left
        */
        position?: PopsJustifyContent;
        /**
         * 右上角的关闭按钮
         */
        close?: PopsHeaderCloseButtonDetails;
    }
}
declare interface PopsMoreButtonConfig {
    btn?: PopsButtonConfig["btn"] & {
        /**
         * 是否合并按钮
         */
        merge?: boolean;
        /**
         * 是否对合并的按钮逆反
         */
        mergeReverse?: boolean;
        /**
         * 是否逆反
         */
        reverse?: boolean;
        /**
         * 确定按钮
         */
        ok?: PopsButtonDetails;
        /**
         * 取消按钮
         */
        cancel?: PopsButtonDetails;
        /**
         * 其他按钮
         */
        other?: PopsButtonDetails;
    }
}
/**
 * 拖拽配置
 */
declare interface PopsDragConfig {
    /**
     *  是否可以按钮标题栏进行拖拽，默认false
     */
    drag?: boolean;
    /**
     * 是否限制拖拽在浏览器窗口内移动，默认true
     */
    dragLimit?: boolean;
    /**
     * 当启用dragLimit时，该参数为弹窗在窗口中的距离边际的距离，默认为3(px)
     */
    dragExtraDistance?: number;
    /**
     * （可选）拖动中的回调
     * @param moveElement 当前拖动的元素
     * @param left 当前left值
     * @param top 当前的top值
     */
    dragMoveCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
    /**
     * （可选）拖动结束的回调
     * @param moveElement 当前拖动的元素
     * @param left 当前left值
     * @param top 当前的top值
     */
    dragEndCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
}
/**
 * 通用配置
 */
declare interface PopsCommonConfig {
    /**
     * 自定义的className，默认为空
     */
    class?: string;
    /**
     * 是否是唯一的，默认false
     */
    only?: boolean;
    /**
     *  宽度，默认350px
     */
    width: string;
    /**
     *  高度，默认200px
     */
    height: string;
    /**
     * 位置，默认center
     */
    position?: PopsPosition;
    /**
     * 动画，默认pops-anim-fadein-zoom
     */
    animation?: PopsAnimation;
    /**
     * z-index显示层级，默认10000
     */
    zIndex?: number;
    /**
     * 遮罩层
     */
    mask?: PopsMaskDetails;
    /**
     * 是否禁用页面滚动，默认false
     * 
     * 暂时不会生效
     */
    forbiddenScroll?: boolean;
    /**
     * （可选）自定义style
     */
    style?: string;
    /**
     * 在元素添加到页面前的事件
     * @param $shadowRoot 根元素
     * @param $shadowContainer 容器
     */
    beforeAppendToPageCallBack?: ($shadowRoot: ShadowRoot, $shadowContainer: HTMLDivElement) => void;
}
/**
 * pops.alert
 */
declare interface PopsAlertDetails extends PopsTitleConfig, PopsContentConfig, PopsDragConfig, PopsCommonConfig {
    /**
     * 按钮配置
     */
    btn?: PopsButtonConfig["btn"] & {
        /**
         * 确定按钮
         */
        ok?: PopsButtonDetails;
    };
}

/**
 * pops.confirm
 */
declare interface PopsConfirmDetails extends PopsTitleConfig, PopsContentConfig, PopsMoreButtonConfig, PopsDragConfig, PopsCommonConfig {
}
/**
 * pops.prompt
 */
declare interface PopsPromptDetails extends PopsTitleConfig, PopsDragConfig, PopsMoreButtonConfig, PopsCommonConfig {
    /**
     * 内容配置
     */
    content: {
        /**
         * 内容文字
         */
        text: string;
        /**
         * 是否是密码
         */
        password: boolean;
        /**
         * 是否支持多行输入
         */
        row: boolean;
        /**
         * 是否自动获取焦点
         */
        focus: boolean;
        /**
         * 输入框内的提示文字
         */
        placeholder: string;
        /**
         * （可选）文字的自定义CSS
         */
        style: string;
    };
}
/**
 * pops.loading
 */
declare interface PopsLoadingDetails extends Omit<PopsCommonConfig, "width" | "height" | "position" | "beforeAppendToPageCallBack"> {
    /**
     * 父元素，默认为document.body
     */
    parent: HTMLElement;
    /**
     * 内容配置
     */
    content: Omit<PopsContentConfig["content"], "html"> & {
        /**
         * 图标
         */
        icon: string;
    };
    /**
     * （可选）添加主CSS，默认为true，当页面中存在anim覆盖时，可能会有一些样式问题，取消添加该CSS即可解决
     */
    addIndexCSS?: boolean;
}
/**
 * pops.iframe
 */
declare interface PopsIframeDetails extends PopsTitleConfig, PopsDragConfig, PopsCommonConfig {
    /**
     * 加载配置
     */
    loading: {
        /**
         * 是否启用加载中的loading
         */
        enable: boolean;
        /**
         * 是否启用loading图标
         */
        icon: boolean;
        /**
         * 文字
         */
        text: string;
    };
    /**
     * 按钮配置
     */
    btn: {
        /**
         * 最小化
         */
        min: {
            /**
             * 点击的回调函数
             */
            callback: (event: PopsBtnIframeCallBackEvent) => void
        };
        /**
         * 最大化
         */
        max: {
            /**
             * 点击的回调函数
             */
            callback: (event: PopsBtnIframeCallBackEvent) => void
        };
        /**
         * 窗口化
         */
        mise: {
            /**
             * 点击的回调函数
             */
            callback: (event: PopsBtnIframeCallBackEvent) => void
        };
        /**
         * 关闭
         */
        close: {
            /**
             * 点击的回调函数
             */
            callback: (event: PopsBtnIframeCallBackEvent) => void
        };
    };
    /**
     * 加载的地址，默认为window.location.href
     */
    url?: string;
    /**
     * 右上角按钮顺序：最小化、最大化、窗口化、关闭
     */
    topRightButton: "min|max|mise|close";
    /**
     * 是否启用沙箱，默认false
     */
    sandbox?: boolean;
    /**
     * 加载完毕的回调
     * @param eventDetails
     */
    loadEndCallBack?: (eventDetails: PopsEventDetails) => void;
}
/**
 * pops.tooltip
 */
declare interface PopsToolTipDetails {
    /**
     * 目标元素
     */
    target: HTMLElement;
    /**
     * 显示的文字
     */
    content: string;
    /**
     * 位置，默认top
     */
    position: PopsTextAlign;
    /**
     * 自定义className，默认为空
     */
    className: string;
    /**
     * 是否总是显示，默认为false
     * + true 设置的triggerShowEventName、triggerCloseEventName将无效
     *        返回提供show和close函数，取消on和off
     * + false 返回提供on和off，取消close函数
     */
    alwaysShow: boolean;
    /**
     * 触发显示事件的名称，默认mouseenter touchstart，如果是多个事件，按空格分割
     */
    triggerShowEventName: string;
    /**
     * 触发关闭事件的名称，默认mouseleave touchend，如果是多个事件，按空格分割
     */
    triggerCloseEventName: string;
    /**
     * z-index，默认10000
     */
    zIndex: number;
    /**
     * 是否唯一，默认false
     */
    only: boolean;
    /**
     * 监听的事件配置
     */
    eventOption: AddEventListenerOptions,
    /**
     * 触发显示前的回调
     * 返回值为false可阻止显示
     */
    showBeforeCallBack: () => boolean | void;
    /**
     * 触发显示后的回调
     */
    showAfterCallBack: (toolTipElement: HTMLElement) => void;
    /**
     * 触发关闭前的回调
     * 返回值为false可阻止关闭
     */
    closeBeforeCallBack: (toolTipElement: HTMLElement) => boolean | void;
    /**
     * 触发关闭后的回调
     */
    closeAfterCallBack: (toolTipElement: HTMLElement) => void;
    /**
     * 箭头与目标的的距离，默认12.5(px)
     */
    arrowDistance: number;
    /**
     * 其它的距离，默认0(px)
     * + 当position为left或者right，这个距离是上、下距离
     * + 当position为top或者bottom，这个距离是左、右距离
     */
    otherDistance: number;
    /**
     * （可选）自定义style
     */
    style?: string;
    /**
     * 在元素添加到页面前的事件
     * 
     * 当tooltip添加到ShadowRoot内时也会触发
     * @param $shadowRoot 根元素
     * @param $shadowContainer 容器
     */
    beforeAppendToPageCallBack: ($shadowRoot: ShadowRoot, $shadowContainer: HTMLDivElement) => void;
}
/**
 * pops.drawer
 */
declare interface PopsDrawerDetails extends PopsContentConfig, PopsMoreButtonConfig, Omit<PopsCommonConfig, "width" | "height" | "position" | "animation"> {
    /**
     * 标题
     */
    title: PopsTitleConfig & {
        /**
         * 是否启用，默认true
         */
        enable: boolean;
    };
    /**
     * 打开的方向，默认为right
     */
    direction: "top" | "bottom" | "left" | "right";
    /**
     * 窗体的大小; 当使用 number 类型时; 以像素为单位，默认为30%
     */
    size: string | number;
    /**
     * 是否在 Drawer 出现时将 body 滚动锁定，默认为false
     */
    lockScroll: boolean;
    /**
     * 是否可以通过按下 ESC 关闭 Drawer，默认为true
     */
    closeOnPressEscape: boolean;
    /**
     * 打开的延时时间，单位毫秒，默认为0
     */
    openDelay: number;
    /**
     * 关闭的延时时间，单位毫秒，默认为0
     */
    closeDelay: number;
    /**
     * border-radius，根据direction自动适应，默认为5
     */
    borderRadius: number;
}
/**
 * pops.folder
 */
declare interface PopsFolderDetails extends PopsTitleConfig, PopsDragConfig, PopsMoreButtonConfig, PopsCommonConfig {
    /**
     * 排序
     */
    sort: {
        /**
         * 比较的名字，默认为fileName
         */
        name: "fileName" | "fileSize" | "latestTime";
        /**
         * 是否降序，默认false（升序）
         */
        isDesc: boolean;
        /**
         * 触发排序的回调，如果返回true，则中止内部的排序
         */
        callback: (targert: HTMLElement, event: PointerEvent, sortName: "fileName" | "fileSize" | "latestTime", sortDesc: boolean) => boolean;
    },
    /**
     * 文件夹信息
     */
    folder: PopsFolderDataConfig[];
}
/**
 * pops.panel
 */
declare interface PopsPanelDetails extends PopsTitleConfig, PopsDragConfig, PopsCommonConfig {
    /**
     * 内容配置
     */
    content: PopsPanelContentConfig[];
    /**
     * 按钮配置
     */
    btn?: {
        /**
         * 右上角的关闭按钮
         */
        close?: PopsHeaderCloseButtonDetails;
    };
    /**
     * 移动端适配的的className，默认为pops-panel-is-mobile
     */
    mobileClassName?: string;
    /**
     * 是否强制是移动端，默认false
     * + true 强制为移动端
     * + false 自动根据UA判断是否是移动端
     */
    isMobile?: boolean;
}
/**
 * pops.rightClickMenu
 */
declare interface PopsRightClickMenuDetails {
    /**
     * 目标，默认为document.documentElement
     */
    target?: HTMLElement | undefined;
    /**
     * 目标的子元素选择器，默认为空
     */
    targetSelector: string | null;
    /**
     * 右键菜单数据
     */
    data: PopsRightClickMenuDataDetails[];
    /**
     * 自定义className，默认为空
     */
    className?: string | undefined;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only?: boolean | undefined;
    /**
     * 是否启用动画，默认true
     */
    isAnimation: boolean;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex?: number | undefined;
    /**
     * 是否阻止默认contextmenu事件
     */
    preventDefault?: boolean | undefined;
    /**
     * （可选）自定义style
     */
    style?: string;
    /**
     * 在元素添加到页面前的事件
     * @param $shadowRoot 根元素
     * @param $shadowContainer 容器
     */
    beforeAppendToPageCallBack: ($shadowRoot: ShadowRoot, $shadowContainer: HTMLDivElement) => void;
}

/**
 * config.data
 */
declare interface PopsSearchSuggestionData extends NestedObjectWithToString {
    /**
     * 存储的值
     */
    value: any;
    /**
     * li元素的html
     */
    text: string;
}
/**
 * 搜索建议悬浮窗
 * pops.searchSuggestion
 */
declare interface PopsSearchSuggestionDetails {
    /**
     * 当前的环境，可以是document，可以是shadowroot，默认是document
     */
    selfDocument?: Document,
    /**
     * 目标元素，一般是跟随它的位置变化，监听它的focus/click
     */
    target: HTMLElement;
    /**
     * 目标input元素，监听它的focus/click/input事件
     */
    inputTarget?: HTMLInputElement;
    /**
     * 数据
     */
    data: PopsSearchSuggestionData[];
    /**
     * 右边的删除按钮图标
     */
    deleteIcon?: {
        /**
         * 是否启用，默认true
         */
        enable?: boolean;
        /**
         * 点击回调
         */
        callback?: (event: PointerEvent, liElement: HTMLLIElement, data: PopsSearchSuggestionData) => void;
    };
    /**
     * 自定义的className
     */
    className?: string;
    /**
     * position是否使用absolut，默认true
     */
    isAbsolute?: boolean;
    /**
     * 是否启用动画，默认true
     */
    isAnimation?: true;
    /**
     * 建议框的宽度，默认250px
     */
    width?: string;
    /**
     * 是否和config.target的宽度同步，默认true
     */
    followTargetWidth?: true;
    /**
     * 建议框的最大高度，默认300px
     */
    maxHeight?: string;
    /**
     * 建议框距离元素的距离，默认0
     */
    topDistance?: number;
    /**
     * 层级，默认10000
     */
    zIndex?: 10000;
    /**
     * 搜索中的提示
     */
    searchingTip?: string;
    /**
     * 没有搜索结果的提示的html
     */
    toSearhNotResultHTML?: string;
    /**
     * 获取每一项的html
     */
    getItemHTML: (item: PopsSearchSuggestionData) => string;
    /**
     * 当config.target触发input时自动调用该函数来获取数据
     * @param value 当前输入框的值
     */
    getData: (value: string) => Promise<any[]>;
    /**
     * 每一项的点击回调
     * @param event 触发的事件
     * @param liElement 每一项的元素
     * @param data config.data的数据
     */
    itemClickCallBack: (event: PointerEvent, liElement: HTMLLIElement, data: PopsSearchSuggestionData) => void;
    /**
     * （可选）自定义style
     */
    style?: string;
}

declare interface PopsSearchSuggestionResult {
    /**
     * 根元素
     */
    root: HTMLElement;
    /**
     * ul元素
     */
    hintULElement: HTMLUListElement;
    /**
     * 初始化
     */
    init: () => void;
    /**
     * 获取显示出搜索建议框的html
     */
    getSearchSelectElement: () => HTMLElement;
    /**
     * 获取显示出搜索建议框的每一项的html
     */
    getSearchItemLiElement: (item: PopsSearchSuggestionData, index: number) => HTMLElement;
    /**
     * 获取data-value值
     */
    getItemDataValue: (item: PopsSearchSuggestionData) => PopsSearchSuggestionData;
    /**
     * 设置搜索建议框每一项的点击事件
     */
    setSearchItemClickEvent: (liElement: HTMLLIElement) => void;
    /**
     * 监听输入框内容改变
     */
    setInputChangeEvent: () => void;
    /**
     * 移除输入框内容改变的监听
     */
    removeInputChangeEvent: () => void;
    /**
     * 设置显示搜索建议框的事件
     */
    setShowEvent: () => void;
    /**
     * 移除显示搜索建议框的事件
     */
    removeShowEvent: () => void;
    /**
     * 设置隐藏搜索建议框的事件
     */
    setHideEvent: () => void;
    /**
     * 移除隐藏搜索建议框的事件
     */
    removeHideEvent: () => void;
    /**
     * 设置所有监听
     */
    setAllEvent: () => void;
    /**
     * 移除所有监听
     */
    removeAllEvent: () => void;
    /**
     * 获取删除按钮的html
     */
    getDeleteIconHTML: (size: number, fill: string) => void;
    /**
     * 设置当前正在搜索中的提示
     */
    setPromptsInSearch: () => void;
    /**
     * 移除正在搜索中的提示
     */
    removePromptsInSearch: () => void;
    /**
     * 清空所有的搜索结果
     */
    clearAllSearchItemLi: () => void;
    /**
     * 修改搜索建议框的位置(top、left)
     * 因为目标元素可能是动态隐藏的
     */
    changeHintULElementPosition: () => void;
    /**
     * 修改搜索建议框的width
     * 因为目标元素可能是动态隐藏的
     */
    changeHintULElementWidth: () => void;
    /**
     * 更新页面显示的搜索结果
     */
    update: (data: PopsSearchSuggestionData) => void;
    /**
     * 清空当前的搜索结果并显示无结果
     */
    clear: () => void;
    /**
     * 隐藏搜索建议框
     */
    hide: () => void;
    /**
     * 显示搜索建议框
     */
    show: () => void;
}

declare interface PopsCallResult {
    /** 唯一标识id */
    guid: string;
    /** 影子元素 */
    $shadowContainer: HTMLDivElement;
    /** 影子元素的根节点 */
    $shadowRoot: ShadowRoot;
    /** 元素 */
    element: HTMLDivElement;
    /** 动画层元素 */
    animElement: HTMLDivElement;
    /** pops元素 */
    popsElement: HTMLDivElement;
    /** 遮罩层元素 */
    maskElement?: HTMLDivElement;
    /** 关闭弹窗 */
    close(): void;
    /** 隐藏弹窗 */
    hide(): void;
    /** 显示弹窗 */
    show(): void;
}

declare interface PopsLayerConfig {
    /** 固定id */
    guid: string;
    /** 动画元素 */
    animElement: HTMLDivElement;
    /** 主元素 */
    popsElement: HTMLDivElement;
    /** 遮罩层元素 */
    maskElement?: HTMLDivElement;

}

declare interface PopsLayerCommonConfig extends PopsLayerConfig {
    /** shadow容器 */
    $shadowContainer: HTMLDivElement;
    /** shadow容器的shandowRoot */
    $shadowRoot: ShadowRoot;
}

interface PopsConfigCssText {
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
    /** pops.alert 弹窗的CSS */
    alertCSS: string;
    /** pops.confirm 弹窗的CSS */
    confirmCSS: string;
    /** pops.prompt 弹窗的CSS */
    promptCSS: string;
    /** pops.loading 弹窗的CSS */
    loadingCSS: string;
    /** pops.iframe 弹窗的CSS */
    iframeCSS: string;
    /** pops.drawer 弹窗的CSS */
    drawerCSS: string;
    /** pops.folder 弹窗的CSS */
    folderCSS: string;
    /** pops.panel 弹窗的CSS */
    panelCSS: string;
    /** pops.tooltip 弹窗的CSS */
    tooltipCSS: string;
}

interface PopsConfig {
    /** 版本号 */
    version: string;
    cssText: PopsConfigCssText;
}
