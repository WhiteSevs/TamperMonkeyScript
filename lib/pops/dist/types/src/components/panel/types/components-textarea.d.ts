import type { PopsPanelGeneralConfig } from "./components-common";
/**
 * pops.panel的 textarea
 */
export interface PopsPanelTextAreaConfig extends PopsPanelGeneralConfig<PopsPanelTextAreaConfig> {
    /**
     * 类型
     */
    type: "textarea";
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
    getValue(): string;
    /**
     * textarea输入框的值改变触发的回调函数
     * @param event 事件
     * @param value 当前的textarea内的值
     */
    callback(event: InputEvent & {
        target: HTMLTextAreaElement;
    }, value: string): void;
    /**
     * 输入框内的提示
     * @default ""
     */
    placeholder?: string;
}
