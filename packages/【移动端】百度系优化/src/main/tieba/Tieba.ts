import { GM_addStyle, unsafeWindow } from "ViteGM";
import { DOMUtils, log, utils } from "@/env";
import TieBaShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/setting/setting";
import { BaiduRouter } from "@/router/BaiduRouter";
import { BaiduHook } from "@/hook/BaiduHook";
import { TiebaTopic } from "./Topic/TiebaTopic";
import { TiebaHybrid } from "./Hybrid/TiebaHybrid";
import { TiebaBaNei } from "./BaNei/TiebaBaNei";
import { TiebaSearch } from "./TiebaSearch";
import { TiebaData } from "./Home/data";
import { TiebaCore } from "./TiebaCore";
import { TiebaPost } from "./Post/TiebaPost";
import { TiebaHome } from "./Home/TiebaHome";

/**
 * 百度贴吧
 * document.querySelector("div.app-view").__vue__
 * + disablePbGuide 是否隐藏顶部导航栏
 * + loading 是否隐藏整个页面的内容（清空）
 * + isVideoThread 该帖子是否是个视频，是的话把帖子变成视频样式
 * + isErrorThread 该帖子是否发生错误(被禁用)，是的话全屏变成显示【贴子不存在或者已被删除】
 * + isNoForumThread 该帖子是否是来自动态
 * + isShowLoginWakeModal 是否显示需要登录的弹窗【继续操作需要登录贴吧账号】
 * + isHitMedicalPost 是否是精选回复的帖子，是的话隐藏顶部的工具栏，且修改帖子主内容的背景（淡蓝色），修改回复的标识为【精选回复】
 * + isPornographicComment 是否隐藏评论
 * + isGreyPage 页面是否变成灰色，包括文字
 * + isFromFengchaoAd 是否是点击广告进的帖子，是的话整个页面被广告提示覆盖【打开贴吧APP，继续浏览】
 * + isAutoInvoke 猜测是自动调用各种唤醒
 * + isShowResourceFixedCard 是否显示底部悬浮的工具栏【资源合集】卡片
 * + slientUpNewConfig 里面应该是各种静默弹窗的配置，存储自localStorage
 *
 *
 * document.querySelector("div.tb-mobile-viewport").__vue_
 * + isShowModal 是否显示需要登录的弹窗【继续操作需要登录贴吧账号】
 */
const BaiduTieBa = {
	init() {
		GM_addStyle(TieBaShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenu(
			"baidu_tieba_clickOnTheOwnerSAvatarToCorrectlyRedirectToTheHomepage",
			() => {
				TiebaCore.addAuthorClickEvent();
			}
		);
		PopsPanel.execMenu("baidu_tieba_autoJumpToMainHost", () => {
			TiebaCore.autoJumpToMainHost();
		});
		PopsPanel.execMenu("baidu_tieba_clientCallMasquerade", () => {
			TiebaCore.clientCallMasquerade();
		});
		BaiduHook.hijackElementAppendChild();
		PopsPanel.execMenuOnce("baidu_tieba_hijack_wake_up", () => {
			BaiduHook.hijackFunctionCall_WebPack_TieBa();
		});
		if (BaiduRouter.isTieBaIndex()) {
			/* 首页 */
			log.success("Router: 首页");
			PopsPanel.execMenu("baidu_tieba_index_openANewTab", () => {
				TiebaBaNei.openANewTab();
			});
		} else if (BaiduRouter.isTieBaPost()) {
			/* 帖子 */
			log.success("Router: 帖子");
			TiebaPost.init();
		} else if (BaiduRouter.isTieBaNewTopic()) {
			/* 话题热议 */
			log.success("Router: 话题热议");
			TiebaTopic.init();
		} else if (BaiduRouter.isTieBaHybrid()) {
			/* 搜索综合 */
			log.success("Router: 搜索综合");
			TiebaHybrid.init();
		} else if (BaiduRouter.isTieBaNei()) {
			/* 吧内 */
			log.success("Router: 吧内");
			TiebaBaNei.init();
		} else if (BaiduRouter.isTieBaHome()) {
			/* 主页 */
			log.success("Router: 用户主页");
			TiebaHome.init();
			return;
		} else {
			log.error("Router: 未知");
		}
		PopsPanel.execMenu("baidu_tieba_add_scroll_top_button_in_forum", () => {
			TiebaCore.addScrollTopButton();
		});
		PopsPanel.execMenu("baidu_tieba_add_search", () => {
			TiebaSearch.init();
		});
		DOMUtils.ready(function () {
			PopsPanel.execMenu("baidu_tieba_checkSkeleton", () => {
				TiebaCore.checkSkeleton();
			});
			/* 初始化贴吧数据 */
			/* 例如：吧名，高清图片 */
			utils
				.waitAnyNode<HTMLDivElement>([".tb-mobile-viewport", ".main-page-wrap"])
				.then(async () => {
					let interval = setInterval(() => {
						TiebaData.forumName = TiebaCore.getCurrentForumName();
						if (TiebaData.forumName) {
							log.info("当前吧：" + TiebaData.forumName);
							if (PopsPanel.getValue("baidu_tieba_optimize_image_preview")) {
								TiebaPost.initPostImageInfo();
							}
							clearInterval(interval);
						}
					}, 250);
				});
		});
	},
};

export { BaiduTieBa };
