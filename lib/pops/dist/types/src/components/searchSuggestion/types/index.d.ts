import type { PopsGeneralConfig } from "../../../types/components";
import type { PopsPanelGeneralConfig } from "../../panel/types/components-common";
export type PopsSearchSuggestionData<T> = {
    /**
     * 值
     */
    value: T;
    /**
     * 是否启用右侧的删除按钮
     * @default true
     */
    enableDeleteButton?: boolean;
    /**
     * 删除按钮的点击回调
     * @returns
     *
     * + true 移除该元素并且从data中移除该数据， 如果data是函数返回数组的话，那么不会生效
     */
    deleteButtonClickCallback?: (
    /**
     * 点击事件
     */
    event: MouseEvent | PointerEvent, 
    /**
     * 当前项的元素
     */
    $dataItem: HTMLLIElement, 
    /**
     * 数据项
     */
    dataItem: PopsSearchSuggestionData<T>, 
    /**
     * 当前配置
     */
    config: PopsSearchSuggestionConfig<T>) => void | boolean | Promise<void | boolean>;
    /**
     * 获取每一项的html，在显示的时候会调用该函数
     *
     * 它的父元素是一个\<li>元素
     */
    itemView: (
    /**
     * 数据项
     */
    dateItem: PopsSearchSuggestionData<T>, 
    /**
     * 父元素\<li>
     */
    $parent: HTMLLIElement, 
    /**
     * 当前配置
     */
    config: PopsSearchSuggestionConfig<T>) => HTMLElement | string;
    /**
     * 每一项的点击回调
     * @returns
     *
     * + true 如果设置了inputTarget且类型是input或textarea的话，那么将自动设置目标值为当前点击项的value值
     */
    clickCallback?: (
    /**
     * 点击事件
     */
    event: MouseEvent | PointerEvent, 
    /**
     * 当前项的元素
     */
    $dataItem: HTMLLIElement, 
    /**
     * 数据项
     */
    dataItem: PopsSearchSuggestionData<T>, 
    /**
     * 当前配置
     */
    config: PopsSearchSuggestionConfig<T>) => IPromise<void | boolean>;
    /**
     * 键盘的上下键选择的回调
     */
    selectCallback?: (
    /**
     * 键盘事件
     */
    event: KeyboardEvent, 
    /**
     * 当前项的元素
     */
    $dataItem: HTMLLIElement, 
    /**
     * 数据项
     */
    dataItem: PopsSearchSuggestionData<T>, 
    /**
     * 当前配置
     */
    config: PopsSearchSuggestionConfig<T>) => void;
};
/**
 * 搜索建议悬浮窗
 * pops.searchSuggestion
 */
export interface PopsSearchSuggestionConfig<T = any> extends Pick<PopsGeneralConfig, "useShadowRoot" | "zIndex" | "style"> {
    /**
     * 当前的环境，可以是document，可以是shadowroot，默认是document
     *
     * 用于检测监听全局点击事件
     * @default document
     */
    $selfDocument?: Document | ShadowRoot | (Document | ShadowRoot)[];
    /**
     * 目标元素，一般是跟随它的位置变化，监听它的focus/click
     */
    $target: HTMLElement;
    /**
     * 目标input元素，监听它的focus/click/input事件
     *
     * 如果未填，那么自动使用target的值
     * @default config.target
     */
    $inputTarget?: HTMLInputElement | HTMLTextAreaElement;
    /**
     * 数据
     */
    data: PopsSearchSuggestionData<T>[] | (() => PopsSearchSuggestionData<T>[]);
    /**
     * （可选）元素的className，值为空的话就不设置
     * @default ""
     */
    className?: PopsPanelGeneralConfig<any>["className"];
    /**
     * 建议框的position位置
     *
     * + `true`：absolute
     * + `false`：relative
     * @default true
     */
    isAbsolute?: boolean;
    /**
     * 是否启用动画
     * @default false
     */
    isAnimation?: boolean;
    /**
     * 是否启用折叠动画
     * @default true
     */
    useFoldAnimation?: boolean;
    /**
     * 是否启用箭头
     * @default false
     */
    useArrow?: boolean;
    /**
     * 建议框的宽度
     * @default "250px"
     */
    width?: string;
    /**
     * 是否和config.target的宽度同步
     * @default true
     */
    followTargetWidth?: true;
    /**
     * 建议框的最大高度
     * @default "300px"
     */
    maxHeight?: string;
    /**
     * 建议框距离元素的距离
     * @default 0
     */
    topDistance?: number;
    /**
     * 建议框显示的位置，默认是auto(自动判断位置)
     * @default "auto"
     */
    position?: "top" | "bottom" | "auto";
    /**
     * 当位置在上面时（包括auto自动判断在上面时），是否对搜索项进行反转
     * @default true
     */
    positionTopToReverse?: boolean;
    /**
     * 搜索中的提示，可以是html
     *
     * 前提：inputTarget是input/textarea
     *
     * 触发change事件，且没有搜索到数据，则显示此提示
     */
    searchingTip?: string;
    /**
     * 没有搜索结果的提示的html
     *
     * 前提：inputTarget是input/textarea
     *
     * 触发change事件，且没有搜索到数据，则显示此结果项
     *
     * 如果该值是函数，需要返回的\<li>元素属性上存在data-none="true"
     * @example
     * <li data-none="true">暂无结果</li>
     */
    toSearhNotResultHTML?: string | (() => HTMLLIElement);
    /**
     * 当没有搜索结果时，是否隐藏建议框
     * @default false
     */
    toHideWithNotResult?: boolean;
    /**
     * 跟随目标的位置
     *
     * + `target`：跟随config.target的位置
     * + `input`：跟随config.inputTarget的位置
     * + `inputCursor`：跟随config.inputTarget的输入框光标位置
     *
     * @default "target"
     */
    followPosition?: "target" | "input" | "inputCursor";
    /**
     * 当config.target触发input时自动调用该函数来获取数据
     * @returns 返回是需要显示的数据
     */
    inputTargetChangeRefreshShowDataCallback?: (
    /**
     * 当前输入框的值
     */
    inputValue: string, 
    /**
     * config.data的数据
     */
    data: PopsSearchSuggestionData<T>[], 
    /**
     * 当前配置
     */
    config: PopsSearchSuggestionConfig<T>) => Promise<PopsSearchSuggestionData<T>[]> | PopsSearchSuggestionData<T>[];
}
