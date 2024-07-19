import { httpx, utils } from "@/env";
import Qmsg from "qmsg";

interface Api_Component_Play_Playinfo {
	/** 用户头像src */
	avatar: string;
	/** 用户名 */
	nickname: string;
	/** 内容 */
	text: string;
	/** 标题 */
	title: string;
	/** 播放链接信息 */
	urls: {
		[key: string]: string;
	};
}

export const WeiBoApi = {
	/**
	 * 获取组件播放信息
	 * @param oid 格式：xxxx:xxxxxxxxxxx
	 */
	async component(oid: string) {
		let postParams = {
			page: "/tv/show/" + oid,
		};
		let postData = {
			data: JSON.stringify({ Component_Play_Playinfo: { oid: oid } }),
		};
		let api = `https://www.weibo.com/tv/api/component?${utils.toSearchParamsStr(
			postParams
		)}`;
		let postResp = await httpx.post(api, {
			data: utils.toSearchParamsStr(postData),
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/x-www-form-urlencoded",
				Host: "www.weibo.com",
				Origin: "https://www.weibo.com",
				"Page-Referer": postParams.page,
				Referer: "https://www.weibo.com" + postParams.page,
				"User-Agent": utils.getRandomPCUA(),
			},
		});
		if (!postResp.status) {
			return;
		}
		let data = utils.toJSON(postResp.data.responseText);
		if (data["code"] !== "100000") {
			Qmsg.error("获取播放信息失败");
			return;
		}
		let Component_Play_Playinfo = data["data"][
			"Component_Play_Playinfo"
		] as Api_Component_Play_Playinfo;
		return Component_Play_Playinfo;
	},
};
