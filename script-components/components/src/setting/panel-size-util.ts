const PanelSizeUtil = {
  /**
   * 跟随浏览器的尺寸
   *
   * + `true`: 使用`outerWidth`/`outerHeight`
   * + `false`: 使用`innerWidth`/`innerHeight`
   * @default false
   */
  followBrowserSize: false,
  /**
   * 浏览器的宽度
   */
  get width() {
    return PanelSizeUtil.followBrowserSize ? globalThis.outerWidth : globalThis.innerWidth;
  },
  /**
   * 浏览器的高度
   */
  get height() {
    return PanelSizeUtil.followBrowserSize ? globalThis.outerHeight : globalThis.innerHeight;
  },
  /**
   * 判断是否是竖屏
   *
   * `window.screen.orientation.type`
   * + `landscape-primary`: 横屏
   * + `portrait-primary`: 竖屏
   * @returns
   * + `true`: 竖屏
   * + `false`: 横屏
   */
  isVerticalScreen() {
    return !globalThis.screen.orientation.type.includes("landscape");
  },
  /**
   * 根据浏览器宽/高来判断是否是移动端设备
   * @returns
   * + `true`: 移动端设备
   * + `false`: PC设备
   */
  isMobileDevice() {
    const isVerticalScreen = this.isVerticalScreen();
    if (isVerticalScreen) {
      // 竖屏
      return globalThis.innerWidth < 768;
    } else {
      // 横屏
      return globalThis.innerHeight < 768;
    }
  },
};

export { PanelSizeUtil };
