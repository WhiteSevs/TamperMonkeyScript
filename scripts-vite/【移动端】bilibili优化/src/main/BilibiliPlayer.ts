import { log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { BilibiliDanmaku } from "./BilibiliDanmaku";
import { PopsPanel } from "@/setting/setting";

export const BilibiliPlayer = {
	get player() {
		return unsafeWindow.player;
	},
	init() {
		BilibiliDanmaku.init();
		let videoSpeed = PopsPanel.getValue<number>("bili-video-speed");
		this.setVideoSpeed(videoSpeed);
	},
	async playerPromise() {
		await utils.waitPropertyByInterval(
			unsafeWindow,
			() => {
				return (
					typeof BilibiliPlayer.player === "object" &&
					typeof BilibiliPlayer.player?.playerPromise === "object" &&
					BilibiliPlayer.player?.playerPromise != null
				);
			},
			250,
			10000
		);
		let playerPromise = await BilibiliPlayer.player!.playerPromise;
		return playerPromise;
	},
	/**
	 * 设置视频播放倍速
	 * @param value 倍速值
	 */
	setVideoSpeed(value: number) {
		this.playerPromise().then(async (playerPromise) => {
			await utils.waitPropertyByInterval(
				async () => {
					playerPromise = await BilibiliPlayer.playerPromise();
					return playerPromise;
				},
				() => {
					return (
						typeof playerPromise.video != null &&
						playerPromise.video instanceof HTMLVideoElement
					);
				},
				250,
				10000
			);
			playerPromise.video.playbackRate = value;
			log.success(`设置视频播放倍速: ${value}`);
			// 更新一下弹幕配置的倍速
			// 因为不是响应式的
			BilibiliDanmaku.DanmakuCoreConfig().then(async (config) => {
				config.videoSpeed = value;
				log.success(`设置弹幕配置的视频播放倍速: ${value}`);
			});
		});
	},
};
