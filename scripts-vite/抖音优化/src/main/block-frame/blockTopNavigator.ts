import { addStyle, DOMUtils, log } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

/** 顶部导航栏屏蔽 */
export const BlockTopNavigator = {
  init() {
    Panel.exec(
      ["shieldTopNavigator", "search-shieldTopNavigator"],
      () => {
        return this.shieldTopNavigator();
      },
      (keyList) => {
        const [mainKey, childKey] = keyList;
        const mainValue = Panel.getValue<boolean>(mainKey);
        const childValue = Panel.getValue<number>(childKey);
        if (DouYinRouter.isSearch()) {
          if (childValue == 1) {
            // 开
            return true;
          } else if (childValue == 0) {
            // 关
            return false;
          } else {
            // 跟随主设置
          }
        }
        return mainValue;
      }
    );
    Panel.execMenuOnce(
      "shieldClientTip",
      () => {
        return this.shieldClientTip();
      },
      void 0,
      true
    );
    Panel.execMenuOnce(
      "shieldFillingBricksAndStones",
      () => {
        return this.shieldFillingBricksAndStones();
      },
      void 0,
      true
    );
    Panel.execMenuOnce(
      "shieldClient",
      () => {
        return this.shieldClient();
      },
      void 0,
      true
    );
    Panel.execMenuOnce(
      "shieldQuickAccess",
      () => {
        return this.shieldQuickAccess();
      },
      void 0,
      true
    );
    Panel.execMenuOnce(
      "shieldNotifitation",
      () => {
        return this.shieldNotifitation();
      },
      void 0,
      true
    );
    Panel.execMenuOnce(
      "shieldPrivateMessage",
      () => {
        return this.shieldPrivateMessage();
      },
      void 0,
      true
    );
    Panel.execMenuOnce(
      "shieldSubmission",
      () => {
        return this.shieldSubmission();
      },
      void 0,
      true
    );
    Panel.execMenuOnce(
      "shieldWallpaper",
      () => {
        return this.shieldWallpaper();
      },
      void 0,
      true
    );
    Panel.execMenuOnce("shield-topNav-rightMenu", () => {
      return this.shieldRightMenu();
    });
    Panel.execMenuOnce("shield-topNav-rightMenu-more", () => {
      return this.shieldRightMenuMore();
    });
    Panel.execMenuOnce("shield-topNav-rightMenu-loginAvatar", () => {
      return this.shieldRightMenuLoginAvatar();
    });
    Panel.execMenuOnce("shield-topNav-ai-search", () => {
      return this.shieldAISearch();
    });
  },
  /**
   * 【屏蔽】顶部导航栏
   */
  shieldTopNavigator() {
    log.info("【屏蔽】顶部导航栏");
    const result: (HTMLStyleElement | undefined)[] = [];
    result.push(CommonUtil.addBlockCSS("#douyin-header"));
    result.push(
      addStyle(/*css*/ `
			/* 修复视频的高度 */
			#douyin-right-container{
				padding-top: 0px !important;
			}
			/* 兼容手机模式 */
			@media screen and (max-width: 550px)  and (orientation: portrait) {
				.is-mobile-pc{
					--header-height: 0px !important;
				}
			}
		`)
    );
    // 推荐视频的高度适配
    result.push(
      addStyle(/*css*/ `
       /* pc端 or mobile端*/
      @media screen and ((min-width: 800px) or ((max-width: 550px) and (orientation: portrait))) {
        #slidelist .page-recommend-container{
          --recommend-video-container-margin-height: 0px;
          margin: var(--recommend-video-container-margin-height) 0px !important;
          height: ${window.innerHeight}px !important;
          height: round(nearest, 100dvh, 1px) !important;
        }
      }
			`)
    );
    if (DouYinRouter.isSearch()) {
      // 搜索页面
      result.push(
        addStyle(/*css*/ `
				/* 把搜索顶部的工具栏置顶 */
				#search-content-area > div > div:nth-child(1) > div:nth-child(1){
					top: 0;
				}`)
      );
    }

    return result;
  },
  /**
   * 【屏蔽】充钻石
   */
  shieldFillingBricksAndStones() {
    log.info("【屏蔽】充钻石");
    const result = [];
    const iconPath = `d="M12.8013 19.9762C12.3693 20.4436 11.6307 20.4436 11.1986 19.9762L3.11756 11.2346C2.74913 10.8361 2.72958 10.2274 3.07168 9.80599L6.92716 5.05714C7.13438 4.8019 7.44562 4.65369 7.77439 4.65369H16.2256C16.5544 4.65369 16.8656 4.8019 17.0728 5.05714L20.9283 9.80599C21.2704 10.2274 21.2508 10.8361 20.8824 11.2346L12.8013 19.9762ZM4.45944 10.4765L12 18.6334L19.5405 10.4765L16.031 6.15369H7.96901L4.45944 10.4765ZM16.0867 9.09336L16.0954 10.4557C15.3615 10.4557 14.6822 10.2315 14.1281 9.85065V12.5739C14.1281 13.9502 12.964 15.0659 11.5281 15.0659C10.0922 15.0659 8.9281 13.9502 8.9281 12.5739C8.9281 11.1976 10.0922 10.0819 11.5281 10.0819C11.6486 10.0819 11.7672 10.0897 11.8834 10.1049V11.4964C11.7713 11.4625 11.6519 11.4442 11.5281 11.4442C10.8771 11.4442 10.3494 11.95 10.3494 12.5739C10.3494 13.1978 10.8771 13.7036 11.5281 13.7036C12.179 13.7036 12.7067 13.1978 12.7067 12.5739V7.21604H14.1281C14.1281 8.25285 15.005 9.09336 16.0867 9.09336Z"`;
    result.push(
      CommonUtil.addBlockCSS(
        // 2024.8.12
        `div[id^="douyin-header-menu"] pace-island > div > div:has(path[${iconPath}])`,
        // 2024.7.16 更多 充钻石
        'body .semi-portal .semi-portal-inner li.semi-dropdown-item:has(a[href*="douyin_recharge"])'
      )
    );
    if (DouYinRouter.isSearch()) {
      // 搜索页面
      result.push(
        CommonUtil.addBlockCSS(
          // 2024.8.12
          `div[id^="douyin-header-menu"] >  div > div > div:has(path[${iconPath}])`
        )
      );
    } else if (DouYinRouter.isLive()) {
      // 直播页面
      result.push(
        CommonUtil.addBlockCSS(
          // 直播
          '#douyin-header pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M12.8013 19.9762C12.3693 20.4436 11.6307 20.4436 11.1986 19.9762L3.11756 11.2346C2.74913 10.8361 2.72958 10.2274 3.07168 9.80599L6.92716 5.05714C7.13438 4.8019 7.44562 4.65369 7.77439 4.65369H16.2256C16.5544 4.65369 16.8656 4.8019 17.0728 5.05714L20.9283 9.80599C21.2704 10.2274 21.2508 10.8361 20.8824 11.2346L12.8013 19.9762ZM4.45944 10.4765L12 18.6334L19.5405 10.4765L16.031 6.15369H7.96901L4.45944 10.4765ZM16.0867 9.09336L16.0954 10.4557C15.3615 10.4557 14.6822 10.2315 14.1281 9.85065V12.5739C14.1281 13.9502 12.964 15.0659 11.5281 15.0659C10.0922 15.0659 8.9281 13.9502 8.9281 12.5739C8.9281 11.1976 10.0922 10.0819 11.5281 10.0819C11.6486 10.0819 11.7672 10.0897 11.8834 10.1049V11.4964C11.7713 11.4625 11.6519 11.4442 11.5281 11.4442C10.8771 11.4442 10.3494 11.95 10.3494 12.5739C10.3494 13.1978 10.8771 13.7036 11.5281 13.7036C12.179 13.7036 12.7067 13.1978 12.7067 12.5739V7.21604H14.1281C14.1281 8.25285 15.005 9.09336 16.0867 9.09336Z"])'
        )
      );
    }
    return result;
  },
  /**
   * 【屏蔽】客户端
   */
  shieldClient() {
    log.info("【屏蔽】客户端");
    const result = [];
    result.push(
      CommonUtil.addBlockCSS(
        '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container',
        // 2024.7.15
        'div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[download^="douyin-downloader"])',
        // ios
        'div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[href*="/douyin-pc-web/"])',
        'div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M18 18.75H6V17.25H18V18.75Z"])'
      )
    );
    if (DouYinRouter.isSearch()) {
      // 搜索页面
      result.push(
        CommonUtil.addBlockCSS(
          'div:has(> div[data-e2e="something-button"] path[d="M18.404 19.018h-12v-1.5h12v1.5zM11.654 13.457v-8.19h1.5v8.19l3.22-3.22 1.06 1.061-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5 1.06-1.06 3.22 3.22z"])',
          // 2024.7.15
          'div[id^="douyin-header-menu"] >  div > div > div:has(a[download^="douyin-downloader"])'
        )
      );
    } else if (DouYinRouter.isLive()) {
      // 直播页面
      result.push(
        CommonUtil.addBlockCSS(
          // 直播
          '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container:has(a)',
          // 直播
          '#douyin-header pace-island[id^="island"] > div[class] span:has(a[download][href*="client"])',
          /* 直播 更多 客户端 */
          '.semi-portal-inner .semi-dropdown-content .semi-dropdown-item:has(a[download][href*="client"])'
        )
      );
    }
    return result;
  },
  /**
   * 【屏蔽】快捷访问
   */
  shieldQuickAccess() {
    log.info("【屏蔽】快捷访问");
    const result = [];
    result.push(
      CommonUtil.addBlockCSS(
        'header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)',
        // 直播 更多里面的 快捷访问
        // '.semi-portal-inner .semi-dropdown-content .semi-dropdown-item'
        // 2024.7.15 更新规则
        'div[id^="douyin-header-menu"] pace-island > div > div:has(.quick-access-nav-icon)'
      )
    );
    if (DouYinRouter.isSearch()) {
      // 搜索页面
      result.push(CommonUtil.addBlockCSS("div:has(>div>div>.quick-access-nav-icon)"));
      DOMUtils.waitNode('li.semi-dropdown-item[role="menuitem"]:contains("快捷访问")', 10000).then(($semi) => {
        $semi?.remove();
      });
    } else if (DouYinRouter.isLive()) {
      // 直播页面
    }
    return result;
  },
  /**
   * 【屏蔽】通知
   */
  shieldNotifitation() {
    log.info("【屏蔽】通知");
    const result = [];
    result.push(
      // 2024.11.11
      CommonUtil.addBlockCSS(
        '#douyin-right-container #douyin-header-menuCt pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
      )
    );
    if (DouYinRouter.isSearch()) {
      // 搜索页面
      result.push(
        CommonUtil.addBlockCSS(
          // 2024.8.12
          'div[id^="douyin-header-menu"] >  div > div > ul:has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
        )
      );
    } else if (DouYinRouter.isLive()) {
      // 直播页面
      result.push(
        CommonUtil.addBlockCSS(
          // 直播
          'div[id^="douyin-header-menu"] pace-island[id^="island"] > * > :has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
        )
      );
    }
    return result;
  },
  /**
   * 【屏蔽】私信
   */
  shieldPrivateMessage() {
    log.info("【屏蔽】私信");
    const result = [];
    result.push(
      CommonUtil.addBlockCSS(
        '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])',
        // 直播
        '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])'
      )
    );
    if (DouYinRouter.isSearch()) {
      log.info("搜索-【屏蔽】私信");
      result.push(
        CommonUtil.addBlockCSS(
          'ul:has( div>div[data-e2e="im-entry"] )',
          // 2024.7.15
          'div[id^="douyin-header-menu"] >  div > div > ul:has([data-e2e="im-entry"])'
        )
      );
    }
    return result;
  },
  /**
   * 【屏蔽】投稿
   */
  shieldSubmission() {
    log.info("【屏蔽】投稿");
    const result = [];
    // 图标
    const iconPath = `d="M11.3487 4.90125H11.3164H11.3164C10.2479 4.90124 9.40104 4.90124 8.71799 4.95587C8.01959 5.01173 7.42807 5.12824 6.88626 5.39747C5.95866 5.8584 5.20716 6.60991 4.74622 7.53751C4.477 8.07932 4.36048 8.67084 4.30462 9.36923C4.24999 10.0523 4.24999 10.8991 4.25 11.9677V12V12.0322C4.24999 13.1008 4.24999 13.9477 4.30462 14.6307C4.36048 15.3291 4.477 15.9206 4.74622 16.4624C5.20716 17.39 5.95866 18.1415 6.88626 18.6025C7.42807 18.8717 8.01959 18.9882 8.71799 19.0441C9.40104 19.0987 10.2479 19.0987 11.3164 19.0987H11.3487H12.6513H12.6836C13.7521 19.0987 14.599 19.0987 15.282 19.0441C15.9804 18.9882 16.5719 18.8717 17.1137 18.6025C18.0413 18.1415 18.7928 17.39 19.2538 16.4624C19.523 15.9206 19.6395 15.3291 19.6954 14.6307C19.75 13.9477 19.75 13.1008 19.75 12.0322V12V11.9677C19.75 10.8991 19.75 10.0523 19.6954 9.36923C19.6395 8.67084 19.523 8.07932 19.2538 7.53751C18.7928 6.60991 18.0413 5.8584 17.1137 5.39747C16.5719 5.12824 15.9804 5.01173 15.282 4.95587C14.599 4.90124 13.7521 4.90124 12.6836 4.90125H12.6513H11.3487ZM7.55376 6.74077C7.8529 6.59212 8.22981 6.4997 8.83757 6.45109C9.45382 6.4018 10.2407 6.40125 11.3487 6.40125H12.6513C13.7593 6.40125 14.5462 6.4018 15.1624 6.45109C15.7702 6.4997 16.1471 6.59212 16.4462 6.74077C17.0809 7.05614 17.5951 7.57033 17.9105 8.205C18.0591 8.50414 18.1515 8.88105 18.2002 9.48882C18.2494 10.1051 18.25 10.8919 18.25 12C18.25 13.108 18.2494 13.8949 18.2002 14.5111C18.1515 15.1189 18.0591 15.4958 17.9105 15.7949C17.5951 16.4296 17.0809 16.9438 16.4462 17.2592C16.1471 17.4078 15.7702 17.5002 15.1624 17.5488C14.5462 17.5981 13.7593 17.5987 12.6513 17.5987H11.3487C10.2407 17.5987 9.45382 17.5981 8.83757 17.5488C8.22981 17.5002 7.8529 17.4078 7.55376 17.2592C6.91909 16.9438 6.4049 16.4296 6.08952 15.7949C5.94088 15.4958 5.84846 15.1189 5.79985 14.5111C5.75056 13.8949 5.75 13.108 5.75 12C5.75 10.8919 5.75056 10.1051 5.79985 9.48882C5.84846 8.88105 5.94088 8.50414 6.08952 8.205C6.4049 7.57033 6.91909 7.05614 7.55376 6.74077ZM11.25 15V12.75H9V11.25H11.25V8.99997H12.75V11.25H15V12.75H12.75V15H11.25Z"`;
    result.push(
      CommonUtil.addBlockCSS(
        // 2024.8.12 更新规则
        `div[id^="douyin-header-menu"] pace-island > div > div:has(path[${iconPath}])`
      )
    );
    if (DouYinRouter.isSearch()) {
      // 搜索页面
      result.push(
        CommonUtil.addBlockCSS(
          // 2024.8.12
          `div[id^="douyin-header-menu"] >  div > div > div:has(path[${iconPath}])`
        )
      );
    } else if (DouYinRouter.isLive()) {
      // 直播页面
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])'
        )
      );
    }
    return result;
  },
  /**
   * 【屏蔽】客户端提示
   */
  shieldClientTip() {
    log.info("【屏蔽】客户端提示");
    const result = [];

    result.push(
      CommonUtil.addBlockCSS(
        /* 右上角 通知 下载客户端，实时接收消息通知 */
        'ul li div[data-e2e="something-button"] + div div:has(>a[download*="douyin-downloader"])',
        /* 右上角 个人信息 客户端登录访问更便捷 [下载] */
        '#douyin-header pace-island[id^="island_"] ul > div:has(>a[class][download])',
        /* 右上角 私信 下载客户端，实时接收好友消息 */
        '#douyin-header pace-island[id^="island_"] ul[class] li div[data-e2e="im-entry"]  div>div div div:has(a[download][href])',
        /* 右上角 壁纸 下载客户端，使用壁纸 */
        '#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container div:has(+ #wallpaper-modal)'
      )
    );
    if (DouYinRouter.isSearch()) {
      // 搜索页面
      result.push(
        CommonUtil.addBlockCSS(
          /* 右上角 私信 下载客户端，实时接收好友消息 */
          'div[id^="douyin-header-menu"] ul li div[data-e2e="im-entry"] div > div > div:has(>a[download*="douyin-downloader"])',
          /* 右上角 个人信息 客户端登录访问更便捷 [下载] */
          'div[id^="douyin-header-menu"] ul > div:has(>a[download*="douyin-downloader"])'
        )
      );
    }
    return result;
  },
  /**
   * 【屏蔽】壁纸
   */
  shieldWallpaper() {
    log.info("【屏蔽】壁纸");
    const result = [];
    result.push(
      CommonUtil.addBlockCSS(
        // 2024.8.12
        'div[id^="douyin-header-menu"] pace-island > div > div:has(span.semi-icon path[d="M9.10335 4.79386C8.86882 4.64984 8.57425 4.64585 8.3359 4.78346C8.09755 4.92108 7.95372 5.17818 7.96117 5.4533L8.05873 9.05336L5.31808 11.3898C5.10864 11.5683 5.01381 11.8473 5.07104 12.1165C5.12826 12.3857 5.32833 12.6019 5.59229 12.6798L9.0463 13.6995L10.4215 17.028C10.5266 17.2824 10.7625 17.4588 11.0362 17.4875C11.3099 17.5163 11.5774 17.3929 11.7331 17.1659L13.3237 14.8471L16.4638 19.3577L17.6949 18.5007L14.6505 14.1276L17.3608 13.9168C17.6352 13.8954 17.8758 13.7255 17.9878 13.4741C18.0997 13.2226 18.065 12.9301 17.8972 12.7119L15.7022 9.85673L16.5462 6.35562C16.6107 6.08806 16.5234 5.80667 16.3189 5.62251C16.1144 5.43835 15.8254 5.38101 15.566 5.47312L12.1723 6.67838L9.10335 4.79386ZM9.56789 9.37117L9.49812 6.79649L11.693 8.14425C11.8862 8.26291 12.1227 8.28777 12.3364 8.21188L14.7635 7.34991L14.16 9.85382C14.1068 10.0743 14.1563 10.3069 14.2945 10.4867L15.8643 12.5286L13.2964 12.7284C13.0704 12.746 12.8644 12.8649 12.7361 13.0519L11.2792 15.1758L10.2957 12.7954C10.2091 12.5858 10.0324 12.4267 9.81491 12.3624L7.34469 11.6332L9.30473 9.96224C9.47729 9.81513 9.57403 9.59784 9.56789 9.37117Z"])'
      )
    );
    if (DouYinRouter.isSearch()) {
      // 搜索页面
      result.push(
        CommonUtil.addBlockCSS(
          // 2024.8.12
          'div[id^="douyin-header-menu"] >  div > div > div:has(span.semi-icon path[d="M9.10335 4.79386C8.86882 4.64984 8.57425 4.64585 8.3359 4.78346C8.09755 4.92108 7.95372 5.17818 7.96117 5.4533L8.05873 9.05336L5.31808 11.3898C5.10864 11.5683 5.01381 11.8473 5.07104 12.1165C5.12826 12.3857 5.32833 12.6019 5.59229 12.6798L9.0463 13.6995L10.4215 17.028C10.5266 17.2824 10.7625 17.4588 11.0362 17.4875C11.3099 17.5163 11.5774 17.3929 11.7331 17.1659L13.3237 14.8471L16.4638 19.3577L17.6949 18.5007L14.6505 14.1276L17.3608 13.9168C17.6352 13.8954 17.8758 13.7255 17.9878 13.4741C18.0997 13.2226 18.065 12.9301 17.8972 12.7119L15.7022 9.85673L16.5462 6.35562C16.6107 6.08806 16.5234 5.80667 16.3189 5.62251C16.1144 5.43835 15.8254 5.38101 15.566 5.47312L12.1723 6.67838L9.10335 4.79386ZM9.56789 9.37117L9.49812 6.79649L11.693 8.14425C11.8862 8.26291 12.1227 8.28777 12.3364 8.21188L14.7635 7.34991L14.16 9.85382C14.1068 10.0743 14.1563 10.3069 14.2945 10.4867L15.8643 12.5286L13.2964 12.7284C13.0704 12.746 12.8644 12.8649 12.7361 13.0519L11.2792 15.1758L10.2957 12.7954C10.2091 12.5858 10.0324 12.4267 9.81491 12.3624L7.34469 11.6332L9.30473 9.96224C9.47729 9.81513 9.57403 9.59784 9.56789 9.37117Z"])'
        )
      );
    } else if (DouYinRouter.isLive()) {
      // 直播页面
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container:has(span.semi-icon)',
          '#douyin-header pace-island[id^="island"] > div[class] span:has(.semi-icon)'
        )
      );
    }
    return result;
  },
  /**
   * 【屏蔽】右侧菜单栏
   */
  shieldRightMenu() {
    log.info(`【屏蔽】右侧菜单栏`);
    return CommonUtil.addBlockCSS(`div[id^="douyin-header-menu"]`);
  },
  /**
   * 【屏蔽】更多
   */
  shieldRightMenuMore() {
    log.info(`【屏蔽】更多`);
    return CommonUtil.addBlockCSS(
      `#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M17 8.75H7V7.25H17V8.75ZM17 12.75H7V11.25H17V12.75ZM7 16.75H17V15.25H7V16.75Z"])`
    );
  },
  /**
   * 【屏蔽】登录头像
   */
  shieldRightMenuLoginAvatar() {
    log.info(`【屏蔽】登录头像`);
    return CommonUtil.addBlockCSS(
      // 未登录
      `#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M6.484 43.177c4.765-5.408 11.743-8.821 19.517-8.821 7.775 0 14.753 3.413 19.517 8.821C40.754 48.587 33.776 52 26.001 52c-7.774 0-14.752-3.413-19.517-8.822zM35.287 21.356a9.286 9.286 0 1 1-18.571 0 9.286 9.286 0 0 1 18.571 0z"])`,
      // 已登录
      `#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has([data-e2e="live-avatar"])`
    );
  },
  /**
   * 【屏蔽】AI搜索/抖音
   */
  shieldAISearch() {
    log.info(`【屏蔽】AI搜索/抖音`);
    return CommonUtil.addBlockCSS(`#douyin-header header div:has(>svg g[clip-path*="aiSearch"])`);
  },
};
