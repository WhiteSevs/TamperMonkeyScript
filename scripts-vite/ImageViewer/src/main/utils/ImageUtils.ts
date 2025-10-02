export const ImageUtils = {
  /**
   * 获取<img>标签上的src属性
   */
  getImageElementUrl($el?: HTMLImageElement) {
    function isStringNull(target: string) {
      return target.trim() === "null" || target.trim() === "undefined" || target.trim() === "";
    }
    if ($el == null) {
      return;
    }
    if (typeof $el === "string" && isStringNull($el)) {
      return;
    }
    let url = "";
    if (isStringNull(url)) {
      if ($el.hasAttribute("data-src")) {
        url = $el.getAttribute("data-src")!;
      }
    }
    if (isStringNull(url)) {
      if ($el.hasAttribute("src")) {
        url = $el.getAttribute("src")!;
      }
    }
    if (isStringNull(url)) {
      if ($el.hasAttribute("alt")) {
        url = $el.getAttribute("alt")!;
      }
    }
    if (isStringNull(url)) {
      return;
    }
    return url;
  },
};
