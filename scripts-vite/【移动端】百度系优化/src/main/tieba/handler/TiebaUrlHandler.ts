export const TiebaUrlHandler = {
	/**
	 * 根据portrait获取用户头像
	 */
	getUserAvatar(portrait: string) {
		let authorImgId = "6LZ1dD3d1sgCo2Kml5_Y_D3";
		return `https://gss0.bdstatic.com/${authorImgId}/sys/portrait/item/${portrait}`;
	},
	/**
	 * 根据tb|portrait获取用户主页地址
	 */
	getUserHome(tb: string) {
		return `https://tieba.baidu.com/home/main?id=${tb}`;
	},
	/**
	 * 根据(un|userName)获取用户主页地址
	 */
	getUserHomeByUN(un: string) {
		return `https://tieba.baidu.com/home/main?un=${un}`;
	},
	/**
	 * 根据tid/pid获取帖子链接
	 * @param id
	 */
	getPost(id: string | number) {
		return `https://tieba.baidu.com/p/${id}#/`;
	},
	/**
	 * 获取搜索综合的地址
	 * @param searchText
	 */
	getHybridSearch(searchText: string) {
		return `https://tieba.baidu.com/mo/q/hybrid/search?keyword=${searchText}`;
	},
	/**
	 * 获取贴吧表情图片
	 * @param pathName 原static.baidu.com的pathname
	 * @returns
	 */
	getImageSmiley(pathName: string) {
		if (pathName.startsWith("/")) {
			pathName = pathName.replace(/^\//, "");
		}
		return `https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK/${pathName}`;
	},
	/**
	 * 获取吧的链接
	 * @param kw 吧名
	 * @returns
	 */
	getForum(kw: string) {
		return "https://tieba.baidu.com/f?kw=" + kw;
	},
	/**
	 * 获取发帖页面的链接
	 * @param fname 吧名
	 * @param fid 吧id
	 * @param tbs tbs值
	 */
	getPostPage(fname: string, fid: number | string, tbs: string) {
		return `https://tieba.baidu.com/h5activity/post?fname=${fname}&fid=${fid}&tbs=${tbs}`;
	},
	/**
	 * 进吧
	 */
	getGoToForum() {
		return "https://tieba.baidu.com/index/tbwise/forum";
	},
	/**
	 * 我的
	 */
	getMine() {
		return "https://tieba.baidu.com/index/tbwise/mine";
	},
	/**
	 * 获取登录链接
	 * @param [from=window.location.href] 想要登录成功后重定向的地址，默认是当前地址
	 */
	getLoginUrl(from: string = window.location.href) {
		return (
			"https://wappass.baidu.com/passport?login&tpl=tb&u=" +
			encodeURIComponent(from)
		);
	},
};