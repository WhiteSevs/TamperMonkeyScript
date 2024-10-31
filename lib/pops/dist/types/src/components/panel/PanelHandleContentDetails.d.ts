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
        /** 内容 */
        $content: HTMLDivElement;
        /** 左侧容器 */
        $contentAside: HTMLDivElement;
        /** 右侧容器 */
        $contentSectionContainer: HTMLDivElement;
    };
    /**
     * 初始化
     * @param details
     */
    init(details: {
        config: Required<PopsPanelDetails>;
        $el: {
            $content: HTMLDivElement;
            $contentAside: HTMLDivElement;
            $contentSectionContainer: HTMLDivElement;
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
     * 创建中间容器的元素<li>
     * type ==> switch
     * @param formConfig
     */
    createSectionContainerItem_switch(formConfig: PopsPanelSwitchDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> slider
     * @param formConfig
     */
    createSectionContainerItem_slider(formConfig: PopsPanelSliderDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> slider
     * @param formConfig
     */
    createSectionContainerItem_slider_new(formConfig: PopsPanelSliderDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> input
     * @param formConfig
     */
    createSectionContainerItem_input(formConfig: PopsPanelInputDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> textarea
     * @param formConfig
     */
    createSectionContainerItem_textarea(formConfig: PopsPanelTextAreaDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> select
     * @param formConfig
     */
    createSectionContainerItem_select(formConfig: PopsPanelSelectDetails<any>): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> select-multiple
     * @param formConfig
     */
    createSectionContainerItem_select_multiple_new(formConfig: PopsPanelSelectMultipleDetails<any>): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> button
     * @param formConfig
     */
    createSectionContainerItem_button(formConfig: PopsPanelButtonDetails): HTMLLIElement;
    /**
     * 获取深层容器的元素<li>
     * @param formConfig
     */
    createSectionContainerItem_deepMenu(formConfig: PopsPanelDeepMenuDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ===> own
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
