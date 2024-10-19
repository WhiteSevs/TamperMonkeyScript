import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsMathFloatUtils } from "../../utils/PopsMathUtils";
import { popsUtils } from "../../utils/PopsUtils";
import type { PopsAlertDetails } from "../alert/indexType";
import type { PopsToolTipDetails } from "../tooltip/indexType";
import type { PopsPanelButtonDetails } from "./buttonType";
import type { PopsPanelRightAsideContainerOptions } from "./commonType";
import type { PopsPanelDeepMenuDetails } from "./deepMenuType";
import type { PopsPanelFormsDetails } from "./formsType";
import type {
	PopsPanelContentConfig,
	PopsPanelDetails,
	PopsPanelFormsTotalDetails,
} from "./indexType";
import type { PopsPanelInputDetails } from "./inputType";
import type { PopsPanelOwnDetails } from "./ownType";
import type {
	PopsPanelSelectMultipleDataOption,
	PopsPanelSelectMultipleDetails,
} from "./selectMultipleType";
import type { PopsPanelSelectDetails } from "./selectType";
import type { PopsPanelSliderDetails } from "./sliderType";
import type { PopsPanelSwitchDetails } from "./switchType";
import type { PopsPanelTextAreaDetails } from "./textareaType";

export const PanelHandleContentDetails = () => {
	return {
		/**
		 * 左侧的ul容器
		 */
		asideULElement: null as any as HTMLUListElement,
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
			/** 内容 */
			$content: null as any as HTMLDivElement,
			/** 左侧容器 */
			$contentAside: null as any as HTMLDivElement,
			/** 右侧容器 */
			$contentSectionContainer: null as any as HTMLDivElement,
		},
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
		}) {
			// @ts-ignore
			this.$el = null;
			this.$el = {
				...details.$el,
			};

			this.asideULElement =
				this.$el.$contentAside.querySelector<HTMLUListElement>("ul")!;
			this.sectionContainerHeaderULElement =
				this.$el.$contentSectionContainer.querySelectorAll<HTMLUListElement>(
					"ul"
				)[0];
			this.sectionContainerULElement =
				this.$el.$contentSectionContainer.querySelectorAll<HTMLUListElement>(
					"ul"
				)[1];
			/**
			 * 默认点击的左侧容器项
			 */
			let $asideDefaultItemElement: HTMLLIElement | null = null;
			/** 是否滚动到默认位置（第一个项） */
			let isScrollToDefaultView = false;
			details.config.content.forEach((asideItemConfig) => {
				let $asideLiElement = this.createAsideItem(asideItemConfig);
				this.setAsideItemClickEvent($asideLiElement, asideItemConfig);
				this.asideULElement.appendChild($asideLiElement);
				if ($asideDefaultItemElement == null) {
					let flag = false;
					if (typeof asideItemConfig.isDefault === "function") {
						flag = Boolean(asideItemConfig.isDefault());
					} else {
						flag = Boolean(asideItemConfig.isDefault);
					}
					if (flag) {
						$asideDefaultItemElement = $asideLiElement;
						isScrollToDefaultView = Boolean(
							asideItemConfig.scrollToDefaultView
						);
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

			/* 点击左侧列表 */
			if (
				$asideDefaultItemElement == null &&
				this.asideULElement.children.length
			) {
				/* 默认第一个 */
				$asideDefaultItemElement = this.asideULElement
					.children[0] as HTMLLIElement;
			}
			if ($asideDefaultItemElement) {
				/* 点击选择的那一项 */
				$asideDefaultItemElement.click();
				if (isScrollToDefaultView) {
					$asideDefaultItemElement?.scrollIntoView();
				}
			} else {
				console.error("pops.panel：左侧容器没有项");
			}
		},
		/**
		 * 清空container容器的元素
		 */
		clearContainer() {
			this.sectionContainerHeaderULElement.innerHTML = "";
			this.sectionContainerULElement.innerHTML = "";
			this.$el.$content
				?.querySelectorAll("section.pops-panel-deepMenu-container")
				.forEach((ele) => ele.remove());
		},
		/**
		 * 清空左侧容器已访问记录
		 */
		clearAsideItemIsVisited() {
			this.$el.$contentAside
				.querySelectorAll<HTMLDivElement>(".pops-is-visited")
				.forEach((element) => {
					popsDOMUtils.removeClassName(element, "pops-is-visited");
				});
		},
		/**
		 * 设置左侧容器已访问记录
		 * @param element
		 */
		setAsideItemIsVisited(element: HTMLElement) {
			popsDOMUtils.addClassName(element, "pops-is-visited");
		},
		/**
		 * 为元素添加自定义属性
		 * @param element
		 * @param attributes
		 */
		setElementAttributes(element: HTMLElement, attributes?: any) {
			if (attributes == null) {
				return;
			}
			if (Array.isArray(attributes)) {
				attributes.forEach((attrObject) => {
					this.setElementAttributes(element, attrObject);
				});
			} else {
				Object.keys(attributes).forEach((attributeName) => {
					element.setAttribute(attributeName, attributes[attributeName]);
				});
			}
		},
		/**
		 * 为元素设置(自定义)属性
		 * @param element
		 * @param props
		 */
		setElementProps(element: HTMLElement, props?: any) {
			if (props == null) {
				return;
			}
			Object.keys(props).forEach((propName) => {
				Reflect.set(element, propName, props[propName]);
			});
		},
		/**
		 * 为元素设置classname
		 * @param element
		 * @param className
		 */
		setElementClassName(
			element: HTMLElement,
			className?: string | string[] | (() => string | string[])
		) {
			if (className == null) {
				return;
			}
			if (typeof className === "function") {
				className = className();
			}
			if (typeof className === "string") {
				let splitClassName = className.split(" ");
				splitClassName.forEach((classNameStr) => {
					element.classList.add(classNameStr);
				});
			} else if (Array.isArray(className)) {
				className.forEach((classNameStr) => {
					this.setElementClassName(element, classNameStr);
				});
			}
		},
		/**
		 * 创建左侧容器元素<li>
		 * @param  asideConfig
		 */
		createAsideItem(asideConfig: PopsPanelContentConfig) {
			let liElement = document.createElement("li");
			liElement.id = asideConfig.id;
			(liElement as any)["__forms__"] = asideConfig.forms;
			liElement.innerHTML = asideConfig.title;
			/* 处理className */
			this.setElementClassName(liElement, asideConfig.className);
			this.setElementAttributes(liElement, asideConfig.attributes);
			this.setElementProps(liElement, asideConfig.props);
			return liElement;
		},
		/**
		 * 创建中间容器的元素<li>
		 * type ==> switch
		 * @param formConfig
		 */
		createSectionContainerItem_switch(formConfig: PopsPanelSwitchDetails) {
			let liElement = document.createElement("li");
			(liElement as any)["__formConfig__"] = formConfig;
			this.setElementClassName(liElement, formConfig.className);
			this.setElementAttributes(liElement, formConfig.attributes);
			this.setElementProps(liElement, formConfig.props);
			/* 左边底部的描述的文字 */
			let leftDescriptionText = "";
			if (Boolean(formConfig.description)) {
				leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
			}
			liElement.innerHTML = /*html*/ `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-panel-switch">
				<input class="pops-panel-switch__input" type="checkbox">
				<span class="pops-panel-switch__core">
					<div class="pops-panel-switch__action">
					</div>
				</span>
			</div>`;
			const PopsPanelSwitch = {
				[Symbol.toStringTag]: "PopsPanelSwitch",
				$data: {
					value: Boolean(formConfig.getValue()),
				},
				$ele: {
					switch:
						liElement.querySelector<HTMLDivElement>(".pops-panel-switch")!,
					input: liElement.querySelector<HTMLInputElement>(
						".pops-panel-switch__input"
					)!,
					core: liElement.querySelector<HTMLSpanElement>(
						".pops-panel-switch__core"
					)!,
				},
				init() {
					this.setStatus(this.$data.value);
					if (formConfig.disabled) {
						this.disable();
					}
					this.setClickEvent();
				},
				setClickEvent() {
					let that = this;
					popsDOMUtils.on(this.$ele.core, "click", void 0, function (event) {
						if (
							that.$ele.input.disabled ||
							that.$ele.switch.hasAttribute("data-disabled")
						) {
							return;
						}
						that.$data.value = that.getStatus();
						that.setStatus(that.$data.value);
						if (typeof formConfig.callback === "function") {
							formConfig.callback(event, that.$data.value);
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
						popsDOMUtils.addClassName(
							this.$ele.switch,
							"pops-panel-switch-is-checked"
						);
					} else {
						popsDOMUtils.removeClassName(
							this.$ele.switch,
							"pops-panel-switch-is-checked"
						);
					}
				},
				/**
				 * 根据className来获取逆反值
				 */
				getStatus() {
					let checkedValue = false;
					if (
						!popsDOMUtils.containsClassName(
							this.$ele.switch,
							"pops-panel-switch-is-checked"
						)
					) {
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
				},
				/**
				 * 启用复选框
				 */
				notDisable() {
					this.$ele.input.disabled = false;
					this.$ele.switch.removeAttribute("data-disabled");
				},
			};

			PopsPanelSwitch.init();
			(liElement as any)["data-switch"] = PopsPanelSwitch;
			return liElement;
		},
		/**
		 * 获取中间容器的元素<li>
		 * type ==> slider
		 * @param formConfig
		 */
		createSectionContainerItem_slider(formConfig: PopsPanelSliderDetails) {
			let liElement = document.createElement("li");
			(liElement as any)["__formConfig__"] = formConfig;
			this.setElementClassName(liElement, formConfig.className);
			this.setElementAttributes(liElement, formConfig.attributes);
			this.setElementProps(liElement, formConfig.props);
			/* 左边底部的描述的文字 */
			let leftDescriptionText = "";
			if (Boolean(formConfig.description)) {
				leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
			}
			liElement.innerHTML = `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-panel-slider">
				<input type="range" min="${formConfig.min}" max="${formConfig.max}">
			</div>`;

			let rangeInputElement = liElement.querySelector<HTMLInputElement>(
				".pops-panel-slider input[type=range]"
			)!;
			if (formConfig.step) {
				rangeInputElement.setAttribute("step", formConfig.step.toString());
			}
			rangeInputElement.value = formConfig.getValue().toString();
			/**
			 * 获取提示的内容
			 * @param value
			 */
			let getToolTipContent = function (value: number | string) {
				if (typeof formConfig.getToolTipContent === "function") {
					return formConfig.getToolTipContent(value as number);
				} else {
					return value as string;
				}
			};
			let tooltip = pops.tooltip({
				target: rangeInputElement.parentElement!,
				content: getToolTipContent(rangeInputElement.value),
				zIndex: 1000000,
				className: "github-tooltip",
				showBeforeCallBack() {
					tooltip.toolTipNode.querySelector("div")!.innerText =
						getToolTipContent(rangeInputElement.value);
				},
				alwaysShow: false,
				only: false,
				position: "top",
				arrowDistance: 10,
			});
			popsDOMUtils.on(
				rangeInputElement,
				["input", "propertychange"],
				void 0,
				function (event) {
					tooltip.toolTipNode.querySelector("div")!.innerText =
						getToolTipContent(rangeInputElement.value);
					if (typeof formConfig.callback === "function") {
						formConfig.callback(
							event as InputEvent,
							(event as any).target.value
						);
					}
				}
			);
			return liElement;
		},
		/**
		 * 获取中间容器的元素<li>
		 * type ==> slider
		 * @param formConfig
		 */
		createSectionContainerItem_slider_new(formConfig: PopsPanelSliderDetails) {
			let liElement = document.createElement("li");
			(liElement as any)["__formConfig__"] = formConfig;
			this.setElementClassName(liElement, formConfig.className);
			this.setElementAttributes(liElement, formConfig.attributes);
			this.setElementProps(liElement, formConfig.props);
			/* 左边底部的描述的文字 */
			let leftDescriptionText = "";
			if (Boolean(formConfig.description)) {
				leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
			}
			liElement.innerHTML = /*html*/ `
			<div class="pops-panel-item-left-text" style="flex: 1;">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-slider pops-slider-width">
				<div class="pops-slider__runway">
					<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
					<div class="pops-slider__button-wrapper" style="left: 0%">
						<div class="pops-slider__button"></div>
					</div>
				</div>
			</div>`;
			const PopsPanelSlider = {
				[Symbol.toStringTag]: "PopsPanelSlider",
				/**
				 * 值
				 */
				value: formConfig.getValue(),
				/**
				 * 最小值
				 */
				min: formConfig.min,
				/**
				 * 最大值
				 */
				max: formConfig.max,
				/**
				 * 间隔
				 */
				step: formConfig.step || 1,
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
				},
				$ele: {
					slider: liElement.querySelector<HTMLDivElement>(".pops-slider")!,
					runAway: liElement.querySelector<HTMLDivElement>(
						".pops-slider__runway"
					)!,
					bar: liElement.querySelector<HTMLDivElement>(".pops-slider__bar")!,
					buttonWrapper: liElement.querySelector<HTMLDivElement>(
						".pops-slider__button-wrapper"
					)!,
					button: liElement.querySelector<HTMLDivElement>(
						".pops-slider__button"
					)!,
					tooltip: null as any as {
						$shadowContainer: HTMLDivElement;
						$shadowRoot: ShadowRoot;
						guid: string;
						config: Required<PopsToolTipDetails>;
						toolTipNode: HTMLDivElement;
						show: () => void;
						close: () => void;
						off: () => void;
						on: () => void;
					},
				},
				$interval: {
					isCheck: false,
				},
				$tooltip: null as any,
				init() {
					this.initEleData();
					this.setToolTipEvent();
					this.setPanEvent();
					this.setRunAwayClickEvent();
					this.intervalInit();
					if (formConfig.disabled) {
						this.disableDrag();
					}
				},
				/**
				 * 10s内循环获取slider的宽度等信息
				 * 获取到了就可以初始化left的值
				 * @param {number} [checkStepTime=200] 每次检测的间隔时间
				 * @param {number} [maxTime=10000] 最大的检测时间
				 */
				intervalInit(checkStepTime = 200, maxTime = 10000) {
					if (this.$interval.isCheck) {
						return;
					}
					this.$interval.isCheck = true;
					let isSuccess = false;
					let oldTotalWidth = this.$data.totalWidth;
					let timer: number | undefined = void 0;
					let interval = setInterval(() => {
						if (isSuccess) {
							this.$interval.isCheck = false;
							clearTimeout(timer);
							clearInterval(interval);
						} else {
							this.initTotalWidth();
							if (this.$data.totalWidth !== 0) {
								isSuccess = true;
								if (this.$data.totalWidth !== oldTotalWidth) {
									/* slider的总宽度改变了 */
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
					/* 最长检测时间是10s */
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
					(this.$ele.slider as any)["data-min"] = this.min;
					(this.$ele.slider as any)["data-max"] = this.max;
					(this.$ele.slider as any)["data-value"] = this.value;
					(this.$ele.slider as any)["data-step"] = this.step;
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
					let blockNums = (this.max - this.min) / this.step;
					// 计算出每一份占据的px
					this.$data.stepPx = this.$data.totalWidth / blockNums;
					let widthPx = 0;
					for (
						let stepValue = this.min;
						stepValue <= this.max;
						stepValue += this.step
					) {
						let value = this.formatValue(stepValue);
						let info = {};
						if (value === this.min) {
							/* 起始 */
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
						this.$data.stepBlockMap.set(index, info as any);
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
					let blockNums = (this.max - this.min) / this.step;
					// 计算出每一份占据的px
					this.$data.stepPx = this.$data.totalWidth / blockNums;
					let widthPx = 0;
					for (
						let stepValue = this.min;
						stepValue <= this.max;
						stepValue = PopsMathFloatUtils.add(stepValue, this.step)
					) {
						let value = this.formatValue(stepValue);
						let info = {};
						if (value === this.min) {
							/* 起始 */
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
						this.$data.stepBlockMap.set(index, info as any);
						index++;
						widthPx += this.$data.stepPx;
					}
				},
				/**
				 * 初始化slider的默认起始left的百分比值
				 */
				initSliderPosition() {
					/* 设置起始默认style的left值 */
					let percent = 0;
					for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
						/* 判断值是否和区域内的值相等 */
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
				 * @returns
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
					if (typeof formConfig.callback === "function") {
						formConfig.callback(event, value);
					}
				},
				/**
				 * 根据拖拽距离获取滑块应该在的区间和值
				 */
				getDragInfo(dragX: number) {
					let result = this.$data.stepBlockMap.get(0);
					for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
						if (
							stepBlockInfo.pxLeft <= dragX &&
							dragX < stepBlockInfo.pxRight
						) {
							result = stepBlockInfo;
							break;
						}
					}
					return result;
				},
				/**
				 * 获取滑块的当前脱拖拽占据的百分比
				 * @param {number} dragWidth
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
					/* 滑块按钮的偏移 */
					this.$ele.buttonWrapper.style.left = `${percent * 100}%`;
					/* 滑块进度的宽度 */
					this.$ele.bar.style.width = `${percent * 100}%`;
				},
				/**
				 * 禁止拖拽
				 */
				disableDrag() {
					this.$ele.runAway.classList.add("pops-slider-is-disabled");
				},
				/**
				 * 允许拖拽
				 */
				allowDrag() {
					this.$ele.runAway.classList.remove("pops-slider-is-disabled");
				},
				/**
				 * 判断当前滑块是否被禁用
				 */
				isDisabledDrag() {
					return this.$ele.runAway.classList.contains(
						"pops-slider-is-disabled"
					);
				},
				/**
				 * 设置进度条点击定位的事件
				 */
				setRunAwayClickEvent() {
					popsDOMUtils.on(
						this.$ele.runAway,
						"click",
						void 0,
						(event) => {
							if (
								event.target !== this.$ele.runAway &&
								event.target !== this.$ele.bar
							) {
								return;
							}
							let clickX = parseFloat((event as any).offsetX);
							this.dragStartCallBack();
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
					if (!this.$data.isMove) {
						if (this.isDisabledDrag()) {
							return false;
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
				dragMoveCallBack(
					event: MouseEvent | TouchEvent,
					dragX: number,
					oldValue: number
				) {
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
					/* 监听拖拽 */
					this.$tooltip.on("at:move", (event: any) => {
						if (!this.dragStartCallBack()) {
							return;
						}
						let oldValue = this.value;
						const runAwayRect = this.$ele.runAway.getBoundingClientRect();
						let displacementX =
							event.x - (runAwayRect.left + globalThis.screenX);
						if (displacementX <= 0) {
							displacementX = 0;
						} else if (displacementX >= runAwayRect.width) {
							displacementX = runAwayRect.width;
						}
						currentDragX = displacementX;
						/* 拖拽移动 */
						this.dragMoveCallBack(event, currentDragX, oldValue);
					});
					/* 监听触点离开，处理某些情况下，拖拽松开，但是未触发pan事件，可以通过设置这个来关闭tooltip */
					this.$tooltip.on("at:end", (event: any) => {
						this.dragEndCallBack(currentDragX);
					});
				},
				/**
				 * 显示悬浮的
				 */
				showToolTip() {
					this.$ele.tooltip.show();
				},
				/**
				 * 关闭悬浮的
				 */
				closeToolTip() {
					this.$ele.tooltip.close();
				},
				/**
				 * 检测在1000ms内，是否停止了拖拽
				 */
				checkStopDragMove() {
					if (this.$data.isCheckingStopDragMove) {
						return;
					}
					this.$data.isCheckingStopDragMove = true;
					let interval = setInterval(() => {
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
						if (typeof formConfig.getToolTipContent === "function") {
							return formConfig.getToolTipContent(PopsPanelSlider.value);
						} else {
							return PopsPanelSlider.value as any as string;
						}
					}
					let tooltipContent = null as any as HTMLElement;

					this.$ele.tooltip = pops.tooltip({
						target: this.$ele.button,
						content: getToolTipContent,
						zIndex: 1000000,
						className: "github-tooltip",
						only: false,
						eventOption: {
							capture: true,
							passive: true,
						},
						showBeforeCallBack: () => {
							this.intervalInit();
						},
						showAfterCallBack: (toolTipNode) => {
							tooltipContent.innerText = getToolTipContent();
						},
						closeBeforeCallBack: () => {
							if (this.$data.isMove) {
								this.checkStopDragMove();
								return false;
							} else {
							}
						},
						alwaysShow: false,
						// only: false,
						position: "top",
						arrowDistance: 10,
					}) as any;
					tooltipContent =
						this.$ele.tooltip.toolTipNode.querySelector<HTMLDivElement>("div")!;
				},
			};
			PopsPanelSlider.init();
			(liElement as any)["data-slider"] = PopsPanelSlider;
			return liElement;
		},
		/**
		 * 获取中间容器的元素<li>
		 * type ==> input
		 * @param formConfig
		 */
		createSectionContainerItem_input(formConfig: PopsPanelInputDetails) {
			let liElement = document.createElement("li");
			(liElement as any)["__formConfig__"] = formConfig;
			this.setElementClassName(liElement, formConfig.className);
			this.setElementAttributes(liElement, formConfig.attributes);
			this.setElementProps(liElement, formConfig.props);
			let inputType = "text";
			if (formConfig.isPassword) {
				inputType = "password";
			} else if (formConfig.isNumber) {
				inputType = "number";
			}
			/* 左边底部的描述的文字 */
			let leftDescriptionText = "";
			if (Boolean(formConfig.description)) {
				leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
			}
			liElement.innerHTML = `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
			${leftDescriptionText}
			</div>
			<div class="pops-panel-input">
				<input type="${inputType}" placeholder="${formConfig.placeholder}">
			</div>
			`;
			const PopsPanelInput = {
				[Symbol.toStringTag]: "PopsPanelInput",
				$ele: {
					panelInput:
						liElement.querySelector<HTMLDivElement>(".pops-panel-input")!,
					input: liElement.querySelector<HTMLInputElement>("input")!,
					inputSpanIcon: document.createElement("span"),
					inputSpanIconInner: null as any as HTMLSpanElement,
					icon: null as any as HTMLElement,
				},
				$data: {
					value: formConfig.getValue(),
					isView: false,
				},
				init() {
					this.initEle();
					this.setInputValue(this.$data.value);
					/* 如果是密码框，放进图标 */
					if (formConfig.isPassword) {
						this.setCircleIcon(pops.config.iconSVG.view);
						this.setCircleIconClickEvent();
					} else {
						/* 先判断预设值是否为空，不为空添加清空图标按钮 */
						if (this.$ele.input.value != "") {
							this.setCircleIcon(pops.config.iconSVG.circleClose);
							this.setCircleIconClickEvent();
						}
					}

					this.setInputChangeEvent();
					if (formConfig.disabled) {
						this.disable();
					}
					if (typeof formConfig.handlerCallBack === "function") {
						formConfig.handlerCallBack(liElement, this.$ele.input);
					}
				},
				/**
				 * 初始化$ele的配置
				 */
				initEle() {
					this.$ele.input.parentElement!.insertBefore(
						this.$ele.inputSpanIcon,
						this.$ele.input.nextSibling
					);
					this.$ele.inputSpanIcon.className = "pops-panel-input__suffix";
					this.$ele.inputSpanIcon.innerHTML = `
					<span class="pops-panel-input__suffix-inner">
						<i class="pops-panel-icon"></i>
					</span>
					`;
					this.$ele.inputSpanIconInner =
						this.$ele.inputSpanIcon.querySelector<HTMLElement>(
							".pops-panel-input__suffix-inner"
						)!;
					this.$ele.icon =
						this.$ele.inputSpanIcon.querySelector<HTMLElement>(
							".pops-panel-icon"
						)!;
				},
				/**
				 * 禁用
				 */
				disable() {
					this.$ele.input.disabled = true;
					this.$ele.panelInput.classList.add("pops-input-disabled");
				},
				/**
				 * 取消禁用
				 */
				notDisable() {
					this.$ele.input.disabled = false;
					this.$ele.panelInput.classList.remove("pops-input-disabled");
				},
				/**
				 * 判断是否已被禁用
				 */
				isDisabled() {
					return this.$ele.input.disabled;
				},
				/**
				 * 设置输入框内容
				 * @param {string} [value=""] 值
				 */
				setInputValue(value = "") {
					this.$ele.input.value = value;
				},
				/**
				 * 设置input元素的type
				 * @param {string} [typeValue="text"] type值
				 */
				setInputType(typeValue = "text") {
					this.$ele.input.setAttribute("type", typeValue);
				},
				/**
				 * 删除图标按钮
				 */
				removeCircleIcon() {
					this.$ele.icon.innerHTML = "";
				},
				/**
				 * 添加清空图标按钮
				 * @param {string} [svgHTML=pops.config.iconSVG.circleClose] svg图标，默认为清空的图标
				 */
				setCircleIcon(svgHTML = pops.config.iconSVG.circleClose) {
					this.$ele.icon.innerHTML = svgHTML;
				},
				/**
				 * 添加图标按钮的点击事件
				 */
				setCircleIconClickEvent() {
					popsDOMUtils.on(this.$ele.icon, "click", void 0, () => {
						if (this.isDisabled()) {
							return;
						}
						/* 删除图标 */
						this.removeCircleIcon();
						if (formConfig.isPassword) {
							/* 密码输入框 */
							if (this.$data.isView) {
								/* 当前可见 => 点击改变为隐藏 */
								this.$data.isView = false;
								/* 显示输入框内容，且更换图标为隐藏图标 */
								this.setInputType("text");
								this.setCircleIcon(pops.config.iconSVG.hide);
							} else {
								/* 当前不可见 => 点击改变为显示 */
								this.$data.isView = true;
								/* 隐藏输入框内容，且更换图标为显示图标 */
								this.setInputType("password");
								this.setCircleIcon(pops.config.iconSVG.view);
							}
						} else {
							/* 普通输入框 */
							/* 清空内容 */
							this.setInputValue("");
							/* 获取焦点 */
							this.$ele.input.focus();
							/* 触发内容改变事件 */
							this.$ele.input.dispatchEvent(new Event("input"));
						}
					});
				},
				/**
				 * 监听输入框内容改变
				 */
				setInputChangeEvent() {
					popsDOMUtils.on(
						this.$ele.input,
						["input", "propertychange"],
						void 0,
						(event) => {
							this.$data.value = this.$ele.input.value;
							if (!formConfig.isPassword) {
								/* 不是密码框 */
								if (
									this.$ele.input.value !== "" &&
									this.$ele.icon.innerHTML === ""
								) {
									/* 不为空，显示清空图标 */
									this.setCircleIcon(pops.config.iconSVG.circleClose);
									this.setCircleIconClickEvent();
								} else if (this.$ele.input.value === "") {
									this.removeCircleIcon();
								}
							}
							if (typeof formConfig.callback === "function") {
								if (formConfig.isNumber) {
									formConfig.callback(
										event as any,
										this.$ele.input.value,
										this.$ele.input.valueAsNumber
									);
								} else {
									formConfig.callback(event as any, this.$ele.input.value);
								}
							}
						}
					);
				},
			};
			PopsPanelInput.init();
			(liElement as any)["data-input"] = PopsPanelInput;
			return liElement;
		},
		/**
		 * 获取中间容器的元素<li>
		 * type ==> textarea
		 * @param formConfig
		 */
		createSectionContainerItem_textarea(formConfig: PopsPanelTextAreaDetails) {
			let liElement = document.createElement("li");
			(liElement as any)["__formConfig__"] = formConfig;
			this.setElementClassName(liElement, formConfig.className);
			this.setElementAttributes(liElement, formConfig.attributes);
			this.setElementProps(liElement, formConfig.props);

			/* 左边底部的描述的文字 */
			let leftDescriptionText = "";
			if (Boolean(formConfig.description)) {
				leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
			}
			liElement.innerHTML = `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
			${leftDescriptionText}
			</div>
			<div class="pops-panel-textarea">
				<textarea placeholder="${formConfig.placeholder ?? ""}">
			</textarea>
			</div>
			`;

			const PopsPanelTextArea = {
				[Symbol.toStringTag]: "PopsPanelTextArea",
				$ele: {
					panelTextarea: liElement.querySelector<HTMLDivElement>(
						".pops-panel-textarea"
					)!,
					textarea: liElement.querySelector<HTMLTextAreaElement>(
						".pops-panel-textarea textarea"
					)!,
				},
				$data: {
					value: formConfig.getValue(),
				},
				init() {
					this.setValue(this.$data.value);
					this.setChangeEvent();
					if (formConfig.disabled) {
						this.disable();
					}
				},
				disable() {
					this.$ele.textarea.setAttribute("disabled", "true");
					this.$ele.panelTextarea.classList.add("pops-panel-textarea-disable");
				},
				notDisable() {
					this.$ele.textarea.removeAttribute("disabled");
					this.$ele.panelTextarea.classList.remove(
						"pops-panel-textarea-disable"
					);
				},
				isDisabled() {
					return (
						this.$ele.textarea.hasAttribute("disabled") ||
						this.$ele.panelTextarea.classList.contains(
							"pops-panel-textarea-disable"
						)
					);
				},
				setValue(value: string) {
					this.$ele.textarea.value = value;
				},
				/**
				 * 监听选择内容改变
				 */
				setChangeEvent() {
					popsDOMUtils.on(
						this.$ele.textarea,
						["input", "propertychange"],
						void 0,
						(event) => {
							this.$data.value = (event as any).target.value;
							if (typeof formConfig.callback === "function") {
								formConfig.callback(event as any, (event as any).target.value);
							}
						}
					);
				},
			};

			PopsPanelTextArea.init();
			(liElement as any)["data-textarea"] = PopsPanelTextArea;

			return liElement;
		},
		/**
		 * 获取中间容器的元素<li>
		 * type ==> select
		 * @param formConfig
		 */
		createSectionContainerItem_select(formConfig: PopsPanelSelectDetails<any>) {
			let liElement = document.createElement("li");
			(liElement as any)["__formConfig__"] = formConfig;
			this.setElementClassName(liElement, formConfig.className);
			this.setElementAttributes(liElement, formConfig.attributes);
			this.setElementProps(liElement, formConfig.props);
			/* 左边底部的描述的文字 */
			let leftDescriptionText = "";
			if (Boolean(formConfig.description)) {
				leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
			}
			liElement.innerHTML = /*html*/ `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
			${leftDescriptionText}
			</div>
			<div class="pops-panel-select">
				<select></select>
			</div>
			`;

			const PopsPanelSelect = {
				[Symbol.toStringTag]: "PopsPanelSelect",
				$ele: {
					panelSelect:
						liElement.querySelector<HTMLDivElement>(".pops-panel-select")!,
					select: liElement.querySelector<HTMLSelectElement>(
						".pops-panel-select select"
					)!,
				},
				$eleKey: {
					disable: "__disable__",
					value: "__value__",
				},
				$data: {
					defaultValue: formConfig.getValue(),
				},
				init() {
					this.initOption();
					this.setChangeEvent();
					this.setClickEvent();
					if (formConfig.disabled) {
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
				disable() {
					this.$ele.select.setAttribute("disabled", "true");
					this.$ele.panelSelect.classList.add("pops-panel-select-disable");
				},
				notDisable() {
					this.$ele.select.removeAttribute("disabled");
					this.$ele.panelSelect.classList.remove("pops-panel-select-disable");
				},
				isDisabled() {
					return (
						this.$ele.select.hasAttribute("disabled") ||
						this.$ele.panelSelect.classList.contains(
							"pops-panel-select-disable"
						)
					);
				},
				initOption() {
					formConfig.data.forEach((dataItem) => {
						// 初始化默认选中
						let optionElement = document.createElement("option");
						this.setNodeValue(
							optionElement,
							this.$eleKey.value,
							dataItem.value
						);
						this.setNodeValue(
							optionElement,
							this.$eleKey.disable,
							dataItem.disable
						);
						if (dataItem.value === this.$data.defaultValue) {
							optionElement.setAttribute("selected", "true");
						}
						optionElement.innerText = dataItem.text;
						this.$ele.select.appendChild(optionElement);
					});
				},
				/** 检测所有option并设置禁用状态 */
				setSelectOptionsDisableStatus() {
					if (this.$ele.select.options && this.$ele.select.options.length) {
						Array.from(this.$ele.select.options).forEach((optionItem) => {
							this.setOptionDisableStatus(optionItem);
						});
					}
				},
				/** 设置禁用状态 */
				setOptionDisableStatus(optionElement: HTMLOptionElement) {
					let disable = false;
					let optionDisableAttr = this.getNodeValue(
						optionElement,
						this.$eleKey.disable
					);
					if (optionDisableAttr === "function") {
						let value = this.getNodeValue(optionElement, this.$eleKey.value);
						disable = Boolean(optionDisableAttr(value));
					}
					if (disable) {
						optionElement.setAttribute("disabled", "true");
					} else {
						optionElement.removeAttribute("disabled");
					}
				},
				/** 获取option上的信息 */
				getSelectOptionInfo($option: HTMLOptionElement) {
					let optionValue = this.getNodeValue($option, this.$eleKey.value);
					let optionText = $option.innerText || $option.textContent!;
					return {
						value: optionValue,
						text: optionText,
						$option: $option,
					};
				},
				/**
				 * 监听选择内容改变
				 */
				setChangeEvent() {
					popsDOMUtils.on(this.$ele.select, "change", void 0, (event) => {
						this.setSelectOptionsDisableStatus();
						if (typeof formConfig.callback === "function") {
							let $isSelectedElement = (event as any).target[
								(event as any).target.selectedIndex
							] as HTMLOptionElement;
							let selectInfo = this.getSelectOptionInfo($isSelectedElement);
							formConfig.callback(
								event as any,
								selectInfo.value,
								selectInfo.text
							);
						}
					});
				},
				/**
				 * 监听点击事件
				 */
				setClickEvent() {
					popsDOMUtils.on(this.$ele.select, "click", void 0, (event) => {
						this.setSelectOptionsDisableStatus();
						if (typeof formConfig.clickCallBack === "function") {
							formConfig.clickCallBack(event, this.$ele.select);
						}
					});
				},
			};

			PopsPanelSelect.init();
			Reflect.set(liElement, "data-select", PopsPanelSelect);
			return liElement;
		},
		/**
		 * 获取中间容器的元素<li>
		 * type ==> select-multiple
		 * @param formConfig
		 */
		createSectionContainerItem_select_multiple_new(
			formConfig: PopsPanelSelectMultipleDetails<any>
		) {
			let liElement = document.createElement("li");
			Reflect.set(liElement, "__formConfig__", formConfig);
			this.setElementClassName(liElement, formConfig.className);
			this.setElementAttributes(liElement, formConfig.attributes);
			this.setElementProps(liElement, formConfig.props);
			/* 左边底部的描述的文字 */
			let leftDescriptionText = "";
			if (Boolean(formConfig.description)) {
				leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
			}
			liElement.innerHTML = /*html*/ `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
			${leftDescriptionText}
			</div>
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
			`;

			const PopsPanelSelectMultiple = {
				[Symbol.toStringTag]: "PopsPanelSelectMultiple",
				$el: {
					/** 容器 */
					$container: void 0 as any as HTMLElement,
					/** 包括的容器 */
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
				},
				$data: {
					/** 默认值 */
					defaultValue: formConfig.getValue(),
					selectInfo: [] as any as PopsPanelSelectMultipleDataOption<any>[],
				},
				/** 初始化 */
				init() {
					this.initDefault();
					this.inintEl();
					this.initPlaceHolder();
					this.updateTagElement();
					this.setSelectContainerClickEvent();
				},
				/** 初始化默认值 */
				initDefault() {
					formConfig.data.forEach((dataItem) => {
						if (this.$data.defaultValue.includes(dataItem.value)) {
							// 初始化选中的配置
							this.$data.selectInfo.push({
								text: dataItem.text,
								value: dataItem.value,
								isHTML: Boolean(dataItem.isHTML),
								disable: dataItem.disable,
							});
						}
					});
				},
				/** 初始化$el变量 */
				inintEl() {
					this.$el.$container = liElement.querySelector<HTMLElement>(
						".pops-panel-select-multiple"
					)!;
					this.$el.$wrapper = liElement.querySelector<HTMLElement>(
						".el-select__wrapper"
					)!;
					this.$el.$section = liElement.querySelector<HTMLElement>(
						".el-select__selection"
					)!;
					this.$el.$selectedInputWrapper = liElement.querySelector<HTMLElement>(
						".el-select__selected-item.el-select__input-wrapper"
					)!;
					this.$el.$selectedPlaceHolderWrapper =
						liElement.querySelector<HTMLElement>(
							".el-select__selected-item.el-select__placeholder"
						)!;
					this.$el.$suffix =
						liElement.querySelector<HTMLElement>(".el-select__suffix")!;
					this.$el.$suffixIcon = liElement.querySelector<HTMLElement>(
						".el-select__suffix .el-icon"
					)!;

					// 先把手动输入框隐藏
					this.hideInputWrapper();
				},
				/** 初始化提示文字 */
				initPlaceHolder() {
					let placeholder = "";
					if (typeof formConfig.placeholder === "string") {
						placeholder = formConfig.placeholder;
					} else if (typeof formConfig.placeholder === "function") {
						let placeholderResult = formConfig.placeholder();
						if (typeof placeholderResult === "string") {
							placeholder = placeholderResult;
						}
					}
					let $placeholder = popsDOMUtils.createElement("span", {
						innerText: placeholder,
					});
					this.$el.$selectedPlaceHolderWrapper.appendChild($placeholder);
				},
				/** 初始化tag */
				updateTagElement() {
					// 遍历数据，寻找对应的值
					formConfig.data.forEach((dataItem) => {
						let findValue = this.$data.selectInfo.find(
							(item) => item.value === dataItem.value
						);
						if (findValue) {
							// 选中的值和获取的所有的值相同
							let selectedInfo = this.createSelectedItem({
								text: dataItem.text,
								isHTML: dataItem.isHTML,
							});
							this.addSelectedItem(selectedInfo.$tag);
							this.setSelectedItemCloseIconClickEvent({
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
				createSelectedItem(data: {
					/** tag的文本 */
					text: string;
					isHTML?: boolean;
				}) {
					const $selectedItem = popsDOMUtils.createElement("div", {
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
					const $tagText = $selectedItem.querySelector<HTMLSpanElement>(
						".el-select__tags-text"
					)!;
					/** 关闭图标 */
					const $closeIcon = $selectedItem.querySelector<HTMLElement>(
						".el-icon.el-tag__close"
					)!;
					if (data.isHTML) {
						$tagText.innerHTML = data.text;
					} else {
						$tagText.innerText = data.text;
					}

					return {
						$tag: $selectedItem,
						$tagText: $tagText,
						$closeIcon: $closeIcon,
					};
				},
				/**
				 * 添加选中项元素
				 */
				addSelectedItem($ele: HTMLElement) {
					// 往前添加
					// 去除前面的空白
					this.setSectionIsNear();
					if (this.$el.$section.contains(this.$el.$selectedInputWrapper)) {
						let $prev = this.$el.$selectedInputWrapper.previousElementSibling;
						if ($prev) {
							// 存在前一个元素，添加到前面的元素的后面
							popsDOMUtils.after($prev, $ele);
						} else {
							// 不存在前一个元素，添加到最前面
							popsDOMUtils.before(this.$el.$selectedInputWrapper, $ele);
						}
					} else if (
						this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)
					) {
						let $prev =
							this.$el.$selectedPlaceHolderWrapper.previousElementSibling;
						if ($prev) {
							// 存在前一个元素，添加到前面的元素的后面
							popsDOMUtils.after($prev, $ele);
						} else {
							// 不存在前一个元素，添加到最前面
							popsDOMUtils.before(this.$el.$selectedPlaceHolderWrapper, $ele);
						}
					} else {
						this.$el.$section.appendChild($ele);
					}
					// 隐藏元素
					this.hideInputWrapper();
					this.hidePlaceHolderWrapper();
				},
				/** 更新tag信息 */
				updateSelectTagItem() {
					this.$el.$section
						.querySelectorAll<HTMLElement>(".el-select__choose_tag")
						.forEach(($ele) => {
							$ele.remove();
						});
					this.updateTagElement();
				},
				/**
				 * 选中的值改变的回调
				 * @param currentSelectInfo 当前的选中信息
				 */
				selectValueChangeCallBack(
					currentSelectInfo?: PopsPanelSelectMultipleDataOption<any>[]
				) {
					if (typeof formConfig.callback === "function") {
						formConfig.callback(currentSelectInfo || this.$data.selectInfo);
					}
				},
				/** 设置下拉列表的点击事件 */
				setSelectContainerClickEvent() {
					const that = this;
					popsDOMUtils.on(this.$el.$container, "click", (event) => {
						/** 弹窗的选中的值 */
						let selectedInfo: PopsPanelSelectMultipleDataOption<any>[] = [];
						selectedInfo = selectedInfo.concat(that.$data.selectInfo);
						/**
						 * 设置项选中
						 * @param $ele
						 */
						function setItemSelected($ele: HTMLElement) {
							$ele.classList.add("select-item-is-selected");
						}
						/**
						 * 设置项取消选中
						 * @param $ele
						 */
						function removeItemSelected($ele: HTMLElement) {
							$ele.classList.remove("select-item-is-selected");
						}
						/**
						 * 添加选中信息
						 */
						function addSelectedInfo($ele: HTMLElement) {
							let info = getSelectedInfo($ele);
							let findValue = selectedInfo.find(
								(item) => item.value === info.value
							);
							if (!findValue) {
								selectedInfo.push({
									value: info.value,
									text: info.text,
									isHTML: Boolean(info.isHTML),
									disable: info.disable,
								});
							}
							that.selectValueChangeCallBack(selectedInfo);
						}
						/**
						 * 移除选中信息
						 */
						function removeSelectedInfo($ele: HTMLElement) {
							let info = getSelectedInfo($ele);
							let findIndex = selectedInfo.findIndex(
								(item) => item.value === info.value
							);
							if (findIndex !== -1) {
								selectedInfo.splice(findIndex, 1);
							}
							that.selectValueChangeCallBack(selectedInfo);
						}
						/**
						 * 判断该项是否选中
						 * @param $ele
						 */
						function isSelected($ele: HTMLElement): boolean {
							return $ele.classList.contains("select-item-is-selected");
						}
						/**
						 * 获取选中的项的信息
						 */
						function getSelectedInfo($ele: HTMLElement) {
							return Reflect.get($ele, "data-info") as {
								value: any;
								text: string;
								isHTML?: boolean;
								disable?(value: any): boolean;
							};
						}
						/**
						 * 获取所有选中的项的信息
						 */
						function getAllSelectedInfo() {
							return Array.from(
								$selectContainer.querySelectorAll<HTMLElement>(".select-item")
							)
								.map(($ele) => {
									if (isSelected($ele)) {
										return getSelectedInfo($ele);
									}
								})
								.filter((item) => {
									return item != null;
								});
						}
						/**
						 * 创建一个选择项元素
						 */
						function createSelectItemElement(dataInfo: { text: string }) {
							let $item = popsDOMUtils.createElement("li", {
								className: "select-item",
								innerHTML: /*html*/ `
									<span>${dataInfo.text}</span>
								`,
							});
							Reflect.set($item, "data-info", dataInfo);
							return $item;
						}
						/**
						 * 设置选择项的点击事件
						 */
						function setSelectElementClickEvent($ele: HTMLElement) {
							popsDOMUtils.on<PointerEvent | MouseEvent>(
								$ele,
								"click",
								(event) => {
									popsDOMUtils.preventEvent(event);
									if (typeof formConfig.clickCallBack === "function") {
										let clickResult = formConfig.clickCallBack(
											event,
											getAllSelectedInfo()
										);
										if (typeof clickResult === "boolean" && !clickResult) {
											return;
										}
									}
									// 修改选中状态
									if (isSelected($ele)) {
										removeItemSelected($ele);
										removeSelectedInfo($ele);
									} else {
										setItemSelected($ele);
										addSelectedInfo($ele);
									}
								}
							);
						}
						let { style, ...userConfirmDetails } =
							formConfig.selectConfirmDialogDetails || {};
						let confirmDetails = popsUtils.assign(
							{
								title: {
									text: "请勾选需要选择的选项",
									position: "center",
								},
								content: {
									text: /*html*/ `
									<ul class="select-container"></ul>
									`,
									html: true,
								},
								btn: {
									ok: {
										enable: false,
									},
									close: {
										enable: true,
										callback(details, event) {
											that.$data.selectInfo = [...selectedInfo];
											that.updateSelectTagItem();
											details.close();
										},
									},
								},
								mask: {
									enable: true,
									clickCallBack(originalRun, config) {
										originalRun();
										that.$data.selectInfo = [...selectedInfo];
										that.updateSelectTagItem();
									},
									clickEvent: {
										toClose: true,
									},
								},
								drag: true,
								dragLimit: true,
								width: "300px",
								height: "300px",
								style: /*css*/ `
								.select-container{
									--el-font-size-base: 14px;
									--el-text-color-regular: #606266;
									--el-color-primary: #409eff;
									--el-fill-color-light: #f5f7fa;
								}
								.select-item{
									cursor: pointer;
									cursor: pointer;
									font-size: var(--el-font-size-base);
									padding: 0 32px 0 20px;
									position: relative;
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									color: var(--el-text-color-regular);
									height: 34px;
									line-height: 34px;
									box-sizing: border-box;
								}
								.select-item:hover{
									background-color: var(--el-fill-color-light);
								}
								.select-item.select-item-is-selected{
									color: var(--el-color-primary);
									font-weight: 700;
								}
								.select-item.select-item-is-selected::after{
									content: "";
									position: absolute;
									top: 50%;
									right: 20px;
									border-top: none;
									border-right: none;
									background-repeat: no-repeat;
									background-position: center;
									background-color: var(--el-color-primary);
									mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
									mask-size: 100% 100%;
									-webkit-mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
									-webkit-mask-size: 100% 100%;
									transform: translateY(-50%);
									width: 12px;
									height: 12px;
								}
								${style || ""}
								`,
							} as PopsAlertDetails,
							userConfirmDetails
						);
						let $dialog = pops.alert(confirmDetails);
						let $selectContainer =
							$dialog.$shadowRoot.querySelector<HTMLUListElement>(
								".select-container"
							)!;
						// 配置选项元素
						formConfig.data.forEach((item) => {
							let $select = createSelectItemElement(item);
							// 添加到confirm中
							$selectContainer.appendChild($select);
							// 设置每一项的点击事件
							setSelectElementClickEvent($select);
							let findValue = selectedInfo.find(
								(value) => value.value === item.value
							);
							if (findValue) {
								setItemSelected($select);
							}
						});
					});
				},
				/** 设置关闭图标的点击事件 */
				setSelectedItemCloseIconClickEvent(data: {
					/** 关闭图标的元素 */
					$closeIcon: HTMLElement;
					/** tag元素 */
					$tag: HTMLElement;
					/** 值 */
					value: any;
					/** 显示的文字 */
					text: string;
				}) {
					popsDOMUtils.on<PointerEvent | MouseEvent>(
						data.$closeIcon,
						"click",
						(event) => {
							popsDOMUtils.preventEvent(event);
							if (typeof formConfig.closeIconClickCallBack === "function") {
								let result = formConfig.closeIconClickCallBack(event, {
									$tag: data.$tag,
									$closeIcon: data.$closeIcon,
									value: data.value,
									text: data.text,
								});
								if (typeof result === "boolean" && !result) {
									return;
								}
							}
							this.removeSelectedItem(data.$tag);
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
				 * 检测tag是否为空，为空显示placeholder
				 */
				checkTagEmpty() {
					if (
						!this.$el.$section.querySelectorAll(".el-select__choose_tag").length
					) {
						// 没有tag了
						// this.showInputWrapper();
						this.showPlaceHolderWrapper();
						this.removeSectionIsNear();
					}
				},
				/** 移除选中项元素 */
				removeSelectedItem($ele: HTMLElement) {
					$ele.remove();
					this.checkTagEmpty();
				},
				/** 移除选中的信息 */
				removeSelectedInfo(data: { value: any; text: string }) {
					for (let index = 0; index < this.$data.selectInfo.length; index++) {
						const selectInfo = this.$data.selectInfo[index];
						if (selectInfo.value === data.value) {
							this.$data.selectInfo.splice(index, 1);
							break;
						}
					}
					this.selectValueChangeCallBack();
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
			};

			PopsPanelSelectMultiple.init();
			Reflect.set(liElement, "data-select-multiple", PopsPanelSelectMultiple);
			return liElement;
		},
		/**
		 * 获取中间容器的元素<li>
		 * type ==> button
		 * @param formConfig
		 */
		createSectionContainerItem_button(formConfig: PopsPanelButtonDetails) {
			let liElement = document.createElement("li");
			(liElement as any)["__formConfig__"] = formConfig;
			this.setElementClassName(liElement, formConfig.className);
			this.setElementAttributes(liElement, formConfig.attributes);
			this.setElementProps(liElement, formConfig.props);

			/* 左边底部的描述的文字 */
			let leftDescriptionText = "";
			if (Boolean(formConfig.description)) {
				leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
			}
			liElement.innerHTML = /*html*/ `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-panel-button">
				<button class="pops-panel-button_inner">
					<i class="pops-bottom-icon"></i>
					<span class="pops-panel-button-text"></span>
				</button>
			</div>
			`;

			const PopsPanelButton = {
				[Symbol.toStringTag]: "PopsPanelButton",
				$ele: {
					panelButton:
						liElement.querySelector<HTMLDivElement>(".pops-panel-button")!,
					button: liElement.querySelector<HTMLDivElement>(
						".pops-panel-button .pops-panel-button_inner"
					)!,
					icon: liElement.querySelector<HTMLDivElement>(
						".pops-panel-button .pops-bottom-icon"
					)!,
					spanText: liElement.querySelector<HTMLDivElement>(
						".pops-panel-button .pops-panel-button-text"
					)!,
				},
				$data: {},
				init() {
					this.$ele.panelButton.appendChild(this.$ele.button);
					this.initButton();
					this.setClickEvent();
				},
				initButton() {
					if (
						typeof formConfig.buttonIcon === "string" &&
						formConfig.buttonIcon.trim() !== ""
					) {
						/* 存在icon图标且不为空 */
						if (formConfig.buttonIcon in pops.config.iconSVG) {
							this.setIconSVG(pops.config.iconSVG[formConfig.buttonIcon]);
						} else {
							this.setIconSVG(formConfig.buttonIcon);
						}
						this.showIcon();
					} else {
						this.hideIcon();
					}
					/* 按钮文字 */
					let buttonText = formConfig.buttonText;
					if (typeof formConfig.buttonText === "function") {
						buttonText = formConfig.buttonText();
					}
					this.setButtonType(formConfig.buttonType);
					if (formConfig.buttonIsRightIcon) {
						this.setIconRight();
					} else {
						this.setIconLeft();
					}
					if (formConfig.disable) {
						this.disable();
					}
					this.setButtonText(buttonText as string);
					this.setIconLoadingStatus(formConfig.buttonIconIsLoading);
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
					this.$ele.icon.innerHTML = svgHTML;
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
					this.$ele.button.setAttribute("type", typeValue);
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
					this.$ele.spanText.innerHTML = text;
				},
				setClickEvent() {
					popsDOMUtils.on(this.$ele.button, "click", void 0, (event) => {
						if (typeof formConfig.callback === "function") {
							formConfig.callback(event);
						}
					});
				},
			};
			PopsPanelButton.init();
			(liElement as any)["data-button"] = PopsPanelButton;
			return liElement;
		},
		/**
		 * 获取深层容器的元素<li>
		 * @param formConfig
		 */
		createSectionContainerItem_deepMenu(formConfig: PopsPanelDeepMenuDetails) {
			let that = this;
			let liElement = document.createElement("li");
			liElement.classList.add("pops-panel-deepMenu-nav-item");
			(liElement as any)["__formConfig__"] = formConfig;
			this.setElementClassName(liElement, formConfig.className);
			// 设置属性
			this.setElementAttributes(liElement, formConfig.attributes);
			// 设置元素上的属性
			this.setElementProps(liElement, formConfig.props);

			/* 左边底部的描述的文字 */
			let leftDescriptionText = "";
			if (Boolean(formConfig.description)) {
				// 设置描述
				leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
			}
			// 箭头图标
			let arrowRightIcon =
				typeof formConfig.arrowRightIcon === "boolean"
					? formConfig.arrowRightIcon
					: true;
			let arrowRightIconHTML = "";
			if (arrowRightIcon) {
				arrowRightIconHTML = `<i class="pops-panel-deepMenu-arrowRight-icon">${pops.config.iconSVG.arrowRight}</i>`;
			}
			let rightText = "";
			if (formConfig.rightText) {
				rightText = /*html*/ `<p class="pops-panel-item-right-text">${formConfig.rightText}</p>`;
			}
			liElement.innerHTML = /*html*/ `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-panel-deepMenu">
				${rightText}
				${arrowRightIconHTML}
			</div>
			`;
			const PopsPanelDeepMenu = {
				[Symbol.toStringTag]: "PopsPanelDeepMenu",
				$ele: {
					get parentSection() {
						return that.$el.$contentSectionContainer;
					},
				},
				init() {
					this.setLiClickEvent();
				},
				/**
				 * 生成配置每一项的元素
				 * @param $container
				 * @param formItemConfig
				 */
				initFormItem(
					$container: HTMLElement,
					formItemConfig: PopsPanelFormsTotalDetails | PopsPanelFormsDetails
				) {
					if (formItemConfig["type"] === "forms") {
						let childForms = formItemConfig["forms"];
						/* 每一项<li>元素 */
						let formContainerListElement = document.createElement("li");
						/* 每一项<li>内的子<ul>元素 */
						let formContainerULElement = document.createElement("ul");
						formContainerListElement.className =
							"pops-panel-forms-container-item";
						/* 区域头部的文字 */
						let formHeaderDivElement = popsDOMUtils.createElement("div", {
							className: "pops-panel-forms-container-item-header-text",
						});
						formHeaderDivElement.innerHTML = formItemConfig["text"];
						/* 加进容器内 */
						formContainerListElement.appendChild(formHeaderDivElement);

						that.setElementClassName(
							formContainerListElement,
							formItemConfig.className
						);
						that.setElementAttributes(
							formContainerListElement,
							formItemConfig.attributes
						);
						that.setElementProps(
							formContainerListElement,
							formItemConfig.props
						);
						childForms.forEach((childFormConfig) => {
							that.uListContainerAddItem(childFormConfig, {
								ulElement: formContainerULElement,
								sectionContainerULElement: that.sectionContainerULElement,
								formContainerListElement: formContainerListElement,
								formHeaderDivElement: formHeaderDivElement,
							});
						});
						formContainerListElement.appendChild(formContainerULElement);
						$container.appendChild(formContainerListElement);
					} else {
						/* 如果成功创建，加入到中间容器中 */
						that.uListContainerAddItem(formConfig, {
							ulElement: that.sectionContainerULElement,
						});
					}
				},
				/**
				 * 前往子菜单
				 * @param event 点击事件
				 * @param liElement 当前的<li>元素
				 */
				gotoDeepMenu(event: Event, liElement: HTMLLIElement) {
					/** 当前所在的容器 */
					let currentSection = liElement.closest(
						"section.pops-panel-container"
					) as HTMLElement | null;
					if (currentSection) {
						popsDOMUtils.cssHide(currentSection);
					}
					// 子菜单的容器
					let $deepMenuContainer = popsDOMUtils.createElement("section", {
						className: "pops-panel-container pops-panel-deepMenu-container",
					});
					let $deepMenuHeaderUL = popsDOMUtils.createElement("ul", {
						className: "pops-panel-deepMenu-container-header-ul",
					});
					let $deepMenuChildMenuUL = popsDOMUtils.createElement("ul");
					// 标题文字
					let headerTitleText = formConfig.headerTitle ?? formConfig.text;
					let $header = popsDOMUtils.createElement("div", {
						className: "pops-panel-deepMenu-container-header",
						innerHTML: `<p>${headerTitleText}</p>`,
					});
					let $headerLeftArrow = popsDOMUtils.createElement("i", {
						className: "pops-panel-deepMenu-container-left-arrow-icon",
						innerHTML: pops.config.iconSVG.arrowLeft,
					});
					popsDOMUtils.on(
						$headerLeftArrow,
						"click",
						void 0,
						(event) => {
							event?.preventDefault();
							event?.stopPropagation();
							// 返回上一层菜单
							let $prev = $deepMenuContainer.previousElementSibling;
							popsDOMUtils.cssShow($prev);
							$deepMenuContainer.remove();
						},
						{
							once: true,
						}
					);
					$header.firstElementChild?.insertAdjacentElement(
						"beforebegin",
						$headerLeftArrow
					);
					$deepMenuHeaderUL.appendChild($header);
					$deepMenuContainer.appendChild($deepMenuHeaderUL);
					$deepMenuContainer.appendChild($deepMenuChildMenuUL);

					if (formConfig.forms && Array.isArray(formConfig.forms)) {
						for (let index = 0; index < formConfig.forms.length; index++) {
							let formItemConfig = formConfig.forms[index];
							this.initFormItem($deepMenuChildMenuUL, formItemConfig);
						}
					}
					that.$el.$content?.appendChild($deepMenuContainer);

					/* 根据标题的高度来自适应内容高度，默认开启 */
					/* 中间容器的偏移量，看设置的section.pops-panel-container的padding，默认0 */
					let contentContainerOffset = 0;
					/* 获取标题的<ul>元素的高度 */
					let sectionContainerHeaderULElementHeight =
						popsDOMUtils.height($deepMenuHeaderUL);
					$deepMenuChildMenuUL.style.setProperty(
						"height",
						`calc( 100% - ${
							sectionContainerHeaderULElementHeight + contentContainerOffset
						}px )`
					);
				},
				/** 设置项的点击事件 */
				setLiClickEvent() {
					popsDOMUtils.on(liElement, "click", void 0, async (event) => {
						if (typeof formConfig.clickCallBack === "function") {
							let result = await formConfig.clickCallBack(event, formConfig);
							if (result) {
								return;
							}
						}
						this.gotoDeepMenu(event, liElement);
					});
				},
			};

			PopsPanelDeepMenu.init();
			(liElement as any)["data-deepMenu"] = PopsPanelDeepMenu;

			return liElement;
		},
		/**
		 * 获取中间容器的元素<li>
		 * type ===> own
		 * @param formConfig
		 */
		createSectionContainerItem_own(formConfig: PopsPanelOwnDetails) {
			let liElement = document.createElement("li");
			(liElement as any)["__formConfig__"] = formConfig;
			if (formConfig.className) {
				liElement.className = formConfig.className;
			}
			liElement = formConfig.getLiElementCallBack(liElement);
			return liElement;
		},
		/**
		 * 获取中间容器的元素<li>
		 * @param formConfig
		 */
		createSectionContainerItem(formConfig: PopsPanelFormsTotalDetails) {
			/** 配置项的类型 */
			let formType = formConfig["type"];

			if (formType === "switch") {
				return this.createSectionContainerItem_switch(
					formConfig as PopsPanelSwitchDetails
				);
			} else if (formType === "slider") {
				return this.createSectionContainerItem_slider_new(
					formConfig as PopsPanelSliderDetails
				);
			} else if (formType === "input") {
				return this.createSectionContainerItem_input(
					formConfig as PopsPanelInputDetails
				);
			} else if (formType === "textarea") {
				return this.createSectionContainerItem_textarea(
					formConfig as PopsPanelTextAreaDetails
				);
			} else if (formType === "select") {
				return this.createSectionContainerItem_select(
					formConfig as PopsPanelSelectDetails
				);
			} else if (formType === "select-multiple") {
				return this.createSectionContainerItem_select_multiple_new(
					formConfig as PopsPanelSelectMultipleDetails
				);
			} else if (formType === "button") {
				return this.createSectionContainerItem_button(
					formConfig as PopsPanelButtonDetails
				);
			} else if (formType === "deepMenu") {
				return this.createSectionContainerItem_deepMenu(
					formConfig as PopsPanelDeepMenuDetails
				);
			} else if (formType === "own") {
				return this.createSectionContainerItem_own(
					formConfig as PopsPanelOwnDetails
				);
			} else {
				console.error("尚未实现的type类型", formConfig);
			}
		},
		/**
		 * 生成配置每一项的元素
		 * @param formConfig
		 */
		initFormItem(formConfig: PopsPanelContentConfig) {
			let that = this;
			if ((formConfig as any)["type"] === "forms") {
				let __formConfig_forms = formConfig as any as PopsPanelFormsDetails;
				let childForms = formConfig["forms"];
				/* 每一项<li>元素 */
				let formContainerListElement = document.createElement("li");
				/* 每一项<li>内的子<ul>元素 */
				let formContainerULElement = document.createElement("ul");
				formContainerListElement.className = "pops-panel-forms-container-item";
				/* 区域头部的文字 */
				let formHeaderDivElement = popsDOMUtils.createElement("div", {
					className: "pops-panel-forms-container-item-header-text",
				});
				formHeaderDivElement.innerHTML = __formConfig_forms["text"];
				/* 加进容器内 */
				formContainerListElement.appendChild(formHeaderDivElement);

				that.setElementClassName(
					formContainerListElement,
					formConfig.className
				);
				that.setElementAttributes(
					formContainerListElement,
					formConfig.attributes
				);
				that.setElementProps(formContainerListElement, formConfig.props);
				childForms.forEach((childFormConfig) => {
					that.uListContainerAddItem(childFormConfig as any, {
						ulElement: formContainerULElement,
						sectionContainerULElement: that.sectionContainerULElement,
						formContainerListElement: formContainerListElement,
						formHeaderDivElement: formHeaderDivElement,
					});
				});
				formContainerListElement.appendChild(formContainerULElement);
				that.sectionContainerULElement.appendChild(formContainerListElement);
			} else {
				/* 如果成功创建，加入到中间容器中 */
				that.uListContainerAddItem(formConfig as any, {
					ulElement: that.sectionContainerULElement,
				});
			}
		},
		/**
		 *
		 * @param formConfig
		 * @param containerOptions
		 */
		uListContainerAddItem(
			formConfig: PopsPanelFormsTotalDetails,
			containerOptions: PopsPanelRightAsideContainerOptions
		) {
			let itemLiElement = this.createSectionContainerItem(formConfig);
			if (itemLiElement) {
				containerOptions["ulElement"].appendChild(itemLiElement);
			}
			if (typeof formConfig.afterAddToUListCallBack === "function") {
				formConfig.afterAddToUListCallBack(formConfig, containerOptions);
			}
		},
		/**
		 * 为左侧容器元素添加点击事件
		 * @param asideLiElement 左侧的容器<li>元素
		 * @param asideConfig 配置
		 */
		setAsideItemClickEvent(
			asideLiElement: HTMLElement,
			asideConfig: PopsPanelContentConfig
		) {
			const that = this;
			popsDOMUtils.on<MouseEvent | PointerEvent>(
				asideLiElement,
				"click",
				void 0,
				(event) => {
					this.clearContainer();
					popsDOMUtils.cssShow(that.$el.$contentSectionContainer);
					this.clearAsideItemIsVisited();
					this.setAsideItemIsVisited(asideLiElement);
					/* 顶部标题栏，存在就设置 */
					let headerTitleText = asideConfig.headerTitle ?? asideConfig.title;
					if (
						typeof headerTitleText === "string" &&
						headerTitleText.trim() !== ""
					) {
						let containerHeaderTitleLIElement = document.createElement("li");
						(containerHeaderTitleLIElement as any)["__asideConfig__"] =
							asideConfig;
						containerHeaderTitleLIElement.innerHTML = headerTitleText;
						this.sectionContainerHeaderULElement.appendChild(
							containerHeaderTitleLIElement
						);
					}

					let __forms__ = (asideLiElement as any)[
						"__forms__"
					] as PopsPanelContentConfig[];

					__forms__.forEach((formConfig) => {
						this.initFormItem(formConfig);
					});

					let autoAdaptionContentHeight =
						asideConfig.autoAdaptionContentHeight ?? true;
					if (autoAdaptionContentHeight) {
						/* 根据标题的高度来自适应内容高度，默认开启 */
						/* 中间容器的偏移量，看设置的section.pops-panel-container的padding，默认0 */
						let contentContainerOffset =
							(asideConfig as any).contentContainerOffset ?? 0;
						/* 获取标题的<ul>元素的高度 */
						let sectionContainerHeaderULElementHeight = popsDOMUtils.height(
							this.sectionContainerHeaderULElement
						);
						this.sectionContainerULElement.style.setProperty(
							"height",
							`calc( 100% - ${
								sectionContainerHeaderULElementHeight + contentContainerOffset
							}px )`
						);
					}

					if (typeof asideConfig.callback === "function") {
						/* 执行回调 */
						asideConfig.callback(
							event,
							this.sectionContainerHeaderULElement,
							this.sectionContainerULElement
						);
					}
				}
			);
		},
	};
};
