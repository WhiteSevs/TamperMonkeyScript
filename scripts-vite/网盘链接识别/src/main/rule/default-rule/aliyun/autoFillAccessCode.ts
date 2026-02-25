import { $, DOMUtils, log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_aliyun = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname === "www.aliyundrive.com" || window.location.hostname === "www.alipan.com") {
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.onReady(() => {
      DOMUtils.waitAnyNode<HTMLInputElement>(
        ["#root input.ant-input[placeholder*='提取码']", "#root input[name=pwd][placeholder*='提取码']"],
        10000
      ).then(($el) => {
        if (!$el) return;
        ReactUtils.waitReactPropsToSet($el, ["reactProps", "reactFiber"], {
          check(reactPropInst) {
            return (
              typeof reactPropInst?.onChange === "function" ||
              typeof reactPropInst?.memoizedProps?.onChange === "function"
            );
          },
          set(reactPropInst) {
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
            const $submit = $<HTMLElement>('#root button[type="submit"]');
            if (!$submit) {
              Qmsg.error("提交按钮不存在");
              return;
            }
            $submit.click();
          },
        });
      });
    });
  }
};
