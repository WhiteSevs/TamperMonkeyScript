import { DOMUtils } from "@/env";
import type { PopsPanelDeepViewConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-deepMenu";

const afterEnterDeepMenuCallBack: PopsPanelDeepViewConfig["afterEnterDeepMenuCallBack"] = (formConfig, container) => {
  let $oneClickOpen = container.$sectionBodyContainer.querySelector<HTMLAnchorElement>(".keyboard-oneClickOpen");
  let $oneClickClose = container.$sectionBodyContainer.querySelector<HTMLAnchorElement>(".keyboard-oneClickClose");
  let clickCallBack = (isOpen: boolean) => {
    container.$sectionBodyContainer?.querySelectorAll<HTMLElement>(".pops-panel-switch").forEach(($ele) => {
      let $input = $ele.querySelector<HTMLInputElement>(".pops-panel-switch__input")!;
      let $checkbox = $ele.querySelector<HTMLInputElement>(".pops-panel-switch__core")!;
      if (isOpen) {
        if (!$input.checked) {
          $checkbox.click();
        }
      } else {
        if ($input.checked) {
          $checkbox.click();
        }
      }
    });
  };
  DOMUtils.on($oneClickOpen, "click", (event) => {
    DOMUtils.preventEvent(event);
    clickCallBack(true);
  });
  DOMUtils.on($oneClickClose, "click", (event) => {
    DOMUtils.preventEvent(event);
    clickCallBack(false);
  });
};
export const AutoOpenOrClose = {
  text: /*html*/ `
		<p>注：开启是启用该功能、关闭是不启用|不执行该功能</p>
        <a href="javascript:;" class="keyboard-oneClickOpen">一键全部开启</a>
        <br>
        <a href="javascript:;" class="keyboard-oneClickClose">一键全部关闭</a>
    `,
  afterEnterDeepMenuCallBack: afterEnterDeepMenuCallBack,
};
