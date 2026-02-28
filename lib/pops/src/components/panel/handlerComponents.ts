import { PopsCommonCSSClassName } from "../../config/CommonCSSClassName";
import { PopsCSS } from "../../PopsCSS";
import { PopsIcon } from "../../PopsIcon";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { PopsMathFloatUtils } from "../../utils/PopsMathUtils";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsAlert } from "../alert";
import type { PopsAlertConfig } from "../alert/types";
import { PopsTooltip } from "../tooltip";
import type {
  PopsPanelBottomContentConfig,
  PopsPanelConfig,
  PopsPanelContentConfig,
  PopsPanelEventType,
  PopsPanelViewConfig,
} from "./types";
import type { PopsPanelButtonConfig } from "./types/components-button";
import type { PopsPanelGeneralConfig, PopsPanelRightAsideContainerConfig } from "./types/components-common";
import type { PopsPanelContainerConfig } from "./types/components-container";
import type { PopsPanelDeepViewConfig } from "./types/components-deepMenu";
import type { PopsPanelInputConfig, PopsPanelInputType } from "./types/components-input";
import type { PopsPanelOwnConfig } from "./types/components-own";
import type { PopsPanelSelectConfig, PopsPanelSelectDataOption } from "./types/components-select";
import type {
  PopsPanelSelectMultipleConfig,
  PopsPanelSelectMultipleDataOption,
} from "./types/components-selectMultiple";
import type { PopsPanelSliderConfig } from "./types/components-slider";
import type { PopsPanelSwitchConfig } from "./types/components-switch";
import type { PopsPanelTextAreaConfig } from "./types/components-textarea";
/**
 * 处理组件（把组件配置转为组件元素）
 */
export const PanelHandlerComponents = () => {
  return {
    /**
     * 左侧上方的的ul容器
     */
    asideULElement: null as any as HTMLUListElement,
    /**
     * 左侧下方的ul容器
     */
    asideBottomULElement: null as any as HTMLUListElement,
    /**
     * 右侧主内容的顶部文字ul容器
     */
    sectionContainerHeaderULElement: null as any as HTMLUListElement,
    /**
     * 右侧主内容的ul容器
     */
    sectionContainerULElement: null as any as HTMLUListElement,
    /**
     * 元素
     */
    $el: {
      /** pops主元素 */
      $pops: null as any as HTMLElement,
      /** 内容 */
      $content: null as any as HTMLElement,
      /** section元素的包裹容器 */
      $panelRightSectionWrapper: null as any as HTMLElement,
      /** 左侧容器 */
      $panelLeftAside: null as any as HTMLElement,
      /** 右侧容器 */
      $panelContentSectionContainer: null as any as HTMLElement,
      $panelBottomWrapper: null as any as HTMLElement,
      $panelBottomContainer: null as any as HTMLElement,
      $panelBottomLeftContainer: null as any as HTMLElement,
      $panelBottomRightContainer: null as any as HTMLElement,
    },
    $data: {
      nodeStoreConfigKey: "data-view-config",
    },
    $config: {} as Required<PopsPanelConfig>,
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
    }) {
      const PopsType = "panel";
      this.$el = {
        ...data.$el,
      };
      this.$config = data.config;

      this.asideULElement = this.$el.$panelLeftAside.querySelector<HTMLUListElement>(
        `ul.pops-${PopsType}-aside-top-container`
      )!;
      this.asideBottomULElement = this.$el.$panelLeftAside.querySelector<HTMLUListElement>(
        `ul.pops-${PopsType}-aside-bottom-container`
      )!;
      this.sectionContainerHeaderULElement = this.$el.$panelContentSectionContainer.querySelector<HTMLUListElement>(
        `ul.pops-${PopsType}-container-header-ul`
      )!;
      this.sectionContainerULElement = this.$el.$panelContentSectionContainer.querySelector<HTMLUListElement>(
        `ul.pops-${PopsType}-container-main-ul`
      )!;
      /**
       * 默认点击的左侧容器项
       */
      let $defaultAsideItem: HTMLLIElement | null = null;
      /** 是否滚动到默认位置（第一个项） */
      let isScrollToDefaultView = false;
      // 初始化内容配置
      data.config.content.forEach((asideItemConfig) => {
        const $asideLiElement = this.createAsideItem(asideItemConfig);
        this.onAsideItemClick($asideLiElement, asideItemConfig);
        // 是否处于底部
        const isBottom =
          typeof asideItemConfig.isBottom === "function" ? asideItemConfig.isBottom() : asideItemConfig.isBottom;
        if (isBottom) {
          this.asideBottomULElement.appendChild($asideLiElement);
        } else {
          this.asideULElement.appendChild($asideLiElement);
        }
        if ($defaultAsideItem == null) {
          let flag = false;
          if (typeof asideItemConfig.isDefault === "function") {
            flag = Boolean(asideItemConfig.isDefault());
          } else {
            flag = Boolean(asideItemConfig.isDefault);
          }
          if (flag) {
            $defaultAsideItem = $asideLiElement;
            isScrollToDefaultView = Boolean(asideItemConfig.scrollToDefaultView);
          }
        }
        if (typeof asideItemConfig.afterRender === "function") {
          // 执行渲染完毕的回调
          asideItemConfig.afterRender({
            asideConfig: asideItemConfig,
            $asideLiElement: $asideLiElement,
          });
        }
      });
      // 初始化底部内容配置
      (data.config?.bottomContentConfig || []).forEach((bottomItemConfig) => {
        const $bottomLiElement = this.createBottomItem(bottomItemConfig);
        this.onBottomItemClick($bottomLiElement, bottomItemConfig);
        if (bottomItemConfig.position === "left" || bottomItemConfig.position == null) {
          this.$el.$panelBottomLeftContainer.appendChild($bottomLiElement);
        } else if (bottomItemConfig.position === "right") {
          this.$el.$panelBottomRightContainer.appendChild($bottomLiElement);
        } else {
          throw new Error("pops.panel：bottomContentConfig.position参数错误");
        }
        if (typeof bottomItemConfig.afterRender === "function") {
          // 执行渲染完毕的回调
          bottomItemConfig.afterRender({
            $bottomWrapper: this.$el.$panelBottomWrapper,
            $bottomContainer: this.$el.$panelBottomContainer,
            $bottomLeftContainer: this.$el.$panelBottomLeftContainer,
            $bottomRightContainer: this.$el.$panelBottomRightContainer,
          });
        }
      });

      // 点击左侧列表
      if ($defaultAsideItem == null && this.asideULElement.children.length) {
        // 默认第一个
        $defaultAsideItem = <HTMLLIElement>this.asideULElement.children[0];
      }
      if ($defaultAsideItem) {
        // 点击选择的那一项
        $defaultAsideItem.click();
        if (isScrollToDefaultView) {
          $defaultAsideItem?.scrollIntoView();
        }
      } else {
        console.error("pops.panel：左侧容器没有项");
      }
    },
    /**
     * 清空container容器的元素
     */
    clearContainer() {
      Reflect.deleteProperty(this.$el.$panelContentSectionContainer, this.$data.nodeStoreConfigKey);
      PopsSafeUtils.setSafeHTML(this.sectionContainerHeaderULElement, "");
      PopsSafeUtils.setSafeHTML(this.sectionContainerULElement, "");
      this.clearDeepMenuContainer();
    },
    /**
     * 清空deepMenu的容器元素
     */
    clearDeepMenuContainer() {
      this.$el.$panelRightSectionWrapper
        ?.querySelectorAll("section.pops-panel-deepMenu-container")
        .forEach(($el) => $el.remove());
    },
    /**
     * 清空左侧容器已访问记录
     */
    clearAsideItemIsVisited() {
      this.$el.$panelLeftAside.querySelectorAll<HTMLDivElement>(".pops-is-visited").forEach(($el) => {
        popsDOMUtils.removeClassName($el, "pops-is-visited");
      });
    },
    /**
     * 设置左侧容器已访问记录
     * @param $el
     */
    setAsideItemIsVisited($el: HTMLElement) {
      popsDOMUtils.addClassName($el, "pops-is-visited");
    },
    /**
     * 为元素添加自定义属性
     * @param $el 元素
     * @param attributes 属性
     */
    setElementAttributes($el: HTMLElement, attributes?: any) {
      if (attributes == null) {
        return;
      }
      if (Array.isArray(attributes)) {
        attributes.forEach((attrObject) => {
          this.setElementAttributes($el, attrObject);
        });
      } else {
        Object.keys(attributes).forEach((attributeName) => {
          $el.setAttribute(attributeName, attributes[attributeName]);
        });
      }
    },
    /**
     * 为元素设置(自定义)属性
     * @param $el 元素
     * @param props 属性
     */
    setElementProps($el: HTMLElement, props?: any) {
      if (props == null) return;
      if (typeof props !== "object") return;
      const propsKeys = Object.keys(props);
      propsKeys.forEach((propName) => {
        const value = props[propName];
        if (propName === "innerHTML") {
          PopsSafeUtils.setSafeHTML($el, value);
          return;
        }
        Reflect.set($el, propName, value);
      });
    },
    /**
     * 为元素设置classname
     * @param $el 元素
     * @param className
     */
    setElementClassName($el: HTMLElement, className?: PopsPanelGeneralConfig<any>["className"]) {
      popsDOMUtils.addClassName($el, className);
    },
    /**
     * 创建底部项元素<li>
     * @param bottomItemConfig 配置
     */
    createBottomItem(bottomItemConfig: PopsPanelBottomContentConfig) {
      // 显示的文本
      const text = typeof bottomItemConfig.text === "function" ? bottomItemConfig.text() : bottomItemConfig.text;
      const className = Array.isArray(bottomItemConfig.className)
        ? bottomItemConfig.className.join(" ")
        : bottomItemConfig.className || "";
      const $li = popsDOMUtils.createElement("li", {
        className: ["pops-panel-bottom-item", "pops-user-select-none", className].join(" "),
        innerHTML: text,
      });
      // 处理attr
      this.setElementAttributes($li, bottomItemConfig.attributes);
      // 处理props
      this.setElementProps($li, bottomItemConfig.props);
      /** 禁用左侧项的hover的CSS样式的类名 */
      const disablHoverCSSClassName = "pops-panel-disable-bottom-item-hover-css";
      /** 是否禁用左侧项的hover的CSS样式 */
      const isDisableHoverCSS =
        typeof bottomItemConfig.disableHoverCSS === "function"
          ? bottomItemConfig.disableHoverCSS()
          : bottomItemConfig.disableHoverCSS;
      if (isDisableHoverCSS) {
        $li.classList.add(disablHoverCSSClassName);
      } else {
        $li.classList.remove(disablHoverCSSClassName);
      }
      return $li;
    },
    /**
     * 为底部元素添加点击事件
     * @param $bottomItem 底部<li>元素
     * @param bottomItemConfig 配置
     */
    onBottomItemClick($bottomItem: HTMLElement, bottomItemConfig: PopsPanelBottomContentConfig) {
      popsDOMUtils.on<MouseEvent | PointerEvent>($bottomItem, "click", async (event) => {
        if (typeof bottomItemConfig.clickCallback === "function") {
          // 执行回调
          const asideClickCallbackResult = await bottomItemConfig.clickCallback(event);
          if (typeof asideClickCallbackResult === "boolean" && !asideClickCallbackResult) {
            return;
          }
        }
      });
    },
    /**
     * 创建左侧容器元素<li>
     * @param  asideConfig 配置
     */
    createAsideItem(asideConfig: PopsPanelContentConfig) {
      // 显示的文本
      const text = typeof asideConfig.title === "function" ? asideConfig.title() : asideConfig.title;
      const $li = popsDOMUtils.createElement("li", {
        id: asideConfig.id,
        innerHTML: text,
      });
      Reflect.set($li, "__forms__", asideConfig.views);
      // 处理className
      this.setElementClassName($li, "pops-panel-aside-item");
      this.setElementClassName($li, asideConfig.className);
      // 处理attr
      this.setElementAttributes($li, asideConfig.attributes);
      // 处理props
      this.setElementProps($li, asideConfig.props);
      /** 禁用左侧项的hover的CSS样式的类名 */
      const disablHoverCSSClassName = "pops-panel-disabled-aside-hover-css";
      /** 是否禁用左侧项的hover的CSS样式 */
      const isDisableItemHoverCSS =
        typeof asideConfig.disableAsideItemHoverCSS === "function"
          ? asideConfig.disableAsideItemHoverCSS()
          : asideConfig.disableAsideItemHoverCSS;
      if (isDisableItemHoverCSS) {
        $li.classList.add(disablHoverCSSClassName);
      } else {
        $li.classList.remove(disablHoverCSSClassName);
      }
      return $li;
    },
    /**
     * type ==> switch
     * 创建中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_switch(viewConfig: PopsPanelSwitchConfig) {
      const $li = popsDOMUtils.createElement("li");
      Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
      this.setElementClassName($li, viewConfig.className);
      this.setElementAttributes($li, viewConfig.attributes);
      this.setElementProps($li, viewConfig.props);
      // 左边底部的描述的文字
      let leftDescriptionText = "";
      if (viewConfig.description) {
        leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
      }
      PopsSafeUtils.setSafeHTML(
        $li,
        /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`
      );
      const PopsPanelSwitch = {
        [Symbol.toStringTag]: "PopsPanelSwitch",
        $data: {
          value: Boolean(viewConfig.getValue()),
        },
        $ele: {
          itemLeftTextContainer: $li.querySelector<HTMLElement>(".pops-panel-item-left-text"),
          switch: $li.querySelector<HTMLDivElement>(".pops-panel-switch")!,
          input: $li.querySelector<HTMLInputElement>(".pops-panel-switch__input")!,
          core: $li.querySelector<HTMLSpanElement>(".pops-panel-switch__core")!,
        },
        init() {
          this.setStatus(this.$data.value);
          const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
          if (disabled) {
            this.disable();
          }
          this.onClick();
        },
        /**
         * 设置点击事件
         */
        onClick() {
          popsDOMUtils.on(this.$ele.core, "click", async (event) => {
            if (this.$ele.input.disabled || this.$ele.switch.hasAttribute("data-disabled")) {
              return;
            }
            const status = this.getStatus();
            if (typeof viewConfig.beforeSwitchStatusChangeCallBack === "function") {
              const flag = await viewConfig.beforeSwitchStatusChangeCallBack(event, status);
              if (typeof flag === "boolean" && !flag) {
                return;
              }
            }
            // 设置为逆反状态
            this.$data.value = !status;
            this.setStatus(this.$data.value);
            if (typeof viewConfig.callback === "function") {
              await viewConfig.callback(event, this.$data.value);
            }
          });
        },
        /**
         * 设置状态
         */
        setStatus(isChecked = false) {
          isChecked = Boolean(isChecked);
          this.$ele.input.checked = isChecked;
          if (isChecked) {
            popsDOMUtils.addClassName(this.$ele.switch, "pops-panel-switch-is-checked");
          } else {
            popsDOMUtils.removeClassName(this.$ele.switch, "pops-panel-switch-is-checked");
          }
        },
        /**
         * 获取开/关的逆反状态
         */
        getReverseStatus() {
          return !this.getStatus();
        },
        /**
         * 获取开/关的状态
         */
        getStatus() {
          let checkedValue = false;
          if (popsDOMUtils.containsClassName(this.$ele.switch, "pops-panel-switch-is-checked")) {
            checkedValue = true;
          }
          return checkedValue;
        },
        /**
         * 禁用复选框
         */
        disable() {
          this.$ele.input.disabled = true;
          this.$ele.switch.setAttribute("data-disabled", "true");
          popsDOMUtils.addClassName(this.$ele.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
        },
        /**
         * 取消禁用复选框
         */
        notDisable() {
          this.$ele.input.disabled = false;
          this.$ele.switch.removeAttribute("data-disabled");
          popsDOMUtils.removeClassName(this.$ele.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
        },
      };

      PopsPanelSwitch.init();
      Reflect.set($li, "data-switch", PopsPanelSwitch);
      return {
        $el: $li,
        handler: PopsPanelSwitch,
      };
    },
    /**
     * type ==> slider
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_slider(viewConfig: PopsPanelSliderConfig) {
      const $li = popsDOMUtils.createElement("li");
      Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
      this.setElementClassName($li, viewConfig.className);
      this.setElementAttributes($li, viewConfig.attributes);
      this.setElementProps($li, viewConfig.props);
      // 左边底部的描述的文字
      let leftDescriptionText = "";
      if (viewConfig.description) {
        leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
      }
      PopsSafeUtils.setSafeHTML(
        $li,
        /*html*/ `
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`
      );
      const PopsPanelSlider = {
        [Symbol.toStringTag]: "PopsPanelSlider",
        /**
         * 值
         */
        value: viewConfig.getValue(),
        /**
         * 最小值
         */
        min: viewConfig.min,
        /**
         * 最大值
         */
        max: viewConfig.max,
        /**
         * 间隔
         */
        step: viewConfig.step || 1,
        $data: {
          /**
           * 是否正在移动
           */
          isMove: false,
          /**
           * 是否已初始化已拖拽的距离
           */
          isInitDragPosition: false,
          /**
           * 是否正在检测是否停止拖拽
           */
          isCheckingStopDragMove: false,
          /**
           * 总宽度（px）
           */
          totalWidth: 0,
          /**
           * 每一块的间隔（px）
           */
          stepPx: 0,
          /**
           * 已拖拽的距离（px）
           */
          dragWidth: 0,
          /**
           * 已拖拽的百分比
           */
          dragPercent: 0,
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
          stepBlockMap: new Map<
            number,
            {
              value: number;
              px: number;
              pxLeft: number;
              pxRight: number;
              percent: number;
            }
          >(),
          tooltip: null as any as ReturnType<typeof PopsTooltip.init>,
        },
        $ele: {
          itemLeftTextContainer: $li.querySelector<HTMLElement>(".pops-panel-item-left-text"),
          slider: $li.querySelector<HTMLElement>(".pops-slider")!,
          runAway: $li.querySelector<HTMLElement>(".pops-slider__runway")!,
          bar: $li.querySelector<HTMLElement>(".pops-slider__bar")!,
          buttonWrapper: $li.querySelector<HTMLElement>(".pops-slider__button-wrapper")!,
          button: $li.querySelector<HTMLElement>(".pops-slider__button")!,
        },
        $interval: {
          isCheck: false,
        },
        $tooltip: null as any as ReturnType<typeof popsUtils.AnyTouch>["prototype"],
        init() {
          this.initEleData();
          this.setToolTipEvent();
          this.setPanEvent();
          this.onRunAwayClick();
          this.intervalInit();
          if (this.isDisabledDragWithConfig()) {
            this.disableDrag();
          }
        },
        /**
         * 10s内循环获取slider的宽度等信息
         * 获取到了就可以初始化left的值
         * @param [checkStepTime=200] 每次检测的间隔时间
         * @param [maxTime=10000] 最大的检测时间
         */
        intervalInit(checkStepTime = 200, maxTime = 10000) {
          if (this.$interval.isCheck) {
            return;
          }
          this.$interval.isCheck = true;
          let isSuccess = false;
          const oldTotalWidth = this.$data.totalWidth;
          let timer: number | undefined = void 0;
          const interval = setInterval(() => {
            if (isSuccess) {
              this.$interval.isCheck = false;
              clearTimeout(timer);
              clearInterval(interval);
            } else {
              this.initTotalWidth();
              if (this.$data.totalWidth !== 0) {
                isSuccess = true;
                if (this.$data.totalWidth !== oldTotalWidth) {
                  // slider的总宽度改变了
                  if (PopsMathFloatUtils.isFloat(this.step)) {
                    this.initFloatStepMap();
                  } else {
                    this.initStepMap();
                  }
                  this.initSliderPosition();
                }
              }
            }
          }, checkStepTime);
          // 最长检测时间是10s
          timer = setTimeout(() => {
            clearInterval(interval);
          }, maxTime);
        },
        /**
         * 把数据添加到元素上
         */
        initEleData() {
          this.$ele.slider.setAttribute("data-min", this.min.toString());
          this.$ele.slider.setAttribute("data-max", this.max.toString());
          this.$ele.slider.setAttribute("data-value", this.value.toString());
          this.$ele.slider.setAttribute("data-step", this.step.toString());
          Reflect.set(this.$ele.slider, "data-min", this.min);
          Reflect.set(this.$ele.slider, "data-max", this.max);
          Reflect.set(this.$ele.slider, "data-value", this.value);
          Reflect.set(this.$ele.slider, "data-step", this.step);
        },
        /**
         * 初始化滑块的总长度的数据(px)
         */
        initTotalWidth() {
          this.$data.totalWidth = popsDOMUtils.width(this.$ele.runAway);
        },
        /**
         * 初始化每一个块的具体数据信息
         */
        initStepMap() {
          let index = 0;
          // 计算出份数
          const blockNums = (this.max - this.min) / this.step;
          // 计算出每一份占据的px
          this.$data.stepPx = this.$data.totalWidth / blockNums;
          let widthPx = 0;
          for (let stepValue = this.min; stepValue <= this.max; stepValue += this.step) {
            const value = this.formatValue(stepValue);
            let info;
            if (value === this.min) {
              // 起始
              info = {
                value: value,
                px: 0,
                pxLeft: 0,
                pxRight: this.$data.stepPx / 2,
                percent: 0,
              };
            } else {
              info = {
                value: value,
                px: widthPx,
                pxLeft: widthPx - this.$data.stepPx / 2,
                pxRight: widthPx + this.$data.stepPx / 2,
                percent: widthPx / this.$data.totalWidth,
              };
              //if (value === this.max) {
              //  info["pxLeft"] = this.$data.stepBlockMap.get(
              //    index - 1
              //  ).pxRight;
              //  info["pxRight"] = this.$data.totalWidth;
              //}
            }
            this.$data.stepBlockMap.set(index, info);
            index++;
            widthPx += this.$data.stepPx;
          }
        },
        /**
         * 初始化每一个块的具体数据信息（浮点）
         */
        initFloatStepMap() {
          let index = 0;
          // 计算出份数
          const blockNums = (this.max - this.min) / this.step;
          // 计算出每一份占据的px
          this.$data.stepPx = this.$data.totalWidth / blockNums;
          let widthPx = 0;
          for (
            let stepValue = this.min;
            stepValue <= this.max;
            stepValue = PopsMathFloatUtils.add(stepValue, this.step)
          ) {
            const value = this.formatValue(stepValue);
            let info;
            if (value === this.min) {
              // 起始
              info = {
                value: value,
                px: 0,
                pxLeft: 0,
                pxRight: this.$data.stepPx / 2,
                percent: 0,
              };
            } else {
              info = {
                value: value,
                px: widthPx,
                pxLeft: widthPx - this.$data.stepPx / 2,
                pxRight: widthPx + this.$data.stepPx / 2,
                percent: widthPx / this.$data.totalWidth,
              };
              //if (value === this.max) {
              //  info["pxLeft"] = this.$data.stepBlockMap.get(
              //    index - 1
              //  ).pxRight;
              //  info["pxRight"] = this.$data.totalWidth;
              //}
            }
            this.$data.stepBlockMap.set(index, info);
            index++;
            widthPx += this.$data.stepPx;
          }
        },
        /**
         * 初始化slider的默认起始left的百分比值
         */
        initSliderPosition() {
          // 设置起始默认style的left值
          let percent = 0;
          for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
            // 判断值是否和区域内的值相等
            if (stepBlockInfo.value == this.value) {
              percent = stepBlockInfo.percent;
              this.$data.dragWidth = stepBlockInfo.px;
              break;
            }
          }
          percent = this.formatValue(percent * 100);
          this.setSliderPosition(percent);
        },
        /**
         * 判断数字是否是浮点数
         * @param num
         */
        isFloat(num: number) {
          return Number(num) === num && num % 1 !== 0;
        },
        /**
         * 值改变的回调
         * @param event
         * @param value
         */
        valueChangeCallBack(event: any, value: number) {
          if (typeof viewConfig.callback === "function") {
            viewConfig.callback(event, value);
          }
        },
        /**
         * 根据拖拽距离获取滑块应该在的区间和值
         * @param dragX
         */
        getDragInfo(dragX: number) {
          let result = this.$data.stepBlockMap.get(0);
          for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
            if (stepBlockInfo.pxLeft <= dragX && dragX < stepBlockInfo.pxRight) {
              result = stepBlockInfo;
              break;
            }
          }
          return result;
        },
        /**
         * 获取滑块的当前脱拖拽占据的百分比
         * @param dragWidth
         */
        getSliderPositonPercent(dragWidth: number) {
          return dragWidth / this.$data.totalWidth;
        },
        /**
         * 根据step格式化value
         * @param num
         */
        formatValue(num: number) {
          if (PopsMathFloatUtils.isFloat(this.step)) {
            num = parseFloat(num.toFixed(2));
          } else {
            num = parseInt(num.toString());
          }
          return num;
        },
        /**
         * 设置滑块的位置偏移（left）
         * @param percent 百分比
         */
        setSliderPosition(percent: number) {
          if (parseInt(percent.toString()) === 1) {
            percent = 1;
          }
          if (percent > 1) {
            percent = percent / 100;
          }
          // 滑块按钮的偏移
          this.$ele.buttonWrapper.style.left = `${percent * 100}%`;
          // 滑块进度的宽度
          this.$ele.bar.style.width = `${percent * 100}%`;
        },
        /**
         * 禁止拖拽
         */
        disableDrag() {
          popsDOMUtils.addClassName(this.$ele.runAway, "pops-slider-is-disabled");
          popsDOMUtils.addClassName(this.$ele.runAway, PopsCommonCSSClassName.textIsDisabled);
        },
        /**
         * 允许拖拽
         */
        allowDrag() {
          popsDOMUtils.removeClassName(this.$ele.runAway, "pops-slider-is-disabled");
          popsDOMUtils.removeClassName(this.$ele.runAway, PopsCommonCSSClassName.textIsDisabled);
        },
        /**
         * 判断当前滑块是否被禁用
         */
        isDisabledDrag() {
          return popsDOMUtils.containsClassName(this.$ele.runAway, "pops-slider-is-disabled");
        },
        /**
         * 判断当前滑块是否被禁用（配置中判断）
         */
        isDisabledDragWithConfig() {
          const isDisabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
          if (typeof isDisabled === "boolean") {
            return isDisabled;
          } else {
            return false;
          }
        },
        /**
         * 设置进度条点击定位的事件
         */
        onRunAwayClick() {
          popsDOMUtils.on<PointerEvent | MouseEvent>(
            this.$ele.runAway,
            "click",
            (event) => {
              if (event.target !== this.$ele.runAway && event.target !== this.$ele.bar) {
                return;
              }
              const clickX = parseFloat(event.offsetX.toString());
              const dragStartResult = this.dragStartCallBack();
              if (!dragStartResult) {
                return;
              }
              this.dragMoveCallBack(event, clickX, this.value);
              this.dragEndCallBack(clickX);
            },
            {
              capture: false,
            }
          );
        },
        /**
         * 拖拽开始的回调，如果返回false，禁止拖拽
         */
        dragStartCallBack() {
          if (this.isDisabledDragWithConfig()) {
            // 禁止
            this.disableDrag();
            return false;
          }
          if (!this.$data.isMove) {
            // 非移动中
            if (this.isDisabledDrag()) {
              // 允许
              this.allowDrag();
            }

            this.$data.isMove = true;
          }
          return true;
        },
        /**
         * 拖拽中的回调
         * @param event 事件
         * @param dragX 当前拖拽的距离
         * @param oldValue 旧的值
         */
        dragMoveCallBack(event: any, dragX: number, oldValue: number) {
          let dragPercent = 0;
          if (dragX <= 0) {
            dragPercent = 0;
            this.value = this.min;
          } else if (dragX >= this.$data.totalWidth) {
            dragPercent = 1;
            this.value = this.max;
          } else {
            const dragInfo = this.getDragInfo(dragX)!;
            dragPercent = dragInfo.percent;
            this.value = this.formatValue(dragInfo.value);
          }
          this.$data.dragPercent = dragPercent;
          this.setSliderPosition(this.$data.dragPercent);
          this.showToolTip();
          if (oldValue !== this.value) {
            this.valueChangeCallBack(event, this.value);
          }
        },
        /**
         * 拖拽结束的回调
         */
        dragEndCallBack(dragX: number) {
          this.$data.isMove = false;
          if (dragX <= 0) {
            this.$data.dragWidth = 0;
          } else if (dragX >= this.$data.totalWidth) {
            this.$data.dragWidth = this.$data.totalWidth;
          } else {
            this.$data.dragWidth = dragX;
          }
          this.closeToolTip();
        },
        /**
         * 设置点击拖拽事件
         */
        setPanEvent() {
          const AnyTouch = popsUtils.AnyTouch();
          this.$tooltip = new AnyTouch(this.$ele.button, {
            preventDefault() {
              return false;
            },
          });
          /**
           * 当前的拖拽的距离px
           */
          let currentDragX = 0;
          // 监听拖拽
          this.$tooltip.on("at:move", (event) => {
            if (!this.dragStartCallBack()) {
              return;
            }
            const oldValue = this.value;
            const runAwayRect = this.$ele.runAway.getBoundingClientRect();
            let displacementX = event.x - (runAwayRect.left + globalThis.screenX);
            if (displacementX <= 0) {
              displacementX = 0;
            } else if (displacementX >= runAwayRect.width) {
              displacementX = runAwayRect.width;
            }
            currentDragX = displacementX;
            // 拖拽移动
            this.dragMoveCallBack(event, currentDragX, oldValue);
          });
          // 监听触点离开，处理某些情况下，拖拽松开，但是未触发pan事件，可以通过设置这个来关闭tooltip
          this.$tooltip.on("at:end", () => {
            this.dragEndCallBack(currentDragX);
          });
        },
        /**
         * 显示悬浮的
         */
        showToolTip() {
          this.$data.tooltip.toolTip.show();
        },
        /**
         * 关闭悬浮的
         */
        closeToolTip() {
          this.$data.tooltip.toolTip.close();
        },
        /**
         * 检测在1000ms内，是否停止了拖拽
         */
        checkStopDragMove() {
          if (this.$data.isCheckingStopDragMove) {
            return;
          }
          this.$data.isCheckingStopDragMove = true;
          const interval = setInterval(() => {
            if (!this.$data.isMove) {
              this.$data.isCheckingStopDragMove = false;
              this.closeToolTip();
              clearInterval(interval);
            }
          }, 200);
          setTimeout(() => {
            this.$data.isCheckingStopDragMove = false;
            clearInterval(interval);
          }, 2000);
        },
        /**
         * 设置拖拽按钮的悬浮事件
         */
        setToolTipEvent() {
          /**
           * 获取提示的内容
           */
          function getToolTipContent() {
            if (typeof viewConfig.getToolTipContent === "function") {
              return viewConfig.getToolTipContent(PopsPanelSlider.value);
            } else {
              return PopsPanelSlider.value.toString();
            }
          }

          const tooltip = PopsTooltip.init({
            $target: this.$ele.button,
            content: getToolTipContent,
            zIndex: () => {
              return PopsInstanceUtils.getPopsMaxZIndex().zIndex;
            },
            isFixed: true,
            className: "github-tooltip",
            only: false,
            eventOption: {
              capture: true,
              passive: true,
            },
            showBeforeCallBack: () => {
              const isShowHoverTip =
                typeof viewConfig.isShowHoverTip === "function"
                  ? viewConfig.isShowHoverTip()
                  : typeof viewConfig.isShowHoverTip === "boolean"
                    ? viewConfig.isShowHoverTip
                    : true;
              if (!isShowHoverTip) {
                return false;
              }
              this.intervalInit();
            },
            showAfterCallBack: () => {
              tooltip.toolTip.changeContent(getToolTipContent());
            },
            closeBeforeCallBack: () => {
              if (this.$data.isMove) {
                this.checkStopDragMove();
                return false;
              }
            },
            alwaysShow: false,
            position: "top",
            arrowDistance: 10,
          });
          this.$data.tooltip = tooltip;
        },
      };
      PopsPanelSlider.init();
      Reflect.set($li, "data-slider", PopsPanelSlider);
      return {
        $el: $li,
        handler: PopsPanelSlider,
      };
    },
    /**
     * type ==> input
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_input(viewConfig: PopsPanelInputConfig) {
      const $li = popsDOMUtils.createElement("li");
      Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
      this.setElementClassName($li, viewConfig.className);
      this.setElementAttributes($li, viewConfig.attributes);
      this.setElementProps($li, viewConfig.props);
      const defaultInputType: PopsPanelInputType = "text";
      const inputType = viewConfig.inputType || defaultInputType;
      // 左边底部的描述的文字
      let leftDescriptionText = "";
      if (viewConfig.description) {
        leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
      }
      PopsSafeUtils.setSafeHTML(
        $li,
        /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-input">
          <div class="pops-panel-input_inner">
					  <input type="${inputType}" placeholder="${viewConfig.placeholder ?? ""}">
          </div>
				</div>
				`
      );
      const PopsPanelInput = {
        [Symbol.toStringTag]: "PopsPanelInput",
        $el: {
          itemLeftTextContainer: $li.querySelector<HTMLElement>(".pops-panel-item-left-text"),
          panelInput: $li.querySelector<HTMLDivElement>(".pops-panel-input")!,
          panelInputInner: $li.querySelector<HTMLDivElement>(".pops-panel-input_inner")!,
          input: $li.querySelector<HTMLInputElement>("input")!,
          /** span.pops-panel-input__suffix */
          suffix: popsDOMUtils.createElement("span"),
          /** span.pops-panel-input__suffix-inner */
          suffixInner: null as any as HTMLSpanElement,
          /** i.pops-panel-icon */
          icon: null as any as HTMLElement,
        },
        $data: {
          value: viewConfig.getValue(),
          /**
           * inputType 为 password时使用该值
           *
           * 当前内容的可见性
           */
          isVisible: false,
        },
        init() {
          this.initEle();
          this.setInputValue(this.$data.value);
          // 如果是密码框，放进图标
          if (viewConfig.inputType === "password") {
            // 显示密码
            this.setCircleIcon(PopsIcon.getIcon("view")!);
            this.onIconClick();
          } else {
            // 先判断预设值是否为空，不为空添加清空图标按钮
            // 且为普通的输入框
            if (this.$el.input.value != "" && this.isTextInputType()) {
              // 清除内容的图标
              this.setCircleIcon(PopsIcon.getIcon("circleClose")!);
              this.onIconClick();
            } else {
              // 隐藏图标
              this.hideCircleIconWrapper();
            }
          }

          this.onValueChange();
          // 是否禁用复选框
          const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
          if (disabled) {
            this.disable();
          }
          if (typeof viewConfig.handlerCallBack === "function") {
            viewConfig.handlerCallBack($li, this.$el.input);
          }
        },
        /**
         * 初始化$ele的配置
         */
        initEle() {
          this.$el.input.parentElement!.insertBefore(this.$el.suffix, this.$el.input.nextSibling);
          popsDOMUtils.addClassName(this.$el.suffix, "pops-panel-input__suffix");
          PopsSafeUtils.setSafeHTML(
            this.$el.suffix,
            /*html*/ `
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
					`
          );
          this.$el.suffixInner = this.$el.suffix.querySelector<HTMLElement>(".pops-panel-input__suffix-inner")!;
          this.$el.icon = this.$el.suffix.querySelector<HTMLElement>(".pops-panel-icon")!;
          popsDOMUtils.addClassName(this.$el.panelInput, PopsCommonCSSClassName.userSelectNone);
        },
        /**
         * 校验输入框类型是否是字符串输入框类型
         */
        isTextInputType() {
          const typeList: PopsPanelInputType[] = ["text", "search", "email", "tel", "url"];
          return typeList.includes(viewConfig.inputType || defaultInputType);
        },
        /**
         * 是否是时间输入框类型
         */
        isDateInputType() {
          const typeList: PopsPanelInputType[] = ["date", "datetime-local", "month", "time", "week"];
          return typeList.includes(viewConfig.inputType || defaultInputType);
        },
        /**
         * 是否是数字输入框类型
         */
        isNumberInputType() {
          const typeList: PopsPanelInputType[] = ["number"];
          return typeList.includes(viewConfig.inputType || defaultInputType);
        },
        /**
         * 禁用
         */
        disable() {
          this.$el.input.disabled = true;
          popsDOMUtils.addClassName(this.$el.panelInput, "pops-input-disabled");
          popsDOMUtils.addClassName(this.$el.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
        },
        /**
         * 取消禁用
         */
        notDisable() {
          this.$el.input.disabled = false;
          popsDOMUtils.removeClassName(this.$el.panelInput, "pops-input-disabled");
          popsDOMUtils.removeClassName(this.$el.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
        },
        /**
         * 判断是否已被禁用
         */
        isDisabled() {
          return this.$el.input.disabled;
        },
        /**
         * 设置输入框内容
         * @param value 值
         */
        setInputValue(value: string | number | Date = "") {
          if (typeof value === "number" && this.isNumberInputType()) {
            this.$el.input.valueAsNumber = value;
          } else if (typeof value === "object" && value instanceof Date && this.isDateInputType()) {
            this.$el.input.valueAsDate = value;
          } else {
            this.$el.input.value = value.toString();
          }
        },
        /**
         * 设置input元素的type
         * @param typeValue type值
         */
        setInputType(typeValue: PopsPanelInputType = "text") {
          this.$el.input.setAttribute("type", typeValue);
        },
        /**
         * 删除图标按钮
         */
        removeCircleIcon() {
          PopsSafeUtils.setSafeHTML(this.$el.icon, "");
        },
        /**
         * 添加清空图标按钮
         * @param svgHTML svg图标，默认为清空的图标
         */
        setCircleIcon(svgHTML: string = PopsIcon.getIcon("circleClose")!) {
          PopsSafeUtils.setSafeHTML(this.$el.icon, svgHTML);
        },
        /**
         * 隐藏图标容器
         */
        hideCircleIconWrapper() {
          popsDOMUtils.cssHide(this.$el.suffix, true);
        },
        /**
         * 显示图标容器
         */
        showCircleIconWrapper() {
          popsDOMUtils.cssShow(this.$el.suffix);
        },
        /**
         * 添加图标按钮的点击事件
         */
        onIconClick() {
          popsDOMUtils.on(this.$el.icon, "click", (evt) => {
            popsDOMUtils.preventEvent(evt);
            if (this.isDisabled()) {
              return;
            }
            // 删除图标
            this.removeCircleIcon();
            if (inputType === "password") {
              // 配置类型为密码输入框
              if (this.$data.isVisible) {
                // 当前可见 => 点击改变为隐藏
                this.$data.isVisible = false;
                // 显示输入框内容，且更换图标为隐藏图标
                this.setInputType("text");
                this.setCircleIcon(PopsIcon.getIcon("hide")!);
              } else {
                // 当前不可见 => 点击改变为显示
                this.$data.isVisible = true;
                // 隐藏输入框内容，且更换图标为显示图标
                this.setInputType("password");
                this.setCircleIcon(PopsIcon.getIcon("view")!);
              }
            } else {
              // 普通输入框
              // 清空内容
              this.setInputValue("");
              // 获取焦点
              this.$el.input.focus();
              // 触发内容改变事件
              this.$el.input.dispatchEvent(new Event("input"));
            }
          });
        },
        /**
         * 监听输入框内容改变
         */
        onValueChange() {
          popsDOMUtils.on<InputEvent>(this.$el.input, ["input", "propertychange"], (event) => {
            this.$data.value = this.$el.input.value;
            if (inputType !== "password") {
              // 不是密码框
              if (this.$el.input.value !== "" && this.$el.icon.innerHTML === "" && this.isTextInputType()) {
                // 不为空，显示清空图标
                this.setCircleIcon(PopsIcon.getIcon("circleClose")!);
                this.onIconClick();
                this.showCircleIconWrapper();
              } else if (this.$el.input.value === "") {
                this.removeCircleIcon();
              }
            }
            if (typeof viewConfig.callback === "function") {
              let ret;
              if (viewConfig.inputType === "number") {
                ret = viewConfig.callback(event, this.$el.input.value, this.$el.input.valueAsNumber);
              } else if (this.isDateInputType()) {
                ret = viewConfig.callback(
                  event,
                  this.$el.input.value,
                  this.$el.input.valueAsNumber,
                  this.$el.input.valueAsDate
                );
              } else {
                ret = viewConfig.callback(event, this.$el.input.value);
              }
              if (ret) {
                if (ret.valid) {
                  // 校验通过
                  this.removeValidErrorMsg();
                } else {
                  // 校验失败
                  // 显示失败提示
                  this.addValidErrorMsg(ret.message);
                }
              } else {
                this.removeValidErrorMsg();
              }
            }
          });
        },
        /**
         * 主动触发输入框改变事件
         */
        emitValueChange() {
          this.$el.input.dispatchEvent(new Event("input"));
        },
        /**
         * 添加校验失败的提示信息
         * @param msg 提示信息
         */
        addValidErrorMsg(msg?: string) {
          if (msg == null) return;
          const $validErrorMsg =
            this.$el.panelInput.querySelector<HTMLDivElement>(".pops-panel-input-valid-error") ||
            popsDOMUtils.createElement("div", {
              className: "pops-panel-input-valid-error",
              innerHTML: /*html*/ `<span></span>`,
            });
          const $validErrorMsgSpan = $validErrorMsg.querySelector("span")!;
          if ($validErrorMsgSpan.innerHTML !== msg) {
            PopsSafeUtils.setSafeHTML($validErrorMsgSpan, msg);
          }
          if (!$validErrorMsg.parentElement) {
            popsDOMUtils.after(this.$el.panelInputInner, $validErrorMsg);
          }
        },
        /**
         * 移除校验失败的提示信息
         */
        removeValidErrorMsg() {
          const $validErrorMsg = this.$el.panelInput.querySelector(".pops-panel-input-valid-error");
          $validErrorMsg?.remove();
        },
      };
      PopsPanelInput.init();
      Reflect.set($li, "data-input", PopsPanelInput);
      return {
        $el: $li,
        handler: PopsPanelInput,
      };
    },
    /**
     * type ==> textarea
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_textarea(viewConfig: PopsPanelTextAreaConfig) {
      const $li = popsDOMUtils.createElement("li");
      Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
      this.setElementClassName($li, viewConfig.className);
      this.setElementAttributes($li, viewConfig.attributes);
      this.setElementProps($li, viewConfig.props);

      // 左边底部的描述的文字
      let leftDescriptionText = "";
      if (viewConfig.description) {
        leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
      }
      PopsSafeUtils.setSafeHTML(
        $li,
        /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${viewConfig.placeholder ?? ""}"></textarea>
				</div>
			`
      );

      const PopsPanelTextArea = {
        [Symbol.toStringTag]: "PopsPanelTextArea",
        $ele: {
          itemLeftTextContainer: $li.querySelector<HTMLElement>(".pops-panel-item-left-text"),
          panelTextarea: $li.querySelector<HTMLDivElement>(".pops-panel-textarea")!,
          textarea: $li.querySelector<HTMLTextAreaElement>(".pops-panel-textarea textarea")!,
        },
        $data: {
          value: viewConfig.getValue(),
        },
        init() {
          this.setValue(this.$data.value);
          this.onValueChange();
          const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
          if (disabled) {
            this.disable();
          }
        },
        disable() {
          this.$ele.textarea.setAttribute("disabled", "true");
          popsDOMUtils.addClassName(this.$ele.panelTextarea, "pops-panel-textarea-disable");
          popsDOMUtils.addClassName(this.$ele.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
        },
        notDisable() {
          this.$ele.textarea.removeAttribute("disabled");
          popsDOMUtils.removeClassName(this.$ele.panelTextarea, "pops-panel-textarea-disable");
          popsDOMUtils.removeClassName(this.$ele.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
        },
        isDisabled() {
          return (
            this.$ele.textarea.hasAttribute("disabled") ||
            popsDOMUtils.containsClassName(this.$ele.panelTextarea, "pops-panel-textarea-disable")
          );
        },
        setValue(value: string) {
          this.$ele.textarea.value = value;
        },
        /**
         * 监听选择内容改变
         */
        onValueChange() {
          popsDOMUtils.on<InputEvent>(this.$ele.textarea, ["input", "propertychange"], (event) => {
            const value = this.$ele.textarea.value;
            this.$data.value = value;
            if (typeof viewConfig.callback === "function") {
              viewConfig.callback(
                event as InputEvent & {
                  target: HTMLTextAreaElement;
                },
                value
              );
            }
          });
        },
      };

      PopsPanelTextArea.init();
      Reflect.set($li, "data-textarea", PopsPanelTextArea);

      return {
        $el: $li,
        handler: PopsPanelTextArea,
      };
    },
    /**
     * type ==> select
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_select(viewConfig: PopsPanelSelectConfig<any>) {
      const that = this;
      const $li = popsDOMUtils.createElement("li");
      Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
      this.setElementClassName($li, viewConfig.className);
      this.setElementAttributes($li, viewConfig.attributes);
      this.setElementProps($li, viewConfig.props);
      // 左边底部的描述的文字
      let leftDescriptionText = "";
      if (viewConfig.description) {
        leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
      }
      PopsSafeUtils.setSafeHTML(
        $li,
        /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-select">
					<select></select>
				</div>
				`
      );
      const $itemLeftContainer = $li.querySelector<HTMLElement>(".pops-panel-item-left-text")!;
      const $container = $li.querySelector<HTMLElement>(".pops-panel-select")!;
      const $select = $li.querySelector<HTMLSelectElement>(".pops-panel-select select")!;
      const width = (typeof viewConfig.width === "number" ? `${viewConfig.width}px` : viewConfig.width) ?? "200px";
      popsDOMUtils.css($container, "width", width);
      const mode = viewConfig.mode ?? "native";
      let handler;
      if (mode === "native") {
        const PopsPanelSelectNative = {
          [Symbol.toStringTag]: "PopsPanelSelectNative",
          $el: {
            itemLeftTextContainer: $itemLeftContainer,
            $container: $container,
            $select: $select,
          },
          $eleKey: {
            disable: "__disable__",
            value: "__value__",
            viewConfig: "data-view-config",
          },
          $data: {
            data: [] as PopsPanelSelectDataOption<any>[],
            defaultValue: viewConfig.getValue(),
          },
          init() {
            this.$el.$container.setAttribute("data-mode", mode);
            this.$data.data = typeof viewConfig.data === "function" ? viewConfig.data() : viewConfig.data;
            popsDOMUtils.addClassName(this.$el.$container, PopsCommonCSSClassName.userSelectNone);
            this.initOption();
            this.onValueChange();
            this.onClick();
            const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
            if (disabled) {
              this.disable();
            }
          },
          /**
           * 给option元素设置属性
           * @param $ele
           * @param key
           * @param value
           */
          setNodeValue($ele: HTMLElement, key: string, value: any) {
            Reflect.set($ele, key, value);
          },
          /**
           * 获取option元素上设置的属性
           * @param $ele
           * @param value
           * @param key
           */
          getNodeValue($ele: HTMLElement, key: string) {
            return Reflect.get($ele, key);
          },
          /**
           * 禁用选项
           */
          disable() {
            this.$el.$select.setAttribute("disabled", "true");
            popsDOMUtils.addClassName(this.$el.$container, "pops-panel-select-disable");
            popsDOMUtils.addClassName(this.$el.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
          },
          /**
           * 取消禁用
           */
          notDisable() {
            this.$el.$select.removeAttribute("disabled");
            popsDOMUtils.removeClassName(this.$el.$container, "pops-panel-select-disable");
            popsDOMUtils.removeClassName(this.$el.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
          },
          /**
           * 判断是否禁用
           */
          isDisabled() {
            return (
              this.$el.$select.hasAttribute("disabled") ||
              popsDOMUtils.containsClassName(this.$el.$container, "pops-panel-select-disable")
            );
          },
          /**
           * 初始化选项
           */
          initOption() {
            this.$data.data.forEach((dataItem) => {
              // 初始化默认选中
              const optionElement = popsDOMUtils.createElement("option");
              this.setNodeValue(optionElement, this.$eleKey.value, dataItem.value);
              this.setNodeValue(optionElement, this.$eleKey.disable, dataItem.disable);
              this.setNodeValue(optionElement, this.$eleKey.viewConfig, dataItem.views);
              if (dataItem.value === this.$data.defaultValue) {
                this.setOptionSelected(optionElement);
              }
              if (typeof dataItem.text === "function") {
                optionElement.innerText = dataItem.text(dataItem.value, dataItem);
              } else {
                optionElement.innerText = dataItem.text;
              }
              this.$el.$select.appendChild(optionElement);
            });
          },
          /**
           * 设置选项选中
           * @param $option
           */
          setOptionSelected($option: HTMLOptionElement) {
            $option.setAttribute("selected", "true");
          },
          /**
           * 检测所有option并设置禁用状态
           */
          setSelectOptionsDisableStatus() {
            if (this.$el.$select.options && this.$el.$select.options.length) {
              Array.from(this.$el.$select.options).forEach((optionItem) => {
                this.setOptionDisableStatus(optionItem);
              });
            }
          },
          /**
           * 设置禁用状态
           * @param $option
           */
          setOptionDisableStatus($option: HTMLOptionElement) {
            let disable = false;
            const optionDisableAttr = this.getNodeValue($option, this.$eleKey.disable);
            if (optionDisableAttr === "function") {
              const value = this.getNodeValue($option, this.$eleKey.value);
              disable = Boolean(optionDisableAttr(value));
            }
            if (disable) {
              $option.setAttribute("disabled", "true");
            } else {
              $option.removeAttribute("disabled");
            }
          },
          /**
           * 获取option上的信息
           * @param $option
           */
          getSelectOptionInfo($option: HTMLOptionElement) {
            const optionValue = this.getNodeValue($option, this.$eleKey.value);
            const optionText = $option.innerText || $option.textContent!;
            const views = this.getNodeValue($option, this.$eleKey.viewConfig) as NonNullable<
              PopsPanelSelectDataOption<any>["views"]
            >;
            return {
              value: optionValue,
              text: optionText,
              views: views,
              $option: $option,
            };
          },
          /**
           * 监听选择内容改变
           */
          onValueChange() {
            popsDOMUtils.on<PointerEvent | TouchEvent>(this.$el.$select, "change", () => {
              const $isSelectedElement = this.$el.$select[this.$el.$select.selectedIndex] as HTMLOptionElement;
              const selectInfo = this.getSelectOptionInfo($isSelectedElement);
              this.setSelectOptionsDisableStatus();
              if (typeof viewConfig.callback === "function") {
                viewConfig.callback(selectInfo);
              }
              const views = typeof selectInfo.views === "function" ? selectInfo.views() : selectInfo.views;
              if (Array.isArray(views)) {
                // 如果成功创建，加入到中间容器中
                const childUListClassName = "pops-panel-select-child-forms";
                // 移除旧的元素
                while ($li.nextElementSibling) {
                  if ($li.nextElementSibling.classList.contains(childUListClassName)) {
                    $li.nextElementSibling.remove();
                  } else {
                    break;
                  }
                }
                const $childUList = popsDOMUtils.createElement("ul");
                $childUList.className = childUListClassName;
                popsDOMUtils.after($li, $childUList);
                that.uListContainerAddItem(viewConfig, {
                  ulElement: $childUList,
                });
              }
            });
          },
          /**
           * 监听点击事件
           */
          onClick() {
            popsDOMUtils.on(this.$el.$select, "click", (event) => {
              this.setSelectOptionsDisableStatus();
              if (typeof viewConfig.clickCallBack === "function") {
                const $isSelectedElement = this.$el.$select[this.$el.$select.selectedIndex] as HTMLOptionElement;
                const selectInfo = this.getSelectOptionInfo($isSelectedElement);
                viewConfig.clickCallBack(event, selectInfo);
              }
            });
          },
        };

        PopsPanelSelectNative.init();
        Reflect.set($li, "data-select", PopsPanelSelectNative);
        handler = PopsPanelSelectNative;
      } else if (mode === "dialog") {
        const PopsPanelSelect = {
          [Symbol.toStringTag]: "PopsPanelSelect",
          $el: {
            $itemLeftContainer: $itemLeftContainer,
            /** 选择框容器 */
            $container: void 0 as any as HTMLElement,
            /** 选择框包裹的容器 */
            $wrapper: void 0 as any as HTMLElement,
            /** 内容区域 */
            $section: void 0 as any as HTMLElement,
            /** 手动输入 */
            $selectedInputWrapper: void 0 as any as HTMLElement,
            /** 灰色提示语 */
            $selectedPlaceHolderWrapper: void 0 as any as HTMLElement,
            /** 下拉箭头区域 */
            $suffix: void 0 as any as HTMLElement,
            /** 下拉箭头图标 */
            $suffixIcon: void 0 as any as HTMLElement,
            /** 下拉列表弹窗的下拉列表容器 */
            $selectDialogContainer: void 0 as any as HTMLElement | null,
          },
          $data: {
            /**
             * 数据
             */
            data: [] as PopsPanelSelectDataOption<any>[],
            /**
             * 默认值
             */
            defaultValue: viewConfig.getValue(),
            /**
             * 选择的信息
             */
            selectedData: void 0 as PopsPanelSelectDataOption<any> | undefined,
            /**
             * 是否验证通过
             */
            isValidSuccess: true,
            /**
             * 箭头旋转的属性
             */
            rotateKey: "data-show-option",
          },
          /** 初始化 */
          init() {
            this.initDefault();
            this.initEl();
            this.initPlaceHolder();
            this.renderSelectText();
            this.onShowSelectDialogClick();

            const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
            if (disabled) {
              this.disable();
            }
          },
          /** 初始化默认值 */
          initDefault() {
            this.$data.data = typeof viewConfig.data === "function" ? viewConfig.data() : viewConfig.data;
            this.$data.data.forEach((dataItem) => {
              const flag = this.$data.defaultValue.includes(dataItem.value);
              if (flag) {
                // 初始化选中的配置
                this.resetCurrentSelectedInfo();
                this.updateSelectedInfo(dataItem);
              }
            });
          },
          /** 初始化$ele变量 */
          initEl() {
            this.$el.$container = $container;
            this.$el.$container.setAttribute("data-mode", mode);
            PopsSafeUtils.setSafeHTML(
              this.$el.$container,
              /*html*/ `
              <div class="el-select__wrapper">
                <div class="el-select__selection">
                  <!-- 这个是用于手动输入的，这里暂不适配 -->
                  <div class="el-select__selected-item el-select__input-wrapper"></div>
                  <!-- 这个是placeholder -->
                  <div class="el-select__selected-item el-select__placeholder"></div>
                </div>
                <!-- 下拉箭头 -->
                <div class="el-select__suffix">
                  <i class="el-icon el-select__caret el-select__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                    </svg>
                  </i>
                </div>
              </div>`
            );
            this.$el.$wrapper = $li.querySelector<HTMLElement>(".el-select__wrapper")!;
            this.$el.$section = $li.querySelector<HTMLElement>(".el-select__selection")!;
            this.$el.$selectedInputWrapper = $li.querySelector<HTMLElement>(
              ".el-select__selected-item.el-select__input-wrapper"
            )!;
            this.$el.$selectedPlaceHolderWrapper = $li.querySelector<HTMLElement>(
              ".el-select__selected-item.el-select__placeholder"
            )!;
            this.$el.$suffix = $li.querySelector<HTMLElement>(".el-select__suffix")!;
            this.$el.$suffixIcon = $li.querySelector<HTMLElement>(".el-select__suffix .el-icon")!;

            // 先把手动输入框隐藏
            this.hideInputWrapper();
          },
          /**
           * 初始化提示文字
           */
          initPlaceHolder() {
            let placeholder = "--请选择--";
            if (typeof viewConfig.placeholder === "string") {
              placeholder = viewConfig.placeholder;
            } else if (typeof viewConfig.placeholder === "function") {
              const placeholderResult = viewConfig.placeholder();
              if (typeof placeholderResult === "string") {
                placeholder = placeholderResult;
              }
            }
            /**
             * 默认提示文字的位置
             */
            const defaultSelectedTextAlign: NonNullable<PopsPanelSelectConfig<any>["selectedTextAlign"]> = "left";
            this.$el.$section.setAttribute(
              "data-selected-text-align",
              viewConfig.selectedTextAlign || defaultSelectedTextAlign
            );

            const $placeholder = popsDOMUtils.createElement("span", {
              innerText: placeholder,
            });
            this.$el.$selectedPlaceHolderWrapper.appendChild($placeholder);
          },
          /**
           * 重新渲染外面的已选择项的文本
           *
           * 如果未选择，显示提示文字
           */
          renderSelectText() {
            let item = this.$data.data.find((dataItem) => {
              return dataItem.value === this.$data.selectedData?.value;
            });
            if (item == null) {
              // 未找到但是有选中信息，且是自定义输入的
              if (this.$data.selectedData && this.$data.selectedData.addCustomInput) {
                item = this.$data.selectedData;
              }
            }
            if (item != null) {
              // 默认值在数据中
              // 显示该数据项的文本
              // 隐藏placeholder
              const text = typeof item.text === "function" ? item.text(item.value, item) : item.text;
              if (item.isHTML) {
                PopsSafeUtils.setSafeHTML(this.$el.$selectedInputWrapper, text);
              } else {
                PopsSafeUtils.setSafeHTML(
                  this.$el.$selectedInputWrapper,
                  /*html*/ `
                  <span>${text}</span>
                `
                );
              }
              // 显示选中的内容
              this.showInputWrapper();
              // 隐藏placeholder
              this.hidePlaceHolderWrapper();
            } else {
              // 仅显示placeholder
              this.hideInputWrapper();
              this.showPlaceHolderWrapper();
            }
          },
          /**
           * 禁用选项容器
           */
          disable() {
            popsDOMUtils.addClassName(this.$el.$container, "pops-panel-select-disable");
            popsDOMUtils.addClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
          },
          /**
           * 取消禁用选项容器
           */
          cancleDisable() {
            popsDOMUtils.removeClassName(this.$el.$container, "pops-panel-select-disable");
            popsDOMUtils.removeClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
          },
          /**
           * 判断当前是否已禁用选项容器
           */
          isDisabled() {
            return (
              popsDOMUtils.containsClassName(this.$el.$container, "pops-panel-select-disable") ||
              popsDOMUtils.containsClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled)
            );
          },
          /**
           * 设置选择列表的点击事件
           *
           * 点击显示选择列表的弹窗
           */
          onShowSelectDialogClick() {
            const defaultCSS = PopsCSS.panelComponents_Select;
            popsDOMUtils.on(this.$el.$container, "click", () => {
              if (this.isDisabled()) {
                return;
              }
              /** 当前已选中的值 */
              const { style, lightStyle, darkStyle, ...userConfirmConfig } = viewConfig.selectConfirmDialogConfig || {};
              /**
               * 弹窗关闭的回调
               */
              const dialogCloseCallback = () => {
                if (this.$data.selectedData?.addCustomInput && !this.$data.isValidSuccess) {
                  // 当前是自定义输入的且未通过校验
                  return false;
                } else {
                  // 清除自定义输入的值
                  this.getAllSelectItems(false).forEach((it) => {
                    if (!it.data.addCustomInput) return;
                    it.data.value = "";
                    it.data.text = "";
                    this.onValueChangeCallback(it.data);
                  });
                }
                this.renderSelectText();
                this.$el.$selectDialogContainer = null;
                this.$el.$container.removeAttribute(this.$data.rotateKey);
              };
              this.$el.$container.setAttribute(this.$data.rotateKey, String(true));
              const confirmConfig = popsUtils.assign(
                <PopsAlertConfig>{
                  title: {
                    text: "请勾选需要选择的选项",
                    position: "center",
                  },
                  content: {
                    text: /*html*/ `<ul class="select-container"></ul>`,
                    html: true,
                  },
                  btn: {
                    ok: {
                      enable: false,
                    },
                    close: {
                      enable: true,
                      callback(evtConfig) {
                        const ret = dialogCloseCallback();
                        if (typeof ret === "boolean" && !ret) {
                          return;
                        }
                        evtConfig.close();
                      },
                    },
                  },
                  mask: {
                    enable: true,
                    clickCallBack(originalRun) {
                      const ret = dialogCloseCallback();
                      if (typeof ret === "boolean" && !ret) {
                        return;
                      }
                      originalRun();
                    },
                    clickEvent: {
                      toClose: true,
                    },
                  },
                  drag: true,
                  dragLimit: true,
                  width: "300px",
                  height: "auto",
                  style: /*css*/ `
                  ${defaultCSS}

                  ${PopsCSS.panelCSS}

								  ${style || ""}
								  `,
                  lightStyle: lightStyle,
                  darkStyle: darkStyle,
                },
                userConfirmConfig
              );
              const $dialog = PopsAlert.init(confirmConfig);
              const $selectContainer = $dialog.$shadowRoot.querySelector<HTMLUListElement>(".select-container")!;
              // 初始化选项元素
              this.$data.data.forEach((item) => {
                if (item.addCustomInput) {
                  // 添加自定义输入的
                  const customInputDataOption = item;
                  const $customInputSelecItem = this.createSelectItemElement(customInputDataOption);
                  const context = this;
                  const PanelInput = that.createSectionContainerItem_input({
                    type: "input",
                    text: "",
                    getValue() {
                      return customInputDataOption.value;
                    },
                    callback(evt, value) {
                      customInputDataOption.text = value;
                      customInputDataOption.value = value;
                      if (typeof customInputDataOption.onValid === "function") {
                        const ret = customInputDataOption.onValid(customInputDataOption);
                        context.$data.isValidSuccess = ret.valid;
                        if (ret.valid) {
                          PanelInputHandler.removeValidErrorMsg();
                        } else {
                          PanelInputHandler.addValidErrorMsg(ret.message);
                          return ret;
                        }
                      }

                      context.updateSelectedInfo(customInputDataOption);
                      context.onValueChangeCallback(customInputDataOption);
                    },
                  });
                  // 获取输入框处理函数
                  const PanelInputHandler = PanelInput.handler;

                  const $inputContainer = PanelInput.$el.querySelector<HTMLElement>(".pops-panel-input")!;
                  PopsSafeUtils.setSafeHTML($customInputSelecItem, "");

                  $customInputSelecItem.appendChild($inputContainer);
                  // 添加到confirm中
                  $selectContainer.appendChild($customInputSelecItem);
                  // 设置项的点击事件
                  this.onSelectItemClick(customInputDataOption, $customInputSelecItem);
                } else {
                  const $select = this.createSelectItemElement(item);
                  // 添加到confirm中
                  $selectContainer.appendChild($select);
                  // 设置项的点击事件
                  this.onSelectItemClick(item, $select);
                }
              });
              this.$el.$selectDialogContainer = $selectContainer;
              // 初始化状态
              this.updateAllSelectItemStatus();
            });
          },
          /**
           * 选中的值改变的回调
           * @param data 当前的选中信息
           */
          onValueChangeCallback(data?: PopsPanelSelectDataOption<any>, isUpdateSelectItem: boolean = true) {
            // 动态更新禁用状态、选中状态
            isUpdateSelectItem && this.updateAllSelectItemStatus();
            // 触发回调
            if (typeof viewConfig.callback === "function") {
              viewConfig.callback(data || this.$data.selectedData!);
            }
          },
          /**
           * 更新选项弹窗内的所有选项元素的状态
           *
           * + 更新禁用状态
           * + 更新选中状态
           */
          updateAllSelectItemStatus() {
            const allSelectItems = this.getAllSelectItems(false);
            allSelectItems.forEach(($selectInfo) => {
              const { data, $select } = $selectInfo;
              // 更新文字
              this.setSelectItemText(data, $selectInfo.$select);
              if (typeof data.disable === "function" && data.disable(data.value, this.$data.selectedData)) {
                // 移除选中状态
                this.removeItemSelected($select);
                // 禁用
                this.setSelectItemDisabled($select);
              } else {
                // 移除禁用状态
                this.removeSelectItemDisabled($select);
              }
              // 根据当前已选择的信息，判断并更新选中状态
              if (this.$data.selectedData != null && this.$data.selectedData.value === data.value) {
                // 就是这个项
                // 设置选中
                this.setItemSelected($select);
              } else {
                // 不是这个项
                // 移除选中状态
                this.removeItemSelected($select);
              }
            });
          },
          /**
           * 重置所有已选中的项以下状态
           *
           * + 更新选项显示的文字
           * + 移除禁用状态
           * + 移除选中状态
           */
          resetAllSelectedItemStatus() {
            const allSelectedItems = this.getAllSelectItems(true);
            if (allSelectedItems.length) {
              // 移除选中信息
              this.resetCurrentSelectedInfo();
            }
            allSelectedItems.forEach(($selectInfo) => {
              const { data, $select } = $selectInfo;
              // 更新文字
              this.setSelectItemText(data, $selectInfo.$select);
              // 移除选中状态
              this.removeItemSelected($select);
              // 取消禁用
              this.removeSelectItemDisabled($select);
            });
          },
          /**
           * 设置选项元素选中
           * @param $el 选项元素
           */
          setItemSelected($el: HTMLElement) {
            if (this.isItemSelected($el)) return;
            $el.classList.add("select-item-is-selected");
          },
          /**
           * 移除选项元素选中
           * @param $el 选项元素
           */
          removeItemSelected($el: HTMLElement) {
            $el.classList.remove("select-item-is-selected");
          },
          /**
           * 判断选项元素是否选中
           * @param $el
           */
          isItemSelected($el: HTMLElement): boolean {
            return $el.classList.contains("select-item-is-selected");
          },
          /**
           * 获取项上存储的信息
           * @param $el 选项元素
           */
          getItemDataOption($el: HTMLElement): PopsPanelSelectDataOption<any> {
            return Reflect.get($el, "data-info");
          },
          /**
           * 添加选中信息
           * @param data 选择项的数据
           */
          addSelectedItemInfo(data: PopsPanelSelectDataOption<any>) {
            this.resetCurrentSelectedInfo();
            this.updateSelectedInfo(data);
            this.onValueChangeCallback(data);
          },
          /**
           * 移除选中信息
           * @param data 选择项的数据
           */
          removeSelectedItemInfo() {
            // 删除
            this.updateSelectedInfo();
            this.onValueChangeCallback();
          },
          /**
           * 更新选中信息
           * @param data 数据
           */
          updateSelectedInfo(data?: PopsPanelSelectDataOption<any>) {
            // 先删除再赋值
            this.$data.selectedData = void 0;
            if (data) {
              if (data.addCustomInput && data.value.toString() === "") {
                // 自定义输入框，但是内容是空字符串
                // 不更新选中信息
                return;
              }
              this.$data.selectedData = data;
            }
          },
          /**
           * 从保存的已选中的信息列表中移除目标信息
           */
          resetCurrentSelectedInfo() {
            this.updateSelectedInfo();
          },
          /**
           * 获取所有选项的信息
           * @param [onlySelected=true] 是否仅获取选中的项的信息
           * + true （默认）仅获取选中项的信息
           * + false 获取所有选择项的信息
           */
          getAllSelectItems(onlySelected: boolean = true) {
            return Array.from(this.$el.$selectDialogContainer?.querySelectorAll<HTMLElement>(".select-item") ?? [])
              .map(($select) => {
                const data = this.getItemDataOption($select);
                const result = {
                  /** 选项信息数据 */
                  data: data,
                  /** 选项元素 */
                  $select: $select,
                };
                if (onlySelected) {
                  // 仅选中
                  const isSelected = this.isItemSelected($select);
                  if (isSelected) {
                    return result;
                  }
                  return;
                } else {
                  return result;
                }
              })
              .filter((item) => {
                return item != null;
              });
          },
          /**
           * 创建一个选择项元素
           * @param data 选择项的数据
           */
          createSelectItemElement(data: PopsPanelSelectDataOption<any>) {
            const $select = popsDOMUtils.createElement("li", {
              className: "select-item",
              innerHTML: /*html*/ `<span class="select-item-text"></span>`,
            });
            this.setSelectItemText(data, $select);
            Reflect.set($select, "data-info", data);
            return $select;
          },
          /**
           * 设置选择项的文字
           * @param data 选择项的数据
           * @param $select 选择项元素
           */
          setSelectItemText(data: PopsPanelSelectDataOption<any>, $select: HTMLElement) {
            const text = typeof data.text === "function" ? data.text(data.value, this.$data.selectedData) : data.text;
            const $selectSpan = $select.querySelector<HTMLElement>(".select-item-text");
            if (!$selectSpan) return;
            if (data.isHTML) {
              PopsSafeUtils.setSafeHTML($selectSpan, text);
            } else {
              $selectSpan.innerText = text;
            }
          },
          /**
           * 设置选择项禁用
           * @param $select 选择项元素
           */
          setSelectItemDisabled($select: HTMLElement) {
            $select.setAttribute("aria-disabled", "true");
            $select.setAttribute("disabled", "true");
          },
          /**
           * 移除选择项的禁用状态
           * @param $select 选择项元素
           */
          removeSelectItemDisabled($select: HTMLElement) {
            $select.removeAttribute("aria-disabled");
            $select.removeAttribute("disabled");
          },
          /**
           * 判断选择项是否禁用
           * @param $select 选择项元素
           */
          isSelectItemDisabled($select: HTMLElement) {
            return $select.hasAttribute("disabled") || $select.ariaDisabled;
          },
          /**
           * 设置选择项的点击事件
           * @param data 该选择项的信息
           * @param $select 该选择项元素
           */
          onSelectItemClick(data: PopsPanelSelectDataOption<any> | undefined, $select: HTMLElement) {
            const updateCustomInputStatus = () => {
              this.setItemSelected($select);
              this.addSelectedItemInfo(data!);
            };
            popsDOMUtils.on<PointerEvent | MouseEvent>($select, "click", (event) => {
              popsDOMUtils.preventEvent(event);
              const $click = event.target as HTMLElement;
              if (data?.addCustomInput && $click instanceof HTMLInputElement) {
                // 自定义输入框 单独处理值更新，选中
                updateCustomInputStatus();
                return;
              }
              if (this.isSelectItemDisabled($select)) {
                // 被禁用了
                return;
              }
              if (typeof viewConfig.clickCallBack === "function") {
                const clickResult = viewConfig.clickCallBack(event, this.$data.selectedData!);
                if (typeof clickResult === "boolean" && !clickResult) {
                  return;
                }
              }
              if (data?.addCustomInput) {
                // 自定义输入框 添加选中
                updateCustomInputStatus();
              } else {
                // 修改选中状态
                if (this.isItemSelected($select)) {
                  // 移除选中
                  this.removeItemSelected($select);
                  this.removeSelectedItemInfo();
                } else {
                  // 添加选中
                  this.setItemSelected($select);
                  this.addSelectedItemInfo(data!);
                }
              }
            });
          },
          /** 显示输入框 */
          showInputWrapper() {
            popsDOMUtils.cssShow(this.$el.$selectedInputWrapper);
          },
          /** 隐藏输入框 */
          hideInputWrapper() {
            popsDOMUtils.cssHide(this.$el.$selectedInputWrapper, true);
          },
          /** 显示palceholder */
          showPlaceHolderWrapper() {
            popsDOMUtils.cssShow(this.$el.$selectedPlaceHolderWrapper);
          },
          /** 隐藏palceholder */
          hidePlaceHolderWrapper() {
            popsDOMUtils.cssHide(this.$el.$selectedPlaceHolderWrapper, true);
          },
        };
        PopsPanelSelect.init();
        Reflect.set($li, "data-select", PopsPanelSelect);
        handler = PopsPanelSelect;
      } else if (mode === "horizontal") {
        const PopsPanelSelectHorizontal = {
          [Symbol.toStringTag]: "PopsPanelSelectHorizontal",
          $el: {
            $itemLeftContainer: $itemLeftContainer,
            /** 选择框容器 */
            $container: $container,
            /** 选择框包裹的容器 */
            $wrapper: void 0 as any as HTMLElement,
          },
          $data: {
            /**
             * 数据
             */
            data: [] as PopsPanelSelectDataOption<any>[],
            /**
             * 默认值
             */
            defaultValue: viewConfig.getValue(),
            /**
             * 选择的信息
             */
            selectedData: void 0 as PopsPanelSelectDataOption<any> | undefined,
            /**
             * 箭头旋转的属性
             */
            rotateKey: "data-show-option",
          },
          /** 初始化 */
          init() {
            this.initDefault();
            this.initEl();

            const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
            if (disabled) {
              this.disable();
            }
          },
          /** 初始化默认值 */
          initDefault() {
            this.$data.data = typeof viewConfig.data === "function" ? viewConfig.data() : viewConfig.data;
            if (!this.$data.data.length) {
              throw new Error("PopsPanelSelect: data is empty");
            }
          },
          /** 初始化$ele变量 */
          initEl() {
            this.$el.$container.setAttribute("data-mode", mode);
            PopsSafeUtils.setSafeHTML(
              this.$el.$container,
              /*html*/ `
              <div class="el-select__wrapper">
              </div>`
            );
            this.$el.$wrapper = $li.querySelector<HTMLElement>(".el-select__wrapper")!;

            this.$data.data.forEach((dataItem) => {
              const $item = this.createSelectItemElement(dataItem);
              this.onSelectItemClick(dataItem, $item);
              if (this.$data.defaultValue === dataItem.value) {
                this.addSelectedItemInfo(dataItem);
              }
              this.$el.$wrapper.appendChild($item);
            });
            this.updateAllSelectItemStatus();
          },
          /**
           * 禁用选项容器
           */
          disable() {
            popsDOMUtils.addClassName(this.$el.$container, "pops-panel-select-disable");
            popsDOMUtils.addClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
          },
          /**
           * 取消禁用选项容器
           */
          cancleDisable() {
            popsDOMUtils.removeClassName(this.$el.$container, "pops-panel-select-disable");
            popsDOMUtils.removeClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
          },
          /**
           * 判断当前是否已禁用选项容器
           */
          isDisabled() {
            return (
              popsDOMUtils.containsClassName(this.$el.$container, "pops-panel-select-disable") ||
              popsDOMUtils.containsClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled)
            );
          },
          /**
           * 创建选择项
           * @param data 数据
           */
          createSelectItemElement(data: PopsPanelSelectDataOption<any>) {
            const $select = popsDOMUtils.createElement("div", {
              className: "select-item",
              innerHTML: /*html*/ `
                <span class="select-item-text"></span>
              `,
            });
            this.setSelectItemText(data, $select);
            Reflect.set($select, "data-info", data);
            return $select;
          },
          /**
           * 设置选择项的文字
           * @param data 选择项的数据
           * @param $select 选择项元素
           */
          setSelectItemText(data: PopsPanelSelectDataOption<any>, $select: HTMLElement) {
            const text = typeof data.text === "function" ? data.text(data.value, this.$data.selectedData) : data.text;
            const $selectSpan = $select.querySelector<HTMLElement>(".select-item-text");
            if (!$selectSpan) return;
            if (data.isHTML) {
              PopsSafeUtils.setSafeHTML($selectSpan, text);
            } else {
              $selectSpan.innerText = text;
            }
          },
          /**
           * 设置选择项点击事件
           */
          onSelectItemClick(data: PopsPanelSelectDataOption<any> | undefined, $el: HTMLElement) {
            popsDOMUtils.on<PointerEvent | MouseEvent>($el, "click", (event) => {
              popsDOMUtils.preventEvent(event);
              if (this.isDisabled()) {
                return;
              }
              if (this.isSelectItemDisabled($el)) {
                // 被禁用了
                return;
              }
              if (typeof viewConfig.clickCallBack === "function") {
                const clickResult = viewConfig.clickCallBack(event, this.$data.selectedData!);
                if (typeof clickResult === "boolean" && !clickResult) {
                  return;
                }
              } // 修改选中状态
              if (this.isItemSelected($el)) {
                // 移除选中
                this.removeItemSelected($el);
                this.removeSelectedItemInfo();
              } else {
                // 添加选中
                this.setItemSelected($el);
                this.addSelectedItemInfo(data!);
              }
            });
          },
          /**
           * 选中的值改变的回调
           * @param data 当前的选中信息
           */
          onValueChangeCallback(data?: PopsPanelSelectDataOption<any>, isUpdateSelectItem: boolean = true) {
            // 动态更新禁用状态、选中状态
            isUpdateSelectItem && this.updateAllSelectItemStatus();
            // 触发回调
            if (typeof viewConfig.callback === "function") {
              viewConfig.callback(data || this.$data.selectedData!);
            }
          },
          /**
           * 更新选项弹窗内的所有选项元素的状态
           *
           * + 更新禁用状态
           * + 更新选中状态
           */
          updateAllSelectItemStatus() {
            const allSelectItems = this.getAllSelectItems(false);
            allSelectItems.forEach(($selectInfo) => {
              const { data, $select } = $selectInfo;
              // 更新文字
              this.setSelectItemText(data, $selectInfo.$select);
              if (typeof data.disable === "function" && data.disable(data.value, this.$data.selectedData)) {
                // 移除选中状态
                this.removeItemSelected($select);
                // 禁用
                this.setSelectItemDisabled($select);
              } else {
                // 移除禁用状态
                this.removeSelectItemDisabled($select);
              }
              // 根据当前已选择的信息，判断并更新选中状态
              if (this.$data.selectedData != null && this.$data.selectedData.value === data.value) {
                // 就是这个项
                // 设置选中
                this.setItemSelected($select);
              } else {
                // 不是这个项
                // 移除选中状态
                this.removeItemSelected($select);
              }
            });
          },
          /**
           * 重置所有已选中的项以下状态
           *
           * + 更新选项显示的文字
           * + 移除禁用状态
           * + 移除选中状态
           */
          resetAllSelectedItemStatus() {
            const allSelectedItems = this.getAllSelectItems(true);
            if (allSelectedItems.length) {
              // 移除选中信息
              this.resetCurrentSelectedInfo();
            }
            allSelectedItems.forEach(($selectInfo) => {
              const { data, $select } = $selectInfo;
              // 更新文字
              this.setSelectItemText(data, $selectInfo.$select);
              // 移除选中状态
              this.removeItemSelected($select);
              // 取消禁用
              this.removeSelectItemDisabled($select);
            });
          },
          /**
           * 添加选中信息
           * @param data 选择项的数据
           */
          addSelectedItemInfo(data: PopsPanelSelectDataOption<any>) {
            this.resetCurrentSelectedInfo();
            this.updateSelectedInfo(data);
            this.onValueChangeCallback(data);
          },
          /**
           * 移除选中信息
           * @param data 选择项的数据
           */
          removeSelectedItemInfo() {
            // 删除
            this.updateSelectedInfo();
            this.onValueChangeCallback();
          },
          /**
           * 更新选中信息
           * @param data 数据
           */
          updateSelectedInfo(data?: PopsPanelSelectDataOption<any>) {
            // 先删除再赋值
            this.$data.selectedData = void 0;
            if (data) {
              if (data.addCustomInput && data.value.toString() === "") {
                // 自定义输入框，但是内容是空字符串
                // 不更新选中信息
                return;
              }
              this.$data.selectedData = data;
            }
          },
          /**
           * 从保存的已选中的信息列表中移除目标信息
           */
          resetCurrentSelectedInfo() {
            this.updateSelectedInfo();
          },
          /**
           * 设置选择项禁用
           * @param $select 选择项元素
           */
          setSelectItemDisabled($select: HTMLElement) {
            $select.setAttribute("aria-disabled", "true");
            $select.setAttribute("disabled", "true");
          },
          /**
           * 移除选择项的禁用状态
           * @param $select 选择项元素
           */
          removeSelectItemDisabled($select: HTMLElement) {
            $select.removeAttribute("aria-disabled");
            $select.removeAttribute("disabled");
          },
          /**
           * 判断选择项是否禁用
           * @param $select 选择项元素
           */
          isSelectItemDisabled($select: HTMLElement) {
            return $select.hasAttribute("disabled") || $select.ariaDisabled;
          },
          /**
           * 设置选择项选中
           * @param $select 选择项元素（.select-item）
           */
          setItemSelected($select: HTMLElement) {
            if (this.isItemSelected($select)) return;
            $select.classList.add("select__selected-item");
          },
          /**
           * 移除选择项选中
           * @param $select 选择项元素（.select-item）
           */
          removeItemSelected($select: HTMLElement) {
            $select.classList.remove("select__selected-item");
          },
          /**
           * 判断选择项是否选中
           * @param $select 选择项元素（.select-item）
           */
          isItemSelected($select: HTMLElement) {
            return $select.classList.contains("select__selected-item");
          },
          /**
           * 获取所有选项的信息
           * @param [onlySelected=true] 是否仅获取选中的项的信息
           * + true （默认）仅获取选中项的信息
           * + false 获取所有选择项的信息
           */
          getAllSelectItems(onlySelected: boolean = true) {
            return Array.from(this.$el.$wrapper?.querySelectorAll<HTMLElement>(".select-item") ?? [])
              .map(($select) => {
                const data = this.getItemDataOption($select);
                const result = {
                  /** 选项信息数据 */
                  data: data,
                  /** 选项元素 */
                  $select: $select,
                };
                if (onlySelected) {
                  // 仅选中
                  const isSelected = this.isItemSelected($select);
                  if (isSelected) {
                    return result;
                  }
                  return;
                } else {
                  return result;
                }
              })
              .filter((item) => {
                return item != null;
              });
          },
          /**
           * 获取项上存储的信息
           * @param $el 选项元素
           */
          getItemDataOption($el: HTMLElement): PopsPanelSelectDataOption<any> {
            return Reflect.get($el, "data-info");
          },
        };
        PopsPanelSelectHorizontal.init();
        Reflect.set($li, "data-select", PopsPanelSelectHorizontal);
        handler = PopsPanelSelectHorizontal;
      }
      return {
        $el: $li,
        handler: handler,
      };
    },
    /**
     * type ==> select-multiple
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_select_multiple(viewConfig: PopsPanelSelectMultipleConfig<any>) {
      const $li = popsDOMUtils.createElement("li");
      Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
      this.setElementClassName($li, viewConfig.className);
      this.setElementAttributes($li, viewConfig.attributes);
      this.setElementProps($li, viewConfig.props);
      // 左边底部的描述的文字
      let leftDescriptionText = "";
      if (viewConfig.description) {
        leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
      }
      PopsSafeUtils.setSafeHTML(
        $li,
        /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-select-multiple">
					<div class="el-select__wrapper">
						<div class="el-select__selection">
							<!-- 这个是用于手动输入的，这里暂不适配 -->
							<div class="el-select__selected-item el-select__input-wrapper">
		
							</div>
							<!-- 这个是placeholder -->
							<div class="el-select__selected-item el-select__placeholder">
							</div>
						</div>
						<!-- 下拉箭头 -->
						<div class="el-select__suffix">
							<i class="el-icon el-select__caret el-select__icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
								</svg>
							</i>
						</div>
					</div>
				</div>
				`
      );
      const PopsPanelSelectMultiple = {
        [Symbol.toStringTag]: "PopsPanelSelectMultiple",
        $el: {
          /** 左侧文本容器 */
          $itemLeftContainer: $li.querySelector<HTMLElement>(".pops-panel-item-left-text"),
          /** 选择框容器 */
          $container: void 0 as any as HTMLElement,
          /** 选择框包裹的容器 */
          $wrapper: void 0 as any as HTMLElement,
          /** 内容区域 */
          $section: void 0 as any as HTMLElement,
          /** 手动输入 */
          $selectedInputWrapper: void 0 as any as HTMLElement,
          /** 灰色提示语 */
          $selectedPlaceHolderWrapper: void 0 as any as HTMLElement,
          /** 下拉箭头区域 */
          $suffix: void 0 as any as HTMLElement,
          /** 下拉箭头图标 */
          $suffixIcon: void 0 as any as HTMLElement,
          /** 下拉列表弹窗的下拉列表容器 */
          $selectContainer: void 0 as any as HTMLElement | null,
        },
        $data: {
          /** 默认值 */
          defaultValue: viewConfig.getValue(),
          /**
           * 已选择的信息
           */
          selectedDataList: [] as PopsPanelSelectMultipleDataOption<any>[],
          /**
           * 箭头旋转的属性
           */
          rotateKey: "data-show-option",
        },
        /** 初始化 */
        init() {
          this.initDefault();
          this.inintEl();
          this.initPlaceHolder();
          this.initTagElement();
          this.onShowSelectDialogClick();

          const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
          if (disabled) {
            this.disable();
          }
        },
        /** 初始化默认值 */
        initDefault() {
          viewConfig.data.forEach((dataItem) => {
            if (this.$data.defaultValue.includes(dataItem.value)) {
              // 初始化选中的配置
              this.$data.selectedDataList.push(dataItem);
            }
          });
        },
        /** 初始化$el变量 */
        inintEl() {
          this.$el.$container = $li.querySelector<HTMLElement>(".pops-panel-select-multiple")!;
          this.$el.$wrapper = $li.querySelector<HTMLElement>(".el-select__wrapper")!;
          this.$el.$section = $li.querySelector<HTMLElement>(".el-select__selection")!;
          this.$el.$selectedInputWrapper = $li.querySelector<HTMLElement>(
            ".el-select__selected-item.el-select__input-wrapper"
          )!;
          this.$el.$selectedPlaceHolderWrapper = $li.querySelector<HTMLElement>(
            ".el-select__selected-item.el-select__placeholder"
          )!;
          this.$el.$suffix = $li.querySelector<HTMLElement>(".el-select__suffix")!;
          this.$el.$suffixIcon = $li.querySelector<HTMLElement>(".el-select__suffix .el-icon")!;

          // 先把手动输入框隐藏
          this.hideInputWrapper();
        },
        /**
         * 初始化提示文字
         */
        initPlaceHolder() {
          let placeholder = "";
          if (typeof viewConfig.placeholder === "string") {
            placeholder = viewConfig.placeholder;
          } else if (typeof viewConfig.placeholder === "function") {
            const placeholderResult = viewConfig.placeholder();
            if (typeof placeholderResult === "string") {
              placeholder = placeholderResult;
            }
          }
          const $placeholder = popsDOMUtils.createElement("span", {
            innerText: placeholder,
          });
          this.$el.$selectedPlaceHolderWrapper.appendChild($placeholder);
        },
        /**
         * 初始化tag元素
         */
        initTagElement() {
          // 遍历数据，寻找对应的值
          viewConfig.data.forEach((dataItem) => {
            const findValue = this.$data.selectedDataList.find((item) => item.value === dataItem.value);
            if (findValue) {
              // 存在对应的值
              const selectedInfo = this.createTagItem(dataItem);
              this.addTagItem(selectedInfo.$tag);
              this.onSelectItemCloseIconClick({
                $tag: selectedInfo.$tag,
                $closeIcon: selectedInfo.$closeIcon,
                value: dataItem.value,
                text: dataItem.text,
              });
            }
          });
          this.checkTagEmpty();
        },
        /**
         * 生成一个tag项
         * @param data 配置
         */
        createTagItem(data: PopsPanelSelectMultipleDataOption<any>) {
          const $tag = popsDOMUtils.createElement("div", {
            className: "el-select__selected-item el-select__choose_tag",
            innerHTML: /*html*/ `
						<span class="el-tag is-closable el-tag--info el-tag--default el-tag--light">
							<span class="el-tag__content">
								<span class="el-select__tags-text"></span>
							</span>
							<!-- 关闭tag的图标 -->
							<i class="el-icon el-tag__close">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
								</svg>
							</i>
						</span>
						`,
          });
          /** 标签 */
          const $tagText = $tag.querySelector<HTMLSpanElement>(".el-select__tags-text")!;
          /** 关闭图标 */
          const $closeIcon = $tag.querySelector<HTMLElement>(".el-icon.el-tag__close")!;
          const text = typeof data.text === "function" ? data.text(data, this.$data.selectedDataList) : data.text;
          if (data.isHTML) {
            PopsSafeUtils.setSafeHTML($tagText, text);
          } else {
            $tagText.innerText = text;
          }

          return {
            $tag: $tag,
            $tagText: $tagText,
            $closeIcon: $closeIcon,
          };
        },
        /**
         * 添加选中项的tag元素
         * @param $tag 添加的元素
         */
        addTagItem($tag: HTMLElement) {
          // 往前添加
          // 去除前面的空白
          this.setSectionIsNear();
          if (this.$el.$section.contains(this.$el.$selectedInputWrapper)) {
            const $prev = this.$el.$selectedInputWrapper.previousElementSibling;
            if ($prev) {
              // 存在前一个元素，添加到前面的元素的后面
              popsDOMUtils.after($prev, $tag);
            } else {
              // 不存在前一个元素，添加到最前面
              popsDOMUtils.before(this.$el.$selectedInputWrapper, $tag);
            }
          } else if (this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)) {
            const $prev = this.$el.$selectedPlaceHolderWrapper.previousElementSibling;
            if ($prev) {
              // 存在前一个元素，添加到前面的元素的后面
              popsDOMUtils.after($prev, $tag);
            } else {
              // 不存在前一个元素，添加到最前面
              popsDOMUtils.before(this.$el.$selectedPlaceHolderWrapper, $tag);
            }
          } else {
            this.$el.$section.appendChild($tag);
          }
          // 隐藏元素
          this.hideInputWrapper();
          this.hidePlaceHolderWrapper();
        },
        /**
         * 更新tag信息
         */
        updateTagItem() {
          this.$el.$section.querySelectorAll<HTMLElement>(".el-select__choose_tag").forEach(($ele) => {
            $ele.remove();
          });
          this.initTagElement();
        },
        /**
         * 选中的值改变的回调
         * @param selectedDataList 当前的选中信息
         */
        onValueChange(selectedDataList?: PopsPanelSelectMultipleDataOption<any>[]) {
          // 动态更新禁用状态
          this.updateAllSelectItems();
          if (typeof viewConfig.callback === "function") {
            viewConfig.callback(selectedDataList || this.$data.selectedDataList);
          }
        },
        /**
         * 更新选项弹窗内的所有选项元素的状态
         *
         * + 更新禁用状态
         * + 更新选中状态
         */
        updateAllSelectItems() {
          this.getAllSelectItemInfo(false).forEach(($selectInfo) => {
            const { data, $select } = $selectInfo;
            // 更新文字
            this.setSelectItemText(data, $selectInfo.$select);
            // 更新禁用状态
            if (typeof data.disable === "function" && data.disable(data.value, this.$data.selectedDataList)) {
              // 禁用
              this.disableSelectItem($select);
              // 移除选中信息
              this.removeSelectedInfo(data, false);
              // 移除选中状态
              this.removeItemSelected($select);
            } else {
              // 取消禁用
              this.cancleDisableSelectItem($select);
            }
            // 更新选中状态
            const findValue = this.$data.selectedDataList.find((it) => it.value === data.value);
            if (findValue) {
              this.setItemSelected($select);
            } else {
              this.removeItemSelected($select);
            }
          });
        },
        /**
         * 设置选项元素选中
         * @param $select 选项元素
         */
        setItemSelected($select: HTMLElement) {
          if (this.isItemSelected($select)) return;
          $select.classList.add("select-item-is-selected");
        },
        /**
         * 移除选项元素选中
         * @param $select 选项元素
         */
        removeItemSelected($select: HTMLElement) {
          $select.classList.remove("select-item-is-selected");
        },
        /**
         * 判断选项元素是否选中
         * @param $select
         */
        isItemSelected($select: HTMLElement): boolean {
          return $select.classList.contains("select-item-is-selected");
        },
        /**
         * 添加选中信息
         * @param dataList 选择项列表的数据
         * @param $select 选项元素
         */
        addItemSelected(dataList: PopsPanelSelectMultipleDataOption<any>[], $select: HTMLElement) {
          const info = this.getSelectedItemInfo($select);
          const findValue = dataList.find((item) => item.value === info.value);
          if (!findValue) {
            dataList.push(info);
          }
          this.onValueChange(dataList);
        },
        /**
         * 获取选中的项的信息
         * @param $select 选项元素
         */
        getSelectedItemInfo($select: HTMLElement): PopsPanelSelectMultipleDataOption<any> {
          return Reflect.get($select, "data-info");
        },
        /**
         * 移除选中信息
         * @param dataList 选择项的数据
         * @param $select 选项元素
         */
        removeSelectedItemInfo(dataList: PopsPanelSelectMultipleDataOption<any>[], $select: HTMLElement) {
          const info = this.getSelectedItemInfo($select);
          const findIndex = dataList.findIndex((item) => item.value === info.value);
          if (findIndex !== -1) {
            dataList.splice(findIndex, 1);
          }
          this.onValueChange(dataList);
        },
        /**
         * 获取所有选项的信息
         * @param [onlySelected=true] 是否仅获取选中的项的信息
         * + true （默认）仅获取选中项的信息
         * + false 获取所有选择项的信息
         */
        getAllSelectItemInfo(onlySelected: boolean = true) {
          return Array.from(this.$el.$selectContainer?.querySelectorAll<HTMLElement>(".select-item") ?? [])
            .map(($select) => {
              const data = this.getSelectedItemInfo($select);
              const result = {
                /** 选项信息数据 */
                data: data,
                /** 选项元素 */
                $select: $select,
              };
              if (onlySelected) {
                // 仅选中
                const isSelected = this.isItemSelected($select);
                if (isSelected) {
                  return result;
                }
                return;
              } else {
                return result;
              }
            })
            .filter((item) => {
              return item != null;
            });
        },
        /**
         * 创建一个选择项元素
         * @param data 选择项的数据
         */
        createSelectItemElement(data: PopsPanelSelectMultipleDataOption<any>) {
          const $select = popsDOMUtils.createElement("li", {
            className: "select-item",
            innerHTML: /*html*/ `
							<span class="select-item-text"></span>
						`,
          });
          this.setSelectItemText(data, $select);
          Reflect.set($select, "data-info", data);
          return $select;
        },
        /**
         * 设置选择项的文字
         * @param data 选择项的数据
         * @param $select 选择项元素
         */
        setSelectItemText(data: PopsPanelSelectMultipleDataOption<any>, $select: HTMLElement) {
          const text = typeof data.text === "function" ? data.text(data.value, this.$data.selectedDataList) : data.text;
          const $selectSpan = $select.querySelector<HTMLElement>(".select-item-text")!;
          if (data.isHTML) {
            PopsSafeUtils.setSafeHTML($selectSpan, text);
          } else {
            $selectSpan.innerText = text;
          }
        },
        /**
         * 设置选择项的禁用状态
         * @param $select 选择项元素
         */
        disableSelectItem($select: HTMLElement) {
          $select.setAttribute("aria-disabled", "true");
          $select.setAttribute("disabled", "true");
        },
        /**
         * 移除选择项的禁用状态
         * @param $select 选择项元素
         */
        cancleDisableSelectItem($select: HTMLElement) {
          $select.removeAttribute("aria-disabled");
          $select.removeAttribute("disabled");
        },
        /**
         * 判断选择项是否禁用
         * @param $select 选择项元素
         */
        isSelectItemDisabled($select: HTMLElement) {
          return $select.hasAttribute("disabled") || $select.ariaDisabled;
        },
        /**
         * 设置选择项的点击事件
         * @param dataList 选中的信息列表
         * @param $select 选择项元素
         */
        onSelectItemClick(dataList: PopsPanelSelectMultipleDataOption<any>[], $select: HTMLElement) {
          popsDOMUtils.on<PointerEvent | MouseEvent>($select, "click", (event) => {
            popsDOMUtils.preventEvent(event);
            if (this.isSelectItemDisabled($select)) {
              return;
            }
            if (typeof viewConfig.clickCallBack === "function") {
              const allSelectedInfo = this.getAllSelectItemInfo().map((it) => it.data);
              const clickResult = viewConfig.clickCallBack(event, allSelectedInfo);
              if (typeof clickResult === "boolean" && !clickResult) {
                return;
              }
            }
            // 修改选中状态
            if (this.isItemSelected($select)) {
              this.removeItemSelected($select);
              this.removeSelectedItemInfo(dataList, $select);
            } else {
              this.setItemSelected($select);
              this.addItemSelected(dataList, $select);
            }
          });
        },
        /**
         * 设置下拉列表的点击事件
         *
         * 点击显示下拉列表弹窗
         */
        onShowSelectDialogClick() {
          const defaultCSS = PopsCSS.panelComponents_Select;
          popsDOMUtils.on(this.$el.$container, "click", () => {
            if (this.isDisabled()) {
              return;
            }
            /** 当前已选中的值 */
            const selectInfo = this.$data.selectedDataList;
            const { style, lightStyle, darkStyle, ...userConfirmConfig } = viewConfig.selectConfirmDialogConfig || {};
            const dialogCloseCallback = () => {
              this.$data.selectedDataList = [...selectInfo];
              this.updateTagItem();
              this.$el.$selectContainer = null;
              this.$el.$container.removeAttribute(this.$data.rotateKey);
            };
            this.$el.$container.setAttribute(this.$data.rotateKey, String(true));
            const confirmConfig = popsUtils.assign(
              <PopsAlertConfig>{
                title: {
                  text: "请勾选需要选择的选项",
                  position: "center",
                },
                content: {
                  text: /*html*/ `<ul class="select-container"></ul>`,
                  html: true,
                },
                btn: {
                  ok: {
                    enable: false,
                  },
                  close: {
                    enable: true,
                    callback(evtConfig) {
                      evtConfig.close();
                      dialogCloseCallback();
                    },
                  },
                },
                mask: {
                  enable: true,
                  clickCallBack(originalRun) {
                    originalRun();
                    dialogCloseCallback();
                  },
                  clickEvent: {
                    toClose: true,
                  },
                },
                drag: true,
                dragLimit: true,
                width: "300px",
                height: "auto",
                style: /*css*/ `
                  ${defaultCSS}

								  ${style || ""}
								`,
                lightStyle: lightStyle,
                darkStyle: darkStyle,
              },
              userConfirmConfig
            );
            const $dialog = PopsAlert.init(confirmConfig);
            const $selectContainer = $dialog.$shadowRoot.querySelector<HTMLUListElement>(".select-container")!;
            // 配置选项元素
            viewConfig.data.forEach((item) => {
              const $select = this.createSelectItemElement(item);
              // 添加到confirm中
              $selectContainer.appendChild($select);
              // 设置每一项的点击事件
              this.onSelectItemClick(selectInfo, $select);
            });
            this.$el.$selectContainer = $selectContainer;
            // 动态更新禁用状态
            this.updateAllSelectItems();
          });
        },
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
        }) {
          popsDOMUtils.on<PointerEvent | MouseEvent>(
            data.$closeIcon,
            "click",
            (event) => {
              popsDOMUtils.preventEvent(event);
              if (this.isDisabled()) {
                return;
              }
              if (typeof viewConfig.closeIconClickCallBack === "function") {
                const result = viewConfig.closeIconClickCallBack(event, {
                  $tag: data.$tag,
                  $closeIcon: data.$closeIcon,
                  value: data.value,
                  text: typeof data.text === "function" ? data.text.bind(data) : data.text,
                });
                if (typeof result === "boolean" && !result) {
                  return;
                }
              }
              this.removeSelectedTagItem(data.$tag);
              this.removeSelectedInfo({
                value: data.value,
                text: data.text,
              });
            },
            {
              capture: true,
            }
          );
        },
        /**
         * 检测tag是否为空
         *
         * 如果为空则显示placeholder
         */
        checkTagEmpty() {
          if (!this.$el.$section.querySelectorAll(".el-select__choose_tag").length) {
            // 没有tag了
            // this.showInputWrapper();
            this.showPlaceHolderWrapper();
            this.removeSectionIsNear();
          }
        },
        /**
         * 移除选中项元素
         */
        removeSelectedTagItem($tag: HTMLElement) {
          $tag.remove();
          this.checkTagEmpty();
        },
        /**
         * 从保存的已选中的信息列表中移除目标信息
         * @param data 需要移除的信息
         * @param [emitValueChangeCallBack=true] 是否触发值改变的回调
         * + true （默认）触发值改变的回调
         * + false 不触发值改变的回调
         */
        removeSelectedInfo(data: PopsPanelSelectMultipleDataOption<any>, emitValueChangeCallBack: boolean = true) {
          for (let index = 0; index < this.$data.selectedDataList.length; index++) {
            const selectInfo = this.$data.selectedDataList[index];
            if (selectInfo.value === data.value) {
              this.$data.selectedDataList.splice(index, 1);
              break;
            }
          }
          emitValueChangeCallBack && this.onValueChange();
        },
        /** 显示输入框 */
        showInputWrapper() {
          popsDOMUtils.cssShow(this.$el.$selectedInputWrapper);
        },
        /** 隐藏输入框 */
        hideInputWrapper() {
          popsDOMUtils.cssHide(this.$el.$selectedInputWrapper, true);
        },
        /** 显示palceholder */
        showPlaceHolderWrapper() {
          popsDOMUtils.cssShow(this.$el.$selectedPlaceHolderWrapper);
        },
        /** 隐藏palceholder */
        hidePlaceHolderWrapper() {
          popsDOMUtils.cssHide(this.$el.$selectedPlaceHolderWrapper, true);
        },
        /** 设置隐藏section的前面的空白 */
        setSectionIsNear() {
          this.$el.$section.classList.add("is-near");
        },
        /** 取消设置隐藏section的前面的空白 */
        removeSectionIsNear() {
          this.$el.$section.classList.remove("is-near");
        },
        /**
         * 禁用标签
         */
        disable() {
          popsDOMUtils.addClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
          popsDOMUtils.addClassName(this.$el.$container, "pops-panel-select-disable");
        },
        /**
         * 判断是否被禁用
         */
        isDisabled() {
          return popsDOMUtils.containsClassName(this.$el.$container, "pops-panel-select-disable");
        },
        /**
         * 取消禁用标签
         */
        cancleDisable() {
          popsDOMUtils.removeClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
          popsDOMUtils.removeClassName(this.$el.$container, "pops-panel-select-disable");
        },
      };

      PopsPanelSelectMultiple.init();
      Reflect.set($li, "data-select-multiple", PopsPanelSelectMultiple);
      return {
        $el: $li,
        handler: PopsPanelSelectMultiple,
      };
    },
    /**
     * type ==> button
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_button(viewConfig: PopsPanelButtonConfig) {
      const $li = popsDOMUtils.createElement("li");
      Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
      this.setElementClassName($li, viewConfig.className);
      this.setElementAttributes($li, viewConfig.attributes);
      this.setElementProps($li, viewConfig.props);

      // 左边底部的描述的文字
      let leftDescriptionText = "";
      if (viewConfig.description) {
        leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
      }
      PopsSafeUtils.setSafeHTML(
        $li,
        /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner" type="button">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`
      );

      const PopsPanelButton = {
        [Symbol.toStringTag]: "PopsPanelButton",
        $ele: {
          panelButton: $li.querySelector<HTMLDivElement>(".pops-panel-button")!,
          button: $li.querySelector<HTMLDivElement>(".pops-panel-button .pops-panel-button_inner")!,
          icon: $li.querySelector<HTMLDivElement>(".pops-panel-button .pops-bottom-icon")!,
          spanText: $li.querySelector<HTMLDivElement>(".pops-panel-button .pops-panel-button-text")!,
        },
        $data: {},
        init() {
          this.$ele.panelButton.appendChild(this.$ele.button);
          this.initButton();
          this.onButtonClick();
        },
        initButton() {
          if (typeof viewConfig.buttonIcon === "string" && viewConfig.buttonIcon.trim() !== "") {
            // 存在icon图标且不为空
            if (PopsIcon.hasIcon(viewConfig.buttonIcon)) {
              this.setIconSVG(PopsIcon.getIcon(viewConfig.buttonIcon)!);
            } else {
              this.setIconSVG(viewConfig.buttonIcon);
            }
            this.showIcon();
          } else {
            this.hideIcon();
          }
          // 按钮文字
          let buttonText = viewConfig.buttonText;
          if (typeof viewConfig.buttonText === "function") {
            buttonText = viewConfig.buttonText();
          }
          this.setButtonType(viewConfig.buttonType);
          if (viewConfig.buttonIsRightIcon) {
            this.setIconRight();
          } else {
            this.setIconLeft();
          }
          if (viewConfig.disable) {
            this.disable();
          }
          this.setButtonText(buttonText as string);
          this.setIconLoadingStatus(viewConfig.buttonIconIsLoading);
        },
        disable() {
          this.$ele.button.setAttribute("disabled", "true");
        },
        notDisable() {
          this.$ele.button.removeAttribute("disabled");
        },
        /**
         * 隐藏icon图标
         */
        hideIcon() {
          this.$ele.panelButton.classList.add("pops-panel-button-no-icon");
        },
        /**
         * 显示icon图标
         */
        showIcon() {
          this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");
        },
        /**
         * 设置icon图标的svg
         */
        setIconSVG(svgHTML: string) {
          PopsSafeUtils.setSafeHTML(this.$ele.icon, svgHTML);
        },
        /**
         * 设置icon图标是否旋转
         * @param status
         */
        setIconLoadingStatus(status: any) {
          this.$ele.icon.setAttribute("is-loading", Boolean(status).toString());
        },
        /**
         * 设置属性上是否存在icon图标
         */
        setHasIcon(value: any) {
          this.$ele.button.setAttribute("data-icon", Boolean(value).toString());
        },
        /**
         * 设置按钮类型
         * @param typeValue
         */
        setButtonType(typeValue: string) {
          this.$ele.button.setAttribute("data-type", typeValue);
        },
        /**
         * 添加按钮的图标在右边
         */
        setIconRight() {
          this.$ele.button.classList.add("pops-panel-button-right-icon");
        },
        /**
         * （默认）添加按钮的图标在左边
         */
        setIconLeft() {
          this.$ele.button.classList.remove("pops-panel-button-right-icon");
        },
        /**
         * 设置按钮文本
         * @param text
         */
        setButtonText(text: string) {
          PopsSafeUtils.setSafeHTML(this.$ele.spanText, text);
        },
        /**
         * 设置按钮的点击事件
         */
        onButtonClick() {
          popsDOMUtils.on(this.$ele.button, "click", (event) => {
            if (typeof viewConfig.callback === "function") {
              viewConfig.callback(event);
            }
          });
        },
      };
      PopsPanelButton.init();
      Reflect.set($li, "data-button", PopsPanelButton);
      return {
        $el: $li,
        handler: PopsPanelButton,
      };
    },
    /**
     * type ==> deepMenu
     * 获取深层容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_deepMenu(viewConfig: PopsPanelDeepViewConfig) {
      const that = this;
      const $li = popsDOMUtils.createElement("li");
      popsDOMUtils.addClassName($li, "pops-panel-deepMenu-nav-item");
      Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
      this.setElementClassName($li, viewConfig.className);
      // 设置属性
      this.setElementAttributes($li, viewConfig.attributes);
      // 设置元素上的属性
      this.setElementProps($li, viewConfig.props);

      // 左边底部的描述的文字
      let leftDescriptionText = "";
      if (viewConfig.description) {
        // 设置描述
        leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
      }
      // 箭头图标
      const arrowRightIcon = typeof viewConfig.arrowRightIcon === "boolean" ? viewConfig.arrowRightIcon : true;
      let arrowRightIconHTML = "";
      if (arrowRightIcon) {
        arrowRightIconHTML = `<i class="pops-panel-deepMenu-arrowRight-icon">${PopsIcon.getIcon("arrowRight")}</i>`;
      }
      let rightText = "";
      if (viewConfig.rightText) {
        rightText = /*html*/ `<p class="pops-panel-item-right-text">${viewConfig.rightText}</p>`;
      }
      PopsSafeUtils.setSafeHTML(
        $li,
        /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-deepMenu">${rightText}${arrowRightIconHTML}</div>
				`
      );
      const PopsPanelDeepMenu = {
        [Symbol.toStringTag]: "PopsPanelDeepMenu",
        $ele: {
          get parentSection() {
            return that.$el.$panelContentSectionContainer;
          },
        },
        init() {
          this.onLiClick();
        },
        /**
         * 生成配置每一项的元素
         * @param $container
         * @param formItemConfig
         */
        initContainerItem($container: HTMLElement, formItemConfig: PopsPanelViewConfig | PopsPanelContainerConfig) {
          const containerViewConfig = formItemConfig as PopsPanelContainerConfig;
          if (containerViewConfig.type === "container") {
            const childViewConfig = containerViewConfig["views"];
            // 每一项<li>元素
            const $itemLi = popsDOMUtils.createElement("li");
            // 每一项<li>内的子<ul>元素
            const $itemUL = popsDOMUtils.createElement("ul");
            $itemUL.classList.add("pops-panel-forms-container-item-formlist");
            $itemLi.classList.add("pops-panel-forms-container-item");
            // 区域头部的文字
            const formHeaderDivElement = popsDOMUtils.createElement("div", {
              className: "pops-panel-forms-container-item-header-text",
            });
            PopsSafeUtils.setSafeHTML(formHeaderDivElement, containerViewConfig["text"]);

            if (containerViewConfig.isFold) {
              // 添加第一个
              // 加进容器内
              PopsSafeUtils.setSafeHTML(
                formHeaderDivElement,
                /*html*/ `
								<p>${containerViewConfig.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
							`
              );
              // 添加点击事件
              popsDOMUtils.on(formHeaderDivElement, "click", () => {
                if ($itemLi.hasAttribute("data-fold-enable")) {
                  $itemLi.removeAttribute("data-fold-enable");
                } else {
                  $itemLi.setAttribute("data-fold-enable", "");
                }
              });
              popsDOMUtils.addClassName(formHeaderDivElement, "pops-panel-forms-fold-container");
              popsDOMUtils.addClassName(formHeaderDivElement, PopsCommonCSSClassName.userSelectNone);
              $itemLi.setAttribute("data-fold-enable", "");
              popsDOMUtils.addClassName(formHeaderDivElement, "pops-panel-forms-fold");
              $itemLi.appendChild(formHeaderDivElement);
            } else {
              // 加进容器内
              $itemLi.appendChild(formHeaderDivElement);
            }

            that.setElementClassName($itemLi, formItemConfig.className);
            that.setElementAttributes($itemLi, formItemConfig.attributes);
            that.setElementProps($itemLi, formItemConfig.props);
            $itemLi.appendChild($itemUL);
            $container.appendChild($itemLi);
            childViewConfig.forEach((childViewConfig) => {
              that.uListContainerAddItem(childViewConfig, {
                ulElement: $itemUL,
                sectionContainerULElement: that.sectionContainerULElement,
                formContainerListElement: $itemLi,
                formHeaderDivElement: formHeaderDivElement,
              });
            });
            if (typeof containerViewConfig.afterAddToUListCallBack === "function") {
              containerViewConfig.afterAddToUListCallBack(viewConfig as any as PopsPanelContainerConfig, {
                target: $itemLi,
                ulElement: $itemUL,
                sectionContainerULElement: that.sectionContainerULElement,
                formContainerListElement: $itemLi,
                formHeaderDivElement: formHeaderDivElement,
              });
            }
          } else {
            // 如果成功创建，加入到中间容器中
            that.uListContainerAddItem(viewConfig, {
              ulElement: that.sectionContainerULElement,
            });
          }
        },
        /**
         * 前往子菜单
         * @param event 点击事件
         * @param liElement 当前的<li>元素
         */
        async gotoDeepMenu(event: Event, liElement: HTMLLIElement) {
          /** 当前所在的容器 */
          const $currentSection = liElement.closest<HTMLElement>("section.pops-panel-container")!;
          // 子菜单的容器
          const $deepMenuSection = popsDOMUtils.createElement("section", {
            className: "pops-panel-container pops-panel-deepMenu-container",
          });
          Reflect.set($deepMenuSection, that.$data.nodeStoreConfigKey, viewConfig);
          const $deepMenuHeaderUL = popsDOMUtils.createElement("ul", {
            className: "pops-panel-container-header-ul pops-panel-deepMenu-container-header-ul",
          });
          const $deepMenuMain = popsDOMUtils.createElement("ul", {
            className: "pops-panel-container-main-ul",
          });
          // 标题文字
          const headerTitleText = viewConfig.headerTitle ?? viewConfig.text;
          const $header = popsDOMUtils.createElement("li", {
            className: "pops-panel-container-header-title-text pops-panel-deepMenu-container-header",
            innerHTML: /*html*/ `<p class="pops-panel-deepMenu-container-header-title-text">${headerTitleText}</p>`,
          });
          // 返回箭头
          const $headerLeftArrow = popsDOMUtils.createElement("i", {
            className: "pops-panel-deepMenu-container-left-arrow-icon",
            innerHTML: PopsIcon.getIcon("arrowLeft")!,
          });
          // 动画配置
          const animOptions: KeyframeAnimationOptions = {
            // 150 220 300
            duration: 220,
            easing: "ease-in-out",
          };
          // 进入动画
          const enterViewTransition = () => {
            // 隐藏旧的容器
            popsDOMUtils.cssHide($currentSection, true);
            popsDOMUtils.on(
              $headerLeftArrow,
              "click",
              async (event) => {
                popsDOMUtils.preventEvent(event);
                // 返回动画
                const leaveViewTransition = () => {
                  const $prev = $currentSection;
                  popsDOMUtils.cssShow($prev);
                  $deepMenuSection.remove();
                };
                // 返回上一层菜单
                if (that.$config.useDeepMenuSwtichAnimation && document.startViewTransition) {
                  const leaveTransition = document.startViewTransition(leaveViewTransition);
                  await leaveTransition.ready;
                  // 向右移出
                  await Promise.all([
                    $deepMenuSection.animate(
                      [
                        {
                          // from
                          transform: "translateX(0)",
                        },
                        {
                          // to
                          transform: "translateX(100%)",
                        },
                      ],
                      animOptions
                    ).finished,
                    // 向右移入
                    $currentSection.animate(
                      [
                        {
                          // from
                          transform: "translateX(-100%)",
                        },
                        {
                          // to
                          transform: "translateX(0)",
                        },
                      ],
                      animOptions
                    ).finished,
                  ]);
                  await leaveTransition.finished;
                } else {
                  leaveViewTransition();
                }
                that.emitRenderRightContainer($currentSection);
              },
              {
                once: true,
              }
            );
            popsDOMUtils.before($header.firstElementChild!, $headerLeftArrow);
            $deepMenuHeaderUL.appendChild($header);
            $deepMenuSection.appendChild($deepMenuHeaderUL);
            $deepMenuSection.appendChild($deepMenuMain);

            if (viewConfig.views && Array.isArray(viewConfig.views)) {
              for (let index = 0; index < viewConfig.views.length; index++) {
                const formItemConfig = viewConfig.views[index];
                this.initContainerItem($deepMenuMain, formItemConfig);
              }
            }
            that.$el.$panelRightSectionWrapper.appendChild($deepMenuSection);
          };
          if (that.$config.useDeepMenuSwtichAnimation && document.startViewTransition) {
            const transition = document.startViewTransition(enterViewTransition);
            await transition.ready;
            await $deepMenuSection.animate(
              [
                {
                  // from
                  transform: "translateX(100%)",
                },
                {
                  // to
                  transform: "translateX(0)",
                },
              ],
              animOptions
            ).finished;
            await transition.finished;
          } else {
            enterViewTransition();
          }
          if (typeof viewConfig.afterEnterDeepMenuCallBack === "function") {
            viewConfig.afterEnterDeepMenuCallBack(viewConfig, {
              $sectionContainer: $deepMenuSection,
              $sectionContainerHeaderContainer: $deepMenuHeaderUL,
              $sectionContainerHeader: $header,
              $sectionBodyContainer: $deepMenuMain,
            });
          }
          that.emitRenderRightContainer($deepMenuSection);
        },
        /** 设置项的点击事件 */
        onLiClick() {
          popsDOMUtils.on($li, "click", async (event) => {
            if (typeof viewConfig.clickCallBack === "function") {
              const result = await viewConfig.clickCallBack(event, viewConfig);
              if (result) {
                return;
              }
            }
            await this.gotoDeepMenu(event, $li);
          });
        },
      };

      PopsPanelDeepMenu.init();
      Reflect.set($li, "data-deepMenu", PopsPanelDeepMenu);

      return {
        $el: $li,
        handler: PopsPanelDeepMenu,
      };
    },
    /**
     * type ===> own
     * 获取中间容器的元素<li>
     * @param viewConfig
     */
    createSectionContainerItem_own(viewConfig: PopsPanelOwnConfig) {
      let $li = popsDOMUtils.createElement("li");
      Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
      this.setElementClassName($li, viewConfig.className);
      this.setElementAttributes($li, viewConfig.attributes);
      this.setElementProps($li, viewConfig.props);
      $li = viewConfig.createLIElement($li);
      return {
        $el: $li,
      };
    },
    /**
     * 获取中间容器的元素<li>
     * @param viewConfig 视图配置
     */
    createSectionContainerItem(viewConfig: PopsPanelViewConfig) {
      /** 配置项的类型 */
      const componentType = viewConfig.type;

      if (componentType === "switch") {
        return this.createSectionContainerItem_switch(viewConfig);
      } else if (componentType === "slider") {
        return this.createSectionContainerItem_slider(viewConfig);
      } else if (componentType === "input") {
        return this.createSectionContainerItem_input(viewConfig);
      } else if (componentType === "textarea") {
        return this.createSectionContainerItem_textarea(viewConfig);
      } else if (componentType === "select") {
        return this.createSectionContainerItem_select(viewConfig);
      } else if (componentType === "select-multiple") {
        return this.createSectionContainerItem_select_multiple(viewConfig);
      } else if (componentType === "button") {
        return this.createSectionContainerItem_button(viewConfig);
      } else if (componentType === "deepMenu") {
        return this.createSectionContainerItem_deepMenu(viewConfig);
      } else if (componentType === "own") {
        return this.createSectionContainerItem_own(viewConfig);
      } else {
        console.error("尚未实现的type类型", viewConfig);
      }
    },
    /**
     * 生成配置项forms
     * 生成配置每一项的元素
     * @param viewConfig
     */
    createSectionContainerItem_forms(viewConfig: PopsPanelContentConfig | PopsPanelContainerConfig) {
      const that = this;
      const containerConfig = viewConfig as PopsPanelContainerConfig;
      if (containerConfig.type === "container") {
        const childForms = viewConfig["views"];
        // 每一项<li>元素
        const formContainerListElement = popsDOMUtils.createElement("li");
        // 每一项<li>内的子<ul>元素
        const formContainerULElement = popsDOMUtils.createElement("ul");
        formContainerListElement.classList.add("pops-panel-forms-container-item");
        formContainerULElement.classList.add("pops-panel-forms-container-item-formlist");
        // 区域头部的文字
        const formHeaderDivElement = popsDOMUtils.createElement("div", {
          className: "pops-panel-forms-container-item-header-text",
        });
        PopsSafeUtils.setSafeHTML(formHeaderDivElement, containerConfig["text"]);
        if (containerConfig.isFold) {
          // 加进容器内
          PopsSafeUtils.setSafeHTML(
            formHeaderDivElement,
            /*html*/ `
						<p>${containerConfig.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
					`
          );
          // 添加点击事件
          popsDOMUtils.on(formHeaderDivElement, "click", () => {
            if (formContainerListElement.hasAttribute("data-fold-enable")) {
              formContainerListElement.removeAttribute("data-fold-enable");
            } else {
              formContainerListElement.setAttribute("data-fold-enable", "");
            }
          });
          popsDOMUtils.addClassName(formHeaderDivElement, "pops-panel-forms-fold-container");
          popsDOMUtils.addClassName(formHeaderDivElement, PopsCommonCSSClassName.userSelectNone);
          formContainerListElement.setAttribute("data-fold-enable", "");
          popsDOMUtils.addClassName(formContainerListElement, "pops-panel-forms-fold");
          formContainerListElement.appendChild(formHeaderDivElement);
        } else {
          // 加进容器内
          formContainerListElement.appendChild(formHeaderDivElement);
        }
        that.setElementClassName(formContainerListElement, viewConfig.className);
        that.setElementAttributes(formContainerListElement, viewConfig.attributes);
        that.setElementProps(formContainerListElement, viewConfig.props);
        childForms.forEach((childViewConfig) => {
          that.uListContainerAddItem(childViewConfig as PopsPanelViewConfig, {
            ulElement: formContainerULElement,
            sectionContainerULElement: that.sectionContainerULElement,
            formContainerListElement: formContainerListElement,
            formHeaderDivElement: formHeaderDivElement,
          });
        });
        formContainerListElement.appendChild(formContainerULElement);
        that.sectionContainerULElement.appendChild(formContainerListElement);

        if (typeof containerConfig.afterAddToUListCallBack === "function") {
          containerConfig.afterAddToUListCallBack(containerConfig, {
            target: formContainerListElement,
            ulElement: formContainerULElement,
            sectionContainerULElement: that.sectionContainerULElement,
            formContainerListElement: formContainerListElement,
            formHeaderDivElement: formHeaderDivElement,
          });
        }
      } else {
        // 如果成功创建，加入到中间容器中
        that.uListContainerAddItem(viewConfig as any as PopsPanelViewConfig, {
          ulElement: that.sectionContainerULElement,
        });
      }
    },
    /**
     * 主动触发触发渲染右侧容器的事件
     * @param $container 容器
     */
    emitRenderRightContainer($container: HTMLElement) {
      const dataViewConfig: PopsPanelEventType["pops:renderRightContainer"]["viewConfig"] = Reflect.get(
        $container,
        this.$data.nodeStoreConfigKey
      );
      this.$el.$pops.dispatchEvent(
        new CustomEvent<PopsPanelEventType["pops:renderRightContainer"]>(
          <keyof PopsPanelEventType>"pops:renderRightContainer",
          {
            detail: {
              viewConfig: dataViewConfig,
            },
          }
        )
      );
    },
    /**
     *
     * @param viewConfig
     * @param containerOptions
     */
    uListContainerAddItem(
      viewConfig: PopsPanelViewConfig,
      containerOptions: Omit<PopsPanelRightAsideContainerConfig, "target">
    ) {
      const itemInfo = this.createSectionContainerItem(viewConfig);
      if (itemInfo) {
        containerOptions["ulElement"].appendChild(itemInfo.$el);
      }
      if (typeof viewConfig.afterAddToUListCallBack === "function") {
        viewConfig.afterAddToUListCallBack(viewConfig as any, {
          ...containerOptions,
          target: itemInfo?.$el,
        });
      }
    },
    /**
     * 为左侧容器元素添加点击事件
     * @param $asideItem 左侧的容器<li>元素
     * @param asideConfig 配置
     */
    onAsideItemClick($asideItem: HTMLElement, asideConfig: PopsPanelContentConfig) {
      popsDOMUtils.on<MouseEvent | PointerEvent>($asideItem, "click", async (event) => {
        if (typeof asideConfig.clickFirstCallback === "function") {
          const clickFirstCallbackResult = await asideConfig.clickFirstCallback(
            event,
            this.sectionContainerHeaderULElement,
            this.sectionContainerULElement
          );
          if (typeof clickFirstCallbackResult === "boolean" && !clickFirstCallbackResult) {
            return;
          }
        }
        this.clearContainer();
        const rightContainerViewConfig: PopsPanelContentConfig[] = Reflect.get($asideItem, "__forms__");

        Reflect.set(this.$el.$panelContentSectionContainer, this.$data.nodeStoreConfigKey, rightContainerViewConfig);
        popsDOMUtils.cssShow(this.$el.$panelContentSectionContainer);
        this.clearAsideItemIsVisited();
        this.setAsideItemIsVisited($asideItem);
        // 顶部标题栏，存在就设置
        const title = typeof asideConfig.title === "function" ? asideConfig.title() : asideConfig.title;
        let headerTitleText =
          typeof asideConfig.headerTitle === "function" ? asideConfig.headerTitle() : asideConfig.headerTitle;
        headerTitleText = headerTitleText ?? title;
        if (typeof headerTitleText === "string" && headerTitleText.trim() !== "") {
          const $containerHeaderTitle = popsDOMUtils.createElement("li");
          $containerHeaderTitle.classList.add("pops-panel-container-header-title-text");
          Reflect.set($containerHeaderTitle, "__asideConfig__", asideConfig);
          PopsSafeUtils.setSafeHTML($containerHeaderTitle, headerTitleText);
          this.sectionContainerHeaderULElement.appendChild($containerHeaderTitle);
        }

        rightContainerViewConfig.forEach((viewConfig) => {
          this.createSectionContainerItem_forms(viewConfig);
        });

        if (typeof asideConfig.clickCallback === "function") {
          // 执行回调
          const asideClickCallbackResult = await asideConfig.clickCallback(
            event,
            this.sectionContainerHeaderULElement,
            this.sectionContainerULElement
          );
          if (typeof asideClickCallbackResult === "boolean" && !asideClickCallbackResult) {
            return;
          }
        }
        this.emitRenderRightContainer(this.$el.$panelContentSectionContainer);
      });
    },
  };
};
