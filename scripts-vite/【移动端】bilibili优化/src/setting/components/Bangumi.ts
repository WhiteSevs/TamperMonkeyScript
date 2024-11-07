import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISelect } from "../common-components/ui-select";
import { BilibiliCDNProxy } from "@/api/BilibiliCDNProxy";
import { UIInput } from "../common-components/ui-input";
import { UISlider } from "../common-components/ui-slider";

const SettingUIBangumi: PopsPanelContentConfig = {
	id: "panel-bangumi",
	title: "番剧",
	isDefault() {
		return BilibiliRouter.isBangumi();
	},
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "功能",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"固定缩放倍率",
									"bili-bangumi-initialScale",
									true,
									void 0,
									""
								),
							],
						},
					],
				},
				{
					text: "ArtPlayer播放器",
					type: "deepMenu",
					forms: [
						{
							text: "控件设置",
							type: "forms",
							forms: [
								UISlider(
									"controls左右边距",
									"bili-bangumi-artplayer-controlsPadding-left-right",
									0,
									0,
									50,
									void 0,
									(value) => {
										return value + "px";
									},
									"可用于全屏横屏适配屏幕",
									1
								),
							],
						},
						{
							text: "插件",
							type: "forms",
							forms: [
								UISwitch(
									"弹幕",
									"artplayer-plugin-bangumi-danmaku-enable",
									false,
									void 0,
									"哔哩哔哩 (゜-゜)つロ 干杯~"
								),
								UISwitch(
									"Dash Audio Support",
									"artplayer-plugin-bangumi-m4sAudioSupport-enable",
									true,
									void 0,
									"视频类型为dash时，该插件可支持播放音频"
								),
								UISwitch(
									"选集",
									"artplayer-plugin-bangumi-epChoose-enable",
									true,
									void 0,
									"当视频播放完毕后会自动连播"
								),
								UISwitch(
									"CC字幕",
									"artplayer-plugin-bangumi-cc-subtitle-enable",
									true,
									void 0,
									"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"
								),
								UISwitch(
									"顶部工具栏",
									"artplayer-plugin-bangumi-toptoolbar-enable",
									true,
									void 0,
									"显示视频标题和当前观看人数"
								),
								UISwitch(
									"空降助手",
									"artplayer-plugin-bangumi-airborneHelper-enable",
									false,
									void 0,
									"如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过"
								),
							],
						},
						{
							text: "解除区域限制",
							type: "forms",
							forms: [
								UISwitch(
									"解锁番剧限制",
									"bili-bangumi-unlockAreaLimit",
									false,
									void 0,
									"使用户可以观看区域外版权番剧"
								),
								UISwitch(
									"生成简中字幕",
									"bili-bangumi-generateSimpleChineseSubtitle",
									false,
									void 0,
									"根据繁体字幕自动生成简体中文字幕"
								),
							],
						},
						{
							text: "加速CDN设置",
							type: "forms",
							forms: [
								UISelect(
									"UPOS服务器设置",
									"bili-bangumi-uposServerSelect",
									"",
									BilibiliCDNProxy.getUposCDNServerList().map((item) => {
										return {
											text: item.name,
											value: item.host,
										};
									}),
									void 0,
									"设置解锁番剧的服务器，可加快视频加载速度"
								),
								UISwitch(
									"作用于Audio上",
									"bili-bangumi-uposServerSelect-applyAudio",
									false,
									void 0,
									"把m4s类型的audio也进行upos替换"
								),
							],
						},
						{
							text: "<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>",
							type: "forms",
							forms: [
								UIInput(
									"中国大陆",
									"bili-bangumi-proxyApiServer-default",
									"",
									"用于请求播放地址的代理",
									void 0,
									"bilibili优化.example.com"
								),
								UIInput(
									"香港",
									"bili-bangumi-proxyApiServer-hk",
									"",
									"用于请求播放地址的代理",
									void 0,
									"bilibili优化.example.com"
								),
								UIInput(
									"台湾",
									"bili-bangumi-proxyApiServer-tw",
									"",
									"用于请求播放地址的代理",
									void 0,
									"bilibili优化.example.com"
								),
								UIInput(
									"泰国/东南亚",
									"bili-bangumi-proxyApiServer-tha-or-sea",
									"",
									"用于请求播放地址的代理",
									void 0,
									"bilibili优化.example.com"
								),
							],
						},
					],
				},
				{
					text: "覆盖点击事件",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"【选集】",
									"bili-bangumi-cover-clicl-event-chooseEp",
									true,
									void 0,
									"让【选集】的视频列表可点击跳转"
								),
								UISwitch(
									"【其它】",
									"bili-bangumi-cover-clicl-event-other",
									true,
									void 0,
									"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"
								),
								UISwitch(
									"【更多推荐】",
									"bili-bangumi-cover-clicl-event-recommend",
									true,
									void 0,
									"让【更多推荐】的视频列表可点击跳转"
								),
							],
						},
					],
				},
				{
					text: "劫持/拦截",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"阻止调用App",
									"bili-bangumi-hook-callApp",
									true,
									void 0,
									""
								),
							],
						},
					],
				},
			],
		},
	],
};

export { SettingUIBangumi };
