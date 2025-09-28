import { httpx } from "@/env";

export const ImageUtils = {
  default: {
    getBase64Image(img: HTMLImageElement, type = "image/png") {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var dataURL = canvas.toDataURL("image/png");
      return dataURL;
    },
  },
  gif: {
    /**
     * 根据路径返回file
     * @param url 图片链接
     * @param imageName 图片名字
     * @param callback 回调
     */
    getImageFileFromUrl(url: string, imageName: string, callback: (file: File) => void) {
      fetch(url)
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          let imgFile = new File([blob], imageName, { type: "image/gif" });
          callback(imgFile);
        });
    },
    /**
     * 图片路径返回base64
     * @param imageUrl
     */
    chooseStaticImg(imageUrl: string) {
      let base64Str = null;
      return new Promise((resolve, reject) => {
        this.getImageFileFromUrl(imageUrl, "图片.gif", (file) => {
          let reader = new FileReader();
          reader.onloadend = () => {
            base64Str = reader.result;
            resolve(base64Str);
          };
          reader.readAsDataURL(file);
        });
      });
    },
  },
  /**
   * 网络请求获取图片的类型
   */
  async networkQueryContentType(url: string): Promise<string | null | undefined> {
    let resp = await httpx.head(url, {
      fetch: true,
    });
    if (resp.status && resp.data.responseFetchHeaders!.has("Content-Type")) {
      return resp.data.responseFetchHeaders!.get("Content-Type");
    }
  },
};
