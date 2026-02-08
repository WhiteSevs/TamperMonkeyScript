import { $$, log } from "@/env";
import { ShortCut, type ShortCutOption } from "@components/utils/ShortCut";
import { Panel } from "@components/setting/panel";
import { DouYinElement } from "@/utils/DouYinElement";
import Qmsg from "qmsg";
import { DouYinRouter } from "@/router/DouYinRouter";

export const DouYinLiveShortCut = {
  shortCut: new ShortCut("live-short-cut"),
  $data: {
    blockChatRoom: false,
  },
  init() {
    this.shortCut.initGlobalKeyboardListener(this.getShortCutMap(), {
      beforeCallBack() {
        if (!DouYinRouter.isLive()) {
          // 仅允许在直播页面下生效
          return false;
        }
      },
    });
  },
  getShortCutMap(): ShortCutOption {
    return {
      "dy-live-block-chatroom": {
        callback() {
          log.info("快捷键 ==> 【屏蔽】聊天室");
          const KEY = "live-shieldChatRoom";
          const enable = Panel.getValue<boolean>(KEY);
          Panel.setValue(KEY, !enable);
        },
      },
      "dy-live-shieldGiftEffects": {
        callback: () => {
          log.info("快捷键 ==> 【屏蔽】礼物特效");
          const KEY = "live-shieldGiftEffects";
          const enable = Panel.getValue<boolean>(KEY);
          Panel.setValue(KEY, !enable);
        },
      },
      "dy-live-shortcut-shieldGiftColumn": {
        callback() {
          log.info(`触发快捷键  ==> 【屏蔽】底部的礼物栏`);
          const KEY = "live-shieldGiftColumn";
          const enable = Panel.getValue<boolean>(KEY);
          Panel.setValue(KEY, !enable);
        },
      },
      "dy-live-shortcut-changeVideoMuted": {
        callback() {
          log.info(`触发快捷键 ==> 切换静音状态`);
          $$("video").forEach(($video) => {
            const muted = !$video.muted;
            $video.muted = muted;
            log.success(`成功切换video标签的静音状态为 ${muted}`);
          });
        },
      },
      "dy-live-shortcut-switchPlayState": {
        callback() {
          log.info(`触发快捷键 ==> 播放/暂停`);
          const videosInViewVideoList = DouYinElement.getInViewVideo();
          if (!videosInViewVideoList.length) {
            Qmsg.error("未找到直播的video标签");
            return;
          }
          const $liveVideo = videosInViewVideoList[0];
          const isPaused = $liveVideo.$el.paused;
          if (isPaused) {
            $liveVideo.$el.play();
            log.info(`当前为暂停，切换至播放`);
          } else {
            $liveVideo.$el.pause();
            log.info(`当前为播放，切换至暂停`);
          }
        },
      },
    };
  },
};
