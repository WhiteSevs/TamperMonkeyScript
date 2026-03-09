import type { PopsAlertConfig } from "../components/alert/types";
import type { PopsConfirmConfig } from "../components/confirm/types";
import type { PopsDrawerConfig } from "../components/drawer/types";
import type { PopsFolderConfig } from "../components/folder/types";
import type { PopsIframeConfig } from "../components/iframe/types";
import type { PopsLoadingConfig } from "../components/loading/types";
import type { PopsPanelConfig } from "../components/panel/types";
import type { PopsPromptConfig } from "../components/prompt/types";
import type { PopsInstGeneralConfig } from "../types/inst";
import type { PopsInstStoreType } from "../types/main";
export declare const PopsInstHandler: {
    /**
     * 删除配置中对应的对象
     * @param totalInstConfigList 配置实例列表
     * @param  guid 唯一标识
     * @param isAll 是否全部删除
     */
    removeInstance(totalInstConfigList: PopsInstGeneralConfig[][], guid?: string, isAll?: boolean): Promise<PopsInstGeneralConfig[][]>;
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
        startCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
        moveCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
        endCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
        preventEvent?: (event: TouchEvent | PointerEvent) => boolean;
    }): void;
};
