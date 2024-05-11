import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import AiStudyShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/ui/setting";

const BaiduAiStudy = {
    init() {
        GM_addStyle(AiStudyShieldCSS);
        log.info("插入CSS规则");
        PopsPanel.execMenu("baidu_ai_study_shieldBottomToolBar", () => {
            this.shieldBottomToolBar();
        })
        PopsPanel.execMenu("baidu_ai_study_autoExpandFullText", () => {
            this.autoExpandFullText();
        })
    },
    /**
     * 屏蔽底部工具栏
     */
    shieldBottomToolBar() {
        GM_addStyle(`
        .gt-edu-h5-c-article-bottom{
            display: none !important;
        }
      `);
    },
    /**
     * 自动展开全文
     */
    autoExpandFullText() {
        GM_addStyle(`
        .gt-edu-h5-c-article-content .content-wrapper .detail-wrapper{
            max-height: unset !important;
        }
        /* 点击查看全文 */
        .gt-edu-h5-c-article-content .content-wrapper .detail-wrapper .unfold-wrapper{
            display: none !important;
        }
        `);
    },
}


export {
    BaiduAiStudy
}