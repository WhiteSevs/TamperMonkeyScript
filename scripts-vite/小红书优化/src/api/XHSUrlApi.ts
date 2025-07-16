export const XHSUrlApi = {
	/**
	 * 获取搜索链接
	 * @param searchText
	 * @returns
	 */
	getSearchUrl(searchText: string) {
		return `https://www.xiaohongshu.com/search_result?keyword=${searchText}&source=web_explore_feed`;
	},
};
