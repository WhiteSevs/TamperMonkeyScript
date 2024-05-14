import { GM_addStyle } from "ViteGM";
import { DOMUtils, GM_Menu, httpx, loadingView, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BaiduResultItem } from "./SearchResultItem";
import { SearchResultEveryOneSearch } from "./SearchResultEveryOneSearch";

/**
 * 自动加载下一页
 */
const SearchNextPage = {
	/**
	 * 当前页
	 */
	currentPage: 1,
	/**
	 * 观察器
	 */
	intersectionObserver: null as unknown as IntersectionObserver,
	init() {
		this.initPageLineCSS();
		loadingView.initLoadingView(true);
		DOMUtils.after(
			document.querySelector("#page-controller") as HTMLElement,
			loadingView.getLoadingViewElement()
		);
		this.setNextPageLoadingObserver();
	},
	/**
	 * 设置滚动事件
	 */
	setNextPageLoadingObserver() {
		let isLoadingNextPage = false;
		if (typeof IntersectionObserver === "undefined") {
			log.success("监听滚动: scroll");
			DOMUtils.on(
				document,
				"scroll",
				void 0,
				async () => {
					if (isLoadingNextPage) {
						return;
					}
					if (!utils.isNearBottom(window.innerHeight / 3)) {
						return;
					}
					isLoadingNextPage = true;
					await this.scrollEvent();
					await utils.sleep(150);
					isLoadingNextPage = false;
				},
				{
					capture: true,
					passive: true,
					once: false,
				}
			);
		} else {
			log.success("监听滚动: IntersectionObserver");
			this.intersectionObserver = new IntersectionObserver(
				async (entries) => {
					if (!isLoadingNextPage && entries[0].isIntersecting) {
						isLoadingNextPage = true;
						await this.scrollEvent();
						isLoadingNextPage = false;
					}
				},
				{ threshold: 0 }
			);
			this.intersectionObserver.observe(
				loadingView.loadingViewElement as Element
			);
		}
	},
	/**
	 * 移除滚动事件
	 */
	removeNextPageLoadingObserver() {
		if (typeof IntersectionObserver === "undefined") {
			DOMUtils.off(
				document,
				"scroll",
				void 0,
				void 0,
				{
					capture: true,
				},
				(value) => {
					return value.originCallBack.toString().includes("isLoadingNextPage");
				}
			);
			loadingView.destory();
			log.info("取消监听滚动: scroll", "#f400ff");
		} else {
			this.intersectionObserver.disconnect();
			// @ts-ignore
			this.intersectionObserver = null;
			loadingView.destory();
			log.info("取消监听滚动: IntersectionObserver", "#f400ff");
		}
	},
	/**
	 * 滚动事件
	 * @async
	 */
	async scrollEvent() {
		log.success(`正在加载第 ${SearchNextPage.currentPage} 页`);
		let nextPageUrl =
			document.querySelector(".new-nextpage")?.getAttribute("href") ||
			document.querySelector(".new-nextpage-only")?.getAttribute("href");
		if (!nextPageUrl) {
			log.warn("获取不到下一页，怀疑已加载所有的搜索结果");
			SearchNextPage.removeNextPageLoadingObserver();
			return;
		}
		let params_pn = new URL(nextPageUrl).search.match(/[0-9]+/);
		if (params_pn == null) {
			log.warn("获取不到pn参数");
			return;
		}
		let pn = parseInt(params_pn[0]);
		log.info(
			`正在请求${
				params_pn.length === 0 ? "第 10 条" : "第 " + pn + " 条"
			}数据: ${nextPageUrl}`
		);
		SearchNextPage.currentPage = parseInt((pn / 10).toString());
		loadingView.setText("Loading...", true);
		let nextPageUrlObj = new URL(nextPageUrl);
		if (nextPageUrlObj.hostname !== window.location.hostname) {
			/* 修复下一页的链接在不同域名下，导致无法请求的问题 */
			/* 如：下一页是https://m.baidu.com/.... 当前页面是https://www.baidu.com 就会无法请求 */
			nextPageUrl = nextPageUrl.replace(
				new RegExp(`^${nextPageUrlObj.origin}`),
				window.location.origin
			);
			log.success("修复下一页的链接的不同域名：" + nextPageUrl);
		}
		let getResp = await httpx.get({
			url: nextPageUrl,
			fetch: true,
		});
		let respData = getResp.data;
		if (getResp.status) {
			log.success("响应的finalUrl: " + respData["finalUrl"]);
			let nextPageHTMLNode = DOMUtils.parseHTML(
				respData.responseText,
				true,
				true
			) as Document;
			let scriptAtomData = DOMUtils.createElement("div");
			nextPageHTMLNode
				.querySelectorAll("script[id^=atom-data]")
				.forEach((item) => {
					scriptAtomData.appendChild(item);
				});
			let nextPageScriptOriginUrlMap =
				BaiduResultItem.parseScriptDOMOriginUrlMap(scriptAtomData);
			BaiduResultItem.originURLMap.concat(nextPageScriptOriginUrlMap);

			nextPageHTMLNode
				.querySelectorAll("style[data-vue-ssr-id]")
				.forEach((item) => {
					/* 插入vue打包的css需重新引入 */
					let dataVueSsrId = "data-vue-ssr-id";
					let dataVueSsrIdValue = item.getAttribute(dataVueSsrId) as string;
					if (
						utils.isNull(dataVueSsrIdValue) ||
						!document.querySelector(
							`style[data-vue-ssr-id="${dataVueSsrIdValue}"]`
						)
					) {
						let cssDOM = GM_addStyle(item.innerHTML);
						cssDOM.setAttribute("data-vue-ssr-id", dataVueSsrIdValue);
						log.info(["插入Vue的CSS", cssDOM]);
					}
				});

			let searchResultDOM =
				nextPageHTMLNode.querySelectorAll(".c-result.result");
			let nextPageControllerDOM =
				nextPageHTMLNode.querySelector("#page-controller");
			let currentResultsDOM = document.querySelector("#results") as HTMLElement;
			if (nextPageControllerDOM) {
				/* 用于划分显示分页 */
				currentResultsDOM.appendChild(
					SearchNextPage.getPageLineElement(SearchNextPage.currentPage)
				);
				/* 每一条搜索结果拼接在后面 */
				searchResultDOM.forEach((item) => {
					currentResultsDOM.appendChild(item);
				});
				DOMUtils.html(
					document.querySelector("#page-controller") as HTMLElement,
					nextPageControllerDOM.innerHTML
				);
			} else {
				log.info("已加载所有的搜索结果");
				SearchNextPage.removeNextPageLoadingObserver();
			}
			if (PopsPanel.getValue("baidu_search_sync_next_page_address")) {
				window.history.pushState("forward", "", nextPageUrl);
			}
			/* 处理下一页的【大家还在搜】 */
			if (SearchResultEveryOneSearch.refactorEveryoneIsStillSearching) {
				SearchResultEveryOneSearch.handleBottom(
					Array.from(nextPageHTMLNode.querySelectorAll("#page-relative"))
				);
			}
		} else if (getResp.type === "onerror") {
			if (utils.isNull(nextPageUrl)) {
				log.error("未获取到下一页的url");
			} else {
				log.error("加载失败 👇");
				loadingView.setText("加载失败");
			}
			log.error(respData);
		} else if (getResp.type === "ontimeout") {
			log.error("请求超时 👇");
			loadingView.setText("请求超时");
			log.error(respData);
		} else {
			log.error("未知错误");
			loadingView.setText("未知错误");
			log.error(respData);
		}
	},
	/**
	 * 初始化页码的CSS
	 */
	initPageLineCSS() {
		log.info("初始化页码的CSS");
		GM_addStyle(`
        .whitesev-page-info{-webkit-tap-highlight-color:transparent}
        .whitesev-page-info .whitesev-new-pagenav{display:block;width:auto;color:#333;z-index:1;font-weight:700;text-decoration:none;position:relative;height:52px;line-height:52px}
        .whitesev-page-info .whitesev-new-pagenav{margin:.08rem;background:#fff;word-wrap:break-word;border:0;border-radius:.06rem;text-align:center;text-align:-webkit-center}
        .whitesev-page-info p::before{content:"第";margin-right:10px}
        .whitesev-page-info p::after{content:"页";margin-left:10px}
        `);
	},
	/**
	 * 获取自定义页码元素
	 * @param pageText 页码
	 */
	getPageLineElement(pageText: string | number) {
		return DOMUtils.createElement("div", {
			className: "whitesev-page-info result-op",
			innerHTML: `
            <div class="whitesev-new-pagenav">
                <p>${pageText}</p>
            </div>`,
		});
	},
};

/**
 * 简单UA-自动点击下一页
 */
const SearchNextPage_SearchCraft = {
	/**
	 * 观察器
	 */
	intersectionObserver: null as unknown as IntersectionObserver,
	init() {
		let isSearchCraft = navigator.userAgent.includes("SearchCraft");
		log.success(
			`判断是否是SearchCraft：${
				isSearchCraft
					? GM_Menu.getEnableTrueEmoji()
					: GM_Menu.getEnableFalseEmoji()
			}`
		);
		if (isSearchCraft) {
			this.setNextPageInterSectionObserver();
		}
	},
	/**
	 * 设置滚动事件
	 */
	setNextPageInterSectionObserver() {
		let isLoadingNextPage = false;
		let nextPageElement = document.querySelector(
			".infinite-load-wrap .se-infiniteload-text"
		);
		if (typeof IntersectionObserver === "undefined") {
			log.success("SearchCraft监听滚动: scroll");
			DOMUtils.on(
				document,
				"scroll",
				void 0,
				async () => {
					if (isLoadingNextPage) {
						return;
					}
					if (!utils.isNearBottom(window.innerHeight / 3)) {
						return;
					}
					isLoadingNextPage = true;
					nextPageElement = document.querySelector(
						".infinite-load-wrap .se-infiniteload-text"
					);
					await this.scrollEvent(nextPageElement as HTMLDivElement);
					await utils.sleep(150);
					isLoadingNextPage = false;
				},
				{
					capture: true,
					passive: true,
					once: false,
				}
			);
		} else {
			log.success("SearchCraft监听滚动: IntersectionObserver");
			this.intersectionObserver = new IntersectionObserver(
				async (entries) => {
					if (!isLoadingNextPage && entries[0].isIntersecting) {
						isLoadingNextPage = true;
						await this.scrollEvent(entries[0].target as HTMLDivElement);
						isLoadingNextPage = false;
					}
				},
				{ threshold: 0 }
			);
			this.intersectionObserver.observe(nextPageElement as HTMLElement);
		}
	},
	/**
	 * 移除滚动事件
	 */
	removeNextPageInterSectionObserver() {
		if (typeof IntersectionObserver === "undefined") {
			DOMUtils.off(
				document,
				"scroll",
				void 0,
				void 0,
				{
					capture: true,
				},
				(value) => {
					return value.originCallBack.toString().includes("isLoadingNextPage");
				}
			);
			log.info("SearchCraft取消监听滚动: scroll", "#f400ff");
		} else {
			this.intersectionObserver?.disconnect();
			// @ts-ignore
			this.intersectionObserver = null;
			log.info("SearchCraft取消监听滚动: IntersectionObserver", "#f400ff");
		}
	},
	/**
	 * 滚动事件
	 * @async
	 */
	async scrollEvent(nextPageElement: HTMLElement) {
		let elementText = nextPageElement.textContent || nextPageElement.innerText;
		if (elementText.includes("更多结果")) {
			log.success("点击【更多结果】");
			nextPageElement.click();
			await utils.sleep(500);
		} else if (elementText.includes("到底了 没有更多内容了")) {
			log.error("到底了 没有更多内容了，移除滚动监听");
			SearchNextPage_SearchCraft.removeNextPageInterSectionObserver();
		}
	},
};

export { SearchNextPage as SearchNextPage, SearchNextPage_SearchCraft };
