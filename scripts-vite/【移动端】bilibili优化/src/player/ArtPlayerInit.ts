import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import Artplayer from "artplayer";
import { unsafeWindow } from "ViteGM";

type ScreenOrientationWithLock = ScreenOrientation & {
  lock?: (orientation: "landscape" | "portrait" | string) => Promise<void>;
  unlock?: () => void;
};

/**
 * artplayer初始化后调用
 */
export const ArtPlayerInit = (art: Artplayer) => {
  if (import.meta.hot) {
    Reflect.set(unsafeWindow, "art", art);
  }
  art.on("video:seeked", () => {
    if (!art.playing) {
      // 检测封面是否还显示
      // 隐藏封面
      art.template.$poster.style.display = "none";
    }
  });

  // 全屏自动旋转屏幕
  const isEnableAutoOrientation = () => {
    return Boolean(Panel.getValue("bili-video-playerAutoOrientation", true));
  };

  const isLandscapeVideo = () => {
    const $video = art.video || art.template?.$video;
    if (!$video) return false;
    const videoWidth = $video.videoWidth || 0;
    const videoHeight = $video.videoHeight || 0;
    if (!videoWidth || !videoHeight) return false;
    // 判断视频比例，宽高比大于1.3则视作横屏，避免近似方形视频被误旋转
    return videoWidth / videoHeight > 1.3;
  };

  const getScreenOrientation = (): ScreenOrientationWithLock | undefined => {
    return typeof screen !== "undefined" ? (screen.orientation as ScreenOrientationWithLock) : void 0;
  };

  const lockLandscapeIfNeeded = () => {
    if (!isEnableAutoOrientation()) return;
    if (!isLandscapeVideo()) return;
    const orientation = getScreenOrientation();
    if (typeof orientation?.lock === "function") {
      orientation
        .lock("landscape")
        .then(() => {
          log.info("全屏自动锁定横屏成功");
        })
        .catch(() => {
          // 静默处理不支持或未完全进入全屏时的异常
        });
    }
  };

  const unlockOrientation = () => {
    try {
      const orientation = getScreenOrientation();
      if (typeof orientation?.unlock === "function") {
        orientation.unlock();
      }
    } catch {
      // 忽略解锁异常
    }
  };

  // 网页全屏CSS旋转兜底处理
  const rotateWebFullscreenIfNeeded = (state: boolean) => {
    const $player = art.template?.$player;
    if (!$player) return;
    const autoOrientationTime = Artplayer.AUTO_ORIENTATION_TIME || 200;
    if (state) {
      if (!isEnableAutoOrientation() || !isLandscapeVideo()) return;
      setTimeout(() => {
        if (!art.fullscreenWeb) return;
        const curW = document.documentElement.clientWidth;
        const curH = document.documentElement.clientHeight;
        if (curW < curH && !$player.classList.contains("art-auto-orientation")) {
          $player.style.width = `${curH}px`;
          $player.style.height = `${curW}px`;
          $player.style.transformOrigin = "0 0";
          $player.style.transform = `rotate(90deg) translate(0, -${curW}px)`;
          $player.classList.add("art-auto-orientation");
          Reflect.set(art, "isRotate", true);
          art.emit("resize");
        }
      }, autoOrientationTime);
    } else {
      if ($player.classList.contains("art-auto-orientation")) {
        $player.style.width = "";
        $player.style.height = "";
        $player.style.transformOrigin = "";
        $player.style.transform = "";
        $player.classList.remove("art-auto-orientation");
        Reflect.set(art, "isRotate", false);
        art.emit("resize");
      }
    }
  };

  // 1. 监听系统全屏事件
  art.on("fullscreen", (state) => {
    if (state) {
      lockLandscapeIfNeeded();
      // 针对部分移动端浏览器刚进入全屏瞬间lock可能未生效的情况，延迟300ms重试一次
      setTimeout(() => {
        if (art.fullscreen) {
          lockLandscapeIfNeeded();
        }
      }, 300);
    } else {
      unlockOrientation();
    }
  });

  // 2. 监听网页全屏事件
  art.on("fullscreenWeb", (state) => {
    rotateWebFullscreenIfNeeded(state);
  });

  // 3. 监听视频元数据加载完成（处理全屏状态下连播/切换分集时新视频比例变化的情况）
  art.on("video:loadedmetadata", () => {
    if (art.fullscreen) {
      if (isEnableAutoOrientation() && isLandscapeVideo()) {
        lockLandscapeIfNeeded();
      } else {
        // 切换到竖屏视频或关闭自动旋转时解除横屏锁定
        unlockOrientation();
      }
    }
    if (art.fullscreenWeb) {
      rotateWebFullscreenIfNeeded(isEnableAutoOrientation() && isLandscapeVideo());
    }
  });

  // 4. 播放器销毁时确保解除屏幕方向锁定
  art.on("destroy", () => {
    unlockOrientation();
  });
};
