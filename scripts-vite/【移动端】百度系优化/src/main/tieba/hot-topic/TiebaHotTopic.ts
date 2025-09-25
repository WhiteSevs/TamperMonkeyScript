import { $$, addStyle, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { VueUtils } from "@components/utils/VueUtils";
import Qmsg from "qmsg";
import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";

export const TiebaHotTopic = {
  init() {
    // 屏蔽广告
    Panel.onceExec("tieba-hot-topic-blockAds", () => {
      CommonUtil.addBlockCSS(
        "body > .page-content .wise-swan-publish",
        "body > .page-content .wise-navigation .right-action"
      );
    });
    Panel.execMenu("tieba-hot-topic-coverOpenApp", () => {
      this.coverOpenApp();
    });
    Panel.execMenu("tieba-hot-topic-isTiebaApp", () => {
      this.isTiebaApp();
    });
    Panel.execMenuOnce("tieba-hot-topic-isHarmony", () => {
      this.coverCard_isHarmony();
    });
    Panel.execMenuOnce("tieba-hot-topic-openBlank", () => {
      this.openBlank();
    });
  },
  /**
   * 覆盖openApp函数
   */
  coverOpenApp() {
    VueUtils.waitVuePropToSet("body > .page-content", {
      msg: "等待元素.page-content用于覆盖openApp函数",
      check(vueIns) {
        return typeof vueIns?.wakeupApp?.openApp === "function";
      },
      set(vueIns) {
        log.success(`成功覆盖函数openApp`);
        vueIns.wakeupApp.openApp = () => {
          log.success(`阻止调用唤醒App`);
        };
      },
    });
  },
  /**
   * 设置isTiebaApp=true
   */
  isTiebaApp() {
    VueUtils.waitVuePropToSet("body > .page-content .top-title", {
      msg: "等待元素.top-title",
      check(vueIns) {
        return typeof vueIns?.isTiebaApp === "boolean";
      },
      set(vueIns) {
        log.success(`成功设置isTiebaApp = true`);
        vueIns.isTiebaApp = true;
      },
    });
  },
  /**
   * 覆盖所有帖子的isHarmony=true
   */
  coverCard_isHarmony() {
    let lockFn = new utils.LockFunction(() => {
      $$<HTMLElement>(".topic-cards .card-wrapper:not([data-is-cover-harmony])").forEach(($cardWrapper) => {
        let vueIns = VueUtils.getVue($cardWrapper);
        if (!vueIns) {
          return;
        }
        if (typeof vueIns?.isHarmony === "boolean") {
          vueIns.isHarmony = true;
          $cardWrapper.setAttribute("data-is-cover-harmony", "");
        }
      });
    });
    utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      callback: () => {
        lockFn.run();
      },
    });
  },
  /**
   * 新标签页打开链接
   */
  openBlank() {
    log.info(`新标签页打开链接`);
    DOMUtils.on(
      document,
      "click",
      "body > .page-content .topic-cards .card-wrapper",
      (event, $cardWrapper) => {
        let vueIns = VueUtils.getVue($cardWrapper);
        if (!vueIns) {
          log.info($cardWrapper);
          Qmsg.error("未找到vue实例", { consoleLogContent: true });
          return;
        }
        let cardType = vueIns.cardType;
        if (cardType === "hot-thread") {
          utils.preventEvent(event);
          let id = vueIns?.cardData?.id;
          if (typeof id !== "number") {
            Qmsg.error("获取帖子id失败", { consoleLogContent: true });
            return;
          }
          let url = TiebaUrlHandler.getPost(id);
          window.open(url, "_blank");
        }
      },
      { capture: true }
    );
  },
};
