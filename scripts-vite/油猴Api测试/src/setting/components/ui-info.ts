import { DOMUtils, utils } from "@/env";
import type { PopsPanelOwnDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-own";
import { Tag, TagUtil, type TagName } from "../tag";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/types/components-common";
import { UIOwn } from "@components/setting/components/ui-own";

export type UIInfoResultConfig = {
  /** 文字 */
  text: string;
  /** 描述 */
  description?: string;
  /** 显示的tag */
  tag?: TagName;
  /** 渲染到页面中时触发回调 */
  afterRender?: (
    this: UIInfoResultConfig,
    container: PopsPanelRightAsideContainerOptions & {
      $leftContainer: HTMLElement;
      $leftText: HTMLElement;
      $leftDesc: HTMLElement;
    }
  ) => void;
};
export const UIInfo = (config: () => UIInfoResultConfig | Promise<UIInfoResultConfig>): PopsPanelOwnDetails => {
  let result: PopsPanelOwnDetails = UIOwn(
    ($li) => {
      let $item = DOMUtils.createElement("div", {
        className: "pops-panel-item-left-text",
        innerHTML: /*html*/ `
					<p class="pops-panel-item-left-main-text"></p>
					<p class="pops-panel-item-left-desc-text"></p>
				`,
      });
      $li.appendChild($item);
      return $li;
    },
    void 0,
    void 0,
    void 0,
    void 0,
    async (formConfig, container) => {
      let $target = container.target!;
      let $leftContainer = $target.querySelector<HTMLElement>(".pops-panel-item-left-text")!;
      let $text = $target.querySelector<HTMLElement>(".pops-panel-item-left-main-text")!;
      let $desc = $target.querySelector<HTMLElement>(".pops-panel-item-left-desc-text")!;
      let detail = await config();
      if (detail.tag == null) {
        DOMUtils.html($text, detail.text);
      } else {
        DOMUtils.html($text, Tag[detail.tag] + detail.text);
      }
      if (detail.description == null || detail.description === "") {
        DOMUtils.hide($desc, false);
      }
      DOMUtils.html($desc, detail.description || "");
      let classNameList = ["support-info"];
      if (detail.tag != null) {
        classNameList.push(detail.tag);
      }
      DOMUtils.addClass($text, classNameList);

      if (typeof detail.afterRender === "function") {
        try {
          detail.afterRender({
            ...container,
            $leftContainer: $leftContainer,
            $leftText: $text,
            $leftDesc: $desc,
          });
        } catch (error) {
          console.log(error);
          TagUtil.setTag($text, "error", "afterRender 函数执行错误" + error);
        }
      }
    }
  );

  return result;
};
