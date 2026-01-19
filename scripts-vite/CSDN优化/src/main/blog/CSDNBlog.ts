import { $$, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { unsafeWindow } from "ViteGM";
import { CSDNBlogBlock } from "./CSDNBlogBlock";

export const CSDNBlog = {
  init() {
    CSDNBlogBlock.init();
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("csdn-blog-removeClipboardHijacking", () => {
        this.removeClipboardHijacking();
      });
      Panel.execMenuOnce("csdn-blog-unBlockCopy", () => {
        this.unBlockCopy();
      });
    });
  },
  /**
   * 拦截-复制的小尾巴
   */
  removeClipboardHijacking() {
    log.info("拦截-复制的小尾巴");
    DOMUtils.remove(".article-copyright");
    if (unsafeWindow.articleType) {
      unsafeWindow.articleType = 0;
    }
    if (unsafeWindow?.csdn?.copyright?.textData) {
      unsafeWindow.csdn.copyright.textData = "";
    }
    if (unsafeWindow?.csdn?.copyright?.htmlData) {
      unsafeWindow.csdn.copyright.htmlData = "";
    }
  },
  /**
   * 劫持-禁止复制
   */
  unBlockCopy() {
    log.info("劫持-禁止复制");
    // 覆盖【复制】按钮的点击事件
    DOMUtils.on(
      document,
      "click",
      ".hljs-button",
      function (event, $click) {
        DOMUtils.preventEvent(event);
        const $hljs = $click.closest<HTMLElement>(".hljs") || $click.closest<HTMLElement>("pre");
        const $parent = $click.parentElement as HTMLElement;
        const $code =
          $hljs?.querySelector<HTMLElement>("code") || $parent.querySelector<HTMLElement>("code") || $parent;
        /**
         * 需要复制的文本
         *
         * 这里不使用textContent是因为要获取换行符
         */
        const copyText = $code.innerText;
        log.info("点击复制按钮复制内容：" + (copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText), $code);
        utils.copy(copyText);
        $click.setAttribute("data-title", "复制成功");
      },
      {
        capture: true,
      }
    );
    /* 修改点击复制按钮后修改悬浮的文字 */
    const changeDataTitle = new utils.LockFunction(function (event: Event) {
      const $mouse = event.target as HTMLElement;
      if ($mouse.localName !== "pre") {
        return;
      }
      const $hljsBtn = $mouse.querySelector(".hljs-button");
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
      if (unsafeWindow.$) {
        unsafeWindow.$("#content_views")?.unbind("copy");
      }
      DOMUtils.on(
        $content_views,
        "copy",
        function (event) {
          DOMUtils.preventEvent(event);
          const selectText = unsafeWindow.getSelection()!;
          const copyText = selectText?.toString();
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
};
