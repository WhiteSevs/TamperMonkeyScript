import { $, addStyle, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import blockCSS from "./css/block.css?raw";

export const XHSBlock = {
  init() {
    Panel.execMenuOnce("pc-xhs-shieldAd", () => {
      return addStyle(blockCSS);
    });
    Panel.execMenuOnce("pc-xhs-shield-select-text-search-position", () => {
      return this.blockSelectTextVisibleSearchPosition();
    });
    Panel.execMenuOnce("pc-xhs-shield-topToolbar", () => {
      return this.blockTopToolbar();
    });
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("pc-xhs-shield-login-dialog", () => {
        return this.blockLoginContainer();
      });
    });
  },
  /**
   * 屏蔽登录弹窗显示
   */
  blockLoginContainer() {
    log.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");
    /* 观察内容加载并关闭弹窗 */
    const observer = utils.mutationObserver(document.body, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: () => {
        const $close = $(".login-container .icon-btn-wrapper");
        if ($close) {
          $close.click();
          log.success("登录弹窗出现，自动点击关闭按钮");
        }
      },
    });
    return [
      CommonUtil.addBlockCSS(".login-container"),
      () => {
        observer?.disconnect();
      },
    ];
  },
  /**
   * 屏蔽选择文字弹出的搜索提示
   */
  blockSelectTextVisibleSearchPosition() {
    log.info("屏蔽选择文字弹出的搜索提示");
    return CommonUtil.addBlockCSS(".search-position");
  },
  /**
   * 【屏蔽】顶部工具栏
   */
  blockTopToolbar() {
    log.info("【屏蔽】顶部工具栏");
    return [
      CommonUtil.addBlockCSS("#headerContainer", ".header-container"),
      addStyle(/*css*/ `
			/* 主内容去除padding */
			#mfContainer{
				padding-top: 0 !important;
			}
			.outer-link-container{
				margin-top: 0 !important;
				height: 100vh !important;
				padding: 30px 0;
			}
			#noteContainer{
				height: 100%;
			}
			`),
    ];
  },
};
