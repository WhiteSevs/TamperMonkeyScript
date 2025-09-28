import { $, DOMUtils, addStyle, httpx, log, pops, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { LoadingView } from "@/utils/LoadingView";
import { TiebaCore } from "./TiebaCore";
import Qmsg from "qmsg";
import { TiebaBaNei } from "./ba-nei/TiebaBaNei";
import { CommonUtil } from "@components/utils/CommonUtil";
import { TieBaApi } from "./api/TiebaApi";
import { TiebaUrlHandler } from "./handler/TiebaUrlHandler";
import { BaiduRouter } from "@/router/BaiduRouter";
import type { PopsSearchSuggestionData } from "@whitesev/pops/dist/types/src/components/searchSuggestion/types";

interface SearchResultInfo {
  url: string;
  title: string;
  content: string;
  forum: string | null;
  author: string;
  authorHomeUrl: string;
  time: string | null;
  media: string[];
}

const TiebaSearchSuggestion = {
  $data: {
    searchSuggestion: null as unknown as any,
    currentSearchText: "",
  },
  $ele: {
    /**
     * 输入框
     */
    $searchInput: null as unknown as HTMLInputElement,
  },
  init($input: HTMLInputElement) {
    this.$ele.$searchInput = $input;
    this.initSearchSuggestion();
    let $oldMoreBtnDesc = $<HTMLElement>(".more-btn-desc")!;
    DOMUtils.on($oldMoreBtnDesc, "click", () => {
      this.enterSeachMode();
    });
    DOMUtils.on(TiebaSearch.$ele.$searchBtn, "click", () => {
      this.frontPageSeach();
    });
    DOMUtils.listenKeyboard(this.$ele.$searchInput, "keypress", (keyName) => {
      if (keyName !== "Enter") {
        return;
      }
      this.frontPageSeach();
    });
    DOMUtils.on(TiebaSearch.$ele.$navSearchBack, "click", function () {
      TiebaSearch.quitSearchMode();
    });
  },
  /**
   * 进入搜索模式
   */
  enterSeachMode() {
    DOMUtils.hide(TiebaSearch.$ele.$selectWrapper);
    TiebaSearch.showSearchContainer();
    // 自动获取焦点
    setTimeout(() => {
      this.$ele.$searchInput.focus();
    }, 20);
  },
  /**
   * 退出搜索模式
   */
  quiteSearchMode() {
    TiebaSearch.hideSearchContainer();
  },
  /**
   * 获取搜索内容
   */
  getSearchText() {
    return this.$ele.$searchInput.value.trim();
  },
  /**
   * 帖子外搜索(也就是首页搜索吧)
   */
  frontPageSeach() {
    log.success("当前是在首页");
    let searchText = this.getSearchText();
    if (utils.isNull(searchText)) {
      alert("请勿输入空内容");
      return;
    }
    /* 输入框已显示，再次点击直接跳转吧 */
    let url = "https://tieba.baidu.com/f?ie=utf-8&kw=" + searchText;
    window.open(url, "_blank");
  },
  /**
   * 初始化搜索吧
   */
  initSearchSuggestion() {
    let that = this;
    /**
     * 获取搜索建议数据
     * @param inputValue 输入框内容
     */
    let querySearchSuggesiton = async (inputValue: string): Promise<PopsSearchSuggestionData[]> => {
      let result: PopsSearchSuggestionData[] = [];
      log.success("搜索中...");
      let suggestionData = await that.getSuggestion(inputValue);
      if (utils.isNull(suggestionData)) {
        return result;
      }
      log.success(suggestionData);
      const search_data: {
        fname: string;
        forum_id: number;
        fpic: string;
        member_num: number;
        thread_num: number;
        forum_desc: string;
        sug_type: number;
        fclass1: string;
        fclass2: string;
      }[] = suggestionData?.query_match.search_data || [];
      const searchSuggestionData: PopsSearchSuggestionData[] = search_data.map((item) => {
        return {
          value: item.fname,
          enableDeleteButton: false,
          itemView(dateItem, $parent, config) {
            return /*html*/ `
						<div class="forum_item">
							<img class="forum_image" src="${item.fpic}">
							<div class="forum_right">
								<div class="forum_name">${item.fname}</div>
								<div class="forum_desc">${item.forum_desc}</div>
								<div class="forum_member">${item.member_num}</div>
								<div class="forum_thread">${item.thread_num}</div>
							</div>
						</div>`;
          },
          clickCallback(event, $dataItem, dataItem, config) {
            window.location.href = "https://tieba.baidu.com/f?ie=utf-8&kw=" + item.fname;
          },
        };
      });
      return searchSuggestionData;
    };
    let searchSuggestion = pops.searchSuggestion({
      selfDocument: document,
      className: "WhiteSevsSearchSelect",
      target: this.$ele.$searchInput,
      inputTarget: this.$ele.$searchInput,
      data: [],
      isAbsolute: false,
      followTargetWidth: true,
      topDistance: 4,
      inputTargetChangeRefreshShowDataCallback: (inputValue, data, config) => {
        return querySearchSuggesiton(inputValue);
      },
      style: /*css*/ `
			.WhiteSevsSearchSelect .forum_item{
				display: flex;
				text-wrap: wrap;
				align-items: center;
			}
			.WhiteSevsSearchSelect .forum_image{
				float: left;
				width: 32px;
				height: 32px;
			}
			.WhiteSevsSearchSelect .forum_right{
				float: left;
				margin-left: 8px;
				color: #999;
				width: 88%;
			}
			.WhiteSevsSearchSelect .forum_name{
				color: #000;
				font-size: 14px;
				font-weight: 700;
			}
			.WhiteSevsSearchSelect .forum_name::after{
				content:"吧";
			}
			.WhiteSevsSearchSelect .forum_member,
			.WhiteSevsSearchSelect .forum_thread{
				margin: 4px 0px;
				padding: 0 0 0 18px;
				color: #999;
				font-weight: 400;
				font-size: 12px;
				background: url(//tb2.bdstatic.com/tb/static-common/img/suggestion/sugestion_ed6a819.png) no-repeat;
			}
			.WhiteSevsSearchSelect .forum_member{
				background-position: 0 0;
			}
			.WhiteSevsSearchSelect .forum_thread{
				background-position: 0 -26px;
			}
			`,
    });
    this.$data.searchSuggestion = searchSuggestion;
    searchSuggestion.init();
    searchSuggestion.setAllEvent();
    log.info("初始化默认搜索...");
    querySearchSuggesiton("").then((result) => {
      if (result.length) {
        searchSuggestion.update(result);
      }
    });
  },
  /**
   * 获取搜索建议
   * @param queryText 搜索内容
   */
  async getSuggestion(queryText = "") {
    let response = await httpx.get({
      url: `https://tieba.baidu.com/suggestion?query=${queryText}&ie=utf-8&_=${new Date().getTime()}`,
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Accept: "application/json, text/javascript, */*; q=0.01",
        Host: "tieba.baidu.com",
        Referer: window.location.href,
      },
    });
    if (!response.status) {
      return;
    }
    let data = utils.toJSON(response.data.responseText);
    return data;
  },
};

const TiebaSearch = {
  $flag: {
    isInitKw: false,
    isInitPost: false,
    isInitHome: false,
    isSetScrollEvent: false,
  },
  $even: {},
  $context: {
    lockFunc: null as any,
    loading: new LoadingView(true),
    gbkEncoder: new utils.GBKEncoder(),
  },
  $data: {
    /**
     * 搜索类型，默认0
     * + 0 本吧
     * + 1 全局
     */
    searchType: 0,
    /**
     * 搜索结果类型，默认1
     * + 0 按时间顺序
     * + 1 按时间倒序
     * + 2 按相关性顺序
     * + 3 只看主题贴
     */
    searchModel: 1,
    /**
     * 下一页
     */
    nextPageUrl: null as unknown as string,
    /**
     * 当前搜索的内容
     */
    currentSearchText: "",
  },
  $ele: {
    /**
     * 页面重构后的搜索按钮
     */
    $moreBtnDesc: null as any as HTMLDivElement,
    /**
     * 搜索的容器
     */
    $searchContainer: null as any as HTMLDivElement,
    /**
     * 自定义的顶部导航栏
     */
    $navTopSearch: null as any as HTMLDivElement,
    /**
     * 返回按钮
     */
    $navSearchBack: null as any as HTMLDivElement,
    /**
     * 搜索模式选择的容器
     */
    $selectWrapper: null as any as HTMLDivElement,
    /**
     * 搜索模式选择
     */
    $select: null as any as HTMLSelectElement,
    /**
     * 输入框
     */
    $searchInput: null as any as HTMLInputElement,
    /**
     * 搜索按钮
     */
    $searchBtn: null as any as HTMLDivElement,
    /**
     * 搜索结果的容器
     */
    $searchResultContainer: null as any as HTMLDivElement,
    /**
     * 搜索结果的列表
     */
    $searchResultList: null as any as HTMLDivElement,
    /**
     * 选择搜索结果模式
     */
    $searchResultModel: null as unknown as HTMLDivElement,
    /**
     * 以下内容来自xxx吧的搜索结果
     */
    $searchResultFrom: null as unknown as HTMLDivElement,
  },
  init() {
    let that = this;
    DOMUtils.waitAnyNode<HTMLDivElement>(
      [".more-btn-desc", "uni-app .frs-wise-nav-bar .forum-name", ".tbm-status .right-area"],
      10000
    ).then(($oldMoreBtnDesc) => {
      if (!$oldMoreBtnDesc) {
        return;
      }
      this.addCSS();
      $oldMoreBtnDesc.outerHTML = '<div class="more-btn-desc">搜索</div>';
      let $newSearch = DOMUtils.createElement("div", {
        id: "search",
        innerHTML: /*html*/ `
					<div id="nav-top-search">
						<div class="nav-search-container">
							<div class="nav-search-back">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"></path><path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"></path></svg>
							</div>
							<div class="nav-search-select-wrapper">
								<select class="nav-search-select">
									<option>本吧</option>
									<option>全局</option>
								</select>
							</div>
							<input type="search" id="tieba-search" placeholder="请输入搜索内容..." autocomplete="off">
							<div class="nav-search-btn">搜索</div>
						</div>
					</div>
					<div class="search-result">
						<div class="search-result-model" style="display: none;">
							<div class="search-result-model-item" data-model="1">新帖在前</div>
							<div class="search-result-model-item" data-model="0">旧帖在前</div>
							<div class="search-result-model-item" data-model="2">只看相关</div>
							<div class="search-result-model-item" data-model="3">只看主题</div>
						</div>
						<div class="search-result-from-info" style="display: none;">

						</div>
						<div class="search-result-list">

						</div>
					</div>
				`,
      });
      document.body.appendChild($newSearch);
      DOMUtils.hide($newSearch);

      this.$ele.$searchContainer = $newSearch;
      this.$ele.$navTopSearch = $newSearch.querySelector("#nav-top-search") as HTMLDivElement;
      this.$ele.$navSearchBack = $newSearch.querySelector(".nav-search-back") as HTMLDivElement;
      ((this.$ele.$selectWrapper = $newSearch.querySelector(".nav-search-select-wrapper") as HTMLDivElement),
        (this.$ele.$select = $newSearch.querySelector(".nav-search-select") as HTMLSelectElement));
      this.$ele.$searchInput = $newSearch.querySelector("#tieba-search") as HTMLInputElement;
      this.$ele.$searchBtn = $newSearch.querySelector(".nav-search-btn") as HTMLDivElement;
      this.$ele.$searchResultContainer = $newSearch.querySelector(".search-result") as HTMLDivElement;
      this.$ele.$searchResultList = $newSearch.querySelector(".search-result-list") as HTMLDivElement;
      this.$ele.$searchResultModel = $newSearch.querySelector(".search-result-model") as HTMLDivElement;
      this.$ele.$searchResultFrom = $newSearch.querySelector(".search-result-from-info") as HTMLDivElement;
      // 初始化加载下一页
      this.$context.loading.initLoadingView(true);
      this.$ele.$searchResultList.appendChild(this.$context.loading.getLoadingViewElement());
      // 设置搜索结果项
      let $searchResultModelItem = this.$ele.$searchResultModel.querySelector(
        `.search-result-model-item[data-model="${this.$data.searchModel}"]`
      );
      if ($searchResultModelItem) {
        $searchResultModelItem.setAttribute("data-active", "true");
      }
      this.$context.loading.hide();
      /* 用于判断是否已设置点击事件 */
      let searchParams = new URLSearchParams(window.location.search);
      this.$ele.$moreBtnDesc = $(".more-btn-desc") as HTMLDivElement;
      if (BaiduRouter.isTieBaNei() && utils.isNotNull(searchParams.get("kw"))) {
        /* 吧内 -> 搜索帖子 */
        DOMUtils.on(this.$ele.$moreBtnDesc, "click", () => {
          this.enterSeachMode();
        });
      } else if (BaiduRouter.isTieBaPost()) {
        /* 帖子 -> 搜索帖子 */
        DOMUtils.on(this.$ele.$moreBtnDesc, "click", () => {
          this.enterSeachMode();
        });
      } else {
        /* 主页 -> 搜索吧 */
        TiebaSearchSuggestion.init(this.$ele.$searchInput);
        return;
      }

      /**
       * 搜索事件
       *
       * 点击按钮搜索
       *
       * 按下回车键搜索
       */
      let searchEvent = () => {
        let searchText = that.getSearchText();
        if (utils.isNull(searchText)) {
          alert("请勿输入纯空格或空内容");
          return;
        }
        if (Panel.getValue("baidu_tieba_use_hybrid_search")) {
          // 使用搜索综合
          window.location.href = TiebaUrlHandler.getHybridSearch(this.getSearchText());
          return;
        }
        this.$data.currentSearchText = searchText;
        this.clearOldSearchResult();
        this.postsPageSearch();
      };
      DOMUtils.on(this.$ele.$searchBtn, "click", () => {
        searchEvent();
      });
      DOMUtils.listenKeyboard(this.$ele.$searchInput, "keypress", (keyName) => {
        if (keyName !== "Enter") {
          return;
        }
        searchEvent();
      });
      // 设置返回按钮的点击事件-退出搜索模式
      DOMUtils.on(this.$ele.$navSearchBack, "click", () => {
        this.quitSearchMode();
        this.removeScrollEvent();
      });
      // 设置模式选择的改变事件
      DOMUtils.on(this.$ele.$select, "change", (event) => {
        let select = event.target as HTMLSelectElement;
        let value = select.value; // 获取选中项的值
        let text = select.options[select.selectedIndex].text; // 获取选中项的文本
        log.info("当前搜索模式：" + text);
        if (text === "本吧") {
          this.$data.searchType = 0;
        } else if (text === "全局") {
          this.$data.searchType = 1;
        } else {
          log.error("未知选择模式");
        }
      });
      // 设置搜索结果选择模式
      DOMUtils.on(this.$ele.$searchResultModel, "click", ".search-result-model-item", (event) => {
        let $click = event.target as HTMLDivElement;
        log.success("设置当前搜索结果模式：" + $click.innerText);
        // 设置当前选项的访问状态
        this.$ele.$searchResultModel
          .querySelectorAll(".search-result-model-item")
          .forEach((ele) => ele.removeAttribute("data-active"));
        $click.setAttribute("data-active", "true");
        let searchModelText = $click.getAttribute("data-model") as string;
        let searchModel = parseInt(searchModelText);
        this.$data.searchModel = searchModel;
        this.clearOldSearchResult();
        this.postsPageSearch();
      });

      Panel.execMenuOnce("baidu_tieba-execByUrlSearchParams", () => {
        this.execByUrlSearchParams();
      });
    });
  },
  addCSS() {
    addStyle(/*css*/ `
		.gm-hide {
			display: none !important;
		}
		`);
    addStyle(/*css*/ `
		.more-btn-desc{
			margin-right: 10px;
			font-size: 1em;
			font-weight: 700;
			color: #614ec2;
		}
		`);
    addStyle(/*css*/ `
		#search{
			--bg-color: #F5F6F8;
			--ohter-bg-color: #F3F3F5;
			--result-item-bg-color: #ffffff;
			background: var(--bg-color);
			position: fixed;
			z-index: 100000;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 0;
		}
		#nav-top-search{
			top: 0;
			position: fixed;
			width: 100%;
			background: var(--bg-color);
			z-index: inherit;
		}
		.nav-search-container{
			position: relative;
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			width: 100%;
			height: auto;
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
		.nav-search-container svg{
			width: 1em;
			height: 1em;
		}
		.nav-search-back{
			margin-left: 10px;
		}
		.nav-search-select{
			background: var(--other-bg-color);
			height: 32px;
			line-height: 32px;
			border: 1px solid rgb(184, 184, 184, 1);
			border-radius: 5px;
			text-align: center;
			outline: 0;
			box-shadow: none;
			margin-left: 10px;
		}
		#tieba-search{
			background: var(--other-bg-color);
			padding: 0px 10px;
			height: 32px;
			line-height: 32px;
			font-size: 14px;
			border-radius: 5px;
			box-sizing: border-box;
			appearance: none;
			border: 1px solid rgb(184, 184, 184, 1);
			outline: none;
			flex: 1 1 0%;
			margin: 0px 1em;
			min-width: 80px;
		}
		.nav-search-btn{
			margin-right: 10px;
			font-weight: 700;
			color: #614ec2;
		}
		.search-result{
			position: relative;
			top: 0.48rem;
			background: var(--bg-color);
		}
		.search-result-model{
			display: flex;
			padding: 0px 10px;
			position: fixed;
   			width: 100%;
			top: 0.48rem;
			height: 0.32rem;
			z-index: inherit;
			background: var(--bg-color);
			align-items: flex-start;
    		justify-content: center;
		}
		.search-result-model .search-result-model-item{
			margin-right: 20px;
		}
		.search-result-from-info{
			margin-top: 0.32rem;
    		padding: 10px;
		}
		.search-result-from-info[style*="display"][style*="none"] + .search-result-list{
			margin-top: 0.32rem;
		}
		.search-result-list{
			overflow: auto;
			max-height: calc( 100vh - 48px - 32px - 36px);
		}
		.search-result-list .search_result{
			background: var(--result-item-bg-color);
			margin: 10px;
			padding: 10px;
			border-radius: 6px;
		}
		.search-result-list .search_result:first-child{
			margin-top: 0px;
		}
		`);
    addStyle(/*css*/ `
		.search-result-model .search-result-model-item[data-active]:after {
			content: " ";
			background: #7458FA;
			height: 4px;
			line-height: 5px;
			margin: 0.05rem 0px;
			border-radius: 6px;
			width: 0.2rem;
			position: relative;
		}

		.search-result-model .search-result-model-item[data-active] {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		`);
    // 搜索结果的样式
    addStyle(/*css*/ `
		#search .search-result-content img.BDE_Smiley{
			width: .2rem;
			height: .2rem;
			vertical-align: middle;
		}
		#search .search-result-content img:not(.BDE_Smiley){
			margin-top: 8px;
			max-width: 350px;
			cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
			height: auto;
			width: auto;
			width: 100%;
		}
		/* 搜索结果高亮 */
		#search .s_post em {
			color: #e10900;
			font-style: normal;
		}
		#search .BDE_Image_container {
			display: flex;
			overflow: auto;
		}
		#search .BDE_Image_container img.BDE_Image {
			max-width: 100px;
			max-height: 150px;
		}
        `);
    addStyle(/*css*/ `
		#search .search-result-media {
			display: flex;
			align-items: center;
		}
		
		#search .search-result-media-left {
			padding-right: .08rem;
		}
		
		#search .search-result-media-left img {
			width: .35rem;
			height: .35rem;
			border-radius: 50%;
		}
		
		#search .search-result-media-body-author-name {
			margin-top: .02rem;
			color: #272829;
			font-weight: 400;
			font-size: .16rem;
			line-height: .15rem;
		}
		
		#search .search-result-media-body-time {
			margin-top: .06rem;
			color: #a2a6a8;
			font-size: .12rem;
			line-height: .12rem;
		}
		
		#search h1.search-result-title-h1 {
			font-size: 0.16rem;
		}
		#search .search-result-content {
			min-height: 66px;
		}
		#search span.search-result-content-span {
			color: #141414;
			text-overflow: ellipsis;
			display: inline;
			word-break: break-all;
		}
		
		#search .search-result-title ,
		#search .search-result-content,
		#search .search-result-bottom-toolbar{
			margin-top: 0.08rem;
		}
		
		#search span.search-result-bottom-toolbar-span {
			color: #b7b9c1;
		}
		#search span.search-result-bottom-toolbar-span::before{
			content:"贴吧："   
		}
		`);
  },
  /**
   * 清空搜索结果
   */
  clearSearchResult() {
    log.success("清空搜索结果");
    Array.from(this.$ele.$searchResultList.children).forEach(($item) => {
      if ($item != this.$context.loading.getLoadingViewElement()) {
        $item.remove();
      }
    });
  },
  /**
   * 显示搜索结果选项
   */
  showSearchResultModel() {
    DOMUtils.show(this.$ele.$searchResultModel);
  },
  /**
   * 隐藏搜索结果选项
   */
  hideSearchResultModel() {
    DOMUtils.hide(this.$ele.$searchResultModel);
  },
  /**
   * 显示搜索结果来自xxx
   */
  showSearchResultFrom() {
    DOMUtils.show(this.$ele.$searchResultFrom);
    let searchKw = "全部吧";
    if (this.$data.searchType === 0) {
      // 设置为本吧搜索
      searchKw = TiebaCore.getCurrentForumName();
      if (utils.isNull(searchKw)) {
        searchKw = "未知";
      } else {
        searchKw += "吧";
      }
    }
    this.$ele.$searchResultFrom.innerText = `以下内容来自${searchKw}的搜索结果`;
  },
  /**
   * 隐藏搜索结果来自xxx
   */
  hideSearchResultFrom() {
    DOMUtils.hide(this.$ele.$searchResultFrom);
  },
  /**
   * 获取进入/退出搜索模式时需要处理的选择器
   */
  getEnterOrQuietSearchModeSelectorList() {
    return [
      // 底部评论工具栏
      "#vite-app",
      // 帖子的主内容
      ".main-page-wrap",
      // 吧内的主内容
      ".tb-mobile-viewport",
    ];
  },
  /**
   * 进入搜索模式
   *
   * 显示输入框，返回按钮什么的
   *
   * 如果已在搜索模式（即已显示搜索框），返回undefine，否则成功进入返回true
   */
  enterSeachMode() {
    this.showSearchContainer();
    // 自动获取焦点
    setTimeout(() => {
      this.$ele.$searchInput.focus();
    }, 20);
  },
  /**
   * 退出搜索模式
   *
   * 隐藏输入框，返回按钮
   *
   * 如果已不在搜索模式（即已显示搜索框），返回undefine，否则成功退出返回true
   *
   * 显示本页主内容
   */
  quitSearchMode() {
    /* 搜索框隐藏的话就显示出来 */
    // 隐藏搜索框
    this.hideSearchContainer();
  },
  /**
   * 获取搜索内容
   */
  getSearchText() {
    let searchText = this.$ele.$searchInput.value.trim();
    return searchText;
  },
  /**
   * 获取搜索结果
   * @param qw 搜索的关键字
   * @param pn 当前页码
   * @param sm 搜索结果排序
   * @param kw 搜索的目标吧，留空是全部
   * + 0 按时间顺序
   * + 1 按时间倒序 如果加上only_thread为1，就是只看主题贴
   * + 2 按相关性顺序
   */
  async getSearchResult(qw = "", pn = 0, sm = 1, kw = "") {
    let param_sm = sm.toString();
    if (sm === 3) {
      param_sm = "1&only_thread=1";
    }
    let url = "";
    let originText = "";
    if (arguments.length === 1) {
      url = arguments[0];
      log.success(`请求的下一页url: ${url}`);
    } else {
      originText = qw;
      qw = this.$context.gbkEncoder.encode(qw);
      kw = this.$context.gbkEncoder.decode(kw);
      kw = this.$context.gbkEncoder.encode(kw);
      log.success(`搜索内容gbk编码转换: ${originText} => ${qw}`);
      url = `https://tieba.baidu.com/f/search/res?isnew=1&kw=${kw}&qw=${qw}&un=&rn=10&pn=${pn}&sd=&ed=&sm=${param_sm}`;
    }
    log.success(`当前请求第 ${new URLSearchParams(new URL(url).search).get("pn")} 页`);
    let searchResponse = await httpx.get(url, {
      fetch: true,
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "none",
      },
    });
    let responseText = searchResponse.data.responseText;
    if (!searchResponse.status) {
      if (utils.isNull(responseText)) {
        log.error("获取内容为空，可能触发了百度校验，请刷新网页再试");
        return {
          success: false,
          error: "获取内容为空，可能触发了百度校验，请刷新网页再试",
        };
      }
      if (
        responseText.match("wappass.baidu.com") ||
        responseText.match("https://seccaptcha.baidu.com/v1/webapi/verint/svcp.html")
      ) {
        let wappassUrl = responseText?.match(/href="(.*?)"/)?.[1] as string;
        log.error("触发百度校验: " + wappassUrl);
        window.location.href = wappassUrl;
        return {
          success: false,
          error: "触发百度校验",
        };
      } else if (responseText.match("<title>百度安全验证</title>") && responseText.match(`backurl:\'(.+?)\'`)) {
        let wappassUrl = responseText?.match(/backurl:\'(.+?)\'/)?.[1]!;
        log.error("触发百度校验: " + wappassUrl);
        window.location.href = wappassUrl;
        return {
          success: false,
          error: "触发百度校验",
        };
      }
      log.error(responseText);
      return {
        success: false,
        error: "请求失败，可能是网络异常或者接口异常",
      };
    }
    log.success(searchResponse);
    let searchDoc = DOMUtils.toElement(responseText, true, true) as Document;
    if (searchDoc.querySelector(".search_noresult")) {
      return {
        success: false,
        error: "抱歉，没有找到与“" + originText + "”相关的结果。",
      };
    }
    /**
     * 搜索结果
     */
    let result = <SearchResultInfo[]>[];
    // 获取下一页的URL
    let nextPageUrl = (searchDoc.querySelector(".pager-search a.next") as HTMLAnchorElement)?.href;
    searchDoc.querySelectorAll<HTMLDivElement>(".s_main .s_post_list .s_post").forEach(($s_post) => {
      if ($s_post.id === "post_user" || $s_post.id === "no_head") {
        return;
      }
      // 链接
      let postItemUrl = ($s_post.querySelector("span.p_title a") as HTMLAnchorElement).href;
      // 标题
      let postItemTitle = ($s_post.querySelector("span.p_title a") as HTMLAnchorElement).innerHTML;
      // 内容
      let postItemContent = ($s_post.querySelector(".p_content") as HTMLDivElement).innerHTML;
      // 发布的吧发布的吧
      let postItemForumName = ($s_post.querySelector("a.p_forum font.p_violet") as HTMLElement).textContent;
      // 作者
      let postItemAuthor = (
        $s_post.querySelector("a[href^='/home'] font.p_violet") || $s_post.querySelectorAll("font.p_violet")[1]
      ).textContent as string;
      // 作者个人空间Url
      let postItemAuthorHomeUrl =
        "https://tieba.baidu.com/home/main?un=" + this.$context.gbkEncoder.encode(postItemAuthor);
      // 发布时间
      let postItemTime = ($s_post.querySelector(".p_date") as HTMLElement).textContent;
      let imgList: string[] = [];
      $s_post
        .querySelectorAll<HTMLImageElement>("img.p_pic")
        .forEach((pictureImg) => imgList.push(pictureImg.getAttribute("original") || pictureImg.src));
      result.push({
        url: postItemUrl,
        title: postItemTitle,
        content: postItemContent,
        forum: postItemForumName,
        author: postItemAuthor,
        authorHomeUrl: postItemAuthorHomeUrl,
        time: postItemTime,
        media: imgList,
      });
    });
    if (result.length === 0) {
      return {
        success: false,
        error: "抱歉，获取到的数据为空",
      };
    }
    return {
      success: true,
      data: result,
      nextPageUrl: nextPageUrl,
    };
  },
  /**
   * 获取搜索结果元素
   * @param currentSearchText 当前搜索的关键字
   * @param data 搜索的数据
   */
  getSearchItemElement(data: SearchResultInfo) {
    let searchText = this.$data.currentSearchText;
    let time = data["time"] as string;
    // 转换时间
    let newTime = utils.getDaysDifference(utils.formatToTimeStamp(time), void 0, "auto");
    if (newTime.endsWith("小时") || newTime.endsWith("分钟") || newTime.endsWith("秒")) {
      /* 今天内的时间全都转换成xx时|分|秒前 */
      time = newTime + "前";
    }
    /* 高亮搜索关键字 */
    let splitText = searchText.split(" ");
    splitText.filter((value, index, _splitText_) => {
      return _splitText_.indexOf(value) === index;
    });
    splitText.forEach((text) => {
      data["title"] = data["title"].replaceAll(text, "<em>" + text + "</em>");
    });

    let postUrlObj = new URL(CommonUtil.fixUrl(data["url"]));
    /** 帖子链接地址 */
    // 这里处理是因为新版uni-app帖子后面如果多了个定位评论的锚点参数，那么会导致白屏
    let postUrl = postUrlObj.origin + postUrlObj.pathname;
    /** 发帖人的个人空间地址 */
    let authorHomeUrl = data["authorHomeUrl"];
    /** 帖子的来源吧名 */
    let postForum = data["forum"]!;

    let $resultElement = DOMUtils.createElement("div", {
      className: "s_post search_result",
      innerHTML: /*html*/ `
			<div class="search-result-media">
				<div class="search-result-media-left">
				<img src="data:image/png;base64,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">
				</div>
				<div class="search-result-media-body">
				<h4 class="search-result-media-body-author-name">${data["author"]}</h4>
				<p class="search-result-media-body-time">${time}</p>
				</div>
			</div>
			<div class="search-result-title">
				<h1 class="search-result-title-h1">
				<span class="search-result-title-span">${data["title"]}</span>
				</h1>
			</div>
			<div class="search-result-content">
				<span class="search-result-content-span">${data["content"]}</span>
			</div>
			<div class="search-result-bottom-toolbar">
				<span class="search-result-bottom-toolbar-span">${data["forum"]}</span>
			</div>
			`,
    });
    $resultElement.setAttribute("data-url", data["url"]);
    let $userAvatarElement = $resultElement.querySelector(".search-result-media-left img") as HTMLImageElement;
    let $userNameElement = $resultElement.querySelector(".search-result-media-body-author-name") as HTMLElement;
    let $mediaElement = $resultElement.querySelector(".search-result-media") as HTMLElement;
    let $titleElement = $resultElement.querySelector(".search-result-title") as HTMLElement;
    let $contentElement = $resultElement.querySelector(".search-result-content") as HTMLElement;
    let $contentSpanElement = $resultElement.querySelector(".search-result-content-span") as HTMLSpanElement;
    let $bottomToolBarElement = $resultElement.querySelector(".search-result-bottom-toolbar") as HTMLElement;
    /* 获取用户信息，替换用户头像 */
    if (Panel.getValue("baidu_tieba_search_opt_user_info")) {
      TieBaApi.getUserHomeInfo({
        un: data["author"],
      }).then((userHomeInfo) => {
        if (!userHomeInfo) {
          return;
        }
        $userAvatarElement.src = TiebaUrlHandler.getUserAvatar(userHomeInfo["portrait"]);
        $userNameElement.innerText = userHomeInfo["show_nickname"];
      });
    }

    let nodeAnchorIterator = [
      { element: $mediaElement, url: authorHomeUrl },
      { element: [$titleElement, $contentElement], url: postUrl },
      {
        element: $bottomToolBarElement,
        url: TiebaUrlHandler.getForum(postForum),
      },
    ];
    /* 对元素进行点击链接跳转处理 */
    nodeAnchorIterator.forEach((item) => {
      DOMUtils.on(
        item.element,
        "click",
        function (event) {
          DOMUtils.preventEvent(event);
          globalThis.open(item.url, "_blank");
        },
        {
          capture: true,
        }
      );
    });

    // 解析图片链接
    let repetitiveImageList: string[] = [];
    $resultElement.querySelectorAll<HTMLImageElement>(".search-result-content img.BDE_Image").forEach(($BDE_Image) => {
      /* 高清图片下标 */
      let originalImageIndex = (data["media"] as string[]).findIndex((src) => {
        return src.includes($BDE_Image.src);
      });
      if (originalImageIndex !== -1) {
        /* 存在对应的高清图片链接 */
        let originalImage = data["media"][originalImageIndex];
        $BDE_Image.src = originalImage;
        repetitiveImageList.push(originalImage);
        data["media"].splice(originalImageIndex, 1);
      }
    });
    let imageContainerElement = DOMUtils.createElement("div", {
      className: "BDE_Image_container",
    });
    data["media"].forEach((mediaUrl) => {
      DOMUtils.append(
        imageContainerElement,
        DOMUtils.createElement("img", {
          className: "BDE_Image",
          src: mediaUrl,
        })
      );
    });
    $contentSpanElement.appendChild(imageContainerElement);
    /* 对贴吧表情进行处理，搜索到的表情是http的，换成https */
    $resultElement
      .querySelectorAll<HTMLImageElement>(".search-result-content img.BDE_Smiley")
      .forEach(($BDE_Smiley) => {
        if (!$BDE_Smiley.src.startsWith("http://static.tieba.baidu.com")) {
          return;
        }
        let imagePathName = new URL($BDE_Smiley.src).pathname;
        $BDE_Smiley.src = TiebaUrlHandler.getImageSmiley(imagePathName);
      });
    return $resultElement;
  },
  /**
   * 添加滚动事件
   */
  addScrollEvent() {
    log.success("添加滚动事件");
    this.$flag.isSetScrollEvent = true;
    this.$context.lockFunc = new utils.LockFunction(this.scrollEvent, this, 20);
    DOMUtils.on(this.$ele.$searchResultList, "scroll", this.$context.lockFunc.run);
  },
  /**
   * 移除滚动事件
   */
  removeScrollEvent() {
    log.error("移除滚动事件");
    this.$context.loading.hide();
    if (this.$context.lockFunc?.run) {
      DOMUtils.off(this.$ele.$searchResultList, "scroll", this.$context.lockFunc.run);
    }
    this.$context.lockFunc = null;
    this.$flag.isSetScrollEvent = false;
    this.$data.nextPageUrl = null as any;
  },
  /**
   * 显示搜索失败的提示
   */
  alertErrorSearch(text: string) {
    pops.alert({
      title: {
        position: "center",
        text: "搜索失败",
      },
      content: {
        text: text,
      },
      width: "80%",
      height: "200px",
      mask: {
        enable: true,
      },
    });
  },
  /**
   * 添加搜索结果到页面中
   * @param data 搜索结果
   */
  setSearchResultToPage(data: SearchResultInfo[]) {
    for (const searchResultItem of data) {
      DOMUtils.before(
        this.$context.loading.getLoadingViewElement(),
        this.getSearchItemElement(searchResultItem as SearchResultInfo)
      );
    }
  },
  /**
   * 滚动事件
   */
  async scrollEvent(event: Event) {
    let maxScrollHeight = this.$ele.$searchResultList.scrollHeight - this.$ele.$searchResultList.clientHeight;
    if (this.$ele.$searchResultList.scrollTop + 50 < maxScrollHeight) {
      return;
    }
    this.$context.loading.show();
    if (utils.isNull(this.$data.nextPageUrl)) {
      this.removeScrollEvent();
      log.success("已到达最后一页");
      this.$context.loading.hide();
      return;
    }
    let searchResult = await this.getSearchResult(this.$data.nextPageUrl);
    if (!searchResult.success) {
      this.$context.loading.hide();
      this.alertErrorSearch(searchResult.error!);
      return;
    }
    log.success(searchResult);
    let searchData = searchResult.data!;
    this.setSearchResultToPage(searchData);
    this.$context.loading.hide();
    if (utils.isNull(searchResult.nextPageUrl)) {
      this.removeScrollEvent();
      log.success("已到达最后一页");
      return;
    } else {
      // 更新搜索页
      if (typeof searchResult.nextPageUrl == "string") {
        log.success(`更新下一页Url：${searchResult.nextPageUrl}`);
        this.$data.nextPageUrl = searchResult.nextPageUrl;
      } else {
        log.error("nextPageUrl不是string，无法更新下一页Url");
      }
    }
  },
  isShowSearchContainer() {
    return getComputedStyle(this.$ele.$searchContainer).display !== "none";
  },
  showSearchContainer() {
    DOMUtils.show(this.$ele.$searchContainer);
  },
  hideSearchContainer() {
    DOMUtils.hide(this.$ele.$searchContainer);
  },
  /**
   * 清空旧的搜索内容、滚动事件，重置为默认状态
   */
  clearOldSearchResult() {
    log.success("清空旧的搜索内容、滚动事件，搜索Url");
    this.clearSearchResult();
    this.removeScrollEvent();
  },
  /**
   * 帖子内搜索(搜索帖子)
   * */
  async postsPageSearch() {
    this.$context.loading.show();
    let searchKw = "";
    if (this.$data.searchType === 0) {
      // 设置为本吧搜索
      searchKw = TiebaCore.getCurrentForumName();
      if (utils.isNull(searchKw)) {
        Qmsg.error("获取本吧吧名失败");
        this.$context.loading.hide();
        return;
      }
    }
    let searchResult = await this.getSearchResult(this.$data.currentSearchText, 0, this.$data.searchModel, searchKw);
    if (!searchResult.success) {
      this.$context.loading.hide();
      this.alertErrorSearch(searchResult.error!);
      return;
    }
    log.success(searchResult);
    let searchData = searchResult.data!;
    this.setSearchResultToPage(searchData);
    this.$data.nextPageUrl = searchResult.nextPageUrl as string;
    this.$context.loading.hide();
    if (utils.isNotNull(searchResult.nextPageUrl)) {
      this.addScrollEvent();
      this.showSearchResultModel();
      this.showSearchResultFrom();
    } else {
      log.error("搜索结果就1页，不设置scroll监听");
    }
  },

  /**
   * 提供对外的搜索链接
   *
   * 判断方式为location.search中包含查询关键字gmsearch
   */
  execByUrlSearchParams() {
    let searchParams = new URLSearchParams(window.location.search);
    // 获取查询关键字
    const KEY_searchText = "gmsearch";
    // 搜素类型关键字
    const KEY_searchType = "gmsearchtype";
    // 搜素结果类型
    const KEY_searchModel = "gmsearchmodel";
    if (!searchParams.has(KEY_searchText)) {
      return;
    }
    // 获取查询内容
    let searchText = searchParams.get(KEY_searchText)!;
    log.info("存在搜索接口，查询内容：" + searchText);
    this.$ele.$searchInput.value = searchText;
    if (searchParams.has(KEY_searchType)) {
      // 获取搜素类型
      let searchType = searchParams.get(KEY_searchType)!;
      if (["0", "1"].includes(searchType)) {
        this.$ele.$select.selectedIndex = parseInt(searchType);
        DOMUtils.trigger(this.$ele.$select, "change");
      } else {
        log.error(`未知searchParams的 ${KEY_searchType} 参数值：${searchType}`);
      }
    }
    if (searchParams.has(KEY_searchModel)) {
      // 获取搜素结果类型
      let searchModel = searchParams.get(KEY_searchModel)!;
      if (["0", "1", "2", "3"].includes(searchModel)) {
        this.$data.searchModel = parseInt(searchModel);
        // 设置搜索结果项
        let $searchResultModelItem = this.$ele.$searchResultModel.querySelector(
          `.search-result-model-item[data-model="${this.$data.searchModel}"]`
        );
        if ($searchResultModelItem) {
          this.$ele.$searchResultModel
            .querySelectorAll(".search-result-model-item")
            .forEach((ele) => ele.removeAttribute("data-active"));
          $searchResultModelItem.setAttribute("data-active", "true");
        }
      } else {
        log.error(`未知searchParams的 ${KEY_searchModel} 参数值：${searchModel}`);
      }
    }
    this.$ele.$moreBtnDesc.click();
    this.$ele.$searchBtn.click();
  },
};

export { TiebaSearch };
