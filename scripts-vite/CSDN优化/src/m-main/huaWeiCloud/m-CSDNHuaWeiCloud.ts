import { addStyle, log } from "@/env";
import ShieldCSS from "./css/shield.css?raw";
import { CSDNHuaWeiCloud } from "@/main/huaWeiCloud/CSDNHuaWeiCloud";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const M_CSDNHuaWeiCloud = {
  init() {
    addStyle(ShieldCSS);
    Panel.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent", () => {
      return CSDNHuaWeiCloud.autoExpandContent();
    });
    Panel.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity", () => {
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
