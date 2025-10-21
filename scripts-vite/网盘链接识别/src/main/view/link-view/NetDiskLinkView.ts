import { NetDisk } from "../../NetDisk";
import { NetDiskPops } from "../../pops/NetDiskPops";
import { NetDiskView } from "../NetDiskView";
import { DataPaging, DOMUtils, log, pops, utils } from "@/env";
import { NetDiskGlobalData } from "../../data/NetDiskGlobalData";
import {
  NetDiskCheckLinkValidity,
  type NetDiskCheckLinkValidityInfoConfig,
} from "../../check-valid/NetDiskCheckLinkValidity";
import {
  PopsRightClickMenuDataDetails,
  PopsRightClickMenuDetails,
} from "@whitesev/pops/dist/types/src/components/rightClickMenu/types/index";
import Qmsg from "qmsg";
import { NetDiskSuspensionConfig } from "../suspension/NetDiskSuspensionView";
import { NetDiskLinkClickMode, NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskRuleData } from "@/main/data/NetDiskRuleData";
import indexCSS from "./index.css?raw";
import { GenerateData } from "@/main/data/NetDiskGenerateDataUtils";
import { NetDiskFilterScheme } from "../../scheme/NetDiskFilterScheme";
import { CommonUtil } from "@components/utils/CommonUtil";
import { NetDiskViewRightClickMenu } from "../NetDiskViewRightClickMenu";
import { type Paging } from "@whitesev/data-paging/dist/types/src/index";
import { NetDiskLinkViewData } from "./NetDiskLinkViewData";
import { NetDiskLinkViewEvent } from "./NetDiskLinkViewEvent";
import type { PagingConfig } from "@whitesev/data-paging/dist/types/src/types/config";

/**
 * 传递给生成需要的网盘参数数据
 */
export type LinkViewRuleData = {
  /**
   * 规则键名
   */
  ruleKeyName: string;
  /**
   * 规则下标
   */
  ruleIndex: number | string;
  /**
   * 分享码
   */
  shareCode: string;
  /**
   * 访问码
   */
  accessCode: AccessCodeType;
};

/**
 * 元素的attribute上存储的匹配到的规则信息
 */
export type LinkViewItemInfo = {
  /**
   * 规则键名
   */
  ruleKeyName: string;
  /**
   * 规则下标
   */
  ruleIndex: number;
  /**
   * 分享码
   */
  shareCode: string;
  /**
   * 访问码
   */
  accessCode: AccessCodeType;
};

/**
 * 注册右侧菜单需要传递的配置
 */
export type LinkViewRegisterContextMenuShowTextOption = Pick<
  PopsRightClickMenuDataDetails,
  "text" | "callback" | "item"
> & {
  icon?: PopsRightClickMenuDataDetails["icon"];
  iconIsLoading?: PopsRightClickMenuDataDetails["iconIsLoading"];
};

export type LinkViewData = {
  /** 规则键名 */
  ruleKeyName: string;
  /** 分享码 */
  shareCode: string;
  /** 匹配后处理的数据 */
  netDiskDictData: NetDiskDictData;
};

export const NetDiskLinkView = {
  $el: {
    get $urlBoxAll() {
      return NetDiskView.$el.$linkView.$shadowRoot.querySelector<HTMLElement>(".netdisk-url-box-all")!;
    },
  },
  $inst: {
    dataPaging: null as any as Paging<LinkViewData>,
  },
  $data: {
    dataPagingEnable: false,
  },
  /**
   * 显示视图
   *
   * 如果视图未创建，则自动创建后再显示
   */
  show() {
    const dataPagingEnable = NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-enable"].value;
    if (NetDiskView.$el.$linkView == null) {
      this.$data.dataPagingEnable = dataPagingEnable;
      this.createLinkView();
      NetDiskLinkViewEvent.init();
    } else {
      NetDiskView.$el.$linkView.show();
      if (this.$data.dataPagingEnable !== dataPagingEnable) {
        // 状态已改变
        if (dataPagingEnable) {
          // 开启状态
          this.$inst.dataPaging.show();
        } else {
          // 关闭状态
          this.$inst.dataPaging.hide();
        }
        this.refreshLinkView();
        this.$data.dataPagingEnable = dataPagingEnable;
      }
    }
  },
  /**
   * 创建视图
   */
  createLinkView() {
    const NetDiskViewConfig = {
      view: {
        "netdisl-small-window-shrink-status": GenerateData("netdisl-small-window-shrink-status", false),
        "netdisk-ui-small-window-position": GenerateData<{
          left: number;
          top: number;
        } | null>("netdisk-ui-small-window-position", null),
      },
    };
    const boxAllContainerHTML = /*html*/ `<div class="netdisk-url-search-wrapper"></div><div class="netdisk-url-box-all"></div><div class="netdisk-url-pagination-wrapper"></div>`;
    /**
     * 判断是否存在悬浮按钮的行为模式
     */
    let hasSuspension = () =>
      NetDiskGlobalData.features["netdisk-behavior-mode"].value.toLowerCase().includes("suspension");
    /**
     * 关闭视图
     */
    let closeView = () => {
      if (hasSuspension()) {
        // 存在悬浮按钮
        // 仅隐藏并显示悬浮按钮
        NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value = "suspension";
        NetDiskView.$el.$linkView.hide();
        NetDiskView.$inst.suspension.init();
      } else {
        NetDiskView.$el.$linkView.close();
        // @ts-ignore
        NetDiskView.$el.$linkView = void 0;
      }
    };
    const isSmallWindow = NetDiskGlobalData.features["netdisk-behavior-mode"].value
      .toLowerCase()
      .includes("smallwindow");
    if (isSmallWindow) {
      // 小窗
      NetDiskView.$el.$linkView = NetDiskPops.alert(
        {
          title: {
            text: "网盘",
            position: "center",
          },
          content: {
            text: boxAllContainerHTML,
            html: true,
          },
          btn: {
            ok: {
              enable: false,
            },
            close: {
              callback() {
                closeView();
              },
            },
          },
          mask: {
            // 没有遮罩层
            enable: false,
          },
          // @ts-ignore
          animation: "",
          beforeAppendToPageCallBack($shadowRoot, $shadowContainer) {
            let $headerControl = $shadowRoot.querySelector<HTMLElement>(".pops-header-control")!;
            let $title = $shadowRoot.querySelector<HTMLElement>(".pops-alert-title")!;
            let $content = $shadowRoot.querySelector<HTMLElement>(".pops-alert-content")!;
            /* 展开 */
            let launchIcon = DOMUtils.createElement(
              "button",
              {
                className: "pops-header-control",
                innerHTML: /*html*/ `
                                <i class="pops-icon">
									<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
										<path fill="currentColor" d="M290.816 774.144h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m462.848-524.288h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m188.416 323.584c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
										</path>
									</svg>
                                </i>
                                `,
              },
              {
                type: "button",
                "data-type": "launch",
                "data-header": true,
              }
            );
            /* 收起 */
            let shrinkIcon = DOMUtils.createElement(
              "button",
              {
                className: "pops-header-control",
                innerHTML: /*html*/ `
                                <i class="pops-icon">
									<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
										<path fill="currentColor" d="M618.496 425.984h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m-192.512 172.032h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m516.096-24.576c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
										</path>
									</svg>
                                </i>
                                `,
              },
              {
                type: "button",
                "data-type": "shrink",
                "data-header": true,
              }
            );
            DOMUtils.before($headerControl, launchIcon);
            DOMUtils.before($headerControl, shrinkIcon);
            DOMUtils.on(
              launchIcon,
              "click",
              function () {
                /* 展开-切换为收缩图标 */
                DOMUtils.addClass(launchIcon, "pops-hide-important");
                DOMUtils.removeClass(shrinkIcon, "pops-hide-important");
                DOMUtils.removeClass($title, "pops-no-border-important");
                DOMUtils.removeClass($content, "pops-hide-important");
                NetDiskViewConfig.view["netdisl-small-window-shrink-status"].value = false;
              },
              {
                capture: true,
              }
            );
            DOMUtils.on(
              shrinkIcon,
              "click",
              function () {
                /* 收缩-切换为展开图标 */
                DOMUtils.removeClass(launchIcon, "pops-hide-important");
                DOMUtils.addClass(shrinkIcon, "pops-hide-important");
                DOMUtils.addClass($title, "pops-no-border-important");
                DOMUtils.addClass($content, "pops-hide-important");
                NetDiskViewConfig.view["netdisl-small-window-shrink-status"].value = true;
              },
              {
                capture: true,
              }
            );
            if (NetDiskViewConfig.view["netdisl-small-window-shrink-status"].value) {
              shrinkIcon.click();
            } else {
              launchIcon.click();
            }
          },
          dragMoveCallBack(moveElement, left, top) {
            NetDiskViewConfig.view["netdisk-ui-small-window-position"].value = {
              left: left,
              top: top,
            };
          },
          class: "whitesevPop netdisk-link-view-small-window",
          style: /*css*/ `
                    ${indexCSS}

                    .pops {
                        --container-title-height: 35px;
                        --content-max-height: ${NetDiskGlobalData.smallWindow["netdisk-ui-small-window-max-height"].value}px;
                        --netdisk-line-space: 8px;
                        --netdisk-icon-size: 24px;
                    }
                    .pops[type-value="alert"]{
                        transform: none;
                    }
                    .pops {
                        max-height: var(--content-max-height);
                    }
                    .pops[type-value=alert] .pops-alert-content{
                        max-height: calc(var(--content-max-height) - var(--container-title-height) - var(--container-bottom-btn-height));
                    }
                    .pops-header-controls button.pops-header-control[type][data-header]{
                        padding: 0px 5px;
                    }
                    .netdisk-url-div{
                        padding: 0px;
                    }
                    .netdisk-icon .netdisk-icon-img{
                        width: var(--netdisk-icon-size);
                        height: var(--netdisk-icon-size);
                        min-width: var(--netdisk-icon-size);
                        min-height: var(--netdisk-icon-size);
                        margin: 0px var(--netdisk-line-space);
                    }
                    .netdisk-status{
                        margin-right: var(--netdisk-line-space);
                    }
                    .netdisk-url{
                        padding: 2px 0px;
                    }
                    `,
        },
        NetDiskView.$config.viewSizeConfig.mainViewSmallWindow
      );
      const smallWindowPosition = NetDiskViewConfig.view["netdisk-ui-small-window-position"].value;
      const $pops = NetDiskView.$el.$linkView.$pops;
      if (smallWindowPosition) {
        let viewWidth = DOMUtils.width($pops, true);
        let viewHeight = DOMUtils.height($pops, true);
        let maxWindowLeft = DOMUtils.width(window);
        let maxWindowTop = DOMUtils.height(window);
        const { transformLeft, transformTop } = DOMUtils.getTransform($pops);
        /* 最大的left偏移*/
        let maxLeft = maxWindowLeft - viewWidth + transformLeft;
        /* 最大的top偏移 */
        let maxTop = maxWindowTop - viewHeight + transformTop;
        /* 最小的left偏移*/
        let minLeft = 0 + transformLeft;
        /* 最小的top偏移*/
        let minTop = 0 + transformTop;
        if (smallWindowPosition.top > maxTop) {
          smallWindowPosition.top = maxTop;
        } else if (smallWindowPosition.top < minTop) {
          smallWindowPosition.top = minTop;
        }
        if (smallWindowPosition.left > maxLeft) {
          smallWindowPosition.left = maxLeft;
        } else if (smallWindowPosition.left < minLeft) {
          smallWindowPosition.left = minLeft;
        }
        $pops.style.transitionDuration = "0s";
        $pops.style.left = smallWindowPosition["left"] + "px";
        $pops.style.top = smallWindowPosition["top"] + "px";
        setTimeout(() => {
          $pops.style.transitionDuration = "0s";
        }, 300);
      }
    } else {
      // 大窗
      NetDiskView.$el.$linkView = NetDiskPops.alert(
        {
          title: {
            text: "网盘",
            position: "center",
          },
          content: {
            text: boxAllContainerHTML,
            html: true,
          },
          btn: {
            ok: {
              enable: false,
            },
            close: {
              callback() {
                closeView();
              },
            },
          },
          mask: {
            clickCallBack() {
              closeView();
            },
          },
          class: "whitesevPop netdisk-link-view-window",
          style: /*css*/ `
                    ${indexCSS}

                    .pops {
                        max-height: 60vh;
                    }
					@media screen and (max-width: 600px) {
						.pops {
                       		max-height: 50vh;
                    	}
					}
                    `,
        },
        NetDiskView.$config.viewSizeConfig.mainView
      );
    }
    /**
     * 分页容器
     */
    const $paginationWrapper = NetDiskView.$el.$linkView.$shadowRoot.querySelector<HTMLElement>(
      ".netdisk-url-pagination-wrapper"
    )!;
    // 是否启用数据分页
    const data = NetDiskLinkViewData.generateViewData();
    const pageShowDataMaxCount =
      NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-show-data-count"].value;
    this.$inst.dataPaging = new DataPaging<LinkViewData>({
      data: data,
      pageShowDataMaxCount: pageShowDataMaxCount,
      pageMaxStep: isSmallWindow ? 2 : 4,
      currentPage: 1,
      pageChangeCallBack: async (page) => {
        NetDiskCheckLinkValidity.clearAllDelayCheckLinkValidity();
        const enableDataPaging = NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-enable"].value;
        await this.dataPagingChangeCallback({
          data: this.$inst.dataPaging.CONFIG.data,
          refreshView: true,
          page: enableDataPaging ? page : void 0,
        });
      },
    });
    this.$inst.dataPaging.addCSS(NetDiskView.$el.$linkView.$shadowRoot);
    this.$inst.dataPaging.append($paginationWrapper);
    const $style = DOMUtils.createElement("style", {
      type: "text/css",
      textContent: /*css*/ `
          .pops-content:has(.netdisk-url-pagination-wrapper){
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          .pops-content:has(.netdisk-url-pagination-wrapper) .netdisk-url-box-all{
            flex: 1;
            overflow: auto;
          }
          .pops-content .netdisk-url-pagination-wrapper{
            flex: 0;
            display: flex;
            justify-content: center;
            padding: 4px 0px;
          }
          .pops-content #data-paging-wrapper{

          }
          .pops-content #data-paging-wrapper a{

          }

          /* 小窗 */
          .netdisk-link-view-small-window #data-paging-wrapper{
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
          }
          .netdisk-link-view-small-window .pops-content .netdisk-url-pagination-wrapper{
            scale: 0.7;
            padding: 0px;
          }
        `,
    });
    NetDiskView.$el.$linkView.$shadowRoot.appendChild($style);
    if (NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-enable"].value) {
      // 留空
    } else {
      // 不启用分页，隐藏组件
      this.$inst.dataPaging.hide();
    }
    this.refreshLinkView();
    // 链接视图的z-index
    const netDiskLinkViewZIndex = NetDiskGlobalData.smallWindow["netdisk-link-view-z-index"].value;
    if (netDiskLinkViewZIndex > 0) {
      DOMUtils.css(NetDiskView.$el.$linkView.$pops, {
        "z-index": netDiskLinkViewZIndex,
      });
    }
  },
  /**
   * 刷新视图
   */
  refreshLinkView() {
    const currentPage = this.$inst.dataPaging.PAGE_CONFIG.currentPage();
    this.$inst.dataPaging.CONFIG.pageChangeCallBack(currentPage);
  },
  /**
   * 情空视图
   */
  clearLinkView() {
    DOMUtils.empty(this.$el.$urlBoxAll);
  },
  /**
   * 分页 页码更新回调
   */
  async dataPagingChangeCallback(config: {
    /**
     * 数据
     */
    data: LinkViewData[];
    /**
     * 是否清空旧视图
     *
     * + true：清空旧视图，然后添加
     * + false：不清空旧视图，仅追加
     */
    refreshView: boolean;
    /**
     * 分页，传入数字则分页处理
     */
    page?: number;
    /**
     * 是否进行有效性校验
     * @default true
     */
    isCheckValid?: boolean;
  }) {
    const { refreshView, page, isCheckValid } = config;
    let { data } = config;
    if (!data.length) {
      console.warn("data is empty");
      return;
    }
    if (refreshView) {
      // 清空旧视图
      this.clearLinkView();
    }
    let documentFragment = document.createDocumentFragment();
    /**
     * 用于验证链接有效性的数据
     */
    const checkValidInfoList: NetDiskCheckLinkValidityInfoConfig[] = [];
    // 当前下标
    let currentIndex = 0;
    // 最大数量
    let maxCount = data.length;
    // 当前数量
    let count = 0;
    if (typeof page === "number") {
      // 分页限制
      const dataCount = NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-show-data-count"].value;
      maxCount = dataCount;
      currentIndex = (page - 1) * dataCount;
    }
    while (true) {
      if (currentIndex > data.length - 1) {
        // 下标越界
        break;
      }
      if (count >= maxCount) {
        // 超出分页限制数量
        break;
      }
      const dataItem = data[currentIndex];

      const { ruleKeyName, netDiskDictData: netDiskData, shareCode } = dataItem;
      let uiLink = NetDisk.handleLinkShow({
        ruleKeyName: ruleKeyName,
        ruleIndex: netDiskData.ruleIndex!,
        shareCode: shareCode,
        accessCode: netDiskData.accessCode,
        matchText: netDiskData.matchText,
        showToast: false,
      });
      if (!uiLink) {
        continue;
      }
      let boxViewInfo = this.createBoxItemInfo(
        NetDiskView.$inst.icon.getIcon(ruleKeyName),
        ruleKeyName,
        netDiskData["ruleIndex"]!,
        shareCode,
        netDiskData["accessCode"],
        uiLink
      );
      checkValidInfoList.push({
        $urlBox: boxViewInfo.$urlBox,
        ruleKeyName,
        ruleIndex: netDiskData.ruleIndex!,
        shareCode,
        accessCode: netDiskData.accessCode,
      });
      documentFragment.appendChild(boxViewInfo.$urlBox);

      currentIndex++;
      count++;
    }
    // 添加元素
    this.$el.$urlBoxAll.appendChild(documentFragment);
    // 验证链接有效性
    if (isCheckValid ?? true) {
      NetDiskCheckLinkValidity.check(checkValidInfoList);
    }
  },
  /**
   * 添加新的链接
   * @param ruleKeyName 规则名称
   * @param ruleIndex 规则的索引下标
   * @param shareCode 分享码
   * @param accessCode 访问码
   * @param matchText 匹配到的文本
   */
  addBoxItemView(
    ruleKeyName: string,
    ruleIndex: number,
    shareCode: string,
    accessCode: AccessCodeType,
    matchText: string
  ) {
    NetDiskView.$inst.historyMatch.changeMatchedData(ruleKeyName, ruleIndex, shareCode, accessCode, matchText);
    if (!NetDiskView.$el.$linkView) {
      // 还未创建视图，那就不添加元素
      return;
    }
    log.info(ruleKeyName, ruleIndex, shareCode, accessCode);
    let icon = NetDiskView.$inst.icon.getIcon(ruleKeyName);
    let uiLink = NetDisk.handleLinkShow({
      ruleKeyName,
      ruleIndex,
      shareCode,
      accessCode,
      matchText,
    });
    if (!uiLink) {
      // 不存在显示到页面中的链接
      return;
    }
    this.$inst.dataPaging.changeConfig({
      data: NetDiskLinkViewData.generateViewData(),
    });
    // 重新渲染组件
    this.$inst.dataPaging.refresh(this.$inst.dataPaging.CONFIG.data);
    // this.$inst.dataPaging.CONFIG.pageChangeCallBack(this.$inst.dataPaging.PAGE_CONFIG.currentPage());
    if (
      this.$inst.dataPaging.PAGE_CONFIG.currentPage() === this.$inst.dataPaging.PAGE_CONFIG.maxPage ||
      !this.$data.dataPagingEnable
    ) {
      // 当前在最后一页
      let boxViewInfo = this.createBoxItemInfo(icon, ruleKeyName, ruleIndex, shareCode, accessCode, uiLink);
      this.$el.$urlBoxAll.appendChild(boxViewInfo.$urlBox);
      NetDiskCheckLinkValidity.check({
        $urlBox: boxViewInfo.$urlBox,
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
      });
    }
  },
  /**
   * 修改已存在的view
   * @param ruleKeyName 规则名称
   * @param ruleIndex 规则的索引下标
   * @param shareCode 分享码
   * @param accessCode 访问码
   * @param matchText 匹配到的文本
   */
  changeBoxItemView(
    ruleKeyName: string,
    ruleIndex: number,
    shareCode: string,
    accessCode: AccessCodeType,
    matchText: string
  ) {
    NetDiskView.$inst.historyMatch.changeMatchedData(ruleKeyName, ruleIndex, shareCode, accessCode, matchText);
    if (!NetDiskView.$el.$linkView) {
      // 还未创建视图，那就不修改元素
      return;
    }
    const uiLink = NetDisk.handleLinkShow({
      ruleKeyName,
      ruleIndex,
      shareCode,
      accessCode,
      matchText,
    });
    if (!uiLink) {
      // 不存在显示到页面中的链接
      return;
    }
    const $url = NetDiskView.$el.$linkView.$pops.querySelector<HTMLElement>(
      `.netdisk-url a[data-sharecode='${shareCode}'][data-rule-index='${ruleIndex}']`
    );
    if ($url) {
      log.info("修改网盘链接视图");
      log.info($url);
      $url.setAttribute("data-accesscode", accessCode!);
      DOMUtils.html($url, uiLink);
    }
  },
  /**
   * 创建在元素属性上的attribute的数据JSON
   */
  createBoxAttrRuleInfo(data: LinkViewRuleData) {
    return {
      /** 网盘 */
      "data-rule-key": data.ruleKeyName,
      /** 网盘索引 */
      "data-rule-index": data.ruleIndex,
      /** 访问码 */
      "data-sharecode": data.shareCode,
      /** 访问码 */
      "data-accesscode": data.accessCode,
    };
  },
  /**
   * 解析创建在元素属性上的attribute的数据
   * @param $el 元素
   */
  parseBoxAttrRuleInfo($el: HTMLElement) {
    let result: LinkViewItemInfo = {
      ruleKeyName: $el.getAttribute("data-rule-key")!,
      ruleIndex: parseInt($el.getAttribute("data-rule-index")!),
      shareCode: $el.getAttribute("data-sharecode")!,
      accessCode: $el.getAttribute("data-accesscode"),
    };
    if (isNaN(result.ruleIndex)) {
      log.warn("元素上的 ruleIndex 的值是NaN，调整为默认值0", $el);
      result.ruleIndex = 0;
    }
    return result;
  },
  /**
   * 创建在元素属性上的attribute的数据
   * @param data 数据
   * @param $el 需要处理的元素
   */
  handleBoxAttrRuleInfo(data: LinkViewRuleData, $el: HTMLElement | HTMLElement[]) {
    let ruleInfoJSON = this.createBoxAttrRuleInfo(data);
    for (const key in ruleInfoJSON) {
      const value = ruleInfoJSON[key as keyof typeof ruleInfoJSON]!;
      if (Array.isArray($el)) {
        $el.forEach(($ele) => {
          $ele.setAttribute(key, value.toString());
        });
      } else {
        $el.setAttribute(key, value.toString());
      }
    }
  },
  /**
   * 创建每一项的网盘元素信息
   * @param ruleImgSrc 规则图标src
   * @param ruleKeyName 规则键名
   * @param ruleIndex 规则的索引下标
   * @param shareCode 分享码
   * @param accessCode 访问码
   * @param uiLinkText 显示出来的链接文本
   */
  createBoxItemInfo(
    ruleImgSrc: string,
    ruleKeyName: string,
    ruleIndex: number,
    shareCode: string,
    accessCode: AccessCodeType,
    uiLinkText: string
  ) {
    let $urlBox = DOMUtils.createElement("div", {
      className: "netdisk-url-box",
      innerHTML: /*html*/ `
			<div class="netdisk-url-div">
          <div class="netdisk-icon">
              <div class="netdisk-icon-img"></div>
          </div>
          <div class="netdisk-status"></div>
          <div class="netdisk-url">
              <a  class="netdisk-link" href="javascript:;" isvisited="false"></a>
          </div>
      </div>
			`,
    });
    const { $urlDiv, $icon, $iconImg, $checkValidStatus, $url, $link } = this.parseBoxItemInfo($urlBox);
    // 设置网盘图标（设置为背景图片）
    $iconImg.style.cssText = `background: url(${ruleImgSrc}) no-repeat;background-size: 100%;`;
    // 设置显示的网盘链接
    DOMUtils.html($link, uiLinkText);

    // 将数据信息添加到元素attr上
    this.handleBoxAttrRuleInfo(
      {
        ruleKeyName: ruleKeyName,
        ruleIndex: ruleIndex,
        shareCode: shareCode,
        accessCode: accessCode,
      },
      [$iconImg, $link]
    );
    // 触发规则的渲染函数
    NetDisk.$rule.rule.forEach((ruleConfig) => {
      if (ruleConfig.setting.key === ruleKeyName && typeof ruleConfig.afterRenderUrlBox === "function") {
        ruleConfig.afterRenderUrlBox({
          $viewBox: $urlBox,
          $urlDiv,
          $url,
          $link,
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode,
        });
      }
    });
    return {
      $urlBox,
      $urlDiv,
      $icon,
      $iconImg,
      $checkValidStatus,
      $url,
      $link,
    };
  },
  /**
   * 解析元素上的各个元素
   * @param $viewBox 元素
   */
  parseBoxItemInfo($viewBox: HTMLElement) {
    let $urlBox = $viewBox.matches(".netdisk-url-box") ? $viewBox : $viewBox.closest<HTMLElement>(".netdisk-url-box")!;
    let $urlDiv = $urlBox.querySelector<HTMLDivElement>(".netdisk-url-div")!;
    let $icon = $urlBox.querySelector<HTMLDivElement>(".netdisk-icon")!;
    let $iconImg = $urlBox.querySelector<HTMLDivElement>(".netdisk-icon-img")!;
    /** 校验有效性 */
    let $checkValidStatus = $urlBox.querySelector<HTMLDivElement>(".netdisk-status")!;
    let $url = $urlBox.querySelector<HTMLDivElement>(".netdisk-url")!;
    let $link = $urlBox.querySelector<HTMLDivElement>(".netdisk-link")!;
    return {
      $urlBox,
      $urlDiv,
      $icon,
      $iconImg,
      $checkValidStatus,
      $url,
      $link,
    };
  },
};
