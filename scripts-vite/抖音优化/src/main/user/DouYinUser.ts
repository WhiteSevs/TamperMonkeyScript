import { addStyle, DOMUtils, log, utils } from "@/env";
import blockCSS from "./css/block.css?raw";
import { Panel } from "@components/setting/panel";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const DouYinUser = {
  init() {
    addStyle(blockCSS);
    DOMUtils.onReady(() => {
      Panel.execMenu("dy-user-addShowUserUID", () => {
        this.addShowUserUID();
      });
    });
  },
  /**
   * 显示UID
   */
  addShowUserUID() {
    ReactUtils.waitReactPropsToSet(`[data-e2e="user-detail"] [data-e2e="user-info"]`, "reactFiber", {
      msg: "显示UID",
      check(reactInstance) {
        return typeof reactInstance?.return?.memoizedProps?.userInfo?.uid === "string";
      },
      set(reactInstance, $target) {
        let uid: string = reactInstance?.return?.memoizedProps?.userInfo?.uid;
        DOMUtils.remove($target.querySelectorAll<HTMLElement>(".gm-user-uid"));
        let $userUID = DOMUtils.createElement(
          "p",
          {
            className: "gm-user-uid",
            innerHTML: /*html*/ `
							<span>UID：${uid}</span>
						`,
          },
          {
            style: "color: var(--color-text-t3);margin-right: 20px;font-size: 12px;line-height: 20px;cursor: pointer;",
          }
        );
        DOMUtils.on($userUID, "click", (event) => {
          DOMUtils.preventEvent(event);
          utils.copy(uid);
          Qmsg.success("复制成功");
        });
        $target.appendChild($userUID);
      },
    });
  },
};
