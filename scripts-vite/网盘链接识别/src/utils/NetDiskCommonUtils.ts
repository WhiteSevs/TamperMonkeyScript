import { GM_download } from "ViteGM";
import { log } from "@/env";

export const NetDiskCommonUtils = {
  /**
   * 测试是否支持GM_download
   */
  isSupport_GM_download() {
    try {
      return typeof GM_download === "function";
    } catch (error) {
      log.error(error);
      return false;
    }
  },
};
