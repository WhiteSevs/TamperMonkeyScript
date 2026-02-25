import { $, DOMUtils, log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_lanzou = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname.match(/lanzou[a-z]{1}.com/gi)) {
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.waitNode<HTMLInputElement>("#pwd", 10000).then(($el) => {
      if (!$el) return;
      if (!utils.isVisible($el)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      $el.value = netDiskInfo.accessCode;
      DOMUtils.emit($el, "input");
      ($<HTMLElement>("#passwddiv div.passwddiv-input > div") || ($el.nextElementSibling as HTMLElement))?.click();
      $<HTMLElement>("#sub")?.click();
    });
    DOMUtils.waitNode<HTMLInputElement>("#f_pwd", 10000).then(($el) => {
      if (!$el) return;
      utils.mutationObserver($el, {
        config: {
          attributes: true,
          attributeFilter: ["style"],
        },
        callback: (mutations, observer) => {
          const $input = $<HTMLInputElement>("#f_pwd #pwd")!;
          if (!utils.isVisible($input)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          observer.disconnect();
          Qmsg.success("自动填充访问码");
          $input.value = netDiskInfo.accessCode;
          DOMUtils.emit($input, "input");
          $<HTMLElement>("#f_pwd #sub")?.click();
        },
      });
    });
  }
};
