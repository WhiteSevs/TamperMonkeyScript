const url = globalThis.location.href;
const urlObj = new URL(url);
const pathname = urlObj.pathname;
const searchParams = urlObj.searchParams;

const GreasyforkRouter = {
	/**
	 * 代码页面
	 *
	 * + /code...
	 */
	isCode() {
		return Boolean(pathname.split("/")?.includes("code"));
	},
	/**
	 * 代码页面
	 *
	 * （严格比较）
	 *
	 * + /code
	 * + /code/
	 */
	isCodeStrict() {
		return Boolean(pathname.match(/\/code(\/|)$/));
	},
	/**
	 * 版本页面
	 *
	 * （严格比较）
	 *
	 * + /version
	 * + /version/
	 */
	isVersion() {
		return Boolean(pathname.match(/\/versions(\/|)$/));
	},
	/**
	 * 用户
	 *
	 * + /users/...
	 */
	isUsers() {
		return Boolean(pathname.match(/\/.+\/users\/.+/gi));
	},
	/**
	 * 私聊用户页面，可能是全部私信页面，也可能是某个用户的私信页面
	 *
	 * + /conversations...
	 */
	isUsersConversations() {
		return this.isUsers() && Boolean(pathname.includes("/conversations"));
	},
	/**
	 * 私聊xxx用户页面
	 *
	 * + /conversations/111...
	 */
	isUsersConversationsWithSomeUser() {
		return (
			this.isUsersConversations() &&
			Boolean(pathname.match(/\/conversations\/[\d]+/))
		);
	},
	/**
	 * 脚本页面(单个脚本的页面)
	 *
	 * + /scripts/111...
	 */
	isScript() {
		return Boolean(pathname.match(/\/scripts\/[\d+]/));
	},
	/**
	 * 脚本列表页面
	 *
	 * （严格比较）
	 *
	 * + /scripts
	 * + /scripts/
	 */
	isScriptList() {
		return Boolean(pathname.match(/\/scripts(\/|)$/));
	},
	/**
	 * 脚本列表-按域名
	 *
	 * + /scripts/by-site...
	 */
	isScriptsBySite() {
		return Boolean(pathname.match("/scripts/by-site"));
	},
	/**
	 * 库列表页面
	 *
	 * （严格比较）
	 *
	 * + /libraries
	 * + /libraries/
	 */
	isScriptLibraryList() {
		return Boolean(pathname.match(/\/libraries(\/|)$/));
	},
	/**
	 * 脚本搜索结果页面
	 *
	 * + /scripts?q=
	 */
	isScriptSearch() {
		return this.isScriptList() && searchParams.has("q");
	},
	/**
	 * 脚本代码搜索页面
	 *
	 * （严格比较）
	 *
	 * + /code-search
	 * + /code-search/
	 */
	isScriptCodeSearch() {
		return Boolean(pathname.match(/\/code-search(\/|)$/));
	},
	/**
	 * 讨论页面
	 *
	 * （严格比较）
	 *
	 * + /discussions
	 * + /discussions/
	 */
	isDiscuessions() {
		return Boolean(pathname.match(/\/discussions(\/|)$/));
	},
};

export { GreasyforkRouter };
