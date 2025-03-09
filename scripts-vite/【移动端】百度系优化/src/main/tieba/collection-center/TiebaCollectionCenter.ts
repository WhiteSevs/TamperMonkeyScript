import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/panel";
import { VueUtils } from "@/utils/VueUtils";
import DOMUtils from "@whitesev/domutils";
import Qmsg from "qmsg";
import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";

export const TiebaCollectionCenter = {
	init() {
		PopsPanel.execMenuOnce(
			"tieba_collection_center_repair_card_click_jump",
			() => {
				this.repairCardClickJump();
			}
		);
	},
	/**
	 * 修复卡片点击跳转
	 */
	repairCardClickJump() {
		log.info(`修复卡片点击跳转`);
		DOMUtils.on(
			document,
			"click",
			".collection-center .image-card",
			(event, selectorTarget) => {
				utils.preventEvent(event);
				let vueInstance = VueUtils.getVue(selectorTarget);
				if (!vueInstance) {
					Qmsg.error("获取vue实例失败", { consoleLogContent: true });
					return;
				}
				/** 帖子的id */
				let tid = vueInstance?.item?.tid;
				if (tid == null) {
					Qmsg.error("获取tid失败", { consoleLogContent: true });
					return;
				}
				/** 帖子的链接 */
				let url = TiebaUrlHandler.getPost(tid);
				if (
					PopsPanel.getValue(
						"tieba_collection_center_repair_card_click_jump_open_new_tab"
					)
				) {
					window.open(url, "_blank");
				} else {
					window.location.href = url;
				}
			},
			{ capture: true }
		);
	},
};
