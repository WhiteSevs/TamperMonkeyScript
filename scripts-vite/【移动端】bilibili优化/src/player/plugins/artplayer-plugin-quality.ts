import type Artplayer from "artplayer";
import type { ComponentOption, Selector } from "artplayer/types/component";

const TAG = "[artplayer-plugin-quality]：";

export const ArtPlayer_PLUGIN_QUALITY_KEY = "artplayer-plugin-quality";

export type ArtPlayerPluginQualityOption = {
	/** 播放器来自 */
	from: "video" | "bangumi";
	qualityList: {
		/** 画质显示的文字 */
		html: string;
		/** 画质对应的链接 */
		url: string;
		/** 画质代码 */
		quality: number;
	}[];
};

export type ArtPlayerPluginQualityResult = {
	name: string;
	update(option: ArtPlayerPluginQualityOption): void;
};

export type ArtPlayerPluginQualityStorageOption = {
	/** 画质代码 */
	quality: number;
};

const Quality = {
	$data: {
		art: null as any as Artplayer,
	},
	init(art: Artplayer, option: ArtPlayerPluginQualityOption) {
		Reflect.set(this.$data, "art", null);
		this.$data.art = art;
		this.update(option);
	},
	update(option: ArtPlayerPluginQualityOption) {
		const that = this;
		if (option.qualityList.length) {
			// 如果存在画质选项
			let firstQualityInfo = option.qualityList[0];
			// 存储键
			const storageKey = `artplayer-quality-${option.from}`;
			// 获取本地存储的上次选的画质，默认最高画质
			const storageQualityInfo = this.$data.art.storage.get(
				storageKey
			) as ArtPlayerPluginQualityStorageOption;

			// 根据本地保存的记录和当前提供的画质列表筛选出当前的画质
			let currentSelectQualityInfo = {
				index: 0,
				html: firstQualityInfo.html,
				/** 播放的地址 */
				url: firstQualityInfo.url,
			};

			if (storageQualityInfo) {
				// 判断当前的画质中是否同样的画质，存在的话就使用这个画质，默认第一个画质的
				const findQualityIndex = option.qualityList.findIndex(
					(item) => item.quality === storageQualityInfo.quality
				);
				if (findQualityIndex !== -1) {
					const findQuality = option.qualityList[findQualityIndex];
					currentSelectQualityInfo.index = findQualityIndex;
					currentSelectQualityInfo.url = findQuality.url;
					currentSelectQualityInfo.html = findQuality.html;
				} else {
					console.warn(TAG + "没有找到上次选的画质，使用当前默认第一个画质");
				}
			}

			// 调整一下select的default的值
			let selectorList: (Selector &
				ArtPlayerPluginQualityOption["qualityList"]["0"])[] =
				option.qualityList.map((item, index) => {
					return {
						default: index === currentSelectQualityInfo.index,
						html: item.html,
						url: item.url,
						quality: item.quality,
					};
				});

			// 判断面板是否存在
			// 存在就更新
			// 不存在就添加
			const controlsOption: ComponentOption = {
				name: ArtPlayer_PLUGIN_QUALITY_KEY,
				index: 10,
				position: "right",
				html: currentSelectQualityInfo.html,
				selector: selectorList,
				onSelect: function (selector) {
					let itemInfo = selector as Selector &
						ArtPlayerPluginQualityOption["qualityList"]["0"];
					// 切换画质
					console.log(TAG + "切换画质", itemInfo);
					that.$data.art.switchQuality(itemInfo.url);
					// 保存切换的画质
					that.$data.art.storage.set(storageKey, {
						quality: itemInfo.quality,
					} as ArtPlayerPluginQualityStorageOption);
					return selector.html;
				},
			};
			if (Reflect.has(this.$data.art.controls, ArtPlayer_PLUGIN_QUALITY_KEY)) {
				// 更新面板数据
				this.$data.art.controls.update(controlsOption);
			} else {
				// 添加面板
				this.$data.art.controls.add(controlsOption);
			}

			// 设置播放地址
			this.$data.art.url = currentSelectQualityInfo.url;
		} else {
			// 移除画质切换面板
			if (Reflect.has(this.$data.art.controls, ArtPlayer_PLUGIN_QUALITY_KEY)) {
				this.$data.art.controls.remove(ArtPlayer_PLUGIN_QUALITY_KEY);
			}
		}
	},
};

/**
 * 画质切换工具
 * @param option
 */
export const artplayPluginQuality = (option: ArtPlayerPluginQualityOption) => {
	return (art: Artplayer) => {
		Quality.init(art, option);
		return {
			name: ArtPlayer_PLUGIN_QUALITY_KEY,
			update(option: ArtPlayerPluginQualityOption) {
				Quality.update(option);
			},
		};
	};
};
