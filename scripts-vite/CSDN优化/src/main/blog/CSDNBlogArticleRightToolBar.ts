import { $, DOMUtils, addStyle, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

const CSDNBlogArticleRightToolBar = {
  init() {
    Panel.exec(
      "csdn-blog-rightToolbarEnable",
      () => {
        return this.shieldRightToolbar();
      },
      (keyList) => !Panel.getValue(keyList[0]),
      true
    );
    Panel.execMenuOnce("csdn-blog-rightToolbarCreativeCenter", () => {
      return this.shieldCreativeCenter();
    });
    Panel.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar", () => {
      return this.shieldShowOrSidebar();
    });
    Panel.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance", () => {
      return this.shieldBeginnerGuidance();
    });
    Panel.execMenuOnce("csdn-blog-rightToolbarCustomerService", () => {
      return this.shieldCustomerService();
    });
    Panel.execMenuOnce("csdn-blog-rightToolbarReport", () => {
      return this.shieldReport();
    });
    Panel.execMenuOnce("csdn-blog-rightToolbarBackToTop", () => {
      return this.shieldBackToTop();
    });
    this.initRightToolbarOffset();
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
  /**
   * 屏蔽右侧工具栏
   */
  shieldRightToolbar() {
    log.info("屏蔽右侧工具栏");
    return CommonUtil.addBlockCSS(`div.csdn-side-toolbar`);
  },
  /**
   * 【屏蔽】创作中心
   */
  shieldCreativeCenter() {
    log.info("【屏蔽】创作中心");
    return CommonUtil.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box");
  },
  /**
   * 【屏蔽】显示/隐藏侧栏
   */
  shieldShowOrSidebar() {
    log.info("【屏蔽】显示/隐藏侧栏");
    return CommonUtil.addBlockCSS(".csdn-side-toolbar a.sidecolumn");
  },
  /**
   * 【屏蔽】新手引导
   */
  shieldBeginnerGuidance() {
    log.info("【屏蔽】新手引导");
    return CommonUtil.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]');
  },
  /**
   * 【屏蔽】客服
   */
  shieldCustomerService() {
    log.info("【屏蔽】客服");
    return CommonUtil.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]');
  },
  /**
   * 【屏蔽】举报
   */
  shieldReport() {
    log.info("【屏蔽】举报");
    return CommonUtil.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]');
  },
  /**
   * 【屏蔽】返回顶部
   */
  shieldBackToTop() {
    log.info("【屏蔽】返回顶部");
    return CommonUtil.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]');
  },
};

export { CSDNBlogArticleRightToolBar as CSDNBlogRightToolBar };
