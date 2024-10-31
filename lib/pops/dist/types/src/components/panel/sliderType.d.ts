import type { PopsPanelCommonDetails } from "./commonType";
/**
 * pops.panel的 slider
 */
export interface PopsPanelSliderDetails extends PopsPanelCommonDetails<PopsPanelSliderDetails> {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: {
        [key: string]: any;
    };
    /**
     * （可选）自定义属性
     */
    props?: {
        [K in keyof HTMLElement]?: HTMLElement[K];
    };
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
    disabled?: false;
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
    getToolTipContent?: (value: number) => string;
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
