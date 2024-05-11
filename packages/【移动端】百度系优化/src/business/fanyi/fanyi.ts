import { GM_addStyle } from "ViteGM";
import { log, utils } from "@/env";
import FanYiShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/ui/setting";

const BaiduFanYi = {
    init() {
        GM_addStyle(FanYiShieldCSS);
        log.info("插入CSS规则");
        PopsPanel.execMenu("baidu_fanyi_recommended_shielding_bottom", () => {
            this.shieldRecommendBottom();
        })
        PopsPanel.execMenu("baidu_fanyi_other_shielding_bottom", () => {
            this.shieldBottom();
        })
        PopsPanel.execMenu("baidu_fanyi_auto_focus", () => {
            this.autoFocus();
        })
    },
    /**
     * 屏蔽底部推荐
     */
    shieldRecommendBottom() {
        GM_addStyle(`
        section.article.android-style{
        display: none !important;
        }`);
    },
    /**
     * 屏蔽底部
     */
    shieldBottom() {
        GM_addStyle(`
        .trans-other-wrap.clearfix{
        display: none !important;
        }`);
    },
    /**
     * 自动聚焦
     */
    autoFocus() {
        utils.waitNode("textarea#j-textarea").then(() => {
            setTimeout(() => {
                (document.querySelector("textarea#j-textarea") as HTMLTextAreaElement).focus();
            }, 2500);
        });
    },
};

export {
    BaiduFanYi
}