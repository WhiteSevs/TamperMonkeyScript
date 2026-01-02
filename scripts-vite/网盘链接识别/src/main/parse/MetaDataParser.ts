import { DOMUtils, httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { NetDiskPops } from "../pops/NetDiskPops";
import { PanelUISize } from "@components/setting/panel-ui-size";
import Viewer from "viewerjs";
import { CommonUtil } from "@components/utils/CommonUtil";
import { GM_RESOURCE_MAPPING } from "@components/GM_Resource_Mapping";

type MetaInfo = {
  type: string;
  file_type: string;
  name: string;
  size: number;
  count: number;
  error: string | null;
  screenshots:
    | {
        time: number;
        screenshot: string;
      }[]
    | null;
};
export const MetaDataParser = {
  $flag: {
    isInjectViewerCSS: false,
  },
  /**
   * 解析文件链接的元数据
   */
  async parseFileMetaInfo(url: string) {
    const response = await httpx.get("https://whatslink.info/api/v1/link?url=" + url, {
      headers: {
        Referer: "https://whatslink.info/",
      },
      allowInterceptConfig: false,
    });
    let data = utils.toJSON<MetaInfo>(response.data.responseText);
    if (!response.status) {
      if (typeof data.error === "string" && data.error.trim() !== "") {
        Qmsg.error(data.error);
        return;
      }
      Qmsg.error("请求失败");
      return;
    }
    return data;
  },
  /**
   * 显示元数据弹窗
   */
  showFileMetaInfoDialog(metaInfo: MetaInfo) {
    if (!MetaDataParser.$flag.isInjectViewerCSS) {
      MetaDataParser.$flag.isInjectViewerCSS = true;
      CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
    }
    const $alert = NetDiskPops.alert({
      title: {
        text: "元数据信息",
        position: "center",
      },
      content: {
        text: /*html*/ `
        <div class="wrapper">
          <div class="title">Summary</div>
          <div class="content">
            <div>Resource Name: ${metaInfo.name}</div>
            <div>Number of Files: ${metaInfo.count}</div>
            <div>Total File Size: ${utils.formatByteToSize(metaInfo.size)}</div>
            <div>File Type: ${metaInfo.type.toLowerCase()}</div>
          </div>
        </div>
        `,
        html: true,
      },
      btn: {
        ok: {
          enable: false,
        },
      },
      width: PanelUISize.setting.width,
      height: "auto",
      style: /*css*/ `
      .pops-alert-content{
          padding: 0 15px;
      }
      .wrapper{
          border: 1px solid #2c3e50;
          margin: 24px 0;
          max-width: 100%;
      }
      .wrapper .title{
          font-size: 18px;
          font-weight: 700;
          padding: 8px 24px;
          border-bottom: 1px solid #2c3e50;
      }
      .wrapper .content{
          padding: 24px;
      }
      .wrapper .image-list{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          max-width: 100%;
          overflow-x: hidden;
          overflow-y: auto;
          gap: 12px;
          max-height: 300px;
      }
      .wrapper .image-list .img{
          flex-shrink: 0;
          max-width: 180px;
          max-height: 135px;
          border-radius: 8px;
      }
      .wrapper .image-list .img img{
          width: 100%;
          height: auto;
          cursor: pointer;
      }`,
    });
    const $content = $alert.$shadowRoot.querySelector<HTMLElement>(".pops-content")!;
    /**
     * 查看图片
     * @param imgList 图片列表
     * @param imgIndex 当前查看图片的索引下标
     */
    const viewIMG = function (imgList: string[] = [], imgIndex = 0) {
      log.info("当前查看图片的索引下标：" + imgIndex);
      log.info("当前查看图片的列表信息：", imgList);
      let viewerULNodeHTML = "";
      imgList.forEach((item) => {
        viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
      });
      const $viewerContainer = DOMUtils.createElement("ul", {
        innerHTML: viewerULNodeHTML,
      });
      const viewer = new Viewer($viewerContainer, {
        inline: false,
        url: "data-src",
        zIndex: utils.getMaxZIndex(1, $alert.$shadowRoot) + 100,
        hidden: () => {
          viewer.destroy();
        },
      });
      if (imgIndex < 0) {
        imgIndex = 0;
        log.warn("imgIndex小于0，重置为0");
      } else if (imgIndex > imgList.length - 1) {
        imgIndex = imgList.length - 1;
        log.warn("imgIndex大于imgList最大下标，重置为imgList最大下标");
      }
      viewer.view(imgIndex);
      viewer.zoomTo(1);
      viewer.show();
      log.success("预览图片");
    };
    if (Array.isArray(metaInfo.screenshots)) {
      const $wrapper = DOMUtils.createElement("div", {
        className: "wrapper",
        innerHTML: /*html*/ `
        <div class="title">Screenshots</div>
        <div class="content">
          <div class="image-list"></div>
        </div>
        `,
      });
      const $imageList = $wrapper.querySelector<HTMLElement>(".image-list")!;
      const imgList: string[] = [];
      metaInfo.screenshots.forEach((item, index) => {
        imgList.push(item.screenshot);
        const $img = DOMUtils.createElement("div", {
          className: "img",
          innerHTML: /*html*/ `
          <img src="${item.screenshot}" alt="img" data-time="${item.time}">
          `,
        });
        DOMUtils.append($imageList, $img);
      });
      Reflect.set($imageList, "data-screenshots", metaInfo.screenshots);
      DOMUtils.on($wrapper, "click", ".image-list .img", (evt, $click) => {
        const index = Array.from($imageList.children).indexOf($click);
        viewIMG(imgList, index);
      });
      $content.appendChild($wrapper);
    }
  },
};
