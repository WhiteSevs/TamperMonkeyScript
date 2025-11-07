import { DOMUtils, log, utils, addStyle } from "@/env";
import { BaiduRouter } from "@/router/BaiduRouter";
import { Panel } from "@components/setting/panel";
import SearchShieldCSS from "./shield.css?raw";
import { BaiduHeadlth } from "./bh/SearchHealth";
import { BaiduSearchHook } from "./SearchHook";
import { BaiduHandleResultItem } from "./SearchHandleResultItem";
import { SearchNextPage, SearchNextPage_SearchCraft } from "./SearchNextPage";
import { SearchInputEvent } from "./SearchInput";
import { BaiduSearchBlockRule } from "./SearchBlockRule";
import { BaiduSearchVideo } from "./video/SearchVideo";
import { BaiduSearchVSearch } from "./vsearch/VSearch";
import { BaiduSearchToolBar } from "./SearchToolBar";
import { CommonUtil } from "@components/utils/CommonUtil";

/**
 * 处理百度搜索自定义的样式添加
 */
const UserCustomStyle = {
  /**
   * 获取用户自定义样式
   */
  getUserStyle() {
    return Panel.getValue("baidu-search-user-style", "");
  },
};

const BaiduSearch = {
  async init() {
    addStyle(UserCustomStyle.getUserStyle());
    log.info("插入用户CSS规则");
    BaiduSearchBlockRule.init();
    Panel.execMenuOnce("baidu-search-global-searchToolBar", () => {
      BaiduSearchToolBar.init();
    });
    if (BaiduRouter.isSearchBh()) {
      /* 百度健康 */
      BaiduHeadlth.init();
    } else if (BaiduRouter.isSearchVideo()) {
      // 视频页
      BaiduSearchVideo.init();
    } else {
      /* 默认的百度搜索 */
      BaiduSearchHook.init();
      addStyle(SearchShieldCSS);
      BaiduHandleResultItem.addCSDNFlagCSS();
      log.info("插入CSS规则");
      Panel.execMenu("baidu_search_hijack__onClick_to_blank", () => {
        this.openResultBlank();
      });
      DOMUtils.ready(() => {
        /* 解析真实地址 from <script> */
        BaiduHandleResultItem.$data.originURLMap = BaiduHandleResultItem.parseScriptDOMOriginUrlMap(document);
        /* 处理搜索结果 */
        let baidu_search_handle_search_result_enable = Panel.getValue("baidu_search_handle_search_result");
        if (baidu_search_handle_search_result_enable) {
          let searchUpdateRealLink = new utils.LockFunction(async () => {
            try {
              await BaiduHandleResultItem.replaceLink();
            } catch (error) {
              log.error(["替换为真实链接失败", error]);
            }
          }, 600);
          let removeAdsLockFunction = new utils.LockFunction(() => {
            BaiduHandleResultItem.removeAds();
          }, 600);
          DOMUtils.waitNode<HTMLDivElement>("#page.search-page").then(($searchPage) => {
            utils.mutationObserver($searchPage, {
              callback: async () => {
                if (baidu_search_handle_search_result_enable) {
                  await searchUpdateRealLink.run();
                }
                removeAdsLockFunction.run();
              },
              immediate: true,
              config: {
                childList: true,
                subtree: true,
              },
            });
          });

          if (baidu_search_handle_search_result_enable) {
            searchUpdateRealLink.run();
          }
          removeAdsLockFunction.run();
        }
        /* 处理搜索置顶的卡片的style */
        // 但是有时候顶部的选项卡背景会没有
        // utils
        // 	.waitNodeList<NodeListOf<HTMLStyleElement>>(
        // 		"style[class^='vsearch-sigma-style']"
        // 	)
        // 	.then((nodeList) => {
        // 		/* 这个style标签就是某些搜索置顶的卡片 */
        // 		log.success(["删除sigma的CSS", nodeList]);
        // 		nodeList.forEach((item) => item.remove());
        // 	});
        Panel.execMenu("baidu_search_redirect_top_link", () => {
          BaiduHandleResultItem.redirectTopLink();
        });
        BaiduHandleResultItem.replaceScriptBaiDuTip();
        Panel.execMenu("baidu_search_refactoring_input_boxes", () => {
          SearchInputEvent.init();
        });
        /* 处理自动加载下一页 */
        if (Panel.getValue<boolean>("baidu_search_automatically_expand_next_page")) {
          SearchNextPage.init();
        } else if (Panel.getValue<boolean>("baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua")) {
          SearchNextPage_SearchCraft.init();
        }
        if (BaiduRouter.isSearchVSearch()) {
          // /sf/vsearch
          BaiduSearchVSearch.init();
        }
      });
    }
  },
  /**
   * 新标签页打开
   */
  openResultBlank() {
    /**
     * 设置元素被访问过
     */
    const setNodeVisited = ($el: HTMLElement) => {
      DOMUtils.attr($el, "data-visited", true);
      DOMUtils.css($el, {
        opacity: "0.4 !important",
        color: "#bbbbbb !important",
      });
    };
    /**
     * 修改点击访问的颜色
     */
    const changeVisitedNodeColor = ($click: HTMLElement, $result: HTMLElement) => {
      let $title =
        $result.querySelector<HTMLElement>(".cu-title") ||
        $result.querySelector<HTMLElement>(".c-title") ||
        $result.querySelector<HTMLElement>(".cosc-title") ||
        $result.querySelector<HTMLElement>(".coss-goods-spu-horizontal-title");

      /**
       * 大家还在搜
       */
      let $recommend = $click.closest<HTMLElement>('.c-result[tpl="recommend_list_san"]');
      let $recommendItem = $click.closest<HTMLElement>('a[class*="result-item"]');
      if ($recommend && $recommendItem) {
        // 那这里不修改标题颜色
        // 修改点击的项的颜色
        setNodeVisited($recommendItem);
      } else if ($title) {
        // 存在标题
        // 修改访问的颜色
        log.info([`修改标题的被访问的颜色`, $title]);
        setNodeVisited($title);
      }
    };
    /**
     * 搜索结果点击事件
     */
    const globalResultClickEvent = (event: PointerEvent | MouseEvent | Event, $selectorTarget: HTMLElement) => {
      let url: null | string = null;
      let $click = event.composedPath()[0] as HTMLElement;
      // .c-result.result
      // 搜索结果项
      let $result = $selectorTarget;

      if ($click) {
        if (Panel.getValue("baidu-search-add-filter-button")) {
          if (CommonUtil.findParentNode($click, ".gm-search-filter-wrapper")) {
            // 自定义的过滤按钮
            log.info(`该点击为自定义的过滤按钮，不点击跳转`);
            return;
          }
        }
        // 百度AI 总结全网xx篇结果
        // 让它不点击跳转
        let isWenDa = $result.matches('[srcid="wenda_generate"]');
        if (isWenDa) {
          log.warn(["该点击来自百度AI总结全网xx篇结果，不点击跳转", { event, $click, $result, isWenDa }]);
          return;
        }
        // 切换tab
        let isTab =
          CommonUtil.findParentNode($click, ".cos-tab") ||
          CommonUtil.findParentNode($click, '[class*="each-tab-name"]');
        if (isTab) {
          log.warn(["该点击来自切换tab，不点击跳转", { event, $click, $result }]);
          return;
        }
        // 展开
        let isFold = CommonUtil.findParentNode($click, ".cos-fold-switch");
        if (isFold) {
          log.warn(["该点击来自折叠，不点击跳转", { event, $click, $result }]);
          return;
        }
        // 右下角的更多按钮
        let isRightBottomMoreBtn =
          CommonUtil.findParentNode($click, ".cosc-feedback") ||
          CommonUtil.findParentNode($click, `[data-tool*='"feedback"'][data-tool*='您遇到了什么问题']`);
        if (isRightBottomMoreBtn) {
          log.warn(["该点击来自右下角的更多按钮，不点击跳转", { event, $click, $result }]);
          return;
        }
        if ($click.closest("a")) {
          let $link = $click.closest<HTMLAnchorElement>("a")!;
          let linkUrl = $link.getAttribute("data-url") || $link.href;
          if (utils.isNotNull(linkUrl)) {
            log.info([
              "链接来自上层a元素",
              {
                event,
                $click,
                $result,
                $link,
              },
            ]);
            url = linkUrl;
          }
        } else if ($click.closest("[rl-link-href]")) {
          let $rlLinkDiv = $click.closest<HTMLElement>("[rl-link-href]")!;
          let rlLinkHref = $rlLinkDiv.getAttribute("rl-link-href");
          if (utils.isNotNull(rlLinkHref)) {
            log.info([
              "链接来自上层含有[rl-link-href]属性的元素",
              {
                event,
                $click,
                $result,
                $rlLinkDiv,
              },
            ]);
            url = rlLinkHref;
          }
        }
      } else {
        let $article = $result.querySelector<HTMLElement>("article")!;
        url = $article.getAttribute("rl-link-href");
        log.info(["链接来自顶层向下寻找article元素", { event, $click, $result, $article }]);
      }

      if (utils.isNull(url)) {
        log.warn(["未找到有效链接", { event, $click, $result, url }]);
        return;
      }
      /* 阻止事件传递 */
      let urlInst = new URL(url);
      if (urlInst.hostname === "www.baidu.com") {
        if (urlInst.pathname.match(/\/[\d]+$/)) {
          log.warn("不符合新标签页打开的链接");
          return;
        }
      }
      DOMUtils.preventEvent(event);
      log.success(["新标签页打开-来自click事件", url]);
      changeVisitedNodeColor($click, $result);
      window.open(url, "_blank");
    };
    DOMUtils.on(document, "click", ".c-result.result", globalResultClickEvent, {
      capture: true,
    });
  },
};

export { BaiduSearch };
