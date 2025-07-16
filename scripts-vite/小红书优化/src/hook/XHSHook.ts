import { log } from "@/env";
import { unsafeWindow } from "ViteGM";
import { Hook } from "@components/hook/Hook";
import { Panel } from "@components/setting/panel";

/* 小红书劫持函数 */
export const XHSHook = {
	/**
	 * 劫持webpack
	 * 笔记的
	 */
	webpackChunkranchi() {
		let originObject: any = undefined;
		let webpackName = "webpackChunkranchi";
		Object.defineProperty(unsafeWindow, webpackName, {
			get() {
				return originObject;
			},
			set(newValue) {
				originObject = newValue;
				const oldPush = originObject.push;
				originObject.push = function (...args: any) {
					let _mainCoreData = args[0][0];
					if (typeof args[0][1] === "object") {
						Object.keys(args[0][1]).forEach((keyName, index) => {
							// if (
							// 	typeof args[0][1][keyName] === "function" &&
							// 	args[0][1][keyName].toString().includes("是否打开小红书App?") &&
							// 	Panel.getValue("little-red-book-hijack-webpack-mask")
							// ) {
							// 	console.log(args[0][1][keyName]);
							// 	/* 这个是弹窗的 */
							// 	log.success(["成功劫持各种弹窗/遮罩层：" + keyName]);
							// 	args[0][1][keyName] = function () {};
							// } else
							if (
								typeof args[0][1][keyName] === "function" &&
								args[0][1][keyName]
									.toString()
									.startsWith(
										"function(e,n,t){t.d(n,{Z:function(){return y}});"
									) &&
								args[0][1][keyName].toString().includes("jumpToApp") &&
								Panel.getValue("little-red-book-hijack-webpack-scheme")
							) {
								/* 这个scheme唤醒的 */
								let oldFunc = args[0][1][keyName];
								args[0][1][keyName] = function (...args_1: any) {
									log.success(["成功劫持scheme唤醒", args_1]);
									let oldD = args_1[2].d;
									args_1[2].d = function (...args_2: any) {
										if (
											args_2.length === 2 &&
											typeof args_2[1]?.["Z"] === "function"
										) {
											let oldZ = args_2[1]["Z"];
											if (oldZ.toString() === "function(){return y}") {
												args_2[1]["Z"] = function (...args_3: any) {
													let result = oldZ.call(this, ...args_3);
													if (
														typeof result === "function" &&
														result.toString().includes("jumpToApp")
													) {
														return function () {
															return {
																jumpToApp(data: { [x: string]: string }) {
																	log.success(["拦截唤醒", data]);
																	if (
																		data["deeplink"]?.startsWith(
																			"xhsdiscover://user/"
																		)
																	) {
																		/* 正确跳转用户主页 */
																		let userId = data["deeplink"].replace(
																			/^xhsdiscover:\/\/user\//,
																			""
																		);
																		let userHomeUrl =
																			window.location.origin +
																			`/user/profile/${userId}`;
																		window.open(userHomeUrl, "_blank");
																	}
																},
															};
														};
													}
													return result;
												};
											}
										}
										return oldD.call(this, ...args_2);
									};
									return oldFunc.call(this, ...args_1);
								};
							}
						});
					}

					return oldPush.call(this, ...args);
				};
			},
		});
	},
	/**
	 * 劫持vue，恢复属性__Ivue__
	 */
	hookVue() {
		const assign = unsafeWindow.Object.assign;
		let isRun = false;
		unsafeWindow.Object.assign = function (...args: any[]) {
			if (args.length == 2 && args[1]?.render !== undefined && !isRun) {
				let b = args[1];
				const originRender = b.render;
				let isInject = false;
				b.render = function (...args2: any[]) {
					if (!isInject) {
						args2[5]["_"].appContext.mixins.push({
							mounted() {
								this.$el["__Ivue__"] = this;
							},
						});
						isInject = true;
					}
					return originRender.call(this, ...args2);
				};
				isRun = true;
			}
			return Reflect.apply(assign, this, args);
		};
	},
	/**
	 * 劫持唤醒
	 */
	setTimeout() {
		Hook.setTimeout((fn) => {
			let fnStr = fn.toString();
			if (fnStr === "function(){r()}" || fnStr === "function(){u()}") {
				log.success(["成功劫持setTimeout唤醒", fn]);
				return false;
			}
		});
	},
	/**
	 * 劫持唤醒
	 */
	call() {
		Hook.function_call({
			paramsHandler(fn, thisArg, argArray) {
				let fnStr = fn.toString();
				if (
					argArray[0]?.label === 0 &&
					Array.isArray(argArray[0]?.ops) &&
					Array.isArray(argArray[0]?.trys) &&
					typeof argArray[0]?.sent === "function"
				) {
					log.success([`成功劫持call唤醒`, fn, thisArg, argArray]);
					return {
						args: {
							fn: fn,
							thisArg: thisArg,
							// 置空
							argArray: [],
						},
					};
				} else if (
					typeof thisArg === "string" &&
					thisArg.startsWith("https://oia.xiaohongshu.com/oia")
				) {
					// .concat.call(...)
					log.success([`成功劫持call跳转下载页面`, fn, thisArg, argArray]);
					return {
						preventDefault: true,
					};
				}
			},
		});
	},
};
