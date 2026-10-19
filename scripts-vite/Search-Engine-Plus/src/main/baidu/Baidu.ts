import { log } from "@/env";
import { SearchEngineRouter } from "@/router/SearchEngineRouter";
import { BaiduSearch } from "./BaiduSearch";
import { BaiduHome } from "./BaiduHome";

export const Baidu = {
  init() {
    if (SearchEngineRouter.isBaiduSearch()) {
      log.info(`百度 - 搜索`);
      BaiduSearch.init();
    } else if (SearchEngineRouter.isBaiduHome()) {
      log.info(`百度 - 首页`);
      BaiduHome.init();
    }
  },
};
