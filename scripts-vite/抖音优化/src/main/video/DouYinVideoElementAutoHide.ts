import { $, addStyle, DOMUtils, utils } from "@/env";
import { DouYinElement } from "@/utils/DouYinElement";
import { Panel } from "@components/setting/panel";

/**
 * 自动隐藏元素
 * @param delayTimeKey 延迟时间
 * @param selectors 选择器
 */
export const DouYinVideoElementAutoHide = (delayTimeKey: string, selectors: string[]) => {
  const isInjectAttrName = "data-is-inject-mouse-hide";
  const opacityShowAttrName = "data-opacity-show";
  const opacityHideAttrName = "data-opacity-hide";
  const result: any[] = [];
  const delayTime = () => Panel.getValue<number>(delayTimeKey);

  const hideStyle = (__delayTime__ = delayTime()) => {
    if (__delayTime__ === 0) {
      // 直接隐藏
      return /*css*/ `
            ${selectors.join(",")}{
                opacity: 0 !important;
                
                &:hover,
                &[${opacityShowAttrName}]{
                    opacity: 1 !important;
                }
                ${__delayTime__ === 0 ? "transition: none !important;" : ""}
            }
            `;
    } else {
      // 主动添加隐藏属性才会隐藏
      return /*css*/ `
            ${selectors.join(",")}{
                &[${opacityHideAttrName}]{
                    opacity: 0 !important;
                }
                &:hover{
                    opacity: 1 !important;
                }
            }
            `;
    }
  };
  const $style = addStyle(hideStyle());
  const listenerId = Panel.addValueChangeListener(delayTimeKey, (key, newValue, oldValue) => {
    DOMUtils.html($style, hideStyle(newValue));
  });
  const lockFn = new utils.LockFunction(() => {
    /** 视频信息列表 */
    selectors.forEach((selector) => {
      const $el = $<HTMLElement>(`${selector.trim()}:not([${isInjectAttrName}])`);
      if (!$el) {
        return;
      }

      $el.setAttribute(isInjectAttrName, "");
      let timeId: number | undefined = 0;
      /**
       * 显示
       */
      const show = () => {
        utils.workerClearTimeout(timeId);
        if (delayTime() === 0) {
          // 默认隐藏的，强制显示
          $el.setAttribute(opacityShowAttrName, "");
        } else {
          // 移除隐藏的
          $el.removeAttribute(opacityHideAttrName);
        }
      };
      /**
       * 隐藏
       */
      const hide = (enableDelayTime: boolean = false) => {
        utils.workerClearTimeout(timeId);
        if (enableDelayTime) {
          timeId = utils.workerSetTimeout(() => {
            hide(false);
          }, delayTime());
          return;
        }
        if (delayTime() === 0) {
          // 这个是默认隐藏，移除显示的
          $el.removeAttribute(opacityShowAttrName);
        } else {
          // 隐藏
          $el.setAttribute(opacityHideAttrName, "");
        }
      };
      const showListener = DOMUtils.on($el, ["mouseenter", "touchstart"], (event) => {
        show();
      });
      const hideListener = DOMUtils.on($el, ["mouseleave", "touchend", "touchcancel"], (event) => {
        hide();
      });
      const interObserver = new IntersectionObserver(
        (entries) => {
          const intersection = entries[0];
          const intersectionObserverInfo = Reflect.get($el, "data-intersection-observer") || [];
          if (intersection.isIntersecting) {
            // 进入视图 强制显示，然后延迟隐藏
            show();
            hide(true);
            intersectionObserverInfo.push({
              time: utils.formatTime(),
              message: "进入视图",
              isIntersecting: intersection.isIntersecting,
            });
          } else {
            // 离开视图 直接显示吧，下次显示就不用强制过渡显示了
            // show();
            intersectionObserverInfo.push({
              time: utils.formatTime(),
              message: "离开视图",
              isIntersecting: intersection.isIntersecting,
            });
          }
          Reflect.set($el, "data-intersection-observer", intersectionObserverInfo);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.03,
        }
      );
      interObserver.observe($el);

      result.push(() => {
        showListener.off();
        hideListener.off();
        interObserver.unobserve($el);
        interObserver.disconnect();
      });
    });
  });
  const observer = utils.mutationObserver(document.body || document.documentElement, {
    config: {
      subtree: true,
      childList: true,
    },
    immediate: true,
    callback: (mutation, observer) => {
      lockFn.run();
    },
  });

  result.push(() => {
    Panel.removeValueChangeListener(listenerId);
    observer?.disconnect();
  }, $style);
  return result;
};
