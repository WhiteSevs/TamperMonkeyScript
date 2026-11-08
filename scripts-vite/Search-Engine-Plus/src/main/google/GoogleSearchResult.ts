import { $$, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";

export const GoogleSearchResult = {
  init() {
    Panel.execMenuOnce(
      ["google-search-optimizationResult-enable", "google-search-optimizationResult-openBlank"],
      (config) => {
        const [enable, openBlank] = config.value;
        if (!enable) return;
        if (!openBlank) return;
        return this.searchResultOptimization({ openBlank });
      },
      void 0,
      void 0,
      true
    );
  },
  /**
   * 搜索结果优化
   */
  searchResultOptimization(config: { openBlank: boolean }) {
    log.info(`搜索结果优化`, config);

    const lockFn = new utils.LockFunction(() => {
      const $results = [
        ...$$("#rso:not(:has(>script)) > div:not(:empty) > div[data-rpos]:not(:empty):not([data-hijack])"),
        ...$$(
          "#rso:has(>script)>div:not(:empty)>div:not(:empty):has(>div):not(:has(.related-question-pair)):not([data-hijack])"
        ),
      ];
      for (const $result of $results) {
        if (config.openBlank) {
          const $links = $result.querySelectorAll<HTMLAnchorElement>("a[href]:not([target='blank_'])");
          $links.forEach(($link) => {
            $link.setAttribute("target", "_blank");
          });
        }
      }
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
        observer.disconnect();
      },
    ];
  },
};
