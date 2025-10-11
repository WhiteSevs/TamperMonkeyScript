import { addStyle, utils } from "@/env";
import blockCSS from "./block.css?raw";
import beautifyCSS from "./beautify.css?raw";
import DOMUtils from "@whitesev/domutils";
import { Panel } from "@components/setting/panel";

export const MDouYinShareVideo = {
  init() {
    addStyle(blockCSS);
    addStyle(beautifyCSS);
    Panel.execMenuOnce("m-dy-share-video-coverGlobalClick", () => {
      return this.coverGlobalClick();
    });
  },
  /**
   * 阻止全局点击，会跳转
   */
  coverGlobalClick() {
    const result = DOMUtils.on(
      document,
      "click",
      [".right-con", ".footer", ".mix-info"],
      (event) => {
        return DOMUtils.preventEvent(event);
      },
      {
        capture: true,
      }
    );
    return [result.off];
  },
};
