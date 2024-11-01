import { log, utils } from "@/env";
import type { UtilsAjaxHookResult } from "@whitesev/utils/dist/types/src/types/ajaxHooker";

export const NetWorkHook = {
	$data: {
		__ajaxHooker: null as any as UtilsAjaxHookResult,
		get ajaxHooker() {
			if (this.__ajaxHooker == null) {
				this.__ajaxHooker = utils.ajaxHooker();
			}
			return this.__ajaxHooker;
		},
	},
	/**
	 * 拦截贴吧请求
	 *
	 * + /mo/q/getUpConfigData
	 */
	injectTieBaPost_getUpConfigData() {
		this.$data.ajaxHooker.hook((request) => {
			if (request.url.includes("/mo/q/getUpConfigData")) {
				log.info("拦截请求：" + request.url);
				request.abort = true;
			}
		});
	},
};
