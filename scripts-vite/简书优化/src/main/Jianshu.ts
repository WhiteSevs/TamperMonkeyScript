import blockCSS from "./css/block.css?raw";
import { addStyle, DOMUtils, log, utils } from "@/env";
import { JianshuRouter } from "@/router/JianshuRouter";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

/**
 * 移除元素（未出现也可以等待出现）
 * @param selectorText 元素选择器
 */
export const waitForElementToRemove = function (selectorText = "") {
  DOMUtils.waitNodeList<NodeListOf<HTMLElement>>(selectorText).then((nodeList) => {
    nodeList.forEach((item) => item.remove());
  });
};
export const Jianshu = {
  init() {
    this.addCSS();
    Panel.execMenu("JianShuAutoJumpRedirect_PC", () => {
      this.jumpRedirect();
    });
    Panel.execMenu("JianShuRemoveClipboardHijacking", () => {
      this.removeClipboardHijacking();
    });
    Panel.execMenu("JianShuAutoExpandFullText", () => {
      this.autoExpandFullText();
    });
    Panel.execMenu("JianShuArticleCenter", () => {
      return this.articleCenter();
    });
    Panel.execMenu("JianShuShieldRelatedArticles", () => {
      return this.blockRelatedArticles();
    });
    Panel.execMenu("jianshu-shieldClientDialog", () => {
      this.blockClientDialog();
    });
    Panel.execMenuOnce("JianShuShieldUserComments", () => {
      return this.blockUserComments();
    });
    Panel.execMenuOnce("JianShuShieldRecommendedReading", () => {
      return this.blockRecommendedReading();
    });
    Panel.execMenuOnce("jianshu-shieldTopNav", () => {
      return this.blockTopNav();
    });
    Panel.execMenuOnce("jianshu-shieldBottomToolbar", () => {
      return this.blockBottomToolbar();
    });
  },
  /**
   * 添加屏蔽CSS
   */
  addCSS() {
    log.info("添加屏蔽CSS");
    return addStyle(blockCSS);
  },
  /**
   * 全文居中
   */
  articleCenter() {
    log.info("全文居中");
    let result = [];
    result.push(
      CommonUtil.addBlockCSS("div[role=main] aside", "div._3Pnjry"),
      addStyle(/*css*/ `
			div[role=main] aside,
			div._3Pnjry{
				display: none !important;
			}
			div._gp-ck{
				width: 100% !important;
			}`)
    );
    waitForElementToRemove("div[role=main] aside");
    waitForElementToRemove("div._3Pnjry");
    DOMUtils.waitNodeList<NodeListOf<HTMLElement>>("div._gp-ck").then((nodeList) => {
      nodeList.forEach((item) => {
        item.style["width"] = "100%";
      });
    });
    return result;
  },
  /**
   * 去除剪贴板劫持
   */
  removeClipboardHijacking() {
    log.info("去除剪贴板劫持");
    const stopNativePropagation = (event: Event) => {
      event.stopPropagation();
    };
    window.addEventListener("copy", stopNativePropagation, true);
    document.addEventListener("copy", stopNativePropagation, true);
  },
  /**
   * 自动展开全文
   */
  autoExpandFullText() {
    DOMUtils.waitNode<HTMLDivElement>(`div#homepage div[class*="dialog-"]`).then((element) => {
      element.style["visibility"] = "hidden";
      log.info("自动展开全文");
      utils.mutationObserver(element, {
        callback: (mutations) => {
          if (mutations.length == 0) {
            return;
          }
          mutations.forEach((mutationItem) => {
            if ((mutationItem.target as HTMLElement).style["display"] != "none") {
              log.success("自动展开全文-自动点击");
              document.querySelector<HTMLElement>('div#homepage div[class*="dialog-"] .cancel')?.click();
            }
          });
        },
        config: {
          /* 子节点的变动（新增、删除或者更改） */
          childList: false,
          /* 属性的变动 */
          attributes: true,
          /* 节点内容或节点文本的变动 */
          characterData: true,
          /* 是否将观察器应用于该节点的所有后代节点 */
          subtree: true,
        },
      });
    });
  },
  /**
   * 去除简书拦截其它网址的url并自动跳转
   */
  jumpRedirect() {
    if (JianshuRouter.isGoWild()) {
      /* 禁止简书拦截跳转 */
      log.success("去除简书拦截其它网址的url并自动跳转");
      window.stop();
      let search = window.location.href.replace(window.location.origin + "/", "");
      search = decodeURIComponent(search);
      let newURL = search.replace(/^go-wild\?ac=2&url=/gi, "").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi, "");
      window.location.href = newURL;
    }
  },
  /**
   * 屏蔽相关文章
   */
  blockRelatedArticles() {
    log.info("屏蔽相关文章");
    return CommonUtil.addBlockCSS('div[role="main"] > div > section:nth-child(2)');
  },
  /**
   * 【屏蔽】客户端弹窗
   */
  blockClientDialog() {
    log.info("【屏蔽】客户端弹窗");
    CommonUtil.addBlockCSS(
      'div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"])'
    );
    DOMUtils.waitNode<HTMLDivElement>(
      `div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]`
    ).then((element) => {
      log.success("弹窗出现");
      utils
        .waitPropertyByInterval(
          element,
          () => {
            let react = utils.getReactInstance(element);
            return react?.reactInternalInstance?.return?.return?.memoizedProps?.onClose;
          },
          250,
          10000
        )
        .then(() => {
          let react = utils.getReactInstance(element);
          react.reactInternalInstance!.return.return.memoizedProps.onClose(new Event("click"));
          log.success("调用函数关闭弹窗");
        });
    });
  },
  /**
   * 屏蔽评论区
   */
  blockUserComments() {
    log.info("屏蔽评论区");
    return CommonUtil.addBlockCSS("div#note-page-comment");
  },
  /**
   * 屏蔽底部推荐阅读
   */
  blockRecommendedReading() {
    log.info("屏蔽底部推荐阅读");
    return CommonUtil.addBlockCSS('div[role="main"] > div > section:last-child');
  },
  /**
   * 【屏蔽】顶部导航栏
   */
  blockTopNav() {
    log.info("【屏蔽】顶部导航栏");
    return CommonUtil.addBlockCSS("header");
  },
  /**
   * 【屏蔽】底部工具栏
   */
  blockBottomToolbar() {
    log.info("【屏蔽】底部工具栏");
    return CommonUtil.addBlockCSS("footer");
  },
};
