import type { PopsLoadingConfig } from "./types";

export const PopsLoadingDefaultConfig = (): DeepRequired<PopsLoadingConfig> => {
  return {
    $parent: document.body || document.documentElement,
    content: {
      text: "加载中...",
      icon: "loading",
      style: "",
    },
    useShadowRoot: true,
    class: "",
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
    forbiddenScroll: false,
    isAbsolute: false,
    style: null,
    lightStyle: null,
    darkStyle: null,
    addIndexCSS: true,
  };
};
