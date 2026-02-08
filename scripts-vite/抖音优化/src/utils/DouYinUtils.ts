export const DouYinUtils = {
  /**
   * 判断是否是竖屏
   *
   * window.screen.orientation.type
   * + landscape-primary 横屏
   * + portrait-primary 竖屏
   */
  isVerticalScreen() {
    return !globalThis.screen.orientation.type.includes("landscape");
  },
  /**
   * 转换时长为显示的时长
   *
   * + 30 => 0:30
   * + 120 => 2:00
   * + 14400 => 4:00:00
   * @param duration 秒
   */
  parseDuration(duration: number) {
    if (typeof duration !== "number") {
      duration = parseInt(duration);
    }
    if (isNaN(duration)) {
      return duration.toString();
    }
    /**
     * 补零
     * @param num
     * @returns
     */
    const zeroPadding = function (num: number) {
      if (num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    };
    if (duration < 60) {
      /* 1分钟内 */
      return `0:${zeroPadding(duration)}`;
    } else if (duration >= 60 && duration < 3600) {
      /* 1小时内 */
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes}:${zeroPadding(seconds)}`;
    } else {
      /* 超过1小时 */
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor(duration / 60) % 60;
      const seconds = duration % 60;
      return `${hours}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
    }
  },
};
