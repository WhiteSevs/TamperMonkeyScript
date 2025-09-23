import { GM_download } from "ViteGM";

export const NetDiskCommonUtils = {
  /**
   * 测试是否支持GM_download
   */
  isSupport_GM_download() {
    try {
      return typeof GM_download === "function";
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
