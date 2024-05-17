import { GM_addStyle } from "ViteGM";
import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "../Element/DouYinElement";
import { log } from "@/env";

const DouYinLiveChatRoom = {
	init() {
		PopsPanel.execMenu("live-shieldChatRoom", () => {
			this.shieldChatRoom();
		});
		PopsPanel.execMenu("live-shielChatRoomVipSeats", () => {
			this.shielChatRoomVipSeats();
		});
	},
	/**
	 * 【屏蔽】评论区
	 */
	shieldChatRoom() {
		log.info("【屏蔽】评论区");
		DouYinElement.addShieldStyle("#chatroom");
		GM_addStyle(`
		div[data-e2e="living-container"],
		div[data-e2e="living-container"] > div{
			margin-bottom: 0px !important;
		}`);
	},
	/**
	 * 【屏蔽】评论区的贵宾席
	 */
	shielChatRoomVipSeats() {
		log.info("【屏蔽】评论区的贵宾席");
		DouYinElement.addShieldStyle(
			"#chatroom > div > div:has(#audiencePanelScrollId)"
		);
	},
};

export { DouYinLiveChatRoom };
