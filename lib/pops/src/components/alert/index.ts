import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsAlertConfig } from "./config";
import type { PopsType } from "../../types/main";
import type { PopsAlertDetails } from "./types";
import { PopsCSS } from "../../PopsCSS";

export const PopsAlert = {
  init(details: PopsAlertDetails) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const popsType: PopsType = "alert";
    let config = PopsAlertConfig();
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
        name: "alertCSS",
        css: PopsCSS.alertCSS,
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
			<div class="pops-title pops-${popsType}-title" style="text-align: ${config.title.position};${headerStyle}">${
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
      $headerBtnClose: $headerCloseBtn,
      $btnOk: btnOkElement,
      $title: $title,
    } = PopsHandler.handleQueryElement($anim, popsType);

    /** 遮罩层元素 */
    let $mask: HTMLDivElement | undefined = void 0;
    /** 已创建的元素列表 */
    const $elList: HTMLElement[] = [$anim];

    /* 遮罩层元素 */

    if (config.mask.enable) {
      const handleMask = PopsHandler.handleMask({
        type: popsType,
        guid: guid,
        config: config,
        animElement: $anim,
        maskHTML: maskHTML,
      });
      $mask = handleMask.maskElement;
      $elList.push($mask);
    }
    /* 处理返回的配置 */
    const evtConfig = PopsHandler.handleEventConfig(
      config,
      guid,
      $shadowContainer,
      $shadowRoot,
      popsType,
      $anim,
      $pops,
      $mask
    );
    /* 为顶部右边的关闭按钮添加点击事件 */
    PopsHandler.handleClickEvent("close", $headerCloseBtn, evtConfig, config.btn.close?.callback);
    /* 为底部ok按钮添加点击事件 */
    PopsHandler.handleClickEvent("ok", btnOkElement, evtConfig, config.btn.ok?.callback);

    /* 创建到页面中 */

    popsDOMUtils.append($shadowRoot, $elList);
    if (typeof config.beforeAppendToPageCallBack === "function") {
      config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
    }

    popsDOMUtils.appendBody($shadowContainer);
    if ($mask != null) {
      // 添加遮罩层
      $anim.after($mask);
    }
    /* 保存 */
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
        extraDistance: config.dragExtraDistance!,
        moveCallBack: config.dragMoveCallBack!,
        endCallBack: config.dragEndCallBack!,
      });
    }

    const result = PopsHandler.handleResultConfig(evtConfig);
    return result;
  },
};
