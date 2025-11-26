import { DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { VueUtils } from "@components/utils/VueUtils";
import type { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";

export const TiebaHybridUsergrowBaseCommentFocus = {
  init() {
    Panel.onceExec("tieba-hybrid-usergrow-base-block-ads", () => {
      return this.blockAds();
    });
    DOMUtils.onReady(() => {
      Panel.onceExec("tieba-hybrid-usergrow-base-prevent_openTiebaApp", () => {
        this.prevent_openTiebaApp();
      });
    });
  },
  /**
   * 屏蔽广告
   */
  blockAds() {
    return CommonUtil.addBlockCSS(
      // 贴吧APP内查看
      ".tbm-status .fix-guide-btn",
      // 热门推荐
      ".tbm-status .relate-list"
    );
  },
  /**
   * 阻止打开app
   */
  prevent_openTiebaApp() {
    log.info(`阻止打开app`);
    VueUtils.waitVuePropToSet(".tbm-status", {
      check(vueInst, $el) {
        return Array.isArray(vueInst?.$children) && vueInst?.$children?.length > 0;
      },
      set(vueInst, $el) {
        let disable_openTiebaApp = ($children: Vue2Instance[]) => {
          if (!Array.isArray($children)) return;
          for (const $childrenItem of $children) {
            if (typeof $childrenItem.openTiebaApp === "function") {
              $childrenItem.openTiebaApp = () => {
                log.success(`成功阻止打开app`);
              };
            }
            if (Array.isArray($childrenItem.$children)) {
              disable_openTiebaApp($childrenItem.$children);
            }
          }
        };
        disable_openTiebaApp(vueInst.$children);
      },
    });
  },
};
