import { $, addStyle, DOMUtils, utils } from "@/env";
import { Panel } from "@components/setting/panel";

export const DouYinVideoElementAutoHideInjectAttr = "data-is-inject-mouse-hide";

/**
 * 自动隐藏元素
 * @param delayTimeKey 延迟时间
 * @param selectors 选择器
 * @param opacityIsImportant 是否强制应用透明度
 */
export const DouYinVideoElementAutoHide = (
  delayTimeKey: string,
  selectors: string[],
  opacityIsImportant: boolean = true
) => {
  const opacityShowAttrName = "data-opacity-show";
  const opacityHideAttrName = "data-opacity-hide";
  const result: any[] = [];
  const delayTime = Panel.getDynamicValue<number>(delayTimeKey, Panel.getDefaultValue(delayTimeKey));

  const hideCSSText = (__delayTime__ = delayTime.value) => {
    const importantCSSText = opacityIsImportant ? " !important" : "";
    if (__delayTime__ === 0) {
      // 直接隐藏
      return /*css*/ `
            ${selectors.join(",")}{
                opacity: 0${importantCSSText};
                transition: ${__delayTime__ === 0 ? "none !important;" : "opacity .3s linear !important;"}

                &[${opacityHideAttrName}]{
                    opacity: 0${importantCSSText};
                }
                &[${opacityShowAttrName}],
                &:hover{
                    opacity: 1${importantCSSText};
                }
            }
            `;
    } else {
      // 主动添加隐藏属性才会隐藏
      return /*css*/ `
            ${selectors.join(",")}{
                transition: opacity .3s linear !important;

                &[${opacityHideAttrName}]{
                    opacity: 0${importantCSSText};
                }
                &[${opacityShowAttrName}]{
                    opacity: 1${importantCSSText};
                }
                &:hover{
                    opacity: 1${importantCSSText};
                }
            }
            `;
    }
  };
  const $style = addStyle(hideCSSText());
  result.push($style);
  const listenerId = Panel.addValueChangeListener(delayTimeKey, (key, newValue) => {
    DOMUtils.html($style, hideCSSText(newValue));
  });
  result.push(() => {
    Panel.removeValueChangeListener(listenerId);
  });
  const lockFn = new utils.LockFunction(() => {
    /** 视频信息列表 */
    selectors.forEach((selector) => {
      const $el = $<HTMLElement>(`${selector.trim()}:not([${DouYinVideoElementAutoHideInjectAttr}])`);
      if (!$el) return;
      if ($el.querySelector(`[${DouYinVideoElementAutoHideInjectAttr}]`)) return;
      if ($el.closest(`[${DouYinVideoElementAutoHideInjectAttr}]`)) return;
      $el.setAttribute(DouYinVideoElementAutoHideInjectAttr, "");

      let timeId: number = 0;
      /**
       * 显示
       */
      const show = () => {
        clearTimeout(timeId);
        if (delayTime.value === 0) {
          // 默认隐藏的，强制显示
          if (!$el.hasAttribute(opacityShowAttrName)) $el.setAttribute(opacityShowAttrName, "");
        } else {
          // 移除隐藏
          if ($el.hasAttribute(opacityHideAttrName)) $el.removeAttribute(opacityHideAttrName);
          // 添加强制显示
          if (!$el.hasAttribute(opacityShowAttrName)) $el.setAttribute(opacityShowAttrName, "");
        }
      };
      /**
       * 隐藏
       */
      const hide = (isEnableDelayTime: boolean = false) => {
        if (isEnableDelayTime) {
          timeId = setTimeout(() => {
            hide(!isEnableDelayTime);
          }, delayTime.value);
          return;
        }
        // 光标停在工具栏上时保持可见，避免准备点击评论按钮时闪退。
        if ($el.matches(":hover")) return;
        if (delayTime.value === 0) {
          // 这个是默认隐藏，移除显示的
          if ($el.hasAttribute(opacityShowAttrName)) $el.removeAttribute(opacityShowAttrName);
        } else {
          // 隐藏
          if (!$el.hasAttribute(opacityHideAttrName)) $el.setAttribute(opacityHideAttrName, "");
          // 移除强制显示
          if ($el.hasAttribute(opacityShowAttrName)) $el.removeAttribute(opacityShowAttrName);
        }
      };
      // 光标从视频移向点赞/评论工具栏时，持续刷新隐藏倒计时。
      // 只监听所属播放器，不监听整个 document，也限制触发频率。
      const $player = $el.closest<HTMLElement>(
        '#sliderVideo, #slideMode, [data-e2e="video-detail"], .douyin-player, .playerContainer'
      );
      let lastMove = 0;
      const onPointerMove = () => {
        const now = Date.now();
        if (now - lastMove < 150) return;
        lastMove = now;
        show();
        hide(true);
      };
      const onPointerEnter = () => {
        lastMove = 0;
        onPointerMove();
      };
      const onPointerLeave = () => {
        show();
        hide(true);
      };
      $player?.addEventListener("pointermove", onPointerMove, { passive: true });
      $el.addEventListener("pointerenter", onPointerEnter);
      $el.addEventListener("pointerleave", onPointerLeave);
      const interObserver = new IntersectionObserver(
        (entries) => {
          const intersection = entries[0];
          if (intersection.isIntersecting) {
            // 进入视图 强制显示，然后延迟隐藏
            show();
            hide(true);
          } else {
            // 离开视图 直接显示吧，下次显示就不用强制过渡显示了
            // show();
          }
        },
        {
          root: null,
          rootMargin: "50px",
          threshold: 0.1,
        }
      );
      interObserver.observe($el);

      result.push(() => {
        clearTimeout(timeId);
        $player?.removeEventListener("pointermove", onPointerMove);
        $el.removeEventListener("pointerenter", onPointerEnter);
        $el.removeEventListener("pointerleave", onPointerLeave);
        interObserver.unobserve($el);
        interObserver.disconnect();
      });
    });
  });
  // 直播聊天的频繁 DOM 更新不需要每次都重新扫描视频控件。
  let scanTimer: number | null = null;
  const scheduleScan = () => {
    if (scanTimer !== null) return;
    scanTimer = window.setTimeout(() => {
      scanTimer = null;
      lockFn.run();
    }, 250);
  };
  const observer = utils.mutationObserver(document.body || document.documentElement, {
    config: {
      subtree: true,
      childList: true,
    },
    immediate: true,
    callback: scheduleScan,
  });

  result.push(() => {
    if (scanTimer !== null) window.clearTimeout(scanTimer);
    observer?.disconnect();
  });

  return result;
};
