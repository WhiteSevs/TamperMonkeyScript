import { unsafeWindow } from "ViteGM";
import { $$, DOMUtils, log, utils } from "@/env";
import { ShortCut, ShortCutOption } from "@components/utils/ShortCut";
import { DouYinVideoPlayer, VideoPlayerRate } from "./DouYinVideoPlayer";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";
import { DouYinElement } from "@/utils/DouYinElement";

export const DouYinVideoPlayerShortCut = {
  shortCut: new ShortCut("video-short-cut"),
  $data: {
    rateMap: ["0.75", "1", "1.25", "1.5", "1.75", "2", "3"] as VideoPlayerRate[],
  },
  init() {
    this.shortCut.initGlobalKeyboardListener(this.shorCutMapOption(), {
      capture: true,
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
          let currentRate = unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
          let findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex((rate) => {
            return rate === currentRate;
          });
          if (findIndex === 0) {
            log.warn("触发快捷键 ==> 已是最小倍速: " + currentRate);
            return;
          }
          let prevRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex - 1];
          log.info("触发快捷键 ==> 设置倍速: " + prevRate);
          DouYinVideoPlayer.chooseVideoRate(prevRate);
        },
      },
      "dy-video-rate-up": {
        callback() {
          log.info("触发快捷键 ==> 调用倍速：大");
          let currentRate = unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
          let findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex((rate) => {
            return rate === currentRate;
          });
          if (findIndex === DouYinVideoPlayerShortCut.$data.rateMap.length - 1) {
            log.warn("触发快捷键 ==> 已是最大倍速: " + currentRate);
            return;
          }
          let nextRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex + 1];
          log.info("触发快捷键 ==> 设置倍速: " + nextRate);
          DouYinVideoPlayer.chooseVideoRate(nextRate);
        },
      },
      "dy-video-shortcut-immersionMode": {
        callback() {
          log.info("触发快捷键 ==> 沉浸模式");
          let value = Panel.getValue<boolean>("fullScreen");
          Panel.setValue("fullScreen", !value);
          Panel.execMenuOnce("fullScreen", () => {
            return DouYinVideoPlayer.fullScreen();
          });
        },
      },
      "dy-video-shortcut-changeVideoMuted": {
        callback() {
          log.info(`触发快捷键 ==> 切换静音状态`);
          const $videos = $$<HTMLVideoElement>("video[src]");
          $videos.forEach(($video) => {
            if (utils.isNull($video.src)) return;
            let muted = !$video.muted;
            log.success(`切换video标签的静音状态为 ${muted}`);
            $video.muted = muted;
          });
        },
      },
      "dy-video-shortcut-parseVideo": {
        callback() {
          log.info(`触发快捷键 ==> 视频解析`);
          const videosInViewVideoList = DouYinElement.getInViewVideo();
          if (!videosInViewVideoList.length) {
            Qmsg.error("未找到在可视区域内的视频");
            return;
          }
          const $video = videosInViewVideoList[0].$el;
          log.info(`当前在可视区域内占据面积最大的视频是：`, $video);
          DouYinVideoPlayer.hookDownloadButtonToParseVideo($video);
        },
      },
      "dy-video-shortcut-playbackRate": {
        callback() {
          log.info("触发快捷键 ==> 倍速播放");
          let enable = Boolean(Panel.getValue("dy-video-playbackrate"));
          enable = !enable;
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
