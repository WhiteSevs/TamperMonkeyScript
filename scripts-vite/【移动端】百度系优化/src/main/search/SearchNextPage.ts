import { unsafeWindow } from "ViteGM";
import {
	DOMUtils,
	GM_Menu,
	addStyle,
	httpx,
	loadingView,
	log,
	utils,
} from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BaiduResultItem } from "./SearchResultItem";
import { SearchResultEveryOneSearch } from "./SearchResultEveryOneSearch";
import { CommonUtils } from "@/utils/CommonUtils";
import { BaiduRouter } from "@/router/BaiduRouter";

interface PageInfo {
	pageNum: number;
	pn: number;
	nextPageUrl: string;
}

interface NextPageInfo extends PageInfo {}
/**
 * 自动加载下一页
 */
const SearchNextPage = {
	/**
	 * 初始页面的信息
	 */
	initPageInfo: null as PageInfo | null,
	/**
	 * 本页的信息，自动跟随请求下一页更新数据
	 */
	pageInfo: null as any as PageInfo,
	/**
	 * 本页的下一页的信息
	 */
	nextPageInfo: null as NextPageInfo | null,
	/**
	 * 观察器
	 */
	intersectionObserver: null as unknown as IntersectionObserver,
	$el: {
		/**
		 * 结果项的容器元素
		 */
		get pageController() {
			return (
				document.querySelector<HTMLDivElement>("#page-controller") ||
				document.querySelector<HTMLDivElement>("#page-bd") ||
				// 问答页面的
				// https://m.baidu.com/sf/vsearch?pd=wenda_tab&tn=vsearch&pn=10&from=0&word=%E9%B2%8D%E9%B1%BC&sa=vs_np&ms=1&rqid=
				document.querySelector<HTMLElement>("b-superframe-body")
			);
		},
		/**
		 * 结果项元素，用来把结果元素一个个的添加到该元素内
		 */
		get results() {
			return (
				document.querySelector<HTMLElement>("#results")! ||
				document.querySelector<HTMLElement>("b-superframe-body .sfa-results")
			);
		},
	},
	init() {
		if (BaiduRouter.isSearchVSearch_note()) {
			// 笔记页面，有页面本身的加载下一页功能
			loadingView.hide();
			log.warn(
				"自动翻页：当前为笔记页面，禁用自动加载下一页功能，原因：该页面自带加载下一页功能"
			);
			return;
		}
		this.initPageLineCSS();
		CommonUtils.addBlockCSS(
			/* 隐藏分页控制器 */
			"#page-controller"
		);
		loadingView.initLoadingView(true);
		let $loadingViewPrev = this.$el.pageController;
		if ($loadingViewPrev) {
			DOMUtils.after($loadingViewPrev, loadingView.getLoadingViewElement());
		} else {
			log.error("自动翻页：未找到可以在后面插入加载中的元素");
			return;
		}
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
	 * 把参数pn转换为页码
	 * pn: 10
	 * pageNum: 2
	 * @param pn 10的倍数
	 */
	parseParamPnToPageNum(pn: number | string) {
		pn = parseInt(pn as string);
		if (isNaN(pn)) {
			throw new TypeError("pn参数解析失败");
		}
		let pageNum = pn / 10 + 1;
		return pageNum;
	},
	/**
	 * 把页码转为参数pn
	 * pageNum: 2
	 * pn: 10
	 * @param pageNum
	 */
	parsePageNumToParamPn(pageNum: number | string) {
		pageNum = parseInt(pageNum.toString());
		if (isNaN(pageNum)) {
			throw new TypeError("页码解析失败");
		}
		let pn = (pageNum - 1) * 10;
		return pn;
	},
	/**
	 * 解析分页控制器的元素的下一页信息
	 */
	parseNextPageInfoWithPageController(
		$doc: Document
	): NextPageInfo | undefined {
		let $nextPage = $doc.querySelector<HTMLAnchorElement>(".new-nextpage");
		let $nextPageOnly =
			$doc.querySelector<HTMLAnchorElement>(".new-nextpage-only");
		let nextPageUrl =
			$nextPage?.getAttribute("href") ||
			$nextPage?.getAttribute("data-sflink") ||
			$nextPageOnly?.getAttribute("href") ||
			$nextPageOnly?.getAttribute("data-sflink");
		if (nextPageUrl) {
			nextPageUrl = CommonUtils.fixUrl(nextPageUrl);
			let param_pn_match = new URL(nextPageUrl).searchParams;
			if (!param_pn_match.has("pn")) {
				log.warn("获取不到pn参数");
				return;
			}
			let param_pn = parseInt(param_pn_match.get("pn")!.toString());
			let pageNum = this.parseParamPnToPageNum(param_pn);
			return {
				pn: param_pn,
				pageNum: pageNum,
				nextPageUrl: this.fixNextPageUrl(nextPageUrl),
			};
		} else {
			log.warn("未获取到下一页按钮元素链接");
		}
		return;
	},
	/**
	 * 修复下一页的url
	 * 有时候获取到的下一页的url的hostname和当前页面的hostname不同
	 * 因为使用的fetch，不能跨域
	 * 所以需要把下一页的url的hostname替换成当前页面的hostname
	 */
	fixNextPageUrl(url: string) {
		let urlObj = new URL(url);
		let newUrl = url;
		if (urlObj.hostname !== window.location.hostname) {
			/* 修复下一页的链接在不同域名下，导致无法请求的问题 */
			/* 如：下一页是https://m.baidu.com/.... 当前页面是https://www.baidu.com 就会无法请求 */
			urlObj.hostname = window.location.hostname;
			newUrl = urlObj.toString();
			log.success("成功修复下一页的链接的不同域名：" + newUrl);
		}
		return newUrl;
	},
	/**
	 * 初始化获取本页的页码信息
	 */
	getInitPageInfo(): PageInfo | undefined {
		let initPageInfo = this.parseNextPageInfoWithPageController(document);
		if (initPageInfo) {
			// 因为获取到的是下一页的
			// 所以要把下一页的参数减掉
			if (initPageInfo.pageNum === 1) {
				return initPageInfo;
			}
			initPageInfo.pageNum -= 1;
			initPageInfo.pn -= 10;
			return initPageInfo;
		} else {
			// 未获取到下一页的元素控制台，可能被其它脚本删除了，例如：AC-baidu-重定向...
			if (typeof (unsafeWindow as any)?.page?.comm?.pn !== "number") {
				log.warn("page.comm.pn参数未定义");
				return;
			}
			if (typeof (unsafeWindow as any)?.page?.comm?.pageNum !== "number") {
				log.warn("page.comm.pageNum参数未定义");
				return;
			}
			let pn = (unsafeWindow as any).page.comm.pn;
			let pageNum = (unsafeWindow as any).page.comm.pageNum;
			let query =
				(unsafeWindow as any).page.comm.query ||
				(unsafeWindow as any).page.comm.prequery ||
				(unsafeWindow as any).page.comm.rawQuery;
			let nextPageObj = new URL(window.location.origin);
			nextPageObj.pathname = "/s";
			nextPageObj.searchParams.append(
				"from",
				(unsafeWindow as any).page.comm.from
			);
			nextPageObj.searchParams.append("ssid", "0");
			nextPageObj.searchParams.append("pn", pn + 10);
			nextPageObj.searchParams.append("usm", "");
			nextPageObj.searchParams.append("word", query);
			// nextPageObj.searchParams.append("rsv_pq", "");
			// nextPageObj.searchParams.append("rsv_t", "");
			// nextPageObj.searchParams.append("fqid", "");
			// nextPageObj.searchParams.append("gb", "");
			nextPageObj.searchParams.append("rtime", "");
			nextPageObj.searchParams.append("vfeed", "1024");
			nextPageObj.searchParams.append("sa", "np");
			// nextPageObj.searchParams.append("main_srcid", "");
			nextPageObj.searchParams.append("ms", "1");
			// nextPageObj.searchParams.append("rqid", "");
			nextPageObj.searchParams.append("params_ssrt", "node-san");
			// nextPageObj.searchParams.append("adid", "");
			nextPageObj.searchParams.append("suv", "");
			nextPageObj.searchParams.append("cv", "1.0.14");
			nextPageObj.searchParams.append("mod", "0");
			nextPageObj.searchParams.append("async", "1");
			let nextPageUrl = nextPageObj.toString();
			// let nextPageUrl =
			// 	window.location.origin +
			// 	(unsafeWindow as any).page.utils.buildSearchUrl(query, {
			// 		pn: pn + 10,
			// 	});
			return {
				pn: pn,
				pageNum: pageNum,
				nextPageUrl: this.fixNextPageUrl(nextPageUrl),
			};
		}
	},
	/**
	 * 添加第xx页的分割线
	 * @param num 分页
	 */
	appendLineDriver(num: number) {
		let currentResultsDOM = SearchNextPage.$el.results;
		currentResultsDOM.appendChild(SearchNextPage.getPageLineElement(num));
	},
	/**
	 * 滚动事件
	 * @async
	 */
	async scrollEvent() {
		if (this.initPageInfo == null) {
			// 先初始化获取本页信息
			let pageInfo = this.getInitPageInfo();
			if (!pageInfo) {
				log.warn("初始化失败，未获取到本页信息");
				SearchNextPage.removeNextPageLoadingObserver();
				return;
			}
			this.initPageInfo = null;
			this.initPageInfo = pageInfo;
			// 赋值当前页参数
			this.pageInfo = null as any;
			this.pageInfo = pageInfo;
			// 赋值下一页参数
			this.nextPageInfo = null as any;
			this.nextPageInfo = {
				pn: pageInfo.pn + 10,
				pageNum: pageInfo.pageNum + 1,
				nextPageUrl: pageInfo.nextPageUrl,
			};
		}
		if (this.nextPageInfo == null) {
			log.warn("不存在下一页，移除监听");
			SearchNextPage.removeNextPageLoadingObserver();
			return;
		}
		log.success(`当前第 ${this.pageInfo.pageNum} 页，pn：${this.pageInfo.pn}`);
		log.success(
			`请求第 ${this.nextPageInfo.pageNum} 页，pn：${this.nextPageInfo.pn}`
		);
		if (!this.nextPageInfo.nextPageUrl) {
			log.warn("获取不到下一页Url，怀疑已加载所有的搜索结果");
			SearchNextPage.removeNextPageLoadingObserver();
			return;
		}
		loadingView.setText("Loading...", true);
		let getResp = await httpx.get({
			url: this.nextPageInfo.nextPageUrl,
			fetch: true,
			allowInterceptConfig: false,
		});
		let respData = getResp.data;
		if (getResp.status) {
			log.success("响应的finalUrl: " + respData["finalUrl"]);
			let nextPageDoc = DOMUtils.parseHTML(
				respData.responseText,
				true,
				true
			) as Document;
			// 解析下一页的<script>标签内的数据，（获取某些项的真实链接）
			let scriptAtomData = DOMUtils.createElement("div");
			nextPageDoc.querySelectorAll("script[id^=atom-data]").forEach((item) => {
				scriptAtomData.appendChild(item);
			});
			let nextPageScriptOriginUrlMap =
				BaiduResultItem.parseScriptDOMOriginUrlMap(scriptAtomData);
			BaiduResultItem.originURLMap.concat(nextPageScriptOriginUrlMap);
			// 将下一页的样式插入到当前页面
			nextPageDoc.querySelectorAll("style[data-vue-ssr-id]").forEach((item) => {
				/* 插入vue打包的css需重新引入 */
				let dataVueSsrId = "data-vue-ssr-id";
				let dataVueSsrIdValue = item.getAttribute(dataVueSsrId) as string;
				if (
					utils.isNull(dataVueSsrIdValue) ||
					!document.querySelector(
						`style[data-vue-ssr-id="${dataVueSsrIdValue}"]`
					)
				) {
					let cssDOM = addStyle(item.innerHTML);
					cssDOM.setAttribute("data-vue-ssr-id", dataVueSsrIdValue);
					log.info(["插入Vue的CSS", cssDOM]);
				}
			});
			// 解析下一页的搜索结果项
			let searchResultDOM = nextPageDoc.querySelectorAll(".c-result");
			// 解析下一页的下一页地址的容器（用于判断是否需要请求下下一页）
			let nextPageControllerDOM =
				nextPageDoc.querySelector<HTMLElement>("#page-controller") ||
				nextPageDoc.querySelector<HTMLElement>(".vsearch-page-controller");
			// 当前页面的搜索结果容器
			let currentResultsDOM = SearchNextPage.$el.results;
			if (nextPageControllerDOM) {
				/* 添加显示当前是第xx页的分割项 */
				this.appendLineDriver(this.pageInfo.pageNum);
				/* 每一条搜索结果拼接在后面 */
				let nextPageSearchResultFragment = document.createDocumentFragment();
				searchResultDOM.forEach((item) => {
					nextPageSearchResultFragment.appendChild(item);
				});
				// 把下一页的搜索结果添加到页面中
				currentResultsDOM.appendChild(nextPageSearchResultFragment);

				if (PopsPanel.getValue("baidu_search_sync_next_page_address")) {
					window.history.pushState(
						"forward",
						"",
						this.nextPageInfo.nextPageUrl
					);
				}
				/* 处理下一页的【大家还在搜】 */
				if (SearchResultEveryOneSearch.refactorEveryoneIsStillSearching) {
					SearchResultEveryOneSearch.handleBottom(
						Array.from(nextPageDoc.querySelectorAll("#page-relative"))
					);
				}
				// 解析下下一页的页码信息
				let nextNextPageInfo =
					this.parseNextPageInfoWithPageController(nextPageDoc);
				if (nextNextPageInfo) {
					log.info(["请求的页信息：", this.nextPageInfo]);
					log.info(["请求的页解析出的下一页信息：", nextNextPageInfo]);
					if (nextNextPageInfo.pageNum > this.nextPageInfo.pageNum) {
						let nextPageInfo = this.nextPageInfo;

						this.pageInfo = null as any;
						this.nextPageInfo = null;

						this.pageInfo = nextPageInfo;
						this.nextPageInfo = nextNextPageInfo;
					} else {
						let nextPageInfo = this.nextPageInfo;

						this.pageInfo = null as any;
						this.nextPageInfo = null;

						this.pageInfo = nextPageInfo;

						log.warn("下下一页的页码<=当前页码，取消监听");
						SearchNextPage.removeNextPageLoadingObserver();
					}
				} else {
					let nextPageInfo = this.nextPageInfo;
					this.pageInfo = null as any;
					this.nextPageInfo = null;

					this.pageInfo = nextPageInfo;
					log.warn("获取不到下下一页的页码，怀疑已经加载全部结果");
					SearchNextPage.removeNextPageLoadingObserver();
					this.appendLineDriver(this.pageInfo.pageNum);
				}
			} else {
				log.info("已加载所有的搜索结果");
				SearchNextPage.removeNextPageLoadingObserver();
			}
		} else if (getResp.type === "onerror") {
			if (utils.isNull(this.nextPageInfo.nextPageUrl)) {
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
		addStyle(/*css*/ `
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
			innerHTML: /*html*/ `
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
