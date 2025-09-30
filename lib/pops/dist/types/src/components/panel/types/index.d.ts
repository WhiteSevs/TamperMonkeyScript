import type { PopsTitleConfig, PopsDragConfig, PopsCommonConfig } from "../../../types/components";
import type { PopsPanelFormsDetails } from "./components-forms";
import type { PopsPanelSwitchDetails } from "./components-switch";
import type { PopsPanelSliderDetails } from "./components-slider";
import type { PopsPanelInputDetails } from "./components-input";
import type { PopsPanelTextAreaDetails } from "./components-textarea";
import type { PopsPanelSelectDetails } from "./components-select";
import type { PopsPanelButtonDetails } from "./components-button";
import type { PopsPanelDeepMenuDetails } from "./components-deepMenu";
import type { PopsPanelOwnDetails } from "./components-own";
import type { PopsHeaderCloseButtonDetails } from "../../../types/button";
import type { PopsPanelSelectMultipleDetails } from "./components-selectMultiple";
import type { PopsPanelCommonDetails } from "./components-common";
/** panel的各种类型的配置项 */
export type PopsPanelFormsTotalDetails = PopsPanelSwitchDetails | PopsPanelSliderDetails | PopsPanelInputDetails | PopsPanelTextAreaDetails | PopsPanelSelectDetails<any> | PopsPanelSelectMultipleDetails<any> | PopsPanelButtonDetails | PopsPanelDeepMenuDetails | PopsPanelOwnDetails;
/**
 * panel的内部事件
 */
export type PopsPanelEventType = {
    /**
     * 该事件在右侧容器内的元素改变时触发
     */
    "pops:renderRightContainer": {
        /**
         * 菜单配置
         */
        formConfig: PopsPanelContentConfig[] | PopsPanelDeepMenuDetails;
    };
};
/**
 * pops.panel的content配置信息
 */
export interface PopsPanelContentConfig {
    /**
     * 元素属性id
     */
    id: string;
    /**
     * （可选）元素的className，值为空的话就不设置
     * @default ""
     */
    className?: PopsPanelCommonDetails<any>["className"];
    /**
     * 显示的文本，可以是html格式
     */
    title: string | (() => string);
    /**
     * （可选）中间顶部的文本，如果为空，则使用title的值代替
     * @default title
     */
    headerTitle?: string | (() => string);
    /**
     * （可选）是否是默认的，指打开弹窗的先显示出来的内容，默认为首位第一个项，如果多个配置都设置了isDefault的值为true，那么只有第一个值生效
     * @default false
     */
    isDefault?: boolean | (() => boolean);
    /**
     * （可选）是否是位于底部的
     *
     * 自上而下排序
     * @default false
     */
    isBottom?: boolean | (() => boolean);
    /**
     * （可选）是否禁用左侧项的hover的CSS样式
     */
    disableAsideItemHoverCSS?: boolean | (() => boolean);
    /**
     * （可选）是否自动滚动到默认的项
     * @default false
     */
    scrollToDefaultView?: boolean;
    /**
     * （可选）自定义元素属性.setAttribute、.getAttribute
     */
    attributes?: PopsPanelCommonDetails<any>["attributes"];
    /**
     * （可选）自定义元素内部的属性值
     */
    props?: PopsPanelCommonDetails<any>["props"];
    /**
     * 子配置
     */
    forms: (PopsPanelFormsDetails | PopsPanelFormsTotalDetails)[];
    /**
     * 左侧容器的点击回调（点击后第一个触发该回调）
     * @returns
     * + false 阻止默认行为
     */
    clickFirstCallback?: (event: MouseEvent | PointerEvent, rightHeaderElement: HTMLUListElement, rightContainerElement: HTMLUListElement) => void | boolean | Promise<void | boolean>;
    /**
     * 左侧容器的点击回调
     * @returns
     * + false 阻止默认进入菜单详情
     */
    clickCallback?: (event: MouseEvent | PointerEvent, rightHeaderElement: HTMLUListElement, rightContainerElement: HTMLUListElement) => void | boolean | Promise<void | boolean>;
    /**
     * 左侧项添加到panel后的回调
     */
    afterRender?: (
    /**
     * 配置
     */
    config: {
        /** 容器配置 */
        asideConfig: PopsPanelContentConfig;
        /** 左侧容器的元素 */
        $asideLiElement: HTMLLIElement;
    }) => void;
}
/**
 * pops.panel的bottomContent配置信息
 */
export interface PopsPanelBottomContentConfig {
    /**
     * （可选）元素的className，值为空的话就不设置
     * @default ""
     */
    className?: PopsPanelCommonDetails<any>["className"];
    /**
     * （可选）配置所在位置
     *
     * @default "left"
     */
    position: "left" | "right";
    /**
     * 显示的文本，可以是html格式
     */
    text: string | (() => string);
    /**
     * （可选）是否禁用hover的CSS样式
     * @default false
     */
    disableHoverCSS?: boolean | (() => boolean);
    /**
     * （可选）自定义元素属性.setAttribute、.getAttribute
     * @default {}
     */
    attributes?: PopsPanelCommonDetails<any>["attributes"];
    /**
     * （可选）自定义元素内部的属性值
     * @default {}
     */
    props?: PopsPanelCommonDetails<any>["props"];
    /**
     * 该项的点击回调
     */
    clickCallback?: (
    /**
     * 点击事件
     */
    event: MouseEvent | PointerEvent) => void;
    /**
     * 该项添加到panel后的回调
     */
    afterRender?: (
    /**
     * 配置
     */
    config: {
        /** panel底部区域 */
        $bottomWrapper: HTMLElement;
        /** panel底部区域容器 */
        $bottomContainer: HTMLElement;
        /** panel底部区域左侧容器 */
        $bottomLeftContainer: HTMLElement;
        /** panel底部区域右侧容器 */
        $bottomRightContainer: HTMLElement;
    }) => void;
}
/**
 * pops.panel
 */
export interface PopsPanelDetails extends PopsTitleConfig, PopsDragConfig, PopsCommonConfig {
    /**
     * 内容配置
     */
    content: PopsPanelContentConfig[];
    /**
     * 底部内容配置
     */
    bottomContentConfig?: PopsPanelBottomContentConfig[];
    /**
     * 右上角的按钮配置
     */
    btn?: {
        /**
         * 关闭按钮
         */
        close?: PopsHeaderCloseButtonDetails;
    };
    /**
     * 移动端适配的的className
     *
     * @default "pops-panel-is-mobile"
     */
    mobileClassName?: PopsPanelCommonDetails<any>["className"];
    /**
     * 是否强制是移动端，默认false
     * + true 强制为移动端
     * + false 自动根据UA判断是否是移动端
     * @default false
     */
    isMobile?: boolean;
    /**
     * 是否使用深度菜单切换动画
     *
     * 如果浏览器不支持`document.startViewTransition`函数，那么即使使用`useDeepMenuSwtichAnimation`为true，那么不会使用动画
     * @default true
     */
    useDeepMenuSwtichAnimation?: true;
}
