import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { unsafeWindow } from "ViteGM";
import { WeiBoNetWorkHook } from "./WeiBoNetWorkHook";
import { VueUtils } from "@/utils/VueUtils";
import Qmsg from "qmsg";
import { WeiBo } from "@/main/WeiBo";
import { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { CommonUtil } from "@/utils/CommonUtil";

const WeiBoHook = {
	/**
	 * 劫持Function.prototype.apply;
	 */
	hookApply() {
		log.info("劫持Function.prototype.apply");
		let originApply = unsafeWindow.Function.prototype.apply;
		unsafeWindow.Function.prototype.apply = function (...args) {
			let target = originApply;
			if (args.length !== 2) {
				return Reflect.apply(target, this, args);
			}
			if (args.length === 2 && !Array.isArray(args[1])) {
				return Reflect.apply(target, this, args);
			}
			if (typeof args[1][0] !== "string") {
				return Reflect.apply(target, this, args);
			}
			const ApiPath = args[1][0] as string;
			const ApiSearchParams = args[1]?.[1]?.["params"] as any;
			if (
				ApiPath === "api/attitudes/create" &&
				PopsPanel.getValue("weibo_apply_attitudes_create")
			) {
				log.success("拦截跳转登录");
				return new Promise((resolve) => {
					resolve({
						data: {},
					});
				});
			} else if (
				ApiPath === "api/likes/update" &&
				PopsPanel.getValue("weibo_apply_likes_update")
			) {
				log.success("拦截点赞跳转登录");
				return new Promise((resolve) => {
					resolve({
						data: {},
					});
				});
			} else if (
				ApiPath === "api/comments/create" &&
				PopsPanel.getValue("weibo_apply_comments_create")
			) {
				log.success("拦截评论跳转登录");
				return new Promise((resolve) => {
					resolve({
						data: {},
					});
				});
			} else if (
				ApiPath === "api/friendships/create" &&
				PopsPanel.getValue("weibo_apply_friendships_create")
			) {
				log.success("拦截关注跳转登录");
				return new Promise((resolve) => {
					resolve({
						data: {},
					});
				});
			} else if (
				ApiPath === "api/comments/reply" &&
				PopsPanel.getValue("weibo_apply_comments_reply")
			) {
				log.success("拦截回复跳转登录");
				return new Promise((resolve, reject) => {
					/* 伪装发送成功 */
					resolve({
						data: {
							ok: 200,
						},
					});
				});
			} else if (
				ApiPath.startsWith("profile/info") &&
				PopsPanel.getValue("weibo_apply_profile_info")
			) {
				log.success(["优化跳转xx微博主页", ApiSearchParams]);
				let uidHomeUrl = `https://weibo.com/${ApiSearchParams["uid"]}`;
				log.success("跳转微博主页：" + uidHomeUrl);
				window.location.href = uidHomeUrl;
				return null;
			} else if (
				ApiPath === "comments/hotflow" &&
				PopsPanel.getValue("weibo_apply_comments_hotflow")
			) {
				if (
					!(
						"id" in ApiSearchParams &&
						"max_id_type" in ApiSearchParams &&
						"mid" in ApiSearchParams
					) ||
					("id" in ApiSearchParams &&
						"max_id" in ApiSearchParams &&
						"max_id_type" in ApiSearchParams &&
						"mid" in ApiSearchParams)
				) {
					log.success(["拦截下拉加载更多评论跳转登录", ApiSearchParams]);
					return new Promise((resolve) => {
						resolve({
							ok: 1,
							data: {
								data: [],
								total_number: 0,
							},
						});
					});
				}
			} else if (
				ApiPath === "comments/hotFlowChild" &&
				PopsPanel.getValue("weibo_apply_comments_hotFlowChild")
			) {
				if ("max_id" in ApiSearchParams && ApiSearchParams["max_id"] !== 0) {
					log.success([
						"拦截评论中的评论下拉加载更多评论跳转登录",
						ApiSearchParams,
					]);
					return new Promise((resolve) => {
						resolve({
							data: {
								ok: 1,
								data: [],
								rootComment: [],
								total_number: 0,
							},
						});
					});
				}
			} else if (
				ApiPath === "api/statuses/repostTimeline" &&
				PopsPanel.getValue("weibo_apply_statuses_repostTimeline")
			) {
				log.success(["拦截查看转发数据，因为需登录", ApiSearchParams]);
				return new Promise((resolve) => {
					resolve({
						data: {
							ok: 1,
							data: {
								data: [],
								total_number: 0,
							},
						},
					});
				});
			} else {
				//log.info(["请求API：", ApiPath, ApiSearchParams]);
			}
			return Reflect.apply(target, this, args);
		};
	},
	/**
	 * 拦截网络
	 */
	hookNetWork() {
		WeiBoNetWorkHook.ajaxHooker.hook(function (request) {
			/** 请求的Url */
			let requestUrl = CommonUtil.fixUrl(request.url);
			log.info("[ajaxHookr] " + requestUrl);
			if (
				requestUrl.startsWith("https://m.weibo.cn/api/config") &&
				PopsPanel.getValue("weibo_request_api_config")
			) {
				/**
				 * 重构响应
				 * @param originResponse
				 */
				request.response = function (originResponse) {
					let originResponseData = utils.toJSON(originResponse.responseText);
					if (!originResponseData.data.login) {
						log.error("由于未登录，伪装为已登录状态");
						originResponseData.data.login = true;
						originResponseData.data.uid = "";
						originResponseData.preferQuickapp = 0;
						Reflect.deleteProperty(originResponseData.data, "loginUrl");
						Reflect.deleteProperty(originResponseData.data, "wx_callback");
						Reflect.deleteProperty(originResponseData.data, "wx_authorize");
						Reflect.deleteProperty(
							originResponseData.data,
							"passport_login_url"
						);
						originResponse.responseText = JSON.stringify(originResponseData);
					}
				};
			} else if (
				requestUrl.startsWith("https://m.weibo.cn/comments/hot") &&
				PopsPanel.getValue("weibo_request_comments_hot")
			) {
				/**
				 * 重构响应
				 * @param originResponse
				 */
				request.response = function (originResponse) {
					let originResponseData = utils.toJSON(originResponse.responseText);
					if (originResponseData.ok !== 1) {
						log.error([
							"由于尚未登录，获取不到更多评论数据",
							originResponseData,
						]);
						originResponseData = {
							ok: 1,
						};
						originResponse.responseText = JSON.stringify(originResponseData);
					}
				};
			} else if (
				requestUrl.startsWith("https://m.weibo.cn/status/push?") &&
				PopsPanel.getValue("weibo_request_status_push")
			) {
				/**
				 * 重构响应
				 */
				request.response = function (originResponse) {
					let originResponseData = utils.toJSON(originResponse.responseText);
					Reflect.set(originResponse, "json", {});
					log.info([`重构/status/push响应`, originResponseData]);
					originResponse.responseText = JSON.stringify(originResponseData);
				};
			} else if (
				requestUrl.startsWith("https://m.weibo.cn/api/container/getIndex") &&
				PopsPanel.getValue("weibo-request-blockArticleAds")
			) {
				/**
				 * 重构响应
				 */
				request.response = function (originResponse) {
					let originResponseData = utils.toJSON(originResponse.responseText);
					let cards = originResponseData["data"]["cards"];
					for (let index = 0; index < cards.length; index++) {
						const card = cards[index];
						let mblog = card?.mblog;
						if (mblog) {
							let id = mblog.id;
							let ad_state = mblog?.ad_state;
							let cardText = mblog?.text;
							let page_title = mblog?.page_info?.page_title;
							if (ad_state) {
								cards.splice(index, 1);
								index--;
								log.info(`移除广告url：` + "https://m.weibo.cn/detail/" + id);
								log.info(`移除广告card：` + cardText);
							}
						}
					}
					originResponse.responseText = JSON.stringify(originResponseData);
				};
			}
		});
	},
	/**
	 * 劫持webpack
	 * @param webpackName 当前全局变量的webpack名
	 * @param mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
	 * @param checkCallBack 如果mainCoreData匹配上，则调用此回调函数
	 */
	hookWebpack(
		webpackName = "webpackJsonp",
		mainCoreData: string | any[],
		checkCallBack: (webpackExports: any) => void
	) {
		let originObject = void 0 as any;
		Object.defineProperty(unsafeWindow, webpackName, {
			get() {
				return originObject;
			},
			set(newValue) {
				log.success("成功劫持webpack，当前webpack名：" + webpackName);
				originObject = newValue;
				const originPush = originObject.push;
				originObject.push = function (...args: any[]) {
					let _mainCoreData = args[0][0];
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
	 * 拦截Vue Router跳转
	 */
	hookVueRouter() {
		VueUtils.waitVuePropToSet("#app", [
			{
				msg: "等待获取属性 __vue__.$router",
				check(vueIns) {
					return typeof vueIns?.$router?.push === "function";
				},
				set(vueIns) {
					log.success("拦截Vue路由跳转");
					let beforeEachFn = (
						to: Vue2Instance["$route"],
						from: Vue2Instance["$route"],
						next: Function
					) => {
						if (to.name === "profile") {
							// 主页
							if (PopsPanel.getValue("weibo_router_profile_to_user_home")) {
								let uid = to?.params?.uid;
								if (uid == null) {
									log.error("获取uid失败");
									Qmsg.error("获取uid失败");
									return;
								}
								log.success(`修复跳转${uid}微博主页`);
								let uidHomeUrl = `https://m.weibo.cn/u/${uid}`;
								window.location.href = uidHomeUrl;
								return;
							}
						} else if (to?.name === "detail") {
							// 正文
						}
						next();
					};
					vueIns.$router.beforeEach(beforeEachFn);
					vueIns.$router.afterEach((to: any, from: any) => {
						PopsPanel.execMenu("weibo-listenRouterChange", () => {
							log.info("路由更新，重载功能");
							WeiBo.init();
						});
					});

					// 调整自定义的beforeHooks的优先级
					let ownHookIndex = vueIns.$router.beforeHooks.findIndex(
						(item: any) => item == beforeEachFn
					);
					if (ownHookIndex !== -1) {
						let ownHook = vueIns.$router.beforeHooks.splice(ownHookIndex, 1);
						vueIns.$router.beforeHooks.splice(0, 0, ...ownHook);
					} else {
						log.error("$router未在beforeHooks内找到自定义的beforeEach");
					}
				},
			},
		]);
	},
	/**
	 * 禁止Service Worker注册
	 */
	hookServiceWorkerRegister() {
		log.info("hook => navigator.serviceWorker.register");
		unsafeWindow.Object.defineProperty(
			unsafeWindow.navigator.serviceWorker,
			"register",
			{
				get() {
					return function (...args: any[]) {
						log.success(["劫持navigator.serviceWorker.register: ", args]);
					};
				},
			}
		);
	},
};

export { WeiBoHook };
