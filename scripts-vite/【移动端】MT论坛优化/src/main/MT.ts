import { Panel } from "@components/setting/panel";
import { MTBlackHome } from "./MTBlackHome";
import { MTOnlineUser } from "./MTOnlineUser";
import { MTIdentifyLinks } from "./MTIdentifyLinks";
import { MTAutoSignIn } from "./sign/MTAutoSignIn";
import { addStyle, DOMUtils, log, utils } from "@/env";
import { MTRouter } from "@/router/MTRouter";
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
import { GM } from "ViteGM";

export const MT = {
  $flag: {
    showUserUID_initCSS: false,
  },
  init() {
    if (
      MTRouter.isPage() ||
      MTRouter.isGuide() ||
      MTRouter.isPlate() ||
      MTRouter.isPost() ||
      MTRouter.isSearch() ||
      MTRouter.isSpace()
    ) {
      Panel.execMenuOnce("mt-show-user-uid", () => {
        this.showUserUID();
      });
    }

    if (MTRouter.isSearch() || MTRouter.isGuide() || MTRouter.isSpace() || MTRouter.isPlate()) {
      Panel.execMenuOnce("mt-small-window", () => {
        MTSmallWindow.init();
      });
    }

    if (MTRouter.isPost()) {
      log.info(`Router: 帖子`);
      MTForumPost.init();
    } else if (MTRouter.isSearch()) {
      log.info(`Router: 搜索`);
      MTSearch.init();
    } else if (MTRouter.isKMiSign()) {
      log.info(`Router: 签到`);
      MTSign.init();
    } else if (MTRouter.isSpace() || MTRouter.isSpaceWithAt()) {
      log.info(`Router: 空间`);
      MTSpace.init();
    } else if (MTRouter.isGuide()) {
      log.info(`Router: 导读`);
      MTGuide.init();
    } else if (MTRouter.isPostPublish()) {
      log.info("Router: 发帖页面");
      MTForumPostPublish.init();
    } else {
      log.error(`Router: 未适配的链接 ==> ` + window.location.href);
    }

    DOMUtils.ready(() => {
      Panel.execMenuOnce("mt-black-home", () => {
        MTBlackHome.init();
      });
      Panel.execMenuOnce("mt-online-user", () => {
        MTOnlineUser.init();
      });
      Panel.execMenuOnce("mt-post-paidThemePost", () => {
        MTPaidThemePost.init();
      });
      Panel.execMenuOnce("mt-ownBlock", () => {
        MTOwnBlock.init();
      });
      Panel.execMenuOnce("mt-post-comment-filter", () => {
        MTCommentFilter.init();
      });
      Panel.execMenuOnce("mt-productListingReminder", () => {
        MTProductListingReminder.init();
      });
      Panel.execMenuOnce("mt-customizeUserLabels", () => {
        MTCustomizeUserLabels.init();
      });
      Panel.execMenu("mt-auto-sign", () => {
        MTAutoSignIn.init();
      });
      Panel.execMenu("mt-extend-cookie-expire", () => {
        this.extendCookieExpire();
      });
      if (!MTRouter.isPostPublish_edit()) {
        // 不在帖子编辑页面执行链接识别
        Panel.execMenuOnce("mt-link-text-to-hyperlink", () => {
          MTIdentifyLinks();
        });
      }
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
              DOMUtils.preventEvent(event);
              let status = await utils.copy(mt_uid);
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
  /**
   * 延长cookie有效期
   */
  async extendCookieExpire() {
    log.info(`延长cookie有效期`);
    let cookieList = await GM.cookie.list({});
    let needExtendCookieNameList: string[] = ["_auth", "_saltkey", "_client_created", "_client_token"];
    cookieList.forEach(async (cookieItem) => {
      if (cookieItem.session) {
        return;
      }
      let expireTime = cookieItem.expirationDate!;
      let nowTime = Date.now() / 1000;
      if (expireTime < nowTime) {
        // 已过期
        return;
      }
      let _30days = 60 * 60 * 24 * 30;
      if (expireTime - nowTime > _30days) {
        // 过期时间大于30天，无需延长
        return;
      }
      let flag = needExtendCookieNameList.find((it) => cookieItem.name.endsWith(it));
      if (!flag) {
        return;
      }
      GM.cookie
        .set({
          name: cookieItem.name,
          value: cookieItem.value,
          expirationDate: cookieItem.expirationDate! + _30days,
        })
        .then(() => {
          log.info(`延长Cookie +30天成功：${cookieItem.name}`);
        })
        .catch(() => {
          log.error(`延长Cookie +30天失败：${cookieItem.name}`);
        });
    });
  },
};
