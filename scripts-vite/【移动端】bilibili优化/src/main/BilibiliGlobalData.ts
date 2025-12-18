import { BilibiliUserApi } from "@/api/BilibiliUserApi";

export const BilibiliGlobalData = {
  $data: {
    isLogin: new Promise<boolean>(() => false),
  },
  $flag: {
    isSetQueryLoginStatus: false,
    isQueryLoginStatus: false,
  },
  init() {
    this.resetLoginStatus();
  },
  /**
   * 重置/初始化登录状态
   */
  resetLoginStatus() {
    if (this.$flag.isSetQueryLoginStatus) {
      return;
    }
    this.$flag.isSetQueryLoginStatus = true;
    let isLogin = false;
    this.$data.isLogin = new Promise<boolean>(async (resolve) => {
      if (!this.$flag.isQueryLoginStatus) {
        this.$flag.isQueryLoginStatus = true;
        let userNavInfo = await BilibiliUserApi.nav(false);
        if (userNavInfo && userNavInfo.isLogin) {
          isLogin = true;
        }
      }
      resolve(isLogin);
    });
  },
};
