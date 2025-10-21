import type { PopsAlertDetails } from "../components/alert/types";
import type { PopsConfirmDetails } from "../components/confirm/types";
import type { PopsDrawerDetails } from "../components/drawer/types";
import type { PopsFolderDetails } from "../components/folder/types";
import type { PopsIframeDetails } from "../components/iframe/types";
import type { PopsLoadingDetails } from "../components/loading/types";
import type { PopsPanelDetails } from "../components/panel/types";
import type { PopsPromptDetails } from "../components/prompt/types/index";
import type { PopsCommonConfig } from "../types/components";
import type { PopsEventConfig, PopsHandlerEventConfig } from "../types/event";
import type { PopsInstCommonConfig } from "../types/inst";
import type { PopsInstStoreType, PopsType, PopsSupportAnimDetailsType, PopsSupportOnlyDetails } from "../types/main";
export declare const PopsHandler: {
    /**
     * 创建shadow
     */
    handlerShadow(config: Pick<PopsCommonConfig, "useShadowRoot">): {
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot;
    } | {
        $shadowContainer: HTMLDivElement;
        $shadowRoot: HTMLDivElement;
    };
    /**
     * 处理初始化
     * @param $styleParent style元素的父元素
     * @param css 添加进ShadowRoot的CSS
     */
    handleInit($styleParent?: ShadowRoot | HTMLElement, css?: string | string[] | {
        name?: string;
        css: string;
    }[]): void;
    /**
     * 处理遮罩层
     *
     * + 设置遮罩层的点击事件
     * @param config 传递的配置
     */
    handleMask(config?: {
        type: "alert" | "confirm" | "prompt" | "loading" | "iframe" | "drawer" | "folder" | "panel";
        guid: string;
        config: Required<PopsAlertDetails> | Required<PopsLoadingDetails> | Required<PopsIframeDetails> | Required<PopsDrawerDetails> | Required<PopsPanelDetails> | Required<PopsFolderDetails>;
        animElement: HTMLElement;
        maskHTML: string;
    }): {
        maskElement: HTMLDivElement;
    };
    /**
     * 处理获取元素
     * @param animElement
     * @param type
     */
    handleQueryElement(animElement: HTMLDivElement, type: PopsSupportAnimDetailsType): {
        /**
         * 主元素
         */
        $pops: HTMLDivElement;
        /**
         * 确认按钮
         */
        $btnOk: HTMLDivElement;
        /**
         * 取消按钮
         */
        $btnCancel: HTMLDivElement;
        /**
         * 其它按钮
         */
        $btnOther: HTMLDivElement;
        /**
         * 标题元素
         */
        $title: HTMLDivElement;
        /**
         * 输入框元素
         */
        $input: HTMLInputElement | HTMLTextAreaElement;
        /**
         * 顶部按钮控制层元素
         */
        $headerControls: HTMLDivElement;
        /**
         * iframe元素
         */
        $iframe: HTMLIFrameElement;
        /**
         * 加载中元素
         */
        $loading: HTMLDivElement;
        /**
         * 内容元素
         */
        $content: HTMLDivElement;
        /**
         * panel的右侧容器元素
         */
        $panelRightSectionWrapper: HTMLDivElement;
        /**
         * panel侧边栏容器元素
         */
        $panelLeftAside: HTMLDivElement;
        /**
         * panel主要区域容器元素
         */
        $panelContentSectionContainer: HTMLDivElement;
        /**
         * panel底部区域
         */
        $panelBottomWrapper: HTMLElement;
        /**
         * panel底部区域容器
         */
        $panelBottomContainer: HTMLElement;
        /**
         * panel底部区域左侧容器
         */
        $panelBottomLeftContainer: HTMLElement;
        /**
         * panel底部区域右侧容器
         */
        $panelBottomRightContainer: HTMLElement;
        /**
         * 内容加载中元素
         */
        $contentLoading: HTMLDivElement;
        /**
         * 顶部缩小按钮
         */
        $headerBtnMin: HTMLDivElement;
        /**
         * 顶部放大按钮
         */
        $headerBtnMax: HTMLDivElement;
        /**
         * 顶部恢复原样按钮
         */
        $headerBtnMise: HTMLDivElement;
        /**
         * 顶部关闭按钮
         */
        $headerBtnClose: HTMLDivElement;
        /**
         * 文件夹列表元素
         */
        $folderList: HTMLDivElement;
        /**
         * 文件夹列表顶部元素
         */
        $folderHeaderNav: HTMLDivElement;
        /**
         * 文件夹列表行元素
         */
        $folderHeaderRow: HTMLTableRowElement;
        /**
         * 文件夹列表tbody元素
         */
        $folderTbody: HTMLTableElement;
        /**
         * 文件夹列表primary元素
         */
        $folderHeaderBreadcrumbPrimary: HTMLDivElement;
        /**
         * 文件夹排序按钮-文件名
         */
        $folderSortFileName: HTMLDivElement;
        /**
         * 文件夹排序按钮-修改时间
         */
        $folderSortLatestTime: HTMLDivElement;
        /**
         * 文件夹排序按钮-文件大小
         */
        $folderSortFileSize: HTMLDivElement;
    };
    /**
     * 获取事件配置
     * @param guid
     * @param $shadowContainer
     * @param $shadowRoot
     * @param mode 当前弹窗类型
     * @param $anim 动画层
     * @param $pops 主元素
     * @param $mask 遮罩层
     * @param config 当前配置
     */
    handleEventConfig(config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, guid: string, $shadowContainer: HTMLDivElement, $shadowRoot: ShadowRoot | HTMLElement, mode: PopsInstStoreType, $anim: HTMLDivElement, $pops: HTMLDivElement, $mask?: HTMLDivElement): PopsEventConfig;
    /**
     * 获取loading的事件配置
     * @param guid
     * @param mode 当前弹窗类型
     * @param $anim 动画层
     * @param $pops 主元素
     * @param $mask 遮罩层
     * @param config 当前配置
     */
    handleLoadingEventConfig(config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, guid: string, mode: "loading", $anim: HTMLDivElement, $pops: HTMLDivElement, $mask?: HTMLDivElement): Omit<PopsEventConfig, "$shadowContainer" | "$shadowRoot">;
    /**
     * 处理返回的配置，针对popsHandler.handleEventConfig
     * @param config 配置
     */
    handleResultConfig<T>(config: T): Omit<T, "type" | "function">;
    /**
     * 处理点击事件
     * @param type 当前按钮类型
     * @param $btn 按钮元素
     * @param eventConfig 事件配置，由popsHandler.handleEventConfig创建的
     * @param callback 点击回调
     */
    handleClickEvent(type: PopsHandlerEventConfig["type"], $btn: HTMLElement, eventConfig: PopsEventConfig, callback?: (details: PopsHandlerEventConfig, event: PointerEvent | MouseEvent) => void): void;
    /**
     * 全局监听键盘事件
     * @param keyName 键名|键值
     * @param otherKeyList 组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
     * @param callback 回调函数
     */
    handleKeyboardEvent(keyName: string | number, otherKeyList: string[] | undefined, callback: (event: KeyboardEvent) => void): {
        removeKeyboardEvent(): void;
    };
    /**
     * 处理prompt的点击事件
     * @param type 触发事件类型
     * @param inputElement 输入框
     * @param  $btn 按钮元素
     * @param eventConfig 事件配置，由popsHandler.handleEventConfig创建的
     * @param callback 点击回调
     */
    handlePromptClickEvent(type: PopsHandlerEventConfig["type"], inputElement: HTMLInputElement | HTMLTextAreaElement, $btn: HTMLElement, eventConfig: PopsEventConfig, callback: (details: PopsEventConfig & {
        type: any;
        text: string;
    }, event: MouseEvent | PointerEvent) => void): void;
    /**
     * 把配置的z-index配置转为数字
     * @param zIndex
     */
    handleZIndex(zIndex: number | (() => number)): number;
    /**
     * 处理config.only
     * @param type 当前弹窗类型
     * @param config 配置
     */
    handleOnly<T extends Required<PopsSupportOnlyDetails[keyof PopsSupportOnlyDetails]>>(type: PopsType, config: T): T;
    /**
     * 处理把已创建的元素保存到内部环境中
     * @param type 当前弹窗类型
     * @param value
     */
    handlePush(type: PopsInstStoreType, value: PopsInstCommonConfig): void;
};
