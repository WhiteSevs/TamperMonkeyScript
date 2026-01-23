import { DOMUtils, log, utils } from "@/env";
import { XHSHook } from "@/hook/XHSHook";
import { XHSRouter } from "@/router/XHSRouter";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";
import { unsafeWindow } from "ViteGM";
import { XHSArticle } from "./article/XHSArticle";
import { XHSArticleFilter } from "./article/XHSArticleFilter";
import { XHSBlock } from "./XHSBlock";

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
    const listener = DOMUtils.on(unsafeWindow, "copy", callback, {
      capture: true,
    });
    return [
      () => {
        listener.off();
      },
    ];
  },
  /**
   * 新标签页打开文章
   */
  openBlankArticle() {
    log.success("新标签页打开文章");
    const callback = (event: MouseEvent | PointerEvent, $click: HTMLElement) => {
      if (!Panel.getValue("pc-xhs-open-blank-article")) return;
      DOMUtils.preventEvent(event);
      const $url = $click.querySelector<HTMLAnchorElement>("a.cover[href]");
      let url = $url?.href;
      if (url) {
        log.info("跳转文章: " + url);
        // 修复访问 收藏夹里的链接出现安全访问限制异常的问题
        const urlInst = new URL(url);
        urlInst.pathname = urlInst.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i, "/discovery/item/");
        url = urlInst.toString();
        window.open(url, "_blank");
      } else {
        Qmsg.error("未找到文章链接");
      }
    };
    const listener = DOMUtils.on(document, "click", ".feeds-container .note-item", callback, {
      capture: true,
    });
    return [
      () => {
        listener.off();
      },
    ];
  },
};
