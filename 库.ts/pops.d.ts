/**
 * 动画
 */
type PopsAnimation = "pops-anim-spread" |
    "pops-anim-shake" |
    "pops-anim-rolling-left" |
    "pops-anim-rolling-right" |
    "pops-anim-slide-top" |
    "pops-anim-slide-bottom" |
    "pops-anim-slide-left" |
    "pops-anim-slide-right" |
    "pops-anim-fadein" |
    "pops-anim-fadein-zoom" |
    "pops-anim-fadein-alert" |
    "pops-anim-don" |
    "pops-anim-roll" |
    "pops-anim-sandra" |
    "pops-anim-gather"
/**
 * 弹窗位置
 */
type PopsPosition = "top_left" |
    "top" |
    "top_right" |
    "center_left" |
    "center" |
    "center_right" |
    "bottom_left" |
    "bottom" |
    "bottom_right"
/**
 * 按钮svg图标
 */
type PopsIcon = "min" |
    "mise" |
    "max" |
    "close" |
    "edit" |
    "share" |
    "delete" |
    "search" |
    "upload" |
    "loading" |
    "next" |
    "prev" |
    "eleme" |
    "elemePlus" |
    "chromeFilled" |
    "cpu" |
    "videoPlay" |
    "videoPause" |
    "headset" |
    "monitor" |
    "documentCopy" |
    "picture" |
    "circleClose" |
    "view" |
    "hide" |
    "keyboard"
/**
* 按钮类型
*/
type PopsButtonType = "close" | "ok" | "cancel" | "other"
/**
 * 按钮样式类型
 */
type PopsButtonStyleType = "default" |
    "primary" |
    "xiaomi-primary" |
    "success" |
    "info" |
    "warning" |
    "danger"
/**
 * 按钮位置
 */
type PopsJustifyContent = "center" |
    "end" |
    "flex-end" |
    "flex-start" |
    "left" |
    "normal" |
    "right" |
    "space-around" |
    "space-between" |
    "space-evenly" |
    "start" |
    "stretch" |
    "inherit" |
    "initial" |
    "revert" |
    "revert-layer" |
    "unset"
/**
 * text-align
 */
type PopsTextAlign = "center" |
    "end" |
    "justify" |
    "left" |
    "right" |
    "start" |
    "-webkit-auto" |
    "-moz-center-or-inherit" |
    "-webkit-center" |
    "-moz-center" |
    "-webkit-left" |
    "-moz-left" |
    "-webkit-match-parent" |
    "-webkit-right" |
    "-moz-right" |
    "inherit" |
    "initial" |
    "revert" |
    "revert-layer" |
    "unset"

type PopsPanelFormsDetailsArray = Array<PopsPanelSwitchDetails | PopsPanelSliderDetails | PopsPanelInputDetails | PopsPanelTextAreaDetails | PopsPanelSelectDetails | PopsPanelButtonDetails | PopsPanelOwnDetails>

/**
 * 现有的pops.xxx的类型
 */
type PopsMode = "alert" |
    "confirm" |
    "prompt" |
    "loading" |
    "iframe" |
    "tooltip" |
    "drawer" |
    "folder" |
    "panel" |
    "rightClickMenu"

/**
 * 按钮大小
 */
type PopsButtonSize = "large" | "small"


/**
 * 遮罩层配置
 */
declare interface PopsMaskDetails {
    /**
     * 是否启用
     */
    enable: boolean;
    clickEvent: {
        /**
         * 点击遮罩层是否触发关闭事件
         */
        toClose: boolean;
        /**
         * 点击遮罩层是否触发隐藏事件
         */
        toHide: boolean;
    };
    /**
     * 遮罩层自定义的点击事件
     * @param originalRun 当toClose为true，它是关闭弹窗，当toHide为true，它是隐藏弹窗
     * @param config 配置信息
     */
    clickCallBack: (originalRun: () => void, config: PopsAlertDetails | PopsDrawerDetails | PopsIframeDetails | PopsPromptDetails | PopsFolderDetails | PopsLoadingDetails | PopsPanelDetails) => void
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
    close: () => void;
    /**
     * 隐藏弹窗
     */
    hide: () => void;
    /**
     * 显示弹窗
     */
    show: () => void;
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
     * 遮罩层元素
     */
    maskElement: HTMLElement | undefined;
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
     * 遮罩层元素
     */
    maskElement: HTMLElement | undefined;
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
    close: () => void;
    /**
     * 隐藏弹窗
     */
    hide: () => void;
    /**
     * 显示弹窗
     */
    show: () => void;
    /**
     * 输入的内容
     */
    text: string;
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
    callback: (event: PopsBtnCallBackEvent) => void;
}

/**
 * 顶部关闭按钮配置
 */
declare interface PopsHeaderCloseButtonDetails {
    /**
     * 是否启用按钮
     */
    enable: boolean;
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
    callback: (event: PopsPromptBtnCallBackEvent) => void;
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
    config: object;
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
    clickEvent: (event: Event, config: PopsFolderDataConfig) => Promise<{ autoDownload: boolean, url: string, mode: "a" | "aBlank" | "iframe" | "open" | "openBlank" }> | null;
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
     * 中间顶部的标题
     */
    headerTitle?: string | undefined;
    /**
     * 内容高度是否自动适应（与headerTitle的高度有关）
     */
    autoAdaptionContentHeight?: string | undefined;
    /**
     * 是否是默认的，指打开弹窗的先显示出来的内容
     */
    isDefault?: boolean | undefined;
    /**
     * 自定义元素属性
     */
    attributes?: object[] | object;
    /**
     * 自定义属性
     */
    props?: HTMLElement | undefined;
    /**
     * 子配置
     */
    forms: PopsPanelFormsDetailsArray;
}
/**
 * pops.panel的 forms
 */
declare interface PopsPanelFormsDetails {
    /**
     * className属性
     */
    className: string | null;
    /**
     * 自定义元素属性
     */
    attributes: object | null;
    /**
     * 自定义属性
     */
    props: HTMLElement | null;
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
    forms: PopsPanelFormsDetailsArray;
}
/**
 * pops.panel的 switch
 */
declare interface PopsPanelSwitchDetails {
    /**
     * className属性
     */
    className: string | null;
    /**
     * 自定义元素属性
     */
    attributes: object | null;
    /**
     * 自定义属性
     */
    props: HTMLElement | null;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * 左边的文字下面的描述，可为空
     */
    description: string | undefined;
    /**
     * 类型
     */
    type: "switch";
    /**
     * 获取该项的值的回调函数
     */
    getValue: () => boolean;
    /**
     * switch开启/关闭触发的回调函数
     */
    callback: (event: Event, value: boolean) => void;
}
/**
 * pops.panel的 slider
 */
declare interface PopsPanelSliderDetails {
    /**
     * className属性
     */
    className: string | null;
    /**
     * 自定义元素属性
     */
    attributes: object | null;
    /**
     * 自定义属性
     */
    props: HTMLElement | null;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * 左边的文字下面的描述，可为空
     */
    description: string | undefined;
    /**
     * 类型
     */
    type: "slider";
    /**
     * 获取该项的值的回调函数
     */
    getValue: () => number;
    /**
     * 滑块的值改变触发的回调函数
     */
    callback: (event: Event, value: number) => void;
    /**
     * 获取tooltip的提示内容，可自定义，默认为slider的值
     */
    getToolTipContent: (value: number) => string;
    /**
     * 滑块的最小值
     */
    min: number;
    /**
     * 滑块的最大值
     */
    max: number;
    /**
     * 每次滑动的间隔值
     */
    step: number | null;
}
/**
 * pops.panel的 input
 */
declare interface PopsPanelInputDetails {
    /**
     * className属性
     */
    className: string | null;
    /**
     * 自定义元素属性
     */
    attributes: object | null;
    /**
     * 自定义属性
     */
    props: HTMLElement | null;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * 左边的文字下面的描述，可为空
     */
    description: string | undefined;
    /**
     * 类型
     */
    type: "input";
    /**
     * 获取该项的值的回调函数
     */
    getValue: () => string;
    /**
     * 输入框的值改变触发的回调函数
     */
    callback: (event: Event, value: string) => void;
    /**
     * 输入框内的提示
     */
    placeholder: string;
    /**
     * 是否是密码框
     */
    isPassword: boolean;
    /**
     * 是否是数字框
     */
    isNumber: boolean;
}
/**
 * pops.panel的 textarea
 */
declare interface PopsPanelTextAreaDetails {
    /**
     * className属性
     */
    className: string | null;
    /**
     * 自定义元素属性
     */
    attributes: object | null;
    /**
     * 自定义属性
     */
    props: HTMLElement | null;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * 左边的文字下面的描述，可为空
     */
    description: string | undefined;
    /**
     * 类型
     */
    type: "textarea";
    /**
     * 获取该项的值的回调函数
     */
    getValue: () => string;
    /**
     * textarea输入框的值改变触发的回调函数
     * @param event 事件
     * @param value 当前的textarea内的值
     */
    callback: (event: Event, value: string) => void;
    /**
     * 输入框内的提示
     */
    placeholder: string;
}
/**
 * pops.panel的 select
 */
declare interface PopsPanelSelectDetails {
    /**
     * className属性
     */
    className: string | null;
    /**
     * 自定义元素属性
     */
    attributes: object | null;
    /**
     * 自定义属性
     */
    props: HTMLElement | null;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * 左边的文字下面的描述，可为空
     */
    description: string | undefined;
    /**
     * 类型
     */
    type: "select";
    /**
     * 获取该项的值的回调函数
     */
    getValue: () => string;
    /**
     * 选择器的值改变触发的回调函数
     * @param event 事件
     * @param isSelectedValue 当前选中的值，也就是元素属性上的__value__
     * @param isSelectedText 当前选中的文本
     */
    callback: (event: Event, isSelectedValue: string, isSelectedText: string) => void;
    /**
     * 选择器内的数据组
     * + value是真正的值
     * + text是显示的文字
     */
    data: {
        value: string;
        text: string;
    }[];
}
/**
 * pops.panel的 button
 */
declare interface PopsPanelButtonDetails {
    /**
     * className属性
     */
    className: string | null;
    /**
     * 自定义元素属性
     */
    attributes: object | null;
    /**
     * 自定义属性
     */
    props: HTMLElement | null;
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * 左边的文字下面的描述，可为空
     */
    description: string | undefined;
    /**
     * 类型
     */
    type: "button";
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
    buttonIcon: PopsIcon;
    /**
     * 按钮的图标在右边
     */
    buttonIsRightIcon: boolean;
    /**
     * 按钮的图标旋转
     */
    buttonIconIsLoading: boolean;
    /**
     * 点击button触发的事件
     */
    callback: (event: Event) => void;
}
/**
 * pops.panel的 own
 * 自定义的
 */
declare interface PopsPanelOwnDetails {
    /**
     * className属性
     */
    className: string | null;
    /**
     * 自定义元素属性
     */
    attributes: object | null;
    /**
     * 自定义属性
     */
    props: HTMLElement | null;
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
     * @param event 事件
     * @param contextMenuEvent contextmenu事件
     * @param liElement <li>元素
     * 
     */
    callback: (event: Event, contextMenuEvent: Event, liElement: HTMLLIElement) => boolean | undefined;
    /**
     * 子项配置
     */
    item: PopsRightClickMenuDataDetails[] | null;
}


/**
 * pops.alert
 */
declare interface PopsAlertDetails {
    /**
     * 标题配置
     */
    title: {
        /**
         * 标题文字
         */
        text: string;
        /**
         * 文字的位置
         */
        position: PopsTextAlign;
        /**
         * 文字是否是html
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
    /**
     * 内容配置
     */
    content: {
        /**
         * 内容文字
         */
        text: string;
        /**
         * 文字是否是html
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
    /**
     * 按钮配置
     */
    btn: {
        /**
         * 按钮的位置，默认left
         */
        position: PopsJustifyContent;
        /**
         * 确定按钮
         */
        ok: PopsButtonDetails;
        /**
         * 右上角的关闭按钮
         */
        close: PopsHeaderCloseButtonDetails;
    };
    /**
     * 自定义className，默认为空
     */
    class: string;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only: boolean;
    /**
     *  弹窗宽度，默认350px
     */
    width: string;
    /**
     *  弹窗高度，默认200px
     */
    height: string;
    /**
     * 弹窗位置，默认center
     */
    position: PopsPosition;
    /**
     * 弹窗动画，默认pops-anim-fadein-zoom
     */
    animation: PopsAnimation;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex: number;
    /**
     * 遮罩层
     */
    mask: PopsMaskDetails;
    /**
     *  是否可以按钮标题栏进行拖拽，默认false
     */
    drag: boolean;
    /**
     * 是否限制拖拽在浏览器窗口内移动，默认true
     */
    dragLimit: boolean;
    /**
     * 当启用dragLimit时，该参数为弹窗在窗口中的距离边际的距离，默认为3(px)
     */
    dragExtraDistance: number;
    /**
     * 是否禁用页面滚动，默认false
     */
    forbiddenScroll: boolean;
}

/**
 * pops.confirm
 */
declare interface PopsConfirmDetails {
    /**
     * 标题配置
     */
    title: {
        /**
         * 标题文字
         */
        text: string;
        /**
         * 文字的位置
         */
        position: PopsTextAlign;
        /**
         * 文字是否是html
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
    /**
     * 内容配置
     */
    content: {
        /**
         * 内容文字
         */
        text: string;
        /**
         * 文字是否是html
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
    /**
     * 按钮配置
     */
    btn: {
        /**
         * 是否合并按钮
         */
        merge: boolean;
        /**
         * 是否对合并的按钮逆反
         */
        mergeReverse: boolean;
        /**
         * 是否逆反
         */
        reverse: boolean;
        /**
         * 按钮的位置，默认left
         */
        position: PopsJustifyContent;
        /**
         * 确定按钮
         */
        ok: PopsButtonDetails;
        /**
         * 取消按钮
         */
        cancel: PopsButtonDetails;
        /**
         * 其他按钮
         */
        other: PopsButtonDetails;
        /**
         * 右上角的关闭按钮
         */
        close: PopsHeaderCloseButtonDetails;
    };
    /**
     * 自定义className，默认为空
     */
    class: string;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only: boolean;
    /**
     *  弹窗宽度，默认350px
     */
    width: string;
    /**
     *  弹窗高度，默认200px
     */
    height: string;
    /**
     * 弹窗位置，默认center
     */
    position: PopsPosition;
    /**
     * 弹窗动画，默认pops-anim-fadein-zoom
     */
    animation: PopsAnimation;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex: number;
    /**
     * 遮罩层
     */
    mask: PopsMaskDetails;
    /**
     *  是否可以按钮标题栏进行拖拽，默认false
     */
    drag: boolean;
    /**
     * 是否限制拖拽在浏览器窗口内移动，默认true
     */
    dragLimit: boolean;
    /**
     * 当启用dragLimit时，该参数为弹窗在窗口中的距离边际的距离，默认为3(px)
     */
    dragExtraDistance: number;
    /**
     * 是否禁用页面滚动，默认false
     */
    forbiddenScroll: boolean;
}
/**
 * pops.prompt
 */
declare interface PopsPromptDetails {
    /**
     * 标题配置
     */
    title: {
        /**
         * 标题文字
         */
        text: string;
        /**
         * 文字的位置
         */
        position: PopsTextAlign;
        /**
         * 文字是否是html
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
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
         * 文字的自定义CSS
         */
        style: string;
    };
    /**
     * 按钮配置
     */
    btn: {
        /**
         * 是否合并按钮
         */
        merge: boolean;
        /**
         * 是否对合并的按钮逆反
         */
        mergeReverse: boolean;
        /**
         * 是否逆反
         */
        reverse: boolean;
        /**
         * 按钮的位置，默认left
         */
        position: PopsJustifyContent;
        /**
         * 确定按钮
         */
        ok: PopsButtonDetails;
        /**
         * 取消按钮
         */
        cancel: PopsButtonDetails;
        /**
         * 其他按钮
         */
        other: PopsButtonDetails;
        /**
         * 右上角的关闭按钮
         */
        close: PopsHeaderCloseButtonDetails;
    };
    /**
     * 自定义className，默认为空
     */
    class: string;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only: boolean;
    /**
     *  弹窗宽度，默认350px
     */
    width: string;
    /**
     *  弹窗高度，默认200px
     */
    height: string;
    /**
     * 弹窗位置，默认center
     */
    position: PopsPosition;
    /**
     * 弹窗动画，默认pops-anim-fadein-zoom
     */
    animation: PopsAnimation;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex: number;
    /**
     * 遮罩层
     */
    mask: PopsMaskDetails;
    /**
     *  是否可以按钮标题栏进行拖拽，默认false
     */
    drag: boolean;
    /**
     * 是否限制拖拽在浏览器窗口内移动，默认true
     */
    dragLimit: boolean;
    /**
     * 当启用dragLimit时，该参数为弹窗在窗口中的距离边际的距离，默认为3(px)
     */
    dragExtraDistance: number;
    /**
     * 是否禁用页面滚动，默认false
     */
    forbiddenScroll: boolean;
}
/**
 * pops.loading
 */
declare interface PopsLoadingDetails {
    /**
     * 父元素，默认为document.body
     */
    parent: HTMLElement;
    /**
     * 内容配置
     */
    content: {
        /**
         * 文字
         */
        text: string;
        /**
         * 图标
         */
        icon: string;
        /**
         * 自定义CSS
         */
        style: string;
    };
    /**
     * 自定义className，默认为空
     */
    class: string;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only: boolean;
    /**
         * 弹窗动画，默认pops-anim-fadein-zoom
         */
    animation: PopsAnimation;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex: number;
    /**
     * 遮罩层
     */
    mask: PopsMaskDetails;
    /**
     * 是否禁用页面滚动，默认false
     */
    forbiddenScroll: boolean;
}
/**
 * pops.iframe
 */
declare interface PopsIframeDetails {
    /**
     * 标题配置
     */
    title: {
        /**
         * 标题文字
         */
        text: string;
        /**
         * 文字的位置
         */
        position: PopsTextAlign;
        /**
         * 文字是否是html
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
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
     * 自定义className，默认为空
     */
    class: string;
    /**
     * 加载的地址，默认为window.location.href
     */
    url?: string;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only: boolean;
    /**
     *  弹窗宽度，默认350px
     */
    width: string;
    /**
     *  弹窗高度，默认200px
     */
    height: string;
    /**
     * 弹窗位置，默认center
     */
    position: PopsPosition;
    /**
     * 弹窗动画，默认pops-anim-fadein-zoom
     */
    animation: PopsAnimation;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex: number;
    /**
     * 遮罩层
     */
    mask: PopsMaskDetails;
    /**
     *  是否可以按钮标题栏进行拖拽，默认false
     */
    drag: boolean;
    /**
     * 是否限制拖拽在浏览器窗口内移动，默认true
     */
    dragLimit: boolean;
    /**
     * 当启用dragLimit时，该参数为弹窗在窗口中的距离边际的距离，默认为3(px)
     */
    dragExtraDistance: number;
    /**
     * 是否禁用页面滚动，默认false
     */
    forbiddenScroll: boolean;
    /**
     * 右上角按钮顺序：最小化、最大化、窗口化、关闭
     */
    topRightButton: "min|max|mise|close";
    /**
     * 是否启用沙箱，默认false
     */
    sandbox?: boolean;
    loadEndCallBack?: (eventDetails: PopsEventDetails) => void
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
     * 触发显示事件的回调
     */
    triggerShowEventCallBack: (toolTipElement: HTMLElement) => void;
    /**
     * 触发关闭事件的回调
     */
    triggerCloseEventCallBack: (toolTipElement: HTMLElement) => void;
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
}
/**
 * pops.drawer
 */
declare interface PopsDrawerDetails {
    /**
     * 标题
     */
    title: {
        /**
         * 是否启用，默认true
         */
        enable: boolean;
        /**
         * 位置，默认center
         */
        position: PopsTextAlign;
        /**
         * 文字
         */
        text: string;
        /**
         * 文字是否是html，默认false
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
    /**
     * 内容
     */
    content: {
        /**
         * 文字
         */
        text: string;
        /**
         * 文字是否是html，默认false
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
    /**
     * 按钮配置
     */
    btn: {
        /**
         * 是否合并按钮
         */
        merge: boolean;
        /**
         * 是否对合并的按钮逆反
         */
        mergeReverse: boolean;
        /**
         * 是否逆反
         */
        reverse: boolean;
        /**
         * 按钮的位置，默认left
         */
        position: PopsJustifyContent;
        /**
         * 确定按钮
         */
        ok: PopsButtonDetails;
        /**
         * 取消按钮
         */
        cancel: PopsButtonDetails;
        /**
         * 其他按钮
         */
        other: PopsButtonDetails;
        /**
         * 右上角的关闭按钮
         */
        close: PopsHeaderCloseButtonDetails;
    };
    /**
     * 自定义className，默认为空
     */
    class: string;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only: boolean;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex: number;
    /**
     * 遮罩层
     */
    mask: PopsMaskDetails;
    /**
     * 是否禁用页面滚动，默认false
     */
    forbiddenScroll: boolean;
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
declare interface PopsFolderDetails {
    /**
     * 标题配置
     */
    title: {
        /**
         * 标题文字
         */
        text: string;
        /**
         * 文字的位置
         */
        position: PopsTextAlign;
        /**
         * 文字是否是html
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
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
        callback: (targert: HTMLElement, event: Event, sortName: "fileName" | "fileSize" | "latestTime", sortDesc: boolean) => boolean;
    },
    /**
     * 文件夹信息
     */
    folder: PopsFolderDataConfig[];
    /**
     * 按钮配置
     */
    btn: {
        /**
         * 是否合并按钮
         */
        merge: boolean;
        /**
         * 是否对合并的按钮逆反
         */
        mergeReverse: boolean;
        /**
         * 是否逆反
         */
        reverse: boolean;
        /**
         * 按钮的位置，默认left
         */
        position: PopsJustifyContent;
        /**
         * 确定按钮
         */
        ok: PopsButtonDetails;
        /**
         * 取消按钮
         */
        cancel: PopsButtonDetails;
        /**
         * 其他按钮
         */
        other: PopsButtonDetails;
        /**
         * 右上角的关闭按钮
         */
        close: PopsHeaderCloseButtonDetails;
    };
    /**
     * 自定义className，默认为空
     */
    class: string;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only: boolean;
    /**
     *  弹窗宽度，默认350px
     */
    width: string;
    /**
     *  弹窗高度，默认200px
     */
    height: string;
    /**
     * 弹窗位置，默认center
     */
    position: PopsPosition;
    /**
     * 弹窗动画，默认pops-anim-fadein-zoom
     */
    animation: PopsAnimation;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex: number;
    /**
     * 遮罩层
     */
    mask: PopsMaskDetails;
    /**
     *  是否可以按钮标题栏进行拖拽，默认false
     */
    drag: boolean;
    /**
     * 是否限制拖拽在浏览器窗口内移动，默认true
     */
    dragLimit: boolean;
    /**
     * 当启用dragLimit时，该参数为弹窗在窗口中的距离边际的距离，默认为3(px)
     */
    dragExtraDistance: number;
    /**
     * 是否禁用页面滚动，默认false
     */
    forbiddenScroll: boolean;
}
/**
 * pops.panel
 */
declare interface PopsPanelDetails {
    /**
     * 标题配置
     */
    title: {
        /**
         * 标题文字
         */
        text: string;
        /**
         * 文字的位置
         */
        position: PopsTextAlign;
        /**
         * 文字是否是html
         */
        html: boolean;
        /**
         * 文字的自定义CSS
         */
        style: string;
    };
    /**
     * 内容配置
     */
    content: PopsPanelContentConfig[];
    /**
     * 按钮配置
     */
    btn: {
        /**
         * 右上角的关闭按钮
         */
        close: PopsHeaderCloseButtonDetails;
    };
    /**
     * 遮罩层
     */
    mask: PopsMaskDetails;
    /**
     * 自定义className，默认为空
     */
    class: string;
    /**
     * 移动端适配的的className，默认为pops-panel-is-mobile
     */
    mobileClassName: string;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only: boolean;
    /**
      *  弹窗宽度，默认700px
      */
    width: string;
    /**
     *  弹窗高度，默认500px
     */
    height: string;
    /**
     * 弹窗位置，默认center
     */
    position: PopsPosition;
    /**
     * 弹窗动画，默认pops-anim-fadein-zoom
     */
    animation: PopsAnimation;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex: number;
    /**
     *  是否可以按钮标题栏进行拖拽，默认false
     */
    drag: boolean;
    /**
     * 是否限制拖拽在浏览器窗口内移动，默认true
     */
    dragLimit: boolean;
    /**
     * 当启用dragLimit时，该参数为弹窗在窗口中的距离边际的距离，默认为3(px)
     */
    dragExtraDistance: number;
    /**
     * 是否禁用页面滚动，默认false
     */
    forbiddenScroll: boolean;
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
}
