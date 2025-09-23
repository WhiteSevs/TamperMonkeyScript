import { $$, utils } from "@/env";
import { VueUtils } from "@components/utils/VueUtils";
import { Panel } from "@components/setting/panel";

export const BilibiliSearchVueProp = {
  init() {
    Panel.execMenuOnce("bili-search-vue-prop-noCallApp", () => {
      this.noCallApp();
    });
    Panel.execMenuOnce("bili-search-vue-prop-openAppDialog", () => {
      this.openAppDialog();
    });
  },
  /**
   * 该属性会让点击搜索结果弹出打开哔哩哔哩app的弹窗
   * + __vue__.noCallApp
   */
  noCallApp() {
    let lockFn = new utils.LockFunction(() => {
      $$<HTMLDivElement>(".video-list .card-box > div:not([data-gm-inject-no-call-app])").forEach(($card) => {
        let vueIns = VueUtils.getVue($card);
        if (!vueIns) {
          return;
        }
        if (typeof vueIns.noCallApp === "boolean") {
          Object.defineProperty(vueIns, "noCallApp", {
            value: true,
            writable: false,
            enumerable: true,
            configurable: true,
          });
          $card.setAttribute("data-gm-inject-no-call-app", "true");
        }
      });
    });
    utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      callback() {
        lockFn.run();
      },
    });
  },
  /**
   * 该属性会让点击搜索结果弹出打开哔哩哔哩app的弹窗
   * + __vue__.openAppDialog
   */
  openAppDialog() {
    let lockFn = new utils.LockFunction(() => {
      $$<HTMLDivElement>(".video-list .card-box > div:not([data-gm-inject-openAppDialog])").forEach(($card) => {
        let vueIns = VueUtils.getVue($card);
        if (!vueIns) {
          return;
        }
        if (typeof vueIns.openAppDialog === "boolean") {
          Object.defineProperty(vueIns, "openAppDialog", {
            value: false,
            writable: false,
            enumerable: true,
            configurable: true,
          });
          $card.setAttribute("data-gm-inject-openAppDialog", "true");
        }
      });
    });
    utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      callback() {
        lockFn.run();
      },
    });
  },
};
