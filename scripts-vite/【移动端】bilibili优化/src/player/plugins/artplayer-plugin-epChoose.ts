import { addStyle } from "@/env";
import type Artplayer from "artplayer";
import type { Events } from "artplayer/types/events";
import type { Setting, SettingOption } from "artplayer/types/setting";

export type ArtPlayerPluginEpChooseOption = {
	EP_LIST: {
		/** 是否是默认的 */
		isDefault: boolean;
		/** 视频标题 */
		title: string;
		/** 视频的aid，请给aid或bvid */
		aid?: number | string;
		/** 视频的bvid，请给aid或bvid */
		bvid?: string;
		/** 视频的cid */
		cid: number;
		/** 当视频为番剧时存在ep_id */
		ep_id?: number;
		/** 选中该集的回调 */
		onSelect?: (selectOption: SettingOption, index: number) => void;
	}[];
	/** 是否自动连播 */
	automaticBroadcast?: boolean;
};
export type ArtPlayerPluginEpChooseResult = {
	name: string;
	/**
	 * 更新参数时调用
	 * @param option
	 */
	update(option: ArtPlayerPluginEpChooseOption): void;
};

const TAG = "[artplayer-plugin-epChoose]：";

/**
 * 生成选集的标题
 * @param title 视频标题，一般是EP_INFO.long_title或VIDEO_EP_INFO.title
 * @param title_id 番剧中会有，第xx集，一般是EP_INFO.title
 */
export const GenerateArtPlayerEpTitle = (
	title: string,
	title_id?: string | number | null | undefined
) => {
	if (title_id == null || title_id == "") {
		return title;
	}
	if (isNaN(Number(title_id))) {
		// 这时候title_id是title
		// title为空
		return title_id.toString();
	}
	return `第${title_id}话 ${title}`;
};

/**
 * 生成播放器的选集菜单配置项
 */
export const GenerateArtPlayerEpSetting = (
	option: ArtPlayerPluginEpChooseOption
): Setting => {
	let tooltip = "";
	let selector = option.EP_LIST.map((item, itemIndex) => {
		if (item.isDefault) {
			tooltip = item.title;
		}
		return {
			html: item.title,
			default: item.isDefault,
			index: itemIndex,
			callback: item.onSelect,
		} as Setting;
	});
	return {
		name: EpChoose.$key.SETTING_KEY,
		icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>`,
		html: "选集",
		selector: selector,
		tooltip: tooltip,
		onSelect: function (item) {
			if (typeof item.callback === "function") {
				item.callback(item, item.index);
			}
			return item.html;
		},
		mounted(panel, item) {
			panel.setAttribute("data-plugin", EpChoose.$key.SETTING_KEY);
		},
		/**
		 * 播放下一集
		 */
		playNext() {
			let findIndex = this.selector!.findIndex((item) => item.default);
			if (findIndex !== -1 && findIndex + 1 < this.selector!.length - 1) {
				findIndex += 1;
				// @ts-ignore
				this.onSelect(this.selector![findIndex]);
			} else {
				console.warn(TAG + "当前播放列表已无下一集");
			}
		},
	};
};

const EpChooseEvent = {
	$event: {
		/** 自动连播 */
		"video:ended": () => {
			console.log(TAG + "自动连播启用，播放下一集");
			let settingIns = EpChoose.$data.art.setting.find(
				EpChoose.$key.SETTING_KEY
			);
			settingIns.playNext();
		},
	} as {
		[key in keyof Events]?: (...args: Events[key]) => unknown;
	},
	bind(art: Artplayer) {
		Object.keys(this.$event).forEach((eventName) => {
			art.on(
				eventName as any,
				(this.$event as any)[eventName as keyof typeof this.$event]
			);
		});
	},
	unbind(art: Artplayer) {
		Object.keys(this.$event).forEach((eventName) => {
			art.off(
				eventName as any,
				(this.$event as any)[eventName as keyof typeof this.$event]
			);
		});
	},
};

const EpChoose = {
	$flag: {
		isInitCSS: false,
	},
	$key: {
		SETTING_KEY: "setting-ep-choose",
		PLUGIN_KEY: "plugin-ep-choose",
	},
	$data: {
		art: null as any as Artplayer,
	},
	/**
	 * 重置环境变量
	 */
	resetEnv() {
		Object.keys(this.$data).forEach((key) => {
			Reflect.set(this.$data, key, null);
		});
	},
	/**
	 * 初始化
	 * @param option
	 */
	init(art: Artplayer, option: ArtPlayerPluginEpChooseOption) {
		this.resetEnv();
		this.$data.art = art;
		EpChooseEvent.unbind(art);

		if (option.automaticBroadcast) {
			// 连播
			EpChooseEvent.bind(art);
		}
		if (!this.$flag.isInitCSS) {
			this.$flag.isInitCSS = true;
			addStyle(/*css*/ `
			.art-setting-panel[data-plugin="${EpChoose.$key.SETTING_KEY}"] .art-setting-item .art-setting-item-left-text{
				max-width: 210px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			`);
		}
		this.update(option);
	},
	/**
	 * 更新
	 * @param option
	 */
	update(option: ArtPlayerPluginEpChooseOption) {
		EpChooseEvent.unbind(this.$data.art);
		if (option.EP_LIST == null) {
			return;
		}
		if (option.EP_LIST.length === 0) {
			return;
		}
		// 先判断setting中是否存在该配置
		let setting = GenerateArtPlayerEpSetting(option);
		if (this.$data.art.setting.find(this.$key.SETTING_KEY)) {
			// 已有该菜单，更新
			this.$data.art.setting.update(setting);
		} else {
			// 还没有该菜单，添加
			this.$data.art.setting.add(setting);
		}
		if (option.automaticBroadcast) {
			EpChooseEvent.bind(this.$data.art);
		}
	},
};
/**
 * 选集插件
 * @param option
 */
export const artplayerPluginEpChoose = (
	option: ArtPlayerPluginEpChooseOption
) => {
	return (art: Artplayer): ArtPlayerPluginEpChooseResult => {
		EpChoose.init(art, option);
		return {
			name: EpChoose.$key.PLUGIN_KEY,
			update(option: ArtPlayerPluginEpChooseOption) {
				EpChoose.update(option);
			},
		};
	};
};

/**
 * 插件键id
 */
export const ArtPlayer_PLUGIN_EP_CHOOSE_KEY = EpChoose.$key.PLUGIN_KEY;
