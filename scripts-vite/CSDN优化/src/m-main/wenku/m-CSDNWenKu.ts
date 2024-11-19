import { PopsPanel } from "@/setting/setting";
import ShieldCSS from "./css/shield.css?raw";
import { addStyle, log } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";

const M_CSDNWenKu = {
	init() {
		addStyle(ShieldCSS);
		PopsPanel.execMenuOnce("m-csdn-wenku-shieldBottomToolbar", () => {
			return this.shieldBottomToolbar();
		});
	},
	/**
	 * 【屏蔽】底部工具栏
	 */
	shieldBottomToolbar() {
		log.info("【屏蔽】底部工具栏");
		return CommonUtil.addBlockCSS(`.page-container > div.btn`);
	},
};

export { M_CSDNWenKu };
