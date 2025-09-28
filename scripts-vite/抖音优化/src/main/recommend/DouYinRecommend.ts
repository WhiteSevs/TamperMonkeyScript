import { $, DOMUtils, log, utils } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import Qmsg from "qmsg";

export const DouYinRecommend = {
  init() {
    Panel.execMenuOnce("dy-recommend-automaticContinuousPlayback", () => {
      this.automaticContinuousPlayback();
    });
  },
  /**
   * 自动连播
   */
  automaticContinuousPlayback() {
    log.info(`自动连播`);
    const attrFlagName = "data-automaticContinuousPlayback";
    /**
     * 获取当前播放的视频
     */
    let queryActiveVideo = (
      /**
       * @default false
       */
      withAttr: boolean = false
    ) => {
      return $<HTMLVideoElement>(
        `.page-recommend-container:not(:has([data-e2e="feed-live"])) [data-e2e="feed-active-video"] video${
          withAttr ? `:not([${attrFlagName}])` : ""
        }`
      );
    };
    /**
     * 切换视频
     */
    let switchActiveVideo = () => {
      if (Panel.getValue("dy-keyboard-hook-pageUpAndDown")) {
        Qmsg.error("自动连播切换失败，请勿禁用↑↓翻页快捷键");
        return;
      }
      let keydownEvent = new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        which: 40,
      });
      document.body.dispatchEvent(keydownEvent);
    };
    let lockFn = new utils.LockFunction(() => {
      if (!DouYinRouter.isRecommend()) {
        // 必须在推荐页面
        return;
      }
      let $activeVideo = queryActiveVideo();
      if (!$activeVideo) {
        return;
      }
      if ($activeVideo.hasAttribute(attrFlagName)) {
        return;
      }
      $activeVideo.setAttribute(attrFlagName, "true");
      let currentVideoSrc = $activeVideo.src;
      DOMUtils.on(
        $activeVideo,
        "ended",
        (evt) => {
          log.success(`视频播放完毕，切换至下一个视频`);
          DOMUtils.preventEvent(evt);
          currentVideoSrc = $activeVideo.src;
          /**
           * 当前是否是合集播放
           */
          let isSlideMode = Boolean($activeVideo.closest("#slideMode"));
          CommonUtil.interval(
            (isTimeout) => {
              if (isTimeout) {
                log.error(`切换视频超时，切换失败`);
                return false;
              }
              let $playingVideo = queryActiveVideo();
              let playingSrc = $playingVideo?.src!;
              // 不是同一video元素
              // 是同一video元素,但是src不同(这个时候是在合集页面里播放的)
              if (isSlideMode) {
                // 在合集里，这时候播放视频使用的是同一个video元素
                if (playingSrc && $activeVideo === $playingVideo && currentVideoSrc !== playingSrc) {
                  log.success("合集-切换视频成功");
                  return false;
                }
              } else {
                if ($activeVideo !== $playingVideo) {
                  log.success("切换视频成功");
                  return false;
                }
              }
              // 切换失败
              // 继续切换
              switchActiveVideo();
            },
            500,
            5000
          );
        },
        { capture: true }
      );
    });
    utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      callback: () => {
        lockFn.run();
      },
    });
  },
};
