import { GM_addStyle } from "ViteGM";
import WenkuCSS from "./css/wenku.css?raw";
import ShieldCSS from "./css/shield.css?raw";
import { PopsPanel } from "@/setting/setting";

const CSDNWenKu = {
	init() {
		GM_addStyle(WenkuCSS);
		GM_addStyle(ShieldCSS);
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
		GM_addStyle(`#recommend{display:none !important;}`);
	},
	/**
	 * 【屏蔽】右侧用户信息
	 */
	shieldRightUserInfo() {
		GM_addStyle(`.layout-right{display:none !important;}`);
	},
	/**
	 * 【屏蔽】右侧悬浮工具栏
	 */
	shieldRightToolBar() {
		GM_addStyle(`.csdn-side-toolbar {display:none !important;}`);
	},
};

export { CSDNWenKu };
