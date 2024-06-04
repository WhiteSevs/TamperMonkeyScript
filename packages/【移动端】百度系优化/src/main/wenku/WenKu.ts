import { addStyle, log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import WenKuShieldCSS from "./shield.css?raw";
import { CommonUtils } from "@/utils/CommonUtils";

const BaiduWenKu = {
	init() {
		addStyle(WenKuShieldCSS);
		log.info("插入CSS规则");
		addStyle(`
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
		log.info("屏蔽会员精选");
		CommonUtils.addBlockCSS(
			'div[class*="vip-choice_"][data-ait-action="vipChoiceShow"]'
		);
	},
	/** 屏蔽APP精选 */
	shieldAppPicks() {
		log.info("屏蔽APP精选");
		CommonUtils.addBlockCSS(
			'div[class*="app-choice_"][data-ait-action="appChoiceNewShow"]',
			"div.folder-wrap.invite-clipboard[data-clipboard-text]"
		);
	},
	/** 屏蔽相关文档 */
	shieldRelatedDocuments() {
		log.info("屏蔽相关文档");
		CommonUtils.addBlockCSS(
			"div.fold-page-conversion",
			"div.newrecom-list.invite-clipboard[data-clipboard-text]"
		);
	},
	/** 屏蔽底部工具栏 */
	shieldBottomToolBar() {
		log.info("屏蔽底部工具栏");
		CommonUtils.addBlockCSS("div.barbottom");
	},
	/** 屏蔽下一篇按钮 */
	shieldNextArticleButton() {
		log.info("屏蔽下一篇按钮");
		CommonUtils.addBlockCSS("div.next-page-container");
	},
	/** 【屏蔽】文档助手 */
	blockDocumentAssistant() {
		log.info("【屏蔽】文档助手");
		CommonUtils.addBlockCSS(".ai-chat-wrap");
	},
};

export { BaiduWenKu };
