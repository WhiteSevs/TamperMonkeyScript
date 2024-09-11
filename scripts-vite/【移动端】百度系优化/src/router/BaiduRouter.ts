const BaiduRouter = {
	/**
	 * 百度搜索
	 */
	isSearch() {
		return Boolean(
			window.location.href.match(
				/^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/.*/g
			)
		);
	},
	/**
	 * 百度搜索 - /bh
	 * 百度健康
	 */
	isSearchBh() {
		return Boolean(
			this.isSearch() && window.location.pathname.startsWith("/bh")
		);
	},
	/**
	 * 百度搜索 - /video/page
	 * 视频页
	 */
	isSearchVideo() {
		return Boolean(
			this.isSearch() && window.location.pathname.startsWith("/video/page")
		);
	},
	/**
	 * 百度搜索主页
	 */
	isSearchHome() {
		return Boolean(
			window.location.href.match(
				/^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/$/g
			) ||
				window.location.href.match(
					/^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/(\?ref=|\?tn=|\?from=|#\/)/g
				)
		);
	},
	/**
	 * 百度搜索其它卡片搜索结果页面
	 * /sf/vsearch
	 * 例如：视频、笔记、贴吧、图片、资讯、问答、文库...等
	 */
	isSearchVSearch() {
		return (
			this.isSearch() && window.location.pathname.startsWith("/sf/vsearch")
		);
	},
	/**
	 * 百度搜索其它卡片搜索结果页面
	 * 图片
	 * /sf/vsearch?pd=image_content
	 */
	isSearchVSearch_image_content() {
		let searchParams = new URLSearchParams(window.location.search);
		return this.isSearchVSearch() && searchParams.has("pd", "image_content");
	},
	/**
	 * 百度搜索其它卡片搜索结果页面
	 * 笔记
	 * /sf/vsearch?pd=note
	 */
	isSearchVSearch_note() {
		let searchParams = new URLSearchParams(window.location.search);
		return this.isSearchVSearch() && searchParams.has("pd", "note");
	},
	/**
	 * 百度搜索其它卡片搜索结果页面
	 * 问答
	 * /sf/vsearch?pd=wenda_tab
	 */
	isSearchWenDaTab() {
		let searchParams = new URLSearchParams(window.location.search);
		return this.isSearchVSearch() && searchParams.has("pd", "wenda_tab");
	},
	/**
	 * 百家号
	 */
	isBaiJiaHao() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/baijiahao.baidu.com/g)
		);
	},
	/**
	 * 贴吧
	 */
	isTieBa() {
		return Boolean(
			window.location.href.match(
				/^http(s|):\/\/(tieba|ala|static.tieba|nba|fexclick|youhua).baidu.com/g
			) ||
				window.location.href.match(/^http(s|):\/\/(www.tieba|jump2.bdimg).com/g)
		);
	},
	/**
	 * 贴吧 - 帖子
	 */
	isTieBaPost() {
		return Boolean(
			this.isTieBa() && window.location.pathname.startsWith("/p/")
		);
	},
	/**
	 * 贴吧 - 热帖
	 */
	isTieBaNewTopic() {
		return Boolean(
			this.isTieBa() &&
				window.location.pathname.startsWith("/mo/q/newtopic/topicTemplate")
		);
	},
	/**
	 * 贴吧 - 搜索结果界面
	 */
	isTieBaHybrid() {
		return Boolean(
			this.isTieBa() && window.location.pathname.startsWith("/mo/q/hybrid")
		);
	},
	/**
	 * 贴吧 - 中转链接验证页面
	 */
	isTieBaCheckUrl() {
		return Boolean(
			this.isTieBa() && window.location.pathname.startsWith("/mo/q/checkurl")
		);
	},
	/**
	 * 贴吧 - 吧内
	 */
	isTieBaNei() {
		return Boolean(this.isTieBa() && window.location.pathname === "/f");
	},
	/**
	 * 贴吧 - 首页
	 */
	isTieBaIndex() {
		return Boolean(
			this.isTieBa() && window.location.pathname.startsWith("/index")
		);
	},
	/**
	 * 贴吧 - 主页
	 */
	isTieBaHome() {
		return Boolean(
			this.isTieBa() && window.location.pathname.startsWith("/home/main")
		);
	},
	/**
	 * 百度文库
	 */
	isWenKu() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/(wk|tanbi).baidu.com/g)
		);
	},
	/**
	 * 百度经验
	 */
	isJingYan() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/jingyan.baidu.com/g)
		);
	},
	/**
	 * 百度百科
	 */
	isBaiKe() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/(baike|wapbaike).baidu.com/g)
		);
	},
	/**
	 * 百度百科 - 他说
	 */
	isBaiKeTaShuo() {
		return Boolean(
			this.isBaiKe() && window.location.pathname.startsWith("/tashuo")
		);
	},
	/**
	 * 百度知道
	 */
	isZhiDao() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/zhidao.baidu.com/g)
		);
	},
	/**
	 * 百度翻译
	 */
	isFanYi() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/fanyi.baidu.com/g)
		);
	},
	/**
	 * 百度翻译 - App
	 */
	isFanYiApp() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/fanyi-app.baidu.com/g)
		);
	},
	/**
	 * 百度图片
	 */
	isImage() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/image.baidu.com/g)
		);
	},
	/**
	 * 百度地图
	 */
	isMap() {
		return Boolean(window.location.href.match(/^http(s|):\/\/map.baidu.com/g));
	},
	/**
	 *
	 */
	isMbd() {
		return Boolean(window.location.href.match(/^http(s|):\/\/mbd.baidu.com/g));
	},
	/**
	 * 百度好学
	 */
	isXue() {
		return Boolean(window.location.href.match(/^http(s|):\/\/xue.baidu.com/g));
	},
	/**
	 * 爱企查
	 */
	isAiQiCha() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/aiqicha.baidu.com/g)
		);
	},
	/**
	 * 百度网盟
	 */
	isPos() {
		return Boolean(window.location.href.match(/^http(s|):\/\/pos.baidu.com/g));
	},
	/**
	 * 好看视频
	 */
	isHaoKan() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/haokan.baidu.com/g)
		);
	},
	/**
	 * 百度图片搜索
	 */
	isGraph() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/graph.baidu.com/g)
		);
	},
	/**
	 * 百度网盘
	 */
	isPan() {
		return Boolean(window.location.href.match(/^http(s|):\/\/pan.baidu.com/g));
	},
	/**
	 * 文心一言
	 */
	isYiYan() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/yiyan.baidu.com/g)
		);
	},
	/**
	 * 搜索AI伙伴
	 */
	isChat() {
		return Boolean(window.location.href.match(/^http(s|):\/\/chat.baidu.com/g));
	},
	/**
	 * 百度教育
	 */
	isMiniJiaoYu() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/uf9kyh.smartapps.cn/g)
		);
	},
	/**
	 * 百度教育
	 */
	isEasyLearn() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/easylearn.baidu.com/g)
		);
	},
	/**
	 * 百度基木鱼
	 */
	isISite() {
		return Boolean(
			window.location.href.match(
				/^http(s|):\/\/isite.baidu.com\/site\/wjz2tdly/g
			)
		);
	},
	/**
	 * 百度爱学
	 */
	isAiStudy() {
		return Boolean(
			window.location.href.match(/^http(s|):\/\/aistudy.baidu.com/g)
		);
	},
};

export { BaiduRouter };
