import { log } from "@/env";
import { addBlockCSSWithEnd } from "@components/env.base";
import { Panel } from "@components/setting/panel";

export const BaiduHome = {
  init() {
    Panel.execMenuOnce("baidu-search-home-simplifyTheHomepage", () => {
      return this.simplifyTheHomepage();
    });
  },
  /**
   * 精简首页
   */
  simplifyTheHomepage() {
    log.info(`精简首页`);
    return addBlockCSSWithEnd(
      // 文心推广
      "#chat-input-extension",
      // 百度热搜
      "#s-hotsearch-wrapper"
    );
  },
};
