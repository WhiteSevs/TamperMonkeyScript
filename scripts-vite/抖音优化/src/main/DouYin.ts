import { $$, addStyle, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { BlockTopNavigator } from "./block-frame/blockTopNavigator";
import { BlockSearchFrame } from "./block-frame/blockSearchFrame";
import { DouYinHook } from "../hook/DouYinHook";
import { DouYinAccount } from "../account/DouYinAccount";
import { DouYinVideoPlayer } from "./video/DouYinVideoPlayer";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinLive } from "./live/DouYinLive";
import { DouYinRedirect } from "./DouYinRedirect";
import { DouYinSearch } from "./search/DouYinSearch";
import { BlockLeftNavigator } from "./block-frame/blockLeftNavigator";
import { DouYinGestureBackClearHash } from "./DouYinGestureBackConfig";
import blockCSS from "./css/block.css?raw";
import { DouYinUser } from "./user/DouYinUser";
import { DouYinVideo } from "./video/DouYinVideo";
import { DouYinChannel } from "./channel/DouYinChannel";
import { DouYinVideoFilter } from "./video/DouYinVideoFilter";
import { DouYinNote } from "./note/DouYinNote";
import { DouYinNetWorkHook } from "@/hook/DouYinNetWorkHook";
import { DouYinRecommend } from "./recommend/DouYinRecommend";
import Qmsg from "qmsg";

export const DouYin = {
  init() {
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
      DouYinAccount.disguiseLogin();
    });
    Panel.execMenuOnce("dy-initialScale", () => {
      this.initialScale();
    });
    Panel.execMenu("dy-apple-removeMetaAppleItunesApp", () => {
      this.removeMetaAppleItunesApp();
    });
    BlockLeftNavigator.init();
    BlockTopNavigator.init();
    BlockSearchFrame.init();

    Panel.execMenuOnce(
      "dy-common-listenRouterChange",
      () => {
        this.listenRouterChange();
      },
      false,
      false
    );

    Panel.execMenuOnce("dy-search-click-to-new-tab", () => {
      this.navSearchClickToNewTab();
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
  initialScale() {
    log.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>");
    DOMUtils.ready(() => {
      let meta = DOMUtils.createElement(
        "meta",
        {},
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover",
        }
      );
      DOMUtils.remove("meta[name='viewport']");
      DOMUtils.waitNode("head").then(() => {
        document.head.appendChild(meta);
      });
    });
  },
  /**
   * 移除<meta>标签name="apple-itunes-app"
   */
  removeMetaAppleItunesApp() {
    DOMUtils.waitNodeList<NodeListOf<HTMLMeterElement>>(['meta[name="apple-itunes-app"]'], 10000).then(($metaList) => {
      if (!$metaList) {
        return;
      }
      $metaList.forEach(($meta) => {
        $meta.remove();
      });
    });
  },
  /**
   * 监听Router重载
   */
  listenRouterChange() {
    log.info(`监听Router重载`);
    let url = window.location.href;
    DOMUtils.on(window, "wb_url_change", (event) => {
      const beforeUrl = url;
      const currentUrl = window.location.href;
      url = currentUrl;
      log.info(`Router Change：` + currentUrl);
      Panel.triggerUrlChangeWithExecMenuOnceEvent({
        url: currentUrl,
        beforeUrl: beforeUrl,
      });
      this.init();
    });
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
    DOMUtils.on(
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
              log.error("搜索内容为空，不进行搜索");
              return;
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
    DOMUtils.on(
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
  },
};
