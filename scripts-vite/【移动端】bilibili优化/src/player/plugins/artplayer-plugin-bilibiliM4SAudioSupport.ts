import { log, utils } from "@/env";
import type Artplayer from "artplayer";
import type { Events } from "artplayer/types/events";
import type { Setting } from "artplayer/types/setting";

const TAG = "[artplayer-plugin-bilibiliCCSubTitle]：";
export type ArtPlayerPluginM4SAudioSupportOption = {
	/** 音频列表信息，为空就不播放 */
	audioList?: {
		/** 是否是默认使用的音频文件 */
		isDefault: boolean;
		/** 音频链接 */
		url: string;
		/** 音质代码数字 */
		soundQualityCode: number;
		/** 音质代码数字对应的文字 */
		soundQualityCodeText: string;
	}[];
	/** 是否显示选择音频的菜单 @default true */
	showSetting: boolean;
	/** 视频切换时触发该回调，可以更新audio信息 */
	onRestart?: (url: string) => string;
};

export type ArtPlayerPluginM4SAudioSupportResult = {
	name: string;
	/** 主动更新音频 */
	update(audioList?: ArtPlayerPluginM4SAudioSupportOption["audioList"]): void;
};

const M4SAudioSetting = {
	$data: {
		setting_KEY: "setting-bilibili-m4sAudio",
	},

	/**
	 * 重置菜单
	 */
	reset() {
		// 移除旧的菜单
		let oldSetting = M4SAudio.$data.art.setting.option.find(
			(item) => item.name === this.$data.setting_KEY
		);
		if (oldSetting) {
			M4SAudio.$data.art.setting.remove(this.$data.setting_KEY);
		}
	},
	/**
	 * 更新设置面板信息
	 */
	update(audioList: ArtPlayerPluginM4SAudioSupportOption["audioList"] = []) {
		let setting = this.getSettingOption();
		// 设置默认tooltip
		setting.tooltip =
			audioList.find((item) => item.isDefault)?.soundQualityCodeText || "";

		setting.selector!.push(
			...audioList.map((item) => {
				return {
					default: item.isDefault,
					html: item.soundQualityCodeText,
					callback() {
						// 重新设置isDefault为当前的
						let audioUpdateList = audioList.map((audioItem) => {
							let result = audioItem;
							result.isDefault = false;
							if (
								result.url === item.url &&
								result.soundQualityCode === item.soundQualityCode
							) {
								result.isDefault = true;
							}
							return result;
						});
						M4SAudio.update(audioUpdateList);
					},
				};
			})
		);

		let findSettingValue = M4SAudio.$data.art.setting.find(
			this.$data.setting_KEY
		);
		if (findSettingValue) {
			// 已存在面板，更新
			M4SAudio.$data.art.setting.update(setting);
		} else {
			// 不存在面板，添加
			M4SAudio.$data.art.setting.add(setting);
		}
	},
	/**
	 * 获取默认的layer配置项
	 */
	getSettingOption: (): Setting => {
		return {
			name: M4SAudioSetting.$data.setting_KEY,
			width: 200,
			html: "音频",
			tooltip: "",
			icon: /*html*/ `
			<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
				<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
				<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
				<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
			</svg>
			`,
			selector: [],
			onSelect: function (item) {
				if (typeof item.callback === "function") {
					item.callback();
				}
				return item.html;
			},
		};
	},
};

const M4SAudio = {
	$key: {
		plugin_KEY: "plugin-bilibili-m4sAudio",
	},
	$data: {
		art: null as any as Artplayer,
		audio: new Audio(),
		/** 音频的重新连接的配置 */
		reconnectConfig: {
			/** 最大连接的次数 */
			maxCount: 5,
			/** 尝试重新连接的间隔时间 */
			delayTime: 1000,
		},
		/** 音频的重新连接的信息 */
		reconnectInfo: {
			/** 重新连接的链接url */
			url: "",
			/** 已失败连接的次数 */
			count: 0,
		},
	},
	userEvent: {
		onRestart: void 0 as ((url: string) => string) | void,
	},
	events: {
		/**
		 * artplayer 播放
		 *
		 * 同步进度 - 同步音量 - 播放音频
		 */
		play: () => {
			// console.log(TAG + "play");
			M4SAudio.syncAudioProgress();
			M4SAudio.syncAudioVolumn();
			M4SAudio.syncAudioPlayState();
			M4SAudio.syncAudioProgress();
		},
		/**
		 * 视频进度更新（主动改变的，而不是播放的改变）
		 *
		 * 音频同步进度
		 * @param currentTime 当前的进度
		 */
		seek: (currentTime) => {
			// console.log(TAG + "seek", currentTime);
			M4SAudio.syncAudioProgress();
			M4SAudio.syncAudioMuted();
			M4SAudio.syncAudioPlayState();
		},
		/**
		 * 视频暂停
		 *
		 * 音频暂停
		 */
		pause: () => {
			// console.log(TAG + "pause");
			M4SAudio.syncAudioPlayState();
			M4SAudio.syncAudioProgress();
		},
		/**
		 * 视频重载，这里的音频也重载
		 *
		 * 触发回调 - 获取新的音频 - 同步进度
		 * @param url
		 */
		restart: (url) => {
			// console.log(TAG + "restart", url);
			if (typeof M4SAudio.userEvent.onRestart === "function") {
				let newAudioUrl = M4SAudio.userEvent.onRestart(url);
				if (typeof newAudioUrl === "string") {
					// 更新audio的url
					M4SAudio.$data.audio.src = newAudioUrl;
				}
			}
			M4SAudio.syncAudioProgress();
		},
		/**
		 * 静音状态改变
		 * @param state
		 */
		muted: (state) => {
			// console.log(TAG + "muted",state);
			M4SAudio.syncAudioMuted();
			M4SAudio.syncAudioVolumn();
		},
		/**
		 * artplayer 销毁
		 *
		 * 音频暂停
		 */
		destroy: () => {
			// console.log(TAG + "destory");
			M4SAudio.$data.audio.pause();
		},
		/**
		 * 视频出岔子了无法播放
		 *
		 * 音频暂停 - 同步进度
		 * @param error
		 * @param reconnectTime
		 */
		error: (error, reconnectTime) => {
			// console.log(TAG + "error", error, reconnectTime);
			M4SAudio.$data.audio.pause();
		},
		/**
		 * 当播放器尺寸变化时触发
		 *
		 * 可能会音视频不停步
		 */
		resize: () => {
			M4SAudio.syncAudioProgress();
			M4SAudio.syncAudioPlayState();
			setTimeout(() => {
				M4SAudio.syncAudioProgress();
				M4SAudio.syncAudioPlayState();
			}, 500);
		},
		/**
		 * 当播放器发生窗口全屏时触发
		 *
		 * 可能会音视频不停步
		 */
		fullscreen: () => {
			M4SAudio.syncAudioProgress();
			M4SAudio.syncAudioPlayState();
			setTimeout(() => {
				M4SAudio.syncAudioProgress();
				M4SAudio.syncAudioPlayState();
			}, 500);
		},
		/**
		 * 视频播放完毕
		 *
		 * 音频暂停
		 */
		"video:ended": () => {
			// console.log(TAG + "video:ended");
			M4SAudio.$data.audio.pause();
			M4SAudio.syncAudioProgress();
		},
		/**
		 * 视频倍速改变
		 *
		 * 同步视频的倍速
		 */
		"video:ratechange": () => {
			// console.log(TAG + "video:ratechange");
			M4SAudio.$data.audio.playbackRate = M4SAudio.$data.art.playbackRate;
		},
		/**
		 * 视频缓冲暂停
		 *
		 * 音频暂停 然后同步进度
		 */
		"video:waiting": () => {
			// console.log(TAG + "video:waiting");
			M4SAudio.$data.audio.pause();
			M4SAudio.syncAudioProgress();
		},
		/**
		 * 视频缓冲恢复，音频也恢复
		 */
		"video:playing": () => {
			// console.log(TAG + "video:playing");
			M4SAudio.syncAudioProgress();
			M4SAudio.syncAudioPlayState();
			M4SAudio.syncAudioProgress();
		},
		/**
		 * 同步音量
		 */
		"video:volumechange": () => {
			// console.log(TAG + "video:volumechange");
			M4SAudio.syncAudioVolumn();
			M4SAudio.syncAudioProgress();
		},
		/**
		 * 应该是主动切换的视频，首次播放时可能音频不同步
		 */
		"video:timeupdate": () => {
			if (
				2 <= M4SAudio.$data.art.currentTime &&
				M4SAudio.$data.art.currentTime <= 4
			) {
				// 2~4秒内同步音频
				M4SAudio.syncAudioProgress();
				M4SAudio.syncAudioVolumn();
			}
		},
	} as {
		[key in keyof Events]?: (...args: Events[key]) => unknown;
	},
	audioEvents: {
		loadedmetadata: (event) => {
			console.log(TAG + "Audio预加载完成");
			// 重置重连信息
			M4SAudio.$data.reconnectInfo.count = 0;
			M4SAudio.$data.reconnectInfo.url = "";
			// 判断当前音频是否正在播放
			if (M4SAudio.$data.art.playing) {
				// 同步音量、进度
				// @ts-ignore
				M4SAudio.events.play();
			}
		},
		// canplaythrough: (event) => {
		// 	console.log(
		// 		TAG + "浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束"
		// 	);
		// },
		error: (event) => {
			console.error(TAG + `Audio加载失败`, event);
			if (utils.isNull(M4SAudio.$data.reconnectInfo.url)) {
				M4SAudio.$data.reconnectInfo.url = M4SAudio.$data.audio.src;
			}
			if (
				M4SAudio.$data.reconnectInfo.count <
				M4SAudio.$data.reconnectConfig.maxCount
			) {
				// 还在允许重新连接次数的范围之内
				console.log(
					TAG + `Audio第${M4SAudio.$data.reconnectInfo.count + 1}次尝试重新连接`
				);
				// 左上角notice提示
				M4SAudio.$data.art.notice.show = `Audio第${
					M4SAudio.$data.reconnectInfo.count + 1
				}次尝试重新连接`;
				M4SAudio.$data.reconnectInfo.count++;
				setTimeout(() => {
					M4SAudio.$data.audio.src = "";
					M4SAudio.$data.audio.src = M4SAudio.$data.reconnectInfo.url;
					M4SAudio.$data.audio.load();
				}, M4SAudio.$data.reconnectConfig.delayTime);
			} else {
				// 已超出重连次数
				console.error(TAG + `Audio已超出重连次数`);
				M4SAudio.$data.art.notice.show = `Audio已超出重连次数，请尝试切换源`;
			}
		},
	} as {
		[key in keyof HTMLMediaElementEventMap]?: (
			ev: HTMLMediaElementEventMap[key]
		) => any;
	},
	/**
	 * 更新
	 * @param audioList
	 */
	update(audioList: ArtPlayerPluginM4SAudioSupportOption["audioList"] = []) {
		this.unbind();
		let loadSoundUrlInfo = (audioList || []).find((item) => item.isDefault);
		if (loadSoundUrlInfo == null || utils.isNull(loadSoundUrlInfo.url)) {
			// 没有audio
			this.$data.audio.src = "";
			M4SAudioSetting.reset();
		} else {
			let url = loadSoundUrlInfo.url;
			log.info("加载m4s的音频：" + url);
			this.$data.audio.src = url;
			this.bind();
			M4SAudioSetting.update(audioList);
		}
	},
	/** 同步播放状态 */
	syncAudioPlayState() {
		if (this.$data.art.playing) {
			// 视频播放中
			if (this.$data.audio.paused) {
				// 音频当前暂停，播放
				this.$data.audio.play();
			}
		} else {
			// 视频暂停
			if (!this.$data.audio.paused) {
				// 音频当前播放中，暂停
				this.$data.audio.pause();
			}
		}
	},
	/** 音频同步视频进度 */
	syncAudioProgress() {
		// console.log(TAG + "音频同步视频进度");
		this.$data.audio.currentTime = this.$data.art.currentTime;
		this.syncAudioPlayState();
	},
	/** 同步音量 */
	syncAudioVolumn() {
		this.$data.audio.volume = this.$data.art.volume;
	},
	/** 同步静音状态 */
	syncAudioMuted() {
		this.$data.audio.muted = this.$data.art.muted;
	},
	/**
	 * 绑定事件
	 */
	bind() {
		Object.keys(this.events).forEach((eventName) => {
			this.$data.art.on(
				eventName as keyof Events,
				(this.events as any)[eventName as keyof Events]
			);
		});
		Object.keys(this.audioEvents).forEach((eventName) => {
			this.$data.audio.addEventListener(
				eventName,
				(this.audioEvents as any)[eventName]
			);
		});
	},
	/**
	 * 取消绑定事件
	 */
	unbind() {
		Object.keys(this.events).forEach((eventName) => {
			this.$data.art.off(
				eventName as keyof Events,
				(this.events as any)[eventName as keyof Events]
			);
		});
		Object.keys(this.audioEvents).forEach((eventName) => {
			this.$data.audio.removeEventListener(
				eventName,
				(this.audioEvents as any)[eventName]
			);
		});
	},
};

/**
 * m4s视频的音频支持
 */
export const artplayerPluginM4SAudioSupport = (
	option: ArtPlayerPluginM4SAudioSupportOption
) => {
	return (art: Artplayer): ArtPlayerPluginM4SAudioSupportResult => {
		M4SAudio.$data.art = art;
		if (typeof option.onRestart === "function") {
			M4SAudio.userEvent.onRestart = option.onRestart;
		}
		M4SAudio.update(option.audioList);
		return {
			name: M4SAudio.$key.plugin_KEY,
			update(audioList = []) {
				M4SAudio.update(audioList);
				M4SAudio.syncAudioVolumn();
				M4SAudio.syncAudioProgress();
			},
		};
	};
};

/**
 * 插件id
 */
export const ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY = M4SAudio.$key.plugin_KEY;
