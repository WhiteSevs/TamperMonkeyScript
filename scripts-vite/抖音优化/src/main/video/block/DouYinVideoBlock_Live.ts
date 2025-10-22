import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { DouYinVideoBlock_Live_PlayerCompomemts } from "./DouYinVideoBlock_Live_PlayerCompomemts";

export const DouYinVideoBlock_Live = {
  init() {
    Panel.execMenuOnce("dy-video-live-block-tipClickOrKeyboardFEnterLiveRoom", () => {
      return this.tipClickOrKeyboardFEnterLiveRoom();
    });
    Panel.execMenuOnce("dy-video-live-block-yellowCar", () => {
      return this.blockYellowCar();
    });

    DouYinVideoBlock_Live_PlayerCompomemts.init();
  },
  /**
   * 【屏蔽】点击或按F进入直播间
   */
  tipClickOrKeyboardFEnterLiveRoom() {
    log.info(`【屏蔽】点击或按F进入直播间`);
    return [
      CommonUtil.addBlockCSS(
        '[data-e2e="feed-live"] .douyin-player > a',
        '[data-e2e="feed-live"] [data-e2e="basicPlayer"] > a',
        // 搜索页面的
        '.search-result-card [data-e2e="basicPlayer"] > a[href]',
        ".search-result-card .douyin-player > a[href]"
      ),
    ];
  },
  /**
   * 【屏蔽】小黄车
   */
  blockYellowCar() {
    log.info("【屏蔽】小黄车");
    return [
      CommonUtil.addBlockCSS(
        '[data-e2e="feed-live"] .douyin-player > div:has([data-e2e="yellowCart-container"])',
        '[data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has([data-e2e="yellowCart-container"])',
        // 搜索页面的
        '.search-result-card [data-e2e="basicPlayer"] > div:has([data-e2e="yellowCart-container"])'
      ),
    ];
  },
};
