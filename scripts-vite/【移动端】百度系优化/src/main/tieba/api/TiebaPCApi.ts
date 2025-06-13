import { DOMUtils, httpx, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";

export const TiebaPCApi = {
	/**
	 * 获取用户所有关注的吧
	 */
	async getUserAllLinkForum() {
		let result: {
			/** 吧名 */
			forumName: string;
			/** 吧id */
			forumId: string;
			/** tbs值 */
			tbs: string;
		}[] = [];
		let gbkEncoder = new utils.GBKEncoder();
		/** 页码 */
		let page = 1;
		while (true) {
			let searchParamsData = {
				v: Date.now(),
				pn: page,
			};
			let url = `https://tieba.baidu.com/f/like/mylike?${utils.toSearchParamsStr(
				searchParamsData
			)}`;
			let getResponse = await httpx.get(url, {
				fetch: true,
			});
			if (!getResponse.status) {
				break;
			}
			let doc = DOMUtils.parseHTML(getResponse.data.responseText, true, true);
			let linkForumInfoList = Array.from(
				doc.querySelectorAll(".forum_table span[balvname]")
			)
				.map((item) => {
					/** 吧名 */
					let forumName = item.getAttribute("balvname");
					/** 吧id */
					let forumId = item.getAttribute("balvid");
					/** tbs值 */
					let tbs = item.getAttribute("tbs");
					if (forumName == null) {
						return;
					}
					if (forumId == null) {
						return;
					}
					if (tbs == null) {
						return;
					}
					forumName = gbkEncoder.decode(forumName);
					return {
						forumName,
						forumId,
						tbs,
					};
				})
				.filter((item) => item != null);

			result = result.concat(linkForumInfoList);

			let $nextPage = Array.from(
				doc.querySelectorAll<HTMLAnchorElement>("#j_pagebar .pagination a[href]")
			).find(($anchor) => {
				return $anchor.innerText.includes("下一页");
			});
			if ($nextPage == null) {
				// 没有其它页了，退出循环
				break;
			} else {
				let nextPageUrl = CommonUtil.fixUrl($nextPage.href);
				let nextPageUrlObj = new URL(nextPageUrl);
				let nextPagePn = new URLSearchParams(nextPageUrlObj.search);
				if (nextPagePn.has("pn")) {
					page = parseInt(nextPagePn.get("pn")!);
				} else {
					// 未获取到pn，退出循环
					break;
				}
			}
			await utils.sleep(500);
		}
		return result;
	},
};