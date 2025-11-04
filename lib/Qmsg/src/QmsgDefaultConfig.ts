import type { QmsgConfig } from "./types/config";

export const QmsgDefaultConfig = {
  /** 实例配置的固定的默认值，在初始化时会插入值 */
  INS_DEFAULT: {} as QmsgConfig,
  /** 声明插件名称 */
  get PLUGIN_NAME() {
    return "qmsg";
  },
  /** 命名空间，用于css和事件 */
  get NAMESPACE() {
    return "qmsg";
  },
  /** 实例配置的默认值 */
  get config(): Required<QmsgConfig> {
    return {
      parent: document.body || document.documentElement,
      useShadowRoot: true,
      shadowRootMode: "open",
      animation: true,
      autoClose: true,
      listenEventToPauseAutoClose: true,
      listenEventToCloseInstance: true,
      content: "",
      isHTML: false,
      position: "top",
      showClose: false,
      maxNums: 5,
      onClose: null,
      showIcon: true,
      showReverse: false,
      timeout: 2500,
      type: "info",
      zIndex: 50000,
      style: "",
      customClass: "",
      isLimitWidth: false,
      limitWidthNum: 200,
      limitWidthWrap: "no-wrap",
      consoleLogContent: false,
      afterRender: null,
    };
  },
};
