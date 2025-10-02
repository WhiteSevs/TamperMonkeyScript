import { DOMUtils, log, utils } from "@/env";
import Viewer from "viewerjs";

export const ImageViewer = {
  /**
   * 查看图片
   * @param imageUrlList 图片链接Url
   * @param index 需要查看图片的下标，默认0
   */
  viewIMG(imageUrlList: string[], index: number | string = 0) {
    log.info(["查看图片", [imageUrlList, index]]);
    let viewerULHTML = "";
    imageUrlList.forEach((item) => {
      viewerULHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
    });
    let viewerULElement = DOMUtils.createElement("ul", {
      innerHTML: viewerULHTML,
    });
    let viewer = new Viewer(viewerULElement, {
      inline: false,
      url: "data-src",
      zIndex: utils.getMaxZIndex() + 100,
      hidden: () => {
        viewer.destroy();
      },
    });
    index = parseInt(index.toString());
    if (isNaN(index) || index < 0) {
      index = 0;
    }
    viewer.view(index);
    viewer.zoomTo(1);
    viewer.show();
  },
};
