import { addBlockCSS, log } from "@components/env.base";
import { BlockLeftNavigator } from "./blockLeftNavigator";
import { blockLeftNavigatorOther } from "./blockLeftNavigatorOther";
import { BlockSearchFrame } from "./blockSearchFrame";
import { BlockTopNavigator } from "./blockTopNavigator";
import { Panel } from "@components/setting/panel";
import { DouYinBlockAdaptation } from "./DouYinBlockAdaptation";

export const DouYinBlock = {
  init() {
    BlockLeftNavigator.init();
    blockLeftNavigatorOther.init();
    BlockTopNavigator.init();
    BlockSearchFrame.init();
    DouYinBlockAdaptation.init();
    Panel.execMenuOnce("block-continue-watching-phone-watching-live", () => {
      return this.continueWatchingPhoneWatchingLive();
    });
  },
  /**
   * 【屏蔽】是否续播手机在看的直播？
   */
  continueWatchingPhoneWatchingLive() {
    log.info(`【屏蔽】是否续播手机在看的直播？`);
    return addBlockCSS(
      '#douyin-header>div:nth-child(2):has([aria-label*="直播"]):not(header)>div:first-child:not(:empty)'
    );
  },
};
