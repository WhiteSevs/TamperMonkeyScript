import Artplayer from "artplayer";
import type { ComponentOption } from "artplayer/types/component";
import {
	ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY,
	type ArtPlayerPluginM4SAudioSupportEvent,
	type ArtPlayerPluginM4SAudioSupportResult,
} from "./artplayer-plugin-bilibiliM4SAudioSupport";
import {
	ArtPlayer_PLUGIN_QUALITY_KEY,
	type ArtPlayerPluginQualityResult,
} from "./artplayer-plugin-quality";

export type ArtPlayerPluginVideoStatisticsOption = {
	data?: {
		key: string;
		value: string;
	}[];
};
export type ArtPlayerPluginVideoStatisticsResult = {
	name: string;
	/**
	 * 更新参数时调用
	 * @param option
	 */
	update(option: ArtPlayerPluginVideoStatisticsOption): void;
};
const TAG = "[artplayer-plugin-videoStatistics]：";

class VideoStatistics {
	art;
	option;
	$key = {
		plugin_KEY: "artplayer-plugin-videoStatistics",
		setting_name: "video-statistics",
	};
	$data = {
		intervalId: undefined as number | undefined,
	};
	constructor(
		art: typeof Artplayer.prototype,
		option: ArtPlayerPluginVideoStatisticsOption
	) {
		this.art = art;
		this.option = option;
		this.addSetting();
	}
	/**
	 * 添加设置面板菜单
	 */
	addSetting() {
		this.art.setting.add({
			name: this.$key.setting_name,
			icon: "",
			html: "视频统计信息",
			mounted: ($setting) => {
				let $leftIcon = $setting.querySelector<HTMLElement>(
					".art-setting-item-left-icon"
				)!;
				$leftIcon.innerHTML = /*html*/ `
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M512.50142 958.397886c-119.320573 0-231.499491-46.465265-315.871087-130.837884C112.258737 743.188406 65.792449 631.010511 65.792449 511.688915c0-119.319549 46.466288-231.499491 130.837884-315.871087C281.002952 111.445208 393.180847 64.979944 512.50142 64.979944s231.499491 46.465265 315.871087 130.837884c84.372619 84.372619 130.837884 196.551538 130.837884 315.871087 0 119.321596-46.465265 231.499491-130.837884 315.871087C744.000911 911.932622 631.821993 958.397886 512.50142 958.397886zM512.50142 105.962334c-223.718271 0-405.726581 182.00831-405.726581 405.726581s182.00831 405.726581 405.726581 405.726581c223.718271 0 405.727605-182.00831 405.727605-405.726581S736.220714 105.962334 512.50142 105.962334z"></path>
                    <path d="M510.150886 775.953647c-18.107403 0-32.745798-14.678304-32.745798-32.785707L477.405087 452.191846c0-18.108426 14.638395-32.785707 32.745798-32.785707 18.107403 0 32.745798 14.678304 32.745798 32.785707l0 290.976094C542.896684 761.275343 528.258289 775.953647 510.150886 775.953647z"></path>
                    <path d="M511.357364 296.458969m-45.080731 0a44.054 44.054 0 1 0 90.161463 0 44.054 44.054 0 1 0-90.161463 0Z"></path>
                </svg>
                `.trim();
				this.art.proxy(
					$setting,
					"click",
					(event) => {
						event.stopPropagation();
						event.stopImmediatePropagation();
						event.preventDefault();
						this.art.setting.show = false;
						if (this.isRegisterLayer()) {
							this.updateLayer();
						} else {
							this.showLayer(true);
						}
					},
					{ capture: true }
				);
			},
		});
	}
	/**
	 * 获取layer配置
	 */
	getLayerOption(): ComponentOption {
		let mimeType:
				| Required<ArtPlayerPluginVideoStatisticsOption>["data"][0]
				| undefined,
			audioHost:
				| Required<ArtPlayerPluginVideoStatisticsOption>["data"][0]
				| undefined,
			audioTime:
				| Required<ArtPlayerPluginVideoStatisticsOption>["data"][0]
				| undefined,
			resolution: Required<ArtPlayerPluginVideoStatisticsOption>["data"][0] = {
				key: "Resolution:",
				value: `${this.art.video.videoWidth} x ${this.art.video.videoHeight}`,
			},
			videoDataRate:
				| Required<ArtPlayerPluginVideoStatisticsOption>["data"][0]
				| undefined,
			audioDataRate:
				| Required<ArtPlayerPluginVideoStatisticsOption>["data"][0]
				| undefined,
			audioDuration:
				| Required<ArtPlayerPluginVideoStatisticsOption>["data"][0]
				| undefined;
		// 画质信息
		let qualityPlugin = this.art.plugins[
			ArtPlayer_PLUGIN_QUALITY_KEY
		] as ArtPlayerPluginQualityResult | null;
		if (qualityPlugin) {
			let currentQualityOption = qualityPlugin.getCurrentQualityOption();
			if (currentQualityOption) {
				mimeType = {
					key: "Mime Type:",
					value: `${currentQualityOption.mimeType}`,
				};
				if (currentQualityOption.codecs.trim() !== "") {
					mimeType.value += `;codecs="${currentQualityOption.codecs}"`;
				}
				if (currentQualityOption.frameRate.trim() !== "") {
					resolution.value += "@" + currentQualityOption.frameRate;
				}
				if (currentQualityOption.bandwidth) {
					videoDataRate = {
						key: "Video DataRate:",
						value: (currentQualityOption.bandwidth / 1024).toFixed(0) + "Kbps",
					};
				}
			}
		}
		// Audio信息
		let m4sAudioPlugin = this.art.plugins[
			ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY
		] as ArtPlayerPluginM4SAudioSupportResult | null;
		if (m4sAudioPlugin) {
			let currentAudioOption = m4sAudioPlugin.getCurrentPlayConfig();
			if (currentAudioOption) {
				audioHost = {
					key: "Audio Host:",
					value: new URL(currentAudioOption.url).host,
				};
				audioTime = {
					key: "Audio Time:",
					value: m4sAudioPlugin.getAudio().currentTime.toString(),
				};
				if (mimeType) {
					if (mimeType.value.trim() !== "") {
						mimeType.value += ", ";
					}
					mimeType.value += `${currentAudioOption.mimeType}`;
					if (currentAudioOption.codecs.trim() !== "") {
						mimeType.value += `;codecs="${currentAudioOption.codecs}"`;
					}
				}
				audioDataRate = {
					key: "Audio DataRate:",
					value: (currentAudioOption.bandwidth / 1024).toFixed(0) + "Kbps",
				};
				audioDuration = {
					key: "Audio Duration:",
					value: m4sAudioPlugin.getAudio().duration.toString(),
				};
			}
		}

		let data: (
			| Required<ArtPlayerPluginVideoStatisticsOption>["data"][0]
			| undefined
		)[] = [
			mimeType,
			{
				key: "Player Type",
				value: "ArtPlayer@" + Artplayer.version,
			},
			resolution,
			videoDataRate,
			audioDataRate,
			{
				key: "Video Host:",
				value: new URL(this.art.url).host,
			},
			audioHost,
			{
				key: "Video Time:",
				value: this.art.currentTime.toString(),
			},
			audioTime,
			{
				key: "Video Duration:",
				value: this.art.duration.toString(),
			},
			audioDuration,
		];
		data.push(...(this?.option?.data || []));
		return {
			name: this.$key.setting_name,
			html: /*html*/ `
            <div class="art-player-video-statistics">
                <style>
                    .art-player-video-statistics{
                        left: var(--art-padding);
                        top: var(--art-padding);
                        z-index: 100;
                        border-radius: var(--art-border-radius);
                        background-color: var(--art-widget-background);
                        padding: 10px;
                        font-size: 12px;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .art-player-video-statistics-container-title{
                        text-align: center;
                        position: relative;
                        font-size: 16px;
                        line-height: 30px;
                    }
                    .art-player-video-statistics-close{
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                    .art-player-video-statistics-close svg{
                        width: 18px;
                        height: 18px;
                    }
                    .art-player-video-statistics-panel{
                        flex-direction: column;
                        gap: 5px;
                        display: flex;
                    }
                    .art-player-video-statistics-panel-item{
                        align-items: center;
                        gap: 10px;
                        display: flex;
                    }
                    .art-player-video-statistics-panel-item .art-player-video-statistics-panel-title{
                        text-align: right;
                        width: 100px;
                        font-size: 12px;
                        font-weight: 500;
                        color: #fff;
                    }
                    .art-player-video-statistics-panel-item .art-player-video-statistics-panel-content{
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        user-select: all;
                        width: 250px;
                        overflow: hidden;
                        color: #999;
                        font-size: 12px;
                        font-weight: 400;
                    }
                    @media (orientation: landscape) {
                        .art-player-video-statistics-panel-item .art-player-video-statistics-panel-content{
                            width: 70vw;
                        }
                    }
                </style>
                <div class="art-player-video-statistics-container-title">
                    统计信息
                    <div class="art-player-video-statistics-close">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 16 16">
                            <path d="m8 6.939 3.182-3.182a.75.75 0 1 1 1.061 1.061L9.061 8l3.182 3.182a.75.75 0 1 1-1.061 1.061L8 9.061l-3.182 3.182a.75.75 0 1 1-1.061-1.061L6.939 8 3.757 4.818a.75.75 0 1 1 1.061-1.061L8 6.939z"></path>
                        </svg>
                    </div>
                </div>
                <div class="art-player-video-statistics-panel">
                    ${data
											.filter((it) => it != null)
											.map((item) => {
												return /*html*/ `
                        <div class="art-player-video-statistics-panel-item">
                            <div class="art-player-video-statistics-panel-title">${item.key}</div>
                            <div class="art-player-video-statistics-panel-content">${item.value}</div>
                        </div>
                        `;
											})
											.join("\n")}
                </div>
            </div>
            `,
			mounted: async ($topWrap) => {
				let $close = $topWrap.querySelector<HTMLDivElement>(
					".art-player-video-statistics-close svg"
				)!;
				this.art.proxy($close, "click", (event) => {
					event.stopPropagation();
					event.stopImmediatePropagation();
					event.preventDefault();
					this.closeLayer();
				});
			},
		};
	}
	/**
	 * 判断是否已经注册过layer
	 */
	isRegisterLayer() {
		return this.$key.setting_name in this.art.layers;
	}
	/**
	 * 显示layer
	 * @param intervalUpdateInfo 是否定时刷新
	 */
	showLayer(intervalUpdateInfo?: boolean) {
		clearInterval(this.$data.intervalId);
		let option = this.getLayerOption();
		this.art.layers.add(option);
		if (intervalUpdateInfo) {
			this.unbindUpdateLayerEvent();
			this.bindUpdateLayerEvent();
		}
	}
	/**
	 * 更新layer
	 */
	updateLayer() {
		let option = this.getLayerOption();
		this.art.layers.update(option);
	}
	/**
	 * 绑定layer更新事件
	 */
	bindUpdateLayerEvent() {
		this.art.on("play", this.updateLayerEvent_interval, this);
		this.art.on("restart", this.updateLayerEvent_once, this);
		this.art.on(
			// @ts-ignore
			"m4sAudio:loadedmetadata" as ArtPlayerPluginM4SAudioSupportEvent,
			this.updateLayerEvent_once,
			this
		);
		this.art.on("pause", this.updateLayerEvent_clear_interval, this);
		this.art.on("video:ended", this.updateLayerEvent_clear_interval, this);
		if (this.art.playing) {
			this.updateLayerEvent_interval();
		}
	}
	/**
	 * 取消绑定layer更新事件
	 */
	unbindUpdateLayerEvent() {
		this.art.off("play", this.updateLayerEvent_interval);
		this.art.off("restart", this.updateLayerEvent_once);
		this.art.off(
			// @ts-ignore
			"m4sAudio:loadedmetadata" as ArtPlayerPluginM4SAudioSupportEvent,
			this.updateLayerEvent_once
		);
		this.art.off("pause", this.updateLayerEvent_clear_interval);
		this.art.off("video:ended", this.updateLayerEvent_clear_interval);
	}
	/**
	 * layer更新事件
	 */
	updateLayerEvent_interval() {
		if (import.meta.hot) {
			console.log(TAG + "循环更新layer信息");
		}
		clearInterval(this.$data.intervalId);
		this.$data.intervalId = setInterval(() => {
			this.updateLayer();
		}, 1500);
	}
	/**
	 * layer更新事件
	 */
	updateLayerEvent_once() {
		if (import.meta.hot) {
			console.log(TAG + "更新layer信息一次");
		}
		this.updateLayer();
	}
	/**
	 * layer停止更新事件
	 */
	updateLayerEvent_clear_interval() {
		if (import.meta.hot) {
			console.log(TAG + "停止循环更新layer信息");
		}
		clearInterval(this.$data.intervalId);
	}
	/**
	 * 关闭layer
	 */
	closeLayer() {
		clearInterval(this.$data.intervalId);
		this.art.layers.remove(this.$key.setting_name);
		this.unbindUpdateLayerEvent();
	}
	/**
	 * 更新配置
	 */
	update(option: ArtPlayerPluginVideoStatisticsOption) {
		this.option = option;
	}
}
export const artplayerPluginVideoStatistics = (
	option: ArtPlayerPluginVideoStatisticsOption
) => {
	return (
		art: typeof Artplayer.prototype
	): ArtPlayerPluginVideoStatisticsResult => {
		let videoStatistics = new VideoStatistics(art, option);
		return {
			name: videoStatistics.$key.plugin_KEY,
			update(option: ArtPlayerPluginVideoStatisticsOption) {
				videoStatistics.update(option);
			},
		};
	};
};
