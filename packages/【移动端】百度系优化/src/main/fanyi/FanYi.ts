import { addStyle, log, utils } from "@/env";
import FanYiShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/setting/setting";
import { CommonUtils } from "@/utils/CommonUtils";

const BaiduFanYi = {
	init() {
		addStyle(FanYiShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenu("baidu_fanyi_recommended_shielding_bottom", () => {
			this.shieldRecommendBottom();
		});
		PopsPanel.execMenu("baidu_fanyi_other_shielding_bottom", () => {
			this.shieldBottom();
		});
		PopsPanel.execMenu("baidu_fanyi_auto_focus", () => {
			this.autoFocus();
		});
	},
	/**
	 * 屏蔽底部推荐
	 */
	shieldRecommendBottom() {
		log.info("屏蔽底部推荐");
		CommonUtils.addBlockCSS("section.article.android-style");
	},
	/**
	 * 屏蔽底部
	 */
	shieldBottom() {
		log.info("屏蔽底部");
		CommonUtils.addBlockCSS(".trans-other-wrap.clearfix");
	},
	/**
	 * 自动聚焦输入框
	 */
	autoFocus() {
		utils
			.waitNode<HTMLTextAreaElement>("textarea#j-textarea")
			.then(($textarea) => {
				log.info("自动聚焦输入框");
				setTimeout(() => {
					$textarea.focus();
				}, 2500);
			});
	},
};

export { BaiduFanYi };
