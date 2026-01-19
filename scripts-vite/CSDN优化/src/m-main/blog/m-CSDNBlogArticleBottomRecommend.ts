import { $$, DOMUtils, log, utils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";

export const M_CSDNBlogArticleBottomRecommend = {
  init() {
    Panel.exec(
      "m-csdn-blog-bottomArticleEnable",
      () => {
        return this.blockBottomArticle();
      },
      (keyList) => {
        return !Panel.getValue(keyList[0]);
      },
      true
    );
    Panel.execMenuOnce("m-csdn-blog-removeResourceArticle", () => {
      return this.removeResourceArticle();
    });
    Panel.execMenuOnce("m-csdn-blog-openNewTab", () => {
      return this.openNewTab();
    });

    DOMUtils.onReady(() => {
      Panel.execMenuOnce("m-csdn-blog-refactoringRecommendation", (cbOption) => {
        return this.refactoringRecommendation();
      });
    });
  },
  /**
   * 启用/关闭 底部文章
   */
  blockBottomArticle() {
    log.info("启用/关闭 底部文章");
    return CommonUtil.addBlockCSS("#recommend");
  },
  /**
   * 重构
   */
  async refactoringRecommendation() {
    /**
     * 反复执行的重构函数
     */
    const refactoring = function () {
      $$<HTMLDivElement>(".container-fluid").forEach(($item) => {
        /* 链接 */
        let url = "";
        /* 标题 */
        let title = "";
        /* 内容 */
        let content = "";
        /* 图片 */
        let img = "";
        /* 判断是否是CSDN资源下载 */
        let isCSDNDownload = false;
        /* 判断是否是CSDN-学院资源下载 */
        let isCSDNEduDownload = false;
        if ($item.hasAttribute("data-url")) {
          /* 存在真正的URL */
          url = $item.getAttribute("data-url") as string;
          title = $item.querySelector(".recommend_title div.left")?.innerHTML as string;
          if (!$item.querySelector(".text")) {
            return;
          }
          content = $item.querySelector(".text")?.innerHTML as string;
          if ($item.querySelectorAll(".recommend-img").length) {
            /* 如果有图片就加进去 */
            $item.querySelectorAll(".recommend-img").forEach((item2) => {
              img += item2.innerHTML;
            });
          }
        } else {
          // log.info("节点上无data-url");
          url = ($item.querySelector("a[data-type]") as HTMLAnchorElement).getAttribute("href") as string;
          title = ($item.querySelector(".recommend_title div.left") as HTMLDivElement).innerHTML;
          content = ($item.querySelector(".text") as HTMLDivElement).innerHTML;
        }
        const urlInst = new URL(url);
        if (
          urlInst.host === "download.csdn.net" ||
          (urlInst.host === "www.iteye.com" && urlInst.pathname.match(/^\/resource/gi))
        ) {
          /* 该链接为csdn资源下载 */
          // log.info("该链接为csdn资源下载");
          isCSDNDownload = true;
          title = `<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>` + title;
        } else if (urlInst.origin.match(/edu.csdn.net/gi)) {
          /* 该链接为csdn学院下载 */
          isCSDNEduDownload = true;
          // log.info("该链接为csdn学院下载");
          title = `<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>` + title;
        }
        $item.setAttribute("class", "GM-csdn-dl");
        $item.setAttribute("data-url", url);
        $item.innerHTML = `<div class="GM-csdn-title"><div class="left">${title}</div></div><div class="GM-csdn-content">${content}</div><div class="GM-csdn-img">${img}</div>`;
        $item.addEventListener("click", function () {
          window.location.href = url;
        });
      });
    };
    const lockFunction = new utils.LockFunction(refactoring, 50);
    const $recommend = await DOMUtils.waitNode<HTMLDivElement>("#recommend");
    log.info("重构底部推荐");
    const observer = utils.mutationObserver($recommend, {
      config: { childList: true, subtree: true, attributes: true },
      immediate: true,
      callback: () => {
        lockFunction.run();
      },
    });
    return [
      () => {
        observer.disconnect();
      },
    ];
  },
  /**
   * 移除资源下载的文章
   */
  removeResourceArticle() {
    log.info(`移除资源下载的文章`);
    return CommonUtil.addBlockCSS(
      '.container-fluid:has(a[href*="https://download.csdn.net/"])',
      '.container-fluid[data-url*="https://download.csdn.net/"]',
      '.GM-csdn-dl[data-url*="https://download.csdn.net/"]'
    );
  },
  /**
   * 新标签页打开
   */
  openNewTab() {
    log.info(`新标签页打开`);
    const listener = DOMUtils.on(
      document,
      "click",
      [".container-fluid", ".GM-csdn-dl"],
      (evt, $click) => {
        DOMUtils.preventEvent(evt);
        const url = $click.getAttribute("data-url");
        if (typeof url === "string") {
          log.info(`新标签页打开：${url}`);
          window.open(url, "_blank");
        } else {
          Qmsg.error("未获取到data-url属性");
        }
      },
      {
        capture: true,
      }
    );

    return listener.off;
  },
};
