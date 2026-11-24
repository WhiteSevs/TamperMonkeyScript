import { log } from "@/env";
import { Panel } from "@components/setting/panel";

export const XHSVideoPlaybackRates = [0.5, 0.75, 1, 1.5, 2];

type VideoRateState = {
  source: string;
  applied: boolean;
  menu: HTMLElement | null;
  manual: boolean;
  applying: boolean;
};

/** 视频默认倍速，兼容原生 video 和 WebCodecs 播放器。 */
export const XHSVideo = {
  getKeys(isMobile = false) {
    const prefix = isMobile ? "little-red-book" : "pc-xhs";
    return {
      enable: `${prefix}-video-default-playback-rate-enable`,
      rate: `${prefix}-video-default-playback-rate`,
    };
  },
  init(isMobile = false) {
    const keys = this.getKeys(isMobile);
    Panel.execMenuOnce(keys.enable, () => this.useDefaultPlaybackRate(keys.rate));
  },
  useDefaultPlaybackRate(rateKey: string) {
    const states = new WeakMap<HTMLVideoElement, VideoRateState>();
    const mediaEvents = ["loadstart", "loadedmetadata", "canplay", "play"];
    let active = true;
    let scanQueued = false;
    const getRate = () => {
      const rate = Number(Panel.getValue(rateKey, 1.5));
      return XHSVideoPlaybackRates.includes(rate) ? rate : 1.5;
    };
    const getState = (video: HTMLVideoElement): VideoRateState => {
      const source = [
        video.getAttribute("src") || "",
        video.currentSrc || "",
        ...Array.from(video.querySelectorAll("source")).map((node) => node.getAttribute("src") || ""),
      ].join("\n");
      let state = states.get(video);
      if (!state || state.source !== source) {
        state = { source, applied: false, menu: null, manual: false, applying: false };
        states.set(video, state);
      }
      return state;
    };
    const applyRate = (video: HTMLVideoElement, rate: number, force = false) => {
      const state = getState(video);
      if (state.applying || (!force && state.manual)) return;
      const player = video.closest(".xgplayer");
      // 切换清晰度时可能出现两个 video，只控制播放器的主视频。
      if (player && player.querySelector("video") !== video) return;
      const menu = player?.querySelector<HTMLElement>(".xgplayer-playbackrate") ?? null;
      if (!force && state.applied && state.menu === menu) return;
      const item =
        menu &&
        Array.from(menu.querySelectorAll<HTMLElement>("li[cname]")).find(
          (node) => Number(node.getAttribute("cname")) === rate
        );
      const isWebCodecs = video.getAttribute("usewcs") === "1";
      // WebCodecs 的 video 是代理元素，写 playbackRate 无效，等待原生菜单出现。
      if (isWebCodecs && !item) return;
      state.applying = true;
      try {
        if (item) item.click();
        if (!isWebCodecs) {
          video.defaultPlaybackRate = rate;
          video.playbackRate = rate;
        }
        state.applied = true;
        state.menu = menu;
        if (force) state.manual = false;
      } catch (error) {
        log.warn("设置视频默认倍速失败", error);
      } finally {
        state.applying = false;
      }
    };
    const scan = (force = false) => {
      if (!active) return;
      const rate = getRate();
      document.querySelectorAll("video").forEach((video) => applyRate(video, rate, force));
    };
    const scheduleScan = () => {
      if (!active || scanQueued) return;
      scanQueued = true;
      queueMicrotask(() => {
        scanQueued = false;
        scan();
      });
    };
    const onMediaEvent = (event: Event) => {
      const video = event.target as HTMLVideoElement | null;
      if (!active || video?.tagName !== "VIDEO") return;
      if (event.type === "loadstart") states.delete(video);
      applyRate(video, getRate());
    };
    const onMenuClick = (event: MouseEvent) => {
      const item = (event.target as Element | null)?.closest?.(".xgplayer-playbackrate li[cname]");
      if (!item) return;
      const video = item.closest(".xgplayer")?.querySelector("video");
      if (!video) return;
      const state = getState(video);
      if (!state.applying) {
        state.manual = true;
        state.menu = item.closest<HTMLElement>(".xgplayer-playbackrate");
      }
    };
    const observer = new MutationObserver((records) => {
      const selector = "video, source, .xgplayer-playbackrate";
      if (
        records.some(
          (record) =>
            record.type === "attributes" ||
            (record.target as Element).closest?.(".xgplayer-playbackrate") ||
            Array.from(record.addedNodes).some((node) => {
              if (node.nodeType !== 1) return false;
              const element = node as Element;
              return element.matches(selector) || element.querySelector(selector);
            })
        )
      )
        scheduleScan();
    });
    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "usewcs"],
    });
    mediaEvents.forEach((name) => document.addEventListener(name, onMediaEvent, true));
    document.addEventListener("click", onMenuClick, true);
    const rateListener = Panel.addValueChangeListener(rateKey, () => scan(true));
    scan();
    return () => {
      active = false;
      observer.disconnect();
      mediaEvents.forEach((name) => document.removeEventListener(name, onMediaEvent, true));
      document.removeEventListener("click", onMenuClick, true);
      Panel.removeValueChangeListener(rateListener);
      document.querySelectorAll("video").forEach((video) => applyRate(video, 1, true));
    };
  },
};
