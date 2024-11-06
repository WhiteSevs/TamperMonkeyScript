import { addStyle, log } from "@/env";
import ShieldCSS from "./css/shield.css?raw";
import { CSDNHuaWeiCloud } from "@/main/huaWeiCloud/CSDNHuaWeiCloud";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/utils/CommonUtil";

export const M_CSDNHuaWeiCloud = {
	init() {
		addStyle(ShieldCSS);
		PopsPanel.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent", () => {
			return CSDNHuaWeiCloud.autoExpandContent();
		});
		PopsPanel.execMenuOnce(
			"m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",
			() => {
				return this.blockBottomJoinTheCommunity();
			}
		);
	},
	/**
	 * 【屏蔽】底部加入社区
	 */
	blockBottomJoinTheCommunity() {
		log.info("【屏蔽】底部加入社区");
		return CommonUtil.addBlockCSS(".user-desc");
	},
};
