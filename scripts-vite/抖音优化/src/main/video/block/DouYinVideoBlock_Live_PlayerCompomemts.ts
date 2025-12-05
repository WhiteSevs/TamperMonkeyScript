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
    return CommonUtil.addBlockCSS(
      '[data-e2e="feed-live"] xg-left-grid .xgplayer-play+.pluginContainer',
      '.douyin-player-controls div:has(>svg path[d="M24.932 16.444c0-4.687-3.89-8.444-8.634-8.444a8.679 8.679 0 0 0-7.207 3.79v-1.558a.99.99 0 0 0-1.98 0v4.038c0 .547.444.99.99.99h4.038a.99.99 0 0 0 0-1.98h-1.646c1.137-1.963 3.304-3.3 5.804-3.3 3.7 0 6.655 2.918 6.655 6.464 0 3.547-2.956 6.465-6.655 6.465-2.963 0-5.459-1.88-6.326-4.453a.99.99 0 0 0-1.876.633c1.138 3.38 4.39 5.8 8.202 5.8 4.746 0 8.635-3.758 8.635-8.445z"])'
    );
  },
};
