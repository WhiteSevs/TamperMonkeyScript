const url = globalThis.location.href;
const urlObj = new URL(url);
const host = urlObj.hostname;
const pathname = urlObj.pathname;
const searchParams = urlObj.searchParams;

export const DouYinRouter = {
	/** 直播 */
	isLive() {
		return host === "live.douyin.com";
	},
	/**
	 * 是否是抖音主站
	 */
	isIndex() {
		return host === "www.douyin.com";
	},
	/** 视频 */
	isVideo() {
		return this.isIndex();
	},
	/** 搜索 */
	isSearch() {
		return this.isIndex() && window.location.pathname.startsWith("/search");
	},
	/**
	 * 用户主页
	 */
	isUser() {
		return this.isIndex() && window.location.pathname.startsWith("/user");
	},
};
