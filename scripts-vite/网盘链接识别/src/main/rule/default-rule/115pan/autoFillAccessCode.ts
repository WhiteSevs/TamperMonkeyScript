import { DOMUtils, log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_115pan = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (["115.com", "115cdn.com", "anxia.com"].includes(window.location.hostname)) {
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.onReady(() => {
      DOMUtils.waitNode<HTMLInputElement>("input[placeholder*='访问码']", 10000).then(async ($el) => {
        if (!$el) return;
        if (!utils.isVisible($el)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $el.value = netDiskInfo.accessCode;
        DOMUtils.emit($el, "input");
        ReactUtils.waitReactPropsToSet($el, "reactProps", {
          check(reactPropInst) {
            const flag = typeof reactPropInst?.onChange === "function";
            return flag;
          },
          async set(reactPropInst, $el) {
            const onChange = reactPropInst?.onChange;
            onChange({
              target: $el,
            });
            await utils.sleep(800);
            const $button = $el.parentElement?.nextElementSibling;
            if ($button instanceof HTMLButtonElement) {
              $button.click();
            }
          },
        });
      });
    });
  }
};
