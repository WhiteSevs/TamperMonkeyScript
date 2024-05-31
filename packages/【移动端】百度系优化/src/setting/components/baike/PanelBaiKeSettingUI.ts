import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";

const PanelBaiKeSettingUI: PopsPanelContentConfig = {
	id: "baidu-panel-config-baike",
	title: "百科",
	headerTitle: "百度百科<br />baike.baidu.com<br />wapbaike.baidu.com",
	isDefault() {
		return BaiduRouter.isBaiKe();
	},
	scrollToDefaultView: true,
	forms: [
		{
			text: "劫持Box",
			type: "forms",
			forms: [
				UISwitch(
					"isBox",
					"baidu-baike-Box-isBox",
					true,
					void 0,
					"Box.isBox和Box.$isBox强制返回true"
				),
				UISwitch(
					"isLiteBox",
					"baidu-baike-Box-isLiteBox",
					false,
					void 0,
					"Box.isLiteBox和Box.$isLiteBox强制返回true"
				),
				UISwitch(
					"isInfoBox",
					"baidu-baike-Box-isInfoBox",
					false,
					void 0,
					"Box.isInfoBox和Box.$isInfoBox强制返回true"
				),
				UISwitch(
					"isIOS",
					"baidu-baike-Box-isIOS",
					false,
					void 0,
					"Box.isIOS和Box.$isIOS强制返回true"
				),
				UISwitch(
					"isAndroid",
					"baidu-baike-Box-isAndroid",
					false,
					void 0,
					"Box.isAndroid和Box.$isAndroid强制返回true"
				),
				UISwitch(
					"android.invokeApp",
					"baidu-baike-Box-android.invokeApp",
					true,
					void 0,
					"Box.android.invokeApp()置空"
				),
				UISwitch(
					"android.invokeLiteApp",
					"baidu-baike-Box-android.invokeLiteApp",
					true,
					void 0,
					"Box.android.invokeLiteApp()置空"
				),
				UISwitch(
					"ios.invokeApp",
					"baidu-baike-Box-ios.invokeApp",
					true,
					void 0,
					"Box.ios.invokeApp()置空"
				),
			],
		},
		{
			text: "他说(/tashuo)",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】底部广告",
					"baidu_baike_tashuo_remove_bottom_ad",
					true
				),
			],
		},
	],
};

export { PanelBaiKeSettingUI };
