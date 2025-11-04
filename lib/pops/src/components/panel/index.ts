import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { popsUtils } from "../../utils/PopsUtils";
import type { PopsPanelConfig, PopsPanelEventType } from "./types";
import { PopsPanelDefaultConfig } from "./defaultConfig";
import { PanelHandlerComponents } from "./handlerComponents";
import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";

export const PopsPanel = {
  init(__config__: PopsPanelConfig) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const popsType: PopsType = "panel";

    let config: Required<PopsPanelConfig> = PopsPanelDefaultConfig();
    config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
    config = popsUtils.assign(config, __config__);
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
        name: "panelCSS",
        css: PopsCSS.panelCSS,
      },
    ]);

    // 先把z-index提取出来
    const zIndex = PopsHandler.handleZIndex(config.zIndex);
    const maskHTML = PopsElementHandler.createMask(guid, zIndex);

    const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
    const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);

    const animHTML = PopsElementHandler.createAnim(
      guid,
      popsType,
      config,
      /*html*/ `
			<div class="pops-title pops-${popsType}-title" style="text-align: ${config.title.position};${headerStyle}">${
        config.title.html
          ? config.title.text
          : `<p pops class="pops-${popsType}-title-text" class="pops-${popsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`
      }${headerBtnHTML}</div>
			<div class="pops-content pops-${popsType}-content">
				<aside class="pops-${popsType}-aside pops-user-select-none">
					<ul class="pops-${popsType}-aside-top-container"></ul>
					<ul class="pops-${popsType}-aside-bottom-container"></ul>
				</aside>
				<div class="pops-${popsType}-section-wrapper">
					<section class="pops-${popsType}-container">
						<ul class="pops-${popsType}-container-header-ul"></ul>
						<ul class="pops-${popsType}-container-main-ul"></ul>
					</section>
				</div>
			</div>
      <div class="pops-${popsType}-bottom-wrapper">
        <section class="pops-${popsType}-bottom-container">
          <ul class="pops-${popsType}-bottom-left-container"></ul>
          <ul class="pops-${popsType}-bottom-right-container"></ul>
        </section>
      </div>
      `,
      "",
      zIndex
    );
    /**
     * 弹窗的主元素，包括动画层
     */
    const $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);
    // 结构元素
    const {
      $pops,
      $headerBtnClose,
      $title,
      $content,
      $panelRightSectionWrapper,
      $panelLeftAside,
      $panelContentSectionContainer,
      $panelBottomWrapper,
      $panelBottomContainer,
      $panelBottomLeftContainer,
      $panelBottomRightContainer,
    } = PopsHandler.handleQueryElement($anim, popsType);
    if (config.isMobile || popsUtils.isPhone()) {
      popsDOMUtils.addClassName($pops, config.mobileClassName);
    }
    /**
     * 遮罩层元素
     */
    let $mask: HTMLDivElement | undefined = void 0;
    /**
     * 已创建的元素列表
     */
    const $elList: HTMLElement[] = [$anim];

    // 遮罩层元素
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

    // 处理返回的配置
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
    // 为顶部右边的关闭按钮添加点击事件
    PopsHandler.handleClickEvent("close", $headerBtnClose, evtConfig, config.btn?.close?.callback);

    // 创建到页面中
    popsDOMUtils.append($shadowRoot, $elList);
    if (typeof config.beforeAppendToPageCallBack === "function") {
      config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
    }
    popsDOMUtils.appendBody($shadowContainer);
    // 追加遮罩层元素
    if ($mask != null) {
      $anim.after($mask);
    }
    const panelHandlerComponents = PanelHandlerComponents();
    /**
     * 处理内部配置
     */
    panelHandlerComponents.init({
      config: config,
      $el: {
        $pops,
        $content,
        $panelRightSectionWrapper,
        $panelLeftAside,
        $panelContentSectionContainer,
        $panelBottomWrapper,
        $panelBottomContainer,
        $panelBottomLeftContainer,
        $panelBottomRightContainer,
      },
    });

    PopsHandler.handlePush(popsType, {
      guid: guid,
      $anim: $anim,
      $pops: $pops,
      $mask: $mask!,
      $shadowContainer: $shadowContainer,
      $shadowRoot: $shadowRoot,
    });
    // 拖拽
    if (config.drag) {
      PopsInstanceUtils.drag($pops, {
        dragElement: $title,
        limit: config.dragLimit,
        extraDistance: config.dragExtraDistance,
        moveCallBack: config.dragMoveCallBack,
        endCallBack: config.dragEndCallBack,
      });
    }
    const result = PopsHandler.handleResultConfig(evtConfig);

    return {
      ...result,
      addEventListener: <K extends keyof PopsPanelEventType>(
        event: K,
        listener: (evt: CustomEvent<PopsPanelEventType[K]>) => void,
        options?: boolean | EventListenerOptions
      ) => {
        $pops.addEventListener(event, listener as any, options);
      },
      removeEventListener: <K extends keyof PopsPanelEventType>(
        event: K,
        listener: (evt: CustomEvent<PopsPanelEventType[K]>) => void,
        options?: boolean | EventListenerOptions
      ) => {
        $pops.removeEventListener(event, listener as any, options);
      },
    };
  },
};
