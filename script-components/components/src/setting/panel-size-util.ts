const PanelSizeUtil = {
  /**
   * 跟随浏览器的尺寸
   *
   * + true 使用outerWidth/outerHeight
   * + false 使用innerWidth/innerHeight
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
};

export { PanelSizeUtil };
