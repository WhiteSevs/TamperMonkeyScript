import { NetDiskView } from "../view/NetDiskView";
import { pops, utils } from "@/env";
import type { PopsPanelConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { PopsLoadingConfig } from "@whitesev/pops/dist/types/src/components/loading/types/index";
import { PopsConfirmConfig } from "@whitesev/pops/dist/types/src/components/confirm/types/index";
import { PopsFolderConfig } from "@whitesev/pops/dist/types/src/components/folder/types/index";
import { PopsAlertConfig } from "@whitesev/pops/dist/types/src/components/alert/types/index";
import { PopsPromptConfig } from "@whitesev/pops/dist/types/src/components/prompt/types/index";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { PopsRightClickMenuConfig } from "@whitesev/pops/dist/types/src/components/rightClickMenu/types/index";
import type { PopsAnimation } from "@whitesev/pops/dist/types/src/types/animation";

export type PopsSizeConfig = {
  /** PC端 */
  PC: {
    /** 宽度，不建议使用dvw或dvh，因为这个api有点新 */
    width: string | (() => string);
    /** 高度，不建议使用dvw或dvh，因为这个api有点新 */
    height: string | (() => string);
  };
  /** 移动端 */
  Mobile: {
    /** 宽度，不建议使用dvw或dvh，因为这个api有点新 */
    width: string | (() => string);
    /** 高度，不建议使用dvw或dvh，因为这个api有点新 */
    height: string | (() => string);
  };
};

type NetDiskPopsDetails<T> = Omit<T, "width" | "height"> & {
  /** 宽度 */
  width?: string;
  /** 高度 */
  height?: string;
};

/** pops弹窗 */
export const NetDiskPops = {
  /**
   * 普通信息框
   * @param details 配置
   * @param sizeConfig 大小配置
   */
  alert(details: NetDiskPopsDetails<PopsAlertConfig>, sizeConfig?: PopsSizeConfig) {
    const config = this.handleDetails(details, sizeConfig);
    return pops.alert(config);
  },
  /**
   * 询问框
   * @param details 配置
   * @param sizeConfig 大小配置
   */
  confirm(details: NetDiskPopsDetails<PopsConfirmConfig>, sizeConfig?: PopsSizeConfig) {
    const config = this.handleDetails(details, sizeConfig);
    return pops.confirm(config);
  },
  /**
   * 加载层
   * @param details 配置
   */
  loading(details: NetDiskPopsDetails<PopsLoadingConfig>) {
    if (typeof details["animation"] === "undefined") {
      details["animation"] = NetDiskGlobalData.pops.popsAnimation.value as PopsAnimation;
    }
    if (typeof details["forbiddenScroll"] === "undefined") {
      details["forbiddenScroll"] = NetDiskView.$data.isForbiddenScrollByDefault;
    }
    return pops.loading(details);
  },
  /**
   * 输入框
   * @param details 配置
   * @param sizeConfig 大小配置
   */
  prompt(details: NetDiskPopsDetails<PopsPromptConfig>, sizeConfig?: PopsSizeConfig) {
    const config = this.handleDetails(details, sizeConfig);
    return pops.prompt(config);
  },
  /**
   * 文件夹
   * @param details 配置
   */
  folder(details: Omit<NetDiskPopsDetails<PopsFolderConfig>, "sort">, sizeConfig?: PopsSizeConfig) {
    const config = this.handleDetails(details, sizeConfig) as PopsFolderConfig;
    config["sort"] = {
      name: NetDiskGlobalData.popsFolder["pops-folder-sort-name"].value,
      isDesc: NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].value,
      callback(target, event, sortName, sortDesc) {
        NetDiskGlobalData.popsFolder["pops-folder-sort-name"].value = sortName;
        NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].value = sortDesc;
      },
    };
    return pops.folder(config);
  },
  /**
   * 菜单面板
   * @param details 配置
   */
  panel(details: NetDiskPopsDetails<PopsPanelConfig>, sizeConfig?: PopsSizeConfig) {
    const config = this.handleDetails(details, sizeConfig);
    return pops.panel(config);
  },
  /**
   * 右键菜单
   */
  rightClickMenu(details: NetDiskPopsDetails<PopsRightClickMenuConfig>) {
    const config = this.handleDetails(details);
    return pops.rightClickMenu(config);
  },
  /**
   *
   * @param details
   * @param sizeConfig 大小配置
   */
  handleDetails<T = any>(
    details: T,
    sizeConfig?: PopsSizeConfig
  ): T & {
    width: string;
    height: string;
  } {
    details = Object.assign(
      {
        animation: NetDiskGlobalData.pops.popsAnimation.value,
        drag: NetDiskGlobalData.pops.pcDrag.value,
        dragLimit: NetDiskGlobalData.pops.pcDragLimit.value,
        forbiddenScroll: NetDiskView.$data.isForbiddenScrollByDefault,
      },
      details
    );
    if (sizeConfig != null) {
      if (pops.isPhone()) {
        // 移动端
        let popsWidth =
          typeof sizeConfig.Mobile.width === "function" ? sizeConfig.Mobile.width() : sizeConfig.Mobile.width;
        let popsHeight =
          typeof sizeConfig.Mobile.height === "function" ? sizeConfig.Mobile.height() : sizeConfig.Mobile.height;
        (<any>details).width = popsWidth;
        (<any>details).height = popsHeight;
      } else {
        // PC端
        let popsWidth = typeof sizeConfig.PC.width === "function" ? sizeConfig.PC.width() : sizeConfig.PC.width;
        let popsHeight = typeof sizeConfig.PC.height === "function" ? sizeConfig.PC.height() : sizeConfig.PC.height;
        (<any>details).width = popsWidth;
        (<any>details).height = popsHeight;
      }
    }
    // 设置遮罩层
    if ((<any>details).mask == null) {
      (<any>details).mask = {};
    }
    if (typeof (<any>details).mask.enable !== "boolean") {
      (<any>details).mask.enable = true;
    }
    if ((<any>details).mask.clickEvent == null) {
      (<any>details).mask.clickEvent = {};
    }
    if (typeof (<any>details).mask.clickEvent.toClose !== "boolean") {
      (<any>details).mask.clickEvent.toClose = NetDiskGlobalData.pops.clickMaskToCloseDialog.value;
    }
    // 亚克力效果
    if (NetDiskGlobalData.pops.popsAcrylic.value) {
      let acrylicCSS = /*css*/ `
            .pops {
                --acrylic-opacity: 0.7;
                --acrylic-color: rgba(232, 232, 232, var(--acrylic-opacity));
                --acrylic-blur: 30px;
                --acrylic-saturate: 125%;
                --pops-bg-opacity: var(--acrylic-opacity);
            }
            .pops {
                backdrop-filter: blur(var(--acrylic-blur)) saturate(var(--acrylic-saturate)) !important;
                background-color: var(--acrylic-color) !important;
            }
            .pops[type-value=panel]{
                --aside-bg-color: rgba(221, 221, 221, var(--acrylic-opacity));
				--pops-bg-color: #f2f2f2;
				--title-bg-color: var(--acrylic-color);
				--aside-bg-color: var(--acrylic-color);
				--container-item-bg-color: var(--acrylic-color);
            }
            `;
      if (typeof (<any>details).style === "string") {
        (<any>details).style += acrylicCSS;
      } else {
        (<any>details).style = acrylicCSS;
      }
    }
    // 设置z-index获取方式
    (<any>details).zIndex = () => {
      /** 偏移量 */
      const deviation = 10;
      let maxZIndex = utils.getMaxZIndex(deviation);
      let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex(deviation).zIndex;
      let zIndex = utils.getMaxValue(99999, maxZIndex, popsMaxZIndex) + deviation;
      return zIndex;
    };
    return <any>details;
  },
};
