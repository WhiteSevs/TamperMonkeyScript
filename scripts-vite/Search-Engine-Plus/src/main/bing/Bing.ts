import { SearchEngineRouter } from "@/router/SearchEngineRouter";
import { BingSearch } from "./BingSearch";
import { log } from "@/env";

export const Bing = {
  init() {
    if (SearchEngineRouter.isBingSearch()) {
      log.info(`Bing - 搜索`);
      BingSearch.init();
    }
  },
};
