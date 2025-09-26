import WenkuCSS from "./css/wenku.css?raw";
import ShieldCSS from "./css/shield.css?raw";
import { Panel } from "@components/setting/panel";
import { addStyle, log } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";

export const CSDNWenKu = {
  init() {
    addStyle(WenkuCSS);
    addStyle(ShieldCSS);
    Panel.execMenuOnce("csdn-wenku-shieldResourceRecommend", () => {
      return this.shieldResourceRecommend();
    });
    Panel.execMenuOnce("csdn-wenku-shieldRightUserInfo", () => {
      return this.shieldRightUserInfo();
    });
    Panel.execMenuOnce("csdn-wenku-shieldRightToolBar", () => {
      return this.shieldRightToolBar();
    });
  },
  /**
   * 【屏蔽】资源推荐
   */
  shieldResourceRecommend() {
    log.info("【屏蔽】资源推荐");
    return CommonUtil.addBlockCSS("#recommend");
  },
  /**
   * 【屏蔽】右侧用户信息
   */
  shieldRightUserInfo() {
    log.info("【屏蔽】右侧用户信息");
    return CommonUtil.addBlockCSS(".layout-right");
  },
  /**
   * 【屏蔽】右侧悬浮工具栏
   */
  shieldRightToolBar() {
    log.info("【屏蔽】右侧悬浮工具栏");
    return CommonUtil.addBlockCSS(".csdn-side-toolbar");
  },
};
