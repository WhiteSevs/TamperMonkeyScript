import { httpx, utils } from "@/env";
import { BilibiliApiCheck } from "./BilibiliApiCheck";

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
		if (!BilibiliApiCheck.isWebApiSuccess(responseData)) {
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
};
