import { DOMUtils, log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_123pan = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname === "www.123pan.com") {
    /* 桌面端 */
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.onReady(() => {
      DOMUtils.waitAnyNode<HTMLInputElement>([
        "#app .ca-fot input.ant-input[type=text][placeholder*='提取码']",
        "#app .appinput input.ant-input[type=text][placeholder*='提取码']",
      ]).then(($el) => {
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
            let onChange: Function = reactPropInst?.onChange || reactPropInst?.memoizedProps?.onChange;
            onChange({
              currentTarget: $el,
              target: $el,
            });
            Qmsg.success("自动填充访问码");
            let $submit = $el.nextElementSibling as HTMLElement | null;
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
