import { DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";

export const M_XHSHome = {
  init() {
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("little-red-book-repariClick", () => {
        return M_XHSHome.repariClick();
      });
    });
  },
  /**
   * 修复正确的点击跳转-用户主页
   * 点啥都不好使，都会跳转至下载页面
   */
  repariClick() {
    log.info("修复正确的点击跳转");
    const callback = (event: MouseEvent | PointerEvent) => {
      let $click = event.target as HTMLElement;
      log.info(["点击的按钮元素", $click]);
      if ($click?.className?.includes("follow-btn")) {
        /* 关注按钮 */
        /* 就不关注 */
        log.success("点击-关注按钮");
      } else if ($click?.closest("button.reds-button.message-btn")) {
        /* 私信按钮 */
        /* 就不私信 */
        log.success("点击-私信按钮");
      } else if ($click?.closest("div.reds-tab-item")) {
        /* 笔记/收藏按钮 */
        log.success("点击-笔记/收藏按钮");
      } else if ($click?.closest("section.reds-note-card")) {
        /* 笔记卡片 */
        log.success("点击-笔记卡片");
        let sectionElement = $click?.closest("section.reds-note-card") as HTMLElement;
        let note_id =
          sectionElement.getAttribute("id") ||
          utils.toJSON(sectionElement.getAttribute("impression"))?.["noteTarget"]?.["value"]?.["noteId"];
        if (note_id) {
          window.open(
            `https://www.xiaohongshu.com/discovery/item/${
              $click?.closest("section.reds-note-card")?.getAttribute("id") as string
            }`,
            "_blank"
          );
        } else {
          Qmsg.error("获取笔记note_id失败");
        }
      }
      DOMUtils.preventEvent(event);
      return false;
    };
    DOMUtils.on(document, "click", callback, {
      capture: true,
    });
    return [
      () => {
        DOMUtils.off(document, "click", callback, { capture: true });
      },
    ];
  },
};
