import ShieldCSS from "./css/shield.css?raw";
import MBlogCSS from "./css/blog.css?raw";
import { addStyle } from "@/env";
import { Panel } from "@components/setting/panel";

export const M_CSDNBlogBlock = {
  init() {
    Panel.onceExec("m-csdn-blog-removeAds", () => {
      return this.addCSS();
    });
  },
  /**
   * 添加屏蔽CSS
   */
  addCSS() {
    return [addStyle(ShieldCSS), addStyle(MBlogCSS)];
  },
};
