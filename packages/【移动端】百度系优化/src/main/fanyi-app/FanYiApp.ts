import { GM_addStyle } from "ViteGM";
import { log, utils } from "@/env";
import FanYiAppShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/setting/setting";

const BaiduFanYiApp = {
    init() {
        GM_addStyle(FanYiAppShieldCSS);
        log.info("插入CSS规则");
        this.repairContentHeight();
        PopsPanel.execMenu("baidu_fanyi_app_shield_column_information", () => {
            this.shieldColumnInformation();
        })
        PopsPanel.execMenu("baidu_fanyi_app_shield_recommended_for_you", () => {
            this.shieldRecommendedForYou();
        })
        PopsPanel.execMenu("baidu_fanyi_app_shield_i_need_to_follow_along", () => {
            this.shieldINeedToFollowAlong();
        })
    },
    /**
     * 修复内容高度
     */
    repairContentHeight() {
        utils.waitNode("#page-content").then((element) => {
            log.info("修复内容高度");
            element.setAttribute("style", "max-height:unset !important");
        });
    },
    /**
     * 隐藏专栏信息
     */
    shieldColumnInformation() {
        log.info("隐藏专栏信息");
        GM_addStyle(`
        div.fanyi-zhuan-lan-wrapper{
            display: none !important;
        }
        `);
    },
    /**
     * 隐藏推荐
     */
    shieldRecommendedForYou() {
        log.info("隐藏推荐");
        GM_addStyle(`
        #fr-section{
            display: none !important;
        }
        `);
    },
    /**
     * 隐藏需要跟随
     */
    shieldINeedToFollowAlong() {
        log.info("隐藏需要跟随");
        GM_addStyle(`
        .cover-all .daily-bottom{
            display: none !important;
        }
        `);
    },
};

export {
    BaiduFanYiApp
}