import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import MbdShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/ui/setting";
import { BaiduMbdHook } from "./hook";

const BaiduMbd = {
  init() {
    /* 
      示例
      https://mbd.baidu.com/newspage/data/landingsuper?isBdboxFrom=1&pageType=1&context=%7B%22nid%22%3A%22news_8924612668430208297%22,%22sourceFrom%22%3A%22bjh%22%7D
      https://mbd.baidu.com/newspage/data/dtlandingshare?sourceFrom=share_ugc&nid=dt_5121203594593120342
      */
    GM_addStyle(MbdShieldCSS);
    log.info("插入CSS规则");
    BaiduMbdHook.init();
    PopsPanel.execMenu("baidu_mbd_block_exciting_comments", () => {
      this.blockExcitingComments();
    })
    PopsPanel.execMenu("baidu_mbd_block_exciting_recommendations", () => {
      this.blockExcitingRecommendations();
    })
    PopsPanel.execMenu("baidu_mbd_shield_bottom_toolbar", () => {
      this.shieldBottomToolbar();
    })
  },
  /**
   * 屏蔽最热评论
   */
  blockExcitingComments() {
    GM_addStyle(`
          div#commentModule,
          #comment,
          #page_wrapper > div > div[class^="borderBottom-"]{
            display: none !important;
          }
          `);
  },
  /**
   * 屏蔽最热推荐
   */
  blockExcitingRecommendations() {
    GM_addStyle(`
          div[class^="relateTitle"],
          .infinite-scroll-component__outerdiv,
          div#fuseVideo + div[class],
          /* 精彩推荐的文字 */
          #content_wrapper + div + div,
          /* 简单UA下精彩推荐的文字 */
          #page_wrapper .searchCraft #content_wrapper + div{
            display: none !important;
          }
          `);
    GM_addStyle(`
          /* Gecko下的简单UA下精彩推荐 */
          #page_wrapper > div > div:nth-child(6){
            display: none !important;
          }
          `);
  },
  /**
   * 屏蔽底部工具栏
   */
  shieldBottomToolbar() {
    GM_addStyle(`
          div#wise-invoke-interact-bar{
            display: none !important;
          }
          `);
  },
};


export {
  BaiduMbd
}