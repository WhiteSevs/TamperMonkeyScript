import { BilibiliData } from "@/data/BlibiliData";
import type { Option } from "artplayer";
import { ArtPlayerBiliBiliIcon } from "./BilibiliArtPlayerIcon";
export const ArtPlayerCommonOption = (): Option => {
  return {
    /** 容器 */
    container: "",
    /** 视频地址 */
    url: "",
    /** 视频封面 */
    // poster: 'https://artplayer.org/assets/sample/poster.jpg',
    /** 默认音量 */
    volume: 1,
    /** 是否是直播 */
    isLive: false,
    /** 是否静音 */
    muted: false,
    /** 是否自动播放 */
    autoplay: false,
    /** 是否显示视频画中画按钮 */
    pip: false,
    /** 播放器是否自动运行迷你模式 */
    autoMini: false,
    /** 是否显示截图按钮 */
    screenshot: false,
    /** 是否显示视频设置按钮 */
    setting: true,
    /** 是否循环播放 */
    loop: false,
    /** 是否显示视频翻转按钮 */
    flip: true,
    /** 是否显示视频播放速率按钮 */
    playbackRate: true,
    /** 播放器是否自动调整大小(可能有bug) */
    autoSize: false,
    /** 是否显示视频宽高比按钮 */
    aspectRatio: false,
    /** 是否显示视频窗口全屏按钮 */
    fullscreen: true,
    /** 是否显示视频网页全屏按钮 */
    fullscreenWeb: true,
    /** 是否启用播放器字幕偏移 */
    subtitleOffset: true,
    /** 是否启用播放器迷你进度条 */
    miniProgressBar: true,
    /** 保证页面只存在一个实例 */
    mutex: false,
    /** UI中是否使用背景 */
    backdrop: true,
    /** 移动端是否使用playsInline */
    playsInline: false,
    /** 是否使用自动播放 */
    autoPlayback: true,
    /** 是否使用airplay */
    airplay: true,
    /** 是否在移动端显示一个 锁定按钮 ，用于隐藏底部 控制栏 */
    lock: true,
    /** 是否在移动端添加长按视频快进功能 */
    fastForward: true,
    /** 播放器颜色主题 */
    theme: BilibiliData.theme,
    /** 播放器语言 */
    lang: navigator.language.toLowerCase(),
    /** 覆盖video属性 */
    moreVideoAttr: {
      crossOrigin: "anonymous",
    },
    /** 自定义图标 */
    icons: ArtPlayerBiliBiliIcon,
  };
};
