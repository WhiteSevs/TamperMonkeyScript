import blockCSS from "./css/block.css?raw";
import { addStyle, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

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
    DOMUtils.ready(() => {
      Panel.execMenuOnce("pc-xhs-shield-login-dialog", () => {
        this.blockLoginContainer();
      });
    });
  },
  /**
   * 屏蔽登录弹窗显示
   */
  blockLoginContainer() {
    log.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");
    CommonUtil.addBlockCSS(".login-container");
    /* 观察内容加载并关闭弹窗 */
    utils.mutationObserver(document.body, {
      config: {
        subtree: true,
        childList: true,
      },
      callback: () => {
        let $close = document.querySelector(".login-container .icon-btn-wrapper") as HTMLDivElement;
        if ($close) {
          $close.click();
          log.success("登录弹窗出现，关闭");
        }
      },
    });
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
