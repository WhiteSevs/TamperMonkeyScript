import { httpx, log, utils } from "@/env";

type BingWallpaperApiType = {
  images: {
    startdate: string;
    fullstartdate: string;
    enddate: string;
    url: string;
    urlbase: string;
    copyright: string;
    copyrightlink: string;
    title: string;
    quiz: string;
    wp: boolean;
    hsh: string;
    drk: number;
    top: number;
    bot: number;
    hs: [];
  }[];
  tooltips: {
    loading: string;
    previous: string;
    next: string;
    walle: string;
    walls: string;
  };
};

export const BingWallpaper = {
  api: "https://cn.bing.com/HPImageArchive.aspx",
  imgOrigin: "https://cn.bing.com",
  get params() {
    return {
      /**
       * 输出格式，填 js 或 json 返回 JSON 数据，默认 XML
       */
      format: "js" as "js" | "json",
      /**
       * 壁纸索引，0=今日、1=昨日、-1=明日预发布，最大可查 7 天前。
       */
      idx: 0,
      /**
       * 单次返回数量，1~8 张
       */
      n: 8,
      /**
       * 地区市场，如 zh-CN、en-US 等，影响壁纸内容和版权信息
       */
      mkt: "zh-CN" as "zh-CN" | "en-US",
    };
  },
  /**
   * 获取背景图片url
   */
  async getTodayImgUrlInfos() {
    const response = await httpx.get(this.api, {
      data: { ...this.params },
      fetch: false,
      allowInterceptConfig: false,
      headers: {
        Referer: "https://www.bing.com/",
        Origin: "https://www.bing.com",
        "Content-Type": "application/json",
      },
    });
    if (!response.status) return;
    const data = utils.toJSON<BingWallpaperApiType>(response.data.responseText);
    if (!Array.isArray(data.images) || data.images.length === 0) {
      log.error(`获取背景图片失败`, response, data);
      return;
    }
    const urls = data.images
      .map((item) => {
        let url: string | undefined = undefined;
        if (typeof item.urlbase === "string") {
          url = this.imgOrigin + item.urlbase + "_UHD.jpg";
        } else if (typeof item.url === "string") {
          url = this.imgOrigin + item.url;
          url = url.replace("_1920x1080.jpg", "_UHD.jpg");
        }

        if (url) {
          return {
            uhd: url,
            "1080p": url.replace("_UHD.jpg", "_1920x1080.jpg"),
            "720p": url.replace("_UHD.jpg", "_1280x720.jpg"),
          };
        }
      })
      .filter((it) => it != null);
    if (!urls.length) {
      return;
    }
    return urls;
  },
  /**
   * 获取随机背景图片url
   */
  async getTodayRandomImgUrlInfo() {
    const urls = await this.getTodayImgUrlInfos();
    if (!Array.isArray(urls) || urls.length === 0) return;
    return urls[Math.floor(Math.random() * urls.length)];
  },
};
