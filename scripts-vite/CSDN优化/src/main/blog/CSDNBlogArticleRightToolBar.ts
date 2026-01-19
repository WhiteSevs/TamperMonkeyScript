import { $, DOMUtils, addStyle, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CSDNBlogArticleRightToolBarBlock } from "./CSDNBlogArticleRightToolBarBlock";

export const CSDNBlogArticleRightToolBar = {
  init() {
    CSDNBlogArticleRightToolBarBlock.init();
    Panel.onceExec("csdn-blog-initRightToolbarOffset", () => {
      return this.initRightToolbarOffset();
    });
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("csdn-blog-addGotoRecommandButton", () => {
        this.addGotoRecommandButton();
      });
    });
  },
  /**
   * 【添加】前往评论按钮，在返回顶部的下面
   */
  addGotoRecommandButton() {
    log.info("【添加】前往评论按钮，在返回顶部的上面");
    let gotoRecommandNode = document.createElement("a");
    gotoRecommandNode.className = "option-box";
    gotoRecommandNode.setAttribute("data-type", "gorecommand");
    gotoRecommandNode.innerHTML = /*html*/ `
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`;
    gotoRecommandNode.addEventListener("click", function () {
      let toolbarBoxElement = document.querySelector<HTMLDivElement>("#toolBarBox");
      if (!toolbarBoxElement || !toolbarBoxElement.getClientRects().length) {
        let $pcCommentBox = $<HTMLDivElement>("#pcCommentBox");
        if ($pcCommentBox && $pcCommentBox.getClientRects().length) {
          toolbarBoxElement = $pcCommentBox;
        } else {
          log.error("评论区处于隐藏状态");
          return;
        }
      }
      log.info("滚动到评论");
      let toolbarBoxOffsetTop = toolbarBoxElement.getBoundingClientRect().top + window.scrollY;
      let csdnToolBarElement = document.querySelector("#csdn-toolbar") as HTMLDivElement;
      let csdnToolBarStyles = window.getComputedStyle(csdnToolBarElement);
      let csdnToolBarHeight =
        csdnToolBarElement.clientHeight -
        parseFloat(csdnToolBarStyles.paddingTop) -
        parseFloat(csdnToolBarStyles.paddingBottom);
      window.scrollTo({
        top: toolbarBoxOffsetTop - csdnToolBarHeight - 8,
        left: 0,
        behavior: "smooth",
      });
    });
    DOMUtils.waitNode(".csdn-side-toolbar").then(() => {
      let targetElement = document.querySelector(".csdn-side-toolbar a:nth-last-child(2)") as HTMLAnchorElement;
      (targetElement.parentElement as HTMLDivElement).insertBefore(gotoRecommandNode, targetElement.nextSibling);
    });
  },
  /**
   * 初始化右侧工具栏的偏移（top、right）
   */
  initRightToolbarOffset() {
    log.info("初始化右侧工具栏的偏移（top、right）");
    addStyle(/*css*/ `
    .csdn-side-toolbar{
      left: unset !important;
    }
    `);
    DOMUtils.waitNode<HTMLDivElement>(".csdn-side-toolbar").then(($sideToolbar) => {
      DOMUtils.css($sideToolbar, {
        top: parseInt(Panel.getValue("csdn-blog-rightToolbarTopOffset")) + "px",
        right: parseInt(Panel.getValue("csdn-blog-rightToolbarRightOffset")) + "px",
      });
    });
  },
};
