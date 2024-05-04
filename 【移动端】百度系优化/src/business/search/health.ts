import { GM_addStyle } from "ViteGM";
import { PopsPanel } from "@/ui";

/**
 * 百度健康
 */
const BaiduHeadlth = {
    init() {
        if (PopsPanel.getValue("baidu_search_headlth_shield_other_info")) {
            this.shieldOtherInfo();
        }
        if (
            PopsPanel.getValue("baidu_search_headlth_shield_bottom_toolbar")
        ) {
            this.shieldServiceButtonsRow();
        }
    },
    /**
     * 【屏蔽】底部其它信息
     */
    shieldOtherInfo() {
        GM_addStyle(`
      article[class] > div[class^="index_container"]{
        display: none !important;
      }
      `);
    },
    /**
     * 【屏蔽】底部工具栏
     */
    shieldServiceButtonsRow() {
        GM_addStyle(`
        article[class] > div[class^="index_healthServiceButtonsRow"]{
          display: none !important;
        }
        `);
    },
};

export {
    BaiduHeadlth
}