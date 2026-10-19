import { DOMUtils, log } from "@/env";
import { SearchEngineRouter } from "@/router/SearchEngineRouter";
import { Baidu } from "./baidu/Baidu";
import { Bing } from "./bing/Bing";
import { Google } from "./google/Google";

export const SearchEngine = {
  init() {
    DOMUtils.on(window, "urlchange", () => {
      this.run();
    }).emit();
  },
  run() {
    if (SearchEngineRouter.isBaidu()) {
      log.info(`Baidu`);
      Baidu.init();
    } else if (SearchEngineRouter.isGoogle()) {
      log.info(`Google`);
      Google.init();
    } else if (SearchEngineRouter.isBing()) {
      log.info(`Bing`);
      Bing.init();
    }
  },
};
