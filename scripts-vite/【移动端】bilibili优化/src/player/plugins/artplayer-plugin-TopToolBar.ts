import { BilibiliVideoApi } from "@/api/BilibiliVideoApi";
import Artplayer from "artplayer";
import type { Events } from "artplayer";

/** 配置信息 */
export type ArtPlayerPluginTopToolBarOption = {
  /**
   * 是否显示容器
   * @default false */
  showWrap?: boolean;
  /**
   * 是否显示右侧视图
   */
  showRight?: boolean;
  /**
   * 是否显示右侧下面的follow
   */
  showRightFollow?: boolean;
  /**
   * 视频标题文字
   */
  title?: string;
  /**
   * 是否显示标题
   * @default false */
  showTitle?: boolean;
  /**
   * 获取在线数据的必须参数
   */
  onlineInfoParams: {
    /**
     * 是否显示标题
     */
    aid: number | string;
    /**
     * 视频的cid
     */
    cid: number | string;
  } & {
    /**
     * 视频的bvid
     */
    bvid: string;
    /**
     * 视频的cid
     */
    cid: number | string;
  };
  /**
   * 是否显示在线观看人数
   * @default false */
  showOnlineTotal?: boolean;
  /**
   * 视频观看数据（用于右侧显示）
   */
  videoView?: IPFunction<{
    /**
     * 点赞数
     */
    like: IPFunction<number | string>;
    /**
     * 投币数
     *
     */
    coin: IPFunction<number | string>;
    /**
     * 收藏数
     */
    collect: IPFunction<number | string>;
    /**
     * 分享数
     */
    share: IPFunction<number | string>;
  }>;
};

export type ArtPlayerPluginTopToolBarResult = {
  name: string;
  /**
   * 更新参数时调用
   * @param option
   */
  update(option: ArtPlayerPluginTopToolBarOption): void;
};

const TAG = "[artplayer-plugin-TopToolBar]：";

/** 工具函数 */
const TopToolBarUtils = {
  /** 显示元素，有个问题，不能单纯的使用display，会卡死 */
  show($el: HTMLElement) {
    if (!$el) {
      return;
    }
    // $el.classList.remove("art-common-hide");
  },
  /** 隐藏元素 */
  hide($el: HTMLElement) {
    if (!$el) {
      return;
    }
    // $el.classList.add("art-common-hide");
  },
};

/** 事件 */
const TopToolBarEvent = {
  events: {
    control: (state) => {
      if (!state) {
        return;
      }
      TopToolBar.updateOnlineTotal({
        showOnlineTotal: TopToolBar.$data.option.showOnlineTotal!,
        onlineInfoParams: TopToolBar.$data.option.onlineInfoParams,
      });
    },
  } as {
    [key in keyof Events]?: (...args: Events[key]) => unknown;
  },
  /**
   * 绑定事件
   */
  bind() {
    Object.keys(this.events).forEach((eventName) => {
      TopToolBar.art.on(eventName as keyof Events, (this.events as any)[eventName as keyof Events]);
    });
  },
  /**
   * 取消绑定事件
   */
  unbind() {
    Object.keys(this.events).forEach((eventName) => {
      TopToolBar.art.off(eventName as keyof Events, (this.events as any)[eventName as keyof Events]);
    });
  },
};

const TopToolBar = {
  art: null as any as Artplayer,
  $el: {
    /** 顶部总容器 */
    $topWrap: null as any as HTMLElement,
    /**
     * 视频标题栏容器
     */
    $topTitleContainer: null as any as HTMLElement,
    /** 视频标题文本 */
    $topTitleText: null as any as HTMLDivElement,
    /** 视频标题的下面的容器 */
    $topTitleFollow: null as any as HTMLDivElement,
    /** 视频标题下面的在线观看人数 */
    $topTitleFollowText: null as any as HTMLDivElement,
    /** 右侧容器 */
    $topRightContainer: null as any as HTMLDivElement,
    /** 右侧容器的下面的容器 */
    $topRightFollowContainer: null as any as HTMLDivElement,
  },
  $data: {
    /** 是否已初始化 */
    isInit: false,
    __option: {} as ArtPlayerPluginTopToolBarOption,
    /** 配置 */
    option: {} as ArtPlayerPluginTopToolBarOption,
  },
  $key: {
    plugin_KEY: "plugin-bilibili-topToolBar",
  },
  /**
   * 初始化
   */
  init(option: ArtPlayerPluginTopToolBarOption) {
    this.art.layers.add({
      name: "top-wrap",
      html: /*html*/ `
      <div class="art-player-top-wrap">
        <div class="art-player-top-container">
          <!-- 标题的容器 -->
          <div class="art-player-top-left-container">
            <!-- 视频的标题 -->
            <div class="art-player-video-title-text"></div>
          </div>
          <!-- 顶部右侧组件 -->
          <div class="art-player-top-right-container">
            <!-- 点赞 -->
            <div class="art-player-top-right-like">
              <div class="art-player-top-right-icon">
                <svg width="24" height="24" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class="video-like-icon video-toolbar-item-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z" fill="currentColor"></path>
                </svg>
                <span data-value=""></span>
              </div>
            </div>
            <!-- 评论 -->
            <div class="art-player-top-right-comment">
              <div class="art-player-top-right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" t="1793156114520" class="video-fav-icon video-toolbar-item-icon" viewBox="0 0 1024 1024" width="24" height="24">
                  <path d="M783.5648 773.3248H675.84c0.8192 0.6144 1.2288 0.8192 1.2288 0.8192-262.5536 0-455.0656 99.9424-455.0656 99.9424V774.144c0.2048-1.024 0.2048-1.8432 0.4096-2.6624-71.2704-9.0112-126.7712-69.2224-126.7712-142.9504v-333.824c0-80.0768 64.7168-144.7936 144.7936-144.7936h543.1296c80.0768 0 144.7936 64.7168 144.7936 144.7936v333.824c0 80.0768-64.9216 144.7936-144.7936 144.7936z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <!-- 收藏 -->
            <div class="art-player-top-right-collect">
              <div class="art-player-top-right-icon">
                <svg width="24" height="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="video-fav-icon video-toolbar-item-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z" fill="currentColor"></path>
                </svg>
                <span data-value=""></span>
              </div>
            </div>
            <!-- 投币 -->
            <div class="art-player-top-right-coin">
              <div class="art-player-top-right-icon">
                <svg width="24" height="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="video-coin-icon video-toolbar-item-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z" fill="currentColor"></path>
                </svg>
                <span data-value=""></span>
              </div>
            </div>
            <!-- 分享 -->
            <div class="art-player-top-right-share">
              <div class="art-player-top-right-icon">
                <svg width="24" height="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="video-share-icon video-toolbar-item-icon">
                  <path d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z" fill="currentColor"></path>
                </svg>
                <span data-value=""></span>
              </div>
            </div>
          </div>
        </div>
        <!-- 在线人数 -->
        <div class="art-player-top-left-title-follow-container">
            <svg class="art-player-top-left-title-follow-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13306"><path d="M641.522424 590.30953c-29.470195-20.878516-61.574381-37.341466-95.630011-49.183166C617.699855 497.470075 661.783887 419.876859 661.783887 335.542102c0-132.611274-108.021226-240.529145-240.581334-240.529145-132.62867 0-240.545518 107.916848-240.545518 240.529145 0 45.162596 12.561084 89.143273 36.623106 127.426181 20.159132 32.190143 47.677882 59.195194 80.124875 78.789461-34.56933 11.740392-67.220984 28.493961-97.135294 49.663096-32.652677 23.136953-61.334927 51.117215-85.361133 83.051531-49.937342 66.587558-76.393901 145.737222-76.393901 228.959645 0 15.624862 12.561084 28.237111 28.066219 28.237111 15.607466 0 28.27088-12.612249 28.27088-28.237111 0-86.747713 33.850969-168.516018 95.252411-230.277664 61.266365-61.488423 142.486178-95.40693 228.532927-95.491865 2.806929 0.274246 5.749958 0 8.556886-0.685615l2.326998-0.445138c83.650165 1.678222 162.338319 35.528168 222.268246 95.544053 61.403488 61.675688 95.185896 143.478785 95.185896 230.311433 0 15.45397 12.629645 28.134781 28.16855 28.134781 15.538905 0 28.133757-12.681834 28.133757-28.134781 0-83.307358-26.355251-162.457022-76.393901-228.925876C702.958658 641.376603 674.174078 613.412714 641.522424 590.30953zM421.203576 519.768941c-101.550861 0-184.242188-82.588997-184.242188-184.225815 0-101.550861 82.692351-184.173626 184.242188-184.173626 101.483322 0 184.17465 82.622766 184.17465 184.173626C605.378226 437.178921 522.686898 519.768941 421.203576 519.768941z" p-id="13307"></path><path d="M932.277484 638.022205c-36.074613-52.05968-84.915995-91.249237-141.595902-113.821325 24.986067-17.661242 46.070268-41.141002 61.231573-68.505233 17.627473-31.642674 27.006074-67.820642 27.006074-104.699574 0-114.745371-88.956008-208.082152-198.10594-208.082152-15.607466 0-28.167526 12.595876-28.167526 28.134781s12.56006 28.082592 28.167526 28.082592c78.175477 0 141.700279 68.197218 141.700279 151.86478 0 83.804684-63.524802 151.932318-141.700279 151.932318-15.607466 0-28.167526 12.594853-28.167526 28.134781l0 0.171915c0 15.538905 12.56006 28.184923 28.167526 28.184923 140.569526 0 254.990508 121.899304 254.990508 271.76045 0 15.539928 12.664438 28.219715 28.203342 28.219715 15.504112 0 28.203342-12.68081 28.203342-28.219715C992.209458 761.28967 971.399503 694.427866 932.277484 638.022205z" p-id="13308"></path></svg>
            <span class="art-player-top-left-title-follow-text"></span>
        </div>
        <!-- 右侧的图标 -->
        <div class="art-player-top-right-follow-container">
            <!-- <div class="art-player-top-right-follow"></div> -->
        </div>
      </div>`,
      mounted: async function ($topWrap) {
        TopToolBar.$el.$topWrap = $topWrap;
        TopToolBar.$el.$topTitleContainer = $topWrap.querySelector(".art-player-top-container")!;
        TopToolBar.$el.$topTitleText = $topWrap.querySelector(".art-player-video-title-text")!;
        TopToolBar.$el.$topTitleFollow = $topWrap.querySelector(".art-player-top-left-title-follow-container")!;
        TopToolBar.$el.$topTitleFollowText = $topWrap.querySelector(".art-player-top-left-title-follow-text")!;
        TopToolBar.$el.$topRightContainer = $topWrap.querySelector(".art-player-top-right-container")!;
        TopToolBar.$el.$topRightFollowContainer = $topWrap.querySelector(".art-player-top-right-follow-container")!;
        // 先隐藏视频标题
        TopToolBarUtils.hide(TopToolBar.$el.$topTitleFollow);
        // 更新总视图
        TopToolBar.update(option);
        // 绑定事件
        TopToolBarEvent.bind();
      },
    });
  },
  /**
   * 更新配置
   */
  update(option: ArtPlayerPluginTopToolBarOption) {
    if (!this.$data.isInit) {
      this.$data.isInit = true;
      Object.defineProperties(this.$data.option, <
        {
          [key in keyof ArtPlayerPluginTopToolBarOption]: PropertyDescriptor;
        }
      >{
        showWrap: {
          set(this: ArtPlayerPluginTopToolBarOption, value) {
            TopToolBar.$data.__option.showWrap = value;
            // 更新容器状态
            if (value) {
              TopToolBarUtils.show(TopToolBar.$el.$topWrap);
            } else {
              TopToolBarUtils.hide(TopToolBar.$el.$topWrap);
            }
          },
          get(this: ArtPlayerPluginTopToolBarOption) {
            return TopToolBar.$data.__option.showWrap;
          },
        },
        /** 是否显示标题 @default false */
        showTitle: {
          set(this: ArtPlayerPluginTopToolBarOption, value) {
            TopToolBar.$data.__option.showTitle = value;
            // 更新标题显示状态
            if (value) {
              TopToolBarUtils.show(TopToolBar.$el.$topTitleContainer);
            } else {
              TopToolBarUtils.hide(TopToolBar.$el.$topTitleContainer);
            }
          },
          get(this: ArtPlayerPluginTopToolBarOption) {
            return TopToolBar.$data.__option.showTitle;
          },
        },
        /** 视频标题文字 */
        title: {
          set(this: ArtPlayerPluginTopToolBarOption, value) {
            TopToolBar.$data.__option.title = value;
            // 更新标题显示的文字
            if (typeof value === "string") {
              TopToolBar.$el.$topTitleText.innerText = value;
            }
          },
          get(this: ArtPlayerPluginTopToolBarOption) {
            return TopToolBar.$data.__option.title;
          },
        },
        /** 是否显示在线观看人数 @default false */
        showOnlineTotal: {
          set(this: ArtPlayerPluginTopToolBarOption, value) {
            TopToolBar.$data.__option.showOnlineTotal = value;
            // 更新在线观看人数显示状态
            if (value) {
              TopToolBarUtils.show(TopToolBar.$el.$topTitleFollow);
            } else {
              TopToolBarUtils.hide(TopToolBar.$el.$topTitleFollow);
            }
          },
          get(this: ArtPlayerPluginTopToolBarOption) {
            return TopToolBar.$data.__option.showOnlineTotal;
          },
        },
        /** 在线人数请求参数信息 */
        onlineInfoParams: {
          set(this: ArtPlayerPluginTopToolBarOption, value) {
            TopToolBar.$data.__option.onlineInfoParams = value;
            // 更新在线人数参数信息
            TopToolBar.updateOnlineTotal({
              showOnlineTotal: this.showOnlineTotal,
              onlineInfoParams: value,
            });
          },
          get(this: ArtPlayerPluginTopToolBarOption) {
            return TopToolBar.$data.__option.onlineInfoParams;
          },
        },
        /**
         * 视频信息
         */
        videoView: {
          set(this: ArtPlayerPluginTopToolBarOption, value) {
            TopToolBar.$data.__option.videoView = value;
            // 更新视频信息
            TopToolBar.updateVideoData(value);
          },
          get(this: ArtPlayerPluginTopToolBarOption) {
            return TopToolBar.$data.__option.videoView;
          },
        },
        /** 是否显示右侧视图 */
        showRight: {
          set(this: ArtPlayerPluginTopToolBarOption, value) {
            TopToolBar.$data.__option.showRight = value;
            // 更新右侧视图显示状态
            if (value) {
              TopToolBarUtils.show(TopToolBar.$el.$topRightContainer);
            } else {
              TopToolBarUtils.hide(TopToolBar.$el.$topRightContainer);
            }
          },
          get(this: ArtPlayerPluginTopToolBarOption) {
            return TopToolBar.$data.__option.showRight;
          },
        },
        /** 是否显示右侧下面的follow */
        showRightFollow: {
          set(this: ArtPlayerPluginTopToolBarOption, value) {
            TopToolBar.$data.__option.showRightFollow = value;
            // 更新右侧下面的follow显示状态
            if (value) {
              TopToolBarUtils.show(TopToolBar.$el.$topRightFollowContainer);
            } else {
              TopToolBarUtils.hide(TopToolBar.$el.$topRightFollowContainer);
            }
          },
          get(this: ArtPlayerPluginTopToolBarOption) {
            return TopToolBar.$data.__option.showRightFollow;
          },
        },
      });
    }
    Object.assign(this.$data.option, option);
  },
  /**
   * 更新在线观看人数
   */
  async updateOnlineTotal(option: {
    showOnlineTotal: ArtPlayerPluginTopToolBarOption["showOnlineTotal"];
    onlineInfoParams: ArtPlayerPluginTopToolBarOption["onlineInfoParams"];
  }) {
    if (!option.showOnlineTotal) {
      return;
    }
    // 请求在线观看人数
    let onlineTotalInfo = await BilibiliVideoApi.onlineTotal({
      aid: option.onlineInfoParams.aid,
      bvid: option.onlineInfoParams.bvid,
      cid: option.onlineInfoParams.cid,
    });
    if (!onlineTotalInfo) {
      return;
    }
    // 更新在线观看人数
    TopToolBar.$el.$topTitleFollowText.innerText = `${
      onlineTotalInfo["total"] || onlineTotalInfo["count"] || 0
    }人正在看`;
    // console.log(
    // 	TAG + `更新在线观看人数，请求的数据 ==> ${JSON.stringify(
    // 		onlineTotalInfo
    // 	)}`
    // );
  },
  /**
   * 更新显示的视频信息（点赞、评论、投币、收藏、分享）
   */
  updateVideoData(option: ArtPlayerPluginTopToolBarOption["videoView"]) {
    if (!option) {
      return;
    }
    // 更新显示的视频信息
    const $like = TopToolBar.$el.$topRightContainer.querySelector<HTMLSpanElement>(
      ".art-player-top-right-like span[data-value]"
    )!;
    // const $comment = TopToolBar.$el.$topRightContainer.querySelector<HTMLSpanElement>(
    //   ".art-player-top-right-comment span[data-value]"
    // )!;
    const $collect = TopToolBar.$el.$topRightContainer.querySelector<HTMLSpanElement>(
      ".art-player-top-right-collect span[data-value]"
    )!;
    const $coin = TopToolBar.$el.$topRightContainer.querySelector<HTMLSpanElement>(
      ".art-player-top-right-coin span[data-value]"
    )!;
    const $share = TopToolBar.$el.$topRightContainer.querySelector<HTMLSpanElement>(
      ".art-player-top-right-share span[data-value]"
    )!;
    const valueAttrKey = "data-value";
    const data = typeof option === "function" ? option() : option;
    const likeCount = typeof data.like == "function" ? (data.like() ?? 0) : (data.like ?? 0);
    const collectCount = typeof data.collect == "function" ? (data.collect() ?? 0) : (data.collect ?? 0);
    const coinCount = typeof data.coin == "function" ? (data.coin() ?? 0) : (data.coin ?? 0);
    const shareCount = typeof data.share == "function" ? (data.share() ?? 0) : (data.share ?? 0);

    $like.textContent = likeCount.toString();
    $like.setAttribute(valueAttrKey, likeCount.toString());

    $collect.textContent = collectCount.toString();
    $collect.setAttribute(valueAttrKey, collectCount.toString());

    $coin.textContent = coinCount.toString();
    $coin.setAttribute(valueAttrKey, coinCount.toString());

    $share.textContent = shareCount.toString();
    $share.setAttribute(valueAttrKey, shareCount.toString());
  },
};

export const artplayerPluginTopToolBar = (option: ArtPlayerPluginTopToolBarOption) => {
  return (art: Artplayer): ArtPlayerPluginTopToolBarResult => {
    TopToolBar.art = art;
    TopToolBar.init(option);
    return {
      name: TopToolBar.$key.plugin_KEY,
      update(option: ArtPlayerPluginTopToolBarOption) {
        TopToolBar.update(option);
      },
    };
  };
};

/**
 * 插件id
 */
export const ArtPlayer_PLUGIN_TOP_TOOLBAR_KEY = TopToolBar.$key.plugin_KEY;
