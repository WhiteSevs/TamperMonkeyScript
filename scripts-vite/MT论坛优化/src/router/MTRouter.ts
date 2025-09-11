export const MTRouter = {
	/**
	 * 克米签到页面
	 */
	isKMiSign() {
		return window.location.pathname.startsWith("/k_misign-sign.html");
	},
	/**
	 * 帖子
	 */
	isPost() {
		const searchParams = new URLSearchParams(window.location.search);
		return (
			window.location.pathname.startsWith("/thread-") ||
			(window.location.pathname.startsWith("/forum.php") && searchParams.has("mod", "viewthread"))
		);
	},
	/**
	 * 首页、精华
	 */
	isPage() {
		return Boolean(window.location.pathname.match(/^\/page-([0-9]+).html/g));
	},
	/**
	 * 导读链接
	 */
	isGuide() {
		const searchParams = new URLSearchParams(window.location.search);
		return window.location.pathname.startsWith("/forum.php") && searchParams.has("mod", "guide");
	},
	/**
	 * 板块
	 */
	isPlate() {
		return Boolean(window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g));
	},
	/**
	 * 搜索页面
	 */
	isSearch() {
		return window.location.pathname.startsWith("/search.php");
	},
	/**
	 * 空间
	 */
	isSpace() {
		const searchParams = new URLSearchParams(window.location.search);
		return window.location.pathname.startsWith("/home.php") && searchParams.has("mod", "space");
	},
	/**
	 * 我的个人空间
	 */
	isMySpace() {
		const searchParams = new URLSearchParams(window.location.search);
		return (
			window.location.pathname.startsWith("/home.php") &&
			searchParams.has("mod", "space") &&
			searchParams.has("do", "profile") &&
			searchParams.has("mycenter")
		);
	},
	/**
	 * 个人空间页的@点进去
	 */
	isSpaceWithAt() {
		return window.location.pathname.startsWith("/space-uid-");
	},
	/**
	 * 社区列表
	 */
	isForumList() {
		const searchParams = new URLSearchParams(window.location.search);
		return window.location.pathname.startsWith("/forum.php") && searchParams.has("forumlist");
	},
	/**
	 * 消息提醒
	 */
	isMessage() {
		const searchParams = new URLSearchParams(window.location.search);
		return (
			window.location.pathname.startsWith("/home.php") &&
			searchParams.has("mod", "space") &&
			searchParams.has("do", "notice")
		);
	},
	/**
	 * 消息提醒列表
	 */
	isMessageList() {
		const searchParams = new URLSearchParams(window.location.search);
		return (
			window.location.pathname.startsWith("/home.php") &&
			searchParams.has("mod", "space") &&
			searchParams.has("do", "pm")
		);
	},
	/**
	 * 积分商城
	 */
	isPointsMall() {
		const searchParams = new URLSearchParams(window.location.search);
		return (
			window.location.pathname.startsWith("/keke_integralmall-keke_integralmall.html") ||
			(window.location.pathname.startsWith("/plugin.php") && searchParams.has("id", "keke_integralmal"))
		);
	},
	/**
	 * 帖子发布/回复页面
	 */
	isPostPublish() {
		const searchParams = new URLSearchParams(window.location.search);
		return window.location.pathname.startsWith("/forum.php") && searchParams.has("mod", "post");
	},
	/**
	 * 投票页面
	 */
	isPostPublish_voting() {
		const searchParams = new URLSearchParams(window.location.search);
		return (
			(window.location.pathname.startsWith("/forum.php") && searchParams.has("special", "1")) ||
			searchParams.has("fid", "42")
		);
	},
	/**
	 * 帖子编辑页面
	 */
	isPostPublish_edit() {
		const searchParams = new URLSearchParams(window.location.search);
		return this.isPostPublish() && searchParams.has("action", "edit");
	},
	/**
	 * 发帖页面，该页面是尚未存入草稿
	 */
	isPostPublish_newthread() {
		const searchParams = new URLSearchParams(window.location.search);
		return this.isPostPublish() && searchParams.has("action", "newthread");
	},
	/**
	 * 回复编辑页面
	 */
	isPostPublish_reply() {
		const searchParams = new URLSearchParams(window.location.search);
		return this.isPostPublish() && searchParams.has("action", "reply");
	},
};
