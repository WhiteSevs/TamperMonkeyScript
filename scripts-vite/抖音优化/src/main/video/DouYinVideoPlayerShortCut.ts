import { unsafeWindow } from "ViteGM";
import { $$, log } from "@/env";
import { ShortCut, ShortCutOption } from "@components/utils/ShortCut";
import { DouYinVideoPlayer, VideoPlayerRate } from "./DouYinVideoPlayer";
import { Panel } from "@components/setting/panel";

export const DouYinVideoPlayerShortCut = {
	shortCut: new ShortCut("video-short-cut"),
	$data: {
		rateMap: [
			"0.75",
			"1",
			"1.25",
			"1.5",
			"1.75",
			"2",
			"3",
		] as VideoPlayerRate[],
	},
	init() {
		this.shortCut.initGlobalKeyboardListener(this.getShortCutMap());
	},
	getShortCutMap(): ShortCutOption {
		return {
			"dy-video-rate-low": {
				target: "window",
				callback() {
					log.info("触发快捷键 ==> 调用倍速：小");
					let currentRate =
						unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
					let findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex(
						(rate) => {
							return rate === currentRate;
						}
					);
					if (findIndex === 0) {
						log.warn("触发快捷键 ==> 已是最小倍速: " + currentRate);
						return;
					}
					let prevRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex - 1];
					log.info("触发快捷键 ==> 设置倍速: " + prevRate);
					DouYinVideoPlayer.chooseVideoRate(prevRate);
				},
			},
			"dy-video-rate-up": {
				target: "window",
				callback() {
					log.info("触发快捷键 ==> 调用倍速：大");
					let currentRate =
						unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
					let findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex(
						(rate) => {
							return rate === currentRate;
						}
					);
					if (
						findIndex ===
						DouYinVideoPlayerShortCut.$data.rateMap.length - 1
					) {
						log.warn("触发快捷键 ==> 已是最大倍速: " + currentRate);
						return;
					}
					let nextRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex + 1];
					log.info("触发快捷键 ==> 设置倍速: " + nextRate);
					DouYinVideoPlayer.chooseVideoRate(nextRate);
				},
			},
			"dy-video-shortcut-immersionMode": {
				target: "window",
				callback() {
					log.info("触发快捷键 ==> 沉浸模式");
					let value = Panel.getValue<boolean>("fullScreen");
					Panel.setValue("fullScreen", !value);
					Panel.execMenuOnce("fullScreen", () => {
						return DouYinVideoPlayer.fullScreen();
					});
				},
			},
			"dy-video-shortcut-changeVideoMuted": {
				target: "window",
				callback() {
					log.info(`触发快捷键 ==> 切换静音状态`);
					$$("video").forEach(($video) => {
						let muted = !$video.muted;
						log.success(`切换video标签的静音状态为 ${muted}`);
						$video.muted = muted;
					});
				},
			},
		};
	},
};
