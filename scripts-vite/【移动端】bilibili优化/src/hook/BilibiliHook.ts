import { OriginPrototype, log, utils } from "@/env";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { Vue2Context } from "@whitesev/utils/dist/types/src/Utils";
import { unsafeWindow } from "ViteGM";

const BilibiliHook = {
	$isHook: {
		windowPlayerAgent: false,
		hookWebpackJsonp_openApp: false,
		overRideLaunchAppBtn_Vue_openApp: false,
	},
	$data: {
		setTimeout: <(string | RegExp)[]>[],
	},
	/**
	 * 劫持webpack
	 * @param webpackName 当前全局变量的webpack名
	 * @param mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
	 * @param checkCallBack 如果mainCoreData匹配上，则调用此回调函数
	 */
	windowWebPack(
		webpackName = "webpackJsonp",
		mainCoreData: string[] | number[],
		checkCallBack: (arg: any) => void
	) {
		let originObject = void 0;
		OriginPrototype.Object.defineProperty(unsafeWindow, webpackName, {
			get() {
				return originObject;
			},
			set(newValue) {
				log.success("成功劫持webpack，当前webpack名：" + webpackName);
				originObject = newValue;
				const originPush = (originObject as any).push;
				(originObject as any).push = function (
					...args: { [x: string]: (..._args: any[]) => any }[][]
				) {
					let _mainCoreData = args[0][0] as any;
					if (
						mainCoreData == _mainCoreData ||
						(Array.isArray(mainCoreData) &&
							Array.isArray(_mainCoreData) &&
							JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData))
					) {
						Object.keys(args[0][1]).forEach((keyName) => {
							let originSwitchFunc = args[0][1][keyName];
							args[0][1][keyName] = function (..._args: any[]) {
								let result = originSwitchFunc.call(this, ..._args);
								_args[0] = checkCallBack(_args[0]);
								return result;
							};
						});
					}
					return originPush.call(this, ...args);
				};
			},
		});
	},
	/**
	 * window.PlayerAgent
	 */
	windowPlayerAgent() {
		if (this.$isHook.windowPlayerAgent) {
			return;
		}
		this.$isHook.windowPlayerAgent = true;
		let PlayerAgent: any = void 0;
		OriginPrototype.Object.defineProperty(unsafeWindow, "PlayerAgent", {
			get() {
				return new Proxy(
					{},
					{
						get(target, key) {
							if (key === "openApp") {
								return function (this: any, ...args: any) {
									let data: any = args[0];
									log.info(["调用PlayerAgent.openApp", data]);
									if (data["event"] === "fullScreen") {
										/* 点击视频的全屏，因为被拦截，没会导致没有反应，影响体验，手动再次触发一次 */
										let $wideScreen = document.querySelector<HTMLDivElement>(
											".mplayer-btn-widescreen"
										);
										if ($wideScreen) {
											$wideScreen.click();
										} else {
											log.warn(
												"主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素"
											);
										}
									}
								};
							} else {
								return PlayerAgent[key];
							}
						},
					}
				);
			},
			set(v) {
				PlayerAgent = v;
			},
		});
	},
	/**
	 * 劫持全局setTimeout
	 * + 视频页面/video
	 *
	 * window.setTimeout
	 * @param matchStr 需要进行匹配的函数字符串
	 */
	setTimeout(matchStr: string | RegExp) {
		this.$data.setTimeout.push(matchStr);
		if (this.$data.setTimeout.length > 1) {
			log.info("window.setTimeout hook新增劫持判断参数：" + matchStr);
			return;
		}
		(unsafeWindow as any).setTimeout = function (...args: any[]): any {
			let callBackString = args[0].toString();
			if (callBackString.match(matchStr)) {
				log.success(["劫持setTimeout的函数", callBackString]);
				return;
			}
			// @ts-ignore
			return OriginPrototype.setTimeout.apply(this, args);
		};
	},
	/**
	 * 覆盖元素.launch-app-btn上的openApp
	 *
	 * 页面上有很多
	 */
	overRideLaunchAppBtn_Vue_openApp() {
		if (this.$isHook.overRideLaunchAppBtn_Vue_openApp) {
			return;
		}
		this.$isHook.overRideLaunchAppBtn_Vue_openApp = true;
		function overrideOpenApp(vueObj: Vue2Context) {
			if (typeof vueObj.openApp !== "function") {
				/* openApp函数不存在 */
				return;
			}
			let openAppStr = vueObj.openApp.toString();
			if (openAppStr.includes("阻止唤醒App")) {
				/* 已覆盖过 */
				return;
			}
			vueObj.openApp = function (...args: any[]) {
				log.success(["openApp：阻止唤醒App", args]);
			};
		}
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
				attributes: true,
			},
			callback() {
				document
					.querySelectorAll<HTMLDivElement>(".launch-app-btn")
					.forEach(($launchAppBtn) => {
						let vueObj = BilibiliUtils.getVue($launchAppBtn);
						if (!vueObj) {
							/* 不存在__vue__属性 */
							return;
						}
						overrideOpenApp(vueObj);
						if (vueObj.$children && vueObj.$children.length) {
							vueObj.$children.forEach(($child) => {
								overrideOpenApp($child);
							});
						}
					});
			},
		});
	},
};

export { BilibiliHook };
