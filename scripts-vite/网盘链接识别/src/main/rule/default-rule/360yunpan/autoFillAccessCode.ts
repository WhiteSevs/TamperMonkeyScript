import { $, DOMUtils, log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_360yunpan = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname.endsWith(".link.yunpan.com")) {
    // 桌面端
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.waitNode<HTMLInputElement>("#extract-bg-container input.pwd-input", 10000).then(($el) => {
      if (!$el) return;
      if (!utils.isVisible($el)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      $el.value = netDiskInfo.accessCode;
      DOMUtils.emit($el, "input");
      const $submit = $<HTMLInputElement>("#extract-bg-container input.submit-btn");
      $submit?.click();
    });

    // 移动端
    DOMUtils.waitNode<HTMLInputElement>("#extractForm input.pwd-input", 10000).then(($el) => {
      if (!$el) return;
      if (!utils.isVisible($el)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      $el.value = netDiskInfo.accessCode;
      DOMUtils.emit($el, "input");
      const $submit = $<HTMLInputElement>("#extractForm input.submit-btn");
      $submit?.click();
    });
  }
};
