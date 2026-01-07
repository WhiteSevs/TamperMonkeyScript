import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

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
    return CommonUtil.addBlockCSS(
      // 99+，其中+就是svg图标
      '[data-e2e="douyin-navigation"] > div > div > div .tab-follow a > div:has(svg):nth-child(3)',
      // 0~99、没有数量
      '[data-e2e="douyin-navigation"] > div > div > div .tab-follow a > div:nth-child(3):not(:has(>div>*))'
    );
  },
};
