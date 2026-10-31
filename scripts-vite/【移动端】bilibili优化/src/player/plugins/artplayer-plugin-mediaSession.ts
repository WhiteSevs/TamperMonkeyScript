import type Artplayer from "artplayer";

export type ArtPlayerPluginMediaSessionOption = {
  /** 视频标题 */
  title?: string;
  /** 视频封面 */
  poster?: string;
};

export type ArtPlayerPluginMediaSessionResult = {
  name: string;
  /**
   * 更新播放信息时调用
   * @param option
   */
  update(option: ArtPlayerPluginMediaSessionOption): void;
};

export const ArtPlayer_PLUGIN_MEDIA_SESSION_KEY = "artplayer-plugin-mediaSession";

/**
 * 设置媒体会话信息
 *
 * Android（小米 HyperOS / MIUI）的媒体通知取的是MediaSession的artwork，
 * 不设置的话只会显示默认图标，所以这里把视频封面同步过去
 * @param option
 */
const setMediaSessionMetadata = (option: ArtPlayerPluginMediaSessionOption) => {
  if (!("mediaSession" in navigator) || typeof MediaMetadata === "undefined") {
    return;
  }
  const { title, poster } = option;
  if (!title || !poster) {
    return;
  }
  // B站返回的封面可能是http，且可能带有@xxx的裁剪后缀
  const artwork = poster.replace(/^http:/, "https:").split("@")[0];
  navigator.mediaSession.metadata = new MediaMetadata({
    title: title,
    artist: "哔哩哔哩",
    // Android通知的封面尺寸是512x512，让B站图片服务裁剪成正方形
    artwork: [{ src: `${artwork}@512w_512h_1c.jpg`, sizes: "512x512", type: "image/jpeg" }],
  });
};

export const artplayerPluginMediaSession = (option: ArtPlayerPluginMediaSessionOption) => {
  return (art: Artplayer): ArtPlayerPluginMediaSessionResult => {
    setMediaSessionMetadata(option);
    return {
      name: ArtPlayer_PLUGIN_MEDIA_SESSION_KEY,
      update(option: ArtPlayerPluginMediaSessionOption) {
        setMediaSessionMetadata(option);
      },
    };
  };
};
