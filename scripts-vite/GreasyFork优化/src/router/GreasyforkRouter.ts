const GreasyforkRouter = {
	/**
	 * 代码页面
	 */
	isCode() {
		return Boolean(window.location.pathname.split("/")?.includes("code"));
	},
	/**
	 * （严格比较）代码页面
	 */
	isCodeStrict() {
		return Boolean(window.location.pathname.endsWith("/code"));
	},
	/**
	 * 版本页面
	 */
	isVersion() {
		return Boolean(window.location.pathname.endsWith("/versions"));
	},
	/**
	 * 用户
	 */
	isUsers() {
		return Boolean(window.location.pathname.match(/\/.+\/users\/.+/gi));
	},
	/**
	 * 私聊用户页面，可能是全部私信页面，也可能是某个用户的私信页面
	 */
	isUsersConversations() {
		return (
			this.isUsers() &&
			Boolean(window.location.pathname.includes("/conversations"))
		);
	},
	/**
	 * 私聊xxx用户页面
	 */
	isUsersConversationsWithSomeUser() {
		return (
			this.isUsersConversations() &&
			Boolean(window.location.pathname.match(/\/conversations\/[\d]+/))
		);
	},
	/**
	 * 脚本页面(单个脚本的页面)
	 */
	isScript() {
		return Boolean(window.location.pathname.includes("/scripts/"));
	},
	/**
	 * 脚本列表页面
	 */
	isScriptList() {
		return Boolean(window.location.pathname.endsWith("/scripts"));
	},
	/**
	 * 库列表页面
	 */
	isScriptLibraryList() {
		return Boolean(window.location.pathname.endsWith("/libraries"));
	},
	/**
	 * 脚本代码搜索页面
	 */
	isScriptCodeSearch() {
		return Boolean(window.location.pathname.endsWith("/code-search"));
	},
	/**
	 * 讨论页面
	 */
	isDiscuessions() {
		return Boolean(window.location.pathname.endsWith("/discussions"));
	},
};

export { GreasyforkRouter };
