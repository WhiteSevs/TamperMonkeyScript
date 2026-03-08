import { GlobalConfig } from "../../config/GlobalConfig";
import { EventEmiter } from "../../event/EventEmiter";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsInstHandler } from "../../handler/PopsInstHandler";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsPanelDefaultConfig } from "./defaultConfig";
import { PanelHandlerComponents } from "./handlerComponents";
import type { PopsPanelConfig, PopsPanelEventType } from "./types";

export const PopsPanel = {
  init(__config__: PopsPanelConfig) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const popsType: PopsType = "panel";
    const emitter = new EventEmiter<PopsPanelEventType>(popsType);

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
    const zIndex = PopsHandler.getTargerOrFunctionValue(config.zIndex);
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
      emitter,
      $mask
    );
    const result = PopsHandler.handleResultConfig(evtConfig);
    // 为顶部右边的关闭按钮添加点击事件
    PopsHandler.handleClickEvent("close", $headerBtnClose, evtConfig, config.btn?.close?.callback);

    // 创建到页面中
    popsDOMUtils.append($shadowRoot, $elList);
    emitter.emit("pops:before-append-to-page", $shadowRoot, $shadowContainer);
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
      emitter,
    });

    PopsHandler.handlePush(popsType, {
      guid: guid,
      $anim: $anim,
      $pops: $pops,
      $mask: $mask!,
      $shadowContainer: $shadowContainer,
      $shadowRoot: $shadowRoot,
      config: config,
      emitter,
    });
    // 拖拽
    if (config.drag) {
      PopsInstHandler.drag($pops, {
        dragElement: $title,
        limit: config.dragLimit,
        extraDistance: config.dragExtraDistance,
        moveCallBack: config.dragMoveCallBack,
        endCallBack: config.dragEndCallBack,
      });
    }
    if (config.listenEscapeKeyUpToExitDeepMenu) {
      const escapeListener = popsDOMUtils.onKeyup(
        globalThis,
        (evt) => {
          if (evt.key === "Escape" && !evt.ctrlKey && !evt.shiftKey && !evt.altKey && !evt.metaKey) {
            // Esc
            const $exitBtn = $panelRightSectionWrapper.querySelector<HTMLLIElement>(
              ".pops-panel-deepMenu-container-left-arrow-icon"
            );
            if ($exitBtn) {
              $exitBtn.click();
            }
          }
        },
        { capture: true }
      );
      emitter.on("pops:before-destory", () => {
        escapeListener?.off();
      });
    }

    return result;
  },
};
