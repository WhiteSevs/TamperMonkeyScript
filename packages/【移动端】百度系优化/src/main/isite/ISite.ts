import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import ISiteShieldCSS from "./shield.css?raw";

const BaiduISite = {
    init() {
        GM_addStyle(ISiteShieldCSS);
        log.info("插入CSS规则");
        PopsPanel.execMenu("baidu_isite_wjz2tdly_shieldBottomBarRootContainer", () => {
            this.shieldBottomBarRootContainer();
        })
        PopsPanel.execMenu("baidu_isite_wjz2tdly_shieldRightSeeMoreToolBar", () => {
            this.shieldRightSeeMoreToolBar();
        })
        PopsPanel.execMenu("baidu_isite_wjz2tdly_shieldArticleBottom", () => {
            this.shieldArticleBottom();
        })
        PopsPanel.execMenu("baidu_isite_wjz2tdly_autoExpandFullText", () => {
            this.autoExpandFullText();
        })
    },
    /**
     * 屏蔽底部免费在线咨询
     */
    shieldBottomBarRootContainer() {
        log.info("屏蔽底部免费在线咨询");
        GM_addStyle(`
        .gt-local-h5-article-bottom-bar-root-container{
            display: none !important;
        }
        `);
    },
    /**
     * 屏蔽右侧悬浮按钮-查看更多
     */
    shieldRightSeeMoreToolBar() {
        log.info("屏蔽右侧悬浮按钮-查看更多");
        GM_addStyle(`
        .icon-article-list.icon-article-list-exp{
            display: none !important;
        }
        `);
    },
    /**
     * 屏蔽底部-大家还在看
     */
    shieldArticleBottom() {
        log.info("屏蔽底部-大家还在看");
        GM_addStyle(`
        .article-bottom{
            display: none !important;
        }
        `);
    },
    /**
     * 自动展开全文
     */
    autoExpandFullText() {
        log.info("自动展开全文");
        GM_addStyle(`
        .gt-local-h5-article-detail-article-fold-exp{
            max-height: unset !important;
        }
        /* 点击查看全文按钮 */
        .fold-wrapper{
            display: none !important;
        }
        `);
    },
};

export {
    BaiduISite
}