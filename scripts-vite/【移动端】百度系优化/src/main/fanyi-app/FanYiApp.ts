import { addStyle, log, utils } from "@/env";
import FanYiAppShieldCSS from "./shield.css?raw";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

const BaiduFanYiApp = {
  init() {
    addStyle(FanYiAppShieldCSS);
    log.info("插入CSS规则");
    this.repairContentHeight();
    Panel.execMenuOnce("baidu_fanyi_app_shield_column_information", () => {
      return this.shieldColumnInformation();
    });
    Panel.execMenuOnce("baidu_fanyi_app_shield_recommended_for_you", () => {
      return this.shieldRecommendedForYou();
    });
    Panel.execMenuOnce("baidu_fanyi_app_shield_i_need_to_follow_along", () => {
      return this.shieldINeedToFollowAlong();
    });
  },
  /**
   * 修复内容高度
   */
  repairContentHeight() {
    utils.waitNode<HTMLDivElement>("#page-content").then(($pageContent) => {
      log.info("修复内容高度");
      $pageContent.setAttribute("style", "max-height:unset !important");
    });
  },
  /**
   * 隐藏专栏信息
   */
  shieldColumnInformation() {
    log.info("隐藏专栏信息");
    return CommonUtil.addBlockCSS("div.fanyi-zhuan-lan-wrapper");
  },
  /**
   * 隐藏推荐
   */
  shieldRecommendedForYou() {
    log.info("隐藏推荐");
    return CommonUtil.addBlockCSS("#fr-section");
  },
  /**
   * 隐藏需要跟随
   */
  shieldINeedToFollowAlong() {
    log.info("隐藏需要跟随");
    return CommonUtil.addBlockCSS(".cover-all .daily-bottom");
  },
};

export { BaiduFanYiApp };
