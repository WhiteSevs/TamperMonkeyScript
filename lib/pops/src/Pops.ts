import { PopsAlert } from "./components/alert";
import type { PopsAlertConfig } from "./components/alert/types";
import { PopsConfirm } from "./components/confirm";
import type { PopsConfirmConfig } from "./components/confirm/types";
import { PopsDrawer } from "./components/drawer";
import type { PopsDrawerConfig } from "./components/drawer/types";
import { PopsFolder } from "./components/folder";
import type { PopsFolderConfig } from "./components/folder/types";
import { PopsIframe } from "./components/iframe";
import type { PopsIframeConfig } from "./components/iframe/types";
import { PopsLoading } from "./components/loading";
import type { PopsLoadingConfig } from "./components/loading/types";
import { PopsPanel } from "./components/panel";
import { PanelHandlerComponents } from "./components/panel/handlerComponents";
import type { PopsPanelConfig } from "./components/panel/types";
import { PopsPrompt } from "./components/prompt";
import type { PopsPromptConfig } from "./components/prompt/types/index";
import { PopsRightClickMenu } from "./components/rightClickMenu";
import type { PopsRightClickMenuConfig } from "./components/rightClickMenu/types";
import { PopsSearchSuggestion } from "./components/searchSuggestion";
import type { PopsSearchSuggestionConfig } from "./components/searchSuggestion/types/index";
import { PopsTooltip } from "./components/tooltip";
import type { PopsToolTipConfig } from "./components/tooltip/types/index";
import { GlobalConfig } from "./config/GlobalConfig";
import { PopsAnimation } from "./PopsAnimation";
import { PopsCore } from "./PopsCore";
import { PopsCSS } from "./PopsCSS";
import { PopsIcon } from "./PopsIcon";
import { PopsInstData } from "./PopsInst";
import { popsDOMUtils } from "./utils/PopsDOMUtils";
import { PopsInstanceUtils } from "./utils/PopsInstanceUtils";
import { PopsMathFloatUtils } from "./utils/PopsMathUtils";
import { popsUtils } from "./utils/PopsUtils";
import { version } from "../package.json";

class Pops {
  /** 配置 */
  config = {
    /** 版本号 */
    version: version,
    cssText: PopsCSS,
    /** icon图标的svg代码 */
    iconSVG: PopsIcon.$data,
    /** 当前已配置的动画@keyframes名字映射(初始化时生成) */
    animation: PopsAnimation.$data,
    /** 存储已创建的元素 */
    instData: PopsInstData,
    /** 禁止滚动 */
    forbiddenScroll: {
      event(event: Event) {
        return popsDOMUtils.preventEvent(event);
      },
    },
    /** pops使用的工具类 */
    Utils: popsUtils,
    /** pops使用的DOM工具类 */
    DOMUtils: popsDOMUtils,
    /** pops创建的实例使用的工具类 */
    InstanceUtils: PopsInstanceUtils,
    /** pops处理float类型使用的工具类 */
    MathFloatUtils: PopsMathFloatUtils,
    /** pops.panel中用于处理各个类型的工具 */
    PanelHandlerComponents: PanelHandlerComponents,
  };
  init() {}
  /**
   * 释放原有的pops控制权
   * @example
   * let pops = window.pops.noConflict()
   */
  noConflict() {
    if (typeof (PopsCore.globalThis as any).pops === "object") {
      popsUtils.delete(PopsCore.globalThis, "pops");
    }
    if (typeof unsafeWindow === "object" && unsafeWindow != null && typeof (unsafeWindow as any).pops === "object") {
      popsUtils.delete(unsafeWindow, "pops");
    }
    return new Pops();
  }
  /**
   * 通过navigator.userAgent判断是否是手机访问
   * @param userAgent
   */
  isPhone(userAgent?: string) {
    return popsUtils.isPhone(userAgent);
  }
  /**
   * 为所有弹窗设置全局属性
   */
  GlobalConfig = GlobalConfig;
  /**
   * 普通信息框
   * @param config 配置
   */
  alert = (config: PopsAlertConfig) => {
    const dialog = PopsAlert.init(config);
    return dialog;
  };

  /**
   * 询问框
   * @param config 配置
   */
  confirm = (config: PopsConfirmConfig) => {
    const dialog = PopsConfirm.init(config);
    return dialog;
  };

  /**
   * 输入框
   * @param config 配置
   */
  prompt = (config: PopsPromptConfig) => {
    const dialog = PopsPrompt.init(config);
    return dialog;
  };

  /**
   * 加载层
   * @param config 配置
   */
  loading = (config: PopsLoadingConfig) => {
    const popsLoading = PopsLoading.init(config);
    return popsLoading;
  };

  /**
   * iframe层
   * @param config 配置
   */
  iframe = (config: PopsIframeConfig) => {
    const dialog = PopsIframe.init(config);
    return dialog;
  };

  /**
   * 提示框
   * @param config 配置
   */
  tooltip = (config: PopsToolTipConfig) => {
    const popsTooltip = PopsTooltip.init(config);
    return popsTooltip;
  };

  /**
   * 抽屉
   * @param config 配置
   */
  drawer = (config: PopsDrawerConfig) => {
    const dialog = PopsDrawer.init(config);
    return dialog;
  };

  /**
   * 文件夹
   * @param config 配置
   */
  folder = (config: PopsFolderConfig) => {
    const dialog = PopsFolder.init(config);
    return dialog;
  };

  /**
   * 配置面板
   * @param config 配置
   */
  panel = (config: PopsPanelConfig) => {
    const dialog = PopsPanel.init(config);
    return dialog;
  };

  /**
   * 右键菜单
   * @param config 配置
   */
  rightClickMenu = (config: PopsRightClickMenuConfig) => {
    const popsRightClickMenu = PopsRightClickMenu.init(config);
    return popsRightClickMenu;
  };

  /**
   * 搜索建议
   *
   * 注意：调用后需要主动调用.init()和.setAllEvent()进行初始化
   * @param config 配置
   * @example
   * let $input = document.querySelector("#input");
   * let searchSuggestion = pops.searchSuggestion({
   *     target: $input,
   *     inputTarget: $input,
   *     getItemHTML: function (item) {
   *         return item.value;
   *     }
   * });
   * searchSuggestion.init();
   * searchSuggestion.setAllEvent();
   */
  searchSuggestion = <T = any>(config: PopsSearchSuggestionConfig<T>) => {
    const popsSearchSuggestion = PopsSearchSuggestion.init<T>(config);
    return popsSearchSuggestion;
  };
}

const pops = new Pops();

export { pops };
