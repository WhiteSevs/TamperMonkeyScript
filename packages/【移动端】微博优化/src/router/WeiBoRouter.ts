const WeiBoRouter = {
	/**
	 * 移动端微博
	 * @returns
	 */
	isMWeiBo() {
		return globalThis.location.hostname === "m.weibo.cn";
	},
	/**
	 * 话题
	 * @returns
	 */
	isHuaTi() {
		return globalThis.location.hostname === "huati.weibo.cn";
	},
	/**
	 * 视频页
	 * @returns
	 */
	isVideo() {
		return globalThis.location.hostname === "h5.video.weibo.com";
	},
};

export { WeiBoRouter };
