import { $, $$, addStyle, DOMUtils, log, utils } from "@/env";
import { VueUtils } from "@/utils/VueUtils";
import Qmsg from "qmsg";
import { PopsPanel } from "@/setting/setting";
import { GM_getValue, GM_setValue } from "ViteGM";
import { TiebaUniAppComment } from "./TiebaUniAppComment";
import { TiebaPostApi } from "../api/TiebaPostApi";
import { GestureBack } from "@/utils/GestureBack";
import { TiebaPost } from "../Post/TiebaPost";
import { TiebaUniAppCommentFilter } from "./TiebaUniAppCommentFilter";
import { TiebaUniAppComponentDetection } from "./TiebaUniAppComponentDetection";
import { TiebaCore } from "../TiebaCore";
import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";

/**
 * 手势返回使用的hash参数
 */
export const GeastureBackHashConfig = {
	/** 楼中楼回复弹窗 */
	seeLzlReply: "#/seeLzlReply",
	/** 图片预览 */
	previewImage: "#/previewImage",
	/** Viewer图片预览 */
	viewerPreviewImage: "#/viewerPreviewImage",
};

export const TiebaUniAppPost = {
	init() {
		utils.waitNode("uni-app", 10000).then(($uniApp) => {
			if (!$uniApp) {
				return;
			}
			log.info(`uni-app ===> 本页面为uni-app页面`);
			let findHashValue = Object.values(GeastureBackHashConfig).find((item) => {
				return window.location.hash.endsWith(item);
			});
			if (findHashValue) {
				log.warn(`删除检测到的手势hash参数：${findHashValue}`);
				window.location.hash = "";
			}
			this.repairTbErrorPage();
			this.mutationRemoveWakeUpBtn();
			PopsPanel.onceExec("tieba-post-uni-app-comment-filter", () => {
				TiebaUniAppCommentFilter.init();
			});

			PopsPanel.execMenu("baidu_tieba_optimize_image_preview", () => {
				TiebaPost.optimizeImagePreview();
			});
			PopsPanel.execMenuOnce(
				"baidu-tieba-uni-app-post-allow-user-select",
				() => {
					return this.allowUserSelect();
				}
			);
			PopsPanel.execMenuOnce(
				"baidu-tieba-uni-app-post-overloadLoadMore",
				() => {
					this.overloadLoadMore();
				}
			);
			PopsPanel.execMenuOnce(
				"baidu-tieba-uni-app-post-repairPicGuideThreadWrapper",
				() => {
					this.repairPicGuideThreadWrapper();
				}
			);
			PopsPanel.execMenuOnce(
				"baidu-tieba-uni-app-post-repairClickToUserHome",
				() => {
					this.repairClickToUserHome();
				}
			);
			PopsPanel.execMenuOnce("baidu-tieba-uni-app-post-preventWakeApp", () => {
				this.preventWakeApp();
			});

			PopsPanel.execMenuOnce(
				"baidu-tieba-uni-app-post-addScrollTopButtonInForum",
				(value) => {
					return this.addScrollTopButton(value);
				}
			);
			PopsPanel.execMenuOnce(
				"baidu-tieba-uni-app-post-repairAnchorLink",
				() => {
					this.repairAnchorLink();
				}
			);
			PopsPanel.execMenu("baidu_tieba_add_search", () => {
				this.repairSearch();
			});
			DOMUtils.ready(() => {
				PopsPanel.execMenuOnce(
					"baidu-tieba-uni-app-post-rememberChooseSeeCommentSort",
					() => {
						this.rememberChooseSeeCommentSort();
					}
				);
				PopsPanel.execMenuOnce(
					"baidu-tieba-uni-app-post-filterDuplicateComments",
					() => {
						this.filterDuplicateComments();
					}
				);
				PopsPanel.execMenuOnce(
					"baidu-tieba-uni-app-post-blockTieBaRobot",
					() => {
						this.blockTieBaRobot();
					}
				);
				PopsPanel.execMenuOnce(
					"baidu-tieba-uni-app-post-optimizationLzlPostBackGestureReturn",
					() => {
						this.optimizationLzlPostBackGestureReturn();
					}
				);
				PopsPanel.execMenuOnce(
					"baidu-tieba-uni-app-post-optimizationImagePreviewBackGestureReturn",
					() => {
						this.optimizationImagePreviewBackGestureReturn();
					}
				);
				PopsPanel.execMenuOnce("baidu-tieba-componentDetection", () => {
					TiebaUniAppComponentDetection.init();
				});
			});
		});
	},
	/**
	 * 判断页面是否是uni-app
	 */
	isUniApp() {
		return Boolean($("uni-app"));
	},
	/**
	 * 允许用户选择文字
	 */
	allowUserSelect() {
		return addStyle(/*css*/ `
		html,body{
			-webkit-user-select: unset !important;
			-moz-user-select: unset !important;
			user-select: unset !important;
		}
		`);
	},
	/**
	 * 修复贴吧请求失败的弹窗（点击无反应）
	 */
	repairTbErrorPage() {
		addStyle(/*css*/ `
		/* 加载评论失败的弹窗 */
		.swiper-content .tb-error-page{
			background: rgba(0, 0, 0, 0.7);
			color: #ffffff;
			z-index: 10000;
		}
		`);
	},
	/**
	 * 动态加载移除唤醒按钮，会影响页面点击，比如超链接点击无反应
	 */
	mutationRemoveWakeUpBtn() {
		utils.mutationObserver(document.documentElement, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback() {
				document
					.querySelectorAll(".wake-app-btn")
					.forEach(($ele) => $ele.remove());
			},
		});
	},
	/**
	 * 覆盖页面的加载更多按钮，可实现加载更多评论
	 */
	overloadLoadMore() {
		log.info(`uni-app ===> 覆盖页面的加载更多按钮，可实现加载更多评论`);
		DOMUtils.on(
			document,
			"click",
			"uni-app .load-more",
			(event) => {
				utils.preventEvent(event);
				let $loadMore = event.target;
				let vue3Ins = VueUtils.getVue3($loadMore);
				let vue2Ins = VueUtils.getVue($loadMore);
				if (vue2Ins) {
					let handleClick = vue2Ins?.$listeners?.["handle-click"];
					if (typeof handleClick === "function") {
						handleClick();
						log.success(`uni-app ===> __vue__ 加载更多评论`);
					} else {
						log.error("uni-app ==> __vue__ 点击加载更多失败");
					}
				} else if (vue3Ins) {
					let onHandleClick = vue3Ins?.attrs?.onHandleClick;
					if (typeof onHandleClick === "function") {
						onHandleClick();
						log.success(`uni-app ===> __vueParentComponent 加载更多评论`);
					} else {
						log.error("uni-app ==> __vueParentComponent 点击加载更多失败");
					}
				} else {
					log.error("uni-app ==> 获取vue实例失败");
				}
			},
			{
				capture: true,
			}
		);
		DOMUtils.on(
			document,
			"scroll",
			utils.debounce(async () => {
				let $loadMore = $<HTMLDivElement>("uni-app .load-more");
				if ($loadMore) {
					if (utils.isVisible($loadMore, true)) {
						$loadMore.click();
					} else {
						// 按钮不可见
					}
				} else {
					// 按钮不存在
				}
			}),
			{
				capture: true,
				passive: true,
				once: false,
			}
		);
		// 主动触发一次滚动事件
		utils.dispatchEvent(document, "scroll");
	},
	/**
	 * 添加滚动到顶部按钮
	 */
	addScrollTopButton(enable: boolean) {
		if (enable) {
			log.info(`uni-app ===> 添加滚动到顶部按钮`);
			TiebaCore.addScrollTopButton();
			// 修复按钮的样式
			return addStyle(/*css*/ `
				.whitesev-tb-totop{
					display: unset !important;
					right: 9px !important;
					bottom: 100px !important;
				}
				.whitesev-tb-totop .tb-totop__span{
					width: 51px !important;
					height:  51px !important;
				}
			`);
		} else {
			// 隐藏按钮
			return addStyle(/*css*/ `
				.whitesev-tb-totop{
					display: none;
				}
			`);
		}
	},
	/**
	 * 修复图片导航列表跳转
	 */
	repairPicGuideThreadWrapper() {
		log.info(`uni-app ===> 修复图片导航列表跳转`);
		DOMUtils.on(
			document,
			"click",
			".pic-popup-guide-thread-wrapper .thread-guide-item-wake",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLDivElement;
				let vue2Ins = VueUtils.getVue($click)!;
				let vue3Ins = VueUtils.getVue3($click);
				let tid =
					vue2Ins?.$props?.config?.param?.tid ||
					vue3Ins?.props?.config?.param?.tid;
				if (typeof tid === "number") {
					let url = TiebaUrlHandler.getPost(tid);
					window.open(url, "_blank");
				} else {
					log.error("获取tid失败", $click);
					Qmsg.error("获取tid失败");
				}
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 修复点击进入用户主页（包括用户头像、用户名）
	 */
	repairClickToUserHome() {
		log.info(`uni-app ===> 修复点击进入用户主页（包括用户头像、用户名）`);
		DOMUtils.on(
			document,
			"click",
			".player-line-left",
			(event, selectorTarget) => {
				utils.preventEvent(event);
				let $click = selectorTarget!;
				let vue3Ins = VueUtils.getVue3($click);
				if (typeof vue3Ins?.props?.playerInfo?.portrait === "string") {
					let portrait = vue3Ins.props.playerInfo.portrait;
					let url = TiebaUrlHandler.getUserHome(portrait);
					window.open(url, "_blank");
				} else {
					let $wakeApp = $click.querySelector(".wake-app");
					let vueIns = VueUtils.getVue($wakeApp);
					let portrait = vueIns?.config?.param?.portrait;
					if (typeof portrait === "string") {
						let url = TiebaUrlHandler.getUserHome(portrait);
						window.open(url, "_blank");
					} else {
						log.error("获取portrait失败", $click, vueIns);
						Qmsg.error("获取portrait失败");
					}
				}
			}
		);
	},
	/**
	 * 阻止唤醒app
	 */
	preventWakeApp() {
		log.info(`uni-app ===> 阻止唤醒app`);
		DOMUtils.on(
			document,
			"click",
			"uni-app .wake-app",
			(event) => {
				let $wakeUp = event.target as HTMLElement;
				/**
				 * 忽略的类名
				 */
				let ignoreClassNameList: string[] = [
					/* 加载更多（打开App查看更多评论 ） */
					".load-more",
					/* 评论内容 */
					".comment-content",
					/* 图片导航推荐帖子 */
					".pic-popup-guide-thread-wrapper .thread-guide-item-wake",
					/* 用户信息区域 */
					".player-line-left",
					/* 回复输入框区域 */
					".pb-reply-textarea-wrapper",
				];
				if ($wakeUp.classList) {
					for (let index = 0; index < ignoreClassNameList.length; index++) {
						const ignoreClassName = ignoreClassNameList[index];
						if ($wakeUp.classList.contains(ignoreClassName)) {
							return;
						}
						if ($wakeUp.closest(ignoreClassName)) {
							return;
						}
					}
				}
				utils.preventEvent(event);
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 记住评论排序
	 */
	rememberChooseSeeCommentSort() {
		log.info(`uni-app ===> 记住评论排序`);
		const KEY = "baidu-tieba-uni-app-post-choose-see-comment-sort";
		DOMUtils.on(
			document,
			"click",
			"uni-view.reply-top .switch-tab .tab-item",
			(event) => {
				const $click = event.target as HTMLDivElement;
				const chooseSortText = $click.textContent!.trim();
				GM_setValue(KEY, chooseSortText);
				log.info(`切换评论排序：${chooseSortText}`);
			}
		);
		utils
			.waitNode("uni-view.reply-top .switch-tab .tab-item", 10000)
			.then(($tabItem) => {
				if (!$tabItem) {
					return;
				}
				const chooseSortText = GM_getValue(KEY);
				if (!chooseSortText) {
					return;
				}
				const $tabItemList = Array.from(
					$$<HTMLDivElement>("uni-view.reply-top .switch-tab .tab-item")
				);
				for (let index = 0; index < $tabItemList.length; index++) {
					const $item = $tabItemList[index];
					const tabSortText = $item.textContent!.trim();
					if (tabSortText === chooseSortText) {
						log.success(`当前评论排序：${chooseSortText}`);
						if ($item.classList.contains("tab-item-active")) {
							// 如果当前已经是该排序，那么不需要点击
							log.info(`当前评论排序与预期一致`);
						} else {
							utils.mutationVisible(
								$item,
								(entries, observer) => {
									observer.disconnect();
									setTimeout(() => {
										// 可能会出现这种情况
										// 打开帖子页面排序按钮就可以直接看到
										// 但是评论还没有加载出来
										// 需要评论加载出来之后再点击
										$item.click();
									}, 1250);
								},
								{
									rootMargin: "-10px 0px 0px 0px",
								}
							);
						}
						break;
					}
				}
				// 如果选择热门，但是帖子没有该选项，那么就是默认正序，不做处理
			});
	},
	/**
	 * 评论去重
	 */
	filterDuplicateComments() {
		log.info(`uni-app ===> 评论去重`);
		TiebaUniAppComment.watchComment((commentContainerInfoList, observer) => {
			const commentIdList: number[] = [];
			for (let index = 0; index < commentContainerInfoList.length; index++) {
				const commentContainerInfo = commentContainerInfoList[index];
				// 评论id
				const commentId = commentContainerInfo.data.id;
				// 评论内容
				const content = commentContainerInfo.data.content;
				// 楼层
				const floor = commentContainerInfo.data.floor;
				if (typeof commentId === "number") {
					if (commentIdList.includes(commentId)) {
						log.warn(
							`删除重复楼层${floor}，id: ${commentId}，内容：` +
								JSON.stringify(content)
						);
						commentContainerInfo.remove();
					} else {
						commentIdList.push(commentId);
					}
				}
			}
		});
	},
	/**
	 * 屏蔽贴吧机器人（贴吧包打听）
	 */
	blockTieBaRobot() {
		log.info(`uni-app ===> 屏蔽贴吧机器人（贴吧包打听）`);
		TiebaUniAppComment.watchComment((commentContainerInfoList, observer) => {
			for (let index = 0; index < commentContainerInfoList.length; index++) {
				const commentContainerInfo = commentContainerInfoList[index];
				// 发帖人id
				const author_id =
					commentContainerInfo.data.author_id ||
					commentContainerInfo.data?.author?.id;
				const portrait = commentContainerInfo.data?.author?.portrait;
				// 评论内容
				const content = commentContainerInfo.data.content;
				if (TiebaPostApi.isRobot({ id: author_id, portrait })) {
					log.warn(`删除贴吧机器人评论内容：` + JSON.stringify(content));
					commentContainerInfo.remove();
				}
			}
		});
	},
	/**
	 * 楼中楼回复弹窗手势返回
	 */
	optimizationLzlPostBackGestureReturn() {
		log.info(`uni-app ===> 楼中楼回复弹窗手势返回`);
		let gestureBack = new GestureBack({
			hash: GeastureBackHashConfig.seeLzlReply,
			useUrl: true,
			beforeHistoryBackCallBack(isUrlChange) {
				if (isUrlChange) {
					closeDialogByUrlChange();
				}
			},
		});
		function closeDialogByUrlChange() {
			let $lzlCloseIcon = $<HTMLElement>(".lzl-close-icon");
			if ($lzlCloseIcon) {
				$lzlCloseIcon.click();
			} else {
				Qmsg.error(`未找到关闭楼中楼回复弹窗的按钮`);
			}
		}
		DOMUtils.on(document, "click", ".lzl-wrapper", (event) => {
			log.info(`点击楼中楼回复`);
			gestureBack.enterGestureBackMode();
		});
		DOMUtils.on(document, "click", ".lzl-close-icon", (event) => {
			log.info(`点击关闭按钮-关闭楼中楼回复弹窗`);
			gestureBack.quitGestureBackMode();
		});
		DOMUtils.on(
			document,
			"click",
			".lzl-float-container .error-close",
			(event) => {
				log.info(`点击遮罩层-关闭楼中楼回复弹窗`);
				gestureBack.quitGestureBackMode();
			}
		);
	},
	/**
	 * 图片预览手势返回
	 */
	optimizationImagePreviewBackGestureReturn() {
		log.info(`uni-app ===> 图片预览手势返回`);
		let gestureBack = new GestureBack({
			hash: GeastureBackHashConfig.previewImage,
			useUrl: true,
			beforeHistoryBackCallBack(isUrlChange) {
				if (isUrlChange) {
					closeByUrlChange();
				}
			},
		});
		function closeByUrlChange() {
			let $closeIcon = $<HTMLElement>(".img-preview .back-icon-con");
			if ($closeIcon) {
				$closeIcon.click();
			} else {
				log.warn(`未找到退出图片预览模式的按钮`);
			}
		}
		DOMUtils.on(document, "click", "img", (event) => {
			let $click = event.target as HTMLImageElement;
			let $parent = $click.parentElement!;
			if (
				$parent.localName === "uni-image" &&
				$parent.classList.contains("pb-image")
			) {
				// <uni-app>内的图片
				gestureBack.enterGestureBackMode();
				utils
					.waitNode(".img-preview .back-icon-con", 10000)
					.then(($backIcon) => {
						if (!$backIcon) {
							return;
						}
						DOMUtils.on($backIcon, "click", () => {
							gestureBack.quitGestureBackMode();
						});
					});
			}
		});
	},
	/**
	 * 修复搜索功能
	 */
	repairSearch() {
		log.info(`uni-app ===> 修复搜索功能`);
		utils
			.waitNode(".nav-bar .nav-bar-forum-info", 10000)
			.then(($navBarForumInfo) => {
				if (!$navBarForumInfo) {
					return;
				}
				let $navBar = $navBarForumInfo.closest<HTMLDivElement>(".nav-bar")!;
				let $moreBtnDesc = DOMUtils.createElement("div", {
					className: "more-btn-desc",
					innerText: "搜索",
				});
				$navBar.appendChild($moreBtnDesc);
				addStyle(/*css*/ `
				.nav-bar .more-btn-desc{
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
			});
	},
	/**
	 * 修复超链接跳转
	 */
	repairAnchorLink() {
		DOMUtils.on(
			document,
			"click",
			(event) => {
				let $click = event.composedPath()[0] as HTMLElement;
				if ($click.nodeType === Node.ELEMENT_NODE && $click.classList) {
					if ($click.classList.contains("pb-link")) {
						utils.preventEvent(event);
						let vue3Ins = VueUtils.getVue3($click);
						let vue2Ins = VueUtils.getVue($click)!;
						let link: string | null =
							vue3Ins?.props?.content?.link || vue2Ins?.content?.link;
						if (typeof link === "string") {
							log.info(`点击超链接：` + link);
							window.open(link, "_blank");
						} else {
							let $uniText = $click.closest("uni-text.pb-content-item");
							let vueIns = VueUtils.getVue($uniText);
							let section =
								vueIns?.$vnode?.context?.sectionData?.[
									vueIns?.$vnode?.context?.sectionIdx
								];
							if (section != null) {
								let findValue = section["content"].find(
									(item: any) =>
										item.type == 1 &&
										item.text == ($click.textContent || $click.innerText)
								);
								if (findValue) {
									let link = findValue["link"];
									log.info(`点击超链接：` + link);
									window.open(link, "_blank");
								} else {
									log.error("获取链接失败");
									log.error($click, vue3Ins, $uniText, vueIns, section);
									Qmsg.error("获取链接失败");
								}
							} else {
								log.error("获取链接失败");
								log.error($click, vue3Ins);
								Qmsg.error("获取链接失败");
							}
						}
					} else if ($click.classList.contains("pb-at")) {
						utils.preventEvent(event);
						log.info("点击@");
						let vue3Ins = VueUtils.getVue3($click);
						let vueIns = VueUtils.getVue($click);
						let un: string | null =
							vue3Ins?.props?.content?.text || vueIns?.content?.text;
						let type: number | null =
							vue3Ins?.props?.content?.type || vueIns?.content?.type;
						if (un == null) {
							log.error("获取用户un失败");
							Qmsg.error("获取用户un失败");
							return;
						}
						un = un.replace(/^@/g, "");
						let userHomeUrl = TiebaUrlHandler.getUserHomeByUN(un);
						window.open(userHomeUrl, "_blank");
					}
				}
			},
			{
				capture: true,
			}
		);
	},
};
