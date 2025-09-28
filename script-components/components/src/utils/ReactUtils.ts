import { DOMUtils, log, utils } from "../base.env";

/**
 * react在元素上储存的实例对象
 */
type ReactInst = ReturnType<typeof utils.getReactInstance>;
/**
 * 等待react实例的属性的配置
 */
type ReactCheckPropOption = {
  /**
   * 在检测前输出日志
   */
  msg?: string;
  /**
   * 检测属性的函数
   * @param reactPropInst react实例的目标属性实例
   * @param $el 目标元素
   */
  check(reactPropInst: any, $el: HTMLElement): boolean;
  /**
   * 进行设置
   * @param reactPropInst react实例的目标属性实例
   * @param $el 目标元素
   */
  set(reactPropInst: any, $el: HTMLElement): void;
  /**
   * 当检测失败/超时触发该回调
   */
  failWait?: (
    /** 是否是检测超时 true超时，false未检测到vue实例 */
    isTimeout: boolean
  ) => void;
};

export const ReactUtils = {
  /**
   * 等待react某个属性并进行设置
   * @param $el 需要检测的元素对象
   * @param reactPropNameOrNameList react属性的名称
   * @param checkOption 检测的配置项
   */
  async waitReactPropsToSet(
    $el: HTMLElement | (() => HTMLElement | null | undefined) | string,
    reactPropNameOrNameList: keyof ReactInst | (keyof ReactInst)[],
    checkOption: ReactCheckPropOption[] | ReactCheckPropOption
  ): Promise<void> {
    if (!Array.isArray(reactPropNameOrNameList)) {
      reactPropNameOrNameList = [reactPropNameOrNameList];
    }
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
    if (typeof $el === "string") {
      let $ele = await DOMUtils.waitNode($el, 10000);
      if (!$ele) {
        return;
      }
    }
    checkOption.forEach((needSetOption) => {
      if (typeof needSetOption.msg === "string") {
        log.info(needSetOption.msg);
      }
      /**
       * 检测react实例的属性
       */
      function checkTarget(): {
        /** 是否成功检测到目标属性 */
        status: boolean;
        /** 是否检测超时 */
        isTimeout: boolean;
        /** 实例 */
        inst: any;
        /** 目标元素 */
        $el: HTMLElement | null | undefined;
      } {
        let $targetEl = getTarget();
        if ($targetEl == null) {
          return {
            status: false,
            isTimeout: true,
            inst: null,
            $el: $targetEl,
          };
        }
        let reactInst = utils.getReactInstance($targetEl);
        if (reactInst == null) {
          return {
            status: false,
            isTimeout: false,
            inst: null,
            $el: $targetEl,
          };
        }
        let findPropNameIndex = Array.from(reactPropNameOrNameList).findIndex((__propName__) => {
          let reactPropInst = reactInst[__propName__ as keyof typeof reactInst];
          if (!reactPropInst) {
            // 属性不存在
            return false;
          }
          let checkResult = needSetOption.check(reactPropInst, $targetEl);
          checkResult = Boolean(checkResult);
          return checkResult;
        });
        let reactPropName = reactPropNameOrNameList[findPropNameIndex] as keyof typeof reactInst;
        let reactPropInst = reactInst[reactPropName];
        return {
          status: findPropNameIndex !== -1,
          isTimeout: false,
          inst: reactPropInst,
          $el: $targetEl,
        };
      }
      utils
        .waitPropertyByInterval(
          () => {
            return getTarget();
          },
          () => checkTarget().status,
          250,
          10000
        )
        .then(() => {
          let checkTargetResult = checkTarget();
          if (checkTargetResult.status) {
            let reactInst = checkTargetResult.inst;
            needSetOption.set(reactInst, checkTargetResult.$el!);
          } else {
            if (typeof needSetOption.failWait === "function") {
              needSetOption.failWait(checkTargetResult.isTimeout);
            }
          }
        });
    });
  },
};
