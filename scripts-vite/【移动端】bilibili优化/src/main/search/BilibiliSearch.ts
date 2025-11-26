import { $$, DOMUtils, log, utils } from "@/env";
import { BilibiliExtraSearch } from "./BilibiliExtraSearch";
import { BilibiliRouter } from "@/router/BilibiliRouter";
import { BilibiliSearchBeautify } from "./BilibiliSearchBeautify";
import { BilibiliSearchVueProp } from "./BilibiliSearchVueProp";
import { Panel } from "@components/setting/panel";
import { VueUtils } from "@components/utils/VueUtils";

export const BilibiliSearch = {
  init() {
    if (BilibiliRouter.isSearchResult()) {
      // 搜索结果页面
      BilibiliExtraSearch.init();
    }
    BilibiliSearchVueProp.init();
    Panel.execMenuOnce("bili-search-cover-cancel", () => {
      this.coverCancel();
    });
    Panel.execMenu("bili-search-beautifySearchResult", () => {
      BilibiliSearchBeautify.init();
    });
    Panel.execMenuOnce("bili-search-cover-card-result-click-event", () => {
      this.coverCardResultClickEvent();
    });
    DOMUtils.onReady(() => {
      Panel.execMenu("bili-search-inputAutoFocus", () => {
        this.inputAutoFocus();
      });
    });
  },
  /**
   * 覆盖【取消】按钮的点击事件
   */
  coverCancel() {
    log.info("覆盖【取消】按钮的点击事件");
    DOMUtils.on(
      document,
      "click",
      "a.cancel",
      (event) => {
        log.info(`点击取消按钮`);
        DOMUtils.preventEvent(event);
        window.history.back();
      },
      { capture: true }
    );
  },
  /**
   * 输入框自动获取焦点
   */
  inputAutoFocus() {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("keyword")) {
      log.warn(`当前在搜索结果页面，不执行输入框自动获取焦点`);
      return;
    }
    log.info(`输入框自动获取焦点`);
    DOMUtils.waitNode<HTMLInputElement>(`.m-search .m-search-search-bar input[type="search"]`, 10000).then(($input) => {
      if (!$input) {
        log.error("获取输入框失败");
        return;
      }
      $input.focus();
    });
  },
  /**
   * 覆盖搜索结果点击事件
   */
  coverCardResultClickEvent() {
    log.info(`覆盖搜索结果点击事件`);
    DOMUtils.on(
      document,
      "click",
      ".video-list .card-box > div",
      (evt, selectorTarget) => {
        let $card = selectorTarget;
        let vueIns = VueUtils.getVue($card);
        if (!vueIns) {
          return;
        }
        let cardClick = vueIns.cardClick;
        if (typeof cardClick !== "function") {
          return;
        }
        DOMUtils.preventEvent(evt);
        cardClick(evt);
      },
      {
        capture: true,
      }
    );
  },
};
