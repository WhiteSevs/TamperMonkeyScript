import { $, DOMUtils, addStyle, httpx, log, pops, utils } from "@/env";
import { BaiduRouter } from "@/router/BaiduRouter";
import { LoadingView } from "@/utils/LoadingView";
import { Panel } from "@components/setting/panel";
import type { PopsSearchSuggestionData } from "@whitesev/pops/dist/types/src/components/searchSuggestion/types";
import Qmsg from "qmsg";
import { TiebaNewPCApi } from "./api/TiebaNewPCApi";
import { TiebaUrlHandler } from "./handler/TiebaUrlHandler";
import { TiebaCore } from "./TiebaCore";
import { TiebaPost } from "./post/TiebaPost";

const TiebaSearchSuggestion = {
  $data: {
    searchSuggestion: null as unknown as any,
    currentSearchText: "",
  },
  $el: {
    /**
     * 输入框
     */
    $searchInput: null as unknown as HTMLInputElement,
  },
  init($input: HTMLInputElement) {
    this.$el.$searchInput = $input;
    this.initSearchSuggestion();
    let $oldMoreBtnDesc = $<HTMLElement>(".more-btn-desc")!;
    DOMUtils.on($oldMoreBtnDesc, "click", () => {
      this.enterSeachMode();
    });
    const search = utils.debounce(() => {
      this.frontPageSeach();
    });
    // 点击搜索
    DOMUtils.on(TiebaSearch.$el.$searchBtn, "click", () => {
      search();
    });
    // 回车搜索
    DOMUtils.onKeyup(this.$el.$searchInput, (evt) => {
      if (evt.key !== "Enter") {
        return;
      }
      search();
    });
    // 移动端键盘按下搜索键
    DOMUtils.on(this.$el.$searchInput, "search", () => {
      search();
    });
    // 退出搜索模式
    DOMUtils.on(TiebaSearch.$el.$navSearchBack, "click", function () {
      TiebaSearch.quitSearchMode();
    });
  },
  /**
   * 进入搜索模式
   */
  enterSeachMode() {
    DOMUtils.hide(TiebaSearch.$el.$selectWrapper);
    TiebaSearch.showSearchContainer();
    // 自动获取焦点
    setTimeout(() => {
      this.$el.$searchInput.focus();
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
    return this.$el.$searchInput.value.trim();
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
    // 输入框已显示，再次点击直接跳转吧
    let url = "https://tieba.baidu.com/f?ie=utf-8&kw=" + searchText;
    window.open(url, "_blank");
  },
  /**
   * 初始化搜索吧
   */
  initSearchSuggestion() {
    /**
     * 获取搜索建议数据
     * @param inputValue 输入框内容
     */
    const querySearchSuggesiton = async (inputValue: string): Promise<PopsSearchSuggestionData<string>[]> => {
      const result: PopsSearchSuggestionData<string>[] = [];
      log.success("搜索中...");
      const suggestionData = await this.getSuggestion(inputValue);
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
      const searchSuggestionData: PopsSearchSuggestionData<string>[] = search_data.map((item) => {
        return {
          value: item.fname,
          enableDeleteButton: false,
          itemView() {
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
          clickCallback() {
            window.location.href = "https://tieba.baidu.com/f?ie=utf-8&kw=" + item.fname;
          },
        };
      });
      return searchSuggestionData;
    };
    let searchSuggestion = pops.searchSuggestion({
      $selfDocument: document,
      className: "WhiteSevsSearchSelect",
      $target: this.$el.$searchInput,
      $inputTarget: this.$el.$searchInput,
      data: [],
      isAbsolute: false,
      followTargetWidth: true,
      topDistance: 4,
      inputTargetChangeRefreshShowDataCallback: (inputValue) => {
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
    const response = await httpx.get({
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
    const data = utils.toJSON(response.data.responseText);
    return data;
  },
};

const TiebaSearch = {
  $context: {
    intersectionObserver: null as null | IntersectionObserver,
    loading: new LoadingView(true),
  },
  $data: {
    /**
     * 搜索类型，默认0
     * + 0 本吧
     * + 1 全局
     */
    searchType: 0,
    /**
     * 帖子排序
     *
     * + 2：相关在前
     * + 5：（默认）新帖在前
     */
    searchThreadSortType: 5 as 2 | 5,
    /**
     * 帖子类型
     * + 1：只看主题
     * + 3：只看评论
     */
    searchThreadType: 1 as 1 | 3,
    /**
     * 当前搜索的内容
     */
    searchText: "",
    /**
     * 页码
     */
    pn: 1,
    hasMore: false,
  },
  $el: {
    /**
     * 页面重构后的搜索按钮
     */
    $moreBtnDesc: null as any as HTMLElement,
    /**
     * 搜索的容器
     */
    $searchContainer: null as any as HTMLElement,
    /**
     * 自定义的顶部导航栏
     */
    $navTopSearch: null as any as HTMLElement,
    /**
     * 返回按钮
     */
    $navSearchBack: null as any as HTMLElement,
    /**
     * 搜索模式选择的容器
     */
    $selectWrapper: null as any as HTMLElement,
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
    $searchBtn: null as any as HTMLElement,
    /**
     * 搜索结果的容器
     */
    $searchResultContainer: null as any as HTMLElement,
    /**
     * 搜索结果的列表
     */
    $searchResultList: null as any as HTMLElement,
    /**
     * 选择搜索结果模式容器
     */
    $searchModelWrapper: null as unknown as HTMLElement,
    /**
     * + 新帖在前
     * + 相关在前
     */
    $searchSortType: null as unknown as HTMLSelectElement,
    /**
     * 以下内容来自xxx吧的搜索结果
     */
    $searchResultFrom: null as unknown as HTMLElement,
  },
  init() {
    DOMUtils.waitAnyNode<HTMLDivElement>(
      [".more-btn-desc", "uni-app .frs-wise-nav-bar .forum-name", ".tbm-status .right-area"],
      10000
    ).then(($oldMoreBtnDesc) => {
      if (!$oldMoreBtnDesc) {
        return;
      }
      this.addCSS();
      $oldMoreBtnDesc.outerHTML = '<div class="more-btn-desc">搜索</div>';
      const $newSearch = DOMUtils.createElement("div", {
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
              <div class="search-result-type-wrapper">
                <div class="search-result-type-item" data-value="1">只看主题</div>
                <div class="search-result-type-item" data-value="3">只看评论</div>
              </div>
              <div class="search-result-sort-wrapper">
                <select class="search-result-sort">
                  <option value="5">新帖在前</option>
                  <option value="2">相关在前</option>
                </select>
              </div>
						</div>
						<div class="search-result-list">
						</div>
					</div>
				`,
      });
      document.body.appendChild($newSearch);
      DOMUtils.hide($newSearch);

      this.$el.$searchContainer = $newSearch;
      this.$el.$navTopSearch = $newSearch.querySelector<HTMLElement>("#nav-top-search")!;
      this.$el.$navSearchBack = $newSearch.querySelector<HTMLElement>(".nav-search-back")!;
      this.$el.$selectWrapper = $newSearch.querySelector<HTMLElement>(".nav-search-select-wrapper")!;
      this.$el.$select = $newSearch.querySelector<HTMLSelectElement>(".nav-search-select")!;
      this.$el.$searchInput = $newSearch.querySelector<HTMLInputElement>("#tieba-search")!;
      this.$el.$searchBtn = $newSearch.querySelector<HTMLElement>(".nav-search-btn")!;
      this.$el.$searchResultContainer = $newSearch.querySelector<HTMLElement>(".search-result")!;
      this.$el.$searchResultList = $newSearch.querySelector<HTMLElement>(".search-result-list")!;
      this.$el.$searchModelWrapper = $newSearch.querySelector<HTMLElement>(".search-result-model")!;
      this.$el.$searchSortType = $newSearch.querySelector<HTMLSelectElement>(
        ".search-result-sort-wrapper .search-result-sort"
      )!;
      // 初始化加载下一页
      this.$context.loading.initLoadingView(true);
      this.$el.$searchResultList.appendChild(this.$context.loading.$el);
      this.$context.loading.hide();
      // 用于判断是否已设置点击事件
      const searchParams = new URLSearchParams(window.location.search);
      this.$el.$moreBtnDesc = $(".more-btn-desc") as HTMLDivElement;
      if (BaiduRouter.isTieBaNei() && utils.isNotNull(searchParams.get("kw"))) {
        // 吧内 -> 搜索帖子
        DOMUtils.on(this.$el.$moreBtnDesc, "click", () => {
          this.enterSeachMode();
        });
      } else if (BaiduRouter.isTieBaPost()) {
        // 帖子 -> 搜索帖子
        DOMUtils.on(this.$el.$moreBtnDesc, "click", () => {
          this.enterSeachMode();
        });
      } else {
        // 主页 -> 搜索吧
        TiebaSearchSuggestion.init(this.$el.$searchInput);
        return;
      }

      /**
       * 搜索事件
       *
       * 点击按钮搜索
       *
       * 按下回车键搜索
       */
      const searchEvent = utils.debounce(() => {
        let searchText = this.getSearchText();
        if (utils.isNull(searchText)) {
          alert("请勿输入纯空格或空内容");
          return;
        }
        if (Panel.getValue("baidu_tieba_use_hybrid_search")) {
          // 使用搜索综合
          window.location.href = TiebaUrlHandler.getHybridSearch(searchText);
          return;
        }
        this.$data.searchText = searchText;
        // 重置参数
        this.$data.pn = 1;
        this.$data.hasMore = false;
        this.showSearchResultModel();
        this.clearOldSearchResult();
        this.searchThread();
      });
      // 点击搜索
      DOMUtils.click(this.$el.$searchBtn, () => {
        searchEvent();
      });
      // 回车搜索
      DOMUtils.onKeyup(this.$el.$searchInput, (evt) => {
        if (evt.code !== "Enter") {
          return;
        }
        searchEvent();
      });
      // 监听 search 事件
      DOMUtils.on(this.$el.$searchInput, "search", () => {
        searchEvent();
      });
      // 设置返回按钮的点击事件-退出搜索模式
      DOMUtils.click(this.$el.$navSearchBack, () => {
        this.quitSearchMode();
        this.removeScrollEvent();
      });
      // 监听 全局|本吧 选择
      DOMUtils.on(this.$el.$select, "change", () => {
        const select = this.$el.$select;
        const text = select.options[select.selectedIndex].text;
        log.info("当前搜索模式：" + text);
        if (text === "本吧") {
          this.$data.searchType = 0;
        } else if (text === "全局") {
          this.$data.searchType = 1;
        } else {
          log.error("未知选择模式");
        }
      });

      // 设置搜索结果项
      const $searchResultModelItem = this.$el.$searchModelWrapper.querySelector<HTMLElement>(
        `.search-result-type-item[data-value="${this.$data.searchThreadType}"]`
      );
      if ($searchResultModelItem) {
        $searchResultModelItem.setAttribute("data-active", "true");
      }
      // 点击 只看主题 只看评论
      DOMUtils.on(
        this.$el.$searchModelWrapper,
        "click",
        ".search-result-type-wrapper .search-result-type-item[data-value]",
        (event) => {
          const $click = event.target as HTMLDivElement;
          // 设置当前选项的访问状态
          this.$el.$searchModelWrapper
            .querySelectorAll(".search-result-type-item")
            .forEach((ele) => ele.removeAttribute("data-active"));
          $click.setAttribute("data-active", "true");
          const value = $click.getAttribute("data-value") as string;
          const searchType = parseInt(value) as 1 | 3;
          if ([1, 3].includes(searchType)) {
            this.$data.searchThreadType = searchType;
          } else {
            Qmsg.error("暂不支持该搜索模式：" + value);
            return;
          }
          log.success("设置当前搜索结果模式：" + $click.innerText, searchType);
          searchEvent();
        }
      );
      DOMUtils.on(this.$el.$searchSortType, "change", () => {
        const selectOptionValue = this.$el.$searchSortType.value;
        const sortType = Number(selectOptionValue) as 2 | 5;
        if ([2, 5].includes(sortType)) {
          this.$data.searchThreadSortType = sortType;
        } else {
          Qmsg.error("暂不支持该排序类型：" + selectOptionValue);
          return;
        }
        searchEvent();
      });
      // 图片预览
      TiebaPost.optimizeImagePreview();
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
      display: flex;
      flex-direction: column;
		}
		#nav-top-search{
			top: 0;
			position: relative;
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
      position: unset;
      display: flex;
      flex-direction: column;
      height: calc(100% - 48px);
			background: var(--bg-color);
		}
		.search-result-model{
			display: flex;
			padding: 0px 10px;
      width: 100%;
			top: 0.48rem;
			height: 0.32rem;
			z-index: inherit;
			background: var(--bg-color);
			align-items: flex-start;
      justify-content: center;
      flex: 0 auto;
		}
		.search-result-list{
			overflow: auto;
      margin-top: 0;
      max-height: unset;
      flex: 1;
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
		.search-result-model .search-result-type-item[data-active]:after {
			content: " ";
			background: #7458FA;
			height: 4px;
			line-height: 5px;
			margin: 0.05rem 0px;
			border-radius: 6px;
			width: 0.2rem;
			position: relative;
		}

		.search-result-model .search-result-type-item[data-active] {
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
		#search .search-result-author-wrapper {
			display: flex;
			align-items: center;
		}
		
		#search .search-result-author-left-wrapper {
			padding-right: .08rem;
		}
		
		#search .search-result-author-left-wrapper img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
    #search .search-result-author-right-wrapper{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      height: -webkit-fill-available;
    }
		#search .search-result-author-name {
			font-weight: unset;
			font-size: 16px;
		}
		
		#search .search-result-thread-time {
			color: #a2a6a8;
			font-size: 12px;
		}
		
		#search h1.search-result-title-h1 {
			font-size: 0.16rem;
		}
		#search .search-result-content {
			min-height: 66px;
		}
		#search span.search-result-content-text {
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
		
		#search span.search-result-bottom-fname {
			color: #b7b9c1;
		}
		#search span.search-result-bottom-fname::before{
			content:"贴吧："   
		}
		`);
    // 搜索类型选择
    addStyle(/*css*/ `
    .search-result-model{
      display: flex;
      justify-content: space-between;
      height: unset !important;
      padding: 5px 10px;
      width: -webkit-fill-available;
      overflow: auto;
    }
    .search-result-model .search-result-type-wrapper{
      display: flex;
      gap: 10px;
    }
    .search-result-model .search-result-type-item{

    }
    .search-result-model .search-result-sort-wrapper{

    }
    `);
    // 使用api的结果的样式
    addStyle(/*css*/ `
      .search-result .search-result-media-wrapper{
        display: flex;
        flex-wrap: nowrap;
        overflow: auto;
        gap: 5px;
      }
      .search-result .search-result-media-wrapper img{
        width: auto !important;
        max-height: 200px;
        border-radius: 5px;
      }
      .search-result .search-result-media-wrapper video{
        max-height: 250px;
      }
      .search-result .search-result-controls{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
      }
      .search-result .search-result-controls-item[data-type]{
        display: flex;
        gap: 2px;
        color: #536371;
        fill: currentColor;
      }
      .search-result .search-result-controls-item[data-type] svg{
        width: 16px;
        height: 16px;
      }
      .search-result .search-result-controls-item-icon{

      }
      .search-result .search-result-controls-item-text{
        
      }
    `);
  },
  /**
   * 创建搜索结果元素
   * @param currentSearchText 当前搜索的关键字
   * @param data 搜索的数据
   */
  createSearchItemElement(
    data: NonNullable<NonNullable<Awaited<ReturnType<typeof TiebaNewPCApi.searchThread>>>["post_list"]>[0]
  ): any {
    const searchText = this.$data.searchText;
    // 高亮搜索关键字
    const splitText = searchText.split(" ");
    splitText.filter((value, index, it) => {
      return it.indexOf(value) === index;
    });
    splitText.forEach((text) => {
      data["title"] = data["title"].replaceAll(text, "<em>" + text + "</em>");
    });
    const time = utils.formatTime(data.time * 1000);
    const url = TiebaUrlHandler.getThread(data.tid);
    // 提取portrait id
    const portraitInst = new URL(data.user.portrait);
    const portrait = portraitInst.pathname.split("/").at(-1)!;
    /** 发帖人的个人空间地址 */
    const authorHomeUrl = TiebaUrlHandler.getUserHome(portrait);
    /** 帖子的来源吧名 */
    const fname = data.forum_name;
    const avatar = data.user.portrait;
    const mediaNodeList: string[] = [];
    if (Array.isArray(data.media)) {
      data.media.forEach((item) => {
        if (item.type === "pic") {
          // 图片
          mediaNodeList.push(/*html*/ `
            <img src="${item.big_pic || item.small_pic || item.water_pic}">
          `);
        } else if (item.type === "flash") {
          // 视频
          mediaNodeList.push(/*html*/ `
            <video src="${item.vhsrc || item.vsrc || item.src}" controls="controls" loading="lazy"></video>
          `);
        } else {
          log.error("未知type", item);
        }
      });
    }
    const $item = DOMUtils.createElement("div", {
      className: "s_post search_result",
      innerHTML: /*html*/ `
    	<div class="search-result-author-wrapper">
    		<div class="search-result-author-left-wrapper">
    		  <img src="${avatar}">
    		</div>
    		<div class="search-result-author-right-wrapper">
    		<h4 class="search-result-author-name">${data.user.show_nickname || data.user.user_name}</h4>
    		<p class="search-result-thread-time">${this.$data.searchThreadType === 1 ? "发布于" : "回复于"} ${time}</p>
    		</div>
    	</div>
    	<div class="search-result-title">
    		<h1 class="search-result-title-h1">
    		<span class="search-result-title-span">${data.title}</span>
    		</h1>
    	</div>
    	<div class="search-result-content">
    		<span class="search-result-content-text">${data.content}</span>
        <div class="search-result-media-wrapper">${mediaNodeList.join("\n")}</div>
    	</div>
    	<div class="search-result-bottom-toolbar">
    		<span class="search-result-bottom-fname">${fname}</span>
    	</div>
      <div class="search-result-controls">
        <div class="search-result-controls-item" data-type="share">
          <div class="search-result-controls-item-icon">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M511.998 64c21 0 38.1 17 38.1 38.1s-17 38.1-38.1 38.1c-205.4 0-371.9 166.5-371.9 371.9s166.5 371.8 371.9 371.8 371.9-166.5 371.9-371.9c0-21 17-38.1 38.1-38.1s38 17.1 38 38.1c0 247.4-200.6 448-448 448s-448-200.6-448-448 200.6-448 448-448z m230.6 190.5c-14.2-14.7-14-38 0.5-52.4 14.5-14.5 37.8-14.6 52.7-0.2l65.6 65.6c19.8 19.8 19.8 51.8 0 71.6l-65.6 65.6c-14.6 14.6-38.3 14.6-52.9 0-14.6-14.6-14.6-38.3 0-52.9l11.1-11.1h-48.3c-131.3 0-175.9 55.9-175.9 225 0 20.7-16.7 37.4-37.4 37.4s-37.4-16.7-37.4-37.4c0-209.1 76.3-299.8 250.7-299.8h48.3l-11.4-11.4z"></path>
            </svg>
          </div>
          <span class="search-result-controls-item-text">${data.share_num || "分享"}</span>
        </div>
        <div class="search-result-controls-item" data-type="comment">
          <div class="search-result-controls-item-icon">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M157.568 751.296c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288z m65.301333 3.786667l-17.258666 63.306666 63.306666-17.258666a32 32 0 0 1 24.522667 3.210666 4515.84 4515.84 0 0 1 32.352 18.944A360.789333 360.789333 0 0 0 512 874.666667c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512c0 60.586667 14.848 118.954667 42.826667 171.136 3.712 6.912 12.928 22.826667 27.370667 47.232a32 32 0 0 1 3.338666 24.714667z m145.994667-70.773334a32 32 0 1 1 40.917333-49.205333A159.189333 159.189333 0 0 0 512 672c37.888 0 73.674667-13.173333 102.186667-36.885333a32 32 0 0 1 40.917333 49.216A223.178667 223.178667 0 0 1 512 736a223.178667 223.178667 0 0 1-143.136-51.690667z"></path>
            </svg>
          </div>
          <span class="search-result-controls-item-text">${data.post_num || "评论"}</span>
        </div>
        <div class="search-result-controls-item" data-type="like">
          <div class="search-result-controls-item-icon">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"></path>
            </svg>
          </div>
          <span class="search-result-controls-item-text">${data.like_num || "点赞"}</span>
        </div>
      </div>
    	`,
    });
    const $author = $item.querySelector<HTMLElement>(".search-result-author-wrapper")!;
    const $title = $item.querySelector<HTMLElement>(".search-result-title")!;
    const $content = $item.querySelector<HTMLElement>(".search-result-content")!;
    const $fname = $item.querySelector<HTMLElement>(".search-result-bottom-fname")!;
    const $share = $item.querySelector<HTMLElement>(".search-result-controls-item[data-type=share]")!;
    const $comment = $item.querySelector<HTMLElement>(".search-result-controls-item[data-type=comment]")!;
    const $like = $item.querySelector<HTMLElement>(".search-result-controls-item[data-type=like]")!;
    // 跳转至用户主页
    DOMUtils.click($author, (evt) => {
      DOMUtils.preventEvent(evt);
      window.open(authorHomeUrl, "_blank");
    });
    // 标题 跳转至帖子
    DOMUtils.click([$title, $content, $comment, $like], (evt) => {
      const $click = evt?.target as HTMLElement;
      if (
        ($click instanceof HTMLImageElement || $click instanceof HTMLVideoElement) &&
        $click.closest(".search-result-media-wrapper") &&
        !$click.matches(".search-result-media-wrapper")
      ) {
        // 点击到图片、视频则忽略
        return;
      }
      DOMUtils.preventEvent(evt);
      window.open(url, "_blank");
    });
    // 跳转至吧
    DOMUtils.click($fname, (evt) => {
      DOMUtils.preventEvent(evt);
      window.open(TiebaUrlHandler.getForum(fname), "_blank");
    });
    // 分享按钮
    DOMUtils.click($share, (evt) => {
      DOMUtils.preventEvent(evt);
      async function triggerWebShare() {
        if (navigator.share) {
          try {
            await navigator.share({
              title: data.title || "默认标题",
              text: data.content || "分享内容描述",
              url: url,
            });
            console.log("分享成功");
          } catch (error: any) {
            if (error.name === "AbortError") {
              console.log("用户取消分享");
            } else {
              console.error("分享失败:", error);
              alert("分享失败，请手动复制链接");
            }
          }
        } else {
          alert("当前浏览器不支持分享功能");
        }
      }
      triggerWebShare();
    });
    return $item;
  },
  /**
   * 清空搜索结果
   */
  clearSearchResult() {
    log.success("清空搜索结果");
    const $loading = this.$context.loading.$el;
    Array.from(this.$el.$searchResultList.children).forEach(($item) => {
      if ($item != $loading) {
        $item.remove();
      }
    });
  },
  /**
   * 显示搜索结果选项
   */
  showSearchResultModel() {
    DOMUtils.show(this.$el.$searchModelWrapper);
  },
  /**
   * 隐藏搜索结果选项
   */
  hideSearchResultModel() {
    DOMUtils.hide(this.$el.$searchModelWrapper);
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
      this.$el.$searchInput.focus();
    }, 20);
    // 禁止body滚动
    document.body.style.overflow = "hidden";
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
    // 搜索框隐藏的话就显示出来
    // 隐藏搜索框
    this.hideSearchContainer();
    // 允许body滚动
    document.body.style.overflow = "";
  },
  /**
   * 获取搜索内容
   */
  getSearchText() {
    const searchText = this.$el.$searchInput.value.trim();
    return searchText;
  },
  /**
   * 添加滚动事件
   */
  addScrollEvent() {
    log.success("添加滚动事件");
    const lockFn = new utils.LockFunction(async () => {
      await this.searchThread();
    });
    this.$context.intersectionObserver = utils.mutationVisible(this.$context.loading.$el, lockFn.run);
  },
  /**
   * 移除滚动事件
   */
  removeScrollEvent() {
    log.success("移除滚动事件");
    this.$context.loading.hide();
    if (this.$context.intersectionObserver) {
      this.$context.intersectionObserver.disconnect();
    }
    this.$context.intersectionObserver = null;
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
  addSearchResult(data: NonNullable<NonNullable<Awaited<ReturnType<typeof TiebaNewPCApi.searchThread>>>["post_list"]>) {
    const $searchItems: HTMLElement[] = [];
    for (const searchResultItem of data) {
      const $item = this.createSearchItemElement(searchResultItem);
      $searchItems.push($item);
    }
    const $loading = this.$context.loading.$el;
    DOMUtils.before($loading, $searchItems);
  },
  isShowSearchContainer() {
    return getComputedStyle(this.$el.$searchContainer).display !== "none";
  },
  showSearchContainer() {
    DOMUtils.show(this.$el.$searchContainer);
  },
  hideSearchContainer() {
    DOMUtils.hide(this.$el.$searchContainer);
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
  async searchThread() {
    this.$context.loading.show();
    let fname = "";
    if (this.$data.searchType === 0) {
      // 设置为本吧搜索
      fname = TiebaCore.getCurrentForumName();
      if (utils.isNull(fname)) {
        Qmsg.error("获取本吧吧名失败");
        this.$context.loading.hide();
        return;
      }
    }
    console.log("搜索页码：", this.$data.pn);
    const searchThreadData = await TiebaNewPCApi.searchThread(
      this.$data.searchText,
      this.$data.pn,
      this.$data.searchThreadSortType,
      this.$data.searchThreadType,
      fname
    );
    if (!searchThreadData) {
      this.$context.loading.hide();
      return;
    }
    this.$data.pn++;
    log.success(searchThreadData);
    const searchData = searchThreadData.post_list!;
    this.addSearchResult(searchData);
    if (searchThreadData.has_more) {
      this.addScrollEvent();
      this.showSearchResultModel();
    } else {
      log.error("搜索结果就1页，移除滚动监听");
      if (searchData.length === 0) {
        this.alertErrorSearch("搜索结果为空");
      }
      this.removeScrollEvent();
    }
  },
  /**
   * 提供对外的搜索链接
   *
   * 判断方式为location.search中包含查询关键字gmsearch
   */
  execByUrlSearchParams() {
    const searchParams = new URLSearchParams(window.location.search);
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
    this.$el.$searchInput.value = searchText;
    if (searchParams.has(KEY_searchType)) {
      // 获取搜素类型
      const searchType = searchParams.get(KEY_searchType)!;
      if (["0", "1"].includes(searchType)) {
        this.$el.$select.selectedIndex = parseInt(searchType);
        DOMUtils.emit(this.$el.$select, "change");
      } else {
        Qmsg.error(`未知searchParams的 ${KEY_searchType} 参数值：${searchType}`);
      }
    }
    if (searchParams.has(KEY_searchModel)) {
      // 获取搜素结果类型
      const searchModel = searchParams.get(KEY_searchModel)!;
      if (["1", "3"].includes(searchModel)) {
        this.$data.searchThreadType = parseInt(searchModel) as typeof this.$data.searchThreadType;
        // 设置搜索结果项
        const $searchResultModelItem = this.$el.$searchModelWrapper.querySelector(
          `.search-result-type-item[data-value="${this.$data.searchThreadType}"]`
        );
        if ($searchResultModelItem) {
          this.$el.$searchModelWrapper
            .querySelectorAll(".search-result-type-item")
            .forEach(($it) => $it.removeAttribute("data-active"));
          $searchResultModelItem.setAttribute("data-active", "true");
        }
      } else {
        Qmsg.error(`未知searchParams的 ${KEY_searchModel} 参数值：${searchModel}`);
      }
    }
    this.$el.$moreBtnDesc.click();
    this.$el.$searchBtn.click();
  },
};

export { TiebaSearch };
