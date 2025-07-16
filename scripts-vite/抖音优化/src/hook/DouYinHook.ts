import { unsafeWindow } from "ViteGM";
import { DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { Hook } from "./Hook";
import { DouYinRouter } from "@/router/DouYinRouter";

export const DouYinHook = {
	$data: {
		hookElementAddEventListener: <
			((
				target: Element,
				eventName: string,
				callback: Function,
				option: boolean | AddEventListenerOptions | undefined
			) => Function | void)[]
		>[],
	},
	init() {
		Panel.onceExec("hookKeyboard", () => {
			DouYinHook.disableShortCut();
		});
		Panel.execMenu("dy-cookie-remove__ac__", () => {
			this.removeCookie();
		});
		if (DouYinRouter.isIndex()) {
			Panel.execMenuOnce("dy-video-disableDoubleClickLike", () => {
				DouYinHook.disableDoubleClickLike();
			});
		} else if (DouYinRouter.isLive()) {
			Panel.execMenuOnce("dy-live-disableDoubleClickLike", () => {
				DouYinHook.disableDoubleClickLike();
			});
		}
	},
	/**
	 * 移除环境检测
	 */
	removeEnvCheck() {
		log.info("移除环境检测");
		let originalSetInterval = unsafeWindow.setInterval as any;
		(unsafeWindow as any).setInterval = function (callback: any, time: any) {
			let funcStr = callback.toString().trim();
			if (funcStr.includes("debugger")) {
				log.success(["拦截→", [funcStr]]);
				return;
			}
			if (funcStr.includes("checkEXp")) {
				log.success(["拦截→", [funcStr]]);
				return;
			}
			return originalSetInterval.call(this, callback, time);
		};
	},
	/**
	 * 移除Cookie
	 */
	removeCookie() {
		let cookieHandler = new utils.GM_Cookie();
		let cookieNameList = ["__ac_signature", "__ac_referer", "__ac_nonce"];
		cookieNameList.forEach((cookieName) => {
			cookieHandler.delete(
				{
					name: cookieName,
					firstPartyDomain: "",
				},
				(error) => {
					if (error) {
						log.error(`移除Cookie失败 ==> ${cookieName}`, error);
					} else {
						log.success(`移除Cookie成功 ==> ${cookieName}`);
					}
				}
			);
		});
	},
	/**
	 * 禁用快捷键
	 */
	disableShortCut() {
		type KeyboardOtherCodeName = "ctrl" | "alt" | "meta" | "shift";
		Hook.document_addEventListener((target, eventName, listener, option) => {
			if (
				["keydown", "keypress", "keyup"].includes(eventName) &&
				typeof listener === "function"
			) {
				return function (this: Document, ...eventArgs: any[]) {
					let event = eventArgs[0] as KeyboardEvent;
					/** 键名 */
					let key = event.key;
					/** 键值字符串 */
					let code = event.code;
					/** 键值 */
					let keyCodeValue = event.charCode || event.keyCode || event.which;
					/** 组合键列表 */
					let otherCodeList: KeyboardOtherCodeName[] = [];
					if (event.ctrlKey) {
						otherCodeList.push("ctrl");
					}
					if (event.altKey) {
						otherCodeList.push("alt");
					}
					if (event.metaKey) {
						otherCodeList.push("meta");
					}
					if (event.shiftKey) {
						otherCodeList.push("shift");
					}
					let keyboardConfigList: {
						enableKey: string;
						code: string[];
						otherCodeList?: KeyboardOtherCodeName[];
					}[] = [
						{
							enableKey: "dy-keyboard-hook-likeOrDislike",
							code: ["KeyZ"],
						},
						{
							enableKey: "dy-keyboard-hook-comment",
							code: ["KeyX"],
						},
						{
							enableKey: "dy-keyboard-hook-danmaku-enable",
							code: ["KeyB"],
						},
						{
							enableKey: "dy-keyboard-hook-collect-enable",
							code: ["KeyC"],
						},
						{
							enableKey: "dy-keyboard-hook-copyShareLink",
							code: ["KeyV"],
						},
						{
							enableKey: "dy-keyboard-hook-clearScreen",
							code: ["KeyJ"],
						},
						{
							enableKey: "dy-keyboard-hook-automaticBroadcast",
							code: ["KeyK"],
						},
						{
							enableKey: "dy-keyboard-hook-videoInfo",
							code: ["KeyI"],
						},
						{
							enableKey: "dy-keyboard-hook-notInterested",
							code: ["KeyR"],
						},
						{
							enableKey: "dy-keyboard-hook-enterAuthorHomePage",
							code: ["KeyF"],
						},
						{
							enableKey: "dy-keyboard-hook-follow",
							code: ["KeyG"],
						},
						{
							enableKey: "dy-keyboard-hook-search",
							code: ["KeyF"],
							otherCodeList: ["shift"],
						},
						{
							enableKey: "dy-keyboard-hook-closeTheCurrentPageWithOneClick",
							code: ["KeyQ"],
							otherCodeList: ["shift"],
						},
						{
							enableKey: "dy-keyboard-hook-pageUpAndDown",
							code: ["ArrowUp", "ArrowDown"],
						},
						{
							enableKey: "dy-keyboard-hook-fastForwardAndFastBack",
							code: ["ArrowLeft", "ArrowRight"],
						},
						{
							enableKey: "dy-keyboard-hook-pause",
							code: ["Space"],
						},
						{
							enableKey: "dy-keyboard-hook-fullScreenInsideThePage",
							code: ["KeyY"],
						},
						{
							enableKey: "dy-keyboard-hook-fullScreen",
							code: ["KeyH"],
						},
						{
							enableKey: "dy-keyboard-hook-watchItOutLater",
							code: ["KeyL"],
						},
						{
							enableKey: "dy-keyboard-hook-volumeAdjustment",
							code: ["Minus"],
							otherCodeList: ["shift"],
						},
						{
							enableKey: "dy-keyboard-hook-listOfCallShortcutKeys",
							code: ["Slash"],
							otherCodeList: ["shift"],
						},
						{
							enableKey: "dy-keyboard-hook-closeTheShortcutKeyList",
							code: ["Escape"],
						},
						{
							enableKey: "dy-keyboard-hook-relevantRecommendation",
							code: ["KeyN"],
						},
						{
							enableKey: "dy-keyboard-hook-listenToDouyin",
							code: ["KeyT"],
						},
					];

					if (DouYinRouter.isIndex()) {
						keyboardConfigList.push(
							{
								enableKey: "dy-keyboard-hook-arrowUp-w",
								code: ["KeyW"],
							},
							{
								enableKey: "dy-keyboard-hook-arrowDown-s",
								code: ["KeyS"],
							},
							{
								enableKey: "dy-keyboard-hook-videoRewind",
								code: ["KeyA"],
							},
							{
								enableKey: "dy-keyboard-hook-videoFastForward",
								code: ["KeyD"],
							}
						);
					} else if (DouYinRouter.isLive()) {
						keyboardConfigList.push(
							{
								enableKey: "dy-live-refresh",
								code: ["KeyE"],
							},
							{
								enableKey: "dy-live-screenRotation",
								code: ["KeyD"],
							},
							{
								enableKey: "dy-live-enableSmallWindowMode",
								code: ["KeyU"],
							}
						);
					}
					for (let index = 0; index < keyboardConfigList.length; index++) {
						const keyboardConfig = keyboardConfigList[index];
						if (keyboardConfig.code.includes(code)) {
							if (Array.isArray(keyboardConfig.otherCodeList)) {
								// @ts-ignore
								let findValue = keyboardConfig.otherCodeList.find(
									(item) => !otherCodeList.includes(item)
								);
								if (findValue) {
									continue;
								}
							}
							if (!Panel.getValue(keyboardConfig.enableKey)) {
								// 未启用
								continue;
							}
							// 阻止触发
							return;
						}
					}
					// 触发原始回调
					return Reflect.apply(listener, this, eventArgs);
				};
			}
		});
	},
	/**
	 * 禁用双击点赞
	 */
	disableDoubleClickLike() {
		let latestClickTime = Date.now();
		Hook.element_addEventListener((target, eventName, listener, option) => {
			const listenerStr = listener.toString();
			if (
				eventName === "click" &&
				target instanceof HTMLElement &&
				target?.classList?.contains("xgplayer") &&
				listenerStr.match(/video|innerContainer|video.__canvas|mouse/)
			) {
				return function (this: any, ...eventArgs: any[]) {
					let currentClickTime = Date.now();
					if (currentClickTime - latestClickTime <= 288) {
						latestClickTime = currentClickTime;
						log.success("阻止触发双击点赞");
						return;
					}
					latestClickTime = currentClickTime;
					Reflect.apply(listener, this, eventArgs);
				};
			}
		});
	},
};
