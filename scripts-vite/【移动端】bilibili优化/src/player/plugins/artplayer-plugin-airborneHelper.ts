import type {
	BilibiliTypeBangumiVideoPlayeHtml5Info,
	BilibiliTypeBangumiVideoPlayeInfo,
} from "@/api/BilibiliBangumiApi";
import type { Events } from "artplayer/types/events";
import {
	ArtPlayer_PLUGIN_TOAST_KEY,
	type ArtPlayerPluginToastResult,
} from "./artplayer-plugin-toast";

export type ArtPlayerPluginAirborneHelperOption = {
	clip_info_list: BilibiliTypeBangumiVideoPlayeInfo["clip_info_list"] &
		BilibiliTypeBangumiVideoPlayeHtml5Info["clip_info"];
};

export type ArtPlayerPluginAirborneHelperResult = {
	name: string;
	update: (option: ArtPlayerPluginAirborneHelperOption) => void;
};

const TAG = "[artplayer-plugin-airborneHelper]：";

const AirborneHelperEvent = {
	$data: {
		tipJumpToastTimeoutId: void 0 as undefined | number,
		tipJumpToastInfo: void 0 as
			| undefined
			| ReturnType<ArtPlayerPluginToastResult["toast"]>,
		successJumpToastInfo: void 0 as
			| undefined
			| ReturnType<ArtPlayerPluginToastResult["toast"]>,
	},
	$event: {
		"video:timeupdate": () => {
			if (AirborneHelperEvent.$data.tipJumpToastTimeoutId != null) {
				// 当前已有toast，不能重复
				return;
			}
			if (!AirborneHelper.$data.art.playing) {
				// 不在播放中
				return;
			}
			const beforeToastTime = 5;

			// 当前时间
			let currentTime = AirborneHelper.$data.art.currentTime;
			let findIndex = AirborneHelper.$data.option.clip_info_list.findIndex(
				(item) => {
					// 在跳过的时间段的5秒前区间
					let jumpTime = item.start;
					if (jumpTime === 0) {
						// 0秒
						return currentTime <= 1;
					} else {
						return (
							currentTime >= jumpTime - beforeToastTime &&
							currentTime < jumpTime
						);
					}
				}
			);
			if (findIndex !== -1) {
				let findValue = AirborneHelper.$data.option.clip_info_list[findIndex];
				let plugin_toast = AirborneHelper.$data.art.plugins[
					ArtPlayer_PLUGIN_TOAST_KEY
				] as ArtPlayerPluginToastResult;

				// 延迟时间
				let timeout = (findValue.start - currentTime) * 1000;
				// 跳转成功的toast
				AirborneHelperEvent.$data.tipJumpToastTimeoutId = setTimeout(() => {
					AirborneHelper.$data.art.currentTime = findValue.end;
					AirborneHelperEvent.$data.tipJumpToastTimeoutId = void 0;
					// 清空旧的 toast
					if (AirborneHelperEvent.$data.successJumpToastInfo) {
						AirborneHelperEvent.$data.successJumpToastInfo.close();
						AirborneHelperEvent.$data.successJumpToastInfo = void 0;
					}
					AirborneHelperEvent.$data.successJumpToastInfo = plugin_toast.toast({
						text: "空降成功~o(*≧▽≦)ツ┏━┓",
						closeCallback() {
							AirborneHelperEvent.$data.successJumpToastInfo = void 0;
						},
					});
				}, timeout);
				// 清空旧的 toast
				if (AirborneHelperEvent.$data.tipJumpToastInfo) {
					AirborneHelperEvent.$data.tipJumpToastInfo.close();
					AirborneHelperEvent.$data.tipJumpToastInfo = void 0;
				}
				function toastCloseCallBack() {
					clearTimeout(AirborneHelperEvent.$data.tipJumpToastTimeoutId);
					AirborneHelperEvent.$data.tipJumpToastTimeoutId = void 0;
					AirborneHelperEvent.$data.tipJumpToastInfo?.close();
					AirborneHelperEvent.$data.tipJumpToastInfo = void 0;
					// 不跳过的话就把这个跳过信息移除
					// 那本次就都不会弹这个信息了
					AirborneHelper.$data.option.clip_info_list.splice(findIndex, 1);
				}
				AirborneHelperEvent.$data.tipJumpToastInfo = plugin_toast.toast({
					text:
						typeof findValue.toastText === "string"
							? findValue.toastText
							: "站稳扶好，准备起飞~",
					timeout: timeout < 2000 ? 2000 : timeout,
					showCloseBtn: false,
					jumpText: typeof findValue.toastText === "string" ? "不跳过" : "坠机",
					jumpClickCallback: () => {
						toastCloseCallBack();
					},
				});
				// 10s后固定清除toast变量
				setTimeout(() => {
					// 清空旧的 toast
					if (AirborneHelperEvent.$data.tipJumpToastInfo) {
						AirborneHelperEvent.$data.tipJumpToastInfo.close();
						AirborneHelperEvent.$data.tipJumpToastInfo = void 0;
					}
				}, (beforeToastTime + 3) * 1000);
			}
		},
	} as {
		[key in keyof Events]?: (...args: Events[key]) => unknown;
	},
	bind() {
		Object.keys(this.$event).forEach((eventName) => {
			AirborneHelper.$data.art.on(
				eventName as keyof Events,
				(this.$event as any)[eventName as keyof Events]
			);
		});
	},
	unbind() {
		Object.keys(this.$event).forEach((eventName) => {
			AirborneHelper.$data.art.off(
				eventName as keyof Events,
				(this.$event as any)[eventName as keyof Events]
			);
		});
		clearTimeout(AirborneHelperEvent.$data.tipJumpToastTimeoutId);
		AirborneHelperEvent.$data.tipJumpToastTimeoutId = void 0;
		if (AirborneHelperEvent.$data.successJumpToastInfo) {
			AirborneHelperEvent.$data.successJumpToastInfo.close();
			AirborneHelperEvent.$data.successJumpToastInfo = void 0;
		}
		if (AirborneHelperEvent.$data.tipJumpToastInfo) {
			AirborneHelperEvent.$data.tipJumpToastInfo.close();
			AirborneHelperEvent.$data.tipJumpToastInfo = void 0;
		}
	},
};

const AirborneHelper = {
	$key: {
		plugin_KEY: "plugin-airborne-helper",
	},
	$data: {
		art: null as any as Artplayer,
		option: null as any as ArtPlayerPluginAirborneHelperOption,
	},
	init(art: Artplayer, option: ArtPlayerPluginAirborneHelperOption) {
		this.$data.art = art;
		this.update(option);
	},
	update(option: ArtPlayerPluginAirborneHelperOption) {
		this.$data.option = option;
		console.log(TAG + "更新配置", option);
		AirborneHelperEvent.unbind();
		if (option.clip_info_list.length) {
			AirborneHelperEvent.bind();
		}
	},
};
export const artplayerPluginAirborneHelper = (
	option: ArtPlayerPluginAirborneHelperOption
) => {
	return (art: Artplayer): ArtPlayerPluginAirborneHelperResult => {
		AirborneHelper.init(art, option);
		return {
			name: AirborneHelper.$key.plugin_KEY,
			update(option) {
				AirborneHelper.update(option);
			},
		};
	};
};

export const ArtPlayer_PLUGIN_AIRBORNE_HELPER_KEY =
	AirborneHelper.$key.plugin_KEY;
