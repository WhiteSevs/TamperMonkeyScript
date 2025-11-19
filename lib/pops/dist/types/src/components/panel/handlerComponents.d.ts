import { popsUtils } from "../../utils/PopsUtils";
import { PopsTooltip } from "../tooltip";
import type { PopsPanelButtonConfig } from "./types/components-button";
import type { PopsPanelGeneralConfig, PopsPanelRightAsideContainerConfig } from "./types/components-common";
import type { PopsPanelDeepViewConfig } from "./types/components-deepMenu";
import type { PopsPanelContainerConfig } from "./types/components-container";
import type { PopsPanelBottomContentConfig, PopsPanelContentConfig, PopsPanelConfig, PopsPanelViewConfig } from "./types";
import type { PopsPanelInputConfig, PopsPanelInputType } from "./types/components-input";
import type { PopsPanelOwnConfig } from "./types/components-own";
import type { PopsPanelSelectMultipleDataOption, PopsPanelSelectMultipleConfig } from "./types/components-selectMultiple";
import type { PopsPanelSelectConfig, PopsPanelSelectDataOption } from "./types/components-select";
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
    onBottomItemClick($bottomItem: HTMLElement, bottomItemConfig: PopsPanelBottomContentConfig): void;
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
    createSectionContainerItem_switch(viewConfig: PopsPanelSwitchConfig): {
        $el: HTMLLIElement;
        handler: {
            [Symbol.toStringTag]: string;
            $data: {
                value: boolean;
            };
            $ele: {
                itemLeftTextContainer: HTMLElement | null;
                switch: HTMLDivElement;
                input: HTMLInputElement;
                core: HTMLSpanElement;
            };
            init(): void;
            /**
             * 设置点击事件
             */
            onClick(): void;
            /**
             * 设置状态
             */
            setStatus(isChecked?: boolean): void;
            /**
             * 根据className来获取逆反值
             */
            getStatus(): boolean;
            /**
             * 禁用复选框
             */
            disable(): void;
            /**
             * 取消禁用复选框
             */
            notDisable(): void;
        };
    };
    /**
     * type ==> slider
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_slider_new(viewConfig: PopsPanelSliderConfig): {
        $el: HTMLLIElement;
        handler: {
            [Symbol.toStringTag]: string;
            /**
             * 值
             */
            value: number;
            /**
             * 最小值
             */
            min: number;
            /**
             * 最大值
             */
            max: number;
            /**
             * 间隔
             */
            step: number;
            $data: {
                /**
                 * 是否正在移动
                 */
                isMove: boolean;
                /**
                 * 是否已初始化已拖拽的距离
                 */
                isInitDragPosition: boolean;
                /**
                 * 是否正在检测是否停止拖拽
                 */
                isCheckingStopDragMove: boolean;
                /**
                 * 总宽度（px）
                 */
                totalWidth: number;
                /**
                 * 每一块的间隔（px）
                 */
                stepPx: number;
                /**
                 * 已拖拽的距离（px）
                 */
                dragWidth: number;
                /**
                 * 已拖拽的百分比
                 */
                dragPercent: number;
                /**
                 * 每一次块的信息
                 * 例如：当最小值是2，最大值是10，step为2
                 * 那么生成[2,4,6,8,10] 共计5个
                 * 又获取到当前滑块总长度是200px
                 * 那么生成映射
                 * 2 => 0px~40px
                 * 4 => 40px~80px
                 * 6 => 80px~120px
                 * 8 => 120px~160px
                 * 10 => 160px~200px
                 */
                stepBlockMap: Map<number, {
                    value: number;
                    px: number;
                    pxLeft: number;
                    pxRight: number;
                    percent: number;
                }>;
                tooltip: ReturnType<typeof PopsTooltip.init>;
            };
            $ele: {
                itemLeftTextContainer: HTMLElement | null;
                slider: HTMLElement;
                runAway: HTMLElement;
                bar: HTMLElement;
                buttonWrapper: HTMLElement;
                button: HTMLElement;
            };
            $interval: {
                isCheck: boolean;
            };
            $tooltip: ReturnType<typeof popsUtils.AnyTouch>["prototype"];
            init(): void;
            /**
             * 10s内循环获取slider的宽度等信息
             * 获取到了就可以初始化left的值
             * @param [checkStepTime=200] 每次检测的间隔时间
             * @param [maxTime=10000] 最大的检测时间
             */
            intervalInit(checkStepTime?: number, maxTime?: number): void;
            /**
             * 把数据添加到元素上
             */
            initEleData(): void;
            /**
             * 初始化滑块的总长度的数据(px)
             */
            initTotalWidth(): void;
            /**
             * 初始化每一个块的具体数据信息
             */
            initStepMap(): void;
            /**
             * 初始化每一个块的具体数据信息（浮点）
             */
            initFloatStepMap(): void;
            /**
             * 初始化slider的默认起始left的百分比值
             */
            initSliderPosition(): void;
            /**
             * 判断数字是否是浮点数
             * @param num
             */
            isFloat(num: number): boolean;
            /**
             * 值改变的回调
             * @param event
             * @param value
             */
            valueChangeCallBack(event: any, value: number): void;
            /**
             * 根据拖拽距离获取滑块应该在的区间和值
             * @param dragX
             */
            getDragInfo(dragX: number): {
                value: number;
                px: number;
                pxLeft: number;
                pxRight: number;
                percent: number;
            } | undefined;
            /**
             * 获取滑块的当前脱拖拽占据的百分比
             * @param dragWidth
             */
            getSliderPositonPercent(dragWidth: number): number;
            /**
             * 根据step格式化value
             * @param num
             */
            formatValue(num: number): number;
            /**
             * 设置滑块的位置偏移（left）
             * @param percent 百分比
             */
            setSliderPosition(percent: number): void;
            /**
             * 禁止拖拽
             */
            disableDrag(): void;
            /**
             * 允许拖拽
             */
            allowDrag(): void;
            /**
             * 判断当前滑块是否被禁用
             */
            isDisabledDrag(): boolean;
            /**
             * 判断当前滑块是否被禁用（配置中判断）
             */
            isDisabledDragWithConfig(): boolean;
            /**
             * 设置进度条点击定位的事件
             */
            onRunAwayClick(): void;
            /**
             * 拖拽开始的回调，如果返回false，禁止拖拽
             */
            dragStartCallBack(): boolean;
            /**
             * 拖拽中的回调
             * @param event 事件
             * @param dragX 当前拖拽的距离
             * @param oldValue 旧的值
             */
            dragMoveCallBack(event: any, dragX: number, oldValue: number): void;
            /**
             * 拖拽结束的回调
             */
            dragEndCallBack(dragX: number): void;
            /**
             * 设置点击拖拽事件
             */
            setPanEvent(): void;
            /**
             * 显示悬浮的
             */
            showToolTip(): void;
            /**
             * 关闭悬浮的
             */
            closeToolTip(): void;
            /**
             * 检测在1000ms内，是否停止了拖拽
             */
            checkStopDragMove(): void;
            /**
             * 设置拖拽按钮的悬浮事件
             */
            setToolTipEvent(): void;
        };
    };
    /**
     * type ==> input
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_input(viewConfig: PopsPanelInputConfig): {
        $el: HTMLLIElement;
        handler: {
            [Symbol.toStringTag]: string;
            $el: {
                itemLeftTextContainer: HTMLElement | null;
                panelInput: HTMLDivElement;
                panelInputInner: HTMLDivElement;
                input: HTMLInputElement;
                /** span.pops-panel-input__suffix */
                suffix: HTMLSpanElement;
                /** span.pops-panel-input__suffix-inner */
                suffixInner: HTMLSpanElement;
                /** i.pops-panel-icon */
                icon: HTMLElement;
            };
            $data: {
                value: string | number | Date;
                /**
                 * inputType 为 password时使用该值
                 *
                 * 当前内容的可见性
                 */
                isVisible: boolean;
            };
            init(): void;
            /**
             * 初始化$ele的配置
             */
            initEle(): void;
            /**
             * 校验输入框类型是否是字符串输入框类型
             */
            isTextInputType(): boolean;
            /**
             * 是否是时间输入框类型
             */
            isDateInputType(): boolean;
            /**
             * 是否是数字输入框类型
             */
            isNumberInputType(): boolean;
            /**
             * 禁用
             */
            disable(): void;
            /**
             * 取消禁用
             */
            notDisable(): void;
            /**
             * 判断是否已被禁用
             */
            isDisabled(): boolean;
            /**
             * 设置输入框内容
             * @param value 值
             */
            setInputValue(value?: string | number | Date): void;
            /**
             * 设置input元素的type
             * @param typeValue type值
             */
            setInputType(typeValue?: PopsPanelInputType): void;
            /**
             * 删除图标按钮
             */
            removeCircleIcon(): void;
            /**
             * 添加清空图标按钮
             * @param svgHTML svg图标，默认为清空的图标
             */
            setCircleIcon(svgHTML?: string): void;
            /**
             * 隐藏图标容器
             */
            hideCircleIconWrapper(): void;
            /**
             * 显示图标容器
             */
            showCircleIconWrapper(): void;
            /**
             * 添加图标按钮的点击事件
             */
            onIconClick(): void;
            /**
             * 监听输入框内容改变
             */
            onValueChange(): void;
            /**
             * 主动触发输入框改变事件
             */
            triggerValueChange(): void;
            /**
             * 添加校验失败的提示信息
             * @param msg 提示信息
             */
            addValidErrorMsg(msg?: string): void;
            /**
             * 移除校验失败的提示信息
             */
            removeValidErrorMsg(): void;
        };
    };
    /**
     * type ==> textarea
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_textarea(viewConfig: PopsPanelTextAreaConfig): {
        $el: HTMLLIElement;
        handler: {
            [Symbol.toStringTag]: string;
            $ele: {
                itemLeftTextContainer: HTMLElement | null;
                panelTextarea: HTMLDivElement;
                textarea: HTMLTextAreaElement;
            };
            $data: {
                value: string;
            };
            init(): void;
            disable(): void;
            notDisable(): void;
            isDisabled(): boolean;
            setValue(value: string): void;
            /**
             * 监听选择内容改变
             */
            onValueChange(): void;
        };
    };
    /**
     * type ==> select
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_select(viewConfig: PopsPanelSelectConfig<any>): {
        $el: HTMLLIElement;
        handler: {
            [Symbol.toStringTag]: string;
            $el: {
                itemLeftTextContainer: HTMLElement | null;
                /** 选择框容器 */
                $container: HTMLElement;
                /** 选择框包裹的容器 */
                $wrapper: HTMLElement;
                /** 内容区域 */
                $section: HTMLElement;
                /** 手动输入 */
                $selectedInputWrapper: HTMLElement;
                /** 灰色提示语 */
                $selectedPlaceHolderWrapper: HTMLElement;
                /** 下拉箭头区域 */
                $suffix: HTMLElement;
                /** 下拉箭头图标 */
                $suffixIcon: HTMLElement;
                /** 下拉列表弹窗的下拉列表容器 */
                $selectDialogContainer: HTMLElement | null;
            };
            $data: {
                /**
                 * 数据
                 */
                data: PopsPanelSelectDataOption<any>[];
                /**
                 * 默认值
                 */
                defaultValue: any;
                /**
                 * 选择的信息
                 */
                selectedData: PopsPanelSelectDataOption<any> | undefined;
                /**
                 * 是否验证通过
                 */
                isValidSuccess: boolean;
                /**
                 * 箭头旋转的属性
                 */
                rotateKey: string;
            };
            /** 初始化 */
            init(): void;
            /** 初始化默认值 */
            initDefault(): void;
            /** 初始化$ele变量 */
            initEl(): void;
            /**
             * 初始化提示文字
             */
            initPlaceHolder(): void;
            /**
             * 重新渲染外面的已选择项的文本
             *
             * 如果未选择，显示提示文字
             */
            renderSelectText(): void;
            /**
             * 禁用选项容器
             */
            disable(): void;
            /**
             * 取消禁用选项容器
             */
            cancleDisable(): void;
            /**
             * 判断当前是否已禁用选项容器
             */
            isDisabled(): boolean;
            /**
             * 设置选择列表的点击事件
             *
             * 点击显示选择列表的弹窗
             */
            onShowSelectDialogClick(): void;
            /**
             * 选中的值改变的回调
             * @param data 当前的选中信息
             */
            onValueChangeCallback(data?: PopsPanelSelectDataOption<any>, isUpdateSelectItem?: boolean): void;
            /**
             * 更新选项弹窗内的所有选项元素的状态
             *
             * + 更新禁用状态
             * + 更新选中状态
             */
            updateAllSelectItemStatus(): void;
            /**
             * 重置所有已选中的项以下状态
             *
             * + 更新选项显示的文字
             * + 移除禁用状态
             * + 移除选中状态
             */
            resetAllSelectedItemStatus(): void;
            /**
             * 设置选项元素选中
             * @param $el 选项元素
             */
            setItemSelected($el: HTMLElement): void;
            /**
             * 移除选项元素选中
             * @param $el 选项元素
             */
            removeItemSelected($el: HTMLElement): void;
            /**
             * 判断选项元素是否选中
             * @param $el
             */
            isItemSelected($el: HTMLElement): boolean;
            /**
             * 添加选中信息
             * @param data 选择项的数据
             * @param [triggerValueChangeCallBack=true] 主动触发值改变回调
             */
            addSelectedItemInfo(data: PopsPanelSelectDataOption<any>): void;
            /**
             * 获取项上存储的信息
             * @param $el 选项元素
             */
            getItemDataOption($el: HTMLElement): PopsPanelSelectDataOption<any>;
            /**
             * 移除选中信息
             * @param data 选择项的数据
             */
            removeSelectedItemInfo(): void;
            /**
             * 更新选中信息
             * @param data 数据
             */
            updateSelectedInfo(data?: PopsPanelSelectDataOption<any>): void;
            /**
             * 从保存的已选中的信息列表中移除目标信息
             */
            resetCurrentSelectedInfo(): void;
            /**
             * 获取所有选项的信息
             * @param [onlySelected=true] 是否仅获取选中的项的信息
             * + true （默认）仅获取选中项的信息
             * + false 获取所有选择项的信息
             */
            getAllSelectItems(onlySelected?: boolean): {
                /** 选项信息数据 */
                data: PopsPanelSelectDataOption<any>;
                /** 选项元素 */
                $select: HTMLElement;
            }[];
            /**
             * 创建一个选择项元素
             * @param data 选择项的数据
             */
            createSelectItemElement(data: PopsPanelSelectDataOption<any>): HTMLLIElement;
            /**
             * 设置选择项的文字
             * @param data 选择项的数据
             * @param $select 选择项元素
             */
            setSelectItemText(data: PopsPanelSelectDataOption<any>, $select: HTMLElement): void;
            /**
             * 设置选择项禁用
             * @param $select 选择项元素
             */
            setSelectItemDisabled($select: HTMLElement): void;
            /**
             * 移除选择项的禁用状态
             * @param $select 选择项元素
             */
            removeSelectItemDisabled($select: HTMLElement): void;
            /**
             * 判断选择项是否禁用
             * @param $select 选择项元素
             */
            isSelectItemDisabled($select: HTMLElement): string | true | null;
            /**
             * 设置选择项的点击事件
             * @param data 该选择项的信息
             * @param $select 该选择项元素
             */
            onSelectItemClick(data: PopsPanelSelectDataOption<any> | undefined, $select: HTMLElement): void;
            /** 显示输入框 */
            showInputWrapper(): void;
            /** 隐藏输入框 */
            hideInputWrapper(): void;
            /** 显示palceholder */
            showPlaceHolderWrapper(): void;
            /** 隐藏palceholder */
            hidePlaceHolderWrapper(): void;
        } | {
            [Symbol.toStringTag]: string;
            $el: {
                itemLeftTextContainer: HTMLElement | null;
                panelSelect: HTMLDivElement;
                select: HTMLSelectElement;
            };
            $eleKey: {
                disable: string;
                value: string;
                viewConfig: string;
            };
            $data: {
                data: PopsPanelSelectDataOption<any>[];
                defaultValue: any;
            };
            init(): void;
            /**
             * 给option元素设置属性
             * @param $ele
             * @param key
             * @param value
             */
            setNodeValue($ele: HTMLElement, key: string, value: any): void;
            /**
             * 获取option元素上设置的属性
             * @param $ele
             * @param value
             * @param key
             */
            getNodeValue($ele: HTMLElement, key: string): any;
            /**
             * 禁用选项
             */
            disable(): void;
            /**
             * 取消禁用
             */
            notDisable(): void;
            /**
             * 判断是否禁用
             */
            isDisabled(): boolean;
            /**
             * 初始化选项
             */
            initOption(): void;
            /**
             * 设置选项选中
             * @param $option
             */
            setOptionSelected($option: HTMLOptionElement): void;
            /**
             * 检测所有option并设置禁用状态
             */
            setSelectOptionsDisableStatus(): void;
            /**
             * 设置禁用状态
             * @param $option
             */
            setOptionDisableStatus($option: HTMLOptionElement): void;
            /**
             * 获取option上的信息
             * @param $option
             */
            getSelectOptionInfo($option: HTMLOptionElement): {
                value: any;
                text: string;
                views: NonNullable<IFunction<(PopsPanelViewConfig | PopsPanelContainerConfig)[]> | undefined>;
                $option: HTMLOptionElement;
            };
            /**
             * 监听选择内容改变
             */
            onValueChange(): void;
            /**
             * 监听点击事件
             */
            onClick(): void;
        };
    };
    /**
     * type ==> select-multiple
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_select_multiple(viewConfig: PopsPanelSelectMultipleConfig<any>): {
        $el: HTMLLIElement;
        handler: {
            [Symbol.toStringTag]: string;
            $el: {
                /** 左侧文本容器 */
                itemLeftTextContainer: HTMLElement | null;
                /** 选择框容器 */
                $container: HTMLElement;
                /** 选择框包裹的容器 */
                $wrapper: HTMLElement;
                /** 内容区域 */
                $section: HTMLElement;
                /** 手动输入 */
                $selectedInputWrapper: HTMLElement;
                /** 灰色提示语 */
                $selectedPlaceHolderWrapper: HTMLElement;
                /** 下拉箭头区域 */
                $suffix: HTMLElement;
                /** 下拉箭头图标 */
                $suffixIcon: HTMLElement;
                /** 下拉列表弹窗的下拉列表容器 */
                $selectContainer: HTMLElement | null;
            };
            $data: {
                /** 默认值 */
                defaultValue: any[];
                /**
                 * 已选择的信息
                 */
                selectedDataList: PopsPanelSelectMultipleDataOption<any>[];
                /**
                 * 箭头旋转的属性
                 */
                rotateKey: string;
            };
            /** 初始化 */
            init(): void;
            /** 初始化默认值 */
            initDefault(): void;
            /** 初始化$el变量 */
            inintEl(): void;
            /**
             * 初始化提示文字
             */
            initPlaceHolder(): void;
            /**
             * 初始化tag元素
             */
            initTagElement(): void;
            /**
             * 生成一个tag项
             * @param data 配置
             */
            createTagItem(data: PopsPanelSelectMultipleDataOption<any>): {
                $tag: HTMLDivElement;
                $tagText: HTMLSpanElement;
                $closeIcon: HTMLElement;
            };
            /**
             * 添加选中项的tag元素
             * @param $tag 添加的元素
             */
            addTagItem($tag: HTMLElement): void;
            /**
             * 更新tag信息
             */
            updateTagItem(): void;
            /**
             * 选中的值改变的回调
             * @param selectedDataList 当前的选中信息
             */
            onValueChange(selectedDataList?: PopsPanelSelectMultipleDataOption<any>[]): void;
            /**
             * 更新选项弹窗内的所有选项元素的状态
             *
             * + 更新禁用状态
             * + 更新选中状态
             */
            updateAllSelectItems(): void;
            /**
             * 设置选项元素选中
             * @param $select 选项元素
             */
            setItemSelected($select: HTMLElement): void;
            /**
             * 移除选项元素选中
             * @param $select 选项元素
             */
            removeItemSelected($select: HTMLElement): void;
            /**
             * 判断选项元素是否选中
             * @param $select
             */
            isItemSelected($select: HTMLElement): boolean;
            /**
             * 添加选中信息
             * @param dataList 选择项列表的数据
             * @param $select 选项元素
             */
            addItemSelected(dataList: PopsPanelSelectMultipleDataOption<any>[], $select: HTMLElement): void;
            /**
             * 获取选中的项的信息
             * @param $select 选项元素
             */
            getSelectedItemInfo($select: HTMLElement): PopsPanelSelectMultipleDataOption<any>;
            /**
             * 移除选中信息
             * @param dataList 选择项的数据
             * @param $select 选项元素
             */
            removeSelectedItemInfo(dataList: PopsPanelSelectMultipleDataOption<any>[], $select: HTMLElement): void;
            /**
             * 获取所有选项的信息
             * @param [onlySelected=true] 是否仅获取选中的项的信息
             * + true （默认）仅获取选中项的信息
             * + false 获取所有选择项的信息
             */
            getAllSelectItemInfo(onlySelected?: boolean): {
                /** 选项信息数据 */
                data: PopsPanelSelectMultipleDataOption<any>;
                /** 选项元素 */
                $select: HTMLElement;
            }[];
            /**
             * 创建一个选择项元素
             * @param data 选择项的数据
             */
            createSelectItemElement(data: PopsPanelSelectMultipleDataOption<any>): HTMLLIElement;
            /**
             * 设置选择项的文字
             * @param data 选择项的数据
             * @param $select 选择项元素
             */
            setSelectItemText(data: PopsPanelSelectMultipleDataOption<any>, $select: HTMLElement): void;
            /**
             * 设置选择项的禁用状态
             * @param $select 选择项元素
             */
            disableSelectItem($select: HTMLElement): void;
            /**
             * 移除选择项的禁用状态
             * @param $select 选择项元素
             */
            cancleDisableSelectItem($select: HTMLElement): void;
            /**
             * 判断选择项是否禁用
             * @param $select 选择项元素
             */
            isSelectItemDisabled($select: HTMLElement): string | true | null;
            /**
             * 设置选择项的点击事件
             * @param dataList 选中的信息列表
             * @param $select 选择项元素
             */
            onSelectItemClick(dataList: PopsPanelSelectMultipleDataOption<any>[], $select: HTMLElement): void;
            /**
             * 设置下拉列表的点击事件
             *
             * 点击显示下拉列表弹窗
             */
            onShowSelectDialogClick(): void;
            /**
             * 设置关闭图标的点击事件
             * @param data 选中的信息
             */
            onSelectItemCloseIconClick(data: {
                /** 关闭图标的元素 */
                $closeIcon: HTMLElement;
                /** tag元素 */
                $tag: HTMLElement;
                /** 值 */
                value: PopsPanelSelectMultipleDataOption<any>["value"];
                /** 显示的文字 */
                text: PopsPanelSelectMultipleDataOption<any>["text"];
            }): void;
            /**
             * 检测tag是否为空
             *
             * 如果为空则显示placeholder
             */
            checkTagEmpty(): void;
            /**
             * 移除选中项元素
             */
            removeSelectedTagItem($tag: HTMLElement): void;
            /**
             * 从保存的已选中的信息列表中移除目标信息
             * @param data 需要移除的信息
             * @param [triggerValueChangeCallBack=true] 是否触发值改变的回调
             * + true （默认）触发值改变的回调
             * + false 不触发值改变的回调
             */
            removeSelectedInfo(data: PopsPanelSelectMultipleDataOption<any>, triggerValueChangeCallBack?: boolean): void;
            /** 显示输入框 */
            showInputWrapper(): void;
            /** 隐藏输入框 */
            hideInputWrapper(): void;
            /** 显示palceholder */
            showPlaceHolderWrapper(): void;
            /** 隐藏palceholder */
            hidePlaceHolderWrapper(): void;
            /** 设置隐藏section的前面的空白 */
            setSectionIsNear(): void;
            /** 取消设置隐藏section的前面的空白 */
            removeSectionIsNear(): void;
            /**
             * 禁用标签
             */
            disable(): void;
            /**
             * 判断是否被禁用
             */
            isDisabled(): boolean;
            /**
             * 取消禁用标签
             */
            cancleDisable(): void;
        };
    };
    /**
     * type ==> button
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_button(viewConfig: PopsPanelButtonConfig): {
        $el: HTMLLIElement;
        handler: {
            [Symbol.toStringTag]: string;
            $ele: {
                panelButton: HTMLDivElement;
                button: HTMLDivElement;
                icon: HTMLDivElement;
                spanText: HTMLDivElement;
            };
            $data: {};
            init(): void;
            initButton(): void;
            disable(): void;
            notDisable(): void;
            /**
             * 隐藏icon图标
             */
            hideIcon(): void;
            /**
             * 显示icon图标
             */
            showIcon(): void;
            /**
             * 设置icon图标的svg
             */
            setIconSVG(svgHTML: string): void;
            /**
             * 设置icon图标是否旋转
             * @param status
             */
            setIconLoadingStatus(status: any): void;
            /**
             * 设置属性上是否存在icon图标
             */
            setHasIcon(value: any): void;
            /**
             * 设置按钮类型
             * @param typeValue
             */
            setButtonType(typeValue: string): void;
            /**
             * 添加按钮的图标在右边
             */
            setIconRight(): void;
            /**
             * （默认）添加按钮的图标在左边
             */
            setIconLeft(): void;
            /**
             * 设置按钮文本
             * @param text
             */
            setButtonText(text: string): void;
            /**
             * 设置按钮的点击事件
             */
            onButtonClick(): void;
        };
    };
    /**
     * type ==> deepMenu
     * 获取深层容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_deepMenu(viewConfig: PopsPanelDeepViewConfig): {
        $el: HTMLLIElement;
        handler: {
            [Symbol.toStringTag]: string;
            $ele: {
                readonly parentSection: HTMLElement;
            };
            init(): void;
            /**
             * 生成配置每一项的元素
             * @param $container
             * @param formItemConfig
             */
            initContainerItem($container: HTMLElement, formItemConfig: PopsPanelViewConfig | PopsPanelContainerConfig): void;
            /**
             * 前往子菜单
             * @param event 点击事件
             * @param liElement 当前的<li>元素
             */
            gotoDeepMenu(event: Event, liElement: HTMLLIElement): Promise<void>;
            /** 设置项的点击事件 */
            onLiClick(): void;
        };
    };
    /**
     * type ===> own
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_own(viewConfig: PopsPanelOwnConfig): {
        $el: HTMLLIElement;
    };
    /**
     * 获取中间容器的元素<li>
     * @param viewConfig 视图配置
     */
    createSectionContainerItem(viewConfig: PopsPanelViewConfig): {
        $el: HTMLLIElement;
    } | undefined;
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
    onAsideItemClick($asideItem: HTMLElement, asideConfig: PopsPanelContentConfig): void;
};
