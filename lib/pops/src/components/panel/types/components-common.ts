import type { PopsPanelFormsDetails } from "./components-forms";
import { PopsPanelFormsTotalDetails } from ".";

/**
 * 右侧容器的配置
 */
export interface PopsPanelRightAsideContainerOptions {
	/** 当前的<li>元素 */
	target: HTMLLIElement | undefined;
	/** 当前的<li>元素的父<ul>元素 */
	ulElement: HTMLUListElement;
	/** 当前的<li>元素所在的统一的<ul>元素 */
	sectionContainerULElement?: HTMLUListElement;
	/**  */
	formContainerListElement?: HTMLLIElement;
	/**  */
	formHeaderDivElement?: HTMLElement | HTMLDivElement;
}
/**
 * 通用配置
 */
export interface PopsPanelCommonDetails<T extends PopsPanelFormsTotalDetails | PopsPanelFormsDetails> {
	/**
     * 在添加到<ul>元素后触发该回调
     * @param formConfig 配置
     * @param container 右侧容器的元素
     * @example
     * // 例如在type为own时
     * afterAddToUListCallBack(formConfig, container) {
     * DOMUtils.on(
        container.formHeaderDivElement.querySelector(
        "a"
        ),
        "click",
        void 0,
        () => {
        PopsPanel.deleteValue("xxxx");
        container.ulElement.querySelector(
            "textarea"
        ).value = xxxxx.defaultValue;
        Qmsg.success("已重置");
        }
    );
     * }
     * 
     * // 例如在type为forms时
     * container内只有container.ulElement这个属性
     */
	afterAddToUListCallBack?: (formConfig: T, container: PopsPanelRightAsideContainerOptions) => void;
}
