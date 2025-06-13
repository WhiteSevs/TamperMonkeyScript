import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";

export const TiebaCheckUrl = {
	init() {
		Panel.execMenu("baidu-tieba-checkUrl-autoJumpUrl", () => {
			this.autoJumpUrl();
		});
	},
	/**
	 * 跳转链接
	 */
	autoJumpUrl() {
		log.info(`跳转链接`);
		let url = new URLSearchParams(globalThis.location.search).get("url");
		if (typeof url === "string") {
			log.success(`跳转链接：` + url);
			globalThis.location.href = url;
		} else {
			log.error(`解析当前的跳转链接失败`);
			Qmsg.error("解析当前的跳转链接失败");
		}
	},
};
