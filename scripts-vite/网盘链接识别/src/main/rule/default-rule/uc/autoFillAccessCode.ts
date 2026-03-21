import { $, DOMUtils, log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_uc = function (netDiskInfo: NetDiskAutoFillAccessCodeOption) {
  if (window.location.hostname !== "drive.uc.cn" && !window.location.pathname.startsWith("/s/")) {
    return;
  }
  DOMUtils.onReady(async () => {
    // PC端
    DOMUtils.waitNode<[HTMLInputElement, HTMLElement]>(
      [".share-btn-wrap input", ".share-btn-wrap .btn-commit"],
      1e4
    ).then(async ($elList) => {
      if (!$elList) return;
      const [$shareInput, $btn] = $elList;
      if (!utils.isVisible($shareInput)) {
        log.error("分享码输入框不可见，不输入密码");
        return;
      }
      if (!utils.isVisible($btn)) {
        log.error("提交按钮不可见，不输入密码");
        return;
      }
      $shareInput.value = netDiskInfo.accessCode;
      const react = utils.getReactInstance($shareInput);
      const onChange = react.reactEventHandlers?.onChange;
      if (typeof onChange === "function") {
        onChange({
          currentTarget: $shareInput,
          target: $shareInput,
        });
      } else {
        Qmsg.error("获取onChange函数失败");
        return;
      }
      await utils.sleep(500);
      $btn.click();
      Qmsg.success("自动填充访问码");
    });

    // 移动端
    DOMUtils.waitNode<[HTMLInputElement, HTMLElement]>(
      [".share-receive-card input", ".share-receive-card button.submit-btn"],
      1e4
    ).then(async ($elList) => {
      if (!$elList) return;
      const [$shareInput, $btn] = $elList;
      if (!utils.isVisible($shareInput)) {
        log.error("分享码输入框不可见，不输入密码");
        return;
      }
      if (!utils.isVisible($btn)) {
        log.error("提交按钮不可见，不输入密码");
        return;
      }
      $shareInput.value = netDiskInfo.accessCode;
      const react = utils.getReactInstance($shareInput);
      const onChange = react.reactProps?.onChange;
      if (typeof onChange === "function") {
        onChange({
          currentTarget: $shareInput,
          target: $shareInput,
        });
      } else {
        Qmsg.error("获取onChange函数失败");
        return;
      }
      await utils.sleep(500);
      $btn.click();
      Qmsg.success("自动填充访问码");
    });
  });
};
