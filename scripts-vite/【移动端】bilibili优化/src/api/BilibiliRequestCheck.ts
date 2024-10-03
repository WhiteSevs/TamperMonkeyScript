/**
 * 请求参数检测
 */
export const BilibiliRequestCheck = {
	/**
	 * 合并并检查是否传入aid或者bvid
	 */
	mergeAidOrBvidSearchParamsData(
		searchParamsData: any,
		config: { aid: number | string } | { bvid: string }
	) {
		if ("aid" in config && config["aid"] != null) {
			Reflect.set(searchParamsData, "aid", config.aid);
		} else if ("bvid" in config && config["bvid"] != null) {
			Reflect.set(searchParamsData, "bvid", config.bvid);
		} else {
			throw new TypeError("avid or bvid must give one");
		}
	},
};
