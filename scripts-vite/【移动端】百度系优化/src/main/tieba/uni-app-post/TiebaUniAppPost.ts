import { DOMUtils, log, utils } from "@/env";
import { VueUtils } from "@/utils/VueUtils";
import Qmsg from "qmsg";
import { TiebaUrlApi } from "../api/TiebaApi";
import { PopsPanel } from "@/setting/setting";

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
				}
			},
			{
				capture: true,
			}
		);
		DOMUtils.on(
			document,
			"scroll",
			void 0,
			async () => {
				let $loadMore =
					document.querySelector<HTMLDivElement>("uni-app .load-more");
				if ($loadMore && utils.isVisible($loadMore, true)) {
					$loadMore.click();
				}
			},
			{
				capture: true,
				passive: true,
				once: false,
			}
		);
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
};
