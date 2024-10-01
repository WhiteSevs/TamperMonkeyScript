import { log, utils } from "@/env";
import type Artplayer from "artplayer";
import type { Events } from "artplayer/types/events";

type ArtplayerPluginM4SAudioSupportOption = {
	/** audio的音频链接，为空就不使用audio播放 */
	url?: string | null | undefined;
	/** 视频切换时触发该回调，可以更新audio信息 */
	onRestart?: (url: string) => string;
};

const M4SAudio = {
	art: null as any as Artplayer,
	audio: new Audio(),
	userEvent: {
		onRestart: void 0 as ((url: string) => string) | void,
	},
	events: {
		play: () => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：play");
			// artplayer 播放
			// 同步进度 - 同步音量 - 播放音频
			M4SAudio.syncAudioProgress();
			M4SAudio.syncAudioVolumn();
			M4SAudio.audio.play();
		},
		seek: (currentTime) => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：seek", currentTime);
			// 视频进度更新（主动改变的，而不是播放的改变）
			// 音频同步进度
			M4SAudio.syncAudioProgress();
		},
		pause: () => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：pause");
			// 视频暂停
			// 音频暂停
			M4SAudio.audio.pause();
		},
		restart: (url) => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：restart", url);
			// 视频重载，这里的音频也重载
			// 触发回调 - 获取新的音频 - 同步进度
			if (typeof M4SAudio.userEvent.onRestart === "function") {
				let newAudioUrl = M4SAudio.userEvent.onRestart(url);
				if (typeof newAudioUrl === "string") {
					// 更新audio的url
					M4SAudio.audio.src = newAudioUrl;
				}
			}
			M4SAudio.syncAudioProgress();
		},
		muted: (state) => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：muted",state);
			// 静音状态改变
			M4SAudio.audio.muted = state;
			M4SAudio.syncAudioVolumn();
		},
		destroy: () => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：destory");
			// artplayer 销毁
			// 音频暂停
			M4SAudio.audio.pause();
		},
		error: (error, reconnectTime) => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：error", error, reconnectTime);
			// 视频出岔子了无法播放
			// 音频暂停 - 同步进度
			M4SAudio.audio.pause();
		},
		"video:ended": () => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：video:ended");
			// 视频播放完毕
			// 音频暂停
			M4SAudio.audio.pause();
		},
		"video:ratechange": () => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：video:ratechange");
			// 视频倍速改变
			// 音频同步视频的倍速
			M4SAudio.audio.playbackRate = M4SAudio.art.playbackRate;
		},
		"video:waiting": () => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：video:waiting");
			// 视频缓冲暂停
			// 音频暂停
			M4SAudio.audio.pause();
			// 然后同步进度
			M4SAudio.syncAudioProgress();
		},
		"video:playing": () => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：video:playing");
			// 视频缓冲恢复，音频也恢复
			M4SAudio.syncAudioProgress();
			M4SAudio.audio.play();
		},
		"video:volumechange": () => {
			// console.log("[artplayer-plugin-bilibiliCCSubTitle]：video:volumechange");
			// 同步音量
			M4SAudio.syncAudioVolumn();
		},
	} as {
		[key in keyof Events]?: (...args: Events[key]) => unknown;
	},
	/**
	 * 更新
	 * @param url
	 */
	update(url?: string | null | undefined) {
		this.unbind();
		if (utils.isNull(url)) {
			// 没有audio
			this.audio.src = "";
		} else {
			this.audio.src = url;
			this.bind();
		}
	},
	/**
	 * 音频同步视频进度
	 */
	syncAudioProgress() {
		// console.log("[artplayer-plugin-bilibiliCCSubTitle]：音频同步视频进度");
		this.audio.currentTime = this.art.currentTime;
	},
	/**
	 * 同步音量
	 */
	syncAudioVolumn() {
		this.audio.volume = this.art.volume;
	},
	/**
	 * 绑定事件
	 */
	bind() {
		Object.keys(this.events).forEach((eventName) => {
			this.art.on(
				eventName as keyof Events,
				(this.events as any)[eventName as keyof Events]
			);
		});
	},
	/**
	 * 取消绑定事件
	 */
	unbind() {
		Object.keys(this.events).forEach((eventName) => {
			this.art.off(
				eventName as keyof Events,
				(this.events as any)[eventName as keyof Events]
			);
		});
	},
};

/**
 * m4s视频的音频支持
 */
export const artplayerPluginM4SAudioSupport = (
	option: ArtplayerPluginM4SAudioSupportOption
) => {
	return (art: Artplayer) => {
		M4SAudio.art = art;
		log.info("加载番剧音频：" + option.url);
		if (typeof option.onRestart === "function") {
			M4SAudio.userEvent.onRestart = option.onRestart;
		}
		M4SAudio.update(option.url);
		return {
			name: "plugin-bilibili-m4sAudio",
			/** 主动更新音频 */
			update(url?: string | null | undefined) {
				M4SAudio.update(url);
				M4SAudio.syncAudioVolumn();
				M4SAudio.syncAudioProgress();
			},
		};
	};
};
