import { $, $$, DOMUtils, log, utils } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import Qmsg from "qmsg";
import { unsafeWindow } from "ViteGM";

export const DouYinRecommend = {
  init() {
    Panel.execMenuOnce("dy-recommend-pauseVideo", () => {
      return this.pauseVideo();
    });
    Panel.execMenuOnce("dy-recommend-disableVideoSatisfaction", () => {
      this.disableVideoSatisfaction();
    });
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("dy-recommend-automaticContinuousPlayback", (option) => {
        const isPlayCollection = option.value === "Sequence+Collection";
        return this.automaticContinuousPlayback(isPlayCollection);
      });
    });
  },
  /**
   * 禁止自动播放
   */
  async pauseVideo() {
    log.info(`禁止自动播放`);
    const selector = ['.page-recommend-container [data-e2e="feed-active-video"] video'];
    const $video = await DOMUtils.waitAnyNode<HTMLVideoElement>(selector, 10000);
    if (!$video) {
      return;
    }
    $video.autoplay = false;
    $video.pause();
    const timeout = 3000;
    // 在firefox中video会重载，如果只触发一次，它依旧会自动播放
    const playCallback = (evt: Event) => {
      // listener remove tag
      DOMUtils.preventEvent(evt);
      $video.autoplay = false;
      $video.pause();
      log.success("成功禁止自动播放视频");
    };
    DOMUtils.off(
      $video,
      "play",
      void 0,
      {
        capture: true,
      },
      (value) => {
        return value.callback.toString().includes("listener remove tag");
      }
    );
    const playListener = DOMUtils.on($video, "play", playCallback, {
      capture: true,
    });
    const offAllListener = () => {
      clearTimeout(timeId);
      log.info(`已移除监听自动播放`);
      playListener.off();
    };
    const timeId = setTimeout(offAllListener, timeout);
    return [
      () => {
        offAllListener();
      },
    ];
  },
  /**
   * 自动连播
   * @param isPlayCollection 是否播放合集内容
   */
  automaticContinuousPlayback(isPlayCollection: boolean) {
    log.info(`自动连播`);
    const attrFlagName = "data-automaticContinuousPlayback";
    /**
     * 获取当前播放的视频
     */
    const queryActiveVideo = <T extends boolean = false>(
      /**
       * @default false
       */
      withAttr: boolean = false,
      isAll: T = false as T
    ): T extends true ? HTMLVideoElement[] : HTMLVideoElement => {
      const selector = `.page-recommend-container:not(:has([data-e2e="feed-live"])) [data-e2e="feed-active-video"] video${
        withAttr ? `:not([${attrFlagName}])` : ""
      }`;
      return isAll ? ($$<HTMLVideoElement>(selector) as any) : ($<HTMLVideoElement>(selector) as any);
    };
    /**
     * 切换视频
     */
    const switchActiveVideo = () => {
      const $next = $(".xgplayer-playswitch-next");
      if ($next) {
        $next.click();
      } else {
        if (Panel.getValue("dy-keyboard-hook-pageUpAndDown")) {
          Qmsg.error("自动连播切换失败，请勿禁用↑↓翻页快捷键");
          return;
        }
        const keydownEvent = new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "ArrowDown",
          code: "ArrowDown",
          keyCode: 40,
          which: 40,
        });
        document.body.dispatchEvent(keydownEvent);
      }
    };
    /**
     * 获取合集内的信息
     */
    const queryRelatedModeInfo = () => {
      const $relatedList = $$("#related-card-list-container .related-list-item-in-small-card");
      const currentRelatedPlayIndex = $relatedList.findIndex(($el) => {
        return Boolean($el.querySelector(".video-playing-item"));
      });
      const $exit = $(
        '.slider-video span:has(svg path[d="M16.7071 3.29289C16.3166 2.90237 15.6834 2.90237 15.2929 3.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L15.2929 20.7071C15.6834 21.0976 16.3166 21.0976 16.7071 20.7071C17.0976 20.3166 17.0976 19.6834 16.7071 19.2929L9.41421 12L16.7071 4.70711C17.0976 4.31658 17.0976 3.68342 16.7071 3.29289Z"])'
      );
      return {
        listLength: $relatedList.length,
        currentIndex: currentRelatedPlayIndex,
        maxIndex: $relatedList.length - 1,
        isEnded: currentRelatedPlayIndex === $relatedList.length - 1,
        $exit,
        $relatedList,
        $currentRelated: $relatedList[currentRelatedPlayIndex],
      };
    };
    const lockFn = new utils.LockFunction(() => {
      if (!DouYinRouter.isRecommend()) {
        // 必须在推荐页面
        return;
      }
      const $activeVideo = queryActiveVideo();
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
        async (evt) => {
          log.success(`视频播放完毕，准备切换至下一个视频`);
          DOMUtils.preventEvent(evt);
          currentVideoSrc = $activeVideo.src;
          const $recommend = $activeVideo.closest<HTMLElement>(".page-recommend-container");
          if (isPlayCollection && $recommend) {
            // 是否存在合集
            const $collectionNextEpisode = $(
              `xpath:.//div[contains(@class,'under-title-tag')]/descendant::span[contains(text(),"合集")]`,
              $recommend
            );
            if ($collectionNextEpisode) {
              const key = utils.getReactInstance($collectionNextEpisode)?.reactFiber?.return?.key;
              const isSeries =
                key === "series" || key === "mix" || $collectionNextEpisode.textContent.trim().startsWith("合集：");
              if (isSeries) {
                const isLatestSeries = $collectionNextEpisode.parentElement?.parentElement?.textContent
                  .trim()
                  .includes("已是最新集");
                if (!isLatestSeries) {
                  log.success(`点击 合集`);
                  $collectionNextEpisode.click();
                  // 等待合集页面加载完成
                  await DOMUtils.waitNode("#slideMode", 3000);
                  log.success(`合集容器加载完成`);
                  await utils.sleep(1500);
                }
              }
            }
          }
          CommonUtil.interval(
            async (isTimeout) => {
              /**
               * 当前是否是合集播放
               */
              const isSlideMode = isPlayCollection && Boolean($activeVideo.closest("#slideMode"));
              if (isTimeout) {
                // 用超时来处理合集内播放到最后一个视频
                const { $exit } = queryRelatedModeInfo();
                if (isSlideMode) {
                  log.success(`当前视频为合集中的最后一个视频，退出合集并播放下一个视频`);
                  // 退出合集
                  if ($exit) {
                    $exit.click();
                    log.info(`点击退出合集按钮`);
                    await utils.sleep(1500);
                  } else {
                    log.error(`退出合集失败，未找到退出合集按钮`);
                  }
                } else {
                  log.error(`切换视频超时，切换失败`);
                }
                return true;
              }
              const $playingVideo = queryActiveVideo();
              const playingSrc = $playingVideo?.src!;
              // 不是同一video元素
              // 是同一video元素,但是src不同(这个时候是在合集页面里播放的)
              if (isSlideMode) {
                // 当前为合集
                // 合集里的视频播放完后会自动往下切换
                if (playingSrc && $activeVideo === $playingVideo && currentVideoSrc !== playingSrc) {
                  // 在合集里，这时候播放视频使用的是同一个video元素
                  log.success("合集-切换视频成功");
                  return true;
                }
              } else {
                if ($activeVideo !== $playingVideo) {
                  log.success("切换视频成功");
                  return true;
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
    const observer = utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });
    return [
      () => {
        observer?.disconnect();

        const $videos = queryActiveVideo(void 0, true);
        DOMUtils.off($videos, "ended");
      },
    ];
  },
  /**
   * 禁用视频满意评价
   */
  disableVideoSatisfaction() {
    log.info(`禁用视频满意评价`);
    unsafeWindow.localStorage.setItem("questionV1", String(Date.now() - 1000 * 60 * 60));
  },
};
