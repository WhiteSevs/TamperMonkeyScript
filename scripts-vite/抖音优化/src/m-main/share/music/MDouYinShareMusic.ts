import { DOMUtils, addStyle, log, utils } from "@/env";
import blockCSS from "./block.css?raw";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";
import { DouYinUrl } from "@/router/DouYinUrl";

export const MDouYinShareMusic = {
  init() {
    addStyle(blockCSS);
    Panel.execMenuOnce("m-dy-share-music-coverVideoCard", () => {
      return this.coverVideoCard();
    });
  },
  /**
   * 覆盖视频卡片点击事件
   */
  coverVideoCard() {
    log.info("覆盖视频卡片点击事件");
    const callback = (event: MouseEvent | PointerEvent, $click: HTMLElement) => {
      DOMUtils.preventEvent(event);
      const rectFiber = utils.getReactInstance($click).reactFiber;
      if (!rectFiber) {
        log.error("获取reactFiber失败");
        Qmsg.error("获取reactFiber失败");
        return;
      }
      const listData = rectFiber?.return?.return?.return?.memoizedProps.listData;
      const index = rectFiber.index;
      const currentList = listData[index];
      const url = DouYinUrl.getVideoUrl(currentList["aweme_id"]);
      window.open(url, "_blank");
    };
    const result = DOMUtils.on(document, "click", "#pagelet-worklist li.item", callback, {
      capture: true,
    });
    return [result.off];
  },
};
