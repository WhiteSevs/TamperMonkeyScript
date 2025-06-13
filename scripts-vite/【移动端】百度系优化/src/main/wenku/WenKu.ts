import { addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";
import WenKuShieldCSS from "./shield.css?raw";
import { CommonUtil } from "@components/utils/CommonUtil";

const BaiduWenKu = {
	init() {
		addStyle(WenKuShieldCSS);
		log.info("插入CSS规则");
		addStyle(/*css*/ `
        /* 上面的工具栏会挡住标题栏 */
        #app-pre .top-card.top-card-top{
            margin-top: 56px !important;
        }
        `);
		Panel.execMenuOnce("baidu_wenku_block_member_picks", () => {
			return this.shieldVipPicks();
		});
		Panel.execMenuOnce("baidu_wenku_blocking_app_featured", () => {
			return this.shieldAppPicks();
		});
		Panel.execMenuOnce("baidu_wenku_blocking_related_documents", () => {
			return this.shieldRelatedDocuments();
		});
		Panel.execMenuOnce("baidu_wenku_blocking_bottom_toolbar", () => {
			return this.shieldBottomToolBar();
		});
		Panel.execMenuOnce("baidu_wenku_shield_next_btn", () => {
			return this.shieldNextArticleButton();
		});
		Panel.execMenuOnce("baidu_wenku_blockDocumentAssistant", () => {
			return this.blockDocumentAssistant();
		});
	},
	/** 屏蔽会员精选 */
	shieldVipPicks() {
		log.info("屏蔽会员精选");
		return CommonUtil.addBlockCSS(
			'div[class*="vip-choice_"][data-ait-action="vipChoiceShow"]'
		);
	},
	/** 屏蔽APP精选 */
	shieldAppPicks() {
		log.info("屏蔽APP精选");
		return CommonUtil.addBlockCSS(
			'div[class*="app-choice_"][data-ait-action="appChoiceNewShow"]',
			"div.folder-wrap.invite-clipboard[data-clipboard-text]"
		);
	},
	/** 屏蔽相关文档 */
	shieldRelatedDocuments() {
		log.info("屏蔽相关文档");
		return CommonUtil.addBlockCSS(
			"div.fold-page-conversion",
			"div.newrecom-list.invite-clipboard[data-clipboard-text]"
		);
	},
	/** 屏蔽底部工具栏 */
	shieldBottomToolBar() {
		log.info("屏蔽底部工具栏");
		return CommonUtil.addBlockCSS("div.barbottom");
	},
	/** 屏蔽下一篇按钮 */
	shieldNextArticleButton() {
		log.info("屏蔽下一篇按钮");
		return CommonUtil.addBlockCSS("div.next-page-container");
	},
	/** 【屏蔽】文档助手 */
	blockDocumentAssistant() {
		log.info("【屏蔽】文档助手");
		return CommonUtil.addBlockCSS(".ai-chat-wrap");
	},
};

export { BaiduWenKu };
