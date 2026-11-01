import { BilibiliData } from "@/data/BlibiliData";
import { $$, addStyle, DOMUtils, log, pops, utils } from "@/env";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { VueUtils } from "@components/utils/VueUtils";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";
import { UISelect } from "@components/setting/panel-components";

export const BilibiliSpace = {
  init() {
    Panel.execMenuOnce("bili-space-repairRealJump", () => {
      return this.repairRealJump();
    });
    Panel.execMenuOnce("bili-space-coverDynamicStateCardVideo", () => {
      return this.coverDynamicStateCardVideo();
    });
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("bili-space-addVideoSortButton", () => {
        return this.addVideoSort();
      });
    });
  },
  /**
   * 修复视频|动态的正确跳转
   */
  repairRealJump() {
    let lockFn = new utils.LockFunction(() => {
      $$(BilibiliData.className.space + " .wx-tag.open-app-wrapper").forEach(($el) => {
        let vueIns = VueUtils.getVue($el);
        if (typeof vueIns?.disabled === "boolean") {
          vueIns.disabled = false;
        }
      });
    });
    utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });
    return;
  },
  /**
   * 覆盖动态视频的点击事件
   */
  coverDynamicStateCardVideo() {
    log.info(`覆盖动态视频的点击事件`);
    DOMUtils.on(
      document,
      "click",
      ".card-content .main .wings",
      (event) => {
        let $wings = event.target as HTMLElement;
        let $card = $wings.closest(".card")!;
        if (!$card) {
          Qmsg.error("未找到对应的.card元素");
          return;
        }
        let vueIns = VueUtils.getVue($card);
        if (!vueIns) {
          Qmsg.error("未找到对应的vue实例");
          return;
        }
        let url = vueIns?.shareData?.default?.url;
        if (!url) {
          Qmsg.error("未找到对应的url");
          return;
        }
        BilibiliUtils.goToUrl(url);
      },
      {
        capture: true,
      }
    );
  },
  /**
   * 新增视频排序
   */
  async addVideoSort() {
    log.info(`新增视频排序`);
    const $tabs = await DOMUtils.waitNode<HTMLElement>(BilibiliData.className.space + " .tabs");
    if (!$tabs) {
      log.error("未找到 .tabs");
      return;
    }
    addStyle(/*css*/ `
      ${BilibiliData.className.space} .tabs:has(>:nth-child(2):not([class*="on"])) .pops-panel-select{
        display: none;
      }
      ${BilibiliData.className.space} .pops-panel-select {
        --pops-panel-components-select-disabled-text-color: #a8abb2;
        --pops-panel-components-select-text-color: #000000;
        --pops-panel-components-select-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));
        --pops-panel-components-select-hover-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));
        --pops-panel-components-select-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));

        
        max-width: 55%;
        width: 100px !important;
        float: right;
        font-size: 3.46667vmin;
        margin-right: 3.2vmin;
        --pops-bg-opacity: 1;
        --pops-bd-opacity: 1;
      }

      ${BilibiliData.className.space} .pops-panel-select select{
        width: 100%;
        height: 32px;
        line-height: normal;
        align-content: center;
        min-width: 200px;
        border: 1px solid var(--pops-panel-components-select-bd-color);
        border-radius: 5px;
        text-align: center;
        outline: 0;
        color: var(--pops-panel-components-select-text-color);
        background-color: var(--pops-panel-components-select-bg-color);
        box-shadow: none;
        border: 1px solid var(--pops-panel-components-select-hover-bd-color);
        min-width: 88px !important;
        width: -moz-available;
        width: -webkit-fill-available;
      }
    `);
    const fetchArcList = () => {
      const vueInst = VueUtils.getVue($tabs);
      if (vueInst) {
        vueInst.$parent.fetchArcList();
      } else {
        Qmsg.error("未找到fetchArcList");
      }
    };
    const panelHandler = pops.fn.PanelHandlerComponents();
    const $sortContainer = panelHandler.createSectionContainerItem_select(
      UISelect(
        "",
        "",
        BilibiliData.spaceVideoSortByButton,
        [
          {
            text: "最新发布",
            value: "pubdate",
          },
          {
            text: "最多播放",
            value: "click",
          },
          {
            text: "最多收藏",
            value: "stow",
          },
        ],
        (isSelectedInfo) => {
          BilibiliData.spaceVideoSortByButton = isSelectedInfo.value as typeof BilibiliData.spaceVideoSortByButton;
          fetchArcList();
          return true;
        }
      )
    );
    const $sort = $sortContainer.$el.querySelector<HTMLElement>(".pops-panel-select")!;
    DOMUtils.append($tabs, $sort);

    const $archiveListItem = await DOMUtils.waitNode(".archive-list > div", 10000);
    // 主动触发一下
    if ($archiveListItem) {
      fetchArcList();
    }
  },
};
