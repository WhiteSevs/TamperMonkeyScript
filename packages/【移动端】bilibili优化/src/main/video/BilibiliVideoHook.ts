import { log } from "@/env";
import { BilibiliHook } from "@/hook/BilibiliHook";
import { PopsPanel } from "@/setting/setting";

const BilibiliVideoHook = {
	init() {
		PopsPanel.execMenuOnce("bili-video-hook-callApp", () => {
			log.info("hook window.PlayerAgent");
			BilibiliHook.windowPlayerAgent();
		});
	},
};

export { BilibiliVideoHook };
