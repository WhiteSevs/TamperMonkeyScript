import type { PopsAlertDetails } from "../components/alert/indexType";
import type { PopsConfirmDetails } from "../components/confirm/indexType";
import type { PopsDrawerDetails } from "../components/drawer/indexType";
import type { PopsFolderDetails } from "../components/folder/indexType";
import type { PopsIframeDetails } from "../components/iframe/indexType";
import type { PopsLoadingDetails } from "../components/loading/indexType";
import type { PopsPanelDetails } from "../components/panel/indexType";
import type { PopsPromptDetails } from "../components/prompt/indexType";
import type { PopsLayerCommonConfig } from "../types/layer";
import type { PopsLayerMode } from "../types/main";
export declare const PopsInstanceUtils: {
    /**
     * 获取页面中最大的z-index的元素信息
     * @param deviation 获取最大的z-index值的偏移，默认是+1
     * @param node 进行判断的元素，默认是document
     * @param ignoreCallBack 执行元素处理时调用的函数，返回false可忽略不想要处理的元素
     * @example
     * Utils.getMaxZIndexNodeInfo();
     * > {
     *   node: ...,
     *   zIndex: 1001
     * }
     **/
    getMaxZIndexNodeInfo(deviation?: number, target?: Element | ShadowRoot | Document, ignoreCallBack?: ($ele: Element | HTMLElement | ShadowRoot) => boolean | void): {
        node: Element;
        zIndex: number;
    };
    /**
     * 获取pops所有弹窗中的最大的z-index
     * @param deviation
     */
    getPopsMaxZIndex(deviation?: number): {
        zIndex: number;
        animElement: HTMLDivElement | null;
        isOverMaxZIndex: boolean;
    };
    /**
     * 获取页面中最大的z-index
     * @param deviation 获取最大的z-index值的偏移，默认是+1
     * @example
     * getMaxZIndex();
     * > 1001
     **/
    getMaxZIndex(deviation?: number): number;
    /**
     * 获取CSS Rule
     * @param sheet
     * @returns
     */
    getKeyFrames(sheet: CSSStyleSheet): {};
    /**
     * 删除配置中对应的对象
     * @param moreLayerConfigList 配置实例列表
     * @param  guid 唯一标识
     * @param isAll 是否全部删除
     */
    removeInstance(moreLayerConfigList: PopsLayerCommonConfig[][], guid: string, isAll?: boolean): PopsLayerCommonConfig[][];
    /**
     * 隐藏
     * @param popsType
     * @param layerConfigList
     * @param guid
     * @param config
     * @param animElement
     * @param maskElement
     */
    hide(popsType: PopsLayerMode, layerConfigList: PopsLayerCommonConfig[], guid: string, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, animElement: HTMLElement, maskElement: HTMLElement): void;
    /**
     * 显示
     * @param popsType
     * @param layerConfigList
     * @param guid
     * @param config
     * @param animElement
     * @param maskElement
     */
    show(popsType: PopsLayerMode, layerConfigList: PopsLayerCommonConfig[], guid: string, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, animElement: HTMLElement, maskElement: HTMLElement): void;
    /**
     * 关闭
     * @param popsType
     * @param layerConfigList
     * @param guid
     * @param config
     * @param animElement
     */
    close(popsType: string, layerConfigList: PopsLayerCommonConfig[], guid: string, config: PopsAlertDetails | PopsDrawerDetails | PopsPromptDetails | PopsConfirmDetails | PopsIframeDetails | PopsLoadingDetails | PopsPanelDetails | PopsFolderDetails, animElement: HTMLElement): void;
    /**
     * 拖拽元素
     * 说明：
     * + 元素的position为absolute或者fixed
     * + 会为元素的
     * @param moveElement 需要拖拽的元素
     * @param options 配置
     */
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
    /**
     * 排序数组
     * @param getBeforeValueFun
     * @param getAfterValueFun
     * @param sortByDesc 排序是否降序，默认降序
     */
    sortElementListByProperty<T extends unknown, R>(getBeforeValueFun: (value: T) => R, getAfterValueFun: (value: T) => R, sortByDesc?: boolean): (after_obj: T, before_obj: T) => 1 | 0 | -1;
};
