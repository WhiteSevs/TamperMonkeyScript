import { UISwitch } from "../common-components/ui-switch";

const SettingUICommon: PopsPanelContentConfig = {
	id: "panel-common",
	title: "通用",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"监听路由改变",
					"bili-listenRouterChange",
					true,
					void 0,
					"用于处理页面跳转时功能不生效问题"
				),
				UISwitch(
					"新标签页打开",
					"bili-go-to-url-blank",
					false,
					void 0,
					"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"
				),
			],
		},
		{
			text: "变量设置",
			type: "forms",
			forms: [
				UISwitch(
					"isLogin",
					"bili-setLogin",
					true,
					void 0,
					"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"
				),
				UISwitch(
					"isClient",
					"bili-setIsClient",
					true,
					void 0,
					"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"
				),
				UISwitch(
					"tinyApp",
					"bili-setTinyApp",
					true,
					void 0,
					"$store.state.common.tinyApp=true"
				),
			],
		},
		{
			text: "劫持/拦截",
			type: "forms",
			forms: [
				UISwitch(
					"覆盖.launch-app-btn openApp",
					"bili-overrideLaunchAppBtn_Vue_openApp",
					true,
					void 0,
					"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"
				),
				UISwitch(
					"劫持setTimeout-autoOpenApp",
					"bili-hookSetTimeout_autoOpenApp",
					true,
					void 0,
					"阻止自动调用App"
				),
			],
		},
	],
};

export { SettingUICommon };
