import WenkuCSS from "./css/wenku.css?raw";
import ShieldCSS from "./css/shield.css?raw";
import { PopsPanel } from "@/setting/setting";
import { addStyle, log } from "@/env";
import { CSDNUtils } from "@/utils/CSDNUtils";

export const CSDNWenKu = {
	init() {
		addStyle(WenkuCSS);
		addStyle(ShieldCSS);
		PopsPanel.execMenuOnce("csdn-wenku-shieldResourceRecommend", () => {
			return this.shieldResourceRecommend();
		});
		PopsPanel.execMenuOnce("csdn-wenku-shieldRightUserInfo", () => {
			return this.shieldRightUserInfo();
		});
		PopsPanel.execMenuOnce("csdn-wenku-shieldRightToolBar", () => {
			return this.shieldRightToolBar();
		});
	},
	/**
	 * 【屏蔽】资源推荐
	 */
	shieldResourceRecommend() {
		log.info("【屏蔽】资源推荐");
		return CSDNUtils.addBlockCSS("#recommend");
	},
	/**
	 * 【屏蔽】右侧用户信息
	 */
	shieldRightUserInfo() {
		log.info("【屏蔽】右侧用户信息");
		return CSDNUtils.addBlockCSS(".layout-right");
	},
	/**
	 * 【屏蔽】右侧悬浮工具栏
	 */
	shieldRightToolBar() {
		log.info("【屏蔽】右侧悬浮工具栏");
		return CSDNUtils.addBlockCSS(".csdn-side-toolbar");
	},
};
