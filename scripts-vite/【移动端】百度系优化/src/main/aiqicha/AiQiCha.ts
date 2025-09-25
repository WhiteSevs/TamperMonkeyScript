import { addStyle, log } from "@/env";
import AiQiChaShieldCSS from "./shield.css?raw";
import { unsafeWindow } from "ViteGM";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

const BaiduAiQiCha = {
  init() {
    addStyle(AiQiChaShieldCSS);
    log.info("插入CSS规则");
    this.camouflageBottomPopup();
    Panel.execMenuOnce("baidu_aiqicha_shield_carousel", () => {
      return this.shieldCarousel();
    });
    Panel.execMenuOnce("baidu_aiqicha_shield_industry_host_news", () => {
      return this.shieldIndustryHostNews();
    });
  },
  /**
   * 伪装为已经弹窗过了
   */
  camouflageBottomPopup() {
    log.info("伪装为已经弹窗过了");
    unsafeWindow.localStorage.setItem("coupon_bottom_popup", new Date().getTime().toString());
  },
  /**
   * 屏蔽轮播图
   */
  shieldCarousel() {
    log.info("屏蔽轮播图");
    return CommonUtil.addBlockCSS("div.index-banner-container.van-swipe");
  },
  /**
   * 屏蔽行业热点新闻
   */
  shieldIndustryHostNews() {
    log.info("屏蔽行业热点新闻");
    return CommonUtil.addBlockCSS(" div.hot-news");
  },
};
export { BaiduAiQiCha };
