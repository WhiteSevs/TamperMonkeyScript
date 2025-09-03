import { addStyle, DOMUtils, httpx, log, utils } from "@/env";
import searchToolBarCSS from "./search-toolbar.css?raw";
import { Panel } from "@components/setting/panel";
import { GestureBack } from "@components/utils/GestureBack";

export const BaiduSearchToolBar = {
	$el: {
		/** 搜索框总容器 */
		$container: null as any as HTMLElement,
		shadowRoot: null as any as ShadowRoot,
		$toolbarContainer: null as any as HTMLDivElement,
		/** 搜索框容器 */
		$toolbar: null as any as HTMLDivElement,
		/** 提交表单 */
		$form: null as any as HTMLFormElement,
		/** 输入框 */
		$input: null as any as HTMLInputElement,
		/** 搜索建议 */
		$suggestion: null as any as HTMLDivElement,
		/** 返回按钮 */
		$back: null as any as HTMLDivElement,
		/** 清空图标 */
		$empty: null as any as HTMLDivElement,
		/** 搜索按钮 */
		$submit: null as any as HTMLButtonElement,
	},
	$data: {
		gestureBack: new GestureBack({
			hash: "global-search",
			beforeHistoryBackCallBack(isUrlChange) {
				BaiduSearchToolBar.hideToolBar();
			},
		}),
	},
	init() {
		DOMUtils.ready(() => {
			this.addFloatButton();
			this.addToolBar();
		});
	},
	/**
	 * 添加悬浮搜索按钮
	 */
	addFloatButton() {
		let $btn = DOMUtils.createElement("div", {
			className: "gm-search-toolbar-float-btn",
			innerHTML: /*html*/ `
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EFF9FE" d="M478.12 64.88h67.76c103.54-5.49 241.95 13.46 317.81 94.93 81.48 75.86 100.42 214.27 94.94 317.81v67.76c5.48 103.54-13.45 241.95-94.94 317.81-75.86 81.49-214.27 100.42-317.81 94.94h-67.76c-103.54 5.48-241.95-13.45-317.81-94.94-81.48-75.86-100.42-214.27-94.93-317.81v-67.76c-5.48-103.54 13.45-241.95 94.94-317.81 75.85-81.48 214.26-100.42 317.8-94.93z" fill="#56B9F1" p-id="43986"></path><path d="M552.89 392.04c21.84 17.58 35.84 44.49 35.84 74.71 0 2.16-0.18 4.27-0.32 6.39H397.23c-0.14-2.12-0.32-4.24-0.32-6.39 0-30.96 14.73-58.41 37.49-75.95l-11.06-17.62c-1.77-2.81-0.72-6.41 2.34-8.03 3.06-1.62 6.97-0.66 8.73 2.15l10.37 16.52c14.14-8.21 30.51-12.98 48.03-12.98 18.15 0 35.06 5.13 49.53 13.89l8.88-15.38c1.77-3.06 5.68-4.11 8.73-2.34 3.06 1.77 4.11 5.68 2.34 8.73l-9.4 16.3z m-92.04 36.34c-7.06 0-12.79 5.73-12.79 12.79s5.73 12.79 12.79 12.79 12.79-5.73 12.79-12.79-5.73-12.79-12.79-12.79z m63.94 0c-7.06 0-12.79 5.73-12.79 12.79s5.73 12.79 12.79 12.79c7.06 0 12.79-5.73 12.79-12.79s-5.73-12.79-12.79-12.79z m-31.97 134.28c-46.4 0-85.1-32.95-93.99-76.73H586.8c-8.88 43.77-47.58 76.73-93.98 76.73z" fill="#EFF9FE" p-id="43987"></path><path d="M736.53 704.11c-15.9 15.91-41.68 15.91-57.58 0l-74.87-74.9c-79.04 52.39-186.58 43.76-256.22-25.91-79.5-79.54-79.5-208.5 0-288.03 79.5-79.54 208.4-79.54 287.9 0 69.64 69.67 78.26 177.25 25.9 256.33l74.87 74.9c15.9 15.91 15.9 41.7 0 57.61zM582.99 368.07c-50.35-50.37-131.98-50.37-182.33 0s-50.35 132.05 0 182.42c50.35 50.37 131.98 50.37 182.33 0 50.35-50.37 50.35-132.04 0-182.42z">
                </path>
            </svg>
            `,
		});
		DOMUtils.on($btn, "click", (event) => {
			utils.preventEvent(event);
			this.showToolBar();
			this.initDefaultSearchText();
			setTimeout(() => {
				this.$el.$input.focus();
				this.$el.$input.select();
			}, 150);

			Panel.execMenu("baidu-search-global-searchToolBar-gesture-back", () => {
				// 手势返回
				this.$data.gestureBack.enterGestureBackMode();
			});
		});

		addStyle(/*css*/ `
        .gm-search-toolbar-float-btn {
            --gm-search-toolbar-icon-size: 45px;
            position: fixed;
            bottom: 20px;
            right: 15px;
            width: var(--gm-search-toolbar-icon-size);
            height: var(--gm-search-toolbar-icon-size);
            z-index: 9000;
        }

        `);
		document.body.appendChild($btn);
		return $btn;
	},
	/**
	 * 添加搜索工具栏
	 */
	addToolBar() {
		let $toolbarInner = DOMUtils.createElement("div");
		$toolbarInner.className = "gm-search-toolbar";
		// 使用shadow
		$toolbarInner.attachShadow({ mode: "open" });
		let shadowRoot = $toolbarInner.shadowRoot!;
		this.$el.$container = $toolbarInner;
		this.$el.shadowRoot = shadowRoot;

		// 添加css
		let $css = DOMUtils.createElement("style", {
			innerHTML: searchToolBarCSS,
		});
		shadowRoot.appendChild($css);

		// container
		let $container = DOMUtils.createElement("div", {
			className: "search-toolbar-container",
			innerHTML: /*html*/ `
            <div class="search-toolbar-inner">                
                <div class="search-suggestion"></div>
                <div class="search-toolbar">
                    <i class="search-icon search-toolbar-back">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M738.845554 1024c-15.975039 0-31.950078-6.390016-44.730109-19.170047L243.619345 554.333853c-22.365055-22.365055-22.365055-63.900156 0-86.26521L694.115445 19.170047c22.365055-22.365055 63.900156-25.560062 86.26521-3.195008 22.365055 22.365055 25.560062 63.900156 3.195008 86.265211l-3.195008 3.195007-405.76599 404.168487 405.76599 408.960999c22.365055 22.365055 22.365055 63.900156 0 86.26521-12.780031 12.780031-25.560062 19.170047-41.535101 19.170047z"></path>
                        </svg>
                    </i>
                    <form class="search-form" autocomplete="off">
                        <input class="search-toolbar-input" type="search" placeholder="搜索内容" autocomplete="off" autocorrect="off">
                        <div class="search-toolbar-input-inner">
                            <i class="search-icon search-toolbar-empty">
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 0C229.2736 0 0 229.2736 0 512s229.2736 512 512 512 512-229.2736 512-512S794.7264 0 512 0z m248.832 670.4128c24.8832 24.8832 24.8832 65.6384 0 90.5216-24.8832 24.9856-65.6384 24.8832-90.5216 0L512 602.5216 353.5872 760.9344c-24.8832 24.8832-65.6384 24.8832-90.5216 0-24.9856-24.8832-24.8832-65.6384 0-90.5216L421.4784 512 263.0656 353.5872c-24.8832-24.8832-24.8832-65.6384 0-90.5216 24.8832-24.9856 65.6384-24.8832 90.5216 0L512 421.4784l158.4128-158.4128c24.8832-24.8832 65.6384-24.8832 90.5216 0 24.9856 24.8832 24.8832 65.6384 0 90.5216L602.5216 512 760.832 670.4128z"></path>
                                </svg>
                            </i>
                            <button type="submit" class="search-form-submit" disabled="true">
                                <span>搜索</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            `,
		});
		this.$el.$toolbarContainer = $container;
		this.$el.$toolbar = $container.querySelector<HTMLDivElement>(".search-toolbar")!;
		this.$el.$input = $container.querySelector<HTMLInputElement>(".search-toolbar-input")!;
		this.$el.$form = $container.querySelector<HTMLFormElement>(".search-form")!;
		this.$el.$suggestion = $container.querySelector<HTMLDivElement>(".search-suggestion")!;
		this.$el.$back = $container.querySelector<HTMLDivElement>(".search-toolbar-back")!;
		this.$el.$empty = $container.querySelector<HTMLDivElement>(".search-toolbar-empty")!;
		this.$el.$submit = $container.querySelector<HTMLButtonElement>(".search-form-submit")!;

		shadowRoot.appendChild($container);
		// 添加到页面
		this.hideToolBar();
		document.body.appendChild($toolbarInner);
		this.setInputEvent();
		this.setEmptyEvent();
		this.setBackEvent();
		this.setFormEvent();
	},
	/**
	 * 显示搜索工具栏
	 */
	showToolBar() {
		this.$el.$toolbarContainer.style.opacity = "";
		this.$el.$toolbarContainer.style.visibility = "";
	},
	/**
	 * 隐藏搜索工具栏
	 */
	hideToolBar() {
		this.$el.$toolbarContainer.style.opacity = "0";
		this.$el.$toolbarContainer.style.visibility = "hidden";
	},
	/**
	 * 获取当前页面搜索的关键字
	 */
	getPageSearchText() {
		let searchParams = new URLSearchParams(window.location.search);
		let searchText = searchParams.get("word") || searchParams.get("wd");
		return searchText!;
	},
	/**
	 * 获取搜索建议内容
	 * @param text 搜索内容
	 */
	async getSuggestionText(text: string) {
		let searchParamData = {
			json: 1,
			prod: "wise",
			callback: "baidusug",
			wd: text,
		};
		let allowApiHostName = ["m.baidu.com", "www.baidu.com"];
		let apiHostName = "m.baidu.com";
		let useFetch = true;
		if (allowApiHostName.includes(window.location.hostname)) {
			apiHostName = window.location.hostname;
		} else {
			useFetch = false;
		}
		let response = await httpx.get(
			`https://${apiHostName}/sugrec?${utils.toSearchParamsStr(searchParamData)}`,
			{
				fetch: useFetch,
				allowInterceptConfig: false,
			}
		);
		if (!response.status) {
			log.error("获取百度搜索建议失败", response);
			return;
		}
		let suggestion = response.data.responseText.replace(/^baidusug\(/, "").replace(/\)$/, "");
		let suggestionJSON = utils.toJSON(suggestion) as {
			g: {
				q: string;
				sa: string;
				type: string;
			}[];
			p: boolean;
			q: string;
			queryid: string;
			slid: string;
		};
		log.info(`百度搜索联想词：`, suggestionJSON);
		return suggestionJSON.g || [];
	},
	/**
	 * 初始化当前页面默认的搜索关键字
	 */
	initDefaultSearchText() {
		let searchText = this.getPageSearchText();
		this.setInputText(searchText);
	},
	/**
	 * 监听输入框内容改变
	 */
	setInputEvent() {
		DOMUtils.on(this.$el.$input, ["input", "propertychange"], (event) => {
			// 判断是否为空，动态修改图标显示和颜色
			if (this.$el.$input.value === "") {
				// 空的
				this.clearSuggestion();
				this.$el.$empty.style.display = "none";
				this.$el.$submit.setAttribute("disabled", "true");
			} else {
				// 非空
				this.$el.$empty.style.display = "";
				this.$el.$submit.removeAttribute("disabled");
			}
		});
		DOMUtils.on(
			this.$el.$input,
			["input", "propertychange"],
			utils.debounce(async () => {
				let searchText = this.$el.$input.value;
				if (searchText === "") {
					return;
				}
				let suggestionList = await this.getSuggestionText(searchText);
				if (Array.isArray(suggestionList) && suggestionList.length) {
					// 清空搜索结果
					this.clearSuggestion();
					// if (searchText.trim() !== "") {
					// 	this.addSuggestionItem(
					// 		this.createSuggestionItem({
					// 			searchText: searchText,
					// 			suggestionText: searchText,
					// 			isHistory: true,
					// 		})
					// 	);
					// }
					suggestionList.forEach((item) => {
						if (item.type === "sug") {
							this.addSuggestionItem(
								this.createSuggestionItem({
									searchText: searchText,
									suggestionText: item.q,
									isHistory: false,
								})
							);
						}
					});
				}
			}, 50)
		);
	},
	/**
	 * 设置搜索文本内容
	 * @param text 搜索关键字
	 * @param triggerEvent 是否触发事件
	 * @default true
	 */
	setInputText(text: string, triggerEvent: boolean = true) {
		this.$el.$input.value = text;
		if (triggerEvent) {
			utils.dispatchEvent(this.$el.$input, "input");
		}
	},
	/**
	 * 设置返回按钮点击事件
	 */
	setBackEvent() {
		DOMUtils.on(this.$el.$back, "click", (event) => {
			utils.preventEvent(event);
			log.success("点击返回");
			this.hideToolBar();
			Panel.execMenu("baidu-search-global-searchToolBar-gesture-back", () => {
				// 退出手势模式
				this.$data.gestureBack.quitGestureBackMode();
			});
		});
	},
	/**
	 * 设置清空图标点击事件
	 */
	setEmptyEvent() {
		DOMUtils.on(this.$el.$empty, "click", (event) => {
			utils.preventEvent(event);
			this.setInputText("");
		});
	},
	/**
	 * 设置表单事件
	 */
	setFormEvent() {
		DOMUtils.on(this.$el.$form, "submit", (event) => {
			utils.preventEvent(event);
			let searchText = this.$el.$input.value;
			log.success("提交表单 搜索 ==> " + searchText);
			window.location.href = `${window.location.origin}/s?word=${searchText}`;
		});
	},
	/**
	 * 创建搜索建议元素项
	 */
	createSuggestionItem(config: {
		/** 搜索的关键字  */
		searchText: string;
		/** 搜索建议文本 */
		suggestionText: string;
		/** 是否是历史输入 */
		isHistory: boolean;
	}) {
		let $suggestionItem = DOMUtils.createElement("div", {
			className: "search-suggestion-item",
			innerHTML: /*html*/ `
            <div class="search-suggestion-item-left-icon">
                <i class="search-icon">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M495.25 310.62c-106.67 0-193.14 86.47-193.14 193.14S388.58 696.9 495.25 696.9s193.14-86.47 193.14-193.14-86.48-193.14-193.14-193.14z m0-64.37c142.22 0 257.52 115.29 257.52 257.52 0 59.51-20.18 114.3-54.08 157.9l66.96 66.72c12.59 12.55 12.63 32.93 0.08 45.52-12.55 12.59-32.93 12.63-45.52 0.08l-67.05-66.78c-43.61 33.89-98.4 54.08-157.9 54.08-142.22 0-257.52-115.29-257.52-257.52s115.29-257.52 257.51-257.52z"></path>
                    </svg>
                </i>
            </div>
            <div class="search-suggestion-item-text"></div>
            <div class="search-suggestion-item-right-icon">
                <i class="search-icon">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M755.498667 268.501333a42.666667 42.666667 0 0 1 0 60.330667L401.664 682.666667H640a42.666667 42.666667 0 1 1 0 85.333333H298.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V384a42.666667 42.666667 0 1 1 85.333333 0v238.336l353.834667-353.834667a42.666667 42.666667 0 0 1 60.330667 0z"></path>
                    </svg>
                </i>
            </div>
            `,
		});
		let $leftIcon = $suggestionItem.querySelector<HTMLDivElement>(".search-suggestion-item-left-icon")!;
		let $leftIconI = $leftIcon.querySelector<HTMLElement>(".search-icon")!;
		let $text = $suggestionItem.querySelector<HTMLDivElement>(".search-suggestion-item-text")!;
		let $rightIcon = $suggestionItem.querySelector<HTMLDivElement>(".search-suggestion-item-right-icon")!;
		if (config.isHistory) {
			// 切换图标为历史
			$leftIconI.innerHTML = /*html*/ `
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style="
                width: 18px;
                height: 18px;
            ">
                <path d="M512 117.333333c217.962667 0 394.666667 176.704 394.666667 394.666667S729.962667 906.666667 512 906.666667 117.333333 729.962667 117.333333 512 294.037333 117.333333 512 117.333333z m0 64C329.386667 181.333333 181.333333 329.386667 181.333333 512c0 182.613333 148.053333 330.666667 330.666667 330.666667 182.613333 0 330.666667-148.053333 330.666667-330.666667 0-182.613333-148.053333-330.666667-330.666667-330.666667z m0 85.333334a32 32 0 0 1 32 32v200.085333l118.613333 118.613333a32 32 0 0 1-45.226666 45.269334l-128-128A32 32 0 0 1 480 512V298.666667a32 32 0 0 1 32-32z"></path>
            </svg>
            `;
		}
		// 处理搜索关键字灰色
		let searchText = config.suggestionText.replaceAll(config.searchText, `<em>${config.searchText}</em>`);
		$text.innerHTML = searchText;
		DOMUtils.on($leftIcon, "click", (event) => {
			utils.preventEvent(event);
		});
		// 搜索建议点击事件
		DOMUtils.on($text, "click", (event) => {
			utils.preventEvent(event);
			this.setInputText(config.suggestionText, false);
			this.$el.$submit.click();
		});
		DOMUtils.on($rightIcon, "click", (event) => {
			utils.preventEvent(event);
			this.setInputText(config.suggestionText);
		});
		return $suggestionItem;
	},
	/**
	 * 清除搜索建议
	 */
	clearSuggestion() {
		this.$el.$suggestion.innerHTML = "";
	},
	/**
	 * 添加搜索建议
	 */
	addSuggestionItem($ele: HTMLElement) {
		this.$el.$suggestion.appendChild($ele);
	},
};
