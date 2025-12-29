import { DOMUtils, addStyle, utils } from "@/env";
import blockCSS from "./block.css?raw";
import Qmsg from "qmsg";
import { DouYinUrlUtils } from "@/utils/DouYinUrlUtils";
import { Panel } from "@components/setting/panel";

export const MDouYinShareUser = {
  init() {
    addStyle(blockCSS);
    Panel.execMenuOnce("m-dy-share-user-coverPlayletList", () => {
      return this.coverPlayletList();
    });
    Panel.execMenuOnce("m-dy-share-user-coverPostListContainer", () => {
      return this.coverPostListContainer();
    });
  },
  /**
   * 覆盖视频合集点击事件
   */
  coverPlayletList() {
    const result = DOMUtils.on(
      document,
      "click",
      ".user-playlet-list .playlet-item",
      (event) => {
        DOMUtils.preventEvent(event);

        const $click = event.target as HTMLDivElement;
        const reactFiber = utils.getReactInstance($click)?.reactFiber;
        const key = reactFiber?.key;
        if (key == null) {
          Qmsg.error("获取视频合集key失败");
          return;
        }
        const index = reactFiber?.index;
        if (index == null) {
          Qmsg.error("获取视频合集index失败");
          return;
        }
        const playletList = reactFiber?.return?.return?.pendingProps?.playletList;
        if (playletList == null) {
          Qmsg.error("获取视频合集playletList失败");
          return;
        }
        const currentPlaylet = playletList[index];
        const url = DouYinUrlUtils.getCollectionUrl(currentPlaylet["mix_id"]);
        window.open(url, "_blank");
      },
      {
        capture: true,
      }
    );
    return [result.off];
  },
  /**
   * 覆盖视频列表点击事件
   */
  coverPostListContainer() {
    const result = DOMUtils.on(
      document,
      "click",
      ".post-list-container .user-post-cover",
      (event) => {
        DOMUtils.preventEvent(event);
        const $click = event.target as HTMLDivElement;
        const reactFiber = utils.getReactInstance($click)?.reactFiber;
        if (reactFiber?.return?.memoizedProps?.productionUrl) {
          const url = reactFiber?.return?.memoizedProps?.productionUrl;
          window.open(url, "_blank");
        } else {
          Qmsg.error("获取视频链接失败");
        }
      },
      {
        capture: true,
      }
    );
    return [result.off];
  },
};
