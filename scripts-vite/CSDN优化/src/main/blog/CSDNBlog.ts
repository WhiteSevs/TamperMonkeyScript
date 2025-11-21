import { $$, addStyle, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { unsafeWindow } from "ViteGM";
import BlogCSS from "./css/CSDNBlog.css?raw";
import BlogShieldCSS from "./css/shield.css?raw";

export const CSDNBlog = {
  init() {
    Panel.onceExec("csdn-blog-blockCSS", () => {
      return this.addCSS();
    });
    Panel.execMenuOnce("csdn-blog-shieldTopToolbar", () => {
      return this.shieldTopToolbar();
    });
    DOMUtils.ready(() => {
      Panel.execMenuOnce("csdn-blog-removeClipboardHijacking", () => {
        this.removeClipboardHijacking();
      });
      Panel.execMenuOnce("csdn-blog-unBlockCopy", () => {
        this.unBlockCopy();
      });
    });
  },
  /**
   * 添加屏蔽CSS和功能CSS
   */
  addCSS() {
    log.info("添加屏蔽CSS和功能CSS");
    return [addStyle(BlogShieldCSS), addStyle(BlogCSS)];
  },
  /**
   * 去除剪贴板劫持
   */
  removeClipboardHijacking() {
    log.info("去除剪贴板劫持");
    let $article_copyright = document.querySelector<HTMLDivElement>(".article-copyright");
    if ($article_copyright) {
      $article_copyright.remove();
    }
    if ((unsafeWindow as any).articleType) {
      (unsafeWindow as any).articleType = 0;
    }
    if (
      (unsafeWindow as any).csdn &&
      (unsafeWindow as any).csdn.copyright &&
      (unsafeWindow as any).csdn.copyright.textData
    ) {
      (unsafeWindow as any).csdn.copyright.textData = "";
    }
    if (
      (unsafeWindow as any).csdn &&
      (unsafeWindow as any).csdn.copyright &&
      (unsafeWindow as any).csdn.copyright.htmlData
    ) {
      (unsafeWindow as any).csdn.copyright.htmlData = "";
    }
  },
  /**
   * 取消禁止复制
   */
  unBlockCopy() {
    log.info("取消禁止复制");
    // 覆盖【复制】按钮的点击事件
    DOMUtils.on(
      document,
      "click",
      ".hljs-button",
      function (event, selectorTarget) {
        DOMUtils.preventEvent(event);
        let $click = selectorTarget;
        let $hljs = $click.closest<HTMLElement>(".hljs") || $click.closest<HTMLElement>("pre");
        let $parent = $click.parentElement as HTMLElement;
        let $code = $hljs?.querySelector<HTMLElement>("code") || $parent.querySelector<HTMLElement>("code") || $parent;
        /**
         * 需要复制的文本
         *
         * 这里不使用textContent是因为要获取换行符
         */
        let copyText = $code.innerText;
        log.info("点击复制按钮复制内容：" + (copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText), $code);
        utils.copy(copyText);
        $click.setAttribute("data-title", "复制成功");
      },
      {
        capture: true,
      }
    );
    /* 修改点击复制按钮后修改悬浮的文字 */
    let changeDataTitle = new utils.LockFunction(function (event: Event) {
      let $mouse = event.target as HTMLElement;
      if ($mouse.localName !== "pre") {
        return;
      }
      let $hljsBtn = $mouse.querySelector<HTMLDivElement>(".hljs-button");
      if ($hljsBtn) {
        $hljsBtn.setAttribute("data-title", "复制");
      }
    });
    DOMUtils.on(
      document,
      ["mouseenter", "mouseleave"],
      function (event) {
        changeDataTitle.run(event);
      },
      {
        capture: true,
      }
    );
    /* 取消Ctrl+C的禁止 */
    DOMUtils.waitNode<HTMLDivElement>("#content_views").then(($content_views) => {
      if ((unsafeWindow as any).$) {
        (unsafeWindow as any).$("#content_views")?.unbind("copy");
      }
      DOMUtils.on(
        $content_views,
        "copy",
        function (event) {
          DOMUtils.preventEvent(event);
          let selectText = unsafeWindow.getSelection()!;
          let copyText = selectText?.toString();
          log.info("Ctrl+C复制内容：" + (copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText));
          utils.copy(copyText);
          return false;
        },
        {
          capture: true,
        }
      );
    });
    /* 删除所有复制按钮的原有的复制事件 */
    DOMUtils.waitNode(".hljs-button").then(() => {
      setTimeout(() => {
        $$<HTMLDivElement>(".hljs-button").forEach(($el) => {
          $el.removeAttribute("onclick");
          $el.removeAttribute("data-report-click");
          $el.setAttribute("data-title", "复制");
        });
      }, 250);
    });
  },
  /**
   * 屏蔽顶部Toolbar
   */
  shieldTopToolbar() {
    log.info("屏蔽顶部Toolbar");
    return CommonUtil.addBlockCSS("#toolbarBox", "#csdn-toolbar");
  },
};
