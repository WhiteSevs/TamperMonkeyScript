import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import type { AnyObject } from "@whitesev/utils/dist/src/Utils";
import { unsafeWindow } from "ViteGM";
import { WeiBoNetWorkHook } from "./WeiBoNetWorkHook";

const WeiBoHook = {
	/**
	 * 劫持Function.prototype.apply;
	 */
	hookApply() {
		log.info("劫持Function.prototype.apply");
		let originApply = unsafeWindow.Function.prototype.apply;
		unsafeWindow.Function.prototype.apply = function (...args) {
			if (args.length !== 2) {
				return originApply.call(this, ...args);
			}
			if (args.length === 2 && !Array.isArray(args[1])) {
				return originApply.call(this, ...args);
			}
			if (typeof args[1][0] !== "string") {
				return originApply.call(this, ...args);
			}
			const ApiPath = args[1][0] as string;
			const ApiSearchParams = args[1]?.[1]?.["params"] as AnyObject;
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
			return originApply.call(this, ...args);
		};
	},
	/**
	 * 拦截网络
	 */
	hookNetWork() {
		WeiBoNetWorkHook.ajaxHooker.hook(function (request) {
			log.info(["ajaxHookr: ", request.url]);
			if (
				request.url.startsWith("https://m.weibo.cn/api/config") &&
				PopsPanel.getValue("weibo_request_api_config")
			) {
				/**
				 * 重构响应
				 * @param _request_
				 */
				request.response = function (_request_) {
					let data = utils.toJSON(_request_.responseText);
					data.data.preferQuickapp = 0;
					data.data.login = true;
					data.data.uid = "";
					Reflect.deleteProperty(data.data, "loginUrl");
					Reflect.deleteProperty(data.data, "wx_callback");
					Reflect.deleteProperty(data.data, "wx_authorize");
					Reflect.deleteProperty(data.data, "passport_login_url");
					log.success("伪装已登录");
					_request_.responseText = JSON.stringify(data);
				};
			} else if (
				request.url.startsWith("https://m.weibo.cn/comments/hot") &&
				PopsPanel.getValue("weibo_request_comments_hot")
			) {
				/**
				 * 重构响应
				 * @param _request_
				 */
				request.response = function (_request_) {
					let data = utils.toJSON(_request_.responseText);
					if (data.ok !== 1) {
						log.error(["由于尚未登录，获取不到更多评论数据", data]);
						data = {
							ok: 1,
						};
					}
					_request_.responseText = JSON.stringify(data);
				};
			} else if (
				request.url.startsWith("https://m.weibo.cn/status/push?") &&
				PopsPanel.getValue("weibo_request_status_push")
			) {
				/**
				 * 重构响应
				 */
				request.response = function (_request_) {
					let data = utils.toJSON(_request_.responseText);
					(_request_ as any).json = {};
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
		utils.waitNode<HTMLDivElement>("#app").then(async ($app: any) => {
			if (!$app) {
				log.error("元素#app获取失败");
				return;
			}
			await utils.waitPropertyByInterval(
				$app,
				() => {
					return ($app as any)?.__vue__?.$router?.push;
				},
				250,
				10000
			);
			if (!($app as any).__vue__) {
				log.error("#app的vue属性不存在");
				return;
			}
			let vueRouterPush = $app.__vue__.$router.push;
			log.success("拦截Vue路由跳转");
			$app.__vue__.$router.push = function (...args: any[]) {
				let router = args[0] as AnyObject;
				if (
					router?.path?.startsWith("/profile/") &&
					PopsPanel.getValue("weibo_router_profile_to_user_home")
				) {
					let uid = router?.params?.uid;
					if (uid == null) {
						uid = router.path.match(/\/profile\/([\d]+)/)?.[1];
					}
					log.success(["拦截跳转xx微博主页", router]);
					let uidHomeUrl = `https://m.weibo.cn/u/${uid}`;
					log.success("跳转微博主页：" + uidHomeUrl);
					window.location.href = uidHomeUrl;
					return;
				}
				return vueRouterPush.apply(this, arguments);
			};
		});
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
