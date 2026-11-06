import { addStyle, log } from "@/env";
import splitCSS from "../css/portraitCommentSplit.css?raw";

const ROOT_SELECTOR = '#sliderVideo[data-e2e="feed-active-video"], ' + '#slideMode[data-e2e="feed-active-video"]';
const SIDE_CARD_SELECTOR = "#videoSideCard, #videoSideBar";
const ACTIVE_CLASS_NAME = "dy-portrait-comment-split-active";

/**
 * 手机模式下将已展开的评论区和视频上下分屏。
 *
 * 不移动 video 节点，以免触发播放器重新加载；关闭评论区时恢复原始布局。
 */
export const DouYinVideoPortraitCommentSplit = {
  init() {
    log.info("启用竖屏评论区上下分屏");
    const $style = addStyle(splitCSS);
    let activeRoots = new Set<HTMLElement>();

    const getOpenedCommentPanel = ($root: HTMLElement) => {
      const $player = $root.querySelector<HTMLElement>(".playerContainer");
      if (!$player?.querySelector("video")) return null;

      for (const $panel of $root.querySelectorAll<HTMLElement>(SIDE_CARD_SELECTOR)) {
        if (!$panel.querySelector("#relatedVideoCard")) continue;

        const panelStyle = window.getComputedStyle($panel);
        if (panelStyle.display === "none" || panelStyle.visibility === "hidden" || Number(panelStyle.opacity) < 0.05) {
          continue;
        }

        const panelRect = $panel.getBoundingClientRect();
        const rootRect = $root.getBoundingClientRect();
        const visibleHeight = Math.min(panelRect.bottom, rootRect.bottom) - Math.max(panelRect.top, rootRect.top);
        if (panelRect.width >= 100 && panelRect.height >= 100 && rootRect.height >= 150 && visibleHeight >= 80) {
          return $panel;
        }
      }

      return null;
    };

    const update = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      const nextActiveRoots = new Set<HTMLElement>();

      for (const $root of document.querySelectorAll<HTMLElement>(ROOT_SELECTOR)) {
        const shouldSplit = isPortrait && getOpenedCommentPanel($root) != null;
        $root.classList.toggle(ACTIVE_CLASS_NAME, shouldSplit);
        if (shouldSplit) nextActiveRoots.add($root);
      }

      for (const $root of activeRoots) {
        if (!nextActiveRoots.has($root)) $root.classList.remove(ACTIVE_CLASS_NAME);
      }
      activeRoots = nextActiveRoots;
    };

    const onVisibilityChange = () => {
      if (!document.hidden) update();
    };

    update();
    // 抖音使用动态路由和 React 节点，定期检查评论面板的展开与收起。
    const intervalId = window.setInterval(update, 1000);
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("pageshow", update, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return [
      $style,
      () => {
        window.clearInterval(intervalId);
        window.removeEventListener("resize", update);
        window.removeEventListener("pageshow", update);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        for (const $root of activeRoots) $root.classList.remove(ACTIVE_CLASS_NAME);
        activeRoots.clear();
      },
    ];
  },
};
