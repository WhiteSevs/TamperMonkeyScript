import { DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { ReactUtils } from "@components/utils/ReactUtils";

export const DouYinDanmaku = {
  init() {
    Panel.execMenu("dy-live-danmaku-block-gift", () => {
      return this.blockGift();
    });
    Panel.execMenu("dy-live-danmaku-block-lucky-bag", () => {
      return this.blockLuckyBag();
    });
  },
  /**
   * 【屏蔽】送礼信息
   */
  blockGift() {
    log.info(`【屏蔽】送礼信息`);
    ReactUtils.waitReactPropsToSet('[data-e2e="danmaku-setting-icon"]', "reactProps", {
      check(reactPropInst, $el) {
        return typeof reactPropInst?.onMouseEnter === "function" && typeof reactPropInst?.onMouseLeave === "function";
      },
      set(reactPropInst, $el) {
        log.info(`【屏蔽】送礼信息-弹出弹幕设置面板`);
        const onMouseEnter = reactPropInst.onMouseEnter;
        const onMouseLeave = reactPropInst.onMouseLeave;
        onMouseEnter();
        DOMUtils.waitNode(
          () =>
            DOMUtils.selector<HTMLElement>(
              'xpath://div[@data-e2e="danmaku-setting-icon"]/following::span[contains(text(),"送礼信息")]'
            ),
          2000
        ).then(($el) => {
          try {
            if (!$el) {
              log.error(`【屏蔽】送礼信息-未找到送礼信息按钮`);
              return;
            }
            const $next = DOMUtils.next($el);
            if (!$next) {
              log.error(`【屏蔽】送礼信息-未找到送礼信息的Checkbox按钮`);
              return;
            }
            const rect = utils.getReactInstance($next);
            const onClick = rect?.reactFiber?.child?.child?.memoizedProps?.onClick;
            const checked = rect?.reactFiber?.child?.memoizedProps?.checked;
            if (typeof checked === "boolean" && checked && typeof onClick === "function") {
              log.success(`点击关闭 送礼信息`);
              onClick();
            }
          } catch (error) {
            log.error(error);
          } finally {
            onMouseLeave();
          }
        });
      },
    });
  },
  /**
   * 【屏蔽】福袋口令
   */
  blockLuckyBag() {
    log.info(`【屏蔽】福袋口令`);
    ReactUtils.waitReactPropsToSet('[data-e2e="danmaku-setting-icon"]', "reactProps", {
      check(reactPropInst, $el) {
        return typeof reactPropInst?.onMouseEnter === "function" && typeof reactPropInst?.onMouseLeave === "function";
      },
      set(reactPropInst, $el) {
        log.info(`【屏蔽】福袋口令-弹出弹幕设置面板`);
        const onMouseEnter = reactPropInst.onMouseEnter;
        const onMouseLeave = reactPropInst.onMouseLeave;
        onMouseEnter();
        DOMUtils.waitNode(
          () =>
            DOMUtils.selector<HTMLElement>(
              'xpath://div[@data-e2e="danmaku-setting-icon"]/following::span[contains(text(),"福袋口令")]'
            ),
          2000
        ).then(($el) => {
          try {
            if (!$el) {
              log.error(`【屏蔽】福袋口令-未找到福袋口令按钮`);
              return;
            }
            const $next = DOMUtils.next($el);
            if (!$next) {
              log.error(`【屏蔽】福袋口令-未找到福袋口令的Checkbox按钮`);
              return;
            }
            const rect = utils.getReactInstance($next);
            const onClick = rect?.reactFiber?.child?.child?.memoizedProps?.onClick;
            const checked = rect?.reactFiber?.child?.memoizedProps?.checked;
            if (typeof checked === "boolean" && checked && typeof onClick === "function") {
              log.success(`福袋口令：点击关闭`);
              onClick();
            }
          } catch (error) {
            log.error(error);
          } finally {
            onMouseLeave();
          }
        });
      },
    });
  },
};
