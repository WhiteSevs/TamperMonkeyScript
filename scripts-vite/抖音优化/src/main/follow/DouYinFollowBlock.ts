import { addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";

export const DouYinFollowBlock = {
  init() {
    Panel.execMenuOnce("dy-follow-blockUserLiveFlashingAvatar", () => {
      return this.blockUserLiveFlashingAvatar();
    });
  },
  /**
   * 【屏蔽】用户直播时闪烁的头像
   */
  blockUserLiveFlashingAvatar() {
    log.info(`【屏蔽】用户直播时闪烁的头像`);
    return addStyle(/*css*/ `
    .route-scroll-container [data-e2e="follow-slide-avatar"] *{
        animation: none !important;
    }
    .route-scroll-container [data-e2e="follow-slide-avatar"] span{
        border: transparent;
    }
    .route-scroll-container [data-e2e="follow-slide-avatar"] img[src*="avatar-live"]{
        display: none !important;
    }
    `);
  },
};
