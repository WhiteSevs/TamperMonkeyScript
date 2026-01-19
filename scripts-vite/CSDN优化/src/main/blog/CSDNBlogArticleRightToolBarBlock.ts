import { CommonUtil } from "@/utils/CommonUtil";
import { log } from "@/env";
import { Panel } from "@components/setting/panel";

export const CSDNBlogArticleRightToolBarBlock = {
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
  },
  /**
   * 启用/关闭 右侧工具栏
   */
  shieldRightToolbar() {
    log.info("启用/关闭 右侧工具栏");
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
