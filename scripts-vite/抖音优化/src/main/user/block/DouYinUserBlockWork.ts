import { log } from "@/env";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";

export const DouYinUserBlockWork = {
  init() {
    Panel.execMoreMenuOnce(
      [
        ["dy-user-works-block-works", () => this.blockWorks()],
        ["dy-user-works-block-recommend", () => this.blockRecommend()],
        ["dy-user-works-block-likes", () => this.blockLikes()],
      ],
      () => {
        return addBlockCSS("#user-tabbar");
      }
    );
  },
  /**
   * 【屏蔽】作品
   */
  blockWorks() {
    log.info(`【屏蔽】作品`);
    return addBlockCSS("#user-tabbar #semiTabpost");
  },
  /**
   * 【屏蔽】推荐
   */
  blockRecommend() {
    log.info(`【屏蔽】推荐`);
    return addBlockCSS("#user-tabbar #semiTabrecommend");
  },
  /**
   * 【屏蔽】喜欢
   */
  blockLikes() {
    log.info(`【屏蔽】喜欢`);
    return addBlockCSS("#user-tabbar #semiTablike");
  },
};
