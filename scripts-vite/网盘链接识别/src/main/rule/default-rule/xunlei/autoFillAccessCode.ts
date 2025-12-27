import { $, DOMUtils, log, utils } from "@/env";

export const NetDiskAutoFillAccessCode_xunlei = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname === "pan.xunlei.com") {
    /* 桌面端 */
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.waitNode<HTMLInputElement>("#__layout div.pass-input-wrap input.td-input__inner").then((element) => {
      if (!utils.isVisible(element)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      log.error("输入框不可见，不输入密码");
      element.value = netDiskInfo.accessCode;
      DOMUtils.emit(element, "input");
      DOMUtils.emit(element, "change");
      setTimeout(() => {
        $<HTMLElement>("#__layout div.pass-input-wrap button.td-button")!.click();
      }, 500);
    });

    /* ------------------------------------ */

    /* 移动端 */
    DOMUtils.waitNode<HTMLInputElement>("#__layout div.pass-wrapper input.td-input__inner").then((element) => {
      if (!utils.isVisible(element)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      log.error("输入框不可见，不输入密码");
      element.value = netDiskInfo.accessCode;
      DOMUtils.emit(element, "input");
      DOMUtils.emit(element, "change");
      setTimeout(() => {
        $<HTMLElement>("#__layout div.pass-wrapper button.td-button")!.click();
      }, 500);
    });
  }
};
