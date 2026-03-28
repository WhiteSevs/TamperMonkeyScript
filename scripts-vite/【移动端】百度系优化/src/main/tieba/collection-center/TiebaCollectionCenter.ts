import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import { VueUtils } from "@components/utils/VueUtils";
import DOMUtils from "@whitesev/domutils";
import Qmsg from "qmsg";
import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";

export const TiebaCollectionCenter = {
  init() {
    Panel.execMenuOnce("tieba_collection_center_repair_card_click_jump", () => {
      this.repairCardClickJump();
    });
  },
  /**
   * 修复卡片点击跳转
   */
  repairCardClickJump() {
    log.info(`修复卡片点击跳转`);
    DOMUtils.on(
      document,
      "click",
      ".collection-center .image-card",
      (event, selectorTarget) => {
        DOMUtils.preventEvent(event);
        const vueInst = VueUtils.getVue(selectorTarget);
        if (!vueInst) {
          Qmsg.error("获取vue实例失败");
          return;
        }
        /** 帖子的id */
        const tid = vueInst?.item?.tid;
        if (tid == null) {
          Qmsg.error("获取tid失败");
          return;
        }
        /** 帖子的链接 */
        const url = TiebaUrlHandler.getThread(tid);
        if (Panel.getValue("tieba_collection_center_repair_card_click_jump_open_new_tab")) {
          window.open(url, "_blank");
        } else {
          window.location.href = url;
        }
      },
      { capture: true }
    );
  },
};
