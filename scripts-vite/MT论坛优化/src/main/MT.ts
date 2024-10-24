import { PopsPanel } from "@/setting/setting";
import { MTIdentifyLinks } from "./MTIdentifyLinks";
import { MTAutoSignIn } from "./sign/MTAutoSignIn";
import { addStyle, DOMUtils, log, utils } from "@/env";
import { Router } from "@/router/router";
import { MTForumPost } from "./forum-post/MTForumPost";
import { MTGuide } from "./guide/MTGuide";
import { MTCommentFilter } from "./forum-post/MTCommentFilter";
import { MTProductListingReminder } from "./MTProductListingReminder";
import { unsafeWindow } from "ViteGM";

export const MT = {
	$flag: {
		showUserUID_initCSS: false,
	},
	init() {
		PopsPanel.onceExec("mt-MTCommentFilter", () => {
			MTCommentFilter.init();
		});
		PopsPanel.onceExec("mt-MTProductListingReminder", () => {
			MTProductListingReminder.init();
		});
		PopsPanel.execMenuOnce("mt-link-text-to-hyperlink", () => {
			MTIdentifyLinks();
		});
		if (Router.isPost()) {
			log.info(`Router: 帖子`);
			MTForumPost.init();
		} else if (Router.isGuide()) {
			log.info(`Router: 导读`);
			MTGuide.init();
		} else {
			log.error(`Router: 未适配的链接 ==> ` + window.location.href);
		}

		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("mt-addLatestPostBtn", () => {
				this.addLatestPostBtn();
			});
			PopsPanel.execMenu("mt-auto-sign", () => {
				MTAutoSignIn.init();
			});
		});
	},
	/**
	 * 新增【最新发表】
	 */
	addLatestPostBtn() {
		log.info(`新增【最新发表】`);
		DOMUtils.append(
			"#comiis_nv .wp.comiis_nvbox.cl ul",
			/*html*/ `
			<li id="latest_publication">
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			</li>
		`
		);
		if (window.location.href.includes("/forum.php?mod=guide&view=newthread")) {
			DOMUtils.removeClass("#mn_forum_10", "a");
			DOMUtils.css(
				"#latest_publication a",
				"background",
				'url("https://cdn-bbs.mt2.cn/template/comiis_mi/img/nv_a.png") repeat-x 50% -50px'
			);
		}
	},
};
