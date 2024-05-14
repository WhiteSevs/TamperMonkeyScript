export const DouYinUtils = {
	/**
	 * 判断是否是竖屏
	 *
	 * window.screen.orientation.type
	 * + landscape-primary 横屏
	 * + portrait-primary 竖屏
	 */
	isVerticalScreen() {
		return !window.screen.orientation.type.includes("landscape");
	},
};
