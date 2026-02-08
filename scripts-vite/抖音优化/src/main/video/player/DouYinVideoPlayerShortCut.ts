import { $$, log, utils } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinElement } from "@/utils/DouYinElement";
import { Panel } from "@components/setting/panel";
import { ShortCut, ShortCutOption } from "@components/utils/ShortCut";
import Qmsg from "qmsg";
import { unsafeWindow } from "ViteGM";
import { DouYinVideoPlayer, VideoPlayerRate } from "./DouYinVideoPlayer";

export const DouYinVideoPlayerShortCut = {
  shortCut: new ShortCut("video-short-cut"),
  $data: {
    rateMap: ["0.75", "1", "1.25", "1.5", "1.75", "2", "3"] as VideoPlayerRate[],
  },
  init() {
    this.shortCut.initGlobalKeyboardListener(this.shorCutMapOption(), {
      capture: true,
      beforeCallBack() {
        if (DouYinRouter.isLive()) {
          // 不允许在直播下执行
          return;
        }
      },
    });
  },
  /**
   * 快捷键配置
   */
  shorCutMapOption(): ShortCutOption {
    return {
      "dy-video-rate-low": {
        callback() {
          log.info("触发快捷键 ==> 调用倍速：小");
          const currentRate = unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
          const findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex((rate) => {
            return rate === currentRate;
          });
          if (findIndex === 0) {
            log.warn("触发快捷键 ==> 已是最小倍速: " + currentRate);
            return;
          }
          const prevRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex - 1];
          log.info("触发快捷键 ==> 设置倍速: " + prevRate);
          DouYinVideoPlayer.chooseVideoRate(prevRate);
        },
      },
      "dy-video-rate-up": {
        callback() {
          log.info("触发快捷键 ==> 调用倍速：大");
          const currentRate = unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
          const findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex((rate) => {
            return rate === currentRate;
          });
          if (findIndex === DouYinVideoPlayerShortCut.$data.rateMap.length - 1) {
            log.warn("触发快捷键 ==> 已是最大倍速: " + currentRate);
            return;
          }
          const nextRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex + 1];
          log.info("触发快捷键 ==> 设置倍速: " + nextRate);
          DouYinVideoPlayer.chooseVideoRate(nextRate);
        },
      },
      "dy-video-shortcut-immersionMode": {
        callback() {
          let value = Panel.getValue<string | boolean>("fullScreen");
          if (typeof value === "boolean") {
            value = !value;
          } else {
            value = false;
          }
          log.info("触发快捷键 ==> 沉浸模式：" + value);
          Panel.setValue("fullScreen", value);
        },
      },
      "dy-video-shortcut-changeVideoMuted": {
        callback() {
          log.info(`触发快捷键 ==> 切换静音状态`);
          const $videos = $$<HTMLVideoElement>("video[src]");
          $videos.forEach(($video) => {
            if (utils.isNull($video.src)) return;
            const muted = !$video.muted;
            log.success(`切换video标签的静音状态为 ${muted}`);
            $video.muted = muted;
          });
        },
      },
      "dy-video-shortcut-parseVideo": {
        callback() {
          log.info(`触发快捷键 ==> 视频解析`);
          const videosInViewVideoList = DouYinElement.getInViewVideo();
          const $shareList = $$('[data-e2e="video-player-share"]');
          const playerShareInViewList = DouYinElement.getInViewNode($shareList);
          if (!videosInViewVideoList.length && !playerShareInViewList.length) {
            log.error("未找到在可视区域内的视频/图文");
            return;
          }
          const $el = videosInViewVideoList?.[0]?.$el || playerShareInViewList?.[0]?.$el;
          DouYinVideoPlayer.hookDownloadButtonToParseVideo($el);
        },
      },
      "dy-video-shortcut-playbackRate": {
        callback() {
          log.info("触发快捷键 ==> 倍速播放");
          const enable = !Boolean(Panel.getValue("dy-video-playbackrate"));
          if (enable) {
            const rate = Panel.getValue<string>("dy-video-playbackrate-select-value");
            Qmsg.success("开启倍速：" + rate);
          } else {
            Qmsg.info("关闭倍速");
          }
          Panel.setValue("dy-video-playbackrate", enable);
        },
      },
    };
  },
};
