import { utils } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";
import type Artplayer from "artplayer";
import type { Option as ArtPlayerDanmakuOption } from "artplayer-plugin-danmuku";

export class ArtPlayerDanmakuOptionHelper {
	$data = {
		KEY: "art-player-danmaku-option",
		localArtDanmakuOption: {} as Partial<ArtPlayerDanmakuOption>,
	};
	constructor(localDataKey: string) {
		this.$data.KEY = localDataKey;

		/**
		 * 弹幕默认配置
		 */
		const defaultDanmakuOption = this.getDefaultDanmakuOption();
		this.$data.localArtDanmakuOption = utils.assign(
			defaultDanmakuOption,
			GM_getValue<Partial<ArtPlayerDanmakuOption>>(this.$data.KEY, {})
		);
	}
	getDefaultDanmakuOption() {
		return {
			speed: 5,
			margin: [10, "75%"],
			opacity: 1,
			modes: [0, 1, 2],
			fontSize: 18,
			antiOverlap: false,
			synchronousPlayback: true,
			visible: true,
		} as Partial<ArtPlayerDanmakuOption>;
	}
	getLocalArtDanmakuOption() {
		return this.$data.localArtDanmakuOption;
	}
	/**
	 * 移除Danmaku的resize事件，该事件可能会导致浏览器卡死
	 */
	repairBrowserNoResponse(art: Artplayer) {
		console.warn(
			"目前尚未知晓导致浏览器卡死的原因是哪里的问题，但是启用该弹幕插件100%复现，复现操作：点击播放，然后重复全屏和退出全屏，拖动进度到弹幕量最多的时间点，过一会卡死"
		);
	}
	onConfigChange(art: Artplayer) {
		art.on(
			// @ts-ignore
			"artplayerPluginDanmuku:config",
			(option: ArtPlayerDanmakuOption) => {
				// 更新配置值
				Object.keys(this.$data.localArtDanmakuOption).forEach((key) => {
					if (Reflect.has(option, key)) {
						let value = Reflect.get(option, key);
						Reflect.set(this.$data.localArtDanmakuOption, key, value);
					}
				});
				// 保存数据
				GM_setValue(this.$data.KEY, this.$data.localArtDanmakuOption);
			}
		);
	}
}
