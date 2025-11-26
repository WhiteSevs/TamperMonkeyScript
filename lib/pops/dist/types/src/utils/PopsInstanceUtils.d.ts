import type { PopsAlertConfig } from "../components/alert/types";
import type { PopsConfirmConfig } from "../components/confirm/types";
import type { PopsDrawerConfig } from "../components/drawer/types";
import type { PopsFolderConfig } from "../components/folder/types";
import type { PopsIframeConfig } from "../components/iframe/types";
import type { PopsLoadingConfig } from "../components/loading/types";
import type { PopsPanelConfig } from "../components/panel/types";
import type { PopsPromptConfig } from "../components/prompt/types/index";
import type { PopsInstGeneralConfig } from "../types/inst";
import type { PopsInstStoreType } from "../types/main";
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
     * 删除配置中对应的对象
     * @param instConfigList 配置实例列表
     * @param  guid 唯一标识
     * @param isAll 是否全部删除
     */
    removeInstance(instConfigList: PopsInstGeneralConfig[][], guid: string, isAll?: boolean): PopsInstGeneralConfig[][];
    /**
     * 隐藏
     * @param popsType
     * @param instConfigList
     * @param guid
     * @param config
     * @param $anim
     * @param $mask
     */
    hide(config: PopsAlertConfig | PopsDrawerConfig | PopsPromptConfig | PopsConfirmConfig | PopsIframeConfig | PopsLoadingConfig | PopsPanelConfig | PopsFolderConfig, popsType: PopsInstStoreType, instConfigList: PopsInstGeneralConfig[], guid: string, $anim: HTMLElement, $mask?: HTMLElement): Promise<void>;
    /**
     * 显示
     * @param popsType
     * @param instConfigList
     * @param guid
     * @param config
     * @param $anim
     * @param $mask
     */
    show(config: PopsAlertConfig | PopsDrawerConfig | PopsPromptConfig | PopsConfirmConfig | PopsIframeConfig | PopsLoadingConfig | PopsPanelConfig | PopsFolderConfig, popsType: PopsInstStoreType, instConfigList: PopsInstGeneralConfig[], guid: string, $anim: HTMLElement, $mask?: HTMLElement): Promise<void>;
    /**
     * 关闭
     * @param popsType
     * @param instConfigList
     * @param guid
     * @param config
     * @param $anim
     */
    close(config: PopsAlertConfig | PopsDrawerConfig | PopsPromptConfig | PopsConfirmConfig | PopsIframeConfig | PopsLoadingConfig | PopsPanelConfig | PopsFolderConfig, popsType: string, instConfigList: PopsInstGeneralConfig[], guid: string, $anim: HTMLElement): Promise<void>;
    /**
     * 拖拽元素
     * 说明：
     * + 元素的position为absolute或者fixed
     * + 会为元素的
     * @param $move 需要拖拽的元素
     * @param options 配置
     */
    drag($move: HTMLElement, options: {
        dragElement: HTMLElement;
        limit: boolean;
        emitClick?: boolean;
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
    sortElementListByProperty<T, R>(getBeforeValueFun: (value: T) => R, getAfterValueFun: (value: T) => R, sortByDesc?: boolean): (after_obj: T, before_obj: T) => 1 | 0 | -1;
};
