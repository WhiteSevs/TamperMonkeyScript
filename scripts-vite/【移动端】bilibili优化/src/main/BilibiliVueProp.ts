import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { Vue2Context } from "@whitesev/utils/dist/types/src/Utils";
import { VueUtils } from "@/utils/VueUtils";
import { BilibiliHead } from "./head/BilibiliHead";

export const BilibiliVueProp = {
	init() {
		PopsPanel.execMenu("bili-setLogin", () => {
			this.setLogin();
		});
		PopsPanel.execMenu("bili-setIsClient", () => {
			this.setIsClient();
		});
		PopsPanel.execMenu("bili-setTinyApp", () => {
			this.setTinyApp();
			DOMUtils.ready(() => {
				BilibiliHead.reconfigurationTinyAppSettingButton().then(() => {
					PopsPanel.execMenu("bili-beautifyTopNavBar", () => {
						BilibiliHead.beautifyTopNavBar();
					});
				});
			});
		});
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
				msg: "设置参数 $store.state.common.noCallApp",
				check(vueIns: Vue2Context) {
					return typeof vueIns?.$store?.state?.common?.noCallApp === "boolean";
				},
				set(vueIns: Vue2Context) {
					log.success("成功设置参数 $store.state.common.noCallApp=true");
					vueIns.$store.state.common.noCallApp = true;
				},
			},
			{
				msg: "设置参数 $store.state.common.userInfo.isLogin",
				check(vueObj: Vue2Context) {
					return (
						typeof vueObj?.$store?.state?.common?.userInfo?.isLogin ===
						"boolean"
					);
				},
				set(vueObj: Vue2Context) {
					log.success("成功设置参数 $store.state.common.userInfo.isLogin=true");
					vueObj.$store.state.common.userInfo.isLogin = true;
				},
			},
			{
				msg: "设置参数 $store.state.loginInfo.isLogin",
				check(vueObj: Vue2Context) {
					return typeof vueObj?.$store?.state?.loginInfo?.isLogin === "boolean";
				},
				set(vueObj: Vue2Context) {
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
				check(vueIns: Vue2Context) {
					return (
						typeof typeof vueIns?.$store?.state?.video?.isClient === "boolean"
					);
				},
				set(vueIns: Vue2Context) {
					log.success("成功设置参数 $store.state.video.isClient=true");
					vueIns.$store.state.video.isClient = true;
				},
			},
			{
				msg: "设置参数 $store.state.opus.isClient=true",
				check(vueObj: Vue2Context) {
					return typeof vueObj?.$store?.state?.opus?.isClient === "boolean";
				},
				set(vueObj: Vue2Context) {
					log.success("成功设置参数 $store.state.opus.isClient");
					vueObj.$store.state.opus.isClient = true;
				},
			},
			{
				msg: "设置参数 $store.state.playlist.isClient",
				check(vueObj: Vue2Context) {
					return typeof vueObj?.$store?.state?.playlist?.isClient === "boolean";
				},
				set(vueObj: Vue2Context) {
					log.success("成功设置参数 $store.state.playlist.isClient=true");
					vueObj.$store.state.playlist.isClient = true;
				},
			},
			{
				msg: "设置参数 $store.state.ver.bili",
				check(vueObj: Vue2Context) {
					return typeof vueObj?.$store?.state?.ver?.bili === "boolean";
				},
				set(vueObj: Vue2Context) {
					log.success("成功设置参数 $store.state.ver.bili=true");
					vueObj.$store.state.ver.bili = true;
				},
			},
			{
				msg: "设置参数 $store.state.ver.biliVer",
				check(vueObj: Vue2Context) {
					return typeof vueObj?.$store?.state?.ver?.biliVer === "number";
				},
				set(vueObj: Vue2Context) {
					log.success("成功设置参数 $store.state.ver.biliVer=2333333");
					vueObj.$store.state.ver.biliVer = 2333333;
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
				},
			},
		]);
	},
};
