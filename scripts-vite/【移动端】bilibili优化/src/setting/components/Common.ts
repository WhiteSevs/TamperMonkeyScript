import { log } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { UITextArea } from "../common-components/ui-textarea";
import { UISelect } from "../common-components/ui-select";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIInput } from "../common-components/ui-input";
import { BilibiliQrCodeLogin } from "@/account/BilibiliQrCodeLogin";
import { UIButton } from "../common-components/ui-button";
import { BilibiliComponentDetectionRule } from "@/main/BilibiliComponentDetectionRule";

const SettingUICommon: PopsPanelContentConfig = {
	id: "panel-common",
	title: "通用",
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
									"监听路由-重载所有功能",
									"bili-listenRouterChange",
									true,
									void 0,
									"用于处理页面跳转(本页)时功能不生效问题"
								),
								UISwitch(
									"修复VueRouter跳转404问题",
									"bili-repairVueRouter404",
									true,
									void 0,
									"例如：点击UP主正确进入空间"
								),
								UISwitch(
									"新标签页打开",
									"bili-go-to-url-blank",
									false,
									void 0,
									"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"
								),
								UISwitch(
									"允许复制",
									"bili-allowCopy",
									true,
									void 0,
									"一般用于处理楼层的回复弹窗内无法选中复制问题"
								),
							],
						},
					],
				},
				{
					text: "变量设置",
					type: "deepMenu",
					forms: [
						{
							text: "",
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
									"覆盖.launch-app-btn openApp",
									"bili-overrideLaunchAppBtn_Vue_openApp",
									true,
									void 0,
									"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"
								),
								UISwitch(
									"覆盖bili-open-app opener.open",
									"bili-cover-bili-open-app-open",
									true,
									void 0,
									"覆盖bili-open-app元素上的opener.open函数，可阻止点击唤醒/下载App"
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
				},
				{
					type: "deepMenu",
					text: "成分检测",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"启用",
									"bili-componentDetection",
									false,
									void 0,
									"启用后可检测用户的成分信息"
								),
								UIButton(
									"自定义规则",
									"检测用户成分的规则",
									"管理",
									void 0,
									false,
									false,
									"primary",
									() => {
										BilibiliComponentDetectionRule.showView();
									}
								),
							],
						},
						{
							type: "forms",
							text: "",
							forms: [
								UIButton(
									"数据导入",
									"导入自定义规则数据",
									"导入",
									void 0,
									false,
									false,
									"primary",
									() => {
										BilibiliComponentDetectionRule.importRule();
									}
								),
								UIButton(
									"数据导出",
									"导出自定义规则数据",
									"导出",
									void 0,
									false,
									false,
									"primary",
									() => {
										BilibiliComponentDetectionRule.exportRule("成分检测.json");
									}
								),
							],
						},
					],
				},
			],
		},
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "数据配置",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UIInput(
									"access_token",
									"bili-head-recommend-access_token",
									BilibiliQrCodeLogin.getAccessToken(),
									"填入access_token，可用于获取推荐视频数据、番剧搜索、番剧播放等",
									(event, value, valueAsNumber) => {
										BilibiliQrCodeLogin.setAccessTokenInfo({
											access_token: value,
											expireAt: BilibiliQrCodeLogin.generateExpireAt(),
										});
									},
									void 0,
									false,
									true
								),
							],
						},
					],
				},
				{
					text: "Toast配置",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISelect(
									"Toast位置",
									"qmsg-config-position",
									"bottom",
									[
										{
											value: "topleft",
											text: "左上角",
										},
										{
											value: "top",
											text: "顶部",
										},
										{
											value: "topright",
											text: "右上角",
										},
										{
											value: "left",
											text: "左边",
										},
										{
											value: "center",
											text: "中间",
										},
										{
											value: "right",
											text: "右边",
										},
										{
											value: "bottomleft",
											text: "左下角",
										},
										{
											value: "bottom",
											text: "底部",
										},
										{
											value: "bottomright",
											text: "右下角",
										},
									],
									(event, isSelectValue, isSelectText) => {
										log.info("设置当前Qmsg弹出位置" + isSelectText);
									},
									"Toast显示在页面九宫格的位置"
								),
								UISelect(
									"最多显示的数量",
									"qmsg-config-maxnums",
									3,
									[
										{
											value: 1,
											text: "1",
										},
										{
											value: 2,
											text: "2",
										},
										{
											value: 3,
											text: "3",
										},
										{
											value: 4,
											text: "4",
										},
										{
											value: 5,
											text: "5",
										},
									],
									void 0,
									"限制Toast显示的数量"
								),
								UISwitch(
									"逆序弹出",
									"qmsg-config-showreverse",
									false,
									void 0,
									"修改Toast弹出的顺序"
								),
							],
						},
					],
				},
				{
					text: "Cookie配置",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"httpx-use-cookie-enable",
									false,
									void 0,
									"启用后，将根据下面的配置进行添加cookie"
								),
								UISwitch(
									"使用document.cookie",
									"httpx-use-document-cookie",
									false,
									void 0,
									"自动根据请求的域名来获取对应的cookie"
								),
								UITextArea(
									"bilibili.com",
									"httpx-cookie-bilibili.com",
									"",
									void 0,
									void 0,
									"Cookie格式：xxx=xxxx;xxx=xxxx"
								),
							],
						},
					],
				},
			],
		},
	],
};

export { SettingUICommon };
