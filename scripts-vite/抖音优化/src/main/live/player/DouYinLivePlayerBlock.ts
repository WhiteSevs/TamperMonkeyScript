import { log } from "@/env";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";

export const DouYinLivePlayerBlock = {
  init() {
    Panel.execMenuOnce("dy-live-player-block", () => {
      return this.block();
    });
    Panel.execMenuOnce("dy-live-player-block-play", () => {
      return this.blockPlay();
    });
    Panel.execMenuOnce("dy-live-player-block-refresh", () => {
      return this.blockRefresh();
    });
    Panel.execMenuOnce("dy-live-player-block-playclarity", () => {
      return this.blockPlayclarity();
    });
    Panel.execMenuOnce("dy-live-player-block-threeScreen", () => {
      return this.blockThreeScreen();
    });
    Panel.execMenuOnce("dy-live-player-block-rotate", () => {
      return this.blockScreenRotate();
    });
    Panel.execMenuOnce("dy-live-player-block-danmukuSwitch", () => {
      return this.blockDanmakuSwitch();
    });
    Panel.execMenuOnce("dy-live-player-block-giftSetting", () => {
      return this.blockGiftSetting();
    });
    Panel.execMenuOnce("dy-live-player-block-volume", () => {
      return this.blockVolume();
    });
    Panel.execMenuOnce("dy-live-player-block-miniMode", () => {
      return this.blockMiniMode();
    });
    Panel.execMenuOnce("dy-live-player-block-pageFullScreen", () => {
      return this.blockPageFullScreen();
    });
    Panel.execMenuOnce("dy-live-player-block-fullScreen", () => {
      return this.blockFullScreen();
    });
  },
  /**
   * 【屏蔽】播放器组件
   */
  block() {
    log.info(`【屏蔽】播放器组件`);
    return addBlockCSS('[data-e2e="living-container"] .douyin-player-controls');
  },
  /**
   * 【屏蔽】播放
   */
  blockPlay() {
    log.info(`【屏蔽】播放`);
    return addBlockCSS('[data-e2e="living-container"] .douyin-player-play');
  },
  /**
   * 【屏蔽】刷新
   */
  blockRefresh() {
    log.info(`【屏蔽】刷新`);
    return addBlockCSS('[data-e2e="living-container"] .douyin-player-play+slot:has(svg)');
  },
  /**
   * 【屏蔽】清晰度
   */
  blockPlayclarity() {
    log.info(`【屏蔽】清晰度`);
    return addBlockCSS('[data-e2e="living-container"] .QualitySwitchNewPlugin');
  },
  /**
   * 【屏蔽】三屏画面
   */
  blockThreeScreen() {
    log.info(`【屏蔽】三屏画面`);
    return addBlockCSS('[data-e2e="living-container"] div:has(>[data-e2e="triple_screen_icon"])');
  },
  /**
   * 【屏蔽】屏幕旋转
   */
  blockScreenRotate() {
    log.info(`【屏蔽】屏幕旋转`);
    return addBlockCSS('[data-e2e="living-container"] .douyin-player-rotate');
  },
  /**
   * 【屏蔽】弹幕开关
   */
  blockDanmakuSwitch() {
    log.info(`【屏蔽】弹幕开关`);
    return addBlockCSS('[data-e2e="living-container"] div:has(>[data-e2e="danmaku-setting-icon"])');
  },
  /**
   * 【屏蔽】礼物设置
   */
  blockGiftSetting() {
    log.info(`【屏蔽】礼物设置`);
    return addBlockCSS('[data-e2e="living-container"] div:has(>[data-e2e="gift-setting"])');
  },
  /**
   * 【屏蔽】音量
   */
  blockVolume() {
    log.info(`【屏蔽】音量`);
    return addBlockCSS('[data-e2e="living-container"] .douyin-player-volume');
  },
  /**
   * 【屏蔽】小窗模式
   */
  blockMiniMode() {
    log.info(`【屏蔽】小窗模式`);
    return addBlockCSS(
      '[data-e2e="living-container"] .douyin-player-controls slot > div:has(svg path[d="M22.5 10H10v11h6.25a1 1 0 1 1 0 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v4.5a1 1 0 1 1-2 0V10zm-9.465 6.622c0 .485.393.878.877.878h3.511a.878.878 0 0 0 .878-.878v-3.51a.878.878 0 0 0-1.756 0v1.348l-2.695-2.696a.878.878 0 1 0-1.241 1.241l2.74 2.74h-1.437a.878.878 0 0 0-.877.877zm6.074 1.878a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4z"])'
    );
  },
  /**
   * 【屏蔽】网页全屏
   */
  blockPageFullScreen() {
    log.info(`【屏蔽】网页全屏`);
    return addBlockCSS(
      '[data-e2e="living-container"] .douyin-player-controls slot > div:has(svg path[d="M9.75 8.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H9.75zM15 11.25h-3.75a1 1 0 0 0-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 0 1-1 1z"])',
      '[data-e2e="living-container"] .douyin-player-controls slot > div:has(svg path[d="M7.75 10.5a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9.75a2 2 0 0 1-2-2v-11zM14 15.75h-3.75v-2H13V11h2v3.75a1 1 0 0 1-1 1zm7.75.5H18a1 1 0 0 0-1 1V21h2v-2.75h2.75v-2z"])'
    );
  },
  /**
   * 【屏蔽】进入全屏
   */
  blockFullScreen() {
    log.info(`【屏蔽】进入全屏`);
    return addBlockCSS('[data-e2e="living-container"] .douyin-player-fullscreen');
  },
};
