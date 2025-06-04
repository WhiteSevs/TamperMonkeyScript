import { PopsCSS } from "./PopsCSS";
import { popsDOMUtils } from "./utils/PopsDOMUtils";
import { PopsSafeUtils } from "./utils/PopsSafeUtils";
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
			let animationStyle = document.createElement("style");
			PopsSafeUtils.setSafeHTML(animationStyle, PopsCSS.anim);
			popsDOMUtils.appendHead(animationStyle);
			this.$data = null as any;
			this.$data = popsDOMUtils.getKeyFrames(animationStyle.sheet!);
			popsUtils.setTimeout(() => {
				animationStyle.remove();
			}, 50);
		}
	},
	/**
	 * 判断是否存在某个动画名
	 */
	hasAnim(name: string) {
		return this.$data.hasOwnProperty(name);
	},
};
