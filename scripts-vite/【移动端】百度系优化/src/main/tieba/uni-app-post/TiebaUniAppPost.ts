import { addStyle, DOMUtils, log, utils } from "@/env";
import { VueUtils } from "@/utils/VueUtils";
import Qmsg from "qmsg";
import { TiebaUrlApi } from "../api/TiebaApi";
import { PopsPanel } from "@/setting/setting";
import { GM_getValue, GM_setValue } from "ViteGM";

export const TiebaUniAppPost = {
	init() {
		utils.waitNode("uni-app", 10000).then(($uniApp) => {
			if (!$uniApp) {
				return;
			}
			log.info(`uni-app ===> 本页面为uni-app页面`);
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
				"baidu-tieba-uni-app-post-addScrollTopButtonInForum",
				(value) => {
					return this.addScrollTopButton(value);
				},
				(key, value) => {
					return !!value;
				}
			);
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
					"baidu-tieba-uni-app-post-optimizationLzlPostBackGestureReturn",
					() => {
						this.optimizationLzlPostBackGestureReturn();
					}
				);
			});
		});
	},
	/**
	 * 判断页面是否是uni-app
	 */
	isUniApp() {
		return Boolean(document.querySelector("uni-app"));
	},
	/**
	 * 覆盖页面的加载更多按钮，可实现加载更多评论
	 */
	overloadLoadMore() {
		DOMUtils.on(
			document,
			"click",
			"uni-app .load-more",
			(event) => {
				let $loadMore = event.target;
				utils.preventEvent(event);
				let $vueIns = VueUtils.getVue3($loadMore);
				if (typeof $vueIns?.attrs?.onHandleClick === "function") {
					log.success(`uni-app ===> 加载更多评论`);
					$vueIns.attrs.onHandleClick();
				} else {
					log.warn("uni-app ==> 点击加载更多失败");
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
				let $loadMore =
					document.querySelector<HTMLDivElement>("uni-app .load-more");
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
		DOMUtils.on(
			document,
			"click",
			".pic-popup-guide-thread-wrapper .thread-guide-item-wake",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLDivElement;
				let $vueIns = VueUtils.getVue3($click);
				if (typeof $vueIns?.props?.config?.param?.tid === "number") {
					let tid = $vueIns.props.config.param.tid;
					let url = TiebaUrlApi.getPost(tid);
					window.open(url, "_blank");
				} else {
					log.error(["获取tid失败", $click]);
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
		DOMUtils.on(
			document,
			"click",
			".player-line-left",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLDivElement;
				let $vueIns = VueUtils.getVue3($click);
				if (typeof $vueIns?.props?.playerInfo?.portrait === "string") {
					let portrait = $vueIns.props.playerInfo.portrait;
					let url = TiebaUrlApi.getUserHome(portrait);
					window.open(url, "_blank");
				} else {
					log.error(["获取portrait失败", $click]);
					Qmsg.error("获取portrait失败");
				}
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 阻止唤醒app
	 */
	preventWakeApp() {
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
					document.querySelectorAll<HTMLDivElement>(
						"uni-view.reply-top .switch-tab .tab-item"
					)
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
							utils.mutationVisible($item, (entries, observer) => {
								observer.disconnect();
								setTimeout(() => {
									$item.click();
								}, 250);
							});
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
		utils.waitNode("uni-view#tab-list", 10000).then(($tabList) => {
			if (!$tabList) {
				return;
			}
			log.info(`启用观察器观察评论内容改变以进行去重`);
			utils.mutationObserver($tabList, {
				config: {
					subtree: true,
					childList: true,
				},
				callback(mutations, observer) {
					const $pbCommentItemContainerList = Array.from(
						document.querySelectorAll<HTMLDivElement>(
							".pb-comment-item-container"
						)
					);
					const commentIdList: number[] = [];
					for (
						let index = 0;
						index < $pbCommentItemContainerList.length;
						index++
					) {
						const $pbCommentItemContainer = $pbCommentItemContainerList[index];
						const $vueIns = VueUtils.getVue3($pbCommentItemContainer);
						const commentId = $vueIns?.props?.commentData?.id;
						const content = $vueIns?.props?.commentData?.content;
						const floor = $vueIns?.props?.commentData?.floor;
						if (typeof commentId === "number") {
							if (commentIdList.includes(commentId)) {
								log.warn(
									`删除重复楼层${floor}，id: ${commentId}，内容：` +
										JSON.stringify(content)
								);
								$pbCommentItemContainer.remove();
								$pbCommentItemContainerList.splice(index, 1);
								index--;
							} else {
								commentIdList.push(commentId);
							}
						}
					}
				},
			});
		});
	},
	/**
	 * 楼中楼回复弹窗后退手势优化
	 */
	optimizationLzlPostBackGestureReturn() {
		let isClosingDialog = false;
		/**
		 * 设置浏览器历史地址
		 * @param event
		 */
		function popstateEvent(event: Event) {
			utils.preventEvent(event);
			if (isClosingDialog) {
				return;
			}
			log.success("触发popstate事件");
			removePopStateEvent();
		}

		/**
		 * 设置popstate事件
		 */
		function setPopStateEvent() {
			/* 监听地址改变 */
			log.success("监听popstate事件");
			window.history.pushState({}, "", "#/seeLzlReply");
			DOMUtils.on(window, "popstate", popstateEvent, {
				capture: true,
			});
		}

		/**
		 * 允许浏览器后退并关闭小窗
		 */
		async function removePopStateEvent() {
			isClosingDialog = true;
			log.success("location地址后退并关闭评论弹窗");
			closeDialogByUrlChange();
			while (true) {
				if (globalThis.location.hash.endsWith("seeLzlReply")) {
					log.info("后退！");
					globalThis.history.back();
					// VueUtils.getVue(TiebaComment.vueRootView)?.$router.back();
					await utils.sleep(150);
				} else {
					break;
				}
			}
			log.success("停止popstate事件监听");
			DOMUtils.off(window, "popstate", popstateEvent, { capture: true });
			isClosingDialog = false;
		}
		function closeDialogByUrlChange() {
			let $lzlCloseIcon =
				document.querySelector<HTMLElement>(".lzl-close-icon");
			if ($lzlCloseIcon) {
				$lzlCloseIcon.dispatchEvent(
					new CustomEvent("click", {
						detail: {
							from: "urlchange",
						},
					})
				);
			} else {
				log.warn(`未找到关闭楼中楼回复弹窗的按钮`);
			}
		}
		DOMUtils.on(document, "click", ".lzl-wrapper", (event) => {
			log.info(`点击楼中楼回复`);
			setPopStateEvent();
		});
		DOMUtils.on(document, "click", ".lzl-close-icon", (event) => {
			log.info(`点击关闭楼中楼回复弹窗`);
			let detail = event.detail;
			// @ts-ignore
			if (detail.from === "urlchange") {
				return;
			}
			removePopStateEvent();
		});
	},
};
