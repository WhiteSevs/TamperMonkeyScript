const WeiBoRouter = {
	/**
	 * 移动端微博
	 * @returns
	 */
	isMWeiBo() {
		return globalThis.location.hostname === "m.weibo.cn";
	},
	/**
	 * 移动端微博-帖子
	 */
	isMWeiBoDetail() {
		return (
			this.isMWeiBo() && globalThis.location.pathname.startsWith("/detail/")
		);
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
