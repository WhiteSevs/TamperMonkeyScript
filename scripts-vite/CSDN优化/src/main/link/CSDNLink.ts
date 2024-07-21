import { log } from "@/env";
import { PopsPanel } from "@/setting/setting";

export const CSDNLink = {
	init() {
		PopsPanel.execMenuOnce("csdn-link-jumpRedirect", () => {
			this.jumpRedirect();
		});
	},
	/**
	 * 去除CSDN拦截其它网址的url并自动跳转
	 */
	jumpRedirect() {
		/* https://link.csdn.net/?target=https%3A%2F%2Fjaist.dl.sourceforge.net%2Fproject%2Fportecle%2Fv1.11%2Fportecle-1.11.zip */
		if (
			window.location.hostname === "link.csdn.net" &&
			window.location.search.startsWith("?target")
		) {
			/* 禁止CSDN拦截跳转 */
			window.stop();
			let search = window.location.search.replace(/^\?target=/gi, "");
			search = decodeURIComponent(search);
			let newURL = search;
			log.success(`跳转链接 ${newURL}`);
			window.location.href = newURL;
		}
	},
};
