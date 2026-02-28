import type { PopsIframeConfig } from "./types";

export const PopsIframeDefaultConfig = (): DeepRequired<PopsIframeConfig> => {
  return {
    title: {
      position: "center",
      text: "",
      html: false,
      style: "",
    },
    loading: {
      enable: true,
      icon: true,
      text: "",
    },
    useShadowRoot: true,
    class: "",
    url: window.location.href,
    only: false,
    zIndex: 10000,
    mask: {
      enable: false,
      clickEvent: {
        toClose: false,
        toHide: false,
      },
      clickCallBack: null,
    },
    animation: "pops-anim-fadein-zoom",
    position: "center",
    drag: true,
    dragLimit: true,
    dragExtraDistance: 3,
    dragMoveCallBack() {},
    dragEndCallBack() {},
    width: window.innerWidth < 550 ? "88vw" : "350px",
    height: window.innerHeight < 450 ? "70vh" : "200px",
    topRightButton: "min|max|mise|close",
    sandbox: false,
    forbiddenScroll: false,
    loadEndCallBack() {},
    btn: {
      min: {
        callback() {},
      },
      max: {
        callback() {},
      },
      mise: {
        callback() {},
      },
      close: {
        callback() {},
      },
    },

    style: null,
    lightStyle: null,
    darkStyle: null,
    beforeAppendToPageCallBack() {},
  };
};
