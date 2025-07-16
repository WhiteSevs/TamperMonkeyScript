import { utils } from "@/env";

export const XHSNetworkHook = {
	__ajaxHooker: null as null | ReturnType<typeof utils.ajaxHooker>,
	get ajaxHooker(): ReturnType<typeof utils.ajaxHooker> {
		if (this.__ajaxHooker == null) {
			this.__ajaxHooker = utils.ajaxHooker();
		}
		return this.__ajaxHooker;
	},
};
