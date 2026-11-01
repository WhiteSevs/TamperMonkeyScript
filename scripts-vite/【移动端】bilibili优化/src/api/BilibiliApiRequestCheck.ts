/**
 * 请求参数检测
 */
export const BilibiliApiRequestCheck = {
  /**
   * 合并并检查是否传入aid或者bvid
   */
  mergeAidOrBvidSearchParamsData(searchParamsData: any, config: { aid: number | string } | { bvid: string }) {
    let aid = Reflect.get(config, "aid");
    let bvid = Reflect.get(config, "bvid");
    if (typeof aid === "string") {
      aid = aid.trim();
    }
    if (typeof bvid === "string") {
      bvid = bvid.trim();
    }
    if ("aid" in config && aid) {
      Reflect.set(searchParamsData, "aid", aid);
    } else if ("bvid" in config && bvid) {
      Reflect.set(searchParamsData, "bvid", bvid);
    } else {
      throw new TypeError("avid or bvid must give one");
    }
  },
};
