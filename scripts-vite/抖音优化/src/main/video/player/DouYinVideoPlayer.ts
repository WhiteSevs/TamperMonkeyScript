import { $, $$, DOMUtils, addStyle, log, pops, utils } from "@/env";
import { DouYinElement } from "@/main/DouYinElement";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";
import { GestureBack } from "@components/utils/GestureBack";
import { ReactUtils } from "@components/utils/ReactUtils";
import type { ReactFiberNode } from "@whitesev/utils/dist/types/src/types/React.js";
import Qmsg from "qmsg";
import { GM_download, unsafeWindow } from "ViteGM";
import type { DouYinVideoAwemeInfoWithDOM, DouYinVideoConversionInfo } from "../../../../types/DouYinVideoType";
import { DouYin } from "../../DouYin";
import { DouYinGestureBackHashConfig } from "../../DouYinGestureBackConfig";
import { DouYinVideoBlock } from "../block/DouYinVideoBlock";
import { DouYinVideoBlock_BottomToolbar_PlayerComponents } from "../block/DouYinVideoBlock_BottomToolbar_PlayerComponents";
import { DouYinVideoBlock_BottomToolbar_videoInfo } from "../block/DouYinVideoBlock_BottomToolbar_videoInfo";
import { DouYinVideoBlock_RightToolbar } from "../block/DouYinVideoBlock_RightToolbar";
import MobileCSS from "../css/mobile.css?raw";
import { DouYinVideoElementAutoHide } from "../DouYinVideoElementAutoHide";
import { DouYinVideoFilterBase } from "../filter/DouYinVideoFilterBase";
import { DouYinVideoPlayerBlockMouseHoverTip } from "./DouYinVideoPlayerBlockMouseHoverTip";
import { DouYinVideoPlayerShortCut } from "./DouYinVideoPlayerShortCut";

/**
 * 视频播放器的播放速度
 */
export type VideoPlayerRate = "0.75" | "1" | "1.25" | "1.5" | "1.75" | "2" | "3";

export const DouYinVideoPlayer = {
  $flag: {
    isWaitEnterFullScreen: false,
  },
  init() {
    DouYinVideoBlock.init();
    Panel.onceExec("dy-short-cut", () => {
      DouYinVideoPlayerShortCut.init();
    });
    DouYinVideoPlayerBlockMouseHoverTip.init();
    Panel.execMenuOnce("changeCommentToBottom", () => {
      return this.changeCommentToBottom();
    });
    Panel.execMenuOnce("fullScreen", (config) => {
      return this.fullScreen(config.value);
    });
    Panel.execMenuOnce("parseVideo", () => {
      return this.hookDownloadButtonToParseVideo();
    });
    Panel.execMenuOnce("dy-video-hookCopyLinkButton", () => {
      return this.hookCopyLinkButton();
    });
    Panel.exec(
      ["autoEnterElementFullScreen", "search-autoEnterElementFullScreen"],
      () => {
        this.autoEnterElementFullScreen();
      },
      (keyList) => {
        const [mainKey, childKey] = keyList;
        const mainValue = Panel.getValue<boolean>(mainKey);
        const childValue = Panel.getValue<number>(childKey);
        if (DouYinRouter.isSearch()) {
          if (mainValue) {
            if (childValue == 1) {
              // 开
              return true;
            } else if (childValue == 0) {
              // 关
              return false;
            } else {
              // 默认
            }
          }
        }
        return mainValue;
      },
      false
    );
    Panel.execMenuOnce("dy-video-doubleClickAction", (option) => {
      if (option.value === "") return;
      return this.doubleClickAction(option.value);
    });
    Panel.execMenuOnce(["dy-video-bgColor-enable", "dy-video-changeBackgroundColor"], (option) => {
      return this.changeBackgroundColor(option.value[1]);
    });
    Panel.execMenuOnce("repairProgressBar", () => {
      const result: HTMLStyleElement[] = [];
      Panel.onceExec("repairProgressBar", () => {
        result.push(...this.repairVideoProgressBar());
      });
      return result;
    });
    Panel.execMenuOnce("dy-video-gestureBackCloseComment", () => {
      return this.gestureBackCloseComment();
    });
    Panel.execMenuOnce("dy-video-removeStyle-bottom", () => {
      return this.removeStyleBottom();
    });
    Panel.execMenuOnce("dy-video-disableRightToolbarTransform", () => {
      return this.disableRightToolbarTransform();
    });
    DouYinVideoPlayer.chooseQuality(Panel.getValue("chooseVideoDefinition"));
    Panel.execMenuOnce("dy-video-object-fit", (option) => {
      return this.objectFit(option.value);
    });
    Panel.execMenuOnce(["dy-video-playbackrate", "dy-video-playbackrate-select-value"], (option) => {
      return this.playbackrate(option.value[1]);
    });
    Panel.execMenuOnce("dy-video-allowSelectTitleText", () => {
      return this.allowSelectTitleText();
    });
    Panel.execMenuOnce("dy-video-playerCollectShowScroll", () => {
      return this.playerCollectShowScroll();
    });
    DOMUtils.onReady(() => {
      DouYinVideoPlayer.chooseQuality(Panel.getValue("chooseVideoDefinition"));
      Panel.execMenuOnce("dy-video-waitToRemovePauseDialog", () => {
        return this.waitToRemovePauseDialog();
      });
      Panel.execMenuOnce("mobileMode", () => {
        return this.mobileMode();
      });
      Panel.execMenuOnce("dy-video-titleInfoAutoHide", () => {
        return this.titleInfoAutoHide();
      });
      Panel.execMenuOnce("dy-video-videoControlsAutoHide", () => {
        return this.videoControlsAutoHide();
      });
      Panel.execMenuOnce("dy-video-rightToolBarAutoHide", () => {
        return this.rightToolBarAutoHide();
      });
      Panel.execMenuOnce("dy-video-commentTimeJump", () => {
        return this.commentTimeJump();
      });
    });
  },
  /**
   * 沉浸模式
   */
  fullScreen(mode: boolean | "mouseEnterShow" | "bottomInfoWrap-rightToolBar") {
    log.info("沉浸模式：" + mode);
    const result = [];
    if (typeof mode === "boolean" && mode) {
      // 全部
      result.push(
        addBlockCSS(
          /* 中间底部的视频控制工具栏 */
          "xg-controls.xgplayer-controls"
        )
      );
      // 左上角搜索框
      result.push(...DouYinVideoBlock.blockSearchFloatingBar());
      // 右侧工具栏
      result.push(DouYinVideoBlock_RightToolbar.blockToolBar());
      // 底部视频信息
      result.push(DouYinVideoBlock_BottomToolbar_videoInfo.blockVideoInfoWrap());
      // 底部播放器组件
      result.push(DouYinVideoBlock_BottomToolbar_PlayerComponents.blockBottomVideoToolBar());
      result.push(
        addStyle(/*css*/ `
			/* 视频全屏 */
			xg-video-container.xg-video-container{
				bottom: 0px !important;
			}
			/* 图文的图片全屏 */
			.basePlayerContainer  .focusPanel .dySwiperSlide img[src]{
        height: 100%;
        object-fit: contain;
        transform: translateY(-50%);
        top: 50%;
        position: relative;
			}
      /* 修复有时候背景为全黑的问题 */
      .isCssFullScreen .basePlayerContainer video{
        height: calc(100% - 2px) !important;
      }
      `)
      );
    } else if (mode === "mouseEnterShow") {
      result.push(
        addStyle(/*css*/ `
        ${[
          // 自动隐藏视频信息
          ...[
            "#video-info-wrap",
            // 播放器底部的信息，如：点击推荐
            ".basePlayerContainer .player-position-box-bottom",
            // 直播
            '[data-e2e="feed-live"] .douyin-player > div:has([aria-label*="直播"])',
          ],
          // 自动隐藏视频控件
          ...[
            `xg-controls.xgplayer-controls`,
            // 直播
            `[data-e2e="feed-live"] .douyin-player-controls`,
          ],
          // 自动隐藏右侧工具栏
          ...[
            ".positionBox",
            // 直播
            '[data-e2e="feed-live"] .douyin-player > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"])',
          ],
        ].join(",")}{
          opacity: 0 !important;
        }
        ${[
          // 自动隐藏视频信息
          ...[
            ".playerContainer:not(:has(.xgplayer-inactive)):hover #video-info-wrap",
            ".playerContainer:not(:has(.xgplayer-inactive)):hover .basePlayerContainer .player-position-box-bottom",
            '[data-e2e="feed-live"]:hover [data-e2e="basicPlayer"] > div:has([aria-label*="直播"])',
          ],
          // 自动隐藏视频控件
          ...[
            ".playerContainer:not(:has(.xgplayer-inactive)):hover xg-controls.xgplayer-controls",
            '[data-e2e="feed-live"]:hover .douyin-player-controls',
          ],
          // 自动隐藏右侧工具栏
          ...[
            ".playerContainer:not(:has(.xgplayer-inactive)):hover .positionBox",
            '[data-e2e="feed-live"]:hover .douyin-player > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"])',
          ],
        ].join(",")}{
          opacity: 1 !important;
        }
      `)
      );
    } else if (mode === "bottomInfoWrap-rightToolBar") {
      // 隐藏底部信息区域和右侧工具栏
      // 左上角搜索框
      result.push(...DouYinVideoBlock.blockSearchFloatingBar());
      // 右侧工具栏
      result.push(DouYinVideoBlock_RightToolbar.blockToolBar());
      // 底部视频信息
      result.push(...DouYinVideoBlock_BottomToolbar_videoInfo.blockVideoInfoWrap());
    } else {
      log.warn("未知mode参数: " + mode);
    }
    return result;
  },
  /**
   * 自动进入全屏
   * @param [userKeyBoard=false] 是否使用键盘触发
   * @param [isWebSiteFullScreen=true] 是否是网页全屏，默认（true），否则是全屏
   */
  autoEnterElementFullScreen(userKeyBoard = false, isWebSiteFullScreen = true) {
    if (this.$flag.isWaitEnterFullScreen) {
      log.warn(`已存在等待进入全屏...`);
      return;
    }
    this.$flag.isWaitEnterFullScreen = true;
    if (userKeyBoard) {
      // 使用键盘事件触发全屏
      // 优点：只要抖音不修改触发全屏的快捷键，则此方案可以一直使用
      const keyboardEventDict: KeyboardEventInit = isWebSiteFullScreen
        ? {
            bubbles: true,
            cancelable: true,
            key: "Y",
            code: "KeyY",
          }
        : {
            bubbles: true,
            cancelable: true,
            key: "H",
            code: "KeyH",
          };
      const keydownEvent = new KeyboardEvent("keydown", keyboardEventDict);
      DOMUtils.emit(document.body || document, keydownEvent, {
        disableHook: true,
      });
      this.$flag.isWaitEnterFullScreen = false;
      log.success(`成功自动进入${isWebSiteFullScreen ? "网页" : ""}全屏:使用快捷键触发的方式`);
    } else {
      // 点击全屏按钮来触发全屏
      DOMUtils.onReady(() => {
        ReactUtils.waitReactPropsToSet(
          () => {
            if (isWebSiteFullScreen) {
              if (DouYinRouter.isLive()) {
                // 直播的网页全屏按钮
                return $<HTMLElement>(DouYinElement.liveWebsiteFullScreen());
              } else {
                return (
                  // 普通视频的网页全屏按钮
                  $<HTMLElement>(DouYinElement.videoFullScreen()) ||
                  // 搜索页面的网页全屏按钮↓
                  $<HTMLElement>(DouYinElement.searchPageActiveVideoFullScreen())
                );
              }
            } else {
              if (DouYinRouter.isLive()) {
                // 直播的进入全屏按钮
                return (
                  $<HTMLElement>(DouYinElement.liveFullScreen()) ||
                  // 直播的退出全屏按钮
                  $<HTMLElement>(DouYinElement.liveQuitFullScreen())
                );
              } else {
                // 普通视频的全屏按钮
                return $<HTMLElement>(DouYinElement.activeVideoFullScreen());
              }
            }
          },
          "reactProps",
          {
            check(reactInstance) {
              return typeof reactInstance?.onClick === "function";
            },
            set: (reactInstance, $target) => {
              this.$flag.isWaitEnterFullScreen = false;
              log.success(`成功自动进入${isWebSiteFullScreen ? "网页" : ""}全屏：通过点击按钮触发的方式`);
              $target.click();
            },
          }
        );
      });
    }
  },
  /**
   * 双击video动作
   * @param action 动作
   */
  doubleClickAction(action: "website-fullscreen" | "fullscreen") {
    const isWebSiteFullScreen = action === "website-fullscreen";
    log.info("双击video动作：" + action);
    let videoPaused: boolean = false;
    const listener = DOMUtils.onOneOrDouble(
      document,
      [".newVideoPlayer", ".slider-video"],
      (evt, $selector, options) => {
        if (options.isDouble) {
          // 双击
          DOMUtils.preventEvent(evt);
          this.autoEnterElementFullScreen(true, isWebSiteFullScreen);
        }
        const $video = $selector.querySelector("video");
        if (!$video) {
          Qmsg.error("未找到video元素");
          return;
        }
        if (options.isDouble) {
          // 恢复播放状态
          // 因为如果双击前是暂停状态，那双击后会导致video暂停，所以这里恢复播放状态
          if (videoPaused) {
            log.info(`双击动作：${$video.paused ? "由暂停恢复到双击前的播放" : "保持暂停"}`);
            $video.pause();
          } else {
            log.info(`双击动作：${$video.paused ? "保持播放" : "由播放恢复到双击前的暂停"}`);
            $video.play();
          }
        } else {
          // 单击
          videoPaused = $video.paused;
        }
      },
      {
        capture: true,
        eventType: "click",
        checkClickTime: 250,
        overrideTarget: false,
      }
    );
    return listener.off;
  },
  /**
   * 评论区移到中间
   */
  changeCommentToBottom() {
    log.info("评论区移到中间");
    return [
      /* 2024.5.27 dy更名videoSideBar=>videoSideCard */
      addStyle(/*css*/ `
      /* 竖屏样式 */
      @media screen and (orientation: portrait) {
        #sliderVideo[data-e2e="feed-video"] #videoSideBar #relatedVideoCard,
        #sliderVideo[data-e2e="feed-video"] #videoSideCard #relatedVideoCard{
          display: none !important;
        }
        /* 左侧的视频宽度撑满 */
        #sliderVideo[data-e2e] .playerContainer,
        #slideMode[data-e2e] .playerContainer{
          width: 100% !important;
        }
        /* 右侧的评论区宽度撑满，position使用absolute */
        #sliderVideo[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
        #slideMode[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
        #sliderVideo[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard),
        #slideMode[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard){
          width: 100%;
          height: 75%;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          transition: height .15s linear !important;
          position: absolute;
        }
      }
		`),
    ];
  },
  /**
   * 选择视频清晰度
   * @param [mode=0] 视频播放模式
   */
  chooseQuality(mode = 0) {
    log.info("选择视频清晰度: " + mode);
    const QualitySessionKey = "MANUAL_SWITCH";
    const clarityReal = [
      "normal_720_0",
      "normal_1080_0",
      "normal_540_0",
      "low_720_0",
      "low_540_0",
      "adapt_lowest_1440_1",
      "lower_540_0",
      "adapt_low_540_0",
      "adapt_lowest_1080_1",
      "adapt_lowest_720_1",
      "adapt_540_1",
      "adapt_lower_540_1",
      "adapt_lowest_1440_1",
      "adapt_lowest_720_1",
      "adapt_540_1",
      "adapt_lower_540_1",
      "adapt_lowest_4_1",
      "adapt_lowest_hdr_4_1",
    ];

    const definition = [
      {
        // clarityReal: clarityReal,
        done: 1,
        gearClarity: "20",
        gearName: "超清 4K",
        gearType: -2,
        qualityType: 72,
      },
      {
        // clarityReal: clarityReal,
        done: 1,
        gearClarity: "10",
        gearName: "超清 2K",
        gearType: -1,
        qualityType: 7,
      },
      {
        // clarityReal: clarityReal,
        done: 1,
        gearClarity: "5",
        gearName: "高清 1080P",
        gearType: 1,
        qualityType: 2,
      },
      {
        // clarityReal: clarityReal,
        done: 1,
        gearClarity: "4",
        gearName: "高清 720P",
        gearType: 2,
        qualityType: 15,
      },
      {
        // clarityReal: clarityReal,
        done: 1,
        gearClarity: "3",
        gearName: "标清 540P",
        gearType: 3,
        qualityType: 21,
      },
      {
        // clarityReal: clarityReal,
        done: 1,
        gearClarity: "2",
        gearName: "极速",
        gearType: 4,
        qualityType: 21,
      },
      {
        // clarityReal: clarityReal,
        done: 1,
        gearClarity: "0",
        gearName: "智能",
        gearType: 0,
      },
    ];
    const choose = definition.find((item) => item.gearType === mode);
    /**
     * 抖音清晰度读取是来自session的
     * @param value
     */
    function setVideoQuality(value: string) {
      unsafeWindow.sessionStorage.setItem(QualitySessionKey, value);
    }
    if (choose) {
      const chooseStr = JSON.stringify(choose);
      const intervalId = setInterval(() => {
        setVideoQuality(chooseStr);
      }, 250);
      setTimeout(() => {
        clearInterval(intervalId);
      }, 10 * 1000);
      log.success("设置当前视频的清晰度: " + choose.gearName);
    } else {
      log.error("该清晰度不存在: " + mode);
    }
  },
  /**
   * 选择视频倍速
   * @param [rate="1"] 倍速
   */
  chooseVideoRate(rate: VideoPlayerRate = "1") {
    const Definition_Key = "player_playbackratio";
    /**
     * 设置播放倍速
     *
     * 先设置session的值，再调用更新函数
     * @param value
     */
    function setRate(value: VideoPlayerRate = "1") {
      unsafeWindow.sessionStorage.setItem(Definition_Key, value);
      $$<HTMLLIElement>("xg-icon.xgplayer-playback-setting").forEach(($playbackSetting) => {
        const $container = utils.getReactInstance($playbackSetting).reactContainer;
        const updatePlayBackRatio = $container?.memoizedState?.element?.props?.xgCase?.updatePlayBackRatio;
        if (typeof updatePlayBackRatio === "function") {
          updatePlayBackRatio();
        } else {
          Qmsg.error("设置倍速失败，原因：未找到更新播放倍速的函数");
        }
      });
    }
    setRate(rate);
  },
  /**
   * 修改页面的分享-下载按钮变成解析视频
   * @param $parseNode 需要解析的元素
   */
  hookDownloadButtonToParseVideo($parseNode?: Element) {
    log.info("修改页面的分享-下载按钮变成解析视频");
    type ParseVideoDownloadInfo = {
      /**
       * 视频宽度
       */
      width: number;
      /**
       * 视频高度
       */
      height: number;
      /**
       * 视频帧率
       */
      fps: number;
      /**
       * 视频格式
       * @example
       * "mp4"
       * @example
       * "dash"
       */
      format: string;
      /**
       * 视频大小
       */
      dataSize: number;
      /**
       * 视频链接
       */
      url: string;
      /**
       * 视频链接（备用）
       */
      backUrl: string[];
    };
    type ParseMusicDownloadInfo = {
      /** 专辑名，一般情况下是空字符串 */
      album: string;
      /** 作者名 */
      author: string;
      /** 音乐名 */
      title: string;
      /** 播放时长 */
      duration: number;
      /** 播放链接 */
      url: string;
      /** 播放链接（备用） */
      backUrl: string[];
    };
    type ParsePictureDownloadInfo = {
      /**
       * 图片链接
       */
      url: string;
      /**
       * 图片宽度
       */
      width: number;
      /**
       * 图片高度
       */
      height: number;
      /**
       * 图文视频
       */
      video?: ParseVideoDownloadInfo[];
    };
    /**
     * 显示弹窗
     * @param data
     */
    const showParseInfoDialog = (data: {
      videoInfo?: {
        author: string;
        desc: string;
      };
      musicDownloadInfo?: {
        fileName: string;
        urlInfoList: ParseMusicDownloadInfo[];
      };
      videoDownloadInfo?: {
        fileName: string;
        urlInfoList: ParseVideoDownloadInfo[];
      };
      pictureDownloadInfo?: {
        fileName: string;
        urlInfoList: ParsePictureDownloadInfo[];
      };
    }) => {
      let showHTML = "";
      let showParseVideoInfoHTML = "";
      let showParseMusicInfoHTML = "";
      let showParsePictureInfoHTML = "";
      if (data.videoInfo) {
        showHTML += /*html*/ `
        <div class="dy-link-info-wrapper dy-link-item">
          <div class="dy-info-name">
            <span>作者：</span>
            <span>${data.videoInfo.author}</span>
          </div>
          <div class="dy-info-desc">
            <span>文案：</span>
            <span>${data.videoInfo.desc}</span>
          </div>
        </div>
        `;
      }
      // 显示视频信息
      if (data.videoDownloadInfo) {
        data.videoDownloadInfo.urlInfoList.forEach((downloadInfo) => {
          const videoQualityInfo = `${downloadInfo.width}x${downloadInfo.height} @${downloadInfo.fps}`;
          let downloadFileName = data.videoDownloadInfo!.fileName;
          // 占位符替换
          downloadFileName = transformDownloadFileName(
            {
              quality: videoQualityInfo,
            },
            downloadFileName
          );
          // 文件名加上格式
          downloadFileName = downloadFileName + "." + downloadInfo.format;
          showParseVideoInfoHTML += /*html*/ `
          <div class="dy-link-item">
            <div class="dy-link-item-name">
              <span>清晰度信息：</span>
              <span>${videoQualityInfo}</span>
            </div>
            <div class="dy-link-item-size">
              <span>视频大小：</span>
              <span>${downloadInfo.dataSize ? utils.formatByteToSize(downloadInfo.dataSize) : "未知大小"}</span>
            </div>
            <div class="dy-link-item-download-uri">
              <span>下载地址：</span>
              <a href="${downloadInfo.url}" data-format="mp4" data-file-name="${downloadFileName}">${downloadInfo.url}</a>
            </div>
            ${
              downloadInfo.backUrl.length
                ? /*html*/ `
              <div class="dy-link-item-back-uri">
                <span>备用地址：</span>
                ${downloadInfo.backUrl
                  .map((url, index) => {
                    return /*html*/ `
                    <a href="${url}" data-format="mp4" data-file-name="${downloadFileName}">地址${index + 1}</a>
                  `;
                  })
                  .join("，")}
              </div>
            `
                : ""
            }
          </div>`;
        });

        if (utils.isNotNull(showParseVideoInfoHTML)) {
          showHTML += /*html*/ `<div class="dy-link-download-wrapper">${showParseVideoInfoHTML}</div>`;
        }
      }
      // 显示背景音乐信息
      if (data.musicDownloadInfo) {
        data.musicDownloadInfo.urlInfoList.forEach((downloadInfo) => {
          let downloadFileName = data.musicDownloadInfo!.fileName;
          // 占位符替换
          downloadFileName = transformDownloadFileName({}, downloadFileName);
          // 文件名加上格式
          downloadFileName = downloadFileName + ".mp3";
          showParseMusicInfoHTML += /*html*/ `
          <div class="dy-link-item">
            ${
              utils.isNotNull(downloadInfo.album)
                ? /*html*/ `
            <div class="dy-link-item-name">
              <span>专辑：</span><span>${downloadInfo.album}</span>
            </div>`
                : ""
            }
            <div class="dy-link-item-name">
              <span>音乐人：</span>
              <span>${downloadInfo.author}</span>
            </div>
            <div class="dy-link-item-title">
              <span>音乐名称：</span>
              <span>${downloadInfo.title}</span>
            </div>
            <div class="dy-link-item-title">
              <span>播放时长：</span>
              <span>${downloadInfo.duration ? DouYinUtils.parseDuration(downloadInfo.duration) : "未知时长"}</span>
            </div>
            <div class="dy-link-item-download-uri">
              <span>下载地址：</span>
              <a href="${downloadInfo.url}" data-format="mp3" data-file-name="${downloadFileName}">${downloadInfo.url}</a>
            </div>
            ${
              downloadInfo.backUrl.length
                ? /*html*/ `
              <div class="dy-link-item-back-uri">
                <span>备用地址：</span>
                ${downloadInfo.backUrl
                  .map((url, index) => {
                    return /*html*/ `
                    <a href="${url}" data-format="mp3" data-file-name="${downloadFileName}">地址${index + 1}</a>
                  `;
                  })
                  .join("，")}
              </div>
            `
                : ""
            }
          </div>
          `;
        });
        if (utils.isNotNull(showParseMusicInfoHTML)) {
          showHTML += /*html*/ `<div class="dy-link-download-wrapper">${showParseMusicInfoHTML}</div>`;
        }
      }
      // 显示图片信息
      if (data.pictureDownloadInfo) {
        data.pictureDownloadInfo?.urlInfoList.forEach((downloadInfo, index) => {
          const pictureSizeInfo = `${downloadInfo.width}x${downloadInfo.height}`;
          let downloadFileName = data.pictureDownloadInfo!.fileName;
          // 占位符替换
          downloadFileName = transformDownloadFileName(
            {
              quality: pictureSizeInfo,
            },
            downloadFileName
          );
          // 文件名加上格式
          downloadFileName = downloadFileName + ".png";
          showParsePictureInfoHTML += /*html*/ `
          <div class="dy-link-item">
            <div class="dy-card-wrapper">
              <div class="dy-img-wrapper">
                <a href="${downloadInfo.url}" data-format="png" data-file-name="${downloadFileName}" class="dy-cover-link">
                  <img src="${downloadInfo.url}" loading="lazy" />
                </a>
              </div>
              <div class="dy-card_stats" data-size-info>
                <span>${pictureSizeInfo}</span>
              </div>
              ${
                downloadInfo.video?.length
                  ? /*html*/ `
              <div class="dy-card_stats" data-video="true" data-index="${index}">
                <span>视频</span>
              </div>  
              `
                  : ""
              }
            </div>
          </div>`;
        });

        if (utils.isNotNull(showParsePictureInfoHTML)) {
          showHTML += /*html*/ `<div class="dy-link-download-wrapper">${showParsePictureInfoHTML}</div>`;
        }
      }
      const $dialog = pops.alert({
        title: {
          text: "视频解析（DOM）",
          position: "center",
        },
        content: {
          text: showHTML,
          html: true,
        },
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
          },
        },
        btn: {
          ok: {
            enable: false,
          },
        },
        width: window.innerWidth > 550 ? "550px" : "88vw",
        height: window.innerHeight > 550 ? "550px" : "80vh",
        drag: true,
        dragLimit: true,
        style: /*css*/ `
          .dy-link-info-wrapper,
          .dy-link-download-wrapper{
            border: 1px solid #000000;
            border-radius: 5px;
            margin: 10px;
          }
          .dy-link-item > div{
            display: flex;
          }
          .dy-link-info-wrapper > div > span{
            white-space: normal;
          }
          .dy-link-info-wrapper > div > span:first-child{
            white-space: nowrap;
          }
          .dy-link-item,
          .dy-link-download-wrapper a{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .dy-link-info-wrapper > div,
          .dy-link-download-wrapper > div{
            margin: 10px;
          }
          .dy-link-download-wrapper:has(.dy-img-wrapper){
            display: flex;
            flex-wrap: wrap;
          }
          .dy-card-wrapper{
            position: relative;
            overflow: hidden;
            width: 220px;
            height: 220px;
          }
          .dy-img-wrapper{
            width: 100%;
            height: 100%;
          }
          .dy-card_stats{
            position: absolute;
            z-index: 2;
            width: 100%;
            font-size: .8em;
            color: #fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            cursor: pointer;
          }
          .dy-card_stats[data-video]{
            background: linear-gradient(180deg, rgba(0, 0, 0, .85), transparent);
            top: 0px;
            padding-top: 2px;
          }
          .dy-card_stats[data-size-info]{ 
            background: linear-gradient(0deg, rgba(0, 0, 0, .85), transparent);
            bottom: 0px;
            padding-bottom: 2px;
          }
          .dy-card_stats span{

          }
          .dy-cover-link{

          }
          .dy-cover-link img{
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
          `,
      });
      DOMUtils.on(
        $dialog.$pops,
        "click",
        `.dy-card-wrapper:has(.dy-card_stats[data-video][data-index])`,
        (evt, $click) => {
          DOMUtils.preventEvent(evt);
          const $cardStats = $click.querySelector<HTMLElement>(".dy-card_stats[data-video][data-index]")!;
          const index = Number($cardStats.getAttribute("data-index"));
          if (isNaN(index)) {
            Qmsg.error("未获取到index");
            return;
          }
          const pictureInfo = data.pictureDownloadInfo!.urlInfoList[index];
          if (pictureInfo == null) {
            Qmsg.error("未获取到图片信息");
            return;
          }
          const clonePictureInfo = structuredClone(pictureInfo);
          const video = clonePictureInfo.video!;
          clonePictureInfo.video = [];
          showParseInfoDialog({
            videoInfo: data.videoInfo,
            videoDownloadInfo: {
              fileName: data.videoDownloadInfo?.fileName!,
              urlInfoList: video,
            },
            pictureDownloadInfo: {
              fileName: data.pictureDownloadInfo?.fileName!,
              urlInfoList: [clonePictureInfo],
            },
          });
        },
        { capture: true, overrideTarget: false }
      );
      DOMUtils.on(
        $dialog.$pops,
        "click",
        "a",
        (evt, $click) => {
          DOMUtils.preventEvent(evt);
          const url = $click.getAttribute("href")!;
          const format = $click.getAttribute("data-format");
          let fileName = $click.getAttribute("data-file-name")!;
          /**
           * 测试是否支持GM_download
           */
          const isSupport_GM_download = function () {
            try {
              return typeof GM_download === "function";
            } catch (error) {
              log.error(error);
              return false;
            }
          };
          const popupDownloadRenameFileName = Panel.getValue("dy-video-popupDownloadRenameFileName");
          if (popupDownloadRenameFileName) {
            const renameFileName = globalThis.prompt("请确认下载的文件名", fileName);
            if (typeof renameFileName === "string") {
              log.info(`重命名下载的文件名：${fileName} -> ${renameFileName}`);
              fileName = renameFileName;
            } else {
              log.info("取消下载");
              return;
            }
          }
          if (!isSupport_GM_download()) {
            log.error("当前脚本环境不支持API 【GM_download】");
            window.open(url, "_blank");
            return;
          }
          /** 取消下载函数 */
          let abortDownload: null | Function = null;
          /** 是否成功下载 */
          let isSuccessDownload = false;
          /** 是否下载完成 */
          let isDownloadEnd = false;
          let downloadingQmsg = Qmsg.loading("下载中...", {
            showClose: true,
            onClose() {
              if (!isSuccessDownload && typeof abortDownload === "function") {
                abortDownload();
              }
            },
          });
          let result = GM_download({
            url: url,
            name: fileName,
            headers: {
              Referer: window.location.href,
            },
            onload() {
              isSuccessDownload = true;
              downloadingQmsg.close();
              Qmsg.success(`下载 ${fileName} 已完成`);
            },
            onprogress(details) {
              if (typeof details === "object" && "loaded" in details && "total" in details && !isDownloadEnd) {
                const progressNum = details.loaded / details.total;
                const formatProgressNum = (progressNum * 100).toFixed(2);
                downloadingQmsg.setText(`下载中...${formatProgressNum}%`);
                if (details.loaded === details.total) {
                  isDownloadEnd = true;
                }
              }
            },
            onerror(error) {
              downloadingQmsg.close();
              log.error("下载失败error👉", error);
              if (typeof error === "object" && error["error"]) {
                Qmsg.error(`下载 ${fileName} 失败或已取消 原因：${error["error"]}`, {
                  timeout: 6000,
                });
              } else {
                Qmsg.error(`下载 ${fileName} 失败或已取消`);
              }
            },
            ontimeout() {
              downloadingQmsg.close();
              Qmsg.error(`下载 ${fileName} 请求超时`);
            },
          });
          if (typeof result === "object" && result != null && "abort" in result) {
            abortDownload = result.abort;
          }
        },
        {
          capture: true,
          overrideTarget: false,
        }
      );
    };
    /**
     * 转换下载的文件名
     */
    const transformDownloadFileName = (
      data:
        | {
            uid?: string;
            nickname?: string;
            desc?: string;
            downloadTime?: string;
            quality?: string;
          }
        | {
            album?: string;
            author?: string;
            title?: string;
            duration?: number;
          },
      fileNameTemplate: string = Panel.getValue<string>("dy-video-parseVideo-downloadFileName")
    ): string => {
      for (const key in data) {
        if (!Object.hasOwn(data, key)) continue;
        const value = data[key as keyof typeof data] as unknown;
        if (value == null) continue;
        const valueStr = value?.toString();
        fileNameTemplate = fileNameTemplate.replace(`{${key}}`, valueStr);
      }
      fileNameTemplate = fileNameTemplate.replaceAll(
        /[:?"*<>|~/\\\u{1}-\u{1f}\u{7f}\u{80}-\u{9f}\p{Cf}\p{Cn}]|^[.\u{0}\p{Zl}\p{Zp}\p{Zs}]|[.\u{0}\p{Zl}\p{Zp}\p{Zs}]$|^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?=\.|$)/giu,
        "_"
      );
      return fileNameTemplate;
    };
    /**
     * 点击回调
     */
    const callback = ($click: Element) => {
      if ($click.closest('[data-e2e="feed-live"]')) {
        Qmsg.error("无法解析直播video的下载信息");
        return;
      }
      const parentReactFilber = utils.getReactInstance($click?.parentElement!)?.reactFiber;
      const $basePlayerContainer = $click.closest<HTMLElement>(".basePlayerContainer");
      const basePlayerContainerReactFiber = utils.getReactInstance($basePlayerContainer!)?.reactFiber;
      if (!parentReactFilber && !basePlayerContainerReactFiber) {
        log.error($click, parentReactFilber, $basePlayerContainer, basePlayerContainerReactFiber);
        Qmsg.error("获取rectFiber属性失败");
        return;
      }
      try {
        const awemeInfo = utils.queryProperty<ReactFiberNode, DouYinVideoAwemeInfoWithDOM>(
          parentReactFilber || basePlayerContainerReactFiber,
          (target) => {
            if (typeof target.memoizedProps === "object" && target.memoizedProps != null) {
              if (typeof target.memoizedProps.awemeInfo === "object" && target.memoizedProps.awemeInfo != null) {
                return {
                  isFind: true,
                  data: target.memoizedProps.awemeInfo,
                };
              } else {
                if (typeof target.return === "object" && target.return != null) {
                  return {
                    isFind: false,
                    data: target.return,
                  };
                } else {
                  return {
                    isFind: false,
                    data: null,
                  };
                }
              }
            } else {
              return {
                isFind: false,
                data: null,
              };
            }
          }
        );
        if (!awemeInfo) {
          log.error($click, parentReactFilber, basePlayerContainerReactFiber);
          Qmsg.error("获取awemeInfo属性失败");
          return;
        }
        log.info("DOM上的的awemeInfo：", awemeInfo);
        const filterBase = new DouYinVideoFilterBase();
        const transformAwemeInfoWithDOM = filterBase.parseAwemeInfoDictData(
          awemeInfo,
          "dom",
          true
        ) as Required<DouYinVideoConversionInfo>;
        log.info("DOM上解析出的transformAwemeInfo：", transformAwemeInfoWithDOM);
        if (transformAwemeInfoWithDOM.nickname == null) {
          transformAwemeInfoWithDOM.nickname = "未知作者";
        }
        if (transformAwemeInfoWithDOM.desc == null) {
          transformAwemeInfoWithDOM.desc = "未知视频文案";
        }
        // 收集到的全部的下载地址
        let videoDownloadUrlList: ParseVideoDownloadInfo[] = [];
        let musicDownloadUrlList: ParseMusicDownloadInfo[] = [];
        let pictureDownloadUrlList: ParsePictureDownloadInfo[] = [];

        videoDownloadUrlList = videoDownloadUrlList.concat(
          transformAwemeInfoWithDOM.videoBitRateList.map((it) => {
            return it;
          })
        );
        if (
          typeof transformAwemeInfoWithDOM.musicUrl === "string" &&
          utils.isNotNull(transformAwemeInfoWithDOM.musicUrl)
        ) {
          musicDownloadUrlList.push({
            url: transformAwemeInfoWithDOM.musicUrl,
            author: transformAwemeInfoWithDOM.musicAuthor,
            album: transformAwemeInfoWithDOM.musicAlbum,
            title: transformAwemeInfoWithDOM.musicTitle,
            duration: transformAwemeInfoWithDOM.musicDuration,
            backUrl: transformAwemeInfoWithDOM.musicBackUrlList,
          });
        }
        if (Array.isArray(transformAwemeInfoWithDOM?.pictureList) && transformAwemeInfoWithDOM.pictureList.length) {
          // 图文
          // 图文内有时候存在Live实况
          pictureDownloadUrlList = pictureDownloadUrlList.concat(
            transformAwemeInfoWithDOM.pictureList.map((item) => {
              return {
                url: item.url,
                width: item.width,
                height: item.height,
                video: item.videoBitRateList,
              };
            })
          );
        }
        if (!videoDownloadUrlList.length && !pictureDownloadUrlList.length) {
          Qmsg.error("未解析出有效的资源信息");
          return;
        }
        const downloadTime = utils.formatTime(void 0, "yyyy-MM-dd_HH:mm:ss");
        // 视频下载的文件名
        const videoDownloadFileName = transformDownloadFileName({
          downloadTime: downloadTime,
          uid: transformAwemeInfoWithDOM.uid,
          nickname: transformAwemeInfoWithDOM.nickname,
          desc: transformAwemeInfoWithDOM.desc,
        });
        // 音乐下载的文件名
        const musicDownloadFileName = transformDownloadFileName(
          {
            downloadTime: downloadTime,
            album: transformAwemeInfoWithDOM.musicAlbum,
            author: transformAwemeInfoWithDOM.musicAuthor,
            title: transformAwemeInfoWithDOM.musicTitle,
            duration: transformAwemeInfoWithDOM.musicDuration,
          },
          Panel.getValue<string>("dy-video-parseVideoMusic-downloadFileName")
        );
        // 图片下载的文件名
        const pictureDownloadFileName = transformDownloadFileName({
          downloadTime: downloadTime,
          uid: transformAwemeInfoWithDOM.uid,
          nickname: transformAwemeInfoWithDOM.nickname,
          desc: transformAwemeInfoWithDOM.desc,
        });
        showParseInfoDialog({
          videoInfo: {
            author: transformAwemeInfoWithDOM.nickname,
            desc: transformAwemeInfoWithDOM.desc,
          },
          videoDownloadInfo: {
            fileName: videoDownloadFileName,
            urlInfoList: videoDownloadUrlList,
          },
          musicDownloadInfo: {
            fileName: musicDownloadFileName,
            urlInfoList: musicDownloadUrlList,
          },
          pictureDownloadInfo: {
            fileName: pictureDownloadFileName,
            urlInfoList: pictureDownloadUrlList,
          },
        });
      } catch (error) {
        log.error(error);
        Qmsg.error("解析视频失败：" + (<Error>error).message);
      }
    };
    if ($parseNode) {
      callback($parseNode);
    } else {
      const result = DOMUtils.on<MouseEvent | PointerEvent>(
        document,
        "click",
        'div[data-e2e="video-share-container"] div[data-inuser="false"] button + div',
        (evt, $click) => {
          DOMUtils.preventEvent(evt);
          callback($click);
        },
        {
          capture: true,
        }
      );
      return [result.off];
    }
  },
  /**
   * 修改页面的分享-复制链接
   */
  hookCopyLinkButton() {
    log.info("修改页面的分享-复制链接");
    const result = DOMUtils.on(
      document,
      "click",
      'div[data-e2e="video-share-container"] div[data-inuser="false"] button:contains("复制链接")',
      (event, selectorTarget) => {
        DOMUtils.preventEvent(event);
        const $click = selectorTarget;
        const rectFiber = utils.getReactInstance($click.parentElement as HTMLElement)?.reactFiber;
        if (!rectFiber) {
          Qmsg.error("获取rectFiber属性失败");
          return;
        }
        const awemeInfo = rectFiber?.return?.return?.memoizedProps?.awemeInfo as DouYinVideoAwemeInfoWithDOM | null;
        if (awemeInfo == null || typeof awemeInfo !== "object") {
          Qmsg.error("获取awemeInfo属性失败");
          return;
        }
        log.info(`视频awemeInfo：`, awemeInfo);
        let shareUrl = awemeInfo?.shareInfo?.shareUrl;
        if (typeof shareUrl !== "string") {
          Qmsg.error("获取shareUrl属性失败");
          return;
        }
        log.info(`视频链接：` + shareUrl);
        try {
          const shareUrlInst = new URL(shareUrl);
          shareUrlInst.search = "";
          shareUrl = shareUrlInst.toString();
          log.info(`去除search参数后的链接：` + shareUrl);
        } catch {}
        utils.copy(shareUrl).then((copyFlag) => {
          let toast = rectFiber?.return?.return?.memoizedProps?.toast;
          if (copyFlag) {
            toast = typeof toast === "function" ? toast : Qmsg.success;
            toast("已复制链接");
          } else {
            toast = typeof toast === "function" ? toast : Qmsg.error;
            toast("复制链接失败");
          }
        });
      },
      { capture: true, overrideTarget: false }
    );
    return [result.off];
  },
  /**
   * 手机模式
   */
  mobileMode() {
    log.info("启用手机模式");
    const result: HTMLStyleElement[] = [];
    DouYin.initialScale();
    /* 屏蔽底部视频工具栏右侧的?帮助反馈按钮 */
    result.push(addBlockCSS("img#douyin-temp-sidebar")!, addStyle(MobileCSS));
    Panel.onceExec("repairProgressBar", () => {
      result.push(...this.repairVideoProgressBar());
    });
    return result;
  },
  /**
   * 修复进度条按钮
   */
  repairVideoProgressBar() {
    log.info("修复进度条按钮");
    const result: any[] = [
      addStyle(/*css*/ `
			/* 禁止触发touch事件，因为会影响到按钮点击不到 */
      @media screen and (max-width: 600px) and (orientation: portrait),
        screen and (max-height: 600px) and (orientation: landscape) {
        xg-outer,
        xg-inners {
          pointer-events: none;
        }
      }
			`),
    ];
    const mobileMode = Panel.getDynamicValue("mobileMode");
    const repairProgressBar = Panel.getDynamicValue("repairProgressBar");
    result.push(mobileMode.destory, repairProgressBar.destory);
    /**
     * 检测是否启用
     */
    const checkEnable = () => {
      return mobileMode.value || repairProgressBar.value;
    };
    const isMobile = () => {
      if (DouYinUtils.isVerticalScreen()) {
        // 竖屏
        return window.innerWidth <= 600;
      } else {
        // 横屏
        return window.innerHeight <= 600;
      }
    };
    DOMUtils.onReady(() => {
      // 让拖拽进度条的按钮拖拽时修改进度条高度
      DOMUtils.on(
        document.body,
        "touchstart",
        "xg-progress",
        (event, $click) => {
          if (!checkEnable()) return;
          if (!isMobile()) return;
          const $xg_outer = $click.querySelector<HTMLElement>("xg-outer");
          if ($xg_outer) {
            $xg_outer.style.height = "6px";
          }
        },
        {
          capture: true,
          overrideTarget: false,
        }
      );
      // 让拖拽进度条的按钮拖拽时修改进度条高度
      DOMUtils.on(
        document.body,
        "touchend",
        "xg-progress",
        (event, $click) => {
          if (!checkEnable()) return;
          if (!isMobile()) return;
          const $xg_outer = $click.querySelector<HTMLElement>("xg-outer");
          if ($xg_outer) {
            $xg_outer.style.height = "";
          }
        },
        {
          capture: true,
          overrideTarget: false,
        }
      );
    });

    return result;
  },
  /**
   * 修改视频背景颜色
   * @param color 颜色
   */
  changeBackgroundColor(color: string) {
    log.info("修改视频背景颜色");
    return addStyle(/*css*/ `
		/* 推荐的直播间背景 */
		xgmask,
		#sliderVideo > div,
		/* 用户主页的视频 */
		.basePlayerContainer .imgBackground,
		/* 搜索的图文视频 */
		.basePlayerContainer .dySwiperSlide img+div{
			background: ${color}  !important;
		}
		`);
  },
  /**
   * 自动隐藏视频信息
   */
  titleInfoAutoHide() {
    log.info(`自动隐藏视频信息`);
    return DouYinVideoElementAutoHide("dy-video-titleInfoAutoHide-delayTime", [
      "#video-info-wrap",
      // 播放器底部的信息，如：点击推荐
      ".basePlayerContainer .player-position-box-bottom",
      // 直播
      '[data-e2e="feed-live"] .douyin-player > div:has([aria-label*="直播"])',
    ]);
  },
  /**
   * 自动隐藏视频控件
   */
  videoControlsAutoHide() {
    log.info(`自动隐藏视频控件`);
    return DouYinVideoElementAutoHide("dy-video-videoControlsAutoHide-delayTime", [
      `xg-controls.xgplayer-controls`,
      // 直播
      `[data-e2e="feed-live"] .douyin-player-controls`,
    ]);
  },
  /**
   * 自动隐藏右侧工具栏
   */
  rightToolBarAutoHide() {
    log.info(`自动隐藏右侧工具栏`);
    const result = DouYinVideoElementAutoHide("dy-video-titleInfoAutoHide-delayTime", [
      ".positionBox",
      // 直播
      '[data-e2e="feed-live"] .douyin-player > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"])',
    ]);
    result.push(
      addStyle(/*css*/ `
			.positionBox{
				transition: opacity 0.5s;
			}
		  `)
    );
    return result;
  },
  /**
   * 手势返回关闭评论区
   */
  gestureBackCloseComment() {
    log.info(`手势返回关闭评论区`);
    const gestureback = new GestureBack({
      hash: DouYinGestureBackHashConfig.videoCommentDrawer,
      useUrl: true,
      beforeHistoryBackCallBack(isUrlChange) {
        if (isUrlChange) {
          closeComment();
        }
      },
    });

    const $closeSelector = `#relatedVideoCard .semi-tabs + div svg:has(path[d="M22.133 23.776a1.342 1.342 0 1 0 1.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 0 0-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 1 0-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 0 0 1.898 1.898l4.113-4.113 4.112 4.113z"])`;
    /**
     * 关闭评论区
     */
    function closeComment() {
      const $close = $<HTMLElement>($closeSelector);
      if ($close) {
        const rect = utils.getReactInstance($close);
        if (rect) {
          const fn = rect.reactProps?.onClick;
          if (typeof fn === "function") {
            fn();
          } else {
            Qmsg.error("调用关闭评论区按钮的onClick函数失败");
          }
        } else {
          Qmsg.error("获取关闭评论区按钮react信息失败");
        }
      } else {
        Qmsg.error("未找到关闭评论区的按钮");
      }
    }

    const result1 = DOMUtils.on(
      document,
      "click",
      `.xgplayer div[data-e2e="feed-comment-icon"]`,
      () => {
        log.info(`手势 => 打开评论区`);
        DOMUtils.waitNode($closeSelector, 10000).then(($el) => {
          if (!$el) {
            return;
          }
          log.info(`手势 => 评论区出现`);
          gestureback.enterGestureBackMode();
        });
      },
      {
        capture: true,
        overrideTarget: false,
      }
    );
    const result2 = DOMUtils.on(
      document,
      "click",
      $closeSelector,
      () => {
        log.info(`手势 => 关闭评论区`);
        gestureback.quitGestureBackMode();
      },
      {
        capture: true,
        overrideTarget: false,
      }
    );
    return [result1.off, result2.off];
  },
  /**
   * 信息区域
   *
   * 长时间无操作，已暂停播放
   */
  waitToRemovePauseDialog() {
    log.info("监听信息区域【长时间无操作，已暂停播放】弹窗");
    /**
     * 检测并关闭弹窗
     * @param $ele
     */
    const checkDialogToClose = ($ele: HTMLElement) => {
      const eleText = DOMUtils.text($ele);
      if (eleText.includes("长时间无操作") && eleText.includes("暂停播放")) {
        Qmsg.info(`出现【长时间无操作，已暂停播放】弹窗`);
        const $rect = utils.getReactInstance($ele);
        if (typeof $rect.reactProps === "object" && $rect.reactProps != null) {
          const closeDialogFn = utils.queryProperty($rect.reactProps, (obj) => {
            if (typeof obj?.["props"]?.["onClose"] === "function") {
              return {
                isFind: true,
                data: obj["props"]["onClose"],
              };
            } else {
              // 未找到，进入下一层
              const children = obj?.["props"]?.["children"] ?? obj?.["children"];
              return {
                isFind: false,
                data: Array.isArray(children) ? children[0] : children,
              };
            }
          });
          if (typeof closeDialogFn === "function") {
            closeDialogFn();
            Qmsg.success(`调用函数关闭【长时间无操作，已暂停播放】弹窗`);
          }
        }
      }
    };
    const waitToRemovePauseDialog = Panel.getDynamicValue("dy-video-waitToRemovePauseDialog");
    const lockFn = new utils.LockFunction(() => {
      if (!waitToRemovePauseDialog.value) {
        return;
      }
      [
        ...Array.from($$<HTMLDivElement>(`.basePlayerContainer xg-bar.xg-right-bar + div`)),
        ...Array.from($$<HTMLElement>(`.basePlayerContainer div:has(>div):contains("长时间无操作")`)),
      ].forEach(($elementTiming) => {
        checkDialogToClose($elementTiming);
      });
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
      },
      waitToRemovePauseDialog.destory,
    ];
  },
  /**
   * 移除video的bottom偏移
   */
  removeStyleBottom() {
    log.info(`移除video的bottom偏移`);
    return addStyle(/*css*/ `
			div:has( > div > pace-island > #video-info-wrap ),
			xg-video-container.xg-video-container{
				bottom: 0 !important;
			}
		`);
  },
  /**
   * 禁用右侧工具栏的transform
   */
  disableRightToolbarTransform() {
    log.info(`禁用右侧工具栏的transform`);
    return addStyle(/*css*/ `
			.basePlayerContainer .positionBox{
				transform: unset !important;
			}
		`);
  },
  /**
   * 自定义video object-fit
   * @param value
   */
  objectFit(value: string) {
    const allowValue = ["fill", "contain", "cover", "none", "scale-down"];
    if (!allowValue.includes(value)) return;
    log.info(`自定义video object-fit`);
    return addStyle(/*css*/ `
		.xgplayer video {
			object-fit: ${value};
		}
		`);
  },
  /**
   * 自定义播放倍速
   * @param rate 速度
   */
  playbackrate(rate: number) {
    log.info(`自定义播放倍速：${rate}`);
    const lockFn = new utils.LockFunction(() => {
      if (DouYinRouter.isLive()) return;
      $$("video").forEach(($video) => {
        if ($video.closest('[data-e2e="feed-live"]')) return;
        $video.playbackRate = rate;
      });
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
      },
      () => {
        $$("video").forEach(($video) => {
          $video.playbackRate = 1;
        });
      },
    ];
  },
  /**
   * 解除视频文案复制限制
   */
  allowSelectTitleText() {
    log.info(`解除视频文案复制限制`);
    const listener = DOMUtils.on(
      document,
      ["pointerdown", "pointerup"],
      '.video-info-detail[data-e2e="video-info"] .title[data-e2e="video-desc"]',
      (evt) => {
        DOMUtils.preventEvent(evt, true);
      },
      { capture: true, overrideTarget: false }
    );

    return [
      addStyle(/*css*/ `
      .video-info-detail[data-e2e="video-info"] .title[data-e2e="video-desc"]{
        user-select: all !important;
        pointer-events: auto !important;
      }
      `),
      () => {
        listener.off();
      },
    ];
  },
  /**
   * 收藏夹显示滚动条
   */
  playerCollectShowScroll() {
    log.info(`收藏夹显示滚动条`);
    return addStyle(/*css*/ `
      [data-e2e="video-player-collect"] + div div:has(>.semi-radioGroup),
      [data-e2e="video-player-collect"] + div div:has(>div>.semi-checkbox){
        scrollbar-width: thin !important;
      }
    `);
  },
  /**
   * 评论区时间可跳转
   */
  commentTimeJump() {
    log.info(`评论区时间可跳转`);
    const transformTime = (time: string) => {
      const timeArr = time.split(":");
      if (timeArr.length !== 2 && timeArr.length !== 3) {
        return;
      }
      const second = parseInt(timeArr[timeArr.length - 1]);
      const minute = parseInt(timeArr[timeArr.length - 2]);
      const hour = timeArr.length === 3 ? parseInt(timeArr[0]) : 0;
      const timeStamp = hour * 60 * 60 + minute * 60 + second;
      return timeStamp;
    };

    // 更全面的时间正则表达式匹配
    const timePatterns = [
      /(\d{1,2}:\d{2}:\d{2})/g, // HH:MM:SS
      /(\d{1,2}:\d{2})/g, // MM:SS
    ]; // 处理单个评论元素
    const processCommentElement = ($comment: Element) => {
      // 检查是否已经处理过
      if ($comment.hasAttribute("data-dy-time-processed")) {
        return;
      }

      // 标记为已处理，避免重复处理
      $comment.setAttribute("data-dy-time-processed", "true");

      // 递归查找所有包含时间的文本节点
      const walker = document.createTreeWalker($comment, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          const text = node.textContent || "";
          return timePatterns.some((pattern) => pattern.test(text))
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        },
      });

      const textNodes: Text[] = [];
      let node;
      while ((node = walker.nextNode())) {
        textNodes.push(node as Text);
      }

      textNodes.forEach((textNode) => {
        let originalText = textNode.textContent || "";

        // 检查是否包含时间模式
        let hasTimeMatch = false;
        let processedText = originalText;

        timePatterns.forEach((pattern) => {
          processedText = processedText.replace(pattern, (match) => {
            const timestamp = transformTime(match);
            if (typeof timestamp === "number" && !isNaN(timestamp)) {
              hasTimeMatch = true;
              return `<span class="dy-comment-time" data-time="${timestamp}">${match}</span>`;
            }
            return match;
          });
        });

        // 只有当文本实际发生变化时才替换
        if (hasTimeMatch && processedText !== originalText) {
          const wrapper = DOMUtils.createElement("span", {
            innerHTML: processedText,
          });

          const parent = textNode.parentNode;
          if (parent) {
            parent.replaceChild(wrapper, textNode);
          }
        }
      });
    };
    // 点击时间戳处理
    const handleTimeClick = (event: PointerEvent | MouseEvent, $click: HTMLElement) => {
      DOMUtils.preventEvent(event);
      const timeStr = $click.getAttribute("data-time") || "0";
      const jumpTimeDuration = parseInt(timeStr);
      if (!isNaN(jumpTimeDuration) && jumpTimeDuration >= 0) {
        let $video: HTMLVideoElement | null = null;
        if (DouYinRouter.isVideo()) {
          // 单个video下
          const $videoContainer = $click.closest('[data-e2e="video-detail"]');
          if (!$videoContainer) {
            Qmsg.error("未找到视频容器");
            return;
          }
          $video = $videoContainer.querySelector<HTMLVideoElement>('[data-e2e="player-container"] video');
        } else {
          const $videoContainer = $click.closest(".sliderVideo");
          if (!$videoContainer) {
            Qmsg.error("未找到视频容器");
            return;
          }
          $video = $videoContainer.querySelector<HTMLVideoElement>("video");
        }
        if (!$video) {
          Qmsg.error("未找到视频元素");
          return;
        }
        $video.currentTime = jumpTimeDuration;
        const jumpTimeDurationStr = DouYinUtils.parseDuration(jumpTimeDuration);
        if (jumpTimeDuration > $video.duration) {
          log.error(`该跳转时间超出视频最大播放时长: ${timeStr} => ${jumpTimeDurationStr}`);
        } else {
          log.info(`跳转时间至: ${timeStr} => ${jumpTimeDurationStr}`);
        }
      }
    };
    // 添加点击事件监听
    const listener = DOMUtils.on(document, "click", ".dy-comment-time", handleTimeClick, {
      capture: true,
      overrideTarget: false,
    });
    const lockFn = new utils.LockFunction(() => {
      if (DouYinRouter.isLive()) return;
      const $commentItems = $$('[data-e2e="comment-item"]:not([data-dy-time-processed])');
      $commentItems.forEach(($commentItem) => {
        processCommentElement($commentItem);
      });
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
      addStyle(/*css*/ `
        .dy-comment-time{
          cursor: pointer;
          color: #48a4ff;
          text-decoration: none;
        }
      `),
      () => {
        listener.off();
        observer.disconnect();
        $$('[data-e2e="comment-item"] .dy-comment-time').forEach(($time) => {
          DOMUtils.html($time, DOMUtils.text($time));
        });
      },
    ];
  },
};
