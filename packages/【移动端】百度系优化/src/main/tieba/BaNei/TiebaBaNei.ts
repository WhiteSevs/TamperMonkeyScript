import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { TieBaApi, TiebaUrlApi } from "../api/TiebaApi";
import { CommonUtils } from "@/utils/CommonUtils";
import Qmsg from "qmsg";
import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";
import { VueUtils } from "@/utils/VueUtils";

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
const TiebaBaNei = {
	/**
	 * __vue__
	 */
	vueRootView: null as unknown as Vue2Context,
	init() {
		PopsPanel.execMenu("baidu_tieba_openANewTab", () => {
			TiebaBaNei.openANewTab();
		});
		PopsPanel.execMenu("baidu_tieba_remember_user_post_sort", () => {
			TiebaBaNei.rememberPostSort();
		});
		PopsPanel.execMenu("baidu_tieba_filterDuplicatePosts", () => {
			TiebaBaNei.filterDuplicatePosts();
		});
		PopsPanel.execMenu("baidu_tieba_removeForumSignInLimit", () => {
			TiebaBaNei.removeForumSignInLimit();
		});
	},
	/**
	 * 解除签到限制
	 */
	removeForumSignInLimit() {
		/* 修改页面中的APP内签到 */
		utils.waitNode<HTMLDivElement>(".tb-mobile-viewport").then(async () => {
			TiebaBaNei.vueRootView = VueUtils.getVue(
				document.querySelector(".tb-mobile-viewport")
			) as Vue2Context;
			let isLogin = Boolean(TiebaBaNei.vueRootView?.["user"]?.["is_login"]);
			utils
				.waitNode<HTMLDivElement>(".tb-forum-user__join-btn")
				.then((element) => {
					if (isLogin) {
						(element.children[0] as HTMLElement).innerText = "点击签到";
					} else {
						(element.children[0] as HTMLElement).innerText = "点击登录";
					}
					log.success("修改页面中的APP内签到");
					DOMUtils.on(
						element,
						"click",
						async function (event) {
							utils.preventEvent(event);
							if (isLogin) {
								/* 已登录-签到 */
								let userPortrait = TiebaBaNei.vueRootView["user"]["portrait"];
								let forumName = TiebaBaNei.vueRootView["forum"]["name"];
								let tbs =
									TiebaBaNei.vueRootView["$store"]["state"]["common"]["tbs"];
								let signResult = await TieBaApi.forumSign(forumName, tbs);
								if (signResult && typeof signResult["data"] === "object") {
									Qmsg.success(
										`今日本吧第${signResult["data"]["finfo"]["current_rank_info"]["sign_count"]}个签到`
									);
								} else {
									Qmsg.error(signResult?.["error"] as string);
								}
							} else {
								/* 未登录-前往登录 */
								TiebaBaNei.vueRootView["isShowModal"] = true;
							}
						},
						{
							capture: true,
						}
					);
				});
		});
	},
	/**
	 * 新标签页打开
	 */
	openANewTab() {
		DOMUtils.on(
			document,
			"click",
			"div.tb-threadlist__item",
			function (event) {
				utils.preventEvent(event);
				let vueObj = VueUtils.getVue(event.target);
				let pbUrl = vueObj?.pbUrl;
				let tid = vueObj?.tid ?? vueObj?.thread?.tid;
				let id = vueObj?.id ?? vueObj?.thread?.id;
				let newUrl = "";
				if (pbUrl) {
					newUrl = window.location.origin + pbUrl;
				} else if (tid || id) {
					newUrl = TiebaUrlApi.getPost(tid ?? id);
				} else {
					Qmsg.error("获取帖子链接失败");
					return;
				}
				log.info("帖子链接: " + newUrl);
				window.open(newUrl, "_blank");
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
};

export { TiebaBaNei };
