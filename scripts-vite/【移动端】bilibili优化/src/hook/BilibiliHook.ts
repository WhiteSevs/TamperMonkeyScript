import { OriginPrototype, log, utils } from "@/env";
import { VueUtils } from "@/utils/VueUtils";
import { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { unsafeWindow } from "ViteGM";

const BilibiliHook = {
	$isHook: {
		windowPlayerAgent: false,
		hookWebpackJsonp_openApp: false,
		overRideLaunchAppBtn_Vue_openApp: false,
		overRideBiliOpenApp: false,
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
				log.success("劫持setTimeout的函数", callBackString);
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
		function overrideOpenApp(vueObj: Vue2Instance) {
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
				log.success("openApp：阻止唤醒App", args);
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
						let vueObj = VueUtils.getVue($launchAppBtn);
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
	/**
	 * 覆盖元素bili-open-app上的opener.open
	 *
	 * 页面上有很多
	 */
	overRideBiliOpenApp() {
		if (this.$isHook.overRideBiliOpenApp) {
			return;
		}
		this.$isHook.overRideBiliOpenApp = true;
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
				attributes: true,
			},
			callback() {
				document
					.querySelectorAll<HTMLDivElement>("bili-open-app")
					.forEach(($biliOpenApp) => {
						if ($biliOpenApp.hasAttribute("data-inject-opener-open")) {
							return;
						}
						let opener = Reflect.get($biliOpenApp, "opener");
						if (opener == null) {
							return;
						}
						let originOpen = opener?.open;
						if (typeof originOpen === "function") {
							Reflect.set(opener, "open", (config: any) => {
								log.success(
									`拦截bili-open-app.open跳转: ${JSON.stringify(config)}`
								);
							});
							$biliOpenApp.setAttribute("data-inject-opener-open", "true");
						}
					});
			},
		});
	},
};

export { BilibiliHook };
