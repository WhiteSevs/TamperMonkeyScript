import { addStyle, DOMUtils, log } from "@/env";
import { DouYinNetWorkHook } from "@/hook/DouYinNetWorkHook";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";
import { DouYinAccount } from "../account/DouYinAccount";
import { DouYinHook } from "../hook/DouYinHook";
import { BlockLeftNavigator } from "./block-frame/blockLeftNavigator";
import { blockLeftNavigatorOther } from "./block-frame/blockLeftNavigatorOther";
import { BlockSearchFrame } from "./block-frame/blockSearchFrame";
import { BlockTopNavigator } from "./block-frame/blockTopNavigator";
import { DouYinChannel } from "./channel/DouYinChannel";
import blockCSS from "./css/block.css?raw";
import { DouYinGestureBackClearHash } from "./DouYinGestureBackConfig";
import { DouYinRedirect } from "./DouYinRedirect";
import { DouYinLive } from "./live/DouYinLive";
import { DouYinNote } from "./note/DouYinNote";
import { DouYinRecommend } from "./recommend/DouYinRecommend";
import { DouYinSearch } from "./search/DouYinSearch";
import { DouYinUser } from "./user/DouYinUser";
import { DouYinVideo } from "./video/DouYinVideo";
import { DouYinVideoFilter } from "./video/filter/DouYinVideoFilter";
import { DouYinVideoPlayer } from "./video/player/DouYinVideoPlayer";

export const DouYin = {
  init() {
    if (!(DouYinRouter.isIndex() || DouYinRouter.isLive())) {
      // 当前仅主站和直播页面支持
      log.error("当前仅主站和直播页面支持");
      return;
    }
    Panel.onceExec("dy-global-block-css", () => {
      return this.removeAds();
    });
    DouYinGestureBackClearHash();
    DouYinHook.init();
    DouYinVideoFilter.init();
    DouYinNetWorkHook.init();
    DouYinRedirect.init();
    Panel.execMenuOnce("watchLoginDialogToClose", () => {
      return DouYinAccount.watchLoginDialogToClose();
    });
    Panel.execMenuOnce("disguiseLogin", () => {
      return DouYinAccount.disguiseLogin();
    });
    Panel.execMenuOnce("dy-initialScale", () => {
      return this.initialScale();
    });
    Panel.execMenu("dy-apple-removeMetaAppleItunesApp", () => {
      this.removeMetaAppleItunesApp();
    });
    BlockLeftNavigator.init();
    blockLeftNavigatorOther.init();
    BlockTopNavigator.init();
    BlockSearchFrame.init();

    Panel.execMenuOnce(
      "dy-common-listenRouterChange",
      () => {
        return this.listenRouterChange();
      },
      void 0,
      false
    );

    Panel.execMenuOnce("dy-search-click-to-new-tab", () => {
      return this.navSearchClickToNewTab();
    });

    if (DouYinRouter.isLive()) {
      log.info("Router: 直播");
      DouYinLive.init();
    } else if (DouYinRouter.isIndex()) {
      DouYinVideoPlayer.init();

      if (DouYinRouter.isRecommend()) {
        log.info(`Router: 推荐`);
        DouYinRecommend.init();
      } else if (DouYinRouter.isSearch()) {
        log.info("Router: 搜索");
        DouYinSearch.init();
      } else if (DouYinRouter.isUser()) {
        log.info(`Router: 用户页面`);
        DouYinUser.init();
      } else if (DouYinRouter.isVideo()) {
        log.info(`Router: 单个视频页面`);
        DouYinVideo.init();
      } else if (DouYinRouter.isChannel()) {
        log.info(`Router: Channel页面`);
        DouYinChannel.init();
      } else if (DouYinRouter.isNote()) {
        log.info(`Router:  笔记页面`);
        DouYinNote.init();
      } else {
        log.warn("子router: " + window.location.href);
      }
    } else if (window.location.hostname.startsWith("lf-zt.douyin.com")) {
      // ignore
    } else {
      log.error("未适配router: " + window.location.href);
    }
  },
  /**
   * 移除ads
   */
  removeAds() {
    DOMUtils.waitNode<HTMLElement>(
      () =>
        DOMUtils.selector<HTMLElement>(
          '#douyin-navigation [data-e2e="douyin-navigation"] > div > div > div:regexp("下载抖音精选|条条都是宝藏视频")'
        ),
      10000
    ).then(($el) => {
      if (!$el) {
        return;
      }
      DOMUtils.remove($el);
    });
    return [addStyle(blockCSS)];
  },
  /**
   * 固定meta viewport缩放倍率为1
   */
  async initialScale() {
    log.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>");
    await DOMUtils.onReady();
    const $meta = DOMUtils.createElement(
      "meta",
      {},
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover",
      }
    );
    DOMUtils.remove("meta[name='viewport']");
    await DOMUtils.waitNode("head");
    document.head.appendChild($meta);
    return $meta;
  },
  /**
   * 移除<meta>标签name="apple-itunes-app"
   */
  async removeMetaAppleItunesApp() {
    const $metaList = await DOMUtils.waitNodeList<NodeListOf<HTMLMeterElement>>(
      ['meta[name="apple-itunes-app"]'],
      10000
    );
    if (!$metaList) {
      return;
    }
    DOMUtils.remove($metaList);
  },
  /**
   * 监听Router重载
   */
  listenRouterChange() {
    log.info(`监听Router重载`);
    let url = window.location.href;
    const callback = () => {
      const beforeUrl = url;
      const currentUrl = window.location.href;
      url = currentUrl;
      log.info(`Router Change Before：` + beforeUrl);
      log.info(`Router Change Now：` + currentUrl);
      Panel.emitUrlChangeWithExecMenuOnceEvent({
        url: currentUrl,
        beforeUrl: beforeUrl,
      });
      this.init();
    };
    const listener = DOMUtils.on(window, "wb_url_change", callback);
    return [listener.off];
  },
  /**
   * 新标签页打开搜索结果
   */
  navSearchClickToNewTab() {
    log.info(`新标签页打开搜索结果`);
    const getSearchUrl = (searchText: string) => {
      const url = `https://www.douyin.com/search/${encodeURIComponent(searchText)}`;
      return url;
    };
    // 搜索框点击
    const result1 = DOMUtils.on(
      document,
      "click",
      [
        'div[data-click="doubleClick"]:has(input[data-e2e="searchbar-input"]) button[data-e2e="searchbar-button"]',
        'a[href*="douyin.com/search/"]',
      ],
      (evt, selectorTarget) => {
        DOMUtils.preventEvent(evt);
        let url: string | undefined;
        if (selectorTarget instanceof HTMLAnchorElement) {
          // 视频区域的点击信息
          url = selectorTarget.href;
        } else {
          // 顶部搜索框的搜索按钮
          const $doubleClick = selectorTarget.closest<HTMLElement>('div[data-click="doubleClick"]');
          if (!$doubleClick) {
            Qmsg.error("未找到搜索框元素");
            return;
          }
          const $input = $doubleClick.querySelector<HTMLInputElement>("input")!;
          let searchValue = $input.value;
          if (searchValue == null || searchValue === "") {
            // 这时候获取不到搜索内容
            // 搜索内容元素在input前面
            const $before = DOMUtils.prev($input);
            if ($before) {
              searchValue = DOMUtils.text($before);
            } else {
              const placeholder = $input.placeholder.trim();
              if (placeholder != null && placeholder !== "" && placeholder !== "搜索你感兴趣的内容") {
                searchValue = placeholder;
              } else {
                log.error("搜索内容为空，不进行搜索");
                return;
              }
            }
          }
          log.info(`当前的搜索内容：` + searchValue);
          url = getSearchUrl(searchValue);
        }
        log.info(`新标签页打开搜索：${url}`);
        window.open(url, "_blank");
      },
      {
        capture: true,
      }
    );
    // 搜索建议
    const result2 = DOMUtils.on(
      document,
      "click",
      '[data-e2e="searchbar-button"] + div [data-text][data-index]',
      (evt, selectorTarget) => {
        const $click = evt.composedPath()[0] as HTMLElement;
        if ($click.closest(".icon[data-text]") || $click.matches(".icon[data-text]")) {
          // 忽略点击填入输入框的图标
          return;
        }
        DOMUtils.preventEvent(evt);
        const searchText = selectorTarget.getAttribute("data-text");
        if (!searchText) {
          log.error("未找到搜索建议内容", selectorTarget);
          Qmsg.error("未找到搜索建议内容");
          return;
        }
        const url = getSearchUrl(searchText);
        window.open(url, "_blank");
      },
      { capture: true }
    );
    return [result1.off, result2.off];
  },
};
