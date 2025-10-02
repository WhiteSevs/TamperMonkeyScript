export const WebSiteDefaultRule = () => {
  return {
    url: "*://*/*",
    selector: "img",
    mode: "handleClickEvent",
    isPreventDefault: true,
    clickEvent: `
      const $image = event.target;
      const url = this.ImageUtils.getImageElementUrl($image);
      resolve({
        "isView": true,
        "imageList": [url],
      });
      `,
  } as ImageViewerHandleClickEventRule;
};
