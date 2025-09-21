import { $$, DOMUtils, addStyle, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { DouYinLiveMessage } from "./DouYinLiveMessage";
import Qmsg from "qmsg";
import { ReactUtils } from "@components/utils/ReactUtils";
import { DouYinLiveBlock } from "./DouYinLiveBlock";
import { DouYinLivePlayerInstance } from "./DouYinLivePlayerInstance";
import { DouYinLiveShortCut } from "./DouYinLiveShortCut";
import { DouYinRouter } from "@/router/DouYinRouter";

export const VideoQualityMap: {
  [key: string]: {
    label: string;
    sign: number;
  };
} = {
  auto: {
    label: "自动",
    sign: 0,
  },
  origin: {
    label: "原画",
    sign: 5,
  },
  uhd: {
    label: "蓝光",
    sign: 4,
  },
  hd: {
    label: "超清",
    sign: 3,
  },
  sd: {
    label: "高清",
    sign: 2,
  },
  ld: {
    label: "标清",
    sign: 1,
  },
};
/**
 * 直播画质
 * webcast_local_quality
 * + ld 标清
 * + sd 高清
 * + hd 超清
 * + origin 原画
 *
 * 弹幕设置
 * DanmaSetting_GiftAndPackage
 * {
 *   "__tea_cache_tokens_随机4位数字["uuid"]_playRoom.split(",")[0]": {
 *        expired: Date.now(), # 过期时间
 *        giftOn: false, # 送礼信息
 *        packageOn: false, # 福袋口令
 *    }
 * }
 */
export const DouYinLive = {
  init() {
    DouYinLiveBlock.init();
    DouYinLiveShortCut.init();
    Panel.execMenuOnce("live-danmu-shield-rule-enable", () => {
      return DouYinLiveMessage.filterMessage();
    });
    // Panel.execMenu("live-unlockImageQuality", () => {
    // 	this.unlockImageQuality();
    // });
    Panel.execMenuOnce("live-waitToRemovePauseDialog", () => {
      this.waitToRemovePauseDialog();
    });
    Panel.execMenu("live-pauseVideo", () => {
      this.disableVideoAutoPlay();
    });
    Panel.exec(["live-bgColor-enable", "live-changeBackgroundColor"], () => {
      return this.changeBackgroundColor();
    });
    Panel.onceExec("live-parsePlayerInstance", () => {
      DouYinLivePlayerInstance.initMenu();
    });
    Panel.execMenuOnce("live-prevent-wheel-switchLiveRoom", () => {
      DOMUtils.on(
        document,
        ["wheel", "mousewheel"],
        (evt) => {
          if (!Panel.getValue("live-prevent-wheel-switchLiveRoom")) {
            return;
          }
          if (!DouYinRouter.isLive()) {
            return;
          }
          utils.preventEvent(evt);
        },
        {
          capture: true,
        }
      );
    });
    DOMUtils.ready(() => {
      Panel.execMenu("live-chooseQuality", (option) => {
        if (option.value === "auto") {
          return;
        }
        this.chooseQuality(option.value);
      });
      Panel.execMenu("live-autoEnterElementFullScreen", () => {
        this.autoEnterElementFullScreen();
      });
      Panel.execMenu("dy-live-autoCloseChatRoom", () => {
        this.autoCloseChatRoom();
      });
    });
  },
  /**
   * 自动进入网页全屏
   */
  autoEnterElementFullScreen() {
    DOMUtils.ready(() => {
      ReactUtils.waitReactPropsToSet("xg-icon.xgplayer-fullscreen + xg-icon  div:has(>svg)", "reactFiber", {
        check(reactInstance) {
          return typeof reactInstance?.memoizedProps?.onClick === "function";
        },
        set(reactInstance, $target) {
          let $xgIcon = $target.closest<HTMLElement>("xg-icon");
          if ($xgIcon && DOMUtils.text($xgIcon).includes("退出网页全屏")) {
            log.warn("抖音已自动进入网页全屏，不执行脚本的操作");
            return;
          }
          log.success("成功自动进入网页全屏");
          reactInstance.memoizedProps.onClick();
        },
      });
    });
  },
  /**
   * 选择画质
   * @param quality 选择的画质，默认原画
   */
  chooseQuality(quality = "origin") {
    ReactUtils.waitReactPropsToSet(
      'xg-inner-controls xg-right-grid >div:has([data-e2e="quality-selector"])',
      "reactProps",
      {
        check(reactInstance) {
          return (
            typeof reactInstance?.children?.props?.children?.props?.qualityHandler === "object" &&
            typeof reactInstance?.children?.props?.children?.props?.qualityHandler?.getCurrentQualityList === "function"
          );
        },
        set(reactInstance) {
          let qualityHandler = reactInstance.children.props.children.props.qualityHandler;
          // 当前直播可选的画质
          let currentQualityList: string[] = qualityHandler.getCurrentQualityList();
          if (!currentQualityList.includes(quality)) {
            Qmsg.warning("当前直播没有【" + quality + "】画质，自动选择最高画质");
            currentQualityList.sort((a, b) => {
              if (!VideoQualityMap[a]) {
                log.error("画质【" + a + "】不存在");
                return 0;
              }
              if (!VideoQualityMap[b]) {
                log.error("画质【" + b + "】不存在");
                return 0;
              }
              return VideoQualityMap[a].sign - VideoQualityMap[b].sign;
            });
            quality = currentQualityList[currentQualityList.length - 1];
          }
          qualityHandler.setCurrentQuality(quality);
          log.success("成功设置画质为【" + quality + "】");
        },
      }
    );
    ReactUtils.waitReactPropsToSet(
      "#PlayerLayout .douyin-player-controls .QualitySwitchNewPlugin > div",
      "reactFiber",
      {
        check(reactPropInst, $el) {
          return (
            typeof reactPropInst?.return?.memoizedProps?.qualityHandler?.setCurrentQuality === "function" &&
            Array.isArray(reactPropInst?.return?.memoizedProps?.qualityList)
          );
        },
        set(reactPropInst, $el) {
          let qualityHandler = reactPropInst.return.memoizedProps.qualityHandler;
          // 当前直播可选的画质
          let currentQualityList: string[] = reactPropInst?.return?.memoizedProps?.qualityList;
          if (!currentQualityList.includes(quality)) {
            Qmsg.warning("当前直播没有【" + quality + "】画质，自动选择最高画质");
            currentQualityList.sort((a, b) => {
              if (!VideoQualityMap[a]) {
                log.error("画质【" + a + "】不存在");
                return 0;
              }
              if (!VideoQualityMap[b]) {
                log.error("画质【" + b + "】不存在");
                return 0;
              }
              return VideoQualityMap[a].sign - VideoQualityMap[b].sign;
            });
            quality = currentQualityList[currentQualityList.length - 1];
          }
          qualityHandler.setCurrentQuality(quality);
          log.success("成功设置画质为【" + quality + "】");
        },
      }
    );
  },
  /**
   * 解锁画质选择
   *
   * 未登录情况下最高选择【高清】画质
   */
  unlockImageQuality() {
    log.info("解锁画质选择");
    DOMUtils.on(
      document,
      "click",
      'div[data-e2e="quality-selector"] > div',
      function (event, clickNode) {
        utils.preventEvent(event);
        try {
          let reactInst = utils.getReactObj(clickNode);
          let $QualitySwitchNewPlugin = clickNode.closest<HTMLElement>(".QualitySwitchNewPlugin");
          let parent =
            clickNode.closest<HTMLElement>(".QualitySwitchNewPlugin > div") ||
            clickNode.closest<HTMLElement>("div[data-index]");
          let parentReactInst = utils.getReactObj(parent as HTMLDivElement);
          let qualityHandler = {
            getCurrentQuality(): string {
              return reactInst?.reactFiber?.["key"];
            },
            getCurrentQualityList(): string[] {
              return (
                parentReactInst?.reactFiber?.return?.memoizedProps?.qualityList ||
                parentReactInst?.reactProps?.["children"]?.["ref"]?.["current"]
              );
            },
            setCurrentQuality(quality: string) {
              let setCurrentQuality =
                parentReactInst?.reactFiber?.return?.memoizedProps?.qualityHandler?.setCurrentQuality ||
                parentReactInst?.reactFiber?.child?.memoizedProps?.qualityHandler?.setCurrentQuality ||
                parentReactInst?.reactFiber?.return?.memoizedProps?.qualityHandler?.setCurrentQuality ||
                parentReactInst?.reactProps?.["children"]?.["ref"]?.["current"]?.setCurrentQuality;
              if (typeof setCurrentQuality === "function") {
                setCurrentQuality(quality);
              } else {
                throw new Error("not find function：setCurrentQuality ");
              }
            },
          };

          if ($QualitySwitchNewPlugin) {
            let QualitySwitchNewPluginReactInst = utils.getReactObj($QualitySwitchNewPlugin);
            let current = QualitySwitchNewPluginReactInst?.reactFiber?.child?.ref?.current;
            if (
              typeof current === "object" &&
              current != null &&
              typeof current?.getCurrentQuality === "function" &&
              typeof current?.getCurrentQualityList === "function" &&
              typeof current?.setCurrentQuality === "function"
            ) {
              qualityHandler = current;
            }
          }
          let currentQuality = qualityHandler.getCurrentQuality();
          log.info("当前选择的画质: " + currentQuality);
          log.info(["所有的画质: ", qualityHandler.getCurrentQualityList()]);
          qualityHandler.setCurrentQuality(currentQuality);
        } catch (error) {
          log.error(error);
          Qmsg.error("切换画质失败");
        }
      },
      {
        capture: true,
      }
    );
  },
  /**
   * 长时间无操作，已暂停播放
   * 累计节能xx分钟
   */
  waitToRemovePauseDialog() {
    log.info("监听【长时间无操作，已暂停播放】弹窗");
    /**
     * 检测并关闭弹窗
     * @param $ele
     * @param from 检测来源
     * + "1"
     * + "2"
     */
    let checkDialogToClose = ($ele: HTMLElement, from: string) => {
      let eleText = DOMUtils.text($ele);
      if (eleText.includes("长时间无操作") && eleText.includes("暂停播放")) {
        Qmsg.info(`检测${from}：出现【长时间无操作，已暂停播放】弹窗`, {
          consoleLogContent: true,
        });
        let $rect = utils.getReactObj($ele);
        if (typeof $rect.reactContainer === "object") {
          let closeDialogFn =
            utils.queryProperty($rect.reactContainer, (obj) => {
              // 不要用onMaskClick，该函数调用不会关闭弹窗
              if (typeof obj["onClose"] === "function") {
                return {
                  isFind: true,
                  data: obj["onClose"],
                };
              } else if (typeof obj?.["memoizedProps"]?.["onClose"] === "function") {
                return {
                  isFind: true,
                  data: obj?.["memoizedProps"]?.["onClose"],
                };
              } else {
                // 未找到，进入下一层
                return {
                  isFind: false,
                  data: obj["child"],
                };
              }
            }) || $rect?.reactContainer?.memoizedState?.element?.props?.children?.props?.onClose;
          if (typeof closeDialogFn === "function") {
            Qmsg.success(`检测${from}：调用函数关闭弹窗`, {
              consoleLogContent: true,
            });
            closeDialogFn();
          }
        }
      }
    };
    let lockFn = new utils.LockFunction(() => {
      if (!Panel.getValue("live-waitToRemovePauseDialog")) {
        return;
      }
      $$<HTMLDivElement>("body > div[elementtiming='element-timing']").forEach(($elementTiming) => {
        checkDialogToClose($elementTiming, "1");
      });
      $$<HTMLDivElement>('body > div:not([id="root"]):not(:empty)').forEach(($ele) => {
        checkDialogToClose($ele, "2");
      });
    });
    DOMUtils.ready(() => {
      utils.mutationObserver(document.body, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback() {
          lockFn.run();
        },
      });
    });
  },
  /**
   * 禁止自动播放视频
   */
  disableVideoAutoPlay() {
    utils
      .waitAnyNode<HTMLVideoElement>(
        ['.basicPlayer[data-e2e="basicPlayer"] video', "#PlayerLayout .douyin-player video"],
        10000
      )
      .then(($video) => {
        if (!$video) {
          return;
        }
        $video.autoplay = false;
        $video.pause();
        let timeout = 3000;
        // 在firefox中video会重载，如果只触发一次，它依旧会自动播放
        let playListener = (evt: Event) => {
          utils.preventEvent(evt);
          $video.autoplay = false;
          $video.pause();
          log.success("成功禁止自动播放视频(直播)");
        };
        DOMUtils.offAll($video, "play");
        DOMUtils.offAll($video, "pause");
        DOMUtils.on($video, "play", playListener, {
          capture: true,
        });
        let reloadVideo = () => {
          let keydownEvent = new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: "E",
            code: "KeyE",
          });
          document.body.dispatchEvent(keydownEvent);
        };
        let cb = () => {
          DOMUtils.off($video, "play", playListener, {
            capture: true,
          });
          log.info(`移除监听自动播放`);
          let listenPlayVideo = () => {
            DOMUtils.offAll($video, "play");
            DOMUtils.on(
              $video,
              "play",
              (evt) => {
                // 如果长时间暂停会导致点击播放时不加载直播
                // 此bug仅在firefox上复现
                // 临时解决方法：监听play事件重载视频
                log.info(`播放-视频重载`);
                reloadVideo();
              },
              {
                once: true,
                capture: true,
              }
            );
          };
          DOMUtils.on(
            $video,
            "pause",
            (evt) => {
              // 第2、3、4...次暂停一段时间后再播放依旧卡屏（不加载，依旧firefox）
              // 监听暂停，监听播放
              listenPlayVideo();
            },
            {
              capture: true,
            }
          );
          listenPlayVideo();
        };
        setTimeout(cb, timeout);
      });
  },
  /**
   * 修改视频背景颜色
   * @param color 颜色
   */
  changeBackgroundColor() {
    log.info("修改视频背景颜色");
    let color = Panel.getValue<string>("live-changeBackgroundColor");
    return addStyle(/*css*/ `
		div[id^="living_room_player_container"] div[data-anchor-id="living-background"] div:has(>.xgplayer-dynamic-bg),
		#LeftBackgroundLayout {
			background: ${color} !important;
		}
		div[id^="living_room_player_container"] div[data-anchor-id="living-background"] .xgplayer-dynamic-bg,
		#LeftBackgroundLayout .douyin-player-dynamic-background{
			visibility: hidden;
		}
		`);
  },
  /**
   * 自动关闭聊天室
   */
  autoCloseChatRoom() {
    ReactUtils.waitReactPropsToSet("#chatroom .chatroom_close", "reactFiber", {
      check(reactPropInst, $el) {
        return typeof reactPropInst?.memoizedProps?.onClick === "function";
      },
      set(reactPropInst, $el) {
        log.info(`自动关闭聊天室-点击关闭聊天室按钮`);
        $el.click();
      },
    });
  },
};
