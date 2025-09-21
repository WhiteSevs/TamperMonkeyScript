import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsDrawerConfig } from "./config";
import type { PopsDrawerDetails } from "./types";

export const PopsDrawer = {
  init(details: PopsDrawerDetails) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const popsType: PopsType = "drawer";
    let config = PopsDrawerConfig();
    config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
    config = popsUtils.assign(config, details);
    config = PopsHandler.handleOnly(popsType, config);

    const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
    PopsHandler.handleInit($shadowRoot, [
      {
        name: "index",
        css: PopsCSS.index,
      },
      {
        name: "ninePalaceGridPosition",
        css: PopsCSS.ninePalaceGridPosition,
      },
      {
        name: "scrollbar",
        css: PopsCSS.scrollbar,
      },
      {
        name: "button",
        css: PopsCSS.button,
      },
      {
        name: "anim",
        css: PopsCSS.anim,
      },
      {
        name: "common",
        css: PopsCSS.common,
      },
      {
        name: "drawerCSS",
        css: PopsCSS.drawerCSS,
      },
    ]);

    // 先把z-index提取出来
    const zIndex = PopsHandler.handleZIndex(config.zIndex);
    const maskHTML = PopsElementHandler.createMask(guid, zIndex);

    const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
    const bottomBtnHTML = PopsElementHandler.createBottom(popsType, config);
    const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
    const { contentStyle, contentPStyle } = PopsElementHandler.createContentStyle(popsType, config);
    const animHTML = PopsElementHandler.createAnim(
      guid,
      popsType,
      config,
      /*html*/ `
            ${
              config.title.enable
                ? /*html*/ `<div class="pops-title pops-${popsType}-title" style="${headerStyle}">${
                    config.title.html
                      ? config.title.text
                      : /*html*/ `<p pops class="pops-${popsType}-title-text" style="width: 100%;text-align: ${config.title.position};${headerPStyle}">${config.title.text}</p>`
                  }${headerBtnHTML}</div>`
                : ""
            }
            <div class="pops-content pops-${popsType}-content" style="${contentStyle}">${
              config.content.html
                ? config.content.text
                : `<p pops class="pops-${popsType}-content-text" style="${contentPStyle}">${config.content.text}</p>`
            }</div>${bottomBtnHTML}`,
      bottomBtnHTML,
      zIndex
    );
    /**
     * 弹窗的主元素，包括动画层
     */
    const $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);
    const { popsElement, headerCloseBtnElement, btnCancelElement, btnOkElement, btnOtherElement } =
      PopsHandler.handleQueryElement($anim, popsType);
    const $pops = popsElement!;
    const $headerCloseBtn = headerCloseBtnElement!;
    const $btnCancel = btnCancelElement!;
    const $btnOk = btnOkElement!;
    const $btnOther = btnOtherElement!;
    /**
     * 遮罩层元素
     */
    let $mask: HTMLDivElement | null = null;
    /**
     * 已创建的元素列表
     */
    const elementList: HTMLElement[] = [$anim];

    if (config.mask.enable) {
      const _handleMask_ = PopsHandler.handleMask({
        type: popsType,
        guid: guid,
        config: config,
        animElement: $anim,
        maskHTML: maskHTML,
      });
      $mask = _handleMask_.maskElement;
      elementList.push($mask);
    }
    const eventDetails = PopsHandler.handleEventDetails(
      guid,
      $shadowContainer,
      $shadowRoot,
      popsType,
      $anim,
      $pops,
      $mask!,
      config
    );
    /* 处理方向 */

    $pops.setAttribute("direction", config.direction);

    /* 处理border-radius */
    /* 处理动画前的宽高 */
    if (config.direction === "top") {
      $pops.style.setProperty("height", "0");

      $pops.style.setProperty("border-radius", `0px 0px ${config.borderRadius}px ${config.borderRadius}px`);
    } else if (config.direction === "bottom") {
      $pops.style.setProperty("height", "0");

      $pops.style.setProperty("border-radius", `${config.borderRadius}px ${config.borderRadius}px 0px 0px`);
    } else if (config.direction === "left") {
      $pops.style.setProperty("width", "0");

      $pops.style.setProperty("border-radius", `0px ${config.borderRadius}px 0px ${config.borderRadius}px`);
    } else if (config.direction === "right") {
      $pops.style.setProperty("width", "0");

      $pops.style.setProperty("border-radius", `${config.borderRadius}px 0px ${config.borderRadius}px 0px`);
    }

    /* 按下Esc键触发关闭 */
    if (config.closeOnPressEscape) {
      PopsHandler.handleKeyboardEvent("Escape", [], function () {
        eventDetails.close();
      });
    }
    /* 待处理的点击事件列表 */
    const needHandleClickEventList = [
      {
        type: "close",
        ele: $headerCloseBtn,
      },
      {
        type: "cancel",
        ele: $btnCancel,
      },
      {
        type: "ok",
        ele: $btnOk,
      },
      {
        type: "other",
        ele: $btnOther,
      },
    ];
    needHandleClickEventList.forEach((item) => {
      PopsHandler.handleClickEvent(
        item.type as "close" | "cancel" | "ok" | "other",
        item.ele,
        eventDetails,
        (_eventDetails_) => {
          if (typeof (config.btn as any)[item.type].callback === "function") {
            (config.btn as any)[item.type].callback(_eventDetails_);
          }
        }
      );
    });

    /* 先隐藏，然后根据config.openDelay来显示 */
    elementList.forEach((element) => {
      element.style.setProperty("display", "none");
      if (["top"].includes(config.direction)) {
        $pops.style.setProperty("height", config.size.toString());

        $pops.style.setProperty("transform", "translateY(-100%)");
      } else if (["bottom"].includes(config.direction)) {
        $pops.style.setProperty("height", config.size.toString());

        $pops.style.setProperty("transform", "translateY(100%)");
      } else if (["left"].includes(config.direction)) {
        $pops.style.setProperty("width", config.size.toString());

        $pops.style.setProperty("transform", "translateX(-100%)");
      } else if (["right"].includes(config.direction)) {
        $pops.style.setProperty("width", config.size.toString());

        $pops.style.setProperty("transform", "translateX(100%)");
      }
      element.style.setProperty("display", "");
    });
    /* 创建到页面中 */

    popsDOMUtils.append($shadowRoot, elementList);
    if (typeof config.beforeAppendToPageCallBack === "function") {
      config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
    }

    popsDOMUtils.appendBody($shadowContainer);
    popsUtils.setTimeout(() => {
      popsUtils.setTimeout(() => {
        $pops.style.setProperty("transform", "");
      }, config.openDelay);
    }, 50);

    if ($mask != null) {
      $anim.after($mask);
    }

    PopsHandler.handlePush(popsType, {
      guid: guid,
      animElement: $anim,
      popsElement: $pops,
      maskElement: $mask!,
      $shadowContainer: $shadowContainer,
      $shadowRoot: $shadowRoot,
    });
    const result = PopsHandler.handleResultDetails(eventDetails);
    return result;
  },
};
