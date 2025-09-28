import { log, pops, utils } from "@/env";
import { ImageUtils } from "@/utils/ImageUtils";
import Qmsg from "qmsg";
import { unsafeWindow } from "ViteGM";

/**
 * 自动判断允许的图片类型
 */
const allowImageType = [
  { rule: ".png", type: "image/png" },
  { rule: ".jpg", type: "image/jpg" },
  { rule: ".jpeg", type: "image/jpeg" },
  { rule: ".webp", type: "image/webp" },
  { rule: ".ico", type: "image/ico" },
  { rule: ".gif", type: "image/gif" },
];
export const Image = {
  init() {
    let imgList = document.body.querySelectorAll("img");
    if (imgList.length !== 1) {
      log.error("页面中的<img>元素数量不为1");
      return;
    }
    log.info("注入全局右键-图片");
    let imageElement = imgList[0];
    let imageUrl = imageElement.src;
    pops.rightClickMenu({
      target: unsafeWindow,
      data: [
        {
          icon: pops.config.iconSVG.documentCopy,
          iconIsLoading: false,
          text: "自动判断",
          async callback() {
            let imgType = null;
            if (imageUrl.startsWith("http") || imageUrl.startsWith("file:")) {
              let findIndex = -1;
              findIndex = allowImageType.findIndex((value) => imageUrl.endsWith(value.rule));
              if (findIndex !== -1) {
                imgType = allowImageType[findIndex].type;
              }
              if (!imgType && imageUrl.startsWith("http")) {
                Qmsg.info("通过网络请求判断类型");
                imgType = await ImageUtils.networkQueryContentType(imageUrl);
                log.info("请求获取的Content-Type：" + imgType);
                if (imgType) {
                  Qmsg.success("图片类型：" + imgType);
                }
              }
            }

            if (imgType) {
              if (imgType.endsWith("gif")) {
                ImageUtils.gif.chooseStaticImg(imageUrl).then((text) => {
                  utils.copy(text);
                  Qmsg.success("复制成功！");
                });
              } else {
                utils.copy(ImageUtils.default.getBase64Image(imageElement, imgType));
                Qmsg.success("复制成功！");
              }
            } else {
              Qmsg.error("未知的图片类型");
            }
          },
        },
        {
          icon: pops.config.iconSVG.chromeFilled,
          iconIsLoading: false,
          text: "其它类型",
          callback(event) {
            return false;
          },
          item: [
            {
              icon: pops.config.iconSVG.documentCopy,
              iconIsLoading: false,
              text: "jpg",
              callback() {
                utils.copy(ImageUtils.default.getBase64Image(imageElement, "image/jpg"));
                Qmsg.success("复制成功！");
              },
            },
            {
              icon: pops.config.iconSVG.documentCopy,
              iconIsLoading: false,
              text: "jpeg",
              callback() {
                utils.copy(ImageUtils.default.getBase64Image(imageElement, "image/jpeg"));
                Qmsg.success("复制成功！");
              },
            },
            {
              icon: pops.config.iconSVG.documentCopy,
              iconIsLoading: false,
              text: "png",
              callback() {
                utils.copy(ImageUtils.default.getBase64Image(imageElement, "image/png"));
                Qmsg.success("复制成功！");
              },
            },
            {
              icon: pops.config.iconSVG.documentCopy,
              iconIsLoading: false,
              text: "gif",
              callback() {
                ImageUtils.gif.chooseStaticImg(imageUrl).then((text) => {
                  utils.copy(text);
                  Qmsg.success("复制成功！");
                });
              },
            },
          ],
        },
      ],
    });
  },
};
