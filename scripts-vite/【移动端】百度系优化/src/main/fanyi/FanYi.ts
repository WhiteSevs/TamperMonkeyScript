import { addStyle, DOMUtils, log, utils } from "@/env";
import FanYiShieldCSS from "./shield.css?raw";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

const BaiduFanYi = {
  init() {
    addStyle(FanYiShieldCSS);
    log.info("插入CSS规则");
    Panel.execMenuOnce("baidu_fanyi_recommended_shielding_bottom", () => {
      return this.shieldRecommendBottom();
    });
    Panel.execMenuOnce("baidu_fanyi_other_shielding_bottom", () => {
      return this.shieldBottom();
    });
    Panel.execMenuOnce("baidu_fanyi_auto_focus", () => {
      this.autoFocus();
    });
  },
  /**
   * 屏蔽底部推荐
   */
  shieldRecommendBottom() {
    log.info("屏蔽底部推荐");
    return CommonUtil.addBlockCSS("section.article.android-style");
  },
  /**
   * 屏蔽底部
   */
  shieldBottom() {
    log.info("屏蔽底部");
    return CommonUtil.addBlockCSS(".trans-other-wrap.clearfix");
  },
  /**
   * 自动聚焦输入框
   */
  autoFocus() {
    DOMUtils.waitNode<HTMLTextAreaElement>("textarea#j-textarea").then(($textarea) => {
      log.info("自动聚焦输入框");
      setTimeout(() => {
        $textarea.focus();
      }, 2500);
    });
  },
};

export { BaiduFanYi };
