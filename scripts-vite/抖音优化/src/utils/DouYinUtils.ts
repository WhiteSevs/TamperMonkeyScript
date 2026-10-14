import { utils } from "@/env";

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
  /**
   * 判断video标签是否存在有效的播放资源
   */
  isVideoEmptySrc($video?: HTMLVideoElement): boolean {
    // 忽略没有媒体资源的video标签
    // src、currentSrc、srcObject都为空且内部没有<source>标签才排除掉
    if (
      $video != null &&
      utils.isNull($video.src) &&
      utils.isNull($video.currentSrc) &&
      $video.srcObject == null &&
      !$video.querySelector("source[src]")
    ) {
      return true;
    }
    return false;
  },
  /**
   * 模拟鼠标/手指点击元素
   * @param target 目标DOM元素
   * @param options 事件配置（如坐标、按键等）
   */
  simulateClick(target: Element, options: PointerEventInit & MouseEventInit = {}) {
    const { clientX = 0, clientY = 0, ...restOptions } = options;

    // 1. 派发 PointerEvent (现代标准，统一鼠标和触摸)
    target.dispatchEvent(
      new PointerEvent("pointerdown", {
        clientX,
        clientY,
        bubbles: true,
        cancelable: true,
        ...restOptions,
      })
    );
    target.dispatchEvent(
      new PointerEvent("pointerup", {
        clientX,
        clientY,
        bubbles: true,
        cancelable: true,
        ...restOptions,
      })
    );

    // 2. 派发 MouseEvent (兼容传统鼠标事件监听)
    target.dispatchEvent(
      new MouseEvent("mousedown", {
        clientX,
        clientY,
        bubbles: true,
        cancelable: true,
        ...restOptions,
      })
    );
    target.dispatchEvent(
      new MouseEvent("mouseup", {
        clientX,
        clientY,
        bubbles: true,
        cancelable: true,
        ...restOptions,
      })
    );

    // 3. 派发 click 事件
    target.dispatchEvent(
      new MouseEvent("click", {
        clientX,
        clientY,
        bubbles: true,
        cancelable: true,
        ...restOptions,
      })
    );
  },
  /**
   * 触摸屏模拟手指点击元素
   * @param target 目标DOM元素
   * @param clientX 点击位置X
   * @param clientY 点击位置Y
   */
  simulateTouchClick(target: Element, clientX?: number, clientY?: number) {
    if (clientX == null && clientY == null) {
      const rect = target.getBoundingClientRect();
      clientX = rect.left + rect.width / 2;
      clientY = rect.top + rect.height / 2;
    } else {
      clientX = clientX ?? 0;
      clientY = clientY ?? 0;
    }
    const touchOptions: TouchEventInit = {
      touches: [new Touch({ identifier: 0, target, clientX, clientY })],
      changedTouches: [new Touch({ identifier: 0, target, clientX, clientY })],
      targetTouches: [new Touch({ identifier: 0, target, clientX, clientY })],
      bubbles: true,
      cancelable: true,
    };

    target.dispatchEvent(new TouchEvent("touchstart", touchOptions));
    target.dispatchEvent(new TouchEvent("touchend", touchOptions));

    // 触摸结束后，通常还会触发模拟的 click
    this.simulateClick(target, { clientX, clientY });
  },
};
