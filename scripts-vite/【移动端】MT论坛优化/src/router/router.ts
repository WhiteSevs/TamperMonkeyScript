const pathname = globalThis.location.pathname;
const search = globalThis.location.search;
const href = globalThis.location.href;
const searchParams = new URLSearchParams(search);
export const Router = {
	/**
	 * 克米签到页面
	 */
	isKMiSign() {
		return pathname.startsWith("/k_misign-sign.html");
	},
	/**
	 * 帖子
	 */
	isPost() {
		return (
			pathname.startsWith("/thread-") ||
			(pathname.startsWith("/forum.php") &&
				search.startsWith("?mod=viewthread"))
		);
	},
	/**
	 * 首页、精华
	 */
	isPage() {
		return Boolean(pathname.match(/^\/page-([0-9]+).html/g));
	},
	/**
	 * 导读链接
	 */
	isGuide() {
		return pathname.startsWith("/forum.php") && search.startsWith("?mod=guide");
	},
	/**
	 * 板块
	 */
	isPlate() {
		return Boolean(pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g));
	},
	/**
	 * 搜索页面
	 */
	isSearch() {
		return pathname.startsWith("/search.php");
	},
	/**
	 * 空间
	 */
	isSpace() {
		return pathname.startsWith("/home.php") && search.startsWith("?mod=space");
	},
	/**
	 * 我的个人空间
	 */
	isMySpace() {
		return (
			pathname.startsWith("/home.php") &&
			search.startsWith("?mod=space&do=profile&mycenter")
		);
	},
	/**
	 * 个人空间页的@点进去
	 */
	isSpaceWithAt() {
		return pathname.startsWith("/space-uid-");
	},
	/**
	 * 社区列表
	 */
	isForumList() {
		return pathname.startsWith("/forum.php") && search.startsWith("?forumlist");
	},
	/**
	 * 消息提醒
	 */
	isMessage() {
		return (
			pathname.startsWith("/home.php") &&
			search.startsWith("?mod=space&do=notice")
		);
	},
	/**
	 * 消息提醒列表
	 */
	isMessageList() {
		return (
			pathname.startsWith("/home.php") && search.startsWith("?mod=space&do=pm")
		);
	},
	/**
	 * 积分商城
	 */
	isPointsMall() {
		return (
			pathname.startsWith("/keke_integralmall-keke_integralmall.html") ||
			(pathname.startsWith("/plugin.php") &&
				search.startsWith("?id=keke_integralmal"))
		);
	},
};
