import { addStyle, DOMUtils, httpx, log, utils } from "@/env";
import { MTRouter } from "@/router/MTRouter";
import { Panel } from "@components/setting/panel";
import { ElementUtils } from "@/utils/ElementUtils";
import { MTRegExp } from "@/utils/MTRegExp";
import Qmsg from "qmsg";

export const MTSpace = {
  init() {
    Panel.execMenuOnce("mt-space-repairEnterSpace", () => {
      this.repairEnterSpace();
    });
    DOMUtils.ready(() => {
      Panel.execMenuOnce("mt-space-showCommentContent", () => {
        this.showCommentContent();
      });
    });
  },
  /**
   * 修复无法进入空间
   */
  repairEnterSpace() {
    log.info(`修复无法进入空间`);
    if (MTRouter.isSpace()) {
      let hrefParamsMatchArray = window.location.href.match(/home.php\?(.+)/gi)!;
      let href_params = hrefParamsMatchArray[hrefParamsMatchArray.length - 1];
      let params_split = href_params.split("&");
      if (params_split.length == 2 && href_params.indexOf("uid=") != -1 && href_params.indexOf("mod=space") != -1) {
        window.location.href = window.location.href + "&do=profile";
      }
    } else if (MTRouter.isSpaceWithAt()) {
      let hrefParamsMatchArray = window.location.href.match(/space-uid-(.+).html/i)!;
      let href_params = hrefParamsMatchArray[hrefParamsMatchArray.length - 1];
      window.location.href = `${window.location.origin}/home.php?mod=space&uid=${href_params}&do=profile`;
    }
  },
  /**
   * 显示帖子回复内容
   */
  async showCommentContent() {
    log.info(`显示帖子回复内容`);
    addStyle(/*css*/ `
		div.contrete-reply{padding:5px 10px;border-top:1px solid #f3f3f3}
		div.contrete-reply a{margin:0 10px}
		`);

    /**
     * 获取PC端的回复内容
     */
    async function getPCReply() {
      let response = await httpx.get(window.location.href, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
      });

      if (!response.status) {
        return;
      }

      let doc = DOMUtils.toElement(response.data.responseText, true, true);
      let resultList: string[] = [];
      doc.querySelectorAll<HTMLElement>("#delform tr.bw0_all+tr")!.forEach((item) => {
        let replyData: string[] = [];
        let tagTDNode = item.querySelector("td")!;
        let tagTDValue = DOMUtils.html(tagTDNode).replace(/^&nbsp;/, "");
        replyData.push(tagTDValue);

        let nextHTML = DOMUtils.next(item);
        /* bw0_all是每个帖子的标志位 */
        let $tr = doc.querySelectorAll<HTMLElement>("#delform tr");
        for (let index = 0; index < $tr.length; index++) {
          if (!nextHTML || DOMUtils.attr(nextHTML, "class") === "bw0_all") {
            break;
          }
          let nextTdHTML = nextHTML.querySelector<HTMLEmbedElement>("td")!;
          let nextValue = DOMUtils.html(nextTdHTML).replace(/^&nbsp;/, "");
          replyData = replyData.concat(nextValue);
          nextHTML = DOMUtils.next(nextHTML);
        }
        resultList.push(...replyData);
      });
      return resultList;
    }

    /**
     * 获取当前页面所有帖子
     */
    function getForumList() {
      return utils.getNodeListValue(
        ElementUtils.comiisForumList(),
        ElementUtils.comiisPostli(),
        ElementUtils.comiisMmlist()
      );
    }
    /**
     * 格式化一下获取的PC端的回复的内容
     */
    function formatPCReply(dataList: string[]) {
      let resultJSON = {} as any;
      dataList.forEach((item) => {
        let divItem = DOMUtils.createElement("div", {
          innerHTML: item,
        });
        let url = divItem.querySelector("a")?.getAttribute("href")!;
        let paramPtidMatch = url.match(MTRegExp.ptid);
        let paramPidMatch = url.match(MTRegExp.pid);
        if (!paramPtidMatch) {
          Qmsg.error("获取ptid失败");
          return;
        }
        if (!paramPidMatch) {
          Qmsg.error("获取pid失败");
          return;
        }
        let paramPtid = paramPtidMatch[paramPtidMatch.length - 1];
        let paramPid = paramPidMatch[paramPidMatch.length - 1];
        if (resultJSON[paramPtid]) {
          resultJSON[paramPtid]["data"].push(item);
        } else {
          resultJSON[paramPtid] = {
            ptid: paramPtid,
            pid: paramPid,
            data: [item],
          };
        }
      });
      return resultJSON;
    }
    var pcReplyArray = await getPCReply();
    if (pcReplyArray == null) {
      return;
    }
    var pcReplyJSON = formatPCReply(pcReplyArray);
    let forumList = getForumList();
    forumList.forEach((forumListItem, forumListItemIndex) => {
      /* 点赞按钮 */
      let praiseNode = forumListItem.querySelector<HTMLAnchorElement>(".comiis_xznalist_bottom a")!;
      let forumTid = praiseNode.getAttribute("tid");
      if (!forumTid) {
        Qmsg.error("获取帖子tid失败");
        log.error(forumListItem);
        return;
      }
      if (!pcReplyJSON[forumTid]) {
        return;
      }
      pcReplyJSON[forumTid]["data"].forEach((forumListReplyHTMLItem: any) => {
        DOMUtils.append(forumListItem, `<div class="contrete-reply">${forumListReplyHTMLItem}</div>`);
      });
    });
  },
};
