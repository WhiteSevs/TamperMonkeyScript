import { $, $$, addStyle, DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { TieBaApi } from "../api/TiebaApi";
import Qmsg from "qmsg";
import { VueUtils } from "@/utils/VueUtils";
import { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";
import { TiebaUniAppPost } from "../uni-app-post/TiebaUniAppPost";
import { BaiduHook } from "@/hook/BaiduHook";
import { BaiduRouter } from "@/router/BaiduRouter";

interface BaNeiPostInfo {
	abstract: [
		{
			text: string;
			type: number;
		}
	];
	agree: {
		agreeNum: number;
		disagreeNum: number;
	};
	author: {
		id: number;
		name: string;
		nameShow: string;
		src: string;
		portrait: string;
	};
	createTime: string;
	nameShow: string;
	media: string[];
	id: number;
	tid: number;
	replyNum: string;
	interactionCollect: boolean;
	interactionGood: boolean;
	title: string;
	voiceList: string[];
	video: {
		isVideo: boolean;
	};
	threadForum: {};
	isMixRecommendThread: boolean;
}

/**
 * 贴吧 吧内功能
 */
export const TiebaBaNei = {
	init() {
		PopsPanel.execMenuOnce("baidu_tieba_banei_hook_iframe_call_app", () => {
			BaiduHook.setTimeout("tiebaCallAppIframe");
		});
		PopsPanel.execMenuOnce("baidu_tieba_removeForumSignInLimit", () => {
			this.removeForumSignInLimit();
		});
		PopsPanel.execMenuOnce("baidu_tieba_banei_hookWakeUp", () => {
			this.hookWakeUp();
		});
		PopsPanel.execMenuOnce("baidu_tieba_banei_repair_card_click_jump", () => {
			this.repairCardClickJump();
		});
		PopsPanel.execMenu("baidu_tieba_add_search", () => {
			this.repairSearch();
		});
		// PopsPanel.execMenuOnce("baidu_tieba_remember_user_post_sort", () => {
		// 	this.rememberPostSort();
		// });
		// PopsPanel.execMenuOnce("baidu_tieba_filterDuplicatePosts", () => {
		// 	this.filterDuplicatePosts();
		// });
	},
	/**
	 * 解除签到限制
	 */
	removeForumSignInLimit() {
		/* 修改页面中的APP内签到 */
		VueUtils.waitVuePropToSet("uni-app #forumInfoId .sign-wakeup", {
			check(vueInstance) {
				return typeof vueInstance.$root.commonParams.fname === "string";
			},
			set(vueInstance) {
				let $signWakeUp = $<HTMLElement>("uni-app #forumInfoId .sign-wakeup")!;
				$signWakeUp.setAttribute("data-gm-prevent-hook-event", "true");
				let isLogin = () => {
					return vueInstance.$root.commonParams.uid != null;
				};
				utils
					.waitNode<HTMLDivElement>(
						"uni-app #forumInfoId .sign-wakeup .sign-wakeup-text"
					)
					.then((element) => {
						if (isLogin()) {
							DOMUtils.text(element, "点击签到");
						} else {
							DOMUtils.text(element, "点击登录");
						}
						log.success("修改页面中的APP内签到");
						DOMUtils.on(
							$signWakeUp,
							"click",
							async function (event) {
								utils.preventEvent(event);
								if (isLogin()) {
									/* 已登录-签到 */
									log.info(`已登录-签到`);
									let fname = vueInstance.$root.commonParams.fname;
									let tbs = vueInstance.$root.tbs;
									let signResult = await TieBaApi.forumSign(fname, tbs);
									if (signResult && typeof signResult["data"] === "object") {
										Qmsg.success(
											`今日本吧第${signResult["data"]["finfo"]["current_rank_info"]["sign_count"]}个签到`
										);
									} else {
										Qmsg.error(signResult?.["error"] as string);
									}
								} else {
									/* 未登录-前往登录 */
									window.open(
										`https://wappass.baidu.com/passport?login&tpl=tb&u=${encodeURIComponent(
											window.location.href
										)}`,
										"_blank"
									);
								}
							},
							{
								capture: true,
							}
						);
					});
			},
		});
	},
	/**
	 * 修复卡片点击跳转
	 */
	repairCardClickJump() {
		log.info(`修复卡片点击跳转`);
		DOMUtils.on(
			document,
			"click",
			[
				"div.tb-threadlist__item",
				"uni-app .feed-card",
				"uni-app .swiperItemWrapper .video-feed  .wake-app",
				"uni-app .swiperItemWrapper > div > div",
			],
			function (event) {
				utils.preventEvent(event);
				let vueInstance = VueUtils.getVue(event.target);
				let pbUrl = vueInstance?.pbUrl;
				let collectH5Url = vueInstance?.collectH5Url;
				let tid =
					vueInstance?.tid ??
					vueInstance?.thread?.tid ??
					vueInstance?.config?.param?.tid;
				let id = vueInstance?.id ?? vueInstance?.thread?.id;
				let newUrl = "";
				if (pbUrl) {
					newUrl = window.location.origin + pbUrl;
				} else if (tid || id) {
					newUrl = TiebaUrlHandler.getPost(tid ?? id);
				} else if (typeof collectH5Url === "string") {
					// 合辑
					newUrl = decodeURIComponent(collectH5Url);
				} else {
					Qmsg.error("获取帖子链接失败");
					return;
				}
				log.info("帖子链接: " + newUrl);
				if (
					BaiduRouter.isTieBaNei() &&
					PopsPanel.getValue("baidu_tieba_banei_openANewTab")
				) {
					// 吧内-新标签页打开
					window.open(newUrl, "_blank");
				} else {
					window.location.href = newUrl;
				}
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 记住当前用户的看帖排序
	 * + -1 不知道什么作用
	 * + 1  不知道什么作用
	 * + 2  回复
	 * + 3  发布
	 */
	rememberPostSort() {
		let userSortModel = parseInt(
			PopsPanel.getValue("baidu-tieba-sort-model", 3).toString()
		);
		utils
			.waitNode<HTMLDivElement>(".tb-page__main .tb-sort .tab-pack")
			.then((element) => {
				let originChange = VueUtils.getVue(element)?.change;
				originChange(userSortModel);
				(element as any).__vue__.change = function (index: number) {
					PopsPanel.setValue("baidu-tieba-sort-model", index);
					originChange(index);
				};
				log.info("注入记住当前选择的看帖排序");
			});
	},
	/**
	 * 过滤重复帖子
	 */
	filterDuplicatePosts() {
		VueUtils.waitVuePropToSet(".tb-threadlist", [
			{
				msg: "等待获取$watch监听帖子列表",
				check(vueObj) {
					return typeof vueObj?.$watch === "function";
				},
				set(vueObj) {
					log.success("监听帖子数量改变");
					vueObj.$watch(
						"list",
						function (
							this: {
								$props: {
									list: BaNeiPostInfo[];
								} & NestedObjectWithToString;
							} & NestedObjectWithToString,
							newVal: any,
							oldVal: any
						) {
							log.success("帖子数量触发改变");
							let postsMap: {
								[key: number]: number;
							} = {};
							let samePostList: {
								title: string;
								id: number;
								index: number;
							}[] = [];
							for (let index = 0; index < this.$props.list.length; index++) {
								let postsInfo = this.$props.list[index];
								if (!postsInfo.id) {
									continue;
								}
								if (postsInfo.id in postsMap) {
									samePostList.push({
										title: postsInfo.title ?? "",
										id: postsInfo.id,
										index: index,
									});
								} else {
									postsMap[postsInfo.id] = index;
								}
							}
							if (samePostList.length) {
								console.log(postsMap);
								console.log(samePostList);
							}
							for (let index = samePostList.length - 1; index >= 0; index--) {
								let removePostInfo = samePostList[index];
								log.error("移除重复帖子：" + removePostInfo.title);
								this.$props.list.splice(removePostInfo.index, 1);
							}
						},
						{
							deep: true,
							immediate: true,
						}
					);
				},
			},
		]);
	},
	/**
	 * 阻止唤醒App
	 */
	hookWakeUp() {
		let lockFn = new utils.LockFunction(() => {
			$$<HTMLElement>("uni-app .wake-app").forEach(($wakeUp) => {
				let vueInstance = VueUtils.getVue($wakeUp);
				if (!vueInstance) {
					return;
				}
				let isOpenApp = vueInstance.isOpenApp;
				if (typeof isOpenApp === "boolean") {
					vueInstance.isOpenApp = false;
				}
				let handleLaunchApp = vueInstance.handleLaunchApp;
				if (typeof handleLaunchApp === "function") {
					vueInstance.handleLaunchApp = function () {
						if ($wakeUp.getAttribute("data-gm-prevent-hook-event")) {
							return;
						}
						if (typeof vueInstance.$listeners["handle-click"] === "function") {
							vueInstance.$listeners["handle-click"]();
						} else {
							log.success("阻止点击唤醒App .wake-up");
						}
					};
				}
			});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				lockFn.run();
			},
		});
		document.addEventListener("click", (event) => {
			let vueInstance = VueUtils.getVue(event.target);
			if (vueInstance?.isOpenApp) {
				utils.preventEvent(event);
				log.success("阻止点击唤醒App .wake-up");
			}
		});
	},
	/**
	 * 修复搜索功能的样式
	 */
	repairSearch() {
		addStyle(/*css*/ `
			.nav-bar .more-btn-desc,
			uni-app .frs-wise-nav-bar .more-btn-desc{
				font-size: 15px;
			}
			#search .nav-search-container{
				height: 48px;
			}
			#search .nav-search-container svg{
				width: 16px;
				height: 16px;
			}
			#search .nav-search-btn{
				font-size: 15px;
			}
			#search .search-result{
				top: 48px;
			}
			#search .search-result-model{
				top: 48px;
				height: 32px;
			}
			#search .search-result-model .search-result-model-item[data-active]:after{
				width: 20px;
				margin: 0 5px 0px;
			}
			#search .search-result-from-info{
				margin-top: 32px;
			}
			#search .search-result-media-left{
				padding-right: 8px !important;
			}
			#search .search-result-media-left img{
				width: 35px !important;;
				height: 35px !important;;
			}
			#search .search-result-media-body-author-name{
				margin-top: 2px !important;
				font-size: 16px !important;
				line-height: 15px !important;
			}
			#search .search-result-media-body-time{
				margin-top: 6px !important;
				font-size: 12px !important;
				line-height: 12px !important;
			}
			#search .search-result-title, #search .search-result-content, #search .search-result-bottom-toolbar{
				margin-top: 8px !important;
			}
			#search h1.search-result-title-h1{
				font-size: 16px !important;
			}
			`);
	},
};
