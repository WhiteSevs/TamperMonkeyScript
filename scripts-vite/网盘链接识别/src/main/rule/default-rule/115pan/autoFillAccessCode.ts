import { $, DOMUtils, log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_115pan = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (["115.com", "115cdn.com", "anxia.com"].includes(window.location.hostname)) {
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.waitNode<HTMLInputElement>("input.text", 10000).then(($el) => {
      if (!$el) return;
      if (!utils.isVisible($el)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      $el.value = netDiskInfo.accessCode;
      DOMUtils.trigger($el, "input");
      $<HTMLElement>("#js-share_code div.form-decode div.submit a")!.click();
    });
  }
};
