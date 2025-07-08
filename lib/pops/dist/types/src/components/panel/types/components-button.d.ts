import type { PopsPanelCommonDetails } from "./components-common";
import type { PopsButtonStyleType } from "../../../types/button";
import type { PopsIconType } from "../../../types/icon";
/**
 * pops.panel的 button
 */
export interface PopsPanelButtonDetails extends PopsPanelCommonDetails<PopsPanelButtonDetails> {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: {
        [key: string]: any;
    } | {
        [key: string]: any;
    }[];
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
    buttonIcon?: PopsIconType;
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
