import { addStyle, DOMUtils, utils } from "@/env";

interface AffixOption {
  /**
   * 偏移距离
   * @default 0
   */
  offset?: number | (() => number);
  /**
   * 固钉位置
   * @default "top"
   */
  position?: "top" | "bottom" | (() => "top" | "bottom");
  /**
   * 指定容器（CSS 选择器）
   */
  target: string | HTMLElement;
  /**
   * 指定根元素
   */
  root?: Element | Document | null;
  /**
   * z-index
   * @default 100
   */
  "z-index"?: number | string;
  /**
   * 固钉状态改变时触发的事件素
   */
  change?: ($target: HTMLElement, isIntersecting: boolean) => void;
}
/**
 * 设置元素固钉
 */
export const setAffix = async (option: AffixOption) => {
  let config: Required<AffixOption> = {
    offset: 0,
    position: "top",
    target: "",
    "z-index": 100,
    root: null,
    change: () => {},
  };
  utils.assign(config, option);
  if (utils.isNull(config)) {
    throw new TypeError("配置不能为空");
  }
  if (!config.target) {
    throw new TypeError("target不能为空");
  }
  let $target = config.target as HTMLElement;
  if (typeof config.target === "string") {
    let $result = await DOMUtils.waitNode<HTMLElement>(config.target, 10000);
    if (!$result) {
      return;
    }
    $target = $result;
  }

  /** 偏移 */
  let offset = typeof config.offset === "function" ? config.offset() : config.offset;
  /** 位置 */
  let position = typeof config.position === "function" ? config.position() : config;
  addStyle(/*css*/ `
        .affix-container-top-fixed[data-target="${config.target}"]{
            position: fixed;
            top: ${offset}px;
            left: 0;
            z-index: ${config["z-index"]};
        }
        `);
  let checkOffset = offset;
  /* 创建用于检测的div */
  let $affixLine = document.createElement("div");
  $affixLine.className = "affix-line";
  $target.setAttribute("data-target", config.target.toString());
  DOMUtils.before($target, $affixLine);
  // 生成观察器的配置
  let rootMargin = `0px`;
  if (position === "bottom") {
    rootMargin = `0px 0px ${-checkOffset}px 0px`;
  } else {
    rootMargin = `${-checkOffset}px 0px 0px 0px`;
  }
  let threshold = [0.01, 0.99];
  let thresholdMinValue = threshold[0] * checkOffset;
  let thresholdMaxValue = threshold[threshold.length - 1] * checkOffset;
  let lockFunc = new utils.LockFunction((entries: IntersectionObserverEntry[]) => {
    let intersectionObserverEntry = entries[0];
    let boundTop = intersectionObserverEntry.boundingClientRect.top;
    // let boundTop = $target.getBoundingClientRect().top;
    // let boundTop = $affixLine.getBoundingClientRect().top;
    if (position === "top") {
      /* top */
      if (boundTop < thresholdMaxValue) {
        // 固定
        $affixLine.style.height = DOMUtils.outerHeight($target) + "px";
        $target.classList.add("affix-container-top-fixed");
      } else {
        // 取消固定
        $affixLine.style.height = "";
        $target.classList.remove("affix-container-top-fixed");
      }
    } else {
      /* bottom */
    }
  }, 0);
  const observer = new IntersectionObserver(
    (entries) => {
      lockFunc.run(entries);
    },
    {
      root: config.root,
      threshold: threshold, // threshold 设置为 1 表示目标元素完全可见时触发回调函数
      rootMargin: rootMargin, // rootMargin 设置为 0px 表示目标元素与视窗之间的距离
    }
  );

  observer.observe($affixLine);
};
