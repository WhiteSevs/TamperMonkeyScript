import { httpx, log, utils } from "@/env";
import { BilibiliResponseCheck } from "./BilibiliResponseCheck";
import { BilibiliQrCodeLogin } from "@/account/BilibiliQrCodeLogin";

/** 搜索结果番剧实体 */
export type BilibiliSearchBangumiResultEntity = {
	/**
	 * 结果类型
	 *
	 * + media_bangumi 番剧
	 * + media_ft 影视
	 */
	type: string;
	/** 剧集mdid */
	media_id: number;
	/** 剧集ssid */
	season_id: number;
	/**
	 * 剧集标题
	 *
	 * 关键字存在<em>搜索的关键字</em>
	 */
	title: string;
	/**
	 * 剧集原名
	 *
	 * 关键字存在<em>搜索的关键字</em>
	 */
	org_title: string;
	/**
	 * 剧集封面url
	 */
	cover: string;
	/**
	 * 剧集类型
	 * + 1 番剧
	 * + 2 电影
	 * + 3 纪录片
	 * + 4 国创
	 * + 5 电视剧
	 * + 7 综艺
	 */
	media_type: number;
	/**
	 * 地区
	 */
	areas: string;
	/**
	 * 风格
	 */
	styles: string;
	/**
	 * 声优
	 */
	cv: string;
	/**
	 * 制作组
	 */
	staff: string;
	/**
	 * 作用尚不明确
	 * @default 0
	 */
	play_state: number;
	/**
	 * 剧集重定向url
	 */
	goto_url: string;
	/**
	 * 简介
	 */
	desc: string;
	/**
	 * 角标有无
	 *
	 * + 2 无
	 * + 13 有
	 */
	corner: number;
	/**
	 * 开播时间(时间戳)
	 */
	pubtime: number;
	/**
	 * @default 2
	 */
	media_mode: number;
	/**
	 * @default false
	 */
	is_avid: boolean;
	/**
	 * 开播时间重写信息
	 *
	 * 优先级高于pubtime
	 */
	fix_pubtime_str: string;
	/**
	 * 评分信息
	 */
	media_score: {
		/**
		 * 总计评分人数
		 */
		user_count: number;
		/**
		 * 评分
		 */
		score: number;
	} | null;
	/**
	 * 关键字匹配类型
	 */
	hit_columns: string[] | null;
	/**
	 *
	 */
	all_net_name: string;
	/**
	 *
	 */
	all_net_icon: string;
	/**
	 *
	 */
	all_net_url: string;
	/**
	 * 角标内容
	 */
	angle_title: string;
	/**
	 * 角标颜色
	 *
	 * + 0 红色
	 * + 2 橙色
	 */
	angle_color: number;
	/**
	 * 剧集标志信息
	 */
	display_info: any[];
	/**
	 * 关键字匹配分集标题的分集epid
	 *
	 * 多个用,分隔
	 */
	hit_epids: string;
	/**
	 * 剧集ssid
	 */
	pgc_season_id: number;
	/**
	 * 剧集类型
	 *
	 * + 1 番剧
	 * + 2 电影
	 * + 3 纪录片
	 * + 4 国创
	 * + 5 电视剧
	 * + 7 综艺
	 * +
	 */
	season_type: number;
	/**
	 * 剧集类型文字
	 */
	season_type_name: string;
	/**
	 * 分集选择按钮风格
	 *
	 * + horizontal 横排式
	 * + grid 按钮式
	 **/
	selection_style: string;
	/**
	 * 结果匹配的分集数
	 */
	ep_size: number;
	/**
	 * 剧集重定向url
	 */
	url: string;
	/**
	 * 观看按钮文字
	 */
	button_text: string;
	/**
	 * 是否追番	需要登录(SESSDATA) 未登录则恒为0
	 *
	 * + 0 否
	 * + 1 是
	 */
	is_follow: number;
	/**
	 * 观看按钮文字
	 * @default 1
	 */
	is_selection: number;
	/**
	 * 结果匹配的分集信息
	 */
	eps: {
		/**
		 * 分集epid
		 */
		id: number;
		/**
		 * 分集封面url
		 */
		cover: string;
		/**
		 * 完整标题
		 */
		title: string;
		/**
		 * 分集重定向url
		 */
		url: string;
		/**
		 * 空
		 */
		release_date: string;
		/**
		 * 分集标志
		 */
		badges: BilibiliSearchBangumiResultEntity["badges"];
		/**
		 * 短标题
		 */
		index_title: string;
		/**
		 * 单集标题
		 */
		long_title: string;
	}[];
	/**
	 * 剧集标志信息
	 */
	badges: {
		/**
		 * 夜间背景颜色
		 */
		bg_color_night: string;
		/**
		 * 剧集标志
		 */
		text: string;
		/**
		 * 背景颜色
		 */
		border_color: string;
		/**
		 * @default 1
		 */
		bg_style: number;
		/**
		 * 文字颜色
		 */
		text_color: string;
		/**
		 * 背景颜色
		 */
		bg_color: string;
		/**
		 * 夜间文字颜色
		 */
		text_color_night: string;
		/**
		 * 夜间背景颜色
		 */
		border_color_night: string;
	}[];
};

/**
 * 搜索相关的api
 */
export const BilibiliSearchApi = {
	/**
	 * 获取输入框的placeholder的热点关键词
	 */
	async getSearchInputPlaceholder() {
		let getResponse = await httpx.get(
			"https://api.bilibili.com/x/web-interface/wbi/search/default",
			{
				fetch: true,
				headers: {
					accept: "application/json, text/plain, */*",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
					"cache-control": "no-cache",
					pragma: "no-cache",
					"sec-ch-ua": '""',
					"sec-ch-ua-mobile": "?1",
					"sec-ch-ua-platform": '""',
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site",
				},
				allowInterceptConfig: false,
			}
		);
		if (!getResponse.status) {
			return;
		}
		let responseData = utils.toJSON(getResponse.data.responseText);
		if (!BilibiliResponseCheck.isWebApiSuccess(responseData)) {
			return;
		}
		return responseData.data as {
			goto_type: number;
			goto_value: string;
			id: number;
			name: string;
			seid: string;
			show_name: string;
			type: 0;
			url: string;
		};
	},
	/**
	 * 从代理服务器拉取番剧搜索结果
	 */
	async getBangumiSearchResult(config: {
		/** 服务器 */
		host: string;
		/** 搜索关键词 */
		keyword: string;
		/** 搜索区域 */
		area: "hk" | "tw" | "th";
	}) {
		let searchParamsData = {
			search_type: "media_bangumi",
			keyword: config.keyword,
			from_client: "BROWSER",
			drm_tech_type: "2",
			module: "bangumi",
			area: config.area.toLowerCase(),
			access_key: BilibiliQrCodeLogin.getAccessToken(),
		};
		let url = `https://${
			config.host
		}/x/web-interface/search/type?${utils.toSearchParamsStr(searchParamsData)}`;

		let getResponse = await httpx.get(url, {
			fetch: false,
			headers: {
				"User-Agent": utils.getRandomAndroidUA(),
			},
		});

		if (!getResponse.status) {
			return;
		}
		let data = utils.toJSON(getResponse.data.responseText);
		if (!BilibiliResponseCheck.isWebApiSuccess(data)) {
			// 检测请求的数据是否是成功的
			log.error(`请求失败，当前代理服务器信息：${JSON.stringify(config.host)}`);
			log.error(`请求失败，当前请求的响应信息：${JSON.stringify(data)}`);
			return;
		}
		return data.data.result as BilibiliSearchBangumiResultEntity[];
	},
};
