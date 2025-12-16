import { $, addStyle, DOMUtils, log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { BilibiliData } from "@/data/BlibiliData";
import artPlayerCSS from "./artplayer/index.css?raw";
import artPlayerCommonCSS from "@/player/player.css?raw";
import type Artplayer from "artplayer";
import { BilibiliOpenApp } from "./BilibiliOpenApp";
import { BlibiliBangumiPlayer } from "./BilibiliBangumiPlayer";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";

export const BilibiliBangumi = {
  $data: {
    art: null as any as Artplayer,
  },
  init() {
    Panel.execMenuOnce("bili-bangumi-initialScale", () => {
      BilibiliUtils.initialScale();
    });
    Panel.execMenuOnce("bili-bangumi-hook-callApp", () => {
      this.hookCallApp();
    });
    Panel.execMenu("bili-bangumi-cover-clicl-event-chooseEp", () => {
      this.setChooseEpClickEvent();
    });
    Panel.execMenu("bili-bangumi-cover-clicl-event-other", () => {
      this.setClickOtherVideo();
    });
    Panel.execMenu("bili-bangumi-cover-clicl-event-recommend", () => {
      this.setRecommendClickEvent();
    });
    this.coverVideoPlayer();
  },
  /**
   * 阻止唤醒App
   */
  hookCallApp() {
    let oldSetTimeout = unsafeWindow.setTimeout;
    unsafeWindow.setTimeout = function (...args: any[]): any {
      let callString = args[0].toString();
      if (callString.includes("autoOpenApp")) {
        log.success("阻止唤醒App", args);
        return;
      }
      return Reflect.apply(oldSetTimeout, this, args);
    };
  },
  /**
   * 覆盖【选集】的点击事件
   */
  setChooseEpClickEvent() {
    DOMUtils.waitNode<HTMLUListElement>(
      BilibiliData.className.bangumi + " .ep-list-pre-wrapper ul.ep-list-pre-container"
    ).then(($preContainer) => {
      log.info("覆盖【选集】的点击事件");
      DOMUtils.on<PointerEvent | MouseEvent>(
        $preContainer,
        "click",
        "li.episode-item",
        function (event) {
          DOMUtils.preventEvent(event);
          BilibiliOpenApp.jumpToUrl(event);
        },
        {
          capture: true,
        }
      );
    });
    DOMUtils.waitNode<HTMLUListElement>(
      BilibiliData.className.bangumi + " .ep-list-pre-wrapper ul.season-list-wrapper"
    ).then(($listWapper) => {
      log.info("覆盖【xx季】的点击事件");
      DOMUtils.on<PointerEvent | MouseEvent>(
        $listWapper,
        "click",
        "li",
        function (event) {
          DOMUtils.preventEvent(event);
          BilibiliOpenApp.jumpToUrl(event);
        },
        {
          capture: true,
        }
      );
    });
    DOMUtils.waitNode<HTMLDivElement>(BilibiliData.className.bangumi + " .ep-list-pre-header").then(($preHeader) => {
      log.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件");
      DOMUtils.on<PointerEvent | MouseEvent>(
        $preHeader,
        "click",
        function (event) {
          DOMUtils.preventEvent(event);
        },
        {
          capture: true,
        }
      );
    });

    // ↓ react框架的
    DOMUtils.on(
      document,
      "click",
      [
        BilibiliData.className.bangumi_new + ` [class^="EpisodeList_episodeListWrap"] m-open-app[universallink]`,
        BilibiliData.className.bangumi_new + ` [class^="SeasonList_container"] m-open-app[universallink]`,
      ],
      (event, selectorTarget) => {
        let url = BilibiliOpenApp.getUrl(selectorTarget);
        if (!url) {
          Qmsg.error("获取跳转链接失败");
          return;
        }
        BilibiliUtils.goToUrl(url);
      },
      {
        capture: true,
      }
    );
  },
  /**
   * 覆盖【PV&其他】、【预告】、【主题曲】的点击事件
   *
   * + https://m.bilibili.com/bangumi/play/ss48852
   */
  setClickOtherVideo() {
    DOMUtils.waitNode<HTMLUListElement>(
      BilibiliData.className.bangumi + " .section-preview-wrapper ul.ep-list-pre-container"
    ).then(($preContainer) => {
      log.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件");
      DOMUtils.on<PointerEvent | MouseEvent>(
        $preContainer,
        "click",
        "li.section-preview-item",
        function (event) {
          DOMUtils.preventEvent(event);
          BilibiliOpenApp.jumpToUrl(event);
        },
        {
          capture: true,
        }
      );
    });
    DOMUtils.waitNode<HTMLDivElement>(BilibiliData.className.bangumi + " .section-preview-header").then(
      ($previewHeader) => {
        log.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件");
        DOMUtils.on<PointerEvent | MouseEvent>(
          $previewHeader,
          "click",
          function (event) {
            DOMUtils.preventEvent(event);
          },
          {
            capture: true,
          }
        );
      }
    );

    // ↓ react框架的
    DOMUtils.on(
      document,
      "click",
      BilibiliData.className.bangumi_new + ` [class^="SectionPanel_container"] m-open-app[universallink]`,
      (event, selectorTarget) => {
        let url = BilibiliOpenApp.getUrl(selectorTarget);
        if (!url) {
          Qmsg.error("获取跳转链接失败");
          return;
        }
        BilibiliUtils.goToUrl(url);
      },
      {
        capture: true,
      }
    );
  },
  /**
   * 覆盖【更多推荐】番剧的点击事件
   */
  setRecommendClickEvent() {
    DOMUtils.waitNode<HTMLUListElement>(BilibiliData.className.bangumi + " .recom-wrapper ul.recom-list").then(
      ($recomList) => {
        log.info("覆盖【更多推荐】番剧的点击事件");
        DOMUtils.on<PointerEvent | MouseEvent>(
          $recomList,
          "click",
          "li.recom-item-v2",
          function (event) {
            DOMUtils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true,
          }
        );
      }
    );

    // ↓ react框架的
    DOMUtils.on(
      document,
      "click",
      BilibiliData.className.bangumi_new + ` [class^="Footer_container"] m-open-app[universallink]`,
      (event, selectorTarget) => {
        let url = BilibiliOpenApp.getUrl(selectorTarget);
        if (!url) {
          Qmsg.error("获取跳转链接失败");
          return;
        }
        BilibiliUtils.goToUrl(url);
      },
      {
        capture: true,
      }
    );
  },
  /**
   * 覆盖视频播放器
   */
  coverVideoPlayer() {
    if ($("#artplayer")) {
      log.warn("已存在播放器，更新播放信息");
    } else {
      addStyle(/*css*/ `
			.player-wrapper,
			.open-app-bar,
			${BilibiliData.className.bangumi_new} [class^="Player_videoWrap"] > div:not(.artplayer-container){
				display: none !important;
			}
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS}
			
			.artplayer-container{
				height: -webkit-fill-available;
				height: 100%;
			}
			`);
      let controlsPadding = Panel.getValue("bili-bangumi-artplayer-controlsPadding-left-right", 0);
      if (controlsPadding != 0) {
        addStyle(/*css*/ `
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					/* 底部 */
					.art-video-player .art-bottom{
						padding-left: ${controlsPadding}px !important;
						padding-right: ${controlsPadding}px !important;
					}
					
					/* 锁定图标 */
					.art-video-player  .art-layer-lock{
						--art-lock-left-size: ${controlsPadding}px;
					}
				}
				`);
      }
    }
    BlibiliBangumiPlayer.updateArtPlayerVideoInfo();
  },
};
