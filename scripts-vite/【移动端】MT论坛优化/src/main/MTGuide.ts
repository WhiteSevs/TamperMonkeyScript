import { addStyle, httpx, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import DOMUtils from "@whitesev/domutils";
import Qmsg from "qmsg";

export const MTGuide = {
  init() {
    DOMUtils.ready(() => {
      Panel.execMenuOnce("mt-guide-showLatestPost", () => {
        this.showLatestPost();
      });
    });
  },
  /**
   * 显示最新帖子
   */
  showLatestPost() {
    log.info(`显示最新帖子`);

    /**
     * 获取轮播的最新的帖子
     */
    async function getLatestPostForum() {
      let response = await httpx.get("/forum.php?mod=guide&view=hot", {
        fetch: true,
        allowInterceptConfig: false,
      });
      if (!response.status) {
        Qmsg.error("获取轮播失败");
        return;
      }

      if (response.data.responseText.indexOf('<script src="/_guard/auto.js"></script>') !== -1) {
        Qmsg.error("获取轮播失败 未知的/_guard/auto.js文件");
        return;
      }
      var doc = DOMUtils.toElement(response.data.responseText, true, true);
      var postForumList = doc.querySelectorAll<HTMLUListElement>('div.comiis_mh_kxtxt div[id*="comiis_mh_kxtxt"] ul');
      if (postForumList.length === 0) {
        Qmsg.error("获取轮播失败");
        return;
      } else {
        var result: {
          href: string;
          title: string;
        }[] = [];
        postForumList[postForumList.length - 1].querySelectorAll("a").forEach((item) => {
          result.push({
            href: item.getAttribute("href")!,
            title: item.getAttribute("title")!,
          });
        });
      }
      return result;
    }
    getLatestPostForum().then((postInfoList) => {
      if (!postInfoList) {
        return;
      }

      addStyle(/*css*/ `
            div.comiis_mh_kxtxt_owm{
                margin-top: 10px;
            }
            div.comiis_mh_kxtxt_owm li{ 
                height: 30px;
                width: 100%;
                display: flex;
                align-items: center;
            }
            div.comiis_mh_kxtxt_owm span{
                background: #FF705E;
                color: #fff;
                float: left;
                height: 18px;
                line-height: 18px;
                padding: 0 3px;
                margin-top: 2px;
                margin-right: 10px;
                overflow: hidden;
                border-radius: 2px;
                margin-left: 10px;
            }
            div.comiis_mh_kxtxt_owm a{
                display: block;
                font-size: 14px;
                font-weight: 400;
                height: 22px;
                line-height: 22px;
                overflow: hidden;
                min-width: 100px;
                max-width: 80%;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-right: 10px;
            }
            `);
      var latestPostForumHTML = "";

      utils.sortListByProperty(
        postInfoList,
        (item) => {
          var forumPostNumMatch = item["href"].match(/thread-(.+?)-/i)!;
          let forumPostNum = parseInt(forumPostNumMatch[forumPostNumMatch.length - 1]);
          return forumPostNum;
        },
        true
      );
      log.info("导读内容", postInfoList);
      postInfoList.forEach((item) => {
        latestPostForumHTML += /*html*/ `
                <li>
                    <span>新帖</span>
                    <a href="${item.href}" title="${item.title}" target="_blank">${item.title}</a>
                </li>`;
      });
      let $comiis_xznlist = document.querySelector<HTMLElement>(".comiis_forumlist.comiis_xznlist")!;
      DOMUtils.before(
        $comiis_xznlist,
        `<div class="comiis_mh_kxtxt bg_f comiis_mh_kxtxt_owm"><ul>${latestPostForumHTML}</ul></div>`
      );
    });
  },
};
