import { $$, DOMUtils, log, utils } from "@/env";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";

/**
 * 底部工具栏 - 视频信息区域
 */
export const DouYinVideoBlock_BottomToolbar_videoInfo = {
  init() {
    Panel.execMenuOnce("dy-video-bottom-shieldVideoInfoWrap", () => {
      return this.blockVideoInfoWrap();
    });
    Panel.execMenuOnce("dy-video-blockClickRecommend", () => {
      return this.blockClickRecommend();
    });
    Panel.execMenuOnce("dy-video-blockTitleTopTag", () => {
      return this.blobkTitleTopTag();
    });
    Panel.execMenuOnce("dy-video-bottom-shieldVideoUnderTitleTag", () => {
      return this.blockVideoUnderTitleTag();
    });
    Panel.execMenuOnce("dy-video-blockVideoTag", () => {
      return this.blockVideoTag();
    });
    Panel.execMenuOnce("dy-video-blockAIIdentifyTheScreen", () => {
      return this.blockAIIdentifyTheScreen();
    });
    Panel.execMenuOnce("dy-video-blockClickUpdateReminder", () => {
      return this.blockClickUpdateReminder();
    });
    Panel.execMenuOnce("dy-video-blockAuthorDeclaration", () => {
      return this.blockAuthorDeclaration();
    });
  },
  /**
   * 【屏蔽】视频信息
   */
  blockVideoInfoWrap() {
    log.info("【屏蔽】视频信息");
    return [
      addBlockCSS(
        "#video-info-wrap",
        // 直播的信息区域
        '[data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has([aria-label*="直播"])',
        '[data-e2e="feed-live"] .douyin-player > div:has(a[href])'
      ),
      this.blockClickRecommend(),
      this.blobkTitleTopTag(),
    ];
  },
  /**
   * 【屏蔽】点击推荐或共xx人推荐
   */
  blockClickRecommend() {
    log.info(`【屏蔽】点击推荐或共xx人推荐`);
    return addBlockCSS(".xgplayer-recommend-tag");
  },
  /**
   * 【屏蔽】视频标题上面的标签
   *
   * - 每周精选
   * - 抖音精选
   * - 游戏评分
   * - 购物
   */
  blobkTitleTopTag() {
    log.info(`【屏蔽】视频标题上面的标签`);
    return addBlockCSS(
      "span:has(+#video-info-wrap):has(img)",
      "span:has(+div #video-info-wrap):has(img)",
      // 游戏评分
      ".xgplayer .player-position-box-bottom:not(:has(>:only-child)) > div:nth-child(1):has(img[src*='game_center'])",
      ".basePlayerContainer .player-position-box-bottom:not(:has(>:only-child)) > div:nth-child(1):has(img[src*='game_center'])",
      // 购物
      ".player-position-box-bottom .xgplayer-shop-anchor",
      // 游戏评分
      '.douyin-player>div>div:has(img[src*="/game_center/"]):not(:has(#video-info-wrap))'
    );
  },
  /**
   * 【屏蔽】视频标题下的标签
   */
  blockVideoUnderTitleTag() {
    log.info(`【屏蔽】视频标题下的标签`);
    return [addBlockCSS("#video-info-wrap .under-title-tag", '.video-info-detail [data-e2e="video-desc"] + div')];
  },
  /**
   * 【屏蔽】视频标签
   */
  blockVideoTag() {
    log.info(`【屏蔽】视频标签`);
    return addBlockCSS('[data-e2e="video-desc"] span:has(>a[href*="douyin.com/search"])');
  },
  /**
   * 【屏蔽】识别画面
   */
  blockAIIdentifyTheScreen() {
    log.info(`【屏蔽】识别画面`);
    return [
      addBlockCSS(
        // 如果有视频标题下面的标签，如：合集、相关搜索等，那么会有.under-title-tag
        // 如果没有，那么仅【识别画面】一个
        '.under-title-tag + div:has(svg g[filter*="icon_ai_svg__filter"])',
        '[data-e2e="video-desc"] + div:has(svg g[filter*="icon_ai_svg__filter"]):not(:has(.under-title-tag))',
        '.video-info-detail > div > div > div:has(path[d="M5.352 3.497A2.66 2.66 0 0 1 8.12 1.003l.073.004a2.65 2.65 0 0 1 1.838.938c.399.474.629 1.086.605 1.744l-.003.064a2.506 2.506 0 0 1-.076.485l-.068.262 1.15-.295.066-.016c1.393-.322 2.825.479 3.2 1.836l.03.108a2.557 2.557 0 0 1-.314 1.911l-.035.057c-.336.52-.857.925-1.5 1.107l-.063.017a2.617 2.617 0 0 1-.493.079l-.274.017.642.988.037.056c.728 1.185.42 2.739-.73 3.524l-.057.038a2.668 2.668 0 0 1-2.043.357l-.066-.015a2.63 2.63 0 0 1-1.533-1.063l-.035-.053-.034-.053a2.635 2.635 0 0 1-.194-.384l-.101-.25-.755.904c-.913 1.094-2.545 1.306-3.677.458l-.054-.041a2.582 2.582 0 0 1-.976-1.801l-.006-.066a2.566 2.566 0 0 1 .947-2.16l.21-.173-1.108-.427C1.363 8.636.653 7.135 1.168 5.8A2.62 2.62 0 0 1 2.67 4.302a2.68 2.68 0 0 1 2.382.218l.23.143.07-1.168zm2.726-1.313a1.437 1.437 0 0 0-1.52 1.281v.005l-.275 4.462a.027.027 0 0 1-.031.024l-.007-.002-.098-.037-1.259-.486c.1-.167.168-.359.186-.578l.003-.054a1.43 1.43 0 0 0-.739-1.321l-.049-.025-.062-.03a1.453 1.453 0 0 0-.883-.09l-.06.014a1.43 1.43 0 0 0-.986.856 1.414 1.414 0 0 0 .767 1.82l.005.002 4.227 1.637c.018.007.022.029.012.04l-.066.08-.86 1.03a1.366 1.366 0 0 0-.462-.336l-.04-.017-.05-.02a1.477 1.477 0 0 0-1.503.284l-.04.037a1.409 1.409 0 0 0 .11 2.098 1.458 1.458 0 0 0 1.993-.156l.002-.002.001-.001 2.889-3.45a.03.03 0 0 1 .023-.01c.008 0 .014.002.018.006l.004.006.055.086.728 1.121c-.167.072-.326.18-.465.329l-.03.031a1.419 1.419 0 0 0-.2 1.587 1.456 1.456 0 0 0 2.058.546 1.409 1.409 0 0 0 .465-1.916v-.003l-.002-.002-2.442-3.77-.003-.006a.025.025 0 0 1 .02-.032l.1-.026 1.31-.337c.02.193.08.387.195.576.305.493.887.772 1.469.678l.067-.013c.333-.069.611-.246.81-.483l.174-.262c.149-.286.2-.622.122-.959l-.01-.043a1.441 1.441 0 0 0-1.706-1.027h-.006L7.64 6.447h-.001c-.008.003-.017 0-.024-.005a.027.027 0 0 1-.01-.022l.008-.12.08-1.31A1.444 1.444 0 0 0 9.42 3.819a1.387 1.387 0 0 0-.178-.924l-.033-.053a1.44 1.44 0 0 0-1.086-.654l-.045-.004z"])'
      ),
    ];
  },
  /**
   * 【屏蔽】及时接收作品更新提醒
   */
  blockClickUpdateReminder() {
    const lockFn = new utils.LockFunction(() => {
      const $reminder = $$<HTMLElement>(".basePlayerContainer div:has(>div>div):contains('及时接收作品更新提醒')");
      // 修复因移除导致视频信息为归为问题
      if ($reminder.length) {
        for (const $reminderItem of $reminder) {
          const $basePlayerContainer = $reminderItem.closest<HTMLElement>(".basePlayerContainer");
          const $videoInfoDetail = $basePlayerContainer?.querySelector<HTMLElement>(".video-info-detail");
          if ($videoInfoDetail) {
            DOMUtils.css($videoInfoDetail, "padding-bottom", "8px");
          }
        }
        DOMUtils.remove($reminder);
        log.success(`【屏蔽】及时接收作品更新提醒`);
      }
    });
    utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });
  },
  /**
   * 【屏蔽】作者声明
   */
  blockAuthorDeclaration() {
    log.info(`【屏蔽】作者声明`);
    return [addBlockCSS("div:has(>a.safetyBar)")];
  },
};
