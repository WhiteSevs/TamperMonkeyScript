import { $, DOMUtils, log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_chengtong = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  log.success("自动填写链接", netDiskInfo);
  DOMUtils.waitNode<HTMLInputElement>("#passcode", 10000).then(($el) => {
    if (!$el) return;
    if (!utils.isVisible($el)) {
      log.error("输入框不可见，不输入密码");
      return;
    }
    Qmsg.success("自动填充访问码");
    $el.value = netDiskInfo.accessCode;
    DOMUtils.emit($el, "input");
    $<HTMLElement>("#main-content .form-group button.btn[type=button]")!.click();
  });
};
