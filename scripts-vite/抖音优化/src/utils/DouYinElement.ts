import { $, $$, DOMUtils, log, utils } from "@/env";

export const DouYinElement = {
  /**
   * 观察 #slidelist的加载每条视频
   * @param callback
   */
  watchFeedVideoListChange(callback: (osElement: HTMLElement, observer: MutationObserver) => void) {
    let $os: HTMLElement | undefined | null = null;
    DOMUtils.onReady(() => {
      DOMUtils.waitAnyNode<HTMLDivElement>([
        "#slidelist",
        // 搜索页面的↓搜索结果列表
        '#search-content-area ul[data-e2e="scroll-list"]',
      ]).then(($ele) => {
        log.info(`启用观察器观察加载的视频`);
        let lockFn = new utils.LockFunction((observer) => {
          $os = $os || this.selectorRootOSNode();
          if (!$os) {
            log.error("watchVideDataListChange：获取osElement失败");
            return;
          }
          callback($os, observer);
        }, 50);
        utils.mutationObserver(document, {
          config: {
            childList: true,
            subtree: true,
          },
          immediate: true,
          callback: (mutations, observer) => {
            lockFn.run(observer);
          },
        });
      });
    });
  },
  /**
   * 获取根节点元素
   */
  selectorRootOSNode() {
    return $<HTMLElement>("#root div[class*='-os']") || $<HTMLElement>("#douyin-right-container");
  },
  /**
   * 计算元素在浏览器可视区域内占据的百分比
   * @param $el - 要计算的元素
   * @returns 包含水平和垂直占比的对象
   */
  getPercentInWindowView($el: Element): {
    /**
     * 显示的区域百分比
     */
    percentage: number;
    /**
     * 水平百分比
     */
    horizontal: number;
    /**
     * 垂直百分比
     */
    vertical: number;
    /**
     * 与水平中心的距离
     */
    toCenter: number;
    /**
     * 元素中心x的坐标
     */
    nodeCenterX: number;
    /**
     * 元素中心y的坐标
     */
    nodeCenterY: number;
  } {
    const rect = $el.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 计算元素在视口内的可见部分
    const visibleLeft = Math.max(0, rect.left);
    const visibleTop = Math.max(0, rect.top);
    const visibleRight = Math.min(viewportWidth, rect.right);
    const visibleBottom = Math.min(viewportHeight, rect.bottom);

    // 计算可见区域的宽度和高度
    const visibleWidth = Math.max(0, visibleRight - visibleLeft);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

    // 计算可见面积占元素总面积的百分比
    const elementArea = rect.width * rect.height;
    const visibleArea = visibleWidth * visibleHeight;

    // 避免除零错误
    if (elementArea === 0) {
      return {
        percentage: 0,
        horizontal: 0,
        vertical: 0,
        toCenter: 0,
        nodeCenterX: 0,
        nodeCenterY: 0,
      };
    }

    const visibleCenterX = visibleLeft + Math.max(0, (visibleRight - visibleLeft) / 2);
    const visibleCenterY = visibleTop + Math.max(0, (visibleBottom - visibleTop) / 2);
    const viewportCenterX = Math.max(0, viewportWidth / 2);
    const viewportCenterY = Math.max(0, viewportHeight / 2);
    const percentage = (visibleArea / elementArea) * 100;
    const toCenter = Math.sqrt(
      Math.pow(visibleCenterX - viewportCenterX, 2) + Math.pow(visibleCenterY - viewportCenterY, 2)
    );

    // 分别计算水平和垂直方向的占比
    const horizontalPercentage = (visibleWidth / rect.width) * 100;
    const verticalPercentage = (visibleHeight / rect.height) * 100;

    return {
      percentage: Math.round(percentage * 100) / 100, // 保留两位小数
      horizontal: Math.round(horizontalPercentage * 100) / 100,
      vertical: Math.round(verticalPercentage * 100) / 100,
      toCenter: toCenter,
      nodeCenterX: visibleCenterX,
      nodeCenterY: visibleCenterY,
    };
  },
  /**
   * 获取当前在视图内的video元素
   */
  getInViewVideo() {
    const $videos = Array.from($$<HTMLVideoElement>("video"))
      .map(($video) => {
        // 忽略没有媒体资源的video标签
        if (utils.isNull($video.src) && utils.isNull($video.currentSrc) && utils.isNull($video.srcObject)) return;
        return $video;
      })
      .filter((it) => it != null);
    const videosInViewData = this.getInViewNode<HTMLVideoElement>($videos);
    return videosInViewData;
  },
  /**
   * 获取当前在视图内的播放按钮
   */
  getInViewPlayButton() {
    const $btn = Array.from($$(".xgplayer-play"));
    $btn.push(...Array.from($$("#slidelist .douyin-player-play")));

    const buttonNodeInViewData = this.getInViewNode($btn);

    const result = buttonNodeInViewData
      .map((it) => {
        const $el = it.$el;
        const $point = document.elementFromPoint(it.nodeCenterX, it.nodeCenterY);
        // 必须要最上层不被遮挡的元素
        if ($point !== $el && !$el.contains($point)) return;
        return {
          ...it,
          state: $el.getAttribute("data-state") as "play" | "pause",
        };
      })
      .filter((it) => it != null);
    return result;
  },
  /**
   * 获取在视图内的元素
   */
  getInViewNode<T extends HTMLElement>($el: T | T[]) {
    if (!Array.isArray($el)) {
      $el = [$el];
    }
    const nodeInViewData = $el
      .map(($it) => {
        // 计算在可视区域内占据的百分比
        const positionInfo = this.getPercentInWindowView($it);
        if (positionInfo.percentage <= 0) return;
        return {
          ...positionInfo,
          $el: $it,
        };
      })
      .filter((it) => it != null);
    utils.sortListByProperty(nodeInViewData, (it) => it.toCenter, false);
    return nodeInViewData;
  },
};
