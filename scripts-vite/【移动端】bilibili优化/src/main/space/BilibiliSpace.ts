import { BilibiliData } from "@/data/BlibiliData";
import { $$, DOMUtils, log, utils } from "@/env";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { VueUtils } from "@components/utils/VueUtils";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";

export const BilibiliSpace = {
  init() {
    Panel.execMenuOnce("bili-space-repairRealJump", () => {
      this.repairRealJump();
    });
    Panel.execMenuOnce("bili-space-coverDynamicStateCardVideo", () => {
      this.coverDynamicStateCardVideo();
    });
  },
  /**
   * 修复视频|动态的正确跳转
   */
  repairRealJump() {
    let lockFn = new utils.LockFunction(() => {
      $$(BilibiliData.className.space + " .wx-tag.open-app-wrapper").forEach(($el) => {
        let vueIns = VueUtils.getVue($el);
        if (typeof vueIns?.disabled === "boolean") {
          vueIns.disabled = false;
        }
      });
    });
    utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });
    return;
  },
  /**
   * 覆盖动态视频的点击事件
   */
  coverDynamicStateCardVideo() {
    log.info(`覆盖动态视频的点击事件`);
    DOMUtils.on(
      document,
      "click",
      ".card-content .main .wings",
      (event) => {
        let $wings = event.target as HTMLElement;
        let $card = $wings.closest(".card")!;
        if (!$card) {
          Qmsg.error("未找到对应的.card元素");
          return;
        }
        let vueIns = VueUtils.getVue($card);
        if (!vueIns) {
          Qmsg.error("未找到对应的vue实例");
          return;
        }
        let url = vueIns?.shareData?.default?.url;
        if (!url) {
          Qmsg.error("未找到对应的url");
          return;
        }
        BilibiliUtils.goToUrl(url);
      },
      {
        capture: true,
      }
    );
  },
};
