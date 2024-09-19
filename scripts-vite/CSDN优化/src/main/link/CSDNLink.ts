import { log, Qmsg } from "@/env";
import { PopsPanel } from "@/setting/setting";

export const CSDNLink = {
	init() {
		PopsPanel.execMenuOnce("csdn-link-jumpRedirect", () => {
			this.jumpRedirect();
		});
	},
	/**
	 * 去除CSDN拦截其它网址的url并自动跳转
	 * @example
	 * https://link.csdn.net/?target=https%3A%2F%2Fjaist.dl.sourceforge.net%2Fproject%2Fportecle%2Fv1.11%2Fportecle-1.11.zip
	 */
	jumpRedirect() {
		try {
			let urlSearchParams = new URLSearchParams(window.location.search);
			if (urlSearchParams.has("target")) {
				let target = urlSearchParams.get("target")!;
				let jumpUrl = decodeURIComponent(target);
				log.success(`跳转链接：${jumpUrl}`);
				window.location.href = jumpUrl;
			} else {
				log.error("解析跳转的链接失败，原因：搜索参数中没有target参数");
			}
		} catch (error: any) {
			Qmsg.error("跳转链接失败：" + error.message);
		}
	},
};
