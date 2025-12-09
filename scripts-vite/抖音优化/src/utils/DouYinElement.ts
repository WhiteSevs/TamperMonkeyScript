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
   * 获取当前在视图内的video元素
   */
  getInViewVideo() {
    /**
     * 计算元素在浏览器可视区域内占据的百分比
     * @param $el - 要计算的元素
     * @returns 包含水平和垂直占比的对象
     */
    function getElementVisiblePercentage($el: Element) {
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
        };
      }

      const percentage = (visibleArea / elementArea) * 100;

      // 分别计算水平和垂直方向的占比
      const horizontalPercentage = (visibleWidth / rect.width) * 100;
      const verticalPercentage = (visibleHeight / rect.height) * 100;

      return {
        /**
         * 区域百分比
         */
        percentage: Math.round(percentage * 100) / 100, // 保留两位小数
        /**
         * 水平百分比
         */
        horizontal: Math.round(horizontalPercentage * 100) / 100,
        /**
         * 垂直百分比
         */
        vertical: Math.round(verticalPercentage * 100) / 100,
      };
    }
    const $videos = $$<HTMLVideoElement>("video");
    const videosInViewData = $videos
      .map(($video) => {
        // 忽略没有媒体资源的video标签
        if (utils.isNull($video.src) && utils.isNull($video.currentSrc) && utils.isNull($video.srcObject)) return;
        // 计算在可视区域内占据的百分比
        const visiblePercent = getElementVisiblePercentage($video);
        if (visiblePercent.percentage <= 0) return;
        return {
          $el: $video,
          percentage: visiblePercent.percentage,
        };
      })
      .filter((it) => it != null);
    utils.sortListByProperty(videosInViewData, (it) => it.percentage);
    return videosInViewData;
  },
};
