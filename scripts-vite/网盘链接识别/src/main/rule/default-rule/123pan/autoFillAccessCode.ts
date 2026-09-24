import { $, DOMUtils, log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_123pan = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname === "www.123pan.com") {
    // 桌面端
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.onReady(() => {
      DOMUtils.waitAnyNode<HTMLInputElement>(["input.ant-input[type=text][placeholder*='提取码']"], 10000).then(
        ($el) => {
          if (!$el) return;
          ReactUtils.waitReactPropsToSet($el, ["reactProps", "reactFiber"], {
            check(reactPropInst) {
              return (
                typeof reactPropInst?.onChange === "function" ||
                typeof reactPropInst?.memoizedProps?.onChange === "function"
              );
            },
            async set(reactPropInst) {
              if (!utils.isVisible($el)) {
                log.error("输入框不可见，不输入密码");
                return;
              }
              $el.value = netDiskInfo.accessCode;
              const onChange: Function = reactPropInst?.onChange || reactPropInst?.memoizedProps?.onChange;
              onChange({
                currentTarget: $el,
                target: $el,
              });
              Qmsg.success("自动填充访问码");
              const $submit = $el.nextElementSibling as HTMLElement | null;
              if (!$submit) {
                Qmsg.error("提交按钮不存在");
                return;
              }
              await utils.sleep(1000);
              $submit.click();
            },
          });
        }
      );
    });
  } else if (location.hostname.endsWith("share.123pan.cn") && location.pathname.startsWith("/123pan/")) {
    // 桌面端 & 移动端
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.onReady(() => {
      DOMUtils.waitAnyNode<HTMLInputElement>(["input[type=text][placeholder*='提取码']"], 10000).then(async ($el) => {
        if (!$el) return;
        ReactUtils.waitReactPropsToSet($el, ["reactProps", "reactFiber"], {
          check(reactPropInst) {
            return (
              typeof reactPropInst?.onChange === "function" ||
              typeof reactPropInst?.memoizedProps?.onChange === "function"
            );
          },
          async set(reactPropInst) {
            if (!utils.isVisible($el)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            $el.value = netDiskInfo.accessCode;
            const onChange: Function = reactPropInst?.onChange || reactPropInst?.memoizedProps?.onChange;
            onChange({
              currentTarget: $el,
              target: $el,
            });
            Qmsg.success("自动填充访问码");
            const $submit = $("button.submitCode") || ($("button.app-input-button") as HTMLElement | null);
            if (!$submit) {
              Qmsg.error("提交按钮不存在");
              return;
            }
            await utils.sleep(1000);
            $submit.click();
          },
        });
      });
    });
  }
};
