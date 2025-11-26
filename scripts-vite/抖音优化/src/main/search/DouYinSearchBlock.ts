import { Panel } from "@components/setting/panel";
import { $, $$, addStyle, DOMUtils, log, utils } from "@/env";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { CommonUtil } from "@components/utils/CommonUtil";
import { DouYinRouter } from "@/router/DouYinRouter";

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
    let lockFn = new utils.LockFunction(() => {
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
    return CommonUtil.addBlockCSS(
      '#search-toolbar-container>div:has(svg path[d="M14.837 12.506a42.284 42.284 0 0 0 1.96 4.006l.433.775-.992.5-.53-1.001-.208-.4-.017-.032-.034-.009a7.2 7.2 0 0 0-2.023-.233 7.247 7.247 0 0 0-1.647.234l-.034.009-.015.031-.21.4-.53 1-.99-.5.432-.774a42.367 42.367 0 0 0 1.96-4.006l.535-1.255c.456.082.918.082 1.375 0l.535 1.255zm4.538-1.914c-.09.28-.145.567-.164.855-.02.317-.032.64-.032.96v2.823c0 .32.01.643.032.96.019.288.074.575.164.854h-1.472c.09-.28.145-.566.164-.854.021-.32.032-.644.032-.96v-2.823c0-.316-.01-.64-.032-.96a3.556 3.556 0 0 0-.164-.855h1.472zm-6.086 2.411c-.28.684-.585 1.377-.907 2.06l-.063.133.146-.02a8.351 8.351 0 0 1 2.299 0l.145.02-.062-.133a42.237 42.237 0 0 1-.907-2.06l-.326-.796-.325.796z"])'
    );
  },
};
