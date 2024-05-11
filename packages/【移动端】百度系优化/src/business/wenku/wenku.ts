import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import { PopsPanel } from "@/ui/setting";
import WenKuShieldCSS from "./shield.css?raw";

const BaiduWenKu = {
    init() {
        GM_addStyle(WenKuShieldCSS);
        log.info("插入CSS规则");
        GM_addStyle(`
        /* 上面的工具栏会挡住标题栏 */
        #app-pre .top-card.top-card-top{
        margin-top: 56px !important;
        }
        `);
        PopsPanel.execMenu("baidu_wenku_block_member_picks", () => {
            this.shieldVipPicks();
        });
        PopsPanel.execMenu("baidu_wenku_blocking_app_featured", () => {
            this.shieldAppPicks();
        });
        PopsPanel.execMenu("baidu_wenku_blocking_related_documents", () => {
            this.shieldRelatedDocuments();
        });
        PopsPanel.execMenu("baidu_wenku_blocking_bottom_toolbar", () => {
            this.shieldBottomToolBar();
        });
        PopsPanel.execMenu("baidu_wenku_shield_next_btn", () => {
            this.shieldNextArticleButton();
        });
        PopsPanel.execMenu("baidu_wenku_blockDocumentAssistant", () => {
            this.blockDocumentAssistant();
        });
    },
    /** 屏蔽会员精选 */
    shieldVipPicks() {
        GM_addStyle(`
        div[class*="vip-choice_"][data-ait-action="vipChoiceShow"]{
        display: none !important;
        }`);
    },
    /** 屏蔽APP精选 */
    shieldAppPicks() {
        GM_addStyle(`
        div[class*="app-choice_"][data-ait-action="appChoiceNewShow"],
        div.folder-wrap.invite-clipboard[data-clipboard-text]{
        display: none !important;
        }`);
    },
    /** 屏蔽相关文档 */
    shieldRelatedDocuments() {
        GM_addStyle(`
        div.fold-page-conversion,
        div.newrecom-list.invite-clipboard[data-clipboard-text]{
        display: none !important;
        }`);
    },
    /** 屏蔽底部工具栏 */
    shieldBottomToolBar() {
        GM_addStyle(`
        div.barbottom{
        display: none !important;
        }`);
    },
    /** 屏蔽下一篇按钮 */
    shieldNextArticleButton() {
        GM_addStyle(`
        div.next-page-container{
        display: none !important;
        }`);
    },
    /** 【屏蔽】文档助手 */
    blockDocumentAssistant() {
        GM_addStyle(`
        .ai-chat-wrap{
        display: none !important;
        }
        `);
    },
};

export {
    BaiduWenKu
}