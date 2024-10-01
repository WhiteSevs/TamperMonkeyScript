import { DOMUtils, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtils } from "@/utils/CommonUtils";
import { VueUtils } from "@/utils/VueUtils";

export const WeiBoCardArticle = {
	init() {
		PopsPanel.execMenuOnce("card_weibo_com__autoExpandFullArticle", () => {
			return this.autoExpandFullArticle();
		});
		PopsPanel.execMenuOnce("card_weibo_com__blockComment", () => {
			return this.blockComment();
		});
		PopsPanel.execMenuOnce("card_weibo_com__repairArticleUserHomeJump", () => {
			this.repairArticleUserHomeJump();
		});
	},
	/**
	 * 自动展开全文
	 */
	autoExpandFullArticle() {
		log.info("自动展开全文");
		return [
			addStyle(/*css*/ `
			.m-container-max .f-art,
			.m-container-max .art-con-new{
				height: unset !important;
				overflow: unset !important;
			}    
			`),
			CommonUtils.addBlockCSS(".m-container-max .f-art-opt"),
		];
	},
	/**
	 * 屏蔽评论
	 */
	blockComment() {
		log.info("【屏蔽】评论");
		return CommonUtils.addBlockCSS(".m-container-max .m-panel1");
	},
	/**
	 * 修复文章用户主页跳转
	 */
	repairArticleUserHomeJump() {
		log.info("修复文章用户主页跳转");
		DOMUtils.on(
			document,
			"click",
			".m-feed .f-art-user-v2",
			(event) => {
				let $click = event.target as HTMLDivElement;
				let jQueryEventName = Object.keys($click).find((key) =>
					key.startsWith("jQuery")
				);
				if (!jQueryEventName) {
					return;
				}
				utils.preventEvent(event);
				let jQueryEvent = ($click as any)[jQueryEventName];
				let data = jQueryEvent["events"]["click"][0]["data"];
				log.success(["跳转信息：", data]);
				let url = data["url"] || data["target_url"];
				window.open(url, "_blank");
			},
			{
				capture: true,
			}
		);
	},
};
