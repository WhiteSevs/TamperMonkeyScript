import { addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import BlogCSS from "./css/CSDNBlog.css?raw";
import BlogShieldCSS from "./css/shield.css?raw";

export const CSDNBlogBlock = {
  init() {
    Panel.onceExec("csdn-blog-blockCSS", () => {
      return this.addCSS();
    });
    Panel.execMenuOnce("csdn-blog-shieldTopToolbar", () => {
      return this.shieldTopToolbar();
    });
    Panel.execMenuOnce("csdn-blog-shieldLoginDialog", () => {
      return this.shieldLoginDialog();
    });
    Panel.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside", () => {
      return this.shieldLeftBlogContainerAside();
    });
    Panel.execMenuOnce("csdn-blog-shieldRightDirectoryInformation", () => {
      return this.shieldRightDirectoryInformation();
    });
    Panel.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar", () => {
      return this.shieldBottomFloatingToolbar();
    });
  },
  /**
   * 添加屏蔽CSS和功能CSS
   */
  addCSS() {
    log.info("添加屏蔽CSS和功能CSS");
    return [addStyle(BlogShieldCSS), addStyle(BlogCSS)];
  },
  /**
   * 【屏蔽】顶部工具栏
   */
  shieldTopToolbar() {
    log.info("【屏蔽】顶部工具栏");
    return CommonUtil.addBlockCSS("#toolbarBox", "#csdn-toolbar");
  },
  /**
   * 【屏蔽】登录弹窗
   */
  shieldLoginDialog() {
    log.info("【屏蔽】登录弹窗");
    return CommonUtil.addBlockCSS(`.passport-login-container`);
  },
  /**
   * 屏蔽左侧博客信息
   */
  shieldLeftBlogContainerAside() {
    log.info("【屏蔽】左侧博客信息");
    return CommonUtil.addBlockCSS(`aside.blog_container_aside`);
  },
  /**
   * 【屏蔽】右侧目录信息
   */
  shieldRightDirectoryInformation() {
    log.info("【屏蔽】右侧目录信息");
    return CommonUtil.addBlockCSS("#rightAsideConcision", "#rightAside");
  },
  /**
   * 屏蔽底部悬浮工具栏
   */
  shieldBottomFloatingToolbar() {
    log.info("屏蔽底部悬浮工具栏");
    return CommonUtil.addBlockCSS(`#toolBarBox`);
  },
};
