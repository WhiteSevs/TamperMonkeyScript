import { log } from "@/env";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";

export const DouYinHotBlock = {
  init() {
    Panel.execMenuOnce("dy-hot-blockRightHotList", () => {
      return this.blockRightHotList();
    });
  },
  /**
   * 【屏蔽】右侧抖音热榜
   */
  blockRightHotList() {
    log.info(`【屏蔽】右侧抖音热榜`);
    return addBlockCSS('#douyin-right-container [data-e2e="feed-right-list-container"]');
  },
};
