import type { PopsPanelButtonDetails } from "./buttonType";
import type { PopsPanelRightAsideContainerOptions } from "./commonType";
import type { PopsPanelDeepMenuDetails } from "./deepMenuType";
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
    $el: {
        $content: HTMLDivElement;
        $contentAside: HTMLDivElement;
        $contentSectionContainer: HTMLDivElement;
    };
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
    addElementAttributes(element: HTMLElement, attributes?: any): void;
    /**
     * 为元素设置(自定义)属性
     * @param element
     * @param props
     */
    setElementProps(element: HTMLElement, props?: any): void;
    /**
     * 获取左侧容器元素<li>
     * @param  asideConfig
     */
    getAsideItem(asideConfig: PopsPanelContentConfig): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> switch
     * @param formConfig
     */
    getSectionContainerItem_switch(formConfig: PopsPanelSwitchDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> slider
     * @param formConfig
     */
    getSectionContainerItem_slider(formConfig: PopsPanelSliderDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> slider
     * @param formConfig
     */
    getSectionContainerItem_slider_new(formConfig: PopsPanelSliderDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> input
     * @param formConfig
     */
    getSectionContainerItem_input(formConfig: PopsPanelInputDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> textarea
     * @param formConfig
     */
    getSectionContainerItem_textarea(formConfig: PopsPanelTextAreaDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> select
     * @param formConfig
     */
    getSectionContainerItem_select(formConfig: PopsPanelSelectDetails<any>): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> select-multiple
     * @param formConfig
     */
    getSectionContainerItem_select_multiple_new(formConfig: PopsPanelSelectMultipleDetails<any>): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ==> button
     * @param formConfig
     */
    getSectionContainerItem_button(formConfig: PopsPanelButtonDetails): HTMLLIElement;
    /**
     * 获取深层容器的元素<li>
     * @param formConfig
     */
    getSectionContainerItem_deepMenu(formConfig: PopsPanelDeepMenuDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * type ===> own
     * @param formConfig
     */
    getSectionContainerItem_own(formConfig: PopsPanelOwnDetails): HTMLLIElement;
    /**
     * 获取中间容器的元素<li>
     * @param formConfig
     */
    getSectionContainerItem(formConfig: PopsPanelFormsTotalDetails): HTMLLIElement | undefined;
    /**
     * 生成配置每一项的元素
     * @param formConfig
     */
    initFormItem(formConfig: PopsPanelContentConfig): void;
    /**
     *
     * @param formConfig
     * @param containerOptions
     */
    uListContainerAddItem(formConfig: PopsPanelFormsTotalDetails, containerOptions: PopsPanelRightAsideContainerOptions): void;
    /**
     * 为左侧容器元素添加点击事件
     * @param asideLiElement 左侧的容器<li>元素
     * @param asideConfig 配置
     */
    setAsideItemClickEvent(asideLiElement: HTMLElement, asideConfig: PopsPanelContentConfig): void;
};
