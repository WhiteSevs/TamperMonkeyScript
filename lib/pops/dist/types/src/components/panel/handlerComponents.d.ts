import type { PopsPanelButtonConfig } from "./types/components-button";
import type { PopsPanelGeneralConfig, PopsPanelRightAsideContainerConfig } from "./types/components-common";
import type { PopsPanelDeepViewConfig } from "./types/components-deepMenu";
import type { PopsPanelContainerConfig } from "./types/components-container";
import type { PopsPanelBottomContentConfig, PopsPanelContentConfig, PopsPanelConfig, PopsPanelViewConfig } from "./types";
import type { PopsPanelInputConfig } from "./types/components-input";
import type { PopsPanelOwnConfig } from "./types/components-own";
import type { PopsPanelSelectMultipleConfig } from "./types/components-selectMultiple";
import type { PopsPanelSelectConfig } from "./types/components-select";
import type { PopsPanelSliderConfig } from "./types/components-slider";
import type { PopsPanelSwitchConfig } from "./types/components-switch";
import type { PopsPanelTextAreaConfig } from "./types/components-textarea";
/**
 * 处理组件（把组件配置转为组件元素）
 */
export declare const PanelHandlerComponents: () => {
    /**
     * 左侧上方的的ul容器
     */
    asideULElement: HTMLUListElement;
    /**
     * 左侧下方的ul容器
     */
    asideBottomULElement: HTMLUListElement;
    /**
     * 右侧主内容的顶部文字ul容器
     */
    sectionContainerHeaderULElement: HTMLUListElement;
    /**
     * 右侧主内容的ul容器
     */
    sectionContainerULElement: HTMLUListElement;
    /**
     * 元素
     */
    $el: {
        /** pops主元素 */
        $pops: HTMLElement;
        /** 内容 */
        $content: HTMLElement;
        /** section元素的包裹容器 */
        $panelRightSectionWrapper: HTMLElement;
        /** 左侧容器 */
        $panelLeftAside: HTMLElement;
        /** 右侧容器 */
        $panelContentSectionContainer: HTMLElement;
        $panelBottomWrapper: HTMLElement;
        $panelBottomContainer: HTMLElement;
        $panelBottomLeftContainer: HTMLElement;
        $panelBottomRightContainer: HTMLElement;
    };
    $data: {
        nodeStoreConfigKey: string;
    };
    $config: Required<PopsPanelConfig>;
    /**
     * 初始化
     * @param data
     */
    init(data: {
        config: Required<PopsPanelConfig>;
        $el: {
            $pops: HTMLElement;
            $content: HTMLElement;
            $panelRightSectionWrapper: HTMLElement;
            $panelLeftAside: HTMLElement;
            $panelContentSectionContainer: HTMLElement;
            $panelBottomWrapper: HTMLElement;
            $panelBottomContainer: HTMLElement;
            $panelBottomLeftContainer: HTMLElement;
            $panelBottomRightContainer: HTMLElement;
        };
    }): void;
    /**
     * 清空container容器的元素
     */
    clearContainer(): void;
    /**
     * 清空deepMenu的容器元素
     */
    clearDeepMenuContainer(): void;
    /**
     * 清空左侧容器已访问记录
     */
    clearAsideItemIsVisited(): void;
    /**
     * 设置左侧容器已访问记录
     * @param $el
     */
    setAsideItemIsVisited($el: HTMLElement): void;
    /**
     * 为元素添加自定义属性
     * @param $el 元素
     * @param attributes 属性
     */
    setElementAttributes($el: HTMLElement, attributes?: any): void;
    /**
     * 为元素设置(自定义)属性
     * @param $el 元素
     * @param props 属性
     */
    setElementProps($el: HTMLElement, props?: any): void;
    /**
     * 为元素设置classname
     * @param $el 元素
     * @param className
     */
    setElementClassName($el: HTMLElement, className?: PopsPanelGeneralConfig<any>["className"]): void;
    /**
     * 创建底部项元素<li>
     * @param bottomItemConfig 配置
     */
    createBottomItem(bottomItemConfig: PopsPanelBottomContentConfig): HTMLLIElement;
    /**
     * 为底部元素添加点击事件
     * @param $bottomItem 底部<li>元素
     * @param bottomItemConfig 配置
     */
    setBottomItemClickEvent($bottomItem: HTMLElement, bottomItemConfig: PopsPanelBottomContentConfig): void;
    /**
     * 创建左侧容器元素<li>
     * @param  asideConfig 配置
     */
    createAsideItem(asideConfig: PopsPanelContentConfig): HTMLLIElement;
    /**
     * type ==> switch
     * 创建中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_switch(viewConfig: PopsPanelSwitchConfig): HTMLLIElement;
    /**
     * type ==> slider
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_slider(viewConfig: PopsPanelSliderConfig): HTMLLIElement;
    /**
     * type ==> slider
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_slider_new(viewConfig: PopsPanelSliderConfig): HTMLLIElement;
    /**
     * type ==> input
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_input(viewConfig: PopsPanelInputConfig): HTMLLIElement;
    /**
     * type ==> textarea
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_textarea(viewConfig: PopsPanelTextAreaConfig): HTMLLIElement;
    /**
     * type ==> select
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_select(viewConfig: PopsPanelSelectConfig<any>): HTMLLIElement;
    /**
     * type ==> select-multiple
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_select_multiple(viewConfig: PopsPanelSelectMultipleConfig<any>): HTMLLIElement;
    /**
     * type ==> button
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_button(viewConfig: PopsPanelButtonConfig): HTMLLIElement;
    /**
     * type ==> deepMenu
     * 获取深层容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_deepMenu(viewConfig: PopsPanelDeepViewConfig): HTMLLIElement;
    /**
     * type ===> own
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_own(viewConfig: PopsPanelOwnConfig): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * @param viewConfig 视图配置
     */
    createSectionContainerItem(viewConfig: PopsPanelViewConfig): HTMLLIElement | undefined;
    /**
     * 生成配置项forms
     * 生成配置每一项的元素
     * @param viewConfig
     */
    createSectionContainerItem_forms(viewConfig: PopsPanelContentConfig | PopsPanelContainerConfig): void;
    /**
     * 主动触发触发渲染右侧容器的事件
     * @param $container 容器
     */
    triggerRenderRightContainer($container: HTMLElement): void;
    /**
     *
     * @param viewConfig
     * @param containerOptions
     */
    uListContainerAddItem(viewConfig: PopsPanelViewConfig, containerOptions: Omit<PopsPanelRightAsideContainerConfig, "target">): void;
    /**
     * 为左侧容器元素添加点击事件
     * @param $asideItem 左侧的容器<li>元素
     * @param asideConfig 配置
     */
    setAsideItemClickEvent($asideItem: HTMLElement, asideConfig: PopsPanelContentConfig): void;
};
