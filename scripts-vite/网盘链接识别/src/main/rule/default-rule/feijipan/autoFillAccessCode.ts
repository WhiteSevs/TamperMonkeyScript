import { DOMUtils, log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_feijipan = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname === "share.feijipan.com" && window.location.pathname.startsWith("/s/")) {
    log.success("自动填写链接", netDiskInfo);
    DOMUtils.onReady(() => {
      DOMUtils.waitNode<HTMLInputElement>('input.code-input[placeholder*="请输入提取码"]', 10000).then(($el) => {
        if (!$el) {
          return;
        }
        if (!utils.isVisible($el)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        DOMUtils.val($el, netDiskInfo.accessCode);
        DOMUtils.emit($el, "input");
        Qmsg.success("自动填充访问码");
        DOMUtils.waitNode<HTMLButtonElement>("button.code-checkafter", 3000).then(($button) => {
          if (!$button) {
            Qmsg.error("查看文件按钮不存在");
            return;
          }
          $button.click();
        });
      });
    });
  }
};
