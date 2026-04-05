import { log } from "@/env";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";

export const blockLeftNavigatorOther = {
  init() {
    Panel.execMenuOnce("shieldLeftNavigator-tab-follow-red-dot", () => {
      return this.tabFollowRedHot();
    });
  },
  /**
   * 【屏蔽】左侧导航栏关注右边的小红点
   */
  tabFollowRedHot() {
    log.info(`【屏蔽】左侧导航栏关注右边的小红点`);
    return addBlockCSS(
      // 99+，其中+就是svg图标
      '[data-e2e="douyin-navigation"] > div > div > div .tab-follow a > div:has(svg):nth-child(3)',
      // 0~99、没有数量
      '[data-e2e="douyin-navigation"] > div > div > div .tab-follow a > div:nth-child(3):not(:has(>div>*))'
    );
  },
};
