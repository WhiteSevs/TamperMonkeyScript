import { log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";
import Qmsg from "qmsg";

export const BilibiliUtils = {
	getVue(element: HTMLElement | Node | Element) {
		return (element as any).__vue__ as Vue2Context;
	},
	/**
	 * 前往网址
	 * @param path
	 */
	goToUrl(path: string) {
		let $app = document.querySelector<HTMLDivElement>("#app");
		if ($app == null) {
			Qmsg.error("跳转Url: 获取根元素#app失败");
			return;
		}
		let vueObj = BilibiliUtils.getVue($app);
		let $router = vueObj.$router;
		let isGoToUrlBlank = PopsPanel.getValue("bili-go-to-url-blank");
		log.info("即将跳转URL：" + path);
		if (isGoToUrlBlank) {
			/* 新标签打开 */
			window.open(path, "_blank");
		} else {
			/* 本页打开 */
			if (path.startsWith("http") || path.startsWith("//")) {
				window.location.href = path;
			} else {
				$router.push(path);
			}
		}
	},
};
