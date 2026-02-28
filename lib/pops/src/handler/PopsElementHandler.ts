import type { PopsAlertConfig } from "../components/alert/types";
import type { PopsConfirmConfig } from "../components/confirm/types";
import type { PopsIframeConfig } from "../components/iframe/types";
import { PopsIcon } from "../PopsIcon";
import type { PopsIconType } from "../types/icon";
import type {
  PopsSupportAnimConfig,
  PopsSupportAnimConfigType,
  PopsSupportBottomButtonConfig,
  PopsSupportBottomButtonConfigType,
  PopsSupportContentConfig,
  PopsSupportContentConfigType,
  PopsSupportHeaderTitleConfig,
  PopsSupportHeaderTitleConfigType,
} from "../types/main";
import { popsDOMUtils } from "../utils/PopsDOMUtils";

export const PopsElementHandler = {
  /**
   * 获取遮罩层HTML
   * @param guid
   * @param zIndex z-index
   * @param style
   */
  createMask(guid: string, zIndex: number = 101, style = ""): string {
    zIndex = zIndex - 100;
    if (style.startsWith(";")) {
      style = style.replace(";", "");
    }
    return /*html*/ `<div class="pops-mask" data-guid="${guid}" style="z-index:${zIndex};${style}"></div>`;
  },
  /**
   * 获取动画层HTML
   * @param guid
   * @param type
   * @param config
   * @param html
   * @param bottomBtnHTML
   * @param zIndex
   */
  createAnim(
    guid: string,
    type: PopsSupportAnimConfigType,
    config: PopsSupportAnimConfig[keyof PopsSupportAnimConfig],
    html = "",
    bottomBtnHTML = "",
    zIndex: number
  ) {
    const __config__ = config as PopsAlertConfig;
    let popsAnimStyle = "";
    let popsStyle = "";
    const popsPosition = __config__.position || "";
    if (config.zIndex != null) {
      popsAnimStyle += `z-index: ${zIndex};`;
      popsStyle += `z-index: ${zIndex};`;
    }
    if (__config__.width != null) {
      popsStyle += `width: ${__config__.width};`;
    }
    if (__config__.height != null) {
      popsStyle += `height: ${__config__.height};`;
    }
    const hasBottomBtn = bottomBtnHTML.trim() === "" ? false : true;
    return /*html*/ `
		<div class="pops-anim" anim="${__config__.animation || ""}" style="${popsAnimStyle}" data-guid="${guid}">${
      config.style != null ? /*html*/ `<style tyle="text/css" data-name="style">${config.style}</style>` : ""
    }
    ${config.lightStyle != null ? /*html*/ `<style tyle="text/css" data-name="lightStyle">@media (prefers-color-scheme: light) {${config.lightStyle}}</style>` : ""}
    ${config.darkStyle != null ? /*html*/ `<style tyle="text/css" data-name="darkStyle">@media (prefers-color-scheme: dark) {${config.darkStyle}}</style>` : ""}
			<div class="pops ${
        config.class || ""
      }" data-bottom-btn="${hasBottomBtn}" type-value="${type}" style="${popsStyle}" position="${popsPosition}" data-guid="${guid}">${html}</div>
		</div>`;
  },
  /**
   * 获取顶部按钮层HTML
   * @param type
   * @param config
   */
  createHeader(
    type: PopsSupportHeaderTitleConfigType,
    config: PopsSupportHeaderTitleConfig[keyof PopsSupportHeaderTitleConfig]
  ): string {
    if (!config.btn) {
      return "";
    }
    const confirm_config = config as PopsConfirmConfig;
    if (type !== "iframe" && !confirm_config.btn?.close?.enable) {
      return "";
    }
    let resultHTML = "";
    // let btnStyle = "";
    let closeHTML = "";
    const iframe_config = config as PopsIframeConfig;
    if (type === "iframe" && iframe_config.topRightButton?.trim() !== "") {
      // iframe的
      let topRightButtonHTML = "";
      iframe_config.topRightButton.split("|").forEach((item: string) => {
        // 最小化、最大化、窗口化、关闭按钮
        item = item.toLowerCase();
        topRightButtonHTML += /*html*/ `
                <button class="pops-header-control" type="button" data-type="${item}">
                    <i class="pops-icon">${PopsIcon.getIcon(item)}</i>
                </button>`;
      });
      resultHTML = /*html*/ `
            <div class="pops-header-controls" data-margin>${topRightButtonHTML}</div>`;
    } else {
      if (confirm_config.btn?.close?.enable) {
        // 关闭按钮
        closeHTML = /*html*/ `
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="button" data-type="close" data-header>
                    	<i class="pops-icon">${PopsIcon.getIcon("close")}</i>
                    </button>
                </div>`;
      }
      resultHTML = closeHTML;
    }

    return resultHTML;
  },
  /**
   * 获取标题style
   * @param type 弹窗类型
   * @param config 弹窗配置
   */
  createHeaderStyle(
    type: PopsSupportHeaderTitleConfigType,
    config: PopsSupportHeaderTitleConfig[keyof PopsSupportHeaderTitleConfig]
  ) {
    return {
      headerStyle: config?.title?.html ? config?.title?.style || "" : "",
      headerPStyle: config?.title?.html ? "" : config?.title?.style || "",
    };
  },
  /**
   * 获取底部按钮层HTML
   * @param type
   * @param config
   */
  createBottom(
    type: PopsSupportBottomButtonConfigType,
    config: Omit<PopsSupportBottomButtonConfig[keyof PopsSupportBottomButtonConfig], "content">
  ): string {
    if (config.btn == null) {
      // 未设置btn参数
      return "";
    }
    const confirm_config = config as Required<PopsConfirmConfig>;
    if (!(config.btn?.ok?.enable || confirm_config.btn?.cancel?.enable || confirm_config.btn?.other?.enable)) {
      // 确定、取消、其它按钮都未启用直接返回
      return "";
    }
    let btnStyle = "";
    let resultHTML = "";
    let okHTML = "";
    let cancelHTML = "";
    let ohterHTML = "";

    if (config.btn.position) {
      btnStyle += `justify-content: ${config.btn.position};`;
    }

    if (confirm_config.btn.reverse) {
      btnStyle += "flex-direction: row-reverse;";
    }
    if (config.btn?.ok?.enable) {
      // 处理确定按钮的尺寸问题
      let okButtonSizeClassName = "";
      if (config.btn.ok.size === "large") {
        okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
      } else if (config.btn.ok.size === "small") {
        okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
      }
      let okIconHTML = "";
      const okIcon = confirm_config.btn.ok!.icon! as PopsIconType | string;
      if (okIcon !== "") {
        // 判断图标是否是svg库内的
        let iconHTML = "";
        if (PopsIcon.hasIcon(okIcon)) {
          iconHTML = PopsIcon.getIcon(okIcon)!;
        } else {
          iconHTML = okIcon;
        }
        iconHTML = iconHTML || "";
        okIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${config.btn.ok.iconIsLoading}">${iconHTML}</i>`;
      }
      okHTML = /*html*/ `
            <button 
				class="pops-${type}-btn-ok ${okButtonSizeClassName}"
				type="button"
				data-type="${confirm_config.btn.ok?.type}"
				data-has-icon="${(confirm_config.btn.ok!.icon || "") !== ""}"
				data-rightIcon="${confirm_config.btn.ok?.rightIcon}"
            >${okIconHTML}<span>${config.btn.ok.text}</span>
            </button>`;
    }

    if (confirm_config.btn?.cancel?.enable) {
      // 处理取消按钮的尺寸问题
      let cancelButtonSizeClassName = "";

      if (confirm_config.btn.cancel.size === "large") {
        cancelButtonSizeClassName = "pops-button-" + confirm_config.btn.cancel.size;
      } else if (confirm_config.btn.cancel.size === "small") {
        cancelButtonSizeClassName = "pops-button-" + confirm_config.btn.cancel.size;
      }
      let cancelIconHTML = "";
      const cancelIcon = confirm_config.btn.cancel!.icon as PopsIconType | string;
      if (cancelIcon !== "") {
        let iconHTML = "";
        // 判断图标是否是svg库内的
        if (PopsIcon.hasIcon(cancelIcon)) {
          iconHTML = PopsIcon.getIcon(cancelIcon)!;
        } else {
          iconHTML = cancelIcon;
        }
        iconHTML = iconHTML || "";
        cancelIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${confirm_config.btn.cancel.iconIsLoading}">${iconHTML}</i>`;
      }
      cancelHTML = /*html*/ `
            <button
				class="pops-${type}-btn-cancel ${cancelButtonSizeClassName}"
				type="button"
				data-type="${confirm_config.btn.cancel.type}"
				data-has-icon="${(confirm_config.btn.cancel.icon || "") !== ""}"
				data-rightIcon="${confirm_config.btn.cancel.rightIcon}"
            >${cancelIconHTML}<span>${confirm_config.btn.cancel.text}</span>
            </button>`;
    }

    if (confirm_config.btn?.other?.enable) {
      // 处理其它按钮的尺寸问题
      let otherButtonSizeClassName = "";

      if (confirm_config.btn.other.size === "large") {
        otherButtonSizeClassName = "pops-button-" + confirm_config.btn.other.size;
      } else if (confirm_config.btn.other.size === "small") {
        otherButtonSizeClassName = "pops-button-" + confirm_config.btn.other.size;
      }
      let otherIconHTML = "";
      const otherIcon = confirm_config.btn.other!.icon as PopsIconType | string;
      if (otherIcon !== "") {
        let iconHTML = "";
        // 判断图标是否是svg库内的
        if (PopsIcon.hasIcon(otherIcon)) {
          iconHTML = PopsIcon.getIcon(otherIcon)!;
        } else {
          otherIcon;
        }
        iconHTML = iconHTML || "";
        otherIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${confirm_config.btn.other.iconIsLoading}">${iconHTML}</i>`;
      }
      ohterHTML = /*html*/ `
            <button
				class="pops-${type}-btn-other ${otherButtonSizeClassName}"
				type="button"
				data-type="${confirm_config.btn.other.type}"
				data-has-icon="${(confirm_config.btn.other.icon || "") !== ""}"
				data-rightIcon="${confirm_config.btn.other.rightIcon}"
            >${otherIconHTML}<span>${confirm_config.btn.other.text}</span>
            </button>`;
    }

    if (confirm_config.btn.merge) {
      let flexStyle = "display: flex;";
      if (confirm_config.btn.mergeReverse) {
        flexStyle += "flex-direction: row-reverse;";
      } else {
        flexStyle += "flex-direction: row;";
      }
      resultHTML = /*html*/ `
            <div class="pops-botttom-btn-controls pops-${type}-btn" style="${btnStyle}">${ohterHTML}<div 
                    class="pops-${type}-btn-merge"
                    style="${flexStyle}">${okHTML}${cancelHTML}</div>
            </div>
            `;
    } else {
      resultHTML = /*html*/ `<div class="pops-botttom-btn-controls pops-${type}-btn" style="${btnStyle}">${okHTML}${cancelHTML}${ohterHTML}</div>`;
    }
    return resultHTML;
  },
  /**
   * 获取内容style
   * @param type 弹窗类型
   * @param config 弹窗配置
   */
  createContentStyle(
    type: PopsSupportContentConfigType,
    config: PopsSupportContentConfig[keyof PopsSupportContentConfig]
  ) {
    return {
      contentStyle: (config?.content as any)?.html ? config?.content?.style || "" : "",
      contentPStyle: (config?.content as any)?.html ? "" : config?.content?.style || "",
    };
  },
  /**
   * 将html转换成元素
   * @param html
   */
  parseElement<T extends HTMLElement>(html: string): T {
    return popsDOMUtils.parseTextToDOM(html);
  },
  /**
   * 添加样式元素
   */
  addStyle($parent: HTMLElement | ShadowRoot, style?: string | null) {
    if (style == null) return;
    const $css = popsDOMUtils.createElement(
      "style",
      {
        innerHTML: style,
      },
      {
        type: "text/css",
        "data-name": "general",
      }
    );
    $parent.appendChild($css);
    return $css;
  },
  /**
   * 添加在浅色模式下生效的style元素
   */
  addLightStyle($parent: HTMLElement | ShadowRoot, style?: string | null) {
    const darkCSS = /*css*/ `
      @media (prefers-color-scheme: light) {
        ${style}
      }
    `;
    const $css = this.addStyle($parent, darkCSS);
    if (!$css) {
      return;
    }
    $css.setAttribute("data-name", "light");
    return $css;
  },
  /**
   * 添加在深色模式下生效的style元素
   */
  addDarkStyle($parent: HTMLElement | ShadowRoot, style?: string | null) {
    const darkCSS = /*css*/ `
      @media (prefers-color-scheme: dark) {
        ${style}
      }
    `;
    const $css = this.addStyle($parent, darkCSS);
    if (!$css) {
      return;
    }
    $css.setAttribute("data-name", "dark");
    return $css;
  },
};
