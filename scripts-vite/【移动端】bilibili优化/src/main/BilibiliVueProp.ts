import { addStyle, DOMUtils, log, utils } from "@/env";
import { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { VueUtils } from "@components/utils/VueUtils";
import { BilibiliHead } from "./head/BilibiliHead";
import { BilibiliRouter } from "@/router/BilibiliRouter";
import { Panel } from "@components/setting/panel";

export const BilibiliVueProp = {
	init() {
		Panel.execMenu("bili-noCallApp", () => {
			this.noCallApp();
		});
		Panel.execMenu("bili-setLogin", () => {
			this.setLogin();
		});
		Panel.execMenu("bili-setIsClient", () => {
			this.setIsClient();
		});
		// Panel.execMenu("bili-setTinyApp", () => {
		// 	this.setTinyApp();
		// 	DOMUtils.ready(() => {
		// 		BilibiliHead.reconfigurationTinyAppSettingButton().then(() => {
		// 			Panel.execMenu("bili-beautifyTopNavBar", () => {
		// 				BilibiliHead.beautifyTopNavBar();
		// 			});
		// 		});
		// 	});
		// });
	},
	/**
	 * 禁止调用app
	 */
	noCallApp() {
		VueUtils.waitVuePropToSet("#app", [
			{
				msg: "设置参数 $store.state.common.noCallApp",
				check(vueIns: Vue2Instance) {
					return typeof vueIns?.$store?.state?.common?.noCallApp === "boolean";
				},
				set(vueIns: Vue2Instance) {
					log.success("成功设置参数 $store.state.common.noCallApp=true");
					vueIns.$store.state.common.noCallApp = true;
				},
			},
		]);
	},
	/**
	 * 设置登录
	 *
	 * + $store.state.common.noCallApp
	 * + $store.state.common.userInfo.isLogin
	 * + $store.state.loginInfo.isLogin
	 */
	setLogin() {
		let GM_Cookie = new utils.GM_Cookie();
		let cookie_DedeUserID = GM_Cookie.get("DedeUserID");
		if (cookie_DedeUserID != null) {
			log.info("Cookie DedeUserID已存在：", cookie_DedeUserID.value);
		} else {
			GM_Cookie.set(
				{
					name: "DedeUserID",
					value: "2333",
				},
				(error) => {
					if (error) {
						log.error(error);
					} else {
						log.success("Cookie成功设置DedeUserID=>2333");
					}
				}
			);
		}

		VueUtils.waitVuePropToSet("#app", [
			{
				msg: "设置参数 $store.state.common.userInfo.isLogin",
				check(vueObj: Vue2Instance) {
					return (
						typeof vueObj?.$store?.state?.common?.userInfo?.isLogin ===
						"boolean"
					);
				},
				set(vueObj: Vue2Instance) {
					log.success("成功设置参数 $store.state.common.userInfo.isLogin=true");
					vueObj.$store.state.common.userInfo.isLogin = true;
				},
			},
			{
				msg: "设置参数 $store.state.loginInfo.isLogin",
				check(vueObj: Vue2Instance) {
					return typeof vueObj?.$store?.state?.loginInfo?.isLogin === "boolean";
				},
				set(vueObj: Vue2Instance) {
					log.success("成功设置参数 $store.state.loginInfo.isLogin=true");
					vueObj.$store.state.loginInfo.isLogin = true;
				},
			},
		]);
	},
	/**
	 * 设置为客户端(不确定是否有用)
	 *
	 * + $store.state.video.isClient
	 * + $store.state.opus.isClient
	 * + $store.state.playlist.isClient
	 * + $store.state.ver.bili
	 * + $store.state.ver.biliVer 2333333
	 */
	setIsClient() {
		VueUtils.waitVuePropToSet("#app", [
			{
				msg: "设置参数 $store.state.video.isClient",
				check(vueIns: Vue2Instance) {
					return (
						typeof typeof vueIns?.$store?.state?.video?.isClient === "boolean"
					);
				},
				set(vueIns: Vue2Instance) {
					log.success("成功设置参数 $store.state.video.isClient=true");
					vueIns.$store.state.video.isClient = true;
				},
			},
			{
				msg: "设置参数 $store.state.opus.isClient=true",
				check(vueIns: Vue2Instance) {
					return typeof vueIns?.$store?.state?.opus?.isClient === "boolean";
				},
				set(vueIns: Vue2Instance) {
					log.success("成功设置参数 $store.state.opus.isClient");
					vueIns.$store.state.opus.isClient = true;
				},
			},
			{
				msg: "设置参数 $store.state.playlist.isClient",
				check(vueIns: Vue2Instance) {
					return typeof vueIns?.$store?.state?.playlist?.isClient === "boolean";
				},
				set(vueIns: Vue2Instance) {
					log.success("成功设置参数 $store.state.playlist.isClient=true");
					vueIns.$store.state.playlist.isClient = true;
				},
			},
			{
				msg: "设置参数 $store.state.ver.bili",
				check(vueIns: Vue2Instance) {
					return typeof vueIns?.$store?.state?.ver?.bili === "boolean";
				},
				set(vueIns: Vue2Instance) {
					log.success("成功设置参数 $store.state.ver.bili=true");
					vueIns.$store.state.ver.bili = true;
				},
			},
			{
				msg: "设置参数 $store.state.ver.biliVer",
				check(vueIns: Vue2Instance) {
					return typeof vueIns?.$store?.state?.ver?.biliVer === "number";
				},
				set(vueIns: Vue2Instance) {
					log.success("成功设置参数 $store.state.ver.biliVer=2333333");
					vueIns.$store.state.ver.biliVer = 2333333;
				},
			},
		]);
	},
	/**
	 * 设置为微应用(可以看评论且视频稿件变大)
	 *
	 * + __vue__.$store.state.common.tinyApp `true`
	 */
	setTinyApp() {
		VueUtils.waitVuePropToSet("#app", [
			{
				msg: "设置参数 $store.state.common.tinyApp",
				check(vueIns) {
					return typeof vueIns?.$store?.state?.common?.tinyApp === "boolean";
				},
				set(vueIns) {
					vueIns.$store.state.common.tinyApp = true;
					log.success("成功设置参数 $store.state.common.tinyApp=true");
					Panel.onceExec("bili-tinyApp-init-css", () => {
						// 开启tinyApp后会隐藏输入框
						addStyle(/*css*/ `
							.tiny-app .reply-input,.tiny-app .reply-item .info .name .right,.tiny-app .reply-item .info .toolbar,.tiny-app .sub-reply-input {
								display: block;
							}
						`);
					});
				},
			},
		]);
	},
};
