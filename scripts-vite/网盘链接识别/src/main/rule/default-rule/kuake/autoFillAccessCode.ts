import { DOMUtils, log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_kuake = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname === "pan.quark.cn") {
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.onReady(() => {
      DOMUtils.waitNode<HTMLInputElement>(
        "#ice-container input.ant-input[class*=ShareReceive][placeholder*='提取码']"
      ).then(($el) => {
        ReactUtils.waitReactPropsToSet($el, ["reactProps", "reactEventHandlers"], {
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
            let onChange: Function = reactPropInst?.onChange || reactPropInst?.memoizedProps?.onChange;
            onChange({
              currentTarget: $el,
              target: $el,
            });
            Qmsg.success("自动填充访问码");
          },
        });
      });
    });
  }
};
