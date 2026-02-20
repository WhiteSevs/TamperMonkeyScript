import { $, addStyle, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { MTUtils } from "@/utils/MTUtils";
import { unsafeWindow } from "ViteGM";

export const MTForumPostRightToolBar = {
  init() {
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("mt-forum-post-quickCollentBtn", () => {
        return this.quickCollentBtn();
      });
      Panel.execMenuOnce("mt-forum-post-quickReplyOptimization", () => {
        return this.quickReplyOptimization();
      });
    });
  },
  /**
   * 【快捷收藏】
   */
  async quickCollentBtn() {
    log.info(`【快捷收藏】`);
    const $scrollTop = await DOMUtils.waitNode<HTMLDivElement>("#scrolltop", 10000);
    if (!$scrollTop) {
      return;
    }
    let formhash = await MTUtils.getFormHash();
    let threadId = MTUtils.getThreadId(window.location.href)!;
    // 收藏的链接
    let collectUrl = `/home.php?${utils.toSearchParamsStr({
      mod: "spacecp",
      ac: "favorite",
      type: "thread",
      id: threadId,
      formhash: formhash,
      infloat: "yes",
      handlekey: "k_favorite",
      inajax: 1,
      ajaxtarget: "fwin_content_k_favorite",
    })}`;
    let $collect = DOMUtils.createElement("span", {
      innerHTML: /*html*/ `
      <a href="${collectUrl}" 
        id="k_favorite"
        onclick="showWindow(this.id, this.href, 'get', 0);"
        onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
        <img src="data:image/png;base64,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"
            height="26" 
            width="26" 
            style="position:absolute;top:10px;left:11px">
      </a>
      `,
    });
    DOMUtils.prepend($scrollTop, $collect);
    return [
      addStyle(/*css*/ `
      a#k_favorite{
        background: #ffffff;
      }
      a#k_favorite:hover{
        background: #f80 !important;
      }
    `),
      () => {
        DOMUtils.remove($collect);
      },
    ];
  },
  /**
   * 快捷回复优化
   */
  async quickReplyOptimization() {
    const $el = await DOMUtils.waitNode<HTMLAnchorElement>('#scrolltop a[title="快速回复"]', 10000);
    if (!$el) {
      return;
    }
    log.info(`快捷回复优化`);
    const listener = DOMUtils.on($el, "click", function () {
      unsafeWindow.showWindow("reply", $el.href);
      log.info(`等待弹窗出现`);
      DOMUtils.waitNode<HTMLDivElement>("#moreconf", 10000).then(($moreconf) => {
        if (!$moreconf) {
          return;
        }
        log.success(`弹出出现，添加按钮`);
        let $oneKeySpace = DOMUtils.createElement(
          "button",
          {
            innerText: "一键空格",
            type: "button",
            id: "insertspace2",
          },
          {
            style: "float: left;",
          }
        );
        DOMUtils.on($oneKeySpace, "click", (event) => {
          DOMUtils.preventEvent(event);
          DOMUtils.val(
            $<HTMLInputElement>("#postmessage")!,
            DOMUtils.val($<HTMLInputElement>("#postmessage")!) + "           "
          );
        });
        DOMUtils.append($moreconf, $oneKeySpace);
      });
    });
    return listener.off;
  },
};
