import { addStyle, log } from "@/env";
import ShieldCSS from "./css/shield.css?raw";
import { CSDNDevPressArticle } from "@/main/devpress/CSDNDevPressArticle";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const M_CSDNDevPressArticle = {
  init() {
    addStyle(ShieldCSS);
    Panel.execMenuOnce("m-csdn-devpress-autoExpandContent", () => {
      return CSDNDevPressArticle.autoExpandContent();
    });
    Panel.execMenuOnce("m-csdn-devpress-blockRecommendedContentAtTheBottom", () => {
      return CSDNDevPressArticle.blockRecommendedContentAtTheBottom();
    });
    Panel.execMenuOnce("m-csdn-devpress-blockBottomJoinTheCommunity", () => {
      return this.blockBottomJoinTheCommunity();
    });
  },
  /**
   * 【屏蔽】底部加入社区
   */
  blockBottomJoinTheCommunity() {
    log.info("【屏蔽】底部加入社区");
    return CommonUtil.addBlockCSS(".user-desc");
  },
};
