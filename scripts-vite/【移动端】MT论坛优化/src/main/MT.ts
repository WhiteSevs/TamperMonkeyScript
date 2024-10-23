import { PopsPanel } from "@/setting/setting";
import { MTBlackHome } from "./MTBlackHome";
import { MTOnlineUser } from "./MTOnlineUser";
import { MTIdentifyLinks } from "./MTIdentifyLinks";
import { MTAutoSignIn } from "./sign/MTAutoSignIn";
import { addStyle, DOMUtils, log, utils } from "@/env";
import { Router } from "@/router/router";
import { MTForumPost } from "./forum-post/MTForumPost";
import { ElementUtils } from "@/utils/ElementUtils";
import { MTRegExp } from "@/utils/MTRegExp";
import Qmsg from "qmsg";
import { MTSearch } from "./search/MTSearch";
import { MTSign } from "./sign/MTSign";
import { MTSpace } from "./space/MTSpace";
import { MTPaidThemePost } from "./forum-post/MTPaidThemePost";
import { MTSmallWindow } from "./forum-post/MTSmallWindow";
import { MTGuide } from "./MTGuide";
import { MTOwnBlock } from "./MTOwnBlock";
import { MTCommentFilter } from "./forum-post/MTCommentFilter";
import { MTProductListingReminder } from "./MTProductListingReminder";
import { MTCustomizeUserLabels } from "./MTCustomizeUserLabels";
import { MTForumPostPublish } from "./forum-post-publish/MTForumPostPublish";

export const MT = {
	$flag: {
		showUserUID_initCSS: false,
	},
	init() {
		PopsPanel.execMenuOnce("mt-black-home", () => {
			MTBlackHome.init();
		});
		PopsPanel.execMenuOnce("mt-online-user", () => {
			MTOnlineUser.init();
		});
		PopsPanel.execMenuOnce("mt-post-paidThemePost", () => {
			MTPaidThemePost.init();
		});
		PopsPanel.execMenuOnce("mt-ownBlock", () => {
			MTOwnBlock.init();
		});
		PopsPanel.execMenuOnce("mt-link-text-to-hyperlink", () => {
			MTIdentifyLinks();
		});
		PopsPanel.execMenuOnce("mt-post-comment-filter", () => {
			MTCommentFilter.init();
		});
		PopsPanel.execMenuOnce("mt-productListingReminder", () => {
			MTProductListingReminder.init();
		});
		PopsPanel.execMenuOnce("mt-customizeUserLabels", () => {
			MTCustomizeUserLabels.init();
		});
		if (
			Router.isPage() ||
			Router.isGuide() ||
			Router.isPlate() ||
			Router.isPost() ||
			Router.isSearch() ||
			Router.isSpace()
		) {
			PopsPanel.execMenuOnce("mt-show-user-uid", () => {
				this.showUserUID();
			});
		}

		if (Router.isSearch() || Router.isGuide() || Router.isSpace()) {
			PopsPanel.execMenuOnce("mt-small-window", () => {
				MTSmallWindow.init();
			});
		}

		if (Router.isPost()) {
			log.info(`Router: 帖子`);
			MTForumPost.init();
		} else if (Router.isSearch()) {
			log.info(`Router: 搜索`);
			MTSearch.init();
		} else if (Router.isKMiSign()) {
			log.info(`Router: 签到`);
			MTSign.init();
		} else if (Router.isSpace() || Router.isSpaceWithAt()) {
			log.info(`Router: 空间`);
			MTSpace.init();
		} else if (Router.isGuide()) {
			log.info(`Router: 导读`);
			MTGuide.init();
		} else if (Router.isPostPublish()) {
			log.info("Router: 发帖页面");
			MTForumPostPublish.init();
		} else {
			log.error(`Router: 未适配的链接 ==> ` + window.location.href);
		}

		DOMUtils.ready(() => {
			PopsPanel.execMenu("mt-auto-sign", () => {
				MTAutoSignIn.init();
			});
		});
	},
	/**
	 * 显示用户UID
	 */
	showUserUID() {
		log.info(`显示用户UID`);
		if (!this.$flag.showUserUID_initCSS) {
			this.$flag.showUserUID_initCSS = true;
			addStyle(/*css*/ `
			.postli_top_tximg + h2{
 				height: auto;
			}
			.comiis_postli_top.bg_f.b_t h2{
            	height: auto;
          	}
			`);
		}

		let lockFn = new utils.LockFunction(() => {
			let forumList = utils.getNodeListValue(
				ElementUtils.comiisForumList(),
				ElementUtils.comiisPostli(),
				ElementUtils.comiisMmlist()
			);
			if (forumList.length) {
				forumList.forEach(($post) => {
					let mtUIDOM = $post.querySelector(".gm-custom-label-uid");
					if (mtUIDOM) {
						return;
					}
					let mt_uid_array = Array.from($post.querySelectorAll("a"))
						.map((item) => {
							let url = item.href;
							let uid = url.match(MTRegExp.uid);
							if (uid) {
								return uid[uid.length - 1];
							}
						})
						.filter((item) => item != null);
					if (mt_uid_array.length) {
						let mt_uid = mt_uid_array[0];
						let uid_control = document.createElement("a");
						let $topLev = $post.querySelector(".top_lev")!;
						uid_control.className = $topLev.className;
						uid_control.classList.add("gm-custom-label-uid");
						uid_control.style.cssText = `background: #FF7600 !important;`;
						uid_control.innerHTML = "UID:" + mt_uid;
						DOMUtils.on(uid_control, "click", async (event) => {
							utils.preventEvent(event);
							let status = await utils.setClip(mt_uid);
							if (status) {
								Qmsg.success(`${mt_uid}已复制`);
							} else {
								Qmsg.error(`${mt_uid}复制失败`);
							}
						});

						$topLev.parentElement!.append(uid_control);
					}
				});
			}
		});

		let mutation = utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			callback() {
				lockFn.run();
			},
		});
	},
};
