import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsCSS } from "../../PopsCSS";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsLoadingDefaultConfig } from "./defaultConfig";
import type { PopsLoadingConfig } from "./types";

export const PopsLoading = {
  init(__config__: PopsLoadingConfig) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const PopsType = "loading";
    let config = PopsLoadingDefaultConfig();
    config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
    config = popsUtils.assign(config, __config__);

    config = PopsHandler.handleOnly(PopsType, config);

    // 先把z-index提取出来
    const zIndex = PopsHandler.handleZIndex(config.zIndex);
    const maskHTML = PopsElementHandler.createMask(guid, zIndex);

    const { contentPStyle } = PopsElementHandler.createContentStyle("loading", config);
    const animHTML = PopsElementHandler.createAnim(
      guid,
      PopsType,
      config,
      /*html*/ `
            <div class="pops-content pops-${PopsType}-content">${
              config.addIndexCSS
                ? /*html*/ `
                <style data-model-name="index">${PopsCSS.index}</style>
                <style data-model-name="anim">${PopsCSS.anim}</style>
                <style data-model-name="common">${PopsCSS.common}</style>
                `
                : ""
            }
                <style data-model-name="loadingCSS">
                    ${PopsCSS.loadingCSS}
                </style>
            ${config.style != null ? `<style>${config.style}</style>` : ""}
            	<p pops class="pops-${PopsType}-content-text" style="${contentPStyle}">${config.content.text}</p>
            </div>`,
      "",
      zIndex
    );

    /**
     * 弹窗的主元素，包括动画层
     */

    const $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);

    const { $pops: $pops } = PopsHandler.handleQueryElement($anim, PopsType);
    /**
     * 遮罩层元素
     */
    let $mask: HTMLDivElement | undefined = void 0;
    /**
     * 已创建的元素列表
     */
    const $elList: HTMLElement[] = [$anim];

    if (config.mask.enable) {
      // 创建遮罩层
      const handleMask = PopsHandler.handleMask({
        type: PopsType,
        guid: guid,

        config: config,
        animElement: $anim,
        maskHTML: maskHTML,
      });
      $mask = handleMask.maskElement;
      $elList.push($mask);
    }
    const evtConfig = PopsHandler.handleLoadingEventConfig(config, guid, PopsType, $anim, $pops, $mask);
    popsDOMUtils.append(config.$parent, $elList);
    if ($mask != null) {
      $anim.after($mask);
    }
    // @ts-ignore
    PopsHandler.handlePush(PopsType, {
      guid: guid,
      $anim: $anim,
      $pops: $pops!,
      $mask: $mask!,
    });

    if (config.isAbsolute) {
      // 遮罩层必须是跟随主内容
      // 即设置主内容position: relative，mask：position: absolute
      popsDOMUtils.css($anim, "position", "absolute !important");
      $mask && popsDOMUtils.css($mask, "position", "absolute !important");
    }
    const result = PopsHandler.handleResultConfig(evtConfig);
    return result;
  },
};
