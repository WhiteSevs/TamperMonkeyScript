import { utils } from "@/env";
import { tieba_add_request_params_sign } from "@/main/tieba/api/sign";
import { TiebaGlobalData } from "@/main/tieba/data/GlobalData";
import { CommonUtil } from "@components/utils/CommonUtil";
import type { UtilsAjaxHookResult } from "@whitesev/utils/dist/types/src/types/ajaxHooker.js";
import { GM_getValue } from "ViteGM";

export const NetWorkHook = {
  $data: {
    __ajaxHooker: null as null | UtilsAjaxHookResult,
    get ajaxHooker() {
      if (this.__ajaxHooker == null) {
        this.__ajaxHooker = utils.ajaxHooker();
      }
      return this.__ajaxHooker;
    },
  },
  /**
   * 拦截贴吧请求
   */
  hookTiebaThread() {
    const sortMap = {
      热门: 2,
      正序: 0,
      /** 默认值 */
      倒序: 1,
    };
    this.$data.ajaxHooker.hook((request) => {
      const url = CommonUtil.fixUrl(request.url);
      if (!TiebaGlobalData.isNetWorkFirstChangeSortType && url.includes("/c/f/pb/wise")) {
        const urlInst = new URL(url);
        const r = urlInst.searchParams.get("r");
        if (typeof r === "string") {
          TiebaGlobalData.isNetWorkFirstChangeSortType = true;
          const localSortTypeName = GM_getValue(TiebaGlobalData.saveSortTypeKey);
          if (localSortTypeName) {
            // 有值就改
            const localSortType = sortMap[localSortTypeName as keyof typeof sortMap] ?? sortMap["倒序"];
            urlInst.searchParams.set("r", String(localSortType));
            if (localSortType === 1) {
              // 倒序
            } else {
              if (localSortType === 0) {
                // 倒序 => 正序
                urlInst.searchParams.set("pn", "-1");
              } else if (localSortType === 2) {
                // 倒序 => 热门
                urlInst.searchParams.set("pn", "1");
                urlInst.searchParams.delete("top_pid");
              }
              if (urlInst.searchParams.get("sign")) {
                urlInst.searchParams.delete("sign");
                const params: any = utils.searchParamStrToObj(urlInst.searchParams);
                // 更新sign
                tieba_add_request_params_sign(params);
                urlInst.search = utils.toSearchParamsStr(params);
              }
            }
            request.url = urlInst.toString();
          }
        }
      }
    });
  },
};
