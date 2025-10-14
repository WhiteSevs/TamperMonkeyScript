import { Panel } from "@components/setting/panel";
import { MTIdentifyLinks } from "./MTIdentifyLinks";
import { MTAutoSignIn } from "./sign/MTAutoSignIn";
import { DOMUtils, log } from "@/env";
import { MTRouter } from "@/router/MTRouter";
import { MTForumPost } from "./forum-post/MTForumPost";
import { MTGuide } from "./guide/MTGuide";
import { MTCommentFilter } from "./forum-post/MTCommentFilter";
import { MTProductListingReminder } from "./MTProductListingReminder";
import { GM } from "ViteGM";
import { MTBlackHome } from "./MTBlackHome";
import { MTOnlineUser } from "./MTOnlineUser";

export const MT = {
  $flag: {
    showUserUID_initCSS: false,
  },
  init() {
    Panel.onceExec("mt-MTCommentFilter", () => {
      MTCommentFilter.init();
    });
    if (MTRouter.isPost()) {
      log.info(`Router: 帖子`);
      MTForumPost.init();
    } else if (MTRouter.isGuide()) {
      log.info(`Router: 导读`);
      MTGuide.init();
    } else {
      log.error(`Router: 未适配的链接 ==> ` + window.location.href);
    }

    DOMUtils.ready(() => {
      Panel.onceExec("mt-MTProductListingReminder", () => {
        MTProductListingReminder.init();
      });
      Panel.onceExec("mt-blackHome", () => {
        MTBlackHome.init();
      });
      Panel.onceExec("mt-onlineUser", () => {
        MTOnlineUser.init();
      });
      Panel.execMenuOnce("mt-addLatestPostBtn", () => {
        return this.addLatestPostBtn();
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
          return MTIdentifyLinks();
        });
      }
    });
  },
  /**
   * 新增【最新发表】
   */
  addLatestPostBtn() {
    log.info(`新增【最新发表】`);
    const $latest_publication = DOMUtils.createElement("li", {
      id: "latest_publication",
      innerHTML: /*html*/ `
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			`,
    });
    const $link = $latest_publication.querySelector("a")!;
    DOMUtils.append("#comiis_nv .wp.comiis_nvbox.cl ul", $latest_publication);
    if (window.location.href.includes("/forum.php?mod=guide&view=newthread")) {
      DOMUtils.removeClass("#mn_forum_10", "a");
      DOMUtils.css(
        $link,
        "background",
        'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px'
      );
    }
    return [$latest_publication];
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
