import { $, DOMUtils, log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_weiyun = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname === "share.weiyun.com") {
    // 桌面端
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.waitNode<HTMLInputElement>("#app input.input-txt", 10000).then(($el) => {
      if (!$el) return;
      if (!utils.isVisible($el)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      $el.value = netDiskInfo.accessCode;
      DOMUtils.emit($el, "input");
      DOMUtils.emit($el, "change");
      setTimeout(() => {
        $<HTMLElement>(".form-item button.btn-main")!.click();
      }, 500);
    });

    // ------------------------------------

    // 移动端
    DOMUtils.waitNode<HTMLInputElement>(".input-wrap input.pw-input", 10000).then(($el) => {
      if (!$el) return;
      if (!utils.isVisible($el)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      $el.value = netDiskInfo.accessCode;
      DOMUtils.emit($el, "input");
      DOMUtils.emit($el, "change");
      setTimeout(() => {
        $<HTMLElement>(".pw-btn-wrap button.btn")!.click();
      }, 500);
    });
  }
};
