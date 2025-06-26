import type { PopsPanelButtonDetails } from "./buttonType";
import type { PopsPanelRightAsideContainerOptions } from "./commonType";
import type { PopsPanelDeepMenuDetails } from "./deepMenuType";
import type { PopsPanelFormsDetails } from "./formsType";
import type { PopsPanelContentConfig, PopsPanelDetails, PopsPanelFormsTotalDetails } from "./indexType";
import type { PopsPanelInputDetails } from "./inputType";
import type { PopsPanelOwnDetails } from "./ownType";
import type { PopsPanelSelectMultipleDetails } from "./selectMultipleType";
import type { PopsPanelSelectDetails } from "./selectType";
import type { PopsPanelSliderDetails } from "./sliderType";
import type { PopsPanelSwitchDetails } from "./switchType";
import type { PopsPanelTextAreaDetails } from "./textareaType";
export declare const PanelHandleContentDetails: () => {
    /**
     * 左侧的ul容器
     */
    asideULElement: HTMLUListElement;
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
        /** 左侧容器 */
        $contentAside: HTMLElement;
        /** 右侧容器 */
        $contentSectionContainer: HTMLElement;
    };
    /**
     * 初始化
     * @param details
     */
    init(details: {
        config: Required<PopsPanelDetails>;
        $el: {
            $pops: HTMLElement;
            $content: HTMLElement;
            $contentAside: HTMLElement;
            $contentSectionContainer: HTMLElement;
        };
    }): void;
    /**
     * 清空container容器的元素
     */
    clearContainer(): void;
    /**
     * 清空左侧容器已访问记录
     */
    clearAsideItemIsVisited(): void;
    /**
     * 设置左侧容器已访问记录
     * @param element
     */
    setAsideItemIsVisited(element: HTMLElement): void;
    /**
     * 为元素添加自定义属性
     * @param element
     * @param attributes
     */
    setElementAttributes(element: HTMLElement, attributes?: any): void;
    /**
     * 为元素设置(自定义)属性
     * @param element
     * @param props
     */
    setElementProps(element: HTMLElement, props?: any): void;
    /**
     * 为元素设置classname
     * @param element
     * @param className
     */
    setElementClassName(element: HTMLElement, className?: string | string[] | (() => string | string[])): void;
    /**
     * 创建左侧容器元素<li>
     * @param  asideConfig
     */
    createAsideItem(asideConfig: PopsPanelContentConfig): HTMLLIElement;
    /**
     * type ==> switch
     * 创建中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_switch(formConfig: PopsPanelSwitchDetails): HTMLLIElement;
    /**
     * type ==> slider
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_slider(formConfig: PopsPanelSliderDetails): HTMLLIElement;
    /**
     * type ==> slider
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_slider_new(formConfig: PopsPanelSliderDetails): HTMLLIElement;
    /**
     * type ==> input
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_input(formConfig: PopsPanelInputDetails): HTMLLIElement;
    /**
     * type ==> textarea
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_textarea(formConfig: PopsPanelTextAreaDetails): HTMLLIElement;
    /**
     * type ==> select
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_select(formConfig: PopsPanelSelectDetails<any>): HTMLLIElement;
    /**
     * type ==> select-multiple
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_select_multiple_new(formConfig: PopsPanelSelectMultipleDetails<any>): HTMLLIElement;
    /**
     * type ==> button
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_button(formConfig: PopsPanelButtonDetails): HTMLLIElement;
    /**
     * type ==> deepMenu
     * 获取深层容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_deepMenu(formConfig: PopsPanelDeepMenuDetails): HTMLLIElement;
    /**
     * type ===> own
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_own(formConfig: PopsPanelOwnDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem(formConfig: PopsPanelFormsTotalDetails): HTMLLIElement | undefined;
    /**
     * 生成配置项forms
     * 生成配置每一项的元素
     * @param formConfig
     */
    createSectionContainerItem_forms(formConfig: PopsPanelContentConfig | PopsPanelFormsDetails): void;
    /**
     * 触发触发渲染右侧容器的事件
     */
    triggerRenderRightContainer($container: HTMLElement): void;
    /**
     *
     * @param formConfig
     * @param containerOptions
     */
    uListContainerAddItem(formConfig: PopsPanelFormsTotalDetails, containerOptions: Omit<PopsPanelRightAsideContainerOptions, "target">): void;
    /**
     * 为左侧容器元素添加点击事件
     * @param asideLiElement 左侧的容器<li>元素
     * @param asideConfig 配置
     */
    setAsideItemClickEvent(asideLiElement: HTMLElement, asideConfig: PopsPanelContentConfig): void;
};
