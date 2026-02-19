import { utils } from "@/env";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import type { UtilsAjaxHookResult } from "@whitesev/utils/dist/types/src/types/ajaxHooker";
import { NetDiskWorker } from "./NetDiskWorker";

export const NetDiskXhrHook = {
  $data: {
    ajaxHooker: null as null | UtilsAjaxHookResult,
  },
  execMatch(workerOption: Omit<NetDiskWorkerOptions, "textList" | "from">) {
    if (!NetDiskGlobalData.match.toBeMatchedXhrHookResponseText.value) {
      return;
    }
    if (this.$data.ajaxHooker) {
      return;
    }
    this.$data.ajaxHooker = utils.ajaxHooker();
    this.$data.ajaxHooker.hook((request) => {
      request.response = (response) => {
        if (typeof response.responseText === "string") {
          NetDiskWorker.postMessage({
            ...workerOption,
            textList: [response.responseText],
            from: "Xhr",
          });
        }
      };
    });
  },
};
