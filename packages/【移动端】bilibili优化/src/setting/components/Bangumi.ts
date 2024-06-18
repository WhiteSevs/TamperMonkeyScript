import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";

const SettingUIBangumi: PopsPanelContentConfig = {
	id: "panel-bangumi",
	title: "番剧",
	isDefault() {
		return BilibiliRouter.isBangumi();
	},
	forms: [
		{
			text: "变量设置",
			type: "forms",
			forms: [
				UISwitch(
					"pay",
					"bili-bangumi-setPay",
					true,
					void 0,
					"$store.state.userStat.pay=1<br>$store.state.mediaInfo.user_status.pay=1"
				),
			],
		},
		{
			text: "覆盖点击事件",
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
		{
			text: "网络拦截",
			type: "forms",
			forms: [
				UISwitch(
					"解锁清晰度",
					"bili-bangumi-xhr-unlockQuality",
					true,
					void 0,
					"最高清晰度为720P"
				),
			],
		},
		{
			text: "劫持/拦截",
			type: "forms",
			forms: [
				UISwitch("阻止调用App", "bili-bangumi-hook-callApp", true, void 0, ""),
			],
		},
	],
};

export { SettingUIBangumi };
