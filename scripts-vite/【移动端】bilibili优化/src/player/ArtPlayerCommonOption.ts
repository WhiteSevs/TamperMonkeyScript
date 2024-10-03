import { BilibiliData } from "@/data/BlibiliData";
import type Option from "artplayer/types/option";
import { ArtPlayerBiliBiliIcon } from "./BilibiliArtPlayerIcon";
export const ArtPlayerCommonOption = (): Option => {
	return {
		/** 容器 */
		container: "",
		url: "",
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
		/** 播放器是否自动调整大小(可能有bug) */
		autoSize: false,
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
		/** 是否显示视频宽高比按钮 */
		aspectRatio: true,
		/** 是否显示视频窗口全屏按钮 */
		fullscreen: true,
		/** 是否显示视频网页全屏按钮 */
		fullscreenWeb: true,
		/** 是否启用播放器字幕偏移 */
		subtitleOffset: true,
		/** 是否启用播放器迷你进度条 */
		miniProgressBar: true,
		/** 保证页面只存在一个实例 */
		mutex: true,
		/** UI中是否使用背景 */
		backdrop: true,
		/** 移动端是否使用playsInline */
		playsInline: false,
		/** 是否使用自动播放 */
		autoPlayback: true,
		/** 是否使用airplay */
		airplay: true,
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
