import { BilibiliUserApi } from "@/api/BilibiliUserApi";

export const BilibiliGlobalData = {
  init() {},
  async isLogin() {
    let isLogin = false;
    const userNavInfo = await BilibiliUserApi.nav(false);
    if (userNavInfo && userNavInfo.isLogin) {
      isLogin = true;
    }
    return isLogin;
  },
};
