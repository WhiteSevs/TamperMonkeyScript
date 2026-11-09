import { addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";
import { createLayoutPicker, getLayoutMode, resolveLayoutMode } from "@/main/layout/DouYinLayoutPicker";
import { DouYinRouter } from "@/router/DouYinRouter";
import pickerCSS from "@/main/layout/css/layoutPicker.css?raw";
import splitCSS from "../css/portraitCommentSplit.css?raw";

const ROOT_SELECTOR = '#sliderVideo[data-e2e="feed-active-video"], ' + '#slideMode[data-e2e="feed-active-video"]';
const SIDE_CARD_SELECTOR = "#videoSideCard, #videoSideBar";
const RELEVANT_SELECTOR = "#sliderVideo, #slideMode, #videoSideCard, #videoSideBar, #relatedVideoCard";
const BOTTOM_CLASS = "dy-comment-layout-bottom";
const LAYOUT_KEY = "dy-video-commentLayout";
const SEARCH_PATH_PATTERN = /(?:^|\/)search(?:\/|$)/;

/**
 * 视频评论区自动/下方/右侧布局。搜索结果的内嵌视频保持原生右侧布局。
 *
 * 不移动 video 节点，以免触发播放器重新加载；关闭评论区时恢复原始布局。
 */
export const DouYinVideoPortraitCommentSplit = {
  init() {
    log.info("启用视频评论区布局切换");
    const styles = [addStyle(splitCSS), addStyle(pickerCSS)];
    const pickers = new Map<HTMLElement, ReturnType<typeof createLayoutPicker>>();

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

    const isInlineSearch = () =>
        SEARCH_PATH_PATTERN.test(window.location.pathname) ||
        document.querySelector("#search-body-container, #search-result-container") != null;

    const isUnsupportedPage = () => DouYinRouter.isLive() || isInlineSearch();
    const clearPicker = ($root: HTMLElement) => {
      $root.classList.remove(BOTTOM_CLASS);
      pickers.get($root)?.destroy();
      pickers.delete($root);
    };

    const update = () => {
      const skip = isUnsupportedPage();
      const bottom = resolveLayoutMode(getLayoutMode(LAYOUT_KEY)) === "bottom";
      const nextActiveRoots = new Set<HTMLElement>();

      if (!skip) for (const $root of document.querySelectorAll<HTMLElement>(ROOT_SELECTOR)) {
        if (!getOpenedCommentPanel($root)) continue;
        $root.classList.toggle(BOTTOM_CLASS, bottom);
        let picker = pickers.get($root);
        if (!picker?.element.isConnected) {
          picker?.destroy();
          picker = createLayoutPicker(LAYOUT_KEY);
          $root.appendChild(picker.element);
          pickers.set($root, picker);
        }
        picker.update();
        nextActiveRoots.add($root);
      }

      for (const $root of pickers.keys()) {
        if (!nextActiveRoots.has($root)) clearPicker($root);
      }
    };

    let frameId: number | null = null;
    let settleTimerId: number | null = null;
    let observerSuspended = false;
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
      // 从视频页切换到直播间时，直播聊天室的频繁更新不应触发视频布局检测。
      if (isUnsupportedPage()) {
        observer.disconnect();
        observerSuspended = true;
        scheduleUpdate();
        return;
      }
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
      if (!document.documentElement || isUnsupportedPage()) return;
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style", "data-e2e", "aria-hidden"],
      });
      observerSuspended = false;
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
    const intervalId = window.setInterval(() => {
      if (isUnsupportedPage()) {
        if (!observerSuspended) {
          observer.disconnect();
          observerSuspended = true;
        }
      } else if (observerSuspended) {
        startObserver();
      }
      update();
    }, 3000);
    if (document.documentElement) startObserver();
    else document.addEventListener("DOMContentLoaded", startObserver, { once: true });
    document.addEventListener("click", onClick, true);
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    window.addEventListener("pageshow", scheduleUpdate, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    const modeListenerId = Panel.addValueChangeListener(LAYOUT_KEY, scheduleUpdate);

    return [
      ...styles,
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
        Panel.removeValueChangeListener(modeListenerId);
        for (const $root of pickers.keys()) clearPicker($root);
      },
    ];
  },
};
