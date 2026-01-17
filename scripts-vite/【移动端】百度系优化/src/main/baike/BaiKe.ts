import { $$, OriginPrototype, addStyle, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { unsafeWindow } from "ViteGM";
import BaiKeShieldCSS from "./shield.css?raw";

export const BaiduBaiKe = {
  init() {
    addStyle(BaiKeShieldCSS);
    log.info("插入CSS规则");
    Panel.execMenuOnce("baidu-baike-hookBox", () => {
      this.hookBox();
    });
  },
  /**
   * 劫持Box
   * + window.Box
   */
  hookBox() {
    log.info("通过劫持window.Box自动展开下一页");
    let old_Box = Reflect.get(unsafeWindow, "Box") ?? {};
    OriginPrototype.Object.defineProperty(unsafeWindow, "Box", {
      get() {
        if (old_Box == null) {
          return;
        }
        return new Proxy(old_Box, {
          get(target, prop, receiver) {
            if (["isBox", "$isBox", "isLiteBox", "$isLiteBox", "isInfoBox", "$isInfoBox"].includes(String(prop))) {
              // fix #323
              Panel.onceExec("baidu-baike-Box-isBox-fix-image", () => {
                utils.mutationObserver(document.body, {
                  config: {
                    subtree: true,
                    childList: true,
                  },
                  callback: () => {
                    const $lazyImg = $$(".photo-item .album-lazy-img[data-url]");
                    $lazyImg.forEach(($el) => {
                      const imgSrc = $el.getAttribute("data-url");
                      if (typeof imgSrc !== "string") return;
                      $el.outerHTML = `<img src="${imgSrc}" loading="lazy">`;
                    });
                  },
                });
              });
              return false;
            }
            if (["isBox", "$isBox"].includes(String(prop)) && Panel.getValue("baidu-baike-Box-isBox")) {
              return true;
            }
            if (["isLiteBox", "$isLiteBox"].includes(String(prop)) && Panel.getValue("baidu-baike-Box-isLiteBox")) {
              return true;
            }
            if (["isInfoBox", "$isInfoBox"].includes(String(prop)) && Panel.getValue("baidu-baike-Box-isInfoBox")) {
              return true;
            }
            if (["isIOS", "$isIOS"].includes(String(prop)) && Panel.getValue("baidu-baike-Box-isIOS")) {
              return true;
            }
            if (["isAndroid", "$isAndroid"].includes(String(prop)) && Panel.getValue("baidu-baike-Box-isAndroid")) {
              return true;
            }
            if (["isAndroid", "$isAndroid"].includes(String(prop)) && Panel.getValue("baidu-baike-Box-isAndroid")) {
              return true;
            }
            if (prop === "android") {
              let android = Reflect.get(target, prop, receiver);
              if (android["invokeApp"] && Panel.getValue("baidu-baike-Box-android.invokeApp")) {
                android["invokeApp"] = function (...args: any[]) {
                  log.info("阻止调用android.invokeApp", args);
                };
              }
              if (android["invokeLiteApp"] && Panel.getValue("baidu-baike-Box-android.invokeLiteApp")) {
                android["invokeLiteApp"] = function (...args: any[]) {
                  log.info("阻止调用android.invokeLiteApp", args);
                };
              }
            }
            if (prop === "ios") {
              let ios = Reflect.get(target, prop, receiver);
              if (ios["invokeLiteApp"] && Panel.getValue("baidu-baike-Box-ios.invokeApp")) {
                ios["invokeLiteApp"] = function (...args: any[]) {
                  log.info("阻止调用ios.invokeApp", args);
                };
              }
            }
            return Reflect.get(target, prop, receiver);
          },
        });
      },
      set(value) {
        old_Box = value;
      },
    });
  },
};
