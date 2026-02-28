import type { PopsToolTipConfig } from "./types/index";

export const PopsTooltipDefaultConfig = (): DeepRequired<PopsToolTipConfig> => {
  return {
    useShadowRoot: true,
    $target: null as any,
    content: "默认文字",
    isDiffContent: false,
    position: "top",
    className: "",
    isFixed: false,
    alwaysShow: false,
    onShowEventName: "mouseenter touchstart",
    onCloseEventName: "mouseleave touchend touchcancel",
    zIndex: 10000,
    only: false,
    eventOption: {
      once: false,
      passive: false,
      capture: true,
    },
    showBeforeCallBack() {},
    showAfterCallBack() {},
    closeBeforeCallBack() {},
    closeAfterCallBack() {},
    delayCloseTime: 100,
    showArrow: true,
    arrowDistance: 12.5,
    otherDistance: 0,
    style: "",
    lightStyle: null,
    darkStyle: null,
    beforeAppendToPageCallBack() {},
  };
};
