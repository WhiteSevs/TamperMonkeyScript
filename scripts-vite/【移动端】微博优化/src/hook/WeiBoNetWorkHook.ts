import { log, utils } from "@/env";
import { UtilsAjaxHookResult } from "@whitesev/utils/dist/types/src/types/ajaxHooker";

let _ajaxHooker_ = null as any as UtilsAjaxHookResult;
const WeiBoNetWorkHook = {
	get ajaxHooker() {
		if (_ajaxHooker_ == null) {
			log.info("启用ajaxHooker拦截网络");
			_ajaxHooker_ = utils.ajaxHooker();
			_ajaxHooker_.protect();
		}
		return _ajaxHooker_;
	},
};

export { WeiBoNetWorkHook };
