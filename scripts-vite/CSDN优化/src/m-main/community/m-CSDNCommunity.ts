import { addStyle, log } from "@/env";
import ShieldCSS from "./css/shield.css?raw";
import { CSDNCommunity } from "@/main/community/CSDNCommunity";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const M_CSDNCSDNCommunity = {
  init() {
    addStyle(ShieldCSS);
    Panel.execMenuOnce("m-csdn-community-autoExpandContent", () => {
      return CSDNCommunity.autoExpandContent();
    });
    Panel.execMenuOnce("m-csdn-community-blockRecommendedContentAtTheBottom", () => {
      return CSDNCommunity.blockRecommendedContentAtTheBottom();
    });
    Panel.execMenuOnce("m-csdn-community-blockBottomJoinTheCommunity", () => {
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
