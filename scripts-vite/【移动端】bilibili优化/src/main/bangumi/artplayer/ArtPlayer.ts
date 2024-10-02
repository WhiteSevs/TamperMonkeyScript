import { log, utils } from "@/env";
import Artplayer from "artplayer";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
import type Option from "artplayer/types/option";
import type { Option as ArtPlayerDanmakuOption } from "artplayer-plugin-danmuku";
import type { quality } from "artplayer/types/quality";
import { artplayerPluginM4SAudioSupport } from "./plugins/artplayer-plugin-bilibiliM4SAudioSupport";
import { artplayerPluginBilibiliCCSubTitle } from "./plugins/artplayer-plugin-bilibiliCCSubtitle";
import { PopsPanel } from "@/setting/setting";
import { BilibiliVideoCodingCode } from "@/api/BilibiliApiConfig";
import { artplayerPluginTopToolBar } from "./plugins/artplayer-plugin-TopToolBar";
import flvjs from "flv.js";
import { BilibiliLogUtils } from "@/utils/BilibiliLogUtils";
import type { EP_INFO } from "../BangumiType";
import {
	BlibiliBangumiPlayer,
	GenerateVideoTitle,
} from "../BilibiliBangumiPlayer";
import type { Setting } from "artplayer/types/setting";
import { ArtPlayerBiliBiliIcon } from "@/player/BilibiliArtPlayerIcon";
import { GM_getValue, GM_setValue } from "ViteGM";

export type BilibiliBangumiArtPlayerOption = {
	/** 容器 */
	container: HTMLDivElement | string;
	/** 选集信息 */
	epList: EP_INFO[];
	/** 视频链接 */
	url?: string | (() => IPromise<string>);
	/** 音频链接 */
	audioUrl?: string | null | undefined;
	/** 画质信息 */
	quality: quality[];
	/** 弹幕xml地址 */
	danmukuUrl: string;
	/** 视频的cid */
	cid: string | number;
	/** 视频的aid */
	aid: string | number;
	/** 视频的bvid */
	bvid?: string;
	/** 视频的ep_id */
	ep_id: string | number;
	/** 视频的标题 */
	videoTitle?: string;
	/** 是否是flv文件 */
	isFlv: boolean;
	/** flv的视频信息 */
	flvInfo: {
		/** 排序 */
		order: number;
		/** 播放地址 */
		url: string;
		/** 视频长度 */
		length: number;
		/** 文件大小 */
		size: number;
		/** 视频秒数 */
		duration: number;
	}[];
	/** flv视频总大小(byte) */
	flvTotalSize: number;
	/** flv视频总长度(ms) */
	flvTotalDuration: number;
};

/**
 * 生成播放器的选集菜单配置项
 */
const GenerateArtPlayerEPSelectSetting = (
	option: BilibiliBangumiArtPlayerOption
): Setting => {
	return {
		name: "bili-video-choose-ep",
		icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>`,
		html: "选集",
		// icon: `<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>`,
		selector: option.epList.map((item) => {
			return {
				html: GenerateVideoTitle(item.title, item.long_title),
				default:
					item.ep_id === option.ep_id &&
					item.aid === option.aid &&
					item.cid === option.cid,
				ep_info: item,
			} as Setting;
		}),
		onSelect: function (item) {
			let select_EP_Info =
				item.ep_info as BilibiliBangumiArtPlayerOption["epList"]["0"];
			// 更新播放信息
			BlibiliBangumiPlayer.updateArtPlayerVideoInfo(
				select_EP_Info,
				option.epList
			);
			return item.html;
		},
	};
};

export const BilibiliArtPlayer = {
	art: null as any as Artplayer,
	flv: null as any as flvjs.Player | null,
	/** 当前的配置项 */
	currentOption: null as any as BilibiliBangumiArtPlayerOption | null,
	/**
	 * 重置环境变量
	 */
	resetEnv() {
		// @ts-ignore
		this.art = null;
		// @ts-ignore
		this.flv = null;
		// @ts-ignore
		this.currentOption = null;
	},
	/**
	 * flv播放
	 *
	 * 切换url时自动调用
	 * @param videoInfoList 可能多个，可能只有一个
	 */
	flvPlayer() {
		if (this.currentOption == null) {
			console.error("flv获取当前配置为空");
			return;
		}
		let flvInfoList = this.currentOption.flvInfo;
		if (this.flv != null || flvInfoList == null) {
			// 销毁旧的
			this.flv?.detachMediaElement();
			this.flv?.destroy();
		}
		let currentOption = this.currentOption;
		console.log("加载视频", flvInfoList);
		if (flvInfoList.length > 1) {
			// 多个
			this.flv = flvjs.createPlayer(
				{
					type: "flv",
					filesize: currentOption.flvTotalSize,
					duration: currentOption.flvTotalDuration,
					segments: flvInfoList.map((item) => {
						return {
							url: item.url,
							duration: item.duration,
							filesize: item.size,
						};
					}),
				},
				{
					stashInitialSize: 1024 * 100,
				}
			);
		} else {
			// 1个
			this.flv = flvjs.createPlayer(
				{
					type: "flv",
					url: flvInfoList[0].url,
				},
				{
					stashInitialSize: 1024 * 100,
				}
			);
		}
		// 输出流绑定
		this.flv.attachMediaElement(this.art.video);
		// 加载流
		this.flv.load();
	},
	/**
	 * 初始化播放器
	 * @param option
	 */
	async init(option: BilibiliBangumiArtPlayerOption) {
		this.resetEnv();
		this.currentOption = option;
		// const volume = 100;
		// 本地存储的弹幕设置
		const localArtDanmakuOption_KEY = "artplayer-bangumi-danmaku-option";
		/**
		 * 弹幕默认配置
		 */
		const defaultDanmakuOption = {
			speed: 5,
			margin: [10, "75%"],
			opacity: 1,
			modes: [0, 1, 2],
			fontSize: 18,
			antiOverlap: true,
			synchronousPlayback: false,
			visible: true,
		} as Partial<ArtPlayerDanmakuOption>;
		const localArtDanmakuOption = utils.assign(
			defaultDanmakuOption,
			GM_getValue<Partial<ArtPlayerDanmakuOption>>(
				localArtDanmakuOption_KEY,
				{}
			)
		);

		const artOption: Option = {
			/** 容器 */
			container: option.container,
			/** 链接 */
			url: "",
			// poster: 'https://artplayer.org/assets/sample/poster.jpg',
			/** 默认音量 */
			volume: 1,
			/** 是否是直播 */
			isLive: false,
			/** 是否静音 */
			muted: false,
			/** 是否自动播放 */
			autoplay: false,
			/** 是否显示视频画中画按钮 */
			pip: false,
			/** 播放器是否自动调整大小(可能有bug) */
			autoSize: false,
			/** 播放器是否自动运行迷你模式 */
			autoMini: false,
			/** 是否显示截图按钮 */
			screenshot: false,
			/** 是否显示视频设置按钮 */
			setting: true,
			/** 是否循环播放 */
			loop: false,
			/** 是否显示视频翻转按钮 */
			flip: true,
			/** 是否显示视频播放速率按钮 */
			playbackRate: true,
			/** 是否显示视频宽高比按钮 */
			aspectRatio: true,
			/** 是否显示视频窗口全屏按钮 */
			fullscreen: true,
			/** 是否显示视频网页全屏按钮 */
			fullscreenWeb: true,
			/** 是否启用播放器字幕偏移 */
			subtitleOffset: true,
			/** 是否启用播放器迷你进度条 */
			miniProgressBar: true,
			/** 保证页面只存在一个实例 */
			mutex: true,
			/** UI中是否使用背景 */
			backdrop: true,
			/** 移动端是否使用playsInline */
			playsInline: true,
			/** 是否使用自动播放 */
			autoPlayback: true,
			/** 是否使用airplay */
			airplay: true,
			/** 播放器颜色主题 */
			theme: "#FB7299",
			/** 播放器语言 */
			lang: navigator.language.toLowerCase(),
			/** 覆盖video属性 */
			moreVideoAttr: {
				crossOrigin: "anonymous",
			},
			/** 自定义设置列表 */
			settings: [
				// {
				// 	html: "音量",
				// 	icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="24" height="24" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_94"><rect width="88" height="88" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_96"><path d="M0,0 L88,0 L88,88 L0,88z"></path></clipPath></defs><g clip-path="url(#__lottie_element_94)"><g clip-path="url(#__lottie_element_96)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g transform="matrix(0.9999997615814209,0,0,0.9999997615814209,28.000003814697266,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M15.5600004196167,-25.089000701904297 C15.850000381469727,-24.729000091552734 16,-24.288999557495117 16,-23.839000701904297 C16,-23.839000701904297 16,23.840999603271484 16,23.840999603271484 C16,24.94099998474121 15.100000381469727,25.840999603271484 14,25.840999603271484 C13.550000190734863,25.840999603271484 13.109999656677246,25.680999755859375 12.75,25.400999069213867 C12.75,25.400999069213867 -4,12.00100040435791 -4,12.00100040435791 C-4,12.00100040435791 -8,12.00100040435791 -8,12.00100040435791 C-12.420000076293945,12.00100040435791 -16,8.420999526977539 -16,4.000999927520752 C-16,4.000999927520752 -16,-3.999000072479248 -16,-3.999000072479248 C-16,-8.418999671936035 -12.420000076293945,-11.99899959564209 -8,-11.99899959564209 C-8,-11.99899959564209 -4,-11.99899959564209 -4,-11.99899959564209 C-4,-11.99899959564209 12.75,-25.39900016784668 12.75,-25.39900016784668 C13.609999656677246,-26.089000701904297 14.869999885559082,-25.948999404907227 15.5600004196167,-25.089000701904297z"></path></g></g><g style="display: none;" transform="matrix(1.0053564310073853,0,0,1.0053564310073853,56.00461959838867,44.0004997253418)" opacity="0.039782297805396355"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"></path></g></g><g style="display: none;" transform="matrix(1.0126574039459229,0,0,1.0126574039459229,64.37825012207031,44.0057487487793)" opacity="0.017782484959038527"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"></path></g></g><g style="display: none;" transform="matrix(1.000211238861084,0,0,1.000211238861084,56.002986907958984,44)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"></path></g></g><g style="display: none;" transform="matrix(1.000205397605896,0,0,1.000205397605896,64.00399017333984,44.00699996948242)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"></path></g></g><g transform="matrix(0.9999995231628418,0,0,0.9999995231628418,55.99999237060547,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"></path></g></g><g transform="matrix(0.9999995231628418,0,0,0.9999995231628418,64.01399230957031,44.00699996948242)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"></path></g></g></g></g></svg>`,
				// 	tooltip: volume.toString(),
				// 	range: [100, 0, 100, 1],
				// 	onChange: function (item, $dom, event) {
				// 		// 实际值在0~10之间且间隔为1
				// 		let selectValue = parseFloat((item.range / 100).toString());
				// 		let showToolTip = item.range.toString();
				// 		art.volume = selectValue;
				// 		return item.range;
				// 	},
				// },
				{
					name: "video-playback-codeid",
					html: "播放策略",
					tooltip: "默认",
					icon: `<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>`,
					selector: [
						{
							default: true,
							html: "默认",
							value: BilibiliVideoCodingCode["AV1"],
						},
						{
							html: "AV1",
							value: BilibiliVideoCodingCode["AV1"],
						},
						{
							html: "HEVC",
							value: BilibiliVideoCodingCode["HEVC"],
						},
						{
							html: "AVC",
							value: BilibiliVideoCodingCode["AVC"],
						},
					],
					onSelect: function (item) {
						PopsPanel.setValue("bili-bangumi-videoCodingCode", item.value);
						return item.html;
					},
				},
				GenerateArtPlayerEPSelectSetting(option),
			],
			/** 自定义右键菜单 */
			contextmenu: [
				// {
				// 	html: "Custom menu",
				// 	click: function (contextmenu) {
				// 		console.info("You clicked on the custom menu");
				// 		contextmenu.show = false;
				// 	},
				// },
			],
			/**  */
			layers: [
				// {
				//     html: '<img width="100" src="https://artplayer.org/assets/sample/layer.png">',
				//     click: function () {
				//         window.open('https://aimu.app');
				//         console.info('You clicked on the custom layer');
				//     },
				//     style: {
				//         position: 'absolute',
				//         top: '20px',
				//         right: '20px',
				//         opacity: '.9',
				//     },
				// },
			],
			/**  */
			quality: [...option.quality],
			// thumbnails: {
			// 	url: "https://artplayer.org/assets/sample/thumbnails.png",
			// 	number: 60,
			// 	column: 10,
			// 	scale: 0.85,
			// },
			// subtitle: {
			// 	url: "https://artplayer.org/assets/sample/subtitle.srt",
			// 	type: "srt",
			// 	style: {
			// 		color: "#fe9200",
			// 		fontSize: "20px",
			// 	},
			// 	encoding: "utf-8",
			// },
			highlight: [
				// {
				// 	time: 15,
				// 	text: "One more chance",
				// },
				// {
				// 	time: 30,
				// 	text: "谁でもいいはずなのに",
				// },
				// {
				// 	time: 45,
				// 	text: "夏の想い出がまわる",
				// },
				// {
				// 	time: 60,
				// 	text: "こんなとこにあるはずもないのに",
				// },
				// {
				// 	time: 75,
				// 	text: "终わり",
				// },
			],
			controls: [
				// {
				//     position: 'right',
				//     html: 'Control',
				//     index: 1,
				//     tooltip: 'Control Tooltip',
				//     style: {
				//         marginRight: '20px',
				//     },
				//     click: function () {
				//         console.info('You clicked on the custom control');
				//     },
				// },
			],
			icons: ArtPlayerBiliBiliIcon,
			plugins: [
				artplayerPluginDanmuku({
					danmuku: option.danmukuUrl,
					// 以下为非必填
					speed: localArtDanmakuOption.speed, // 弹幕持续时间，范围在[1 ~ 10]
					/**
                     * [{
                                name: "1/4",
                                value: [10, "75%"]
                            }, {
                                name: "半屏",
                                value: [10, "50%"]
                            }, {
                                name: "3/4",
                                value: [10, "25%"]
                            }, {
                                name: "满屏",
                                value: [10, 10]
                            }]
                     */
					margin: localArtDanmakuOption["margin"], // 弹幕上下边距，支持像素数字和百分比
					opacity: localArtDanmakuOption["opacity"], // 弹幕透明度，范围在[0 ~ 1]
					color: "#FFFFFF", // 默认弹幕颜色，可以被单独弹幕项覆盖
					mode: 0, // 默认弹幕模式: 0: 滚动，1: 顶部，2: 底部
					modes: localArtDanmakuOption["modes"], // 弹幕可见的模式
					fontSize: localArtDanmakuOption["fontSize"], // 弹幕字体大小，支持像素数字和百分比
					antiOverlap: localArtDanmakuOption["antiOverlap"], // 弹幕是否防重叠
					synchronousPlayback: localArtDanmakuOption["synchronousPlayback"], // 是否同步播放速度
					mount: undefined, // 弹幕发射器挂载点, 默认为播放器控制栏中部
					heatmap: true, // 是否开启热力图
					width: 800, // 当播放器宽度小于此值时，弹幕发射器置于播放器底部
					points: [], // 热力图数据
					filter: (danmu) => danmu.text.length <= 100, // 弹幕载入前的过滤器
					beforeVisible: () => true, // 弹幕显示前的过滤器，返回 true 则可以发送
					visible: localArtDanmakuOption["visible"], // 弹幕层是否可见
					emitter: false, // 是否开启弹幕发射器
					maxLength: 50, // 弹幕输入框最大长度, 范围在[1 ~ 1000]
					lockTime: 3, // 输入框锁定时间，范围在[1 ~ 60]
					theme: utils.isThemeDark() ? "dark" : "light", // 弹幕主题，支持 dark 和 light，只在自定义挂载时生效
					// OPACITY: {}, // 不透明度配置项
					// FONT_SIZE: {}, // 弹幕字号配置项
					// MARGIN: {}, // 显示区域配置项
					// SPEED: {}, // 弹幕速度配置项
					// COLOR: [], // 颜色列表配置项

					// 手动发送弹幕前的过滤器，返回 true 则可以发送，可以做存库处理
					beforeEmit(danmu) {
						return new Promise((resolve) => {
							console.log(danmu);
							setTimeout(() => {
								resolve(true);
							}, 1000);
						});
					},
				}),
				artplayerPluginM4SAudioSupport({
					url: option.audioUrl,
				}),
				artplayerPluginBilibiliCCSubTitle({
					cid: option.cid,
					aid: option.aid,
					ep_id: option.ep_id,
				}),
				artplayerPluginTopToolBar({
					aid: option.aid,
					cid: option.cid,
					bvid: option.bvid!,
					title: option.videoTitle,
					showWrap: true,
					showTitle: true,
					showOnlineTotal: true,
				}),
			],
		};
		if (option.isFlv) {
			// flv格式
			// 清空画质信息
			artOption.quality = [];
			// 固定播放格式
			artOption.type = "flv";
			if (option.flvInfo.length === 0) {
				BilibiliLogUtils.failToast("视频播放地址为空，无法播放！");
				return;
			}
			artOption.url = option.flvInfo[0].url;
			// 使用flvjs
			artOption.customType = {
				flv: (video, url, art) => {
					// 这里里面尽量不要用外面的变量
					// 要用的话也是用this.currentOption
					if (!flvjs.isSupported()) {
						art.notice.show = "Unsupported playback format: flv";
						return;
					}
					this.flvPlayer();
					// let flvInfo =
					// 	this.currentOption.flvInfo[this.currentOptionFlvInfoIndex];
					// if (flvInfo == null) {
					// 	console.error("没有flv播放信息了");
					// 	return;
					// }
					// this.flvPlayer(flvInfo);
				},
			};
		} else {
			artOption.type = "mp4";
		}

		if (typeof option.url === "string") {
			artOption.url = option.url;
		} else if (typeof option.url === "function") {
			let url = await option.url();
			artOption.url = url;
		}
		this.art = new Artplayer(artOption);

		this.art.on(
			// @ts-ignore
			"artplayerPluginDanmuku:config",
			(option: ArtPlayerDanmakuOption) => {
				Object.keys(localArtDanmakuOption).forEach((key) => {
					if (Reflect.has(option, key)) {
						let value = Reflect.get(option, key);
						Reflect.set(localArtDanmakuOption, key, value);
					}
				});
				GM_setValue(localArtDanmakuOption_KEY, localArtDanmakuOption);
			}
		);
		return this.art;
	},
	/**
	 * 更新新的播放信息
	 * @param option
	 */
	async update(art: Artplayer, option: BilibiliBangumiArtPlayerOption) {
		this.resetEnv();
		this.currentOption = option;
		let videoUrl = "";
		if (typeof option.url === "string") {
			videoUrl = option.url;
		} else if (typeof option.url === "function") {
			let url = await option.url();
			videoUrl = url;
		}
		log.info([`更新新的播放信息`, option]);
		// 暂停视频
		art.pause();
		log.info(`暂停视频`);
		// 重置播放进度
		art.currentTime = 0;
		log.info(`重置播放进度`);
		// 更新视频地址
		art.url = videoUrl;
		log.info(`更新视频地址`);
		// 更新画质地址
		art.quality = option.quality;
		log.info(`更新画质地址`);
		// 更新音频
		art.plugins["plugin-bilibili-m4sAudio"].update(option.audioUrl);
		log.info([`更新音频`, option.audioUrl]);
		// 更新字幕
		const subTitleOption = {
			cid: option.cid,
			aid: option.aid,
			ep_id: option.ep_id,
		};
		art.plugins["plugin-bilibili-cc-subtitle"].update(subTitleOption);
		log.info([`更新字幕`, subTitleOption]);
		// 更新顶部标题
		// 更新顶部在线观看人数来源
		const topToolBarOption = {
			aid: option.aid,
			cid: option.cid,
			bvid: option.bvid!,
			title: option.videoTitle,
			showWrap: true,
			showTitle: true,
			showOnlineTotal: true,
		};
		art.plugins["plugin-bilibili-topToolBar"].update(topToolBarOption);
		log.info([`更新顶部标题`, topToolBarOption]);
		// 更新选集信息
		art.setting.update(GenerateArtPlayerEPSelectSetting(option));
		log.info([`更新选集信息`, option.epList]);
		// 播放
		art.play();
		log.info("播放");
	},
};
