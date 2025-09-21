import { $, DOMUtils, log, utils } from "@/env";

export const DouYinElement = {
  /**
   * 观察 #slidelist的加载每条视频
   * @param callback
   */
  watchFeedVideoListChange(callback: (osElement: HTMLElement, observer: MutationObserver) => void) {
    let $os: HTMLElement | undefined | null = null;
    DOMUtils.ready(() => {
      utils
        .waitAnyNode<HTMLDivElement>([
          "#slidelist",
          // 搜索页面的↓搜索结果列表
          '#search-content-area ul[data-e2e="scroll-list"]',
        ])
        .then(($ele) => {
          log.info(`启用观察器观察加载的视频`);
          let lockFn = new utils.LockFunction((observer) => {
            $os = $os || this.getOSElement();
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
  getOSElement() {
    return $<HTMLElement>("#root div[class*='-os']") || $<HTMLElement>("#douyin-right-container");
  },
};
