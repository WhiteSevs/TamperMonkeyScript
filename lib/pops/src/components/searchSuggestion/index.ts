import { PopsHandler } from "../../handler/PopsHandler";
import { pops } from "../../Pops";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import type { PopsSearchSuggestionDetails } from "./indexType";
import { searchSuggestionConfig as PopsSearchSuggestionConfig } from "./config";
import { GlobalConfig } from "../../GlobalConfig";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";

export class PopsSearchSuggestion {
	constructor(details: PopsSearchSuggestionDetails) {
		const guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const PopsType = "searchSuggestion";

		let config = PopsSearchSuggestionConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		if (config.target == null) {
			throw new TypeError("config.target 不能为空");
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
			pops.config.cssText.index,
			pops.config.cssText.anim,
			pops.config.cssText.common,
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
			/**
			 * 初始化
			 */
			init(parentElement = document.body || document.documentElement) {
				this.initEl();
				SearchSuggestion.update(
					typeof config.data === "function" ? config.data() : config.data
				);
				SearchSuggestion.updateDynamicCSS();
				SearchSuggestion.changeHintULElementWidth();
				SearchSuggestion.changeHintULElementPosition();

				SearchSuggestion.hide();
				if (config.isAnimation) {
					SearchSuggestion.$el.root.classList.add(`pops-${PopsType}-animation`);
				}
				$shadowRoot.appendChild(SearchSuggestion.$el.root);
				parentElement.appendChild($shadowContainer);
			},
			/** 初始化元素变量 */
			initEl() {
				this.$el.root = SearchSuggestion.getSearchSelectElement();
				this.$el.$dynamicCSS = this.$el.root.querySelector<HTMLStyleElement>(
					"style[data-dynamic]"
				)!;
				this.$el.$hintULContainer =
					SearchSuggestion.$el.root.querySelector<HTMLUListElement>("ul")!;
			},
			/**
			 * 获取显示出搜索建议框的html
			 */
			getSearchSelectElement() {
				let element = popsDOMUtils.createElement(
					"div",
					{
						className: `pops pops-${PopsType}-search-suggestion`,
						innerHTML: /*html*/ `
						<style data-dynamic="true">
							${this.getDynamicCSS()}
						</style>
						<ul class="pops-${PopsType}-search-suggestion-hint">
							${config.toSearhNotResultHTML}
						</ul>
         				 `,
					},
					{
						"data-guid": guid,
						"type-value": PopsType,
					}
				);
				if (config.className !== "" && config.className != null) {
					popsDOMUtils.addClassName(element, config.className);
				}
				return element;
			},
			/** 动态获取CSS */
			getDynamicCSS() {
				return /*css*/ `
				.pops-${PopsType}-animation{
					-moz-animation: searchSelectFalIn 0.5s 1 linear;
					-webkit-animation: searchSelectFalIn 0.5s 1 linear;
					-o-animation: searchSelectFalIn 0.5s 1 linear;
					-ms-animation: searchSelectFalIn 0.5s 1 linear;
				}
				.pops-${PopsType}-search-suggestion{
					border: initial;
					overflow: initial;
				}
				ul.pops-${PopsType}-search-suggestion-hint{
					position: ${config.isAbsolute ? "absolute" : "fixed"};
					z-index: ${PopsHandler.handleZIndex(config.zIndex)};
					width: 0;
					left: 0;
					max-height: ${config.maxHeight};
					overflow-x: hidden;
					overflow-y: auto;
					padding: 5px 0;
					background-color: #fff;
					box-sizing: border-box;
					border-radius: 4px;
					box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
				}
				/* 建议框在上面时 */
				ul.pops-${PopsType}-search-suggestion-hint[data-top-reverse]{
					display: flex;
					flex-direction: column-reverse;
				}
				ul.pops-${PopsType}-search-suggestion-hint[data-top-reverse] li{
					flex-shrink: 0;
				}
				ul.pops-${PopsType}-search-suggestion-hint li{
					padding: 7px;
					margin: 0;
					clear: both;
					color: #515a6e;
					font-size: 14px;
					list-style: none;
					cursor: pointer;
					transition: background .2s ease-in-out;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;
				}
				ul.pops-${PopsType}-search-suggestion-hint li[data-none]{
					text-align: center;
					font-size: 12px;
					color: #8e8e8e;
				}
				ul.pops-${PopsType}-search-suggestion-hint li:hover{
					background-color: rgba(0, 0, 0, .1);
				}
				`;
			},
			/**
			 * 获取显示出搜索建议框的每一项的html
			 * @param data 当前项的值
			 * @param index 当前项的下标
			 */
			getSearchItemLiElement(data: any, index: number) {
				return popsDOMUtils.createElement("li", {
					className: `pops-${PopsType}-search-suggestion-hint-item pops-flex-items-center pops-flex-y-center`,
					"data-index": index,
					"data-value": SearchSuggestion.getItemDataValue(data),
					innerHTML: `
          			${config.getItemHTML(data)}
          			${
									config.deleteIcon.enable
										? SearchSuggestion.getDeleteIconHTML()
										: ""
								}
          			`,
				});
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
			 * @param liElement
			 */
			setSearchItemClickEvent(liElement: HTMLLIElement) {
				popsDOMUtils.on(
					liElement,
					"click",
					void 0,
					(event) => {
						popsDOMUtils.preventEvent(event);
						let $click = event.target as HTMLLIElement;
						if ($click.closest(`.pops-${PopsType}-delete-icon`)) {
							/* 点击的是删除按钮 */
							if (typeof config.deleteIcon.callback === "function") {
								config.deleteIcon.callback(
									event,
									liElement,
									(liElement as any)["data-value"]
								);
							}
							if (!this.$el.$hintULContainer.children.length) {
								/* 全删完了 */
								this.clear();
							}
						} else {
							/* 点击项主体 */
							config.itemClickCallBack(
								event,
								liElement,
								(liElement as any)["data-value"]
							);
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
						let getListResult = await config.getData(
							(event.target as any).value
						);
						SearchSuggestion.update(getListResult);
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
				SearchSuggestion.updateDynamicCSS();
				SearchSuggestion.changeHintULElementWidth();
				SearchSuggestion.changeHintULElementPosition();
				if (config.toHideWithNotResult) {
					if (SearchSuggestion.$data.isEmpty) {
						SearchSuggestion.hide();
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
					popsDOMUtils.on(
						[config.target],
						["focus", "click"],
						void 0,
						SearchSuggestion.showEvent,
						option
					);
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
					throw new TypeError("未知followPosition：" + config.followPosition);
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
				popsDOMUtils.off(
					[config.inputTarget],
					["input"],
					void 0,
					SearchSuggestion.showEvent,
					option
				);
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
					SearchSuggestion.hide();
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
				<svg class="pops-${PopsType}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="${fill}">
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
					className: `pops-${PopsType}-search-suggestion-hint-searching-item`,
					innerHTML: config.searchingTip,
				});
				SearchSuggestion.$el.$hintULContainer.appendChild(isSearchingElement);
			},
			/**
			 * 移除正在搜索中的提示
			 */
			removePromptsInSearch() {
				SearchSuggestion.$el.$hintULContainer
					.querySelector(
						`li.pops-${PopsType}-search-suggestion-hint-searching-item`
					)
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
			changeHintULElementPosition(
				target = config.target ?? config.inputTarget
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
					targetRect = config.isAbsolute
						? popsDOMUtils.offset(target)
						: target.getBoundingClientRect();
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
					let searchSuggestionContainerHeight = popsDOMUtils.height(
						SearchSuggestion.$el.$hintULContainer
					);
					if (targetBottom + searchSuggestionContainerHeight > documentHeight) {
						// 在上面
						position = "top";
					} else {
						// 在下面
						position = "bottom";
						SearchSuggestion.$el.$hintULContainer.removeAttribute("data-top");
					}
				}
				if (position === "top") {
					if (config.positionTopToReverse) {
						SearchSuggestion.$el.$hintULContainer.setAttribute(
							"data-top-reverse",
							"true"
						);
					}
					// 在上面
					SearchSuggestion.$el.$hintULContainer.style.top = "";
					SearchSuggestion.$el.$hintULContainer.style.bottom =
						documentHeight - targetRect.top + config.topDistance + "px";
				} else if (position === "bottom") {
					// 在下面
					SearchSuggestion.$el.$hintULContainer.removeAttribute(
						"data-top-reverse"
					);
					SearchSuggestion.$el.$hintULContainer.style.bottom = "";
					SearchSuggestion.$el.$hintULContainer.style.top =
						targetRect.height + targetRect.top + config.topDistance + "px";
				}
				let hintUIWidth = popsDOMUtils.width(
					SearchSuggestion.$el.$hintULContainer
				);
				SearchSuggestion.$el.$hintULContainer.style.left =
					(targetRect.left + hintUIWidth > documentWidth
						? documentWidth - hintUIWidth
						: targetRect.left) + "px";
			},
			/**
			 * 更新搜索建议框的width
			 * 因为目标元素可能是动态隐藏的
			 */
			changeHintULElementWidth(target = config.target ?? config.inputTarget) {
				let targetRect = target.getBoundingClientRect();
				if (config.followTargetWidth) {
					SearchSuggestion.$el.$hintULContainer.style.width =
						targetRect.width + "px";
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
						let itemElement = SearchSuggestion.getSearchItemLiElement(
							item,
							index
						);
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
				this.$el.$hintULContainer.appendChild(
					popsUtils.parseTextToDOM(config.toSearhNotResultHTML)
				);
				if (config.toHideWithNotResult) {
					this.hide();
				}
			},
			/**
			 * 隐藏搜索建议框
			 */
			hide() {
				this.$el.root.style.display = "none";
			},
			/**
			 * 显示搜索建议框
			 */
			show() {
				this.$el.root.style.display = "";
			},
		};
		return SearchSuggestion;
	}
}
