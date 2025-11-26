import { DOMUtils, log, utils } from "@/env";
import { BaiduRouter } from "@/router/BaiduRouter";
import { Panel } from "@components/setting/panel";
import { VueUtils } from "@components/utils/VueUtils";
import { unsafeWindow } from "ViteGM";

/** 对vue属性进行赋值 */
export const BaiduSearchVSearchVueProp = {
  init() {
    DOMUtils.onReady(() => {
      if (BaiduRouter.isSearchVSearch_image_content()) {
        Panel.execMenuOnce("baidu_search_vsearch-isBaiduBox", () => {
          this.isBaiduBox();
        });
      }
    });
  },
  /**
   * .sf-image-content-page
   * __vue__.isBaiduBox
   */
  isBaiduBox() {
    VueUtils.waitVuePropToSet(".sf-image-content-page", [
      {
        msg: "等待设置属性 __vue__.isBaiduBox",
        check(vueObj) {
          return typeof vueObj.isBaiduBox === "boolean";
        },
        set(vueObj) {
          log.info("成功设置属性 __vue__.isBaiduBox");
          vueObj.isBaiduBox = true;
        },
      },
    ]);
  },
};

export const BaiduSearchVSearch = {
  init() {
    this.listenRouterChange();
    BaiduSearchVSearchVueProp.init();
    DOMUtils.onReady(() => {
      this.replaceVSearchLink();
    });
  },

  /**
   * 替换链接-vsearch
   */
  replaceVSearchLink() {
    /** 替换链接 */
    function replaceLink() {
      document.querySelectorAll<HTMLDivElement>("#realtime-container  div:not([class])").forEach((element) => {
        let linkElement = element.querySelector<HTMLAnchorElement>("a");
        if (!linkElement) {
          return;
        }
        if (linkElement.hasAttribute("data-sf-visited")) {
          let dataSfVisited = linkElement.getAttribute("data-sf-visited")!;
          if (dataSfVisited !== linkElement.href) {
            linkElement!.href = dataSfVisited;
            log.success("替换链接  " + dataSfVisited);
          }
        }
      });
    }

    DOMUtils.waitNode<HTMLDivElement>("#realtime-container .c-infinite-scroll").then((element) => {
      let replaceVSearchLinkLonkFunction = new utils.LockFunction(replaceLink, 600);
      utils.mutationObserver(element, {
        config: {
          subtree: true,
          childList: true,
        },
        callback: () => {
          replaceVSearchLinkLonkFunction.run();
        },
      });
    });
  },
  /**
   * 监听路由变化
   */
  listenRouterChange() {
    log.info("监听路由变化");
    const popstateEvent = (event: Event) => {
      console.log(event);
    };
    DOMUtils.on(unsafeWindow, "popstate", popstateEvent);
  },
};
