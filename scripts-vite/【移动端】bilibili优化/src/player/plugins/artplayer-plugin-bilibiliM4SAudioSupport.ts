import { log, utils } from "@/env";
import type Artplayer from "artplayer";
import type { ComponentOption, Selector } from "artplayer/types/component";
import type { Events } from "artplayer/types/events";
import type { Setting } from "artplayer/types/setting";
import { unsafeWindow } from "ViteGM";

const TAG = "[artplayer-plugin-m4sAudioSupport]：";

/** 控制面板key */
const ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY = "setting-bilibili-m4sAudio";
export type ArtPlayerPluginM4SAudioSupportOption = {
	/** 来源 */
	from: "video" | "bangumi";
	/** 音频列表信息，为空就不播放 */
	audioList: {
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

type ArtPlayerPluginM4SAudioSupportUpdateOption = {
	from: ArtPlayerPluginM4SAudioSupportOption["from"];
	audioList: ArtPlayerPluginM4SAudioSupportOption["audioList"];
};

type ArtPlayerPluginM4SAudioSupportStorageOption = {
	/** 音频质量代码 */
	soundQualityCode: number;
};

export type ArtPlayerPluginM4SAudioSupportResult = {
	name: string;
	/** 主动更新音频 */
	update(option: ArtPlayerPluginM4SAudioSupportUpdateOption): void;
};

const M4SAudioUtils = {
	$flag: {
		/**
		 * 是否正在循环中
		 */
		isIntervaling: false,
	},
	/**
	 * 自定义某个函数执行N次和间隔时间
	 * @param fn 需要执行的函数
	 * @param count 重复执行的次数
	 * @param delayTime 重复执行的间隔时间
	 */
	intervalHandler(fn: Function, count: number = 2, delayTime: number = 900) {
		if (M4SAudioUtils.$flag.isIntervaling) {
			return;
		}
		M4SAudioUtils.$flag.isIntervaling = true;
		/** 已经循环的次数 */
		let intervalCount = 0;
		let intervalId: undefined | number = void 0;
		let callback = () => {
			if (intervalCount > count) {
				M4SAudioUtils.$flag.isIntervaling = false;
				clearInterval(intervalId);
				return;
			}
			if (typeof fn === "function") {
				try {
					fn();
				} catch (error) {
					console.error(TAG, error);
				}
			}
			intervalCount++;
		};
		callback();
		if (count > 1) {
			// 2次以上（包括2次）就循环
			intervalId = setInterval(callback, delayTime);
		} else {
			M4SAudioUtils.$flag.isIntervaling = false;
		}
	},
};

const M4SAudio = {
	$key: {
		plugin_KEY: "plugin-bilibili-m4sAudio",
	},
	$data: {
		/** artplayer实例 */
		art: null as any as Artplayer,
		/** 播放的音频 */
		audio: new Audio(),
		/** 上次同步的所在的进度 */
		latestSyncTime: 0,
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
			if (import.meta.hot) {
				console.log(TAG + "play");
			}
			M4SAudio.handler.play();
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
			}, 1);
		},
		/**
		 * 视频进度更新（主动改变的，而不是播放的改变）
		 *
		 * 音频同步进度
		 * @param currentTime 当前的进度
		 */
		seek: (currentTime) => {
			if (import.meta.hot) {
				console.log(TAG + "seek：" + currentTime);
			}
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
				M4SAudio.handler.syncPlayState();
			});
		},
		/**
		 * 视频暂停
		 *
		 * 音频暂停
		 */
		pause: () => {
			if (import.meta.hot) {
				console.log(TAG + "pause");
			}
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
			}, 1);
			M4SAudio.handler.pause();
		},
		/**
		 * 视频重载，这里的音频也重载
		 *
		 * 触发回调 - 获取新的音频 - 同步进度
		 * @param url
		 */
		restart: (url) => {
			if (import.meta.hot) {
				console.log(TAG + "restart", url);
			}
			if (typeof M4SAudio.userEvent.onRestart === "function") {
				let newAudioUrl = M4SAudio.userEvent.onRestart(url);
				// 更新audio的url
				M4SAudio.handler.playUrl(newAudioUrl);
			}
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
			}, 1);
			M4SAudio.handler.syncPlayState();
		},
		/**
		 * 静音状态改变
		 * @param state
		 */
		muted: (state) => {
			if (import.meta.hot) {
				console.log(TAG + "muted", state);
			}
			M4SAudio.handler.syncVolume();
			M4SAudio.handler.syncMuted();
		},
		/**
		 * artplayer 销毁
		 *
		 * 音频暂停
		 */
		destroy: () => {
			if (import.meta.hot) {
				console.log(TAG + "destory");
			}
			M4SAudio.handler.pause();
		},
		/**
		 * 视频出岔子了无法播放
		 *
		 * 音频暂停 - 同步进度
		 * @param error
		 * @param reconnectTime
		 */
		error: (error, reconnectTime) => {
			if (import.meta.hot) {
				console.log(TAG + "error", error, reconnectTime);
			}
			M4SAudio.handler.pause();
		},
		/**
		 * 当播放器尺寸变化时触发
		 *
		 * 可能会音视频不停步
		 */
		resize: () => {
			if (import.meta.hot) {
				console.log(TAG + "resize");
			}
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
			});
		},
		/**
		 * 当播放器发生窗口全屏时触发
		 *
		 * 可能会音视频不停步
		 */
		fullscreen: () => {
			if (import.meta.hot) {
				console.log("fullscreen");
			}
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
			});
		},
		/**
		 * 视频播放完毕
		 *
		 * 音频暂停
		 */
		"video:ended": () => {
			if (import.meta.hot) {
				console.log(TAG + "video:ended");
			}
			M4SAudio.handler.pause();
		},
		/**
		 * 视频倍速改变
		 *
		 * 同步视频的倍速
		 */
		"video:ratechange": () => {
			if (import.meta.hot) {
				console.log(TAG + "video:ratechange");
			}
			M4SAudio.handler.syncPlayBackRate();
		},
		/**
		 * 视频缓冲暂停
		 *
		 * 音频暂停 然后同步进度
		 */
		"video:waiting": () => {
			if (import.meta.hot) {
				console.log(TAG + "video:waiting");
			}
			M4SAudio.handler.pause();
		},
		/**
		 * 视频缓冲恢复，音频也恢复
		 */
		"video:playing": () => {
			if (import.meta.hot) {
				console.log(TAG + "video:playing");
			}
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
			}, 1);
			M4SAudio.handler.play();
		},
		/**
		 * 切换页面视频会被暂停
		 */
		"video:pause": () => {
			if (import.meta.hot) {
				console.log(TAG + "video:pause");
			}
			M4SAudio.handler.pause();
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
			}, 1);
		},
		/**
		 * 同步音量
		 */
		"video:volumechange": () => {
			if (import.meta.hot) {
				console.log(TAG + "video:volumechange");
			}
			M4SAudio.handler.syncVolume();
		},
		/**
		 * 视频更新进度
		 */
		"video:timeupdate": () => {
			let videoTime = M4SAudio.$data.art.currentTime;
			if (Math.abs(videoTime - M4SAudio.$data.latestSyncTime) >= 3) {
				// 每3秒同步一次进度
				M4SAudio.$data.latestSyncTime = videoTime;

				M4SAudioUtils.intervalHandler(() => {
					M4SAudio.handler.syncTime(0.777);
				}, 1);
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
			M4SAudio.$data.latestSyncTime = 0;

			// 同步音量、进度
			M4SAudio.handler.syncPlayState();
			M4SAudio.handler.syncMuted();
			M4SAudio.handler.syncPlayBackRate();
			M4SAudio.handler.syncVolume();
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
			});
		},
		canplaythrough: (event) => {
			console.log(
				TAG + "浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束"
			);
			// 同步进度
			M4SAudioUtils.intervalHandler(() => {
				M4SAudio.handler.syncTime();
			});
		},
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
					M4SAudio.handler.playUrl("");
					M4SAudio.handler.playUrl(M4SAudio.$data.reconnectInfo.url);
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
	 * 音频工具处理
	 */
	handler: {
		/**
		 * 播放音频链接，会自行处理判断是否是字符串链接
		 */
		playUrl(url: any) {
			if (typeof url !== "string") {
				return;
			}
			M4SAudio.$data.audio.src = url;
			M4SAudio.unbindAudio();
			if (utils.isNotNull(url)) {
				M4SAudio.bindAudio();
			}
		},
		/** 播放音频 */
		play() {
			if (M4SAudio.$data.audio.paused) {
				M4SAudio.$data.audio.play();
			}
		},
		/** 暂停音频 */
		pause() {
			if (!M4SAudio.$data.audio.paused) {
				M4SAudio.$data.audio.pause();
			}
		},
		/** 同步播放状态 */
		syncPlayState() {
			if (M4SAudio.$data.art.playing) {
				// 视频播放中
				this.play();
			} else {
				// 视频暂停
				this.pause();
			}
		},
		/**
		 * 音频同步视频进度
		 * @param offset 差距大小
		 */
		syncTime(offset: number = 0.1) {
			let videoTime = M4SAudio.$data.art.currentTime;
			let audioTime = M4SAudio.$data.audio.currentTime;
			if (Math.abs(videoTime - audioTime) >= Math.abs(offset)) {
				// 视频进度和音频进度的差距超过设定的偏移
				M4SAudio.$data.audio.currentTime = videoTime;
				// 同步音量
				this.syncVolume();
				// 同步静音状态
				this.syncMuted();
				if (import.meta.hot) {
					console.log(
						TAG +
							`同步进度，视频：${videoTime} 音频：${audioTime} 差距：${
								videoTime - audioTime
							}`
					);
				}
			} else {
				// console.warn(
				// 	TAG +
				// 		`不同步进度，视频：${videoTime} 音频：${audioTime} 差距：${
				// 			videoTime - audioTime
				// 		}`
				// );
			}
		},
		/** 同步音量 */
		syncVolume() {
			M4SAudio.$data.audio.volume = M4SAudio.$data.art.volume;
		},
		/** 同步静音状态 */
		syncMuted() {
			let artMuted = M4SAudio.$data.art.muted;
			let audioMuted = M4SAudio.$data.audio.muted;
			if (artMuted !== audioMuted) {
				// 同步
				M4SAudio.$data.audio.muted = artMuted;
			}
		},
		/** 同步播放倍速 */
		syncPlayBackRate() {
			let artPlayBackRate = M4SAudio.$data.art.playbackRate;
			let audioPlayBackRate = M4SAudio.$data.audio.playbackRate;
			if (artPlayBackRate !== audioPlayBackRate) {
				// 同步
				M4SAudio.$data.audio.playbackRate = artPlayBackRate;
			}
		},
	},
	/**
	 * 更新
	 * @param audioList
	 */
	update(option: ArtPlayerPluginM4SAudioSupportUpdateOption) {
		this.unbind();
		this.unbindAudio();
		this.$data.latestSyncTime = 0;
		const that = this;

		if (option.audioList?.length) {
			// 如果存在audio选项
			let firstAudioInfo = option.audioList[0];
			// 存储键
			const storageKey = `artplayer-m4s-audio-${option.from}`;
			// 获取本地存储的上次选的画质，默认最高画质
			const storageAudioInfo = this.$data.art.storage.get(
				storageKey
			) as ArtPlayerPluginM4SAudioSupportStorageOption;

			// 根据本地保存的记录和当前提供的音频列表筛选出当前的音频
			let currentSelectAudioInfo = {
				index: 0,
				html: firstAudioInfo.soundQualityCodeText,
				/** 播放的地址 */
				url: firstAudioInfo.url,
			};

			if (storageAudioInfo) {
				// 判断当前的音频中是否同样的音频，存在的话就使用这个音频，默认第一个音频的
				const findAudioIndex = option.audioList.findIndex(
					(item) => item.soundQualityCode === storageAudioInfo.soundQualityCode
				);
				if (findAudioIndex !== -1) {
					const findAudio = option.audioList[findAudioIndex];
					currentSelectAudioInfo.index = findAudioIndex;
					currentSelectAudioInfo.url = findAudio.url;
					currentSelectAudioInfo.html = findAudio.soundQualityCodeText;
				} else {
					console.warn(
						TAG + "没有找到上次选的音频代码，使用当前默认第一个音频"
					);
				}
			}

			// 调整一下select的default的值
			let selectorList: (Selector &
				ArtPlayerPluginM4SAudioSupportOption["audioList"]["0"])[] =
				option.audioList.map((item, index) => {
					return {
						default: index === currentSelectAudioInfo.index,
						html: item.soundQualityCodeText,
						url: item.url,
						soundQualityCode: item.soundQualityCode,
						soundQualityCodeText: item.soundQualityCodeText,
					};
				});
			// 判断面板是否存在
			// 存在就更新
			// 不存在就添加
			const settingOption = {
				name: ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY,
				width: 200,
				html: "音频",
				tooltip: currentSelectAudioInfo.html,
				icon: /*html*/ `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`,
				selector: selectorList,
				onSelect: function (selector) {
					let itemInfo = selector as any as Selector &
						ArtPlayerPluginM4SAudioSupportOption["audioList"]["0"];
					// 切换音频
					console.log(TAG + "切换音频", itemInfo);
					that.handler.playUrl(itemInfo.url);
					// 保存切换的音频
					that.$data.art.storage.set(storageKey, {
						soundQualityCode: itemInfo.soundQualityCode,
					} as ArtPlayerPluginM4SAudioSupportStorageOption);
					return selector.html;
				},
			} as Setting;

			let findSettingValue = M4SAudio.$data.art.setting.find(
				ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY
			);
			if (findSettingValue) {
				// 已存在面板，更新
				M4SAudio.$data.art.setting.update(settingOption);
			} else {
				// 不存在面板，添加
				M4SAudio.$data.art.setting.add(settingOption);
			}

			// 设置播放地址
			log.info("加载m4s的音频：", currentSelectAudioInfo);
			M4SAudio.handler.playUrl(currentSelectAudioInfo.url);
			this.bind();
			this.bindAudio();
		} else {
			// 没有audio
			M4SAudio.handler.playUrl("");
			// 移除旧的菜单
			let oldSetting = M4SAudio.$data.art.setting.option.find(
				(item) => item.name === ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY
			);
			if (oldSetting) {
				M4SAudio.$data.art.setting.remove(
					ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY
				);
			}
		}
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
	},
	bindAudio() {
		Object.keys(this.audioEvents).forEach((eventName) => {
			this.$data.audio.addEventListener(
				eventName,
				(this.audioEvents as any)[eventName],
				{
					once: true,
				}
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
	},
	unbindAudio() {
		Object.keys(this.audioEvents).forEach((eventName) => {
			this.$data.audio.removeEventListener(
				eventName,
				(this.audioEvents as any)[eventName]
			);
		});
	},
};
if (import.meta.hot) {
	Reflect.set(unsafeWindow, "M4SAudio", M4SAudio);
}
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
		M4SAudio.update({
			from: option.from,
			audioList: option.audioList,
		});

		return {
			name: M4SAudio.$key.plugin_KEY,
			update(...args) {
				M4SAudio.update(...args);
				M4SAudio.handler.syncVolume();
				M4SAudio.handler.syncTime();
			},
		};
	};
};

/**
 * 插件id
 */
export const ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY = M4SAudio.$key.plugin_KEY;
