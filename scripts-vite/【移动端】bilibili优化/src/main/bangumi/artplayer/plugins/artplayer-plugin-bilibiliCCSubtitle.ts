import { BilibiliResponseCheck } from "@/api/BilibiliApiCheck";
import { BilibiliApiConfig } from "@/api/BilibiliApiConfig";
import { httpx, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import Artplayer from "artplayer";
import type { Setting } from "artplayer/types/setting";
import Chinese, { type CustomStr } from "s2t-chinese";

/**
 * 自定义字符库（补充）
 */
const SubTitleCustomStr = {
	src: "臟妳為傢蔔餵眾係姊託迴蹟儘封啟",
	des: "脏你为家卜喂众系姐托回迹尽对启",
	more_src: ["乾脆", "随著", "相信著", "奇蹟", "拚命", "採取", "製造"],
	more_des: ["干脆", "随着", "相信着", "奇迹", "拼命", "采取", "制造"],
	_custom_str: [] as CustomStr,
	generteCustomStr() {
		for (let index = 0; index < this.src.length; index++) {
			this._custom_str.push({
				src: this.src[index],
				des: this.des[index],
			});
		}
		for (let index = 0; index < this.more_src.length; index++) {
			this._custom_str.push({
				src: this.more_src[index],
				des: this.more_des[index],
			});
		}
	},
	getCustomStr(): CustomStr {
		return this._custom_str;
	},
};

const SubTitleEvent = {
	/**
	 * 重置
	 */
	reset() {
		this.unbind();
	},
	/**
	 * 绑定事件
	 */
	bind() {
		SubTitle.art.on("video:timeupdate", this.event.bind(this));
	},
	/**
	 * 取消绑定事件
	 */
	unbind() {
		// 清空字幕内容
		SubTitle.clearSubTitle();
		SubTitle.art.off("video:timeupdate", this.event);
	},
	/**
	 * 事件
	 */
	event() {
		// 视频进度更新（频繁触发）
		let currentTime = SubTitle.art.currentTime;
		let currentSubTitleData =
			SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex]?.data;
		if (!currentSubTitleData) {
			// 没有字幕信息
			return;
		}
		// 获取字幕信息
		let findValue = currentSubTitleData.find((item) => {
			// 获取在当前时间区间的弹幕
			if (item.to >= currentTime && item.from <= currentTime) {
				return true;
			} else {
				return false;
			}
		});
		// 遍历已有的字幕元素
		// 先排查跟旧的字幕元素是否相同
		let $allSubTitleLine = Array.from(
			SubTitle.$el.$subtitle.querySelectorAll(".art-subtitle-line")
		);
		for (let index = 0; index < $allSubTitleLine.length; index++) {
			const $oldSubtitleLine = $allSubTitleLine[index];
			const { from: oldFrom, to: oldTo } = Reflect.get(
				$oldSubtitleLine,
				"data-subtitle-line-info"
			);
			if (oldTo <= currentTime || oldFrom >= currentTime) {
				// 不在事件范围内
				$oldSubtitleLine.remove();
			} else {
				if (findValue) {
					if (findValue.from === oldFrom && findValue.to === oldTo) {
						// 是相同的字幕
						return;
					}
				}
			}
		}
		if (findValue) {
			let $subtitleLine = document.createElement("div");
			$subtitleLine.className = "art-subtitle-line";
			Reflect.set($subtitleLine, "data-subtitle-line-info", findValue);
			$subtitleLine.setAttribute("data-group", "0");
			$subtitleLine.innerHTML = findValue.content;
			SubTitle.$el.$subtitle.appendChild($subtitleLine);
		}
	},
};

const SubTitleSettingLayer = {
	config: {
		NAME: "setting-bilibili-cc-subtitle",
	},
	/**
	 * 重置菜单
	 */
	reset() {
		// 移除旧的菜单
		let oldSetting = SubTitle.art.setting.option.find(
			(item) => item.name === this.config.NAME
		);
		if (oldSetting) {
			SubTitle.art.setting.remove(this.config.NAME);
		}
	},
	/**
	 * 获取默认的layer配置项
	 */
	getDefaultSettingOption: (): Setting => {
		return {
			name: SubTitleSettingLayer.config.NAME,
			width: 200,
			html: "字幕",
			tooltip: SubTitleSettingLayer.getDefaultSelector().html,
			icon: '<img width="22" heigth="22" src="https://artplayer.org/assets/img/subtitle.svg">',
			selector: [],
			onSelect: function (item) {
				if (typeof item.callback === "function") {
					item.callback();
				}
				return item.html;
			},
		};
	},
	/**
	 * 获取默认的selector配置项
	 */
	getDefaultSelector: (): Setting => {
		return {
			default: true,
			html: "无",
			callback() {
				SubTitleEvent.unbind();
			},
		};
	},
};

const SubTitleData = {
	/**
	 * 所有的字幕信息
	 */
	allSubTitleInfo: <
		{
			/** 字幕显示的名字 */
			name: string;
			/** 语言（代码） */
			lan: string;
			/** 字幕的位置信息 */
			data: {
				content: string;
				from: number;
				location: number;
				to: number;
			}[];
		}[]
	>[],
	/**
	 * 当前选择的字幕下标
	 */
	currentSelectIndex: -1,
	/**
	 * 重置所有data数据
	 */
	reset() {
		this.allSubTitleInfo = [];
		this.currentSelectIndex = -1;
	},
};

const SubTitle = {
	art: null as any as Artplayer,
	$el: {
		/**
		 * 字幕容器
		 */
		$subtitle: null as any as HTMLDivElement,
	},
	/**
	 * 更新字幕信息
	 * @param option
	 */
	async update(option: BilibiliSubTitleOption) {
		SubTitleData.reset();
		SubTitleSettingLayer.reset();
		SubTitleEvent.reset();
		// 设置菜单项
		const settingOption: Setting =
			SubTitleSettingLayer.getDefaultSettingOption();
		/** 默认的配置项 */
		const defaultSelector: Setting = SubTitleSettingLayer.getDefaultSelector();
		settingOption.selector?.push(defaultSelector);
		// 添加菜单
		this.art.setting.add(settingOption);

		// 获取字幕容器
		this.$el.$subtitle = this.art.template.$subtitle;

		// 获取视频信息（里面有字幕信息）
		const videoInfoResponse = await httpx.get(
			`https://${BilibiliApiConfig.web_host}/x/player/v2?cid=${option.cid}&aid=${option.aid}&ep_id=${option.ep_id}`,
			{
				fetch: true,
				allowInterceptConfig: false,
				responseType: "json",
				headers: {
					Host: "www.bilibili.com",
					Referer: "https://www.bilibili.com",
				},
			}
		);

		if (!videoInfoResponse.status) {
			console.error(
				"[artplayer-plugin-bilibiliCCSubTitle]：获取视频信息失败",
				videoInfoResponse
			);
			return;
		}
		console.log(
			"[artplayer-plugin-bilibiliCCSubTitle]：视频字幕信息",
			videoInfoResponse
		);
		// 解析json
		const videoInfoResultJSON = utils.toJSON(
			videoInfoResponse.data.responseText
		);
		if (!BilibiliResponseCheck.isWebApiSuccess(videoInfoResultJSON)) {
			console.error(
				"[artplayer-plugin-bilibiliCCSubTitle]：获取视频信息失败",
				videoInfoResultJSON
			);
			return;
		}
		// 字幕链接列表
		let subTitleUrlInfoList = videoInfoResultJSON["data"]["subtitle"][
			"subtitles"
		] as {
			ai_status: number;
			ai_type: number;
			id: number;
			id_str: string;
			is_lock: boolean;
			lan: string;
			lan_doc: string;
			subtitle_url: string;
			type: number;
		}[];

		if (!subTitleUrlInfoList.length) {
			console.warn(
				"[artplayer-plugin-bilibiliCCSubTitle]：获取字幕链接列表为空",
				videoInfoResultJSON
			);
			return;
		}
		// 依次加载字幕json
		for (let index = 0; index < subTitleUrlInfoList.length; index++) {
			const subTitleUrlInfo = subTitleUrlInfoList[index];
			const subTitleInfoResponse = await httpx.get(
				subTitleUrlInfo.subtitle_url,
				{
					responseType: "json",
					allowInterceptConfig: false,
					fetch: false,
					headers: {
						// Host: "www.bilibili.com",
						// Referer: "https://www.bilibili.com",
						"User-Agent": utils.getRandomPCUA(),
					},
				}
			);
			if (subTitleInfoResponse.status) {
				// 解析json
				const subTitleInfoJSON = utils.toJSON(
					subTitleInfoResponse.data.responseText
				);
				// 字幕信息JSON
				const subTitleInfo = subTitleInfoJSON["body"] as {
					content: string;
					from: number;
					location: number;
					to: number;
				}[];
				let currentIndex = SubTitleData.allSubTitleInfo.length;
				SubTitleData.allSubTitleInfo.push({
					name: subTitleUrlInfo.lan_doc,
					data: subTitleInfo,
					lan: subTitleUrlInfo.lan,
				});
				// 动态添加菜单
				settingOption!.selector!.push({
					html: subTitleUrlInfo.lan_doc,
					callback() {
						SubTitleData.currentSelectIndex = currentIndex;
						SubTitleEvent.unbind();
						SubTitleEvent.bind();
					},
				});
			}
		}

		PopsPanel.execMenu("bili-bangumi-generateSimpleChineseSubtitle", () => {
			let subTitleHant = SubTitleData.allSubTitleInfo.find((item) => {
				return item.lan === "zh-Hant" || item.name.includes("繁体");
			});
			if (!subTitleHant) {
				return;
			}
			// 繁体转简体
			// 生成简中字幕
			let simpleChineseSubtitleData: {
				content: string;
				from: number;
				location: number;
				to: number;
			}[] = [];
			subTitleHant.data.forEach((item) => {
				const { content, ...otherData } = item;
				const translateContent = Chinese.t2s(
					content,
					SubTitleCustomStr.getCustomStr()
				);
				simpleChineseSubtitleData.push({
					content: translateContent,
					...otherData,
				});
			});

			let subTitleName = "简体（自动生成）";
			SubTitleData.allSubTitleInfo.push({
				name: subTitleName,
				lan: "zh-CN",
				data: simpleChineseSubtitleData,
			});
			let currentIndex = SubTitleData.allSubTitleInfo.length - 1;
			// 动态添加菜单
			settingOption!.selector!.push({
				html: subTitleName,
				callback() {
					SubTitleData.currentSelectIndex = currentIndex;
					SubTitleEvent.unbind();
					SubTitleEvent.bind();
				},
			});
		});
		console.log(
			"[artplayer-plugin-bilibiliCCSubTitle]：加载视频CC字幕信息",
			SubTitleData.allSubTitleInfo
		);

		// 更新菜单数据
		this.art.setting.update(settingOption);
	},
	/**
	 * 清空字幕
	 */
	clearSubTitle() {
		if (this.$el.$subtitle) {
			this.$el.$subtitle.innerHTML = "";
		}
	},
	/**
	 * 更新artplayer实例
	 * @param art
	 */
	updateArtPlayer(art: Artplayer) {
		this.art = art;
	},
};

type BilibiliSubTitleOption = {
	/** 视频的cid */
	cid: string | number;
	/** 视频的aid */
	aid: string | number;
	/** 视频的ep_id */
	ep_id: string | number;
};
/**
 * 加载Bilibili的CC字幕的插件
 */
export function artplayerPluginBilibiliCCSubTitle(
	option: BilibiliSubTitleOption
) {
	return async (art: Artplayer) => {
		SubTitleCustomStr.generteCustomStr();
		// 更新实例
		SubTitle.updateArtPlayer(art);
		SubTitle.update(option);
		return {
			name: "plugin-bilibili-cc-subtitle",
			/** 更新视频时调用，更新字幕 */
			update(option: BilibiliSubTitleOption) {
				SubTitle.update(option);
			},
		};
	};
}
