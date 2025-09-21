import { utils } from "@/env";
import { unsafeWindow } from "ViteGM";

export const ApiConfig = {
  BASE_URL: "https://www.douyin.com/",
  /**
   * 获取通用的数据
   */
  getCommonData() {
    return {
      aid: 6383,
      channel: "channel_pc_web",
      device_platform: "webapp",
      pc_client_type: 1,
      pc_libra_divert: "Windows",
      version_code: 170400,
      version_name: "17.4.0",
      cookie_enabled: true,
      screen_width: window.outerWidth,
      screen_height: window.outerHeight,
      browser_language: "zh-CN",
      browser_platform: "Win32",
      browser_name: "Edge",
      browser_version: "132.0.0.0",
      browser_online: true,
      engine_name: "Blink",
      engine_version: "132.0.0.0",
      os_name: "Windows",
      os_version: 10,
      cpu_core_num: 16,
      device_memory: 8,
      platform: "PC",
      effective_type: "4g",
      round_trip_time: 250,
    };
  },
  /**
   * webid
   *
   * 等同于获取登录用户信息接口的["id"]
   */
  getWebId() {
    return utils.toJSON(unsafeWindow.localStorage.getItem("SysInfo"))["webid"];
  },
  /**
   * sec_user_id
   *
   * MS4....
   */
  getSecUserId() {
    return utils.toJSON(unsafeWindow.localStorage.getItem("user_info"))["uid"];
  },
};

if (import.meta.hot) {
  Reflect.set(unsafeWindow, "ApiConfig", ApiConfig);
}
