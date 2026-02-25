import { $, DOMUtils, log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_baidu = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (
    window.location.hostname === "pan.baidu.com" &&
    window.location.pathname === "/share/init" &&
    window.location.search.startsWith("?surl=")
  ) {
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.waitNode<HTMLInputElement>("div.verify-form #accessCode", 10000).then(($el) => {
      if (!$el) return;
      if (!utils.isVisible($el)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      $el.value = netDiskInfo.accessCode;
      DOMUtils.emit($el, "input");
      $<HTMLElement>("div.verify-form #submitBtn")?.click();
    });
  }
  if (
    window.location.hostname === "pan.baidu.com" &&
    window.location.pathname === "/wap/init" &&
    window.location.search.startsWith("?surl=")
  ) {
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.waitNode<HTMLInputElement>(
      "div.extractWrap div.extract-content div.extractInputWrap.extract input[type=text]",
      10000
    ).then(($el) => {
      if (!$el) return;
      if (!utils.isVisible($el)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      $el.value = netDiskInfo.accessCode;
      DOMUtils.emit($el, "input");
      $<HTMLElement>("div.extractWrap div.extract-content button.m-button")?.click();
    });
  }
};
