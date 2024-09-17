import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsMathFloatUtils } from "../../utils/PopsMathUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
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
import { PopsPanelInputDetails } from "./inputType";
import type { PopsPanelOwnDetails } from "./ownType";
import type { PopsPanelSelectDetails } from "./selectType";
import type { PopsPanelSliderDetails } from "./sliderType";
import type { PopsPanelSwitchDetails } from "./switchType";
import type { PopsPanelTextAreaDetails } from "./textareaType";
import { PopsPanelSelectMultipleDetails } from "./selectMultipleType";

export class PopsPanel {
	constructor(details: PopsPanelDetails) {
		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow();
		PopsHandler.handleInit($shadowRoot, [
			pops.config.cssText.index,
			pops.config.cssText.ninePalaceGridPosition,
			pops.config.cssText.scrollbar,
			pops.config.cssText.button,
			pops.config.cssText.anim,
			pops.config.cssText.common,
			pops.config.cssText.panelCSS,
		]);

		let config: Required<PopsPanelDetails> = {
			title: {
				text: "默认标题",
				position: "center",
				html: false,
				style: "",
			},
			content: [
				{
					id: "whitesev-panel-config-1",
					title: "菜单配置1",
					headerTitle: "菜单配置1",
					isDefault: false,
					attributes: [
						{
							"data-test": "test",
							"data-test-2": "test2",
						},
					],
					forms: [
						{
							className: "forms-1",
							text: "区域设置",
							type: "forms",
							attributes: [],
							forms: [
								{
									className: "panel-switch",
									text: "switch",
									type: "switch",
									attributes: [],
									getValue() {
										return true;
									},
									callback(event, value) {
										console.log("按钮开启状态：", value);
									},
								},
								{
									className: "panel-slider",
									text: "slider",
									type: "slider",
									attributes: [],
									getValue() {
										return 50;
									},
									callback(event, value) {
										console.log("滑块当前数值：", value);
									},
									min: 1,
									max: 100,
								},
								{
									className: "panel-button",
									text: "button",
									type: "button",
									attributes: [],
									buttonIcon: "eleme",
									buttonIconIsLoading: true,
									buttonType: "warning",
									buttonText: "warning按钮",
									callback(event) {
										console.log("点击按钮", event);
									},
								},
								{
									className: "panel-button",
									text: "button",
									type: "button",
									attributes: [],
									buttonIcon: "chromeFilled",
									buttonIconIsLoading: true,
									buttonType: "danger",
									buttonText: "danger按钮",
									callback(event) {
										console.log("点击按钮", event);
									},
								},
								{
									className: "panel-button",
									text: "button",
									type: "button",
									attributes: [],
									buttonIcon: "upload",
									buttonIconIsLoading: false,
									buttonType: "info",
									buttonText: "info按钮",
									callback(event) {
										console.log("点击按钮", event);
									},
								},
							],
						},
					],
				},
				{
					id: "whitesev-panel-config-2",
					title: "菜单配置2",
					headerTitle: "菜单配置2",
					isDefault: true,
					attributes: [
						{
							"data-value": "value",
							"data-value-2": "value2",
						},
					],
					forms: [
						{
							className: "panel-input",
							text: "input",
							type: "input",
							attributes: [],
							getValue() {
								return "50";
							},
							callback(event, value) {
								console.log("输入框内容改变：", value);
							},
							placeholder: "请输入内容",
						},
						{
							className: "panel-input-password",
							text: "input-password",
							type: "input",
							attributes: [],
							getValue() {
								return "123456";
							},
							callback(event, value) {
								console.log("密码输入框内容改变：", value);
							},
							isPassword: true,
							placeholder: "请输入密码",
						},
						{
							className: "panel-textarea",
							text: "textarea",
							type: "textarea",
							attributes: [],
							getValue() {
								return "50";
							},
							callback(event, value) {
								console.log("textarea输入框内容改变：", value);
							},
							placeholder: "请输入内容",
						},
						{
							className: "panel-select",
							text: "select",
							type: "select",
							attributes: [],
							getValue() {
								return 50;
							},
							callback(event, isSelectedValue, isSelectedText) {
								console.log(
									`select当前选项：${isSelectedValue}，当前选项文本：${isSelectedText}`
								);
							},
							data: [
								{
									value: "all",
									text: "所有",
								},
								{
									value: "text",
									text: "文本",
								},
								{
									value: "html",
									text: "超文本",
								},
							],
						},
						{
							type: "forms",
							text: "deep菜单",
							forms: [
								{
									type: "deepMenu",
									className: "panel-deepMenu",
									text: "deepMenu",
									description: "二级菜单",
									rightText: "自定义配置",
									arrowRightIcon: true,
									clickCallBack(event, formConfig) {
										console.log("进入子配置", event, formConfig);
									},
									forms: [
										{
											className: "forms-1",
											text: "区域设置",
											type: "forms",
											attributes: [],
											forms: [
												{
													className: "panel-switch",
													text: "switch",
													type: "switch",
													attributes: [],
													getValue() {
														return true;
													},
													callback(event, value) {
														console.log("按钮开启状态：", value);
													},
												},
												{
													className: "panel-slider",
													text: "slider",
													type: "slider",
													attributes: [],
													getValue() {
														return 50;
													},
													callback(event, value) {
														console.log("滑块当前数值：", value);
													},
													min: 1,
													max: 100,
												},
												{
													className: "panel-button",
													text: "button",
													type: "button",
													attributes: [],
													buttonIcon: "eleme",
													buttonIconIsLoading: true,
													buttonType: "warning",
													buttonText: "warning按钮",
													callback(event) {
														console.log("点击按钮", event);
													},
												},
												{
													className: "panel-button",
													text: "button",
													type: "button",
													attributes: [],
													buttonIcon: "chromeFilled",
													buttonIconIsLoading: true,
													buttonType: "danger",
													buttonText: "danger按钮",
													callback(event) {
														console.log("点击按钮", event);
													},
												},
												{
													className: "panel-button",
													text: "button",
													type: "button",
													attributes: [],
													buttonIcon: "upload",
													buttonIconIsLoading: false,
													buttonType: "info",
													buttonText: "info按钮",
													callback(event) {
														console.log("点击按钮", event);
													},
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
			btn: {
				close: {
					enable: true,
					callback(event) {
						event.close();
					},
				},
			},
			mask: {
				enable: false,
				clickEvent: {
					toClose: false,
					toHide: false,
				},
				clickCallBack: void 0,
			},
			class: "",
			mobileClassName: "pops-panel-is-mobile",
			isMobile: false,
			only: false,
			width: "700px",
			height: "500px",
			position: "center",
			animation: "pops-anim-fadein-zoom",
			zIndex: 10000,
			drag: false,
			dragLimit: true,
			dragExtraDistance: 3,
			dragMoveCallBack() {},
			dragEndCallBack() {},
			forbiddenScroll: false,
			style: null,
			beforeAppendToPageCallBack() {},
		};
		config = popsUtils.assign(config, details);
		if (details && Array.isArray(details.content)) {
			config.content = details.content;
		}
		let guid = popsUtils.getRandomGUID();
		const PopsType = "panel";
		config = PopsHandler.handleOnly(PopsType, config);

		// 先把z-index提取出来
		let zIndex = PopsHandler.handleZIndex(config.zIndex);
		let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);

		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			PopsType,
			config
		);

		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			/*html*/ `
			<div 
				class="pops-${PopsType}-title"
				style="text-align: ${config.title.position};
				${headerStyle}">
				${
					config.title.html
						? config.title.text
						: `<p pops style="${headerPStyle}">${config.title.text}</p>`
				}
				${headerBtnHTML}
			</div>
			<div class="pops-${PopsType}-content">
				<aside class="pops-${PopsType}-aside">
					<ul></ul>
				</aside>
				<section class="pops-${PopsType}-container">
					<ul class="pops-panel-container-header-ul"></ul>
					<ul></ul>
				</section>
			</div>`,
			"",
			zIndex
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);
		/* 结构元素 */
		let {
			popsElement: $pops,
			headerCloseBtnElement: $headerCloseBtn,
			titleElement: $title,
			contentElement: $content,
			contentAsideElement: $contentAside,
			contentSectionContainerElement: $contentSectionContainer,
		} = PopsHandler.handleQueryElement($anim, PopsType);
		if (config.isMobile || pops.isPhone()) {
			popsDOMUtils.addClassName($pops, config.mobileClassName);
		}
		/**
		 * 遮罩层元素
		 */
		let $mask: HTMLDivElement | null = null;
		/**
		 * 已创建的元素列表
		 */
		let elementList: HTMLElement[] = [$anim];

		/* 遮罩层元素 */
		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				config: config,
				animElement: $anim,
				maskHTML: maskHTML,
			});
			$mask = _handleMask_.maskElement;
			elementList.push($mask);
		}

		/* 处理返回的配置 */
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			$anim,
			$pops,
			$mask!,
			config
		);
		/* 为顶部右边的关闭按钮添加点击事件 */
		PopsHandler.handleClickEvent(
			"close",
			$headerCloseBtn,
			eventDetails,
			config.btn.close!.callback!
		);

		/* 创建到页面中 */
		popsDOMUtils.append($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}
		popsDOMUtils.appendBody($shadowContainer);
		/* 追加遮罩层元素 */
		if ($mask != null) {
			$anim.after($mask);
		}

		/**
		 * 处理内部配置
		 */
		const HandleContetDetails = {
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
			init() {
				this.asideULElement =
					$contentAside.querySelector<HTMLUListElement>("ul")!;
				this.sectionContainerHeaderULElement =
					$contentSectionContainer.querySelectorAll<HTMLUListElement>("ul")[0];
				this.sectionContainerULElement =
					$contentSectionContainer.querySelectorAll<HTMLUListElement>("ul")[1];
				/**
				 * 默认点击的左侧容器
				 */
				let asideDefaultItemElement: HTMLLIElement | null = null;
				let isScrollToDefaultView = false;
				config.content.forEach((asideItem) => {
					let asideLiElement = this.getAsideItem(asideItem);
					this.setAsideItemClickEvent(asideLiElement, asideItem);
					this.asideULElement.appendChild(asideLiElement);
					if (asideDefaultItemElement == null) {
						let flag = false;
						if (typeof asideItem.isDefault === "function") {
							flag = Boolean(asideItem.isDefault());
						} else {
							flag = Boolean(asideItem.isDefault);
						}
						if (flag) {
							asideDefaultItemElement = asideLiElement;
							isScrollToDefaultView = Boolean(asideItem.scrollToDefaultView);
						}
					}
				});

				/* 点击左侧列表 */
				if (
					asideDefaultItemElement == null &&
					this.asideULElement.children.length
				) {
					/* 默认第一个 */
					asideDefaultItemElement = this.asideULElement
						.children[0] as HTMLLIElement;
				}
				if (asideDefaultItemElement) {
					/* 点击选择的那一项 */
					asideDefaultItemElement.click();
					if (isScrollToDefaultView) {
						asideDefaultItemElement?.scrollIntoView();
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
				$content
					?.querySelectorAll("section.pops-panel-deepMenu-container")
					.forEach((ele) => ele.remove());
			},
			/**
			 * 清空左侧容器已访问记录
			 */
			clearAsideItemIsVisited() {
				$contentAside
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
			addElementAttributes(element: HTMLElement, attributes?: any) {
				if (attributes == null) {
					return;
				}
				if (Array.isArray(attributes)) {
					attributes.forEach((attrObject) => {
						this.addElementAttributes(element, attrObject);
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
					(element as any)[propName] = props[propName];
				});
			},
			/**
			 * 获取左侧容器元素<li>
			 * @param  asideConfig
			 * @returns
			 */
			getAsideItem(asideConfig: PopsPanelContentConfig) {
				let liElement = document.createElement("li");
				liElement.id = asideConfig.id;
				(liElement as any)["__forms__"] = asideConfig.forms;
				liElement.innerHTML = asideConfig.title;
				this.addElementAttributes(liElement, asideConfig.attributes);
				this.setElementProps(liElement, asideConfig.props);
				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ==> switch
			 * @param formConfig
			 * @returns
			 */
			getSectionContainerItem_switch(formConfig: PopsPanelSwitchDetails) {
				let liElement = document.createElement("li");
				(liElement as any)["__formConfig__"] = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				this.addElementAttributes(liElement, formConfig.attributes);
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
			 * @returns
			 */
			getSectionContainerItem_slider(formConfig: PopsPanelSliderDetails) {
				let liElement = document.createElement("li");
				(liElement as any)["__formConfig__"] = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				this.addElementAttributes(liElement, formConfig.attributes);
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
			 * @returns
			 */
			getSectionContainerItem_slider_new(formConfig: PopsPanelSliderDetails) {
				let liElement = document.createElement("li");
				(liElement as any)["__formConfig__"] = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				this.addElementAttributes(liElement, formConfig.attributes);
				this.setElementProps(liElement, formConfig.props);
				/* 左边底部的描述的文字 */
				let leftDescriptionText = "";
				if (Boolean(formConfig.description)) {
					leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
				}
				liElement.innerHTML = `
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
							preventEvent() {
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
							this.$ele.tooltip.toolTipNode.querySelector<HTMLDivElement>(
								"div"
							)!;
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
			 * @returns
			 */
			getSectionContainerItem_input(formConfig: PopsPanelInputDetails) {
				let liElement = document.createElement("li");
				(liElement as any)["__formConfig__"] = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				this.addElementAttributes(liElement, formConfig.attributes);
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
			 * @returns
			 */
			getSectionContainerItem_textarea(formConfig: PopsPanelTextAreaDetails) {
				let liElement = document.createElement("li");
				(liElement as any)["__formConfig__"] = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				this.addElementAttributes(liElement, formConfig.attributes);
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
						this.$ele.panelTextarea.classList.add(
							"pops-panel-textarea-disable"
						);
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
									formConfig.callback(
										event as any,
										(event as any).target.value
									);
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
			getSectionContainerItem_select(formConfig: PopsPanelSelectDetails<any>) {
				let liElement = document.createElement("li");
				(liElement as any)["__formConfig__"] = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				this.addElementAttributes(liElement, formConfig.attributes);
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
							let optionElement = document.createElement("option");
							(optionElement as any)["__value__"] = dataItem.value;
							(optionElement as any)["__disable__"] = dataItem.disable;
							if (dataItem.value === this.$data.defaultValue) {
								optionElement.setAttribute("selected", "true");
							}
							optionElement.innerText = dataItem.text;
							this.$ele.select.appendChild(optionElement);
						});
					},
					setSelectOptionsDisableStatus() {
						if (this.$ele.select.options && this.$ele.select.options.length) {
							Array.from(this.$ele.select.options).forEach((optionItem) => {
								this.setOptionDisableStatus(optionItem);
							});
						}
					},
					setOptionDisableStatus(optionElement: HTMLOptionElement) {
						if (typeof (optionElement as any)["__disable__"] === "function") {
							let disableStatus = (optionElement as any)["__disable__"](
								(optionElement as any)["__value__"]
							);
							if (disableStatus) {
								optionElement.setAttribute("disabled", "true");
							} else {
								optionElement.removeAttribute("disabled");
							}
						}
					},
					/**
					 * 监听选择内容改变
					 */
					setChangeEvent() {
						popsDOMUtils.on(this.$ele.select, "change", void 0, (event) => {
							this.setSelectOptionsDisableStatus();
							if (typeof formConfig.callback === "function") {
								let isSelectedElement = (event as any).target[
									(event as any).target.selectedIndex
								] as HTMLOptionElement;
								let isSelectedValue = (isSelectedElement as any)["__value__"];
								let isSelectedText =
									isSelectedElement.innerText || isSelectedElement.textContent!;
								formConfig.callback(
									event as any,
									isSelectedValue,
									isSelectedText
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
			getSectionContainerItem_select_multiple(
				formConfig: PopsPanelSelectMultipleDetails<any>
			) {
				let liElement = document.createElement("li");
				Reflect.set(liElement, "__formConfig__", formConfig);
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				this.addElementAttributes(liElement, formConfig.attributes);
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
				<div class="pops-panel-select-multiple pops-panel-select">
					<select multiple="true"></select>
				</div>
				`;

				const PopsPanelSelectMultiple = {
					[Symbol.toStringTag]: "PopsPanelSelectMultiple",
					$ele: {
						panelSelect: liElement.querySelector<HTMLDivElement>(
							".pops-panel-select-multiple"
						)!,
						select: liElement.querySelector<HTMLSelectElement>(
							".pops-panel-select-multiple select"
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
					/** 禁用 */
					disable() {
						this.$ele.select.setAttribute("disabled", "true");
						this.$ele.panelSelect.classList.add("pops-panel-select-disable");
					},
					/** 取消禁用 */
					notDisable() {
						this.$ele.select.removeAttribute("disabled");
						this.$ele.panelSelect.classList.remove("pops-panel-select-disable");
					},
					/** 判断是否禁用 */
					isDisabled() {
						return (
							this.$ele.select.hasAttribute("disabled") ||
							this.$ele.panelSelect.classList.contains(
								"pops-panel-select-disable"
							)
						);
					},
					/** 初始化配置 */
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
					/** 获取选中信息 */
					getSelectInfoList($select: HTMLSelectElement) {
						let selectedInfo: {
							value: any;
							text: string;
							$option: HTMLOptionElement;
						}[] = [];
						Array.from($select.selectedOptions).forEach(($selectedOption) => {
							selectedInfo.push(this.getSelectOptionInfo($selectedOption));
						});
						return selectedInfo;
					},
					/**
					 * 监听选择内容改变
					 */
					setChangeEvent() {
						popsDOMUtils.on(this.$ele.select, "change", void 0, (event) => {
							this.setSelectOptionsDisableStatus();
							if (typeof formConfig.callback === "function") {
								formConfig.callback(
									event as any,
									this.getSelectInfoList(this.$ele.select)
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
								formConfig.clickCallBack(
									event,
									this.getSelectInfoList(this.$ele.select)
								);
							}
						});
					},
				};

				PopsPanelSelectMultiple.init();
				Reflect.set(liElement, "data-select", PopsPanelSelectMultiple);
				return liElement;
			},
			/**
			 * 获取中间容器的元素<li>
			 * type ==> button
			 * @param formConfig
			 */
			getSectionContainerItem_button(formConfig: PopsPanelButtonDetails) {
				let liElement = document.createElement("li");
				(liElement as any)["__formConfig__"] = formConfig;
				if (formConfig.className) {
					liElement.className = formConfig.className;
				}
				this.addElementAttributes(liElement, formConfig.attributes);
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
						this.$ele.icon.setAttribute(
							"is-loading",
							Boolean(status).toString()
						);
					},
					/**
					 * 设置属性上是否存在icon图标
					 */
					setHasIcon(value: any) {
						this.$ele.button.setAttribute(
							"data-icon",
							Boolean(value).toString()
						);
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
			getSectionContainerItem_deepMenu(formConfig: PopsPanelDeepMenuDetails) {
				let liElement = document.createElement("li");
				liElement.classList.add("pops-panel-deepMenu-nav-item");
				(liElement as any)["__formConfig__"] = formConfig;
				if (formConfig.className) {
					liElement.classList.add(formConfig.className);
				}
				// 设置属性
				this.addElementAttributes(liElement, formConfig.attributes);
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
					rightText = `<p class="pops-panel-item-right-text">${formConfig.rightText}</p>`;
				}
				liElement.innerHTML = `
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
							return $contentSectionContainer;
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
							if (formItemConfig.className) {
								popsDOMUtils.addClassName(
									formContainerListElement,
									formItemConfig.className
								);
							}
							HandleContetDetails.addElementAttributes(
								formContainerListElement,
								formItemConfig.attributes
							);
							HandleContetDetails.setElementProps(
								formContainerListElement,
								formItemConfig.props
							);
							childForms.forEach((childFormConfig) => {
								HandleContetDetails.uListContainerAddItem(childFormConfig, {
									ulElement: formContainerULElement,
									sectionContainerULElement:
										HandleContetDetails.sectionContainerULElement,
									formContainerListElement: formContainerListElement,
									formHeaderDivElement: formHeaderDivElement,
								});
							});
							formContainerListElement.appendChild(formContainerULElement);
							$container.appendChild(formContainerListElement);
						} else {
							/* 如果成功创建，加入到中间容器中 */
							HandleContetDetails.uListContainerAddItem(formConfig, {
								ulElement: HandleContetDetails.sectionContainerULElement,
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
						$content?.appendChild($deepMenuContainer);

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
			getSectionContainerItem_own(formConfig: PopsPanelOwnDetails) {
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
			getSectionContainerItem(formConfig: PopsPanelFormsTotalDetails) {
				/** 配置项的类型 */
				let formType = formConfig["type"];

				if (formType === "switch") {
					return this.getSectionContainerItem_switch(
						formConfig as PopsPanelSwitchDetails
					);
				} else if (formType === "slider") {
					return this.getSectionContainerItem_slider_new(
						formConfig as PopsPanelSliderDetails
					);
				} else if (formType === "input") {
					return this.getSectionContainerItem_input(
						formConfig as PopsPanelInputDetails
					);
				} else if (formType === "textarea") {
					return this.getSectionContainerItem_textarea(
						formConfig as PopsPanelTextAreaDetails
					);
				} else if (formType === "select") {
					return this.getSectionContainerItem_select(
						formConfig as PopsPanelSelectDetails
					);
				} else if (formType === "select-multiple") {
					return this.getSectionContainerItem_select_multiple(
						formConfig as PopsPanelSelectMultipleDetails
					);
				} else if (formType === "button") {
					return this.getSectionContainerItem_button(
						formConfig as PopsPanelButtonDetails
					);
				} else if (formType === "deepMenu") {
					return this.getSectionContainerItem_deepMenu(
						formConfig as PopsPanelDeepMenuDetails
					);
				} else if (formType === "own") {
					return this.getSectionContainerItem_own(
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
					formContainerListElement.className =
						"pops-panel-forms-container-item";
					/* 区域头部的文字 */
					let formHeaderDivElement = popsDOMUtils.createElement("div", {
						className: "pops-panel-forms-container-item-header-text",
					});
					formHeaderDivElement.innerHTML = __formConfig_forms["text"];
					/* 加进容器内 */
					formContainerListElement.appendChild(formHeaderDivElement);
					if (__formConfig_forms.className) {
						popsDOMUtils.addClassName(
							formContainerListElement,
							__formConfig_forms.className
						);
					}
					that.addElementAttributes(
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
				let itemLiElement = this.getSectionContainerItem(formConfig);
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
				popsDOMUtils.on<MouseEvent | PointerEvent>(
					asideLiElement,
					"click",
					void 0,
					(event) => {
						this.clearContainer();
						popsDOMUtils.cssShow($contentSectionContainer);
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

		HandleContetDetails.init();

		PopsHandler.handlePush(PopsType, {
			guid: guid,
			animElement: $anim,
			popsElement: $pops,
			maskElement: $mask!,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		/* 拖拽 */
		if (config.drag) {
			PopsInstanceUtils.drag($pops, {
				dragElement: $title,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		return PopsHandler.handleResultDetails(eventDetails);
	}
}
