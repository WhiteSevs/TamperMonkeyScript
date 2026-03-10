import ShieldCSS from "./css/shield.css?raw";
import MBlogCSS from "./css/blog.css?raw";
import { addStyle } from "@/env";
import { Panel } from "@components/setting/panel";
import { CSDNBlogBlock } from "@/main/blog/CSDNBlogBlock";

export const M_CSDNBlogBlock = {
  init() {
    Panel.onceExec("m-csdn-blog-removeAds", () => {
      return this.addCSS();
    });
    Panel.execMenuOnce("m-csdn-blog-blockBottomAskAIToolbar", () => {
      return CSDNBlogBlock.blockBottomAskAIToolbar();
    });
  },
  /**
   * 添加屏蔽CSS
   */
  addCSS() {
    return [addStyle(ShieldCSS), addStyle(MBlogCSS)];
  },
};
