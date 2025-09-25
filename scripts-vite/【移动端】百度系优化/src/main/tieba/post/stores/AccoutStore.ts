import { defineStore } from "pinia";

const useAccountStore = defineStore("account", {
  state: () => {
    return {
      /** 是否已登录 */
      isLogin: false,
    };
  },
  actions: {},
});
export default useAccountStore;
