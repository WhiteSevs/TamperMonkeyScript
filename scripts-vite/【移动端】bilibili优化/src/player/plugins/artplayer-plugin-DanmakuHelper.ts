import { utils } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";
import type Artplayer from "artplayer";
import type { Option as ArtPlayerDanmakuOption } from "artplayer-plugin-danmuku";

const TAG = "[artplayer-plugin-danmuku]：";

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
		/**
		 * 将本地的配置进行覆盖
		 */
		this.$data.localArtDanmakuOption = utils.assign(
			defaultDanmakuOption,
			GM_getValue<Partial<ArtPlayerDanmakuOption>>(this.$data.KEY, {})
		);
	}
	/**
	 * 获取默认配置
	 */
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
	/**
	 * 获取本地保存的配置
	 */
	getLocalArtDanmakuOption() {
		return this.$data.localArtDanmakuOption;
	}
	repairBrowserNoResponse(art: Artplayer) {
		console.warn(
			TAG +
				"目前尚未知晓导致浏览器卡死的原因是哪里的问题，但是启用该弹幕插件100%复现，复现操作：点击播放，点击全屏，再点击屏幕隐藏播放器的setting，使用浏览器手势后退退出全屏，这时候浏览器直接卡死"
		);
	}
	onConfigChange(art: Artplayer) {
		art.on(
			// @ts-ignore
			"artplayerPluginDanmuku:config",
			(option: ArtPlayerDanmakuOption) => {
				// 更新配置值
				console.log(TAG + "更新配置项", option);
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
