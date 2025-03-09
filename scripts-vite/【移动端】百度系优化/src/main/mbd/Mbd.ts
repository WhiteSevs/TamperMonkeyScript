import { addStyle, log } from "@/env";
import MbdShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/setting/panel";
import { BaiduMbdHook } from "./MbdHook";
import { CommonUtil } from "@/utils/CommonUtil";

const BaiduMbd = {
	init() {
		/* 
		示例
		https://mbd.baidu.com/newspage/data/landingsuper?isBdboxFrom=1&pageType=1&context=%7B%22nid%22%3A%22news_8924612668430208297%22,%22sourceFrom%22%3A%22bjh%22%7D
		https://mbd.baidu.com/newspage/data/dtlandingwise?sourceFrom=share_ugc&nid=dt_3556283486523760921
		*/
		addStyle(MbdShieldCSS);
		log.info("插入CSS规则");
		BaiduMbdHook.init();
		PopsPanel.execMenuOnce("baidu_mbd_block_exciting_comments", () => {
			return this.blockExcitingComments();
		});
		PopsPanel.execMenuOnce("baidu_mbd_block_exciting_recommendations", () => {
			return this.blockExcitingRecommendations();
		});
		PopsPanel.execMenuOnce("baidu_mbd_shield_bottom_toolbar", () => {
			return this.shieldBottomToolbar();
		});
	},
	/**
	 * 屏蔽最热评论
	 */
	blockExcitingComments() {
		log.info("屏蔽最热评论");
		return CommonUtil.addBlockCSS(
			"div#commentModule",
			"#comment",
			'#page_wrapper > div > div[class^="borderBottom-"]'
		);
	},
	/**
	 * 屏蔽最热推荐
	 *
	 * 精彩推荐
	 */
	blockExcitingRecommendations() {
		log.info("屏蔽最热推荐");
		return [
			CommonUtil.addBlockCSS(
				'div[class^="relateTitle"]',
				".infinite-scroll-component__outerdiv",
				"div#fuseVideo + div[class]",
				/* 精彩推荐的文字 */
				"#content_wrapper + div + div",
				/* 简单UA下精彩推荐的文字 */
				"#page_wrapper .searchCraft #content_wrapper + div",
				'.fusionWrapper [class^="reco_"]:has(>[class^="recoConatainer_"])'
			),
			CommonUtil.addBlockCSS(
				/* Gecko下的简单UA下精彩推荐 */
				"#page_wrapper > div > div:nth-child(6)"
			),
		];
	},
	/**
	 * 屏蔽底部工具栏
	 */
	shieldBottomToolbar() {
		log.info("屏蔽底部工具栏");
		return CommonUtil.addBlockCSS("div#wise-invoke-interact-bar");
	},
};

export { BaiduMbd };
