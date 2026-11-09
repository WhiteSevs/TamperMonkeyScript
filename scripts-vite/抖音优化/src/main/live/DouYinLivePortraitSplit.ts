import { addStyle, log } from "@/env";
import { createLayoutPicker, getLayoutMode, resolveLayoutMode } from "@/main/layout/DouYinLayoutPicker";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import pickerCSS from "@/main/layout/css/layoutPicker.css?raw";
import splitCSS from "./css/portraitSplit.css?raw";

const ROOT_CLASS = "dy-live-layout-bottom";
const ACTIVE_CLASS = "dy-live-layout-active";
const COLLAPSED_CLASS = "dy-live-chat-collapsed";
const LAYOUT_KEY = "dy-live-chatLayout";

/**
 * 仅改变直播页面现有的容器布局，不移动播放器或聊天室节点。
 * 直播页面消息更新频繁，使用低频检测识别路由与容器替换，避免全局 DOM 观察器。
 */
export const DouYinLivePortraitSplit = {
  init() {
    log.info("启用直播聊天区布局切换");
    const styles = [addStyle(splitCSS), addStyle(pickerCSS)];
    let $root: HTMLElement | null = null;
    let $controls: HTMLDivElement | null = null;
    let $toggle: HTMLButtonElement | null = null;
    let picker: ReturnType<typeof createLayoutPicker> | null = null;
    let collapsed = false;

    const updateButton = () => {
      if (!$root || !$toggle) return;
      $root.classList.toggle(COLLAPSED_CLASS, collapsed);
      $controls?.classList.toggle(
        "dy-live-chat-controls-bottom",
        $root.classList.contains(ROOT_CLASS) && !collapsed
      );
      const label = collapsed ? "展开聊天" : "收起聊天 ×";
      const expanded = String(!collapsed);
      const title = collapsed ? "展开直播聊天区" : "隐藏直播聊天区";
      if ($toggle.textContent !== label) $toggle.textContent = label;
      if ($toggle.getAttribute("aria-expanded") !== expanded) $toggle.setAttribute("aria-expanded", expanded);
      if ($toggle.title !== title) $toggle.title = title;
    };

    const toggleChat = () => {
      collapsed = !collapsed;
      updateButton();
    };

    const detach = () => {
      $root?.classList.remove(ROOT_CLASS, ACTIVE_CLASS, COLLAPSED_CLASS);
      $toggle?.removeEventListener("click", toggleChat);
      picker?.destroy();
      $controls?.remove();
      $root = null;
      $controls = null;
      $toggle = null;
      picker = null;
      collapsed = false;
    };

    const sync = () => {
      const $nextRoot = document.querySelector<HTMLElement>("#ContainerBackgroundLayout");
      const hasChat =
        $nextRoot?.querySelector(":scope > #LeftBackgroundLayout") != null &&
        $nextRoot?.querySelector(":scope > #RightBackgroundLayout #chatroom") != null;
      const enabled = DouYinRouter.isLive() && hasChat;
      if (!enabled) {
        if ($root) detach();
        return;
      }

      if ($root !== $nextRoot || !$controls?.isConnected || !$toggle?.isConnected || !picker?.element.isConnected) {
        detach();
        $root = $nextRoot;
        $controls = document.createElement("div");
        $controls.className = "dy-live-chat-controls";
        // 避免直播原生 flex 容器把控制按钮当成额外一列（浏览器样式加载延迟时尤为明显）。
        $controls.style.setProperty("position", "absolute", "important");
        $toggle = document.createElement("button");
        $toggle.type = "button";
        $toggle.className = "dy-live-chat-toggle";
        $toggle.setAttribute("aria-controls", "chatroom");
        $toggle.addEventListener("click", toggleChat);
        picker = createLayoutPicker(LAYOUT_KEY);
        $controls.append(picker.element, $toggle);
        $root!.appendChild($controls);
        updateButton();
      }
      // 页面更新/布局切换时始终补齐标记，不依赖仅初始化一次的分支。
      $root!.classList.add(ACTIVE_CLASS);
      $root!.classList.toggle(ROOT_CLASS, resolveLayoutMode(getLayoutMode(LAYOUT_KEY)) === "bottom");
      updateButton();
      picker!.update();
    };

    sync();
    const intervalId = window.setInterval(sync, 1500);
    window.addEventListener("resize", sync, { passive: true });
    const modeListenerId = Panel.addValueChangeListener(LAYOUT_KEY, sync);

    return [
      ...styles,
      () => {
        window.clearInterval(intervalId);
        window.removeEventListener("resize", sync);
        Panel.removeValueChangeListener(modeListenerId);
        detach();
      },
    ];
  },
};
