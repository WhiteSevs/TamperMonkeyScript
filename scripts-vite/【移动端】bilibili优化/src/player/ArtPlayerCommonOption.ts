import { unsafeWindow } from "ViteGM";
import { BilibiliData } from "@/data/BlibiliData";
import { DOMUtils, utils } from "@/env";
import type { Option } from "artplayer";
import { ArtPlayerBiliBiliIcon } from "./BilibiliArtPlayerIcon";
import { Panel } from "@components/setting/panel";

export const ArtPlayerCommonOption = (): Option => {
  const option: Option = {
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
    /** 自定义设置面板 */
    settings: [],
  };

  // ---------------- 音量调节器 -----------------------
  const defaultVolume = option.volume ?? 1;
  const localVolume: number = Panel.getValue<number>("artplayer-settings-volume", defaultVolume);
  option.volume = localVolume;

  const volumnRange = Number((localVolume * 100).toFixed());
  // 音量图标
  const volumnIcon = /*html*/ `
    <i class="art-icon art-icon-volume" style="display: flex;">
      <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
          <path d="M10.188 4.65L6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"></path>
          <path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"></path>
      </svg>
    </i>
  `;
  // 静音图标
  const muteIcon = /*html*/ `
    <i class="art-icon art-icon-volume" style="display: flex;">
      <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
          <path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"></path>
          <path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"></path>
      </svg>
    </i>
  `;
  option.settings!.push({
    html: "音量",
    tooltip: volumnRange.toString(),
    icon: /*html*/ `
        <i class="art-icon art-icon-volume" style="display: flex;">
          ${localVolume ? volumnIcon : muteIcon}
        </i>`,
    // value min max step
    range: [volumnRange, 0, 100, 1],
    onChange: function (item) {
      const value = item.range[0] as number;
      this.volume = value / 100;
      Panel.setValue("artplayer-settings-volume", this.volume);
      if (item.$icon) {
        if (this.volume === 0) {
          // 修改为静音图标
          DOMUtils.html(item.$icon, muteIcon);
        } else {
          // 修改为音量图标
          DOMUtils.html(item.$icon, volumnIcon);
        }
      }
      return value;
    },
  });
  // ---------------- 音量调节器 -----------------------

  return option;
};
