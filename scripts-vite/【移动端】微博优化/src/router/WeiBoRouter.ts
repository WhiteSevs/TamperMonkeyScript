const url = globalThis.location.href;
const urlObj = new URL(url);
const hostname = urlObj.hostname;
const pathname = urlObj.pathname;

const WeiBoRouter = {
	/**
	 * 移动端微博
	 * @returns
	 */
	isMWeiBo() {
		return hostname === "m.weibo.cn";
	},
	/**
	 * 移动端微博-首页
	 */
	isMWeiBoHome() {
		return this.isMWeiBo() && pathname === "/";
	},
	/**
	 * 移动端微博-微博正文
	 */
	isMWeiBo_detail() {
		return this.isMWeiBo() && pathname.startsWith("/detail/");
	},
	/**
	 * 移动端微博-微博正文
	 */
	isMWeiBo_status() {
		return this.isMWeiBo() && pathname.startsWith("/status/");
	},
	/**
	 * 移动端微博-用户主页
	 */
	isMWeiBo_userHome() {
		return this.isMWeiBo() && pathname.startsWith("/u/");
	},
	/**
	 * 移动端微博-搜索
	 */
	isMWeiBo_search() {
		return this.isMWeiBo() && pathname.startsWith("/search");
	},
	/**
	 * 移动端微博-微博热搜
	 */
	isMWeiBo_HotSearch() {
		let searchParams = new URLSearchParams(globalThis.location.search);
		let containerid = searchParams.get("containerid");
		return (
			this.isMWeiBo() &&
			pathname.startsWith("/p/index") &&
			typeof containerid === "string" &&
			containerid.startsWith("106003")
		);
	},
	/**
	 * 话题
	 */
	isHuaTi() {
		return hostname === "huati.weibo.cn";
	},
	/**
	 * 视频页
	 */
	isVideo() {
		return hostname === "h5.video.weibo.com";
	},
	/**
	 * 头条
	 */
	isCard() {
		return hostname === "card.weibo.com";
	},
	/**
	 * 头条文章
	 */
	isCardArticle() {
		return this.isCard() && pathname.startsWith("/article/");
	},
	/**
	 * 微博直播页面
	 */
	isLive() {
		return hostname === "weibo.com" && pathname.startsWith("/l/wblive/m/show/");
	},
};

export { WeiBoRouter };
