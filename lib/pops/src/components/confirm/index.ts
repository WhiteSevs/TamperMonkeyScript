import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsConfirmConfig } from "./config";
import type { PopsConfirmDetails } from "./types";

export const PopsConfirm = {
  init(details: PopsConfirmDetails) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const popsType: PopsType = "confirm";
    let config = PopsConfirmConfig();
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
        name: "confirmCSS",
        css: PopsCSS.confirmCSS,
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
            <div class="pops-title pops-${popsType}-title" style="text-align: ${
              config.title.position
            };${headerStyle}">${
              config.title.html
                ? config.title.text
                : `<p pops class="pops-${popsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`
            }${headerBtnHTML}</div>
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
    const {
      $pops: $pops,
      $title: $title,
      $headerBtnClose: $btnClose,
      $btnOk: $btnOk,
      $btnCancel: $btnCancel,
      $btnOther: $btnOther,
    } = PopsHandler.handleQueryElement($anim, popsType);
    /**
     * 遮罩层元素
     */
    let $mask: HTMLDivElement | null = null;
    /**
     * 已创建的元素列表
     */
    const elementList: HTMLElement[] = [$anim];

    if (config.mask.enable) {
      // 启用遮罩层
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
      $pops!,
      $mask!,
      config
    );
    PopsHandler.handleClickEvent("close", $btnClose!, eventDetails, config.btn.close!.callback!);
    PopsHandler.handleClickEvent("ok", $btnOk!, eventDetails!, config.btn.ok!.callback!);
    PopsHandler.handleClickEvent("cancel", $btnCancel!, eventDetails, config.btn.cancel!.callback!);
    PopsHandler.handleClickEvent("other", $btnOther!, eventDetails, config.btn.other!.callback!);

    /* 创建到页面中 */

    popsDOMUtils.append($shadowRoot, elementList);
    if (typeof config.beforeAppendToPageCallBack === "function") {
      config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
    }

    popsDOMUtils.appendBody($shadowContainer);
    if ($mask != null) {
      $anim.after($mask);
    }
    PopsHandler.handlePush(popsType, {
      guid: guid,

      animElement: $anim,

      popsElement: $pops!,

      maskElement: $mask!,
      $shadowContainer: $shadowContainer,
      $shadowRoot: $shadowRoot,
    });
    /* 拖拽 */
    if (config.drag) {
      PopsInstanceUtils.drag($pops!, {
        dragElement: $title!,
        limit: config.dragLimit,
        extraDistance: config.dragExtraDistance,
        moveCallBack: config.dragMoveCallBack,
        endCallBack: config.dragEndCallBack,
      });
    }
    const result = PopsHandler.handleResultDetails(eventDetails);
    return result;
  },
};
