import { DOMUtils, addStyle, log } from "@/env";
import ZhiDaoShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/setting/setting";
import { CommonUtils } from "@/utils/CommonUtils";

const BaiduZhiDao = {
	init() {
		addStyle(ZhiDaoShieldCSS);
		log.info("插入CSS规则");
		this.removeAd();
		PopsPanel.execMenuOnce(
			"baidu_zhidao_block_recommend_more_exciting_content",
			() => {
				return this.blockRecommendMoreExcitingContent();
			}
		);
		PopsPanel.execMenuOnce("baidu_zhidao_block_other_answers", () => {
			return this.blockOtherAnswers();
		});
		PopsPanel.execMenuOnce("baidu_zhidao_block_related_issues", () => {
			return this.blockRelatedIssues();
		});
		PopsPanel.execMenuOnce("baidu_zhidao_shield_top_fixed_toolbar", () => {
			return this.shieldTopFloatToolBar();
		});
	},
	/**
	 * 移除广告
	 */
	removeAd() {
		log.info("移除广告.ec-ad");
		if (document.querySelector(".ec-ad")) {
			DOMUtils.remove(DOMUtils.parent(document.querySelectorAll(".ec-ad")));
		}
	},
	/**
	 * 屏蔽顶部悬浮工具栏
	 */
	blockRecommendMoreExcitingContent() {
		log.info("屏蔽顶部悬浮工具栏");
		return CommonUtils.addBlockCSS(
			".feed-recommend-title",
			"#feed-recommend",
			".mm-content-box.mm-content-line.feed-recommend"
		);
	},
	/**
	 * 屏蔽其他回答
	 */
	blockOtherAnswers() {
		log.info("屏蔽其他回答");
		return CommonUtils.addBlockCSS(".replies-container + div");
	},
	/**
	 * 屏蔽相关问题
	 */
	blockRelatedIssues() {
		log.info("屏蔽相关问题");
		return CommonUtils.addBlockCSS(
			"div[id^=wahsd]",
			'div[class^="w-question-list"]'
		);
	},
	/**
	 * 屏蔽顶部悬浮工具栏
	 */
	shieldTopFloatToolBar() {
		log.info("屏蔽顶部悬浮工具栏");
		return CommonUtils.addBlockCSS(
			".iknow-root-dom-element .question-answer-container .question-answer-layer.fixed"
		);
	},
};

export { BaiduZhiDao };
