import { PopsCSS } from "./PopsCSS";
import { popsDOMUtils } from "./utils/PopsDOMUtils";
import { popsUtils } from "./utils/PopsUtils";

export const PopsAnimation = {
  $data: {} as { [key: string]: CSSKeyframesRule },
  $flag: {
    /** 是否初始化 */
    isInit: false,
  },
  init() {
    if (!this.$flag.isInit) {
      this.$flag.isInit = true;
      /* 处理获取当前所有的动画名 */
      const $style = popsDOMUtils.createElement("style", {
        innerHTML: PopsCSS.anim,
      });
      popsDOMUtils.appendHead($style);
      this.$data = null as any;
      this.$data = popsDOMUtils.getKeyFrames($style.sheet!);
      popsUtils.setTimeout(() => {
        $style.remove();
      }, 50);
    }
  },
  /**
   * 判断是否存在某个动画名
   */
  hasAnim(name: string) {
    return Object.prototype.hasOwnProperty.call(this.$data, name);
  },
};
