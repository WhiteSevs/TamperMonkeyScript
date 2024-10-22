export const MTRegExp = {
	/** 论坛账号的凭证 */
	formhash: /formhash=(.+)&/,
	/** 论坛账号的凭证 */
	hash: /hash=(.+)&/,
	/** 用户uid */
	uid: /uid=(\d+)/,
	/** 帖子内特殊字体格式 */
	fontSpecial:
		/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,
	/** 帖子链接的ptid参数 */
	ptid: /&ptid=([\d]+)/i,
	/** 帖子链接的pid参数 */
	pid: /&pid=([\d]+)/i,
};
