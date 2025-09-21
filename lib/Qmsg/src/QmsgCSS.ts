import { QmsgDefaultConfig } from "./QmsgDefaultConfig";
import { QmsgUtils } from "./QmsgUtils";
import indexCSS from "./css/index.css";
import keyframesCSS from "./css/keyframes.css";

export const QmsgCSS = {
  css: `
    ${indexCSS}

    ${keyframesCSS}
  `,
  /**
   * 获取CSS元素
   */
  getStyleElement() {
    const $style = document.createElement("style");
    $style.setAttribute("type", "text/css");
    $style.setAttribute("data-type", QmsgDefaultConfig.PLUGIN_NAME);
    QmsgUtils.setSafeHTML($style, QmsgCSS.css);
    return $style;
  },
};
