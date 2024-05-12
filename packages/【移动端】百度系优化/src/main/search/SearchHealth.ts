import { GM_addStyle } from "ViteGM";
import { PopsPanel } from "@/setting/setting";
import { log } from "@/env";

/**
 * 百度健康
 */
const BaiduHeadlth = {
    init() {
        PopsPanel.execMenu('baidu_search_headlth_shield_other_info', () => {
            this.shieldOtherInfo();
        })
        PopsPanel.execMenu('baidu_search_headlth_shield_bottom_toolbar', () => {
            this.shieldServiceButtonsRow();
        })
    },
    /**
     * 【屏蔽】底部其它信息
     */
    shieldOtherInfo() {
        log.success("【屏蔽】底部其它信息")
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
        log.success('【屏蔽】底部工具栏')
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