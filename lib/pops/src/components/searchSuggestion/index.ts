import { PopsHandler } from "../../handler/PopsHandler";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { searchSuggestionConfig as PopsSearchSuggestionConfig } from "./config";
import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import type { PopsSearchSuggestionDetails } from "./types/index";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";
import { PopsCommonCSSClassName } from "../../config/CommonCSSClassName";

export const PopsSearchSuggestion = {
	init(details: PopsSearchSuggestionDetails) {
		const guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const popsType: PopsType = "searchSuggestion";

		let config = PopsSearchSuggestionConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		if (config.target == null) {
			throw new Error("config.target 不能为空");
		}
		/* 做下兼容处理 */
		if (config.inputTarget == null) {
			config.inputTarget = config.target as HTMLInputElement;
		}
		if (details.data) {
			config.data = details.data;
		}

		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
		PopsHandler.handleInit($shadowRoot, [
			{
				name: "index",
				css: PopsCSS.index,
			},
			{
				name: "anim",
				css: PopsCSS.anim,
			},
			{
				name: "common",
				css: PopsCSS.common,
			},
		]);

		if (config.style != null) {
			let cssNode = document.createElement("style");
			popsDOMUtils.createElement(
				"style",
				{
					innerHTML: config.style,
				},
				{
					type: "text/css",
				}
			);
			$shadowRoot.appendChild(cssNode);
		}

		const SearchSuggestion = {
			/**
			 * 当前的环境，可以是document，可以是shadowroot，默认是document
			 */
			selfDocument: config.selfDocument,
			$el: {
				/** 根元素 */
				root: null as any as HTMLElement,
				/** ul元素 */
				$hintULContainer: null as any as HTMLUListElement,
				/** 动态更新CSS */
				$dynamicCSS: null as any as HTMLStyleElement,
			},
			$data: {
				/** 是否结果为空 */
				isEmpty: true,
			},
			/** 初始化元素变量 */
			initEl() {
				this.$el.root = SearchSuggestion.createSearchSelectElement();
				this.$el.$dynamicCSS = this.$el.root.querySelector<HTMLStyleElement>("style[data-dynamic]")!;
				this.$el.$hintULContainer = SearchSuggestion.$el.root.querySelector<HTMLUListElement>("ul")!;
			},
			/**
			 * 初始化
			 */
			init(parentElement = document.body || document.documentElement) {
				this.initEl();
				SearchSuggestion.update(this.getData());
				SearchSuggestion.updateStyleSheet();

				SearchSuggestion.hide();
				$shadowRoot.appendChild(SearchSuggestion.$el.root);
				parentElement.appendChild($shadowContainer);
			},
			/**
			 * 获取数据
			 */
			getData() {
				return typeof config.data === "function" ? config.data() : config.data;
			},
			/**
			 * 获取显示出搜索建议框的html
			 */
			createSearchSelectElement() {
				let $el = popsDOMUtils.createElement(
					"div",
					{
						className: `pops pops-${popsType}-search-suggestion`,
						innerHTML: /*html*/ `
						<style type="text/css">
							.pops-${popsType}-animation{
								-moz-animation: searchSelectFalIn 0.5s 1 linear;
								-webkit-animation: searchSelectFalIn 0.5s 1 linear;
								-o-animation: searchSelectFalIn 0.5s 1 linear;
								-ms-animation: searchSelectFalIn 0.5s 1 linear;
							}
						</style>
						<style type="text/css">
							.pops-${popsType}-search-suggestion-arrow{
								--suggestion-arrow-box-shadow-left-color: rgba(0, 0, 0, 0.24);
								--suggestion-arrow-box-shadow-right-color: rgba(0, 0, 0, 0.12);
								--suggestion-arrow--after-color: rgb(78, 78, 78);
								--suggestion-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
								--suggestion-arrow--after-width: 10px;
								--suggestion-arrow--after-height: 10px;
							}
							.pops-${popsType}-search-suggestion-arrow{
								position: absolute;
								top: 100%;
								left: 50%;
								overflow: hidden;
								width: 100%;
								height: 12.5px;
								transform: translateX(-50%);
							}
							.pops-${popsType}-search-suggestion-arrow::after{
								position: absolute;
								top: 0;
								left: 50%;
								width: var(--suggestion-arrow--after-width);
								height: var(--suggestion-arrow--after-height);
								background: var(--suggestion-arrow--after-bg-color);
								color: var(--suggestion-arrow--after-color);
								box-shadow:
									0 1px 7px var(--suggestion-arrow-box-shadow-left-color),
									0 1px 7px var(--suggestion-arrow-box-shadow-right-color);
								content: "";
								transform: translateX(-50%) translateY(-50%) rotate(45deg);
							}
							.pops-${popsType}-search-suggestion[data-popper-placement^="top"] .pops-${popsType}-search-suggestion-arrow{
								position: absolute;
								top: 100%;
								left: 50%;
								overflow: hidden;
								width: 100%;
								height: 12.5px;
								transform: translateX(-50%);
							}
							.pops-${popsType}-search-suggestion[data-popper-placement^="top"] .pops-${popsType}-search-suggestion-arrow::after{
								position: absolute;
								top: 0;
								left: 50%;
								width: var(--suggestion-arrow--after-width);
								height: var(--suggestion-arrow--after-height);
								background: var(--suggestion-arrow--after-bg-color);
								box-shadow:
									0 1px 7px var(--suggestion-arrow-box-shadow-left-color),
									0 1px 7px var(--suggestion-arrow-box-shadow-right-color);
								content: "";
								transform: translateX(-50%) translateY(-50%) rotate(45deg);
							}
							.pops-${popsType}-search-suggestion[data-popper-placement^="bottom"] .pops-${popsType}-search-suggestion-arrow{
								top: -12.5px;
								left: 50%;
								transform: translateX(-50%);
							}
							.pops-${popsType}-search-suggestion[data-popper-placement^="bottom"] .pops-${popsType}-search-suggestion-arrow::after{
								position: absolute;
								top: 100%;
								left: 50%;
								content: "";
							}
						</style>
						<style type="text/css" data-dynamic="true">
							${this.getDynamicCSS()}
						</style>
						<style>
							.el-zoom-in-top-animation{
								--el-transition-md-fade: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
									opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
								transition: var(--el-transition-md-fade);
								transform-origin: center top;
							}
							.el-zoom-in-top-animation[data-popper-placement^="top"] {
								transform-origin: center bottom;
							}
							.el-zoom-in-top-animation-hide{
								opacity: 0;
								transform: scaleY(0);
							}
							.el-zoom-in-top-animation-show{
								opacity: 1;
								transform: scaleY(1);
							}
						</style>
						<style type="text/css" data-user-css>
							${config.style || ""}
						</style>
						<ul class="pops-${popsType}-search-suggestion-hint ${PopsCommonCSSClassName.userSelectNone}">${
							config.toSearhNotResultHTML
						}</ul>
						${config.useArrow ? /*html*/ `<div class="pops-${popsType}-search-suggestion-arrow"></div>` : ""}
         				 `,
					},
					{
						"data-guid": guid,
						"type-value": popsType,
					}
				);
				if (config.className !== "" && config.className != null) {
					popsDOMUtils.addClassName($el, config.className);
				}
				if (config.isAnimation) {
					popsDOMUtils.addClassName($el, `pops-${popsType}-animation`);
				}
				if (config.useFoldAnimation) {
					popsDOMUtils.addClassName($el, "el-zoom-in-top-animation");
				}
				return $el;
			},
			/** 动态获取CSS */
			getDynamicCSS() {
				return /*css*/ `
				.pops-${popsType}-search-suggestion{
					--search-suggestion-bg-color: #ffffff;
					--search-suggestion-box-shadow-color: rgb(0 0 0 / 20%);
					--search-suggestion-item-color: #515a6e;
					--search-suggestion-item-none-color: #8e8e8e;
					--search-suggestion-item-is-hover-bg-color: #f5f7fa;
					--search-suggestion-item-is-select-bg-color: #409eff;
				}
				.pops-${popsType}-search-suggestion{
					border: initial;
					overflow: initial;
					position: ${config.isAbsolute ? "absolute" : "fixed"};
					z-index: ${PopsHandler.handleZIndex(config.zIndex)};
				}
				ul.pops-${popsType}-search-suggestion-hint{
					max-height: ${config.maxHeight};
					overflow-x: hidden;
					overflow-y: auto;
					padding: 5px 0;
					background-color: var(--search-suggestion-bg-color);
					box-sizing: border-box;
					border-radius: 4px;
					box-shadow: 0 1px 6px var(--search-suggestion-box-shadow-color);
				}
				/* 建议框在上面时 */
				.pops-${popsType}-search-suggestion[data-top-reverse] ul.pops-${popsType}-search-suggestion-hint{
					display: flex;
					flex-direction: column-reverse;
				}
				.pops-${popsType}-search-suggestion[data-top-reverse] ul.pops-${popsType}-search-suggestion-hint li{
					flex-shrink: 0;
				}
				ul.pops-${popsType}-search-suggestion-hint li{
					padding: 7px;
					margin: 0;
					clear: both;
					color: var(--search-suggestion-item-color);
					font-size: 14px;
					list-style: none;
					cursor: pointer;
					transition: background .2s ease-in-out;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;
				}
				ul.pops-${popsType}-search-suggestion-hint li[data-none]{
					text-align: center;
					font-size: 12px;
					color: var(--search-suggestion-item-none-color);
				}
				ul.pops-${popsType}-search-suggestion-hint li:not([data-none]):hover{
					background-color: var(--search-suggestion-item-is-hover-bg-color);
				}
				@media (prefers-color-scheme: dark){
					.pops-${popsType}-search-suggestion{
						--search-suggestion-bg-color: #1d1e1f;
						--search-suggestion-item-color: #cfd3d4;
						--search-suggestion-item-is-hover-bg-color: rgba(175, 175, 175, .1);
					}
				}
				`;
			},
			/**
			 * 获取显示出搜索建议框的每一项的html
			 * @param data 当前项的值
			 * @param index 当前项的下标
			 */
			createSearchItemLiElement(data: any, index: number) {
				let $li = popsDOMUtils.createElement("li", {
					className: `pops-${popsType}-search-suggestion-hint-item`,
					"data-index": index,
					"data-value": SearchSuggestion.getItemDataValue(data),
					innerHTML: `${config.getItemHTML(data)}${
						config.deleteIcon.enable ? SearchSuggestion.getDeleteIconHTML() : ""
					}`,
				});
				popsDOMUtils.addClassName($li, PopsCommonCSSClassName.flexCenter);
				popsDOMUtils.addClassName($li, PopsCommonCSSClassName.flexYCenter);
				return $li;
			},
			/**
			 * 获取data-value值
			 * @param data
			 */
			getItemDataValue(data: any) {
				return data;
			},
			/**
			 * 设置搜索建议框每一项的点击事件
			 * @param $searchItem
			 */
			setSearchItemClickEvent($searchItem: HTMLLIElement) {
				popsDOMUtils.on(
					$searchItem,
					"click",
					(event) => {
						popsDOMUtils.preventEvent(event);
						let $click = event.target as HTMLLIElement;
						let dataValue = Reflect.get($searchItem, "data-value");
						let isDelete = Boolean($click.closest(`.pops-${popsType}-delete-icon`));
						if (isDelete) {
							// 删除
							if (typeof config.deleteIcon.callback === "function") {
								config.deleteIcon.callback(event, $searchItem, dataValue);
							}
							if (!this.$el.$hintULContainer.children.length) {
								/* 全删完了 */
								this.clear();
							}
							SearchSuggestion.updateStyleSheet();
						} else {
							// 点击选择项
							config.itemClickCallBack(event, $searchItem, dataValue);
						}
					},
					{
						capture: true,
					}
				);
			},
			/**
			 * 设置搜索建议框每一项的选中事件
			 * @param liElement
			 */
			setSearchItemSelectEvent(liElement: HTMLLIElement) {
				// popsDOMUtils.on(
				// 	liElement,
				// 	"keyup",
				// 	void 0,
				// 	(event) => {
				// 		let value = liElement["data-value"];
				// 		config.selectCallBack(event, liElement, value);
				// 	},
				// 	{
				// 		capture: true,
				// 	}
				// );
			},
			/**
			 * 监听输入框内容改变
			 */
			setInputChangeEvent(
				option: AddEventListenerOptions = {
					capture: true,
				}
			) {
				/* 必须是input或者textarea才有input事件 */
				if (
					!(
						config.inputTarget instanceof HTMLInputElement ||
						config.inputTarget instanceof HTMLTextAreaElement
					)
				) {
					return;
				}
				/* 是input输入框 */
				/* 禁用输入框自动提示 */
				config.inputTarget.setAttribute("autocomplete", "off");
				/* 内容改变事件 */
				popsDOMUtils.on(
					config.inputTarget,
					"input",
					void 0,
					async (event) => {
						let getListResult = await config.getData(config.inputTarget.value, this.getData());
						SearchSuggestion.update(getListResult);
						SearchSuggestion.updateStyleSheet();
					},
					option
				);
			},
			/**
			 * 移除输入框内容改变的监听
			 */
			removeInputChangeEvent(
				option: AddEventListenerOptions = {
					capture: true,
				}
			) {
				popsDOMUtils.off(config.inputTarget, "input", void 0, void 0, option);
			},
			/**
			 * 显示搜索建议框的事件
			 */
			showEvent() {
				SearchSuggestion.updateStyleSheet();
				if (config.toHideWithNotResult) {
					if (SearchSuggestion.$data.isEmpty) {
						SearchSuggestion.hide(true);
					} else {
						SearchSuggestion.show();
					}
				} else {
					SearchSuggestion.show();
				}
			},
			/**
			 * 设置显示搜索建议框的事件
			 */
			setShowEvent(
				option: AddEventListenerOptions = {
					capture: true,
				}
			) {
				/* 焦点|点击事件*/
				if (config.followPosition === "target") {
					popsDOMUtils.on([config.target], ["focus", "click"], void 0, SearchSuggestion.showEvent, option);
				} else if (config.followPosition === "input") {
					popsDOMUtils.on(
						[config.inputTarget],
						["focus", "click"],
						void 0,
						SearchSuggestion.showEvent,
						option
					);
				} else if (config.followPosition === "inputCursor") {
					popsDOMUtils.on(
						[config.inputTarget],
						["focus", "click", "input"],
						void 0,
						SearchSuggestion.showEvent,
						option
					);
				} else {
					throw new Error("未知followPosition：" + config.followPosition);
				}
			},
			/**
			 * 移除显示搜索建议框的事件
			 */
			removeShowEvent(
				option: AddEventListenerOptions = {
					capture: true,
				}
			) {
				/* 焦点|点击事件*/
				popsDOMUtils.off(
					[config.target, config.inputTarget],
					["focus", "click"],
					void 0,
					SearchSuggestion.showEvent,
					option
				);
				/* 内容改变事件 */
				popsDOMUtils.off([config.inputTarget], ["input"], void 0, SearchSuggestion.showEvent, option);
			},
			/**
			 * 隐藏搜索建议框的事件
			 * @param event
			 */
			hideEvent(event: PointerEvent | MouseEvent) {
				if (event.target instanceof Node) {
					if ($shadowContainer.contains(event.target)) {
						/* 点击在shadow上的 */
						return;
					}
					if (config.target.contains(event.target)) {
						/* 点击在目标元素内 */
						return;
					}
					if (config.inputTarget.contains(event.target)) {
						/* 点击在目标input内 */
						return;
					}
					SearchSuggestion.hide(true);
				}
			},
			/**
			 * 设置隐藏搜索建议框的事件
			 */
			setHideEvent(
				option: AddEventListenerOptions = {
					capture: true,
				}
			) {
				/* 全局点击事件 */
				/* 全局触摸屏点击事件 */
				if (Array.isArray(SearchSuggestion.selfDocument)) {
					SearchSuggestion.selfDocument.forEach(($checkParent) => {
						popsDOMUtils.on(
							$checkParent,
							["click", "touchstart"],
							void 0,
							SearchSuggestion.hideEvent,
							option
						);
					});
				} else {
					popsDOMUtils.on(
						SearchSuggestion.selfDocument,
						["click", "touchstart"],
						void 0,
						SearchSuggestion.hideEvent,
						option
					);
				}
			},
			/**
			 * 移除隐藏搜索建议框的事件
			 */
			removeHideEvent(
				option: AddEventListenerOptions = {
					capture: true,
				}
			) {
				if (Array.isArray(SearchSuggestion.selfDocument)) {
					SearchSuggestion.selfDocument.forEach(($checkParent) => {
						popsDOMUtils.off(
							$checkParent,
							["click", "touchstart"],
							void 0,
							SearchSuggestion.hideEvent,
							option
						);
					});
				} else {
					popsDOMUtils.off(
						SearchSuggestion.selfDocument,
						["click", "touchstart"],
						void 0,
						SearchSuggestion.hideEvent,
						option
					);
				}
			},
			/**
			 * 设置所有监听
			 */
			setAllEvent(
				option: AddEventListenerOptions = {
					capture: true,
				}
			) {
				SearchSuggestion.setInputChangeEvent(option);
				SearchSuggestion.setHideEvent(option);
				SearchSuggestion.setShowEvent(option);
			},
			/**
			 * 移除所有监听
			 */
			removeAllEvent(
				option: AddEventListenerOptions = {
					capture: true,
				}
			) {
				SearchSuggestion.removeInputChangeEvent(option);
				SearchSuggestion.removeHideEvent(option);
				SearchSuggestion.removeShowEvent(option);
			},
			/**
			 * 获取删除按钮的html
			 */
			getDeleteIconHTML(size = 16, fill = "#bababa") {
				return /*html*/ `
				<svg class="pops-${popsType}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="${fill}">
					<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
					<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
				</svg>
        	`;
			},
			/**
			 * 设置当前正在搜索中的提示
			 */
			setPromptsInSearch() {
				let isSearchingElement = popsDOMUtils.createElement("li", {
					className: `pops-${popsType}-search-suggestion-hint-searching-item`,
					innerHTML: config.searchingTip,
				});
				SearchSuggestion.$el.$hintULContainer.appendChild(isSearchingElement);
			},
			/**
			 * 移除正在搜索中的提示
			 */
			removePromptsInSearch() {
				SearchSuggestion.$el.$hintULContainer
					.querySelector<HTMLLIElement>(`li.pops-${popsType}-search-suggestion-hint-searching-item`)
					?.remove();
			},
			/**
			 * 清空所有的搜索结果
			 */
			clearAllSearchItemLi() {
				PopsSafeUtils.setSafeHTML(SearchSuggestion.$el.$hintULContainer, "");
			},
			/**
			 * 更新搜索建议框的位置(top、left)
			 * 因为目标元素可能是动态隐藏的
			 */
			changeHintULElementPosition(target = config.target ?? config.inputTarget) {
				let targetRect: DOMRect | null = null;
				if (config.followPosition === "inputCursor") {
					targetRect = popsDOMUtils.getTextBoundingRect(
						config.inputTarget,
						config.inputTarget.selectionStart || 0,
						config.inputTarget.selectionEnd || 0,
						false
					);
				} else {
					targetRect = config.isAbsolute ? popsDOMUtils.offset(target) : target.getBoundingClientRect();
				}
				if (targetRect == null) {
					return;
				}
				// 文档最大高度
				let documentHeight = document.documentElement.clientHeight;
				if (config.isAbsolute) {
					// 绝对定位
					documentHeight = popsDOMUtils.height(document);
				}
				// 文档最大宽度
				let documentWidth = popsDOMUtils.width(document);

				let position = config.position;
				if (config.position === "auto") {
					// 需目标高度+搜索建议框高度大于文档高度，则显示在上面
					let targetBottom = targetRect.bottom;
					let searchSuggestionContainerHeight = popsDOMUtils.height(SearchSuggestion.$el.$hintULContainer);
					if (targetBottom + searchSuggestionContainerHeight > documentHeight) {
						// 在上面
						position = "top";
					} else {
						// 在下面
						position = "bottom";
					}
				}
				if (position === "top") {
					// 在上面
					if (config.positionTopToReverse) {
						// 自动翻转
						SearchSuggestion.$el.root.setAttribute("data-top-reverse", "true");
					}
					if (config.useFoldAnimation) {
						// 翻转折叠
						SearchSuggestion.$el.root.setAttribute("data-popper-placement", "top");
					}
					let bottom = documentHeight - targetRect.top + config.topDistance;
					SearchSuggestion.$el.root.style.top = "";
					SearchSuggestion.$el.root.style.bottom = bottom + "px";
				} else if (position === "bottom") {
					// 在下面
					if (config.useFoldAnimation) {
						SearchSuggestion.$el.root.setAttribute("data-popper-placement", "bottom-center");
					}
					let top = targetRect.height + targetRect.top + config.topDistance;
					SearchSuggestion.$el.root.removeAttribute("data-top-reverse");
					SearchSuggestion.$el.root.style.bottom = "";
					SearchSuggestion.$el.root.style.top = top + "px";
				}
				let left = targetRect.left;
				let hintUIWidth = popsDOMUtils.width(SearchSuggestion.$el.$hintULContainer);
				if (hintUIWidth > documentWidth) {
					// 超出宽度
					left = left + documentWidth - hintUIWidth;
				}
				SearchSuggestion.$el.root.style.left = left + "px";
			},
			/**
			 * 更新搜索建议框的width
			 * 因为目标元素可能是动态隐藏的
			 */
			changeHintULElementWidth(target = config.target ?? config.inputTarget) {
				let targetRect = target.getBoundingClientRect();
				if (config.followTargetWidth) {
					SearchSuggestion.$el.$hintULContainer.style.width = targetRect.width + "px";
				} else {
					SearchSuggestion.$el.$hintULContainer.style.width = config.width;
				}
			},
			/**
			 * 动态更新CSS
			 */
			updateDynamicCSS() {
				let cssText = this.getDynamicCSS();
				PopsSafeUtils.setSafeHTML(this.$el.$dynamicCSS, cssText);
			},
			/**
			 * 数据项的数量改变时调用
			 */
			updateStyleSheet() {
				// 更新z-index
				SearchSuggestion.updateDynamicCSS();
				// 更新宽度
				SearchSuggestion.changeHintULElementWidth();
				// 更新位置
				SearchSuggestion.changeHintULElementPosition();
			},
			/**
			 * 更新页面显示的搜索结果
			 * @param data
			 */
			update(data: any[] = []) {
				if (!Array.isArray(data)) {
					throw new TypeError("传入的数据不是数组");
				}
				config.data = data;
				/* 清空已有的搜索结果 */
				if (config.data.length) {
					SearchSuggestion.$data.isEmpty = false;

					if (config.toHideWithNotResult) {
						SearchSuggestion.show();
					}
					SearchSuggestion.clearAllSearchItemLi();
					/* 添加进ul中 */
					config.data.forEach((item, index) => {
						let itemElement = SearchSuggestion.createSearchItemLiElement(item, index);
						SearchSuggestion.setSearchItemClickEvent(itemElement);
						SearchSuggestion.setSearchItemSelectEvent(itemElement);
						SearchSuggestion.$el.$hintULContainer.appendChild(itemElement);
					});
				} else {
					/* 清空 */
					SearchSuggestion.clear();
				}
			},
			/**
			 * 清空当前的搜索结果并显示无结果
			 */
			clear() {
				this.$data.isEmpty = true;
				this.clearAllSearchItemLi();
				this.$el.$hintULContainer.appendChild(popsDOMUtils.parseTextToDOM(config.toSearhNotResultHTML));
				if (config.toHideWithNotResult) {
					this.hide();
				}
			},
			/**
			 * 隐藏搜索建议框
			 * @param useAnimationToHide 是否使用动画隐藏
			 */
			hide(useAnimationToHide: boolean = false) {
				if (config.useFoldAnimation) {
					if (!useAnimationToHide) {
						// 去掉动画
						popsDOMUtils.removeClassName(this.$el.root, "el-zoom-in-top-animation");
					}
					popsDOMUtils.addClassName(this.$el.root, "el-zoom-in-top-animation");
					popsDOMUtils.addClassName(this.$el.root, "el-zoom-in-top-animation-hide");
					popsDOMUtils.removeClassName(this.$el.root, "el-zoom-in-top-animation-show");
				} else {
					this.$el.root.style.display = "none";
				}
			},
			/**
			 * 显示搜索建议框
			 */
			show() {
				this.$el.root.style.display = "";
				if (config.useFoldAnimation) {
					popsDOMUtils.addClassName(this.$el.root, "el-zoom-in-top-animation");
					popsDOMUtils.removeClassName(this.$el.root, "el-zoom-in-top-animation-hide");
					popsDOMUtils.addClassName(this.$el.root, "el-zoom-in-top-animation-show");
				}
			},
		};
		return SearchSuggestion;
	},
};
