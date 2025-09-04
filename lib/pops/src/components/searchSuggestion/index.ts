import { PopsHandler } from "../../handler/PopsHandler";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { searchSuggestionConfig as PopsSearchSuggestionConfig } from "./config";
import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import type { PopsSearchSuggestionData, PopsSearchSuggestionDetails } from "./types/index";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";
import { PopsCommonCSSClassName } from "../../config/CommonCSSClassName";

export const PopsSearchSuggestion = {
	init<T>(details: PopsSearchSuggestionDetails<T>) {
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
			(<PopsSearchSuggestionDetails<T>["data"]>config.data) = details.data;
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
			$evt: {
				offInputChangeEvtHandler: [] as Function[],
			},
			$data: {
				/** 是否结果为空 */
				isEmpty: true,
			},
			/**
			 * 初始化
			 * @param parentElement 父元素
			 */
			init(parentElement = document.body || document.documentElement) {
				SearchSuggestion.initEl();
				SearchSuggestion.update(SearchSuggestion.getData());
				SearchSuggestion.updateStyleSheet();

				SearchSuggestion.hide();
				$shadowRoot.appendChild(SearchSuggestion.$el.root);
				parentElement.appendChild($shadowContainer);
			},
			/**
			 * 初始化元素变量
			 */
			initEl() {
				SearchSuggestion.$el.root = SearchSuggestion.createSearchSelectElement();
				Reflect.set(SearchSuggestion.$el.root, "data-SearchSuggestion", SearchSuggestion);
				SearchSuggestion.$el.$dynamicCSS =
					SearchSuggestion.$el.root.querySelector<HTMLStyleElement>("style[data-dynamic]")!;
				SearchSuggestion.$el.$hintULContainer =
					SearchSuggestion.$el.root.querySelector<HTMLUListElement>("ul")!;
			},
			/**
			 * 获取数据
			 */
			getData(): PopsSearchSuggestionData<T>[] {
				return typeof config.data === "function" ? config.data() : config.data;
			},
			/**
			 * 更新数据
			 * @param data 数据
			 */
			setData(data: PopsSearchSuggestionData<T>[]) {
				(<PopsSearchSuggestionDetails<T>["data"]>config.data) = data;
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
							${SearchSuggestion.getDynamicCSS()}
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
			/**
			 * 动态获取CSS
			 */
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
			 * 获取data-value值
			 * @param data 数据项
			 */
			getItemDataValue(data: PopsSearchSuggestionData<T>) {
				return data;
			},
			/**
			 * 获取显示出搜索建议框的每一项的html
			 * @param dataItem 当前项的值
			 * @param dateItemIndex 当前项的下标
			 */
			createSearchItemLiElement(dataItem: PopsSearchSuggestionData<T>, dateItemIndex: number) {
				const dataValue = SearchSuggestion.getItemDataValue(dataItem);
				let $li = popsDOMUtils.createElement("li", {
					className: `pops-${popsType}-search-suggestion-hint-item`,
					"data-index": dateItemIndex,
					"data-value": dataValue,
				});
				Reflect.set($li, "data-index", dateItemIndex);
				Reflect.set($li, "data-value", dataValue);
				// 项内容
				let $itemInner = dataItem.itemView(dataItem, $li, config);
				if (typeof $itemInner === "string") {
					PopsSafeUtils.setSafeHTML($li, $itemInner);
				} else {
					popsDOMUtils.append($li, $itemInner);
				}
				// 删除按钮
				const enableDeleteButton = dataItem.enableDeleteButton;
				if (typeof enableDeleteButton === "boolean" && enableDeleteButton) {
					let $deleteIcon = SearchSuggestion.createItemDeleteIcon();
					popsDOMUtils.append($li, $deleteIcon);
				}
				popsDOMUtils.addClassName($li, PopsCommonCSSClassName.flexCenter);
				popsDOMUtils.addClassName($li, PopsCommonCSSClassName.flexYCenter);
				return $li;
			},
			/**
			 * 设置搜索建议框每一项的点击事件
			 * @param $searchItem 当前项的元素
			 */
			setSearchItemClickEvent($searchItem: HTMLLIElement) {
				popsDOMUtils.on(
					$searchItem,
					"click",
					async (event) => {
						popsDOMUtils.preventEvent(event);
						let $click = event.target as HTMLLIElement;
						const data = SearchSuggestion.getData();
						const dataItem = Reflect.get($searchItem, "data-value") as PopsSearchSuggestionData<T>;
						let isDelete = Boolean($click.closest(`.pops-${popsType}-delete-icon`));
						if (isDelete) {
							// 删除
							if (typeof dataItem.deleteButtonClickCallback === "function") {
								let result = await dataItem.deleteButtonClickCallback(event, $searchItem, dataItem, config);
								if (typeof result === "boolean" && result) {
									data.splice(data.indexOf(dataItem), 1);
									$searchItem.remove();
								}
							}
							if (!SearchSuggestion.$el.$hintULContainer.children.length) {
								/* 全删完了 */
								SearchSuggestion.clear();
							}
							SearchSuggestion.updateStyleSheet();
						} else {
							// 点击选择项
							if (typeof dataItem.clickCallback === "function") {
								let result = await dataItem.clickCallback(event, $searchItem, dataItem, config);
								if (typeof result === "boolean" && result) {
									if (
										config.inputTarget instanceof HTMLInputElement ||
										config.inputTarget instanceof HTMLTextAreaElement
									) {
										config.inputTarget.value = String(dataItem.value);
									}
								}
							}
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
				const listenerHandler = popsDOMUtils.onInput(
					config.inputTarget,
					async (event) => {
						const data = SearchSuggestion.getData();
						let queryDataResult = await config.inputTargetChangeRefreshShowDataCallback(
							config.inputTarget.value,
							data,
							config
						);
						SearchSuggestion.update(queryDataResult);
						SearchSuggestion.updateStyleSheet();
					},
					option
				);
				SearchSuggestion.$evt.offInputChangeEvtHandler.push(listenerHandler.off);
			},
			/**
			 * 移除输入框内容改变的监听
			 */
			removeInputChangeEvent(
				option: AddEventListenerOptions = {
					capture: true,
				}
			) {
				for (let index = 0; index < SearchSuggestion.$evt.offInputChangeEvtHandler.length; index++) {
					const handler = SearchSuggestion.$evt.offInputChangeEvtHandler[index];
					handler();
					SearchSuggestion.$evt.offInputChangeEvtHandler.splice(index, 1);
					index--;
				}
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
			createItemDeleteIcon(size = 16, fill = "#bababa") {
				let $svg = popsDOMUtils.parseTextToDOM(/*html*/ `
					<svg class="pops-${popsType}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="${fill}">
						<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
						<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
					</svg>
        			`);
				return $svg;
			},
			/**
			 * 设置当前正在搜索中的提示
			 */
			setPromptsInSearch() {
				let $isSearching = popsDOMUtils.createElement("li", {
					className: `pops-${popsType}-search-suggestion-hint-searching-item`,
					innerHTML: config.searchingTip,
				});
				SearchSuggestion.addItem($isSearching);
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
			 * 更新搜索建议框的位置(top、left)
			 * 因为目标元素可能是动态隐藏的
			 * @param target 目标元素
			 * @param checkPositonAgain 是否在更新位置信息后检测更新位置信息，默认true
			 */
			changeHintULElementPosition(
				target = config.target ?? config.inputTarget,
				checkPositonAgain: Boolean = true
			) {
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
					console.log(
						targetBottom,
						searchSuggestionContainerHeight,
						targetBottom + searchSuggestionContainerHeight,
						documentHeight
					);
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

				// 如果更新前在下面的话且高度超出了屏幕
				// 这时候会有滚动条，会造成位置偏移
				// 更新后的位置却在上面，这时候的位置信息不对齐
				// 需重新更新位置
				// 此情况一般是config.position === "auto"
				if (checkPositonAgain) {
					SearchSuggestion.changeHintULElementPosition(target, !checkPositonAgain);
				}
			},
			/**
			 * 更新搜索建议框的width
			 * 因为目标元素可能是动态隐藏的
			 * @param target 目标元素
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
				let cssText = SearchSuggestion.getDynamicCSS();
				PopsSafeUtils.setSafeHTML(SearchSuggestion.$el.$dynamicCSS, cssText);
			},
			/**
			 * 数据项的数量改变时调用
			 *
			 * - 更新css
			 * - 更新建议框的宽度
			 * - 更新建议框的位置
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
			 * 添加搜索结果元素
			 * @param $item 项元素
			 */
			addItem($item: HTMLElement | DocumentFragment) {
				SearchSuggestion.$el.$hintULContainer.appendChild($item);
			},
			/**
			 * 更新页面显示的搜索结果
			 * @param updateData
			 */
			update(updateData: PopsSearchSuggestionData<T>[] = []) {
				if (!Array.isArray(updateData)) {
					throw new TypeError("传入的数据不是数组");
				}
				const data = updateData;
				/* 清空已有的搜索结果 */
				if (data.length) {
					SearchSuggestion.$data.isEmpty = false;
					if (config.toHideWithNotResult) {
						SearchSuggestion.show();
					}
					SearchSuggestion.clear(true);
					/* 添加进ul中 */
					let fragment = document.createDocumentFragment();
					data.forEach((item, index) => {
						let $item = SearchSuggestion.createSearchItemLiElement(item, index);
						SearchSuggestion.setSearchItemClickEvent($item);
						SearchSuggestion.setSearchItemSelectEvent($item);
						fragment.appendChild($item);
					});
					SearchSuggestion.addItem(fragment);
				} else {
					/* 清空 */
					SearchSuggestion.clear();
				}
			},
			/**
			 * 清空当前的搜索结果并显示无结果
			 * @param [onlyClearView=false] 是否仅清空元素，默认false
			 */
			clear(onlyClearView: boolean = false) {
				PopsSafeUtils.setSafeHTML(SearchSuggestion.$el.$hintULContainer, "");
				if (onlyClearView) {
					return;
				}
				SearchSuggestion.$data.isEmpty = true;
				let $noResult;
				if (typeof config.toSearhNotResultHTML === "string") {
					$noResult = popsDOMUtils.parseTextToDOM(config.toSearhNotResultHTML);
				} else {
					$noResult = config.toSearhNotResultHTML();
				}
				SearchSuggestion.addItem($noResult);
				if (config.toHideWithNotResult) {
					SearchSuggestion.hide();
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
						popsDOMUtils.removeClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation");
					}
					popsDOMUtils.addClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation");
					popsDOMUtils.addClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation-hide");
					popsDOMUtils.removeClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation-show");
				} else {
					SearchSuggestion.$el.root.style.display = "none";
				}
			},
			/**
			 * 显示搜索建议框
			 */
			show() {
				SearchSuggestion.$el.root.style.display = "";
				if (config.useFoldAnimation) {
					popsDOMUtils.addClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation");
					popsDOMUtils.removeClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation-hide");
					popsDOMUtils.addClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation-show");
				}
			},
		};
		return SearchSuggestion;
	},
};
