import { DOMUtils, addStyle, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import Qmsg from "qmsg";
import { VueUtils } from "@components/utils/VueUtils";
import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";

export const TiebaHybrid = {
	init() {
		this.blockAds();
		Panel.execMenu("baidu_tieba_hybrid_search_openANewTab", () => {
			this.openANewTab();
		});
	},
	/**
	 * 屏蔽广告
	 */
	blockAds() {
		return [
			CommonUtil.addBlockCSS(
				/* 顶部横幅 */
				".tb-index-navbar .fix-nav-guide-bar",
				/* 底部的百度贴吧app内打开 */
				".tb-index-navbar div:has(.fix-nav-bar-bottom)"
			),
			addStyle(/*css*/ `
			/* 把下面的内容往上移 */
			#app_container ul.navbar-box{
				top: 0px !important;
			}
			/* 把下面的内容往上移 */
			#app_container .navbar-view{
				padding-top: 0px !important;
			} 
		  	`),
		];
	},
	/**
	 * 新标签页打开
	 */
	openANewTab() {
		DOMUtils.on(
			document,
			"click",
			".scroll-list-wrapper .threadcardclass",
			function (event) {
				utils.preventEvent(event);
				let clickNode = event.target;
				let tid = VueUtils.getVue(clickNode)?.tid;
				if (utils.isNull(tid)) {
					Qmsg.error("获取帖子的tid失败");
					return;
				}
				window.open(TiebaUrlHandler.getPost(tid), "_blank");
			},
			{
				capture: true,
			}
		);
	},
};
