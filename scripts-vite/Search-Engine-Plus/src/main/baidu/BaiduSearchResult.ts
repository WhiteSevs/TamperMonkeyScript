import { $$, DOMUtils, httpx, log, utils } from "@/env";
import { addBlockCSSWithEnd, addStyleWithEnd } from "@components/env.base";
import { Panel } from "@components/setting/panel";
import { ConcurrencyAsyncQueue } from "@components/utils/ConcurrencyAsyncQueue";

export const BaiduSearchResult = {
  init() {
    Panel.execMenuOnce(
      [
        "baidu-search-optimizationResult-enable",
        "baidu-search-optimizationResult-removeAds",
        "baidu-search-optimizationResult-redirect",
        "baidu-search-optimizationResult-addFavicon",
        "baidu-search-optimizationResult-markUnsafeLink",
      ],
      (config) => {
        const [enable, removeAds, redirect, addFavicon, markUnsafeLink] = config.value;
        if (!enable) return;
        if (!removeAds && !redirect && !addFavicon && !markUnsafeLink) return;
        return this.searchResultOptimization({ removeAds, redirect, addFavicon, markUnsafeLink });
      }
    );
  },
  /**
   * 搜索结果优化
   */
  searchResultOptimization(config: {
    removeAds: boolean;
    redirect: boolean;
    addFavicon: boolean;
    markUnsafeLink: boolean;
  }) {
    log.info(`搜索结果优化`, config);

    const requestQueue = new ConcurrencyAsyncQueue(1, 150);

    /**
     * 判断是否是百度的中转重定向链接
     *
     * + http://www.baidu.com/link?url=xxxx
     * @param url
     */
    const isTransferLink = (url: string) => {
      try {
        const urlInst = new URL(url);
        if (urlInst.hostname === "www.baidu.com" && urlInst.pathname === "/link" && urlInst.searchParams.has("url")) {
          return true;
        }
      } catch {}
      return false;
    };

    const lockFn = new utils.LockFunction(() => {
      const $results = $$("#content_left > div:not([data-stop-direct])");
      $results.forEach(async ($result) => {
        if (config.removeAds && DOMUtils.selector('.se_st_footer:contains("广告")', $result)) {
          // 移除广告
          $result.remove();
          return;
        }
        /** 标题 */
        const $title =
          $result.querySelector<HTMLAnchorElement>("a.sc-link[href]") ||
          $result.querySelector<HTMLAnchorElement>(".c-title a[href]") ||
          $result.querySelector<HTMLAnchorElement>("a.cosc-title-a[href]") ||
          $result.querySelector<HTMLAnchorElement>('[class*="c-line-"] > a[href][class^="title_"]') ||
          $result.querySelector<HTMLAnchorElement>("h3.c-gap-bottom-small > a[href]");
        if (!$title) {
          $result.setAttribute("data-no-title", "1");
          return;
        }
        /** 真实链接，但有时候这个链接是错误的链接，需要处理一下 */
        const mu = $result.getAttribute("mu");
        const realLinkList: string[] = [];
        if (typeof mu === "string") {
          realLinkList.push(mu);
        }
        /** 举报的网站 - 一般这里也能获取到真实链接 */
        const $feedback = $result.querySelector<HTMLElement>(".cosc-feedback[data-feedback]");
        const feedbackStr = $feedback?.getAttribute("data-feedback");
        if (feedbackStr) {
          const feedback = utils.toJSON(feedbackStr);
          if (typeof feedback.url === "string") {
            realLinkList.push(feedback.url);
          }
        }
        /**
         * 是否禁止重定向（依旧保持原样）
         */
        let isNeverRedirect = false;
        /**
         * 是否强制请求获取重定向的链接
         */
        let isMustRequestFinalUrl = false;
        // 获取真实链接
        let realLink = realLinkList.find((url) => {
          try {
            const linkInst = new URL(url);
            // 下面的是不符合的'真实'链接
            if (linkInst.hostname === "nourl.ubs.baidu.com" || linkInst.hostname.endsWith(".lightapp.baidu.com")) {
              return;
            }
            // AI 智能体
            if (linkInst.hostname === "agents.baidu.com") {
              isMustRequestFinalUrl = true;
              return;
            }
            // 如果仍然是重定向链接，那就判断为未获取到真实链接
            if (isTransferLink(url)) {
              return;
            }
          } catch {}
          return url;
        });
        if (isNeverRedirect) {
          // 禁止重定向
          $result.setAttribute("data-stop-direct", "true");
          return;
        }
        const titleUrl = $title.href?.trim();
        if (!realLink) {
          // 依旧没有获取到真实链接
          // 使用get请求获取
          const requestAttr = "data-direct-http-request-ing";
          if ($title.hasAttribute(requestAttr)) {
            // is request && ignore
            return;
          } else if (isTransferLink(titleUrl) || isMustRequestFinalUrl) {
            // 对百度中转链接进行转换
            // 主动请求获取重定向的链接
            const requestFinalUrlAttr = "data-request-final-url";
            if ($title.hasAttribute(requestFinalUrlAttr)) {
              // 已重定向完毕
              const finalUrl = $title.getAttribute(requestFinalUrlAttr)!;
              realLink = finalUrl;
            } else {
              $title.setAttribute(requestAttr, "true");
              requestQueue.enqueue(async () => {
                const response = await httpx.get(titleUrl.replace(/^http:\/\//, "https://"), {
                  fetch: false,
                  allowInterceptConfig: false,
                });
                $title.removeAttribute(requestAttr);
                if (!response.status) return;
                let finalUrl = response.data.finalUrl;
                if (isTransferLink(finalUrl)) {
                  // 看看能否提取到真实链接
                  const url = response.data.responseText.match(/.location.replace\("(.+?)"\)/)?.[1];
                  if (url && !isTransferLink(url)) {
                    finalUrl = url;
                  }
                  return;
                }
                // 将获取到的最终url存在标题中
                $title.setAttribute(requestFinalUrlAttr, finalUrl);
              });
              return;
            }
          } else {
            return;
          }
        }
        $result.setAttribute("data-stop-direct", "true");
        // 下面是在获取到真实链接后才能添加的功能
        if (config.redirect && isTransferLink(titleUrl)) {
          // 重定向
          $title.href = realLink;
          $title.setAttribute("data-before-url", titleUrl);
          $result.setAttribute("data-before-url", titleUrl);
        }
        if (config.addFavicon) {
          // 在前面添加图标
          const $ico = DOMUtils.createElement("img");
          $ico.className = "website-ico";
          $ico.loading = "lazy";
          try {
            const realLinkInst = new URL(realLink);
            $ico.src = `${realLinkInst.origin}/favicon.ico`;
            DOMUtils.prepend($title, $ico);
            DOMUtils.css($title, {
              display: "flex",
              "align-items": "center",
            });
            DOMUtils.on(
              $ico,
              "error",
              () => {
                $ico.remove();
              },
              { once: true }
            );
          } catch {}
        }
        if (config.markUnsafeLink) {
          // 显示不安全的链接
          if ($title.href.startsWith("http://")) {
            DOMUtils.prepend(
              $title,
              /*html*/ `
                <svg viewBox="0 0 1102 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="margin-right: 4px;float: left;"><path d="M1079.847385 767.133538l-389.513847-690.845538c-62.621538-101.651692-215.197538-101.769846-277.858461 0l-389.513846 690.806154c-64 103.896615 13.469538 235.441231 138.870154 235.441231H940.898462c125.282462 0 202.909538-131.426462 138.909538-235.401847zM551.384615 877.843692c-35.603692 0-64.590769-27.963077-64.590769-62.345846 0-34.343385 28.987077-62.306462 64.590769-62.306461 35.603692 0 64.590769 27.963077 64.59077 62.306461 0 34.382769-28.987077 62.345846-64.59077 62.345846z m64.59077-249.304615c0 34.343385-28.987077 62.306462-64.59077 62.306461-35.603692 0-64.590769-27.963077-64.590769-62.345846V316.849231c0-34.382769 28.987077-62.345846 64.590769-62.345846 35.603692 0 64.590769 27.963077 64.59077 62.345846v311.650461z" fill="#ED4662" p-id="6187"></path></svg>
              `
            );
            DOMUtils.css($title, {
              color: "#ecb3b3 !important",
              "text-decoration": "line-through !important",
            });
          }
        }
      });
    });
    const observer = utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
        attributes: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });

    return [
      addStyleWithEnd(/*css*/ `
          img.website-ico{
            width: 1em;
            height: 1em;
            object-fit: contain;
            margin-right: 4px;
            float: left;
          }
          #content_left a.sc-link:has(img.website-ico){
            display: inline-flex !important;
          }
        `),
      () => {
        observer.disconnect();
      },
      config.removeAds
        ? addBlockCSSWithEnd("#content_left > div:has(.ec-tuiguang)", "#content_left > div:has(.c-recomm-wrap)")
        : null,
    ];
  },
};
