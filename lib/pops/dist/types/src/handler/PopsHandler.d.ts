import type { PopsAlertDetails } from "../components/alert/indexType";
import type { PopsConfirmDetails } from "../components/confirm/indexType";
import type { PopsDrawerDetails } from "../components/drawer/indexType";
import type { PopsFolderDetails } from "../components/folder/indexType";
import type { PopsIframeDetails } from "../components/iframe/indexType";
import type { PopsLoadingDetails } from "../components/loading/indexType";
import type { PopsPanelDetails } from "../components/panel/indexType";
import type { PopsPromptDetails } from "../components/prompt/indexType";
import { PopsEventDetails, PopsHandlerEventDetails } from "../types/event";
import { PopsLayerCommonConfig } from "../types/layer";
import type { PopsAllDetails, PopsLayerMode, PopsMode, PopsType } from "../types/main";
export declare const PopsHandler: {
    /**
     * 创建shadow
     */
    handlerShadow(): {
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot;
    };
    /**
     * 处理初始化
     * @param $shadowRoot 所在的shadowRoot
     * @param cssText 添加进ShadowRoot的CSS
     */
    handleInit($shadowRoot?: ShadowRoot, cssText?: string | string[]): void;
    /**
     * 处理遮罩层
     * @param details 传递的配置
     */
    handleMask(details?: {
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
     * @param {HTMLDivElement} animElement
     * @param type
     */
    handleQueryElement(animElement: HTMLDivElement, type: PopsType): {
        /**
         * 主元素
         */
        popsElement: HTMLDivElement;
        /**
         * 确认按钮
         */
        btnOkElement: HTMLDivElement;
        /**
         * 取消按钮
         */
        btnCancelElement: HTMLDivElement;
        /**
         * 其它按钮
         */
        btnOtherElement: HTMLDivElement;
        /**
         * 标题元素
         */
        titleElement: HTMLDivElement;
        /**
         * 输入框元素
         */
        inputElement: HTMLInputElement | HTMLTextAreaElement;
        /**
         * 顶部按钮控制层元素
         */
        headerControlsElement: HTMLDivElement;
        /**
         * iframe元素
         */
        iframeElement: HTMLIFrameElement;
        /**
         * 加载中元素
         */
        loadingElement: HTMLDivElement;
        /**
         * 内容元素
         */
        contentElement: HTMLDivElement;
        /**
         * 内容侧边栏容器元素
         */
        contentAsideElement: HTMLDivElement;
        /**
         * 内容主要区域容器元素
         */
        contentSectionContainerElement: HTMLDivElement;
        /**
         * 内容加载中元素
         */
        contentLoadingElement: HTMLDivElement;
        /**
         * 顶部缩小按钮
         */
        headerMinBtnElement: HTMLDivElement;
        /**
         * 顶部放大按钮
         */
        headerMaxBtnElement: HTMLDivElement;
        /**
         * 顶部恢复原样按钮
         */
        headerMiseBtnElement: HTMLDivElement;
        /**
         * 顶部关闭按钮
         */
        headerCloseBtnElement: HTMLDivElement;
        /**
         * 文件夹列表元素
         */
        folderListElement: HTMLDivElement;
        /**
         * 文件夹列表顶部元素
         */
        folderListHeaderElement: HTMLDivElement;
        /**
         * 文件夹列表行元素
         */
        folderListHeaderRowElement: HTMLTableRowElement;
        /**
         * 文件夹列表tbody元素
         */
        folderListBodyElement: HTMLTableElement;
        /**
         * 文件夹列表primary元素
         */
        folderFileListBreadcrumbPrimaryElement: HTMLDivElement;
        /**
         * 文件夹排序按钮-文件名
         */
        folderListSortFileNameElement: HTMLDivElement;
        /**
         * 文件夹排序按钮-修改时间
         */
        folderListSortLatestTimeElement: HTMLDivElement;
        /**
         * 文件夹排序按钮-文件大小
         */
        folderListSortFileSizeElement: HTMLDivElement;
    };
    /**
     * 获取事件配置
     * @param guid
     * @param $shadowContainer
     * @param $shadowRoot
     * @param mode 当前弹窗类型
     * @param animElement 动画层
     * @param popsElement 主元素
     * @param maskElement 遮罩层
     * @param config 当前配置
     */
    handleEventDetails(guid: string, $shadowContainer: HTMLDivElement, $shadowRoot: ShadowRoot, mode: PopsLayerMode, animElement: HTMLDivElement, popsElement: HTMLDivElement, maskElement: HTMLDivElement, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails): PopsEventDetails;
    /**
     * 获取loading的事件配置
     * @param guid
     * @param mode 当前弹窗类型
     * @param animElement 动画层
     * @param popsElement 主元素
     * @param maskElement 遮罩层
     * @param config 当前配置
     */
    handleLoadingEventDetails(guid: string, mode: "loading", animElement: HTMLDivElement, popsElement: HTMLDivElement, maskElement: HTMLDivElement, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails): Omit<PopsEventDetails, "$shadowContainer" | "$shadowRoot">;
    /**
     * 处理返回的配置，针对popsHandler.handleEventDetails
     */
    handleResultDetails(details: any): {
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot;
        animElement: HTMLElement;
        popsElement: HTMLElement;
        maskElement: HTMLElement;
        close: () => void;
        hide: () => void;
        show: () => void;
    };
    /**
     * 处理点击事件
     * @param type 当前按钮类型
     * @param $btn 按钮元素
     * @param eventDetails 事件配置，由popsHandler.handleEventDetails创建的
     * @param callback 点击回调
     */
    handleClickEvent(type: "cancel" | "close" | "ok" | "other", $btn: HTMLElement, eventDetails: PopsEventDetails, callback: (details: PopsHandlerEventDetails, event: PointerEvent | MouseEvent) => void): void;
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
     * @param eventDetails 事件配置，由popsHandler.handleEventDetails创建的
     * @param callback 点击回调
     */
    handlePromptClickEvent(type: "ok" | "close" | "cancel" | "other", inputElement: HTMLInputElement | HTMLTextAreaElement, $btn: HTMLElement, eventDetails: PopsEventDetails, callback: (details: PopsEventDetails & {
        type: any;
        text: string;
    }, event: MouseEvent | PointerEvent) => void): void;
    /**
     * 处理config.only
     * @param type 当前弹窗类型
     * @param config 配置
     */
    handleOnly<T extends Required<PopsAllDetails[keyof PopsAllDetails]>>(type: PopsMode, config: T): T;
    /**
     * 处理把已创建的元素保存到内部环境中
     * @param type 当前弹窗类型
     * @param value
     */
    handlePush(type: PopsLayerMode, value: PopsLayerCommonConfig): void;
};
