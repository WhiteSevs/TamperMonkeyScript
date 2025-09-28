import { log, utils } from "@/env";
import { UtilsAjaxHookResult } from "@whitesev/utils/dist/types/src/types/ajaxHooker";

export const WeiBoNetWorkHook = {
  _ajaxHooker_: null as null | UtilsAjaxHookResult,
  get ajaxHooker() {
    if (this._ajaxHooker_ == null) {
      log.info("启用ajaxHooker拦截网络");
      this._ajaxHooker_ = utils.ajaxHooker();
      this._ajaxHooker_.protect();
    }
    return this._ajaxHooker_;
  },
};
