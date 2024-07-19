import WenkuCSS from "./css/wenku.css?raw";
import ShieldCSS from "./css/shield.css?raw";
import { PopsPanel } from "@/setting/setting";
import { addStyle, log } from "@/env";
import { CSDNUtils } from "@/utils/CSDNUtils";

const CSDNWenKu = {
	init() {
		addStyle(WenkuCSS);
		addStyle(ShieldCSS);
		PopsPanel.execMenu("csdn-wenku-shieldResourceRecommend", () => {
			this.shieldResourceRecommend();
		});
		PopsPanel.execMenu("csdn-wenku-shieldRightUserInfo", () => {
			this.shieldRightUserInfo();
		});
		PopsPanel.execMenu("csdn-wenku-shieldRightToolBar", () => {
			this.shieldRightToolBar();
		});
	},
	/**
	 * 【屏蔽】资源推荐
	 */
	shieldResourceRecommend() {
		log.info("【屏蔽】资源推荐");
		CSDNUtils.addBlockCSS("#recommend");
	},
	/**
	 * 【屏蔽】右侧用户信息
	 */
	shieldRightUserInfo() {
		log.info("【屏蔽】右侧用户信息");
		CSDNUtils.addBlockCSS(".layout-right");
	},
	/**
	 * 【屏蔽】右侧悬浮工具栏
	 */
	shieldRightToolBar() {
		log.info("【屏蔽】右侧悬浮工具栏");
		CSDNUtils.addBlockCSS(".csdn-side-toolbar");
	},
};

export { CSDNWenKu };
