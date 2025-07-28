import { $, $$, DOMUtils, addStyle, log } from "@/env";
import ZhiDaoShieldCSS from "./shield.css?raw";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const BaiduZhiDao = {
	init() {
		addStyle(ZhiDaoShieldCSS);
		log.info("插入CSS规则");
		this.removeAd();
		Panel.execMenuOnce(
			"baidu_zhidao_block_recommend_more_exciting_content",
			() => {
				return this.blockRecommendMoreExcitingContent();
			}
		);
		Panel.execMenuOnce("baidu_zhidao_block_other_answers", () => {
			return this.blockOtherAnswers();
		});
		Panel.execMenuOnce("baidu_zhidao_block_related_issues", () => {
			return this.blockRelatedIssues();
		});
		Panel.execMenuOnce("baidu_zhidao_shield_top_fixed_toolbar", () => {
			return this.shieldTopFloatToolBar();
		});
	},
	/**
	 * 移除广告
	 */
	removeAd() {
		log.info("移除广告.ec-ad");
		let $ec_ad = $$<HTMLElement>(".ec-ad");
		if ($ec_ad.length) {
			DOMUtils.remove(DOMUtils.parent($ec_ad));
		}
	},
	/**
	 * 屏蔽顶部悬浮工具栏
	 */
	blockRecommendMoreExcitingContent() {
		log.info("屏蔽顶部悬浮工具栏");
		return CommonUtil.addBlockCSS(
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
		return CommonUtil.addBlockCSS(".replies-container + div");
	},
	/**
	 * 屏蔽相关问题
	 */
	blockRelatedIssues() {
		log.info("屏蔽相关问题");
		return CommonUtil.addBlockCSS(
			"div[id^=wahsd]",
			'div[class^="w-question-list"]',
			'div:has(>[id*="-related-list"])'
		);
	},
	/**
	 * 屏蔽顶部悬浮工具栏
	 */
	shieldTopFloatToolBar() {
		log.info("屏蔽顶部悬浮工具栏");
		return CommonUtil.addBlockCSS(
			".iknow-root-dom-element .question-answer-container .question-answer-layer.fixed"
		);
	},
};
