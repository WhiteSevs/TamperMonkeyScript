import { $, $$, addStyle, DOMUtils, log, utils } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const DouYinSearchBlock = {
  init() {
    Panel.execMenuOnce("douyin-search-shieldReleatedSearches", () => {
      return this.shieldReleatedSearches();
    });
    Panel.execMenuOnce("douyin-search-blockAIAsk", () => {
      return this.blockAIAsk();
    });
    Panel.execMenuOnce("douyin-search-blockAskAI", () => {
      return this.blockAskAI();
    });
    Panel.execMenuOnce("dy-search-blockUserLiveFlashingAvatar", () => {
      return this.blockUserLiveFlashingAvatar();
    });
    Panel.execMenuOnce("dy-search-blockKeywordsOptions", () => {
      return this.blockKeywordsOptions();
    });
    Panel.execMenuOnce("dy-search-blockSideBar", () => {
      return this.blockSideBar();
    });
    Panel.execMenuOnce("dy-search-blockAIAssistant", () => {
      return this.blockAIAssistant();
    });
    this.resizeSearchFilterBar();
  },
  /**
   * 把搜索结果过滤器宽度自适应
   */
  resizeSearchFilterBar() {
    DOMUtils.onReady(() => {
      const $searchFilter = $<HTMLElement>("div:has(+#search-result-container)");
      const $searchResultContainer = $<HTMLElement>("#search-result-container");
      if (!$searchFilter) {
        return;
      }
      if (!$searchResultContainer) {
        return;
      }
      const searchResultContainerWidth = DOMUtils.width($searchResultContainer);
      DOMUtils.css($searchFilter, "width", searchResultContainerWidth + "px");
    });
  },
  /**
   * 【屏蔽】相关搜索
   */
  shieldReleatedSearches() {
    log.info("【屏蔽】相关搜索");
    const lockFn = new utils.LockFunction(() => {
      if (!DouYinRouter.isSearch()) return;
      $$<HTMLElement>('[id^="waterfall_item"]:has(.search-result-card p)').forEach(($el) => {
        const $p = $el.querySelector("p")!;
        const text = DOMUtils.text($p);
        if (text.includes("相关搜索")) {
          DOMUtils.remove($el);
        }
      });
    });
    const observer = utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });
    return [
      CommonUtil.addBlockCSS("#search-content-area > div > div:nth-child(2)"),
      addStyle(/*css*/ `
			/* 把搜索结果宽度自适应 */
			#search-result-container{
        width: auto !important;
			}`),
      () => {
        observer.disconnect();
      },
    ];
  },
  /**
   * 【屏蔽】AI问一问
   */
  blockAIAsk() {
    log.info(`【屏蔽】AI问一问`);
    return CommonUtil.addBlockCSS("#search-content-area > div > div:nth-child(2) > div > div:first-child");
  },
  /**
   * 【屏蔽】问问AI
   */
  blockAskAI() {
    // 为你找到以下结果，问问AI智能总结内容
    log.info(`【屏蔽】问问AI`);
    return CommonUtil.addBlockCSS("#search-toolbar-container>div:last-child:not(:first-child):not(:empty):has(svg)");
  },
  /**
   * 【屏蔽】AI为你生成回答
   */
  blockAIAssistant() {
    log.info(`【屏蔽】AI为你生成回答`);
    return addBlockCSS('#search-result-container .search-result-card:first-child:has([data-card-name*="search_ai"])');
  },
  /**
   * 【屏蔽】用户直播时闪烁的头像
   */
  blockUserLiveFlashingAvatar() {
    log.info(`【屏蔽】用户直播时闪烁的头像`);
    return addStyle(/*css*/ `
      .search-result-card a[href*="live.douyin.com"][data-e2e="web_search"] div{
        animation: none !important;
        --fallback-avatar-image: none !important;
        --label-image: none !important;
        --live-color: transparent !important;
      }
    `);
  },
  /**
   * 【屏蔽】关键词选项
   */
  blockKeywordsOptions() {
    log.info(`【屏蔽】关键词选项`);
    return addBlockCSS("#search-toolbar-container > div:nth-child(2):not(:empty)");
  },
  /**
   * 【屏蔽】侧边栏
   */
  blockSideBar() {
    log.info(`【屏蔽】侧边栏`);
    return addBlockCSS("#douyin-sidebar");
  },
};
