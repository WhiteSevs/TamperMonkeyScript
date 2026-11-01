import type Artplayer from "artplayer";
import { unsafeWindow } from "ViteGM";

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
};
