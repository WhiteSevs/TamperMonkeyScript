import type { PopsAlertConfig } from "../components/alert/types";
import type { PopsConfirmConfig } from "../components/confirm/types";
import type { PopsDrawerConfig } from "../components/drawer/types";
import type { PopsFolderConfig } from "../components/folder/types";
import type { PopsIframeConfig } from "../components/iframe/types";
import type { PopsLoadingConfig } from "../components/loading/types";
import type { PopsPanelConfig } from "../components/panel/types";
import type { PopsPromptConfig } from "../components/prompt/types/index";
import { PopsCore } from "../PopsCore";
import { PopsAnimation } from "../PopsAnimation";
import { PopsInstData } from "../PopsInst";
import type { PopsGeneralConfig } from "../types/components";
import type { PopsEventConfig, PopsHandlerEventConfig } from "../types/event";
import type { PopsInstGeneralConfig } from "../types/inst";
import type { PopsInstStoreType, PopsType, PopsSupportAnimConfigType, PopsSupportOnlyConfig } from "../types/main";
import { popsDOMUtils } from "../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../utils/PopsInstanceUtils";
import { popsUtils } from "../utils/PopsUtils";

export const PopsHandler = {
  /**
   * 创建shadow
   */
  handlerShadow(config: Pick<PopsGeneralConfig, "useShadowRoot">) {
    const $shadowContainer = popsDOMUtils.createElement("div", {
      className: "pops-shadow-container",
    });
    if (config.useShadowRoot) {
      const $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
      return {
        $shadowContainer,
        $shadowRoot,
      };
    } else {
      return {
        $shadowContainer,
        $shadowRoot: $shadowContainer,
      };
    }
  },
  /**
   * 处理初始化
   * @param $styleParent style元素的父元素
   * @param css 添加进ShadowRoot的CSS
   */
  handleInit(
    $styleParent?: ShadowRoot | HTMLElement,
    css?:
      | string
      | string[]
      | {
          name?: string;
          css: string;
        }[]
  ) {
    PopsAnimation.init();
    if (!arguments.length) {
      return;
    }
    if ($styleParent == null) {
      return;
    }
    if (css == null) {
      return;
    }

    if (typeof css === "string") {
      if (css.trim() === "") {
        return;
      }
      css = [
        {
          css: css,
        },
      ];
    } else {
      css = css.map((item) => {
        if (typeof item === "string") {
          return {
            css: item,
          };
        } else {
          return item;
        }
      });
    }
    for (const cssItem of css) {
      const $css = popsDOMUtils.createElement(
        "style",
        {},
        {
          "data-type": "PopsHandler.handleInit",
        }
      );
      $css.textContent = cssItem.css;
      if (typeof cssItem.name === "string") {
        $css.setAttribute("data-name", cssItem.name);
      }
      $styleParent.appendChild($css);
    }
  },
  /**
   * 处理遮罩层
   *
   * + 设置遮罩层的点击事件
   * @param config 传递的配置
   */
  handleMask(
    config = {} as {
      type: "alert" | "confirm" | "prompt" | "loading" | "iframe" | "drawer" | "folder" | "panel";
      guid: string;
      config:
        | Required<PopsAlertConfig>
        | Required<PopsLoadingConfig>
        | Required<PopsIframeConfig>
        | Required<PopsDrawerConfig>
        | Required<PopsPanelConfig>
        | Required<PopsFolderConfig>;
      animElement: HTMLElement;
      maskHTML: string;
    }
  ) {
    const result = {
      maskElement: popsDOMUtils.parseTextToDOM<HTMLDivElement>(config.maskHTML),
    };
    let isMaskClick = false;
    /**
     * 点击其它区域的事件
     * @param event
     */
    function clickEvent(event: MouseEvent | PointerEvent) {
      popsDOMUtils.preventEvent(event);
      // 获取该类型实例存储列表
      const targetInst = PopsInstData[config.type];
      function originalRun() {
        if (config.config.mask!.clickEvent!.toClose) {
          // 关闭
          return PopsInstanceUtils.close(config.config, config.type, targetInst, config.guid, config.animElement);
        } else if (config.config.mask!.clickEvent!.toHide) {
          // 隐藏
          return PopsInstanceUtils.hide(
            config.config,
            config.type,
            targetInst,
            config.guid,
            config.animElement,
            result.maskElement
          );
        }
      }
      if (typeof config.config.mask.clickCallBack === "function") {
        config.config.mask.clickCallBack(originalRun, config.config);
      } else {
        originalRun();
      }
      return false;
    }
    // 判断是否启用了遮罩层点击动作
    if (config.config.mask.clickEvent!.toClose || config.config.mask.clickEvent!.toHide) {
      /**
       * 判断点击的元素是否是动画层的元素
       * @param element
       * @returns
       */
      function isAnimElement(element: HTMLElement) {
        return Boolean(
          element?.localName?.toLowerCase() === "div" &&
            element.className &&
            element.className === "pops-anim" &&
            element.hasAttribute("anim")
        );
      }
      // 判断按下的元素是否是pops-anim
      popsDOMUtils.on(config.animElement, ["touchstart", "mousedown"], void 0, (event) => {
        const $click = event.composedPath()[0] as HTMLElement;
        isMaskClick = isAnimElement($click);
      });
      // 如果有动画层，在动画层上监听点击事件
      popsDOMUtils.on<MouseEvent | PointerEvent>(config.animElement, "click", void 0, (event) => {
        const $click = event.composedPath()[0] as HTMLElement;
        if (isAnimElement($click) && isMaskClick) {
          return clickEvent(event);
        }
      });
      // 在遮罩层监听点击事件
      // 如果有动画层，那么该点击事件触发不了
      popsDOMUtils.on<MouseEvent | PointerEvent>(result.maskElement, "click", void 0, (event) => {
        isMaskClick = true;
        clickEvent(event);
      });
    }
    return result;
  },
  /**
   * 处理获取元素
   * @param animElement
   * @param type
   */
  handleQueryElement(animElement: HTMLDivElement, type: PopsSupportAnimConfigType) {
    return {
      /**
       * 主元素
       */
      $pops: animElement.querySelector<HTMLDivElement>(".pops[type-value")!,
      /**
       * 确认按钮
       */
      $btnOk: animElement.querySelector<HTMLDivElement>(`.pops-${type}-btn-ok`)!,
      /**
       * 取消按钮
       */
      $btnCancel: animElement.querySelector<HTMLDivElement>(`.pops-${type}-btn-cancel`)!,
      /**
       * 其它按钮
       */
      $btnOther: animElement.querySelector<HTMLDivElement>(`.pops-${type}-btn-other`)!,
      /**
       * 标题元素
       */
      $title: animElement.querySelector<HTMLDivElement>(`.pops-${type}-title`)!,
      /**
       * 输入框元素
       */
      $input: animElement.querySelector<HTMLTextAreaElement>(`.pops-${type}-content textarea[pops]`)
        ? animElement.querySelector<HTMLTextAreaElement>(`.pops-${type}-content textarea[pops]`)!
        : animElement.querySelector<HTMLInputElement>(`.pops-${type}-content input[pops]`)!,
      /**
       * 顶部按钮控制层元素
       */
      $headerControls: animElement.querySelector<HTMLDivElement>(".pops-header-controls")!,
      /**
       * iframe元素
       */
      $iframe: animElement.querySelector<HTMLIFrameElement>("iframe[pops]")!,
      /**
       * 加载中元素
       */
      $loading: animElement.querySelector<HTMLDivElement>(".pops-loading")!,
      /**
       * 内容元素
       */
      $content: animElement.querySelector<HTMLDivElement>(`.pops-${type}-content`)!,
      /**
       * panel的右侧容器元素
       */
      $panelRightSectionWrapper: animElement.querySelector<HTMLDivElement>(`.pops-${type}-section-wrapper`)!,
      /**
       * panel侧边栏容器元素
       */
      $panelLeftAside: animElement.querySelector<HTMLDivElement>(`.pops-${type}-content aside.pops-${type}-aside`)!,
      /**
       * panel主要区域容器元素
       */
      $panelContentSectionContainer: animElement.querySelector<HTMLDivElement>(
        `.pops-${type}-content section.pops-${type}-container`
      )!,
      /**
       * panel底部区域
       */
      $panelBottomWrapper: animElement.querySelector<HTMLElement>(`.pops-${type}-bottom-wrapper`)!,
      /**
       * panel底部区域容器
       */
      $panelBottomContainer: animElement.querySelector<HTMLElement>(`.pops-${type}-bottom-container`)!,
      /**
       * panel底部区域左侧容器
       */
      $panelBottomLeftContainer: animElement.querySelector<HTMLElement>(`.pops-${type}-bottom-left-container`)!,
      /**
       * panel底部区域右侧容器
       */
      $panelBottomRightContainer: animElement.querySelector<HTMLElement>(`.pops-${type}-bottom-right-container`)!,
      /**
       * 内容加载中元素
       */
      $contentLoading: animElement.querySelector<HTMLDivElement>(`.pops-${type}-content-global-loading`)!,
      /**
       * 顶部缩小按钮
       */
      $headerBtnMin: animElement.querySelector<HTMLDivElement>(".pops-header-control[data-type='min']")!,
      /**
       * 顶部放大按钮
       */
      $headerBtnMax: animElement.querySelector<HTMLDivElement>(".pops-header-control[data-type='max']")!,
      /**
       * 顶部恢复原样按钮
       */
      $headerBtnMise: animElement.querySelector<HTMLDivElement>(".pops-header-control[data-type='mise']")!,
      /**
       * 顶部关闭按钮
       */
      $headerBtnClose: animElement.querySelector<HTMLDivElement>(".pops-header-control[data-type='close']")!,
      /**
       * 文件夹列表元素
       */
      $folderList: animElement.querySelector<HTMLDivElement>(".pops-folder-list")!,
      /**
       * 文件夹列表顶部元素
       */
      $folderHeaderNav: animElement.querySelector<HTMLDivElement>(
        ".pops-folder-list .pops-folder-list-table__header-div"
      )!,
      /**
       * 文件夹列表行元素
       */
      $folderHeaderRow: animElement.querySelector<HTMLTableRowElement>(
        ".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"
      )!,
      /**
       * 文件夹列表tbody元素
       */
      $folderTbody: animElement.querySelector<HTMLTableElement>(
        ".pops-folder-list .pops-folder-list-table__body-div tbody"
      )!,
      /**
       * 文件夹列表primary元素
       */
      $folderHeaderBreadcrumbPrimary: animElement.querySelector<HTMLDivElement>(
        ".pops-folder-list .pops-folder-file-list-breadcrumb-primary"
      )!,
      /**
       * 文件夹排序按钮-文件名
       */
      $folderSortFileName: animElement.querySelector<HTMLDivElement>(
        '.pops-folder-list-table__sort[data-sort="fileName"]'
      )!,
      /**
       * 文件夹排序按钮-修改时间
       */
      $folderSortLatestTime: animElement.querySelector<HTMLDivElement>(
        '.pops-folder-list-table__sort[data-sort="latestTime"]'
      )!,
      /**
       * 文件夹排序按钮-文件大小
       */
      $folderSortFileSize: animElement.querySelector<HTMLDivElement>(
        '.pops-folder-list-table__sort[data-sort="fileSize"]'
      )!,
    };
  },
  /**
   * 获取事件配置
   * @param guid
   * @param $shadowContainer
   * @param $shadowRoot
   * @param mode 当前弹窗类型
   * @param $anim 动画层
   * @param $pops 主元素
   * @param $mask 遮罩层
   * @param config 当前配置
   */
  handleEventConfig(
    config:
      | PopsAlertConfig
      | PopsDrawerConfig
      | PopsPromptConfig
      | PopsConfirmConfig
      | PopsIframeConfig
      | PopsLoadingConfig
      | PopsPanelConfig
      | PopsFolderConfig,
    guid: string,
    $shadowContainer: HTMLDivElement,
    $shadowRoot: ShadowRoot | HTMLElement,
    mode: PopsInstStoreType,
    $anim: HTMLDivElement,
    $pops: HTMLDivElement,
    $mask?: HTMLDivElement
  ): PopsEventConfig {
    return {
      $shadowContainer: $shadowContainer,
      $shadowRoot: $shadowRoot,
      $el: $anim,
      $anim: $anim,
      $pops: $pops,
      $mask: $mask,
      mode: mode,
      guid: guid,
      close() {
        return PopsInstanceUtils.close(config, mode, PopsInstData[mode], guid, $anim);
      },
      hide() {
        return PopsInstanceUtils.hide(config, mode, PopsInstData[mode], guid, $anim, $mask);
      },
      show() {
        return PopsInstanceUtils.show(config, mode, PopsInstData[mode], guid, $anim, $mask);
      },
    };
  },
  /**
   * 获取loading的事件配置
   * @param guid
   * @param mode 当前弹窗类型
   * @param $anim 动画层
   * @param $pops 主元素
   * @param $mask 遮罩层
   * @param config 当前配置
   */
  handleLoadingEventConfig(
    config:
      | PopsAlertConfig
      | PopsDrawerConfig
      | PopsPromptConfig
      | PopsConfirmConfig
      | PopsIframeConfig
      | PopsLoadingConfig
      | PopsPanelConfig
      | PopsFolderConfig,
    guid: string,
    mode: "loading",
    $anim: HTMLDivElement,
    $pops: HTMLDivElement,
    $mask?: HTMLDivElement
  ): Omit<PopsEventConfig, "$shadowContainer" | "$shadowRoot"> {
    return {
      $el: $anim,
      $anim: $anim,
      $pops: $pops,
      $mask: $mask,
      mode: mode,
      guid: guid,
      close() {
        return PopsInstanceUtils.close(config, mode, PopsInstData[mode], guid, $anim);
      },
      hide() {
        return PopsInstanceUtils.hide(config, mode, PopsInstData[mode], guid, $anim, $mask);
      },
      show() {
        return PopsInstanceUtils.show(config, mode, PopsInstData[mode], guid, $anim, $mask);
      },
    };
  },
  /**
   * 处理返回的配置，针对popsHandler.handleEventConfig
   * @param config 配置
   */
  handleResultConfig<T>(config: T): Omit<T, "type" | "function"> {
    const resultDetails = Object.assign({}, config);
    popsUtils.delete(resultDetails, "type");
    popsUtils.delete(resultDetails, "function");
    return resultDetails;
  },
  /**
   * 处理点击事件
   * @param type 当前按钮类型
   * @param $btn 按钮元素
   * @param eventConfig 事件配置，由popsHandler.handleEventConfig创建的
   * @param callback 点击回调
   */
  handleClickEvent(
    type: PopsHandlerEventConfig["type"],
    $btn: HTMLElement,
    eventConfig: PopsEventConfig,
    callback?: (details: PopsHandlerEventConfig, event: PointerEvent | MouseEvent) => void
  ) {
    if (typeof callback !== "function") return;
    popsDOMUtils.on<PointerEvent | MouseEvent>(
      $btn,
      "click",
      (event) => {
        const extraParam = {
          type: type,
        };
        callback(Object.assign(eventConfig, extraParam), event);
      },
      {
        capture: true,
      }
    );
  },
  /**
   * 全局监听键盘事件
   * @param keyName 键名|键值
   * @param otherKeyList 组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
   * @param callback 回调函数
   */
  handleKeyboardEvent(keyName: string | number, otherKeyList: string[] = [], callback: (event: KeyboardEvent) => void) {
    const keyboardEvent = function (event: KeyboardEvent) {
      const _keyName = event.code || event.key;
      const _keyValue = event.charCode || event.keyCode || event.which;
      if (otherKeyList.includes("ctrl") && !event.ctrlKey) {
        return;
      }
      if (otherKeyList.includes("alt") && !event.altKey) {
        return;
      }
      if (otherKeyList.includes("meta") && !event.metaKey) {
        return;
      }
      if (otherKeyList.includes("shift") && !event.shiftKey) {
        return;
      }
      if (typeof keyName === "string" && keyName === _keyName) {
        callback && callback(event);
      } else if (typeof keyName === "number" && keyName === _keyValue) {
        callback && callback(event);
      }
    };
    popsDOMUtils.on(PopsCore.globalThis, "keydown", keyboardEvent, {
      capture: true,
    });
    return {
      removeKeyboardEvent() {
        popsDOMUtils.off(globalThis, "keydown", keyboardEvent, {
          capture: true,
        });
      },
    };
  },
  /**
   * 处理prompt的点击事件
   * @param type 触发事件类型
   * @param inputElement 输入框
   * @param  $btn 按钮元素
   * @param eventConfig 事件配置，由popsHandler.handleEventConfig创建的
   * @param callback 点击回调
   */
  handlePromptClickEvent(
    type: PopsHandlerEventConfig["type"],
    inputElement: HTMLInputElement | HTMLTextAreaElement,
    $btn: HTMLElement,
    eventConfig: PopsEventConfig,
    callback: (
      details: PopsEventConfig & {
        type: any;
        text: string;
      },
      event: MouseEvent | PointerEvent
    ) => void
  ) {
    popsDOMUtils.on<MouseEvent | PointerEvent>(
      $btn,
      "click",
      (event) => {
        // 额外参数
        const extraParam = {
          type: type,
          text: inputElement.value,
        };
        callback(Object.assign(eventConfig, extraParam), event);
      },
      {
        capture: true,
      }
    );
  },
  /**
   * 把配置的z-index配置转为数字
   * @param zIndex
   */
  handleZIndex(zIndex: number | (() => number)): number {
    if (typeof zIndex === "function") {
      return zIndex();
    } else {
      return zIndex;
    }
  },
  /**
   * 处理config.only
   * @param type 当前弹窗类型
   * @param config 配置
   */
  handleOnly<T extends Required<PopsSupportOnlyConfig[keyof PopsSupportOnlyConfig]>>(type: PopsType, config: T): T {
    if (config.only) {
      // .loading
      // .tooltip
      // .rightClickMenu
      // 单独处理
      if (type === "loading" || type === "tooltip" || type === "rightClickMenu") {
        const inst = PopsInstData[type as keyof typeof PopsInstData];
        if (inst) {
          PopsInstanceUtils.removeInstance([inst], "", true);
        }
      } else {
        PopsInstanceUtils.removeInstance(
          [
            PopsInstData.alert,
            PopsInstData.confirm,
            PopsInstData.prompt,
            PopsInstData.iframe,
            PopsInstData.drawer,
            PopsInstData.folder,
            PopsInstData.panel,
          ],
          "",
          true
        );
      }
    } else {
      // 对配置进行处理
      // 选择配置的z-index和已有的pops实例的最大z-index值
      const originZIndex = config.zIndex;
      config.zIndex = () => {
        const { zIndex: maxZIndex } = PopsInstanceUtils.getPopsMaxZIndex(PopsHandler.handleZIndex(originZIndex) + 100);
        return maxZIndex;
      };
    }
    return config;
  },
  /**
   * 处理把已创建的元素保存到内部环境中
   * @param type 当前弹窗类型
   * @param value
   */
  handlePush(type: PopsInstStoreType, value: PopsInstGeneralConfig) {
    PopsInstData[type].push(value);
  },
};
