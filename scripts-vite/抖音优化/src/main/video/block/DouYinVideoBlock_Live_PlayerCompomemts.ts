import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const DouYinVideoBlock_Live_PlayerCompomemts = {
  init() {
    Panel.execMenuOnce("dy-video-live-block-playComponents-refresh", () => {
      return this.blockRefresh();
    });
  },
  /**
   * 【屏蔽】刷新
   */
  blockRefresh() {
    log.info(`【屏蔽】刷新`);
    return CommonUtil.addBlockCSS('[data-e2e="feed-live"] xg-left-grid .xgplayer-play+.pluginContainer');
  },
};
