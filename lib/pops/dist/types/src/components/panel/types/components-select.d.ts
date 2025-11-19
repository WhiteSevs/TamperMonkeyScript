import type { PopsPanelGeneralConfig } from "./components-common";
import type { PopsPanelContainerConfig } from "./components-container";
import type { PopsPanelViewConfig } from ".";
import type { PopsAlertConfig } from "../../alert/types";
export interface PopsPanelSelectDataOption<T> {
    /**
     * 真正的值
     */
    value: T;
    /**
     * 显示的文字
     */
    text: string | ((
    /** 当前的值 */
    value: T, 
    /**当前选中的配置信息 */
    selectedInfo?: PopsPanelSelectDataOption<T>) => string);
    /**
     * 显示的文字是否是html
     * @default false
     */
    isHTML?: boolean;
    /**
     * （可选）是否禁用项
     * 触发条件：
     * + 点击select元素
     * + select元素触发change事件
     * @param value 当前的值
     * @param selectedInfo 当前选中的配置信息
     */
    disable?(value: T, selectedInfo?: PopsPanelSelectDataOption<T>): boolean;
    /**
     * 子配置，跟随切换改变
     *
     * 选中项后，根据配置添加到页面中
     */
    views?: IFunction<(PopsPanelContainerConfig | PopsPanelViewConfig)[]>;
    /**
     * （可选）是否是自定义输入的内容
     * @default false
     */
    addCustomInput?: boolean;
    /**
     * （可选）自定义输入内容存储的key
     *
     * 该属性内部未做处理，仅为传递作用
     */
    customInputStoreKey?: string;
    /**
     * （可选）校验自定义输入内容
     * @default () => {valid: true}
     */
    onValid?(dataOption: PopsPanelSelectDataOption<T>): {
        /**
         *
         * + true: 校验通过
         * + false: 校验失败，阻止关闭弹窗
         */
        valid: boolean;
        message?: string;
    };
}
/**
 * pops.panel的 select
 */
export interface PopsPanelSelectConfig<T = any> extends PopsPanelGeneralConfig<PopsPanelSelectConfig<T>> {
    /**
     * 组件类型
     */
    type: "select";
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
    disabled?: IFunction<boolean>;
    /**
     * 提示文字
     */
    placeholder?: IFunction<string>;
    /**
     * 已选中文字的显示文字的对齐方式
     *
     * 也包括提示文字的对齐方式
     * @default "left"
     */
    selectedTextAlign?: "left" | "center" | "right";
    /**
     * 获取该项的值的回调函数
     */
    getValue(): T;
    /**
     * 选择器的值改变触发的回调函数
     * @param isSelectedInfo 当前已选中的信息，可能为空
     */
    callback?(isSelectedInfo?: PopsPanelSelectDataOption<T>): void;
    /**
     * 点击select元素触发该回调
     * @param event 点击事件
     * @param selectElement 当前的select元素
     */
    clickCallBack?(event: PointerEvent | MouseEvent, 
    /** 当前已选中的信息 */
    isSelectedInfo: PopsPanelSelectDataOption<T>): void | boolean;
    /**
     * 选择列表内的数据
     */
    data: IFunction<PopsPanelSelectDataOption<T>[]>;
    /**
     * 是否使用弹窗代替
     * @default false
     */
    useDialog?: boolean;
    /**
     * 弹出的下拉列表弹窗的配置
     */
    selectConfirmDialogConfig?: Partial<PopsAlertConfig>;
}
