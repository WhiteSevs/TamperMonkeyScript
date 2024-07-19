import { addStyle, log } from "@/env";
import MbdShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/setting/setting";
import { BaiduMbdHook } from "./MbdHook";
import { CommonUtils } from "@/utils/CommonUtils";

const BaiduMbd = {
	init() {
		/* 
		示例
		https://mbd.baidu.com/newspage/data/landingsuper?isBdboxFrom=1&pageType=1&context=%7B%22nid%22%3A%22news_8924612668430208297%22,%22sourceFrom%22%3A%22bjh%22%7D
		https://mbd.baidu.com/newspage/data/dtlandingshare?sourceFrom=share_ugc&nid=dt_5121203594593120342
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
		return CommonUtils.addBlockCSS(
			"div#commentModule",
			"#comment",
			'#page_wrapper > div > div[class^="borderBottom-"]'
		);
	},
	/**
	 * 屏蔽最热推荐
	 */
	blockExcitingRecommendations() {
		log.info("屏蔽最热推荐");
		return [
			CommonUtils.addBlockCSS(
				'div[class^="relateTitle"]',
				".infinite-scroll-component__outerdiv",
				"div#fuseVideo + div[class]",
				/* 精彩推荐的文字 */
				"#content_wrapper + div + div",
				/* 简单UA下精彩推荐的文字 */
				"#page_wrapper .searchCraft #content_wrapper + div"
			),
			CommonUtils.addBlockCSS(
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
		return CommonUtils.addBlockCSS("div#wise-invoke-interact-bar");
	},
};

export { BaiduMbd };
