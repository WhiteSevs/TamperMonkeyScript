import { addStyle, log } from "@/env";
import splitCSS from "../css/portraitCommentSplit.css?raw";

const ROOT_SELECTOR = '#sliderVideo[data-e2e="feed-active-video"], ' + '#slideMode[data-e2e="feed-active-video"]';
const SIDE_CARD_SELECTOR = "#videoSideCard, #videoSideBar";
const RELEVANT_SELECTOR = "#sliderVideo, #slideMode, #videoSideCard, #videoSideBar, #relatedVideoCard";
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
        if ($root.classList.contains(ACTIVE_CLASS_NAME) !== shouldSplit) {
          $root.classList.toggle(ACTIVE_CLASS_NAME, shouldSplit);
        }
        if (shouldSplit) nextActiveRoots.add($root);
      }

      for (const $root of activeRoots) {
        if (!nextActiveRoots.has($root)) $root.classList.remove(ACTIVE_CLASS_NAME);
      }
      activeRoots = nextActiveRoots;
    };

    let frameId: number | null = null;
    let settleTimerId: number | null = null;
    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(() => {
          frameId = null;
          update();
        });
      }
      // 评论面板可能带有 150ms 展开动画，动画结束后再检查一次。
      if (settleTimerId !== null) window.clearTimeout(settleTimerId);
      settleTimerId = window.setTimeout(() => {
        settleTimerId = null;
        update();
      }, 180);
    };

    const containsRelevantElement = (node: Node) => {
      if (node.nodeType !== 1) return false;
      const $element = node as Element;
      return $element.matches(RELEVANT_SELECTOR) || $element.querySelector(RELEVANT_SELECTOR) != null;
    };
    const observer = new MutationObserver((mutations) => {
      const hasRelevantChange = mutations.some((mutation) => {
        const $target = mutation.target as Element;
        if (mutation.type === "attributes") {
          // 忽略播放器进度条等频繁变化的样式属性。
          return $target.matches(RELEVANT_SELECTOR);
        }
        if ($target.matches(RELEVANT_SELECTOR) || $target.closest(SIDE_CARD_SELECTOR)) return true;
        return [...mutation.addedNodes, ...mutation.removedNodes].some(containsRelevantElement);
      });
      if (hasRelevantChange) scheduleUpdate();
    });
    const startObserver = () => {
      if (!document.documentElement) return;
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style", "data-e2e", "aria-hidden"],
      });
      scheduleUpdate();
    };
    const onClick = (event: MouseEvent) => {
      const $target = event.target;
      if ($target instanceof Element && $target.closest(RELEVANT_SELECTOR)) scheduleUpdate();
    };
    const onVisibilityChange = () => {
      if (!document.hidden) scheduleUpdate();
    };

    update();
    // 以 DOM 变化触发为主，低频轮询只用于页面样式变化等兜底场景。
    const intervalId = window.setInterval(update, 3000);
    if (document.documentElement) startObserver();
    else document.addEventListener("DOMContentLoaded", startObserver, { once: true });
    document.addEventListener("click", onClick, true);
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    window.addEventListener("pageshow", scheduleUpdate, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return [
      $style,
      () => {
        observer.disconnect();
        document.removeEventListener("DOMContentLoaded", startObserver);
        document.removeEventListener("click", onClick, true);
        window.clearInterval(intervalId);
        if (frameId !== null) window.cancelAnimationFrame(frameId);
        if (settleTimerId !== null) window.clearTimeout(settleTimerId);
        window.removeEventListener("resize", scheduleUpdate);
        window.removeEventListener("pageshow", scheduleUpdate);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        for (const $root of activeRoots) $root.classList.remove(ACTIVE_CLASS_NAME);
        activeRoots.clear();
      },
    ];
  },
};
