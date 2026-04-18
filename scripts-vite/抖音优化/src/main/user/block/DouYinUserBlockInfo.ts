import { log } from "@/env";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";

export const DouYinUserBlockInfo = {
  init() {
    Panel.execMenuOnce("dy-user-block-name", () => {
      return this.blockName();
    });
    Panel.execMenuOnce("dy-user-block-follow", () => {
      return this.blockFollow();
    });
    Panel.execMenuOnce("dy-user-block-fans", () => {
      return this.blockFans();
    });
    Panel.execMenuOnce("dy-user-block-likes", () => {
      return this.blockLikes();
    });
    Panel.execMenuOnce("dy-user-block-id", () => {
      return this.blockId();
    });
    Panel.execMenuOnce("dy-user-block-ip", () => {
      return this.blockIp();
    });
    Panel.execMenuOnce("dy-user-block-age", () => {
      return this.blockAge();
    });
    Panel.execMenuOnce("dy-user-block-intro", () => {
      return this.blockIntro();
    });

    Panel.execMenuOnce("dy-user-block-shareHomeButton", () => {
      return this.shareHomeButton();
    });
    Panel.execMenuOnce("dy-user-block-moreButton", () => {
      return this.moreButton();
    });
    Panel.execMenuOnce("dy-user-block-followButton", () => {
      return this.followButton();
    });
    Panel.execMenuOnce("dy-user-block-messageButton", () => {
      return this.messageButton();
    });
  },
  /**
   * 【屏蔽】用户名
   */
  blockName() {
    log.info(`【屏蔽】用户名`);
    return addBlockCSS('[data-e2e="user-detail"] [data-e2e="user-info"] > div:first-child');
  },
  /**
   * 【屏蔽】关注
   */
  blockFollow() {
    log.info(`【屏蔽】关注`);
    return addBlockCSS('[data-e2e="user-detail"] [data-e2e="user-info"] [data-e2e="user-info-follow"]');
  },
  /**
   * 【屏蔽】粉丝
   */
  blockFans() {
    log.info(`【屏蔽】粉丝`);
    return addBlockCSS('[data-e2e="user-detail"] [data-e2e="user-info"] [data-e2e="user-info-fans"]');
  },
  /**
   * 【屏蔽】获赞
   */
  blockLikes() {
    log.info(`【屏蔽】获赞`);
    return addBlockCSS('[data-e2e="user-detail"] [data-e2e="user-info"] [data-e2e="user-info-like"]');
  },
  /**
   * 【屏蔽】抖音号
   */
  blockId() {
    log.info(`【屏蔽】抖音号`);
    return addBlockCSS('[data-e2e="user-detail"] [data-e2e="user-info"]  > p > span:nth-child(1)');
  },
  /**
   * 【屏蔽】IP属地
   */
  blockIp() {
    log.info(`【屏蔽】IP属地`);
    return addBlockCSS('[data-e2e="user-detail"] [data-e2e="user-info"] > p > span:nth-child(2)');
  },
  /**
   * 【屏蔽】年龄
   */
  blockAge() {
    log.info(`【屏蔽】年龄`);
    return addBlockCSS('[data-e2e="user-detail"] [data-e2e="user-info"] > p > span:nth-child(3)');
  },
  /**
   * 【屏蔽】介绍
   */
  blockIntro() {
    log.info(`【屏蔽】介绍`);
    return addBlockCSS('[data-e2e="user-detail"] [data-e2e="user-info"] ');
  },
  /**
   * 【屏蔽】分享主页
   */
  shareHomeButton() {
    log.info(`【屏蔽】分享主页`);
    return addBlockCSS('[data-e2e="user-detail"] #frame-user-info-share-button');
  },
  /**
   * 【屏蔽】更多
   */
  moreButton() {
    log.info(`【屏蔽】更多`);
    return addBlockCSS('[data-e2e="user-detail"] #tooltip');
  },
  /**
   * 【屏蔽】关注
   */
  followButton() {
    log.info(`【屏蔽】关注`);
    return addBlockCSS('[data-e2e="user-detail"] [data-e2e="user-info-follow-btn"]');
  },
  /**
   * 【屏蔽】私信
   */
  messageButton() {
    log.info(`【屏蔽】私信`);
    return addBlockCSS(
      '[data-e2e="user-detail"] *:has(+[data-e2e="user-info-follow-btn"])',
      '[data-e2e="user-detail"] [data-e2e="user-info-follow-btn"]+*'
    );
  },
};
