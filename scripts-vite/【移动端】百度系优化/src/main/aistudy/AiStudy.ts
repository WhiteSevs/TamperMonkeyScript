import { addStyle, log } from "@/env";
import AiStudyShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/setting/panel";
import { CommonUtil } from "@/utils/CommonUtil";

const BaiduAiStudy = {
	init() {
		addStyle(AiStudyShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenuOnce("baidu_ai_study_shieldBottomToolBar", () => {
			return this.shieldBottomToolBar();
		});
		PopsPanel.execMenuOnce("baidu_ai_study_autoExpandFullText", () => {
			return this.autoExpandFullText();
		});
	},
	/**
	 * 屏蔽底部工具栏
	 */
	shieldBottomToolBar() {
		log.info("屏蔽底部工具栏");
		return CommonUtil.addBlockCSS(".gt-edu-h5-c-article-bottom");
	},
	/**
	 * 自动展开全文
	 */
	autoExpandFullText() {
		log.info("自动展开全文");
		/* 点击查看全文 */
		return [
			CommonUtil.addBlockCSS(
				".gt-edu-h5-c-article-content .content-wrapper .detail-wrapper .unfold-wrapper"
			),
			addStyle(/*css*/ `
			.gt-edu-h5-c-article-content .content-wrapper .detail-wrapper{
				max-height: unset !important;
			}
			`),
		];
	},
};

export { BaiduAiStudy };
