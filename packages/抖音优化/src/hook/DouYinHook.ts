import { unsafeWindow } from "ViteGM";
import { log } from "@/env";

export const DouYinHook = {
	/**
	 * 移除环境检测
	 */
	removeEnvCheck() {
		log.info("移除环境检测");
		let originalSetInterval = unsafeWindow.setInterval as any;
		unsafeWindow.setInterval = function (callback, time) {
			let funcStr = callback.toString().trim();
			if (funcStr.includes("debugger")) {
				log.success(["拦截→", [funcStr]]);
				return;
			}
			if (funcStr.includes("checkEXp")) {
				log.success(["拦截→", [funcStr]]);
				return;
			}
			return originalSetInterval.call(this, callback, time);
		};
	},
};
