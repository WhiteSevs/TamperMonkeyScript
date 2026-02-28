import type { PopsPanelGeneralConfig } from "./components-common";
/**
 * pops.panel的 switch
 */
export interface PopsPanelSwitchConfig extends PopsPanelGeneralConfig<PopsPanelSwitchConfig> {
    /**
     * 组件类型
     */
    type: "switch";
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * （可选）左边的文字下面的描述
     * @default ""
     */
    description?: string;
    /**
     * （可选）是否禁用
     * @default false
     */
    disabled?: boolean | (() => boolean);
    /**
     * 获取该项的值的回调函数
     */
    getValue(): boolean;
    /**
     * switch`开启`/`关闭`前触发的回调函数
     * @param event 事件
     * @param value switch的状态(开关前)
     * @returns
     * + `false`: 阻止switch的开启/关闭
     */
    beforeSwitchStatusChangeCallBack?(event: MouseEvent | PointerEvent, value: boolean): IPromise<void | boolean>;
    /**
     * switch`开启`/`关闭`后触发的回调函数
     * @param event 事件
     * @param value switch的状态(开关后)
     */
    callback(event: MouseEvent | PointerEvent, value: boolean): IPromise<void>;
}
