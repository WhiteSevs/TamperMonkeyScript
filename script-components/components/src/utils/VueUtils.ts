import type { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { unsafeWindow } from "ViteGM";
import Qmsg from "qmsg";
import { DOMUtils, log, utils } from "../env.base";

/** 等待设置vue某个值的配置 */
type VueCheckOption = {
  /**
   * 在检测前输出日志
   */
  msg?: string;
  /**
   * 检测属性的函数
   * @param vueInst vue实例
   * @param $el 目标元素
   */
  check(vueInst: Vue2Instance, $el: HTMLElement): boolean;
  /**
   * 进行设置
   * @param vueInstance vue实例
   * @param $el 目标元素
   */
  set(vueInst: Vue2Instance, $el: HTMLElement): void;
  /**
   * 当检测失败/超时触发该回调
   */
  failWait?: (
    /** 是否是检测超时 true超时，false未检测到vue实例 */
    isTimeout: boolean
  ) => void;
};

const VueUtils = {
  /**
   * 获取vue2实例
   * @param $el
   */
  getVue($el: Element | null | EventTarget | HTMLElement): Vue2Instance | undefined {
    if ($el == null) {
      return;
    }
    // @ts-expect-error
    return $el["__vue__"] || $el["__Ivue__"] || $el["__IVue__"];
  },
  /**
   * 获取vue3实例
   * @param $el
   */
  getVue3($el: Element | null | EventTarget | HTMLElement) {
    if ($el == null) {
      return;
    }
    // @ts-expect-error
    return $el["__vueParentComponent"];
  },
  /**
   * 等待vue属性并进行设置
   * @param $el 目标对象
   * @param checkOption 需要设置的配置
   */
  waitVuePropToSet(
    $el: HTMLElement | (() => HTMLElement | null | undefined) | string,
    checkOption: VueCheckOption[] | VueCheckOption
  ) {
    if (!Array.isArray(checkOption)) {
      checkOption = [checkOption];
    }
    /**
     * 获取检测的元素对象
     */
    function getTarget() {
      let __target__ = null;
      if (typeof $el === "string") {
        __target__ = DOMUtils.selector<HTMLElement>($el);
      } else if (typeof $el === "function") {
        __target__ = $el();
      } else if ($el instanceof HTMLElement) {
        __target__ = $el;
      }
      return __target__;
    }
    checkOption.forEach((needSetOption) => {
      if (typeof needSetOption.msg === "string") {
        log.info(needSetOption.msg);
      }
      /**
       * 检测vue的实例
       */
      const checkTarget = function (): {
        /** 是否成功检测到目标属性 */
        status: boolean;
        /** 是否检测超时 */
        isTimeout: boolean;
        /** 实例 */
        inst: any;
        /** 目标元素 */
        $el: HTMLElement | null | undefined;
      } {
        const $targetEl = getTarget();
        if ($targetEl == null) {
          return {
            status: false,
            isTimeout: true,
            inst: null,
            $el: $targetEl,
          };
        }
        const vueInst = VueUtils.getVue($targetEl);
        if (vueInst == null) {
          return {
            status: false,
            isTimeout: false,
            inst: null,
            $el: $targetEl,
          };
        }
        const checkResult = Boolean(needSetOption.check(vueInst, $targetEl));
        return {
          status: checkResult,
          isTimeout: false,
          inst: vueInst,
          $el: $targetEl,
        };
      };
      utils
        .waitVueByInterval(
          () => {
            return getTarget();
          },
          () => checkTarget().status,
          250,
          10000
        )
        .then(() => {
          const checkTargetResult = checkTarget();
          if (checkTargetResult.status) {
            const vueInst = checkTargetResult.inst;
            needSetOption.set(vueInst, checkTargetResult.$el!);
          } else {
            if (typeof needSetOption.failWait === "function") {
              needSetOption.failWait(checkTargetResult.isTimeout);
            }
          }
        });
    });
  },
  /**
   * 观察vue属性的变化
   * @param $el 目标对象
   * @param key 需要观察的属性
   * @param callback 监听回调
   * @param watchConfig 监听配置
   * @param failWait 当检测失败/超时触发该回调
   */
  watchVuePropChange(
    $el: HTMLElement | (() => HTMLElement | null | undefined) | string,
    key: string | string[] | ((vueInst: Vue2Instance) => any),
    callback: (vueInst: Vue2Instance, newValue: any, oldValue: any) => void,
    watchConfig?: {
      /** 是否立即执行 @default true */
      immediate?: boolean;
      /** 是否深度监听 @default false */
      deep?: boolean;
    },
    failWait?: VueCheckOption["failWait"]
  ) {
    let config = utils.assign(
      {
        immediate: true,
        deep: false,
      },
      watchConfig || {}
    );
    return new Promise<Function | null>((resolve) => {
      VueUtils.waitVuePropToSet($el, {
        check(vueInstance) {
          return typeof vueInstance?.$watch === "function";
        },
        set(vueInstance) {
          let removeWatch = null;
          if (typeof key === "function") {
            removeWatch = vueInstance.$watch(
              () => {
                return key(vueInstance);
              },
              (newValue, oldValue) => {
                callback(vueInstance, newValue, oldValue);
              },
              config
            );
          } else {
            removeWatch = vueInstance.$watch(
              key,
              (newValue, oldValue) => {
                callback(vueInstance, newValue, oldValue);
              },
              config
            );
          }
          resolve(removeWatch);
        },
        failWait: failWait,
      });
    });
  },
  /**
   * 前往网址
   * @param $el 包含vue属性的元素
   * @param path 需要跳转的路径
   * @param [useRouter=false] 是否强制使用Vue的Router来进行跳转，默认false
   */
  goToUrl($el: Element, path: string, useRouter = false) {
    if ($el == null) {
      Qmsg.error("跳转Url: $vueNode为空");
      log.error("跳转Url: $vueNode为空：" + path);
      return;
    }
    let vueInstance = VueUtils.getVue($el);
    if (vueInstance == null) {
      Qmsg.error("获取vue属性失败", { consoleLogContent: true });
      return;
    }
    let $router = vueInstance.$router;
    let isBlank = true;
    log.info("即将跳转URL：" + path);
    if (useRouter) {
      isBlank = false;
    }
    if (isBlank) {
      /* 新标签打开 */
      window.open(path, "_blank");
    } else {
      /* 本页打开 */
      if (path.startsWith("http") || path.startsWith("//")) {
        if (path.startsWith("//")) {
          path = window.location.protocol + path;
        }
        let urlObj = new URL(path);
        if (urlObj.origin === window.location.origin) {
          /* 同域名 */
          path = urlObj.pathname + urlObj.search + urlObj.hash;
        } else {
          log.info("不同域名，直接本页打开，不用Router：" + path);
          window.location.href = path;
          return;
        }
      }
      log.info("$router push跳转Url：" + path);
      $router.push(path);
    }
  },
  /**
   * 手势返回
   * @param option 配置
   */
  hookGestureReturnByVueRouter(option: {
    /** vue实例 */
    vueInst: Vue2Instance;
    /** 改变的hash值 */
    hash: string;
    /**
     *
     * @param isFromPopState 是否由popstate触发
     * @returns
     * + true 阻止浏览器后退
     */
    callback: (isFromPopState: boolean) => boolean;
  }) {
    /**
     * 浏览器地址改变事件
     */
    function popstateEvent() {
      log.success("触发popstate事件");
      resumeBack(true);
    }

    /**
     * 禁止浏览器后退按钮
     */
    function banBack() {
      /* 监听地址改变 */
      log.success("监听地址改变");
      option.vueInst.$router.history.push(option.hash);
      DOMUtils.on(unsafeWindow, "popstate", popstateEvent);
    }

    /**
     * 允许浏览器后退并关闭小窗
     * @param [isFromPopState=false] 是否由popstate触发
     */
    async function resumeBack(isFromPopState = false) {
      DOMUtils.off(unsafeWindow, "popstate", popstateEvent);
      let callbackResult = option.callback(isFromPopState);
      if (callbackResult) {
        return;
      }
      while (true) {
        if (option.vueInst.$router.history.current.hash === option.hash) {
          log.info("后退！");
          option.vueInst.$router.back();
          await utils.sleep(250);
        } else {
          return;
        }
      }
    }
    banBack();
    return {
      resumeBack,
    };
  },
};

export { VueUtils, type VueCheckOption };
