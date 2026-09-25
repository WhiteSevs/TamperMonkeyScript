import { log } from "@/env";
import { XHSRouter } from "@/router/XHSRouter";
import { addBlockCSS, addStyle } from "@components/env.base";
import { Panel } from "@components/setting/panel";

export const XHSSearch = {
  init() {
    Panel.execMenu("xhs-search-redirectToNonAISearchResultPage", () => {
      return this.redirectToNonAISearchResultPage();
    });
    if (XHSRouter.isAISearch()) {
      Panel.execMenuOnce("xhs-search-blockRightAIPanel", () => {
        return this.blockRightAIPanel();
      });
    }
  },
  /**
   * 重定向至非AI搜索结果页面
   */
  redirectToNonAISearchResultPage() {
    if (XHSRouter.isAISearch()) {
      log.info(`重定向至非AI搜索结果页面`);
      window.location.pathname = "/search_result";
    }
  },
  /**
   * 【屏蔽】右侧AI面板
   */
  blockRightAIPanel() {
    log.info(`【屏蔽】右侧AI面板`);
    return [
      addBlockCSS(".ai-feeds-page .ai-chat-section-divider", ".ai-feeds-page .ai-chat-section"),
      addStyle(/*css*/ `
        .ai-feeds-page .search-layout-wrapper{
            padding-right: 0px !important;
        }
    `),
    ];
  },
};
