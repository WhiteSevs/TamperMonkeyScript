import { GM_download, unsafeWindow } from "ViteGM";
import { $, $$, DOMUtils, addStyle, log, pops, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { DouYinRouter } from "@/router/DouYinRouter";
import MobileCSS from "./css/mobile.css?raw";
import Qmsg from "qmsg";
import { DouYin } from "../DouYin";
import { DouYinVideoBlock, DouYinVideoBlock_BottomToolbar_videoInfo } from "./DouYinVideoBlock";
import { DouYinVideoPlayerShortCut } from "./DouYinVideoPlayerShortCut";
import { GestureBack } from "@components/utils/GestureBack";
import { DouYinGestureBackHashConfig } from "../DouYinGestureBackConfig";
import { DouYinVideoPlayerBlockMouseHoverTip } from "./DouYinVideoPlayerBlockMouseHoverTip";
import { CommonUtil } from "@components/utils/CommonUtil";
import { DouYinVideoElementAutoHide } from "./DouYinVideoElementAutoHide";
import { ReactUtils } from "@components/utils/ReactUtils";
import type { DouYinVideoAwemeInfo } from "./DouYinVideoType";

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
      return DouYinVideoPlayer.changeCommentToBottom();
    });
    Panel.execMenuOnce("fullScreen", () => {
      return this.fullScreen();
    });
    Panel.execMenuOnce("parseVideo", () => {
      DouYinVideoPlayer.hookDownloadButtonToParseVideo();
    });
    Panel.execMenuOnce("dy-video-hookCopyLinkButton", () => {
      DouYinVideoPlayer.hookCopyLinkButton();
    });
    Panel.exec(
      ["autoEnterElementFullScreen", "search-autoEnterElementFullScreen"],
      () => {
        this.autoEnterElementFullScreen();
      },
      (keyList) => {
        const [mainKey, childKey] = keyList;
        let mainValue = Panel.getValue<boolean>(mainKey);
        let childValue = Panel.getValue<number>(childKey);
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
    Panel.execMenuOnce("dy-video-doubleClickEnterElementFullScreen", () => {
      this.doubleClickEnterElementFullScreen();
    });
    Panel.execMenuOnce(["dy-video-bgColor-enable", "dy-video-changeBackgroundColor"], (option) => {
      return this.changeBackgroundColor(option.value[1]);
    });
    Panel.execMenuOnce("repairProgressBar", () => {
      let result: HTMLStyleElement[] = [];
      Panel.onceExec("repairProgressBar", () => {
        result.push(...this.repairVideoProgressBar());
      });
      return result;
    });
    Panel.execMenuOnce("dy-video-gestureBackCloseComment", () => {
      this.gestureBackCloseComment();
    });
    Panel.execMenuOnce("dy-video-waitToRemovePauseDialog", () => {
      this.waitToRemovePauseDialog();
    });
    Panel.execMenuOnce("dy-video-removeStyle-bottom", () => {
      return this.removeStyleBottom();
    });
    Panel.execMenuOnce("dy-video-disableRightToolbarTransform", () => {
      return this.disableRightToolbarTransform();
    });
    DouYinVideoPlayer.chooseQuality(Panel.getValue("chooseVideoDefinition"));
    DOMUtils.ready(() => {
      DouYinVideoPlayer.chooseQuality(Panel.getValue("chooseVideoDefinition"));
      Panel.execMenuOnce("mobileMode", () => {
        return this.mobileMode();
      });
      Panel.execMenuOnce("dy-video-titleInfoAutoHide", () => {
        this.titleInfoAutoHide();
      });
      Panel.execMenuOnce("dy-video-videoControlsAutoHide", () => {
        this.videoControlsAutoHide();
      });
      Panel.execMenuOnce("dy-video-rightToolBarAutoHide", () => {
        this.rightToolBarAutoHide();
      });
    });
  },
  /**
   * 全屏（沉浸模式）
   */
  fullScreen() {
    log.info("沉浸模式");
    let result = [];
    result.push(
      CommonUtil.addBlockCSS(
        /* 右侧工具栏 */
        ".slider-video .positionBox",
        /* 中间底部的视频信息（描述、作者、话题等） */
        "#video-info-wrap",
        /* 中间底部的视频控制工具栏 */
        "xg-controls.xgplayer-controls"
      )
    );
    result.push(DouYinVideoBlock_BottomToolbar_videoInfo.blobkTitleTopTag());
    result.push(DouYinVideoBlock.shieldSearchFloatingBar());
    result.push(DouYinVideoBlock_BottomToolbar_videoInfo.blockClickRecommend());
    result.push(
      addStyle(/*css*/ `
			/* 视频全屏 */
			xg-video-container.xg-video-container{
				bottom: 0px !important;
			}
			/* 图文的图片全屏 */
			.basePlayerContainer  .focusPanel .dySwiperSlide img[src]{
				height: 100% !important;
			}
        `)
    );
    return result;
  },
  /**
   * 自动进入网页全屏
   * @param [userKeyBoard=false] 是否使用键盘触发
   */
  autoEnterElementFullScreen(userKeyBoard = false) {
    if (this.$flag.isWaitEnterFullScreen) {
      log.warn(`已存在等待进入全屏...`);
      return;
    }
    this.$flag.isWaitEnterFullScreen = true;
    if (userKeyBoard) {
      // 使用键盘事件触发全屏
      // 优点：只要抖音不修改触发全屏的快捷键，则此方案可以一直使用
      DOMUtils.ready(() => {
        let keydownEvent = new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "Y",
          code: "KeyY",
          keyCode: 89,
          which: 89,
        });
        document.dispatchEvent(keydownEvent);
        this.$flag.isWaitEnterFullScreen = false;
        log.success("成功自动进入网页全屏-快捷键");
      });
    } else {
      // 点击全屏按钮来触发全屏
      DOMUtils.ready(() => {
        ReactUtils.waitReactPropsToSet(
          () => {
            return (
              // 普通视频的网页全屏按钮
              $<HTMLElement>('xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon') ||
              // 搜索页面的网页全屏按钮↓
              $<HTMLElement>(
                '[data-e2e="feed-active-video"] dy-icon.douyin-player-page-full-screen .douyin-player-icon'
              )
            );
          },
          "reactProps",
          {
            check(reactInstance) {
              return typeof reactInstance?.onClick === "function";
            },
            set: (reactInstance, $target) => {
              this.$flag.isWaitEnterFullScreen = false;
              log.success("成功自动进入网页全屏-点击按钮");
              $target.click();
            },
          }
        );
      });
    }
  },
  /**
   * 双击进入网页全屏
   */
  doubleClickEnterElementFullScreen() {
    let isDouble = false;
    log.info("注册双击进入网页全屏事件");
    let selectorList = [".newVideoPlayer", "#sliderVideo"];
    selectorList.forEach((selector) => {
      DOMUtils.on<MouseEvent | PointerEvent>(document, "click", selector, (event) => {
        if (isDouble) {
          isDouble = false;
          DouYinVideoPlayer.autoEnterElementFullScreen(true);
        } else {
          isDouble = true;
          setTimeout(() => {
            isDouble = false;
          }, 250);
        }
      });
    });
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
    let QualitySessionKey = "MANUAL_SWITCH";
    let clarityReal = [
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

    let definition = [
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
    let choose = definition.find((item) => item.gearType === mode);
    /**
     * 抖音清晰度读取是来自session的
     * @param value
     */
    function setVideoQuality(value: string) {
      unsafeWindow.sessionStorage.setItem(QualitySessionKey, value);
    }
    if (choose) {
      let chooseStr = JSON.stringify(choose);
      let intervalId = setInterval(() => {
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
    let Definition_Key = "player_playbackratio";
    /**
     * 设置播放倍速
     *
     * 先设置session的值，再调用更新函数
     * @param value
     */
    function setRate(value: VideoPlayerRate = "1") {
      unsafeWindow.sessionStorage.setItem(Definition_Key, value);
      $$<HTMLLIElement>("xg-icon.xgplayer-playback-setting").forEach(($playbackSetting) => {
        let $container = utils.getReactInstance($playbackSetting).reactContainer;
        $container?.memoizedState?.element?.props?.xgCase?.updatePlayBackRatio();
      });
    }
    setRate(rate);
  },
  /**
   * 修改页面的分享-下载按钮变成解析视频
   */
  hookDownloadButtonToParseVideo() {
    log.info("修改页面的分享-下载按钮变成解析视频");
    type parseVideoDownloadInfo = {
      /**
       * 视频链接
       */
      url: string;
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
       */
      format: string;
      /**
       * 视频大小
       */
      dataSize: number;
      /**
       * 备用视频下载链接
       */
      backUrl: string[];
    };
    /**
     * 显示弹窗
     * @param downloadFileName 视频下载名
     * @param downloadUrlInfoList 资源列表
     */
    function showParseInfoDialog(downloadFileName: string, downloadUrlInfoList: parseVideoDownloadInfo[]) {
      let contentHTML = "";
      downloadUrlInfoList.forEach((downloadInfo) => {
        let videoQualityInfo = `${downloadInfo.width}x${downloadInfo.height} @${downloadInfo.fps}`;
        contentHTML += /*html*/ `
          		<div class="douyin-video-link-item">
					<div class="dy-video-name">
						<span>清晰度信息：</span>
						<span>${videoQualityInfo}</span>
					</div>
					<div class="dy-video-size">
						<span>视频大小：</span>
						<span>${utils.formatByteToSize(downloadInfo.dataSize)}</span>
					</div>
					<div class="dy-video-download-uri">
						<span>下载地址：</span>
						<a href="${downloadInfo.url}" data-file-name="${downloadFileName} - ${videoQualityInfo}.${
              downloadInfo.format
            }">${downloadInfo.url}</a>
					</div>
					${
            downloadInfo.backUrl.length
              ? /*html*/ `
						<div class="dy-video-back-uri">
							<span>备用地址：</span>
							${downloadInfo.backUrl
                .map((url, index) => {
                  return /*html*/ `
									<a href="${url}" data-file-name="${downloadFileName} - ${videoQualityInfo}.${downloadInfo.format}">地址${index + 1}</a>
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
      contentHTML = /*html*/ `<div class="douyin-video-link-container">${contentHTML}</div>`;
      let $dialog = pops.alert({
        title: {
          text: "视频解析",
          position: "center",
        },
        content: {
          text: contentHTML,
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
          .douyin-video-link-container a{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
          }
          .douyin-video-link-item{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin: 10px;
          }
          .dy-video-download-uri{
            display: flex;
          }
          .dy-video-back-uri{
            display: flex;
          }`,
      });
      DOMUtils.on(
        $dialog.popsElement,
        "click",
        "a",
        (event, selectorTarget) => {
          DOMUtils.preventEvent(event);
          let url = selectorTarget.getAttribute("href")!;
          let fileName = selectorTarget.getAttribute("data-file-name")!;
          /**
           * 测试是否支持GM_download
           */
          let isSupport_GM_download = function () {
            try {
              return typeof GM_download === "function";
            } catch (error) {
              console.error(error);
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
              Qmsg.info("取消下载");
              return;
            }
          }
          if (!isSupport_GM_download()) {
            log.error("当前脚本环境不支持API 【GM_download】");
            window.open(url, "_blank");
            return;
          }
          Qmsg.info(`调用【GM_download】下载视频`);
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
              Qmsg.success(`下载 ${fileName} 已完成`, {
                consoleLogContent: true,
              });
            },
            onprogress(details) {
              if (typeof details === "object" && "loaded" in details && "total" in details && !isDownloadEnd) {
                let progressNum = details.loaded / details.total;
                let formatProgressNum = (progressNum * 100).toFixed(2);
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
        }
      );
    }
    DOMUtils.on<MouseEvent | PointerEvent>(
      document,
      "click",
      'div[data-e2e="video-share-container"] div[data-inuser="false"] button + div',
      function (event, selectorTarget) {
        DOMUtils.preventEvent(event);
        let clickElement = selectorTarget;
        let rectFiber = utils.getReactInstance(clickElement.parentElement as HTMLElement)?.reactFiber;
        if (!rectFiber) {
          Qmsg.error("获取rectFiber属性失败", { consoleLogContent: true });
          return;
        }
        try {
          let awemeInfo = rectFiber?.return?.memoizedProps?.awemeInfo;
          if (!awemeInfo) {
            Qmsg.error("获取awemeInfo属性失败", { consoleLogContent: true });
            return;
          }
          log.info([`解析的awemeInfo: `, awemeInfo]);
          // 收集到的全部的下载地址
          let videoDownloadUrlList: parseVideoDownloadInfo[] = [];

          // video.bitRateList
          let bitRateList = awemeInfo?.video?.bitRateList as
            | {
                uri: string;
                dataSize: number;
                width: number;
                height: number;
                playAddr: {
                  src: string;
                }[];
                playApi: string;
                isH265: 0 | 1;
                qualityType: number;
                bitRate: 3915557;
                videoFormat: string;
                gearName: string;
                fps: number;
                playerAccessKey: string;
                featureId: string;
                format: string;
                fileId: string;
                pktOffsetMap: {
                  time: number;
                  offset: number;
                }[];
                realBitrate: number;
                manualOnly: number;
                mvmaf: {};
                ufq: {};
              }[]
            | null;
          if (bitRateList != null && Array.isArray(bitRateList)) {
            videoDownloadUrlList = videoDownloadUrlList.concat(
              bitRateList
                .map((item) => {
                  let result = {
                    url: item.playApi,
                    width: item.width,
                    height: item.height,
                    format: item.format,
                    fps: 0,
                    dataSize: item.dataSize,
                    backUrl: [],
                  } as parseVideoDownloadInfo;
                  if (typeof item.fps === "number") {
                    result.fps = item.fps;
                  }
                  if (Array.isArray(item.playAddr)) {
                    result.backUrl = result.backUrl.concat(item.playAddr.map((it) => it.src));
                  }
                  return result;
                })
                .filter((it) => it != null)
            );
          }
          if (!videoDownloadUrlList.length) {
            Qmsg.error("未获取到视频的有效链接信息", {
              consoleLogContent: true,
            });
            return;
          }
          // 去重
          let uniqueVideoDownloadUrlList: parseVideoDownloadInfo[] = [];
          for (let index = 0; index < videoDownloadUrlList.length; index++) {
            const videoDownloadInfo = videoDownloadUrlList[index];
            let findIndex = uniqueVideoDownloadUrlList.findIndex(
              (it) =>
                it.width === videoDownloadInfo.width &&
                it.height === videoDownloadInfo.height &&
                it.fps === videoDownloadInfo.fps
            );
            if (findIndex != -1) {
              // 存在重复，比较文件大小
              let findValue = uniqueVideoDownloadUrlList[findIndex];
              if (findValue.dataSize < videoDownloadInfo.dataSize) {
                uniqueVideoDownloadUrlList.splice(findIndex, 1, videoDownloadInfo);
              }
            } else {
              uniqueVideoDownloadUrlList.push(videoDownloadInfo);
            }
          }
          // 处理一下http的protocol，如果是http的话，点击会跳转到播放而不是下载
          uniqueVideoDownloadUrlList = uniqueVideoDownloadUrlList.map((item) => {
            if (item.url.startsWith("http:")) {
              item.url = item.url.replace("http:", "");
            }
            return item;
          });
          // 按视频大小排序（降序）
          utils.sortListByProperty(uniqueVideoDownloadUrlList, (it) => it.width);
          let downloadFileName =
            (awemeInfo?.authorInfo?.nickname || "未知作者") + " - " + (awemeInfo?.desc || "未知视频文案");
          showParseInfoDialog(downloadFileName, uniqueVideoDownloadUrlList);
        } catch (error) {
          log.error(error);
          Qmsg.error("解析视频失败", { consoleLogContent: true });
        }
      },
      {
        capture: true,
      }
    );
  },
  /**
   * 修改页面的分享-复制链接
   */
  hookCopyLinkButton() {
    log.info("修改页面的分享-复制链接");
    DOMUtils.on(
      document,
      "click",
      'div[data-e2e="video-share-container"] div[data-inuser="false"] button:contains("复制链接")',
      (event) => {
        DOMUtils.preventEvent(event);
        let clickElement = event.target as HTMLDivElement;
        let rectFiber = utils.getReactInstance(clickElement.parentElement as HTMLElement)?.reactFiber;
        if (!rectFiber) {
          Qmsg.error("获取rectFiber属性失败", { consoleLogContent: true });
          return;
        }
        let awemeInfo = rectFiber?.return?.return?.memoizedProps?.awemeInfo as DouYinVideoAwemeInfo | null;
        if (awemeInfo == null || typeof awemeInfo !== "object") {
          Qmsg.error("获取awemeInfo属性失败", { consoleLogContent: true });
          return;
        }
        log.info(`视频awemeInfo：`, awemeInfo);
        let shareUrl = awemeInfo?.shareInfo?.shareUrl;
        if (typeof shareUrl !== "string") {
          Qmsg.error("获取shareUrl属性失败", { consoleLogContent: true });
          return;
        }
        log.info(`视频链接：` + shareUrl);
        utils.copy(shareUrl).then((copyFlag) => {
          let toast = rectFiber?.return?.return?.memoizedProps?.toast;
          if (copyFlag) {
            if (typeof toast === "function") {
              toast("已复制链接");
            } else {
              Qmsg.success("已复制链接");
            }
          } else {
            if (typeof toast === "function") {
              toast("复制链接失败");
            } else {
              Qmsg.error("复制链接失败");
            }
          }
        });
      },
      { capture: true }
    );
  },
  /**
   * 手机模式
   */
  mobileMode() {
    log.info("启用手机模式");
    let result: HTMLStyleElement[] = [];
    DouYin.initialScale();
    /* 屏蔽底部视频工具栏右侧的?帮助反馈按钮 */
    result.push(CommonUtil.addBlockCSS("img#douyin-temp-sidebar")!, addStyle(MobileCSS));
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
    let result: HTMLStyleElement[] = [
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
    /**
     * 检测是否启用
     */
    const checkEnable = () => {
      return Panel.getValue("mobileMode") || Panel.getValue("repairProgressBar");
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
    DOMUtils.ready(() => {
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
   * 自动隐藏视频标题
   */
  titleInfoAutoHide() {
    log.info(`自动隐藏视频标题`);
    DouYinVideoElementAutoHide("dy-video-titleInfoAutoHide-delayTime", [
      // 一般的推荐视频|单个视频的当前观看的视频
      '#sliderVideo[data-e2e="feed-active-video"] #video-info-wrap',
      // 进入作者主页后的当前观看的视频
      '#slideMode[data-e2e="feed-active-video"] #video-info-wrap',
      // 单个视频
      'div[data-e2e="video-detail"] #video-info-wrap',
    ]);
  },
  /**
   * 自动隐藏视频控件
   */
  videoControlsAutoHide() {
    log.info(`自动隐藏视频控件`);
    DouYinVideoElementAutoHide("dy-video-videoControlsAutoHide-delayTime", [
      // 一般的推荐视频|单个视频的当前观看的视频
      `#sliderVideo[data-e2e="feed-active-video"] xg-controls.xgplayer-controls`,
      // 进入作者主页后的当前观看的视频
      '#slideMode[data-e2e="feed-active-video"] xg-controls.xgplayer-controls',
      // 单个视频
      'div[data-e2e="video-detail"] xg-controls.xgplayer-controls',
    ]);
  },
  /**
   * 自动隐藏右侧工具栏
   */
  rightToolBarAutoHide() {
    log.info(`自动隐藏右侧工具栏`);
    addStyle(/*css*/ `
			.positionBox{
				transition: opacity 0.5s;
			}
		`);
    DouYinVideoElementAutoHide("dy-video-titleInfoAutoHide-delayTime", [
      // 一般的推荐视频|单个视频的当前观看的视频
      '#sliderVideo[data-e2e="feed-active-video"] .positionBox',
      // 进入作者主页后的当前观看的视频
      '#slideMode[data-e2e="feed-active-video"] .positionBox',
      // 单个视频
      'div[data-e2e="video-detail"] .positionBox',
    ]);
  },
  /**
   * 手势返回关闭评论区
   */
  gestureBackCloseComment() {
    log.info(`手势返回关闭评论区`);
    let gestureback = new GestureBack({
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
      let $close = $<HTMLElement>($closeSelector);
      if ($close) {
        let rect = utils.getReactInstance($close);
        if (rect) {
          let fn = rect.reactProps?.onClick;
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

    DOMUtils.on(
      document,
      "click",
      `.xgplayer div[data-e2e="feed-comment-icon"]`,
      (event) => {
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
      }
    );
    DOMUtils.on(
      document,
      "click",
      $closeSelector,
      (event) => {
        log.info(`手势 => 关闭评论区`);
        gestureback.quitGestureBackMode();
      },
      {
        capture: true,
      }
    );
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
    let checkDialogToClose = ($ele: HTMLElement) => {
      let eleText = DOMUtils.text($ele);
      if (eleText.includes("长时间无操作") && eleText.includes("暂停播放")) {
        Qmsg.info(`出现【长时间无操作，已暂停播放】弹窗`, {
          consoleLogContent: true,
        });
        let $rect = utils.getReactInstance($ele);
        if (typeof $rect.reactProps === "object") {
          let closeDialogFn = utils.queryProperty($rect.reactProps, (obj) => {
            if (typeof obj?.["props"]?.["onClose"] === "function") {
              return {
                isFind: true,
                data: obj["props"]["onClose"],
              };
            } else {
              // 未找到，进入下一层
              let children = obj?.["props"]?.["children"] ?? obj?.["children"];
              return {
                isFind: false,
                data: Array.isArray(children) ? children[0] : children,
              };
            }
          });
          if (typeof closeDialogFn === "function") {
            Qmsg.success(`调用函数关闭【长时间无操作，已暂停播放】弹窗`, { consoleLogContent: true });
            closeDialogFn();
          }
        }
      }
    };
    let lockFn = new utils.LockFunction(() => {
      if (!Panel.getValue("dy-video-waitToRemovePauseDialog")) {
        return;
      }
      [
        ...Array.from($$<HTMLDivElement>(`.basePlayerContainer xg-bar.xg-right-bar + div`)),
        ...Array.from($$<HTMLElement>(`.basePlayerContainer div:has(>div):contains("长时间无操作")`)),
      ].forEach(($elementTiming) => {
        checkDialogToClose($elementTiming);
      });
    });
    DOMUtils.ready(() => {
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        callback: () => {
          lockFn.run();
        },
      });
    });
  },
  /**
   * 移除video的bottom偏移
   */
  removeStyleBottom() {
    log.info(`移除video的bottom偏移`);
    return addStyle(/*css*/ `
			#sliderVideo[data-e2e="feed-active-video"] div:has( > div > #video-info-wrap),
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
};
