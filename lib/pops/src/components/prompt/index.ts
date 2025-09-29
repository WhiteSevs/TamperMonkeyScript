import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsPromptConfig } from "./config";
import type { PopsPromptDetails } from "./types/index";

export const PopsPrompt = {
  init(details: PopsPromptDetails) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const popsType: PopsType = "prompt";

    let config = PopsPromptConfig();
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
        name: "promptCSS",
        css: PopsCSS.promptCSS,
      },
    ]);

    // 先把z-index提取出来
    const zIndex = PopsHandler.handleZIndex(config.zIndex);
    const maskHTML = PopsElementHandler.createMask(guid, zIndex);

    const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
    const bottomBtnHTML = PopsElementHandler.createBottom(popsType, config);
    const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
    const { contentPStyle } = PopsElementHandler.createContentStyle(popsType, config);
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
            <div class="pops-content pops-${popsType}-content" style="${contentPStyle}">${
              config.content.row
                ? '<textarea name="pops-input-text" pops="" placeholder="' +
                  config.content.placeholder +
                  '"></textarea>'
                : '<input name="pops-input-text" pops="" placeholder="' +
                  config.content.placeholder +
                  '" type="' +
                  (config.content.password ? "password" : "text") +
                  '">'
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
      $input: $input,
      $headerBtnClose: $btnClose,
      $btnOk: $btnOk,
      $btnCancel: $btnCancel,
      $btnOther: $btnOther,
      $title: $title,
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
    /* 输入框赋值初始值 */

    $input!.value = config.content.text;
    PopsHandler.handlePromptClickEvent(
      "close",
      $input!,
      $btnClose!,
      eventDetails,

      config.btn.close!.callback!
    );

    PopsHandler.handlePromptClickEvent(
      "ok",
      $input!,
      $btnOk!,
      eventDetails,

      config.btn.ok!.callback!
    );
    PopsHandler.handlePromptClickEvent(
      "cancel",
      $input!,
      $btnCancel!,
      eventDetails,

      config.btn.cancel!.callback!
    );

    PopsHandler.handlePromptClickEvent(
      "other",
      $input!,
      $btnOther!,
      eventDetails,

      config.btn.other!.callback!
    );
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
    /* 设置自动获取焦点 */
    if (config.content.focus) {
      $input.focus();
    }
    /* 设置自动选中所有文字 */
    if (config.content.select) {
      $input.select();
    }
    const result = PopsHandler.handleResultDetails(eventDetails);
    return result;
  },
};
