import { DOMUtils, log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { XHSBlock } from "./XHSBlock";
import { XHSHook } from "@/hook/XHSHook";
import { XHSArticle } from "./article/XHSArticle";
import Qmsg from "qmsg";
import { XHSRouter } from "@/router/XHSRouter";
import { Panel } from "@components/setting/panel";
import { XHSArticleFilter } from "./article/XHSArticleFilter";

export const XHS = {
  init() {
    XHSArticleFilter.init();
    Panel.execMenuOnce("pc-xhs-hook-vue", () => {
      XHSHook.hookVue();
    });
    Panel.execMenuOnce("pc-xhs-allowCopy", () => {
      return XHS.allowPCCopy();
    });
    Panel.execMenuOnce("pc-xhs-open-blank-article", () => {
      return XHS.openBlankArticle();
    });
    XHSBlock.init();
    Panel.execMenuOnce("pc-xhs-article-showPubsliushTime", () => {
      return XHSArticle.transformPublishTime();
    });
    if (XHSRouter.isArticle()) {
      log.info("Router: 笔记页面");
      XHSArticle.init();
    }
  },
  /**
   * 允许复制
   */
  allowPCCopy() {
    log.success("允许复制文字");
    const callback = (event: ClipboardEvent) => {
      DOMUtils.preventEvent(event);
      let selectText = unsafeWindow.getSelection();
      if (selectText) {
        utils.copy(selectText.toString());
      } else {
        log.error("未选中任何内容");
      }
      return false;
    };
    DOMUtils.on(unsafeWindow, "copy", callback, {
      capture: true,
    });
    return {
      destory() {
        DOMUtils.off(unsafeWindow, "copy", callback, { capture: true });
      },
    };
  },
  /**
   * 新标签页打开文章
   */
  openBlankArticle() {
    log.success("新标签页打开文章");
    let callback = (event: MouseEvent | PointerEvent, $click: HTMLElement) => {
      if (!Panel.getValue("pc-xhs-open-blank-article")) return;
      DOMUtils.preventEvent(event);
      let $url = $click.querySelector<HTMLAnchorElement>("a.cover[href]");
      let url = $url?.href;
      if (url) {
        log.info("跳转文章: " + url);
        // 修复访问 收藏夹里的链接出现安全访问限制异常的问题
        let urlInstance = new URL(url);
        urlInstance.pathname = urlInstance.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i, "/discovery/item/");
        url = urlInstance.toString();
        window.open(url, "_blank");
      } else {
        Qmsg.error("未找到文章链接");
      }
    };
    DOMUtils.on(document, "click", ".feeds-container .note-item", callback, {
      capture: true,
    });
    return {
      destory() {
        DOMUtils.off(document, "click", ".feeds-container .note-item", callback, { capture: true });
      },
    };
  },
};
