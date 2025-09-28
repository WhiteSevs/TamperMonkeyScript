import blockCSS from "./css/block.css?raw";
import { XHSRouter } from "@/router/XHSRouter";
import { M_XHSArticle } from "./article/M_XHSArticle";
import { M_XHSHome } from "./home/M_XHSHome";
import { addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";

export const M_XHS = {
  init() {
    // Panel.execMenu("little-red-book-hijack-vue", () => {
    // 	log.info("劫持页面的Vue");
    // 	XHS_Hook.webPackVue();
    // });
    Panel.execMenuOnce("little-red-book-shieldAd", () => {
      log.info("注入默认屏蔽CSS");
      return addStyle(blockCSS);
    });
    Panel.execMenuOnce("little-red-book-allowCopy", () => {
      return M_XHS.allowCopy();
    });
    if (XHSRouter.isArticle()) {
      /* 笔记页面 */
      M_XHSArticle.init();
    } else if (XHSRouter.isUserHome()) {
      /* 用户主页 */
      M_XHSHome.init();
    }
  },
  /**
   * 允许复制
   */
  allowCopy() {
    log.info("允许复制文字");
    return addStyle(/*css*/ `
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `);
  },
};
