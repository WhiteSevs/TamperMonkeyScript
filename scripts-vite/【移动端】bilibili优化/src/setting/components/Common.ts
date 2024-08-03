import { DOMUtils, log, utils } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { UITextArea } from "../common-components/ui-textarea";
import { PopsPanel } from "../setting";
import { UISelect } from "../common-components/ui-select";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISlider } from "../common-components/ui-slider";
import { BilibiliDanmaku, BilibiliDanmakuFilter } from "@/main/BilibiliDanmaku";
import { BilibiliPlayer } from "@/main/BilibiliPlayer";

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
									"修复点击UP主正确进入空间",
									"bili-repairEnterUserHome",
									true,
									void 0,
									"可以修复点击UP主进入个人空间但是跳转404的问题"
								),
								UISwitch(
									"新标签页打开",
									"bili-go-to-url-blank",
									false,
									void 0,
									"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"
								),
								UISelect(
									"倍速",
									"bili-video-speed",
									1,
									[
										{
											text: "2.0X",
											value: 2,
										},
										{
											text: "1.5X",
											value: 1.5,
										},
										{
											text: "1.25X",
											value: 1.25,
										},
										{
											text: "1.0X",
											value: 1,
										},
										{
											text: "0.75X",
											value: 0.75,
										},
										{
											text: "0.25X",
											value: 0.25,
										},
									],
									(_, isSelectValue) => {
										BilibiliPlayer.setVideoSpeed(isSelectValue);
									}
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "弹幕",
					forms: [
						{
							text: "弹幕设置",
							type: "forms",
							forms: [
								UISlider(
									"不透明度",
									"bili-danmaku-opacity",
									0.75,
									0.2,
									1,
									0.01,
									(event, value) => {
										BilibiliDanmaku.setOpacity(value);
									},
									(value) => {
										return `${parseInt((value * 100).toString())}%`;
									}
								),
								UISelect(
									"显示区域",
									"bili-danmaku-area",
									25,
									[
										{
											text: "1/4屏",
											value: 25,
										},
										{
											text: "半屏",
											value: 50,
										},
										{
											text: "3/4屏",
											value: 75,
										},
										{
											text: "全屏",
											value: 100,
										},
									],
									(event, isSelectValue, isSelectText) => {
										BilibiliDanmaku.setArea(isSelectValue);
									}
								),
								UISlider(
									"字体大小",
									"bili-danmaku-fontSize",
									0.7,
									0.2,
									2,
									0.1,
									(event, value) => {
										BilibiliDanmaku.setFontSize(value);
									},
									(value) => {
										return `${parseInt((value * 100).toString())}%`;
									}
								),
								UISelect(
									"弹幕速度",
									"bili-danmaku-duration",
									6,
									[
										{
											text: "极慢",
											value: 10,
										},
										{
											text: "较慢",
											value: 8,
										},
										{
											text: "适中",
											value: 6,
										},
										{
											text: "较快",
											value: 4,
										},
										{
											text: "极快",
											value: 2,
										},
									],
									(event, isSelectValue, isSelectText) => {
										BilibiliDanmaku.setDuration(isSelectValue);
									}
								),
								UISwitch(
									"弹幕随屏幕缩放",
									"bili-danmaku-fullScreenSync",
									false,
									(event, value) => {
										BilibiliDanmaku.setFullScreenSync(value);
									}
								),
								UISwitch(
									"弹幕速度同步播放倍数",
									"bili-danmaku-speedSync",
									true,
									(event, value) => {
										BilibiliDanmaku.setSpeedSync(value);
									}
								),
							],
						},
						{
							type: "forms",
							text: "",
							forms: [
								UISelect(
									"弹幕字体",
									"bili-danmaku-fontFamily",
									(() => {
										let findItem = BilibiliDanmaku.fontFamily.find(
											(item) => item.text === "黑体"
										)!;
										return findItem.value;
									})(),
									BilibiliDanmaku.fontFamily,
									(event, isSelectValue, isSelectText) => {
										BilibiliDanmaku.setFontFamily(isSelectValue);
									}
								),
								UISwitch("粗体", "bili-danmaku-bold", true, (event, value) => {
									BilibiliDanmaku.setBold(value);
								}),
							],
						},
						{
							text: "按类型屏蔽",
							type: "forms",
							forms: [
								UISwitch("滚动", "bili-danmaku-filter-type-roll", false),
								UISwitch("顶部", "bili-danmaku-filter-type-top", false),
								UISwitch("底部", "bili-danmaku-filter-type-bottom", false),
								UISwitch("彩色", "bili-danmaku-filter-type-colour", false),
								UISwitch("重复", "bili-danmaku-filter-type-repeat", false),
								// UISwitch("高级", "bili-danmaku-filter-type-senior", false),
								UISwitch(
									"屏蔽词",
									"bili-danmaku-filter",
									false,
									void 0,
									"开启后可使用↓自定义的规则过滤弹幕"
								),
								{
									type: "own",
									getLiElementCallBack(liElement) {
										let textareaDiv = DOMUtils.createElement(
											"div",
											{
												className: "pops-panel-textarea",
												innerHTML: `
												<textarea placeholder="请输入规则，每行一个，可正则" style="height:200px;"></textarea>`,
											},
											{
												style: "width: 100%;",
											}
										);
										let $textarea =
											textareaDiv.querySelector<HTMLTextAreaElement>(
												"textarea"
											)!;
										$textarea.value = BilibiliDanmakuFilter.getValue();
										DOMUtils.on(
											$textarea,
											["input", "propertychange"],
											void 0,
											utils.debounce(function (event) {
												BilibiliDanmakuFilter.setValue($textarea.value);
											}, 200)
										);
										liElement.appendChild(textareaDiv);
										return liElement;
									},
								},
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
			],
		},
		{
			text: "",
			type: "forms",
			forms: [
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
