import { DOMUtils, addStyle, log, utils } from "@/env";
import blockCSS from "./block.css?raw";
import { PopsPanel } from "@/setting/panel";
import Qmsg from "qmsg";
import { DouYinUrlUtils } from "@/utils/DouYinUrlUtils";

export const MDouYinShareChallenge = {
	init() {
		addStyle(blockCSS);
		PopsPanel.onceExec("m-dy-share-challenge-coverTopJump", () => {
			this.coverTopJump();
		});
		PopsPanel.execMenuOnce("m-dy-share-challenge-coverVideoCard", () => {
			this.coverVideoCard();
		});
	},
	/**
	 * 阻止上面区域点击跳转至下载页面
	 */
	coverTopJump() {
		log.info("阻止上面区域点击跳转至下载页面");
		DOMUtils.on(
			document,
			"click",
			".challenge-body",
			(event) => {
				utils.preventEvent(event);
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 覆盖视频卡片点击事件
	 */
	coverVideoCard() {
		log.info("覆盖视频卡片点击事件");
		DOMUtils.on(
			document,
			"click",
			"#pagelet-worklist li.item",
			(event) => {
				utils.preventEvent(event);
				let $clikc = event.target as HTMLDivElement;
				let rectFiber = utils.getReactObj($clikc).reactFiber;
				if (!rectFiber) {
					log.error("获取reactFiber失败");
					Qmsg.error("获取reactFiber失败");
					return;
				}
				let listData = rectFiber.return.return.return.memoizedProps.listData;
				let index = rectFiber.index;
				let currentList = listData[index];
				let url = DouYinUrlUtils.getVideoUrl(currentList["aweme_id"]);
				window.open(url, "_blank");
			},
			{
				capture: true,
			}
		);
	},
};
