import { log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { VueUtils } from "@components/utils/VueUtils";
import DOMUtils from "@whitesev/domutils";
import Qmsg from "qmsg";

export const WeiBoHotSearch = {
  init() {
    Panel.execMenuOnce("weibo-hot-search-openBlank", () => {
      this.openBlank();
    });
  },
  /**
   * 新标签页打开链接
   */
  openBlank() {
    DOMUtils.on(
      document,
      "click",
      ".card-list .card",
      (event, targetSelector) => {
        DOMUtils.preventEvent(event);
        let vueIns = VueUtils.getVue(targetSelector);
        if (!vueIns) {
          log.error("没有找到对应的Vue实例", vueIns);
          Qmsg.error("没有找到对应的Vue实例");
          return;
        }
        let carddata = vueIns?.carddata;
        if (typeof carddata?.scheme !== "string") {
          log.error("没有找到对应的scheme", vueIns);
          Qmsg.error("没有找到对应的scheme");
          return;
        }
        let scheme = carddata.scheme;
        log.success(`新标签页打开：` + scheme);
        window.open(scheme, "_blank");
      },
      {
        capture: true,
      }
    );
  },
};
