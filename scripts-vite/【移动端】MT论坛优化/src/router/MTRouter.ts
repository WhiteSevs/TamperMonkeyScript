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
		return (
			window.location.pathname.startsWith("/thread-") ||
			(window.location.pathname.startsWith("/forum.php") &&
				window.location.search.startsWith("?mod=viewthread"))
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
		return (
			window.location.pathname.startsWith("/forum.php") &&
			window.location.search.startsWith("?mod=guide")
		);
	},
	/**
	 * 板块
	 */
	isPlate() {
		return Boolean(
			window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)
		);
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
		return (
			window.location.pathname.startsWith("/home.php") &&
			window.location.search.startsWith("?mod=space")
		);
	},
	/**
	 * 我的个人空间
	 */
	isMySpace() {
		return (
			window.location.pathname.startsWith("/home.php") &&
			window.location.search.startsWith("?mod=space&do=profile&mycenter")
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
		return (
			window.location.pathname.startsWith("/forum.php") &&
			window.location.search.startsWith("?forumlist")
		);
	},
	/**
	 * 消息提醒
	 */
	isMessage() {
		return (
			window.location.pathname.startsWith("/home.php") &&
			window.location.search.startsWith("?mod=space&do=notice")
		);
	},
	/**
	 * 消息提醒列表
	 */
	isMessageList() {
		return (
			window.location.pathname.startsWith("/home.php") &&
			window.location.search.startsWith("?mod=space&do=pm")
		);
	},
	/**
	 * 积分商城
	 */
	isPointsMall() {
		return (
			window.location.pathname.startsWith(
				"/keke_integralmall-keke_integralmall.html"
			) ||
			(window.location.pathname.startsWith("/plugin.php") &&
				window.location.search.startsWith("?id=keke_integralmal"))
		);
	},
	/**
	 * 帖子发布/回复页面
	 */
	isPostPublish() {
		return (
			window.location.pathname.startsWith("/forum.php") &&
			window.location.search.startsWith("?mod=post")
		);
	},
	/**
	 * 投票页面
	 */
	isPostPublish_voting() {
		return (
			(window.location.pathname.startsWith("/forum.php") &&
				window.location.search.includes("&special=1")) ||
			window.location.search.includes("&fid=42")
		);
	},
	/**
	 * 帖子编辑页面
	 */
	isPostPublish_edit() {
		return (
			this.isPostPublish() && window.location.search.includes("&action=edit")
		);
	},
	/**
	 * 发帖页面，该页面是尚未存入草稿
	 */
	isPostPublish_newthread() {
		return (
			this.isPostPublish() &&
			window.location.search.includes("&action=newthread")
		);
	},
	/**
	 * 回复编辑页面
	 */
	isPostPublish_reply() {
		return (
			this.isPostPublish() && window.location.search.includes("&action=reply")
		);
	},
};
