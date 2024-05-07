import { PopsPanel } from "@/ui";
import { BaiduHaoKanHook } from "./hook";
import { DOMUtils, log, utils } from "@/env";
import HaoKanShieldCSS from "./shield.css?raw";
import { GM_addStyle } from "ViteGM";

const BaiduHaoKan = {
    init() {
        GM_addStyle(HaoKanShieldCSS);
        log.info("插入CSS规则");
        BaiduHaoKanHook.init()
        PopsPanel.execMenu("baidu_haokan_shield_may_also_like", () => {
            this.shieldMayAlsoLike();
        })
        PopsPanel.execMenu("baidu_haokan_shield_today_s_hot_list", () => {
            this.shieldTodayHotList();
        })
        PopsPanel.execMenu("baidu_haokan_shield_right_video_action", () => {
            this.shieldRightVideoAction();
        })
        DOMUtils.ready(() => {
            this.setPlayEvent()
        });
    },
    /**
     * 播放事件
     */
    setPlayEvent() {
        let playBtn = document.querySelector(".play-btn");
        DOMUtils.on(playBtn, "click", function () {
            let currentPageSee = document.querySelector(".video-player .video-player-pause-btns .continue") as HTMLDivElement;
            setTimeout(() => {
                utils.getReactObj(currentPageSee)["reactEventHandlers"]?.["onClick"]();
                PopsPanel.execMenu("baidu_haokan_play_video_and_automatically_enter_full_screen", () => {
                    if (utils.isFullscreenEnabled()) {
                        let videoElement = document.querySelector("#video video.hplayer-video") as HTMLVideoElement;
                        utils.enterFullScreen(videoElement);
                    }
                })
            }, 0);
        });
    },
    /**
     * 屏蔽可能感兴趣
     */
    shieldMayAlsoLike() {
        GM_addStyle(`
        div.top-video-list-container{display: none !important};
        `);
    },
    /**
     * 屏蔽今日热门
     */
    shieldTodayHotList() {
        GM_addStyle(`
        .hot-rank-video{
            display: none !important;
        }
      `);
    },
    /**
     * 屏蔽右侧视频操作
     */
    shieldRightVideoAction() {
        GM_addStyle(`
        .video-author-info-mask .new-video-action{
            display: none !important;
        }
        `);
    },
};


export {
    BaiduHaoKan
}