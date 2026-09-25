import { log } from "@/env";
import { addBlockCSS, addStyle } from "@components/env.base";
import { Panel } from "@components/setting/panel";

export const XHSSearch = {
  init() {
    Panel.execMenuOnce("xhs-search-blockRightAIPanel", () => {
      return this.blockRightAIPanel();
    });
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
